---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: privacy-governance-and-compliance-data-sharing
url: "https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing"
duration_minutes: 57
duration: 57m
level: Intermediate
updated: 3/14/2023
learners: 5161
skills:
  - Data Sharing
  - Data Privacy
  - Privacy
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQGBtJkdep0rMA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1678488324257?e=2147483647&amp;v=beta&amp;t=nc5LaivGoPlvflURcyattYswYMueqTdFzdANrOAtGL4"
linkedin_topic: Cybersecurity
learning_paths:
  - '[[Build a Privacy Program]]'
prev_courses:
  - '[[Privacy, Governance, and Compliance- Data Classification and Inventory]]'
path_nav: '[{"path":"Build a Privacy Program","position":5,"total":5,"prev":"Privacy, Governance, and Compliance- Data Classification and Inventory","next":null}]'
path_count: 1
tags:
  - course
  - topic/security
  - topic/data-science
  - topic/database-management
  - skill/data-sharing
  - skill/data-privacy
  - skill/privacy
status: not-started
created: 2026-04-28
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cybersecurity/Privacy%2C%20Governance%2C%20and%20Compliance-%20Data%20Sharing.md)

![Privacy, Governance, and Compliance: Data Sharing](https://media.licdn.com/dms/image/v2/C4E0DAQGBtJkdep0rMA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1678488324257?e=2147483647&amp;v=beta&amp;t=nc5LaivGoPlvflURcyattYswYMueqTdFzdANrOAtGL4)

# Privacy, Governance, and Compliance: Data Sharing

> Companies that drive revenue and growth based on user engagement also face challenges sharing data. From re-identification to exfiltration to unmanaged access, data sharing presents several privacy risks. In this course, privacy and security executive Nishant Bhajaria helps data-driven innovators understand key technologies and players that are involved in the data sharing space. As part of a "shi

> [LinkedIn Learning](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing) | 57m | Intermediate | 5K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **1. Introduction** (3 videos)
- **2. 1. Data Sharing: Risks and Possibilities** (5 videos)
- **3. 2. Solving for Data Sharing** (4 videos)
- **4. 3. k-Anonymity and Data Sharing** (5 videos)
- **5. 4. l-Diversity** (2 videos)
- **6. 5. The Challenge of Privacy: Your Digital Fingerprint** (3 videos)
- **7. Conclusion** (1 videos)

### 1. Introduction

#### Welcome
> [LinkedIn Learning](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/welcome?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/welcome?u=76281980&t=0)** - Thank you for joining me to learn more about data sharing with privacy controls.
>
> **[0:04](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/welcome?u=76281980&t=4)** My name is Nishant Bhajaria, and I'm a privacy and cybersecurity executive, published author and educator in this space.
>
> **[0:10](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/welcome?u=76281980&t=10)** I also advise venture capitalists, startup founders, think tanks and universities.
>
> **[0:15](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/welcome?u=76281980&t=15)** As a result, I often have opportunities to build tools, processes and standards around privacy and security, and this is often where I can shape the public conversation around privacy in a big way.
>
> **[0:25](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/welcome?u=76281980&t=25)** One such opportunity came to me in the early days of COVID.
>
> **[0:29](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/welcome?u=76281980&t=29)** During those uncertain and dark days in March and April of 2020, the world was looking for ways to reduce the spread of this mysterious disease.
>
> **[0:37](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/welcome?u=76281980&t=37)** To that end, I joined a group of tech workers, privacy activists and academic researchers to build a contact tracing app.
>
> **[0:44](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/welcome?u=76281980&t=44)** The goal was straightforward: help folks communicate to a central database if they tested positive for COVID and inform others who may have been in proximity and therefore at risk of infection.
>
> **[0:54](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/welcome?u=76281980&t=54)** The goal also was to accomplish this without using anybody's identity.
>
> **[0:58](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/welcome?u=76281980&t=58)** We would use device IDs and other location data to notify folks without compromising anybody's privacy.
>
> **[1:05](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/welcome?u=76281980&t=65)** However, we faced two difficulties.
>
> **[1:07](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/welcome?u=76281980&t=67)** First, in our testing stages, we found that our testers were extremely reluctant to share that they had tested positive because they feared that someone would misuse their data.
>
> **[1:17](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/welcome?u=76281980&t=77)** We had to work very hard to overcome that concern.
>
> **[1:20](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/welcome?u=76281980&t=80)** Without people willing to trust us, the vision of suppressing the spread of COVID using bottom up adoption would fail.
>
> **[1:27](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/welcome?u=76281980&t=87)** Our second difficulty came from some governments.
>
> **[1:30](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/welcome?u=76281980&t=90)** In a few cases, some political leaders wanted us to collect additional data about the users of our app.
>
> **[1:37](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/welcome?u=76281980&t=97)** They wanted to use that data to keep an eye on their political opponents.
>
> **[1:42](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/welcome?u=76281980&t=102)** Those of us who work in industry look at data through the lens of building cool features, growing engagement, driving profits, et cetera.
>
> **[1:49](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/welcome?u=76281980&t=109)** So much online activity ranging from personalization, ads, payments and other activities depends upon data sharing.
>
> **[1:57](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/welcome?u=76281980&t=117)** However, as my example shows, there are legitimate concerns and bad actors out there.
>
> **[2:03](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/welcome?u=76281980&t=123)** Add to that the volume of data companies collect and the highly contextual nature of privacy risk, and things get complicated fast.
>
> **[2:10](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/welcome?u=76281980&t=130)** Using all of my learnings and my experience, I will help you share data while optimizing for both trust and compliance.
>
> **[2:19](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/welcome?u=76281980&t=139)** In this course, I will help you build privacy into your data sharing so that you can reap the benefits of data and avoid or at least mitigate the risks.
>
> **[2:27](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/welcome?u=76281980&t=147)** Are you ready?
>
> **[2:28](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/welcome?u=76281980&t=148)** I am.
>
> **[2:29](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/welcome?u=76281980&t=149)** Let's go.

> [!info]- Semantic Content
>
> **Env Vars:** covid (3)
> **Code Keywords:** public (1), let (1)
> **Speakers:** - thank (1)

#### Who this course is for
> [LinkedIn Learning](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/who-this-course-is-for?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/who-this-course-is-for?u=76281980&t=0)** - [Instructor] This course builds on my previous course on privacy, also hosted on LinkedIn.
>
> **[0:04](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/who-this-course-is-for?u=76281980&t=4)** That course was titled, Implementing a Privacy Risk and Assurance Program, and it focused on building a cross-functional privacy program and was fairly introductory in nature.
>
> **[0:13](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/who-this-course-is-for?u=76281980&t=13)** I would strongly recommend that users have some hands-on familiarity with privacy concepts before taking this course.
>
> **[0:19](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/who-this-course-is-for?u=76281980&t=19)** This course also builds on my other course on privacy, also hosted on LinkedIn.
>
> **[0:23](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/who-this-course-is-for?u=76281980&t=23)** That course focused on data classification as part of overall data governance.
>
> **[0:27](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/who-this-course-is-for?u=76281980&t=27)** The classification and inventory are part of a shift left approach to help manage privacy risk at scale.
>
> **[0:33](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/who-this-course-is-for?u=76281980&t=33)** In this course, we will look at not just the left, but the sharing of data that occurs throughout the rest of the data funnel.
>
> **[0:40](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/who-this-course-is-for?u=76281980&t=40)** Modern companies share data with business partners, vendors, governments, et cetera, for the sake of growing the business, engagement, personalization, and regulation, just to name a few.
>
> **[0:50](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/who-this-course-is-for?u=76281980&t=50)** I will educate you on how data sharing actually works, the underlying risks, and how you can reduce those risks using several privacy techniques.
>
> **[0:58](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/who-this-course-is-for?u=76281980&t=58)** This course is aimed at chief information security officers, chief privacy officers, privacy architects, privacy engineers, and just about anyone in charge of making decisions around protecting customer data.
>
> **[1:09](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/who-this-course-is-for?u=76281980&t=69)** I think this course will also be extremely helpful for privacy attorneys, regulators, and policy makers, so that they can understand how privacy is impacted and can be protected when data moves from one domain to another.
>
> **[1:20](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/who-this-course-is-for?u=76281980&t=80)** I also highly recommend this course for journalists, especially the ones who cover security and privacy.
>
> **[1:25](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/who-this-course-is-for?u=76281980&t=85)** This course will help them understand what building technical systems looks like from someone on the inside who has been there and done that.

> [!info]- Semantic Content
>
> **Code Keywords:** protected (1)
> **Speakers:** - [instructor] (1)

#### Data classification as part of data governance
> [LinkedIn Learning](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/data-classification-as-part-of-data-governance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/data-classification-as-part-of-data-governance?u=76281980&t=0)** - Just like data classification privacy of our data sharing is a critical part of data governance.
>
> **[0:06](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/data-classification-as-part-of-data-governance?u=76281980&t=6)** Given how vital data sharing is for the modern economy planning for it strategically and thoughtfully is critical.
>
> **[0:12](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/data-classification-as-part-of-data-governance?u=76281980&t=12)** Let's define data governance from a data sharing lens just like we did for the data classification in my previous course.
>
> **[0:19](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/data-classification-as-part-of-data-governance?u=76281980&t=19)** Data governance refers to the ability to identify, track, and protect customer and business data.
>
> **[0:25](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/data-classification-as-part-of-data-governance?u=76281980&t=25)** It includes risk analysis around the data itself, policies to manage those risks, and tools to enforce those policies consistently at scale.
>
> **[0:34](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/data-classification-as-part-of-data-governance?u=76281980&t=34)** If you recall, I'd mentioned that in the previous course that data classification is the foundational starting point for governance.
>
> **[0:40](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/data-classification-as-part-of-data-governance?u=76281980&t=40)** Without classifying data, you run the risk of inadequate or excessive processes and tools.
>
> **[0:45](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/data-classification-as-part-of-data-governance?u=76281980&t=45)** That risk is even higher when it comes to data sharing.
>
> **[0:49](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/data-classification-as-part-of-data-governance?u=76281980&t=49)** Given the volumes of data, the contextual nature of privacy, and the irreversible nature of data sharing it is key to build data governance into your data sharing strategy.
>
> **[0:58](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/data-classification-as-part-of-data-governance?u=76281980&t=58)** When it comes to data sharing you will need to account for risks like sharing data without consent in higher volumes than you plan for without being able to track who collects that data, without being able to track how it is protected after it leaves your security perimeter.
>
> **[1:12](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/data-classification-as-part-of-data-governance?u=76281980&t=72)** With sound data governance, you can share data for legitimate business needs without causing privacy harms.
>
> **[1:18](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/data-classification-as-part-of-data-governance?u=76281980&t=78)** In that vein, data sharing starts from where data classification and data inventory left off.
>
> **[1:24](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/data-classification-as-part-of-data-governance?u=76281980&t=84)** Data classification helps you map privacy risk to data protection methodologies like access management and encryption.
>
> **[1:31](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/data-classification-as-part-of-data-governance?u=76281980&t=91)** Similarly, you can use that classification to build in techniques like anonymization, obfuscation, coarsening, differential privacy, and others, all of which will help you control the privacy risk by changing the data before it is shared and sometimes as it is being shared.
>
> **[1:47](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/data-classification-as-part-of-data-governance?u=76281980&t=107)** These techniques may vary not just based on the data itself but the tools you use to share their data, who you shared their data with, their maturity and credibility as well as many other factors.
>
> **[1:58](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/data-classification-as-part-of-data-governance?u=76281980&t=118)** In that sense, data sharing benefits from data governance much as data classification creates data governance.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), protected (1)
> **Definitions:** is a  (1), refers to (1)
> **Analogies:** just like (2)
> **Speakers:** - just (1)


### 2. 1. Data Sharing: Risks and Possibilities

