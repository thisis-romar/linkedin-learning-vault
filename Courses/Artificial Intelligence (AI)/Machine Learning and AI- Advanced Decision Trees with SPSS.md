---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: machine-learning-and-ai-advanced-decision-trees-with-spss
url: "https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss"
duration_minutes: 83
duration: 1h 23m
level: Advanced
updated: 2/7/2024
learners: 104585
skills:
  - Machine Learning
  - Artificial Intelligence (AI)
  - Decision Trees
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQFnMHfZVRGQYg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1668018019156?e=2147483647&amp;v=beta&amp;t=HxliPaHM2yHLhRyVHfRpgFVfpvAWUrcKz2UMggHrIRM"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Develop Your SPSS Skills]]'
prev_courses:
  - '[[Machine Learning and AI Foundations- Decision Trees with SPSS]]'
next_courses:
  - '[[Machine Learning and AI Foundations- Clustering and Association]]'
path_nav: '[{"path":"Develop Your SPSS Skills","position":5,"total":6,"prev":"Machine Learning and AI Foundations- Decision Trees with SPSS","next":"Machine Learning and AI Foundations- Clustering and Association"}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - topic/data-science
  - skill/machine-learning
  - skill/artificial-intelligence-ai
  - skill/decision-trees
status: not-started
created: 2026-04-28
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Machine%20Learning%20and%20AI-%20Advanced%20Decision%20Trees%20with%20SPSS.md)

![Machine Learning and AI: Advanced Decision Trees with SPSS](https://media.licdn.com/dms/image/v2/C560DAQFnMHfZVRGQYg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1668018019156?e=2147483647&amp;v=beta&amp;t=HxliPaHM2yHLhRyVHfRpgFVfpvAWUrcKz2UMggHrIRM)

# Machine Learning and AI: Advanced Decision Trees with SPSS

> If you're working towards an understanding of machine learning, it's important to know how to work with decision trees. In this course, explore advanced concepts and details of decision tree algorithms. Learn about the QUEST algorithm and how it handles nominal variables, ordinal and continuous variables, and missing data. Explore the C5.0 algorithm and review some of its key features such as glob

> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss) | 1h 23m | Advanced | 105K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **1. Introduction** (3 videos)
- **2. 1. Understanding QUEST** (6 videos)
- **3. 2. Understanding C5.0** (6 videos)
- **4. 3. Advanced Topics** (9 videos)
- **5. Conclusion** (1 videos)

### 1. Introduction

#### Advanced decision trees with SPSS
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/advanced-decision-trees-with-spss?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/advanced-decision-trees-with-spss?u=76281980&t=0)** - [Keith] We're about to continue the journey that began with the decision trees with SPSS course.
>
> **[0:06](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/advanced-decision-trees-with-spss?u=76281980&t=6)** We've already learned about the two most popular and influential decision tree algorithms, but there are many more options than just those two.
>
> **[0:15](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/advanced-decision-trees-with-spss?u=76281980&t=15)** I'm Keith McCormick and decision tree algorithms have been a constant companion during my nearly 30 years building predictive models.
>
> **[0:22](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/advanced-decision-trees-with-spss?u=76281980&t=22)** And this course, we'll learn about the QUEST algorithm and the very influential C5 algorithm.
>
> **[0:29](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/advanced-decision-trees-with-spss?u=76281980&t=29)** We'll also learn about some newer algorithms that have become available in IBM SPSS model or through Python libraries.
>
> **[0:38](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/advanced-decision-trees-with-spss?u=76281980&t=38)** There's a lot to cover, so let's dive right in.

> [!info]- Semantic Content
>
> **Env Vars:** spss (2), quest (1), ibm (1)
> **Code Keywords:** continue (1), let (1)
> **CLI Commands:** python (1)
> **Speakers:** - [keith] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-you-should-know?u=76281980&t=0)** - [Narrator] This class is perfect for anyone with an interest in data science that wants to understand how decision trees work.
>
> **[0:06](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-you-should-know?u=76281980&t=6)** First, I urge you to check out the first decision trees course right here in the video library.
>
> **[0:13](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-you-should-know?u=76281980&t=13)** It assumes relatively little about the subject but will completely prepare you for this course.
>
> **[0:18](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-you-should-know?u=76281980&t=18)** Perhaps you have a particular interest in the QUEST or C5 algorithms which we're covering in this course, so you're tempted to start with this class.
>
> **[0:28](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-you-should-know?u=76281980&t=28)** Even if that's true, I would watch at least the first chapter of the previous course.
>
> **[0:33](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-you-should-know?u=76281980&t=33)** You may have noticed that I'll be doing demonstations in SPSS Modeler.
>
> **[0:37](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-you-should-know?u=76281980&t=37)** If you'd like to click along, and I encourage you to, you'll pick up the basics in the first course.
>
> **[0:43](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-you-should-know?u=76281980&t=43)** The focus is thoroughly on the concepts though, so you won't need to know a great deal about the software, and if you're using different software, you should be able to learn a great deal about decision trees that you can apply in any environment.
>
> **[0:57](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-you-should-know?u=76281980&t=57)** How much statistics should you know?
>
> **[0:59](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-you-should-know?u=76281980&t=59)** Well, the course is as much about machine learning as it is about statistics.
>
> **[1:04](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-you-should-know?u=76281980&t=64)** Some statistical terms will come up, including a discussion of F-tests, but I'm not assuming that you'll have a lot of advanced knowledge of these terms, so we won't be shy about getting into some details, but all of the prerequisite material that you might need is in machine learning essentials decision trees.

> [!info]- Semantic Content
>
> **Env Vars:** quest (1), spss (1)
> **Code Keywords:** class. (1)
> **Prerequisites:** prerequisite (1)
> **Speakers:** - [narrator] (1)

