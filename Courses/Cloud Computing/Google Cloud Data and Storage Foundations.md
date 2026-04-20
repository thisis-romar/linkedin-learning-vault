---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: google-cloud-data-and-storage-foundations-24099781
url: "https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781"
duration_minutes: 103
duration: 1h 43m
level: Beginner
updated: 6/11/2024
learners: 4308
skills:
  - Data Management
  - Cloud Storage
  - Google Cloud Platform (GCP)
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQHJlfOCLARMkQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1679343774621?e=2147483647&amp;v=beta&amp;t=cfIHB1hIqlSjV-25LQEGMvaYXSDe-HGi4HmDDpPfdAE"
linkedin_topic: Cloud Computing
learning_paths:
  - Getting Started with Google Cloud
path_count: 1
tags:
  - course
  - topic/cloud-computing
  - topic/software-development
  - skill/data-management
  - skill/cloud-storage
  - skill/google-cloud-platform-gcp
status: not-started
created: 2026-04-20
---

![Google Cloud Data and Storage Foundations](https://media.licdn.com/dms/image/v2/C4E0DAQHJlfOCLARMkQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1679343774621?e=2147483647&amp;v=beta&amp;t=cfIHB1hIqlSjV-25LQEGMvaYXSDe-HGi4HmDDpPfdAE)

# Google Cloud Data and Storage Foundations

> Google Cloud remains one of the most popular cloud platforms, and in this course, instructor Mark Johnson covers the fundamentals of storage on GCP. Mark begins with an overview of object storage on GCP and then dives into both relational and non-relational databases. GCP services like Firestore, Bigtable, and Cloud Spanner are covered. He wraps up with an introduction to data warehousing and anal

> [LinkedIn Learning](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781) | 1h 43m | Beginner | 4K learners
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Mark Johnson]]

## Skills Covered

- Data Management
- Cloud Storage
- Google Cloud Platform (GCP)

## Table of Contents

### Introduction

#### Google Cloud storage and databases
> [LinkedIn Learning](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/google-cloud-storage-and-databases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/google-cloud-storage-and-databases?u=76281980&t=0)** - Hey there, folks, my name's Mark Johnson, and I'm here today to talk to you about a brand new revised course on Google Cloud Data and Storage Foundations.
>
> **[0:08](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/google-cloud-storage-and-databases?u=76281980&t=8)** Now, I understand there's a lot of different options you can choose from when it comes to data and storage within Google Cloud, but when would you use each one?
>
> **[0:16](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/google-cloud-storage-and-databases?u=76281980&t=16)** Why would you use each one?
>
> **[0:18](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/google-cloud-storage-and-databases?u=76281980&t=18)** And I'm here to help you understand that.
>
> **[0:20](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/google-cloud-storage-and-databases?u=76281980&t=20)** Let's jump into the course.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1)
> **Speakers:** - hey (1)


### 1. Object Storage on GCP

#### Understanding your storage and database options
> [LinkedIn Learning](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/understanding-your-storage-and-database-options?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/understanding-your-storage-and-database-options?u=76281980&t=0)** - [Instructor] All right, folks, so I'm really excited to kick this course off.
>
> **[0:03](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/understanding-your-storage-and-database-options?u=76281980&t=3)** Starting off with a brand new decision tree.
>
> **[0:06](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/understanding-your-storage-and-database-options?u=76281980&t=6)** And this is really going to help you decide which storage option to use when you're setting up your Google Cloud application, or you're just trying to solve any type of database problem that you may have.
>
> **[0:20](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/understanding-your-storage-and-database-options?u=76281980&t=20)** Now, the first thing, and really the first question you really need to understand is, is your data structured?
>
> **[0:26](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/understanding-your-storage-and-database-options?u=76281980&t=26)** So when you're looking at that from the top, we have two options if you say no.
>
> **[0:31](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/understanding-your-storage-and-database-options?u=76281980&t=31)** And that is Filestore, which is basically a network-attached storage, otherwise known as a NAS, and that's if you need to share files in a system similar to like a Windows file system.
>
> **[0:44](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/understanding-your-storage-and-database-options?u=76281980&t=44)** And then you also have Cloud Storage.
>
> **[0:47](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/understanding-your-storage-and-database-options?u=76281980&t=47)** So if you don't have that use case, Cloud Storage is great for just dumping data into a big old blob store, a bucket.
>
> **[0:55](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/understanding-your-storage-and-database-options?u=76281980&t=55)** That's where Cloud Storage really comes into play.
>
> **[0:57](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/understanding-your-storage-and-database-options?u=76281980&t=57)** And, honestly, when it comes to cloud, a lot of migrations start right in Cloud Storage.
>
> **[1:05](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/understanding-your-storage-and-database-options?u=76281980&t=65)** The next question you want to ask yourself is, does your workload involve analytics?
>
> **[1:10](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/understanding-your-storage-and-database-options?u=76281980&t=70)** And if it does, does it require any type of high throughput, low latency, time series?
>
> **[1:18](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/understanding-your-storage-and-database-options?u=76281980&t=78)** You get the picture, right?
>
> **[1:20](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/understanding-your-storage-and-database-options?u=76281980&t=80)** So that's where Bigtable comes into play.
>
> **[1:22](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/understanding-your-storage-and-database-options?u=76281980&t=82)** And Bigtable's NoSQL, and it's a really good option for that.
>
> **[1:27](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/understanding-your-storage-and-database-options?u=76281980&t=87)** But if you have relational data, BigQuery is a very good option as well when you need very high-speed reads.
>
> **[1:35](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/understanding-your-storage-and-database-options?u=76281980&t=95)** And any type of data warehouse, you're doing a lot of SQL querying, BigQuery is a good option there.
>
> **[1:42](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/understanding-your-storage-and-database-options?u=76281980&t=102)** Staying on the same topic there, is your data relational?
>
> **[1:46](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/understanding-your-storage-and-database-options?u=76281980&t=106)** Well, now we have several different options.
>
> **[1:49](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/understanding-your-storage-and-database-options?u=76281980&t=109)** But the first option you need to ask yourself, is your data hybrid transaction slash analytical processing required?
>
> **[1:58](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/understanding-your-storage-and-database-options?u=76281980&t=118)** Do you need HTAP, which means hybrid transaction analytical processing?
>
> **[2:04](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/understanding-your-storage-and-database-options?u=76281980&t=124)** And that's where AlloyDB comes into play.
>
> **[2:07](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/understanding-your-storage-and-database-options?u=76281980&t=127)** Now, HTAP is basically the best of both worlds when it comes to transactions and analytics.
>
> **[2:15](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/understanding-your-storage-and-database-options?u=76281980&t=135)** It's an enterprise solution, and we'll talk a little bit more about that later on in the course.
>
> **[2:20](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/understanding-your-storage-and-database-options?u=76281980&t=140)** The next question, do you need global scalability?
>
> **[2:25](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/understanding-your-storage-and-database-options?u=76281980&t=145)** Well, if you do, that's where Cloud Spanner comes into play.
>
> **[2:30](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/understanding-your-storage-and-database-options?u=76281980&t=150)** And Cloud Spanner can go all over the world.
>
> **[2:33](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/understanding-your-storage-and-database-options?u=76281980&t=153)** It's a relational database, of course.
>
> **[2:35](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/understanding-your-storage-and-database-options?u=76281980&t=155)** It's going to be more expensive than Cloud SQL, which offers similar options, but that's really just on one type of instance, so it doesn't scale globally.
>
> **[2:46](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/understanding-your-storage-and-database-options?u=76281980&t=166)** And then the last question you need to ask yourself, do you need any type of application caching?
>
> **[2:51](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/understanding-your-storage-and-database-options?u=76281980&t=171)** And that's where Memorystore comes in and fits the need there because it's basically an in-memory, Redis database.
>
> **[2:58](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/understanding-your-storage-and-database-options?u=76281980&t=178)** And if you need very, very fast speeds and that type of performance, cache, all that good stuff, that's where Cloud Memorystore is really a good option.
>
> **[3:09](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/understanding-your-storage-and-database-options?u=76281980&t=189)** And then last but not least is Firestore.
>
> **[3:11](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/understanding-your-storage-and-database-options?u=76281980&t=191)** And that's a NoSQL database option as well.
>
> **[3:14](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/understanding-your-storage-and-database-options?u=76281980&t=194)** It's serverless.
>
> **[3:15](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/understanding-your-storage-and-database-options?u=76281980&t=195)** It's very fast.
>
> **[3:17](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/understanding-your-storage-and-database-options?u=76281980&t=197)** If you're doing any type of document collections, things of that nature, Firestore is a good option, and we'll talk a little bit about that later on in the course as well.
>
> **[3:26](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/understanding-your-storage-and-database-options?u=76281980&t=206)** Ultimately, this storage and decision tree is going to help you make decisions on what type of database to use in the cloud, and I'm going to go into a lot more detail coming up in these next videos.
>
> **[3:38](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/understanding-your-storage-and-database-options?u=76281980&t=218)** This course is going to really tie into all of these Google Cloud online storage products that you see here on this website.
>
> **[3:46](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/understanding-your-storage-and-database-options?u=76281980&t=226)** And it's very extensive.
>
> **[3:48](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/understanding-your-storage-and-database-options?u=76281980&t=228)** I'm not going to cover every single one on this page, but just keep in mind to always refer back to this website for the latest on all Google Cloud storage and database options.
>
> **[4:00](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/understanding-your-storage-and-database-options?u=76281980&t=240)** But I just wanted to show you and to scroll through a few of them because there's so many of them, and there's always new things coming out in the pipeline.
>
> **[4:07](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/understanding-your-storage-and-database-options?u=76281980&t=247)** So definitely just check out this website here, and it will really help you get a good understanding on what database and storage services you can use to help solve your problems.

