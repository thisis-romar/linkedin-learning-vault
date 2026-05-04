---
type: course
cssclasses:
  - lle-course
slug: hands-on-data-science-and-ai-for-healthcare
url: "https://www.linkedin.com/learning/hands-on-data-science-and-ai-for-healthcare"
duration_minutes: 39
duration: 39m
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQENDo0afVgyhw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1690922397149?e=2147483647&amp;v=beta&amp;t=PlN19dIVekKVKpzAKQUfBNQMzmPisNvAwifUrerZg08"
linkedin_topic: Data Science
learning_paths:
  - '[AI for Healthcare- Essentials for Technical Roles](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/AI%20for%20Healthcare-%20Essentials%20for%20Technical%20Roles.md)'
  - '[Hands-On Healthcare Analytics](../../Paths/Data%20Science/Learning%20Paths/Hands-On%20Healthcare%20Analytics.md)'
  - '[Python for Data Professionals in Healthcare](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Python%20for%20Data%20Professionals%20in%20Healthcare.md)'
prev_courses:
  - '[Machine Learning Fundamentals for Healthcare](Machine%20Learning%20Fundamentals%20for%20Healthcare.md)'
  - '[Machine Learning Fundamentals for Healthcare](Machine%20Learning%20Fundamentals%20for%20Healthcare.md)'
  - '[Python Data Analysis for Healthcare](Python%20Data%20Analysis%20for%20Healthcare.md)'
next_courses:
  - '[Advanced AI- NLP Techniques for Clinical Datasets](../Artificial%20Intelligence%20(AI)/Advanced%20AI-%20NLP%20Techniques%20for%20Clinical%20Datasets.md)'
  - null
  - '[An Introduction to How Generative AI Will Transform Healthcare](../Artificial%20Intelligence%20(AI)/An%20Introduction%20to%20How%20Generative%20AI%20Will%20Transform%20Healthcare.md)'
path_nav: '[{"path":"AI for Healthcare- Essentials for Technical Roles","position":4,"total":6,"prev":"Machine Learning Fundamentals for Healthcare","next":"Advanced AI- NLP Techniques for Clinical Datasets"},{"path":"Hands-On Healthcare Analytics","position":8,"total":8,"prev":"Machine Learning Fundamentals for Healthcare","next":null},{"path":"Python for Data Professionals in Healthcare","position":3,"total":5,"prev":"Python Data Analysis for Healthcare","next":"An Introduction to How Generative AI Will Transform Healthcare"}]'
path_count: 3
tags:
  - course
  - topic/artificial-intelligence
  - topic/data-science
  - topic/devops
  - topic/network-and-system-administration
  - topic/software-development
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Hands-on%20Data%20Science%20and%20AI%20for%20Healthcare.md)

