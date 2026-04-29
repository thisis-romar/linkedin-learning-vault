---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: machine-learning-and-ai-foundations-advanced-decision-trees-with-knime
url: "https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime"
duration_minutes: 98
duration: 1h 38m
level: Advanced
updated: 7/22/2025
learners: 104585
skills:
  - Knime
  - Machine Learning
  - Artificial Intelligence (AI)
  - Decision Trees
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQFnMHfZVRGQYg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1668018019156?e=2147483647&amp;v=beta&amp;t=HxliPaHM2yHLhRyVHfRpgFVfpvAWUrcKz2UMggHrIRM"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Learning Codeless Machine Learning with KNIME]]'
prev_courses:
  - '[[Machine Learning and AI Foundations- Producing Explainable AI (XAI) and Interpretable Machine Learning Solutions]]'
path_nav: '[{"path":"Learning Codeless Machine Learning with KNIME","position":5,"total":5,"prev":"Machine Learning and AI Foundations- Producing Explainable AI (XAI) and Interpretable Machine Learning Solutions","next":null}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - topic/data-science
  - topic/software-development
  - skill/knime
  - skill/machine-learning
  - skill/artificial-intelligence-ai
  - skill/decision-trees
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Machine%20Learning%20and%20AI%20Foundations-%20Advanced%20Decision%20Trees%20with%20KNIME.md)

![Machine Learning and AI Foundations: Advanced Decision Trees with KNIME](https://media.licdn.com/dms/image/v2/C560DAQFnMHfZVRGQYg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1668018019156?e=2147483647&amp;v=beta&amp;t=HxliPaHM2yHLhRyVHfRpgFVfpvAWUrcKz2UMggHrIRM)

# Machine Learning and AI Foundations: Advanced Decision Trees with KNIME

> Every year, it seems, there is a new hot trend in data science. One of the hottest predictive analytics algorithms this year is gradient-boosted trees. One cannot hope to understand why it is popular and successful if one doesn’t understand the basics of decision trees. Specific tree algorithms have risen and fallen in popularity, but the core concepts have been fundamental to the discipline for a

> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime) | 1h 38m | Advanced | 105K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - Advanced decision trees
  - What you should know
  - Using the exercise files
