---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: machine-learning-and-ai-foundations-decision-trees-with-knime
url: "https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime"
duration_minutes: 124
duration: 2h 4m
level: Intermediate
updated: 7/22/2025
learners: 79555
skills:
  - Knime
  - Machine Learning
  - Artificial Intelligence (AI)
  - Decision Trees
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQFHGDI-Ei5OJQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1655420568390?e=2147483647&amp;v=beta&amp;t=ZfXtX5Ulqem9pZX-kF3j0JFkWGgY76ZAU29KCpfCpaI"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Advance Your Skills as a Machine Learning Specialist]]'
  - '[[Learning Codeless Machine Learning with KNIME]]'
prev_courses:
  - '[[Machine Learning and AI Foundations- Producing Explainable AI (XAI) and Interpretable Machine Learning Solutions]]'
  - '[[Introduction To Machine Learning With Knime]]'
next_courses:
  - '[[Machine Learning and AI Foundations- Causal Inference and Modeling]]'
  - '[[Data Science Foundations- Data Assessment for Predictive Modeling]]'
path_nav: '[{"path":"Advance Your Skills as a Machine Learning Specialist","position":6,"total":9,"prev":"Machine Learning and AI Foundations- Producing Explainable AI (XAI) and Interpretable Machine Learning Solutions","next":"Machine Learning and AI Foundations- Causal Inference and Modeling"},{"path":"Learning Codeless Machine Learning with KNIME","position":2,"total":5,"prev":"Introduction To Machine Learning With Knime","next":"Data Science Foundations- Data Assessment for Predictive Modeling"}]'
path_count: 2
tags:
  - course
  - topic/artificial-intelligence
  - topic/software-development
  - topic/data-science
  - skill/knime
  - skill/machine-learning
  - skill/artificial-intelligence-ai
  - skill/decision-trees
status: not-started
created: 2026-04-28
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Machine%20Learning%20and%20AI%20Foundations-%20Decision%20Trees%20with%20KNIME.md)

![Machine Learning and AI Foundations: Decision Trees with KNIME](https://media.licdn.com/dms/image/v2/C560DAQFHGDI-Ei5OJQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1655420568390?e=2147483647&amp;v=beta&amp;t=ZfXtX5Ulqem9pZX-kF3j0JFkWGgY76ZAU29KCpfCpaI)

# Machine Learning and AI Foundations: Decision Trees with KNIME

> Suggested prerequisites General familiarity with supervised machine learning Understanding of terms such as target variable, input variable, algorithm, and train/test partition Decision trees are transparent, available in every platform, and foundational to more advanced techniques like Random Forests and XGBoost. And if you’re a data scientist looking to pivot to machine learning, there’s arguabl

> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime) | 2h 4m | Intermediate | 80K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **1. Introduction** (3 videos)
- **2. 1. Introducing Decision Trees** (5 videos)
- **3. 2. Introducing the C5.0 Algorithm** (12 videos)
- **4. 3. Introducing Classification Trees** (7 videos)
- **5. 4. Introducing Regression Trees** (9 videos)
- **6. Conclusion** (1 videos)

### 1. Introduction

#### The basics of decision trees
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-basics-of-decision-trees?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-basics-of-decision-trees?u=76281980&t=0)** - [Keith] If you are interested in data science and machine learning, decision trees are one of the most foundational topics of all.
>
> **[0:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-basics-of-decision-trees?u=76281980&t=9)** They have been in widespread use for many years.
>
> **[0:12](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-basics-of-decision-trees?u=76281980&t=12)** So they represent a topic that as data professionals, we are expected to be familiar with.
>
> **[0:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-basics-of-decision-trees?u=76281980&t=18)** Just as important, learning about them is a critical first step to understand more complex techniques like XGBoost and Random Forests.
>
> **[0:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-basics-of-decision-trees?u=76281980&t=29)** Hi, I'm Keith McCormick, and decision trees have been among the techniques that I've used throughout my career.
>
> **[0:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-basics-of-decision-trees?u=76281980&t=35)** Even when I haven't deployed a decision tree model as a final solution, it has often played an important role in my analysis.
>
> **[0:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-basics-of-decision-trees?u=76281980&t=44)** We'll focus on the basics in this course.
>
> **[0:47](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-basics-of-decision-trees?u=76281980&t=47)** We will be using the nine analytics platform for demonstration purposes, but we will be focused on the concepts.
>
> **[0:56](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-basics-of-decision-trees?u=76281980&t=56)** In particular, we will be exploring three of the most widely known and adopted decision tree algorithms, C4.5, classification trees, and regression trees.
>
> **[1:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-basics-of-decision-trees?u=76281980&t=68)** You will be able to apply the concepts to any platform whether it be R or Python or another analytics workbench.
>
> **[1:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-basics-of-decision-trees?u=76281980&t=77)** So this is a course for all data scientists that are interested in decision trees.
>
> **[1:24](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-basics-of-decision-trees?u=76281980&t=84)** We have a lot to cover, so let's get started.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2)
> **CLI Commands:** python (1)
> **Code Keywords:** let (1)
> **Speakers:** - [keith] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/what-you-should-know?u=76281980&t=0)** - [Instructor] So what should you know to take full advantage of this course?
>
> **[0:04](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/what-you-should-know?u=76281980&t=4)** The only prerequisite is that you have a general familiarity with supervised machine learning.
>
> **[0:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/what-you-should-know?u=76281980&t=11)** So terms like target variable, input variable, algorithm, and train test partition should be familiar.
>
> **[0:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/what-you-should-know?u=76281980&t=19)** We keep it pretty basic, so it might work as a first course, but if some of that is unfamiliar, you might want to consider either my Predictive Analytics Essentials Data Mining course or my Introduction to Classification course.
>
> **[0:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/what-you-should-know?u=76281980&t=35)** But not to worry about KNIME.
>
> **[0:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/what-you-should-know?u=76281980&t=38)** It's super easy to learn, and we'll be doing just enough to perform the demonstrations.
>
> **[0:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/what-you-should-know?u=76281980&t=44)** We're focused on concepts, not on KNIME.
>
> **[0:48](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/what-you-should-know?u=76281980&t=48)** There is an Introduction to KNIME in the library, but there's no requirement to take that first.
>
> **[0:54](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/what-you-should-know?u=76281980&t=54)** Everything you need to know about KNIME will be taught right here in this course.

> [!info]- Semantic Content
>
> **Env Vars:** knime (4)
> **Code Keywords:** super (1)
> **Definitions:** is an  (1)
> **Prerequisites:** prerequisite (1)
> **Speakers:** - [instructor] (1)

#### How to use the practice files
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-to-use-the-practice-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-to-use-the-practice-files?u=76281980&t=0)** - [Instructor] I want to make a couple of very quick comments about how to use the practice files.
>
> **[0:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-to-use-the-practice-files?u=76281980&t=6)** You're looking at a KNIME Analytics Platform workflow.
>
> **[0:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-to-use-the-practice-files?u=76281980&t=11)** Everything you need to know about KNIME and the practice files will be explained in the course.
>
> **[0:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-to-use-the-practice-files?u=76281980&t=19)** But here's a couple of reminders.
>
> **[0:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-to-use-the-practice-files?u=76281980&t=21)** First, in KNIME, you won't be opening the workflow, you'll be importing it.
>
> **[0:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-to-use-the-practice-files?u=76281980&t=29)** So you're going to be using this menu here.
>
> **[0:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-to-use-the-practice-files?u=76281980&t=32)** When you do so, it's going to appear in this local workspace area and that's how you'll access it.
>
> **[0:41](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-to-use-the-practice-files?u=76281980&t=41)** The next thing I want to remind you about is data.
>
> **[0:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-to-use-the-practice-files?u=76281980&t=44)** You're going to receive a workflow for each chapter.
>
> **[0:47](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-to-use-the-practice-files?u=76281980&t=47)** Chapter two, chapter three and chapter four.
>
> **[0:51](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-to-use-the-practice-files?u=76281980&t=51)** Chapter one won't have any workflows and you're also going to get the supporting data.
>
> **[0:56](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-to-use-the-practice-files?u=76281980&t=56)** However, the source node, I'm going to go ahead and open this.
>
> **[1:03](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-to-use-the-practice-files?u=76281980&t=63)** The source node is going to be looking for the file on my machine, not on yours.
>
> **[1:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-to-use-the-practice-files?u=76281980&t=70)** So you're going to have to use the browse button to make sure that you've directed it to where on your machine you've put the file.
>
> **[1:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-to-use-the-practice-files?u=76281980&t=80)** And there you have it. That's all you need to know.
>
> **[1:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-to-use-the-practice-files?u=76281980&t=83)** And as you move along through the course, you'll be told what files you need and you'll also be told everything you need to know about KNIME.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2), node (2)
> **Env Vars:** knime (4)
> **Code Keywords:** this. (1)
> **Speakers:** - [instructor] (1)


### 2. 1. Introducing Decision Trees

#### What is a decision tree?
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/what-is-a-decision-tree?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/what-is-a-decision-tree?u=76281980&t=0)** - [Instructor] For years after conference workshops, I've been approached during Q and A with a question, something like this, "Thanks for the workshop today but there's so much to learn, where should I start?"
>
> **[0:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/what-is-a-decision-tree?u=76281980&t=14)** And for years, my answer has been to start with decision trees.
>
> **[0:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/what-is-a-decision-tree?u=76281980&t=20)** So why decision trees?
>
> **[0:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/what-is-a-decision-tree?u=76281980&t=22)** Well, they're relatively easy to learn, they're transparent, they're available in every platform.
>
> **[0:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/what-is-a-decision-tree?u=76281980&t=30)** Whether you choose a platform like KNIME or if you're a coder using Python or R.
>
> **[0:39](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/what-is-a-decision-tree?u=76281980&t=39)** Finally, they're foundational to more advanced techniques.
>
> **[0:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/what-is-a-decision-tree?u=76281980&t=44)** For instance, Random Forests and XGBoost are both extremely powerful contemporary techniques that absolutely are based on decision trees, like the ones that we're about to see.
>
> **[0:59](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/what-is-a-decision-tree?u=76281980&t=59)** So what is a decision tree?
>
> **[1:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/what-is-a-decision-tree?u=76281980&t=61)** Decision trees are a supervised machine learning technique.
>
> **[1:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/what-is-a-decision-tree?u=76281980&t=65)** We'll have more to say about that and exactly what that means a bit later.
>
> **[1:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/what-is-a-decision-tree?u=76281980&t=70)** For now, the key feature is that we are trying to predict something.
>
> **[1:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/what-is-a-decision-tree?u=76281980&t=75)** The root node of the tree is at the top.
>
> **[1:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/what-is-a-decision-tree?u=76281980&t=78)** And in that node, we learn more about the frequencies of what we're trying to predict.
>
> **[1:24](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/what-is-a-decision-tree?u=76281980&t=84)** So here we have a credit score data set, and credit risk is about 6 or 7%.
>
> **[1:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/what-is-a-decision-tree?u=76281980&t=93)** So in this example, we have data that's been divided into two groups.
>
> **[1:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/what-is-a-decision-tree?u=76281980&t=98)** Those that will experience a serious delinquency within two years and those that will not.
>
> **[1:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/what-is-a-decision-tree?u=76281980&t=105)** Those coded one who will experience a delinquency are 6.7% of the data set.
>
> **[1:53](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/what-is-a-decision-tree?u=76281980&t=113)** The top branch of the decision tree indicates the variable that was the best at predicting those two categories.
>
> **[2:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/what-is-a-decision-tree?u=76281980&t=120)** In this instance, its number of times they were 90 days late.
>
> **[2:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/what-is-a-decision-tree?u=76281980&t=126)** The tree then continues to branch using more and more variables until the algorithm that you've chosen determines that it's time to stop.
>
> **[2:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/what-is-a-decision-tree?u=76281980&t=135)** Now there's more than one algorithm and we'll actually be learning two classification algorithms and one regression algorithm in this course.
>
> **[2:25](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/what-is-a-decision-tree?u=76281980&t=145)** Finally, the tree reaches what are called leaf nodes.
>
> **[2:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/what-is-a-decision-tree?u=76281980&t=149)** The tree has stopped growing.
>
> **[2:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/what-is-a-decision-tree?u=76281980&t=151)** The cases in these leaf nodes represent a relatively small segment of the total data set that has either a high or low concentration of what you're trying to predict.
>
> **[2:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/what-is-a-decision-tree?u=76281980&t=164)** So for instance, in this leaf node, the default rate, or rather the serious delinquency rate, is much higher than in the root node.
>
> **[2:55](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/what-is-a-decision-tree?u=76281980&t=175)** You can translate these leaf nodes into if-then statements.
>
> **[3:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/what-is-a-decision-tree?u=76281980&t=180)** So for instance, if number of times 90 days late is greater than one, and number of times 60 to 89 days late is greater than zero, then likelihood of serious delinquency within two years is over 60%, at 62.2%.
>
> **[3:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/what-is-a-decision-tree?u=76281980&t=206)** So there you have it.
>
> **[3:27](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/what-is-a-decision-tree?u=76281980&t=207)** Those are some of the main features that all decision trees have in common.

> [!info]- Semantic Content
>
> **CLI Commands:** node (4), python (1)
> **Code Keywords:** finally, (2), this, (1)
> **Analogies:** for instance (3)
> **Versions:** 6.7 (1), 62.2 (1)
> **Env Vars:** knime (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### The pros and cons of decision trees
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-pros-and-cons-of-decision-trees?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-pros-and-cons-of-decision-trees?u=76281980&t=0)** - [Instructor] So what are some of the pros and cons of using decision trees, specifically the algorithms in this course, classification trees, regression trees, and the C4.5 algorithm?
>
> **[0:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-pros-and-cons-of-decision-trees?u=76281980&t=17)** Well, let's start with the advantages.
>
> **[0:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-pros-and-cons-of-decision-trees?u=76281980&t=20)** There are other benefits of trees in addition to the ones that we've already discussed.
>
> **[0:25](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-pros-and-cons-of-decision-trees?u=76281980&t=25)** Trees are great for what's called data reduction.
>
> **[0:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-pros-and-cons-of-decision-trees?u=76281980&t=29)** Since not all the variables are used you can start with a large number of variables and the tree algorithm will indicate which of those variables are likely to be the most useful.
>
> **[0:41](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-pros-and-cons-of-decision-trees?u=76281980&t=41)** This is helpful even if you end up using another algorithm like neural networks.
>
> **[0:46](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-pros-and-cons-of-decision-trees?u=76281980&t=46)** Next, they're great for data exploration.
>
> **[0:50](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-pros-and-cons-of-decision-trees?u=76281980&t=50)** I always urge folks to start with decision trees for exactly this reason.
>
> **[0:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-pros-and-cons-of-decision-trees?u=76281980&t=57)** It gets you familiar with the data.
>
> **[0:59](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-pros-and-cons-of-decision-trees?u=76281980&t=59)** If you start with a black box technique you're denying yourself the opportunity to acclimate to your data set.
>
> **[1:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-pros-and-cons-of-decision-trees?u=76281980&t=66)** Also, because of the way that branches form, trees are very helpful in indicating key cut-points on scale variables and where different categories on categorical variables could possibly be combined or merged.
>
> **[1:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-pros-and-cons-of-decision-trees?u=76281980&t=83)** So in addition to those additional benefits there are a number of things that trees are just generally very good at.
>
> **[1:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-pros-and-cons-of-decision-trees?u=76281980&t=92)** They can handle a wide variety of data.
>
> **[1:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-pros-and-cons-of-decision-trees?u=76281980&t=95)** They're really quite robust to data issues, including missing data and nonlinearity.
>
> **[1:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-pros-and-cons-of-decision-trees?u=76281980&t=103)** We've already indicated that they can handle a large number of inputs.
>
> **[1:47](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-pros-and-cons-of-decision-trees?u=76281980&t=107)** Well, compared to what?
>
> **[1:49](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-pros-and-cons-of-decision-trees?u=76281980&t=109)** For instance, some techniques, neural nets come to mind, have the tendency to get overfit.
>
> **[1:56](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-pros-and-cons-of-decision-trees?u=76281980&t=116)** That's when your accuracy appears to be good but then fails to generalize on other data.
>
> **[2:04](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-pros-and-cons-of-decision-trees?u=76281980&t=124)** Well, trees, as we've seen can be a way of pairing down all of those variables.
>
> **[2:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-pros-and-cons-of-decision-trees?u=76281980&t=131)** So you can feed trees a large number of inputs and since it doesn't have to use them all, it can actually handle that reasonably well.
>
> **[2:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-pros-and-cons-of-decision-trees?u=76281980&t=142)** Finally, because you can convert your leaf nodes into a series of if-then statements, it's extremely easy to deploy trees and that includes deployment outside of whatever platform you develop them in.
>
> **[2:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-pros-and-cons-of-decision-trees?u=76281980&t=158)** So for instance, you could develop the tree in Nym but deploy it using SQL or a whole variety of other things.
>
> **[2:46](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-pros-and-cons-of-decision-trees?u=76281980&t=166)** It's very easy to get trees out of the platform in which you built them and into something else that's conducive to your data warehouse or helpful to you in some other way.
>
> **[2:56](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-pros-and-cons-of-decision-trees?u=76281980&t=176)** What about some of the disadvantages?
>
> **[2:59](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-pros-and-cons-of-decision-trees?u=76281980&t=179)** Well somewhat famously, trees are what's called a greedy algorithm.
>
> **[3:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-pros-and-cons-of-decision-trees?u=76281980&t=185)** If you haven't heard that phrase, what does it mean?
>
> **[3:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-pros-and-cons-of-decision-trees?u=76281980&t=187)** Well, it means that as the tree forms it forms the top branch and then continues to branch and it never reconsiders that top branch.
>
> **[3:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-pros-and-cons-of-decision-trees?u=76281980&t=197)** For that reason, it's described as greedy because it's only focused on the branch at the moment.
>
> **[3:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-pros-and-cons-of-decision-trees?u=76281980&t=206)** It's not forward thinking.
>
> **[3:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-pros-and-cons-of-decision-trees?u=76281980&t=208)** You could also describe greedy as short term thinking in a sense.
>
> **[3:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-pros-and-cons-of-decision-trees?u=76281980&t=212)** So when the algorithm doesn't optimally choose a top branch and that can happen, it affects the tree all the way down.
>
> **[3:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-pros-and-cons-of-decision-trees?u=76281980&t=223)** The reason they did this is because when tree algorithms were first developed they were considered rather slow.
>
> **[3:50](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-pros-and-cons-of-decision-trees?u=76281980&t=230)** Some contemporary researchers have tried to address this problem by developing tree techniques that reconsider the top branch but they're much more computationally intensive.
>
> **[4:02](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-pros-and-cons-of-decision-trees?u=76281980&t=242)** They're not as well known.
>
> **[4:04](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-pros-and-cons-of-decision-trees?u=76281980&t=244)** And for that reason we won't be discussing them in this course.
>
> **[4:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-pros-and-cons-of-decision-trees?u=76281980&t=248)** Next, trees often grow very large and complex.
>
> **[4:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-pros-and-cons-of-decision-trees?u=76281980&t=253)** And when that happens, their reputation as a transparent technique starts to erode a bit.
>
> **[4:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-pros-and-cons-of-decision-trees?u=76281980&t=261)** Imagine for instance, a tree that had 50 or a hundred or more than a hundred leaf nodes.
>
> **[4:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-pros-and-cons-of-decision-trees?u=76281980&t=268)** Your ability to understand it at a glance is no longer in place.
>
> **[4:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-pros-and-cons-of-decision-trees?u=76281980&t=273)** Finally, and this one is a bit of a source of frustration, just because the techniques have been around for a while they really don't have the reputation of being the most accurate anymore.
>
> **[4:47](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-pros-and-cons-of-decision-trees?u=76281980&t=287)** Also, because they're transparent, I urge you to build a decision tree, just like the ones we're going to see in this course before you build an algorithm that produces a black box model and then you can use the decision tree as a pace car.
>
> **[5:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-pros-and-cons-of-decision-trees?u=76281980&t=307)** And that's a very powerful technique.
>
> **[5:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-pros-and-cons-of-decision-trees?u=76281980&t=310)** Where you establish a baseline level of accuracy, and sure, go ahead, and set aside your decision tree and go for a more complex, perhaps more accurate technique but only if the improvement and accuracy is worth it.
>
> **[5:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-pros-and-cons-of-decision-trees?u=76281980&t=328)** And that's a terribly important piece of advice.

> [!info]- Semantic Content
>
> **Analogies:** for instance (3), imagine (1), just like (1)
> **Code Keywords:** finally, (2), let (1)
> **Definitions:** means that (1), is a  (1)
> **Env Vars:** sql (1)
> **Speakers:** - [instructor] (1)

