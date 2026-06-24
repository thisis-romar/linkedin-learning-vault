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
  - '[Build a Privacy Program](../../Paths/Cybersecurity/Learning%20Paths/Build%20a%20Privacy%20Program.md)'
prev_courses:
  - '[Privacy, Governance, and Compliance- Data Classification and Inventory](Privacy%2C%20Governance%2C%20and%20Compliance-%20Data%20Classification%20and%20Inventory.md)'
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
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cybersecurity/Privacy%2C%20Governance%2C%20and%20Compliance-%20Data%20Sharing.md)

![Privacy, Governance, and Compliance: Data Sharing](https://media.licdn.com/dms/image/v2/C4E0DAQGBtJkdep0rMA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1678488324257?e=2147483647&amp;v=beta&amp;t=nc5LaivGoPlvflURcyattYswYMueqTdFzdANrOAtGL4)

# Privacy, Governance, and Compliance: Data Sharing

> Companies that drive revenue and growth based on user engagement also face challenges sharing data. From re-identification to exfiltration to unmanaged access, data sharing presents several privacy risks. In this course, privacy and security executive Nishant Bhajaria helps data-driven innovators understand key technologies and players that are involved in the data sharing space. As part of a "shi

> [LinkedIn Learning](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing) | 57m | Intermediate | 5K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Welcome](#welcome)
  - [Who this course is for](#who-this-course-is-for)
  - [Data classification as part of data governance](#data-classification-as-part-of-data-governance)
- [**1. Data Sharing: Risks and Possibilities**](#1-data-sharing-risks-and-possibilities) (5 videos)
  - [How data sharing works: The ads use case](#how-data-sharing-works-the-ads-use-case)
  - [How data sharing can go wrong](#how-data-sharing-can-go-wrong)
  - [Data sharing risks: A case study](#data-sharing-risks-a-case-study)
  - [When data sharing should raise red flags](#when-data-sharing-should-raise-red-flags)
  - [Valid reasons for data sharing](#valid-reasons-for-data-sharing)
- [**2. Solving for Data Sharing**](#2-solving-for-data-sharing) (4 videos)
  - [Techniques to minimize privacy risk](#techniques-to-minimize-privacy-risk)
  - [Anonymization concepts](#anonymization-concepts)
  - [Anonymization techniques](#anonymization-techniques)
  - [Encryption](#encryption)
- [**3. k-Anonymity and Data Sharing**](#3-k-anonymity-and-data-sharing) (5 videos)
  - [What is k-anonymity?](#what-is-k-anonymity)
  - [k-Anonymity: A use case](#k-anonymity-a-use-case)
  - [k-Anonymity: With very coarse data](#k-anonymity-with-very-coarse-data)
  - [k-Anonymity: With very granular data](#k-anonymity-with-very-granular-data)
  - [k-Anonymity: Industry best practice](#k-anonymity-industry-best-practice)
- [**4. l-Diversity**](#4-l-diversity) (2 videos)
  - [How l-diversity helps privacy](#how-l-diversity-helps-privacy)
  - [k-Anonymity vs. l-diversity](#k-anonymity-vs-l-diversity)
- [**5. The Challenge of Privacy: Your Digital Fingerprint**](#5-the-challenge-of-privacy-your-digital-fingerprint) (3 videos)
  - [Your physical fingerprint](#your-physical-fingerprint)
  - [Your digital fingerprint](#your-digital-fingerprint)
  - [The power of joining outside data](#the-power-of-joining-outside-data)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Welcome](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/welcome?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/welcome?u=76281980&t=0)** - Thank you for joining me to learn more about [Data Sharing](../../Skills/Database%20Management/Data%20Sharing.md) with [Privacy](../../Skills/Data%20Science/Privacy.md) controls. My name is Nishant Bhajaria, and I'm a privacy and [Cybersecurity](../../Topics/Cybersecurity.md) executive, published author and educator in this space. I also advise venture capitalists, startup founders, think tanks and universities. As a result, I often have opportunities to build tools, processes and standards around privacy and security, and this is often where I can shape the public conversation around privacy in a big way. One such opportunity came to me in the early days of COVID. During those uncertain and dark days in March and April of 2020, the world was looking for ways to reduce the spread of this mysterious disease. To that end, I joined a group of tech workers, privacy activists and academic researchers to build a contact tracing app. The goal was straightforward: help folks communicate to a central database if they tested positive for COVID and inform others who may have been in proximity and therefore at risk of infection. The goal also was to accomplish this without using anybody's identity. We would use device IDs and other location data to notify folks without compromising anybody's privacy. However, we faced two difficulties. First, in our testing stages, we found that our testers were extremely reluctant to share that they had tested positive because they feared that someone would misuse their data. We had to work very hard to overcome that concern. Without people willing to trust us, the vision of suppressing the spread of COVID using bottom up adoption would fail. Our second difficulty came from some governments. In a few cases, some political leaders wanted us to collect additional data
>
> **[1:35](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/welcome?u=76281980&t=95)** about the users of our app. They wanted to use that data to keep an eye on their political opponents. Those of us who work in industry look at data through the lens of building cool features, growing engagement, driving profits, et cetera. So much online activity ranging from personalization, ads, payments and other activities depends upon data sharing. However, as my example shows, there are legitimate concerns and bad actors out there. Add to that the volume of data companies collect and the highly contextual nature of privacy risk, and things get complicated fast. Using all of my learnings and my experience, I will help you share data while optimizing for both trust and compliance. In this course, I will help you build privacy into your data sharing so that you can reap the benefits of data and avoid or at least mitigate the risks. Are you ready? I am. Let's go.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Privacy](../../Skills/Data%20Science/Privacy.md) (8), [Data Sharing](../../Skills/Database%20Management/Data%20Sharing.md) (3), [Cybersecurity](../../Topics/Cybersecurity.md) (1)
> **Env Vars:** covid (3)
> **Speakers:** - thank (1)

#### [Who this course is for](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/who-this-course-is-for?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/who-this-course-is-for?u=76281980&t=0)** - [Instructor] This course builds on my previous course on [Privacy](../../Skills/Data%20Science/Privacy.md), also hosted on [LinkedIn](../../Skills/Web%20Development/LinkedIn.md). That course was titled, Implementing a Privacy Risk and Assurance Program, and it focused on building a cross-functional privacy program and was fairly introductory in nature. I would strongly recommend that users have some hands-on familiarity with privacy concepts before taking this course. This course also builds on my other course on privacy, also hosted on LinkedIn. That course focused on [Data Classification](../../Skills/Data%20Science/Data%20Classification.md) as part of overall [Data Governance](../../Skills/Data%20Science/Data%20Governance.md). The classification and inventory are part of a shift left approach to help manage privacy risk at scale. In this course, we will look at not just the left, but the sharing of data that occurs throughout the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the data funnel. Modern companies share data with business partners, vendors, governments, et cetera, for the sake of growing the business, engagement, personalization, and regulation, just to name a few. I will educate you on how [Data Sharing](../../Skills/Database%20Management/Data%20Sharing.md) actually works, the underlying risks, and how you can reduce those risks using several privacy techniques. This course is aimed at chief information security officers, chief privacy officers, privacy architects, privacy engineers, and just about anyone in charge of making decisions around protecting customer data. I think this course will also be extremely helpful for privacy attorneys, regulators, and policy makers, so that they can understand how privacy is impacted and can be protected when data moves from one domain to another. I also highly recommend this course for journalists, especially the ones who cover security and privacy. This course will help them understand what building technical systems looks like from someone on the inside who has been there and done that.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Privacy](../../Skills/Data%20Science/Privacy.md) (13), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (2), [Data Classification](../../Skills/Data%20Science/Data%20Classification.md) (1), [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) (1), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **Speakers:** - [instructor] (1)

#### [Data classification as part of data governance](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/data-classification-as-part-of-data-governance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/data-classification-as-part-of-data-governance?u=76281980&t=0)** - Just like [Data Classification](../../Skills/Data%20Science/Data%20Classification.md) [Privacy](../../Skills/Data%20Science/Privacy.md) of our [Data Sharing](../../Skills/Database%20Management/Data%20Sharing.md) is a critical part of [Data Governance](../../Skills/Data%20Science/Data%20Governance.md). Given how vital data sharing is for the modern economy planning for it strategically and thoughtfully is critical. Let's define data governance from a data sharing lens just like we did for the data classification in my previous course. Data governance refers to the ability to identify, track, and protect customer and business data. It includes risk analysis around the data itself, policies to manage those risks, and tools to enforce those policies consistently at scale. If you recall, I'd mentioned that in the previous course that data classification is the foundational starting point for governance. Without classifying data, you run the risk of inadequate or excessive processes and tools. That risk is even higher when it comes to data sharing. Given the volumes of data, the contextual nature of privacy, and the irreversible nature of data sharing it is key to build data governance into your data sharing strategy. When it comes to data sharing you will need to account for risks like sharing data without consent in higher volumes than you plan for without being able to track who collects that data, without being able to track how it is protected after it leaves your security perimeter. With sound data governance, you can share data for legitimate business needs without causing privacy harms. In that vein, data sharing starts from where data classification and data inventory left off. Data classification helps you map privacy risk to data protection methodologies like access management and encryption. Similarly, you can use that classification to build
>
> **[1:34](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/data-classification-as-part-of-data-governance?u=76281980&t=94)** in techniques like anonymization, obfuscation, coarsening, differential privacy, and others, all of which will help you control the privacy risk by changing the data before it is shared and sometimes as it is being shared. These techniques may vary not just based on the data itself but the tools you use to share their data, who you shared their data with, their maturity and credibility as well as many other factors. In that sense, data sharing benefits from data governance much as data classification creates data governance.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Sharing](../../Skills/Database%20Management/Data%20Sharing.md) (9), [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) (7), [Data Classification](../../Skills/Data%20Science/Data%20Classification.md) (6), [Privacy](../../Skills/Data%20Science/Privacy.md) (6)
> **Definitions:** is a  (1), refers to (1)
> **Analogies:** just like (2)
> **Speakers:** - just (1)


### 1. Data Sharing: Risks and Possibilities

[↑ Back to Table of Contents](#table-of-contents)

#### [How data sharing works: The ads use case](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/how-data-sharing-works-the-ads-use-case?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/how-data-sharing-works-the-ads-use-case?u=76281980&t=0)** - [Instructor] Let's look at a concrete example of how [Data Sharing](../../Skills/Database%20Management/Data%20Sharing.md) works by looking at online advertising as a use case. You may or may not like online advertising, but given the complexity of the advertising space, it'll help you understand data sharing and its [Privacy](../../Skills/Data%20Science/Privacy.md) implications in great detail. The Electronic Frontiers Foundation has published research that showed how we get served ads on the internet. This is the most foundational example of data sharing, so let's take a look. Before we do so, let's get some concepts in place. Publisher means a website that you may visit and that can display ads for you. For example, the New York Times website and the New York Times app are both publishers. Supply-side platform or SSP, references an ad network that helps decide which specific advertiser can place an ad on a website so that you as a user may see it and potentially click on it. Demand-side platform or DSP, refers to companies that will work with SSPs to try and display ads to you when you visit a webpage or an app. This image shows how people who own websites and a series of ad networks decide what ads you see and how. Here are some key points. First, the data flows from your browser to the ad networks, also known as supply-side platforms or SSPs. Each SSP then receives your identifying information, usually in the form of a cookie. The SSP then generates a bid request based on what it knows about your past behavior. Next, the SSP sends this bid request to all advertisers who have expressed interest in showing ads. These advertisers collectively make up the demand-side platforms or DSPs, that you see on the left hand side of this diagram.
>
> **[1:34](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/how-data-sharing-works-the-ads-use-case?u=76281980&t=94)** The image on this slide shows what a bid request looks like. As you can see, it contains several pieces of extremely sensitive information. For example, your location, your interests, your device id, et cetera. On the one hand, this information allows companies to decide whether the bid request and the data it contains is worth spending money on to show you an ad. On the other hand, as a privacy leader, I like to remind people that the bid request is not an abstract entity, there is a real person behind that data. That person deserves trust, privacy, and transparency as their data is being shared. Based on the bid request, an advertiser may decide to bid so that they can show you an ad. Based on all of these bids, the SSP then picks a winner. This diagram shows how the winner, the DSP, shows you the ad on the website. Remember, all this movement of data and money happens without most users understanding how the backend actually works. Also, the data is shared before anyone makes a bid or a winner is picked. There is often no guarantee that a company placing a bid really intends to display an ad. It could be that they just want to collect data for a different purpose. This is why data sharing is so powerful. For consumers, this is an area that needs tooling so as to protect your privacy. This is why I built this course, so that any data sharing can be done through privacy preserving techniques.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Sharing](../../Skills/Database%20Management/Data%20Sharing.md) (5), [Privacy](../../Skills/Data%20Science/Privacy.md) (5)
> **Env Vars:** ssp (5), dsp (2)
> **Definitions:** refers to (1), known as (1), is a  (1), is an  (1)
> **Analogies:** for example (2)
> **CLI Commands:** make (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)

#### [How data sharing can go wrong](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/how-data-sharing-can-go-wrong?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/how-data-sharing-can-go-wrong?u=76281980&t=0)** - [Instructor] The online advertising example shows the [Privacy](../../Skills/Data%20Science/Privacy.md) challenges that are caused by [Data Sharing](../../Skills/Database%20Management/Data%20Sharing.md). One such challenge is lack of awareness. An example of this is the sheer amount of data sharing that occurs in the background without the user whose data it is even being aware of that. But the other big challenges are lack of guardrails or having guardrails but them being broken all over the place. For example, caching reduces the burden on backend [Databases](../../Skills/Software%20Development/Databases.md). This means engineers can deploy code without always having to worry about scaling the backend. This is one example of technical guardrails protecting innovators and consumers from bad outcomes. Data sharing, however, can cause serious privacy harms when there are no guardrails. The nature of the data itself, especially when joined with other data that is available on the dark web or social media, can lead to several unforeseen outcomes. Just ask the US military. Strava, the fitness tracking app uses satellites to record its users' runs, bike rides, and other workouts. It also makes many of these routes available for public view on its global heat map, which shows where people around the world go for running and bicycling. This amazingly cool feature which I love ended up creating serious headaches for Strava, the company, and for the US military. So how did this happen? It turns out that the US service members have been recording their runs around the compounds of their military basis. That information made it to the Strava backend servers and then to the Strava heat map and unknowingly revealed the locations of these service members. Users on Twitter figured out that they could identify outlines and activity patterns on US military bases
>
> **[1:33](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/how-data-sharing-can-go-wrong?u=76281980&t=93)** in places like Syria, Afghanistan, and Somalia. The biggest potential threat here was not the base locations themselves which are public in many cases, but what happened in and around the bases themselves. The map showed activity patterns within and around the bases, giving away supply and patrol routes as well as the precise location of facilities like mess halls and living quarters. Further, users could get location specific data allowing them to link map activity to specific user profiles. The result, you could find out which service members were in which locations at a given point in time. I will repeat this. You could now find out which US Service members were in which locations at a given point in time. Strava responded by explaining that all users have the ability to set activities to private so that their activities are not included in the heat map. And that explanation is technically correct, but when it comes to security and privacy, the companies building the [products](../../Skills/Software%20Development/Microsoft%20Products.md) will own the outcomes, not the users themselves. And this is how a company as sophisticated as Strava and an organization as disciplined as the US military were caught by surprise due to privacy and data sharing. As a former product manager, I understand what Strava was thinking when it built the heat map. A heat map creates visibility into adoption and gives users a sense of belonging to a fitness-centric community. In doing so, it creates a positive motivation to run and then log your data. And this was especially true in the early days of social media when sharing was a sense of empowerment. But when data sharing goes wrong, [Privacy Issues](../../Skills/Database%20Management/Privacy%20Issues.md) become major problems.
>
> **[3:06](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/how-data-sharing-can-go-wrong?u=76281980&t=186)** Next we will look at red flags to watch for when it comes to data sharing that way you may be able to prepare and build better guardrails and mitigate possible privacy risks when it comes to data sharing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Sharing](../../Skills/Database%20Management/Data%20Sharing.md) (7), [Privacy](../../Skills/Data%20Science/Privacy.md) (5), [Databases](../../Skills/Software%20Development/Databases.md) (1), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1), [Privacy Issues](../../Skills/Database%20Management/Privacy%20Issues.md) (1)
> **CLI Commands:** find (2)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Data sharing risks: A case study](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/data-sharing-risks-a-case-study?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/data-sharing-risks-a-case-study?u=76281980&t=0)** - [Instructor] Given the complex nature of [Data Sharing](../../Skills/Database%20Management/Data%20Sharing.md), let's dive headfirst into a case study. I want you to understand that the [Privacy](../../Skills/Data%20Science/Privacy.md) risks here are not abstract. Let's start with some key insights. Data sharing is not just about sharing data between one company and another. Any time you have collected data from somebody else and then that data leaves your company, as a practical matter you are essentially sharing that information with outside entities. Identifying people has become easier than ever before in this age of social media because of publicly available information, data on the dark web obtained by way of breaches, and ML-based tools that help you combine datasets. So for privacy, you need to think of data sharing anytime data leaves your company's domain. This is also true when you're just an individual broadcasting just your own data via your cell phone. Let's look at a specific example. The New York Times has done some amazing work as part of their Privacy Project. The research was conducted by the Times, and found that based on the apps on your phone and their sharing of realtime location data, it may be possible to track just about anyone. Yes, anyone, even the President of the United States. The Times Privacy Project obtained a dataset with more than 50 billion location pings from the phones of more than 12 million people in the US. According to the Times, this was a random sample from 2016 and 2017, but it took only minutes with the assistance of publicly available information for the Times to de-anonymize location data and track the whereabouts of then President Trump. The map and the movements therein will show how location sharing can help track someone.
>
> **[1:33](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/data-sharing-risks-a-case-study?u=76281980&t=93)** This map was populated by location pings from the cell phone of someone in the president's entourage. More on that person in a few minutes. As you can see, a single dot appeared on the screen representing the precise location of someone in President Trump's entourage at 7:10 AM. It lingered around the grounds of the president's Mar-a-Lago Club in Palm Beach, Florida, where the president was staying for about an hour. Then the dot was on the move, as you can see on your screen. The dot then traveled to the Trump National Golf Club in Jupiter, about 30 minutes north of the hotel, pinging again at 9:24 AM just outside the compound. The president was there to play golf with Prime Minister Shinzo Abe of Japan. There the dot stayed until at least 1:12 PM, when it moved to the Trump International Golf Club in West Palm Beach, where the world leaders enjoyed a private lunch. Let's keep tracking. By 5:08 PM, the phone was back at Mar-a-Lago. The president had what he called a working dinner with Mr. Abe that night. As I've mentioned before, data sharing is effective not just because of what you or your company can share about you. That shared data, when combined with data already available elsewhere, is what makes data sharing very effective and potentially very problematic. Later in this course, we will look at techniques to make data sharing more privacy friendly while still enabling innovative data analysis. For now, let's continue to track President Trump and his entourage. The same phone represented by the dot we saw previously pinged a dozen times
>
> **[3:06](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/data-sharing-risks-a-case-study?u=76281980&t=186)** at the nearby Secret Service field [office](../../Skills/Web%20Development/Microsoft%20Office.md). From computer screens more than 1,000 miles away, Journalists at the New York Times offices could watch this person travel from exclusive areas at Palm Beach International Airport to Mar-a-Lago. These movements were accurate to within a few feet of the president's entourage. The device owner was easy to trace, revealing the outline of the person's work and life. The New York Times believes that the device owner was a Secret Service agent whose home was also clearly identifiable in the data. Connecting the home to public deeds revealed the person's name, their spouse's name, exposing even more details about the families. Now, this Secret Service agent has company. Even a prominent US Senator's National Security Advisor, someone for whom privacy and security are core to their every working day job, was identified and tracked in the data. Who shared this data? We can be fairly certain that a Secret Service agent protecting the President of the US was not knowingly and intentionally sharing their location real time. But this person probably had apps on their phone that shared their data real time. And there are yet more examples of data sharing that turned out to be problematic. By now, everyone has heard of the Cambridge Analytica issue. Here is a quick summary. Cambridge Analytica, a political data firm hired by President Trump's 2016 election campaign, gained access to private data on more than 50 million [Facebook](../../Glossary/Service/Facebook.md) users. The firm offered tools that could identify the personalities of American voters and possibly influence their behavior. The data included details on users' identities, friend networks, likes, et cetera.
>
> **[4:38](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/data-sharing-risks-a-case-study?u=76281980&t=278)** The idea was to map personality traits based on what people had liked on Facebook, and then use that information to target audiences with ads. But how did Cambridge get this data? Researchers in 2014 asked users to take personality surveys and download an app, which scraped some private information from their profiles and those of their friends, activity that Facebook permitted at the time and has since banned. The technique had been developed at Cambridge University Psychometrics Center. The center declined to work with Cambridge Analytica, but a professor at the university was willing. Dr. Kogan, who was the professor, built his own app and in June, 2014, began harvesting data for Cambridge Analytica. He ultimately provided over 50 million raw profiles to the firm, said Christopher Wylie, a data expert who oversaw Cambridge Analytica's data harvesting. Only about 270,000 users, and these were the ones who participated in the survey, had consented to having their data harvested, though they were all told that it was being used for academic purposes only. There are several lessons to learn from that episode, but here are the ones that stand out for me. First, once data leaves your company, chances are that you can exert very little control over what happens to it. Second, the entities you share data with may not be as transparent and honest as you are. Third, whoever you share data with could have more sophisticated abilities than you do to process that data. And fourth, it often takes a while to understand the full implications of data sharing, so in this case, no news is not necessarily good news. Remember these lessons before you minimize the risk
>
> **[6:11](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/data-sharing-risks-a-case-study?u=76281980&t=371)** inherent to data sharing. And then there is ransomware. Ransomware is malicious software that spreads quickly across computer networks and encrypts them, holding sensitive documents hostage until victims decide to pay the hackers. Here are some examples. In 2019, ransomware hit 103 federal, state, and municipal agencies, 759 healthcare providers, and 86 schools and universities. Four US cities were hit with ransomware in December alone. After seeing Atlanta spend $2.6 million to restore its systems rather than pay $52,000 in ransom, many officials have decided that it may be cheaper to just pay off the hackers. Finally, a ransomware attack cost the City of Baltimore about $18 million. These attacks have only increased in frequency as attackers realize how weak cyber defense capabilities are and how much sensitive data companies and governments hold. The key lesson here is that when you share data with someone, you are also sharing their security and privacy weaknesses. And when those weaknesses are exploited, you will share the consequences. For the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of this course, I will be speaking directly to professionals who design and create these apps. The goal is to help them share data in a way that enables innovation but also respects privacy.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Sharing](../../Skills/Database%20Management/Data%20Sharing.md) (9), [Privacy](../../Skills/Data%20Science/Privacy.md) (8), [Facebook](../../Glossary/Service/Facebook.md) (3), [Office](../../Skills/Web%20Development/Microsoft%20Office.md) (1), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **Ports:** :10 (1), :24 (1), :12 (1), :08 (1)
> **CLI Commands:** make (1)
> **Versions:** 2.6 (1)
> **Cross-References:** later in (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [When data sharing should raise red flags](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/when-data-sharing-should-raise-red-flags?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/when-data-sharing-should-raise-red-flags?u=76281980&t=0)** - [Privacy](../../Skills/Data%20Science/Privacy.md) risks that stem from [Data Sharing](../../Skills/Database%20Management/Data%20Sharing.md) are never static or constant. They could change because of a whole host of reasons. The data could change before, during, and sometimes after the sharing process. Third party data and other extraneous context could also continuously change. The ability to interpret data and identify users using automation may also change. In short, privacy risks around data go up or down because of several factors, many of which are hard to predict, detect, and manage. But there are red flags you should watch for when it comes to data sharing. If you are designing an app and data sharing is a key part of the offering, you should watch for the following red flags. First, uniquely identifying individuals without sufficiently anonymizing the data. Second, placing individuals at a certain place and a specific time for tracking purposes. Next, the absence of consent for and visibility into how data is shared and who with. And finally, the ability to identify others connected to the user who may not consent to data sharing, even though the user did. In the example of a mobility app, if I were to evaluate a proposal that shared the following, I would raise more than just an eyebrow. Real time tracking of a trip from start to finish, precise trip start and stop coordinates. Remember, in the Strava example the military service members were identified without any of this data. Next, lack of privacy guidelines on the part of the entity receiving this data. The reason I'm honing in on data sharing is because there is no way to unshare your data once you share it.
>
> **[1:33](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/when-data-sharing-should-raise-red-flags?u=76281980&t=93)** Who you are and where you are is all someone may need to identify you and then physically reach you. This is not just about privacy, folks. This is also about safety. The aforementioned New York Times research dove deep into location data sharing, and they confirmed that several companies collect and share location data. Now, it is impossible to know what any recipient of your data will do with it or how carefully they can protect it. It is therefore vital that anyone creating an app that shares data also builds in privacy techniques to anonymize all of that data. We will look at all of those techniques in the next few lessons.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Sharing](../../Skills/Database%20Management/Data%20Sharing.md) (6), [Privacy](../../Skills/Data%20Science/Privacy.md) (5)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Speakers:** - privacy (1)

#### [Valid reasons for data sharing](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/valid-reasons-for-data-sharing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/valid-reasons-for-data-sharing?u=76281980&t=0)** - [Instructor] So far, we have seen the challenging side of [Data Sharing](../../Skills/Database%20Management/Data%20Sharing.md). However, there are valid reasons as to why an app may want to share data with other entities. Some of these reasons have nothing to do with growing your business or even making money. If you hail a car using a taxi or ride sharing app, it is possible even likely that the app is sharing at least some data with government authorities for the city that you are in. Such data sharing may also occur with cab companies or other transportation providers. Next, let's look at some valid reasons behind this data sharing. City planners and regulators may need access to data from transport providers to inform and enforce several policy decisions. For example, cities need to understand the impact of transport services on traffic, parking, emissions and labor practices. Second, municipalities and police may need data to collect per-vehicle fees, enforce parking rules for shared bikes and scooters, and respond to safety or service issues. There are some other valid data sharing use cases as well. For example, drop-off geolocations are shared to help analyze the impact on parking and traffic flow. Trip telemetry data is shared to detect when vehicles enter prohibited zones, so as to issue enforcement citations. And finally, vehicle or driver's license numbers are shared to verify that all vehicles are permitted to operate within the city.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Sharing](../../Skills/Database%20Management/Data%20Sharing.md) (4)
> **Analogies:** for example (2)
> **Speakers:** - [instructor] (1)


### 2. Solving for Data Sharing

[↑ Back to Table of Contents](#table-of-contents)

#### [Techniques to minimize privacy risk](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/techniques-to-minimize-privacy-risk?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/techniques-to-minimize-privacy-risk?u=76281980&t=0)** - [Instructor] So far we have seen the scale of [Data Sharing](../../Skills/Database%20Management/Data%20Sharing.md) and the [Privacy](../../Skills/Data%20Science/Privacy.md) risks it causes. The good news here is that there are several best practices available, and techniques available to help make data sharing more privacy focused. When it comes to [Data Collection](../../Skills/Data%20Science/Data%20Collection.md), I have built architectures with a key principle, the more precisely identifiable the data, the lower the retention period should be. I will repeat again, the more precisely identifiable the data, the lower the retention period should be. We saw this exact principle in action in the [Data Classification](../../Skills/Data%20Science/Data%20Classification.md) course as well, precision and retention should have an inverse correlation. This theme is apropos for data sharing as well. So now let's look at some best practices to implement this principle in practice. As an app designer, you should ask vendors and partners to document their retention and deletion policies for each type of data being collected and shared. And on this slide, I have some specific recommendations on how to obfuscate the data before sharing. We will look at some of these concepts in more detail in upcoming slides, but here is the key takeaway once again, the more precisely the data can identify someone, the lower its retention period should be. Just as there is an inverse correlation between data precision and retention, there should be a similarly inverse relationship between precision and availability. When you share data with a partner, you should insist that the anonymize data in memory, especially if you share with them data that is very, very granular. Some techniques include not persisting data used solely for the purposes of aggregation, keeping individual level data in memory, only process data to the disk.
>
> **[1:33](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/techniques-to-minimize-privacy-risk?u=76281980&t=93)** This means that precise data is short-lived, and therefore less accessible, while more aggregated data is available to more people, since it is on disk, where you can also manage access much more proactively and effectively. Here are some more best practices. In order to prevent personal identification, you should remove or replace any identifiers that uniquely identify someone. You will want to do this before sharing the data, or have the vendor do this as soon as they receive the data, and only then complete mapping it at their end. On this slide, there are also two additional specific bullet points to show you how to do exactly that. Key tip, you may also have some use cases where you may actually want to identify somebody whose data you have shared, for those use cases, you may want to create another table that links their external identifiers, like passport numbers, for example, to internal identifiers that are customized for your company alone. However, you should carefully manage access to this linking table so as to prevent any potential [Privacy Issues](../../Skills/Database%20Management/Privacy%20Issues.md). Let's look at an example on the next slide. In this slide, Table A, on the far left, is the internal table with your user data linked to their passport numbers. As you know, the passport number uniquely identifies someone without any doubt as to who they are, which is why when you share this user's data externally, you will want to create an ID specific to that vendor or partner. You will also want to create a new table with the data you wish to share, but linked to this custom internal id, not the passport number. That way, if this data were ever to leak, it would be much harder to associate this data back to that specific user and their passport number. This is the table on the far right,
>
> **[3:07](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/techniques-to-minimize-privacy-risk?u=76281980&t=187)** AKA Table C. And the table in the middle, Table B, is the one that links passport numbers to the custom ID. This is the table that will require tight and ordered access, since this table is the bridge between the full data and the anonymized data. That way, you can share anonymously and identify internally. Real world scenarios will probably have a lot more complexity, but this example gives you a logical foundation to build upon. But do we need a custom ID for each vendor, or can we just create one internal ID for all external sharing? This debate is a privacy version of soda or pop, and what is the more harmful thing in your diet, fats or sugar? There is no clear consensus on this issue. I've been part of these debates for a long time, so let me give you the trade-offs and let you decide what works best in your case. Choice 1, you could create one internal ID and hash it, this is indicated by the entries on the left hand side. The goal of hashing is to prevent IDs that are tied to you from appearing in the wild. Hashing could help ensure that each vendor has individual IDs, so that vendors cannot connect the dots amongst each other, and if there were ever to be a breach, you could identify the vendor that was impacted. The other upside is that any hashing algorithm with salt may help achieve this goal, although your security teams may have more specific recommendations. The downside is that you will need to focus on where to store the salt, and identify whether the hashing algorithm is susceptible to brute force or other techniques. Choice 2, you could create an internal ID per vendor. This is indicated by the list on the right hand side. This approach may negate the need to hash the ID and the complexity attached to hashing.
>
> **[4:41](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/techniques-to-minimize-privacy-risk?u=76281980&t=281)** Your security team, again, may have other ideas. The downside of this approach is you may have too many IDs and too many mapping tables, as a result, you may end up with too much complexity and too little privacy. The reason behind this is that if anybody can start sharing data by creating a new internal id, you may see promiscuous data sharing with no central ability to regulate the sharing of data. On your screen right now are even more techniques you can use when it comes to sharing location and time data. I will let you read these techniques and apply them at your own convenience. Let me explain how those measures we just looked at could help protect privacy. Let's assume you have two trips, Trip A starts at 12:22 PM and ends at 1:09 PM, Trip B starts at 12:24 PM and ends at 1:11 PM. If you need to share this data with a third-party for analysis purposes, it could pose a privacy risk, since there are just two trips, based on the start and end times, and other public data, you may be able to identify who took which trip. However, with the techniques we saw in the last slide, the two trips could be shared as follows, Trip A starts at 12:30 PM ends at 1:00 PM, Trip B starts at 12:30 PM and ends at 1:00 PM. This makes the people on the trip less identifiable without hurting the aggregate data analysis. Now, this example may be a bit too simplistic, but the key message remains the same, avoid blindly sharing data that individually identifies the folks whose data it is. When I look at data sharing protocols, I ask to make sure that once I share data with a partner, they manage who on their side can access that data. Here are some techniques I've used. I ask that the partner be judicious
>
> **[6:14](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/techniques-to-minimize-privacy-risk?u=76281980&t=374)** with the availability of their APIs to those who want access to the data. My teams have often implemented tools to check, on an ongoing basis, if engineers and scientists who have access to sensitive encrypted data still actually need that kind of access. We routinely sample the data, and check to make sure when it was last decrypted. Often, we found that teams had requested access to the data, but hardly, or never, use keys to access the data. In those cases, we swap the keys to check if the engineers ever complained. 75% of the time, we never heard back and nobody complained. What this means is that people often think they will need more access to data than they actually do, and even if they don't use the data, their ability to access it poses a privacy risk. Remember, credentials often get lost. You will only use all of these techniques and these instincts internally, as well as externally when you share data. I've shaped privacy principles for many, many organizations as an employee and a consultant, but these two are the closest ones to my heart. During my early days as a privacy engineer, I followed President Reagan's famous "Trust but verify" principle. When it comes to data sharing in this world, however, the principle I follow is one cited by Intel Founder Andy Grove, "Only the paranoid survive."

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Privacy](../../Skills/Data%20Science/Privacy.md) (9), [Data Sharing](../../Skills/Database%20Management/Data%20Sharing.md) (6), [Data Collection](../../Skills/Data%20Science/Data%20Collection.md) (1), [Data Classification](../../Skills/Data%20Science/Data%20Classification.md) (1), [Privacy Issues](../../Skills/Database%20Management/Privacy%20Issues.md) (1)
> **Ports:** :30 (2), :00 (2), :22 (1), :09 (1), :24 (1)
> **CLI Commands:** make (3)
> **Definitions:** is an  (1), means that (1), is a  (1)
> **Env Vars:** aka (1)
> **Cross-References:** in the last (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Anonymization concepts](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/anonymization-concepts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/anonymization-concepts?u=76281980&t=0)** - [Instructor] Continuing on the idea of sharing data while also reducing [Privacy](../../Skills/Data%20Science/Privacy.md) risks, let's look at anonymization. Anonymization is a concept that lets you alter the data so as to reduce the risk of identifying the user, their location, or any other data that could put the user at risk. Before looking at specific anonymization techniques, let's look at the different types of data that anonymization can help alter. Personal data means any data that identifies or relates to an identifiable individual. It includes both direct identifiers and indirect identifiers. Direct identifiers means any fields in a dataset that could identify a specific individual and here are some examples on your screen right now. Indirect identifiers means any field in a data set that could be combined with other information, so as to identify an individual. Some examples are on your slide right now. Now, let's look at the different kinds of anonymization that you could choose from, depending upon the privacy risk. First, pseudonymization means the process of replacing direct identifiers from a data set with artificial identifiers or pseudonyms, and preventing recombination of such data with the removed direct identifiers through any technical or administrative controls. Partial anonymization means the process of A, removing direct identifiers from a data set, and transforming or manipulating indirect identifiers to break the linkage using techniques such as suppression, aggregation, substitution, or noise addition, and B, destroying information that would enable re-identification like encryption keys. Singling out refers to the ability to locate a specific individual's record within a larger dataset.
>
> **[1:34](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/anonymization-concepts?u=76281980&t=94)** Linkability refers to the ability to link two records pertaining to the same individual or group of individuals. Inference refers to the ability to confidently guess or estimate values using other extraneous information. Full anonymization. In addition to partial anonymization, you can ensure that the data cannot be linked to [Databases](../../Skills/Software%20Development/Databases.md) or additional information outside your company or anywhere in the public domain. The risks of singling out, addressability, inference and linkability are all significantly reduced when you have full anonymization. Pseudonymization, partial anonymization, and full anonymization techniques allow you to reduce privacy and compliance obligations and the risks associated with the processing of any personal data. The chart on this slide will provide you an overview of the three techniques and their implications. As you move towards the right of the chart, the privacy risks and compliance obligations reduce, but the level of effort and the cost increase. For instance, anonymized data has the least privacy impact but requires a high level of anonymization effort. Personal data that directly identifies an individual does not require any anonymization effort, but has the highest privacy risk and security impact and is subject to the most stringent compliance obligations. So there are trade-offs here to be made.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Privacy](../../Skills/Data%20Science/Privacy.md) (6), [Databases](../../Skills/Software%20Development/Databases.md) (1)
> **Definitions:** refers to (3), is a  (1)
> **Analogies:** such as (1), for instance (1)
> **Speakers:** - [instructor] (1)

#### [Anonymization techniques](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/anonymization-techniques?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/anonymization-techniques?u=76281980&t=0)** - [Teacher] Different anonymization techniques and practices exist with different degrees of success. Let's look at the most popular anonymization techniques and the potential disadvantages so that you can make informed trade off decisions. The techniques we look at are suppression, substitution, noise addition, permutation, and aggregation. First suppression. Suppression is the most basic anonymization technique and involves removal or withholding of certain data values. Suppression is mostly used for direct identifiers. Suppression has limitations. It is unlikely on its own to lead to full anonymization as the remaining indirect identifiers could allow for the identification of the individual to whom the data belongs. Substitution is a technique that removes the association between the individual and the personal data by replacing identifiable data values with values that could have been randomly drawn from large [Databases](../../Skills/Software%20Development/Databases.md), for example, real names and addresses could be replaced by false names and addresses. Again, this has limitations as well. It is unlikely on its own to lead to full anonymization and may not always be possible to implement at scale. Noise addition is a technique that entails the addition of random noise to certain data in order to disguise its true value. This will ensure that the aggregate result will still be meaningful but individual records will not be accurate. Let's look at some noise addition examples. You could add or subtract or random number of centimeters or inches to the height within a defined range so that you can change the values but not make them meaningless either. You could alter a postal code to a randomly selected nearby postal code to disguise the code,
>
> **[1:31](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/anonymization-techniques?u=76281980&t=91)** but preserve the general location so you could preserve or shift the code by say, 0.5 kilometers or more. Like every other technique we have seen so far, noise addition has limitations as well. It could distort the information contained in the dataset so depending upon the analysis that you conduct, it may not be the most appropriate technique. It reduces the risk of linkability and inference attacks but the possibility that an individual's data could be singled out or linked with other dataset remains. So you should consider noise addition as a complimentary technique without thinking of it as a one size fits all and catchall. Third, if the noise is not semantically viable, that is it is out of scale and does not respect the logic of the attributes and the data itself, then any attacker having access to the database could be able to filter out the noise and regenerate the missing entries, that is reverse engineering is possible. And finally, if the data set is too sparse, it can remain possible to link the noisy data entries with some external data source. Permutation. This technique involves shuffling values of data attributes in a table so that some of them are artificially linked to different individuals. Permutation allows for the retention of the exact distribution of each attribute within a data set by preserving the range and distribution but removing the correlations between the values and the individuals themselves. There are limitations to permutations as well. Permutation must be combined with some other anonymization techniques, such as suppression. Instances may be drawn from the dataset, especially if attributes can be correlated or have strong logical partnerships. Permutation attributes randomly may not provide strong guarantees. For example, if you have a data set of 30 males
>
> **[3:05](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/anonymization-techniques?u=76281980&t=185)** that list the year of birth, job, and income in a company, permutation of each individual's income can still be logically linked to the job, because there are only so many different job types or based on an age type, the CEO might be older than an employee who just graduated from college. If you select a wrong attribute that is one that is not sensitive or not risky, you will not meaningfully reduce the risk of identification. Aggregation is a technique that generalizes values where granularity is not needed, and there are examples available on your screen for you to look at and dive deep into. Like every other technique we have seen so far, aggregation has limitations as well. Simple aggregation on its own does not guarantee full anonymization and only produces partially anonymized data. Additional techniques could be necessary to ensure full anonymization, such as k-anonymity, which we will dive into a bit later.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Databases](../../Skills/Software%20Development/Databases.md) (1)
> **Analogies:** for example (2), such as (2)
> **Definitions:** is a  (3)
> **CLI Commands:** make (2)
> **Env Vars:** ceo (1)
> **Versions:** 0.5 (1)
> **Speakers:** - [teacher] (1)

#### [Encryption](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/encryption?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/encryption?u=76281980&t=0)** - As we have seen already, [Privacy](../../Skills/Data%20Science/Privacy.md) and security are different, but very closely connected. Security tools protect against external attacks but they also protect data from internal misuse. This is where security tools can help enable privacy. This is also a useful insight to have in an age of lean budgets. Reusing security tools whenever possible could be good business as well as a way to entrench those tools in the business for a deeper cultural impact. One such tool is encryption. Think of encryption as a building block for privacy. There are four points to remember here. Data can be encrypted so that only those who are authorized can read the data. Everybody else will see random numbers, or some other nonsense. Second, data can be protected against any kind of change, preserving integrity. Data can be authenticated so you can tell for certain who created it. And finally, the creator of data cannot deny having created it. So you have security and privacy in a very meaningful fashion made possible by encryption. You can think of encryption as access control for privacy, and this image, I think speaks for itself. Here are some encryption best practices. First, a good encryption algorithm, when properly applied, can be meaningful when it comes to privacy as well. Protection of the secret key is critical. Symmetric keys should never be reused. And finally, if there is a public key, you should distribute it in a certificate so as to prevent, or at least make hard, any interception attacks. [Cryptography](../../Skills/Cybersecurity/Cryptography.md) helps protect your users from privacy harm because it helps achieve authentication. Let's look at that in a bit more detail.
>
> **[1:33](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/encryption?u=76281980&t=93)** You can tell for certain who created data. Encryption protects privacy by establishing trust in any data that you receive. By authenticating the user, you can identify who the user is and protect them and all other users of the system by preventing any kind of fraudulent activity. Encryption also enables non-repudiation. Data creators cannot deny that they created the data and are therefore responsible for it. If any forgery occurs, there could be irreversible privacy harm because the forger has taken someone's reputation without permission. When using encryption to minimize privacy risk during [Data Sharing](../../Skills/Database%20Management/Data%20Sharing.md), you should avoid making any erroneous assumptions, and therefore fatal mistakes. Remember, before sharing data over cryptographically protected channels, remember three things. A lot of things can, do, and often will go wrong. Second, cryptography intercepting proxies do exist and could be used to mine data. And finally, you should share only the minimum information required to get the job done. Another example, cryptography protects you against policy problems. For example, errors in architecture, policy, or coding, could still reveal secrets. Your partners may not be completely reliable. And third, partners may have lax internal controls in their systems. Finally, cryptography could be slow at times, so you should expect some pushback from executives and other engineers. You will need to make a strong business case as well as apply cryptography thoughtfully so as to avoid another wasteful lose-lose battle between [Data Privacy](../../Skills/Data%20Science/Data%20Privacy.md) on the one hand,
>
> **[3:05](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/encryption?u=76281980&t=185)** and business efficiency on the other hand. While encryption can help you protect your data, what you really need is a comprehensive data protection strategy. This is important since outside of accidental misuse, each time somebody uses data inappropriately, such actions tend to have very specific goals. Your strategy should be aimed at thwarting those goals. The question is, does the partner you want to share data with have such a strategy? As an example, let us look at the data obtained from two breaches, the first at the [Office](../../Skills/Web%20Development/Microsoft%20Office.md) of Personnel Management or OPM, and the second at Equifax. Let's first look at the OPM breach. In April, 2015, IT staffers within the US Office of Personnel Management or OPM, the agency that manages the government's civilian workforce, discovered that some of which personnel files had been hacked. Among the sensitive data that was exfiltrated and stolen were millions of SF-86 [Forms](../../Skills/Web%20Development/Forms.md) which contain extremely personal information gathered from background checks for people seeking government security clearances along with records of millions of people's fingerprints. So if you could get ahold of this data, you could find out intimate secrets about government employees in the US who have security clearances. Now let's look at the Equifax breach. Equifax is one of the three largest consumer credit reporting agencies in the US, and they announced in September, 2017 that their systems had been breached and the sensitive personal data of 148 million Americans had been compromised. I am one of those Americans. That data included names, home addresses, phone numbers, dates of birth, social security numbers,
>
> **[4:40](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/encryption?u=76281980&t=280)** driver's license numbers, and other data. The credit card numbers of approximately 209,000 consumers were also breached. So if you could get ahold of this data, you could find out which Americans have debts, and therefore could be vulnerable to blackmail. Now, if you combine the data from these two breaches at the same time, you could have information about who has government clearances and who from that list has financial situations that could leave them vulnerable to blackmail. This is how data leaving a company could become a national [Security Risk](../../Skills/Cybersecurity/Security%20Risk.md). So encryption could be a key solution to reduce data sharing risks, but not a tool you can blindly and complacently depend upon in all situations.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Privacy](../../Skills/Data%20Science/Privacy.md) (10), [Cryptography](../../Skills/Cybersecurity/Cryptography.md) (5), [Data Sharing](../../Skills/Database%20Management/Data%20Sharing.md) (2), [Office](../../Skills/Web%20Development/Microsoft%20Office.md) (2), [Data Privacy](../../Skills/Data%20Science/Data%20Privacy.md) (1)
> **CLI Commands:** make (2), find (2)
> **Env Vars:** opm (3)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Prerequisites:** required to (1)
> **Speakers:** - as (1)


### 3. k-Anonymity and Data Sharing

[↑ Back to Table of Contents](#table-of-contents)

#### [What is k-anonymity?](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/what-is-k-anonymity?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/what-is-k-anonymity?u=76281980&t=0)** - Let's discuss k-Anonymity. The most exhaustive work on this topic I've read comes from Professor Latanya Sweeney, but for this course, here is a very intuitive explanation from Carnegie Mellon University. In k-Anonymity attributes are suppressed until each row is identical with at least k-1 other rows. At this point, the database is set to be k-anonymous. K-Anonymity thus prevents definitive database linkages. At worst, the data release narrows down an individual entry to a group of k individuals. K-Anonymity is intuitive to implement used by [Google](../../Glossary/Service/Google.md) in their Ad API and provides a guarantee that you are one among a minimum cohort rather than being uniquely identifiable across the board. This is a raw table before we apply k-Anonymity. The goal would be to ensure that each individual in this table is less identifiable once we apply k-Anonymity. In this table, you can see how by changing just a few fields, we have ensured that each of the four rows is now less unique. You obtain a k-Anonymity value of 2 since for each row, there is one more like it. This is similar to what we did by rounding off the pickup and drop-off details a few slides ago. K-Anonymity is powerful since it gives you a way to measure [Privacy](../../Skills/Data%20Science/Privacy.md) impact before you share data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Google](../../Glossary/Service/Google.md) (1), [Privacy](../../Skills/Data%20Science/Privacy.md) (1)
> **Definitions:** is a  (2)
> **Env Vars:** api (1)
> **Analogies:** similar to (1)
> **Speakers:** - let (1)

#### [k-Anonymity: A use case](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/k-anonymity-a-use-case?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/k-anonymity-a-use-case?u=76281980&t=0)** - [Instructor] In order to see k-Anonymity in action, I had one of my colleagues run an experiment of 40,000 rides in the city of Boston. I discussed this at length during my talk at the QCon Engineering Conference in San Francisco in 2019 where I spoke on behalf of my current employer. The link to that talk is on this slide. The goal was to get a sense of how we can reduce the uniqueness of each ride by coarsening the data. In this case, we chose to coarsen location data by changing the number of GPS points on the location data itself. Remember, this was not an exhaustive study, so you may get different outcomes for your samples.

> [!info]- Semantic Content
>
> **Env Vars:** gps (1)
> **Speakers:** - [instructor] (1)

#### [k-Anonymity: With very coarse data](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/k-anonymity-with-very-coarse-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/k-anonymity-with-very-coarse-data?u=76281980&t=0)** - [Instructor] In order for us to understand how k-anonymity actually works, we will look at multiple examples. In this table, let's first make sure we understand what the data represents. The row titles represent the number of GPS decimal points in the location data while the column titles represent the k-anonymity value. The more GPS points you have in location data, the more precise it will be. Correspondingly, the higher the k-anonymity value, the more private the data. By way of additional context, for two trips to have the same value in this example they would have to have the same pickup and drop off points. In the first view of this data, I will focus on extremely course data intended to provide maximal [Privacy](../../Skills/Data%20Science/Privacy.md). When you share GPS location data with zero decimal points you have rendered the users less identifiable with high k-anonymity values. Let's first focus on the top two rows on the table where I have just highlighted the text. In this case, you will find that for all users, that is 100% of users, you can find at least one other trip giving you a k-anonymity value of two, four other trips giving you a k-anonymity value of five, all the way through 999 other trips giving you a k-anonymity value of 1000 users with the same value. The reason this happens is that a lot of different pickup and drop off locations have now been made equal because of GPS location data rounding. Just as the 11:21 am pickup time and the 11:22 am pickup time a few slides ago became 11:30 am pickup times because of time rounding.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Privacy](../../Skills/Data%20Science/Privacy.md) (1)
> **Env Vars:** gps (4)
> **CLI Commands:** find (2), make (1)
> **Ports:** :21 (1), :22 (1), :30 (1)
> **Speakers:** - [instructor] (1)

#### [k-Anonymity: With very granular data](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/k-anonymity-with-very-granular-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/k-anonymity-with-very-granular-data?u=76281980&t=0)** - [Instructor] Let's now look at the same data through a very different lens to understand k-Anonymity even better. In the second view of this data, I will focus on very precise location data intended to provide very high quality but very little [Privacy](../../Skills/Data%20Science/Privacy.md). The more decimal points you have in the GPS coordinates, the more precise the location of the user will be and therefore, the more identifiable the user is. Please focus on the bottom two rows in the table. I will highlight those rows for easy access. As you can see, I've now highlighted the bottom two rows. In this case, the k-Anonymity is lower and that is because the number of users who share the same GPS location is lower. Therefore, as you go lower in the table, the k-Anonymity values are lower and decrease even further as you go from left to right. For example, when you display five GPS decimal points, 68.4% of users have a k-Anonymity value of two. That is for 68.4% of the users, you can find one other user with the same trip values. If we were to shave off one decimal point and offer GPS locations with four decimal points, we now see that for 97.4% of users, you can find a similar ride, so that you have a k-Anonymity value of two for 97.4% of users. As we have seen before, the less precise the data, the more anonymity you can provide for users. On the far right, if we were to provide five GPS decimal points and wish to provide a k-Anonymity value of 1,000, that is find 999 other similar rides for someone, we can only do so for 0.9% of riders. As a result, there is very little anonymity
>
> **[1:34](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/k-anonymity-with-very-granular-data?u=76281980&t=94)** given the very precise nature of the location data in this use case.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Privacy](../../Skills/Data%20Science/Privacy.md) (1)
> **Env Vars:** gps (5)
> **Versions:** 68.4 (2), 97.4 (2), 0.9 (1)
> **CLI Commands:** find (3)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [k-Anonymity: Industry best practice](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/k-anonymity-industry-best-practice?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/k-anonymity-industry-best-practice?u=76281980&t=0)** - [Instructor] In the final view of this data, I will focus on k-anonymity value of five, since that is widely accepted as a best practice across the industry. In this table, let's focus on the column for N equal to five, which I will now highlight. As you can see, I have highlighted the column for a k-anonymity value of five. As we work our way down this column, we will see what happens to k-anonymity as we add more and more decimal points, that is make our location data more precise and therefore less private. As we have already established, the more decimal points we add, the more precise our data and therefore the more identifiable the user will be whose GPS coordinates we are looking at. And therefore the number of users who have K-anonymity value of five will go down. To start with, when we have zero decimal points, that is a courser location that for all users in our cohort we can find four others with the same values. That is 100% of users have a k-anonymity value of five. The same holds true for one and two decimal points. That is you could have GPS coordinates with up to two decimal points and still have k-anonymity of five. That is, for every user you will still have four others with identical trip values. When you add a third decimal point, this is when you hit an infection point. That is, this is the first time that not every user in the cohort has k-anonymity value of five. There will be at least some users for whom there will not be at least four others with identical values. However, it turns out that even if you add the third decimal point while shooting for a k-anonymity value of 5, 99.8% of users will have a k-anonymity value of five. So if your goal is to have a k-anonymity value of five, we would need to suppress only 0.2% of the data.
>
> **[1:34](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/k-anonymity-industry-best-practice?u=76281980&t=94)** That is, if you wanted to share this data and a k-anonymity value of five meets your [Privacy](../../Skills/Data%20Science/Privacy.md) standards you could do so by suppressing only 0.2% of those records. When it comes to minimizing privacy risks in [Data Sharing](../../Skills/Database%20Management/Data%20Sharing.md) k-anonymity may not be enough. In the previous slide, we saw how the industry best practice of k-anonymity value of five provides a meaningful balance between privacy and usability. However, k-anonymity has its limitations as well, which is why I will show you yet another tool to help you anonymize data before you share it. This tool is called l-diversity. In the next chapter, we will consider a use case that shows the limitations of k-anonymity and how l-diversity can help address those limitations.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Privacy](../../Skills/Data%20Science/Privacy.md) (3), [Data Sharing](../../Skills/Database%20Management/Data%20Sharing.md) (1)
> **Versions:** 0.2 (2), 99.8 (1)
> **CLI Commands:** make (1), find (1)
> **Env Vars:** gps (2)
> **Definitions:** is a  (1), is called (1)
> **Best Practices:** best practice (2)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)


### 4. l-Diversity

[↑ Back to Table of Contents](#table-of-contents)

#### [How l-diversity helps privacy](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/how-l-diversity-helps-privacy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/how-l-diversity-helps-privacy?u=76281980&t=0)** - [Instructor] In order for us to understand the limitations of k-Anonymity, let's look at a specific use case. Let's assume you end up with a k-Anonymity value of 5 but there is at least one pickup point in your data set such that every trip from that specific pickup point goes to the same destination. In this instance, using external data, you may be able to learn where any passenger from that starting point would go. So you have additional work to do to ensure that [Privacy](../../Skills/Data%20Science/Privacy.md) is protected. This is where l-Diversity can help. L-Diversity will help ensure that there is a diversity of potential pickups and drop-offs. Thus, for every trip that is reported in a specific time window, a pickup must have at least l different potential drop-offs and every drop-off must have at least l potential pickups.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Privacy](../../Skills/Data%20Science/Privacy.md) (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [k-Anonymity vs. l-diversity](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/k-anonymity-vs-l-diversity?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/k-anonymity-vs-l-diversity?u=76281980&t=0)** - [Instructor] We have seen the tension that exists between security and [Privacy](../../Skills/Data%20Science/Privacy.md), and we have also seen now that there can be tension between privacy and [Data Quality](../../Skills/Data%20Science/Data%20Quality.md). Let's look at an example in the next slide. There may be situations where K anonymity may filter out way too much data. In those cases, L diversity would be a much better tool. In the diagram on the slide here the dots on the left represent right pickups and the dots on the right represent right dropoffs. If you apply a K anonymity value of two you will filter around every single ride, since no two rides have the same pickup and the same dropoff. If on the other hand, you separate the pickups and drop-offs and apply an L diversity value of two, you can retain the entire dataset while preserving privacy as well. In this specific scenario, let's assume you're trying to study the density of pickups, and your business goal is if you see a specific location and observe that there's an uptick in pickups, you may want to send more cabs there to reduce wait times and have a better customer experience. In this case, it makes even more sense to disconnect the pickups and drop offs and not store them as one trip. You could even delete the drop off portion of the data set altogether. So you will now be left with less data, which means lower storage costs. The data you do have is more germane to your use case, so you have better data quality. Finally, not having the entire trip store end-to-end means you have better privacy. So L diversity is a win-win-win across the board. You could apply it while storing data internally, and while sharing the same data externally. This is why I've shown you so many different privacy techniques in the wider context
>
> **[1:32](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/k-anonymity-vs-l-diversity?u=76281980&t=92)** of data quality and security. This is an art and a science, rather than just an art or a science.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Privacy](../../Skills/Data%20Science/Privacy.md) (5), [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) (3)
> **Definitions:** is a  (1), is an  (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)


### 5. The Challenge of Privacy: Your Digital Fingerprint

[↑ Back to Table of Contents](#table-of-contents)

#### [Your physical fingerprint](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/your-physical-fingerprint?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/your-physical-fingerprint?u=76281980&t=0)** - [Lecturer] In several parts of the world, the human fingerprint is used as the default identifier for several basic aspects of life, like getting government benefits, proving your eligibility to vote, et cetera. In the U.S., I had to give the government my fingerprints several times during my naturalization process as a U.S. citizen. I recently read a paper titled "Unique In the Crowd: The [Privacy](../../Skills/Data%20Science/Privacy.md) Bounds of Human Mobility", that defines how identifiable you can be via your human fingerprint. The link to that paper is on the bottom left of the slide on your screen right now. The paper states that 12 points are required to uniquely identify a human fingerprint. The paper then proceeds to examine how your digital fingerprint, that is, data about where you are and when, identifies you. This can be especially critical when you are on the move and there is other data available about you elsewhere.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Privacy](../../Skills/Data%20Science/Privacy.md) (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [lecturer] (1)

#### [Your digital fingerprint](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/your-digital-fingerprint?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/your-digital-fingerprint?u=76281980&t=0)** - [Host] As part of their study, the researchers looked at 15 months of human mobility data for 1.5 million individuals. Here's their key finding. Human mobility traces are highly unique. Again, human mobility traces are highly unique. Your spatial temporal data is highly identifying. By spatial temporal data, I mean where you are and when. In fact, in a dataset where the location of an individual was specified hourly and with a spatial resolution equal to that given by the carriers antennas, four spatial temporal points were enough to uniquely identify roughly 95% of the individuals in that dataset. In short, your digital fingerprint is about three times, I repeat three times, more identifiable than your human fingerprint.

> [!info]- Semantic Content
>
> **Versions:** 1.5 (1)
> **Speakers:** - [host] (1)

#### [The power of joining outside data](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/the-power-of-joining-outside-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/the-power-of-joining-outside-data?u=76281980&t=0)** - Throughout this course, we have repeatedly mentioned that even if you try to anonymize user data, you need to be mindful that someone else may still be able to identify that user using external data. When I mentioned this at industry events, conferences or even to engineers who report into me, they all seem very skeptical at times. Too often, [Privacy](../../Skills/Data%20Science/Privacy.md) and security experts get a bit too cocky in their own skills. Well, let's look at two specific examples that are outside data approved to be more potent than privacy and security controls. Let's look at the first example. A simply anonymized data set does not contain name, home address, phone number, or other obvious identifiers. Yet, if an individual's patterns are unique enough, outside data could be used to link that information back to the individual. Remember, the Strava example had highly concentrated runs in a very sparsely populated area. For instance, in one study, a medical database was successfully combined with a voter's list to extract the health record of a governor of the state of Massachusetts. The second example will speak to many of us who have active social media lives but try to keep our professional profiles somewhat disconnected from our personal profiles. Journalist Ashley Feinberg successfully identified a personal Twitter account that belonged to Senator Mitt Romney of Utah. Senator Romney is a former presidential candidate as well as a highly successful venture capitalist in his previous life. In an interview to the Atlantic Magazine, Senator Romney stated that he had a secret Twitter account that he used to keep tabs on the political conversation. Feinberg saw this as a challenge. Romney had let slip in the interview
>
> **[1:33](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/the-power-of-joining-outside-data?u=76281980&t=93)** that he was following 668 people, and Feinberg realized that she could track Romney down based on her guests that a family man like Romney, would want to keep close tabs on his offspring on Twitter. She found an account for the politician's oldest grandchild which added fewer than 500 followers, could feasibly be calm for people who could be Mitt Romney. She eliminated profiles that are too many followers and looked for someone with the peculiar interest in people who would belong to Mitt Romney's orbit. It may also have an instructive that the Twitter handle of the correct account was, Pierre Delecto, and that Senator Romney had spent time in France as a missionary. Senator Romney confirmed soon enough that that account indeed was his.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Privacy](../../Skills/Data%20Science/Privacy.md) (2)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)
> **Speakers:** - throughout (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-sharing/next-steps?u=76281980&t=0)** - I was recently discussing [Data Sharing](../../Skills/Database%20Management/Data%20Sharing.md) and the digital economy with my neighbor. His wife works at a major tech company and he himself is a chef. He told me that his relationship with tech companies is defined by understanding and trust. He does not understand how tech companies handle his data and therefore does not trust tech companies even though his wife works at one. Even though tech companies are extremely profitable and create tons of jobs, they have lost public trust. A key part of winning back this trust comes with treating data with respect and sharing their data in a way that does not lose sight of the fact that behind all those [Databases](../../Skills/Software%20Development/Databases.md), behind all of those metrics, behind all of those [Dashboards](../../Skills/Data%20Science/Dashboards.md), is a real human being. The techniques we reviewed in this course will help ensure that your users and their data are safe from misuse by any partner you may share data with. I would encourage studying those techniques, testing them, and using them, and then you may need to improvise on your own and investigate further. As your data becomes even more anonymized and your sharing becomes safer, the number of [Privacy](../../Skills/Data%20Science/Privacy.md) incidents you face should decrease in number and impact. Then the trust between the tech industry and their users will become a reality rather than sarcasm. Thank you for listening. Thank you for learning. Let's do this.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Sharing](../../Skills/Database%20Management/Data%20Sharing.md) (1), [Databases](../../Skills/Software%20Development/Databases.md) (1), [Dashboards](../../Skills/Data%20Science/Dashboards.md) (1), [Privacy](../../Skills/Data%20Science/Privacy.md) (1)
> **Definitions:** is a  (2)
> **Speakers:** - i (1)


## Instructor

- [Nishant Bhajaria](../../Instructors/Cybersecurity/Nishant%20Bhajaria.md)

## Skills Covered

- Data Sharing
- Data Privacy
- Privacy

## Path Context

### In [Build a Privacy Program](../../Paths/Cybersecurity/Learning%20Paths/Build%20a%20Privacy%20Program.md)
← [Privacy, Governance, and Compliance- Data Classification and Inventory](Privacy%2C%20Governance%2C%20and%20Compliance-%20Data%20Classification%20and%20Inventory.md) | **5 of 5**

## Appears In

- [Build a Privacy Program](../../Paths/Cybersecurity/Learning%20Paths/Build%20a%20Privacy%20Program.md)

## Related Courses

_Courses sharing skills:_

- [Privacy in the New World of Work](Privacy%20in%20the%20New%20World%20of%20Work.md) — Privacy, Data Privacy
- [Building a Privacy Program in the Age of GenAI](Building%20a%20Privacy%20Program%20in%20the%20Age%20of%20GenAI.md) — Privacy, Data Privacy
- [Understanding and Prioritizing Data Privacy](Understanding%20and%20Prioritizing%20Data%20Privacy.md) — Privacy, Data Privacy
- [GitHub Foundations- Privacy, Security, and Administration](../Artificial%20Intelligence%20(AI)/GitHub%20Foundations-%20Privacy%2C%20Security%2C%20and%20Administration.md) — Privacy
- [Data Rights Foundations](../Data%20Science/Data%20Rights%20Foundations.md) — Data Privacy

---

[↑ Back to top](#)