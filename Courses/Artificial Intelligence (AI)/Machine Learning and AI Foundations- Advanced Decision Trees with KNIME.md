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
  - '[Learning Codeless Machine Learning with KNIME](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Learning%20Codeless%20Machine%20Learning%20with%20KNIME.md)'
prev_courses:
  - '[Machine Learning and AI Foundations- Producing Explainable AI (XAI) and Interpretable Machine Learning Solutions](Machine%20Learning%20and%20AI%20Foundations-%20Producing%20Explainable%20AI%20(XAI)%20and%20Interpretable%20Machine%20Learning%20Solutions.md)'
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
created: 2026-05-03
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
  - [Advanced decision trees](#advanced-decision-trees)
  - [What you should know](#what-you-should-know)
  - [Using the exercise files](#using-the-exercise-files)
- [**1. Exploring the Many Decision Tree Algorithms**](#1-exploring-the-many-decision-tree-algorithms) (3 videos)
  - [Why are trees considered greedy algorithms?](#why-are-trees-considered-greedy-algorithms)
  - [Why are there so many algorithms?](#why-are-there-so-many-algorithms)
  - [Five low node or no code options in KNIME](#five-low-node-or-no-code-options-in-knime)
- [**2. Using Extensions**](#2-using-extensions) (3 videos)
  - [Installing extensions](#installing-extensions)
  - [WEKA LMT demonstration](#weka-lmt-demonstration)
  - [Interpreting the LMT results](#interpreting-the-lmt-results)
- [**3. What Is Rule Induction?**](#3-what-is-rule-induction) (3 videos)
  - [Comparing trees and rule induction](#comparing-trees-and-rule-induction)
  - [Rule induction demo](#rule-induction-demo)
  - [Interpreting the rules](#interpreting-the-rules)
- [**4. Low Code Python Options in KNIME**](#4-low-code-python-options-in-knime) (4 videos)
  - [Low code options in KNIME](#low-code-options-in-knime)
  - [Python script node demo](#python-script-node-demo)
  - [CHAID demo in KNIME](#chaid-demo-in-knime)
  - [Advanced code options in KNIME (optimal sparse trees)](#advanced-code-options-in-knime-optimal-sparse-trees)
- [**5. Ensembles and Random Forests**](#5-ensembles-and-random-forests) (3 videos)
  - [Introducing random forest](#introducing-random-forest)
  - [Random forests demo](#random-forests-demo)
  - [Comparing two models](#comparing-two-models)
- [**6. Advanced Tips and Tricks**](#6-advanced-tips-and-tricks) (3 videos)
  - [Data reduction with random forests](#data-reduction-with-random-forests)
  - [The XAI view node](#the-xai-view-node)
  - [Deployment](#deployment)
- [**Conclusion**](#conclusion) (1 videos)
  - [Final thoughts and recommendations](#final-thoughts-and-recommendations)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Advanced decision trees](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/advanced-decision-trees?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/advanced-decision-trees?u=76281980&t=0)** - [Keith] We're about to continue the journey that began with the [Decision Trees](../../Skills/Artificial%20Intelligence%20(AI)/Decision%20Trees.md) with [Knime](../../Skills/Software%20Development/Knime.md) course. We've already learned about the two most popular and influential decision tree [Algorithms](../../Skills/Software%20Development/Algorithms.md), but there are many more options than just those two. Along the way, we'll learn more about KNIME itself. As a no code option, KNIME is very easy to learn, but there are also low code options within KNIME that open the door to many more possibilities. If it's possible with [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md), it's also possible right in KNIME and we'll be seeing how. So join me to be a more sophisticated user of KNIME and how that allows for a greater variety of algorithms, including, of course, more decision tree and rule induction algorithms using techniques like separate and conquer and random forest. We have a lot to cover, so let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Knime](../../Skills/Software%20Development/Knime.md) (6), [Algorithms](../../Skills/Software%20Development/Algorithms.md) (3), [Decision Trees](../../Skills/Artificial%20Intelligence%20(AI)/Decision%20Trees.md) (1), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **Env Vars:** knime (6)
> **CLI Commands:** python (1)
> **UI Navigation:** open the (1)
> **Speakers:** - [keith] (1)

#### [What you should know](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/what-you-should-know?u=76281980&t=0)** - [Instructor] The first course covered three major themes. Certainly watching the first course is the easiest way to get up to speed on these topics but on the chance that you are comfortable with all three of them already, here's what we covered. First, the theory behind [Decision Trees](../../Skills/Artificial%20Intelligence%20(AI)/Decision%20Trees.md) including advantages, potential weaknesses and why they're so important to machine learning. Then a thorough introduction to [Knime](../../Skills/Software%20Development/Knime.md)'s decision tree learner node, and all of the functions that would typically be used along with it in KNIME, including partitioning, balancing and scoring. Finally, we covered the theory of both CART and C4.5 and how to adjust the settings in the decision tree learner to mimic these two very influential [Algorithms](../../Skills/Software%20Development/Algorithms.md). So if you have a thorough understanding of all three of these topics, you can proceed directly with this course. But if you aren't sure, please consider taking the first course as it has been specifically designed to go before this one.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Knime](../../Skills/Software%20Development/Knime.md) (2), [Decision Trees](../../Skills/Artificial%20Intelligence%20(AI)/Decision%20Trees.md) (1), [Algorithms](../../Skills/Software%20Development/Algorithms.md) (1)
> **Env Vars:** knime (2), cart (1)
> **Cross-References:** we covered (2)
> **CLI Commands:** node (1)
> **Speakers:** - [instructor] (1)

#### [Using the exercise files](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/using-the-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/using-the-exercise-files?u=76281980&t=0)** - [Instructor] I want to make a couple of very quick comments about how to use the practice files. You're looking at a Nine Analytics platform workflow. Everything you need to know about Nine and the practice files will be explained in the course, but here's a couple of reminders. First, in Nine, you won't be opening the workflow, you'll be importing it. So you're going to be using this menu here. When you do so, it's going to appear in this local workspace area, and that's how you'll access it. The next thing I want to remind you about is data. You are going to receive a workflow for each chapter, Chapter 2, Chapter 3, and Chapter 4. Chapter 1 won't have any workflows. And you're also going to get the supporting data. However, the source node, I'm going to go ahead and open this. The source node is going to be looking for the file on my machine, not on yours. So you're going to have to use the Browse button to make sure that you've directed it to where on your machine you've put the file. And there you have it. That's all you need to know. And as you move along through the course, you'll be told what files you need and you'll also be told everything you need to know about Nine.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2), node (2)
> **Speakers:** - [instructor] (1)


### 1. Exploring the Many Decision Tree Algorithms

[↑ Back to Table of Contents](#table-of-contents)

#### [Why are trees considered greedy algorithms?](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/why-are-trees-considered-greedy-algorithms?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/why-are-trees-considered-greedy-algorithms?u=76281980&t=0)** - [Instructor] In the previous course, we discussed in general the advantages and disadvantages of decision tree [Algorithms](../../Skills/Software%20Development/Algorithms.md). We won't revisit that whole list now, except one particular disadvantage or weakness of trees, better understanding that will help us understand the goals of this course and that potential weakness is that decision tree algorithms are greedy. So, what does that mean in this context? What does it mean for an algorithm to be greedy? Well, it's more like the branches are greedy. For instance, at the top branch, the tree algorithm is trying to explain as much variance as possible. You could say, somewhat colorfully, that it wants to keep the maximum variance for itself, but the tree algorithm is unable to anticipate how that decision at that one branch will affect all of the branches that will eventually form below. Those follow-on implications are not considered in the calculations at the current branch. This phrase, "greedy algorithm," is common in machine learning and that's why I'm trying to explain it in those terms, but there's another way of thinking about it. It's as if the tree algorithm is myopic.
>
> **[1:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/why-are-trees-considered-greedy-algorithms?u=76281980&t=95)** It can see close, but not far. It can see at the current branch, but it can't see what might happen in the branches below. If you, like me, find this myopia metaphor perhaps a bit more helpful than the greediness one, then you could say that the tree algorithm can't see the big picture, but why live with this limitation? Why not just fix it? Why not just come up with a new algorithm? Well, the new ideal solution, a true big picture approach, would be to calculate all possible trees. Years ago, when tree algorithms were first developed, this would have been absolutely impossible. It's not scalable, but even on contemporary machines, a brute force approach, searching the problem space thoroughly, would be a big challenge. In this sense, it's very much like chess. All possible chess moves is too big a calculation to tackle through brute force. However, everyone, even if you don't play chess, can recognize that playing just one move at a time is risky. Well, [Decision Trees](../../Skills/Artificial%20Intelligence%20(AI)/Decision%20Trees.md) very much play one move at a time and that's perhaps the best way to to think about it. So, developers of tree algorithms have tried to come up with all kinds of different and creative ways to make the best possible decisions at each branch.
>
> **[3:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/why-are-trees-considered-greedy-algorithms?u=76281980&t=191)** In this course, we'll be going beyond the two most famous algorithms, CART and C4.5, which we discussed in the first course, and learning about some of the other approaches within the decision tree and rule induction paradigm.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Algorithms](../../Skills/Software%20Development/Algorithms.md) (5), [Decision Trees](../../Skills/Artificial%20Intelligence%20(AI)/Decision%20Trees.md) (1)
> **Analogies:** picture (2), for instance (1)
> **CLI Commands:** find (1), make (1)
> **Cross-References:** we discussed (2)
> **Env Vars:** cart (1)
> **Speakers:** - [instructor] (1)

#### [Why are there so many algorithms?](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/why-are-there-so-many-algorithms?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/why-are-there-so-many-algorithms?u=76281980&t=0)** - [Instructor] We're going to see at least briefly, a half dozen more [Algorithms](../../Skills/Software%20Development/Algorithms.md) in this course. All variations on the decision tree or rule induction theme, and that's just a small sampling of the number that exists. They're all an attempt to overcome the issue that we've just discussed, that a brute force search is not realistic, so we have to be clever about how we go about finding patterns in the data. Let's discuss just a handful of ways that these algorithms can differ. First, how the splits are chosen. We've encountered Gini and Information Gain already, but we're going to find that it's also possible to use statistical significance. The SHADE algorithm, for instance uses the K square statistic, both for split formation and also to decide when the tree should stop growing. Some algorithms have a completely different approach at the leaf node. Rather than simply choosing the mode for classification purposes, they can have a binary logistic formula or linear [Logistic Regression](../../Skills/Software%20Development/Logistic%20Regression.md) formula that's designed to specifically fit the segment identified at that leaf node. And then Ensembles use a completely different approach where there's actually multiple trees that are aggregated together. And this is just the beginning. So as we go through the course, try not to think of these algorithms as a definitive list,
>
> **[1:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/why-are-there-so-many-algorithms?u=76281980&t=96)** but rather as examples of how varied tree algorithms can be.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Algorithms](../../Skills/Software%20Development/Algorithms.md) (5), [Logistic Regression](../../Skills/Software%20Development/Logistic%20Regression.md) (1)
> **CLI Commands:** node (2), find (1)
> **Env Vars:** shade (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### [Five low node or no code options in KNIME](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/five-low-node-or-no-code-options-in-knime?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/five-low-node-or-no-code-options-in-knime?u=76281980&t=0)** - [Instructor] Some folks assume that if you've chosen a no code option like Nime, that you've essentially ruled out a full coding option like [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md), for instance. If this were true, it would pose a potential limitation because as we've seen there are numerous decision tree [Algorithms](../../Skills/Software%20Development/Algorithms.md) each with different strengths and weaknesses and the decision tree learner node, which we used in the last course, mimics just two of those algorithms. Thankfully, it's simply not true that we have to choose between no code and full code. That's because there's a feature of no code low code tools that not everybody takes advantage of. Virtually all of them, including Nime, are compatible with popular machine learning languages like Python and R so that your team members that are coders can collaborate with your team members that are not. More than that, the coders on your team can expand the capabilities of Nime by drawing from existing functionality outside of Nime and they can even completely customize options with full code when necessary. So how does it all work? Well, at the entry level, you don't need any code at all. Simply use the nodes that are available
>
> **[1:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/five-low-node-or-no-code-options-in-knime?u=76281980&t=94)** when you do a standard install of Nime. Everything we learned in the previous course fell into this category. Next, you can install what are called extensions. We'll be using this feature in the next section of this course. You don't need any coding knowledge to do this. You simply download Nime nodes that members of the Nime community have contributed. Next, you can use a Python script node to access popular Python libraries with as few as a couple dozen lines of code. A bit more elaborate option is what is called a Conda environment propagation node. Here Conda is a variant of Anaconda and we'll have more to say about that later. This requires installing and setting up Python on your machine and will require a team member that is comfortable with coding. We'll see a bit more about how this all works later on in the course. Finally, you can use Python to write a customized solution and produce your own extension. We'll say a little bit more about this later, but we won't be doing a full demonstration of this most elaborate option. So how should this fit into your team's strategy regarding [Decision Trees](../../Skills/Artificial%20Intelligence%20(AI)/Decision%20Trees.md) and collaboration?
>
> **[3:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/five-low-node-or-no-code-options-in-knime?u=76281980&t=189)** The overall advice is this. Don't feel limited to the standard download in a tool like Nime. If you find the decision tree algorithm that you think may be a good fit for your project, explore your options. Think of it also as a team effort. Coders and non coders can use a no code low code option as a platform for collaboration. And even if the entire team is composed of coders, you may find that you can more rapidly prototype using a tool like this. And also, the results will be in a form that management can more easily follow. Visual programming after all, is nearly self-documenting, even for non-users. And if you add a few annotations, it makes it even easier to read.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (6), [Algorithms](../../Skills/Software%20Development/Algorithms.md) (2), [Decision Trees](../../Skills/Artificial%20Intelligence%20(AI)/Decision%20Trees.md) (1)
> **CLI Commands:** python (6), node (3), find (2)
> **Definitions:** is called (1), is a  (1)
> **Prerequisites:** install (2)
> **Cross-References:** in the last (1)
> **Tools:** anaconda (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)


### 2. Using Extensions

[↑ Back to Table of Contents](#table-of-contents)

#### [Installing extensions](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/installing-extensions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/installing-extensions?u=76281980&t=0)** - Okay, here we are in [Knime](../../Skills/Software%20Development/Knime.md). And this is what Knime looks like when you first launch it. I haven't opened any workflows or started working at all. This is a clean slate. Okay, so the very first thing we're going to do is use a extension to build a decision tree. The name of the algorithm happens to be lmt so I'm going to go down to the node repository and type lmt. Okay. It has found this node more recent version here as lmt 3.7. It has found this on my implementation of Knime. However, there is a very good chance that your version of Knime doesn't have this node. And the reason is that it's not a default download, it is an extension. So I want to show you how to do that. I'll get rid of this for now so that we can search again in a moment. I'm going to go up to Knime, file, install Knime extensions. Okay? I'm going to maximize this so that you can see it clearly. We could go searching around for the extension that we need but I have found these extensions to be extremely helpful. I urge you just to install all of them.
>
> **[1:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/installing-extensions?u=76281980&t=95)** So I'm going to click on select all but my version of Knime and my extensions are up to date so it's not inviting me to click on finish because I already have all of these. You're going to want to click on finish. I'm going to click on cancel. Okay. So we go back in here, and now when you type lmt again you'll be able to find this and this is the node that we need. But when we do the demonstration in the next video, I'm going to be providing a completed workflow so we don't have to start with an empty workflow and drag this into place. I've already assembled all the pieces that you'll need.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Knime](../../Skills/Software%20Development/Knime.md) (7)
> **CLI Commands:** node (4), find (1)
> **UI Navigation:** click on (3)
> **Definitions:** is a  (2), is an  (1)
> **Prerequisites:** install (2), you'll need (1)
> **Versions:** 3.7 (1)
> **Cross-References:** in the next (1)
> **Speakers:** - okay (1)

#### [WEKA LMT demonstration](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/weka-lmt-demonstration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/weka-lmt-demonstration?u=76281980&t=0)** - [Instructor] Okay, we're right back where we left off. So you have two options for all of our examples actually. You're going to have two options for where to get the workflow. You can either use the [Knime](../../Skills/Software%20Development/Knime.md) hub or you can go to the examples folder, download all the workflows, and import them into Knime. I'm going to go ahead and show you using the Knime Hub but you're welcome to do it either way. If you're going to use the Knime hub, you know you have to sign up and so on, but it is a convenient way to access the workflows. You can do it either way. So I have a folder, advanced trees with Knime, here, and the example that we're going to want is chapter two LMT. So I'm going to double click on that. And since we're going to focus on that, I'm going to go ahead and minimize all of these other [Windows](../../Glossary/Service/Windows.md).
>
> **[1:02](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/weka-lmt-demonstration?u=76281980&t=62)** I'll keep the description for the time being but I'll get rid of the outline and I'll get rid of the log here. So you can see in the description for LMT that I'm going to read this section here, but you should be able to see this on your screen as well. You can see here that it's a classifier for building logistic model trees which are classification trees with [Logistic Regression](../../Skills/Software%20Development/Logistic%20Regression.md) functions at the leaves. What I'm going to do is first, I'm going to show you how the workflow works. It should be already quite familiar to you, and then in the next video, I'm going to walk you through the output. So for the time being, we're just going to focus on the workflow. So we have a data file that if we go to configure here, I want to remind you, maximize that, I want to remind you that you want to make sure the data file and this is the give me credit data set, that the path is consistent with your machine because chances are your path is not going to be desktop for Keith McCormick. So you want to check that path and make sure that works. Also, when you run into trouble, the most common reason I find in Knime to run into trouble with parsing files is if there's something that's different about how the variables have been declared
>
> **[2:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/weka-lmt-demonstration?u=76281980&t=156)** in terms of string, and integer, and so on. So if you run into trouble, I would check in those two places, the path and the variable declarations, but I'm providing the workflow for you. Okay, so here we are, and we're using a partitioning node, an equal size sampling, just like we did in the previous course. Nothing new here. This actually looks very similar to the workflows that we would have used in the other course, but I do want to take a look at the column filter with you to keep this example simple because the output generated is a bit complicated. I'm using only three variables, serious delinquency in two years, revolving utilization of unsecured lines, and number of times 90 days late. Only those three. In a real world situation, of course, you'd want to use as many variables as you thought were appropriate, but I'm really only doing this to simplify the output. So I'll go ahead and click on cancel since I've made no changes. And here is the LMT node. I'll go in there. The most important thing to verify is that the target variable is serious delinquency in two years. Click on cancel. All of these have been executed. You may find that you have to execute them on your workflow. I'm going to go ahead and right click on this again
>
> **[4:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/weka-lmt-demonstration?u=76281980&t=253)** but go down the trained model. And here we go. As I warned you, the output at first seems to be pretty complicated, but it's pretty straightforward, and we're going to [Zoom](../../Skills/Software%20Development/Zoom.md) in and talk about this in more detail on the very next video. So the first rule is just this much of the tree which is at the top of this output. It says, revolving utilization is less than a equal to 0.42 and number of times 90 day late is less than a equal to zero, and then it has LM 1. What it's done is that is the first leaf node. It segmented one portion of the data. It happens to be 7,520 cases, by the way, but it's segmented one portion of the data and it has different formulas down here for each of those segments. So what we're going to take a look at next is the formula associated with just that first leaf node, just the first two rows and just class one. Class one are the ones are the defaults. So we'll find out what characteristics the defaults have for that first segment, and we'll do that next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Knime](../../Skills/Software%20Development/Knime.md) (6), [Windows](../../Glossary/Service/Windows.md) (1), [Logistic Regression](../../Skills/Software%20Development/Logistic%20Regression.md) (1), [Zoom](../../Skills/Software%20Development/Zoom.md) (1)
> **CLI Commands:** node (4), find (3), make (2)
> **UI Navigation:** click on (4), go to (2)
> **Env Vars:** lmt (3)
> **Cross-References:** in the next (1), next video (1)
> **Definitions:** is a  (2)
> **Analogies:** just like (1), similar to (1)
> **Versions:** 0.42 (1)

#### [Interpreting the LMT results](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/interpreting-the-lmt-results?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/interpreting-the-lmt-results?u=76281980&t=0)** - [Instructor] So now, let's talk about the [Logistic Regression](../../Skills/Software%20Development/Logistic%20Regression.md) formula. We won't go deeply into this topic, but I want you to have some comfort with the output we just generated using the very interesting LMT algorithm. So I'm going to make the assumption that you probably have had some exposure to [Linear Regression](../../Skills/Data%20Science/Linear%20Regression.md) but possibly are less familiar with logistic regression. However, I actually have an entire course dedicated to regression in the library. And if you wanted to go a little bit deeper on either the linear regression formula or the logistic formula, you could do so in that course, even if you didn't want to watch the entire course. So let's talk about how the logistic formula is a bit different than the linear one. So the linear regression formula is very much like the equation of the line that most of us encounter in algebra. We're usually told Y = MX + B, where B is the Y intercept and M is the slope. So in regression, the formula is similar but with different nomenclature, Y = beta 0 + beta 1*X1, and so on, where beta 0 is the Y intercept and we have beta 1 x X1. So what's going on with the LMT algorithm? Well, the concept is, what if we could segment our data
>
> **[1:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/interpreting-the-lmt-results?u=76281980&t=96)** and then build a different formula for each segment? By customizing the formula to the segment, would the formulas be more accurate? That's the concept, and I think it's actually a very clever way of combining logistic with trees. So in logistic, what we do is we take that linear formula, but we do the log of odds of the linear formula. So when we go to make predictions based upon our formula, we get this formula at the bottom of the slide, which admittedly looks a little complicated at first. 1 over the quantity, 1 + e to the negative power, and then all these additional things. Well, if you look carefully at that part of the formula within the parentheses there, you actually find that it's very similar indeed to the linear formula. So what we really have is we have the log of odds, and then we're basically doing the antilog on the back end. So what's going on? Well, the reason we're taking the log is to flatten the curve at 0 and 1, 'cause you see with logistic, we're trying to make a prediction and we don't want a prediction that's bigger than 1 or smaller than 0, 0 being a low [Probability](../../Skills/Data%20Science/Probability.md) and 1.0 being a high probability. So think about this in the context of our risk example. It's actually pretty clever
>
> **[3:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/interpreting-the-lmt-results?u=76281980&t=188)** because we're coming up with different risk segments, and each of those risk segments generates a different risk probability that's customized to them. So with that in mind, if you take that output, at the top of the slide here, we have the two criterion that put folks in the first leaf node. It's based upon their RevolvingUtilizationOfUnsecuredLines, and it's also based on the NumberOfTimes90DaysLate. So once you find yourself in that segment, then you take the numbers from the nine workflow and you plug them into the formula, and we can predict the probability of risk for any member of this first leaf node by plugging in their values into the formula at the bottom of the slide.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Probability](../../Skills/Data%20Science/Probability.md) (4), [Linear Regression](../../Skills/Data%20Science/Linear%20Regression.md) (3), [Logistic Regression](../../Skills/Software%20Development/Logistic%20Regression.md) (2)
> **CLI Commands:** make (3), find (2), node (2)
> **Env Vars:** lmt (2)
> **Versions:** 1.0 (1)
> **Cross-References:** coming up (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 3. What Is Rule Induction?

[↑ Back to Table of Contents](#table-of-contents)

#### [Comparing trees and rule induction](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/comparing-trees-and-rule-induction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/comparing-trees-and-rule-induction?u=76281980&t=0)** - [Instructor] We've been very much focused on [Decision Trees](../../Skills/Artificial%20Intelligence%20(AI)/Decision%20Trees.md). And we've seen how easily decision trees can be converted into rules. So you may have gotten the impression that it's the only strategy for rule induction. It's not true. Decision trees use a strategy called divide and conquer, but there's another strategy called separate and conquer. Let's revisit how trees work, but from a different point of view. Imagine that all of the data in your root node is represented by this rectangle. The top branch divides the root node into two, at least in the case that you're doing a binary split. So you end up with territory that represents the left branch, but also the right branch. As the tree algorithm continues, it further subdivides. Both on the left, and then also subdividing on the right. In fact, you may have encountered this type of chart in data visualization software. It's called a tree map. You end up with numerous, non overlapping territories, that represent the same segments that a leaf node would. As an added detail, it's quite common, in these tree maps, to apply heat and make it a heat map. With high or low concentrations, with some target variable, like loan default being revealed through the heat map.
>
> **[1:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/comparing-trees-and-rule-induction?u=76281980&t=96)** But that's not the only way to do it. In so-called separate and conquer, we find the rule that does the best job at explaining the variance in our target, but it's not the same as a left and right branch. We instead have the area that's described by the rule, perhaps with multiple variables, by the way, and then the area that is not explained by the rule. Then we proceed to search only the remaining area for the second rule. And here is a critical detail. The second rule might overlap with the first rule, but we don't worry about that, because we make sure when we're doing separate and conquer to keep our rules in order and to execute them in order at deployment. So tree rules never overlap, but separate and conquer rules almost always do. So let's recap the differences. Trees use the divide and conquer strategy. Rural induction uses separate and conquer. In trees, the rules do not overlap. They are mutually exclusive. Separate and conquer rules can, and often do, overlap. Once you produce your tree and produce rules based on your leaf nodes,
>
> **[3:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/comparing-trees-and-rule-induction?u=76281980&t=191)** you can execute the rules in any order. Separate and conquer rules, since they may overlap, must be ordered and must be executed in order. So let's try a separate and conquer style algorithm in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Decision Trees](../../Skills/Artificial%20Intelligence%20(AI)/Decision%20Trees.md) (3)
> **CLI Commands:** node (3), make (2), find (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### [Rule induction demo](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/rule-induction-demo?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/rule-induction-demo?u=76281980&t=0)** - Okay, the workflow we'll be using is ADV Trees, Chapter 3, Rule Induction. And the node that we're going to try is the M5Rules node. And you can see here in the description that it generates a decision list for regression problems. So, we're going to be using the miles per gallon data, not the credit data, because we have a scale target variable and it generates a decision list for regression problems using separate and conquer and give some references. I'm going to actually close that now so we can see what we're doing a little bit better. Also notice that this happens to be implemented with Weka. So it requires the extensions that we've seen. So there's also a Weka predictor node as well as a numeric score. Note, numeric score, not simply score. Again, because of our scale target. So let's take a look inside the settings for the M5Rules node. And double check that you have the right target variable, should be miles per gallon and the attributes that are being allowed to flow to this node are horsepower, weight, acceleration and our target miles per gallon.
>
> **[1:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/rule-induction-demo?u=76281980&t=93)** So only three, not the entire data set, to keep it simple. Let's click on cancel, then this has already been executed. You will likely have to execute your workflow. And I'm going to go down here to the trained model. Maximize that. And up at the top it indicates that we have six rules. Then it has rule one, and we're going to take a closer look at these rules in the next video and talk about what this model is telling us about the miles per gallon data set.

> [!info]- Semantic Content
>
> **CLI Commands:** node (5)
> **Env Vars:** adv (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** click on (1)
> **Speakers:** - okay (1)

#### [Interpreting the rules](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/interpreting-the-rules?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/interpreting-the-rules?u=76281980&t=0)** - [Instructor] Okay, let's talk about the rules that we generated. There's only six rules, so we're going to take a look at all six of them, and I think you'll really better understand the pattern that way. So remember that in separate and conquer, we're trying to identify a rule which might have multiple variables. This rule has multiple variables involved in it. And cases either fit the rule or they're in the leftovers, so to speak. And then we systematically address those leftovers as we do additional rules. The notion that we have ordered rules here is very important. In fact, what you'll find if we skip ahead a little bit is that this rule fits 139 cases. The second rule applies to 121 cases and then 42 and then five, and then four, and then only two. And that's the pattern you expect to find with separate and common because you're trying to explain as much variance as possible at the top, and then you're chipping away at the data in this ordered set of rules. So rule one says that if the weight of the vehicle is greater than 2920 pounds, then we apply the following regression formula with a coefficient for horsepower and a coefficient for weight and a coefficient for acceleration and then the plus 29.67
>
> **[1:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/interpreting-the-rules?u=76281980&t=97)** is the Y intercept or the beta zero. Let's take a look at rule two. Rule two is not related to weight. Rule two is if horsepower is greater than 70.5, and then we have a regression formula for that. I think you can see how you could have a particular weight and a particular horsepower and that those, in fact, could overlap. As we continue working through the rules, it will become even more clear that we have overlap. Let me show you why. In rule three, the rule applies if acceleration is less than or equal to 20. And then we have a formula that really just a beta zero. But then the fourth rule is if acceleration is less than or equal to 21.25, clearly under 21.25
>
> **[2:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/interpreting-the-rules?u=76281980&t=157)** overlaps with the previous rule, under 20. So it's very important that you remember that these are in order. It really is a different strategy than the decision tree strategy of divide and conquer. Moving down to rule five, we're back to horsepower again. And this formula has more than just a y intercept, more than just a beta zero, it also has a coefficient for horsepower. But then, and this is a bit of a punchline for us, rule six doesn't have an if. It doesn't have a then. It simply says miles per gallon equals 23.75. It only applies to two cases. But why is there no rule? What's going on? Well, remember, this is an ordered set, so by the time we get to rule six, it basically is all the cases for which the previous five rules did not apply. So there you have it. Separate and conquer truly is a completely different strategy than the divide and conquer strategy that we see in [Decision Trees](../../Skills/Artificial%20Intelligence%20(AI)/Decision%20Trees.md).

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Decision Trees](../../Skills/Artificial%20Intelligence%20(AI)/Decision%20Trees.md) (1)
> **Versions:** 21.25 (2), 29.67 (1), 70.5 (1), 23.75 (1)
> **Definitions:** is a  (3), is an  (1)
> **CLI Commands:** find (2)
> **Tools:** notion (1)
> **Speakers:** - [instructor] (1)


### 4. Low Code Python Options in KNIME

[↑ Back to Table of Contents](#table-of-contents)

#### [Low code options in KNIME](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/low-code-options-in-knime?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/low-code-options-in-knime?u=76281980&t=0)** - [Instructor] Now it's time to talk about [Knime](../../Skills/Software%20Development/Knime.md)'s powerful low code and even full code options. There are three of them, and we're going to see some examples. In the next video, we're going to be working with the workflow that you see. But in the current video, we're just going to talk about the options in a little bit more detail, and we're going to talk about setup and installation when necessary. So the [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) Script Lab node, is going to allow you to use Python code without an elaborate installation, and we're going to see an example of this. The Conda Environment Propagation node allows you to use a wider variety of Python resources, but does require an installation and setup step. Finally, in a detailed discussion of this third option is beyond the scope of the course, but there is a third option, and that's a full code option, but that would actually require creating your own extension node using Python. So let's go into some supporting materials and see how these three options work. The Python Script node, the Conda node, and then again, very brief mention, of the extension option. This is the KNIME Python integration guide.
>
> **[1:40](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/low-code-options-in-knime?u=76281980&t=100)** And note that it's for version 4.6. There are some new Python features as of that KNIME version. So remember that our first option was the Python scripting node. So if we scroll down a little bit, there's a phrase here that I want to read to you because it's very important, starting with version 4.6. "This convenience allows for using the Python Script node without installing, configuring, or even knowing environments." What does that all mean? It means that when you install KNIME 4.6, you're getting some Python functionality simply by installing KNIME. And that's going to be the basis of our first example using the Python Script node. The Conda node is really quite different. So the whole idea of the Conda node is that you get added functionality, but you have to do an additional install. You may be wondering what Conda's referring to and you may have heard of Anaconda. It's all related as you might guess. So if we scroll down, I want to point out that if you look in the documentation, you may be led to believe that you need to install a new Conda environment. I want you to be cautious about this because it may or may not be true. If you're going to be the developer on the team, and you're going to be creating a new Conda node,
>
> **[3:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/low-code-options-in-knime?u=76281980&t=196)** then yes, you have to do this. However, if you are the practitioner on the team, you don't do this step. That is done by your colleague, who's the Python programmer, if you yourself are not a Python programmer. We'll see more about that and it will become more clear. Finally, I want to scroll down to the step that everybody's going to have to do, and we're going to see this in KNIME. Everyone, whether or not you're the Conda developer or the Conda user, you're going to have to download Miniconda. And then you're going to have to tell KNIME your installation directory for Conda. And again, we're going to be seeing this in the KNIME interface in a couple of videos. Finally, I want to make brief mention of the most ambitious option of all, and that's creating your own KNIME extension. KNIME has some documentation specifically for this, create a new Python-based KNIME extension. You might wonder what's new about this. Well, what's new and actually a bit exciting is that as of 4.6, you can do pure full Python code without having to write [Java](../../Skills/Software%20Development/Java.md). Why would Java have ever been a requirement?
>
> **[4:51](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/low-code-options-in-knime?u=76281980&t=291)** Well, the KNIME nodes are written in Java. So until version 4.6, what you had to do, is you had to bring in your Python code if you desired, and then essentially wrap Java around it to allow you to interact with the other nodes in KNIME. And now they've made that easier. But of course, easier is relative. If you are not a Python programmer, this is not going to be an option for you. However, if you are a KNIME [Data Science](../../Topics/Data%20Science.md) team, and you've got some folks that are coders and some folks that only use KNIME, this is a powerful option. Because you can add just about any functionality you want by bringing in the necessary Python code. But keep in mind this is going to be a fairly elaborate undertaking and you're definitely going to need some members of the team that consider themselves to be developers. So now let's revisit the simplest of those three options. The Python Script node.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (19), [Knime](../../Skills/Software%20Development/Knime.md) (15), [Java](../../Skills/Software%20Development/Java.md) (4), [Data Science](../../Topics/Data%20Science.md) (1)
> **CLI Commands:** python (19), node (12), make (1)
> **Env Vars:** knime (15)
> **Versions:** version 4 (3), 4.6 (2)
> **Prerequisites:** install (3), setup (2)
> **UI Navigation:** scroll down (3)
> **Definitions:** is a  (2), means that (1)
> **Warnings:** note that (1), keep in mind (1)

#### [Python script node demo](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/python-script-node-demo?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/python-script-node-demo?u=76281980&t=0)** - [Instructor] Okay, here we are in the [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) script node workflow. The name of the workflow is Advance Tree Chapter Four Python Script Node. Advance Tree Chapter Four Python Script Node. Now remember, this is the easiest option. We don't have to worry about Miniconda. We don't have to worry about an installation directory. We just have to download [Knime](../../Skills/Software%20Development/Knime.md). However, it is a Python script node, so we do need some Python. Let's orient ourself to the workflow. We read in our data. We balance and partition as usual. Then, we have a Python script node that's acting like our learner, and we have a Python script node that's acting like our predictor, and we have a scorer. In fact, we can actually go down to the Confusion matrix and actually see that everything is behaving the way that it normally would. Let's talk a little bit about what this Python script node does and how it does it. I'm going to right-click and configure. I'll orient you to this. What we've done is leveraged some of the most common and popular Python libraries for machine learning, and popular Python libraries for machine learning, [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) and NumPy. Because of that, because we're using standard libraries, we don't have to do any elaborate install. The best way to orient yourself to this, and keep in mind this is only going to be helpful
>
> **[1:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/python-script-node-demo?u=76281980&t=95)** if you know a little bit of Python, is to take a look at the templates. If you're not a Python user, remember that this might be a collaborative effort where a member of the team helps you with the Python, but that once this is set up, you use it in a Knime workflow much like you would any other node. The template explains how you're going to bring the data in, into a form that Knime can manipulate it. Then, how to go about the processing step. Here is where you have to require the most of your own work. Then finally, how to handle the output back out to Knime. The best way to think of the template, I think, is that it's really helping you with the input and output part. Now, let's go to the actual script. We see that we have input into the knime_io. We see that we have input into the knime_io. Then, we're also bringing in sklearn. Note import pickle. A pickle object is going to be how we're going to send information from our Python node back out to Knime, but in the next couple of lines, notice there's an explicit reference to serious delinquency in two years, because we're declaring our target in our input variables in these steps. I'm not going to go deeper into the Python now. I just wanted to orient you to the kinds of steps that are taking place.
>
> **[3:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/python-script-node-demo?u=76281980&t=190)** Click on Cancel. If we take a look into this other node, we can see that we're now pushing out the results of the model into new columns, [Probability](../../Skills/Data%20Science/Probability.md) and prediction. of the model into new columns, probability and prediction. Now, I'm going to cancel out of this because we didn't make any changes. Something that you may find helpful to orient yourself is that if you right-click on these nodes, and you go down to Add ports or Remove ports and so on, notice to Add ports or Remove ports and so on, notice that an input port to this second node is the pickle object. That's how things are being passed back and forth. I think that's as much detail as you need to know for now, because our goal for this video is to know that this Python script option is available. It actually allows you to bring in an alternative decision tree implementation in this case, to see if the performance of the sklearn version is perhaps different than the Knime version and so on. This is a powerful, new feature, easier than it's been in the past, and maybe helpful if you want to access a greater diversity of [Algorithms](../../Skills/Software%20Development/Algorithms.md).

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (16), [Knime](../../Skills/Software%20Development/Knime.md) (6), [Probability](../../Skills/Data%20Science/Probability.md) (2), [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) (1), [Algorithms](../../Skills/Software%20Development/Algorithms.md) (1)
> **CLI Commands:** python (16), node (11), make (1), find (1)
> **UI Navigation:** right-click (2), go to (1), click on (1)
> **Prerequisites:** configure (1), install (1), set up (1)
> **Code Identifiers:** knime_io (2)
> **Exercise Files:** template (2)
> **Definitions:** is a  (2)
> **Cross-References:** in the next (1)

#### [CHAID demo in KNIME](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/chaid-demo-in-knime?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/chaid-demo-in-knime?u=76281980&t=0)** - [Instructor] For this example we're going to talk about the CHAID algorithm. So where did I find CHAID? Well, I found it here in the PYPI library. So it's not in SK Learn. So we're not able to use a [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) script node but this library is one of the libraries that's supported by a Conda node. So at the heart of this example we'll be talking about how to access that greater variety of [Algorithms](../../Skills/Software%20Development/Algorithms.md) using what nine calls the Conda node. But CHAID is an interesting topic in and of itself. So let me share with you a couple of quick observations about CHAID. So CHAID stands for Chi-Square Automatic Interaction Detection. And you may have encountered that phrase Chi-Square in [Statistics](../../Skills/Data%20Science/Statistics.md), you know people talk about an F test or a T test. Well, there's such a thing as a chi-square test as well. So CHAID uses P values, you know those above or below 0.05 values, it uses those for merges and splits. Now, this is one of the older algorithms. It came out in 1980, about four years before CART did but it's based upon an older algorithm that was simply called AID that goes back, I believe, to the seventies.
>
> **[1:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/chaid-demo-in-knime?u=76281980&t=96)** So it's been around for quite a while. Not everyone would believe that using P values would be the best way to grow a tree these days. However, at the time it was a lot faster than CART because calculating P values is better than calculating genie. But why would we consider CHAID now? Well, the quick answer is if it's sufficiently different from CART and C5 that it sometimes disagrees. It becomes very interesting to know if when it disagrees it's right and CART or C5 might be wrong. So in other words, we would anticipate that CART and C5 would generally be more accurate than CHAID. That's why they're so popular. But that doesn't mean it's not interesting to know when CHAID disagrees with those other algorithms. In other words, we don't want to assume that CART and C5 are better for all types of cases and all types of situations, not only at the global level, but in the instance of interesting individual cases that might encounter a C5 or CART blind spot. So how is it different? It's different and then it produces wide splits. You may recall that CART always produces binary splits. C5 sometimes does, sometimes doesn't, depending on the type of variable that's being split.
>
> **[3:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/chaid-demo-in-knime?u=76281980&t=190)** But CHAID always produces wide splits. So that's an important difference and it can actually come in handy if you have complex categorical variables with lots of different categories. CHAID often will divide that up differently than a binary split algorithm like CART might. Also, and I think this is a valuable difference. CHAID treats missing as a different category. So when I have a large amount of missing data I often want to try CHAID to see what CHAID does with all of those missing cases. So the strong contrast with CART and C5 is itself a valuable thing. So the fact that it will sometimes disagree with CART and C5 is in and of itself interesting because I might look for those instances when they disagree and find out when CHAID actually was the better choice during those times of disagreement. So let's see how this all comes together. Here we are in nine, but we're in the preferences. And I want to remind you of something that we talked about when we talked about the Conda installation requirements. But I want to show you here. So if we go to nine and we go down to Conda, here's the key place. Now it's pointing to the location on my drive.
>
> **[4:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/chaid-demo-in-knime?u=76281980&t=283)** You have to make sure that it's pointing to the correct place, but there's a browse button to do it. That's all you need to do for the Conda node as a practitioner. If you are developing the Conda node, you have an extra step. But if you are using a Conda node that was developed by a colleague, and that's what we'll be demonstrating now this is the only step you have to do. I'm going to go ahead and click on cancel. And here is the workflow. This has been provided for you. The workflow name is Adv Trees chapter four Conda CHAID. So we notice a node that we haven't used before. We've mentioned it, but we haven't actually seen it in a workflow being used. And that is this node. So I'm going to right click on that. It's referring to a Conda environment instance PY3 [Knime](../../Skills/Software%20Development/Knime.md) CHAID. That step was done by the person who created this conda node. So if you are the user, the end user of this you don't have to do any steps related to that except to open the workflow that has been created. And that's also true in this instance. As long as you install Conda and you make the changes and preferences that we just saw all you have to do is open and use this workflow.
>
> **[6:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/chaid-demo-in-knime?u=76281980&t=378)** You don't have to create the conda environment that step has been done for you. So I'll click on cancel. We have the same data file we've been using all along. We've got a row sampler here in lieu of a partition node, and that prompts me to mention something that's kind of important. Remember that we're not really running knime now we're running Python. And specifically we're running a CHAID algorithm that was written by a third party as part of that library that we're accessing through conda. So you want to be careful about assuming that Standard knime nodes will always work along with this like a score node or what have you. But this node is a Python script node. And let's open this. This is behaving very much like nearly exactly like frankly the learner node in the previous Python example. The difference is that we're importing CHAID from that Conda node. We're bringing in the CHAID functionality from that Conda node. Otherwise, this node is very similar to the previous example. I'll go ahead and click on cancel. I'm going to right click and look at the resulting table. And we see that we have a column of predictions
>
> **[7:54](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/chaid-demo-in-knime?u=76281980&t=474)** and that would be sufficient to determine when CHAID agrees with or doesn't agree with other choices that we might consider like CART and C4.5 using a decision tree learner. And in my experience, it can be very interesting to look at those points of disagreement. When did CHAID disagree with CART? They'll agree most of the time but those points of disagreement are very interesting as you try to fine tune your model.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (4), [Algorithms](../../Skills/Software%20Development/Algorithms.md) (3), [Knime](../../Skills/Software%20Development/Knime.md) (3), [Statistics](../../Skills/Data%20Science/Statistics.md) (1)
> **Env Vars:** chaid (22), cart (13), pypi (1), aid (1), py3 (1)
> **CLI Commands:** node (17), python (4), find (2), make (2)
> **UI Navigation:** click on (4), go to (1), open the (1)
> **Definitions:** in other words (2), is a  (2), is an  (1)
> **Cross-References:** we talked about (2)
> **Versions:** 0.05 (1)
> **Warnings:** be careful (1)

#### [Advanced code options in KNIME (optimal sparse trees)](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/advanced-code-options-in-knime-optimal-sparse-trees?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/advanced-code-options-in-knime-optimal-sparse-trees?u=76281980&t=0)** - [Instructor] A full demonstration of creating a [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) extension really belongs in a programming course and not a course on [Decision Trees](../../Skills/Artificial%20Intelligence%20(AI)/Decision%20Trees.md). But I'd like to briefly engage in a thought experiment with you. Imagine for a moment that you're attending a conference and you hear the authors discuss an algorithm called Optimal Sparse Decision Trees. And you get intrigued and you look at the abstract and you find out that actually it's trying to deal with the fact that decision tree [Algorithms](../../Skills/Software%20Development/Algorithms.md) are often greedy or myopic and sometimes produce suboptimal models. And you continue to read and you're more and more intrigued and you wonder how to implement this. So, you discover that not only is there a full paper there's also a [GitHub](../../Skills/Software%20Development/GitHub.md) and the code is there. So how do you leverage something like this? Even if you're a team that is using a no-code, low-code option like nine. Well, because this code was developed as part of presenting a paper at a conference you're not going to find it in something like SK Learn. You're not going to find it in a Miniconda download. But now that you can use Python and not just the combination of Python and [Java](../../Skills/Software%20Development/Java.md),
>
> **[1:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/advanced-code-options-in-knime-optimal-sparse-trees?u=76281980&t=97)** if you have a Python programmer on your team you potentially could create a whole new extension in order to do this. Now, the amount of work would be non-trivial but the way that extension node would behave is just like the LMT node that we saw in an earlier video that was implemented through a WECA extension node. So this is a powerful option and what I encourage you to do is to seek out papers like this paper on Optimal Sparse decision Trees. Even if you don't implement the algorithm I think it's very helpful to know what the cutting edge researchers are doing, even with techniques that we think have been finalized years ago like decision trees. By the way, Cynthia Rudin and her team at Duke have produced consistent great work over recent years, and this is one of their specialty topics, advancing the approaches in contemporary decision tree algorithms.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (4), [Decision Trees](../../Skills/Artificial%20Intelligence%20(AI)/Decision%20Trees.md) (4), [Algorithms](../../Skills/Software%20Development/Algorithms.md) (2), [GitHub](../../Skills/Software%20Development/GitHub.md) (1), [Java](../../Skills/Software%20Development/Java.md) (1)
> **CLI Commands:** python (4), find (3), node (3)
> **Env Vars:** lmt (1), weca (1)
> **Analogies:** imagine (1), just like (1)
> **Tools:** github (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 5. Ensembles and Random Forests

[↑ Back to Table of Contents](#table-of-contents)

#### [Introducing random forest](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/introducing-random-forest?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/introducing-random-forest?u=76281980&t=0)** - [Instructor] One of the most important techniques in all of machine learning, is building ensembles of trees. An ensemble, in this context, is simply a collection of models. Each component model contributes to the overall solution. It's quite like a committee. It's a simple concept, but a powerful one. Algorithm developers have been busy for decades developing numerous variations on this theme. And many machine learning competitions, like those on Kaggle have been won with ensembles. Now, it's a very big topic. In fact, there's an entire course dedicated to ensembles. So in this course, we'll just get oriented with a single one of these famous [Algorithms](../../Skills/Software%20Development/Algorithms.md), Random Forest, which is available in nine with a standard nine node. The basic idea of Random Forest is to make multiple versions of our tree and then average them. It's not uncommon to make hundreds of component trees for the ensemble. You may be able to anticipate a problem, however. If the component trees are nearly identical to each other how much better with the resulting ensemble be? This turns out to be an important insight into how Random Forest works. We need diverse component trees for it to work effectively. We've learned that a major potential weakness of trees,
>
> **[1:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/introducing-random-forest?u=76281980&t=96)** is that tree branches are greedy. A variable split that is optimal at the branch, might be suboptimal for the tree as a whole. To avoid having all of our trees have the same blind spots, Random Forest has to shuffle the data. It's not quite the same as having multiple trained test partitions, but it's something like that. We won't get into the details now, but Random Forest uses a technique called Bootstrap Sampling. Random Forest also shuffles the input variables to ensure that the resulting trees are diverse and don't always have the same top branches. All of these ingredients are explained in more detail in the ensembles course. Along with multiple ensemble algorithms. We're going to focus on the basics and how Random Forest works using the Random Forest learner node in a complete workflow in nine.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Algorithms](../../Skills/Software%20Development/Algorithms.md) (2)
> **CLI Commands:** node (2), make (2)
> **Speakers:** - [instructor] (1)

#### [Random forests demo](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/random-forests-demo?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/random-forests-demo?u=76281980&t=0)** - [Instructor] So here we are in nine and the name workflow is Adv_Trees_Chapter5_Random_Forest and it's found in both the hub and in the exercise files. It's all ready to go. Also, notice of course that when you click on the random forest learner node, you get a reasonably detailed description but it's really just giving you the high level outline of the algorithm to thoroughly understand how random forest works. You really have to understand what bootstrapping is and what bagging is. But let's stay focused on the workflow. So I'm going to close the description. Now we can see the workflow more clearly and let's discuss. Okay, we're using the same credit file that we've been using throughout the course. And let's actually pause for a moment to take a look at the partitioning node. Notice that I'm partitioning in the usual way and I want to remind you the fact that this is not where the shuffling is happening. We're creating a permanent train test partition. We're not shuffling these in doing it again and again. Let me cancel and go back to the workflow. So as is typical in nine workflows, we have the train data going up to the equal size sample in the learner node
>
> **[1:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/random-forests-demo?u=76281980&t=96)** and the test data is going directly from the partitioning node to the random forest predictor. So the shuffling that we've discussed is happening inside the random forest learner. So let's take a closer look at that. I'll maximize. Most of this is going to be pretty straightforward. The target column has been declared. You want to verify that that's correct. It should be serious delinquency in two years. We have numerous input variables that we can consider but if we scroll down a bit, there's some additional information that's worth mentioning. Notice that the split criterion is information gain ratio. And you'll be familiar with the idea of information gain from the previous decision tree course. Random Forest was first proposed by Leo Breiman, the developer of CART. So it's almost always the case that Random Forest is built up of component CART trees. However if we choose this menu, we can see if we choose this menu, that have more than one choice here. We have information gain, information gain ratio and Genie. To remind you, Genie is the basis of CART and information gain and information gain ratio
>
> **[3:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/random-forests-demo?u=76281980&t=194)** come from the C 4.5 and C5 tradition. We'll just stick with information gain because making a selection here is not important to our current discussion of Random Forest. However, this menu down here is important. I can increase or decrease the number of models. A typical value for the number of component models would be more like 50, a 100, 500 even. We're doing 10 only to facilitate understanding how the algorithm works. You typically would not choose the random forest algorithm and then build only 10 component models. Normally, to really leverage the power of this algorithm, you're going to have a much larger number than 10. You'll see why we've chosen only 10 here. It's going to become clear in a later step. We've made no changes, so we're going to click on Cancel. Okay, this has been executed. You more than likely have to execute your workflow. Come down to Random Forest Model. Going to repeat that step. I'm going to right click here. Now I'm going to right click and come down to Tree Views, maximize. Okay, so we've got our tree and we can expand this
>
> **[4:50](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/random-forests-demo?u=76281980&t=290)** a little bit. It looks like our top branch is number of times 90 days late. And then on the left side of the tree, it's splitting on number of times, 30 days it appears. It's cut off but the digit three really indicates that. And then we have debt ratio on the right hand side of the tree. However at the top, and this is the most important thing to attend to at the moment, is that we have 10 models in total and we can actually toggle and see different versions of the tree. And this one splits a number of times 60 days. And then on the left age and then on the right, revolving utilization. If we go to three, we have number of times 90 days late again, then 60, then 90 again and so on. So you actually can make an effort to look at all 10 of these trees. Once more, that is not the typical number. Typically you have a 100 or 500 of these trees and looking at these trees is unrealistic. But as you orient to the idea of random forest, it's actually quite interesting to look at them. If you are surprised that the trees are a bit different, you may even believe them to be a bit more different than you anticipated. Remember that the input variables are also being shuffled, not just the data. So the differences between the trees are being encouraged by the algorithm
>
> **[6:25](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/random-forests-demo?u=76281980&t=385)** and that's another motivation for wanting to look at all 10 of these trees and get a sense of just how different they are. We'll close that and go back to the workflow. So there you have it. For the purpose of this course, you've identified that you can easily run random forest and nine because there's a native node to do it, the random forest learner. And you've learned just a little bit about how the algorithm works, how you choose the number of component trees and then how you can view them.

> [!info]- Semantic Content
>
> **CLI Commands:** node (5), make (1)
> **UI Navigation:** click on (2), scroll down (1), toggle (1), go to (1)
> **Env Vars:** cart (3)
> **Cross-References:** go back to (2)
> **Versions:** 4.5 (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### [Comparing two models](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/comparing-two-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/comparing-two-models?u=76281980&t=0)** - [Instructor] Now that we've gotten a little taste of what the Random Forest Learner can do, let's discuss an important issue, which is how do we most efficiently compare two or more models on terms of performance? Well, the workflow that we're going to use is Adv_Tree_Chapter5_Inspector. An inspector refers to the binary classification inspector node which we'll be using in this workflow. So when you first glance at this, perhaps it seems a little complex but it's actually pretty straightforward. We've got our data coming in. It's the credit data we've been using all along. We balance, we partition, then up on the top we have Random Forest Learner and Predictor. Down on the bottom we have Decision Tree Learner and Predictor. And what makes this interesting in particular is that we would expect the Random Forest Learner is going to have an advantage because it's a more powerful algorithm or at least it's perceived that way. But remember, as a trade off for that increased power we get a loss of transparency and that's where I'm not so sure that we can always conclude that random forest is the way to go. So we have what we would normally think of as a more accurate algorithm in the form of random forest and then we have our transparent single decision tree and then we get to compare them. So what the column renames are doing is that both models are generating a [Probability](../../Skills/Data%20Science/Probability.md).
>
> **[1:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/comparing-two-models?u=76281980&t=94)** So we're going to add the suffix RF for random forest and we're going to add the suffix DT for decision tree so that the probabilities don't have the same name. Then the Joiner is going to bring all of this together. So if we right click on the joiner and we look at the join result and maximize that, we can see that we have our target variables series delinquency. We have our input variables and then we have our two probabilities from one model and then from the other. So now let's go into the Binary Classification Inspector and configure. Our target column is series delinquency. So we have probability 1, which is the probability of default for random forest. We have probability one, which is the probability of default for decision tree. And then since I haven't made any changes, I'm going to click on cancel. Right click once more and we're going to do the interactive view. By the way, don't worry about that warning. That's just simply saying that we're only using 2,500 rows, so we'll make the interactive view work a little bit faster. I'm going to maximize this. Okay, so we have probability of the random forest in blue. We have probability of the single decision tree in green
>
> **[3:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/comparing-two-models?u=76281980&t=189)** and it does look like random forest has an advantage as we might expect. Let's go ahead and click on that and we get a lot of additional information, which is really pretty great. Noteworthy in particular, I think are the numbers we see displayed here. We have 941 true positives and we have some actual ones.
>
> **[3:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/comparing-two-models?u=76281980&t=216)** So actual defaults that were predicted to be non defaults, 290 of them. So those 290 represent actual defaults that were not predicted to be defaults. That's an important number. So 290 for random forest and then how many in that same category for the single decision tree. We'll go up here. And the number is quite a bit larger, instead of 290, it's 356 so that's a real factor. Now, there's a lot going on in this wonderful inspector node but something in particular that I want to draw your attention to is that we make a natural assumption typically that our cutoff is going to be 0.5. Why do we do that? Because anything higher than 0.5 you have a greater than 50% chance of default. But what happens on a lot of projects where you're working with real loans and real money is that you actually set the threshold based on a number of factors like how much risk are you able to take on in a loan portfolio and so on. So let's actually scroll this up to... We'll just make the difference big enough that we'll be able to see it, maybe go all the way up to 0.9, for instance, which is changing the sensitivity profile of our model. I'm at 0.899, but I'm not going to worry about it.
>
> **[5:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/comparing-two-models?u=76281980&t=309)** And then I'm going to go over here and change the random forest up to 0.9 as well. You know what? This isn't that as it turns out I land that on 0.899 there as well. But what's interesting here is that you can see the ROC curve in the upper right hand corner is changing. Where those squares are, but also very noteworthy and very interesting is the bars have shifted so that at this different profile, this different way of looking at the models, the single decision tree is actually outperforming the random forest. That is not to say that the single decision tree is better. We would have to dig a lot deeper to draw that conclusion. But if we take into account a bunch of different issues like are we more worried about true positive or true negative. What's our risk profile and what does our loan portfolio look like? Given all of those factors, we absolutely might conclude that the decision tree is the better way to go. Or we might decide that the random forest is a bit better but we still go with the single tree for the advantage of transparency. However, the key point is this, it is wonderful to be able to compare two models this thoroughly and this easily in [Knime](../../Skills/Software%20Development/Knime.md).

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Probability](../../Skills/Data%20Science/Probability.md) (7), [Knime](../../Skills/Software%20Development/Knime.md) (1)
> **Versions:** 0.5 (2), 0.9 (2), 0.899 (2)
> **CLI Commands:** make (3), node (2)
> **UI Navigation:** click on (3)
> **Env Vars:** roc (1), knime (1)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)
> **Warnings:** warning (1)


### 6. Advanced Tips and Tricks

[↑ Back to Table of Contents](#table-of-contents)

#### [Data reduction with random forests](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/data-reduction-with-random-forests?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/data-reduction-with-random-forests?u=76281980&t=0)** - [Instructor] I'm about to show you one of my favorite tricks and it's going to leverage the random forest algorithm for the purpose of data reduction. So first, let's be clear what workflow we're talking about. This is a modification of the random forest workflow. It's called ADV Tree Chapter Six, Data Reduction. So why do we need a trick to do this? Well, let's make the workflow more visible by closing out all the other [Windows](../../Glossary/Service/Windows.md) except for the workflow itself and let me show you the random forest workflow. Again, it's right here and we've got a source node, a partition, then we build with the learner, then we have a predictor and a score. So the modification now is we're focused at the moment on just the learner and a series of nodes that have been added after the learner. We have a Table View, a Row Filter, and a Transpose. So what's the motivation for this powerful trick? Well, data reduction is the notion that you have to reduce the number of inputs when you have a lot of them because machine warning [Algorithms](../../Skills/Software%20Development/Algorithms.md) in general are prone to being overfit. So for instance, sometimes neural net is presented as an algorithm that has a tendency to overfit.
>
> **[1:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/data-reduction-with-random-forests?u=76281980&t=97)** Trees don't use all of the variables. In fact, even random forest doesn't use all the variables. But neural nets always use all the variables. So what if we could leverage this characteristic of trees and use it along with neural nets, where the trees help us reduce the number of variables and then perhaps only present that reduced set of input variables to an algorithm like neural net that possibly has the tendency to overfit. That's the premise. So let's take a look at how this works. We already know what the random forest learner does, but let's right click on it and go down to Attribute [Statistics](../../Skills/Data%20Science/Statistics.md). And I'm going to maximize this. This is a really interesting aspect of random forest. We examined earlier the component trees. Well, let's see that through a different lens. So for instance, level zero split is the top split and three of the trees split on revolving utilization as the top split, four of the trees split on number of times 90 days. So let's leverage that then. If we only use the top split, it would be very similar to some automated data reduction algorithms that you can use in almost any machine learning platform, including platforms like 9. However, this is the part that always concerns me
>
> **[3:12](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/data-reduction-with-random-forests?u=76281980&t=192)** when I use those algorithms as the only method of doing data reduction. They're looking at one variable at a time. In that sense, they're greedy, using that [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) the same way we used it when we described that the top branch is greedy. So how can we overcome that? Well, we could take into account deeper than just the top branch. So I've added a Table View, and if I right click on this and go to the Interactive Table View and maximize that, we actually can check boxes off. Now, I'm doing this manually. If you really get excited about doing this in 9, you actually could develop a routine to do this. But even if you had 20 or 30 or more input variables, it would be reasonably efficient to do it this way with the check boxes. So we keep revolving utilization because it's frequently used as a top branch or as a second branch. But we also keep number of days 30 days. It's not used very often as a top branch, only 1 time out of 10, but it's used six times as a second branch. So note what's happening. We're getting at variable interactions here. You might even decide for that reason to include some more, but for the moment, I've only included the three. I'm going to close this now.
>
> **[4:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/data-reduction-with-random-forests?u=76281980&t=285)** And then, this is the fun part. You can see that after that now, I can add a row filter and notice that the matching criteria has been set to use pattern matching true. That means that only the check boxes are going to continue to flow. I didn't make any changes, so I can cancel. And then the Transpose node is going to flip those around so that when I get to the Reference Column Filter, I'm only including the columns from the previous table. Click on Cancel. So right click again, Filtered table. Isn't that something? I've got my Row ID and my three input variables reduced down from the larger list, and using merges and some other steps, I could now pass this on to a trained test partition and a neural net learner or even an auto ML node or any number of different things that I might choose to have downstream using only my best predictors. So we didn't start with a lot of predictors and we reduced it all the way down to three, so this is very simplistic example, but I think it's very powerful to use this trick of leveraging random forest for data reduction even if some other algorithm, in fact, it would be another algorithm operating downstream, as our deployed model.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Algorithms](../../Skills/Software%20Development/Algorithms.md) (3), [Windows](../../Glossary/Service/Windows.md) (1), [Statistics](../../Skills/Data%20Science/Statistics.md) (1), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **CLI Commands:** node (3), make (2)
> **UI Navigation:** click on (3), go to (1)
> **Definitions:** is a  (2), means that (1)
> **Analogies:** for instance (2)
> **Env Vars:** adv (1)
> **Tools:** notion (1)
> **Warnings:** warning (1)

#### [The XAI view node](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/the-xai-view-node?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/the-xai-view-node?u=76281980&t=0)** - [Instructor] Now let's discuss a different trick available in [Knime](../../Skills/Software%20Development/Knime.md). Also related in a way to Random Forest, but in a different sense. Random Forest, because of the multiple Trees, is a very powerful way to overcome some of the limitations of the greediness of a single Tree. However, you're eliminating this limitation while taking on a different limitation. That is, to gain the advantage of Random Forest, you lose transparency. So, what we're going to do is we're going to look at Random Forest built using the Auto M-L Component node, and then trying to overcome the lack of transparency with Explainable A-I. Let me show you how it all works. So, the workflow that I'm in is A-D-V Tree chapter six X-A-I. And this Global Feature Importance Component node is designed to work with the Auto M-L node. But let's take a look inside the Auto M-L node
>
> **[1:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/the-xai-view-node?u=76281980&t=79)** Okay, and what you discover is that we've got the same dataset we've been using all along. The target column, as you can see in the lower left has been declared as serious delinquency in two years. Again, consistent with earlier examples. And the only model that's been checked off is Random Forest. So, we're not using the Random Forest learner, because this new node that we're going to discuss is designed to work with the Auto M-L node. But indeed, we're just simply running Random Forest with a different node. So I'll cancel out of this. I also want to clarify what I mean by a Component. Notice in the help, in the upper right, it says, "this Component automatically trains". What do we mean by a Component? Well, if you right-click on this, and you go into Component - Open, you can actually see this is a very complex series of nodes. KNIME makes it very easy. We're just simply using the Component. But this is what is inside that Component. We won't worry about those details. But I wanted to draw your attention to the fact that those added details are there because you will sometimes find that workflows with a Component open and close a little bit slower, and it might be a bit mysterious what's going on.
>
> **[2:52](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/the-xai-view-node?u=76281980&t=172)** It's because all of these other nodes are being loaded, or processed, or saved. So, we'll go back to the main workflow, and I'm actually going to close this description, and minimize this window to give us more room. And I'm going to right-click on Global Feature Importance and open the interactive view. So remember the premise here. The premise is that we're using Random Forest. We're generating the Random Forest model using the Auto M-L Component node. But we want to understand what all of those Trees, what all of those Component Trees collectively are saying about our data. So what do we mean by global? Global means we're describing the model as a whole. So, let's say that Joe Smith applies for a loan and the loan is declined. A local explanation would be something specific to Joe Smith. But a global explanation is talking about the whole model, not just one individual. So that's the difference between global and local. So what this node does is runs multiple surrogate models to try to explain this overall pattern in the model. And it might seem a bit strange. We start with a single model, and then when we go to a Random Forest, we make a whole bunch of models
>
> **[4:24](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/the-xai-view-node?u=76281980&t=264)** because we're overcoming the greediness, and we're trying to increase the accuracy. And then we go back to a single model. So, what's fundamentally going on? Well, as it turns out, these surrogate models are not trying to predict our original target. They're actually taking the propensity score from the Random Forest, and that becomes a new target. So, we're not looking at a single Tree. We're looking at all of the Trees collectively. So, we have a surrogate G-L-M model, for instance. And we can see from the length of the bar that number of times 60, 89 days late, followed by number of times 90 days late, were the top variables. This isn't surprising of course. We know that the number of times late keeps on coming up in these models. And then we've got a single Tree. Again, it might be surprising because we started with a single Tree before we went to Random Forest. But this is not just one of the Trees. This is an effort to describe in a single Tree what we're seeing across many Trees. And we can actually see the splits from this point of view. We actually split on Revolving Utilization as the top variable. So, this is just a taste. There's actually an entire course dedicated to Explainable A-I that gets much deeper into the theory, and talks both global and local. But I wanted you to see this because if you go from a single Tree to an ensemble of Trees,
>
> **[6:02](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/the-xai-view-node?u=76281980&t=362)** you take on this added challenge that you've lost your transparency. And Explainable A-I is a whole host of techniques to try to address that lack of transparency.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Knime](../../Skills/Software%20Development/Knime.md) (2)
> **CLI Commands:** node (9), find (1), make (1)
> **UI Navigation:** right-click (2), open the (1), go to (1)
> **Definitions:** is a  (3), is an  (1)
> **Cross-References:** go back to (2), coming up (1)
> **Env Vars:** knime (2)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### [Deployment](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/deployment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/deployment?u=76281980&t=0)** - [Instructor] Let's talk about deployment and something called PMML, [Predictive Modeling](../../Skills/Data%20Science/Predictive%20Modeling.md) Markup Language. Now deployment is a very big topic but whenever you build a model, at a minimum, you're going to want to be comfortable applying that model to new data, and you may also be curious about how to get your model out of [Knime](../../Skills/Software%20Development/Knime.md) and into something else or possibly at some point wanted to go in the reverse direction where you have a model that's been built somewhere else and you want to bring it into KNIME, so we're going to very briefly talk about those issues now. So what I've done in the area at the bottom of this workflow which is called adv trees, chapter 6, PMML, what I've done is I've got a data file and a row splitter. What the row splitter does is set aside a few dozen cases to flow down at the bottom here and not up at the top, so up at the top we have the usual column filter, partition, learner, and then we're going to talk about this score in a moment, but down at the bottom we have our original data file that we've been using all along, in this case for miles per gallon, then the row splitter is sending just 80 cases straight ahead to the PML predictor, and 320 cases or so up through the column filter
>
> **[1:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/deployment?u=76281980&t=96)** for the process that we normally talk about. So when we go then to here and we look at the predicted data, we have just the 80 cases that got split off by the row splitter from row 20 and higher, and we have our prediction, even though these cases did not participate either in creating the model with the train data, nor even with validating it with the test data, this was a separate 80 rows, and all we did with this is score it. On one level, that's all there is to it, you can imitate that bottom portion of the workflow and now you know how to deploy your model. Notice that the model is passing from this workflow above with the square shaped connector down to the model here. But now let's talk about this separate issue, what I've done is I've taken the simple regression tree learner and connected it to a simple regression tree to PMML node. What is that doing? Well it's converting the model into this other language, PMML, which many software packages, platforms, and languages share, so you can use it to pass back and forth between different platforms. Also, notice that there is a PML to [SQL](../../Skills/Data%20Science/SQL.md) node,
>
> **[3:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/deployment?u=76281980&t=193)** so let's take a look at how this all comes together, let's just take a quick look at these two languages. This again, would be a way to get the information about your model out of KNIME and into another form. Also, notice there's a PMML reader that could be used if you had developed a model outside of KNIME, but wanted to deploy that on new cases in KNIME, so let's take a quick look at these two languages. First onto PMML, Predictive Modeling Markup Language. This little bit of code represents a tiny portion of the PMML that is being exported in that workflow. PMML is related to [HTML](../../Skills/Web%20Development/HTML.md), it has a similar look and feel and it's really quite verbose, so this is just a few lines out of what is probably a couple of hundred lines that represents everything about our model. Alternatively, we can also export our model to SQL, in this case indirectly through PMML, and we've got some select in case when statements and you can see how this could be used to score cases on a database, for instance, even though you might not be using KNIME in that environment. So you've created the model in KNIME,
>
> **[4:46](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/deployment?u=76281980&t=286)** but you're deploying it outside of KNIME. This is not to diminish KNIME's deployment capabilities, there is much, much more to say about what KNIME can do in regards deployment than what we've talked about here. So to conclude, we've only talked about two options, but they're interesting options, one is to simply make a copy of our model down at the bottom and allow new data to flow through it, this is the standard way, this is the easiest way, but what we've also discussed is that we can export our model as PMML or to SQL via the PMML, and that allows us to take our model instructions and move it into another environment where we can do our scoring there. And depending on the skill set and the platform usage of your team, that second option might be very helpful to you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Knime](../../Skills/Software%20Development/Knime.md) (10), [SQL](../../Skills/Data%20Science/SQL.md) (3), [Predictive Modeling](../../Skills/Data%20Science/Predictive%20Modeling.md) (2), [HTML](../../Skills/Web%20Development/HTML.md) (1)
> **Env Vars:** pmml (11), knime (10), sql (3), pml (2), html (1)
> **CLI Commands:** node (2), make (1)
> **Definitions:** is a  (2), is called (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Final thoughts and recommendations](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/final-thoughts-and-recommendations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-advanced-decision-trees-with-knime/final-thoughts-and-recommendations?u=76281980&t=0)** - [Keith] So what's the best way to continue on your journey? I always like to recommend applying something you've learned right away. An excellent option in this case is to seek out some innovative [Algorithms](../../Skills/Software%20Development/Algorithms.md), of course, including decision tree algorithms. One of the lessons of this course is that these innovations are not a thing of the past, but rather, algorithm development is an ongoing process. One of the conferences that I attend is the Knowledge Discovery and [Databases](../../Skills/Software%20Development/Databases.md) Conference, often just called KDD, and the concurrent sessions are just filled with recent PhD grads presenting improved algorithms. Both the papers and the code are available publicly if you look, usually not on the KDD website itself, but by using KDD as a keyword in your search. Now as mentioned in the course, there are two courses right here in the library that could be excellent next courses for you. Those courses are the Producing XAI and Interpretable Machine Learning Solutions, and Mastering Ensembles and Metamodeling. Also, please stay in touch by following me on [LinkedIn](../../Skills/Web%20Development/LinkedIn.md). Perhaps I'll even see you at a conference sometime soon. If so, I hope you'll say hi. Until then, good luck on your continued journey learning about machine learning.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Algorithms](../../Skills/Software%20Development/Algorithms.md) (3), [Databases](../../Skills/Software%20Development/Databases.md) (1), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **Env Vars:** kdd (3), xai (1)
> **Definitions:** is an  (1)
> **Speakers:** - [keith] (1)


## Instructor

- [Keith McCormick](../../Instructors/Data%20Science/Keith%20McCormick.md)

## Resources

- Exercise files available

## Skills Covered

- Knime
- Machine Learning
- Artificial Intelligence (AI)
- Decision Trees

## Path Context

### In [Learning Codeless Machine Learning with KNIME](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Learning%20Codeless%20Machine%20Learning%20with%20KNIME.md)
← [Machine Learning and AI Foundations- Producing Explainable AI (XAI) and Interpretable Machine Learning Solutions](Machine%20Learning%20and%20AI%20Foundations-%20Producing%20Explainable%20AI%20(XAI)%20and%20Interpretable%20Machine%20Learning%20Solutions.md) | **5 of 5**

## Appears In

- [Learning Codeless Machine Learning with KNIME](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Learning%20Codeless%20Machine%20Learning%20with%20KNIME.md)

## Related Courses

_Courses sharing skills:_

- [Machine Learning and AI Foundations- Decision Trees with KNIME](Machine%20Learning%20and%20AI%20Foundations-%20Decision%20Trees%20with%20KNIME.md) — Artificial Intelligence (AI), Machine Learning, Decision Trees
- [Machine Learning and AI- Advanced Decision Trees with SPSS](Machine%20Learning%20and%20AI-%20Advanced%20Decision%20Trees%20with%20SPSS.md) — Artificial Intelligence (AI), Machine Learning, Decision Trees
- [Machine Learning and AI Foundations- Decision Trees with SPSS](Machine%20Learning%20and%20AI%20Foundations-%20Decision%20Trees%20with%20SPSS.md) — Artificial Intelligence (AI), Machine Learning, Decision Trees
- [Introduction To Machine Learning With Knime](Introduction%20To%20Machine%20Learning%20With%20Knime.md) — Artificial Intelligence (AI), Machine Learning, Knime
- [Machine Learning with Python- Decision Trees](Machine%20Learning%20with%20Python-%20Decision%20Trees.md) — Artificial Intelligence (AI), Machine Learning, Decision Trees

---

[↑ Back to top](#)