---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: cloud-storage-concepts-services-cost-control-and-security
url: "https://www.linkedin.com/learning/cloud-storage-concepts-services-cost-control-and-security"
duration_minutes: 58
duration: 58m
level: Beginner
updated: 4/5/2023
learners: 22272
skills:
  - Storage Management
  - Cloud Storage
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQFQAW9zodTrOA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1680561845407?e=2147483647&amp;v=beta&amp;t=Fzie8t5YzaKjGXcCwY8G7I5ElIL3Bp7g7Jpiv9F5QUM"
linkedin_topic: Cloud Computing
learning_paths:
  - '[Explore a Career as a Cloud Administrator](../../Paths/Cloud%20Computing/Learning%20Paths/Explore%20a%20Career%20as%20a%20Cloud%20Administrator.md)'
  - '[Foundations of Cloud Computing- Models, Platforms, Services, and Careers](../../Paths/Cloud%20Computing/Learning%20Paths/Foundations%20of%20Cloud%20Computing-%20Models%2C%20Platforms%2C%20Services%2C%20and%20Careers.md)'
prev_courses:
  - '[Determining Your Cloud Strategy- Planning for Roadmap, Infrastructure, and Deployment](Determining%20Your%20Cloud%20Strategy-%20Planning%20for%20Roadmap%2C%20Infrastructure%2C%20and%20Deployment.md)'
  - '[Cloud Security Concepts- Services and Compliance](Cloud%20Security%20Concepts-%20Services%20and%20Compliance.md)'
next_courses:
  - '[Cybersecurity Awareness- Cloud Security (2022)](Cybersecurity%20Awareness-%20Cloud%20Security%20(2022).md)'
  - '[Cloud Computing- Understanding Networking](Cloud%20Computing-%20Understanding%20Networking.md)'
path_nav: '[{"path":"Explore a Career as a Cloud Administrator","position":3,"total":6,"prev":"Determining Your Cloud Strategy- Planning for Roadmap, Infrastructure, and Deployment","next":"Cybersecurity Awareness- Cloud Security (2022)"},{"path":"Foundations of Cloud Computing- Models, Platforms, Services, and Careers","position":6,"total":9,"prev":"Cloud Security Concepts- Services and Compliance","next":"Cloud Computing- Understanding Networking"}]'
path_count: 2
tags:
  - course
  - topic/cloud-computing
  - topic/security
  - skill/storage-management
  - skill/cloud-storage
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cloud%20Computing/Cloud%20Storage%20Concepts-%20Services%2C%20Cost%20Control%2C%20and%20Security.md)