- [**1. Exploring the Many Decision Tree Algorithms**](#1-exploring-the-many-decision-tree-algorithms) (3 videos)
  - Why are trees considered greedy algorithms?
  - Why are there so many algorithms?
  - Five low node or no code options in KNIME
- [**2. Using Extensions**](#2-using-extensions) (3 videos)
  - Installing extensions
  - WEKA LMT demonstration
  - Interpreting the LMT results
- [**3. What Is Rule Induction?**](#3-what-is-rule-induction) (3 videos)
  - Comparing trees and rule induction
  - Rule induction demo
  - Interpreting the rules
- [**4. Low Code Python Options in KNIME**](#4-low-code-python-options-in-knime) (4 videos)
  - Low code options in KNIME
  - Python script node demo
  - CHAID demo in KNIME
  - Advanced code options in KNIME (optimal sparse trees)
- [**5. Ensembles and Random Forests**](#5-ensembles-and-random-forests) (3 videos)
  - Introducing random forest
  - Random forests demo
  - Comparing two models
- [**6. Advanced Tips and Tricks**](#6-advanced-tips-and-tricks) (3 videos)
  - Data reduction with random forests
  - The XAI view node
  - Deployment
- [**Conclusion**](#conclusion) (1 videos)
  - Final thoughts and recommendations

### Introduction

> [↑ Back to Table of Contents](#table-of-contents)

#### Advanced decision trees
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/advanced-decision-trees?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/advanced-decision-trees?u=76281980&t=0)** - [Keith] We're about to continue the journey that began with the decision trees with KNIME course.
>
> **[0:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/advanced-decision-trees?u=76281980&t=7)** We've already learned about the two most popular and influential decision tree algorithms, but there are many more options than just those two.
>
> **[0:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/advanced-decision-trees?u=76281980&t=19)** Along the way, we'll learn more about KNIME itself.
>
> **[0:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/advanced-decision-trees?u=76281980&t=23)** As a no code option, KNIME is very easy to learn, but there are also low code options within KNIME that open the door to many more possibilities.
>
> **[0:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/advanced-decision-trees?u=76281980&t=38)** If it's possible with Python, it's also possible right in KNIME and we'll be seeing how.
>
> **[0:46](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/advanced-decision-trees?u=76281980&t=46)** So join me to be a more sophisticated user of KNIME and how that allows for a greater variety of algorithms, including, of course, more decision tree and rule induction algorithms using techniques like separate and conquer and random forest.
>
> **[1:03](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/advanced-decision-trees?u=76281980&t=63)** We have a lot to cover, so let's get started.

> [!info]- Semantic Content
>
> **Env Vars:** knime (6)
> **Code Keywords:** continue (1), let (1)
> **CLI Commands:** python (1)
> **UI Navigation:** open the (1)
> **Speakers:** - [keith] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/what-you-should-know?u=76281980&t=0)** - [Instructor] The first course covered three major themes.
>
> **[0:03](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/what-you-should-know?u=76281980&t=3)** Certainly watching the first course is the easiest way to get up to speed on these topics but on the chance that you are comfortable with all three of them already, here's what we covered.
>
> **[0:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/what-you-should-know?u=76281980&t=15)** First, the theory behind decision trees including advantages, potential weaknesses and why they're so important to machine learning.
>
> **[0:25](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/what-you-should-know?u=76281980&t=25)** Then a thorough introduction to KNIME's decision tree learner node, and all of the functions that would typically be used along with it in KNIME, including partitioning, balancing and scoring.
>
> **[0:42](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/what-you-should-know?u=76281980&t=42)** Finally, we covered the theory of both CART and C4.5 and how to adjust the settings in the decision tree learner to mimic these two very influential algorithms.
>
> **[0:58](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/what-you-should-know?u=76281980&t=58)** So if you have a thorough understanding of all three of these topics, you can proceed directly with this course.
>
> **[1:04](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/what-you-should-know?u=76281980&t=64)** But if you aren't sure, please consider taking the first course as it has been specifically designed to go before this one.

> [!info]- Semantic Content
>
> **Env Vars:** knime (2), cart (1)
> **Cross-References:** we covered (2)
> **CLI Commands:** node (1)
> **Code Keywords:** finally, (1)
> **Speakers:** - [instructor] (1)

#### Using the exercise files
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/using-the-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/using-the-exercise-files?u=76281980&t=0)** - [Instructor] I want to make a couple of very quick comments about how to use the practice files.
>
> **[0:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/using-the-exercise-files?u=76281980&t=6)** You're looking at a Nine Analytics platform workflow.
>
> **[0:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/using-the-exercise-files?u=76281980&t=11)** Everything you need to know about Nine and the practice files will be explained in the course, but here's a couple of reminders.
>
> **[0:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/using-the-exercise-files?u=76281980&t=21)** First, in Nine, you won't be opening the workflow, you'll be importing it.
>
> **[0:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/using-the-exercise-files?u=76281980&t=29)** So you're going to be using this menu here.
>
> **[0:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/using-the-exercise-files?u=76281980&t=32)** When you do so, it's going to appear in this local workspace area, and that's how you'll access it.
>
> **[0:40](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/using-the-exercise-files?u=76281980&t=40)** The next thing I want to remind you about is data.
>
> **[0:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/using-the-exercise-files?u=76281980&t=43)** You are going to receive a workflow for each chapter, Chapter 2, Chapter 3, and Chapter 4.
>
> **[0:50](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/using-the-exercise-files?u=76281980&t=50)** Chapter 1 won't have any workflows.
>
> **[0:53](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/using-the-exercise-files?u=76281980&t=53)** And you're also going to get the supporting data.
>
> **[0:55](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/using-the-exercise-files?u=76281980&t=55)** However, the source node, I'm going to go ahead and open this.
>
> **[1:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/using-the-exercise-files?u=76281980&t=61)** The source node is going to be looking for the file on my machine, not on yours.
>
> **[1:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/using-the-exercise-files?u=76281980&t=69)** So you're going to have to use the Browse button to make sure that you've directed it to where on your machine you've put the file.
>
> **[1:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/using-the-exercise-files?u=76281980&t=79)** And there you have it.
>
> **[1:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/using-the-exercise-files?u=76281980&t=80)** That's all you need to know.
>
> **[1:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/using-the-exercise-files?u=76281980&t=81)** And as you move along through the course, you'll be told what files you need and you'll also be told everything you need to know about Nine.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2), node (2)
> **Code Keywords:** this. (1)
> **Speakers:** - [instructor] (1)


### 1. Exploring the Many Decision Tree Algorithms

> [↑ Back to Table of Contents](#table-of-contents)

#### Why are trees considered greedy algorithms?
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/why-are-trees-considered-greedy-algorithms?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/why-are-trees-considered-greedy-algorithms?u=76281980&t=0)** - [Instructor] In the previous course, we discussed in general the advantages and disadvantages of decision tree algorithms.
>
> **[0:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/why-are-trees-considered-greedy-algorithms?u=76281980&t=8)** We won't revisit that whole list now, except one particular disadvantage or weakness of trees, better understanding that will help us understand the goals of this course and that potential weakness is that decision tree algorithms are greedy.
>
> **[0:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/why-are-trees-considered-greedy-algorithms?u=76281980&t=30)** So, what does that mean in this context?
>
> **[0:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/why-are-trees-considered-greedy-algorithms?u=76281980&t=33)** What does it mean for an algorithm to be greedy?
>
> **[0:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/why-are-trees-considered-greedy-algorithms?u=76281980&t=37)** Well, it's more like the branches are greedy.
>
> **[0:41](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/why-are-trees-considered-greedy-algorithms?u=76281980&t=41)** For instance, at the top branch, the tree algorithm is trying to explain as much variance as possible.
>
> **[0:50](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/why-are-trees-considered-greedy-algorithms?u=76281980&t=50)** You could say, somewhat colorfully, that it wants to keep the maximum variance for itself, but the tree algorithm is unable to anticipate how that decision at that one branch will affect all of the branches that will eventually form below.
>
> **[1:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/why-are-trees-considered-greedy-algorithms?u=76281980&t=71)** Those follow-on implications are not considered in the calculations at the current branch.
>
> **[1:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/why-are-trees-considered-greedy-algorithms?u=76281980&t=80)** This phrase, "greedy algorithm," is common in machine learning and that's why I'm trying to explain it in those terms, but there's another way of thinking about it.
>
> **[1:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/why-are-trees-considered-greedy-algorithms?u=76281980&t=91)** It's as if the tree algorithm is myopic.
>
> **[1:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/why-are-trees-considered-greedy-algorithms?u=76281980&t=95)** It can see close, but not far.
>
> **[1:39](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/why-are-trees-considered-greedy-algorithms?u=76281980&t=99)** It can see at the current branch, but it can't see what might happen in the branches below.
>
> **[1:46](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/why-are-trees-considered-greedy-algorithms?u=76281980&t=106)** If you, like me, find this myopia metaphor perhaps a bit more helpful than the greediness one, then you could say that the tree algorithm can't see the big picture, but why live with this limitation?
>
> **[2:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/why-are-trees-considered-greedy-algorithms?u=76281980&t=120)** Why not just fix it?
>
> **[2:02](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/why-are-trees-considered-greedy-algorithms?u=76281980&t=122)** Why not just come up with a new algorithm?
>
> **[2:04](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/why-are-trees-considered-greedy-algorithms?u=76281980&t=124)** Well, the new ideal solution, a true big picture approach, would be to calculate all possible trees.
>
> **[2:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/why-are-trees-considered-greedy-algorithms?u=76281980&t=136)** Years ago, when tree algorithms were first developed, this would have been absolutely impossible.
>
> **[2:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/why-are-trees-considered-greedy-algorithms?u=76281980&t=142)** It's not scalable, but even on contemporary machines, a brute force approach, searching the problem space thoroughly, would be a big challenge.
>
> **[2:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/why-are-trees-considered-greedy-algorithms?u=76281980&t=152)** In this sense, it's very much like chess.
>
> **[2:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/why-are-trees-considered-greedy-algorithms?u=76281980&t=155)** All possible chess moves is too big a calculation to tackle through brute force.
>
> **[2:42](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/why-are-trees-considered-greedy-algorithms?u=76281980&t=162)** However, everyone, even if you don't play chess, can recognize that playing just one move at a time is risky.
>
> **[2:52](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/why-are-trees-considered-greedy-algorithms?u=76281980&t=172)** Well, decision trees very much play one move at a time and that's perhaps the best way to to think about it.
>
> **[3:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/why-are-trees-considered-greedy-algorithms?u=76281980&t=180)** So, developers of tree algorithms have tried to come up with all kinds of different and creative ways to make the best possible decisions at each branch.
>
> **[3:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/why-are-trees-considered-greedy-algorithms?u=76281980&t=191)** In this course, we'll be going beyond the two most famous algorithms, CART and C4.5, which we discussed in the first course, and learning about some of the other approaches within the decision tree and rule induction paradigm.

> [!info]- Semantic Content
>
> **Analogies:** picture (2), for instance (1)
> **CLI Commands:** find (1), make (1)
> **Cross-References:** we discussed (2)
> **Env Vars:** cart (1)
> **Speakers:** - [instructor] (1)

#### Why are there so many algorithms?
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/why-are-there-so-many-algorithms?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/why-are-there-so-many-algorithms?u=76281980&t=0)** - [Instructor] We're going to see at least briefly, a half dozen more algorithms in this course.
>
> **[0:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/why-are-there-so-many-algorithms?u=76281980&t=6)** All variations on the decision tree or rule induction theme, and that's just a small sampling of the number that exists.
>
> **[0:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/why-are-there-so-many-algorithms?u=76281980&t=14)** They're all an attempt to overcome the issue that we've just discussed, that a brute force search is not realistic, so we have to be clever about how we go about finding patterns in the data.
>
> **[0:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/why-are-there-so-many-algorithms?u=76281980&t=26)** Let's discuss just a handful of ways that these algorithms can differ.
>
> **[0:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/why-are-there-so-many-algorithms?u=76281980&t=30)** First, how the splits are chosen.
>
> **[0:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/why-are-there-so-many-algorithms?u=76281980&t=33)** We've encountered Gini and Information Gain already, but we're going to find that it's also possible to use statistical significance.
>
> **[0:42](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/why-are-there-so-many-algorithms?u=76281980&t=42)** The SHADE algorithm, for instance uses the K square statistic, both for split formation and also to decide when the tree should stop growing.
>
> **[0:53](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/why-are-there-so-many-algorithms?u=76281980&t=53)** Some algorithms have a completely different approach at the leaf node.
>
> **[0:58](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/why-are-there-so-many-algorithms?u=76281980&t=58)** Rather than simply choosing the mode for classification purposes, they can have a binary logistic formula or linear logistic regression formula that's designed to specifically fit the segment identified at that leaf node.
>
> **[1:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/why-are-there-so-many-algorithms?u=76281980&t=78)** And then Ensembles use a completely different approach where there's actually multiple trees that are aggregated together.
>
> **[1:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/why-are-there-so-many-algorithms?u=76281980&t=86)** And this is just the beginning.
>
> **[1:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/why-are-there-so-many-algorithms?u=76281980&t=88)** So as we go through the course, try not to think of these algorithms as a definitive list, but rather as examples of how varied tree algorithms can be.

> [!info]- Semantic Content
>
> **CLI Commands:** node (2), find (1)
> **Code Keywords:** let (1)
> **Env Vars:** shade (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### Five low node or no code options in KNIME
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/five-low-node-or-no-code-options-in-knime?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/five-low-node-or-no-code-options-in-knime?u=76281980&t=0)** - [Instructor] Some folks assume that if you've chosen a no code option like Nime, that you've essentially ruled out a full coding option like Python, for instance.
>
> **[0:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/five-low-node-or-no-code-options-in-knime?u=76281980&t=14)** If this were true, it would pose a potential limitation because as we've seen there are numerous decision tree algorithms each with different strengths and weaknesses and the decision tree learner node, which we used in the last course, mimics just two of those algorithms.
>
> **[0:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/five-low-node-or-no-code-options-in-knime?u=76281980&t=36)** Thankfully, it's simply not true that we have to choose between no code and full code.
>
> **[0:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/five-low-node-or-no-code-options-in-knime?u=76281980&t=45)** That's because there's a feature of no code low code tools that not everybody takes advantage of.
>
> **[0:52](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/five-low-node-or-no-code-options-in-knime?u=76281980&t=52)** Virtually all of them, including Nime, are compatible with popular machine learning languages like Python and R so that your team members that are coders can collaborate with your team members that are not.
>
> **[1:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/five-low-node-or-no-code-options-in-knime?u=76281980&t=67)** More than that, the coders on your team can expand the capabilities of Nime by drawing from existing functionality outside of Nime and they can even completely customize options with full code when necessary.
>
> **[1:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/five-low-node-or-no-code-options-in-knime?u=76281980&t=86)** So how does it all work?
>
> **[1:27](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/five-low-node-or-no-code-options-in-knime?u=76281980&t=87)** Well, at the entry level, you don't need any code at all.
>
> **[1:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/five-low-node-or-no-code-options-in-knime?u=76281980&t=91)** Simply use the nodes that are available when you do a standard install of Nime.
>
> **[1:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/five-low-node-or-no-code-options-in-knime?u=76281980&t=97)** Everything we learned in the previous course fell into this category.
>
> **[1:42](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/five-low-node-or-no-code-options-in-knime?u=76281980&t=102)** Next, you can install what are called extensions.
>
> **[1:46](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/five-low-node-or-no-code-options-in-knime?u=76281980&t=106)** We'll be using this feature in the next section of this course.
>
> **[1:51](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/five-low-node-or-no-code-options-in-knime?u=76281980&t=111)** You don't need any coding knowledge to do this.
>
> **[1:54](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/five-low-node-or-no-code-options-in-knime?u=76281980&t=114)** You simply download Nime nodes that members of the Nime community have contributed.
>
> **[2:02](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/five-low-node-or-no-code-options-in-knime?u=76281980&t=122)** Next, you can use a Python script node to access popular Python libraries with as few as a couple dozen lines of code.
>
> **[2:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/five-low-node-or-no-code-options-in-knime?u=76281980&t=134)** A bit more elaborate option is what is called a Conda environment propagation node.
>
> **[2:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/five-low-node-or-no-code-options-in-knime?u=76281980&t=142)** Here Conda is a variant of Anaconda and we'll have more to say about that later.
>
> **[2:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/five-low-node-or-no-code-options-in-knime?u=76281980&t=149)** This requires installing and setting up Python on your machine and will require a team member that is comfortable with coding.
>
> **[2:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/five-low-node-or-no-code-options-in-knime?u=76281980&t=157)** We'll see a bit more about how this all works later on in the course.
>
> **[2:42](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/five-low-node-or-no-code-options-in-knime?u=76281980&t=162)** Finally, you can use Python to write a customized solution and produce your own extension.
>
> **[2:51](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/five-low-node-or-no-code-options-in-knime?u=76281980&t=171)** We'll say a little bit more about this later, but we won't be doing a full demonstration of this most elaborate option.
>
> **[3:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/five-low-node-or-no-code-options-in-knime?u=76281980&t=180)** So how should this fit into your team's strategy regarding decision trees and collaboration?
>
> **[3:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/five-low-node-or-no-code-options-in-knime?u=76281980&t=189)** The overall advice is this.
>
> **[3:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/five-low-node-or-no-code-options-in-knime?u=76281980&t=191)** Don't feel limited to the standard download in a tool like Nime. If you find the decision tree algorithm that you think may be a good fit for your project, explore your options. Think of it also as a team effort.
>
> **[3:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/five-low-node-or-no-code-options-in-knime?u=76281980&t=208)** Coders and non coders can use a no code low code option as a platform for collaboration.
>
> **[3:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/five-low-node-or-no-code-options-in-knime?u=76281980&t=218)** And even if the entire team is composed of coders, you may find that you can more rapidly prototype using a tool like this.
>
> **[3:47](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/five-low-node-or-no-code-options-in-knime?u=76281980&t=227)** And also, the results will be in a form that management can more easily follow.
>
> **[3:54](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/five-low-node-or-no-code-options-in-knime?u=76281980&t=234)** Visual programming after all, is nearly self-documenting, even for non-users.
>
> **[4:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/five-low-node-or-no-code-options-in-knime?u=76281980&t=240)** And if you add a few annotations, it makes it even easier to read.

> [!info]- Semantic Content
>
> **CLI Commands:** python (6), node (3), find (2)
> **Code Keywords:** this. (3), require (1), finally, (1), self (1)
> **Definitions:** is called (1), is a  (1)
> **Prerequisites:** install (2)
> **Cross-References:** in the last (1)
> **Tools:** anaconda (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)


### 2. Using Extensions

> [↑ Back to Table of Contents](#table-of-contents)

#### Installing extensions
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/installing-extensions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/installing-extensions?u=76281980&t=0)** - Okay, here we are in Knime.
>
> **[0:02](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/installing-extensions?u=76281980&t=2)** And this is what Knime looks like when you first launch it.
>
> **[0:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/installing-extensions?u=76281980&t=6)** I haven't opened any workflows or started working at all.
>
> **[0:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/installing-extensions?u=76281980&t=9)** This is a clean slate.
>
> **[0:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/installing-extensions?u=76281980&t=11)** Okay, so the very first thing we're going to do is use a extension to build a decision tree.
>
> **[0:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/installing-extensions?u=76281980&t=20)** The name of the algorithm happens to be lmt so I'm going to go down to the node repository and type lmt.
>
> **[0:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/installing-extensions?u=76281980&t=35)** Okay. It has found this node more recent version here as lmt 3.7.
>
> **[0:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/installing-extensions?u=76281980&t=43)** It has found this on my implementation of Knime.
>
> **[0:49](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/installing-extensions?u=76281980&t=49)** However, there is a very good chance that your version of Knime doesn't have this node.
>
> **[0:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/installing-extensions?u=76281980&t=57)** And the reason is that it's not a default download, it is an extension.
>
> **[1:04](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/installing-extensions?u=76281980&t=64)** So I want to show you how to do that.
>
> **[1:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/installing-extensions?u=76281980&t=68)** I'll get rid of this for now so that we can search again in a moment.
>
> **[1:12](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/installing-extensions?u=76281980&t=72)** I'm going to go up to Knime, file, install Knime extensions.
>
> **[1:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/installing-extensions?u=76281980&t=80)** Okay? I'm going to maximize this so that you can see it clearly.
>
> **[1:24](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/installing-extensions?u=76281980&t=84)** We could go searching around for the extension that we need but I have found these extensions to be extremely helpful.
>
> **[1:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/installing-extensions?u=76281980&t=93)** I urge you just to install all of them.
>
> **[1:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/installing-extensions?u=76281980&t=95)** So I'm going to click on select all but my version of Knime and my extensions are up to date so it's not inviting me to click on finish because I already have all of these.
>
> **[1:49](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/installing-extensions?u=76281980&t=109)** You're going to want to click on finish.
>
> **[1:51](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/installing-extensions?u=76281980&t=111)** I'm going to click on cancel.
>
> **[1:53](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/installing-extensions?u=76281980&t=113)** Okay. So we go back in here, and now when you type lmt again you'll be able to find this and this is the node that we need.
>
> **[2:04](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/installing-extensions?u=76281980&t=124)** But when we do the demonstration in the next video, I'm going to be providing a completed workflow so we don't have to start with an empty workflow and drag this into place.
>
> **[2:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/installing-extensions?u=76281980&t=139)** I've already assembled all the pieces that you'll need.

> [!info]- Semantic Content
>
> **CLI Commands:** node (4), find (1)
> **UI Navigation:** click on (3)
> **Definitions:** is a  (2), is an  (1)
> **Prerequisites:** install (2), you'll need (1)
> **Versions:** 3.7 (1)
> **Cross-References:** in the next (1)
> **Speakers:** - okay (1)

#### WEKA LMT demonstration
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/weka-lmt-demonstration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/weka-lmt-demonstration?u=76281980&t=0)** - [Instructor] Okay, we're right back where we left off.
>
> **[0:03](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/weka-lmt-demonstration?u=76281980&t=3)** So you have two options for all of our examples actually.
>
> **[0:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/weka-lmt-demonstration?u=76281980&t=7)** You're going to have two options for where to get the workflow.
>
> **[0:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/weka-lmt-demonstration?u=76281980&t=10)** You can either use the Knime hub or you can go to the examples folder, download all the workflows, and import them into Knime.
>
> **[0:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/weka-lmt-demonstration?u=76281980&t=22)** I'm going to go ahead and show you using the Knime Hub but you're welcome to do it either way.
>
> **[0:27](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/weka-lmt-demonstration?u=76281980&t=27)** If you're going to use the Knime hub, you know you have to sign up and so on, but it is a convenient way to access the workflows.
>
> **[0:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/weka-lmt-demonstration?u=76281980&t=34)** You can do it either way.
>
> **[0:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/weka-lmt-demonstration?u=76281980&t=38)** So I have a folder, advanced trees with Knime, here, and the example that we're going to want is chapter two LMT.
>
> **[0:47](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/weka-lmt-demonstration?u=76281980&t=47)** So I'm going to double click on that.
>
> **[0:51](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/weka-lmt-demonstration?u=76281980&t=51)** And since we're going to focus on that, I'm going to go ahead and minimize all of these other windows.
>
> **[1:02](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/weka-lmt-demonstration?u=76281980&t=62)** I'll keep the description for the time being but I'll get rid of the outline and I'll get rid of the log here.
>
> **[1:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/weka-lmt-demonstration?u=76281980&t=69)** So you can see in the description for LMT that I'm going to read this section here, but you should be able to see this on your screen as well.
>
> **[1:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/weka-lmt-demonstration?u=76281980&t=82)** You can see here that it's a classifier for building logistic model trees which are classification trees with logistic regression functions at the leaves.
>
> **[1:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/weka-lmt-demonstration?u=76281980&t=93)** What I'm going to do is first, I'm going to show you how the workflow works.
>
> **[1:39](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/weka-lmt-demonstration?u=76281980&t=99)** It should be already quite familiar to you, and then in the next video, I'm going to walk you through the output.
>
> **[1:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/weka-lmt-demonstration?u=76281980&t=105)** So for the time being, we're just going to focus on the workflow.
>
> **[1:48](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/weka-lmt-demonstration?u=76281980&t=108)** So we have a data file that if we go to configure here, I want to remind you, maximize that, I want to remind you that you want to make sure the data file and this is the give me credit data set, that the path is consistent with your machine because chances are your path is not going to be desktop for Keith McCormick.
>
> **[2:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/weka-lmt-demonstration?u=76281980&t=137)** So you want to check that path and make sure that works.
>
> **[2:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/weka-lmt-demonstration?u=76281980&t=140)** Also, when you run into trouble, the most common reason I find in Knime to run into trouble with parsing files is if there's something that's different about how the variables have been declared in terms of string, and integer, and so on.
>
> **[2:41](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/weka-lmt-demonstration?u=76281980&t=161)** So if you run into trouble, I would check in those two places, the path and the variable declarations, but I'm providing the workflow for you.
>
> **[2:49](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/weka-lmt-demonstration?u=76281980&t=169)** Okay, so here we are, and we're using a partitioning node, an equal size sampling, just like we did in the previous course.
>
> **[3:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/weka-lmt-demonstration?u=76281980&t=180)** Nothing new here.
>
> **[3:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/weka-lmt-demonstration?u=76281980&t=181)** This actually looks very similar to the workflows that we would have used in the other course, but I do want to take a look at the column filter with you to keep this example simple because the output generated is a bit complicated.
>
> **[3:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/weka-lmt-demonstration?u=76281980&t=197)** I'm using only three variables, serious delinquency in two years, revolving utilization of unsecured lines, and number of times 90 days late.
>
> **[3:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/weka-lmt-demonstration?u=76281980&t=210)** Only those three.
>
> **[3:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/weka-lmt-demonstration?u=76281980&t=212)** In a real world situation, of course, you'd want to use as many variables as you thought were appropriate, but I'm really only doing this to simplify the output.
>
> **[3:41](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/weka-lmt-demonstration?u=76281980&t=221)** So I'll go ahead and click on cancel since I've made no changes.
>
> **[3:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/weka-lmt-demonstration?u=76281980&t=224)** And here is the LMT node.
>
> **[3:48](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/weka-lmt-demonstration?u=76281980&t=228)** I'll go in there.
>
> **[3:50](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/weka-lmt-demonstration?u=76281980&t=230)** The most important thing to verify is that the target variable is serious delinquency in two years.
>
> **[4:02](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/weka-lmt-demonstration?u=76281980&t=242)** Click on cancel.
>
> **[4:04](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/weka-lmt-demonstration?u=76281980&t=244)** All of these have been executed.
>
> **[4:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/weka-lmt-demonstration?u=76281980&t=246)** You may find that you have to execute them on your workflow.
>
> **[4:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/weka-lmt-demonstration?u=76281980&t=250)** I'm going to go ahead and right click on this again but go down the trained model.
>
> **[4:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/weka-lmt-demonstration?u=76281980&t=258)** And here we go.
>
> **[4:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/weka-lmt-demonstration?u=76281980&t=259)** As I warned you, the output at first seems to be pretty complicated, but it's pretty straightforward, and we're going to zoom in and talk about this in more detail on the very next video.
>
> **[4:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/weka-lmt-demonstration?u=76281980&t=269)** So the first rule is just this much of the tree which is at the top of this output.
>
> **[4:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/weka-lmt-demonstration?u=76281980&t=278)** It says, revolving utilization is less than a equal to 0.42 and number of times 90 day late is less than a equal to zero, and then it has LM 1.
>
> **[4:55](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/weka-lmt-demonstration?u=76281980&t=295)** What it's done is that is the first leaf node.
>
> **[4:59](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/weka-lmt-demonstration?u=76281980&t=299)** It segmented one portion of the data.
>
> **[5:03](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/weka-lmt-demonstration?u=76281980&t=303)** It happens to be 7,520 cases, by the way, but it's segmented one portion of the data and it has different formulas down here for each of those segments.
>
> **[5:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/weka-lmt-demonstration?u=76281980&t=316)** So what we're going to take a look at next is the formula associated with just that first leaf node, just the first two rows and just class one.
>
> **[5:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/weka-lmt-demonstration?u=76281980&t=330)** Class one are the ones are the defaults.
>
> **[5:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/weka-lmt-demonstration?u=76281980&t=333)** So we'll find out what characteristics the defaults have for that first segment, and we'll do that next.

> [!info]- Semantic Content
>
> **CLI Commands:** node (4), find (3), make (2)
> **UI Navigation:** click on (4), go to (2)
> **Env Vars:** lmt (3)
> **Cross-References:** in the next (1), next video (1)
> **Definitions:** is a  (2)
> **Analogies:** just like (1), similar to (1)
> **Versions:** 0.42 (1)
> **Prerequisites:** configure (1)

#### Interpreting the LMT results
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/interpreting-the-lmt-results?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/interpreting-the-lmt-results?u=76281980&t=0)** - [Instructor] So now, let's talk about the logistic regression formula.
>
> **[0:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/interpreting-the-lmt-results?u=76281980&t=5)** We won't go deeply into this topic, but I want you to have some comfort with the output we just generated using the very interesting LMT algorithm.
>
> **[0:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/interpreting-the-lmt-results?u=76281980&t=18)** So I'm going to make the assumption that you probably have had some exposure to linear regression but possibly are less familiar with logistic regression.
>
> **[0:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/interpreting-the-lmt-results?u=76281980&t=30)** However, I actually have an entire course dedicated to regression in the library.
>
> **[0:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/interpreting-the-lmt-results?u=76281980&t=37)** And if you wanted to go a little bit deeper on either the linear regression formula or the logistic formula, you could do so in that course, even if you didn't want to watch the entire course.
>
> **[0:50](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/interpreting-the-lmt-results?u=76281980&t=50)** So let's talk about how the logistic formula is a bit different than the linear one.
>
> **[0:56](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/interpreting-the-lmt-results?u=76281980&t=56)** So the linear regression formula is very much like the equation of the line that most of us encounter in algebra.
>
> **[1:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/interpreting-the-lmt-results?u=76281980&t=66)** We're usually told Y = MX + B, where B is the Y intercept and M is the slope.
>
> **[1:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/interpreting-the-lmt-results?u=76281980&t=73)** So in regression, the formula is similar but with different nomenclature, Y = beta 0 + beta 1*X1, and so on, where beta 0 is the Y intercept and we have beta 1 x X1.
>
> **[1:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/interpreting-the-lmt-results?u=76281980&t=88)** So what's going on with the LMT algorithm?
>
> **[1:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/interpreting-the-lmt-results?u=76281980&t=92)** Well, the concept is, what if we could segment our data and then build a different formula for each segment?
>
> **[1:41](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/interpreting-the-lmt-results?u=76281980&t=101)** By customizing the formula to the segment, would the formulas be more accurate?
>
> **[1:46](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/interpreting-the-lmt-results?u=76281980&t=106)** That's the concept, and I think it's actually a very clever way of combining logistic with trees.
>
> **[1:53](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/interpreting-the-lmt-results?u=76281980&t=113)** So in logistic, what we do is we take that linear formula, but we do the log of odds of the linear formula.
>
> **[2:02](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/interpreting-the-lmt-results?u=76281980&t=122)** So when we go to make predictions based upon our formula, we get this formula at the bottom of the slide, which admittedly looks a little complicated at first.
>
> **[2:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/interpreting-the-lmt-results?u=76281980&t=136)** 1 over the quantity, 1 + e to the negative power, and then all these additional things.
>
> **[2:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/interpreting-the-lmt-results?u=76281980&t=143)** Well, if you look carefully at that part of the formula within the parentheses there, you actually find that it's very similar indeed to the linear formula.
>
> **[2:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/interpreting-the-lmt-results?u=76281980&t=153)** So what we really have is we have the log of odds, and then we're basically doing the antilog on the back end.
>
> **[2:41](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/interpreting-the-lmt-results?u=76281980&t=161)** So what's going on?
>
> **[2:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/interpreting-the-lmt-results?u=76281980&t=163)** Well, the reason we're taking the log is to flatten the curve at 0 and 1, 'cause you see with logistic, we're trying to make a prediction and we don't want a prediction that's bigger than 1 or smaller than 0, 0 being a low probability and 1.0 being a high probability.
>
> **[3:04](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/interpreting-the-lmt-results?u=76281980&t=184)** So think about this in the context of our risk example.
>
> **[3:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/interpreting-the-lmt-results?u=76281980&t=187)** It's actually pretty clever because we're coming up with different risk segments, and each of those risk segments generates a different risk probability that's customized to them.
>
> **[3:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/interpreting-the-lmt-results?u=76281980&t=199)** So with that in mind, if you take that output, at the top of the slide here, we have the two criterion that put folks in the first leaf node.
>
> **[3:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/interpreting-the-lmt-results?u=76281980&t=211)** It's based upon their RevolvingUtilizationOfUnsecuredLines, and it's also based on the NumberOfTimes90DaysLate.
>
> **[3:40](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/interpreting-the-lmt-results?u=76281980&t=220)** So once you find yourself in that segment, then you take the numbers from the nine workflow and you plug them into the formula, and we can predict the probability of risk for any member of this first leaf node by plugging in their values into the formula at the bottom of the slide.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3), find (2), node (2)
> **Code Keywords:** let (2)
> **Env Vars:** lmt (2)
> **Versions:** 1.0 (1)
> **Cross-References:** coming up (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 3. What Is Rule Induction?

> [↑ Back to Table of Contents](#table-of-contents)

#### Comparing trees and rule induction
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/comparing-trees-and-rule-induction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/comparing-trees-and-rule-induction?u=76281980&t=0)** - [Instructor] We've been very much focused on decision trees.
>
> **[0:04](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/comparing-trees-and-rule-induction?u=76281980&t=4)** And we've seen how easily decision trees can be converted into rules.
>
> **[0:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/comparing-trees-and-rule-induction?u=76281980&t=9)** So you may have gotten the impression that it's the only strategy for rule induction.
>
> **[0:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/comparing-trees-and-rule-induction?u=76281980&t=15)** It's not true.
>
> **[0:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/comparing-trees-and-rule-induction?u=76281980&t=16)** Decision trees use a strategy called divide and conquer, but there's another strategy called separate and conquer.
>
> **[0:27](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/comparing-trees-and-rule-induction?u=76281980&t=27)** Let's revisit how trees work, but from a different point of view.
>
> **[0:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/comparing-trees-and-rule-induction?u=76281980&t=31)** Imagine that all of the data in your root node is represented by this rectangle.
>
> **[0:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/comparing-trees-and-rule-induction?u=76281980&t=37)** The top branch divides the root node into two, at least in the case that you're doing a binary split.
>
> **[0:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/comparing-trees-and-rule-induction?u=76281980&t=44)** So you end up with territory that represents the left branch, but also the right branch.
>
> **[0:51](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/comparing-trees-and-rule-induction?u=76281980&t=51)** As the tree algorithm continues, it further subdivides.
>
> **[0:56](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/comparing-trees-and-rule-induction?u=76281980&t=56)** Both on the left, and then also subdividing on the right.
>
> **[1:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/comparing-trees-and-rule-induction?u=76281980&t=61)** In fact, you may have encountered this type of chart in data visualization software.
>
> **[1:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/comparing-trees-and-rule-induction?u=76281980&t=67)** It's called a tree map.
>
> **[1:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/comparing-trees-and-rule-induction?u=76281980&t=69)** You end up with numerous, non overlapping territories, that represent the same segments that a leaf node would.
>
> **[1:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/comparing-trees-and-rule-induction?u=76281980&t=78)** As an added detail, it's quite common, in these tree maps, to apply heat and make it a heat map.
>
> **[1:25](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/comparing-trees-and-rule-induction?u=76281980&t=85)** With high or low concentrations, with some target variable, like loan default being revealed through the heat map.
>
> **[1:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/comparing-trees-and-rule-induction?u=76281980&t=96)** But that's not the only way to do it.
>
> **[1:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/comparing-trees-and-rule-induction?u=76281980&t=98)** In so-called separate and conquer, we find the rule that does the best job at explaining the variance in our target, but it's not the same as a left and right branch.
>
> **[1:51](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/comparing-trees-and-rule-induction?u=76281980&t=111)** We instead have the area that's described by the rule, perhaps with multiple variables, by the way, and then the area that is not explained by the rule.
>
> **[2:04](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/comparing-trees-and-rule-induction?u=76281980&t=124)** Then we proceed to search only the remaining area for the second rule.
>
> **[2:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/comparing-trees-and-rule-induction?u=76281980&t=131)** And here is a critical detail.
>
> **[2:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/comparing-trees-and-rule-induction?u=76281980&t=134)** The second rule might overlap with the first rule, but we don't worry about that, because we make sure when we're doing separate and conquer to keep our rules in order and to execute them in order at deployment.
>
> **[2:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/comparing-trees-and-rule-induction?u=76281980&t=155)** So tree rules never overlap, but separate and conquer rules almost always do.
>
> **[2:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/comparing-trees-and-rule-induction?u=76281980&t=163)** So let's recap the differences.
>
> **[2:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/comparing-trees-and-rule-induction?u=76281980&t=165)** Trees use the divide and conquer strategy.
>
> **[2:49](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/comparing-trees-and-rule-induction?u=76281980&t=169)** Rural induction uses separate and conquer.
>
> **[2:54](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/comparing-trees-and-rule-induction?u=76281980&t=174)** In trees, the rules do not overlap.
>
> **[2:56](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/comparing-trees-and-rule-induction?u=76281980&t=176)** They are mutually exclusive.
>
> **[2:59](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/comparing-trees-and-rule-induction?u=76281980&t=179)** Separate and conquer rules can, and often do, overlap.
>
> **[3:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/comparing-trees-and-rule-induction?u=76281980&t=185)** Once you produce your tree and produce rules based on your leaf nodes, you can execute the rules in any order.
>
> **[3:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/comparing-trees-and-rule-induction?u=76281980&t=195)** Separate and conquer rules, since they may overlap, must be ordered and must be executed in order.
>
> **[3:24](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/comparing-trees-and-rule-induction?u=76281980&t=204)** So let's try a separate and conquer style algorithm in the next video.

> [!info]- Semantic Content
>
> **CLI Commands:** node (3), make (2), find (1)
> **Code Keywords:** let (3)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### Rule induction demo
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/rule-induction-demo?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/rule-induction-demo?u=76281980&t=0)** - Okay, the workflow we'll be using is ADV Trees, Chapter 3, Rule Induction.
>
> **[0:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/rule-induction-demo?u=76281980&t=10)** And the node that we're going to try is the M5Rules node.
>
> **[0:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/rule-induction-demo?u=76281980&t=16)** And you can see here in the description that it generates a decision list for regression problems.
>
> **[0:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/rule-induction-demo?u=76281980&t=23)** So, we're going to be using the miles per gallon data, not the credit data, because we have a scale target variable and it generates a decision list for regression problems using separate and conquer and give some references.
>
> **[0:39](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/rule-induction-demo?u=76281980&t=39)** I'm going to actually close that now so we can see what we're doing a little bit better.
>
> **[0:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/rule-induction-demo?u=76281980&t=44)** Also notice that this happens to be implemented with Weka.
>
> **[0:48](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/rule-induction-demo?u=76281980&t=48)** So it requires the extensions that we've seen.
>
> **[0:51](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/rule-induction-demo?u=76281980&t=51)** So there's also a Weka predictor node as well as a numeric score.
>
> **[0:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/rule-induction-demo?u=76281980&t=57)** Note, numeric score, not simply score.
>
> **[1:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/rule-induction-demo?u=76281980&t=61)** Again, because of our scale target.
>
> **[1:04](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/rule-induction-demo?u=76281980&t=64)** So let's take a look inside the settings for the M5Rules node.
>
> **[1:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/rule-induction-demo?u=76281980&t=74)** And double check that you have the right target variable, should be miles per gallon and the attributes that are being allowed to flow to this node are horsepower, weight, acceleration and our target miles per gallon.
>
> **[1:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/rule-induction-demo?u=76281980&t=93)** So only three, not the entire data set, to keep it simple.
>
> **[1:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/rule-induction-demo?u=76281980&t=97)** Let's click on cancel, then this has already been executed.
>
> **[1:41](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/rule-induction-demo?u=76281980&t=101)** You will likely have to execute your workflow.
>
> **[1:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/rule-induction-demo?u=76281980&t=104)** And I'm going to go down here to the trained model.
>
> **[1:49](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/rule-induction-demo?u=76281980&t=109)** Maximize that.
>
> **[1:51](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/rule-induction-demo?u=76281980&t=111)** And up at the top it indicates that we have six rules.
>
> **[1:55](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/rule-induction-demo?u=76281980&t=115)** Then it has rule one, and we're going to take a closer look at these rules in the next video and talk about what this model is telling us about the miles per gallon data set.

