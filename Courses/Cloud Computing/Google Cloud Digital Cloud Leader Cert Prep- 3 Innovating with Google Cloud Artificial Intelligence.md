---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: google-cloud-digital-cloud-leader-cert-prep-3-innovating-with-google-cloud-artificial-intelligence
url: "https://www.linkedin.com/learning/google-cloud-digital-cloud-leader-cert-prep-3-innovating-with-google-cloud-artificial-intelligence"
duration_minutes: 36
duration: 36m
level: Beginner
updated: 3/13/2024
learners: 4508
skills:
  - AI Software Development
  - Artificial Intelligence (AI)
  - Google Cloud Platform (GCP)
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQHzfyIPAKzH7A/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1711389608259?e=2147483647&amp;v=beta&amp;t=zDUBxKf6v-zane_-ZMvW0xVD5oGakE7FY6o7XmtNan0"
linkedin_topic: Cloud Computing
learning_paths:
  - '[[Prepare for the Google Cloud Digital Leader Certification]]'
prev_courses:
  - '[[Google Cloud Digital Leader Cert Prep- 2 Exploring Data Transformation with Google Cloud]]'
next_courses:
  - '[[Google Cloud Digital Leader Cert Prep- 4 Modernize Infrastructure and Applications with Google Cloud]]'
path_nav: '[{"path":"Prepare for the Google Cloud Digital Leader Certification","position":3,"total":6,"prev":"Google Cloud Digital Leader Cert Prep- 2 Exploring Data Transformation with Google Cloud","next":"Google Cloud Digital Leader Cert Prep- 4 Modernize Infrastructure and Applications with Google Cloud"}]'
path_count: 1
tags:
  - course
  - topic/cloud-computing
  - topic/security
  - topic/software-development
  - skill/ai-software-development
  - skill/artificial-intelligence-ai
  - skill/google-cloud-platform-gcp
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cloud%20Computing/Google%20Cloud%20Digital%20Cloud%20Leader%20Cert%20Prep-%203%20Innovating%20with%20Google%20Cloud%20Artificial%20Intelligence.md)

