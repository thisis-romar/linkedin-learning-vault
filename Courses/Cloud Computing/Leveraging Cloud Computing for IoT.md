---
type: course
cssclasses:
  - lle-course
slug: leveraging-cloud-computing-for-iot
url: "https://www.linkedin.com/learning/leveraging-cloud-computing-for-iot"
duration_minutes: 88
duration: 1h 28m
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQGdM23RWl1vNQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1576086606650?e=2147483647&amp;v=beta&amp;t=f_3ixjiJK8iK424NlOeMDgIcwL8XwYRuabKgOEZ4NsE"
linkedin_topic: Cloud Computing
learning_paths:
  - '[Digital Transformation for Tech Leaders](../../Paths/Cloud%20Computing/Learning%20Paths/Digital%20Transformation%20for%20Tech%20Leaders.md)'
prev_courses:
  - '[IoT Foundations- Standards and Ecosystems](IoT%20Foundations-%20Standards%20and%20Ecosystems.md)'
next_courses:
  - '[Building and Managing a Cybersecurity Program](Building%20and%20Managing%20a%20Cybersecurity%20Program.md)'
path_nav: '[{"path":"Digital Transformation for Tech Leaders","position":8,"total":15,"prev":"IoT Foundations- Standards and Ecosystems","next":"Building and Managing a Cybersecurity Program"}]'
path_count: 1
tags:
  - course
  - topic/cloud-computing
  - topic/software-development
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cloud%20Computing/Leveraging%20Cloud%20Computing%20for%20IoT.md)

![Leveraging Cloud Computing for IoT](https://media.licdn.com/dms/image/v2/C4E0DAQGdM23RWl1vNQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1576086606650?e=2147483647&amp;v=beta&amp;t=f_3ixjiJK8iK424NlOeMDgIcwL8XwYRuabKgOEZ4NsE)

# Leveraging Cloud Computing for IoT

> The Internet of Things (IoT) and cloud-based providers are bound at the hip; however, most people don’t understand how, why, or what it all means. For anyone looking to move into the world of IoT and procure information about what's working (and what's not) in the relationship between IoT and various cloud providers, this course is a great place to start. Instructor David Linthicum provides an ove

