---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: machine-learning-foundations-linear-algebra
url: "https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra"
duration_minutes: 81
duration: 1h 21m
level: Intermediate
updated: 5/2/2025
learners: 28528
skills:
  - Machine Learning
  - Linear Algebra
  - Artificial Intelligence (AI)
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQFTT_xVgBuw-w/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1661472217519?e=2147483647&amp;v=beta&amp;t=m-S2YAVTbj6RlIqnhtQSwAeuVN8eTLJUyzr8JNL5Gtk"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Machine Learning Statistical Foundations Professional Certificate by Wolfram Research]]'
  - '[[Foundational Math for Machine Learning]]'
  - '[[Getting Started with AI and Machine Learning]]'
prev_courses:
  - '[[Artificial Intelligence Foundations- Machine Learning]]'
  - null
  - '[[Artificial Intelligence Foundations Thinking Machines]]'
next_courses:
  - '[[Machine Learning Foundations- Calculus]]'
  - '[[Machine Learning Foundations- Calculus]]'
  - '[[Deep Learning Getting Started]]'
path_nav: '[{"path":"Machine Learning Statistical Foundations Professional Certificate by Wolfram Research","position":2,"total":6,"prev":"Artificial Intelligence Foundations- Machine Learning","next":"Machine Learning Foundations- Calculus"},{"path":"Foundational Math for Machine Learning","position":1,"total":4,"prev":null,"next":"Machine Learning Foundations- Calculus"},{"path":"Getting Started with AI and Machine Learning","position":2,"total":7,"prev":"Artificial Intelligence Foundations Thinking Machines","next":"Deep Learning Getting Started"}]'
path_count: 3
tags:
  - course
  - topic/artificial-intelligence
  - topic/security
  - topic/data-science
  - skill/machine-learning
  - skill/linear-algebra
  - skill/artificial-intelligence-ai
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Machine%20Learning%20Foundations-%20Linear%20Algebra.md)