#### Using the exercise files
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/using-the-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/using-the-exercise-files?u=76281980&t=0)** - [Instructor] I've provided a handful of files for you in the Exercise Files folder.
>
> **[0:05](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/using-the-exercise-files?u=76281980&t=5)** You won't need these for every video, so I'll refer to them when you need them.
>
> **[0:10](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/using-the-exercise-files?u=76281980&t=10)** It's the train.csv file is our practice data involving the passengers of the Titanic.
>
> **[0:15](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/using-the-exercise-files?u=76281980&t=15)** I'm going to show ya how to download that now.
>
> **[0:18](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/using-the-exercise-files?u=76281980&t=18)** You can download it from a website called [kaggle.com](https://kaggle.com).
>
> **[0:23](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/using-the-exercise-files?u=76281980&t=23)** So if you simply search for keywords kaggle titanic, you'll find it, and let's go to the page.
>
> **[0:29](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/using-the-exercise-files?u=76281980&t=29)** You will have to sign-up for kaggle, but of course, it's completely free data, and you may actually find some of the supporting information interesting.
>
> **[0:36](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/using-the-exercise-files?u=76281980&t=36)** If you click on Get the Data, the only file that we need is this initial file, train, the csv file.
>
> **[0:44](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/using-the-exercise-files?u=76281980&t=44)** After you download it, go ahead and put it in the Exercise Files folder, as I've done.
>
> **[0:51](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/using-the-exercise-files?u=76281980&t=51)** If you want to click along, and I encourage you to do so, you'll want to get a copy of the IBM SPSS Modeler Trial.
>
> **[0:59](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/using-the-exercise-files?u=76281980&t=59)** You'll have to get an IBM ID, but it's completely free, and the trial will last about 30 days, which should be more than enough time to work through the course.

> [!info]- Semantic Content
>
> **Env Vars:** ibm (2), spss (1)
> **CLI Commands:** find (2)
> **UI Navigation:** go to (1), click on (1)
> **Exercise Files:** exercise files (2)
> **File Paths:** train.csv (1)
> **Code Keywords:** let (1)
> **URLs:** [kaggle.com](https://kaggle.com) (1)
> **Speakers:** - [instructor] (1)


### 2. 1. Understanding QUEST

#### Overview
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/overview?u=76281980&t=0)** - [Instructor] Let's overview the QUEST algorithm.
>
> **[0:03](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/overview?u=76281980&t=3)** Now remember, we're focused on the algorithm, not any particular software implementation.
>
> **[0:09](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/overview?u=76281980&t=9)** QUEST is an acronym that stands for Quick, Unbiased, and Efficient Statistical Tree.
>
> **[0:15](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/overview?u=76281980&t=15)** So what were the co-authors thinking when they came up with this acronym?
>
> **[0:19](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/overview?u=76281980&t=19)** Well, a little bit of history is helpful.
>
> **[0:21](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/overview?u=76281980&t=21)** CHAID, Chi-square Automatic Interaction Detection, came out in 1980.
>
> **[0:27](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/overview?u=76281980&t=27)** CART, Classification And Regression Trees, came out in 1984.
>
> **[0:33](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/overview?u=76281980&t=33)** So those algorithms were well known when QUEST came out in 1997.
>
> **[0:39](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/overview?u=76281980&t=39)** So what were they trying to improve upon?
>
> **[0:42](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/overview?u=76281980&t=42)** Well, a perceived weakness of CART was that it was slow.
>
> **[0:46](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/overview?u=76281980&t=46)** The reason was, is that, CART examines all possible split points.
>
> **[0:52](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/overview?u=76281980&t=52)** And as we'll see, QUEST doesn't do it that way.
>
> **[0:55](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/overview?u=76281980&t=55)** Also, CHAID was perceived to be biased towards branches with a large number of child nodes.
>
> **[1:03](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/overview?u=76281980&t=63)** So what this means is that CHAID often would gravitate towards categorical variables with lots of categories or grow trees that were somewhat wider than other techniques.
>
> **[1:15](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/overview?u=76281980&t=75)** So how does QUEST do it?
>
> **[1:17](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/overview?u=76281980&t=77)** QUEST uses statistical tests instead of a brute force search for all possible cut points.
>
> **[1:23](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/overview?u=76281980&t=83)** So it examines fewer cut points, but it does so by performing calculations that try to zero in on what that optimal cut point would be.
>
> **[1:33](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/overview?u=76281980&t=93)** It also uses different tests appropriate to different variable types.
>
> **[1:38](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/overview?u=76281980&t=98)** So, it uses Chi-square on categorical variables but it uses F-test on scale variables, as we'll see.
>
> **[1:47](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/overview?u=76281980&t=107)** Once those tests are performed, it can simply rank all of the variables in the data set by their p-values.
>
> **[1:55](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/overview?u=76281980&t=115)** Finally, QUEST uses surrogates for missing data, just like CART.

> [!info]- Semantic Content
>
> **Env Vars:** quest (7), cart (4), chaid (3)
> **Code Keywords:** let (1), finally, (1)
> **Definitions:** is an  (1), stands for (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### How QUEST handles nominal variables
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-nominal-variables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-nominal-variables?u=76281980&t=0)** - [Instructor] Let's learn more about the QUEST algorithm by seeing how it handles nominal variables.
>
> **[0:05](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-nominal-variables?u=76281980&t=5)** Now remember, nominal variables are separate and distinct categories that are not meaningfully ordered.
>
> **[0:13](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-nominal-variables?u=76281980&t=13)** To begin, let's open a stream that's been provided for you called source and type node stream.
>
> **[0:25](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-nominal-variables?u=76281980&t=25)** Okay, let's begin by verifying that the source node is set up properly.
>
> **[0:32](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-nominal-variables?u=76281980&t=32)** So I'm going to edit this and what you'll have to do is double check that the source node is looking for the file train.csv where you've placed it.
>
> **[0:44](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-nominal-variables?u=76281980&t=44)** In my case, it's on the desktop so I'm all set.
>
> **[0:47](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-nominal-variables?u=76281980&t=47)** You'll also notice that a couple of the settings have been changed here for you.
>
> **[0:50](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-nominal-variables?u=76281980&t=50)** For instance, I have indicated that this is a comma delimited file.
>
> **[0:55](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-nominal-variables?u=76281980&t=55)** Now of course, QUEST is available in a number of the different environments, but since we're doing this demonstration in Modeler, there are some mechanics that we have to double check.
>
> **[1:04](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-nominal-variables?u=76281980&t=64)** We're going to go inside the type node and remember that the type node is where we're going to declare level of measurement and role and no matter what environment you're doing QUEST in, you're going to have to make those kinds of declarations so notice that age has been declared as continuous, embarked has been declared as nominal, and of course we're focused on nominal variables in this movie.
>
> **[1:29](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-nominal-variables?u=76281980&t=89)** Also role has been declared.
>
> **[1:31](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-nominal-variables?u=76281980&t=91)** Survived is our target variable and we have a number of potential predictors.
>
> **[1:37](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-nominal-variables?u=76281980&t=97)** Passenger class, sex, age, fare and embarked are among them.
>
> **[1:45](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-nominal-variables?u=76281980&t=105)** Now remember that whenever you're building a predictive analytics model, you need a method of validating your results.
>
> **[1:52](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-nominal-variables?u=76281980&t=112)** In Modeler, the easiest way to do that is a partition node.
>
> **[1:56](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-nominal-variables?u=76281980&t=116)** So we'll attach the partition node and then inside we see a reminder of what it does.
>
> **[2:03](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-nominal-variables?u=76281980&t=123)** We're going to declare a portion of our data as the training partition, the portion on which we're going to build the model and a portion on which we're going to validate if the model works on unseen data.
>
> **[2:16](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-nominal-variables?u=76281980&t=136)** Since the sample size is a tad small, we're going to change the setting to 80% on the train data and 20% on the test data.
>
> **[2:27](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-nominal-variables?u=76281980&t=147)** Okay, so now we're ready to go ahead and build a QUEST model.
>
> **[2:33](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-nominal-variables?u=76281980&t=153)** Here is the QUEST algorithm.
>
> **[2:36](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-nominal-variables?u=76281980&t=156)** I'm going to hook it up to the data.
>
> **[2:38](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-nominal-variables?u=76281980&t=158)** And inside, I'm going to tell it that I want to launch an interactive session.
>
> **[2:46](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-nominal-variables?u=76281980&t=166)** This way we'll be able to examine QUEST and look under the hood.
>
> **[2:51](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-nominal-variables?u=76281980&t=171)** Also, a little detail particular to Modeler.
>
> **[2:55](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-nominal-variables?u=76281980&t=175)** Since we're using a partition node, we don't really need this overfit prevention set, so we'll drop that down to zero.
>
> **[3:02](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-nominal-variables?u=76281980&t=182)** If you were to forget to do that, you would just have less data available for your model.
>
> **[3:08](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-nominal-variables?u=76281980&t=188)** And we'll go ahead and run.
>
> **[3:10](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-nominal-variables?u=76281980&t=190)** Okay, at the moment we're focused on nominal variables so let's go up to tree, grow branch with custom split and take a closer look at embarked.
>
> **[3:20](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-nominal-variables?u=76281980&t=200)** So we're going to click on predictors and where does embarked fall?
>
> **[3:25](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-nominal-variables?u=76281980&t=205)** At the moment, it's coming in fourth.
>
> **[3:27](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-nominal-variables?u=76281980&t=207)** Now how is QUEST determining that?
>
> **[3:30](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-nominal-variables?u=76281980&t=210)** Well, for nominal variables, sex and embarked for instance, it's calculating the chi-square statistic.
>
> **[3:37](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-nominal-variables?u=76281980&t=217)** Notice for the other variables, it's doing a different calculation.
>
> **[3:40](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-nominal-variables?u=76281980&t=220)** But for all of them an adjusted probability can be used to rank the variables and that's how embarked is showing up fourth.
>
> **[3:50](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-nominal-variables?u=76281980&t=230)** I'm going to choose embarked and ask Modeler to grow a branch on the tree.
>
> **[3:57](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-nominal-variables?u=76281980&t=237)** Now let's examine what it's done.
>
> **[3:59](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-nominal-variables?u=76281980&t=239)** Well, we have an overall survival rate of 38.32% and embarked wants to branch at embarkation points Q and S on the left and C as well of those for whom we don't know their embarkation point on the right.
>
> **[4:18](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-nominal-variables?u=76281980&t=258)** Notice that on the right we have an elevated survival rate.
>
> **[4:22](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-nominal-variables?u=76281980&t=262)** It's jumped up from 38% all the way to just under 57% so for those 137 passengers, they have an elevated survival rate.
>
> **[4:35](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-nominal-variables?u=76281980&t=275)** We can see the additional detail below node zero there.
>
> **[4:39](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-nominal-variables?u=76281980&t=279)** We see that adjusted probability value of .000, just as we saw on the previous screen.
>
> **[4:46](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-nominal-variables?u=76281980&t=286)** Remember that what that is indicating to you is that any of those values that are below .05 are significant at 95% confidence.
>
> **[4:56](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-nominal-variables?u=76281980&t=296)** So embarked is a significant predictor of survived.

> [!info]- Semantic Content
>
> **CLI Commands:** node (9), make (1)
> **Code Keywords:** let (5), case, (1), class, (1)
> **Env Vars:** quest (7)
> **Definitions:** is a  (4)
> **Analogies:** for instance (2)
> **File Paths:** train.csv (1)
> **Versions:** 38.32 (1)
> **Cross-References:** as we saw (1)

#### How QUEST handles ordinal and continuous variables
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-ordinal-and-continuous-variables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-ordinal-and-continuous-variables?u=76281980&t=0)** - [Narrator] Let's discuss how QUEST handles ordinal and continuous variables.
>
> **[0:05](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-ordinal-and-continuous-variables?u=76281980&t=5)** We have two issues.
>
> **[0:07](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-ordinal-and-continuous-variables?u=76281980&t=7)** The first issue is how does QUEST handle the ranking of variables?
>
> **[0:13](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-ordinal-and-continuous-variables?u=76281980&t=13)** How does it determine where Fare will fall in the list of variables from most to least important?
>
> **[0:20](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-ordinal-and-continuous-variables?u=76281980&t=20)** Well, in the case of QUEST, in continuous and ordinal variables it's using the F-test which is going to produce a statistical test and a P-value.
>
> **[0:28](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-ordinal-and-continuous-variables?u=76281980&t=28)** Since categorical values are handled with chi-square which also produces a P-value, all the variables in the dataset can be ranked from most important to least important using these P-values.
>
> **[0:42](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-ordinal-and-continuous-variables?u=76281980&t=42)** The next issue is how does QUEST determine where the cut points should be?
>
> **[0:48](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-ordinal-and-continuous-variables?u=76281980&t=48)** In other words, what Fare amount in British pounds should separate the members of Node One from the members of Node Two?
>
> **[0:56](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-ordinal-and-continuous-variables?u=76281980&t=56)** Let's talk about both of these issues in a little bit more detail.
>
> **[1:00](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-ordinal-and-continuous-variables?u=76281980&t=60)** How does F-test work?
>
> **[1:02](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-ordinal-and-continuous-variables?u=76281980&t=62)** Well, the first thing is to be clear about what we're attempting to do.
>
> **[1:05](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-ordinal-and-continuous-variables?u=76281980&t=65)** We're trying to predict a scale-dependent variable using a categorical predictor.
>
> **[1:11](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-ordinal-and-continuous-variables?u=76281980&t=71)** So actually what we're doing in this case, we're actually trying to use Survived to predict Fare.
>
> **[1:18](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-ordinal-and-continuous-variables?u=76281980&t=78)** And that's how we're generating that P-value.
>
> **[1:21](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-ordinal-and-continuous-variables?u=76281980&t=81)** F-tests can be thought of as a signal-to-noise ratio.
>
> **[1:25](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-ordinal-and-continuous-variables?u=76281980&t=85)** And if you look, those that survived, indicated by the number one, paid about 50 British pounds for their ticket on the Titanic.
>
> **[1:35](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-ordinal-and-continuous-variables?u=76281980&t=95)** Those that died paid considerably less, on average around 22 British pounds.
>
> **[1:41](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-ordinal-and-continuous-variables?u=76281980&t=101)** The gap between these two groups between around 48 or 50 on the high end and 22 on the low end, represents the signal that we're measuring in our signal-to-noise ratio.
>
> **[1:54](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-ordinal-and-continuous-variables?u=76281980&t=114)** Now let's talk about the noise.
>
> **[1:57](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-ordinal-and-continuous-variables?u=76281980&t=117)** The error bars show that the upper bound of the 95% confidence interval is probably about 56 pounds for the survivors.
>
> **[2:06](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-ordinal-and-continuous-variables?u=76281980&t=126)** And the lower bound of that confidence interval is more like 43 or 44 British pounds.
>
> **[2:13](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-ordinal-and-continuous-variables?u=76281980&t=133)** The width of that confidence interval gives us some indication of the noise in the system, both the variety of the prices paid and also a sense of things like standard deviation and even factors like sample size.
>
> **[2:27](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-ordinal-and-continuous-variables?u=76281980&t=147)** And of course, if we look at the folks that did not survive, we see variation there as well.
>
> **[2:32](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-ordinal-and-continuous-variables?u=76281980&t=152)** What the F-test is doing is comparing this signal-to-noise, literally in the form of a ratio.
>
> **[2:41](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-ordinal-and-continuous-variables?u=76281980&t=161)** Let's take a look at formal F-test results, the way that they would appear in statistical software.
>
> **[2:47](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-ordinal-and-continuous-variables?u=76281980&t=167)** There are a couple of things that I want to draw your attention to.
>
> **[2:50](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-ordinal-and-continuous-variables?u=76281980&t=170)** First, we can see the exact averages of our two groups.
>
> **[2:53](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-ordinal-and-continuous-variables?u=76281980&t=173)** About 22 British pounds paid by those that did not survive and just over 48 pounds paid by those who did.
>
> **[3:01](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-ordinal-and-continuous-variables?u=76281980&t=181)** Also, notice the actual F-ratio.
>
> **[3:04](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-ordinal-and-continuous-variables?u=76281980&t=184)** And it is indeed a ratio.
>
> **[3:06](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-ordinal-and-continuous-variables?u=76281980&t=186)** The larger that becomes, the more significant the difference between the two groups are.
>
> **[3:11](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-ordinal-and-continuous-variables?u=76281980&t=191)** And we see an F-ratio of 63.
>
> **[3:13](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-ordinal-and-continuous-variables?u=76281980&t=193)** Finally, we see the P-value of 0.000.
>
> **[3:18](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-ordinal-and-continuous-variables?u=76281980&t=198)** These two values are exactly the values that are going to be reported in our QUEST tree indicating that this is exactly what's happening under the hood in our analysis.
>
> **[3:29](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-ordinal-and-continuous-variables?u=76281980&t=209)** Now let's revisit the issue of how QUEST chooses a cut point.
>
> **[3:34](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-ordinal-and-continuous-variables?u=76281980&t=214)** Well, as it turns out, QUEST uses something called Quadratic Discriminant Analysis to determine the split point for all variables, including categorical variables.
>
> **[3:46](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-ordinal-and-continuous-variables?u=76281980&t=226)** This can be difficult to see in some cases.
>
> **[3:48](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-ordinal-and-continuous-variables?u=76281980&t=228)** Remember that when we have lots of variables, we're not simply in two-dimensional space.
>
> **[3:54](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-ordinal-and-continuous-variables?u=76281980&t=234)** But it's actually not too difficult to see how this works on scale variables.
>
> **[4:00](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-ordinal-and-continuous-variables?u=76281980&t=240)** Also, forgive me a bit of poetic license here.
>
> **[4:02](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-ordinal-and-continuous-variables?u=76281980&t=242)** I'm going to show this to you visually.
>
> **[4:05](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-ordinal-and-continuous-variables?u=76281980&t=245)** And what I'm going to be showing to you visually is a bit more like linear discriminant analysis than it is like QDA.
>
> **[4:12](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-ordinal-and-continuous-variables?u=76281980&t=252)** To begin, what we're trying to do with Quadratic Discriminant Analysis is we have a categorical dependent that we're trying to predict with a scale.
>
> **[4:20](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-ordinal-and-continuous-variables?u=76281980&t=260)** So we are reversing the situation now.
>
> **[4:23](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-ordinal-and-continuous-variables?u=76281980&t=263)** We are predicting Survived using Fare.
>
> **[4:27](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-ordinal-and-continuous-variables?u=76281980&t=267)** And as you can see, the cut point that's been chosen is 72.5.
>
> **[4:33](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-ordinal-and-continuous-variables?u=76281980&t=273)** So how would that be determined?
>
> **[4:35](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-ordinal-and-continuous-variables?u=76281980&t=275)** Let's take a look at it visually.
>
> **[4:37](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-ordinal-and-continuous-variables?u=76281980&t=277)** I've placed that exact value as a reference line on this histogram.
>
> **[4:42](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-ordinal-and-continuous-variables?u=76281980&t=282)** Of course, this is a special histogram.
>
> **[4:44](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-ordinal-and-continuous-variables?u=76281980&t=284)** We have green on the right indicating those that survived and blue on the left indicating those that have died.
>
> **[4:52](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-ordinal-and-continuous-variables?u=76281980&t=292)** And of course, we see lots of both colors below the line, but look above the line.
>
> **[4:58](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-ordinal-and-continuous-variables?u=76281980&t=298)** What discriminant analysis has identified here is that above the line, virtually all the passengers are green.
>
> **[5:06](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-ordinal-and-continuous-variables?u=76281980&t=306)** More specifically, what we see is that above that threshold of 72.5, 73% survived.
>
> **[5:14](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-ordinal-and-continuous-variables?u=76281980&t=314)** But below that threshold, 34% survived.
>
> **[5:19](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-ordinal-and-continuous-variables?u=76281980&t=319)** And that's why discriminant has chosen that value as the cut point.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), case, (1), finally, (1)
> **Env Vars:** quest (7), qda (1)
> **Versions:** 72.5 (2), 0.000 (1)
> **Definitions:** is a  (2), in other words (1)
> **CLI Commands:** node (2)
> **Speakers:** - [narrator] (1)

#### How QUEST handles missing data
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-missing-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-missing-data?u=76281980&t=0)** - [Instructor] Let's discuss how Quest handles missing data.
>
> **[0:04](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-missing-data?u=76281980&t=4)** Let's go into the type node.
>
> **[0:06](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-missing-data?u=76281980&t=6)** We actually saw an example of missing data earlier when we were looking at the embarked variable.
>
> **[0:14](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-missing-data?u=76281980&t=14)** However, at the time, modeler was not correctly informing Quest that there's really only three embarkation points.
>
> **[0:23](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-missing-data?u=76281980&t=23)** The data makes it appear that there are four: C, Q, S, and unknown.
>
> **[0:32](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-missing-data?u=76281980&t=32)** So let's declare that in modeler and see how the algorithm behaves differently.
>
> **[0:36](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-missing-data?u=76281980&t=36)** I'm going to simply turn missing on, and when I do, modeler's going to recognize that there's only three embarkation points.
>
> **[0:46](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-missing-data?u=76281980&t=46)** I'm going to clear values and read values, and now, as you see, there's only three: C, Q, and S.
>
> **[0:53](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-missing-data?u=76281980&t=53)** Let's see how the Quest algorithm behaves differently this time.
>
> **[1:01](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-missing-data?u=76281980&t=61)** I'm going to run that.
>
> **[1:03](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-missing-data?u=76281980&t=63)** And since the variable in Question is embarkation, I'm going to force it to split on embarked.
>
> **[1:14](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-missing-data?u=76281980&t=74)** Take a look at the difference.
>
> **[1:16](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-missing-data?u=76281980&t=76)** We have Q and S in node one, and we have only C in node two.
>
> **[1:22](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-missing-data?u=76281980&t=82)** So where did the missing data go?
>
> **[1:25](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-missing-data?u=76281980&t=85)** Well, Quest uses the same approach to missing data that Cart does.
>
> **[1:32](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-missing-data?u=76281980&t=92)** If you're familiar with Cart, you may recall that it uses a technique called surrogates.
>
> **[1:39](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-missing-data?u=76281980&t=99)** So how does this work?
>
> **[1:41](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-missing-data?u=76281980&t=101)** What we do is we look for other variables in the data set that are related to embarkation.
>
> **[1:47](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-missing-data?u=76281980&t=107)** Maybe it's fare, or maybe it's the size of the group that's traveling together.
>
> **[1:56](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-missing-data?u=76281980&t=116)** We might not be able to intuit what those variables are, but the algorithm will find the five variables that are most closely related to embarked.
>
> **[2:04](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-missing-data?u=76281980&t=124)** And all we have to do is figure out if those folks who are missing embarked should go to the left to node one or go to the right to node two.
>
> **[2:15](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-missing-data?u=76281980&t=135)** Let's look at the same phenomenon but using the variable age which is scale, or continuous.
>
> **[2:23](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-missing-data?u=76281980&t=143)** I'm going to force the split to be on age.
>
> **[2:28](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-missing-data?u=76281980&t=148)** And we know that age is sometimes missing in the data set, but let's take a closer look.
>
> **[2:33](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-missing-data?u=76281980&t=153)** We can see that it's splitting at 4.3, as we've seen, but where are the missing ages?
>
> **[2:39](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-missing-data?u=76281980&t=159)** Well, what variables might possibly be related to age?
>
> **[2:42](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-missing-data?u=76281980&t=162)** For instance, if an adult passenger buys a ticket, and they're buying a ticket for their children or even their elderly parents, that passenger's almost certainly in mid life.
>
> **[2:52](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-missing-data?u=76281980&t=172)** They're not a teenager.
>
> **[2:54](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-missing-data?u=76281980&t=174)** And if they're traveling with both parents and children, they're probably also not in their 70s.
>
> **[2:59](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-missing-data?u=76281980&t=179)** So we can get a little bit of a guess as to someone's age.
>
> **[3:04](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-missing-data?u=76281980&t=184)** We certainly know if they're an adult based on other variables like the parent/child variable.
>
> **[3:09](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-missing-data?u=76281980&t=189)** And we use that again to simply decide if they should pass to the left via node three or pass to the right via node four.
>
> **[3:18](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-quest-handles-missing-data?u=76281980&t=198)** That's how surrogates addresses the issues of missing in Quest.

