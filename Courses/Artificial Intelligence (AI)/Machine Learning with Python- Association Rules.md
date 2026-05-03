---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: machine-learning-with-python-association-rules
url: "https://www.linkedin.com/learning/machine-learning-with-python-association-rules"
duration_minutes: 87
duration: 1h 27m
level: Intermediate
updated: 4/25/2024
learners: 207068
skills:
  - Python (Programming Language)
  - Machine Learning
  - Artificial Intelligence (AI)
exercise_files: false
github: "https://github.com/LinkedInLearning/machine-learning-with-python-association-rules-3209139/codespaces"
thumbnail: "https://media.licdn.com/dms/image/v2/D4D0DAQGqEROTjtWi6Q/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1707245316436?e=2147483647&amp;v=beta&amp;t=R3fI7ZkwTMXbt5LGImFayQOPzqqlXGbp6e5uBeBMVt4"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Develop with Python for AI and Machine Learning]]'
  - '[[Advance Your Skills as a Machine Learning Specialist]]'
prev_courses:
  - '[[Machine Learning with Python- k-Means Clustering]]'
  - '[[Machine Learning with Python- k-Means Clustering]]'
next_courses:
  - '[[Advanced Python Projects- Build AI Applications]]'
  - '[[Machine Learning with Python- Logistic Regression]]'
path_nav: '[{"path":"Develop with Python for AI and Machine Learning","position":5,"total":6,"prev":"Machine Learning with Python- k-Means Clustering","next":"Advanced Python Projects- Build AI Applications"},{"path":"Advance Your Skills as a Machine Learning Specialist","position":3,"total":9,"prev":"Machine Learning with Python- k-Means Clustering","next":"Machine Learning with Python- Logistic Regression"}]'
path_count: 2
tags:
  - course
  - topic/artificial-intelligence
  - topic/software-development
  - skill/python-programming-language
  - skill/machine-learning
  - skill/artificial-intelligence-ai
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Machine%20Learning%20with%20Python-%20Association%20Rules.md)