#### Introducing KNIME
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/introducing-knime?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/introducing-knime?u=76281980&t=0)** - [Man] Okay, let's talk about the KNIME analytics platform, which is going to be perfect for our purposes because it has good support of decision trees and it's easy to install and easy to use.
>
> **[0:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/introducing-knime?u=76281980&t=15)** So I'm not going to do a detailed walkthrough of download 'cause they really do make it easy, so here we are on the KNIME website.
>
> **[0:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/introducing-knime?u=76281980&t=22)** If you simply go to download and certainly register if you care to, but then go to download KNIME, and they've got support for Windows, Linux, and Mac.
>
> **[0:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/introducing-knime?u=76281980&t=34)** So let's take a look.
>
> **[0:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/introducing-knime?u=76281980&t=36)** So what I'd like to do is walk you through the very, very basics.
>
> **[0:41](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/introducing-knime?u=76281980&t=41)** If you really want to dive in and thoroughly learn KNIME and then come back to decision trees, you certainly can do that if you like.
>
> **[0:50](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/introducing-knime?u=76281980&t=50)** I have a course that introduces KNIME right here in the library, but we're going to learn everything you need to know if your focus is decision trees.
>
> **[1:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/introducing-knime?u=76281980&t=61)** So the first thing we're going to do is go over here to the node repository and just type in decision trees.
>
> **[1:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/introducing-knime?u=76281980&t=68)** It's as simple as that, and you would think, wow, it seems like I'm almost ready to go.
>
> **[1:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/introducing-knime?u=76281980&t=73)** I've got the Decision Tree View, the Decision Tree to Ruleset node, the Decision Tree Learner.
>
> **[1:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/introducing-knime?u=76281980&t=82)** Maybe what you should do is start with a blank workflow, drag over these nodes, and try to learn how to connect them.
>
> **[1:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/introducing-knime?u=76281980&t=90)** So for instance, if you click on Decision Tree Learner, over here in the help window, I'll make that a little bit wider, there's a whole bunch of explanation of how to use that node, and that is a perfectly fine way to do it, but there is a better way, and the better way is to go over here to EXAMPLES and double-click.
>
> **[1:51](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/introducing-knime?u=76281980&t=111)** If you're doing any of the everyday ordinary tasks within KNIME, there's going to be an example.
>
> **[1:58](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/introducing-knime?u=76281980&t=118)** There's a ton of these examples and there's excellent support here.
>
> **[2:02](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/introducing-knime?u=76281980&t=122)** So we can go down to Analytics, we can go down to Classification and Predictive Modelling, and then sure enough, we find Example for Learning a Decision Tree.
>
> **[2:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/introducing-knime?u=76281980&t=131)** So if you double-click on that, there you go, it's right in the middle of the screen, and I want to show you one of my favorite tricks.
>
> **[2:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/introducing-knime?u=76281980&t=140)** These windows are pretty important, so we'll make those smaller, but not get rid of them, and then the outline, we can set aside for now, and I'm just closing windows.
>
> **[2:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/introducing-knime?u=76281980&t=151)** That's all, just getting some of these things out of our way.
>
> **[2:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/introducing-knime?u=76281980&t=153)** Even though they're very useful, we don't need them at the moment, and I'm going to zoom in.
>
> **[2:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/introducing-knime?u=76281980&t=158)** Let's see what 125% looks like.
>
> **[2:41](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/introducing-knime?u=76281980&t=161)** That's actually pretty good.
>
> **[2:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/introducing-knime?u=76281980&t=163)** Okay.
>
> **[2:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/introducing-knime?u=76281980&t=164)** And here's our example.
>
> **[2:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/introducing-knime?u=76281980&t=165)** So this is a KNIME workflow, and in just a couple of moments, we're going to do a detailed walkthrough of this workflow so you can see how KNIME works.
>
> **[2:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/introducing-knime?u=76281980&t=177)** But before we do that, one more tip that I want to share with you.
>
> **[3:02](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/introducing-knime?u=76281980&t=182)** If you go up to the menus and to View, you have the option of Reset Perspective, and that will bring all those other windows back, so go ahead and close 'em without fear that you're not going to know how to bring 'em back.
>
> **[3:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/introducing-knime?u=76281980&t=198)** You can always use Reset Perspective, but we don't need that at the moment.
>
> **[3:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/introducing-knime?u=76281980&t=203)** That's all you need to get oriented just to the setup of KNIME, and now we're going to talk about our first example.

> [!info]- Semantic Content
>
> **Env Vars:** knime (9), examples (1)
> **CLI Commands:** make (3), node (3), find (1)
> **UI Navigation:** go to (2), double-click (2), click on (1)
> **Code Keywords:** let (3)
> **Definitions:** is a  (3)
> **Prerequisites:** install (1), setup (1)
> **Analogies:** for instance (1)
> **Speakers:** - [man] (1)

#### A quick review of machine learning basics with examples
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/a-quick-review-of-machine-learning-basics-with-examples?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/a-quick-review-of-machine-learning-basics-with-examples?u=76281980&t=0)** - [Tutor] Okay, we're in the same workflow.
>
> **[0:02](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/a-quick-review-of-machine-learning-basics-with-examples?u=76281980&t=2)** We're looking at our example for learning a decision tree.
>
> **[0:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/a-quick-review-of-machine-learning-basics-with-examples?u=76281980&t=6)** Let's go through it step by step.
>
> **[0:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/a-quick-review-of-machine-learning-basics-with-examples?u=76281980&t=9)** But as we do that, let's refresh our memory as well about some machine learning basics.
>
> **[0:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/a-quick-review-of-machine-learning-basics-with-examples?u=76281980&t=20)** And again, this is a topic that if you are brand new to machine learning, you conceivably want to pause and kind of get oriented.
>
> **[0:27](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/a-quick-review-of-machine-learning-basics-with-examples?u=76281980&t=27)** I have a course in the library that might be helpful, "The Essential Elements of Data Mining," but we're going to review some of it right now.
>
> **[0:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/a-quick-review-of-machine-learning-basics-with-examples?u=76281980&t=36)** So let's first go to the table reader and right click and I'm going to just execute.
>
> **[0:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/a-quick-review-of-machine-learning-basics-with-examples?u=76281980&t=43)** And I want to draw your attention to the fact that it went from yellow, which means that it's ready to go to green which means that it's run.
>
> **[0:55](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/a-quick-review-of-machine-learning-basics-with-examples?u=76281980&t=55)** Red however, we don't see any red at the moment but red would indicate that there's something wrong and some setting needs to be adjusted before it's ready to go but yellow is ready, green as it has been run.
>
> **[1:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/a-quick-review-of-machine-learning-basics-with-examples?u=76281980&t=69)** So now that it's been run, I can go to read table and we're not going to worry about the numbers and so on here but I do want to point out that in column nine we have a bunch of values that are labeled class one, class three, class zero.
>
> **[1:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/a-quick-review-of-machine-learning-basics-with-examples?u=76281980&t=90)** That is our target variable.
>
> **[1:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/a-quick-review-of-machine-learning-basics-with-examples?u=76281980&t=93)** If you are familiar with statistics, you may think of that as a dependent variable since decision trees is supervised machine learning, we need a data set where the outcome that we're trying to predict is known and in this data set.
>
> **[1:52](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/a-quick-review-of-machine-learning-basics-with-examples?u=76281980&t=112)** So now we can close this window.
>
> **[1:55](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/a-quick-review-of-machine-learning-basics-with-examples?u=76281980&t=115)** And the next thing that we're always going to want to do when we're building a supervised machine learning predictive model, including one with decision trees, is we've got to partition our data.
>
> **[2:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/a-quick-review-of-machine-learning-basics-with-examples?u=76281980&t=127)** So what's going on with that?
>
> **[2:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/a-quick-review-of-machine-learning-basics-with-examples?u=76281980&t=128)** Well, we can go in here and this time we're going to click on configure.
>
> **[2:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/a-quick-review-of-machine-learning-basics-with-examples?u=76281980&t=133)** And what we see is that we're doing a relative percentage of 33% in the first partition.
>
> **[2:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/a-quick-review-of-machine-learning-basics-with-examples?u=76281980&t=142)** The number that you most often hear about is 50% but it's not always 50.
>
> **[2:27](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/a-quick-review-of-machine-learning-basics-with-examples?u=76281980&t=147)** What this is doing is dividing our data into a training data set in a test data set.
>
> **[2:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/a-quick-review-of-machine-learning-basics-with-examples?u=76281980&t=155)** Let me click on cancel, and let's see where this flows.
>
> **[2:39](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/a-quick-review-of-machine-learning-basics-with-examples?u=76281980&t=159)** You can see an arrow coming out of the partitioning node that's going up to here and on to here.
>
> **[2:47](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/a-quick-review-of-machine-learning-basics-with-examples?u=76281980&t=167)** That's our training data.
>
> **[2:49](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/a-quick-review-of-machine-learning-basics-with-examples?u=76281980&t=169)** And then we have another arrow that's coming out of the bottom of the partitioning node that goes on to here and then over to here.
>
> **[2:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/a-quick-review-of-machine-learning-basics-with-examples?u=76281980&t=177)** Now, what that means is that the decision tree learner is building the tree only on the train data, but the decision tree predictor on the other hand has arrow coming in at the top as well as an arrow coming in at the bottom.
>
> **[3:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/a-quick-review-of-machine-learning-basics-with-examples?u=76281980&t=196)** So something different is going on there.
>
> **[3:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/a-quick-review-of-machine-learning-basics-with-examples?u=76281980&t=198)** And then finally, once our model is built, we have to determine how accurate the model has been.
>
> **[3:25](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/a-quick-review-of-machine-learning-basics-with-examples?u=76281980&t=205)** And that's going to be with this scorer node.
>
> **[3:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/a-quick-review-of-machine-learning-basics-with-examples?u=76281980&t=208)** So we're going to take a closer look here in a moment but we have a data set with a target variable.
>
> **[3:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/a-quick-review-of-machine-learning-basics-with-examples?u=76281980&t=216)** We have a partitioning node that's dividing data into a training data set that's going up this way and a test data set that's flowing this way.
>
> **[3:46](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/a-quick-review-of-machine-learning-basics-with-examples?u=76281980&t=226)** We have a learner that builds the model and a predictor that uses the model and a score node that's going to tell us how good the model was.
>
> **[3:55](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/a-quick-review-of-machine-learning-basics-with-examples?u=76281980&t=235)** So now let's look in more detail at all of that.
>
> **[3:58](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/a-quick-review-of-machine-learning-basics-with-examples?u=76281980&t=238)** So let's start with the learner.
>
> **[4:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/a-quick-review-of-machine-learning-basics-with-examples?u=76281980&t=240)** I'm going to go ahead and click on execute and open views.
>
> **[4:04](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/a-quick-review-of-machine-learning-basics-with-examples?u=76281980&t=244)** Those nodes have turned green, we can't see it at the moment, but they've run successfully.
>
> **[4:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/a-quick-review-of-machine-learning-basics-with-examples?u=76281980&t=249)** And now we're looking at the tree.
>
> **[4:12](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/a-quick-review-of-machine-learning-basics-with-examples?u=76281980&t=252)** Now this is the tree through the lens of the learner.
>
> **[4:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/a-quick-review-of-machine-learning-basics-with-examples?u=76281980&t=257)** So this is the tree model based on that training data that we gave it.
>
> **[4:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/a-quick-review-of-machine-learning-basics-with-examples?u=76281980&t=263)** And we'll have much more to say about this.
>
> **[4:25](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/a-quick-review-of-machine-learning-basics-with-examples?u=76281980&t=265)** We're just doing the mechanics of this built-in example first, but we have up at the top the numbers of those classes, class zero, class three, class four, class two, and so on for the whole data set.
>
> **[4:41](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/a-quick-review-of-machine-learning-basics-with-examples?u=76281980&t=281)** And we're going to learn as we get deeper into the topic that column zero must be the best predictor because the best predictor is always going to form the first branch.
>
> **[4:52](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/a-quick-review-of-machine-learning-basics-with-examples?u=76281980&t=292)** Don't worry too much about interpretation now because we'll have a lot more to say about that.
>
> **[4:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/a-quick-review-of-machine-learning-basics-with-examples?u=76281980&t=297)** Back to the workflow, over here on the other hand, we can execute and open views.
>
> **[5:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/a-quick-review-of-machine-learning-basics-with-examples?u=76281980&t=306)** This looks like the same thing but this tree is using that test data.
>
> **[5:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/a-quick-review-of-machine-learning-basics-with-examples?u=76281980&t=316)** And then finally, we could have run all of them at this point though but I'm doing one by one for illustration purposes.
>
> **[5:24](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/a-quick-review-of-machine-learning-basics-with-examples?u=76281980&t=324)** So I can execute this.
>
> **[5:27](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/a-quick-review-of-machine-learning-basics-with-examples?u=76281980&t=327)** We get the green dot, but now I go down here and I can take a look at the accuracy statistics for instance.
>
> **[5:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/a-quick-review-of-machine-learning-basics-with-examples?u=76281980&t=335)** There's a lot of detail here that we will return to, but I can look at things like my true positives and my false positives but also things like recall, precision, sensitivity and so on.
>
> **[5:49](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/a-quick-review-of-machine-learning-basics-with-examples?u=76281980&t=349)** A lot of detail here but I'm looking at how well the model performed.
>
> **[5:59](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/a-quick-review-of-machine-learning-basics-with-examples?u=76281980&t=359)** Finally, I can look at what is called the confusion matrix.
>
> **[6:04](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/a-quick-review-of-machine-learning-basics-with-examples?u=76281980&t=364)** This is breaking down our performance by each category.
>
> **[6:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/a-quick-review-of-machine-learning-basics-with-examples?u=76281980&t=367)** So for instance, we can see that some in fact the vast majority of the actual class three were predicted as class three, but a couple of them were predicted to be class zero or class four.
>
> **[6:24](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/a-quick-review-of-machine-learning-basics-with-examples?u=76281980&t=384)** On the other hand, all of the class zero were appear to be correct.
>
> **[6:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/a-quick-review-of-machine-learning-basics-with-examples?u=76281980&t=389)** And only four of the class four are incorrect and so on.
>
> **[6:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/a-quick-review-of-machine-learning-basics-with-examples?u=76281980&t=394)** So the confusion matrix is more granular than the accuracy but they both tell you about how well your model did.
>
> **[6:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/a-quick-review-of-machine-learning-basics-with-examples?u=76281980&t=404)** So there you have it a lot more to come but the best way to get started with a new technique or a new node is to search the examples to see if you can find a pre-built example to acclimate yourself to, and then eventually change the data set to a data set of your own choosing.
>
> **[7:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/a-quick-review-of-machine-learning-basics-with-examples?u=76281980&t=425)** And then try to repeat the example with the new data set.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), finally, (3), this. (2)
> **CLI Commands:** node (6), find (1)
> **UI Navigation:** go to (3), click on (3)
> **Definitions:** means that (2), is a  (1), is called (1)
> **Analogies:** for instance (2)
> **Prerequisites:** configure (1)
> **Speakers:** - [tutor] (1)

#### An overview of decision tree algorithms
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/an-overview-of-decision-tree-algorithms?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/an-overview-of-decision-tree-algorithms?u=76281980&t=0)** - [Instructor] Okay, now I want to orient you to the most common, most well-known decision tree algorithms and discuss what kinds of decision tree algorithms are supported in KNIME.
>
> **[0:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/an-overview-of-decision-tree-algorithms?u=76281980&t=18)** So let's widen these very useful windows over here so that we can see them better.
>
> **[0:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/an-overview-of-decision-tree-algorithms?u=76281980&t=26)** And you can see that our node repository is still showing all the nodes that have decision tree in the name.
>
> **[0:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/an-overview-of-decision-tree-algorithms?u=76281980&t=36)** Now, we can see some of the ones listed that were in our example, like the decision tree learner and the decision tree predictor, but they don't have the name of an algorithm seemingly.
>
> **[0:49](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/an-overview-of-decision-tree-algorithms?u=76281980&t=49)** The two most common when building a single decision tree, now that's in contrast to what's called an ensemble and we'll mention that in a moment, but when you're building a single decision tree, the ones that you very often hear about are CART, that's an acronym for Classification And Regression Trees, or C5, so we don't see anything seemingly that says that.
>
> **[1:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/an-overview-of-decision-tree-algorithms?u=76281980&t=74)** So for instance, you could search for CART and it doesn't come up and you might think, well, what's going on?
>
> **[1:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/an-overview-of-decision-tree-algorithms?u=76281980&t=81)** Well, let's go back to decision tree.
>
> **[1:25](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/an-overview-of-decision-tree-algorithms?u=76281980&t=85)** And the way KNIME has done this is they have just the decision tree learner and the decision tree predictor for classification, but they do have regression tree.
>
> **[1:39](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/an-overview-of-decision-tree-algorithms?u=76281980&t=99)** So again, CART stands for Classification And Regression Tree.
>
> **[1:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/an-overview-of-decision-tree-algorithms?u=76281980&t=103)** So if you want to do a regression tree, you've got the simple regression tree learner.
>
> **[1:47](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/an-overview-of-decision-tree-algorithms?u=76281980&t=107)** And now let's go into the decision tree learner and configure and try to figure out about this CART/C5 business.
>
> **[1:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/an-overview-of-decision-tree-algorithms?u=76281980&t=117)** Well, the way KNIME is set up, there is no special node for CART and there is no special node for C5.
>
> **[2:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/an-overview-of-decision-tree-algorithms?u=76281980&t=128)** We're going to talk about both of these algorithms in considerable detail in this course, but what's going to make the difference is the settings.
>
> **[2:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/an-overview-of-decision-tree-algorithms?u=76281980&t=136)** And I'm going to mention just one setting now because we'll have much more to say about this later.
>
> **[2:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/an-overview-of-decision-tree-algorithms?u=76281980&t=142)** So you see you've got the Gini Index and the Gain Ratio.
>
> **[2:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/an-overview-of-decision-tree-algorithms?u=76281980&t=148)** We have whether or not we're using pruning and a whole bunch of other choices.
>
> **[2:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/an-overview-of-decision-tree-algorithms?u=76281980&t=154)** That's going to be how we're going to get models that are more like one algorithm or more like another.
>
> **[2:41](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/an-overview-of-decision-tree-algorithms?u=76281980&t=161)** And that really is the heart of the course.
>
> **[2:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/an-overview-of-decision-tree-algorithms?u=76281980&t=165)** Then we're also going to talk about regression trees and we've seen that there's a node to support that.
>
> **[2:51](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/an-overview-of-decision-tree-algorithms?u=76281980&t=171)** So what about an ensemble?
>
> **[2:53](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/an-overview-of-decision-tree-algorithms?u=76281980&t=173)** You might have heard the name random forest.
>
> **[2:58](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/an-overview-of-decision-tree-algorithms?u=76281980&t=178)** Well, there's a random forest learner and a random forest predictor.
>
> **[3:02](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/an-overview-of-decision-tree-algorithms?u=76281980&t=182)** The notion of a random forest is when you build a bunch of trees, and I'm oversimplifying now, but you build a bunch of trees and average them.
>
> **[3:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/an-overview-of-decision-tree-algorithms?u=76281980&t=191)** That's beyond the scope of this course, but that is directly supported in KNIME.
>
> **[3:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/an-overview-of-decision-tree-algorithms?u=76281980&t=198)** Another option in KNIME is to use technologies like Python and R right in KNIME, but that's also beyond the scope of this course.
>
> **[3:27](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/an-overview-of-decision-tree-algorithms?u=76281980&t=207)** So what we're going to do is we're going to talk about how classification trees work and how to imitate that algorithm with the decision tree learner.
>
> **[3:39](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/an-overview-of-decision-tree-algorithms?u=76281980&t=219)** And then we're also going to talk about the C5 algorithm and how to imitate it with the decision tree learner.
>
> **[3:48](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/an-overview-of-decision-tree-algorithms?u=76281980&t=228)** Then we're going to talk about regression trees and that will take you quite far along in your journey of learning about decision trees.

> [!info]- Semantic Content
>
> **Env Vars:** knime (6), cart (5)
> **CLI Commands:** node (4), make (1), python (1)
> **Code Keywords:** let (3)
> **Prerequisites:** configure (1), set up (1)
> **Cross-References:** go back to (1)
> **Tools:** notion (1)
> **Definitions:** stands for (1)
> **Analogies:** for instance (1)


### 3. 2. Introducing the C5.0 Algorithm

