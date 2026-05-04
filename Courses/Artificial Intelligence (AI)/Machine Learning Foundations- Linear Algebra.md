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
  - '[Machine Learning Statistical Foundations Professional Certificate by Wolfram Research](../../Paths/Artificial%20Intelligence%20(AI)/Professional%20Certificates/Machine%20Learning%20Statistical%20Foundations%20Professional%20Certificate%20by%20Wolfram%20Research.md)'
  - '[Foundational Math for Machine Learning](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Foundational%20Math%20for%20Machine%20Learning.md)'
  - '[Getting Started with AI and Machine Learning](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Getting%20Started%20with%20AI%20and%20Machine%20Learning.md)'
prev_courses:
  - '[Artificial Intelligence Foundations- Machine Learning](Artificial%20Intelligence%20Foundations-%20Machine%20Learning.md)'
  - null
  - '[Artificial Intelligence Foundations Thinking Machines](Artificial%20Intelligence%20Foundations%20Thinking%20Machines.md)'
next_courses:
  - '[Machine Learning Foundations- Calculus](Machine%20Learning%20Foundations-%20Calculus.md)'
  - '[Machine Learning Foundations- Calculus](Machine%20Learning%20Foundations-%20Calculus.md)'
  - '[Deep Learning Getting Started](Deep%20Learning%20Getting%20Started.md)'
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
created: 2026-05-03
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

#### [Linear algebra the building block of ML](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/linear-algebra-the-building-block-of-ml?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/linear-algebra-the-building-block-of-ml?u=76281980&t=0)** - Have you ever wondered what happens under the hood of machine learning [Algorithms](../../Skills/Software%20Development/Algorithms.md) from images, [Speech Recognition](../../Skills/Software%20Development/Speech%20Recognition.md), trading algorithms to medical system diagnosis, all the way to the self-driving cars? Machine learning is not only the future, it's all around us. You can quickly learn the tools of machine learning without understanding the underlying math. At the beginning, you'll probably be successful, but without knowing the basics of [Linear Algebra](../../Skills/Artificial%20Intelligence%20(AI)/Linear%20Algebra.md), you won't be able to understand the object being optimized, choose the proper hyperparameters, and develop a better model. Linear algebra is the building block of machine learning. Hi, I'm Terezija Semenski. I'm a software developer, mathematician, and a teacher with a passion for AI and machine learning. Join me in this course and discover the power of linear algebra.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Linear Algebra](../../Skills/Artificial%20Intelligence%20(AI)/Linear%20Algebra.md) (3), [Algorithms](../../Skills/Software%20Development/Algorithms.md) (2), [Speech Recognition](../../Skills/Software%20Development/Speech%20Recognition.md) (1)
> **Speakers:** - have (1)

#### [What you should know](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/what-you-should-know?u=76281980&t=0)** - [Instructor] Before starting this course, let's explore what skills and knowledge you will need. In order to truly be successful in this course, it will be helpful to have a solid understanding of algebra and geometry. Basic [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) programming knowledge will definitely help, though it's not strictly necessary. This course is focused on [Linear Algebra](../../Skills/Artificial%20Intelligence%20(AI)/Linear%20Algebra.md) capabilities and its applications in Python code. Our focus will be on the latest versions of Python 3. So make sure you have it installed on your machine. You will also want to make sure that you have Anaconda installed. We're going to be working with Jupyter Notebooks. So if you have never worked with Jupyter Notebooks before, then you can go check out the Jupyter Notebooks Basics window in my course Foundations of NumPy. And that's about it. So let's get ready to start our journey into linear algebra foundations.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (3), [Linear Algebra](../../Skills/Artificial%20Intelligence%20(AI)/Linear%20Algebra.md) (2)
> **CLI Commands:** python (3), make (2)
> **Tools:** jupyter (3), anaconda (1)
> **Versions:** python 3 (1)
> **Prerequisites:** make sure you have (1)
> **Speakers:** - [instructor] (1)


### 1. Introduction to Linear Algebra

[↑ Back to Table of Contents](#table-of-contents)

#### [Defining linear algebra](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/defining-linear-algebra?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/defining-linear-algebra?u=76281980&t=0)** - [Instructor] When you hear the term [Linear Algebra](../../Skills/Artificial%20Intelligence%20(AI)/Linear%20Algebra.md), the first thing that comes to your mind is probably algebra and you have flashbacks of high school math. Hopefully, that sparks joy. If not, don't worry. We'll get through the linear algebra story step by step together. Despite having a similar name, linear algebra is not an advanced or applied version of algebra. Mathematicians sometimes become furious when people mix these two areas of mathematics, just as software developers are not keen on people mixing [Java](../../Skills/Software%20Development/Java.md) with [JavaScript](../../Skills/Software%20Development/JavaScript.md). Algebra is a branch of mathematics in which arithmetical operations and formal manipulations are applied to abstract symbols rather than specific numbers. In short, the term algebra is the study of mathematical symbols and the rules for manipulating these symbols. Linear algebra is a branch of mathematics that lets you concisely describe coordinates and interactions of planes in higher dimensions and perform operations on them. In short, linear algebra is the study of vectors and linear functions. The main building blocks and areas of linear algebra are systems of linear equations, vectors and matrices, linear transformations, determinants, and vector spaces.
>
> **[1:35](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/defining-linear-algebra?u=76281980&t=95)** If you haven't engaged or even heard of vectors and matrices before, don't worry. No prior knowledge is needed. We'll learn everything together, starting from the beginning. Linear algebra is extremely important in machine learning, also called ML. Because when you are building a machine learning model, you are dealing with either vectors or matrices. Large data sets have multiple row and columns. These are nothing but matrices. When you split your data set into training and testing data, you are performing operations on these matrices. Let's jump in and explore linear algebra in depth.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Linear Algebra](../../Skills/Artificial%20Intelligence%20(AI)/Linear%20Algebra.md) (8), [Java](../../Skills/Software%20Development/Java.md) (1), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)

#### [Applications of linear algebra in ML](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/applications-of-linear-algebra-in-ml?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/applications-of-linear-algebra-in-ml?u=76281980&t=0)** - [Instructor] [Linear Algebra](../../Skills/Artificial%20Intelligence%20(AI)/Linear%20Algebra.md) is one of the main building blocks of machine learning. At its base, it is a study of vectors, matrices, and linear functions. So you have to be familiar with vectors, matrices, and their characteristics, as you're going to deal with them in ML. What about machine learning [Algorithms](../../Skills/Software%20Development/Algorithms.md)? Without knowing linear algebra, you cannot understand them and therefore cannot change and improve them. Let's explore nine most important applications of linear algebra. Data set and data files. In machine learning we fit the model on a data set. This data set is either a matrix or a vector. For example, our model could be a fitness related model that predicts quality of sleep. Images and photographs. If you're working on a [Computer Vision](../../Skills/Artificial%20Intelligence%20(AI)/Computer%20Vision.md) application, then you're dealing with images or photographs. In this case, you cannot send an image to a model and expect it to understand it. Each image is made of pixels that are basically just colored squares of varying intensities. If you have a black and white image then it's a single pixel. And for colored images, it's three pixel values for RGB. All images are stored as a matrix. Each operation that is performed on the image from cropping, scaling, et cetera, is described using the notation and operations of linear algebra.
>
> **[1:34](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/applications-of-linear-algebra-in-ml?u=76281980&t=94)** [Data Preparation](../../Skills/Data%20Science/Data%20Preparation.md). Data preparation, such as dimensionality reduction and one hot encoding requires linear algebra. Usually we come across data that is made up of thousands of variables and our model becomes extremely complicated. That's when dimensionality reduction comes into play. Data sets are represented as matrices and then we can use matrix factorization methods to reduce it into its constituent parts. One hot encoding is used when working with categorical data, such as the class labels for classification problems or categorical input variables. It is common to encode categorical variables to make them easier to work with. [Linear Regression](../../Skills/Data%20Science/Linear%20Regression.md). It is usually used in machine learning for predicting numerical values in simple regression problems. The most common way of solving linear regression is via the least squares optimization that is solved using matrix factorization methods from linear regression. Regularization. Overfitting is one of the greatest obstacles in machine learning. When a model is too close a fit for the available data to the point that it does not perform well with any new or outside data. Regularization is a concept from linear algebra that is used to prevent the model from overfitting.
>
> **[3:08](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/applications-of-linear-algebra-in-ml?u=76281980&t=188)** Simple models are models that have smaller coefficient values. Regularization is a technique that is often used to encourage a model to minimize the size of coefficients while it's being fit on data. Principle component analysis. Modeling data with many features is challenging and it's hard to know which features of data are relevant and which are not. One of the methods for automatic reducing the number of columns of a data set is principle component analysis. This method is used in machine learning to create projections of high dimensional data for both visualization and for training models. The core of the PCA method is a metric factorization method. Latent semantic analysis. LSA is a form of data preparation used in [natural language processing](../../Skills/Artificial%20Intelligence%20(AI)/Natural%20Language%20Processing%20(NLP).md), a subfield of machine learning for working with text data. In this case, documents are usually represented as a large matrices of [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) occurrences. Then we can apply matrix factorization methods to them in order to be able to easily compare, query, and use them as the basis for the ML model. Recommender systems. Recommender systems are [Predictive Modeling](../../Skills/Data%20Science/Predictive%20Modeling.md) problems that involve the recommendation of [products](../../Skills/Software%20Development/Microsoft%20Products.md). They are used each time you buy something on Amazon
>
> **[4:41](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/applications-of-linear-algebra-in-ml?u=76281980&t=281)** or a similar shop and you get recommendations of products based on your previous purchases. [Deep Learning](../../Skills/Artificial%20Intelligence%20(AI)/Deep%20Learning.md). Deep learning is a specific subfield of machine learning. Scaled up to multiple dimensions, deep learning methods work with vectors, matrices, and tensors of inputs and coefficients.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Linear Algebra](../../Skills/Artificial%20Intelligence%20(AI)/Linear%20Algebra.md) (6), [Data Preparation](../../Skills/Data%20Science/Data%20Preparation.md) (3), [Linear Regression](../../Skills/Data%20Science/Linear%20Regression.md) (3), [Deep Learning](../../Skills/Artificial%20Intelligence%20(AI)/Deep%20Learning.md) (3), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (2)
> **Definitions:** is a  (6)
> **Env Vars:** rgb (1), pca (1), lsa (1)
> **Analogies:** such as (2), for example (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)


