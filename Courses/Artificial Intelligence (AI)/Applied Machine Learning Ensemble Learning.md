---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: applied-machine-learning-ensemble-learning-25317548
url: "https://www.linkedin.com/learning/applied-machine-learning-ensemble-learning-25317548"
level: Intermediate
updated: 2/28/2025
learners: 7993
skills:
  - Artificial Intelligence (AI)
  - Applied Machine Learning
exercise_files: true
github: "https://github.com/LinkedInLearning/applied-machine-learning-ensemble-learning-3959211/codespaces"
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQHDOm3DVzUfqg/learning-public-crop_675_1200/B4EZUpkmAfGgAY-/0/1740159214378?e=2147483647&amp;v=beta&amp;t=yfB6yVe8_8VeRs3WUksKIF7mdXocVnPFGQPOK-3-UFA"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Advance Your Skills in AI and Machine Learning]]'
next_courses:
  - '[[Deep Learning- Model Optimization and Tuning (2022)]]'
path_nav: '[{"path":"Advance Your Skills in AI and Machine Learning","position":1,"total":16,"prev":null,"next":"Deep Learning- Model Optimization and Tuning (2022)"}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - skill/artificial-intelligence-ai
  - skill/applied-machine-learning
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Applied%20Machine%20Learning%20Ensemble%20Learning.md)