> [LinkedIn Learning](https://www.linkedin.com/learning/leveraging-cloud-computing-for-iot) | 1h 28m
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Intro to Internet of Things (IoT) on cloud platforms](#intro-to-internet-of-things-iot-on-cloud-platforms)
  - [What you should know](#what-you-should-know)
- [**1. IoT Basics**](#1-iot-basics) (5 videos)
  - [What is an IoT device?](#what-is-an-iot-device)
  - [IoT data](#iot-data)
  - [IoT data processing](#iot-data-processing)
  - [IoT data storage at the edge and in the cloud](#iot-data-storage-at-the-edge-and-in-the-cloud)
  - [IoT growth in the cloud](#iot-growth-in-the-cloud)
- [**2. IoT in the Cloud Use Cases**](#2-iot-in-the-cloud-use-cases) (5 videos)
  - [Healthcare](#healthcare)
  - [Finance](#finance)
  - [Law enforcement](#law-enforcement)
  - [Manufacturing](#manufacturing)
  - [Education](#education)
- [**3. Amazon Web Service IoT Platform**](#3-amazon-web-service-iot-platform) (5 videos)
  - [Design](#design)
  - [Build](#build)
  - [Deploy](#deploy)
  - [Operate](#operate)
  - [Demo](#demo)
- [**4. Microsoft Azure IoT Hub**](#4-microsoft-azure-iot-hub) (5 videos)
  - [Design](#design)
  - [Build](#build)
  - [Deploy](#deploy)
  - [Operate](#operate)
  - [Demo](#demo)
- [**5. IoT on the Cloud: Solutions Walkthrough**](#5-iot-on-the-cloud-solutions-walkthrough) (5 videos)
  - [Requirement](#requirement)
  - [Design](#design)
  - [Build](#build)
  - [Train](#train)
  - [Deployment](#deployment)
- [**6. Other Considerations**](#6-other-considerations) (5 videos)
  - [Performance](#performance)
  - [Cost](#cost)
  - [Operations](#operations)
  - [Security](#security)
  - [Governance](#governance)
- [**Conclusion**](#conclusion) (1 videos)
  - [Addional resources](#addional-resources)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Intro to Internet of Things (IoT) on cloud platforms](https://www.linkedin.com/learning/leveraging-cloud-computing-for-iot/intro-to-internet-of-things-iot-on-cloud-platforms-23421633?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/leveraging-cloud-computing-for-iot/intro-to-internet-of-things-iot-on-cloud-platforms-23421633?u=76281980&t=0)** - Nothing has been more life-changing than the use of [internet of things](../../Skills/Software%20Development/Internet%20of%20Things%20(IoT).md), or [IoT](../../Glossary/Concept/IoT.md), technology. Smartphones, safer cars, lower electric bills are just a few of the benefits. The consistent efficiency of the cloud makes IoT cost-effective and available to the masses. I'm going to teach this course using very pragmatic approaches based on current best practices and leverage real cloud-based IoT technology you can use in the cloud today. Hi, I'm Dave Linthicum, internationally known expert and consultant. I wish you a pleasant journey in learning about the world of IoT for [Cloud Computing](../../Topics/Cloud%20Computing.md) and what it can do for you and your cloud-enabled enterprise.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [IoT](../../Glossary/Concept/IoT.md) (4), [Internet of things](../../Skills/Software%20Development/Internet%20of%20Things%20(IoT).md) (1), [Cloud Computing](../../Topics/Cloud%20Computing.md) (1)
> **Speakers:** - nothing (1)

#### [What you should know](https://www.linkedin.com/learning/leveraging-cloud-computing-for-iot/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/leveraging-cloud-computing-for-iot/what-you-should-know?u=76281980&t=0)** - [Instructor] So what you should know to take this course. Well, we're looking for a few basic skills. First, the basic understanding of public cloud-based systems such as Amazon, [Google](../../Glossary/Service/Google.md), and [Microsoft Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md). We're also looking for a basic understanding of the concept of data and [Databases](../../Skills/Software%20Development/Databases.md), how information is stored and processed. We're looking for a basic understanding of [Application Development](../../Skills/Software%20Development/Application%20Development.md) as well. This doesn't mean you need to be a coder, but you need to be familiar with how applications are built, deployed, and maintained. You need to understand some of the basics around security, how encryption works, identity access management, again, just the basics, not the details. Also, the core concept of governance or the ability to put guardrails around leveraging existing systems. Also, it helps to have a few business skills, understanding how we can apply this technology in certain business concepts to achieve a business benefit.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Google](../../Glossary/Service/Google.md) (1), [Microsoft Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (1), [Databases](../../Skills/Software%20Development/Databases.md) (1), [Application Development](../../Skills/Software%20Development/Application%20Development.md) (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### 1. IoT Basics

[↑ Back to Table of Contents](#table-of-contents)

#### [What is an IoT device?](https://www.linkedin.com/learning/leveraging-cloud-computing-for-iot/what-is-an-iot-device?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/leveraging-cloud-computing-for-iot/what-is-an-iot-device?u=76281980&t=0)** - [Narrator] So a common question is "what is an [IoT](../../Glossary/Concept/IoT.md) device?" Well, it's really any device, typically not a computer or a server, that will store and process data and transmit data to some sort of a centralized storage system. So we have millions of these today and perhaps you have hundreds of them that you see in your life on a daily basis. There are phones, there are cameras, drones, smartwatches, automobiles, anything that's able to absorb and process data and retransmit it to some sort of a central device. They can cost between 5 and 5,000 dollars. They can be as small as the head of a pin or as large as an automobile or a tractor. So keep in mind that IoT devices are all around and their systemic. So ultimately this is about connecting things. It's very cool that we can have some device that's able to process information such as a smartphone or even the computers within our car. But, the ability for those devices those devices to transmit information to some other type of a central computer and aggregate the data, and share the data, and respond to the data is where the value of the [internet of things](../../Skills/Software%20Development/Internet%20of%20Things%20(IoT).md) comes in. So ultimately, this is going to be about not only dealing with the devices that pick up the data and transmit the data to a central source,
>
> **[1:34](https://www.linkedin.com/learning/leveraging-cloud-computing-for-iot/what-is-an-iot-device?u=76281980&t=94)** but what happens at that central source, specially in the cloud. [Cloud Computing](../../Topics/Cloud%20Computing.md) becomes probably the most viable topic and target that these devices can connect with. Therefor, IoT and cloud computing are tightly coupled.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [IoT](../../Glossary/Concept/IoT.md) (3), [Cloud Computing](../../Topics/Cloud%20Computing.md) (2), [Internet of things](../../Skills/Software%20Development/Internet%20of%20Things%20(IoT).md) (1)
> **Definitions:** is an  (1)
> **Analogies:** such as (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [narrator] (1)

#### [IoT data](https://www.linkedin.com/learning/leveraging-cloud-computing-for-iot/iot-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/leveraging-cloud-computing-for-iot/iot-data?u=76281980&t=0)** - [Instructor] So, the [Internet of Things](../../Skills/Software%20Development/Internet%20of%20Things%20(IoT).md), specifically how it works with [Cloud Computing](../../Topics/Cloud%20Computing.md), is really all about data production and what you do with that data. So, this course is largely going to focus on devices that send things back to a cloud-based system, and a cloud-based system that may, in turn, control aspects of those devices. For example, a drone transmitting information to some sort of a central computer on the cloud. Now, the drone may have data that's native to that drone, such as navigation data so it stays on course, and the ability to respond to things such as an object in front of it so it can avoid a collision. But, the ability to take images and videos from that drone, for example, over some sort of farmer's field to look at water saturation, and transmit those images to a centralized server, is really where the power of [IoT](../../Glossary/Concept/IoT.md) is. So, this is about leveraging data. We may have local storage, which occurs at the device. And certainly, with the power of nonvolatile memory today, we can store gigabytes, sometimes petabytes, of information on devices that can fit in the palm of your hand. But, this is also about storing information in some sort of a remote system, typically existing on cloud computing, but it can also be a proprietary on-premise system. So, it's someplace that has some sort of a network connection that can receive, store, and organize data. So, cloud [Databases](../../Skills/Software%20Development/Databases.md) have a tendency to be
>
> **[1:36](https://www.linkedin.com/learning/leveraging-cloud-computing-for-iot/iot-data?u=76281980&t=96)** the preferred technology for this, considering the fact that they're already connected, they're pervasive, and they're able to, in essence, scale up to as high as we need for them to scale up. But, we have to do something with that data, and we have to deal with [business intelligence](../../Skills/Data%20Science/Business%20Intelligence%20(BI).md) service, which is the ability to look at information that's coming back from logistics. For example, in terms of how efficient truck drivers are moving across the United States, based on devices that are placed in the truck, which are IoT devices that transmit data back to a centralized server. And also, the ability to take on special systems, such as artificially intelligent and machine learning-based systems. So, we can feed this information into those processes and have certain value that comes out, the ability to understand that data, understand the patterns, and then make conclusions about what patterns the artificially intelligent systems find. And then, the ability to deal with simple operations. You know, such as, I'm able to, in essence, automate the maintenance of my factory robots, because they're transmitting information back to some sort of a central server, and we can dispatch maintenance engineers to lubricate things, to change out components, to self-diagnose problems. So, the applications of this are limitless. So, keep in mind, we're reacting to trends and [Real-Time](../../Skills/Database%20Management/Real-Time.md) events. So, the value here, with IoT and cloud computing, is that we're able to, in essence,
>
> **[3:12](https://www.linkedin.com/learning/leveraging-cloud-computing-for-iot/iot-data?u=76281980&t=192)** [react](../../Skills/Web%20Development/React.js.md) to something that's occurring now that needs immediate attention. You know, say a jet engine is failing. And, within the jet, we want to notify the pilots and the onboard systems that something is occurring that needs to be taken care of. And also, the ability to transmit that data to some sort of a central server, which has the power to perform things such as [Predictive Analytics](../../Skills/Data%20Science/Predictive%20Analytics.md). The same jet engine failure may have been spotted because some sort of behavior has occurred in the last 10 to 15 flights that matches a behavior that really looks at the fact that something will be failing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Cloud Computing](../../Topics/Cloud%20Computing.md) (3), [IoT](../../Glossary/Concept/IoT.md) (3), [Internet of things](../../Skills/Software%20Development/Internet%20of%20Things%20(IoT).md) (1), [Databases](../../Skills/Software%20Development/Databases.md) (1), [Business intelligence](../../Skills/Data%20Science/Business%20Intelligence%20(BI).md) (1)
> **Analogies:** such as (5), for example (3)
> **CLI Commands:** make (1), find (1)
> **Cross-References:** in the last (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [IoT data processing](https://www.linkedin.com/learning/leveraging-cloud-computing-for-iot/iot-data-processing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/leveraging-cloud-computing-for-iot/iot-data-processing?u=76281980&t=0)** - [Instructor] So if the focus of [IoT](../../Glossary/Concept/IoT.md) is data, how do we leverage IoT data from, say, a factory device, as an example? So we have IoT data that comes from that device. It can be any number of things in terms of maintenance schedules, in terms of how efficiently the arms are processing, how much heat is being spun off, the temperature of the different joints of the robot, any number of things that are pertinent to the maintenance of a robot. So therefore, we have some sort of operational understanding as well as an analytical understanding. So I can look at the console of the robot and figure out the temperature, the efficiency, the power consumption, the number of hours that's been on each of the brushless motors that is installed within the robot, and I can also look at the data in some sort of analytical way. In other words, look at how the temperature, operational characteristics that we're always gathering from that robot, look in the context of a larger analytical database which may track the maintenance of robots, say 10,000 robots, over a period of 10 years. So we're able to look at the operational instances of that robot, or what that robot is doing currently, but also how it exists in the context of data that may be gathered from thousands of other robots over time in terms of what occurred and what outcomes we can expect. For example, if the temperature has been too high for a couple of days and we know that it may be time for a new cooling system to be installed,
>
> **[1:35](https://www.linkedin.com/learning/leveraging-cloud-computing-for-iot/iot-data-processing?u=76281980&t=95)** or if we may figure out that the cooling system is not necessarily going to solve a problem if the temperature in the factory has been going up over time. All these things need to be taken into consideration. Need to be able to log the data from an operational standpoint and then understand the outcomes. So keep in mind, if we're gathering data, we're looking at what data led up to some outcome that occurred, led up to a failure or led up to a success, and ultimately, if we're getting to an outcome that is a failure or success, we're looking at a number of parameters that may have led up to that failure or success, and that's a matter of looking at operational data which is logged. Analytical data is all about predictions, the ability to, in essence, use historical data, in this case, maintenance and outcomes, for factory-level robots as to what was the success and what was a failure? Typically focusing on failures, we know that a certain number of parameters of these are set are going to have a certain percentage of chance that the robot is going to fail in this particular way. The ability to predict that means that we can go off and maintain and prevent operational outages from that robot because we're proactively able to figure out issues before they become issues. So maintenance steps in. You can leverage those predictions to make sure that the robot operates at the highest efficiency without a number of outages, and if an outage does occur, how to repair the robot
>
> **[3:10](https://www.linkedin.com/learning/leveraging-cloud-computing-for-iot/iot-data-processing?u=76281980&t=190)** in a very effective and efficient way. So keep in mind that we're also externalizing IoT data to [Dashboards](../../Skills/Data%20Science/Dashboards.md), and that's typically going to be for human consumption. These may be on a computer screen, may be on a console in the device itself, in the case of our robot, or this may be something that's externalized to a cell phone or a pad computer, any number of ways, but they provide meaning of the information that's coming off of these devices in some way that humans can consume them and [react](../../Skills/Web%20Development/React.js.md) to them. So very much like a [business intelligence](../../Skills/Data%20Science/Business%20Intelligence%20(BI).md) dashboard. We're just looking at data today that's coming off an IoT device, and it could be for any number of purposes in a way that's going to be most meaningful to the person who's looking at the dashboard.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [IoT](../../Glossary/Concept/IoT.md) (5), [Dashboards](../../Skills/Data%20Science/Dashboards.md) (1), [React](../../Skills/Web%20Development/React.js.md) (1), [Business intelligence](../../Skills/Data%20Science/Business%20Intelligence%20(BI).md) (1)
> **Definitions:** in other words (1), is a  (1)
> **Warnings:** keep in mind (2)
> **CLI Commands:** make (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [IoT data storage at the edge and in the cloud](https://www.linkedin.com/learning/leveraging-cloud-computing-for-iot/iot-data-storage-at-the-edge-and-in-the-cloud?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/leveraging-cloud-computing-for-iot/iot-data-storage-at-the-edge-and-in-the-cloud?u=76281980&t=0)** - [Instructor] So how is Edge Computing related to [Cloud Computing](../../Topics/Cloud%20Computing.md) and [IoT](../../Glossary/Concept/IoT.md) in general? Keep in mind that ultimately this is about balancing processing at the IoT device with the centralized server. Typically existing in a cloud-based platform. So the reason we move some processes to the Edge or within the IoT device is that ultimately it may be more effective and faster. Either from a cost efficient basis or just from an overall efficiency basis. To keep the information stored on the device such as within a jet plane, as to the ability to [react](../../Skills/Web%20Development/React.js.md) to some sort of an engine issue and so while it's good to transmit that information back to some sort of a centralized sever so we can trend that information over time. Obviously it's going to require that people on board and computers on board take note of that issue and repair it as soon as possible. So this is about moving data and processing much closer to the source than if we sent everything to some sort of a central computer. So it's good to use cloud computing for the higher end processing, in other words the things that require a lot of horsepower. Such as [Predictive Analytics](../../Skills/Data%20Science/Predictive%20Analytics.md) and machine learning technology. But it's not necessary to transmit every piece of data from the IoT device to the cloud and therefore some of the processing can occur at the source or within the computer within the IoT device.
>
> **[1:35](https://www.linkedin.com/learning/leveraging-cloud-computing-for-iot/iot-data-storage-at-the-edge-and-in-the-cloud?u=76281980&t=95)** So the ability to let the IoT device take some operational processing is able to provide us with a couple of benefits, number one, if the network goes down and we're disconnected from the central computer that device can continue processing for a time, even though it can't send data to be trended at the central computer it still can react to issues it needs to react to. You know such as a thermostat that sits in your wall. Even though it's much more valuable to you if it's connected to some sort of a back-end processor so it can make intelligent adjustments to your temperature within your house, to minimize your electric bill each month it still needs to run if for some reason the network connection goes down. So an example with an Edge computing and a cloud based system is really kind of looking at what's there, so they both have a couple of things in common. They both have operating systems. Typically the Edge based device it could be IoT version of [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md), or [Android](../../Glossary/Sdk/Android.md) operating systems and the cloud could have an operating system as well typically Linux or WindowsNT. They both leverage [Data Storage](../../Skills/Data%20Science/Data%20Storage.md), they both use [application programming interfaces](../../Skills/Software%20Development/Application%20Programming%20Interfaces%20(API).md) to communicate inside and outside of themselves. And they both have applications that run on them. So keep in mind that an Edge based device, even though it may be inexpensive, and typically not as powerful as a server that sits on a cloud-based system. It's going to have a lot of the same characteristics. It's going to have the ability to store data,
>
> **[3:07](https://www.linkedin.com/learning/leveraging-cloud-computing-for-iot/iot-data-storage-at-the-edge-and-in-the-cloud?u=76281980&t=187)** to process information and respond fairly quickly and as technology matures and progresses the Edge devices are becoming more powerful. Just look at the evolution of the cell phone you have in your pocket. It's very different from 10 years ago. So the cloud provides the advantage of [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) so the reason that the cloud is even in this equation is because we know that the cloud won't run out of resources, so if we send 10 petabytes of data which is spinning off an IoT system we may have a million devices out there that are gathering the information, and even though they're processing some of the information at the device, in an Edge computing type fashion. Most of the information is going to be sent to some sort of a back-end system and we're typically going to pick a cloud computing system to do that because of the elasticity or the scalability. In other words, it's typically not going to run out of resources because the resources are virtually unlimited. We can provision as much storage and as much compute as we need, so that's why we do so.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [IoT](../../Glossary/Concept/IoT.md) (8), [Cloud Computing](../../Topics/Cloud%20Computing.md) (3), [React](../../Skills/Web%20Development/React.js.md) (3), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (2), [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) (2)
> **Analogies:** such as (3)
> **Definitions:** in other words (2)
> **Warnings:** keep in mind (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [IoT growth in the cloud](https://www.linkedin.com/learning/leveraging-cloud-computing-for-iot/iot-growth-in-the-cloud?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/leveraging-cloud-computing-for-iot/iot-growth-in-the-cloud?u=76281980&t=0)** - [Instructor] So why is [IoT](../../Glossary/Concept/IoT.md) and public clouds coupled? Why are they dependent one to another? Well, keep in mind that public clouds ultimately have certain patterns or things they do very well. Examples would be [Amazon Web Services](../../Skills/Cloud%20Computing/Amazon%20Web%20Services%20(AWS).md), [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) from [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md), and [Google Cloud Platform](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md), but there are a number of other public cloud platforms out there as well. You may have one that's different than the ones you see here. So there's specific IoT systems or services on each of those platforms. For example, on Amazon Web Services, we have AWS IoT, they provide AI capabilities, and also analytical capabilities which are native to that cloud. So they know that IoT is going to be important part of computing and they have certain services out there that are able to maximize their ability to provide value to IoT based applications. On Azure we have Azure IoT, as well as artificially intelligent systems, and also analytics. They may be different in the brand and what they do, but you'll find that a lot of the patterns are exactly the same. And the same with [Google](../../Glossary/Service/Google.md). We have Cloud IoT Core, we have artificially intelligence which is built into Google as well as data analytics, which is also built into the Google platform. So which ones you leverage really should depend on your requirements. And keep in mind that there's no hard and fast rule about you just leveraging one. Indeed, many organizations leverage one, two,
>
> **[1:35](https://www.linkedin.com/learning/leveraging-cloud-computing-for-iot/iot-growth-in-the-cloud?u=76281980&t=95)** or all three or more. It's called multi cloud. So an example would be a device which is linked to a public cloud service. So I may have a IoT based application which is built in a particular drone that may be over flying a farmers field to determine soil hydration. And the device itself has its own sets of processing such as navigation and keeping the drone in flight as well as when to take pictures and what to take pictures of. And we're transmitting that back to some sort of a public cloud service which is aware of the IoT system, in this case the operating system, and the format of that system, and even has prebuilt applications for leveraging [Image Processing](../../Skills/Artificial%20Intelligence%20(AI)/Image%20Processing.md), in this case to process hydration saturation for a farmers field. So they're able to work and play well together. The device is aware that the public clouds are around and the clouds are aware that the device is around. And obviously, the ability to support a specific device really dependent on the public cloud that you pick. So useful [Cloud Services](../../Skills/Cloud%20Computing/Cloud%20Services.md) include artificially intelligent systems or machine learning based systems, those are how we can make sense of gobs of data that are coming off of the IoT devices. [Business intelligence](../../Skills/Data%20Science/Business%20Intelligence%20(BI).md), or the ability to do things such as [Predictive Analytics](../../Skills/Data%20Science/Predictive%20Analytics.md), to predict maintenance cycles or really kind of the predicted outcome of information that we see coming off an IoT device. Such as health informatics or information
>
> **[3:10](https://www.linkedin.com/learning/leveraging-cloud-computing-for-iot/iot-growth-in-the-cloud?u=76281980&t=190)** that's coming off of some device that is attached to our bodies that needs to alert the physician because some sort of an issue is occurring. And of course, data. The ability to have [Databases](../../Skills/Software%20Development/Databases.md) which is able to deal with petabyte plus amounts of information, be able to process that data quickly and efficiently, be able to make sense of the data no matter whether it's structured or unstructured. And the ability to integrate all these things together. Keep in mind that a core feature of linking cloud based systems to IoT based systems is the ability to efficiently integrate those systems. Obviously systems that are out and about on very weak [wifi](../../Glossary/Standard/Wi-Fi.md) networks in some instances, communicating with Bluetooth in other instances, on older networks that may be a part of a factory, have to have some [Resiliency](../../Skills/Software%20Development/Resiliency.md) built in them in terms of how information is going to be processed from source to target. Be able to deal with all sorts of issues and do so in efficient ways.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [IoT](../../Glossary/Concept/IoT.md) (12), [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (3), [Google](../../Glossary/Service/Google.md) (3), [Amazon web services](../../Skills/Cloud%20Computing/Amazon%20Web%20Services%20(AWS).md) (2), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (1)
> **CLI Commands:** make (2), aws (1), find (1)
> **Analogies:** such as (3), for example (1)
> **Warnings:** keep in mind (3)
> **Env Vars:** aws (1)
> **Speakers:** - [instructor] (1)


### 2. IoT in the Cloud Use Cases

[↑ Back to Table of Contents](#table-of-contents)

#### [Healthcare](https://www.linkedin.com/learning/leveraging-cloud-computing-for-iot/healthcare?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/leveraging-cloud-computing-for-iot/healthcare?u=76281980&t=0)** - [Instructor] So let's take a look at [Internet of Things](../../Skills/Software%20Development/Internet%20of%20Things%20(IoT).md) and Healthcare. So what are some of the examples that we see out there? We have different devices that we wear that will allow us to gather information that we can show physicians or healthcare providers, perhaps someone that's assisting us in losing weight, someone that's trying to get us into better health. So we have things such as headsets that measure brainwaves over time. The ability to embed sensors within clothing, so it's a very passive way to gather things such as activity, blood pressure, oxygen saturation. Ultimately, the ability to monitor your blood pressure, doing so in an active way, meaning you're taking your blood pressure, or a passive way, meaning it's being done for you. The ability to monitor sugar. The ability to monitor our heart systems. The ability to understand what our pulse is doing. And the ability to look at sensors that are embedded within medical equipment, such as the ability to bring oxygen sensors at the same time that they deliver oxygen to your nose. And really, any wearable technology. And so we're entering a phase where people are wearing sports watches and monitoring watches and smart watches, and these watches not only have the capability of keeping track of our social media accounts and providing text-based features, but the ability to monitor data points out of our bodies and do so using the technology of Internet of Things. So an example is we have a patient
>
> **[1:37](https://www.linkedin.com/learning/leveraging-cloud-computing-for-iot/healthcare?u=76281980&t=97)** which is basically producing [IoT](../../Glossary/Concept/IoT.md) data out of the patient's body, and that data is in turn analyzed, and it's being returned in terms of conclusions or diagnostics back to a doctor or even back to the patient themselves. And then ultimately, we're having physicians that are making the decision as to how the patient should be treated. Now keep in mind that we're not changing the way that the treatment occurs, we're just providing a better opportunity for the data to be analyzed to make better decisions about patient care. And by the way, we're looking to move all of this into a public cloud scenario. So instead of doing this with all the local hospital systems or even the treatment room, the ability to push this out to the power and the economy of [Cloud Computing](../../Topics/Cloud%20Computing.md), and be able to make decisions as quickly as you need to make them at a cost that's been unheard of in the past.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Internet of things](../../Skills/Software%20Development/Internet%20of%20Things%20(IoT).md) (2), [IoT](../../Glossary/Concept/IoT.md) (1), [Cloud Computing](../../Topics/Cloud%20Computing.md) (1)
> **CLI Commands:** make (3)
> **Analogies:** such as (3)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Finance](https://www.linkedin.com/learning/leveraging-cloud-computing-for-iot/finance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/leveraging-cloud-computing-for-iot/finance?u=76281980&t=0)** - [Narrator] So, what about the [Internet of Things](../../Skills/Software%20Development/Internet%20of%20Things%20(IoT).md), the Cloud and the world of finance? So, we have to deal with [Banking](../../Skills/Software%20Development/Banking.md) data and do so in a way that's more viable and valuable to both the bank and the customer. So, how do we do that leveraging [IoT](../../Glossary/Concept/IoT.md)? So, first and foremost and we know this today to be a truth or fact and how we deal with our banking partners, is we deal with mobile computing. We all carry cell phones and many instances customers may not even have to ever go into a bank. They can deposit checks via mobile phone. They can remove data that they need. They can check their bank statements. They can do any number of things, that they used to do at a traditional bank or an ATM. The ability to have ATMs that have a bit more power than they did in the past, such as the ability to identify certain customers via their fingerprints or via the retinal scans. So, we ensure that security is going to be taken care of and the ability to have IoT BAE systems in the banks unto themselves. So, when customers enter banks, they know the particular customer that entered the bank has been identified. They verify their identity and we can complete with the transaction. There's no need to go through a very troublesome and time-consuming identity process. And the ability to deal with card systems. So, theft and fraudulent transactions around leveraging credit cards are a huge issue around there. The ability to embed GPS systems, for example into credit cards.
>
> **[1:33](https://www.linkedin.com/learning/leveraging-cloud-computing-for-iot/finance?u=76281980&t=93)** The ability to track credit cards that are lost or stolen is a huge advantage. The ability to provide cash management capabilities, you know, such as the ability to keep track of how we're spending our cash and what we're spending our cash on. Then also investment management, we all know we can check our stocks via our cell phone, but the ability to bind our investment management systems to artificially intelligent systems or machine learning based systems to optimize the investments that are in the market, is going to be a huge advantage. So, what's an example of this? Well we have a banking customer that's obviously going to leverage mobile computing within a cell phone. Within the IoT data, we can determine the location of that phone, therefor the location of the customer and what they're doing and basically how they're carrying out spending money and making money and investing money, during the day, the week, the month and the year. Out of that, we can understand [business intelligence](../../Skills/Data%20Science/Business%20Intelligence%20(BI).md) and artificially intelligent analytics on that data to determine what's not optimized and what can be optimized and this is completely done with a passive system. Just carrying around a cell phone and we can also bind it to banking systems and fraud detection. So, not only will it monitor our ability to see how we're going to spend money and how we're going to make money and how we're going to invest money but ensuring that we're doing so in authorized way and if there's any sort of fraud that's going on during that time,
>
> **[3:05](https://www.linkedin.com/learning/leveraging-cloud-computing-for-iot/finance?u=76281980&t=185)** the ability to spot it and correct it. And doing all this within the public cloud. The idea being that we're not going to do these within the banking data centers anymore but we're going to do these within the big public cloud providers like Amazon, [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) and [Google](../../Glossary/Service/Google.md).

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Banking](../../Skills/Software%20Development/Banking.md) (5), [IoT](../../Glossary/Concept/IoT.md) (3), [Internet of things](../../Skills/Software%20Development/Internet%20of%20Things%20(IoT).md) (1), [Business intelligence](../../Skills/Data%20Science/Business%20Intelligence%20(BI).md) (1), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (1)
> **Env Vars:** atm (1), bae (1), gps (1)
> **Analogies:** such as (2), for example (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)

#### [Law enforcement](https://www.linkedin.com/learning/leveraging-cloud-computing-for-iot/law-enforcement?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/leveraging-cloud-computing-for-iot/law-enforcement?u=76281980&t=0)** - [Instructor] So what about the opportunities to leverage [IoT](../../Glossary/Concept/IoT.md), [Cloud Computing](../../Topics/Cloud%20Computing.md) and law enforcement? So ultimately, we're generating crime data. And we can put that crime data anywhere it can be on premises, or it can, in this case, a public cloud provider. But what we do with that crime data and how we're able to track and reduce crime, is ultimately the end goal. So as police are executing their duties, they're gathering information consistently. And this information goes into a crime database that can be tracked in the cloud. We can match this up with crime data, in other words, actual crime that's occurring in the field, which is going to be tagged with GPS information, personnel information, criminal information. Other things we can leverage include video surveillance systems, either owned by the city or perhaps even owned by citizens, the citizens themselves which can carry around cell phones or mobile devices where they can report crimes as they happen, perhaps even send videos and other evidence back to the police. The ability to leverage traffic sensors and traffic cameras understand how the movement of cars is an indication of crime or activity and how people are adhering to the laws. Then, also white-collar crime capabilities, the ability to monitor not only violent crimes or crimes that are more citizen criminal in nature, but crimes that are occurring against larger industries, larger organizations which are typically going to be harder to catch. But you need to have the ability
>
> **[1:34](https://www.linkedin.com/learning/leveraging-cloud-computing-for-iot/law-enforcement?u=76281980&t=94)** for those employees of the company to report white-collar crime and produce evidence. So an example would be a citizen reports a crime, saving on a mobile phone. They're able to send along not only the information about what occurred perhaps videos other evidence, but GPS data as to the location of the crime, send along incident data as to what occurred and they're also able to track response data, how quickly were the police force or law enforcement able to respond to the complaint and solve the issue. Then ultimately, how it was resolved. And the ability to have a feedback loop to improve the resolution of crimes that occur via law enforcement, and the ability to better track how we're resolving that crime, how things are taken care of, and the ability to ultimately improve the process. And then leveraging the public cloud is the capability of storing GPS data, incident data, response data, resolution data, basically as a persistent tracking of a centralized objective. So all crime information is being stored in a single place, even though it's being reported and it's being generated by any number of devices.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [IoT](../../Glossary/Concept/IoT.md) (1), [Cloud Computing](../../Topics/Cloud%20Computing.md) (1)
> **Env Vars:** gps (3)
> **Definitions:** in other words (1), is an  (1)
> **Prerequisites:** you need to have (1)
> **Speakers:** - [instructor] (1)

#### [Manufacturing](https://www.linkedin.com/learning/leveraging-cloud-computing-for-iot/manufacturing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/leveraging-cloud-computing-for-iot/manufacturing?u=76281980&t=0)** - [Instructor] So let's talk about the [internet of things](../../Skills/Software%20Development/Internet%20of%20Things%20(IoT).md), the public cloud and manufacturing. And how does that relate to a use case? Well, keep in mind that factory data is made up of many things, but typically within a factory, it's going to be the mechanisms that are producing the product, in this case, robots, the ability to track the movement of raw goods and finished [products](../../Skills/Software%20Development/Microsoft%20Products.md) throughout the factory, or inter-factory logistics, the ability to monitor the productivity of the humans that are in the factory, and ultimately, factory productivity holistically. What's occurring, what are we doing well? What can we improve upon? So an example would be a robot which processes data based on its ability to assemble something. Say it's assembling a car door. So information about the assembly of that car door, or the robot data that it produces, pops up into a storage system that exists both within the robot, or in this case, the [IoT](../../Glossary/Concept/IoT.md) device, or the remote cloud-based system, say, a database existing in the public cloud. So we're able to manage the robot processing data, or what's occurring, as well as operations logging, the ability to keep track of serial number of the doors it's manufacturing, for example. So, within that we can do a couple of things. Number one, we can determine the productivity of this particular robot, be we can also determine the predictive maintenance needs of this particular robot. We know that every hundred doors it's assembled, that it needs to have certain parts and certain mechanisms lubricated.
>
> **[1:33](https://www.linkedin.com/learning/leveraging-cloud-computing-for-iot/manufacturing?u=76281980&t=93)** Perhaps every thousand doors it needs to have particular things replaced, such as gaskets. And we can schedule repairs to make that occur. So, and also, as we do predictive maintenance, and we determine failure rates, we're able to get around preventative maintenance capabilities by doing repairs upon the particular robot, we can make adjustments to the process, by leveraging machine-based systems, which gets smarter, because not only are we doing repetitive tasks based on predetermined sets of criteria, but we can also change the criteria, based on new information which basically changes our minds, or allows the systems to learn. And again, the public cloud is really part of most of this. In this case, the robot processing data, the operations logging, the predictive maintenance systems, say something that could be bound to machine learning-based systems, and perhaps aspects of the repair systems, are all existing in a particular public cloud.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Internet of things](../../Skills/Software%20Development/Internet%20of%20Things%20(IoT).md) (1), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1), [IoT](../../Glossary/Concept/IoT.md) (1)
> **CLI Commands:** make (2)
> **Analogies:** for example (1), such as (1)
> **Env Vars:** iot (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Education](https://www.linkedin.com/learning/leveraging-cloud-computing-for-iot/education?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/leveraging-cloud-computing-for-iot/education?u=76281980&t=0)** - [Instructor] So now let's take a look at the [Internet of Things](../../Skills/Software%20Development/Internet%20of%20Things%20(IoT).md), use of the cloud, and education. So keep in mind we are dealing with centralized [Data Storage](../../Skills/Data%20Science/Data%20Storage.md) that's typically going to exist in the cloud if we're dealing with [IoT](../../Glossary/Concept/IoT.md) in the cloud, and then in education scenario, that's going to be student data. That's going to be information about grades, the properties of the students, who they are, what they do, where they came from, other things that we need to store information about, the particular humanistic in classes to optimize their ability to be successful students. And so we have a number of IoT opportunities in this particular case. We have computerized grading or the ability to in essence not for students to fill out Scantron cards or even work with paper at all, but the ability to leverage computer-based systems that are [Wi-Fi](../../Glossary/Standard/Wi-Fi.md) connected to not only bring information from the tests or from the studies, but provide interactivity with the students in terms of what they are doing well and what they can do to improve, and we all know it's better for us to get this instant feedback than it is to wait for criticism to come a couple of days after we've done an exam or taken a lesson. And the ability to get feedback directly to the student via the mobile computing system. So in other words, it's not only this classroom lectures or other video playbacks, but the ability to have a customized feedback loop directly to the student as to he or she can do better as being a student. Leveraging machine learning-based systems are possible,
>
> **[1:33](https://www.linkedin.com/learning/leveraging-cloud-computing-for-iot/education?u=76281980&t=93)** as well as direct interaction with an actual human being, but instead of leveraging paper feedback that comes at certain long-term increments, the ability to get back to them at any time, either on-demand or through some sort of an event-driven force. The ability to leverage video within classrooms. So if you miss this lecture, you can repeat it at your own leisure, and the ability to ask questions directly, not only to a human being who's teaching the class, but perhaps to a machine learning based system that can respond directly to your questions based on what the knowledge engine knows. And the ability to track homework. Ability to keep up with the fact that we have to have an ongoing amount of work that occurs from each student out there. So we carry computers, we carry pad computers and ultimately we leverage those things to not only review the material that we need to understand, but to take tests, to do homework, to basically complete the learning process through some sort of an interactive mechanism. So an example would be a student, leverages a learning plan, in this case using a mobile phone, and we're able to track classroom attendance automatically through a GPS system, so we know if the student's in the classroom or not, and we're able to do automated grading systems, and we're able to interact directly with the educator or the person who's evaluating the student, and keep in mind that public cloud is able to play a role here with the student information storage. In this case, learning plans, classroom attendance, and the ability
>
> **[3:06](https://www.linkedin.com/learning/leveraging-cloud-computing-for-iot/education?u=76281980&t=186)** to deal with grading data. And so, we are in essence using IoT as a mechanism that allows us to optimize the experience that each student has. We're dealing with an education institute, again, using IoT, and the cloud as coordinate and link technologies.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [IoT](../../Glossary/Concept/IoT.md) (4), [Internet of things](../../Skills/Software%20Development/Internet%20of%20Things%20(IoT).md) (1), [Data Storage](../../Skills/Data%20Science/Data%20Storage.md) (1), [Wi-Fi](../../Glossary/Standard/Wi-Fi.md) (1)
> **Warnings:** keep in mind (2)
> **Env Vars:** gps (1)
> **Definitions:** in other words (1)
> **Speakers:** - [instructor] (1)


### 3. Amazon Web Service IoT Platform

[↑ Back to Table of Contents](#table-of-contents)

#### [Design](https://www.linkedin.com/learning/leveraging-cloud-computing-for-iot/design-3?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/leveraging-cloud-computing-for-iot/design-3?u=76281980&t=0)** - [Instructor] So I'm looking at [Amazon Web Services](../../Skills/Cloud%20Computing/Amazon%20Web%20Services%20(AWS).md) [IoT](../../Glossary/Concept/IoT.md), or [Internet of Things](../../Skills/Software%20Development/Internet%20of%20Things%20(IoT).md). We have a few core activities that take place. First, we're able to connect and manage devices. Again, an IoT device can be a mobile phone, it can be any sensor, it can be a drone, it can be anything that produces data. But typically, it's not going to be a traditional computing system. It's able to act on the device data, or data that's produced by the device into the IoT system. And it's also able to manage the device, or communicate and set a device state. So, keep in mind when we talk about IoT and public [Cloud Computing](../../Topics/Cloud%20Computing.md), we're often times talking about paired resources that are very much alike in the IoT device, or in the public cloud. So how this works is it provides direct connectivity to the device, and ultimately, devices need to be synergistic with Amazon Web Services IoT. Keep in mind this is a symbiotic relationship. Their ability to produce information from the devices and then push information back to the devices. Your ability to consume information into AWS IoT, and the ability to produce data out of AWS IoT. It's able to manage and monitor these devices as to state, and what their activity is. Keep in mind that devices have to be managed, and they have to be healthy. Security becomes an important issue and it's able to bring security level systems,
>
> **[1:34](https://www.linkedin.com/learning/leveraging-cloud-computing-for-iot/design-3?u=76281980&t=94)** ensuring that the data is not compromised. And ultimately, a directory service where the devices are registered and managed. Then the ability to deal with governance systems, such as the creation of rules and policies. So, what does the architecture look like? Well, it starts with the devices themselves. And, they're typically communicated using an SDK or [Software Development](../../Topics/Software%20Development.md) kit called things within Amazon Web Services. We also have IoT applications that can be created with the Amazon Web Services SDK. And they in turn, can communicate with a message broker, which is able to carry information to the engines and to the [Databases](../../Skills/Software%20Development/Databases.md) that are going to be receive, persist, and process the data. So note that information is consumed into the message broker. It's sent to a device shadow, which basically is an analog of the device, it sits in the AWS IoT subsystem, and it communicates directly or a rules engine as well. And then it's processed through any number of various systems that exist in Amazon Web Service public cloud including DynamoDB, Kinesis, Lambda serverless systems, S3 for storage, and then machine learning. So, what this means is that we're able to take any number of devices, consume information from those devices, and we're able to manage the movement of information through a message brokering system,
>
> **[3:07](https://www.linkedin.com/learning/leveraging-cloud-computing-for-iot/design-3?u=76281980&t=187)** into a rules engine that is in essence, going to create the movement of the various source and target systems that go into the various processing points within the Amazon Web Services public cloud. And if you look at these various systems, this is just an instance or an example on the right hand side, of what's available in Amazon Web Service that allows us to process information directly from the IoT devices. We have identity access management, which in essence, is systemic to most of this, and the ability to create analog devices or device shadows within the IoT system as well.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [IoT](../../Glossary/Concept/IoT.md) (12), [Amazon web services](../../Skills/Cloud%20Computing/Amazon%20Web%20Services%20(AWS).md) (5), [Internet of things](../../Skills/Software%20Development/Internet%20of%20Things%20(IoT).md) (1), [Cloud Computing](../../Topics/Cloud%20Computing.md) (1), [Software Development](../../Topics/Software%20Development.md) (1)
> **Env Vars:** aws (3), sdk (2)
> **Warnings:** keep in mind (3), note that (1)
> **CLI Commands:** aws (3)
> **Definitions:** is a  (1), is an  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Build](https://www.linkedin.com/learning/leveraging-cloud-computing-for-iot/build-3?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/leveraging-cloud-computing-for-iot/build-3?u=76281980&t=0)** - [Narrator] So keep in mind that a big part of [Amazon Web Services](../../Skills/Cloud%20Computing/Amazon%20Web%20Services%20(AWS).md) [IoT](../../Glossary/Concept/IoT.md) is the ability to create and manage rules. So, in doing a rule creation in management, we're able to deal with any number of rules that exist within different point systems. For instance, we can create an Amazon DynamoDB rule, which is of course within the database. We can create rules within serverless systems, such as AWS Lambda. And we can create rules using native Amazon Web Services services, such as SNS, or simple notification services. So, the AWS IoT [Software Development](../../Topics/Software%20Development.md) Kit is really core to a lot of this. So, using Amazon Web Services IoT, we're able to embed various systems into applications using the Software Development Kit. So the idea being is that we provide the tools for developers to leverage what is needed to be leveraged to build IoT-based capabilities within applications themselves. We can use an IoT device, an SDK for [JavaScript](../../Skills/Software%20Development/JavaScript.md), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md), other systems that are native to Amazon Web Services. So, ultimately this allows developers to customize the utilization of IoT based systems within AWS enabled applications. And very much like software development kits that proceeded this software development kit,
>
> **[1:35](https://www.linkedin.com/learning/leveraging-cloud-computing-for-iot/build-3?u=76281980&t=95)** it provides the basics to expand, to customize, and to build exact business features. There's open-source libraries that are included in the SDK, and the ability to expand this SDK to customize it for particular needs. For example, you may be building IoT-based systems, which communicate with robotic systems that leverage some sort of proprietary language, and you need to create an SDK to communicate using that proprietary language. This provides you with those capabilities.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [IoT](../../Glossary/Concept/IoT.md) (7), [Amazon web services](../../Skills/Cloud%20Computing/Amazon%20Web%20Services%20(AWS).md) (4), [Software Development](../../Topics/Software%20Development.md) (4), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **Env Vars:** sdk (4), aws (3), sns (1)
> **CLI Commands:** aws (3), python (1)
> **Analogies:** such as (2), for instance (1), for example (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [narrator] (1)

#### [Deploy](https://www.linkedin.com/learning/leveraging-cloud-computing-for-iot/deploy-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/leveraging-cloud-computing-for-iot/deploy-2?u=76281980&t=0)** - So how do we deal with deployment of [IoT](../../Glossary/Concept/IoT.md)-based systems under AWS? Well, we have to deal with provisioning. So within AWS, we have the notion of device provisioning. Which can be done using provisioning templates or basically ways in which we can pre-define the configuration of how we're going to configure and deploy a device. We can do so programmatically, in other words the ability to build programmatic features to automate the movement our provisioning of devices or deploying IoT-based applications. We're able to do it in a just-in-time way, where we can sense a need and stand up the devices just in time, ahead at the need of the IoT system. Or the ability to do them in bulk. For example if I'm rolling out 10,000 devices, and need to do so rather quickly. In doing bulk provisioning I'm able to leverage pre-built plans to roll out many devices in IoT applications and deploy them as needed. So keep in mind this provides us with the flexibility to do device and IoT application deployment in either a fine-grain way or a coarse-grain way at the pace that we need.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [IoT](../../Glossary/Concept/IoT.md) (5)
> **CLI Commands:** aws (2)
> **Env Vars:** aws (2)
> **Tools:** notion (1)
> **Definitions:** in other words (1)
> **Analogies:** for example (1)
> **Warnings:** keep in mind (1)
> **Prerequisites:** configure (1)

#### [Operate](https://www.linkedin.com/learning/leveraging-cloud-computing-for-iot/operate-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/leveraging-cloud-computing-for-iot/operate-2?u=76281980&t=0)** - So how do we operate [IoT](../../Glossary/Concept/IoT.md) based systems and their [Amazon Web Services](../../Skills/Cloud%20Computing/Amazon%20Web%20Services%20(AWS).md) IoT system? A few things to keep in mind. First and foremost is the ability to monitor what's going on. So, if we're going to monitor we need different tools to deal with the monitoring capability, the ability to watch things at the device level, or the centralized server level. We have the ability to use tools that are native to Amazon Web Services, such as Amazon CloudWatch. And we can use existing native logging capability, such as monitoring CloudWatch Logs. And we can also use AWS IoT API calls using AWS CloudTrail, the ability to leverage native tools, in essence, to monitor and to manage our IoT enabled applications. So how do we solve operational problems? Well, we have to deal with troubleshooting capabilities. Keep in mind that IoT based systems are particularly problematic considering the fact that they have devices that can go offline, very low powered networks, very low powered computers. And they typically exist at remote locations where things can happen, power outages, things like that. So how do we troubleshoot these systems? Well, we need to diagnose connectivity issues, such as when the network is not working up to speed, need to be able to deal with issues around how we deploy and manage rules within the applications. And ultimately, the ability to deal with
>
> **[1:36](https://www.linkedin.com/learning/leveraging-cloud-computing-for-iot/operate-2?u=76281980&t=96)** the shadow device within the AWS system. And keep in mind that that typically is going to be a replica of the device application that's actually running within the IoT device, but it's running on the cloud. And so we can determine a few things by managing and monitoring that application. But we need to also diagnose problems and be able to repair them if needed. And the ability to deal with Salesforce action issues, the ability to deal with how the devices are running correctly out in the field, the ability to deal with security issues, the ability to deal with governance issues. This all comes back into the world of troubleshooting. So, keep in mind that it's a matter of monitoring these environments to understand exactly what's going on, including keeping logs, but also having the capabilities to automate the troubleshooting or the repair with issues that you're going to an run into when building IoT based systems in Amazon Web Services.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [IoT](../../Glossary/Concept/IoT.md) (7), [Amazon web services](../../Skills/Cloud%20Computing/Amazon%20Web%20Services%20(AWS).md) (3)
> **Warnings:** keep in mind (4), troubleshoot (1)
> **Env Vars:** aws (3), api (1)
> **CLI Commands:** aws (3)
> **Analogies:** such as (3)
> **Speakers:** - so (1)

#### [Demo](https://www.linkedin.com/learning/leveraging-cloud-computing-for-iot/demo-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/leveraging-cloud-computing-for-iot/demo-2?u=76281980&t=0)** - [Instructor] To get into AWS Core [IoT](../../Glossary/Concept/IoT.md), first have to go to the management console and you an either type it here and find it directly in the console. We'll just go ahead and do that. IoT Core, go ahead and click on that, and it brings us directly into that system. You'll see a couple of things here. Number one, on the left-hand side we have the ability to monitor things, devices, and processes, roles, onboard devices, manage things, Greengrass, which is a subcomponent of the IoT system, security, defensive systems, the ability to act and the ability to test. So what we'll do here is basically look at what it takes to get things setup and so what we're going to do is Onboard, a process, and we'll show you what it's going to take to configure a device. Here we're able to do a few things. We can register a device. We can download a connection kit, which means we can connect to a device using some sort of STK, and we can configure and test a device. We're able to select the platform and [Software Development](../../Topics/Software%20Development.md) kit that best suits how you're connecting to AWS IoT, and have a couple of options here. We can choose a platform, [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md). Now go ahead and select that. Choose an AWS IoT device, STK, and we're going to go ahead and use [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md).
>
> **[1:39](https://www.linkedin.com/learning/leveraging-cloud-computing-for-iot/demo-2?u=76281980&t=99)** Then we're going to go ahead and click Next. We're able to register a thing, which is basically a device, and we're going to give it a name. This is going to best Test Device. A thing is in the registry, Test_Device. A policy to send and receive messages, Test_Device-Policy. As a basic rule in terms of how we're able to transmit information, receive information from the device. A certificate and private key has been created. We're leveraging an STK, a specific STK. In this case, Python. We have a script that allows us to see how we can send and receive messages. We've downloaded the connection kit for Linux OSX. You can see we can download the zip file and we can go ahead and unload that and load that directly to our device. Then from here we can also move onto our next step. We're able to configure and test our device here. This is step three of three. We're able to unzip the connection kit on the device and your ability to load it directly into the device package and say I have a Raspberry Pi that's running Linux and I can unload that kit directly onto the Raspberry Pi. I'm able to deal with execution permissions, make sure we have permission to execute what we need to execute on those devices, and I'm able to run a start script.
>
> **[3:13](https://www.linkedin.com/learning/leveraging-cloud-computing-for-iot/demo-2?u=76281980&t=193)** Basically send a message from the thing will appear below and it's now waiting for a message from the device. From here, what I would be able to do was to go ahead and setup the device and get it on the network and have it configured within AWS as something that's legitimate device that's protected, that's secured, and I'm able to send and receive messages from the device. It's really that easy. You do have to have a rudimentary understanding of what your device operating system needs because you're going to have to go at it at this platform directly into the device native operating system. But other than that, it's a pretty easy thing to do.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [IoT](../../Glossary/Concept/IoT.md) (5), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (3), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2), [Software Development](../../Topics/Software%20Development.md) (1)
> **CLI Commands:** aws (4), python (2), find (1), unzip (1), make (1)
> **Env Vars:** aws (4), stk (4), osx (1)
> **Prerequisites:** configure (3), setup (2)
> **UI Navigation:** go to (1), click on (1), select the (1)
> **Exercise Files:** download the (1), zip file (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 4. Microsoft Azure IoT Hub

[↑ Back to Table of Contents](#table-of-contents)

#### [Design](https://www.linkedin.com/learning/leveraging-cloud-computing-for-iot/design-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/leveraging-cloud-computing-for-iot/design-2?u=76281980&t=0)** - So let's talk about [Microsoft Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) [IoT](../../Glossary/Concept/IoT.md) Hub. So keep in mind that this is a service that allows you to deal with information or data, and it allows you to ingest a ton of information from IoT devices for processing and storing in cloud-based systems, typically on Microsoft Azure. It provides you the ability to build and deploy applications using programmatic interfaces, such as supporting [Node.js](../../Skills/Web%20Development/Node.js.md). It's really focused on moving information, from storage, to device, to processing, and at all points in between. The ability to do so in a reliable way, that's going to provide you with the ability to build and deploy applications. So the sample architecture looks like this. We have the source, or basically the sensor, where the information is generated. This can be a temperature sensor, this could be a heart-rate monitor, this can be anything that actively produces information. Typically, that lives within the confines of a device. The ability to manage the movement of information from the source and target system. It's able to be consumed into the [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) IoT Hub, which is able to process the information, and from there you can deal with different analytical services. Such as, machine learning systems, and [Business Analytics](../../Skills/Data%20Science/Business%20Analytics.md), or [Predictive Analytics](../../Skills/Data%20Science/Predictive%20Analytics.md). And from there, we may put it into a storage system.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [IoT](../../Glossary/Concept/IoT.md) (3), [Microsoft Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (2), [Node.js](../../Skills/Web%20Development/Node.js.md) (1), [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (1), [Business Analytics](../../Skills/Data%20Science/Business%20Analytics.md) (1)
> **Analogies:** such as (2)
> **File Paths:** node.js (1)
> **CLI Commands:** node (1)
> **Definitions:** is a  (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - so (1)

#### [Build](https://www.linkedin.com/learning/leveraging-cloud-computing-for-iot/build-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/leveraging-cloud-computing-for-iot/build-2?u=76281980&t=0)** - So how do we build applications using [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) [IoT](../../Glossary/Concept/IoT.md) Hub? Well, we need to first build applications on the device side. In other words, with whatever operating system and development tool that exists in the particular device that we're supporting, we need to build the application and deploy the application on that particular device. We need to create a twin, or basically the desire and reported properties of the particular device. In essence, everything including our ability to build an app on the device and our ability to define what the device is, it's properties, it's structures, what it is, and what it does. Then we need to build the same thing on the IoT Hub. So we have to create the desired, reported tags for the IoT Hub, in essence the twin of the particular device that we're deploying on. Then also the back-end apps on the IoT Hub. What [Data Processing](../../Skills/Database%20Management/Data%20Processing.md) is occurring, how are we communicating with the device, what role is the centralized server playing in supporting the IoT based system that sits in the particular device, closest to where the data is going to be consumed and produced. So, the sample architecture that we use, we have an IoT Hub, we may have a Default Event Hub, or where events are published to, and the ability to define routes from source to targets. We need to think about where those things are going, or basically the endpoints, and then event hubs connected to the endpoints,
>
> **[1:35](https://www.linkedin.com/learning/leveraging-cloud-computing-for-iot/build-2?u=76281980&t=95)** that are, in essence, able to process events that are processing from the endpoints. Need to deal with the movement of information, so therefore we have to understand how service buses work and queues. And the ability to deal with publish and subscribe systems, where we're putting up topics, having information produced to those topics, and it's being published down to the devices that are interested in seeing them. So the idea here is really to focus on the movement of information. If you look at what the IoT Hub does, and it's ability to define endpoints, it's ability to find message queueing system, it's ability to define events publish-and-subscription-type movement of information, this is all about the efficient movement of information from the devices to the server, typically existing on the [Microsoft Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) Cloud, and then the production of information back down to the devices again.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [IoT](../../Glossary/Concept/IoT.md) (7), [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (1), [Data Processing](../../Skills/Database%20Management/Data%20Processing.md) (1), [Microsoft Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (1)
> **CLI Commands:** find (1)
> **Definitions:** in other words (1)
> **Speakers:** - so (1)

#### [Deploy](https://www.linkedin.com/learning/leveraging-cloud-computing-for-iot/deploy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/leveraging-cloud-computing-for-iot/deploy?u=76281980&t=0)** - [Male Narrator] So, what about the deployment process of an [IoT](../../Glossary/Concept/IoT.md) Hub on [Microsoft Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md)? Well, first we need to create the IoT Hub. And from there, we do a configuration file and upload that file directly to the IoT Hub system. From there, we can set up metrics to monitor the existence of the IoT Hub in Microsoft Azure, IoT. We can set up diagnostics logs, the ability to understand how we're going to configure and manage the system. We can set up security, such as security certificates, such as X.509 certificates, and we can set up any upgrades or updates that need to be done to the IoT Hub. Keep in mind, this is going to be on demand infrastructure, and sitting on a public cloud means that the automatic update should occur automatically. And then also the ability to understand message logging and message tracing, so we know the origin. In many instances, some of these transactions that occur in an IoT environment need to be trackable. And then finally the ability to configure filtering. The ability to understand what we need and not need from the network and configure IP filtering on the various systems to ensure that we're getting the right pieces of the network that we need.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [IoT](../../Glossary/Concept/IoT.md) (7), [Microsoft Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (2)
> **Prerequisites:** set up (4), configure (3)
> **Analogies:** such as (2)
> **Definitions:** means that (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [male (1)

#### [Operate](https://www.linkedin.com/learning/leveraging-cloud-computing-for-iot/operate?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/leveraging-cloud-computing-for-iot/operate?u=76281980&t=0)** - So how do we operate [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) [IoT](../../Glossary/Concept/IoT.md) Hub? Well, keep in mind that we're setting up automation to deal with things such as device management. And we're able to automate some pretty complex things that are occurring within an IoT based application, able to manage devices, typically, many devices at the same time, as well as manage the IoT Hub applications that are in essence communicating with those devices. So keep in mind that the secret of device management is the ability to manage a twin that exists on the centralized cloud server, the IoT Hub based systems. These twins are essence replicants of the applications that are on the devices and therefore we have an idea of how they're configured and what they're doing. So we're able to deal with configurations, or how we're defining the target condition or the desired condition we're looking for, the ability to understand how the target exists, and the ability to deal with monitoring and management so we understand what metrics we're getting off the particular devices. In other words, what's going right and what's going wrong, what needs to be fixed, what's out of whack and are we getting the proper information from the devices to ensure that we're operating the devices effectively. So how do we solve problems doing this? Well, we're able to within the IoT Hub, receive alerts and errors and actually log those errors and alerts.
>
> **[1:35](https://www.linkedin.com/learning/leveraging-cloud-computing-for-iot/operate?u=76281980&t=95)** And by doing that, we're able to externalize these errors to a couple of very significant players. Number one, an automated system that may be able to take action automatically to fix the issue without human involvement. Or number two, an actual human that's able to fix the issue. And by doing this, we're able to keep track of how well things are going over time and be able to understand how we can continuously improve the management, monitoring and continuous operation of our IoT system. In doing so, we're able to do things, such as resolve connectivity issues. we can even look at resource issues, such as servers and storage systems going down, the ability to restart devices, the ability to restart networks. Basically, taking corrective action that could be manually driven or automated in nature.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [IoT](../../Glossary/Concept/IoT.md) (6), [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (1)
> **Analogies:** such as (3)
> **Warnings:** keep in mind (2)
> **Definitions:** in other words (1)
> **Speakers:** - so (1)

#### [Demo](https://www.linkedin.com/learning/leveraging-cloud-computing-for-iot/demo?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/leveraging-cloud-computing-for-iot/demo?u=76281980&t=0)** - [Instructor] So when we get into [Microsoft Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md), we go into the portal account, and this is basically their main sign in screen. And we have some recommendations, we're going to go ahead and bypass on that, and you'll notice here here are the services, you know very much like the AWS services that we saw in the last demo, when you were able to kind of pick out of a menu of everything that's out there. But go ahead and pick all services 'cause we are going to get into [IoT](../../Glossary/Concept/IoT.md), and again, trying to find it is, you have to be a bit detail oriented. So go ahead and type it in up here. And the IoT hub comes up. And go ahead and click on that. And notice, this is fairly straightforward, but it's a bit more technically oriented than the AWS system. But, we can certainly start by creating an IoT hub. And we can pick a subscription. In this case, we'll do pay as you go, resource group, we're going to go ahead and use demo. Region, we're going to go ahead and use US West. But I can use US West two. And the hub name. And this is going to be calling it DemoOneOne. And that's checked, and we should be all set and I'm going to go ahead and review and create. Subscription, pay as you go, resource group, demo, region West US two,
>
> **[1:34](https://www.linkedin.com/learning/leveraging-cloud-computing-for-iot/demo?u=76281980&t=94)** name is DemoOneOne. Pricing and scale tier, S1, number of S1 and IoT hub units, one, messages per day, I'm allowed 400 thousand, cost per month is $25. And this is pretty important because you have to remember that if you're allocating more than you need, you could have a pretty big bill at the end of the year. And so, you need to size your IoT system as to the number of messages you're going to send and receive and how you're going to store those messages. So we'll go ahead and create it and the deployment is under way. So notice there's the deployment that's taking place right now, and you should take just a couple of minutes, that we have the ability to do a few things here in terms of inputs into the hub, outputs out of the hub, and the ability to deal with templates. So, we can leverage templates here as the basic set of resources in terms of how we're going to structure information or schemas that are consumed directly into the hub. We can figure out how the outputs are going to be transmitted, and how we're going to input information directly into the hub. And here we can copy things in the clipboards, and we can set up the SKU name, and we can basically set up the configuration in terms of how we're going to push information directly to our IoT hub. Deployment's still under way, status is created, look at the operational details. Tracking ID, status, created, provisioning state, running, time stamp, 10/23, so far it's been a minute,
>
> **[3:10](https://www.linkedin.com/learning/leveraging-cloud-computing-for-iot/demo?u=76281980&t=190)** subscription resource and the name of the resource. Go ahead and put this away. Okay, we're back, our deployment is complete. And you notice it says [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) IoT hub, start time, and then correlation time. This actually took a bit of time to complete, so probably nine minutes to get done. Deployment details, you can actually look at the operational details to see that. It actually took 15 minutes and 20 seconds from the time I asked to create the hub before the time it was created. So that's kind of interesting. Again, it depends on the amount of resources that are there and you're paying for the hub as it's in production, not necessarily for it's creation. So we can get deployment details, we can actually download them if needed and then here, we can define our inputs as we talked about earlier, outputs, which we haven't defined yet, and different templates we're able to bring up to show how information is produced and consumed directly into the device. And from here we can go to the resource, which will be the last thing we do. And here's our completed resource. So our resource group's demo, location, pay as you go, DemoOne [Azuredevices.net](https://Azuredevices.net), this is the host name that's set up, ready to receive messages. And we have an activity log associated with it. And it just shows the creation of it by the User ID that we have.
>
> **[4:43](https://www.linkedin.com/learning/leveraging-cloud-computing-for-iot/demo?u=76281980&t=283)** We can set up identity access management. We can do tagging. We can diagnose and solve issues. And we can deal with events. And there's a number of settings here as well. Shared access policies, pricing and scale, IP filters, built in endpoints, failover, all these things, it's a fairly comprehensive IoT based system. It allows you to create a hub, which is able to consume and produce information to and from devices, which is really what IoT's all about and certainly how IoT exists in the cloud. So, this is your jumping out point for IoT on Microsoft Azure.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [IoT](../../Glossary/Concept/IoT.md) (11), [Microsoft Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (2), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (1)
> **Prerequisites:** set up (4)
> **CLI Commands:** aws (2), find (1)
> **Env Vars:** aws (2), sku (1)
> **Cross-References:** in the last (1), we talked about (1)
> **UI Navigation:** click on (1), go to (1)
> **URLs:** [azuredevices.net](https://azuredevices.net) (1)
> **Speakers:** - [instructor] (1)


### 5. IoT on the Cloud: Solutions Walkthrough

[↑ Back to Table of Contents](#table-of-contents)

#### [Requirement](https://www.linkedin.com/learning/leveraging-cloud-computing-for-iot/requirement?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/leveraging-cloud-computing-for-iot/requirement?u=76281980&t=0)** - So how do we determine the requirements for building our [IoT](../../Glossary/Concept/IoT.md) system using [Cloud Computing](../../Topics/Cloud%20Computing.md)? For this let's use a case study. This time something called a connected tractor. This tractor has several IoT sensors the it hosts that allows you to track information in terms of what the tractor is doing, information gathered from the crops it's dealing with, and information from the operator. So what do we have to do? Well there's core requirements that we have to deal with. First, we have to deal with the data that's going to be gathered from the tractor. So out of all the sensors that exist on the tractor, such as sensors near the engine, such as sensors near the operator, such as the GPS system that's installed, such as temperature gauges, all kinds of information is being gathered from this particular tractor, this IoT enable tractor. And so we have to define what that data is, where it's coming from, where it needs to go, and how it needs to be structured. So how is the data going to be processed? In other words how are we going to consume the information that's coming off of the IoT sensors on this particular tractor? And how are we going to process that information? And then finally data that's returned to the tractor and how that's being dealt with. For example, we may return information to the tractor in terms of preventive maintenance that needs to occur. So the operator may see these messages come across his or her dashboard and knows that this tractor
>
> **[1:36](https://www.linkedin.com/learning/leveraging-cloud-computing-for-iot/requirement?u=76281980&t=96)** needs to go in for maintenance at a particular time. So again data gathered, information that's falling off the tractor that we're absorbing from the sensors, how we're processing the data, and then how we're returning the results back to the tractor to be processed, either by humans or systems on the tractor. So we have the connected tractor which deals with remote [Data Processing](../../Skills/Database%20Management/Data%20Processing.md) on the cloud. And so in this case we're transmitting some information to a cloud to do the core data processing systems. We're gathering data from the devices, we're processing data locally, and we're dealing with data that exists within the cloud. So keep in mind that we're separating the information systems that exist within the connected tractor, from those that exist within the public cloud provider and the IoT systems leveraged by the public cloud. So the cloud data, we need to have an archive of information or basically storing log data over time. So we're gathering information off of the sensors and we're storing that data in such a way that it's going to be archived for later use. Remote data processing, we're dealing with core systems to facilitate the processing of the information, such as [artificial intelligence](../../Topics/Artificial%20Intelligence%20(AI).md), and machine learning based systems. As well as core analytic services.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [IoT](../../Glossary/Concept/IoT.md) (5), [Data Processing](../../Skills/Database%20Management/Data%20Processing.md) (3), [Cloud Computing](../../Topics/Cloud%20Computing.md) (1), [Artificial intelligence](../../Topics/Artificial%20Intelligence%20(AI).md) (1)
> **Analogies:** such as (5), for example (1)
> **Env Vars:** gps (1)
> **Definitions:** in other words (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - so (1)

#### [Design](https://www.linkedin.com/learning/leveraging-cloud-computing-for-iot/design?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/leveraging-cloud-computing-for-iot/design?u=76281980&t=0)** - [Instructor] Next, let's talk about how we design an [IoT](../../Glossary/Concept/IoT.md) system, leveraging public clouds. So the process that we have basically leverages the foundation of some sort of a dashboard. In other words, how are we going to externalize IOT data to some human? In this case in terms of our connected tractor, we're leveraging tractor data. We're leveraging edge response to the data. Other words, the ability for the tractor itself to respond that's information is coming off itself. Such as an overheating engine and reacting to IOT data that's processing in the cloud. So in other words, we're leveraging different data tiers or different ways in which we're dealing with many of the same data points. We're responding to the data that's local to, in this case, the tractor, IOT data. We're sending some data remotely to the cloud to be processed. And we're, in essence, creating demarkation lines between the information that's process remotely and locally so we facilitate some sort of a processor within the tractor to get things done. So the tractor data typically has GPS data, actions that are associated with it, and different aspects of the information that's being gathered. That's just soil scans looking for hydration of data. Edge response to data deals with immediate issues, such as an overheating engine. Then IOT [Data Processing](../../Skills/Database%20Management/Data%20Processing.md) in the cloud deals with things such as [Predictive Analytics](../../Skills/Data%20Science/Predictive%20Analytics.md), the ability to predict things such as maintenance issues that need to be addressed,
>
> **[1:36](https://www.linkedin.com/learning/leveraging-cloud-computing-for-iot/design?u=76281980&t=96)** as well as operational issues that need to be addressed. So what resources are needed for the design? Well, we need to have local storage some place. So somewhere on the connected tractor has to be somewhere that we can store persisted information. Basically, a hard drive or typically a piece of non-volatile memory where data can reside for a long period of time. We have [Cloud Storage](../../Skills/Cloud%20Computing/Cloud%20Storage.md) as well, or the ability to store information remotely on a public cloud platform, which could be several thousand miles away. And the ability to do analytics on the information. It may integrate machine learning or [artificial intelligence](../../Topics/Artificial%20Intelligence%20(AI).md) systems or predictive analytics. This really gets into to IOT in the public cloud, or the ability to balance data processing that occurs on a device, in this case, the connected tractor, with data processing that occurs in a public cloud environment that just connected to the connected tractor, or connected to the IOT device.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [IoT](../../Glossary/Concept/IoT.md) (7), [Data Processing](../../Skills/Database%20Management/Data%20Processing.md) (3), [Predictive Analytics](../../Skills/Data%20Science/Predictive%20Analytics.md) (2), [Cloud Storage](../../Skills/Cloud%20Computing/Cloud%20Storage.md) (1), [Artificial intelligence](../../Topics/Artificial%20Intelligence%20(AI).md) (1)
> **Env Vars:** iot (7), gps (1)
> **Analogies:** such as (4)
> **Definitions:** in other words (2)
> **Speakers:** - [instructor] (1)

#### [Build](https://www.linkedin.com/learning/leveraging-cloud-computing-for-iot/build?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/leveraging-cloud-computing-for-iot/build?u=76281980&t=0)** - [Instructor] So how do we build the [IoT](../../Glossary/Concept/IoT.md) system connected to the cloud? Well, there's a few things to consider. First is the configuration of the device itself, or the system that's gathering information from the IoT sensors. So that device is typically going to have an operating system, such as [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md), it's going to have some sort of non-volatile storage, and it's going to have some sort of network connectivity. Sometimes [Wi-Fi](../../Glossary/Standard/Wi-Fi.md), sometimes Bluetooth, sometimes directly connected. So keep in mind that this is a computer system unto itself. This could have been a very powerful standalone computer system 10 years ago. However, it's low cost, low price, but very low power relative to the servers that we're going to find in the cloud today. However, it's going to do a very good job because it's purpose built for gathering information from wherever it needs to gather information from, such as this device could be embedded in the connected tractor. So next we need to figure out the cloud configuration, and we have many dimensions here as well. Storage systems, typically [Databases](../../Skills/Software%20Development/Databases.md) that we're dealing with, the ability to define CPU or compute cycles or cores. The ability to deal with special-purpose software systems on the cloud, such as IoT systems, such as IoT Core on AWS. The ability to deal with special-purpose systems for processing data, such as AI and machine learning. The ability to deal with analytical systems,
>
> **[1:37](https://www.linkedin.com/learning/leveraging-cloud-computing-for-iot/build?u=76281980&t=97)** such as [business intelligence](../../Skills/Data%20Science/Business%20Intelligence%20(BI).md), and then also the ability to manage the device that we just defined directly from the cloud-based infrastructure. So, what you pick and the technology you leverage to support these particular approaches really depends on the system you're trying to build. However, you're going to find that your IoT system is typically going to have a minimum of these seven components. So, keep in mind that this is a matter of you pairing a device that's separately configured to a cloud system that's separately configured and your ability to make them work and play well together.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [IoT](../../Glossary/Concept/IoT.md) (5), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (1), [Wi-Fi](../../Glossary/Standard/Wi-Fi.md) (1), [Databases](../../Skills/Software%20Development/Databases.md) (1), [Business intelligence](../../Skills/Data%20Science/Business%20Intelligence%20(BI).md) (1)
> **Analogies:** such as (6)
> **CLI Commands:** find (2), aws (1), make (1)
> **Env Vars:** cpu (1), aws (1)
> **Definitions:** is a  (2)
> **Warnings:** keep in mind (2)
> **Speakers:** - [instructor] (1)

#### [Train](https://www.linkedin.com/learning/leveraging-cloud-computing-for-iot/train?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/leveraging-cloud-computing-for-iot/train?u=76281980&t=0)** - So in aspects of building [IoT](../../Glossary/Concept/IoT.md) systems in the cloud is the ability to train the artificially intelligent portions of this system using data that's abstracted from the IoT devices. So we have to deal with raw data that's coming from the IoT sensors. And typically that data is going to be fairly unstructured and fairly raw in terms of how it's storing information and the type of information that's being produced. We have to turn that raw data in to training data, or some sort of a structured way that we can facilitate the training of machine-learning systems. And the ability to tune the models. So they're adherent or do what we need them to do. Typically they're going to train themselves in one way, shape, or form that may not align to the way in which we want the models to perform behaviors or basically come to conclusions. And the ability to get the right model performance is the process of tuning. Then they have to be tested to ensure that we're getting the right answers to the questions that are being asked. Extremely important with IoT systems considering that typically the questions are simple and they're asked many times. So the basics is that have the model, which is created from the model training data, which is created from the test data. So keep in mind that the test data is typically massive amounts of raw information that comes off an IoT-based sensor. Such as the ability for a connected tractor
>
> **[1:35](https://www.linkedin.com/learning/leveraging-cloud-computing-for-iot/train?u=76281980&t=95)** to report its position and its ability to perform a certain function in that position via its GPS system. Such as tilling soil, such as measuring soil saturation, such as measuring fertilization, things like that. So we need to structure the data in a certain way that it's able to train a particular knowledge-based model. And we do so by converting test data, or raw data, into training data. And the way that's done is really dependent on the AI system that you're engaged with. But typically it's going to be changing the format, changing the structure, and tagging the data with the appropriate tags so we know what the data means. And that feeds into your knowledge model. And that model basically gets smarter based on the training that it has accessible to it. So your ability for your model to do its job properly is your ability to provide that model with quality training data. So it's able to determine patterns and solutions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [IoT](../../Glossary/Concept/IoT.md) (5)
> **Analogies:** such as (4)
> **Env Vars:** gps (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - so (1)

#### [Deployment](https://www.linkedin.com/learning/leveraging-cloud-computing-for-iot/deployment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/leveraging-cloud-computing-for-iot/deployment?u=76281980&t=0)** - [Instructor] So how do we deploy the in state [IoT](../../Glossary/Concept/IoT.md) based system leveraging public cloud into production. So keep in mind that IoT deployment occurs at two levels, at the device level, our IoT level and at the remote level, our public cloud level. So we need to evaluate aspects of the various production systems and where they need to be deployed. So as we're looking to move an IoT based system out into production, we need to understand what it is, what it does and what's changed. We need to make sure that we're monitoring the system and managing the system correctly, making sure that we're able to spot issues that are ongoing in terms of operations, and then change the issues or augment the issues or solve the issues programmatically, and the ability to do so with tools and monitoring systems such as artificially intelligent operations or [AIOps](../../Skills/Artificial%20Intelligence%20(AI)/AIOps.md), or the ability to, not only monitor and manage the environment, in this case our IoT based systems, but the ability to learn proactively in terms of how to do that job better over time by doing the job. The ability to deal with security systems, such as identity access management and encryption, and ultimately, how we're going to deal with policy management, dealing with things such as governance. Then finally, the core analytics system including knowledge management, such as AI and machine learning based systems, [business intelligence](../../Skills/Data%20Science/Business%20Intelligence%20(BI).md) and the ability to leverage massive amounts of data
>
> **[1:34](https://www.linkedin.com/learning/leveraging-cloud-computing-for-iot/deployment?u=76281980&t=94)** in certain meaningful ways, so we can derive value from that data. So how do we do this in a productive way? This is kind of the core problem that you need to solve. Now keep in mind that all of your IoT based deployments are going to be a bit different. They're going to leverage different technologies, different devices, different data points. There's not a lot of consistency between one IoT deployment and another, but you'll find that there are common patterns in terms of how they relate to operations and pushing things into production.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [IoT](../../Glossary/Concept/IoT.md) (7), [AIOps](../../Skills/Artificial%20Intelligence%20(AI)/AIOps.md) (1), [Business intelligence](../../Skills/Data%20Science/Business%20Intelligence%20(BI).md) (1)
> **Analogies:** such as (4)
> **CLI Commands:** make (1), find (1)
> **Warnings:** keep in mind (2)
> **Speakers:** - [instructor] (1)


### 6. Other Considerations

[↑ Back to Table of Contents](#table-of-contents)

#### [Performance](https://www.linkedin.com/learning/leveraging-cloud-computing-for-iot/performance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/leveraging-cloud-computing-for-iot/performance?u=76281980&t=0)** - [Instructor] So keep in mind that the [internet of things](../../Skills/Software%20Development/Internet%20of%20Things%20(IoT).md) has to deal with performance issues, typically ongoing. There's a few reasons for that. Number one, the device has a tendency to be underpowered and the networks have a tendency to be underpowered. So let's look at how we deal with and manage performance. So keep in mind, we have a sensor that is a point that's gathering data. Then ultimately, we have to consume the data from the sensor ongoing. Once the information is consumed, it has to be stored someplace. And then the data needs to be transferred from one place to another, typically from the sensor or the core [IoT](../../Glossary/Concept/IoT.md) device so some sort of remote server. We have to deal with information as it's managed on a remote [Cloud Storage](../../Skills/Cloud%20Computing/Cloud%20Storage.md) server. And then the ability to process that information on the public cloud. Then ultimately, in some instances, respond to that processing. Information that needs to flow back to the censor, and carry on some sort of an adventure of an activity. And what this means is really how it's going to determine overall IoT system performance. So keep in mind that this is a chain of things that occurs where the lowest performing link in the chain is going to determine overall performance. So ultimately, the rules of thumb that we need to consider is the slowest component will basically be
>
> **[1:35](https://www.linkedin.com/learning/leveraging-cloud-computing-for-iot/performance?u=76281980&t=95)** how our performance is going to be determined. So, the reason for that is logical. In other words if the device is where the bottleneck is, then that's the component that needs to be fixed in order to fix the performance issues. We need to consider infrastructure including the network. It's absolutely critical to making performance work. Also, we need to consider how we're going to balance computing. In some instances, we want to put things on the remote cloud based systems, and some things we want to put things on the device in an edge computing kind of scenario. We have to think how we're going to have just enough security to provide the security that's needed. Too much security, such as too much encryption, causes performance issues. And ultimately before we deploy these systems, we need to have benchmarks in testing, and really kind of understand where the issues are in terms of how our overall IoT system performance is going to affect our architecture and where things need to be fixed and changed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [IoT](../../Glossary/Concept/IoT.md) (3), [Internet of things](../../Skills/Software%20Development/Internet%20of%20Things%20(IoT).md) (1), [Cloud Storage](../../Skills/Cloud%20Computing/Cloud%20Storage.md) (1)
> **Definitions:** is a  (2), in other words (1)
> **Warnings:** keep in mind (3)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Cost](https://www.linkedin.com/learning/leveraging-cloud-computing-for-iot/cost?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/leveraging-cloud-computing-for-iot/cost?u=76281980&t=0)** - [Instructor] So now let's talk around the cost of [IoT](../../Glossary/Concept/IoT.md)-based systems on public clouds. So keep in mind, we have a few major costs to consider. Number one, the cost of the device itself. How much does it cost to build, deploy, maintain? Obviously the device is going to have its own operating system and application software. How much does that cost? Ultimately, we have to consider how information's being transferred from the device into the public cloud. And networks for IoT-based systems such as cellular networks can be fairly costly. Then we get into the cloud side of things. How much does it cost us for the cloud resources that we need to stand out such as the IoT-based systems, the [Database Systems](../../Skills/Software%20Development/Database%20Systems.md), security-based systems, things like that? And ultimately, how much does the system cost to operate? And that will get you close to the total IoT cost going forward. So keep in mind that we're combining the cost of the cloud and the cost of the device, as well as the cost of connectivity. And keep in mind, when you deal with [Cloud Services](../../Skills/Cloud%20Computing/Cloud%20Services.md), you're dealing with ongoing, pay-as-you-go services. So the rules of thumb are fairly straightforward. First, leverage edge computing if you can. In other words, you're going to find your cheapest processing, processing that is going to be a sunk cost, something you've already paid for, is going to be on the device itself. So therefore, use edge-based computing as much as you can
>
> **[1:34](https://www.linkedin.com/learning/leveraging-cloud-computing-for-iot/cost?u=76281980&t=94)** or process things on the device as much as you can. Keep in mind, you don't have to send every bit of information back to the remote cloud platform. Transfer only the data that you need to send. Don't store redundant information. Keep in mind that if information is going to be stored in the same place more than once, that's going to cost you money. Make sure you're leveraging systems to do things such as cloud cost governance, your ability to monitor not only the cost that's occurring within your cloud-based system, but the governance of the overall system unto itself. The network, the device, the cloud-based systems. So we know what we're paying now, and we know how certain configuration changes can save us or cost us money. That should be completely visible to you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [IoT](../../Glossary/Concept/IoT.md) (4), [Database Systems](../../Skills/Software%20Development/Database%20Systems.md) (1), [Cloud Services](../../Skills/Cloud%20Computing/Cloud%20Services.md) (1)
> **Warnings:** keep in mind (5)
> **Analogies:** such as (3)
> **CLI Commands:** find (1), make (1)
> **Definitions:** in other words (1)
> **Speakers:** - [instructor] (1)

#### [Operations](https://www.linkedin.com/learning/leveraging-cloud-computing-for-iot/operations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/leveraging-cloud-computing-for-iot/operations?u=76281980&t=0)** - Let's talk about [IoT](../../Glossary/Concept/IoT.md) operations and approaching IoT operations with some best practices in mind. So keep in mind that IoT ops have several components. We have to deal with business continuity and disaster recovery, or basically how we're going to create fail-safe aspects around our IoT system. If our system goes down, are we going to have systems that are able to take over and keep things running? Ultimately your ability to look at different aspects of security and how that relates to operations. Keep in mind that an effective security approach is something that's going to be built synergistically with sec ops, or [Security Operations](../../Skills/Artificial%20Intelligence%20(AI)/Security%20Operations.md), in mind. Ultimately how we're going to keep the network up and running. Keep in mind that with IoT systems we're typically dealing with fairly fragile and expensive networks. Such as cellular networks. And your ability to operate and run them is going to be vital to you keeping your IoT systems up and running. Ultimately how things are going to be managed and leveraging different tools such as AI ops to make sure things are up and running. And then having a various proactive monitoring operation. Ensuring that we're seeing what all things that are happening within the IoT systems. And ensuring that if we're seeing things that are going wrong, we're able to step up and correct them as quickly as we can. And also looking at certain things that are special in terms of their needs, or special purpose. You'll find that IoT operations are typically almost always having special purpose components.
>
> **[1:37](https://www.linkedin.com/learning/leveraging-cloud-computing-for-iot/operations?u=76281980&t=97)** Such as medical systems that have to deal with critical information displays. The ability to manage PII information, or personally identifiable information. So these special requirements require special operational considerations. They need to be built into the process.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [IoT](../../Glossary/Concept/IoT.md) (8), [Security Operations](../../Skills/Artificial%20Intelligence%20(AI)/Security%20Operations.md) (1)
> **Analogies:** such as (3)
> **Warnings:** keep in mind (3)
> **CLI Commands:** make (1), find (1)
> **Env Vars:** pii (1)
> **Speakers:** - let (1)

#### [Security](https://www.linkedin.com/learning/leveraging-cloud-computing-for-iot/security?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/leveraging-cloud-computing-for-iot/security?u=76281980&t=0)** - So let's talk about [IoT](../../Glossary/Concept/IoT.md) security and the special needs of security systems in IoT environments. So when we look at what the core of IoT security is, we have to consider the fact that we're dealing again with the notion of identities. Identities of the devices, identities of the data, identities of the cloud born [Databases](../../Skills/Software%20Development/Databases.md), basically all aspects of the system have some sort of identity that we have to keep track of. And we keep track of identities within directory services, such as LDAP or [Active Directory](../../Skills/Network%20and%20System%20Administration/Active%20Directory.md), or proprietary directories. In other words while we're tracking each identity, and how they're able to interact one to another, and how we're restricting them, or de-restricting them. The ability to deal with encryption services such as hiding information that's flowing from devices, to the back end cloud based systems. The ability to manage those identities with identity and access management systems. Basically configuring and reconfiguring identities. So, based on their authorization, we're letting them see certain devices and data points and not others. Also the ability to manage security at the device level. Keep in mind that these devices may exist remotely, and they may not be guarded full-time, they may not even be within secure infrastructures. So, how are we going to deal with devices with those sorts of exposures? Then also the cloud-based security. The good news here is we have a pretty good well known set of best practices
>
> **[1:34](https://www.linkedin.com/learning/leveraging-cloud-computing-for-iot/security?u=76281980&t=94)** in dealing with public cloud-based security. The bad news is we don't have a lot of existing experience in dealing with cloud-based security as it's tied to IoT based security, and the ability to deal with vulnerabilities that may come from the IoT side of the house. So, going forward you're going to find that a lot of the new security services and the new best practices that are emerging are typically going to be new and unproven.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [IoT](../../Glossary/Concept/IoT.md) (5), [Databases](../../Skills/Software%20Development/Databases.md) (1), [Active Directory](../../Skills/Network%20and%20System%20Administration/Active%20Directory.md) (1)
> **Analogies:** such as (2)
> **CLI Commands:** find (1)
> **Env Vars:** ldap (1)
> **Tools:** notion (1)
> **Definitions:** in other words (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - so (1)

#### [Governance](https://www.linkedin.com/learning/leveraging-cloud-computing-for-iot/governance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/leveraging-cloud-computing-for-iot/governance?u=76281980&t=0)** - [Instructor] So, the main thing to think about [IoT](../../Glossary/Concept/IoT.md) governance as related to IoT security is the fact that governance is about limiting access to certain things, basically putting guardrails around accessing resources, such as a device or a piece of data. Security is around restricting access, so governance is dealing with putting limitations, a granular limitations, around accessing certain resources. Typically security is dealing with outright restriction. So in dealing with IoT governance, we're dealing with policies and policies are the rules that we write that determine how we're going to access a particular resource, such as time of day, such as the ability to limit the performance of that resource for a particular utilization, anything that needs to be placed into production to ensure that we're not abusing the IoT system components. We also have to have links with security so we know that we're not adverting security through some sort of a governance link or some sort of a policy restriction. The ability to govern data, down to the data level, the attribute level, and the ability to deal with network components as well. Ultimately the ability to, in essence, limit access to certain subnets, to certain times of day, ensuring that we're not over-utilizing particular network requirements. The ability to govern software and who's able to use it and what they're able to use it for. And other aspects around this as well.
>
> **[1:33](https://www.linkedin.com/learning/leveraging-cloud-computing-for-iot/governance?u=76281980&t=93)** Now keep in mind that IoT is going to be a fairly diverse set of applications with different special purposes. So I'm sure you're thinking to yourself for IoT, governance would come in handy in terms of putting policy restrictions around accessing different resources, different pieces of data, different APIs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [IoT](../../Glossary/Concept/IoT.md) (6)
> **Analogies:** such as (3)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Addional resources](https://www.linkedin.com/learning/leveraging-cloud-computing-for-iot/addional-resources?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/leveraging-cloud-computing-for-iot/addional-resources?u=76281980&t=0)** - [Narrator] So where do you go to look for other resources in terms of keeping up with [IoT](../../Glossary/Concept/IoT.md) in the cloud? Well, I recommend a few. First, Network World, this is an IDG communication and they have many different articles out there, which follows the emergence and the convergence of IoT in cloud-based computing. So you can find them at [networkworld.com](https://networkworld.com). Next is keep up with my blog that write out on [infoworld.com](https://infoworld.com)., and you'll find that I write and speak a lot around [Cloud Computing](../../Topics/Cloud%20Computing.md) and the use of IoT in the world of cloud computing. So keep an eye on that blog, you'll find that there's a lot of news and commentary in terms of how IoT is growing, different technologies you need to monitor, and ways that you can prove your own IoT developments and deployment capabilities. So what are some of the certifications that are available out there? Well you have [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) Professional Program for the [Internet of Things](../../Skills/Software%20Development/Internet%20of%20Things%20(IoT).md), which is provided to you by Microsoft. They provide a certification program which allows you to understand the basics of IoT and using IoT with cloud-based resources. Another certification would be Cloud Credential Council Internet of Things Foundation certification. Again, this is an independent organization, this not a vendor per say, but they provide a very good certification in terms of your ability to understand how IoT exists in the world of cloud computing and world of IT in general.
>
> **[1:35](https://www.linkedin.com/learning/leveraging-cloud-computing-for-iot/addional-resources?u=76281980&t=95)** Then finally IoT-Incorporated, Certified IoT Professional program. Your ability to in essence go through a rather stringent understanding of how IoT exists in the context of existing IT practices and how you can understand the basics of IoT as well as advance concepts. So what's next with IoT in the cloud for you? Well a couple of things that we're recommending. First, create a device, give it a shot. You'll find that a device such as a Raspberry Pi is less than $30. And you'll find that loading a Raspberry Pi is something that's fairly well documented out there and there's lots of videos and articles that'll teach you how to do it. Setting up an IoT device means that you'll understand the fundamentals of what it takes to set up a connected device that sensors on it that's able to gather data. Next, define the data within your IoT system. So what is it going to look like? The good news is that typically data models and structures that have a tendency to work with IoT systems are fairly simplistic in nature. We're not dealing with fairly complex models. But your ability to set up some sort of a base level data system and have that data system populated with sensor-based data is really your jumping off point. Define a process or how your device is going to communicate with other devices and other systems in the public cloud. Define the function.
>
> **[3:09](https://www.linkedin.com/learning/leveraging-cloud-computing-for-iot/addional-resources?u=76281980&t=189)** Basically, what's going to happen, how is it going to provide value within in a particular business scenario? Then implement device and the cloud side of IoT. So set up the device, set up the device to produce information, set up a data structure to basically store the information, and set up the cloud side of the IoT device to in essence provide the processing for the information or ways in which you're going to process the information. Doing so, creating something simple like this, ultimately you can do this fairly quickly, it's fairly inexpensive, typically under $100 for everything here, and you'll be able to get something in production, and get the experience of building these systems.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [IoT](../../Glossary/Concept/IoT.md) (18), [Cloud Computing](../../Topics/Cloud%20Computing.md) (3), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (2), [Internet of things](../../Skills/Software%20Development/Internet%20of%20Things%20(IoT).md) (2)
> **Prerequisites:** set up (6)
> **CLI Commands:** find (5)
> **Definitions:** is an  (2), means that (1)
> **URLs:** [networkworld.com](https://networkworld.com) (1), [infoworld.com](https://infoworld.com) (1)
> **Env Vars:** idg (1)
> **UI Navigation:** go to (1)
> **Analogies:** such as (1)


## Instructor

- [David Linthicum](../../Instructors/Cloud%20Computing/David%20Linthicum.md)

## Path Context

### In [Digital Transformation for Tech Leaders](../../Paths/Cloud%20Computing/Learning%20Paths/Digital%20Transformation%20for%20Tech%20Leaders.md)
← [IoT Foundations- Standards and Ecosystems](IoT%20Foundations-%20Standards%20and%20Ecosystems.md) | **8 of 15** | [Building and Managing a Cybersecurity Program](Building%20and%20Managing%20a%20Cybersecurity%20Program.md) →

## Appears In

- [Digital Transformation for Tech Leaders](../../Paths/Cloud%20Computing/Learning%20Paths/Digital%20Transformation%20for%20Tech%20Leaders.md)

---

[↑ Back to top](#)