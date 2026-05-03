---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: choosing-a-cloud-platform-for-developers-aws-azure-and-gcp
url: "https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp"
level: Beginner
updated: 1/12/2022
learners: 3582
skills:
  - Amazon Web Services (AWS)
  - Cloud Development
  - Microsoft Azure
  - Google Cloud Platform (GCP)
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQG6Sb7o1gAkoA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1567118520291?e=2147483647&amp;v=beta&amp;t=AGKKjuZt4o8FxwETYgEF7WF8RVaTlocVCll9C9EvKaA"
linkedin_topic: Cloud Computing
learning_paths:
  - '[[Getting Started with Cloud Development]]'
next_courses:
  - '[[Learning Amazon Web Services Aws For Developers]]'
path_nav: '[{"path":"Getting Started with Cloud Development","position":1,"total":4,"prev":null,"next":"Learning Amazon Web Services Aws For Developers"}]'
path_count: 1
tags:
  - course
  - topic/cloud-computing
  - topic/software-development
  - skill/amazon-web-services-aws
  - skill/cloud-development
  - skill/microsoft-azure
  - skill/google-cloud-platform-gcp
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cloud%20Computing/Choosing%20A%20Cloud%20Platform%20For%20Developers%20Aws%20Azure%20And%20Gcp.md)