#### How data sharing works: The ads use case
> [LinkedIn Learning](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/how-data-sharing-works-the-ads-use-case?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/how-data-sharing-works-the-ads-use-case?u=76281980&t=0)** - [Instructor] Let's look at a concrete example of how data sharing works by looking at online advertising as a use case.
>
> **[0:06](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/how-data-sharing-works-the-ads-use-case?u=76281980&t=6)** You may or may not like online advertising, but given the complexity of the advertising space, it'll help you understand data sharing and its privacy implications in great detail.
>
> **[0:17](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/how-data-sharing-works-the-ads-use-case?u=76281980&t=17)** The Electronic Frontiers Foundation has published research that showed how we get served ads on the internet.
>
> **[0:22](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/how-data-sharing-works-the-ads-use-case?u=76281980&t=22)** This is the most foundational example of data sharing, so let's take a look.
>
> **[0:26](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/how-data-sharing-works-the-ads-use-case?u=76281980&t=26)** Before we do so, let's get some concepts in place.
>
> **[0:29](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/how-data-sharing-works-the-ads-use-case?u=76281980&t=29)** Publisher means a website that you may visit and that can display ads for you.
>
> **[0:33](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/how-data-sharing-works-the-ads-use-case?u=76281980&t=33)** For example, the New York Times website and the New York Times app are both publishers.
>
> **[0:38](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/how-data-sharing-works-the-ads-use-case?u=76281980&t=38)** Supply-side platform or SSP, references an ad network that helps decide which specific advertiser can place an ad on a website so that you as a user may see it and potentially click on it.
>
> **[0:48](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/how-data-sharing-works-the-ads-use-case?u=76281980&t=48)** Demand-side platform or DSP, refers to companies that will work with SSPs to try and display ads to you when you visit a webpage or an app.
>
> **[0:57](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/how-data-sharing-works-the-ads-use-case?u=76281980&t=57)** This image shows how people who own websites and a series of ad networks decide what ads you see and how.
>
> **[1:03](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/how-data-sharing-works-the-ads-use-case?u=76281980&t=63)** Here are some key points.
>
> **[1:05](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/how-data-sharing-works-the-ads-use-case?u=76281980&t=65)** First, the data flows from your browser to the ad networks, also known as supply-side platforms or SSPs.
>
> **[1:10](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/how-data-sharing-works-the-ads-use-case?u=76281980&t=70)** Each SSP then receives your identifying information, usually in the form of a cookie.
>
> **[1:15](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/how-data-sharing-works-the-ads-use-case?u=76281980&t=75)** The SSP then generates a bid request based on what it knows about your past behavior.
>
> **[1:20](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/how-data-sharing-works-the-ads-use-case?u=76281980&t=80)** Next, the SSP sends this bid request to all advertisers who have expressed interest in showing ads.
>
> **[1:27](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/how-data-sharing-works-the-ads-use-case?u=76281980&t=87)** These advertisers collectively make up the demand-side platforms or DSPs, that you see on the left hand side of this diagram.
>
> **[1:34](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/how-data-sharing-works-the-ads-use-case?u=76281980&t=94)** The image on this slide shows what a bid request looks like.
>
> **[1:37](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/how-data-sharing-works-the-ads-use-case?u=76281980&t=97)** As you can see, it contains several pieces of extremely sensitive information.
>
> **[1:41](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/how-data-sharing-works-the-ads-use-case?u=76281980&t=101)** For example, your location, your interests, your device id, et cetera.
>
> **[1:46](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/how-data-sharing-works-the-ads-use-case?u=76281980&t=106)** On the one hand, this information allows companies to decide whether the bid request and the data it contains is worth spending money on to show you an ad.
>
> **[1:53](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/how-data-sharing-works-the-ads-use-case?u=76281980&t=113)** On the other hand, as a privacy leader, I like to remind people that the bid request is not an abstract entity, there is a real person behind that data.
>
> **[2:01](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/how-data-sharing-works-the-ads-use-case?u=76281980&t=121)** That person deserves trust, privacy, and transparency as their data is being shared.
>
> **[2:06](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/how-data-sharing-works-the-ads-use-case?u=76281980&t=126)** Based on the bid request, an advertiser may decide to bid so that they can show you an ad.
>
> **[2:12](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/how-data-sharing-works-the-ads-use-case?u=76281980&t=132)** Based on all of these bids, the SSP then picks a winner.
>
> **[2:15](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/how-data-sharing-works-the-ads-use-case?u=76281980&t=135)** This diagram shows how the winner, the DSP, shows you the ad on the website.
>
> **[2:19](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/how-data-sharing-works-the-ads-use-case?u=76281980&t=139)** Remember, all this movement of data and money happens without most users understanding how the backend actually works.
>
> **[2:26](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/how-data-sharing-works-the-ads-use-case?u=76281980&t=146)** Also, the data is shared before anyone makes a bid or a winner is picked.
>
> **[2:30](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/how-data-sharing-works-the-ads-use-case?u=76281980&t=150)** There is often no guarantee that a company placing a bid really intends to display an ad.
>
> **[2:34](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/how-data-sharing-works-the-ads-use-case?u=76281980&t=154)** It could be that they just want to collect data for a different purpose.
>
> **[2:37](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/how-data-sharing-works-the-ads-use-case?u=76281980&t=157)** This is why data sharing is so powerful.
>
> **[2:40](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/how-data-sharing-works-the-ads-use-case?u=76281980&t=160)** For consumers, this is an area that needs tooling so as to protect your privacy.
>
> **[2:44](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/how-data-sharing-works-the-ads-use-case?u=76281980&t=164)** This is why I built this course, so that any data sharing can be done through privacy preserving techniques.

> [!info]- Semantic Content
>
> **Env Vars:** ssp (5), dsp (2)
> **Code Keywords:** let (3), case. (1), abstract (1)
> **Definitions:** refers to (1), known as (1), is a  (1), is an  (1)
> **Analogies:** for example (2)
> **CLI Commands:** make (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)

#### How data sharing can go wrong
> [LinkedIn Learning](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/how-data-sharing-can-go-wrong?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/how-data-sharing-can-go-wrong?u=76281980&t=0)** - [Instructor] The online advertising example shows the privacy challenges that are caused by data sharing.
>
> **[0:05](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/how-data-sharing-can-go-wrong?u=76281980&t=5)** One such challenge is lack of awareness.
>
> **[0:07](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/how-data-sharing-can-go-wrong?u=76281980&t=7)** An example of this is the sheer amount of data sharing that occurs in the background without the user whose data it is even being aware of that.
>
> **[0:15](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/how-data-sharing-can-go-wrong?u=76281980&t=15)** But the other big challenges are lack of guardrails or having guardrails but them being broken all over the place.
>
> **[0:22](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/how-data-sharing-can-go-wrong?u=76281980&t=22)** For example, caching reduces the burden on backend databases.
>
> **[0:25](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/how-data-sharing-can-go-wrong?u=76281980&t=25)** This means engineers can deploy code without always having to worry about scaling the backend.
>
> **[0:30](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/how-data-sharing-can-go-wrong?u=76281980&t=30)** This is one example of technical guardrails protecting innovators and consumers from bad outcomes.
>
> **[0:36](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/how-data-sharing-can-go-wrong?u=76281980&t=36)** Data sharing, however, can cause serious privacy harms when there are no guardrails.
>
> **[0:41](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/how-data-sharing-can-go-wrong?u=76281980&t=41)** The nature of the data itself, especially when joined with other data that is available on the dark web or social media, can lead to several unforeseen outcomes.
>
> **[0:49](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/how-data-sharing-can-go-wrong?u=76281980&t=49)** Just ask the US military.
>
> **[0:51](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/how-data-sharing-can-go-wrong?u=76281980&t=51)** Strava, the fitness tracking app uses satellites to record its users' runs, bike rides, and other workouts.
>
> **[0:58](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/how-data-sharing-can-go-wrong?u=76281980&t=58)** It also makes many of these routes available for public view on its global heat map, which shows where people around the world go for running and bicycling.
>
> **[1:05](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/how-data-sharing-can-go-wrong?u=76281980&t=65)** This amazingly cool feature which I love ended up creating serious headaches for Strava, the company, and for the US military.
>
> **[1:13](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/how-data-sharing-can-go-wrong?u=76281980&t=73)** So how did this happen?
>
> **[1:15](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/how-data-sharing-can-go-wrong?u=76281980&t=75)** It turns out that the US service members have been recording their runs around the compounds of their military basis.
>
> **[1:20](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/how-data-sharing-can-go-wrong?u=76281980&t=80)** That information made it to the Strava backend servers and then to the Strava heat map and unknowingly revealed the locations of these service members.
>
> **[1:28](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/how-data-sharing-can-go-wrong?u=76281980&t=88)** Users on Twitter figured out that they could identify outlines and activity patterns on US military bases in places like Syria, Afghanistan, and Somalia.
>
> **[1:37](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/how-data-sharing-can-go-wrong?u=76281980&t=97)** The biggest potential threat here was not the base locations themselves which are public in many cases, but what happened in and around the bases themselves.
>
> **[1:46](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/how-data-sharing-can-go-wrong?u=76281980&t=106)** The map showed activity patterns within and around the bases, giving away supply and patrol routes as well as the precise location of facilities like mess halls and living quarters.
>
> **[1:56](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/how-data-sharing-can-go-wrong?u=76281980&t=116)** Further, users could get location specific data allowing them to link map activity to specific user profiles.
>
> **[2:02](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/how-data-sharing-can-go-wrong?u=76281980&t=122)** The result, you could find out which service members were in which locations at a given point in time.
>
> **[2:08](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/how-data-sharing-can-go-wrong?u=76281980&t=128)** I will repeat this.
>
> **[2:09](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/how-data-sharing-can-go-wrong?u=76281980&t=129)** You could now find out which US Service members were in which locations at a given point in time.
>
> **[2:15](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/how-data-sharing-can-go-wrong?u=76281980&t=135)** Strava responded by explaining that all users have the ability to set activities to private so that their activities are not included in the heat map.
>
> **[2:22](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/how-data-sharing-can-go-wrong?u=76281980&t=142)** And that explanation is technically correct, but when it comes to security and privacy, the companies building the products will own the outcomes, not the users themselves.
>
> **[2:32](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/how-data-sharing-can-go-wrong?u=76281980&t=152)** And this is how a company as sophisticated as Strava and an organization as disciplined as the US military were caught by surprise due to privacy and data sharing.
>
> **[2:42](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/how-data-sharing-can-go-wrong?u=76281980&t=162)** As a former product manager, I understand what Strava was thinking when it built the heat map.
>
> **[2:46](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/how-data-sharing-can-go-wrong?u=76281980&t=166)** A heat map creates visibility into adoption and gives users a sense of belonging to a fitness-centric community.
>
> **[2:52](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/how-data-sharing-can-go-wrong?u=76281980&t=172)** In doing so, it creates a positive motivation to run and then log your data.
>
> **[2:56](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/how-data-sharing-can-go-wrong?u=76281980&t=176)** And this was especially true in the early days of social media when sharing was a sense of empowerment.
>
> **[3:01](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/how-data-sharing-can-go-wrong?u=76281980&t=181)** But when data sharing goes wrong, privacy issues become major problems.
>
> **[3:06](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/how-data-sharing-can-go-wrong?u=76281980&t=186)** Next we will look at red flags to watch for when it comes to data sharing that way you may be able to prepare and build better guardrails and mitigate possible privacy risks when it comes to data sharing.