> [!info]- Semantic Content
>
> **CLI Commands:** node (5)
> **Code Keywords:** let (2)
> **Env Vars:** adv (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** click on (1)
> **Speakers:** - okay (1)

#### Interpreting the rules
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/interpreting-the-rules?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/interpreting-the-rules?u=76281980&t=0)** - [Instructor] Okay, let's talk about the rules that we generated.
>
> **[0:03](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/interpreting-the-rules?u=76281980&t=3)** There's only six rules, so we're going to take a look at all six of them, and I think you'll really better understand the pattern that way.
>
> **[0:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/interpreting-the-rules?u=76281980&t=11)** So remember that in separate and conquer, we're trying to identify a rule which might have multiple variables.
>
> **[0:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/interpreting-the-rules?u=76281980&t=20)** This rule has multiple variables involved in it.
>
> **[0:24](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/interpreting-the-rules?u=76281980&t=24)** And cases either fit the rule or they're in the leftovers, so to speak.
>
> **[0:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/interpreting-the-rules?u=76281980&t=30)** And then we systematically address those leftovers as we do additional rules.
>
> **[0:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/interpreting-the-rules?u=76281980&t=35)** The notion that we have ordered rules here is very important.
>
> **[0:40](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/interpreting-the-rules?u=76281980&t=40)** In fact, what you'll find if we skip ahead a little bit is that this rule fits 139 cases.
>
> **[0:48](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/interpreting-the-rules?u=76281980&t=48)** The second rule applies to 121 cases and then 42 and then five, and then four, and then only two.
>
> **[1:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/interpreting-the-rules?u=76281980&t=60)** And that's the pattern you expect to find with separate and common because you're trying to explain as much variance as possible at the top, and then you're chipping away at the data in this ordered set of rules.
>
> **[1:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/interpreting-the-rules?u=76281980&t=74)** So rule one says that if the weight of the vehicle is greater than 2920 pounds, then we apply the following regression formula with a coefficient for horsepower and a coefficient for weight and a coefficient for acceleration and then the plus 29.67 is the Y intercept or the beta zero.
>
> **[1:41](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/interpreting-the-rules?u=76281980&t=101)** Let's take a look at rule two.
>
> **[1:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/interpreting-the-rules?u=76281980&t=103)** Rule two is not related to weight.
>
> **[1:47](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/interpreting-the-rules?u=76281980&t=107)** Rule two is if horsepower is greater than 70.5, and then we have a regression formula for that.
>
> **[1:55](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/interpreting-the-rules?u=76281980&t=115)** I think you can see how you could have a particular weight and a particular horsepower and that those, in fact, could overlap.
>
> **[2:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/interpreting-the-rules?u=76281980&t=125)** As we continue working through the rules, it will become even more clear that we have overlap.
>
> **[2:12](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/interpreting-the-rules?u=76281980&t=132)** Let me show you why.
>
> **[2:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/interpreting-the-rules?u=76281980&t=134)** In rule three, the rule applies if acceleration is less than or equal to 20.
>
> **[2:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/interpreting-the-rules?u=76281980&t=141)** And then we have a formula that really just a beta zero.
>
> **[2:25](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/interpreting-the-rules?u=76281980&t=145)** But then the fourth rule is if acceleration is less than or equal to 21.25, clearly under 21.25
>
> **[2:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/interpreting-the-rules?u=76281980&t=157)** overlaps with the previous rule, under 20.
>
> **[2:41](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/interpreting-the-rules?u=76281980&t=161)** So it's very important that you remember that these are in order.
>
> **[2:46](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/interpreting-the-rules?u=76281980&t=166)** It really is a different strategy than the decision tree strategy of divide and conquer.
>
> **[2:52](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/interpreting-the-rules?u=76281980&t=172)** Moving down to rule five, we're back to horsepower again.
>
> **[2:56](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/interpreting-the-rules?u=76281980&t=176)** And this formula has more than just a y intercept, more than just a beta zero, it also has a coefficient for horsepower.
>
> **[3:03](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/interpreting-the-rules?u=76281980&t=183)** But then, and this is a bit of a punchline for us, rule six doesn't have an if.
>
> **[3:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/interpreting-the-rules?u=76281980&t=190)** It doesn't have a then.
>
> **[3:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/interpreting-the-rules?u=76281980&t=191)** It simply says miles per gallon equals 23.75.
>
> **[3:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/interpreting-the-rules?u=76281980&t=197)** It only applies to two cases.
>
> **[3:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/interpreting-the-rules?u=76281980&t=199)** But why is there no rule? What's going on?
>
> **[3:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/interpreting-the-rules?u=76281980&t=202)** Well, remember, this is an ordered set, so by the time we get to rule six, it basically is all the cases for which the previous five rules did not apply.
>
> **[3:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/interpreting-the-rules?u=76281980&t=215)** So there you have it.
>
> **[3:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/interpreting-the-rules?u=76281980&t=216)** Separate and conquer truly is a completely different strategy than the divide and conquer strategy that we see in decision trees.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), continue (1), if. (1)
> **Versions:** 21.25 (2), 29.67 (1), 70.5 (1), 23.75 (1)
> **Definitions:** is a  (3), is an  (1)
> **CLI Commands:** find (2)
> **Tools:** notion (1)
> **Speakers:** - [instructor] (1)