![Applied Machine Learning Ensemble Learning](https://media.licdn.com/dms/image/v2/D4E0DAQHDOm3DVzUfqg/learning-public-crop_675_1200/B4EZUpkmAfGgAY-/0/1740159214378?e=2147483647&amp;v=beta&amp;t=yfB6yVe8_8VeRs3WUksKIF7mdXocVnPFGQPOK-3-UFA)

# Applied Machine Learning Ensemble Learning

> Do you want to grow your skills as a machine learning practitioner, but don’t know where to begin? You don’t need any formal training in data science to start working toward your goal. In this course, instructor Matt Harrison guides you through the key concepts of ensemble learning. Explore different ensemble methods like bagging, boosting, and stacking and learn to implement them using popular Py

> [LinkedIn Learning](https://www.linkedin.com/learning/applied-machine-learning-ensemble-learning-25317548) | Intermediate | 8K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Ensemble learning: Boost your models' performance](#ensemble-learning-boost-your-models-performance)
  - [How to use Codespaces](#how-to-use-codespaces)
- [**1. Introduction to Ensemble Learning**](#1-introduction-to-ensemble-learning) (3 videos)
  - [Definition of ensemble learning and the problem of overfitting](#definition-of-ensemble-learning-and-the-problem-of-overfitting)
  - [Real-world relevance](#real-world-relevance)
  - [Types of ensembles](#types-of-ensembles)
- [**2. Bagging and Random Forests**](#2-bagging-and-random-forests) (5 videos)
  - [Concept of bagging](#concept-of-bagging)
  - [Random forest example](#random-forest-example)
  - [Parameter tuning for Random Forest](#parameter-tuning-for-random-forest)
  - [Challenge: Tune Random Forest parameters](#challenge-tune-random-forest-parameters)
  - [Solution: Tune Random Forest parameters](#solution-tune-random-forest-parameters)
- [**3. Boosting and Gradient Boosting**](#3-boosting-and-gradient-boosting) (5 videos)
  - [Concept of boosting](#concept-of-boosting)
  - [AdaBoost and gradient boosting](#adaboost-and-gradient-boosting)
  - [Hyperparameter tuning for boosting](#hyperparameter-tuning-for-boosting)
  - [Challenge: tune AdaBoost model](#challenge-tune-adaboost-model)
  - [Solution: tune AdaBoost model](#solution-tune-adaboost-model)
- [**4. XGBoost**](#4-xgboost) (5 videos)
  - [Why XGBoost?](#why-xgboost)
  - [Hands-on coding with XGBoost](#hands-on-coding-with-xgboost)
  - [Hyperparameter tuning for XGBoost](#hyperparameter-tuning-for-xgboost)
  - [Challenge: Tune XGBoost model](#challenge-tune-xgboost-model)
  - [Solution: Tune XGBoost model](#solution-tune-xgboost-model)
- [**5. Stacking**](#5-stacking) (5 videos)
  - [Concept of stacking](#concept-of-stacking)
  - [Hands-on coding with StackingClassifier](#hands-on-coding-with-stackingclassifier)
  - [Evaluation of stacking vs individual models](#evaluation-of-stacking-vs-individual-models)
  - [Challenge: Create a stacked model](#challenge-create-a-stacked-model)
  - [Solution: Create a stacked model](#solution-create-a-stacked-model)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Ensemble learning: Boost your models' performance](https://www.linkedin.com/learning/applied-machine-learning-ensemble-learning-25317548/ensemble-learning-boost-your-models-performance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/applied-machine-learning-ensemble-learning-25317548/ensemble-learning-boost-your-models-performance?u=76281980&t=0)** - Have you ever wondered what makes models like Random Forest and XGBoost dominate competitions and deliver top-tier performance in real-world applications? The answer is ensemble learning, one of the most transformative concepts in machine learning. Hi, I'm Matt Harrison, author of "Effective XGBoost", and a consultant to some of the world's leading companies. Over the years, I've helped organizations elevate their machine learning models to outperform the competition, and now, I'm here to share those insights with you. Whether you're a data scientist, machine learning enthusiast, or someone who wants to take their modeling skills to the next level, this course is designed for you. By the end, you'll not only understand how ensembles work, but also how to harness their power to build more accurate and reliable models. Let's get started.

> [!info]- Semantic Content
>
> **Speakers:** - have (1)

#### [How to use Codespaces](https://www.linkedin.com/learning/applied-machine-learning-ensemble-learning-25317548/how-to-use-codespaces?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/applied-machine-learning-ensemble-learning-25317548/how-to-use-codespaces?u=76281980&t=0)** - [Instructor] One of the cool features of [[GitHub]] is that it provides [[Codespaces]]. So if you're not familiar with using [[Python (Programming Language)|Python]] and friends to install the packages to run this course, no need to worry because Codespaces has you covered. It's real easy to use. All you have to do is navigate to the GitHub project, and there's this green button that says Code. So I'm going to click on that, and in here, there's actually three tabs. We're going to click on the Codespaces tab, and at the top you see it says Codespaces. There's a plus button here. We're just going to hit that and say Create a code space on main. Here's where the fun stuff happens. Behind the scenes, it's provisioning a [[Linux]] environment, and I've got it set up so it installs Python and the packages you need for this course. In fact, all you need to do is wait for this to set up. It might take a minute or two, and then click on the notebook, and you should be good to go. Let's give it some time to set up. If you want to, you can click on this Building section here, and this will give you the details about what's going on. Looks like, at this point, it is using the uv package manager to install the environment. We'll let that keep going. So when it turns black and pulls up the README, it's still not done. It still needs to do a little bit more. You should see a terminal window pop up at the bottom here. We'll let that finish running. So I believe, at this point, it is ready to go. I'm going to click on ensembles.
>
> **[1:37](https://www.linkedin.com/learning/applied-machine-learning-ensemble-learning-25317548/how-to-use-codespaces?u=76281980&t=97)** So here's the notebook. Let me click this button up here to hide the terminal down there below. Up here, it says Select Kernel. You can click that, and it says Python Environments. You can click Python Environments. I have created a Python environment for you. It's this one right here, .venv, so you can click that. You can see that it says .venv over here in the environment now, so we should be good to go. Let's just test it out. What I'll do is I'll run this cell right here, and it looks like that worked. This is the Draw Data Cell. It looks like it's working, so, at this point, you should be good to go. If you're not familiar with Jupyter, let me quickly tell you how to use that. You can create a text cell if you need to. We're not going to be doing that in this course. If you want to run a cell, you can click over here on this Play button to execute the cell. Alternatively, the keyboard shortcut is Control + Enter. So Codespaces is a nice way of running this. If you want to run this locally, you can as well. It's using the uv tools, so you'll need to clone the repository and run uv sync. That will set up the dependencies, and you should be good to go.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Codespaces]] (5), [[Python (Programming Language)|Python]] (5), [[GitHub]] (2), [[Linux]] (1)
> **Prerequisites:** set up (4), install (2), you'll need (1)
> **UI Navigation:** click on (5), navigate to (1)
> **CLI Commands:** python (5)
> **Tools:** github (2), terminal (2), jupyter (1)
> **Env Vars:** readme (1)
> **Documentation:** the readme (1)
> **Definitions:** is a  (1)


### 1. Introduction to Ensemble Learning

[↑ Back to Table of Contents](#table-of-contents)

#### [Definition of ensemble learning and the problem of overfitting](https://www.linkedin.com/learning/applied-machine-learning-ensemble-learning-25317548/definition-of-ensemble-learning-and-the-problem-of-overfitting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/applied-machine-learning-ensemble-learning-25317548/definition-of-ensemble-learning-and-the-problem-of-overfitting?u=76281980&t=0)** - [Instructor] One of the most important ideas in machine learning is ensembles. If you've worked with models like Random Forest or XGBoost, you've already experienced the power of ensembles, whether you've realized it or not. But let's start off with the basics. What is an ensemble? At its core, an ensemble combines multiple models, often simpler or weaker models, into a single, more powerful system. It's like assembling a team of individuals who each bring the unique skills to the table. This idea isn't just some cool trick, there's also some theory behind it. There's a theorem from political science called Condorcet's Theorem. That's surprisingly relevant here. Condorcet was a politician in France, and he stated that if you're creating a jury, there's an optimal way to do it. If each juror is slightly more likely than random, to make the right decision, you should add them to the jury. Adding more juries will increase the [[Probability]] of the group reaching the correct verdict. So this same logic applies to ensembles. You're going to combine different models. You can think of them as jury members. But if each of them has a different background but they're likely to make the correct decision, maybe their background allows 'em to look at different aspects of the case, you should throw them onto the jury, and they will help make the output better. There is a catch to this.
>
> **[1:31](https://www.linkedin.com/learning/applied-machine-learning-ensemble-learning-25317548/definition-of-ensemble-learning-and-the-problem-of-overfitting?u=76281980&t=91)** It's called the No Free Lunch theorem. The No Free Lunch theorem tells us that no single model performs best against all problems. A model that works with one data set might fail miserably with another data set. And that's why relying on just one model might be problematic. I like to compare this with golf. It's like trying to play golf with just one club in your bag. Let's expand on this golf analogy because I think it's actually relevant to learning about ensembles. If you're not familiar with golf, the goal of golf is you hit a ball some distance into a hole. And if you squint at that problem, it's kind of like machine learning, whereas you could say, "I am trying to predict how far I should hit this ball, maybe some number, and maybe I can predict based on the wind, the temperature, what type of club I'm using, maybe my shoes, maybe if I'm right-handed or left-handed, how far I will hit the ball." You can think of that as a machine learning problem. We're going to look at different ways to build ensembles, and each of these will have a golfing metaphor. First of all, in machine learning, you can have a single model, and we're going to say that the goal of a single model is to predict how far we need to hit the ball to get it into the hole. So a single model is like playing golf with just one club and one shot. You get to hit the ball once, and however far off you are,
>
> **[3:05](https://www.linkedin.com/learning/applied-machine-learning-ensemble-learning-25317548/definition-of-ensemble-learning-and-the-problem-of-overfitting?u=76281980&t=185)** that is the error. We're going to talk about an ensemble called bagging. And if we're going to use our golf analogy, bagging is like having multiple golfers that are each slightly different. And they're all going to hit the ball independently, and in the end, we'll take the average of their balls. Bagging is kind of like Condorcet's theorem. If you have slightly different golfers, theoretically, the average of those golfers will be better than an individual golfer. Let's apply boosting to our golfing analogy. Boosting is like you get to hit the ball once, and you're going to be some distance away from the hole, but in boosting, you get to hit the ball again. So it's actually like golfing. And on the subsequent hit, you're not starting over. What you're doing is working from where you were, and so you can change your club, you can change your swing, you can make the changes, adjustments you need to, and hit the ball again. And guess what? Just like in golf, you get to keep hitting. So that's the idea behind boosting. Stacking is similar to bagging with a key difference. In bagging, you're combining multiple models that are the same model. So you could think of maybe you have clones of yourself in bagging, and each of your clones is hitting the ball slightly different. In stacking, you don't have clones of yourself, you have different golfers. Maybe you have a left-handed golfer.
>
> **[4:38](https://www.linkedin.com/learning/applied-machine-learning-ensemble-learning-25317548/definition-of-ensemble-learning-and-the-problem-of-overfitting?u=76281980&t=278)** Maybe you have a couple right-handed golfers. They use different clubs. They have different strengths and weaknesses, and we're going to combine all of those strengths and weaknesses. So that's the idea behind stacking. Another thing that stacking can do is it can be smart about the outputs of the model. So it doesn't just have to take the average of them, but it can say on a certain given hole, but on a certain hole, you might wait one golfer's hit as better or give it more importance than another golfer's hit. So hopefully, this analogy of golfing helps you understand that by combining different models, or golfers in our analogy, you can make a better final product. Stay with us because in the next section, we're going to jump into one of the best applications of bagging the Random Forest.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Probability]] (1)
> **Analogies:** it's like (2), kind of like (2), just like (1), similar to (1)
> **CLI Commands:** make (5)
> **Definitions:** is an  (1), is a  (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Real-world relevance](https://www.linkedin.com/learning/applied-machine-learning-ensemble-learning-25317548/real-world-relevance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/applied-machine-learning-ensemble-learning-25317548/real-world-relevance?u=76281980&t=0)** - [Speaker] Before we get to looking at code, I want to look at some real-world challenges and see how ensembles might help us tackle some of these problems. Ensembles work because they combine the strengths of multiple models. Think about healthcare predicting whether a patient has a disease based on the symptoms or medical images can be a complex undertaking. Ensembles can be used to combine models trained on different data types, such as imaging scans, patient history, and lab results, and a doctor can take those individual models and use them to come up with a proper diagnosis. Let's look at another machine learning problem, fraud detection. Banks and credit card companies process billions of transactions every day and detecting fraudulent activity requires robust systems. Ensembles like random forests or XG Boost are often used to flag unusual transactions, but you can combine these with other models that look at patterns such as time of day, spending location. And by combining these systems, you can minimize false positives and catch fraudulent activity. Let's look at another example. Think about Netflix or Spotify. Their job is to figure out what you want to watch or listen to. Ensembles can be used here as well. In fact, there's a famous case with Netflix that's called the Million Dollar Challenge, where they offered $1,000,000 to improve their model.
>
> **[1:36](https://www.linkedin.com/learning/applied-machine-learning-ensemble-learning-25317548/real-world-relevance?u=76281980&t=96)** The model that won that was an ensemble, that was gigantic, I believe it had 100 or so different models inside of it. Now it got the best score, but in the end, they didn't deploy it because it was so complicated. So there's a trade-off between complicated and simple, but you'll want to find the sweet spot. Sometimes, you just want a simple model. Sometimes, you want a more complicated model, and ensembles can do that for you. In the case of recommendation systems, you might have a model that looks at your past behavior, what shows you've been watched, or what songs you've looped. You might have another model that analyzes global trends. You might have a model that combines those two to give you a better overall result. Why do ensembles work so well in these examples? It comes down to a few things. Their ability to handle different types of data. We can have different models that do better with different types of data. And combining those can be key. We can also minimize errors by combining multiple perspectives. And finally, ensembles have the ability to generalize to new data, smoothing out the noise, and giving us the trend in the data. This is why ensembles consistently dominate machine learning competitions like Kaggle, and also why they're used in production systems that impact millions of lives every day. The beauty of ensembles is that they don't just solve toy problems, they're designed for real-world problems. In the next section, we're going to look at how bagging works,
>
> **[3:08](https://www.linkedin.com/learning/applied-machine-learning-ensemble-learning-25317548/real-world-relevance?u=76281980&t=188)** starting with random forest and understand why it's such a popular tool. I'm excited to have you joining me in this course because I think these models are super useful and I use them all the time with my clients as well.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Cross-References:** in the next (1)
> **Analogies:** such as (1)
> **Speakers:** - [speaker] (1)

#### [Types of ensembles](https://www.linkedin.com/learning/applied-machine-learning-ensemble-learning-25317548/types-of-ensembles?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/applied-machine-learning-ensemble-learning-25317548/types-of-ensembles?u=76281980&t=0)** - [Instructor] We've seen how ensembles impact real world problems. Let's dive in a little bit more about how they work. So we compared bagging with our golf analogy to taking multiple golfers that are similar and averaging their results. The idea of bootstrapping is that you are going to take your data and you're going to sample parts of that data to build up different datasets, and then you're going to train models on those different datasets. So you might think of it as if you had clones of yourself in golfing. You might have one clone that played some holes on some course, and another clone that played holes on a different course, and another clone that played holes on a different course. They're looking at different courses or different subsets of the data. And then you can combine those clones that have different skills and weaknesses based on what they're trained on to get a better final result. A great example of bagging is a random forest. You have many [[Decision Trees]] that are trained on different subsets of the data and their outputs are averaged. Random forest is super popular because it's easy to implement, robust, and handles noisy data. Now let's talk about boosting. In our golfing analogy, boosting was the ability to after your initial hit on the ball, you could change clubs and you could correct the error, you could take another hit and you could keep doing that. And this is the same thing
>
> **[1:31](https://www.linkedin.com/learning/applied-machine-learning-ensemble-learning-25317548/types-of-ensembles?u=76281980&t=91)** that we're going to be doing with boosting. In boosting, we usually start off with a weak model. And a weak model has what statisticians call bias. They are too simple, but the boosting is going to address that bias by having an additional model to fix the error, fix that bias. Instead of training models independently like bagging, in boosting, we sequentially build those models. Here's how it works. We're going to take a weak model. Generally that's a decision tree, and it's very simple, it's not super accurate, but we're going to make predictions from that. We're going to identify where this makes errors or mistakes, and then the next model is going to predict the correction for those. It's going to get us to the hole, so to speak. And we can repeat this as often as necessary to make a strong prediction at the end. A great example of boosting is XGBoost, one of the most popular tools in machine learning. I use it so much and work with my clients on it that I even wrote a book about it, "Effective XGBoost." It's super powerful, and as you'll see in this course, it tends to have great performance out of the box. It's one of the most popular tools and it's constantly at the top of machine learning competitions, but it's used in real world applications as well. And then finally, we have stacking. Unlike bagging where we're taking golfers that are similar,
>
> **[3:06](https://www.linkedin.com/learning/applied-machine-learning-ensemble-learning-25317548/types-of-ensembles?u=76281980&t=186)** in stacking, we're taking completely different models generally, and then we're combining those at the end. We use a final model, often called a meta learner, that can learn how to combine the outputs of the base models. The general process is we train several models each focusing on different aspects of the problem. We take their predictions and feed those into the meta model. And the meta model learns which base models to trust more in different situations and makes a final prediction. A stacking model might combine different models that have completely different performance characteristics, such as nearest neighbors or linear models or support vector machines. And in the end, it combines these models to return a better model. In summary, we have three different strategies. We have bagging, which reduces complicated models by training models on different random subsets. We have boosting, which makes simple models, and then each subsequent model fixes the error. And we have stacking, which combines different model types and optimizes their prediction with another model. These techniques are the foundation of this course. In the next section, we'll explore bagging and we'll see how random forests deliver accurate, reliable results. Let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Decision Trees]] (1)
> **CLI Commands:** make (2)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### 2. Bagging and Random Forests

[↑ Back to Table of Contents](#table-of-contents)

#### [Concept of bagging](https://www.linkedin.com/learning/applied-machine-learning-ensemble-learning-25317548/concept-of-bagging?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/applied-machine-learning-ensemble-learning-25317548/concept-of-bagging?u=76281980&t=0)** - [Narrator] We've seen how ensembles impact the real world. Let's talk about how they actually work. In this section, we're going to explore the bagging ensemble, and by the end of this, you'll understand how bagging works. Bagging is short for bootstrap aggregating, and it's a technique that we use to improve the accuracy of a model. Here's how it works. First, we create multiple subsets of our data, and when we use a Random Forest, the random in Random Forest is coming from the different random subsets of the data. Statisticians call this process bootstrapping, where you're sampling the data with replacement, and that's where the name for bootstrap aggregation comes from, because we're sampling different portions of the data. Once we have these different samples, we're going to train a model on each different sample of the data. And then finally, we're going to combine the models. So what does this achieve? By training multiple models on different portions of the data, this bagging reduces variance, or the overfitting tendency of the models. Essentially, it's smoothing out the models, making it match the trend of the data rather than fitting to the noise of the data. And so this brings us to Random Forest, which is probably the most popular
>
> **[1:33](https://www.linkedin.com/learning/applied-machine-learning-ensemble-learning-25317548/concept-of-bagging?u=76281980&t=93)** implementation of bagging. And what the Random Forest algorithm does, again, it splits the dataset into multiple subsets, and then we're going to train a decision tree on each subset. Now, these [[Decision Trees]] should be a little bit different. And then at the end we'll combine their predictions into a final prediction. The idea being that because each tree is looking at a different portion of the data, when we combine those, they can provide insight into different portions of the data, and the final prediction will be better. So let's jump to some code and explore this a little bit with some code. There's a library that you can use with Jupyter called drawdata, which comes in useful here. I've already used it here, but I'm just showing you this because I think it's very useful for trying things out. Like you can draw a little dataset here, and then you can save it as [[Pandas (Software)|pandas]]. So I've done that here, and I'm going to demonstrate this notion of bagging doing that. Let's walk through this code and see what it's doing. I'm importing the mapplotlib library to visualize this, we're going to use mumpy and pandas as well. And then we're importing the Random Forest regressor. I'm also importing the warnings module, and telling it to ignore some of the warnings that might pop up that I don't really care about for these purposes. I'm going to use mapplotlib subplot_mosaic to lay this out. I've got six different plots, and so if you're not familiar with that, basically what I do is I create a string
>
> **[3:07](https://www.linkedin.com/learning/applied-machine-learning-ensemble-learning-25317548/concept-of-bagging?u=76281980&t=187)** and I can put in where I want the individual axes on the figure. So in this case, I've got six axes, I've got three on the top row and 456 on the bottom row. I'm going to make a list. It's just got 1 in it six times, in the subsequent code, you'll see that that changes. I'm going to load up the data that I generated. Then I'm going to loop over each of the values and entries. So I'm going to do six loops here. I'm going to pull off each axis, and then I'm going to do a scatter plot to plot the data on there. And here's the key part. I'm going to use a RandomForestRegressor, and I'm going to say number of estimators in this case is n_tree, which is 1. Each of these RandomForestRegressors will only have a single tree. But the key point here is that I'm using max_samples to only look at 1% of the data. I could be using a decision tree here, but in scikit-learn, the decision tree doesn't allow me to sample different subsets for a decision tree, but Random Forest does. So this is basically a decision tree that's sampling a portion of the data. I'm going to fit a model on that portion of the data. I'm going to use numpy to create the values of x from the minimum values to the maximum values, and then I'm going to use y to make the prediction from that model. And I'll plot that as a red line. Let's run that and see what that looks like. See if we can get some insight from that. And here's the result. So again, each of these is an individual decision tree, but it's on different subsets of the data.
>
> **[4:42](https://www.linkedin.com/learning/applied-machine-learning-ensemble-learning-25317548/concept-of-bagging?u=76281980&t=282)** And that seed is the random seed that makes it so if we were to rerun this, it would resample with the same subsets here. But you can see that, for example, this tree, this first one for seed 1 looks like it's doing a pretty good job up here and down here, but maybe on this right-hand side, it didn't sample much data from that. Similarly, this second one here looks like it might have focused a little bit in here. So you can see that there's a little drop down there. And again, it's not focusing too much on this side. This third tree here looks like it is not paying much attention over here, but it is paying attention over here. So hopefully you're getting the idea here, that we're just looking at different subsets of the data, and these different trees are better at different subsets. So let's now combine this into a Random Forest. Instead of having a single tree, we're going to make a bunch of trees and combine the results. And so that's what this next code is doing, which the key takeaway here is that we're looping over different amounts of trees. One tree, two trees, five trees, 10, 20, and 50. Then we're going to make a Random Forest with that number of trees. The [[Representational State Transfer (REST)|rest]] of this code is very similar to what we just did. So let's look at what's going on here. So this first one is just a single decision tree, and that would be the prediction here. The second one is two trees. So I've plotted the individual trees in gray,
>
> **[6:16](https://www.linkedin.com/learning/applied-machine-learning-ensemble-learning-25317548/concept-of-bagging?u=76281980&t=376)** and then I plot the combination in red. So you can see that, for example, over here, one tree predicts high over here because it's maybe sampling this data. This second tree is not sampling that section, but maybe it's sampling over here. So the tree predicts lower, but the combination of that smooths that out. And you can see as we keep adding more trees, this line seems to follow the trend a little bit better. I've also inserted in here a piece of code using ipywidgets, which is basically the same as what we have up there, but it's got some sliders in here that allow you to play around with this code a little bit. So, you can change what max sampling is. And you can also change the depth of the tree. So, you can make a very shallow tree that only has two levels deep, and you can see that that tree probably can't get complicated enough to capture all of the signal in this data. You can bump that up a little bit higher, and you can see that as you bump it up a little bit higher with only one tree, you have a lot of overfitting going on, but when you smooth those out with a bunch of trees, it tends to perform better. You can also play with the sampling here. You can see that as we sample more data, predictions become smoother. So, we can bump that up a little bit. And you can see that these predictions become smoother as we sample more data.
>
> **[7:51](https://www.linkedin.com/learning/applied-machine-learning-ensemble-learning-25317548/concept-of-bagging?u=76281980&t=471)** So in this video, hopefully you have some intuition into how bagging works. And by making smaller models that look at different portions of the data and then combining those, we can get a better overall model.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (2), [[Decision Trees]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** make (5)
> **Code Identifiers:** subplot_mosaic (1), n_tree (1), max_samples (1)
> **Analogies:** for example (2), similar to (1)
> **Tools:** jupyter (1), notion (1)
> **Definitions:** short for (1), is an  (1)
> **Speakers:** - [narrator] (1)

#### [Random forest example](https://www.linkedin.com/learning/applied-machine-learning-ensemble-learning-25317548/random-forest-example?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/applied-machine-learning-ensemble-learning-25317548/random-forest-example?u=76281980&t=0)** - [Instructor] In the previous video, we looked at an example of random forest with a silly data set, which is just one that I drew up. Now I want to look at a more real world data set. And the key thing here is that we're going to have different trees that are looking at different portions of that data, gaining insight from different portions of the data, and then we'll combine those to make a better overall tree. So I've got some imports here. So train test split allows us to split our data into a training and testing set. This is super important because if you evaluate your model on the data that you trained it with, your model could overfit or basically memorize the data and give you back a perfect prediction, but you won't know how it performs on data that's unseen that it hasn't seen before. So holding out some of the data for it to evaluate on is always a good idea. I'm going to import the random forest classifier and then I'm going to evaluate this with accuracy. Finally, down here I'm going to use set config from sklearn. And by default, scikit-learn will output numpy arrays, and I prefer to work in [[Pandas (Software)|pandas]], so this is just going to let us work in pandas. It's going to give us pandas output. Let's run that and make sure that that works. This next cell here is going to load the data using the openml library. I actually have already loaded the data into a Parquet file, so I am going to just load it from this Parquet file.
>
> **[1:39](https://www.linkedin.com/learning/applied-machine-learning-ensemble-learning-25317548/random-forest-example?u=76281980&t=99)** And let's look at x. So this data set is a data set to predict whether someone makes more than $50,000, and so we've got a bunch of features, and then we have a label of whether the income is greater than or less than $50,000. So our goal here is to see if we can make a model that will predict that. One of the things you'll need to do for a lot of models is make sure that there aren't missing values here, and it looks like there are missing values. For example, this work class has some missing values and occupation has missing values, as does native country. I'll show how to deal with those in a moment here. Another thing you might want to do is just look at the summary [[Statistics]] here. So I'm going to use describe from pandas to do that. I'm transposing that just to flip it. But you can see here's the mean of each of those columns. The median, which is the 50th percentile. We've got the standard deviation as well. We do have count here. If you're not familiar with pandas, one thing to realize when you're looking at describe from pandas is that the count result is probably not what you think it is. Count is not the number of rows. For example, this 48,842 is not the number of rows, but rather it is the number of rows that are not missing data. So just be aware of that because I find that a lot of my students get that confused. Okay, at this point we've kind of checked out the data.
>
> **[3:16](https://www.linkedin.com/learning/applied-machine-learning-ensemble-learning-25317548/random-forest-example?u=76281980&t=196)** We've seen that it does have some missing values. We've looked at summary statistics of it. I'm going to make a pipeline to process some of that. If you're not familiar with pipelines, I would encourage you to check out my [[Applied Machine Learning]] [[Feature Engineering]] course. It goes through all the details of making these pipelines. So in short, I'm going to import the pipeline class and the simple imputer. Simple imputer will fill in missing data. I'm also going to import the one hot encoder. One hot encoder is a mechanism for converting categorical values into numeric values. Just be aware that many machine learning [[Algorithms]] cannot deal with categorical values directly so we need some mechanism to convert those into numbers and one hot encoding is a common way of doing that. One hot encoding will take each of the unique values from a category and make a new column for each of the unique values, inserting a one or zero for whether that category exists for a row. To use these in scikit-learn, I'm going to make this pipeline. So a pipeline is a way to combine processing to your data before it gets to a model. Let's look at what the pipeline is doing here. It is saying we've got two steps in here. We've got one that's called imputer and it's going to do simple imputation. It's just going to predict missing for any missing values. And then we've got one hot,
>
> **[4:51](https://www.linkedin.com/learning/applied-machine-learning-ensemble-learning-25317548/random-forest-example?u=76281980&t=291)** and one hot is going to fill in missing values with unknown and it's not going to give us sparse output. The reason it's not giving us sparse output is because we're using pandas as output and pandas doesn't like sparse output. Now, I also need to be careful. I need to feed the correct columns into this. I don't, for example, want to one hot encode numeric values because what that would do is it would take each of the numeric values and create a new column for those, giving me a lot more columns than I need. So I'm going to pull off the categorical features just by asking pandas what are the categorical columns and pulling off those and storing those in the categorical features. Let's run that. And at this point I'm going to show how to use this. For me, one of the coolest things about scikit-learn is that it has a consistent interface, which makes it really easy to use. So anything that it is a transformer in scikit-learn has a transform method, and a transform method takes input and changes it and gives you new output. Many of the scikit-learn algorithms also have a fit method. A fit method is just a method where the model learns from the data that's passed into it. So what we're doing here is we've made this categorical transformer pipeline. We're going to call fit transform. What that's going to do, the fitting would go through
>
> **[6:23](https://www.linkedin.com/learning/applied-machine-learning-ensemble-learning-25317548/random-forest-example?u=76281980&t=383)** and find where things are missing, and then the transform, for example, would fill in the missing values with the string missing, and the transform for one hot encoder would take the result of the simple imputer and do the one hot encoding. Let's do that with all of x. Remember, x has both numeric and categorical values here. I'm just going to use the first two columns. Iloc is pulling off the first two columns there. And you see when I do that, it is doing one hot encoding on the age, which I don't want to do. I'm going to feed in specifically the categorical columns. But this looks like it is working. Okay, so to feed in the categorical columns, we just pull off the categorical columns and pass those in. And let's just check that that looks like it's working. And it looks like that is working. Okay, at this point, let's make a model here. I'm going to train my data into a training set and a testing set using train test split. And I'm going to use a column transformer. Again, check out my course on feature engineering if you want to learn about these pipelines. But in short, a column transformer allows us to say we just want to use the categorical transformer with these columns. I'm going to name that column transformer for my categoricals the pre-processor, and then I'm going to stick that in another pipeline that tacks on a decision tree classifier after that. At this point, to fit our decision tree, we just call fit with the training data
>
> **[7:57](https://www.linkedin.com/learning/applied-machine-learning-ensemble-learning-25317548/random-forest-example?u=76281980&t=477)** and then to make predictions we can call predict. In this case, I could pass in the testing data. To measure the accuracy, we could look at our true values and our predictions and calculate the accuracy from those. So let's look at what a decision tree does with this data, and our score comes out as .81 or 81% accurate. Okay, so the cool thing with scikit-learn is that it's really easy to swap out these different models. This code is basically the same. The only thing that's different is I'm sticking in this random forest classifier here saying, let's make 100 different trees and let's run this model here. And we get 82.6% accuracy on this. Our decision tree got 81%, and we got a small boost by using this random forest to bring up our accuracy to 82%. Random forests are a powerful tool for improving accuracy of a model. I'll often suggest to my clients that if they want to improve the accuracy of a decision tree to try a random forest, and again, using scikit-learn, it makes it really easy to do this.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (9), [[Statistics]] (2), [[Feature Engineering]] (2), [[Algorithms]] (2), [[Applied Machine Learning]] (1)
> **CLI Commands:** make (10), find (2)
> **Definitions:** is a  (5)
> **Analogies:** for example (4)
> **Warnings:** be aware (2), be careful (1)
> **Versions:** 82.6 (1)
> **Cross-References:** previous video (1)
> **Prerequisites:** you'll need (1)

#### [Parameter tuning for Random Forest](https://www.linkedin.com/learning/applied-machine-learning-ensemble-learning-25317548/parameter-tuning-for-random-forest?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/applied-machine-learning-ensemble-learning-25317548/parameter-tuning-for-random-forest?u=76281980&t=0)** - [Instructor] So we've talked about the intuition behind a random forest. We've shown how easy it is to use a random forest. One of the challenges of using some of these more complicated models is this notion of hyper parameters. Hyper parameters are basically buttons that you can press to change the behavior of a model. So if you think about programming and programming, you have functions. Functions have parameters, parameters parameterize a function and change what goes into a function and what comes out of it. Hyper parameters are parameters that change how an algorithm makes its calculations. So a random forest has a bunch of different hyper parameters. I'm not going to go over all of them here, but some of the ones that you might want to be familiar with, for example, are an estimators. That's the number of trees to add. Generally, as you add more trees, you're going to get more of a smoothing effect. Another hyper parameter is the max depth. Max depth is kind of a big lever for trees. You can make a very simple tree by saying max depth is 1. There's actually a term for that. We call that a decision stump. It just says we're going to predict one value or another. You can basically get two values out of that, or you can get a very complicated model by setting max depth to a larger number.
>
> **[1:32](https://www.linkedin.com/learning/applied-machine-learning-ensemble-learning-25317548/parameter-tuning-for-random-forest?u=76281980&t=92)** And the decision tree can basically memorize all of the data that's coming into it. So that's a parameter I like to play with because it lets us look at something that's too simple, a decision stump and go all the way to too complicated, an overfit decision tree. Generally we want something that's in the middle there that's going to perform a little bit better. Now note that maximum depth is going to be calculated for each of those random trees in that forest. And because these different trees have different subsets, max depth might be a little too harsh of a lever. And so you can also use other hyper parameters such as max features, which says when a node in decision tree has more than this number of features, consider it for splitting, but don't split after that fact. So these are a few of the hyper parameters. There are more. I encourage you to check out the documentation for scikit-learn and discover some more of them. I'm just going to demonstrate as I sweep through some values of number of estimators or number of trees we create, what happens to the model here. You can see I've got a loop here. I'm looping through these different values here. I'm making my pipeline, I'm calculating my accuracy, and then I'm also calculating my training accuracy. Let's run this and see what happens. I talked about how we want to split our data
>
> **[3:06](https://www.linkedin.com/learning/applied-machine-learning-ensemble-learning-25317548/parameter-tuning-for-random-forest?u=76281980&t=186)** so we can evaluate our model on data that it hasn't seen. But why would we want to capture the training accuracy? That's data that it has seen. And basically the reason for that is because you can use what's happening with the training accuracy to understand if the model is overfitting or not. So let's look at an example here. Here's our plot. We're plotting in orange is the training accuracy. And you can see as we add more trees, the training accuracy tends to go up and then it sort of plateaus off. And for the blue, the blue is our testing accuracy. You can see that the testing accuracy, there is a gap somewhere around 82 for our training accuracy at the start here, and it goes up a little bit still below 83 at the end. Now, if you see a large gap between these values, that could indicate that you do have some overfitting going on. Also note that the scale of this, this is going from 83 to 86, so there is a gap between those. It looks kind of large, but I would say that's due to the scale of the Y axis here. One would generally expect the training accuracy to be slightly better than the testing accuracy. Another thing you can do with this plot is you can see as I add more trees, what is happening to my accuracy and it looks like it tends to sort of plateau, at the end here, it looks like it might be going up a little bit.
>
> **[4:39](https://www.linkedin.com/learning/applied-machine-learning-ensemble-learning-25317548/parameter-tuning-for-random-forest?u=76281980&t=279)** I'm kind of doubtful that it is. We could try another number and see if it is. But generally what I'll do with information like this is if I've got two models that are performing similarly and you can see that this is sort of plateaued, what I will do is I will take the simplest model, I will favor the simplest model, given two models that have similar performance, and it looks like the accuracy sort of plateaus, at least for what I've tried here around a hundred. I might even go in here and look between 50 and 100 and see if there's a better value in there to make an even simpler model. In this video we introduced the notion of hyper parameters. These are things you need to be aware of to change the behavior, and I showed a simple way of changing one hyper parameter and evaluating the performance of the model.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2), node (1)
> **Warnings:** note that (2), be aware (1)
> **Tools:** notion (2)
> **Definitions:** is a  (2)
> **Documentation:** the documentation (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Tune Random Forest parameters](https://www.linkedin.com/learning/applied-machine-learning-ensemble-learning-25317548/challenge-tune-random-forest-parameters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/applied-machine-learning-ensemble-learning-25317548/challenge-tune-random-forest-parameters?u=76281980&t=0)** (upbeat electronic music)
>
> **[0:05](https://www.linkedin.com/learning/applied-machine-learning-ensemble-learning-25317548/challenge-tune-random-forest-parameters?u=76281980&t=5)** - [Instructor] Okay, it's challenge time. What I'd like you to do is tweak the max depth parameter and see what value of max depth gives us the most accuracy for this model.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat electronic music) (1)

#### [Solution: Tune Random Forest parameters](https://www.linkedin.com/learning/applied-machine-learning-ensemble-learning-25317548/solution-tune-random-forest-parameters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/applied-machine-learning-ensemble-learning-25317548/solution-tune-random-forest-parameters?u=76281980&t=0)** - [Instructor] Okay, let's look at a solution for the random forest tuning challenge. And before I move on, I just want to say, if you didn't do this, I would strongly suggest that you give it a try. One of the things that I've noticed with my students is the more they try things out, the more they learn. And also, I've done some studying and it appears that if you use different portions of your body, for example, physically doing something, you'll learn something better. So if you really want to get better at this, instead of just watching me do this, actually do it. And you will find that you learn it better. Okay, so let's try this out here. I want to try different values of depth. So what I'm going to do is I'm going to take my code up here, which is doing something similar, but this is doing an estimators. I'm going to copy this. So I'll just hit C here to copy that, and I'll hit V to paste that down here. And we're going to say, this is tuning the depth of the tree. And we don't have n_estimators here. We have depths. I'll change that to depths. And this is max depth here. That's the hyper parameter name. And then down here we have max depth. We have depths down here,
>
> **[1:36](https://www.linkedin.com/learning/applied-machine-learning-ensemble-learning-25317548/solution-tune-random-forest-parameters?u=76281980&t=96)** and we're going to set the index to the max depth column. And this is the random forest classifier accuracy versus the depth of the trees. Okay, I could run this, but I don't want to run this because the depths need to be adjusted. One of the things you need to be aware of when you're looking at a hyper parameter is what the range of valid parameters are. And again, what you can do is you can come in here, you can pull up the documentation for a random forest classifier, and the second learned documentation is pretty good. I'm going to say open this up in a scrollable element. So let's see if we can find the depth here. Here it is. It says this is the max depth of the tree. If none, then the nodes will be expanded until all leaves are pure, basically over fitting or until all leaves contain less than min samples split. Okay, so I am not going to do none here, but rather I'm going to say let's start off with a stump, and maybe I'll do level 2 and maybe I'll go up to 4 and 6 and maybe we'll go 10 and we'll go maybe 20. Let's try that and see what happens. Okay, so let's just look at the results of this chart and see if we can understand what's going on here.
>
> **[3:09](https://www.linkedin.com/learning/applied-machine-learning-ensemble-learning-25317548/solution-tune-random-forest-parameters?u=76281980&t=189)** So here's a decision stump down here, and you can see that the training score and the evaluation score are actually similar. This is somewhat to be expected with a very simple model. Remember, a decision stump is basically making one decision. And in contrast to an overfit model, this would be an underfit model. It's probably too simple and an underfit model, it's pretty common to see that the training and testing score are the same. As we add more depth to the tree, you can see that the training accuracy, this orange line is going up, leading me to believe that there's probably some overfitting going on, and you can see that the accuracy of the testing is not improving very much. Now this does look like it's still going up. So maybe what I might do is I might come in here and say, maybe let's put in like a 15 and a 25 just to see what's going on in between there. Know that every time I add different depths here, it's going to take longer to run this. So that's something to be aware of. Also, note that we are only looking at tuning a single hyper parameter here, but there are about a dozen different hyper parameters on a random forest. So tuning all of those different dozen hyper parameters can be a complicated proposition. Okay, so let's look at the result, now you can see that it looks like our accuracy sort of plateaus and then it starts to go down. This might seem weird that it's starting
>
> **[4:42](https://www.linkedin.com/learning/applied-machine-learning-ensemble-learning-25317548/solution-tune-random-forest-parameters?u=76281980&t=282)** to go down here when this is still going up, but the intuition is that at this point, when this is going down, our model is now overfitting. It's memorizing the noise in the data or fitting to the noise in the data rather than fitting to the trend in the data. So when it comes across data that it hasn't seen, which is this blue line here, it can't make good predictions on that because it's looking for noise, it's not looking for the trend. Hopefully you found this exercise useful in getting an intuition about how to tune a random forest and how the depths of trees and forest impact the model.

> [!info]- Semantic Content
>
> **CLI Commands:** find (2), make (1)
> **Warnings:** be aware (2), note that (1)
> **Code Identifiers:** n_estimators (1)
> **Documentation:** the documentation (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 3. Boosting and Gradient Boosting

[↑ Back to Table of Contents](#table-of-contents)

#### [Concept of boosting](https://www.linkedin.com/learning/applied-machine-learning-ensemble-learning-25317548/concept-of-boosting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/applied-machine-learning-ensemble-learning-25317548/concept-of-boosting?u=76281980&t=0)** - [Instructor] In this section, we're going to explore another kind of ensemble called boosting. And these are super powerful [[Algorithms]]. In fact, I wrote a book about boosting because I find that I'm using this so often with some of my clients. We're going to be looking at AdaBoost, and Gradient Boosting. Understanding how these models work will enable you to use some of the most powerful models available right now for machine learning. The key idea behind boosting is learning from our mistakes. Unlike bagging, we're bagging split the data into different subsets, and trained individual models on different subsets. With boosting, what we're going to do is, we are going to start with what's called a weak learner. Generally, we're going to make a very simple model, maybe a decision stump or maybe a few levels deep, and we're going to make predictions from that. After we have a simple model, we're going to ask this model where it is having problems, where it makes errors, and we're going to build a subsequent model that focuses on fixing those errors. And then we just repeat that process. So one of the things these models might do is they might build an initial tree to make predictions, and then subsequent trees, and each of those subsequent trees will fix or enhance the predictions of the previous trees. And this is one of the beautiful things
>
> **[1:35](https://www.linkedin.com/learning/applied-machine-learning-ensemble-learning-25317548/concept-of-boosting?u=76281980&t=95)** about bagging, is that it tends to correct errors, and in the end gives you a very powerful model. Let's look at some specific algorithms. We'll start with AdaBoost. AdaBoost is short for Adaptive Boosting, and it was one of the first boosting algorithms. AdaBoost works like this. Each training sample is assigned a weight, and initially all weights are equal. So a training sample is a row, and we're going to say each of these rows are equally important initially. Then we're going to train a weak learner on the data, and the algorithm is going to look at the predictions from that weak learner. And rows that were misclassified will have an increased weight, making them more influential in the next iteration. It's going to pay more attention to making predictions that address those errors and this process repeats. And the final prediction is the weighted vote of all of the models. Another algorithm that's super powerful is Gradient Boosting, and this builds on the idea of looking at errors, and fixing them, but it also takes it a step further by using what's called gradient descent to optimize the model. How this algorithm works is, we start off with a weak model, and then we are going to calculate the residuals. The residuals are the difference
>
> **[3:07](https://www.linkedin.com/learning/applied-machine-learning-ensemble-learning-25317548/concept-of-boosting?u=76281980&t=187)** between the predicted and the actual values. Often statisticians will use the term residual to represent the error of a prediction. Then we're going to make a new model, and the new model's job is to essentially correct the residuals. So it's going to fix the previous model's error. And we're just going to repeat this process, each new model that we add to this ensemble is fixing the error. This is super powerful because in practice it tends to give us a very good model. Let's look at some examples of this using Psychic Learn.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (3)
> **CLI Commands:** make (4), find (1)
> **Definitions:** short for (1), is a  (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [AdaBoost and gradient boosting](https://www.linkedin.com/learning/applied-machine-learning-ensemble-learning-25317548/adaboost-and-gradient-boosting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/applied-machine-learning-ensemble-learning-25317548/adaboost-and-gradient-boosting?u=76281980&t=0)** - [Instructor] Like our previous section on bagging, I've got a simple intuitive model to help us understand what's going on with AdaBoost. So let's just look at the code. The code is very similar to what we had before. The key theme to note here is that we have this in trees, so we're going to make different amounts of trees. We're going to make an AdaBoost Regressor here to make predictions. And then I'm just going to plot the last tree in AdaBoost predictions. And then I'm going to plot the combined final prediction in red. Let's run this. We get something that looks like this. So in this first example here, we only have one tree, so there isn't an additional tree. And this is a decision tree fit on the data. I'm going to scroll up and just look at this AdaBoost line a little bit closer here. You can see that we are specifying the number of trees that we're passing in, but we're also specifying an estimator. So AdaBoost allows us to provide the backing model. And in this case I'm saying we're using a decision tree with a max depth of 3. So this is just using a decision tree with a max depth of 3. Here in this number of trees is equal to 2. You can see that we have the red being the final prediction and then I have this gray line. You might be able to see behind it. That last model is attempting to fix the results of the previous model.
>
> **[1:32](https://www.linkedin.com/learning/applied-machine-learning-ensemble-learning-25317548/adaboost-and-gradient-boosting?u=76281980&t=92)** You can see on our previous model we're predicting high over here. This model looks like it's trying to adjust that for the second model here. So again, how the algorithm works is it's seeing where we have different errors and it's giving more weight to those different errors. And essentially as we add more trees, we're fixing those different errors. You can see that the model is smoothing that out and giving us better predictions. It looks like if we look at the number of trees as 20 and 50, I'm not seeing much of a difference there. So for this given data set and this current combination of hyper parameters that I've specified for the decision tree, it looks like after 20 trees we're not getting much more of a boost by adding more trees to it. Now with that intuitive understanding of how AdaBoost works, let's try and run this with our real world housing data. We've got our pipeline here and again, the nice thing about scikit-learn is I just swap out this classifier in our pipeline. The [[Representational State Transfer (REST)|rest]] of this code looks exactly the same as the other code here and our model accuracy is 82%, similar to what we got with the random forest. I'm going to look at gradient boosting as well, and I'm going to plot gradient boosting with our sample here. Here's the results of our plot. Now this plot looks a little bit different. What's going on here is that the scikit-learnimplementation of gradient boosting uses a dummy regressor
>
> **[3:07](https://www.linkedin.com/learning/applied-machine-learning-ensemble-learning-25317548/adaboost-and-gradient-boosting?u=76281980&t=187)** to make the predictions. So it's basically predicting the mean value for the initial prediction and then each of the subsequent trees that it predicts fixes that prediction here. So you can see here is the first tree down here. It's this gray line and it's not up here because we're predicting the mean, which is probably somewhere around 300. And then we're adding this gray line to that. Now another thing to note is that the scale of this line seems to be damped or muted quite a bit, and that's due to another hyper parameter here. Let's look at the hyper parameters that we set here. We've set number of estimators, the random state in the max depth, but if we look at the hyper parameters for gradient boosting, and again, I'll just put a question mark there, you can see that there's this learning rate hyper parameter, which is basically damping the effect of this. So we're taking the mean, here's the fix for that. We multiply the fix by this 0.1 and you can see that we're only getting like 10% of that. The intuition there is similar to golf. If you were golfing, you try to hit as hard as you can every time. You might overhit the hole. And so this is just saying, okay, we can hit as many times as we want with gradient boosting. Why don't we just hit it a little bit every time to not overhit the hole? And so that's the intuition with this learning rate. Another thing to note is as we are adding more trees,
>
> **[4:43](https://www.linkedin.com/learning/applied-machine-learning-ensemble-learning-25317548/adaboost-and-gradient-boosting?u=76281980&t=283)** you can see what's happening. We're pushing these values up to fix the error. It looks like after 20, it's basically fit pretty well, but if we keep going after 20, you can see that down here it's fixing this error. Then over on the left hand side, it's not looking smooth here. That's probably because there's a cluster of values down here lower than for a given X value, there might be more values up here. So it's kind of doing a zigzag in there and not giving us a smooth line in there due to how our data's distributed. So let's try gradient boosting with our dataset as well and see how that performs. And we get a accuracy of 82% for gradient boosting. Looks like for this dataset, we appear to be maxing out around 82%. These different models, random forest, AdaBoost and gradient boosting have all maxed out around 82%. We'll see if some other models will give us better performance in a future video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** make (4)
> **Analogies:** similar to (3)
> **Versions:** 0.1 (1)
> **UI Navigation:** scroll up (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Hyperparameter tuning for boosting](https://www.linkedin.com/learning/applied-machine-learning-ensemble-learning-25317548/hyperparameter-tuning-for-boosting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/applied-machine-learning-ensemble-learning-25317548/hyperparameter-tuning-for-boosting?u=76281980&t=0)** - [Instructor] Okay, let's discuss some of the hyperparameters that are found in boosted models. Again, these are not all the hyperparameters, but I want you to be aware of some of the main ones that are big levers that can control the behavior. Let's start off with AdaBoost. We've got n_estimators, that is the number of boosting stages to be run, so you can set that to 1. If you set it to 1, you're basically just getting that base model, that base estimator that it's building on top of. But again, each additional model in there is going to use the weighted errors to progressively try and improve the result of the final prediction. We have the learning_rate, and we saw an example of the learning_rate with gradient boosting. However, this is also an AdaBoost, but the default value in a boost is 1, meaning that whatever the prediction is of each model, we just use that to do the final prediction. If we lower that, it's like using a percentage of that to boost towards the final amount. And again, the idea behind learning_rate is like that golf idea. If we hit it as hard as we can, we might hit it over the hole, and if we hit it back to fix that, we might hit it over the hole again. Rather, if we have basically an unlimited amount of estimators that we can use,
>
> **[1:33](https://www.linkedin.com/learning/applied-machine-learning-ensemble-learning-25317548/hyperparameter-tuning-for-boosting?u=76281980&t=93)** we just inch towards the result, we might get a better result in the end. And then we have estimator for AdaBoost. Again, we showed an example of using a decision tree as an estimator, but you can take other models and stick them in there as well. Note that there aren't a lot of other parameters for AdaBoost because the parameters are found in the estimator itself. Let's talk about some of the hyperparameters for gradient boosting, and they're similar. We have n_estimators, and again, in this case, rather than weighting the samples, what we are doing is we are just looking at the residual or the error and we're trying to fix that with each successive tree. We have the learning_rate, and again, same thing that we just talked about, value between 0 and 1, and that is the contribution of each tree to the final prediction. We have the maximum depth, because this is built on top of trees. This is going to be a value 1 or above. And then we have subsample, so this is, again, that ability to look at a fraction of the samples to use for the individual learners. The idea being there that we don't focus on pulling out all of the information from all of the samples, but we have a different tree that looks at some percent of them, pulls out the signal from that, another tree looks at a different subset, and the combination of that hopefully does a better job of not overfitting to the noise in the data. Let's look at an example with gradient boosting
>
> **[3:10](https://www.linkedin.com/learning/applied-machine-learning-ensemble-learning-25317548/hyperparameter-tuning-for-boosting?u=76281980&t=190)** and we'll just change the number of estimators there and watch what happens as we do that. Okay, and here's our result. Let's try and tease apart what's going on here. First, I'll go back up and just look at what the values were. So we went 1, 5, 10, 20, 50, 70, 100, 150, and 200. So a value of 1 there basically being, we have a decision tree, 5 meaning we have five trees, each subsequent tree trying to fix the error of the previous output. Here's how I interpret this graph. We've got the blue line, which is the accuracy of the test score. You can see that with one tree, we are basically getting the performance of a decision tree down here around 76. As we add additional trees to correct that error, it starts to come up very quickly and eventually starts to plateau. It looks like it's plateaued some here around 150. I might go back in and [[Zoom]] in around this area to see if perhaps we get a better score earlier, but it looks like it's plateaued there. Now, we also have the orange line as well, right? And that's the training data, and we can use that to start to tell when we are capturing more of the noise instead of the signal. You can see that these start diverging here, and you can see the separation here between the training and the testing data,
>
> **[4:43](https://www.linkedin.com/learning/applied-machine-learning-ensemble-learning-25317548/hyperparameter-tuning-for-boosting?u=76281980&t=283)** where our testing score is basically staying the same, but our accuracy score is getting better. Indicates that our model perhaps has started to memorize or overfit to the data, and so we would want to cut it off before it can do that or limit the number of trees to prevent that from happening. Again, this just shows one hyperparameter. Want to make a couple points here. First, tuning your hyperparameters will generally lead to a better model. Second, just because a given combination of hyperparameters work for a model and a dataset does not mean that those hyperparameters are appropriate for a different dataset. So hyperparameters might be specific to the dataset. I like to think of it as I have a model, the model is an algorithm for fitting the data, and the hyperparameters are levers or tools that allow me to prevent the model from overfitting to that specific data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Zoom]] (1)
> **Code Identifiers:** learning_rate (4), n_estimators (2)
> **Analogies:** it's like (1), think of it as (1)
> **Warnings:** be aware (1), note that (1)
> **CLI Commands:** make (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: tune AdaBoost model](https://www.linkedin.com/learning/applied-machine-learning-ensemble-learning-25317548/challenge-tune-adaboost-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/applied-machine-learning-ensemble-learning-25317548/challenge-tune-adaboost-model?u=76281980&t=0)** - [Instructor] Okay, it's challenge time again. Our challenge this time is to optimize the max_depth parameter of the AdaBoost model with our dataset. See what value of depth gives you the best performance with this model.

> [!info]- Semantic Content
>
> **Code Identifiers:** max_depth (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: tune AdaBoost model](https://www.linkedin.com/learning/applied-machine-learning-ensemble-learning-25317548/solution-tune-adaboost-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/applied-machine-learning-ensemble-learning-25317548/solution-tune-adaboost-model?u=76281980&t=0)** - Okay, I am going to look at the solution to the AdaBoost tuning. Again, one of the nice things about scikit-learn is that it follows a consistent pattern. So I'm going to, rather than write this up from scratch, I'm going to come up here and just grab one of these other ones and change it. Okay, so I'll take this and copy this, and we'll paste it down here. Okay, so we're going to have to change this. First of all, this is not a GradientBoosterClassifier. This, there's going to be AdaBoost, and second of all, we are not changing n_estimators here. We are changing max_depth. So let me change that to max_depths, plural. Generally, when I have a list, I like to make it plural. I'm going to say this is max_depths, run a loop over max_depths, and down here, we have an estimator, so this is going to be the max_depths, plural. This is going to be max_depth, singular, and this is max_depth down here, and this is not Gradient Boosting, this is Adaboost. Okay, so I think we're pretty good now. With that, we need to change the max_depth values. max_depth values rarely go above 20. In fact, for these boosted [[Algorithms]], they rarely go above 10. So I'm going to come in here and maybe I'll do this.
>
> **[1:33](https://www.linkedin.com/learning/applied-machine-learning-ensemble-learning-25317548/solution-tune-adaboost-model?u=76281980&t=93)** 1, 2, 3, 4, 5, 7, and 10, and then one more thing to note is that AdaBoost doesn't have max_depth directly on that. So we have to set this on the estimator, and I'm going to do that on a DecisionTreeClassifier. So we'll say estimator is DecisionTreeClassifier, which does have a max_depth, and set that equal to n. Okay, let's try this and see if it works. One of the nice things about Jupyter is that we can quickly iterate and fix things if there are errors. Looks like that ran. Let's talk about my interpretation of this. So we've got two lines here. The blue line is the testing score, and the orange line is the training score. We're most concerned with the blue line, because that tells us how it's performing on data that hasn't seen, but the orange line, the training score can help us understand if our model is starting to overfit. So as we have these stumps, max_depth of one, our score is pretty low, meaning that our model's probably too simple. It is under fit. As we add more depth, our model gets more complex, and each subsequent tree is able to fix those samples. As we get up to four, it looks like we're maxing out.
>
> **[3:07](https://www.linkedin.com/learning/applied-machine-learning-ensemble-learning-25317548/solution-tune-adaboost-model?u=76281980&t=187)** So again, in general with these boosting models, the literature claims that you want a quote weak learner, a weak learner meaning a simple learner or a learner that tends to be on the more simple side rather than the complex side. The insight there is that each subsequent round of boosting can fix the previous one, but if you're using a complex model or learner, such as a deep decision tree, then you're starting to capture the noise and you're having the noise fix the noise, which is problematic. So generally we want simpler models, and we're seeing that here that the depth of four is where the model performance peaks out. Okay, after four comes down, the blue line comes down, and the orange line, it looks like the score goes maybe back up a little bit here, and then it goes down some more. I could play around a little bit with this. We could look at the six, but here's my intuition here. It looks like it's peaking out here. I do like that the training and the testing scores are tracking each other there. After four, it looks like they start separating. This is an indication that we're starting to overfit at this point. So for this dataset and for this model, I would choose four as a depth to maximize the accuracy here. Okay, one final note before we close this video. Note that this is the hyperparameter, max_depth,
>
> **[4:43](https://www.linkedin.com/learning/applied-machine-learning-ensemble-learning-25317548/solution-tune-adaboost-model?u=76281980&t=283)** that maximizes accuracy for this model and dataset. However, there are other hyperparameters and you could tune those as well, and note that there might be interactions between different hyperparameters. As you raise one, it impacts another one. We're not going to go into that in this course. That's a little bit out of scope for this, but you might want to check out scikit-learn, which has the ability to do grid search and random search, or you might want to check out other tools. One of the ones that I like is hyperop, which does Bayesian tuning and can optimize multiple hyperparameters for you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (1)
> **Code Identifiers:** max_depth (9), max_depths (4), n_estimators (1)
> **Warnings:** note that (2)
> **CLI Commands:** make (1)
> **Tools:** jupyter (1)
> **Definitions:** is an  (1)
> **Analogies:** such as (1)
> **Speakers:** - okay (1)


### 4. XGBoost

[↑ Back to Table of Contents](#table-of-contents)

#### [Why XGBoost?](https://www.linkedin.com/learning/applied-machine-learning-ensemble-learning-25317548/why-xgboost?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/applied-machine-learning-ensemble-learning-25317548/why-xgboost?u=76281980&t=0)** - [Instructor] If you've been in the world of [[Data Science]] for a while, you've probably heard of or even used XGBoost, but what makes XGBoost so special? Why is it considered the go-to tool for a lot of data scientists? Let's go over some of the details and figure out why it is so popular. The XG in XGBoost is short for extreme gradient or extreme gradient boosting. What makes XGBoost one of the most popular tools for tabular machine learning? The first reason is speed. XGBoost is specifically designed to optimize performance, and it uses tools like parallel processing and histogram-based learning to process data faster than other libraries, including scikit-learn's libraries. Another feature of XGBoost is that it can prevent overfit. We saw how gradient boosted trees can do that, but XGBoost takes it a step farther. It has hyper parameters that control regularization techniques like L1 and L2 and these are levers that you can pull to prevent overfitting, scikit-learn doesn't provide this. Also, it's scalable. XGBoost can handle very large data sets because it has support for parallel and distributed computing. So if you're working on a single laptop, it tends to run fast, but you can also scale out if you need to. Some of the other reasons that I like XGBoost
>
> **[1:35](https://www.linkedin.com/learning/applied-machine-learning-ensemble-learning-25317548/why-xgboost?u=76281980&t=95)** is you can provide a specific objective function, so it can work for regression classification, ranking problems, or you can have a custom objective function if you want to. It also handles missing data natively. We saw that we had to create a pipeline for our dataset when we wanted to fill in the missing values. With XGBoost, you don't have to do that. It automatically can handle missing values for you. Also, XGBoost also handles categorical features. Often when I'm making a model, I use scikit-learn. I have a relatively complicated pipeline. When I'm using XGBoost, it is very simple because XGBoost handles a lot of those complications for me. So when you put all this together, the speed, the regularization, the flexibility, and the performance, you can see why XGBoost is so popular. In the next video, I'll show you how easy it is to use XGBoost.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Science]] (1)
> **Cross-References:** in the next (1)
> **Definitions:** short for (1)
> **Speakers:** - [instructor] (1)

#### [Hands-on coding with XGBoost](https://www.linkedin.com/learning/applied-machine-learning-ensemble-learning-25317548/hands-on-coding-with-xgboost?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/applied-machine-learning-ensemble-learning-25317548/hands-on-coding-with-xgboost?u=76281980&t=0)** - [Narrator] I'm going to show a demo for XGBoost similar to what we've done with our other models. We're going to loop over a different number of trees and we're going to plot that. Let's run this and see what happens. What I've done here is I have one tree here, two trees here, 5, 10, 20, and 50. Now remember, XGBoost is like golfing. Each subsequent tree is fixing the error or starting off from where you were trying to get the ball closer to the hole, so to speak. This is just one tree and it's a weak learner, so the depth is not very deep. Also note that there's a learning rate as well, so these red bars aren't going up to the top, but we're slowly inching that ball towards the hole, so to speak. So that's one tree. You can see that with one tree, the performance isn't going to be very good because it has pretty big errors still. So here's two trees and in gray, I've plotted the different trees. I've actually changed the transparency of them. So the more recent the tree, the darker it is, and you can see that the second tree, by adding the second tree, it's fixing this right-hand side over here. So it's pushing this right-hand side down a little bit that the first tree didn't have. As we add five trees, you can see that there is some error over here on the left. So this has been pushed up. You can see that these gray trees are pushing that up. You can see that these trees are pushing this down. It still has a bit to go to get that down,
>
> **[1:34](https://www.linkedin.com/learning/applied-machine-learning-ensemble-learning-25317548/hands-on-coding-with-xgboost?u=76281980&t=94)** and this is getting pushed up as well. By the time we get to about 20 trees, the model's doing pretty good, tracking the trend of what's going on there. We can add additional trees as well. One of the nice things about this plot is that it allows us to see whether we're starting to capture trend or we're starting to capture noise, and to me it looks like once we get to 50 trees, we've got some bumps in there that indicate to me that we're starting to capture some of the noise and we'd probably get better performance using a simpler model. With that intuition, let's look at our larger data set. Note that I don't need a pipeline here. All I do is call fit and I pass in X_train. I do need to say enable_categorical is equal to true, to tell it that we have categorical data in there. One more thing, I also need to say y_train==, this string, greater than 5K. It turns out that XGBoost doesn't like strings on the labels, but it does like Booleans, so we just convert that to a Boolean. Okay, this is another reason why people like XGBoost. If you look at our score, you can see that our score is 87. On our previous models, we maxed out around 0.82, 83, so we're getting a pretty significant boost here for very little work. To me, this is pretty awesome.
>
> **[3:06](https://www.linkedin.com/learning/applied-machine-learning-ensemble-learning-25317548/hands-on-coding-with-xgboost?u=76281980&t=186)** Again, this is why I wrote a book about XGBoost because you get a lot of bang for your buck. One more thing I will note here. I happen to know that the out-of-the-box XGBoost model tends to overfit. So even though this is overfit, you can see that it is scoring quite well. It's possible, like I said, generally this overfits out of the box. It's possible that we can even eke out a little bit more performance by tuning this model and get it even better. In this video, I showed you how easy it is to use XGBoost and how it gives you great performance out of the box.

> [!info]- Semantic Content
>
> **Code Identifiers:** enable_categorical (1), y_train (1)
> **Warnings:** note that (2)
> **Versions:** 0.82 (1)
> **UI Navigation:** go to (1)
> **Analogies:** similar to (1)
> **Speakers:** - [narrator] (1)

#### [Hyperparameter tuning for XGBoost](https://www.linkedin.com/learning/applied-machine-learning-ensemble-learning-25317548/hyperparameter-tuning-for-xgboost?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/applied-machine-learning-ensemble-learning-25317548/hyperparameter-tuning-for-xgboost?u=76281980&t=0)** - [Instructor] Like I said in the previous video, XGBoost has great performance out of the box. However, it also happens to over fit out of the box often as well. So let's talk about how we control that. The big tools that we have to control that are hyper parameters. Here's some of the main hyper parameters of XGBoost. Again, there's about two dozen different hyper parameters, but these are some of the main hyper parameters that I like to use. The first one, max depth. It's controlling how deep a tree is. Remember, each subsequent tree is correcting the previous tree, and generally you want a pretty shallow tree. The ETA is the learning rate. We saw this in other models. This is a value between 0 and 1. We can shrink that down. One thing to note is that there is a relationship between ETA and the number of trees, number of estimators in your model. So if you shrink down the ETA, again, that's the multiplier that you multiply your result by to shrink it down so you're not overshooting the target. If you lower the ETA, generally you want to raise the number of estimators. That's just the general rule of thumb, subsample and column sample by tree. There's a lot of different ways to sample your data, and these are some of them. Gamma is a hyper parameter that controls the regularization of your model. You can simplify your model by changing this value. Let's look at how the max depth might impact our model here.
>
> **[1:37](https://www.linkedin.com/learning/applied-machine-learning-ensemble-learning-25317548/hyperparameter-tuning-for-xgboost?u=76281980&t=97)** So here's a plot similar to what we've been seeing. We've been changing a hyper parameter and keeping track of the training and testing scores. We're doing that. Let me talk about my interpretation of that. So our blue line is our testing score. That's the one we're mainly concerned about. Our orange line is our training score. As we bump up that max depth, you can see that we're getting close to a hundred percent accuracy, but that is not really helping our testing score. Where does our testing score appear to top out at? At around 3. I believe the default value for max depth is 6. So for this dataset, it appears that making that even shallower is going to give us better performance. And the other thing I like about this graph is that the orange and blue lines are tracking up till about 3. At that point, they start to diverge. The divergence generally indicates that we're starting to overfit. I'll just make a side note here. Look at the score here. For the max depth of around 15, our score is around 86. This is somewhat counterintuitive, even though this XGBoost model at 15 depth is overfit, it performs better than these other models that we've seen that were not overfit. So that's kind of cool out of the box. XGBoost gives you good performance.
>
> **[3:11](https://www.linkedin.com/learning/applied-machine-learning-ensemble-learning-25317548/hyperparameter-tuning-for-xgboost?u=76281980&t=191)** It does tend to overfit, even though it's overfit, it tends to perform better than other models. If you tune it, you'll probably get a better performance out of it. Okay, let's look at this tuned model here. I'm just going to set max depth to 3. And we see that our model accuracy went up to 87.8. The previous accuracy was 0.875. So we do see a slight increase by tuning the model.

> [!info]- Semantic Content
>
> **Env Vars:** eta (4)
> **Definitions:** is a  (3)
> **Versions:** 87.8 (1), 0.875 (1)
> **CLI Commands:** make (1)
> **Cross-References:** previous video (1)
> **Analogies:** similar to (1)
> **Best Practices:** general rule (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Tune XGBoost model](https://www.linkedin.com/learning/applied-machine-learning-ensemble-learning-25317548/challenge-tune-xgboost-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/applied-machine-learning-ensemble-learning-25317548/challenge-tune-xgboost-model?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/applied-machine-learning-ensemble-learning-25317548/challenge-tune-xgboost-model?u=76281980&t=5)** - [Instructor] It's challenge time. Your challenge is to find the value of gamma that maximizes accuracy for XGBoost.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)

#### [Solution: Tune XGBoost model](https://www.linkedin.com/learning/applied-machine-learning-ensemble-learning-25317548/solution-tune-xgboost-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/applied-machine-learning-ensemble-learning-25317548/solution-tune-xgboost-model?u=76281980&t=0)** - [Instructor] Okay, we're going to try and figure out a good value of gamma for our model. So I'm going to come up here and copy my previous code. I'll just click on the side here and hit C. That should copy that. Then I'm going to click on the side here and hit V to paste that. So this just says values. That's a generic term, so I'm okay with that. But I want to change this to gamma and this to gamma down here. So what a regularization term does is it simplifies the model. And that's one of the things we want to do with an overfit model. And again, like I said, XGBoost tends to overfit out of the box. So I'm going to put in some values here. Generally I'll do something like this, 0, maybe 0.1, maybe 1, maybe 5 and 10. And let's see what happens when we do these values. I'm going to come down here and I'm also going to change this code here. We're going to change the title and say XGBoost classifier accuracy versus gamma. Okay, we got an error and it says none of max depth are in the columns, and that's my bad when I copy this code, I don't have max depth anymore, I have gamma, so I need to make sure I change that. Let's look at the result here.
>
> **[1:34](https://www.linkedin.com/learning/applied-machine-learning-ensemble-learning-25317548/solution-tune-xgboost-model?u=76281980&t=94)** Looks like where gamma is 0, we're around 0.875. We bump it up a little bit, it goes down, and then we keep bumping it up, it goes up, and then it looks like it's going back down. So I might want to [[Zoom]] in a little bit here. It looks like 5 is the peak of the values I entered. Let's put in a few more values in there. Maybe I'll try 4 and 6 around that. Okay. And I'm not seeing 4 or 6 top out 5. So it's interesting that this chart looks like it's doing the opposite. As we raise the gamma, we are simplifying the model. Generally a regularization term puts on some sort of penalty that simplifies the model. And you can see that happening with our training score. It is coming down and it looks like it's coming in line with our testing score. So what this indicates to me is that at this left end, we probably have some overfitting as we increase this. We are simplifying the model at some point. We simplify it so much that it starts to under fit and our performance goes down. Our model is too simple, we've regularized it too much. So it looks like in this case, the Goldilocks hotspot is somewhere around 5.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Zoom]] (1)
> **Versions:** 0.1 (1), 0.875 (1)
> **UI Navigation:** click on (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 5. Stacking

[↑ Back to Table of Contents](#table-of-contents)

#### [Concept of stacking](https://www.linkedin.com/learning/applied-machine-learning-ensemble-learning-25317548/concept-of-stacking?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/applied-machine-learning-ensemble-learning-25317548/concept-of-stacking?u=76281980&t=0)** - [Instructor] In this section, we're going to be exploring stacking. Stacking is a powerful ensemble technique. If you've wondered how to combine the strengths of multiple models to improve predictions, stacking is an answer to that. By the end of this section, you'll understand how stacking works, how to implement it and evaluate it. So stacking is known as stacked generalization, and it is an ensemble technique that combines multiple models. After we have multiple models, a metamodel will use the predictions of these models to make a better prediction. More specifically, we will train these base models, and these base models are trained independently on the data, and they don't have to be the same model type. For example, you could use a decision tree, linear models, [[Neural Networks]], nearest neighbors, any of the models found in scikit-learn, or models that are compatible with the scikit-learn API. We're going to train each of those models individually. Each of those will make a prediction. We will have a data set of predictions. At the end, there's a metamodel. This combines the predictions and makes a final prediction. So this technique is especially useful if you've got complex data and you know that different aspects of your data are captured better by different models. Also, if you want to maximize accuracy, you can use stacking to do that.
>
> **[1:34](https://www.linkedin.com/learning/applied-machine-learning-ensemble-learning-25317548/concept-of-stacking?u=76281980&t=94)** One of the drawbacks to using something like stacking is the model is going to be more difficult to explain. So if interpretability of your model is paramount, you probably want to use a different model rather than stacking.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Neural Networks]] (1)
> **Definitions:** is an  (2), is a  (1), known as (1)
> **CLI Commands:** make (2)
> **Env Vars:** api (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Hands-on coding with StackingClassifier](https://www.linkedin.com/learning/applied-machine-learning-ensemble-learning-25317548/hands-on-coding-with-stackingclassifier?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/applied-machine-learning-ensemble-learning-25317548/hands-on-coding-with-stackingclassifier?u=76281980&t=0)** - [Instructor] Okay, let's look an example of using stacking. Here's my code. I'm importing the base models that I'm going to use here. So I'm going to use a decision tree and k-nearest neighbors. And then from the ensemble module, I'm importing the stacking classifier. At this point, I'm going to make a list that has tuples of the name of the classifier and the classifier in that. In this case, we have a decision tree and k-nearest neighbors. Finally, we will throw those estimators into the stacking classifier, and there is our model. I've got a pipeline here. In this case, the pipeline is not including the model at the end, it's just being used for pre-processing. And I'm going to take the output of calling fit_transform from the pipeline. That's just going to pre-process the data. And I'm going to feed that into our model.fit. After that, I'm going to calculate the accuracy of our model, using model.predict, and then taking the pipeline to transform the test data. Let's see what the performance looks like on this. And we get 0.822. The score of 822 is in line with our other models, but not quite as good as our XGBoost model.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Code Identifiers:** fit_transform (1)
> **Versions:** 0.822 (1)
> **Speakers:** - [instructor] (1)

#### [Evaluation of stacking vs individual models](https://www.linkedin.com/learning/applied-machine-learning-ensemble-learning-25317548/evaluation-of-stacking-vs-individual-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/applied-machine-learning-ensemble-learning-25317548/evaluation-of-stacking-vs-individual-models?u=76281980&t=0)** - [Instructor] In this video, I want to give you some intuition about how this works. What I'm going to do is I'm going to take the individual models from our stacking ensemble. I'm going to run them independently. We're going to look at their score and just compare that score to the score of the final model. Here we go. Okay, here we see a decision tree trained to a depth of three, gets a score of 0.81. Nearest neighbors model gets a score of 0.80, but when we combine those two, we get a score of 0.82. I love the stacking example because it shows us that we can take models that independently perform worse and combine them to get a better overall model.

> [!info]- Semantic Content
>
> **Versions:** 0.81 (1), 0.80 (1), 0.82 (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Create a stacked model](https://www.linkedin.com/learning/applied-machine-learning-ensemble-learning-25317548/challenge-create-a-stacked-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/applied-machine-learning-ensemble-learning-25317548/challenge-create-a-stacked-model?u=76281980&t=0)** - [Instructor] Okay, it's challenge time again. What I want you to do is just play around with stacking here. And I want you to throw in some different models into this and see if you can get better performance. Note that you don't have to limit yourself to simple models like a decision tree, you can include ensembles inside of stacking as well. So play around with this and see what you can come up with.

> [!info]- Semantic Content
>
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Create a stacked model](https://www.linkedin.com/learning/applied-machine-learning-ensemble-learning-25317548/solution-create-a-stacked-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/applied-machine-learning-ensemble-learning-25317548/solution-create-a-stacked-model?u=76281980&t=0)** - [Instructor] Okay, so let's look at a solution for this stacked model. The first thing I'm going to do is get my boiler plate, which I already have in my code up here. So I'll copy this cell and let's plop this down here. Actually, just copy this and paste it again just so I have the score in here of my original one, which is 0.822, and see if I can improve on that a little bit. So let's throw in some different models into here. Maybe we'll throw in a random forest and let's set the random state to 42 so I get consistent performance out of that. Maybe let's throw in AdaBoost as well, and let's see how this performs. Okay, so my notebook was restarted, so I need to fix the error, which is AdaBoost is not found. So let's import that. I'm going to say from skLearn.ensemble import AdaBoost. Let's run it again. Okay, and our model is 0.828, so a slight improvement over our model using these ensemble models. Just for fun, I'm going to take this code here and let's paste this code down here
>
> **[1:37](https://www.linkedin.com/learning/applied-machine-learning-ensemble-learning-25317548/solution-create-a-stacked-model?u=76281980&t=97)** and look at the individual scores inside of our ensemble. So I do have this estimators variable here that has all the individual models there. Let's just loop over that. We'll run this to look at the individual scores. So it looks like we do see a slight boost when we're combining these over the individual models. One thing that is interesting to me is that XGBoost still outperforms this stacked model that is combining a bunch of different models. Again, this is evidence to me, and I've seen this with a lot of my clients. The XGBoost turns out to be generally a useful model and gives us relatively good performance out of the box. It's interesting to note that this score is still not beating XGBoost. XGBoost tends to give better performance out of the box. You could play around with this and add an ensemble with XGBoost. However, my preference generally is to start off with simple models, something like a linear model or decision tree, and then move to XGBoost and compare the performance between those two. Oftentimes with those tools in my tool belt, I can quickly make a well performing model.

> [!info]- Semantic Content
>
> **Versions:** 0.822 (1), 0.828 (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** sklearn (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/applied-machine-learning-ensemble-learning-25317548/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/applied-machine-learning-ensemble-learning-25317548/next-steps?u=76281980&t=0)** - As you wrap up this course, the next steps are clear. Take what you've learned and apply it. Experiment with bagging, boosting, or stacking on your own data sets and see the difference that ensembles can make. Dive into advanced tools like CAT Boost or like GBM and fine tune your models using hyper parameter optimization techniques. Remember, machine learning is always evolving. Stay curious and keep learning. If you're eager to continue growing, check out my other machine learning courses on [[LinkedIn]] Learning for even more insights and techniques. Thank you for joining me in this course. I can't wait to see what you create with these powerful techniques. Your next great model is just around the corner.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (1)
> **CLI Commands:** make (1), cat (1)
> **Env Vars:** cat (1), gbm (1)
> **Speakers:** - as (1)


## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/applied-machine-learning-ensemble-learning-3959211/codespaces)

## Skills Covered

- Artificial Intelligence (AI)
- Applied Machine Learning

## Path Context

### In [[Advance Your Skills in AI and Machine Learning]]
**1 of 16** | [[Deep Learning- Model Optimization and Tuning (2022)]] →

## Appears In

- [[Advance Your Skills in AI and Machine Learning]]

## Related Courses

_Courses sharing skills:_

- [[Applied AI- Building NLP Apps with Hugging Face Transformers]] — Artificial Intelligence (AI), Applied Machine Learning
- [[Creating a Book Search Engine from Scratch Using Java and GitHub Copilot]] — Artificial Intelligence (AI)
- [[Exploring the Future of Development with GitHub Copilot Workspace]] — Artificial Intelligence (AI)
- [[Big Data in the Age of AI]] — Artificial Intelligence (AI)
- [[Complete Guide to Excel Statistics with Copilot]] — Artificial Intelligence (AI)

---

[↑ Back to top](#)