> [!info]- Semantic Content
>
> **CLI Commands:** node (7), find (1)
> **Code Keywords:** let (6), pass (2)
> **UI Navigation:** go to (2)
> **Versions:** 4.3 (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### Pruning in QUEST
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/pruning-in-quest?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/pruning-in-quest?u=76281980&t=0)** - [Narrator] Now I'd like to discuss how Quest performs pruning.
>
> **[0:05](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/pruning-in-quest?u=76281980&t=5)** Pruning is an effort to make a smaller tree, having just grown the tree.
>
> **[0:11](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/pruning-in-quest?u=76281980&t=11)** Why would you do that?
>
> **[0:13](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/pruning-in-quest?u=76281980&t=13)** Well, it's an effort to avoid overfitting.
>
> **[0:16](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/pruning-in-quest?u=76281980&t=16)** The method that Quest uses for pruning is cost complexity pruning.
>
> **[0:23](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/pruning-in-quest?u=76281980&t=23)** If you've ever heard the phrase before, perhaps you're familiar with CART.
>
> **[0:26](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/pruning-in-quest?u=76281980&t=26)** CART uses the same method.
>
> **[0:28](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/pruning-in-quest?u=76281980&t=28)** Another name for this is weakest link pruning, which I really think captures the idea.
>
> **[0:36](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/pruning-in-quest?u=76281980&t=36)** The idea is to identify branches in the tree that don't help increase the accuracy of the tree.
>
> **[0:44](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/pruning-in-quest?u=76281980&t=44)** We're doing a bit of housekeeping, so to speak.
>
> **[0:46](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/pruning-in-quest?u=76281980&t=46)** Let's take a look at it.
>
> **[0:55](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/pruning-in-quest?u=76281980&t=55)** In interactive mode, you can actually grow the tree without pruning, and then apply the pruning.
>
> **[1:02](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/pruning-in-quest?u=76281980&t=62)** Let's take a look.
>
> **[1:05](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/pruning-in-quest?u=76281980&t=65)** Without the pruning, the tree is actually quite large in many cases.
>
> **[1:10](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/pruning-in-quest?u=76281980&t=70)** So you can see here that it's grown one, two, three, four, five levels.
>
> **[1:16](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/pruning-in-quest?u=76281980&t=76)** We can zoom in a little bit and take a look.
>
> **[1:18](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/pruning-in-quest?u=76281980&t=78)** It split first on passenger class, not surprising given what we know about the history of the accident.
>
> **[1:25](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/pruning-in-quest?u=76281980&t=85)** Then it splits on gender.
>
> **[1:26](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/pruning-in-quest?u=76281980&t=86)** Then it further splits on sibling/spouse, age and passenger class, and then continues to split.
>
> **[1:35](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/pruning-in-quest?u=76281980&t=95)** Notice in some cases, it's splitting on the same variable more than once.
>
> **[1:40](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/pruning-in-quest?u=76281980&t=100)** Fare, for instance, makes more than one appearance in the tree.
>
> **[1:44](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/pruning-in-quest?u=76281980&t=104)** So let's go ahead and apply pruning and see what impact it has on the tree.
>
> **[1:52](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/pruning-in-quest?u=76281980&t=112)** We're actually told that the stopping rules prevent tree growth.
>
> **[1:56](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/pruning-in-quest?u=76281980&t=116)** What would that indicate?
>
> **[1:58](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/pruning-in-quest?u=76281980&t=118)** Well, what pruning is doing is searching all of the sub-branches of the tree for trees that are adding complexity in the form of splits and leaf nodes but do not add appreciably to the accuracy of the tree.
>
> **[2:13](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/pruning-in-quest?u=76281980&t=133)** Having scanned the tree, what we've just learned is that there are no opportunities for pruning.
>
> **[2:19](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/pruning-in-quest?u=76281980&t=139)** This will happen in some cases.
>
> **[2:21](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/pruning-in-quest?u=76281980&t=141)** The growing of the tree and the pruning of the tree are two distinct stages.
>
> **[2:25](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/pruning-in-quest?u=76281980&t=145)** And although it's quite common, more common than not, that these branches will be fined and then removed making the tree smaller.
>
> **[2:33](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/pruning-in-quest?u=76281980&t=153)** But in this case, Quest has scanned the tree and not found any branches that need to be pruned.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), class, (2), case, (1)
> **Env Vars:** cart (2)
> **CLI Commands:** make (1)
> **Definitions:** is an  (1)
> **Analogies:** for instance (1)
> **Speakers:** - [narrator] (1)

#### Stopping rules in QUEST
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/stopping-rules-in-quest?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/stopping-rules-in-quest?u=76281980&t=0)** - [Instructor] Let's talk about the Stopping Rules in QUEST, there are three.
>
> **[0:05](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/stopping-rules-in-quest?u=76281980&t=5)** The first Stopping Rule is tree depth.
>
> **[0:08](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/stopping-rules-in-quest?u=76281980&t=8)** This is just literally how deep the tree can grow as it adds branches.
>
> **[0:13](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/stopping-rules-in-quest?u=76281980&t=13)** The default setting in Modeler happens to be five.
>
> **[0:16](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/stopping-rules-in-quest?u=76281980&t=16)** I often favor increasing that as high as eight.
>
> **[0:19](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/stopping-rules-in-quest?u=76281980&t=19)** That allows the other Stopping Rules, like statistical significance, to play a role in how much the tree grows.
>
> **[0:26](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/stopping-rules-in-quest?u=76281980&t=26)** The second Stopping Rule, is the parent child limits.
>
> **[0:30](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/stopping-rules-in-quest?u=76281980&t=30)** To put that in the context of our dataset of 715 records, what that means is, that a node that has fewer than 14 records, won't even be considered for a split, and any resulting split has to have at least seven records in the child nodes.
>
> **[0:51](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/stopping-rules-in-quest?u=76281980&t=51)** Now, you have to know your tool of choice.
>
> **[0:53](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/stopping-rules-in-quest?u=76281980&t=53)** Modeler happens to have this option of 1%, 2%, which I think is a good rule of thumb, however, so if your tool of choice, doesn't allow you to put in a percentage, you can calculate one or two percent, and put in the appropriate value, because again, one or two percent is a good rule of thumb.
>
> **[1:12](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/stopping-rules-in-quest?u=76281980&t=72)** The final Stopping Rule is statistical significance.
>
> **[1:16](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/stopping-rules-in-quest?u=76281980&t=76)** So the default setting is 0.05, meaning that were operating at 95% confidence.
>
> **[1:23](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/stopping-rules-in-quest?u=76281980&t=83)** Now remember, in QUEST, whether it's a category, an ordinal, or a scale, some kind of statistical test is being performed.
>
> **[1:33](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/stopping-rules-in-quest?u=76281980&t=93)** So we're at 95% confidence but you could increase that to 99% confidence by making this 0.01, or you could relax the requirement by making it 90% confidence by making it 0.1, and that would either grow or shrink the tree in turn.

> [!info]- Semantic Content
>
> **Versions:** 0.05 (1), 0.01 (1), 0.1 (1)
> **Env Vars:** quest (2)
> **Definitions:** is a  (2)
> **Best Practices:** rule of thumb (2)
> **CLI Commands:** node (1)
> **Code Keywords:** let (1)
> **Speakers:** - [instructor] (1)


### 3. 2. Understanding C5.0

#### ID3 and C4.5
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/id3-and-c4-5?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/id3-and-c4-5?u=76281980&t=0)** - [Narrator] As you explore and do reading about C5, you may come across two other algorithms, C4.5 and ID3.
>
> **[0:09](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/id3-and-c4-5?u=76281980&t=9)** Let's take a moment to connect the dots between the three.
>
> **[0:13](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/id3-and-c4-5?u=76281980&t=13)** John Ross Quinlan is the common denominator.
>
> **[0:16](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/id3-and-c4-5?u=76281980&t=16)** He's developed all three of them.
>
> **[0:18](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/id3-and-c4-5?u=76281980&t=18)** Let's start with the first one.
>
> **[0:21](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/id3-and-c4-5?u=76281980&t=21)** Back in the 80s, he developed something called the Iterative Dichotomiser 3, usually just called ID3.
>
> **[0:30](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/id3-and-c4-5?u=76281980&t=30)** What's interesting is you'll still encounter this.
>
> **[0:32](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/id3-and-c4-5?u=76281980&t=32)** You may find it in R and some other places, but there have been substantial improvements made over the years.
>
> **[0:39](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/id3-and-c4-5?u=76281980&t=39)** Then, he developed an algorithm called C4.5.
>
> **[0:42](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/id3-and-c4-5?u=76281980&t=42)** What's interesting about this one, is if you read in this area, you'll probably encounter authors talking about C4.5 more often than they talk about C5.
>
> **[0:54](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/id3-and-c4-5?u=76281980&t=54)** Why is that true?
>
> **[0:55](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/id3-and-c4-5?u=76281980&t=55)** Well, back in 1994, he wrote a whole book explaining how C4.5 worked, but then, for many years he licensed the improvements he made in C5, so the details weren't generally available and that's only changed in the last couple of years.
>
> **[1:11](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/id3-and-c4-5?u=76281980&t=71)** We're going to be talking primarily about C5, but now you know a little bit about these other algorithms and if you can't find an implementation of C5 and you can only find an implementation of C4.5 that's okay because the similarities outweigh the differences.
>
> **[1:28](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/id3-and-c4-5?u=76281980&t=88)** Briefly, a couple of the improvements made in C5 inlcude the fact that it's faster, it offers boosting and it offers something called winnowing.
>
> **[1:38](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/id3-and-c4-5?u=76281980&t=98)** All topics, we'll have a chance to revisit.

> [!info]- Semantic Content
>
> **CLI Commands:** find (3)
> **Code Keywords:** let (2), this. (1)
> **Env Vars:** id3 (2)
> **Cross-References:** in the last (1)
> **Speakers:** - [narrator] (1)

#### Winnowing attributes
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/winnowing-attributes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/winnowing-attributes?u=76281980&t=0)** - [Instructor] Now I'd like to demonstrate a special feature of C5.0 that allows you to identify your most important variables before the tree is built.
>
> **[0:09](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/winnowing-attributes?u=76281980&t=9)** It's called winnowing attributes.
>
> **[0:12](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/winnowing-attributes?u=76281980&t=12)** Going to open a stream that I've prepared for you called C5.str stream.
>
> **[0:20](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/winnowing-attributes?u=76281980&t=20)** A couple of quick things to double check.
>
> **[0:22](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/winnowing-attributes?u=76281980&t=22)** In the source node you should verify that the data is where the source node expects to find it.
>
> **[0:29](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/winnowing-attributes?u=76281980&t=29)** You can do that quickly just by clicking on preview.
>
> **[0:31](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/winnowing-attributes?u=76281980&t=31)** Looks like it's okay.
>
> **[0:35](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/winnowing-attributes?u=76281980&t=35)** Also if you go into the type node, you'll see that I've declared the level of measurement and the role the way that we need it to be and I've placed a C5 modeling node on the canvas, but I've kept it on default settings.
>
> **[0:49](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/winnowing-attributes?u=76281980&t=49)** Let's take a look.
>
> **[0:51](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/winnowing-attributes?u=76281980&t=51)** Winnowing attributes is actually found under the expert settings but the idea behind it is really straight forward.
>
> **[1:00](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/winnowing-attributes?u=76281980&t=60)** For now we're going to keep it on the default setting which means that it's been turned off.
>
> **[1:05](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/winnowing-attributes?u=76281980&t=65)** Now I'm going to run the model and I'm going to look at the results.
>
> **[1:10](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/winnowing-attributes?u=76281980&t=70)** We'll come back in a moment to look at the tree but for now I just want to identify for you that all seven variables have been used.
>
> **[1:18](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/winnowing-attributes?u=76281980&t=78)** We actually can see that by looking at the predictor importance.
>
> **[1:22](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/winnowing-attributes?u=76281980&t=82)** So passenger class, sex, sibling spouse, embarked, age, fare and parent child are all being used by the model.
>
> **[1:34](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/winnowing-attributes?u=76281980&t=94)** If we go back into the C5.0 settings, we can now select winnow attributes and see if it affects a change in the result.
>
> **[1:49](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/winnowing-attributes?u=76281980&t=109)** We actually find that not all seven variables are being used.
>
> **[1:53](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/winnowing-attributes?u=76281980&t=113)** We can verify that in a different way.
>
> **[1:55](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/winnowing-attributes?u=76281980&t=115)** Where it happens to be in Modeler is we can go to the summary and go to fields and inputs.
>
> **[2:01](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/winnowing-attributes?u=76281980&t=121)** We can expand the inputs and verify that only five variables of the available seven are being used.
>
> **[2:08](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/winnowing-attributes?u=76281980&t=128)** So what have we accomplished?
>
> **[2:11](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/winnowing-attributes?u=76281980&t=131)** Let's take a look at the tree and discuss.
>
> **[2:15](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/winnowing-attributes?u=76281980&t=135)** If you look over at node 22, passenger class has been chosen as that branch.
>
> **[2:22](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/winnowing-attributes?u=76281980&t=142)** What you want to remind yourself of is that we're not looking at all the data.
>
> **[2:26](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/winnowing-attributes?u=76281980&t=146)** We're looking at 80% of the data.
>
> **[2:29](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/winnowing-attributes?u=76281980&t=149)** The 80% of the data that's in the train partition.
>
> **[2:33](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/winnowing-attributes?u=76281980&t=153)** So what you can imagine is it's like pulling on the handle of a slot machine.
>
> **[2:38](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/winnowing-attributes?u=76281980&t=158)** We've chosen a particular 80% but if we were to pull on that handle again, we would get a somewhat different 80%.
>
> **[2:45](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/winnowing-attributes?u=76281980&t=165)** So what's another variable that's similar to passenger class?
>
> **[2:50](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/winnowing-attributes?u=76281980&t=170)** Well we've seen that fare is certainly similar to passenger class.
>
> **[2:54](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/winnowing-attributes?u=76281980&t=174)** So at the moment node 24 is third class passengers, but if we pulled on that slot machine handle and got a different 80%, perhaps C5 would choose fares under 25 pounds instead of third class.
>
> **[3:12](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/winnowing-attributes?u=76281980&t=192)** On one level you might think, no big deal, the variables are similar.
>
> **[3:17](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/winnowing-attributes?u=76281980&t=197)** But remember that it affects all the variables beneath it as well.
>
> **[3:20](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/winnowing-attributes?u=76281980&t=200)** That entire branch of the tree is affected.
>
> **[3:23](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/winnowing-attributes?u=76281980&t=203)** So in large, complex situations with lots of attributes, the winnowing prevents this kind of competition between similar variables to explain the same information content.
>
> **[3:36](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/winnowing-attributes?u=76281980&t=216)** And as a result, the tree will be both more accurate and more generalizable, meaning that it will have a greater ability to make predictions even about data that it has not seen.