### 4. Low Code Python Options in KNIME

> [↑ Back to Table of Contents](#table-of-contents)

#### Low code options in KNIME
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/low-code-options-in-knime?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/low-code-options-in-knime?u=76281980&t=0)** - [Instructor] Now it's time to talk about KNIME's powerful low code and even full code options.
>
> **[0:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/low-code-options-in-knime?u=76281980&t=9)** There are three of them, and we're going to see some examples.
>
> **[0:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/low-code-options-in-knime?u=76281980&t=13)** In the next video, we're going to be working with the workflow that you see.
>
> **[0:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/low-code-options-in-knime?u=76281980&t=17)** But in the current video, we're just going to talk about the options in a little bit more detail, and we're going to talk about setup and installation when necessary.
>
> **[0:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/low-code-options-in-knime?u=76281980&t=28)** So the Python Script Lab node, is going to allow you to use Python code without an elaborate installation, and we're going to see an example of this.
>
> **[0:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/low-code-options-in-knime?u=76281980&t=43)** The Conda Environment Propagation node allows you to use a wider variety of Python resources, but does require an installation and setup step.
>
> **[0:58](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/low-code-options-in-knime?u=76281980&t=58)** Finally, in a detailed discussion of this third option is beyond the scope of the course, but there is a third option, and that's a full code option, but that would actually require creating your own extension node using Python.
>
> **[1:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/low-code-options-in-knime?u=76281980&t=80)** So let's go into some supporting materials and see how these three options work.
>
> **[1:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/low-code-options-in-knime?u=76281980&t=86)** The Python Script node, the Conda node, and then again, very brief mention, of the extension option.
>
> **[1:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/low-code-options-in-knime?u=76281980&t=95)** This is the KNIME Python integration guide.
>
> **[1:40](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/low-code-options-in-knime?u=76281980&t=100)** And note that it's for version 4.6.
>
> **[1:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/low-code-options-in-knime?u=76281980&t=103)** There are some new Python features as of that KNIME version.
>
> **[1:49](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/low-code-options-in-knime?u=76281980&t=109)** So remember that our first option was the Python scripting node.
>
> **[1:54](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/low-code-options-in-knime?u=76281980&t=114)** So if we scroll down a little bit, there's a phrase here that I want to read to you because it's very important, starting with version 4.6.
>
> **[2:03](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/low-code-options-in-knime?u=76281980&t=123)** "This convenience allows for using the Python Script node without installing, configuring, or even knowing environments."
>
> **[2:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/low-code-options-in-knime?u=76281980&t=131)** What does that all mean?
>
> **[2:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/low-code-options-in-knime?u=76281980&t=133)** It means that when you install KNIME 4.6, you're getting some Python functionality simply by installing KNIME.
>
> **[2:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/low-code-options-in-knime?u=76281980&t=141)** And that's going to be the basis of our first example using the Python Script node.
>
> **[2:27](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/low-code-options-in-knime?u=76281980&t=147)** The Conda node is really quite different.
>
> **[2:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/low-code-options-in-knime?u=76281980&t=151)** So the whole idea of the Conda node is that you get added functionality, but you have to do an additional install.
>
> **[2:39](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/low-code-options-in-knime?u=76281980&t=159)** You may be wondering what Conda's referring to and you may have heard of Anaconda.
>
> **[2:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/low-code-options-in-knime?u=76281980&t=165)** It's all related as you might guess.
>
> **[2:47](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/low-code-options-in-knime?u=76281980&t=167)** So if we scroll down, I want to point out that if you look in the documentation, you may be led to believe that you need to install a new Conda environment.
>
> **[3:02](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/low-code-options-in-knime?u=76281980&t=182)** I want you to be cautious about this because it may or may not be true.
>
> **[3:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/low-code-options-in-knime?u=76281980&t=187)** If you're going to be the developer on the team, and you're going to be creating a new Conda node, then yes, you have to do this.
>
> **[3:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/low-code-options-in-knime?u=76281980&t=198)** However, if you are the practitioner on the team, you don't do this step.
>
> **[3:24](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/low-code-options-in-knime?u=76281980&t=204)** That is done by your colleague, who's the Python programmer, if you yourself are not a Python programmer.
>
> **[3:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/low-code-options-in-knime?u=76281980&t=212)** We'll see more about that and it will become more clear.
>
> **[3:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/low-code-options-in-knime?u=76281980&t=216)** Finally, I want to scroll down to the step that everybody's going to have to do, and we're going to see this in KNIME.
>
> **[3:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/low-code-options-in-knime?u=76281980&t=225)** Everyone, whether or not you're the Conda developer or the Conda user, you're going to have to download Miniconda.
>
> **[3:56](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/low-code-options-in-knime?u=76281980&t=236)** And then you're going to have to tell KNIME your installation directory for Conda.
>
> **[4:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/low-code-options-in-knime?u=76281980&t=245)** And again, we're going to be seeing this in the KNIME interface in a couple of videos.
>
> **[4:12](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/low-code-options-in-knime?u=76281980&t=252)** Finally, I want to make brief mention of the most ambitious option of all, and that's creating your own KNIME extension.
>
> **[4:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/low-code-options-in-knime?u=76281980&t=262)** KNIME has some documentation specifically for this, create a new Python-based KNIME extension.
>
> **[4:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/low-code-options-in-knime?u=76281980&t=270)** You might wonder what's new about this.
>
> **[4:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/low-code-options-in-knime?u=76281980&t=274)** Well, what's new and actually a bit exciting is that as of 4.6, you can do pure full Python code without having to write Java.
>
> **[4:48](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/low-code-options-in-knime?u=76281980&t=288)** Why would Java have ever been a requirement?
>
> **[4:51](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/low-code-options-in-knime?u=76281980&t=291)** Well, the KNIME nodes are written in Java.
>
> **[4:54](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/low-code-options-in-knime?u=76281980&t=294)** So until version 4.6, what you had to do, is you had to bring in your Python code if you desired, and then essentially wrap Java around it to allow you to interact with the other nodes in KNIME.
>
> **[5:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/low-code-options-in-knime?u=76281980&t=311)** And now they've made that easier.
>
> **[5:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/low-code-options-in-knime?u=76281980&t=314)** But of course, easier is relative.
>
> **[5:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/low-code-options-in-knime?u=76281980&t=316)** If you are not a Python programmer, this is not going to be an option for you.
>
> **[5:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/low-code-options-in-knime?u=76281980&t=321)** However, if you are a KNIME data science team, and you've got some folks that are coders and some folks that only use KNIME, this is a powerful option.
>
> **[5:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/low-code-options-in-knime?u=76281980&t=332)** Because you can add just about any functionality you want by bringing in the necessary Python code.
>
> **[5:41](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/low-code-options-in-knime?u=76281980&t=341)** But keep in mind this is going to be a fairly elaborate undertaking and you're definitely going to need some members of the team that consider themselves to be developers.
>
> **[5:52](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/low-code-options-in-knime?u=76281980&t=352)** So now let's revisit the simplest of those three options.
>
> **[5:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/low-code-options-in-knime?u=76281980&t=357)** The Python Script node.

> [!info]- Semantic Content
>
> **CLI Commands:** python (19), node (12), make (1)
> **Env Vars:** knime (15)
> **Code Keywords:** this. (3), finally, (3), require (2), let (2), interface (1)
> **Versions:** version 4 (3), 4.6 (2)
> **Prerequisites:** install (3), setup (2)
> **UI Navigation:** scroll down (3)
> **Definitions:** is a  (2), means that (1)
> **Warnings:** note that (1), keep in mind (1)

#### Python script node demo
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/python-script-node-demo?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/python-script-node-demo?u=76281980&t=0)** - [Instructor] Okay, here we are in the Python script node workflow.
>
> **[0:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/python-script-node-demo?u=76281980&t=5)** The name of the workflow is Advance Tree Chapter Four Python Script Node.
>
> **[0:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/python-script-node-demo?u=76281980&t=8)** Advance Tree Chapter Four Python Script Node.
>
> **[0:12](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/python-script-node-demo?u=76281980&t=12)** Now remember, this is the easiest option.
>
> **[0:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/python-script-node-demo?u=76281980&t=15)** We don't have to worry about Miniconda.
>
> **[0:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/python-script-node-demo?u=76281980&t=18)** We don't have to worry about an installation directory.
>
> **[0:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/python-script-node-demo?u=76281980&t=21)** We just have to download Knime.
>
> **[0:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/python-script-node-demo?u=76281980&t=23)** However, it is a Python script node, so we do need some Python.
>
> **[0:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/python-script-node-demo?u=76281980&t=28)** Let's orient ourself to the workflow.
>
> **[0:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/python-script-node-demo?u=76281980&t=30)** We read in our data. We balance and partition as usual.
>
> **[0:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/python-script-node-demo?u=76281980&t=35)** Then, we have a Python script node that's acting like our learner, and we have a Python script node that's acting like our predictor, and we have a scorer.
>
> **[0:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/python-script-node-demo?u=76281980&t=45)** In fact, we can actually go down to the Confusion matrix and actually see that everything is behaving the way that it normally would.
>
> **[0:55](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/python-script-node-demo?u=76281980&t=55)** Let's talk a little bit about what this Python script node does and how it does it.
>
> **[1:03](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/python-script-node-demo?u=76281980&t=63)** I'm going to right-click and configure.
>
> **[1:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/python-script-node-demo?u=76281980&t=69)** I'll orient you to this.
>
> **[1:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/python-script-node-demo?u=76281980&t=71)** What we've done is leveraged some of the most common and popular Python libraries for machine learning, and popular Python libraries for machine learning, Pandas and NumPy.
>
> **[1:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/python-script-node-demo?u=76281980&t=81)** Because of that, because we're using standard libraries, we don't have to do any elaborate install.
>
> **[1:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/python-script-node-demo?u=76281980&t=90)** The best way to orient yourself to this, and keep in mind this is only going to be helpful if you know a little bit of Python, is to take a look at the templates.
>
> **[1:39](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/python-script-node-demo?u=76281980&t=99)** If you're not a Python user, remember that this might be a collaborative effort where a member of the team helps you with the Python, but that once this is set up, you use it in a Knime workflow much like you would any other node.
>
> **[1:58](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/python-script-node-demo?u=76281980&t=118)** The template explains how you're going to bring the data in, into a form that Knime can manipulate it.
>
> **[2:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/python-script-node-demo?u=76281980&t=127)** Then, how to go about the processing step.
>
> **[2:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/python-script-node-demo?u=76281980&t=131)** Here is where you have to require the most of your own work.
>
> **[2:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/python-script-node-demo?u=76281980&t=135)** Then finally, how to handle the output back out to Knime.
>
> **[2:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/python-script-node-demo?u=76281980&t=140)** The best way to think of the template, I think, is that it's really helping you with the input and output part.
>
> **[2:27](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/python-script-node-demo?u=76281980&t=147)** Now, let's go to the actual script.
>
> **[2:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/python-script-node-demo?u=76281980&t=151)** We see that we have input into the knime_io.
>
> **[2:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/python-script-node-demo?u=76281980&t=153)** We see that we have input into the knime_io.
>
> **[2:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/python-script-node-demo?u=76281980&t=157)** Then, we're also bringing in sklearn. Note import pickle.
>
> **[2:42](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/python-script-node-demo?u=76281980&t=162)** A pickle object is going to be how we're going to send information from our Python node back out to Knime, but in the next couple of lines, notice there's an explicit reference to serious delinquency in two years, because we're declaring our target in our input variables in these steps.
>
> **[3:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/python-script-node-demo?u=76281980&t=181)** I'm not going to go deeper into the Python now.
>
> **[3:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/python-script-node-demo?u=76281980&t=185)** I just wanted to orient you to the kinds of steps that are taking place.
>
> **[3:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/python-script-node-demo?u=76281980&t=190)** Click on Cancel.
>
> **[3:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/python-script-node-demo?u=76281980&t=195)** If we take a look into this other node, we can see that we're now pushing out the results of the model into new columns, probability and prediction.
>
> **[3:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/python-script-node-demo?u=76281980&t=203)** of the model into new columns, probability and prediction.
>
> **[3:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/python-script-node-demo?u=76281980&t=210)** Now, I'm going to cancel out of this because we didn't make any changes.
>
> **[3:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/python-script-node-demo?u=76281980&t=214)** Something that you may find helpful to orient yourself is that if you right-click on these nodes, and you go down to Add ports or Remove ports and so on, notice to Add ports or Remove ports and so on, notice that an input port to this second node is the pickle object.
>
> **[3:52](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/python-script-node-demo?u=76281980&t=232)** That's how things are being passed back and forth.
>
> **[3:55](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/python-script-node-demo?u=76281980&t=235)** I think that's as much detail as you need to know for now, because our goal for this video is to know that this Python script option is available.
>
> **[4:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/python-script-node-demo?u=76281980&t=247)** It actually allows you to bring in an alternative decision tree implementation in this case, to see if the performance of the sklearn version is perhaps different than the Knime version and so on.
>
> **[4:24](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/python-script-node-demo?u=76281980&t=264)** This is a powerful, new feature, easier than it's been in the past, and maybe helpful if you want to access a greater diversity of algorithms.