![Hands-on Data Science and AI for Healthcare](https://media.licdn.com/dms/image/v2/D560DAQENDo0afVgyhw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1690922397149?e=2147483647&amp;v=beta&amp;t=PlN19dIVekKVKpzAKQUfBNQMzmPisNvAwifUrerZg08)

# Hands-on Data Science and AI for Healthcare

> Healthcare is chock-full of all kinds of data, which makes it one of the best fields to apply analytic data science techniques. Unfortunately, though, there are very few resources to learn about applying code-based approaches to healthcare-related use cases.In this course, instructor Wuraola Oyewusi gives an overview of how to apply a wide variety of different data science and machine learning alg

> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-data-science-and-ai-for-healthcare) | 39m
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Using data science and AI for healthcare](#using-data-science-and-ai-for-healthcare)
  - [What you should know](#what-you-should-know)
  - [How the exercise files work](#how-the-exercise-files-work)
- [**1. Disease Prediction Using Machine Learning**](#1-disease-prediction-using-machine-learning) (3 videos)
  - [Use Case: Diabetes prediction](#use-case-diabetes-prediction)
  - [Diabetes prediction using machine learning model](#diabetes-prediction-using-machine-learning-model)
  - [Model explanation using SHAP](#model-explanation-using-shap)
- [**2. Sentiment Analysis of Patient Opinion**](#2-sentiment-analysis-of-patient-opinion) (2 videos)
  - [Use case: Online medication review](#use-case-online-medication-review)
  - [Sentiment analysis using pre-trained transformer models](#sentiment-analysis-using-pre-trained-transformer-models)
- [**3. Radiology Image Detection Using Computer Vision**](#3-radiology-image-detection-using-computer-vision) (3 videos)
  - [Use case: Shoulder implant X-ray manufacturer detection](#use-case-shoulder-implant-x-ray-manufacturer-detection)
  - [X-ray manufacturer classification using convolutional neural networks (CNN)](#x-ray-manufacturer-classification-using-convolutional-neural-networks-cnn)
  - [X-ray manufacturer classification using transfer learning](#x-ray-manufacturer-classification-using-transfer-learning)
- [**4. Exploratory Data Analysis Using Visualization**](#4-exploratory-data-analysis-using-visualization) (3 videos)
  - [Use case: Diseases and medications text](#use-case-diseases-and-medications-text)
  - [Diseases and medications text visualization using word clouds](#diseases-and-medications-text-visualization-using-word-clouds)
  - [Diseases and medications text visualization using Scattertext](#diseases-and-medications-text-visualization-using-scattertext)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Using data science and AI for healthcare](https://www.linkedin.com/learning/hands-on-data-science-and-ai-for-healthcare/using-data-science-and-ai-for-healthcare-24459176?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-data-science-and-ai-for-healthcare/using-data-science-and-ai-for-healthcare-24459176?u=76281980&t=0)** - It's time for you to bring [Data Science](../../Topics/Data%20Science.md) into healthcare. Disease prediction, patient opinion mining, radiology image classification, we can do this, all of these and more, by applying data science and AI techniques to healthcare. I myself worked in the clinical system, but then transitioned to data science. My name is Wuraola Oyewusi, and my goal as an instructor in this [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning course is to teach you how I wish I was taught. I will teach you to apply data science across a range of use cases. I hope that by the end of this course, you will realize the true power of data science and AI, that we can use it to not just solve problems, but to deepen insights, accelerate change, and capitalize on the modern landscape of healthcare data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Science](../../Topics/Data%20Science.md) (5), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **Speakers:** - it (1)

#### [What you should know](https://www.linkedin.com/learning/hands-on-data-science-and-ai-for-healthcare/what-you-should-know-24454900?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/hands-on-data-science-and-ai-for-healthcare/what-you-should-know-24454900?u=76281980&t=1)** - This course is designed to describe a use case that is as close as possible to what you may encounter working with healthcare-related data to help train your mind to match healthcare context with [Data Science](../../Topics/Data%20Science.md) and AI tools and approaches, share rationale for decisions, and encourage hands-on code along. So, it is advisable to be comfortable with the following. Fundamentals of data science, [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) programming, machine learning [Algorithms](../../Skills/Software%20Development/Algorithms.md), and health domain terminologies. How so? I will be working out of [Google](../../Glossary/Service/Google.md) Colab notebooks. It may be helpful to be familiar with the interface and how it works. If this is all new to you, no worries. You can explore our rich library to learn more.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Science](../../Topics/Data%20Science.md) (2), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1), [Algorithms](../../Skills/Software%20Development/Algorithms.md) (1), [Google](../../Glossary/Service/Google.md) (1)
> **CLI Commands:** python (1)
> **Tools:** colab (1)
> **Speakers:** - this (1)

#### [How the exercise files work](https://www.linkedin.com/learning/hands-on-data-science-and-ai-for-healthcare/how-the-exercise-files-work?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-data-science-and-ai-for-healthcare/how-the-exercise-files-work?u=76281980&t=0)** - [Presenter] The exercise files and notebooks, and they're compatible with any environment that works with IPython files. For the purpose of demonstration, let's go to colab.research.[google.com](https://google.com) To upload an IPython file, click on the file icon on the top left corner, then select Upload Notebook.
>
> **[0:39](https://www.linkedin.com/learning/hands-on-data-science-and-ai-for-healthcare/how-the-exercise-files-work?u=76281980&t=39)** Not all exercise requires GPU support, but to use the GPU, click on Change Runtime. Then select GPU under the [Hardware](../../Topics/Hardware.md) accelerator.
>
> **[0:57](https://www.linkedin.com/learning/hands-on-data-science-and-ai-for-healthcare/how-the-exercise-files-work?u=76281980&t=57)** To run a cell, click on the button that looks like play or press shift and enter on your keyboard. Why do you need to understand this? In this course, we will periodically use the exercise files to demonstrate different [Data Science](../../Topics/Data%20Science.md) techniques for healthcare use cases. The notebook interface is intuitive, so feel free to click around to understand it better.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Google](../../Glossary/Service/Google.md) (1), [Hardware](../../Topics/Hardware.md) (1), [Data Science](../../Topics/Data%20Science.md) (1)
> **UI Navigation:** click on (3), go to (1)
> **Env Vars:** gpu (3)
> **Exercise Files:** exercise files (2)
> **URLs:** [google.com](https://google.com) (1)
> **Tools:** colab (1)
> **Speakers:** - [presenter] (1)


### 1. Disease Prediction Using Machine Learning

[↑ Back to Table of Contents](#table-of-contents)

#### [Use Case: Diabetes prediction](https://www.linkedin.com/learning/hands-on-data-science-and-ai-for-healthcare/use-case-diabetes-prediction-24459175?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-data-science-and-ai-for-healthcare/use-case-diabetes-prediction-24459175?u=76281980&t=0)** - Diabetes is a chronic disease that affects how the body processes sugar, affecting millions of people worldwide. It manifest as a deficiency in insulin, a hormone produced by a gland called pancreas, leading to high blood sugar. Diabetes can be type I, an autoimmune disease, where the pancreas produces no or low insulin, or type II, a metabolic disease where the body cells respond poorly or do not absorb enough sugar. Both types are managed with medications, such as insulin, metformin, glimepiride, lifestyle modification, such as exercise and diet, and regular blood sugar monitoring. The focus of our use case is type II diabetes, so the sample dataset will be based off that. It can be diagnosed by fasting plasma glucose level of greater or equal to 126 milligram per DL, oral glucose tolerance test result of greater or equal to 200 milligram per DL, or a glycated hemoglobin, A1C value of greater or equal to 6.5%. Test values are usually within a time range, and final diagnosis is made in combination to other factors
>
> **[1:35](https://www.linkedin.com/learning/hands-on-data-science-and-ai-for-healthcare/use-case-diabetes-prediction-24459175?u=76281980&t=95)** by qualified health professionals. The people I imagine may be analyzing this type of data: a researcher who would like to find pattern in the big dataset about diabetes; a data scientist who has been recruited in the hospital that wants to include machine learning in their work pipeline; or maybe an innovator who wants to leverage machine learning for healthcare. To demonstrate disease prediction, we'll take a closer look at how diabetes and machine learning are a great match. Diabetes is a complex disease that provides enough data points for machine learning [Algorithms](../../Skills/Software%20Development/Algorithms.md) to learn pattern from. The criteria for diagnosis is also well researched, thus providing a good baseline to determine the model accuracy, and there's availability of historical data for training in different systems. Here's a quick overview of machine learning. The algorithms can learn pattern from data without being explicitly programmed, the bigger the data, the merrier for machine learning, and the trained models can make predictions on previously unseen data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Algorithms](../../Skills/Software%20Development/Algorithms.md) (2)
> **Analogies:** such as (2), imagine (1)
> **CLI Commands:** find (1), make (1)
> **Definitions:** is a  (2)
> **Env Vars:** a1c (1)
> **Versions:** 6.5 (1)
> **Speakers:** - diabetes (1)

#### [Diabetes prediction using machine learning model](https://www.linkedin.com/learning/hands-on-data-science-and-ai-for-healthcare/diabetes-prediction-using-machine-learning-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-data-science-and-ai-for-healthcare/diabetes-prediction-using-machine-learning-model?u=76281980&t=0)** - [Instructor] This notebook shows how to predict diabetes from data using machine learning. The sample data has 1,000 rows and 14 columns. You can find more details about the dataset by clicking on this link. First, we download the dataset to our notebook using the wget command. Then we import different models for data preprocessing, visualization, and modeling. Many of them are from the Sklearn by the machine learning library. Next, we load that data into a [pandas](../../Skills/Software%20Development/Pandas%20(Software).md) data frame named df. If you inspect the data frame using df.info, you get to see the column names like ID, gender, age, urea, creatinine, HbA1C, cholesterol, and BMI. On inspection, the number of unique ID is 800, indicating that maybe a patient was represented more than once or the ID isn't unique. When we inspect the number of classes, we can see five instead of the expected three, where Y is yes, N is no,
>
> **[1:38](https://www.linkedin.com/learning/hands-on-data-science-and-ai-for-healthcare/diabetes-prediction-using-machine-learning-model?u=76281980&t=98)** and P, prediabetes. This is due to how the labels are written. We fix that by stripping the extra spaces around some values. Now we have only three labels as expected. We repeat the same process for the gender column. Let's visualize the gender column as a bar chart. The chart shows that we have more data from male patients. Age is an interesting data type. We have about 50 unique ages in our data. It makes sense to pre-process them as category code data. So let's create eight panes, 20 to 30, 30 to 40, 80 to 90, ETC.
>
> **[2:40](https://www.linkedin.com/learning/hands-on-data-science-and-ai-for-healthcare/diabetes-prediction-using-machine-learning-model?u=76281980&t=160)** If you count the number of values in each age bracket, you can see 476 people between the age of 60 and 70, 274 for 70 to 80, 79 for 50 to 60. The values resonates with what you may encounter in a real clinical setting. For a top level analysis of columns that are correlated, you can visualize the correlation values using Seaborn heat map. In this instance, the lighter the shade on the color map, the higher the correlation between the values. For example, all columns have a perfect correlation of one with themself as expected. Urea and creatinine have a score of 0.62. Cholesterol and LDL have a score of 0.42. The body mass index and HbA1C have a score of 0.41. LDL and BMI have a negative correlation of -0.067.
>
> **[4:04](https://www.linkedin.com/learning/hands-on-data-science-and-ai-for-healthcare/diabetes-prediction-using-machine-learning-model?u=76281980&t=244)** We create df2 by dropping the ID, number of partition and ages column. Then we go ahead to encode the gender, class, and age range columns as numeric categories using the scikit-learn label encoder. Note that the different label encoders were instantiated for each column. You can inspect what classes were encoded by calling the label encoder .classes. If you're familiar with this type of data, you'll have noticed that even though they are numbers, they're on different scales. For example, the BMI is in kilogram per meter squared while HbA1C can be in millimole or percentage. That's where scaling comes in. We create the data frame called df2_scaled where all numeric values are scaled to between zero and one using Sklearns MinMaxScaler. Then we concatenate df2 and df2 scaled into df3. To train our machine learning models, first we define our training data label
>
> **[5:38](https://www.linkedin.com/learning/hands-on-data-science-and-ai-for-healthcare/diabetes-prediction-using-machine-learning-model?u=76281980&t=338)** and test set using train_test_split from Sklearn. In our case, we decide that we will use 20% as two test sets. We are going to compare the performance of seven machine learning [Algorithms](../../Skills/Software%20Development/Algorithms.md), namely [Logistic Regression](../../Skills/Software%20Development/Logistic%20Regression.md), K-Nearest-Neighbor, Naive Bias, Support Vector Classifier, Random Forest Classifier, Decision Tree Regressor, and XGBoost Classifier. We then select the best performing model using cross validation. The code is written to return to cross validation accuracy and the standard main deviation. The best performing algorithm in this scenario is XGBoost with an accuracy score of 0.873. And the least performing is KNN with a score of 0.78. Now we go ahead to train our model using XGBoost classifier. Remember that a prediction of zero means not diabetic, one means pre-diabetes and two means diabetic. Despite the very small dataset, our model achieved an accuracy score of 0.995,
>
> **[7:15](https://www.linkedin.com/learning/hands-on-data-science-and-ai-for-healthcare/diabetes-prediction-using-machine-learning-model?u=76281980&t=435)** and depending on your metrics of choice, you can explore precision, recall, and F1-score of each prediction using the classification report. And finally, this has also plot the confusion matrix that shows comparison of true vessels predicted labels of the test dataset. For label zero, not diabetic, every time the model predicted it, it started with the original label. This is the same for label two. For label one, pre-diabetic, the model predicted the value as diabetic once out of eight times. This can be explained as the value being close to the value of being diabetic indeed. So you see the potential of this approach. Remember, this can be done with modern diabetes prediction. I encourage you to explore how to leverage the power of machine learning for similar use cases in your work.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) (1), [Algorithms](../../Skills/Software%20Development/Algorithms.md) (1), [Logistic Regression](../../Skills/Software%20Development/Logistic%20Regression.md) (1)
> **Env Vars:** bmi (3), ldl (2), etc (1), knn (1)
> **Versions:** 0.62 (1), 0.42 (1), 0.41 (1), 0.067 (1), 0.873 (1)
> **CLI Commands:** find (1), wget (1)
> **Analogies:** for example (2)
> **Code Identifiers:** train_test_split (1)
> **UI Navigation:** select the (1)
> **Exercise Files:** download the (1)

#### [Model explanation using SHAP](https://www.linkedin.com/learning/hands-on-data-science-and-ai-for-healthcare/model-explanation-using-shap?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-data-science-and-ai-for-healthcare/model-explanation-using-shap?u=76281980&t=0)** - [Instructor] One of the ways to show our machine learning model arrived at its decision is by using shapely additive explanations, SHAP. The simplest definition is that it attempts to quantify the contribution of features, to model prediction. In this case, we are trying to understand how the XG post model meets decisions for the diabetes dataset. If you haven't, remember to run the collapsed part of the notebook before you begin. The SHAP explainer visualization shows that the top contributors to model decisions are features four and 10, which tallies with HPA1C and PMI, were significant for the three classes of prediction. Features five and six, cholesterol and triglyceride, were significant for only class zero and two. Features one and nine each range in low density lipoprotein, where permanent for the decision about class one. In practice, HBA1C and BMI are key parameters in the diagnosis of diabetes, and our model was able to learn that pattern.

> [!info]- Semantic Content
>
> **Env Vars:** shap (2), hpa1c (1), pmi (1), hba1c (1), bmi (1)
> **Best Practices:** remember to (1)
> **Prerequisites:** before you begin (1)
> **Speakers:** - [instructor] (1)


### 2. Sentiment Analysis of Patient Opinion

[↑ Back to Table of Contents](#table-of-contents)

#### [Use case: Online medication review](https://www.linkedin.com/learning/hands-on-data-science-and-ai-for-healthcare/use-case-online-medication-review-24455886?u=76281980)

#### [Sentiment analysis using pre-trained transformer models](https://www.linkedin.com/learning/hands-on-data-science-and-ai-for-healthcare/sentiment-analysis-using-pre-trained-transformer-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-data-science-and-ai-for-healthcare/sentiment-analysis-using-pre-trained-transformer-models?u=76281980&t=0)** - [Instructor] To apply sentiment analysis using pre-trained [Transformer Models](../../Skills/Artificial%20Intelligence%20(AI)/Transformer%20Models.md). We are going to use the drug review dataset. You can read all about it here. First, we download the data to our notebook using the we get command. Then we go ahead to unzip the data and pip install the transformer library. We can now import the necessary modules like pipeline from transformers, [pandas](../../Skills/Software%20Development/Pandas%20(Software).md) and tqdm. Next, we read the test data into a Pandas Dataframe called medication_review_df. On inspection, you should see about 53,766 rows
>
> **[0:54](https://www.linkedin.com/learning/hands-on-data-science-and-ai-for-healthcare/sentiment-analysis-using-pre-trained-transformer-models?u=76281980&t=54)** in columns like drugname, condition, reviews, and ratings. For speed, we will only use the first 500 rows in our analysis. We're going to compare the performance of three prediction models from the [HuggingFace](../../Glossary/Service/Hugging%20Face.md) transformer library and continue with the best performing ones. We load each model into variables named bio_clinicbert_classifier rubert_classifier and roberta_classifier. For the first review in I got, "I've tried a few antidepressant over the years "but none of these has helped me with my depression, "insomnia and anxiety. "The doctor suggested and changed me "onto 45mg of the focus drug "and this medicine has saved my life. "Thankfully, I have no side effects, "especially the common ones." I think this is a positive sentiment about the product. The bio_clinibert considered it negative with a confidence score of 0.59, but rubert_classifier and roBERTa predicted it as positive with confidence score above 0.7. For the other two examples, there seemed to be an agreement between rubert_classifier and roBERTa.
>
> **[2:30](https://www.linkedin.com/learning/hands-on-data-science-and-ai-for-healthcare/sentiment-analysis-using-pre-trained-transformer-models?u=76281980&t=150)** Now we can go ahead and apply the ruBERT sentiment classifier to the reviews in the Pandas column. On eyeballing, I found that the model has predicted the positive sentiment, "Great," as negative with a confidence score of 0.92. So I go ahead to apply the roberta_classifier for new predictions. With roBERTa, label two means positive, label zero for negative and label one for neutral, so I mapped them for easier interpretation.
>
> **[3:19](https://www.linkedin.com/learning/hands-on-data-science-and-ai-for-healthcare/sentiment-analysis-using-pre-trained-transformer-models?u=76281980&t=199)** Then I found the rule that was predicted wrongly by ruBERT in this line. "Great" was labeled as positive with a confidence score of 0.74. An interesting next step for you is to compare the predictions with the numeric ratings shared by the original reviewers and see if they apply.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) (3), [Transformer Models](../../Skills/Artificial%20Intelligence%20(AI)/Transformer%20Models.md) (1), [Huggingface](../../Glossary/Service/Hugging%20Face.md) (1)
> **Code Identifiers:** rubert_classifier (3), roberta (3), roberta_classifier (2), rubert (2), medication_review_df (1)
> **Versions:** 0.59 (1), 0.7 (1), 0.92 (1), 0.74 (1)
> **CLI Commands:** unzip (1), pip (1)
> **Tools:** insomnia (1)
> **Exercise Files:** download the (1)
> **Definitions:** is a  (1)
> **Prerequisites:** install (1)


### 3. Radiology Image Detection Using Computer Vision

[↑ Back to Table of Contents](#table-of-contents)

#### [Use case: Shoulder implant X-ray manufacturer detection](https://www.linkedin.com/learning/hands-on-data-science-and-ai-for-healthcare/use-case-shoulder-implant-x-ray-manufacturer-detection-24452924?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-data-science-and-ai-for-healthcare/use-case-shoulder-implant-x-ray-manufacturer-detection-24452924?u=76281980&t=0)** - In this chapter, we're going to explore how to use [Computer Vision](../../Skills/Artificial%20Intelligence%20(AI)/Computer%20Vision.md) to classify radiology images of shoulder implants by manufacturers. The end goal is to be able to label test images based on the model learning on the training data. This type of data can be found in hospitals, research centers, and independent radiology centers. Different people may be analyzing this type of data, radiologists, radiographers, regulators who may be investigating the source of a radiograph, hair scientists, and computer vision engineers. This is an interesting use case. It's difficult to highball this type of data. It's difficult to look at the radiograph, and decide which manufacturer. It's practical to see computer vision [Algorithms](../../Skills/Software%20Development/Algorithms.md) in action, and the training data is readily available. Here's a quick reminder about computer vision. It's the part of AI focused on finding patterns in images and videos. It enables insights from complex data sets like images. And as it's machine learning, computer vision models can make predictions on previously on scene, but similar data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Computer Vision](../../Skills/Artificial%20Intelligence%20(AI)/Computer%20Vision.md) (5), [Algorithms](../../Skills/Software%20Development/Algorithms.md) (1)
> **CLI Commands:** make (1)
> **Definitions:** is an  (1)
> **Speakers:** - in (1)

#### [X-ray manufacturer classification using convolutional neural networks (CNN)](https://www.linkedin.com/learning/hands-on-data-science-and-ai-for-healthcare/x-ray-manufacturer-classification-using-convolutional-neural-networks-cnn?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-data-science-and-ai-for-healthcare/x-ray-manufacturer-classification-using-convolutional-neural-networks-cnn?u=76281980&t=0)** - [Instructor] Let's have some fun with convolutional neural network. We'll use it to classify x-ray images by different manufacturers. This link will show more details about the datasets. The dataset is of shoulder implants by different manufacturers. We go ahead by downloading the dataset to a notebook using wget. Now, we unzip. If it's working well, you shall see inflating and individual filenames like these. Then we input the necessary modules for data preprocessing, visualization, and modeling. This is a very small dataset, and there are 597 images in total. The manufacturer names are in the filenames. So we create different variables named Cofield, Depuy, Tornier, and Zimmer filepaths. You can print to have a view of filenames in each variables. There are unequal numbers of files by each manufacturers in the total dataset. This will be taken into consideration when splitting the data into train and test sets. Let's go ahead and do that.
>
> **[1:35](https://www.linkedin.com/learning/hands-on-data-science-and-ai-for-healthcare/x-ray-manufacturer-classification-using-convolutional-neural-networks-cnn?u=76281980&t=95)** Split the data into train and test with 80% as the train and 20% as test. Verify the split by manufacturer.
>
> **[1:57](https://www.linkedin.com/learning/hands-on-data-science-and-ai-for-healthcare/x-ray-manufacturer-classification-using-convolutional-neural-networks-cnn?u=76281980&t=117)** And then combine into variables called train_data_filepaths and test_data_filepaths with 476 and 121 files, respectively. Create label names for both the train and test sets. For ease of manipulation, create two dataframes named Train_df and Test_df with two columns of data_filepaths and data_labels.
>
> **[2:40](https://www.linkedin.com/learning/hands-on-data-science-and-ai-for-healthcare/x-ray-manufacturer-classification-using-convolutional-neural-networks-cnn?u=76281980&t=160)** Visualize some of the data. As you can see here, the image is a truly radiograph of shoulder implants. Create train_generator and test_generator variables using ImageDataGenerator from [TensorFlow](../../Skills/Artificial%20Intelligence%20(AI)/TensorFlow.md).keras.preprocessing. If successful, you should see an output that says Found 476 validated image filenames belonging to four classes and 121 validated image filenames belonging to four classes for the test_generator. Go ahead and view more samples of the datasets in a grid view of five by five. For example, this image is from Cofield. This is from Depuy. This is from Zimmer.
>
> **[3:50](https://www.linkedin.com/learning/hands-on-data-science-and-ai-for-healthcare/x-ray-manufacturer-classification-using-convolutional-neural-networks-cnn?u=76281980&t=230)** You can inspect the image and label shape. After the data preprocessing, we go ahead to view the image classifier model using [convolutional neural networks](../../Skills/Artificial%20Intelligence%20(AI)/Convolutional%20Neural%20Networks%20(CNN).md), CNN. First, we define the number of classes which is four. Inspect our neural network. This is a basic model with convolutional max pooling and dense layers. Then we go ahead to compile our model using adam optimizer, inaccuracy as the metrics of choice. The model_summary shows we have more than eight million trainable parameters. Now, we train our model for 20 epochs. After training, the highest accuracy achieved is 0.4937. This means our model's predictive ability is even lesser than guessing. This is an expected outcome because of the size of our dataset. Let's attempt to augment our data and observe if there's an improvement in the model accuracy. We repeat the steps above and check the model accuracy before training. The accuracy is only 0.24.
>
> **[5:28](https://www.linkedin.com/learning/hands-on-data-science-and-ai-for-healthcare/x-ray-manufacturer-classification-using-convolutional-neural-networks-cnn?u=76281980&t=328)** Now, let's train the augmented dataset in 20 epochs, so. There was no improvement from the initial 0.4937 despite the data augmentation layer. When the model was applied to the test_generator, the accuracy was 0.4876. To show how this works, I included how to set the classification report for each class with class of manufacturer. The model could not derive any precision, recall, and f1 score for class zero, two, and three. But for class one, it has a precision score of 0.49, recall of one, and an f1 score of 0.66. This is interesting. And if you get how this work, you may have guessed by now that the class was more represented in the datasets than others. Some things we can try to improve are to train for more epochs, apply more augmentation techniques, and increase the training data or apply transfer learning.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [TensorFlow](../../Skills/Artificial%20Intelligence%20(AI)/TensorFlow.md) (1), [Convolutional neural networks](../../Skills/Artificial%20Intelligence%20(AI)/Convolutional%20Neural%20Networks%20(CNN).md) (1)
> **Code Identifiers:** test_generator (3), train_data_filepaths (1), test_data_filepaths (1), data_filepaths (1), data_labels (1)
> **Versions:** 0.4937 (2), 0.24 (1), 0.4876 (1), 0.49 (1), 0.66 (1)
> **Definitions:** is a  (3), is an  (1)
> **CLI Commands:** wget (1), unzip (1)
> **Env Vars:** cnn (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [X-ray manufacturer classification using transfer learning](https://www.linkedin.com/learning/hands-on-data-science-and-ai-for-healthcare/x-ray-manufacturer-classification-using-transfer-learning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-data-science-and-ai-for-healthcare/x-ray-manufacturer-classification-using-transfer-learning?u=76281980&t=0)** - [Instructor] Now we're going to learn how to use transfer learning to improve our model performance. Note that for this exercise we'll use the same dataset as the one we downloaded in the last video where we talked about CNNs. So here you'll need to run the data pre-processing and extra manufacturer classification using transfer learning subsections. First, we download a pre-trained model, ResNet-50 version two in this case in "Saving to variable code base" model. Then we create the model with the base model dense center part layers. If you check the model summary there are more than 24 million parameters only 557,956 at trainable parameters. So over 23 millions are non trainable. Then we compile with Adam optimizer and select accuracy as the matrix of choice. Before training, the model has an accuracy score of 0.438 on the test data.
>
> **[1:26](https://www.linkedin.com/learning/hands-on-data-science-and-ai-for-healthcare/x-ray-manufacturer-classification-using-transfer-learning?u=76281980&t=86)** After training for 20 epochs on our train data you can see the loss reducing and the final model accuracy is 0.947. On inspecting the classification report, class two didn't have any precision and recall but class zero, one, and three return scores for each, even if low. An activity to do is to compare the output here to the model built on the same data without transfer learning, as done in exercise 0302.

> [!info]- Semantic Content
>
> **Versions:** 0.438 (1), 0.947 (1)
> **Cross-References:** in the last (1), we talked about (1)
> **Warnings:** note that (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)


### 4. Exploratory Data Analysis Using Visualization

[↑ Back to Table of Contents](#table-of-contents)

#### [Use case: Diseases and medications text](https://www.linkedin.com/learning/hands-on-data-science-and-ai-for-healthcare/use-case-diseases-and-medications-text-24459174?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-data-science-and-ai-for-healthcare/use-case-diseases-and-medications-text-24459174?u=76281980&t=0)** - Diseases and medication, they have an interesting relationship. That's because the same medication can be used for range of diseases, and a disease can be treated by a range of medication, based on individual patients or availability. This use case will focus specifically on text visualization as a useful tool for exploratory data analysis. The final output we give is summarized and interactive overview of the dataset. This type of data is typically found in electronic health record systems, internet boards about diseases and medication, official drug reference publications, and curated data for research. Different people may be looking to derive insights from this type of data. Think health data scientists, researchers, pharmacovigilance experts, and pharmaceutical companies. This is an interesting case because the interdependence in the data makes it complex enough, there is a known baseline, so data interpretation is easier, and there is availability of training data. By the time we get to the end of this chapter, there's three short videos, including this one. You'll have learned text visualization techniques, like [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) clouds, how to implement interactive exploratory data analysis, and how to plot text versus text data
>
> **[1:36](https://www.linkedin.com/learning/hands-on-data-science-and-ai-for-healthcare/use-case-diseases-and-medications-text-24459174?u=76281980&t=96)** using a [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) library called text. Now, if you have ever had to create a chart or graph of data, you know how helpful those visualizations are, but you probably also know how tricky the process can be. What we'll go over in the next video is how to make the process faster and easier, especially for text data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **CLI Commands:** python (1), make (1)
> **Definitions:** is an  (1), is a  (1)
> **Cross-References:** in the next (1)
> **Speakers:** - diseases (1)

#### [Diseases and medications text visualization using word clouds](https://www.linkedin.com/learning/hands-on-data-science-and-ai-for-healthcare/diseases-and-medications-text-visualization-using-word-clouds?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-data-science-and-ai-for-healthcare/diseases-and-medications-text-visualization-using-word-clouds?u=76281980&t=0)** - [Instructor] We're going to generate [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) clouds to visualize the relationships between diseases and medications. We'll also go over options to customize the output. To get started, we need a sample dataset. You can read all about it from this link. So go ahead, download and unzip the dataset. Input the necessary libraries and modules. This data has to subset as train and test leads. Load and combine them into a single dataframe called medication_reviews_df. On inspection, we have a single dataframe with more than 200,000 instances in six columns.
>
> **[0:58](https://www.linkedin.com/learning/hands-on-data-science-and-ai-for-healthcare/diseases-and-medications-text-visualization-using-word-clouds?u=76281980&t=58)** There is a date column, the minimum date is April, 2008, and the maximum is September, 2017. So it spans over a period of nine years. To see some of the most prominent medications, let's create the word cloud. Some of the most popular medications such as ethinyl estradiol, norethindrone, Depo-Provera,
>
> **[1:30](https://www.linkedin.com/learning/hands-on-data-science-and-ai-for-healthcare/diseases-and-medications-text-visualization-using-word-clouds?u=76281980&t=90)** levonorgestrel are related to birth control. Anxiolytics like bupropion, clonazepam, citalopram, Zoloft.
>
> **[1:43](https://www.linkedin.com/learning/hands-on-data-science-and-ai-for-healthcare/diseases-and-medications-text-visualization-using-word-clouds?u=76281980&t=103)** Pain relievers like tramadol, gabapentin, and antifungals like metronidazole, miconazole, and tioconazole. Let's create another word cloud to visualize conditions. This may be indicative of some of the conditions people are willing to talk about online, or maybe they're just the most popular conditions. They include birth control, yeast infection, high blood pressure, chronic pain, panic disorder, smoking cessation, and depression. Maybe the sample dataset is representative indeed. Whatever conclusion, we can benefit from the visualization of data to arrive at them more quickly and with greater confidence.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (3)
> **CLI Commands:** unzip (1)
> **Code Identifiers:** medication_reviews_df (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Diseases and medications text visualization using Scattertext](https://www.linkedin.com/learning/hands-on-data-science-and-ai-for-healthcare/diseases-and-medications-text-visualization-using-scattertext?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-data-science-and-ai-for-healthcare/diseases-and-medications-text-visualization-using-scattertext?u=76281980&t=0)** - [Instructor] For this exercise, it's important that you run the data preprocessing and text visualization using scattertext subsections of the notebook. Scatter text is a [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) library that enables you visualize relationship between text data. In our case, diseases and medications. First, you run all the cells in the Data Pre-processing section. Then you create the corpus subject saved into a variable called Corpus from the condition and drug name columns. Now we create an ATML object, specify the medication of choice and declare all of the values not selected as all others. For example, this code is to visualize metoclopramide against all the conditions in the dataset. When you study the interactivity ML, you can observe the top frequent associated conditions are: Migraine, nausea, vomiting, GERD. This makes sense as metoclopramide is a popular antiemetic. You can also click around and interact with individual times in the visualization. You can go ahead and repeat the same for any medication of choice. This can be observed directly from the dataset
>
> **[1:36](https://www.linkedin.com/learning/hands-on-data-science-and-ai-for-healthcare/diseases-and-medications-text-visualization-using-scattertext?u=76281980&t=96)** or using the WordCloud from the previous chapter. If you include the Save SVG button and set it to true, you can download the image directly from the notebook.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **Env Vars:** atml (1), gerd (1), svg (1)
> **Definitions:** is a  (2)
> **CLI Commands:** python (1)
> **Cross-References:** previous chapter (1)
> **Exercise Files:** download the (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/hands-on-data-science-and-ai-for-healthcare/next-steps-24455885?u=76281980)


## Instructor

- [Wuraola Oyewusi](../../Instructors/Data%20Science/Wuraola%20Oyewusi.md)

## Path Context

### In [AI for Healthcare- Essentials for Technical Roles](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/AI%20for%20Healthcare-%20Essentials%20for%20Technical%20Roles.md)
← [Machine Learning Fundamentals for Healthcare](Machine%20Learning%20Fundamentals%20for%20Healthcare.md) | **4 of 6** | [Advanced AI- NLP Techniques for Clinical Datasets](../Artificial%20Intelligence%20(AI)/Advanced%20AI-%20NLP%20Techniques%20for%20Clinical%20Datasets.md) →

### In [Hands-On Healthcare Analytics](../../Paths/Data%20Science/Learning%20Paths/Hands-On%20Healthcare%20Analytics.md)
← [Machine Learning Fundamentals for Healthcare](Machine%20Learning%20Fundamentals%20for%20Healthcare.md) | **8 of 8**

### In [Python for Data Professionals in Healthcare](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Python%20for%20Data%20Professionals%20in%20Healthcare.md)
← [Python Data Analysis for Healthcare](Python%20Data%20Analysis%20for%20Healthcare.md) | **3 of 5** | [An Introduction to How Generative AI Will Transform Healthcare](../Artificial%20Intelligence%20(AI)/An%20Introduction%20to%20How%20Generative%20AI%20Will%20Transform%20Healthcare.md) →

## Appears In

- [AI for Healthcare- Essentials for Technical Roles](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/AI%20for%20Healthcare-%20Essentials%20for%20Technical%20Roles.md)
- [Hands-On Healthcare Analytics](../../Paths/Data%20Science/Learning%20Paths/Hands-On%20Healthcare%20Analytics.md)
- [Python for Data Professionals in Healthcare](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Python%20for%20Data%20Professionals%20in%20Healthcare.md)

---

[↑ Back to top](#)