#### Ross Quinlan, ID3, C4.5, and C5.0
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/ross-quinlan-id3-c4-5-and-c5-0?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/ross-quinlan-id3-c4-5-and-c5-0?u=76281980&t=0)** - [Instructor] Ross Quinlan is an Australian computer scientist and researcher who has been influential for decades.
>
> **[0:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/ross-quinlan-id3-c4-5-and-c5-0?u=76281980&t=8)** He's the developer of the algorithm we will be learning about in this section, the C4.5 algorithm.
>
> **[0:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/ross-quinlan-id3-c4-5-and-c5-0?u=76281980&t=17)** Now, back in the '80s, he developed an algorithm called the Iterative Dichotomiser Three, usually just called ID3.
>
> **[0:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/ross-quinlan-id3-c4-5-and-c5-0?u=76281980&t=28)** What's interesting is you still see it around.
>
> **[0:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/ross-quinlan-id3-c4-5-and-c5-0?u=76281980&t=31)** It's implemented in R and so on, but there have been some major improvements since then, so you should use 4.5.
>
> **[0:39](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/ross-quinlan-id3-c4-5-and-c5-0?u=76281980&t=39)** 4.5 came along in the '90s and it's the one that's still most commonly seen.
>
> **[0:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/ross-quinlan-id3-c4-5-and-c5-0?u=76281980&t=45)** It's the basis for most of the features in KNIME's decision tree learner node, which we will be demonstrating.
>
> **[0:54](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/ross-quinlan-id3-c4-5-and-c5-0?u=76281980&t=54)** This is where it gets a little bit more complicated.
>
> **[0:56](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/ross-quinlan-id3-c4-5-and-c5-0?u=76281980&t=56)** There's also an algorithm called C5 and it's more recent, but you still tend to see C4.5 in more places.
>
> **[1:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/ross-quinlan-id3-c4-5-and-c5-0?u=76281980&t=65)** The reason is that for a time, C5 was proprietary.
>
> **[1:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/ross-quinlan-id3-c4-5-and-c5-0?u=76281980&t=70)** You'll still see it in some commercial software, notably IBM SPSS Modeler.
>
> **[1:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/ross-quinlan-id3-c4-5-and-c5-0?u=76281980&t=77)** I actually demonstrate it in an SPSS based course here in the library.
>
> **[1:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/ross-quinlan-id3-c4-5-and-c5-0?u=76281980&t=82)** The two key differences are boosting to improve accuracy and winnowing to perform a data reduction step.
>
> **[1:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/ross-quinlan-id3-c4-5-and-c5-0?u=76281980&t=92)** Let's take a quick look at Ross Quinlan's [rulequest.com](https://rulequest.com) website to put all this into a little bit of context.
>
> **[1:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/ross-quinlan-id3-c4-5-and-c5-0?u=76281980&t=103)** So there he is. There's Ross Quinlan.
>
> **[1:46](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/ross-quinlan-id3-c4-5-and-c5-0?u=76281980&t=106)** And if you look here, you can go to the source code for C5.
>
> **[1:52](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/ross-quinlan-id3-c4-5-and-c5-0?u=76281980&t=112)** You can click on that and you can see that it's available under a GNU general public license.
>
> **[1:58](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/ross-quinlan-id3-c4-5-and-c5-0?u=76281980&t=118)** And, of course, you still see it in software like SPSS Modeler.
>
> **[2:02](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/ross-quinlan-id3-c4-5-and-c5-0?u=76281980&t=122)** So something to know about KNIME is that the decision tree learner is based on C4.5, not C5.
>
> **[2:12](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/ross-quinlan-id3-c4-5-and-c5-0?u=76281980&t=132)** However, if over time you become a user of the KNIME analytics platform, there are ways to run algorithms that are not available in a node.
>
> **[2:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/ross-quinlan-id3-c4-5-and-c5-0?u=76281980&t=143)** You can run R, you can run Python and so on, so we won't pursue that in this course.
>
> **[2:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/ross-quinlan-id3-c4-5-and-c5-0?u=76281980&t=149)** We're going to stick with the decision tree learner, which means that we're going to be using C4.5.

> [!info]- Semantic Content
>
> **Env Vars:** knime (3), spss (3), id3 (1), ibm (1), gnu (1)
> **CLI Commands:** node (2), python (1)
> **Code Keywords:** let (1), public (1)
> **Versions:** 4.5 (2)
> **UI Navigation:** go to (1), click on (1)
> **Definitions:** is an  (1), means that (1)
> **URLs:** [rulequest.com](https://rulequest.com) (1)
> **Exercise Files:** source code (1)

#### Understanding the entropy calculation
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/understanding-the-entropy-calculation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/understanding-the-entropy-calculation?u=76281980&t=0)** - [Instructor] In order to build the tree, C4.5 uses a criterion called information gain ratio, knowing how an algorithm works under the hood can help you use it effectively.
>
> **[0:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/understanding-the-entropy-calculation?u=76281980&t=13)** However, it's also possible to get lost in all the formulas.
>
> **[0:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/understanding-the-entropy-calculation?u=76281980&t=17)** So let's hit on some of the high points.
>
> **[0:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/understanding-the-entropy-calculation?u=76281980&t=20)** First, Quinlan strategy is inspired by information theory an area pioneered by Claude Shannon who helped establish the concepts of entropy as we use them in machine learning and even the idea of measuring information with the notion of a bit, there's actually a connection between machine learning, entropy, Alan Turing, and bayesian statistics, that's explored in the courses about causality in the library.
>
> **[0:53](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/understanding-the-entropy-calculation?u=76281980&t=53)** So here's how it works.
>
> **[0:56](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/understanding-the-entropy-calculation?u=76281980&t=56)** It's called information gain because we're trying to get the entropy to go down as we branch in the tree.
>
> **[1:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/understanding-the-entropy-calculation?u=76281980&t=66)** So let's take a look at the credit example and in the root node, we've got 16,000 cases, 50% of whom have a serious delinquency within two years.
>
> **[1:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/understanding-the-entropy-calculation?u=76281980&t=80)** So the top branch has no times 90 days late on the left and at least one time 90 days late on the right.
>
> **[1:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/understanding-the-entropy-calculation?u=76281980&t=88)** So take a closer look, what you can see is in both cases, we're moving away from the peak and moving downward and that's good, but on the left where most of the cases are going, we've only made modest improvement in reducing that entropy value, but on the right with the smaller amount of 3000 cases, we've made massive improvement in the entropy going down and that's good in terms of information gain.
>
> **[1:59](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/understanding-the-entropy-calculation?u=76281980&t=119)** Now notice I'm using information gain and entropy almost interchangeably here because the calculation is called information gain in C4.5 and C5, entropy is the term that we get from Claude Shannon, you're going to see how they come together in a moment.
>
> **[2:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/understanding-the-entropy-calculation?u=76281980&t=137)** However, we've got to talk a little bit about one of the challenges that Quinlan had back when he was developing ID.3, which you may recall was his first attempt to build a decision tree algorithm some time ago, information gain was used as the sole criterion and variables that had lots of categories tended to have an advantage, because if you fragment the data into little pieces, you'll invariably get to small little leaf nodes and of course, a leaf node with a sample size of one will always be all one category or the other.
>
> **[2:55](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/understanding-the-entropy-calculation?u=76281980&t=175)** So in C4.5 and C5, he had to introduce a penalty to counterbalance that bias in the algorithm.
>
> **[3:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/understanding-the-entropy-calculation?u=76281980&t=185)** So here we see the formula for the penalty, this is another one of those formulas where you could easily get bogged down but the highlights are straightforward.
>
> **[3:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/understanding-the-entropy-calculation?u=76281980&t=197)** Information gain ratio is simply the ratio of the entropy based measure that we just discussed and a penalty.
>
> **[3:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/understanding-the-entropy-calculation?u=76281980&t=208)** Now, the penalty is given all kinds of different names like intrinsic info, and split info and so on, but fundamentally it's just a penalty for having a lot of categories.
>
> **[3:40](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/understanding-the-entropy-calculation?u=76281980&t=220)** So for instance, what would the formula for the penalty be for the 90 days late split that we just saw?
>
> **[3:47](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/understanding-the-entropy-calculation?u=76281980&t=227)** It has two categories and that's why the first of the two formulas has the number two appearing repeatedly.
>
> **[3:56](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/understanding-the-entropy-calculation?u=76281980&t=236)** What if you had three categories?
>
> **[3:59](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/understanding-the-entropy-calculation?u=76281980&t=239)** Well, remember the more categories you have the more the algorithm used to bias towards that variable.
>
> **[4:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/understanding-the-entropy-calculation?u=76281980&t=247)** So we'll have a slightly bigger penalty and that serves to counterbalance the advantage that complicated splits back in the ID.3 days.
>
> **[4:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/understanding-the-entropy-calculation?u=76281980&t=258)** There's another topic that we have to address C4.5 and C5, and as we'll later see, classification trees too, all do a step that's called pruning.
>
> **[4:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/understanding-the-entropy-calculation?u=76281980&t=272)** Now what pruning is, is reducing the size of the tree after the tree is built.
>
> **[4:39](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/understanding-the-entropy-calculation?u=76281980&t=279)** So it's not slowing the growth, it's removing additional granularity or detail is one way that you could phrase it once the tree growth is complete.
>
> **[4:52](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/understanding-the-entropy-calculation?u=76281980&t=292)** So, in C4.5 and C5 there is a pruning approach called reduced error pruning and that's supported in the decision tree learner.
>
> **[5:04](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/understanding-the-entropy-calculation?u=76281980&t=304)** So we're going to take a look at that, we're going to do a demonstration of what that's like and to give you a preview, you see a tree on the left, really more like a thumbnail of a tree that has 12 leaf nodes and you should be able to count them there and verify that but there's 12 leaf nodes.
>
> **[5:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/understanding-the-entropy-calculation?u=76281980&t=326)** And then once pruning has happened you're down all the way to six leaf nodes.
>
> **[5:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/understanding-the-entropy-calculation?u=76281980&t=331)** So why is this done?
>
> **[5:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/understanding-the-entropy-calculation?u=76281980&t=333)** Well, an unpruned tree tends to be overfit, meaning that it looks great on the training data but fails to generalize well on the test data and in the early days of developing tree algorithms, and this is true for Ross Quinlan, and also true for Leo Breiman and his collaborators, that they experimented with slowing the growth as a way of getting a right sized tree, but through trial and error over the years, both of them concluded that the best way to do this is to let the tree grow and then use a different calculation to trim away where there might be noisy parts of the tree and separate the signal
>
> **[6:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/understanding-the-entropy-calculation?u=76281980&t=382)** from the noise and then cause better generalization.
>
> **[6:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/understanding-the-entropy-calculation?u=76281980&t=386)** So it is a critical concept in most of the tree algorithms that you will encounter, including the ones in this course.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3)
> **Definitions:** is a  (2), is called (1)
> **CLI Commands:** node (2)
> **Tools:** notion (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### How C4.5 handles missing data
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-c4-5-handles-missing-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-c4-5-handles-missing-data?u=76281980&t=0)** - [Instructor] Let's talk about how missing data is handled in both C4.5 and C5.
>
> **[0:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-c4-5-handles-missing-data?u=76281980&t=6)** This can be a complicated topic.
>
> **[0:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-c4-5-handles-missing-data?u=76281980&t=9)** And the reason is the way that Quinlan is tackling missing data has a ripple effect through the information gain in information gain ratio calculations, making all of it more complicated.
>
> **[0:24](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-c4-5-handles-missing-data?u=76281980&t=24)** What he's trying to do is say that if a particular case is missing, that it adds no information content.
>
> **[0:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-c4-5-handles-missing-data?u=76281980&t=33)** To put that a different way, he wants to ensure that it has no effect on information gain.
>
> **[0:41](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-c4-5-handles-missing-data?u=76281980&t=41)** So its presence has to be somewhat subtracted from those calculations, even though it's still in the tree and even though you would want the case scored at deployment.
>
> **[0:52](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-c4-5-handles-missing-data?u=76281980&t=52)** So, it can make it all really quite complicated.
>
> **[0:56](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-c4-5-handles-missing-data?u=76281980&t=56)** The basic idea, however, is straightforward.
>
> **[1:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-c4-5-handles-missing-data?u=76281980&t=60)** I love Quinlan's own advice on the matter, taken directly out of the discussion of this topic in his book about C4.5.
>
> **[1:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-c4-5-handles-missing-data?u=76281980&t=71)** As he puts it, "It's possible to get enmeshed in the details of calculations like these."
>
> **[1:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-c4-5-handles-missing-data?u=76281980&t=77)** His goal is more important than the details.
>
> **[1:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-c4-5-handles-missing-data?u=76281980&t=80)** He wants to score all cases, but he doesn't want missing cases to alter the entropy calculation.
>
> **[1:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-c4-5-handles-missing-data?u=76281980&t=89)** But here's the punchline, right out of his book, "A case with an unknown test outcome is divided into fragments whose weights are proportional to the relative frequencies."
>
> **[1:40](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-c4-5-handles-missing-data?u=76281980&t=100)** So, half the data goes down one branch and the other half goes down the other branch.
>
> **[1:46](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-c4-5-handles-missing-data?u=76281980&t=106)** Now, of course, it's not exactly half.
>
> **[1:49](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-c4-5-handles-missing-data?u=76281980&t=109)** He actually splits the case into two using weights so that a single case can actually follow multiple paths.
>
> **[1:59](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-c4-5-handles-missing-data?u=76281980&t=119)** It's actually a clever solution.
>
> **[2:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-c4-5-handles-missing-data?u=76281980&t=121)** But the most important thing to remember is that you won't learn anything about your missing data this way.
>
> **[2:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-c4-5-handles-missing-data?u=76281980&t=128)** Rather, it makes the problem go away at deployment, but gives you very little visibility into your missing data.
>
> **[2:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-c4-5-handles-missing-data?u=76281980&t=136)** So I always urge folks, and this is with any algorithm not just C4.5 and C5, to explore, explore, explore before you model and eventually deploy.
>
> **[2:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-c4-5-handles-missing-data?u=76281980&t=150)** Now, this missing data feature is not a feature that's available in KNIME's Decision Tree Learner.
>
> **[2:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-c4-5-handles-missing-data?u=76281980&t=157)** Now, KNIME does have missing data support, but the way it's set up in KNIME is you have to do it before the modeling node.
>
> **[2:46](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-c4-5-handles-missing-data?u=76281980&t=166)** And we won't be demonstrating those features in this course.
>
> **[2:50](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-c4-5-handles-missing-data?u=76281980&t=170)** If you are using C4.5 or C5 in another platform, the word that is often used for this approach is fractionalization and it can be very effective.

> [!info]- Semantic Content
>
> **Env Vars:** knime (3)
> **CLI Commands:** make (1), node (1)
> **Code Keywords:** let (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### The Give Me Some Credit data set
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-give-me-some-credit-data-set?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-give-me-some-credit-data-set?u=76281980&t=0)** - [Instructor] I want to introduce you to the dataset that we're going to be using for both C4.5 and classification trees.
>
> **[0:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-give-me-some-credit-data-set?u=76281980&t=9)** It's on the Kaggle website. It's called Give Me Some Credit.
>
> **[0:12](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-give-me-some-credit-data-set?u=76281980&t=12)** And as the name implies, it's about credit scoring specifically whether or not someone's going to have a serious default within the next two years.
>
> **[0:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-give-me-some-credit-data-set?u=76281980&t=23)** So if you go to the data tab, you can find where the data is.
>
> **[0:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-give-me-some-credit-data-set?u=76281980&t=28)** What we're really looking for is the cs-training.csv dataset.
>
> **[0:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-give-me-some-credit-data-set?u=76281980&t=35)** Now, what I've done is I've brought that into Excel just so that we can look at it together.
>
> **[0:42](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-give-me-some-credit-data-set?u=76281980&t=42)** And it also makes it easy to bring it into KNIME.
>
> **[0:46](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-give-me-some-credit-data-set?u=76281980&t=46)** If you ever have a very large dataset, you really don't want to turn into KNIME first, but this is a modestly sized dataset.
>
> **[0:55](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-give-me-some-credit-data-set?u=76281980&t=55)** Why am I showing you the Kaggle website?
>
> **[0:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-give-me-some-credit-data-set?u=76281980&t=57)** Well, I'm going to really encourage you to go here and either download the data or check out the discussion and so on.
>
> **[1:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-give-me-some-credit-data-set?u=76281980&t=66)** You'll also find some material on the KNIME Hub that uses this dataset, especially some great examples around explanatory AI.
>
> **[1:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-give-me-some-credit-data-set?u=76281980&t=78)** We won't be looking at those examples, of course, in this course, but I encourage you to always know where the data's coming from.
>
> **[1:24](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-give-me-some-credit-data-set?u=76281980&t=84)** So let's take a look at it in Excel.
>
> **[1:27](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-give-me-some-credit-data-set?u=76281980&t=87)** So what I've done is I've consolidated two data sources from Kaggle here.
>
> **[1:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-give-me-some-credit-data-set?u=76281980&t=94)** I've got the dictionary tab and the CS training tab.
>
> **[1:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-give-me-some-credit-data-set?u=76281980&t=97)** Now, again, we don't need the test dataset for our purposes in this course.
>
> **[1:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-give-me-some-credit-data-set?u=76281980&t=103)** So let's take a look at the dictionary.
>
> **[1:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-give-me-some-credit-data-set?u=76281980&t=105)** What we find is that we have serious delinquency within two years is really the way to think of that, within two years of the time that we are predicting.
>
> **[1:56](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-give-me-some-credit-data-set?u=76281980&t=116)** Specifically the description they have here is person experience 90 days past due delinquency or worse.
>
> **[2:03](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-give-me-some-credit-data-set?u=76281980&t=123)** Then the rest of these are input variables, so we have revolving utilization.
>
> **[2:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-give-me-some-credit-data-set?u=76281980&t=128)** We've got age.
>
> **[2:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-give-me-some-credit-data-set?u=76281980&t=129)** We have number of times that they were past due, debt ratio, monthly income, number of open credit lines, number of times late 90 days or more, real estate mortgages and loans, number of times 60 to 89 days, and finally, number of dependents.
>
> **[2:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-give-me-some-credit-data-set?u=76281980&t=149)** So I'm going to click on the other tab.
>
> **[2:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-give-me-some-credit-data-set?u=76281980&t=151)** Here's the dataset itself.
>
> **[2:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-give-me-some-credit-data-set?u=76281980&t=154)** Notice that in column A, we basically have an ID field.
>
> **[2:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-give-me-some-credit-data-set?u=76281980&t=157)** We have to be careful to make sure that KNIME is going to ignore that.
>
> **[2:41](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-give-me-some-credit-data-set?u=76281980&t=161)** Then we've got our dependent variable as we've discussed and all the other variables.
>
> **[2:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-give-me-some-credit-data-set?u=76281980&t=165)** So I'm providing this to you as an Excel file.
>
> **[2:49](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-give-me-some-credit-data-set?u=76281980&t=169)** So that's going to be the easiest way to use it in KNIME, but then, of course, check out those other supporting resources.

> [!info]- Semantic Content
>
> **Env Vars:** knime (5)
> **CLI Commands:** find (3), make (1)
> **Code Keywords:** let (2), from. (1), finally, (1)
> **UI Navigation:** go to (1), click on (1)
> **File Paths:** cs-training.csv (1)
> **Exercise Files:** download the (1)
> **Definitions:** is a  (1)
> **Warnings:** be careful (1)

#### Working with the prebuilt example
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/working-with-the-prebuilt-example?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/working-with-the-prebuilt-example?u=76281980&t=0)** - [Instructor] I'm here in KNIME and I've closed all of the workflows so I have a nice blank canvas on which to work.
>
> **[0:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/working-with-the-prebuilt-example?u=76281980&t=9)** I'm going to go into Examples and then down here to Analytics and then to this fourth category, I'll widen this a bit so that you can see, Classification and Predictive Modeling.
>
> **[0:24](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/working-with-the-prebuilt-example?u=76281980&t=24)** And there's one very specific one, Example for Learning a Decision Tree, so I'll double click on that.
>
> **[0:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/working-with-the-prebuilt-example?u=76281980&t=33)** I'll make this a little bit more narrow.
>
> **[0:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/working-with-the-prebuilt-example?u=76281980&t=35)** I can actually zoom in a little bit.
>
> **[0:39](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/working-with-the-prebuilt-example?u=76281980&t=39)** Great, let's center that and we're ready to go.
>
> **[0:42](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/working-with-the-prebuilt-example?u=76281980&t=42)** So here's our example but it's not the dataset that we're going to be using.
>
> **[0:46](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/working-with-the-prebuilt-example?u=76281980&t=46)** We're going to be using the Give Me Credit dataset from Kaggle, and we need an Excel source node for that.
>
> **[0:54](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/working-with-the-prebuilt-example?u=76281980&t=54)** So if you search for that, you can see the Excel Reader.
>
> **[0:56](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/working-with-the-prebuilt-example?u=76281980&t=56)** You want to drag that over and hook it up.
>
> **[0:59](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/working-with-the-prebuilt-example?u=76281980&t=59)** If you choose to bring it in now, I'm going to give you another option in a moment, I've already set it up with the path to my machine.
>
> **[1:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/working-with-the-prebuilt-example?u=76281980&t=69)** So you have two choices at this point.
>
> **[1:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/working-with-the-prebuilt-example?u=76281980&t=73)** You can drag over an empty one and search for the Excel file that I'm going to be providing for you.
>
> **[1:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/working-with-the-prebuilt-example?u=76281980&t=81)** You just have to make sure the path is correct.
>
> **[1:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/working-with-the-prebuilt-example?u=76281980&t=83)** So for instance, when I go into Configure here, it is pointing to my desktop and that is not where your copy of cs-training.xlsx is going to be.
>
> **[1:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/working-with-the-prebuilt-example?u=76281980&t=96)** So option one is drag over a new Excel Reader node and set it up.
>
> **[1:40](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/working-with-the-prebuilt-example?u=76281980&t=100)** Option number two is watch for now and then at the end of this section, I'm going to be providing a completed workflow.
>
> **[1:52](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/working-with-the-prebuilt-example?u=76281980&t=112)** You can also watch, retrieve the completed workflow, and then practice with that, whichever one is better for your learning.
>
> **[2:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/working-with-the-prebuilt-example?u=76281980&t=121)** I'm going to go ahead and hook this up now.
>
> **[2:04](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/working-with-the-prebuilt-example?u=76281980&t=124)** I could delete this table reader.
>
> **[2:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/working-with-the-prebuilt-example?u=76281980&t=126)** It's not terribly important that I do so.
>
> **[2:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/working-with-the-prebuilt-example?u=76281980&t=129)** In order for us to use this on the new dataset, though, we have to do a little bit of housekeeping.
>
> **[2:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/working-with-the-prebuilt-example?u=76281980&t=133)** So I'm going to go back into Configure, this is in that Excel source node, and go to Transformation.
>
> **[2:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/working-with-the-prebuilt-example?u=76281980&t=139)** Two very important steps.
>
> **[2:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/working-with-the-prebuilt-example?u=76281980&t=141)** I want to deselect empty A.
>
> **[2:24](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/working-with-the-prebuilt-example?u=76281980&t=144)** That's basically a column that we saw a moment ago that's acting as an ID field.
>
> **[2:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/working-with-the-prebuilt-example?u=76281980&t=149)** We don't want that involved at all.
>
> **[2:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/working-with-the-prebuilt-example?u=76281980&t=152)** And then serious delinquency in two years, which is our dependent or target variable, has been declared as a integer.
>
> **[2:41](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/working-with-the-prebuilt-example?u=76281980&t=161)** We want to declare that as a string.
>
> **[2:42](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/working-with-the-prebuilt-example?u=76281980&t=162)** Now, the reason is if we keep that as a number, KNIME is going to think that we are trying to predict a numeric value and therefore KNIME is going to think we're trying to do regression trees.
>
> **[2:55](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/working-with-the-prebuilt-example?u=76281980&t=175)** We're doing C4.5 right now.
>
> **[2:59](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/working-with-the-prebuilt-example?u=76281980&t=179)** We have to make sure that KNIME understands that we're trying to predict a category and declaring that as a string is how we do it.
>
> **[3:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/working-with-the-prebuilt-example?u=76281980&t=186)** Now, later on in the course, we'll be talking about the implications of how you set up the input variables as string or as number and so on, but we won't worry about that now.
>
> **[3:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/working-with-the-prebuilt-example?u=76281980&t=196)** So we'll click on OK, we will execute this.
>
> **[3:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/working-with-the-prebuilt-example?u=76281980&t=203)** It turned green, that's good.
>
> **[3:25](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/working-with-the-prebuilt-example?u=76281980&t=205)** We will go over to Partitioning and configure that.
>
> **[3:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/working-with-the-prebuilt-example?u=76281980&t=209)** We're going to go ahead and draw randomly.
>
> **[3:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/working-with-the-prebuilt-example?u=76281980&t=213)** The previous example was using stratified sampling on another variable.
>
> **[3:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/working-with-the-prebuilt-example?u=76281980&t=218)** We're not going to go down that road, so we're going to change this to Draw randomly for our purposes.
>
> **[3:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/working-with-the-prebuilt-example?u=76281980&t=223)** Also, I want to increase the size of this dataset.
>
> **[3:46](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/working-with-the-prebuilt-example?u=76281980&t=226)** So conceptually, all I'm doing is increasing the amount of training data so that we're feeding more data to the modeling algorithm.
>
> **[3:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/working-with-the-prebuilt-example?u=76281980&t=237)** So I've increased that to 80% relative with Draw randomly selected.
>
> **[4:02](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/working-with-the-prebuilt-example?u=76281980&t=242)** We're going to go into the Color Manager, again, adopting this for our purposes.
>
> **[4:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/working-with-the-prebuilt-example?u=76281980&t=247)** Right now it thinks we're trying to color number of dependents.
>
> **[4:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/working-with-the-prebuilt-example?u=76281980&t=251)** That, of course, is not true because we want to color our target variable and our target variable is serious delinquency.
>
> **[4:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/working-with-the-prebuilt-example?u=76281980&t=259)** The color coding turns out to be great, by the way, zero for not delinquent, red for delinquent.
>
> **[4:25](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/working-with-the-prebuilt-example?u=76281980&t=265)** So kind of green for go and red for caution, makes sense.
>
> **[4:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/working-with-the-prebuilt-example?u=76281980&t=269)** Click on OK.
>
> **[4:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/working-with-the-prebuilt-example?u=76281980&t=271)** Then we're going to go here to the Decision Tree Learner, Execute and Open Views.
>
> **[4:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/working-with-the-prebuilt-example?u=76281980&t=278)** Oh, I know what I did.
>
> **[4:39](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/working-with-the-prebuilt-example?u=76281980&t=279)** I actually want to show you that 'cause it's a very simple mistake that you might make.
>
> **[4:46](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/working-with-the-prebuilt-example?u=76281980&t=286)** Remember that the color node thought that we wanted number of dependents and we wanted our target variable.
>
> **[4:52](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/working-with-the-prebuilt-example?u=76281980&t=292)** This node was confused about the same thing.
>
> **[4:55](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/working-with-the-prebuilt-example?u=76281980&t=295)** Remember, we've changed the dataset.
>
> **[4:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/working-with-the-prebuilt-example?u=76281980&t=297)** So these nodes are basically grabbing, arbitrarily, a variable that meets the criterion but not necessarily the right one.
>
> **[5:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/working-with-the-prebuilt-example?u=76281980&t=305)** So we've declared that as serious delinquency two years, click on OK.
>
> **[5:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/working-with-the-prebuilt-example?u=76281980&t=310)** Notice that the indicator is yellow and not red.
>
> **[5:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/working-with-the-prebuilt-example?u=76281980&t=314)** That's a good sign.
>
> **[5:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/working-with-the-prebuilt-example?u=76281980&t=315)** Go here, Execute and Open Views.
>
> **[5:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/working-with-the-prebuilt-example?u=76281980&t=318)** We got a result.
>
> **[5:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/working-with-the-prebuilt-example?u=76281980&t=320)** We're not going to talk about the result now because we have more ground to cover, but in a little bit, we will be looking at the complete tree, just not now.