> [!info]- Semantic Content
>
> **Code Keywords:** public (2), this. (1), private (1)
> **CLI Commands:** find (2)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Data sharing risks: A case study
> [LinkedIn Learning](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/data-sharing-risks-a-case-study?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/data-sharing-risks-a-case-study?u=76281980&t=0)** - [Instructor] Given the complex nature of data sharing, let's dive headfirst into a case study.
>
> **[0:05](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/data-sharing-risks-a-case-study?u=76281980&t=5)** I want you to understand that the privacy risks here are not abstract.
>
> **[0:09](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/data-sharing-risks-a-case-study?u=76281980&t=9)** Let's start with some key insights.
>
> **[0:11](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/data-sharing-risks-a-case-study?u=76281980&t=11)** Data sharing is not just about sharing data between one company and another.
>
> **[0:15](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/data-sharing-risks-a-case-study?u=76281980&t=15)** Any time you have collected data from somebody else and then that data leaves your company, as a practical matter you are essentially sharing that information with outside entities.
>
> **[0:24](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/data-sharing-risks-a-case-study?u=76281980&t=24)** Identifying people has become easier than ever before in this age of social media because of publicly available information, data on the dark web obtained by way of breaches, and ML-based tools that help you combine datasets.
>
> **[0:36](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/data-sharing-risks-a-case-study?u=76281980&t=36)** So for privacy, you need to think of data sharing anytime data leaves your company's domain.
>
> **[0:42](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/data-sharing-risks-a-case-study?u=76281980&t=42)** This is also true when you're just an individual broadcasting just your own data via your cell phone.
>
> **[0:47](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/data-sharing-risks-a-case-study?u=76281980&t=47)** Let's look at a specific example.
>
> **[0:49](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/data-sharing-risks-a-case-study?u=76281980&t=49)** The New York Times has done some amazing work as part of their Privacy Project.
>
> **[0:53](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/data-sharing-risks-a-case-study?u=76281980&t=53)** The research was conducted by the Times, and found that based on the apps on your phone and their sharing of realtime location data, it may be possible to track just about anyone.
>
> **[1:02](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/data-sharing-risks-a-case-study?u=76281980&t=62)** Yes, anyone, even the President of the United States.
>
> **[1:06](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/data-sharing-risks-a-case-study?u=76281980&t=66)** The Times Privacy Project obtained a dataset with more than 50 billion location pings from the phones of more than 12 million people in the US.
>
> **[1:14](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/data-sharing-risks-a-case-study?u=76281980&t=74)** According to the Times, this was a random sample from 2016 and 2017, but it took only minutes with the assistance of publicly available information for the Times to de-anonymize location data and track the whereabouts of then President Trump.
>
> **[1:28](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/data-sharing-risks-a-case-study?u=76281980&t=88)** The map and the movements therein will show how location sharing can help track someone.
>
> **[1:33](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/data-sharing-risks-a-case-study?u=76281980&t=93)** This map was populated by location pings from the cell phone of someone in the president's entourage.
>
> **[1:38](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/data-sharing-risks-a-case-study?u=76281980&t=98)** More on that person in a few minutes.
>
> **[1:41](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/data-sharing-risks-a-case-study?u=76281980&t=101)** As you can see, a single dot appeared on the screen representing the precise location of someone in President Trump's entourage at 7:10 AM.
>
> **[1:50](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/data-sharing-risks-a-case-study?u=76281980&t=110)** It lingered around the grounds of the president's Mar-a-Lago Club in Palm Beach, Florida, where the president was staying for about an hour.
>
> **[1:57](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/data-sharing-risks-a-case-study?u=76281980&t=117)** Then the dot was on the move, as you can see on your screen.
>
> **[2:02](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/data-sharing-risks-a-case-study?u=76281980&t=122)** The dot then traveled to the Trump National Golf Club in Jupiter, about 30 minutes north of the hotel, pinging again at 9:24 AM just outside the compound.
>
> **[2:12](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/data-sharing-risks-a-case-study?u=76281980&t=132)** The president was there to play golf with Prime Minister Shinzo Abe of Japan.
>
> **[2:16](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/data-sharing-risks-a-case-study?u=76281980&t=136)** There the dot stayed until at least 1:12 PM, when it moved to the Trump International Golf Club in West Palm Beach, where the world leaders enjoyed a private lunch.
>
> **[2:25](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/data-sharing-risks-a-case-study?u=76281980&t=145)** Let's keep tracking.
>
> **[2:27](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/data-sharing-risks-a-case-study?u=76281980&t=147)** By 5:08 PM, the phone was back at Mar-a-Lago.
>
> **[2:32](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/data-sharing-risks-a-case-study?u=76281980&t=152)** The president had what he called a working dinner with Mr. Abe that night.
>
> **[2:37](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/data-sharing-risks-a-case-study?u=76281980&t=157)** As I've mentioned before, data sharing is effective not just because of what you or your company can share about you.
>
> **[2:42](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/data-sharing-risks-a-case-study?u=76281980&t=162)** That shared data, when combined with data already available elsewhere, is what makes data sharing very effective and potentially very problematic.
>
> **[2:50](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/data-sharing-risks-a-case-study?u=76281980&t=170)** Later in this course, we will look at techniques to make data sharing more privacy friendly while still enabling innovative data analysis.
>
> **[2:58](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/data-sharing-risks-a-case-study?u=76281980&t=178)** For now, let's continue to track President Trump and his entourage.
>
> **[3:02](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/data-sharing-risks-a-case-study?u=76281980&t=182)** The same phone represented by the dot we saw previously pinged a dozen times at the nearby Secret Service field office.
>
> **[3:08](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/data-sharing-risks-a-case-study?u=76281980&t=188)** From computer screens more than 1,000 miles away, Journalists at the New York Times offices could watch this person travel from exclusive areas at Palm Beach International Airport to Mar-a-Lago.
>
> **[3:18](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/data-sharing-risks-a-case-study?u=76281980&t=198)** These movements were accurate to within a few feet of the president's entourage.
>
> **[3:22](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/data-sharing-risks-a-case-study?u=76281980&t=202)** The device owner was easy to trace, revealing the outline of the person's work and life.
>
> **[3:27](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/data-sharing-risks-a-case-study?u=76281980&t=207)** The New York Times believes that the device owner was a Secret Service agent whose home was also clearly identifiable in the data.
>
> **[3:34](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/data-sharing-risks-a-case-study?u=76281980&t=214)** Connecting the home to public deeds revealed the person's name, their spouse's name, exposing even more details about the families.
>
> **[3:41](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/data-sharing-risks-a-case-study?u=76281980&t=221)** Now, this Secret Service agent has company.
>
> **[3:44](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/data-sharing-risks-a-case-study?u=76281980&t=224)** Even a prominent US Senator's National Security Advisor, someone for whom privacy and security are core to their every working day job, was identified and tracked in the data.
>
> **[3:53](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/data-sharing-risks-a-case-study?u=76281980&t=233)** Who shared this data?
>
> **[3:55](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/data-sharing-risks-a-case-study?u=76281980&t=235)** We can be fairly certain that a Secret Service agent protecting the President of the US was not knowingly and intentionally sharing their location real time.
>
> **[4:03](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/data-sharing-risks-a-case-study?u=76281980&t=243)** But this person probably had apps on their phone that shared their data real time.
>
> **[4:09](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/data-sharing-risks-a-case-study?u=76281980&t=249)** And there are yet more examples of data sharing that turned out to be problematic.
>
> **[4:12](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/data-sharing-risks-a-case-study?u=76281980&t=252)** By now, everyone has heard of the Cambridge Analytica issue.
>
> **[4:16](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/data-sharing-risks-a-case-study?u=76281980&t=256)** Here is a quick summary.
>
> **[4:17](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/data-sharing-risks-a-case-study?u=76281980&t=257)** Cambridge Analytica, a political data firm hired by President Trump's 2016 election campaign, gained access to private data on more than 50 million Facebook users.
>
> **[4:27](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/data-sharing-risks-a-case-study?u=76281980&t=267)** The firm offered tools that could identify the personalities of American voters and possibly influence their behavior.
>
> **[4:33](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/data-sharing-risks-a-case-study?u=76281980&t=273)** The data included details on users' identities, friend networks, likes, et cetera.
>
> **[4:38](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/data-sharing-risks-a-case-study?u=76281980&t=278)** The idea was to map personality traits based on what people had liked on Facebook, and then use that information to target audiences with ads.
>
> **[4:46](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/data-sharing-risks-a-case-study?u=76281980&t=286)** But how did Cambridge get this data?
>
> **[4:48](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/data-sharing-risks-a-case-study?u=76281980&t=288)** Researchers in 2014 asked users to take personality surveys and download an app, which scraped some private information from their profiles and those of their friends, activity that Facebook permitted at the time and has since banned.
>
> **[5:02](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/data-sharing-risks-a-case-study?u=76281980&t=302)** The technique had been developed at Cambridge University Psychometrics Center.
>
> **[5:06](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/data-sharing-risks-a-case-study?u=76281980&t=306)** The center declined to work with Cambridge Analytica, but a professor at the university was willing.
>
> **[5:10](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/data-sharing-risks-a-case-study?u=76281980&t=310)** Dr. Kogan, who was the professor, built his own app and in June, 2014, began harvesting data for Cambridge Analytica.
>
> **[5:17](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/data-sharing-risks-a-case-study?u=76281980&t=317)** He ultimately provided over 50 million raw profiles to the firm, said Christopher Wylie, a data expert who oversaw Cambridge Analytica's data harvesting.
>
> **[5:26](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/data-sharing-risks-a-case-study?u=76281980&t=326)** Only about 270,000 users, and these were the ones who participated in the survey, had consented to having their data harvested, though they were all told that it was being used for academic purposes only.
>
> **[5:38](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/data-sharing-risks-a-case-study?u=76281980&t=338)** There are several lessons to learn from that episode, but here are the ones that stand out for me.
>
> **[5:42](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/data-sharing-risks-a-case-study?u=76281980&t=342)** First, once data leaves your company, chances are that you can exert very little control over what happens to it.
>
> **[5:49](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/data-sharing-risks-a-case-study?u=76281980&t=349)** Second, the entities you share data with may not be as transparent and honest as you are.
>
> **[5:54](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/data-sharing-risks-a-case-study?u=76281980&t=354)** Third, whoever you share data with could have more sophisticated abilities than you do to process that data.
>
> **[6:01](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/data-sharing-risks-a-case-study?u=76281980&t=361)** And fourth, it often takes a while to understand the full implications of data sharing, so in this case, no news is not necessarily good news.
>
> **[6:09](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/data-sharing-risks-a-case-study?u=76281980&t=369)** Remember these lessons before you minimize the risk inherent to data sharing.
>
> **[6:13](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/data-sharing-risks-a-case-study?u=76281980&t=373)** And then there is ransomware.
>
> **[6:16](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/data-sharing-risks-a-case-study?u=76281980&t=376)** Ransomware is malicious software that spreads quickly across computer networks and encrypts them, holding sensitive documents hostage until victims decide to pay the hackers.
>
> **[6:24](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/data-sharing-risks-a-case-study?u=76281980&t=384)** Here are some examples.
>
> **[6:26](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/data-sharing-risks-a-case-study?u=76281980&t=386)** In 2019, ransomware hit 103 federal, state, and municipal agencies, 759 healthcare providers, and 86 schools and universities.
>
> **[6:35](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/data-sharing-risks-a-case-study?u=76281980&t=395)** Four US cities were hit with ransomware in December alone.
>
> **[6:39](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/data-sharing-risks-a-case-study?u=76281980&t=399)** After seeing Atlanta spend $2.6 million to restore its systems rather than pay $52,000 in ransom, many officials have decided that it may be cheaper to just pay off the hackers.
>
> **[6:50](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/data-sharing-risks-a-case-study?u=76281980&t=410)** Finally, a ransomware attack cost the City of Baltimore about $18 million.
>
> **[6:55](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/data-sharing-risks-a-case-study?u=76281980&t=415)** These attacks have only increased in frequency as attackers realize how weak cyber defense capabilities are and how much sensitive data companies and governments hold.
>
> **[7:04](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/data-sharing-risks-a-case-study?u=76281980&t=424)** The key lesson here is that when you share data with someone, you are also sharing their security and privacy weaknesses.
>
> **[7:10](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/data-sharing-risks-a-case-study?u=76281980&t=430)** And when those weaknesses are exploited, you will share the consequences.
>
> **[7:14](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/data-sharing-risks-a-case-study?u=76281980&t=434)** For the rest of this course, I will be speaking directly to professionals who design and create these apps.
>
> **[7:19](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/data-sharing-risks-a-case-study?u=76281980&t=439)** The goal is to help them share data in a way that enables innovation but also respects privacy.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), private (3), abstract (1), continue (1), public (1)
> **Ports:** :10 (1), :24 (1), :12 (1), :08 (1)
> **CLI Commands:** make (1)
> **Versions:** 2.6 (1)
> **Cross-References:** later in (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### When data sharing should raise red flags
> [LinkedIn Learning](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/when-data-sharing-should-raise-red-flags?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/when-data-sharing-should-raise-red-flags?u=76281980&t=0)** - Privacy risks that stem from data sharing are never static or constant.
>
> **[0:04](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/when-data-sharing-should-raise-red-flags?u=76281980&t=4)** They could change because of a whole host of reasons.
>
> **[0:07](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/when-data-sharing-should-raise-red-flags?u=76281980&t=7)** The data could change before, during, and sometimes after the sharing process.
>
> **[0:12](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/when-data-sharing-should-raise-red-flags?u=76281980&t=12)** Third party data and other extraneous context could also continuously change.
>
> **[0:16](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/when-data-sharing-should-raise-red-flags?u=76281980&t=16)** The ability to interpret data and identify users using automation may also change.
>
> **[0:21](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/when-data-sharing-should-raise-red-flags?u=76281980&t=21)** In short, privacy risks around data go up or down because of several factors, many of which are hard to predict, detect, and manage.
>
> **[0:30](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/when-data-sharing-should-raise-red-flags?u=76281980&t=30)** But there are red flags you should watch for when it comes to data sharing.
>
> **[0:34](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/when-data-sharing-should-raise-red-flags?u=76281980&t=34)** If you are designing an app and data sharing is a key part of the offering, you should watch for the following red flags.
>
> **[0:39](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/when-data-sharing-should-raise-red-flags?u=76281980&t=39)** First, uniquely identifying individuals without sufficiently anonymizing the data.
>
> **[0:45](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/when-data-sharing-should-raise-red-flags?u=76281980&t=45)** Second, placing individuals at a certain place and a specific time for tracking purposes.
>
> **[0:50](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/when-data-sharing-should-raise-red-flags?u=76281980&t=50)** Next, the absence of consent for and visibility into how data is shared and who with.
>
> **[0:55](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/when-data-sharing-should-raise-red-flags?u=76281980&t=55)** And finally, the ability to identify others connected to the user who may not consent to data sharing, even though the user did.
>
> **[1:03](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/when-data-sharing-should-raise-red-flags?u=76281980&t=63)** In the example of a mobility app, if I were to evaluate a proposal that shared the following, I would raise more than just an eyebrow.
>
> **[1:10](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/when-data-sharing-should-raise-red-flags?u=76281980&t=70)** Real time tracking of a trip from start to finish, precise trip start and stop coordinates.
>
> **[1:16](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/when-data-sharing-should-raise-red-flags?u=76281980&t=76)** Remember, in the Strava example the military service members were identified without any of this data.
>
> **[1:23](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/when-data-sharing-should-raise-red-flags?u=76281980&t=83)** Next, lack of privacy guidelines on the part of the entity receiving this data.
>
> **[1:28](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/when-data-sharing-should-raise-red-flags?u=76281980&t=88)** The reason I'm honing in on data sharing is because there is no way to unshare your data once you share it.
>
> **[1:33](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/when-data-sharing-should-raise-red-flags?u=76281980&t=93)** Who you are and where you are is all someone may need to identify you and then physically reach you.
>
> **[1:39](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/when-data-sharing-should-raise-red-flags?u=76281980&t=99)** This is not just about privacy, folks.
>
> **[1:41](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/when-data-sharing-should-raise-red-flags?u=76281980&t=101)** This is also about safety.
>
> **[1:43](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/when-data-sharing-should-raise-red-flags?u=76281980&t=103)** The aforementioned New York Times research dove deep into location data sharing, and they confirmed that several companies collect and share location data.
>
> **[1:52](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/when-data-sharing-should-raise-red-flags?u=76281980&t=112)** Now, it is impossible to know what any recipient of your data will do with it or how carefully they can protect it.
>
> **[1:57](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/when-data-sharing-should-raise-red-flags?u=76281980&t=117)** It is therefore vital that anyone creating an app that shares data also builds in privacy techniques to anonymize all of that data.
>
> **[2:05](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/when-data-sharing-should-raise-red-flags?u=76281980&t=125)** We will look at all of those techniques in the next few lessons.

> [!info]- Semantic Content
>
> **Code Keywords:** static (1), finally, (1), raise (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Speakers:** - privacy (1)

#### Valid reasons for data sharing
> [LinkedIn Learning](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/valid-reasons-for-data-sharing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/valid-reasons-for-data-sharing?u=76281980&t=0)** - [Instructor] So far, we have seen the challenging side of data sharing.
>
> **[0:03](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/valid-reasons-for-data-sharing?u=76281980&t=3)** However, there are valid reasons as to why an app may want to share data with other entities.
>
> **[0:08](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/valid-reasons-for-data-sharing?u=76281980&t=8)** Some of these reasons have nothing to do with growing your business or even making money.
>
> **[0:12](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/valid-reasons-for-data-sharing?u=76281980&t=12)** If you hail a car using a taxi or ride sharing app, it is possible even likely that the app is sharing at least some data with government authorities for the city that you are in.
>
> **[0:21](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/valid-reasons-for-data-sharing?u=76281980&t=21)** Such data sharing may also occur with cab companies or other transportation providers.
>
> **[0:26](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/valid-reasons-for-data-sharing?u=76281980&t=26)** Next, let's look at some valid reasons behind this data sharing.
>
> **[0:30](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/valid-reasons-for-data-sharing?u=76281980&t=30)** City planners and regulators may need access to data from transport providers to inform and enforce several policy decisions.
>
> **[0:37](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/valid-reasons-for-data-sharing?u=76281980&t=37)** For example, cities need to understand the impact of transport services on traffic, parking, emissions and labor practices.
>
> **[0:43](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/valid-reasons-for-data-sharing?u=76281980&t=43)** Second, municipalities and police may need data to collect per-vehicle fees, enforce parking rules for shared bikes and scooters, and respond to safety or service issues.
>
> **[0:53](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/valid-reasons-for-data-sharing?u=76281980&t=53)** There are some other valid data sharing use cases as well.
>
> **[0:56](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/valid-reasons-for-data-sharing?u=76281980&t=56)** For example, drop-off geolocations are shared to help analyze the impact on parking and traffic flow.
>
> **[1:01](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/valid-reasons-for-data-sharing?u=76281980&t=61)** Trip telemetry data is shared to detect when vehicles enter prohibited zones, so as to issue enforcement citations.
>
> **[1:08](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/valid-reasons-for-data-sharing?u=76281980&t=68)** And finally, vehicle or driver's license numbers are shared to verify that all vehicles are permitted to operate within the city.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), finally, (1)
> **Analogies:** for example (2)
> **Speakers:** - [instructor] (1)


### 3. 2. Solving for Data Sharing

#### Techniques to minimize privacy risk
> [LinkedIn Learning](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/techniques-to-minimize-privacy-risk?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/techniques-to-minimize-privacy-risk?u=76281980&t=0)** - [Instructor] So far we have seen the scale of data sharing and the privacy risks it causes.
>
> **[0:04](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/techniques-to-minimize-privacy-risk?u=76281980&t=4)** The good news here is that there are several best practices available, and techniques available to help make data sharing more privacy focused.
>
> **[0:12](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/techniques-to-minimize-privacy-risk?u=76281980&t=12)** When it comes to data collection, I have built architectures with a key principle, the more precisely identifiable the data, the lower the retention period should be.
>
> **[0:21](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/techniques-to-minimize-privacy-risk?u=76281980&t=21)** I will repeat again, the more precisely identifiable the data, the lower the retention period should be.
>
> **[0:28](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/techniques-to-minimize-privacy-risk?u=76281980&t=28)** We saw this exact principle in action in the data classification course as well, precision and retention should have an inverse correlation.
>
> **[0:35](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/techniques-to-minimize-privacy-risk?u=76281980&t=35)** This theme is apropos for data sharing as well.
>
> **[0:38](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/techniques-to-minimize-privacy-risk?u=76281980&t=38)** So now let's look at some best practices to implement this principle in practice.
>
> **[0:43](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/techniques-to-minimize-privacy-risk?u=76281980&t=43)** As an app designer, you should ask vendors and partners to document their retention and deletion policies for each type of data being collected and shared.
>
> **[0:50](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/techniques-to-minimize-privacy-risk?u=76281980&t=50)** And on this slide, I have some specific recommendations on how to obfuscate the data before sharing.
>
> **[0:56](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/techniques-to-minimize-privacy-risk?u=76281980&t=56)** We will look at some of these concepts in more detail in upcoming slides, but here is the key takeaway once again, the more precisely the data can identify someone, the lower its retention period should be.
>
> **[1:07](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/techniques-to-minimize-privacy-risk?u=76281980&t=67)** Just as there is an inverse correlation between data precision and retention, there should be a similarly inverse relationship between precision and availability.
>
> **[1:15](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/techniques-to-minimize-privacy-risk?u=76281980&t=75)** When you share data with a partner, you should insist that the anonymize data in memory, especially if you share with them data that is very, very granular.
>
> **[1:23](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/techniques-to-minimize-privacy-risk?u=76281980&t=83)** Some techniques include not persisting data used solely for the purposes of aggregation, keeping individual level data in memory, only process data to the disk.
>
> **[1:33](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/techniques-to-minimize-privacy-risk?u=76281980&t=93)** This means that precise data is short-lived, and therefore less accessible, while more aggregated data is available to more people, since it is on disk, where you can also manage access much more proactively and effectively.
>
> **[1:44](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/techniques-to-minimize-privacy-risk?u=76281980&t=104)** Here are some more best practices.
>
> **[1:46](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/techniques-to-minimize-privacy-risk?u=76281980&t=106)** In order to prevent personal identification, you should remove or replace any identifiers that uniquely identify someone.
>
> **[1:53](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/techniques-to-minimize-privacy-risk?u=76281980&t=113)** You will want to do this before sharing the data, or have the vendor do this as soon as they receive the data, and only then complete mapping it at their end.
>
> **[2:01](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/techniques-to-minimize-privacy-risk?u=76281980&t=121)** On this slide, there are also two additional specific bullet points to show you how to do exactly that.
>
> **[2:07](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/techniques-to-minimize-privacy-risk?u=76281980&t=127)** Key tip, you may also have some use cases where you may actually want to identify somebody whose data you have shared, for those use cases, you may want to create another table that links their external identifiers, like passport numbers, for example, to internal identifiers that are customized for your company alone.
>
> **[2:23](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/techniques-to-minimize-privacy-risk?u=76281980&t=143)** However, you should carefully manage access to this linking table so as to prevent any potential privacy issues.
>
> **[2:30](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/techniques-to-minimize-privacy-risk?u=76281980&t=150)** Let's look at an example on the next slide.
>
> **[2:32](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/techniques-to-minimize-privacy-risk?u=76281980&t=152)** In this slide, Table A, on the far left, is the internal table with your user data linked to their passport numbers.
>
> **[2:39](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/techniques-to-minimize-privacy-risk?u=76281980&t=159)** As you know, the passport number uniquely identifies someone without any doubt as to who they are, which is why when you share this user's data externally, you will want to create an ID specific to that vendor or partner.
>
> **[2:51](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/techniques-to-minimize-privacy-risk?u=76281980&t=171)** You will also want to create a new table with the data you wish to share, but linked to this custom internal id, not the passport number.
>
> **[2:58](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/techniques-to-minimize-privacy-risk?u=76281980&t=178)** That way, if this data were ever to leak, it would be much harder to associate this data back to that specific user and their passport number.
>
> **[3:06](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/techniques-to-minimize-privacy-risk?u=76281980&t=186)** This is the table on the far right, AKA Table C.
>
> **[3:09](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/techniques-to-minimize-privacy-risk?u=76281980&t=189)** And the table in the middle, Table B, is the one that links passport numbers to the custom ID.
>
> **[3:14](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/techniques-to-minimize-privacy-risk?u=76281980&t=194)** This is the table that will require tight and ordered access, since this table is the bridge between the full data and the anonymized data.
>
> **[3:21](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/techniques-to-minimize-privacy-risk?u=76281980&t=201)** That way, you can share anonymously and identify internally.
>
> **[3:26](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/techniques-to-minimize-privacy-risk?u=76281980&t=206)** Real world scenarios will probably have a lot more complexity, but this example gives you a logical foundation to build upon.
>
> **[3:32](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/techniques-to-minimize-privacy-risk?u=76281980&t=212)** But do we need a custom ID for each vendor, or can we just create one internal ID for all external sharing?
>
> **[3:38](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/techniques-to-minimize-privacy-risk?u=76281980&t=218)** This debate is a privacy version of soda or pop, and what is the more harmful thing in your diet, fats or sugar?
>
> **[3:44](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/techniques-to-minimize-privacy-risk?u=76281980&t=224)** There is no clear consensus on this issue.
>
> **[3:47](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/techniques-to-minimize-privacy-risk?u=76281980&t=227)** I've been part of these debates for a long time, so let me give you the trade-offs and let you decide what works best in your case.
>
> **[3:53](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/techniques-to-minimize-privacy-risk?u=76281980&t=233)** Choice 1, you could create one internal ID and hash it, this is indicated by the entries on the left hand side.
>
> **[4:00](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/techniques-to-minimize-privacy-risk?u=76281980&t=240)** The goal of hashing is to prevent IDs that are tied to you from appearing in the wild.
>
> **[4:04](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/techniques-to-minimize-privacy-risk?u=76281980&t=244)** Hashing could help ensure that each vendor has individual IDs, so that vendors cannot connect the dots amongst each other, and if there were ever to be a breach, you could identify the vendor that was impacted.
>
> **[4:14](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/techniques-to-minimize-privacy-risk?u=76281980&t=254)** The other upside is that any hashing algorithm with salt may help achieve this goal, although your security teams may have more specific recommendations.
>
> **[4:22](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/techniques-to-minimize-privacy-risk?u=76281980&t=262)** The downside is that you will need to focus on where to store the salt, and identify whether the hashing algorithm is susceptible to brute force or other techniques.
>
> **[4:30](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/techniques-to-minimize-privacy-risk?u=76281980&t=270)** Choice 2, you could create an internal ID per vendor.
>
> **[4:33](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/techniques-to-minimize-privacy-risk?u=76281980&t=273)** This is indicated by the list on the right hand side.
>
> **[4:37](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/techniques-to-minimize-privacy-risk?u=76281980&t=277)** This approach may negate the need to hash the ID and the complexity attached to hashing.
>
> **[4:41](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/techniques-to-minimize-privacy-risk?u=76281980&t=281)** Your security team, again, may have other ideas.
>
> **[4:44](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/techniques-to-minimize-privacy-risk?u=76281980&t=284)** The downside of this approach is you may have too many IDs and too many mapping tables, as a result, you may end up with too much complexity and too little privacy.
>
> **[4:52](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/techniques-to-minimize-privacy-risk?u=76281980&t=292)** The reason behind this is that if anybody can start sharing data by creating a new internal id, you may see promiscuous data sharing with no central ability to regulate the sharing of data.
>
> **[5:02](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/techniques-to-minimize-privacy-risk?u=76281980&t=302)** On your screen right now are even more techniques you can use when it comes to sharing location and time data.
>
> **[5:07](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/techniques-to-minimize-privacy-risk?u=76281980&t=307)** I will let you read these techniques and apply them at your own convenience.
>
> **[5:12](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/techniques-to-minimize-privacy-risk?u=76281980&t=312)** Let me explain how those measures we just looked at could help protect privacy.
>
> **[5:15](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/techniques-to-minimize-privacy-risk?u=76281980&t=315)** Let's assume you have two trips, Trip A starts at 12:22 PM and ends at 1:09 PM, Trip B starts at 12:24 PM and ends at 1:11 PM.
>
> **[5:25](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/techniques-to-minimize-privacy-risk?u=76281980&t=325)** If you need to share this data with a third-party for analysis purposes, it could pose a privacy risk, since there are just two trips, based on the start and end times, and other public data, you may be able to identify who took which trip.
>
> **[5:37](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/techniques-to-minimize-privacy-risk?u=76281980&t=337)** However, with the techniques we saw in the last slide, the two trips could be shared as follows, Trip A starts at 12:30 PM ends at 1:00 PM, Trip B starts at 12:30 PM and ends at 1:00 PM.
>
> **[5:48](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/techniques-to-minimize-privacy-risk?u=76281980&t=348)** This makes the people on the trip less identifiable without hurting the aggregate data analysis.
>
> **[5:53](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/techniques-to-minimize-privacy-risk?u=76281980&t=353)** Now, this example may be a bit too simplistic, but the key message remains the same, avoid blindly sharing data that individually identifies the folks whose data it is.
>
> **[6:02](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/techniques-to-minimize-privacy-risk?u=76281980&t=362)** When I look at data sharing protocols, I ask to make sure that once I share data with a partner, they manage who on their side can access that data.
>
> **[6:10](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/techniques-to-minimize-privacy-risk?u=76281980&t=370)** Here are some techniques I've used.
>
> **[6:12](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/techniques-to-minimize-privacy-risk?u=76281980&t=372)** I ask that the partner be judicious with the availability of their APIs to those who want access to the data.
>
> **[6:18](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/techniques-to-minimize-privacy-risk?u=76281980&t=378)** My teams have often implemented tools to check, on an ongoing basis, if engineers and scientists who have access to sensitive encrypted data still actually need that kind of access.
>
> **[6:27](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/techniques-to-minimize-privacy-risk?u=76281980&t=387)** We routinely sample the data, and check to make sure when it was last decrypted.
>
> **[6:31](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/techniques-to-minimize-privacy-risk?u=76281980&t=391)** Often, we found that teams had requested access to the data, but hardly, or never, use keys to access the data.
>
> **[6:38](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/techniques-to-minimize-privacy-risk?u=76281980&t=398)** In those cases, we swap the keys to check if the engineers ever complained.
>
> **[6:42](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/techniques-to-minimize-privacy-risk?u=76281980&t=402)** 75% of the time, we never heard back and nobody complained.
>
> **[6:46](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/techniques-to-minimize-privacy-risk?u=76281980&t=406)** What this means is that people often think they will need more access to data than they actually do, and even if they don't use the data, their ability to access it poses a privacy risk.
>
> **[6:56](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/techniques-to-minimize-privacy-risk?u=76281980&t=416)** Remember, credentials often get lost.
>
> **[6:58](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/techniques-to-minimize-privacy-risk?u=76281980&t=418)** You will only use all of these techniques and these instincts internally, as well as externally when you share data.
>
> **[7:04](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/techniques-to-minimize-privacy-risk?u=76281980&t=424)** I've shaped privacy principles for many, many organizations as an employee and a consultant, but these two are the closest ones to my heart.
>
> **[7:11](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/techniques-to-minimize-privacy-risk?u=76281980&t=431)** During my early days as a privacy engineer, I followed President Reagan's famous "Trust but verify" principle.
>
> **[7:17](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/techniques-to-minimize-privacy-risk?u=76281980&t=437)** When it comes to data sharing in this world, however, the principle I follow is one cited by Intel Founder Andy Grove, "Only the paranoid survive."

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), require (1), case. (1), public (1)
> **Ports:** :30 (2), :00 (2), :22 (1), :09 (1), :24 (1)
> **CLI Commands:** make (3)
> **Definitions:** is an  (1), means that (1), is a  (1)
> **Env Vars:** aka (1)
> **Cross-References:** in the last (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Anonymization concepts
> [LinkedIn Learning](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/anonymization-concepts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/anonymization-concepts?u=76281980&t=0)** - [Instructor] Continuing on the idea of sharing data while also reducing privacy risks, let's look at anonymization.
>
> **[0:06](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/anonymization-concepts?u=76281980&t=6)** Anonymization is a concept that lets you alter the data so as to reduce the risk of identifying the user, their location, or any other data that could put the user at risk.
>
> **[0:15](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/anonymization-concepts?u=76281980&t=15)** Before looking at specific anonymization techniques, let's look at the different types of data that anonymization can help alter.
>
> **[0:22](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/anonymization-concepts?u=76281980&t=22)** Personal data means any data that identifies or relates to an identifiable individual.
>
> **[0:27](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/anonymization-concepts?u=76281980&t=27)** It includes both direct identifiers and indirect identifiers.
>
> **[0:32](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/anonymization-concepts?u=76281980&t=32)** Direct identifiers means any fields in a dataset that could identify a specific individual and here are some examples on your screen right now.
>
> **[0:40](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/anonymization-concepts?u=76281980&t=40)** Indirect identifiers means any field in a data set that could be combined with other information, so as to identify an individual.
>
> **[0:47](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/anonymization-concepts?u=76281980&t=47)** Some examples are on your slide right now.
>
> **[0:50](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/anonymization-concepts?u=76281980&t=50)** Now, let's look at the different kinds of anonymization that you could choose from, depending upon the privacy risk.
>
> **[0:55](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/anonymization-concepts?u=76281980&t=55)** First, pseudonymization means the process of replacing direct identifiers from a data set with artificial identifiers or pseudonyms, and preventing recombination of such data with the removed direct identifiers through any technical or administrative controls.
>
> **[1:10](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/anonymization-concepts?u=76281980&t=70)** Partial anonymization means the process of A, removing direct identifiers from a data set, and transforming or manipulating indirect identifiers to break the linkage using techniques such as suppression, aggregation, substitution, or noise addition, and B, destroying information that would enable re-identification like encryption keys.
>
> **[1:29](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/anonymization-concepts?u=76281980&t=89)** Singling out refers to the ability to locate a specific individual's record within a larger dataset.
>
> **[1:34](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/anonymization-concepts?u=76281980&t=94)** Linkability refers to the ability to link two records pertaining to the same individual or group of individuals.
>
> **[1:41](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/anonymization-concepts?u=76281980&t=101)** Inference refers to the ability to confidently guess or estimate values using other extraneous information.
>
> **[1:48](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/anonymization-concepts?u=76281980&t=108)** Full anonymization.
>
> **[1:50](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/anonymization-concepts?u=76281980&t=110)** In addition to partial anonymization, you can ensure that the data cannot be linked to databases or additional information outside your company or anywhere in the public domain.
>
> **[1:59](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/anonymization-concepts?u=76281980&t=119)** The risks of singling out, addressability, inference and linkability are all significantly reduced when you have full anonymization.
>
> **[2:06](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/anonymization-concepts?u=76281980&t=126)** Pseudonymization, partial anonymization, and full anonymization techniques allow you to reduce privacy and compliance obligations and the risks associated with the processing of any personal data.
>
> **[2:17](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/anonymization-concepts?u=76281980&t=137)** The chart on this slide will provide you an overview of the three techniques and their implications.
>
> **[2:22](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/anonymization-concepts?u=76281980&t=142)** As you move towards the right of the chart, the privacy risks and compliance obligations reduce, but the level of effort and the cost increase.
>
> **[2:29](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/anonymization-concepts?u=76281980&t=149)** For instance, anonymized data has the least privacy impact but requires a high level of anonymization effort.
>
> **[2:35](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/anonymization-concepts?u=76281980&t=155)** Personal data that directly identifies an individual does not require any anonymization effort, but has the highest privacy risk and security impact and is subject to the most stringent compliance obligations.
>
> **[2:46](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/anonymization-concepts?u=76281980&t=166)** So there are trade-offs here to be made.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), from, (1), public (1), require (1)
> **Definitions:** refers to (3), is a  (1)
> **Analogies:** such as (1), for instance (1)
> **Speakers:** - [instructor] (1)

#### Anonymization techniques
> [LinkedIn Learning](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/anonymization-techniques?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/anonymization-techniques?u=76281980&t=0)** - [Teacher] Different anonymization techniques and practices exist with different degrees of success.
>
> **[0:05](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/anonymization-techniques?u=76281980&t=5)** Let's look at the most popular anonymization techniques and the potential disadvantages so that you can make informed trade off decisions.
>
> **[0:12](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/anonymization-techniques?u=76281980&t=12)** The techniques we look at are suppression, substitution, noise addition, permutation, and aggregation.
>
> **[0:18](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/anonymization-techniques?u=76281980&t=18)** First suppression.
>
> **[0:20](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/anonymization-techniques?u=76281980&t=20)** Suppression is the most basic anonymization technique and involves removal or withholding of certain data values.
>
> **[0:26](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/anonymization-techniques?u=76281980&t=26)** Suppression is mostly used for direct identifiers.
>
> **[0:29](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/anonymization-techniques?u=76281980&t=29)** Suppression has limitations.
>
> **[0:31](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/anonymization-techniques?u=76281980&t=31)** It is unlikely on its own to lead to full anonymization as the remaining indirect identifiers could allow for the identification of the individual to whom the data belongs.
>
> **[0:40](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/anonymization-techniques?u=76281980&t=40)** Substitution is a technique that removes the association between the individual and the personal data by replacing identifiable data values with values that could have been randomly drawn from large databases, for example, real names and addresses could be replaced by false names and addresses.
>
> **[0:56](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/anonymization-techniques?u=76281980&t=56)** Again, this has limitations as well.
>
> **[0:58](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/anonymization-techniques?u=76281980&t=58)** It is unlikely on its own to lead to full anonymization and may not always be possible to implement at scale.
>
> **[1:04](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/anonymization-techniques?u=76281980&t=64)** Noise addition is a technique that entails the addition of random noise to certain data in order to disguise its true value.
>
> **[1:10](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/anonymization-techniques?u=76281980&t=70)** This will ensure that the aggregate result will still be meaningful but individual records will not be accurate.
>
> **[1:15](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/anonymization-techniques?u=76281980&t=75)** Let's look at some noise addition examples.
>
> **[1:21](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/anonymization-techniques?u=76281980&t=81)** You could add or subtract or random number of centimeters or inches to the height within a defined range so that you can change the values but not make them meaningless either.
>
> **[1:29](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/anonymization-techniques?u=76281980&t=89)** You could alter a postal code to a randomly selected nearby postal code to disguise the code, but preserve the general location so you could preserve or shift the code by say, 0.5 kilometers or more.
>
> **[1:37](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/anonymization-techniques?u=76281980&t=97)** Like every other technique we have seen so far, noise addition has limitations as well.
>
> **[1:42](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/anonymization-techniques?u=76281980&t=102)** It could distort the information contained in the dataset so depending upon the analysis that you conduct, it may not be the most appropriate technique.
>
> **[1:49](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/anonymization-techniques?u=76281980&t=109)** It reduces the risk of linkability and inference attacks but the possibility that an individual's data could be singled out or linked with other dataset remains.
>
> **[1:57](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/anonymization-techniques?u=76281980&t=117)** So you should consider noise addition as a complimentary technique without thinking of it as a one size fits all and catchall.
>
> **[2:04](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/anonymization-techniques?u=76281980&t=124)** Third, if the noise is not semantically viable, that is it is out of scale and does not respect the logic of the attributes and the data itself, then any attacker having access to the database could be able to filter out the noise and regenerate the missing entries, that is reverse engineering is possible.
>
> **[2:19](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/anonymization-techniques?u=76281980&t=139)** And finally, if the data set is too sparse, it can remain possible to link the noisy data entries with some external data source.
>
> **[2:26](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/anonymization-techniques?u=76281980&t=146)** Permutation.
>
> **[2:28](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/anonymization-techniques?u=76281980&t=148)** This technique involves shuffling values of data attributes in a table so that some of them are artificially linked to different individuals.
>
> **[2:36](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/anonymization-techniques?u=76281980&t=156)** Permutation allows for the retention of the exact distribution of each attribute within a data set by preserving the range and distribution but removing the correlations between the values and the individuals themselves.
>
> **[2:46](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/anonymization-techniques?u=76281980&t=166)** There are limitations to permutations as well.
>
> **[2:48](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/anonymization-techniques?u=76281980&t=168)** Permutation must be combined with some other anonymization techniques, such as suppression.
>
> **[2:53](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/anonymization-techniques?u=76281980&t=173)** Instances may be drawn from the dataset, especially if attributes can be correlated or have strong logical partnerships.
>
> **[3:00](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/anonymization-techniques?u=76281980&t=180)** Permutation attributes randomly may not provide strong guarantees.
>
> **[3:03](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/anonymization-techniques?u=76281980&t=183)** For example, if you have a data set of 30 males that list the year of birth, job, and income in a company, permutation of each individual's income can still be logically linked to the job, because there are only so many different job types or based on an age type, the CEO might be older than an employee who just graduated from college.
>
> **[3:19](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/anonymization-techniques?u=76281980&t=199)** If you select a wrong attribute that is one that is not sensitive or not risky, you will not meaningfully reduce the risk of identification.
>
> **[3:25](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/anonymization-techniques?u=76281980&t=205)** Aggregation is a technique that generalizes values where granularity is not needed, and there are examples available on your screen for you to look at and dive deep into.
>
> **[3:35](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/anonymization-techniques?u=76281980&t=215)** Like every other technique we have seen so far, aggregation has limitations as well.
>
> **[3:40](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/anonymization-techniques?u=76281980&t=220)** Simple aggregation on its own does not guarantee full anonymization and only produces partially anonymized data.
>
> **[3:47](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/anonymization-techniques?u=76281980&t=227)** Additional techniques could be necessary to ensure full anonymization, such as k-anonymity, which we will dive into a bit later.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), finally, (1), type, (1)
> **Analogies:** for example (2), such as (2)
> **Definitions:** is a  (3)
> **CLI Commands:** make (2)
> **Env Vars:** ceo (1)
> **Versions:** 0.5 (1)
> **Speakers:** - [teacher] (1)

