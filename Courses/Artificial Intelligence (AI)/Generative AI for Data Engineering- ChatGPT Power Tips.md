---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: generative-ai-for-data-engineering-chatgpt-power-tips
url: "https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips"
duration_minutes: 68
duration: 1h 8m
level: Intermediate
updated: 12/12/2024
learners: 7976
skills:
  - Data Engineering
  - Artificial Intelligence (AI)
  - ChatGPT
  - Prompt Engineering
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D4D0DAQFXQmNj82ohNw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1732151706004?e=2147483647&amp;v=beta&amp;t=0BJqMC7BdeLMRy4P13hAme1XuUQfjlv94EmoCSSSFfQ"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Explore AI for Data Engineering]]'
prev_courses:
  - '[[Using AI to Improve Ops for Your Data Organization]]'
next_courses:
  - '[[Introduction To Ai Native Vector Databases]]'
path_nav: '[{"path":"Explore AI for Data Engineering","position":4,"total":8,"prev":"Using AI to Improve Ops for Your Data Organization","next":"Introduction To Ai Native Vector Databases"}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - topic/database-management
  - topic/software-development
  - skill/data-engineering
  - skill/artificial-intelligence-ai
  - skill/chatgpt
  - skill/prompt-engineering
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Generative%20AI%20for%20Data%20Engineering-%20ChatGPT%20Power%20Tips.md)