> [!info]- Semantic Content
>
> **CLI Commands:** node (5), make (4)
> **UI Navigation:** click on (4), go to (1)
> **Env Vars:** knime (4)
> **Prerequisites:** configure (3), set up (1)
> **Code Keywords:** let (1), delete (1), this. (1)
> **Analogies:** for instance (1)
> **Warnings:** caution (1)
> **Speakers:** - [instructor] (1)

#### KNIME settings for C4.5
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/knime-settings-for-c4-5?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/knime-settings-for-c4-5?u=76281980&t=0)** - Okay. We're in the same workflow and we generated a tree successfully.
>
> **[0:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/knime-settings-for-c4-5?u=76281980&t=5)** We're not going to look at that now, so we can close it.
>
> **[0:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/knime-settings-for-c4-5?u=76281980&t=9)** What we're going to do now is talk about the settings in the decision tree learner for doing C 4.5.
>
> **[0:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/knime-settings-for-c4-5?u=76281980&t=17)** Right click configure And let's take a closer look.
>
> **[0:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/knime-settings-for-c4-5?u=76281980&t=23)** Okay. Now we won't go into the help file because the font is a bit small, but if you did, you would notice that the decision tree learner cites Ross Quinland in C 4.5 as being the basis for many of these settings.
>
> **[0:40](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/knime-settings-for-c4-5?u=76281980&t=40)** So what changes if any, do we have to make, so that these settings are consistent with C 4.5?
>
> **[0:48](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/knime-settings-for-c4-5?u=76281980&t=48)** Well, the Gini Index is actually CART or classification trees, not C 4.5.
>
> **[0:56](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/knime-settings-for-c4-5?u=76281980&t=56)** So we want to change that to Gain ratio.
>
> **[0:59](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/knime-settings-for-c4-5?u=76281980&t=59)** As far as pruning goes, C 4.5 uses pruning, however, take a look, this dropdown menu says "no pruning", or "M-D-L".
>
> **[1:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/knime-settings-for-c4-5?u=76281980&t=71)** MDL is not the kind of pruning that C 4.5 uses.
>
> **[1:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/knime-settings-for-c4-5?u=76281980&t=76)** What is happening, however, is that menu is referring to a kind of pruning that might happen during tree growth.
>
> **[1:25](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/knime-settings-for-c4-5?u=76281980&t=85)** The kind of pruning in C 4.5 is after the tree has been built.
>
> **[1:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/knime-settings-for-c4-5?u=76281980&t=89)** The tree grows big, and then you prune it back.
>
> **[1:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/knime-settings-for-c4-5?u=76281980&t=92)** That is Reduced Error Pruning in C 4.5, which is why we want this checked off.
>
> **[1:40](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/knime-settings-for-c4-5?u=76281980&t=100)** It is actually possible.
>
> **[1:41](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/knime-settings-for-c4-5?u=76281980&t=101)** This is a bit confusing, but it is actually possible to do both in nine.
>
> **[1:47](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/knime-settings-for-c4-5?u=76281980&t=107)** And that's why you have both a menu and a checkbox, but the settings we want are No pruning, followed by Reduced Error Pruning. That will be the C 4.5 way.
>
> **[1:58](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/knime-settings-for-c4-5?u=76281980&t=118)** Then finally, we want Binary nominal splits.
>
> **[2:02](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/knime-settings-for-c4-5?u=76281980&t=122)** We could check this, but we want that deselected for C 4.5, to make it consistent with the fact that classification trees does Binary splits but C 4.5 does not.
>
> **[2:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/knime-settings-for-c4-5?u=76281980&t=138)** Now that's only for nominal variables now.
>
> **[2:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/knime-settings-for-c4-5?u=76281980&t=141)** Finally, we also have a setting that we may or may not adjust in any given session.
>
> **[2:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/knime-settings-for-c4-5?u=76281980&t=148)** The minimum number of records per node.
>
> **[2:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/knime-settings-for-c4-5?u=76281980&t=151)** It's currently set at a thousand.
>
> **[2:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/knime-settings-for-c4-5?u=76281980&t=154)** You will very often want to make that a bit smaller, but for now we're going to go ahead and click on, okay.
>
> **[2:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/knime-settings-for-c4-5?u=76281980&t=163)** It warns us that we're going to be adjusting things.
>
> **[2:47](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/knime-settings-for-c4-5?u=76281980&t=167)** Click on okay.
>
> **[2:49](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/knime-settings-for-c4-5?u=76281980&t=169)** So notice that my Excel reader, my partitioning node, and my color manager all have the green indicator but the decision tree learner has returned to the yellow indicator.
>
> **[3:03](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/knime-settings-for-c4-5?u=76281980&t=183)** That's because we've changed the settings.
>
> **[3:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/knime-settings-for-c4-5?u=76281980&t=186)** So that's it for now.
>
> **[3:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/knime-settings-for-c4-5?u=76281980&t=187)** And we're ready for the next step.

> [!info]- Semantic Content
>
> **Versions:** 4.5 (11)
> **CLI Commands:** make (3), node (2)
> **Code Keywords:** finally, (2), let (1), this, (1)
> **UI Navigation:** click on (2), dropdown (1), checkbox (1)
> **Env Vars:** cart (1), mdl (1)
> **Definitions:** is a  (2)
> **Prerequisites:** configure (1)
> **Speakers:** - okay (1)

#### How C4.5 handles nominal variables
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-c4-5-handles-nominal-variables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-c4-5-handles-nominal-variables?u=76281980&t=0)** - [Instructor] Continuing now in the same workflow, we're not quite ready to build a complete tree.
>
> **[0:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-c4-5-handles-nominal-variables?u=76281980&t=6)** And that's because I want to show you a couple of things which will help reinforce your learning around how C4.5 works.
>
> **[0:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-c4-5-handles-nominal-variables?u=76281980&t=16)** So we'll go into the Decision Tree Learner and we're going to use a feature for learning purposes that you may or may not use when you're working on a project and that is that we can force the first variable.
>
> **[0:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-c4-5-handles-nominal-variables?u=76281980&t=33)** This is not something that you're going to do all the time but it's going to be perfect for our purposes now.
>
> **[0:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-c4-5-handles-nominal-variables?u=76281980&t=38)** So as we look at these variables, notice some say D, decimal, some say I, integer and some say S, string.
>
> **[0:52](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-c4-5-handles-nominal-variables?u=76281980&t=52)** Let's go down and grab NumberOfDependents.
>
> **[0:55](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-c4-5-handles-nominal-variables?u=76281980&t=55)** So I'm choosing that because of the S next to it.
>
> **[0:58](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-c4-5-handles-nominal-variables?u=76281980&t=58)** This is being treated as an ordinal variable which will behave the same as a nominal variable.
>
> **[1:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-c4-5-handles-nominal-variables?u=76281980&t=65)** Sometimes you'll hear a distinction made between the two.
>
> **[1:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-c4-5-handles-nominal-variables?u=76281980&t=68)** For our purposes in the decision tree learner, there is no distinction made between ordinal and nominal, they're both treated as categorical.
>
> **[1:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-c4-5-handles-nominal-variables?u=76281980&t=77)** We'll go ahead and click on okay.
>
> **[1:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-c4-5-handles-nominal-variables?u=76281980&t=81)** We will execute and open views.
>
> **[1:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-c4-5-handles-nominal-variables?u=76281980&t=86)** Maximize that and there's a lot going on.
>
> **[1:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-c4-5-handles-nominal-variables?u=76281980&t=88)** In fact, I am going to zoom out so that we can see what's going on better.
>
> **[1:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-c4-5-handles-nominal-variables?u=76281980&t=94)** We're not going to be able to read it but the main point is obvious and that is that from the root node, which has all of our data, we have lots of nodes below and that's because we did not choose the binary splits for nominals which is consistent with how C4.5 works, so we have gotten a different little branch for each category within this.
>
> **[2:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-c4-5-handles-nominal-variables?u=76281980&t=129)** If this were a scale variable, it would be treated differently because scale variables are split in a binary fashion in C4.5.
>
> **[2:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-c4-5-handles-nominal-variables?u=76281980&t=138)** But this has been declared as a string indicating that it's a category and that's why we've gotten a separate branch for each category within NumberOfDependents.
>
> **[2:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-c4-5-handles-nominal-variables?u=76281980&t=151)** I'm going to close this now and now we're ready for scale variables.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), this. (1)
> **CLI Commands:** node (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)

#### How C4.5 handles continuous variables
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-c4-5-handles-continuous-variables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-c4-5-handles-continuous-variables?u=76281980&t=0)** - [Instructor] Continuing in the same workflow, we're going to take a look at scale variables.
>
> **[0:04](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-c4-5-handles-continuous-variables?u=76281980&t=4)** So let's go in, Configure, and take a closer look.
>
> **[0:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-c4-5-handles-continuous-variables?u=76281980&t=9)** We had forced it to split on number of dependents.
>
> **[0:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-c4-5-handles-continuous-variables?u=76281980&t=13)** We're going to turn that off.
>
> **[0:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-c4-5-handles-continuous-variables?u=76281980&t=14)** I'm very confident that the top split is going to be a scale variable so we don't have to force it.
>
> **[0:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-c4-5-handles-continuous-variables?u=76281980&t=21)** We'll just let this go and only look at the top branch.
>
> **[0:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-c4-5-handles-continuous-variables?u=76281980&t=28)** Right-click, Execute and Open Views, maximize that.
>
> **[0:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-c4-5-handles-continuous-variables?u=76281980&t=35)** And sure enough, we get a scale variable and notice that it's a binary split.
>
> **[0:39](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-c4-5-handles-continuous-variables?u=76281980&t=39)** So we have our root node and we actually see that overall default rate is 6.7.
>
> **[0:48](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-c4-5-handles-continuous-variables?u=76281980&t=48)** Then down here, you can tell that this is a top branch 'cause it's really dramatic.
>
> **[0:54](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-c4-5-handles-continuous-variables?u=76281980&t=54)** Down here, you have a modest dropdown to 5.6% serious delinquency and over here, you get a really striking 55.7 serious delinquency.
>
> **[1:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-c4-5-handles-continuous-variables?u=76281980&t=70)** So your scale variables will always be a binary split.
>
> **[1:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-c4-5-handles-continuous-variables?u=76281980&t=76)** One final thought though.
>
> **[1:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-c4-5-handles-continuous-variables?u=76281980&t=79)** Take a look, we've got 120,000 cases, which is great, but the vast majority of them are zeros and not ones.
>
> **[1:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-c4-5-handles-continuous-variables?u=76281980&t=91)** When you do that, you're going to tend to get rules that focus on who's not a default.
>
> **[1:41](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-c4-5-handles-continuous-variables?u=76281980&t=101)** That's an issue that we can actually address and we're going to talk about that next.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), default. (1)
> **Versions:** 6.7 (1), 5.6 (1), 55.7 (1)
> **UI Navigation:** right-click (1), dropdown (1)
> **CLI Commands:** node (1)
> **Definitions:** is a  (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### Equal size sampling
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/equal-size-sampling?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/equal-size-sampling?u=76281980&t=0)** - [Instructor] So this issue of having an unequal number of ones and zeros can cause the overall model performance to look pretty good in terms of overall accuracy, but not do a good job at finding the ones and the ones are the defaults.
>
> **[0:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/equal-size-sampling?u=76281980&t=21)** They're the group that we really care about.
>
> **[0:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/equal-size-sampling?u=76281980&t=23)** So what we're going to do is close this and go down to the node repository and there's a node called equal size sampling.
>
> **[0:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/equal-size-sampling?u=76281980&t=36)** We'll just set that there so that we're ready to go and draw an arrow from here to here.
>
> **[0:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/equal-size-sampling?u=76281980&t=45)** And from equal size out to color manager, it will prompt us to say, is that really what we want to do?
>
> **[0:52](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/equal-size-sampling?u=76281980&t=52)** We're going to say yes.
>
> **[0:54](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/equal-size-sampling?u=76281980&t=54)** And then let's just kind of clean this up a little bit so this kind of sits in between, perhaps move this out and maybe it's time to kind of get this out of our way.
>
> **[1:03](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/equal-size-sampling?u=76281980&t=63)** And that all looks a little bit nicer now.
>
> **[1:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/equal-size-sampling?u=76281980&t=68)** So what does this node do and why is it important?
>
> **[1:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/equal-size-sampling?u=76281980&t=71)** We have a very large dataset, which is great, but we don't have an equal number of defaults and non-defaults.
>
> **[1:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/equal-size-sampling?u=76281980&t=77)** So we're going to configure this and number of dependents pops up again, but what we care about is serious delinquency in two years.
>
> **[1:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/equal-size-sampling?u=76281980&t=89)** And you have some choices there. The default is just fine.
>
> **[1:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/equal-size-sampling?u=76281980&t=93)** We're going to click on OK. We'll execute that.
>
> **[1:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/equal-size-sampling?u=76281980&t=97)** We'll execute the color manager again.
>
> **[1:40](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/equal-size-sampling?u=76281980&t=100)** And then you're about to notice the difference.
>
> **[1:42](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/equal-size-sampling?u=76281980&t=102)** We're going to go in here and say execute and open views.
>
> **[1:47](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/equal-size-sampling?u=76281980&t=107)** And we're looking at a very different situation.
>
> **[1:49](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/equal-size-sampling?u=76281980&t=109)** It actually has chosen a different variable now at the top.
>
> **[1:53](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/equal-size-sampling?u=76281980&t=113)** We have a total of 16,000, but 8,011 are ones and 8,011 are zeros.
>
> **[2:02](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/equal-size-sampling?u=76281980&t=122)** When the ones and zeros are as lopsided as they were a moment ago, this is almost always a good idea.
>
> **[2:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/equal-size-sampling?u=76281980&t=131)** So we've made that adjustment and now it's time to build a complete tree.
>
> **[2:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/equal-size-sampling?u=76281980&t=135)** Great, so we've made that change and now we can start to examine the complete full tree.

> [!info]- Semantic Content
>
> **CLI Commands:** node (3)
> **Code Keywords:** let (1)
> **UI Navigation:** click on (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### A quick look at the complete C4.5 tree
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/a-quick-look-at-the-complete-c4-5-tree?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/a-quick-look-at-the-complete-c4-5-tree?u=76281980&t=0)** - Okay, we've built the tree, now let's examine it more carefully.
>
> **[0:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/a-quick-look-at-the-complete-c4-5-tree?u=76281980&t=5)** Well, we say that we've got our 16,000 cases up here.
>
> **[0:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/a-quick-look-at-the-complete-c4-5-tree?u=76281980&t=9)** And then if number of times late was zero, we have a delinquency of 40%.
>
> **[0:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/a-quick-look-at-the-complete-c4-5-tree?u=76281980&t=17)** Now, you've got to be careful.
>
> **[0:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/a-quick-look-at-the-complete-c4-5-tree?u=76281980&t=19)** Now that we've balanced it, now that we've used equal size sampling, we have a delinquency of 50%.
>
> **[0:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/a-quick-look-at-the-complete-c4-5-tree?u=76281980&t=26)** So when you do this, you're going to get a better model.
>
> **[0:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/a-quick-look-at-the-complete-c4-5-tree?u=76281980&t=32)** But, if you're not careful you can confuse your colleagues with these new numbers, because they're used to delinquency being something like 5%, not like 50.
>
> **[0:42](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/a-quick-look-at-the-complete-c4-5-tree?u=76281980&t=42)** Nonetheless, you can see how delinquency goes up or down relative to the number that it is in the root node.
>
> **[0:50](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/a-quick-look-at-the-complete-c4-5-tree?u=76281980&t=50)** So we're starting at 50 now and we go down to 40 or all the way up to 91.5.
>
> **[0:56](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/a-quick-look-at-the-complete-c4-5-tree?u=76281980&t=56)** So we're absolutely finding some patterns here and we can expand the tree below the zero number of times late.
>
> **[1:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/a-quick-look-at-the-complete-c4-5-tree?u=76281980&t=65)** And then it wants to split on more modest lateness of 30 to 59.
>
> **[1:12](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/a-quick-look-at-the-complete-c4-5-tree?u=76281980&t=72)** And we're going down even further to 35.7% delinquency or up pretty high to 82.5.
>
> **[1:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/a-quick-look-at-the-complete-c4-5-tree?u=76281980&t=83)** Not as high as 91.5, but pretty high.
>
> **[1:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/a-quick-look-at-the-complete-c4-5-tree?u=76281980&t=86)** I'm actually going to zoom out because there's a lot of tree to see here.
>
> **[1:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/a-quick-look-at-the-complete-c4-5-tree?u=76281980&t=93)** And it's going to get increasingly hard to read, but you can tell from this little viewer in the upper right, that we have quite a few branches.
>
> **[1:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/a-quick-look-at-the-complete-c4-5-tree?u=76281980&t=103)** So having zoomed down to the bottom, let's come in closer so that we can see it.
>
> **[1:53](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/a-quick-look-at-the-complete-c4-5-tree?u=76281980&t=113)** We can use the little viewer to help us as well.
>
> **[1:56](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/a-quick-look-at-the-complete-c4-5-tree?u=76281980&t=116)** And what we discover is that the very bottom we find that we go down to 43.3 and up to 62.9, but that's not as impressive as the other numbers.
>
> **[2:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/a-quick-look-at-the-complete-c4-5-tree?u=76281980&t=128)** Let's take a look at the far left, either by clicking here or going up here.
>
> **[2:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/a-quick-look-at-the-complete-c4-5-tree?u=76281980&t=134)** Here, we have all the way down to 18.7, which appears to be the lowest in the tree.
>
> **[2:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/a-quick-look-at-the-complete-c4-5-tree?u=76281980&t=141)** And usually the opposite end of the tree, so way over here, is where you're going to get the highest.
>
> **[2:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/a-quick-look-at-the-complete-c4-5-tree?u=76281980&t=148)** And that's the 91.5 that we saw earlier.
>
> **[2:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/a-quick-look-at-the-complete-c4-5-tree?u=76281980&t=152)** Now remember, this isn't the only way to look at the performance of your tree.
>
> **[2:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/a-quick-look-at-the-complete-c4-5-tree?u=76281980&t=157)** We have a completely separate node that we have to talk about now that evaluates the performance of your model.