> [!info]- Semantic Content
>
> **Env Vars:** sql (2), htap (2), nas (1)
> **Definitions:** is a  (3), known as (1)
> **Code Keywords:** case, (1), require (1)
> **Analogies:** similar to (1), picture (1)
> **CLI Commands:** make (1)
> **Cross-References:** coming up (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### What does object storage look like?
> [LinkedIn Learning](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/what-does-object-storage-look-like?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/what-does-object-storage-look-like?u=76281980&t=0)** - [Instructor] Welcome to object storage on GCP.
>
> **[0:03](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/what-does-object-storage-look-like?u=76281980&t=3)** I'm really excited today to talk to you about how you can take advantage of object storage and how you can migrate data into it.
>
> **[0:13](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/what-does-object-storage-look-like?u=76281980&t=13)** But the first thing I want to ask you is what product or service could you build today if you had the ability to store data all around the world with the ability to have it backed up automatically?
>
> **[0:26](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/what-does-object-storage-look-like?u=76281980&t=26)** Because what I want you to do next is learn exactly what object storage is and how you can use it to store data, along with setting up a cloud storage bucket in GCP.
>
> **[0:39](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/what-does-object-storage-look-like?u=76281980&t=39)** Setting up the cloud storage bucket, what we've done here is we've gone to the Google Cloud Storage website, and what we want to do is get a really good understanding of what the storage classes are and the different options you can choose from.
>
> **[0:55](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/what-does-object-storage-look-like?u=76281980&t=55)** So we're going to scroll down here and look at these available storage classes.
>
> **[0:58](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/what-does-object-storage-look-like?u=76281980&t=58)** And this is ultimately kind of the backbone when setting up your cloud storage bucket, because when you choose Standard storage, you could see the minimum storage duration is set to None.
>
> **[1:10](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/what-does-object-storage-look-like?u=76281980&t=70)** And ultimately that just means you can delete data.
>
> **[1:14](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/what-does-object-storage-look-like?u=76281980&t=74)** You can add data, you don't have to keep data for a certain amount of time or pay different costs based on duration.
>
> **[1:22](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/what-does-object-storage-look-like?u=76281980&t=82)** And you can see it's 99.99% in all regions as far as availability goes.
>
> **[1:28](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/what-does-object-storage-look-like?u=76281980&t=88)** Nearline storage is 30 days for the minimum duration to get that pricing.
>
> **[1:34](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/what-does-object-storage-look-like?u=76281980&t=94)** Coldline storage is 90 days, and then Archive storage is set at 365 days.
>
> **[1:41](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/what-does-object-storage-look-like?u=76281980&t=101)** And last but not least, we're going to help you decide on which one to use based on your use case or a problem you're trying to solve.
>
> **[1:50](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/what-does-object-storage-look-like?u=76281980&t=110)** Okay, so for example, what I'd like to show you here is a very good use case of if you have a bunch of media files and you're trying to deliver media streaming capability to your clients, cloud storage gives you that capability because you could store all your media files in a cloud storage bucket as you see here in the middle of the screen, and your application can be running on compute engine, which is for virtual machines, and when you move the data into it, you batch load it all in.
>
> **[2:22](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/what-does-object-storage-look-like?u=76281980&t=142)** And we're going to talk about a migration path a little bit later on in this course.
>
> **[2:26](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/what-does-object-storage-look-like?u=76281980&t=146)** You'll ultimately be able to deliver and stream this information to your customers using something like cloud CDN to speed it up, or you can use some other type of network using some various partners.
>
> **[2:38](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/what-does-object-storage-look-like?u=76281980&t=158)** So this is a very good use case for cloud storage media files and ingesting a bunch of data, migrating it in.
>
> **[2:46](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/what-does-object-storage-look-like?u=76281980&t=166)** And hopefully this gives you a good understanding of what you could do with it.

> [!info]- Semantic Content
>
> **Env Vars:** gcp (2), cdn (1)
> **Code Keywords:** from. (1), delete (1)
> **Definitions:** is a  (2)
> **Versions:** 99.99 (1)
> **UI Navigation:** scroll down (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Popular Google Cloud storage features
> [LinkedIn Learning](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/popular-google-cloud-storage-features?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/popular-google-cloud-storage-features?u=76281980&t=0)** - [Presenter] Popular Google Cloud Storage Features.
>
> **[0:03](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/popular-google-cloud-storage-features?u=76281980&t=3)** Now, before we start talking about how you use the various features in cloud storage, the first thing I'd like you to think about is some ways you can currently improve or store information for your current or future application.
>
> **[0:22](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/popular-google-cloud-storage-features?u=76281980&t=22)** And the reason I want you to think about this is because with Google Cloud, you're going to have a lot of different options.
>
> **[0:28](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/popular-google-cloud-storage-features?u=76281980&t=28)** So any limitations you had in the past, hopefully this can help solve some of those with some of the features.
>
> **[0:36](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/popular-google-cloud-storage-features?u=76281980&t=36)** So the next thing we're going to do is jump to a demo.
>
> **[0:39](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/popular-google-cloud-storage-features?u=76281980&t=39)** I just wanted to go to the Google Cloud storage webpage and give you a couple features here, just kind of point some of these out in regards to cloud storage.
>
> **[0:49](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/popular-google-cloud-storage-features?u=76281980&t=49)** Now the first one, one of my favorites, is the object lifecycle management, and that's really just a fancy way of saying I can control how long you keep information, and the second one is multiple redundancy options.
>
> **[1:06](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/popular-google-cloud-storage-features?u=76281980&t=66)** And I'd like you to think about this as you could store information in multiple places at the same time and that could be in a certain region or it could be all over the world.
>
> **[1:18](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/popular-google-cloud-storage-features?u=76281980&t=78)** So it kind of gives you that capability to have really good control over if something is deleted or misplaced, you'll be able to get that information back very quickly.
>
> **[1:31](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/popular-google-cloud-storage-features?u=76281980&t=91)** So the first thing we're going to do in this Google Cloud console here, I already have a cloud storage bucket created.
>
> **[1:40](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/popular-google-cloud-storage-features?u=76281980&t=100)** And as you could see here, the first thing I want to point out, also, you can notice how long the line here is for the information, the second line for the description, you could see when it was created, the location.
>
> **[1:56](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/popular-google-cloud-storage-features?u=76281980&t=116)** But we want to focus on where this was created at and it was created in US Central one Iowa.
>
> **[2:03](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/popular-google-cloud-storage-features?u=76281980&t=123)** And as we look through this, there's no lifecycle rules and lifecycle rules just basically controls how long you keep information.
>
> **[2:10](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/popular-google-cloud-storage-features?u=76281980&t=130)** So let's click on that and in here what we're going to do is create a rule to delete information after a certain time period.
>
> **[2:22](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/popular-google-cloud-storage-features?u=76281980&t=142)** So I'm going to add a rule and you could see there's different actions here, we can choose to move it to a different type of storage class, such as archive, but for the purpose of this demo, we're going to choose delete object and then we're going to hit continue.
>
> **[2:39](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/popular-google-cloud-storage-features?u=76281980&t=159)** And for this, what we'll do is anything from an age that is more than let's say 30 days old and this counts from when it was uploaded to the current bucket, even if it's moved from another.
>
> **[2:58](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/popular-google-cloud-storage-features?u=76281980&t=178)** So this is this current bucket we're talking about and we're going to hit create and just like that we have gone ahead and created a rule.
>
> **[3:09](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/popular-google-cloud-storage-features?u=76281980&t=189)** Quick bonus here, I also want to show you something else really cool that's kind of tied to a lifecycle policy as well within GCP.
>
> **[3:17](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/popular-google-cloud-storage-features?u=76281980&t=197)** And this is called object versioning.
>
> **[3:19](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/popular-google-cloud-storage-features?u=76281980&t=199)** So what I've done here, I've gone ahead and opened up Cloud Shell, which is the icon in the top right hand corner and once I did this, I'm going to go ahead and turn on object versioning.
>
> **[3:30](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/popular-google-cloud-storage-features?u=76281980&t=210)** Now you have to do this from a command prompt.
>
> **[3:34](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/popular-google-cloud-storage-features?u=76281980&t=214)** So we're going to do gsutil and we're going to do versioning set on and then we're going to type in our bucket name and what this is going to do, think about Google Drive or think about Google Docs, if you ever deleted a file from there or you make a change to a document, what it does is it keeps a copy of the old one so that you can go back to it and that's exactly what this does.
>
> **[4:04](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/popular-google-cloud-storage-features?u=76281980&t=244)** So if I have a picture and I upload something and then I delete it, I would be able to go back, and get that file and it would keep the old one.
>
> **[4:14](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/popular-google-cloud-storage-features?u=76281980&t=254)** So if I make changes to anything, it's really cool.
>
> **[4:19](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/popular-google-cloud-storage-features?u=76281980&t=259)** Of course it's going to add to cost, because you're going to be keeping a copy of everything that's been removed.
>
> **[4:25](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/popular-google-cloud-storage-features?u=76281980&t=265)** But what you can do is when you look at your different objects in your cloud storage bucket, you'll be able to have that capability.
>
> **[4:34](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/popular-google-cloud-storage-features?u=76281980&t=274)** We're just going to make sure that our object versioning is turned on.
>
> **[4:38](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/popular-google-cloud-storage-features?u=76281980&t=278)** So what we'll do, is we're going to run this command gsutil versioning, get on this storage bucket and we're going to see that it's now enabled.
>
> **[4:48](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/popular-google-cloud-storage-features?u=76281980&t=288)** And from this standpoint, the next thing we want to do, I'm going to go into my objects and let's just say I'm going to pick this file here, time-tracker.html.
>
> **[5:01](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/popular-google-cloud-storage-features?u=76281980&t=301)** So I'm going to hit delete on that and then once it's deleted, that's it, it's gone.
>
> **[5:08](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/popular-google-cloud-storage-features?u=76281980&t=308)** But since we turned on object versioning, I'm going to show you where that file still exists.
>
> **[5:14](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/popular-google-cloud-storage-features?u=76281980&t=314)** So we're going to do gsutil, ls, the list, minus A, and we're going to put in our bucket name and what this is going to do is it's going to show us a list of all the files with these generation numbers.
>
> **[5:32](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/popular-google-cloud-storage-features?u=76281980&t=332)** So there's that time-tracker file and there's the record of it, right there, that long number there, that number string is actually just indicating that particular version.
>
> **[5:43](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/popular-google-cloud-storage-features?u=76281980&t=343)** And I actually could restore that in my applications and things of that nature.
>
> **[5:47](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/popular-google-cloud-storage-features?u=76281980&t=347)** So that just shows you how it works, you do have to use the command line to do this.
>
> **[5:53](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/popular-google-cloud-storage-features?u=76281980&t=353)** There's no way currently as of recording of this video to click on something here within the Google Cloud console to turn on object versioning.
>
> **[6:04](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/popular-google-cloud-storage-features?u=76281980&t=364)** So with that being said, the next thing I wanted to briefly talk about is the storage locations.
>
> **[6:11](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/popular-google-cloud-storage-features?u=76281980&t=371)** Now it's very important with this, because this also does help the performance of your application, based on where your users are accessing it from.
>
> **[6:22](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/popular-google-cloud-storage-features?u=76281980&t=382)** And as you could see here, this one's in Central one Iowa.
>
> **[6:27](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/popular-google-cloud-storage-features?u=76281980&t=387)** I could change this to a different location by moving the data to a new bucket that's closer to where my users would be.
>
> **[6:35](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/popular-google-cloud-storage-features?u=76281980&t=395)** So I will just hit Create Bucket and the first thing I just want you to see is the options under choose where to store your data.
>
> **[6:43](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/popular-google-cloud-storage-features?u=76281980&t=403)** And it's really cool, the multi region is the one that's been around the longest, that one in regional, but now we also have a dual region, which you could just pick two areas that you could choose to keep your data.
>
> **[6:57](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/popular-google-cloud-storage-features?u=76281980&t=417)** And these are your options as of the recording of this video, so we have three different areas, there's one in Europe and Asia Pacific as well.
>
> **[7:05](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/popular-google-cloud-storage-features?u=76281980&t=425)** And then if I choose region, that's what I did for this current bucket, I just chose Central one Iowa, but of course if I did multi-region, it just puts it in multiple regions in the US.
>
> **[7:17](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/popular-google-cloud-storage-features?u=76281980&t=437)** So understanding that is is very key when you're creating an application or you're moving archive data into cloud storage.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (4), delete (4), let (3), class, (1), continue (1)
> **CLI Commands:** make (3), ls (1)
> **UI Navigation:** click on (2), go to (1)
> **Analogies:** such as (1), just like (1), picture (1)
> **Tools:** command prompt (1), command line (1)
> **File Paths:** time-tracker.html (1)
> **Env Vars:** gcp (1)
> **Cross-References:** go back to (1)

#### Optimizing Cloud Storage Costs with Autoclass
> [LinkedIn Learning](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/optimizing-cloud-storage-costs-with-autoclass?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/optimizing-cloud-storage-costs-with-autoclass?u=76281980&t=0)** - [Instructor] Alright folks, so today we're going to talk about the latest Google Cloud storage option.
>
> **[0:05](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/optimizing-cloud-storage-costs-with-autoclass?u=76281980&t=5)** And that feature is called autoclass.
>
> **[0:07](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/optimizing-cloud-storage-costs-with-autoclass?u=76281980&t=7)** Now we're looking directly at the Google Cloud storage page here to look at the different storage classes.
>
> **[0:14](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/optimizing-cloud-storage-costs-with-autoclass?u=76281980&t=14)** And as we covered earlier in the course, we have several different options.
>
> **[0:18](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/optimizing-cloud-storage-costs-with-autoclass?u=76281980&t=18)** We have standard storage, nearline, cold line, and archive.
>
> **[0:24](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/optimizing-cloud-storage-costs-with-autoclass?u=76281980&t=24)** And as you can see, there's certain use cases for each one of those storage classes in regard to the minimum storage duration.
>
> **[0:32](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/optimizing-cloud-storage-costs-with-autoclass?u=76281980&t=32)** But let's just say you had no idea how long you're going to need to store data from a duration standpoint.
>
> **[0:40](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/optimizing-cloud-storage-costs-with-autoclass?u=76281980&t=40)** And this is where autoclass really comes into play.
>
> **[0:43](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/optimizing-cloud-storage-costs-with-autoclass?u=76281980&t=43)** So I'm going to go ahead and click on this link to autoclass and we're going to read about it.
>
> **[0:50](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/optimizing-cloud-storage-costs-with-autoclass?u=76281980&t=50)** But in a nutshell, what it does is it automatically moves your data to the right storage class based on your usage patterns.
>
> **[0:59](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/optimizing-cloud-storage-costs-with-autoclass?u=76281980&t=59)** And this is really great because if you started off using standard storage, and let's say you're not frequently using that data, autoclass will automatically move it to a cheaper option.
>
> **[1:12](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/optimizing-cloud-storage-costs-with-autoclass?u=76281980&t=72)** So as we're reading through some of this documentation here, I'm not going to read through all of this, but I want to call out some of the main key points.
>
> **[1:21](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/optimizing-cloud-storage-costs-with-autoclass?u=76281980&t=81)** First off, retrieval fees are never charged when you use this option.
>
> **[1:25](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/optimizing-cloud-storage-costs-with-autoclass?u=76281980&t=85)** And early deletion fees are never charged.
>
> **[1:28](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/optimizing-cloud-storage-costs-with-autoclass?u=76281980&t=88)** So there's no special requirements or things you need to do in regards to pricing to have the data automatically move.
>
> **[1:37](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/optimizing-cloud-storage-costs-with-autoclass?u=76281980&t=97)** And then another thing is you can also enable autoclass on existing buckets.
>
> **[1:43](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/optimizing-cloud-storage-costs-with-autoclass?u=76281980&t=103)** All right, so now what we're going to do is we're going to set up a brand new storage bucket, but I'm going to show you the options to select autoclass.
>
> **[1:53](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/optimizing-cloud-storage-costs-with-autoclass?u=76281980&t=113)** So we're going to go ahead and hit create and we're just going to make up a new name.
>
> **[1:57](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/optimizing-cloud-storage-costs-with-autoclass?u=76281980&t=117)** I'm just going to call this test12345678.
>
> **[2:01](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/optimizing-cloud-storage-costs-with-autoclass?u=76281980&t=121)** Let's try that one.
>
> **[2:03](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/optimizing-cloud-storage-costs-with-autoclass?u=76281980&t=123)** Oh, that one's already taken.
>
> **[2:04](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/optimizing-cloud-storage-costs-with-autoclass?u=76281980&t=124)** So we'll do dash nine nine and then as we continue, we'll leave it at multi-region.
>
> **[2:13](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/optimizing-cloud-storage-costs-with-autoclass?u=76281980&t=133)** And and now you see the option for storage class when we choose the storage class for the data.
>
> **[2:17](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/optimizing-cloud-storage-costs-with-autoclass?u=76281980&t=137)** So we're going to go ahead and click on that.
>
> **[2:20](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/optimizing-cloud-storage-costs-with-autoclass?u=76281980&t=140)** Now, when you're doing this from the beginning on a brand new bucket, you're also going to see a new checkbox to opt in to allow object transitions to code line and archive classes.
>
> **[2:31](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/optimizing-cloud-storage-costs-with-autoclass?u=76281980&t=151)** So this is something that you can do from the beginning.
>
> **[2:35](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/optimizing-cloud-storage-costs-with-autoclass?u=76281980&t=155)** You also can leave it for the normal standard to near line storage class, which is the normal setup option, rather the default when you're using autoclass.
>
> **[2:46](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/optimizing-cloud-storage-costs-with-autoclass?u=76281980&t=166)** So I'll go ahead and opt into that as well.
>
> **[2:50](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/optimizing-cloud-storage-costs-with-autoclass?u=76281980&t=170)** We'll hit continue, we'll just leave everything else, continue, and we'll just go ahead and hit create and then public access will be prevented.
>
> **[2:58](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/optimizing-cloud-storage-costs-with-autoclass?u=76281980&t=178)** And this is by default, so I'll just leave that from a security standpoint.
>
> **[3:04](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/optimizing-cloud-storage-costs-with-autoclass?u=76281980&t=184)** And just like that, we have a bucket.
>
> **[3:07](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/optimizing-cloud-storage-costs-with-autoclass?u=76281980&t=187)** It's been managed with autoclass as you can see here at the top.
>
> **[3:11](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/optimizing-cloud-storage-costs-with-autoclass?u=76281980&t=191)** But let's say you already have a storage bucket and you want to take advantage of this new pricing feature because basically you don't want to spend any more money than you need to on storage.
>
> **[3:22](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/optimizing-cloud-storage-costs-with-autoclass?u=76281980&t=202)** So we're going to go back, look at these buckets, and I'm just going to pick a random bucket here.
>
> **[3:29](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/optimizing-cloud-storage-costs-with-autoclass?u=76281980&t=209)** And I'm looking at this bucket.
>
> **[3:30](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/optimizing-cloud-storage-costs-with-autoclass?u=76281980&t=210)** And notice at the top it's showing it's in standard storage.
>
> **[3:35](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/optimizing-cloud-storage-costs-with-autoclass?u=76281980&t=215)** So we're going to go ahead, click on configuration, and then from within configuration, if you're looking down here at the default storage class, I can hit the edit button.
>
> **[3:46](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/optimizing-cloud-storage-costs-with-autoclass?u=76281980&t=226)** And as you can see, I now have the option for autoclass at the top.
>
> **[3:51](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/optimizing-cloud-storage-costs-with-autoclass?u=76281980&t=231)** And once I click on that radio button, you're going to see enabling autoclass will delete all existing lifecycle rules.
>
> **[3:59](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/optimizing-cloud-storage-costs-with-autoclass?u=76281980&t=239)** And then it also is going to require all objects start in standard class and then they would move to nearline storage.
>
> **[4:07](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/optimizing-cloud-storage-costs-with-autoclass?u=76281980&t=247)** So that's the default setup for autoclass.
>
> **[4:10](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/optimizing-cloud-storage-costs-with-autoclass?u=76281980&t=250)** So I'm going to go ahead and hit save.
>
> **[4:15](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/optimizing-cloud-storage-costs-with-autoclass?u=76281980&t=255)** And just like that, you can now see that the storage class has now been changed to manage with autoclass, and that's as simple as it gets.
>
> **[4:24](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/optimizing-cloud-storage-costs-with-autoclass?u=76281980&t=264)** I'll see you in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), continue (3), class, (2), this, (1), else, (1)
> **UI Navigation:** click on (4), checkbox (1)
> **Cross-References:** we covered (1), earlier in (1), in the next (1)
> **Prerequisites:** setup (2), set up (1)
> **Analogies:** just like (2)
> **CLI Commands:** make (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### Demo: Migrating data in Cloud Storage
> [LinkedIn Learning](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-migrating-data-in-cloud-storage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-migrating-data-in-cloud-storage?u=76281980&t=0)** - [Tutor] In this session, we're going to demonstrate how to exactly migrate data into cloud storage.
>
> **[0:08](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-migrating-data-in-cloud-storage?u=76281980&t=8)** So the mystery we're going to be solving here is how we can migrate data very quickly using different tools.
>
> **[0:16](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-migrating-data-in-cloud-storage?u=76281980&t=16)** So looking at this webpage here, this is Google Cloud's webpage on cloud data transfer, and you're going to see a lot of different options and we're going to cover some of these during our demo.
>
> **[0:28](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-migrating-data-in-cloud-storage?u=76281980&t=28)** But first, since I want you to learn step by step on how we get to transferring data in the cloud storage, I want to show you how to create a project in GCP, which is what you'll need first before you do anything at all.
>
> **[0:43](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-migrating-data-in-cloud-storage?u=76281980&t=43)** So let's get started.
>
> **[0:44](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-migrating-data-in-cloud-storage?u=76281980&t=44)** The first thing you want to do to get directly into GCP, if you go into the URL box and you just type in [console.cloud](https://console.cloud).[google.com](https://google.com), it's going to take you into GCP.
>
> **[0:57](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-migrating-data-in-cloud-storage?u=76281980&t=57)** Now, from here, you may see you already have a project, like what we're seeing on my screen, but let's just say you don't, I'm going to show you how to create one.
>
> **[1:08](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-migrating-data-in-cloud-storage?u=76281980&t=68)** So from the beginning on the top of the screen, I'm going to hit this dropdown arrow and I'm going to click on new project.
>
> **[1:14](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-migrating-data-in-cloud-storage?u=76281980&t=74)** And this is the screen you're going to see when you need to create a new project, or anytime you're creating any type of new resource in GCP, you'll have to be associated with a project.
>
> **[1:24](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-migrating-data-in-cloud-storage?u=76281980&t=84)** So we're going to just call this CS Storage 123.
>
> **[1:30](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-migrating-data-in-cloud-storage?u=76281980&t=90)** Now this project ID can't be changed later.
>
> **[1:34](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-migrating-data-in-cloud-storage?u=76281980&t=94)** It's something that goes across all of Google Cloud platform, but in this case, you can edit the project name, but the project ID stays the same.
>
> **[1:45](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-migrating-data-in-cloud-storage?u=76281980&t=105)** So we're just going to hit Create.
>
> **[1:47](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-migrating-data-in-cloud-storage?u=76281980&t=107)** And once we hit create, we see a notification in the top corner here, creating the project.
>
> **[1:54](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-migrating-data-in-cloud-storage?u=76281980&t=114)** And just like that, it's been created.
>
> **[1:57](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-migrating-data-in-cloud-storage?u=76281980&t=117)** We hit select project, and now you see we're in the Project CS storage 123.
>
> **[2:03](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-migrating-data-in-cloud-storage?u=76281980&t=123)** That's it.
>
> **[2:04](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-migrating-data-in-cloud-storage?u=76281980&t=124)** Okay, so we have our project set up.
>
> **[2:06](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-migrating-data-in-cloud-storage?u=76281980&t=126)** I'm actually going to use a different project for the purpose of this demo simply because I already have signed up for trial.
>
> **[2:13](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-migrating-data-in-cloud-storage?u=76281980&t=133)** And I just wanted to show you initially how you could set up a project within GCP.
>
> **[2:19](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-migrating-data-in-cloud-storage?u=76281980&t=139)** So jumping into this project, I'm using a different name.
>
> **[2:21](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-migrating-data-in-cloud-storage?u=76281980&t=141)** It's called Learn Sandbox.
>
> **[2:24](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-migrating-data-in-cloud-storage?u=76281980&t=144)** And from here what we're going to do is we're going to look at ways we can move data into cloud storage.
>
> **[2:31](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-migrating-data-in-cloud-storage?u=76281980&t=151)** So the first thing I'm going to do, I recommend searching for the product you want to use.
>
> **[2:36](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-migrating-data-in-cloud-storage?u=76281980&t=156)** You could search right at the top, and right away pops up storage.
>
> **[2:41](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-migrating-data-in-cloud-storage?u=76281980&t=161)** You also can do it from the left hand side.
>
> **[2:44](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-migrating-data-in-cloud-storage?u=76281980&t=164)** You could look through the different products and services here.
>
> **[2:47](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-migrating-data-in-cloud-storage?u=76281980&t=167)** I will say that this list is ever growing, so it could be a little challenging to find what you're looking for if you don't know exactly what it is.
>
> **[2:54](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-migrating-data-in-cloud-storage?u=76281980&t=174)** So that's why I just searched for it at the top.
>
> **[2:57](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-migrating-data-in-cloud-storage?u=76281980&t=177)** So now what we're going to do is we're going to go ahead and click Create Bucket.
>
> **[3:02](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-migrating-data-in-cloud-storage?u=76281980&t=182)** And from here, let's just name this bucket anything we want.
>
> **[3:06](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-migrating-data-in-cloud-storage?u=76281980&t=186)** Now keep in mind there are some naming conventions that you need to go by and it gives you some examples here in the box, but we're just going to call this CS Storage new class.
>
> **[3:20](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-migrating-data-in-cloud-storage?u=76281980&t=200)** I'll just name it that. We'll hit continue.
>
> **[3:24](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-migrating-data-in-cloud-storage?u=76281980&t=204)** And from this screen here, we have some different options.
>
> **[3:27](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-migrating-data-in-cloud-storage?u=76281980&t=207)** So we could choose which region we want to put the bucket in, and this is just where it's going to be located in the world.
>
> **[3:33](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-migrating-data-in-cloud-storage?u=76281980&t=213)** So yeah, we'll go to US Central one, then we're going to go to the storage class.
>
> **[3:41](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-migrating-data-in-cloud-storage?u=76281980&t=221)** And for the purpose of this demo, we're just going to leave it at standard for frequently access data, which is good for this storage class.
>
> **[3:51](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-migrating-data-in-cloud-storage?u=76281980&t=231)** Access control, a couple options here.
>
> **[3:54](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-migrating-data-in-cloud-storage?u=76281980&t=234)** fine grain and uniform.
>
> **[3:56](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-migrating-data-in-cloud-storage?u=76281980&t=236)** We'll just leave it at fine grain.
>
> **[3:58](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-migrating-data-in-cloud-storage?u=76281980&t=238)** And that just basically allows you to put access permissions on specific files or objects in the bucket as well, versus doing it on the entire bucket itself.
>
> **[4:09](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-migrating-data-in-cloud-storage?u=76281980&t=249)** And then this last one is optional.
>
> **[4:11](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-migrating-data-in-cloud-storage?u=76281980&t=251)** This is more about your security keys and we'll just leave it at Google Manage.
>
> **[4:14](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-migrating-data-in-cloud-storage?u=76281980&t=254)** So all that being said, we're going to click create.
>
> **[4:18](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-migrating-data-in-cloud-storage?u=76281980&t=258)** And just like that, it's created.
>
> **[4:20](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-migrating-data-in-cloud-storage?u=76281980&t=260)** Now to get data in here, the first way we're going to do, we're going to do the simplest thing you could think of.
>
> **[4:26](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-migrating-data-in-cloud-storage?u=76281980&t=266)** And we're going to just do a drag and drop.
>
> **[4:29](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-migrating-data-in-cloud-storage?u=76281980&t=269)** So what I'm going to do is I'm going to take some files I have on my desktop and I'm just going to simply drag them over.
>
> **[4:37](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-migrating-data-in-cloud-storage?u=76281980&t=277)** And just like that, you see the files have been uploaded and they're on the screen in Google Cloud storage.
>
> **[4:44](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-migrating-data-in-cloud-storage?u=76281980&t=284)** And to show you, I'm going to click on these different ones.
>
> **[4:49](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-migrating-data-in-cloud-storage?u=76281980&t=289)** I'll click on this one here, the results of the survey, this is HTML page I uploaded.
>
> **[4:56](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-migrating-data-in-cloud-storage?u=76281980&t=296)** You see the actual link taking you right to the file.
>
> **[4:59](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-migrating-data-in-cloud-storage?u=76281980&t=299)** If I click it, it will show up.
>
> **[5:03](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-migrating-data-in-cloud-storage?u=76281980&t=303)** And you'll also see the date, time, and all good types of metadata that you can use to help you search and organize this information.
>
> **[5:12](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-migrating-data-in-cloud-storage?u=76281980&t=312)** Okay, so for the next part of the migration tutorial, what we're going to do is we're going to show you exactly how you can move data into cloud storage using what's called GS util.
>
> **[5:26](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-migrating-data-in-cloud-storage?u=76281980&t=326)** Now this is a command line interface and you can do this from your desktop computer, but what we're going to do is we're going to use it right from within GCP.
>
> **[5:37](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-migrating-data-in-cloud-storage?u=76281980&t=337)** Now in this top right hand corner of GCP, there's a little icon that looks like a terminal.
>
> **[5:42](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-migrating-data-in-cloud-storage?u=76281980&t=342)** And basically what Google gives you as a part of your GCP project is what's called Cloud Shell.
>
> **[5:49](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-migrating-data-in-cloud-storage?u=76281980&t=349)** And this terminal is basically your own virtual machine that you can use and you can use it to help you migrate data, you could use it to test out new products or applications you're developing.
>
> **[6:02](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-migrating-data-in-cloud-storage?u=76281980&t=362)** But for the purpose of this video, what we want to do is we're going to simulate using our own virtual machine to download an image.
>
> **[6:12](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-migrating-data-in-cloud-storage?u=76281980&t=372)** So what we're going to do here, we're going to download this image of a kitten, right to our virtual machine.
>
> **[6:19](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-migrating-data-in-cloud-storage?u=76281980&t=379)** And once we did that, I'm going to hit LS and you're going to see in my directory there's the kitten PNG file.
>
> **[6:29](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-migrating-data-in-cloud-storage?u=76281980&t=389)** And now what we're going to do is we're going to copy this over to our cloud storage bucket.
>
> **[6:36](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-migrating-data-in-cloud-storage?u=76281980&t=396)** So we're going to do GS U till, CP for copy, kitten.PNG and then we're going to go to GS CS storage new class.
>
> **[6:55](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-migrating-data-in-cloud-storage?u=76281980&t=415)** And just like that, it's been copied over.
>
> **[6:58](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-migrating-data-in-cloud-storage?u=76281980&t=418)** Now if I come back up to my screen up top and I hit refresh, we see kitten is showed up.
>
> **[7:06](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-migrating-data-in-cloud-storage?u=76281980&t=426)** If I click on that, you'll see the image of a kitten.
>
> **[7:10](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-migrating-data-in-cloud-storage?u=76281980&t=430)** So just like that, there's another way you can move data into GCP Cloud storage and you can do a lot of cool things with GSU till as far as if you're doing some development.
>
> **[7:21](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-migrating-data-in-cloud-storage?u=76281980&t=441)** You can really tie it in using Google's API to just move data very quickly and seamlessly behind the scenes.
>
> **[7:29](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-migrating-data-in-cloud-storage?u=76281980&t=449)** Okay, so for the last service we're going to take a look at for migrating data into Google Cloud, we're going to look at the storage transfer service.
>
> **[7:39](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-migrating-data-in-cloud-storage?u=76281980&t=459)** Once you go into the interface, you can just search for transfer.
>
> **[7:44](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-migrating-data-in-cloud-storage?u=76281980&t=464)** Should pop up.
>
> **[7:46](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-migrating-data-in-cloud-storage?u=76281980&t=466)** And if it doesn't, just depending on, they've renamed it a few times.
>
> **[7:49](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-migrating-data-in-cloud-storage?u=76281980&t=469)** If you on the left hand side, when you click on the three horizontal lines and then you come down to storage, underneath it is data transfer.
>
> **[7:59](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-migrating-data-in-cloud-storage?u=76281980&t=479)** And we're going to use the cloud version.
>
> **[8:02](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-migrating-data-in-cloud-storage?u=76281980&t=482)** And when we click on create transfer, what you're going to see is several different options that you can migrate data from.
>
> **[8:09](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-migrating-data-in-cloud-storage?u=76281980&t=489)** So we have Google Cloud storage, we have a Amazon S3 bucket, Microsoft Azure storage container, and just plain URLs.
>
> **[8:19](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-migrating-data-in-cloud-storage?u=76281980&t=499)** So for the purpose of this video, we're going to go from another Google Cloud storage bucket.
>
> **[8:24](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-migrating-data-in-cloud-storage?u=76281980&t=504)** So we're going to pick this storage bucket right there.
>
> **[8:28](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-migrating-data-in-cloud-storage?u=76281980&t=508)** We're going to go on and click continue.
>
> **[8:31](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-migrating-data-in-cloud-storage?u=76281980&t=511)** And now we're going to choose what bucket we want to send this to.
>
> **[8:35](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-migrating-data-in-cloud-storage?u=76281980&t=515)** And we're going to click our CS storage new class bucket.
>
> **[8:40](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-migrating-data-in-cloud-storage?u=76281980&t=520)** And at the bottom here you're going to see there's a few different options on how you can handle and just make decisions on how your data's going to transfer.
>
> **[8:49](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-migrating-data-in-cloud-storage?u=76281980&t=529)** You can overwrite destination with the source even if the names are identical.
>
> **[8:53](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-migrating-data-in-cloud-storage?u=76281980&t=533)** You could delete objects, but we're just going to just leave it as is.
>
> **[8:57](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-migrating-data-in-cloud-storage?u=76281980&t=537)** We're not going to delete anything or override.
>
> **[8:58](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-migrating-data-in-cloud-storage?u=76281980&t=538)** We'll just hit continue.
>
> **[9:00](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-migrating-data-in-cloud-storage?u=76281980&t=540)** And one of the cool things about it, and what I really like about this one is you can actually do scheduled transfers.
>
> **[9:06](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-migrating-data-in-cloud-storage?u=76281980&t=546)** So if you have a really huge data migration project you're working on, you could set this up to say every day at 4:32 PM run this transfer, and just start moving data over at that time.
>
> **[9:18](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-migrating-data-in-cloud-storage?u=76281980&t=558)** So it's a very hands off automated approach which will make things a lot simpler for your organization.
>
> **[9:26](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-migrating-data-in-cloud-storage?u=76281980&t=566)** But we're just going to leave it for run now.
>
> **[9:28](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-migrating-data-in-cloud-storage?u=76281980&t=568)** And I'm going to hit create, updating permissions.
>
> **[9:31](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-migrating-data-in-cloud-storage?u=76281980&t=571)** And then now we're going to see that the transfer is starting.
>
> **[9:35](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-migrating-data-in-cloud-storage?u=76281980&t=575)** And while it's starting up, we'll look at the configuration.
>
> **[9:38](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-migrating-data-in-cloud-storage?u=76281980&t=578)** There's some good info there with the schedule, the time.
>
> **[9:43](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-migrating-data-in-cloud-storage?u=76281980&t=583)** And while this is running, we'll pause it and we'll come back to once it's finished.
>
> **[9:49](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-migrating-data-in-cloud-storage?u=76281980&t=589)** Transfer has been completed.
>
> **[9:51](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-migrating-data-in-cloud-storage?u=76281980&t=591)** You'll see that there's two files that transferred from the source bucket to the destination bucket.
>
> **[9:58](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-migrating-data-in-cloud-storage?u=76281980&t=598)** A total of four megabytes transferred over.
>
> **[10:02](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-migrating-data-in-cloud-storage?u=76281980&t=602)** And if I go back now to my storage bucket, I'm going to show you the two files that came over.
>
> **[10:12](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-migrating-data-in-cloud-storage?u=76281980&t=612)** And you'll see right here at the top, this Google PNG file came over, and then this P3D JPEG file came over.
>
> **[10:22](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-migrating-data-in-cloud-storage?u=76281980&t=622)** So just like that, we did a migration from another Google Cloud storage bucket.
>
> **[10:27](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-migrating-data-in-cloud-storage?u=76281980&t=627)** And keep in mind, you could use this to get data from AWS, Azure, websites anywhere, you can migrate it directly into GCP.

> [!info]- Semantic Content
>
> **Env Vars:** gcp (10), png (3), url (1), html (1), gsu (1)
> **Code Keywords:** class. (4), let (3), continue (3), interface (2), delete (2)
> **UI Navigation:** click on (6), go to (3), dropdown (1), drag and drop (1)
> **CLI Commands:** make (2), find (1), ls (1), cp (1), aws (1)
> **Analogies:** just like (6)
> **Tools:** terminal (2), command line (1)
> **Prerequisites:** set up (2), you'll need (1)
> **URLs:** [console.cloud](https://console.cloud) (1), [google.com](https://google.com) (1)


### 2. Relational Databases

#### Understanding relational database options on GCP
> [LinkedIn Learning](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/understanding-relational-database-options-on-gcp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/understanding-relational-database-options-on-gcp?u=76281980&t=0)** - [Instructor] Understanding relational database options on GCP.
>
> **[0:04](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/understanding-relational-database-options-on-gcp?u=76281980&t=4)** The question I'd like you to be able to answer at the end of this session is what are my relational database options on GCP, and why would I choose one over the other?
>
> **[0:17](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/understanding-relational-database-options-on-gcp?u=76281980&t=17)** So the first thing I'd like to do is we went to the Google Cloud resources website here and looking at this report from Gartner, who is a well-known research firm that does a lot of research on a lot of different cloud vendors, you could see that Google's one of the leaders in this area.
>
> **[0:35](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/understanding-relational-database-options-on-gcp?u=76281980&t=35)** So I just wanted to kind of give you an idea of like what this space looks like.
>
> **[0:40](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/understanding-relational-database-options-on-gcp?u=76281980&t=40)** It's a lot of different players in this game, and Google is really one of the leaders in this pack.
>
> **[0:46](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/understanding-relational-database-options-on-gcp?u=76281980&t=46)** And with that being said, I'd like to jump over and look at some of the things in regards to database solutions.
>
> **[0:54](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/understanding-relational-database-options-on-gcp?u=76281980&t=54)** You could use relational databases that is, and what you see in Google is you have a bare metal solution, which is typically for your Oracle workloads.
>
> **[1:06](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/understanding-relational-database-options-on-gcp?u=76281980&t=66)** It's a rather new offering that Google came out within these past 18 months or so.
>
> **[1:11](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/understanding-relational-database-options-on-gcp?u=76281980&t=71)** The next option here is Cloud SQL, which we're going to dive a little bit deeper into here shortly, which is your typical managed MySQL, PostgreSQL, and SQL Server.
>
> **[1:21](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/understanding-relational-database-options-on-gcp?u=76281980&t=81)** And then the last one here is Cloud Spanner.
>
> **[1:24](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/understanding-relational-database-options-on-gcp?u=76281980&t=84)** And this is a relational database as well, but this one allows you to scale pretty much globally with no limitations.
>
> **[1:33](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/understanding-relational-database-options-on-gcp?u=76281980&t=93)** So the first thing I want to do, I'm going to go into my Google Cloud console here, and I want to show you some of the options you're going to have with Cloud SQL.
>
> **[1:43](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/understanding-relational-database-options-on-gcp?u=76281980&t=103)** So I'm going to go over to the navigation menu, scroll down here to SQL.
>
> **[1:50](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/understanding-relational-database-options-on-gcp?u=76281980&t=110)** And once we get in here, I'm just going to set up an instance, the beginning stages.
>
> **[1:55](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/understanding-relational-database-options-on-gcp?u=76281980&t=115)** And the first thing that you see here is you have the different options of the MySQL, Postgres and Microsoft SQL Server.
>
> **[2:03](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/understanding-relational-database-options-on-gcp?u=76281980&t=123)** Now, you could say, okay, I could run three versions of SQL.
>
> **[2:05](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/understanding-relational-database-options-on-gcp?u=76281980&t=125)** So what, right?
>
> **[2:07](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/understanding-relational-database-options-on-gcp?u=76281980&t=127)** It's Cloud SQL, what's the difference?
>
> **[2:09](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/understanding-relational-database-options-on-gcp?u=76281980&t=129)** I already have MySQL.
>
> **[2:11](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/understanding-relational-database-options-on-gcp?u=76281980&t=131)** Well, the big difference is is when you look at Cloud SQL, it's fully managed.
>
> **[2:17](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/understanding-relational-database-options-on-gcp?u=76281980&t=137)** And what I mean by fully managed is everything's backed up for you, the infrastructure's set up for you, your updates are done for you.
>
> **[2:26](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/understanding-relational-database-options-on-gcp?u=76281980&t=146)** So it gives you all these extra perks so that you can actually focus more so on your application and the data that's coming into it versus trying to keep the database up and running.
>
> **[2:39](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/understanding-relational-database-options-on-gcp?u=76281980&t=159)** So it's so great because you're going to see a lot of features here coming up here shortly in regards to how we can automate your backups, replication.
>
> **[2:48](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/understanding-relational-database-options-on-gcp?u=76281980&t=168)** And then another key thing is there's a data migration service that Google offers that allows you to easily migrate production databases into GCP.
>
> **[3:00](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/understanding-relational-database-options-on-gcp?u=76281980&t=180)** So this is something that you definitely want to take advantage of because it can actually help you get up and running a lot quicker on the cloud when you're using some more of these automated services.
>
> **[3:11](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/understanding-relational-database-options-on-gcp?u=76281980&t=191)** Next thing I want to talk to you about really quickly is high availability on Cloud SQL.
>
> **[3:18](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/understanding-relational-database-options-on-gcp?u=76281980&t=198)** And what you're seeing here on this webpage here, right off Google's Cloud SQL guides is that it's an example of a Cloud SQL instance that you have set up.
>
> **[3:29](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/understanding-relational-database-options-on-gcp?u=76281980&t=209)** And let's say, for whatever the reason, update happens, you make a change and it crashes, right?
>
> **[3:37](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/understanding-relational-database-options-on-gcp?u=76281980&t=217)** What happens is, in this other zone, within that same region, so let's say zone A's in us-east-1, zone B's in us-east-1 zone B, all your traffic and data will now be served from this different zone.
>
> **[3:54](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/understanding-relational-database-options-on-gcp?u=76281980&t=234)** And this is so powerful because this is going to allow you to keep your operations up and running despite any issues you may have in another zone.
>
> **[4:05](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/understanding-relational-database-options-on-gcp?u=76281980&t=245)** And this could be replicated, you could continue to do this amongst other zones as well.
>
> **[4:09](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/understanding-relational-database-options-on-gcp?u=76281980&t=249)** So you could have multiple read replicas you can have set up, you can have different failovers, and there's another diagram down here at the bottom of the webpage that simplifies it a little bit more where this is how it normally would work.
>
> **[4:23](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/understanding-relational-database-options-on-gcp?u=76281980&t=263)** You'd have an application that a user would be using and then you'd have a read replica that they could read from.
>
> **[4:29](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/understanding-relational-database-options-on-gcp?u=76281980&t=269)** And that primary instance, which is Cloud SQL, would be serving all that data to your users through the client application.
>
> **[4:37](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/understanding-relational-database-options-on-gcp?u=76281980&t=277)** But let's just say something fails.
>
> **[4:39](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/understanding-relational-database-options-on-gcp?u=76281980&t=279)** And when I clicked on failover, you saw that this primary instance is no longer up and running.
>
> **[4:45](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/understanding-relational-database-options-on-gcp?u=76281980&t=285)** Everything now goes to the standby instance and keeps working as expected.

> [!info]- Semantic Content
>
> **Env Vars:** sql (12), gcp (3)
> **Code Keywords:** let (3), continue (1), from. (1)
> **CLI Commands:** mysql (3), make (1)
> **Prerequisites:** set up (4)
> **Definitions:** is a  (2)
> **Cross-References:** coming up (1)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [instructor] (1)

#### Enterprise PostgreSQL with AlloyDB
> [LinkedIn Learning](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/enterprise-postgresql-with-alloydb?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/enterprise-postgresql-with-alloydb?u=76281980&t=0)** - [Instructor] All right, folks, so now we're going to talk about the latest relational database on GCP, and that's AlloyDB.
>
> **[0:07](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/enterprise-postgresql-with-alloydb?u=76281980&t=7)** Now, AlloyDB for PostgreSQL, it's a fully managed PostgreSQL option, but check this out, it's only really for enterprise workloads, and that's demanding enterprise workloads.
>
> **[0:22](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/enterprise-postgresql-with-alloydb?u=76281980&t=22)** So as we're looking at all these options and features here, you're seeing it's fully compatible with PostgreSQL.
>
> **[0:29](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/enterprise-postgresql-with-alloydb?u=76281980&t=29)** The key differentiator is superior performance, four times faster than standard PostgreSQL, so if you find yourself hitting the limits of what Postgres can provide you, whether that be on a standard VM or using Cloud SQL, take a look at AlloyDB.
>
> **[0:44](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/enterprise-postgresql-with-alloydb?u=76281980&t=44)** It could definitely be a good option for you.
>
> **[0:47](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/enterprise-postgresql-with-alloydb?u=76281980&t=47)** A lot more fast time real insights.
>
> **[0:50](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/enterprise-postgresql-with-alloydb?u=76281980&t=50)** There's some AI capabilities in here as well, and some offline features as well using AlloyDB Omni, so that's something that you could run offline if you don't need to run it in the cloud to do some testing as well.
>
> **[1:02](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/enterprise-postgresql-with-alloydb?u=76281980&t=62)** But you may be asking yourself, okay.
>
> **[1:04](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/enterprise-postgresql-with-alloydb?u=76281980&t=64)** It's faster, it's more expensive, but what's the real difference?
>
> **[1:08](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/enterprise-postgresql-with-alloydb?u=76281980&t=68)** And that's when we're going to look right at this comparison chart.
>
> **[1:10](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/enterprise-postgresql-with-alloydb?u=76281980&t=70)** So we're looking at these three different options.
>
> **[1:13](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/enterprise-postgresql-with-alloydb?u=76281980&t=73)** As you can see, starting on the left hand side, we've talked about Cloud SQL, we've talked a little bit about using PostgreSQL, but when you're looking at the key benefits, it's easy to lift and shift for Cloud SQL, and really, it's the lowest cost, so that's really the key point here.
>
> **[1:31](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/enterprise-postgresql-with-alloydb?u=76281980&t=91)** It's the cheaper option, and then when you're looking at AlloyDB, it's a lot faster.
>
> **[1:37](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/enterprise-postgresql-with-alloydb?u=76281980&t=97)** It also supports hybrid transactional and analytical processing, HTAP.
>
> **[1:43](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/enterprise-postgresql-with-alloydb?u=76281980&t=103)** More on that in a moment, and then comparing it against PostgreSQL interface for Cloud Spanner, that has a 99.999 availability SLA on that, and that's kind of tying into Cloud Spanner, which we talked a little bit about earlier as well.
>
> **[2:01](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/enterprise-postgresql-with-alloydb?u=76281980&t=121)** But let's go back to the HTAP.
>
> **[2:03](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/enterprise-postgresql-with-alloydb?u=76281980&t=123)** Now, I'm looking at it right here on the Wikipedia page, and you could see right here in the middle of the page, it solves the issue of analytic latency by eliminating the need for multiple copies of the same data and requirement for data to be offloaded from operational databases to data warehouses via ETL processes.
>
> **[2:23](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/enterprise-postgresql-with-alloydb?u=76281980&t=143)** So all that says is basically the how data is moving, the latency, the speed, as we've talked about earlier, if you want to dig deep into what HTAP is, you can do that here on this Wikipedia page.
>
> **[2:35](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/enterprise-postgresql-with-alloydb?u=76281980&t=155)** It's been around for a little while, but now we need to take a look at, okay, what does this look like in the cloud console?
>
> **[2:42](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/enterprise-postgresql-with-alloydb?u=76281980&t=162)** How can we start using AlloyDB right away?
>
> **[2:45](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/enterprise-postgresql-with-alloydb?u=76281980&t=165)** And we're going to jump into that right now.
>
> **[2:47](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/enterprise-postgresql-with-alloydb?u=76281980&t=167)** All right, so what we're going to do now, we're going to go ahead and create a cluster.
>
> **[2:51](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/enterprise-postgresql-with-alloydb?u=76281980&t=171)** Now, when you're talking about cost, as I mentioned before, anytime you bring up that word cluster, expect to pay, okay?
>
> **[2:57](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/enterprise-postgresql-with-alloydb?u=76281980&t=177)** That's just the the honest truth.
>
> **[2:59](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/enterprise-postgresql-with-alloydb?u=76281980&t=179)** You're going to have to pay a lot to use a feature like this.
>
> **[3:03](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/enterprise-postgresql-with-alloydb?u=76281980&t=183)** And when I click on create cluster, you're seeing, there's all kinds of options here.
>
> **[3:07](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/enterprise-postgresql-with-alloydb?u=76281980&t=187)** I mean, you have highly available, which is a duplicate.
>
> **[3:10](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/enterprise-postgresql-with-alloydb?u=76281980&t=190)** If you need a multi-zone primary instance, no read pulls there.
>
> **[3:14](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/enterprise-postgresql-with-alloydb?u=76281980&t=194)** The most expensive one, that would definitely be the highly available with read pulls, but just for the purpose of this demo, I'm just going to go ahead and choose a basic primary instance, just to get this thing up and running quickly, and then when I hit continue, we're going to go ahead and name it.
>
> **[3:29](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/enterprise-postgresql-with-alloydb?u=76281980&t=209)** I'll just make up a name, AlloyDB test.
>
> **[3:36](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/enterprise-postgresql-with-alloydb?u=76281980&t=216)** I'll generate a password.
>
> **[3:39](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/enterprise-postgresql-with-alloydb?u=76281980&t=219)** As you can see from a database version, PostgreSQL 15 and 14 are compatible at the time of this recording.
>
> **[3:49](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/enterprise-postgresql-with-alloydb?u=76281980&t=229)** You can choose your region, of course.
>
> **[3:51](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/enterprise-postgresql-with-alloydb?u=76281980&t=231)** I'll just switch it to Central, and then from a network, I'm going to go ahead and choose the default network.
>
> **[3:58](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/enterprise-postgresql-with-alloydb?u=76281980&t=238)** Now, keep in mind, you have to set up Private Services Connect for that, and that's something that it will prompt you to do if you don't already have that type of connection set up, and you could read more about that on the networking page.
>
> **[4:11](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/enterprise-postgresql-with-alloydb?u=76281980&t=251)** I'm going to go ahead and click continue from here, and from an instance ID, we're just going to call this Alloy instance.
>
> **[4:22](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/enterprise-postgresql-with-alloydb?u=76281980&t=262)** And now when you're talking about the money, these are where you choose your machine types, so we're going to go ahead, and I'll just click the cheapest one.
>
> **[4:32](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/enterprise-postgresql-with-alloydb?u=76281980&t=272)** Go ahead and create cluster, and while this is creating, you can see a lot of things happening here in the background.
>
> **[4:39](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/enterprise-postgresql-with-alloydb?u=76281980&t=279)** You could see the status indicator, which is showing you the progress of it, and then we're starting to get some features starting to come into play here.
>
> **[4:49](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/enterprise-postgresql-with-alloydb?u=76281980&t=289)** A lot of things here on the interface you could see.
>
> **[4:52](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/enterprise-postgresql-with-alloydb?u=76281980&t=292)** And we'll just give it another minute or two, and then we'll come back.
>
> **[4:59](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/enterprise-postgresql-with-alloydb?u=76281980&t=299)** All right, so AlloyDB is now set up, and we're going to take a look at some of the features here.
>
> **[5:04](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/enterprise-postgresql-with-alloydb?u=76281980&t=304)** Now, when you're looking at the overview page, you see a nice dashboard.
>
> **[5:09](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/enterprise-postgresql-with-alloydb?u=76281980&t=309)** Of course, we haven't done anything with it yet, so it's not populated, but from a chart perspective, you can click on the dropdown arrow, and you can get a lot of info on just the different monitoring features, things about the query, the active nodes, all this good stuff, a lot of insight there that can help you diagnose any issue you may have or just monitoring the overall performance of your cluster.
>
> **[5:31](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/enterprise-postgresql-with-alloydb?u=76281980&t=331)** But when we go to the AlloyDB Studio, what's cool here is you can actually sign in and do some actual real tasks and queries against your database, but you need to log into it.
>
> **[5:44](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/enterprise-postgresql-with-alloydb?u=76281980&t=344)** So I'm going to go ahead and create a user just to show you what this looks like.
>
> **[5:48](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/enterprise-postgresql-with-alloydb?u=76281980&t=348)** So I'm going to go ahead and create a user, and once you create the user, I can go back to AlloyDB Studio, and we're going to go ahead and sign in.
>
> **[6:06](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/enterprise-postgresql-with-alloydb?u=76281980&t=366)** So I'm going to select that user.
>
> **[6:08](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/enterprise-postgresql-with-alloydb?u=76281980&t=368)** We're going to select the Postgres database, and just like that, we've logged into the actual database itself as the user.
>
> **[6:17](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/enterprise-postgresql-with-alloydb?u=76281980&t=377)** So this is really cool because you could come in here, you could take a look at the schema, you could see there's an editor at the top.
>
> **[6:24](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/enterprise-postgresql-with-alloydb?u=76281980&t=384)** I can add in new tabs.
>
> **[6:26](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/enterprise-postgresql-with-alloydb?u=76281980&t=386)** There's also some AI components in here as well that you can use with Gemini, so there's a lot of cool things in here that you can take advantage of from the extensions and so forth, and it gives you that really cool explorer access to the database, and you can even switch users from this as well.
>
> **[6:42](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/enterprise-postgresql-with-alloydb?u=76281980&t=402)** So some cool stuff here.
>
> **[6:43](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/enterprise-postgresql-with-alloydb?u=76281980&t=403)** If you ever need to take advantage of the studio where you can just do it all within the Google Cloud console, this is the place to go.
>
> **[6:52](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/enterprise-postgresql-with-alloydb?u=76281980&t=412)** Now we're going to go look at the system insights, and in here, once again, this is more in depth from what I was showing you from the initial dashboard, so a lot of in depth info here as far as monitoring your cluster.
>
> **[7:07](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/enterprise-postgresql-with-alloydb?u=76281980&t=427)** Just all across the board, from storage to latency, there's a lot of good stuff here, and of course, you can customize it as you see fit.
>
> **[7:17](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/enterprise-postgresql-with-alloydb?u=76281980&t=437)** The next thing we'll look at is insights, so this is if you want to get some insights on specific queries, so query insights specifically, so as you're running these queries against your database, you can kind of get a better idea of some of the top queries and tags, and you can also look at the load that is taken on your database as far as the actual seconds it's taking to execute them, which is really helpful.
>
> **[7:43](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/enterprise-postgresql-with-alloydb?u=76281980&t=463)** And then there's also a data protection component, so if you need to edit any type of your continuous backups and recovery, whatever your DR policies are, you have them here, and you can set them as you need to.
>
> **[7:57](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/enterprise-postgresql-with-alloydb?u=76281980&t=477)** You also can automate your backups, which is definitely helpful, because if you didn't choose a mirror type read-only instance, as I showed you in the beginning, it just doesn't automatically back up, and you can also restore from a point in time if you set that up as well.
>
> **[8:15](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/enterprise-postgresql-with-alloydb?u=76281980&t=495)** So overall, this gives you a very good insight and a look at what it looks like to create an AlloyDB cluster, and at the top of the screen here, I can also create another one if I want to.
>
> **[8:28](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/enterprise-postgresql-with-alloydb?u=76281980&t=508)** You can come here and create another one, just like that, and then you also have the ability to delete one, so it's all right here, right from this interface.
>
> **[8:35](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/enterprise-postgresql-with-alloydb?u=76281980&t=515)** Once again, enterprise workloads, expensive, but it has a very good use case as far as speed goes.
>
> **[8:43](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/enterprise-postgresql-with-alloydb?u=76281980&t=523)** If you've outgrown PostgreSQL, definitely take a look at AlloyDB.
>
> **[8:48](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/enterprise-postgresql-with-alloydb?u=76281980&t=528)** I'll see you in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (3), continue (2), switch (2), let (1), while, (1)
> **Env Vars:** sql (3), htap (3), gcp (1), sla (1), etl (1)
> **UI Navigation:** click on (2), dropdown (1), go to (1), select the (1)
> **Cross-References:** go back to (2), in the next (1)
> **Prerequisites:** set up (3)
> **CLI Commands:** find (1), make (1)
> **Analogies:** just like (2)
> **Versions:** 99.999 (1)

#### Relational databases: When to use Cloud SQL or Cloud Spanner
> [LinkedIn Learning](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/relational-databases-when-to-use-cloud-sql-or-cloud-spanner?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/relational-databases-when-to-use-cloud-sql-or-cloud-spanner?u=76281980&t=0)** - [Instructor] Guess what is the next question we're going to tackle?
>
> **[0:04](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/relational-databases-when-to-use-cloud-sql-or-cloud-spanner?u=76281980&t=4)** You got it.
>
> **[0:05](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/relational-databases-when-to-use-cloud-sql-or-cloud-spanner?u=76281980&t=5)** Should I choose Cloud SQL instead of Cloud Spanner?
>
> **[0:10](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/relational-databases-when-to-use-cloud-sql-or-cloud-spanner?u=76281980&t=10)** Now, the first thing we want to know is, what value does Cloud Spanner provide over Cloud SQL, and then, when should I use it over Cloud SQL?
>
> **[0:19](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/relational-databases-when-to-use-cloud-sql-or-cloud-spanner?u=76281980&t=19)** And we're going to jump into that right now.
>
> **[0:21](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/relational-databases-when-to-use-cloud-sql-or-cloud-spanner?u=76281980&t=21)** So, what we're going to do, is we're looking directly at Google Cloud Solutions' webpage here, and they have a very nice article here, and diagram, showing you how to store data in Google Cloud.
>
> **[0:36](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/relational-databases-when-to-use-cloud-sql-or-cloud-spanner?u=76281980&t=36)** And since we're specifically talking about Cloud SQL versus Cloud Spanner, when you're looking at this decision tree, both of these are structured data, we're not talking about analytical, but we are talking about relational data.
>
> **[0:53](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/relational-databases-when-to-use-cloud-sql-or-cloud-spanner?u=76281980&t=53)** And when you move over into horizontal scaling, and this is going to be the key difference between both of these products, is that Cloud SQL isn't horizontal, meaning it can't go all over the world, and as wide, and literally span across the world, where Cloud Spanner can.
>
> **[1:13](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/relational-databases-when-to-use-cloud-sql-or-cloud-spanner?u=76281980&t=73)** So, those are the main differences.
>
> **[1:15](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/relational-databases-when-to-use-cloud-sql-or-cloud-spanner?u=76281980&t=75)** If you have a huge application, you need to reach folks all over the world, you need the most power, the most memory, the most hard drive space, all that good stuff, you're going to want to look at Cloud Spanner, and I'm going to show you why, coming up in this next demo.
>
> **[1:32](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/relational-databases-when-to-use-cloud-sql-or-cloud-spanner?u=76281980&t=92)** Okay, so let's talk about Cloud Spanner versus Cloud SQL.
>
> **[1:36](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/relational-databases-when-to-use-cloud-sql-or-cloud-spanner?u=76281980&t=96)** Now, the way to think about it is, Cloud Spanner is global.
>
> **[1:42](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/relational-databases-when-to-use-cloud-sql-or-cloud-spanner?u=76281980&t=102)** Global, global, global is going to be Cloud Spanner, when you're talking about relational databases.
>
> **[1:48](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/relational-databases-when-to-use-cloud-sql-or-cloud-spanner?u=76281980&t=108)** And if I were to go in here and create an instance, what you're going to see is, when you get down to choose a configuration, I can choose between Regional or Multi-region.
>
> **[2:01](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/relational-databases-when-to-use-cloud-sql-or-cloud-spanner?u=76281980&t=121)** So, if I choose Regional, you're going to see the options here.
>
> **[2:04](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/relational-databases-when-to-use-cloud-sql-or-cloud-spanner?u=76281980&t=124)** So, let's go, let's pick something here, let's say Northern Virginia.
>
> **[2:09](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/relational-databases-when-to-use-cloud-sql-or-cloud-spanner?u=76281980&t=129)** And as soon as I select that, you're going to see, I'm going to get three read-write replicas in three separate zones.
>
> **[2:16](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/relational-databases-when-to-use-cloud-sql-or-cloud-spanner?u=76281980&t=136)** So, this is going to give you that high availability that we've talked about previously that we touched on.
>
> **[2:22](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/relational-databases-when-to-use-cloud-sql-or-cloud-spanner?u=76281980&t=142)** But what you also can do within Spanner is we could do multi-region.
>
> **[2:26](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/relational-databases-when-to-use-cloud-sql-or-cloud-spanner?u=76281980&t=146)** So if I click on Multi-region, I could set up something that goes to Iowa, South Carolina, Oregon, and Los Angeles.
>
> **[2:33](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/relational-databases-when-to-use-cloud-sql-or-cloud-spanner?u=76281980&t=153)** So I had two in Iowa, two South Carolina, one Oregon, and one in Los Angeles.
>
> **[2:40](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/relational-databases-when-to-use-cloud-sql-or-cloud-spanner?u=76281980&t=160)** So this has given you that global footprint that we've talked about, and the same can be set for some of these other regions if I choose North America, Europe, and Asia, and so forth.
>
> **[2:53](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/relational-databases-when-to-use-cloud-sql-or-cloud-spanner?u=76281980&t=173)** Another thing to look at here is the nodes.
>
> **[2:55](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/relational-databases-when-to-use-cloud-sql-or-cloud-spanner?u=76281980&t=175)** So, when you look at Nodes, this just actually determines the actual resources behind it that power it, so, the more nodes, the faster it gets.
>
> **[3:03](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/relational-databases-when-to-use-cloud-sql-or-cloud-spanner?u=76281980&t=183)** Of course, the more nodes, the more expensive it gets, so you definitely want to keep an eye out on that.
>
> **[3:09](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/relational-databases-when-to-use-cloud-sql-or-cloud-spanner?u=76281980&t=189)** And then when you look in that node count, I like on this website here, under the Google Cloud Spanner Docs page, that one node is actually would be one in one zone.
>
> **[3:21](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/relational-databases-when-to-use-cloud-sql-or-cloud-spanner?u=76281980&t=201)** So if you look at this page here, you're seeing there's actually four in each zone, so if I had four nodes, this is what that architecture would look like.
>
> **[3:30](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/relational-databases-when-to-use-cloud-sql-or-cloud-spanner?u=76281980&t=210)** So, hopefully that makes some sense with Cloud Spanner.
>
> **[3:34](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/relational-databases-when-to-use-cloud-sql-or-cloud-spanner?u=76281980&t=214)** Now we're going to go over to Cloud SQL.
>
> **[3:37](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/relational-databases-when-to-use-cloud-sql-or-cloud-spanner?u=76281980&t=217)** Now, when I click Cloud SQL, and we're just going to go with MySQL, the main difference you're going to see here is that you don't have those multiple regions and multiple zones all clustered together, you're just picking one region, you could pick a zone here.
>
> **[3:56](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/relational-databases-when-to-use-cloud-sql-or-cloud-spanner?u=76281980&t=236)** I can also come down and choose my database version, of course.
>
> **[4:00](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/relational-databases-when-to-use-cloud-sql-or-cloud-spanner?u=76281980&t=240)** And I'm also choosing my machine type, and I'm choosing a lot more things that I'd have to set up, like the backup and high availability could still be done, high availability on a regional basis.
>
> **[4:12](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/relational-databases-when-to-use-cloud-sql-or-cloud-spanner?u=76281980&t=252)** And then the machine type as well, so, your CPUs, your memory, and all that stuff.
>
> **[4:17](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/relational-databases-when-to-use-cloud-sql-or-cloud-spanner?u=76281980&t=257)** So this is for, like I said, a much smaller-scale database, but it can get rather large.
>
> **[4:24](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/relational-databases-when-to-use-cloud-sql-or-cloud-spanner?u=76281980&t=264)** I mean, you could definitely bump up these specs here, and change it and go up pretty high.
>
> **[4:29](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/relational-databases-when-to-use-cloud-sql-or-cloud-spanner?u=76281980&t=269)** I mean, you can take it to, you know, 96 CPUs if you want to.
>
> **[4:34](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/relational-databases-when-to-use-cloud-sql-or-cloud-spanner?u=76281980&t=274)** But that's just to give you an idea of some of the differences between Cloud SQL and Cloud Spanner.

> [!info]- Semantic Content
>
> **Env Vars:** sql (9)
> **Code Keywords:** let (4), type, (1), for, (1)
> **CLI Commands:** node (2), mysql (1)
> **Prerequisites:** set up (2)
> **Cross-References:** coming up (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)

#### The benefits of using Cloud SQL and Cloud Spanner
> [LinkedIn Learning](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/the-benefits-of-using-cloud-sql-and-cloud-spanner?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/the-benefits-of-using-cloud-sql-and-cloud-spanner?u=76281980&t=0)** - [Instructor] Okay, so for this next demo, we're going to set up a MySQL virtual machine, and then I'm going to show you how you can use Cloud SQL instead of using a MySQL virtual machine to just overall improve the reliability of your database and just take advantage of some of the perks of Cloud SQL in general.
>
> **[0:22](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/the-benefits-of-using-cloud-sql-and-cloud-spanner?u=76281980&t=22)** So the first thing we want to do, and this is going to be the fastest way to do it, is we're going to go into the Google Cloud marketplace.
>
> **[0:31](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/the-benefits-of-using-cloud-sql-and-cloud-spanner?u=76281980&t=31)** And in here we're going to see WordPress.
>
> **[0:34](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/the-benefits-of-using-cloud-sql-and-cloud-spanner?u=76281980&t=34)** We're going to just click right on that.
>
> **[0:36](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/the-benefits-of-using-cloud-sql-and-cloud-spanner?u=76281980&t=36)** And the whole purpose of the marketplace is to help you get up and running on GCP as fast as possible.
>
> **[0:43](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/the-benefits-of-using-cloud-sql-and-cloud-spanner?u=76281980&t=43)** And one of the benefits, what I like about it is when you look down here at the bottom, you're going to see your operating system name and package contents and so forth.
>
> **[0:52](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/the-benefits-of-using-cloud-sql-and-cloud-spanner?u=76281980&t=52)** It has all this stuff pre-installed for you so you don't have to focus on doing all this yourself.
>
> **[0:58](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/the-benefits-of-using-cloud-sql-and-cloud-spanner?u=76281980&t=58)** And as you can see, we have the MySQL client 5.7.31 as a part of this whole package here.
>
> **[1:06](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/the-benefits-of-using-cloud-sql-and-cloud-spanner?u=76281980&t=66)** So I'm going to go ahead and click on launch.
>
> **[1:08](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/the-benefits-of-using-cloud-sql-and-cloud-spanner?u=76281980&t=68)** And once we hit launch, you can come up here and name it whatever you want.
>
> **[1:12](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/the-benefits-of-using-cloud-sql-and-cloud-spanner?u=76281980&t=72)** So I'll say WPNew.
>
> **[1:15](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/the-benefits-of-using-cloud-sql-and-cloud-spanner?u=76281980&t=75)** And for the zone, we'll leave it at Central one B.
>
> **[1:19](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/the-benefits-of-using-cloud-sql-and-cloud-spanner?u=76281980&t=79)** I'll switch it to just one virtual CPU for the purpose of the demo.
>
> **[1:25](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/the-benefits-of-using-cloud-sql-and-cloud-spanner?u=76281980&t=85)** And we'll just call this new@[new.com](https://new.com) for the admin address.
>
> **[1:32](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/the-benefits-of-using-cloud-sql-and-cloud-spanner?u=76281980&t=92)** And we'll leave the everything else the same.
>
> **[1:34](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/the-benefits-of-using-cloud-sql-and-cloud-spanner?u=76281980&t=94)** But you can come in here and you could choose, you know, the size of your boot disc, you could choose various things from a networking perspective if you want to allow HCTPS traffic in regards to your firewall rules.
>
> **[1:47](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/the-benefits-of-using-cloud-sql-and-cloud-spanner?u=76281980&t=107)** And then the last thing, which I think is always a good thing to turn on, is having your stack driver logging and monitoring going as well.
>
> **[1:55](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/the-benefits-of-using-cloud-sql-and-cloud-spanner?u=76281980&t=115)** So you can see the price $24.75 cents a month.
>
> **[1:59](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/the-benefits-of-using-cloud-sql-and-cloud-spanner?u=76281980&t=119)** So we're going to go and hit deploy.
>
> **[2:01](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/the-benefits-of-using-cloud-sql-and-cloud-spanner?u=76281980&t=121)** And what this is actually using to do this all for you is what's called Google Deployment Manager, which is a little bit out of the scope for this fundamental course.
>
> **[2:10](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/the-benefits-of-using-cloud-sql-and-cloud-spanner?u=76281980&t=130)** But ultimately what this tool does for you is it allows you to write your whole infrastructure out in scripts.
>
> **[2:20](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/the-benefits-of-using-cloud-sql-and-cloud-spanner?u=76281980&t=140)** So you could just have a whole bunch of code as your infrastructure and it will just deploy it out into your environment for you instead of you clicking through the Google Cloud console through your various items.
>
> **[2:32](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/the-benefits-of-using-cloud-sql-and-cloud-spanner?u=76281980&t=152)** So while that's being deployed, we're also going to go and look for Cloud SQL, and it's a couple ways you can get to it.
>
> **[2:41](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/the-benefits-of-using-cloud-sql-and-cloud-spanner?u=76281980&t=161)** I'll just go to the side menu bar, and once we get in here, you're going to see there's an option for that version of MySQL that I'm actually creating now through the Google Cloud marketplace.
>
> **[2:57](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/the-benefits-of-using-cloud-sql-and-cloud-spanner?u=76281980&t=177)** Now you see there's three options.
>
> **[2:59](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/the-benefits-of-using-cloud-sql-and-cloud-spanner?u=76281980&t=179)** We're going to go with the MySQL, we're just going to call this MySQL, and we'll say Cloud SQL, and we'll put in a nice root password here and we'll just leave this in the same US central one region.
>
> **[3:20](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/the-benefits-of-using-cloud-sql-and-cloud-spanner?u=76281980&t=200)** Now this is where a lot of the power of using Cloud SQL comes into play, which you won't get using the compute engine version that we're setting up.
>
> **[3:29](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/the-benefits-of-using-cloud-sql-and-cloud-spanner?u=76281980&t=209)** The first thing is when you click down here on these configuration options, you could see very similar things like the IP address.
>
> **[3:36](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/the-benefits-of-using-cloud-sql-and-cloud-spanner?u=76281980&t=216)** If it's public or private, the machine type, you could choose that as well.
>
> **[3:42](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/the-benefits-of-using-cloud-sql-and-cloud-spanner?u=76281980&t=222)** But the key things to keep in mind is going to be things like your automatic backups, recovery and high availability.
>
> **[3:49](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/the-benefits-of-using-cloud-sql-and-cloud-spanner?u=76281980&t=229)** What these things allow you to do is self-explanatory.
>
> **[3:52](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/the-benefits-of-using-cloud-sql-and-cloud-spanner?u=76281980&t=232)** You can automate your backups so you don't have to worry about setting that stuff up manually as you would on your own compute engine virtual machine.
>
> **[4:01](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/the-benefits-of-using-cloud-sql-and-cloud-spanner?u=76281980&t=241)** And point in time recovery allowed you to go back to just a specific point in time.
>
> **[4:05](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/the-benefits-of-using-cloud-sql-and-cloud-spanner?u=76281980&t=245)** So if you want to say yesterday at 12:00 PM you could do that.
>
> **[4:09](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/the-benefits-of-using-cloud-sql-and-cloud-spanner?u=76281980&t=249)** When you talk about availability, this actually doubles the instances you have essentially.
>
> **[4:15](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/the-benefits-of-using-cloud-sql-and-cloud-spanner?u=76281980&t=255)** But what it does is it allows you to, if there was ever a problem in this region, if there was ever an outage of, let's say we were in Central one A and that region/zone A had an issue, it would actually be set up and running in a different zone.
>
> **[4:31](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/the-benefits-of-using-cloud-sql-and-cloud-spanner?u=76281980&t=271)** So whether it's B, C, F, your database would still be running and you wouldn't have to worry about losing any kind of customers or clients or even just running your application.
>
> **[4:43](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/the-benefits-of-using-cloud-sql-and-cloud-spanner?u=76281980&t=283)** So that's another option.
>
> **[4:45](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/the-benefits-of-using-cloud-sql-and-cloud-spanner?u=76281980&t=285)** And then when you get down here to maintenance, you could choose a maintenance window.
>
> **[4:50](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/the-benefits-of-using-cloud-sql-and-cloud-spanner?u=76281980&t=290)** So when you're talking about databases and maintenance and security patches, things of that nature, that's another thing that comes with Cloud SQL that's done for you.
>
> **[5:01](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/the-benefits-of-using-cloud-sql-and-cloud-spanner?u=76281980&t=301)** And you could just choose a preferred window on when you want these things to happen.
>
> **[5:07](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/the-benefits-of-using-cloud-sql-and-cloud-spanner?u=76281980&t=307)** So with that being said, we're going to go ahead and click create.
>
> **[5:12](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/the-benefits-of-using-cloud-sql-and-cloud-spanner?u=76281980&t=312)** And while that's creating, we're going to go back to our compute engine instance that we set up with the marketplace.
>
> **[5:19](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/the-benefits-of-using-cloud-sql-and-cloud-spanner?u=76281980&t=319)** And now you can see there's the website, there's the admin URL.
>
> **[5:23](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/the-benefits-of-using-cloud-sql-and-cloud-spanner?u=76281980&t=323)** If we go ahead and click on this, it's going to take us to the WordPress login.
>
> **[5:30](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/the-benefits-of-using-cloud-sql-and-cloud-spanner?u=76281980&t=330)** And just so that we are able to log in, we're going to go ahead, I'll show you what it looks like.
>
> **[5:41](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/the-benefits-of-using-cloud-sql-and-cloud-spanner?u=76281980&t=341)** And the great thing about this once again is like, as you can see, everything's already ready to go.
>
> **[5:46](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/the-benefits-of-using-cloud-sql-and-cloud-spanner?u=76281980&t=346)** You could set up using WordPress within minutes.
>
> **[5:49](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/the-benefits-of-using-cloud-sql-and-cloud-spanner?u=76281980&t=349)** So as you could see, just like that, you could start blogging away if you needed to have your site going.
>
> **[5:57](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/the-benefits-of-using-cloud-sql-and-cloud-spanner?u=76281980&t=357)** Now the key thing to keep in mind with this type of setup is the database, the web server, all that stuff is on this machine.
>
> **[6:05](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/the-benefits-of-using-cloud-sql-and-cloud-spanner?u=76281980&t=365)** So if something were to happen to this machine, you wouldn't have access to it anymore.
>
> **[6:10](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/the-benefits-of-using-cloud-sql-and-cloud-spanner?u=76281980&t=370)** So what I'm going to show you is how you can actually use Cloud SQL instead of using the MySQL that's installed on this virtual machine to actually add better availability.
>
> **[6:25](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/the-benefits-of-using-cloud-sql-and-cloud-spanner?u=76281980&t=385)** I would put it to you this way, think of if you wanted to have a highly reliable website and you don't want it to have a lot of these bottlenecks.
>
> **[6:35](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/the-benefits-of-using-cloud-sql-and-cloud-spanner?u=76281980&t=395)** And the one bottleneck with this set up with the virtual machine is that, like I said previously, if something happens, you can't do anything.
>
> **[6:44](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/the-benefits-of-using-cloud-sql-and-cloud-spanner?u=76281980&t=404)** So we're going to go ahead here and we're going to SXH into this instance.
>
> **[6:50](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/the-benefits-of-using-cloud-sql-and-cloud-spanner?u=76281980&t=410)** And while that's happening, I'm going to go back to the Cloud SQL.
>
> **[6:56](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/the-benefits-of-using-cloud-sql-and-cloud-spanner?u=76281980&t=416)** As you can see, certain things are starting to get set up.
>
> **[6:59](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/the-benefits-of-using-cloud-sql-and-cloud-spanner?u=76281980&t=419)** There's the connection name, you're still seeing it's being created.
>
> **[7:04](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/the-benefits-of-using-cloud-sql-and-cloud-spanner?u=76281980&t=424)** You can also see a lot of logs as well.
>
> **[7:07](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/the-benefits-of-using-cloud-sql-and-cloud-spanner?u=76281980&t=427)** So all that stuff is kept in this interface.
>
> **[7:09](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/the-benefits-of-using-cloud-sql-and-cloud-spanner?u=76281980&t=429)** So while that's going, we're going to go back.
>
> **[7:13](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/the-benefits-of-using-cloud-sql-and-cloud-spanner?u=76281980&t=433)** All right, so here we're going to go to where our files are installed.
>
> **[7:22](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/the-benefits-of-using-cloud-sql-and-cloud-spanner?u=76281980&t=442)** And in here we're going to zoom in a little bit.
>
> **[7:25](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/the-benefits-of-using-cloud-sql-and-cloud-spanner?u=76281980&t=445)** I want you to really keep in mind or really just take note of the file we're going to edit here.
>
> **[7:32](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/the-benefits-of-using-cloud-sql-and-cloud-spanner?u=76281980&t=452)** So we're going to use an editor, and it's this config PHP file.
>
> **[7:40](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/the-benefits-of-using-cloud-sql-and-cloud-spanner?u=76281980&t=460)** And in this PHP file, this contains all your configurations for your WordPress.
>
> **[7:45](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/the-benefits-of-using-cloud-sql-and-cloud-spanner?u=76281980&t=465)** As you see at the top, this base configuration.
>
> **[7:47](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/the-benefits-of-using-cloud-sql-and-cloud-spanner?u=76281980&t=467)** So there's your database name, your database user, your password, and then this last one here is very key.
>
> **[7:57](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/the-benefits-of-using-cloud-sql-and-cloud-spanner?u=76281980&t=477)** And what we're going to focus on is this MySQL host name.
>
> **[8:01](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/the-benefits-of-using-cloud-sql-and-cloud-spanner?u=76281980&t=481)** Now the host name currently is set to local host.
>
> **[8:05](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/the-benefits-of-using-cloud-sql-and-cloud-spanner?u=76281980&t=485)** And ultimately what we're going to do is we're going to change the local host from the local host, which is this compute engine virtual machine to Cloud SQL, which is being created now.
>
> **[8:19](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/the-benefits-of-using-cloud-sql-and-cloud-spanner?u=76281980&t=499)** And ultimately it would be this public IP address.
>
> **[8:22](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/the-benefits-of-using-cloud-sql-and-cloud-spanner?u=76281980&t=502)** So we would ultimately have this public IP address inside of this virtual machine setting here.
>
> **[8:29](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/the-benefits-of-using-cloud-sql-and-cloud-spanner?u=76281980&t=509)** And then from that point, it would no longer be using the database on this virtual machine.
>
> **[8:35](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/the-benefits-of-using-cloud-sql-and-cloud-spanner?u=76281980&t=515)** And like I said, let's say you needed to use this database in Cloud SQL, if you had other tables and you had other applications that wanted to use it, you could do that easily by using the Cloud SQL public IP address, or even if you wanted that more securely to connect to it versus using it on its own type of machine.
>
> **[8:56](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/the-benefits-of-using-cloud-sql-and-cloud-spanner?u=76281980&t=536)** So now that it's all set up, I want to just show you a couple more things with this instance which you get.
>
> **[9:03](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/the-benefits-of-using-cloud-sql-and-cloud-spanner?u=76281980&t=543)** So if we click on connections, you could see, you know, there's the options for public IP and private.
>
> **[9:11](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/the-benefits-of-using-cloud-sql-and-cloud-spanner?u=76281980&t=551)** You can create a certificate as well, which is cool if you really need to only allow SSL and some really secure connections.
>
> **[9:19](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/the-benefits-of-using-cloud-sql-and-cloud-spanner?u=76281980&t=559)** Some other really user-friendly things you could do here, you could add user account.
>
> **[9:23](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/the-benefits-of-using-cloud-sql-and-cloud-spanner?u=76281980&t=563)** So if I just wanted to add a user account, I could just type in a username, I could type in a password, and you could do this all right from the Google Cloud console.
>
> **[9:33](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/the-benefits-of-using-cloud-sql-and-cloud-spanner?u=76281980&t=573)** So just like that, I added a user account.
>
> **[9:36](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/the-benefits-of-using-cloud-sql-and-cloud-spanner?u=76281980&t=576)** And this is another cool one as well, where like, especially if you're new to, you know, using MySQL or just databases in general, you could come right in here and click on create database right from the Google Cloud console.
>
> **[9:49](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/the-benefits-of-using-cloud-sql-and-cloud-spanner?u=76281980&t=589)** And we're just going to call this new WP database and we're just going to hit create.
>
> **[9:57](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/the-benefits-of-using-cloud-sql-and-cloud-spanner?u=76281980&t=597)** And just like that, we created a new database on this server.
>
> **[10:02](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/the-benefits-of-using-cloud-sql-and-cloud-spanner?u=76281980&t=602)** So very, very user friendly.
>
> **[10:05](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/the-benefits-of-using-cloud-sql-and-cloud-spanner?u=76281980&t=605)** And then it also gives you the abilities to configure the backups, like I mentioned earlier.
>
> **[10:10](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/the-benefits-of-using-cloud-sql-and-cloud-spanner?u=76281980&t=610)** So if you want to come in and set your backups up, you have a certain timeframe, this is where you do that.
>
> **[10:15](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/the-benefits-of-using-cloud-sql-and-cloud-spanner?u=76281980&t=615)** I changed this time.
>
> **[10:16](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/the-benefits-of-using-cloud-sql-and-cloud-spanner?u=76281980&t=616)** Say I want to do it at 5:00 AM to 9:00 AM I'll just go ahead and save that.
>
> **[10:22](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/the-benefits-of-using-cloud-sql-and-cloud-spanner?u=76281980&t=622)** And then it's being updated.
>
> **[10:23](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/the-benefits-of-using-cloud-sql-and-cloud-spanner?u=76281980&t=623)** You're seeing this spinning, so it's making that change.
>
> **[10:27](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/the-benefits-of-using-cloud-sql-and-cloud-spanner?u=76281980&t=627)** And there you go, five to nine.
>
> **[10:29](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/the-benefits-of-using-cloud-sql-and-cloud-spanner?u=76281980&t=629)** And then if we go to replicas, these re-replicas replicate your data.
>
> **[10:35](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/the-benefits-of-using-cloud-sql-and-cloud-spanner?u=76281980&t=635)** And what, and the perk with this and the benefit of it is, is let's say a lot of the users that are accessing your application, let's say they're in a different region or zone, whether they're on the west coast, east coast, somewhere across the world, you could create a new read replica and this will greatly improve their performance.
>
> **[10:53](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/the-benefits-of-using-cloud-sql-and-cloud-spanner?u=76281980&t=653)** So I could change this and say, hey, west one, west one A, and I could create that read replica and just like that it will create that instance over there.
>
> **[11:04](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/the-benefits-of-using-cloud-sql-and-cloud-spanner?u=76281980&t=664)** And then this last one here, the operations.
>
> **[11:07](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/the-benefits-of-using-cloud-sql-and-cloud-spanner?u=76281980&t=667)** What I like with this is this is basically showing you a log of everything that's happened to this database from beginning to end.
>
> **[11:14](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/the-benefits-of-using-cloud-sql-and-cloud-spanner?u=76281980&t=674)** So you get all that right in this console, it's all backed up with the logs and it really just simplifies setting up your database within GCP.
>
> **[11:23](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/the-benefits-of-using-cloud-sql-and-cloud-spanner?u=76281980&t=683)** And once again, like I was talking about earlier in this course, is that a managed database, you really get a lot more benefits when you're using Google servers simply for the fact that you're not having to worry about this extra security, the backups, you could automate all this stuff and it could actually give you a lot more time to focus on improving your application and just making it better.

> [!info]- Semantic Content
>
> **Env Vars:** sql (11), gcp (2), php (2), cpu (1), hctps (1)
> **Code Keywords:** public (5), let (4), private (2), switch (1), new. (1)
> **CLI Commands:** mysql (9), php (2)
> **Prerequisites:** set up (7), setup (1), configure (1)
> **UI Navigation:** click on (4), go to (3)
> **Analogies:** just like (4)
> **Ports:** :00 (3)
> **Warnings:** keep in mind (3)

#### Demo: Connecting to GCP from a WordPress app
> [LinkedIn Learning](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-connecting-to-gcp-from-a-wordpress-app?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-connecting-to-gcp-from-a-wordpress-app?u=76281980&t=0)** - [Instructor] Okay, so for this next demo, we're going to set up a MySQL virtual machine, and then I'm going to show you how you can use Cloud SQL instead of using a MySQL virtual machine to just overall improve the reliability of your database and just take advantage of some of the perks of Cloud SQL in general.
>
> **[0:22](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-connecting-to-gcp-from-a-wordpress-app?u=76281980&t=22)** So the first thing we want to do, and this is going to be the fastest way to do it, is we're going to go into the Google Cloud Marketplace.
>
> **[0:31](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-connecting-to-gcp-from-a-wordpress-app?u=76281980&t=31)** And in here we're going to see WordPress.
>
> **[0:34](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-connecting-to-gcp-from-a-wordpress-app?u=76281980&t=34)** We're going to just click right on that.
>
> **[0:36](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-connecting-to-gcp-from-a-wordpress-app?u=76281980&t=36)** And the whole purpose of the marketplace is to help you get up and running on GCP as fast as possible.
>
> **[0:43](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-connecting-to-gcp-from-a-wordpress-app?u=76281980&t=43)** And one of the benefits, what I like about it, is when you look down here at the bottom, you're going to see your operating system name and package contents and so forth.
>
> **[0:52](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-connecting-to-gcp-from-a-wordpress-app?u=76281980&t=52)** It has all this stuff pre-installed for you so you don't have to focus on doing all this yourself.
>
> **[0:58](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-connecting-to-gcp-from-a-wordpress-app?u=76281980&t=58)** And as you can see, we have the MySQL Client 5731 as a part of this whole package here.
>
> **[1:06](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-connecting-to-gcp-from-a-wordpress-app?u=76281980&t=66)** So I'm going to go ahead and click on launch.
>
> **[1:08](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-connecting-to-gcp-from-a-wordpress-app?u=76281980&t=68)** And once we hit launch, you can come up here and name it whatever you want.
>
> **[1:12](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-connecting-to-gcp-from-a-wordpress-app?u=76281980&t=72)** So I'll say WP New.
>
> **[1:15](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-connecting-to-gcp-from-a-wordpress-app?u=76281980&t=75)** And for the zone, we'll leave it at Central 1B.
>
> **[1:19](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-connecting-to-gcp-from-a-wordpress-app?u=76281980&t=79)** I'll switch it to just one virtual CPU for the purpose of the demo.
>
> **[1:25](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-connecting-to-gcp-from-a-wordpress-app?u=76281980&t=85)** And we'll just call this new@[new.com](https://new.com) for the admin address.
>
> **[1:32](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-connecting-to-gcp-from-a-wordpress-app?u=76281980&t=92)** And we'll leave everything else the same.
>
> **[1:34](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-connecting-to-gcp-from-a-wordpress-app?u=76281980&t=94)** But you can come in here and you could choose, you know, the size of your boot disk, you could choose various things, from a networking perspective, if you want to allow HTTPS traffic, in regards to your firewall rules.
>
> **[1:47](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-connecting-to-gcp-from-a-wordpress-app?u=76281980&t=107)** And then the last thing, which I think is always a good thing to turn on, is having your Stackdriver logging and monitoring going as well.
>
> **[1:55](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-connecting-to-gcp-from-a-wordpress-app?u=76281980&t=115)** So you can see the price, $24.75 a month.
>
> **[1:59](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-connecting-to-gcp-from-a-wordpress-app?u=76281980&t=119)** So we're going to go and hit deploy.
>
> **[2:01](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-connecting-to-gcp-from-a-wordpress-app?u=76281980&t=121)** And what this is actually using to do this all for you is what's called Google Deployment Manager, which is a little bit out of the scope for this fundamental course.
>
> **[2:10](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-connecting-to-gcp-from-a-wordpress-app?u=76281980&t=130)** But ultimately what this tool does for you is it allows you to write your whole infrastructure out in scripts.
>
> **[2:20](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-connecting-to-gcp-from-a-wordpress-app?u=76281980&t=140)** So you could just have a whole bunch of code as your infrastructure and it will just deploy it out into your environment for you instead of you clicking through the Google Cloud console through your various items.
>
> **[2:33](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-connecting-to-gcp-from-a-wordpress-app?u=76281980&t=153)** So while that's being deployed, we're also going to go and look for Cloud SQL, and it's a couple ways you can get to it.
>
> **[2:41](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-connecting-to-gcp-from-a-wordpress-app?u=76281980&t=161)** I'll just go to the side menu bar, and once we get in here, you're going to see there's an option for that version of MySQL that I'm actually creating now through the Google Cloud Marketplace.
>
> **[2:57](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-connecting-to-gcp-from-a-wordpress-app?u=76281980&t=177)** Now you see there's three options.
>
> **[2:59](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-connecting-to-gcp-from-a-wordpress-app?u=76281980&t=179)** We're going to go with the MySQL, we're just going to call this MySQL, and we'll say Cloud SQL.
>
> **[3:11](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-connecting-to-gcp-from-a-wordpress-app?u=76281980&t=191)** And we'll put in a nice root password here and we'll just leave this in the same US Central 1 region.
>
> **[3:20](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-connecting-to-gcp-from-a-wordpress-app?u=76281980&t=200)** Now this is where a lot of the power of using Cloud SQL comes into play, which you won't get using the compute engine version that we're setting up.
>
> **[3:29](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-connecting-to-gcp-from-a-wordpress-app?u=76281980&t=209)** The first thing is when you click down here on these configuration options, you could see very similar things like the IP address if it's public or private.
>
> **[3:38](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-connecting-to-gcp-from-a-wordpress-app?u=76281980&t=218)** The machine type, you could choose that as well.
>
> **[3:42](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-connecting-to-gcp-from-a-wordpress-app?u=76281980&t=222)** But the key things to keep in mind is going to be things like your automatic backups, recovery and high availability.
>
> **[3:49](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-connecting-to-gcp-from-a-wordpress-app?u=76281980&t=229)** What these things allow you to do is self-explanatory.
>
> **[3:52](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-connecting-to-gcp-from-a-wordpress-app?u=76281980&t=232)** You can automate your backups so you don't have to worry about setting that stuff up manually as you would on your own compute engine virtual machine.
>
> **[4:01](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-connecting-to-gcp-from-a-wordpress-app?u=76281980&t=241)** And point in time recovery allows you to go back to just a specific point in time.
>
> **[4:05](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-connecting-to-gcp-from-a-wordpress-app?u=76281980&t=245)** So if you want to say yesterday at 12:00 PM, you could do that.
>
> **[4:09](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-connecting-to-gcp-from-a-wordpress-app?u=76281980&t=249)** When you talk about availability, this actually doubles the instances you have essentially.
>
> **[4:15](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-connecting-to-gcp-from-a-wordpress-app?u=76281980&t=255)** But what it does is it allows you to, if there was ever a problem in this region, if there was ever an outage of, let's say we were in Central 1A, and that region/zone A had an issue, it would actually be set up and running in a different zone.
>
> **[4:31](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-connecting-to-gcp-from-a-wordpress-app?u=76281980&t=271)** So whether it's B, C, F, your database would still be running and you wouldn't have to worry about losing any kind of customers or clients or even just running your application.
>
> **[4:43](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-connecting-to-gcp-from-a-wordpress-app?u=76281980&t=283)** So, that's another option.
>
> **[4:45](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-connecting-to-gcp-from-a-wordpress-app?u=76281980&t=285)** And then when you get down here to maintenance, you could choose a maintenance window.
>
> **[4:50](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-connecting-to-gcp-from-a-wordpress-app?u=76281980&t=290)** So when you're talking about databases and maintenance and security patches, things of that nature, that's another thing that comes with Cloud SQL that's done for you.
>
> **[5:01](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-connecting-to-gcp-from-a-wordpress-app?u=76281980&t=301)** And you could just choose a preferred window on when you want these things to to happen.
>
> **[5:07](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-connecting-to-gcp-from-a-wordpress-app?u=76281980&t=307)** So with that being said, we're going to go ahead and click create.
>
> **[5:12](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-connecting-to-gcp-from-a-wordpress-app?u=76281980&t=312)** And while that's creating, we're going to go back to our compute engine instance that we set up with the Marketplace.
>
> **[5:19](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-connecting-to-gcp-from-a-wordpress-app?u=76281980&t=319)** And now you can see there's the website, there's the admin URL.
>
> **[5:23](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-connecting-to-gcp-from-a-wordpress-app?u=76281980&t=323)** If we go ahead and click on this, it's going to take us to the WordPress login.
>
> **[5:30](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-connecting-to-gcp-from-a-wordpress-app?u=76281980&t=330)** And just so that we are able to log in, we're going to go ahead, I'll show you what it looks like.
>
> **[5:41](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-connecting-to-gcp-from-a-wordpress-app?u=76281980&t=341)** And the great thing about this, once again, is like, I didn't, as you can see, everything's already ready to go.
>
> **[5:47](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-connecting-to-gcp-from-a-wordpress-app?u=76281980&t=347)** You could be set up using WordPress within minutes.
>
> **[5:49](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-connecting-to-gcp-from-a-wordpress-app?u=76281980&t=349)** So as you can see, just like that, you could start blogging away if you needed to have your site going.
>
> **[5:57](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-connecting-to-gcp-from-a-wordpress-app?u=76281980&t=357)** Now the key thing to keep in mind with this type of setup is the database, the web server, all that stuff is on this machine.
>
> **[6:05](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-connecting-to-gcp-from-a-wordpress-app?u=76281980&t=365)** So if something were to happen to this machine, you wouldn't have access to it anymore.
>
> **[6:10](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-connecting-to-gcp-from-a-wordpress-app?u=76281980&t=370)** So what I'm going to show you is how you can actually use Cloud SQL instead of using the MySQL that's installed on this virtual machine to actually add better availability.
>
> **[6:25](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-connecting-to-gcp-from-a-wordpress-app?u=76281980&t=385)** I would put it to you this way.
>
> **[6:27](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-connecting-to-gcp-from-a-wordpress-app?u=76281980&t=387)** Think of if you wanted to have a highly reliable website and you don't want it to have a lot of these bottlenecks.
>
> **[6:35](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-connecting-to-gcp-from-a-wordpress-app?u=76281980&t=395)** And one bottleneck with this set up with the virtual machine is that, like I said previously, if something happens, you can't do anything.
>
> **[6:44](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-connecting-to-gcp-from-a-wordpress-app?u=76281980&t=404)** So we're going to go ahead here and we're going to SSH into this instance.
>
> **[6:50](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-connecting-to-gcp-from-a-wordpress-app?u=76281980&t=410)** And while that's happening, I'm going to go back to the Cloud SQL.
>
> **[6:56](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-connecting-to-gcp-from-a-wordpress-app?u=76281980&t=416)** As you can see, certain things are starting to get set up.
>
> **[6:59](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-connecting-to-gcp-from-a-wordpress-app?u=76281980&t=419)** There's the connection name, you're still seeing it's being created.
>
> **[7:04](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-connecting-to-gcp-from-a-wordpress-app?u=76281980&t=424)** You can also see a lot of logs, as well.
>
> **[7:07](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-connecting-to-gcp-from-a-wordpress-app?u=76281980&t=427)** So, all that stuff is kept in this interface.
>
> **[7:09](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-connecting-to-gcp-from-a-wordpress-app?u=76281980&t=429)** So while that's going, we're going to go back.
>
> **[7:13](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-connecting-to-gcp-from-a-wordpress-app?u=76281980&t=433)** All right, so here, we're going to go to where our files are installed.
>
> **[7:22](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-connecting-to-gcp-from-a-wordpress-app?u=76281980&t=442)** And in here we're going to zoom in a little bit.
>
> **[7:25](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-connecting-to-gcp-from-a-wordpress-app?u=76281980&t=445)** I want you to really keep in mind, or really just take note of the file we're going to edit here.
>
> **[7:32](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-connecting-to-gcp-from-a-wordpress-app?u=76281980&t=452)** So we're going to use an editor, and it's this config.PHP file.
>
> **[7:40](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-connecting-to-gcp-from-a-wordpress-app?u=76281980&t=460)** And in this PHP file, this contains all your configurations for your WordPress.
>
> **[7:45](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-connecting-to-gcp-from-a-wordpress-app?u=76281980&t=465)** As you see at the top, this base configuration.
>
> **[7:47](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-connecting-to-gcp-from-a-wordpress-app?u=76281980&t=467)** So there's your database name, your database user, your password, and then this last one here is very key.
>
> **[7:57](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-connecting-to-gcp-from-a-wordpress-app?u=76281980&t=477)** And what we're going to focus on is this MySQL host name.
>
> **[8:01](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-connecting-to-gcp-from-a-wordpress-app?u=76281980&t=481)** Now the host name currently is set to local host.
>
> **[8:05](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-connecting-to-gcp-from-a-wordpress-app?u=76281980&t=485)** And ultimately what we're going to do is we're going to change the local host from the local host, which is this compute engine virtual machine, to Cloud SQL, which is being created now.
>
> **[8:19](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-connecting-to-gcp-from-a-wordpress-app?u=76281980&t=499)** And ultimately it would be this public IP address.
>
> **[8:22](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-connecting-to-gcp-from-a-wordpress-app?u=76281980&t=502)** So we would ultimately have this public IP address inside of this virtual machine setting here.
>
> **[8:29](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-connecting-to-gcp-from-a-wordpress-app?u=76281980&t=509)** And then from that point, it would no longer be using the database on this virtual machine.
>
> **[8:35](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-connecting-to-gcp-from-a-wordpress-app?u=76281980&t=515)** And like I said, let's say you needed to use this database in Cloud SQL.
>
> **[8:39](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-connecting-to-gcp-from-a-wordpress-app?u=76281980&t=519)** If you had other tables and you had other applications that wanted to use it, you could do that easily by using the Cloud SQL public IP address, or even if you wanted that more securely to connect to it versus using it on its own type of machine.
>
> **[8:56](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-connecting-to-gcp-from-a-wordpress-app?u=76281980&t=536)** So now that it's all set up, I want to just show you a couple more things with this instance which you get.
>
> **[9:03](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-connecting-to-gcp-from-a-wordpress-app?u=76281980&t=543)** So if we click on connections, you could see, there's the options for public IP and private.
>
> **[9:12](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-connecting-to-gcp-from-a-wordpress-app?u=76281980&t=552)** You can create a certificate as well, which is cool if you really need to only allow SSL and some really secure connections.
>
> **[9:19](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-connecting-to-gcp-from-a-wordpress-app?u=76281980&t=559)** Some other really user-friendly things you could do here, you could add user accounts.
>
> **[9:23](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-connecting-to-gcp-from-a-wordpress-app?u=76281980&t=563)** So if I just wanted to add a user account, I could just type in a username, I could type in a password, and you could do this all right from the Google Cloud console.
>
> **[9:33](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-connecting-to-gcp-from-a-wordpress-app?u=76281980&t=573)** So just like that, I added a user account.
>
> **[9:36](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-connecting-to-gcp-from-a-wordpress-app?u=76281980&t=576)** And this is another cool one as well, where like, especially if you're new to using MySQL or just databases in general, you could come right in here and click on create database right from the Google Cloud console.
>
> **[9:49](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-connecting-to-gcp-from-a-wordpress-app?u=76281980&t=589)** And we're just going to call this New WP Database, and we're just going to hit create.
>
> **[9:58](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-connecting-to-gcp-from-a-wordpress-app?u=76281980&t=598)** And just like that, we created a new database on this server.
>
> **[10:02](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-connecting-to-gcp-from-a-wordpress-app?u=76281980&t=602)** So very, very user friendly.
>
> **[10:05](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-connecting-to-gcp-from-a-wordpress-app?u=76281980&t=605)** And then it also gives you the abilities to configure the backups, like I mentioned earlier.
>
> **[10:10](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-connecting-to-gcp-from-a-wordpress-app?u=76281980&t=610)** So if you want to come in and set your backups up, you have a certain timeframe, this is where you do that.
>
> **[10:15](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-connecting-to-gcp-from-a-wordpress-app?u=76281980&t=615)** I'll change this time, say I want to do it at 5:00 AM to 9:00 AM, I'll just go ahead and save that.
>
> **[10:22](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-connecting-to-gcp-from-a-wordpress-app?u=76281980&t=622)** And then it's being updated.
>
> **[10:23](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-connecting-to-gcp-from-a-wordpress-app?u=76281980&t=623)** You're seeing this spinning, so it's making that change.
>
> **[10:27](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-connecting-to-gcp-from-a-wordpress-app?u=76281980&t=627)** And there you go, 5:00-9:00 AM.
>
> **[10:29](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-connecting-to-gcp-from-a-wordpress-app?u=76281980&t=629)** And then if we go to replicas, these read replicas replicate your data.
>
> **[10:35](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-connecting-to-gcp-from-a-wordpress-app?u=76281980&t=635)** And the perk with this and the benefit of it is, let's say a lot of the users that are accessing your application, let's say they're in a different region or zone, whether they're on the west coast, east coast, somewhere across the world, you could create a new read replica and this will greatly improve their performance.
>
> **[10:53](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-connecting-to-gcp-from-a-wordpress-app?u=76281980&t=653)** So I could change this and say, hey, West 1A, and I could create that read replica, and just like that it will create that instance over there.
>
> **[11:04](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-connecting-to-gcp-from-a-wordpress-app?u=76281980&t=664)** And then this last one here, the operations.
>
> **[11:07](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-connecting-to-gcp-from-a-wordpress-app?u=76281980&t=667)** What I like with this is this is basically showing you a log of everything that's happened to this database from beginning to end.
>
> **[11:14](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-connecting-to-gcp-from-a-wordpress-app?u=76281980&t=674)** So, you get all that right in this console and it's all backed up with the logs, and it really just simplifies setting up your database within GCP.
>
> **[11:23](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-connecting-to-gcp-from-a-wordpress-app?u=76281980&t=683)** And once again, like I was talking about earlier in this course, is that, a managed database, you really get a lot more benefits when you're using Google servers simply for the fact that you're not having to worry about this extra security, the backups, you could automate all this stuff and it can actually give you a lot more time to focus on improving your application and just making it better.

> [!info]- Semantic Content
>
> **Env Vars:** sql (11), gcp (2), php (2), cpu (1), https (1)
> **Code Keywords:** public (5), let (4), new. (2), private (2), this, (2)
> **CLI Commands:** mysql (9), php (2), ssh (1)
> **Prerequisites:** set up (7), setup (1), configure (1)
> **UI Navigation:** click on (4), go to (3)
> **Ports:** :00 (5)
> **Analogies:** just like (4)
> **Cross-References:** go back to (2), earlier in (1)


### 3. Non-Relational Databases

#### Understanding non-relational database options on GCP
> [LinkedIn Learning](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/understanding-non-relational-database-options-on-gcp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/understanding-non-relational-database-options-on-gcp?u=76281980&t=0)** - [Instructor] Understanding non-relational database options on GCP.
>
> **[0:05](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/understanding-non-relational-database-options-on-gcp?u=76281980&t=5)** This is also called NoSQL, so if you see that term come up, you're in the right place.
>
> **[0:11](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/understanding-non-relational-database-options-on-gcp?u=76281980&t=11)** Okay, so the first thing we want to do is we're going to go to the Google Cloud Database website.
>
> **[0:17](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/understanding-non-relational-database-options-on-gcp?u=76281980&t=17)** And just like we did when we looked at our relational database options, we're going to scroll down underneath that, and we're going to find that there's two options, Cloud Bigtable and Cloud Firestore.
>
> **[0:31](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/understanding-non-relational-database-options-on-gcp?u=76281980&t=31)** Those are our NoSQL database options for GCP.
>
> **[0:35](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/understanding-non-relational-database-options-on-gcp?u=76281980&t=35)** Now for the first one we want to talk about, let's talk about Cloud Firestore.
>
> **[0:40](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/understanding-non-relational-database-options-on-gcp?u=76281980&t=40)** The first key thing I'd like you to really think about is that it's serverless.
>
> **[0:45](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/understanding-non-relational-database-options-on-gcp?u=76281980&t=45)** And when I highlight serverless here, what's so awesome about it is when you're thinking about a database that's serverless, it automatically scales and you have to do no maintenance at all.
>
> **[0:55](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/understanding-non-relational-database-options-on-gcp?u=76281980&t=55)** So that's a very, very key selling point with this product.
>
> **[0:59](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/understanding-non-relational-database-options-on-gcp?u=76281980&t=59)** Also, think about a database that could scale horizontally.
>
> **[1:04](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/understanding-non-relational-database-options-on-gcp?u=76281980&t=64)** And when you're talking about mobility, mobile apps, web development, server development, let's say you're building video games, things of that nature, it's really good for things like profile data, being able to push all that data into Google Cloud so it's accessible from devices all over the place.
>
> **[1:23](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/understanding-non-relational-database-options-on-gcp?u=76281980&t=83)** So it's really, really good for that, and it really is popular with a lot of mobile applications.
>
> **[1:30](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/understanding-non-relational-database-options-on-gcp?u=76281980&t=90)** When we talk about Cloud Bigtable, on the other hand, if you were to think about it in a way that would be easy to explain or why you'd want to use it, think about large, big, big data, data over one terabyte or more.
>
> **[1:47](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/understanding-non-relational-database-options-on-gcp?u=76281980&t=107)** Think about very fast or rapidly changing, like I mentioned earlier as far as streaming, you're trying to send things and data into a database constantly.
>
> **[1:57](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/understanding-non-relational-database-options-on-gcp?u=76281980&t=117)** And then also time series, that's another big term you'll hear when you're talking about cloud Bigtable.
>
> **[2:05](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/understanding-non-relational-database-options-on-gcp?u=76281980&t=125)** And the reason for that is if you have any type of data based on time or has a natural ordering to it, you have data coming in at certain time periods and you want to be able to analyze it, monitor it, things of that nature, that's where Cloud Bigtable really shines because it's so fast.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2)
> **Env Vars:** gcp (2)
> **CLI Commands:** find (1)
> **UI Navigation:** scroll down (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### Non-relational databases: When to use Cloud Firestore or Cloud Bigtable
> [LinkedIn Learning](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/non-relational-databases-when-to-use-cloud-firestore-or-cloud-bigtable?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/non-relational-databases-when-to-use-cloud-firestore-or-cloud-bigtable?u=76281980&t=0)** - [Instructor] When to use Cloud Firestore or Cloud Bigtable.
>
> **[0:05](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/non-relational-databases-when-to-use-cloud-firestore-or-cloud-bigtable?u=76281980&t=5)** Now, I love this question because when you're looking at No SQL databases on GCP, there's a lot of different ways you can do things, but ultimately, in a lot of cases for a lot of customers, it really comes down to Cloud Firestore or Cloud Bigtable.
>
> **[0:23](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/non-relational-databases-when-to-use-cloud-firestore-or-cloud-bigtable?u=76281980&t=23)** And I'm going to show you when and why you would use each one right now.
>
> **[0:27](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/non-relational-databases-when-to-use-cloud-firestore-or-cloud-bigtable?u=76281980&t=27)** So looking at this decision tree right off the Google Cloud Solutions website, I really like looking at this because it can give you a really good visualization of when to use each database.
>
> **[0:39](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/non-relational-databases-when-to-use-cloud-firestore-or-cloud-bigtable?u=76281980&t=39)** And we talked about this earlier in the course when we talked about Cloud SQL and Spanner, but now we're going to talk about Cloud Bigtable and Cloud Firestore.
>
> **[0:50](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/non-relational-databases-when-to-use-cloud-firestore-or-cloud-bigtable?u=76281980&t=50)** Now, I want to point out from the beginning, there is a Cloud Datastore icon in here and that was the older version of Cloud Firestore.
>
> **[0:59](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/non-relational-databases-when-to-use-cloud-firestore-or-cloud-bigtable?u=76281980&t=59)** So it's the same thing, just wanted to point that out.
>
> **[1:02](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/non-relational-databases-when-to-use-cloud-firestore-or-cloud-bigtable?u=76281980&t=62)** But the bottom line is if we're looking at structured data and we need to do analytics on it at a very, very fast speed, I'm talking very fast, 10 milliseconds, remember?
>
> **[1:16](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/non-relational-databases-when-to-use-cloud-firestore-or-cloud-bigtable?u=76281980&t=76)** That's what Cloud Bigtable is going to be a great use case for.
>
> **[1:20](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/non-relational-databases-when-to-use-cloud-firestore-or-cloud-bigtable?u=76281980&t=80)** There's also cloud BigQuery, we'll talk about that a little bit later in the course, but when you're talking about streaming data, when you're talking about Internet of Things, those are those use cases for Cloud Bigtable, and where the low latency really comes into play.
>
> **[1:36](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/non-relational-databases-when-to-use-cloud-firestore-or-cloud-bigtable?u=76281980&t=96)** Now, as we go down through this decision tree, we're looking at non-relational data, and then do we need any type of hierarchy to it?
>
> **[1:47](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/non-relational-databases-when-to-use-cloud-firestore-or-cloud-bigtable?u=76281980&t=107)** And you may be asking, what do you mean by hierarchy?
>
> **[1:50](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/non-relational-databases-when-to-use-cloud-firestore-or-cloud-bigtable?u=76281980&t=110)** Well, in Cloud Firestore, when we go to this website, it's right on Google's Firebase Firestore documentation site, it gives you a very good understanding of how these hierarchal data structures work.
>
> **[2:04](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/non-relational-databases-when-to-use-cloud-firestore-or-cloud-bigtable?u=76281980&t=124)** And for an example here you just have a database set up where you have rooms, then you have roomA, the name of that room, and then roomB, and you just keep going down and you build out this collection.
>
> **[2:19](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/non-relational-databases-when-to-use-cloud-firestore-or-cloud-bigtable?u=76281980&t=139)** And we'll talk a little bit and demo that a little bit later on in this section of the course.
>
> **[2:24](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/non-relational-databases-when-to-use-cloud-firestore-or-cloud-bigtable?u=76281980&t=144)** But I just want you to see what that looks like here in regards to making a decision for which type of No SQL database you need to use for your application or whatever problem you're trying to solve.
>
> **[2:37](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/non-relational-databases-when-to-use-cloud-firestore-or-cloud-bigtable?u=76281980&t=157)** And all that to say if we keep going down this, if you don't need hierarchal and you don't need to have something really fast in memory, which is Cloud Memorystore, which we're not going to talk about in this course, but that's based off Redis, which is an open source database and memory option, Cloud Bigtable is a great choice.
>
> **[2:57](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/non-relational-databases-when-to-use-cloud-firestore-or-cloud-bigtable?u=76281980&t=177)** So, and it basically goes down to once you say No Relational, well that's where you get No SQL from because we just say no, say no to hierarchy, and then we say no to in memory and that brings you down to Cloud Bigtable.
>
> **[3:12](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/non-relational-databases-when-to-use-cloud-firestore-or-cloud-bigtable?u=76281980&t=192)** So hopefully that makes some sense.
>
> **[3:13](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/non-relational-databases-when-to-use-cloud-firestore-or-cloud-bigtable?u=76281980&t=193)** Hopefully gives you a very basic high level understanding of how you would choose to use Cloud Firestore or Cloud SQL.

> [!info]- Semantic Content
>
> **Env Vars:** sql (5), gcp (1)
> **Cross-References:** we talked about (2), earlier in (1), later in (1)
> **Definitions:** is a  (2), is an  (1)
> **Code Keywords:** for. (1), this, (1)
> **Code Identifiers:** rooma (1), roomb (1)
> **UI Navigation:** go to (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Demo: Setting up a Firestore and Bigtable database
> [LinkedIn Learning](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-setting-up-a-firestore-bigtable-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-setting-up-a-firestore-bigtable-database?u=76281980&t=0)** - [Instructor] Okay, so what we're going to do is we're going to set up a Cloud Firestore database.
>
> **[0:06](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-setting-up-a-firestore-bigtable-database?u=76281980&t=6)** And the whole purpose of this video is to show you how fast and quickly you can set up a NoSQL database with Firestore.
>
> **[0:15](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-setting-up-a-firestore-bigtable-database?u=76281980&t=15)** And then we're also going to do the same thing with Cloud Bigtable and Cloud Bigtable, like I said earlier in this course, think of it when you think of big data, things like Gmail, Google Search, all those types of applications are built off of Bigtable and it's really, really fast.
>
> **[0:34](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-setting-up-a-firestore-bigtable-database?u=76281980&t=34)** So that's the thing I want you to think about when you're thinking of Bigtable.
>
> **[0:38](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-setting-up-a-firestore-bigtable-database?u=76281980&t=38)** It is expensive and it's something that's- You really got to have a really good use case to use it.
>
> **[0:45](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-setting-up-a-firestore-bigtable-database?u=76281980&t=45)** And it really just depends on what type of application you're looking to build.
>
> **[0:49](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-setting-up-a-firestore-bigtable-database?u=76281980&t=49)** Click on the Firestore icon and let's go ahead and start a collection.
>
> **[0:53](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-setting-up-a-firestore-bigtable-database?u=76281980&t=53)** Now, once I click on Start Collection, you're going to see a screen come up.
>
> **[0:57](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-setting-up-a-firestore-bigtable-database?u=76281980&t=57)** All this a collection is, is basically a repository for the documents you're going to add to it.
>
> **[1:03](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-setting-up-a-firestore-bigtable-database?u=76281980&t=63)** And we'll jump into that in a moment.
>
> **[1:05](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-setting-up-a-firestore-bigtable-database?u=76281980&t=65)** But for essence of this, I'll just call this users and the document ID, we'll just leave it as that.
>
> **[1:13](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-setting-up-a-firestore-bigtable-database?u=76281980&t=73)** That's just something that Google uses so it kind of keeps everything tied together.
>
> **[1:18](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-setting-up-a-firestore-bigtable-database?u=76281980&t=78)** And this first field, we're just going to call this first name.
>
> **[1:23](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-setting-up-a-firestore-bigtable-database?u=76281980&t=83)** Actually, yeah, we'll do first name and the field value, I'll just say Mark.
>
> **[1:30](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-setting-up-a-firestore-bigtable-database?u=76281980&t=90)** And then the next one, we'll call this last name and we'll just say Johnson.
>
> **[1:37](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-setting-up-a-firestore-bigtable-database?u=76281980&t=97)** And you need this just to start off.
>
> **[1:41](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-setting-up-a-firestore-bigtable-database?u=76281980&t=101)** And once we go ahead and do that, you're seeing there's a database, it's been created.
>
> **[1:47](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-setting-up-a-firestore-bigtable-database?u=76281980&t=107)** And to get a little bit more information on it, because it's so simple how to set this up, when you're looking at the Google Cloud website, it really tells you a really nice- There's some videos and some other things about it, but the bottom line is it's a NoSQL document-oriented database and there's no tables or rows, as you could see when we were just looking at it.
>
> **[2:08](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-setting-up-a-firestore-bigtable-database?u=76281980&t=128)** There's no tables or rows, it's just what's called key value pairs.
>
> **[2:12](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-setting-up-a-firestore-bigtable-database?u=76281980&t=132)** So you have a key, which is first name, and then Mark is a part of that pair and then last name, there's the colon, then Johnson.
>
> **[2:20](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-setting-up-a-firestore-bigtable-database?u=76281980&t=140)** And so the collection and documents, they're created in Firestore.
>
> **[2:24](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-setting-up-a-firestore-bigtable-database?u=76281980&t=144)** You just assign data to a document within a collection, which we did.
>
> **[2:28](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-setting-up-a-firestore-bigtable-database?u=76281980&t=148)** And then you could see other examples through this webpage here.
>
> **[2:32](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-setting-up-a-firestore-bigtable-database?u=76281980&t=152)** But the bottom line is as you're building out your database, it's schemaless.
>
> **[2:37](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-setting-up-a-firestore-bigtable-database?u=76281980&t=157)** So you could get access to any data in these fields.
>
> **[2:40](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-setting-up-a-firestore-bigtable-database?u=76281980&t=160)** It doesn't have to be in certain rows or columns.
>
> **[2:44](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-setting-up-a-firestore-bigtable-database?u=76281980&t=164)** And there's a lot more advanced information on this topic in general, but it's really designed for those who are doing a lot of web development, and you can see down here there's references to Swift, Objective-C, Java, Python, and all that stuff.
>
> **[2:59](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-setting-up-a-firestore-bigtable-database?u=76281980&t=179)** So if you're doing a lot of web development and you need a serverless database, and that's the key thing with Cloud Firestore is it's serverless because you don't have to worry about setting up anything.
>
> **[3:11](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-setting-up-a-firestore-bigtable-database?u=76281980&t=191)** There's no maintenance at all.
>
> **[3:12](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-setting-up-a-firestore-bigtable-database?u=76281980&t=192)** You just go in there and you just type in document ID and a collection name and it's just, it's done like that.
>
> **[3:20](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-setting-up-a-firestore-bigtable-database?u=76281980&t=200)** I don't have to do anything else.
>
> **[3:21](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-setting-up-a-firestore-bigtable-database?u=76281980&t=201)** So the settings in here, there's things like you could create indexes to speed things up.
>
> **[3:28](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-setting-up-a-firestore-bigtable-database?u=76281980&t=208)** Of course you can import and export data in here if you have things in your Google Cloud storage as well.
>
> **[3:34](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-setting-up-a-firestore-bigtable-database?u=76281980&t=214)** But ultimately, it's very low maintenance.
>
> **[3:37](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-setting-up-a-firestore-bigtable-database?u=76281980&t=217)** You can see your usage from your reads and writes, and there's a very generous free tier as well.
>
> **[3:43](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-setting-up-a-firestore-bigtable-database?u=76281980&t=223)** You see there's 50,000 free for reads, 20,000 writes for free, deletes, 20,000.
>
> **[3:50](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-setting-up-a-firestore-bigtable-database?u=76281980&t=230)** And then there's some security rules as well that you can come in here and enable and set up some rules and things.
>
> **[3:56](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-setting-up-a-firestore-bigtable-database?u=76281980&t=236)** So that pretty much gives you a nice fundamental understanding of Firestore.
>
> **[4:01](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-setting-up-a-firestore-bigtable-database?u=76281980&t=241)** Now, once again, if you're using mobile apps, if you're developing them, if you're trying to, you know, have a real simple database to set up, say you have like a mobile game, a lot of folks are using things like Firestore to kind of make this their whole database grow very quickly without a lot of maintenance and database experience.
>
> **[4:26](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-setting-up-a-firestore-bigtable-database?u=76281980&t=266)** Hope that helps.
>
> **[4:27](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-setting-up-a-firestore-bigtable-database?u=76281980&t=267)** Let's move on to Bigtable.
>
> **[4:29](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-setting-up-a-firestore-bigtable-database?u=76281980&t=269)** Okay, we're right at the screen to set up a new Bigtable instance.
>
> **[4:34](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-setting-up-a-firestore-bigtable-database?u=76281980&t=274)** Now to keep in mind with Bigtable, really big data application, think about streaming, think about batch processing and think about Hadoop workloads, things like that.
>
> **[4:46](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-setting-up-a-firestore-bigtable-database?u=76281980&t=286)** It's really going to be able to take advantage of it.
>
> **[4:48](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-setting-up-a-firestore-bigtable-database?u=76281980&t=288)** And when we go into create our instance, the thing to keep in mind is this is managed, fully managed so that you do have to come in here and set things up.
>
> **[4:57](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-setting-up-a-firestore-bigtable-database?u=76281980&t=297)** So I'm going to call this newbigtable for the instance name.
>
> **[5:02](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-setting-up-a-firestore-bigtable-database?u=76281980&t=302)** Also take a look at the pricing here.
>
> **[5:05](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-setting-up-a-firestore-bigtable-database?u=76281980&t=305)** So the pricing, it is expensive and you could see the price is 65 cents per hour node for the default setup.
>
> **[5:14](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-setting-up-a-firestore-bigtable-database?u=76281980&t=314)** If I came in here and put in like, let's say a 200 gigabyte drive, you see the price gets updated.
>
> **[5:23](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-setting-up-a-firestore-bigtable-database?u=76281980&t=323)** And from here I'm going to go ahead and click on Continue where I could choose a different SSD or a regular hard drive if I'd like.
>
> **[5:32](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-setting-up-a-firestore-bigtable-database?u=76281980&t=332)** And then here's where it gets fun, where you start choosing the location of your cluster.
>
> **[5:37](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-setting-up-a-firestore-bigtable-database?u=76281980&t=337)** Now obviously, you want to choose something that's closest to your users.
>
> **[5:41](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-setting-up-a-firestore-bigtable-database?u=76281980&t=341)** So we'll just use central1-Iowa, central1-a in the zone.
>
> **[5:49](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-setting-up-a-firestore-bigtable-database?u=76281980&t=349)** And when you get down to allocating the nodes, think about nodes as compute instances.
>
> **[5:55](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-setting-up-a-firestore-bigtable-database?u=76281980&t=355)** So if I go in here and say I have three nodes, you're going to see the price is going to triple, but you're basically going to have three compute instances in the background as a part of one big cluster.
>
> **[6:08](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-setting-up-a-firestore-bigtable-database?u=76281980&t=368)** That's going to improve the performance and keep your cluster running a lot better because it all comes down to your CPU utilization just depending on how your application is running.
>
> **[6:19](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-setting-up-a-firestore-bigtable-database?u=76281980&t=379)** And there's some testing that you could do as well to make sure you're setting it up properly.
>
> **[6:24](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-setting-up-a-firestore-bigtable-database?u=76281980&t=384)** But for the purpose of this setup, we're just going to do two nodes.
>
> **[6:28](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-setting-up-a-firestore-bigtable-database?u=76281980&t=388)** And then when I click on Advanced Options, you're going to see how you can add replication.
>
> **[6:32](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-setting-up-a-firestore-bigtable-database?u=76281980&t=392)** And this is basically going to duplicate this entire cluster that I'm creating now so that if I ever had an outage, we could keep everything up and running.
>
> **[6:41](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-setting-up-a-firestore-bigtable-database?u=76281980&t=401)** So if I hit Add Cluster, just like that, we're going to say two nodes and you're going to see the price is exactly doubled, okay?
>
> **[6:51](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-setting-up-a-firestore-bigtable-database?u=76281980&t=411)** There's other ways where you could reduce costs and there's some calculators in here as well to help you figure that out.
>
> **[6:56](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-setting-up-a-firestore-bigtable-database?u=76281980&t=416)** But we're going to put this one on the west coast, so we're going to put this one in Vegas and zone C.
>
> **[7:04](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-setting-up-a-firestore-bigtable-database?u=76281980&t=424)** So once we hit Add and do that, we're going to go ahead and click Create.
>
> **[7:12](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-setting-up-a-firestore-bigtable-database?u=76281980&t=432)** And while that's creating, and well, just like that, it created very quickly, just remember to think about why you would use something like this.
>
> **[7:19](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-setting-up-a-firestore-bigtable-database?u=76281980&t=439)** And I really want to push on the streaming and internet of things 'cause those are some really big applications you could use for this.
>
> **[7:27](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-setting-up-a-firestore-bigtable-database?u=76281980&t=447)** But when you look in the interface, you're going to see it's going to be empty and bare bones because I don't have one terabyte nor a petabyte of data to throw in here to do any testing.
>
> **[7:35](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-setting-up-a-firestore-bigtable-database?u=76281980&t=455)** But you could come in here and look at specs like monitoring, key visualizer to kind of help you visualize the data and the monitoring, you know, instances or the monitoring metrics you're looking at.
>
> **[7:49](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-setting-up-a-firestore-bigtable-database?u=76281980&t=469)** And then you have tables.
>
> **[7:51](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-setting-up-a-firestore-bigtable-database?u=76281980&t=471)** We don't have any tables created yet, nor do we have any backups, but you could view that here as well.
>
> **[7:57](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-setting-up-a-firestore-bigtable-database?u=76281980&t=477)** And then profiles that kind of help you build handling incoming requests.
>
> **[8:01](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-setting-up-a-firestore-bigtable-database?u=76281980&t=481)** So all these things are great, these are things that you'll really dive deeper into once you have that amount of data.
>
> **[8:09](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-setting-up-a-firestore-bigtable-database?u=76281980&t=489)** But the thing I want to point out is if I were to come in here and hit Edit Instance, you also can change these things on the fly.
>
> **[8:16](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-setting-up-a-firestore-bigtable-database?u=76281980&t=496)** So if I have two nodes in West-c in central1, I can come in here and edit this cluster, give myself one node, hit Save, make it one node here in central1, and I'll just hit Save on both of those.
>
> **[8:35](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-setting-up-a-firestore-bigtable-database?u=76281980&t=515)** And just like that, they're going to start updating and they just switch down to one node.
>
> **[8:40](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-setting-up-a-firestore-bigtable-database?u=76281980&t=520)** And lastly, I would just want to show you on the Google Cloud Bigtable website, there's a very nice use case under the financial analysis and it gives you some ideas to think about using Bigtable when you're talking about real time transactions or you're talking about stock market trading data, activity, all that good stuff, social media.
>
> **[9:04](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-setting-up-a-firestore-bigtable-database?u=76281980&t=544)** And the bottom line is if you look at streaming here right at the bottom, it moves over into Dataflow, which actually controls the flow of your data.
>
> **[9:14](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-setting-up-a-firestore-bigtable-database?u=76281980&t=554)** You like that, right?
>
> **[9:15](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-setting-up-a-firestore-bigtable-database?u=76281980&t=555)** And from there, it's going to take it and it's going to put that data right into Bigtable, and from Bigtable, all these other Google Cloud products and services can tie right into that information and access it very quickly and you could do more things like analytics, you could do more processing, machine learning, all kinds of good stuff.
>
> **[9:37](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-setting-up-a-firestore-bigtable-database?u=76281980&t=577)** It really just shows off ultimately the speed of Bigtable.
>
> **[9:41](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-setting-up-a-firestore-bigtable-database?u=76281980&t=581)** Once again, also, when you're looking at Dataflow, it's also controlling data going into BigQuery and Cloud Storage, which we talked about earlier.
>
> **[9:51](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-setting-up-a-firestore-bigtable-database?u=76281980&t=591)** So you get the picture when you start really getting into big data, looking at things like Dataflow and how you're handling information that's being sent to your application is going to be very, very key.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), this. (2), this, (1), else. (1), continue (1)
> **CLI Commands:** node (4), make (3), python (1)
> **Prerequisites:** set up (5), setup (2)
> **UI Navigation:** click on (4)
> **Analogies:** just like (3), picture (1)
> **Env Vars:** ssd (1), cpu (1)
> **Cross-References:** earlier in (1), we talked about (1)
> **Warnings:** keep in mind (2)


### 4. Data Warehouse and Analytics

#### Using BigQuery as a data warehouse
> [LinkedIn Learning](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/using-bigquery-as-a-data-warehouse?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/using-bigquery-as-a-data-warehouse?u=76281980&t=0)** - [Instructor] Using BigQuery as a data warehouse.
>
> **[0:04](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/using-bigquery-as-a-data-warehouse?u=76281980&t=4)** Now, we reached the last section of this course, and to be honest, BigQuery is one of my favorite big data products in GCP.
>
> **[0:13](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/using-bigquery-as-a-data-warehouse?u=76281980&t=13)** And that's simply for the fact that it has no ops, meaning you don't have to do anything to really set it up.
>
> **[0:21](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/using-bigquery-as-a-data-warehouse?u=76281980&t=21)** And when you think about the value of this, it adds value like no other product does because looking at that slide right in the middle of the screen, you see you're going to have big data.
>
> **[0:33](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/using-bigquery-as-a-data-warehouse?u=76281980&t=33)** It's a good buzz word, everyone talks about it.
>
> **[0:35](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/using-bigquery-as-a-data-warehouse?u=76281980&t=35)** But the bottom line is once you have that data and you start analyzing it, that's when you really can start making some decisions.
>
> **[0:43](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/using-bigquery-as-a-data-warehouse?u=76281980&t=43)** That's when you really can start creating some new types of services, products, offerings, helping solve various problems.
>
> **[0:51](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/using-bigquery-as-a-data-warehouse?u=76281980&t=51)** Because without that analytics, without understanding what you have, you can't do that.
>
> **[0:56](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/using-bigquery-as-a-data-warehouse?u=76281980&t=56)** And that's where BigQuery really comes in.
>
> **[0:59](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/using-bigquery-as-a-data-warehouse?u=76281980&t=59)** So looking right at the Google Cloud website, what we're looking at here is, once again, no ops.
>
> **[1:05](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/using-bigquery-as-a-data-warehouse?u=76281980&t=65)** You don't have to do anything to set this up.
>
> **[1:07](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/using-bigquery-as-a-data-warehouse?u=76281980&t=67)** You are going to see that here in a minute.
>
> **[1:08](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/using-bigquery-as-a-data-warehouse?u=76281980&t=68)** You could just jump right in, start using SQL queries, serverless keyword here, serverless.
>
> **[1:14](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/using-bigquery-as-a-data-warehouse?u=76281980&t=74)** But what I love, and this is one of my favorite things, is you all customers, you can do one terabyte in queries a month completely free.
>
> **[1:24](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/using-bigquery-as-a-data-warehouse?u=76281980&t=84)** You could store 10 gigabytes of storage in it, and you could do up to one terabyte in queries.
>
> **[1:30](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/using-bigquery-as-a-data-warehouse?u=76281980&t=90)** And that's a huge thing because if you have data right now and you're trying to just learn more about it, all you need to do is really just learn SQL.
>
> **[1:41](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/using-bigquery-as-a-data-warehouse?u=76281980&t=101)** Or if you already know SQL, just put your information into BigQuery and you can start analyzing data within seconds.
>
> **[1:48](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/using-bigquery-as-a-data-warehouse?u=76281980&t=108)** So it's really fun and we're going to take a look at it a little later on in this course.

> [!info]- Semantic Content
>
> **Env Vars:** sql (3), gcp (1)
> **Code Keywords:** this, (1)
> **Speakers:** - [instructor] (1)

#### Why use BigQuery instead of Cloud SQL or Cloud Spanner
> [LinkedIn Learning](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/why-use-bigquery-instead-of-cloud-sql-or-cloud-spanner?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/why-use-bigquery-instead-of-cloud-sql-or-cloud-spanner?u=76281980&t=0)** - [Instructor] Why would you use BigQuery instead of Cloud SQL or Cloud Spanner?
>
> **[0:06](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/why-use-bigquery-instead-of-cloud-sql-or-cloud-spanner?u=76281980&t=6)** Now this is a great question, because all of these products here can analyze relational data with SQL.
>
> **[0:14](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/why-use-bigquery-instead-of-cloud-sql-or-cloud-spanner?u=76281980&t=14)** And the big question or the problem you need to solve really is going to come down to whether or not you are needing to analyze information or you're just looking to store it with some analyzing here and there.
>
> **[0:28](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/why-use-bigquery-instead-of-cloud-sql-or-cloud-spanner?u=76281980&t=28)** But if you're doing a lot of analysis of information, you're trying to learn about it, that's why you would choose BigQuery.
>
> **[0:35](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/why-use-bigquery-instead-of-cloud-sql-or-cloud-spanner?u=76281980&t=35)** And since seeing is believing, let's jump right into another demo so you can see what I'm talking about.
>
> **[0:41](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/why-use-bigquery-instead-of-cloud-sql-or-cloud-spanner?u=76281980&t=41)** So this is what I mean by why you would choose BigQuery over Cloud SQL or Spanner.
>
> **[0:47](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/why-use-bigquery-instead-of-cloud-sql-or-cloud-spanner?u=76281980&t=47)** Now, when I go into GCP, I'm not going to set up a brand new database, but I want to show you, when you look under the database side on GCP, on the left hand side, you see Spanner and SQL.
>
> **[1:00](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/why-use-bigquery-instead-of-cloud-sql-or-cloud-spanner?u=76281980&t=60)** So we're going to open those up, and then when we scroll down, I'm going to keep on scrolling.
>
> **[1:09](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/why-use-bigquery-instead-of-cloud-sql-or-cloud-spanner?u=76281980&t=69)** When you're talking about big data, we're going to see BigQuery.
>
> **[1:13](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/why-use-bigquery-instead-of-cloud-sql-or-cloud-spanner?u=76281980&t=73)** So jumping in between these, you see Spanner, like we mentioned before, global, fully managed relational database, all over the world at a global scale.
>
> **[1:23](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/why-use-bigquery-instead-of-cloud-sql-or-cloud-spanner?u=76281980&t=83)** You have SQL, similar, but smaller scale than Spanner, more for regional base, smaller applications.
>
> **[1:32](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/why-use-bigquery-instead-of-cloud-sql-or-cloud-spanner?u=76281980&t=92)** But the cool thing about big queries you see here, this is just somewhere where you could just dump data into it, you could stream data into it, and it's really going to be good for those who are data scientists who want to learn about that information.
>
> **[1:45](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/why-use-bigquery-instead-of-cloud-sql-or-cloud-spanner?u=76281980&t=105)** So the great thing about it is, is that you're going to pick this anytime you already have data, or you already have your databases up and running and you don't want to add any additional stress or add more resources to handle analytics, you could come and load the data right into BigQuery and start getting that information right away.
>
> **[2:07](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/why-use-bigquery-instead-of-cloud-sql-or-cloud-spanner?u=76281980&t=127)** So it's really cool, and that's why you would choose BigQuery over Cloud Spanner or Cloud SQL.
>
> **[2:14](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/why-use-bigquery-instead-of-cloud-sql-or-cloud-spanner?u=76281980&t=134)** All right, so we're going to jump right into one of my favorite demos with BigQuery.
>
> **[2:21](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/why-use-bigquery-instead-of-cloud-sql-or-cloud-spanner?u=76281980&t=141)** And the first thing I want to do is I want to search, I found the BigQuery you can find in navigation menu or you could just search for BigQuery at the top in GCP and it will come right up.
>
> **[2:33](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/why-use-bigquery-instead-of-cloud-sql-or-cloud-spanner?u=76281980&t=153)** And once you get in here, what we're going to do is we're going to look for, we're going to explore these datasets, right?
>
> **[2:40](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/why-use-bigquery-instead-of-cloud-sql-or-cloud-spanner?u=76281980&t=160)** And there's a lot of public datasets in here.
>
> **[2:43](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/why-use-bigquery-instead-of-cloud-sql-or-cloud-spanner?u=76281980&t=163)** You could find information from a variety of topics all over the place.
>
> **[2:48](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/why-use-bigquery-instead-of-cloud-sql-or-cloud-spanner?u=76281980&t=168)** But what I want to do is look at one in particularly, and we're going to search for NCAA.
>
> **[2:55](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/why-use-bigquery-instead-of-cloud-sql-or-cloud-spanner?u=76281980&t=175)** And what's cool about this one, when I click on this dataset, you're going to see this has data on basketball games, teams, players, box scores back to 2009.
>
> **[3:07](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/why-use-bigquery-instead-of-cloud-sql-or-cloud-spanner?u=76281980&t=187)** So it's really cool stuff, gives you a lot of info on it.
>
> **[3:10](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/why-use-bigquery-instead-of-cloud-sql-or-cloud-spanner?u=76281980&t=190)** And I believe they do continually update this.
>
> **[3:13](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/why-use-bigquery-instead-of-cloud-sql-or-cloud-spanner?u=76281980&t=193)** And just, for example, if I just click on one of these men's basketball players' games, and let's just say, I'm going to hit Preview on this dataset here.
>
> **[3:24](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/why-use-bigquery-instead-of-cloud-sql-or-cloud-spanner?u=76281980&t=204)** Oh, this actually even has up to 2017 now.
>
> **[3:27](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/why-use-bigquery-instead-of-cloud-sql-or-cloud-spanner?u=76281980&t=207)** So you could see the dates and times of a game.
>
> **[3:31](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/why-use-bigquery-instead-of-cloud-sql-or-cloud-spanner?u=76281980&t=211)** You could see players' names, their jersey numbers.
>
> **[3:35](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/why-use-bigquery-instead-of-cloud-sql-or-cloud-spanner?u=76281980&t=215)** So all kinds of good stuff.
>
> **[3:37](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/why-use-bigquery-instead-of-cloud-sql-or-cloud-spanner?u=76281980&t=217)** And this is really going to give you some good ideas on what you want to search for.
>
> **[3:43](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/why-use-bigquery-instead-of-cloud-sql-or-cloud-spanner?u=76281980&t=223)** And when you ever look at some of the various sports shows and they have all these advanced analytics, they're using tools like this to get that information.
>
> **[3:50](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/why-use-bigquery-instead-of-cloud-sql-or-cloud-spanner?u=76281980&t=230)** So I'm going to give you some nice SQL queries we can use to give you some real cool insights to this information.
>
> **[3:58](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/why-use-bigquery-instead-of-cloud-sql-or-cloud-spanner?u=76281980&t=238)** Thing I want to do, let's go ahead and we have this dataset selected.
>
> **[4:02](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/why-use-bigquery-instead-of-cloud-sql-or-cloud-spanner?u=76281980&t=242)** I'll just click on the top one here and I'm going to click COMPOSE NEW QUERY in the right hand corner.
>
> **[4:09](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/why-use-bigquery-instead-of-cloud-sql-or-cloud-spanner?u=76281980&t=249)** Now what I'm going to do is I'm going to use a query, I'm going to paste this from off the screen here.
>
> **[4:16](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/why-use-bigquery-instead-of-cloud-sql-or-cloud-spanner?u=76281980&t=256)** And what you can see here, we're using standard SQL and we're actually going to select the venue_name, venue_capacity, city, and state out of this BigQuery public dataset under the men's basketball teams' games.
>
> **[4:32](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/why-use-bigquery-instead-of-cloud-sql-or-cloud-spanner?u=76281980&t=272)** And we're going to group them one through four, one through five rather.
>
> **[4:35](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/why-use-bigquery-instead-of-cloud-sql-or-cloud-spanner?u=76281980&t=275)** And we'll have a limit ordered by the highest capacity stadium to the lowest.
>
> **[4:42](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/why-use-bigquery-instead-of-cloud-sql-or-cloud-spanner?u=76281980&t=282)** So that's what we're trying to find out here.
>
> **[4:43](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/why-use-bigquery-instead-of-cloud-sql-or-cloud-spanner?u=76281980&t=283)** Which of these stadiums have the highest seating capacity?
>
> **[4:48](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/why-use-bigquery-instead-of-cloud-sql-or-cloud-spanner?u=76281980&t=288)** So once I hit RUN, you'll see, just like that, it took seconds to run this, it literally 0.0 seconds.
>
> **[4:56](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/why-use-bigquery-instead-of-cloud-sql-or-cloud-spanner?u=76281980&t=296)** It was already cached, because I've run this one before.
>
> **[4:58](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/why-use-bigquery-instead-of-cloud-sql-or-cloud-spanner?u=76281980&t=298)** But you'll see, AT&T Stadium in Arlington, Texas has the most, and Lucas Oil Stadium at 70,000 has the least.
>
> **[5:09](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/why-use-bigquery-instead-of-cloud-sql-or-cloud-spanner?u=76281980&t=309)** But these are the top five stadiums that have the highest capacity.
>
> **[5:13](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/why-use-bigquery-instead-of-cloud-sql-or-cloud-spanner?u=76281980&t=313)** So you could just see right there, how you could start getting some really good information when you use BigQuery and just getting a lot of insight you normally couldn't get just due to the speed of it.
>
> **[5:24](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/why-use-bigquery-instead-of-cloud-sql-or-cloud-spanner?u=76281980&t=324)** I'm going to run one more.
>
> **[5:26](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/why-use-bigquery-instead-of-cloud-sql-or-cloud-spanner?u=76281980&t=326)** This one here, this tells you, this is only 5.1 megabytes.
>
> **[5:30](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/why-use-bigquery-instead-of-cloud-sql-or-cloud-spanner?u=76281980&t=330)** And what this one's going to do is show you the highest scoring game since 2010, and when we run this, oh, okay, so you're going to see 131 points, 127, 130 points.
>
> **[5:44](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/why-use-bigquery-instead-of-cloud-sql-or-cloud-spanner?u=76281980&t=344)** And these were back in 2017.
>
> **[5:47](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/why-use-bigquery-instead-of-cloud-sql-or-cloud-spanner?u=76281980&t=347)** So these are some of the highest top scoring games.
>
> **[5:51](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/why-use-bigquery-instead-of-cloud-sql-or-cloud-spanner?u=76281980&t=351)** And then the opposing teams and the total point for the game combined.
>
> **[5:55](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/why-use-bigquery-instead-of-cloud-sql-or-cloud-spanner?u=76281980&t=355)** So just lots of cool stuff you could do, that, you know, between these datasets.
>
> **[6:00](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/why-use-bigquery-instead-of-cloud-sql-or-cloud-spanner?u=76281980&t=360)** I mean you could literally just think of different combinations of data that you want to see.
>
> **[6:04](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/why-use-bigquery-instead-of-cloud-sql-or-cloud-spanner?u=76281980&t=364)** It's all SQL.
>
> **[6:06](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/why-use-bigquery-instead-of-cloud-sql-or-cloud-spanner?u=76281980&t=366)** And once you know SQL, it's not too hard to learn.
>
> **[6:10](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/why-use-bigquery-instead-of-cloud-sql-or-cloud-spanner?u=76281980&t=370)** You could really dive deep in this and just learn things that you couldn't before.
>
> **[6:14](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/why-use-bigquery-instead-of-cloud-sql-or-cloud-spanner?u=76281980&t=374)** And I'll do one more. This is a cool one.
>
> **[6:18](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/why-use-bigquery-instead-of-cloud-sql-or-cloud-spanner?u=76281980&t=378)** Let's see what we have here. I like this one.
>
> **[6:21](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/why-use-bigquery-instead-of-cloud-sql-or-cloud-spanner?u=76281980&t=381)** This is going to show you just different types of events we have, just some of the different types of data we can do.
>
> **[6:31](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/why-use-bigquery-instead-of-cloud-sql-or-cloud-spanner?u=76281980&t=391)** And you look at rebounds, two point missed, the turnovers, two point made, assist, three pointers, missed, shooting foul, so you get all this data.
>
> **[6:42](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/why-use-bigquery-instead-of-cloud-sql-or-cloud-spanner?u=76281980&t=402)** As you could see, the different types of results like these are how many times these come up within this dataset.
>
> **[6:48](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/why-use-bigquery-instead-of-cloud-sql-or-cloud-spanner?u=76281980&t=408)** So rebounds, very, very high on the list.
>
> **[6:51](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/why-use-bigquery-instead-of-cloud-sql-or-cloud-spanner?u=76281980&t=411)** That's the number one thing that comes up the most.
>
> **[6:53](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/why-use-bigquery-instead-of-cloud-sql-or-cloud-spanner?u=76281980&t=413)** Kicked balls, so this really cool stuff.
>
> **[6:56](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/why-use-bigquery-instead-of-cloud-sql-or-cloud-spanner?u=76281980&t=416)** So let's say you thought about how many times a player's been ejected or how many time there's been flagrant, two fouls given out, there was 118 of them.
>
> **[7:07](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/why-use-bigquery-instead-of-cloud-sql-or-cloud-spanner?u=76281980&t=427)** BigQuery gives you that insight like no other.
>
> **[7:09](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/why-use-bigquery-instead-of-cloud-sql-or-cloud-spanner?u=76281980&t=429)** And what's so awesome about it is, of course we're talking about NCAA basketball.
>
> **[7:14](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/why-use-bigquery-instead-of-cloud-sql-or-cloud-spanner?u=76281980&t=434)** This could apply to any type of big data application you have, any kind of data you may already have for your company or your organization.
>
> **[7:23](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/why-use-bigquery-instead-of-cloud-sql-or-cloud-spanner?u=76281980&t=443)** They may have data for years, and they put it into these types of tools and get insights like they never could before.
>
> **[7:29](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/why-use-bigquery-instead-of-cloud-sql-or-cloud-spanner?u=76281980&t=449)** So hopefully this helps you make sense of how you could use BigQuery for some of your future projects.
>
> **[7:36](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/why-use-bigquery-instead-of-cloud-sql-or-cloud-spanner?u=76281980&t=456)** Or maybe you want to learn more about data science and data analytics.
>
> **[7:40](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/why-use-bigquery-instead-of-cloud-sql-or-cloud-spanner?u=76281980&t=460)** So hopefully this helps.

> [!info]- Semantic Content
>
> **Env Vars:** sql (10), gcp (3), ncaa (2), compose (1), query (1)
> **Code Keywords:** let (5), public (2), this, (2), for, (1), this. (1)
> **UI Navigation:** click on (3), scroll down (1), select the (1)
> **CLI Commands:** find (3), make (1)
> **Code Identifiers:** venue_name (1), venue_capacity (1)
> **Versions:** 0.0 (1), 5.1 (1)
> **Definitions:** is a  (2)
> **Analogies:** for example (1), just like (1)

#### Demo: Creating an interactive report in Data Studio
> [LinkedIn Learning](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-creating-an-interactive-report-in-data-studio?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-creating-an-interactive-report-in-data-studio?u=76281980&t=0)** - [Instructor] Okay, we're at the last demo, but before we jump into it, I just want to talk about creating an interactive report in Data Studio.
>
> **[0:09](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-creating-an-interactive-report-in-data-studio?u=76281980&t=9)** Now, if you don't already know, Data Studio is a data visualization tool and it's really going to help us see all this information we've gathered and ran queries on within BigQuery or Cloud SQL or Spanner.
>
> **[0:26](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-creating-an-interactive-report-in-data-studio?u=76281980&t=26)** Several data sources out there we could choose from, but the bottom line is we're going to be able to get some real visual insight on it, so it's easy to read and we can actually make some understanding of all the data we've been looking at.
>
> **[0:41](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-creating-an-interactive-report-in-data-studio?u=76281980&t=41)** Now, going over to the Data Studio website, it does fall under the Marketing Platform.
>
> **[0:48](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-creating-an-interactive-report-in-data-studio?u=76281980&t=48)** But when you scrolling down and look at this, we're going to talk about dashboards a little bit, how you can explore it, helping your teams, you know, by sharing the knowledge, showing them different types of metrics.
>
> **[1:03](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-creating-an-interactive-report-in-data-studio?u=76281980&t=63)** And the main thing about it is, I'm just going to show you how easy it is.
>
> **[1:07](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-creating-an-interactive-report-in-data-studio?u=76281980&t=67)** I'm just going to go ahead and jump right into it.
>
> **[1:09](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-creating-an-interactive-report-in-data-studio?u=76281980&t=69)** I'm just going to go to datastudio.[google.com](https://google.com).
>
> **[1:12](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-creating-an-interactive-report-in-data-studio?u=76281980&t=72)** And from here, what we'll do, let's just take a little example report.
>
> **[1:18](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-creating-an-interactive-report-in-data-studio?u=76281980&t=78)** Let's go in and click on this marketing report here.
>
> **[1:22](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-creating-an-interactive-report-in-data-studio?u=76281980&t=82)** And I'm going to click use this template in the top right hand corner, and the data source, we could choose from, and I'm just going to use this sample to give me an idea of what this looks like.
>
> **[1:35](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-creating-an-interactive-report-in-data-studio?u=76281980&t=95)** And just like that, it's copied in and we could see some data in our report.
>
> **[1:40](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-creating-an-interactive-report-in-data-studio?u=76281980&t=100)** And this is about world population.
>
> **[1:42](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-creating-an-interactive-report-in-data-studio?u=76281980&t=102)** Now the great thing about it, the first thing I want you to know is at the top of the screen here, there's an Add data button.
>
> **[1:51](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-creating-an-interactive-report-in-data-studio?u=76281980&t=111)** And when I click on it, you could see all of these different connectors you can use to bring data into this report.
>
> **[1:59](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-creating-an-interactive-report-in-data-studio?u=76281980&t=119)** Anything from YouTube, to BigQuery, Google Sheets, you name it, you can take your own file if it's a CSV file and upload it in here as well.
>
> **[2:10](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-creating-an-interactive-report-in-data-studio?u=76281980&t=130)** So to give you an example, what we're going to do here is, let's just say for the United States, I'm going to click on this and I want to change the style of what this looks like, right?
>
> **[2:22](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-creating-an-interactive-report-in-data-studio?u=76281980&t=142)** I have a chart here, I have some data, text columns.
>
> **[2:26](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-creating-an-interactive-report-in-data-studio?u=76281980&t=146)** If I click on style, I could start changing what the table colors look like.
>
> **[2:32](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-creating-an-interactive-report-in-data-studio?u=76281980&t=152)** So if you want to make it red, if I want to come in here and look at different country destinations from different dimensions, you could change that as well.
>
> **[2:42](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-creating-an-interactive-report-in-data-studio?u=76281980&t=162)** But let's just look at some things like these charts.
>
> **[2:46](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-creating-an-interactive-report-in-data-studio?u=76281980&t=166)** So in this top right-hand corner I went on to hit this dropdown arrow and just like this, I get to start changing the data that's showing up, sessions, if I want to show it in some type of table with a heat map, I could do tables with bars.
>
> **[3:03](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-creating-an-interactive-report-in-data-studio?u=76281980&t=183)** You could show a table with new numeric data, like a typical table.
>
> **[3:08](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-creating-an-interactive-report-in-data-studio?u=76281980&t=188)** So there's all kinds of things, if I want to throw pie charts in there.
>
> **[3:12](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-creating-an-interactive-report-in-data-studio?u=76281980&t=192)** So this just allows you just to be as creative as you want, be as customized as you want.
>
> **[3:18](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-creating-an-interactive-report-in-data-studio?u=76281980&t=198)** I could change all this information to make it look, you know, any way I want it to look.
>
> **[3:23](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-creating-an-interactive-report-in-data-studio?u=76281980&t=203)** And it's really cool because it's just given you that ability to make your reports look attractive so people want to read this data you found.
>
> **[3:33](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-creating-an-interactive-report-in-data-studio?u=76281980&t=213)** And I think, in my opinion, I think that's the best way to describe this tool, is you want to make this data something digestible that someone's going to look at.
>
> **[3:42](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-creating-an-interactive-report-in-data-studio?u=76281980&t=222)** Because we all know most people don't really want to just look at numbers.
>
> **[3:47](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-creating-an-interactive-report-in-data-studio?u=76281980&t=227)** So even when I come down here and we're clicking on engagement by different, you know, genders, like if you want to change this to look at colors or bar charts, all that stuff plays a point in actually helping people understand the data you've gathered for them.
>
> **[4:03](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-creating-an-interactive-report-in-data-studio?u=76281980&t=243)** And that's really where Data Studio comes in.
>
> **[4:07](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-creating-an-interactive-report-in-data-studio?u=76281980&t=247)** Believe it or not, it's actually tied right into the Google Workspace suite of apps as well.
>
> **[4:12](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-creating-an-interactive-report-in-data-studio?u=76281980&t=252)** So if you needed to share it, you could still do that.
>
> **[4:15](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-creating-an-interactive-report-in-data-studio?u=76281980&t=255)** You could choose who can view it, you can make this data available publicly.
>
> **[4:20](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-creating-an-interactive-report-in-data-studio?u=76281980&t=260)** So it gives you a lot of flexibility in it as well.
>
> **[4:22](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-creating-an-interactive-report-in-data-studio?u=76281980&t=262)** And there's just different things you could do.
>
> **[4:24](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/demo-creating-an-interactive-report-in-data-studio?u=76281980&t=264)** I mean, I think the best way you could look at it, there's also this new Community visualizations side where there's third party developers that can help you even get more insight to this information.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), from, (2), this, (2), throw (1)
> **CLI Commands:** make (6)
> **UI Navigation:** click on (4), go to (1), dropdown (1)
> **Env Vars:** sql (1), csv (1)
> **Analogies:** just like (2)
> **URLs:** [google.com](https://google.com) (1)
> **Exercise Files:** template (1)
> **Definitions:** is a  (1)


### Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/next-steps?u=76281980&t=0)** - [Instructor] Thank you for taking this course on Google Cloud Data and Storage Foundations, and I really hope you learned a lot from it.
>
> **[0:07](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/next-steps?u=76281980&t=7)** But you may be wondering, "Where do I go next?"
>
> **[0:10](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/next-steps?u=76281980&t=10)** Well I'm going to help you with that because we're going to go right to Google Cloud's website.
>
> **[0:15](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/next-steps?u=76281980&t=15)** And on this website here, we're looking at all the different types of certifications that are offered.
>
> **[0:21](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/next-steps?u=76281980&t=21)** And what I'm going to really have you focus on, let's just pick one of these.
>
> **[0:25](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/next-steps?u=76281980&t=25)** I'm going to go over to the Cloud Database Engineer.
>
> **[0:29](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/next-steps?u=76281980&t=29)** Now, this is a professional level certification.
>
> **[0:32](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/next-steps?u=76281980&t=32)** If you're just getting started, I would look at the Cloud Digital Leader and/or the Cloud Engineer, because both of those are foundational and associate level exams that really help you get a more of a general understanding of Google Cloud.
>
> **[0:48](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/next-steps?u=76281980&t=48)** But when we go to the Cloud Database Engineer certification, what I like about this one is it really gives you a lot of learning that you can get hands-on training to help you prepare for the exam.
>
> **[1:01](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/next-steps?u=76281980&t=61)** And to do so, I'm going to scroll down on this website and we're going to go to this learning path.
>
> **[1:09](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/next-steps?u=76281980&t=69)** So I'm going to click on this Google Cloud learning path.
>
> **[1:13](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/next-steps?u=76281980&t=73)** And when I click on this Database Engineer learning path, you're going to see that there's all kinds of activities.
>
> **[1:18](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/next-steps?u=76281980&t=78)** Google Cloud manages this learning path themselves.
>
> **[1:22](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/next-steps?u=76281980&t=82)** But the key point is you're going to get the ability to do a lot of hands-on labs.
>
> **[1:28](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/next-steps?u=76281980&t=88)** So you can go through this learning path yourself, get a lot of hands-on experience.
>
> **[1:33](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/next-steps?u=76281980&t=93)** It's going to really give you that knowledge that you're going to need to be successful going forward.
>
> **[1:37](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/next-steps?u=76281980&t=97)** So what are you waiting for?
>
> **[1:39](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/next-steps?u=76281980&t=99)** It's time to keep on learning.
>
> **[1:40](https://www.linkedin.com/learning/google-cloud-data-and-storage-foundations-24099781/next-steps?u=76281980&t=100)** I'll see you in the next course.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (2), click on (2), scroll down (1)
> **Code Keywords:** let (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Prerequisites:** getting started (1)
> **Speakers:** - [instructor] (1)


## Path Context

### In [[Getting Started with Google Cloud]]
← [[Google Cloud Security for Beginners- Tools and Services]] | **3 of 3**

## Appears In

- [[Getting Started with Google Cloud]]

## Related Courses

_Courses sharing skills:_

- [[Practical Database Design- Implementing Responsible Data Solutions with SQL Querying]] — Data Management
- [[JavaScript- Best Practices for Data]] — Data Management
- [[Advanced Python- Working With Data]] — Data Management
- [[Leveraging Google Cloud Developer and DevOps Tools]] — Google Cloud Platform (GCP)
- [[Choosing A Cloud Platform For Developers Aws Azure And Gcp]] — Google Cloud Platform (GCP)

---

[↑ Back to top](#)