![Choosing A Cloud Platform For Developers Aws Azure And Gcp](https://media.licdn.com/dms/image/v2/C4E0DAQG6Sb7o1gAkoA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1567118520291?e=2147483647&amp;v=beta&amp;t=AGKKjuZt4o8FxwETYgEF7WF8RVaTlocVCll9C9EvKaA)

# Choosing A Cloud Platform For Developers Aws Azure And Gcp

> Migrating your applications to the cloud? Review the benefits and challenges of developing in the cloud with the top three cloud service providers: Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform (GCP). Instructor Xian Ke helps you choose the right provider for your product and technology needs. Learn how to establish the goals and timeline for your cloud migration. Review ho

> [LinkedIn Learning](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp) | Beginner | 4K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Considering the cloud choices](#considering-the-cloud-choices)
  - [What you should know](#what-you-should-know)
- [**1. On-Premise vs. Cloud Services**](#1-on-premise-vs-cloud-services) (3 videos)
  - [Solutions before cloud computing](#solutions-before-cloud-computing)
  - [Evaluate urgency of cloud migration](#evaluate-urgency-of-cloud-migration)
  - [Establish goals for cloud migration](#establish-goals-for-cloud-migration)
- [**2. Baseline Functionality Available in the Cloud**](#2-baseline-functionality-available-in-the-cloud) (4 videos)
  - [Current major cloud providers](#current-major-cloud-providers)
  - [Storing data and files](#storing-data-and-files)
  - [Executing code](#executing-code)
  - [Analytics and insights](#analytics-and-insights)
- [**3. Historical Strengths of Three Major Cloud Providers**](#3-historical-strengths-of-three-major-cloud-providers) (3 videos)
  - [Amazon Web Services](#amazon-web-services)
  - [Google Cloud Platform](#google-cloud-platform)
  - [Microsoft Azure](#microsoft-azure)
- [**4. Compliance in the Cloud**](#4-compliance-in-the-cloud) (3 videos)
  - [Business regulations overview](#business-regulations-overview)
  - [GDPR (EU data regulations)](#gdpr-eu-data-regulations)
  - [HIPAA (US health care regulations)](#hipaa-us-health-care-regulations)
- [**5. Human Resources for the Cloud**](#5-human-resources-for-the-cloud) (3 videos)
  - [Assess current skills and needs](#assess-current-skills-and-needs)
  - [Evolve roles and expertise](#evolve-roles-and-expertise)
  - [Prioritize learning and testing](#prioritize-learning-and-testing)
- [**6. Prototype for Your Needs**](#6-prototype-for-your-needs) (3 videos)
  - [Evaluate specialized functionality](#evaluate-specialized-functionality)
  - [Gather insights through implementation](#gather-insights-through-implementation)
  - [Image-to-text prototype example](#image-to-text-prototype-example)
- [**7. Design for Adaptability**](#7-design-for-adaptability) (3 videos)
  - [Switch cloud providers as needed](#switch-cloud-providers-as-needed)
  - [Containers for your code](#containers-for-your-code)
  - [Streamline cloud processes](#streamline-cloud-processes)
- [**Conclusion**](#conclusion) (1 videos)
  - [Continuing the cloud platform journey](#continuing-the-cloud-platform-journey)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Considering the cloud choices](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/considering-the-cloud-choices?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/considering-the-cloud-choices?u=76281980&t=0)** - [Xian] You keep hearing about the cloud and about companies building their [[Software Projects]] on the cloud. Should you be moving to the cloud too? There's [[Amazon Web Services (AWS)|Amazon Web Services]], [[Microsoft Azure]], [[Google Cloud Platform (GCP)|Google Cloud Platform]]. So many choices and tools. How do you choose? How do you use the tools? In this course, we'll walk through the options available for developing in the cloud. Along the way, we'll demystify concepts like [[Artificial Intelligence (AI)|artificial intelligence]], serverless, and docker as they apply to the cloud. We'll also discuss related topics, such as compliance and [[Prototyping]]. Hi, I'm Xian Ke. This course contains many insights from my experiences working on software projects for Fortune 500 enterprises and for Silicon Valley startups. My goal is to help you navigate the ever-changing technology landscape and to make good decisions for your [[Software Development]] projects.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Software Projects]] (2), [[Amazon Web Services (AWS)|Amazon web services]] (1), [[Microsoft Azure]] (1), [[Google Cloud Platform (GCP)|Google cloud platform]] (1), [[Artificial Intelligence (AI)|Artificial intelligence]] (1)
> **CLI Commands:** docker (1), make (1)
> **Analogies:** such as (1)
> **Speakers:** - [xian] (1)

#### [What you should know](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/what-you-should-know-14484241?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/what-you-should-know-14484241?u=76281980&t=0)** - [Instructor] To get the most from this course, you should have an understanding of how your existing [[Software Projects]] have been developed. You should have an interest in learning more about how newer software tools can benefit your current and future projects. You should also be open to change and to different ways of reaching your organization's goals and objectives. Successful projects can require a lot of experimentation. Let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Software Projects]] (1)
> **Speakers:** - [instructor] (1)


### 1. On-Premise vs. Cloud Services

[↑ Back to Table of Contents](#table-of-contents)

#### [Solutions before cloud computing](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/solutions-before-cloud-computing-14491062?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/solutions-before-cloud-computing-14491062?u=76281980&t=0)** - [Instructor] To better understand how [[Cloud Computing]] can benefit your projects, it's worth reviewing the technology solutions that existed before the current generation of [[Cloud Services]] arose. The term Cloud really just refers to the internet. One analogy we can use to describe this transition to the Cloud is email. Back when internet access speeds were slower and mobile phones did not exist, people accessed their emails through command line terminals or desktop applications. Today we have faster internet and more online storage. It's common for email applications to reside in the cloud. And for all of our email messages to be easily searchable from wherever we are. If we were building a web application in the 1990s, we might decide to host the application on a computer server that resides On-Premise. This computer would physically sit inside our [[Microsoft Office|office]], serving up data and web pages upon user request. We will be responsible for maintaining this computer, updating software and [[Hardware]] for reliability and security. Alternatively, instead of keeping a computer server On-Premise in our office, our web app could be hosted Offsite within a farm of computer servers. We could connect to and update this app through the internet. We might decide to rent one physical machine for our app, or to share a machine with other apps. If our Web App becomes more popular, we would need to make use of multiple machines and additional software to distribute the workload of incoming user requests. Cloud Computing extends upon the server farm concepts to allow us to think less about the physical machines.
>
> **[1:36](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/solutions-before-cloud-computing-14491062?u=76281980&t=96)** Management of the physical machines is delegated to a team of people responsible for keeping the electricity on and a computer's running a high reliability. As the application developer owner, we're still responsible for operational configurations and of course, for apps and [[User Experience (UX)|user experience]]. The current generation of Cloud Computing Solutions was spurred in part by Amazon's 2006 introduction of Elastic Compute Cloud, [[Amazon EC2|EC2]], and simple storage services, S3. With EC2, people could rent and configure virtual computing instances for hosting apps. With S3, people could store files of any size without thinking about hard drive limitations. By watching this video, you've expressed interest in using the latest Cloud Computing Solutions from Amazon, [[Microsoft]], [[Google]], and others. The decision to use one of these Cloud providers is not always super clear. We will talk more about this next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cloud Computing]] (4), [[Microsoft Office|Office]] (2), [[Amazon EC2|Ec2]] (2), [[Cloud Services]] (1), [[Hardware]] (1)
> **Env Vars:** ec2 (2)
> **CLI Commands:** make (1)
> **Tools:** command line (1)
> **Definitions:** refers to (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [Evaluate urgency of cloud migration](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/evaluate-urgency-of-cloud-migration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/evaluate-urgency-of-cloud-migration?u=76281980&t=0)** - [Instructor] Technology is full of buzzwords and futuristic ideas. Remember when [[Google]] Glass appeared and we envisioned a future where everyone walked around town with cameras and computers on their faces? Just because the technology exists doesn't mean that we must change everything to make use of it in the next 24 hours. Keep this in mind with [[Cloud Services]] as well. Take some time to understand the potential benefits and challenges, including to test on prototypes or limited parts of the system. There may be lots of nuances that relate to your specific product and business. Let's consider some examples of companies who made significant decisions related to the cloud. Netflix operates a huge streaming video service. In 2008, they were shipping a lot of DVDs. A database issue in their data center led to an outage that prevented DVDs from being shipped for three days. This outage led them to start a seven-year journey to migrate to the cloud for better reliability. Netflix did a lot of experimentation and testing along the way. Finishing the migration also didn't eliminate all service outages, but Netflix was able to significantly grow their user base while maintaining a high quality of service. At this point, I've heard that it'd be less expensive for Netflix to run their own data centers again, instead of relying on a cloud provider. However, for Netflix, ongoing reliability and ease of use are more important than cost savings so they're continuing to run on the cloud. Dropbox, the online storage service, made a different decision. Dropbox started off in 2007 using [[Cloud Storage]] for user files. After a lot of growth, Dropbox took on an infrastructure optimization project in 2015 to migrate most of its users' files
>
> **[1:35](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/evaluate-urgency-of-cloud-migration?u=76281980&t=95)** to its own custom servers and data centers away from the cloud. This unusual decision led to some operational cost savings for Dropbox in about two years. It's also an example of how different companies can think differently about the cloud. By the way, Dropbox still uses a cloud for its users in Europe and other places that are farther away from Dropbox's own data centers. There are also companies like [[Facebook]] that have always managed their own infrastructure, including building out massive data centers. When Facebook has acquired companies, they've taken on migration projects to host [[Microsoft Products|products]] on the main Facebook infrastructure, [[Instagram]] and WhatsApp are two acquire products that migrated from cloud providers to Facebook's custom infrastructure. A potential downside of such a decision would be that service outages can affect multiple products. Next we'll consider how you can establish goals that best fit your organization's infrastructure needs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Facebook]] (4), [[Microsoft Products|Products]] (3), [[Google]] (1), [[Cloud Services]] (1), [[Cloud Storage]] (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Establish goals for cloud migration](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/establish-goals-for-cloud-migration-14487167?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/establish-goals-for-cloud-migration-14487167?u=76281980&t=0)** - [Instructor] If your company already has existing infrastructure, you'll have various data points on its functionality, reliability, [[Scalability]], security, costs, and ease of use. Perhaps the best reason for migrating infrastructure is that the previous technology solution has become a bottleneck for product and business growth. For example, too many outages that are affecting product quality and customer retention or scaling issues that are preventing new customers from being onboarded smoothly enough or functionality and ease of use issues that are adversely affecting the speed of [[Product Development]]. I've heard security cited as a reason both to move toward the cloud and to move away from the cloud. In my past life, I worked at [[Microsoft]] on a product that encrypted hard drive data. This product addressed the security concern that anyone with physical access to computers and servers could walk away with sensitive information. I then worked at [[Google]] on a product that collected and analyzed web traffic data and stored it on Google servers. Some security departments expressed concern that to use this product, a third party company would need to store their sensitive traffic data. My point here is that any change can trigger potential fears. Just as we as consumers have gotten comfortable with storing our credit card information at online sites like Amazon, we can have a reasonable degree of trust that the current generation of top cloud providers are working to minimize the downside risks of their [[Microsoft Products|products]]. For those of us who lack an unlimited budget, cost is another factor to consider. Many startups rely on cloud providers to build out new products at minimal costs. But I also have to caution companies who say that they wish to move the cloud
>
> **[1:32](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/establish-goals-for-cloud-migration-14487167?u=76281980&t=92)** simply because they think it will lower their costs. A migration can be a large undertaking with its own costs in [[Human Resources (HR)|human resources]], time and quality control. Operating on cloud can also be more expensive depending on the situation. In the long-term, growth factors such as functionality, reliability, scalability and ease of use could be more important reasons to change existing infrastructure. A well-functioning cloud solution can help create a more efficient organization. I also believe it's helpful to consider technology changes in the context of an organization's broader situation. While serving as a technology consultant, I've recommended that a small company keep going on their status quo non-[[Cloud Infrastructure]] until the company's customer needs can more clearly justify new infrastructure investments, including a migration to the cloud. The quality of customer service from the cloud providers can become influential in how your company can best make use of the cloud. Large companies, such as Netflix and Spotify, have developed close working relationships with their cloud providers so that unexpected issues can be resolved more quickly. Smaller companies can also benefit from advice and materials, including tips on how to optimize costs. Once you prioritize your goals, cloud providers and others can help you execute on them effectively.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Scalability]] (2), [[Google]] (2), [[Microsoft Products|Products]] (2), [[Product Development]] (1), [[Microsoft]] (1)
> **Analogies:** such as (2), for example (1)
> **CLI Commands:** make (1)
> **Best Practices:** recommended (1)
> **Warnings:** caution (1)
> **Speakers:** - [instructor] (1)


### 2. Baseline Functionality Available in the Cloud

[↑ Back to Table of Contents](#table-of-contents)

#### [Current major cloud providers](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/current-major-cloud-providers-14489110?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/current-major-cloud-providers-14489110?u=76281980&t=0)** - [Instructor] Currently in the United States, the top-three cloud providers are [[Amazon Web Services (AWS)|Amazon Web Services]], [[Microsoft Azure]] and [[Google Cloud Platform (GCP)|Google Cloud Platform]]. Other cloud providers include IBM, Oracle and Alibaba. We'll be going over the baseline functionality available in the Amazon, [[Microsoft]] and [[Google]] clouds. Note that we don't have to choose one cloud provider for all of our functionality needs. For example, we can use one provider for storage and another for running code. Each provider has a number of options to store your data and files. If you already use [[Databases]] in your existing infrastructure, there's a matching option in the cloud. [[SQL]] databases are popular for storing data into structured tables. Cloud options for SQL databases include Amazon Aurora, [[Microsoft Azure|Azure]] SQL Database and [[Google Cloud Platform (GCP)|Google Cloud]] SQL. Not all data needs to be stored in databases. One of the most popular [[Cloud Services]] allows your applications to store objects, such as text files, image files, or video files into buckets and folders. The relevant cloud services include Amazon S3, Azure Blob Storage, and Google Cloud Storage. Any computer system that does anything interesting requires some code to be executed. If you're moving an existing application from your own physical machines to the cloud, [[Virtual Machines]] allow you to do the migration without rewriting code. Offerings include [[Amazon EC2]], Azure Virtual Machines and Google Compute Engine. If you are building or rewriting applications and want to think even less about infrastructure,
>
> **[1:33](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/current-major-cloud-providers-14489110?u=76281980&t=93)** there are [[PaaS|Platform as a Service]] solutions to operate one layer above virtual servers. As an application developer, I like these solutions because they can simplify a lot of infrastructure decisions. They help me be more efficient. Such solutions include Google App Engine, Microsoft App Service and Amazon Elastic Beanstalk. I've also used Heroku, which is built on top of Amazon EC2. Later on this course, we'll talk more about the other options for running code, such as serverless and containers. Once you have code running and it's accessing collecting data, you almost always need to do some data analysis to surface insights. The current generation of cloud providers include various tools that address challenges with the rapidly increasing tide of data, so-called [[Big Data]]. When you need to make predictions or recommendations based on collected data, machine learning methods can become useful. These methods are a part of the larger field of [[Artificial Intelligence (AI)|artificial intelligence]]. It's a term that describes how computers can add value to human tasks. The major cloud providers include artificial intelligence tools, such as machine learning or visual recognition. Each cloud provider also has basic administrative tools, such as [[User Management]], billing management and monitoring. Cloud services have grown more complex over the years, and it's up to us to simplify things and figure out what tools are most relevant for our needs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (4), [[SQL]] (4), [[Google]] (3), [[Microsoft Azure|Azure]] (3), [[Cloud Services]] (3)
> **Env Vars:** sql (4), ec2 (2), ibm (1)
> **Analogies:** such as (4), for example (1)
> **CLI Commands:** make (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Storing data and files](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/storing-data-and-files-14489111?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/storing-data-and-files-14489111?u=76281980&t=0)** - [Instructor] We all know what files and directories look like on our local computers. What would it look like on the cloud? Amazon S3 short for Simple Storage Service popularize the concept of reliable cloud-based storage, that charges developers a few cents per gigabyte of objects and fractions of a cent per gigabyte of download. Dropbox, build their synchronized file service on S3 and use this successfully for many years. Amazon S3 and [[Google Cloud Platform (GCP)|Google Cloud]] Storage use similar terminology for their object storage solutions. Files are organized into buckets and folders within buckets. There are no practical limits on how many objects you can store. You can even store [[HTML]], CSS, and image files into a bucket and configure it to serve a public website made out of static pages. [[Microsoft Azure]] uses slightly different terminology for their [[Microsoft Azure|Azure]] Storage. You create a storage account and then create a container within that account that can be filled with blobs.
>
> **[1:09](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/storing-data-and-files-14489111?u=76281980&t=69)** Blobs can be any file you want to upload and can also be made public and accessible through the web.
>
> **[1:22](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/storing-data-and-files-14489111?u=76281980&t=82)** Data that store point of files can also be organized into [[Databases]] of rows and columns. For example, each row of a database table can refer to a register user for an application and each column can contain data on the user's preferences. Databases have seen continue innovation in recent years as demands increase on the volume of data that needs to be stored in a how quickly that data can be accessed and analyzed. If you have existing applications that use relational [[SQL]] Databases, it's simplest to migrate to the same type of database in the cloud. Cloud options for SQL Databases include: Amazon Aurora, Azure SQL Database and Google Cloud SQL. They have all the crane functionality you're used to. Some applications that specialized requirements on their databases. In 2006, a team at [[Google]] published a research paper describing how they had built their own distributed data store called Bigtable. Bigtable could store millions of gigabytes of web pages across thousands of machines. It helps spurred the development of other distributed non-[[Relational Databases]], so-called [[NoSQL]] Databases. Today, Google Cloud Bigtable is available more broadly. Though it's likely overkill for a vast majority of applications. Other non-relational database options include: Amazon DynamoDB, Azure Cosmos DB, and Google Cloud Firestore. If you're not sure whether to go with a SQL or NoSQL Database, I would suggest going with a SQL Database to start. The knowledge to access data using SQL is much more widespread
>
> **[2:53](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/storing-data-and-files-14489111?u=76281980&t=173)** and meets the needs for most use cases. I've used the NoSQL DynamoDB storing a mobile apps usual lock data and found it a bit too late that it wasn't really possible to do the types of craze I wanted with that NoSQL Database. Others have also encountered similar challenges and decided to migrate the data to SQL Database for better ease of use and sometimes lower costs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (8), [[Databases]] (6), [[Google Cloud Platform (GCP)|Google cloud]] (4), [[NoSQL]] (4), [[Microsoft Azure|Azure]] (3)
> **Env Vars:** sql (8), html (1), css (1)
> **Definitions:** short for (1)
> **Analogies:** for example (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [Executing code](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/executing-code-14487163?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/executing-code-14487163?u=76281980&t=1)** - [Instructor] In the cloud, we have numerous options for running code written in various programming languages. Currently popular programming languages and frameworks include [[Node.js]], [[JavaScript]] and [[Python (Programming Language)|Python]]. Of course, we're definitely not limited to using just a few languages or tools. Anything you can build and deploy that resides within on-premises computers can be set up in the cloud by recreating the same environment in a virtual machine. The key idea is that you can rent the computing power you need without having to buy physical [[Hardware]]. Let's take a look at the variety of computing environments available to us. We'll use [[Microsoft Azure|Azure]] [[Virtual Machines]] for demonstration purposes. [[Amazon EC2]] and [[Google]] Compute Engine have similar offerings. We name our virtual machine instance and specify which region of the world it should be located. Locating an instance in a region allows for faster response times from that region. We can choose an operating system among many variants of [[Windows]] or [[Linux]]. These operating systems exist on pre-built disk images. We can go with the default configuration for computing horsepower, or choose to change specifications like CPU or GPU, memory, and more. If all these choices are feeling a bit overwhelming, I can empathize. Infrastructure configuration can be simplest if you already have a reference point as to which competing environment can work well. For example, based on your existing on-premises solution. You can always increase horsepower later. As an application developer, I like to think even less about infrastructure decisions and run my code on higher level platforms.
>
> **[1:35](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/executing-code-14487163?u=76281980&t=95)** These [[PaaS|Platform as a Service]] options include: Google App Engine, Amazon Elastic Beanstalk, and [[Microsoft]] App Service. A few years ago, I needed to migrate an old static website to a new provider. I chose Google App Engine because of simplicity. Up to a certain traffic level, hosting the site was free. I've also used Heroku for applications written in Node.js and Ruby on Rails. Heroku is simple and cost-effective for smaller applications and prototypes, though gets pricier as your usage scales. Another way to run code in the cloud is to what is called [[Serverless Computing]]. Basically, serverless lets you run a chunk of code whenever an event occurs. Serverless architecture doesn't work for everything. For example, it doesn't currently work for processes that need to run for longer than a few minutes. However, serverless can be very cost effective and efficient to build, and it's a default architecture for newer applications such as handling voice commands from Amazon Alexa or Google home devices. Serverless solutions include AWS Lambda, [[Google Cloud Platform (GCP)|Google Cloud]] Functions and Azure Cloud Functions. Finally, the idea of putting code into lightweight containers has become more popular in recent years because of the ability for these containers to be run from many environments. We'll talk more about containers later on in this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (4), [[Node.js]] (2), [[Microsoft Azure|Azure]] (2), [[JavaScript]] (1), [[Python (Programming Language)|Python]] (1)
> **CLI Commands:** node (2), python (1), ruby (1), rails (1), aws (1)
> **Env Vars:** ec2 (1), cpu (1), gpu (1), aws (1)
> **Analogies:** for example (2), such as (1)
> **File Paths:** node.js (2)
> **Definitions:** is called (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Analytics and insights](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/analytics-and-insights-14490099?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/analytics-and-insights-14490099?u=76281980&t=0)** - [Instructor] Historically, [[Web Servers]] such as Apache generated logs that stored every page view as a line in a text file containing the time of visit, the user's IP address, and so on. To make it easier to gather insights, tools like [[Google]] Analytics evolved to collect tracking data from web and mobile apps and to automatically generate relevant reports. The digital world has grown more complex as we gather more and more data from all kinds of places, including, but not limited to, the web. As the size of the data increases to a thousand gigabytes and one million gigabytes, it becomes unwieldy and slow to use regular [[Databases]] to handle these terabytes and petabytes of data. The cloud tools for [[Data Warehousing]] and analysis offered by Amazon, [[Microsoft]], and Google exist in a wider ecosystem of open-source and third-party tools. If you find your existing databases sufficient, then there's not an urgent need to make use of so-called [[Big Data]] solutions. New solutions generally evolve because developers and business folks encounter roadblocks and challenges with previously existing solutions. Data warehouses are used to store massive amounts of historical data for later querying and analysis. Options include Amazon Redshift, Google BigQuery, and [[Microsoft Azure|Azure]] [[SQL]] Data Warehouse. Providers of these solutions compete with each other on performance, cost, and ease of use. The marketing of these solutions can be confusing and/or misleading, so objective perspectives are helpful. Third-party data warehousing solutions, such as [[Snowflake]],
>
> **[1:33](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/analytics-and-insights-14490099?u=76281980&t=93)** have also gotten positive reviews from their customers. [[Real-Time]] [[Data Streaming]] and processing is another area of recent innovation. Options here include Amazon Kinesis, [[Google Cloud Platform (GCP)|Google Cloud]] Dataflow, and Azure Stream Analytics. Some of these solutions are inspired by [[Open-Source Software]], such as [[Apache Kafka]], a system originally developed at [[LinkedIn]] to handle vast amounts of real-time data, such as site events and mail messages. Other analysis tools provide easier querying and visualization abilities. These include Google Data Studio, Amazon Athena, and Azure Analysis Services. In general, I would suggest going beyond the big three technology companies for data visualization. Perhaps it's best to develop a custom implementation based on your specific product and business needs. Companies such as [[Tableau]] and Looker have solutions that have become popular in recent years. Another aspect of data analysis involves making predictions or recommendations based on collected data. Options for building your own custom predictive models include Google Cloud Machine Learning Engine, Amazon Machine Learning, and Azure Machine Learning. My perspective is that machine learning in its current state is still highly prone to trial and error, and its effectiveness greatly depends on the quality of the collected data. It's easiest to utilize pre-built machine learning and [[Artificial Intelligence (AI)|artificial intelligence]] solutions that best fit your specific product and business needs. For example, image and text recognition solutions from Amazon, Google, and Microsoft,
>
> **[3:06](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/analytics-and-insights-14490099?u=76281980&t=186)** such as Amazon Rekognition, Google Cloud Translation, and Azure [[Computer Vision]]. We'll talk more about [[Prototyping]] specialized functionality later in this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (5), [[Microsoft Azure|Azure]] (5), [[Google Cloud Platform (GCP)|Google cloud]] (3), [[Databases]] (2), [[Data Warehousing]] (2)
> **Analogies:** such as (6), for example (1)
> **CLI Commands:** apache (2), make (2), find (1)
> **Env Vars:** sql (1)
> **Cross-References:** later in (1)
> **Best Practices:** it's best to (1)
> **Speakers:** - [instructor] (1)


### 3. Historical Strengths of Three Major Cloud Providers

[↑ Back to Table of Contents](#table-of-contents)

#### [Amazon Web Services](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/amazon-web-services-14485189?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/amazon-web-services-14485189?u=76281980&t=0)** - [Instructor] Amazon was the first company to make [[Cloud Infrastructure]] available to developers at other companies. This head start allow Amazon to have the largest share of the [[Cloud Computing]] market as of 2019. Two of the earliest [[Amazon Web Services (AWS)|Amazon Web Services]] offerings are still among their most well-known, Amazon Simple Storage Service, S3, and Amazon Elastic Compute Cloud, [[Amazon EC2|EC2]]. S3 is like the developer's version of Dropbox that can automatically scale across millions of gigabytes. S3 is so well used that in the few times when there was an S3 service outage, dozens of popular services, including Airbnb, Medium and [[Slack]] also experienced issues. EC2 allows teams to rent machine instances that are analogous to setting up physical machines, but without the physical effort or upfront [[Hardware]] purchases. If you want to migrate existing on-premises software to the cloud, a basic approach is called lift and shift. This approach requires minimal or no modifications to the existing on-premises software, just analogous virtual instances, such as EC2 instances. AWS Lambda is a service that runs code in response to events. When compare with EC2, Lambda is less costly to maintain and operate. However, Lambda is not suitable for code that runs longer than a few minutes. And the migration of on-premises applications with Lambda will likely require significant code rewrites and testing. Because Amazon was the first to market with Lambda before similar offerings from [[Microsoft]] and [[Google]], some people use Lambda synonymously
>
> **[1:35](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/amazon-web-services-14485189?u=76281980&t=95)** with serverless and [[Microservices]], words that basically describe a more modular, lightweight way of implementing applications. AWS also has proprietary offerings, such as the Aurora Database that may be beneficial to users. Amazon claims that Aurora is up to five times faster than standard [[MySQL]] [[Databases]], and three times faster than PostgresSQL databases, at a price that's 1/10 that of a commercial database. That sounds great, and some companies are indeed planning to migrate to Aurora. However, be sure to benchmark such a database against your own applications before deciding to migrate. Some users have seen higher per hour pricing with Aurora compared to their previous solution, a cost that can sometimes be justified by database performance gains. In general, if your existing database is delivering on the product and [[User Experience (UX)|user experience]] requirements you want, migration for the sake of migration is probably not useful. Over the years, Amazon has developed an ecosystem around their cloud offerings, partly because it's complex and overwhelming to wade through all the AWS options and configurations. An annual conference, AWS re:Invent, started in 2012. Amazon opened free-to-visit pop-up lofts in San Francisco, New York City, and a few other international cities to help guide developers. Amazon launches new cloud features and changes at a fast pace, so there's always something new to consider. Keep in mind though that simply the availability of a new tool doesn't mean that the tool is best-in-class
>
> **[3:08](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/amazon-web-services-14485189?u=76281980&t=188)** or something that would be a great fit for your use cases.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Amazon EC2|Ec2]] (4), [[Databases]] (2), [[Cloud Infrastructure]] (1), [[Cloud Computing]] (1), [[Amazon Web Services (AWS)|Amazon web services]] (1)
> **Env Vars:** ec2 (4), aws (4)
> **CLI Commands:** aws (4), make (1), mysql (1)
> **Analogies:** such as (2), analogous to (1)
> **Definitions:** is called (1), is a  (1)
> **Tools:** slack (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Google Cloud Platform](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/google-cloud-platform-14485187?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/google-cloud-platform-14485187?u=76281980&t=0)** - [Instructor] [[Google]] has a reputation for designing simple-to-use consumer [[Microsoft Products|products]]. They're technically advanced under the hood. When the millennial Snapchat founder started to build their app in 2011, they felt too overwhelmed by [[Amazon Web Services (AWS)|Amazon Web Services]], and so use Google App Engine instead. Today, App Engine is part of the [[Google Cloud Platform (GCP)|Google Cloud Platform]], and continues to offer a [[PaaS|platform as a service]] developer experience that requires less infrastructure configuration than creating [[Virtual Machines]]. Because of the reduced configuration requirements, App Engine is also marketed as a serverless platform. Google started their Annual Cloud Conference in 2016 to better connect with developers in their ecosystem. Historically, despite Google's popularity with consumers, their cloud developer ecosystem has been slower to build up. As such, data from 2018 showed that there are fewer enterprises who are on Google's Cloud compare with Amazon and [[Microsoft]]. One way that Google has been differentiating themselves is by their investments in [[Artificial Intelligence (AI)|artificial intelligence]] and machine learning. These are computational approaches that can enable applications to tackle business and research problems an behalf of humans. Google created custom machine learning [[Hardware]] called Tensor Processing Units, TPUs. This hardware is used to process workloads for search, street view, photos and translate. TPUs were also used to play the game, "Go" against humans. The TPU-enabled software won against the best human "Go" players in the world before retiring in 2017. Today, anyone can rent TPU hardware
>
> **[1:34](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/google-cloud-platform-14485187?u=76281980&t=94)** through Google's Cloud. For those interested in artificial intelligence, and machine learning, Google Colab is a popular tool that allows anyone to create, and share notebooks, containing educational or research code. Colab users can run code on GPU or TPU hardware for free. By making a tool easy and free to use, Google is expanding access to students, and others who might not have tried other [[Google Cloud Platform (GCP)|Google Cloud]] Services. Artificial intelligence beginners, enthusiasts may also be interested in Google's AutoML, a pay tool set that automatically generates, and trains machine learning models. In general, I would recommend giving Google's artificial intelligence tools like Cloud Vision, Cloud Speech-to-Text, and Cloud Translation, a consideration when implementing such scenarios for your application. Later in this course, we'll go more into how to prototype specialized functionality to best fit your applications needs. [[Kubernetes]] is an open-source project initiated by Google that now has contributors, and supporters across industry, including Microsoft and Amazon. Kubernetes helps make distributed cloud applications easier to reliably maintain, and scale. Application code can be put into containers, which are then deploy with Kubernetes, and are portable across different cloud providers, and even to on-premise machines. For those folks who desire more configuration control than platform as a service solutions, such as App Engine, the plane containers to Kubernetes can be a better option
>
> **[3:06](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/google-cloud-platform-14485187?u=76281980&t=186)** than the point directly to virtual machines. We'll dive more into containers later in this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (13), [[Artificial Intelligence (AI)|Artificial intelligence]] (4), [[Hardware]] (4), [[Kubernetes]] (4), [[Virtual Machines]] (2)
> **Env Vars:** tpu (3), gpu (1)
> **Cross-References:** later in (2)
> **Tools:** colab (2)
> **Definitions:** is a  (1), is an  (1)
> **CLI Commands:** make (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Microsoft Azure](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/microsoft-azure-14487162?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/microsoft-azure-14487162?u=76281980&t=0)** - [Narrator] [[Microsoft]] has strong brand recognition and usage among enterprises, which has helped the company gain adoption for its [[Microsoft Azure|Azure]] Cloud Platform. A lot of companies already use [[Microsoft SQL Server]], [[Windows Server]], .NET, [[Active Directory]], and other [[Microsoft Products|products]]. For those companies, it can be a natural fit to consider Azure for their cloud needs. Historically, Microsoft has appreciated the value of developers, having gained dominance in the operating systems market, partly due to the availability of [[Windows]] applications. As the developer ecosystem expanded to mobile phones, Microsoft could not reach the same scale for Windows mobile, ultimately ceding the mobile market to Apple and [[Android]]. Now that developers and enterprises are making use of the cloud, Microsoft is motivated to avoid conceding either market share or mind share. The quality and reputation of Microsoft's cloud offerings have improved in recent years. I remember in 2015, when [[Microsoft Azure]] offered very generous credits for startups in Silicon Valley to build on their platform. And even then, many startups were reluctant to build on Azure due to concerns about platform reliability. On the flip side, other companies are much more familiar with Windows products and have teams that are well versed in the Microsoft developer ecosystem. As of 2018, Microsoft's Visual Studio Code is the most widely used code editor among developers. This code editor can be configured to more easily deploy to Azure, including to the Azure App Service. Also in 2018, Microsoft acquired [[GitHub]], a cloud-based hosting service for code
>
> **[1:35](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/microsoft-azure-14487162?u=76281980&t=95)** that's very popular among both enterprises and the open source community. In general, most functionality that folks can do on [[Google]] and Amazon's cloud platforms can be done on Azure. With the help of Microsoft's experience Working with enterprises, usage of Azure has grown to a number two market share position after Amazon. Interestingly, as of early 2019, Microsoft still lacks big technology brands that both utilize and customize their cloud. However, companies like Adobe have seen a lot of success working with Microsoft Azure. The differentiators that Microsoft Azure bring is a combination of ease of use and the ability to work with on-premise environments to create a hybrid approach to the cloud. The majority of companies are not like startups or technology companies that can both build from scratch and can customize a technology with fleets of engineers. These companies often already have licenses for various [[Microsoft Products]] and can transport them to the cloud as well.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft]] (10), [[Microsoft Azure|Azure]] (7), [[Windows]] (3), [[Microsoft Azure]] (3), [[Microsoft Products|Products]] (2)
> **Env Vars:** sql (1), net (1)
> **Tools:** visual studio (1), github (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)


### 4. Compliance in the Cloud

[↑ Back to Table of Contents](#table-of-contents)

#### [Business regulations overview](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/business-regulations-overview-14490100?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/business-regulations-overview-14490100?u=76281980&t=0)** - [Instructor] A top reason that companies are reluctant to migrate to the cloud involves their need to comply with existing business regulations, including policies around security and [[Privacy]]. Technology tends to evolve faster than laws, and the people who write compliance policies are often not well versed in the latest technologies. It also doesn't make it easy that each country and region has its own sets of regulations. The good news is that the top cloud providers are more aware than ever of their customers' compliance needs. Customers in heavily-regulated industries, such as financial services, healthcare and government, have already started using the cloud. I believe the fear and confusion around cloud compliance will lessen even more over time. As an example, it wasn't too long ago that people were afraid to provide their credit card information online to [[E-Commerce]] websites. Those security and [[Privacy Issues]] may never be perfectly resolved. The benefits often outweighed the potential issues. We can also create processes to help address issues quickly, as they arise. Access and [[Data Security]] are key aspects of compliance and general application health. Identity and access management, IAM solutions, are included on Amazon, [[Google]], and [[Microsoft]] clouds. Each cloud account has a root user, who is able to administrate everything in that account. This user creates individual users and user groups and assigns them permissions for various aspects of the account. Each person who needs to access and make changes in the cloud
>
> **[1:32](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/business-regulations-overview-14490100?u=76281980&t=92)** should have their own account and security credentials. With these user accounts set up, the cloud can be configured to log user accesses for later auditing needs. Data encryption can be easier in the cloud than with on-premise servers. Encrypting a cloud data store can be done by setting a configuration option. By doing so, the data is protected at [[Representational State Transfer (REST)|rest]], so that anyone with access to the hard drive won't be able to read the data. In the simplest option, the cloud provider transparently manages access to the encryption key. When the data is in transit across a network, it can be encrypted through industry standard HTTPS. To help companies address their specialized compliance requirements, the top cloud providers have published various materials that guide users with policies around the world. Ultimately, regulatory responsibilities and any penalties for non-compliance is specific to the business. It's up to your company to determine what regulations are applicable, and to implement corresponding policies.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Privacy]] (1), [[E-Commerce]] (1), [[Privacy Issues]] (1), [[Data Security]] (1), [[Google]] (1)
> **CLI Commands:** make (2)
> **Env Vars:** iam (1), https (1)
> **Analogies:** such as (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [GDPR (EU data regulations)](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/gdpr-eu-data-regulations-14489114?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/gdpr-eu-data-regulations-14489114?u=76281980&t=0)** - [Instructor] General Data Protection Regulation, GDPR, is a European Union law related to [[Data Security]] and [[Privacy]]. It applies to companies that collect personal data from EU residents, even if the companies are based outside the EU. GDPR became enforceable in 2018 with the potential fine of up to 20 million euros, or 4% of the previous year's business revenue, whichever is higher. The first fines range from around 4,000 to 400,000 euros. Violations included storing user passwords in unencrypted form, and allowing non-active doctors to access all patient files in the hospital. To correct these violations, only hashed or encrypted versions of passwords should be stored. And only active doctors who need access to patient files for their work should be granted such access. The hope is that GDPR gives people more control over their personal data. In many cases, companies will need to ask EU residents for consent to use their personal data for a specific purpose. These users can decide to withdraw their consent. Companies must collect only enough personal data that's necessary to fulfill the stated purpose, and to remove the personal data if it's no longer necessary for the stated purpose. Data must be stored securely, minimizing the risks for data breaches. If there's a data breach that affects user privacy, the breach must be reported within three days. In addition, EU residents can ask companies
>
> **[1:34](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/gdpr-eu-data-regulations-14489114?u=76281980&t=94)** for a copy of their stored personal data, and can also ask for this data to be deleted. GDPR requires cloud providers to provide sufficient guarantees in a written contract about the data that they're processing on behalf of their customers. Amazon, [[Google]], and [[Microsoft]] have all met this bar. In addition, each cloud provider has published materials to help their customers understand and comply with data protection regulations. Access control and data encryption are key components of both good security hygiene and compliance with GDPR. Use a cloud provider's identity and access management, IAM solutions, to set up user accounts and permissions that are appropriately scoped. Regularly review permissions granted to active users, and disable inactive users. Non-public or personal data should always be stored in encrypted format. Cloud providers have the ability to enable this encryption in their data services. Make sure to use these capabilities and to access data through secure channels, such as HTTPS. Notification of a data breach is not required if the accessed data was encrypted and unreadable. There's currently not an official certification program for companies who need to comply with GDPR. However, you can use the latest news reports about GDPR violations to consider how your company can avoid similar issues. Because some of the legal language around GDPR can be open to interpretation, make sure to document the actions that your company has taken
>
> **[3:06](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/gdpr-eu-data-regulations-14489114?u=76281980&t=186)** to address data protection obligations. In my view, complying with GDPR does not require upending your entire infrastructure or switching cloud providers. It requires distilling the legal requirements, reviewing and upgrading processes and documenting accordingly.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Privacy]] (2), [[Data Security]] (1), [[Google]] (1), [[Microsoft]] (1)
> **Env Vars:** gdpr (9), iam (1), https (1)
> **CLI Commands:** make (2)
> **Best Practices:** make sure to (2)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [HIPAA (US health care regulations)](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/hipaa-us-health-care-regulations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/hipaa-us-health-care-regulations?u=76281980&t=0)** - [Instructor] The US Health Insurance Portability and [[Accountability]] Act, HIPAA, governs the handling of protected health information. HIPAA applies to any American organization that interacts with patient healthcare data, including medical records and prescription payment information. Enforcement of HIPAA began in 2003. As of January 2019, the US Department of Health and Human Services has imposed a civil penalty in 62 cases and an average fine of about $1.5 million per case. Often following complaints, many types of organizations have been investigated, including major medical centers, hospitals, and a small health provider [[Microsoft Office|office]]. According to the US government, the most frequently investigated HIPAA violations involve these five areas. Impermissible uses and disclosures of protected health information, lack of safe guards of protected health information, lack of patient access to their protected health information, lack of administrative safeguards of electronic protected health information, and use or disclosure of more than the minimum necessary protected health information. Recent violations highlight the importance of data encryption and access control, not just in the cloud but also in on-premise environments. In one medical center, employees lost laptops and USB drives containing the unencrypted health data of 33,000 people. This case was settled with a $4.3 million fine.
>
> **[1:35](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/hipaa-us-health-care-regulations?u=76281980&t=95)** In 2015, a large health benefit company discovered that cyber attackers had gained access to 79 million patient names, social security numbers, and more, through [[Phishing]] emails. This case was settled with a $16 million fine. Details on all violations and fines are published on the Health and Human Services website. If a company discovers a breach of unsecure health data, notification is generally required within 60 days. When a company processes or stores protected health information in the cloud, the cloud provider would be considered a business associate for that company. As such, the company must have a written HIPAA Business Associate Agreement with the cloud provider. Thankfully, Amazon, [[Microsoft]], and [[Google]] all have such agreements available. These HIPAA specific agreements, and related materials, should be reviewed separately for each cloud provider that your company chooses to use. Each cloud provider has a list of covered services under HIPAA. While the lists are extensive, you and your company may be considering using a service that's not on those specific provider's cover list. It's worth reviewing the details and following the cloud providers process for opting into the HIPAA agreement. Ultimately, your company's responsible for complying with HIPAA as applicable. There's no official certification program for complying with HIPAA. However, the intent behind the law is similar to other data protection policies around the world.
>
> **[3:09](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/hipaa-us-health-care-regulations?u=76281980&t=189)** By understanding the requirements and following good security practices around access control, encryption, and documentation, you and your company will reduce the risk of data breaches and user [[Privacy]] violations.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Accountability]] (1), [[Microsoft Office|Office]] (1), [[Phishing]] (1), [[Microsoft]] (1), [[Google]] (1)
> **Env Vars:** hipaa (10), usb (1)
> **Versions:** 1.5 (1), 4.3 (1)
> **Speakers:** - [instructor] (1)


### 5. Human Resources for the Cloud

[↑ Back to Table of Contents](#table-of-contents)

#### [Assess current skills and needs](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/assess-current-skills-and-needs-14485188?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/assess-current-skills-and-needs-14485188?u=76281980&t=0)** - [Instructor] Whether you're part of a small company or a large enterprise, it can be a challenge to prioritize, and provide enough time, and resources to accomplish organizational goals. If you've decided to put energy toward cloud projects, one of the first steps involves creating a team who will be responsible for tackling cloud-related challenges. Small teams can be more [[Agile Development|agile]] than large teams, even within large enterprises, smaller teams with a sufficient sense of ownership and autonomy can help quickly drive towards a business, and technological solutions. Where relevant, these teams can make use of the broader set of resources and experiences inside, and outside the organization. Within your current organization, you might already be aware of one or more people whose skills and interests, are aligned with your highest priority goals for cloud projects. These people can help you further flesh out details, including how to determine whether a cloud project would succeeded in meeting top organizational objectives. This team can also help clarify the current set of skills, and needs within your organization, as well as the current unknowns that will require more investigation. Since the current generation of [[Cloud Services]] has seen a lot of growth, and changes in recent years, it's important for your cloud team to be open to new possibilities, and new solutions. It can be natural for people to gravitate to what they already know, what feels like the least change, or what is the most popular trend at the moment. However, one thing I've seen in my 20 years of working with technology is that popular trends and tools emerge every few years,
>
> **[1:33](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/assess-current-skills-and-needs-14485188?u=76281980&t=93)** entire fields can appear such as the job of a data scientist. The schools do not specifically train for. Given moderate uncertainties, I feel that people with the ability to do objective analysis to adapt, and to get things done will be helpful regardless of the trends of the moment. The top cloud providers have published plenty of case studies on how different organizations have used cloud services to meet their goals. Keep in mind that these polished case studies may not fully reflect the challenges that the organizations have encountered. It also may not reflect the current state of the art since the study's publication date. In addition, there's a natural tendency for each cloud provider to encourage greater use of the services that they sell. The simplest most practical or most customizable solutions may involve other approaches. To increase the chances of success for your cloud project, I'd encourage you to gather a team of people who can help you define success, who can objectively, and quickly try out potential solutions, and who can implement, and evolve the most practical solutions within your organization. As such, it's less about the number of years of experience with a specific cloud provider, and more about understanding what can best fit your organization at any point in time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cloud Services]] (2), [[Agile Development|Agile]] (1)
> **Warnings:** be aware (1), keep in mind (1)
> **CLI Commands:** make (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Evolve roles and expertise](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/evolve-roles-and-expertise-14486208?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/evolve-roles-and-expertise-14486208?u=76281980&t=0)** - [Instructor] Just as new technological tools will continually emerge, the roles and expertise of your cloud team will also evolve over time. A culture of documentation and knowledge sharing will be super helpful to our onboarding new team members and understanding the reasonings behind decisions that may need to be revisited in the future. In Silicon Valley, it's now common for software engineers to transition roles or companies every three years or so. Sometimes the transitions happen even more quickly than that. As such, the people who may have been critical during one part of a company's cloud journey may not be at the same company within a few years. Within this climate of change, some of the highest performing companies have learned to invest in their staff, including to facilitate employees' preferences and interests in the workplace. These companies work on being a place that external job candidates feel excited to apply to, and also in providing opportunities for the continued growth and development of their staff. Having both high interest and high retention for roles can lead to a more efficient and effective workplace. For example, when [[Facebook]] realized around 2011 that they needed to revamp their mobile strategy to build fully native mobile apps, they didn't just replace existing staff who had worked on the legacy apps. Instead, they hired external trainers to educate their employees on the new programming approaches. This ended up being a win-win for the employees and the company. The employees developed new skills that can help them in the future and the company earned employee loyalty and a retrained staff, ready to help build
>
> **[1:34](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/evolve-roles-and-expertise-14486208?u=76281980&t=94)** the company's next product releases. For cloud projects, one or more staff members would be responsible for architecting the system in a way that meets both technical and non-technical priorities. Consider the cloud architecture as a living system that evolves regularly and now the puzzle was just one correct answer that will be correct indefinitely. There will likely be multiple workable approaches to the same challenge. For example, there are many ways to store data. My recommendation is to pursue an iterative approach. Come up with one or more draft architectures and then put them through real-world scenarios. My general preference is towards simplicity. A simpler architecture that meets requirements is easier to learn, faster to build, and easier to maintain. It's inevitable that extensions or changes will be needed, no matter how much thought or time is put into the initial architecture. Allow your team to adapt and evolve your cloud projects, while documenting and remembering the many lessons learned along the journey. As the number of cloud-based tools has expanded in recent years, the field of [[DevOps]] has emerged to help application developers more efficiently and reliably release their latest app versions. DevOps responsibilities can include the automation of infrastructure setups and the monitoring of deployed code. In smaller teams, often the application developer will continue to be responsible for basic operations needs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DevOps]] (2), [[Facebook]] (1)
> **Analogies:** for example (2)
> **Speakers:** - [instructor] (1)

#### [Prioritize learning and testing](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/prioritize-learning-and-testing-14490097?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/prioritize-learning-and-testing-14490097?u=76281980&t=0)** - [Instructor] The best organizations know that not everything they pursue will succeed a hundred percent of the time, yet they're able to learn from various iterations, and come up with new solutions based on their learnings. An important advantage in pursuing an iterative, and [[Agile Development|agile]] approach to cloud projects is it allows a team to more quickly learn whether potential solutions will fit specific organizational needs. I'd also encourage team members to tackle some of the most uncertain or difficult areas first, so that there's more time to come up with workable solutions. The cost of learning, and testing can be lower earlier in the development process. Before making use of a full production cloud environment, a team would create one or more development environments that resemble what the production environment will become. In lieu of production data, sample test data can be created, and tested with cloud applications. The more the team members can easily experiment, and try out various approaches the more insights the team can gain that will be relevant to launching high quality solutions. In general, building the cloud should make your test efforts more efficient not less. [[Software Testing]] can get complex. There's functionality testing, but also stress and [[Load Testing]], compliance testing, [[Security Testing]], resilience testing, and testing on various browsers and devices. I've seen successful [[Microsoft Products|products]] apply an 80/20 prioritized approach with testing that's also time-limited. For any particular iteration, you can potentially find
>
> **[1:31](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/prioritize-learning-and-testing-14490097?u=76281980&t=91)** the most serious issues with 20% of the total possible testing work including by doing [[Manual Testing]]. For increase agility, I prefer [[End-to-end Testing]] over [[Unit Testing]] since end-users can encounter issues, a span, one or more component units. For me, testing doesn't imply an academic exercise to make sure that every single line of application code is called upon by test code at all possible situations. Quality is important, but so is getting software out the door, and available for you sooner rather than later, even the most technologically advanced companies still rely on customer reports to unearth issues that they didn't find or were not able to address before deployment. Even the most well-supported products have experienced outages. After the initial setups are complete, building quality software in the cloud should feel more efficient than building shrink wrapped, or on-premise software. Checking in, testing and deploying new code can happen multiple times a week, if not multiple times a day. Tuning systems and processes for agility, and quality can be considered an ongoing effort that continually incorporates feedback from your customers and team members.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (2), [[Agile Development|Agile]] (1), [[Software Testing]] (1), [[Load Testing]] (1), [[Security Testing]] (1)
> **CLI Commands:** make (2), find (2)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)


### 6. Prototype for Your Needs

[↑ Back to Table of Contents](#table-of-contents)

#### [Evaluate specialized functionality](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/evaluate-specialized-functionality-14486209?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/evaluate-specialized-functionality-14486209?u=76281980&t=0)** - [Narrator] Cloud providers are continually adding new functionality to their list of available services. Some of this functionality is currently relevant to only a small subset of developers. For example, in 2018, [[Amazon Web Services (AWS)|Amazon Web Services]] launched RoboMaker, a service for robotics developers. [[Microsoft]] has been investing in mixed reality, an ecosystem that blends physical and digital worlds. Mixed reality developers can create applications for the HoloLens and [[Microsoft Azure|Azure]] Kinect devices. To evaluate specialized functionality, it's helpful to draft use cases before diving into the available tools. By clarifying and prioritizing use cases, it'll be easier to determine whether or not available technologies can be part of a holistic solution. Let's say that I own a clothing store and I've just heard about Amazon's RoboMaker. My clothing store is currently understaffed, but I've been having a tough time hiring new employees. Might I be able to supplement my staff with a helpful robot? I'm also interested in understanding how some of the latest technologies might be able to make my customer experience more engaging. I love to have happier customers who buy more clothing from my store and who recommend us to their friends. With this awareness of goals, I start familiarizing myself with RoboMaker to see how it can be helpful for my needs. Can Amazon really make a robot for me? Soon enough, I discover that RoboMaker provides an environment for building software on the open-source Robot Operating System, ROS, but won't actually ship me a physical robot at this time.
>
> **[1:36](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/evaluate-specialized-functionality-14486209?u=76281980&t=96)** A friend told me about a robot that I can buy called Pepper. Pepper looks friendly, but runs on its own operating system. Their other robots are compatible with RoboMaker, including Pepper sibling Nao. At some point, I decided that picking and training a full-sized robot is too complicated for now. Humans are still generally more adaptable than robots. I'm still interested in how technology can help improve my customer's store experience. I consider whether customers might want to interact with [[Google]] Home and Amazon Alexa to ask questions about purchases. If so, I can look into creating a voice app for one of those devices. I know Cortana and Siri are also virtual assistant robots. I can customize Cortana on Microsoft's Azure Cloud. After further consideration, I decide on a more simplified approach. I will try putting a tablet device in my store and provide a way for customers to browse through photos of outfits for inspiration. If feedback from that is positive, then I can commission a tablet application that includes additional features, such as voice and chat interaction for when my human staff members are too busy to interact with all customers. Also, keep an eye out for fancier solutions I might want to utilize in the future. I've heard about technology-enhanced magic mirrors. Maybe my customers will like those as well?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft]] (2), [[Microsoft Azure|Azure]] (2), [[Amazon Web Services (AWS)|Amazon web services]] (1), [[Google]] (1)
> **CLI Commands:** make (2)
> **Analogies:** for example (1), such as (1)
> **Env Vars:** ros (1)
> **Speakers:** - [narrator] (1)

#### [Gather insights through implementation](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/gather-insights-through-implementation-14491060?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/gather-insights-through-implementation-14491060?u=76281980&t=0)** - [Instructor] I recommend building prototypes for experimentation and testing. Prototypes can help you sort out the benefits and limitations of your ideas and tools and can become reference points for what a fully productionized solution would be. In many cases, it's difficult to predict how users will [[React.js|react]] to a solution without putting implementations in front of them. Prototypes are less costly and faster to build than fully polished solutions. There's even the concept of paper prototypes for digital [[Microsoft Products|products]], hand drawn sketches and diagrams that are used for soliciting feedback for further learning and iteration. As described earlier in this course, different cloud providers have different strengths and each provider is working on improving their offerings to better serve their user base. Prototypes with different cloud providers can help you decide which [[Cloud Services]] to use for which scenarios. For agility's sake, you might want to choose a default cloud provider for basic functionalities. For quality's sake, you can further evaluate which cloud services work best for more specialized use cases. Prototypes can unearth limitations that might be tough to discover otherwise. Several years ago, I was recommended to use a particular [[Software Development]] framework for building a new mobile application. This framework fit my needs at the time and worked well with the cloud services that I used. We were able to launch several prototype versions of the mobile application. As the feature set expanded. however, the load time of the mobile application began to slow down significantly. Further investigations and configuration changes
>
> **[1:34](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/gather-insights-through-implementation-14491060?u=76281980&t=94)** didn't lead to noticeable reductions in load time. More recently, I talked to another developer who had the same experience with some of the mobile applications that he and his colleagues built. We had reached the limits of that particular software development framework after some initial iterations. To provide a better [[User Experience (UX)|user experience]] with faster load times, we need to rebuild the applications with a different software framework. Besides gathering insights, setting milestones to demonstrate prototype versions is a great way to keep projects moving along. Projects can take longer than initially assumed. If the goal is to launch a new product within one year, it's much better to have a prototype within one month than to be in a dark about how things can go for half a year. Note that in some very [[Agile Development|agile]] and innovative work cultures, project timelines are set ambitiously. By setting up agile release processes for your cloud projects, you can minimize the cost of missing deadlines while also gathering more insights for the longterm.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cloud Services]] (3), [[Software Development]] (2), [[Agile Development|Agile]] (2), [[React.js|React]] (1), [[Microsoft Products|Products]] (1)
> **Cross-References:** earlier in (1)
> **Definitions:** is a  (1)
> **Best Practices:** recommended (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Image-to-text prototype example](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/image-to-text-prototype-example-14485184?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/image-to-text-prototype-example-14485184?u=76281980&t=0)** - [Instructor] We're going to consider a prototype related to [[Artificial Intelligence (AI)|artificial intelligence]], a way of getting computers to do things on behalf of users. We want to allow user to send the computer program a photo with a text in it. For example, a street sign. The computer program detects the text within the photo. The program can then send a text back to be automatically read aloud or to be translated into different language that the user can more easily understand. Most popular cloud providers have the functionality to extract texts from images. But which cloud provider should we choose? There's a potentially infinite number of images that can be supplied. And there isn't one provider that can 100% perfectly read every possible image. We want to be able to evaluate a few providers and choose one for initial feature launch. We want to launch this feature soon and would also like some flexibility to switch out the provider as needed. To get this done, we can develop a custom API or application programming interface that evaluates and connects to different text detection engines. For this scenario, we'll implement an input page and a backend API that connects to [[Google]], Amazon and [[Microsoft]] engines. We'll use [[HTML]] for the input page and [[JavaScript]] and [[Node.js]] for the backend. This Node.js backend uses a few frameworks to enable the functionality we need, including Express and EJS. For simplicity, we'll put the backend
>
> **[1:32](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/image-to-text-prototype-example-14485184?u=76281980&t=92)** in one JavaScript file that's about 400 lines of code. Let's watch the complete system action. I first load the input page and choose an image file. Oh, look. Here's a nice relaxing image of a sign about tsunami hazard. Remember, it's up to the computer to interpret the sign as accurately as possible. For evaluation purposes, I'll choose all so that all three cloud providers are used. We can see the result. Looks like for this scenario, Microsoft got the most accurate results. This system is actively in use today in a mobile app for learning English. A similar backend that we use for an evaluation is used by the mobile app in production. Of course the app doesn't use all three providers, but relies on the backend to select the default. The app default is currently Google based on testing a set of images that we thought most users might want to try with the app. We can change this default in the feature with a small change in the backend code. Next, we will further consider how to make use of multiple cloud providers for a feature, including going into more code details.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (2), [[Microsoft]] (2), [[JavaScript]] (2), [[Node.js]] (2), [[Artificial Intelligence (AI)|Artificial intelligence]] (1)
> **Env Vars:** api (2), html (1), ejs (1)
> **CLI Commands:** node (2), make (1)
> **File Paths:** node.js (2)
> **UI Navigation:** select the (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 7. Design for Adaptability

[↑ Back to Table of Contents](#table-of-contents)

#### [Switch cloud providers as needed](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/switch-cloud-providers-as-needed-14484243?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/switch-cloud-providers-as-needed-14484243?u=76281980&t=0)** - Providing the best experience for customers requires adaptability to ongoing changes. Technology continues to be a significant area of change. When the iPhone launched, I was still clutching to my Blackberry device. Walkman devices, videotapes, and blockbuster stores have all become obsolete for the most part. [[Cloud Services]] can also rise and fall. Parse was a mobile cloud provider that supported over 500,000 apps, but then close shop in 2017. If our cloud power software system is analogous to a car, it can be beneficial to design the system such that important parts like the car engine can be easily swapped out as needed. When we're building a new car, we want to choose the engine with the best performance and characteristics for a particular use case. In the previous video, we demonstrated a prototype for evaluating image to text functionality. In this video, we'll take a closer look at the application programming interface or API and how the code allows us to switch cloud providers under the hood. By keeping the API the same, users can get enhanced functionality without updating their (indistinct) software such as their mobile app. This adaptable design makes maintenance and upgrades easier for everyone. In the [[JavaScript]] code that sets up our custom detect text API, we have a variable request engine that captures the text detection engine that the API consumer has asked for. The API consumer can be a mobile app,
>
> **[1:35](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/switch-cloud-providers-as-needed-14484243?u=76281980&t=95)** a web app, or any other software. We configure a default engine, which is [[Google]] for this prototype. We then use a JavaScript switch statement to declare supported engines and what actions to take for each case. The supported engines are Amazon, Google, and [[Microsoft]]. We also have an all case that calls upon all three engines for evaluation purposes. We have code that connects with each of our supported cloud providers using account specific access keys. The connection code for each provider is different because each provider has a different interface for inputting images and outputting detected texts from these images. Testing is necessary to make sure the code is set up correctly. It's possible that a cloud provider may change their interface in the future. If so this code would also need to be changed. The app that consumes is detect text API includes air handling to alert the user if there's an unexpected issue. This code also uploads user images to the cloud for archival and sends an email to the administrator, when an image is processed. Amazon was used to implement this functionality. Other cloud providers also have similar functionality, to store images, and Amazon is just one of many solutions for sending automated emails. For this example, there's no significant benefit in designing the code to allow switching to different providers
>
> **[3:09](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/switch-cloud-providers-as-needed-14484243?u=76281980&t=189)** for archiving images and sending email. The functionality is basic and doesn't directly affect any [[User Experience (UX)|user experience]] of detecting texts or images. The basic should work with all the popular cloud providers.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (2), [[Google]] (2), [[Cloud Services]] (1), [[Microsoft]] (1), [[User Experience (UX)|User experience]] (1)
> **Env Vars:** api (6)
> **Analogies:** analogous to (1), such as (1)
> **Prerequisites:** configure (1), set up (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** iphone (1)
> **Cross-References:** previous video (1)
> **Speakers:** - providing (1)

#### [Containers for your code](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/containers-for-your-code-14484245?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/containers-for-your-code-14484245?u=76281980&t=0)** - [Instructor] An increasingly popular way for code to be executed is within containers. These software containers package together application code, and dependencies. They help avoid the issue of code that works on one machine environment, but doesn't on a different machine environment. Unlike [[Virtual Machines]], where an operating system must be installed, containers are lighter weight and run on top of existing operating systems. They can be portable to run on development laptops, on-premise data centers, or on cloud providers virtual machines. Docker is an open source format that initiated a wave of containerization starting 2013 and has become the standard format for containers. Today, Docker containers can run on [[Amazon Web Services (AWS)|Amazon Web Services]], [[Google Cloud Platform (GCP)|Google Cloud Platform]], [[Microsoft Azure]], and more. Docker containers are created from Docker images that specify container contents. Additional tools exist for managing Docker containers. They include [[Kubernetes]], an open source project that helps to maintain and scale containerize applications. In the San Francisco Bay area, it's increasingly common to hear of companies who migrated their virtual machine applications to run in Docker containers managed by Kubernetes. For many developers, including me, there's definitely a hurdle to using the terminology and tools associated with managing code in containers. The benefit of crossing this hurdle is related to longer term development agility for larger scale distributed applications.
>
> **[1:34](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/containers-for-your-code-14484245?u=76281980&t=94)** This is agility is similar to the offer by [[PaaS|platform as a service]] solutions, such as [[Google]] App Engine, Amazon Elastic Beanstalk, [[Microsoft]] App Service and Heroku. It's also similar to the agility offered by serverless solutions, such as AWS Lambda, [[Google Cloud Platform (GCP)|Google Cloud]] Functions and [[Microsoft Azure|Azure]] Cloud Functions. However, the container approach appeals to developers and operations staff who seek more control over the infrastructure. Let's see how to get a Hello World web app running on Docker and Kubernetes in the Cloud. We have a no JS app in a file server .JS, that outputs the string, hello world. We create a Docker file that describes the Docker image we want to build. In this case, we want to start from the official node image, expose port 80, copy the server .JS file onto that image, and then run the command to start the server. It's important to start from trusted Docker image sources. Otherwise there's a [[Security Risk]] that the starting Docker image was maliciously designed to take over your [[Cloud Computing]] resources. After building our Hello World Docker image, we upload it to container registry. For example, Google Container Registry, Amazon Elastic Container Registry, or Azure Container Registry. We then create a Kubernetes Cluster of virtual machines and also a Kubernetes Pod to host our Docker image. Google Kubernetes engine, Amazon Elastic Kubernetes Service, and Azure Kubernetes Service
>
> **[3:09](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/containers-for-your-code-14484245?u=76281980&t=189)** are cloud provider options for this step. Once deployed, we have our Hello World code in the Docker container managed by Kubernetes. By making the entire Kubernetes Cluster available to an external IP address, our Hello World app then becomes accessible around the world.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kubernetes]] (10), [[Virtual Machines]] (3), [[Google]] (3), [[Microsoft Azure|Azure]] (3), [[Amazon Web Services (AWS)|Amazon web services]] (1)
> **CLI Commands:** docker (14), aws (1), node (1)
> **Analogies:** similar to (2), such as (2), for example (1)
> **Ports:** port 80 (1)
> **Env Vars:** aws (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Streamline cloud processes](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/streamline-cloud-processes-14486205?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/streamline-cloud-processes-14486205?u=76281980&t=0)** - [Narrator] With all this available technology, it's clear that there will always be multiple potential approaches to building software. I like to think from the end user's perspective. An end users tend to be unaware of whether application code is in Docker containers, or whether Amazon, [[Google]], [[Microsoft]], or others are serving as cloud providers. In this way, cloud provider and infrastructure details are like computer programming languages. It's possible to deliver an end [[User Experience (UX)|user experience]] with multiple programming languages. For more popular languages like [[JavaScript]] and [[Python (Programming Language)|Python]] to less commonly use languages like Closure or Go that still have its fans. As we saw with the image detect prototype described earlier in this course, for some scenarios, choosing a specific technology provider does make a significant difference to end user experience. It's those scenarios that need to be prioritized more highly with more effort put into devaluation of supporting technologies. Technology and infrastructure details also impact organizational agility and developer's day to day work experience. For example if all of your existing developers work on Microsoft [[Windows]] and use Microsoft development tools, it will probably be faster to launch a new application based on Microsoft technologies. Even so continuous training with an eye toward end user benefits can help developers and organizations be more adaptable. Streamlining your organization's [[Cloud Development]] processes can be measurable to some extent. Consider whether it can be easier or faster for application developers to deploy new code to a pre production test environment.
>
> **[1:33](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/streamline-cloud-processes-14486205?u=76281980&t=93)** The process of finding and fixing the most serious code bugs should also be reasonably fast. Ideally, code bugs are caught as early as possible. For example, by developers on their local machines, whenever possible. Automated testing can be very helpful, but does required time to write and maintain automated test cases. For [[Microsoft Products|products]] are likely to quickly change based on end user feedback, high quality [[Manual Testing]], or a mix of automated and manual testing can be useful shortcuts. Once there's sufficient testing, code should be deployed to production for further feedback and iteration. The use of feature flags to hide incomplete production code can also help with iteration. By streamlining how developers can get high quality code and features into production the organization and business can be more [[Agile Development|agile]] and responsive to customer needs. The organization of code can also be a controversial topic. Some developers are keen to spend days refactoring or reorganizing code. I'm not one of those developers and I'm very reluctant to stall feature improvements or bug fixes just to reorganize code to function to do the same thing it did before the reorganization. In cases where some code can be streamlined, ideally that can be done while working on features or bug fixes that touch upon that same code. Similarly separating code into smaller components can be done on an as needed basis and where there's benefit to team processes or agility. Remember that any reorganization of code will require a complete test cycle to find and fix functional issues that may have arisen.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft]] (4), [[User Experience (UX)|User experience]] (2), [[Manual Testing]] (2), [[Google]] (1), [[JavaScript]] (1)
> **CLI Commands:** docker (1), python (1), make (1), find (1)
> **Cross-References:** as we saw (1), earlier in (1)
> **Analogies:** for example (2)
> **Speakers:** - [narrator] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Continuing the cloud platform journey](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/continuing-the-cloud-platform-journey?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/choosing-a-cloud-platform-for-developers-aws-azure-and-gcp/continuing-the-cloud-platform-journey?u=76281980&t=0)** - [Xian] I hope that the videos in this course have been useful to your current and future projects. It's not always easy to pick tools to use for technology projects, but that shouldn't stop you for trying out any tools that you're curious about. In the next 30 days, I would encourage you to choose three cloud tools and to understand them better with hands-on practice. For example, try uploading a file to Amazon S3, connecting with the [[Microsoft]] Cognitive Services API, or building a demo app with [[Google]] App Engine. The more you try things, the better you can understand how various tools can be utilized to reach your organizational and project goals. Additional videos in the [[LinkedIn]] Learning library and the latest tutorials on cloud providers' websites can assist you in this endeavor. You can also message me on LinkedIn, if you'd like. Best wishes on your projects.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (2), [[Microsoft]] (1), [[Google]] (1)
> **Env Vars:** api (1)
> **Cross-References:** in the next (1)
> **Analogies:** for example (1)
> **Speakers:** - [xian] (1)


## Resources

- Exercise files available

## Skills Covered

- Amazon Web Services (AWS)
- Cloud Development
- Microsoft Azure
- Google Cloud Platform (GCP)

## Path Context

### In [[Getting Started with Cloud Development]]
**1 of 4** | [[Learning Amazon Web Services Aws For Developers]] →

## Appears In

- [[Getting Started with Cloud Development]]

## Related Courses

_Courses sharing skills:_

- [[Leveraging Google Cloud Developer and DevOps Tools]] — Google Cloud Platform (GCP), Cloud Development
- [[Azure Quick Tips for Developers]] — Microsoft Azure, Cloud Development
- [[Azure Essential Training for Developers]] — Microsoft Azure, Cloud Development
- [[AWS- Monitoring, Logging, and Remediation (2021)]] — Amazon Web Services (AWS)
- [[Complete Guide to AWS Software Deployment]] — Amazon Web Services (AWS)

---

[↑ Back to top](#)