> [!info]- Semantic Content
>
> **CLI Commands:** node (6), find (2), make (1)
> **Code Keywords:** let (2), class. (2), class, (1)
> **Analogies:** similar to (2), imagine (1), it's like (1)
> **Versions:** node 22 (1), node 24 (1)
> **UI Navigation:** go to (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### Rule sets
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/rule-sets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/rule-sets?u=76281980&t=0)** - [Narrator] One of the nice features that Quinlin has built into C5.0, is the ability to display your results in the form of rule set instead of a tree.
>
> **[0:09](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/rule-sets?u=76281980&t=9)** The motivation is, is that trees can get quite complex.
>
> **[0:14](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/rule-sets?u=76281980&t=14)** Let's zoom out bit and take a look.
>
> **[0:17](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/rule-sets?u=76281980&t=17)** We can see that there's a lot going on in this tree.
>
> **[0:22](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/rule-sets?u=76281980&t=22)** It's going to be somewhat easier to look at the entire result in the form of a rule set.
>
> **[0:28](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/rule-sets?u=76281980&t=28)** Let's go back into the C5.0 settings and request that.
>
> **[0:32](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/rule-sets?u=76281980&t=32)** We can see that for output type in Modeler we can choose rule set, but this should be available to you in any C5 implementation.
>
> **[0:42](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/rule-sets?u=76281980&t=42)** And we'll click on Run.
>
> **[0:44](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/rule-sets?u=76281980&t=44)** Let's take a look at the resulting model.
>
> **[0:47](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/rule-sets?u=76281980&t=47)** Maximize this, I'm going to click on All, so that we can see all the rules.
>
> **[0:52](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/rule-sets?u=76281980&t=52)** By rules for one, it means rules four survived, because the survivors are coded one and we see several of them, there are six.
>
> **[1:04](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/rule-sets?u=76281980&t=64)** The first rule for survivors, is if male and under 13, in sibling/spouse, now remember, that's the number of siblings and spouses traveling together, but they're less than or equal to 13, so that's obviously a sibling.
>
> **[1:19](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/rule-sets?u=76281980&t=79)** Then one, meaning that group is expected to survive.
>
> **[1:23](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/rule-sets?u=76281980&t=83)** We actually can add additional detail by clicking on run set symbol and we can see the count as well as the confidence of that rule.
>
> **[1:32](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/rule-sets?u=76281980&t=92)** Rule 2 for instance, if passenger class is first class, age is less than or equal to 36, and parent/child is greater than one, then they're also expected to survive.
>
> **[1:46](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/rule-sets?u=76281980&t=106)** We scroll down, we can see the five rules for not surviving.
>
> **[1:52](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/rule-sets?u=76281980&t=112)** The first of which is, if passenger class equals three, and age is greater than 30, and sibling/spouse is zero, probably a bachelor, traveling alone, in this case, they're not expected to survive.
>
> **[2:07](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/rule-sets?u=76281980&t=127)** Sample size of 66 with a confidence of about 88%.
>
> **[2:12](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/rule-sets?u=76281980&t=132)** There's quite a few rules here, but all of them can be seen on a page or a little bit more of material as opposed to the large, complicated tree.
>
> **[2:21](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/rule-sets?u=76281980&t=141)** The tree has it's place, it's a powerful diagram, but the rule sets are a powerful way to get all that information in a more compact format.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), this, (1), class, (1), case, (1)
> **UI Navigation:** click on (2), scroll down (1)
> **Analogies:** for instance (1)
> **Speakers:** - [narrator] (1)

#### Understanding information gain
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/understanding-information-gain?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/understanding-information-gain?u=76281980&t=0)** - [Instructor] In order to build the tree, C5 uses a criterion called information gain ratio.
>
> **[0:08](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/understanding-information-gain?u=76281980&t=8)** We've seen many times that knowing how an algorithm works under the hood can help you use it effectively.
>
> **[0:15](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/understanding-information-gain?u=76281980&t=15)** However, it's also possible to get lost in all the formulas, so let's hit some of the high points.
>
> **[0:21](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/understanding-information-gain?u=76281980&t=21)** First, information gain ratio as the name implies is strongly in the machine learning camp.
>
> **[0:28](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/understanding-information-gain?u=76281980&t=28)** So unlike quest or Chade, there's going to be no statistical tests and no P values.
>
> **[0:36](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/understanding-information-gain?u=76281980&t=36)** Also, information gain ratio will be similar in many ways to the genie coefficient that is used by Cart, which is also firmly in the machine learning camp.
>
> **[0:48](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/understanding-information-gain?u=76281980&t=48)** However, in contrast to Cart, C5 does allow splits that are not binary in nature, so there are some differences.
>
> **[0:58](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/understanding-information-gain?u=76281980&t=58)** But let's talk a little bit more about how information gain works.
>
> **[1:04](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/understanding-information-gain?u=76281980&t=64)** By the way, C5 does not allow interactive trees in modeler.
>
> **[1:12](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/understanding-information-gain?u=76281980&t=72)** And the reason is that until recently the C5 algorithm has been kept somewhat secret and proprietary.
>
> **[1:19](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/understanding-information-gain?u=76281980&t=79)** So what I've done instead is arrayed some information about our data set in this table.
>
> **[1:26](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/understanding-information-gain?u=76281980&t=86)** We know that we've been working with a total sample size of 715, and the overall survival rate is 38%.
>
> **[1:34](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/understanding-information-gain?u=76281980&t=94)** As we can see in the blue curve, entropy reaches its highest point, a maximum value of 1.0, when half of the members of a node are in one category and half in the other.
>
> **[1:49](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/understanding-information-gain?u=76281980&t=109)** In the case of Titanic, that would be half survivors and half that died.
>
> **[1:53](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/understanding-information-gain?u=76281980&t=113)** So what we want to do is find variables that as we work our way down the tree, move towards that goal of all survivors or all passengers that died.
>
> **[2:04](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/understanding-information-gain?u=76281980&t=124)** So we can see that gender is a pretty good variable, because we move towards high survival for females at 76%, and we move in the opposite direction to low survival of only 19% for males.
>
> **[2:20](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/understanding-information-gain?u=76281980&t=140)** Let's take a look at a second variable.
>
> **[2:22](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/understanding-information-gain?u=76281980&t=142)** Frankly, embarkation point is not nearly as good.
>
> **[2:26](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/understanding-information-gain?u=76281980&t=146)** Because if we were to split on this variable, all three of these embarkation points are hovering much closer to 50/50 which is the worst situation on the curve.
>
> **[2:38](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/understanding-information-gain?u=76281980&t=158)** So in the case of Cherbourg 56% percent survived, in the case of Queenstown, 35% survived, in the case of Southampton, 34% survived.
>
> **[2:48](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/understanding-information-gain?u=76281980&t=168)** However, there's an added complication that we have to discuss.
>
> **[2:52](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/understanding-information-gain?u=76281980&t=172)** Back in the ID3 days, which you may recall was Ross Quinland's first attempt to build a decision tree algorithm decades ago, information gain was used as the sole criterion, and variables that had lots of categories tended to have an advantage, because if you fragment the data into little pieces you will invariably get to small little leaf nodes, and of course a leaf node with a sample size of one will always be one category or the other.
>
> **[3:23](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/understanding-information-gain?u=76281980&t=203)** Co in C4.5 and C5, we have to introduce a penalty to counterbalance that advantage that complicated trees had back in the ID3 days.
>
> **[3:36](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/understanding-information-gain?u=76281980&t=216)** Now this is another one of those formulas that you can easily get bogged down in if you try to read through all the details, but the highlights are straightforward.
>
> **[3:46](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/understanding-information-gain?u=76281980&t=226)** Information gain ratio is simply the ratio of the information gain that we just discussed, the improvement from the parent nodes to the child nodes, divided by a penalty.
>
> **[4:00](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/understanding-information-gain?u=76281980&t=240)** Now this penalty is often given all kinds of different names, like intrinsic info, and split info and so on, but fundamentally it's just a penalty.
>
> **[4:10](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/understanding-information-gain?u=76281980&t=250)** So for instance, what would this formula be for the gender split?
>
> **[4:15](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/understanding-information-gain?u=76281980&t=255)** Gender has two categories, that's why you see the number two repeatedly in this formula.
>
> **[4:21](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/understanding-information-gain?u=76281980&t=261)** Embarkation point has three categories, notice you see the number three repeatedly in the formula.
>
> **[4:28](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/understanding-information-gain?u=76281980&t=268)** All you really need to know is the penalty for a three way split is greater than the penalty for a two-way split, we're focused on the absolute value here, not the fact that they're negative or positive.
>
> **[4:42](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/understanding-information-gain?u=76281980&t=282)** The formula always produces a negative in this case.
>
> **[4:45](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/understanding-information-gain?u=76281980&t=285)** So the embarkation point split has a larger penalty, and that counterbalances the advantage that complicated splits had back in the ID3 days, and that in a nutshell is how C5 builds the tree.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), case. (1)
> **CLI Commands:** node (2), find (1)
> **Env Vars:** id3 (3)
> **Versions:** 1.0 (1)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### Pruning in C5.0
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/pruning-in-c5-0?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/pruning-in-c5-0?u=76281980&t=0)** - [Instructor] Like most other decision tree techniques, C5.0 involves pruning.
>
> **[0:06](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/pruning-in-c5-0?u=76281980&t=6)** Let's discuss the C5.0 pruning options by examining them in Modeler.
>
> **[0:12](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/pruning-in-c5-0?u=76281980&t=12)** Let's take a look inside to C5.0 modeling node.
>
> **[0:16](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/pruning-in-c5-0?u=76281980&t=16)** The first thing that we notice is that Modeler has a radio button for so-called expert settings and that's where we find these advanced pruning options.
>
> **[0:29](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/pruning-in-c5-0?u=76281980&t=29)** Let's pause for a moment and get some advice from Ross Quinlan himself from the somewhat official C5.0 tutorial on his own company's website, the developer of the technique.
>
> **[0:43](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/pruning-in-c5-0?u=76281980&t=43)** In that C5.0 tutorial, Ross Quinlan's own team states, "These are best regarded as advanced options "that should be used sparingly if at all."
>
> **[0:56](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/pruning-in-c5-0?u=76281980&t=56)** So keep that in mind but I do have some general advice on this and I will give you some notion of when it makes sense to adjust them.
>
> **[1:05](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/pruning-in-c5-0?u=76281980&t=65)** Something that we'll come back to in a moment is the notion of accuracy and generality.
>
> **[1:11](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/pruning-in-c5-0?u=76281980&t=71)** But first, let's click on Expert.
>
> **[1:14](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/pruning-in-c5-0?u=76281980&t=74)** Here are the advanced options.
>
> **[1:17](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/pruning-in-c5-0?u=76281980&t=77)** You have pruning severity, you have minimum records per child branch, and you have the option of turning off, so-called global pruning.
>
> **[1:26](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/pruning-in-c5-0?u=76281980&t=86)** Let's start with the global pruning.
>
> **[1:27](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/pruning-in-c5-0?u=76281980&t=87)** What's different about C5.0 is pruning occurs in two stages.
>
> **[1:32](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/pruning-in-c5-0?u=76281980&t=92)** This first what's called local pruning which is looking at the sub-branches of the tree and examining on whether those sub-branches should be made smaller or possibly even just converted into a leaf node.
>
> **[1:46](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/pruning-in-c5-0?u=76281980&t=106)** Once that's done, it then looks at the whole tree and makes another pass at pruning.
>
> **[1:54](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/pruning-in-c5-0?u=76281980&t=114)** It's only the second stage of pruning that can be turned off.
>
> **[2:00](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/pruning-in-c5-0?u=76281980&t=120)** So, if we turn off global pruning, we would expect the tree to grow larger.
>
> **[2:07](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/pruning-in-c5-0?u=76281980&t=127)** What we can also do is adjust the pruning severity, and as you might guess from the phrasing, if you increase this, it's going to prune more making the tree smaller, and if you reduce it, it's going to prune less, so the tree becomes larger.
>
> **[2:24](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/pruning-in-c5-0?u=76281980&t=144)** My own opinion on Minimum records per child branch is to not be very aggressive about that.
>
> **[2:30](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/pruning-in-c5-0?u=76281980&t=150)** Maybe make it as high as three, four, or five perhaps.
>
> **[2:35](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/pruning-in-c5-0?u=76281980&t=155)** The thing is you're not allowing the pruning to do its job if you do that because in a sense, you would be pre-pruning, so it's not my preferred way to do it.
>
> **[2:46](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/pruning-in-c5-0?u=76281980&t=166)** If you happened to be working in Modeler, Modeler makes this somewhat easy for you.
>
> **[2:53](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/pruning-in-c5-0?u=76281980&t=173)** Going back to the simple mode, we can simply choose accuracy or generality and what it's doing is adjusting the expert settings behind the scene.
>
> **[3:04](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/pruning-in-c5-0?u=76281980&t=184)** So, if we choose accuracy, we're going to grow a larger, more complex tree and you might think who doesn't want accuracy?
>
> **[3:13](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/pruning-in-c5-0?u=76281980&t=193)** Well, it means that you're going to get increased accuracy on the train data set, and in my experience, you almost always get that, but you can get this greater spread between your accuracy on the train data and your accuracy on the test data revealing that it's unstable and that's not good.
>
> **[3:30](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/pruning-in-c5-0?u=76281980&t=210)** So, generality is a focus on that stability so the accuracy on the train data might not be as high but you get a smaller gap between the accuracy on the train data and the test data.
>
> **[3:43](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/pruning-in-c5-0?u=76281980&t=223)** Having used Modeler over many years, when I'm using Modeler, I prefer the generality setting.
>
> **[3:50](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/pruning-in-c5-0?u=76281980&t=230)** So, let's say you're not using Modeler.
>
> **[3:53](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/pruning-in-c5-0?u=76281980&t=233)** All Modeler is doing is adjusting the pruning severity in the Minimum records per branch.
>
> **[3:59](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/pruning-in-c5-0?u=76281980&t=239)** So, if you also favor generality, what you might want to do is increase that pruning a little bit or possibly increase the Minimum records per branch a little bit, but again, I would do so sparingly.
>
> **[4:12](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/pruning-in-c5-0?u=76281980&t=252)** So, let's take a look.
>
> **[4:13](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/pruning-in-c5-0?u=76281980&t=253)** Let's turn off global pruning and let this run, and as we zoom out, we get a sense of the tree here.
>
> **[4:25](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/pruning-in-c5-0?u=76281980&t=265)** It's actually a quite large complex tree.
>
> **[4:27](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/pruning-in-c5-0?u=76281980&t=267)** Obviously, zoomed out this much, we're not going to look at the details, and let's run it again with the pruning turned on.
>
> **[4:42](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/pruning-in-c5-0?u=76281980&t=282)** Take another look inside.
>
> **[4:45](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/pruning-in-c5-0?u=76281980&t=285)** Now remember, this is only the second stage of pruning that's being affected.
>
> **[4:50](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/pruning-in-c5-0?u=76281980&t=290)** Of course, the trees are complex enough that it's difficult to see but the first thing that we want to check for is if the depth of the tree is the same.
>
> **[5:02](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/pruning-in-c5-0?u=76281980&t=302)** And indeed, it is.
>
> **[5:03](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/pruning-in-c5-0?u=76281980&t=303)** Both of these trees have a depth of eight but that's total depth.
>
> **[5:08](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/pruning-in-c5-0?u=76281980&t=308)** Over on the far left, there appears to be a difference.
>
> **[5:12](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/pruning-in-c5-0?u=76281980&t=312)** There appears to be an entire sub-branch that has been removed through pruning.
>
> **[5:17](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/pruning-in-c5-0?u=76281980&t=317)** Let's take a closer look.
>
> **[5:20](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/pruning-in-c5-0?u=76281980&t=320)** And sure enough, that's the case.
>
> **[5:23](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/pruning-in-c5-0?u=76281980&t=323)** For males, and there's a number of other criteria that have to be met, but males that are traveling without sibling or spouses.
>
> **[5:32](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/pruning-in-c5-0?u=76281980&t=332)** In fact, given what we know about the passenger, these are probably bachelors traveling to North America for work or something.
>
> **[5:40](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/pruning-in-c5-0?u=76281980&t=340)** But we see that in the unpruned tree, there's an entire branch that forms there splitting on fare and then splitting on age and then actually splitting on fare again.
>
> **[5:52](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/pruning-in-c5-0?u=76281980&t=352)** Whereas in the pruned tree, those 69 males traveling without siblings or spouses don't further branch at all.
>
> **[6:03](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/pruning-in-c5-0?u=76281980&t=363)** There's actually another example in the middle of the tree.
>
> **[6:06](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/pruning-in-c5-0?u=76281980&t=366)** Let's take a look at that one.
>
> **[6:10](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/pruning-in-c5-0?u=76281980&t=370)** If we zoom on passengers, traveling out of Cherbourg, in the unpruned tree, those passengers split on age and they split on parent-child again, but look at how small the sizes are in the leaf nodes, as small as three and the case of node 36.
>
> **[6:31](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/pruning-in-c5-0?u=76281980&t=391)** In the pruned tree, those 19 individuals, I believe, that would be females in this portion of the tree, those 19 individuals do not further split.
>
> **[6:42](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/pruning-in-c5-0?u=76281980&t=402)** That entire sub-branch has been pruned.
>
> **[6:47](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/pruning-in-c5-0?u=76281980&t=407)** What you may also want to do is try both generality and accuracy.
>
> **[6:53](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/pruning-in-c5-0?u=76281980&t=413)** Let's take a look.
>
> **[6:55](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/pruning-in-c5-0?u=76281980&t=415)** So, we have the printing turned on which is normally what I favor but what we can do is sever the link and run it again but with generality this time.
>
> **[7:11](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/pruning-in-c5-0?u=76281980&t=431)** So, the first model is with the accuracy setting and the second model is with the generality setting.
>
> **[7:18](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/pruning-in-c5-0?u=76281980&t=438)** And again, what's really getting at is pruning severity.
>
> **[7:23](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/pruning-in-c5-0?u=76281980&t=443)** Let's take a look.
>
> **[7:25](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/pruning-in-c5-0?u=76281980&t=445)** Sometimes, the two models are actually the same.
>
> **[7:28](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/pruning-in-c5-0?u=76281980&t=448)** Let's see what happens in this case.
>
> **[7:30](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/pruning-in-c5-0?u=76281980&t=450)** We do actually notice a little bit of a difference.
>
> **[7:32](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/pruning-in-c5-0?u=76281980&t=452)** So, the first one with the accuracy settings has higher accuracy on the train data true to form but a large gap in performance between training and testing, exactly the thing that we sometimes worry about, and with the generality setting, we have lower accuracy on the train but this is what we really care about, we have higher accuracy on testing.
>
> **[7:55](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/pruning-in-c5-0?u=76281980&t=475)** And that's been my experience.
>
> **[7:56](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/pruning-in-c5-0?u=76281980&t=476)** So, when I work in Modeler, to be honest, I just choose the generality settings.
>
> **[8:01](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/pruning-in-c5-0?u=76281980&t=481)** So, if you're not working in Modeler, just make those little changes that we've discussed in the expert settings.