> [!info]- Semantic Content
>
> **CLI Commands:** python (16), node (11), make (1), find (1)
> **Code Keywords:** let (3), this. (1), this, (1), require (1), finally, (1)
> **UI Navigation:** right-click (2), go to (1), click on (1)
> **Prerequisites:** configure (1), install (1), set up (1)
> **Code Identifiers:** knime_io (2)
> **Exercise Files:** template (2)
> **Definitions:** is a  (2)
> **Cross-References:** in the next (1)

#### CHAID demo in KNIME
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/chaid-demo-in-knime?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/chaid-demo-in-knime?u=76281980&t=0)** - [Instructor] For this example we're going to talk about the CHAID algorithm.
>
> **[0:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/chaid-demo-in-knime?u=76281980&t=5)** So where did I find CHAID?
>
> **[0:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/chaid-demo-in-knime?u=76281980&t=9)** Well, I found it here in the PYPI library.
>
> **[0:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/chaid-demo-in-knime?u=76281980&t=15)** So it's not in SK Learn.
>
> **[0:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/chaid-demo-in-knime?u=76281980&t=18)** So we're not able to use a Python script node but this library is one of the libraries that's supported by a Conda node.
>
> **[0:27](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/chaid-demo-in-knime?u=76281980&t=27)** So at the heart of this example we'll be talking about how to access that greater variety of algorithms using what nine calls the Conda node.
>
> **[0:40](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/chaid-demo-in-knime?u=76281980&t=40)** But CHAID is an interesting topic in and of itself.
>
> **[0:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/chaid-demo-in-knime?u=76281980&t=45)** So let me share with you a couple of quick observations about CHAID.
>
> **[0:49](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/chaid-demo-in-knime?u=76281980&t=49)** So CHAID stands for Chi-Square Automatic Interaction Detection.
>
> **[0:55](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/chaid-demo-in-knime?u=76281980&t=55)** And you may have encountered that phrase Chi-Square in statistics, you know people talk about an F test or a T test.
>
> **[1:03](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/chaid-demo-in-knime?u=76281980&t=63)** Well, there's such a thing as a chi-square test as well.
>
> **[1:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/chaid-demo-in-knime?u=76281980&t=67)** So CHAID uses P values, you know those above or below 0.05 values, it uses those for merges and splits.
>
> **[1:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/chaid-demo-in-knime?u=76281980&t=79)** Now, this is one of the older algorithms.
>
> **[1:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/chaid-demo-in-knime?u=76281980&t=82)** It came out in 1980, about four years before CART did but it's based upon an older algorithm that was simply called AID that goes back, I believe, to the seventies.
>
> **[1:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/chaid-demo-in-knime?u=76281980&t=96)** So it's been around for quite a while.
>
> **[1:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/chaid-demo-in-knime?u=76281980&t=98)** Not everyone would believe that using P values would be the best way to grow a tree these days.
>
> **[1:47](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/chaid-demo-in-knime?u=76281980&t=107)** However, at the time it was a lot faster than CART because calculating P values is better than calculating genie.
>
> **[1:56](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/chaid-demo-in-knime?u=76281980&t=116)** But why would we consider CHAID now?
>
> **[1:59](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/chaid-demo-in-knime?u=76281980&t=119)** Well, the quick answer is if it's sufficiently different from CART and C5 that it sometimes disagrees.
>
> **[2:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/chaid-demo-in-knime?u=76281980&t=128)** It becomes very interesting to know if when it disagrees it's right and CART or C5 might be wrong.
>
> **[2:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/chaid-demo-in-knime?u=76281980&t=137)** So in other words, we would anticipate that CART and C5 would generally be more accurate than CHAID.
>
> **[2:24](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/chaid-demo-in-knime?u=76281980&t=144)** That's why they're so popular.
>
> **[2:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/chaid-demo-in-knime?u=76281980&t=146)** But that doesn't mean it's not interesting to know when CHAID disagrees with those other algorithms.
>
> **[2:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/chaid-demo-in-knime?u=76281980&t=153)** In other words, we don't want to assume that CART and C5 are better for all types of cases and all types of situations, not only at the global level, but in the instance of interesting individual cases that might encounter a C5 or CART blind spot.
>
> **[2:54](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/chaid-demo-in-knime?u=76281980&t=174)** So how is it different?
>
> **[2:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/chaid-demo-in-knime?u=76281980&t=177)** It's different and then it produces wide splits.
>
> **[3:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/chaid-demo-in-knime?u=76281980&t=180)** You may recall that CART always produces binary splits.
>
> **[3:04](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/chaid-demo-in-knime?u=76281980&t=184)** C5 sometimes does, sometimes doesn't, depending on the type of variable that's being split.
>
> **[3:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/chaid-demo-in-knime?u=76281980&t=190)** But CHAID always produces wide splits.
>
> **[3:12](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/chaid-demo-in-knime?u=76281980&t=192)** So that's an important difference and it can actually come in handy if you have complex categorical variables with lots of different categories.
>
> **[3:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/chaid-demo-in-knime?u=76281980&t=201)** CHAID often will divide that up differently than a binary split algorithm like CART might.
>
> **[3:27](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/chaid-demo-in-knime?u=76281980&t=207)** Also, and I think this is a valuable difference.
>
> **[3:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/chaid-demo-in-knime?u=76281980&t=211)** CHAID treats missing as a different category.
>
> **[3:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/chaid-demo-in-knime?u=76281980&t=215)** So when I have a large amount of missing data I often want to try CHAID to see what CHAID does with all of those missing cases.
>
> **[3:46](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/chaid-demo-in-knime?u=76281980&t=226)** So the strong contrast with CART and C5 is itself a valuable thing.
>
> **[3:53](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/chaid-demo-in-knime?u=76281980&t=233)** So the fact that it will sometimes disagree with CART and C5 is in and of itself interesting because I might look for those instances when they disagree and find out when CHAID actually was the better choice during those times of disagreement.
>
> **[4:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/chaid-demo-in-knime?u=76281980&t=253)** So let's see how this all comes together.
>
> **[4:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/chaid-demo-in-knime?u=76281980&t=256)** Here we are in nine, but we're in the preferences.
>
> **[4:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/chaid-demo-in-knime?u=76281980&t=259)** And I want to remind you of something that we talked about when we talked about the Conda installation requirements.
>
> **[4:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/chaid-demo-in-knime?u=76281980&t=269)** But I want to show you here.
>
> **[4:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/chaid-demo-in-knime?u=76281980&t=271)** So if we go to nine and we go down to Conda, here's the key place.
>
> **[4:39](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/chaid-demo-in-knime?u=76281980&t=279)** Now it's pointing to the location on my drive.
>
> **[4:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/chaid-demo-in-knime?u=76281980&t=283)** You have to make sure that it's pointing to the correct place, but there's a browse button to do it.
>
> **[4:48](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/chaid-demo-in-knime?u=76281980&t=288)** That's all you need to do for the Conda node as a practitioner.
>
> **[4:53](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/chaid-demo-in-knime?u=76281980&t=293)** If you are developing the Conda node, you have an extra step.
>
> **[4:58](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/chaid-demo-in-knime?u=76281980&t=298)** But if you are using a Conda node that was developed by a colleague, and that's what we'll be demonstrating now this is the only step you have to do.
>
> **[5:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/chaid-demo-in-knime?u=76281980&t=309)** I'm going to go ahead and click on cancel.
>
> **[5:12](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/chaid-demo-in-knime?u=76281980&t=312)** And here is the workflow.
>
> **[5:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/chaid-demo-in-knime?u=76281980&t=315)** This has been provided for you.
>
> **[5:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/chaid-demo-in-knime?u=76281980&t=317)** The workflow name is Adv Trees chapter four Conda CHAID.
>
> **[5:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/chaid-demo-in-knime?u=76281980&t=323)** So we notice a node that we haven't used before.
>
> **[5:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/chaid-demo-in-knime?u=76281980&t=326)** We've mentioned it, but we haven't actually seen it in a workflow being used.
>
> **[5:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/chaid-demo-in-knime?u=76281980&t=330)** And that is this node.
>
> **[5:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/chaid-demo-in-knime?u=76281980&t=332)** So I'm going to right click on that.
>
> **[5:39](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/chaid-demo-in-knime?u=76281980&t=339)** It's referring to a Conda environment instance PY3 knime CHAID.
>
> **[5:47](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/chaid-demo-in-knime?u=76281980&t=347)** That step was done by the person who created this conda node.
>
> **[5:54](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/chaid-demo-in-knime?u=76281980&t=354)** So if you are the user, the end user of this you don't have to do any steps related to that except to open the workflow that has been created.
>
> **[6:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/chaid-demo-in-knime?u=76281980&t=365)** And that's also true in this instance.
>
> **[6:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/chaid-demo-in-knime?u=76281980&t=367)** As long as you install Conda and you make the changes and preferences that we just saw all you have to do is open and use this workflow.
>
> **[6:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/chaid-demo-in-knime?u=76281980&t=378)** You don't have to create the conda environment that step has been done for you.
>
> **[6:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/chaid-demo-in-knime?u=76281980&t=383)** So I'll click on cancel.
>
> **[6:25](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/chaid-demo-in-knime?u=76281980&t=385)** We have the same data file we've been using all along.
>
> **[6:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/chaid-demo-in-knime?u=76281980&t=388)** We've got a row sampler here in lieu of a partition node, and that prompts me to mention something that's kind of important.
>
> **[6:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/chaid-demo-in-knime?u=76281980&t=397)** Remember that we're not really running knime now we're running Python.
>
> **[6:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/chaid-demo-in-knime?u=76281980&t=403)** And specifically we're running a CHAID algorithm that was written by a third party as part of that library that we're accessing through conda.
>
> **[6:53](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/chaid-demo-in-knime?u=76281980&t=413)** So you want to be careful about assuming that Standard knime nodes will always work along with this like a score node or what have you.
>
> **[7:04](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/chaid-demo-in-knime?u=76281980&t=424)** But this node is a Python script node.
>
> **[7:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/chaid-demo-in-knime?u=76281980&t=427)** And let's open this.
>
> **[7:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/chaid-demo-in-knime?u=76281980&t=431)** This is behaving very much like nearly exactly like frankly the learner node in the previous Python example.
>
> **[7:25](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/chaid-demo-in-knime?u=76281980&t=445)** The difference is that we're importing CHAID from that Conda node.
>
> **[7:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/chaid-demo-in-knime?u=76281980&t=454)** We're bringing in the CHAID functionality from that Conda node.
>
> **[7:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/chaid-demo-in-knime?u=76281980&t=458)** Otherwise, this node is very similar to the previous example.
>
> **[7:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/chaid-demo-in-knime?u=76281980&t=463)** I'll go ahead and click on cancel.
>
> **[7:46](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/chaid-demo-in-knime?u=76281980&t=466)** I'm going to right click and look at the resulting table.
>
> **[7:50](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/chaid-demo-in-knime?u=76281980&t=470)** And we see that we have a column of predictions and that would be sufficient to determine when CHAID agrees with or doesn't agree with other choices that we might consider like CART and C4.5 using a decision tree learner.
>
> **[8:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/chaid-demo-in-knime?u=76281980&t=490)** And in my experience, it can be very interesting to look at those points of disagreement.
>
> **[8:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/chaid-demo-in-knime?u=76281980&t=496)** When did CHAID disagree with CART?
>
> **[8:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/chaid-demo-in-knime?u=76281980&t=499)** They'll agree most of the time but those points of disagreement are very interesting as you try to fine tune your model.

> [!info]- Semantic Content
>
> **Env Vars:** chaid (22), cart (13), pypi (1), aid (1), py3 (1)
> **CLI Commands:** node (17), python (4), find (2), make (2)
> **UI Navigation:** click on (4), go to (1), open the (1)
> **Code Keywords:** let (3), while. (1), this. (1)
> **Definitions:** in other words (2), is a  (2), is an  (1)
> **Cross-References:** we talked about (2)
> **Versions:** 0.05 (1)
> **Warnings:** be careful (1)

#### Advanced code options in KNIME (optimal sparse trees)
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/advanced-code-options-in-knime-optimal-sparse-trees?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/advanced-code-options-in-knime-optimal-sparse-trees?u=76281980&t=0)** - [Instructor] A full demonstration of creating a Python extension really belongs in a programming course and not a course on decision trees.
>
> **[0:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/advanced-code-options-in-knime-optimal-sparse-trees?u=76281980&t=13)** But I'd like to briefly engage in a thought experiment with you.
>
> **[0:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/advanced-code-options-in-knime-optimal-sparse-trees?u=76281980&t=18)** Imagine for a moment that you're attending a conference and you hear the authors discuss an algorithm called Optimal Sparse Decision Trees.
>
> **[0:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/advanced-code-options-in-knime-optimal-sparse-trees?u=76281980&t=28)** And you get intrigued and you look at the abstract and you find out that actually it's trying to deal with the fact that decision tree algorithms are often greedy or myopic and sometimes produce suboptimal models.
>
> **[0:47](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/advanced-code-options-in-knime-optimal-sparse-trees?u=76281980&t=47)** And you continue to read and you're more and more intrigued and you wonder how to implement this.
>
> **[0:53](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/advanced-code-options-in-knime-optimal-sparse-trees?u=76281980&t=53)** So, you discover that not only is there a full paper there's also a GitHub and the code is there.
>
> **[1:03](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/advanced-code-options-in-knime-optimal-sparse-trees?u=76281980&t=63)** So how do you leverage something like this?
>
> **[1:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/advanced-code-options-in-knime-optimal-sparse-trees?u=76281980&t=66)** Even if you're a team that is using a no-code, low-code option like nine.
>
> **[1:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/advanced-code-options-in-knime-optimal-sparse-trees?u=76281980&t=75)** Well, because this code was developed as part of presenting a paper at a conference you're not going to find it in something like SK Learn.
>
> **[1:25](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/advanced-code-options-in-knime-optimal-sparse-trees?u=76281980&t=85)** You're not going to find it in a Miniconda download.
>
> **[1:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/advanced-code-options-in-knime-optimal-sparse-trees?u=76281980&t=89)** But now that you can use Python and not just the combination of Python and Java, if you have a Python programmer on your team you potentially could create a whole new extension in order to do this.
>
> **[1:46](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/advanced-code-options-in-knime-optimal-sparse-trees?u=76281980&t=106)** Now, the amount of work would be non-trivial but the way that extension node would behave is just like the LMT node that we saw in an earlier video that was implemented through a WECA extension node.
>
> **[2:04](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/advanced-code-options-in-knime-optimal-sparse-trees?u=76281980&t=124)** So this is a powerful option and what I encourage you to do is to seek out papers like this paper on Optimal Sparse decision Trees.
>
> **[2:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/advanced-code-options-in-knime-optimal-sparse-trees?u=76281980&t=135)** Even if you don't implement the algorithm I think it's very helpful to know what the cutting edge researchers are doing, even with techniques that we think have been finalized years ago like decision trees.
>
> **[2:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/advanced-code-options-in-knime-optimal-sparse-trees?u=76281980&t=151)** By the way, Cynthia Rudin and her team at Duke have produced consistent great work over recent years, and this is one of their specialty topics, advancing the approaches in contemporary decision tree algorithms.