### 2. Vectors Basics

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to vectors](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/introduction-to-vectors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/introduction-to-vectors?u=76281980&t=0)** - [Instructor] When we began our journey into the unknown land of [Linear Algebra](../../Skills/Artificial%20Intelligence%20(AI)/Linear%20Algebra.md), we mentioned a few terms, vectors and matrices, without even explaining what they are and why they're important. Let's start from the basics. Learning what vectors are and how they defer from scalars. You've probably learned definitions of a scalar and vector. Basically a scalar is just a number. And we denote a scalar with a lower-case symbol, such as a or b. Examples of scalars are weight, temperature, or blood pressure. And they're represented by numbers, such as 200 pounds, 55 Fahrenheit, or 120 by 80. We can understand what a vector is by simple example. Imagine a moving car. It has a measure called velocity. It has both a quantity and a direction. Such elements are called vectors, as opposed to scalars, for example, the price of the car, which has magnitude only. We denote vectors with lowercase, bolded Roman letters, such as a and b. Some texts use italics or print an arrow on top. By definition a vector is an ordered list of numbers. The two most important characteristics of vectors are dimensionality, the number of elements in a vector, and orientation, whether the vector is
>
> **[1:36](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/introduction-to-vectors?u=76281980&t=96)** in column orientation standing up tall, or row orientation laying flat and wide. Let's see a few examples of vectors. X is a three dimensional column vector. Y is a 2D column vector, and Z is a 3D row vector. If you look at vectors, X and Z, you probably notice they have the same elements in the same order. You could conclude they're the same, but technically they're different because X is column oriented and Z is row oriented. You may think, "Why does it matter?" If you use vectors for storing data, orientation usually doesn't matter. But when performing arithmetic operations it's extremely important, since the wrong orientation leads to unexpected results or even errors. The dimensionality in linear algebra, the number of elements in the vector, is called the length or the shape of the vector in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md). We have a convention in linear algebra that assumes vectors are column oriented. If they're row oriented, then they are written as with t where t indicates the transpose operation which converts a column vector into row vector. If we would like to represent the vector graphically, then it would look like, the red arrow v is the vector, and in our case, a and b are scalars
>
> **[3:09](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/introduction-to-vectors?u=76281980&t=189)** denoting the magnitude of v in horizontal and vertical directions. The algebraic interpretation of a vector is an ordered list of numbers. The geometric interpretation of a vector is a line that has a specific length and direction also called angle. It is computed relative to the positive X-axis. The two points of a vector are called the tail, where the vector starts, and the head that has the arrow tip, where it ends. We can represent vectors in Python using several data types. The simplest way to represent a vector is with a list. For example, vectorAsList. However, as many linear algebra operations don't work on Python list, we create vectors as NumPy arrays called ND arrays. One example would be vectorAsArray. This array is orientationless array meaning it's neither a row nor a column vector. In NumPy, we indicate orientation with brackets. Let's see it in two examples. RowVector, the outer brackets just group all elements together in one object as an additional set of brackets indicates a row. In case of column vector example, columnVector, we see it has only one column and five rows. Now that we have discovered basic characteristics of vectors, we can head on to vector arithmetic
>
> **[4:44](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/introduction-to-vectors?u=76281980&t=284)** and explore operations and vectors.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Linear Algebra](../../Skills/Artificial%20Intelligence%20(AI)/Linear%20Algebra.md) (4), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (3)
> **Definitions:** is a  (4), is an  (2), is called (1)
> **Analogies:** such as (3), for example (2), imagine (1)
> **CLI Commands:** python (3)
> **Code Identifiers:** vectoraslist (1), vectorasarray (1), columnvector (1)
> **Cross-References:** we mentioned (1)
> **Speakers:** - [instructor] (1)

#### [Vector arithmetic](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/vector-arithmetic-25657740?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/vector-arithmetic-25657740?u=76281980&t=0)** - [Instructor] Arithmetic operations in [Linear Algebra](../../Skills/Artificial%20Intelligence%20(AI)/Linear%20Algebra.md) are simple and intuitive, so let's jump right into it. We'll start with addition. To add two vectors, simply add each corresponding element. Addition is possible only for two vectors that have the same dimension. We cannot add a three-dimensional vector with a four-dimensional vector. For vector subtraction, the same rule applies. You can subtract the two vectors element-wise only if they have the same dimension. Let's head onto Jupyter Notebooks and try this out. We have already imported numpy as np. We'll define three vectors, a, b, and c, and then add vectors a and b, and after, try to add vectors a and c. As you can see, when we try to add a and c, we get an error because their dimensions don't match. Next, let's subtract a and b, and then try to subtract a and c. We also get an error in case of a and c. We can also multiply two vectors when they have the same length. Let's multiply vectors a and b by typing a*b. Similarly, we can divide vectors a and b
>
> **[1:37](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/vector-arithmetic-25657740?u=76281980&t=97)** using / operator by typing a/b. The next operation we'll explore is vector scalar multiplication. A scalar is just a number, so vector scalar multiplication is simple and straightforward. We're going to multiply each vector element by the scalar. It is important to memorize that there is a difference if we create a vector as a list or a vector as a ndarray. Let's see it in a basic example. We'll define scalar and name it just scalar, and then create a list as a vector and define it as list_a, and then convert that list into ndarray and define it as list_as_array. If we multiply our first vector with a scalar, we get the list printed two times. That is not an operation of scalar vector multiplication. In the case when a vector is stored as a ndarray, then we have element-wise multiplication. Let's type in scalar*list_as_array to get our vector scalar multiplication. Cool, so we have learned basic arithmetic operations with vectors. What is also special with these operations is that we can see geometrical interpretation of them. To add two vectors, you have to place the vector such that the tail of one vector
>
> **[3:11](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/vector-arithmetic-25657740?u=76281980&t=191)** is at the head of the other vector. The sum vector traverses from the tail of the first vector to the head of the second. To subtract vectors, we also have a straightforward procedure. You have to up the two vectors such that their tails are at the same coordinate. The difference vector is the line that goes from the head of the negative vector to the head of the positive vector. What about vector scalar multiplication? For vector scalar multiplication, we have four possible cases that depend on whether the scalar is greater than one, between one and zero, exactly zero, or negative. Only in the case when the scalar is negative, the direction of the vector will change.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Linear Algebra](../../Skills/Artificial%20Intelligence%20(AI)/Linear%20Algebra.md) (1)
> **Code Identifiers:** list_as_array (2)
> **Tools:** jupyter (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Coordinate system](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/coordinate-system?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/coordinate-system?u=76281980&t=0)** - Have you ever played chess or watch someone else played? If you have, then you know that a square board is divided into eight rows and eight columns. A coordinate for a space on a chessboard is a combination of a row and a column. I like to think of a Cartesian coordinate system as a chessboard, just like in chess where you can locate a figure by its combination of number one to eight for a row and later A to H for column. We can locate a point by its combination of numbers. Coordinate system is important because it describes where a certain position is located in a two-dimensional area. Coordinates have two numbers, the x-coordinate and the y-coordinate. The x-axis runs left and right and the y-axis runs up and down. The axes x and y meet at (0, 0) coordinate at the center that is called the origin. A point is denoted by its distance along the x-axis followed by its distance along the y-axis. If we want to represent a point 2, 3 then we would go two to the right on the x-axis and three up along the y-axis. Let's see another example, point (-3, 1). First we would go minus three left along the x-axis and one up along the y-axis. As you can see coordinates are always described with the x-coordinate first followed by the y-coordinate.
>
> **[1:37](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/coordinate-system?u=76281980&t=97)** The x-axis runs left and right and the y-axis runs up and down. Simple as that. If we define two points A (1, 0) and B (0, 1) and the third point is the origin, O (0, 0). Then we can define vector OA and vector OB. And they both have magnitudes that are equal to one. These vectors are called the unit vectors along the x and y-axis. We usually use notations I for the vector OA and J for the vector OB. Now let's connect this with vector addition. If we choose another two points, C (4, 0) on x-axis and D (0, 3) on y-axis then the sum of the two vectors OC and OD would equal 4I plus 3J. We can use a rule for vector addition by placing the height of the vector OD at the tail of the vector OC. The sum of vector OP traverses from the head of the first vector to the tail of the second. Now that we have learned vector basics and how to represent them in a coordinate system, let's explore more complex vector operations that will allow us to transform vector space.