> [!info]- Semantic Content
>
> **Versions:** 91.5 (3), 35.7 (1), 82.5 (1), 43.3 (1), 62.9 (1)
> **Code Keywords:** let (3), this, (1)
> **CLI Commands:** node (2), find (1)
> **Warnings:** be careful (1)
> **Speakers:** - okay (1)

#### Evaluating the accuracy of your C4.5 tree
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/evaluating-the-accuracy-of-your-c4-5-tree?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/evaluating-the-accuracy-of-your-c4-5-tree?u=76281980&t=0)** - [Instructor] So let's close this tree and take a look at our performance through a different lens.
>
> **[0:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/evaluating-the-accuracy-of-your-c4-5-tree?u=76281980&t=7)** So what we're going to do is execute this node, the Decision Tree Predictor.
>
> **[0:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/evaluating-the-accuracy-of-your-c4-5-tree?u=76281980&t=13)** Click on that, it turns green.
>
> **[0:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/evaluating-the-accuracy-of-your-c4-5-tree?u=76281980&t=16)** Let's pause for a moment and talk about what this is doing.
>
> **[0:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/evaluating-the-accuracy-of-your-c4-5-tree?u=76281980&t=20)** It's running two paths through the node.
>
> **[0:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/evaluating-the-accuracy-of-your-c4-5-tree?u=76281980&t=23)** What's coming out of the decision tree learner, which is the model, and then the data that's coming through here that previous to that was here in the Partitioning node, which previous to that was in the original dataset.
>
> **[0:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/evaluating-the-accuracy-of-your-c4-5-tree?u=76281980&t=38)** It's our test data that's being run through there to see how good a job we do.
>
> **[0:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/evaluating-the-accuracy-of-your-c4-5-tree?u=76281980&t=44)** So let's take a look at the Classified Data.
>
> **[0:50](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/evaluating-the-accuracy-of-your-c4-5-tree?u=76281980&t=50)** So over here in Serious Delinquency in 2 years, we've got our zeros and ones.
>
> **[0:55](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/evaluating-the-accuracy-of-your-c4-5-tree?u=76281980&t=55)** We've had that variable from the beginning.
>
> **[0:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/evaluating-the-accuracy-of-your-c4-5-tree?u=76281980&t=57)** But way over here on the right, we have a new one.
>
> **[1:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/evaluating-the-accuracy-of-your-c4-5-tree?u=76281980&t=61)** It's the predicted version of that.
>
> **[1:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/evaluating-the-accuracy-of-your-c4-5-tree?u=76281980&t=65)** We've got to widen it to make it easier to see.
>
> **[1:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/evaluating-the-accuracy-of-your-c4-5-tree?u=76281980&t=67)** You can just begin to see the word there, Prediction Serious Delinquency.
>
> **[1:12](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/evaluating-the-accuracy-of-your-c4-5-tree?u=76281980&t=72)** So this column is what the model thinks this original column was going to be.
>
> **[1:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/evaluating-the-accuracy-of-your-c4-5-tree?u=76281980&t=79)** So in the top row it says 0, and way over here it says 0.
>
> **[1:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/evaluating-the-accuracy-of-your-c4-5-tree?u=76281980&t=83)** So that was correct.
>
> **[1:25](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/evaluating-the-accuracy-of-your-c4-5-tree?u=76281980&t=85)** Down here it says 1, and over here it looks, if I'm in the same row, it said 0 so that was not right.
>
> **[1:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/evaluating-the-accuracy-of-your-c4-5-tree?u=76281980&t=94)** We don't have to do this manually.
>
> **[1:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/evaluating-the-accuracy-of-your-c4-5-tree?u=76281980&t=96)** We can generate a report.
>
> **[1:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/evaluating-the-accuracy-of-your-c4-5-tree?u=76281980&t=98)** So let's close this, go to the Scorer, Configure that, and we want these columns to be the columns that we were just talking about.
>
> **[1:51](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/evaluating-the-accuracy-of-your-c4-5-tree?u=76281980&t=111)** So the first column is Serious Delinquency in 2 years, and the second column is, all the way down, Prediction Serious Delinquency in 2 years.
>
> **[2:02](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/evaluating-the-accuracy-of-your-c4-5-tree?u=76281980&t=122)** We'll click on OK, and we will Execute and Open Views.
>
> **[2:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/evaluating-the-accuracy-of-your-c4-5-tree?u=76281980&t=127)** Maximize that, and what we see is that for the actual zeros, so we've got the actuals over here, and you have the Predictions across the top.
>
> **[2:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/evaluating-the-accuracy-of-your-c4-5-tree?u=76281980&t=141)** So among the actual zeros, we get the vast majority of them right, 71.398 out of about 27,000, we get right.
>
> **[2:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/evaluating-the-accuracy-of-your-c4-5-tree?u=76281980&t=153)** And the ones, out of about 2,000, we get more than 1,500 of them right.
>
> **[2:40](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/evaluating-the-accuracy-of-your-c4-5-tree?u=76281980&t=160)** Sometimes you'll find when you do equal size sampling that the overall accuracy tends to come down.
>
> **[2:47](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/evaluating-the-accuracy-of-your-c4-5-tree?u=76281980&t=167)** This is typical.
>
> **[2:49](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/evaluating-the-accuracy-of-your-c4-5-tree?u=76281980&t=169)** However, you're going to do a better job with the rare group, in this case our delinquencies, when you use equal size sampling.
>
> **[3:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/evaluating-the-accuracy-of-your-c4-5-tree?u=76281980&t=180)** So it was almost certainly the correct judgment in this dataset.

> [!info]- Semantic Content
>
> **CLI Commands:** node (3), make (1), find (1)
> **Code Keywords:** let (4), this, (1)
> **UI Navigation:** click on (2), go to (1)
> **Versions:** 71.398 (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### When to turn off pruning
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/when-to-turn-off-pruning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/when-to-turn-off-pruning?u=76281980&t=0)** - [Instructor] Okay, we are in the same workflow.
>
> **[0:03](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/when-to-turn-off-pruning?u=76281980&t=3)** We've built our model, we've checked its accuracy.
>
> **[0:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/when-to-turn-off-pruning?u=76281980&t=7)** On one level, we're all done.
>
> **[0:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/when-to-turn-off-pruning?u=76281980&t=8)** But I want to talk about the effects of turning off pruning and actually demonstrate that.
>
> **[0:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/when-to-turn-off-pruning?u=76281980&t=14)** So let's take a look.
>
> **[0:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/when-to-turn-off-pruning?u=76281980&t=16)** So we go in and we have an opportunity to deselect Reduced Error Pruning.
>
> **[0:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/when-to-turn-off-pruning?u=76281980&t=21)** We're going to keep it on for just a little bit longer.
>
> **[0:24](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/when-to-turn-off-pruning?u=76281980&t=24)** I also want to mention that reduced error pruning is the type of pruning and C4.5.
>
> **[0:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/when-to-turn-off-pruning?u=76281980&t=30)** Classification trees has a different kind of pruning called cost complexity pruning.
>
> **[0:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/when-to-turn-off-pruning?u=76281980&t=37)** We're going to talk only about this kind, because it's supported in decision tree learner.
>
> **[0:42](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/when-to-turn-off-pruning?u=76281980&t=42)** We won't be demonstrating cost complexity pruning, 'cause it's not supported in the decision tree learner.
>
> **[0:49](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/when-to-turn-off-pruning?u=76281980&t=49)** So let's click on OK.
>
> **[0:53](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/when-to-turn-off-pruning?u=76281980&t=53)** And it's just reminding us that the settings weren't changed.
>
> **[0:55](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/when-to-turn-off-pruning?u=76281980&t=55)** That's fine, 'cause we're going to do a little exercise here.
>
> **[0:58](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/when-to-turn-off-pruning?u=76281980&t=58)** We're going to take a look at the decision tree, but with a different emphasis.
>
> **[1:04](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/when-to-turn-off-pruning?u=76281980&t=64)** I'm going to zoom out to 60%.
>
> **[1:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/when-to-turn-off-pruning?u=76281980&t=68)** I know that makes a little tough to read.
>
> **[1:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/when-to-turn-off-pruning?u=76281980&t=70)** But the reason is, we're just doing a simple exercise of counting leaf nodes.
>
> **[1:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/when-to-turn-off-pruning?u=76281980&t=75)** And sometimes the easiest way to do it is that little thumbnail up at the top.
>
> **[1:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/when-to-turn-off-pruning?u=76281980&t=80)** You can actually see the tree on the left, with a little thumbnail, it's a little small there.
>
> **[1:24](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/when-to-turn-off-pruning?u=76281980&t=84)** But it's 1, 2, 3, 4, 5, 6.
>
> **[1:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/when-to-turn-off-pruning?u=76281980&t=90)** I'll double check my work 1, 2, 3, 4, 5, 6.
>
> **[1:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/when-to-turn-off-pruning?u=76281980&t=91)** I'm quite sure I'm right about that.
>
> **[1:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/when-to-turn-off-pruning?u=76281980&t=96)** We're going to close the tree.
>
> **[1:40](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/when-to-turn-off-pruning?u=76281980&t=100)** Now let's run it again without pruning.
>
> **[1:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/when-to-turn-off-pruning?u=76281980&t=105)** Now, I think it will be obvious what we would expect is at least six leaf nodes and very possibly more.
>
> **[1:55](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/when-to-turn-off-pruning?u=76281980&t=115)** Let's see what we get.
>
> **[1:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/when-to-turn-off-pruning?u=76281980&t=117)** So we'll execute an open views.
>
> **[1:59](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/when-to-turn-off-pruning?u=76281980&t=119)** Again, the only change is turning off pruning.
>
> **[2:02](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/when-to-turn-off-pruning?u=76281980&t=122)** Again, I'll go to 60% 'cause we're counting, we're not carefully analyzing here.
>
> **[2:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/when-to-turn-off-pruning?u=76281980&t=127)** Now if we were to carefully analyze, you're going to find that the further down you go, you tend to get perhaps to some kind of obscure relationships.
>
> **[2:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/when-to-turn-off-pruning?u=76281980&t=136)** That's generally what you see.
>
> **[2:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/when-to-turn-off-pruning?u=76281980&t=137)** But it's actually taking me a little bit of effort here to completely zoom out and notice our thumbnail looks completely different.
>
> **[2:25](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/when-to-turn-off-pruning?u=76281980&t=145)** Oh, I think I've actually missed some.
>
> **[2:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/when-to-turn-off-pruning?u=76281980&t=149)** Let me double check my work here.
>
> **[2:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/when-to-turn-off-pruning?u=76281980&t=151)** Those are fully expanded.
>
> **[2:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/when-to-turn-off-pruning?u=76281980&t=153)** But indeed, I did miss one.
>
> **[2:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/when-to-turn-off-pruning?u=76281980&t=155)** That now, my gosh, there's a lot more going on.
>
> **[2:40](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/when-to-turn-off-pruning?u=76281980&t=160)** It's going to take a little effort to count here.
>
> **[2:42](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/when-to-turn-off-pruning?u=76281980&t=162)** Clearly, even at 60% zoom, it's very hard to count them all.
>
> **[2:46](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/when-to-turn-off-pruning?u=76281980&t=166)** Interestingly enough, if we go over here to the right hand side, for a moment it looked like it was a three-way split here, one, two, three.
>
> **[2:58](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/when-to-turn-off-pruning?u=76281980&t=178)** But it looks like that's actually not the case in that particular area.
>
> **[3:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/when-to-turn-off-pruning?u=76281980&t=181)** So let's go to the thumbnail.
>
> **[3:03](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/when-to-turn-off-pruning?u=76281980&t=183)** And we have 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 leaf nodes.
>
> **[3:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/when-to-turn-off-pruning?u=76281980&t=194)** So they've doubled.
>
> **[3:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/when-to-turn-off-pruning?u=76281980&t=195)** Let's close this and go back to the workflow.
>
> **[3:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/when-to-turn-off-pruning?u=76281980&t=200)** But talk a little bit about what are the implications of that?
>
> **[3:25](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/when-to-turn-off-pruning?u=76281980&t=205)** Why would we want to turn pruning off?
>
> **[3:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/when-to-turn-off-pruning?u=76281980&t=208)** There are a couple of reasons that come to mind.
>
> **[3:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/when-to-turn-off-pruning?u=76281980&t=211)** If you execute a tree, and it doesn't grow at all, this will occasionally happen.
>
> **[3:39](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/when-to-turn-off-pruning?u=76281980&t=219)** I immediately turn off pruning to check.
>
> **[3:41](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/when-to-turn-off-pruning?u=76281980&t=221)** Because if I turn off pruning, and suddenly it grows a little bit, but with pruning turned on, it doesn't grow at all.
>
> **[3:51](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/when-to-turn-off-pruning?u=76281980&t=231)** That doesn't tell me that I want to proceed with no pruning.
>
> **[3:54](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/when-to-turn-off-pruning?u=76281980&t=234)** But it tells me that everything's working except for the fact that I don't seem to have enough data.
>
> **[4:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/when-to-turn-off-pruning?u=76281980&t=240)** And if that were the case, one of the first things I would be doing is considering this minimum number of records per node.
>
> **[4:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/when-to-turn-off-pruning?u=76281980&t=250)** So to be clear, I'm not saying that you turn off pruning and proceed with pruning turned off.
>
> **[4:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/when-to-turn-off-pruning?u=76281980&t=258)** But if you turn off pruning temporarily, and then you get some tree growth, that's an indication that you probably need to adjust the minimum number records per node.
>
> **[4:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/when-to-turn-off-pruning?u=76281980&t=269)** When else would you turn off pruning?
>
> **[4:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/when-to-turn-off-pruning?u=76281980&t=272)** Well, you might be very curious what kind of accuracy that you're getting when you turn off pruning.
>
> **[4:39](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/when-to-turn-off-pruning?u=76281980&t=279)** It's going to be higher.
>
> **[4:40](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/when-to-turn-off-pruning?u=76281980&t=280)** It is guaranteed to be higher on your training data, but it generally results in an overfit tree.
>
> **[4:47](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/when-to-turn-off-pruning?u=76281980&t=287)** But again, by performing that experiment, I urge you not to deploy an unpruned tree, that's risky.
>
> **[4:54](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/when-to-turn-off-pruning?u=76281980&t=294)** But if you perform the experiment, it will give you some indication that perhaps with a little bit more work on your variables or little bit more work on your settings, you could do a bit better.
>
> **[5:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/when-to-turn-off-pruning?u=76281980&t=305)** So turning off pruning can be a diagnostic tool, but I do not generally recommend it for your final model.
>
> **[5:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/when-to-turn-off-pruning?u=76281980&t=313)** It's very risky to do so.
>
> **[5:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/when-to-turn-off-pruning?u=76281980&t=315)** If you're contemplating that, make sure to check, double check and triple check your work, especially in regards to how well your model generalizes to new data.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), case, (1)
> **CLI Commands:** node (2), find (1), make (1)
> **UI Navigation:** go to (2), click on (1)
> **Cross-References:** go back to (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)


### 4. 3. Introducing Classification Trees

#### Introducing Leo Breiman and CART
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/introducing-leo-breiman-and-cart?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/introducing-leo-breiman-and-cart?u=76281980&t=0)** - [Keith] Leo Breiman was one of the most influential machine learning pioneers for decades.
>
> **[0:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/introducing-leo-breiman-and-cart?u=76281980&t=6)** Even if you haven't heard his name, if you work in machine learning, you've probably encountered his influence.
>
> **[0:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/introducing-leo-breiman-and-cart?u=76281980&t=13)** The Random Forest algorithm, still a top performer in machine learning competitions today, was one of his contributions.
>
> **[0:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/introducing-leo-breiman-and-cart?u=76281980&t=23)** Random Forests are a collection of decision tree models combined in what is usually called an ensemble.
>
> **[0:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/introducing-leo-breiman-and-cart?u=76281980&t=31)** They're a bit more complicated than where we want to start our journey.
>
> **[0:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/introducing-leo-breiman-and-cart?u=76281980&t=36)** We're going to start with another incredibly influential contribution of Breiman's CART.
>
> **[0:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/introducing-leo-breiman-and-cart?u=76281980&t=44)** Breiman and his co-authors wrote a book way back in 1984 describing their approach to classification and regression trees.
>
> **[0:56](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/introducing-leo-breiman-and-cart?u=76281980&t=56)** CART is an acronym and almost everybody calls it CART.
>
> **[1:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/introducing-leo-breiman-and-cart?u=76281980&t=60)** What we are looking at is a software company called Minitab.
>
> **[1:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/introducing-leo-breiman-and-cart?u=76281980&t=66)** And what's interesting is back in the day they didn't just write a book, they developed software to implement their ideas for CART at a company called Salford Systems, which has since been bought by Minitab.
>
> **[1:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/introducing-leo-breiman-and-cart?u=76281980&t=82)** So you can think of CART in two ways, what they talked about in the book, which is available widely, and also the official version of CART.
>
> **[1:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/introducing-leo-breiman-and-cart?u=76281980&t=94)** Here's how Minitab describes it.
>
> **[1:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/introducing-leo-breiman-and-cart?u=76281980&t=98)** The official version of CART of course, is proprietary, and only the Minitab implementation would be considered this official implementation.
>
> **[1:48](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/introducing-leo-breiman-and-cart?u=76281980&t=108)** So what we are going to be doing is describing the key features as they wrote about them in the book and that you see implemented widely.
>
> **[1:59](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/introducing-leo-breiman-and-cart?u=76281980&t=119)** If you're also interested in Leo Breiman's thought leadership, he's uniquely qualified to talk about statistics and machine learning, or specifically to contrast the two because he was an academic statistician at Berkeley, but he was also one of the earliest machine learning consultants.
>
> **[2:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/introducing-leo-breiman-and-cart?u=76281980&t=143)** So what he's able to do in a very influential article called The Two Cultures, is compare and contrast the two.
>
> **[2:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/introducing-leo-breiman-and-cart?u=76281980&t=152)** I reread this article probably about once a year.
>
> **[2:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/introducing-leo-breiman-and-cart?u=76281980&t=156)** It has really helped me understand that difference, and I recommend it highly.
>
> **[2:42](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/introducing-leo-breiman-and-cart?u=76281980&t=162)** I actually talk about this in a course in the library discussing prediction, causation, and statistical inference.
>
> **[2:52](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/introducing-leo-breiman-and-cart?u=76281980&t=172)** As we've seen KNIME doesn't have a dedicated node called CART.
>
> **[2:58](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/introducing-leo-breiman-and-cart?u=76281980&t=178)** We'll be using the decision tree learner node.
>
> **[3:02](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/introducing-leo-breiman-and-cart?u=76281980&t=182)** However, we'll be adjusting the settings consistent with the approach in the 1984 book.
>
> **[3:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/introducing-leo-breiman-and-cart?u=76281980&t=189)** And by the way, Breiman's coauthors were Friedman, Olshen, and Stone.
>
> **[3:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/introducing-leo-breiman-and-cart?u=76281980&t=194)** We'll start with classification trees, and then later in the course, we'll discuss regression trees.
>
> **[3:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/introducing-leo-breiman-and-cart?u=76281980&t=201)** In regards to classification trees there are three key features that we have to discuss in some detail.
>
> **[3:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/introducing-leo-breiman-and-cart?u=76281980&t=208)** The Gini coefficient, as a measure of impurity, pruning the tree as a second step to improve the tree, and missing data handling.
>
> **[3:39](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/introducing-leo-breiman-and-cart?u=76281980&t=219)** So first we'll discuss how CART works, then we'll discuss KNIME's settings and options.
>
> **[3:47](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/introducing-leo-breiman-and-cart?u=76281980&t=227)** And where there are important and interesting differences between the two, we'll discuss that.
>
> **[3:53](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/introducing-leo-breiman-and-cart?u=76281980&t=233)** By the time we are done you'll have a thorough understanding of the CART algorithm which you can apply with any machine learning platform including R, Python, and many others.
>
> **[4:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/introducing-leo-breiman-and-cart?u=76281980&t=245)** And you'll also know your way around the decision tree learner and KNIME, including all of those settings and options.

> [!info]- Semantic Content
>
> **Env Vars:** cart (10), knime (3)
> **CLI Commands:** node (2), python (1)
> **Definitions:** is an  (1), is a  (1)
> **Cross-References:** later in (1)
> **Speakers:** - [keith] (1)

