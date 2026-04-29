---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: deep-learning-with-python-optimizing-deep-learning-models
url: "https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models"
duration_minutes: 121
duration: 2h 1m
level: Intermediate
updated: 2/24/2025
learners: 2866
skills:
  - Python (Programming Language)
  - Artificial Intelligence (AI)
  - Deep Learning
exercise_files: true
github: "https://github.com/LinkedInLearning/deep-learning-with-python-optimizing-deep-learning-models-3930062/codespaces"
thumbnail: "https://media.licdn.com/dms/image/v2/D4D0DAQH8BFD--fpKJA/learning-public-crop_675_1200/B4DZT8pt8oGcAY-/0/1739405582824?e=2147483647&amp;v=beta&amp;t=FGb1-wz5ldJ6jHnlPzWqm8at1T2JPJBgOMGtr1xXpK0"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Advance Your Skills in Deep Learning and Neural Networks]]'
prev_courses:
  - '[[AI Workshop- Build a Neural Network with PyTorch Lightning (2023)]]'
next_courses:
  - '[[Introduction to Generative Adversarial Networks (GANs)]]'
path_nav: '[{"path":"Advance Your Skills in Deep Learning and Neural Networks","position":5,"total":8,"prev":"AI Workshop- Build a Neural Network with PyTorch Lightning (2023)","next":"Introduction to Generative Adversarial Networks (GANs)"}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - skill/python-programming-language
  - skill/artificial-intelligence-ai
  - skill/deep-learning
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Deep%20Learning%20with%20Python-%20Optimizing%20Deep%20Learning%20Models.md)