> [!info]- Semantic Content
>
> **CLI Commands:** python (4), find (3), node (3)
> **Code Keywords:** this. (2), abstract (1), continue (1)
> **Env Vars:** lmt (1), weca (1)
> **Analogies:** imagine (1), just like (1)
> **Tools:** github (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 5. Ensembles and Random Forests

> [↑ Back to Table of Contents](#table-of-contents)

#### Introducing random forest
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/introducing-random-forest?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/introducing-random-forest?u=76281980&t=0)** - [Instructor] One of the most important techniques in all of machine learning, is building ensembles of trees.
>
> **[0:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/introducing-random-forest?u=76281980&t=6)** An ensemble, in this context, is simply a collection of models.
>
> **[0:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/introducing-random-forest?u=76281980&t=11)** Each component model contributes to the overall solution.
>
> **[0:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/introducing-random-forest?u=76281980&t=15)** It's quite like a committee.
>
> **[0:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/introducing-random-forest?u=76281980&t=16)** It's a simple concept, but a powerful one.
>
> **[0:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/introducing-random-forest?u=76281980&t=19)** Algorithm developers have been busy for decades developing numerous variations on this theme.
>
> **[0:25](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/introducing-random-forest?u=76281980&t=25)** And many machine learning competitions, like those on Kaggle have been won with ensembles.
>
> **[0:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/introducing-random-forest?u=76281980&t=32)** Now, it's a very big topic.
>
> **[0:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/introducing-random-forest?u=76281980&t=35)** In fact, there's an entire course dedicated to ensembles.
>
> **[0:39](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/introducing-random-forest?u=76281980&t=39)** So in this course, we'll just get oriented with a single one of these famous algorithms, Random Forest, which is available in nine with a standard nine node.
>
> **[0:52](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/introducing-random-forest?u=76281980&t=52)** The basic idea of Random Forest is to make multiple versions of our tree and then average them.
>
> **[0:59](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/introducing-random-forest?u=76281980&t=59)** It's not uncommon to make hundreds of component trees for the ensemble.
>
> **[1:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/introducing-random-forest?u=76281980&t=66)** You may be able to anticipate a problem, however.
>
> **[1:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/introducing-random-forest?u=76281980&t=70)** If the component trees are nearly identical to each other how much better with the resulting ensemble be?
>
> **[1:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/introducing-random-forest?u=76281980&t=80)** This turns out to be an important insight into how Random Forest works.
>
> **[1:25](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/introducing-random-forest?u=76281980&t=85)** We need diverse component trees for it to work effectively.
>
> **[1:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/introducing-random-forest?u=76281980&t=92)** We've learned that a major potential weakness of trees, is that tree branches are greedy.
>
> **[1:39](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/introducing-random-forest?u=76281980&t=99)** A variable split that is optimal at the branch, might be suboptimal for the tree as a whole.
>
> **[1:48](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/introducing-random-forest?u=76281980&t=108)** To avoid having all of our trees have the same blind spots, Random Forest has to shuffle the data.
>
> **[1:58](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/introducing-random-forest?u=76281980&t=118)** It's not quite the same as having multiple trained test partitions, but it's something like that.
>
> **[2:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/introducing-random-forest?u=76281980&t=125)** We won't get into the details now, but Random Forest uses a technique called Bootstrap Sampling.
>
> **[2:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/introducing-random-forest?u=76281980&t=134)** Random Forest also shuffles the input variables to ensure that the resulting trees are diverse and don't always have the same top branches.
>
> **[2:27](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/introducing-random-forest?u=76281980&t=147)** All of these ingredients are explained in more detail in the ensembles course.
>
> **[2:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/introducing-random-forest?u=76281980&t=152)** Along with multiple ensemble algorithms.
>
> **[2:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/introducing-random-forest?u=76281980&t=156)** We're going to focus on the basics and how Random Forest works using the Random Forest learner node in a complete workflow in nine.

> [!info]- Semantic Content
>
> **CLI Commands:** node (2), make (2)
> **Speakers:** - [instructor] (1)

#### Random forests demo
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/random-forests-demo?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/random-forests-demo?u=76281980&t=0)** - [Instructor] So here we are in nine and the name workflow is Adv_Trees_Chapter5_Random_Forest and it's found in both the hub and in the exercise files.
>
> **[0:12](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/random-forests-demo?u=76281980&t=12)** It's all ready to go.
>
> **[0:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/random-forests-demo?u=76281980&t=14)** Also, notice of course that when you click on the random forest learner node, you get a reasonably detailed description but it's really just giving you the high level outline of the algorithm to thoroughly understand how random forest works.
>
> **[0:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/random-forests-demo?u=76281980&t=32)** You really have to understand what bootstrapping is and what bagging is.
>
> **[0:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/random-forests-demo?u=76281980&t=36)** But let's stay focused on the workflow.
>
> **[0:39](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/random-forests-demo?u=76281980&t=39)** So I'm going to close the description.
>
> **[0:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/random-forests-demo?u=76281980&t=45)** Now we can see the workflow more clearly and let's discuss.
>
> **[0:54](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/random-forests-demo?u=76281980&t=54)** Okay, we're using the same credit file that we've been using throughout the course.
>
> **[0:58](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/random-forests-demo?u=76281980&t=58)** And let's actually pause for a moment to take a look at the partitioning node.
>
> **[1:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/random-forests-demo?u=76281980&t=65)** Notice that I'm partitioning in the usual way and I want to remind you the fact that this is not where the shuffling is happening.
>
> **[1:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/random-forests-demo?u=76281980&t=75)** We're creating a permanent train test partition.
>
> **[1:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/random-forests-demo?u=76281980&t=79)** We're not shuffling these in doing it again and again.
>
> **[1:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/random-forests-demo?u=76281980&t=82)** Let me cancel and go back to the workflow.
>
> **[1:25](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/random-forests-demo?u=76281980&t=85)** So as is typical in nine workflows, we have the train data going up to the equal size sample in the learner node and the test data is going directly from the partitioning node to the random forest predictor.
>
> **[1:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/random-forests-demo?u=76281980&t=103)** So the shuffling that we've discussed is happening inside the random forest learner.
>
> **[1:50](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/random-forests-demo?u=76281980&t=110)** So let's take a closer look at that.
>
> **[1:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/random-forests-demo?u=76281980&t=117)** I'll maximize.
>
> **[1:59](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/random-forests-demo?u=76281980&t=119)** Most of this is going to be pretty straightforward.
>
> **[2:02](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/random-forests-demo?u=76281980&t=122)** The target column has been declared.
>
> **[2:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/random-forests-demo?u=76281980&t=125)** You want to verify that that's correct.
>
> **[2:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/random-forests-demo?u=76281980&t=127)** It should be serious delinquency in two years.
>
> **[2:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/random-forests-demo?u=76281980&t=130)** We have numerous input variables that we can consider but if we scroll down a bit, there's some additional information that's worth mentioning.
>
> **[2:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/random-forests-demo?u=76281980&t=139)** Notice that the split criterion is information gain ratio.
>
> **[2:27](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/random-forests-demo?u=76281980&t=147)** And you'll be familiar with the idea of information gain from the previous decision tree course.
>
> **[2:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/random-forests-demo?u=76281980&t=155)** Random Forest was first proposed by Leo Breiman, the developer of CART.
>
> **[2:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/random-forests-demo?u=76281980&t=163)** So it's almost always the case that Random Forest is built up of component CART trees.
>
> **[2:53](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/random-forests-demo?u=76281980&t=173)** However if we choose this menu, we can see if we choose this menu, that have more than one choice here.
>
> **[3:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/random-forests-demo?u=76281980&t=180)** We have information gain, information gain ratio and Genie.
>
> **[3:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/random-forests-demo?u=76281980&t=186)** To remind you, Genie is the basis of CART and information gain and information gain ratio come from the C 4.5 and C5 tradition.
>
> **[3:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/random-forests-demo?u=76281980&t=199)** We'll just stick with information gain because making a selection here is not important to our current discussion of Random Forest.
>
> **[3:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/random-forests-demo?u=76281980&t=209)** However, this menu down here is important.
>
> **[3:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/random-forests-demo?u=76281980&t=213)** I can increase or decrease the number of models.
>
> **[3:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/random-forests-demo?u=76281980&t=218)** A typical value for the number of component models would be more like 50, a 100, 500 even.
>
> **[3:47](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/random-forests-demo?u=76281980&t=227)** We're doing 10 only to facilitate understanding how the algorithm works.
>
> **[3:54](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/random-forests-demo?u=76281980&t=234)** You typically would not choose the random forest algorithm and then build only 10 component models.
>
> **[4:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/random-forests-demo?u=76281980&t=241)** Normally, to really leverage the power of this algorithm, you're going to have a much larger number than 10.
>
> **[4:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/random-forests-demo?u=76281980&t=247)** You'll see why we've chosen only 10 here.
>
> **[4:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/random-forests-demo?u=76281980&t=250)** It's going to become clear in a later step.
>
> **[4:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/random-forests-demo?u=76281980&t=253)** We've made no changes, so we're going to click on Cancel.
>
> **[4:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/random-forests-demo?u=76281980&t=257)** Okay, this has been executed.
>
> **[4:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/random-forests-demo?u=76281980&t=259)** You more than likely have to execute your workflow.
>
> **[4:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/random-forests-demo?u=76281980&t=262)** Come down to Random Forest Model.
>
> **[4:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/random-forests-demo?u=76281980&t=269)** Going to repeat that step.
>
> **[4:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/random-forests-demo?u=76281980&t=270)** I'm going to right click here.
>
> **[4:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/random-forests-demo?u=76281980&t=277)** Now I'm going to right click and come down to Tree Views, maximize.
>
> **[4:47](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/random-forests-demo?u=76281980&t=287)** Okay, so we've got our tree and we can expand this a little bit.
>
> **[4:51](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/random-forests-demo?u=76281980&t=291)** It looks like our top branch is number of times 90 days late.
>
> **[4:59](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/random-forests-demo?u=76281980&t=299)** And then on the left side of the tree, it's splitting on number of times, 30 days it appears.
>
> **[5:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/random-forests-demo?u=76281980&t=306)** It's cut off but the digit three really indicates that.
>
> **[5:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/random-forests-demo?u=76281980&t=309)** And then we have debt ratio on the right hand side of the tree.
>
> **[5:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/random-forests-demo?u=76281980&t=313)** However at the top, and this is the most important thing to attend to at the moment, is that we have 10 models in total and we can actually toggle and see different versions of the tree.
>
> **[5:27](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/random-forests-demo?u=76281980&t=327)** And this one splits a number of times 60 days.
>
> **[5:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/random-forests-demo?u=76281980&t=332)** And then on the left age and then on the right, revolving utilization.
>
> **[5:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/random-forests-demo?u=76281980&t=337)** If we go to three, we have number of times 90 days late again, then 60, then 90 again and so on.
>
> **[5:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/random-forests-demo?u=76281980&t=345)** So you actually can make an effort to look at all 10 of these trees.
>
> **[5:50](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/random-forests-demo?u=76281980&t=350)** Once more, that is not the typical number.
>
> **[5:53](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/random-forests-demo?u=76281980&t=353)** Typically you have a 100 or 500 of these trees and looking at these trees is unrealistic.
>
> **[6:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/random-forests-demo?u=76281980&t=360)** But as you orient to the idea of random forest, it's actually quite interesting to look at them.
>
> **[6:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/random-forests-demo?u=76281980&t=365)** If you are surprised that the trees are a bit different, you may even believe them to be a bit more different than you anticipated.
>
> **[6:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/random-forests-demo?u=76281980&t=374)** Remember that the input variables are also being shuffled, not just the data.
>
> **[6:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/random-forests-demo?u=76281980&t=380)** So the differences between the trees are being encouraged by the algorithm and that's another motivation for wanting to look at all 10 of these trees and get a sense of just how different they are.
>
> **[6:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/random-forests-demo?u=76281980&t=393)** We'll close that and go back to the workflow.
>
> **[6:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/random-forests-demo?u=76281980&t=396)** So there you have it.
>
> **[6:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/random-forests-demo?u=76281980&t=397)** For the purpose of this course, you've identified that you can easily run random forest and nine because there's a native node to do it, the random forest learner.
>
> **[6:48](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/random-forests-demo?u=76281980&t=408)** And you've learned just a little bit about how the algorithm works, how you choose the number of component trees and then how you can view them.