#### What is the Gini coefficient?
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/what-is-the-gini-coefficient?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/what-is-the-gini-coefficient?u=76281980&t=0)** - [Instructor] When Breiman and his colleagues were developing classification trees, the method that they chose to form a branch utilizes what's called the Gini coefficient.
>
> **[0:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/what-is-the-gini-coefficient?u=76281980&t=13)** You may have heard the name in a different context.
>
> **[0:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/what-is-the-gini-coefficient?u=76281980&t=16)** Corrado Gini was an Italian statistician, demographer, and sociologist.
>
> **[0:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/what-is-the-gini-coefficient?u=76281980&t=22)** The Gini coefficient was originally used to measure income inequality.
>
> **[0:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/what-is-the-gini-coefficient?u=76281980&t=28)** And it's still used for that today.
>
> **[0:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/what-is-the-gini-coefficient?u=76281980&t=30)** You may have seen maps color coded by the Gini coefficient.
>
> **[0:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/what-is-the-gini-coefficient?u=76281980&t=36)** Here we're looking at a map of the United States showing the Gini index by county and you can see that the darker areas are the very large metropolitan areas.
>
> **[0:49](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/what-is-the-gini-coefficient?u=76281980&t=49)** It looks like Boston, New York City, Miami, Los Angeles, San Francisco, among others.
>
> **[0:58](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/what-is-the-gini-coefficient?u=76281980&t=58)** And it wouldn't be surprising that in very large cities, you might have extremes of wealth and lower income.
>
> **[1:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/what-is-the-gini-coefficient?u=76281980&t=66)** Where you see the lighter colors, it looks like Utah, Northern Nevada, very rural areas, you seem to have a lot less of that and thus, the lighter color.
>
> **[1:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/what-is-the-gini-coefficient?u=76281980&t=79)** Let's briefly review what those values mean.
>
> **[1:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/what-is-the-gini-coefficient?u=76281980&t=83)** So low values, like the ones that we saw in the rural areas, represent equality, values that are similar or in some cases exactly the same.
>
> **[1:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/what-is-the-gini-coefficient?u=76281980&t=94)** High values, like the ones that we saw in those very large cities, have maximal inequality, a mixture of high and low values.
>
> **[1:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/what-is-the-gini-coefficient?u=76281980&t=105)** So how does this help us build a classification tree?
>
> **[1:50](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/what-is-the-gini-coefficient?u=76281980&t=110)** The root node represents all the data.
>
> **[1:53](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/what-is-the-gini-coefficient?u=76281980&t=113)** So it will be diverse and heterogeneous with a mix of the categories that you are trying to predict.
>
> **[2:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/what-is-the-gini-coefficient?u=76281980&t=120)** By using the Gini coefficient, the algorithm is trying to find those branches and those splits that maximally reduce the Gini coefficient.
>
> **[2:12](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/what-is-the-gini-coefficient?u=76281980&t=132)** The end result should be leaf nodes that are homogeneous.
>
> **[2:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/what-is-the-gini-coefficient?u=76281980&t=136)** Often they're described as pure, all the same value.
>
> **[2:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/what-is-the-gini-coefficient?u=76281980&t=140)** So another way of saying it that you'll sometimes hear is trying to reduce impurity.
>
> **[2:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/what-is-the-gini-coefficient?u=76281980&t=148)** The algorithm has some weighting that you should be aware of.
>
> **[2:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/what-is-the-gini-coefficient?u=76281980&t=152)** If you formed a branch and split on purity alone, you might get a lot of leaf nodes with just one case because a single case is always pure.
>
> **[2:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/what-is-the-gini-coefficient?u=76281980&t=164)** So it takes this into account counterbalancing purity with a preference to have equally-sized splits.
>
> **[2:51](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/what-is-the-gini-coefficient?u=76281980&t=171)** And the algorithm weights these two factors equally.

> [!info]- Semantic Content
>
> **CLI Commands:** node (1), find (1)
> **Code Keywords:** let (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### How CART handles missing data using surrogates
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-cart-handles-missing-data-using-surrogates?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-cart-handles-missing-data-using-surrogates?u=76281980&t=0)** - [Instructor] Let's talk about how CART handles missing input variables.
>
> **[0:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-cart-handles-missing-data-using-surrogates?u=76281980&t=6)** CART actually has a fascinating way of addressing this.
>
> **[0:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-cart-handles-missing-data-using-surrogates?u=76281980&t=10)** It's a technique called surrogates.
>
> **[0:12](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-cart-handles-missing-data-using-surrogates?u=76281980&t=12)** Now, nine doesn't support this particular missing value strategy in its decision tree learner, but it's very interesting and I want you to be familiar with it so you'll understand how CART works on multiple platforms.
>
> **[0:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-cart-handles-missing-data-using-surrogates?u=76281980&t=29)** So, here we go.
>
> **[0:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-cart-handles-missing-data-using-surrogates?u=76281980&t=31)** For each split in the tree, CART identifies the input fields that are the most statistically similar to the selected split field, and we're going to have an example in a moment, but the notion is that when you're missing the input variable, let's say income, you now want to find those other variables that are correlated with income not because you're predicting income per se, but you're going to use these alternatives as a proxy.
>
> **[1:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-cart-handles-missing-data-using-surrogates?u=76281980&t=65)** What's fascinating about this is you're not attempting to impute.
>
> **[1:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-cart-handles-missing-data-using-surrogates?u=76281980&t=70)** In other words, you don't have to come up with a precise estimate of the missing variable.
>
> **[1:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-cart-handles-missing-data-using-surrogates?u=76281980&t=76)** You just have to find other variables that are correlated with it that can act in its place.
>
> **[1:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-cart-handles-missing-data-using-surrogates?u=76281980&t=82)** And, again, we're about to see an example.
>
> **[1:24](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-cart-handles-missing-data-using-surrogates?u=76281980&t=84)** Finally, the goal is very straightforward.
>
> **[1:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-cart-handles-missing-data-using-surrogates?u=76281980&t=88)** You simply have to use these proxies to determine: Are we going down the left branch?
>
> **[1:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-cart-handles-missing-data-using-surrogates?u=76281980&t=94)** Are we going down the right branch?
>
> **[1:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-cart-handles-missing-data-using-surrogates?u=76281980&t=96)** Now, remember that CART always does binary splits.
>
> **[1:42](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-cart-handles-missing-data-using-surrogates?u=76281980&t=102)** So it's always just a left branch and a right branch.
>
> **[1:47](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-cart-handles-missing-data-using-surrogates?u=76281980&t=107)** Let's take a look at that example.
>
> **[1:49](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-cart-handles-missing-data-using-surrogates?u=76281980&t=109)** So let's say that you need to determine whether or not an individual is going to go down the left branch or the right branch because one branch represents less than or equal to $50,000 in annual income, and the other branch represents greater than 50,000 per year annual income.
>
> **[2:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-cart-handles-missing-data-using-surrogates?u=76281980&t=131)** So you don't have the person's income.
>
> **[2:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-cart-handles-missing-data-using-surrogates?u=76281980&t=134)** Seemingly, this is a quandary, but you know the following things about them: they live in an expensive subdivision, so they have an above-average cost home; they drive a luxury car; they have both a medical degree and a PhD; and their current position is that they're a director at a research lab.
>
> **[2:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-cart-handles-missing-data-using-surrogates?u=76281980&t=158)** So even if you don't think in terms of US dollars, you may be able to guess that an individual with these indicators of wealth probably makes more than $50,000.
>
> **[2:52](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-cart-handles-missing-data-using-surrogates?u=76281980&t=172)** Now, imagine for a moment that you were trying to predict what their income could be.
>
> **[2:58](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-cart-handles-missing-data-using-surrogates?u=76281980&t=178)** There'd be a wide range.
>
> **[2:59](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-cart-handles-missing-data-using-surrogates?u=76281980&t=179)** It'd be very difficult to know that precisely, but that's not what's required here.
>
> **[3:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-cart-handles-missing-data-using-surrogates?u=76281980&t=185)** We simply have to know if these four facts give us sufficient evidence to guess that they probably go down the greater than $50,000 branch and not the less than or equal to $50,000 branch.
>
> **[3:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-cart-handles-missing-data-using-surrogates?u=76281980&t=202)** As a final comment, and you don't always encounter this, Quinlan actually has a comment on surrogates in his book.
>
> **[3:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-cart-handles-missing-data-using-surrogates?u=76281980&t=211)** Now, remember, CART was developed by Breiman, not by Quinlan.
>
> **[3:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-cart-handles-missing-data-using-surrogates?u=76281980&t=218)** But Quinlan wrote his book a few years after Breiman and his co-authors.
>
> **[3:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-cart-handles-missing-data-using-surrogates?u=76281980&t=224)** So it was already out there in the world, and CART has been a widely-used algorithm really from its inception.
>
> **[3:54](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-cart-handles-missing-data-using-surrogates?u=76281980&t=234)** So Quinlan was aware of it and made the following comment in his book.
>
> **[3:59](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-cart-handles-missing-data-using-surrogates?u=76281980&t=239)** "This method..."
>
> **[4:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-cart-handles-missing-data-using-surrogates?u=76281980&t=240)** Now, he's talking about surrogates now, not his own method.
>
> **[4:02](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-cart-handles-missing-data-using-surrogates?u=76281980&t=242)** His own method is fractionalization, as we've seen.
>
> **[4:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-cart-handles-missing-data-using-surrogates?u=76281980&t=246)** Surrogate method does not call for individual cases to be fragmented, and so, is more efficient.
>
> **[4:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-cart-handles-missing-data-using-surrogates?u=76281980&t=255)** He's talking about speed among other things, right?
>
> **[4:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-cart-handles-missing-data-using-surrogates?u=76281980&t=257)** Remember that these techniques go back enough years that whether or not it's computationally intensive was something that people talked about.
>
> **[4:25](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-cart-handles-missing-data-using-surrogates?u=76281980&t=265)** It depends, however, on being able to find suitably accurate surrogate splits, which seems unlikely in certain domains.
>
> **[4:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-cart-handles-missing-data-using-surrogates?u=76281980&t=276)** So going back to our example for a moment, I think these proxy variables would be great proxy variables for income, but Quinlan does make an interesting point.
>
> **[4:48](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-cart-handles-missing-data-using-surrogates?u=76281980&t=288)** And the credit example that we're using in this course would greater than 90-day late be a good proxy for between 30 and 60 days late, possibly.
>
> **[5:03](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-cart-handles-missing-data-using-surrogates?u=76281980&t=303)** But, if you didn't know one, you might not know the other.
>
> **[5:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-cart-handles-missing-data-using-surrogates?u=76281980&t=308)** So, again, I think Quinlan raises an interesting issue here and I couldn't resist sharing that with you because it's so fascinating to have one algorithm developer commenting a bit on their strategy why they did things the way they did and comparing their strategy to alternatives.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), this. (1), finally, (1), this, (1)
> **Env Vars:** cart (7)
> **CLI Commands:** find (3), make (1)
> **Definitions:** in other words (1), is a  (1)
> **Tools:** notion (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### Changing the settings in KNIME
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/changing-the-settings-in-knime?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/changing-the-settings-in-knime?u=76281980&t=0)** - [Instructor] Okay, we're ready to build our classification tree.
>
> **[0:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/changing-the-settings-in-knime?u=76281980&t=5)** But first I want to talk a little bit about the practice files.
>
> **[0:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/changing-the-settings-in-knime?u=76281980&t=10)** So I have cleaned up the workflow.
>
> **[0:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/changing-the-settings-in-knime?u=76281980&t=13)** And I have exported a workflow for your use called chapter two, example for learning a decision tree.
>
> **[0:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/changing-the-settings-in-knime?u=76281980&t=21)** This one that you're looking at has been called chapter three because we're about to make changes.
>
> **[0:27](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/changing-the-settings-in-knime?u=76281980&t=27)** So the chapter two version will have the settings for C4.5.
>
> **[0:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/changing-the-settings-in-knime?u=76281980&t=33)** And the chapter three version, the one that we're about to work in, will have the settings for a classification tree.
>
> **[0:40](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/changing-the-settings-in-knime?u=76281980&t=40)** I want to draw your attention to something as well.
>
> **[0:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/changing-the-settings-in-knime?u=76281980&t=43)** I've cleaned up the annotation in the notes and I've added a note that the accuracy may differ because of partitioning in the equal size sampling.
>
> **[0:51](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/changing-the-settings-in-knime?u=76281980&t=51)** This is what I mean by that.
>
> **[0:53](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/changing-the-settings-in-knime?u=76281980&t=53)** When you go to run these, you're going to have these two nodes, the equal size sampling and the partitioning.
>
> **[1:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/changing-the-settings-in-knime?u=76281980&t=60)** When you add your own data source using the Excel reader from your hard drive, you're going to have to tell it where your location is.
>
> **[1:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/changing-the-settings-in-knime?u=76281980&t=68)** Mine is pointing to the location on my hard drive.
>
> **[1:12](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/changing-the-settings-in-knime?u=76281980&t=72)** All these nodes are going to be red at first and then you're going to run them.
>
> **[1:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/changing-the-settings-in-knime?u=76281980&t=76)** And the randomization is going to occur here and here.
>
> **[1:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/changing-the-settings-in-knime?u=76281980&t=81)** As a result, you are not modeling the same data as me.
>
> **[1:25](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/changing-the-settings-in-knime?u=76281980&t=85)** So be cognizant of that.
>
> **[1:27](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/changing-the-settings-in-knime?u=76281980&t=87)** Okay. So now it's time to talk about the settings.
>
> **[1:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/changing-the-settings-in-knime?u=76281980&t=91)** Let's go into the decision tree learner.
>
> **[1:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/changing-the-settings-in-knime?u=76281980&t=93)** Right-click, configure.
>
> **[1:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/changing-the-settings-in-knime?u=76281980&t=96)** What's going to be different now that we're doing classification trees?
>
> **[1:40](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/changing-the-settings-in-knime?u=76281980&t=100)** Well, our quality measure is going to be the genie index.
>
> **[1:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/changing-the-settings-in-knime?u=76281980&t=105)** And then down at the bottom, we want binary nominal splits because that's how classification trees work.
>
> **[1:53](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/changing-the-settings-in-knime?u=76281980&t=113)** And then let's briefly comment on pruning.
>
> **[1:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/changing-the-settings-in-knime?u=76281980&t=117)** In classification trees, the type of pruning is cost complexity pruning.
>
> **[2:02](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/changing-the-settings-in-knime?u=76281980&t=122)** That's not supported here in the decision tree learner.
>
> **[2:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/changing-the-settings-in-knime?u=76281980&t=126)** So we're just going to keep it on reduced error pruning.
>
> **[2:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/changing-the-settings-in-knime?u=76281980&t=130)** Let's click on Okay.
>
> **[2:12](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/changing-the-settings-in-knime?u=76281980&t=132)** It's going to tell us, of course, that those changes will change things.
>
> **[2:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/changing-the-settings-in-knime?u=76281980&t=135)** Some of these nodes have turned yellow.
>
> **[2:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/changing-the-settings-in-knime?u=76281980&t=138)** Let's right-click, execute, and open views.
>
> **[2:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/changing-the-settings-in-knime?u=76281980&t=142)** And there you go.
>
> **[2:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/changing-the-settings-in-knime?u=76281980&t=143)** In the top branch is revolving utilization which is different actually than when we did C4.5.
>
> **[2:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/changing-the-settings-in-knime?u=76281980&t=151)** But we're going to go ahead and end analyzing this tree now because I want to take a moment and show the implications of a binary split.
>
> **[2:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/changing-the-settings-in-knime?u=76281980&t=163)** And that means that we have to do a nominal variable in the top branch.
>
> **[2:47](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/changing-the-settings-in-knime?u=76281980&t=167)** And we're going to do that now.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4)
> **UI Navigation:** right-click (2), go to (1), click on (1)
> **CLI Commands:** make (1)
> **Definitions:** means that (1)
> **Warnings:** note that (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### How CART handles nominal variables
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-cart-handles-nominal-variables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-cart-handles-nominal-variables?u=76281980&t=0)** - [Instructor] Okay, we're in the same workflow.
>
> **[0:02](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-cart-handles-nominal-variables?u=76281980&t=2)** Let's take a look at what happens when we force the top branch to be nominal.
>
> **[0:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-cart-handles-nominal-variables?u=76281980&t=9)** So we'll go into the Decision Tree learner, Configure, Force root split column, and we want to choose a nominal variable that will have an S next to it, for string.
>
> **[0:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-cart-handles-nominal-variables?u=76281980&t=20)** So let's do number of dependents.
>
> **[0:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-cart-handles-nominal-variables?u=76281980&t=23)** Click on Okay.
>
> **[0:25](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-cart-handles-nominal-variables?u=76281980&t=25)** Click on Okay.
>
> **[0:27](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-cart-handles-nominal-variables?u=76281980&t=27)** Execute and Open Views.
>
> **[0:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-cart-handles-nominal-variables?u=76281980&t=31)** Let's take a look.
>
> **[0:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-cart-handles-nominal-variables?u=76281980&t=32)** Okay, well, it's indeed splitting on what we told it to split on, not an amazing first branch.
>
> **[0:40](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-cart-handles-nominal-variables?u=76281980&t=40)** Remember, this is balanced data, so we're starting with 50 50 in the root node and we get down to 55.0 over here, I'm rounding and about 55.0 in the 1 category over here.
>
> **[0:54](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-cart-handles-nominal-variables?u=76281980&t=54)** Again, not amazing.
>
> **[0:55](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-cart-handles-nominal-variables?u=76281980&t=55)** Now, notice you can split more.
>
> **[0:59](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-cart-handles-nominal-variables?u=76281980&t=59)** Let's do another branch.
>
> **[1:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-cart-handles-nominal-variables?u=76281980&t=61)** So what's happening basically, is your no dependent, or your not applicable dependent, is over there on the left.
>
> **[1:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-cart-handles-nominal-variables?u=76281980&t=71)** And now we're branching again on the right hand side, it's immediately going to that scale variable.
>
> **[1:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-cart-handles-nominal-variables?u=76281980&t=78)** It really likes that scale variable better revolving utilization.
>
> **[1:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-cart-handles-nominal-variables?u=76281980&t=83)** But notice that unlike C 4.5, you do not get a wide split, because we told it we want a binary nominal split and it gave us exactly what we wanted in that top branch.
>
> **[1:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-cart-handles-nominal-variables?u=76281980&t=97)** So cart and C 4.5 handle nominal variables differently.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4)
> **Versions:** 55.0 (2), 4.5 (2)
> **UI Navigation:** click on (2)
> **CLI Commands:** node (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### A quick look at the complete CART tree
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/a-quick-look-at-the-complete-cart-tree?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/a-quick-look-at-the-complete-cart-tree?u=76281980&t=0)** - [Instructor] Okay, let's go back to the workflow, and remove that restriction.
>
> **[0:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/a-quick-look-at-the-complete-cart-tree?u=76281980&t=9)** So, configure, de-select force root split column, click on "OK".
>
> **[0:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/a-quick-look-at-the-complete-cart-tree?u=76281980&t=15)** click on "OK".
>
> **[0:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/a-quick-look-at-the-complete-cart-tree?u=76281980&t=17)** And, let's let it grow the way it wants to grow without that restriction.
>
> **[0:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/a-quick-look-at-the-complete-cart-tree?u=76281980&t=21)** Maximize this.
>
> **[0:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/a-quick-look-at-the-complete-cart-tree?u=76281980&t=23)** It really likes that revolving utilization.
>
> **[0:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/a-quick-look-at-the-complete-cart-tree?u=76281980&t=26)** Now, of course, we haven't randomized again, so we can run this a bunch of times and it's going to look the same.
>
> **[0:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/a-quick-look-at-the-complete-cart-tree?u=76281980&t=31)** It's only if we reset the source node, or the partition node, and so on, that we would notice those changes I was referring to earlier.
>
> **[0:40](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/a-quick-look-at-the-complete-cart-tree?u=76281980&t=40)** Let's go another level.
>
> **[0:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/a-quick-look-at-the-complete-cart-tree?u=76281980&t=45)** I'm going to try a zoom of 80.
>
> **[0:48](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/a-quick-look-at-the-complete-cart-tree?u=76281980&t=48)** That's still pretty good.
>
> **[0:50](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/a-quick-look-at-the-complete-cart-tree?u=76281980&t=50)** So, we've got balanced data up at the top.
>
> **[0:53](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/a-quick-look-at-the-complete-cart-tree?u=76281980&t=53)** This variable that it likes better is doing a much better job than that nominal variable.
>
> **[0:58](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/a-quick-look-at-the-complete-cart-tree?u=76281980&t=58)** We're going to over 70%, zero, on the left, and over 70%, one, on the right.
>
> **[1:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/a-quick-look-at-the-complete-cart-tree?u=76281980&t=65)** And then, since it further splits, we get to 20.6% default, 60% default, I'm rounding of course, about 65% default, and almost 94% default.
>
> **[1:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/a-quick-look-at-the-complete-cart-tree?u=76281980&t=81)** So, really pretty dramatic.
>
> **[1:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/a-quick-look-at-the-complete-cart-tree?u=76281980&t=83)** And, I'm going to expand this some more.
>
> **[1:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/a-quick-look-at-the-complete-cart-tree?u=76281980&t=86)** We're going to lose track of the top of the tree, but if I go until it wants to stop, I can see that I'm not going to get anything more dramatic than that 94% default, and the reason, let me scroll up to help you see this.
>
> **[1:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/a-quick-look-at-the-complete-cart-tree?u=76281980&t=103)** What we tend to do is we tend to get the extreme default on one side, and the extreme non-default on the other side.
>
> **[1:54](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/a-quick-look-at-the-complete-cart-tree?u=76281980&t=114)** Since we're branching in the middle, we're getting increasingly granular, but we're not getting higher than those extreme values on the far right and the far left.
>
> **[2:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/a-quick-look-at-the-complete-cart-tree?u=76281980&t=126)** That's typical when you're looking at a tree, in fact, the little thumbnail in the upper right, although quite small, helps you see that.
>
> **[2:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/a-quick-look-at-the-complete-cart-tree?u=76281980&t=134)** Extreme on the left, extreme on the right, and then branching down the center.
>
> **[2:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/a-quick-look-at-the-complete-cart-tree?u=76281980&t=139)** So, there you have it, this branch pretty well.
>
> **[2:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/a-quick-look-at-the-complete-cart-tree?u=76281980&t=142)** Let's next turn to how accurate this tree is.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), default, (4), this. (2), default. (1)
> **UI Navigation:** click on (2), scroll up (1)
> **CLI Commands:** node (2)
> **Versions:** 20.6 (1)
> **Cross-References:** go back to (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### Evaluating the accuracy of your CART tree
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/evaluating-the-accuracy-of-your-cart-tree?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/evaluating-the-accuracy-of-your-cart-tree?u=76281980&t=0)** - [Instructor] Okay, let's close this tree and now, let's do an overall evaluation of the tree.
>
> **[0:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/evaluating-the-accuracy-of-your-cart-tree?u=76281980&t=8)** So we already know that the decision tree predictor appends the new value so we can proceed right to the score, Configure, it's already set up with serious delinquency in the first column and prediction serious delinquency in the second column.
>
> **[0:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/evaluating-the-accuracy-of-your-cart-tree?u=76281980&t=30)** Now, let's take a look at how we did.
>
> **[0:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/evaluating-the-accuracy-of-your-cart-tree?u=76281980&t=32)** Right-click, Execute and Open Views, maximize and let's take a look at our confusion matrix way up here in the upper left.
>
> **[0:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/evaluating-the-accuracy-of-your-cart-tree?u=76281980&t=44)** Of the actual ones, we got 1499 correct and 499 wrong.
>
> **[0:52](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/evaluating-the-accuracy-of-your-cart-tree?u=76281980&t=52)** Of the actual zeros, we got over 21,000 correct and about 7,000 wrong.
>
> **[1:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/evaluating-the-accuracy-of-your-cart-tree?u=76281980&t=61)** Down at the bottom, we can see that our overall accuracy is 75%, so the performance of the two models is fairly similar.
>
> **[1:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/evaluating-the-accuracy-of-your-cart-tree?u=76281980&t=73)** We'd have to take a much closer look to determine which one we preferred and we won't do that now.
>
> **[1:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/evaluating-the-accuracy-of-your-cart-tree?u=76281980&t=81)** In the next section, we're going to be looking at a completely different algorithm, it's actually the sibling algorithm to this one.
>
> **[1:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/evaluating-the-accuracy-of-your-cart-tree?u=76281980&t=89)** We just looked at classification trees and its sibling is regression trees.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4)
> **Prerequisites:** configure (1), set up (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** right-click (1)
> **Speakers:** - [instructor] (1)


### 5. 4. Introducing Regression Trees

#### MPG data set
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/mpg-data-set?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/mpg-data-set?u=76281980&t=0)** - [Instructor] Okay, time to talk about regression trees.
>
> **[0:04](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/mpg-data-set?u=76281980&t=4)** Regression tree is part of the acronym, CART, and is the sibling algorithm to classification trees.
>
> **[0:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/mpg-data-set?u=76281980&t=13)** Now, of course, in regression trees, we have a scale dependent variable.
>
> **[0:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/mpg-data-set?u=76281980&t=20)** We're not trying to predict what category a case falls into rather we're trying to predict the value of a scale variable.
>
> **[0:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/mpg-data-set?u=76281980&t=29)** So we need a new target variable.
>
> **[0:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/mpg-data-set?u=76281980&t=31)** And in fact, we're going to switch data sets to do it.
>
> **[0:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/mpg-data-set?u=76281980&t=33)** And here's the data set.
>
> **[0:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/mpg-data-set?u=76281980&t=35)** We have a data set, happens to be in Excel, and the target variable is miles per gallon, it's here in column H, and this Excel file will be provided to you.
>
> **[0:46](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/mpg-data-set?u=76281980&t=46)** We won't be using the name of the make and model.
>
> **[0:51](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/mpg-data-set?u=76281980&t=51)** We will, however, have these other independent variables, cylinder, displacement, horsepower, weight, acceleration, year, origin, which is going to be one for American cars, three for Japanese cars, and two for European cars.
>
> **[1:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/mpg-data-set?u=76281980&t=75)** So those are going to all be our independent variables.
>
> **[1:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/mpg-data-set?u=76281980&t=79)** So, next thing we're going to do is give this a shot in nine.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Code Keywords:** switch (1)
> **Env Vars:** cart (1)
> **Speakers:** - [instructor] (1)