#### Encryption
> [LinkedIn Learning](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/encryption?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/encryption?u=76281980&t=0)** - As we have seen already, privacy and security are different, but very closely connected.
>
> **[0:05](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/encryption?u=76281980&t=5)** Security tools protect against external attacks but they also protect data from internal misuse.
>
> **[0:11](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/encryption?u=76281980&t=11)** This is where security tools can help enable privacy.
>
> **[0:14](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/encryption?u=76281980&t=14)** This is also a useful insight to have in an age of lean budgets.
>
> **[0:17](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/encryption?u=76281980&t=17)** Reusing security tools whenever possible could be good business as well as a way to entrench those tools in the business for a deeper cultural impact.
>
> **[0:26](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/encryption?u=76281980&t=26)** One such tool is encryption.
>
> **[0:29](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/encryption?u=76281980&t=29)** Think of encryption as a building block for privacy.
>
> **[0:31](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/encryption?u=76281980&t=31)** There are four points to remember here.
>
> **[0:33](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/encryption?u=76281980&t=33)** Data can be encrypted so that only those who are authorized can read the data.
>
> **[0:37](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/encryption?u=76281980&t=37)** Everybody else will see random numbers, or some other nonsense.
>
> **[0:41](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/encryption?u=76281980&t=41)** Second, data can be protected against any kind of change, preserving integrity.
>
> **[0:45](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/encryption?u=76281980&t=45)** Data can be authenticated so you can tell for certain who created it.
>
> **[0:49](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/encryption?u=76281980&t=49)** And finally, the creator of data cannot deny having created it.
>
> **[0:53](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/encryption?u=76281980&t=53)** So you have security and privacy in a very meaningful fashion made possible by encryption.
>
> **[0:58](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/encryption?u=76281980&t=58)** You can think of encryption as access control for privacy, and this image, I think speaks for itself.
>
> **[1:04](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/encryption?u=76281980&t=64)** Here are some encryption best practices.
>
> **[1:06](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/encryption?u=76281980&t=66)** First, a good encryption algorithm, when properly applied, can be meaningful when it comes to privacy as well.
>
> **[1:12](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/encryption?u=76281980&t=72)** Protection of the secret key is critical.
>
> **[1:15](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/encryption?u=76281980&t=75)** Symmetric keys should never be reused.
>
> **[1:18](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/encryption?u=76281980&t=78)** And finally, if there is a public key, you should distribute it in a certificate so as to prevent, or at least make hard, any interception attacks.
>
> **[1:26](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/encryption?u=76281980&t=86)** Cryptography helps protect your users from privacy harm because it helps achieve authentication.
>
> **[1:31](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/encryption?u=76281980&t=91)** Let's look at that in a bit more detail.
>
> **[1:33](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/encryption?u=76281980&t=93)** You can tell for certain who created data.
>
> **[1:36](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/encryption?u=76281980&t=96)** Encryption protects privacy by establishing trust in any data that you receive.
>
> **[1:40](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/encryption?u=76281980&t=100)** By authenticating the user, you can identify who the user is and protect them and all other users of the system by preventing any kind of fraudulent activity.
>
> **[1:48](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/encryption?u=76281980&t=108)** Encryption also enables non-repudiation.
>
> **[1:51](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/encryption?u=76281980&t=111)** Data creators cannot deny that they created the data and are therefore responsible for it.
>
> **[1:56](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/encryption?u=76281980&t=116)** If any forgery occurs, there could be irreversible privacy harm because the forger has taken someone's reputation without permission.
>
> **[2:03](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/encryption?u=76281980&t=123)** When using encryption to minimize privacy risk during data sharing, you should avoid making any erroneous assumptions, and therefore fatal mistakes.
>
> **[2:11](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/encryption?u=76281980&t=131)** Remember, before sharing data over cryptographically protected channels, remember three things.
>
> **[2:17](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/encryption?u=76281980&t=137)** A lot of things can, do, and often will go wrong.
>
> **[2:20](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/encryption?u=76281980&t=140)** Second, cryptography intercepting proxies do exist and could be used to mine data.
>
> **[2:26](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/encryption?u=76281980&t=146)** And finally, you should share only the minimum information required to get the job done.
>
> **[2:32](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/encryption?u=76281980&t=152)** Another example, cryptography protects you against policy problems.
>
> **[2:36](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/encryption?u=76281980&t=156)** For example, errors in architecture, policy, or coding, could still reveal secrets.
>
> **[2:41](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/encryption?u=76281980&t=161)** Your partners may not be completely reliable.
>
> **[2:44](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/encryption?u=76281980&t=164)** And third, partners may have lax internal controls in their systems.
>
> **[2:49](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/encryption?u=76281980&t=169)** Finally, cryptography could be slow at times, so you should expect some pushback from executives and other engineers.
>
> **[2:55](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/encryption?u=76281980&t=175)** You will need to make a strong business case as well as apply cryptography thoughtfully so as to avoid another wasteful lose-lose battle between data privacy on the one hand, and business efficiency on the other hand.
>
> **[3:08](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/encryption?u=76281980&t=188)** While encryption can help you protect your data, what you really need is a comprehensive data protection strategy.
>
> **[3:13](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/encryption?u=76281980&t=193)** This is important since outside of accidental misuse, each time somebody uses data inappropriately, such actions tend to have very specific goals.
>
> **[3:22](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/encryption?u=76281980&t=202)** Your strategy should be aimed at thwarting those goals.
>
> **[3:25](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/encryption?u=76281980&t=205)** The question is, does the partner you want to share data with have such a strategy?
>
> **[3:31](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/encryption?u=76281980&t=211)** As an example, let us look at the data obtained from two breaches, the first at the Office of Personnel Management or OPM, and the second at Equifax.
>
> **[3:39](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/encryption?u=76281980&t=219)** Let's first look at the OPM breach.
>
> **[3:42](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/encryption?u=76281980&t=222)** In April, 2015, IT staffers within the US Office of Personnel Management or OPM, the agency that manages the government's civilian workforce, discovered that some of which personnel files had been hacked.
>
> **[3:54](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/encryption?u=76281980&t=234)** Among the sensitive data that was exfiltrated and stolen were millions of SF-86 forms which contain extremely personal information gathered from background checks for people seeking government security clearances along with records of millions of people's fingerprints.
>
> **[4:08](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/encryption?u=76281980&t=248)** So if you could get ahold of this data, you could find out intimate secrets about government employees in the US who have security clearances.
>
> **[4:16](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/encryption?u=76281980&t=256)** Now let's look at the Equifax breach.
>
> **[4:19](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/encryption?u=76281980&t=259)** Equifax is one of the three largest consumer credit reporting agencies in the US, and they announced in September, 2017 that their systems had been breached and the sensitive personal data of 148 million Americans had been compromised.
>
> **[4:32](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/encryption?u=76281980&t=272)** I am one of those Americans.
>
> **[4:34](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/encryption?u=76281980&t=274)** That data included names, home addresses, phone numbers, dates of birth, social security numbers, driver's license numbers, and other data.
>
> **[4:42](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/encryption?u=76281980&t=282)** The credit card numbers of approximately 209,000 consumers were also breached.
>
> **[4:47](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/encryption?u=76281980&t=287)** So if you could get ahold of this data, you could find out which Americans have debts, and therefore could be vulnerable to blackmail.
>
> **[4:54](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/encryption?u=76281980&t=294)** Now, if you combine the data from these two breaches at the same time, you could have information about who has government clearances and who from that list has financial situations that could leave them vulnerable to blackmail.
>
> **[5:06](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/encryption?u=76281980&t=306)** This is how data leaving a company could become a national security risk.
>
> **[5:10](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/encryption?u=76281980&t=310)** So encryption could be a key solution to reduce data sharing risks, but not a tool you can blindly and complacently depend upon in all situations.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (4), let (4), protected (2), public (1)
> **CLI Commands:** make (2), find (2)
> **Env Vars:** opm (3)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Prerequisites:** required to (1)
> **Speakers:** - as (1)