> [!info]- Semantic Content
>
> **CLI Commands:** node (5), make (1)
> **Code Keywords:** let (5)
> **UI Navigation:** click on (2), scroll down (1), toggle (1), go to (1)
> **Env Vars:** cart (3)
> **Cross-References:** go back to (2)
> **Versions:** 4.5 (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### Comparing two models
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/comparing-two-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/comparing-two-models?u=76281980&t=0)** - [Instructor] Now that we've gotten a little taste of what the Random Forest Learner can do, let's discuss an important issue, which is how do we most efficiently compare two or more models on terms of performance?
>
> **[0:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/comparing-two-models?u=76281980&t=14)** Well, the workflow that we're going to use is Adv_Tree_Chapter5_Inspector.
>
> **[0:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/comparing-two-models?u=76281980&t=20)** An inspector refers to the binary classification inspector node which we'll be using in this workflow.
>
> **[0:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/comparing-two-models?u=76281980&t=28)** So when you first glance at this, perhaps it seems a little complex but it's actually pretty straightforward.
>
> **[0:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/comparing-two-models?u=76281980&t=34)** We've got our data coming in.
>
> **[0:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/comparing-two-models?u=76281980&t=36)** It's the credit data we've been using all along.
>
> **[0:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/comparing-two-models?u=76281980&t=38)** We balance, we partition, then up on the top we have Random Forest Learner and Predictor.
>
> **[0:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/comparing-two-models?u=76281980&t=44)** Down on the bottom we have Decision Tree Learner and Predictor.
>
> **[0:48](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/comparing-two-models?u=76281980&t=48)** And what makes this interesting in particular is that we would expect the Random Forest Learner is going to have an advantage because it's a more powerful algorithm or at least it's perceived that way.
>
> **[1:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/comparing-two-models?u=76281980&t=60)** But remember, as a trade off for that increased power we get a loss of transparency and that's where I'm not so sure that we can always conclude that random forest is the way to go.
>
> **[1:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/comparing-two-models?u=76281980&t=75)** So we have what we would normally think of as a more accurate algorithm in the form of random forest and then we have our transparent single decision tree and then we get to compare them.
>
> **[1:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/comparing-two-models?u=76281980&t=88)** So what the column renames are doing is that both models are generating a probability.
>
> **[1:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/comparing-two-models?u=76281980&t=94)** So we're going to add the suffix RF for random forest and we're going to add the suffix DT for decision tree so that the probabilities don't have the same name.
>
> **[1:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/comparing-two-models?u=76281980&t=105)** Then the Joiner is going to bring all of this together.
>
> **[1:48](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/comparing-two-models?u=76281980&t=108)** So if we right click on the joiner and we look at the join result and maximize that, we can see that we have our target variables series delinquency.
>
> **[2:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/comparing-two-models?u=76281980&t=121)** We have our input variables and then we have our two probabilities from one model and then from the other.
>
> **[2:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/comparing-two-models?u=76281980&t=135)** So now let's go into the Binary Classification Inspector and configure.
>
> **[2:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/comparing-two-models?u=76281980&t=140)** Our target column is series delinquency.
>
> **[2:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/comparing-two-models?u=76281980&t=143)** So we have probability 1, which is the probability of default for random forest.
>
> **[2:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/comparing-two-models?u=76281980&t=149)** We have probability one, which is the probability of default for decision tree.
>
> **[2:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/comparing-two-models?u=76281980&t=154)** And then since I haven't made any changes, I'm going to click on cancel.
>
> **[2:42](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/comparing-two-models?u=76281980&t=162)** Right click once more and we're going to do the interactive view.
>
> **[2:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/comparing-two-models?u=76281980&t=165)** By the way, don't worry about that warning.
>
> **[2:47](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/comparing-two-models?u=76281980&t=167)** That's just simply saying that we're only using 2,500 rows, so we'll make the interactive view work a little bit faster.
>
> **[2:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/comparing-two-models?u=76281980&t=177)** I'm going to maximize this.
>
> **[2:59](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/comparing-two-models?u=76281980&t=179)** Okay, so we have probability of the random forest in blue.
>
> **[3:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/comparing-two-models?u=76281980&t=185)** We have probability of the single decision tree in green and it does look like random forest has an advantage as we might expect.
>
> **[3:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/comparing-two-models?u=76281980&t=194)** Let's go ahead and click on that and we get a lot of additional information, which is really pretty great.
>
> **[3:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/comparing-two-models?u=76281980&t=199)** Noteworthy in particular, I think are the numbers we see displayed here.
>
> **[3:24](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/comparing-two-models?u=76281980&t=204)** We have 941 true positives and we have some actual ones.
>
> **[3:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/comparing-two-models?u=76281980&t=216)** So actual defaults that were predicted to be non defaults, 290 of them.
>
> **[3:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/comparing-two-models?u=76281980&t=224)** So those 290 represent actual defaults that were not predicted to be defaults.
>
> **[3:51](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/comparing-two-models?u=76281980&t=231)** That's an important number.
>
> **[3:53](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/comparing-two-models?u=76281980&t=233)** So 290 for random forest and then how many in that same category for the single decision tree.
>
> **[4:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/comparing-two-models?u=76281980&t=240)** We'll go up here.
>
> **[4:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/comparing-two-models?u=76281980&t=241)** And the number is quite a bit larger, instead of 290, it's 356 so that's a real factor.
>
> **[4:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/comparing-two-models?u=76281980&t=248)** Now, there's a lot going on in this wonderful inspector node but something in particular that I want to draw your attention to is that we make a natural assumption typically that our cutoff is going to be 0.5.
>
> **[4:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/comparing-two-models?u=76281980&t=263)** Why do we do that?
>
> **[4:24](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/comparing-two-models?u=76281980&t=264)** Because anything higher than 0.5 you have a greater than 50% chance of default.
>
> **[4:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/comparing-two-models?u=76281980&t=269)** But what happens on a lot of projects where you're working with real loans and real money is that you actually set the threshold based on a number of factors like how much risk are you able to take on in a loan portfolio and so on.
>
> **[4:48](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/comparing-two-models?u=76281980&t=288)** So let's actually scroll this up to... We'll just make the difference big enough that we'll be able to see it, maybe go all the way up to 0.9, for instance, which is changing the sensitivity profile of our model.
>
> **[5:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/comparing-two-models?u=76281980&t=306)** I'm at 0.899, but I'm not going to worry about it.
>
> **[5:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/comparing-two-models?u=76281980&t=309)** And then I'm going to go over here and change the random forest up to 0.9 as well.
>
> **[5:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/comparing-two-models?u=76281980&t=318)** You know what?
>
> **[5:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/comparing-two-models?u=76281980&t=319)** This isn't that as it turns out I land that on 0.899 there as well.
>
> **[5:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/comparing-two-models?u=76281980&t=323)** But what's interesting here is that you can see the ROC curve in the upper right hand corner is changing.
>
> **[5:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/comparing-two-models?u=76281980&t=331)** Where those squares are, but also very noteworthy and very interesting is the bars have shifted so that at this different profile, this different way of looking at the models, the single decision tree is actually outperforming the random forest.
>
> **[5:51](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/comparing-two-models?u=76281980&t=351)** That is not to say that the single decision tree is better.
>
> **[5:55](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/comparing-two-models?u=76281980&t=355)** We would have to dig a lot deeper to draw that conclusion.
>
> **[5:59](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/comparing-two-models?u=76281980&t=359)** But if we take into account a bunch of different issues like are we more worried about true positive or true negative.
>
> **[6:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/comparing-two-models?u=76281980&t=367)** What's our risk profile and what does our loan portfolio look like?
>
> **[6:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/comparing-two-models?u=76281980&t=374)** Given all of those factors, we absolutely might conclude that the decision tree is the better way to go.
>
> **[6:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/comparing-two-models?u=76281980&t=382)** Or we might decide that the random forest is a bit better but we still go with the single tree for the advantage of transparency.
>
> **[6:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/comparing-two-models?u=76281980&t=391)** However, the key point is this, it is wonderful to be able to compare two models this thoroughly and this easily in KNIME.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), this, (2), this. (1), default. (1)
> **Versions:** 0.5 (2), 0.9 (2), 0.899 (2)
> **CLI Commands:** make (3), node (2)
> **UI Navigation:** click on (3)
> **Env Vars:** roc (1), knime (1)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)
> **Warnings:** warning (1)


### 6. Advanced Tips and Tricks

> [↑ Back to Table of Contents](#table-of-contents)

#### Data reduction with random forests
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/data-reduction-with-random-forests?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/data-reduction-with-random-forests?u=76281980&t=0)** - [Instructor] I'm about to show you one of my favorite tricks and it's going to leverage the random forest algorithm for the purpose of data reduction.
>
> **[0:12](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/data-reduction-with-random-forests?u=76281980&t=12)** So first, let's be clear what workflow we're talking about.
>
> **[0:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/data-reduction-with-random-forests?u=76281980&t=16)** This is a modification of the random forest workflow.
>
> **[0:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/data-reduction-with-random-forests?u=76281980&t=21)** It's called ADV Tree Chapter Six, Data Reduction.
>
> **[0:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/data-reduction-with-random-forests?u=76281980&t=26)** So why do we need a trick to do this?
>
> **[0:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/data-reduction-with-random-forests?u=76281980&t=30)** Well, let's make the workflow more visible by closing out all the other windows except for the workflow itself and let me show you the random forest workflow.
>
> **[0:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/data-reduction-with-random-forests?u=76281980&t=44)** Again, it's right here and we've got a source node, a partition, then we build with the learner, then we have a predictor and a score.
>
> **[0:53](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/data-reduction-with-random-forests?u=76281980&t=53)** So the modification now is we're focused at the moment on just the learner and a series of nodes that have been added after the learner.
>
> **[1:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/data-reduction-with-random-forests?u=76281980&t=66)** We have a Table View, a Row Filter, and a Transpose.
>
> **[1:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/data-reduction-with-random-forests?u=76281980&t=71)** So what's the motivation for this powerful trick?
>
> **[1:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/data-reduction-with-random-forests?u=76281980&t=76)** Well, data reduction is the notion that you have to reduce the number of inputs when you have a lot of them because machine warning algorithms in general are prone to being overfit.
>
> **[1:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/data-reduction-with-random-forests?u=76281980&t=89)** So for instance, sometimes neural net is presented as an algorithm that has a tendency to overfit.
>
> **[1:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/data-reduction-with-random-forests?u=76281980&t=97)** Trees don't use all of the variables.
>
> **[1:40](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/data-reduction-with-random-forests?u=76281980&t=100)** In fact, even random forest doesn't use all the variables.
>
> **[1:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/data-reduction-with-random-forests?u=76281980&t=104)** But neural nets always use all the variables.
>
> **[1:49](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/data-reduction-with-random-forests?u=76281980&t=109)** So what if we could leverage this characteristic of trees and use it along with neural nets, where the trees help us reduce the number of variables and then perhaps only present that reduced set of input variables to an algorithm like neural net that possibly has the tendency to overfit.
>
> **[2:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/data-reduction-with-random-forests?u=76281980&t=128)** That's the premise.
>
> **[2:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/data-reduction-with-random-forests?u=76281980&t=129)** So let's take a look at how this works.
>
> **[2:12](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/data-reduction-with-random-forests?u=76281980&t=132)** We already know what the random forest learner does, but let's right click on it and go down to Attribute Statistics.
>
> **[2:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/data-reduction-with-random-forests?u=76281980&t=142)** And I'm going to maximize this.
>
> **[2:25](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/data-reduction-with-random-forests?u=76281980&t=145)** This is a really interesting aspect of random forest.
>
> **[2:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/data-reduction-with-random-forests?u=76281980&t=149)** We examined earlier the component trees.
>
> **[2:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/data-reduction-with-random-forests?u=76281980&t=154)** Well, let's see that through a different lens.
>
> **[2:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/data-reduction-with-random-forests?u=76281980&t=156)** So for instance, level zero split is the top split and three of the trees split on revolving utilization as the top split, four of the trees split on number of times 90 days.
>
> **[2:51](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/data-reduction-with-random-forests?u=76281980&t=171)** So let's leverage that then.
>
> **[2:54](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/data-reduction-with-random-forests?u=76281980&t=174)** If we only use the top split, it would be very similar to some automated data reduction algorithms that you can use in almost any machine learning platform, including platforms like 9.
>
> **[3:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/data-reduction-with-random-forests?u=76281980&t=188)** However, this is the part that always concerns me when I use those algorithms as the only method of doing data reduction.
>
> **[3:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/data-reduction-with-random-forests?u=76281980&t=198)** They're looking at one variable at a time.
>
> **[3:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/data-reduction-with-random-forests?u=76281980&t=202)** In that sense, they're greedy, using that word the same way we used it when we described that the top branch is greedy.
>
> **[3:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/data-reduction-with-random-forests?u=76281980&t=211)** So how can we overcome that?
>
> **[3:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/data-reduction-with-random-forests?u=76281980&t=213)** Well, we could take into account deeper than just the top branch.
>
> **[3:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/data-reduction-with-random-forests?u=76281980&t=217)** So I've added a Table View, and if I right click on this and go to the Interactive Table View and maximize that, we actually can check boxes off.
>
> **[3:56](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/data-reduction-with-random-forests?u=76281980&t=236)** Now, I'm doing this manually.
>
> **[3:58](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/data-reduction-with-random-forests?u=76281980&t=238)** If you really get excited about doing this in 9, you actually could develop a routine to do this.
>
> **[4:04](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/data-reduction-with-random-forests?u=76281980&t=244)** But even if you had 20 or 30 or more input variables, it would be reasonably efficient to do it this way with the check boxes.
>
> **[4:12](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/data-reduction-with-random-forests?u=76281980&t=252)** So we keep revolving utilization because it's frequently used as a top branch or as a second branch.
>
> **[4:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/data-reduction-with-random-forests?u=76281980&t=259)** But we also keep number of days 30 days.
>
> **[4:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/data-reduction-with-random-forests?u=76281980&t=262)** It's not used very often as a top branch, only 1 time out of 10, but it's used six times as a second branch.
>
> **[4:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/data-reduction-with-random-forests?u=76281980&t=270)** So note what's happening.
>
> **[4:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/data-reduction-with-random-forests?u=76281980&t=272)** We're getting at variable interactions here.
>
> **[4:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/data-reduction-with-random-forests?u=76281980&t=275)** You might even decide for that reason to include some more, but for the moment, I've only included the three.
>
> **[4:42](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/data-reduction-with-random-forests?u=76281980&t=282)** I'm going to close this now.
>
> **[4:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/data-reduction-with-random-forests?u=76281980&t=285)** And then, this is the fun part.
>
> **[4:47](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/data-reduction-with-random-forests?u=76281980&t=287)** You can see that after that now, I can add a row filter and notice that the matching criteria has been set to use pattern matching true.
>
> **[4:59](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/data-reduction-with-random-forests?u=76281980&t=299)** That means that only the check boxes are going to continue to flow.
>
> **[5:04](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/data-reduction-with-random-forests?u=76281980&t=304)** I didn't make any changes, so I can cancel.
>
> **[5:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/data-reduction-with-random-forests?u=76281980&t=306)** And then the Transpose node is going to flip those around so that when I get to the Reference Column Filter, I'm only including the columns from the previous table.
>
> **[5:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/data-reduction-with-random-forests?u=76281980&t=318)** Click on Cancel.
>
> **[5:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/data-reduction-with-random-forests?u=76281980&t=320)** So right click again, Filtered table.
>
> **[5:24](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/data-reduction-with-random-forests?u=76281980&t=324)** Isn't that something?
>
> **[5:25](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/data-reduction-with-random-forests?u=76281980&t=325)** I've got my Row ID and my three input variables reduced down from the larger list, and using merges and some other steps, I could now pass this on to a trained test partition and a neural net learner or even an auto ML node or any number of different things that I might choose to have downstream using only my best predictors.
>
> **[5:50](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/data-reduction-with-random-forests?u=76281980&t=350)** So we didn't start with a lot of predictors and we reduced it all the way down to three, so this is very simplistic example, but I think it's very powerful to use this trick of leveraging random forest for data reduction even if some other algorithm, in fact, it would be another algorithm operating downstream, as our deployed model.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), this. (2), continue (1), pass (1)
> **CLI Commands:** node (3), make (2)
> **UI Navigation:** click on (3), go to (1)
> **Definitions:** is a  (2), means that (1)
> **Analogies:** for instance (2)
> **Env Vars:** adv (1)
> **Tools:** notion (1)
> **Warnings:** warning (1)