> [!info]- Semantic Content
>
> **Code Keywords:** let (15), case. (2), pass (1), this, (1)
> **CLI Commands:** node (3), make (2), find (1)
> **Tools:** notion (2)
> **Definitions:** means that (1), is a  (1)
> **Versions:** node 36 (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)

#### How C5.0 handles missing data
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-c5-0-handles-missing-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-c5-0-handles-missing-data?u=76281980&t=0)** - [Instructor] Let's talk about how missing data's handled in both C4.5 and C5.
>
> **[0:06](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-c5-0-handles-missing-data?u=76281980&t=6)** This can become a complicated topic, and the reason is the way that Quinlan is tackling missing data has a ripple effect through the information gain and information gain ratio calculations, making them more complicated.
>
> **[0:20](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-c5-0-handles-missing-data?u=76281980&t=20)** What he's trying to do is say that if a particular case is missing, that it adds no information content.
>
> **[0:29](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-c5-0-handles-missing-data?u=76281980&t=29)** So its presence has to be somewhat subtracted from those calculations, even though it's still on the tree.
>
> **[0:34](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-c5-0-handles-missing-data?u=76281980&t=34)** So it can make it really complicated, but the basic idea is straightforward.
>
> **[0:39](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-c5-0-handles-missing-data?u=76281980&t=39)** As Quinlan himself says in the book that he wrote to release C4.5, "It's possible to get enmeshed "in the details of calculations like these."
>
> **[0:48](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-c5-0-handles-missing-data?u=76281980&t=48)** But the punchline is as follows.
>
> **[0:51](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-c5-0-handles-missing-data?u=76281980&t=51)** "A case with an unknown test outcome "is divided into fragments whose weights are proportional "to the relative frequencies."
>
> **[1:01](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-c5-0-handles-missing-data?u=76281980&t=61)** He's referring to the known data.
>
> **[1:03](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-c5-0-handles-missing-data?u=76281980&t=63)** So if half the data goes down one branch, and the other half goes down the other branch, he actually splits the case into two using weights, so that a single case can actually follow multiple paths.
>
> **[1:19](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-c5-0-handles-missing-data?u=76281980&t=79)** Sounds a little tricky at first, but it's actually kind of a cool concept.
>
> **[1:23](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-c5-0-handles-missing-data?u=76281980&t=83)** And then he does exactly the same thing again when he goes to score the data through the tree.
>
> **[1:29](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-c5-0-handles-missing-data?u=76281980&t=89)** What ends up happening is you get a probability that you've gone down one branch or the other, and that's how he's able to score record at deployment time.
>
> **[1:37](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-c5-0-handles-missing-data?u=76281980&t=97)** He also comments on contrasting this with surrogates, which, of course, is the technique that's used in CART.
>
> **[1:44](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-c5-0-handles-missing-data?u=76281980&t=104)** "This method does not call for individual cases "to be fragmented so it's more efficient."
>
> **[1:50](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-c5-0-handles-missing-data?u=76281980&t=110)** Obviously, he's referring to surrogates here.
>
> **[1:52](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-c5-0-handles-missing-data?u=76281980&t=112)** "It depends, however, on being able "to find suitably accurate surrogate splits."
>
> **[1:58](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-c5-0-handles-missing-data?u=76281980&t=118)** I wonder if any of you have ever wondered about that when you hear about surrogates.
>
> **[2:02](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-c5-0-handles-missing-data?u=76281980&t=122)** "Wow, what if I don't have another variable in the dataset "that would be a good surrogate?"
>
> **[2:07](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-c5-0-handles-missing-data?u=76281980&t=127)** Then he goes on to explain that in certain domains he has doubts that those surrogates would be present.
>
> **[2:13](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-c5-0-handles-missing-data?u=76281980&t=133)** Let's briefly recap missing data in decision trees in general.
>
> **[2:18](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-c5-0-handles-missing-data?u=76281980&t=138)** CHAID treats missing as a separate category.
>
> **[2:22](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-c5-0-handles-missing-data?u=76281980&t=142)** For this reason, I love using CHAID when I'm exploring data because I like to see the missing data.
>
> **[2:28](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-c5-0-handles-missing-data?u=76281980&t=148)** I want it out there where I can examine it.
>
> **[2:30](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-c5-0-handles-missing-data?u=76281980&t=150)** In both QUEST and CART, the surrogates approach is used.
>
> **[2:35](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-c5-0-handles-missing-data?u=76281980&t=155)** The name that is often given for the C5 process that we've just described is fractionalization.
>
> **[2:43](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-c5-0-handles-missing-data?u=76281980&t=163)** There's a reason, folks, why more than one solution exists.
>
> **[2:46](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-c5-0-handles-missing-data?u=76281980&t=166)** None of these are perfect.
>
> **[2:48](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/how-c5-0-handles-missing-data?u=76281980&t=168)** They have different strengths and weaknesses, and this is a theme that we've seen throughout decision trees, and I think it's one of the things that makes the topic so interesting.

> [!info]- Semantic Content
>
> **Env Vars:** cart (2), chaid (2), quest (1)
> **CLI Commands:** make (1), find (1)
> **Code Keywords:** let (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 4. 3. Advanced Topics

#### Ensembles
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/ensembles?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/ensembles?u=76281980&t=0)** - [Instructor] Now I'd like to introduce a very powerful topic: the whole notion of ensembles.
>
> **[0:07](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/ensembles?u=76281980&t=7)** To help me explain it, I want to open a stream that I've built just for this purpose.
>
> **[0:13](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/ensembles?u=76281980&t=13)** There's a stream called Ensemble stream.
>
> **[0:19](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/ensembles?u=76281980&t=19)** I've added a number of nodes and connections to this stream to facilitate the demonstration, but as long as you double check the source node to verify that the data is where the source node expects it to be, you should be all set.
>
> **[0:34](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/ensembles?u=76281980&t=34)** So what's the basic notion of an ensemble?
>
> **[0:37](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/ensembles?u=76281980&t=37)** It's more than one model working together to build the predictions.
>
> **[0:41](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/ensembles?u=76281980&t=41)** In this case, I've chosen a C5 model and a neural net model.
>
> **[0:49](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/ensembles?u=76281980&t=49)** There is a phrase that is sometimes used for this kind of ensemble.
>
> **[0:54](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/ensembles?u=76281980&t=54)** This is a heterogeneous ensemble, because we have two different types of models, working together.
>
> **[1:01](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/ensembles?u=76281980&t=61)** A common example of a homogeneous model would be many, many C5s working together to make a prediction, something that's often called bagging.
>
> **[1:12](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/ensembles?u=76281980&t=72)** So why have I chosen these particular models for my heterogeneous ensemble?
>
> **[1:18](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/ensembles?u=76281980&t=78)** C5 has missing values handling.
>
> **[1:21](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/ensembles?u=76281980&t=81)** Neural net does not and very often, it is helpful to choose two models that complement each other in this way.
>
> **[1:30](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/ensembles?u=76281980&t=90)** Let's take a look at how the models produce predictions before we incorporate the ensemble aspect.
>
> **[1:39](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/ensembles?u=76281980&t=99)** I'm going to run this table.
>
> **[1:46](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/ensembles?u=76281980&t=106)** Let's take a look.
>
> **[1:48](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/ensembles?u=76281980&t=108)** $C is the prediction of the C5, so for Mr. Owen Harris, the prediction is that he is going to die in the accident, but for Mrs. John Bradley, the prediction is that she is going to survive.
>
> **[2:04](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/ensembles?u=76281980&t=124)** The next column is the confidence of that model.
>
> **[2:07](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/ensembles?u=76281980&t=127)** The confidence that Mr. Owen is going to die is about 84%.
>
> **[2:12](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/ensembles?u=76281980&t=132)** In the case of Mrs. Cummings, the confidence is near 100% that she'll survive.
>
> **[2:17](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/ensembles?u=76281980&t=137)** In the next column, we have the predictions of the neural net and in both cases, it agrees with the C5.
>
> **[2:24](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/ensembles?u=76281980&t=144)** And in the fourth column, we have the confidence of those predictions, however, and this is where it gets interesting, notice that down on this row, Mr. James Moran, the C5 has made a prediction but the neural net has not and that's because these two modeling techniques are rather different in this way.
>
> **[2:46](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/ensembles?u=76281980&t=166)** The neural net requires complete data.
>
> **[2:49](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/ensembles?u=76281980&t=169)** If any piece of information is missing, that case is not analyzed by the neural net.
>
> **[2:54](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/ensembles?u=76281980&t=174)** So this is a wonderful way that we can derive the benefits of a heterogeneous ensemble.
>
> **[3:01](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/ensembles?u=76281980&t=181)** The neural net might be more accurate on those cases for which it can produce a prediction, but obviously the nulls are not producing any prediction at all.
>
> **[3:11](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/ensembles?u=76281980&t=191)** With an ensemble, everyone will get a prediction.
>
> **[3:14](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/ensembles?u=76281980&t=194)** Let's take a look.
>
> **[3:17](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/ensembles?u=76281980&t=197)** There's a node in Modeler that supports this.
>
> **[3:19](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/ensembles?u=76281980&t=199)** You could conceivably do this with an if, then, else statement on your own, but let's take a look at how Modeler does it.
>
> **[3:27](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/ensembles?u=76281980&t=207)** If I go inside the ensemble node, I find that there are numerous choices that I can pick.
>
> **[3:33](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/ensembles?u=76281980&t=213)** I've selected highest confidence wins but there are many.
>
> **[3:38](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/ensembles?u=76281980&t=218)** I can choose by voting, confidence weighted voting, and a variety of others.
>
> **[3:44](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/ensembles?u=76281980&t=224)** Let's take a look at what the highest confidence wins looks like in the resulting predictions.
>
> **[3:50](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/ensembles?u=76281980&t=230)** If I look at the final table, I see that in the case of the first two rows that we discussed, the confidence of the ensemble, identify $XFC indicates that the neural net had the higher confidence, as we can see.
>
> **[4:11](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/ensembles?u=76281980&t=251)** However, if we go down to Mr. James Moran, we find that we've resolved our null problem because the C5 wins in this case, because the C5 confidence is competing with the null and this ensures that everyone gets a prediction.
>
> **[4:28](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/ensembles?u=76281980&t=268)** There are numerous reasons to use a technique like this.
>
> **[4:32](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/ensembles?u=76281980&t=272)** Overall accuracy is very frequently increased, but here we're getting that additional benefit.
>
> **[4:40](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/ensembles?u=76281980&t=280)** We're also ensuring that we get the right model for the right case and we've eliminated the issue of the null predictions by the neural net.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), case, (2), this. (2), if, (1)
> **CLI Commands:** node (4), find (2), make (1)
> **Definitions:** is a  (3)
> **Cross-References:** in the next (1), we discussed (1)
> **Tools:** notion (2)
> **Env Vars:** xfc (1)
> **Speakers:** - [instructor] (1)