### 4. 3. k-Anonymity and Data Sharing

#### What is k-anonymity?
> [LinkedIn Learning](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/what-is-k-anonymity?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/what-is-k-anonymity?u=76281980&t=0)** - Let's discuss k-Anonymity.
>
> **[0:02](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/what-is-k-anonymity?u=76281980&t=2)** The most exhaustive work on this topic I've read comes from Professor Latanya Sweeney, but for this course, here is a very intuitive explanation from Carnegie Mellon University.
>
> **[0:11](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/what-is-k-anonymity?u=76281980&t=11)** In k-Anonymity attributes are suppressed until each row is identical with at least k-1 other rows.
>
> **[0:18](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/what-is-k-anonymity?u=76281980&t=18)** At this point, the database is set to be k-anonymous.
>
> **[0:21](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/what-is-k-anonymity?u=76281980&t=21)** K-Anonymity thus prevents definitive database linkages.
>
> **[0:25](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/what-is-k-anonymity?u=76281980&t=25)** At worst, the data release narrows down an individual entry to a group of k individuals.
>
> **[0:31](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/what-is-k-anonymity?u=76281980&t=31)** K-Anonymity is intuitive to implement used by Google in their Ad API and provides a guarantee that you are one among a minimum cohort rather than being uniquely identifiable across the board.
>
> **[0:42](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/what-is-k-anonymity?u=76281980&t=42)** This is a raw table before we apply k-Anonymity.
>
> **[0:45](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/what-is-k-anonymity?u=76281980&t=45)** The goal would be to ensure that each individual in this table is less identifiable once we apply k-Anonymity.
>
> **[0:52](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/what-is-k-anonymity?u=76281980&t=52)** In this table, you can see how by changing just a few fields, we have ensured that each of the four rows is now less unique.
>
> **[0:58](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/what-is-k-anonymity?u=76281980&t=58)** You obtain a k-Anonymity value of 2 since for each row, there is one more like it.
>
> **[1:03](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/what-is-k-anonymity?u=76281980&t=63)** This is similar to what we did by rounding off the pickup and drop-off details a few slides ago.
>
> **[1:08](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/what-is-k-anonymity?u=76281980&t=68)** K-Anonymity is powerful since it gives you a way to measure privacy impact before you share data.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2)
> **Code Keywords:** let (1)
> **Env Vars:** api (1)
> **Analogies:** similar to (1)
> **Speakers:** - let (1)