> [!info]- Semantic Content
>
> **Definitions:** is a  (1), is called (1)
> **Analogies:** just like (1)
> **Speakers:** - have (1)


### 3. Vector Projections and Basis

[↑ Back to Table of Contents](#table-of-contents)

#### [Dot product of vectors](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/dot-product-of-vectors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/dot-product-of-vectors?u=76281980&t=0)** - [Narrator] Imagine a machine learning algorithm gets three images, first one of an apple, second one of a pear, and a third one, unknown. What we would like to know is if it is more probable for the unknown image to be labeled as an apple or a pear? In the core of this calculation is a dot product of two vectors. It is widely used in machine learning, as it is used in many operations and [Algorithms](../../Skills/Software%20Development/Algorithms.md). There are three different ways it can be represented with symbols. We are going to use the dot notation. The dot product of two vectors is calculated by multiplying their corresponding elements by each other and then summing them all. It's a single number that provides information about the relationship between two vectors. It could be represented with the following formula, where a and b are vectors of the same dimensionality and ai represent the ith element of a. Let's see how it works in a simple example. If you have two vectors, a, whose elements are integers from 1 to 5, and vector b, whose elements are integers from 6 to 10, then their dot product is calculated by multiplying first element of vector a with the first element the vector b, and then the second elements up to the fifth elements. And finally, we have to sum over all the individual [products](../../Skills/Software%20Development/Microsoft%20Products.md). Let's head into our Jupyter notebook
>
> **[1:34](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/dot-product-of-vectors?u=76281980&t=94)** where we have already imported NumPy as np. We'll create two vectors, a and b. And to calculate dot product, we only have to use the dot function that does it for us by typing np.dot a,b, simple as that. We can look at the dot product of two vectors as a measure of similarity or mapping between two vectors. There are two basic properties of dot product that are extremely important. The dot product is a commutative operation, meaning if vectors switch places, dot product stays the same. And the dot product is distributive over addition, meaning the following formula applies. Let's check these two properties on our vectors a and b, and let's introduce the third vector c. We can first calculate np.dot b,a, and we see it's the same as np.dot a,b. Next, let's calculate np.dot a,b+c and store it as the first_result and then, np.dot a,b + np.dot a,c and store it as the second_result. After we run our code, we see we got the same result. Great, now we can continue exploring vector features.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Algorithms](../../Skills/Software%20Development/Algorithms.md) (1), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1)
> **Code Identifiers:** first_result (1), second_result (1)
> **Definitions:** is a  (2)
> **Tools:** jupyter (1)
> **Analogies:** imagine (1)
> **Speakers:** - [narrator] (1)

#### [Scalar and vector projection](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/scalar-and-vector-projection-25655798?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/scalar-and-vector-projection-25655798?u=76281980&t=0)** - [Narrator] Scalar and vector projections are an extremely important part of machine learning because they make mathematical operations and applying machine learning models easier. Before we dive into understanding them, we first need to understand the magnitude or length of the vector. The magnitude of a vector, also called the norm of the geometric length, is the distance from the tail to head of a vector, and it's computed using the standard Euclidean distance formula, the square root of the sum of squared vector elements. Vector magnitude is indicated using double vertical bars around the vector. There is a formula we use to calculate that looks like this. Don't panic if it looks complex. In NumPy, we have a function that does this job for us called norm. So if we want to calculate magnitude of a vector A, we would just need to type magnitude equals np.norm(a). Cool. Let's see what a vector projection is. A vector projection of a vector A onto another vector B is the orthogonal projection of A onto B. Let's understand the concept of vector projection by looking at a simple graphic. You can visualize the projection of A onto B as the shadow of A falling on B if the sun were to shine on B at the right angle. In order to project vector A onto vector B,
>
> **[1:35](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/scalar-and-vector-projection-25655798?u=76281980&t=95)** we have the following formula. Take the dot product of vectors A and B and divide it by magnitude of B. This gives us a scalar value, which is called the component of scalar projection of A in the direction of vector B. In order to calculate a vector projection, we have to multiply the scalar projection with a unit factor of B. Now, let's try it out by opening our Jupyter notebook. In order to simplify the calculation, when changing the basis, we will choose orthogonal vectors F1 and F2. We'll also need to import the norm function from the linalg module by typing from numpy import lingalg as lng. Next, let's create two vectors A and B. To calculate a norm of a vector A, we just have to type lng.norm(a). Now let's calculate the projection of vector A onto vector B. The projection of vector A onto vector B, we just have to divide dot product of A and B with the dot product of B and multiply it with the vector B. Great, and just print it out to display it.

> [!info]- Semantic Content
>
> **Definitions:** is a  (1), is called (1)
> **CLI Commands:** make (1)
> **Tools:** jupyter (1)
> **Speakers:** - [narrator] (1)

#### [Changing basis of vectors](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/changing-basis-of-vectors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/changing-basis-of-vectors?u=76281980&t=0)** - Numerous supplied machine learning problems can be reduced by changing from one coordinate system to another coordinate system, which is basically the same as changing from one basis to another. Up until now we have learned that the vector is an object that takes you from the origin into some point in space. A coordinate system is defined by unit vectors that we have named I and J. Now, we are going to define them as 'e one' and 'e two'. These unit factors have coordinates one zero and zero one respectively. Every vector in space is a unique combination of these basis vectors. Let's define vector 'a' that will be four units along 'e one' and three units down along 'e two'. So, vector 'a' is equal to vector sum four 'e one', plus minus three 'e two', or we can write it down as a list, four minus three. Basis vectors, form basis for space. And any vector in this space can simply be written as a linear combination of these two vectors. There are three properties of basis vectors. They're linearly independent of each other, meaning if you take vector 'e one' and multiply it with a scalar, you cannot get a vector 'e two'. The same goes vice versa for vector 'e two'. They spend the whole space, meaning that any vector in that space can be written as a linear combination of these two vectors.
>
> **[1:36](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/changing-basis-of-vectors?u=76281980&t=96)** They aren't unique. We can find many sets of basis vectors. I could also describe a vector 'a' as a sum of some other vectors that I could use to define the space. So, I could have another set of vectors 'f' and define them as 'f one' that will have coordinates to one, and 'f two that will have coordinates minus one, two. And we can then define vector 'a' by using vectors 'f one' and 'f two'. That is where dot product comes into play. Because we can use it to find the numbers for vector 'a' in the new basis 'f'. If we can make a vector projection of a vector 'a', on 'f one' and a vector projection on 'f two', and when we sum these two vector projections, we can get exactly vector 'a' in the set of 'f' basis vector. Then vector a will have some scalar multiplied with 'f one', plus some scalar multiplied with 'f two'. We can write it down as, a equals lambda one 'f one', plus lambda two 'f two'. In order to change the basis vectors 'f one' and 'f two', have to be orthogonal. We can check it in our example by calculating the dot product. In our case, we have two multiplied with minus one, plus one multiplied with two equals zero, it's zero. So our vectors are 90 degrees orthogonal. Great.
>
> **[3:09](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/changing-basis-of-vectors?u=76281980&t=189)** Now, let's calculate vector projection of 'a' on 'f one', it's equal dot product of 'a' an 'f one', divided by the length of 'f one'. We have four multiplied with two, plus one multiplied with minus three, divided by two squared plus one squared. We get one. And when we multiply it with 'f one', we get two, one. Similarly, we have to calculate vector projection of 'a' on 'f two'. It's equal four multiplied with minus one, plus two multiplied with minus three, divided by minus one squared plus two squared. We get minus two. And when we multiply it with 'f two', we get two minus four. Now, we can write vector 'a', four minus three as one multiplied with two, one, plus minus two multiplied with minus one, two. So, we have covered our 'e' set of basis vectors to 'f' set of basis vectors, using a simple procedure called changing basis of vectors.

> [!info]- Semantic Content
>
> **CLI Commands:** find (2), make (1)
> **Definitions:** is an  (1), is a  (1)
> **Speakers:** - numerous (1)

#### [Basis, linear independence, and span](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/basis-linear-independence-and-span?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/basis-linear-independence-and-span?u=76281980&t=0)** - [Instructor] We can build up every vector in the vector space from the elements in a spanning set using only the operations of addition and scalar multiplication. By definition, a spanning set is: "The set v1 until vn is a spanning set for V "if, and only if, every vector in V "can be written as a linear combination "of v1, v2, until vn." Let's explore spanning set with a few simple examples. If we draw a single nonzero vector, v1, then the span consists of all vectors of the form lambda1 a1. Lambda1 can be positive, negative, or zero. Say if you take a multiple of v1, you can get anywhere along the one-dimensional space of a line. As you can see, for any point not on that line, the corresponding vector will not be in the span v1. If we want to span the entire space, we'll need at least two vectors. The easiest way to do that is by selecting the basis vector e1 that is equal 1,0 and e2 that is equal to 0,1. Any vector a in R2 can be represented as the linear combination of e1 and e2, and hence e1 and e2 is a spanning set for R2. We can write it as a = lambda1 e1 + lambda2 e2. It's called a linear combination of two vectors.
>
> **[1:38](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/basis-linear-independence-and-span?u=76281980&t=98)** By having a combination of e1 and e2, you can get anywhere in the plane. There are just two exceptions. When we have two vectors that line up in the same direction or when these two vectors are null vectors. Span of two vectors is a set of all possible vectors that can be reached with a given pair of vectors. We have learned that we can choose different basis vectors, not just natural basis. The basis is a set of n vectors that are linearly independent of each other. But what does this mean? If vectors v1, v2, and v3 are basis vectors, I cannot write v3 as the linear combination of vectors v1 and v2. We cannot write it as v3 = lambda1 v1 + lambda2 v2. The same applies for vectors v1 and v3. The important thing to notice and remember that for vectors to become bases, they don't have to be unit vectors. So they can be any given length. They don't have to be orthogonal. So they don't have to be 90 degrees to each other.

> [!info]- Semantic Content
>
> **Definitions:** is a  (4)
> **Speakers:** - [instructor] (1)


### 4. Introduction to Matrices

[↑ Back to Table of Contents](#table-of-contents)

#### [Matrices introduction](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/matrices-introduction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/matrices-introduction?u=76281980&t=0)** - [Instructor] Data and business science and machine learning is often organized into rows and columns to form rectangular arrays called matrices. They often appear as tables of numerical data that arise from physical observations. By definition, a matrix is a collection of numbers ordered in rows and columns. As you can see, matrix is a two-dimensional array of numbers. We denote matrices in uppercase, italic, and bold. For example, A, here is an example of matrix. Our matrix contains six numbers, three, zero, minus four, two, three, minus five. We call each of these values an element of a matrix. To make it obvious we are working with the matrix, we put all the elements in the brackets. Our matrix has three rows and two columns. Rows and columns represent two dimensions of a matrix. Matrix A has dimensions three by two or we can say A is three by two matrix. We can apply basic arithmetic operations on matrices, addition, subtraction, and multiplication. You may be wondering if matrices should contain only numbers. Well, a matrix can contain numbers, symbols, or expressions. For example, our matrix A contains only numbers. Matrix B contains symbols, and matrix C contains expressions.
>
> **[1:34](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/matrices-introduction?u=76281980&t=94)** Matrices can be of any size. If we define size of a matrix as m by n matrix, then it means it has m rows and n columns. Often we want to get or transform a particular element of a matrix. We denote an element as small a, with index i and j. It's the element on the position i and j where i represents the row and j represents the column. So our matrix A has m by n elements, would begin with element a, one, one until the element a, one, n in the first row. The second row would begin with a, two, one until a, two, n, and up until the last row that would begin with element a m, one and end with element a m, n. In [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md), just as in any other programming languages, arrays start from zero rather than one. So our matrix would begin with element a, zero, zero and end with element a, m minus one, n minus one.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **CLI Commands:** make (1), python (1)
> **Definitions:** is a  (1), is an  (1)
> **Analogies:** for example (2)
> **Speakers:** - [instructor] (1)

#### [Types of matrices](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/types-of-matrices?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/types-of-matrices?u=76281980&t=0)** - [Instructor] Matrices can come in different shapes and sizes. And there are many types of matrices that usually have their names according to the key properties or people who categorize them. We are going to learn seven different types of matrices that are most useful. Rectangular, square, zero, identity, diagonal, and triangular. Rectangular matrix is a matrix that has a different number of rows and columns. It's m by n matrix, where m is the number of rows and n is the number of columns. A special case of rectangular matrix is called a square matrix. As its name suggests, it has the same number of rows and columns. We usually denote it as m by m matrix. The next type of matrix is a symmetric matrix. Symmetric matrix is a special type of square matrix that has elements mirrored across the diagonal, as you can see in our example. All the corresponding mirrored elements are the same. Zero matrix is the matrix which has all elements equal to zero. If we multiply any vector or matrix with zero matrix, we'll get zero matrix. It is denoted with a bold zero. The identity matrix is a square matrix that has all zeros on off-diagonal elements and all ones on the diagonal elements.
>
> **[1:34](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/types-of-matrices?u=76281980&t=94)** It is denoted with the capital letter, I. The identity matrix has an important role because when we multiply any vector or matrix with the identity matrix, we'll get the same vector or matrix. Another matrix that is interesting to us is the diagonal matrix. The diagonal matrix is a matrix that has off-diagonal elements equal to zero. Diagonal elements can be any numbers, zeros included. An interesting thing to notice is that if you multiply any scalar with the identity matrix, we'll get a diagonal matrix. A triangular matrix is a square matrix that has elements on the upper right or the lower left of the matrix equal to zero. An upper triangular matrix has nonzero elements above the diagonal, and all the elements below the diagonal are zeros. A lower triangular matrix has all zero elements above the diagonal, and elements below the diagonal are not zero. Great. Now we've learned the most important types of matrices. Let's head on to matrix transformation.

> [!info]- Semantic Content
>
> **Definitions:** is a  (6), is called (1)
> **Speakers:** - [instructor] (1)

#### [Types of matrix transformation](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/types-of-matrix-transformation-25659096?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/types-of-matrix-transformation-25659096?u=76281980&t=0)** - [Instructor] Any linear transformation in a plane or in a space can be specified using vectors or matrices. We can specify any linear transformation in three dimensional space by using a matrix that has nine elements. If we specifically pick these nine elements, we can achieve scaling by a factor in a direction, reflecting across the plane, rotation by angle about any axis, projection onto any plane, or some composition of transformations. Linear transformation is basically just a function that takes in some inputs and gives an output for each one. Let's start with basic transformations and then learn how to combine them into advanced ones. We'll take an identity matrix and multiply it with a vector a, b. We get the same vector a, b. What if we have a diagonal matrix with elements 4, 0, 0, 3? What it does, it scales x-axis by multiple of four, and y-axis by multiple of three. We have done a stretch from a square and transformed it into rectangle. Another example of transformation is when we have a diagonal matrix with elements minus one, 0, 0, minus one, so we have flipped both x and y coordinates and we call it inversion. There is a special kind of transformation that is called rotation. In this case, the vector maintains its length
>
> **[1:35](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/types-of-matrix-transformation-25659096?u=76281980&t=95)** and rotates for some angle. Matrix that is used in this case is called rotation matrix, and its elements are cos theta minus sin theta, sin theta, and cos theta. For example, if have our basis vectors e1, 1, 0 and e2, 0, 1, and we rotate them for 90 degrees, we'll get vectors e1 / 0, 1 and e2 / minus one, 0. In this case, our rotation matrix will have elements 0, minus one, 1, 0. Cool, apart from these basic transformations, we can create transformations that are combinations of two or more transformations. For example, stretching and rotation. Let's see it in a simple example. We have a transformation matrix with elements 4, 1, minus one, 3, and then we multiply it with vector 1, 2, we get an output vector 6, 5. Great. We have explored and mastered the application of matrix vector multiplication in the context of geometric transformations of vectors.

> [!info]- Semantic Content
>
> **Definitions:** is called (2), is a  (1)
> **Analogies:** for example (2)
> **Speakers:** - [instructor] (1)

#### [Composition or combination of matrix transformations](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/composition-or-combination-of-matrix-transformations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/composition-or-combination-of-matrix-transformations?u=76281980&t=0)** - We have experienced basic linear transformations like rescaling, rotation, and inversion. The great thing in [Linear Algebra](../../Skills/Artificial%20Intelligence%20(AI)/Linear%20Algebra.md) is that we can combine together any number of different linear transformations to get a new linear transformation. We call it Composition of Linear Transformation. Since any linear transformation can be represented with a matrix, any two or more composed linear transformations can also be represented as matrices. This process is extremely useful in machine learning. Imagine we have to compute the result of ten thousand linear transformations operating on a vector. It becomes computationally expensive, as you have to apply ten thousand sequential functions. On the other hand, if we find the matrix that represents the composition of ten thousand linear transformations, it comes down to a couple of numbers and computations. Lets take a look at the composition of two linear transformations A B V, where A and B are matrices and V is the vector. How do we calculate the composition? We can simply calculate it from left to right, meaning we will first calculate the product matrix AB, and get the new matrix. It will represent the composition of linear transformations A and B. The columns of a new matrix AB are the result of applying the transformation
>
> **[1:35](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/composition-or-combination-of-matrix-transformations?u=76281980&t=95)** to each of the basis vectors, E1, E2, and E3. So we get AB (E1), AB (E2), and AB (E3). To do that, we have to multiply matrices A and B. But how do we do that? To multiply a matrix by another matrix, we need to do the dot product of the rows and columns. To calculate the values of the first element of AB, we have to multiply each corresponding element of the first row of A with each corresponding element of the first column of B and add the values. Similarly, to calculate the values of the second element of AB, we have to multiply the first row of A with the second column of B and so on. If we repeat this procedure on the second row of matrix A and multiply it with corresponding columns of matrix B, and we proceed onto the third row of matrix A, we find all elements of the product matrix. At the end, we only have to multiply the matrix with the vector V. The result of this calculation is the linear combination of the columns of the matrix AB with the coordinates X, Y, and Z as the scalars.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Linear Algebra](../../Skills/Artificial%20Intelligence%20(AI)/Linear%20Algebra.md) (1)
> **CLI Commands:** find (2)
> **Analogies:** imagine (1)
> **Speakers:** - we (1)


### 5. Gaussian Elimination

[↑ Back to Table of Contents](#table-of-contents)

#### [Solving linear equations using Gaussian elimination](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/solving-linear-equations-using-gaussian-elimination?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/solving-linear-equations-using-gaussian-elimination?u=76281980&t=0)** - [Instructor] Solving linear equations manually becomes tedious each time there are three or more equations. In the 1800s, a brilliant German mathematician called Karl Gauss invented the method that is used for solving a system of linear equations, and in his honor, that method is called Gaussian elimination. It involves concatenating the matrix A and vector B into a form called an augmented matrix, and then performing a series of elementary row operations on the augmented matrix in a particular order. At the end, we will have three possible situations. Get the solution of the system, the system won't have a solution, or the system will have an infinite number of solutions. To create an augmented matrix, we will take the regional matrix A and combine it with the constant vector B. Let's see it in the following example. The vertical line between the matrix indicates the separation between A and B. Now, we will directly apply one or more row operations on the augmented matrix. For the row operations, you can do any automatic operation, add, subtract, multiply, or divide one of the rows with another row. We can break Gaussian elimination into five steps. First, converting system to matrix vector equation. Second, augment the coefficient matrix
>
> **[1:33](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/solving-linear-equations-using-gaussian-elimination?u=76281980&t=93)** with the vector of constants. Third, create a matrix with ones on diagonals. Fourth, mapping the matrix back to equations. And fifth, substitution to solve for variables. The first step begins by creating a coefficient matrix. Each row in the coefficient matrix will represent an equation, and column values will represent coefficient values for each variable. Now, we can move to the second step where we create a constant matrix. It is a column matrix, and each value will represent the solution of the equation. By combining the coefficient matrix and constant matrix, we form an augmented matrix. The third step is called a pivoting step. We want to ensure that we have a non-zero entry in the diagonal position. So if necessary, we will swap this row with one of the lower rows that has a non-zero entry in the same column. We call the element that we are swapping the pivot element. Here are the simple rules that we can follow. Any two rows may be interchanged. Each row can be multiplied or divided by a nonzero constant. A nonzero multiple of one row can be added or subtracted from another row. Swapping two rows to move the pivot element into place is known as partial pivoting. In case no pivot element can be found, then there is no single solution, and we are bored. Then we set the column elements below the diagonal entry
>
> **[3:07](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/solving-linear-equations-using-gaussian-elimination?u=76281980&t=187)** to zero by adding appropriate multiples of the current row After, we move onto the next row and look at the diagonal entry. At the end of this process, we say that our matrix is in echelon form. In our case, after transformation, our final matrix has three zeros in the third row. So, we have eliminated the third row. Next, in the fourth step, we can map the matrix back to the equation. Finally, in the last fifth step, from the second row, we get x2 equals minus 0.2x3, and when we substitute x2 into the first equation, we get x1 expressed using x3. Our system has infinitely many solutions because we can freely pick variable x3 from the set of real numbers.

> [!info]- Semantic Content
>
> **Definitions:** is called (2), is a  (1), known as (1)
> **Cross-References:** in the last (1)
> **Speakers:** - [instructor] (1)

#### [Gaussian elimination and finding the inverse matrix](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/gaussian-elimination-and-finding-the-inverse-matrix?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/gaussian-elimination-and-finding-the-inverse-matrix?u=76281980&t=0)** - [Instructor] Linear equations can be solved in a few different ways. Two of the most applied techniques are elimination method and substitution method. However, in [Linear Algebra](../../Skills/Artificial%20Intelligence%20(AI)/Linear%20Algebra.md), we have a different technique using matrix inversion. It is a convenient method for solving a system of linear equations. In mathematics, the concept of inversion is well known starting from real numbers. A real number a is set to have an inverse if there exist a number b such that a multiply with b equals 1. Any nonzero number a has an inverse b. The nice thing is that we can generalize the concept on inverses to matrices. Inverse of matrix A is denoted as A to the power of minus 1, where minus 1 is a super script. If we multiply inverse of the matrix with the original matrix, we get, as a result, identity matrix. By definition, a matrix B such that A multiplied with B equals B multiplied with 1 equals I is called an inverse of the matrix A. So, if matrix A is invertible, and we want to solve the system Ax equals B, then for any vector B, the system has an unique solution x equals A to the power of minus 1 B, that we can get by multiplying both sides of an equation on the left by the matrix A to the power
>
> **[1:34](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/gaussian-elimination-and-finding-the-inverse-matrix?u=76281980&t=94)** of minus 1. Let's head onto our Jupyter notebook, and see it as a hands-on example. We have already imported numpy as np, and now we are going to create a two-by-two matrix A, that has elements 1, 2, 3, and 4. Next, we are going to use a built-in function called inv from the linalg numpy module. To calculate the inverse of matrix A, we are going to call it Ainv. So, we have just passed our matrix A into the inverse function, and when we run our code, we see the displayed inverse of matrix A. We are going to define b as a vector that has elements 5 and 11. Finally, to get result x, we have to perform matrix multiplication with our inverse matrix A and vector b. To do that, we are going to use the dot method. When we run our code, we see we have solved for x, and our result is vector x with elements 1 and 2. The cool thing with solving systems of linear equations is that we can easily check our result. In our case, by multiplying matrix A with our result vector x. Let's do this by typing np.dot A, x. When we run the code, we get the same vector as vector b. So, we got the correct result.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Linear Algebra](../../Skills/Artificial%20Intelligence%20(AI)/Linear%20Algebra.md) (1)
> **Definitions:** is a  (2), is called (1)
> **Tools:** jupyter (1)
> **Speakers:** - [instructor] (1)

#### [Inverse and determinant](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/inverse-and-determinant?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/inverse-and-determinant?u=76281980&t=0)** - [Instructor] The determinant of a matrix is a scalar that has a few important characteristics. It enables us to map a square matrix to a scalar and allows us to determine if a matrix can be inverted. We can denote a determinant for a matrix A as detA. There are two important properties for a determinate. In the case when determinate A equals zero, this means the inverse matrix cannot be computed, since the inverse matrix of matrix A would be calculated as 1 divided by detA, meaning we would have to divide 1 by 0. And we cannot divide 1 by 0. In this special case, matrix A is singular, meaning it contains only linearly-dependent columns. To calculate a determinant for a two-by-two matrix, we have to memorize a simple formula. If our matrix A has elements a, b, c, and d, then formula to calculate a determinant for matrix A is determinant of A equals a multiplied with d minus b multiplied with c. Let's explore a simple example and learn how to calculate a determinant of a matrix A. Our matrix A has the following elements: 1, 2, 3, and 4. We can calculate the determinant of a matrix A by plugging values into above formula. We get determinant of A
>
> **[1:33](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/inverse-and-determinant?u=76281980&t=93)** equals 1 multiplied with 4 minus 2 multiplied by 3, equals 4 - 6, equals -2. Next, let's head on to Jupyter Notebook and learn how to calculate the same determinant using NumPy building function. We have already imported NumPy as np. We are going to create a matrix A with elements 1, 2, 3, and 4. To calculate a determinant of a matrix A, we'll call the Det function from the linalg module by typing np.linalg.detA. We see we got the same result except a rounding error. What would happen in case when we have a singular matrix with linearly-dependent columns? For example, let's calculate the determinant of a matrix B that has elements 3, 1, 6, and 2. Its determinant would be 3 multiplied 2 minus 1 multiplied by 6 equals 0. By typing np.linalg.detB, we get 0. Let's try to invert the matrix by calling Inv function. When we run the code, you see we got a singular matrix error, meaning we cannot calculate the inverse of a singular matrix.

> [!info]- Semantic Content
>
> **Code Identifiers:** deta (3), detb (1)
> **Tools:** jupyter (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 6. Matrices from Orthogonality to Gram–Schmidt Process

[↑ Back to Table of Contents](#table-of-contents)

#### [Matrices changing basis](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/matrices-changing-basis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/matrices-changing-basis?u=76281980&t=0)** - [Instructor] Sometimes, we want to express vectors in a different basis. It is useful in many types of matrix computations. A change of basis matrix is a matrix that translates vector representations from one basis, such as the standard coordinate system, to another basis. It allows us to perform transforms in the case when the new basis vectors are not orthogonal to each other. Let's see what it means in a simple example. Our coordinate system consists of the basis vectors e1 that is equal to 1,0 and e2 that is equal to 0,1. Imagine we define an alternative vector space, with basis vectors f1 that is equal to 1,3 and f2 that is equal to 2,1, and we have a vector a, 1,1, that is represented in coordinates of that vector space. When we construct the matrix of the new basis vectors f1 and f2 and multiply it with our vector 1,1, we get the vector 3,4 as a result. We will call a matrix constructed of new basis vectors f1 and f2 transformation matrix A. It represents the change of basis from the alternative vector space to standard vector space. Now, you may wonder how to do reverse transformation from alternative vector space to the standard coordinate system. To achieve this,
>
> **[1:33](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/matrices-changing-basis?u=76281980&t=93)** we have to find the inverse of the transformation matrix. For a two-by-two matrix A, there is a simple formula to calculate A-inverted. When we plug in the numbers, we get -1/5 multiplied with the matrix that has elements 1, -2, -3, and 1. And when we do scalar matrix multiplication, we get our new transformational matrix, A-inverted. We can check our result by multiplying matrix A with matrix A-inverted. And as you can see, we get the identity matrix, as expected.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2)
> **Analogies:** such as (1), imagine (1)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### [Transforming to the new basis](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/transforming-to-the-new-basis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/transforming-to-the-new-basis?u=76281980&t=0)** - [Instructor] We have explored matrix transformation in a simple example. Let's look at the fundamentals and rules behind it. Matrix transformations are a special class of functions that arise from matrix multiplication. In mathematics, we define an ordered n-tuple as a sequence of n real numbers and a solution of a linear system in n unknowns that can be written as x1 = s1, x2 = s2 until xn = sn. It can be expressed as an ordered n-tuple, s1, s2, until sn. We do know the set of all ordered n-tuples of real numbers with a bold capital letter R and superscript n. The elements for Rn are called vectors. Standard basis vectors are denoted as e1, e2, until en. All other vectors in Rn can be written in exactly one way is a linear combination of basis vectors. So if you have a vector x, it can be written as x = x1e1 + x2e2 + xnen.
>
> **[1:19](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/transforming-to-the-new-basis?u=76281980&t=79)** As matrix transformation is a special class of function, we usually use the letter T to denote it. We can write matrix transformation from Rn to Rm as. If we think about matrix transformations that arise from linear systems, we can write them as y = Ax. So matrix transformation maps a vector x in Rn into the vector y in Rm by multiplying x with A. We can write it down as y = Ta of x. We have learned how to transform a vector b to any basis as long as we have the basis vectors of a new vector space. We can follow these three steps. Transform the vector b to our standard coordinate system using the appropriate transformation matrix A that results in b prime, Ab = b prime. Perform a custom transform on b prime. Let's say we have a transformation represented by the matrix R in the standard coordinate system giving us a rotated vector c prime, Rb prime = c prime. Transform c prime back to the alternate coordinate system using the inverse of A that will result in the vector c. Vector c is a transformation of the vector b in the alternative coordinate system.

> [!info]- Semantic Content
>
> **Definitions:** is a  (3)
> **CLI Commands:** rm (2)
> **Speakers:** - [instructor] (1)

#### [Orthogonal matrix](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/orthogonal-matrix?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/orthogonal-matrix?u=76281980&t=0)** - [Instructor] When we explored standard basis vectors, we haven't mentioned they're orthonormal. Meaning, they're orthogonal to each other. This means they're at the right angles to each other. So their dot product is zero, and they also have a unit norm. Let's see them in our coordinate system. We can represent them as vector e1, 1,0, and e2, 0,1. Now, you'll probably be thinking about the connection between orthonormal vectors and orthogonal matrices. Orthogonal matrix is usually denoted with Q. Orthonormal vectors make up all of the rows and all of the columns of the orthogonal matrix. To understand the valuable property of this kind of matrix, we first need to understand what it means to calculate the transpose of a matrix. A transpose of the matrix is a flipped version of the original matrix. Meaning, we just have to switch rows and columns to get transpose. It is denoted as the capital A with superscript t. For example, if I have a matrix A with elements 1, 2, 3, 4, 5, 6, 7, 8, and 9, then the transpose of A is a matrix At with elements 1, 4, 7, 2, 5, 8, 3, 6, and 9. The cool thing about a transpose matrix is that the elements of the diagonal stay the same. An important property of the orthogonal matrices is when we multiply A-transpose with A,
>
> **[1:36](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/orthogonal-matrix?u=76281980&t=96)** it is equal to the A multiplied with A-transposed, and they are both equal to the identity matrix. This is unique. As we have previously learned, we have to multiply matrix A with its inverse matrix to get the identity matrix. We can now conclude that A-transpose is equal to A-inverse. A useful thing to know is that when we calculate orthogonal matrices, we save computational time, since it's time-saving instead of using inverse matrices.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Gram–Schmidt process](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/gram-schmidt-process?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/gram-schmidt-process?u=76281980&t=0)** - Let's understand the concept of Gram-Schmidt process that we can use to transform any basis to orthogonal basis. It is much simpler to perform calculations in orthogonal basis. We'll look at the process in general before heading into the first example. Our matrix contains a few columns. In our case, imagine we have a matrix with five columns. When we apply Gram-Schmidt to the first column, our first column stays the same. Then we take the second column and orthogonalize it relative to the first column. We apply the same process to the third column relative to the second column and to the first column. It means we subtract two parts. Part of the column that is parallel to the column two and part of the column that is parallel to the column one. We repeat the process until the last column. At the end, we get a matrix in which all the columns are orthogonal, but this matrix is not an orthogonal matrix due to the fact not all the columns have unit length. In the next step, we have to normalize each column. We can achieve that by scaling each column vector by one over its magnitude. After we finish this procedure for each of the vectors, we'll finally get an orthogonal matrix that has all the column pairwise orthogonal and they are all unit length. Now let's see what our formulas look like? Suppose B equals U1, U2, U3, is the basis for R3.
>
> **[1:37](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/gram-schmidt-process?u=76281980&t=97)** Then the set B prime equals V1, V2, V3, is an orthogonal basis for R3. Let's work through a simple example. Here is a matrix A that has the following values. First column U1 has element one, one, one. Second column U2 has values one, two, two. And third column U3 has values one, one, and zero. And it is a basis for R3. Let's plug in the values in our formulas. V1 is easy to get since it's the same as U1. So we get V1 equals one, one, one. Great, let's head onto V2, V2 is equal two. And lastly, when we plug values for U3, V1 and V3 in our formula for V3, we get for V3. So our set B prime is an orthogonal basis for R3. At the end, we just need to normalize each vector in B prime by calculating the norms for V1, V2, and V3 By dividing each vector with its norm, we get an orthonormal basis for R3

> [!info]- Semantic Content
>
> **Definitions:** is an  (2), is a  (2)
> **Cross-References:** in the next (1)
> **Analogies:** imagine (1)
> **Speakers:** - let (1)


### 7. Eigenvalues and Eigenvectors

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to eigenvalues and eigenvectors](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/introduction-to-eigenvalues-and-eigenvectors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/introduction-to-eigenvalues-and-eigenvectors?u=76281980&t=0)** - [Instructor] Eigenvalues and eigenvectors are the heart of eigendecomposition. That is often called eigenvalue decomposition or eigenvector decomposition. It is only defined for square matrices, and its goal is to extract pairs of eigenvalues and eigenvectors. Each eigenvalue has an associated eigenvector. Previously, we have learned that if you apply some type of transformation on an input vector, we'll get an output vector. We can write it down as A multiplied by v equals w, where A is a transformation matrix, v as an input vector, and w is the output vector. If you look at graphical representation of this equation, we can imagine that output vector w is a scaled representation of input vector v. Then we can write our equation as lambda multiplied by v equals w. Because our two equations A multiplied by v equals w and lambda multiplied by v equals w are equivalent, we can write them as a single equation. Lambda multiplied by v equals A multiplied by v. We can interpret that transformation matrix A is behaving like a single number, a scalar. Interesting thing to notice is that matrix A could have 1,000s and 1,000s of elements, but when multiplied with vector v, it behaves like a single number. In cases when this equation is true,
>
> **[1:32](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/introduction-to-eigenvalues-and-eigenvectors?u=76281980&t=92)** lambda is called an eigenvalue of the matrix, and vector v is called the associated eigenvector of the matrix A. Eigenvalues and eigenvectors are defined as following. Let A be an n by n matrix. A number lambda is said to be an eigenvalue of A if there exists a nonzero solution vector K of the linear system AK equals lambda K. The solution vector K is said to be an eigenvector corresponding to the eigenvalue lambda. Eigenvalues and eigenvectors are also called characteristic values and characteristic vectors, respectively. Eigenvalues and eigenvectors make ML learning models easier to train because of the reduction of the information. We can also use them to understand the correlations among data. Other examples of applications are in the recommendation systems or financial risk analysis. Learning how to calculate them will be extremely valuable.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2), is called (2), defined as (1)
> **CLI Commands:** make (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### [Calculating eigenvalues and eigenvectors](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/calculating-eigenvalues-and-eigenvectors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/calculating-eigenvalues-and-eigenvectors?u=76281980&t=0)** - [Instructor] In the complex world of [Linear Algebra](../../Skills/Artificial%20Intelligence%20(AI)/Linear%20Algebra.md), sometimes we discover simple, straight-away techniques that help us solve equations. One of those equations is A multiplied by v equals lambda multiplied by v. This says if we multiply matrix A with some vector v, it is the same as multiplying vector v by some scalar lambda. In case this equation is true, we call we vector v eigenvector and scalar lambda associated eigenvalue of matrix A. We can provide this equation as A multiplied by v minus lambda multiplied by v equals zero. Meaning, if we subtract lambda v from Av, we get a zero vector. Finally, we can write this equation as A minus lambda I multiplied by v equals zero, where I is an identity matrix. At the end, determinant of A minus lambda I will be equal to zero. Let's see how to calculate eigenvalues and eigenvectors in the following example. We have a two-by-two matrix A that has elements 3, 4, minus 1, and 7. First step we have to make is to shift this matrix by lambda multiplied with the identity matrix. We can write this down as A minus lambda I equals zero, and calculate the values. Next step is to set the determinant of A minus lambda I equal to zero.
>
> **[1:35](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/calculating-eigenvalues-and-eigenvectors?u=76281980&t=95)** When we simplify our equation, we get 3 minus lambda times 7 minus lambda plus 4 equals 0. After multiplying the brackets and simplifying, we get the quadratic equation, lambda minus 5 squared equals 0. That gives us solutions and roots of our equations, lambda1 equals lambda2 equals 5. These are our eigenvalues. To get the eigenvectors, we have to go back to our system A minus lambda I equals 0. That is, in our case, equal to A minus 5I equals 0, and after simplifying, we have a matrix with elements minus 2, 4, minus 1, and 2 equals 0. It is equivalent to the systems of equations. From this system, we get the solution K1 equals 2K2, and if we choose K2 equals 2, then we get a single eigenvector K1 with elements 4 and 2. Since we could choose different integers, and plug them instead of K2, in that case, we would get different eigenvectors and solutions. Understanding and knowing how eigenvector and eigenvalues are calculated is important in the future extraction techniques. One of them is principle component analysis, or PSA, which is an algorithm used to reduce dimensionality while training a machine learning model.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Linear Algebra](../../Skills/Artificial%20Intelligence%20(AI)/Linear%20Algebra.md) (1)
> **Definitions:** is an  (2), is a  (1)
> **CLI Commands:** make (1)
> **Env Vars:** psa (1)
> **Speakers:** - [instructor] (1)