#### What is bagging?
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-is-bagging?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-is-bagging?u=76281980&t=0)** - [Instructor] Now, let's talk about a very influential technique called bagging, which is a kind of homogeneous ensemble.
>
> **[0:09](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-is-bagging?u=76281980&t=9)** We'll be demonstrating in in Modeler.
>
> **[0:11](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-is-bagging?u=76281980&t=11)** I'm going to begin by opening a stream.
>
> **[0:14](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-is-bagging?u=76281980&t=14)** We're going to use the Quest stream.
>
> **[0:16](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-is-bagging?u=76281980&t=16)** Bagging can be applied in many situations, not just Quest.
>
> **[0:21](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-is-bagging?u=76281980&t=21)** So we're simply using Quest as an example of this technique.
>
> **[0:25](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-is-bagging?u=76281980&t=25)** I'm going to go inside the Quest modeling node, and over to Build Options, and we're going to go ahead and go right to generating the model.
>
> **[0:35](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-is-bagging?u=76281980&t=35)** And as you notice below, there's a checkbox that says that we can go ahead and enhance model stability through bagging, but initially what I'd like to do is go ahead and run this model as is.
>
> **[0:50](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-is-bagging?u=76281980&t=50)** There it is.
>
> **[0:52](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-is-bagging?u=76281980&t=52)** And I'm going to sever this link, because I'm going to go ahead and now create a second model using bagging so that we can compare and contrast the two in a couple of moments.
>
> **[1:04](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-is-bagging?u=76281980&t=64)** So, I go back in and I choose bagging.
>
> **[1:09](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-is-bagging?u=76281980&t=69)** And now I've got two models.
>
> **[1:12](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-is-bagging?u=76281980&t=72)** The first one without bagging and the second one with.
>
> **[1:16](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-is-bagging?u=76281980&t=76)** Before we examine the model that utilized bagging, let me explain what bagging is all about.
>
> **[1:25](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-is-bagging?u=76281980&t=85)** Bagging, or bootstrap aggregating, has been around for many years.
>
> **[1:30](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-is-bagging?u=76281980&t=90)** In fact, it was first proposed in the early '90s by Leo Breiman.
>
> **[1:35](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-is-bagging?u=76281980&t=95)** If you recognize that name, it's perhaps because he was the gentleman who came up with CART.
>
> **[1:42](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-is-bagging?u=76281980&t=102)** So, bagging is a special case of model averaging.
>
> **[1:46](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-is-bagging?u=76281980&t=106)** The notion is, is that we build multiple models and then compare all of those results.
>
> **[1:54](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-is-bagging?u=76281980&t=114)** The key to understanding bootstrap aggregating is to understand what bootstrap sampling is.
>
> **[2:02](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-is-bagging?u=76281980&t=122)** There's no point in building multiple models, in this case 10, if all the models are identical.
>
> **[2:10](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-is-bagging?u=76281980&t=130)** There has to be some variation.
>
> **[2:13](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-is-bagging?u=76281980&t=133)** Bootstrap sampling is sampling with replacement, so if you imagine a lottery drum, the notion would be, is that you pick out a number, you record it, but then you put it back.
>
> **[2:26](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-is-bagging?u=76281980&t=146)** That's critical, because there has to be a possibility that some numbers will get picked not at all, or more than once.
>
> **[2:34](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-is-bagging?u=76281980&t=154)** Let's take a look at an example.
>
> **[2:36](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-is-bagging?u=76281980&t=156)** I've taken some of the passengers from the Titanic passenger list and I've gone through exactly this process.
>
> **[2:43](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-is-bagging?u=76281980&t=163)** I took just the top 20 names, and I went ahead and used a randomizer to pick the name, and then pick another, but again, with the possibility of picking some names twice.
>
> **[2:54](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-is-bagging?u=76281980&t=174)** Let's take a closer look at three resamples that I've done.
>
> **[2:59](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-is-bagging?u=76281980&t=179)** Resampling is often a term that's used for the same thing.
>
> **[3:03](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-is-bagging?u=76281980&t=183)** So take a look.
>
> **[3:04](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-is-bagging?u=76281980&t=184)** We have three different samples.
>
> **[3:07](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-is-bagging?u=76281980&t=187)** Each would be the basis of a different tree, and look at the amount of repetition.
>
> **[3:12](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-is-bagging?u=76281980&t=192)** So, for instance, Miss Allen was chosen twice in the first sample, but not at all in the second or the third.
>
> **[3:18](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-is-bagging?u=76281980&t=198)** Mrs. John Jacob Astor was picked once in the first sample, four times in the second sample, and once again in the third sample.
>
> **[3:27](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-is-bagging?u=76281980&t=207)** One more passenger was picked once in the first and second samples, and then four times in the third sample.
>
> **[3:34](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-is-bagging?u=76281980&t=214)** So these samples really become quite different from each other, and that's the basis of the different models.
>
> **[3:40](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-is-bagging?u=76281980&t=220)** 10 different models in this case, built on 10 different resamples of our data.
>
> **[3:46](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-is-bagging?u=76281980&t=226)** In fact, if you look inside the modeling node, and go to Ensembles, you can see that the default setting in Modeler is to build 10 of these models, each with their own resample.
>
> **[4:06](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-is-bagging?u=76281980&t=246)** Let's take a look at the resulting model.
>
> **[4:11](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-is-bagging?u=76281980&t=251)** There are a number of interesting details.
>
> **[4:14](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-is-bagging?u=76281980&t=254)** We can go down to Predictor Importance and recognize that this is the Predictor Importance across all 10 of the models.
>
> **[4:22](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-is-bagging?u=76281980&t=262)** A particularly interesting lens into this is to click on the next tab here in Modeler, and what we can actually see is that Sibling/Spouse was used in the first, second, third, fourth, fifth, sixth, seventh, eighth, ninth, tenth model.
>
> **[4:38](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-is-bagging?u=76281980&t=278)** Was used in all 10.
>
> **[4:40](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-is-bagging?u=76281980&t=280)** We have a fairly modest data set, so in all 10 instances, the Quest has chosen to use all of the variables at some point in the tree.
>
> **[4:53](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-is-bagging?u=76281980&t=293)** Now, let's add an analysis node and compare the performance of the single Quest tree to the 10 bagged trees.
>
> **[5:07](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-is-bagging?u=76281980&t=307)** We'll run that.
>
> **[5:09](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-is-bagging?u=76281980&t=309)** The performance of the first model was 83% accurate on the training data, and a bit lower at about 79% of the testing data.
>
> **[5:19](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-is-bagging?u=76281980&t=319)** That would be considered pretty good.
>
> **[5:20](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-is-bagging?u=76281980&t=320)** We don't want the drop between 83% performance and the testing model to be more than a 5% drop, so we're doing okay.
>
> **[5:29](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-is-bagging?u=76281980&t=329)** But you can see the motivation behind bagging.
>
> **[5:32](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-is-bagging?u=76281980&t=332)** The performance of the second model is better.
>
> **[5:36](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-is-bagging?u=76281980&t=336)** The second model we see has a performance of 83% on the training data, but 81% on the testing data.
>
> **[5:44](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-is-bagging?u=76281980&t=344)** Its performance on the testing data is pretty good, compared to the single tree, so we've accomplished the kind of thing that we want here.
>
> **[5:51](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-is-bagging?u=76281980&t=351)** We have a better model through combining the 10.
>
> **[5:55](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-is-bagging?u=76281980&t=355)** What are some potential disadvantages, though, of bagging?
>
> **[5:59](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-is-bagging?u=76281980&t=359)** Why don't we just always do it?
>
> **[6:01](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-is-bagging?u=76281980&t=361)** Well, one disadvantage, unfortunately, is that you can examine and learn about your data through looking at a single tree, but it's a lot harder to do with 10.
>
> **[6:12](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-is-bagging?u=76281980&t=372)** So essentially, once you bag, you've turned Quest, in this case, into a black box technique.
>
> **[6:19](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-is-bagging?u=76281980&t=379)** So that's a potential downside.
>
> **[6:21](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-is-bagging?u=76281980&t=381)** Another potential downside that we're not experiencing here is that sometimes, bagged models can get overfit.
>
> **[6:28](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-is-bagging?u=76281980&t=388)** I think we can imagine why that's the case.
>
> **[6:30](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-is-bagging?u=76281980&t=390)** We keep on building the model over and over again on slightly different varying data sets, and sometimes what will happen is you'll get that overfit tree, which we would recognize by having a high train performance, but perhaps a poor test performance, and that large drop between the two would indicate that, in fact, we were overfit.
>
> **[6:49](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-is-bagging?u=76281980&t=409)** In this case, would we go with the bagged model?
>
> **[6:52](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-is-bagging?u=76281980&t=412)** Well, unless the black box issue was the case, I probably would.
>
> **[6:56](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-is-bagging?u=76281980&t=416)** Notice, however, that the agreement between the two is actually quite high.
>
> **[7:01](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-is-bagging?u=76281980&t=421)** The single model makes the same predictions 95, 96% of the time.
>
> **[7:07](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-is-bagging?u=76281980&t=427)** So in this case, we probably could go with either.
>
> **[7:10](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-is-bagging?u=76281980&t=430)** If transparency was important, we would probably go with the single tree.
>
> **[7:14](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-is-bagging?u=76281980&t=434)** If we wanted that little bit of extra accuracy, then the bagged version would also be a good choice.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), case, (5), case. (1)
> **CLI Commands:** node (3)
> **UI Navigation:** checkbox (1), go to (1), click on (1)
> **Analogies:** imagine (2), for instance (1)
> **Tools:** notion (2)
> **Definitions:** is a  (2)
> **Env Vars:** cart (1)
> **Speakers:** - [instructor] (1)

#### Using bagging for feature selection
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/using-bagging-for-feature-selection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/using-bagging-for-feature-selection?u=76281980&t=0)** - [Instructor] I want to show you a very powerful trick that uses bagging, when you first learn about these techniques, sometimes you get the impression that all of this is about building the final model.
>
> **[0:13](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/using-bagging-for-feature-selection?u=76281980&t=13)** But there's numerous things you do as you work towards that final model and one of those is feature selection.
>
> **[0:21](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/using-bagging-for-feature-selection?u=76281980&t=21)** So in modeler, for instance, there's the feature selection node, in C5, there's the notion of winnowing attributes.
>
> **[0:30](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/using-bagging-for-feature-selection?u=76281980&t=30)** Well, I'm going to show you a different trick for accomplishing the same thing.
>
> **[0:34](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/using-bagging-for-feature-selection?u=76281980&t=34)** Using bagging for the purpose of feature selection.
>
> **[0:38](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/using-bagging-for-feature-selection?u=76281980&t=38)** So I have a special stream that I've set up for this purpose called Bagging for Feature Selection stream.
>
> **[0:46](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/using-bagging-for-feature-selection?u=76281980&t=46)** And let me show some of the changes that I've made in a chade node, in the ensembles tab, I've actually request 100 bagged models.
>
> **[0:58](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/using-bagging-for-feature-selection?u=76281980&t=58)** And this has already been run.
>
> **[1:00](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/using-bagging-for-feature-selection?u=76281980&t=60)** Also, in the stopping rules, I've kept it at 1% minimum records in the child and 2% in the parent.
>
> **[1:07](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/using-bagging-for-feature-selection?u=76281980&t=67)** But I've made changes to other stopping rules.
>
> **[1:10](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/using-bagging-for-feature-selection?u=76281980&t=70)** For instance, I've allowed the maximum tree depth to be eight and I've changed the confidence level from the standard 95% confidence to 90% confidence.
>
> **[1:23](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/using-bagging-for-feature-selection?u=76281980&t=83)** This is going to make the tree grow bigger and what concern do we have when the tree gets too big?
>
> **[1:29](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/using-bagging-for-feature-selection?u=76281980&t=89)** We worry about it being overfit.
>
> **[1:31](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/using-bagging-for-feature-selection?u=76281980&t=91)** But that's actually exactly what I'm trying to do.
>
> **[1:35](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/using-bagging-for-feature-selection?u=76281980&t=95)** Why would we ever overfit on purpose?
>
> **[1:38](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/using-bagging-for-feature-selection?u=76281980&t=98)** Well what we're trying to do is find out which variables are doing the best job as we get towards the bottom of the tree in the little leaf nodes.
>
> **[1:49](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/using-bagging-for-feature-selection?u=76281980&t=109)** And when we overfit sometimes, we get noise in the leaf nodes, but sometimes there's signal hiding in the leaf nodes.
>
> **[1:56](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/using-bagging-for-feature-selection?u=76281980&t=116)** So by building 100 models, we're trying to figure out which of those variables are building the most effective leaf nodes.
>
> **[2:04](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/using-bagging-for-feature-selection?u=76281980&t=124)** By overfitting, we're endangering the stability of our models, however, by building 100 of them, we're counterbalancing that and across 100, we're introducing stability.
>
> **[2:17](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/using-bagging-for-feature-selection?u=76281980&t=137)** So let's take a look, in the final model you can see all of these circles.
>
> **[2:24](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/using-bagging-for-feature-selection?u=76281980&t=144)** What's happened is many, many bagged models have been run.
>
> **[2:29](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/using-bagging-for-feature-selection?u=76281980&t=149)** In fact, there's a list of them in another area of the modeler interface.
>
> **[2:34](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/using-bagging-for-feature-selection?u=76281980&t=154)** If we click here, we can see a listing of all the different models, some of them use all 7 predictors.
>
> **[2:42](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/using-bagging-for-feature-selection?u=76281980&t=162)** But some of them do not, they vary considerably in how many leaf nodes they have.
>
> **[2:48](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/using-bagging-for-feature-selection?u=76281980&t=168)** One that we see here has 48 leaf nodes or 48 nodes.
>
> **[2:53](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/using-bagging-for-feature-selection?u=76281980&t=173)** Another one has just 27, so they differ considerably in how large or simple those trees are.
>
> **[2:59](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/using-bagging-for-feature-selection?u=76281980&t=179)** So let's return to the blue circles and explain what's going on here.
>
> **[3:04](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/using-bagging-for-feature-selection?u=76281980&t=184)** Gender it appears has been used in every instance.
>
> **[3:09](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/using-bagging-for-feature-selection?u=76281980&t=189)** Passenger class as well has been used in every instance.
>
> **[3:13](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/using-bagging-for-feature-selection?u=76281980&t=193)** But take a look down towards the bottom of the list, this is really the whole point.
>
> **[3:16](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/using-bagging-for-feature-selection?u=76281980&t=196)** We can see that after all of these attempts to build numerous trees on different resamples, and barked is not always used and parent, child is only used about two-thirds of the time.
>
> **[3:30](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/using-bagging-for-feature-selection?u=76281980&t=210)** Imagine that you had 500 or 800 predictors, you could safely remove those that were infrequently used in the trees, simplifying your attribute list and passing less noise onto the other techniques.
>
> **[3:44](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/using-bagging-for-feature-selection?u=76281980&t=224)** So we're never going to use this model.
>
> **[3:46](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/using-bagging-for-feature-selection?u=76281980&t=226)** We're never going to use this bagged model of 100 different trees.
>
> **[3:51](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/using-bagging-for-feature-selection?u=76281980&t=231)** But we're using it to decide what variable to keep and what variable to drop.