#### k-Anonymity: A use case
> [LinkedIn Learning](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/k-anonymity-a-use-case?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/k-anonymity-a-use-case?u=76281980&t=0)** - [Instructor] In order to see k-Anonymity in action, I had one of my colleagues run an experiment of 40,000 rides in the city of Boston.
>
> **[0:07](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/k-anonymity-a-use-case?u=76281980&t=7)** I discussed this at length during my talk at the QCon Engineering Conference in San Francisco in 2019 where I spoke on behalf of my current employer.
>
> **[0:15](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/k-anonymity-a-use-case?u=76281980&t=15)** The link to that talk is on this slide.
>
> **[0:18](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/k-anonymity-a-use-case?u=76281980&t=18)** The goal was to get a sense of how we can reduce the uniqueness of each ride by coarsening the data.
>
> **[0:23](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/k-anonymity-a-use-case?u=76281980&t=23)** In this case, we chose to coarsen location data by changing the number of GPS points on the location data itself.
>
> **[0:30](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/k-anonymity-a-use-case?u=76281980&t=30)** Remember, this was not an exhaustive study, so you may get different outcomes for your samples.

> [!info]- Semantic Content
>
> **Code Keywords:** case, (1)
> **Env Vars:** gps (1)
> **Speakers:** - [instructor] (1)