#### [Changing to the eigenbasis](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/changing-to-the-eigenbasis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/changing-to-the-eigenbasis?u=76281980&t=0)** - [Instructor] There are many applications in which we have to calculate high powers of square matrix A. What it basically means is that we have to apply the same matrix multiplication many times. We will explore that the most efficient way to calculate A to the power of n, especially for the larger values of n, is to first diagonalize A. Diagonalizing a matrix involves finding its eigenvalues and eigenvectors, and we have to find out how these values are related to those of A to the power of n. Let's Look at a simple example. We have a transformation matrix T that will represent rotation and shift of a vector v. We get the result of applying the transformation T on a vector v by multiplying the T with v, and we get a new vector, and let's call it v1. If we apply the transformation T on the vector v1, we get a new vector v2. We can conclude that this is equal to multiplying the transformation T twice with vector v. So, we can write this down as v2 is equal to T squared multiplied with v. In case when we would like to calculate the position of the final vector vn after n steps, then we could write vn equals T to the power of n times v. Imagine we have to calculate the position of the final vector v after 1,000 steps,
>
> **[1:35](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/changing-to-the-eigenbasis?u=76281980&t=95)** or even after 100s of 1,000s steps, these calculations would be troublesome and timely. If there's a way to transform matrix T into diagonal matrix, then this calculation would be easier and straightforward. When we have to multiply a diagonal matrix by itself, all you have to do is multiply the diagonal elements by themselves, meaning you just have to square each diagonal element. In the case when we have to calculate the nth power of a diagonal matrix, we only have to raise each of the elements of the diagonal to the power of n. In order to create an eigenbasis conversion matrix, we have to plug in each of the eigenvectors as columns. There is a theorem that says if n is a positive integer, lambda is an eigenvalue of a matrix, and x is a correspondent eigenvector, then lambda to the power of n is an eigenvalue of T to the power of n, and x is a corresponding eigenvector. Our problem of computing T to the power of n can be simplified to the following. C is our eigenbasis conversion matrix. D is diagonal matrix. So, we can write down our matrix T as T equals matrix C multiplied with diagonal matrix D multiplied with C-inverse. To calculate matrix T squared, we have to multiply C D C-inverse again with itself. In the middle, we have C-inverse multiplied with C,
>
> **[3:12](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/changing-to-the-eigenbasis?u=76281980&t=192)** which gives us an identity matrix. We know that when we multiply any matrix with an identity matrix, we get that matrix. Now, we have C multiplied with D again with D, and then with C-inverse. From which, we obtain the relationship T squared equals C multiplied with D squared multiplied with C-inverse. At the end, we can extract our formula for T raised to the power of n. T to the power of n will equal C multiplied with D to the power of n multiplied with C-inverse. And there you have it, you have mastered simple technique changing any basis to the eigenbasis.

