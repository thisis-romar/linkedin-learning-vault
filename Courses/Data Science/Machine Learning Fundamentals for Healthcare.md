---
type: course
cssclasses:
  - lle-course
slug: machine-learning-fundamentals-for-healthcare
url: "https://www.linkedin.com/learning/machine-learning-fundamentals-for-healthcare"
duration_minutes: 96
duration: 1h 36m
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQGnyiQWZapb8w/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1719429863191?e=2147483647&amp;v=beta&amp;t=UjctZ-TdGGKEZBYHRbLQQGTfAU5xTiCsoOg7ohG5TjA"
linkedin_topic: Data Science
learning_paths:
  - '[[AI for Healthcare- Essentials for Technical Roles]]'
  - '[[Hands-On Healthcare Analytics]]'
  - '[[Python for Data Professionals in Healthcare]]'
prev_courses:
  - '[[An Introduction to How Generative AI Will Transform Healthcare]]'
  - '[[Descriptive Healthcare Analytics in R]]'
  - '[[An Introduction to How Generative AI Will Transform Healthcare]]'
next_courses:
  - '[[Hands-on Data Science and AI for Healthcare]]'
  - '[[Hands-on Data Science and AI for Healthcare]]'
  - null
path_nav: '[{"path":"AI for Healthcare- Essentials for Technical Roles","position":3,"total":6,"prev":"An Introduction to How Generative AI Will Transform Healthcare","next":"Hands-on Data Science and AI for Healthcare"},{"path":"Hands-On Healthcare Analytics","position":7,"total":8,"prev":"Descriptive Healthcare Analytics in R","next":"Hands-on Data Science and AI for Healthcare"},{"path":"Python for Data Professionals in Healthcare","position":5,"total":5,"prev":"An Introduction to How Generative AI Will Transform Healthcare","next":null}]'
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

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Machine%20Learning%20Fundamentals%20for%20Healthcare.md)