#### k-Anonymity: With very coarse data
> [LinkedIn Learning](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/k-anonymity-with-very-coarse-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/k-anonymity-with-very-coarse-data?u=76281980&t=0)** - [Instructor] In order for us to understand how k-anonymity actually works, we will look at multiple examples.
>
> **[0:05](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/k-anonymity-with-very-coarse-data?u=76281980&t=5)** In this table, let's first make sure we understand what the data represents.
>
> **[0:09](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/k-anonymity-with-very-coarse-data?u=76281980&t=9)** The row titles represent the number of GPS decimal points in the location data while the column titles represent the k-anonymity value.
>
> **[0:17](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/k-anonymity-with-very-coarse-data?u=76281980&t=17)** The more GPS points you have in location data, the more precise it will be.
>
> **[0:21](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/k-anonymity-with-very-coarse-data?u=76281980&t=21)** Correspondingly, the higher the k-anonymity value, the more private the data.
>
> **[0:26](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/k-anonymity-with-very-coarse-data?u=76281980&t=26)** By way of additional context, for two trips to have the same value in this example they would have to have the same pickup and drop off points.
>
> **[0:34](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/k-anonymity-with-very-coarse-data?u=76281980&t=34)** In the first view of this data, I will focus on extremely course data intended to provide maximal privacy.
>
> **[0:40](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/k-anonymity-with-very-coarse-data?u=76281980&t=40)** When you share GPS location data with zero decimal points you have rendered the users less identifiable with high k-anonymity values.
>
> **[0:48](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/k-anonymity-with-very-coarse-data?u=76281980&t=48)** Let's first focus on the top two rows on the table where I have just highlighted the text.
>
> **[0:53](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/k-anonymity-with-very-coarse-data?u=76281980&t=53)** In this case, you will find that for all users, that is 100% of users, you can find at least one other trip giving you a k-anonymity value of two, four other trips giving you a k-anonymity value of five, all the way through 999 other trips giving you a k-anonymity value of 1000 users with the same value.
>
> **[1:12](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/k-anonymity-with-very-coarse-data?u=76281980&t=72)** The reason this happens is that a lot of different pickup and drop off locations have now been made equal because of GPS location data rounding.
>
> **[1:19](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/k-anonymity-with-very-coarse-data?u=76281980&t=79)** Just as the 11:21 am pickup time and the 11:22 am pickup time a few slides ago became 11:30 am pickup times because of time rounding.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), private (1), case, (1)
> **Env Vars:** gps (4)
> **CLI Commands:** find (2), make (1)
> **Ports:** :21 (1), :22 (1), :30 (1)
> **Speakers:** - [instructor] (1)

#### k-Anonymity: With very granular data
> [LinkedIn Learning](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/k-anonymity-with-very-granular-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/k-anonymity-with-very-granular-data?u=76281980&t=0)** - [Instructor] Let's now look at the same data through a very different lens to understand k-Anonymity even better.
>
> **[0:05](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/k-anonymity-with-very-granular-data?u=76281980&t=5)** In the second view of this data, I will focus on very precise location data intended to provide very high quality but very little privacy.
>
> **[0:13](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/k-anonymity-with-very-granular-data?u=76281980&t=13)** The more decimal points you have in the GPS coordinates, the more precise the location of the user will be and therefore, the more identifiable the user is.
>
> **[0:21](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/k-anonymity-with-very-granular-data?u=76281980&t=21)** Please focus on the bottom two rows in the table.
>
> **[0:24](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/k-anonymity-with-very-granular-data?u=76281980&t=24)** I will highlight those rows for easy access.
>
> **[0:28](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/k-anonymity-with-very-granular-data?u=76281980&t=28)** As you can see, I've now highlighted the bottom two rows.
>
> **[0:31](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/k-anonymity-with-very-granular-data?u=76281980&t=31)** In this case, the k-Anonymity is lower and that is because the number of users who share the same GPS location is lower.
>
> **[0:37](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/k-anonymity-with-very-granular-data?u=76281980&t=37)** Therefore, as you go lower in the table, the k-Anonymity values are lower and decrease even further as you go from left to right.
>
> **[0:44](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/k-anonymity-with-very-granular-data?u=76281980&t=44)** For example, when you display five GPS decimal points, 68.4% of users have a k-Anonymity value of two.
>
> **[0:51](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/k-anonymity-with-very-granular-data?u=76281980&t=51)** That is for 68.4% of the users, you can find one other user with the same trip values.
>
> **[0:57](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/k-anonymity-with-very-granular-data?u=76281980&t=57)** If we were to shave off one decimal point and offer GPS locations with four decimal points, we now see that for 97.4% of users, you can find a similar ride, so that you have a k-Anonymity value of two for 97.4% of users.
>
> **[1:12](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/k-anonymity-with-very-granular-data?u=76281980&t=72)** As we have seen before, the less precise the data, the more anonymity you can provide for users.
>
> **[1:17](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/k-anonymity-with-very-granular-data?u=76281980&t=77)** On the far right, if we were to provide five GPS decimal points and wish to provide a k-Anonymity value of 1,000, that is find 999 other similar rides for someone, we can only do so for 0.9% of riders.
>
> **[1:32](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/k-anonymity-with-very-granular-data?u=76281980&t=92)** As a result, there is very little anonymity given the very precise nature of the location data in this use case.

> [!info]- Semantic Content
>
> **Env Vars:** gps (5)
> **Versions:** 68.4 (2), 97.4 (2), 0.9 (1)
> **CLI Commands:** find (3)
> **Code Keywords:** let (1), case, (1), case. (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### k-Anonymity: Industry best practice
> [LinkedIn Learning](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/k-anonymity-industry-best-practice?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/k-anonymity-industry-best-practice?u=76281980&t=0)** - [Instructor] In the final view of this data, I will focus on k-anonymity value of five, since that is widely accepted as a best practice across the industry.
>
> **[0:08](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/k-anonymity-industry-best-practice?u=76281980&t=8)** In this table, let's focus on the column for N equal to five, which I will now highlight.
>
> **[0:13](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/k-anonymity-industry-best-practice?u=76281980&t=13)** As you can see, I have highlighted the column for a k-anonymity value of five.
>
> **[0:18](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/k-anonymity-industry-best-practice?u=76281980&t=18)** As we work our way down this column, we will see what happens to k-anonymity as we add more and more decimal points, that is make our location data more precise and therefore less private.
>
> **[0:27](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/k-anonymity-industry-best-practice?u=76281980&t=27)** As we have already established, the more decimal points we add, the more precise our data and therefore the more identifiable the user will be whose GPS coordinates we are looking at.
>
> **[0:35](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/k-anonymity-industry-best-practice?u=76281980&t=35)** And therefore the number of users who have K-anonymity value of five will go down.
>
> **[0:40](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/k-anonymity-industry-best-practice?u=76281980&t=40)** To start with, when we have zero decimal points, that is a courser location that for all users in our cohort we can find four others with the same values.
>
> **[0:48](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/k-anonymity-industry-best-practice?u=76281980&t=48)** That is 100% of users have a k-anonymity value of five.
>
> **[0:53](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/k-anonymity-industry-best-practice?u=76281980&t=53)** The same holds true for one and two decimal points.
>
> **[0:55](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/k-anonymity-industry-best-practice?u=76281980&t=55)** That is you could have GPS coordinates with up to two decimal points and still have k-anonymity of five.
>
> **[1:00](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/k-anonymity-industry-best-practice?u=76281980&t=60)** That is, for every user you will still have four others with identical trip values.
>
> **[1:04](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/k-anonymity-industry-best-practice?u=76281980&t=64)** When you add a third decimal point, this is when you hit an infection point.
>
> **[1:08](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/k-anonymity-industry-best-practice?u=76281980&t=68)** That is, this is the first time that not every user in the cohort has k-anonymity value of five.
>
> **[1:14](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/k-anonymity-industry-best-practice?u=76281980&t=74)** There will be at least some users for whom there will not be at least four others with identical values.
>
> **[1:19](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/k-anonymity-industry-best-practice?u=76281980&t=79)** However, it turns out that even if you add the third decimal point while shooting for a k-anonymity value of 5, 99.8% of users will have a k-anonymity value of five.
>
> **[1:28](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/k-anonymity-industry-best-practice?u=76281980&t=88)** So if your goal is to have a k-anonymity value of five, we would need to suppress only 0.2% of the data.
>
> **[1:34](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/k-anonymity-industry-best-practice?u=76281980&t=94)** That is, if you wanted to share this data and a k-anonymity value of five meets your privacy standards you could do so by suppressing only 0.2% of those records.
>
> **[1:44](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/k-anonymity-industry-best-practice?u=76281980&t=104)** When it comes to minimizing privacy risks in data sharing k-anonymity may not be enough.
>
> **[1:49](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/k-anonymity-industry-best-practice?u=76281980&t=109)** In the previous slide, we saw how the industry best practice of k-anonymity value of five provides a meaningful balance between privacy and usability.
>
> **[1:57](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/k-anonymity-industry-best-practice?u=76281980&t=117)** However, k-anonymity has its limitations as well, which is why I will show you yet another tool to help you anonymize data before you share it.
>
> **[2:05](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/k-anonymity-industry-best-practice?u=76281980&t=125)** This tool is called l-diversity.
>
> **[2:07](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/k-anonymity-industry-best-practice?u=76281980&t=127)** In the next chapter, we will consider a use case that shows the limitations of k-anonymity and how l-diversity can help address those limitations.

> [!info]- Semantic Content
>
> **Versions:** 0.2 (2), 99.8 (1)
> **CLI Commands:** make (1), find (1)
> **Code Keywords:** let (1), private (1)
> **Env Vars:** gps (2)
> **Definitions:** is a  (1), is called (1)
> **Best Practices:** best practice (2)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)


### 5. 4. l-Diversity