> [!info]- Semantic Content
>
> **CLI Commands:** node (2), make (1), find (1)
> **Code Keywords:** let (3), interface (1)
> **Analogies:** for instance (2), imagine (1)
> **Tools:** notion (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Random forests
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/random-forests?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/random-forests?u=76281980&t=0)** - [Instructor] Before XGBoost became the hot algorithm on Kaggle, Random Forest was doing very well, and continues to be extremely popular.
>
> **[0:09](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/random-forests?u=76281980&t=9)** So what is Random Forests all about?
>
> **[0:11](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/random-forests?u=76281980&t=11)** Well, essentially, under the hood, it's really just CART, but combined with bagging.
>
> **[0:17](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/random-forests?u=76281980&t=17)** Let's take a look in Modeler.
>
> **[0:20](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/random-forests?u=76281980&t=20)** I prepared a stream called Random Trees stream.
>
> **[0:24](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/random-forests?u=76281980&t=24)** The Random Trees implementation of Random Forests in Modeler is interesting, in that this algorithm potentially works very well on distributed systems, and it's been designed in Modeler to do so.
>
> **[0:36](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/random-forests?u=76281980&t=36)** Imagine the following.
>
> **[0:38](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/random-forests?u=76281980&t=38)** Let's say that because you have big data, you're building your model on multiple machines.
>
> **[0:43](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/random-forests?u=76281980&t=43)** Well, you can build 10 trees on each of 10 machines, and then once they're built, combine those 100 trees together.
>
> **[0:52](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/random-forests?u=76281980&t=52)** And it can be highly scalable, even though you're doing a lot of computation.
>
> **[0:57](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/random-forests?u=76281980&t=57)** I've already prepared a CART model which I ran on defaults, so now I'm going to go ahead and run Random Forests, which will produce 100 trees.
>
> **[1:11](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/random-forests?u=76281980&t=71)** I'll hook this up, and then take a look inside.
>
> **[1:16](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/random-forests?u=76281980&t=76)** The Random Trees output is a little bit different, but it has a lot of the things that we've grown to expect, including predictor importance, and then, actually, if I scroll further down, I actually have the top rules, as well as a so-called confusion matrix, which is exactly the kind of information that we normally get in an analysis node.
>
> **[1:37](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/random-forests?u=76281980&t=97)** Now what I'm going to do is go ahead and run that analysis node anyway, because I want to compare the 100 tree ensemble to the single CART tree.
>
> **[1:55](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/random-forests?u=76281980&t=115)** The results are consistent with what we might expect.
>
> **[1:58](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/random-forests?u=76281980&t=118)** The single CART tree had an accuracy of about 80% on the trained data, and almost 77% on the test data.
>
> **[2:06](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/random-forests?u=76281980&t=126)** So it's pretty good.
>
> **[2:07](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/random-forests?u=76281980&t=127)** It's both stable, those numbers are close to each other, and the accuracy is pretty good as well.
>
> **[2:13](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/random-forests?u=76281980&t=133)** On the random trees, we see a pattern, again, that we might anticipate.
>
> **[2:18](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/random-forests?u=76281980&t=138)** We're substantially more accurate on the trained data.
>
> **[2:21](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/random-forests?u=76281980&t=141)** But like any ensemble, especially an ensemble with 100 models inside, there's always a little bit of a risk that it's going to get overfit.
>
> **[2:29](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/random-forests?u=76281980&t=149)** So look at the large gap between the training data and the test data.
>
> **[2:33](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/random-forests?u=76281980&t=153)** But nonetheless, we still have greater accuracy on the test data than we did on the individual CART.
>
> **[2:39](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/random-forests?u=76281980&t=159)** What's the potential downside?
>
> **[2:41](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/random-forests?u=76281980&t=161)** The same downside that we would have with any homogeneous ensemble.
>
> **[2:45](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/random-forests?u=76281980&t=165)** CART is not black box, but Random Trees, of course, is, because we can't look at all of those individual trees.
>
> **[2:52](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/random-forests?u=76281980&t=172)** Now that they've been combined, we get our more accurate prediction, but there's no tree that we can examine.

> [!info]- Semantic Content
>
> **Env Vars:** cart (6)
> **CLI Commands:** node (2)
> **Code Keywords:** let (2)
> **Definitions:** is a  (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### What is boosting?
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-is-boosting-23437053?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-is-boosting-23437053?u=76281980&t=0)** - [Instructor] Okay, here we are in modeler 18.4 and we're going to talk about boosting, but a particular kind of boosting that is supported by SPSS modeler.
>
> **[0:13](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-is-boosting-23437053?u=76281980&t=13)** So I've got a stream that's very similar to the streams that we've been doing.
>
> **[0:17](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-is-boosting-23437053?u=76281980&t=17)** Modeler 18.4 has a slightly different look and feel as you can see, but we've got the train dataset that we've been using all along, and I've got a C5 modeling node and I've run that twice.
>
> **[0:33](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-is-boosting-23437053?u=76281980&t=33)** One is a model very similar to what we've been doing all along and then now I want to show you the boosting feature, but as a checkbox feature, let's take a look.
>
> **[0:45](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-is-boosting-23437053?u=76281980&t=45)** So go in here and maximize that.
>
> **[0:47](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-is-boosting-23437053?u=76281980&t=47)** And notice I can actually see the different trees that have been built from each boosted step to each boosted step because all we're doing is an AdaBoost style of boosting.
>
> **[0:59](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-is-boosting-23437053?u=76281980&t=59)** And by that, I mean that we're weighting the rows and then running a very similar tree, but where the cases have been weighted so that the incorrect rows get greater weight.
>
> **[1:12](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-is-boosting-23437053?u=76281980&t=72)** Let me read a couple of sentences from the help file so that you can better understand this AdaBoosts style of boosting that is implemented in this way and modeler.
>
> **[1:24](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-is-boosting-23437053?u=76281980&t=84)** I encourage you to read this and the SPSS model or help, but I've summarized it for you here.
>
> **[1:30](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-is-boosting-23437053?u=76281980&t=90)** So right from the help file, it reads that there's a special method for improving the accuracy called boosting.
>
> **[1:36](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-is-boosting-23437053?u=76281980&t=96)** It works by building multiple models in a sequence.
>
> **[1:39](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-is-boosting-23437053?u=76281980&t=99)** The first model is built in the usual way.
>
> **[1:42](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-is-boosting-23437053?u=76281980&t=102)** The second model is built in such a way that it focuses on the records that were misclassified by the first model.
>
> **[1:52](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-is-boosting-23437053?u=76281980&t=112)** Then a weighted voting procedure is used to produce the final model.
>
> **[1:58](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-is-boosting-23437053?u=76281980&t=118)** And these characteristics are all consistent with an algorithm that's actually been around since the 90s called AdaBoosts.
>
> **[2:06](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-is-boosting-23437053?u=76281980&t=126)** This contrast with a different kind of boosting that we're also going to talk about in the course called XG Boost.
>
> **[2:13](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-is-boosting-23437053?u=76281980&t=133)** So let's go back to the stream and take a look at the results.
>
> **[2:18](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-is-boosting-23437053?u=76281980&t=138)** I'll click on okay here and let's run this analysis node.
>
> **[2:27](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-is-boosting-23437053?u=76281980&t=147)** Maximize that, so remember our first model was a regular C5 without the boosting checked off, and we got an accuracy of 85.31% on train and 77.27 on testing.
>
> **[2:44](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-is-boosting-23437053?u=76281980&t=164)** So it didn't validate quite as well as we would like that single tree model.
>
> **[2:52](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-is-boosting-23437053?u=76281980&t=172)** In contrast, the boosted one did a bit better, actually a point and a half is not trivial improvement.
>
> **[2:59](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-is-boosting-23437053?u=76281980&t=179)** So it did non-trivially better on the training data set, but it really held up well in testing, 83.52%, which is really much better.
>
> **[3:12](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-is-boosting-23437053?u=76281980&t=192)** So that's not a separate algorithm node, it's simply a checkbox available within a number of the modeling nodes, including C5.
>
> **[3:23](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-is-boosting-23437053?u=76281980&t=203)** So that's one kind of boosting and modeler, but it's not the only kind.
>
> **[3:28](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-is-boosting-23437053?u=76281980&t=208)** As mentioned, we're also going to take a look at XG Boost.

> [!info]- Semantic Content
>
> **Versions:** 18.4 (2), 85.31 (1), 77.27 (1), 83.52 (1)
> **Code Keywords:** let (4)
> **CLI Commands:** node (3)
> **UI Navigation:** checkbox (2), click on (1)
> **Env Vars:** spss (2)
> **Definitions:** is a  (1), is an  (1)
> **Cross-References:** go back to (1)
> **Analogies:** similar to (1)

#### What is XGBoost?
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-is-xgboost?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-is-xgboost?u=76281980&t=0)** - [Instructor] Extreme Gradient Boosting.
>
> **[0:03](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-is-xgboost?u=76281980&t=3)** XGBoost has a lot of moving parts, so before we do a demo, let's prepare by mentioning a couple of key points.
>
> **[0:11](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-is-xgboost?u=76281980&t=11)** First, as we'll see, it's implemented through Python.
>
> **[0:16](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-is-xgboost?u=76281980&t=16)** That means you can also read the XGBoost documentation online for the Python library, because it's the same algorithm.
>
> **[0:26](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-is-xgboost?u=76281980&t=26)** Also, loss functions are listed as learning tasks in the SPSS model or interface.
>
> **[0:34](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-is-xgboost?u=76281980&t=34)** We're going to see this.
>
> **[0:36](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-is-xgboost?u=76281980&t=36)** So the second tree in a series of boosted trees is built to figure out what adjustment to the model will move the learning task criteria in the optimal direction.
>
> **[0:49](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-is-xgboost?u=76281980&t=49)** This becomes the target of the tree.
>
> **[0:54](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-is-xgboost?u=76281980&t=54)** This is different than the add a boost style of boosting that we just saw, where the target of the tree remains the same, but the incorrect cases are weighted differently.
>
> **[1:06](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-is-xgboost?u=76281980&t=66)** They're both a kind of boosting, but what is being boosted is different.
>
> **[1:12](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-is-xgboost?u=76281980&t=72)** Now, we're not going to do a deep dive into all of the XGBoost hyperparameters, but SPSS Modeler supports a grid search option that I'm going to show you that will choose these for you.
>
> **[1:28](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-is-xgboost?u=76281980&t=88)** Finally, although it won't be relevant to our demo, there are two more things that make XGBoost powerful.
>
> **[1:37](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-is-xgboost?u=76281980&t=97)** It's highly scalable to huge datasets, and it has features that attempt to reduce the risk of overfitting.
>
> **[1:45](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-is-xgboost?u=76281980&t=105)** Those are just two additional things that have made XGBoost as popular as it is.
>
> **[1:52](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/what-is-xgboost?u=76281980&t=112)** So now let's try that demo.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), interface (1), this. (1), finally, (1)
> **CLI Commands:** python (2), make (1)
> **Env Vars:** spss (2)
> **Speakers:** - [instructor] (1)