![Machine Learning Fundamentals for Healthcare](https://media.licdn.com/dms/image/v2/D560DAQGnyiQWZapb8w/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1719429863191?e=2147483647&amp;v=beta&amp;t=UjctZ-TdGGKEZBYHRbLQQGTfAU5xTiCsoOg7ohG5TjA)

# Machine Learning Fundamentals for Healthcare

> There’s an increased demand to integrate AI and machine learning workflows into many different business sectors. This is especially true in today’s unique and constantly evolving global healthcare landscape.In this course, instructor Wuraola Oyewusi provides an overview of how AI and machine learning can optimize healthcare processes, data analysis, health outcomes, and more. Along the way, gather

> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-fundamentals-for-healthcare) | 1h 36m
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Understanding machine learning in healthcare](#understanding-machine-learning-in-healthcare)
  - [What you should know](#what-you-should-know)
- [**1. Fundamentals of Machine Learning for Healthcare**](#1-fundamentals-of-machine-learning-for-healthcare) (14 videos)
  - [Machine learning, artificial intelligence, and data science](#machine-learning-artificial-intelligence-and-data-science)
  - [Applications of machine learning in healthcare](#applications-of-machine-learning-in-healthcare)
  - [How to think about machine learning in healthcare](#how-to-think-about-machine-learning-in-healthcare)
  - [Machine learning vs. rule-based programming in healthcare](#machine-learning-vs-rule-based-programming-in-healthcare)
  - [Types of machine learning in healthcare](#types-of-machine-learning-in-healthcare)
  - [Healthcare data types for machine learning](#healthcare-data-types-for-machine-learning)
  - [Features and labels in machine learning for healthcare](#features-and-labels-in-machine-learning-for-healthcare)
  - [Machine learning models and algorithms in healthcare](#machine-learning-models-and-algorithms-in-healthcare)
  - [Deep learning models and architecture in healthcare](#deep-learning-models-and-architecture-in-healthcare)
  - [Transfer learning and pretrained models in healthcare](#transfer-learning-and-pretrained-models-in-healthcare)
  - [Assessment metrics for machine learning models](#assessment-metrics-for-machine-learning-models)
  - [Tools and libraries for machine learning](#tools-and-libraries-for-machine-learning)
  - [Data privacy and ethics in healthcare machine learning](#data-privacy-and-ethics-in-healthcare-machine-learning)
  - [Career opportunities in machine learning for healthcare](#career-opportunities-in-machine-learning-for-healthcare)
- [**2. Machine Learning for Tabular Healthcare Data**](#2-machine-learning-for-tabular-healthcare-data) (6 videos)
  - [How to use a Google Colab Notebook](#how-to-use-a-google-colab-notebook)
  - [Explore the heart failure clinical record dataset](#explore-the-heart-failure-clinical-record-dataset)
  - [Classification task: Heart failure outcomes prediction with no feature scaling](#classification-task-heart-failure-outcomes-prediction-with-no-feature-scaling)
  - [Classification task: Heart failure outcomes prediction with feature scaling](#classification-task-heart-failure-outcomes-prediction-with-feature-scaling)
  - [Regression task: Predict the heart rejection fraction](#regression-task-predict-the-heart-rejection-fraction)
  - [Feature importance in regression tasks](#feature-importance-in-regression-tasks)
- [**3. Machine Learning for Tabular Healthcare Data: Unsupervised**](#3-machine-learning-for-tabular-healthcare-data-unsupervised) (2 videos)
  - [Clustering task: Localization data for person activity](#clustering-task-localization-data-for-person-activity)
  - [Dimensionality reduction: Localization data for person activity](#dimensionality-reduction-localization-data-for-person-activity)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Understanding machine learning in healthcare](https://www.linkedin.com/learning/machine-learning-fundamentals-for-healthcare/understanding-machine-learning-in-healthcare?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-fundamentals-for-healthcare/understanding-machine-learning-in-healthcare?u=76281980&t=0)** - Machine learning and healthcare, how do they work together? And what about [[Data Science]] and [[Artificial Intelligence (AI)|artificial intelligence]]? How do those relate to it? I will teach you the fundamentals of machine learning. We will explore how to implement machine learning specifically in healthcare context. We will look at the variety of use cases to demonstrate the power and versatility of machine learning. Hello, my name is Wuraola Oyewusi. I'm a data scientist and pharmacist. If you're curious about all this, you're in the right place. Let's get to work.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Science]] (1), [[Artificial Intelligence (AI)|Artificial intelligence]] (1)
> **Speakers:** - machine (1)

#### [What you should know](https://www.linkedin.com/learning/machine-learning-fundamentals-for-healthcare/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-fundamentals-for-healthcare/what-you-should-know?u=76281980&t=0)** - [Instructor] This is a fundamental course for both coders and non-coders. The first part of the course is very conceptual. We discuss the major terms and concepts of machine learning and some of the concerns and questions people have. So there is no need to code for that part. In the subsequent videos, however, we walk through, step by step, some common use cases for machine learning in healthcare. Therefore, to be able to code along where required, it is important to understand [[Python (Programming Language)|Python]] programming. If you're new to programming, a good place to get started is my [[Python for Health Sciences and Healthcare]] course on [[LinkedIn]] Learning.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (2), [[LinkedIn]] (1)
> **CLI Commands:** python (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 1. Fundamentals of Machine Learning for Healthcare

[↑ Back to Table of Contents](#table-of-contents)

#### [Machine learning, artificial intelligence, and data science](https://www.linkedin.com/learning/machine-learning-fundamentals-for-healthcare/machine-learning-artificial-intelligence-and-data-science?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-fundamentals-for-healthcare/machine-learning-artificial-intelligence-and-data-science?u=76281980&t=0)** - Machine learning, also referred to as ML, is often mentioned in the context of [[Data Science]] and [[Artificial Intelligence (AI)|artificial intelligence]]. Let's explore this connection. In this course, a machine refers to any system capable of processing information and performing tasks. This includes devices like computers and robots that use machine learning. And [[Algorithms]] are sets of instructions that computers follow to solve problems. Machine learning is focused on designing and using algorithms that learn from data without being explicitly programmed. It is a subfield of artificial intelligence. The focus of data science is to derive insights for [[Data-driven Decision Making]]. It is an interdisciplinary field. While machine learning is commonly used in data science, other techniques can be used. And AI is focused on creating intelligent systems that can reason, learn, and act autonomously. It is a broad field in computer science and encompasses different algorithms such as machine learning, search optimization, and knowledge representation. By now, we have an understanding of machine learning and its connection to data science and AI.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Science]] (4), [[Algorithms]] (3), [[Artificial Intelligence (AI)|Artificial intelligence]] (2), [[Data-driven Decision Making]] (1)
> **Definitions:** is a  (2), refers to (1), is an  (1)
> **Analogies:** such as (1)
> **Speakers:** - machine (1)

#### [Applications of machine learning in healthcare](https://www.linkedin.com/learning/machine-learning-fundamentals-for-healthcare/applications-of-machine-learning-in-healthcare?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-fundamentals-for-healthcare/applications-of-machine-learning-in-healthcare?u=76281980&t=0)** - Machine learning is powering different systems in healthcare already. In clinical care it's been used to support automated diagnostics like in the detection of breast cancer and mammograms, in CT scan analysis to identify and prioritize stroke cases, enabling earlier diagnoses. Machine learning is also applicable to treatment personalization. For example, it can analyze a tumor's genetic makeup data to identify potential target therapies and predict the patient's response to specific chemotherapy regimen based on their electronic health records. Machine learning is also supporting clinical decision support systems in cases like sepsis risk prediction alert system, based on [[Real-Time]], patient vital signs and laboratory reports, and the identification of potential large vessel occlusion in chest X-rays. Finally, in clinical applications, machine learning is also used in [[Predictive Analytics]], such as the early detection of patient deterioration using EHR data and the identification of patient at risk for hospital readmission. Machine learning has been applied in healthcare related research. In drug discovery, it is used to design and test new drug molecules and to analyze massive data sets
>
> **[1:35](https://www.linkedin.com/learning/machine-learning-fundamentals-for-healthcare/applications-of-machine-learning-in-healthcare?u=76281980&t=95)** to identify existing drugs that can be repurposed for new diseases. In clinical trial optimization, machine learning is used to streamline recruitment. This is done by analyzing electronic health record data to identify potential participants based on specific criteria, and also analyze data from tests leading to more successful clinical trials. In biomedical and genomics research, machine learning is used for genomic risk scoring for certain diseases, and analyze tumor DNA and RNA to identify actionable mutation and predict response to therapy. Machine learning power tools and techniques have also been used to find pattern in healthcare research literature, and simplify the research workflow. There are many non-clinical users of machine learning in healthcare. In administrative tasks, like appointment scheduling, it can automate processes, reducing wait time, and improving efficiency. Even in human resource management, machine learning can analyze employee data to recommend personalized [[Wellness]] programs, promoting employee health and wellbeing. It can automate medical coding in billing and identify fraudulent insurance claims, saving a lot in healthcare costs. Logistics, the backbone of efficient operations,
>
> **[3:09](https://www.linkedin.com/learning/machine-learning-fundamentals-for-healthcare/applications-of-machine-learning-in-healthcare?u=76281980&t=189)** has benefited from machine learning, from optimizing supply chain planning and predicting product demand to route planning for delivery vehicles. Patient experience, whether in person, outpatient or telemedicine, is important. Machine learning has been used to personalize these experiences leading to improved patient satisfaction and adherence to treatment plans. Additionally, it can analyze large volumes of patient feedback data to identify areas for improvement. So, as you can see, there is a bit of machine learning in healthcare for everyone.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Real-Time]] (1), [[Predictive Analytics]] (1), [[Wellness]] (1)
> **Env Vars:** ehr (1), dna (1), rna (1)
> **Analogies:** for example (1), such as (1)
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Speakers:** - machine (1)

#### [How to think about machine learning in healthcare](https://www.linkedin.com/learning/machine-learning-fundamentals-for-healthcare/how-to-think-about-machine-learning-in-healthcare?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-fundamentals-for-healthcare/how-to-think-about-machine-learning-in-healthcare?u=76281980&t=0)** - At its core, how should anyone involved in healthcare decision making think about machine learning? Machine learning is not a standalone entity. It's an integral part of software. Well-designed healthcare systems aim to seamlessly integrate it, treating it as a tool that enhances the capability of existing and new applications. If there's still a question about why machine learning is valuable in healthcare, the answer is simple. Healthcare is data rich. Machine learning enables processes that can and have transformed how we deliver care. While numbers often come to mind when thinking about data, healthcare data is diverse, from free text notes to complex medical images. This is where machine learning shines. It's able to analyze and extract insights from various data formats. While there is hype surrounding machine learning, it is important to remember that as demonstrated by the applications discussed earlier, it's not intended to replace healthcare professionals. Rather, it primarily functions as a decision support tool, empowering them to leverage data and technology to improve patient care. Machine learning models are a dynamic software component, continuously learning from new data and evolving their functionality over time. While this dynamic nature is beneficial,
>
> **[1:34](https://www.linkedin.com/learning/machine-learning-fundamentals-for-healthcare/how-to-think-about-machine-learning-in-healthcare?u=76281980&t=94)** it also means they can drift and degrade in performance as data pattern changes. Healthcare data is highly regulated due to the sensitive nature of personal information, and concerns about [[Privacy]] are valid. In practice, several methods mitigate these concerns. Close development systems where data and model development remain private, privacy preserving techniques like federated learning where data is trained remotely, and even the use of synthetic data for initial training. To minimize potential biases, ethical considerations are paramount when working with healthcare data. Therefore, it's highly encouraged that machine learning projects undergo the standard clinical research and implementation review by [[Ethics]] committee or the equivalent bodies. Explainability is vital in healthcare machine learning, given that many systems currently operate as black boxes, making their decisions opaque. Explainable AI helps to understand AI models and their decisions in practice. It is essential to prioritize explainable AI methods when choosing implementation techniques. While simple [[Algorithms]] often provide greater explainability, even complex models can be made interpretable using the right techniques.
>
> **[3:07](https://www.linkedin.com/learning/machine-learning-fundamentals-for-healthcare/how-to-think-about-machine-learning-in-healthcare?u=76281980&t=187)** Striking this balance ensures that healthcare professionals can understand and trust the models reasoning, leading to improved patient care. The goal of responsibly integrating machine learning into healthcare is to create the collaborative tool that empowers both patients and healthcare professionals, ultimately leading to improved patient outcomes. In a rapidly evolving world where technology plays a pivotal role in advancing various sectors, it's crucial for healthcare not to be left behind, but to embrace innovation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Privacy]] (2), [[Ethics]] (1), [[Algorithms]] (1)
> **Speakers:** - at (1)

#### [Machine learning vs. rule-based programming in healthcare](https://www.linkedin.com/learning/machine-learning-fundamentals-for-healthcare/machine-learning-vs-rule-based-programming-in-healthcare?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-fundamentals-for-healthcare/machine-learning-vs-rule-based-programming-in-healthcare?u=76281980&t=0)** - Our problem solved before machine learning techniques became widespread, rule-based [[Algorithms]] were used. In many systems they are complementary. Let's explore the difference between them. Machine learning algorithms learn from data to adapt and discover patterns, while rule-based algorithms rely on explicitly defined roles, lacking inherent learning capability. Machine learning algorithms adapt to changing data and knowledge over time, while rule-based programming is effective for well-established rules, but they require manual updates. Machine learning involves complex algorithm development requiring deep expertise. With rule-based programming, specific rules are used in straightforward manner, and they are easier to implement. Outcomes in machine learning may vary based on data, providing personalized insights. Outcomes in rule-based programming is consistent following predefined rules. Machine learning algorithms can handle large data in complex computation, which is scalable for peak data. With rule-based programming, the algorithms may struggle with large data or complex computation. Machine learning requires continuous data input for learning and improvement,
>
> **[1:34](https://www.linkedin.com/learning/machine-learning-fundamentals-for-healthcare/machine-learning-vs-rule-based-programming-in-healthcare?u=76281980&t=94)** while maintenance in rule-based programming involves updating or adding rules. To deepen our understanding of these approaches, let's explore different use case scenarios and compare our machine learning and rule-based approaches tackle the same problem. In breast cancer diagnosis, machine learning analyzes mammogram image features, such as pixel intensity, texture, and mass shapes, while rule-based approach uses predefined rules for specific features like mass size, density, and margins. In personalized cancer treatments, machine learning consider a wide range of data, including tumor mutation, gene expression, medical history, while in rule-based approach, genetic markers and their association with treatment response is the focus. For drug discovery, machine learning algorithms have the capability to consider molecular properties of potential drug candidates, their chemical structures, and biologic activity data. While in rule-based systems existing knowledge about drug targets and properties are used. For clinical trial optimization, machine learning algorithms are able to take into account a longer range of patient history, their demography, and genetic data. While in rule-based approach,
>
> **[3:08](https://www.linkedin.com/learning/machine-learning-fundamentals-for-healthcare/machine-learning-vs-rule-based-programming-in-healthcare?u=76281980&t=188)** predefined criteria based on demography and medical history is used to select trial participants. In a case like sepsis risk prediction, machine learning uses a mixture of vital signs like heart rates, respiration, temperature, lab values, like white blood cell counts, and demographic data to make this type of prediction. While in rule-based approach, only the predefined thresholds are considered. For administrative tasks like scheduling, machine learning approaches consider appointment history, patient preference, and are able to balance these with the resources available, while rule-based approaches use predefined rules and decisions based on historical data and organizational policy. Now that we have compared what machine learning and rule-based approaches will be like for the same healthcare scenario, you agree with me that this is complementary and not necessarily leaving a system for another.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (8)
> **CLI Commands:** make (1)
> **Analogies:** such as (1)
> **Speakers:** - our (1)

#### [Types of machine learning in healthcare](https://www.linkedin.com/learning/machine-learning-fundamentals-for-healthcare/types-of-machine-learning-in-healthcare?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-fundamentals-for-healthcare/types-of-machine-learning-in-healthcare?u=76281980&t=0)** - There are three major types of machine learning used in healthcare, and each one is best fit for certain contexts and application. Let's review how they fit in. [[Supervised Learning]], where specific outcomes are predicted based on labeled data. Unsupervised learning, where patterns are found in data without labeling the data. And [[Reinforcement Learning]], where the [[Algorithms]] learn by trial and error to optimize outcomes. In supervised learning, classification and regression algorithms are primarily used. An example of classification tasks is predicting whether a patient has pneumonia or not from just X-ray images. On the other hand, predicting the number of days before hospital readmission is an example of a regression task. While most machine learning used in healthcare is supervised, it has the limitation of the cost of labeling, as expert annotators are often required for this task. In unsupervised learning, clustering and association algorithms are primarily used. For example, you can identify patient groups with similar disease profile for clinical trials, or you can have it discover association between two different medical conditions. However, a limitation of this approach is the need for pattern validation,
>
> **[1:33](https://www.linkedin.com/learning/machine-learning-fundamentals-for-healthcare/types-of-machine-learning-in-healthcare?u=76281980&t=93)** such as determining the optimal number of clusters. In reinforcement learning, policy learning and decision are the key components. For instance, it can be used to personalize treatment plans in individual patients based on genomic data. Additionally, it can optimize resource allocation during drug discovery. However, a limitation of this approach is the technical expertise required to implement reinforcement learning methods effectively. We can infer by now that AI is not a perfect solution, not a replacement for healthcare providers. It is a tool, and like all tools, there are some contexts in which it is better suited than others. And often you need to weigh the cost and benefits of that application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Reinforcement Learning]] (3), [[Algorithms]] (3), [[Supervised Learning]] (2)
> **Analogies:** for example (1), such as (1), for instance (1)
> **Definitions:** is an  (1), is a  (1)
> **Speakers:** - there (1)

#### [Healthcare data types for machine learning](https://www.linkedin.com/learning/machine-learning-fundamentals-for-healthcare/healthcare-data-types-for-machine-learning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-fundamentals-for-healthcare/healthcare-data-types-for-machine-learning?u=76281980&t=0)** - There are different types of data in healthcare to which machine learning can be applied. If you've done any work in [[Data Science]], you know how important it is to match the right analysis in the right tool with the right dataset and question. Let's go through the healthcare data types that are ideal candidates for machine learning. We have clinical data such as electronic health or medical records. Now, those are comprehensive digital records containing patient demographics, medical history, diagnosis, medications, immunization, lab results, vital signs, progress notes, and more. Medical images obtained through x-rays, CT scans, MRIs, mammograms, and ultrasounds. Genomic data related to an individuals genetic makeup including DNA sequences, RNA expression patterns, and identification of genetic mutations associated with diseases and pharmacy data related to medication names, medication form, and dosage. You can also use data from clinical trial such as treatment outcomes, the effectiveness of different treatments producing insights into therapeutic efficacy, patient recruitment and selection of suitable participants, adverse event reports,
>
> **[1:35](https://www.linkedin.com/learning/machine-learning-fundamentals-for-healthcare/healthcare-data-types-for-machine-learning?u=76281980&t=95)** records of any undesirable experiences associated with the use of a medical product in a patient, study randomization and blinding. This is to prevent research outcomes from being influenced by plausible effects or researcher bias. Another application could be research data derived from sources like scientific [[Text Mining]], the extraction of useful information and insight from scientific literature, [[Data Integration]] and fusion, the combination of data from multiple sources to provide a more comprehensive understanding and literature mining and meta-analysis, systematic review and analysis of existing literature on a particular topic. Operational data related to administrative records like appointment, billing, insurance, and staff record. Logistic data from inventory and demand forecast as well as delivery and maintenance records. We also have various public healthcare data types. This includes disease surveillance data for targeted [[Public Health]] intervention, health behavior data to assess the effectiveness of public health intervention, environmental health data such as air or water quality, healthcare utilization data and policy evaluation used in assessing the impact of health policies,
>
> **[3:10](https://www.linkedin.com/learning/machine-learning-fundamentals-for-healthcare/healthcare-data-types-for-machine-learning?u=76281980&t=190)** Wearable and [[Internet of Things (IoT)|internet of things]] devices data are also sources of [[Real-Time]] healthcare data. This is an interesting and very dynamic space as these devices and the data they carry are changing all the time, as and the patient relationship to them. Some of the most common data captures are for physical activities such as steps taken and calories burned, biometric data, which includes sleep pattern, heart rate, and even location data used for tracking, mobility, and environmental exposure. Don't forget to consider the entirety of the [[Healthcare Industry]]. Manufacturing data is also a source of healthcare data that machine learning can be applied to, from production logs to machine health metrics, quality control data, supply chain and inventory data, and audit trail for [[Regulatory Compliance]] and process optimization. Another interesting source of health data is social media and online data, from disease-focused discussion boards, patient-reported outcomes and patient experience surveys, which helps to understand the quality of care from the patient and carers perspective. Let this be an invitation to think creatively. Data can come from many sources. In fact, you may be sitting on a pile of valuable data
>
> **[4:44](https://www.linkedin.com/learning/machine-learning-fundamentals-for-healthcare/healthcare-data-types-for-machine-learning?u=76281980&t=284)** and not even realize its potential.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Public Health]] (2), [[Data Science]] (1), [[Text Mining]] (1), [[Data Integration]] (1), [[Internet of Things (IoT)|Internet of things]] (1)
> **Analogies:** such as (4)
> **Env Vars:** dna (1), rna (1)
> **Definitions:** is an  (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - there (1)

#### [Features and labels in machine learning for healthcare](https://www.linkedin.com/learning/machine-learning-fundamentals-for-healthcare/features-and-labels-in-machine-learning-for-healtcare?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-fundamentals-for-healthcare/features-and-labels-in-machine-learning-for-healtcare?u=76281980&t=0)** - [Instructor] To successfully apply machine learning, it is important to understand some concepts. Let's start with variables. Variables are individual pieces of information used to describe and represent data points. In machine learning, they are usually classified as either features or labels. Features are the impute variables used by machine learning [[Algorithms]] to make predictions often represented by the capital letter X. Labels, labels are also known as outcomes or target. They are the values we want the models to predict, typically represented by the small letter y. The choice of machine learning algorithms is usually based on variable types. There are many subtypes of variables, but they can be broadly discussed under these three headings. Categorical features, which includes distinct groups or categories. Numerical features, which are typically represented by integers or real numbers. And text features, which are derive from text data and require special processing methods. When working with features, the same consideration you use for traditional data analysis are necessary here. Quality of data, ensuring the data is clean, relevant, and free of error is crucial for the performance of the model. Feature selection. Choosing the most relevant features can improve the model's performance. Domain expertise relevant here.
>
> **[1:35](https://www.linkedin.com/learning/machine-learning-fundamentals-for-healthcare/features-and-labels-in-machine-learning-for-healtcare?u=76281980&t=95)** Imagine building the model to predict diabetes without any indicator for blood sugar level label inaccuracy. Accurate labels are essential for [[Supervised Learning]] models as inaccuracies can lead to incorrect predictions. Machine learning is not magic. Bad data in, wrong predictions out. It is also common and useful to engineer features to be in the [[Forms]] that are useful to optimize model performance. This is an example of a dummy data set about diabetes. Across the table is a row and this is a column. Values a longer column typically belong to the same variable. The diabetes column is a target variable here, so that makes it deliver in this instance. While every other value can be assessed as impute variables, as you might expect, it makes sense to exclude values like patient ID from the model as they're not relevant in the prediction of diabetes. So in this instance, this is what the training dataset for diabetes will look like. These are all values from the previous table. And then we have our label, which is why, and this is a target variable. That means in this instance we want to predict if from the values provided to a model like this, can it predict if someone is diabetic or not?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (2), [[Supervised Learning]] (1), [[Forms]] (1)
> **Definitions:** is a  (4), known as (1), is an  (1)
> **CLI Commands:** make (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### [Machine learning models and algorithms in healthcare](https://www.linkedin.com/learning/machine-learning-fundamentals-for-healthcare/machine-learning-models-and-algorithms-in-healthcare?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-fundamentals-for-healthcare/machine-learning-models-and-algorithms-in-healthcare?u=76281980&t=0)** - A typical machine learning model, including those used in healthcare, is a combination of two things, algorithm, and data. [[Algorithms]] are mathematical foundations, or simply recipes, of our models learned from data. The choice of algorithm is dependent on the type of task. In machine learning tasks, data is usually split into two parts, the training dataset, and the test dataset. When selecting the training set that the model uses to learn, it is important that it is representative and relevant to the use case. And then you have the test set. The test set is used to evaluate the model's performance on previously unseen information. After all, if the model has seen all the data before, it can't claim it has learned effectively. In supervised machine learning, the task is either classification, where discrete outcomes, such as defined classes, are predicted. Or regression, where continuous outcomes, like numbers, are predicted. There are many classification algorithms. Tree-based ones, like decision tree, random forest, and gradient boosting. Support vector machines. And nearest neighbors, like k-nearest neighbors, KNN. Examples of regression algorithms are [[Linear Regression]], like simple linear regression, and regularized ones,
>
> **[1:38](https://www.linkedin.com/learning/machine-learning-fundamentals-for-healthcare/machine-learning-models-and-algorithms-in-healthcare?u=76281980&t=98)** like ridge regression and lasso regression. Bayesian regression. And on some techniques, like random forest regression and gradient boosting regression. In unsupervised machine learning, we have clustering algorithms that group similar data points. Partitioning clustering algorithms, like [[k-means clustering]]. Hierarchical clustering algorithms, like agglomerative clustering. And density-based ones, like db-scan. Density-based spatial clustering of algorithms with noise. Dimensionality reduction for reducing feature complexity is another class of unsupervised machine learning algorithms. Examples are principal component analysis, such as linear discriminant analysis. And then factor analysis, like exploratory factor analysis. [[Reinforcement Learning]] is the third major class of machine learning, where algorithms learn through trial and error. There are value-based ones, like Q-learning. Policy-based ones, like proximal policy optimization. And model-based ones, like the Monte Carlo Tree Search algorithm. All the examples above are only a subset of machine learning algorithms. You learn by experience and iteration on the best algorithm for your use case in healthcare.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (10), [[Linear Regression]] (2), [[k-means clustering]] (1), [[Reinforcement Learning]] (1)
> **Analogies:** such as (2)
> **Env Vars:** knn (1)
> **Definitions:** is a  (1)
> **Speakers:** - a (1)

#### [Deep learning models and architecture in healthcare](https://www.linkedin.com/learning/machine-learning-fundamentals-for-healthcare/deep-learning-models-and-architecture-in-healthcare?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-fundamentals-for-healthcare/deep-learning-models-and-architecture-in-healthcare?u=76281980&t=0)** - [[Deep Learning]] is a subset of machine learning, meaning they can be considered just like all other machine learning [[Algorithms]] for healthcare related tasks. It involves the use of [[Artificial Neural Networks]], ANN, to model and understand complex patterns in data. It is inspired by the interconnectedness in biology neural network, and the term deep in deep learning refers to the multiple layers through which the data is transformed. By now, we know all about machine learning. So what do deep learning models do better? Deep learning models can undo complex data sets and formats. Think of images from radiographs, videos, and sequences like clinical free text and speech. It requires leads to no [[Feature Engineering]]. So challenges like model performance due to feature scaling are mitigated. They are capable of being trained for transfer learning. That means they can be fine tuned on new but similar healthcare task. This can save a lot of computational costs. They are also capable of multimodal learning, integrating data from several sources such as imaging and electronic health records. Deep learning models are made up of layers
>
> **[1:33](https://www.linkedin.com/learning/machine-learning-fundamentals-for-healthcare/deep-learning-models-and-architecture-in-healthcare?u=76281980&t=93)** of computation characterized by their depth. Each layer transforms inputs data, optimizing them for the next layer. So a typical deep learning model. We have deep [[Neural Networks]] consisting of interconnected layers of artificial neurons for progressive feature extraction. Activation functions, which are algorithms to introduce non-linearity for learning complex relationships. Examples are rectified linear unit, radio, sigmoid, and hyperbolic tangent, tanh. Loss function to measure difference between predictions and actual labor during training, mean square error and cross-entropy are examples of loss functions. Optimizers, algorithms that are just weights and biases to minimize loss. Examples are stochastic gradient descent and Adam. Just like normal architecture, in deep learning architecture refers to the overall structure and organization of the neuron network, including the number and arrangement of layers and the connections between neurons. These are some of the most popular deep learning architectures. Convolutional neuro networks, CNN.
>
> **[3:06](https://www.linkedin.com/learning/machine-learning-fundamentals-for-healthcare/deep-learning-models-and-architecture-in-healthcare?u=76281980&t=186)** They are useful for image analysis, excelling in tasks like medical image classification and segmentation. Recurrent neural networks, RNNs, designed for sequential [[Data Processing]] suitable for analyzing sequences like time series, text and speech data. Long short-term memory networks, LSTM, a type of RNN, effective in task involving sequential data and long-term dependencies. [[Generative Adversarial Networks (GANs)|Generative adversarial networks]], GANs. Useful for generating new realistic data examples, applicable in task like synthetic medical data generation. And then transformers powering some of the most important chatbots you have probably used. Some of the challenges of using deep learning is data availability that require massive data to train from scratch. Model complexity. The higher the number of layers, the more complex the models are. They are also resource intensive in terms of computational cost and technical know-how, and the models tend to be bigger, which makes incorporating them into existing software solution workflow challenging.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Deep Learning]] (9), [[Algorithms]] (3), [[Neural Networks]] (2), [[Artificial Neural Networks]] (1), [[Feature Engineering]] (1)
> **Env Vars:** ann (1), cnn (1), lstm (1), rnn (1)
> **Analogies:** just like (2), such as (1)
> **Definitions:** is a  (1)
> **Speakers:** - deep (1)

#### [Transfer learning and pretrained models in healthcare](https://www.linkedin.com/learning/machine-learning-fundamentals-for-healthcare/transfer-learning-and-pretrained-models-in-healthcare?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-fundamentals-for-healthcare/transfer-learning-and-pretrained-models-in-healthcare?u=76281980&t=0)** - It is possible to pretrain [[Deep Learning]] models, and there are a few reasons to do this. You can save time and resources. You can even improve the model's performance. So let's establish what pretrained models are and how that and transfer learning can benefit you. Pretrained models are deep learning models trained on large datasets that have learned data features, patterns, and dependencies. The models are saved as weight. Transfer learning is the use of pretrained model as a starting point for new task. This is where fine-tuning comes in. Fine-tuning is the process of adapting pretrained models to a smaller, task-specific dataset, such as in healthcare. There are models trained on very large dataset that are well-established and proven to be useful for a range of tasks. They are called foundational models. They're also called base models and are often used as building blocks or reference points. Examples are VGG16, ResNet, Inception, and DenseNet. The domain from which the pretrained model originates from is called source and the domain for the task at hand is called target domain. Transfer learning has been effective in mitigating the challenges of deep learning in healthcare.
>
> **[1:36](https://www.linkedin.com/learning/machine-learning-fundamentals-for-healthcare/transfer-learning-and-pretrained-models-in-healthcare?u=76281980&t=96)** For example, the need for large and diverse datasets. Because of transfer learning, we can do more with smaller datasets. Reduced cost of [[Data Collection]] and labeling. Prevention of model over fitting on training data. And also the cost and technicality of computation. Training the deep learning model from scratch is costly. These are some examples of base models and the adaptation to healthcare: BERT, Bidirectional Encoder Representations from Transformers has been adapted in healthcare to form BioBERT and ClinicalBERT. RoBERTa, a Robustly Optimized BERT Pre-training Approach. There's the healthcare adaptation called BioMed-RoBERTa. GPT, Generative Pre-trained Transformer. There is BioGPT and MedGPT. Inception v3, there is CheXNet, which is its adaptation in healthcare. DenseNet, Densely Connected [[Convolutional Neural Networks (CNN)|Convolutional Neural Networks]]. There is CheXNet, DenseASPP, and DeNTNet in healthcare.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Deep Learning]] (4), [[Data Collection]] (1), [[Convolutional Neural Networks (CNN)|Convolutional neural networks]] (1)
> **Env Vars:** bert (2), vgg16 (1), gpt (1)
> **Definitions:** is called (2)
> **Analogies:** such as (1), for example (1)
> **Speakers:** - it (1)

#### [Assessment metrics for machine learning models](https://www.linkedin.com/learning/machine-learning-fundamentals-for-healthcare/assessment-metrics-for-machine-learning-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-fundamentals-for-healthcare/assessment-metrics-for-machine-learning-models?u=76281980&t=0)** - By now, you know all of our machine learning models. How do we know how good they are at tasks they are applied to? This is where evaluation comes in. In classification, we have matrix like accuracy. This is the percentage of correctly classified instances. It is calculated by the addition of true positives and true negatives divided by total sample size, to give a score between zero and one, with one being the highest accuracy. It is useful, but can be misleading for imbalanced data sets, as with rare diseases. Precision, which measures the proportion of true positives amongst predicted positives, the goal is to avoid false positives. It is calculated by true positives divided by true positives plus false positive to give a score between zero and one, with one being the highest. High precision ensures the model isn't making any false positive predictions. Recall, recall measures the proportion of actual positives that are correctly identified. High recall indicates the model isn't missing many true positives, and is also called sensitivity. F1 score is the harmonic mean of precision and recall. It combines precision and recall into a single metric, providing a balanced view of performance.
>
> **[1:37](https://www.linkedin.com/learning/machine-learning-fundamentals-for-healthcare/assessment-metrics-for-machine-learning-models?u=76281980&t=97)** It is also between values of zero and one, with one being the highest. Area under the receiving operating characteristic curve, called AUROC, evaluates a model's ability to distinguish between classes. Independent of the class distribution of the dataset, it represents the trade-off between true positive rate and false positive rate. An AUROC of one indicates perfect classification. While 0.5 indicates random guessing, it is effective for imbalanced datasets. For regression tasks, we have mean squared error, MSE, a measure of the average squared between predicted and actual values. It is sensitive to large errors, and lower MSE indicates better fit. Root mean squared error, RMSE, is the square root of MSE, interpretable in the same unit as the data. It emphasizes large errors without being overly sensitive to outliers. Mean absolute error, MAE, measures the average absolute difference between predicted and actual values. It is sensitive to large errors. R-squared score or coefficient of determination represent the proportion
>
> **[3:10](https://www.linkedin.com/learning/machine-learning-fundamentals-for-healthcare/assessment-metrics-for-machine-learning-models?u=76281980&t=190)** of the variance in the dependent variable that is predictable. Values closer to one indicate better fit. So in practice, what influences the choice of matrix? The type of task, you can explore multiple metrics related to your task type. You can also start with matrix used in similar projects, as found in scientific literature. The type of data, if the dataset is unbalanced or imbalanced, it is important to use evaluation metrics that are adapted for such behaviors. Explainability, explainability is important, especially in healthcare. Choosing metrics that align with this is crucial, and you may even need to sacrifice some technical accuracy for better interpretation. And beyond traditional metrics, evaluating the model's clinical utility in the real world healthcare setting is essential. This involves assessing its impact on patient outcomes, workflow efficiency, and cost effectiveness compared to standard practices. In classification tasks like diagnosing diseases, you also want to prioritize identifying true positives as insensitivity, and avoid false positive with specificity. In practice, we calculate multiple evaluation metrics
>
> **[4:43](https://www.linkedin.com/learning/machine-learning-fundamentals-for-healthcare/assessment-metrics-for-machine-learning-models?u=76281980&t=283)** for the same task. These metrics provide measurable values that allow us to compare different approaches and its rate on our models.

> [!info]- Semantic Content
>
> **Env Vars:** mse (3), auroc (2), rmse (1), mae (1)
> **Versions:** 0.5 (1)
> **Speakers:** - by (1)

#### [Tools and libraries for machine learning](https://www.linkedin.com/learning/machine-learning-fundamentals-for-healthcare/tools-and-libraries-for-machine-learning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-fundamentals-for-healthcare/tools-and-libraries-for-machine-learning?u=76281980&t=0)** - When thinking of machine learning tools and libraries, you consider the programming language, coding environment, and model deployment. They are not always interchangeable, so you need to have an understanding of which option is best for your needs. The three most popular languages use in machine learning are [[Python (Programming Language)|Python]], R and Julia. Python has the most extensive ecosystem support for machine learning task. R for [[Statistical Analysis]], and Julia is gaining traction for speed and efficiency. Machine learning code is written in integrated development environments, IDEs like Jupyter Notebooks, PyCharm, and R Studio, and text editors like VS Code and Sublime Text. Machine learning models are part of software and they are deployed on Cloud platforms like [[Google Cloud Platform (GCP)|Google Cloud]], Amazon SageMaker, [[Microsoft Azure]], on-premise servers, especially for [[Privacy]] consideration as in healthcare. And using containerization as with docker containers, which can package and isolate applications, simplifying deployment across different environments. In this course, we will be using Python-based Libraries for data preprocessing, manipulation, and visualization.
>
> **[1:38](https://www.linkedin.com/learning/machine-learning-fundamentals-for-healthcare/tools-and-libraries-for-machine-learning?u=76281980&t=98)** We will use libraries like NumPy, [[Pandas (Software)|Pandas]], Matplotlib. For machine learning [[Algorithms]], we have Scikit-learn, [[TensorFlow]], [[PyTorch]], and Transformers. For [[Natural Language Processing (NLP)|Natural Language Processing]], NLP, there are libraries like NLTK, [[spaCy]], and Gensim. Expertise requires that you develop skills in identifying useful datasets. These are some examples of sources to find datasets for machine learning task. Most of them are general repositories, but you can filter by healthcare. The UCI Machine Learning Repository, Zenodo, PhysioNet, Kaggle Dataset, Open Access Series of Imaging Studies, CDC WONDER, WHO Global Health Observatory, IBM Watson Health, data from your research. There are also public platforms to research, upload, interact with, and reuse Pretrained Machine Learning Models. You can also filter them by healthcare or clinical to find relevant models faster. Some of the popular ones are, but not limited to, [[Hugging Face]] Hub, PyTorch Hub, TensorFlow Hub, Kaggle Models and Cloud platforms and Custom Repositories.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (3), [[TensorFlow]] (2), [[PyTorch]] (2), [[Statistical Analysis]] (1), [[Google Cloud Platform (GCP)|Google cloud]] (1)
> **CLI Commands:** python (3), find (2), docker (1)
> **Env Vars:** nlp (1), nltk (1), uci (1), cdc (1), wonder (1)
> **Tools:** jupyter (1), pycharm (1), vs code (1), sublime (1)
> **Code Identifiers:** spacy (1)
> **Prerequisites:** you need to have (1)
> **Speakers:** - when (1)

#### [Data privacy and ethics in healthcare machine learning](https://www.linkedin.com/learning/machine-learning-fundamentals-for-healthcare/data-privacy-and-ethics-in-healthcare-machine-learning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-fundamentals-for-healthcare/data-privacy-and-ethics-in-healthcare-machine-learning?u=76281980&t=0)** - It's important to be aware of how machine learning is used in healthcare. To succeed in practice, understanding and implementing [[Data Privacy]] and ethical principles are important. Healthcare data is sensitive and protected on the regulations like EPA in the US and GDPR in Europe. To mitigate this, when you are handling healthcare data, you can use a couple of techniques like anonymization, pseudo-anonymization, and differentiate [[Privacy]]. It is also logical to follow data minimization principles in collecting and using only the minimum data necessary. [[Data Storage]] security measures such as encryption for data at [[Representational State Transfer (REST)|rest]] and in transit and strict access control are also important to prevent unauthorized and malicious actors. Audit trails and clear data ownership and sharing agreements should also be established in every healthcare system for machine learning. Regular monitoring of privacy pipeline and machine learning model performance is crucial and there should be a compliancy data breach response plan. In implementing your machine learning systems, including patients and other stakeholders, should be prioritized for their informed consent and perspective. Healthcare systems should also establish strong governance
>
> **[1:34](https://www.linkedin.com/learning/machine-learning-fundamentals-for-healthcare/data-privacy-and-ethics-in-healthcare-machine-learning?u=76281980&t=94)** and oversight mechanism to ensure responsible use of healthcare data in machine learning, balancing innovation with ethical consideration. Other approaches are the use of decentralized training, as in federated learning, where machine learning models are trained on decentralized devices or servers without sharing raw patient data. This mitigates privacy risk associated with [[Data Sharing]] and synthetic data documentation, which involves generating artificial data points to augment the training dataset. This allows the creation of diverse data without directly using sensitive patients information, thus contributing to privacy preservation. There are established ethical considerations when working with healthcare data, and it's important to integrate them throughout the development and deployment of machine learning models. Fairness, models are optimized to treat diverse patient population fairly, mitigating potential bias and discrimination. Transparency, explainable AI models and processes should be prioritized above every other technique. [[Accountability]], developers and stakeholders are accountable for the models impact on patients and the community and patient privacy remains paramount,
>
> **[3:10](https://www.linkedin.com/learning/machine-learning-fundamentals-for-healthcare/data-privacy-and-ethics-in-healthcare-machine-learning?u=76281980&t=190)** it must be continuously protected throughout the machine learning lifecycle.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Privacy]] (5), [[Data Privacy]] (1), [[Data Storage]] (1), [[Representational State Transfer (REST)|Rest]] (1), [[Data Sharing]] (1)
> **Env Vars:** epa (1), gdpr (1)
> **Analogies:** such as (1)
> **Warnings:** be aware (1)
> **Speakers:** - it (1)

#### [Career opportunities in machine learning for healthcare](https://www.linkedin.com/learning/machine-learning-fundamentals-for-healthcare/career-opportunities-in-machine-learning-for-healthcare?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-fundamentals-for-healthcare/career-opportunities-in-machine-learning-for-healthcare?u=76281980&t=0)** - Machine learning is best treated like an option in a toolbox, and how you use your tools depend on the problems you have to solve in your job. To that end, let's talk about some of the roles in healthcare that are related to machine learning. These are some roles in healthcare that are related to machine learning. Machine learning engineer. Machine learning engineers design and implement scalable machine learning systems for healthcare applications. Healthcare data scientists use statistical and machine learning [[Algorithms]] to analyze and develop models for healthcare data and derive actionable insights. Clinical informaticians integrate machine learning solutions into clinical workflows and electronic healthcare record systems. AI research scientists. In healthcare, AI research scientists conduct cutting-edge research in [[Artificial Intelligence (AI)|artificial intelligence]], machine learning, and healthcare informatics. They explore new algorithms and methodologies to address challenges in medical imaging, genomics, drug discovery, and personalized medicine. Biostatisticians and bioinformaticians apply statistical methods and computational techniques, like machine learning, to analyze biological and healthcare data. AI product manager. AI product managers
>
> **[1:33](https://www.linkedin.com/learning/machine-learning-fundamentals-for-healthcare/career-opportunities-in-machine-learning-for-healthcare?u=76281980&t=93)** lead the development and commercialization of AI-powered healthcare [[Microsoft Products|products]] and services. They define product vision, strategy, and roadmap based on market strengths, customer needs, and regulatory requirements. Data engineer. Healthcare data engineers build and maintain [[Data Pipelines]] and infrastructure to support machine learning in analytics initiative in healthcare. They collect, clean, and pre-process healthcare data from various sources, such as electronic health records, medical devices, and wearables. AI [[Ethics]] and compliance specialists develop and enforce ethical guidelines and best practices for the responsible use of AI in healthcare. They assess potential risk and biases associated with AI algorithms and models used in clinical [[Decision-Making]]. They also collaborate with legal experts, policy makers, and regulatory agencies to address the ethical and regulatory challenges related to AI in healthcare. [[Natural Language Processing (NLP)|Natural language processing]] engineer. NLP engineers focus on working with sequences, like free text and audio. For example, they extract structured data from structured clinical notes in electronic health records. [[Computer Vision]] engineers develop algorithms to analyze medical images, such as X-rays, MRIs, and CT scans, for diagnosis and treatment planning.
>
> **[3:09](https://www.linkedin.com/learning/machine-learning-fundamentals-for-healthcare/career-opportunities-in-machine-learning-for-healthcare?u=76281980&t=189)** They also implement computer vision systems for [[Real-Time]] image-guided tasks. These roles represent just a fraction of the possibility within machine learning in healthcare. The goal is that you identify your strengths and interests to discover how your unique skill sets can contribute to this dynamic field. The potential applications of machine learning in healthcare are vast and has a place for everyone to make a difference.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (4), [[Computer Vision]] (2), [[Artificial Intelligence (AI)|Artificial intelligence]] (1), [[Microsoft Products|Products]] (1), [[Data Pipelines]] (1)
> **Analogies:** such as (2), for example (1)
> **CLI Commands:** make (1)
> **Env Vars:** nlp (1)
> **Speakers:** - machine (1)


### 2. Machine Learning for Tabular Healthcare Data

[↑ Back to Table of Contents](#table-of-contents)

#### [How to use a Google Colab Notebook](https://www.linkedin.com/learning/machine-learning-fundamentals-for-healthcare/how-to-use-google-colaboratory-notebook?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-fundamentals-for-healthcare/how-to-use-google-colaboratory-notebook?u=76281980&t=0)** - [Instructor] In the next set of videos we will be coding along, and for that we are going to use the [[Google]] Colaboratory Notebook. To get this interface go to colab.research.[google.com](https://google.com). If you're logged on you can start working immediately. If not, there will be a prompt for you to log in. This is what the interface look like. You have options for the file. You can edit, view, insert, change runtime type. You can restart the runtime, disconnect it, different types of things. You have access to the tools, and you have access to help. To upload the dataset to the workspace on the left pane click on Files, select the upload sign, and click on your dataset. The time it takes for a dataset to be uploaded is dependent on the file size. As soon as the dataset is available you can click on the three dots. You can download it to your workspace, you can rename, delete, copy the file path, or refresh. Let's copy the file path and unzip it to our workspace. Shebang, unzip. If you're paying attention you can see the content of the zipped file is now available in the workspace. Through this course there are provided exercise files. If you prefer to upload the file directly click on File,
>
> **[1:36](https://www.linkedin.com/learning/machine-learning-fundamentals-for-healthcare/how-to-use-google-colaboratory-notebook?u=76281980&t=96)** Upload notebook, Browse, select the file and Open. Now you have access to the exercise file, and you can simply work along as I speak through this course. To run the cells click on this icon that looks like a play button that says Run cell, and now that cell has been run. You can also use Shift + Enter to run the cell, and that works too. I encourage you to work with me in the next set of videos. This is a hands-on course, and I'm looking forward to all the wonderful things that you will do with your learning.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (2)
> **UI Navigation:** click on (5), select the (2), go to (1)
> **CLI Commands:** unzip (2)
> **Cross-References:** in the next (2)
> **Exercise Files:** exercise files (1), exercise file (1)
> **URLs:** [google.com](https://google.com) (1)
> **Tools:** colab (1)
> **Definitions:** is a  (1)

#### [Explore the heart failure clinical record dataset](https://www.linkedin.com/learning/machine-learning-fundamentals-for-healthcare/explore-the-heart-failure-clinical-record-dataset?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-fundamentals-for-healthcare/explore-the-heart-failure-clinical-record-dataset?u=76281980&t=0)** - [Instructor] For this exercise, we will be using the Heart Failure Clinical Records Dataset from the UCI data repository. We'll copy the download link. And then input the data directly into our workspace using wget. Now that we have the dataset in our workspace, let's copy the file parts, and unzip the dataset using the unzip command. We can now go ahead and import [[Pandas (Software)|pandas]] as pd. This is the [[Python (Programming Language)|Python]] library that we will be using to process this data. The next step is to load the data into a pandas DataFrame called df by any name you prefer. pd.read_csv. The dataset has 299 rows and 13 columns. Now, let's find out more information about the columns using the df.info method. From the information, we can see the dataset has column names, like age, anemia, creatinine phosphokinase, diabetes status, ejection fraction, high blood pressure, platelets, serum creatinine, serum sodium, smoking, time, and death event.
>
> **[1:35](https://www.linkedin.com/learning/machine-learning-fundamentals-for-healthcare/explore-the-heart-failure-clinical-record-dataset?u=76281980&t=95)** It's not applicable to all values, but you can apply df.describe on the DataFrame to see the summary [[Statistics]] of each value. So you can see the count, the mean, the standard deviation, the 25th percentile, and the maximum value. You can also assess the statistics of each column separately. For example, for creatinine phosphokinase the maximum value is 7861. And it will check the minimum value. It's 23. The typical range is usually between 10 and 120 microgram per liter. Now that we have an overview of the dataset, we will practice further in future videos.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (2), [[Statistics]] (2), [[Python (Programming Language)|Python]] (1)
> **CLI Commands:** unzip (2), wget (1), python (1), find (1)
> **Code Identifiers:** read_csv (1)
> **Env Vars:** uci (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Classification task: Heart failure outcomes prediction with no feature scaling](https://www.linkedin.com/learning/machine-learning-fundamentals-for-healthcare/classification-task-heart-failure-outcomes-prediction-no-feature-scaling?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-fundamentals-for-healthcare/classification-task-heart-failure-outcomes-prediction-no-feature-scaling?u=76281980&t=0)** - In this video, we will learn how to implement classification in machine learning to predict if there'll be death or not due to heart failure in our sample dataset. To get started, remember to run all the code in this section, first. Input the necessary [[Algorithms]], like [[Logistic Regression]], decision tree, random forest classifier and matrix like accuracy score and classification, all from SKLN. Let me show you the head of the dataset again. So this is our dataset. The target Y in this dataset is death event. Zero means no death at follow up, and one means death. And the impute is every other column saved in X. So we're going to drop the death event column. And we must remember to specify that is on axis one, which means it should be dropped along the columns and not across the rows. In Y, we should have just the target, which is a zero or one. And in capital X, we should have all of the values apart from the deaths event column. When training machine learning models, the data needs to be split into the training and test subset. You can do that with the train test split function
>
> **[1:37](https://www.linkedin.com/learning/machine-learning-fundamentals-for-healthcare/classification-task-heart-failure-outcomes-prediction-no-feature-scaling?u=76281980&t=97)** from SKLN. Y train, Y test. Train test split the impute data, which is X, the labels Y, test size, which is the proportion of the data that you would like to use as test. It means the test size will not be exposed to the model during training. We will only use it to verify the efficiency of the model and then we have a random state. I'll specify 42 for that. This is to ensure that we have similar outcomes. If you check the X train split, you will see it has 269 rows that we selected randomly. And if you check the length of X test, it's 30, which is 10% as specified in the test size when we were splitting the data. Let's start by creating the logistic regression model. First, we save a logistic regression method into a variable code model. If you type model, you can verify it now contains the algorithm. Now we are going to fit the model to the X train and Y train model, dot feed, X train, Y train. This model that has not been fitted on the training data, we're going to use it to make predictions on the test data.
>
> **[3:14](https://www.linkedin.com/learning/machine-learning-fundamentals-for-healthcare/classification-task-heart-failure-outcomes-prediction-no-feature-scaling?u=76281980&t=194)** We received the predictions into variable code Y pred. So model.predict X test. So now based on the model we've trained, we have made predictions on the test data and this is what the model thinks the prediction for the test data is. Now let's calculate the accuracy score. Accuracy is going to compare the actual labels versus the predictions. So according to this model, the accuracy is 0.8. That means the model was correct eight out of 10 times or 80% of the time. Accuracy is useful to compare the performance of machine learning algorithms. So let's implement the same for random forest support vector key nearest labels in decision tree store. It's good practice to compare the performance of different models on your dataset. First, we're going to place all the models in the dictionary and I will write the follow loop to iterate over the models and use them for predictions and interpret their outcomes. So for model name, model in models.items, model.fit, X train, Y train, and then set the prediction into Y pred for accuracy,
>
> **[4:52](https://www.linkedin.com/learning/machine-learning-fundamentals-for-healthcare/classification-task-heart-failure-outcomes-prediction-no-feature-scaling?u=76281980&t=292)** accuracy score. And let's also assess the classification reports, which is more granular. So we're going to print out the following values, the model name. Include a placeholder, and then the classification report. Okay, so now we have the accuracy in classification for all these algorithms. For example, logistic regression like we did before has an accuracy of 0.8. Random forest has 0.7. Support vector has 0.6 and key nearest level has a accuracy of 0.53. In this instance, we included a classification report, so we have a precision of 0.77, recall of 0.94, one score of 0.85, and it's also divided for zero when there is no death due to heart failure and one when there was death due to heart failure. This is a small dataset and this is the first prediction. In the next video, we will process this data further and we'll learn more techniques to improve on our outcomes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Logistic Regression]] (4), [[Algorithms]] (3)
> **Versions:** 0.8 (2), 0.7 (1), 0.6 (1), 0.53 (1), 0.77 (1)
> **Env Vars:** skln (2)
> **Definitions:** is a  (2)
> **Best Practices:** remember to (1), good practice (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Analogies:** for example (1)

#### [Classification task: Heart failure outcomes prediction with feature scaling](https://www.linkedin.com/learning/machine-learning-fundamentals-for-healthcare/classification-task-heart-failure-outcomes-prediction-feature-scaling?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-fundamentals-for-healthcare/classification-task-heart-failure-outcomes-prediction-feature-scaling?u=76281980&t=0)** - [Instructor] In the previous video, we tested out different classification [[Algorithms]] on the Heart Failure Outcomes dataset. One of the ways to improve model performance is feature scaling. This means we acknowledge the possibility of machine learning models giving more weight in decisions to features with larger numbers. So, we scale all the values to a similar range, such as between zero and one. To get started, remember, run all the code in the Explore the Heart Failure Clinical Record Dataset section. We will start by importing all the necessary libraries. The necessary libraries are the same as the last video, except StandardScaler from preprocessing, which is very important in this chapter. This is a view of the dataset again. df.head(). You can access all the column names in the DataFrame by doing df.columns. The target variable y is DEATH_EVENT. So df, then we specify DEATH_EVENT. And the impute is capital X with every value in the DataFrame except DEATH_EVENT. So let's remove that. Now we split the data into train and test set. X_train, X_test. y_train, y_test.
>
> **[1:32](https://www.linkedin.com/learning/machine-learning-fundamentals-for-healthcare/classification-task-heart-failure-outcomes-prediction-feature-scaling?u=76281980&t=92)** train_test_split. X, y, the test_size, 0.1, and random_states, that's just 42. For scaling, we will use StandardScaler from a scaler. So let's save the StandardScaler method into a variable called scaler. Now, we will fit_transform the scaler on the training data and save into variable called X_train_scaled. scaler.fit_transform(X_train). For the test data, we only need to transform, no need to fit. So X_test_scaled = scaler.transform(X_test).
>
> **[2:24](https://www.linkedin.com/learning/machine-learning-fundamentals-for-healthcare/classification-task-heart-failure-outcomes-prediction-feature-scaling?u=76281980&t=144)** Now we'll place all the algorithms in a dictionary called models. Now let's read through the models on the test data and print the accuracy and classification report for each one. So we'll write for model_name, model in models.items. If model name is not equal to Decision Tree.
>
> **[2:55](https://www.linkedin.com/learning/machine-learning-fundamentals-for-healthcare/classification-task-heart-failure-outcomes-prediction-feature-scaling?u=76281980&t=175)** model.fit(X_train_scaled,y_train).
>
> **[3:03](https://www.linkedin.com/learning/machine-learning-fundamentals-for-healthcare/classification-task-heart-failure-outcomes-prediction-feature-scaling?u=76281980&t=183)** And then we have X_test, X_test_scaled.
>
> **[3:14](https://www.linkedin.com/learning/machine-learning-fundamentals-for-healthcare/classification-task-heart-failure-outcomes-prediction-feature-scaling?u=76281980&t=194)** For every other model, model.fit(X_train,y_train).
>
> **[3:28](https://www.linkedin.com/learning/machine-learning-fundamentals-for-healthcare/classification-task-heart-failure-outcomes-prediction-feature-scaling?u=76281980&t=208)** y_pred call model.predict(X_test_used).
>
> **[3:38](https://www.linkedin.com/learning/machine-learning-fundamentals-for-healthcare/classification-task-heart-failure-outcomes-prediction-feature-scaling?u=76281980&t=218)** Accuracy is accuracy_score(y_test,y_pred).
>
> **[3:50](https://www.linkedin.com/learning/machine-learning-fundamentals-for-healthcare/classification-task-heart-failure-outcomes-prediction-feature-scaling?u=76281980&t=230)** Report, classification_report(y_test,y_pred).
>
> **[4:02](https://www.linkedin.com/learning/machine-learning-fundamentals-for-healthcare/classification-task-heart-failure-outcomes-prediction-feature-scaling?u=76281980&t=242)** So let's print out the values. So from this code, what we are trying to say is that there should be an iteration over all the model names, fitting them to the trained data, and predicting on the test data. In this code, we made an exception for Decision Tree because we do not want to use the scaled version of the data, so we use the data directly for Decision Tree. So now we have other outcomes this time different from the first time. If you remember from the first video, the accuracy for [[Logistic Regression]] was about 0.8, but this time around is 0.77, but there's been an improvement in the performance of all other values. For example, Random Forest here has a 0.70, which was way lower the last time. Support Vector has 0.77. And K-Nearest Neighbor has 0.67. I think it was just about 0.5 in the last video. The difference between the last video and now is because we scaled the values in this time and it showed an improvement in the model performance. A great exercise for you is to compare the classification report for each algorithm from the previous video with this. You can share your perspective and findings in the Q&A section.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (2), [[Logistic Regression]] (1)
> **Code Identifiers:** y_train (3), y_test (3), y_pred (3), fit_transform (2), train_test_split (1)
> **Versions:** 0.77 (2), 0.1 (1), 0.8 (1), 0.70 (1), 0.67 (1)
> **Env Vars:** death_event (3)
> **Cross-References:** previous video (2), in the last (1)
> **Analogies:** such as (1), for example (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Regression task: Predict the heart rejection fraction](https://www.linkedin.com/learning/machine-learning-fundamentals-for-healthcare/regression-task-predict-heart-ejection-fraction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-fundamentals-for-healthcare/regression-task-predict-heart-ejection-fraction?u=76281980&t=0)** - [Instructor] In this chapter, we will practice a regression task in machine learning. Using the Heart Failure Clinical Records dataset, we will attempt to predict a continuous variable like the heart ejection fraction. First, download the dataset. Using wget into your workspace. The dataset is zipped. You can infer that from the file name. So let's unzip the dataset into our workspace using unzip. Now, let's import the necessary libraries, like [[Pandas (Software)|pandas]], sklearn, matplotlib, and seaborn. The [[Algorithms]] that we're going to use in this chapter are LinearRegression, DecisionTreeRegressor, RandomForestRegressor, and we have matrix like mean_squared_error and r2_score. For visualization, we use matplotlib and seaborn. Now let's go ahead and load the dataset into a pandas data frame called df. You can choose any other variable name. Rate CSV. And then we include the file part to the CSV file.
>
> **[1:30](https://www.linkedin.com/learning/machine-learning-fundamentals-for-healthcare/regression-task-predict-heart-ejection-fraction?u=76281980&t=90)** This is a dataset. There are 299 rows in 13 columns. In this instance, a target variable is the ejection fraction of the heart, and the values are continuous. Let's assess all the column names using df.columns. We use all the column values except death event and ejection fraction. So our training data is x equal df, and I'll just remove the columns that we do not want to be part of the training data, which is death event and ejection fraction. The label is y, which is the target this time, and that is ejection_fraction, df square bracket ejection_fraction. Now we are going to split the data into the training and test sets. X_train, x_test. Y_train, y_test. Using train_test_split, test_size. This is the proportion of the data that should be kept apart as the test set. We are specifying 0.1, which is 10% of this dataset. And then random_states. The random_states is to ensure
>
> **[3:02](https://www.linkedin.com/learning/machine-learning-fundamentals-for-healthcare/regression-task-predict-heart-ejection-fraction?u=76281980&t=182)** that you and I get similar values. We will be using three algorithms, LinearRegression, DecisionTreeRegression, and RandomForestRegression. Let's take them into a dictionary called models. Now we are going to write a loop to feed the models to the test data and save the outcomes into variable code predictions. This is an iteration over the models in the model list to feed the models to the training data and then predict, and then make predictions on the test dataset. To evaluate this model's performance, it's a regression model, we are using mean_squared_error and the r2_score. Let's see what the outcomes look like. We now have the mean_squared_error and the r2_score for [[Linear Regression]]. In this instance, it's 104.50, and the r2 is 0.08. Now let's visualize the actual ejection fraction versus the predicted ejection fraction by each algorithms. Plt.figure. A figure size of 12 by eight. For model_name, y_pred in predictions.
>
> **[4:39](https://www.linkedin.com/learning/machine-learning-fundamentals-for-healthcare/regression-task-predict-heart-ejection-fraction?u=76281980&t=279)** Remember we saved all the outcomes into a dictionary called predictions. Now lets assess it. Then we use seaborn which is sns here to plot the scatterplot. Next is y_test, y is y_pred. Y_test are the original labels, and the y_pred are the predicted labels. And then this time around, the label of our scatter plot will be the model_name. It's good practice to give proper titles to your plot. So plt.title, regression model predictions actual.
>
> **[5:30](https://www.linkedin.com/learning/machine-learning-fundamentals-for-healthcare/regression-task-predict-heart-ejection-fraction?u=76281980&t=330)** Meaning the actual values versus predicted ejection fraction. We want the label that says actual ejection fraction. And on the y axis, predicted ejection fraction.
>
> **[5:57](https://www.linkedin.com/learning/machine-learning-fundamentals-for-healthcare/regression-task-predict-heart-ejection-fraction?u=76281980&t=357)** Now we have a plot of our predictions. The blue dots are for linear regression, and the orange ones are for decision tree regression, and the green ones are for random forest regression. So to read this chart, on the y axis, we have the predicted ejection fraction, and here we have the actual ejection fraction. So in this instance, the actual ejection fraction is 20. Our model's linear regression is predicting about 38, while decision tree thinks it's 40, and then the random forest thinks it's maybe about 42. Well, in this instance, the actual value is 30 and the decision tree thinks it's 20. So remember that we have a very small dataset, so just about 299 values. In practice, you need a bigger dataset so that your models can learn better. But at the end of this, you should have an intuition of how this works and how to interpret your own results when using models like this.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (3), [[Linear Regression]] (3), [[Pandas (Software)|Pandas]] (2)
> **Code Identifiers:** mean_squared_error (3), y_pred (3), ejection_fraction (2), y_test (2), random_states (2)
> **CLI Commands:** unzip (2), wget (1), make (1)
> **Versions:** 0.1 (1), 104.50 (1), 0.08 (1)
> **Env Vars:** csv (2)
> **Definitions:** is a  (1), is an  (1)
> **Exercise Files:** download the (1)
> **Best Practices:** good practice (1)

#### [Feature importance in regression tasks](https://www.linkedin.com/learning/machine-learning-fundamentals-for-healthcare/feature-importance-in-regression-task?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-fundamentals-for-healthcare/feature-importance-in-regression-task?u=76281980&t=0)** - [Presenter] You can investigate feature importance in machine learning. For example, in the heart ejection prediction, which features contributed the most and in what order to the model decision? Remember to run the first section of this code to get started. For the decision tree model, let's extract and visualize the feature importances. So for model name, model in models.items. If tree model name assess the feature importances, that means that we are focusing strictly on our only model that has tree in its name, which is decision tree, and then, so this is how to assess it. You assess the feature importances. You extract the names, and then you put them in a data frame, and in that data frame, sort the values so that you can move from highest to lowest and then visualize. According to the model that we trained in the last video, the decision tree regression, these are the feature importances and the variable, the feature that the decision tree placed more value on is time. And then creatinine phosphokinase, age, and it placed the least emphasis on sex and diabetes. So this is how the decision tree made its own decision.
>
> **[1:36](https://www.linkedin.com/learning/machine-learning-fundamentals-for-healthcare/feature-importance-in-regression-task?u=76281980&t=96)** Let's look at all the [[Algorithms]] and how they made theirs. For [[Linear Regression]], you can assess the coefficients. Let's do a quick training and extract the coefficients. Linear model, that's the name of our variable. And then linear regression. Then linear model dot fit, train data, y_train. Just the same way we extracted the importances of the decision tree model, we can extract the coefficient of linear model using linear model dot coef, underscore. That's C-O-E-F underscore. The same process to extract the column names, put them in a data frame so that it's tidy. Let's look at the same order. So for the linear model, the feature with the highest importance is anemia. And it also place the least importance on sex, smoking, diabetes, eye pressure. But rather than times like the decision tree, it placed the highest emphasis on anemia, serum sodium, and serum creatinine. It didn't place as much emphasis on the creatinine phosphokinase. Let's visualize this. Explicit in the figure, PLT, the figure, fixed size. Fixed sizes are adjustable. This time around we are going for a 10 by 6,
>
> **[3:10](https://www.linkedin.com/learning/machine-learning-fundamentals-for-healthcare/feature-importance-in-regression-task?u=76281980&t=190)** meaning it's going to have a width of 10 and a height of 6. We will plot it with SMS. SMS is C bond. Let's put it in a bar plot. What we care about this time around our X values are going to be the coefficient and the Y value will be the feature. The data is coefficient TF. That's this data frame. A good title for our plot would be PLT title, linear regression, coefficient, ejection fraction, prediction. And now we can do PLT dot show. So this is what the linear regression coefficient look like as how the linear regression model made decision related to the ejection fraction. So as I've said before, it places emphasis on anemia, serum sodium, and serum creatinine. So this is how this model is thinking about this. In the previous video, we have seen the effect of feature scaling. What if we scaled the features with the most important feature change? Let's look at that first. Let's import a standard scaler
>
> **[4:42](https://www.linkedin.com/learning/machine-learning-fundamentals-for-healthcare/feature-importance-in-regression-task?u=76281980&t=282)** from sklearn, standard scaler. So X train, scaled, scaler dot fits transform. We only fits transform on the training data. And then for the test data, X test, scaled. We only transform, we don't need to fit again since the expectation is that the format of the train and the test data is the same. X test. So we will use exactly the same code that we used above but this time around on the scaled data. When the model was scaled in a way that make the features to have a more balance, the feature with the highest contribution is serum sodium and then we have platelet here and now linear regression is also prioritizing time. It's prioritizing age, and then it's prioritizing different things. This is to show you the effect of scaling your data and why it's an efficient tool in improving your model performance. So let's visualize this so it's clearer. So this is our new visualization. It's the same data. The only difference is that it's now scaled. If you compare the images for the unscaled versus scaled, there are differences in the coefficient or feature importances.
>
> **[6:16](https://www.linkedin.com/learning/machine-learning-fundamentals-for-healthcare/feature-importance-in-regression-task?u=76281980&t=376)** For example, in unscaled, anemia was the highest while for the scaled, serum sodium was the highest. A good task to practice is to make further comparison in the output and share your perspective in the community question and answer section.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linear Regression]] (6), [[Algorithms]] (1)
> **Env Vars:** plt (3), sms (2)
> **CLI Commands:** make (2)
> **Cross-References:** in the last (1), previous video (1)
> **Analogies:** for example (2)
> **Code Identifiers:** y_train (1)
> **Definitions:** means that (1)
> **Best Practices:** remember to (1)


### 3. Machine Learning for Tabular Healthcare Data: Unsupervised

[↑ Back to Table of Contents](#table-of-contents)

#### [Clustering task: Localization data for person activity](https://www.linkedin.com/learning/machine-learning-fundamentals-for-healthcare/clustering-task-localization-data-for-person-activity?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-fundamentals-for-healthcare/clustering-task-localization-data-for-person-activity?u=76281980&t=0)** Unsupervised machine learning techniques like clustering are useful to find general patterns in data. In this exercise, we will cluster localization data for personal activity based on location data. First, let's download the data set into a notebook using "wget". And then unzip the dataset. We can then go ahead and input the necessary modules and libraries, like [[Pandas (Software)|Pandas]], NumPy, StandardScaler, K-Means, Seaborn, and Matplotlib. Now, let's do the dataset into a data frame called "df = pd.read_csv" The file part. We are going to specify that the editor is none. That means there are no label names yet, so this is what our data set look like. Now we will specify and assign the column names. The column names are available on the original dataset page. This is a list of the column names.
>
> **[1:41](https://www.linkedin.com/learning/machine-learning-fundamentals-for-healthcare/clustering-task-localization-data-for-person-activity?u=76281980&t=101)** Now we can assign them to df.columns, column names. When we check the data firm now using DF.head, all the columns now have specific names. Now we will define the columns of interest in saving to a variable called capital X_clustering. The variables that we care about this time, they're the coordinates. We are going to standardize the features by scaling it with standard scaler. Let's define a variable code scaler clustering,
>
> **[2:39](https://www.linkedin.com/learning/machine-learning-fundamentals-for-healthcare/clustering-task-localization-data-for-person-activity?u=76281980&t=159)** which contains standard scaler and then x clustering scaled is going to be scaler clustering fit transform, x clustering. We will be using k-means, a popular clustering algorithm to cluster the data points into six. Let's define k-means. Number of clusters, six and a random state to keep the values as similar as possible. Now we will go ahead and create a new column containing the cluster. Each data point is predicted to be part of DF cluster k-means kmeans.fit_predict, X clustering scaled. Let's see if that has been successfully completed. Df.head. Okay, now we truly have a new column that contains the possible cluster that the model believes that the values in the role belong to. For example, row zero is taught to belong to cluster one. Let's have a better view by visualizing the data point PLT figure fig size.
>
> **[4:18](https://www.linkedin.com/learning/machine-learning-fundamentals-for-healthcare/clustering-task-localization-data-for-person-activity?u=76281980&t=258)** Remember that you can always adjust the figure size, 16, six. And then we like a color coded scatterplot, PLT, the subplot one to one, sms.scatterplot X is X coordinate. Y equal Y coordinate. And then we want the hue of this scatter plot to be the cluster key means. We can specify different pallets. Let's use vary this. If no pallet is specified, it's just going to use a default one. This is just to let you be aware that you can always change that value and a good title for upload to be
>
> **[5:39](https://www.linkedin.com/learning/machine-learning-fundamentals-for-healthcare/clustering-task-localization-data-for-person-activity?u=76281980&t=339)** [[k-means clustering]] for activity dataset. This is going to take a bit because it's a pretty large dataset. So this is the the visualization for the person activity dataset and we had an initial assumption that we wanted to see the location of whatever people are up to in six clusters, and this is what it looks like. You can fine tune this if you think that is this going to do better? Maybe if it's just four clusters. A good activity for you is to vary the number of clusters and see the patterns that you find in the dataset. You can share your findings in the community Q and A.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (1), [[k-means clustering]] (1)
> **CLI Commands:** find (2), wget (1), unzip (1)
> **Code Identifiers:** read_csv (1), fit_predict (1)
> **Env Vars:** plt (2)
> **Exercise Files:** download the (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Warnings:** be aware (1)

#### [Dimensionality reduction: Localization data for person activity](https://www.linkedin.com/learning/machine-learning-fundamentals-for-healthcare/dimensionality-reduction-localization-data-for-person-activity?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-fundamentals-for-healthcare/dimensionality-reduction-localization-data-for-person-activity?u=76281980&t=0)** - [Instructor] One of the ways to present data in a more compact way is dimensionality reduction. For example, the localization data has three dimensions for the location data. We can reduce the dimension to two using [[Algorithms]] like principal component analysis and visualize them. To get started, remember to run the code in the preceding section. Now, let's see what the dataset look like. df.info. This dataset has more than 164,000 entries and it has a column values like the sequence name, tag identifier, the timestamp of when the activity was done, the date, and then the coordinates, which we're interested in. Now we will import PCA from sklearn.decomposition, import PCA. We will now save the three coordinates into a variable called x_dim_reduction. DataFrame, X coordinate, Y coordinate, and Z coordinate.
>
> **[1:09](https://www.linkedin.com/learning/machine-learning-fundamentals-for-healthcare/dimensionality-reduction-localization-data-for-person-activity?u=76281980&t=69)** We are going to scale the dataset using standard scaler. Scaler_dim_reduction, StandardScaler. So x_scaled_dim_reduction, which is the scaled value of our dataset, fit_transform. Now let's call PCA function and specify two components. We'll save into a variable called pca. n_components. We will now apply PCA to the values that we have scaled, and saving to a variable called x_pca, pca.fit_transform, x_scaled_dim_reduction. If you check x_pca, you should now see a two-dimensional array. Let's add the principal components to the DataFrame. df, PCA_Component_1. x_pca, and the first part of the reduction.
>
> **[2:43](https://www.linkedin.com/learning/machine-learning-fundamentals-for-healthcare/dimensionality-reduction-localization-data-for-person-activity?u=76281980&t=163)** We'll repeat the same thing for the second component.
>
> **[2:54](https://www.linkedin.com/learning/machine-learning-fundamentals-for-healthcare/dimensionality-reduction-localization-data-for-person-activity?u=76281980&t=174)** Now let's look at the DataFrame again and see if anything has changed. Yes, something has changed about the DataFrame. We now have columns containing the first component of the principal component analysis and the second component. In literal terms, these three values, X coordinate, Y coordinate, and Z coordinate, are now represented by these two values, Component_1 and Component_2 of the PCA. To give more context, let's visualize the principle component of the dataset. plt.figure, figsize, 12 by eight. Remember you can adjust the size of the figure size, and then sns, scatterplot. So we are visualizing the principal components, one and two, PCA_Component_1, and y is PCA_Component_2.
>
> **[4:09](https://www.linkedin.com/learning/machine-learning-fundamentals-for-healthcare/dimensionality-reduction-localization-data-for-person-activity?u=76281980&t=249)** The hue of the scatter is the activity. That's what we care about. Hue is activity. And then, let's specify a palette. If no palette is specified, a default one will be used. This scatterplot is going to get the data from df. A good title for this, plt.title, is PCA_for_dimensionality reduction, of activity data. plt.xlabel, on the X-axis, we will have the principal component one,
>
> **[5:05](https://www.linkedin.com/learning/machine-learning-fundamentals-for-healthcare/dimensionality-reduction-localization-data-for-person-activity?u=76281980&t=305)** and on the Y-axis, we will have a principle component two.
>
> **[5:16](https://www.linkedin.com/learning/machine-learning-fundamentals-for-healthcare/dimensionality-reduction-localization-data-for-person-activity?u=76281980&t=316)** For the legend, that's what the labeling will look like. We want the title, which is the activity. This is quite a [[Big Data]] set, so we want smaller font sizes, so we are going to specify that, make this small. And then we want it to be anchored to a particular spot. So bbox_to_anchor,
>
> **[5:56](https://www.linkedin.com/learning/machine-learning-fundamentals-for-healthcare/dimensionality-reduction-localization-data-for-person-activity?u=76281980&t=356)** 1.05, one. We can also specify the specific place to, the specific location to place the legend. So loc upper left.
>
> **[6:18](https://www.linkedin.com/learning/machine-learning-fundamentals-for-healthcare/dimensionality-reduction-localization-data-for-person-activity?u=76281980&t=378)** plt.show.
>
> **[6:28](https://www.linkedin.com/learning/machine-learning-fundamentals-for-healthcare/dimensionality-reduction-localization-data-for-person-activity?u=76281980&t=388)** Okay, so now we have the image of dimensionality. And this may not look like a big deal, but this visualization is from more than 164,000 rows, and that is a big deal. And we have successfully shown the available activities from the data, we know there is data about walking, sitting down, sitting, standing up from sitting, falling, lying, standing up from lying, standing up from sitting on the ground. An important thing to note when using those variables is to show that all these variables that you can play around with, for example, you can change the location of this legend, you can change the size, you can make the font size bigger. It's code and I encourage you to be confident to play around. That's the only way to get better at this. So play around with this and I'll be happy to know what you're up to in the community question and answer.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (1), [[Big Data]] (1)
> **Code Identifiers:** x_pca (3), x_scaled_dim_reduction (2), fit_transform (2), x_dim_reduction (1), n_components (1)
> **Env Vars:** pca (5)
> **CLI Commands:** make (2)
> **Analogies:** for example (2)
> **Versions:** 1.05 (1)
> **Definitions:** is a  (1)
> **Best Practices:** remember to (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/machine-learning-fundamentals-for-healthcare/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-fundamentals-for-healthcare/next-steps?u=76281980&t=0)** - We have come to the end of Machine Learning Fundamentals for Healthcare course. If you have followed through, yay, congratulations! What are the next steps? Practice. I recommend you locate a dataset related to your work and set up a sort of a playground for yourself. Attempt all the techniques you have learned, create a list of hypotheses and research questions you'd like to test. Create this list through your daily work and research. To deepen your understanding and work with more advanced concepts, just stay right here on [[LinkedIn]] Learning. You can watch my Hands-on [[Data Science]] and AI course and [[Advanced AI- NLP Techniques for Clinical Datasets]]. And as at the time of this recording, I'm working on another course on [[Generative AI]]. It's great to add AI to your skillset. Let's connect on LinkedIn and share your questions in the community Q&A. I'm looking forward to all the cool things you implement from your learnings. Cheers.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (2), [[Data Science]] (1), [[Generative AI]] (1)
> **Env Vars:** nlp (1)
> **Prerequisites:** set up (1)
> **Speakers:** - we (1)


## Instructor

- [[Wuraola Oyewusi]]

## Path Context

### In [[AI for Healthcare- Essentials for Technical Roles]]
← [[An Introduction to How Generative AI Will Transform Healthcare]] | **3 of 6** | [[Hands-on Data Science and AI for Healthcare]] →

### In [[Hands-On Healthcare Analytics]]
← [[Descriptive Healthcare Analytics in R]] | **7 of 8** | [[Hands-on Data Science and AI for Healthcare]] →

### In [[Python for Data Professionals in Healthcare]]
← [[An Introduction to How Generative AI Will Transform Healthcare]] | **5 of 5**

## Appears In

- [[AI for Healthcare- Essentials for Technical Roles]]
- [[Hands-On Healthcare Analytics]]
- [[Python for Data Professionals in Healthcare]]

---

[↑ Back to top](#)