#### The regression tree prebuilt example
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-regression-tree-prebuilt-example?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-regression-tree-prebuilt-example?u=76281980&t=0)** - [Instructor] Okay, here we are in Knime.
>
> **[0:03](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-regression-tree-prebuilt-example?u=76281980&t=3)** I've closed all the windows and started with a blank workflow so that we have plenty of room to work.
>
> **[0:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-regression-tree-prebuilt-example?u=76281980&t=8)** We're going to go over to Examples because there's a good existing example that we can borrow some information from.
>
> **[0:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-regression-tree-prebuilt-example?u=76281980&t=18)** It's under Examples, Analytics, Regressions and then it's this one here.
>
> **[0:24](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-regression-tree-prebuilt-example?u=76281980&t=24)** Let me help you see that a little bit.
>
> **[0:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-regression-tree-prebuilt-example?u=76281980&t=26)** Learning a simple regression tree, double click on that.
>
> **[0:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-regression-tree-prebuilt-example?u=76281980&t=33)** Come back so that we can see that clearly.
>
> **[0:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-regression-tree-prebuilt-example?u=76281980&t=36)** And of course we have an Excel file.
>
> **[0:39](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-regression-tree-prebuilt-example?u=76281980&t=39)** So you would read in that with the Excel reader.
>
> **[0:42](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-regression-tree-prebuilt-example?u=76281980&t=42)** We can drag a blank one over, but that's not how I'm going to do it.
>
> **[0:47](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-regression-tree-prebuilt-example?u=76281980&t=47)** I'm going to paste one that I've already set up with the necessary path.
>
> **[0:56](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-regression-tree-prebuilt-example?u=76281980&t=56)** Let me connect this and show you what I mean.
>
> **[1:02](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-regression-tree-prebuilt-example?u=76281980&t=62)** Here I am.
>
> **[1:03](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-regression-tree-prebuilt-example?u=76281980&t=63)** This has my path, KMcCormick, Documents, and then the file.
>
> **[1:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-regression-tree-prebuilt-example?u=76281980&t=68)** It is very unlikely that you have that path.
>
> **[1:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-regression-tree-prebuilt-example?u=76281980&t=71)** So here's what you want to do.
>
> **[1:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-regression-tree-prebuilt-example?u=76281980&t=73)** Let me go back to the workflow.
>
> **[1:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-regression-tree-prebuilt-example?u=76281980&t=75)** You want to either use a brand new Excel reader and tell it where you have put the Excel file that I'm going to provide.
>
> **[1:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-regression-tree-prebuilt-example?u=76281980&t=86)** Or alternatively, after several videos, I'm going to be providing the finished product as a completed workflow.
>
> **[1:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-regression-tree-prebuilt-example?u=76281980&t=96)** You can use either of those resources to follow along.
>
> **[1:41](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-regression-tree-prebuilt-example?u=76281980&t=101)** I won't be needing this, so I'm going to delete it.
>
> **[1:46](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-regression-tree-prebuilt-example?u=76281980&t=106)** Let's take a look again inside this node.
>
> **[1:50](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-regression-tree-prebuilt-example?u=76281980&t=110)** In fact, actually we'll execute it so that it reads all that data.
>
> **[1:55](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-regression-tree-prebuilt-example?u=76281980&t=115)** We'll go to File Table, same data set that we saw in Excel.
>
> **[1:59](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-regression-tree-prebuilt-example?u=76281980&t=119)** I'll close that.
>
> **[2:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-regression-tree-prebuilt-example?u=76281980&t=120)** Now let's take a look at Partitioning and Configure and you want to be careful here because the prebuilt example was using Stratified sampling.
>
> **[2:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-regression-tree-prebuilt-example?u=76281980&t=131)** We're not going to use Stratified sampling.
>
> **[2:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-regression-tree-prebuilt-example?u=76281980&t=133)** We're going to say Draw randomly.
>
> **[2:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-regression-tree-prebuilt-example?u=76281980&t=136)** So very briefly, because you're probably curious, what is Stratified sampling?
>
> **[2:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-regression-tree-prebuilt-example?u=76281980&t=142)** You would do that one if you had categories that were not evenly represented in the data and you wanted to address that.
>
> **[2:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-regression-tree-prebuilt-example?u=76281980&t=152)** It's not an issue that we're going to be worrying about right now.
>
> **[2:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-regression-tree-prebuilt-example?u=76281980&t=154)** So we're changing it to Draw randomly.
>
> **[2:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-regression-tree-prebuilt-example?u=76281980&t=157)** Click on OK to go back to the workflow.
>
> **[2:40](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-regression-tree-prebuilt-example?u=76281980&t=160)** Now we're going to go into Configure and make sure that miles per gallon is our target column.
>
> **[2:51](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-regression-tree-prebuilt-example?u=76281980&t=171)** And then we have all of our independent variables: cylinder, displacement, horsepower, weight, acceleration, year, origin, and one that we do not want, name.
>
> **[3:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-regression-tree-prebuilt-example?u=76281980&t=181)** We don't want to try to predict with make and model.
>
> **[3:03](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-regression-tree-prebuilt-example?u=76281980&t=183)** That's never a good idea.
>
> **[3:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-regression-tree-prebuilt-example?u=76281980&t=186)** We won't worry about other settings at the moment.
>
> **[3:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-regression-tree-prebuilt-example?u=76281980&t=189)** We're just going to click on OK.
>
> **[3:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-regression-tree-prebuilt-example?u=76281980&t=191)** So now we can go in here and click on Execute and Open Views.
>
> **[3:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-regression-tree-prebuilt-example?u=76281980&t=196)** Maximize that, make it a little bit bigger.
>
> **[3:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-regression-tree-prebuilt-example?u=76281980&t=200)** And what we see is up at the top, in the root node we have 23 miles per gallon.
>
> **[3:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-regression-tree-prebuilt-example?u=76281980&t=208)** Then, and I realize this is a little bit hard to read, if you hover your mouse over it a little tip comes up and you can see all of that.
>
> **[3:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-regression-tree-prebuilt-example?u=76281980&t=217)** But for the lower displacement we have 28 miles per gallon.
>
> **[3:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-regression-tree-prebuilt-example?u=76281980&t=223)** 28.4186 to be specific.
>
> **[3:46](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-regression-tree-prebuilt-example?u=76281980&t=226)** And for the larger displacement vehicles we have a much lower miles per gallon, about 16 and a half.
>
> **[3:55](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-regression-tree-prebuilt-example?u=76281980&t=235)** That's all we have to worry about now because we're going to go through this step by step.
>
> **[4:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-regression-tree-prebuilt-example?u=76281980&t=240)** But now we know we basically have a working example and we can proceed with concepts and then come back into Knime and talk more about settings and some additional details.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), from. (1), this, (1), delete (1)
> **CLI Commands:** make (3), node (2)
> **UI Navigation:** click on (4), go to (1)
> **Prerequisites:** configure (2), set up (1)
> **Cross-References:** go back to (2)
> **Versions:** 28.4186 (1)
> **Definitions:** is a  (1)
> **Warnings:** be careful (1)

#### The math behind regression trees
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-math-behind-regression-trees?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-math-behind-regression-trees?u=76281980&t=0)** - [Instructor] Let's talk a little bit about the math behind regression trees.
>
> **[0:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-math-behind-regression-trees?u=76281980&t=6)** Now, if you recall, classification trees use the Gini coefficient and some other factors to grow and then eventually prune the tree.
>
> **[0:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-math-behind-regression-trees?u=76281980&t=16)** With regression trees, it's a little bit different and that's what I want to talk about.
>
> **[0:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-math-behind-regression-trees?u=76281980&t=21)** So when we start predicting something like this miles per gallon example, we have at the top a predicted value of 23.8 miles per gallon.
>
> **[0:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-math-behind-regression-trees?u=76281980&t=32)** So there's no normality assumption, but for the moment, let's just assume that miles per gallon is somewhat like a bell curve, as you can see indicated there.
>
> **[0:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-math-behind-regression-trees?u=76281980&t=43)** What you're trying to do, or rather what the algorithm is trying to do as it works its way down the tree, is find branches where that bell curve is going to get increasingly tall and skinny as it branches and splits and works its way down to the bottom of the tree where you would find your leaf nodes.
>
> **[1:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-math-behind-regression-trees?u=76281980&t=65)** Now, why is that the case?
>
> **[1:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-math-behind-regression-trees?u=76281980&t=67)** Well, recall that with classification trees, the goal would be to have pure leaf nodes.
>
> **[1:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-math-behind-regression-trees?u=76281980&t=74)** Well, what's the equivalent of purity here?
>
> **[1:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-math-behind-regression-trees?u=76281980&t=78)** With a category, purity is all one category or all the other.
>
> **[1:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-math-behind-regression-trees?u=76281980&t=83)** The equivalent of that when we're trying to predict a scale target variable, what is sometimes called positive kurtosis, in other words, that tall, skinny distribution we were just talking about because what's happening as you move from a bell curve shape to a tall, skinny shape like that, you're getting a shrinking standard deviation, or rather the cases are getting squeezed together.
>
> **[1:52](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-math-behind-regression-trees?u=76281980&t=112)** There's less variation and that's the scale variable equivalent of purity.
>
> **[1:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-math-behind-regression-trees?u=76281980&t=117)** So that's how regression trees work.
>
> **[2:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-math-behind-regression-trees?u=76281980&t=120)** We're not doing the Gini calculation, what we're really trying to do is decrease variance from the top of the tree to the bottom of the tree.
>
> **[2:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/the-math-behind-regression-trees?u=76281980&t=130)** And that takes the form of something somewhat like a bell curve at the top in these positively kurtotic distributions in our leaf nodes.

> [!info]- Semantic Content
>
> **CLI Commands:** find (2)
> **Code Keywords:** let (2)
> **Versions:** 23.8 (1)
> **Definitions:** in other words (1)
> **Speakers:** - [instructor] (1)

#### How RT handles nominal variables
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-rt-handles-nominal-variables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-rt-handles-nominal-variables?u=76281980&t=0)** - [Instructor] We're back in KNIME where we were looking at this regression tree.
>
> **[0:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-rt-handles-nominal-variables?u=76281980&t=5)** So we'll close that and go back to the workflow.
>
> **[0:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-rt-handles-nominal-variables?u=76281980&t=8)** So what we have to address is how regression tree handles nominal variables and how KNIME handles nominal variables.
>
> **[0:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-rt-handles-nominal-variables?u=76281980&t=19)** Nominal variables are your categorical variables, so our origin variable one American, two European, three Japanese is our example of a nominal variable.
>
> **[0:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-rt-handles-nominal-variables?u=76281980&t=30)** So let's go in here and go to configure.
>
> **[0:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-rt-handles-nominal-variables?u=76281980&t=34)** And I'm actually going to tell it that we don't want any of these variables, except for origin.
>
> **[0:41](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-rt-handles-nominal-variables?u=76281980&t=41)** I'm forcing origin to be the only variable in the tree.
>
> **[0:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-rt-handles-nominal-variables?u=76281980&t=44)** That's going to be the best way to talk about this.
>
> **[0:47](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-rt-handles-nominal-variables?u=76281980&t=47)** So I'm going to click on OK. Click on OK.
>
> **[0:50](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-rt-handles-nominal-variables?u=76281980&t=50)** And then execute and open views.
>
> **[0:55](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-rt-handles-nominal-variables?u=76281980&t=55)** Maximize that. Make this a little bit bigger.
>
> **[0:59](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-rt-handles-nominal-variables?u=76281980&t=59)** And we can actually add another layer.
>
> **[1:02](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-rt-handles-nominal-variables?u=76281980&t=62)** So again, these can be hard to read if you forget the trick of hovering the mouse and getting the little tip to pop up, okay.
>
> **[1:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-rt-handles-nominal-variables?u=76281980&t=70)** So up at the top of the tree in the root node, we have 23 miles per gallon, a little bit more than 23.
>
> **[1:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-rt-handles-nominal-variables?u=76281980&t=78)** Then for this origin category, that's less than 1.5, which is kind of a problem as I'm sure you can see.
>
> **[1:27](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-rt-handles-nominal-variables?u=76281980&t=87)** But clearly what it's trying to do is break out the American cars because we're getting a lower miles per gallon.
>
> **[1:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-rt-handles-nominal-variables?u=76281980&t=95)** At the time that this dataset was collected, you would've had big muscle cars in the US.
>
> **[1:40](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-rt-handles-nominal-variables?u=76281980&t=100)** You're anticipating the lower miles per gallon, but also it tells you that.
>
> **[1:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-rt-handles-nominal-variables?u=76281980&t=105)** It says that it's less than 1.5 and we know category one is for American cars, but 1.5 is just odd and we don't want the algorithm trying to interpret the data that way.
>
> **[1:58](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-rt-handles-nominal-variables?u=76281980&t=118)** It's just not right. We're going to close this.
>
> **[2:02](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-rt-handles-nominal-variables?u=76281980&t=122)** And back in our workflow, we actually have to go back to the Excel reader.
>
> **[2:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-rt-handles-nominal-variables?u=76281980&t=125)** There's nowhere in the learner node that we can control this.
>
> **[2:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-rt-handles-nominal-variables?u=76281980&t=129)** So we're going to go to origin and we're going to tell it that origin is a string.
>
> **[2:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-rt-handles-nominal-variables?u=76281980&t=134)** And you might be curious about why this is the approach.
>
> **[2:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-rt-handles-nominal-variables?u=76281980&t=138)** We've got one, two, three.
>
> **[2:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-rt-handles-nominal-variables?u=76281980&t=140)** Why can't we just keep it an integer, but tell KNIME somewhere else that it's a nominal variable?
>
> **[2:27](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-rt-handles-nominal-variables?u=76281980&t=147)** It's just not the way KNIME works.
>
> **[2:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-rt-handles-nominal-variables?u=76281980&t=149)** The way that we're going to communicate to KNIME that we want origin to be treated as a nominal variable is to declare it in this source, in the Excel reader node, that it's a string.
>
> **[2:42](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-rt-handles-nominal-variables?u=76281980&t=162)** So we'll click on OK.
>
> **[2:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-rt-handles-nominal-variables?u=76281980&t=163)** It's warning us that things are going to change.
>
> **[2:46](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-rt-handles-nominal-variables?u=76281980&t=166)** We're going to say that's no problem.
>
> **[2:48](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-rt-handles-nominal-variables?u=76281980&t=168)** We're going to go into the learner, execute and open views.
>
> **[2:53](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-rt-handles-nominal-variables?u=76281980&t=173)** Maximize. Zoom in a bit.
>
> **[2:56](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-rt-handles-nominal-variables?u=76281980&t=176)** Add that final branch and it looks different now.
>
> **[2:59](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-rt-handles-nominal-variables?u=76281980&t=179)** We have very different labeling.
>
> **[3:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-rt-handles-nominal-variables?u=76281980&t=181)** Again, hover that mouse over there that you can see it.
>
> **[3:04](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-rt-handles-nominal-variables?u=76281980&t=184)** So this is saying origin is not in the set two and three.
>
> **[3:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-rt-handles-nominal-variables?u=76281980&t=190)** A little bit of a wordy way to say it, but it means that it's a one.
>
> **[3:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-rt-handles-nominal-variables?u=76281980&t=194)** It's not two. It's not three. It's a one.
>
> **[3:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-rt-handles-nominal-variables?u=76281980&t=196)** So this is where the American cars are.
>
> **[3:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-rt-handles-nominal-variables?u=76281980&t=199)** By the way, it's also, if you look at it quickly and carefully, it's also saying origin is missing.
>
> **[3:25](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-rt-handles-nominal-variables?u=76281980&t=205)** So if origin is unknown, it would also go into this category.
>
> **[3:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-rt-handles-nominal-variables?u=76281980&t=208)** Over here on the right, we have is in the set two or three.
>
> **[3:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-rt-handles-nominal-variables?u=76281980&t=214)** So the labeling is a little bit awkward, but you can see what's happening is the American cars are over here.
>
> **[3:41](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-rt-handles-nominal-variables?u=76281980&t=221)** Then it's not a one, but it's not a one or a three either, so it's a two.
>
> **[3:49](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-rt-handles-nominal-variables?u=76281980&t=229)** And then finally, we have the threes.
>
> **[3:51](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-rt-handles-nominal-variables?u=76281980&t=231)** So what we really have is American, European, Japanese cars as of this time, so it's working.
>
> **[4:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/how-rt-handles-nominal-variables?u=76281980&t=241)** So that's how you address nominal variables by declaring string in your reader node and that affects a downstream change in the KNIME workflow.

> [!info]- Semantic Content
>
> **Env Vars:** knime (6)
> **CLI Commands:** node (4), make (1)
> **Code Keywords:** this. (3), let (1), finally, (1)
> **UI Navigation:** click on (3), go to (2)
> **Versions:** 1.5 (3)
> **Definitions:** is a  (2), means that (1)
> **Cross-References:** go back to (2)
> **Warnings:** warning (1)