#### The XAI view node
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/the-xai-view-node?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/the-xai-view-node?u=76281980&t=0)** - [Instructor] Now let's discuss a different trick available in KNIME.
>
> **[0:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/the-xai-view-node?u=76281980&t=5)** Also related in a way to Random Forest, but in a different sense.
>
> **[0:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/the-xai-view-node?u=76281980&t=10)** Random Forest, because of the multiple Trees, is a very powerful way to overcome some of the limitations of the greediness of a single Tree.
>
> **[0:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/the-xai-view-node?u=76281980&t=22)** However, you're eliminating this limitation while taking on a different limitation.
>
> **[0:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/the-xai-view-node?u=76281980&t=28)** That is, to gain the advantage of Random Forest, you lose transparency.
>
> **[0:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/the-xai-view-node?u=76281980&t=35)** So, what we're going to do is we're going to look at Random Forest built using the Auto M-L Component node, and then trying to overcome the lack of transparency with Explainable A-I.
>
> **[0:50](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/the-xai-view-node?u=76281980&t=50)** Let me show you how it all works.
>
> **[0:52](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/the-xai-view-node?u=76281980&t=52)** So, the workflow that I'm in is A-D-V Tree chapter six X-A-I.
>
> **[1:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/the-xai-view-node?u=76281980&t=60)** And this Global Feature Importance Component node is designed to work with the Auto M-L node.
>
> **[1:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/the-xai-view-node?u=76281980&t=69)** But let's take a look inside the Auto M-L node
>
> **[1:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/the-xai-view-node?u=76281980&t=79)** Okay, and what you discover is that we've got the same dataset we've been using all along.
>
> **[1:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/the-xai-view-node?u=76281980&t=86)** The target column, as you can see in the lower left has been declared as serious delinquency in two years.
>
> **[1:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/the-xai-view-node?u=76281980&t=92)** Again, consistent with earlier examples.
>
> **[1:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/the-xai-view-node?u=76281980&t=95)** And the only model that's been checked off is Random Forest.
>
> **[1:40](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/the-xai-view-node?u=76281980&t=100)** So, we're not using the Random Forest learner, because this new node that we're going to discuss is designed to work with the Auto M-L node.
>
> **[1:51](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/the-xai-view-node?u=76281980&t=111)** But indeed, we're just simply running Random Forest with a different node.
>
> **[1:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/the-xai-view-node?u=76281980&t=117)** So I'll cancel out of this.
>
> **[1:59](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/the-xai-view-node?u=76281980&t=119)** I also want to clarify what I mean by a Component.
>
> **[2:04](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/the-xai-view-node?u=76281980&t=124)** Notice in the help, in the upper right, it says, "this Component automatically trains".
>
> **[2:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/the-xai-view-node?u=76281980&t=130)** What do we mean by a Component?
>
> **[2:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/the-xai-view-node?u=76281980&t=133)** Well, if you right-click on this, and you go into Component - Open, you can actually see this is a very complex series of nodes.
>
> **[2:27](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/the-xai-view-node?u=76281980&t=147)** KNIME makes it very easy.
>
> **[2:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/the-xai-view-node?u=76281980&t=149)** We're just simply using the Component.
>
> **[2:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/the-xai-view-node?u=76281980&t=150)** But this is what is inside that Component.
>
> **[2:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/the-xai-view-node?u=76281980&t=154)** We won't worry about those details.
>
> **[2:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/the-xai-view-node?u=76281980&t=156)** But I wanted to draw your attention to the fact that those added details are there because you will sometimes find that workflows with a Component open and close a little bit slower, and it might be a bit mysterious what's going on.
>
> **[2:52](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/the-xai-view-node?u=76281980&t=172)** It's because all of these other nodes are being loaded, or processed, or saved.
>
> **[2:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/the-xai-view-node?u=76281980&t=177)** So, we'll go back to the main workflow, and I'm actually going to close this description, and minimize this window to give us more room.
>
> **[3:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/the-xai-view-node?u=76281980&t=186)** And I'm going to right-click on Global Feature Importance and open the interactive view.
>
> **[3:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/the-xai-view-node?u=76281980&t=195)** So remember the premise here.
>
> **[3:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/the-xai-view-node?u=76281980&t=197)** The premise is that we're using Random Forest.
>
> **[3:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/the-xai-view-node?u=76281980&t=200)** We're generating the Random Forest model using the Auto M-L Component node.
>
> **[3:25](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/the-xai-view-node?u=76281980&t=205)** But we want to understand what all of those Trees, what all of those Component Trees collectively are saying about our data.
>
> **[3:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/the-xai-view-node?u=76281980&t=215)** So what do we mean by global?
>
> **[3:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/the-xai-view-node?u=76281980&t=218)** Global means we're describing the model as a whole.
>
> **[3:42](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/the-xai-view-node?u=76281980&t=222)** So, let's say that Joe Smith applies for a loan and the loan is declined.
>
> **[3:49](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/the-xai-view-node?u=76281980&t=229)** A local explanation would be something specific to Joe Smith.
>
> **[3:55](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/the-xai-view-node?u=76281980&t=235)** But a global explanation is talking about the whole model, not just one individual.
>
> **[4:02](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/the-xai-view-node?u=76281980&t=242)** So that's the difference between global and local.
>
> **[4:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/the-xai-view-node?u=76281980&t=245)** So what this node does is runs multiple surrogate models to try to explain this overall pattern in the model.
>
> **[4:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/the-xai-view-node?u=76281980&t=257)** And it might seem a bit strange.
>
> **[4:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/the-xai-view-node?u=76281980&t=258)** We start with a single model, and then when we go to a Random Forest, we make a whole bunch of models because we're overcoming the greediness, and we're trying to increase the accuracy.
>
> **[4:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/the-xai-view-node?u=76281980&t=269)** And then we go back to a single model.
>
> **[4:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/the-xai-view-node?u=76281980&t=271)** So, what's fundamentally going on?
>
> **[4:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/the-xai-view-node?u=76281980&t=273)** Well, as it turns out, these surrogate models are not trying to predict our original target.
>
> **[4:40](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/the-xai-view-node?u=76281980&t=280)** They're actually taking the propensity score from the Random Forest, and that becomes a new target.
>
> **[4:46](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/the-xai-view-node?u=76281980&t=286)** So, we're not looking at a single Tree.
>
> **[4:49](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/the-xai-view-node?u=76281980&t=289)** We're looking at all of the Trees collectively.
>
> **[4:52](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/the-xai-view-node?u=76281980&t=292)** So, we have a surrogate G-L-M model, for instance.
>
> **[4:55](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/the-xai-view-node?u=76281980&t=295)** And we can see from the length of the bar that number of times 60, 89 days late, followed by number of times 90 days late, were the top variables.
>
> **[5:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/the-xai-view-node?u=76281980&t=307)** This isn't surprising of course.
>
> **[5:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/the-xai-view-node?u=76281980&t=308)** We know that the number of times late keeps on coming up in these models.
>
> **[5:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/the-xai-view-node?u=76281980&t=313)** And then we've got a single Tree.
>
> **[5:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/the-xai-view-node?u=76281980&t=316)** Again, it might be surprising because we started with a single Tree before we went to Random Forest.
>
> **[5:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/the-xai-view-node?u=76281980&t=322)** But this is not just one of the Trees.
>
> **[5:25](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/the-xai-view-node?u=76281980&t=325)** This is an effort to describe in a single Tree what we're seeing across many Trees.
>
> **[5:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/the-xai-view-node?u=76281980&t=331)** And we can actually see the splits from this point of view.
>
> **[5:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/the-xai-view-node?u=76281980&t=334)** We actually split on Revolving Utilization as the top variable.
>
> **[5:39](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/the-xai-view-node?u=76281980&t=339)** So, this is just a taste.
>
> **[5:42](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/the-xai-view-node?u=76281980&t=342)** There's actually an entire course dedicated to Explainable A-I that gets much deeper into the theory, and talks both global and local.
>
> **[5:52](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/the-xai-view-node?u=76281980&t=352)** But I wanted you to see this because if you go from a single Tree to an ensemble of Trees, you take on this added challenge that you've lost your transparency.
>
> **[6:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/the-xai-view-node?u=76281980&t=366)** And Explainable A-I is a whole host of techniques to try to address that lack of transparency.

> [!info]- Semantic Content
>
> **CLI Commands:** node (9), find (1), make (1)
> **Code Keywords:** let (4), this. (1), this, (1)
> **UI Navigation:** right-click (2), open the (1), go to (1)
> **Definitions:** is a  (3), is an  (1)
> **Cross-References:** go back to (2), coming up (1)
> **Env Vars:** knime (2)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### Deployment
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/deployment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/deployment?u=76281980&t=0)** - [Instructor] Let's talk about deployment and something called PMML, Predictive Modeling Markup Language.
>
> **[0:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/deployment?u=76281980&t=9)** Now deployment is a very big topic but whenever you build a model, at a minimum, you're going to want to be comfortable applying that model to new data, and you may also be curious about how to get your model out of KNIME and into something else or possibly at some point wanted to go in the reverse direction where you have a model that's been built somewhere else and you want to bring it into KNIME, so we're going to very briefly talk about those issues now.
>
> **[0:41](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/deployment?u=76281980&t=41)** So what I've done in the area at the bottom of this workflow which is called adv trees, chapter 6, PMML, what I've done is I've got a data file and a row splitter.
>
> **[0:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/deployment?u=76281980&t=57)** What the row splitter does is set aside a few dozen cases to flow down at the bottom here and not up at the top, so up at the top we have the usual column filter, partition, learner, and then we're going to talk about this score in a moment, but down at the bottom we have our original data file that we've been using all along, in this case for miles per gallon, then the row splitter is sending just 80 cases straight ahead to the PML predictor, and 320 cases or so up through the column filter for the process that we normally talk about.
>
> **[1:39](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/deployment?u=76281980&t=99)** So when we go then to here and we look at the predicted data, we have just the 80 cases that got split off by the row splitter from row 20 and higher, and we have our prediction, even though these cases did not participate either in creating the model with the train data, nor even with validating it with the test data, this was a separate 80 rows, and all we did with this is score it.
>
> **[2:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/deployment?u=76281980&t=134)** On one level, that's all there is to it, you can imitate that bottom portion of the workflow and now you know how to deploy your model.
>
> **[2:24](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/deployment?u=76281980&t=144)** Notice that the model is passing from this workflow above with the square shaped connector down to the model here.
>
> **[2:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/deployment?u=76281980&t=154)** But now let's talk about this separate issue, what I've done is I've taken the simple regression tree learner and connected it to a simple regression tree to PMML node.
>
> **[2:49](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/deployment?u=76281980&t=169)** What is that doing?
>
> **[2:51](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/deployment?u=76281980&t=171)** Well it's converting the model into this other language, PMML, which many software packages, platforms, and languages share, so you can use it to pass back and forth between different platforms.
>
> **[3:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/deployment?u=76281980&t=188)** Also, notice that there is a PML to SQL node, so let's take a look at how this all comes together, let's just take a quick look at these two languages.
>
> **[3:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/deployment?u=76281980&t=201)** This again, would be a way to get the information about your model out of KNIME and into another form.
>
> **[3:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/deployment?u=76281980&t=211)** Also, notice there's a PMML reader that could be used if you had developed a model outside of KNIME, but wanted to deploy that on new cases in KNIME, so let's take a quick look at these two languages.
>
> **[3:48](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/deployment?u=76281980&t=228)** First onto PMML, Predictive Modeling Markup Language.
>
> **[3:52](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/deployment?u=76281980&t=232)** This little bit of code represents a tiny portion of the PMML that is being exported in that workflow.
>
> **[4:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/deployment?u=76281980&t=241)** PMML is related to HTML, it has a similar look and feel and it's really quite verbose, so this is just a few lines out of what is probably a couple of hundred lines that represents everything about our model.
>
> **[4:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/deployment?u=76281980&t=257)** Alternatively, we can also export our model to SQL, in this case indirectly through PMML, and we've got some select in case when statements and you can see how this could be used to score cases on a database, for instance, even though you might not be using KNIME in that environment.
>
> **[4:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/deployment?u=76281980&t=284)** So you've created the model in KNIME, but you're deploying it outside of KNIME.
>
> **[4:49](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/deployment?u=76281980&t=289)** This is not to diminish KNIME's deployment capabilities, there is much, much more to say about what KNIME can do in regards deployment than what we've talked about here.
>
> **[5:02](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/deployment?u=76281980&t=302)** So to conclude, we've only talked about two options, but they're interesting options, one is to simply make a copy of our model down at the bottom and allow new data to flow through it, this is the standard way, this is the easiest way, but what we've also discussed is that we can export our model as PMML or to SQL via the PMML, and that allows us to take our model instructions and move it into another environment where we can do our scoring there.
>
> **[5:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/deployment?u=76281980&t=343)** And depending on the skill set and the platform usage of your team, that second option might be very helpful to you.

> [!info]- Semantic Content
>
> **Env Vars:** pmml (11), knime (10), sql (3), pml (2), html (1)
> **Code Keywords:** let (5), pass (1)
> **CLI Commands:** node (2), make (1)
> **Definitions:** is a  (2), is called (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)


### Conclusion

> [↑ Back to Table of Contents](#table-of-contents)

#### Final thoughts and recommendations
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/final-thoughts-and-recommendations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/final-thoughts-and-recommendations?u=76281980&t=0)** - [Keith] So what's the best way to continue on your journey?
>
> **[0:04](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/final-thoughts-and-recommendations?u=76281980&t=4)** I always like to recommend applying something you've learned right away.
>
> **[0:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/final-thoughts-and-recommendations?u=76281980&t=10)** An excellent option in this case is to seek out some innovative algorithms, of course, including decision tree algorithms.
>
> **[0:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/final-thoughts-and-recommendations?u=76281980&t=19)** One of the lessons of this course is that these innovations are not a thing of the past, but rather, algorithm development is an ongoing process.
>
> **[0:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/final-thoughts-and-recommendations?u=76281980&t=28)** One of the conferences that I attend is the Knowledge Discovery and Databases Conference, often just called KDD, and the concurrent sessions are just filled with recent PhD grads presenting improved algorithms.
>
> **[0:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/final-thoughts-and-recommendations?u=76281980&t=44)** Both the papers and the code are available publicly if you look, usually not on the KDD website itself, but by using KDD as a keyword in your search.
>
> **[0:56](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/final-thoughts-and-recommendations?u=76281980&t=56)** Now as mentioned in the course, there are two courses right here in the library that could be excellent next courses for you.
>
> **[1:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/final-thoughts-and-recommendations?u=76281980&t=65)** Those courses are the Producing XAI and Interpretable Machine Learning Solutions, and Mastering Ensembles and Metamodeling.
>
> **[1:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/final-thoughts-and-recommendations?u=76281980&t=75)** Also, please stay in touch by following me on LinkedIn.
>
> **[1:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/final-thoughts-and-recommendations?u=76281980&t=79)** Perhaps I'll even see you at a conference sometime soon.
>
> **[1:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/final-thoughts-and-recommendations?u=76281980&t=83)** If so, I hope you'll say hi.
>
> **[1:25](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/final-thoughts-and-recommendations?u=76281980&t=85)** Until then, good luck on your continued journey learning about machine learning.

> [!info]- Semantic Content
>
> **Env Vars:** kdd (3), xai (1)
> **Code Keywords:** continue (1)
> **Definitions:** is an  (1)
> **Speakers:** - [keith] (1)


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

### In [[Learning Codeless Machine Learning with KNIME]]
← [[Machine Learning and AI Foundations- Producing Explainable AI (XAI) and Interpretable Machine Learning Solutions]] | **5 of 5**

## Appears In

- [[Learning Codeless Machine Learning with KNIME]]

## Related Courses

_Courses sharing skills:_

- [[Machine Learning and AI Foundations- Decision Trees with KNIME]] — Artificial Intelligence (AI), Machine Learning, Decision Trees
- [[Machine Learning and AI- Advanced Decision Trees with SPSS]] — Artificial Intelligence (AI), Machine Learning, Decision Trees
- [[Machine Learning and AI Foundations- Decision Trees with SPSS]] — Artificial Intelligence (AI), Machine Learning, Decision Trees
- [[Introduction To Machine Learning With Knime]] — Artificial Intelligence (AI), Machine Learning, Knime
- [[Machine Learning with Python- Decision Trees]] — Artificial Intelligence (AI), Machine Learning, Decision Trees

---

[↑ Back to top](#)