![Google Cloud Digital Cloud Leader Cert Prep: 3 Innovating with Google Cloud Artificial Intelligence](https://media.licdn.com/dms/image/v2/D4E0DAQHzfyIPAKzH7A/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1711389608259?e=2147483647&amp;v=beta&amp;t=zDUBxKf6v-zane_-ZMvW0xVD5oGakE7FY6o7XmtNan0)

# Google Cloud Digital Cloud Leader Cert Prep: 3 Innovating with Google Cloud Artificial Intelligence

> The Google Cloud Digital Leader certification is for anyone who wishes to demonstrate their knowledge of cloud computing basics and how Google Cloud products and services can be used to achieve an organization’s goals. This course is one of a series of courses designed to prepare you for the Cloud Digital Leader exam. In this course, explore how organizations can use artificial intelligence and ma

> [LinkedIn Learning](https://www.linkedin.com/learning/google-cloud-digital-cloud-leader-cert-prep-3-innovating-with-google-cloud-artificial-intelligence) | 36m | Beginner | 5K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Course introduction](#course-introduction)
- [**1. AI and ML Fundamentals**](#1-ai-and-ml-fundamentals) (6 videos)
  - [Introduction](#introduction)
  - [AI and ML defined](#ai-and-ml-defined)
  - [How AI and ML differ from data analytics and business intelligence](#how-ai-and-ml-differ-from-data-analytics-and-business-intelligence)
  - [Problems that ML is suited to solve](#problems-that-ml-is-suited-to-solve)
  - [Why ML requires high-quality data](#why-ml-requires-high-quality-data)
  - [The importance of responsible and explainable AI](#the-importance-of-responsible-and-explainable-ai)
- [**2. Google Cloud’s AI and ML Solutions**](#2-google-clouds-ai-and-ml-solutions) (8 videos)
  - [Introduction](#introduction)
  - [BigQuery ML](#bigquery-ml)
  - [Pre-trained APIs](#pre-trained-apis)
  - [AutoML](#automl)
  - [Custom models](#custom-models)
  - [TensorFlow](#tensorflow)
  - [AI solutions](#ai-solutions)
  - [Considerations when selecting Google Cloud AI/ML solutions](#considerations-when-selecting-google-cloud-aiml-solutions)
- [**Conclusion**](#conclusion) (1 videos)
  - [Course summary](#course-summary)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Course introduction](https://www.linkedin.com/learning/google-cloud-digital-cloud-leader-cert-prep-3-innovating-with-google-cloud-artificial-intelligence/course-introduction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-digital-cloud-leader-cert-prep-3-innovating-with-google-cloud-artificial-intelligence/course-introduction?u=76281980&t=0)** - [Instructor] [[Artificial Intelligence (AI)|Artificial intelligence]] and machine learning represent an important evolution in information technologies that are quickly transforming a wide range of industries. As organizations digitally transform, they can find themselves with lots of data, and as time progresses, the amount of data they have only grows. Although that data is really valuable, it can be very laborious to collect, process and analyze. New tools and methodologies are needed to manage what's being collected, analyze it for insights, and then act on those insights. So what do these organizations do? This is where artificial intelligence and machine learning come in. This course, innovating with [[Google Cloud Platform (GCP)|Google Cloud]] artificial intelligence is designed to help you explore important AI and machine learning or ML concepts and understand how they can bring value to your business, learn about the AI and ML solutions that Google Cloud offers and understand how Google Cloud's pre-trained APIs, Auto ML and custom AI and ML [[Microsoft Products|products]] can help transform your business. Throughout the course, you'll be presented with graded knowledge assessments. You must pass these assessments to receive course credit. Okay, let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Artificial Intelligence (AI)|Artificial intelligence]] (3), [[Google Cloud Platform (GCP)|Google cloud]] (3), [[Microsoft Products|Products]] (1)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)


### 1. AI and ML Fundamentals

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction](https://www.linkedin.com/learning/google-cloud-digital-cloud-leader-cert-prep-3-innovating-with-google-cloud-artificial-intelligence/introduction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-digital-cloud-leader-cert-prep-3-innovating-with-google-cloud-artificial-intelligence/introduction?u=76281980&t=0)** - [Presenter] [[Google]] has nine [[Microsoft Products|products]] with over one billion users, [[Android]], Google Chrome, Gmail, [[Google Drive]], Google Maps, Google Search, the Google Play Store, YouTube and Google Photos. And [[Artificial Intelligence (AI)|artificial intelligence]] and machine learning were integrated into these products to make the [[User Experience (UX)|user experience]] of each even more efficient and productive. This includes features like Search in Photos, Recommendations in YouTube, Smart [[Jetpack Compose|Compose]] in Gmail, and Traffic Predictions in Google Maps. And Google continues to innovate products powered by new technologies, such as [[Generative AI]], which can produce content for you. As you consider how AI and ML could provide a benefit to your business, understanding the basics is important. So in this section of the course, you'll explore the difference between artificial intelligence and machine learning, how machine learning differs from data analytics and [[Business Intelligence (BI)|business intelligence]], different types of problems that [[AI Solutions]] are suited to solve, the importance of using quality data for machine learning, and the importance of responsible and explainable AI.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (8), [[Microsoft Products|Products]] (3), [[Artificial Intelligence (AI)|Artificial intelligence]] (2), [[Android]] (1), [[Google Drive]] (1)
> **CLI Commands:** make (1)
> **Analogies:** such as (1)
> **Speakers:** - [presenter] (1)

#### [AI and ML defined](https://www.linkedin.com/learning/google-cloud-digital-cloud-leader-cert-prep-3-innovating-with-google-cloud-artificial-intelligence/ai-and-ml-defined?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-digital-cloud-leader-cert-prep-3-innovating-with-google-cloud-artificial-intelligence/ai-and-ml-defined?u=76281980&t=0)** - People commonly use the terms [[Artificial Intelligence (AI)|artificial intelligence]], AI, and machine learning, ML, interchangeably. The confusion is understandable because artificial intelligence and machine learning are closely related. However, these trending technologies differ in several ways, including scope and application. So before we advance, let's define each of the terms. Artificial intelligence is a broad field, which refers to the use of technologies to build machines and computers that can mimic cognitive functions associated with human intelligence. These functions include being able to see, understand, and respond to spoken or written language, analyze data, make recommendations and more. Although artificial intelligence is often thought of as a system in itself, it's a set of technologies implemented in a system to let it reason, learn, and act to solve a complex problem. Machine learning is a subset of AI that lets a machine learn from data without being explicitly programmed. It relies on various models to analyze large amounts of data, learn from the insights, and then make predictions and informed decisions. Machine learning [[Algorithms]] improve performance over time as they are trained or exposed to more data. Machine learning models are the output, or what the program learns, from running an algorithm on training data. When more data is used, the model improves.
>
> **[1:37](https://www.linkedin.com/learning/google-cloud-digital-cloud-leader-cert-prep-3-innovating-with-google-cloud-artificial-intelligence/ai-and-ml-defined?u=76281980&t=97)** One helpful way to remember the difference between the two is to imagine them as umbrella categories. Artificial intelligence is the overarching term that covers a variety of specific approaches and algorithms. Machine learning sits beneath that umbrella, but so do other major sub-fields, such as [[Deep Learning]], robotics, expert systems, and [[Natural Language Processing (NLP)|natural language processing]]. Another area of AI you may be hearing a lot about is [[Generative AI]]. This is a type of artificial intelligence that can produce new content, including text, images, audio, and synthetic data. [[Google]] applies generative AI to [[Microsoft Products|products]] like Google Workspace to help users easily automate different types of tasks, like generating summaries of long documents. Google also provides development toolkits such as generative AI APIs to developers to help them create customized products and services. Generative AI can be used in a variety of applications such as conversational bots, content generation, document synthesis, and product discovery.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Artificial Intelligence (AI)|Artificial intelligence]] (6), [[Generative AI]] (4), [[Google]] (3), [[Algorithms]] (2), [[Microsoft Products|Products]] (2)
> **Definitions:** is a  (3), refers to (1)
> **Analogies:** such as (3), imagine (1)
> **CLI Commands:** make (2)
> **Speakers:** - people (1)

#### [How AI and ML differ from data analytics and business intelligence](https://www.linkedin.com/learning/google-cloud-digital-cloud-leader-cert-prep-3-innovating-with-google-cloud-artificial-intelligence/robert-robert-robert?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-digital-cloud-leader-cert-prep-3-innovating-with-google-cloud-artificial-intelligence/robert-robert-robert?u=76281980&t=0)** - [Instructor] Within your organization, perhaps you're familiar with a specific dashboard that analysts view every day, or maybe managers review a particular report each month. Both the dashboard and the report are examples of backward looking data. They look at what happened in the past. Most data analysis and [[Business Intelligence (BI)|business intelligence]] is based on historical data used to calculate metrics or identify trends. But to create value in your business, you need to use that data to make decisions for future business. This is where [[Artificial Intelligence (AI)|artificial intelligence]] and machine learning come in. They're the key to unlocking these capabilities. Let's consider an example to emphasize this point. Maya leads the business strategy and operations team for an international airline. To establish a trend in customer purchasing patterns, she's looking at historical annual reports. She can use this data to generate [[Dashboards]] that present information, such as customer demographic distribution, and sales in recent years. But there's nothing new or transformational about this [[Decision-Making]] process. Maya is simply using data analytics to illustrate what's happened in the past. But what if Maya could predict the satisfaction rate of each flight or predict customer complaints and get ahead of them? To do this effectively, she needs access to a lot more data and use ML models to make predictions for future business. The data she needs might include:
>
> **[1:35](https://www.linkedin.com/learning/google-cloud-digital-cloud-leader-cert-prep-3-innovating-with-google-cloud-artificial-intelligence/robert-robert-robert?u=76281980&t=95)** The number of passengers per flight. The duration of each flight. The customer satisfaction ratings per flight. And the number of customer complaints per flight. She also needs to understand factors that contributed to customer complaints, weather reports, seasonal indicators, and the time to resolution data for customer complaints. With all of these various data points, Maya might predict the quality of a single flight and its customer complaints. But there are hundreds of flights each day. The real value for Maya would come from being able to make predictive insights for all flights all year round. More importantly, it would be far more valuable if she could dynamically adjust pricing or staff assignments or even catering based on the predictions. Remember, ML provides a method to teach a computer how to solve problems by feeding examples of the correct answers. So with access to the right data, Maya can use machine learning to uncover these types of predictive insights to benefit the airline and its customers.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Business Intelligence (BI)|Business intelligence]] (1), [[Artificial Intelligence (AI)|Artificial intelligence]] (1), [[Dashboards]] (1), [[Decision-Making]] (1)
> **CLI Commands:** make (3)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Problems that ML is suited to solve](https://www.linkedin.com/learning/google-cloud-digital-cloud-leader-cert-prep-3-innovating-with-google-cloud-artificial-intelligence/problems-that-ml-is-suited-to-solve?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-digital-cloud-leader-cert-prep-3-innovating-with-google-cloud-artificial-intelligence/problems-that-ml-is-suited-to-solve?u=76281980&t=0)** - Machine learning lets computer systems continuously adjust and enhance themselves as they accrue more experiences. For this reason, when more data is put into them, the results are more accurate. With this in mind, ML is suited to solve four common business problems. The first is replacing or simplifying rule-based systems. Let's use [[Google]] Search as an example. Suppose you want to search for the Giants, a US sports team. If you type in Giants, should the search results show you the San Francisco Giants or the New York Giants? One's a baseball team based in California and the other's an American football team based in New York. In years gone by the search engine used hand-coded rules to decide which sports team to show a user. If the query is Giants and the user is in the Bay Area, show them results about San Francisco Giants. If the user is in the New York area, show them results about NY Giants. If the user is anywhere else, show them results about tall people. This was for just one query. If you multiply this process by millions of different queries and users each day, you can probably imagine how complex the whole code base became. This is a perfect problem for ML to solve. If all the data that's available shows which search results users clicked on per query, a machine learning model can be trained to predict the rank for search results.
>
> **[1:33](https://www.linkedin.com/learning/google-cloud-digital-cloud-leader-cert-prep-3-innovating-with-google-cloud-artificial-intelligence/problems-that-ml-is-suited-to-solve?u=76281980&t=93)** A second business problem ML can help solve relates to automating processes. ML is designed to make predictions and repeated decisions at scale. Let's explore another example, this time from a property developer headquartered in Thailand called Ananda Development. For every sale, both an Ananda Development inspector and the buyer have to conduct a detailed check of the property. This was a manual time consuming process that was prone to much human error. Inspectors would visually check hundreds of items a day for problems, list any issues on paper, and then photograph the findings. Multiplied across several projects, this workload adds up. Ananda Development decided to create a mobile application to make this process more efficient. Inspectors would verbally describe defects and critical issues to the application that ran on their smartphones. The application would then track and document the inspection results. In planning the application, the business realized it would need to recognize and convert to text Thai language speech and a version of English spoken by many Thai people. They decided to automate this process using Google's speech-to-text API. Furthermore, Ananda Development wanted to establish a pathway to use machine learning to complete condominium inspections by using remotely piloted drones. They decided to automate that process by using the Cloud Vision API to capture images of defects and automatically classify information about each one.
>
> **[3:11](https://www.linkedin.com/learning/google-cloud-digital-cloud-leader-cert-prep-3-innovating-with-google-cloud-artificial-intelligence/problems-that-ml-is-suited-to-solve?u=76281980&t=191)** Within three months of implementation, Ananda Development had saved around 130 hours of inspection time and over 100,000 US dollars in manpower costs. The inspection process is now more efficient and accurate, and as another benefit, buyers also receive copies of electronic inspection reports and updated status notes as defects are repaired. So far, you heard about ML problems that use structured data to make predictions at scale. A third type of business problem that ML can help solve is understanding [[Unstructured Data]] like images, videos, and audio. This example comes from Ocado, one of the world's largest online only grocery supermarkets. Previously, when Ocado received emails, they would all go to a central mailbox for sorting and forwarding by a human. This process was time consuming and led to a poor customer experience. To improve and scale this process, Ocado used ML's ability to process natural language to identify the customer's sentiment and the topic of each message so that they could route it immediately to the relevant department. This eliminated multiple rounds of reading and triaging, and ultimately improved customer satisfaction and retention. And finally, there's personalization. Many businesses use ML to personalize user experiences, and YouTube is a great example of personalization in action. When you watch a video on YouTube, you've probably noticed there's a list of recommended videos
>
> **[4:44](https://www.linkedin.com/learning/google-cloud-digital-cloud-leader-cert-prep-3-innovating-with-google-cloud-artificial-intelligence/problems-that-ml-is-suited-to-solve?u=76281980&t=284)** that are up next. When your video finishes, a new video will play, and YouTube wants it to be interesting and useful for you. By using ML to provide personalized recommendations, YouTube can deliver a better customer experience. Many businesses use this same approach to surface product recommendations on their websites that are personalized to individual users. Other businesses use personalization to surface new content like music recommendations or films to stream. It's important to remember that ML models aren't standalone solutions, and that solving complex business challenges requires combinations of models. There are, of course, many more applications of machine learning for businesses, and you can learn even more about them in our machine learning courses.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (2), [[Unstructured Data]] (1)
> **CLI Commands:** make (3)
> **Env Vars:** api (2)
> **Definitions:** is a  (2)
> **UI Navigation:** go to (1)
> **Analogies:** imagine (1)
> **Best Practices:** recommended (1)
> **Speakers:** - machine (1)

#### [Why ML requires high-quality data](https://www.linkedin.com/learning/google-cloud-digital-cloud-leader-cert-prep-3-innovating-with-google-cloud-artificial-intelligence/why-ml-requires-high-quality-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-digital-cloud-leader-cert-prep-3-innovating-with-google-cloud-artificial-intelligence/why-ml-requires-high-quality-data?u=76281980&t=0)** - [Instructor] Data is used by machine learning models to derive predictive insights and make repeated decisions. However, the accuracy of those predictions relies on large volumes of data that are correct and free of errors. Data is considered low-quality if it's not aligned to the problem or is biased in some way. If you feed an ML model low-quality data, it's like teaching a child with incorrect information. An ML model can't make accurate predictions by learning from incorrect data. So how can you ensure that you have quality data when training an ML model? To assess its quality, data is evaluated against six dimensions, completeness, uniqueness, timeliness, validity, accuracy, and consistency. Let's explore what each of these mean in more detail. The completeness of data refers to whether all the required information is present. If the data is incomplete, then the model will not learn all the patterns that are necessary to make accurate predictions. Take, for example, the training of an ML model that's reliant on a dataset of customer transactions. If some transactions are missing critical information, such as the date of the transaction, the accurate training of the model will be affected. Data should be unique. If a model is trained on a dataset with a high number of duplicates, the ML model may not be able to learn accurately. This is because it'll be confused by the duplicate records and won't be able to accurately identify patterns.
>
> **[1:34](https://www.linkedin.com/learning/google-cloud-digital-cloud-leader-cert-prep-3-innovating-with-google-cloud-artificial-intelligence/why-ml-requires-high-quality-data?u=76281980&t=94)** For example, if you're training a model to identify a breed of dog from a photo, it's important to have images of many different unique breeds. If the dataset contains many thousands of images, but most of them are just photos of Labradors, the model will find it difficult to correctly identify most other breeds accurately. The timeliness of the data refers to whether the data is up-to-date and reflects the current state of the phenomenon that's being modeled. If the data is not timely, then the model might be making predictions based on outdated or irrelevant information. Training an ML model to predict stock-market fluctuations might rely on a dataset of stock prices. If the data is several months old, it's untimely for making current predictions. Validity means that the data conforms to a set of predefined standards and definitions such as type and format. Validity also ensures that data is in an acceptable range. An example of invalid data is a date of 08-12-2019, when the standard format is defined as year, month, and date. Accuracy reflects the correctness of the data, such as the correct birth date or the accurate number of units sold. For example, in a dataset of images, some images might be labeled as dogs when they actually show cats. Note how accuracy is different from validity. Whereas validity focuses on type, format, and range, accuracy is focused on form and content. Finally, the consistency of the data
>
> **[3:07](https://www.linkedin.com/learning/google-cloud-digital-cloud-leader-cert-prep-3-innovating-with-google-cloud-artificial-intelligence/why-ml-requires-high-quality-data?u=76281980&t=187)** refers to whether the data is uniform and doesn't contain any contradictory information. If data is inconsistent, then an ML model might be unable to make accurate predictions. If the same entity appears with different names or values across different parts of the data, it would lead to inconsistent data. For example, in a dataset of customer information, the same customer might appear as [[John the Ripper|John]] Smith in one place and J. Smith in another. Remember, data is the only lens through which a model views the world. Anything the model can't see it assumes doesn't exist. So it's your responsibility to provide the model with complete and correct data. The good news is that most of these problems can be solved simply by getting more high-quality data, but you have to be purposeful in collecting that data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[John the Ripper|John]] (1)
> **Analogies:** for example (4), such as (3), it's like (1)
> **Definitions:** refers to (3), means that (1), is a  (1), defined as (1)
> **CLI Commands:** make (4), find (1)
> **Speakers:** - [instructor] (1)

#### [The importance of responsible and explainable AI](https://www.linkedin.com/learning/google-cloud-digital-cloud-leader-cert-prep-3-innovating-with-google-cloud-artificial-intelligence/the-importance-of-responsible-and-explainable-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-digital-cloud-leader-cert-prep-3-innovating-with-google-cloud-artificial-intelligence/the-importance-of-responsible-and-explainable-ai?u=76281980&t=0)** - [Instructor] AI has significant potential to help solve challenging problems, including advancing medicine, understanding language, and fueling scientific discovery. To realize that potential, it's critical that AI is used responsibly. To that end, [[Google]] has established principles that guide Google AI applications, best practices to share our work with communities outside of Google, and programs to operationalize our efforts. The principles state that AI should be socially beneficial, avoid creating or reinforcing unfair bias, be built and tested for safety, be accountable to people, incorporate [[Privacy]] design principles, uphold high standards of scientific excellence, and be made available for uses that accord with these principles. In addition to these principles, Google will not design or deploy AI in the following application areas. Technologies that cause or are likely to cause overall harm, weapons or other technologies whose principle purpose or implementation is to cause or directly facilitate injury to people. Technologies that gather or use information for surveillance, violating internationally accepted norms, and technologies whose purpose contravenes widely accepted principles of international law and human rights. Although these are Google's own guiding AI principles, we urge other organizations to develop their own set of principles that encourage [[Responsible AI]] development. It's also important for organizations
>
> **[1:35](https://www.linkedin.com/learning/google-cloud-digital-cloud-leader-cert-prep-3-innovating-with-google-cloud-artificial-intelligence/the-importance-of-responsible-and-explainable-ai?u=76281980&t=95)** to debug and improve ML model performance and help others understand their model's behavior. Organizations building ML models also need help with detecting and resolving bias, drift, and other gaps in their data and models. In addition, having human-interpretable explanations of your ML models will help grow end-user trust and improve transparency. Explainable AI is [[Google Cloud Platform (GCP)|Google Cloud]]'s set of tools and frameworks to help you understand and interpret predictions made by your machine learning models. These tools are natively integrated with several Google [[Microsoft Products|products]] and services to ensure transparent AI development.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (6), [[Privacy]] (1), [[Responsible AI]] (1), [[Google Cloud Platform (GCP)|Google cloud]] (1), [[Microsoft Products|Products]] (1)
> **Speakers:** - [instructor] (1)


### 2. Google Cloud’s AI and ML Solutions

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction](https://www.linkedin.com/learning/google-cloud-digital-cloud-leader-cert-prep-3-innovating-with-google-cloud-artificial-intelligence/introduction-23231124?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-digital-cloud-leader-cert-prep-3-innovating-with-google-cloud-artificial-intelligence/introduction-23231124?u=76281980&t=0)** - [Instructor] Historically, [[Artificial Intelligence (AI)|artificial intelligence]] and machine learning were not accessible to ordinary people. Most of the people capable of developing AI and ML solutions were specialty engineers who are scarce in number and expensive to hire. The reality is that ML is more accessible now than ever before, which allows more people to build, even those without the technical expertise. [[Google Cloud Platform (GCP)|Google Cloud]] offers four options for building machine learning models. The first option is BigQuery ML. This is a tool for using [[SQL]] queries to create and execute machine learning models in BigQuery. If you already have your data in BigQuery, and your problems fit the predefined ML models, this could be your choice. The second option is to use Pre-trained APIs or [[Application Programming Interfaces (API)|application programming interfaces]]. This option lets you use machine learning models that were built and trained by [[Google]], so you don't have to build your own ML models if you don't have enough training data or sufficient machine learning expertise in house. The third option is AutoML, which is a no-code solution, letting you build your own machine learning models on [[Vertex]] AI through a point and click interface. And finally, there's custom training through which you can code your very own machine learning environment, the training and the deployment, which gives you flexibility and provides control over the ML pipeline. In this second section of the course, you'll learn more about these four options for building machine learning models, and you'll also learn about some
>
> **[1:31](https://www.linkedin.com/learning/google-cloud-digital-cloud-leader-cert-prep-3-innovating-with-google-cloud-artificial-intelligence/introduction-23231124?u=76281980&t=91)** of Google's other [[AI Solutions]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (2), [[Artificial Intelligence (AI)|Artificial intelligence]] (1), [[Google Cloud Platform (GCP)|Google cloud]] (1), [[SQL]] (1), [[Application Programming Interfaces (API)|Application programming interfaces]] (1)
> **Definitions:** is a  (2)
> **Env Vars:** sql (1)
> **Speakers:** - [instructor] (1)

#### [BigQuery ML](https://www.linkedin.com/learning/google-cloud-digital-cloud-leader-cert-prep-3-innovating-with-google-cloud-artificial-intelligence/bigquery-ml?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-digital-cloud-leader-cert-prep-3-innovating-with-google-cloud-artificial-intelligence/bigquery-ml?u=76281980&t=0)** - [Instructor] Machine learning on large data sets requires extensive programming and knowledge of ML frameworks. These requirements restrict solution development to a very small set of people within each company, and they exclude data analysts who understand the data but have limited machine learning knowledge and programming expertise. Although BigQuery started solely as a data warehouse, over time, it has evolved to provide additional features that support the data to AI lifecycle. BigQuery ML democratizes the use of machine learning by empowering data analysts, the primary data warehouse users to build and run models by using existing [[Business Intelligence (BI)|business intelligence]] tools and spreadsheets. [[Predictive Analytics]] can guide [[Business Decision Making]] across the organization. Using [[Python (Programming Language)|Python]] or [[Java]] to program an ML solution isn't necessary. Models are trained and accessed directly in BigQuery by using [[SQL]], which is a language familiar to data analysts. BigQuery ML brings machine learning to the data. It reduces complexity because fewer tools are required. It also increases speed of production, because moving and formatting large amounts of data for Python-based ML frameworks is not required for model training and BigQuery. BigQuery ML also integrates with [[Vertex]] AI, [[Google Cloud Platform (GCP)|Google Cloud]]'s end-to-end AI and ML platform. When BigQuery ML models are registered to the Vertex AI model registry, they can be deployed to endpoint for online prediction.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (2), [[Vertex]] (2), [[Business Intelligence (BI)|Business intelligence]] (1), [[Predictive Analytics]] (1), [[Business Decision Making]] (1)
> **CLI Commands:** python (2)
> **Env Vars:** sql (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Pre-trained APIs](https://www.linkedin.com/learning/google-cloud-digital-cloud-leader-cert-prep-3-innovating-with-google-cloud-artificial-intelligence/pre-trained-apis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-digital-cloud-leader-cert-prep-3-innovating-with-google-cloud-artificial-intelligence/pre-trained-apis?u=76281980&t=0)** - [Educator] [[Google Cloud Platform (GCP)|Google Cloud]]'s pre-trained APIs are a great option if you don't have your own training data. These are ideal in situations where an organization doesn't have specialized data scientists, but it does have business analysts and developers. This is the fastest and lowest effort of the machine learning approaches, but is less customizable than the others. Google Cloud's pre-trained APIs can help developers build smart apps quickly by providing access to ML models for common tasks like analyzing images, videos, and text. APIs can be deployed in a virtual private cloud, on-premises, or in [[Google]]'s public cloud, regardless of the level of ML experience. Let's imagine a developer building a mobile app that users will submit photos to. The developer needs the app to recognize what the images are and filter out any that aren't safe for work. The developer might choose Vision API. This offers powerful pre-trained machine learning models, which use Google data to automatically detect faces, objects, text, and even sentiment in images. The developer can use Vision API to assign labels to images and quickly classify them into millions of predefined categories. The Natural Language API is another out-of-the-box pre-trained API. If a business has a contact form on its website that receives many messages every day, this data can be difficult and time intensive to manually handle, categorize, and action. Natural Language API discovers syntax,
>
> **[1:35](https://www.linkedin.com/learning/google-cloud-digital-cloud-leader-cert-prep-3-innovating-with-google-cloud-artificial-intelligence/pre-trained-apis?u=76281980&t=95)** entities, and sentiment in text, and classifies text into a predefined set of categories. In this case, it can decide if comments represent complaints, praise, and attempt to learn more about your business, and more. Google also offers several other pre-trained APIs. The Cloud Translation API converts text from one language to another. The Speech-to-Text API converts audio to text for [[Data Processing]]. The Text-to-Speech API converts text into high-quality voice audio. And the Video Intelligence API recognizes motion and action in video. How well a machine learning model is trained depends on how much data is available to train it. As you might expect, Google has lots of images, text, and ML researchers to train its pre-trained models. This means less work for you and a faster return on your investment.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (4), [[Google Cloud Platform (GCP)|Google cloud]] (2), [[Data Processing]] (1)
> **Env Vars:** api (9)
> **Analogies:** imagine (1)
> **Speakers:** - [educator] (1)

#### [AutoML](https://www.linkedin.com/learning/google-cloud-digital-cloud-leader-cert-prep-3-innovating-with-google-cloud-artificial-intelligence/automl?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-digital-cloud-leader-cert-prep-3-innovating-with-google-cloud-artificial-intelligence/automl?u=76281980&t=0)** - [Instructor] Another more custom way to use machine learning to solve problems is to train models by using your own data. This is where [[Vertex]] AI comes in. Vertex AI brings together [[Google Cloud Platform (GCP)|Google Cloud]] services for building ML under one unified user interface. You can use your own training data with Vertex AI to manage and build ML projects. AutoML on Vertex AI lets you build and train machine learning models from end-to-end by using graphical user interfaces, often referred to as GUIs without writing a line of code. This means that after your data is ingested into Vertex AI, AutoML chooses the best machine learning model for you by comparing different models and tuning parameters. What once required a lot of manual work is done automatically and quickly, which results in a trained model that is both accurate and customized to your data. This lets machine learning practitioners focus on the problems that they're trying to solve instead of the details of machine learning. AutoML is a great option for businesses that want to produce a customized ML model, but are not willing to spend too much time coding and experimenting with thousands of models. Let's go back to our image recognition example which used Vision API, a pre-existing model trained with [[Google]] data. Imagine you work for a car manufacturing company. Vision API can tell you the difference between generic images found in Google [[Databases]], like the difference between a wheel and a door, but it can't help a car manufacturer distinguish between good or defective parts.
>
> **[1:34](https://www.linkedin.com/learning/google-cloud-digital-cloud-leader-cert-prep-3-innovating-with-google-cloud-artificial-intelligence/automl?u=76281980&t=94)** In this case, a developer could use an AutoML Vision instance and train it with your specialized data. This automates the training of your machine learning models, which means that you could upload a batch of images and train an image classification model through the easy-to-use graphical interface of AutoML. Models can be further optimized and deployed directly from the cloud. Now let's focus on another feature of AutoML. Earlier you saw how the Natural Language API could be used for processing entries into an online contact form, but if your text examples don't fit neatly into the Natural Language API sentiment-based or vertical topic-based classification scheme and you want to use your own specialized data instead, you need to use AutoML Natural Language. AutoML Natural Language lets you build and deploy custom machine learning models that analyze documents, categorize them, identify entities within them, or assess attitudes within them. You can use the AutoML user interface to upload your training data and test your custom model without a single line of code. Vertex AI makes this customization possible. Those examples are just a few of the many Google Cloud ML offerings. You can also find APIs that categorize videos, convert audio to text or text to audio, understand Natural Language, translate from one language to another and more. In fact, in many of the most innovative applications from machine learning, several of these kinds of applications are combined.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Vertex]] (6), [[Google Cloud Platform (GCP)|Google cloud]] (2), [[Google]] (2), [[Databases]] (1)
> **Env Vars:** api (4)
> **Definitions:** means that (2), is a  (1)
> **CLI Commands:** find (1)
> **Cross-References:** go back to (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### [Custom models](https://www.linkedin.com/learning/google-cloud-digital-cloud-leader-cert-prep-3-innovating-with-google-cloud-artificial-intelligence/custom-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-digital-cloud-leader-cert-prep-3-innovating-with-google-cloud-artificial-intelligence/custom-models?u=76281980&t=0)** - [Narrator] [[Vertex]] AI is also the essential platform for creating custom end-to-end machine learning models. This means not only are models trained with your own data, but the models are custom built as well. Vertex AI provides a suite of [[Microsoft Products|products]] to help at each stage of the ML workflow, from gathering data to [[Feature Engineering]], building models, and finally, deploying and monitoring those models. As this approach is fully custom built end to end, its process takes the longest and requires a specialized team of data scientists and engineers. However, these fully custom ML models are the most specialized to your needs, and give your business the most differentiation and innovative results. Vertex AI contains tools that assist programmers with virtual machine imaging, and data labeling, training and predictions. It also provides prebuilt [[Algorithms]]. It's important to remember that although these tools are the building blocks to using your data at every stage, there is no one-size-fits-all approach. Every use case requires a different combination of tools and products.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Vertex]] (3), [[Microsoft Products|Products]] (2), [[Feature Engineering]] (1), [[Algorithms]] (1)
> **Speakers:** - [narrator] (1)

#### [TensorFlow](https://www.linkedin.com/learning/google-cloud-digital-cloud-leader-cert-prep-3-innovating-with-google-cloud-artificial-intelligence/tensorflow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-digital-cloud-leader-cert-prep-3-innovating-with-google-cloud-artificial-intelligence/tensorflow?u=76281980&t=0)** - [Instructor] All machine learning models are built on top of [[Google Cloud Platform (GCP)|Google Cloud]]'s AI foundational infrastructure. A part of this foundation is [[TensorFlow]], which is an end-to-end open source platform for machine learning. TensorFlow has a flexible ecosystem of tools, libraries, and community resources that enable researchers to innovate in ML and developers to build and deploy ML powered applications. First developed for [[Google]]'s internal use, TensorFlow is now open source so that everyone can benefit. TensorFlow takes advantage of the Tensor Processing Unit, or TPU, which is Google's custom-developed application-specific integrated circuit used to accelerate machine learning workloads. TPUs act as domain-specific [[Hardware]] as opposed to general-purpose hardware with CPUs and GPUs. With TPUs, the computing speed increases more than 200 times. This means that instead of waiting 26 hours for results with a state-of-the-art GPU, you only need to wait for 7.9 minutes for a full cloud TPU pod to deliver the same results. Cloud TPUs have been integrated across Google [[Microsoft Products|products]] and this state-of-the-art hardware and supercomputing technology is available with Google Cloud products and services.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[TensorFlow]] (4), [[Google]] (3), [[Hardware]] (3), [[Google Cloud Platform (GCP)|Google cloud]] (2), [[Microsoft Products|Products]] (2)
> **Env Vars:** tpu (2), gpu (1)
> **Definitions:** is an  (1), means that (1)
> **Versions:** 7.9 (1)
> **Speakers:** - [instructor] (1)

#### [AI solutions](https://www.linkedin.com/learning/google-cloud-digital-cloud-leader-cert-prep-3-innovating-with-google-cloud-artificial-intelligence/ai-solutions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-digital-cloud-leader-cert-prep-3-innovating-with-google-cloud-artificial-intelligence/ai-solutions?u=76281980&t=0)** - [Narrator] Beyond the customizable options, [[Google Cloud Platform (GCP)|Google Cloud]] has also created a set of full [[AI Solutions]] aimed to solve specific business needs. Contact Center AI provides models for speaking with customers in assisting human agents, increasing operational efficiency, and personalizing customer care to transform your contact center. Document AI unlocks insights by extracting and classifying information from unstructured documents, such as invoices, receipts, [[Forms]], letters, and reports. The extracted data can then be saved in a database or exported to another application for further analysis. Discovery AI for Retail uses machine learning to select the optimal ordering of [[Microsoft Products|products]] on a retailer's [[E-Commerce]] site when shoppers choose a category like winter jackets or kitchenware. Over time, the AI learns the ideal product ordering for each page on the site by using historical data, optimizing how and what products are shown for accuracy, relevance, and likelihood of making a sale. And Cloud Talent Solution uses AI with job search and talent acquisition capabilities, matches candidates to ideal jobs faster, and allows employers to attract and convert higher quality candidates. These are just some of the fully built AI solutions offered by Google Cloud.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google Cloud Platform (GCP)|Google cloud]] (2), [[AI Solutions]] (2), [[Microsoft Products|Products]] (2), [[Forms]] (1), [[E-Commerce]] (1)
> **UI Navigation:** select the (1)
> **Analogies:** such as (1)
> **Speakers:** - [narrator] (1)

#### [Considerations when selecting Google Cloud AI/ML solutions](https://www.linkedin.com/learning/google-cloud-digital-cloud-leader-cert-prep-3-innovating-with-google-cloud-artificial-intelligence/considerations-when-selecting-google-cloud-ai-ml-solutions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-digital-cloud-leader-cert-prep-3-innovating-with-google-cloud-artificial-intelligence/considerations-when-selecting-google-cloud-ai-ml-solutions?u=76281980&t=0)** - [[Google Cloud Platform (GCP)|Google Cloud]] offers a range of AI and ML solutions and [[Microsoft Products|products]], but there are several decisions and trade-offs to consider when selecting which to employ. The first consideration is speed. How quickly do you need to get your model to production? AI projects can typically take anywhere from three to 36 months to plan and implement, depending on the scope and complexity of the use case. But business decision makers often underestimate the time it'll take. Pre-trained APIs require no model training because that time-consuming task has already been carried out. Custom training usually takes the longest time because it builds the ML model from the beginning, unlike AutoML and BigQuery ML. The next consideration is differentiation. How unique is your model or how unique does it need to be? Google Cloud offers a range of out-of-the-box solutions for organizations that want to quickly use ML models in their day-to-day [[Business Operations]]. These include image recognition solutions and chatbots, which are quick to deploy and can be applied in various use cases. Alternatively, [[Vertex]] AI, which is Google Cloud's unified platform for building, deploying, and managing [[AI Solutions]], can give ML engineers and data scientists full control of the ML workflow. Vertex AI custom training lets you train and serve custom models with code on Vertex Workbench, which results in highly bespoke ML models. Another consideration is the expertise required when embarking on an AI or ML project.
>
> **[1:35](https://www.linkedin.com/learning/google-cloud-digital-cloud-leader-cert-prep-3-innovating-with-google-cloud-artificial-intelligence/considerations-when-selecting-google-cloud-ai-ml-solutions?u=76281980&t=95)** Infusing AI into business processes requires roles such as data engineers, data scientists, and machine learning engineers, among others. Organizations should consider their current team and then determine a people strategy, which could include reusing or repurposing existing resources, upskilling and training current staff, or hiring or working with outside consultants or contractors. Google Cloud's AI and ML products vary from those that can be employed by data analysts and [[Business Intelligence (BI)|business intelligence]] teams, right up to those more suited to ML engineers and data scientists. The final consideration is the effort required to build an AI solution. This depends on several factors, including the complexity of the problem, the amount of data available, and the experience of the team. Google Cloud can help provide solutions for projects at both ends of the scale. However, any AI undertaking will generally require much time, effort, and expertise to have a worthwhile impact on business operations.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google Cloud Platform (GCP)|Google cloud]] (5), [[Vertex]] (3), [[Microsoft Products|Products]] (2), [[Business Operations]] (2), [[AI Solutions]] (1)
> **Analogies:** such as (1)
> **Prerequisites:** required to (1)
> **Speakers:** - google (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Course summary](https://www.linkedin.com/learning/google-cloud-digital-cloud-leader-cert-prep-3-innovating-with-google-cloud-artificial-intelligence/course-summary?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-digital-cloud-leader-cert-prep-3-innovating-with-google-cloud-artificial-intelligence/course-summary?u=76281980&t=0)** - [Instructor] This brings us to the end of the Innovating with [[Google Cloud Platform (GCP)|Google Cloud]] [[Artificial Intelligence (AI)|Artificial Intelligence]] course. Let's do a quick recap. In the first section of the course titled AI and ML Fundamentals, you explored the difference between artificial intelligence and machine learning, how machine learning differs from data analytics and [[Business Intelligence (BI)|business intelligence]], different types of problems that [[AI Solutions]] are suited to solve, the importance of using high quality data for machine learning, and the importance of responsible and explainable AI. And in the second section of the course titled Google Cloud's AI and ML Solutions, you learned about BigQuery ML, pre-trained APIs, AutoML and custom models, which are both parts of [[Vertex]] AI, [[TensorFlow]], existing AI solutions, and what you should consider when choosing a Google Cloud AI or ML solution. Now that you've had a comprehensive [[Introduction To Artificial Intelligence]] and machine learning on Google Cloud, you can move on to the next course in the series, Modernize Infrastructure and Applications with Google Cloud, where you'll learn about why modernization and migration to the cloud is an important step in an organization's transformation journey, options for and advantages of running compute workloads in the cloud, using containers and [[Serverless Computing]] in application modernization, the business value of [[Application Programming Interfaces (API)|application programming interfaces]], APIs, and the business reasons for choosing hybrid or multi-cloud strategies.
>
> **[1:34](https://www.linkedin.com/learning/google-cloud-digital-cloud-leader-cert-prep-3-innovating-with-google-cloud-artificial-intelligence/course-summary?u=76281980&t=94)** We'll see you next time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google Cloud Platform (GCP)|Google cloud]] (4), [[Artificial Intelligence (AI)|Artificial intelligence]] (3), [[AI Solutions]] (2), [[Business Intelligence (BI)|Business intelligence]] (1), [[Google]] (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Google Cloud]]

## Skills Covered

- AI Software Development
- Artificial Intelligence (AI)
- Google Cloud Platform (GCP)

## Path Context

### In [[Prepare for the Google Cloud Digital Leader Certification]]
← [[Google Cloud Digital Leader Cert Prep- 2 Exploring Data Transformation with Google Cloud]] | **3 of 6** | [[Google Cloud Digital Leader Cert Prep- 4 Modernize Infrastructure and Applications with Google Cloud]] →

## Appears In

- [[Prepare for the Google Cloud Digital Leader Certification]]

## Related Courses

_Courses sharing skills:_

- [[Exploring the Future of Development with GitHub Copilot Workspace]] — Artificial Intelligence (AI), AI Software Development
- [[AI Orchestration- Foundations]] — Artificial Intelligence (AI), AI Software Development
- [[Welcome To The Building Ai Products Understanding The Workflow Professional Certificate]] — Artificial Intelligence (AI), AI Software Development
- [[Advanced Python Projects- Build AI Applications]] — Artificial Intelligence (AI), AI Software Development
- [[Google Cloud Professional Machine Learning Engineer Cert Prep]] — Artificial Intelligence (AI), Google Cloud Platform (GCP)

---

[↑ Back to top](#)