#### How l-diversity helps privacy
> [LinkedIn Learning](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/how-l-diversity-helps-privacy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/how-l-diversity-helps-privacy?u=76281980&t=0)** - [Instructor] In order for us to understand the limitations of k-Anonymity, let's look at a specific use case.
>
> **[0:05](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/how-l-diversity-helps-privacy?u=76281980&t=5)** Let's assume you end up with a k-Anonymity value of 5 but there is at least one pickup point in your data set such that every trip from that specific pickup point goes to the same destination.
>
> **[0:16](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/how-l-diversity-helps-privacy?u=76281980&t=16)** In this instance, using external data, you may be able to learn where any passenger from that starting point would go.
>
> **[0:23](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/how-l-diversity-helps-privacy?u=76281980&t=23)** So you have additional work to do to ensure that privacy is protected.
>
> **[0:27](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/how-l-diversity-helps-privacy?u=76281980&t=27)** This is where l-Diversity can help.
>
> **[0:29](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/how-l-diversity-helps-privacy?u=76281980&t=29)** L-Diversity will help ensure that there is a diversity of potential pickups and drop-offs.
>
> **[0:35](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/how-l-diversity-helps-privacy?u=76281980&t=35)** Thus, for every trip that is reported in a specific time window, a pickup must have at least l different potential drop-offs and every drop-off must have at least l potential pickups.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), case. (1), protected (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### k-Anonymity vs. l-diversity
> [LinkedIn Learning](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/k-anonymity-vs-l-diversity?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/k-anonymity-vs-l-diversity?u=76281980&t=0)** - [Instructor] We have seen the tension that exists between security and privacy, and we have also seen now that there can be tension between privacy and data quality.
>
> **[0:08](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/k-anonymity-vs-l-diversity?u=76281980&t=8)** Let's look at an example in the next slide.
>
> **[0:11](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/k-anonymity-vs-l-diversity?u=76281980&t=11)** There may be situations where K anonymity may filter out way too much data.
>
> **[0:15](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/k-anonymity-vs-l-diversity?u=76281980&t=15)** In those cases, L diversity would be a much better tool.
>
> **[0:18](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/k-anonymity-vs-l-diversity?u=76281980&t=18)** In the diagram on the slide here the dots on the left represent right pickups and the dots on the right represent right dropoffs.
>
> **[0:25](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/k-anonymity-vs-l-diversity?u=76281980&t=25)** If you apply a K anonymity value of two you will filter around every single ride, since no two rides have the same pickup and the same dropoff.
>
> **[0:32](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/k-anonymity-vs-l-diversity?u=76281980&t=32)** If on the other hand, you separate the pickups and drop-offs and apply an L diversity value of two, you can retain the entire dataset while preserving privacy as well.
>
> **[0:42](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/k-anonymity-vs-l-diversity?u=76281980&t=42)** In this specific scenario, let's assume you're trying to study the density of pickups, and your business goal is if you see a specific location and observe that there's an uptick in pickups, you may want to send more cabs there to reduce wait times and have a better customer experience.
>
> **[0:56](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/k-anonymity-vs-l-diversity?u=76281980&t=56)** In this case, it makes even more sense to disconnect the pickups and drop offs and not store them as one trip.
>
> **[1:02](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/k-anonymity-vs-l-diversity?u=76281980&t=62)** You could even delete the drop off portion of the data set altogether.
>
> **[1:06](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/k-anonymity-vs-l-diversity?u=76281980&t=66)** So you will now be left with less data, which means lower storage costs.
>
> **[1:10](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/k-anonymity-vs-l-diversity?u=76281980&t=70)** The data you do have is more germane to your use case, so you have better data quality.
>
> **[1:14](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/k-anonymity-vs-l-diversity?u=76281980&t=74)** Finally, not having the entire trip store end-to-end means you have better privacy.
>
> **[1:19](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/k-anonymity-vs-l-diversity?u=76281980&t=79)** So L diversity is a win-win-win across the board.
>
> **[1:23](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/k-anonymity-vs-l-diversity?u=76281980&t=83)** You could apply it while storing data internally, and while sharing the same data externally.
>
> **[1:28](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/k-anonymity-vs-l-diversity?u=76281980&t=88)** This is why I've shown you so many different privacy techniques in the wider context of data quality and security.
>
> **[1:35](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/k-anonymity-vs-l-diversity?u=76281980&t=95)** This is an art and a science, rather than just an art or a science.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), case, (2), delete (1), finally, (1)
> **Definitions:** is a  (1), is an  (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)


### 6. 5. The Challenge of Privacy: Your Digital Fingerprint

#### Your physical fingerprint
> [LinkedIn Learning](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/your-physical-fingerprint?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/your-physical-fingerprint?u=76281980&t=0)** - [Lecturer] In several parts of the world, the human fingerprint is used as the default identifier for several basic aspects of life, like getting government benefits, proving your eligibility to vote, et cetera.
>
> **[0:11](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/your-physical-fingerprint?u=76281980&t=11)** In the U.S., I had to give the government my fingerprints several times during my naturalization process as a U.S. citizen.
>
> **[0:18](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/your-physical-fingerprint?u=76281980&t=18)** I recently read a paper titled "Unique In the Crowd: The Privacy Bounds of Human Mobility", that defines how identifiable you can be via your human fingerprint.
>
> **[0:27](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/your-physical-fingerprint?u=76281980&t=27)** The link to that paper is on the bottom left of the slide on your screen right now.
>
> **[0:31](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/your-physical-fingerprint?u=76281980&t=31)** The paper states that 12 points are required to uniquely identify a human fingerprint.
>
> **[0:36](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/your-physical-fingerprint?u=76281980&t=36)** The paper then proceeds to examine how your digital fingerprint, that is, data about where you are and when, identifies you.
>
> **[0:43](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/your-physical-fingerprint?u=76281980&t=43)** This can be especially critical when you are on the move and there is other data available about you elsewhere.

> [!info]- Semantic Content
>
> **Prerequisites:** required to (1)
> **Speakers:** - [lecturer] (1)

#### Your digital fingerprint
> [LinkedIn Learning](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/your-digital-fingerprint?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/your-digital-fingerprint?u=76281980&t=0)** - [Host] As part of their study, the researchers looked at 15 months of human mobility data for 1.5 million individuals.
>
> **[0:08](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/your-digital-fingerprint?u=76281980&t=8)** Here's their key finding.
>
> **[0:09](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/your-digital-fingerprint?u=76281980&t=9)** Human mobility traces are highly unique.
>
> **[0:12](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/your-digital-fingerprint?u=76281980&t=12)** Again, human mobility traces are highly unique.
>
> **[0:15](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/your-digital-fingerprint?u=76281980&t=15)** Your spatial temporal data is highly identifying.
>
> **[0:18](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/your-digital-fingerprint?u=76281980&t=18)** By spatial temporal data, I mean where you are and when.
>
> **[0:21](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/your-digital-fingerprint?u=76281980&t=21)** In fact, in a dataset where the location of an individual was specified hourly and with a spatial resolution equal to that given by the carriers antennas, four spatial temporal points were enough to uniquely identify roughly 95% of the individuals in that dataset.
>
> **[0:36](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/your-digital-fingerprint?u=76281980&t=36)** In short, your digital fingerprint is about three times, I repeat three times, more identifiable than your human fingerprint.

> [!info]- Semantic Content
>
> **Versions:** 1.5 (1)
> **Speakers:** - [host] (1)

#### The power of joining outside data
> [LinkedIn Learning](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/the-power-of-joining-outside-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/the-power-of-joining-outside-data?u=76281980&t=0)** - Throughout this course, we have repeatedly mentioned that even if you try to anonymize user data, you need to be mindful that someone else may still be able to identify that user using external data.
>
> **[0:10](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/the-power-of-joining-outside-data?u=76281980&t=10)** When I mentioned this at industry events, conferences or even to engineers who report into me, they all seem very skeptical at times.
>
> **[0:17](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/the-power-of-joining-outside-data?u=76281980&t=17)** Too often, privacy and security experts get a bit too cocky in their own skills.
>
> **[0:22](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/the-power-of-joining-outside-data?u=76281980&t=22)** Well, let's look at two specific examples that are outside data approved to be more potent than privacy and security controls.
>
> **[0:28](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/the-power-of-joining-outside-data?u=76281980&t=28)** Let's look at the first example.
>
> **[0:31](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/the-power-of-joining-outside-data?u=76281980&t=31)** A simply anonymized data set does not contain name, home address, phone number, or other obvious identifiers.
>
> **[0:38](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/the-power-of-joining-outside-data?u=76281980&t=38)** Yet, if an individual's patterns are unique enough, outside data could be used to link that information back to the individual.
>
> **[0:44](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/the-power-of-joining-outside-data?u=76281980&t=44)** Remember, the Strava example had highly concentrated runs in a very sparsely populated area.
>
> **[0:50](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/the-power-of-joining-outside-data?u=76281980&t=50)** For instance, in one study, a medical database was successfully combined with a voter's list to extract the health record of a governor of the state of Massachusetts.
>
> **[0:59](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/the-power-of-joining-outside-data?u=76281980&t=59)** The second example will speak to many of us who have active social media lives but try to keep our professional profiles somewhat disconnected from our personal profiles.
>
> **[1:08](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/the-power-of-joining-outside-data?u=76281980&t=68)** Journalist Ashley Feinberg successfully identified a personal Twitter account that belonged to Senator Mitt Romney of Utah.
>
> **[1:14](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/the-power-of-joining-outside-data?u=76281980&t=74)** Senator Romney is a former presidential candidate as well as a highly successful venture capitalist in his previous life.
>
> **[1:21](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/the-power-of-joining-outside-data?u=76281980&t=81)** In an interview to the Atlantic Magazine, Senator Romney stated that he had a secret Twitter account that he used to keep tabs on the political conversation.
>
> **[1:28](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/the-power-of-joining-outside-data?u=76281980&t=88)** Feinberg saw this as a challenge.
>
> **[1:31](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/the-power-of-joining-outside-data?u=76281980&t=91)** Romney had let slip in the interview that he was following 668 people, and Feinberg realized that she could track Romney down based on her guests that a family man like Romney, would want to keep close tabs on his offspring on Twitter.
>
> **[1:44](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/the-power-of-joining-outside-data?u=76281980&t=104)** She found an account for the politician's oldest grandchild which added fewer than 500 followers, could feasibly be calm for people who could be Mitt Romney.
>
> **[1:52](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/the-power-of-joining-outside-data?u=76281980&t=112)** She eliminated profiles that are too many followers and looked for someone with the peculiar interest in people who would belong to Mitt Romney's orbit.
>
> **[1:59](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/the-power-of-joining-outside-data?u=76281980&t=119)** It may also have an instructive that the Twitter handle of the correct account was, Pierre Delecto, and that Senator Romney had spent time in France as a missionary.
>
> **[2:08](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/the-power-of-joining-outside-data?u=76281980&t=128)** Senator Romney confirmed soon enough that that account indeed was his.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)
> **Speakers:** - throughout (1)


### 7. Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/next-steps?u=76281980&t=0)** - I was recently discussing data sharing and the digital economy with my neighbor.
>
> **[0:04](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/next-steps?u=76281980&t=4)** His wife works at a major tech company and he himself is a chef.
>
> **[0:08](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/next-steps?u=76281980&t=8)** He told me that his relationship with tech companies is defined by understanding and trust.
>
> **[0:13](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/next-steps?u=76281980&t=13)** He does not understand how tech companies handle his data and therefore does not trust tech companies even though his wife works at one.
>
> **[0:21](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/next-steps?u=76281980&t=21)** Even though tech companies are extremely profitable and create tons of jobs, they have lost public trust.
>
> **[0:26](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/next-steps?u=76281980&t=26)** A key part of winning back this trust comes with treating data with respect and sharing their data in a way that does not lose sight of the fact that behind all those databases, behind all of those metrics, behind all of those dashboards, is a real human being.
>
> **[0:40](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/next-steps?u=76281980&t=40)** The techniques we reviewed in this course will help ensure that your users and their data are safe from misuse by any partner you may share data with.
>
> **[0:48](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/next-steps?u=76281980&t=48)** I would encourage studying those techniques, testing them, and using them, and then you may need to improvise on your own and investigate further.
>
> **[0:56](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/next-steps?u=76281980&t=56)** As your data becomes even more anonymized and your sharing becomes safer, the number of privacy incidents you face should decrease in number and impact.
>
> **[1:05](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/next-steps?u=76281980&t=65)** Then the trust between the tech industry and their users will become a reality rather than sarcasm.
>
> **[1:11](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/next-steps?u=76281980&t=71)** Thank you for listening.
>
> **[1:12](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/next-steps?u=76281980&t=72)** Thank you for learning.
>
> **[1:13](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/next-steps?u=76281980&t=73)** Let's do this.

> [!info]- Semantic Content
>
> **Code Keywords:** public (1), let (1), this. (1)
> **Definitions:** is a  (2)
> **Speakers:** - i (1)


## Instructor

- [[Nishant Bhajaria]]

## Skills Covered

- Data Sharing
- Data Privacy
- Privacy

## Path Context

### In [[Build a Privacy Program]]
← [[Privacy, Governance, and Compliance- Data Classification and Inventory]] | **5 of 5**

## Appears In

- [[Build a Privacy Program]]

## Related Courses

_Courses sharing skills:_

- [[Privacy in the New World of Work]] — Privacy, Data Privacy
- [[Building a Privacy Program in the Age of GenAI]] — Privacy, Data Privacy
- [[Understanding and Prioritizing Data Privacy]] — Privacy, Data Privacy
- [[GitHub Foundations- Privacy, Security, and Administration]] — Privacy
- [[Data Rights Foundations]] — Data Privacy

---

[↑ Back to top](#)