> [!info]- Semantic Content
>
> **Definitions:** is a  (4), is an  (2), basically means (1)
> **CLI Commands:** find (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### [Google PageRank algorithm](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/google-pagerank-algorithm?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/google-pagerank-algorithm?u=76281980&t=0)** - [Instructor] PageRank is the core of the [Google](../../Glossary/Service/Google.md) search engine algorithm. It is synonymous for link popularity, link value, link equity, and authority. How does it work? According to Google, it counts the number and quality of the links to a page to determine how important the webpage is, the important it is. The more important a web page is, it is more likely to receive more links from other web pages. The most important part of the PageRank algorithm is to discover the best way to calculate the importance of each page that is returned by the query results. We have to calculate the [Probability](../../Skills/Data%20Science/Probability.md). This is a number from zero to one that can quantify the importance of a particular page. Google's PageRank system assigns a value called a PageRank to every page in its network of webpages. In the case a page has a high PageRank it will appear earlier in the search result. Each PageRank is calculated by the number of links that point to a given webpage and by the importance of the webpages that point to it. Consider the following figure. Let's assume that we are analyzing only five webpages in the network and name them with capital letters A, B, C, D, and E. Each webpage has links to other webpages shown here by arrows. Each link carries a fraction of the relevance
>
> **[1:34](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/google-pagerank-algorithm?u=76281980&t=94)** that the webpage carries. For example, for webpage C we have two outgoing links that take us to two other webpages, B and D. So webpage C with two outgoing links will give one half of its importance to each of the webpages it links to. For webpage A we have three outgoing links. So it'll give us one third of its importance to each of the webpages it links to. This can also be viewed as the probability of a user clicking on a given link if they are currently in a page containing that link. This network of links can be represented by stochastic or probability matrix where each element is the probability of a link on a given webpage, represented by its column, being selected and taking the user to another webpage represented by its row. So for our example, matrix A is connected to matrixes B, C, and D. So we got one third for each of them. And the other two values in the first column are zero since it's not connected with A and E. Matrix M represents what is the probability of ending up of each of the pages. To calculate a rank of any page we have to know the rank of all the pages. How do they link to a specific page and how many outgoing links are there altogether? For example, imagine we want to calculate the rank
>
> **[3:09](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/google-pagerank-algorithm?u=76281980&t=189)** of page A. The rank of A will be the sum of the ranks of all the pages which link to it, weighted by their specific link probability from matrix M. Let us denote by x1, x2, x3, x4, and x5, the importance of the five pages. Analyzing the situation at each node, we get the following system. We have to find the solution of the system of five linear equations. That can be done easily using eigenvalues and eigenvectors. Now you have a brief understanding of one of the most useful [Algorithms](../../Skills/Software%20Development/Algorithms.md) called the PageRank algorithm and the importance of eigenvalues and eigenvectors in its implementation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Probability](../../Skills/Data%20Science/Probability.md) (6), [Google](../../Glossary/Service/Google.md) (3), [Algorithms](../../Skills/Software%20Development/Algorithms.md) (1)
> **Analogies:** for example (2), imagine (1)
> **CLI Commands:** node (1), find (1)
> **Cross-References:** earlier in (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-foundations-linear-algebra/next-steps?u=76281980&t=0)** - [Terezija] I hope you enjoyed the course and now have a solid foundation of [Linear Algebra](../../Skills/Artificial%20Intelligence%20(AI)/Linear%20Algebra.md) so you can continue your machine learning journey. A good next step would be to look in our library for more machine learning courses. I want to wrap up by saying thank you. You have devoted time to learning this material with me, and I want you to know that I don't take that for granted. I really do appreciate your engagement, as well as your feedback on this course. If you enjoyed this course, I'd love to know. If you have any questions, please feel free to get in touch over [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) and on Twitter. Until next time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Linear Algebra](../../Skills/Artificial%20Intelligence%20(AI)/Linear%20Algebra.md) (1), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **Speakers:** - [terezija] (1)


