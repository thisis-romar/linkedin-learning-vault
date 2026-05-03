---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: machine-learning-with-python-k-means-clustering
url: "https://www.linkedin.com/learning/machine-learning-with-python-k-means-clustering"
duration_minutes: 50
duration: 50m
level: Intermediate
updated: 5/1/2024
learners: 207068
skills:
  - Python (Programming Language)
  - k-means clustering
  - Machine Learning
  - Artificial Intelligence (AI)
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQGH07r67CLOiQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1652979675463?e=2147483647&amp;v=beta&amp;t=F3IjHeP1B9zaL8QIy6ig2lD-dGKwEhEmy-J03L_WEdY"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Develop with Python for AI and Machine Learning]]'
  - '[[Advance Your Skills as a Machine Learning Specialist]]'
  - '[[Machine Learning with Python Professional Certificate by Anaconda]]'
prev_courses:
  - '[[Machine Learning with Python- Logistic Regression]]'
  - '[[Machine Learning with Python- Decision Trees]]'
  - '[[Machine Learning with Python- Logistic Regression]]'
next_courses:
  - '[[Machine Learning with Python- Association Rules]]'
  - '[[Machine Learning with Python- Association Rules]]'
  - '[[Processing Text with Python Essential Training]]'
path_nav: '[{"path":"Develop with Python for AI and Machine Learning","position":4,"total":6,"prev":"Machine Learning with Python- Logistic Regression","next":"Machine Learning with Python- Association Rules"},{"path":"Advance Your Skills as a Machine Learning Specialist","position":2,"total":9,"prev":"Machine Learning with Python- Decision Trees","next":"Machine Learning with Python- Association Rules"},{"path":"Machine Learning with Python Professional Certificate by Anaconda","position":5,"total":6,"prev":"Machine Learning with Python- Logistic Regression","next":"Processing Text with Python Essential Training"}]'
path_count: 3
tags:
  - course
  - topic/artificial-intelligence
  - topic/software-development
  - skill/python-programming-language
  - skill/k-means-clustering
  - skill/machine-learning
  - skill/artificial-intelligence-ai
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Machine%20Learning%20with%20Python-%20k-Means%20Clustering.md)