![Deep Learning with Python: Optimizing Deep Learning Models](https://media.licdn.com/dms/image/v2/D4D0DAQH8BFD--fpKJA/learning-public-crop_675_1200/B4DZT8pt8oGcAY-/0/1739405582824?e=2147483647&amp;v=beta&amp;t=FGb1-wz5ldJ6jHnlPzWqm8at1T2JPJBgOMGtr1xXpK0)

# Deep Learning with Python: Optimizing Deep Learning Models

> Discover techniques to optimize deep learning models by improving their performance and efficiency. Emphasizing practical applications, instructor Frederick Nwanganga guides you through hands-on coding exercises, covering the essentials of data preprocessing and augmentation, regularization methods to minimize overfitting, optimization algorithms, advanced hyperparameter tuning methods, and more.T

> [LinkedIn Learning](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models) | 2h 1m | Intermediate | 3K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#Introduction]]** (3 videos)
- **[[#1. Optimizing Deep Learning Models]]** (1 videos)
- **[[#2. Regularization Techniques]]** (7 videos)
- **[[#3. Loss Functions and Optimization Algorithms]]** (8 videos)
- **[[#4. Hyperparameter Tuning Techniques]]** (5 videos)
- **[[#5. Advanced Training Techniques]]** (7 videos)
- **[[#Conclusion]]** (1 videos)

### Introduction

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Optimizing deep learning models
> [LinkedIn Learning](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/optimizing-deep-learning-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/optimizing-deep-learning-models?u=76281980&t=0)** - Achieving optimal performance with deep learning models requires more than just building a deep neural network.
>
> **[0:06](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/optimizing-deep-learning-models?u=76281980&t=6)** It demands an understanding of how to optimize these models to ensure efficiency, stability, and generalization.
>
> **[0:15](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/optimizing-deep-learning-models?u=76281980&t=15)** So how do you actually improve the performance of a deep learning model?
>
> **[0:19](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/optimizing-deep-learning-models?u=76281980&t=19)** How do you prevent it from overfitting?
>
> **[0:22](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/optimizing-deep-learning-models?u=76281980&t=22)** What even is overfitting?
>
> **[0:25](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/optimizing-deep-learning-models?u=76281980&t=25)** What are the optimal hyperparameters or settings for my model?
>
> **[0:29](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/optimizing-deep-learning-models?u=76281980&t=29)** That's what we'll cover in this course.
>
> **[0:31](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/optimizing-deep-learning-models?u=76281980&t=31)** You'll learn not just the theory behind these methods, but also how to implement them effectively in deep learning workflows using Python.
>
> **[0:40](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/optimizing-deep-learning-models?u=76281980&t=40)** My name is Fred Nwanganga.
>
> **[0:42](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/optimizing-deep-learning-models?u=76281980&t=42)** I'm a data scientist, teacher, and author with a passion for helping others unlock the full potential of AI and machine learning.
>
> **[0:50](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/optimizing-deep-learning-models?u=76281980&t=50)** Let's get started.

> [!info]- Semantic Content
>
> **CLI Commands:** python (1)
> **Code Keywords:** let (1)
> **Speakers:** - achieving (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/what-you-should-know?u=76281980&t=0)** - [Presenter] Before we get started, let's go over some of the background knowledge that you should have in order to get the most out of this course.
>
> **[0:07](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/what-you-should-know?u=76281980&t=7)** First, I assume that you have a fundamental understanding of neural networks and deep learning, if you don't, I recommend that you review the first course of the series, "Deep Learning with Python: Foundations."
>
> **[0:21](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/what-you-should-know?u=76281980&t=21)** Second, it'll be helpful if you are reasonably comfortable coding in Python.
>
> **[0:26](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/what-you-should-know?u=76281980&t=26)** I'll assume that you know how to import a Python package.
>
> **[0:30](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/what-you-should-know?u=76281980&t=30)** Refer to the attributes and methods of an object, define a function, and interact with loops.
>
> **[0:36](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/what-you-should-know?u=76281980&t=36)** Finally, I do assume that you know how to use a Jupyter Notebook interactive Python environment, specifically, I assume that you know how to edit and run code within a code cell.

> [!info]- Semantic Content
>
> **CLI Commands:** python (4)
> **Code Keywords:** let (1), function (1), finally, (1)
> **Tools:** jupyter (1)
> **Speakers:** - [presenter] (1)

#### Using the exercise files
> [LinkedIn Learning](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/using-the-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/using-the-exercise-files?u=76281980&t=0)** - [Instructor] This course is delivered using GitHub Codespaces, a development environment hosted in the cloud.
>
> **[0:07](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/using-the-exercise-files?u=76281980&t=7)** You won't have to install packages or set up anything.
>
> **[0:10](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/using-the-exercise-files?u=76281980&t=10)** It's all done for you in the environment.
>
> **[0:14](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/using-the-exercise-files?u=76281980&t=14)** The best way to become proficient in optimizing the deep learning model in Python is to practice doing so yourself.
>
> **[0:21](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/using-the-exercise-files?u=76281980&t=21)** The exercise files you need for this course will be provided to you in the course GitHub repo.
>
> **[0:27](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/using-the-exercise-files?u=76281980&t=27)** This means that you can follow along with any of the code examples in the lessons.
>
> **[0:31](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/using-the-exercise-files?u=76281980&t=31)** I recommend that you do so.
>
> **[0:34](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/using-the-exercise-files?u=76281980&t=34)** The exercise files are available on GitHub and they are organized by branches.
>
> **[0:40](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/using-the-exercise-files?u=76281980&t=40)** Let's take a look at an example.
>
> **[0:43](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/using-the-exercise-files?u=76281980&t=43)** The files in the 02_03 branch are what we use in the third video of the second chapter.
>
> **[0:51](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/using-the-exercise-files?u=76281980&t=51)** We have two notebooks for each of the lesson videos.
>
> **[0:59](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/using-the-exercise-files?u=76281980&t=59)** The 02_03b notebook is the beginning notebook.
>
> **[1:05](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/using-the-exercise-files?u=76281980&t=65)** This is a notebook you should code in when following along with a lesson video.
>
> **[1:11](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/using-the-exercise-files?u=76281980&t=71)** The 02_03e notebook is the ending notebook.
>
> **[1:16](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/using-the-exercise-files?u=76281980&t=76)** It is a completed version of the beginning notebook for your reference.
>
> **[1:20](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/using-the-exercise-files?u=76281980&t=80)** This is a notebook I will execute during the coding example video.
>
> **[1:25](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/using-the-exercise-files?u=76281980&t=85)** Let's jump in.

> [!info]- Semantic Content
>
> **Definitions:** is a  (3), means that (1)
> **Tools:** github (3)
> **Exercise Files:** exercise files (2), github repo (1)
> **Code Keywords:** let (2)
> **Prerequisites:** install (1), set up (1)
> **CLI Commands:** python (1)
> **Speakers:** - [instructor] (1)


### 1. Optimizing Deep Learning Models

> [[#Table of Contents|↑ Back to Table of Contents]]

#### The importance of optimizing deep learning models
> [LinkedIn Learning](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/the-importance-of-optimizing-deep-learning-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/the-importance-of-optimizing-deep-learning-models?u=76281980&t=0)** - [Instructor] Optimizing a deep learning model involves a range of strategies and algorithms aimed at improving the performance of neural networks during training and evaluation.
>
> **[0:11](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/the-importance-of-optimizing-deep-learning-models?u=76281980&t=11)** The goal is to strike the right balance between training efficiency and model generalizability.
>
> **[0:17](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/the-importance-of-optimizing-deep-learning-models?u=76281980&t=17)** The benefits of optimizing a deep learning model can be categorized broadly into four key areas.
>
> **[0:24](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/the-importance-of-optimizing-deep-learning-models?u=76281980&t=24)** Optimization ensures efficient convergence toward a solution during training, reducing the time and resources required to achieve meaningful results.
>
> **[0:34](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/the-importance-of-optimizing-deep-learning-models?u=76281980&t=34)** Stability during training prevents issues such as exploding or vanishing gradients, which can derail learning.
>
> **[0:42](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/the-importance-of-optimizing-deep-learning-models?u=76281980&t=42)** Consistent parameter updates enable smoother and more reliable training.
>
> **[0:47](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/the-importance-of-optimizing-deep-learning-models?u=76281980&t=47)** A well-optimized model minimizes its loss function effectively, resulting in improved accuracy on both the training set and new, unseen data.
>
> **[0:57](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/the-importance-of-optimizing-deep-learning-models?u=76281980&t=57)** Optimization helps the model generalize well to new data by striking a balance between fitting the training data well while avoiding overfitting or underfitting.
>
> **[1:08](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/the-importance-of-optimizing-deep-learning-models?u=76281980&t=68)** Model optimization involves various strategies and techniques, each contributing uniquely to building a robust deep learning model.
>
> **[1:17](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/the-importance-of-optimizing-deep-learning-models?u=76281980&t=77)** Continuous monitoring of training and validation metrics helps identify overfitting or underfitting early.
>
> **[1:24](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/the-importance-of-optimizing-deep-learning-models?u=76281980&t=84)** This feedback loop guides adjustments to ensure the model stays on track.
>
> **[1:29](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/the-importance-of-optimizing-deep-learning-models?u=76281980&t=89)** Regularization prevents overfitting by managing model complexity.
>
> **[1:33](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/the-importance-of-optimizing-deep-learning-models?u=76281980&t=93)** Approaches like L1, L2, and elastic net regularization penalize overly complex models, while dropout randomly disables neurons during training, encouraging the model to learn more generalized patterns.
>
> **[1:49](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/the-importance-of-optimizing-deep-learning-models?u=76281980&t=109)** Adjusting key hyperparameters, such as learning rate, batch size, and momentum, is essential for controlling the speed and effectiveness of the learning process.
>
> **[1:59](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/the-importance-of-optimizing-deep-learning-models?u=76281980&t=119)** Proper tuning can dramatically influence model performance.
>
> **[2:04](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/the-importance-of-optimizing-deep-learning-models?u=76281980&t=124)** Selecting the appropriate optimizer is crucial for effective training.
>
> **[2:09](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/the-importance-of-optimizing-deep-learning-models?u=76281980&t=129)** Stochastic gradient descent can deliver strong results when carefully tuned, while adaptive methods like ADAM automatically adjust learning rates during training, enabling faster convergence and often yielding better performance.
>
> **[2:24](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/the-importance-of-optimizing-deep-learning-models?u=76281980&t=144)** Advanced methods such as early stopping and gradient clipping enhanced training efficiency and stability.
>
> **[2:31](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/the-importance-of-optimizing-deep-learning-models?u=76281980&t=151)** Early stopping halts training when performance plateaus, preventing overfitting, while gradient clipping manages excessively large updates to avoid instability.
>
> **[2:42](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/the-importance-of-optimizing-deep-learning-models?u=76281980&t=162)** Model optimization in deep learning is a multifaceted process that balances convergence speed, training stability, performance, and generalization.
>
> **[2:54](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/the-importance-of-optimizing-deep-learning-models?u=76281980&t=174)** By employing carefully chosen strategies such as regularization, hyperparameter tuning, and advanced optimization techniques, we can create efficient, accurate and robust models capable of handling real-world challenges.

> [!info]- Semantic Content
>
> **Analogies:** such as (4)
> **Code Keywords:** function (1), new, (1)
> **Env Vars:** adam (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 2. Regularization Techniques

> [[#Table of Contents|↑ Back to Table of Contents]]

#### The bias-variance trade-off
> [LinkedIn Learning](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/the-bias-variance-tradeoff?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/the-bias-variance-tradeoff?u=76281980&t=0)** - [Instructor] The bias-variance tradeoff is a key concept in machine learning that describes the balance between two types of errors a model can make while learning from data, bias and variance.
>
> **[0:13](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/the-bias-variance-tradeoff?u=76281980&t=13)** Bias refers to errors caused by overly simplistic assumptions about the data.
>
> **[0:18](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/the-bias-variance-tradeoff?u=76281980&t=18)** When a model has high bias, it struggles to capture the underlying complexity of the data, leading to poor performance on both the training and test sets, a situation known as underfitting.
>
> **[0:31](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/the-bias-variance-tradeoff?u=76281980&t=31)** For example, using the linear regression model on non-linear data results in high bias because the linear model oversimplifies the relationship, missing critical patterns and producing inaccurate predictions.
>
> **[0:46](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/the-bias-variance-tradeoff?u=76281980&t=46)** In contrast, variance refers to errors caused by a model being overly sensitive to the details of the training data.
>
> **[0:53](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/the-bias-variance-tradeoff?u=76281980&t=53)** A model with high variance captures both true patterns and noise, leading to excellent performance on the training set but poor generalization to new data.
>
> **[1:03](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/the-bias-variance-tradeoff?u=76281980&t=63)** This is known as overfitting.
>
> **[1:06](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/the-bias-variance-tradeoff?u=76281980&t=66)** For instance, let's assume our data is split into training and test sets as shown here.
>
> **[1:12](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/the-bias-variance-tradeoff?u=76281980&t=72)** A highly complex polynomial regression model may fit the training data perfectly, but fail to make accurate predictions on test data as it is too tailored to the specifics of the training set.
>
> **[1:26](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/the-bias-variance-tradeoff?u=76281980&t=86)** The essence of the bias various trade off lies in finding the right balance between the model's complexity and its ability to generalize well.
>
> **[1:36](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/the-bias-variance-tradeoff?u=76281980&t=96)** A well-balanced model is complex enough to capture meaningful patterns in the data without being overly sensitive to noise.
>
> **[1:44](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/the-bias-variance-tradeoff?u=76281980&t=104)** To address high variance, we can employ several techniques to reduce the model sensitivity to noise and improve generalization.
>
> **[1:53](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/the-bias-variance-tradeoff?u=76281980&t=113)** One approach is to simplify the model by reducing its complexity, ensuring it focuses on capturing the essential patterns in the data rather than overfitting to minor details.
>
> **[2:05](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/the-bias-variance-tradeoff?u=76281980&t=125)** Another common method is application of regularization techniques such as L1 or L2 penalties, which add constraints to the model's parameters, discouraging overly complex representations.
>
> **[2:19](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/the-bias-variance-tradeoff?u=76281980&t=139)** Using dropout layers are also particularly effective as they introduce noise during training by temporarily disabling random neurons, preventing the model from becoming overly reliant on specific pathways and encouraging a more generalized understanding of the data.
>
> **[2:38](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/the-bias-variance-tradeoff?u=76281980&t=158)** On the other hand, addressing high bias requires strategies that increase the model's capacity to learn from data.
>
> **[2:46](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/the-bias-variance-tradeoff?u=76281980&t=166)** Adjusting key hyperparameters such as the learning rate, batch size, or model depth can allow the model to better capture the underlying patterns.
>
> **[2:56](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/the-bias-variance-tradeoff?u=76281980&t=176)** Selecting more advanced architectures like convolutional neural networks can also be beneficial, particularly when working with complex data where simpler models fall short.
>
> **[3:08](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/the-bias-variance-tradeoff?u=76281980&t=188)** Additionally, using the appropriate optimizer can significantly improve the training process, enabling the model to converge more effectively and learn complex patterns.
>
> **[3:19](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/the-bias-variance-tradeoff?u=76281980&t=199)** By carefully managing the bias-variance tradeoff, we can create models that perform well on both training and unseen data, resulting in robust and reliable models suitable for real-world applications.

> [!info]- Semantic Content
>
> **Definitions:** refers to (2), known as (2), is a  (1)
> **Analogies:** such as (2), for example (1), for instance (1)
> **CLI Commands:** make (2)
> **Code Keywords:** let (1)
> **Speakers:** - [instructor] (1)

#### Lasso and ridge regularization
> [LinkedIn Learning](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/lasso-and-ridge-regularization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/lasso-and-ridge-regularization?u=76281980&t=0)** - [Instructor] Regularization is a crucial technique employed to prevent overfitting.
>
> **[0:05](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/lasso-and-ridge-regularization?u=76281980&t=5)** A scenario where a model learns the training data too well, including the noise and minor fluctuations that do not represent the true patterns.
>
> **[0:14](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/lasso-and-ridge-regularization?u=76281980&t=14)** Overfitting leads to a model that performs well on training data, but struggles to generalize effectively to unseen data.
>
> **[0:22](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/lasso-and-ridge-regularization?u=76281980&t=22)** To address this, L1 and L2 regularization are two widely used methods that add a penalty to the loss function during training, thereby encouraging simpler models and reduce the likelihood of overfitting.
>
> **[0:36](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/lasso-and-ridge-regularization?u=76281980&t=36)** L1 regularization, also known as lasso regularization, modifies the loss function by adding the sum of the absolute values of the weights as a penalty term.
>
> **[0:47](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/lasso-and-ridge-regularization?u=76281980&t=47)** Mathematically, L1 regularization is expressed as shown here, where L represents original loss function, lambda is a regularization parameter that controls the strength of the penalty, and wi are the weights or parameters of the model.
>
> **[1:04](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/lasso-and-ridge-regularization?u=76281980&t=64)** By adding the absolute values of the weights, L1 regularization encourages sparsity, meaning that it drives some weights to exactly 0.
>
> **[1:14](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/lasso-and-ridge-regularization?u=76281980&t=74)** This effectively removes those features from the model, leading to simpler, more interpretable models, where only the most significant features contribute to the final prediction.
>
> **[1:26](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/lasso-and-ridge-regularization?u=76281980&t=86)** This characteristic makes L1 regularization particularly valuable for feature selection, especially when dealing with high dimensional data where many features may be irrelevant.
>
> **[1:38](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/lasso-and-ridge-regularization?u=76281980&t=98)** For instance, consider a model trained on a dataset with thousands of features where only a subset is actually meaningful for the task at hand.
>
> **[1:47](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/lasso-and-ridge-regularization?u=76281980&t=107)** Applying L1 regularization helps in automatically selecting these relevant features by forcing the less important ones to have a 0 weight, simplifying the model and enhancing its interpretability.
>
> **[2:00](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/lasso-and-ridge-regularization?u=76281980&t=120)** However, while the model becomes simpler and potentially less prone to overfitting, it may also exclude features that could have contributed minor yet useful information.
>
> **[2:12](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/lasso-and-ridge-regularization?u=76281980&t=132)** L2 regularization, also known as ridge regularization, modifies the loss function by adding the sum of the squared values of the weights as a penalty term.
>
> **[2:23](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/lasso-and-ridge-regularization?u=76281980&t=143)** Mathematically, L2 regularization is expressed as shown here.
>
> **[2:29](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/lasso-and-ridge-regularization?u=76281980&t=149)** Unlike L1, L2 regularization does not push weights to exactly 0.
>
> **[2:34](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/lasso-and-ridge-regularization?u=76281980&t=154)** Instead, it discourages large weight values by penalizing the squared magnitudes, resulting in smaller and more evenly distributed weights across the network.
>
> **[2:45](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/lasso-and-ridge-regularization?u=76281980&t=165)** This type of penalty reduces the model's reliance on any single feature, promoting generalization by making the model more robust to variations in the data.
>
> **[2:55](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/lasso-and-ridge-regularization?u=76281980&t=175)** L2 regularization is particularly effective in situations where all input features are expected to contribute meaningfully to the prediction what should be controlled to prevent overfitting.
>
> **[3:07](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/lasso-and-ridge-regularization?u=76281980&t=187)** For example, in a deep learning model used for image classification where every pixel might hold some importance, L2 regularization helps balance the contribution of each feature by preventing some weights from becoming excessively large.
>
> **[3:22](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/lasso-and-ridge-regularization?u=76281980&t=202)** This helps maintain a smooth decision boundary, which is crucial for making accurate predictions on new data.
>
> **[3:30](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/lasso-and-ridge-regularization?u=76281980&t=210)** Choosing between L1 and L2 regularization depends on the specific requirements of the problem at hand.
>
> **[3:36](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/lasso-and-ridge-regularization?u=76281980&t=216)** In summary, use L1 regularization when you expect that only a subset of features are relevant and you need feature selection as part of the training process.
>
> **[3:47](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/lasso-and-ridge-regularization?u=76281980&t=227)** Use L2 regularization when you want to control the weights and prevent overfitting without removing any feature from consideration.

> [!info]- Semantic Content
>
> **Code Keywords:** function (4), this, (1), lambda (1)
> **Definitions:** is a  (2), known as (2)
> **Analogies:** for instance (1), for example (1)
> **Speakers:** - [instructor] (1)

#### Applying L1 regularization to a deep learning model
> [LinkedIn Learning](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-l1-regularization-to-a-deep-learning-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-l1-regularization-to-a-deep-learning-model?u=76281980&t=0)** - [Instructor] In this video, you will learn how to apply L1 Regularization, also known as Lasso regularization, to a deep learning model in order to reduce overfitting, I will be running the code in the 02_03e file.
>
> **[0:16](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-l1-regularization-to-a-deep-learning-model?u=76281980&t=16)** You can follow along by completing the empty code cells in the 02_03b file.
>
> **[0:23](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-l1-regularization-to-a-deep-learning-model?u=76281980&t=23)** Make sure to run the previously written code to import and pre-process the data as well as to build and train the baseline model.
>
> **[0:31](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-l1-regularization-to-a-deep-learning-model?u=76281980&t=31)** I've already done so.
>
> **[0:36](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-l1-regularization-to-a-deep-learning-model?u=76281980&t=36)** So we can see the result from the previous model.
>
> **[0:39](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-l1-regularization-to-a-deep-learning-model?u=76281980&t=39)** A clear indicator of overfitting is a divergence in the training and validation loss metrics, which is visible in the training curves above.
>
> **[0:50](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-l1-regularization-to-a-deep-learning-model?u=76281980&t=50)** L1 Regularization adds a penalty proportional to the absolute values of the weight during training.
>
> **[0:58](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-l1-regularization-to-a-deep-learning-model?u=76281980&t=58)** This encourages sparsity, meaning the model learns to rely only on the most important features.
>
> **[1:06](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-l1-regularization-to-a-deep-learning-model?u=76281980&t=66)** To apply L1 Regularization to the baseline model we created above, we set the kernel_regularizer argument within each hidden layer of the network to L1.
>
> **[1:16](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-l1-regularization-to-a-deep-learning-model?u=76281980&t=76)** In parentheses, we pass in 0.001.
>
> **[1:20](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-l1-regularization-to-a-deep-learning-model?u=76281980&t=80)** This means that the regularization parameter is set to 0.001.
>
> **[1:25](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-l1-regularization-to-a-deep-learning-model?u=76281980&t=85)** So to do this, we begin by importing l1 from tensorflow.keras.regularizers.
>
> **[1:32](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-l1-regularization-to-a-deep-learning-model?u=76281980&t=92)** Then we define our model.
>
> **[1:35](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-l1-regularization-to-a-deep-learning-model?u=76281980&t=95)** So in our model, within each of the dense layers, the hidden layers, we specify the kernel_regularizer argument and we specify the regularization parameter.
>
> **[1:44](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-l1-regularization-to-a-deep-learning-model?u=76281980&t=104)** So let's go ahead and run our code.
>
> **[1:49](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-l1-regularization-to-a-deep-learning-model?u=76281980&t=109)** Next we compile the regularized model.
>
> **[1:54](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-l1-regularization-to-a-deep-learning-model?u=76281980&t=114)** And then we train the regularized model against our training data.
>
> **[2:06](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-l1-regularization-to-a-deep-learning-model?u=76281980&t=126)** So we're going to let the model here train for 15 epochs against the training data.
>
> **[2:13](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-l1-regularization-to-a-deep-learning-model?u=76281980&t=133)** We set the batch_size as 128 and the validation_split at 0.1.
>
> **[2:18](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-l1-regularization-to-a-deep-learning-model?u=76281980&t=138)** Feel free to modify these variables and these values in your own environment to see what the impact is.
>
> **[2:29](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-l1-regularization-to-a-deep-learning-model?u=76281980&t=149)** Once training is complete, we can now plot the training and validation loss metrics.
>
> **[2:35](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-l1-regularization-to-a-deep-learning-model?u=76281980&t=155)** So let's take a look at that.
>
> **[2:40](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-l1-regularization-to-a-deep-learning-model?u=76281980&t=160)** This time we see that the two metrics reduce in value at a similar rate as training continues, which is quite different from what we saw before.
>
> **[2:49](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-l1-regularization-to-a-deep-learning-model?u=76281980&t=169)** This indicates that L1 Regularization is effectively helping the model generalize better by encouraging sparsity in the learned weights.
>
> **[2:58](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-l1-regularization-to-a-deep-learning-model?u=76281980&t=178)** By penalizing the absolute values of the weights, L1 Regularization pushes many weights towards zero, effectively simplifying the model and reducing the risk of overfitting to retraining data.
>
> **[3:12](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-l1-regularization-to-a-deep-learning-model?u=76281980&t=192)** Good job.
>
> **[3:13](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-l1-regularization-to-a-deep-learning-model?u=76281980&t=193)** You now know how to use L1 Regularization to reduce overfitting in a deep learning model in Python.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), pass (1), this, (1)
> **Code Identifiers:** kernel_regularizer (2), batch_size (1), validation_split (1)
> **Versions:** 0.001 (2), 0.1 (1)
> **CLI Commands:** make (1), python (1)
> **Definitions:** is a  (1), means that (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)

#### Applying L2 regularization to a deep learning model
> [LinkedIn Learning](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-l2-regularization-to-a-deep-learning-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-l2-regularization-to-a-deep-learning-model?u=76281980&t=0)** - [Instructor] In this video, you will learn how to apply L2 Regularization, also known as Ridge Regularization, to a deep learning model in order to reduce overfitting, I'll be writing a code in the 02_04e file.
>
> **[0:15](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-l2-regularization-to-a-deep-learning-model?u=76281980&t=15)** You can follow along by completing the empty code cells in the 02_04b file.
>
> **[0:21](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-l2-regularization-to-a-deep-learning-model?u=76281980&t=21)** Make sure to run the previously written code to import and pre-process the data as well as to build and train the baseline model.
>
> **[0:30](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-l2-regularization-to-a-deep-learning-model?u=76281980&t=30)** I've already done so.
>
> **[0:32](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-l2-regularization-to-a-deep-learning-model?u=76281980&t=32)** Looking at the results of the baseline model, we can see that there is a clear indicator of overfitting.
>
> **[0:39](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-l2-regularization-to-a-deep-learning-model?u=76281980&t=39)** We see the divergence in the training and validation loss metrics, which is visible in the training and validation loss curves that we see here.
>
> **[0:48](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-l2-regularization-to-a-deep-learning-model?u=76281980&t=48)** To help minimize overfitting in this baseline model, let's apply L2 Regularization.
>
> **[0:55](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-l2-regularization-to-a-deep-learning-model?u=76281980&t=55)** L2 Regularization adds a penalty proportional to the squared values of the weights.
>
> **[1:00](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-l2-regularization-to-a-deep-learning-model?u=76281980&t=60)** This discourages large weights, helping the model generalize better.
>
> **[1:06](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-l2-regularization-to-a-deep-learning-model?u=76281980&t=66)** To apply L2 Regularization to the baseline model, we set the kernel_regularizer argument within each hidden layer of the network.
>
> **[1:14](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-l2-regularization-to-a-deep-learning-model?u=76281980&t=74)** So in this example, we set the regularization parameter to 0.001.
>
> **[1:21](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-l2-regularization-to-a-deep-learning-model?u=76281980&t=81)** Before we begin, we import L2 from tensorflow.keras.regularizers.
>
> **[1:28](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-l2-regularization-to-a-deep-learning-model?u=76281980&t=88)** Then we define our model.
>
> **[1:30](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-l2-regularization-to-a-deep-learning-model?u=76281980&t=90)** Within each Dense layer, we specify the kernel_regularizer as L2 and give it a parameter value.
>
> **[1:38](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-l2-regularization-to-a-deep-learning-model?u=76281980&t=98)** So let's go ahead and run our code.
>
> **[1:42](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-l2-regularization-to-a-deep-learning-model?u=76281980&t=102)** Once we're done defining our model, we now need to compile it, which is what we do in this next step by calling the compile method of our model.
>
> **[1:53](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-l2-regularization-to-a-deep-learning-model?u=76281980&t=113)** After that, we now apply the model to our training data.
>
> **[1:58](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-l2-regularization-to-a-deep-learning-model?u=76281980&t=118)** So we call the fit method to do so.
>
> **[2:03](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-l2-regularization-to-a-deep-learning-model?u=76281980&t=123)** We specify the number of epochs as 15, so it's going to go through 15 training iterations.
>
> **[2:08](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-l2-regularization-to-a-deep-learning-model?u=76281980&t=128)** We specify the batch_size is 128 and the validation_split as 0.1.
>
> **[2:14](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-l2-regularization-to-a-deep-learning-model?u=76281980&t=134)** This means that the model each time will use 90% of the training data for training and 10% for validation.
>
> **[2:23](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-l2-regularization-to-a-deep-learning-model?u=76281980&t=143)** So let's give this some time to finish all 15 iterations of 15 epochs.
>
> **[2:28](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-l2-regularization-to-a-deep-learning-model?u=76281980&t=148)** And then we're going to go ahead and plot the train and validation loss metrics to see what the impact of L2 Regularization has been on our model.
>
> **[2:41](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-l2-regularization-to-a-deep-learning-model?u=76281980&t=161)** Okay, now we can go ahead and plot the validation and training loss metrics.
>
> **[2:48](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-l2-regularization-to-a-deep-learning-model?u=76281980&t=168)** And this time we see that the model's training and validation loss metrics tend to decrease at a similar rate throughout the training process.
>
> **[2:56](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-l2-regularization-to-a-deep-learning-model?u=76281980&t=176)** This is a strong indication that L2 Regularization is effectively reducing overfitting by discouraging the model from relying too heavily on large weight values.
>
> **[3:07](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-l2-regularization-to-a-deep-learning-model?u=76281980&t=187)** Great work.
>
> **[3:08](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-l2-regularization-to-a-deep-learning-model?u=76281980&t=188)** You now know how to use L2 Regularization to reduce overfitting in a deep learning model in Python.

> [!info]- Semantic Content
>
> **Code Identifiers:** kernel_regularizer (2), batch_size (1), validation_split (1)
> **Definitions:** is a  (2), known as (1), means that (1)
> **Code Keywords:** let (3)
> **CLI Commands:** make (1), python (1)
> **Versions:** 0.001 (1), 0.1 (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)

#### Elastic Net regularization
> [LinkedIn Learning](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/elasticnet-regularization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/elasticnet-regularization?u=76281980&t=0)** - [Instructor] Elastic net regularization combines the penalties of both L one and L two regularization making it especially useful when dealing with data where some features are highly correlated or when neither L one nor L two regularization alone provides optimal results.
>
> **[0:17](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/elasticnet-regularization?u=76281980&t=17)** The loss function for elastic net re regularization is defined as shown here where alpha controls the overall strength of the regularization and Rho is a mixing parameter between L one and L two regularization.
>
> **[0:32](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/elasticnet-regularization?u=76281980&t=32)** Values for Rho between zero and one create a combination of both L one and L two.
>
> **[0:38](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/elasticnet-regularization?u=76281980&t=38)** However, when Rho equals one, the effect will be the same as L one or lasso regularization, and when Rho equals zero, the effect will be the same as L two regularization.
>
> **[0:50](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/elasticnet-regularization?u=76281980&t=50)** Essentially, elastic net regularization aims to leverage the benefits of both L one and L two regularization, by encouraging sparsity like L one for feature selection, ensuring that the model only uses the most relevant features and stabilizing the model like L two by penalizing large weights uniformly preventing any single weight from dominating.
>
> **[1:15](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/elasticnet-regularization?u=76281980&t=75)** This also reduces the risk of overfitting.
>
> **[1:18](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/elasticnet-regularization?u=76281980&t=78)** Choosing to use elastic net regularization over L one and L two regularization depends on the specific requirements of the problem at hand.
>
> **[1:27](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/elasticnet-regularization?u=76281980&t=87)** Elastic net is particularly well suited for situations where the number of features is much larger than the number of observations.
>
> **[1:36](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/elasticnet-regularization?u=76281980&t=96)** Elastic Net can help select the most relevant subset of features without completely ignoring correlated ones.
>
> **[1:44](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/elasticnet-regularization?u=76281980&t=104)** It also is useful when the dataset has groups of correlated features.
>
> **[1:49](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/elasticnet-regularization?u=76281980&t=109)** L one regularization may arbitrarily select one feature from a correlated group potentially ignoring useful information.
>
> **[1:57](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/elasticnet-regularization?u=76281980&t=117)** L two regularization, on the other hand, tends to include all features, but doesn't shrink on important weights to zero.
>
> **[2:04](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/elasticnet-regularization?u=76281980&t=124)** Elastic net balances these behaviors allowing for group feature selection while still maintaining weight decay.
>
> **[2:13](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/elasticnet-regularization?u=76281980&t=133)** The role parameter in elastic net offers fine tuned control over the regularization balance, allowing for a flexible combination of the feature selection properties of L one with the stability and weight distribution of L two.

> [!info]- Semantic Content
>
> **Definitions:** defined as (1), is a  (1)
> **Code Keywords:** function (1)
> **UI Navigation:** select the (1)
> **Speakers:** - [instructor] (1)

#### Dropout regularization
> [LinkedIn Learning](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/dropout-regularization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/dropout-regularization?u=76281980&t=0)** - [Instructor] Dropout regularization is a powerful and widely used technique in deep learning designed to prevent overfitting in neural networks.
>
> **[0:09](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/dropout-regularization?u=76281980&t=9)** Overfitting occurs when a model learns not just the true underlying patterns in the training data, but also the noise and irrelevant details, leading to poor generalization on unseen data.
>
> **[0:22](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/dropout-regularization?u=76281980&t=22)** Dropout regularization helps mitigate this issue by introducing noise during training, forcing the model to become more robust and capable of generalizing to new data.
>
> **[0:33](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/dropout-regularization?u=76281980&t=33)** The fundamental idea is simple yet effective.
>
> **[0:37](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/dropout-regularization?u=76281980&t=37)** During each training iteration, a random subset of neurons in a given layer are temporarily dropped out or ignored.
>
> **[0:46](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/dropout-regularization?u=76281980&t=46)** These disabled neurons do not contribute to the forward phase, or backward phase of the backpropagation process.
>
> **[0:52](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/dropout-regularization?u=76281980&t=52)** This means that for each training pass, different parts of the network are disabled at random.
>
> **[0:59](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/dropout-regularization?u=76281980&t=59)** Dropout effectively prevents overfitting by addressing two main issues.
>
> **[1:05](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/dropout-regularization?u=76281980&t=65)** Without dropout, neurons can become highly dependent on each other, learning specific features jointly, and reducing the model's robustness.
>
> **[1:14](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/dropout-regularization?u=76281980&t=74)** Dropout regularization prevents this co-adaptation by randomly removing neurons during training, forcing the network to learn redundant representations that do not rely on specific interactions between neurons.
>
> **[1:28](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/dropout-regularization?u=76281980&t=88)** This results in a more generalized network.
>
> **[1:31](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/dropout-regularization?u=76281980&t=91)** Second, by randomly masking neuron outputs, dropout introduces noise into the training process.
>
> **[1:39](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/dropout-regularization?u=76281980&t=99)** This noise acts as a regularizer, preventing the network from becoming too finely tuned to the training data.
>
> **[1:47](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/dropout-regularization?u=76281980&t=107)** Dropout regularization provides a number of benefits.
>
> **[1:51](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/dropout-regularization?u=76281980&t=111)** By ensuring that no single neuron becomes too important, dropout regularization encourages the network to develop multiple independent features.
>
> **[2:01](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/dropout-regularization?u=76281980&t=121)** Secondly, dropout is easy to implement and computationally inexpensive, making it an attractive option for regularizing neural networks.
>
> **[2:11](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/dropout-regularization?u=76281980&t=131)** Finally, dropout has been shown to improve the generalization of various types of neural networks, including feedforward networks, convolutional neural networks, and recurrent neural networks.
>
> **[2:24](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/dropout-regularization?u=76281980&t=144)** There are some limitations to dropout regularization.
>
> **[2:28](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/dropout-regularization?u=76281980&t=148)** Dropout can increase training time because each iteration uses a smaller, stochastically reduced version of the network, which may require more epochs to converge.
>
> **[2:39](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/dropout-regularization?u=76281980&t=159)** In certain architectures, such as highly optimized convolutional layers in CNNs, dropout may be less effective compared to other regularization techniques like batch normalization.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (1), finally, (1), require (1)
> **Definitions:** is a  (1), means that (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Applying dropout regularization to a deep learning model
> [LinkedIn Learning](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-dropout-regularization-to-a-deep-learning-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-dropout-regularization-to-a-deep-learning-model?u=76281980&t=0)** - [Instructor] In this video, you will learn how to apply dropout regularization to a deep learning model in order to reduce overfitting.
>
> **[0:09](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-dropout-regularization-to-a-deep-learning-model?u=76281980&t=9)** I'll be writing the code in the 02_07e file.
>
> **[0:14](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-dropout-regularization-to-a-deep-learning-model?u=76281980&t=14)** You can follow along by completing the empty code cells in the 02_07b file.
>
> **[0:21](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-dropout-regularization-to-a-deep-learning-model?u=76281980&t=21)** Make sure to run the previously written code to import and pre-process the data as well as to build and train the baseline model.
>
> **[0:30](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-dropout-regularization-to-a-deep-learning-model?u=76281980&t=30)** I've already done so.
>
> **[0:34](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-dropout-regularization-to-a-deep-learning-model?u=76281980&t=34)** Looking at the validation and training loss metrics curve, we see that the baseline model overfits against the training data.
>
> **[0:43](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-dropout-regularization-to-a-deep-learning-model?u=76281980&t=43)** A clear indicator of overfitting is a divergence we see in the training and validation loss metrics, which is visible in the training curves above.
>
> **[0:54](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-dropout-regularization-to-a-deep-learning-model?u=76281980&t=54)** To help minimize overfitting, let's try to apply dropout regularization to the baseline model.
>
> **[1:02](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-dropout-regularization-to-a-deep-learning-model?u=76281980&t=62)** Dropout regularization randomly deactivates a fraction of neurons during training.
>
> **[1:09](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-dropout-regularization-to-a-deep-learning-model?u=76281980&t=69)** This forces the network to learn robust features that do not depend too heavily on specific neurons.
>
> **[1:16](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-dropout-regularization-to-a-deep-learning-model?u=76281980&t=76)** To apply dropout regularization to the baseline model, we simply add a dropout layer after each of the hidden layers in our network.
>
> **[1:26](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-dropout-regularization-to-a-deep-learning-model?u=76281980&t=86)** Here we specify the dropout percentage as 0.5, which means that 50% of the neurons will be zeroed out during each forward pass.
>
> **[1:36](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-dropout-regularization-to-a-deep-learning-model?u=76281980&t=96)** To begin, we import dropout from tensorflow.keras.layers.
>
> **[1:43](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-dropout-regularization-to-a-deep-learning-model?u=76281980&t=103)** Then when we define the structure of our model, we include a dropout layer in between each of the dense layers.
>
> **[1:53](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-dropout-regularization-to-a-deep-learning-model?u=76281980&t=113)** Let's go ahead and run our code.
>
> **[1:57](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-dropout-regularization-to-a-deep-learning-model?u=76281980&t=117)** Next, we compile the regularized model.
>
> **[2:03](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-dropout-regularization-to-a-deep-learning-model?u=76281980&t=123)** Then we train the regularized model against our data.
>
> **[2:10](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-dropout-regularization-to-a-deep-learning-model?u=76281980&t=130)** Note that we specified 15 epochs.
>
> **[2:13](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-dropout-regularization-to-a-deep-learning-model?u=76281980&t=133)** So it's going to go through 15 training cycles.
>
> **[2:15](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-dropout-regularization-to-a-deep-learning-model?u=76281980&t=135)** The batch size is 128, and the validation split is 0.1.
>
> **[2:22](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-dropout-regularization-to-a-deep-learning-model?u=76281980&t=142)** So let's give our model some time to train.
>
> **[2:28](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-dropout-regularization-to-a-deep-learning-model?u=76281980&t=148)** So we're in the 13th epoch and the 14th, and now we're in the final epoch, 15.
>
> **[2:37](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-dropout-regularization-to-a-deep-learning-model?u=76281980&t=157)** So now that that model is done training, we can now plot the train and validation loss metrics to see what impact dropout had on the model.
>
> **[2:50](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-dropout-regularization-to-a-deep-learning-model?u=76281980&t=170)** So this time we see that the training and validation loss metrics start off a bit divergent, but then start to converge as training continues.
>
> **[2:59](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-dropout-regularization-to-a-deep-learning-model?u=76281980&t=179)** This indicates that dropouts regularization is helping the model to generalize better by preventing it from overfitting to the training data.
>
> **[3:10](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-dropout-regularization-to-a-deep-learning-model?u=76281980&t=190)** Excellent work.
>
> **[3:11](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-dropout-regularization-to-a-deep-learning-model?u=76281980&t=191)** You now know how to use dropouts regularization to reduce overfitting in a deep learning model in Python.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), pass (1)
> **CLI Commands:** make (1), python (1)
> **Versions:** 0.5 (1), 0.1 (1)
> **Definitions:** is a  (1), means that (1)
> **Best Practices:** make sure to (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)


### 3. Loss Functions and Optimization Algorithms

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Common loss functions in deep learning
> [LinkedIn Learning](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/common-loss-functions-in-deep-learning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/common-loss-functions-in-deep-learning?u=76281980&t=0)** - [Instructor] In machine learning, a loss function is a mathematical function that quantifies the error or difference between the predicted outputs of a model, and the actual target values in the training data.
>
> **[0:13](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/common-loss-functions-in-deep-learning?u=76281980&t=13)** In deep learning, loss functions serve as the foundation for training neural networks, as they provide the feedback or error necessary for the optimization process to update the model's parameters, which are the weights and the biases.
>
> **[0:27](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/common-loss-functions-in-deep-learning?u=76281980&t=27)** By minimizing the value of the loss function, the model learns to make predictions that are increasingly accurate over time.
>
> **[0:35](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/common-loss-functions-in-deep-learning?u=76281980&t=35)** Selecting an appropriate loss function is crucial, because it directly influences how a model learns and performs on specific tasks.
>
> **[0:44](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/common-loss-functions-in-deep-learning?u=76281980&t=44)** Such regression, binary classification, or multi-class classification.
>
> **[0:50](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/common-loss-functions-in-deep-learning?u=76281980&t=50)** For regression tasks where the goal is to predict continuous values, the mean squared error, or MSE loss function is a common choice.
>
> **[1:00](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/common-loss-functions-in-deep-learning?u=76281980&t=60)** MSE calculates the average of the square differences between the predicted values and the true values.
>
> **[1:07](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/common-loss-functions-in-deep-learning?u=76281980&t=67)** Mathematically, it is expressed as shown here, where YI represents the true values of the dependent variable in the training data, Y hat I represents the predictive values of the dependent variable, and N is a number of samples.
>
> **[1:23](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/common-loss-functions-in-deep-learning?u=76281980&t=83)** Squaring the differences ensures that the loss is always positive, and penalizes larger errors more heavily.
>
> **[1:30](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/common-loss-functions-in-deep-learning?u=76281980&t=90)** While MSE is widely used, it can be sensitive to outliers, as large deviations contribute disproportionately to the loss.
>
> **[1:40](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/common-loss-functions-in-deep-learning?u=76281980&t=100)** An alternative is the mean absolute error, MAE, which computes the average of the absolute differences between predictive values, and the true values.
>
> **[1:51](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/common-loss-functions-in-deep-learning?u=76281980&t=111)** MAE is more robust to outliers, but may converge slower than MSE during training.
>
> **[1:58](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/common-loss-functions-in-deep-learning?u=76281980&t=118)** For binary classification problems, where the output represents one of two possible classes, for example, zero or one, the binary cross-entropy loss function is commonly used.
>
> **[2:11](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/common-loss-functions-in-deep-learning?u=76281980&t=131)** This loss function measures the difference between the predicted probabilities, and the actual binary labels.
>
> **[2:18](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/common-loss-functions-in-deep-learning?u=76281980&t=138)** Mathematically, it is defined as shown here, where YI are the true binary labels, zero or one, and Y hat I are the predicted probabilities of the positive class.
>
> **[2:31](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/common-loss-functions-in-deep-learning?u=76281980&t=151)** Binary cross-entropy encourages a model to produce probabilities close to one for the positive class, and close to zero for the negative class.
>
> **[2:41](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/common-loss-functions-in-deep-learning?u=76281980&t=161)** This loss function is particularly well suited for tasks like spam detection, medical diagnosis, or fraud detection, where the outputs are the probabilities of either true or false, yes or no, or one or zero.
>
> **[2:55](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/common-loss-functions-in-deep-learning?u=76281980&t=175)** For multi-class classification problems, where the goal is to assign an input to one of several possible classes, the categorical cross-entropy loss is widely used.
>
> **[3:07](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/common-loss-functions-in-deep-learning?u=76281980&t=187)** Similar to binary cross-entropy, this loss function compares the predictive probability distribution over all classes with the actual class labels.
>
> **[3:17](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/common-loss-functions-in-deep-learning?u=76281980&t=197)** Mathematically, it is defined as shown here, where N is a number of samples, K is a number of classes, YIJ is a binary indicator for whether sample I belongs to class J, and Y hat IJ is the predicted probability for sample I being in Class J.
>
> **[3:39](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/common-loss-functions-in-deep-learning?u=76281980&t=219)** Categorical cross-entropy is particularly effective for tasks like image classification, where the model predicts one class out of many possible categories.
>
> **[3:49](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/common-loss-functions-in-deep-learning?u=76281980&t=229)** Categorical cross cross-entropy assumes that the values of the dependent variable are encoded as one hat vectors.
>
> **[3:57](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/common-loss-functions-in-deep-learning?u=76281980&t=237)** However, in situations where these values are encoded as integers, a simplified version of categorical cross-entropy, known as sparse categorical cross-entropy, can be used instead.
>
> **[4:11](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/common-loss-functions-in-deep-learning?u=76281980&t=251)** In addition to the commonly used loss functions introduced here, advanced deep learning tasks often require specialized loss functions tailored to their unique challenges and objectives.
>
> **[4:23](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/common-loss-functions-in-deep-learning?u=76281980&t=263)** For instance, in object detection or segmentation tasks, the intersection over union loss, or dice loss are used to evaluate the overlap between predicted and ground truth bounding boxes, or masks.
>
> **[4:38](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/common-loss-functions-in-deep-learning?u=76281980&t=278)** For sequence to sequence tasks like machine translation, the sequence loss is often employed to handle variable length predictions.
>
> **[4:47](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/common-loss-functions-in-deep-learning?u=76281980&t=287)** Choosing the right loss function is essential for ensuring that a deep learning model learns effectively for the given task.
>
> **[4:54](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/common-loss-functions-in-deep-learning?u=76281980&t=294)** The loss function serves as a driving force for model training, guiding the optimization process to minimize error, and maximize predictive accuracy.

> [!info]- Semantic Content
>
> **Code Keywords:** function (11), class. (2), class, (1), require (1)
> **Definitions:** is a  (6), defined as (2), known as (1)
> **Env Vars:** mse (4), mae (2), yij (1)
> **Analogies:** for example (1), similar to (1), for instance (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### Batch gradient descent
> [LinkedIn Learning](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/batch-gradient-descent?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/batch-gradient-descent?u=76281980&t=0)** - [Instructor] In deep learning, optimization algorithms play a fundamental role in how neural networks are trained.
>
> **[0:07](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/batch-gradient-descent?u=76281980&t=7)** They govern how the weights and biases of a model are updated during each iteration of training to minimize the loss function.
>
> **[0:16](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/batch-gradient-descent?u=76281980&t=16)** By iteratively adjusting parameters based on the gradient of the loss function, these algorithms aim to find the optimal values that yield the best predictions.
>
> **[0:26](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/batch-gradient-descent?u=76281980&t=26)** Kairos provides a variety of optimization algorithms, ranging from simple gradient-based methods to more advanced adaptive approaches.
>
> **[0:36](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/batch-gradient-descent?u=76281980&t=36)** Each method has its unique strengths and limitations, and understanding these differences is essential for choosing the right approach.
>
> **[0:45](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/batch-gradient-descent?u=76281980&t=45)** One of the most fundamental optimization algorithms is batch gradient descent.
>
> **[0:50](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/batch-gradient-descent?u=76281980&t=50)** It calculates the gradients of the loss function Using the entire training dataset in a single pass, then uses this gradient to update the model's parameters.
>
> **[1:01](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/batch-gradient-descent?u=76281980&t=61)** Imagine trail running downhill.
>
> **[1:03](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/batch-gradient-descent?u=76281980&t=63)** Batch gradient descent calculates the best path down the hill by considering all possible routes at once.
>
> **[1:11](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/batch-gradient-descent?u=76281980&t=71)** This comprehensive approach ensures that each update moves the model closer to the optimal solution in a stable and predictable manner.
>
> **[1:20](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/batch-gradient-descent?u=76281980&t=80)** One of the significant benefits of batch gradient descent is its stability.
>
> **[1:25](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/batch-gradient-descent?u=76281980&t=85)** Since it uses all the data available, the updates to the model's parameters are consistent, and moves steadily towards minimizing the loss function.
>
> **[1:34](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/batch-gradient-descent?u=76281980&t=94)** This means that convergence towards the minimum loss is smooth and can be easy to track and predict.
>
> **[1:42](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/batch-gradient-descent?u=76281980&t=102)** Another advantage is its deterministic nature.
>
> **[1:45](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/batch-gradient-descent?u=76281980&t=105)** Given the same dataset and initial conditions, batch gradient descent will produce the same updates every time you run it.
>
> **[1:53](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/batch-gradient-descent?u=76281980&t=113)** This predictability can be beneficial when you need reproducible results, such as in academic research or when verifying the consistency of a model.
>
> **[2:04](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/batch-gradient-descent?u=76281980&t=124)** Moreover, batch gradient descent is straightforward to implement and understand.
>
> **[2:09](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/batch-gradient-descent?u=76281980&t=129)** Its algorithmic simplicity makes it an excellent starting point for those new to deep learning and optimization techniques.
>
> **[2:18](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/batch-gradient-descent?u=76281980&t=138)** However, batch gradient descent is not without its limitations.
>
> **[2:22](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/batch-gradient-descent?u=76281980&t=142)** One of the primary drawbacks is that it can be computationally intensive.
>
> **[2:27](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/batch-gradient-descent?u=76281980&t=147)** Processing the entire dataset in each iteration requires significant computational resources, especially when dealing with large datasets common in real-world applications.
>
> **[2:38](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/batch-gradient-descent?u=76281980&t=158)** This can lead to longer training times which may not be practical in time-sensitive projects.
>
> **[2:45](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/batch-gradient-descent?u=76281980&t=165)** Additionally, the requirement to load the entire dataset into memory for each update can be problematic.
>
> **[2:52](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/batch-gradient-descent?u=76281980&t=172)** For massive data sets, this might exceed the available memory capacity, leading to system slowdowns or crashes.
>
> **[3:00](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/batch-gradient-descent?u=76281980&t=180)** This necessitates the use of high-performance computing resources, which may not be accessible to everyone.
>
> **[3:07](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/batch-gradient-descent?u=76281980&t=187)** Another limitation is the possibility of getting stuck in local minima.
>
> **[3:12](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/batch-gradient-descent?u=76281980&t=192)** In complex non-convex loss services, typical of deep learning models, batch gradient descent may converge to a suboptimal solution.
>
> **[3:22](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/batch-gradient-descent?u=76281980&t=202)** Since it takes the average gradient over the entire dataset, it may not have the flexibility to escape these local minima and find a better global minima.

> [!info]- Semantic Content
>
> **Code Keywords:** function (4), yield (1), pass (1)
> **CLI Commands:** find (2)
> **Analogies:** imagine (1), such as (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### Stochastic gradient descent (SGD)
> [LinkedIn Learning](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/stochastic-gradient-descent-sgd?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/stochastic-gradient-descent-sgd?u=76281980&t=0)** - [Instructor] Stochastic gradient descent, or SGD, takes a different approach from batch gradient descent by computing gradients and updating parameters for each individual training example rather than the entire dataset.
>
> **[0:13](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/stochastic-gradient-descent-sgd?u=76281980&t=13)** Think of SGD as taking quick small steps down the hill, adjusting your path based on immediate surroundings rather than considering the entire landscape.
>
> **[0:23](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/stochastic-gradient-descent-sgd?u=76281980&t=23)** This method introduces a level of randomness or noise into the optimization process.
>
> **[0:30](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/stochastic-gradient-descent-sgd?u=76281980&t=30)** One of the key benefits of stochastic gradient descent is that each update is quick because it processes only one sample at a time.
>
> **[0:38](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/stochastic-gradient-descent-sgd?u=76281980&t=38)** This can significantly speed up the iteration process, allowing the model to start learning patterns from the data more rapidly.
>
> **[0:45](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/stochastic-gradient-descent-sgd?u=76281980&t=45)** This immediacy can be particularly useful in online learning scenarios where data arrives in streams.
>
> **[0:53](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/stochastic-gradient-descent-sgd?u=76281980&t=53)** SGD also requires less memory since it only needs to store a single data sample and the corresponding gradients.
>
> **[1:00](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/stochastic-gradient-descent-sgd?u=76281980&t=60)** This makes it more suitable for situations where computational resources are limited or when dealing with extremely large datasets that cannot be loaded into memory all at once.
>
> **[1:12](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/stochastic-gradient-descent-sgd?u=76281980&t=72)** An interesting advantage of the randomness in SGD is the ability to escape local minima.
>
> **[1:18](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/stochastic-gradient-descent-sgd?u=76281980&t=78)** The noise in the updates can help the algorithm jump out of suboptimal solutions and potentially find a better global minimum.
>
> **[1:26](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/stochastic-gradient-descent-sgd?u=76281980&t=86)** This makes SGD particularly useful in training deep learning models with complex loss surfaces where local minima are common obstacles.
>
> **[1:37](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/stochastic-gradient-descent-sgd?u=76281980&t=97)** However, the high variance in updates is also one of SGD's significant limitations.
>
> **[1:44](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/stochastic-gradient-descent-sgd?u=76281980&t=104)** Because each update is based on a single data point, the updates can fluctuate significantly.
>
> **[1:50](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/stochastic-gradient-descent-sgd?u=76281980&t=110)** This can lead to a less stable convergence path, making it harder to predict when the model reached the minimum loss.
>
> **[1:57](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/stochastic-gradient-descent-sgd?u=76281980&t=117)** The optimization path might resemble a zigzag pattern, potentially overshooting the minimum and requiring more iterations to converge.
>
> **[2:07](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/stochastic-gradient-descent-sgd?u=76281980&t=127)** Another drawback is that SGD may require more iterations to converge compared to batch gradient descent.
>
> **[2:14](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/stochastic-gradient-descent-sgd?u=76281980&t=134)** The noisy updates can cause the optimization process to take a more erratic path towards the minimum, potentially increasing the overall training time.
>
> **[2:23](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/stochastic-gradient-descent-sgd?u=76281980&t=143)** This can be inefficient, especially when precise convergence is required.
>
> **[2:29](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/stochastic-gradient-descent-sgd?u=76281980&t=149)** Additionally, processing one sample at a time limits opportunities for parallel computing.
>
> **[2:36](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/stochastic-gradient-descent-sgd?u=76281980&t=156)** In modern computing environments where parallelization is key to efficiency, this can be a significant disadvantage.
>
> **[2:43](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/stochastic-gradient-descent-sgd?u=76281980&t=163)** The inability to leverage multi-core processors or GPUs effectively means that SGD might not fully utilize available computational resources.

> [!info]- Semantic Content
>
> **Env Vars:** sgd (8)
> **CLI Commands:** find (1)
> **Code Keywords:** require (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### Mini-batch gradient descent
> [LinkedIn Learning](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/mini-batch-gradient-descent?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/mini-batch-gradient-descent?u=76281980&t=0)** - [Presenter] Mini-batch gradient descent aims to combine the advantages of both batch gradient descent and stochastic gradient descent by updating the model parameters based on the gradient computed from a small batch of training examples.
>
> **[0:14](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/mini-batch-gradient-descent?u=76281980&t=14)** This batch size is typically larger than one as an SGD, but smaller than the total dataset as in batch gradient descent.
>
> **[0:25](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/mini-batch-gradient-descent?u=76281980&t=25)** Picture this as navigating down the hill using information from a small group of nearby paths.
>
> **[0:31](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/mini-batch-gradient-descent?u=76281980&t=31)** This approach allows for both the speed of SGD and the stability of batch gradient descent.
>
> **[0:38](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/mini-batch-gradient-descent?u=76281980&t=38)** One of the primary benefits of mini-batch gradient descent is its computational efficiency.
>
> **[0:44](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/mini-batch-gradient-descent?u=76281980&t=44)** By processing batches of data, it leverages the power of vectorization and optimized hardware like GPUs and TPUs.
>
> **[0:53](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/mini-batch-gradient-descent?u=76281980&t=53)** This can significantly speed up computations compared to processing single samples as in SGD.
>
> **[1:00](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/mini-batch-gradient-descent?u=76281980&t=60)** The use of many batches allows the algorithm to make efficient use of memory hierarchies and parallel processing capabilities, reducing the time per iteration.
>
> **[1:11](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/mini-batch-gradient-descent?u=76281980&t=71)** Using a batch of samples also helps reduce the variance in the parameter updates.
>
> **[1:16](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/mini-batch-gradient-descent?u=76281980&t=76)** This leads to more stable convergence than what is typically seen with SGD.
>
> **[1:21](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/mini-batch-gradient-descent?u=76281980&t=81)** The updates are less noisy because they're based on an average over multiple samples, which smooths out the random fluctuations.
>
> **[1:29](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/mini-batch-gradient-descent?u=76281980&t=89)** This balance can result in faster overall convergence compared to both batch gradient descent and the stochastic gradient descent algorithm.
>
> **[1:39](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/mini-batch-gradient-descent?u=76281980&t=99)** Mini-batch gradient descent also offers flexibility in choosing the batch size.
>
> **[1:44](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/mini-batch-gradient-descent?u=76281980&t=104)** This allows you to adjust the batch size based on the available computational resources and the specific requirements of your problem.
>
> **[1:53](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/mini-batch-gradient-descent?u=76281980&t=113)** Smaller batches can be used when memory is limited, while larger batches can exploit more computational power when available.
>
> **[2:01](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/mini-batch-gradient-descent?u=76281980&t=121)** This adaptability makes many batch gradient descent a versatile tool in the deep learning toolkit.
>
> **[2:09](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/mini-batch-gradient-descent?u=76281980&t=129)** However, choosing the optimal batch size can be tricky and may require experimentation.
>
> **[2:15](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/mini-batch-gradient-descent?u=76281980&t=135)** If the batch size is too small, the updates may still be noisy and lead to unstable convergence similar to SGD.
>
> **[2:23](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/mini-batch-gradient-descent?u=76281980&t=143)** If it's too large, you may lose the computational benefits and face memory constraints similar to batch gradient descent.
>
> **[2:31](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/mini-batch-gradient-descent?u=76281980&t=151)** Finding the right balance is crucial, and can depend on factors like the complexity of the model, the size of the dataset, and the specifics of the hardware being used.
>
> **[2:43](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/mini-batch-gradient-descent?u=76281980&t=163)** Another limitation is that larger batch sizes require more memory.
>
> **[2:48](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/mini-batch-gradient-descent?u=76281980&t=168)** This can become a problem when dealing with very large datasets or when working with models that have a large number of parameters.
>
> **[2:55](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/mini-batch-gradient-descent?u=76281980&t=175)** In such cases, even mini-batch gradient descent can become resource intensive, potentially necessitating the use of specialized hardware or cloud computing resources.
>
> **[3:07](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/mini-batch-gradient-descent?u=76281980&t=187)** Lastly, mini-batch gradient descent may still converge to a suboptimal solution if the batch size is not appropriately chosen.
>
> **[3:15](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/mini-batch-gradient-descent?u=76281980&t=195)** If the batch size does not adequately capture the diversity of the data, the computed gradients may not accurately reflect the true gradients of the loss function, affecting the convergence and the final model performance.
>
> **[3:29](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/mini-batch-gradient-descent?u=76281980&t=209)** This issue underscores the importance of careful data pre-processing and batch selection strategies.

> [!info]- Semantic Content
>
> **Env Vars:** sgd (5)
> **Code Keywords:** require (2), function (1)
> **Analogies:** similar to (2), picture (1)
> **CLI Commands:** make (1)
> **Speakers:** - [presenter] (1)

#### Adaptive Gradient Algorithm (AdaGrad)
> [LinkedIn Learning](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/adaptive-gradient-algorithm-adagrad?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/adaptive-gradient-algorithm-adagrad?u=76281980&t=0)** - [Instructor] As models become deeper and datasets larger, the challenges in training these models efficiently and effectively increase.
>
> **[0:09](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/adaptive-gradient-algorithm-adagrad?u=76281980&t=9)** The choice of optimization algorithm is crucial to the success of the training process as it governs how the weights and biases of a model are updated during each iteration of training to minimize the loss function.
>
> **[0:22](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/adaptive-gradient-algorithm-adagrad?u=76281980&t=22)** In the context of optimization, learning rate is a hyper parameter that controls the size of the steps and optimize it takes toward minimizing the loss function during training.
>
> **[0:33](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/adaptive-gradient-algorithm-adagrad?u=76281980&t=33)** In other words, it determines how quickly or slowly a neural network updates its parameters in response to the estimated error each time the model weights are updated.
>
> **[0:45](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/adaptive-gradient-algorithm-adagrad?u=76281980&t=45)** A learning rate that's too high can cause the training to converge too quickly to a suboptimal solution or even diverge.
>
> **[0:53](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/adaptive-gradient-algorithm-adagrad?u=76281980&t=53)** Conversely, a learning rate that's too low can make the training process very slow, potentially getting stuck in local minimum or subtle points.
>
> **[1:04](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/adaptive-gradient-algorithm-adagrad?u=76281980&t=64)** Finding the right learning rate is crucial for effective and efficient training.
>
> **[1:10](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/adaptive-gradient-algorithm-adagrad?u=76281980&t=70)** Traditional optimization algorithms like sarcastic gradient descent use a fixed learning rate, which can be challenging to tune and may not be optimal throughout the learning process.
>
> **[1:21](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/adaptive-gradient-algorithm-adagrad?u=76281980&t=81)** Adaptive optimizes, on the other hand, adjust the learning rate dynamically for each parameter based on the history of gradients, allowing for more efficient and faster convergence.
>
> **[1:34](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/adaptive-gradient-algorithm-adagrad?u=76281980&t=94)** There are a variety of adaptive optimizers we can choose from when training a deep learning model.
>
> **[1:41](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/adaptive-gradient-algorithm-adagrad?u=76281980&t=101)** Let's begin with AdaGrad, short for adaptive gradient algorithm.
>
> **[1:46](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/adaptive-gradient-algorithm-adagrad?u=76281980&t=106)** AdaGrad adjusts the learning rate for each parameter individually by scaling it inversely proportional to the square root of the sum of all the historical squared gradients for that parameter.
>
> **[1:58](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/adaptive-gradient-algorithm-adagrad?u=76281980&t=118)** This means that parameters associated with frequently occurring features receive smaller updates, while those with infrequent features receive larger updates.
>
> **[2:10](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/adaptive-gradient-algorithm-adagrad?u=76281980&t=130)** This property makes AdaGrad particularly well-suited for dealing with sparse data and natural language processing tasks, where some features occur much less frequently than others.
>
> **[2:22](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/adaptive-gradient-algorithm-adagrad?u=76281980&t=142)** One of the key benefits of AdaGrad is its ability to adapt the learning rate for each parameter.
>
> **[2:28](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/adaptive-gradient-algorithm-adagrad?u=76281980&t=148)** This eliminates the need to manually tune the learning rate, which can be a time-consuming and challenging process.
>
> **[2:35](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/adaptive-gradient-algorithm-adagrad?u=76281980&t=155)** By automatically adjusting the learning rates, AdaGrad simplifies the optimization process and can lead to faster convergence.
>
> **[2:44](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/adaptive-gradient-algorithm-adagrad?u=76281980&t=164)** AdaGrad's adaptive learning rates are especially effective when dealing with sparse data.
>
> **[2:50](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/adaptive-gradient-algorithm-adagrad?u=76281980&t=170)** In scenarios where some parameters are updated infrequently, AdaGrad compensates by increasing their learning rates.
>
> **[2:58](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/adaptive-gradient-algorithm-adagrad?u=76281980&t=178)** This ensures that all parameters, regardless of how often they're updated, contribute meaningfully to the learning process.
>
> **[3:07](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/adaptive-gradient-algorithm-adagrad?u=76281980&t=187)** Moreover, AdaGrad is relatively simple to implement.
>
> **[3:11](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/adaptive-gradient-algorithm-adagrad?u=76281980&t=191)** Its algorithm builds upon standard gradient descent by incorporating a straightforward adjustment through learning rates based on the accumulative squared gradients.
>
> **[3:21](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/adaptive-gradient-algorithm-adagrad?u=76281980&t=201)** This simplicity makes it accessible and easy to integrate into existing machine learning frameworks.
>
> **[3:29](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/adaptive-gradient-algorithm-adagrad?u=76281980&t=209)** Despite its advantages, AdaGrad has some notable limitations.
>
> **[3:34](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/adaptive-gradient-algorithm-adagrad?u=76281980&t=214)** One of the primary issues is learning rates decay.
>
> **[3:37](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/adaptive-gradient-algorithm-adagrad?u=76281980&t=217)** Since AdaGrad accumulates the square gradients over all iterations, the sum in the denominator can become very large over time.
>
> **[3:46](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/adaptive-gradient-algorithm-adagrad?u=76281980&t=226)** This causes the effective learning rates to shrink and eventually become very, very small.
>
> **[3:52](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/adaptive-gradient-algorithm-adagrad?u=76281980&t=232)** When this happens, the algorithm may stop making meaningful progress before reaching the minimum of the loss function.
>
> **[4:02](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/adaptive-gradient-algorithm-adagrad?u=76281980&t=242)** Another limitation is that AdaGrad lacks a mechanism to reset or re-skill the learning rates once they have decayed.
>
> **[4:09](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/adaptive-gradient-algorithm-adagrad?u=76281980&t=249)** This means that the diminishing learning rates are an inherent part of the algorithm, and there's no built-in method to counteract this effect.
>
> **[4:18](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/adaptive-gradient-algorithm-adagrad?u=76281980&t=258)** As a result, AdaGrad might underperform in scenarios where continuous learning is required over a long period.
>
> **[4:26](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/adaptive-gradient-algorithm-adagrad?u=76281980&t=266)** Additionally, AdaGrad requires storing some of the squares of past gradients for each parameter.
>
> **[4:33](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/adaptive-gradient-algorithm-adagrad?u=76281980&t=273)** For models with a large number of parameters, this can lead to increased memory consumption, which might be a constraint in resource-limited environments.

> [!info]- Semantic Content
>
> **Definitions:** means that (2), is a  (1), in other words (1), short for (1)
> **Code Keywords:** function (3), let (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### Root Mean Square Propagation (RMSProp)
> [LinkedIn Learning](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/root-mean-square-propagation-rmsprop?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/root-mean-square-propagation-rmsprop?u=76281980&t=0)** - [Instructor] RMSProp, which stands for root mean squared propagation, was developed to address the diminishing learning rate problem observed in AdaGrad.
>
> **[0:09](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/root-mean-square-propagation-rmsprop?u=76281980&t=9)** It modifies AdaGrad by introducing an exponential decay average, or moving average, of the squared gradients.
>
> **[0:18](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/root-mean-square-propagation-rmsprop?u=76281980&t=18)** Instead of accumulating all past squared gradients, RMSProp keeps a running average that decays over time.
>
> **[0:26](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/root-mean-square-propagation-rmsprop?u=76281980&t=26)** This allows the algorithm to forget older gradients and focus on more recent ones.
>
> **[0:32](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/root-mean-square-propagation-rmsprop?u=76281980&t=32)** One of the significant benefits of RMSProp is its ability to maintain adaptive learning rates without the issue of the learning rates decaying too quickly.
>
> **[0:43](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/root-mean-square-propagation-rmsprop?u=76281980&t=43)** By using an exponential moving average, RMSProp ensures that the accumulated squared gradients do not grow indefinitely, preventing the learning rates from becoming too small.
>
> **[0:56](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/root-mean-square-propagation-rmsprop?u=76281980&t=56)** RMSProp is particularly effective in training models on non-stationary objectives, where the underlying data distribution changes over time.
>
> **[1:06](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/root-mean-square-propagation-rmsprop?u=76281980&t=66)** It also handles noisy and sparse gradients well, making it suitable for training recurrent neural networks and other complex architectures.
>
> **[1:16](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/root-mean-square-propagation-rmsprop?u=76281980&t=76)** Furthermore, RMSProp is relatively easy to implement.
>
> **[1:21](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/root-mean-square-propagation-rmsprop?u=76281980&t=81)** It builds upon AdaGrad by adding a simple modification to the way the squared gradients are accumulated.
>
> **[1:28](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/root-mean-square-propagation-rmsprop?u=76281980&t=88)** This makes it a practical choice for those looking to improve upon AdaGrad's limitations without introducing significant complexity.
>
> **[1:38](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/root-mean-square-propagation-rmsprop?u=76281980&t=98)** Despite its advantages, RMSProp introduces additional hyperparameters, such as the decay rate, which need to be carefully tuned.
>
> **[1:48](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/root-mean-square-propagation-rmsprop?u=76281980&t=108)** The performance of RMSProp can be sensitive to the choice of these hyperparameters, and improper tuning can lead to suboptimal results or convergence issues.
>
> **[2:00](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/root-mean-square-propagation-rmsprop?u=76281980&t=120)** In some cases, RMSProp may not converge or may converge to a suboptimal solution, especially if the hyperparameters are not well chosen.
>
> **[2:11](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/root-mean-square-propagation-rmsprop?u=76281980&t=131)** This can be a challenge for practitioners who may not have the time or resources to perform extensive hyperparameter optimization.
>
> **[2:21](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/root-mean-square-propagation-rmsprop?u=76281980&t=141)** Moreover, RMSProp lacks a strong theoretical foundation compared to some other optimizers.
>
> **[2:28](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/root-mean-square-propagation-rmsprop?u=76281980&t=148)** This can make it harder to predict its behavior in certain scenarios and may pose challenges when trying to understand or debug the training process.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Adaptive Delta (AdaDelta)
> [LinkedIn Learning](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/adaptive-delta-adadelta?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/adaptive-delta-adadelta?u=76281980&t=0)** - [Instructor] Adaptive Delta, commonly known as AdaDelta, addresses AdaGrad's diminishing learning rate problem by restricting the window of accumulated past gradients to a fixed size.
>
> **[0:13](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/adaptive-delta-adadelta?u=76281980&t=13)** Instead of accumulating all past squared gradients, AdaDelta uses a moving average of the gradients, similar to RMSprop, however, it goes a step further by adapting the update step size, effectively, eliminating the need for a default learning rate.
>
> **[0:31](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/adaptive-delta-adadelta?u=76281980&t=31)** AdaDelta adapts learning rates based on the moving window of gradient updates, addressing the diminishing learning rate issue observed in AdaGrad.
>
> **[0:41](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/adaptive-delta-adadelta?u=76281980&t=41)** By focusing on recent gradients, it maintains a consistent learning rate throughout training, facilitating better convergence.
>
> **[0:50](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/adaptive-delta-adadelta?u=76281980&t=50)** Additionally, AdaDelta performs well on problems with sparse gradients, similar to AdaGrad, making it suitable for various applications in natural language processing on other domains where data sparsity is a concern.
>
> **[1:06](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/adaptive-delta-adadelta?u=76281980&t=66)** While AdaDelta addresses some of the limitations of AdaGrad, it introduces additional complexity to the optimization algorithm.
>
> **[1:14](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/adaptive-delta-adadelta?u=76281980&t=74)** It's calculations are more intricate, which can make it more challenging to understand and implement correctly, especially for those new to deep learning.
>
> **[1:24](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/adaptive-delta-adadelta?u=76281980&t=84)** AdaDelta is less widely used compared to optimizers like Adam and RMSprop.
>
> **[1:30](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/adaptive-delta-adadelta?u=76281980&t=90)** As a result, there may be less community support, fewer tutorials, and limited empirical studies on its performance across different types of problems.
>
> **[1:39](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/adaptive-delta-adadelta?u=76281980&t=99)** This can make it harder to find the resources when troubleshooting or optimizing models using AdaDelta.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2), find (1)
> **Definitions:** known as (1), is a  (1)
> **Analogies:** similar to (2)
> **Speakers:** - [instructor] (1)

#### Adaptive Moment Estimation (Adam)
> [LinkedIn Learning](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/adaptive-momentum-estimation-adam?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/adaptive-momentum-estimation-adam?u=76281980&t=0)** - [Instructor] ADAM, which stands for Adaptive Momentum Estimation, combines the ideas of RMSProp and momentum.
>
> **[0:09](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/adaptive-momentum-estimation-adam?u=76281980&t=9)** It maintains exponentially-decaying averages of past gradients, known as first moment estimates, and squared gradients, known as second moment estimates.
>
> **[0:19](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/adaptive-momentum-estimation-adam?u=76281980&t=19)** By doing so, ADAM adapts the learning rate for each parameter and incorporates momentum to accelerate convergence and smooth out the optimization path.
>
> **[0:29](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/adaptive-momentum-estimation-adam?u=76281980&t=29)** Momentum can be thought of as adding inertia to the optimization process.
>
> **[0:34](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/adaptive-momentum-estimation-adam?u=76281980&t=34)** Instead of making updates solely based on the current gradient, it also considers the direction and magnitude of recent updates.
>
> **[0:42](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/adaptive-momentum-estimation-adam?u=76281980&t=42)** This allows the optimization process to maintain momentum in the direction of consistent gradient descent.
>
> **[0:50](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/adaptive-momentum-estimation-adam?u=76281980&t=50)** ADAM is designed to be competitionally efficient, have little memory requirements, and be well-suited for problems with large data and parameters.
>
> **[0:59](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/adaptive-momentum-estimation-adam?u=76281980&t=59)** It has become one of the most popular optimizers in deep learning due to its robust performance across a wide range of applications.
>
> **[1:07](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/adaptive-momentum-estimation-adam?u=76281980&t=67)** In fact, it is a good default choice for most problems.
>
> **[1:12](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/adaptive-momentum-estimation-adam?u=76281980&t=72)** One of the primary benefits of ADAM, this is adaptive learning rates combined with momentum.
>
> **[1:18](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/adaptive-momentum-estimation-adam?u=76281980&t=78)** By considering both the first and second moments of the gradients, ADAM adjust the learning rates more effectively and can converge faster than other optimizers.
>
> **[1:29](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/adaptive-momentum-estimation-adam?u=76281980&t=89)** This makes it particularly useful for training deep neural networks and models with large parameter spaces.
>
> **[1:36](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/adaptive-momentum-estimation-adam?u=76281980&t=96)** ADAM often requires less tuning of hyperparameters, compared to RMSProp and AdaGrad.
>
> **[1:43](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/adaptive-momentum-estimation-adam?u=76281980&t=103)** The default settings for its hyperparameters generally work well across a wide range of problems, making it a more convenient choice for practitioners who may not have the time or resources for extensive hyperparameter optimization.
>
> **[1:59](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/adaptive-momentum-estimation-adam?u=76281980&t=119)** Additionally, ADAM is suitable for training large-scale neural networks and handling large datasets.
>
> **[2:06](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/adaptive-momentum-estimation-adam?u=76281980&t=126)** It efficiently utilizes computational resources and can handle high dimensional parameter spaces effectively.
>
> **[2:14](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/adaptive-momentum-estimation-adam?u=76281980&t=134)** Its ability to converge quickly and efficiently has made it a standard optimizer in many deep learning frameworks.
>
> **[2:22](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/adaptive-momentum-estimation-adam?u=76281980&t=142)** Despite its widespread use, ADAM is not without limitations.
>
> **[2:27](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/adaptive-momentum-estimation-adam?u=76281980&t=147)** One of the concerns is the potential for overfitting due due to its fast convergence.
>
> **[2:33](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/adaptive-momentum-estimation-adam?u=76281980&t=153)** If early stopping or regularization techniques are not properly applied, the model may fit the training data too closely and perform poorly on unseen data.
>
> **[2:44](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/adaptive-momentum-estimation-adam?u=76281980&t=164)** This necessitates careful monitoring of validation metrics during training.
>
> **[2:49](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/adaptive-momentum-estimation-adam?u=76281980&t=169)** Also, ADAM requires additional memory to store the first and second moment estimates for each parameter.
>
> **[2:56](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/adaptive-momentum-estimation-adam?u=76281980&t=176)** For very large models, this can lead to increased memory usage, which might be a constraint in some environments, especially when using limited hardware resources.

> [!info]- Semantic Content
>
> **Env Vars:** adam (9)
> **Definitions:** known as (2), is a  (1)
> **Speakers:** - [instructor] (1)


### 4. Hyperparameter Tuning Techniques

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Parameters versus hyperparameters
> [LinkedIn Learning](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/parameters-versus-hyperparameters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/parameters-versus-hyperparameters?u=76281980&t=0)** - [Instructor] In machine learning and deep learning, parameters and hyperparameters are fundamental concepts that play distinct roles in model design, training, and optimization.
>
> **[0:12](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/parameters-versus-hyperparameters?u=76281980&t=12)** Parameters are the internal variables of a model that are learned from the training data during the training process.
>
> **[0:18](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/parameters-versus-hyperparameters?u=76281980&t=18)** These are the values that the model adjusts to fit the data and make accurate predictions.
>
> **[0:25](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/parameters-versus-hyperparameters?u=76281980&t=25)** Parameters are not set manually.
>
> **[0:27](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/parameters-versus-hyperparameters?u=76281980&t=27)** Instead, they're optimized by the learning algorithm to minimize the loss function, which measures the difference between the model's predictions and the actual data.
>
> **[0:37](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/parameters-versus-hyperparameters?u=76281980&t=37)** For example, consider a simple linear regression model that predicts house prices based on square footage.
>
> **[0:45](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/parameters-versus-hyperparameters?u=76281980&t=45)** The model can be represented by the equation shown here, where Y is the predicted house price, X is the input feature square footage, W is the weight or slope of the line, and B, is the bias, also known as the Y intercept.
>
> **[1:03](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/parameters-versus-hyperparameters?u=76281980&t=63)** In this equation, W and B are the parameters.
>
> **[1:08](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/parameters-versus-hyperparameters?u=76281980&t=68)** During training, the model adjusts W and B to minimize the loss, which represents the difference between the predicted prices and the actual prices in the training dataset.
>
> **[1:19](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/parameters-versus-hyperparameters?u=76281980&t=79)** Now let's look at a slightly more complex example involving a neural network.
>
> **[1:25](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/parameters-versus-hyperparameters?u=76281980&t=85)** Suppose we're building a neural network to recognize handwritten digits.
>
> **[1:31](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/parameters-versus-hyperparameters?u=76281980&t=91)** The training dataset contains 70,000 images of handwritten digits that range in value from zero to nine.
>
> **[1:39](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/parameters-versus-hyperparameters?u=76281980&t=99)** Each image is 28 by 28 pixels, resulting in 784 input features per image.
>
> **[1:48](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/parameters-versus-hyperparameters?u=76281980&t=108)** Our neural network could have an architecture similar to the one shown here, an input layer with 784 neurons, one for each pixel, two hidden layers with 512 neurons and 128 neurons, and an output layer with 10 neurons, one for each digit class from zero to nine.
>
> **[2:11](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/parameters-versus-hyperparameters?u=76281980&t=131)** In this network, the parameters consist of the weights and biases.
>
> **[2:16](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/parameters-versus-hyperparameters?u=76281980&t=136)** Each connection between neurons has an associated weight.
>
> **[2:20](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/parameters-versus-hyperparameters?u=76281980&t=140)** Between the input layer and the first hidden layer, there are 784 times 512 weights.
>
> **[2:27](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/parameters-versus-hyperparameters?u=76281980&t=147)** Between the first hidden layer and the second hidden layer, there are 512 times 128 weights.
>
> **[2:34](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/parameters-versus-hyperparameters?u=76281980&t=154)** Finally, between the hidden layer and the output layer, there are 128 times 10 weights.
>
> **[2:42](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/parameters-versus-hyperparameters?u=76281980&t=162)** Each neuron in the hidden and output layers also has a bias term, so there are 512 biases in the first hidden layer, 128 biases in the second hidden layer, and 10 biases in the output layer.
>
> **[2:59](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/parameters-versus-hyperparameters?u=76281980&t=179)** These weights and biases are adjusted during training using an optimization algorithm like stochastic gradient descent.
>
> **[3:08](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/parameters-versus-hyperparameters?u=76281980&t=188)** The goal is to find optimal values for these parameters that minimize the loss function.
>
> **[3:15](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/parameters-versus-hyperparameters?u=76281980&t=195)** Now that we know what parameters are, let's discuss hyperparameters.
>
> **[3:20](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/parameters-versus-hyperparameters?u=76281980&t=200)** Hyperparameters are external configurations set before the training process begins.
>
> **[3:26](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/parameters-versus-hyperparameters?u=76281980&t=206)** Unlike model parameters which are adjusted and learned directly from the training data during the model's training process, hyperparameters govern the behavior of the training algorithm and the overall model architecture, but are not themselves learned from the data.
>
> **[3:42](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/parameters-versus-hyperparameters?u=76281980&t=222)** They often require experimentation and tuning to achieve optimal performance.
>
> **[3:48](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/parameters-versus-hyperparameters?u=76281980&t=228)** We can also think of the difference between parameters and hyperparameters in the context of building a house.
>
> **[3:56](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/parameters-versus-hyperparameters?u=76281980&t=236)** Parameters are like the materials used in construction, bricks, cement, wood.
>
> **[4:02](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/parameters-versus-hyperparameters?u=76281980&t=242)** The quality and arrangement of these materials determine the strength and stability of the house.
>
> **[4:08](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/parameters-versus-hyperparameters?u=76281980&t=248)** Hyperparameters are like the architectural blueprint, the design decisions such as the number of rooms, the layout, the type of foundation.
>
> **[4:17](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/parameters-versus-hyperparameters?u=76281980&t=257)** These decisions guide how the house is built, what are determined before construction begins.
>
> **[4:24](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/parameters-versus-hyperparameters?u=76281980&t=264)** Examples of hyperparameters in deep learning include the learning rate, which determines the step size during weight updates.
>
> **[4:31](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/parameters-versus-hyperparameters?u=76281980&t=271)** The batch size, which defines how many samples are used to compute the gradient in each iteration.
>
> **[4:38](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/parameters-versus-hyperparameters?u=76281980&t=278)** And the number of epochs, which dictates how many times the model iterates over the entire dataset during training.
>
> **[4:46](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/parameters-versus-hyperparameters?u=76281980&t=286)** In the next video, we'll explore some of the other key hyperparameters used in deep learning.

> [!info]- Semantic Content
>
> **Code Keywords:** function (2), let (2), finally, (1), require (1)
> **Analogies:** for example (1), similar to (1), such as (1)
> **CLI Commands:** make (1), find (1)
> **Cross-References:** in the next (1)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)

#### Key hyperparameters in deep learning
> [LinkedIn Learning](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/key-hyperparameters-in-deep-learning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/key-hyperparameters-in-deep-learning?u=76281980&t=0)** - [Narrator] In deep learning, hyperparameters are external settings that define how a neural network is structured and trained.
>
> **[0:08](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/key-hyperparameters-in-deep-learning?u=76281980&t=8)** Unlike parameters which are learned during training, hyperparameters are set before training begins and have a significant impact on the model's ability to learn and generalize.
>
> **[0:19](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/key-hyperparameters-in-deep-learning?u=76281980&t=19)** Selecting the right type of parameters is crucial for ensuring efficient training, robust performance, and optimal internalization to unseen data.
>
> **[0:30](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/key-hyperparameters-in-deep-learning?u=76281980&t=30)** One of the most important type of parameters is the learning rate, which controls how much the model adjusts its weight during each training iteration.
>
> **[0:40](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/key-hyperparameters-in-deep-learning?u=76281980&t=40)** A learning rate that is too high can cause a model to overshoot the optimal values, leading to unstable training, while a learning rate that is too low, results in slow convergence and may trap the model in a suboptimal solution.
>
> **[0:56](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/key-hyperparameters-in-deep-learning?u=76281980&t=56)** It's common to start with a modest learning rate, such as 0.001, especially when using optimizers like Adam.
>
> **[1:05](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/key-hyperparameters-in-deep-learning?u=76281980&t=65)** This value serves as a stable baseline that often works well across a variety of tasks.
>
> **[1:12](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/key-hyperparameters-in-deep-learning?u=76281980&t=72)** From there, consider implementing a learning rate scheduler, such as step decay, cosine annealing, or a warmup schedule to adjust the learning rate dynamically as your training progresses.
>
> **[1:25](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/key-hyperparameters-in-deep-learning?u=76281980&t=85)** These schedulers can help you take larger steps early on, then refine those steps as you get closer to an optimal solution.
>
> **[1:34](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/key-hyperparameters-in-deep-learning?u=76281980&t=94)** Finally, conducting a quick search, such as testing rates between 0.0001 and 0.1 can help identify a sweet spot for your particular problem.
>
> **[1:46](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/key-hyperparameters-in-deep-learning?u=76281980&t=106)** Another critical hyperparameter is the batch size, which determines the number of training samples processed before updating the model's parameters.
>
> **[1:56](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/key-hyperparameters-in-deep-learning?u=76281980&t=116)** Smaller batch sizes result in noisier estimates of the gradient, but can help the model escape shallow local minima, and often lead to faster initial convergence.
>
> **[2:07](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/key-hyperparameters-in-deep-learning?u=76281980&t=127)** Larger batches can streamline computations, especially on modern GPUs, but might require careful adjustments of the learning rate, and can sometimes lead the model to a less ideal final solution.
>
> **[2:21](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/key-hyperparameters-in-deep-learning?u=76281980&t=141)** A good starting point is to pick a relatively moderate batch size between 32 and 256, balancing the available computational resources with stable training behavior.
>
> **[2:34](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/key-hyperparameters-in-deep-learning?u=76281980&t=154)** If your hardware is limited in memory, you may need to opt for smaller batches.
>
> **[2:39](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/key-hyperparameters-in-deep-learning?u=76281980&t=159)** Conversely, if you have ample GPU memory, you can try larger batches, but consider increasing the learning rates slightly to maintain a good training pace.
>
> **[2:50](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/key-hyperparameters-in-deep-learning?u=76281980&t=170)** As always, monitor performance and be prepared to iterate.
>
> **[2:55](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/key-hyperparameters-in-deep-learning?u=76281980&t=175)** The number of epochs is another hyperparameter, and it defines how many times the model passes through the entire training dataset during training.
>
> **[3:05](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/key-hyperparameters-in-deep-learning?u=76281980&t=185)** Too few epochs can result in underfitting, where the model fails to learn the data effectively, while too many epochs can lead to overfitting, where the model memorizes training data and fails to generalize.
>
> **[3:19](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/key-hyperparameters-in-deep-learning?u=76281980&t=199)** A typical starting range might be 10 to 50 epochs.
>
> **[3:23](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/key-hyperparameters-in-deep-learning?u=76281980&t=203)** But this is highly dependent on the complexity of your dataset and model.
>
> **[3:28](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/key-hyperparameters-in-deep-learning?u=76281980&t=208)** To prevent unnecessary training and overfitting, implement early stopping based on your validation loss or accuracy.
>
> **[3:36](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/key-hyperparameters-in-deep-learning?u=76281980&t=216)** If the validation metrics stop improving, that's a strong signal that you should halt training.
>
> **[3:43](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/key-hyperparameters-in-deep-learning?u=76281980&t=223)** Monitoring these validation metrics closely, and stopping when progress stalls, can save both time and computational resources.
>
> **[3:53](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/key-hyperparameters-in-deep-learning?u=76281980&t=233)** Hyperparameters also govern the architecture of the model.
>
> **[3:57](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/key-hyperparameters-in-deep-learning?u=76281980&t=237)** Decisions such as the number of layers and the number of neurons per layer, play a critical role in determining a model's capacity and the ability to capture complex patterns.
>
> **[4:08](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/key-hyperparameters-in-deep-learning?u=76281980&t=248)** Begin by starting simple.
>
> **[4:10](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/key-hyperparameters-in-deep-learning?u=76281980&t=250)** Try a shallow model and see how it performs.
>
> **[4:13](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/key-hyperparameters-in-deep-learning?u=76281980&t=253)** If the model underfits, meaning it's not capturing the complexity in your data, gradually increase depth or width and see if performance improves.
>
> **[4:23](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/key-hyperparameters-in-deep-learning?u=76281980&t=263)** When working on well-studied tasks, consider using well-known architectures, like ResNet for image classification, or BERT variants for natural language processing.
>
> **[4:34](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/key-hyperparameters-in-deep-learning?u=76281980&t=274)** These models have been extensively tested and provided a reliable starting framework.
>
> **[4:40](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/key-hyperparameters-in-deep-learning?u=76281980&t=280)** As the model grows in size, incorporate regularization methods like dropout, weight decay, or batch normalization to keep training stable and to prevent overfitting.
>
> **[4:52](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/key-hyperparameters-in-deep-learning?u=76281980&t=292)** One of the most popular and straightforward forms of regularization is dropout.
>
> **[4:58](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/key-hyperparameters-in-deep-learning?u=76281980&t=298)** The dropout rate defines a fraction of neurons randomly dropped or turned off during training.
>
> **[5:05](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/key-hyperparameters-in-deep-learning?u=76281980&t=305)** This prevents a network from relying too heavily on any one node, and encourages the network to learn more robust, generalizable patterns.
>
> **[5:16](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/key-hyperparameters-in-deep-learning?u=76281980&t=316)** A common range for dropout is between .1 and .5, depending on the layer type and complexity.
>
> **[5:24](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/key-hyperparameters-in-deep-learning?u=76281980&t=324)** If the model seems to underfit, lowering the dropout rates can help.
>
> **[5:28](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/key-hyperparameters-in-deep-learning?u=76281980&t=328)** Conversely, if the model appears to overfit, the dropout rates can be increased.
>
> **[5:36](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/key-hyperparameters-in-deep-learning?u=76281980&t=336)** Note that different layers may require different rates, so don't hesitate to experiment.
>
> **[5:42](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/key-hyperparameters-in-deep-learning?u=76281980&t=342)** We can also set regularization coefficients for L1 and L2 regularization.
>
> **[5:48](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/key-hyperparameters-in-deep-learning?u=76281980&t=348)** The key is to start with small coefficients and adjust, based on the model's tendency to overfit or under fit.
>
> **[5:55](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/key-hyperparameters-in-deep-learning?u=76281980&t=355)** The weight initialization method is also a crucial hyperparameter, as it affects the starting point of a training process and the model's ability to converge.
>
> **[6:06](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/key-hyperparameters-in-deep-learning?u=76281980&t=366)** Good initializations help ensure that signals propagate well and that gradients remain stable.
>
> **[6:13](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/key-hyperparameters-in-deep-learning?u=76281980&t=373)** Poor initialization can lead to vanishing or exploding gradients, making training difficult or impossible.
>
> **[6:22](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/key-hyperparameters-in-deep-learning?u=76281980&t=382)** Beyond initialization, the choice of optimizer is another key decision point.
>
> **[6:28](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/key-hyperparameters-in-deep-learning?u=76281980&t=388)** Optimizers dictate how the model updates its weights, based on the computed gradients during backpropagation.
>
> **[6:36](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/key-hyperparameters-in-deep-learning?u=76281980&t=396)** In terms of best practices for weight initialization, it's usually best to choose a well-established initialization method, like Xavier or He initialization for deep networks, as they both ensure that model weights are neither too large nor too small.
>
> **[6:54](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/key-hyperparameters-in-deep-learning?u=76281980&t=414)** For the optimizer, start with a commonly recommended option.
>
> **[6:58](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/key-hyperparameters-in-deep-learning?u=76281980&t=418)** Stochastic gradient descent is a widely used optimizer known for its simplicity and effectiveness, especially when combined with momentum to accelerate convergence.
>
> **[7:09](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/key-hyperparameters-in-deep-learning?u=76281980&t=429)** Adam, on the other hand, is an adaptive optimizer that adjusts the learning rates for each parameter dynamically, making it a popular choice for most deep learning tasks due to its robust performance.
>
> **[7:22](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/key-hyperparameters-in-deep-learning?u=76281980&t=442)** Finally, only fine-tune the weight initialization optimizer if you encounter convergence issues.
>
> **[7:30](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/key-hyperparameters-in-deep-learning?u=76281980&t=450)** If performance is stable, adjustments to learning rates and batch size often yield more significant improvements than optimizer tweaks.
>
> **[7:40](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/key-hyperparameters-in-deep-learning?u=76281980&t=460)** Hyperparameter tuning is a balancing act.
>
> **[7:43](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/key-hyperparameters-in-deep-learning?u=76281980&t=463)** The key is to always begin with known baselines or defaults.
>
> **[7:47](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/key-hyperparameters-in-deep-learning?u=76281980&t=467)** Once you have a stable training process, adjust one hyperparameter at a time and monitor validation metrics.
>
> **[7:55](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/key-hyperparameters-in-deep-learning?u=76281980&t=475)** By iteratively refining various hyperparameters, you'll eventually start to develop an intuition for how the various levers interact.

> [!info]- Semantic Content
>
> **Prerequisites:** initialization (7)
> **Code Keywords:** finally, (2), require (2), yield (1)
> **Analogies:** such as (4)
> **Versions:** 0.001 (1), 0.0001 (1), 0.1 (1)
> **Definitions:** is a  (2), is an  (1)
> **Best Practices:** the key is (2), recommended (1)
> **Env Vars:** gpu (1), bert (1)
> **CLI Commands:** node (1)

#### Methods for hyperparameter tuning
> [LinkedIn Learning](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/methods-for-hyperparameter-tuning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/methods-for-hyperparameter-tuning?u=76281980&t=0)** - [Instructor] Hyperparameter tuning is a critical step in training deep learning models as it involves finding the optimal settings for hyperparameters that control the training process and the model architecture.
>
> **[0:13](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/methods-for-hyperparameter-tuning?u=76281980&t=13)** Unlike model parameters, which are learned automatically during training, hyperparameters must be set before training begins and directly influence the model's performance, convergence, and generalization ability.
>
> **[0:27](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/methods-for-hyperparameter-tuning?u=76281980&t=27)** The process of hyperparameter tuning can be challenging as a search space for hyperparameters is often vast, and their interactions can be complex.
>
> **[0:36](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/methods-for-hyperparameter-tuning?u=76281980&t=36)** However, several effective methods are commonly used to identify the best hyperparameter configurations for a given problem.
>
> **[0:45](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/methods-for-hyperparameter-tuning?u=76281980&t=45)** One of the simplest and most widely used methods is grid search.
>
> **[0:50](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/methods-for-hyperparameter-tuning?u=76281980&t=50)** In grid search, a predefined set of values is specified for each hyperparameter, and the algorithmic value is the model's performance for all possible combinations of these values.
>
> **[1:01](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/methods-for-hyperparameter-tuning?u=76281980&t=61)** This exhaustive search ensures that the optimal configuration within the specified range is identified.
>
> **[1:08](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/methods-for-hyperparameter-tuning?u=76281980&t=68)** For example, we could specify that five learning rates be tested, ranging in value from 0.00001 to 0.1, as well as five batches ranging in value from 32 to 512.
>
> **[1:24](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/methods-for-hyperparameter-tuning?u=76281980&t=84)** Grid search will build a model for all 25 resulting combinations to find the optimal or best performing hyperparameter combination.
>
> **[1:35](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/methods-for-hyperparameter-tuning?u=76281980&t=95)** Grid search offers a thorough approach by exhaustively evaluating every possible combination of specified hyperparameter values.
>
> **[1:44](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/methods-for-hyperparameter-tuning?u=76281980&t=104)** This means we never miss any point in the defined space, giving us complete coverage of all candidate configurations.
>
> **[1:53](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/methods-for-hyperparameter-tuning?u=76281980&t=113)** Additionally, it's straightforward to use and widely supported, making it a popular starting method.
>
> **[2:00](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/methods-for-hyperparameter-tuning?u=76281980&t=120)** The basic idea is simple to understand, and implementation is typically hassle-free due to standard library support.
>
> **[2:08](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/methods-for-hyperparameter-tuning?u=76281980&t=128)** On the downside, this very thoroughness can quickly become a burden as we increase the number of hyperparameters or broaden the range of their possible values, the resulting grid grows exponentially, making the approach prohibitively expensive in terms of time and computation.
>
> **[2:28](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/methods-for-hyperparameter-tuning?u=76281980&t=148)** Moreover, grid search lacks flexibility.
>
> **[2:31](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/methods-for-hyperparameter-tuning?u=76281980&t=151)** We must commit to evaluating all combinations, making it difficult to focus on the most promising regions of the hyperparameter space and optimize resource allocation.
>
> **[2:42](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/methods-for-hyperparameter-tuning?u=76281980&t=162)** Random search takes a different approach.
>
> **[2:45](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/methods-for-hyperparameter-tuning?u=76281980&t=165)** Instead of testing every combination, it randomly samples points from a defined range for each hyperparameter.
>
> **[2:53](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/methods-for-hyperparameter-tuning?u=76281980&t=173)** For instance, instead of testing every predefined learning rate and batch size, random search might randomly sample values from a continuous range between 0.0001 and 0.1 for the learning rate, and from 32 to five 12 for the batch size.
>
> **[3:12](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/methods-for-hyperparameter-tuning?u=76281980&t=192)** Over time, it explores a portion of the hyperparameter space with fewer assumptions about where their best values might lie.
>
> **[3:22](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/methods-for-hyperparameter-tuning?u=76281980&t=202)** Random search takes a more flexible approach than grid search, often allowing us to discover good solutions more quickly.
>
> **[3:30](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/methods-for-hyperparameter-tuning?u=76281980&t=210)** Because it does not commit to systematically checking every possible combination, random search can zero in on promising configurations without wasting effort on less influential parameters.
>
> **[3:42](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/methods-for-hyperparameter-tuning?u=76281980&t=222)** This approach also scales smoothly.
>
> **[3:45](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/methods-for-hyperparameter-tuning?u=76281980&t=225)** If we have the resources, we can simply run more random trials to increase our chances of finding optimal settings.
>
> **[3:54](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/methods-for-hyperparameter-tuning?u=76281980&t=234)** However, this flexibility comes with a major trade off.
>
> **[3:58](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/methods-for-hyperparameter-tuning?u=76281980&t=238)** Without a systematic guarantee of coverage, random search may overlook parts of the hyperparameter space that contain high-performing solutions.
>
> **[4:08](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/methods-for-hyperparameter-tuning?u=76281980&t=248)** While grid and random searches have their place, more advanced methods have emerged to intelligently navigate the hyperparameter space.
>
> **[4:18](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/methods-for-hyperparameter-tuning?u=76281980&t=258)** For instance, Bayesian optimization offers a probabilistic framework for hyperparameter tuning.
>
> **[4:26](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/methods-for-hyperparameter-tuning?u=76281980&t=266)** Unlike grid or random search, Bayesian optimization builds a surrogate model of the objective function that attempts to predict how different hyperparameters might affect a model's performance.
>
> **[4:39](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/methods-for-hyperparameter-tuning?u=76281980&t=279)** After each trial, this surrogate model is used to identify the next set of hyperparameters to evaluate, balancing exploration of new regions in the search space with exploitation of regions that have already shown promising results.
>
> **[4:54](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/methods-for-hyperparameter-tuning?u=76281980&t=294)** Over time, Bayesian optimization converges to the optimal hyperparameter values.
>
> **[5:01](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/methods-for-hyperparameter-tuning?u=76281980&t=301)** You can think of it like a treasure hunt with a clever assistant who, after every test, becomes better at guessing where the treasure might lie.
>
> **[5:12](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/methods-for-hyperparameter-tuning?u=76281980&t=312)** Bayesian optimization offers a more intelligent way to navigate the hyperparameter space.
>
> **[5:17](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/methods-for-hyperparameter-tuning?u=76281980&t=317)** Instead of randomly probing values, it learns from previous evaluations and uses that knowledge to guide us toward better solutions with fewer evaluations compared to grid or random search.
>
> **[5:30](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/methods-for-hyperparameter-tuning?u=76281980&t=330)** However, this added intelligence comes with increased complexity.
>
> **[5:35](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/methods-for-hyperparameter-tuning?u=76281980&t=335)** Bayesian optimization requires building and maintaining a sophisticated model to inform the search, which can be both computationally intensive and challenging to implement.
>
> **[5:47](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/methods-for-hyperparameter-tuning?u=76281980&t=347)** In practice, the choice of hyperparameter tuning method depends on the complexity of the model, the size of the search space, and the available computational resources.
>
> **[5:58](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/methods-for-hyperparameter-tuning?u=76281980&t=358)** Grid search and write on search are suitable for small search spaces or when scaling is important.
>
> **[6:04](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/methods-for-hyperparameter-tuning?u=76281980&t=364)** While Bayesian optimization is better suited for more complex and resource-intensive tasks.
>
> **[6:11](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/methods-for-hyperparameter-tuning?u=76281980&t=371)** Combining these methods with domain knowledge and tools can streamline the training process, ensuring that a model achieves its best possible performance with minimal computational cost.

> [!info]- Semantic Content
>
> **Versions:** 0.1 (2), 0.00001 (1), 0.0001 (1)
> **Analogies:** for instance (2), for example (1), think of it like (1)
> **CLI Commands:** find (1)
> **Code Keywords:** function (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Defining a tunable deep learning model in Keras
> [LinkedIn Learning](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/defining-a-tunable-deep-learning-model-in-keras?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/defining-a-tunable-deep-learning-model-in-keras?u=76281980&t=1)** - [Instructor] In this video, you'll learn how to define a tuneable deep learning model in preparation for hyperparameter tuning.
>
> **[0:09](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/defining-a-tunable-deep-learning-model-in-keras?u=76281980&t=9)** I will run the code in the 04_04e file.
>
> **[0:14](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/defining-a-tunable-deep-learning-model-in-keras?u=76281980&t=14)** You can follow along by completing the empty code cells in the 04_04b file.
>
> **[0:21](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/defining-a-tunable-deep-learning-model-in-keras?u=76281980&t=21)** Note that this video is the first in a two video sequence that teaches you how to tune the hyperparameters of a deep learning model.
>
> **[0:30](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/defining-a-tunable-deep-learning-model-in-keras?u=76281980&t=30)** Make sure to run the previously written code to import and pre-process the data, as well as to build and train the baseline model.
>
> **[0:39](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/defining-a-tunable-deep-learning-model-in-keras?u=76281980&t=39)** I've already done so.
>
> **[0:41](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/defining-a-tunable-deep-learning-model-in-keras?u=76281980&t=41)** So the previously written code has been run above to create a baseline model.
>
> **[0:47](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/defining-a-tunable-deep-learning-model-in-keras?u=76281980&t=47)** Now we're going to define a tuneable model architecture.
>
> **[0:51](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/defining-a-tunable-deep-learning-model-in-keras?u=76281980&t=51)** Before we search for the optimal hyperparameters for a model, we need to define a function that specifies the architectural blueprint of the model.
>
> **[1:00](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/defining-a-tunable-deep-learning-model-in-keras?u=76281980&t=60)** The blueprint will incorporate hyperparameters for the number of units per layer, dropout rates, and the optimizer learning rate.
>
> **[1:09](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/defining-a-tunable-deep-learning-model-in-keras?u=76281980&t=69)** Keras Tuner will invoke this function later on multiple times with different hyperparameter values in order to find an optimal combination that maximizes validation accuracy.
>
> **[1:22](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/defining-a-tunable-deep-learning-model-in-keras?u=76281980&t=82)** So before we continue, we first need to import a couple of things.
>
> **[1:26](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/defining-a-tunable-deep-learning-model-in-keras?u=76281980&t=86)** First is the dropout layer.
>
> **[1:28](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/defining-a-tunable-deep-learning-model-in-keras?u=76281980&t=88)** So we import Dropout from tensorflow.keras.layers.
>
> **[1:33](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/defining-a-tunable-deep-learning-model-in-keras?u=76281980&t=93)** Next, we import the Adam optimizer from tensorflow.keras.optimizers.
>
> **[1:39](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/defining-a-tunable-deep-learning-model-in-keras?u=76281980&t=99)** Now we define our tuneable function, the function that actually defines our model.
>
> **[1:44](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/defining-a-tunable-deep-learning-model-in-keras?u=76281980&t=104)** So we're going to call this function build_model, and we're going to specify an argument hp that represents each of the hyperparameters we're trying to tune.
>
> **[1:54](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/defining-a-tunable-deep-learning-model-in-keras?u=76281980&t=114)** So we begin by initializing our model, so keras.Sequential, and then we specify the input layer.
>
> **[2:02](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/defining-a-tunable-deep-learning-model-in-keras?u=76281980&t=122)** The shape is 784, so we saw this earlier.
>
> **[2:06](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/defining-a-tunable-deep-learning-model-in-keras?u=76281980&t=126)** If you read above, you get a better sense of what's going on here.
>
> **[2:10](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/defining-a-tunable-deep-learning-model-in-keras?u=76281980&t=130)** The next thing we do is to add the first dense layer, the first hidden layer.
>
> **[2:15](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/defining-a-tunable-deep-learning-model-in-keras?u=76281980&t=135)** So in this dense layer, we are going to try for hyperparameter values, or number of neurons here for this dense layer, between 32 and 512.
>
> **[2:26](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/defining-a-tunable-deep-learning-model-in-keras?u=76281980&t=146)** So we specify hp.Int, which means that the hyperparameter values are going to be integer values.
>
> **[2:33](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/defining-a-tunable-deep-learning-model-in-keras?u=76281980&t=153)** And we're going to call this hidden1.
>
> **[2:35](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/defining-a-tunable-deep-learning-model-in-keras?u=76281980&t=155)** This is just a label to describe this layer.
>
> **[2:38](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/defining-a-tunable-deep-learning-model-in-keras?u=76281980&t=158)** And we're going to go from 32 to 512, and with the step of 32, which means we're going to try values for 32 neurons, then plus 32, which is 64 neurons and so forth, all the way to 512 neurons.
>
> **[2:56](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/defining-a-tunable-deep-learning-model-in-keras?u=76281980&t=176)** The next layer is a dropout layer.
>
> **[2:59](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/defining-a-tunable-deep-learning-model-in-keras?u=76281980&t=179)** We are going to try, we're going to use a dropout rate of between 0.1 and 0.5 with a step of 0.1.
>
> **[3:08](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/defining-a-tunable-deep-learning-model-in-keras?u=76281980&t=188)** So we're going to try dropout rates of 0.1, 0.2, 0.3, 0.4, and 0.5.
>
> **[3:14](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/defining-a-tunable-deep-learning-model-in-keras?u=76281980&t=194)** So the idea here is to be able to figure out exactly which of those dropout rates for this layer is best for this model.
>
> **[3:23](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/defining-a-tunable-deep-learning-model-in-keras?u=76281980&t=203)** So we specify hp.Float, indicating that the hyperparameter values are going to be float or decimal numbers.
>
> **[3:33](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/defining-a-tunable-deep-learning-model-in-keras?u=76281980&t=213)** The second hidden layer we call hidden2.
>
> **[3:37](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/defining-a-tunable-deep-learning-model-in-keras?u=76281980&t=217)** We're also going to now try multiple neuron values, number of neuron values, integer values between 16 and 128 with a step of 16.
>
> **[3:48](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/defining-a-tunable-deep-learning-model-in-keras?u=76281980&t=228)** So that means the first value will be 16, then we try 32, and then we go forward from there.
>
> **[3:54](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/defining-a-tunable-deep-learning-model-in-keras?u=76281980&t=234)** So we're going to try 16 all the way to 128.
>
> **[3:58](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/defining-a-tunable-deep-learning-model-in-keras?u=76281980&t=238)** We add another dropout layer.
>
> **[4:01](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/defining-a-tunable-deep-learning-model-in-keras?u=76281980&t=241)** This time around we also evaluate dropout rates between 0.1 and 0.5 with a step of 0.1.
>
> **[4:10](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/defining-a-tunable-deep-learning-model-in-keras?u=76281980&t=250)** Finally, we specify our output layer, right?
>
> **[4:14](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/defining-a-tunable-deep-learning-model-in-keras?u=76281980&t=254)** So our output layer is not going to be a hyperparameter that needs to be tuned, because this is limited to the number of possible outcomes in our model.
>
> **[4:23](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/defining-a-tunable-deep-learning-model-in-keras?u=76281980&t=263)** So this is going to be a typical output layer with units that are 10, which means that there're going to be 10 neurons in this output layer, or 10 nodes.
>
> **[4:34](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/defining-a-tunable-deep-learning-model-in-keras?u=76281980&t=274)** Finally, we're going to go ahead and specify the learning rate values, potential learning rate values for our optimizer, right?
>
> **[4:40](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/defining-a-tunable-deep-learning-model-in-keras?u=76281980&t=280)** So here we're going to use, as we've done in the past, we use hp.Float, hp.Int for integer values.
>
> **[4:47](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/defining-a-tunable-deep-learning-model-in-keras?u=76281980&t=287)** Here we're going to say hp.Choice, which means that we're going to have discrete values that we want to evaluate.
>
> **[4:55](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/defining-a-tunable-deep-learning-model-in-keras?u=76281980&t=295)** This time around we're going to evaluate the values of 0.0001, 0.001, or 0.01.
>
> **[5:02](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/defining-a-tunable-deep-learning-model-in-keras?u=76281980&t=302)** So that's what we specified here as the possible values to evaluate during hyperparameter tuning.
>
> **[5:08](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/defining-a-tunable-deep-learning-model-in-keras?u=76281980&t=308)** And then finally, we want our model to now compile, right?
>
> **[5:13](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/defining-a-tunable-deep-learning-model-in-keras?u=76281980&t=313)** So we specify model.compile.
>
> **[5:15](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/defining-a-tunable-deep-learning-model-in-keras?u=76281980&t=315)** We specify the Adam optimizer as the optimizer we want to use, and we specify the learning rate values to evaluate, which are the values that we specified up here.
>
> **[5:26](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/defining-a-tunable-deep-learning-model-in-keras?u=76281980&t=326)** So every time the function is called during the hyperparameter tuning process, it's going to evaluate these different learning rates along with the other hyperparameters that we are trying to evaluate.
>
> **[5:39](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/defining-a-tunable-deep-learning-model-in-keras?u=76281980&t=339)** And then the loss is categorical cross-entropy.
>
> **[5:42](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/defining-a-tunable-deep-learning-model-in-keras?u=76281980&t=342)** And the metrics that we want to use to evaluate performance is accuracy, okay?
>
> **[5:47](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/defining-a-tunable-deep-learning-model-in-keras?u=76281980&t=347)** So this is how we actually define a tuneable model for hyperparameter tuning.
>
> **[5:54](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/defining-a-tunable-deep-learning-model-in-keras?u=76281980&t=354)** So I'm going to go ahead and run this.
>
> **[5:56](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/defining-a-tunable-deep-learning-model-in-keras?u=76281980&t=356)** All this does at this point in time is just get the model ready, the function ready, so that when we're actually doing the hyperparameter search, this function is called over and over again.
>
> **[6:06](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/defining-a-tunable-deep-learning-model-in-keras?u=76281980&t=366)** And this allows us to be able to search through the space.
>
> **[6:09](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/defining-a-tunable-deep-learning-model-in-keras?u=76281980&t=369)** So next, we'll walk through the process of running a hyperparameter search to identify the optimal set of hyperparameters for our problem.
>
> **[6:19](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/defining-a-tunable-deep-learning-model-in-keras?u=76281980&t=379)** See you on the other side.

> [!info]- Semantic Content
>
> **Code Keywords:** function (8), finally, (3), continue (1), try, (1), this. (1)
> **Versions:** 0.1 (5), 0.5 (3), 0.2 (1), 0.3 (1), 0.4 (1)
> **Definitions:** is called (2), is a  (1)
> **CLI Commands:** make (1), find (1)
> **Code Identifiers:** build_model (1)
> **Best Practices:** make sure to (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Using KerasTuner for hyperparameter tuning
> [LinkedIn Learning](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/using-kerastuner-for-hyperparameter-tuning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/using-kerastuner-for-hyperparameter-tuning?u=76281980&t=0)** - [Person] In this video, you will learn how to use Keras Tuner to perform a search for the optimal hyperparameters of a deep-learning model.
>
> **[0:08](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/using-kerastuner-for-hyperparameter-tuning?u=76281980&t=8)** I'll be writing the code in the "04_05e" file.
>
> **[0:13](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/using-kerastuner-for-hyperparameter-tuning?u=76281980&t=13)** You can follow along by completing the empty code cells in the "04_05b" file.
>
> **[0:20](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/using-kerastuner-for-hyperparameter-tuning?u=76281980&t=20)** Note that this video is the second in a two-video sequence that teaches you how to tune the hyperparameters of a deep-learning model.
>
> **[0:28](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/using-kerastuner-for-hyperparameter-tuning?u=76281980&t=28)** If you have not done so, watch the previous course video on how to define a tune-able deep-learning model for a detailed explanation of the prior code.
>
> **[0:37](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/using-kerastuner-for-hyperparameter-tuning?u=76281980&t=37)** Also, make sure to run the previously routine code to get your environment up to speed.
>
> **[0:42](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/using-kerastuner-for-hyperparameter-tuning?u=76281980&t=42)** I've already done so.
>
> **[0:46](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/using-kerastuner-for-hyperparameter-tuning?u=76281980&t=46)** So having defined our hyperparameter tune-able model, we now need to set up a tuner.
>
> **[0:51](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/using-kerastuner-for-hyperparameter-tuning?u=76281980&t=51)** Here, we choose Hyperband, a resource-efficient approach to hyperparameter tuning that builds upon random search and combines it with the principles of early stopping.
>
> **[1:02](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/using-kerastuner-for-hyperparameter-tuning?u=76281980&t=62)** Its primary goal is to reduce the computational cost of hyperparameter tuning by dynamically allocating more resources to promising hyperparameter configurations and fewer resources to less promising ones.
>
> **[1:16](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/using-kerastuner-for-hyperparameter-tuning?u=76281980&t=76)** So we start by importing Karas Tuner, and we call it "kt," and we're going to call the Hyperband function from Keras Tuner.
>
> **[1:27](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/using-kerastuner-for-hyperparameter-tuning?u=76281980&t=87)** So here, we specify model as a first argument, and model is the function, the tune-able model that we defined in the previous video, so every time that the process cycles through, it's going to call that function to define a new model, so we're going to specify "max_epochs" as five, which means that this is the number of epochs it's going to try to see if it can improve on the performance, and for each epoch, it's going to do one iteration, and then, we're going to set a seed so that you and I can get the same results if we... When we run these... This process at different times on different computers.
>
> **[2:08](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/using-kerastuner-for-hyperparameter-tuning?u=76281980&t=128)** We're going to set "overwrite" to go to "True," which means that it should overwrite the log of the previous attempt of hyperparameter tuning, our "objective" is to maximize validation accuracy, we're going to specify directly for the "tuning_logs," which it keeps track of the process, and we're going to give a name to the project, so let's go ahead and run this.
>
> **[2:31](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/using-kerastuner-for-hyperparameter-tuning?u=76281980&t=151)** That initializes our tuner.
>
> **[2:35](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/using-kerastuner-for-hyperparameter-tuning?u=76281980&t=155)** Now, we can start the search process with... Using the "tuner.search" method.
>
> **[2:40](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/using-kerastuner-for-hyperparameter-tuning?u=76281980&t=160)** This command will build and train multiple models using different combinations of hyperparameters, all right?
>
> **[2:46](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/using-kerastuner-for-hyperparameter-tuning?u=76281980&t=166)** And so as we specified in our tune-able model, we're going to try different layer sizes, different dropout rates, different learning rates, and we're also going to try different batch sizes, which we specify in this next code chunk.
>
> **[3:01](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/using-kerastuner-for-hyperparameter-tuning?u=76281980&t=181)** So here, we specify "tuner.search," and within "tuner.search," we specify the training data, the training labels, and we say for each of these search processes, we want to do five epochs, we want to do validation splits of 0.1, and then, we want to specify different batch sizes that we want to evaluate, so here, we specify the batch size as a label for this type of parameter values that we're going to be looking at, but what we're saying here is I want to try batch sizes from 32 to 128, with a step of 32, so this means that we want to try for every 32, so 32, then 64, and all the way to 128, so that's kind of what we want to try here to see which batch size actually gives us the best performance,
>
> **[3:49](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/using-kerastuner-for-hyperparameter-tuning?u=76281980&t=229)** so we're going to go ahead and initiate our tuner, and so, that way, the process begins.
>
> **[3:55](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/using-kerastuner-for-hyperparameter-tuning?u=76281980&t=235)** So we're going to let this go through, and so, we see that it's going through the process of hyperparameter tuning, trying to find the best combination of hyperparameters for our problem, so we're going to keep observing this to see where we are in the process.
>
> **[4:14](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/using-kerastuner-for-hyperparameter-tuning?u=76281980&t=254)** All right, so this is going to keep going.
>
> **[4:16](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/using-kerastuner-for-hyperparameter-tuning?u=76281980&t=256)** (no audio) Okay.
>
> **[4:25](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/using-kerastuner-for-hyperparameter-tuning?u=76281980&t=265)** So the process is complete, and so, we went through 10 different trials, so once the search is complete, we can output the best configuration of hyperparameters, right?
>
> **[4:35](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/using-kerastuner-for-hyperparameter-tuning?u=76281980&t=275)** So that took us about three minutes and 13 seconds to search through the hyperparameter space to find the optimal set of hyperparameters for our problem.
>
> **[4:43](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/using-kerastuner-for-hyperparameter-tuning?u=76281980&t=283)** So now that the search is complete, we can output the best set of hyperparameters, so we can run this here, and this is now what we get, "The optimal number of units in the first and second densely-connected layers are 416," for the first hidden layer, "With a dropout rate of 0.40," and 64 for the second hidden layer, "With a dropout rate of 0.20" okay?
>
> **[5:10](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/using-kerastuner-for-hyperparameter-tuning?u=76281980&t=310)** "The optimal learning rate for the optimizer is 0.001, and the optimal training batch size is 96," okay?
>
> **[5:18](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/using-kerastuner-for-hyperparameter-tuning?u=76281980&t=318)** So we use a Hyperband approach to be able to identify these optimal hyperparameters.
>
> **[5:24](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/using-kerastuner-for-hyperparameter-tuning?u=76281980&t=324)** Next, using these optimal hyperparameters, we are going to create a tuned model, so this is a model now that's going to use those hyperparameters, we're going to define our model based on those values, so we go ahead and create our model, and finally, we train the tuned model.
>
> **[5:39](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/using-kerastuner-for-hyperparameter-tuning?u=76281980&t=339)** (no audio) So now we're going to use... What, so 10 epochs?
>
> **[5:48](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/using-kerastuner-for-hyperparameter-tuning?u=76281980&t=348)** So we're going to wait for it to finish, so we're going to use the optimal batch size and the model, obviously, was defined with the optimal values for the other hyperparameters.
>
> **[6:00](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/using-kerastuner-for-hyperparameter-tuning?u=76281980&t=360)** All right, and so, now, we can also evaluate how well the tuned model generalizes to new data, so let's look at how it performs, and so, here, we see that the test loss is 0.0649, and the test accuracy is 0.9183, right?
>
> **[6:18](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/using-kerastuner-for-hyperparameter-tuning?u=76281980&t=378)** So how is this better than what we had before?
>
> **[6:21](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/using-kerastuner-for-hyperparameter-tuning?u=76281980&t=381)** So let's scroll up a little bit to see what the baseline model... How it performed, so all the way up here, we see the performance on the... Of the baseline model, so we can see that the test accuracy of the baseline model is 96%, and our model obviously improved upon that slightly to 98%, right?
>
> **[6:42](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/using-kerastuner-for-hyperparameter-tuning?u=76281980&t=402)** So what we did here was a very basic hyperparameter search.
>
> **[6:45](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/using-kerastuner-for-hyperparameter-tuning?u=76281980&t=405)** We can do something much more extensive than what we've done here, but just the little part that we did here was able to improve the performance of our model, so as... If you've been following along between this video and the one before this, it means that you now know how to tune the hyperparameters of a deep-learning model in Python using Keras Tuner.
>
> **[7:10](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/using-kerastuner-for-hyperparameter-tuning?u=76281980&t=430)** Good job.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), function (3), this. (1), finally, (1), this, (1)
> **Versions:** 0.1 (1), 0.40 (1), 0.20 (1), 0.001 (1), 0.0649 (1)
> **CLI Commands:** find (2), make (1), python (1)
> **Definitions:** means that (3), is a  (1)
> **Code Identifiers:** max_epochs (1), tuning_logs (1)
> **UI Navigation:** go to (1), scroll up (1)
> **Cross-References:** previous video (1)
> **Best Practices:** make sure to (1)


### 5. Advanced Training Techniques

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Batch normalization
> [LinkedIn Learning](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/batch-normalization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/batch-normalization?u=76281980&t=0)** - [Instructor] In deep learning, as model parameters are updated during training, the distribution of input values in each layer could change as the model learns.
>
> **[0:11](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/batch-normalization?u=76281980&t=11)** This change known as internal covariate shift can slow down the learning process and make it more challenging.
>
> **[0:19](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/batch-normalization?u=76281980&t=19)** Batch normalization solves this by normalizing the inputs to each layer so that they have a consistent scale and distribution during training.
>
> **[0:28](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/batch-normalization?u=76281980&t=28)** Batch normalization operates in three main steps.
>
> **[0:31](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/batch-normalization?u=76281980&t=31)** First, it calculates the mean and variance of each feature in the mini batch.
>
> **[0:36](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/batch-normalization?u=76281980&t=36)** This gives a snapshot of how the inputs are distributed for that batch.
>
> **[0:41](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/batch-normalization?u=76281980&t=41)** Next, it normalizes the inputs to have a zero mean and standard deviation of one.
>
> **[0:47](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/batch-normalization?u=76281980&t=47)** This ensures that the inputs of the layer are standardized, making the model easier to train.
>
> **[0:54](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/batch-normalization?u=76281980&t=54)** Given a mini batch of input B, the normalization approach is represented mathematically as shown here, where Xi hat is a new standardized input, Xi is original input, B bar is the mean of the mini batch, and sigma B is a standard deviation of the mini batch.
>
> **[1:15](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/batch-normalization?u=76281980&t=75)** The third step in batch normalization is to scale and shift the normalized values using two trainable parameters, gamma and beta.
>
> **[1:25](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/batch-normalization?u=76281980&t=85)** Using these parameters allows the model to adjust the normalized values if necessary, so it can still learn the best representation of the data.
>
> **[1:35](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/batch-normalization?u=76281980&t=95)** Mathematically, the scaling and shifting process is represented as shown here, where Yi is the scaled and shifted input, gamma is a scaling parameter, yxi hat is the normalized input, and beta is the shifting parameter.
>
> **[1:54](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/batch-normalization?u=76281980&t=114)** The advantages of batch normalization are significant.
>
> **[1:57](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/batch-normalization?u=76281980&t=117)** It accelerates training by stabilizing the learning process, enabling the use of higher learning rates, and reducing sensitivity to weight initialization.
>
> **[2:08](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/batch-normalization?u=76281980&t=128)** It also improves generalization by acting as a form of regularization, reducing the risk of overfitting.
>
> **[2:16](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/batch-normalization?u=76281980&t=136)** Furthermore, batch normalization simplifies hyperparameter tuning and supports the training of deeper networks by mitigating issues such as vanishing or exploding gradients.
>
> **[2:29](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/batch-normalization?u=76281980&t=149)** Despite its benefits, batch normalization has some limitations.
>
> **[2:33](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/batch-normalization?u=76281980&t=153)** It depends heavily on the mini batch size, as small mini batches may not yield accurate estimates of the mean and variance, leading to degraded performance.
>
> **[2:44](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/batch-normalization?u=76281980&t=164)** Additionally, the computational overhead from extra operations, such as calculating statistics and normalizing inputs can slightly increase training time.
>
> **[2:55](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/batch-normalization?u=76281980&t=175)** Finally, batch normalization is less effective for tasks where batch sizes are small or for recurrent architectures with long sequences.

> [!info]- Semantic Content
>
> **Definitions:** is a  (3), known as (1)
> **Code Keywords:** yield (1), finally, (1)
> **Analogies:** such as (2)
> **CLI Commands:** make (1)
> **Prerequisites:** initialization (1)
> **Speakers:** - [instructor] (1)

#### Applying batch normalization to a deep learning model
> [LinkedIn Learning](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-batch-normalization-to-a-deep-learning-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-batch-normalization-to-a-deep-learning-model?u=76281980&t=0)** - [Instructor] In this video, you'll learn how to apply batch normalization to a deep learning model.
>
> **[0:07](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-batch-normalization-to-a-deep-learning-model?u=76281980&t=7)** I'll be writing the code in the 05_02e file.
>
> **[0:11](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-batch-normalization-to-a-deep-learning-model?u=76281980&t=11)** You can follow along by completing the empty code cells in the 05_02b file.
>
> **[0:18](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-batch-normalization-to-a-deep-learning-model?u=76281980&t=18)** Note that this is the first in the three-video sequence that teaches you how to apply batch normalization, gradient clipping, early stopping, and learning rate scheduling to a deep learning model.
>
> **[0:31](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-batch-normalization-to-a-deep-learning-model?u=76281980&t=31)** Let's get started by running the previously written code to import and pre-process the data.
>
> **[0:39](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-batch-normalization-to-a-deep-learning-model?u=76281980&t=39)** So the first thing I need to do here is actually select the kernel for my environment.
>
> **[0:44](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-batch-normalization-to-a-deep-learning-model?u=76281980&t=44)** So Python Environments.
>
> **[0:46](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-batch-normalization-to-a-deep-learning-model?u=76281980&t=46)** I'm going to say Python 3.10.
>
> **[0:49](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-batch-normalization-to-a-deep-learning-model?u=76281980&t=49)** Now I'm going to click on my next code cell, and I'm going to say Run previous.
>
> **[0:54](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-batch-normalization-to-a-deep-learning-model?u=76281980&t=54)** Okay, so this is going to go ahead and run the code above to import and pre-process the data.
>
> **[1:03](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-batch-normalization-to-a-deep-learning-model?u=76281980&t=63)** Okay, so that is done.
>
> **[1:05](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-batch-normalization-to-a-deep-learning-model?u=76281980&t=65)** So our model consists of an input layer with 784 nodes, two hidden layers with 512 and 128 nodes respectively, and an output layer with 10 nodes.
>
> **[1:18](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-batch-normalization-to-a-deep-learning-model?u=76281980&t=78)** Between each of the hidden layers, we will normalize the outputs of one layer before feeding them into the next.
>
> **[1:25](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-batch-normalization-to-a-deep-learning-model?u=76281980&t=85)** This is what we know as batch normalization.
>
> **[1:28](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-batch-normalization-to-a-deep-learning-model?u=76281980&t=88)** Batch normalization can stabilize the training of a deep learning model and help it converge faster.
>
> **[1:35](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-batch-normalization-to-a-deep-learning-model?u=76281980&t=95)** To apply batch normalization to a model, we simply include a BatchNormalization layer to the model.
>
> **[1:42](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-batch-normalization-to-a-deep-learning-model?u=76281980&t=102)** So here, we're going to import the Input, Dense, and BatchNormalization layers using keras.layers.
>
> **[1:51](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-batch-normalization-to-a-deep-learning-model?u=76281980&t=111)** So as we define our model, we specify keras.Sequential to initialize the model.
>
> **[1:56](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-batch-normalization-to-a-deep-learning-model?u=76281980&t=116)** Specify the Input layer.
>
> **[1:59](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-batch-normalization-to-a-deep-learning-model?u=76281980&t=119)** The first Dense layer, which is the first hidden layer.
>
> **[2:02](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-batch-normalization-to-a-deep-learning-model?u=76281980&t=122)** 512 nodes with an activation function of relu.
>
> **[2:05](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-batch-normalization-to-a-deep-learning-model?u=76281980&t=125)** And between that and the next Dense layer, we specify a BatchNormalization layer. That's it.
>
> **[2:12](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-batch-normalization-to-a-deep-learning-model?u=76281980&t=132)** We do the same thing again between the second Dense layer and the output layer.
>
> **[2:18](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-batch-normalization-to-a-deep-learning-model?u=76281980&t=138)** So let's go ahead and run that to initialize our model.
>
> **[2:26](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-batch-normalization-to-a-deep-learning-model?u=76281980&t=146)** And so, yes, this error that we have here, or this one that we have here is actually benign, so nothing to worry about.
>
> **[2:31](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-batch-normalization-to-a-deep-learning-model?u=76281980&t=151)** All it's saying is that our environment is not set up to use the GPU.
>
> **[2:37](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-batch-normalization-to-a-deep-learning-model?u=76281980&t=157)** We're not going to be using the GPU for these examples, so we should be good to go. Okay?
>
> **[2:41](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-batch-normalization-to-a-deep-learning-model?u=76281980&t=161)** So good job.
>
> **[2:43](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-batch-normalization-to-a-deep-learning-model?u=76281980&t=163)** We have successfully applied batch normalization to a deep learning model in Python. That is it.
>
> **[2:49](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-batch-normalization-to-a-deep-learning-model?u=76281980&t=169)** Next, we discuss what gradient clipping is, and then we walk through how to use it in Python.

> [!info]- Semantic Content
>
> **CLI Commands:** python (4)
> **Code Keywords:** let (2), function (1)
> **Env Vars:** gpu (2)
> **UI Navigation:** select the (1), click on (1)
> **Versions:** python 3 (1)
> **Warnings:** note that (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Gradient clipping
> [LinkedIn Learning](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/gradient-clipping?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/gradient-clipping?u=76281980&t=0)** - [Instructor] Gradient Clipping is a technique used in deep learning to prevent the gradients of a model from becoming excessively large during training.
>
> **[0:10](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/gradient-clipping?u=76281980&t=10)** This phenomenon known as exploding gradients occurs when the gradients of the loss function respectively model's parameters grow excessively large during back propagation, this can destabilize training cause numerical issues and prevent the model from converging to an optimal solution.
>
> **[0:31](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/gradient-clipping?u=76281980&t=31)** Gradient clipping solves this problem by putting a limit or cap on how large the gradients can get.
>
> **[0:39](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/gradient-clipping?u=76281980&t=39)** There are two primary approaches to gradient clipping, clipping by value and clipping by norm.
>
> **[0:46](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/gradient-clipping?u=76281980&t=46)** In clipping by value, each individual gradient is clipped so that it doesn't exceed a specific minimum value or maximum value.
>
> **[0:55](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/gradient-clipping?u=76281980&t=55)** Let's walk through a simple example of how this works.
>
> **[0:59](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/gradient-clipping?u=76281980&t=59)** Suppose we have a gradient vector G with values two, negative six, eight, negative three, and five with a gradient threshold C set to four.
>
> **[1:11](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/gradient-clipping?u=76281980&t=71)** This means that the minimum greater value allowed is negative four and the maximum four.
>
> **[1:18](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/gradient-clipping?u=76281980&t=78)** For each gradient GI in G, if the value is greater than four, it'll be clipped to four, and if the value is less than negative four, it'll be clipped to negative four.
>
> **[1:30](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/gradient-clipping?u=76281980&t=90)** Therefore, with a threshold of four.
>
> **[1:32](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/gradient-clipping?u=76281980&t=92)** Clipping the gradient vector by value results in the vector with values two, negative four, four, negative three, and four.
>
> **[1:43](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/gradient-clipping?u=76281980&t=103)** Alternatively, instead of clipping individual gradients, clipping by norm constraints the overall size or norm of the gradient vector to a maximum threshold C.
>
> **[1:55](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/gradient-clipping?u=76281980&t=115)** If the total norm exceeds C, all gradients in the vector are scaled down proportionally, so the norm equals C.
>
> **[2:03](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/gradient-clipping?u=76281980&t=123)** The L two norm of a gradient vector G is computed as shown here, where GI represents each of the end gradients in the vector.
>
> **[2:14](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/gradient-clipping?u=76281980&t=134)** If the L two norm of the gradient vector exceeds the maximum threshold C, then the vector is scaled by a factor calculated as shown here.
>
> **[2:23](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/gradient-clipping?u=76281980&t=143)** Let's walk through a simple example of how this works.
>
> **[2:27](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/gradient-clipping?u=76281980&t=147)** Suppose we have a gradient vector G with values two, negative six, eight, negative three, and five with the gradient threshold C set to six.
>
> **[2:38](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/gradient-clipping?u=76281980&t=158)** The L two norm of the gradient vector will be 11.75 approximately.
>
> **[2:44](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/gradient-clipping?u=76281980&t=164)** Since 11.75 is greater than this threshold of six, the vector needs to be rescaled.
>
> **[2:50](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/gradient-clipping?u=76281980&t=170)** With the threshold value of six an L two norm of 11.75, the scaling factor will be 0.51 approximately.
>
> **[3:00](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/gradient-clipping?u=76281980&t=180)** Each gradient in the vector is multiplied by the scaling factor, resulting in the vector that with values 1.02, negative 3.06, 4.08, negative 1.53 and 2.55.
>
> **[3:17](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/gradient-clipping?u=76281980&t=197)** At a high level, you choose clipping by value, if you need a straightforward approach to limit gradients and don't want to compute norms or when you need to limit the magnitude of individual gradient components to avoid drastic updates to specific parameters.
>
> **[3:34](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/gradient-clipping?u=76281980&t=214)** Clipping by norm, on the other hand, is better suited for situations where it is critical to maintain the relative direction of the gradient vector while controlling its overall magnitude, ensuring consistent updates across all parameters.
>
> **[3:49](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/gradient-clipping?u=76281980&t=229)** In summary, the choice between clipping by value and clipping by norm depends on the specific characteristics of your model, training setup, and the type of instability you are encountering.
>
> **[4:03](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/gradient-clipping?u=76281980&t=243)** Gradient clipping offers several benefits that make it a valuable tool in deep learning.
>
> **[4:09](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/gradient-clipping?u=76281980&t=249)** One of its primary advantages is that it stabilizes the training process by limiting the size of gradients, it prevents erratic updates to model parameters resulting in smoother convergence.
>
> **[4:21](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/gradient-clipping?u=76281980&t=261)** This stability is especially beneficial for deep networks and recurrent neural networks where exploding gradients are more common due to the long chains of back propagation through many layers or timestamps.
>
> **[4:35](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/gradient-clipping?u=76281980&t=275)** Gradient clipping also comes with certain limitations.
>
> **[4:39](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/gradient-clipping?u=76281980&t=279)** While it effectively addresses exploding gradients, it does not tackle the underlying causes of the problem such as poor weight initialization or an unsuitable model architecture.
>
> **[4:51](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/gradient-clipping?u=76281980&t=291)** This means that gradient clipping can act as a bandaid solution, masking deeper issues in the training setup.
>
> **[4:58](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/gradient-clipping?u=76281980&t=298)** Additionally, its effectiveness depends on selecting an appropriate clipping threshold, which is not always straightforward, and often requires careful experimentation to optimize.

> [!info]- Semantic Content
>
> **Versions:** 11.75 (3), 0.51 (1), 1.02 (1), 3.06 (1), 4.08 (1)
> **Code Keywords:** let (2), function (1)
> **Definitions:** means that (2), known as (1)
> **Prerequisites:** setup (2), initialization (1)
> **CLI Commands:** make (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Applying gradient clipping to a deep learning model
> [LinkedIn Learning](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-gradient-clipping-to-a-deep-learning-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-gradient-clipping-to-a-deep-learning-model?u=76281980&t=0)** - In this video, you will learn how to apply gradient clipping to a deep learning model in Python.
>
> **[0:07](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-gradient-clipping-to-a-deep-learning-model?u=76281980&t=7)** I'll be writing the code in the 05_04 E file.
>
> **[0:12](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-gradient-clipping-to-a-deep-learning-model?u=76281980&t=12)** You can follow along by completing the empty code cells in the 05_04 B file.
>
> **[0:19](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-gradient-clipping-to-a-deep-learning-model?u=76281980&t=19)** Note that this is the second in a three-video sequence that teaches you how to apply batch normalization, gradient clipping, early stopping, and learning-rate scheduling to a deep learning model.
>
> **[0:32](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-gradient-clipping-to-a-deep-learning-model?u=76281980&t=32)** If you have not done so, watch the video on how to apply batch normalization to a deep learning model for a detailed explanation of the prior code.
>
> **[0:40](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-gradient-clipping-to-a-deep-learning-model?u=76281980&t=40)** Before we begin, let's run the code we created in that video to get our environment up to speed.
>
> **[0:48](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-gradient-clipping-to-a-deep-learning-model?u=76281980&t=48)** So, the first thing I need to do is specify my kernel, get my Python environment, 3.10.
>
> **[0:55](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-gradient-clipping-to-a-deep-learning-model?u=76281980&t=55)** I'm going to click on my next code cell and say run all above.
>
> **[1:00](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-gradient-clipping-to-a-deep-learning-model?u=76281980&t=60)** I'm going to scroll up a little bit to make sure I know when things are done.
>
> **[1:06](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-gradient-clipping-to-a-deep-learning-model?u=76281980&t=66)** All right. So now that we've defined our model's architecture, let's compile it by specifying the optimizer, loss function and performance metric to optimize.
>
> **[1:18](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-gradient-clipping-to-a-deep-learning-model?u=76281980&t=78)** We're going to use the Adam optimizer for our model.
>
> **[1:21](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-gradient-clipping-to-a-deep-learning-model?u=76281980&t=81)** By default, optimizers don't impose any bounds on gradients.
>
> **[1:25](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-gradient-clipping-to-a-deep-learning-model?u=76281980&t=85)** However, large gradients can cause a model's parameters to fluctuate significantly during training and hamper convergence.
>
> **[1:34](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-gradient-clipping-to-a-deep-learning-model?u=76281980&t=94)** Gradient clipping mitigates this issue by limiting the magnitude, or the norm, of gradients.
>
> **[1:41](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-gradient-clipping-to-a-deep-learning-model?u=76281980&t=101)** To implement gradient clipping, we set the clipnorm argument with the Adam optimizer.
>
> **[1:48](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-gradient-clipping-to-a-deep-learning-model?u=76281980&t=108)** This ensures that the L2 norm of the gradients do not exceed the value that we specify, in this case, 1.0.
>
> **[1:56](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-gradient-clipping-to-a-deep-learning-model?u=76281980&t=116)** So to begin, we import the optimizer, Adam, using the keras.optimizers.
>
> **[2:01](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-gradient-clipping-to-a-deep-learning-model?u=76281980&t=121)** Then, we specify, or we compile our model, really.
>
> **[2:06](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-gradient-clipping-to-a-deep-learning-model?u=76281980&t=126)** And we say the optimizer is Adam.
>
> **[2:07](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-gradient-clipping-to-a-deep-learning-model?u=76281980&t=127)** Within the optimizer Adam function, we specify the clipnorm.
>
> **[2:12](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-gradient-clipping-to-a-deep-learning-model?u=76281980&t=132)** So we say clipnorm is equal to 1, loss is categorical crossentropy, and the metric we're going to use is accuracy.
>
> **[2:20](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-gradient-clipping-to-a-deep-learning-model?u=76281980&t=140)** So let's go ahead and run that.
>
> **[2:22](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-gradient-clipping-to-a-deep-learning-model?u=76281980&t=142)** So, note that we can adjust this clipnorm value, right.
>
> **[2:26](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-gradient-clipping-to-a-deep-learning-model?u=76281980&t=146)** So here we use 1.0, but we can adjust that as we see fit based on our dataset or problem.
>
> **[2:33](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-gradient-clipping-to-a-deep-learning-model?u=76281980&t=153)** Alternatively, we can also use the clipvalue argument to clip the gradients by value instead of by norm.
>
> **[2:43](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-gradient-clipping-to-a-deep-learning-model?u=76281980&t=163)** So, this process that we just went through right now is how we apply gradient clipping to a deep learning model in Python.
>
> **[2:52](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/applying-gradient-clipping-to-a-deep-learning-model?u=76281980&t=172)** Next, we'll learn how early stopping, checkpointing and learning-rate scheduling work.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), function (2), default, (1), case, (1)
> **CLI Commands:** python (3), make (1)
> **Versions:** 1.0 (2), 3.10 (1)
> **UI Navigation:** click on (1), scroll up (1)
> **Warnings:** note that (2)
> **Speakers:** - in (1)

#### Early stopping and checkpointing
> [LinkedIn Learning](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/early-stopping-and-checkpointing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/early-stopping-and-checkpointing?u=76281980&t=0)** - [Instructor] Early stopping is a regularization technique designed to optimize the training process by halting it when a model's performance on a validation dataset stops improving.
>
> **[0:12](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/early-stopping-and-checkpointing?u=76281980&t=12)** This technique operates by continuously evaluating the model's performance on the validation metric, such as validation loss or accuracy at the end of each epoch.
>
> **[0:23](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/early-stopping-and-checkpointing?u=76281980&t=23)** Early stopping monitors these metrics and halts training process if no improvement is observed for a specified number of consecutive epochs defined by the patience parameter.
>
> **[0:35](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/early-stopping-and-checkpointing?u=76281980&t=35)** One of the key advantages of early stopping is its ability to prevent overfitting by ceasing training before the model begins to lose its ability to generalize the unseen data.
>
> **[0:47](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/early-stopping-and-checkpointing?u=76281980&t=47)** Additionally, it conserves computational resources, saving time and processing power by stopping unnecessary training.
>
> **[0:56](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/early-stopping-and-checkpointing?u=76281980&t=56)** Early stopping also minimizes the need for manual intervention, as it automates the decision of when to end training.
>
> **[1:05](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/early-stopping-and-checkpointing?u=76281980&t=65)** Early stopping is not without its challenges.
>
> **[1:08](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/early-stopping-and-checkpointing?u=76281980&t=68)** For one, early stopping is sensitive to noise in validation metrics, which can lead to premature stopping.
>
> **[1:15](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/early-stopping-and-checkpointing?u=76281980&t=75)** Furthermore, the effectiveness of early stopping relies heavily on setting an appropriate patience parameter, which may require experimentation to optimize for a specific task or dataset.
>
> **[1:28](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/early-stopping-and-checkpointing?u=76281980&t=88)** Despite these limitations, early stopping remains a valuable tool for improving model performance and training efficiency.
>
> **[1:38](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/early-stopping-and-checkpointing?u=76281980&t=98)** Another approach to improving model performance is checkpointing.
>
> **[1:41](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/early-stopping-and-checkpointing?u=76281980&t=101)** Checkpointing involves saving the model's parameters periodically during training, typically, when performance on the validation set improves.
>
> **[1:50](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/early-stopping-and-checkpointing?u=76281980&t=110)** This ensures that the best version of the model with the lowest validation loss or highest validation accuracy is preserved.
>
> **[1:59](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/early-stopping-and-checkpointing?u=76281980&t=119)** The process is straightforward.
>
> **[2:01](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/early-stopping-and-checkpointing?u=76281980&t=121)** At the end of each epoch, the performance of the current version of the model is compared to that of the best one saved so far.
>
> **[2:09](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/early-stopping-and-checkpointing?u=76281980&t=129)** If the validation metric shows improvement, the new version is saved to disc, replacing the previously saved version.
>
> **[2:16](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/early-stopping-and-checkpointing?u=76281980&t=136)** This ensures that the best version of the model is always recoverable, regardless of how training progresses or if unforeseen interruptions occur.
>
> **[2:26](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/early-stopping-and-checkpointing?u=76281980&t=146)** Checkpointing offers several advantages.
>
> **[2:29](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/early-stopping-and-checkpointing?u=76281980&t=149)** First, it guarantees that the best version of the model is preserved, even if continued training leads to overfitting.
>
> **[2:37](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/early-stopping-and-checkpointing?u=76281980&t=157)** Second, it provides fault tolerance, acting as a safety net in the event of system crashes or power failures.
>
> **[2:45](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/early-stopping-and-checkpointing?u=76281980&t=165)** Third, it allows flexibility, enabling you to experiment with different stopping criteria, without risking the loss of the best performing model.
>
> **[2:54](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/early-stopping-and-checkpointing?u=76281980&t=174)** Checkpointing though does have some limitations.
>
> **[2:57](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/early-stopping-and-checkpointing?u=76281980&t=177)** Saving model parameters requires additional storage, which can become a concern for large models.
>
> **[3:04](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/early-stopping-and-checkpointing?u=76281980&t=184)** Moreover, frequent checkpointing such as saving after every epoch can introduce delays due to increased input output operations.
>
> **[3:14](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/early-stopping-and-checkpointing?u=76281980&t=194)** Despite these limitations, checkpointing is a valuable tool for preserving model quality and ensuring training resilience.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2)
> **Analogies:** such as (2)
> **Code Keywords:** require (1)
> **Speakers:** - [instructor] (1)

#### Learning rate scheduling
> [LinkedIn Learning](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/learning-rate-scheduling?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/learning-rate-scheduling?u=76281980&t=0)** - [Instructor] Learning rate scheduling is a technique used in deep learning to adjust the learning rate during the training process to improve convergence and model performance.
>
> **[0:11](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/learning-rate-scheduling?u=76281980&t=11)** The learning rate is one of the most important settings because it determines how the model adjust its internal parameters, weights and biases, and response to errors.
>
> **[0:22](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/learning-rate-scheduling?u=76281980&t=22)** If the learning rate is too high, the model might skip over the best solution and never converge.
>
> **[0:28](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/learning-rate-scheduling?u=76281980&t=28)** If it's too low, training becomes slow and might get stuck in less optimal solutions.
>
> **[0:34](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/learning-rate-scheduling?u=76281980&t=34)** Learning rate scheduling solves this by automatically adjusting the learning rate over time to make training faster and more effective.
>
> **[0:43](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/learning-rate-scheduling?u=76281980&t=43)** At the beginning of training, models often benefit from a higher learning rate 'cause it allows for large quick adjustments that help the model move toward a good general area of the solution.
>
> **[0:55](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/learning-rate-scheduling?u=76281980&t=55)** As training progresses, the learning rate is gradually lowered, so the model can fine tune its parameters with smaller adjustments, reducing the chance of overshooting the best solution.
>
> **[1:07](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/learning-rate-scheduling?u=76281980&t=67)** There are several strategies to learn with scheduling, each with its own unique characteristics.
>
> **[1:13](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/learning-rate-scheduling?u=76281980&t=73)** Step decay reduces the learning rate by a fixed factor at regular intervals, providing a straightforward way to accelerate training early on while fine tuning later.
>
> **[1:24](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/learning-rate-scheduling?u=76281980&t=84)** This is like turning down the volume on a speaker in steps.
>
> **[1:29](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/learning-rate-scheduling?u=76281980&t=89)** It works well for training models where progress naturally slows down after a few stages.
>
> **[1:35](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/learning-rate-scheduling?u=76281980&t=95)** However, the abrupt changes in step decay can sometimes destabilize the training process.
>
> **[1:42](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/learning-rate-scheduling?u=76281980&t=102)** With exponential decay, instead of making abrupt changes, the learning rate is reduced gradually over time following a curve.
>
> **[1:52](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/learning-rate-scheduling?u=76281980&t=112)** Think of it as gently easing up the gas pedal in a car rather than slamming on the brakes.
>
> **[1:58](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/learning-rate-scheduling?u=76281980&t=118)** It avoids certain shifts in the learning rate, but does require careful tuning of the decay rate.
>
> **[2:05](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/learning-rate-scheduling?u=76281980&t=125)** Another popular method, cosine annealing, uses a cosine function to decrease the learning rate smoothly over time, often resetting periodically to encourage exploration of the lost landscape.
>
> **[2:19](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/learning-rate-scheduling?u=76281980&t=139)** Cosine annealing can be compared to dimming the light in the room using a dimmer switch.
>
> **[2:23](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/learning-rate-scheduling?u=76281980&t=143)** At first, the brightness decreases gradually and smoothly, creating a calming transition.
>
> **[2:30](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/learning-rate-scheduling?u=76281980&t=150)** Periodic resets are like momentarily brightening the lights again to inspect the room before dimming them once more.
>
> **[2:38](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/learning-rate-scheduling?u=76281980&t=158)** It's particularly useful for tasks where progress can stall and restarting at a slightly higher learning rate occasionally can help the model find better solutions.
>
> **[2:48](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/learning-rate-scheduling?u=76281980&t=168)** While effective, cosine annealing requires prior knowledge of the total training duration to plan its schedule.
>
> **[2:57](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/learning-rate-scheduling?u=76281980&t=177)** Instead of always reducing the learning rate, the cyclical learning rate cycles approach cycles the learning rate up and down between a minimum and maximum value.
>
> **[3:08](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/learning-rate-scheduling?u=76281980&t=188)** Cyclical learning rates can be compared to riding a bicycle up and down a series of hills and valleys.
>
> **[3:15](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/learning-rate-scheduling?u=76281980&t=195)** As you approach a steep incline, analogous to the difficult regions of the lost landscape, you pedal harder with increased effort to push through.
>
> **[3:25](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/learning-rate-scheduling?u=76281980&t=205)** Once you reach the top and start coasting downhill, analogous to the easier regions, you ease off and slow down to regain control.
>
> **[3:34](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/learning-rate-scheduling?u=76281980&t=214)** This technical adjustment helps balance exploration and refinement, ensuring steady progress without getting stuck or overshooting.
>
> **[3:44](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/learning-rate-scheduling?u=76281980&t=224)** The use of the cyclical learning rates helps the model escape areas where progress has stalled, especially in problems where the solution is not a straight path, but involves lots of peaks and valleys.
>
> **[3:56](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/learning-rate-scheduling?u=76281980&t=236)** However, it introduces additional hyperparameters such as a cycle length and amplitude, which can complicate tuning.
>
> **[4:06](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/learning-rate-scheduling?u=76281980&t=246)** Adaptive learning rate scheduling is a performance-driven approach, where the learning rate is adjusted based on how the model is doing.
>
> **[4:14](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/learning-rate-scheduling?u=76281980&t=254)** For example, if the model's performance on validation data doesn't improve after a set number of epochs, the learning rate is automatically adjusted.
>
> **[4:25](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/learning-rate-scheduling?u=76281980&t=265)** Adaptive learning rate scheduling is like driving a car with an automatic transmission.
>
> **[4:31](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/learning-rate-scheduling?u=76281980&t=271)** As you drive, the car adjusts its gears based on the terrain and speed.
>
> **[4:36](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/learning-rate-scheduling?u=76281980&t=276)** It shifts to lower gears for uphill climbs and higher gears for smooth flat roads.
>
> **[4:43](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/learning-rate-scheduling?u=76281980&t=283)** Using an adaptive learning rate schedule avoids wasting time when the current learning rate is no longer effective.
>
> **[4:50](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/learning-rate-scheduling?u=76281980&t=290)** However, it can prolong training if the patience parameter is not well-tuned.

> [!info]- Semantic Content
>
> **Analogies:** analogous to (2), think of it as (1), such as (1), for example (1)
> **Code Keywords:** require (1), function (1), switch (1)
> **CLI Commands:** make (1), find (1)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)

#### Training a deep learning model using callbacks
> [LinkedIn Learning](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/training-a-deep-learning-model-using-callbacks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/training-a-deep-learning-model-using-callbacks?u=76281980&t=0)** - [Instructor] In this video, you will learn how to use callbacks to apply early stopping and linear rate scheduling to a deep learning model in Python.
>
> **[0:10](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/training-a-deep-learning-model-using-callbacks?u=76281980&t=10)** I'll be running the code in the 05_07e file.
>
> **[0:14](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/training-a-deep-learning-model-using-callbacks?u=76281980&t=14)** You can follow along by completing the empty code cells in the 05_07b file.
>
> **[0:21](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/training-a-deep-learning-model-using-callbacks?u=76281980&t=21)** Know that this is the third in a three-video sequence that teaches you how to apply batch normalization, gradient clipping, early stopping, and learning rate scheduling to a deep learning model.
>
> **[0:34](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/training-a-deep-learning-model-using-callbacks?u=76281980&t=34)** If you have not done so, watch the previous course videos on how to apply batch normalization to a deep learning model and how to apply gradients clipping to a deep learning model.
>
> **[0:44](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/training-a-deep-learning-model-using-callbacks?u=76281980&t=44)** Those videos provide a detailed explanation of the prior code.
>
> **[0:49](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/training-a-deep-learning-model-using-callbacks?u=76281980&t=49)** Before we begin, let's run the code we created in those videos to get our environment up to speed.
>
> **[0:56](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/training-a-deep-learning-model-using-callbacks?u=76281980&t=56)** So as we've done in the past, the first thing we want to do is select our kernel.
>
> **[1:02](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/training-a-deep-learning-model-using-callbacks?u=76281980&t=62)** You can say Python environments in 3.10.
>
> **[1:06](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/training-a-deep-learning-model-using-callbacks?u=76281980&t=66)** Then I'm going to click on my current code cell and I'm going to say run previous code cells.
>
> **[1:12](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/training-a-deep-learning-model-using-callbacks?u=76281980&t=72)** I'm scroll up a little bit so I can monitor progress.
>
> **[1:19](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/training-a-deep-learning-model-using-callbacks?u=76281980&t=79)** Alright, so we're done there.
>
> **[1:23](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/training-a-deep-learning-model-using-callbacks?u=76281980&t=83)** In Keras, a callback is an object that can perform custom actions at specific points during the training process, such as at the end of each epoch or batch.
>
> **[1:34](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/training-a-deep-learning-model-using-callbacks?u=76281980&t=94)** One of the most commonly used callbacks is EarlyStopping, which monitors a particular metric, such as validation loss, and stops training if that metric does not improve after a specified number of epochs, which is known as patience.
>
> **[1:49](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/training-a-deep-learning-model-using-callbacks?u=76281980&t=109)** This helps prevent overfitting by halting training when the model has reached its optimal performance on the validation set.
>
> **[1:58](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/training-a-deep-learning-model-using-callbacks?u=76281980&t=118)** So to implement EarlyStopping, we're going to import early_stopping using keras.callbacks.
>
> **[2:04](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/training-a-deep-learning-model-using-callbacks?u=76281980&t=124)** So we're now going to specify the early stopping specifications.
>
> **[2:08](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/training-a-deep-learning-model-using-callbacks?u=76281980&t=128)** We're going to call early_stopping function.
>
> **[2:10](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/training-a-deep-learning-model-using-callbacks?u=76281980&t=130)** We're going to specify the metric to monitor, which is validation loss, specify the patience, which we learned about earlier, and we're going to say restore_best_weights is equal to true, which means that whenever we realize that the weights that we had before were better than the ones that we currently have, we should restore those ones, okay?
>
> **[2:30](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/training-a-deep-learning-model-using-callbacks?u=76281980&t=150)** So let's go ahead and run this to specify the early stopping specifications.
>
> **[2:36](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/training-a-deep-learning-model-using-callbacks?u=76281980&t=156)** Another commonly used callback in Keras is ReduceLROnPlateau.
>
> **[2:41](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/training-a-deep-learning-model-using-callbacks?u=76281980&t=161)** This implements learning rate scheduling.
>
> **[2:44](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/training-a-deep-learning-model-using-callbacks?u=76281980&t=164)** With this callback, the learning rate is automatically reduced when a monitored metric has stopped improving.
>
> **[2:51](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/training-a-deep-learning-model-using-callbacks?u=76281980&t=171)** So this is something that we have talked about in the previous video.
>
> **[2:55](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/training-a-deep-learning-model-using-callbacks?u=76281980&t=175)** So to implement learning rate scheduling here using ReduceLROnPlateau, we're going to go ahead and import ReduceLROnPlateau from keras.callbacks.
>
> **[3:05](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/training-a-deep-learning-model-using-callbacks?u=76281980&t=185)** Then we specify the requirements or the specifications for it.
>
> **[3:09](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/training-a-deep-learning-model-using-callbacks?u=76281980&t=189)** Want to monitor validation loss.
>
> **[3:11](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/training-a-deep-learning-model-using-callbacks?u=76281980&t=191)** Want to say the factor that we want to reduce the learning rate by is 0.1 every time.
>
> **[3:17](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/training-a-deep-learning-model-using-callbacks?u=76281980&t=197)** The patience duration is two, and the minimum learning rate that we want to have is 0.0001.
>
> **[3:24](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/training-a-deep-learning-model-using-callbacks?u=76281980&t=204)** Okay? So let's go ahead and specify that here.
>
> **[3:27](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/training-a-deep-learning-model-using-callbacks?u=76281980&t=207)** All right, so once we've specified both of these callbacks, early stopping and learning rate scheduling, using the ReduceLROnPlateau, we can now use these callbacks to train our model.
>
> **[3:42](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/training-a-deep-learning-model-using-callbacks?u=76281980&t=222)** So as defining our callbacks, we can combine them into a list and pass them to the callbacks argument in the fit method.
>
> **[3:50](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/training-a-deep-learning-model-using-callbacks?u=76281980&t=230)** So we're going to go ahead and create a callbacks list, my_callbacks.
>
> **[3:54](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/training-a-deep-learning-model-using-callbacks?u=76281980&t=234)** Create a list of those early stopping and learning rate scheduling.
>
> **[3:57](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/training-a-deep-learning-model-using-callbacks?u=76281980&t=237)** We're going to now fit our model, so we specify model.fit, the training data, the labels, number of epochs, the splits, batch size, and then in callbacks we specify the callback list that we just made.
>
> **[4:11](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/training-a-deep-learning-model-using-callbacks?u=76281980&t=251)** So let's go ahead and use that here.
>
> **[4:13](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/training-a-deep-learning-model-using-callbacks?u=76281980&t=253)** And so let's allow our model to train.
>
> **[4:16](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/training-a-deep-learning-model-using-callbacks?u=76281980&t=256)** So we're going to, we specified 20 epochs, so watch for that carefully here.
>
> **[4:21](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/training-a-deep-learning-model-using-callbacks?u=76281980&t=261)** So let's give you some time here to work through its process.
>
> **[4:26](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/training-a-deep-learning-model-using-callbacks?u=76281980&t=266)** The model is still training, and we notice that the training process has stopped at 11.
>
> **[4:34](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/training-a-deep-learning-model-using-callbacks?u=76281980&t=274)** Okay? So that's interesting.
>
> **[4:37](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/training-a-deep-learning-model-using-callbacks?u=76281980&t=277)** Even though we specified 20 epochs within the fit method up here, only 11 epochs were executed.
>
> **[4:46](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/training-a-deep-learning-model-using-callbacks?u=76281980&t=286)** This is because of early stopping.
>
> **[4:47](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/training-a-deep-learning-model-using-callbacks?u=76281980&t=287)** This is exactly what we're expecting to happen here.
>
> **[4:50](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/training-a-deep-learning-model-using-callbacks?u=76281980&t=290)** So early stopping detected that the validation loss had not improved for the configured patience period of three.
>
> **[4:57](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/training-a-deep-learning-model-using-callbacks?u=76281980&t=297)** So it halted the training process before reaching epoch 20.
>
> **[5:02](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/training-a-deep-learning-model-using-callbacks?u=76281980&t=302)** So now let's plot the training and validation loss metrics to get a better sense of how our model performed.
>
> **[5:13](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/training-a-deep-learning-model-using-callbacks?u=76281980&t=313)** So we see that what was going on here is that our model was improving.
>
> **[5:18](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/training-a-deep-learning-model-using-callbacks?u=76281980&t=318)** So we see a drop in the loss, and after a while, it starts to plateau, so that's kind of why it eventually stopped.
>
> **[5:25](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/training-a-deep-learning-model-using-callbacks?u=76281980&t=325)** So having added batch normalization, gradient clipping, early stopping, and learning rate scheduling to our training process, we have introduced multiple methods that help stabilize and optimize our deep learning model's behavior, right?
>
> **[5:40](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/training-a-deep-learning-model-using-callbacks?u=76281980&t=340)** And so each of these techniques address different potential pitfalls in model training, from exploding gradients to overfitting, and together, they all yield a model that converges more reliably and generalizes better on unseen data.
>
> **[5:55](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/training-a-deep-learning-model-using-callbacks?u=76281980&t=355)** So, congrats.
>
> **[5:56](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/training-a-deep-learning-model-using-callbacks?u=76281980&t=356)** If you've been following along through all three videos, it means that you now know how to apply batch normalization, gradient clipping, early stopping, and learning rate scheduling to a deep learning model in Python using Keras.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), function (1), implements (1), pass (1), while, (1)
> **Code Identifiers:** early_stopping (2), restore_best_weights (1), my_callbacks (1)
> **Definitions:** means that (2), is an  (1), known as (1)
> **CLI Commands:** python (3)
> **Versions:** 3.10 (1), 0.1 (1), 0.0001 (1)
> **UI Navigation:** click on (1), scroll up (1)
> **Analogies:** such as (2)
> **Cross-References:** previous video (1)


### Conclusion

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Continuing to optimize deep learning models
> [LinkedIn Learning](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/continuing-to-optimize-deep-learning-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/continuing-to-optimize-deep-learning-models?u=76281980&t=0)** - [Instructor] Congrats on completing deep learning with Python, optimizing deep learning models.
>
> **[0:06](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/continuing-to-optimize-deep-learning-models?u=76281980&t=6)** You've taken a critical step in mastering the techniques needed to fine tune and enhance the performance of deep learning models.
>
> **[0:13](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/continuing-to-optimize-deep-learning-models?u=76281980&t=13)** By now, you should have a solid understanding of key optimization strategies, including regularization techniques such as lasso, ridge and dropout.
>
> **[0:23](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/continuing-to-optimize-deep-learning-models?u=76281980&t=23)** Advanced optimization algorithms like RMSprop and Adam.
>
> **[0:28](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/continuing-to-optimize-deep-learning-models?u=76281980&t=28)** Approaches to hyper parameter tuning and advanced training techniques like batch normalization, early stopping, green clipping, and learning rate scheduling.
>
> **[0:40](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/continuing-to-optimize-deep-learning-models?u=76281980&t=40)** The knowledge you've acquired in this course will serve as a stepping stone for deeper exploration into the field of AI.
>
> **[0:47](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/continuing-to-optimize-deep-learning-models?u=76281980&t=47)** So what comes next?
>
> **[0:49](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/continuing-to-optimize-deep-learning-models?u=76281980&t=49)** Here are some recommendations to continue building your expertise.
>
> **[0:54](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/continuing-to-optimize-deep-learning-models?u=76281980&t=54)** The best way to solidify your understanding is through practice.
>
> **[0:58](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/continuing-to-optimize-deep-learning-models?u=76281980&t=58)** Take on projects that challenge you to optimize models for various tasks, such as image classification, text analysis, or time series forecasting.
>
> **[1:09](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/continuing-to-optimize-deep-learning-models?u=76281980&t=69)** Experiment with tuning hyper parameters, applying advanced regularization techniques, and implementing adaptive optimizers like Adam and RMSprop.
>
> **[1:20](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/continuing-to-optimize-deep-learning-models?u=76281980&t=80)** Additionally, consider collaborating on open source projects.
>
> **[1:25](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/continuing-to-optimize-deep-learning-models?u=76281980&t=85)** This will help you gain insights into larger scale workflows while building a portfolio that showcases your optimization expertise.
>
> **[1:34](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/continuing-to-optimize-deep-learning-models?u=76281980&t=94)** Now that you've gained proficiency in optimizing deep learning models, it's time to dive into more advanced and specialized topics.
>
> **[1:43](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/continuing-to-optimize-deep-learning-models?u=76281980&t=103)** Stay tuned for additional deep learning with Python courses in the series.
>
> **[1:48](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/continuing-to-optimize-deep-learning-models?u=76281980&t=108)** Additionally, you can check out other courses on recurrent neural networks and long short-term memory networks, as well as the groundbreaking transformer architecture, which has revolutionized natural language processing and other domains.
>
> **[2:04](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/continuing-to-optimize-deep-learning-models?u=76281980&t=124)** Next, explore a course on convolutional neural networks to deepen your understanding of computer vision.
>
> **[2:11](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/continuing-to-optimize-deep-learning-models?u=76281980&t=131)** CNNs are the backbone of tasks like image classification, object detection, and segmentation, and this course will help you master the architecture and applications.
>
> **[2:23](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/continuing-to-optimize-deep-learning-models?u=76281980&t=143)** To stay current in the rapidly evolving field of AI, immerse yourself in new research, industry trends and emerging tools.
>
> **[2:32](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/continuing-to-optimize-deep-learning-models?u=76281980&t=152)** Platforms like Archive, AI focus conferences and tech blogs are invaluable for keeping your skills sharp.
>
> **[2:40](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/continuing-to-optimize-deep-learning-models?u=76281980&t=160)** Engaging with a community of learners and practitioners through online forums, workshops, and meetups can provide fresh perspectives and motivate you to continue your journey.
>
> **[2:51](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/continuing-to-optimize-deep-learning-models?u=76281980&t=171)** Thank you for joining me on this exploration.
>
> **[2:55](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/continuing-to-optimize-deep-learning-models?u=76281980&t=175)** I hope this course has not only expanded your technical skills, but also inspired you to tackle more complex and impactful challenges in AI.
>
> **[3:05](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/continuing-to-optimize-deep-learning-models?u=76281980&t=185)** Keep experimenting, stay curious, and never hesitate to push your limits.
>
> **[3:11](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/continuing-to-optimize-deep-learning-models?u=76281980&t=191)** The world of deep learning offers endless opportunities and your potential to contribute is boundless.
>
> **[3:18](https://www.linkedin.com/learning/deep-learning-with-python-optimizing-deep-learning-models/continuing-to-optimize-deep-learning-models?u=76281980&t=198)** Good luck and I look forward to seeing you in the future courses.

> [!info]- Semantic Content
>
> **CLI Commands:** python (2)
> **Code Keywords:** continue (2)
> **Analogies:** such as (2)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Frederick Nwanganga]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/deep-learning-with-python-optimizing-deep-learning-models-3930062/codespaces)

## Skills Covered

- Python (Programming Language)
- Artificial Intelligence (AI)
- Deep Learning

## Path Context

### In [[Advance Your Skills in Deep Learning and Neural Networks]]
← [[AI Workshop- Build a Neural Network with PyTorch Lightning (2023)]] | **5 of 8** | [[Introduction to Generative Adversarial Networks (GANs)]] →

## Appears In

- [[Advance Your Skills in Deep Learning and Neural Networks]]

## Related Courses

_Courses sharing skills:_

- [[Deep Learning with Python- Convolutional Neural Networks]] — Python (Programming Language), Artificial Intelligence (AI), Deep Learning
- [[Advanced Python in Excel- Machine Learning]] — Python (Programming Language), Artificial Intelligence (AI)
- [[Hands-On AI- Image Processing with Python]] — Python (Programming Language), Artificial Intelligence (AI)
- [[Advanced Python Projects- Build AI Applications]] — Python (Programming Language), Artificial Intelligence (AI)
- [[Machine Learning with Python- Association Rules]] — Python (Programming Language), Artificial Intelligence (AI)

---

[↑ Back to top](#)