#### XGBoost Tree node
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/xgboost-tree-node?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/xgboost-tree-node?u=76281980&t=0)** - [Instructor] Okay, so we've seen the checkbox boosting option and we've oriented ourselves to a little bit of what to expect from XGBoost.
>
> **[0:13](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/xgboost-tree-node?u=76281980&t=13)** So let's give XGBoost a try right here in Modeler, picking up in the same stream where we lift off.
>
> **[0:21](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/xgboost-tree-node?u=76281980&t=21)** So we want to go to the Python tab, and over here in the Python tab we see XG Boost Stream.
>
> **[0:28](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/xgboost-tree-node?u=76281980&t=28)** Even though this is implemented through Python, it looks just like any other modeling node would.
>
> **[0:33](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/xgboost-tree-node?u=76281980&t=33)** So we'll go ahead and connect it.
>
> **[0:36](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/xgboost-tree-node?u=76281980&t=36)** We're going to keep all the settings the same and let's take a look inside.
>
> **[0:41](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/xgboost-tree-node?u=76281980&t=41)** So we've got everything coming in from the type node.
>
> **[0:44](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/xgboost-tree-node?u=76281980&t=44)** We have all the same variables that I ran using the checkbox style of boosting.
>
> **[0:50](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/xgboost-tree-node?u=76281980&t=50)** But if we go to build options, we're presented with a lot of stuff going on here.
>
> **[0:55](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/xgboost-tree-node?u=76281980&t=55)** We have different methods from model building, and as I warned you to anticipate, we have this learning task option.
>
> **[1:03](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/xgboost-tree-node?u=76281980&t=63)** We also have hyper parameters, like early stopping as you can see.
>
> **[1:08](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/xgboost-tree-node?u=76281980&t=68)** But if we go back to basic, if we check off hyper parameter optimization, it will search through all of those settings and find the optimal ones for us.
>
> **[1:19](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/xgboost-tree-node?u=76281980&t=79)** So the only thing I want to warn you about is that it will run a little bit slower when you're doing this hyper parameter search.
>
> **[1:28](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/xgboost-tree-node?u=76281980&t=88)** So let's go ahead and run it.
>
> **[1:34](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/xgboost-tree-node?u=76281980&t=94)** Okay, let's drag this into place so that we can compare all three of them.
>
> **[1:42](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/xgboost-tree-node?u=76281980&t=102)** Now, one thing about XG Boost, despite its power and its popularity, it is basically a black box technique.
>
> **[1:49](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/xgboost-tree-node?u=76281980&t=109)** So unlike this original single tree model, there's no tree to look at here.
>
> **[1:56](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/xgboost-tree-node?u=76281980&t=116)** So let's just run the performance of all three.
>
> **[2:00](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/xgboost-tree-node?u=76281980&t=120)** Maximize that, and let's see how we do.
>
> **[2:03](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/xgboost-tree-node?u=76281980&t=123)** So we've got the original single tree.
>
> **[2:06](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/xgboost-tree-node?u=76281980&t=126)** We talked about that performance and that unfortunate drop between train and test performance.
>
> **[2:11](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/xgboost-tree-node?u=76281980&t=131)** Then the second model, the boosted, but the checkbox style boosting really did pretty great, right?
>
> **[2:18](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/xgboost-tree-node?u=76281980&t=138)** Then we find that the XG Boost does even better on the training data, but unfortunately there's a little bit of a drop here in testing.
>
> **[2:26](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/xgboost-tree-node?u=76281980&t=146)** Now, XG Boost is famous for doing things like regularization to reduce the risk of overfitting, but we have a small, simple data set without complex relationships.
>
> **[2:39](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/xgboost-tree-node?u=76281980&t=159)** So the checkbox style boosting seems to have done a better job in this particular instance.
>
> **[2:44](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/xgboost-tree-node?u=76281980&t=164)** But XG Boost is one of the most famous algorithms in use today, and I wanted to make sure that you knew that it was available through the Python tab right here in SPSS Modeler.

> [!info]- Semantic Content
>
> **CLI Commands:** python (4), node (2), find (2), make (1)
> **Code Keywords:** let (6)
> **UI Navigation:** checkbox (4), go to (2)
> **Cross-References:** go back to (1), we talked about (1)
> **Env Vars:** spss (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### Costs and priors
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/costs-and-priors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/costs-and-priors?u=76281980&t=0)** - [Instructor] Now I'd like to talk about costs.
>
> **[0:03](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/costs-and-priors?u=76281980&t=3)** Now, costs are a feature that almost all the decision tree algorithms have, but I'm going to demonstrate them via CART, because CART has a really nice feature that some of the other algorithms doesn't have in regards to costs.
>
> **[0:22](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/costs-and-priors?u=76281980&t=22)** I'm going to start by opening a stream that I've created for just this purpose.
>
> **[0:29](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/costs-and-priors?u=76281980&t=29)** The first CART model that's been already placed on the stream here was run on default settings, so nothing particularly special about that model.
>
> **[0:39](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/costs-and-priors?u=76281980&t=39)** Now, in the Settings for the CART modeling node, I'm going to show you where the settings for costs are, you can check off Use misclassification costs and I've increased the value in the upper right corner from the original 1.0 to 5.0.
>
> **[0:58](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/costs-and-priors?u=76281980&t=58)** What's going on here?
>
> **[1:00](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/costs-and-priors?u=76281980&t=60)** Well, that corner of the matrix means the following.
>
> **[1:04](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/costs-and-priors?u=76281980&t=64)** Those are folks that actually died in the accident but the model said that they would survive.
>
> **[1:12](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/costs-and-priors?u=76281980&t=72)** That's a particular kind of mistake.
>
> **[1:15](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/costs-and-priors?u=76281980&t=75)** The opposite kind of mistake would be predicting that they were going to die, but they actually survived.
>
> **[1:22](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/costs-and-priors?u=76281980&t=82)** Now, the reason that you focus on costs is that those two mistakes might not be equally important to you.
>
> **[1:29](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/costs-and-priors?u=76281980&t=89)** Let's say that you had an intervention strategy.
>
> **[1:33](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/costs-and-priors?u=76281980&t=93)** We're going to have to imagine that the situation is slightly different than the Titanic itself, which is historical incident.
>
> **[1:39](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/costs-and-priors?u=76281980&t=99)** We'd have to imagine that this was an ongoing series of cruise trips.
>
> **[1:46](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/costs-and-priors?u=76281980&t=106)** Maybe what's happening is that folks aren't getting to safety in the way that they should, so when the model tells us that a particular passenger is at risk of not getting to the safety boats, we're going to have a crew member help them.
>
> **[2:02](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/costs-and-priors?u=76281980&t=122)** We have to identify those customers that are at risk of being hurt in the accident so that we can help them.
>
> **[2:10](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/costs-and-priors?u=76281980&t=130)** It means we really have to figure out who's at risk, therefore, the mistake where we predict they're going to survive, but they don't, is a serious mistake, more serious than the other kind of mistake, so I'm going to give it five times the weight.
>
> **[2:28](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/costs-and-priors?u=76281980&t=148)** Now here's the really interesting feature that CART has.
>
> **[2:31](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/costs-and-priors?u=76281980&t=151)** Not only will CART change the cutoff points for the predictions, all the techniques do that, CART will actually change the shape of the tree to facilitate reducing that mistake that we're worried about.
>
> **[2:46](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/costs-and-priors?u=76281980&t=166)** Let's take a look at the two trees side by side.
>
> **[2:50](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/costs-and-priors?u=76281980&t=170)** We do indeed see that there's a difference.
>
> **[2:53](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/costs-and-priors?u=76281980&t=173)** They both first branch on gender, passenger class, and age.
>
> **[2:58](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/costs-and-priors?u=76281980&t=178)** But the tree on the left, which was the default settings tree, we then split on Fare and Sibling Spouse.
>
> **[3:08](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/costs-and-priors?u=76281980&t=188)** The tree on the right, which is after the costs has been adjusted, now splits Sibling Spouse on both sides, and then beneath it, there's now a new branch.
>
> **[3:19](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/costs-and-priors?u=76281980&t=199)** Let's see how that impacts the accuracy of these two trees.
>
> **[3:25](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/costs-and-priors?u=76281980&t=205)** I'm going to run the Analysis node, and I've chosen a non-default setting, Coincidence matrices.
>
> **[3:35](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/costs-and-priors?u=76281980&t=215)** This will allow us to see what kinds of mistakes are we making.
>
> **[3:44](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/costs-and-priors?u=76281980&t=224)** Let's take a look.
>
> **[3:45](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/costs-and-priors?u=76281980&t=225)** Now, remember, the first model is the default model, and the second model we've applied costs.
>
> **[3:52](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/costs-and-priors?u=76281980&t=232)** Notice that the overall accuracy for the first model is over 81%, and the overall accuracy for the second model is substantially less.
>
> **[4:03](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/costs-and-priors?u=76281980&t=243)** This is guaranteed to happen, when you start to play around with costs, what you're doing is you're saying that I really care deeply about a particular kind of mistake and I want to avoid it.
>
> **[4:14](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/costs-and-priors?u=76281980&t=254)** But your overall accuracy is going to suffer.
>
> **[4:18](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/costs-and-priors?u=76281980&t=258)** Let's look at the test data, because that's really where the action is.
>
> **[4:22](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/costs-and-priors?u=76281980&t=262)** In the default model, notice that it says rows show actuals.
>
> **[4:28](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/costs-and-priors?u=76281980&t=268)** The zeroes would be folks that actually died and there are 14 folks that actually died that were predicted to survive in the default model.
>
> **[4:40](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/costs-and-priors?u=76281980&t=280)** Looking down at the new model, the new model where costs have been applied, of those individuals that actually died, only five, not 14, but only five now were predicted to survive.
>
> **[4:57](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/costs-and-priors?u=76281980&t=297)** It's done exactly what we asked it to do.
>
> **[5:00](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/costs-and-priors?u=76281980&t=300)** We told it that that kind of mistake was what was important to us, and even though we had to sacrifice overall accuracy, it has reduced that mistake by several cases.

> [!info]- Semantic Content
>
> **Env Vars:** cart (7)
> **Code Keywords:** let (5), class, (1)
> **CLI Commands:** node (2)
> **Versions:** 1.0 (1), 5.0 (1)
> **Analogies:** imagine (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### XGBoost Linear
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/xgboost-linear?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/xgboost-linear?u=76281980&t=0)** - [Instructor] Here we go.
>
> **[0:01](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/xgboost-linear?u=76281980&t=1)** We're going to stay in the same stream.
>
> **[0:03](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/xgboost-linear?u=76281980&t=3)** And under the Python tab, I've got XG Boost Linear, which is implemented through Python.
>
> **[0:10](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/xgboost-linear?u=76281980&t=10)** I'm going to bend this arrow over here because I don't need anything coming out of the cart predictor node there.
>
> **[0:17](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/xgboost-linear?u=76281980&t=17)** And it's all set up based on my type node.
>
> **[0:21](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/xgboost-linear?u=76281980&t=21)** I've got, name has been discarded.
>
> **[0:23](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/xgboost-linear?u=76281980&t=23)** Miles per gallon is my target.
>
> **[0:25](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/xgboost-linear?u=76281980&t=25)** I've got my predictors.
>
> **[0:26](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/xgboost-linear?u=76281980&t=26)** And under Build Options, there are a lot of parameters that take quite a bit of knowledge of the XG Boost algorithm to adjust.
>
> **[0:34](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/xgboost-linear?u=76281980&t=34)** We do have the option of having it do a parameter search by checking off this box here.
>
> **[0:41](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/xgboost-linear?u=76281980&t=41)** And when we do that, everything is grayed out.
>
> **[0:44](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/xgboost-linear?u=76281980&t=44)** But for this first attempt, we're just going to go ahead and turn that off and let it run on defaults.
>
> **[0:50](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/xgboost-linear?u=76281980&t=50)** So let that run.
>
> **[0:54](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/xgboost-linear?u=76281980&t=54)** I'll drag this into place here.
>
> **[0:58](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/xgboost-linear?u=76281980&t=58)** This is a simple dataset, so let's see how they do.
>
> **[1:01](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/xgboost-linear?u=76281980&t=61)** Going to run my analysis node.
>
> **[1:06](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/xgboost-linear?u=76281980&t=66)** And mean absolute error is probably where we want to go.
>
> **[1:11](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/xgboost-linear?u=76281980&t=71)** And for the first model, which is our regression tree, we get a mean absolute error a little bit higher than two, and for the test a little bit under two.
>
> **[1:20](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/xgboost-linear?u=76281980&t=80)** Kind of nice to see that our test is actually slightly better.
>
> **[1:23](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/xgboost-linear?u=76281980&t=83)** That happens.
>
> **[1:24](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/xgboost-linear?u=76281980&t=84)** And then actually the fancier algorithm in this instance didn't do better.
>
> **[1:30](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/xgboost-linear?u=76281980&t=90)** And that sometimes happens.
>
> **[1:32](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/xgboost-linear?u=76281980&t=92)** If the relationships are linear and not curve linear, sometimes the simpler algorithm will do the better job.
>
> **[1:39](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/xgboost-linear?u=76281980&t=99)** But I wanted you to see the relatively new option of the XG Boost Linear node available in the Python tab.

> [!info]- Semantic Content
>
> **CLI Commands:** node (4), python (3)
> **Code Keywords:** let (3)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 5. Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/next-steps-23432056?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/next-steps-23432056?u=76281980&t=0)** - [Instructor] If you've completed both decision tree courses, you've learned a lot about SPSS and some important algorithms.
>
> **[0:08](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/next-steps-23432056?u=76281980&t=8)** So I want to thank you very much for joining me.
>
> **[0:11](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/next-steps-23432056?u=76281980&t=11)** So where should you turn next for some more learning?
>
> **[0:14](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/next-steps-23432056?u=76281980&t=14)** With two full courses and the SPSS learning path already completed, I would urge you to consider the option of completing that entire learning path.
>
> **[0:25](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/next-steps-23432056?u=76281980&t=25)** Then there are two courses in particular that would be a good fit as you complete this course.
>
> **[0:31](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/next-steps-23432056?u=76281980&t=31)** There's a course dedicated to ensembles that goes into more depth about bagging and boosting, why they're effective, and the famous algorithms associated with them.
>
> **[0:41](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/next-steps-23432056?u=76281980&t=41)** Also, if you use a technique like Random Forest or XGBoost, you'll have to explain the models, which requires an extra step.
>
> **[0:49](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/next-steps-23432056?u=76281980&t=49)** I also have a course dedicated to this topic, explainable AI.
>
> **[0:55](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/next-steps-23432056?u=76281980&t=55)** If you're not following me yet on LinkedIn, please do so and consider attending one of my office hours.
>
> **[1:01](https://www.linkedin.com/learning/machine-learning-and-ai-advanced-decision-trees-with-spss/next-steps-23432056?u=76281980&t=61)** And if you see me at a conference, I hope you'll say hi.

> [!info]- Semantic Content
>
> **Env Vars:** spss (2)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Keith McCormick]]

## Resources

- Exercise files available

## Skills Covered

- Machine Learning
- Artificial Intelligence (AI)
- Decision Trees

## Path Context

### In [[Develop Your SPSS Skills]]
← [[Machine Learning and AI Foundations- Decision Trees with SPSS]] | **5 of 6** | [[Machine Learning and AI Foundations- Clustering and Association]] →

## Appears In

- [[Develop Your SPSS Skills]]

## Related Courses

_Courses sharing skills:_

- [[Machine Learning and AI Foundations- Decision Trees with SPSS]] — Artificial Intelligence (AI), Machine Learning, Decision Trees
- [[Machine Learning and AI Foundations- Advanced Decision Trees with KNIME]] — Artificial Intelligence (AI), Machine Learning, Decision Trees
- [[Machine Learning and AI Foundations- Decision Trees with KNIME]] — Artificial Intelligence (AI), Machine Learning, Decision Trees
- [[Machine Learning with Python- Decision Trees]] — Artificial Intelligence (AI), Machine Learning, Decision Trees
- [[Machine Learning and AI Foundations- Clustering and Association]] — Artificial Intelligence (AI), Machine Learning

---

[↑ Back to top](#)