![Cloud Storage Concepts: Services, Cost Control, and Security](https://media.licdn.com/dms/image/v2/D560DAQFQAW9zodTrOA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1680561845407?e=2147483647&amp;v=beta&amp;t=Fzie8t5YzaKjGXcCwY8G7I5ElIL3Bp7g7Jpiv9F5QUM)

# Cloud Storage Concepts: Services, Cost Control, and Security

> Storage is one of the most widely utilized cloud computing services. Companies are eager to take advantage of object, block, and file storage with unlimited scalability—and IT professionals are the ones who need to make it work. This course covers the basics of cloud storage, including storage planning, budgeting, and security, and how other systems and services, such as applications and databases

> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-storage-concepts-services-cost-control-and-security) | 58m | Beginner | 22K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Understanding cloud storage](#understanding-cloud-storage)
  - [What you should know](#what-you-should-know)
- [**1. Cloud Storage Basics**](#1-cloud-storage-basics) (8 videos)
  - [Cloud storage types](#cloud-storage-types)
  - [Block storage](#block-storage)
  - [Object storage](#object-storage)
  - [File storage](#file-storage)
  - [Planning your storage](#planning-your-storage)
  - [Creating the business case for cloud storage](#creating-the-business-case-for-cloud-storage)
  - [Challenge: Which type of storage should you leverage?](#challenge-which-type-of-storage-should-you-leverage)
  - [Solution: How to think about storage types](#solution-how-to-think-about-storage-types)
- [**2. Cloud Services That Leverage Cloud Storage**](#2-cloud-services-that-leverage-cloud-storage) (7 videos)
  - [Cloud databases](#cloud-databases)
  - [Cloud file storage](#cloud-file-storage)
  - [Backup and recovery services](#backup-and-recovery-services)
  - [Other cloud services that leverage cloud storage](#other-cloud-services-that-leverage-cloud-storage)
  - [Sample applications](#sample-applications)
  - [Challenge: Selecting a backup and recovery storage solution](#challenge-selecting-a-backup-and-recovery-storage-solution)
  - [Solution: Selecting a backup and recovery storage solution](#solution-selecting-a-backup-and-recovery-storage-solution)
- [**3. Cloud Storage Planning**](#3-cloud-storage-planning) (7 videos)
  - [Understanding your storage requirements](#understanding-your-storage-requirements)
  - [Defining costs and storage billing models](#defining-costs-and-storage-billing-models)
  - [Defining projected storage growth](#defining-projected-storage-growth)
  - [Implementation planning](#implementation-planning)
  - [Storage operations](#storage-operations)
  - [Challenge: Setting up storage operations](#challenge-setting-up-storage-operations)
  - [Solution: Setting up storage operations](#solution-setting-up-storage-operations)
- [**4. AWS Cloud Storage**](#4-aws-cloud-storage) (5 videos)
  - [Allocating storage instances](#allocating-storage-instances)
  - [Placing data on cloud storage instances](#placing-data-on-cloud-storage-instances)
  - [Securing cloud storage instances](#securing-cloud-storage-instances)
  - [Removing storage instances](#removing-storage-instances)
  - [Usage-based accounting](#usage-based-accounting)
- [**Conclusion**](#conclusion) (1 videos)
  - [More about cloud storage](#more-about-cloud-storage)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Understanding cloud storage](https://www.linkedin.com/learning/cloud-storage-concepts-services-cost-control-and-security/understanding-cloud-storage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-storage-concepts-services-cost-control-and-security/understanding-cloud-storage?u=76281980&t=0)** - [David] [Cloud Storage](../../Skills/Cloud%20Computing/Cloud%20Storage.md) is foundational to most [Cloud Computing](../../Topics/Cloud%20Computing.md) systems. Information needs to be stored so that it's persistent beyond just the login sessions of users or systems. This course is focused on the basics of cloud storage technology, including the technology choices that make up a successful cloud storage deployment. Hi, I'm David Linthicum, internationally known cloud expert and consultant. In this [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning course, we'll use pragmatic examples and relevant case studies to help you understand how cloud storage works and how you and your business can benefit from this technology. I wish you luck and good learning.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Cloud Storage](../../Skills/Cloud%20Computing/Cloud%20Storage.md) (4), [Cloud Computing](../../Topics/Cloud%20Computing.md) (1), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **CLI Commands:** make (1)
> **Speakers:** - [david] (1)

#### [What you should know](https://www.linkedin.com/learning/cloud-storage-concepts-services-cost-control-and-security/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-storage-concepts-services-cost-control-and-security/what-you-should-know?u=76281980&t=0)** - [Instructor] In order to get the most out of this course, you should have a basic understanding of [Cloud Computing](../../Topics/Cloud%20Computing.md). However, if you don't, we'll provide enough information for you to keep up. Keep in mind that this is an entry level course. And thus, a solid foundation of technical knowledge is not a requirement. If you would like to learn more about the basics of cloud computing before we're moving forward with this course, we do have a Core Concepts course that you can take first. It's called Learning Cloud Computing: Core Concepts. Of course, you can look up terms that may not be clear to you ongoing. Just press pause and research anything you feel needs to be better understood. Also, use the [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning tools available to you, including Notebook.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Cloud Computing](../../Topics/Cloud%20Computing.md) (3), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **Definitions:** is an  (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)


### 1. Cloud Storage Basics

[↑ Back to Table of Contents](#table-of-contents)

#### [Cloud storage types](https://www.linkedin.com/learning/cloud-storage-concepts-services-cost-control-and-security/cloud-storage-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-storage-concepts-services-cost-control-and-security/cloud-storage-types?u=76281980&t=0)** - [Instructor] Getting right into what [Cloud Storage](../../Skills/Cloud%20Computing/Cloud%20Storage.md) is and how we think about it. Storage generally put is any technology that can store any data, file, or document. It also includes mechanisms for holding and managing electronic data. These data, file, and documents might be accessed by users directly such as leveraging a [Database Management](../../Topics/Database%20Management.md) tool, or also by applications that interact with cloud storage systems using programmatic interfaces or APIs. We use storage every day from our email systems to store and receive our messages, image storage on our smartphones, even the server that streams this course directly to you. Cloud storage, including how cloud providers work and how cloud storage is deployed, is foundational to most types of computing. In the world of [Cloud Computing](../../Topics/Cloud%20Computing.md), storage exists as systems that provide specific type of storage services depending on the storage service that you need for a specific use case. This includes types of cloud and computing storage systems that include block storage, file storage, and object storage. Chances are that you leveraged one or two of these storage types today. For example, if you stored a file on a server for file sharing, it's a good chance that it was an object storage system or block storage system. Indeed, it may have been paired up with a file storage system, which was able to maintain a file hierarchy structure
>
> **[1:34](https://www.linkedin.com/learning/cloud-storage-concepts-services-cost-control-and-security/cloud-storage-types?u=76281980&t=94)** but using an object storage system for the actual storage of the files. Moreover, [Databases](../../Skills/Software%20Development/Databases.md) provide a structured way to leverage these types of storage systems as well. Most object databases leverage object storage systems on their backend to carry out the actual storage operations. Again, much like our file storage example, you're only aware of how the database is managed for storage and production of data, and it carries out the backend storage operations which is largely invisible to you. Thus, one of the more important things to learn here is that the types of storage are all interrelated. It's important to understand the types of storage systems that you can leverage directly or can be leveraged through some other [Cloud Services](../../Skills/Cloud%20Computing/Cloud%20Services.md).

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Cloud Storage](../../Skills/Cloud%20Computing/Cloud%20Storage.md) (4), [Databases](../../Skills/Software%20Development/Databases.md) (2), [Database Management](../../Topics/Database%20Management.md) (1), [Cloud Computing](../../Topics/Cloud%20Computing.md) (1), [Cloud Services](../../Skills/Cloud%20Computing/Cloud%20Services.md) (1)
> **Analogies:** such as (1), for example (1)
> **Speakers:** - [instructor] (1)

#### [Block storage](https://www.linkedin.com/learning/cloud-storage-concepts-services-cost-control-and-security/block-storage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-storage-concepts-services-cost-control-and-security/block-storage?u=76281980&t=0)** - [Instructor] Block storage is the oldest and simplest form of [Data Storage](../../Skills/Data%20Science/Data%20Storage.md). Although cloud providers may vary in how they charge for block storage services it's typically cheaper than the other types of storage, such as object storage. Block storage stores data in fixed size chunks called blocks, which only house a portion of the data. Blocks are much like shoe boxes that you have leverage when you were younger, where all the boxes are the same size and can hold different items and amounts of items. Block storage is just a way that [Cloud Computing](../../Topics/Cloud%20Computing.md) platforms can store and organize data. We'll see that object and file storage, two more types of [Cloud Storage](../../Skills/Cloud%20Computing/Cloud%20Storage.md), also provides storage mechanisms but do so in different ways. We'll cover those next. The application such as inventory management system that needs to store and manage data makes a SCSI call, or S-C-S-I call, to find the correct address of the blocks on the raw storage system. Then they are organized to form the complete file. SCSI also pronounced scuzzy is short for Small Computer System Interface. It's an older way to organize storage, in this case, block storage. Block storage fragments data. The address is only identifying part of a block. Thus, there is no [Metadata](../../Skills/Web%20Development/Metadata.md) associated with each block. This structure leads to faster performance when the application and storage systems are co-located, but can lead to more latency when they're apart.
>
> **[1:34](https://www.linkedin.com/learning/cloud-storage-concepts-services-cost-control-and-security/block-storage?u=76281980&t=94)** The fine grain control that block storage provides makes it a good fit for applications that require high performance, such as applications that support transactions or [Database Applications](../../Skills/Software%20Development/Database%20Applications.md). What you need to understand about block storage is that it's a more primitive form of storage but has its own advantages for use. We'll cover the advantages of using block storage versus other types of storage in a later video. However, spoiler alert, this is a matter of matching your business requirements with the right technology. You'll find that depending on your requirements that block storage does some things well and other things not as much, based on your specific needs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Storage](../../Skills/Data%20Science/Data%20Storage.md) (1), [Cloud Computing](../../Topics/Cloud%20Computing.md) (1), [Cloud Storage](../../Skills/Cloud%20Computing/Cloud%20Storage.md) (1), [Metadata](../../Skills/Web%20Development/Metadata.md) (1), [Database Applications](../../Skills/Software%20Development/Database%20Applications.md) (1)
> **Analogies:** such as (3)
> **CLI Commands:** find (2)
> **Env Vars:** scsi (2)
> **Definitions:** short for (1), is a  (1)
> **Speakers:** - [instructor] (1)

#### [Object storage](https://www.linkedin.com/learning/cloud-storage-concepts-services-cost-control-and-security/object-storage?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/cloud-storage-concepts-services-cost-control-and-security/object-storage?u=76281980&t=1)** - [Instructor] Compared to block storage, object storage is the newer technology. Object storage bundles data with customizable [Metadata](../../Skills/Web%20Development/Metadata.md) that is a unique identifier to form objects. Objects exist in a flat address space and there is no limit on the number of objects stored. Thus providing natural [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) or the ability to expand as needed with virtually no limitations. This makes it a natural fit for cloud-based applications where scaling is often a sought after attribute. The metadata tags are an advantage of using object storage. The metadata allows for much better identification and classification of data, no matter how complex or different types of data that you're leveraging. Objects within object storage systems are self-describing. This means that they have descriptive labels assigned by the user or application that writes the object. Thus, you can easily search for a specific object, even if the data itself is not searchable. For example, an image or video or other data that's binary and thus, unstructured. This is why many who store this type of data leverage object storage to do it. For unstructured objects, object storage is the way to go. The flexible search capabilities and unlimited growth make object storage ideal for [Unstructured Data](../../Skills/Software%20Development/Unstructured%20Data.md). Object storage is the only option that can effectively store this data at scale and thus is popular for use on [Cloud Computing](../../Topics/Cloud%20Computing.md) systems.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Metadata](../../Skills/Web%20Development/Metadata.md) (3), [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) (1), [Unstructured Data](../../Skills/Software%20Development/Unstructured%20Data.md) (1), [Cloud Computing](../../Topics/Cloud%20Computing.md) (1)
> **Definitions:** is a  (1), means that (1)
> **CLI Commands:** make (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [File storage](https://www.linkedin.com/learning/cloud-storage-concepts-services-cost-control-and-security/file-storage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-storage-concepts-services-cost-control-and-security/file-storage?u=76281980&t=0)** - [Instructor] What is cloud file storage? It's a method of storing data in the cloud that provides users and applications access to data or files through shared file systems. This is much like the file system that you have on your laptop or mobile phone. This should be familiar in terms of the fact that file systems exist on most computer and device platforms, makes cloud file storage a good idea for workloads that rely on shared file systems. Most have used them and understand them. Often, this is the easiest way to store and retrieve information. The larger cloud providers offer file storage as a service, such as [Amazon Web Services](../../Skills/Cloud%20Computing/Amazon%20Web%20Services%20(AWS).md) or AWS, [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md), and [Google](../../Glossary/Service/Google.md). However, you can use cloud providers such as Dropbox and [Box.net](https://Box.net) that just offer file storage services. These are typically used for file sharing, as well as backup and recovery. A cloud file system, like the file system on your laptop's hard drive, is a hierarchal storage system in the cloud that provides shared access to file data. Using these file systems, users can create, delete, and modify and write files for any purpose. This can be done by humans directly or applications as a matter of automation. Also, organize files logically in directory trees for organized access. This means that we can place them in purpose created buckets that typically relates to their purpose.
>
> **[1:37](https://www.linkedin.com/learning/cloud-storage-concepts-services-cost-control-and-security/file-storage?u=76281980&t=97)** For example, having all of your [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) processing documents in a document directory. When using file systems, sharing is also possible. Cloud file storage provides sharing and thus provides simultaneous access for multiple users and applications to a common set of files stored in the cloud file system. Also, for the purposes of collaboration and other sharing processes. While file storage should be the most familiar to you, it's a matter of finding the right type of storage for the right purposes. You'll find that all three of these types of [Cloud Storage](../../Skills/Cloud%20Computing/Cloud%20Storage.md) systems have specific advantages and disadvantages that make them the right fit for specific use cases. Thus, it's helpful to understand what storage options are available to you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Amazon web services](../../Skills/Cloud%20Computing/Amazon%20Web%20Services%20(AWS).md) (1), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (1), [Google](../../Glossary/Service/Google.md) (1), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1), [Cloud Storage](../../Skills/Cloud%20Computing/Cloud%20Storage.md) (1)
> **CLI Commands:** aws (1), find (1), make (1)
> **Analogies:** such as (2), for example (1)
> **Definitions:** is a  (1), means that (1)
> **URLs:** [box.net](https://box.net) (1)
> **Env Vars:** aws (1)
> **Speakers:** - [instructor] (1)

#### [Planning your storage](https://www.linkedin.com/learning/cloud-storage-concepts-services-cost-control-and-security/planning-your-storage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-storage-concepts-services-cost-control-and-security/planning-your-storage?u=76281980&t=0)** - [David] The steps for deploying [Cloud Storage](../../Skills/Cloud%20Computing/Cloud%20Storage.md) are not unlike steps to build and deploy applications, [Databases](../../Skills/Software%20Development/Databases.md), or any other system or system components that will live in a public cloud. This includes define, develop, test, and operate. Let's explore what each step of our plan actually means. Define means that we're looking at what we're attempting to do in detail. This means that we're understanding our business requirements as best we can, defining the use case or use cases for the application that will leverage cloud storage and then define a conceptual solution that best depicts the kinds of problems we'll be solving through the use of cloud storage. Now onto development, once we have an understanding of what problems we're looking to solve and the conceptual solution we'll need to solve them it's time that we develop a collection of storage technology or technologies that we wish to employ. For instance, if we define the pattern of use to store, find and retrieve binary data such as audio and video files then object storage may be our best solution. In this step that's defined as well as the details around how it will be leveraged. Testing means that we're taking our solution that we've defined and making sure it lives up to the expectations as defined in the first step. While all types of testing may take place, examples of cloud storage system testing include performance, stability, security, reliability, et cetera.
>
> **[1:34](https://www.linkedin.com/learning/cloud-storage-concepts-services-cost-control-and-security/planning-your-storage?u=76281980&t=94)** Finally, operate refers to the fact that we need to monitor and tweak the functioning of the storage system over a long period of time. Thus, what processes and procedures need to be followed to perform basic storage system operations such as backup and recovery, [Performance Tuning](../../Skills/Web%20Development/Performance%20Tuning.md) and any process that maintains the storage system over time and ensure that it's able to meet the needs of the business. Keep in mind that this is only part of the overall cloud architecture process. If you want to understand more about how cloud storage fits into the larger [Cloud Computing](../../Topics/Cloud%20Computing.md) architecture process it's a good idea to take a course on basic cloud computing architecture. Here's one that you may want to consider. Cloud architecture, core concepts.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Cloud Storage](../../Skills/Cloud%20Computing/Cloud%20Storage.md) (5), [Cloud Computing](../../Topics/Cloud%20Computing.md) (2), [Databases](../../Skills/Software%20Development/Databases.md) (1), [Performance Tuning](../../Skills/Web%20Development/Performance%20Tuning.md) (1)
> **Definitions:** means that (2), defined as (1), refers to (1)
> **Analogies:** such as (2), for instance (1)
> **CLI Commands:** find (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [david] (1)

#### [Creating the business case for cloud storage](https://www.linkedin.com/learning/cloud-storage-concepts-services-cost-control-and-security/creating-the-business-case-for-cloud-storage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-storage-concepts-services-cost-control-and-security/creating-the-business-case-for-cloud-storage?u=76281980&t=0)** - [Instructor] A business case, simply put, is looking at the business value that the use of any technology will create, in this case, [Cloud Storage](../../Skills/Cloud%20Computing/Cloud%20Storage.md). For our purposes, we're only looking at cloud storage, but in most use cases, we're looking at cloud storage with a number of other technologies that are brought together to create a common solution that provides the business value. However, it's helpful to understand just the business value of cloud storage and how to define that value. Thus, we'll provide some basic guidance here. The value of cloud storage is basically the value that's returned to the business when the cloud storage systems are in use. We're considering the business operating both with and without the cloud storage system in order to understand what value is being created. To come to the conclusion, we need to focus on what problems are being solved and what value that we can put upon each solution. Again, look at the define phase we discussed in our previous video. To come to our conclusion, we need to focus on the problems and objectives we're defining in the define phase of our planning. For example, if we're storing images in an object storage system that's able to provide better product descriptions for [E-Commerce](../../Skills/Web%20Development/E-Commerce.md) websites, that may generate more sales. The sales generated are the value that's returned for the use of that cloud object storage system. Of course, the problems and values that are related to your use cases may be very different.
>
> **[1:33](https://www.linkedin.com/learning/cloud-storage-concepts-services-cost-control-and-security/creating-the-business-case-for-cloud-storage?u=76281980&t=93)** Again, we're just looking to find the business reason for leveraging this technology, and using that reason as a justification for the investment, or in some cases, to understand why the investment should be made.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Cloud Storage](../../Skills/Cloud%20Computing/Cloud%20Storage.md) (7), [E-Commerce](../../Skills/Web%20Development/E-Commerce.md) (1)
> **Cross-References:** we discussed (1), previous video (1)
> **CLI Commands:** find (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Which type of storage should you leverage?](https://www.linkedin.com/learning/cloud-storage-concepts-services-cost-control-and-security/challenge-which-type-of-storage-should-you-leverage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-storage-concepts-services-cost-control-and-security/challenge-which-type-of-storage-should-you-leverage?u=76281980&t=0)** - Let's consider a simple problem and what solutions may work best. By doing this, we're able to better understand how to solve these problems for our business. You're the owner of a business that provides specialized tools for plumbers. You only sell on your website and keep just enough inventory to ship to new and existing customers. Your cloud-based website is able to provide images of tools you're seeing, but it's a difficult process in updating the images as tools change. The images are stored separately on the cloud. This includes the product information and the images are linked through a file name of the file that exists on a cloud file system. As you can tell, this often becomes confusing. Indeed, a common complaint is that the tool sent looks nothing like the photo online which has resulted in returns of [products](../../Skills/Software%20Development/Microsoft%20Products.md) and you have to absorb the shipping costs for the return. A better approach would be for your website to use a cloud-based storage system where the product data and the images are stored together, thus avoiding confusion of storing the data and the images in two different places. So what [Cloud Storage](../../Skills/Cloud%20Computing/Cloud%20Storage.md) system would you leverage?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1), [Cloud Storage](../../Skills/Cloud%20Computing/Cloud%20Storage.md) (1)
> **Speakers:** - let (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: How to think about storage types](https://www.linkedin.com/learning/cloud-storage-concepts-services-cost-control-and-security/solution-how-to-think-about-storage-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-storage-concepts-services-cost-control-and-security/solution-how-to-think-about-storage-types?u=76281980&t=0)** - [Instructor] So how did you do on this challenge? What would you suggest as a way to improve this technology solution? It's rather obvious to pick a cloud object storage system as a storage system of choice that is able to store [Unstructured Data](../../Skills/Software%20Development/Unstructured%20Data.md), such as an image, as well as structured data, such as product information including a product ID and a product description. So if that's what you were thinking, that's a correct type of storage system you need to leverage. Of course, this does not mean that object storage is the go-to solution only that it was correct in this instance. This is due to the mixed types of data that needed to be stored together. Block storage could be a better solution if structured data was to be stored and images did not need to be processed. Block storage is an older and cheaper type of [Cloud Storage](../../Skills/Cloud%20Computing/Cloud%20Storage.md). Thus, if you end up storing a great deal of information, you're likely to save money, but there can be limits on growth, and performance can be an issue if not structured correctly. That said, it may be a better fit considering the cost efficiencies and the use case. As we'll discuss later in this course, while the types of cloud storage systems are good to understand, in many instances, you'll find that you'll leverage these storage systems through other systems, such as [Databases](../../Skills/Software%20Development/Databases.md). These are systems that assist you in organizing both structured and unstructured data on different types of storage systems.
>
> **[1:34](https://www.linkedin.com/learning/cloud-storage-concepts-services-cost-control-and-security/solution-how-to-think-about-storage-types?u=76281980&t=94)** As we progress, most of you will leverage the three types of cloud storage systems through one of these databases or other systems that leverage the cloud storage system or systems on your behalf. It's still beneficial for you to understand the types of storage systems that exist on public clouds and the reasons that they should be leveraged and not leveraged.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Cloud Storage](../../Skills/Cloud%20Computing/Cloud%20Storage.md) (4), [Unstructured Data](../../Skills/Software%20Development/Unstructured%20Data.md) (2), [Databases](../../Skills/Software%20Development/Databases.md) (2)
> **Analogies:** such as (3)
> **CLI Commands:** find (1)
> **Cross-References:** later in (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 2. Cloud Services That Leverage Cloud Storage

[↑ Back to Table of Contents](#table-of-contents)

#### [Cloud databases](https://www.linkedin.com/learning/cloud-storage-concepts-services-cost-control-and-security/cloud-databases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-storage-concepts-services-cost-control-and-security/cloud-databases?u=76281980&t=0)** - [Instructor] This section of the course will focus on higher-level [Cloud Storage](../../Skills/Cloud%20Computing/Cloud%20Storage.md) services which use lower level services for basic functions of storage. Simply put, this means that there are many [Cloud Services](../../Skills/Cloud%20Computing/Cloud%20Services.md) that store data and other information for you. Using the underlying storage services are often called primitive services. This makes it easier to deal with native cloud storage types and services, such as object storage, block storage, file storage since the complexities of those services are hidden from you. You can think of cloud storage types as being primitive to higher-level [Storage Management](../../Skills/Cloud%20Computing/Storage%20Management.md) services, such as [Databases](../../Skills/Software%20Development/Databases.md), backup and recovery services, and other systems that must store information as part of their core functionality. Indeed, it's more likely that you'll leverage primitive cloud storage services through these types of higher-level services. This is for the better, considering that in most cases, they remove most of the complexity from leveraging the more primitive services directly. A database is perhaps the most used of all of these higher-level services. These are systems, as the name implies, that provide [Data Storage](../../Skills/Data%20Science/Data%20Storage.md), [Data Management](../../Skills/Software%20Development/Data%20Management.md), and data retrieval services, allowing you to store data through a user interface, or more likely through an application that's able to store data in the database using an API, or application programming interface. As you can see in this diagram, the application is able to add, delete, and edit data in the database through the use of an API. The database, in turn, is able to carry
>
> **[1:34](https://www.linkedin.com/learning/cloud-storage-concepts-services-cost-control-and-security/cloud-databases?u=76281980&t=94)** out the storage functions through the use of more primitive cloud storage services as we discussed previously, or sometimes they use their own specialized services that may not be related to a specific cloud provider or their own native primitive storage technology. For you, it really does not matter since the primitive services are hidden from you. You're just dealing with the database functionality itself. As you can see by the screenshot of public cloud database services available, there are hundreds of databases that each public cloud provider makes available. These include [Relational Databases](../../Skills/Software%20Development/Relational%20Databases.md) such as [MySQL](../../Skills/Software%20Development/MySQL.md), in the cloud, which is found on most public cloud providers. Object databases such as DynamoDB from AWS or [Amazon Web Services](../../Skills/Cloud%20Computing/Amazon%20Web%20Services%20(AWS).md), [Data Warehousing](../../Skills/Software%20Development/Data%20Warehousing.md)-focused databases such as AWS's Redshift. It's also helpful to note that there are several types of database deployments that leverage many different types of databases. [Data Lakes](../../Skills/Data%20Science/Data%20Lakes.md), for instance, are a collection of structured and [Unstructured Data](../../Skills/Software%20Development/Unstructured%20Data.md) that you can use to store and understand data. When you add more structure to a data lake, it's known as a data lake house. Well, some of them are native public cloud databases, meaning they only exist on a single cloud provider and are owned by that cloud provider. For example, Amazon Web Services, DynamoDB. However, there are other databases that run on any number of public cloud providers
>
> **[3:06](https://www.linkedin.com/learning/cloud-storage-concepts-services-cost-control-and-security/cloud-databases?u=76281980&t=186)** and thus provide the same database service across cloud providers, such as Oracle. If you're looking to understand more about cloud-based databases, it's helpful to take specific courses on database selection and deployment, as well as building data warehouses or new types of data deployments such as data lakes and data lake houses. In the world of cloud databases, it's its own larger topic. It's helpful if you learn more about specific databases to understand how databases function in detail. For now, it's good to understand that they are useful cloud services that allow for easy storage and management of data in the cloud, no matter what the purpose.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Databases](../../Skills/Software%20Development/Databases.md) (11), [Cloud Storage](../../Skills/Cloud%20Computing/Cloud%20Storage.md) (5), [Cloud Services](../../Skills/Cloud%20Computing/Cloud%20Services.md) (2), [Amazon web services](../../Skills/Cloud%20Computing/Amazon%20Web%20Services%20(AWS).md) (2), [Data Lakes](../../Skills/Data%20Science/Data%20Lakes.md) (2)
> **Analogies:** such as (7), for instance (1), for example (1)
> **Env Vars:** api (2), aws (2)
> **CLI Commands:** aws (2), mysql (1)
> **Cross-References:** we discussed (1)
> **Definitions:** known as (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Cloud file storage](https://www.linkedin.com/learning/cloud-storage-concepts-services-cost-control-and-security/cloud-file-storage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-storage-concepts-services-cost-control-and-security/cloud-file-storage?u=76281980&t=0)** - [Instructor] Now let's discuss cloud file storage. Again, while the cloud providers provide primitive file system storage, as we discussed in the last section of this course, there are higher level file system services that you can leverage from public cloud providers, some of which only provide file storage and management services. I'm sure many of you are already using these services for file sharing as well as backup and recovery. These are often third-party public cloud providers that just offer file storage services such as Dropbox and [Box.net](https://Box.net). However, they're all built a bit different in the types of services they provide with some offering document editing features and some just providing very basic file systems. These services align and backup important files, share files with others, and even share files between computers and mobile phones that you may own. Like cloud [Databases](../../Skills/Software%20Development/Databases.md), these systems often leverage native public [Cloud Storage](../../Skills/Cloud%20Computing/Cloud%20Storage.md) systems such as block, object, and file storage, or they may use their own proprietary storage technology as the primitive storage services. The focus here is just on basic functions of cloud file storage services. However, you should understand that they provide access to a virtual file system that functions in a similar manner like the file systems on your computer or smartphone. The complexities are hidden from you, making it easier to leverage.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Databases](../../Skills/Software%20Development/Databases.md) (1), [Cloud Storage](../../Skills/Cloud%20Computing/Cloud%20Storage.md) (1)
> **Cross-References:** we discussed (1), in the last (1)
> **Analogies:** such as (2)
> **URLs:** [box.net](https://box.net) (1)
> **Speakers:** - [instructor] (1)

#### [Backup and recovery services](https://www.linkedin.com/learning/cloud-storage-concepts-services-cost-control-and-security/backup-and-recovery-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-storage-concepts-services-cost-control-and-security/backup-and-recovery-services?u=76281980&t=0)** - [Instructor] Cloud-based backup and recovery services are a variety of services that exist to provide redundant storage for files and data in case of data loss through accidental, malicious, or true disasters. For example, you may be leveraging a public cloud file sharing services not only to share files, but to backup files as well. Perhaps these types of services have been a huge help when your laptop or mobile phone is lost, destroyed, or stolen. While these are traumatic events, even more traumatic would be losing all of your current and existing documents, audio files, pictures, and other content that cannot be easily replaced. Cloud-based backup and recovery services remove much of the risk from you for a very little expense. Of course, these services vary a great deal in the types of services that they offer, but the focus is on data and files. We'll just focus on files now. In many instances, public file sharing systems offer backup and recovery services as part of their service. Thus, you can copy important files to these public file system services, and they provide backups just in case the original files are lost or corrupted. Other services just provide backup and recovery services that are not designed to share or collaborate in the files that are stored. While there are, of course, many on-premise backup and recovery services, the cloud-based services are often more cost effective. This considering that you don't need to own
>
> **[1:33](https://www.linkedin.com/learning/cloud-storage-concepts-services-cost-control-and-security/backup-and-recovery-services?u=76281980&t=93)** your own [Hardware](../../Topics/Hardware.md) and software. It's delivered as a service from a public cloud provider. Moreover, they can be used with both cloud-based data protection or even on-premise based data protection. Other types of backup and recovery services are able to store large amounts of data in the cloud, such as a database run by a business, again, as a redundant backup in case the original data is lost or corrupted. An example of a public cloud backup service is [Amazon Web Services](../../Skills/Cloud%20Computing/Amazon%20Web%20Services%20(AWS).md) Glacier that's able to back up data to the Amazon Web Services Cloud or other third party services, such as Druva, providing backup and recovery services to protect from ransomware attacks and other catastrophic events. These are often good ideas, considering the importance of your data, documents, and binary files such as audio and video, and also considering the rise of data attacks such as ransomware. These systems allow you to return to a previous state and continue with business processes. Often malicious attacks such as ransomware can destroy businesses if the proper precautions are not made.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Amazon web services](../../Skills/Cloud%20Computing/Amazon%20Web%20Services%20(AWS).md) (2), [Hardware](../../Topics/Hardware.md) (1)
> **Analogies:** such as (5), for example (1)
> **Speakers:** - [instructor] (1)

#### [Other cloud services that leverage cloud storage](https://www.linkedin.com/learning/cloud-storage-concepts-services-cost-control-and-security/other-cloud-services-that-leverage-cloud-storage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-storage-concepts-services-cost-control-and-security/other-cloud-services-that-leverage-cloud-storage?u=76281980&t=0)** - [Narrator] [Cloud Services](../../Skills/Cloud%20Computing/Cloud%20Services.md) that leverage [Cloud Storage](../../Skills/Cloud%20Computing/Cloud%20Storage.md), such as [Databases](../../Skills/Software%20Development/Databases.md) and backup and recovery systems, are too numerous to list specifically here. Basically, most cloud services need to leverage some sort of cloud storage no matter if it's a cloud-based [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) processor or spreadsheet, to a room design system that needs to store designs, to a video processing system that needs to store video content. Everything needs some type of storage. Even applications that run on your smartphone need to utilize cloud storage systems in many cases. Most smartphone providers, such as the iCloud on your iPhone, provide backup recovery and file sharing services in the cloud as native services on the phone. If you ever lost your iPhone, you know how important these services are, considering that they can recover all of your data if your phone is lost or destroyed. Another example would be any [Internet of Things](../../Skills/Software%20Development/Internet%20of%20Things%20(IoT).md), or [IoT](../../Glossary/Concept/IoT.md), device, such as a smartwatch, smart TV, or smart thermostat. These devices don't usually have the capability to store data on the device and must depend on remote cloud storing services as the primary storage system for any data that must be maintained. Cloud storage systems are very handy and cost effective and provide a number of valuable functions that benefit us each day. Indeed, it would be a good idea for you to look around your home and see all of the devices,
>
> **[1:34](https://www.linkedin.com/learning/cloud-storage-concepts-services-cost-control-and-security/other-cloud-services-that-leverage-cloud-storage?u=76281980&t=94)** applications, and even your automobile that perhaps leverages cloud storage services. This technology benefits our lives daily.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Cloud Storage](../../Skills/Cloud%20Computing/Cloud%20Storage.md) (5), [Cloud Services](../../Skills/Cloud%20Computing/Cloud%20Services.md) (2), [Databases](../../Skills/Software%20Development/Databases.md) (1), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1), [Internet of things](../../Skills/Software%20Development/Internet%20of%20Things%20(IoT).md) (1)
> **Code Identifiers:** iphone (2), icloud (1)
> **Analogies:** such as (3)
> **Speakers:** - [narrator] (1)

#### [Sample applications](https://www.linkedin.com/learning/cloud-storage-concepts-services-cost-control-and-security/sample-applications?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-storage-concepts-services-cost-control-and-security/sample-applications?u=76281980&t=0)** - [Narrator] Applications that leverage [Cloud Storage](../../Skills/Cloud%20Computing/Cloud%20Storage.md) can be applications that are already built, or they can be applications that you're able to build to solve business problems. Let's look at a few examples. Let's start with a database using an object storage service as a foundation that's able to store any type of data in support of an application. For instance, a business transaction application that's able to record and store data about a sale, such as customer name, address, [products](../../Skills/Software%20Development/Microsoft%20Products.md) purchased, etcetera. In this case, the data is stored in an object database called DynamoDB that runs on [Amazon Web Services](../../Skills/Cloud%20Computing/Amazon%20Web%20Services%20(AWS).md). This database is able to persist the data, as well as find data and process data to add value to the business. Using an object database that leverages object storage services, such as a [business intelligence](../../Skills/Data%20Science/Business%20Intelligence%20(BI).md) application, is able to leverage massive amounts of sales data to determine useful information. For example, what sales are made based on the time of year and what marketing campaigns are most effective. This system uses a massive multi-petabyte cloud-based object database that's able to process a huge amount of information quickly. As a result, the business is able to make better decisions and it returns value to the business faster. Note that in some cases, an object database may leverage an object storage system. However, making things a bit more confusing, that's not always the case.
>
> **[1:33](https://www.linkedin.com/learning/cloud-storage-concepts-services-cost-control-and-security/sample-applications?u=76281980&t=93)** In some object [Databases](../../Skills/Software%20Development/Databases.md), you use block storage systems or even their own proprietary services to support their database system. Thus, it's not always obvious what storage technology a specific database is using, but they are often happy to answer that question if you ask. You'll find that most applications that you may define, build, or use leverage some storage system including cloud storage. This dependency continues as we seek to get the most of your cloud investment, and build solutions to problems using this technology.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Cloud Storage](../../Skills/Cloud%20Computing/Cloud%20Storage.md) (2), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1), [Amazon web services](../../Skills/Cloud%20Computing/Amazon%20Web%20Services%20(AWS).md) (1), [Business intelligence](../../Skills/Data%20Science/Business%20Intelligence%20(BI).md) (1), [Databases](../../Skills/Software%20Development/Databases.md) (1)
> **Analogies:** such as (2), for instance (1), for example (1)
> **CLI Commands:** find (2), make (1)
> **Warnings:** note that (1)
> **Speakers:** - [narrator] (1)

#### [Challenge: Selecting a backup and recovery storage solution](https://www.linkedin.com/learning/cloud-storage-concepts-services-cost-control-and-security/challenge-selecting-a-backup-and-recovery-storage-solution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-storage-concepts-services-cost-control-and-security/challenge-selecting-a-backup-and-recovery-storage-solution?u=76281980&t=0)** - [Lecturer] You've been challenged to find a backup and recovery solution for your sales and inventory [Databases](../../Skills/Software%20Development/Databases.md). The sales database is running in your data center on a traditional database. Your inventory database is running in a public cloud. There are hundreds of solutions that will work. You're specifically looking for a solution that will bring the most value back to the business. This value can be realized as providing more agility, more scaling, or just supporting an application that the business finds useful. You found through your research that cloud-based backup and recovery solutions are most cost effective, and you're looking to leverage a cloud-based backup and recovery solution for both databases, even though one exists in a data center and not on the cloud. So what will you look for in a cloud-based backup and recovery solution? What solutions will you pick and why?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Databases](../../Skills/Software%20Development/Databases.md) (2)
> **CLI Commands:** find (1)
> **Speakers:** - [lecturer] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Selecting a backup and recovery storage solution](https://www.linkedin.com/learning/cloud-storage-concepts-services-cost-control-and-security/solution-selecting-a-backup-and-recovery-storage-solution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-storage-concepts-services-cost-control-and-security/solution-selecting-a-backup-and-recovery-storage-solution?u=76281980&t=0)** (lively music)
>
> **[0:06](https://www.linkedin.com/learning/cloud-storage-concepts-services-cost-control-and-security/solution-selecting-a-backup-and-recovery-storage-solution?u=76281980&t=6)** - [Instructor] So let's drop right into the solution to our challenge. We don't have a lot of data that you'll typically need, such as granularity of the backups or how often, or security requirements, et cetera, but that's okay. For this, we'll just walk through a very simple solution and understand the likely reasons that we picked it. Again, we're focusing only on cloud-based backup and recovery solutions, but normally the selection process is not just limited to that technology space. For our purposes, we have a few major options, including public cloud-native backup and recovery services that only exist in a single public cloud provider, third party cloud-based backup and recovery services, such as Druva or other services that can be found in the marketplaces of public cloud providers, or build your own, meaning that you build a backup and recovery service for yourself on top of native primitive cloud storied services. We can eliminate option three as a bad idea. We don't want to get into building our own backup and recovery services when there are hundreds that are already built for us. While native backup and recovery services are not a bad option, as mentioned in option one, it may be limiting to have a backup and recovery service that only exists on a single cloud provider. If we decide not to use that provider anymore or if that provider is really only focused on data existing on their platform, that could be a bad choice. The best choice is to leverage the third party
>
> **[1:39](https://www.linkedin.com/learning/cloud-storage-concepts-services-cost-control-and-security/solution-selecting-a-backup-and-recovery-storage-solution?u=76281980&t=99)** cloud-based backup and recovery service, our option two. This is due to the fact that it's designed to work with all major cloud providers, typically. Also, it's designed not only to back up data on the public cloud, but data on traditional systems as well. This becomes your likely preferred solution.

> [!info]- Semantic Content
>
> **Analogies:** such as (2)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (lively music) (1)


### 3. Cloud Storage Planning

[↑ Back to Table of Contents](#table-of-contents)

#### [Understanding your storage requirements](https://www.linkedin.com/learning/cloud-storage-concepts-services-cost-control-and-security/understanding-your-storage-requirements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-storage-concepts-services-cost-control-and-security/understanding-your-storage-requirements?u=76281980&t=0)** - [Instructor] Before we can do storage planning, we need to understand our core storage requirements. This is typically what you think it would be, such as amount of storage needed, such as five terabytes, for example, type of storage needed, such as primitive storage services, object, block, and file, or higher level [Data Storage](../../Skills/Data%20Science/Data%20Storage.md) systems, such as [Databases](../../Skills/Software%20Development/Databases.md), storage performance needed, or what speed do they need to support. Finally, use cases, or how will the storage system be used? The amount of [Cloud Storage](../../Skills/Cloud%20Computing/Cloud%20Storage.md) you may need is pretty easy to figure out. We're looking at a few key data points. First, the amount of storage we think we need within our storage systems initially. Then how much growth we will experience over time. For example, let's say that we're supporting an inventory control application and it needs to support 20 terabytes of data in the first year. Then we can estimate a growth of three terabytes a year, so 23 terabytes total the second year. You can see by this graph that storage grows faster over time. In many cases, those doing storage planning underestimate the speed of growth, and thus under provision their cloud storage system. This is more of an issue when dealing with traditional [Hardware](../../Topics/Hardware.md) systems where you need to buy and install more physical storage to support growth. Sometimes you may hit an upper limit of what a cloud storage system can support, which can be a huge problem.
>
> **[1:34](https://www.linkedin.com/learning/cloud-storage-concepts-services-cost-control-and-security/understanding-your-storage-requirements?u=76281980&t=94)** The idea is to match the most cost effective storage systems based on how the storage systems will be used. Storage performance is normally thought of in response time. For example, if we make a request to read an object, how long before the storage system is able to meet that request? Some applications are very sensitive to storage system performance latency. This means that the applications are often waiting for the storage system to respond. This can result in poor business application performance, which can cost the business a great deal in lost productivity. The use case is simply asking yourself how the storage system will be used during production. This is a matter of understanding what the applications will be doing and how that translates into storage requirements. Examples of use cases you should consider includes sales order entry system, which is a transactional system for recording sales in a database. [Business Analytics](../../Skills/Data%20Science/Business%20Analytics.md), needing long-term storage that can manage a massive amount of data. [Data Security](../../Skills/Data%20Science/Data%20Security.md), in that, it requires storage systems that can support the most effective security. Requirements are often overlooked when cloud architects and developers approach cloud storage, or other [Cloud Services](../../Skills/Cloud%20Computing/Cloud%20Services.md) for that matter. However, as you can see from this video, there's a great deal of things that you need to consider in order to get your storage solution right the first time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Cloud Storage](../../Skills/Cloud%20Computing/Cloud%20Storage.md) (4), [Data Storage](../../Skills/Data%20Science/Data%20Storage.md) (1), [Databases](../../Skills/Software%20Development/Databases.md) (1), [Hardware](../../Topics/Hardware.md) (1), [Business Analytics](../../Skills/Data%20Science/Business%20Analytics.md) (1)
> **Analogies:** such as (4), for example (3)
> **Definitions:** is a  (2), means that (1)
> **CLI Commands:** make (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [Defining costs and storage billing models](https://www.linkedin.com/learning/cloud-storage-concepts-services-cost-control-and-security/defining-costs-and-storage-billing-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-storage-concepts-services-cost-control-and-security/defining-costs-and-storage-billing-models?u=76281980&t=0)** - [David] [Cloud Storage](../../Skills/Cloud%20Computing/Cloud%20Storage.md) systems charge for storage services in many different ways. It's important that you understand how they charge and be able to effectively estimate the cost of cloud storage over time and how those costs may change as you expand storage into the future. There are a few ways that cloud providers bill for storage services, including tiered subscription, amount of storage, time spent on systems, the type of storage that you're going to leverage. These related to moving data in and out of the public cloud provider, known as ingress and egress fees, or often a mix of a few of these concepts. Tiered storage billing is found with public cloud providers that just focus on file sharing and are not full service cloud providers. You may be leveraging these [Cloud Services](../../Skills/Cloud%20Computing/Cloud%20Services.md) now for file sharing as well as backup and recovery. Tiered storage means that we're billing for a tier of use such as one to 100 gigabytes, which is free. 100 gigabytes to 1000 gigabytes or a terabyte for just $10 a month, or one terabyte to 100 terabytes for $20 a month, et cetera. While terms can vary, this is typically a monthly fee. The amount of storage is more often found on larger cloud providers. This normally is charged by gigabyte as a set fee and may also be related
>
> **[1:33](https://www.linkedin.com/learning/cloud-storage-concepts-services-cost-control-and-security/defining-costs-and-storage-billing-models?u=76281980&t=93)** to the amount of time you leverage the storage service. Time spent on the system means they're billing by the minute for the amount of time that you spend on a specific storage system. Often this is combined with the amount of storage used as well. This means that it's a good idea to shut down storage systems when not in use, that can lead to a much larger bill than expected. Billing for the type of storage is important as well since certain types of storage costs more than other types of storage. For instance, object storage is normally more expensive than block storage. This also refers to [Databases](../../Skills/Software%20Development/Databases.md), either specific to a cloud provider or not. These bill in different ways. Thus, you need to understand the price and the terms before you leverage any database or other high level storage system. Ingress or egress fees are the fees charged when data is moved into cloud storage or sent out of cloud storage is another cost to consider. If your applications do a great deal of accepting external data or sending data to external systems. You need to understand that you're charged for these services. There are many other ways that cloud storage providers bill for their services and also understand that it's changing all the time. The concept here is to have an idea of how they are billing you and make sure not to get surprised with a big cloud storage bill. It may be helpful for you to understand the larger concept of cloud [Financial Operations](../../Skills/Software%20Development/Financial%20Operations.md) or FinOps.
>
> **[3:08](https://www.linkedin.com/learning/cloud-storage-concepts-services-cost-control-and-security/defining-costs-and-storage-billing-models?u=76281980&t=188)** This is a larger concept of understanding how to understand and manage cloud costs. Here's a course that can provide you with that information in detail, and if you want to expand your understanding of FinOps, you're urged to take that course as well. FinOps Essentials for Cloud Deployment by myself, David Linthicum.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Cloud Storage](../../Skills/Cloud%20Computing/Cloud%20Storage.md) (6), [Cloud Services](../../Skills/Cloud%20Computing/Cloud%20Services.md) (1), [Databases](../../Skills/Software%20Development/Databases.md) (1), [Financial Operations](../../Skills/Software%20Development/Financial%20Operations.md) (1)
> **Definitions:** means that (2), known as (1), refers to (1), is a  (1)
> **Analogies:** such as (1), for instance (1)
> **CLI Commands:** make (1)
> **Speakers:** - [david] (1)

#### [Defining projected storage growth](https://www.linkedin.com/learning/cloud-storage-concepts-services-cost-control-and-security/defining-projected-storage-growth?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/cloud-storage-concepts-services-cost-control-and-security/defining-projected-storage-growth?u=76281980&t=1)** - [Instructor] While a portion of the requirements topic that we just covered in an earlier video, it's helpful to understand how to estimate and plan for storage growth in more detail. This is related to so many things such as cost, performance and overall success of use of the storage system in returning value to the business. Projecting storage growth is tricky. Let's consider why this is. Data growth is related to the growth of the business, which can sometimes be slower or faster than expected. Cost is often difficult to determine since cloud providers all have very different pricing and terms in how they bill for storage. Data growth also requires you to consider other coupled [Cloud Services](../../Skills/Cloud%20Computing/Cloud%20Services.md), such as the size of your backup and recovery solution which grows with your storage size over time, as well. However, there are a few areas of guidance. Consider growth with the chunks of data that you expect to store over time, such as sales order being 500 kilobytes, in-store data on a high-end average. Use this as a way to estimate data growth versus attempting to figure things to the kilobyte. Consider growth in terms of any upper limits that storage systems may have. For example, if your database is limited to a petabyte, then you need to be sure never to hit the upper limit. Consider other services that you need to grow along with your storage as well,
>
> **[1:34](https://www.linkedin.com/learning/cloud-storage-concepts-services-cost-control-and-security/defining-projected-storage-growth?u=76281980&t=94)** such as security, operations, governance and other systems that need to expand when storage expands. This is really a game that is more like a matter of how close you can get. In the end, you're attempting to get as close as you can in understanding how your storage will likely grow. Consider that one of the advantages of leveraging [Cloud Computing](../../Topics/Cloud%20Computing.md) storage is that the growth does not mean purchasing more physical storage and leasing more data center space. It's all done in the public cloud.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Cloud Services](../../Skills/Cloud%20Computing/Cloud%20Services.md) (1), [Cloud Computing](../../Topics/Cloud%20Computing.md) (1)
> **Analogies:** such as (4), for example (1)
> **Speakers:** - [instructor] (1)

#### [Implementation planning](https://www.linkedin.com/learning/cloud-storage-concepts-services-cost-control-and-security/implementation-planning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-storage-concepts-services-cost-control-and-security/implementation-planning?u=76281980&t=0)** - [Instructor] One of the advantages of leveraging [Cloud Storage](../../Skills/Cloud%20Computing/Cloud%20Storage.md) is that implementation of cloud storage services does not require that you purchase [Hardware](../../Topics/Hardware.md). It's a matter of picking the amount and type of storage that you want from the dashboard of the public [Cloud Computing](../../Topics/Cloud%20Computing.md) provider. And the storage system is allocated for you. That said, there is some implementation items that you should consider. There is a standard cloud storage implementation checklist that should always be considered. Including storage operations, storage security, storage governance, and storage [Cost Management](../../Skills/Software%20Development/Cost%20Management.md). We'll cover storage operations next so we won't dwell on it here. This is just the process of setting up the tools and processes needed to run storage, longer term. Storage security means that we're setting up proper security systems to protect what's being stored. This may include encryption and other security services. It's related to the type and the importance of the data you're storing and compliance issues such as laws and company policies. For instance, ensuring that your customer database is encrypted. Thus, if the data is accessed by unauthorized parties, it can't be read. Storage governance is often overlooked but it's important considering that we're looking to put guardrails around the use of the storage services and the use of what's being stored. For example, not allowing more than a few records to be removed from a database at any given time.
>
> **[1:35](https://www.linkedin.com/learning/cloud-storage-concepts-services-cost-control-and-security/implementation-planning?u=76281980&t=95)** We've covered cost management already. In this part of storage implementation we're just looking to understand how we'll be billed and put in place any billing reporting and limits that should exist. Storage cost information should be gathered ongoing and monitored to ensure that there is no excess billing occurring or we're not wasting money, such as failing to shut down storage systems not in use. Of course, how you'll be implementing your storage system will vary depending on what you're doing specifically with that storage system and the type of storage system you're leveraging. What's important to understand here is that things need to be considered before you roll out a cloud storage implementation successfully.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Cloud Storage](../../Skills/Cloud%20Computing/Cloud%20Storage.md) (4), [Cost Management](../../Skills/Software%20Development/Cost%20Management.md) (2), [Hardware](../../Topics/Hardware.md) (1), [Cloud Computing](../../Topics/Cloud%20Computing.md) (1)
> **Analogies:** such as (2), for instance (1), for example (1)
> **Definitions:** is a  (1), means that (1)
> **Speakers:** - [instructor] (1)

#### [Storage operations](https://www.linkedin.com/learning/cloud-storage-concepts-services-cost-control-and-security/storage-operations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-storage-concepts-services-cost-control-and-security/storage-operations?u=76281980&t=0)** - [Dave] The proper operations of a [Cloud Storage](../../Skills/Cloud%20Computing/Cloud%20Storage.md) system have many components, also is related to the planning that goes into what makes up storage operations specifically for your specific business needs. While there are many things to consider, the core storage operations planning concept that you should consider includes observability, performance, backup and recovery, [Security Operations](../../Skills/Artificial%20Intelligence%20(AI)/Security%20Operations.md), and [Cost Management](../../Skills/Software%20Development/Cost%20Management.md). Observability as related to storage operations refers to the understanding of basic monitoring data that is gathered from the storage systems. This includes performance, resource utilization, input/output systems monitoring, et cetera, anything that's related to the health of how the storage system is functioning. We use this not only to determine when we're having a problem, such as a storage system crash, but when problems are likely to occur, such as seeing resource utilization monitoring data that may indicate that we're likely to see a system crash. Performance which is related to observability focuses on cloud storage performance, such as response times and the ability to process information internal to the storage systems. This usually means monitoring performance data and looking for anomalies, such as performance getting slower as the data is growing, or other indications that attention needs to be made in terms of how cloud storage system performance can be maintained. Backup and recovery
>
> **[1:33](https://www.linkedin.com/learning/cloud-storage-concepts-services-cost-control-and-security/storage-operations?u=76281980&t=93)** are how we're going to back up data stored over time in case of minor errors, outages, or attack. You'll find that this is pretty much a part of most storage deployment, since by storing information in two places means that we're much likely less to lose that data in case of a breach or a disaster. Most use cloud-based backup and recovery systems for our home computers and mobile devices. Security operations are how we're going to maintain security around the storage system over time. This includes things such as encryption, identity and access management, or IAM, and [Multi-factor Authentication](../../Skills/Software%20Development/Multi-factor%20Authentication.md), or MFA, or other subsystems that protect the data being stored. Finally, cost management operations are how we're going to monitor cost and consumption over time, a topic we've already covered, but needs to be a part of cloud storage operations planning. It's also helpful to keep in mind that this is part of a larger operations planning process, and storage is but a single component. All systems need to be considered, including applications, compute, AI, and other major systems that work together to create a business solution. However, understanding what's needed around storage operations planning is fundamental to a healthy [Cloud Computing](../../Topics/Cloud%20Computing.md) architecture. For more information about cloud computing architecture as well as cloud operations and observability, we urge you to check out these courses,
>
> **[3:07](https://www.linkedin.com/learning/cloud-storage-concepts-services-cost-control-and-security/storage-operations?u=76281980&t=187)** [Cloud Architecture- Core Concepts](../Software%20Development/Cloud%20Architecture-%20Core%20Concepts.md) by myself, David Linthicum, Learning Cloud Computing: Observability and Operations, also by myself, Dave Linthicum.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Cloud Storage](../../Skills/Cloud%20Computing/Cloud%20Storage.md) (4), [Cloud Computing](../../Topics/Cloud%20Computing.md) (3), [Security Operations](../../Skills/Artificial%20Intelligence%20(AI)/Security%20Operations.md) (2), [Cost Management](../../Skills/Software%20Development/Cost%20Management.md) (2), [Multi-factor Authentication](../../Skills/Software%20Development/Multi-factor%20Authentication.md) (1)
> **Analogies:** such as (5)
> **Env Vars:** iam (1), mfa (1)
> **Definitions:** refers to (1), means that (1)
> **CLI Commands:** find (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [dave] (1)

#### [Challenge: Setting up storage operations](https://www.linkedin.com/learning/cloud-storage-concepts-services-cost-control-and-security/challenge-setting-up-storage-operations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-storage-concepts-services-cost-control-and-security/challenge-setting-up-storage-operations?u=76281980&t=0)** (pleasant electronic music)
>
> **[0:05](https://www.linkedin.com/learning/cloud-storage-concepts-services-cost-control-and-security/challenge-setting-up-storage-operations?u=76281980&t=5)** - [Instructor] You work at a wholesale foods company who is expanding their storage. You've been asked to set up a storage operations plan by your boss to support this expansion. You already know that this will be an object storage system that will need to support three core business applications, and that is critical to managing the logistics of shipping food to retail outlets, so how would you go about establishing this plan? Keep in mind that you need to focus on what needs to be considered and added to the plan. Also, what needs to be part of storage operations for this [Cloud Storage](../../Skills/Cloud%20Computing/Cloud%20Storage.md) system and the concepts that need to be addressed? Let's see how you do. Again, you can write your answers down or just consider them in your head. The idea is to see how well you remember the concepts just covered.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Cloud Storage](../../Skills/Cloud%20Computing/Cloud%20Storage.md) (1)
> **Warnings:** keep in mind (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (pleasant electronic music) (1)

#### [Solution: Setting up storage operations](https://www.linkedin.com/learning/cloud-storage-concepts-services-cost-control-and-security/solution-setting-up-storage-operations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-storage-concepts-services-cost-control-and-security/solution-setting-up-storage-operations?u=76281980&t=0)** - [Instructor] Again, you work at a wholesale foods company who is expanding their [Cloud Computing](../../Topics/Cloud%20Computing.md) storage. You've been asked to set up a storage operations plan by your boss to support this expansion. Just to review, you already know that this will be an object storage system that needs to support three core business applications, and that is critical to managing the logistics of shipping food to retail outlets. So what did you come up with? Well, there are many things to think about. The core storage operations planning concepts that you should consider include the following in your plan: observability, performance, backup and recovery, [Security Operations](../../Skills/Artificial%20Intelligence%20(AI)/Security%20Operations.md), and [Cost Management](../../Skills/Software%20Development/Cost%20Management.md). In this case, observability could be the monitoring of systems in place to look at major storage system components while they're running, such as memory, performance, IO saturation, et cetera. This means that you're not only looking at the raw data points, but attempting to determine what they mean. For instance, monitoring data points from the storage system will indicate that outages may likely occur. You may add this to your plan, but listing the points that needs to be monitored and what types of insights you need for those storage systems. Next, you may include how you're going to monitor and manage performance. Is this going to be something you find proactively, or do end users need to complain to the support line
>
> **[1:35](https://www.linkedin.com/learning/cloud-storage-concepts-services-cost-control-and-security/solution-setting-up-storage-operations?u=76281980&t=95)** in order to indicate a performance issue? Either works. What do you think is best? Again, listing how you plan on monitoring performance, such as what you plan on monitoring and what thresholds will be set around [Performance Metrics](../../Skills/Cybersecurity/Performance%20Metrics.md) or what constitutes good performance and what does not. Need to make sure that backup and recovery is included as well. This means that you need to suggest a process such as how often the data will be backed up and where the backups will be stored and cataloged. Finally, make sure you add security operations planning, as well as cost monitoring operations. This means that you're defining what data needs security and how you plan on addressing security in your plan. Does it need to be encrypted? If so, what processes and technology are you recommending to carry this out? So how did you do?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Security Operations](../../Skills/Artificial%20Intelligence%20(AI)/Security%20Operations.md) (2), [Cloud Computing](../../Topics/Cloud%20Computing.md) (1), [Cost Management](../../Skills/Software%20Development/Cost%20Management.md) (1), [Performance Metrics](../../Skills/Cybersecurity/Performance%20Metrics.md) (1)
> **Analogies:** such as (3), for instance (1)
> **CLI Commands:** make (2), find (1)
> **Definitions:** means that (3)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 4. AWS Cloud Storage

[↑ Back to Table of Contents](#table-of-contents)

#### [Allocating storage instances](https://www.linkedin.com/learning/cloud-storage-concepts-services-cost-control-and-security/allocating-storage-instances?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/cloud-storage-concepts-services-cost-control-and-security/allocating-storage-instances?u=76281980&t=1)** - [Instructor] In order to understand public [Cloud Storage](../../Skills/Cloud%20Computing/Cloud%20Storage.md) better, let's take a look at one of the most popular cloud storage systems, those storage systems from AWS or [Amazon Web services](../../Skills/Cloud%20Computing/Amazon%20Web%20Services%20(AWS).md). This does not mean that we're recommending AWS, just using it as an example. You'll find that other public cloud storage systems work much the same and most of the concepts are the same. Let's get started. In our first function, let's look at how we allocate storage resources in AWS. We have a few types of primitive storage systems we can utilize, including the storage systems listed under storage from the AWS dashboard. Also note, you can access [Databases](../../Skills/Software%20Development/Databases.md) from here as well, or hundreds of other types of [Cloud Services](../../Skills/Cloud%20Computing/Cloud%20Services.md), for that matter. Databases, as you may recall, may use more primitive storage services as primary mechanisms for how data used from a database is stored in the cloud. Via the dashboard, we select the storage resource type that we want to use. In this case, we're going to leverage S3, which is Amazon Web Services object storage system. However, you'll find that the process for allocating other types of storage systems is about the same. Then we need to define more information about the storage resources. In this case, an S3 bucket. This includes the name of that resource or how it will be referenced by yourself, your applications and within the AWS public cloud. Also, you'll see that you can define the basic permissions or who can access your S3 bucket,
>
> **[1:34](https://www.linkedin.com/learning/cloud-storage-concepts-services-cost-control-and-security/allocating-storage-instances?u=76281980&t=94)** as well as security-related attributes such as encryption. And we'll create bucket. And we can go to the bucket, look at properties. Here's where we can set permissions or define who can access our S3 bucket. Typically, you can take the defaults, but make sure you check to ensure they are meeting your security requirements. So with a click of a mouse, our storage instance is set up for us and we're ready to begin to engage this service.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Cloud Storage](../../Skills/Cloud%20Computing/Cloud%20Storage.md) (3), [Amazon web services](../../Skills/Cloud%20Computing/Amazon%20Web%20Services%20(AWS).md) (2), [Databases](../../Skills/Software%20Development/Databases.md) (2), [Cloud Services](../../Skills/Cloud%20Computing/Cloud%20Services.md) (1)
> **CLI Commands:** aws (5), find (2), make (1)
> **Env Vars:** aws (5)
> **UI Navigation:** select the (1), go to (1)
> **Analogies:** such as (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Placing data on cloud storage instances](https://www.linkedin.com/learning/cloud-storage-concepts-services-cost-control-and-security/placing-data-on-cloud-storage-instances?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-storage-concepts-services-cost-control-and-security/placing-data-on-cloud-storage-instances?u=76281980&t=0)** - [Instructor] Placing data in a running storage resource, in this case, an Amazon Web Service's S3 bucket, which is really just storing data in the allocated [Cloud Storage](../../Skills/Cloud%20Computing/Cloud%20Storage.md) can look like many things. For example, you can upload a file from your computer to an object storage system or file system by using the dashboard. Note, that it's simply accepts the files, no matter the size or type. This flexibility is why most choose to leverage object storage. Most will leverage the storage system to add, edit or remove data. An API, as you may recall, is just a mechanism that is leveraged from applications or tools that communicate with the storage system providing many actions that can take place on that storage system. As you can see here, S3 provides a number of actions that can carry out a number of functions that you may need. However, all storage APIs and other mechanisms that allow for you to manage a storage service are are different from cloud provider to cloud provider. Of course, you'll need to have the proper permissions to leverage these S3 buckets, including adding, removing and changing data. Also, they must be used in a specific way in order for them to work properly. However, they are incredibly powerful, considering the amount of time it would have taken to set this type of storage system up with a traditional data center.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Cloud Storage](../../Skills/Cloud%20Computing/Cloud%20Storage.md) (1)
> **Env Vars:** api (1)
> **Analogies:** for example (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Securing cloud storage instances](https://www.linkedin.com/learning/cloud-storage-concepts-services-cost-control-and-security/securing-cloud-storage-instances?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-storage-concepts-services-cost-control-and-security/securing-cloud-storage-instances?u=76281980&t=0)** - [Instructor] Security around [Cloud Computing](../../Topics/Cloud%20Computing.md) storage can take on many [Forms](../../Skills/Web%20Development/Forms.md). We need to consider how users and applications are to be authenticated to the [Cloud Storage](../../Skills/Cloud%20Computing/Cloud%20Storage.md) system and even adding more sophisticated security services, such as identity access management. While we're limited in what we can show you here, you can leverage all types of security services, either native to the cloud provider or offered by a third party provider to meet your storage security needs exactly. Keep in mind, on [Amazon Web Services](../../Skills/Cloud%20Computing/Amazon%20Web%20Services%20(AWS).md) S3, that security's in two places. It's in property, where you're defining event notice, event-driven, static web hosting, and also encryption. And it's also in permissions, where you define who can access the data, set policies for access, object ownership, access control lists, cross origin resource sharing. Within our S3 permission subsystem, we have a few options that we can leverage, as seen here. Note that we can allow access to the public if configured, which is helpful in supporting a website that desires to place both information about a product being sold, as well as the image of the product. As you may recall, S3 being an object storage system, supports both types of data in the same storage system. In most cases, encryption is normally leveraged
>
> **[1:33](https://www.linkedin.com/learning/cloud-storage-concepts-services-cost-control-and-security/securing-cloud-storage-instances?u=76281980&t=93)** as a security mechanism for cloud storage. This means that information in the storage system is scrambled and is not visible even if the cloud provider can access it. This normally leverages a key that is held by the owner of the data and has to be applied in order to see the data. Encryption is important considering that even if the data is accessed, it's useless to those who don't have the encryption key. This includes the cloud provider itself and any bad actor that may break into your cloud storage system. You should never use a cloud storied system without a proper security plan and security mechanisms.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Cloud Storage](../../Skills/Cloud%20Computing/Cloud%20Storage.md) (3), [Cloud Computing](../../Topics/Cloud%20Computing.md) (1), [Forms](../../Skills/Web%20Development/Forms.md) (1), [Amazon web services](../../Skills/Cloud%20Computing/Amazon%20Web%20Services%20(AWS).md) (1)
> **Warnings:** keep in mind (1), note that (1)
> **Definitions:** means that (1)
> **Analogies:** such as (1)
> **Best Practices:** you should never (1)
> **Speakers:** - [instructor] (1)

#### [Removing storage instances](https://www.linkedin.com/learning/cloud-storage-concepts-services-cost-control-and-security/removing-storage-instances?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-storage-concepts-services-cost-control-and-security/removing-storage-instances?u=76281980&t=0)** - [Instructor] You can remove storage instances at any time, but need to understand specifically what you're doing. Keep in mind that removing storage instances entirely means that the data stored in those instances is lost as well. This needs to be done with some forethought considering that you could potentially lose a great deal of valuable data by mistake. In this case, AWS S3 ensures that you understand what's going to happen by typing in the name of the bucket in the dialogue box to ensure that there is no misunderstanding that your data will be lost. Now, the S3 instance is removed. This also can be done via the API or via the dashboard, or both. Of course, it's different considering what public cloud providers you're leveraging. You should understand exactly what you're doing when leveraging any mechanism that is able to access data.

> [!info]- Semantic Content
>
> **Env Vars:** aws (1), api (1)
> **CLI Commands:** aws (1)
> **Definitions:** means that (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Usage-based accounting](https://www.linkedin.com/learning/cloud-storage-concepts-services-cost-control-and-security/usage-based-accounting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-storage-concepts-services-cost-control-and-security/usage-based-accounting?u=76281980&t=0)** - [Instructor] AWS provides a cost and usage monitoring system that is able to track storage usage and cost as well. Here you'll see the data points around how you're being charged, such as volume of data stored, data sent out of and into your [Cloud Storage](../../Skills/Cloud%20Computing/Cloud%20Storage.md) system from external systems such as other clouds or traditional systems that you may own. Also, in some cases, time used, and the use of other services that you may need such as security and monitoring. Note that in this subsystem, you can download your report as a spreadsheet or an XML file or just look at it on the screen. Keep in mind that there are many other ways to see this data as well, including third party FinOps, or [Financial Operations](../../Skills/Software%20Development/Financial%20Operations.md) management tools, or even other tools that Public Cloud Provider provides natively. The idea is to keep an eye on this and understand what you're spending money on and for what purpose. In many instances, companies get high bills without warning, normally something they did, such as not removing a storage resource when no longer needed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Cloud Storage](../../Skills/Cloud%20Computing/Cloud%20Storage.md) (1), [Financial Operations](../../Skills/Software%20Development/Financial%20Operations.md) (1)
> **Analogies:** such as (4)
> **Warnings:** note that (1), keep in mind (1), warning (1)
> **Env Vars:** aws (1), xml (1)
> **CLI Commands:** aws (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [More about cloud storage](https://www.linkedin.com/learning/cloud-storage-concepts-services-cost-control-and-security/more-about-cloud-storage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-storage-concepts-services-cost-control-and-security/more-about-cloud-storage?u=76281980&t=0)** - [Instructor] This is an introductory course that provides you with enough information to understand what [Cloud Storage](../../Skills/Cloud%20Computing/Cloud%20Storage.md) is, including core concepts, as well as allowing you to get started. Your best path from here is just to experience it. Find a demo account from a cloud storage provider that allows you to test the capabilities of a specific cloud storage system. Perhaps try several and thus understand the differences in why you would use one over the other for specific use cases. If interested, you can continue your journey here, understanding other aspects of [Cloud Computing](../../Topics/Cloud%20Computing.md) such as compute, AI, data analytics, and cloud computing architecture, high level skills that allow you to understand how all of this comes together to form a complete business solution. We wish you the best of luck on your learning journey.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Cloud Storage](../../Skills/Cloud%20Computing/Cloud%20Storage.md) (3), [Cloud Computing](../../Topics/Cloud%20Computing.md) (2)
> **CLI Commands:** find (1)
> **Definitions:** is an  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [David Linthicum](../../Instructors/Cloud%20Computing/David%20Linthicum.md)

## Skills Covered

- Storage Management
- Cloud Storage

## Path Context

### In [Explore a Career as a Cloud Administrator](../../Paths/Cloud%20Computing/Learning%20Paths/Explore%20a%20Career%20as%20a%20Cloud%20Administrator.md)
← [Determining Your Cloud Strategy- Planning for Roadmap, Infrastructure, and Deployment](Determining%20Your%20Cloud%20Strategy-%20Planning%20for%20Roadmap%2C%20Infrastructure%2C%20and%20Deployment.md) | **3 of 6** | [Cybersecurity Awareness- Cloud Security (2022)](Cybersecurity%20Awareness-%20Cloud%20Security%20(2022).md) →

### In [Foundations of Cloud Computing- Models, Platforms, Services, and Careers](../../Paths/Cloud%20Computing/Learning%20Paths/Foundations%20of%20Cloud%20Computing-%20Models%2C%20Platforms%2C%20Services%2C%20and%20Careers.md)
← [Cloud Security Concepts- Services and Compliance](Cloud%20Security%20Concepts-%20Services%20and%20Compliance.md) | **6 of 9** | [Cloud Computing- Understanding Networking](Cloud%20Computing-%20Understanding%20Networking.md) →

## Appears In

- [Explore a Career as a Cloud Administrator](../../Paths/Cloud%20Computing/Learning%20Paths/Explore%20a%20Career%20as%20a%20Cloud%20Administrator.md)
- [Foundations of Cloud Computing- Models, Platforms, Services, and Careers](../../Paths/Cloud%20Computing/Learning%20Paths/Foundations%20of%20Cloud%20Computing-%20Models%2C%20Platforms%2C%20Services%2C%20and%20Careers.md)

## Related Courses

_Courses sharing skills:_

- [Google Cloud Data and Storage Foundations](Google%20Cloud%20Data%20and%20Storage%20Foundations.md) — Cloud Storage
- [Ubuntu Linux- Storage Management](../Cybersecurity/Ubuntu%20Linux-%20Storage%20Management.md) — Storage Management
- [Manage Storage in Azure](Manage%20Storage%20in%20Azure.md) — Cloud Storage
- [AWS- Storage and Data Management](AWS-%20Storage%20and%20Data%20Management.md) — Storage Management

---

[↑ Back to top](#)