## Instructor

- [Terezija Semenski](../../Instructors/Artificial%20Intelligence%20(AI)/Terezija%20Semenski.md)

## Resources

- Exercise files available

## Skills Covered

- Machine Learning
- Linear Algebra
- Artificial Intelligence (AI)

## Path Context

### In [Machine Learning Statistical Foundations Professional Certificate by Wolfram Research](../../Paths/Artificial%20Intelligence%20(AI)/Professional%20Certificates/Machine%20Learning%20Statistical%20Foundations%20Professional%20Certificate%20by%20Wolfram%20Research.md)
← [Artificial Intelligence Foundations- Machine Learning](Artificial%20Intelligence%20Foundations-%20Machine%20Learning.md) | **2 of 6** | [Machine Learning Foundations- Calculus](Machine%20Learning%20Foundations-%20Calculus.md) →

### In [Foundational Math for Machine Learning](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Foundational%20Math%20for%20Machine%20Learning.md)
**1 of 4** | [Machine Learning Foundations- Calculus](Machine%20Learning%20Foundations-%20Calculus.md) →

### In [Getting Started with AI and Machine Learning](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Getting%20Started%20with%20AI%20and%20Machine%20Learning.md)
← [Artificial Intelligence Foundations Thinking Machines](Artificial%20Intelligence%20Foundations%20Thinking%20Machines.md) | **2 of 7** | [Deep Learning Getting Started](Deep%20Learning%20Getting%20Started.md) →