![Generative AI for Data Engineering: ChatGPT Power Tips](https://media.licdn.com/dms/image/v2/D4D0DAQFXQmNj82ohNw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1732151706004?e=2147483647&amp;v=beta&amp;t=0BJqMC7BdeLMRy4P13hAme1XuUQfjlv94EmoCSSSFfQ)

# Generative AI for Data Engineering: ChatGPT Power Tips

> This practical course helps you harness the power of ChatGPT to streamline your coding tasks, automate documentation, and enhance data workflows in PySpark and Databricks. Azure cloud solution architect Deepak Goyal shows you advanced prompt engineering techniques to generate precise and useful code, optimize SQL queries, and create insightful data visualizations. Plus, dive into essential securit

> [LinkedIn Learning](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips) | 1h 8m | Intermediate | 8K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Introduction to ChatGPT for data engineering](#introduction-to-chatgpt-for-data-engineering)
  - [Setting expectations](#setting-expectations)
- [**1. Prompt Engineering Basics**](#1-prompt-engineering-basics) (6 videos)
  - [Understanding prompt engineering](#understanding-prompt-engineering)
  - [Writing effective prompts for coding tasks](#writing-effective-prompts-for-coding-tasks)
  - [Common pitfalls and how to avoid them](#common-pitfalls-and-how-to-avoid-them)
  - [Refining prompts for better results](#refining-prompts-for-better-results)
  - [Using contextual prompts](#using-contextual-prompts)
  - [Combining multiple prompts for complex tasks](#combining-multiple-prompts-for-complex-tasks)
- [**2. Practical Applications of ChatGPT in Data Engineering**](#2-practical-applications-of-chatgpt-in-data-engineering) (6 videos)
  - [Generating data engineering code with ChatGPT](#generating-data-engineering-code-with-chatgpt)
  - [Automating documentation with ChatGPT](#automating-documentation-with-chatgpt)
  - [Debugging data pipelines using ChatGPT](#debugging-data-pipelines-using-chatgpt)
  - [Optimizing SQL queries with ChatGPT](#optimizing-sql-queries-with-chatgpt)
  - [Using ChatGPT for data cleaning scripts](#using-chatgpt-for-data-cleaning-scripts)
  - [ChatGPT for data analysis and insights](#chatgpt-for-data-analysis-and-insights)
- [**3. Advanced Applications in PySpark and Databricks**](#3-advanced-applications-in-pyspark-and-databricks) (3 videos)
  - [Generating PySpark code with ChatGPT](#generating-pyspark-code-with-chatgpt)
  - [Optimizing PySpark jobs using ChatGPT](#optimizing-pyspark-jobs-using-chatgpt)
  - [Using ChatGPT in Databricks notebooks](#using-chatgpt-in-databricks-notebooks)
- [**4. Security and Ethical Considerations**](#4-security-and-ethical-considerations) (3 videos)
  - [Data privacy and security with ChatGPT](#data-privacy-and-security-with-chatgpt)
  - [Ethical AI usage in data engineering](#ethical-ai-usage-in-data-engineering)
  - [Ensuring compliance and data governance](#ensuring-compliance-and-data-governance)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### Introduction to ChatGPT for data engineering
> [LinkedIn Learning](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/introduction-to-chatgpt-for-data-engineering?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/introduction-to-chatgpt-for-data-engineering?u=76281980&t=0)** - [Deepak] Do you want to become a data engineer who think fast, code faster, and debug fastest?
>
> **[0:06](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/introduction-to-chatgpt-for-data-engineering?u=76281980&t=6)** Then, how to use ChatGPT effectively is the most important skills to have.
>
> **[0:12](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/introduction-to-chatgpt-for-data-engineering?u=76281980&t=12)** This course is designed to prepare you to utilize the power of ChatGPT to become a top-notch data engineer.
>
> **[0:20](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/introduction-to-chatgpt-for-data-engineering?u=76281980&t=20)** You will learn prompt engineering, how to write context-based prompts, use ChatGPT for coding, debugging, optimize the code, and for documentation purpose.
>
> **[0:32](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/introduction-to-chatgpt-for-data-engineering?u=76281980&t=32)** Hi, I'm Deepak Goyal, a Senior Certified Microsoft Solution Architect and Trainer.
>
> **[0:38](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/introduction-to-chatgpt-for-data-engineering?u=76281980&t=38)** Join me to accelerate your career in the data world.
>
> **[0:42](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/introduction-to-chatgpt-for-data-engineering?u=76281980&t=42)** Let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (3), [[ChatGPT]] (3), power (1), [[Prompt Engineering]] (1), [[Debugging]] (1)
> **Speakers:** - [deepak] (1)

#### Setting expectations
> [LinkedIn Learning](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/setting-expectations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/setting-expectations?u=76281980&t=0)** - [Narrator] It is important to understand that what is a prerequisite knowledge needed to learn this ChatGPT for Data Engineering course.
>
> **[0:08](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/setting-expectations?u=76281980&t=8)** The good news is that you just need basic knowledge around the ChatGPT and data engineering.
>
> **[0:15](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/setting-expectations?u=76281980&t=15)** In this course, we are going to start from learning how to write good prompts as a data engineer, and then we will jump to the ChatGPT directly to do it practically.
>
> **[0:29](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/setting-expectations?u=76281980&t=29)** I assume that you already have a ChatGPT account, and you know how to use it.
>
> **[0:35](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/setting-expectations?u=76281980&t=35)** It is not mandatory to have paid ChatGPT account.
>
> **[0:39](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/setting-expectations?u=76281980&t=39)** It will work for free account as well.
>
> **[0:42](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/setting-expectations?u=76281980&t=42)** Remember, it's not just a theory, but a practical driven course, so you can follow along with me.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ChatGPT]] (5), [[Data Engineering]] (2), data (1)
> **Definitions:** is a  (1)
> **Prerequisites:** prerequisite (1)
> **Speakers:** - [narrator] (1)


### 1. Prompt Engineering Basics

[↑ Back to Table of Contents](#table-of-contents)

#### Understanding prompt engineering
> [LinkedIn Learning](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/understanding-prompt-engineering?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/understanding-prompt-engineering?u=76281980&t=0)** - [Instructor] Did you know that the way you ask a question can completely change the answer?
>
> **[0:06](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/understanding-prompt-engineering?u=76281980&t=6)** Welcome to the world of prompt engineering, where mastering your question can help you to use the ChatGPT to its full potential.
>
> **[0:16](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/understanding-prompt-engineering?u=76281980&t=16)** Let's understand what is prompt engineering.
>
> **[0:20](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/understanding-prompt-engineering?u=76281980&t=20)** You probably have used the ChatGPT for some code generation or might have used for finding out a error in your code for debugging purpose, or you might have used it for some kind of an optimization, but what if I told you that the quality of their responses depends largely on how you ask?
>
> **[0:46](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/understanding-prompt-engineering?u=76281980&t=46)** That's exactly is prompt engineering.
>
> **[0:50](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/understanding-prompt-engineering?u=76281980&t=50)** Let's understand it in little more detail.
>
> **[0:53](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/understanding-prompt-engineering?u=76281980&t=53)** It's basically is the art and science of crafting prompts.
>
> **[0:59](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/understanding-prompt-engineering?u=76281980&t=59)** When I say prompt, it means you can consider it as like question or an instruction which you are giving to the AI model.
>
> **[1:09](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/understanding-prompt-engineering?u=76281980&t=69)** That is ChatGPT.
>
> **[1:12](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/understanding-prompt-engineering?u=76281980&t=72)** The idea is simple.
>
> **[1:14](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/understanding-prompt-engineering?u=76281980&t=74)** The better and the more detailed your prompts are, the better the response you will get.
>
> **[1:22](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/understanding-prompt-engineering?u=76281980&t=82)** I mean, you can think like the ChatGPT is a junior data engineer in your team.
>
> **[1:29](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/understanding-prompt-engineering?u=76281980&t=89)** If you give them the vague instructions, like, "Write PySpark script," you'd probably end up with something generic or an incomplete answer.
>
> **[1:42](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/understanding-prompt-engineering?u=76281980&t=102)** But if you give them a specific task, like, "Write a PySpark script that reads a CSU file, remove the null values, and perform deduplication," now they exactly know what you want.
>
> **[2:02](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/understanding-prompt-engineering?u=76281980&t=122)** In the world of data engineering, efficiency and precisions are the key, and that's why the prompt engineering becomes more important.
>
> **[2:12](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/understanding-prompt-engineering?u=76281980&t=132)** Whether you are automating a task, writing the scripts, or trying to optimize the workflow, what you are looking for is fast and accurate result, and prompt engineering can help you to get there.
>
> **[2:30](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/understanding-prompt-engineering?u=76281980&t=150)** Let's take a real-world example.
>
> **[2:33](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/understanding-prompt-engineering?u=76281980&t=153)** Suppose you're working on a time-sensitive project, and you need to clean up a dataset.
>
> **[2:42](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/understanding-prompt-engineering?u=76281980&t=162)** Now if you ask the ChatGPT saying, "Help me clean my data," but don't you feel that this is too broad and to generic to ask from ChatGPT?
>
> **[2:57](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/understanding-prompt-engineering?u=76281980&t=177)** However, instead of this, if you give a very targeted prompt, like, "Generate the Python code to clean a dataset by removing duplicates, handling nulls, and normalizing the column names," now you are going to get a response which is precise and very near to what exactly you are looking for.
>
> **[3:27](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/understanding-prompt-engineering?u=76281980&t=207)** This is the heart of prompt engineering, transforming your broad and general requests into targeted and precise instructions.
>
> **[3:39](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/understanding-prompt-engineering?u=76281980&t=219)** As I said that prompt engineering is a science as well, right?
>
> **[3:44](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/understanding-prompt-engineering?u=76281980&t=224)** So your good prompt should contain some of these common components.
>
> **[3:50](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/understanding-prompt-engineering?u=76281980&t=230)** For example, the clarity.
>
> **[3:52](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/understanding-prompt-engineering?u=76281980&t=232)** Your prompt should be clear and specific as far as possible.
>
> **[3:58](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/understanding-prompt-engineering?u=76281980&t=238)** For example, a way could be, "Write a Python function."
>
> **[4:03](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/understanding-prompt-engineering?u=76281980&t=243)** Clear instruction would be, "Write a Python function that read the CSV and filter out rules with null values."
>
> **[4:12](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/understanding-prompt-engineering?u=76281980&t=252)** Here we are giving the complete clarity in our instruction.
>
> **[4:19](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/understanding-prompt-engineering?u=76281980&t=259)** Another one is context.
>
> **[4:21](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/understanding-prompt-engineering?u=76281980&t=261)** Sometimes what you are asking has a context attached to it.
>
> **[4:27](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/understanding-prompt-engineering?u=76281980&t=267)** When you are giving an instruction or asking a question, if you give the context, it helps the ChatGPT to understand your need in that specific context, and it will try to give you the answer accordingly.
>
> **[4:45](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/understanding-prompt-engineering?u=76281980&t=285)** For example, if you're trying to optimize a PySpark job, then you might be trying to optimize from the memory perspective, so you can specifically give the context like, "Optimize this PySpark job to reduce memory usage during the join operation."
>
> **[5:07](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/understanding-prompt-engineering?u=76281980&t=307)** It might be possible that, you know, you're trying to optimize for the time context, so then you can change this prompt from the time context.
>
> **[5:18](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/understanding-prompt-engineering?u=76281980&t=318)** Maybe saying, "Optimize to reduce the total execution time."
>
> **[5:23](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/understanding-prompt-engineering?u=76281980&t=323)** Another thing would be is the constraint, that is, set the rule.
>
> **[5:29](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/understanding-prompt-engineering?u=76281980&t=329)** Maybe you are expecting ChatGPT to write SQL code for you, but you need it for very specifically ANSI standard.
>
> **[5:38](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/understanding-prompt-engineering?u=76281980&t=338)** So you can push that just by adding that specific constraint, that I need in this specific format only.
>
> **[5:48](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/understanding-prompt-engineering?u=76281980&t=348)** Well, the best thing about working with AI is its ability to iterate quickly.
>
> **[5:56](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/understanding-prompt-engineering?u=76281980&t=356)** Sometimes it might be a situation that you cannot give a very complex prompt at the very start, so you can start with the basic prompt, and as you get the responses, you can keep on asking, making more changes in it, and that's how you can refine it for some sharper responses, and eventually, you will get your result.
>
> **[6:25](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/understanding-prompt-engineering?u=76281980&t=385)** Now you know what prompt engineering is and why it is crucial.
>
> **[6:30](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/understanding-prompt-engineering?u=76281980&t=390)** In the next video, we'll take it further and explore how to write effective prompts for coding tasks.
>
> **[6:39](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/understanding-prompt-engineering?u=76281980&t=399)** Let's see you there.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Prompt Engineering]] (8), [[ChatGPT]] (8), prompt (7), [[PySpark]] (4), [[Python (Programming Language)|Python]] (3)
> **Env Vars:** csu (1), csv (1), sql (1), ansi (1)
> **CLI Commands:** python (3)
> **Analogies:** for example (3)
> **Definitions:** is a  (2)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Writing effective prompts for coding tasks
> [LinkedIn Learning](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/writing-effective-prompts-for-coding-tasks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/writing-effective-prompts-for-coding-tasks?u=76281980&t=0)** - [Instructor] Imagine having a coding assistant who understand exactly what you need and delivers code on demand.
>
> **[0:09](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/writing-effective-prompts-for-coding-tasks?u=76281980&t=9)** That's what ChatGPT can be.
>
> **[0:12](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/writing-effective-prompts-for-coding-tasks?u=76281980&t=12)** Whether you are working with the Python, SQL, or a PySpark, knowing how to frame your prompts will save you hours of coding time and debugging.
>
> **[0:24](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/writing-effective-prompts-for-coding-tasks?u=76281980&t=24)** Let's break it down step by step with some real-world examples that you can apply right away.
>
> **[0:32](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/writing-effective-prompts-for-coding-tasks?u=76281980&t=32)** With working with the ChatGPT for coding task, the quality of your code output depends largely on how well you have defined your prompt.
>
> **[0:42](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/writing-effective-prompts-for-coding-tasks?u=76281980&t=42)** The clear and more precise your request, the better the response you'll get.
>
> **[0:49](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/writing-effective-prompts-for-coding-tasks?u=76281980&t=49)** Let's take an example.
>
> **[0:51](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/writing-effective-prompts-for-coding-tasks?u=76281980&t=51)** Imagine that you are writing a SQL query.
>
> **[0:56](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/writing-effective-prompts-for-coding-tasks?u=76281980&t=56)** Now someone can write a very basic prompt like, "Write a SQL query."
>
> **[1:01](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/writing-effective-prompts-for-coding-tasks?u=76281980&t=61)** We'll talk about an effective prompt.
>
> **[1:04](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/writing-effective-prompts-for-coding-tasks?u=76281980&t=64)** A effective prompt could be is you are giving the context.
>
> **[1:09](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/writing-effective-prompts-for-coding-tasks?u=76281980&t=69)** For example, "For MySQL," so here the context which you have given is the MySQL.
>
> **[1:16](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/writing-effective-prompts-for-coding-tasks?u=76281980&t=76)** So ChatGPT will understand that the query which you need to write is belongs to MySQL.
>
> **[1:25](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/writing-effective-prompts-for-coding-tasks?u=76281980&t=85)** So the syntax will be according to that.
>
> **[1:29](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/writing-effective-prompts-for-coding-tasks?u=76281980&t=89)** Then you are giving the exact information, like you want to select these specific column like customer_id, sum order_value, and you wanted to group it based on the customer_id.
>
> **[1:45](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/writing-effective-prompts-for-coding-tasks?u=76281980&t=105)** And then you have given the condition as well.
>
> **[1:48](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/writing-effective-prompts-for-coding-tasks?u=76281980&t=108)** So once you give this precise information, you will get the result which is very near to your accurate, and you don't have to put lot of time over it to fine-tune it further.
>
> **[2:05](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/writing-effective-prompts-for-coding-tasks?u=76281980&t=125)** Let's take in another example.
>
> **[2:07](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/writing-effective-prompts-for-coding-tasks?u=76281980&t=127)** Let's say you are writing a Python script.
>
> **[2:10](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/writing-effective-prompts-for-coding-tasks?u=76281980&t=130)** Your basic prompt would be, "Write a Python script to get the data from an API."
>
> **[2:17](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/writing-effective-prompts-for-coding-tasks?u=76281980&t=137)** Now again, this would have a some context that you weren't writing a script, and it should be an API calling, but you can make it more effective.
>
> **[2:29](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/writing-effective-prompts-for-coding-tasks?u=76281980&t=149)** How?
>
> **[2:30](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/writing-effective-prompts-for-coding-tasks?u=76281980&t=150)** You just say that, "Use the requests library."
>
> **[2:34](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/writing-effective-prompts-for-coding-tasks?u=76281980&t=154)** Now here you, you're restricting the ChatGPT to use a specific library.
>
> **[2:39](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/writing-effective-prompts-for-coding-tasks?u=76281980&t=159)** That is the requests library only, and you're saying that the API is a GitHub.
>
> **[2:46](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/writing-effective-prompts-for-coding-tasks?u=76281980&t=166)** So again, it will write the code accordingly.
>
> **[2:49](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/writing-effective-prompts-for-coding-tasks?u=76281980&t=169)** And lastly, you are saying it, you need it as in pandas.
>
> **[2:53](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/writing-effective-prompts-for-coding-tasks?u=76281980&t=173)** So it will effectively use the pandas library as well.
>
> **[2:57](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/writing-effective-prompts-for-coding-tasks?u=76281980&t=177)** So when you give such an effective prompt, eventually, you will get the result in exactly the way you are thinking in your mind.
>
> **[3:08](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/writing-effective-prompts-for-coding-tasks?u=76281980&t=188)** Now you have understood how to write an effective prompt and its importance.
>
> **[3:14](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/writing-effective-prompts-for-coding-tasks?u=76281980&t=194)** Now let's just go to the next video, where we'll understand little more about our prompts.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** prompt (7), [[ChatGPT]] (4), [[Python (Programming Language)|Python]] (3), [[SQL]] (3), [[MySQL]] (3)
> **CLI Commands:** python (3), mysql (3), make (1)
> **Env Vars:** sql (3), api (3)
> **Code Identifiers:** customer_id (2), order_value (1)
> **Analogies:** imagine (2), for example (1)
> **Cross-References:** next video (1)
> **Tools:** github (1)
> **UI Navigation:** go to (1)

#### Common pitfalls and how to avoid them
> [LinkedIn Learning](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/common-pitfalls-and-how-to-avoid-them?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/common-pitfalls-and-how-to-avoid-them?u=76281980&t=0)** - [Instructor] Have you ever felt like you are just not getting the answers you need from ChatGPT?
>
> **[0:08](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/common-pitfalls-and-how-to-avoid-them?u=76281980&t=8)** It's not always the AI's fault.
>
> **[0:11](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/common-pitfalls-and-how-to-avoid-them?u=76281980&t=11)** The problem could be the way you are asking the question.
>
> **[0:15](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/common-pitfalls-and-how-to-avoid-them?u=76281980&t=15)** Let's understand some of the common mistakes we can avoid while asking the question to the ChatGPT.
>
> **[0:23](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/common-pitfalls-and-how-to-avoid-them?u=76281980&t=23)** Mistake could be asking too vague question.
>
> **[0:27](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/common-pitfalls-and-how-to-avoid-them?u=76281980&t=27)** This is one of the most common mistakes people make when working with ChatGPT.
>
> **[0:34](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/common-pitfalls-and-how-to-avoid-them?u=76281980&t=34)** For example, you have to ask for a Python script.
>
> **[0:38](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/common-pitfalls-and-how-to-avoid-them?u=76281980&t=38)** Rather than just asking a vague question, "Write a Python script", you can always add the more specification.
>
> **[0:47](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/common-pitfalls-and-how-to-avoid-them?u=76281980&t=47)** What exactly you want to get out of this script, you can elaborate it more like you are reading a CSV file, you want this script to be smart enough to remove the rows with missing data, and you want to eventually save to a new file.
>
> **[1:04](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/common-pitfalls-and-how-to-avoid-them?u=76281980&t=64)** So you can give a more specification.
>
> **[1:09](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/common-pitfalls-and-how-to-avoid-them?u=76281980&t=69)** Problem number two could be is asking for too much in our one instruction or a one prompt itself.
>
> **[1:18](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/common-pitfalls-and-how-to-avoid-them?u=76281980&t=78)** For example, you want an entire result like connect to an API, fetching the data, clean it, analyze it, and visualize in a graph.
>
> **[1:29](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/common-pitfalls-and-how-to-avoid-them?u=76281980&t=89)** Now this will be too much information in a single prompt.
>
> **[1:33](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/common-pitfalls-and-how-to-avoid-them?u=76281980&t=93)** Rather then, what you can do is you can break it down further into a one step at a time.
>
> **[1:40](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/common-pitfalls-and-how-to-avoid-them?u=76281980&t=100)** For example, you can say, first, let's connect to an API and fetch the data.
>
> **[1:47](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/common-pitfalls-and-how-to-avoid-them?u=76281980&t=107)** Maybe step number two, clean the data.
>
> **[1:50](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/common-pitfalls-and-how-to-avoid-them?u=76281980&t=110)** Step number three would be analyze it.
>
> **[1:52](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/common-pitfalls-and-how-to-avoid-them?u=76281980&t=112)** Step number four, visualize it.
>
> **[1:55](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/common-pitfalls-and-how-to-avoid-them?u=76281980&t=115)** So sometimes it's not a right strategy to ask everything in a one shot.
>
> **[2:01](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/common-pitfalls-and-how-to-avoid-them?u=76281980&t=121)** It would be better that we break it down into a multiple steps.
>
> **[2:07](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/common-pitfalls-and-how-to-avoid-them?u=76281980&t=127)** Another mistake could be is not providing the context.
>
> **[2:12](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/common-pitfalls-and-how-to-avoid-them?u=76281980&t=132)** When I say not providing the context, it means that you just say without having any further detail given.
>
> **[2:19](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/common-pitfalls-and-how-to-avoid-them?u=76281980&t=139)** For example, "Optimize this SQL query".
>
> **[2:23](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/common-pitfalls-and-how-to-avoid-them?u=76281980&t=143)** Now, if I give you the query and I say just optimize the query, you can add a couple of context inside it, saying optimize for a PostgreSQL database, which is having millions of records by indexing the date column.
>
> **[2:40](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/common-pitfalls-and-how-to-avoid-them?u=76281980&t=160)** Now here you are specifically saying to our ChatGPT that this is the situation and please answer based on these circumstances.
>
> **[2:51](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/common-pitfalls-and-how-to-avoid-them?u=76281980&t=171)** So it's important to provide the context because ChatGPT otherwise just assuming something on its own.
>
> **[2:59](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/common-pitfalls-and-how-to-avoid-them?u=76281980&t=179)** Another mistake or I would say expectation is that you need a perfect code in a one go.
>
> **[3:07](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/common-pitfalls-and-how-to-avoid-them?u=76281980&t=187)** Probably that might not be the case most of the time.
>
> **[3:11](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/common-pitfalls-and-how-to-avoid-them?u=76281980&t=191)** It might be possible that you start with a well-contexted and detailed prompt as well.
>
> **[3:18](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/common-pitfalls-and-how-to-avoid-them?u=76281980&t=198)** And still after that, you won't get the exact expected output.
>
> **[3:23](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/common-pitfalls-and-how-to-avoid-them?u=76281980&t=203)** In that case, probably you have to give the further prompts to try to refine it more so that you eventually end up with the exact information you are looking for.
>
> **[3:36](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/common-pitfalls-and-how-to-avoid-them?u=76281980&t=216)** So sometimes it's not just a one prompt, but it might be the chaining of multiple prompts.
>
> **[3:42](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/common-pitfalls-and-how-to-avoid-them?u=76281980&t=222)** Another mistake could be ignoring the iterations.
>
> **[3:45](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/common-pitfalls-and-how-to-avoid-them?u=76281980&t=225)** As I said, not refining the prompt for a better result.
>
> **[3:50](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/common-pitfalls-and-how-to-avoid-them?u=76281980&t=230)** You have to iterate.
>
> **[3:52](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/common-pitfalls-and-how-to-avoid-them?u=76281980&t=232)** You have to try multiple times.
>
> **[3:54](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/common-pitfalls-and-how-to-avoid-them?u=76281980&t=234)** Sometimes you have to chain the multiple prompts, or sometimes you have to try multiple options and see that in which you are getting the better results.
>
> **[4:06](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/common-pitfalls-and-how-to-avoid-them?u=76281980&t=246)** Another realistic problem could be is you're not specifying the desired output format.
>
> **[4:13](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/common-pitfalls-and-how-to-avoid-them?u=76281980&t=253)** For example, you wanted to have a prompt like, "Help me optimize this process."
>
> **[4:19](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/common-pitfalls-and-how-to-avoid-them?u=76281980&t=259)** Now you are not clarifying it completely that in which specific language, in which specific library you want this problem to be solved.
>
> **[4:29](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/common-pitfalls-and-how-to-avoid-them?u=76281980&t=269)** So it's important that you give a little bit output format as well that I need it in specifically in this language and in this specific format.
>
> **[4:41](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/common-pitfalls-and-how-to-avoid-them?u=76281980&t=281)** For example, I said like, write a brief Python function using the Pandas.
>
> **[4:47](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/common-pitfalls-and-how-to-avoid-them?u=76281980&t=287)** Now that we have covered the common mistakes and we know how to avoid them, let's explore how we can combine the multiple prompts to handle the more complex task.
>
> **[5:02](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/common-pitfalls-and-how-to-avoid-them?u=76281980&t=302)** See you into the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** prompt (6), [[ChatGPT]] (5), data (4), [[Python (Programming Language)|Python]] (3), api (2)
> **Analogies:** for example (6)
> **CLI Commands:** python (3), make (1)
> **Env Vars:** api (2), csv (1), sql (1)
> **Documentation:** specification (2)
> **Cross-References:** next video (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### Refining prompts for better results
> [LinkedIn Learning](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/refining-prompts-for-better-results?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/refining-prompts-for-better-results?u=76281980&t=0)** - [Instructor] Have you ever got a response from ChatGPT that was good, but not that great?
>
> **[0:08](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/refining-prompts-for-better-results?u=76281980&t=8)** And what if I told you that a few small tweaks could turn a decent result into exactly what you need?
>
> **[0:16](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/refining-prompts-for-better-results?u=76281980&t=16)** This is nothing but a refining of your prompts.
>
> **[0:21](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/refining-prompts-for-better-results?u=76281980&t=21)** Let's understand why refining is essential.
>
> **[0:25](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/refining-prompts-for-better-results?u=76281980&t=25)** Even when you craft a solid prompt, there is a chance that the ChatGPT won't give you the best result in the first try, and that is completely fine.
>
> **[0:39](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/refining-prompts-for-better-results?u=76281980&t=39)** ChatGPT's strength lies in its ability to improve its performance, to improve its responses based on your feedback.
>
> **[0:50](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/refining-prompts-for-better-results?u=76281980&t=50)** So rather than expecting perfection from the start, the real trick is knowing how to refine your prompts for a better result.
>
> **[0:59](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/refining-prompts-for-better-results?u=76281980&t=59)** You can imagine this like cooking a recipe.
>
> **[1:02](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/refining-prompts-for-better-results?u=76281980&t=62)** You might start with the right ingredients, but adjusting the heat or adding seasonings makes it just right.
>
> **[1:11](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/refining-prompts-for-better-results?u=76281980&t=71)** There are some situations where refining your prompt can make all the difference.
>
> **[1:17](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/refining-prompts-for-better-results?u=76281980&t=77)** For example, the response is close, is very near to what you're looking for, but not exactly the same what you want.
>
> **[1:28](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/refining-prompts-for-better-results?u=76281980&t=88)** You might be refining your prompt when your response comes out to be too generic, and you are looking for some specific information.
>
> **[1:37](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/refining-prompts-for-better-results?u=76281980&t=97)** You might need a specific format or a specific tool.
>
> **[1:43](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/refining-prompts-for-better-results?u=76281980&t=103)** For example, you are trying to get the SQL queries, but that has to be written in a formatted way, right?
>
> **[1:49](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/refining-prompts-for-better-results?u=76281980&t=109)** So you got the SQL query, but not in a formatted manner.
>
> **[1:53](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/refining-prompts-for-better-results?u=76281980&t=113)** So in that case, probably you end up with refining your prompts.
>
> **[1:59](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/refining-prompts-for-better-results?u=76281980&t=119)** Let's take in a real world example.
>
> **[2:01](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/refining-prompts-for-better-results?u=76281980&t=121)** Imagine that you wanted to write a Python script and you give a very contextual-based prompt, write a Python script to clean a data set by removing rules with null values.
>
> **[2:14](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/refining-prompts-for-better-results?u=76281980&t=134)** This all looks well, but if you refine this prompt specifically, like modify the Python script to handle the exceptions when the dataset is empty and print an error message.
>
> **[2:29](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/refining-prompts-for-better-results?u=76281980&t=149)** So probably this will solve your problem, plus specifically in the way you want it.
>
> **[2:37](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/refining-prompts-for-better-results?u=76281980&t=157)** Now you have understood how we can refine the prompts for better result.
>
> **[2:44](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/refining-prompts-for-better-results?u=76281980&t=164)** Now in the next video, we're going to see how we can use the contextual prompts to take the further advantage of the ChatGPT, and I'm sure you won't want to miss this one.
>
> **[2:58](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/refining-prompts-for-better-results?u=76281980&t=178)** See you there.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** prompt (5), [[ChatGPT]] (4), [[Python (Programming Language)|Python]] (3), [[SQL]] (2), generic (1)
> **CLI Commands:** python (3), make (1)
> **Analogies:** imagine (2), for example (2)
> **Env Vars:** sql (2)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Using contextual prompts
> [LinkedIn Learning](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/using-contextual-prompts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/using-contextual-prompts?u=76281980&t=0)** - [Instructor] Sometimes refining the prompts is not only sufficient, you probably get better results by adding the context to it.
>
> **[0:10](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/using-contextual-prompts?u=76281980&t=10)** Let's understand what are the contextual prompts?
>
> **[0:14](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/using-contextual-prompts?u=76281980&t=14)** Contextual prompts are simply the prompts that gives ChatPGT a deeper understanding of the task by just providing extra background details.
>
> **[0:28](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/using-contextual-prompts?u=76281980&t=28)** For example, when ChatGPT understands the bigger picture, it probably can produce the responses that are more relevant and tailored to your specific problem.
>
> **[0:43](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/using-contextual-prompts?u=76281980&t=43)** For example, a simple way of asking a question to ChatGPT is write a Python script or a PySpark script to process the data.
>
> **[0:53](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/using-contextual-prompts?u=76281980&t=53)** However, you can add the context by saying join customer orders and product detail on product ID, perform aggregation, and handle the null values.
>
> **[1:06](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/using-contextual-prompts?u=76281980&t=66)** Now in this case, you are processing the data, but here, you are giving the context.
>
> **[1:13](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/using-contextual-prompts?u=76281980&t=73)** So these are some kind of an extra background information which you can provide along with your prompts.
>
> **[1:20](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/using-contextual-prompts?u=76281980&t=80)** The question comes why context matters.
>
> **[1:25](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/using-contextual-prompts?u=76281980&t=85)** Basically, the ChatGPT is not a mind reader.
>
> **[1:29](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/using-contextual-prompts?u=76281980&t=89)** ChatGPT does not understand what exactly you are thinking and what is your expectation or what is the circumstances in which you are trying to fit this solution.
>
> **[1:41](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/using-contextual-prompts?u=76281980&t=101)** Hence, when you provide the context to your ChatGPT prompt, it avoids giving you the (indistinct) or a one size fit all answer.
>
> **[1:53](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/using-contextual-prompts?u=76281980&t=113)** Now the answer which you get from the ChatGPT is very specific to your problem.
>
> **[2:00](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/using-contextual-prompts?u=76281980&t=120)** Another example could be just say like optimize this step.
>
> **[2:05](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/using-contextual-prompts?u=76281980&t=125)** Now when I provide the context to it, probably it will look something like this.
>
> **[2:11](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/using-contextual-prompts?u=76281980&t=131)** Optimize PySpark transformations for sales data with millions of rows to reduce memory usage.
>
> **[2:20](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/using-contextual-prompts?u=76281980&t=140)** Now in this prompt, you are specifically providing that you are looking the optimization from the memory usage perspective.
>
> **[2:28](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/using-contextual-prompts?u=76281980&t=148)** If you don't give it, probably try to optimize it based on the total execution time perspective, right?
>
> **[2:35](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/using-contextual-prompts?u=76281980&t=155)** So adding the context always helps you to reach to a final answer in an easiest manner.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ChatGPT]] (6), data (3), [[PySpark]] (2), product (2), prompt (2)
> **Analogies:** for example (2), picture (1)
> **CLI Commands:** python (1)
> **Speakers:** - [instructor] (1)

#### Combining multiple prompts for complex tasks
> [LinkedIn Learning](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/combining-multiple-prompts-for-complex-tasks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/combining-multiple-prompts-for-complex-tasks?u=76281980&t=0)** - [Instructor] Sometimes do you feel like your coding challenge are too complex for just one question?
>
> **[0:08](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/combining-multiple-prompts-for-complex-tasks?u=76281980&t=8)** What if I tell you that ChatGPT, through a series of prompts, helps you to solve those complex problem in a step-by-step manner?
>
> **[0:19](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/combining-multiple-prompts-for-complex-tasks?u=76281980&t=19)** Seems exciting, right?
>
> **[0:22](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/combining-multiple-prompts-for-complex-tasks?u=76281980&t=22)** Let's understand the combined prompts and why it is important.
>
> **[0:28](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/combining-multiple-prompts-for-complex-tasks?u=76281980&t=28)** Think of a complex task, like building an end-to-end data pipeline or optimizing a machine learning model.
>
> **[0:37](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/combining-multiple-prompts-for-complex-tasks?u=76281980&t=37)** It's not realistic to expect a perfect solution in just one prompt.
>
> **[0:44](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/combining-multiple-prompts-for-complex-tasks?u=76281980&t=44)** By breaking down the task into smaller parts and guiding ChatGPT in every step, you probably end up with building a more accurate and tailored solution.
>
> **[1:01](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/combining-multiple-prompts-for-complex-tasks?u=76281980&t=61)** I mean, combining the prompts probably is like conversation you are doing with your colleague.
>
> **[1:08](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/combining-multiple-prompts-for-complex-tasks?u=76281980&t=68)** You ask for help for one part, then build on it as you progress, And this process is especially helpful in data engineering perspective, like you are doing in ETL, multiple steps at a time.
>
> **[1:24](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/combining-multiple-prompts-for-complex-tasks?u=76281980&t=84)** Let's take an example.
>
> **[1:27](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/combining-multiple-prompts-for-complex-tasks?u=76281980&t=87)** Assume that you have to build an ETL pipeline.
>
> **[1:30](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/combining-multiple-prompts-for-complex-tasks?u=76281980&t=90)** Now, rather than giving everything in a single shot, what you would do is you will take a one step at a time.
>
> **[1:40](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/combining-multiple-prompts-for-complex-tasks?u=76281980&t=100)** For example, first you want to extract the data.
>
> **[1:44](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/combining-multiple-prompts-for-complex-tasks?u=76281980&t=104)** So you probably write a first prompt saying, "Write a script to connect to REST API and extract data in JSON format."
>
> **[1:53](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/combining-multiple-prompts-for-complex-tasks?u=76281980&t=113)** Probably this step is specifically doing the extraction.
>
> **[1:59](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/combining-multiple-prompts-for-complex-tasks?u=76281980&t=119)** Similarly, on the step number two, you're probably doing the transformation.
>
> **[2:05](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/combining-multiple-prompts-for-complex-tasks?u=76281980&t=125)** And then your third prompt would be as loading the data into the destination.
>
> **[2:12](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/combining-multiple-prompts-for-complex-tasks?u=76281980&t=132)** Another example of chaining the prompts is optimizing your data engineering pipeline.
>
> **[2:20](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/combining-multiple-prompts-for-complex-tasks?u=76281980&t=140)** Now imagine that a pipeline is there, and that is taking a longer time, and you want to optimize it.
>
> **[2:28](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/combining-multiple-prompts-for-complex-tasks?u=76281980&t=148)** Now you can start optimizing in small, small things.
>
> **[2:33](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/combining-multiple-prompts-for-complex-tasks?u=76281980&t=153)** For example, first you try to improve your joins, then you try to add the caching.
>
> **[2:40](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/combining-multiple-prompts-for-complex-tasks?u=76281980&t=160)** Then you try to add the partitioning.
>
> **[2:44](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/combining-multiple-prompts-for-complex-tasks?u=76281980&t=164)** Now this is how you can use the multiple prompts to get your final result.
>
> **[2:52](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/combining-multiple-prompts-for-complex-tasks?u=76281980&t=172)** So now you understand how to break down a complex task in smaller steps.
>
> **[2:59](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/combining-multiple-prompts-for-complex-tasks?u=76281980&t=179)** Now it's time to do the practical.
>
> **[3:02](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/combining-multiple-prompts-for-complex-tasks?u=76281980&t=182)** So in the next video, we jump to our ChatGPT and see all this knowledge can work.
>
> **[3:10](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/combining-multiple-prompts-for-complex-tasks?u=76281980&t=190)** See you there.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (4), [[ChatGPT]] (3), prompt (3), [[Data Engineering]] (2), etl (2)
> **Env Vars:** etl (2), rest (1), api (1), json (1)
> **Analogies:** for example (2), imagine (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)


### 2. Practical Applications of ChatGPT in Data Engineering

[↑ Back to Table of Contents](#table-of-contents)

#### Generating data engineering code with ChatGPT
> [LinkedIn Learning](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/generating-data-engineering-code-with-chatgpt?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/generating-data-engineering-code-with-chatgpt?u=76281980&t=0)** - [Instructor] So far in this course, we have learned how we can write a good ChatGPT prompt.
>
> **[0:06](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/generating-data-engineering-code-with-chatgpt?u=76281980&t=6)** Now, it's time to do that in a very practical manner.
>
> **[0:11](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/generating-data-engineering-code-with-chatgpt?u=76281980&t=11)** So let's assume that I want to write a Python script to clean the data from a CSV file where my column names are Customerid, name, address, and phone number.
>
> **[0:38](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/generating-data-engineering-code-with-chatgpt?u=76281980&t=38)** And I can just say Enter.
>
> **[0:42](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/generating-data-engineering-code-with-chatgpt?u=76281980&t=42)** Now, here, you can understand that we have tried to give a little bit of context that we want to write a script and we want to clean the data from CSV file, and I have given the exact column names.
>
> **[1:00](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/generating-data-engineering-code-with-chatgpt?u=76281980&t=60)** So now, you can understand that it has written an entire script for me.
>
> **[1:06](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/generating-data-engineering-code-with-chatgpt?u=76281980&t=66)** Maybe, if tomorrow I feel that, while I am doing this, I have not given a way on which I want to clean.
>
> **[1:21](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/generating-data-engineering-code-with-chatgpt?u=76281980&t=81)** For example, here you see, I've not given what to clean.
>
> **[1:26](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/generating-data-engineering-code-with-chatgpt?u=76281980&t=86)** I just gave the details.
>
> **[1:28](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/generating-data-engineering-code-with-chatgpt?u=76281980&t=88)** So ChatGPT has used its own knowledge and thought that there could be possibility that a phone number might not be a correct one.
>
> **[1:40](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/generating-data-engineering-code-with-chatgpt?u=76281980&t=100)** So it has added a logic to clean the phone number, right?
>
> **[1:46](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/generating-data-engineering-code-with-chatgpt?u=76281980&t=106)** So that's how it can do it.
>
> **[1:48](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/generating-data-engineering-code-with-chatgpt?u=76281980&t=108)** It might have also tried to remove the duplicates, so it has used the drop_duplicates method.
>
> **[1:56](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/generating-data-engineering-code-with-chatgpt?u=76281980&t=116)** So this is how it works.
>
> **[1:58](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/generating-data-engineering-code-with-chatgpt?u=76281980&t=118)** Sometimes, if you don't give the exact details, then your ChatGPT start assuming the thing.
>
> **[2:06](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/generating-data-engineering-code-with-chatgpt?u=76281980&t=126)** So, in this example, we got basic data engineering code, but you will find that it might not be exactly doing what you expect because you have not furnished those information.
>
> **[2:22](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/generating-data-engineering-code-with-chatgpt?u=76281980&t=142)** So maybe you can just add it like this, "Change to add the null check for the name field."
>
> **[2:37](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/generating-data-engineering-code-with-chatgpt?u=76281980&t=157)** Now, in this case, you will find that it'll go and update your Python script to update the script for not null check on your name field.
>
> **[2:52](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/generating-data-engineering-code-with-chatgpt?u=76281980&t=172)** This is just a beginning of using the ChatGPT for data engineering.
>
> **[2:57](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/generating-data-engineering-code-with-chatgpt?u=76281980&t=177)** Let's move to the next video where we're going to see how we can take the leverage of ChatGPT beyond writing the code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ChatGPT]] (5), [[Python (Programming Language)|Python]] (2), data (2), [[Data Engineering]] (2), prompt (1)
> **CLI Commands:** python (2), find (2)
> **Env Vars:** csv (2)
> **Code Identifiers:** drop_duplicates (1)
> **Cross-References:** next video (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Automating documentation with ChatGPT
> [LinkedIn Learning](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/automating-documentation-with-chatgpt?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/automating-documentation-with-chatgpt?u=76281980&t=0)** - [Instructor] You might understand how to write the code using the ChatGPT.
>
> **[0:05](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/automating-documentation-with-chatgpt?u=76281980&t=5)** But code is not everything.
>
> **[0:09](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/automating-documentation-with-chatgpt?u=76281980&t=9)** Code without documentation is like a story without a narrative, which is hard to follow.
>
> **[0:16](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/automating-documentation-with-chatgpt?u=76281980&t=16)** And if I tell you that using ChatGPT, you can do the documentation of all your data pipelines and your logics in just few seconds, probably that will excite you, right?
>
> **[0:34](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/automating-documentation-with-chatgpt?u=76281980&t=34)** So let's understand how we can use ChatGPT for the documentation purpose.
>
> **[0:41](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/automating-documentation-with-chatgpt?u=76281980&t=41)** Let's move to our ChatGPT.
>
> **[0:45](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/automating-documentation-with-chatgpt?u=76281980&t=45)** For instance, imagine that you have this code.
>
> **[0:49](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/automating-documentation-with-chatgpt?u=76281980&t=49)** Now, what I'm going to do is I will say to my ChatGPT, I have following code script.
>
> **[0:59](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/automating-documentation-with-chatgpt?u=76281980&t=59)** And then I give a command that, "Write a documentation for below script."
>
> **[1:10](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/automating-documentation-with-chatgpt?u=76281980&t=70)** And then I paste my entire script.
>
> **[1:14](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/automating-documentation-with-chatgpt?u=76281980&t=74)** And it just sent.
>
> **[1:22](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/automating-documentation-with-chatgpt?u=76281980&t=82)** Now, you will find that it is going to write an entire documentation for you, and in fact, for every step.
>
> **[1:36](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/automating-documentation-with-chatgpt?u=76281980&t=96)** If you don't want an documentation in this format, you can just say that, "Do inline documentation for the script."
>
> **[1:50](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/automating-documentation-with-chatgpt?u=76281980&t=110)** And now you will find that it is doing in documentation for each and every step of your script.
>
> **[2:00](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/automating-documentation-with-chatgpt?u=76281980&t=120)** Similarly, it's not just you do a documentation only for your Python script.
>
> **[2:07](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/automating-documentation-with-chatgpt?u=76281980&t=127)** You can just write a SQL query.
>
> **[2:09](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/automating-documentation-with-chatgpt?u=76281980&t=129)** For example, "Select * from Customer where country is = India."
>
> **[2:21](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/automating-documentation-with-chatgpt?u=76281980&t=141)** Now you can ask, "Write the documentation for above sql."
>
> **[2:33](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/automating-documentation-with-chatgpt?u=76281980&t=153)** And it will write the documentation for it.
>
> **[2:36](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/automating-documentation-with-chatgpt?u=76281980&t=156)** So whether you have a code written in terms of a Spark, or we have a code written in terms of SQL, or maybe you have your entire pipeline logic, you have written it, it can create an documentation for those entire artifacts.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ChatGPT]] (5), [[SQL]] (3), data (1), [[Python (Programming Language)|Python]] (1)
> **Documentation:** the documentation (4)
> **CLI Commands:** find (2), python (1)
> **Analogies:** for instance (1), imagine (1), for example (1)
> **Env Vars:** sql (2)
> **Speakers:** - [instructor] (1)

#### Debugging data pipelines using ChatGPT
> [LinkedIn Learning](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/debugging-data-pipelines-using-chatgpt?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/debugging-data-pipelines-using-chatgpt?u=76281980&t=0)** - [Instructor] Have you ever spent hours to find out one error that is causing your data pipeline to get failed?
>
> **[0:09](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/debugging-data-pipelines-using-chatgpt?u=76281980&t=9)** What if you're going to have an assistant to help you identify and fix issues instantly?
>
> **[0:17](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/debugging-data-pipelines-using-chatgpt?u=76281980&t=17)** That is no one but ChatGPT.
>
> **[0:21](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/debugging-data-pipelines-using-chatgpt?u=76281980&t=21)** ChatGPT can help you not only in developing, optimizing your code and logics, but it can also help you to debug your code and data pipeline logics to find out the error in a quickest manner.
>
> **[0:40](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/debugging-data-pipelines-using-chatgpt?u=76281980&t=40)** Let's just go back to our ChatGPT and see how this can help you.
>
> **[0:46](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/debugging-data-pipelines-using-chatgpt?u=76281980&t=46)** Imagine that I am getting this error, which is FileNotFoundError, no such file or directory.
>
> **[0:55](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/debugging-data-pipelines-using-chatgpt?u=76281980&t=55)** Now, this error is coming while I am reading a file in the PySpark code.
>
> **[1:06](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/debugging-data-pipelines-using-chatgpt?u=76281980&t=66)** I can write a prompt with this detail and say that identify the root cause of an error and give solution.
>
> **[1:21](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/debugging-data-pipelines-using-chatgpt?u=76281980&t=81)** I can say this to Chat GPT and let's see how ChatGPT respond.
>
> **[1:30](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/debugging-data-pipelines-using-chatgpt?u=76281980&t=90)** ChatGPT will go and try to identify what could be the possible root cause of this problem.
>
> **[1:38](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/debugging-data-pipelines-using-chatgpt?u=76281980&t=98)** For example, the root cause could be an incorrect file path.
>
> **[1:43](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/debugging-data-pipelines-using-chatgpt?u=76281980&t=103)** Maybe the file path which I'm giving might be wrong.
>
> **[1:47](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/debugging-data-pipelines-using-chatgpt?u=76281980&t=107)** Maybe file not uploaded or missing on that path.
>
> **[1:51](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/debugging-data-pipelines-using-chatgpt?u=76281980&t=111)** Maybe the wrong directory in the cluster, or maybe some issues with the file format, and for each of those problem, it is trying to give you some kind of solution.
>
> **[2:06](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/debugging-data-pipelines-using-chatgpt?u=76281980&t=126)** So ChatGPT can help you to give you some insights and some probable reason of that specific error, and at many times, this can help you to identify exact root causes.
>
> **[2:21](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/debugging-data-pipelines-using-chatgpt?u=76281980&t=141)** Let's take in another example.
>
> **[2:24](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/debugging-data-pipelines-using-chatgpt?u=76281980&t=144)** Imagine that I am getting this error, which is error column region must appear in GROUP BY clause or be used in aggregate function.
>
> **[2:36](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/debugging-data-pipelines-using-chatgpt?u=76281980&t=156)** Now, this error is coming while I am running a SQL query.
>
> **[2:45](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/debugging-data-pipelines-using-chatgpt?u=76281980&t=165)** Again, we can ask to ChatGPT, "Give me the solution to this problem."
>
> **[2:55](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/debugging-data-pipelines-using-chatgpt?u=76281980&t=175)** Now, again, what ChatGPT is going do is ChatGPT is going to try to find out what could be the root causes and possible solution to that problem.
>
> **[3:09](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/debugging-data-pipelines-using-chatgpt?u=76281980&t=189)** For example, here, it is saying that if you are getting this error, then there is a very high chances that you have not included this is specific region column into your GROUP BY clause.
>
> **[3:24](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/debugging-data-pipelines-using-chatgpt?u=76281980&t=204)** So maybe you can think of adding this region column into your GROUP BY clause.
>
> **[3:31](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/debugging-data-pipelines-using-chatgpt?u=76281980&t=211)** These are some of the examples where ChatGPT can help you, but many times, you might encounter a situation where you have 100 line of a code and something is breaking somewhere.
>
> **[3:45](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/debugging-data-pipelines-using-chatgpt?u=76281980&t=225)** You can also copy, paste that exact 100 lines of the code and ask ChatGPT to find out the problem in that specific scenario, and it is going to give you almost exact reason of that specific error.
>
> **[4:04](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/debugging-data-pipelines-using-chatgpt?u=76281980&t=244)** Let's see you into the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ChatGPT]] (11), data (2), [[PySpark]] (1), prompt (1), [[SQL]] (1)
> **Env Vars:** group (3), gpt (1), sql (1)
> **CLI Commands:** find (4)
> **Analogies:** imagine (2), for example (2)
> **SQL:** group by (3)
> **Cross-References:** go back to (1), next video (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Optimizing SQL queries with ChatGPT
> [LinkedIn Learning](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/optimizing-sql-queries-with-chatgpt?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/optimizing-sql-queries-with-chatgpt?u=76281980&t=0)** - [Instructor] Have you ever written a SQL query that works, but takes forever to run?
>
> **[0:06](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/optimizing-sql-queries-with-chatgpt?u=76281980&t=6)** Performance matters, especially when dealing with the large data set.
>
> **[0:12](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/optimizing-sql-queries-with-chatgpt?u=76281980&t=12)** In this video, we are going to learn how ChatGPT can help you in optimizing that specific SQL queries.
>
> **[0:22](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/optimizing-sql-queries-with-chatgpt?u=76281980&t=22)** Let's just go back to our ChatGPT and see how it can help to optimize queries.
>
> **[0:29](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/optimizing-sql-queries-with-chatgpt?u=76281980&t=29)** Let me start a new chat.
>
> **[0:32](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/optimizing-sql-queries-with-chatgpt?u=76281980&t=32)** Assume that I have this SQL query, which is select start from orders where customer ID equal to 12345.
>
> **[0:43](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/optimizing-sql-queries-with-chatgpt?u=76281980&t=43)** Now, this query is taking a lot of time to load.
>
> **[0:52](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/optimizing-sql-queries-with-chatgpt?u=76281980&t=52)** Now, we want ChatGPT to optimize this query,
>
> **[1:01](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/optimizing-sql-queries-with-chatgpt?u=76281980&t=61)** and let's just see how ChatGPT can respond.
>
> **[1:04](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/optimizing-sql-queries-with-chatgpt?u=76281980&t=64)** Now, when a query is taking more time to load, there could be multiple reasons, and ChatGPT is trying to find out all those possible reasons, and the solution for those problem.
>
> **[1:20](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/optimizing-sql-queries-with-chatgpt?u=76281980&t=80)** For example, it could be that there is no index available on customer ID column, so it is pointing out that you can think of adding an index and that could help you to improve the performance.
>
> **[1:37](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/optimizing-sql-queries-with-chatgpt?u=76281980&t=97)** It could also be possible that this specific ID, 12345, has lot of the records.
>
> **[1:46](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/optimizing-sql-queries-with-chatgpt?u=76281980&t=106)** It could be possible that this specific table has lots of columns.
>
> **[1:53](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/optimizing-sql-queries-with-chatgpt?u=76281980&t=113)** What we can do is, we can limit the number of columns to select rather than selecting all the columns.
>
> **[2:01](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/optimizing-sql-queries-with-chatgpt?u=76281980&t=121)** That could also reduce the amount of data to be processed and our total execution time can get reduced.
>
> **[2:11](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/optimizing-sql-queries-with-chatgpt?u=76281980&t=131)** Maybe you can think of partitioning the table, or you could also think about optimizing the specific data types.
>
> **[2:22](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/optimizing-sql-queries-with-chatgpt?u=76281980&t=142)** Long story short, it gives you all the possible reasons which you can look at it and tweak one at a time.
>
> **[2:33](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/optimizing-sql-queries-with-chatgpt?u=76281980&t=153)** Let's take another example.
>
> **[2:35](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/optimizing-sql-queries-with-chatgpt?u=76281980&t=155)** Imagine that I have this query.
>
> **[2:39](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/optimizing-sql-queries-with-chatgpt?u=76281980&t=159)** Now, this query is kind of a subquery.
>
> **[2:43](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/optimizing-sql-queries-with-chatgpt?u=76281980&t=163)** Let me ask ChatGPT to optimize this query.
>
> **[2:49](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/optimizing-sql-queries-with-chatgpt?u=76281980&t=169)** Now, if a query is a subquery, generally subqueries are little bit having the performance issues.
>
> **[3:00](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/optimizing-sql-queries-with-chatgpt?u=76281980&t=180)** Now, to avoid that performance issues, it smartly uses the JOIN, which is a recommended approach as well, it also guide us to think about adding the indexes to improve the performance, it also talks about using some of the technique like EXISTS rather than using the IN clause.
>
> **[3:26](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/optimizing-sql-queries-with-chatgpt?u=76281980&t=206)** So the idea is, this kind of help from the ChatGPT, you get all the pointers to look towards, and that can reduce down the amount of time which you need to put in analyzing what could be the root cause.
>
> **[3:42](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/optimizing-sql-queries-with-chatgpt?u=76281980&t=222)** Hence, you can use ChatGPT smartly in optimizing your code to reduce down the total execution time, and improve overall performance.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ChatGPT]] (8), [[SQL]] (3), data (3)
> **Env Vars:** sql (3), join (1), exists (1)
> **Definitions:** is a  (2)
> **Analogies:** for example (1), imagine (1)
> **CLI Commands:** find (1)
> **SQL:** join (1)
> **Cross-References:** go back to (1)
> **Best Practices:** recommended (1)

#### Using ChatGPT for data cleaning scripts
> [LinkedIn Learning](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/using-chatgpt-for-data-cleaning-scripts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/using-chatgpt-for-data-cleaning-scripts?u=76281980&t=0)** - [Instructor] Data cleaning is one of the very crucial step in the data engineering world because a dirty data can lead to an incorrect analysis, and poor decision making.
>
> **[0:14](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/using-chatgpt-for-data-cleaning-scripts?u=76281980&t=14)** Hence, if you are working as a data engineer, you come across this data cleaning activity multiple times.
>
> **[0:23](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/using-chatgpt-for-data-cleaning-scripts?u=76281980&t=23)** And the good news is ChatGPT can help you in the data cleaning step as well.
>
> **[0:29](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/using-chatgpt-for-data-cleaning-scripts?u=76281980&t=29)** Assume that I have a situation, and I have to clean the data for my CSV file.
>
> **[0:39](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/using-chatgpt-for-data-cleaning-scripts?u=76281980&t=39)** I can think of writing a prompt something like this.
>
> **[0:44](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/using-chatgpt-for-data-cleaning-scripts?u=76281980&t=44)** "Write a Python script using Pandas to read A CSV file, removes rows with any null values, and drop duplicate rows."
>
> **[0:57](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/using-chatgpt-for-data-cleaning-scripts?u=76281980&t=57)** When you give the prompt something like this, which consists of all the rules that you want to apply, it creates an exact code for you.
>
> **[1:11](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/using-chatgpt-for-data-cleaning-scripts?u=76281980&t=71)** So here, you can see that it has first reading the file, then, it is using Drop Any to drop any null values.
>
> **[1:21](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/using-chatgpt-for-data-cleaning-scripts?u=76281980&t=81)** It is using drop duplicates to remove any duplicate values.
>
> **[1:29](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/using-chatgpt-for-data-cleaning-scripts?u=76281980&t=89)** So you can give an exact prompt what you are looking for, your data cleaning rule, and it can help you in writing that exact piece.
>
> **[1:41](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/using-chatgpt-for-data-cleaning-scripts?u=76281980&t=101)** Let's take in another example.
>
> **[1:43](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/using-chatgpt-for-data-cleaning-scripts?u=76281980&t=103)** This time, imagine that I have a column, and couple of rows have that column value as NAN.
>
> **[1:54](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/using-chatgpt-for-data-cleaning-scripts?u=76281980&t=114)** That is not a number.
>
> **[1:56](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/using-chatgpt-for-data-cleaning-scripts?u=76281980&t=116)** Now this is a not a valid value, and I want to replace this invalid value with a median of a column.
>
> **[2:07](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/using-chatgpt-for-data-cleaning-scripts?u=76281980&t=127)** Hence, I can think of writing the ChatGPT prompt something like this, where I'm saying that fill the NAN values with the median of the column.
>
> **[2:22](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/using-chatgpt-for-data-cleaning-scripts?u=76281980&t=142)** And like a good assistant, ChatGPT is going to write that specific logic for me, and give me the exact piece of a code.
>
> **[2:35](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/using-chatgpt-for-data-cleaning-scripts?u=76281980&t=155)** Similarly, let's say we are dealing with some of the strings.
>
> **[2:41](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/using-chatgpt-for-data-cleaning-scripts?u=76281980&t=161)** I have a situation where I have a country column, and I want to convert it into a completely lower case by removing, deleting, and trailing spaces.
>
> **[2:55](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/using-chatgpt-for-data-cleaning-scripts?u=76281980&t=175)** I can normalize this specific column by just writing this script, which can give me the exact code for it.
>
> **[3:06](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/using-chatgpt-for-data-cleaning-scripts?u=76281980&t=186)** I just wrote this ChatGPT prompt, and you will find that it will give the exact code for it here, it uses the string function to lower, and then using the strip function to remove that leading or trailing spaces.
>
> **[3:29](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/using-chatgpt-for-data-cleaning-scripts?u=76281980&t=209)** If you use ChatGPT smartly, it can definitely help you into a crucial step of data cleaning in your data engineering process.
>
> **[3:41](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/using-chatgpt-for-data-cleaning-scripts?u=76281980&t=221)** See you in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (8), [[ChatGPT]] (5), prompt (5), [[Data Engineering]] (2), [[Python (Programming Language)|Python]] (1)
> **Env Vars:** csv (2), nan (2)
> **CLI Commands:** python (1), find (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### ChatGPT for data analysis and insights
> [LinkedIn Learning](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/chatgpt-for-data-analysis-and-insights?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/chatgpt-for-data-analysis-and-insights?u=76281980&t=0)** - [Instructor] Data analysis is the key to unlocking valuable insights, but it often requires time consuming exploration and interpretation.
>
> **[0:13](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/chatgpt-for-data-analysis-and-insights?u=76281980&t=13)** What if ChatGPT could help you in doing so and extract actionable insights quickly?
>
> **[0:21](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/chatgpt-for-data-analysis-and-insights?u=76281980&t=21)** That would be awesome, right?
>
> **[0:25](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/chatgpt-for-data-analysis-and-insights?u=76281980&t=25)** Good news is yes, ChatGPT can help you in this as well.
>
> **[0:31](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/chatgpt-for-data-analysis-and-insights?u=76281980&t=31)** Let's just take an example.
>
> **[0:33](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/chatgpt-for-data-analysis-and-insights?u=76281980&t=33)** Assume that I have a file and I want to use the Python script using Pandas to identify the mean, median, and standard deviation for the sales amount present in that CSV column, how I can do it?
>
> **[0:53](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/chatgpt-for-data-analysis-and-insights?u=76281980&t=53)** Let's see how ChatGPT can help you in writing that piece of a code for you.
>
> **[1:01](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/chatgpt-for-data-analysis-and-insights?u=76281980&t=61)** I have given the prompt and you can see that ChatGPT is trying to write the answer for it.
>
> **[1:11](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/chatgpt-for-data-analysis-and-insights?u=76281980&t=71)** It using the mean function, median function, and the standard deviation function to do that specific analysis for me.
>
> **[1:23](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/chatgpt-for-data-analysis-and-insights?u=76281980&t=83)** Maybe you might be interested in doing it in a graphical manner, hence, you might be looking for some kind of a plotting.
>
> **[1:35](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/chatgpt-for-data-analysis-and-insights?u=76281980&t=95)** You can write a specific prompt, something like this.
>
> **[1:39](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/chatgpt-for-data-analysis-and-insights?u=76281980&t=99)** For example, write a Python script using matplotlib to create a histogram of the age column in a CSV file.
>
> **[1:52](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/chatgpt-for-data-analysis-and-insights?u=76281980&t=112)** Now ChatGPT can give you the piece of a code which helps you to plot this specific histogram and do your analysis.
>
> **[2:07](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/chatgpt-for-data-analysis-and-insights?u=76281980&t=127)** Sometimes while doing the exploration and analytics, you wanted to visualize the relationship between the multiple columns.
>
> **[2:19](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/chatgpt-for-data-analysis-and-insights?u=76281980&t=139)** For that, you can use a ChatGPT prompt, something like this where I am trying to identify the relationship between the advertising spend and the sales in the CSV file.
>
> **[2:35](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/chatgpt-for-data-analysis-and-insights?u=76281980&t=155)** I'm using this specific prompt to get that done.
>
> **[2:46](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/chatgpt-for-data-analysis-and-insights?u=76281980&t=166)** You can see that ChatGPT has done it for you.
>
> **[2:52](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/chatgpt-for-data-analysis-and-insights?u=76281980&t=172)** It has uses the scatter plot to create us plotting for you to identify that relationship.
>
> **[3:02](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/chatgpt-for-data-analysis-and-insights?u=76281980&t=182)** This is how you can smartly use ChatGPT for your exploration and interpretation of your data.
>
> **[3:11](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/chatgpt-for-data-analysis-and-insights?u=76281980&t=191)** I hope this is a very important skills as a data engineer.
>
> **[3:18](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/chatgpt-for-data-analysis-and-insights?u=76281980&t=198)** See you into the next video.
>
> **[3:29](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/chatgpt-for-data-analysis-and-insights?u=76281980&t=209)** I'm using this specific prompt to get that done.
>
> **[3:34](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/chatgpt-for-data-analysis-and-insights?u=76281980&t=214)** You can see that ChatGPT has done it for you.
>
> **[3:38](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/chatgpt-for-data-analysis-and-insights?u=76281980&t=218)** It uses the scatter plot to create plotting so you can identify that relationship.
>
> **[3:46](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/chatgpt-for-data-analysis-and-insights?u=76281980&t=226)** This is how you can smartly use ChatGPT for your exploration and interpretation of your data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ChatGPT]] (10), prompt (5), data (4), [[Python (Programming Language)|Python]] (2), [[Pandas (Software)|Pandas]] (1)
> **Env Vars:** csv (3)
> **CLI Commands:** python (2)
> **Cross-References:** next video (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 3. Advanced Applications in PySpark and Databricks

[↑ Back to Table of Contents](#table-of-contents)

#### Generating PySpark code with ChatGPT
> [LinkedIn Learning](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/generating-pyspark-code-with-chatgpt?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/generating-pyspark-code-with-chatgpt?u=76281980&t=0)** - [Instructor] Handling big data efficiently requires the power of distributed processing, and that's where PySpark is needed.
>
> **[0:09](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/generating-pyspark-code-with-chatgpt?u=76281980&t=9)** And if you are working as a data engineer, then you must aware of that this is a very common task which you need to do day in day out as a data engineer.
>
> **[0:22](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/generating-pyspark-code-with-chatgpt?u=76281980&t=22)** Now let's understand how ChatGPT can help us in doing so.
>
> **[0:28](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/generating-pyspark-code-with-chatgpt?u=76281980&t=28)** Take an example, assume that I have a CSV file which contains the customer data, and I want to read this file using the PySpark, and want to filter the records which includes only the customers from USA and want it to see some of the sample rules, how I can write it?
>
> **[0:53](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/generating-pyspark-code-with-chatgpt?u=76281980&t=53)** So I can write a prompt, something like this.
>
> **[0:58](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/generating-pyspark-code-with-chatgpt?u=76281980&t=58)** And let's see how ChatGPT responds.
>
> **[1:01](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/generating-pyspark-code-with-chatgpt?u=76281980&t=61)** You'll find that ChadGPT is giving us the exact code which you need to write to read the CSV file and use the filter to filter out the country based on our condition, and it is using that show function.
>
> **[1:21](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/generating-pyspark-code-with-chatgpt?u=76281980&t=81)** So that's how ChatGPT can help you in giving the exact code snippet which you need to write to get this output.
>
> **[1:31](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/generating-pyspark-code-with-chatgpt?u=76281980&t=91)** Let's take in another example.
>
> **[1:34](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/generating-pyspark-code-with-chatgpt?u=76281980&t=94)** This time, imagine that we wanted to do some kind of a data aggregation.
>
> **[1:39](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/generating-pyspark-code-with-chatgpt?u=76281980&t=99)** I have a CSV file and I wanted to aggregate my sales data, how I can write the ChatGPT prompt?
>
> **[1:48](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/generating-pyspark-code-with-chatgpt?u=76281980&t=108)** Let's just see. I can say something like this to ChatGPT.
>
> **[1:53](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/generating-pyspark-code-with-chatgpt?u=76281980&t=113)** Write a PySpark script to read a CSV file containing sales data and calculate the total sales for each product category.
>
> **[2:04](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/generating-pyspark-code-with-chatgpt?u=76281980&t=124)** Now you will find that PySpark code has been given by the ChatGPT in just few seconds.
>
> **[2:15](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/generating-pyspark-code-with-chatgpt?u=76281980&t=135)** Here, it is using the group by function to do the aggregation for you.
>
> **[2:22](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/generating-pyspark-code-with-chatgpt?u=76281980&t=142)** So even if you are a little bit skeptical about how exactly you should use a group by function, then you can take in help of the ChatGPT to write the logic for you.
>
> **[2:35](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/generating-pyspark-code-with-chatgpt?u=76281980&t=155)** Now, in fact, even in this example itself, if we got the result and we want to save it as a Parquet file, I need a code for that.
>
> **[2:47](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/generating-pyspark-code-with-chatgpt?u=76281980&t=167)** So I can write a prompt here itself and say that, now write this dataframe output to Parque file.
>
> **[3:01](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/generating-pyspark-code-with-chatgpt?u=76281980&t=181)** And ChatGPT is going to give you that code snippet as well.
>
> **[3:08](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/generating-pyspark-code-with-chatgpt?u=76281980&t=188)** So here you can see that, it has given you the total_sales_dataframe.write.mode.
>
> **[3:15](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/generating-pyspark-code-with-chatgpt?u=76281980&t=195)** And this is how PySpark can write a file.
>
> **[3:19](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/generating-pyspark-code-with-chatgpt?u=76281980&t=199)** You have to just replace only the output path on which you wanted this dataframe to get written.
>
> **[3:26](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/generating-pyspark-code-with-chatgpt?u=76281980&t=206)** This is how ChatGPT can be very useful in your PySpark code.
>
> **[3:31](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/generating-pyspark-code-with-chatgpt?u=76281980&t=211)** Let's move to the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ChatGPT]] (9), [[PySpark]] (6), data (6), prompt (3), [[Big Data]] (1)
> **Env Vars:** csv (4), usa (1)
> **CLI Commands:** find (2)
> **Code Identifiers:** total_sales_dataframe (1)
> **Cross-References:** next video (1)
> **Definitions:** is a  (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### Optimizing PySpark jobs using ChatGPT
> [LinkedIn Learning](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/optimizing-pyspark-jobs-using-chatgpt?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/optimizing-pyspark-jobs-using-chatgpt?u=76281980&t=0)** - [Instructor] Processing big data with PySpark is powerful, but it comes with its own set of challenges, for example, slow jobs, memory issues, and resource bottlenecks that can reduce the performance of your Spark code.
>
> **[0:18](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/optimizing-pyspark-jobs-using-chatgpt?u=76281980&t=18)** However, the good news is ChatGPT can help you in optimizing and improving the performance of your PySpark code as well.
>
> **[0:28](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/optimizing-pyspark-jobs-using-chatgpt?u=76281980&t=28)** Let's see how it can help us.
>
> **[0:31](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/optimizing-pyspark-jobs-using-chatgpt?u=76281980&t=31)** Imagine that you feel that performance can be improved by setting some of these Spark configuration.
>
> **[0:39](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/optimizing-pyspark-jobs-using-chatgpt?u=76281980&t=39)** So you can think of writing a ChatGPT prompt, something like this saying, "Write a PySpark script to configure Spark settings for memory allocation and increase the number of partitions for a large data set," and you will find that ChatGPT has given you the exact configurations which you can change.
>
> **[1:03](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/optimizing-pyspark-jobs-using-chatgpt?u=76281980&t=63)** For example, you can set executor memory, you can set driver memory, you can set shuffle number partitions, setting executor core, enabling dynamic allocation.
>
> **[1:15](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/optimizing-pyspark-jobs-using-chatgpt?u=76281980&t=75)** So all these kind of configuration which can help you to improve that performance or tweak the performance has been given to you by ChatGPT.
>
> **[1:28](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/optimizing-pyspark-jobs-using-chatgpt?u=76281980&t=88)** Maybe let's take in another example.
>
> **[1:30](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/optimizing-pyspark-jobs-using-chatgpt?u=76281980&t=90)** Imagine that you feel that you have a piece of a data frame that is utilizing multiple times, and you think that if we can cache this data frame, that can improve the performance.
>
> **[1:45](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/optimizing-pyspark-jobs-using-chatgpt?u=76281980&t=105)** In that case, you wanted to cache it.
>
> **[1:49](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/optimizing-pyspark-jobs-using-chatgpt?u=76281980&t=109)** However, you do not know how it can be written.
>
> **[1:54](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/optimizing-pyspark-jobs-using-chatgpt?u=76281980&t=114)** Again, you can take the help of the ChatGPT.
>
> **[1:58](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/optimizing-pyspark-jobs-using-chatgpt?u=76281980&t=118)** You can write a prompt, something like this, "Write a PySpark script to cache a data frame that is used multiple times in subsequent operation," and then you will find that ChatGPT give you exact piece of a code on how you can cache this data frame.
>
> **[2:19](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/optimizing-pyspark-jobs-using-chatgpt?u=76281980&t=139)** If you want to cache the data frame, the code is dataframe.cache and that is what it has given to you.
>
> **[2:29](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/optimizing-pyspark-jobs-using-chatgpt?u=76281980&t=149)** It also give you a little bit explanation that will help you to get more information around it.
>
> **[2:36](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/optimizing-pyspark-jobs-using-chatgpt?u=76281980&t=156)** In fact, at some point, if you want to uncache or remove it from the cache, you can use the function called unpersist.
>
> **[2:46](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/optimizing-pyspark-jobs-using-chatgpt?u=76281980&t=166)** That is, also, it is giving you.
>
> **[2:48](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/optimizing-pyspark-jobs-using-chatgpt?u=76281980&t=168)** Another probable reason of your cod performing slow could be the data skewness, and if you feel that data skew could be one of a problem in your code as well and you have no idea on how you can tackle this data skewness, you can think of writing a prompt, something like this, "Write a PySpark script to handle data skew in a join operation using this sorting technique," and then you'll find that ChatGPT is going to give you the exact detail on how you can use this sorting technique to remove your data skewness problem.
>
> **[3:29](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/optimizing-pyspark-jobs-using-chatgpt?u=76281980&t=209)** That's how being a data engineer ChatGPT can be very useful in optimizing your PySpark code.
>
> **[3:37](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/optimizing-pyspark-jobs-using-chatgpt?u=76281980&t=217)** Let's move to the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (12), [[ChatGPT]] (8), [[PySpark]] (6), prompt (3), [[Big Data]] (1)
> **Analogies:** for example (2), imagine (2)
> **CLI Commands:** find (3)
> **Cross-References:** next video (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### Using ChatGPT in Databricks notebooks
> [LinkedIn Learning](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/using-chatgpt-in-databricks-notebooks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/using-chatgpt-in-databricks-notebooks?u=76281980&t=0)** - [Instructor] If you're working as a data engineer and writing a code in a PySpark, there's a very high chance that you might be using the Databricks because Databricks is very popular in the data engineering world, and people use this a lot for writing the Spark and PySpark Logic.
>
> **[0:21](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/using-chatgpt-in-databricks-notebooks?u=76281980&t=21)** Now imagine that you are writing in the Databricks and you want to take in help of ChatGPT.
>
> **[0:27](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/using-chatgpt-in-databricks-notebooks?u=76281980&t=27)** How you can do that?
>
> **[0:29](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/using-chatgpt-in-databricks-notebooks?u=76281980&t=29)** Let's see with an example.
>
> **[0:30](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/using-chatgpt-in-databricks-notebooks?u=76281980&t=30)** When you wanted to connect your Databricks with the Azure, there's a very common problem is mounting, and you want the help in that.
>
> **[0:39](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/using-chatgpt-in-databricks-notebooks?u=76281980&t=39)** In that case, you can think of writing a prompt, something like this.
>
> **[0:44](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/using-chatgpt-in-databricks-notebooks?u=76281980&t=44)** Generate a script to mount Azure Data Lake storage in Databricks using dbutils.
>
> **[0:51](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/using-chatgpt-in-databricks-notebooks?u=76281980&t=51)** Now ChatGPT can give you exact step by step code which you can use to mount the Azure Data Lake storage in the Databricks.
>
> **[1:02](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/using-chatgpt-in-databricks-notebooks?u=76281980&t=62)** So here, you can see that it gives you a configurable core where you can just give your storage account name, container name, mount point, and key.
>
> **[1:13](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/using-chatgpt-in-databricks-notebooks?u=76281980&t=73)** And based on all this information, you can go ahead and do the mounting.
>
> **[1:18](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/using-chatgpt-in-databricks-notebooks?u=76281980&t=78)** Then maybe in another scenario, you might be writing this Databricks code and you have mounted it and you are running it, but you come across a specific error.
>
> **[1:29](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/using-chatgpt-in-databricks-notebooks?u=76281980&t=89)** And if you want to sort this problem, you can again use ChatGPT prompt, something like this, you see, how can I troubleshoot a Py4J error in Databricks when running a PySpark job?
>
> **[1:45](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/using-chatgpt-in-databricks-notebooks?u=76281980&t=105)** So what you can do is you can copy paste your entire error and you can paste it here in the ChatGPT prompt and look for this solution from ChatGPT.
>
> **[1:58](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/using-chatgpt-in-databricks-notebooks?u=76281980&t=118)** Again, in this case, ChatGPT is giving you the solution based on the Databricks because I have added a context in my prompt saying that I am getting this specific error in the Databricks environment.
>
> **[2:13](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/using-chatgpt-in-databricks-notebooks?u=76281980&t=133)** This is how you can use the ChatGPT for the Databricks help as well.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ChatGPT]] (7), prompt (4), data (3), [[PySpark]] (3), [[Microsoft Azure|Azure]] (3)
> **Analogies:** imagine (1)
> **Warnings:** troubleshoot (1)
> **Speakers:** - [instructor] (1)


### 4. Security and Ethical Considerations

[↑ Back to Table of Contents](#table-of-contents)

#### Data privacy and security with ChatGPT
> [LinkedIn Learning](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/data-privacy-and-security-with-chatgpt?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/data-privacy-and-security-with-chatgpt?u=76281980&t=0)** - [Instructor] In today's data-driven world, ensuring the privacy and security of your data is not just about having a best practice in your project, but it is a kind of a mandatory thing for a lot of compliances or regulations like GDPR and CCPA.
>
> **[0:20](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/data-privacy-and-security-with-chatgpt?u=76281980&t=20)** How do you safeguard your data while still leveraging the powerful analytics?
>
> **[0:27](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/data-privacy-and-security-with-chatgpt?u=76281980&t=27)** Let's understand how ChatGPT can be helpful in implementing the data privacy and security measures in your data engineering projects.
>
> **[0:37](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/data-privacy-and-security-with-chatgpt?u=76281980&t=37)** Data privacy and security are not only the ethical obligations nowadays, but also a legal requirement.
>
> **[0:47](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/data-privacy-and-security-with-chatgpt?u=76281980&t=47)** Failure to protect sensitive data can result in severe consequences, including data breaches, legal penalties, and maybe the loss of customer trust.
>
> **[1:02](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/data-privacy-and-security-with-chatgpt?u=76281980&t=62)** By implementing the robust privacy and security measures in your data engineering workflows, you can safeguard data, minimize the risk, and ensure compliances with data protection regulations.
>
> **[1:19](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/data-privacy-and-security-with-chatgpt?u=76281980&t=79)** Let's take an example.
>
> **[1:20](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/data-privacy-and-security-with-chatgpt?u=76281980&t=80)** Imagine I have some secret or confidential information and I want to mask this specific information.
>
> **[1:30](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/data-privacy-and-security-with-chatgpt?u=76281980&t=90)** So how we can do that?
>
> **[1:32](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/data-privacy-and-security-with-chatgpt?u=76281980&t=92)** We can think of writing a specific prompt, something like this I can say.
>
> **[1:38](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/data-privacy-and-security-with-chatgpt?u=76281980&t=98)** Write a PySpark to mask sensitive information in a data frame by replacing all but the last four digit of the credit card number column with asterisks.
>
> **[1:52](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/data-privacy-and-security-with-chatgpt?u=76281980&t=112)** Now when you write this prompt and execute it, you will find that ChatGPT is going to give you exact code, which is going to mask the sensitive information.
>
> **[2:04](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/data-privacy-and-security-with-chatgpt?u=76281980&t=124)** Here if you see an example, we have this as a credit card number, and you can see that it is using this specific code snippet like concat repeat star to mask this credit card number, and this is how exactly you can mask specific sensitive information in your column.
>
> **[2:28](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/data-privacy-and-security-with-chatgpt?u=76281980&t=148)** In some cases, you may need to anonymize data to remove personal identifiable information, that is PII, while retaining its analytical value data.
>
> **[2:42](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/data-privacy-and-security-with-chatgpt?u=76281980&t=162)** Anonymization can help you use data for analysis without compromising privacy.
>
> **[2:49](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/data-privacy-and-security-with-chatgpt?u=76281980&t=169)** For that, we can think of writing a prompt, something like this.
>
> **[2:54](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/data-privacy-and-security-with-chatgpt?u=76281980&t=174)** Write a PySpark Script to anonymize customer names in data frame by replacing them with a unique identifier.
>
> **[3:05](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/data-privacy-and-security-with-chatgpt?u=76281980&t=185)** Now here you can see that.
>
> **[3:08](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/data-privacy-and-security-with-chatgpt?u=76281980&t=188)** Again, it is writing a code for you where it is generating an anonymized data.
>
> **[3:14](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/data-privacy-and-security-with-chatgpt?u=76281980&t=194)** So this is how it is generating an anonymized data for you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (16), [[Privacy]] (5), [[Security]] (4), prompt (3), [[ChatGPT]] (2)
> **Env Vars:** gdpr (1), ccpa (1), pii (1)
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Analogies:** imagine (1)
> **Best Practices:** best practice (1)
> **Speakers:** - [instructor] (1)

#### Ethical AI usage in data engineering
> [LinkedIn Learning](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/ethical-ai-usage-in-data-engineering?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/ethical-ai-usage-in-data-engineering?u=76281980&t=0)** - [Instructor] AI is transforming data engineering, but with the great power, comes the great responsibility.
>
> **[0:07](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/ethical-ai-usage-in-data-engineering?u=76281980&t=7)** How you can ensure that the AI-driven data solutions are fair, transparent, and ethical?
>
> **[0:16](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/ethical-ai-usage-in-data-engineering?u=76281980&t=16)** Let's understand this in more detail.
>
> **[0:20](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/ethical-ai-usage-in-data-engineering?u=76281980&t=20)** AI ethics is about ensuring that AI systems are used in the ways that are fair, transparent, and respectful of individual rights.
>
> **[0:33](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/ethical-ai-usage-in-data-engineering?u=76281980&t=33)** Unethical AI practices such as bias algorithms or misuse of the personal data can lead to discrimination, privacy validations, and loss of trust.
>
> **[0:45](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/ethical-ai-usage-in-data-engineering?u=76281980&t=45)** By focusing on ethical AI usage, we can build the data solutions that not only deliver the insights, but also uphold the ethical standards.
>
> **[0:59](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/ethical-ai-usage-in-data-engineering?u=76281980&t=59)** One of the key ethical concern in AI is the biasing.
>
> **[1:03](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/ethical-ai-usage-in-data-engineering?u=76281980&t=63)** Bias in the data can lead to the AI models that make unfair or discriminatory decision.
>
> **[1:11](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/ethical-ai-usage-in-data-engineering?u=76281980&t=71)** Let's understand what could be the steps to mitigate that biasing in the data?
>
> **[1:18](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/ethical-ai-usage-in-data-engineering?u=76281980&t=78)** Probably, you need to analyze the data set, perform the data auditing, you balance the data set.
>
> **[1:27](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/ethical-ai-usage-in-data-engineering?u=76281980&t=87)** This can involve oversampling your underrepresented groups or undersampling the overrepresented groups.
>
> **[1:36](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/ethical-ai-usage-in-data-engineering?u=76281980&t=96)** Another thing could be having a fairness metric which can evaluate the model's performance across different demographic groups, and avoid using a feature that can introduce biasing.
>
> **[1:51](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/ethical-ai-usage-in-data-engineering?u=76281980&t=111)** Example, race, gender, which is might be unnecessary in that.
>
> **[1:56](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/ethical-ai-usage-in-data-engineering?u=76281980&t=116)** By taking these small steps, you can reduce the biasing in your data and build an AI model that are fair and more equitable.
>
> **[2:08](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/ethical-ai-usage-in-data-engineering?u=76281980&t=128)** AI model, especially complex ones, are very similar to like a black box.
>
> **[2:15](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/ethical-ai-usage-in-data-engineering?u=76281980&t=135)** It's difficult to understand how they are making their decisions.
>
> **[2:20](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/ethical-ai-usage-in-data-engineering?u=76281980&t=140)** However, having the transparency and explainability can help in building the trust and accountability for AI systems.
>
> **[2:29](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/ethical-ai-usage-in-data-engineering?u=76281980&t=149)** Let's understand what are the different strategies that can be followed.
>
> **[2:34](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/ethical-ai-usage-in-data-engineering?u=76281980&t=154)** Probably we can choose the simpler models.
>
> **[2:38](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/ethical-ai-usage-in-data-engineering?u=76281980&t=158)** We can use the feature importance score to understand which specific feature is contributing to the most.
>
> **[2:45](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/ethical-ai-usage-in-data-engineering?u=76281980&t=165)** We can also think of implementing the model-agnostic methods like LIME, local interpretable model-agnostic explanation, that basically explain the predictions for individual instances.
>
> **[3:01](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/ethical-ai-usage-in-data-engineering?u=76281980&t=181)** You can also think of creating transparency report or build an interactive dashboard that allow users to explore the model's behaviors.
>
> **[3:11](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/ethical-ai-usage-in-data-engineering?u=76281980&t=191)** AI models often rely on vast amount of data and some of which may include your personal information that could have a conflict with the compliances like GDPR and CCPA.
>
> **[3:26](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/ethical-ai-usage-in-data-engineering?u=76281980&t=206)** So probably we can take this step to avoid any breaching of those regulations like data minimization using the only data which is necessary, data anonymization, where you are not sharing the actual information, encryption, opting consent, and ensure compliances and especially implement the data access control, so only right people will have access to the right information.
>
> **[3:57](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/ethical-ai-usage-in-data-engineering?u=76281980&t=237)** We can also establish the ethical guidelines for the AI usage in your project, like you can define your ethical principles, you could create an ethic committee, conduct an ethical assessments, and develop a very crystal clear policies what is accepted and what is unacceptable, provide trainings and awareness to the team, and do continuous monitoring of these principles are followed or not.
>
> **[4:29](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/ethical-ai-usage-in-data-engineering?u=76281980&t=269)** Ethical AI usage is crucial for building trust and ensuring that AI systems are used responsibly.
>
> **[4:37](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/ethical-ai-usage-in-data-engineering?u=76281980&t=277)** So while you making use of ChatGPT in your project, try to ensure that you are following the all AI ethical practices.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** ai (16), data (14), feature (3), [[Data Engineering]] (1), power (1)
> **Env Vars:** lime (1), gdpr (1), ccpa (1)
> **Analogies:** such as (1), similar to (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### Ensuring compliance and data governance
> [LinkedIn Learning](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/ensuring-compliance-and-data-governance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/ensuring-compliance-and-data-governance?u=76281980&t=0)** - [Instructor] In a world governed by data, compliance is not just about following the rules.
>
> **[0:07](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/ensuring-compliance-and-data-governance?u=76281980&t=7)** It is about building the trust and maintaining the integrity of your data practices.
>
> **[0:13](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/ensuring-compliance-and-data-governance?u=76281980&t=13)** Let's understand why data governance and compliance matters.
>
> **[0:18](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/ensuring-compliance-and-data-governance?u=76281980&t=18)** Data governance and compliance are essential for managing data assets effectively.
>
> **[0:25](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/ensuring-compliance-and-data-governance?u=76281980&t=25)** It's also important for protecting this sensitive information and maintaining the trust with customers and stakeholders.
>
> **[0:36](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/ensuring-compliance-and-data-governance?u=76281980&t=36)** Non-compliance can result in legal penalties.
>
> **[0:41](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/ensuring-compliance-and-data-governance?u=76281980&t=41)** It can also cause data breaches and reputation damages.
>
> **[0:46](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/ensuring-compliance-and-data-governance?u=76281980&t=46)** By implementing the strong data governance practice and ensuring the compliance, you can safeguard the data, support data-driven decision making, and foster a culture of accountability.
>
> **[1:03](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/ensuring-compliance-and-data-governance?u=76281980&t=63)** Implementation of data governance policies start with defining the data governance policies.
>
> **[1:09](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/ensuring-compliance-and-data-governance?u=76281980&t=69)** So you should have very crystal clear policies defined throughout your organizations and the project, and it could be something like this.
>
> **[1:19](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/ensuring-compliance-and-data-governance?u=76281980&t=79)** You should have a policy for data access that defines who could have access to a specific data, and to implement that, you can use the RBAC, that is role-based access control.
>
> **[1:34](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/ensuring-compliance-and-data-governance?u=76281980&t=94)** You should also set the data quality standards to ensure accuracy and completeness of your data.
>
> **[1:42](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/ensuring-compliance-and-data-governance?u=76281980&t=102)** You should also think about establishing the security protocols to protect your sensitive data from unauthorized access.
>
> **[1:51](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/ensuring-compliance-and-data-governance?u=76281980&t=111)** You should think of developing data privacy policies that complies with regulations like GDPR and CCPA.
>
> **[1:59](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/ensuring-compliance-and-data-governance?u=76281980&t=119)** You should also define the lifecycle of data from creation to the disposal to effectively manage your data storage.
>
> **[2:09](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/ensuring-compliance-and-data-governance?u=76281980&t=129)** You should also set up the monitoring and auditing mechanism to track the data access, usage, and modification.
>
> **[2:18](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/ensuring-compliance-and-data-governance?u=76281980&t=138)** By defining and implementing these data governance policies, you can ensure that data is managed responsibly, protected from the risk, and used effectively to drive decision making.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (21), [[Data-driven Decision Making]] (1), [[Accountability]] (1), [[Security]] (1), [[Privacy]] (1)
> **Env Vars:** rbac (1), gdpr (1), ccpa (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/next-steps?u=76281980&t=0)** - [Deepak] That brings us to the end of the course.
>
> **[0:02](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/next-steps?u=76281980&t=2)** You did great in understanding and learning ChatGPT for data engineering, but we have only scratched the surface of the data world, so by no means is this the end.
>
> **[0:15](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/next-steps?u=76281980&t=15)** I encourage you to keep moving forward in your learning journey.
>
> **[0:19](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/next-steps?u=76281980&t=19)** You can start by taking my live data engineering program, Mission 100 Azure Data Engineer.
>
> **[0:26](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/next-steps?u=76281980&t=26)** You can find the program on my LinkedIn profile page itself.
>
> **[0:30](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/next-steps?u=76281980&t=30)** Again, my name is Deepak Goyal and it has been both my pleasure and honor to teach you the skills of ChatGPT for data engineering.
>
> **[0:41](https://www.linkedin.com/learning/generative-ai-for-data-engineering-chatgpt-power-tips/next-steps?u=76281980&t=41)** Thank you for watching, investing in yourself, and for allowing me to be a small part of your learning journey.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Engineering]] (3), [[ChatGPT]] (2), data (2), [[Microsoft Azure|Azure]] (1), [[LinkedIn]] (1)
> **CLI Commands:** find (1)
> **Speakers:** - [deepak] (1)


## Instructor

- [[Deepak Goyal]]

## Skills Covered

- Data Engineering
- Artificial Intelligence (AI)
- ChatGPT
- Prompt Engineering

## Path Context

### In [[Explore AI for Data Engineering]]
← [[Using AI to Improve Ops for Your Data Organization]] | **4 of 8** | [[Introduction To Ai Native Vector Databases]] →

## Appears In

- [[Explore AI for Data Engineering]]

## Related Courses

_Courses sharing skills:_

- [[Prompt Engineering and AI Agents with ChatGPT]] — Artificial Intelligence (AI), ChatGPT, Prompt Engineering
- [[Prompting ChatGPT with Multimodal Techniques]] — Artificial Intelligence (AI), ChatGPT, Prompt Engineering
- [[Better Relationships and More Sales- Using ChatGPT to Sell]] — Artificial Intelligence (AI), ChatGPT
- [[AI Agents Made Simple- Your Zero-to-Hero Guide to Prompting for Work Automation]] — Artificial Intelligence (AI), Prompt Engineering
- [[Power BI- Working Together with ChatGPT]] — Artificial Intelligence (AI), ChatGPT

---

[↑ Back to top](#)