![Machine Learning with Python: Association Rules](https://media.licdn.com/dms/image/v2/D4D0DAQGqEROTjtWi6Q/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1707245316436?e=2147483647&amp;v=beta&amp;t=R3fI7ZkwTMXbt5LGImFayQOPzqqlXGbp6e5uBeBMVt4)

# Machine Learning with Python: Association Rules

> Join instructor Frederick Nwanganga as he introduces a practical, easy-to-understand approach to using machine learning to solve real-world problems and provides step-by-step guidance on how to do this in Python. Frederick focuses specifically on association rules and how you can apply them for market basket analysis. He explains what association rules are and goes over two popular algorithms, the

> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-with-python-association-rules) | 1h 27m | Intermediate | 207K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (4 videos)
  - [Association rule mining](#association-rule-mining)
  - [What you should know](#what-you-should-know)
  - [Using the exercise files](#using-the-exercise-files)
  - [Using GitHub Codespaces with this course](#using-github-codespaces-with-this-course)
- [**1. Association Rules**](#1-association-rules) (6 videos)
  - [What are association rules?](#what-are-association-rules)
  - [Frequent itemset generation](#frequent-itemset-generation)
  - [The Apriori algorithm](#the-apriori-algorithm)
  - [The FP-Growth algorithm](#the-fp-growth-algorithm)
  - [Evaluating association rules](#evaluating-association-rules)
  - [Why and when to use association rules](#why-and-when-to-use-association-rules)
- [**2. Discovering Patterns with Association Rules**](#2-discovering-patterns-with-association-rules) (4 videos)
  - [How to collect data for association rule mining](#how-to-collect-data-for-association-rule-mining)
  - [How to generate frequent itemsets](#how-to-generate-frequent-itemsets)
  - [How to create association rules](#how-to-create-association-rules)
  - [How to evaluate association rules](#how-to-evaluate-association-rules)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Association rule mining](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/association-rule-mining?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/association-rule-mining?u=76281980&t=0)** - [Fred] Every day, large amounts of transaction data are generated as consumers purchase goods and services online and in person. Market basket analysis or affinity analysis is a process of identifying and extracting meaningful patterns from transaction sets. Association rules are used to describe these patterns. Hi, I'm Fred Nwanganga. I'm a data scientist, teacher, and author with a passion for AI and machine learning. Welcome to Machine Learning with [[Python (Programming Language)|Python]] Association Rules. In this course, I explain what an association rule is and how to more efficiently create them using frequent item sets. I also explain how to evaluate association rules using several data driven measures of interest in this. I discuss when association rules are most useful and when they're not. Finally, I walk through the process of important transactions, generating frequent item sets, creating association rules, and evaluating association rules in Python. Let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (2)
> **CLI Commands:** python (2)
> **Definitions:** is a  (1)
> **Speakers:** - [fred] (1)

#### [What you should know](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/what-you-should-know?u=76281980&t=1)** - [Instructor] Before we get started, let's go over some of the background knowledge that you should have in order to get the most out of this course. First, I assume that you have a fundamental understanding of what machine learning is, specifically unsupervised machine learning. If you don't, I recommend that you review my introductory [[LinkedIn]] learning course, [[Machine Learning with Python- Foundations]]. Second, it would be helpful if you have some entry level experience with coding in [[Python (Programming Language)|Python]]. I will assume that you know how to import a Python package, refer to the attributes of an object and call the methods of an object. Next, it would also be helpful if you have some familiarity with the [[Pandas (Software)|pandas]] package. If you don't, no worries. I will explain exactly what I'm doing when we do use external packages in the course. Finally, I do assume that you know how to use the Jupiter Notebook interactive Python environment. Specifically, I assume that you know how to edit and run code within a code cell.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (4), [[LinkedIn]] (1), [[Pandas (Software)|Pandas]] (1)
> **CLI Commands:** python (4)
> **Speakers:** - [instructor] (1)

#### [Using the exercise files](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/using-the-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/using-the-exercise-files?u=76281980&t=0)** - [Instructor] The exercise files you need for this course will be provided to you. This means that you can follow along with any of the code examples in the lessons. I recommend that you do so. The best way to become proficient in using association rules in [[Python (Programming Language)|Python]] is to practice doing it yourself. This course is delivered using [[Codespaces]], a development environment that is hosted in the cloud. The exercise files are available on [[GitHub]] and are organized by branches. Within each branch is a data file and two notebooks, a beginning and an ending notebook. Let's take a look at an example. The files in the 02_01 branch are what we use in the first video of the second chapter. As you can see, within the source folder, we have a data file called groceries.csv. We also have two notebooks for the lesson videos. The 02b notebook is the beginning notebook. This is the notebook you should code in when following along with the lesson videos. The 02 notebook is the ending notebook. It is a completed version of the beginning notebook just for your reference. Now, let's get a quick [[Microsoft Word|word]] from [[LinkedIn]] Learning about using Codespaces for this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Codespaces]] (2), [[Python (Programming Language)|Python]] (1), [[GitHub]] (1), [[Microsoft Word|Word]] (1), [[LinkedIn]] (1)
> **Definitions:** is a  (2), means that (1)
> **Exercise Files:** exercise files (2)
> **File Paths:** groceries.csv (1)
> **CLI Commands:** python (1)
> **Tools:** github (1)
> **Speakers:** - [instructor] (1)

#### [Using GitHub Codespaces with this course](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/using-github-codespaces-with-this-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/using-github-codespaces-with-this-course?u=76281980&t=0)** - This is Ray Villalobos senior staff instructor at [[LinkedIn]] Learning, and I'm going to show you how to work with LinkedIn Learning courses using [[GitHub]] Code Spaces. [[Codespaces]] is a code editor in the cloud with the full power of Visual Studio Code. It allows for real world hands on practice that mirrors [[Software Development]] in the workplace. This course was created using GitHub Codespaces. Using Codespaces, you have everything you need to get going without needing complex installations or build tools. One click and you're ready to go. To practice along with the course, you can create a Codespace directly from the course overview page. First, click open next to GitHub Codespaces. If you're already logged in, you'll be directed to a Getting Started with GitHub CodeSpaces page. If you're not logged in, you'll be prompted to log in or create a free GitHub account first. From this page, click on Create Codespace on Main. The first time you open up a Codespace it might take a few minutes to create the virtual machine. Once it's done, you'll enter the code editor environment. If you're familiar with Visual Studio Code, this is a special version of that editor running on GitHub's servers. Your course can have one or more extensions pre-installed based on the course you're taking. Those can be found in the extensions panel. Because this is a browser, it's easy to inadvertently close the browser window and lose the editor. If you do that,
>
> **[1:32](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/using-github-codespaces-with-this-course?u=76281980&t=92)** don't panic Codespaces saves everything you're doing on a virtual machine. You can always get the Codespace back for this repo right here. Notice that it even remembered that I had opened the extensions panel. An alternate way to create a Codespace is directly from one of our courses GitHub repositories. From here, click code and then "Create Codespace on Main." You can also restart a previous Codespace from this location. GitHub Codespaces is compatible on devices with smaller screen sizes like mobile phones or tablets but it is optimized for larger screens so we recommend that you practice along with this course on a laptop or desktop computer. The sample course I'm looking at is what is known as a flat branch repository. You can tell because there's a single branch when you click on the branch icon on the status bar. You can also tell because there are different folders for each of the videos in the course. This is a sample of what a multi branch repository looks like which is more common when you're working with web frameworks. If you go to the branch icon on the status bar, you can see that there's more than one branch. You can switch to the different branches using this menu. The branches are named with the chapter and the video number you're watching. If you see a B at the end of the branch, that's how the code looked at the beginning. If you see an E, that's how the code looked at the end.
>
> **[3:06](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/using-github-codespaces-with-this-course?u=76281980&t=186)** Let's switch to how the code looked on chapter two im the third video. I'll choose the beginning branch. As you work through a course, you might make some changes on a branch. I'm going to make a minor edit on the index [[HTML]] file right here. I'm going to go ahead and save that, and you can see that I've modified this file because there's an M right here and the branch name now has an asterisk on it. If I try to switch to another branch that causes major changes like say 0703E, I may see a dialog box like this. If you don't care about saving your changes you can simply hit the force checkout button. It will let you switch to that branch. You can then choose to discard the changes on this file. Your instructor will let you know what the folder structure is for your course. Forking lets you create your own copy of the repository on your account so that you can keep any changes that you've made even if you've deleted the Codespace. To create your own fork, you can click on the fork button on the repository. I'm going to hit Create Fork. I have my own copy of this repository, and if I want to I can start a new Codespace on that fork. This fork version is almost exactly
>
> **[4:41](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/using-github-codespaces-with-this-course?u=76281980&t=281)** like the original repository but it will let you push your own changes. Notice that the URL of the repository is slightly different. Let's go ahead and make a simple change to this file right here.
>
> **[5:00](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/using-github-codespaces-with-this-course?u=76281980&t=300)** I'm going to save it. You'll note that there is an M right here as well as an asterisk on this branch. In the source control panel, you can also see a one for the change that we just made. Let's go ahead and try to commit this change. I'm going to hit the commit button and I'll ask it to go ahead and stage the changes and then I'm going to hit this button here. I'll hit okay. You can also let it go ahead and run, get [[Fetch]]. That way it'll automatically sync with your forked repo. Now that change will be stored in your own version of this repository. Don't worry if you forget to fork a repo and then try to push changes, Codespaces will also ask you if you want to create a fork automatically. Look for additional core specific tips from the instructor. Now, let's get back to the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (8), [[Codespaces]] (8), [[LinkedIn]] (2), [[Software Development]] (1), [[HTML]] (1)
> **Tools:** github (8), visual studio (2)
> **UI Navigation:** click on (3), switch to (3), go to (1)
> **Definitions:** is a  (4), known as (1), is an  (1)
> **CLI Commands:** make (3)
> **Env Vars:** url (1)
> **Warnings:** note that (1)
> **Prerequisites:** getting started (1)


### 1. Association Rules

[↑ Back to Table of Contents](#table-of-contents)

#### [What are association rules?](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/what-are-association-rules?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/what-are-association-rules?u=76281980&t=0)** - Every day, large amounts of consumer transaction data are generated as goods and services are bought and sold in stores and online. This database of transactions is commonly referred to as market basket data. Each transaction in market basket data consists of a distinct set of items that were purchased together. Any distinct set of zero or more items within the transaction set is known as an item set. In this example, the items watermelon, avocado and apple form an item set. It is an item set with a length of three. This is also referred to as a three item set. Strawberry is also an item set. It's an item set with a length of one or a one item set. In order to identify interesting and related patterns in a transaction set, we can analyze the co-occurrence of item sets within the data. This process is commonly known as market basket analysis or affinity analysis. The result of market basket analysis is a set of rules that describe item set patterns. These rules are known as association rules. Association rules have been around for decades. However, they became increasingly popular
>
> **[1:36](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/what-are-association-rules?u=76281980&t=96)** as a result of the rise of online shopping during the late 1990s and early 2000s. They have been vastly studied over the years with countless improvements proposed by several researchers. To illustrate how association rules work, let's consider this market basket data set of five transactions. Each transaction represents their entirety of an individual customer's purchase. Customer A bought fruit, bread, and cereal and customer B bought fruit, milk, cereal and eggs. The amount or quantity of items purchased is not important. All we care about is that a particular item was purchased. With an association rule, we can describe the relationship between two items sets within a data set this way. This rule states that customers who bought bread and cereal also purchased milk. It suggests that a strong relationship may exist between the sales of bread, cereal, and milk. The item set on the left side of the rule is the condition that needs to be met. It is known as the antecedent of the rule. The item set on the right side of the rule is the expected result of meeting the condition. It is known as the consequence of the rule.
>
> **[3:12](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/what-are-association-rules?u=76281980&t=192)** Note that the left and right item sets that make up an association rule are disjoint. This means that they are distinct and have no items in common. By using association rules to define the patterns in market basket data we can gain valuable insight into consumer behavior. With this insight we can answer important business questions such as what [[Microsoft Products|products]] should be displayed together in the store, what products could be discounted together in order to increase sales and what products should be recommended to customers as part of a cross selling strategy. It's important to note that association rules are not only useful for market basket analysis, they can also be applied in other domains. For example, if we collect data on the symptoms exhibited by patients as part of a randomized drug trial, we could use association rules to identify potentially dangerous drug interactions. We can use association rules to describe any set of events that occur together at discreet intervals. A note of caution when it comes to association rules. Association rules do not imply causality. They simply highlight the co-occurrence of events or items within a data set.
>
> **[4:48](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/what-are-association-rules?u=76281980&t=288)** Understanding causality requires domain knowledge and further research into how items or events interact with each other over time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (3)
> **Definitions:** known as (4), is an  (1), is a  (1), means that (1)
> **Warnings:** note that (2), caution (1)
> **Analogies:** such as (1), for example (1)
> **CLI Commands:** make (1)
> **Best Practices:** recommended (1)
> **Speakers:** - every (1)

#### [Frequent itemset generation](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/frequent-itemset-generation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/frequent-itemset-generation?u=76281980&t=0)** - [Instructor] By using association rules to analyze the patterns in market basket data, businesses can gain invaluable insight into customer behavior. However, not all rules are created equal. For the most part, association rules can be classified into three major categories. The majority of our association rules are trivial. Trivial rules are rules that provide insight that is already well-known by those familiar with the domain. For example, a rule that shows that customers who buy pencils often also buy erasers does not really provide meaningful new insight. Sometimes, the association rules we generate can be classified as inexplicable or seemingly inexplicable. These are rules that defy rational explanation, need more research to understand, or do not suggest a clear course of action. For example, a rule that suggests that customers who buy shirts are more likely to also buy backpacks does not provide clear insight and requires a little bit more research to understand. It's important to note that most association rules you generate will fall under the trivial or inexplicable umbrellas. Association rules can also be classified as actionable. Actionable rules are rules
>
> **[1:37](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/frequent-itemset-generation?u=76281980&t=97)** that provide clear and useful insights that can be acted upon. They sometimes are rules that initially seemed inexplicable, but then turn out to be actionable after some research. For example, we may discover that the rule that suggests that customers who buy shirts are more likely to also buy backpacks is strongest during the Back to School Shopping season. This provides some context to categorize this rule as actionable. In response to this insight, a department store could decide to adjust the placement of these two items within the store or offer a special during certain periods of the year. It often takes skill and patience to identify truly actionable rules. To determine which rules are potentially actionable, we need to first identify which rules are significant or interesting, and limit our focus to those alone. One measure of the significance of a rule is how often the rule occurs. The frequency of a rule is measured using a metric called support. Also known as coverage, the support of a rule is a fraction of transactions that contain the rule. To illustrate how to calculate support, let's consider this market basket dataset
>
> **[3:12](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/frequent-itemset-generation?u=76281980&t=192)** of five transactions. The support of the rule milk, given bread, cereal is 2/5, which is 0.4. Five is a number of transactions in the dataset and two is a number of transactions with bread, cereal, and milk. The support value of 0.4 means that 40% of all transactions in our dataset include bread, cereal, and milk. Note that the support of a rule is actually the support of the itemset, so the direction of the rule or the order in which items appear does not really matter. For example, the support of the rule milk, given bread, cereal is the same as the support of the rule bread, cereal, given milk. We use support as a way to identify strong rules. This is because rules with low support are rules that don't occur a lot. They may occur simply by chance and are typically not actionable. That being said, it's important to also note that sometimes, weak association rules have interest in applications. For example, we could look at rules with low support to identify items that are rarely purchased together. For the most part, our objective will be to narrow our focus
>
> **[4:48](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/frequent-itemset-generation?u=76281980&t=288)** to association rules that meet a minimum support threshold that we set. There are several ways to do this. One approach, known as a brute force approach, is to calculate the supports for every possible rule that can be created from our dataset. As you can imagine, this can be a rather expensive process. For a dataset with p distinct items, there exists three to the p, minus two to the p plus one, plus one possible rules with a length of two or more. Therefore, if we had a dataset with just 20 distinct items we would have 3,484,687,250 rules to evaluate. That is a lot of rules. Instead of creating all possible rules, a better approach is to only create rules based on frequent itemsets. This is known as a frequent itemset generation approach. A frequent itemset is an itemset with a support value at or above a user-defined threshold. For instance, if the support threshold is set to 0.5 or 50%, a frequent itemset is defined as a set of items that occur together in at least 50% of all transactions in the database.
>
> **[6:22](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/frequent-itemset-generation?u=76281980&t=382)** Using the frequent itemset generation approach, we can reduce competition complexity by only creating rules from frequent itemsets. With this approach for a dataset with p distinct items, we can generate up to two to the p minus one possible frequent itemsets, excluding the null set. Therefore, for a dataset with 20 distinct items, we have 1,048,575 possible candidate itemsets to evaluate. That is better than the brute force approach, but still a lot. Thankfully, there are ways to further reduce the computational complexity of frequent itemset generation. One approach is to reduce the number of candidate itemsets we create by leveraging what is known as a Apriori principle. This is what the Apriori algorithm does. Another approach is to compress the data by storing the candidate itemsets in an advanced data structure, such as a frequent pattern tree or FP tree. This is what the FP-growth algorithm does. We cover the details of how these two approaches work in the next two videos.

> [!info]- Semantic Content
>
> **Definitions:** known as (4), is a  (4), means that (1), is an  (1), defined as (1)
> **Analogies:** for example (5), imagine (1), for instance (1), such as (1)
> **Versions:** 0.4 (2), 0.5 (1)
> **Warnings:** note that (2)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [The Apriori algorithm](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/the-apriori-algorithm?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/the-apriori-algorithm?u=76281980&t=0)** - Frequent itemset generation is a useful approach in limiting our focus to just those rules which are potentially actionable. While more efficient than the brute force approach, it is still computationally expansive. There are two common ways to reduce computational complexity during the process. One approach is to compress the data by storing the candidate itemsets in an advanced data structure, such as a frequent pattern tree or FP tree. That is what the FP growth algorithm does. The other approach is to reduce the number of candidate itemsets we create by leveraging the Apriori principle. This is what the Apriori algorithm does. The Apriori principle states that if an itemset is frequent, then all of its subsets must be frequent as well. To illustrate this concept, let's consider these itemset ladders which shows the 2-itemsets, 3-itemsets, 4-itemsets, and the 5-itemset that we can create from itemsets, A, B, C, D, and E. If itemsets C, D, E is found to be frequent, then according to the Apriori principle, all subsets of C, D, E, which are highlighted in green, are also frequent. The converse of the Apriori principle also applies. If an itemset is found to be infrequent,
>
> **[1:38](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/the-apriori-algorithm?u=76281980&t=98)** then its supersets must also be infrequent. This means that if itemset A is found to be infrequent, then all of its supersets shown here in red are also infrequent. In other words, once we establish that A is infrequent, we do not have to bother evaluating the 15 itemsets that follow, because we know that they also will be infrequent. In general, frequent itemset generation using the Apriori algorithm occurs in two stages, In the first stage, the algorithm generates new candidate itemsets. Then, it eliminates candidate itemsets that do not meet the support threshold in the second stage. To illustrate how the Apriori algorithm works, let's consider these 10 transactions from a corner fruit vendor. To keep things simple, we use letters of the alphabet to represent each of the seven fruit items in the data set. To begin, the apiary algorithm generates candidate 1-itemsets from the transaction set. Note that a 1-itemset is simply an itemset with a length of one. Next, the algorithm makes a pass through the data set
>
> **[3:13](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/the-apriori-algorithm?u=76281980&t=193)** to get the count for each candidate itemset. Let's assume that we set up support threshold to 0.2, or 20%. This means that each itemset must occur at least twice in the data to be frequent. Based on the support threshold, the algorithm eliminates the 2-itemsets that don't meet our criteria, itemsets F and G. The remaining five 1-itemsets are considered frequent. Next, the algorithm generates candidate 2-itemsets based on the frequent itemsets from the previous iteration. Then it makes a pass through the dataset to get a count for each candidate itemset. Based on the support threshold, it eliminates itemset BE. The remaining nine 2-itemsets are frequent. The process repeats for the 3-itemsets with candidate generation and pruning. This time, it eliminates 2-itemsets, and keeps five. Next, the algorithm uses the frequent itemsets from the previous iteration to generate candidate 4-itemsets. All three 4-itemsets are infrequent, so the process terminates. There are no new frequent itemsets to generate. We only need to create association rules
>
> **[4:51](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/the-apriori-algorithm?u=76281980&t=291)** from these 19 frequent itemsets. The advantage of the Apriori principle is evident when we realize that we only created and evaluated 27 itemsets in the process. This is in contrast to the 127 candidate itemsets we could have created. A whopping 79% reduction in the number of candidate itemsets generated.

> [!info]- Semantic Content
>
> **Definitions:** means that (2), is a  (1), in other words (1)
> **Versions:** 0.2 (1)
> **Analogies:** such as (1)
> **Warnings:** note that (1)
> **Prerequisites:** set up (1)
> **Speakers:** - frequent (1)

#### [The FP-Growth algorithm](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/the-fp-growth-algorithm?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/the-fp-growth-algorithm?u=76281980&t=0)** - [Instructor] Frequent item set generation is a useful approach in limiting our focus to just those rules which are potentially actionable. While more efficient than the brute force approach it is still computationally expensive. There are two common ways to reduce computational complexity during the process. One approach is to reduce the number of candidates item sets that we create by leveraging the Apriori principle. That is what the Apriori algorithm does. The other approach is to compress the data by storing the candidate's item sets in an advanced data structure, so that the frequent pattern tree or FP-tree. This is what the FP growth algorithm does. To illustrate how the FP growth algorithm works, let's consider these 10 transactions from a corner fruit vendor. To begin, the algorithm does some pre-processing. The first step is to get a count of each item listed in descending order of count as shown here. Let's assume our support threshold is set at 0.2 or 20%. This means that each item set must occur at least twice in the data to be frequent. Based on the support threshold, the algorithm eliminates the two items that don't meet our criteria, strawberries and pears, from the transaction set.
>
> **[1:36](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/the-fp-growth-algorithm?u=76281980&t=96)** Next, the algorithm source the transaction set based on the frequency of occurrence of each item. For example, in the first transaction, orange now comes before apple because orange occurs eight times while apple occurs seven times. Similarly, in the second transaction, the order is now apple, watermelon, then avocado. To keep things simple, let's use the letters of the alphabet to represent each of the five remaining fruits items in the ordered transaction set. After the pre-processing stage, the FP growth algorithm reads each transaction in the data and encodes its path using a compact data structure called an FP-tree. After reading the first transaction, a new set of nodes labeled a: 1 and b: 1 are created. Note that each node is labeled with the name of an item and the running counts of how often the item occurs in the path. After reading the second transaction, a new set of nodes b, c, and d are created. Each node gets a count of one. Note that even though the first two transactions have b in common, their paths are disjoint because they do not share a common prefix. However, the third transaction
>
> **[3:10](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/the-fp-growth-algorithm?u=76281980&t=190)** does share a common prefix, a, with the first so the algorithm increments that count for node a. Then it creates a new set of nodes, c, d, and e, each with a count of one. The outcome is similar after the fourth transaction is read. New nodes d and e are created, while the count for a is incremented. The items in the fifth transaction share a common prefix, a, b with the first, so the FP growth algorithm updates the count for nodes a and b. Then it extends the path to include c. The algorithm continues encoding new paths until every transaction has been read and mapped onto the FP-tree, which ends up looking like this. To extract frequent item sets from the FP-tree, the FP growth algorithm explores the tree in bottom up fashion. Given the tree shown here, the algorithm will first extract frequent item sets ending in e, then in d, c, b and finally a. For example, to find all frequent item sets that end with e, the algorithm looks at all prefixed paths ending in e. Because some of the nodes were created from transactions that do not include e,
>
> **[4:44](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/the-fp-growth-algorithm?u=76281980&t=284)** the counts have to be updated as shown here. For example, nodes b and c include a path b, c, d that does not include e. Therefore, the counts for b and c were adjusted from two to one. Recall that our support threshold is set at 0.2 or 20%. Since there are three nodes for e, the item set e is considered frequent because its count meets or exceeds the minimum support threshold of two. Next item sets d, e is considered by looking at all prefixed paths with d and e. There are two paths with both d and e in the tree so item sets d, e is considered frequent. Next comes item sets c, e. There are also two paths with both c and e. So the item set is also considered frequent. Item sets b, e is considered next by looking at all prefixed paths ending in b and e. There is only one path with both b and e. This item set is not frequent since it does not meet the minimum support threshold of two. The FP growth algorithm continues this process for all remaining item sets ending in e, which are a, e,
>
> **[6:17](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/the-fp-growth-algorithm?u=76281980&t=377)** c, d, e, a, d, e, b, c, e, a, c, e, and a, c, d, e. After extracting the frequent item sets that end in e, the algorithm proceeds to extract the frequent item sets that end in d by processing the paths within the FP-tree that end in d. Then it extracts the frequent item sets that end in c, in b, and finally, those that end in a.
>
> **[6:52](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/the-fp-growth-algorithm?u=76281980&t=412)** When this process is complete, we end up with the 19 frequent item sets shown here. Note that these are the exact same frequent item sets we ended up with by using the Apriori algorithm in the previous video. The FP growth algorithm does have certain advantages over the Apriori algorithm. For one, it does not require the creation of candidates item sets. Instead, it extracts frequent item sets directly from an FP-tree, which is much faster. Secondly, unlike the Apriori algorithm whose runtime grows exponentially depending on the number of unique items in the transaction set, the run time of the FP growth algorithm only experiences a linear increase in run time with respect to the number of unique items in the data. Finally, because the FP-tree algorithm encodes transactions using a tree like data structure, transactions with common suffixes share a similar path which allows the data to be compressed. This means that the FP growth algorithm typically uses less storage than the Apriori algorithm.

> [!info]- Semantic Content
>
> **CLI Commands:** node (3), find (1)
> **Definitions:** means that (2), is a  (1)
> **Analogies:** for example (3)
> **Warnings:** note that (3)
> **Versions:** 0.2 (2)
> **Cross-References:** previous video (1)
> **Speakers:** - [instructor] (1)

#### [Evaluating association rules](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/evaluating-association-rules?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/evaluating-association-rules?u=76281980&t=0)** - [Instructor] Association rules are very powerful. They can reveal interest in and previously hidden patterns within very large datasets. However, not all rules are created equal. For the most part, association rules can be classified as either trivial, inexplicable, or actionable. Most of the rules we generate will be trivial or inexplicable. Identifying which rules are actionable is not a trivial task, no pun intended. It often requires considerable time and effort. With the awareness that one person's trash is another person's treasure, we must decide what criteria to use when evaluating the association rules we create. These criteria will vary from person to person. Luckily, there are several objective data driven metrics that provide us with some guidance as we go through this process. We saw one of them in a previous video. It was called support. Recall that the support of a rule is a fraction of transactions that contain the rule. We use support as a way to identify strong rules. This is because rules with low support are rules that don't occur a lot. They may occur simply by chance
>
> **[1:33](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/evaluating-association-rules?u=76281980&t=93)** and are typically not actionable. Another metric that often is used to quantify the strength of an association rule is confidence. The confidence of a rule is the predictive power or accuracy of the rule. The confidence of a rule is the support of the rule divided by the support of the antecedent. Recall that the antecedent x is the left side of a rule while the consequent y is the right side. The possible values for confidence range from zero to one. To illustrate how to calculate the confidence of a rule, let's consider this market basket dataset of five transactions. The confidence of the rule milk given bread, cereal is 0.4 divided by 0.6, which yields 0.67. Do you get how we got these numbers? Let me explain. 0.4 is a support of the rule. Two out of the five transactions include bread, cereal and milk. They are transactions, C and D. 0.6 is the support of the antecedent, which is bread, cereal. There are three transactions that contain the item set bread, cereal. This means that the support of bread, cereal is three divided by five, which is 0.6.
>
> **[3:09](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/evaluating-association-rules?u=76281980&t=189)** A confidence of 0.67 can be interpreted to mean that of all the transactions where both bread and cereal were purchased, 67% of them also included the purchase of milk. The next metric is lift. The lift of a rule is the increased likelihood of the rule occurring relative to its typical rate of occurrence. Lift tells us how much more the antecedent and consequents occur together in contrast to how often they occur independently. In other words, lift is the strength of association. We compute the lift of a rule by dividing the confidence of the rule by the support of the consequent of the rule. Lift values range from zero to infinity where a value of one indicates independence between the antecedent and the consequent. The lift of the rule milk given bread, cereal is 0.67 divided by 0.8, which yields 0.84. 0.67 is the confidence of the rule and 0.8 is the support of the consequent. We can interpret a lift of 0.84 to mean that customers who bought bread and cereal are 16% less likely to also buy milk.
>
> **[4:45](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/evaluating-association-rules?u=76281980&t=285)** We subtracted the lift value from one to get the reduction in likelihood. This is because our lift value is less than one. If the lift value were more than one, we would interpret it as a multiplier of likelihood. For example, if our lift value were 2.4, this would mean that customers who bought bread and cereal are 2.4 times more likely to also buy milk. Leverage is similar to lift and can be thought of as a normalized value for lift. It shows the difference between the observed frequency of a rule and the frequency that would be expected if the antecedent and consequent were independent. Leverage values range from negative one to one where a value of zero indicates independence between the antecedent and the consequent. The leverage of a rule is calculated as a support of the rule minus the product of the support of the antecedent and the support of the consequent. The leverage of the rule milk given bread, cereal is negative 0.08. Because the leverage value is negative and relatively small, we interpret the leverage value to mean that customers who buy bread and cereal are slightly less likely to also buy milk. Note that this is consistent with the lift score.
>
> **[6:22](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/evaluating-association-rules?u=76281980&t=382)** If the leverage value were positive, then it would indicate an increased likelihood. The next metric is known as conviction. Conviction quantifies how dependent the consequent is on the antecedent. It is also related to lift. Similar to lift, conviction values range from zero to infinity where a value of one indicates independence between the antecedent and the consequent. The higher the conviction, the more likely it is that the consequent is dependent on the antecedent and vice versa. Conviction is calculated as one minus the support of the consequent divided by one minus the confidence of the rule. The conviction of the rule milk given bread cereal is 0.61. We interpret the conviction value to mean that the rule milk given bread, cereal would be correct 39% more often if the consequent were dependent on the antecedent. In other words, the consequent is not that dependent on the antecedent. The final metric we look at is called Zhang's metric. It quantifies the degree of association or dissociation between the antecedent and the consequent.
>
> **[7:57](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/evaluating-association-rules?u=76281980&t=477)** The possible values for Zhang's metric range from negative one to one, which represent perfect association and perfect dissociation respectively. Zhang's metric is useful in identifying items that should not be placed next to each other even if they had been purchased together previously. The formula for Zhang's metric is rather involved and is shown here. The Zhang metric for the rule milk given bread, cereal is negative 0.33. This indicates a moderate dissociation between milk and both bread and cereal. Because these item sets are dissociated, the takeaway would be to separate them in the store. Doing so would have a moderate impact on purchase patterns for both item sets.

> [!info]- Semantic Content
>
> **Versions:** 0.67 (4), 0.6 (3), 0.4 (2), 0.8 (2), 0.84 (2)
> **Definitions:** is a  (2), in other words (2), means that (1), known as (1), is called (1)
> **Analogies:** similar to (2), for example (1)
> **Cross-References:** previous video (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Why and when to use association rules](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/why-and-when-to-use-association-rules?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/why-and-when-to-use-association-rules?u=76281980&t=0)** - [Narrator] In order to know when to use association rules, we need to understand their strengths and weaknesses. In terms of strengths, association rules are very good with [[Big Data]]: the larger the better. The more occurrences there are of a particular rule within a dataset, the more interesting the rule is, and the more likely it is that the rule is actionable. The simple if/then syntax of an association rule makes it very easy to understand and communicate. The left hand side of a rule, which is known as antecedent, is the condition that needs to be met, while the right hand side of the rule, which is known as a consequence, is expected result of meeting the condition. Association rules are very useful for [[Data Mining]] tasks, such as discovering unexpected or previously hidden patterns within a dataset. While commonly used for market basket analysis, association rules are useful in identifying patterns of co-occurrence in a wide variety of domains. Association rules have been used to identify frequently occurring patterns of DNA and protein sequences in cancer cells. They have also been used to find patterns of medical claims that occur in combination with fraudulent credit card use, and they have also been used
>
> **[1:32](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/why-and-when-to-use-association-rules?u=76281980&t=92)** to identify patterns of behavior that proceed customer changes to cable TV subscriptions. There are some weaknesses inherent with association rules as well. Association rules are not very useful when working with small datasets. The fewer the number of occurrences of a rule, the less interesting it is. This is because rules that occur infrequently could simply occur by chance and are typically not actionable. It is sometimes difficult to properly separate true insight from common sense when evaluating association rules. Most rules generated during association rule mining are trivial or inexplicable. Identifying rules which are truly actionable often requires domain knowledge and a significant amount of effort. Because one person's trash is another's treasure, the insight derived from association rules can be very subjective. If care is not taken, one can easily draw misleading or incorrect conclusions from random patterns in the data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Big Data]] (1), [[Data Mining]] (1)
> **Definitions:** known as (2)
> **CLI Commands:** find (1)
> **Env Vars:** dna (1)
> **Analogies:** such as (1)
> **Speakers:** - [narrator] (1)


### 2. Discovering Patterns with Association Rules

[↑ Back to Table of Contents](#table-of-contents)

#### [How to collect data for association rule mining](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-collect-data-for-association-rule-mining?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-collect-data-for-association-rule-mining?u=76281980&t=0)** - [Instructor] Market basket analysis or affinity analysis is a process of identifying patterns and extracting meaningful insight from transaction sets. Association rules are often used for market basket analysis because they allow us to discover, quantify and analyze the co-occurrence of items within a set of transactions. In this video, you will learn how to import and explore a transaction set for association rule mining in [[Python (Programming Language)|Python]]. Note that this video is a first in a four video sequence that also teaches you how to generate frequent item sets, how to create association rules and how to evaluate association rules in Python. I would also like to highlight that the Python packages we use in these four tutorials, CSV, Mlxtend, [[Pandas (Software)|Pandas]] and NumPy have all been pre-installed for you as part of your [[Codespaces]] environment. The data that we're going to analyze is market basket data collected from a local grocery store over a 30 day period. The data is stored in CSV format as shown here on the screen. Each row in the data represents a set of items purchased by a customer during a store visit which we refer to as a transaction. As expected, the number of items
>
> **[1:33](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-collect-data-for-association-rule-mining?u=76281980&t=93)** in each transaction varies so we cannot simply bulk import this data into a tabular data structure, such as a Pandas data frame as is. Instead, we need to import the data one row at a time. To do this, we first need to import the reader object from the CSV package. I've prewritten this code for you so let's go ahead and run it. Next, we iterate over each line in the input file which is called groceries.csv and append it to a list called groceries. So I've also prewritten this code. My code begins with an empty cell called groceries, empty list, sorry, called groceries. Then I open up the CSV file in read mode and then I iterate through every single row in the CSV file and append what I read into the empty groceries list. So let's run that code. Now let's preview the first five elements in the groceries list to make sure that the import worked as expected. So I'm going to go ahead and type groceries, the name of our list, and I'm going to use slice notation to get the first five rows. I'm going to say zero to five. There you have it. So the first transaction is citrus fruit, semi-finished bread, margarine, and ready soups and the fifth one is other vegetables,
>
> **[3:06](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-collect-data-for-association-rule-mining?u=76281980&t=186)** whole milk, condensed milk, long life bakery product, okay? Now that we've imported the transactions into a list, we need to encode them and represent the data in a sparse format before we can generate frequent item sets. To transform our data, we first need to import the transaction encoder class from the Mlxtend.preprocessing package. The MLxtend package provides several functions and objects for pre-processing transaction data, generating frequent item sets and creating association rules. We are going to be using this package extensively in this tutorial. So let's go ahead and import the package that we need. Then we instantiate an object called encoder from the transaction encoder class. So we're going to start with encoder, to know the object, and the class is transaction encoder. Okay, so we're going to call that to instantiate the object. So let's run that. Using the encoder object, we call the fit method to extract the unique labels in the transaction set and we also use the transform method to one-hot encode the transactions into a Boolean NumPy array. So we're going to start with, we're going to call our array transactions. So transactions. I'm going to now use the encoder object, call the fit method for the encoder object.
>
> **[4:41](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-collect-data-for-association-rule-mining?u=76281980&t=281)** Within the fit method, I'm going to pass our groceries list to it. I'm going to now chain another method called transform, and within this method, I'm also going to pass groceries to this method. And once I do that, I want to preview to make sure that my data comes out the way I expect it to come out. Okay, so we're good to go. So let's run that, and now we see our result. So we have a Boolean NumPy array of our transactions. Next, we need to convert the transactions into a Pandas data frame. This requires that we first import the Pandas package so let's do that. Then we passed the Boolean array and item names to Pandas data frame constructor function to create a new data frame called item sets. Okay, so we're going to call it item sets. Going to use pd, which is the alias for our package. Call the data frame constructor function. Within the function, I'm going to pass our transactions. Then specify the column names, columns is equal to. So I'm going to use the encoder.column attributes, column_attribute for subject called columns. Okay, so let's go ahead and run that. So we can now preview the first five rows
>
> **[6:13](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-collect-data-for-association-rule-mining?u=76281980&t=373)** in the item sets dataframe by calling the head method. So itemsets.head. There you have it. What we now have is a Pandas dataframe of our transactions. We can also get a concise summary of the structure of the item sets dataframe by calling the info method. So let's do that, itemsets.info.
>
> **[6:47](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-collect-data-for-association-rule-mining?u=76281980&t=407)** All right, by looking at this output, let's look at the range index value of the summary. We can tell from the range index that there are 9,835 transactions in the dataset. The columns value tells us that there are 169 features or unique items in this dataset. There you have it. We successfully imported a transaction set into our environment. In the next video, I will illustrate how to generate frequent item sets from the transaction set, which we imported in this video. See you on the other side.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (6), [[Python (Programming Language)|Python]] (3), [[Codespaces]] (1)
> **CLI Commands:** python (3), make (2)
> **Env Vars:** csv (5)
> **Definitions:** is a  (3), is called (1)
> **File Paths:** groceries.csv (1)
> **Code Identifiers:** column_attribute (1)
> **Cross-References:** in the next (1)
> **Analogies:** such as (1)

#### [How to generate frequent itemsets](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-generate-frequent-itemsets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-generate-frequent-itemsets?u=76281980&t=0)** - [Instructor] In this video, you will learn how to generate frequent itemsets in [[Python (Programming Language)|Python]] using the apriori, fpgrowth and fpmax [[Algorithms]]. Note that this video is a second in a four video sequence that also teaches you how to import and explore transactions, how to create association rules and how to evaluate association rules in Python. If you have not done so, watch the previous video for a detailed explanation of the prior code. Before we begin, let's run the code we created in that video to get our environment up to speed. So I'm going to go up here and click on Run All. Now that we have our transactions in a compatible format which is one-hot encoded [[Pandas (Software)|pandas]] DataFrame, let's limit our focus to the frequent itemsets. The mlextend.frequent_pattern sub-package provides three functions for generating frequent itemsets. They are apriori, fpgrowth and fpmax. All three functions have similar syntax, so we're going to limit our illustration to the apriori function. Let's import the function. The apriori function takes several arguments. The first one is the pandas DataFrame
>
> **[1:36](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-generate-frequent-itemsets?u=76281980&t=96)** of the transactions we wish to analyze. The second is the minimum support threshold of the itemsets we consider frequent. This value specifies how often an itemset must occur in the transaction set in order to warrant our attention. Let's assume that we only want to focus our attention on itemsets that occur at least five times a day. Given that our data is for 30 days and our dataset has 9,835 transactions, this means that we need to set our minimum support threshold to five times 30 divided by 9,835. This is approximately equal to 0.015. So let's use this minimum support threshold in our data. So we're going to say frequent_itemsets is equal to apriori so we're going to call the apriori function and we're going to pass through it a few things. The first is our itemsets data. Then we're going to specify the minimum support which we have here as 0.015. Then use columns is equal to true.
>
> **[3:06](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-generate-frequent-itemsets?u=76281980&t=186)** By default, the apriori function returns the numeric column indices of the items in the transaction set. For ease of interpretation, we did set the use columns argument within the function to true. This tells the function to return item names instead of integer values. Let's see what we got. So from the output, we can tell that there are 180 itemsets with a minimum support value of 0.015. To get a better sense of which itemsets have the lowest or highest support values, let's sort of this data in descending order of support. So we're going to start with our DataFrame frequent_itemsets. We're going to use this sort_values method. Within that, I'm going to specify which column to sort by which is support. And I'm going to say that the support should be sorted in ascending order false, which means in descending order. Now we see that whole milk, other vegetables, roll/buns, soda and yogurt are the five most frequently bought items in the store. One of the benefits of working with pandas DataFrames is that we can easily transform and filter our results to meet our needs.
>
> **[4:40](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-generate-frequent-itemsets?u=76281980&t=280)** For example, let's assume that we are only interested in frequent itemsets with a length greater than two. We start by getting the length of the items in the itemsets column as follows. So we're going to call this length. So we're going to call it object and we're going to get it from the frequent itemsets DataFrame. So here I'm going to specify which column I want so which is itemsets and I'm now going to convert that to a string and get the length. Then we can create a logical filter based on the length of the itemsets. So let me come down here. I'm now going to create a filter, call it rows is equal to length greater than two. So let's run that. Finally, we apply the filter to the frequent itemsets in DataFrame. So I'm going to call frequent_itemsets. Going to specify rows as our filter. Let's run that. Now we see the six frequent itemsets with a length greater than two. We can also use a described method of a pandas DataFrame to get a big picture view of the distribution of values in the data. For example, to get a statistical summary
>
> **[6:14](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-generate-frequent-itemsets?u=76281980&t=374)** of the support values by itemset length, we can do the following. So here I'm going to start with my DataFrame frequent_itemsets. Next I'm going to groupby, I'm going to group by length. Then I'm going to specify which column I want to get statistical summary from which is support. Then I'm going to use a .describe describe method. Okay let's make sure everything is good to go and then we can run that. So now we get a statistical summary that the count column from this tells us that the majority of the transactions that are considered frequent are two item purchases. That's 101 of them. While the mean and 50% columns tell us that the transactions with the length of one typically have higher support values than those with a length of two or three. In this tutorial, we only use apriori frequent itemset generation function. Note that if you want to try out the fpgrowth or the fpmax functions, you simply need to import them as shown here. Once you're done with that, you can now generate frequent itemsets using the applicable function just as we've done here. In Chapter One,
>
> **[7:48](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-generate-frequent-itemsets?u=76281980&t=468)** we explored the apriori and fpgrowth algorithms in detail. We did not cover fpmax. Fpmax is a variant of fpgrowth which focuses on obtaining maximal itemsets and itemsets X is set to be maximal if it is frequent and there exists no frequent superset containing X. In other words, if we consider X to be a maximal itemset, it cannot be a subset of another frequent itemset. With our frequent itemsets now successfully imported or generated sorry, the next step is to create association rules. That is what we're going to do in the next video. See you on the other side.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (4), [[Python (Programming Language)|Python]] (2), [[Algorithms]] (2)
> **Code Identifiers:** frequent_itemsets (4), frequent_pattern (1), sort_values (1)
> **Definitions:** is a  (2), means that (1), in other words (1)
> **CLI Commands:** python (2), make (1)
> **Versions:** 0.015 (3)
> **Analogies:** for example (2), picture (1)
> **Cross-References:** previous video (1), in the next (1)
> **Warnings:** note that (2)

#### [How to create association rules](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-create-association-rules?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-create-association-rules?u=76281980&t=0)** - [Instructor] In this video, you will learn how to create association rules from frequent itemsets in [[Python (Programming Language)|Python]]. Note that this video is a third in a four video sequence that also teaches you how to import and explore transactions, how to generate frequent itemsets and how to evaluate association rules in Python. If you have not done so, watch the previous two videos for a detailed explanation of the prior code. Before we begin, let's run the code we created in the last two videos to get our environment up to speed. The next step in our market basket analysis process is to create association rules that describe the co-occurrence of itemsets within the transaction set. The association_rules function in the mlxtend.frequent_patterns subpackage allows us to create these rules. Let's import it. The association_rules function takes several arguments. The first is a frequent itemset. The next is the metric we intend to use to filter the rules for significance. This can either be "support", "confidence", "lift", "leverage" or "conviction". Let's assume that we want to limit our focus to rules that have a confidence of 0.25 or more. To do this, we set the metric argument to "confidence"
>
> **[1:37](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-create-association-rules?u=76281980&t=97)** and the min_threshold argument to 0.25. So let's do that. So we're going to create rules is equal to association_rules function. We're going to pass with our frequent_itemsets. I want to say the metric is equal to confidence.
>
> **[2:04](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-create-association-rules?u=76281980&t=124)** We're going to set the min_threshold to 0.25.
>
> **[2:13](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-create-association-rules?u=76281980&t=133)** Okay, let's make sure everything looks good. Then we can run this. Let's see what rules we generated. So we're just going to call the rules.
>
> **[2:30](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-create-association-rules?u=76281980&t=150)** So we see that there are 78 association rules that meet our criteria. Each rule is made up of an antecedent and a consequent. For each rule, we get metrics that tell us the support of the antecedent and the support of the consequent. We also get metrics that tell us the support, confidence, lift, leverage, and conviction of each rule. Because our rules are returned as a [[Pandas (Software)|pandas]] DataFrame we can easily transform and filter the data to find what we need. For example, let's say we're only interested in rules that include 'rolls/buns' in the antecedent. We start by creating a logical expression as a filter. So let's do that. So we're going to call this rows. I'm going to say rows from our rules DataFrame. We're going to specify the column antecedents. I'm going to say the antecedent is equal to and we're going to use a curly brace, say rolls/buns. All right, I think we are good. All right, let's run that. All right, so note that the entries in the antecedents and consequents columns are of type frozenset, which is why we include the curly braces
>
> **[4:06](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-create-association-rules?u=76281980&t=246)** around the item names. The next step is to apply the filter to the rules DataFrame. So let's come in here and all we have to do is specify rules the DataFrame and we filter by rows. Let's run that. We get one rule that matches our criteria. As you can imagine, we can create a similar filter with the consequent. So let's do the same thing. So now we're going to say rows, our filter is going to be rows under rules, going to specify consequent, consequents. And we say the consequents are have to be equal to, right? Let's say here rolls/. And this apply this rule, let's say rows. So we can see our result. Let's run that. This time, we get three rules that match our filter. Note that in the previous two examples, we only match rules with 'rolls/buns' alone as the antecedent or the consequent. If our goal is to match all rules with 'rolls/buns' and any other item in the antecedent for example, we would need to convert the antecedent column to a string, vectorize the string
>
> **[5:39](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-create-association-rules?u=76281980&t=339)** and use the contains() method in the following way. So let's walk through that. So we're going to now create our filter rows. We're going to say our rows filter is based on the rules DataFrame. Going to specify antecedents, right? That's the column we want. Going to convert the antecedents column to a string because it's a frozenset. Then we're going to vectorize using the str method and then we're going to say contains() method. And within this we're going to say contains rolls/buns. Let's get down here and let's now apply the filter. Let's look at everything looks good. So let's run that. So now we see that there are five rules which 'rolls/buns' anywhere in the antecedent. We can also filter our rules by the length of the antecedent or consequent. For example, to match only rules with an antecedent length more than one, we do the following. So we create another filter called rows. I'm going to say rows is equal to our DataFrame rules. Now we're going with antecedents, right? So we're going to say antecedents. We're going to say antecedents.str, which is a vectorize.
>
> **[7:16](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-create-association-rules?u=76281980&t=436)** Then we get length. I say length has to be greater than one, okay? I say rules. Going to apply the filter based on rows. Let's make sure everything looks good. Very good. So now we can run that. So this time around we get 16 rules that match our criteria. We can also filter our rules based on the values in any of the numeric columns. For example, let's assume that we only want to see rules that have a lift of more than two, a leverage score of more than 0.01 and a conviction score of more than 1.4. We can write this as follows. So we're going to start off again with the name of our filter rows. We're now going to say, okay, let's create a set of filters in here. So the first one is rules. I'm going to say the rules DataFrame. The column that we want is lift. I'm going to say lift has to be greater than two. So that's the first expression. The next one we're going to say use the ampersand as an and, create another expression so say rules. We want the column leverage and we want leverage to be greater than 0.01. That's the next one. The third one, we're going to say we want rules again. This time around we want conviction. And one, conviction; two, be greater than 1.4, okay?
>
> **[8:59](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-create-association-rules?u=76281980&t=539)** And then now we apply the filter to the rules DataFrame, let say rows. Alright, so let's make sure everything looks good. So we have our rules. We say lift is greater than two, rules leverage more than 0.01 and rules conviction more than 1.4. Looks good. So let's run that. So this time around, there are three rules with a lift of more than two, a leverage score of more than 0.01 and a conviction score of more than 1.4. As you can imagine, the examples that I'm showing you here are just a tip of the iceberg, right? You can slice and dice the rules DataFrame in as many ways as you can imagine. So feel free to do this. So now that we've successfully created association rules and know how to filter them, the next step is to figure out which rules are potentially interested. In the next video, I illustrate how to evaluate association rules based on some of the metrics we learned about in chapter one. See you on the other side.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (2), [[Pandas (Software)|Pandas]] (1)
> **Versions:** 0.01 (4), 1.4 (4), 0.25 (3)
> **Code Identifiers:** association_rules (3), min_threshold (2), frequent_patterns (1), frequent_itemsets (1)
> **Analogies:** for example (4), imagine (3)
> **CLI Commands:** make (3), python (2), find (1)
> **Definitions:** is a  (3)
> **Warnings:** note that (3)
> **Cross-References:** in the last (1), in the next (1)

#### [How to evaluate association rules](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-evaluate-association-rules?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-evaluate-association-rules?u=76281980&t=0)** - In this video, you will learn how to use several data driven objective measures of interest in this, to evaluate association rules in [[Python (Programming Language)|Python]]. Note that this video, is a fourth, in a four video sequence, that also teaches you how to import and explore transactions, how to generate frequent item sets, and how to create association rules in Python. If you have not done so, watch the previous three videos, for a detailed explanation, of the prior code. Before we begin, let's run the code we created in the last three videos, to get our environment, up to speed. So I'm going to go up here to run all, click on that. So now that we've created association rules, and know how to filter rules, based on different criteria, let's take a look at how to evaluate them, based on the associated metrics. A quick way to get a big picture view of the metrics, is with summary [[Statistics]]. We do this, by calling the describe method, of the rules data frame. So let's call that. So rules is our data frame. I'm going to call the describe method. Let's run that. This summary statistics provide us with the mean, standard deviation, minimum, maximum and some percentile values
>
> **[1:34](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-evaluate-association-rules?u=76281980&t=94)** for the association rule metrics. From the summary, we can tell that a typical rule, has a lift of 1.76, and that the lift values range from 0.99 to 3.04. Lift tells us how much more the antecedent and consequent occur together, in contrast to how often they occur independently. In other words, lift is the strength of association. Lift values range from zero to infinity, where a value of one indicates independence between the antecedent, and the consequent. Let's take a look at the top five rules by lift. So we're going to start with our rules that are set. We're going to sort values, within our sort method. We're going to specify what column. So we're going to sort by lift, and we are going to sort where ascending is equal to false. And then we are going to call the head method. So only return the first five rows. So I think everything looks good. Let's run that. The first rule has a lift score of 3.04. We interpret this to mean that customers who bought beef, are 3.04 times more likely to also purchase root vegetables. Note that lift values above one indicate an increased likelihood, while lift values below one, indicate a reduced likelihood.
>
> **[3:07](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-evaluate-association-rules?u=76281980&t=187)** Leverage is similar to lift. And can be thought of, as a normalized value for lift. Leverage values range from negative one to one, where a value of zero, indicates independence between the antecedent and the consequent. Let's take a look at the top five rules by leverage. So we're going to also start with our rules. I'm going to say sort values. We're going to sort this time by leverage. I'm going to say ascending, is equal to force as well. I'm going to get the head, so we can get the top five rules. The first rule has a leverage score of 0.026. We interpret this to mean that customers who bought root vegetables, are also likely to purchase other vegetables. This is expected behavior. However, the second rule, which tells us that customers who bought whole milk, are 1.5 times or 50% more likely to also purchase other vegetables, is a bit suspect. Rules that include highly purchased items such as whole milk, can be deceiving. So we should also look at the conviction of association rules. Conviction quantifies how dependent, the consequent is on the antecedent. It is also related to lift. However, unlike lift,
>
> **[4:40](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-evaluate-association-rules?u=76281980&t=280)** conviction it's sensitive to rule direction. This means that conviction of A-B, is not equal to the conviction of B-A. Conviction values range from zero to infinity, where a value of one indicates independence between the antecedent and the consequent. Let's take a look at the top five rules by conviction. So we want to start with rules again, sort values, sort by conviction.
>
> **[5:20](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-evaluate-association-rules?u=76281980&t=320)** Sort as false, the head. So we see that the first rule has a conviction of 1.54. This means that the rule, tropical fruits yogurt, yields whole milk would be correct or would be incorrect, 54% more often, or 1.5 times as often, if the consequent was independent of the antecedent. The higher the conviction, the more likely it is that the consequent, is dependent on the antecedent. Besides the metrics returned by the association rules function, Zhang's metric is another useful metric that we should also take into consideration, when evaluating rules. It ranges in value from negative one to one, which represents perfect association, and perfect dissociation respectively. Zhang's metric is useful in identifying items that should not be placed next to each other, even if they have been purchased together previously. The calculation is rather involved, and I show that here. So to create, to use Zhang's metric, we have to actually create a function. And I've also pre-written the function. The code for the function here for you. So let's go ahead and run that function. So next we can assign the result of the function, to a new column called Zhang, in the rules data frame as follows.
>
> **[6:56](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-evaluate-association-rules?u=76281980&t=416)** So we're going to go in here. So we're going to say rules. I call this new column, Zhang. And Zhang is equal to Zhang metric of rules. So let's run this, and see what we have. So now we have a new column on the right, that has a Zhang metric for every single rule. So let's take a look at the top five rules by Zhang metric. So we're going to say rules, going to sort values, just turn around. We're going to say Zhang, ascending is equal to false, Go look at head. Okay, I think we're good to go. The first rule has a Zhang metric score of 0.708. This indicates a pretty strong positive association between beef and root vegetables. This tells us, that if we were to separate beef from root vegetables in our store, there could be an impact, to how much of both are purchased. In other words, pairing beef and root vegetables for promotional purposes, is a good choice. Looking at rules that have a low Zhang metric
>
> **[8:30](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/how-to-evaluate-association-rules?u=76281980&t=510)** is also very useful. Let's take a look at the bottom five rules by Zhang metric. So we going to start with rules, we going to sort values, we going to sort by Zhang, I'll say that a head. So the first rule has a Zhang Metric score of negative 0.007. This indicates a slight dissociation, between bottled beer and whole milk. This tells us that if we were to separate bottled beer from whole milk in the store, there would likely not be an appreciable impact on purchase patterns for both items. This means that it would be a bad choice, to pair these two items together, for promotional purposes. Congratulations. If you've been following along, through all four videos, that means that you've successfully imported transactions, generated frequent item sets, created association rules, and evaluated the rules. Recall that when it comes to association rules, one person's trash, could be another person's treasure. This means that it really is up to you, which metrics and which rules to focus on. Have fun with it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (2), [[Statistics]] (2)
> **Versions:** 3.04 (3), 1.5 (2), 1.76 (1), 0.99 (1), 0.026 (1)
> **Definitions:** means that (5), is a  (3), in other words (2)
> **Analogies:** picture (1), similar to (1), such as (1)
> **CLI Commands:** python (2)
> **Warnings:** note that (2)
> **Cross-References:** in the last (1)
> **UI Navigation:** click on (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/next-steps?u=76281980&t=0)** - [Instructor] Congratulations. You now know what an itemset is, how frequent itemsets are generated, how association rules are created, how they are evaluated, and how to use them. You've also learned how to import transactions, generate frequent itemsets, create association rules, and evaluate association rules in [[Python (Programming Language)|Python]]. The foundational knowledge and skills you've acquired in this course should serve as a stepping stone to continue learning about machine learning. Specifically, it should serve as a launchpad for solving more complex, unsupervised machine learning problems using association rules. Here are a few recommended next steps. Association rules are one of many unsupervised machine learning models we can build in Python. I encourage you to continue to explore other [[LinkedIn]] Learning courses that illustrate the use of different types of machine learning models. As a starting point, you can check out my other courses in the Machine Learning with Python series on LinkedIn Learning. Besides courses that explore other models, I also encourage you to explore LinkedIn Learning courses that highlight the importance of [[Ethics]] in [[Data Collection]] and use. An example of such a course is [[Data Ethics- Watching Out for Data Misuse]].
>
> **[1:35](https://www.linkedin.com/learning/machine-learning-with-python-association-rules/next-steps?u=76281980&t=95)** If you are interested in broadening your skillset into other languages, such as R, then also check out my book, "Practical Machine Learning in R." Finally, I recommend that you continue to practice what you've learned, find new problems to solve, find interest in datasets on which to practice your new skills. The journey into the world of machine learning with Python is a lifelong one. Thanks for coming along with me on this journey. I'll see you next time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (4), [[LinkedIn]] (3), [[Ethics]] (1), [[Data Collection]] (1), [[Data Ethics]] (1)
> **CLI Commands:** python (4), find (2)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Frederick Nwanganga]]

## Resources

- [GitHub Repository](https://github.com/LinkedInLearning/machine-learning-with-python-association-rules-3209139/codespaces)

## Skills Covered

- Python (Programming Language)
- Machine Learning
- Artificial Intelligence (AI)

## Path Context

### In [[Develop with Python for AI and Machine Learning]]
← [[Machine Learning with Python- k-Means Clustering]] | **5 of 6** | [[Advanced Python Projects- Build AI Applications]] →

### In [[Advance Your Skills as a Machine Learning Specialist]]
← [[Machine Learning with Python- k-Means Clustering]] | **3 of 9** | [[Machine Learning with Python- Logistic Regression]] →

## Appears In

- [[Develop with Python for AI and Machine Learning]]
- [[Advance Your Skills as a Machine Learning Specialist]]

## Related Courses

_Courses sharing skills:_

- [[Advanced Python in Excel- Machine Learning]] — Python (Programming Language), Artificial Intelligence (AI), Machine Learning
- [[Machine Learning with Python- k-Means Clustering]] — Python (Programming Language), Artificial Intelligence (AI), Machine Learning
- [[Machine Learning with Python- Logistic Regression]] — Python (Programming Language), Artificial Intelligence (AI), Machine Learning
- [[Machine Learning with Python- Decision Trees]] — Python (Programming Language), Artificial Intelligence (AI), Machine Learning
- [[Advanced Nlp With Python For Machine Learning]] — Python (Programming Language), Artificial Intelligence (AI), Machine Learning

---

[↑ Back to top](#)