## Part of

- [Machine Learning Statistical Foundations Professional Certificate by Wolfram Research](../../Paths/Artificial%20Intelligence%20(AI)/Professional%20Certificates/Machine%20Learning%20Statistical%20Foundations%20Professional%20Certificate%20by%20Wolfram%20Research.md)

## Appears In

- [Machine Learning Statistical Foundations Professional Certificate by Wolfram Research](../../Paths/Artificial%20Intelligence%20(AI)/Professional%20Certificates/Machine%20Learning%20Statistical%20Foundations%20Professional%20Certificate%20by%20Wolfram%20Research.md)
- [Foundational Math for Machine Learning](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Foundational%20Math%20for%20Machine%20Learning.md)
- [Getting Started with AI and Machine Learning](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Getting%20Started%20with%20AI%20and%20Machine%20Learning.md)

## Related Courses

_Courses sharing skills:_

- [Machine Learning and AI Foundations- Clustering and Association](Machine%20Learning%20and%20AI%20Foundations-%20Clustering%20and%20Association.md) — Artificial Intelligence (AI), Machine Learning
- [Machine Learning and AI- Advanced Decision Trees with SPSS](Machine%20Learning%20and%20AI-%20Advanced%20Decision%20Trees%20with%20SPSS.md) — Artificial Intelligence (AI), Machine Learning
- [Machine Learning and AI Foundations- Decision Trees with SPSS](Machine%20Learning%20and%20AI%20Foundations-%20Decision%20Trees%20with%20SPSS.md) — Artificial Intelligence (AI), Machine Learning
- [Machine Learning and AI Foundations- Classification Modeling](../Data%20Science/Machine%20Learning%20and%20AI%20Foundations-%20Classification%20Modeling.md) — Artificial Intelligence (AI), Machine Learning
- [Machine Learning & AI Foundations- Linear Regression](Machine%20Learning%20%26%20AI%20Foundations-%20Linear%20Regression.md) — Artificial Intelligence (AI), Machine Learning

---

[↑ Back to top](#)