#### Ordinal variable handling
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/ordinal-variable-handling?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/ordinal-variable-handling?u=76281980&t=0)** - [Instructor] We're continuing in the same workflow, I've closed the tree, we have to talk about something related.
>
> **[0:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/ordinal-variable-handling?u=76281980&t=7)** We were just talking about nominal variables, now we have to talk about ordinal variables.
>
> **[0:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/ordinal-variable-handling?u=76281980&t=13)** So let's go into the Excel reader and talk about what variables might be considered ordinal.
>
> **[0:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/ordinal-variable-handling?u=76281980&t=22)** So, ordinal variables are really very similar to nominal in many ways, but they're an ordered category.
>
> **[0:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/ordinal-variable-handling?u=76281980&t=30)** So, cylinder is a potential candidate.
>
> **[0:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/ordinal-variable-handling?u=76281980&t=34)** We see that nine has declared cylinder as an integer, but this algorithm makes no distinction between an integer and a scale variable.
>
> **[0:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/ordinal-variable-handling?u=76281980&t=45)** So, if you don't also declare that as a string you're going to get these strange branches forming, like below 4.5 cylinders goes one way and above 4.5 goes another way.
>
> **[1:02](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/ordinal-variable-handling?u=76281980&t=62)** It's really not ideal, so we're going to declare that as string and then also year, you could probably leave this as a number because greater than 1975 or greater than 1985, or greater than 1990 is not really so strange.
>
> **[1:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/ordinal-variable-handling?u=76281980&t=81)** But again, you're going to get those decimal places and you may very well be better off with a string variable, rather you're better off treating it as a category.
>
> **[1:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/ordinal-variable-handling?u=76281980&t=92)** There's another reason, what if trends were to periodically change and what was fashionable in the United States for instance, might be big cars and then small cars were in fashion, and then big cars were in fashion again.
>
> **[1:47](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/ordinal-variable-handling?u=76281980&t=107)** If you treat that as scale, you're going to have greater than less than symbols in the tree that will basically mean before a particular year or after a particular year and that might be one way to see the pattern I was describing.
>
> **[2:04](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/ordinal-variable-handling?u=76281980&t=124)** If you treat it as a categorical variable, you'll have sets of years that may represent those changing trends.
>
> **[2:12](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/ordinal-variable-handling?u=76281980&t=132)** A group of years associated with big cars being popular and a group of years with small cars being popular.
>
> **[2:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/ordinal-variable-handling?u=76281980&t=139)** My advice would be to try it both ways, but importantly this is how you would perform that experiment.
>
> **[2:27](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/ordinal-variable-handling?u=76281980&t=147)** So we'll click on okay, we'll go up here to configure
>
> **[2:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/ordinal-variable-handling?u=76281980&t=156)** and actually we can do a little experiment.
>
> **[2:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/ordinal-variable-handling?u=76281980&t=158)** We can do just cylinder and year, throw them in together and see what happens, but we'll get some illustration of our ordinal variables and it looks like it wants to break on cylinder, I'm going to zoom in a little bit.
>
> **[2:56](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/ordinal-variable-handling?u=76281980&t=176)** In one category we have our four and five cylinder vehicles.
>
> **[3:03](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/ordinal-variable-handling?u=76281980&t=183)** Oh, I apologize.
>
> **[3:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/ordinal-variable-handling?u=76281980&t=185)** That is our not four or five cylinder vehicles and that has a lower miles per gallon of 17.
>
> **[3:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/ordinal-variable-handling?u=76281980&t=195)** And over here is everybody else, quite a bit higher at almost 30 miles per gallon.
>
> **[3:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/ordinal-variable-handling?u=76281980&t=202)** Perhaps if we split, we might see year and sure enough we have a node here with 33 miles per gallon, 79, 81, 80 and 82.
>
> **[3:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/ordinal-variable-handling?u=76281980&t=218)** And you might think, well, those happen to be contiguous but what if they're not?
>
> **[3:42](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/ordinal-variable-handling?u=76281980&t=222)** We've weighed some of those considerations already.
>
> **[3:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/ordinal-variable-handling?u=76281980&t=225)** So again, with cylinder I think the clear choice is treat it as a category.
>
> **[3:51](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/ordinal-variable-handling?u=76281980&t=231)** I think with year you could make a reasonable case to treat it as a category or as a scale variable even though it's clearly an ordinal variable and no decimal places apply.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), throw (1), else, (1)
> **CLI Commands:** node (1), make (1)
> **Versions:** 4.5 (2)
> **Analogies:** similar to (1), for instance (1)
> **UI Navigation:** click on (1)
> **Definitions:** is a  (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### Closer look at a full regression tree
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/closer-look-at-a-full-regression-tree?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/closer-look-at-a-full-regression-tree?u=76281980&t=0)** - [Instructor] Continuing in the same workflow, it's time now to put all the variables in.
>
> **[0:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/closer-look-at-a-full-regression-tree?u=76281980&t=6)** So let's go to configure, and based upon that last example we have just our two ordinal variables here.
>
> **[0:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/closer-look-at-a-full-regression-tree?u=76281980&t=16)** So let's bring everything else over except for name.
>
> **[0:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/closer-look-at-a-full-regression-tree?u=76281980&t=23)** So name will get left out, all the variables will be put in, and we're going to keep this on the default settings.
>
> **[0:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/closer-look-at-a-full-regression-tree?u=76281980&t=30)** No settings have been changed.
>
> **[0:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/closer-look-at-a-full-regression-tree?u=76281980&t=31)** We're going to click on okay.
>
> **[0:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/closer-look-at-a-full-regression-tree?u=76281980&t=34)** Click on okay.
>
> **[0:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/closer-look-at-a-full-regression-tree?u=76281980&t=37)** And let's execute and open views, and now let's really pause to take a closer look at this tree because now that all the variables are in, it's going to be very interesting to see what our top variable is and it's cylinder.
>
> **[0:52](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/closer-look-at-a-full-regression-tree?u=76281980&t=52)** So we have not four or five cylinders over here.
>
> **[0:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/closer-look-at-a-full-regression-tree?u=76281980&t=57)** That's a drop in miles per gallon from 23 to 17, that's going to be our bigger cars.
>
> **[1:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/closer-look-at-a-full-regression-tree?u=76281980&t=66)** If it's not four or five cylinders, it's going to be our six and eight cylinder cars.
>
> **[1:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/closer-look-at-a-full-regression-tree?u=76281980&t=71)** Let's expand that branch of the tree, and actually what we find is the next branch is horsepower.
>
> **[1:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/closer-look-at-a-full-regression-tree?u=76281980&t=77)** So we've got not four or five cylinders combined with the lower horsepower comes up a tiny bit to just shy of 20, but we have not four or five cylinders combined with high horsepower, it drops to one of the lower values we've seen, 14.7, and the tree wants to grow more beneath that.
>
> **[1:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/closer-look-at-a-full-regression-tree?u=76281980&t=104)** It's going to be increasingly hard to see because it's going to have a hard time fitting on the screen, but let's give it a go.
>
> **[1:51](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/closer-look-at-a-full-regression-tree?u=76281980&t=111)** It looks like it wants to branch on year, and then over here, also wants to branch on year.
>
> **[1:58](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/closer-look-at-a-full-regression-tree?u=76281980&t=118)** Since that's difficult to see, we'll close those.
>
> **[2:03](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/closer-look-at-a-full-regression-tree?u=76281980&t=123)** If you were working alone, in other words, if I wasn't on screen, I would zoom out and if possible, put this on a cinema display or you could even print it.
>
> **[2:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/closer-look-at-a-full-regression-tree?u=76281980&t=136)** I've been on a number of projects where we've done things like that.
>
> **[2:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/closer-look-at-a-full-regression-tree?u=76281980&t=140)** So let's come over to this side of the tree.
>
> **[2:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/closer-look-at-a-full-regression-tree?u=76281980&t=143)** Remember the other side is not four or five cylinders.
>
> **[2:27](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/closer-look-at-a-full-regression-tree?u=76281980&t=147)** So this is.
>
> **[2:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/closer-look-at-a-full-regression-tree?u=76281980&t=149)** Let's hover the mouse over and see the tip.
>
> **[2:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/closer-look-at-a-full-regression-tree?u=76281980&t=152)** This is also when cylinder is missing.
>
> **[2:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/closer-look-at-a-full-regression-tree?u=76281980&t=154)** So there's a fairly big jump up to almost 30 miles per gallon.
>
> **[2:39](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/closer-look-at-a-full-regression-tree?u=76281980&t=159)** Let's grow the branch and it wants to grow on weight.
>
> **[2:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/closer-look-at-a-full-regression-tree?u=76281980&t=163)** Notice, this is a noteworthy thing about trees in general.
>
> **[2:46](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/closer-look-at-a-full-regression-tree?u=76281980&t=166)** You don't always see it, but we do witness it here.
>
> **[2:49](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/closer-look-at-a-full-regression-tree?u=76281980&t=169)** Trees can grow asymmetrically and that actually can be very helpful in analysis.
>
> **[2:56](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/closer-look-at-a-full-regression-tree?u=76281980&t=176)** So we have the four or five cylinder cars with the lower weight over 33 miles per gallon, and we have the four or five cylinders with the heavier cars comes down a little bit, just over 26.
>
> **[3:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/closer-look-at-a-full-regression-tree?u=76281980&t=194)** Again, it'll be difficult to see, but let's just see what the next branch is going to be.
>
> **[3:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/closer-look-at-a-full-regression-tree?u=76281980&t=198)** Wants to look at year, actually, just like it did on the far left.
>
> **[3:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/closer-look-at-a-full-regression-tree?u=76281980&t=203)** So it looks like the top variables are cylinder, horsepower, and weight, and year is kind of lurking there in fourth place.
>
> **[3:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/closer-look-at-a-full-regression-tree?u=76281980&t=212)** But those are the top variables, and that's, of course, interesting to see.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10)
> **UI Navigation:** click on (2), go to (1)
> **Definitions:** in other words (1), is a  (1)
> **CLI Commands:** find (1)
> **Versions:** 14.7 (1)
> **Analogies:** just like (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### KNIME's missing data options for regression trees
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/knime-s-missing-data-options-for-regression-trees?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/knime-s-missing-data-options-for-regression-trees?u=76281980&t=0)** - Okay. We have our complete tree.
>
> **[0:02](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/knime-s-missing-data-options-for-regression-trees?u=76281980&t=2)** Let's talk about one of the settings.
>
> **[0:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/knime-s-missing-data-options-for-regression-trees?u=76281980&t=5)** Let's go back to our workflow into the simple regression tree learner and pause for a moment to talk about missing data handling.
>
> **[0:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/knime-s-missing-data-options-for-regression-trees?u=76281980&t=17)** XG boost didn't exist when regression tree was initially developed.
>
> **[0:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/knime-s-missing-data-options-for-regression-trees?u=76281980&t=22)** So, XG boost works pretty well for missing data handling.
>
> **[0:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/knime-s-missing-data-options-for-regression-trees?u=76281980&t=26)** You can see it referred to down at the bottom here that's nine's default and there's a little bit about it in the help file.
>
> **[0:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/knime-s-missing-data-options-for-regression-trees?u=76281980&t=35)** But what it's using is it's using XG boost which is a ensemble technique.
>
> **[0:41](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/knime-s-missing-data-options-for-regression-trees?u=76281980&t=41)** So, it's related to decision trees, but it's more complex than the decision tree algorithms that we're talking about in this course.
>
> **[0:48](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/knime-s-missing-data-options-for-regression-trees?u=76281980&t=48)** And it's predicting whether a case should go down the left branch or the right branch Because remember when we're doing cart we're doing binary splits.
>
> **[0:58](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/knime-s-missing-data-options-for-regression-trees?u=76281980&t=58)** You can actually turn the binary splits off that would make it less like cart and you can continue to proceed.
>
> **[1:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/knime-s-missing-data-options-for-regression-trees?u=76281980&t=67)** If you use XG boost only when you have binary splits do you have another choice, surrogate.
>
> **[1:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/knime-s-missing-data-options-for-regression-trees?u=76281980&t=76)** And as we know this is part of the classification tree, algorithm.
>
> **[1:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/knime-s-missing-data-options-for-regression-trees?u=76281980&t=82)** Well, it also applies to regression tree and it's supported here in the simple regression tree learner.
>
> **[1:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/knime-s-missing-data-options-for-regression-trees?u=76281980&t=89)** So let's click on, okay.
>
> **[1:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/knime-s-missing-data-options-for-regression-trees?u=76281980&t=96)** Go back to execute and open views.
>
> **[1:46](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/knime-s-missing-data-options-for-regression-trees?u=76281980&t=106)** Come in a little bit closer and notice you can actually see surrogate there.
>
> **[1:51](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/knime-s-missing-data-options-for-regression-trees?u=76281980&t=111)** So, let's remind ourselves of how surrogate works.
>
> **[1:56](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/knime-s-missing-data-options-for-regression-trees?u=76281980&t=116)** If a particular variable is missing in, this case cylinder it will look for variables that are correlated with cylinder and determine whether or not a case should go to the left or the right, not using cylinder because it can't cylinder is missing, but rather using those variables that are correlated with cylinder.
>
> **[2:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/knime-s-missing-data-options-for-regression-trees?u=76281980&t=142)** So in this case, we end up with an outcome that's similar to what we saw with the other setting but if we hover the mouse we can see there's a lot of information there but we're using displacement, weight, horsepower as surrogates when cylinder is not known I love the cart algorithm.
>
> **[2:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/knime-s-missing-data-options-for-regression-trees?u=76281980&t=164)** So I'm generally inclined to go with settings that keep it consistent with cart.
>
> **[2:50](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/knime-s-missing-data-options-for-regression-trees?u=76281980&t=170)** However, in this instance, I think nine has done a good job with XG boost, missing data handling.
>
> **[2:59](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/knime-s-missing-data-options-for-regression-trees?u=76281980&t=179)** So generally speaking I think I'd be inclined to go with XG boost but you can certainly experiment with both options and see which one produces a more accurate result.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), continue (1), case, (1)
> **Cross-References:** go back to (2)
> **CLI Commands:** make (1)
> **UI Navigation:** click on (1)
> **Definitions:** is a  (1)
> **Speakers:** - okay (1)

#### Line plot
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/line-plot?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/line-plot?u=76281980&t=0)** - Continuing in the same workflow, let's take a look at this column filter and line plot.
>
> **[0:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/line-plot?u=76281980&t=7)** But first, it's time to see what's different about this node.
>
> **[0:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/line-plot?u=76281980&t=13)** So we're going to execute the predictor and notice that it's got, you know, two connections coming in, as we've seen with predictors.
>
> **[0:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/line-plot?u=76281980&t=20)** So, if we go to predicted output and maximize that we get miles per gallon and, I'm sure you can anticipate this, we get the predicted miles per gallon and it's doing pretty well.
>
> **[0:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/line-plot?u=76281980&t=34)** 18, 18, 14, 14, 24, 27.
>
> **[0:39](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/line-plot?u=76281980&t=39)** So it had a little bit of a tough time with the Toyota Corona mark two, but otherwise pretty good.
>
> **[0:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/line-plot?u=76281980&t=45)** Oh, here it's off by a little bit as well.
>
> **[0:47](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/line-plot?u=76281980&t=47)** You don't expect the same exact value, but it's doing pretty well.
>
> **[0:52](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/line-plot?u=76281980&t=52)** So we're going to close this and we're going to leverage that because we're going to go to the column filter.
>
> **[1:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/line-plot?u=76281980&t=60)** Remember, this is from the pre-built example.
>
> **[1:03](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/line-plot?u=76281980&t=63)** So it's got variables here that don't exist because this had another data set hooked up to it before.
>
> **[1:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/line-plot?u=76281980&t=69)** So we're going to take all of these out of here and do just miles per gallon.
>
> **[1:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/line-plot?u=76281980&t=77)** Move it over and prediction, move it over, click on okay.
>
> **[1:24](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/line-plot?u=76281980&t=84)** And let's do our line plot.
>
> **[1:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/line-plot?u=76281980&t=86)** Execute in open views.
>
> **[1:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/line-plot?u=76281980&t=91)** So what this will help you do is get a little bit of an idea of where you're seeing the larger errors.
>
> **[1:40](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/line-plot?u=76281980&t=100)** What's somewhat problematic with this is that it's kind of arbitrary what the rows are.
>
> **[1:49](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/line-plot?u=76281980&t=109)** So if you wanted to take the time to introduce a sort, it might make it a little bit easier to read this.
>
> **[1:59](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/line-plot?u=76281980&t=119)** But clearly we can see that we can see the gaps between the prediction and the actual.
>
> **[2:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/line-plot?u=76281980&t=126)** I'm looking at one here.
>
> **[2:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/line-plot?u=76281980&t=128)** I'm looking at another one here.
>
> **[2:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/line-plot?u=76281980&t=131)** But if we ordered this in a particular way, it would be more helpful.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), this, (1), this. (1)
> **UI Navigation:** go to (2), click on (1)
> **CLI Commands:** node (1), make (1)
> **Speakers:** - continuing (1)

#### Accuracy
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/accuracy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/accuracy?u=76281980&t=0)** - [Instructor] Okay, it's time to get an assessment of how accurate our regression tree is.
>
> **[0:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/accuracy?u=76281980&t=8)** To do that, we have to be downstream of the predictor because we have to involve cases that were predicted but that were not fed to the learner.
>
> **[0:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/accuracy?u=76281980&t=20)** In other words, in terms of partitioning, we need both our training data, as well as our 20% test, being fed to the score so that we can see how good a job we did on what is sometimes called the unseen data.
>
> **[0:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/accuracy?u=76281980&t=36)** So let's go in here and configure, and we're going to need to fix this here.
>
> **[0:40](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/accuracy?u=76281980&t=40)** We want our predicted column to be Prediction mpg, but we want our reference column to be miles per gallon.
>
> **[0:47](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/accuracy?u=76281980&t=47)** And we're going to click on OK and Execute an Open Views.
>
> **[0:53](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/accuracy?u=76281980&t=53)** Now, I know that's a bit small, probably, but we can see that we have our R squared, and we also have our root mean square error.
>
> **[1:04](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/accuracy?u=76281980&t=64)** If you're doing regression tree, you're probably also trying regression itself, so I would probably focus on the R squared.
>
> **[1:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/accuracy?u=76281980&t=76)** Where you see root mean square error used more often is in time series analysis.
>
> **[1:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/accuracy?u=76281980&t=82)** So I would focus on the R squared.
>
> **[1:25](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/accuracy?u=76281980&t=85)** So what would we say about just the 73?
>
> **[1:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/accuracy?u=76281980&t=88)** Well, as a refresher, that 73.1% of variance explained, and it's actually pretty high, but two things to say about that.
>
> **[1:40](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/accuracy?u=76281980&t=100)** What would be more important would be to compare this performance to performance you were getting in other options like multiple linear regression.
>
> **[1:48](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/accuracy?u=76281980&t=108)** And then the other thing to say about the R squared here is we're measuring something that's almost mechanical engineering in nature, so we would expect it to be quite high.
>
> **[1:59](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/accuracy?u=76281980&t=119)** If we were trying to figure out something about purchasing behavior or insurance fraud, an R squared of 73% would be extremely high, but we would expect it to be high in this case because of the nature of the data.
>
> **[2:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/accuracy?u=76281980&t=138)** Let's go ahead and close this.
>
> **[2:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/accuracy?u=76281980&t=141)** So there you have it.
>
> **[2:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/accuracy?u=76281980&t=142)** That's a pretty thorough orientation to the regression tree learner and the regression tree algorithm in KNIME.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), this. (1)
> **Env Vars:** knime (1)
> **Versions:** 73.1 (1)
> **UI Navigation:** click on (1)
> **Definitions:** in other words (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)


### 6. Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/next-steps?u=76281980&t=0)** - [Instructor] So what's a good next step on your journey?
>
> **[0:03](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/next-steps?u=76281980&t=3)** First, I hope that you'll apply what you've learned as soon as you can, using a data set that you're familiar with.
>
> **[0:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/next-steps?u=76281980&t=10)** Just dive right in and give it a try.
>
> **[0:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/next-steps?u=76281980&t=13)** Then I think there are three paths you could take.
>
> **[0:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/next-steps?u=76281980&t=17)** You could develop more skill in KNIME.
>
> **[0:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/next-steps?u=76281980&t=19)** It's a great platform with a great user community.
>
> **[0:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/next-steps?u=76281980&t=22)** There's a number of KNIME-based courses in the library or you could do more advanced work with trees.
>
> **[0:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/next-steps?u=76281980&t=29)** For instance, I've dedicated an entire course to ensemble techniques, including random force.
>
> **[0:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/next-steps?u=76281980&t=35)** Finally, you could explore alternative algorithms that also do classification.
>
> **[0:41](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/next-steps?u=76281980&t=41)** There's a course that explores about a dozen of them.
>
> **[0:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/next-steps?u=76281980&t=44)** The Q&A feature of this and other courses is really helpful.
>
> **[0:47](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/next-steps?u=76281980&t=47)** Make sure that you give that a try.
>
> **[0:50](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/next-steps?u=76281980&t=50)** So I hope that you'll have fun with more learning and that you'll stay in touch by following me on LinkedIn.
>
> **[0:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-decision-trees-with-knime/next-steps?u=76281980&t=57)** Let me know how it's going.

> [!info]- Semantic Content
>
> **Code Keywords:** try. (2), finally, (1), let (1)
> **Env Vars:** knime (2)
> **CLI Commands:** make (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Keith McCormick]]

## Resources

- Exercise files available

## Skills Covered

- Knime
- Machine Learning
- Artificial Intelligence (AI)
- Decision Trees

## Path Context

### In [[Advance Your Skills as a Machine Learning Specialist]]
← [[Machine Learning and AI Foundations- Producing Explainable AI (XAI) and Interpretable Machine Learning Solutions]] | **6 of 9** | [[Machine Learning and AI Foundations- Causal Inference and Modeling]] →

### In [[Learning Codeless Machine Learning with KNIME]]
← [[Introduction To Machine Learning With Knime]] | **2 of 5** | [[Data Science Foundations- Data Assessment for Predictive Modeling]] →

## Appears In

- [[Advance Your Skills as a Machine Learning Specialist]]
- [[Learning Codeless Machine Learning with KNIME]]

## Related Courses

_Courses sharing skills:_

- [[Machine Learning and AI Foundations- Advanced Decision Trees with KNIME]] — Artificial Intelligence (AI), Machine Learning, Decision Trees
- [[Machine Learning and AI- Advanced Decision Trees with SPSS]] — Artificial Intelligence (AI), Machine Learning, Decision Trees
- [[Machine Learning and AI Foundations- Decision Trees with SPSS]] — Artificial Intelligence (AI), Machine Learning, Decision Trees
- [[Introduction To Machine Learning With Knime]] — Artificial Intelligence (AI), Machine Learning, Knime
- [[Machine Learning with Python- Decision Trees]] — Artificial Intelligence (AI), Machine Learning, Decision Trees

---

[↑ Back to top](#)