![Machine Learning with Python: k-Means Clustering](https://media.licdn.com/dms/image/v2/C4E0DAQGH07r67CLOiQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1652979675463?e=2147483647&amp;v=beta&amp;t=F3IjHeP1B9zaL8QIy6ig2lD-dGKwEhEmy-J03L_WEdY)

# Machine Learning with Python: k-Means Clustering

> Clustering—an unsupervised machine learning approach used to group data based on similarity—is used for work in network analysis, market segmentation, search results grouping, medical imaging, and anomaly detection. K-means clustering is one of the most popular and easy to use clustering algorithms. In this course, Fred Nwanganga gives you an introductory look at k-means clustering—how it works, w

> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-with-python-k-means-clustering) | 50m | Intermediate | 207K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (4 videos)
  - [Getting started with Python and k-means clustering](#getting-started-with-python-and-k-means-clustering)
  - [What you should know](#what-you-should-know)
  - [The tools you need](#the-tools-you-need)
  - [Using the exercise files](#using-the-exercise-files)
- [**1. Understanding K-Means Clustering**](#1-understanding-k-means-clustering) (4 videos)
  - [What is clustering?](#what-is-clustering)
  - [What is k-means clustering?](#what-is-k-means-clustering)
  - [Choosing the right number of clusters](#choosing-the-right-number-of-clusters)
  - [Why and when to use k-means clustering](#why-and-when-to-use-k-means-clustering)
- [**2. Segmenting Data with K-Means Clustering**](#2-segmenting-data-with-k-means-clustering) (4 videos)
  - [How to segment data with k-means clustering in Python](#how-to-segment-data-with-k-means-clustering-in-python)
  - [How to evaluate and visualize clusters in Python](#how-to-evaluate-and-visualize-clusters-in-python)
  - [How to find the right number of clusters in Python](#how-to-find-the-right-number-of-clusters-in-python)
  - [How to interpret the results of k-means clustering in Python](#how-to-interpret-the-results-of-k-means-clustering-in-python)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Getting started with Python and k-means clustering](https://www.linkedin.com/learning/machine-learning-with-python-k-means-clustering/getting-started-with-python-and-k-means-clustering?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-python-k-means-clustering/getting-started-with-python-and-k-means-clustering?u=76281980&t=0)** - [Fred] [[k-means clustering]] is one of the most popular and easy-to-use unsupervised machine learning approaches. Clustering is often used for market segmentation, social network analysis, search results grouping, medical imaging and anomaly detection. Hi, I'm Fred Nwanganga. I'm a data scientist, teacher and author with a passion for AI and machine learning. Welcome to Machine Learning with [[Python (Programming Language)|Python]]: k-Means Clustering. In this course, I introduce what k-Means Clustering is, how to choose the right number of clusters and the strengths and weaknesses of k-Means Clustering. Finally, I walk through the process of creating, visualizing, evaluating and interpreting clusters in Python. Let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[k-means clustering]] (4), [[Python (Programming Language)|Python]] (2)
> **CLI Commands:** python (2)
> **Speakers:** - [fred] (1)

#### [What you should know](https://www.linkedin.com/learning/machine-learning-with-python-k-means-clustering/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-python-k-means-clustering/what-you-should-know?u=76281980&t=0)** - [Instructor] Before we get started, let's go over some of the background knowledge that you should have in order to get the most out of this course. First, I assume that you have a fundamental understanding of what machine learning is, specifically unsupervised machine learning. If you don't, I recommend that you review my introductory [[LinkedIn]] learning course "[[Machine Learning with Python- Foundations]]." Second, it will be helpful if you have some entry level knowledge coding in [[Python (Programming Language)|Python]]. I will assume that you know how to import a Python package, refer to the attributes of an object, and call the methods of an object. Next, it will also be helpful if you have some familiarity with the [[Pandas (Software)|pandas]] and scikit-learn packages. If you don't, no worries, I will explain exactly what I'm doing when we do use these packages in the course. Finally, I do assume that you know how to use the Jupyter Notebook interactive Python environment. Specifically, I assume that you know how to create a code cell, as well as how to edit and run code within a code cell.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (4), [[LinkedIn]] (1), [[Pandas (Software)|Pandas]] (1)
> **CLI Commands:** python (4)
> **Tools:** jupyter (1)
> **Speakers:** - [instructor] (1)

#### [The tools you need](https://www.linkedin.com/learning/machine-learning-with-python-k-means-clustering/the-tools-you-need?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-python-k-means-clustering/the-tools-you-need?u=76281980&t=0)** - [Instructor] Before working through the exercises in this course, I want to make sure that you have the tools you need to be successful. The first thing you want to make sure to do is install or verify that you have the latest version of [[Python (Programming Language)|Python]] Three. I will be working in Python 3.8. So if you have the latest version of Python Three, you should be able to run my code. However, if you're still on Python Two, you may run into some difficulty. I will be running my code in Jupyter Notebooks. The Jupyter Notebook is a great platform for combining live code, descriptive text about the code, visualizations and equations in one simple to use interface. Luckily, everything you need, which includes the latest version of Python Three and the Jupyter Notebooks environment, is available by installing Anaconda. Anaconda is a package manager, an environment manager, a Python distribution and a collection of over 7,500 open source packages. It is free and easy to install and it offers free community support. You can install Anaconda by going to the address provided here.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (6)
> **CLI Commands:** python (6), make (2)
> **Tools:** jupyter (3), anaconda (3)
> **Prerequisites:** install (3)
> **Definitions:** is a  (2)
> **Versions:** python 3 (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)

#### [Using the exercise files](https://www.linkedin.com/learning/machine-learning-with-python-k-means-clustering/using-the-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-python-k-means-clustering/using-the-exercise-files?u=76281980&t=0)** - [Instructor] The exercise files you need for this course will be provided to you. This means that you can follow along with any of the code examples in the lessons. I recommend that you do so. The best way to become proficient in segmenting data with [[k-means clustering]] in [[Python (Programming Language)|Python]] is to practice doing it yourself. The exercise files are organized into folders that correspond with the chapters of the course. Within each folder are data files and two notebooks for each of the code lessons. Let's take a look at an example. Here we see that folder 0 2 has a data file called mallcustomers. It also has two notebooks for the chapter two lesson videos. The 02b notebook is the beginning notebook. This is a notebook you should code in when following along with the lesson videos. The 02e notebook is the ending notebook. It is a completed version of the beginning notebook for your reference. There are several ways to launch a notebook. One approach is to launch the Anaconda Navigator. Click on Launch Jupyter Notebook, then navigate through the notebook you want and launch it. Let's do this together. We start by launching the Anaconda Navigator. This may take a little while to load depending on how fast your system is. Once this is done, we click on Launch Jupyter Notebook. Then we go to the folder
>
> **[1:35](https://www.linkedin.com/learning/machine-learning-with-python-k-means-clustering/using-the-exercise-files?u=76281980&t=95)** where the exercise files are and we can now open up a notebook.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[k-means clustering]] (1), [[Python (Programming Language)|Python]] (1)
> **Tools:** anaconda (2), jupyter (2)
> **UI Navigation:** click on (2), go to (1)
> **Exercise Files:** exercise files (3)
> **Definitions:** is a  (2), means that (1)
> **CLI Commands:** python (1)
> **Speakers:** - [instructor] (1)


### 1. Understanding K-Means Clustering

[↑ Back to Table of Contents](#table-of-contents)

#### [What is clustering?](https://www.linkedin.com/learning/machine-learning-with-python-k-means-clustering/what-is-clustering?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-python-k-means-clustering/what-is-clustering?u=76281980&t=0)** - [Instructor] Clustering is an approach in machine learning that is used to categorize or segment data into subgroups based on similarity. These subgroups are known as clusters. Clustering is an unsupervised machine learning approach. This means that we use clustering when working with previously unlabeled data. There are two primary goals to clustering. The first is to ensure that the items within a particular cluster are as similar as possible. This is known as high-intraclass similarity. The second goal to clustering is to make sure the items within one cluster are as different as possible from items in another cluster. This is known as low-interclass similarity. Clustering is a widely used machine learning approach. It is sometimes used in the domain of [[Network Security]] as a way to detect anomalous behavior in computer networks. Clustering is also sometimes used to automatically group or categorize documents based on similarity. Another common use of clustering is to segment customers for marketing purposes. To illustrate this use case, let's assume that we work for a small credit union and that we have the data shown here for each of our card customers. Our objective with this data could be to group or segment these customers based on spending score and income level. Using a scale of low to high for both variables, we can represent the data this way in 2 dimensional space.
>
> **[1:35](https://www.linkedin.com/learning/machine-learning-with-python-k-means-clustering/what-is-clustering?u=76281980&t=95)** A clustering algorithm could then assign each customer to a group based on how similar they are to other customers. In this example, the algorithm assigned each customer to one of three clusters. This means that customers that end up in the same cluster are very similar in terms of their income and spending habits. These clusters have no intrinsic meaning other than that they represent closely related customers. It is up to us to assign contextual labels to each of the clusters. For example, we could decide to assign the labels alpha, beta, and theta, three clusters. By doing this, we are implicitly assigning labels to every item within each cluster. Because of our ability to apply labels to previously unlabel data in this way, clustering is also sometimes referred to as unsupervised classification. There are several approaches to clustering each with its own strengths and weaknesses. The type of clustering one chooses to use is often dependent on the characteristics of the data and the type of clusters needed. Clustering can be hierarchical. With hierarchical clustering, clusters are nested within each other. This means that the boundaries of a particular cluster can fall within the boundaries of another cluster creating a parent/child relationship. This nested structure between clusters creates a hierarchy that is often represented in the form of a cluster tree known as a dendrogram.
>
> **[3:09](https://www.linkedin.com/learning/machine-learning-with-python-k-means-clustering/what-is-clustering?u=76281980&t=189)** Clustering can be partitional. With partitional clustering, each cluster boundary is independent of the others. There is no hierarchy between clusters. Partitional clustering divides data objects into non overlapping groups. In other words, no object can be a member of more than one cluster, and every cluster must have at least one object. Clustering can also be overlapping. As the name implies an overlapping cluster is one where the boundaries of one cluster can overlap with those of other clusters. This means that each item in the dataset can belong to one or more clusters. Overlapping clustering differs from the hierical clustering approach in that with hierical clustering there is a parent-child relationship between clusters. The boundaries of a child cluster must always be within the boundaries of the parent cluster. There is no parent-child relationship with overlapping clustering. Another approach to clustering is fuzzy or soft clustering. With soft clustering, the membership of an item to a particular cluster is specified based on the membership weight that goes between 0 and 1. The larger the weight, the greater the likelihood that the item belongs to a particular cluster. If the weight is 0, then the item absolutely does not belong to the cluster. If the weight is one, then the item absolutely does belong to the cluster in question. Clustering can also be density based.
>
> **[4:43](https://www.linkedin.com/learning/machine-learning-with-python-k-means-clustering/what-is-clustering?u=76281980&t=283)** Density based clustering determines cluster assignments based on the density of data points in a region. Clusters are assigned where there are high densities of data points separated by low density regions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Network Security]] (1)
> **Definitions:** known as (4), means that (4), is an  (2), is a  (2), in other words (1)
> **CLI Commands:** make (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [What is k-means clustering?](https://www.linkedin.com/learning/machine-learning-with-python-k-means-clustering/what-is-k-means-clustering?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-python-k-means-clustering/what-is-k-means-clustering?u=76281980&t=0)** - [Instructor] One of the most commonly used clustering techniques is known as [[k-means clustering]]. K-Means clustering is a partitional clustering approach. This means that the cluster boundaries are independent of each other. Each item can only belong to one cluster and every item is assigned to a cluster. With K-Means clustering, we start by specifying how many clusters, K, we want. Then the algorithm uses a process known as expectation maximization to assign every item within the dataset to one and only one of K non overlapping clusters based on similarity. To illustrate how K-Means clustering works, let's imagine that we have a data set as represented here with 12 instances and two features, A and B. If our goal is to partition this data into three separate clusters, we set the value of K to three and let the K-Means clustering algorithm do the [[Representational State Transfer (REST)|rest]]. The first thing that the algorithm does is choose K random points in the feature space that serve as initial centers for the clusters. These initial centers are represented by points C1, C2, and C3 as shown here. Note that these initial centers are randomly chosen and do not have to be one of the points from the original data. After choosing the initial cluster centers, the algorithm then assigns each item to the center that is closest to it. This is the expectation phase
>
> **[1:34](https://www.linkedin.com/learning/machine-learning-with-python-k-means-clustering/what-is-k-means-clustering?u=76281980&t=94)** of the expectation maximization process. To determine the cluster center closest to a particular point, the K-Means algorithm calculates the Euclidean distance between each point and each of the three cluster centers. Euclidean distance is the straight line distance between the coordinates of two points in multidimensional space. The Euclidean distance between any two points, A and B, is as shown here. For example, given a data point with (X,Y) coordinates of (3,3) and a cluster center with (X,Y) coordinates of (4,2), the Euclidean distance between the data point and the cluster center is 1.414. Getting back to our illustration, with each item assigned to a cluster, the K-Means algorithm then proceeds to compute a new centroid for each cluster. This is the maximization phase of the expectation maximization process. The cluster centroid is the average position of the items within the cluster. The cluster centroid for any three points, A, B, and C is calculated as shown here. For example, given the three points in the red cluster with (X,Y) coordinates as shown, the cluster centroid is a point with (X,Y) coordinates of (2,5). Getting back to our illustration, after a new cluster or new cluster centers are calculated, the K-Means cluster algorithm reassigns each item
>
> **[3:09](https://www.linkedin.com/learning/machine-learning-with-python-k-means-clustering/what-is-k-means-clustering?u=76281980&t=189)** to the cluster of the centroid closest to it. This has effect of shifting some points from one cluster to another. As a process of expectation and maximization is repeated, the shape of the cluster evolves as cluster centroids shift and items are reassigned to new clusters. Eventually the clusters will achieve a state of convergence. This is a point when cluster centroids is no longer shift, which also means no item reassignments can occur. At this point, the process terminates and we get a final cluster assignment for each item in the data set.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[k-means clustering]] (5), [[Representational State Transfer (REST)|Rest]] (1)
> **Definitions:** is a  (3), means that (1)
> **Analogies:** for example (2), imagine (1)
> **Versions:** 1.414 (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Choosing the right number of clusters](https://www.linkedin.com/learning/machine-learning-with-python-k-means-clustering/choosing-the-right-number-of-clusters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-python-k-means-clustering/choosing-the-right-number-of-clusters?u=76281980&t=0)** - [Instructor] [[k-means clustering]] is a simple and straightforward clustering technique. However, as an unsupervised machine learning approach we cannot simply evaluate the accuracy of our clusters using an existing set of labels. There are no ground truth labels. This also means that we don't always know if the value we choose for K is the most appropriate value for the data we have. There are several common approaches to deal with the challenge of choosing the right K. One approach is to use a priori or domain knowledge. With this approach, we use our prior knowledge of the expected number of clusters to inform our choice of K. This could be based on existing business requirements or other known constraints. In the absence of prior knowledge, a simple rule of thumb can also be used to choose a value of K. One such rule is setting K to the square root of half the number of observations in the dataset. As you can imagine, this rule of thumb is limited in use to small data sets. For example, consider a dataset with 10,000 instances. Using this rule of thumb, means that we would set K to 70. That's a bit excessive. A more standard approach to choosing the value for K is with the use of one or more statistical approaches or measures such as the Elbow method, the average Silhouette method, and the Calinski-Harabasz Score. These measures or approaches provide us with some guidance
>
> **[1:34](https://www.linkedin.com/learning/machine-learning-with-python-k-means-clustering/choosing-the-right-number-of-clusters?u=76281980&t=94)** as to how many clusters are reasonable when segmenting items within a particular data set. We can think of them as a panel of judges. Each judge provides us with an independent assessment of how good our clusters are. In the remainder of this video, we will explore how each of these three judges approach their scoring. The basic approach to k-means clustering is that we decide on a value for K, then the algorithm uses a process of expectation maximization to assign every item in the data set into one of K none overlapping clusters based on similarity. The degree to which items within a cluster are similar or dissimilar can be quantified using a measure called the within-cluster sum of squares, WCSS. The WCSS of a cluster is the sum of the squared distances between the items in the cluster and the cluster centroid. For example, given the following three clusters with centers at A, B, and C, the total WCSS for this set of clusters is the sum of the squared distances between each item and the blue cluster, Ai and A, plus the sum of the squared distances between each item and the red cluster, Bi and B, plus the sum of the square distances between each item in the yellow cluster, Ci and C. The closer the items within a cluster are to the centroid,
>
> **[3:10](https://www.linkedin.com/learning/machine-learning-with-python-k-means-clustering/choosing-the-right-number-of-clusters?u=76281980&t=190)** the smaller the value for WCSS. As the value of K increases, the closer the items within each cluster become, and the smaller the total WCSS becomes. If we clustered the same data set with the value for K set to one, three, and 12, the total WCSS for K equal to one will be greater than the total WCSS for K equal to three. And the total WCSS for K equal to three will be greater than the total WCSS for K equal to 12. If we were to plot the total WCSS for clusters created based on the values for K from one to 10, for example, we would get a convex curve with a negative slope as shown here. At some point in the curve, a visible bend occurs that represents the point at which increasing the value for K no longer yields a significant reduction in WCSS. This point is known as the elbow, and the K value at this point is usually expected to be the appropriate number of clusters for the data set. This statistical approach is known as the Elbow method. The next statistical approach is the Average Silhouette method. The silhouette of an item is a measure of how closely the item is matched with other items within the same cluster,
>
> **[4:43](https://www.linkedin.com/learning/machine-learning-with-python-k-means-clustering/choosing-the-right-number-of-clusters?u=76281980&t=283)** and how loosely it is with items in neighboring clusters. The silhouette coefficient for a single item S is made up of two parts. The first is the average distance, As, between the item S and every other item within the same cluster, which is represented here as the line between the white circle and the blue circles. The second is the average distance, Bs, between the item S and every item in the next nearest cluster, which is represented here as a line between the white circle and the red circle. Note that in this example, the reds cluster only has one item. If it had more, Bs would be the average distance between the white circle and all red circles. The silhouette coefficient for the single item S is the difference between Bs and As divided by the larger of the two values. Silhouette values range from negative one to one. A silhouette value close to one implies that an item is in the right cluster, while a silhouette value close to negative one implies that it is in the wrong cluster. If we plot the average silhouette for all items in the data sets based on different values of K, we get a plot that looks like this. For any given K, if most items have a high silhouette value, then the average will be high,
>
> **[6:16](https://www.linkedin.com/learning/machine-learning-with-python-k-means-clustering/choosing-the-right-number-of-clusters?u=76281980&t=376)** and the clustering configuration is considered appropriate. However, if most items have a low silhouette value, then the average will also be low, and the clustering configuration is not optimal. This means that the K value corresponding to the highest average silhouette score represents the optimal number of clusters. The third statistical approach is the Calinski-Harabasz Score. Also known as the Variant Ratio Criterion, the Calinski-Harabasz Score is an adjusted ratio of the between-cluster sum of squares and the within-cluster sum of squares for a given K. The between-cluster sum of squares, BCSS, is a sum of the squared distances between the centroids of each cluster and the mean of the centroids. In the example shown here, the mean of the centroids A, B, and C is D. The Calinski-Harabasz Score for a given K is a ratio of BCSS to WCSS times the ratio of N minus K, and K minus one, where N is the number of items in the dataset and K is the number of clusters. The higher the score, the more dense and well separated the clusters are. If we plot the Calinski-Harabasz Score for all items in the dataset based on different values of K, we get a plot that looks like this.
>
> **[7:51](https://www.linkedin.com/learning/machine-learning-with-python-k-means-clustering/choosing-the-right-number-of-clusters?u=76281980&t=471)** The optimal value for K is that which corresponds to either the highest score or the first abrupt elbow in the chart. It's important to note that the three statistical approaches we introduced here simply provide us with suggested values for K. The most important thing to consider when choosing a value for K is really how reasonable the results and the final clusters are to you. This is typical when using one of the many approaches to unsupervised machine learning. There is no external supervisor to rely on to provide you with a definitive and independent assessment of the performance of your model. You have the final [[Microsoft Word|word]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[k-means clustering]] (2), [[Microsoft Word|Word]] (1)
> **Env Vars:** wcss (12), bcss (2)
> **Definitions:** is a  (4), means that (3), known as (3), is an  (1)
> **Analogies:** for example (3), imagine (1), such as (1)
> **Best Practices:** rule of thumb (3)
> **Cross-References:** in the next (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Why and when to use k-means clustering](https://www.linkedin.com/learning/machine-learning-with-python-k-means-clustering/why-and-when-to-use-k-means-clustering?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-python-k-means-clustering/why-and-when-to-use-k-means-clustering?u=76281980&t=0)** - [Instructor] In order to know when to use [[k-means clustering]], we need to understand its strengths, and weaknesses. In terms of strengths, K-means clustering is based on simple statistical principles. It is a very flexible and malleable algorithm. This means that it can easily adapt to new examples. K-means clustering can be scaled to large data sets, and it can be applied to a wide set of real world situations, such as market segmentation, social network analysis, search result grouping, medical imaging and anomaly detection. There are some weaknesses inherent with K-means clustering as well. With K-means clustering, it isn't always clear what the appropriate value for K should be. There are several statistical measures, and approaches that we can leverage to make a more informed decision about the choice of K. However, we sometimes have to rely on domain knowledge to make this choice. The K means algorithm is non-deterministic. This means that depending on the choice of the randomly chosen initial centroid, K-means clustering could produce different results from two separate runs even if the runs were based on the same data. To accommodate this, we typically run K-means clustering several times and choose the result. The hazard lowest WCSS. K-means clustering is not useful for creating nonspherical clusters. This means that it is not well-suited for creating clusters
>
> **[1:33](https://www.linkedin.com/learning/machine-learning-with-python-k-means-clustering/why-and-when-to-use-k-means-clustering?u=76281980&t=93)** with complex shapes and different sizes. There are other clustering methods more suitable for creating these types of clusters. K-means has trouble working with data with regions of variant density. Density-based clustering methods such as DBSCAN and OPTICS are better suited for clustering this type of data. Outliers can either result in their own clusters or drag the centroid of clusters towards them. To reduce the impact that outliers have on K-means clustering, we often have to normalize or standardize our data prior to clustering. Because it uses Euclidean distance to quantify similarity. K-means clustering only works with numeric data. This means that we may have to choose a different clustering approach if our data has categorical values.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[k-means clustering]] (10)
> **Definitions:** means that (4), is a  (1)
> **Env Vars:** wcss (1), dbscan (1), optics (1)
> **CLI Commands:** make (2)
> **Analogies:** such as (2)
> **Speakers:** - [instructor] (1)


### 2. Segmenting Data with K-Means Clustering

[↑ Back to Table of Contents](#table-of-contents)

#### [How to segment data with k-means clustering in Python](https://www.linkedin.com/learning/machine-learning-with-python-k-means-clustering/how-to-segment-data-with-k-means-clustering-in-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-python-k-means-clustering/how-to-segment-data-with-k-means-clustering-in-python?u=76281980&t=0)** - [Instructor] In this exercise, we will use [[k-means clustering]] to segment retail card customers based on their income and an assigned spending score. Before we get started, note that this video is the first in a four-video sequence that explains how to segment data using k-means clustering, evaluates, and visualize clusters, choose the right number of clusters, and interpret the results of k-means clustering. We start by importing the [[Pandas (Software)|pandas]] package. Then we import the data into a data frame called customers. Next, we preview the data to make sure that the input worked as expected. Now that we have our data, let's try to understand it. First, we get a concise summary of the structure of the data by calling the info method of the data frame.
>
> **[1:07](https://www.linkedin.com/learning/machine-learning-with-python-k-means-clustering/how-to-segment-data-with-k-means-clustering-in-python?u=76281980&t=67)** From the summary, we can tell that there are 200 instances in the dataset by looking at the range index. We can also tell that there are five features in the dataset. Looking at the Dtype column of the summary, we see that the gender column holds text values, while the other columns hold integer values. Next, we get summary [[Statistics]] for the data by calling the described method of the data frame. By default, the describe method returns summary statistics for only numeric columns. However, if we set the include argument to all, we get summary statistics for all columns. We will also round the results to two decimal places.
>
> **[2:03](https://www.linkedin.com/learning/machine-learning-with-python-k-means-clustering/how-to-segment-data-with-k-means-clustering-in-python?u=76281980&t=123)** From the statistics, we get the mean, maximum, minimum standard deviation, and quartile values for the numeric columns. We also get the number of unique values, the top occurring value and the frequency of the top occurring value for the non-numeric column, gender. Next, let's visually explore our data to see if there are some new insights we can derive. We start by importing Pyplot from the Matplotlib package so we can specify plot elements. Then we import the Seaborn package and set a visual theme for our plots. The first chart we create is a box plot to evaluate the difference in income between males and females in our data set. The chart shows that there isn't a significant difference in income between men and women in the data. Next, we create another box plot to evaluate the difference in age between males and females in our data set. This chart shows that there is not a significant difference in age between men and women in this data. The third chart we create is a box plot to evaluate the difference in spending score between males and females. This chart also shows that there is not a significant difference in spending score between men and women.
>
> **[3:36](https://www.linkedin.com/learning/machine-learning-with-python-k-means-clustering/how-to-segment-data-with-k-means-clustering-in-python?u=76281980&t=216)** Next let's evaluate the relationship between income and age. We will use a scatter plot for this. There appears to be a very slight positive linear relationship between income and age between the ages of 20 and 40. The relationship appears to turn slightly negative for those older than 50. Note my use of the [[Microsoft Word|word]] slight here. That may actually be a bit generous. Let's also evaluate the relationship between spending score and age using a scatter plot. Here, we see a stronger, positive relationship between spending score and age for those on the 40 years old than we see for those older than 40. Finally, let's see how spending score relates to income. There isn't a clear linear relationship between these two variables based on the chart. However, we do get somewhat of a sense of the possible clusters that could arise from the data. Something else that we do see in this chart is a significant difference in the range of values between spending score and income. We'll deal with this a little bit later. First of all, let's get summary statistics for just these two variables. As we can see, the standard deviation for income is 26264.72,
>
> **[5:10](https://www.linkedin.com/learning/machine-learning-with-python-k-means-clustering/how-to-segment-data-with-k-means-clustering-in-python?u=76281980&t=310)** while that of spending score is 25.82. This is a significant difference. We know that k-means clustering uses Euclidean distance to quantify similarity. If we attempt to cluster the data as is, the income feature will dominate the distance calculations and spending score will have little to no impact on the process. To avoid this, we need to normalize or standardize these two features. The standard scale of class from the sklearn.preprocessing subpackage is useful for this. We instantiate an object called scaler from the class. Then we use the fit_transform method of the object to standardize the income and spending score features.
>
> **[6:07](https://www.linkedin.com/learning/machine-learning-with-python-k-means-clustering/how-to-segment-data-with-k-means-clustering-in-python?u=76281980&t=367)** The fit_transform method returns a NumPy array. Let's convert it to a data frame to make our work easier.
>
> **[6:24](https://www.linkedin.com/learning/machine-learning-with-python-k-means-clustering/how-to-segment-data-with-k-means-clustering-in-python?u=76281980&t=384)** Next, we get summary statistics for the customer scale data frame to see what the standardized values look like. As expected, the standardized values now have a standard deviation of one and a mean of zero. The approach we use here is called Z-score normalization. If you need a refresher on normalization and standardization, check out the normalizing your data video, which is part of the course, machine learning with [[Python (Programming Language)|Python]] foundations. With our data standardized, we are now ready to cluster it. To cluster our data using k-means, we first need to import the k-means class from the sklearn.cluster subpackage. We then instantiate a new object called km from the k-means class. We passed three arguments to the k-means class, which we just did. They have three arguments. The first of them is we set k to three. The second argument is a number of times the k-means algorithm should be run with different central seeds. The default is 10. We set this to 25. Finally, we set the random initialization seed which will be used to generate the cluster centers to 1, 2, 3, 4. Setting this value allows us to reproduce our results. We use the fit method of the km object to cluster our data. To get cluster assignments,
>
> **[7:57](https://www.linkedin.com/learning/machine-learning-with-python-k-means-clustering/how-to-segment-data-with-k-means-clustering-in-python?u=76281980&t=477)** we reference the labels attributes of the km object.
>
> **[8:10](https://www.linkedin.com/learning/machine-learning-with-python-k-means-clustering/how-to-segment-data-with-k-means-clustering-in-python?u=76281980&t=490)** The result is a NumPy array of cluster assignments. The cluster assignments correspond to the order of instances in the customer scale data set. So the first item in the data is assigned to cluster zero. While the last item is assigned to cluster two. Another useful attributes of the km object is the inertia_ attribute.
>
> **[8:37](https://www.linkedin.com/learning/machine-learning-with-python-k-means-clustering/how-to-segment-data-with-k-means-clustering-in-python?u=76281980&t=517)** This is the total within-cluster sum of squares, WCSS, for the clusters. In the next video, we will evaluate and visualize our clusters.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Statistics]] (6), [[k-means clustering]] (4), [[Pandas (Software)|Pandas]] (1), [[Microsoft Word|Word]] (1), [[Python (Programming Language)|Python]] (1)
> **Definitions:** is a  (6), is called (1)
> **CLI Commands:** make (2), python (1)
> **Code Identifiers:** fit_transform (2)
> **Versions:** 26264.72 (1), 25.82 (1)
> **Env Vars:** wcss (1)
> **Cross-References:** in the next (1)
> **Warnings:** note that (1)

#### [How to evaluate and visualize clusters in Python](https://www.linkedin.com/learning/machine-learning-with-python-k-means-clustering/how-to-evaluate-and-visualize-clusters-in-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-python-k-means-clustering/how-to-evaluate-and-visualize-clusters-in-python?u=76281980&t=0)** - [Instructor] Before we get started, note that this video is the second in a four-video sequence that explains how to segment data using [[k-means clustering]], evaluate and visualize clusters, choose the right number of clusters, and interpret the rights of k-means clustering. So if you have not done so, watch the previous video for a detailed explanation of the prior code. Now that we've clustered our data, let's evaluate the quality of the clusters. One way to evaluate the quality of clusters is to look at the size of each cluster. If a single cluster is rather large or rather small in comparison to others, it may need some further attention. The label's attribute of the cluster object, km, returns a NumPy array of cluster assignments. To get the number of items in each cluster, we create a [[Pandas (Software)|pandas]] series from the NumPy array and call the value_count method of the series.
>
> **[1:06](https://www.linkedin.com/learning/machine-learning-with-python-k-means-clustering/how-to-evaluate-and-visualize-clusters-in-python?u=76281980&t=66)** We see that the first cluster has 123 customers. The second has 38 customers and the third has 39 customers. The first cluster may need some additional attention. It is possible that our k is not appropriate for this dataset. The center of each cluster also provides us with some useful information about the quality of our clusters. The cluster_centers attribute of our cluster object km provides us with the coordinates of the cluster centers or centroids as a NumPy array. To make the cluster centers easier to interpret, we create a data frame called cluster_centers using Income and SpendingScore as the column names. Because we used the z-score approach to normalize our data, the x-y coordinates for the average income and spending score will be zero. This means that we can interpret the numbers for the first cluster to mean that customers in that cluster have a slightly lower than average income and about average spending scores. Customers in the second cluster have higher than average income but lower than average spending scores and customers in the third cluster have higher than average income and spending scores. Another way to evaluate the quality of clusters is to visualize them.
>
> **[2:40](https://www.linkedin.com/learning/machine-learning-with-python-k-means-clustering/how-to-evaluate-and-visualize-clusters-in-python?u=76281980&t=160)** To visualize the clusters and cluster centers, we create two scatter plots. In the first chart, we plot the customer scale data, setting x to Income and y to SpendingScore. We use the cluster labels to determine the hue or colors of the points. We set the transparency, alpha, to 0.8 and the size of the points, s, to 150. The second chart plots the cluster centers. Besides the two scatter plots, we also label each cluster by looping through the rows of the cluster_centers data frame. Using the text method for a plot, we set s, which is the label value, to each row number, i. The cluster visualization gives us a visual reference of how each cluster relates to the others. By visual inspection, we can sort of see that the first cluster, cluster zero, could benefit from some additional portioning. This is consistent with our previous assessment of the cluster sizes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[k-means clustering]] (2), [[Pandas (Software)|Pandas]] (1)
> **Code Identifiers:** cluster_centers (3), value_count (1)
> **CLI Commands:** make (1)
> **Versions:** 0.8 (1)
> **Cross-References:** previous video (1)
> **Definitions:** means that (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [How to find the right number of clusters in Python](https://www.linkedin.com/learning/machine-learning-with-python-k-means-clustering/how-to-find-the-right-number-of-clusters-in-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-python-k-means-clustering/how-to-find-the-right-number-of-clusters-in-python?u=76281980&t=0)** - [Instructor] Before we get started, note that this video is the third in the four-video sequence that explains how to segment data using [[k-means clustering]], evaluate and visualize clusters, choose the right number of clusters and interpret the results of k-means clustering. So if you have not done so, watch the previous two videos for a detailed explanation of the prior code. Now that we've clustered our data, and evaluated and visualized the clusters, let's try to figure out the appropriate number of clusters, k, for our data. We will use three statistical approaches to do this. The first is the within cluster sum of squares method, which is also known as the elbow method. For this approach, we plot the within cluster sum of squares as a function of k. I've pre-written the code to do this. Let's break it down. The first thing we do in the code is create an empty list called wcss. Then we iterate through values for k from two to 10. Note that the stop value in the range function, 11, is exclusive. For each k, we cluster the data as we did previously. Then we append the wcss value, which is provided as the inertia attribute of the cluster object km to the wcss list. By the time we're done with all nine k values, we have the wcss for each k in the list and we can convert the list to a [[Pandas (Software)|pandas]] series called wcss_series. Next, we plot the within cluster sum of squares values
>
> **[1:34](https://www.linkedin.com/learning/machine-learning-with-python-k-means-clustering/how-to-find-the-right-number-of-clusters-in-python?u=76281980&t=94)** on the y-axis for each of the k values on the x-axis. The plot suggests that the appropriate value for k, the elbow, is likely five. Recall that the elbow is a point of inflection, the point where increasing k no longer reduces WCSS significantly. What we have is just one opinion. Let's get a second one. This time, we'll use the average silhouette score. For this approach, we plot the average silhouette score as a function of k. I've also pre-written the code to do this. The first thing we do is import the silhouette_score function from the sklearn.metrics sub package. Next, we create an empty list called silhouette. Then we iterate through values for k from 2 to 10. For each k, we cluster the data, then we get the average silhouette score for each k by passing the data on the cluster labels to the silhouette_score function. Each silhouette score is appended to the silhouette list. By the time we're done with all nine k values, we have the average silhouette score for each k in the list, and we can convert the list to a pandas series called silhouette_series. Next, we plot the average silhouette scores on the y-axis for each of the k values on the x-axis. With the average silhouette method, the k value corresponding to the highest average silhouette score
>
> **[3:07](https://www.linkedin.com/learning/machine-learning-with-python-k-means-clustering/how-to-find-the-right-number-of-clusters-in-python?u=76281980&t=187)** represents the optimal number of clusters. From the chart, we see that five is the suggested value for k. We now have two opinions that suggest that k should be five. Let's get a third opinion just to make sure. The third statistical approach we use is the Calinski-Harabasz score. For this approach, we plot the calinski_harabasz_score function as a function of k. The first thing we do is import the calinski_harabasz_score function from the sklearn.metrics sub package. Next, we create an empty list called Calinski. Then we iterate through values for k from 2 to 10. For each k, we cluster the data. Then we get the Calinski-Harabasz score for each k by passing the data and the cluster labels to the Calinski-Harabasz score function. Each Calinski-Harabasz score is appended to the Calinski list. By the time we're done with all nine k values, we have the Calinski-Harabasz score for each k in the list and we can convert the list to a pandas series called calinski_series. Next, we plot the Calinski-Harabasz scores on the y-axis for each of the k values on the x-axis. Based on the Calinski-Harabasz score, the optimal value for k is that which corresponds to either the highest score or the first abrupt elbow in the chart.
>
> **[4:41](https://www.linkedin.com/learning/machine-learning-with-python-k-means-clustering/how-to-find-the-right-number-of-clusters-in-python?u=76281980&t=281)** The highest score is at k equal to nine where the first abrupt elbow is at k equal to five. Considering that the other two approaches suggested k equal to five, we'll settle on five as the appropriate value for k.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (3), [[k-means clustering]] (2)
> **Code Identifiers:** silhouette_score (2), calinski_harabasz_score (2), wcss_series (1), silhouette_series (1), calinski_series (1)
> **Definitions:** known as (1), is a  (1)
> **Warnings:** note that (2)
> **CLI Commands:** make (1)
> **Env Vars:** wcss (1)
> **Speakers:** - [instructor] (1)

#### [How to interpret the results of k-means clustering in Python](https://www.linkedin.com/learning/machine-learning-with-python-k-means-clustering/how-to-interpret-the-results-of-k-means-clustering-in-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-python-k-means-clustering/how-to-interpret-the-results-of-k-means-clustering-in-python?u=76281980&t=0)** - [Instructor] Before we get started, note that this video is the fourth in a full video sequence that explains how to segment data using [[k-means clustering]], evaluate and visualize clusters, choose the right number of clusters, and interpret the results of k-means clustering. So if you have not done so, watch the previous three videos for a detailed explanation of the prior code. Now that we've clustered our data, evaluated the clusters, visualize the clusters, and chosen an appropriate value for k, let's segment the data again with k set to five and interpret the results. We start by instantiating a cluster object called km from the k-means class with n clusters, which is k set to five. We then cluster the customer scale dataset using the new cluster object. Next, we create a data frame for the cluster centroids called cluster centers. This data frame makes it easier to interpret the cluster centers and is also useful when visualizing the cluster as we do here. The cluster visualization supports our previous assertion that clusters zero needed some more attention. That cluster has now become clusters zero, three, and four. Clusters one and two remained largely the same.
>
> **[1:36](https://www.linkedin.com/learning/machine-learning-with-python-k-means-clustering/how-to-interpret-the-results-of-k-means-clustering-in-python?u=76281980&t=96)** Now we've segmented our data into five clusters, we can assign the cluster numbers to each of the customers in the original data and analyze the characteristics of each segment. First, we create a new column in the customer's dataset to hold each customer's cluster assignment.
>
> **[2:05](https://www.linkedin.com/learning/machine-learning-with-python-k-means-clustering/how-to-interpret-the-results-of-k-means-clustering-in-python?u=76281980&t=125)** A preview of the customer's datasets shows that the first customer is assigned to cluster zero while the second customer is assigned to cluster three. To help us in our cluster analysis, we dummy code the only categorical feature in our dataset, gender.
>
> **[2:33](https://www.linkedin.com/learning/machine-learning-with-python-k-means-clustering/how-to-interpret-the-results-of-k-means-clustering-in-python?u=76281980&t=153)** By dummy coding the Gender feature, we get two new columns, Gender_Female and Gender_Male to hold either zero or one, depending on the whether the customer is female or male. For example, customer one which has a Gender_Female value of zero and a Gender_Male value of one is male, while customer three which has a Gender_Female value of one and a Gender_Male value of zero is female. We can now get descriptive [[Statistics]] for the two gender features. The Age feature, the Income feature, and in SpendingScore feature. Because we dummy coded the Gender feature, the mean of the Gender_Female and Gender_Male features provide us with the frequency distribution for each gender. 56% of the customers in the dataset are female, while 44% are male. We also see that the median age income and spending score values are 36, $61,500 and 50 respectively. Next, we get descriptive statistics for the same features, but grouped by cluster. Comparing the descriptive statistics for customers by cluster against the descriptive statistics for all customers provide some interesting insights. For example, we see that the representation of women in clusters zero is higher than the average
>
> **[4:09](https://www.linkedin.com/learning/machine-learning-with-python-k-means-clustering/how-to-interpret-the-results-of-k-means-clustering-in-python?u=76281980&t=249)** and the customers in cluster zero tend to be older, earn less and spend less than the average. The customers in cluster one are more likely to be male, they tend to be older than the average, earn more than the average but spend less than the average customer. The customers in cluster two mimic the gender distribution of the entire dataset. They are slightly younger than average, but earn and spend more than the average. The gender distribution of customers in cluster three also mimics that of the entire dataset. However, they tend to be much younger and earn less than the average customer. Interestingly, they tend to spend more than the average customer. Similar to cluster three, the gender distribution of customers in cluster four mimics data the overall dataset. However, they tend to be older than the average, earn a little less than the average, but have an average spending score. In terms of a [[Customer Relations]] strategy, it would make sense to invest in increasing the spending of the high earning low spending customers in cluster one. Secondly, it would make sense to keep the high earning, high spending customers in cluster two happy. And thirdly, it would make sense to keep a watchful eye on the low earning high spending customers in cluster three. When you think about this,
>
> **[5:41](https://www.linkedin.com/learning/machine-learning-with-python-k-means-clustering/how-to-interpret-the-results-of-k-means-clustering-in-python?u=76281980&t=341)** what other actionable insights can you come up with based on the clustering results?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Statistics]] (4), [[k-means clustering]] (2), [[Customer Relations]] (1)
> **CLI Commands:** make (3)
> **Analogies:** for example (2), similar to (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/machine-learning-with-python-k-means-clustering/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-with-python-k-means-clustering/next-steps?u=76281980&t=0)** - [Frederick] Congrats. You now know what [[k-means clustering]] is, how it works, and when to use it. You've learned how to create, visualize, evaluate, and interpret clusters in [[Python (Programming Language)|Python]]. The foundational knowledge and skills you've acquired in this course should serve as a stepping stone to continue learning about machine learning. Specifically, it should serve as a launchpad for solving more complex, unsupervised machine learning problems using k-means clustering. Here are a few recommended next steps. K-means clustering is one of many unsupervised machine learning approaches we can use in Python. I encourage you to continue to explore other [[LinkedIn]] Learning courses that introduce the use of other types of machine learning approaches. One such course is "Machine Learning with Python, [[Decision Trees]]." Besides courses that explore other approaches, I also encourage you to explore courses that highlight the importance of [[Ethics]] in [[Data Collection]] and use. An example of such a course is "[[Data Ethics]], Watching out for Data Misuse." If you're interested in broadening your skillset into other languages such as R, then also check out my book, "Practical Machine Learning in R." Finally, I recommend that you continue to practice what you've learned. Find new problems to solve. Find interesting data sets on which to practice your new skills. The journey into the world
>
> **[1:32](https://www.linkedin.com/learning/machine-learning-with-python-k-means-clustering/next-steps?u=76281980&t=92)** of machine learning with Python is a lifelong one. Thanks for coming along with me on this journey. I'll see you next time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (4), [[k-means clustering]] (3), [[LinkedIn]] (1), [[Decision Trees]] (1), [[Ethics]] (1)
> **CLI Commands:** python (4), find (2)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [frederick] (1)


## Instructor

- [[Frederick Nwanganga]]

## Resources

- Exercise files available

## Skills Covered

- Python (Programming Language)
- k-means clustering
- Machine Learning
- Artificial Intelligence (AI)

## Path Context

### In [[Develop with Python for AI and Machine Learning]]
← [[Machine Learning with Python- Logistic Regression]] | **4 of 6** | [[Machine Learning with Python- Association Rules]] →

### In [[Advance Your Skills as a Machine Learning Specialist]]
← [[Machine Learning with Python- Decision Trees]] | **2 of 9** | [[Machine Learning with Python- Association Rules]] →

### In [[Machine Learning with Python Professional Certificate by Anaconda]]
← [[Machine Learning with Python- Logistic Regression]] | **5 of 6** | [[Processing Text with Python Essential Training]] →

## Part of

- [[Machine Learning with Python Professional Certificate by Anaconda]]

## Appears In

- [[Develop with Python for AI and Machine Learning]]
- [[Advance Your Skills as a Machine Learning Specialist]]
- [[Machine Learning with Python Professional Certificate by Anaconda]]

## Related Courses

_Courses sharing skills:_

- [[Advanced Python in Excel- Machine Learning]] — Python (Programming Language), Artificial Intelligence (AI), Machine Learning
- [[Machine Learning with Python- Association Rules]] — Python (Programming Language), Artificial Intelligence (AI), Machine Learning
- [[Machine Learning with Python- Logistic Regression]] — Python (Programming Language), Artificial Intelligence (AI), Machine Learning
- [[Machine Learning with Python- Decision Trees]] — Python (Programming Language), Artificial Intelligence (AI), Machine Learning
- [[Advanced Nlp With Python For Machine Learning]] — Python (Programming Language), Artificial Intelligence (AI), Machine Learning

---

[↑ Back to top](#)