![Machine Learning Foundations: Linear Algebra](https://media.licdn.com/dms/image/v2/C560DAQFTT_xVgBuw-w/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1661472217519?e=2147483647&amp;v=beta&amp;t=m-S2YAVTbj6RlIqnhtQSwAeuVN8eTLJUyzr8JNL5Gtk)

# Machine Learning Foundations: Linear Algebra

> Ever wondered what’s really going on underneath a machine learning algorithm? The answer is linear algebra. Without it, machine learning can’t exist. Linear algebra is a prerequisite for understanding and creating nearly all machine learning algorithms, especially those that prop up neural networks, natural language processing tools, and deep learning models.Join instructor Terezija Semenski for a

> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra) | 1h 21m | Intermediate | 29K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Linear algebra the building block of ML](#linear-algebra-the-building-block-of-ml)
  - [What you should know](#what-you-should-know)
- [**1. Introduction to Linear Algebra**](#1-introduction-to-linear-algebra) (2 videos)
  - [Defining linear algebra](#defining-linear-algebra)
  - [Applications of linear algebra in ML](#applications-of-linear-algebra-in-ml)
- [**2. Vectors Basics**](#2-vectors-basics) (3 videos)
  - [Introduction to vectors](#introduction-to-vectors)
  - [Vector arithmetic](#vector-arithmetic)
  - [Coordinate system](#coordinate-system)
- [**3. Vector Projections and Basis**](#3-vector-projections-and-basis) (4 videos)
  - [Dot product of vectors](#dot-product-of-vectors)
  - [Scalar and vector projection](#scalar-and-vector-projection)
  - [Changing basis of vectors](#changing-basis-of-vectors)
  - [Basis, linear independence, and span](#basis-linear-independence-and-span)
- [**4. Introduction to Matrices**](#4-introduction-to-matrices) (4 videos)
  - [Matrices introduction](#matrices-introduction)
  - [Types of matrices](#types-of-matrices)
  - [Types of matrix transformation](#types-of-matrix-transformation)
  - [Composition or combination of matrix transformations](#composition-or-combination-of-matrix-transformations)
- [**5. Gaussian Elimination**](#5-gaussian-elimination) (3 videos)
  - [Solving linear equations using Gaussian elimination](#solving-linear-equations-using-gaussian-elimination)
  - [Gaussian elimination and finding the inverse matrix](#gaussian-elimination-and-finding-the-inverse-matrix)
  - [Inverse and determinant](#inverse-and-determinant)
- [**6. Matrices from Orthogonality to Gram–Schmidt Process**](#6-matrices-from-orthogonality-to-gramschmidt-process) (4 videos)
  - [Matrices changing basis](#matrices-changing-basis)
  - [Transforming to the new basis](#transforming-to-the-new-basis)
  - [Orthogonal matrix](#orthogonal-matrix)
  - [Gram–Schmidt process](#gramschmidt-process)
- [**7. Eigenvalues and Eigenvectors**](#7-eigenvalues-and-eigenvectors) (4 videos)
  - [Introduction to eigenvalues and eigenvectors](#introduction-to-eigenvalues-and-eigenvectors)
  - [Calculating eigenvalues and eigenvectors](#calculating-eigenvalues-and-eigenvectors)
  - [Changing to the eigenbasis](#changing-to-the-eigenbasis)
  - [Google PageRank algorithm](#google-pagerank-algorithm)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### Linear algebra the building block of ML
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/linear-algebra-the-building-block-of-ml?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/linear-algebra-the-building-block-of-ml?u=76281980&t=0)** - Have you ever wondered what happens under the hood of machine learning algorithms from images, speech recognition, trading algorithms to medical system diagnosis, all the way to the self-driving cars?
>
> **[0:11](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/linear-algebra-the-building-block-of-ml?u=76281980&t=11)** Machine learning is not only the future, it's all around us.
>
> **[0:15](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/linear-algebra-the-building-block-of-ml?u=76281980&t=15)** You can quickly learn the tools of machine learning without understanding the underlying math.
>
> **[0:20](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/linear-algebra-the-building-block-of-ml?u=76281980&t=20)** At the beginning, you'll probably be successful, but without knowing the basics of linear algebra, you won't be able to understand the object being optimized, choose the proper hyperparameters, and develop a better model.
>
> **[0:32](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/linear-algebra-the-building-block-of-ml?u=76281980&t=32)** Linear algebra is the building block of machine learning.
>
> **[0:36](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/linear-algebra-the-building-block-of-ml?u=76281980&t=36)** Hi, I'm Terezija Semenski.
>
> **[0:38](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/linear-algebra-the-building-block-of-ml?u=76281980&t=38)** I'm a software developer, mathematician, and a teacher with a passion for AI and machine learning.
>
> **[0:43](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/linear-algebra-the-building-block-of-ml?u=76281980&t=43)** Join me in this course and discover the power of linear algebra.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linear Algebra]] (3), [[Algorithms]] (2), [[Speech Recognition]] (1), ai (1), power (1)
> **Speakers:** - have (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/what-you-should-know?u=76281980&t=0)** - [Instructor] Before starting this course, let's explore what skills and knowledge you will need.
>
> **[0:06](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/what-you-should-know?u=76281980&t=6)** In order to truly be successful in this course, it will be helpful to have a solid understanding of algebra and geometry.
>
> **[0:15](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/what-you-should-know?u=76281980&t=15)** Basic Python programming knowledge will definitely help, though it's not strictly necessary.
>
> **[0:22](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/what-you-should-know?u=76281980&t=22)** This course is focused on linear algebra capabilities and its applications in Python code.
>
> **[0:29](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/what-you-should-know?u=76281980&t=29)** Our focus will be on the latest versions of Python 3.
>
> **[0:33](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/what-you-should-know?u=76281980&t=33)** So make sure you have it installed on your machine.
>
> **[0:38](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/what-you-should-know?u=76281980&t=38)** You will also want to make sure that you have Anaconda installed.
>
> **[0:42](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/what-you-should-know?u=76281980&t=42)** We're going to be working with Jupyter Notebooks.
>
> **[0:45](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/what-you-should-know?u=76281980&t=45)** So if you have never worked with Jupyter Notebooks before, then you can go check out the Jupyter Notebooks Basics window in my course Foundations of NumPy.
>
> **[0:57](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/what-you-should-know?u=76281980&t=57)** And that's about it.
>
> **[0:58](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/what-you-should-know?u=76281980&t=58)** So let's get ready to start our journey into linear algebra foundations.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (3), [[Linear Algebra]] (2), [[Programming]] (1)
> **CLI Commands:** python (3), make (2)
> **Tools:** jupyter (3), anaconda (1)
> **Versions:** python 3 (1)
> **Prerequisites:** make sure you have (1)
> **Speakers:** - [instructor] (1)


### 1. Introduction to Linear Algebra

[↑ Back to Table of Contents](#table-of-contents)

#### Defining linear algebra
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/defining-linear-algebra?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/defining-linear-algebra?u=76281980&t=0)** - [Instructor] When you hear the term linear algebra, the first thing that comes to your mind is probably algebra and you have flashbacks of high school math.
>
> **[0:10](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/defining-linear-algebra?u=76281980&t=10)** Hopefully, that sparks joy.
>
> **[0:12](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/defining-linear-algebra?u=76281980&t=12)** If not, don't worry.
>
> **[0:14](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/defining-linear-algebra?u=76281980&t=14)** We'll get through the linear algebra story step by step together.
>
> **[0:19](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/defining-linear-algebra?u=76281980&t=19)** Despite having a similar name, linear algebra is not an advanced or applied version of algebra.
>
> **[0:27](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/defining-linear-algebra?u=76281980&t=27)** Mathematicians sometimes become furious when people mix these two areas of mathematics, just as software developers are not keen on people mixing Java with JavaScript.
>
> **[0:39](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/defining-linear-algebra?u=76281980&t=39)** Algebra is a branch of mathematics in which arithmetical operations and formal manipulations are applied to abstract symbols rather than specific numbers.
>
> **[0:52](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/defining-linear-algebra?u=76281980&t=52)** In short, the term algebra is the study of mathematical symbols and the rules for manipulating these symbols.
>
> **[1:00](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/defining-linear-algebra?u=76281980&t=60)** Linear algebra is a branch of mathematics that lets you concisely describe coordinates and interactions of planes in higher dimensions and perform operations on them.
>
> **[1:13](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/defining-linear-algebra?u=76281980&t=73)** In short, linear algebra is the study of vectors and linear functions.
>
> **[1:20](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/defining-linear-algebra?u=76281980&t=80)** The main building blocks and areas of linear algebra are systems of linear equations, vectors and matrices, linear transformations, determinants, and vector spaces.
>
> **[1:35](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/defining-linear-algebra?u=76281980&t=95)** If you haven't engaged or even heard of vectors and matrices before, don't worry.
>
> **[1:41](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/defining-linear-algebra?u=76281980&t=101)** No prior knowledge is needed.
>
> **[1:43](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/defining-linear-algebra?u=76281980&t=103)** We'll learn everything together, starting from the beginning.
>
> **[1:48](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/defining-linear-algebra?u=76281980&t=108)** Linear algebra is extremely important in machine learning, also called ML.
>
> **[1:54](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/defining-linear-algebra?u=76281980&t=114)** Because when you are building a machine learning model, you are dealing with either vectors or matrices.
>
> **[2:02](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/defining-linear-algebra?u=76281980&t=122)** Large data sets have multiple row and columns.
>
> **[2:06](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/defining-linear-algebra?u=76281980&t=126)** These are nothing but matrices.
>
> **[2:09](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/defining-linear-algebra?u=76281980&t=129)** When you split your data set into training and testing data, you are performing operations on these matrices.
>
> **[2:17](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/defining-linear-algebra?u=76281980&t=137)** Let's jump in and explore linear algebra in depth.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linear Algebra]] (8), data (3), [[Java]] (1), [[JavaScript]] (1)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)

#### Applications of linear algebra in ML
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/applications-of-linear-algebra-in-ml?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/applications-of-linear-algebra-in-ml?u=76281980&t=0)** - [Instructor] Linear algebra is one of the main building blocks of machine learning.
>
> **[0:05](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/applications-of-linear-algebra-in-ml?u=76281980&t=5)** At its base, it is a study of vectors, matrices, and linear functions.
>
> **[0:10](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/applications-of-linear-algebra-in-ml?u=76281980&t=10)** So you have to be familiar with vectors, matrices, and their characteristics, as you're going to deal with them in ML.
>
> **[0:17](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/applications-of-linear-algebra-in-ml?u=76281980&t=17)** What about machine learning algorithms?
>
> **[0:21](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/applications-of-linear-algebra-in-ml?u=76281980&t=21)** Without knowing linear algebra, you cannot understand them and therefore cannot change and improve them.
>
> **[0:28](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/applications-of-linear-algebra-in-ml?u=76281980&t=28)** Let's explore nine most important applications of linear algebra.
>
> **[0:34](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/applications-of-linear-algebra-in-ml?u=76281980&t=34)** Data set and data files.
>
> **[0:36](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/applications-of-linear-algebra-in-ml?u=76281980&t=36)** In machine learning we fit the model on a data set.
>
> **[0:40](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/applications-of-linear-algebra-in-ml?u=76281980&t=40)** This data set is either a matrix or a vector.
>
> **[0:44](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/applications-of-linear-algebra-in-ml?u=76281980&t=44)** For example, our model could be a fitness related model that predicts quality of sleep.
>
> **[0:50](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/applications-of-linear-algebra-in-ml?u=76281980&t=50)** Images and photographs.
>
> **[0:53](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/applications-of-linear-algebra-in-ml?u=76281980&t=53)** If you're working on a computer vision application, then you're dealing with images or photographs.
>
> **[0:59](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/applications-of-linear-algebra-in-ml?u=76281980&t=59)** In this case, you cannot send an image to a model and expect it to understand it.
>
> **[1:04](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/applications-of-linear-algebra-in-ml?u=76281980&t=64)** Each image is made of pixels that are basically just colored squares of varying intensities.
>
> **[1:11](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/applications-of-linear-algebra-in-ml?u=76281980&t=71)** If you have a black and white image then it's a single pixel.
>
> **[1:15](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/applications-of-linear-algebra-in-ml?u=76281980&t=75)** And for colored images, it's three pixel values for RGB.
>
> **[1:20](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/applications-of-linear-algebra-in-ml?u=76281980&t=80)** All images are stored as a matrix.
>
> **[1:23](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/applications-of-linear-algebra-in-ml?u=76281980&t=83)** Each operation that is performed on the image from cropping, scaling, et cetera, is described using the notation and operations of linear algebra.
>
> **[1:34](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/applications-of-linear-algebra-in-ml?u=76281980&t=94)** Data preparation.
>
> **[1:36](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/applications-of-linear-algebra-in-ml?u=76281980&t=96)** Data preparation, such as dimensionality reduction and one hot encoding requires linear algebra.
>
> **[1:43](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/applications-of-linear-algebra-in-ml?u=76281980&t=103)** Usually we come across data that is made up of thousands of variables and our model becomes extremely complicated.
>
> **[1:52](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/applications-of-linear-algebra-in-ml?u=76281980&t=112)** That's when dimensionality reduction comes into play.
>
> **[1:56](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/applications-of-linear-algebra-in-ml?u=76281980&t=116)** Data sets are represented as matrices and then we can use matrix factorization methods to reduce it into its constituent parts.
>
> **[2:07](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/applications-of-linear-algebra-in-ml?u=76281980&t=127)** One hot encoding is used when working with categorical data, such as the class labels for classification problems or categorical input variables.
>
> **[2:18](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/applications-of-linear-algebra-in-ml?u=76281980&t=138)** It is common to encode categorical variables to make them easier to work with.
>
> **[2:24](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/applications-of-linear-algebra-in-ml?u=76281980&t=144)** Linear regression.
>
> **[2:26](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/applications-of-linear-algebra-in-ml?u=76281980&t=146)** It is usually used in machine learning for predicting numerical values in simple regression problems.
>
> **[2:33](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/applications-of-linear-algebra-in-ml?u=76281980&t=153)** The most common way of solving linear regression is via the least squares optimization that is solved using matrix factorization methods from linear regression.
>
> **[2:45](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/applications-of-linear-algebra-in-ml?u=76281980&t=165)** Regularization.
>
> **[2:47](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/applications-of-linear-algebra-in-ml?u=76281980&t=167)** Overfitting is one of the greatest obstacles in machine learning.
>
> **[2:51](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/applications-of-linear-algebra-in-ml?u=76281980&t=171)** When a model is too close a fit for the available data to the point that it does not perform well with any new or outside data.
>
> **[3:01](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/applications-of-linear-algebra-in-ml?u=76281980&t=181)** Regularization is a concept from linear algebra that is used to prevent the model from overfitting.
>
> **[3:08](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/applications-of-linear-algebra-in-ml?u=76281980&t=188)** Simple models are models that have smaller coefficient values.
>
> **[3:13](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/applications-of-linear-algebra-in-ml?u=76281980&t=193)** Regularization is a technique that is often used to encourage a model to minimize the size of coefficients while it's being fit on data.
>
> **[3:23](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/applications-of-linear-algebra-in-ml?u=76281980&t=203)** Principle component analysis.
>
> **[3:26](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/applications-of-linear-algebra-in-ml?u=76281980&t=206)** Modeling data with many features is challenging and it's hard to know which features of data are relevant and which are not.
>
> **[3:34](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/applications-of-linear-algebra-in-ml?u=76281980&t=214)** One of the methods for automatic reducing the number of columns of a data set is principle component analysis.
>
> **[3:42](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/applications-of-linear-algebra-in-ml?u=76281980&t=222)** This method is used in machine learning to create projections of high dimensional data for both visualization and for training models.
>
> **[3:52](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/applications-of-linear-algebra-in-ml?u=76281980&t=232)** The core of the PCA method is a metric factorization method.
>
> **[3:57](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/applications-of-linear-algebra-in-ml?u=76281980&t=237)** Latent semantic analysis.
>
> **[4:00](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/applications-of-linear-algebra-in-ml?u=76281980&t=240)** LSA is a form of data preparation used in natural language processing, a subfield of machine learning for working with text data.
>
> **[4:10](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/applications-of-linear-algebra-in-ml?u=76281980&t=250)** In this case, documents are usually represented as a large matrices of word occurrences.
>
> **[4:17](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/applications-of-linear-algebra-in-ml?u=76281980&t=257)** Then we can apply matrix factorization methods to them in order to be able to easily compare, query, and use them as the basis for the ML model.
>
> **[4:28](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/applications-of-linear-algebra-in-ml?u=76281980&t=268)** Recommender systems.
>
> **[4:30](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/applications-of-linear-algebra-in-ml?u=76281980&t=270)** Recommender systems are predictive modeling problems that involve the recommendation of products.
>
> **[4:38](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/applications-of-linear-algebra-in-ml?u=76281980&t=278)** They are used each time you buy something on Amazon or a similar shop and you get recommendations of products based on your previous purchases.
>
> **[4:48](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/applications-of-linear-algebra-in-ml?u=76281980&t=288)** Deep learning.
>
> **[4:50](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/applications-of-linear-algebra-in-ml?u=76281980&t=290)** Deep learning is a specific subfield of machine learning.
>
> **[4:54](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/applications-of-linear-algebra-in-ml?u=76281980&t=294)** Scaled up to multiple dimensions, deep learning methods work with vectors, matrices, and tensors of inputs and coefficients.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (18), [[Linear Algebra]] (6), [[Linear Regression]] (3), [[Deep Learning]] (3), [[Microsoft Products|Products]] (2)
> **Definitions:** is a  (6)
> **Env Vars:** rgb (1), pca (1), lsa (1)
> **Analogies:** such as (2), for example (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)


### 2. Vectors Basics

[↑ Back to Table of Contents](#table-of-contents)

#### Introduction to vectors
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/introduction-to-vectors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/introduction-to-vectors?u=76281980&t=0)** - [Instructor] When we began our journey into the unknown land of linear algebra, we mentioned a few terms, vectors and matrices, without even explaining what they are and why they're important.
>
> **[0:13](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/introduction-to-vectors?u=76281980&t=13)** Let's start from the basics.
>
> **[0:15](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/introduction-to-vectors?u=76281980&t=15)** Learning what vectors are and how they defer from scalars.
>
> **[0:19](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/introduction-to-vectors?u=76281980&t=19)** You've probably learned definitions of a scalar and vector.
>
> **[0:24](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/introduction-to-vectors?u=76281980&t=24)** Basically a scalar is just a number.
>
> **[0:26](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/introduction-to-vectors?u=76281980&t=26)** And we denote a scalar with a lower-case symbol, such as a or b.
>
> **[0:32](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/introduction-to-vectors?u=76281980&t=32)** Examples of scalars are weight, temperature, or blood pressure.
>
> **[0:37](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/introduction-to-vectors?u=76281980&t=37)** And they're represented by numbers, such as 200 pounds, 55 Fahrenheit, or 120 by 80.
>
> **[0:46](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/introduction-to-vectors?u=76281980&t=46)** We can understand what a vector is by simple example.
>
> **[0:50](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/introduction-to-vectors?u=76281980&t=50)** Imagine a moving car.
>
> **[0:52](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/introduction-to-vectors?u=76281980&t=52)** It has a measure called velocity.
>
> **[0:54](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/introduction-to-vectors?u=76281980&t=54)** It has both a quantity and a direction.
>
> **[0:58](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/introduction-to-vectors?u=76281980&t=58)** Such elements are called vectors, as opposed to scalars, for example, the price of the car, which has magnitude only.
>
> **[1:08](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/introduction-to-vectors?u=76281980&t=68)** We denote vectors with lowercase, bolded Roman letters, such as a and b.
>
> **[1:15](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/introduction-to-vectors?u=76281980&t=75)** Some texts use italics or print an arrow on top.
>
> **[1:20](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/introduction-to-vectors?u=76281980&t=80)** By definition a vector is an ordered list of numbers.
>
> **[1:24](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/introduction-to-vectors?u=76281980&t=84)** The two most important characteristics of vectors are dimensionality, the number of elements in a vector, and orientation, whether the vector is in column orientation standing up tall, or row orientation laying flat and wide.
>
> **[1:43](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/introduction-to-vectors?u=76281980&t=103)** Let's see a few examples of vectors.
>
> **[1:46](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/introduction-to-vectors?u=76281980&t=106)** X is a three dimensional column vector.
>
> **[1:50](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/introduction-to-vectors?u=76281980&t=110)** Y is a 2D column vector, and Z is a 3D row vector.
>
> **[1:56](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/introduction-to-vectors?u=76281980&t=116)** If you look at vectors, X and Z, you probably notice they have the same elements in the same order.
>
> **[2:03](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/introduction-to-vectors?u=76281980&t=123)** You could conclude they're the same, but technically they're different because X is column oriented and Z is row oriented.
>
> **[2:12](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/introduction-to-vectors?u=76281980&t=132)** You may think, "Why does it matter?"
>
> **[2:15](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/introduction-to-vectors?u=76281980&t=135)** If you use vectors for storing data, orientation usually doesn't matter.
>
> **[2:21](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/introduction-to-vectors?u=76281980&t=141)** But when performing arithmetic operations it's extremely important, since the wrong orientation leads to unexpected results or even errors.
>
> **[2:32](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/introduction-to-vectors?u=76281980&t=152)** The dimensionality in linear algebra, the number of elements in the vector, is called the length or the shape of the vector in Python.
>
> **[2:40](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/introduction-to-vectors?u=76281980&t=160)** We have a convention in linear algebra that assumes vectors are column oriented.
>
> **[2:47](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/introduction-to-vectors?u=76281980&t=167)** If they're row oriented, then they are written as with t where t indicates the transpose operation which converts a column vector into row vector.
>
> **[2:59](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/introduction-to-vectors?u=76281980&t=179)** If we would like to represent the vector graphically, then it would look like, the red arrow v is the vector, and in our case, a and b are scalars denoting the magnitude of v in horizontal and vertical directions.
>
> **[3:15](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/introduction-to-vectors?u=76281980&t=195)** The algebraic interpretation of a vector is an ordered list of numbers.
>
> **[3:20](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/introduction-to-vectors?u=76281980&t=200)** The geometric interpretation of a vector is a line that has a specific length and direction also called angle.
>
> **[3:28](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/introduction-to-vectors?u=76281980&t=208)** It is computed relative to the positive X-axis.
>
> **[3:32](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/introduction-to-vectors?u=76281980&t=212)** The two points of a vector are called the tail, where the vector starts, and the head that has the arrow tip, where it ends.
>
> **[3:41](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/introduction-to-vectors?u=76281980&t=221)** We can represent vectors in Python using several data types.
>
> **[3:46](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/introduction-to-vectors?u=76281980&t=226)** The simplest way to represent a vector is with a list.
>
> **[3:50](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/introduction-to-vectors?u=76281980&t=230)** For example, vectorAsList.
>
> **[3:53](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/introduction-to-vectors?u=76281980&t=233)** However, as many linear algebra operations don't work on Python list, we create vectors as NumPy arrays called ND arrays.
>
> **[4:03](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/introduction-to-vectors?u=76281980&t=243)** One example would be vectorAsArray.
>
> **[4:07](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/introduction-to-vectors?u=76281980&t=247)** This array is orientationless array meaning it's neither a row nor a column vector.
>
> **[4:13](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/introduction-to-vectors?u=76281980&t=253)** In NumPy, we indicate orientation with brackets.
>
> **[4:17](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/introduction-to-vectors?u=76281980&t=257)** Let's see it in two examples.
>
> **[4:19](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/introduction-to-vectors?u=76281980&t=259)** RowVector, the outer brackets just group all elements together in one object as an additional set of brackets indicates a row.
>
> **[4:30](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/introduction-to-vectors?u=76281980&t=270)** In case of column vector example, columnVector, we see it has only one column and five rows.
>
> **[4:37](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/introduction-to-vectors?u=76281980&t=277)** Now that we have discovered basic characteristics of vectors, we can head on to vector arithmetic and explore operations and vectors.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linear Algebra]] (4), [[Python (Programming Language)|Python]] (3), data (2)
> **Definitions:** is a  (4), is an  (2), is called (1)
> **Analogies:** such as (3), for example (2), imagine (1)
> **CLI Commands:** python (3)
> **Code Identifiers:** vectoraslist (1), vectorasarray (1), columnvector (1)
> **Cross-References:** we mentioned (1)
> **Speakers:** - [instructor] (1)

#### Vector arithmetic
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/vector-arithmetic-25657740?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/vector-arithmetic-25657740?u=76281980&t=0)** - [Instructor] Arithmetic operations in linear algebra are simple and intuitive, so let's jump right into it.
>
> **[0:07](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/vector-arithmetic-25657740?u=76281980&t=7)** We'll start with addition.
>
> **[0:09](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/vector-arithmetic-25657740?u=76281980&t=9)** To add two vectors, simply add each corresponding element.
>
> **[0:14](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/vector-arithmetic-25657740?u=76281980&t=14)** Addition is possible only for two vectors that have the same dimension.
>
> **[0:18](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/vector-arithmetic-25657740?u=76281980&t=18)** We cannot add a three-dimensional vector with a four-dimensional vector.
>
> **[0:24](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/vector-arithmetic-25657740?u=76281980&t=24)** For vector subtraction, the same rule applies.
>
> **[0:27](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/vector-arithmetic-25657740?u=76281980&t=27)** You can subtract the two vectors element-wise only if they have the same dimension.
>
> **[0:33](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/vector-arithmetic-25657740?u=76281980&t=33)** Let's head onto Jupyter Notebooks and try this out.
>
> **[0:37](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/vector-arithmetic-25657740?u=76281980&t=37)** We have already imported numpy as np.
>
> **[0:41](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/vector-arithmetic-25657740?u=76281980&t=41)** We'll define three vectors, a, b, and c, and then add vectors a and b, and after, try to add vectors a and c.
>
> **[1:00](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/vector-arithmetic-25657740?u=76281980&t=60)** As you can see, when we try to add a and c, we get an error because their dimensions don't match.
>
> **[1:07](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/vector-arithmetic-25657740?u=76281980&t=67)** Next, let's subtract a and b, and then try to subtract a and c.
>
> **[1:19](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/vector-arithmetic-25657740?u=76281980&t=79)** We also get an error in case of a and c.
>
> **[1:24](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/vector-arithmetic-25657740?u=76281980&t=84)** We can also multiply two vectors when they have the same length.
>
> **[1:28](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/vector-arithmetic-25657740?u=76281980&t=88)** Let's multiply vectors a and b by typing a*b.
>
> **[1:34](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/vector-arithmetic-25657740?u=76281980&t=94)** Similarly, we can divide vectors a and b using / operator by typing a/b.
>
> **[1:42](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/vector-arithmetic-25657740?u=76281980&t=102)** The next operation we'll explore is vector scalar multiplication.
>
> **[1:47](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/vector-arithmetic-25657740?u=76281980&t=107)** A scalar is just a number, so vector scalar multiplication is simple and straightforward.
>
> **[1:53](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/vector-arithmetic-25657740?u=76281980&t=113)** We're going to multiply each vector element by the scalar.
>
> **[1:57](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/vector-arithmetic-25657740?u=76281980&t=117)** It is important to memorize that there is a difference if we create a vector as a list or a vector as a ndarray.
>
> **[2:06](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/vector-arithmetic-25657740?u=76281980&t=126)** Let's see it in a basic example.
>
> **[2:08](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/vector-arithmetic-25657740?u=76281980&t=128)** We'll define scalar and name it just scalar, and then create a list as a vector and define it as list_a, and then convert that list into ndarray and define it as list_as_array.
>
> **[2:25](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/vector-arithmetic-25657740?u=76281980&t=145)** If we multiply our first vector with a scalar, we get the list printed two times.
>
> **[2:33](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/vector-arithmetic-25657740?u=76281980&t=153)** That is not an operation of scalar vector multiplication.
>
> **[2:37](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/vector-arithmetic-25657740?u=76281980&t=157)** In the case when a vector is stored as a ndarray, then we have element-wise multiplication.
>
> **[2:45](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/vector-arithmetic-25657740?u=76281980&t=165)** Let's type in scalar*list_as_array to get our vector scalar multiplication.
>
> **[2:54](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/vector-arithmetic-25657740?u=76281980&t=174)** Cool, so we have learned basic arithmetic operations with vectors.
>
> **[2:59](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/vector-arithmetic-25657740?u=76281980&t=179)** What is also special with these operations is that we can see geometrical interpretation of them.
>
> **[3:05](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/vector-arithmetic-25657740?u=76281980&t=185)** To add two vectors, you have to place the vector such that the tail of one vector is at the head of the other vector.
>
> **[3:13](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/vector-arithmetic-25657740?u=76281980&t=193)** The sum vector traverses from the tail of the first vector to the head of the second.
>
> **[3:20](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/vector-arithmetic-25657740?u=76281980&t=200)** To subtract vectors, we also have a straightforward procedure.
>
> **[3:24](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/vector-arithmetic-25657740?u=76281980&t=204)** You have to up the two vectors such that their tails are at the same coordinate.
>
> **[3:30](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/vector-arithmetic-25657740?u=76281980&t=210)** The difference vector is the line that goes from the head of the negative vector to the head of the positive vector.
>
> **[3:37](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/vector-arithmetic-25657740?u=76281980&t=217)** What about vector scalar multiplication?
>
> **[3:40](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/vector-arithmetic-25657740?u=76281980&t=220)** For vector scalar multiplication, we have four possible cases that depend on whether the scalar is greater than one, between one and zero, exactly zero, or negative.
>
> **[3:52](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/vector-arithmetic-25657740?u=76281980&t=232)** Only in the case when the scalar is negative, the direction of the vector will change.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** next (2), [[Linear Algebra]] (1)
> **Code Identifiers:** list_as_array (2)
> **Tools:** jupyter (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Coordinate system
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/coordinate-system?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/coordinate-system?u=76281980&t=0)** - Have you ever played chess or watch someone else played?
>
> **[0:04](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/coordinate-system?u=76281980&t=4)** If you have, then you know that a square board is divided into eight rows and eight columns.
>
> **[0:10](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/coordinate-system?u=76281980&t=10)** A coordinate for a space on a chessboard is a combination of a row and a column.
>
> **[0:16](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/coordinate-system?u=76281980&t=16)** I like to think of a Cartesian coordinate system as a chessboard, just like in chess where you can locate a figure by its combination of number one to eight for a row and later A to H for column.
>
> **[0:31](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/coordinate-system?u=76281980&t=31)** We can locate a point by its combination of numbers.
>
> **[0:35](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/coordinate-system?u=76281980&t=35)** Coordinate system is important because it describes where a certain position is located in a two-dimensional area.
>
> **[0:43](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/coordinate-system?u=76281980&t=43)** Coordinates have two numbers, the x-coordinate and the y-coordinate.
>
> **[0:48](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/coordinate-system?u=76281980&t=48)** The x-axis runs left and right and the y-axis runs up and down.
>
> **[0:54](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/coordinate-system?u=76281980&t=54)** The axes x and y meet at (0, 0) coordinate at the center that is called the origin.
>
> **[1:02](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/coordinate-system?u=76281980&t=62)** A point is denoted by its distance along the x-axis followed by its distance along the y-axis.
>
> **[1:09](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/coordinate-system?u=76281980&t=69)** If we want to represent a point 2, 3 then we would go two to the right on the x-axis and three up along the y-axis.
>
> **[1:18](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/coordinate-system?u=76281980&t=78)** Let's see another example, point (-3, 1).
>
> **[1:22](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/coordinate-system?u=76281980&t=82)** First we would go minus three left along the x-axis and one up along the y-axis.
>
> **[1:29](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/coordinate-system?u=76281980&t=89)** As you can see coordinates are always described with the x-coordinate first followed by the y-coordinate.
>
> **[1:37](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/coordinate-system?u=76281980&t=97)** The x-axis runs left and right and the y-axis runs up and down.
>
> **[1:43](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/coordinate-system?u=76281980&t=103)** Simple as that.
>
> **[1:44](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/coordinate-system?u=76281980&t=104)** If we define two points A (1, 0) and B (0, 1) and the third point is the origin, O (0, 0).
>
> **[1:54](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/coordinate-system?u=76281980&t=114)** Then we can define vector OA and vector OB.
>
> **[1:59](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/coordinate-system?u=76281980&t=119)** And they both have magnitudes that are equal to one.
>
> **[2:03](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/coordinate-system?u=76281980&t=123)** These vectors are called the unit vectors along the x and y-axis.
>
> **[2:09](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/coordinate-system?u=76281980&t=129)** We usually use notations I for the vector OA and J for the vector OB.
>
> **[2:16](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/coordinate-system?u=76281980&t=136)** Now let's connect this with vector addition.
>
> **[2:20](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/coordinate-system?u=76281980&t=140)** If we choose another two points, C (4, 0) on x-axis and D (0, 3) on y-axis then the sum of the two vectors OC and OD would equal 4I plus 3J.
>
> **[2:37](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/coordinate-system?u=76281980&t=157)** We can use a rule for vector addition by placing the height of the vector OD at the tail of the vector OC.
>
> **[2:46](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/coordinate-system?u=76281980&t=166)** The sum of vector OP traverses from the head of the first vector to the tail of the second.
>
> **[2:53](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/coordinate-system?u=76281980&t=173)** Now that we have learned vector basics and how to represent them in a coordinate system, let's explore more complex vector operations that will allow us to transform vector space.

> [!info]- Semantic Content
>
> **Definitions:** is a  (1), is called (1)
> **Analogies:** just like (1)
> **Speakers:** - have (1)


### 3. Vector Projections and Basis

[↑ Back to Table of Contents](#table-of-contents)

#### Dot product of vectors
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/dot-product-of-vectors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/dot-product-of-vectors?u=76281980&t=0)** - [Narrator] Imagine a machine learning algorithm gets three images, first one of an apple, second one of a pear, and a third one, unknown.
>
> **[0:10](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/dot-product-of-vectors?u=76281980&t=10)** What we would like to know is if it is more probable for the unknown image to be labeled as an apple or a pear?
>
> **[0:18](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/dot-product-of-vectors?u=76281980&t=18)** In the core of this calculation is a dot product of two vectors.
>
> **[0:22](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/dot-product-of-vectors?u=76281980&t=22)** It is widely used in machine learning, as it is used in many operations and algorithms.
>
> **[0:29](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/dot-product-of-vectors?u=76281980&t=29)** There are three different ways it can be represented with symbols.
>
> **[0:33](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/dot-product-of-vectors?u=76281980&t=33)** We are going to use the dot notation.
>
> **[0:36](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/dot-product-of-vectors?u=76281980&t=36)** The dot product of two vectors is calculated by multiplying their corresponding elements by each other and then summing them all.
>
> **[0:45](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/dot-product-of-vectors?u=76281980&t=45)** It's a single number that provides information about the relationship between two vectors.
>
> **[0:51](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/dot-product-of-vectors?u=76281980&t=51)** It could be represented with the following formula, where a and b are vectors of the same dimensionality and ai represent the ith element of a.
>
> **[1:02](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/dot-product-of-vectors?u=76281980&t=62)** Let's see how it works in a simple example.
>
> **[1:05](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/dot-product-of-vectors?u=76281980&t=65)** If you have two vectors, a, whose elements are integers from 1 to 5, and vector b, whose elements are integers from 6 to 10, then their dot product is calculated by multiplying first element of vector a with the first element the vector b, and then the second elements up to the fifth elements.
>
> **[1:26](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/dot-product-of-vectors?u=76281980&t=86)** And finally, we have to sum over all the individual products.
>
> **[1:31](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/dot-product-of-vectors?u=76281980&t=91)** Let's head into our Jupyter notebook where we have already imported NumPy as np.
>
> **[1:38](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/dot-product-of-vectors?u=76281980&t=98)** We'll create two vectors, a and b.
>
> **[1:42](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/dot-product-of-vectors?u=76281980&t=102)** And to calculate dot product, we only have to use the dot function that does it for us by typing np.dot a,b, simple as that.
>
> **[1:54](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/dot-product-of-vectors?u=76281980&t=114)** We can look at the dot product of two vectors as a measure of similarity or mapping between two vectors.
>
> **[2:02](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/dot-product-of-vectors?u=76281980&t=122)** There are two basic properties of dot product that are extremely important.
>
> **[2:06](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/dot-product-of-vectors?u=76281980&t=126)** The dot product is a commutative operation, meaning if vectors switch places, dot product stays the same.
>
> **[2:14](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/dot-product-of-vectors?u=76281980&t=134)** And the dot product is distributive over addition, meaning the following formula applies.
>
> **[2:22](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/dot-product-of-vectors?u=76281980&t=142)** Let's check these two properties on our vectors a and b, and let's introduce the third vector c.
>
> **[2:29](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/dot-product-of-vectors?u=76281980&t=149)** We can first calculate np.dot b,a, and we see it's the same as np.dot a,b.
>
> **[2:40](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/dot-product-of-vectors?u=76281980&t=160)** Next, let's calculate np.dot a,b+c and store it as the first_result and then, np.dot a,b + np.dot a,c and store it as the second_result.
>
> **[3:02](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/dot-product-of-vectors?u=76281980&t=182)** After we run our code, we see we got the same result.
>
> **[3:06](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/dot-product-of-vectors?u=76281980&t=186)** Great, now we can continue exploring vector features.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** product (9), [[Algorithms]] (1), ai (1), [[Microsoft Products|Products]] (1), next (1)
> **Code Identifiers:** first_result (1), second_result (1)
> **Definitions:** is a  (2)
> **Tools:** jupyter (1)
> **Analogies:** imagine (1)
> **Speakers:** - [narrator] (1)

#### Scalar and vector projection
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/scalar-and-vector-projection-25655798?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/scalar-and-vector-projection-25655798?u=76281980&t=0)** - [Narrator] Scalar and vector projections are an extremely important part of machine learning because they make mathematical operations and applying machine learning models easier.
>
> **[0:11](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/scalar-and-vector-projection-25655798?u=76281980&t=11)** Before we dive into understanding them, we first need to understand the magnitude or length of the vector.
>
> **[0:18](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/scalar-and-vector-projection-25655798?u=76281980&t=18)** The magnitude of a vector, also called the norm of the geometric length, is the distance from the tail to head of a vector, and it's computed using the standard Euclidean distance formula, the square root of the sum of squared vector elements.
>
> **[0:36](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/scalar-and-vector-projection-25655798?u=76281980&t=36)** Vector magnitude is indicated using double vertical bars around the vector.
>
> **[0:42](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/scalar-and-vector-projection-25655798?u=76281980&t=42)** There is a formula we use to calculate that looks like this.
>
> **[0:46](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/scalar-and-vector-projection-25655798?u=76281980&t=46)** Don't panic if it looks complex.
>
> **[0:48](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/scalar-and-vector-projection-25655798?u=76281980&t=48)** In NumPy, we have a function that does this job for us called norm.
>
> **[0:53](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/scalar-and-vector-projection-25655798?u=76281980&t=53)** So if we want to calculate magnitude of a vector A, we would just need to type magnitude equals np.norm(a).
>
> **[1:03](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/scalar-and-vector-projection-25655798?u=76281980&t=63)** Cool. Let's see what a vector projection is.
>
> **[1:07](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/scalar-and-vector-projection-25655798?u=76281980&t=67)** A vector projection of a vector A onto another vector B is the orthogonal projection of A onto B.
>
> **[1:15](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/scalar-and-vector-projection-25655798?u=76281980&t=75)** Let's understand the concept of vector projection by looking at a simple graphic.
>
> **[1:21](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/scalar-and-vector-projection-25655798?u=76281980&t=81)** You can visualize the projection of A onto B as the shadow of A falling on B if the sun were to shine on B at the right angle.
>
> **[1:31](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/scalar-and-vector-projection-25655798?u=76281980&t=91)** In order to project vector A onto vector B, we have the following formula.
>
> **[1:37](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/scalar-and-vector-projection-25655798?u=76281980&t=97)** Take the dot product of vectors A and B and divide it by magnitude of B.
>
> **[1:42](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/scalar-and-vector-projection-25655798?u=76281980&t=102)** This gives us a scalar value, which is called the component of scalar projection of A in the direction of vector B.
>
> **[1:50](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/scalar-and-vector-projection-25655798?u=76281980&t=110)** In order to calculate a vector projection, we have to multiply the scalar projection with a unit factor of B.
>
> **[1:58](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/scalar-and-vector-projection-25655798?u=76281980&t=118)** Now, let's try it out by opening our Jupyter notebook.
>
> **[2:02](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/scalar-and-vector-projection-25655798?u=76281980&t=122)** In order to simplify the calculation, when changing the basis, we will choose orthogonal vectors F1 and F2.
>
> **[2:11](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/scalar-and-vector-projection-25655798?u=76281980&t=131)** We'll also need to import the norm function from the linalg module by typing from numpy import lingalg as lng.
>
> **[2:22](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/scalar-and-vector-projection-25655798?u=76281980&t=142)** Next, let's create two vectors A and B.
>
> **[2:26](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/scalar-and-vector-projection-25655798?u=76281980&t=146)** To calculate a norm of a vector A, we just have to type lng.norm(a).
>
> **[2:35](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/scalar-and-vector-projection-25655798?u=76281980&t=155)** Now let's calculate the projection of vector A onto vector B.
>
> **[2:40](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/scalar-and-vector-projection-25655798?u=76281980&t=160)** The projection of vector A onto vector B, we just have to divide dot product of A and B with the dot product of B and multiply it with the vector B.
>
> **[2:51](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/scalar-and-vector-projection-25655798?u=76281980&t=171)** Great, and just print it out to display it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** product (3), next (1)
> **Definitions:** is a  (1), is called (1)
> **CLI Commands:** make (1)
> **Tools:** jupyter (1)
> **Speakers:** - [narrator] (1)

#### Changing basis of vectors
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/changing-basis-of-vectors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/changing-basis-of-vectors?u=76281980&t=0)** - Numerous supplied machine learning problems can be reduced by changing from one coordinate system to another coordinate system, which is basically the same as changing from one basis to another.
>
> **[0:13](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/changing-basis-of-vectors?u=76281980&t=13)** Up until now we have learned that the vector is an object that takes you from the origin into some point in space.
>
> **[0:20](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/changing-basis-of-vectors?u=76281980&t=20)** A coordinate system is defined by unit vectors that we have named I and J.
>
> **[0:26](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/changing-basis-of-vectors?u=76281980&t=26)** Now, we are going to define them as 'e one' and 'e two'.
>
> **[0:30](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/changing-basis-of-vectors?u=76281980&t=30)** These unit factors have coordinates one zero and zero one respectively.
>
> **[0:36](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/changing-basis-of-vectors?u=76281980&t=36)** Every vector in space is a unique combination of these basis vectors.
>
> **[0:41](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/changing-basis-of-vectors?u=76281980&t=41)** Let's define vector 'a' that will be four units along 'e one' and three units down along 'e two'.
>
> **[0:49](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/changing-basis-of-vectors?u=76281980&t=49)** So, vector 'a' is equal to vector sum four 'e one', plus minus three 'e two', or we can write it down as a list, four minus three.
>
> **[1:00](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/changing-basis-of-vectors?u=76281980&t=60)** Basis vectors, form basis for space.
>
> **[1:03](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/changing-basis-of-vectors?u=76281980&t=63)** And any vector in this space can simply be written as a linear combination of these two vectors.
>
> **[1:10](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/changing-basis-of-vectors?u=76281980&t=70)** There are three properties of basis vectors.
>
> **[1:14](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/changing-basis-of-vectors?u=76281980&t=74)** They're linearly independent of each other, meaning if you take vector 'e one' and multiply it with a scalar, you cannot get a vector 'e two'.
>
> **[1:24](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/changing-basis-of-vectors?u=76281980&t=84)** The same goes vice versa for vector 'e two'.
>
> **[1:27](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/changing-basis-of-vectors?u=76281980&t=87)** They spend the whole space, meaning that any vector in that space can be written as a linear combination of these two vectors.
>
> **[1:36](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/changing-basis-of-vectors?u=76281980&t=96)** They aren't unique.
>
> **[1:38](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/changing-basis-of-vectors?u=76281980&t=98)** We can find many sets of basis vectors.
>
> **[1:41](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/changing-basis-of-vectors?u=76281980&t=101)** I could also describe a vector 'a' as a sum of some other vectors that I could use to define the space.
>
> **[1:50](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/changing-basis-of-vectors?u=76281980&t=110)** So, I could have another set of vectors 'f' and define them as 'f one' that will have coordinates to one, and 'f two that will have coordinates minus one, two.
>
> **[2:01](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/changing-basis-of-vectors?u=76281980&t=121)** And we can then define vector 'a' by using vectors 'f one' and 'f two'.
>
> **[2:07](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/changing-basis-of-vectors?u=76281980&t=127)** That is where dot product comes into play.
>
> **[2:10](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/changing-basis-of-vectors?u=76281980&t=130)** Because we can use it to find the numbers for vector 'a' in the new basis 'f'.
>
> **[2:16](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/changing-basis-of-vectors?u=76281980&t=136)** If we can make a vector projection of a vector 'a', on 'f one' and a vector projection on 'f two', and when we sum these two vector projections, we can get exactly vector 'a' in the set of 'f' basis vector.
>
> **[2:31](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/changing-basis-of-vectors?u=76281980&t=151)** Then vector a will have some scalar multiplied with 'f one', plus some scalar multiplied with 'f two'.
>
> **[2:39](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/changing-basis-of-vectors?u=76281980&t=159)** We can write it down as, a equals lambda one 'f one', plus lambda two 'f two'.
>
> **[2:46](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/changing-basis-of-vectors?u=76281980&t=166)** In order to change the basis vectors 'f one' and 'f two', have to be orthogonal.
>
> **[2:52](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/changing-basis-of-vectors?u=76281980&t=172)** We can check it in our example by calculating the dot product.
>
> **[2:56](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/changing-basis-of-vectors?u=76281980&t=176)** In our case, we have two multiplied with minus one, plus one multiplied with two equals zero, it's zero.
>
> **[3:04](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/changing-basis-of-vectors?u=76281980&t=184)** So our vectors are 90 degrees orthogonal.
>
> **[3:08](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/changing-basis-of-vectors?u=76281980&t=188)** Great.
>
> **[3:09](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/changing-basis-of-vectors?u=76281980&t=189)** Now, let's calculate vector projection of 'a' on 'f one', it's equal dot product of 'a' an 'f one', divided by the length of 'f one'.
>
> **[3:19](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/changing-basis-of-vectors?u=76281980&t=199)** We have four multiplied with two, plus one multiplied with minus three, divided by two squared plus one squared.
>
> **[3:28](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/changing-basis-of-vectors?u=76281980&t=208)** We get one.
>
> **[3:29](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/changing-basis-of-vectors?u=76281980&t=209)** And when we multiply it with 'f one', we get two, one.
>
> **[3:32](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/changing-basis-of-vectors?u=76281980&t=212)** Similarly, we have to calculate vector projection of 'a' on 'f two'.
>
> **[3:39](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/changing-basis-of-vectors?u=76281980&t=219)** It's equal four multiplied with minus one, plus two multiplied with minus three, divided by minus one squared plus two squared.
>
> **[3:48](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/changing-basis-of-vectors?u=76281980&t=228)** We get minus two.
>
> **[3:49](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/changing-basis-of-vectors?u=76281980&t=229)** And when we multiply it with 'f two', we get two minus four.
>
> **[3:54](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/changing-basis-of-vectors?u=76281980&t=234)** Now, we can write vector 'a', four minus three as one multiplied with two, one, plus minus two multiplied with minus one, two.
>
> **[4:05](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/changing-basis-of-vectors?u=76281980&t=245)** So, we have covered our 'e' set of basis vectors to 'f' set of basis vectors, using a simple procedure called changing basis of vectors.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** product (3)
> **CLI Commands:** find (2), make (1)
> **Definitions:** is an  (1), is a  (1)
> **Speakers:** - numerous (1)

#### Basis, linear independence, and span
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/basis-linear-independence-and-span?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/basis-linear-independence-and-span?u=76281980&t=0)** - [Instructor] We can build up every vector in the vector space from the elements in a spanning set using only the operations of addition and scalar multiplication.
>
> **[0:10](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/basis-linear-independence-and-span?u=76281980&t=10)** By definition, a spanning set is: "The set v1 until vn is a spanning set for V "if, and only if, every vector in V "can be written as a linear combination "of v1, v2, until vn."
>
> **[0:25](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/basis-linear-independence-and-span?u=76281980&t=25)** Let's explore spanning set with a few simple examples.
>
> **[0:30](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/basis-linear-independence-and-span?u=76281980&t=30)** If we draw a single nonzero vector, v1, then the span consists of all vectors of the form lambda1 a1.
>
> **[0:40](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/basis-linear-independence-and-span?u=76281980&t=40)** Lambda1 can be positive, negative, or zero.
>
> **[0:43](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/basis-linear-independence-and-span?u=76281980&t=43)** Say if you take a multiple of v1, you can get anywhere along the one-dimensional space of a line.
>
> **[0:51](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/basis-linear-independence-and-span?u=76281980&t=51)** As you can see, for any point not on that line, the corresponding vector will not be in the span v1.
>
> **[0:59](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/basis-linear-independence-and-span?u=76281980&t=59)** If we want to span the entire space, we'll need at least two vectors.
>
> **[1:04](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/basis-linear-independence-and-span?u=76281980&t=64)** The easiest way to do that is by selecting the basis vector e1 that is equal 1,0 and e2 that is equal to 0,1.
>
> **[1:15](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/basis-linear-independence-and-span?u=76281980&t=75)** Any vector a in R2 can be represented as the linear combination of e1 and e2, and hence e1 and e2 is a spanning set for R2.
>
> **[1:27](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/basis-linear-independence-and-span?u=76281980&t=87)** We can write it as a = lambda1 e1 + lambda2 e2.
>
> **[1:34](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/basis-linear-independence-and-span?u=76281980&t=94)** It's called a linear combination of two vectors.
>
> **[1:38](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/basis-linear-independence-and-span?u=76281980&t=98)** By having a combination of e1 and e2, you can get anywhere in the plane.
>
> **[1:44](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/basis-linear-independence-and-span?u=76281980&t=104)** There are just two exceptions.
>
> **[1:47](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/basis-linear-independence-and-span?u=76281980&t=107)** When we have two vectors that line up in the same direction or when these two vectors are null vectors.
>
> **[1:55](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/basis-linear-independence-and-span?u=76281980&t=115)** Span of two vectors is a set of all possible vectors that can be reached with a given pair of vectors.
>
> **[2:03](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/basis-linear-independence-and-span?u=76281980&t=123)** We have learned that we can choose different basis vectors, not just natural basis.
>
> **[2:08](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/basis-linear-independence-and-span?u=76281980&t=128)** The basis is a set of n vectors that are linearly independent of each other.
>
> **[2:14](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/basis-linear-independence-and-span?u=76281980&t=134)** But what does this mean?
>
> **[2:16](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/basis-linear-independence-and-span?u=76281980&t=136)** If vectors v1, v2, and v3 are basis vectors, I cannot write v3 as the linear combination of vectors v1 and v2.
>
> **[2:27](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/basis-linear-independence-and-span?u=76281980&t=147)** We cannot write it as v3 = lambda1 v1 + lambda2 v2.
>
> **[2:33](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/basis-linear-independence-and-span?u=76281980&t=153)** The same applies for vectors v1 and v3.
>
> **[2:37](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/basis-linear-independence-and-span?u=76281980&t=157)** The important thing to notice and remember that for vectors to become bases, they don't have to be unit vectors.
>
> **[2:45](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/basis-linear-independence-and-span?u=76281980&t=165)** So they can be any given length.
>
> **[2:48](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/basis-linear-independence-and-span?u=76281980&t=168)** They don't have to be orthogonal.
>
> **[2:50](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/basis-linear-independence-and-span?u=76281980&t=170)** So they don't have to be 90 degrees to each other.

> [!info]- Semantic Content
>
> **Definitions:** is a  (4)
> **Speakers:** - [instructor] (1)


### 4. Introduction to Matrices

[↑ Back to Table of Contents](#table-of-contents)

#### Matrices introduction
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/matrices-introduction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/matrices-introduction?u=76281980&t=0)** - [Instructor] Data and business science and machine learning is often organized into rows and columns to form rectangular arrays called matrices.
>
> **[0:10](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/matrices-introduction?u=76281980&t=10)** They often appear as tables of numerical data that arise from physical observations.
>
> **[0:16](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/matrices-introduction?u=76281980&t=16)** By definition, a matrix is a collection of numbers ordered in rows and columns.
>
> **[0:22](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/matrices-introduction?u=76281980&t=22)** As you can see, matrix is a two-dimensional array of numbers.
>
> **[0:27](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/matrices-introduction?u=76281980&t=27)** We denote matrices in uppercase, italic, and bold.
>
> **[0:31](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/matrices-introduction?u=76281980&t=31)** For example, A, here is an example of matrix.
>
> **[0:35](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/matrices-introduction?u=76281980&t=35)** Our matrix contains six numbers, three, zero, minus four, two, three, minus five.
>
> **[0:42](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/matrices-introduction?u=76281980&t=42)** We call each of these values an element of a matrix.
>
> **[0:46](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/matrices-introduction?u=76281980&t=46)** To make it obvious we are working with the matrix, we put all the elements in the brackets.
>
> **[0:52](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/matrices-introduction?u=76281980&t=52)** Our matrix has three rows and two columns.
>
> **[0:56](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/matrices-introduction?u=76281980&t=56)** Rows and columns represent two dimensions of a matrix.
>
> **[1:00](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/matrices-introduction?u=76281980&t=60)** Matrix A has dimensions three by two or we can say A is three by two matrix.
>
> **[1:06](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/matrices-introduction?u=76281980&t=66)** We can apply basic arithmetic operations on matrices, addition, subtraction, and multiplication.
>
> **[1:14](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/matrices-introduction?u=76281980&t=74)** You may be wondering if matrices should contain only numbers.
>
> **[1:19](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/matrices-introduction?u=76281980&t=79)** Well, a matrix can contain numbers, symbols, or expressions.
>
> **[1:24](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/matrices-introduction?u=76281980&t=84)** For example, our matrix A contains only numbers.
>
> **[1:28](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/matrices-introduction?u=76281980&t=88)** Matrix B contains symbols, and matrix C contains expressions.
>
> **[1:34](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/matrices-introduction?u=76281980&t=94)** Matrices can be of any size.
>
> **[1:37](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/matrices-introduction?u=76281980&t=97)** If we define size of a matrix as m by n matrix, then it means it has m rows and n columns.
>
> **[1:46](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/matrices-introduction?u=76281980&t=106)** Often we want to get or transform a particular element of a matrix.
>
> **[1:51](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/matrices-introduction?u=76281980&t=111)** We denote an element as small a, with index i and j.
>
> **[1:56](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/matrices-introduction?u=76281980&t=116)** It's the element on the position i and j where i represents the row and j represents the column.
>
> **[2:04](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/matrices-introduction?u=76281980&t=124)** So our matrix A has m by n elements, would begin with element a, one, one until the element a, one, n in the first row.
>
> **[2:15](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/matrices-introduction?u=76281980&t=135)** The second row would begin with a, two, one until a, two, n, and up until the last row that would begin with element a m, one and end with element a m, n.
>
> **[2:28](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/matrices-introduction?u=76281980&t=148)** In Python, just as in any other programming languages, arrays start from zero rather than one.
>
> **[2:35](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/matrices-introduction?u=76281980&t=155)** So our matrix would begin with element a, zero, zero and end with element a, m minus one, n minus one.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (2), business (1), [[Python (Programming Language)|Python]] (1), [[Programming]] (1)
> **CLI Commands:** make (1), python (1)
> **Definitions:** is a  (1), is an  (1)
> **Analogies:** for example (2)
> **Speakers:** - [instructor] (1)

#### Types of matrices
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/types-of-matrices?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/types-of-matrices?u=76281980&t=0)** - [Instructor] Matrices can come in different shapes and sizes.
>
> **[0:04](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/types-of-matrices?u=76281980&t=4)** And there are many types of matrices that usually have their names according to the key properties or people who categorize them.
>
> **[0:12](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/types-of-matrices?u=76281980&t=12)** We are going to learn seven different types of matrices that are most useful.
>
> **[0:17](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/types-of-matrices?u=76281980&t=17)** Rectangular, square, zero, identity, diagonal, and triangular.
>
> **[0:24](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/types-of-matrices?u=76281980&t=24)** Rectangular matrix is a matrix that has a different number of rows and columns.
>
> **[0:30](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/types-of-matrices?u=76281980&t=30)** It's m by n matrix, where m is the number of rows and n is the number of columns.
>
> **[0:37](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/types-of-matrices?u=76281980&t=37)** A special case of rectangular matrix is called a square matrix.
>
> **[0:42](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/types-of-matrices?u=76281980&t=42)** As its name suggests, it has the same number of rows and columns.
>
> **[0:47](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/types-of-matrices?u=76281980&t=47)** We usually denote it as m by m matrix.
>
> **[0:51](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/types-of-matrices?u=76281980&t=51)** The next type of matrix is a symmetric matrix.
>
> **[0:55](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/types-of-matrices?u=76281980&t=55)** Symmetric matrix is a special type of square matrix that has elements mirrored across the diagonal, as you can see in our example.
>
> **[1:05](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/types-of-matrices?u=76281980&t=65)** All the corresponding mirrored elements are the same.
>
> **[1:09](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/types-of-matrices?u=76281980&t=69)** Zero matrix is the matrix which has all elements equal to zero.
>
> **[1:15](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/types-of-matrices?u=76281980&t=75)** If we multiply any vector or matrix with zero matrix, we'll get zero matrix.
>
> **[1:22](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/types-of-matrices?u=76281980&t=82)** It is denoted with a bold zero.
>
> **[1:24](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/types-of-matrices?u=76281980&t=84)** The identity matrix is a square matrix that has all zeros on off-diagonal elements and all ones on the diagonal elements.
>
> **[1:34](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/types-of-matrices?u=76281980&t=94)** It is denoted with the capital letter, I.
>
> **[1:37](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/types-of-matrices?u=76281980&t=97)** The identity matrix has an important role because when we multiply any vector or matrix with the identity matrix, we'll get the same vector or matrix.
>
> **[1:48](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/types-of-matrices?u=76281980&t=108)** Another matrix that is interesting to us is the diagonal matrix.
>
> **[1:53](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/types-of-matrices?u=76281980&t=113)** The diagonal matrix is a matrix that has off-diagonal elements equal to zero.
>
> **[1:59](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/types-of-matrices?u=76281980&t=119)** Diagonal elements can be any numbers, zeros included.
>
> **[2:03](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/types-of-matrices?u=76281980&t=123)** An interesting thing to notice is that if you multiply any scalar with the identity matrix, we'll get a diagonal matrix.
>
> **[2:12](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/types-of-matrices?u=76281980&t=132)** A triangular matrix is a square matrix that has elements on the upper right or the lower left of the matrix equal to zero.
>
> **[2:21](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/types-of-matrices?u=76281980&t=141)** An upper triangular matrix has nonzero elements above the diagonal, and all the elements below the diagonal are zeros.
>
> **[2:29](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/types-of-matrices?u=76281980&t=149)** A lower triangular matrix has all zero elements above the diagonal, and elements below the diagonal are not zero.
>
> **[2:38](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/types-of-matrices?u=76281980&t=158)** Great.
>
> **[2:39](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/types-of-matrices?u=76281980&t=159)** Now we've learned the most important types of matrices.
>
> **[2:43](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/types-of-matrices?u=76281980&t=163)** Let's head on to matrix transformation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** next (1)
> **Definitions:** is a  (6), is called (1)
> **Speakers:** - [instructor] (1)

#### Types of matrix transformation
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/types-of-matrix-transformation-25659096?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/types-of-matrix-transformation-25659096?u=76281980&t=0)** - [Instructor] Any linear transformation in a plane or in a space can be specified using vectors or matrices.
>
> **[0:07](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/types-of-matrix-transformation-25659096?u=76281980&t=7)** We can specify any linear transformation in three dimensional space by using a matrix that has nine elements.
>
> **[0:16](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/types-of-matrix-transformation-25659096?u=76281980&t=16)** If we specifically pick these nine elements, we can achieve scaling by a factor in a direction, reflecting across the plane, rotation by angle about any axis, projection onto any plane, or some composition of transformations.
>
> **[0:32](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/types-of-matrix-transformation-25659096?u=76281980&t=32)** Linear transformation is basically just a function that takes in some inputs and gives an output for each one.
>
> **[0:40](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/types-of-matrix-transformation-25659096?u=76281980&t=40)** Let's start with basic transformations and then learn how to combine them into advanced ones.
>
> **[0:46](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/types-of-matrix-transformation-25659096?u=76281980&t=46)** We'll take an identity matrix and multiply it with a vector a, b.
>
> **[0:51](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/types-of-matrix-transformation-25659096?u=76281980&t=51)** We get the same vector a, b.
>
> **[0:54](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/types-of-matrix-transformation-25659096?u=76281980&t=54)** What if we have a diagonal matrix with elements 4, 0, 0, 3?
>
> **[0:59](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/types-of-matrix-transformation-25659096?u=76281980&t=59)** What it does, it scales x-axis by multiple of four, and y-axis by multiple of three.
>
> **[1:07](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/types-of-matrix-transformation-25659096?u=76281980&t=67)** We have done a stretch from a square and transformed it into rectangle.
>
> **[1:12](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/types-of-matrix-transformation-25659096?u=76281980&t=72)** Another example of transformation is when we have a diagonal matrix with elements minus one, 0, 0, minus one, so we have flipped both x and y coordinates and we call it inversion.
>
> **[1:28](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/types-of-matrix-transformation-25659096?u=76281980&t=88)** There is a special kind of transformation that is called rotation.
>
> **[1:32](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/types-of-matrix-transformation-25659096?u=76281980&t=92)** In this case, the vector maintains its length and rotates for some angle.
>
> **[1:38](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/types-of-matrix-transformation-25659096?u=76281980&t=98)** Matrix that is used in this case is called rotation matrix, and its elements are cos theta minus sin theta, sin theta, and cos theta.
>
> **[1:50](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/types-of-matrix-transformation-25659096?u=76281980&t=110)** For example, if have our basis vectors e1, 1, 0 and e2, 0, 1, and we rotate them for 90 degrees, we'll get vectors e1 / 0, 1 and e2 / minus one, 0.
>
> **[2:06](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/types-of-matrix-transformation-25659096?u=76281980&t=126)** In this case, our rotation matrix will have elements 0, minus one, 1, 0.
>
> **[2:13](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/types-of-matrix-transformation-25659096?u=76281980&t=133)** Cool, apart from these basic transformations, we can create transformations that are combinations of two or more transformations.
>
> **[2:22](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/types-of-matrix-transformation-25659096?u=76281980&t=142)** For example, stretching and rotation.
>
> **[2:26](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/types-of-matrix-transformation-25659096?u=76281980&t=146)** Let's see it in a simple example.
>
> **[2:28](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/types-of-matrix-transformation-25659096?u=76281980&t=148)** We have a transformation matrix with elements 4, 1, minus one, 3, and then we multiply it with vector 1, 2, we get an output vector 6, 5.
>
> **[2:40](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/types-of-matrix-transformation-25659096?u=76281980&t=160)** Great.
>
> **[2:41](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/types-of-matrix-transformation-25659096?u=76281980&t=161)** We have explored and mastered the application of matrix vector multiplication in the context of geometric transformations of vectors.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** application (1)
> **Definitions:** is called (2), is a  (1)
> **Analogies:** for example (2)
> **Speakers:** - [instructor] (1)

#### Composition or combination of matrix transformations
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/composition-or-combination-of-matrix-transformations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/composition-or-combination-of-matrix-transformations?u=76281980&t=0)** - We have experienced basic linear transformations like rescaling, rotation, and inversion.
>
> **[0:07](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/composition-or-combination-of-matrix-transformations?u=76281980&t=7)** The great thing in linear algebra is that we can combine together any number of different linear transformations to get a new linear transformation.
>
> **[0:17](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/composition-or-combination-of-matrix-transformations?u=76281980&t=17)** We call it Composition of Linear Transformation.
>
> **[0:21](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/composition-or-combination-of-matrix-transformations?u=76281980&t=21)** Since any linear transformation can be represented with a matrix, any two or more composed linear transformations can also be represented as matrices.
>
> **[0:32](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/composition-or-combination-of-matrix-transformations?u=76281980&t=32)** This process is extremely useful in machine learning.
>
> **[0:36](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/composition-or-combination-of-matrix-transformations?u=76281980&t=36)** Imagine we have to compute the result of ten thousand linear transformations operating on a vector.
>
> **[0:43](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/composition-or-combination-of-matrix-transformations?u=76281980&t=43)** It becomes computationally expensive, as you have to apply ten thousand sequential functions.
>
> **[0:50](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/composition-or-combination-of-matrix-transformations?u=76281980&t=50)** On the other hand, if we find the matrix that represents the composition of ten thousand linear transformations, it comes down to a couple of numbers and computations.
>
> **[1:02](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/composition-or-combination-of-matrix-transformations?u=76281980&t=62)** Lets take a look at the composition of two linear transformations A B V, where A and B are matrices and V is the vector.
>
> **[1:12](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/composition-or-combination-of-matrix-transformations?u=76281980&t=72)** How do we calculate the composition?
>
> **[1:15](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/composition-or-combination-of-matrix-transformations?u=76281980&t=75)** We can simply calculate it from left to right, meaning we will first calculate the product matrix AB, and get the new matrix.
>
> **[1:25](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/composition-or-combination-of-matrix-transformations?u=76281980&t=85)** It will represent the composition of linear transformations A and B.
>
> **[1:30](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/composition-or-combination-of-matrix-transformations?u=76281980&t=90)** The columns of a new matrix AB are the result of applying the transformation to each of the basis vectors, E1, E2, and E3.
>
> **[1:40](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/composition-or-combination-of-matrix-transformations?u=76281980&t=100)** So we get AB (E1), AB (E2), and AB (E3).
>
> **[1:46](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/composition-or-combination-of-matrix-transformations?u=76281980&t=106)** To do that, we have to multiply matrices A and B.
>
> **[1:50](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/composition-or-combination-of-matrix-transformations?u=76281980&t=110)** But how do we do that?
>
> **[1:51](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/composition-or-combination-of-matrix-transformations?u=76281980&t=111)** To multiply a matrix by another matrix, we need to do the dot product of the rows and columns.
>
> **[1:59](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/composition-or-combination-of-matrix-transformations?u=76281980&t=119)** To calculate the values of the first element of AB, we have to multiply each corresponding element of the first row of A with each corresponding element of the first column of B and add the values.
>
> **[2:13](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/composition-or-combination-of-matrix-transformations?u=76281980&t=133)** Similarly, to calculate the values of the second element of AB, we have to multiply the first row of A with the second column of B and so on.
>
> **[2:23](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/composition-or-combination-of-matrix-transformations?u=76281980&t=143)** If we repeat this procedure on the second row of matrix A and multiply it with corresponding columns of matrix B, and we proceed onto the third row of matrix A, we find all elements of the product matrix.
>
> **[2:40](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/composition-or-combination-of-matrix-transformations?u=76281980&t=160)** At the end, we only have to multiply the matrix with the vector V.
>
> **[2:44](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/composition-or-combination-of-matrix-transformations?u=76281980&t=164)** The result of this calculation is the linear combination of the columns of the matrix AB with the coordinates X, Y, and Z as the scalars.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** product (3), [[Linear Algebra]] (1)
> **CLI Commands:** find (2)
> **Analogies:** imagine (1)
> **Speakers:** - we (1)


### 5. Gaussian Elimination

[↑ Back to Table of Contents](#table-of-contents)

#### Solving linear equations using Gaussian elimination
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/solving-linear-equations-using-gaussian-elimination?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/solving-linear-equations-using-gaussian-elimination?u=76281980&t=0)** - [Instructor] Solving linear equations manually becomes tedious each time there are three or more equations.
>
> **[0:06](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/solving-linear-equations-using-gaussian-elimination?u=76281980&t=6)** In the 1800s, a brilliant German mathematician called Karl Gauss invented the method that is used for solving a system of linear equations, and in his honor, that method is called Gaussian elimination.
>
> **[0:20](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/solving-linear-equations-using-gaussian-elimination?u=76281980&t=20)** It involves concatenating the matrix A and vector B into a form called an augmented matrix, and then performing a series of elementary row operations on the augmented matrix in a particular order.
>
> **[0:36](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/solving-linear-equations-using-gaussian-elimination?u=76281980&t=36)** At the end, we will have three possible situations.
>
> **[0:39](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/solving-linear-equations-using-gaussian-elimination?u=76281980&t=39)** Get the solution of the system, the system won't have a solution, or the system will have an infinite number of solutions.
>
> **[0:48](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/solving-linear-equations-using-gaussian-elimination?u=76281980&t=48)** To create an augmented matrix, we will take the regional matrix A and combine it with the constant vector B.
>
> **[0:56](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/solving-linear-equations-using-gaussian-elimination?u=76281980&t=56)** Let's see it in the following example.
>
> **[0:58](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/solving-linear-equations-using-gaussian-elimination?u=76281980&t=58)** The vertical line between the matrix indicates the separation between A and B.
>
> **[1:04](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/solving-linear-equations-using-gaussian-elimination?u=76281980&t=64)** Now, we will directly apply one or more row operations on the augmented matrix.
>
> **[1:11](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/solving-linear-equations-using-gaussian-elimination?u=76281980&t=71)** For the row operations, you can do any automatic operation, add, subtract, multiply, or divide one of the rows with another row.
>
> **[1:22](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/solving-linear-equations-using-gaussian-elimination?u=76281980&t=82)** We can break Gaussian elimination into five steps.
>
> **[1:26](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/solving-linear-equations-using-gaussian-elimination?u=76281980&t=86)** First, converting system to matrix vector equation.
>
> **[1:30](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/solving-linear-equations-using-gaussian-elimination?u=76281980&t=90)** Second, augment the coefficient matrix with the vector of constants.
>
> **[1:35](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/solving-linear-equations-using-gaussian-elimination?u=76281980&t=95)** Third, create a matrix with ones on diagonals.
>
> **[1:39](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/solving-linear-equations-using-gaussian-elimination?u=76281980&t=99)** Fourth, mapping the matrix back to equations.
>
> **[1:43](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/solving-linear-equations-using-gaussian-elimination?u=76281980&t=103)** And fifth, substitution to solve for variables.
>
> **[1:46](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/solving-linear-equations-using-gaussian-elimination?u=76281980&t=106)** The first step begins by creating a coefficient matrix.
>
> **[1:50](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/solving-linear-equations-using-gaussian-elimination?u=76281980&t=110)** Each row in the coefficient matrix will represent an equation, and column values will represent coefficient values for each variable.
>
> **[1:59](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/solving-linear-equations-using-gaussian-elimination?u=76281980&t=119)** Now, we can move to the second step where we create a constant matrix.
>
> **[2:04](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/solving-linear-equations-using-gaussian-elimination?u=76281980&t=124)** It is a column matrix, and each value will represent the solution of the equation.
>
> **[2:09](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/solving-linear-equations-using-gaussian-elimination?u=76281980&t=129)** By combining the coefficient matrix and constant matrix, we form an augmented matrix.
>
> **[2:16](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/solving-linear-equations-using-gaussian-elimination?u=76281980&t=136)** The third step is called a pivoting step.
>
> **[2:19](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/solving-linear-equations-using-gaussian-elimination?u=76281980&t=139)** We want to ensure that we have a non-zero entry in the diagonal position.
>
> **[2:23](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/solving-linear-equations-using-gaussian-elimination?u=76281980&t=143)** So if necessary, we will swap this row with one of the lower rows that has a non-zero entry in the same column.
>
> **[2:32](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/solving-linear-equations-using-gaussian-elimination?u=76281980&t=152)** We call the element that we are swapping the pivot element.
>
> **[2:36](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/solving-linear-equations-using-gaussian-elimination?u=76281980&t=156)** Here are the simple rules that we can follow.
>
> **[2:39](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/solving-linear-equations-using-gaussian-elimination?u=76281980&t=159)** Any two rows may be interchanged.
>
> **[2:42](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/solving-linear-equations-using-gaussian-elimination?u=76281980&t=162)** Each row can be multiplied or divided by a nonzero constant.
>
> **[2:46](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/solving-linear-equations-using-gaussian-elimination?u=76281980&t=166)** A nonzero multiple of one row can be added or subtracted from another row.
>
> **[2:52](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/solving-linear-equations-using-gaussian-elimination?u=76281980&t=172)** Swapping two rows to move the pivot element into place is known as partial pivoting.
>
> **[2:58](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/solving-linear-equations-using-gaussian-elimination?u=76281980&t=178)** In case no pivot element can be found, then there is no single solution, and we are bored.
>
> **[3:04](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/solving-linear-equations-using-gaussian-elimination?u=76281980&t=184)** Then we set the column elements below the diagonal entry to zero by adding appropriate multiples of the current row After, we move onto the next row and look at the diagonal entry.
>
> **[3:16](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/solving-linear-equations-using-gaussian-elimination?u=76281980&t=196)** At the end of this process, we say that our matrix is in echelon form.
>
> **[3:21](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/solving-linear-equations-using-gaussian-elimination?u=76281980&t=201)** In our case, after transformation, our final matrix has three zeros in the third row.
>
> **[3:27](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/solving-linear-equations-using-gaussian-elimination?u=76281980&t=207)** So, we have eliminated the third row.
>
> **[3:30](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/solving-linear-equations-using-gaussian-elimination?u=76281980&t=210)** Next, in the fourth step, we can map the matrix back to the equation.
>
> **[3:35](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/solving-linear-equations-using-gaussian-elimination?u=76281980&t=215)** Finally, in the last fifth step, from the second row, we get x2 equals minus 0.2x3, and when we substitute x2 into the first equation, we get x1 expressed using x3.
>
> **[3:51](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/solving-linear-equations-using-gaussian-elimination?u=76281980&t=231)** Our system has infinitely many solutions because we can freely pick variable x3 from the set of real numbers.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** next (2)
> **Definitions:** is called (2), is a  (1), known as (1)
> **Cross-References:** in the last (1)
> **Speakers:** - [instructor] (1)

#### Gaussian elimination and finding the inverse matrix
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/gaussian-elimination-and-finding-the-inverse-matrix?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/gaussian-elimination-and-finding-the-inverse-matrix?u=76281980&t=0)** - [Instructor] Linear equations can be solved in a few different ways.
>
> **[0:04](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/gaussian-elimination-and-finding-the-inverse-matrix?u=76281980&t=4)** Two of the most applied techniques are elimination method and substitution method.
>
> **[0:10](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/gaussian-elimination-and-finding-the-inverse-matrix?u=76281980&t=10)** However, in linear algebra, we have a different technique using matrix inversion.
>
> **[0:16](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/gaussian-elimination-and-finding-the-inverse-matrix?u=76281980&t=16)** It is a convenient method for solving a system of linear equations.
>
> **[0:21](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/gaussian-elimination-and-finding-the-inverse-matrix?u=76281980&t=21)** In mathematics, the concept of inversion is well known starting from real numbers.
>
> **[0:26](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/gaussian-elimination-and-finding-the-inverse-matrix?u=76281980&t=26)** A real number a is set to have an inverse if there exist a number b such that a multiply with b equals 1.
>
> **[0:35](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/gaussian-elimination-and-finding-the-inverse-matrix?u=76281980&t=35)** Any nonzero number a has an inverse b.
>
> **[0:39](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/gaussian-elimination-and-finding-the-inverse-matrix?u=76281980&t=39)** The nice thing is that we can generalize the concept on inverses to matrices.
>
> **[0:45](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/gaussian-elimination-and-finding-the-inverse-matrix?u=76281980&t=45)** Inverse of matrix A is denoted as A to the power of minus 1, where minus 1 is a super script.
>
> **[0:53](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/gaussian-elimination-and-finding-the-inverse-matrix?u=76281980&t=53)** If we multiply inverse of the matrix with the original matrix, we get, as a result, identity matrix.
>
> **[1:01](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/gaussian-elimination-and-finding-the-inverse-matrix?u=76281980&t=61)** By definition, a matrix B such that A multiplied with B equals B multiplied with 1 equals I is called an inverse of the matrix A.
>
> **[1:12](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/gaussian-elimination-and-finding-the-inverse-matrix?u=76281980&t=72)** So, if matrix A is invertible, and we want to solve the system Ax equals B, then for any vector B, the system has an unique solution x equals A to the power of minus 1 B, that we can get by multiplying both sides of an equation on the left by the matrix A to the power of minus 1.
>
> **[1:36](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/gaussian-elimination-and-finding-the-inverse-matrix?u=76281980&t=96)** Let's head onto our Jupyter notebook, and see it as a hands-on example.
>
> **[1:41](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/gaussian-elimination-and-finding-the-inverse-matrix?u=76281980&t=101)** We have already imported numpy as np, and now we are going to create a two-by-two matrix A, that has elements 1, 2, 3, and 4.
>
> **[1:52](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/gaussian-elimination-and-finding-the-inverse-matrix?u=76281980&t=112)** Next, we are going to use a built-in function called inv from the linalg numpy module.
>
> **[1:58](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/gaussian-elimination-and-finding-the-inverse-matrix?u=76281980&t=118)** To calculate the inverse of matrix A, we are going to call it Ainv.
>
> **[2:07](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/gaussian-elimination-and-finding-the-inverse-matrix?u=76281980&t=127)** So, we have just passed our matrix A into the inverse function, and when we run our code, we see the displayed inverse of matrix A.
>
> **[2:16](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/gaussian-elimination-and-finding-the-inverse-matrix?u=76281980&t=136)** We are going to define b as a vector that has elements 5 and 11.
>
> **[2:22](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/gaussian-elimination-and-finding-the-inverse-matrix?u=76281980&t=142)** Finally, to get result x, we have to perform matrix multiplication with our inverse matrix A and vector b.
>
> **[2:31](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/gaussian-elimination-and-finding-the-inverse-matrix?u=76281980&t=151)** To do that, we are going to use the dot method.
>
> **[2:36](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/gaussian-elimination-and-finding-the-inverse-matrix?u=76281980&t=156)** When we run our code, we see we have solved for x, and our result is vector x with elements 1 and 2.
>
> **[2:44](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/gaussian-elimination-and-finding-the-inverse-matrix?u=76281980&t=164)** The cool thing with solving systems of linear equations is that we can easily check our result.
>
> **[2:50](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/gaussian-elimination-and-finding-the-inverse-matrix?u=76281980&t=170)** In our case, by multiplying matrix A with our result vector x.
>
> **[2:55](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/gaussian-elimination-and-finding-the-inverse-matrix?u=76281980&t=175)** Let's do this by typing np.dot A, x.
>
> **[3:00](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/gaussian-elimination-and-finding-the-inverse-matrix?u=76281980&t=180)** When we run the code, we get the same vector as vector b.
>
> **[3:04](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/gaussian-elimination-and-finding-the-inverse-matrix?u=76281980&t=184)** So, we got the correct result.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** power (3), [[Linear Algebra]] (1), next (1)
> **Definitions:** is a  (2), is called (1)
> **Tools:** jupyter (1)
> **Speakers:** - [instructor] (1)

#### Inverse and determinant
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/inverse-and-determinant?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/inverse-and-determinant?u=76281980&t=0)** - [Instructor] The determinant of a matrix is a scalar that has a few important characteristics.
>
> **[0:06](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/inverse-and-determinant?u=76281980&t=6)** It enables us to map a square matrix to a scalar and allows us to determine if a matrix can be inverted.
>
> **[0:14](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/inverse-and-determinant?u=76281980&t=14)** We can denote a determinant for a matrix A as detA.
>
> **[0:19](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/inverse-and-determinant?u=76281980&t=19)** There are two important properties for a determinate.
>
> **[0:23](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/inverse-and-determinant?u=76281980&t=23)** In the case when determinate A equals zero, this means the inverse matrix cannot be computed, since the inverse matrix of matrix A would be calculated as 1 divided by detA, meaning we would have to divide 1 by 0.
>
> **[0:39](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/inverse-and-determinant?u=76281980&t=39)** And we cannot divide 1 by 0.
>
> **[0:42](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/inverse-and-determinant?u=76281980&t=42)** In this special case, matrix A is singular, meaning it contains only linearly-dependent columns.
>
> **[0:50](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/inverse-and-determinant?u=76281980&t=50)** To calculate a determinant for a two-by-two matrix, we have to memorize a simple formula.
>
> **[0:56](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/inverse-and-determinant?u=76281980&t=56)** If our matrix A has elements a, b, c, and d, then formula to calculate a determinant for matrix A is determinant of A equals a multiplied with d minus b multiplied with c.
>
> **[1:13](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/inverse-and-determinant?u=76281980&t=73)** Let's explore a simple example and learn how to calculate a determinant of a matrix A.
>
> **[1:20](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/inverse-and-determinant?u=76281980&t=80)** Our matrix A has the following elements: 1, 2, 3, and 4.
>
> **[1:25](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/inverse-and-determinant?u=76281980&t=85)** We can calculate the determinant of a matrix A by plugging values into above formula.
>
> **[1:31](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/inverse-and-determinant?u=76281980&t=91)** We get determinant of A equals 1 multiplied with 4 minus 2 multiplied by 3, equals 4 - 6, equals -2.
>
> **[1:42](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/inverse-and-determinant?u=76281980&t=102)** Next, let's head on to Jupyter Notebook and learn how to calculate the same determinant using NumPy building function.
>
> **[1:50](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/inverse-and-determinant?u=76281980&t=110)** We have already imported NumPy as np.
>
> **[1:53](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/inverse-and-determinant?u=76281980&t=113)** We are going to create a matrix A with elements 1, 2, 3, and 4.
>
> **[1:59](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/inverse-and-determinant?u=76281980&t=119)** To calculate a determinant of a matrix A, we'll call the Det function from the linalg module by typing np.linalg.detA.
>
> **[2:11](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/inverse-and-determinant?u=76281980&t=131)** We see we got the same result except a rounding error.
>
> **[2:15](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/inverse-and-determinant?u=76281980&t=135)** What would happen in case when we have a singular matrix with linearly-dependent columns?
>
> **[2:21](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/inverse-and-determinant?u=76281980&t=141)** For example, let's calculate the determinant of a matrix B that has elements 3, 1, 6, and 2.
>
> **[2:30](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/inverse-and-determinant?u=76281980&t=150)** Its determinant would be 3 multiplied 2 minus 1 multiplied by 6 equals 0.
>
> **[2:36](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/inverse-and-determinant?u=76281980&t=156)** By typing np.linalg.detB, we get 0.
>
> **[2:42](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/inverse-and-determinant?u=76281980&t=162)** Let's try to invert the matrix by calling Inv function.
>
> **[2:49](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/inverse-and-determinant?u=76281980&t=169)** When we run the code, you see we got a singular matrix error, meaning we cannot calculate the inverse of a singular matrix.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** next (1)
> **Code Identifiers:** deta (3), detb (1)
> **Tools:** jupyter (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 6. Matrices from Orthogonality to Gram–Schmidt Process

[↑ Back to Table of Contents](#table-of-contents)

#### Matrices changing basis
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/matrices-changing-basis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/matrices-changing-basis?u=76281980&t=0)** - [Instructor] Sometimes, we want to express vectors in a different basis.
>
> **[0:04](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/matrices-changing-basis?u=76281980&t=4)** It is useful in many types of matrix computations.
>
> **[0:09](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/matrices-changing-basis?u=76281980&t=9)** A change of basis matrix is a matrix that translates vector representations from one basis, such as the standard coordinate system, to another basis.
>
> **[0:19](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/matrices-changing-basis?u=76281980&t=19)** It allows us to perform transforms in the case when the new basis vectors are not orthogonal to each other.
>
> **[0:27](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/matrices-changing-basis?u=76281980&t=27)** Let's see what it means in a simple example.
>
> **[0:31](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/matrices-changing-basis?u=76281980&t=31)** Our coordinate system consists of the basis vectors e1 that is equal to 1,0 and e2 that is equal to 0,1.
>
> **[0:40](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/matrices-changing-basis?u=76281980&t=40)** Imagine we define an alternative vector space, with basis vectors f1 that is equal to 1,3 and f2 that is equal to 2,1, and we have a vector a, 1,1, that is represented in coordinates of that vector space.
>
> **[0:58](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/matrices-changing-basis?u=76281980&t=58)** When we construct the matrix of the new basis vectors f1 and f2 and multiply it with our vector 1,1, we get the vector 3,4 as a result.
>
> **[1:09](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/matrices-changing-basis?u=76281980&t=69)** We will call a matrix constructed of new basis vectors f1 and f2 transformation matrix A.
>
> **[1:17](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/matrices-changing-basis?u=76281980&t=77)** It represents the change of basis from the alternative vector space to standard vector space.
>
> **[1:24](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/matrices-changing-basis?u=76281980&t=84)** Now, you may wonder how to do reverse transformation from alternative vector space to the standard coordinate system.
>
> **[1:32](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/matrices-changing-basis?u=76281980&t=92)** To achieve this, we have to find the inverse of the transformation matrix.
>
> **[1:37](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/matrices-changing-basis?u=76281980&t=97)** For a two-by-two matrix A, there is a simple formula to calculate A-inverted.
>
> **[1:42](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/matrices-changing-basis?u=76281980&t=102)** When we plug in the numbers, we get -1/5 multiplied with the matrix that has elements 1, -2, -3, and 1.
>
> **[1:52](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/matrices-changing-basis?u=76281980&t=112)** And when we do scalar matrix multiplication, we get our new transformational matrix, A-inverted.
>
> **[1:59](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/matrices-changing-basis?u=76281980&t=119)** We can check our result by multiplying matrix A with matrix A-inverted.
>
> **[2:04](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/matrices-changing-basis?u=76281980&t=124)** And as you can see, we get the identity matrix, as expected.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** express (1)
> **Definitions:** is a  (2)
> **Analogies:** such as (1), imagine (1)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### Transforming to the new basis
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/transforming-to-the-new-basis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/transforming-to-the-new-basis?u=76281980&t=0)** - [Instructor] We have explored matrix transformation in a simple example.
>
> **[0:04](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/transforming-to-the-new-basis?u=76281980&t=4)** Let's look at the fundamentals and rules behind it.
>
> **[0:08](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/transforming-to-the-new-basis?u=76281980&t=8)** Matrix transformations are a special class of functions that arise from matrix multiplication.
>
> **[0:15](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/transforming-to-the-new-basis?u=76281980&t=15)** In mathematics, we define an ordered n-tuple as a sequence of n real numbers and a solution of a linear system in n unknowns that can be written as x1 = s1, x2 = s2 until xn = sn.
>
> **[0:33](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/transforming-to-the-new-basis?u=76281980&t=33)** It can be expressed as an ordered n-tuple, s1, s2, until sn.
>
> **[0:40](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/transforming-to-the-new-basis?u=76281980&t=40)** We do know the set of all ordered n-tuples of real numbers with a bold capital letter R and superscript n.
>
> **[0:49](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/transforming-to-the-new-basis?u=76281980&t=49)** The elements for Rn are called vectors.
>
> **[0:53](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/transforming-to-the-new-basis?u=76281980&t=53)** Standard basis vectors are denoted as e1, e2, until en.
>
> **[0:59](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/transforming-to-the-new-basis?u=76281980&t=59)** All other vectors in Rn can be written in exactly one way is a linear combination of basis vectors.
>
> **[1:07](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/transforming-to-the-new-basis?u=76281980&t=67)** So if you have a vector x, it can be written as x = x1e1 + x2e2 + xnen.
>
> **[1:19](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/transforming-to-the-new-basis?u=76281980&t=79)** As matrix transformation is a special class of function, we usually use the letter T to denote it.
>
> **[1:26](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/transforming-to-the-new-basis?u=76281980&t=86)** We can write matrix transformation from Rn to Rm as.
>
> **[1:31](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/transforming-to-the-new-basis?u=76281980&t=91)** If we think about matrix transformations that arise from linear systems, we can write them as y = Ax.
>
> **[1:40](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/transforming-to-the-new-basis?u=76281980&t=100)** So matrix transformation maps a vector x in Rn into the vector y in Rm by multiplying x with A.
>
> **[1:50](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/transforming-to-the-new-basis?u=76281980&t=110)** We can write it down as y = Ta of x.
>
> **[1:55](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/transforming-to-the-new-basis?u=76281980&t=115)** We have learned how to transform a vector b to any basis as long as we have the basis vectors of a new vector space.
>
> **[2:04](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/transforming-to-the-new-basis?u=76281980&t=124)** We can follow these three steps.
>
> **[2:06](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/transforming-to-the-new-basis?u=76281980&t=126)** Transform the vector b to our standard coordinate system using the appropriate transformation matrix A that results in b prime, Ab = b prime.
>
> **[2:18](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/transforming-to-the-new-basis?u=76281980&t=138)** Perform a custom transform on b prime.
>
> **[2:21](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/transforming-to-the-new-basis?u=76281980&t=141)** Let's say we have a transformation represented by the matrix R in the standard coordinate system giving us a rotated vector c prime, Rb prime = c prime.
>
> **[2:34](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/transforming-to-the-new-basis?u=76281980&t=154)** Transform c prime back to the alternate coordinate system using the inverse of A that will result in the vector c.
>
> **[2:42](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/transforming-to-the-new-basis?u=76281980&t=162)** Vector c is a transformation of the vector b in the alternative coordinate system.

> [!info]- Semantic Content
>
> **Definitions:** is a  (3)
> **CLI Commands:** rm (2)
> **Speakers:** - [instructor] (1)

#### Orthogonal matrix
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/orthogonal-matrix?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/orthogonal-matrix?u=76281980&t=0)** - [Instructor] When we explored standard basis vectors, we haven't mentioned they're orthonormal.
>
> **[0:05](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/orthogonal-matrix?u=76281980&t=5)** Meaning, they're orthogonal to each other.
>
> **[0:08](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/orthogonal-matrix?u=76281980&t=8)** This means they're at the right angles to each other.
>
> **[0:11](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/orthogonal-matrix?u=76281980&t=11)** So their dot product is zero, and they also have a unit norm.
>
> **[0:16](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/orthogonal-matrix?u=76281980&t=16)** Let's see them in our coordinate system.
>
> **[0:18](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/orthogonal-matrix?u=76281980&t=18)** We can represent them as vector e1, 1,0, and e2, 0,1.
>
> **[0:24](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/orthogonal-matrix?u=76281980&t=24)** Now, you'll probably be thinking about the connection between orthonormal vectors and orthogonal matrices.
>
> **[0:32](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/orthogonal-matrix?u=76281980&t=32)** Orthogonal matrix is usually denoted with Q.
>
> **[0:36](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/orthogonal-matrix?u=76281980&t=36)** Orthonormal vectors make up all of the rows and all of the columns of the orthogonal matrix.
>
> **[0:43](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/orthogonal-matrix?u=76281980&t=43)** To understand the valuable property of this kind of matrix, we first need to understand what it means to calculate the transpose of a matrix.
>
> **[0:52](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/orthogonal-matrix?u=76281980&t=52)** A transpose of the matrix is a flipped version of the original matrix.
>
> **[0:57](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/orthogonal-matrix?u=76281980&t=57)** Meaning, we just have to switch rows and columns to get transpose.
>
> **[1:02](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/orthogonal-matrix?u=76281980&t=62)** It is denoted as the capital A with superscript t.
>
> **[1:06](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/orthogonal-matrix?u=76281980&t=66)** For example, if I have a matrix A with elements 1, 2, 3, 4, 5, 6, 7, 8, and 9, then the transpose of A is a matrix At with elements 1, 4, 7, 2, 5, 8, 3, 6, and 9.
>
> **[1:23](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/orthogonal-matrix?u=76281980&t=83)** The cool thing about a transpose matrix is that the elements of the diagonal stay the same.
>
> **[1:29](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/orthogonal-matrix?u=76281980&t=89)** An important property of the orthogonal matrices is when we multiply A-transpose with A, it is equal to the A multiplied with A-transposed, and they are both equal to the identity matrix.
>
> **[1:44](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/orthogonal-matrix?u=76281980&t=104)** This is unique.
>
> **[1:45](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/orthogonal-matrix?u=76281980&t=105)** As we have previously learned, we have to multiply matrix A with its inverse matrix to get the identity matrix.
>
> **[1:53](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/orthogonal-matrix?u=76281980&t=113)** We can now conclude that A-transpose is equal to A-inverse.
>
> **[1:58](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/orthogonal-matrix?u=76281980&t=118)** A useful thing to know is that when we calculate orthogonal matrices, we save computational time, since it's time-saving instead of using inverse matrices.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** product (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Gram–Schmidt process
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/gram-schmidt-process?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/gram-schmidt-process?u=76281980&t=0)** - Let's understand the concept of Gram-Schmidt process that we can use to transform any basis to orthogonal basis.
>
> **[0:08](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/gram-schmidt-process?u=76281980&t=8)** It is much simpler to perform calculations in orthogonal basis.
>
> **[0:13](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/gram-schmidt-process?u=76281980&t=13)** We'll look at the process in general before heading into the first example.
>
> **[0:18](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/gram-schmidt-process?u=76281980&t=18)** Our matrix contains a few columns.
>
> **[0:21](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/gram-schmidt-process?u=76281980&t=21)** In our case, imagine we have a matrix with five columns.
>
> **[0:24](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/gram-schmidt-process?u=76281980&t=24)** When we apply Gram-Schmidt to the first column, our first column stays the same.
>
> **[0:29](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/gram-schmidt-process?u=76281980&t=29)** Then we take the second column and orthogonalize it relative to the first column.
>
> **[0:35](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/gram-schmidt-process?u=76281980&t=35)** We apply the same process to the third column relative to the second column and to the first column.
>
> **[0:42](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/gram-schmidt-process?u=76281980&t=42)** It means we subtract two parts.
>
> **[0:45](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/gram-schmidt-process?u=76281980&t=45)** Part of the column that is parallel to the column two and part of the column that is parallel to the column one.
>
> **[0:52](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/gram-schmidt-process?u=76281980&t=52)** We repeat the process until the last column.
>
> **[0:55](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/gram-schmidt-process?u=76281980&t=55)** At the end, we get a matrix in which all the columns are orthogonal, but this matrix is not an orthogonal matrix due to the fact not all the columns have unit length.
>
> **[1:07](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/gram-schmidt-process?u=76281980&t=67)** In the next step, we have to normalize each column.
>
> **[1:11](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/gram-schmidt-process?u=76281980&t=71)** We can achieve that by scaling each column vector by one over its magnitude.
>
> **[1:16](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/gram-schmidt-process?u=76281980&t=76)** After we finish this procedure for each of the vectors, we'll finally get an orthogonal matrix that has all the column pairwise orthogonal and they are all unit length.
>
> **[1:28](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/gram-schmidt-process?u=76281980&t=88)** Now let's see what our formulas look like?
>
> **[1:31](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/gram-schmidt-process?u=76281980&t=91)** Suppose B equals U1, U2, U3, is the basis for R3.
>
> **[1:37](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/gram-schmidt-process?u=76281980&t=97)** Then the set B prime equals V1, V2, V3, is an orthogonal basis for R3.
>
> **[1:46](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/gram-schmidt-process?u=76281980&t=106)** Let's work through a simple example.
>
> **[1:49](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/gram-schmidt-process?u=76281980&t=109)** Here is a matrix A that has the following values.
>
> **[1:52](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/gram-schmidt-process?u=76281980&t=112)** First column U1 has element one, one, one.
>
> **[1:55](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/gram-schmidt-process?u=76281980&t=115)** Second column U2 has values one, two, two.
>
> **[1:59](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/gram-schmidt-process?u=76281980&t=119)** And third column U3 has values one, one, and zero.
>
> **[2:03](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/gram-schmidt-process?u=76281980&t=123)** And it is a basis for R3.
>
> **[2:05](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/gram-schmidt-process?u=76281980&t=125)** Let's plug in the values in our formulas.
>
> **[2:08](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/gram-schmidt-process?u=76281980&t=128)** V1 is easy to get since it's the same as U1.
>
> **[2:12](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/gram-schmidt-process?u=76281980&t=132)** So we get V1 equals one, one, one.
>
> **[2:16](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/gram-schmidt-process?u=76281980&t=136)** Great, let's head onto V2, V2 is equal two.
>
> **[2:21](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/gram-schmidt-process?u=76281980&t=141)** And lastly, when we plug values for U3, V1 and V3 in our formula for V3, we get for V3.
>
> **[2:31](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/gram-schmidt-process?u=76281980&t=151)** So our set B prime is an orthogonal basis for R3.
>
> **[2:37](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/gram-schmidt-process?u=76281980&t=157)** At the end, we just need to normalize each vector in B prime by calculating the norms for V1, V2, and V3 By dividing each vector with its norm, we get an orthonormal basis for R3

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** parallel (2), next (1)
> **Definitions:** is an  (2), is a  (2)
> **Cross-References:** in the next (1)
> **Analogies:** imagine (1)
> **Speakers:** - let (1)


### 7. Eigenvalues and Eigenvectors

[↑ Back to Table of Contents](#table-of-contents)

#### Introduction to eigenvalues and eigenvectors
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/introduction-to-eigenvalues-and-eigenvectors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/introduction-to-eigenvalues-and-eigenvectors?u=76281980&t=0)** - [Instructor] Eigenvalues and eigenvectors are the heart of eigendecomposition.
>
> **[0:05](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/introduction-to-eigenvalues-and-eigenvectors?u=76281980&t=5)** That is often called eigenvalue decomposition or eigenvector decomposition.
>
> **[0:11](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/introduction-to-eigenvalues-and-eigenvectors?u=76281980&t=11)** It is only defined for square matrices, and its goal is to extract pairs of eigenvalues and eigenvectors.
>
> **[0:19](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/introduction-to-eigenvalues-and-eigenvectors?u=76281980&t=19)** Each eigenvalue has an associated eigenvector.
>
> **[0:23](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/introduction-to-eigenvalues-and-eigenvectors?u=76281980&t=23)** Previously, we have learned that if you apply some type of transformation on an input vector, we'll get an output vector.
>
> **[0:30](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/introduction-to-eigenvalues-and-eigenvectors?u=76281980&t=30)** We can write it down as A multiplied by v equals w, where A is a transformation matrix, v as an input vector, and w is the output vector.
>
> **[0:42](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/introduction-to-eigenvalues-and-eigenvectors?u=76281980&t=42)** If you look at graphical representation of this equation, we can imagine that output vector w is a scaled representation of input vector v.
>
> **[0:52](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/introduction-to-eigenvalues-and-eigenvectors?u=76281980&t=52)** Then we can write our equation as lambda multiplied by v equals w.
>
> **[0:58](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/introduction-to-eigenvalues-and-eigenvectors?u=76281980&t=58)** Because our two equations A multiplied by v equals w and lambda multiplied by v equals w are equivalent, we can write them as a single equation.
>
> **[1:09](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/introduction-to-eigenvalues-and-eigenvectors?u=76281980&t=69)** Lambda multiplied by v equals A multiplied by v.
>
> **[1:13](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/introduction-to-eigenvalues-and-eigenvectors?u=76281980&t=73)** We can interpret that transformation matrix A is behaving like a single number, a scalar.
>
> **[1:20](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/introduction-to-eigenvalues-and-eigenvectors?u=76281980&t=80)** Interesting thing to notice is that matrix A could have 1,000s and 1,000s of elements, but when multiplied with vector v, it behaves like a single number.
>
> **[1:30](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/introduction-to-eigenvalues-and-eigenvectors?u=76281980&t=90)** In cases when this equation is true, lambda is called an eigenvalue of the matrix, and vector v is called the associated eigenvector of the matrix A.
>
> **[1:40](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/introduction-to-eigenvalues-and-eigenvectors?u=76281980&t=100)** Eigenvalues and eigenvectors are defined as following.
>
> **[1:45](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/introduction-to-eigenvalues-and-eigenvectors?u=76281980&t=105)** Let A be an n by n matrix.
>
> **[1:47](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/introduction-to-eigenvalues-and-eigenvectors?u=76281980&t=107)** A number lambda is said to be an eigenvalue of A if there exists a nonzero solution vector K of the linear system AK equals lambda K.
>
> **[1:58](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/introduction-to-eigenvalues-and-eigenvectors?u=76281980&t=118)** The solution vector K is said to be an eigenvector corresponding to the eigenvalue lambda.
>
> **[2:05](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/introduction-to-eigenvalues-and-eigenvectors?u=76281980&t=125)** Eigenvalues and eigenvectors are also called characteristic values and characteristic vectors, respectively.
>
> **[2:12](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/introduction-to-eigenvalues-and-eigenvectors?u=76281980&t=132)** Eigenvalues and eigenvectors make ML learning models easier to train because of the reduction of the information.
>
> **[2:20](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/introduction-to-eigenvalues-and-eigenvectors?u=76281980&t=140)** We can also use them to understand the correlations among data.
>
> **[2:25](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/introduction-to-eigenvalues-and-eigenvectors?u=76281980&t=145)** Other examples of applications are in the recommendation systems or financial risk analysis.
>
> **[2:32](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/introduction-to-eigenvalues-and-eigenvectors?u=76281980&t=152)** Learning how to calculate them will be extremely valuable.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (1)
> **Definitions:** is a  (2), is called (2), defined as (1)
> **CLI Commands:** make (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### Calculating eigenvalues and eigenvectors
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/calculating-eigenvalues-and-eigenvectors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/calculating-eigenvalues-and-eigenvectors?u=76281980&t=0)** - [Instructor] In the complex world of linear algebra, sometimes we discover simple, straight-away techniques that help us solve equations.
>
> **[0:09](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/calculating-eigenvalues-and-eigenvectors?u=76281980&t=9)** One of those equations is A multiplied by v equals lambda multiplied by v.
>
> **[0:14](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/calculating-eigenvalues-and-eigenvectors?u=76281980&t=14)** This says if we multiply matrix A with some vector v, it is the same as multiplying vector v by some scalar lambda.
>
> **[0:23](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/calculating-eigenvalues-and-eigenvectors?u=76281980&t=23)** In case this equation is true, we call we vector v eigenvector and scalar lambda associated eigenvalue of matrix A.
>
> **[0:33](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/calculating-eigenvalues-and-eigenvectors?u=76281980&t=33)** We can provide this equation as A multiplied by v minus lambda multiplied by v equals zero.
>
> **[0:40](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/calculating-eigenvalues-and-eigenvectors?u=76281980&t=40)** Meaning, if we subtract lambda v from Av, we get a zero vector.
>
> **[0:46](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/calculating-eigenvalues-and-eigenvectors?u=76281980&t=46)** Finally, we can write this equation as A minus lambda I multiplied by v equals zero, where I is an identity matrix.
>
> **[0:57](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/calculating-eigenvalues-and-eigenvectors?u=76281980&t=57)** At the end, determinant of A minus lambda I will be equal to zero.
>
> **[1:02](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/calculating-eigenvalues-and-eigenvectors?u=76281980&t=62)** Let's see how to calculate eigenvalues and eigenvectors in the following example.
>
> **[1:09](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/calculating-eigenvalues-and-eigenvectors?u=76281980&t=69)** We have a two-by-two matrix A that has elements 3, 4, minus 1, and 7.
>
> **[1:15](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/calculating-eigenvalues-and-eigenvectors?u=76281980&t=75)** First step we have to make is to shift this matrix by lambda multiplied with the identity matrix.
>
> **[1:22](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/calculating-eigenvalues-and-eigenvectors?u=76281980&t=82)** We can write this down as A minus lambda I equals zero, and calculate the values.
>
> **[1:29](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/calculating-eigenvalues-and-eigenvectors?u=76281980&t=89)** Next step is to set the determinant of A minus lambda I equal to zero.
>
> **[1:35](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/calculating-eigenvalues-and-eigenvectors?u=76281980&t=95)** When we simplify our equation, we get 3 minus lambda times 7 minus lambda plus 4 equals 0.
>
> **[1:44](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/calculating-eigenvalues-and-eigenvectors?u=76281980&t=104)** After multiplying the brackets and simplifying, we get the quadratic equation, lambda minus 5 squared equals 0.
>
> **[1:52](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/calculating-eigenvalues-and-eigenvectors?u=76281980&t=112)** That gives us solutions and roots of our equations, lambda1 equals lambda2 equals 5.
>
> **[1:59](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/calculating-eigenvalues-and-eigenvectors?u=76281980&t=119)** These are our eigenvalues.
>
> **[2:02](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/calculating-eigenvalues-and-eigenvectors?u=76281980&t=122)** To get the eigenvectors, we have to go back to our system A minus lambda I equals 0.
>
> **[2:09](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/calculating-eigenvalues-and-eigenvectors?u=76281980&t=129)** That is, in our case, equal to A minus 5I equals 0, and after simplifying, we have a matrix with elements minus 2, 4, minus 1, and 2 equals 0.
>
> **[2:23](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/calculating-eigenvalues-and-eigenvectors?u=76281980&t=143)** It is equivalent to the systems of equations.
>
> **[2:26](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/calculating-eigenvalues-and-eigenvectors?u=76281980&t=146)** From this system, we get the solution K1 equals 2K2, and if we choose K2 equals 2, then we get a single eigenvector K1 with elements 4 and 2.
>
> **[2:40](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/calculating-eigenvalues-and-eigenvectors?u=76281980&t=160)** Since we could choose different integers, and plug them instead of K2, in that case, we would get different eigenvectors and solutions.
>
> **[2:49](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/calculating-eigenvalues-and-eigenvectors?u=76281980&t=169)** Understanding and knowing how eigenvector and eigenvalues are calculated is important in the future extraction techniques.
>
> **[2:57](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/calculating-eigenvalues-and-eigenvectors?u=76281980&t=177)** One of them is principle component analysis, or PSA, which is an algorithm used to reduce dimensionality while training a machine learning model.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linear Algebra]] (1), next (1)
> **Definitions:** is an  (2), is a  (1)
> **CLI Commands:** make (1)
> **Env Vars:** psa (1)
> **Speakers:** - [instructor] (1)

#### Changing to the eigenbasis
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/changing-to-the-eigenbasis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/changing-to-the-eigenbasis?u=76281980&t=0)** - [Instructor] There are many applications in which we have to calculate high powers of square matrix A.
>
> **[0:06](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/changing-to-the-eigenbasis?u=76281980&t=6)** What it basically means is that we have to apply the same matrix multiplication many times.
>
> **[0:13](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/changing-to-the-eigenbasis?u=76281980&t=13)** We will explore that the most efficient way to calculate A to the power of n, especially for the larger values of n, is to first diagonalize A.
>
> **[0:23](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/changing-to-the-eigenbasis?u=76281980&t=23)** Diagonalizing a matrix involves finding its eigenvalues and eigenvectors, and we have to find out how these values are related to those of A to the power of n.
>
> **[0:36](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/changing-to-the-eigenbasis?u=76281980&t=36)** Let's Look at a simple example.
>
> **[0:39](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/changing-to-the-eigenbasis?u=76281980&t=39)** We have a transformation matrix T that will represent rotation and shift of a vector v.
>
> **[0:45](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/changing-to-the-eigenbasis?u=76281980&t=45)** We get the result of applying the transformation T on a vector v by multiplying the T with v, and we get a new vector, and let's call it v1.
>
> **[0:57](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/changing-to-the-eigenbasis?u=76281980&t=57)** If we apply the transformation T on the vector v1, we get a new vector v2.
>
> **[1:04](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/changing-to-the-eigenbasis?u=76281980&t=64)** We can conclude that this is equal to multiplying the transformation T twice with vector v.
>
> **[1:10](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/changing-to-the-eigenbasis?u=76281980&t=70)** So, we can write this down as v2 is equal to T squared multiplied with v.
>
> **[1:17](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/changing-to-the-eigenbasis?u=76281980&t=77)** In case when we would like to calculate the position of the final vector vn after n steps, then we could write vn equals T to the power of n times v.
>
> **[1:29](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/changing-to-the-eigenbasis?u=76281980&t=89)** Imagine we have to calculate the position of the final vector v after 1,000 steps, or even after 100s of 1,000s steps, these calculations would be troublesome and timely.
>
> **[1:42](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/changing-to-the-eigenbasis?u=76281980&t=102)** If there's a way to transform matrix T into diagonal matrix, then this calculation would be easier and straightforward.
>
> **[1:51](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/changing-to-the-eigenbasis?u=76281980&t=111)** When we have to multiply a diagonal matrix by itself, all you have to do is multiply the diagonal elements by themselves, meaning you just have to square each diagonal element.
>
> **[2:04](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/changing-to-the-eigenbasis?u=76281980&t=124)** In the case when we have to calculate the nth power of a diagonal matrix, we only have to raise each of the elements of the diagonal to the power of n.
>
> **[2:14](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/changing-to-the-eigenbasis?u=76281980&t=134)** In order to create an eigenbasis conversion matrix, we have to plug in each of the eigenvectors as columns.
>
> **[2:21](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/changing-to-the-eigenbasis?u=76281980&t=141)** There is a theorem that says if n is a positive integer, lambda is an eigenvalue of a matrix, and x is a correspondent eigenvector, then lambda to the power of n is an eigenvalue of T to the power of n, and x is a corresponding eigenvector.
>
> **[2:39](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/changing-to-the-eigenbasis?u=76281980&t=159)** Our problem of computing T to the power of n can be simplified to the following.
>
> **[2:45](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/changing-to-the-eigenbasis?u=76281980&t=165)** C is our eigenbasis conversion matrix.
>
> **[2:48](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/changing-to-the-eigenbasis?u=76281980&t=168)** D is diagonal matrix.
>
> **[2:50](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/changing-to-the-eigenbasis?u=76281980&t=170)** So, we can write down our matrix T as T equals matrix C multiplied with diagonal matrix D multiplied with C-inverse.
>
> **[3:00](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/changing-to-the-eigenbasis?u=76281980&t=180)** To calculate matrix T squared, we have to multiply C D C-inverse again with itself.
>
> **[3:08](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/changing-to-the-eigenbasis?u=76281980&t=188)** In the middle, we have C-inverse multiplied with C, which gives us an identity matrix.
>
> **[3:15](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/changing-to-the-eigenbasis?u=76281980&t=195)** We know that when we multiply any matrix with an identity matrix, we get that matrix.
>
> **[3:22](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/changing-to-the-eigenbasis?u=76281980&t=202)** Now, we have C multiplied with D again with D, and then with C-inverse.
>
> **[3:28](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/changing-to-the-eigenbasis?u=76281980&t=208)** From which, we obtain the relationship T squared equals C multiplied with D squared multiplied with C-inverse.
>
> **[3:37](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/changing-to-the-eigenbasis?u=76281980&t=217)** At the end, we can extract our formula for T raised to the power of n.
>
> **[3:43](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/changing-to-the-eigenbasis?u=76281980&t=223)** T to the power of n will equal C multiplied with D to the power of n multiplied with C-inverse.
>
> **[3:50](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/changing-to-the-eigenbasis?u=76281980&t=230)** And there you have it, you have mastered simple technique changing any basis to the eigenbasis.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** power (11)
> **Definitions:** is a  (4), is an  (2), basically means (1)
> **CLI Commands:** find (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### Google PageRank algorithm
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/google-pagerank-algorithm?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/google-pagerank-algorithm?u=76281980&t=0)** - [Instructor] PageRank is the core of the Google search engine algorithm.
>
> **[0:04](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/google-pagerank-algorithm?u=76281980&t=4)** It is synonymous for link popularity, link value, link equity, and authority.
>
> **[0:11](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/google-pagerank-algorithm?u=76281980&t=11)** How does it work?
>
> **[0:12](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/google-pagerank-algorithm?u=76281980&t=12)** According to Google, it counts the number and quality of the links to a page to determine how important the webpage is, the important it is.
>
> **[0:22](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/google-pagerank-algorithm?u=76281980&t=22)** The more important a web page is, it is more likely to receive more links from other web pages.
>
> **[0:29](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/google-pagerank-algorithm?u=76281980&t=29)** The most important part of the PageRank algorithm is to discover the best way to calculate the importance of each page that is returned by the query results.
>
> **[0:40](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/google-pagerank-algorithm?u=76281980&t=40)** We have to calculate the probability.
>
> **[0:42](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/google-pagerank-algorithm?u=76281980&t=42)** This is a number from zero to one that can quantify the importance of a particular page.
>
> **[0:50](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/google-pagerank-algorithm?u=76281980&t=50)** Google's PageRank system assigns a value called a PageRank to every page in its network of webpages.
>
> **[0:58](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/google-pagerank-algorithm?u=76281980&t=58)** In the case a page has a high PageRank it will appear earlier in the search result.
>
> **[1:04](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/google-pagerank-algorithm?u=76281980&t=64)** Each PageRank is calculated by the number of links that point to a given webpage and by the importance of the webpages that point to it.
>
> **[1:13](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/google-pagerank-algorithm?u=76281980&t=73)** Consider the following figure.
>
> **[1:15](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/google-pagerank-algorithm?u=76281980&t=75)** Let's assume that we are analyzing only five webpages in the network and name them with capital letters A, B, C, D, and E.
>
> **[1:26](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/google-pagerank-algorithm?u=76281980&t=86)** Each webpage has links to other webpages shown here by arrows.
>
> **[1:31](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/google-pagerank-algorithm?u=76281980&t=91)** Each link carries a fraction of the relevance that the webpage carries.
>
> **[1:36](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/google-pagerank-algorithm?u=76281980&t=96)** For example, for webpage C we have two outgoing links that take us to two other webpages, B and D.
>
> **[1:45](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/google-pagerank-algorithm?u=76281980&t=105)** So webpage C with two outgoing links will give one half of its importance to each of the webpages it links to.
>
> **[1:54](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/google-pagerank-algorithm?u=76281980&t=114)** For webpage A we have three outgoing links.
>
> **[1:57](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/google-pagerank-algorithm?u=76281980&t=117)** So it'll give us one third of its importance to each of the webpages it links to.
>
> **[2:04](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/google-pagerank-algorithm?u=76281980&t=124)** This can also be viewed as the probability of a user clicking on a given link if they are currently in a page containing that link.
>
> **[2:13](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/google-pagerank-algorithm?u=76281980&t=133)** This network of links can be represented by stochastic or probability matrix where each element is the probability of a link on a given webpage, represented by its column, being selected and taking the user to another webpage represented by its row.
>
> **[2:33](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/google-pagerank-algorithm?u=76281980&t=153)** So for our example, matrix A is connected to matrixes B, C, and D.
>
> **[2:39](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/google-pagerank-algorithm?u=76281980&t=159)** So we got one third for each of them.
>
> **[2:42](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/google-pagerank-algorithm?u=76281980&t=162)** And the other two values in the first column are zero since it's not connected with A and E.
>
> **[2:48](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/google-pagerank-algorithm?u=76281980&t=168)** Matrix M represents what is the probability of ending up of each of the pages.
>
> **[2:55](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/google-pagerank-algorithm?u=76281980&t=175)** To calculate a rank of any page we have to know the rank of all the pages.
>
> **[3:00](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/google-pagerank-algorithm?u=76281980&t=180)** How do they link to a specific page and how many outgoing links are there altogether?
>
> **[3:07](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/google-pagerank-algorithm?u=76281980&t=187)** For example, imagine we want to calculate the rank of page A.
>
> **[3:11](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/google-pagerank-algorithm?u=76281980&t=191)** The rank of A will be the sum of the ranks of all the pages which link to it, weighted by their specific link probability from matrix M.
>
> **[3:22](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/google-pagerank-algorithm?u=76281980&t=202)** Let us denote by x1, x2, x3, x4, and x5, the importance of the five pages.
>
> **[3:30](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/google-pagerank-algorithm?u=76281980&t=210)** Analyzing the situation at each node, we get the following system.
>
> **[3:34](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/google-pagerank-algorithm?u=76281980&t=214)** We have to find the solution of the system of five linear equations.
>
> **[3:39](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/google-pagerank-algorithm?u=76281980&t=219)** That can be done easily using eigenvalues and eigenvectors.
>
> **[3:44](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/google-pagerank-algorithm?u=76281980&t=224)** Now you have a brief understanding of one of the most useful algorithms called the PageRank algorithm and the importance of eigenvalues and eigenvectors in its implementation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Probability]] (6), [[Google]] (3), [[Search]] (2), web (2), node (1)
> **Analogies:** for example (2), imagine (1)
> **CLI Commands:** node (1), find (1)
> **Cross-References:** earlier in (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/next-steps?u=76281980&t=0)** - [Terezija] I hope you enjoyed the course and now have a solid foundation of linear algebra so you can continue your machine learning journey.
>
> **[0:09](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/next-steps?u=76281980&t=9)** A good next step would be to look in our library for more machine learning courses.
>
> **[0:14](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/next-steps?u=76281980&t=14)** I want to wrap up by saying thank you.
>
> **[0:17](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/next-steps?u=76281980&t=17)** You have devoted time to learning this material with me, and I want you to know that I don't take that for granted.
>
> **[0:24](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/next-steps?u=76281980&t=24)** I really do appreciate your engagement, as well as your feedback on this course.
>
> **[0:29](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/next-steps?u=76281980&t=29)** If you enjoyed this course, I'd love to know.
>
> **[0:32](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/next-steps?u=76281980&t=32)** If you have any questions, please feel free to get in touch over LinkedIn and on Twitter.
>
> **[0:37](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/next-steps?u=76281980&t=37)** Until next time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** next (2), [[Linear Algebra]] (1), [[LinkedIn]] (1)
> **Speakers:** - [terezija] (1)


## Instructor

- [[Terezija Semenski]]

## Resources

- Exercise files available

## Skills Covered

- Machine Learning
- Linear Algebra
- Artificial Intelligence (AI)

## Path Context

### In [[Machine Learning Statistical Foundations Professional Certificate by Wolfram Research]]
← [[Artificial Intelligence Foundations- Machine Learning]] | **2 of 6** | [[Machine Learning Foundations- Calculus]] →

### In [[Foundational Math for Machine Learning]]
**1 of 4** | [[Machine Learning Foundations- Calculus]] →

### In [[Getting Started with AI and Machine Learning]]
← [[Artificial Intelligence Foundations Thinking Machines]] | **2 of 7** | [[Deep Learning Getting Started]] →

## Part of

- [[Machine Learning Statistical Foundations Professional Certificate by Wolfram Research]]

## Appears In

- [[Machine Learning Statistical Foundations Professional Certificate by Wolfram Research]]
- [[Foundational Math for Machine Learning]]
- [[Getting Started with AI and Machine Learning]]

## Related Courses

_Courses sharing skills:_

- [[Machine Learning and AI Foundations- Clustering and Association]] — Artificial Intelligence (AI), Machine Learning
- [[Machine Learning and AI- Advanced Decision Trees with SPSS]] — Artificial Intelligence (AI), Machine Learning
- [[Machine Learning and AI Foundations- Decision Trees with SPSS]] — Artificial Intelligence (AI), Machine Learning
- [[Machine Learning and AI Foundations- Classification Modeling]] — Artificial Intelligence (AI), Machine Learning
- [[Machine Learning & AI Foundations- Linear Regression]] — Artificial Intelligence (AI), Machine Learning

---

[↑ Back to top](#)