---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: descriptive-healthcare-analytics-in-r
url: "https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r"
duration_minutes: 283
duration: 4h 43m
level: Advanced
updated: 10/31/2024
learners: 27032
skills:
  - R (Programming Language)
  - Healthcare Analytics
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQEsqKudPj6CQA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1729286231125?e=2147483647&amp;v=beta&amp;t=N4WYT_GHuxYmK0n38WwIFquO1QH4DjqeHmF-v-yVgRo"
linkedin_topic: Data Science
learning_paths:
  - Hands-On Healthcare Analytics
path_count: 1
tags:
  - course
  - topic/data-science
  - topic/devops
  - topic/network-and-system-administration
  - topic/software-development
  - skill/r-programming-language
  - skill/healthcare-analytics
status: not-started
created: 2026-04-19
---

![Descriptive Healthcare Analytics in R](https://media.licdn.com/dms/image/v2/D560DAQEsqKudPj6CQA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1729286231125?e=2147483647&amp;v=beta&amp;t=N4WYT_GHuxYmK0n38WwIFquO1QH4DjqeHmF-v-yVgRo)

# Descriptive Healthcare Analytics in R

> Analyze behavior and risk using R, the open-source statistical computing software. R provides an environment and a language you can use to analyze data, including the publicly available Behavioral Risk Factor Surveillance Survey (BRFSS) dataset. This course teaches core healthcare data science skills, including epidemiology, as well as how to perform a cross-sectional analysis, set up a data dicti

> [LinkedIn Learning](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r) | 4h 43m | Advanced | 27K learners
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Monika Wahi]]

## Resources

- Exercise files available

## Skills Covered

- R (Programming Language)
- Healthcare Analytics

## Table of Contents

### Introduction

#### Welcome
> [LinkedIn Learning](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/welcome?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/welcome?u=76281980&t=0)** - [Monika] Ever wondered how to do 2 a descriptive analysis? 3 Curious about how to use R for health analytics? 4 In this course, I'll teach you how to download the dataset 5 and use the BRFSS documentation. 6 I'll also show you how to download R 7 and set that up for your analysis. 8 Then, together, we will generate an analytic dataset 9 and conduct a descriptive analysis 10 complete with bivariate statistical tests. 11 We will use the publicly available 12 Behavioral Risk Factor Surveillance System or BRFSS dataset 13 to create a descriptive analysis using our software. 14 I'm Monika Wahi, and welcome to my course 15 on Descriptive Health Analytics in R. 16 Ready for R? Let's get started.

> [!info]- Semantic Content
>
> **Env Vars:** brfss (2)
> **Code Keywords:** let (1)
> **Exercise Files:** download the (1)
> **Speakers:** - [monika] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/what-you-should-know-24785620?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/what-you-should-know-24785620?u=76281980&t=0)** - [Instructor] You should have already had at least one course in basic statistics.
>
> **[0:05](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/what-you-should-know-24785620?u=76281980&t=5)** Also, you should have a background in health, healthcare, or public health.
>
> **[0:09](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/what-you-should-know-24785620?u=76281980&t=9)** However, you don't need a heavy background in statistical programming.
>
> **[0:14](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/what-you-should-know-24785620?u=76281980&t=14)** This is not so much a course in R, per se, but a course that shows you how to develop a descriptive analysis using health data.
>
> **[0:22](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/what-you-should-know-24785620?u=76281980&t=22)** We use R to make our deliverable, a completed descriptive analysis on a health topic.
>
> **[0:28](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/what-you-should-know-24785620?u=76281980&t=28)** I've provided you a full set of exercise files and links to public datasets when I updated the course.
>
> **[0:35](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/what-you-should-know-24785620?u=76281980&t=35)** Be sure to download all the exercise files before we get started.
>
> **[0:39](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/what-you-should-know-24785620?u=76281980&t=39)** I use datasets from multiple years, so feel free to follow along with me using the most current version of the dataset if the year I'm working with is no longer easily accessible.
>
> **[0:50](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/what-you-should-know-24785620?u=76281980&t=50)** I also recommend you use the latest version of R for your operating system as you follow along.
>
> **[0:57](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/what-you-should-know-24785620?u=76281980&t=57)** I'm using Version 3.3.1 and 4.4.1 for Windows.
>
> **[1:02](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/what-you-should-know-24785620?u=76281980&t=62)** Let's get started.

> [!info]- Semantic Content
>
> **Code Keywords:** public (2), let (1)
> **Versions:** version 3 (1), 3.1 (1), 4.4.1 (1)
> **Exercise Files:** exercise files (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)


### 1. What Is the BRFSS?

#### U.S. risk factors
> [LinkedIn Learning](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/us-risk-factors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/us-risk-factors?u=76281980&t=0)** - [Narrator] In this section, I will explain what is meant by risk factor surveillance.
>
> **[0:04](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/us-risk-factors?u=76281980&t=4)** Then I will describe to you the two main systems the US uses for risk factor surveillance: the NHANES and the BRFSS.
>
> **[0:12](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/us-risk-factors?u=76281980&t=12)** Later, I will compare the pros and cons of using each dataset for analysis.
>
> **[0:17](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/us-risk-factors?u=76281980&t=17)** So what is risk factor surveillance?
>
> **[0:19](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/us-risk-factors?u=76281980&t=19)** Well, it's keeping track of the rates of risk factors which are things we do or states we are in that confer risk to our health.
>
> **[0:28](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/us-risk-factors?u=76281980&t=28)** Imagine you hear on the radio or read in the newspaper that 14.7% of Massachusetts adults smoked in 2014.
>
> **[0:37](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/us-risk-factors?u=76281980&t=37)** Where do you think this number comes from?
>
> **[0:39](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/us-risk-factors?u=76281980&t=39)** How do we know this?
>
> **[0:41](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/us-risk-factors?u=76281980&t=41)** Usually estimates such as smoking rates come from one of two main surveillance systems in the US: the NHANES and the BRFSS.
>
> **[0:49](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/us-risk-factors?u=76281980&t=49)** I'll start with the NHANES.
>
> **[0:51](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/us-risk-factors?u=76281980&t=51)** The National Health and Nutrition Examination Survey, or NHANES, is conducted by the U.S. Centers for Disease Control and Prevention, or CDC, which is a federal agency.
>
> **[1:02](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/us-risk-factors?u=76281980&t=62)** In the NHANES, neighborhoods, households, and individuals are sampled and data collectors visit respondents in person using a mobile examination center, or MEC.
>
> **[1:12](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/us-risk-factors?u=76281980&t=72)** These respondents provide answers to questionnaires but also undergo clinical measurements such as weight, height, and blood pressure.
>
> **[1:21](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/us-risk-factors?u=76281980&t=81)** The NHANES is done every two years.
>
> **[1:23](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/us-risk-factors?u=76281980&t=83)** Many researchers express interest in the NHANES dataset which is publicly available because they are impressed with the inclusion of clinical measurements, but there are a lot of challenges to the use of the NHANES dataset.
>
> **[1:35](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/us-risk-factors?u=76281980&t=95)** First, the datasets from each form are stored separately, so there is a lot of assembly required when developing an analytic dataset.
>
> **[1:44](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/us-risk-factors?u=76281980&t=104)** Next, compared to the BRFSS, there are relatively fewer records, around 10 thousand total.
>
> **[1:50](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/us-risk-factors?u=76281980&t=110)** And these may not all be usable due to low participation rates and high refusal rates.
>
> **[1:55](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/us-risk-factors?u=76281980&t=115)** And therefore, you have to wonder if there is selection bias at play.
>
> **[2:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/us-risk-factors?u=76281980&t=120)** So as you probably guessed, I'm not a big fan of the NHANES.
>
> **[2:03](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/us-risk-factors?u=76281980&t=123)** Even though it has clinically-measured variables, my opinion is that the complexity and bias offset that advantage.
>
> **[2:10](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/us-risk-factors?u=76281980&t=130)** Hence, I'm a much bigger fan of the second main public health surveillance effort in the US, the Behavioral Risk Factor Surveillance System, or BRFSS, which is done on a yearly cycle.
>
> **[2:21](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/us-risk-factors?u=76281980&t=141)** You'll see the differences between BRFSS and NHANES.
>
> **[2:25](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/us-risk-factors?u=76281980&t=145)** First, while the CDC organizes the BRFSS and provides supports to states doing the BRFSS, the data collection is actually run at the state level.
>
> **[2:35](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/us-risk-factors?u=76281980&t=155)** Next, instead of running around neighborhoods in a MEC, the BRFSS does anonymous phone surveys by simply randomly generating phone numbers, calling them, and doing the survey.
>
> **[2:46](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/us-risk-factors?u=76281980&t=166)** Admittedly, BRFSS was a little late to the gate in getting cell phone numbers into the sampling frame, but they worked very hard on it.
>
> **[2:54](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/us-risk-factors?u=76281980&t=174)** And now their sampling appears to be fairly robust.
>
> **[2:57](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/us-risk-factors?u=76281980&t=177)** Also, they compile the dataset annually instead of every two years like NHANES.
>
> **[3:03](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/us-risk-factors?u=76281980&t=183)** Next, there is this concept in the BRFSS of core questions and questions from modules.
>
> **[3:10](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/us-risk-factors?u=76281980&t=190)** Because the feds organize the BRFSS, there are certain questions they insist are asked pretty much the same way every year as these are part of the core questions every year that states are obligated to ask.
>
> **[3:22](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/us-risk-factors?u=76281980&t=202)** This way, the feds can trend rates of, say, smoking.
>
> **[3:27](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/us-risk-factors?u=76281980&t=207)** But states are the ones who are actually doing the survey.
>
> **[3:30](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/us-risk-factors?u=76281980&t=210)** Therefore, they have their own needs.
>
> **[3:32](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/us-risk-factors?u=76281980&t=212)** And to accommodate those, they use different sets of validated BRFSS modules each year so they can keep tabs on their state-specific problems.
>
> **[3:41](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/us-risk-factors?u=76281980&t=221)** For example, some states have cities with smog problems, and those states may choose to include the asthma / adult asthma history module one year.
>
> **[3:50](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/us-risk-factors?u=76281980&t=230)** Or states experiencing a spike in racially-motivated violence might choose to include the reactions to race module that year.
>
> **[3:58](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/us-risk-factors?u=76281980&t=238)** The answers to the core questions are available publicly in a huge dataset you can download.
>
> **[4:05](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/us-risk-factors?u=76281980&t=245)** Some researchers don't trust the BRFSS because people are expected to self-report conditions such as having diabetes.
>
> **[4:13](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/us-risk-factors?u=76281980&t=253)** Unlike in NHANES, there is a lack of clinical confirmation of self-reported conditions in other metrics in BRFSS.
>
> **[4:20](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/us-risk-factors?u=76281980&t=260)** But many analyses have shown that the BRFSS is pretty accurate.
>
> **[4:24](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/us-risk-factors?u=76281980&t=264)** Some, such as myself, believe that the reduced selection bias in a large sample associated with BRFSS helps overcome the possible misclassification problems introduced by the phone versus in-person survey and that these biases are preferable to the more severe selection bias present in the smaller NHANES sample.
>
> **[4:45](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/us-risk-factors?u=76281980&t=285)** But there is no right answer, whatever floats your boat.
>
> **[4:49](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/us-risk-factors?u=76281980&t=289)** So some see the main drawback to the BRFSS is a lack of clinical confirmation due to the nature of it being a phone survey.
>
> **[4:56](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/us-risk-factors?u=76281980&t=296)** There is another drawback.
>
> **[4:58](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/us-risk-factors?u=76281980&t=298)** Unfortunately, only the results of the core questions are available publicly with documentation.
>
> **[5:04](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/us-risk-factors?u=76281980&t=304)** If you want state module questions, you'll have to contact that state's public health department and see if they're willing to share their module data with you.
>
> **[5:13](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/us-risk-factors?u=76281980&t=313)** So now, I'm done with our quick review of US risk factors surveillance systems: the NHANES and the BRFSS.
>
> **[5:20](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/us-risk-factors?u=76281980&t=320)** In the next section we'll learn more about the BRFSS data so we can be armed with the necessary knowledge when we move forth and analyze it in later chapters.

> [!info]- Semantic Content
>
> **Env Vars:** brfss (19), nhanes (14), cdc (2), mec (2)
> **Code Keywords:** module (4), public (2), self (2)
> **Analogies:** such as (4), imagine (1), for example (1)
> **Definitions:** is a  (3)
> **Versions:** 14.7 (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [narrator] (1)

#### Introduction to the BRFSS
> [LinkedIn Learning](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/introduction-to-the-brfss?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/introduction-to-the-brfss?u=76281980&t=0)** - [Instructor] Welcome to chapter one, section two where I give a more formal introduction to you about the BRFSS.
>
> **[0:07](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/introduction-to-the-brfss?u=76281980&t=7)** This section will describe how the BRFSS is organized through both federal and state government levels.
>
> **[0:13](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/introduction-to-the-brfss?u=76281980&t=13)** Next, I'll give examples of how the government uses these data.
>
> **[0:18](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/introduction-to-the-brfss?u=76281980&t=18)** So what specific role does the BRFSS play in US public health surveillance?
>
> **[0:24](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/introduction-to-the-brfss?u=76281980&t=24)** Let's talk about how we know that 14.7% of Massachusetts adults smoked in 2014.
>
> **[0:31](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/introduction-to-the-brfss?u=76281980&t=31)** We get this number from a profile report on the health of Massachusetts adults that was written by the Massachusetts Department of Public Health.
>
> **[0:40](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/introduction-to-the-brfss?u=76281980&t=40)** We know smoking questions are in the core, so not only does Massachusetts care about the results, the CDC also cares.
>
> **[0:47](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/introduction-to-the-brfss?u=76281980&t=47)** Here's an example of what the Feds do with the data.
>
> **[0:50](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/introduction-to-the-brfss?u=76281980&t=50)** They can make a national map and figure out where smoking prevalence is highest, and then target those areas to encourage smoking cessation.
>
> **[0:58](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/introduction-to-the-brfss?u=76281980&t=58)** As I described before, while NHANES is run entirely at the federal level, the BRFSS represents a collaboration between the federal CDC and state health departments.
>
> **[1:09](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/introduction-to-the-brfss?u=76281980&t=69)** The CDC's role is to organize the effort.
>
> **[1:12](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/introduction-to-the-brfss?u=76281980&t=72)** The CDC helps the states with their landline and cellphone sampling, and they also make core and module questionnaires and associated resources available so states can use them.
>
> **[1:22](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/introduction-to-the-brfss?u=76281980&t=82)** In addition, the CDC provides the states standardized data collection training.
>
> **[1:27](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/introduction-to-the-brfss?u=76281980&t=87)** Also as I showed you before with that national smoking rates map, the CDC analyzes data and writes reports to inform themselves of the state of the nation's health.
>
> **[1:37](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/introduction-to-the-brfss?u=76281980&t=97)** They publish the results on government websites and also in Mortality and Morbidity Weekly Report or MMWR.
>
> **[1:46](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/introduction-to-the-brfss?u=76281980&t=106)** But the CDC does not actually collect the data.
>
> **[1:49](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/introduction-to-the-brfss?u=76281980&t=109)** Data collection takes place at the state level, so states either have their own phone rooms or hire out contractors to complete the landline and cellphone survey data collection.
>
> **[1:58](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/introduction-to-the-brfss?u=76281980&t=118)** Each state must administer the core questions, but they are responsible for selecting which modules they want to do each year.
>
> **[2:05](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/introduction-to-the-brfss?u=76281980&t=125)** Once the data collection is done, the states are required to submit their core data to the CDC, so it can be made available, along with the resources to analyze it.
>
> **[2:13](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/introduction-to-the-brfss?u=76281980&t=133)** And like the CDC, state health departments do their own analysis of the BRFSS data to help guide their public health policy, just like that report I showed you from the Massachusetts Department of Public Health where that rate of smoking came from.
>
> **[2:27](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/introduction-to-the-brfss?u=76281980&t=147)** So to conclude, the BRFSS represents a collaboration between the federal CDC and local state public health authorities.
>
> **[2:35](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/introduction-to-the-brfss?u=76281980&t=155)** These governments use the data for evaluating the levels of risk factors in the population.
>
> **[2:40](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/introduction-to-the-brfss?u=76281980&t=160)** But they are not the only ones who use the data.
>
> **[2:43](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/introduction-to-the-brfss?u=76281980&t=163)** You can use them too.
>
> **[2:45](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/introduction-to-the-brfss?u=76281980&t=165)** I'll cover that in the next section.

> [!info]- Semantic Content
>
> **Env Vars:** cdc (10), brfss (6), nhanes (1), mmwr (1)
> **Code Keywords:** public (5), let (1), module (1), from. (1)
> **CLI Commands:** make (2)
> **Versions:** 14.7 (1)
> **Cross-References:** in the next (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### More on the BRFSS
> [LinkedIn Learning](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/more-on-the-brfss?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/more-on-the-brfss?u=76281980&t=0)** - [Instructor] Welcome to chapter one, section three, where I cover more information about the BRFSS.
>
> **[0:06](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/more-on-the-brfss?u=76281980&t=6)** First, I'm going to review the availability of the BRFSS data and the also the accompanying documentation.
>
> **[0:14](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/more-on-the-brfss?u=76281980&t=14)** I'm also going to review the update schedule of the data.
>
> **[0:17](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/more-on-the-brfss?u=76281980&t=17)** In the bad old days before the internet, it was really hard to share the BRFSS data.
>
> **[0:23](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/more-on-the-brfss?u=76281980&t=23)** This was only for technological reasons.
>
> **[0:26](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/more-on-the-brfss?u=76281980&t=26)** Remember, data collectors are calling randomly generated phone numbers, and no personally identifying information is asked, so this is already a very anonymous data set.
>
> **[0:36](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/more-on-the-brfss?u=76281980&t=36)** But the large amount of data and the resources needed to understand it were hard to transfer in the past, and this has all been solved through the internet.
>
> **[0:45](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/more-on-the-brfss?u=76281980&t=45)** Nowadays, the CDC makes these yearly data sets along with documentation easily available, and this presents many opportunities.
>
> **[0:54](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/more-on-the-brfss?u=76281980&t=54)** These data represent your tax money at work.
>
> **[0:57](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/more-on-the-brfss?u=76281980&t=57)** There is a lot of work involved in collecting these data.
>
> **[1:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/more-on-the-brfss?u=76281980&t=60)** So, of course, it is best if we can promote the use of these data in analyses that are not already completed by the CDC and the state health departments.
>
> **[1:09](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/more-on-the-brfss?u=76281980&t=69)** This chapter will go more deeply later into why an independent researcher would want to download these data and use them in an analysis.
>
> **[1:17](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/more-on-the-brfss?u=76281980&t=77)** So as a reminder of the two types of data available, the main two public health surveillance efforts in the U.S.
>
> **[1:23](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/more-on-the-brfss?u=76281980&t=83)** are the NHANES, which includes clinical measurements, and the the BRFSS, which is an anonymous phone survey that represents a federal and state collaboration.
>
> **[1:33](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/more-on-the-brfss?u=76281980&t=93)** The data and documentation from the BRFSS are publicly available and are useful to the CDC and the states for program planning.
>
> **[1:41](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/more-on-the-brfss?u=76281980&t=101)** But they are also useful to you, the researcher.
>
> **[1:43](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/more-on-the-brfss?u=76281980&t=103)** The next section will focus on how independent researchers can use BRFSS data, as they go about their scientific work.

> [!info]- Semantic Content
>
> **Env Vars:** brfss (6), cdc (3), nhanes (1)
> **Definitions:** is a  (1), is an  (1)
> **Code Keywords:** public (1)
> **Speakers:** - [instructor] (1)

#### What is a descriptive BRFSS analysis?
> [LinkedIn Learning](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/what-is-a-descriptive-brfss-analysis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/what-is-a-descriptive-brfss-analysis?u=76281980&t=0)** - [Instructor] This lecture is going to explain specifically what is meant by a BRFSS descriptive analysis.
>
> **[0:07](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/what-is-a-descriptive-brfss-analysis?u=76281980&t=7)** First, I want to share with you how I conceptualize approaching a BRFSS analysis.
>
> **[0:14](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/what-is-a-descriptive-brfss-analysis?u=76281980&t=14)** I divide them into two main types, descriptive and analytic.
>
> **[0:18](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/what-is-a-descriptive-brfss-analysis?u=76281980&t=18)** This section will describe the descriptive approach.
>
> **[0:21](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/what-is-a-descriptive-brfss-analysis?u=76281980&t=21)** In the next section, we'll describe the analytic approach.
>
> **[0:24](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/what-is-a-descriptive-brfss-analysis?u=76281980&t=24)** Descriptive analysis just describes the rates in the population.
>
> **[0:29](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/what-is-a-descriptive-brfss-analysis?u=76281980&t=29)** Only it's not so simple, because remember, the CDC has a very complicated sampling approach.
>
> **[0:35](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/what-is-a-descriptive-brfss-analysis?u=76281980&t=35)** The goal of the sampling approach is to be able to weight the final data set out to make a population-based estimate.
>
> **[0:41](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/what-is-a-descriptive-brfss-analysis?u=76281980&t=41)** In fact, I'm literally talking about using the data fields present in the data set called the weight fields.
>
> **[0:49](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/what-is-a-descriptive-brfss-analysis?u=76281980&t=49)** Just to quickly remind you how weighting works, I'm going to show you how I weight the various components of the final grade I give in the statistics class I teach at Laboure College in Milton, Massachusetts.
>
> **[1:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/what-is-a-descriptive-brfss-analysis?u=76281980&t=60)** You will see that the weights add up to 100%.
>
> **[1:03](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/what-is-a-descriptive-brfss-analysis?u=76281980&t=63)** That's also true of the BRFSS weights.
>
> **[1:05](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/what-is-a-descriptive-brfss-analysis?u=76281980&t=65)** You will also see that I weight the midterm and the final rather highly, at 20%, meaning that they will impact the results from the data set more in the descriptive analysis where I use the weights.
>
> **[1:16](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/what-is-a-descriptive-brfss-analysis?u=76281980&t=76)** Notice that I only weight the homework at a mere 10%.
>
> **[1:20](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/what-is-a-descriptive-brfss-analysis?u=76281980&t=80)** But what the slide doesn't say is that I give a ton of homework assignments, one for every section we go over in the class.
>
> **[1:27](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/what-is-a-descriptive-brfss-analysis?u=76281980&t=87)** In BRFSS, something similar happens with respect to ethnic minorities.
>
> **[1:31](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/what-is-a-descriptive-brfss-analysis?u=76281980&t=91)** They are sampled at a high rate.
>
> **[1:33](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/what-is-a-descriptive-brfss-analysis?u=76281980&t=93)** Imagine, just as an example, including 100,000 African Americans, which would be about a fifth of everyone interviewed.
>
> **[1:41](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/what-is-a-descriptive-brfss-analysis?u=76281980&t=101)** But African Americans are not a fifth of the U.S. population.
>
> **[1:44](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/what-is-a-descriptive-brfss-analysis?u=76281980&t=104)** For example, in Minnesota, the census says that African Americans make up 5.9% of the population.
>
> **[1:51](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/what-is-a-descriptive-brfss-analysis?u=76281980&t=111)** So just like I'd have to take your final homework grade and multiply it by 10% to get it weighted properly, we'd have to take our BRFSS data set and, if we were analyzing Minnesota, take the African American records and multiply them by the proper weight for Minnesota.
>
> **[2:09](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/what-is-a-descriptive-brfss-analysis?u=76281980&t=129)** Let me stop here and just say that the last example is really oversimplifying how they do their sampling and weighting in BRFSS.
>
> **[2:16](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/what-is-a-descriptive-brfss-analysis?u=76281980&t=136)** They actually have weights for multiple attributes at once, such as African American women in a certain age group.
>
> **[2:24](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/what-is-a-descriptive-brfss-analysis?u=76281980&t=144)** BRFSS weighting is well-documented, highly debated, and has evolved intelligently through history.
>
> **[2:32](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/what-is-a-descriptive-brfss-analysis?u=76281980&t=152)** Weighting in BRFSS is definitely an art, but the main take-home message here is that a descriptive analysis depends on using these weights correctly, and the product is a bunch of population-based estimates.
>
> **[2:45](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/what-is-a-descriptive-brfss-analysis?u=76281980&t=165)** For this reason, even though independent researchers sometimes do a descriptive BRFSS analysis with the weights, usually, those types of reports are done by the CDC or the states.
>
> **[2:56](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/what-is-a-descriptive-brfss-analysis?u=76281980&t=176)** It's just because they are the type of researchers who need these rates to make decisions about public health policy.
>
> **[3:03](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/what-is-a-descriptive-brfss-analysis?u=76281980&t=183)** Here, for an example, let's look at an MMWR publication on tooth loss.
>
> **[3:09](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/what-is-a-descriptive-brfss-analysis?u=76281980&t=189)** This is admittedly a little old, 1995 through 1997 data, but let's just take a look at it to see how a weighted descriptive analysis is presented.
>
> **[3:19](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/what-is-a-descriptive-brfss-analysis?u=76281980&t=199)** See here in table one, how, for each state, starting with Alabama up here, there is an estimate for the rates of edentulousness, or having lost all natural teeth, in the state.
>
> **[3:30](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/what-is-a-descriptive-brfss-analysis?u=76281980&t=210)** And they can make these state-based estimates if they do a descriptive analysis using the BRFSS weights.
>
> **[3:37](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/what-is-a-descriptive-brfss-analysis?u=76281980&t=217)** See how in age 65 to 74 years in Alabama, the rate of edentulousness was estimated to be 35.3%.
>
> **[3:47](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/what-is-a-descriptive-brfss-analysis?u=76281980&t=227)** And they even have a 95% confidence interval for this rate because the BRFSS is a sample.
>
> **[3:53](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/what-is-a-descriptive-brfss-analysis?u=76281980&t=233)** So there is a standard error.
>
> **[3:55](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/what-is-a-descriptive-brfss-analysis?u=76281980&t=235)** Then, they also calculated an estimate for the age 75 and older group, and for Alabama, that is 37.2%.
>
> **[4:04](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/what-is-a-descriptive-brfss-analysis?u=76281980&t=244)** And of course, another great resource consists of other BRFSS papers and reports already published that are available all over the web.
>
> **[4:12](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/what-is-a-descriptive-brfss-analysis?u=76281980&t=252)** There's no central repository for them.
>
> **[4:14](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/what-is-a-descriptive-brfss-analysis?u=76281980&t=254)** But just go to Google Scholar, and you'll find all kinds of BRFSS peer-reviewed articles and governmental reports.
>
> **[4:21](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/what-is-a-descriptive-brfss-analysis?u=76281980&t=261)** Okay, so now you know what I mean specifically when I say I am talking about a BRFSS descriptive analysis.
>
> **[4:29](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/what-is-a-descriptive-brfss-analysis?u=76281980&t=269)** The data can produce rates of various conditions or risk factors in the population.
>
> **[4:34](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/what-is-a-descriptive-brfss-analysis?u=76281980&t=274)** And if the weights are used, we can actually predict how many people are out there with a certain condition, such as having no teeth.
>
> **[4:42](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/what-is-a-descriptive-brfss-analysis?u=76281980&t=282)** But you will see in chapter six, where I revisit the weights, that there are a lot of caveats to them.
>
> **[4:48](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/what-is-a-descriptive-brfss-analysis?u=76281980&t=288)** So let's move on to the next section, which will cover a different kind of analysis, cross-sectional analysis, and the ethical use of BRFSS data.

> [!info]- Semantic Content
>
> **Env Vars:** brfss (15), cdc (2), mmwr (1)
> **Code Keywords:** let (4), class. (1), public (1)
> **CLI Commands:** make (4), find (1)
> **Analogies:** such as (2), imagine (1), for example (1), just like (1)
> **Definitions:** is a  (3), is an  (1)
> **Versions:** 5.9 (1), 35.3 (1), 37.2 (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** go to (1)

#### Cross-sectional analysis in the BRFSS
> [LinkedIn Learning](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/cross-sectional-analysis-in-the-brfss?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/cross-sectional-analysis-in-the-brfss?u=76281980&t=0)** - Welcome to chapter one, section five.
>
> **[0:03](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/cross-sectional-analysis-in-the-brfss?u=76281980&t=3)** In the last section, I went over a descriptive approach to analyzing BRFSS data.
>
> **[0:08](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/cross-sectional-analysis-in-the-brfss?u=76281980&t=8)** Now, I will describe the analytic approach.
>
> **[0:11](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/cross-sectional-analysis-in-the-brfss?u=76281980&t=11)** This lecture will start by explaining that there are two ways to approach analysis of the BRFSS data set.
>
> **[0:18](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/cross-sectional-analysis-in-the-brfss?u=76281980&t=18)** We will focus on the descriptive approach in this course.
>
> **[0:20](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/cross-sectional-analysis-in-the-brfss?u=76281980&t=20)** I'll also explain how different professions use the BRFSS data and how it has different value in different settings.
>
> **[0:27](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/cross-sectional-analysis-in-the-brfss?u=76281980&t=27)** In the last lecture I explained to you what a descriptive analysis is and that we are going to do one in this course.
>
> **[0:34](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/cross-sectional-analysis-in-the-brfss?u=76281980&t=34)** In this lecture, I'll cover an analytic approach to the data through a cross-sectional analysis, which is covered more thoroughly in the other course and I'll also comment on the ethical use of BRFSS data.
>
> **[0:46](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/cross-sectional-analysis-in-the-brfss?u=76281980&t=46)** I described in the previous lectures how the government uses the BRFSS data to generate state-based rates of conditions and risk factors.
>
> **[0:53](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/cross-sectional-analysis-in-the-brfss?u=76281980&t=53)** On the other hand, independent researchers tend to be much more interested in using the whole data set, not just data from a particular state, as state departments do in using it to explore cross-sectional associations.
>
> **[1:07](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/cross-sectional-analysis-in-the-brfss?u=76281980&t=67)** Now, BRFSS is a cross-sectional survey, meaning the people contacted each year are different, so it represents a snapshot in time each year.
>
> **[1:16](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/cross-sectional-analysis-in-the-brfss?u=76281980&t=76)** Therefore, if you find an association between two variables, say having depression and drinking alcohol, you really can't tell what caused what, because you don't know if the depression preceded the alcohol, or the alcohol preceded the depression.
>
> **[1:31](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/cross-sectional-analysis-in-the-brfss?u=76281980&t=91)** It's the age old question, which came first: the chicken or the egg?
>
> **[1:35](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/cross-sectional-analysis-in-the-brfss?u=76281980&t=95)** Therefore, all you can explore realistically in BRFSS, are cross-sectional associations.
>
> **[1:42](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/cross-sectional-analysis-in-the-brfss?u=76281980&t=102)** So, are weights supposed to be used in an analytic analysis?
>
> **[1:46](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/cross-sectional-analysis-in-the-brfss?u=76281980&t=106)** This question sparks off a lot of debates, but the debates tend to be uninformed.
>
> **[1:51](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/cross-sectional-analysis-in-the-brfss?u=76281980&t=111)** I'll tell you how I walk through this question in my mind.
>
> **[1:54](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/cross-sectional-analysis-in-the-brfss?u=76281980&t=114)** I first ask, am I trying to estimate a population level relative risk?
>
> **[2:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/cross-sectional-analysis-in-the-brfss?u=76281980&t=120)** How I answer that is, I ask, am I using any inclusion or exclusion criteria on my data?
>
> **[2:06](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/cross-sectional-analysis-in-the-brfss?u=76281980&t=126)** You'll notice that MMWR paper on tooth loss did not exclude anyone in the age groups for which they were making an estimate.
>
> **[2:14](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/cross-sectional-analysis-in-the-brfss?u=76281980&t=134)** Let's look at this analytic paper that studied cancer survivors using BRFSS.
>
> **[2:19](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/cross-sectional-analysis-in-the-brfss?u=76281980&t=139)** Here, the study included a cohort of cancer survivors in a sample of controls.
>
> **[2:25](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/cross-sectional-analysis-in-the-brfss?u=76281980&t=145)** Since they filtered only certain records into the data, they really can't use the weights.
>
> **[2:29](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/cross-sectional-analysis-in-the-brfss?u=76281980&t=149)** Remember, the weight variable has to equal 100%.
>
> **[2:33](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/cross-sectional-analysis-in-the-brfss?u=76281980&t=153)** If you take out records, it's like taking out the final, or midterm, or homework grade from your statistics grade.
>
> **[2:39](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/cross-sectional-analysis-in-the-brfss?u=76281980&t=159)** I'd definitely get in trouble with my students if I did that and you'll get in trouble too, if you try to use the weights provided in BRFSS after removing some of the records.
>
> **[2:49](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/cross-sectional-analysis-in-the-brfss?u=76281980&t=169)** Yes, if you are clever and like to read BRFSS documentation, you can recalculate your weights for your new data set.
>
> **[2:57](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/cross-sectional-analysis-in-the-brfss?u=76281980&t=177)** But why? You're obviously doing an analytic study, not a descriptive one, so you are not aiming to develop population-based estimates.
>
> **[3:06](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/cross-sectional-analysis-in-the-brfss?u=76281980&t=186)** My suggestion is to throw out the weights if you are doing an analytic study that focuses on exploring associations in a certain sub-set of BRFSS records.
>
> **[3:14](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/cross-sectional-analysis-in-the-brfss?u=76281980&t=194)** Independent researchers tend to be more focused on studying associations, and for that reason, most of the analyses done with BRFSS data by non-government researchers are analytic in design.
>
> **[3:28](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/cross-sectional-analysis-in-the-brfss?u=76281980&t=208)** In conclusion, this lecture covered cross-sectional analyses and how they can explore hypotheses in the BRFSS.
>
> **[3:35](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/cross-sectional-analysis-in-the-brfss?u=76281980&t=215)** Also, it explained how independent researchers tend to prefer to use the BRFSS for analytic approaches rather than descriptive ones that are favored by the government.
>
> **[3:45](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/cross-sectional-analysis-in-the-brfss?u=76281980&t=225)** The next section will cover how independent researchers can ethically use BRFSS data for their projects.

> [!info]- Semantic Content
>
> **Env Vars:** brfss (15), mmwr (1)
> **Code Keywords:** let (1), throw (1)
> **Cross-References:** in the last (2)
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Analogies:** it's like (1)
> **Speakers:** - welcome (1)

#### Ethical use of BRFSS data
> [LinkedIn Learning](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/ethical-use-of-brfss-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/ethical-use-of-brfss-data?u=76281980&t=0)** - [Narrator] Hello everyone.
>
> **[0:01](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/ethical-use-of-brfss-data?u=76281980&t=1)** I hope you are getting excited about doing your own BRFSS analysis.
>
> **[0:06](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/ethical-use-of-brfss-data?u=76281980&t=6)** This section talks about ethical use of BRFSS data for independent projects.
>
> **[0:12](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/ethical-use-of-brfss-data?u=76281980&t=12)** The BRFSS is popular because the independent researcher can do a lot with the BRFSS data on her own.
>
> **[0:19](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/ethical-use-of-brfss-data?u=76281980&t=19)** Notice that using BRFSS data has no IRB obligations.
>
> **[0:24](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/ethical-use-of-brfss-data?u=76281980&t=24)** In other words, you don't have to get the designated human research ethics board to approve this research.
>
> **[0:29](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/ethical-use-of-brfss-data?u=76281980&t=29)** This is because BRFSS data, due to its anonymous nature, is not technically human research data according to the common rule which establishes the IRBs.
>
> **[0:41](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/ethical-use-of-brfss-data?u=76281980&t=41)** It also does not have HIPAA obligations.
>
> **[0:44](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/ethical-use-of-brfss-data?u=76281980&t=44)** HIPAA is the privacy act that governs the confidentiality of clinical data.
>
> **[0:48](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/ethical-use-of-brfss-data?u=76281980&t=48)** And BRFSS does not have clinical data, so it's exempt from HIPAA.
>
> **[0:53](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/ethical-use-of-brfss-data?u=76281980&t=53)** And since the data are produced as part of an anonymous survey and not by a covered entity or a CE as defined by HIPAA, the BRFSS data do not fall under the jurisdiction of HIPAA.
>
> **[1:04](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/ethical-use-of-brfss-data?u=76281980&t=64)** This frees you up from having to engage ethical bodies in the review of your research.
>
> **[1:09](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/ethical-use-of-brfss-data?u=76281980&t=69)** This feature can be particularly helpful for students who are on a timeline because the time needed for ethical review does not have to be figured into their timeline.
>
> **[1:18](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/ethical-use-of-brfss-data?u=76281980&t=78)** Because the data are already collected, master's theses and doctoral dissertations using BRFSS data can concentrate on analytic design rather than data collection.
>
> **[1:29](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/ethical-use-of-brfss-data?u=76281980&t=89)** If you are in graduate school and want to use BRFSS data for your master's thesis or doctoral dissertation, please check with your advisor.
>
> **[1:38](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/ethical-use-of-brfss-data?u=76281980&t=98)** Departments can have very picky rules as to what qualifies as an acceptable final analysis.
>
> **[1:43](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/ethical-use-of-brfss-data?u=76281980&t=103)** The government wants you to analyze the BRFSS.
>
> **[1:47](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/ethical-use-of-brfss-data?u=76281980&t=107)** Did you know you can apply for data analysis grants from NIH that will pay you to analyze the BRFSS and publish?
>
> **[1:55](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/ethical-use-of-brfss-data?u=76281980&t=115)** Here is a great example.
>
> **[1:57](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/ethical-use-of-brfss-data?u=76281980&t=117)** If you go on [Grants.gov](https://Grants.gov), you can search for available grants by clicking on Search Grants.
>
> **[2:05](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/ethical-use-of-brfss-data?u=76281980&t=125)** I found an example program announcement for what I'm talking about.
>
> **[2:09](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/ethical-use-of-brfss-data?u=76281980&t=129)** It's PA-14-336, an R21 grant for Secondary Analyses of Existing Alcohol Epidemiology data.
>
> **[2:17](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/ethical-use-of-brfss-data?u=76281980&t=137)** I know BRFSS Core has some alcohol consumption questions in it, so let's go look at this program announcement.
>
> **[2:25](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/ethical-use-of-brfss-data?u=76281980&t=145)** Let's scroll down and look at the full announcement.
>
> **[2:29](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/ethical-use-of-brfss-data?u=76281980&t=149)** This is the kind of grant you can apply for to specify data analysis of existing data including BRFSS data.
>
> **[2:36](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/ethical-use-of-brfss-data?u=76281980&t=156)** Next, just as the CDC and the states use BRFSS to conduct essentially a needs assessment, you can do the same thing too.
>
> **[2:44](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/ethical-use-of-brfss-data?u=76281980&t=164)** Are you a non-profit trying to get your services to where they are needed most?
>
> **[2:49](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/ethical-use-of-brfss-data?u=76281980&t=169)** Or maybe you're a business looking to provide health-related goods and services to market segments who want to buy them.
>
> **[2:55](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/ethical-use-of-brfss-data?u=76281980&t=175)** Let's say your company produces an inexpensive natural remedy that reduces dental plaque buildup and can help reduce tooth loss.
>
> **[3:03](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/ethical-use-of-brfss-data?u=76281980&t=183)** Looking back at this paper we looked at before in MMWR, where should we try to sell this product?
>
> **[3:09](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/ethical-use-of-brfss-data?u=76281980&t=189)** Arkansas or California?
>
> **[3:11](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/ethical-use-of-brfss-data?u=76281980&t=191)** So as you can see, BRFSS data are not just for academic uses.
>
> **[3:17](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/ethical-use-of-brfss-data?u=76281980&t=197)** Another big thing you can do with BRFSS data is build up your tenure packet if you are a new researcher.
>
> **[3:23](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/ethical-use-of-brfss-data?u=76281980&t=203)** If you've got the time, the CDC's got your data.
>
> **[3:26](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/ethical-use-of-brfss-data?u=76281980&t=206)** If you embark on a big analysis, don't forget.
>
> **[3:29](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/ethical-use-of-brfss-data?u=76281980&t=209)** You can put in abstracts of your papers to present at conferences along your journey.
>
> **[3:34](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/ethical-use-of-brfss-data?u=76281980&t=214)** Here is an example where researchers presented a BRFSS abstract at a conference.
>
> **[3:39](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/ethical-use-of-brfss-data?u=76281980&t=219)** Also, so many BRFSS research questions are interdisciplinary.
>
> **[3:44](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/ethical-use-of-brfss-data?u=76281980&t=224)** For example, consider questions about the association between cardiovascular disease and gum disease like this article explored.
>
> **[3:51](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/ethical-use-of-brfss-data?u=76281980&t=231)** To evaluate this, not only do you need someone who knows the analytics.
>
> **[3:55](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/ethical-use-of-brfss-data?u=76281980&t=235)** You need someone who can cover the cardiology and someone who can cover the oral health.
>
> **[4:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/ethical-use-of-brfss-data?u=76281980&t=240)** So, if you have the analytics skills, you can collaborate with other tenure-packet builders in your office and produce some nice peer-reviewed analyses that will impress your tenure committees.
>
> **[4:13](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/ethical-use-of-brfss-data?u=76281980&t=253)** In conclusion, not only is it ethical to download the BRFSS data and use it for analyses.
>
> **[4:19](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/ethical-use-of-brfss-data?u=76281980&t=259)** It's encouraged.
>
> **[4:20](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/ethical-use-of-brfss-data?u=76281980&t=260)** The more academic researchers analyze these data, the more we can learn about the U.S. population.
>
> **[4:26](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/ethical-use-of-brfss-data?u=76281980&t=266)** We can leverage the data that the U.S. government has collected for maximum value.
>
> **[4:31](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/ethical-use-of-brfss-data?u=76281980&t=271)** And also, if your company sells health-related products, BRFSS can provide the opportunity for market research.

> [!info]- Semantic Content
>
> **Env Vars:** brfss (21), hipaa (5), cdc (2), irb (1), nih (1)
> **Code Keywords:** let (3), abstract (1), this, (1)
> **Definitions:** in other words (1), is a  (1), is an  (1)
> **URLs:** [grants.gov](https://grants.gov) (1)
> **UI Navigation:** scroll down (1)
> **Analogies:** for example (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - [narrator] (1)

#### BRFSS resources
> [LinkedIn Learning](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/brfss-resources?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/brfss-resources?u=76281980&t=0)** - [Instructor] This section is to go over some of the BRFSS resources provided by the CDC to help researchers like us conduct a BRFSS analysis.
>
> **[0:11](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/brfss-resources?u=76281980&t=11)** First, there are the data sets that they publish.
>
> **[0:14](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/brfss-resources?u=76281980&t=14)** For example, in 2014 we can see the data files posted here.
>
> **[0:19](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/brfss-resources?u=76281980&t=19)** It's hard to understand the data without the questionnaire, so whenever yearly data are posted, the questionnaire is also posted.
>
> **[0:27](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/brfss-resources?u=76281980&t=27)** However, they are posted in a slightly different spot.
>
> **[0:31](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/brfss-resources?u=76281980&t=31)** There are a lot of handy resources the CDC makes for BRFSS analysts.
>
> **[0:36](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/brfss-resources?u=76281980&t=36)** Going back to the 2014 data files page, we can see the codebook posted.
>
> **[0:43](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/brfss-resources?u=76281980&t=43)** The code book provides univariate summary statistics about each variable.
>
> **[0:48](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/brfss-resources?u=76281980&t=48)** For example, we can see here that there 8,652 records from Alabama respondents in the data set.
>
> **[0:56](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/brfss-resources?u=76281980&t=56)** This codebook can be helpful if you are interested in designing an analysis of a particular subpopulation, such as the people from Alabama.
>
> **[1:04](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/brfss-resources?u=76281980&t=64)** I'm very pleased with how useful the documentation and explanations are that are provided for BRFSS.
>
> **[1:10](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/brfss-resources?u=76281980&t=70)** Here are some examples.
>
> **[1:13](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/brfss-resources?u=76281980&t=73)** If you are shopping for modules, you can see which states use which ones, so you know who to contact.
>
> **[1:19](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/brfss-resources?u=76281980&t=79)** There are also various weighting and quality reports you can use if you have questions, and at the bottom there is canned code in SAS to add SAS labels and formats as well as read in the data.
>
> **[1:32](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/brfss-resources?u=76281980&t=92)** There are other neat resources provided that can help you design your study.
>
> **[1:36](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/brfss-resources?u=76281980&t=96)** The historical questions database can help you sort through which questions were used in which year.
>
> **[1:42](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/brfss-resources?u=76281980&t=102)** This interface used to be different.
>
> **[1:43](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/brfss-resources?u=76281980&t=103)** I have a lot of trouble using the new interface, and I asked the CDC to put the old interface back, but they didn't do it.
>
> **[1:50](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/brfss-resources?u=76281980&t=110)** See if you can figure out how to use this.
>
> **[1:53](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/brfss-resources?u=76281980&t=113)** I find myself looking back at old questionnaires because I find this so hard to use, so I'm sorry, I can't begin to demonstrate how to use this.
>
> **[1:59](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/brfss-resources?u=76281980&t=119)** Maybe you can figure it out, and don't forget, you can always look at existing BRFSS published reports for ideas.
>
> **[2:07](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/brfss-resources?u=76281980&t=127)** In conclusion, this lecture went over the different resources you can use to make sure you understand the BRFSS and help you shop for a project idea.
>
> **[2:16](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/brfss-resources?u=76281980&t=136)** Also, these resources will help you navigate through your analysis, and you will find you will continue to use them from the first to the last step of the project.

> [!info]- Semantic Content
>
> **Env Vars:** brfss (6), cdc (3), sas (2)
> **Code Keywords:** interface (3), this. (2), continue (1)
> **CLI Commands:** find (3), make (1)
> **Analogies:** for example (2), such as (1)
> **Documentation:** the documentation (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - [instructor] (1)

#### Choosing R for a BRFSS analysis: Some considerations
> [LinkedIn Learning](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/choosing-r-for-a-brfss-analysis-some-considerations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/choosing-r-for-a-brfss-analysis-some-considerations?u=76281980&t=0)** - [Instructor] This movie and the next movie is to help guide you in selecting a statistical software to be used for your BRFSS analysis with me making a pitch for R.
>
> **[0:11](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/choosing-r-for-a-brfss-analysis-some-considerations?u=76281980&t=11)** The three main choices of statistical software to use for analyzing the BRFSS are SAS, SPSS, and R, although people usually use SAS.
>
> **[0:21](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/choosing-r-for-a-brfss-analysis-some-considerations?u=76281980&t=21)** I will go over the pros and cons of using the various software for BRFSS, which mainly fall along the theme of SAS being a perceived default choice for BRFSS for a number of reasons, including the fact that R can be very do it yourself.
>
> **[0:38](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/choosing-r-for-a-brfss-analysis-some-considerations?u=76281980&t=38)** Here is a table comparing SAS, SPSS, and R on a few attributes.
>
> **[0:43](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/choosing-r-for-a-brfss-analysis-some-considerations?u=76281980&t=43)** Let's start by focusing on the first two.
>
> **[0:46](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/choosing-r-for-a-brfss-analysis-some-considerations?u=76281980&t=46)** The CDC and the states use SAS to store, analyze, and prepare the BPFSS data, so naturally all the documentation is in SAS, and resources and data files are provided for SAS.
>
> **[0:59](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/choosing-r-for-a-brfss-analysis-some-considerations?u=76281980&t=59)** In other words, the CDC provides the files in the file format ASCII, which is readable by any software but often needs to be cleaned up.
>
> **[1:07](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/choosing-r-for-a-brfss-analysis-some-considerations?u=76281980&t=67)** And SAS XPT, or transport format, that can be unpacked into a SAS7BDAT data file with SAS code.
>
> **[1:16](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/choosing-r-for-a-brfss-analysis-some-considerations?u=76281980&t=76)** The CDC does not provide the files in the .SAV format that SPSS uses to save its data files.
>
> **[1:23](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/choosing-r-for-a-brfss-analysis-some-considerations?u=76281980&t=83)** The reason the asterisk is by the No under R is because R has no official file format.
>
> **[1:28](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/choosing-r-for-a-brfss-analysis-some-considerations?u=76281980&t=88)** It can read all of these formats equally well.
>
> **[1:32](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/choosing-r-for-a-brfss-analysis-some-considerations?u=76281980&t=92)** Not only are the data sets posted in SAS, SAS is the language used for the resources accompanying the data sets, like the SAS format code and label code I mentioned in an earlier lecture.
>
> **[1:43](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/choosing-r-for-a-brfss-analysis-some-considerations?u=76281980&t=103)** If any of these resources need to be used directly in an analysis, if a software other than SAS is chosen, the resources will need to be redesigned using the other software.
>
> **[1:53](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/choosing-r-for-a-brfss-analysis-some-considerations?u=76281980&t=113)** Depending upon how necessary these files are, rebuilding them can add time and effort to the analysis that would be skipped by just using SAS.
>
> **[2:02](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/choosing-r-for-a-brfss-analysis-some-considerations?u=76281980&t=122)** So by now you may have already decided that SAS should definitely be the way to go with a BRFSS analysis.
>
> **[2:09](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/choosing-r-for-a-brfss-analysis-some-considerations?u=76281980&t=129)** If you are at a University, and have access to an inexpensive or free SAS University license, no problem.
>
> **[2:16](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/choosing-r-for-a-brfss-analysis-some-considerations?u=76281980&t=136)** However, if you are at a non-profit or small business, even one seat of PC SAS can run you over ten thousand dollars depending upon the components you want included in your license.
>
> **[2:28](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/choosing-r-for-a-brfss-analysis-some-considerations?u=76281980&t=148)** SPSS is less costly, with licenses in the hundreds of dollars, but R is open source so it is free.
>
> **[2:34](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/choosing-r-for-a-brfss-analysis-some-considerations?u=76281980&t=154)** R is really the best choice if you are involved in a project working with low to middle income countries, or LME countries, or with charities or non-profits.
>
> **[2:43](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/choosing-r-for-a-brfss-analysis-some-considerations?u=76281980&t=163)** Also hungry tech startups are unlikely to be able to afford SAS, so these groups might shift their attention toward R.
>
> **[2:50](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/choosing-r-for-a-brfss-analysis-some-considerations?u=76281980&t=170)** But groups who do shift to using R for their BRFSS analyses may face the penalty of not being able to find analysts proficient in using R.
>
> **[2:59](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/choosing-r-for-a-brfss-analysis-some-considerations?u=76281980&t=179)** That is because, due to the generous SAS license available at universities, coupled with the promotion of SAS by the government, most health data analysts are fluent in SAS but do not have a background in R.
>
> **[3:11](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/choosing-r-for-a-brfss-analysis-some-considerations?u=76281980&t=191)** This means you may find yourself hiring analysts who will have a learning curve while they get up to speed learning R to fit into your shop.
>
> **[3:19](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/choosing-r-for-a-brfss-analysis-some-considerations?u=76281980&t=199)** In conclusion, this movie covered three main considerations when choosing R for a BRFSS analysis.
>
> **[3:26](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/choosing-r-for-a-brfss-analysis-some-considerations?u=76281980&t=206)** This includes the cost of change, meaning the materials are all in SAS.
>
> **[3:30](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/choosing-r-for-a-brfss-analysis-some-considerations?u=76281980&t=210)** So using R will require some translation.
>
> **[3:33](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/choosing-r-for-a-brfss-analysis-some-considerations?u=76281980&t=213)** There's also the cost of the software to consider.
>
> **[3:36](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/choosing-r-for-a-brfss-analysis-some-considerations?u=76281980&t=216)** SAS is often expensive and R is always free.
>
> **[3:39](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/choosing-r-for-a-brfss-analysis-some-considerations?u=76281980&t=219)** But also the level of knowledge of your analytic team, as well as your knowledge of the different choices.
>
> **[3:45](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/choosing-r-for-a-brfss-analysis-some-considerations?u=76281980&t=225)** The next section will cover a few more considerations to make when choosing between R and its software competitors.

> [!info]- Semantic Content
>
> **Env Vars:** sas (23), brfss (7), spss (4), cdc (3), bpfss (1)
> **CLI Commands:** find (2), make (1)
> **Code Keywords:** let (1), require (1)
> **Definitions:** is a  (1), in other words (1)
> **Documentation:** the documentation (1)
> **Speakers:** - [instructor] (1)

#### Choosing R for a BRFSS analysis: More considerations
> [LinkedIn Learning](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/choosing-r-for-a-brfss-analysis-more-considerations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/choosing-r-for-a-brfss-analysis-more-considerations?u=76281980&t=0)** - This movie builds on my last movie and discusses more items for you to consider when selecting a statistical software to be used for your BRFSS analysis.
>
> **[0:10](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/choosing-r-for-a-brfss-analysis-more-considerations?u=76281980&t=10)** These other considerations could impact the time and effort needed for the project.
>
> **[0:15](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/choosing-r-for-a-brfss-analysis-more-considerations?u=76281980&t=15)** For example, while SAS has a popular customer service line well-staffed with experts, R is open source, so it is "do it yourself."
>
> **[0:25](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/choosing-r-for-a-brfss-analysis-more-considerations?u=76281980&t=25)** There is no tech support line, only the voluminous documentation about R online.
>
> **[0:31](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/choosing-r-for-a-brfss-analysis-more-considerations?u=76281980&t=31)** The comprehensive R archive network, CRAN, is where you go to download the R program and also access official documentation.
>
> **[0:41](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/choosing-r-for-a-brfss-analysis-more-considerations?u=76281980&t=41)** R users also provide many helpful webpages, such as blogs from the R bloggers site.
>
> **[0:47](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/choosing-r-for-a-brfss-analysis-more-considerations?u=76281980&t=47)** Stack Overflow is a popular site where R users post and answer each other's questions.
>
> **[0:53](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/choosing-r-for-a-brfss-analysis-more-considerations?u=76281980&t=53)** So as you can see, you can usually find what you need on the web for help.
>
> **[0:57](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/choosing-r-for-a-brfss-analysis-more-considerations?u=76281980&t=57)** But if things go really wrong, you may need to hire consultants.
>
> **[1:02](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/choosing-r-for-a-brfss-analysis-more-considerations?u=76281980&t=62)** Admittedly, spending time hunting for answers on the web can affect your bottom line.
>
> **[1:08](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/choosing-r-for-a-brfss-analysis-more-considerations?u=76281980&t=68)** So until you build up a code bank of R code for BRFSS, there will be some overhead.
>
> **[1:14](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/choosing-r-for-a-brfss-analysis-more-considerations?u=76281980&t=74)** On the other hand, if you actually don't know SAS and you don't know R, starting with R might be advantageous.
>
> **[1:23](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/choosing-r-for-a-brfss-analysis-more-considerations?u=76281980&t=83)** This is because learning SAS is extremely difficult.
>
> **[1:27](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/choosing-r-for-a-brfss-analysis-more-considerations?u=76281980&t=87)** R is not as easy as the menu-driven SPSS, but it is much less troublesome to learn than SAS.
>
> **[1:34](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/choosing-r-for-a-brfss-analysis-more-considerations?u=76281980&t=94)** Further, people tend to learn R from reading documentation posted on the web, while SAS users are accustomed to taking classes and having hands-on seminars.
>
> **[1:43](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/choosing-r-for-a-brfss-analysis-more-considerations?u=76281980&t=103)** Essentially, these are needed to help users understand the complex SAS program.
>
> **[1:48](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/choosing-r-for-a-brfss-analysis-more-considerations?u=76281980&t=108)** You can see why it is hard to weigh the pros and cons of not using SAS for a BRFSS analysis.
>
> **[1:56](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/choosing-r-for-a-brfss-analysis-more-considerations?u=76281980&t=116)** Finally, I want to point out that SPSS is generally not used for a BRFSS analysis, although it can be.
>
> **[2:04](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/choosing-r-for-a-brfss-analysis-more-considerations?u=76281980&t=124)** The reason I think it is not used is because BRFSS analyses are often done with a group and SPSS is not good with sharing group files and coordinating with a group.
>
> **[2:15](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/choosing-r-for-a-brfss-analysis-more-considerations?u=76281980&t=135)** It is a software that's more easily used in a single-analyst project.
>
> **[2:19](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/choosing-r-for-a-brfss-analysis-more-considerations?u=76281980&t=139)** Both SAS and R are equally easy to use in a shared project.
>
> **[2:23](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/choosing-r-for-a-brfss-analysis-more-considerations?u=76281980&t=143)** I have done shared projects with both of them using Dropbox as the sharing platform.
>
> **[2:28](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/choosing-r-for-a-brfss-analysis-more-considerations?u=76281980&t=148)** I feel it is important to point out that R's open-source status brings both advantages and disadvantages to the consideration of being used in a BRFSS project.
>
> **[2:39](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/choosing-r-for-a-brfss-analysis-more-considerations?u=76281980&t=159)** However, I am a big proponent of open-source, so I lean towards trying to overcome the disadvantages.
>
> **[2:46](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/choosing-r-for-a-brfss-analysis-more-considerations?u=76281980&t=166)** The R Consortium is the group that provides support for R and deserves a shout out for their helpful work supporting researchers who are using their software.
>
> **[2:56](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/choosing-r-for-a-brfss-analysis-more-considerations?u=76281980&t=176)** In summary, the advantages of choosing R for a BRFSS analysis is that you are making a statement of support for open-source software and also, you are getting the software for free.
>
> **[3:07](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/choosing-r-for-a-brfss-analysis-more-considerations?u=76281980&t=187)** This may be an advantage if you do not have a SAS analyst available anyway and may give you or another analyst the opportunity to learn a new language.
>
> **[3:16](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/choosing-r-for-a-brfss-analysis-more-considerations?u=76281980&t=196)** The main disadvantages of R include the time-consuming and often frustrating "do it yourself" approach.
>
> **[3:23](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/choosing-r-for-a-brfss-analysis-more-considerations?u=76281980&t=203)** It is important to highlight that BRFSS files and resources are not available in R, so that can add to the overhead of using R for a BRFSS analysis.
>
> **[3:34](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/choosing-r-for-a-brfss-analysis-more-considerations?u=76281980&t=214)** Finally, R expertise is not as common as SAS expertise, so there may be a learning curve involved if you choose to adopt R for a BRFSS analysis.
>
> **[3:45](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/choosing-r-for-a-brfss-analysis-more-considerations?u=76281980&t=225)** In conclusion, the purpose of this course is to teach how to analyze the BRFSS in R, so hopefully, if you are used to using another software and you don't have any background in R, that won't matter.
>
> **[3:58](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/choosing-r-for-a-brfss-analysis-more-considerations?u=76281980&t=238)** You'll be able to get through a BRFSS analysis without the overhead of having to search for code and get it running.
>
> **[4:05](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/choosing-r-for-a-brfss-analysis-more-considerations?u=76281980&t=245)** You will gain experience using R resources and building R code.
>
> **[4:09](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/choosing-r-for-a-brfss-analysis-more-considerations?u=76281980&t=249)** This course will help you see the advantages of using R in a BRFSS analysis.

> [!info]- Semantic Content
>
> **Env Vars:** brfss (13), sas (10), spss (3), cran (1)
> **Code Keywords:** finally, (2)
> **Definitions:** is a  (2)
> **Analogies:** for example (1), such as (1)
> **CLI Commands:** find (1)
> **Documentation:** stack overflow (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** download the (1)

#### Installing R
> [LinkedIn Learning](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/installing-r?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/installing-r?u=76281980&t=0)** - [Instructor] Now I will show you how to install R so we can jump right in and get started.
>
> **[0:06](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/installing-r?u=76281980&t=6)** This movie will first show you how to go to the CRAN page and find the place to download R.
>
> **[0:12](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/installing-r?u=76281980&t=12)** Next we'll download the file and then we will run the setup file and accept all the defaults.
>
> **[0:17](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/installing-r?u=76281980&t=17)** R gives you two shortcuts on your desktop if you do that.
>
> **[0:21](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/installing-r?u=76281980&t=21)** So after that I'll show you which shortcut to use to run R.
>
> **[0:25](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/installing-r?u=76281980&t=25)** Here is the CRAN website and as you can see, at the top are the options to download and install R.
>
> **[0:32](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/installing-r?u=76281980&t=32)** These links lead to the most recent version and you will see that you can see R on the Mac although I will be demonstrating it on Windows.
>
> **[0:41](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/installing-r?u=76281980&t=41)** When you get to this page, click on Base.
>
> **[0:44](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/installing-r?u=76281980&t=44)** See at the top.
>
> **[0:45](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/installing-r?u=76281980&t=45)** It will take you to the most recent version.
>
> **[0:49](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/installing-r?u=76281980&t=49)** Go ahead and click on the download link, then run the setup file that downloads to install it.
>
> **[0:54](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/installing-r?u=76281980&t=54)** Okay it's done downloading.
>
> **[0:57](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/installing-r?u=76281980&t=57)** Now I'm going to double-click to run the setup file.
>
> **[1:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/installing-r?u=76281980&t=60)** And I'm going to say yes and accept all the defaults.
>
> **[1:05](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/installing-r?u=76281980&t=65)** If you do that, when ends up happening is you have two different shortcuts placed on your desktop.
>
> **[1:12](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/installing-r?u=76281980&t=72)** We'll look at that in a moment.
>
> **[1:15](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/installing-r?u=76281980&t=75)** Here are the two icons I told you would be on your desktop.
>
> **[1:19](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/installing-r?u=76281980&t=79)** In new computers you will want to run the one that says X 64 in the name.
>
> **[1:24](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/installing-r?u=76281980&t=84)** That's the one you will double-click to run R.
>
> **[1:26](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/installing-r?u=76281980&t=86)** Okay great job.
>
> **[1:28](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/installing-r?u=76281980&t=88)** We have installed R now and it's ready to use.
>
> **[1:32](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/installing-r?u=76281980&t=92)** We went to the CRAN page, downloaded the most recent setup file, ran it, and then accepted all the defaults in the wizard.
>
> **[1:39](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/installing-r?u=76281980&t=99)** Finally, we ended up with two shortcuts on our desktop and I showed you which one to run.
>
> **[1:45](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/installing-r?u=76281980&t=105)** Join me in the next movie where we actually run R and you can see what it looks like.

> [!info]- Semantic Content
>
> **Prerequisites:** setup (4), install (3)
> **UI Navigation:** click on (2), double-click (2), go to (1)
> **Env Vars:** cran (3)
> **CLI Commands:** find (1)
> **Code Keywords:** finally, (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** download the (1)
> **Speakers:** - [instructor] (1)

#### Navigating in R
> [LinkedIn Learning](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/navigating-in-r?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/navigating-in-r?u=76281980&t=0)** - [Voiceover] Welcome to Navigating in R.
>
> **[0:02](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/navigating-in-r?u=76281980&t=2)** Let's actually run R together and I'll be your tour guide as we explore the interface.
>
> **[0:08](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/navigating-in-r?u=76281980&t=8)** First, when we open R, I'll show you what the R console is and how to use it.
>
> **[0:13](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/navigating-in-r?u=76281980&t=13)** I will demonstrate making and saving R code and show you what happens when you run code in R that produces graphics.
>
> **[0:20](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/navigating-in-r?u=76281980&t=20)** Finally, I will describe R packages and show you how to add them.
>
> **[0:25](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/navigating-in-r?u=76281980&t=25)** As I said before, lets choose the x64 icon and double click it to run R.
>
> **[0:33](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/navigating-in-r?u=76281980&t=33)** See how the first window that opens say R console on it?
>
> **[0:37](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/navigating-in-r?u=76281980&t=37)** This is the window where you will run all your code.
>
> **[0:41](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/navigating-in-r?u=76281980&t=41)** Click on it and you can highlight or select the window.
>
> **[0:44](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/navigating-in-r?u=76281980&t=44)** When this happens, you get different menus above.
>
> **[0:47](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/navigating-in-r?u=76281980&t=47)** For example, lets set a default directory for your session.
>
> **[0:51](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/navigating-in-r?u=76281980&t=51)** You can choose File, Change dir and select a default directory.
>
> **[0:58](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/navigating-in-r?u=76281980&t=58)** So where is the code?
>
> **[1:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/navigating-in-r?u=76281980&t=60)** We can start a new code file by choosing File, New Script.
>
> **[1:06](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/navigating-in-r?u=76281980&t=66)** Let me type some super simple example code in here.
>
> **[1:09](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/navigating-in-r?u=76281980&t=69)** Let's make a variable called "a" that is the value of 12.
>
> **[1:13](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/navigating-in-r?u=76281980&t=73)** We will type "a" for the name of the variable and I always put a space, and then a less than sign followed by a dash to indicate we are going to put something in to the variable.
>
> **[1:24](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/navigating-in-r?u=76281980&t=84)** Next, we type the number 12 because that is the value we want to put in there.
>
> **[1:29](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/navigating-in-r?u=76281980&t=89)** Now how do I run that code?
>
> **[1:31](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/navigating-in-r?u=76281980&t=91)** One way is to highlight it, copy it, I'm using Control C, and then go paste it, Control V, in the console and hit Enter or Return to run it.
>
> **[1:43](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/navigating-in-r?u=76281980&t=103)** See, it ran.
>
> **[1:45](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/navigating-in-r?u=76281980&t=105)** How do I know?
>
> **[1:46](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/navigating-in-r?u=76281980&t=106)** Let's look at variable "a" by typing "a" and putting Enter or Return.
>
> **[1:52](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/navigating-in-r?u=76281980&t=112)** Oh look, it has the value of 12, that's great.
>
> **[1:55](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/navigating-in-r?u=76281980&t=115)** Another way to run this line of code would be to highlight it and to right click it and choose "Run line or selection".
>
> **[2:05](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/navigating-in-r?u=76281980&t=125)** As you can see, you can also use the key commands Control R.
>
> **[2:10](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/navigating-in-r?u=76281980&t=130)** So what if you want to save this script?
>
> **[2:12](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/navigating-in-r?u=76281980&t=132)** Go click on the script window to make sure you have the right menus, then Save as and give it a name.
>
> **[2:20](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/navigating-in-r?u=76281980&t=140)** I'll call it example code.
>
> **[2:23](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/navigating-in-r?u=76281980&t=143)** Alright, let's look at our file directory.
>
> **[2:26](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/navigating-in-r?u=76281980&t=146)** You will see the code saves as a dot R file.
>
> **[2:29](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/navigating-in-r?u=76281980&t=149)** This can obviously be opened with R, but is can also be opened in notepad or another word processing program.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), interface (1), finally, (1), super (1), return. (1)
> **UI Navigation:** click on (2), select the (1)
> **CLI Commands:** make (2)
> **Analogies:** for example (1)
> **Prerequisites:** make sure you have (1)
> **Speakers:** - [voiceover] (1)

#### Installing the foreign package
> [LinkedIn Learning](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/installing-the-foreign-package?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/installing-the-foreign-package?u=76281980&t=0)** - [Lecturer] R can read in basic formats without any problem, txt and csv.
>
> **[0:06](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/installing-the-foreign-package?u=76281980&t=6)** But you need the foreign package added to R in order to read in foreign data types, such as the ones that come from SAS and SPSS.
>
> **[0:16](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/installing-the-foreign-package?u=76281980&t=16)** BRFSS is in SAS.xpt format, so we'll need the foreign package.
>
> **[0:23](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/installing-the-foreign-package?u=76281980&t=23)** Now, you don't need to go look up the documentation on the foreign package to load it, but let's look up the information about foreign anyway, just so you can see what the documentation looks like.
>
> **[0:33](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/installing-the-foreign-package?u=76281980&t=33)** So here is the documentation available on CRAN about R.
>
> **[0:37](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/installing-the-foreign-package?u=76281980&t=37)** As you can see, the foreign package was designed for reading in data of different formats from different statistical programs, such as SAS and SPSS into R.
>
> **[0:49](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/installing-the-foreign-package?u=76281980&t=49)** Isn't that nice?
>
> **[0:50](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/installing-the-foreign-package?u=76281980&t=50)** But before we can use this package, we need to download it, so let's go back to R and do that from within R.
>
> **[0:57](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/installing-the-foreign-package?u=76281980&t=57)** Here, we are going to install the foreign package.
>
> **[1:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/installing-the-foreign-package?u=76281980&t=60)** Let's go to Packages, Install packages.
>
> **[1:05](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/installing-the-foreign-package?u=76281980&t=65)** Here we need to choose a server that's going to serve up our package.
>
> **[1:09](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/installing-the-foreign-package?u=76281980&t=69)** I'm always California Dreaming, so I'm going to pick California.
>
> **[1:14](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/installing-the-foreign-package?u=76281980&t=74)** And now we have to find foreign on this list.
>
> **[1:21](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/installing-the-foreign-package?u=76281980&t=81)** Here it is.
>
> **[1:22](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/installing-the-foreign-package?u=76281980&t=82)** Okay, as you can see in the console, we loaded the package.
>
> **[1:26](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/installing-the-foreign-package?u=76281980&t=86)** Now let's look at some code that uses it to read in our data file.
>
> **[1:30](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/installing-the-foreign-package?u=76281980&t=90)** Loading the package wrote a lot of text to our console.
>
> **[1:34](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/installing-the-foreign-package?u=76281980&t=94)** What a mess.
>
> **[1:35](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/installing-the-foreign-package?u=76281980&t=95)** Let's clear the console by right-clicking on the window and choosing Clear window.
>
> **[1:42](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/installing-the-foreign-package?u=76281980&t=102)** Phew, much better.
>
> **[1:43](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/installing-the-foreign-package?u=76281980&t=103)** Let's turn to our code.
>
> **[1:45](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/installing-the-foreign-package?u=76281980&t=105)** You'll notice that I'm very careful about my code, I comment about it constantly, using an octothorpe or a pound sign for those of you who are less formal, and then writing my note.
>
> **[1:56](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/installing-the-foreign-package?u=76281980&t=116)** You'll also see that I use line breaks to keep the code neat and give it some breathing room, spread out and use all the space you want, no reason to crowd yourself.
>
> **[2:04](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/installing-the-foreign-package?u=76281980&t=124)** Let's start at the top.
>
> **[2:06](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/installing-the-foreign-package?u=76281980&t=126)** Even though the package is loaded, we have to tell R to load it into memory before we use it and that's with the library function.
>
> **[2:14](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/installing-the-foreign-package?u=76281980&t=134)** So we do library(foreign) to load it.
>
> **[2:17](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/installing-the-foreign-package?u=76281980&t=137)** Let's run that line of code.
>
> **[2:21](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/installing-the-foreign-package?u=76281980&t=141)** Great, okay, now we are ready to download our BRFSS data and read it in.
>
> **[2:27](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/installing-the-foreign-package?u=76281980&t=147)** So, in this section, I taught you how to look up documentation on R packages, such as the foreign package.
>
> **[2:34](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/installing-the-foreign-package?u=76281980&t=154)** Next, I showed you how to go into R and install the package.
>
> **[2:38](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/installing-the-foreign-package?u=76281980&t=158)** And finally, how to call the package out in code when you use it before you use commands in it, otherwise, R won't recognize the commands unless it knows they are from a package.
>
> **[2:48](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/installing-the-foreign-package?u=76281980&t=168)** Because R is free and open source, base R is very lean, you find yourself installing a lot of packages over the course of your analysis, whenever you want to do something special.
>
> **[2:59](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/installing-the-foreign-package?u=76281980&t=179)** Now that we've installed the foreign package, in the next section I'll show you how to download and read in the BRFSS dataset.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), function (1), finally, (1)
> **Env Vars:** sas (3), brfss (3), spss (2), cran (1)
> **Documentation:** the documentation (3)
> **Analogies:** such as (3)
> **Prerequisites:** install (3)
> **CLI Commands:** find (2)
> **Cross-References:** go back to (1), in the next (1)
> **UI Navigation:** go to (1)

#### Installing necessary packages
> [LinkedIn Learning](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/installing-necessary-packages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/installing-necessary-packages?u=76281980&t=0)** - [Instructor] We are almost done getting ready for our analysis.
>
> **[0:04](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/installing-necessary-packages?u=76281980&t=4)** In this section we'll install the packages you'll need in R to complete our descriptive analysis.
>
> **[0:10](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/installing-necessary-packages?u=76281980&t=10)** Earlier in the section I walked you through installing the package foreign, which we will use to read in our data.
>
> **[0:17](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/installing-necessary-packages?u=76281980&t=17)** We still need to install a few more packages to get through the whole course so we'll do that now.
>
> **[0:22](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/installing-necessary-packages?u=76281980&t=22)** Before we go to R I just want to give you a big picture look of what we are going to install.
>
> **[0:27](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/installing-necessary-packages?u=76281980&t=27)** First, note that the package names are case sensitive.
>
> **[0:31](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/installing-necessary-packages?u=76281980&t=31)** The last one is not lower case mass, it's MASS, all caps.
>
> **[0:36](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/installing-necessary-packages?u=76281980&t=36)** Next, you have to see on the right side of the slide why we need the package and what it does.
>
> **[0:42](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/installing-necessary-packages?u=76281980&t=42)** We'll be calling up these packages in different chapters throughout the course, so this is just a quick overview.
>
> **[0:47](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/installing-necessary-packages?u=76281980&t=47)** Okay let's go install our packages.
>
> **[0:50](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/installing-necessary-packages?u=76281980&t=50)** We just installed foreign so we can skip that, let's go to the next one, gtools.
>
> **[0:55](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/installing-necessary-packages?u=76281980&t=55)** Let's make sure we click on the console so we have the right menus then choose packages, install packages.
>
> **[1:03](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/installing-necessary-packages?u=76281980&t=63)** When we installed foreign we had to choose a cran mirror.
>
> **[1:06](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/installing-necessary-packages?u=76281980&t=66)** Since we are in the same session we will skip that part since that mirror is already set.
>
> **[1:12](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/installing-necessary-packages?u=76281980&t=72)** So here is our long list and there is no easy way to jump to g for gtools, like you can't just type g and have it get you there, you have to use this navigation bar and remember your alphabet.
>
> **[1:27](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/installing-necessary-packages?u=76281980&t=87)** Okay here is gtools, we'll highlight and click ok.
>
> **[1:31](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/installing-necessary-packages?u=76281980&t=91)** Notice how the console reports a bunch of code running for you, that install package function is basically a wizard, and I'd like to use it because my packages come in really nicely that way.
>
> **[1:42](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/installing-necessary-packages?u=76281980&t=102)** Okay ready to install next package, that one is dplyr, so we'll go to packages, install packages once again, let's go down to the packages to under d and find dplyr.
>
> **[1:57](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/installing-necessary-packages?u=76281980&t=117)** We'll highlight it and click ok.
>
> **[2:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/installing-necessary-packages?u=76281980&t=120)** Great, that went in, now questionr, I love trying to pronounce these package names.
>
> **[2:06](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/installing-necessary-packages?u=76281980&t=126)** Again, we'll go to packages, install packages and then we'll look under q for questionr, we'll select that and click ok to load it.
>
> **[2:19](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/installing-necessary-packages?u=76281980&t=139)** Done.
>
> **[2:21](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/installing-necessary-packages?u=76281980&t=141)** Finally the last package that we need is MASS, in all caps, not sure why they named it that but here we go, let's do packages, install packages and hunt for MASS, all caps, on the list, then we'll select it and click ok.
>
> **[2:40](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/installing-necessary-packages?u=76281980&t=160)** Done. We've added the packages we need to R for our descriptive analysis.
>
> **[2:46](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/installing-necessary-packages?u=76281980&t=166)** I just want to point out a few logistical issues with R and packages that you don't have in Sass, in case you are already familiar with Sass.
>
> **[2:54](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/installing-necessary-packages?u=76281980&t=174)** Those of you who are Sass users are used to having all the functions already in Sass, but in R each time you download and install R, like if you change computers and need to load it on to a new computer you need to remember to go through and do what we just did which is install all the packages you need.
>
> **[3:13](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/installing-necessary-packages?u=76281980&t=193)** Also, packages can get updated on the Cran server and R itself can get updated.
>
> **[3:19](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/installing-necessary-packages?u=76281980&t=199)** Unlike with Sass, wiping and reinstalling R is a common thing to be doing, you'll find yourself doing that a lot to keep up with updates, in my mind it's a small inconvenience, given that you only put in the packages you need.
>
> **[3:33](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/installing-necessary-packages?u=76281980&t=213)** R also avoids the bloatware reputation Sass has by being organized this way.
>
> **[3:39](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/installing-necessary-packages?u=76281980&t=219)** So now we have customized our R program to handle this entire course on descriptive analysis.
>
> **[3:45](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/installing-necessary-packages?u=76281980&t=225)** I already showed you in a previous section how to install the Foreign package and in this movie we finished installing gtools, dplyr, questionr and MASS.
>
> **[3:56](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/installing-necessary-packages?u=76281980&t=236)** Now we are ready to proceed with our descriptive analysis.

> [!info]- Semantic Content
>
> **Prerequisites:** install (13), you'll need (1)
> **Code Keywords:** let (5), function (1)
> **UI Navigation:** go to (4), click on (1)
> **Env Vars:** mass (4)
> **CLI Commands:** find (2), make (1)
> **Cross-References:** earlier in (1)
> **Analogies:** picture (1)
> **Best Practices:** remember to (1)


### 2. Designing Your Metadata

#### Uses of a data dictionary
> [LinkedIn Learning](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/uses-of-a-data-dictionary?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/uses-of-a-data-dictionary?u=76281980&t=0)** - [Instructor] Welcome to the first section of Chapter Two.
>
> **[0:03](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/uses-of-a-data-dictionary?u=76281980&t=3)** Chapter Two will cover designing your meta data.
>
> **[0:06](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/uses-of-a-data-dictionary?u=76281980&t=6)** So what is meta data?
>
> **[0:08](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/uses-of-a-data-dictionary?u=76281980&t=8)** Let's start by talking about one particular type of meta data, a data dictionary.
>
> **[0:13](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/uses-of-a-data-dictionary?u=76281980&t=13)** Most analysts have heard of a data dictionary.
>
> **[0:16](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/uses-of-a-data-dictionary?u=76281980&t=16)** But many don't know the technical definition of a data dictionary. So first, we'll go over that.
>
> **[0:21](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/uses-of-a-data-dictionary?u=76281980&t=21)** In the next section, we will talk about how you actually make a data dictionary as you go through the project.
>
> **[0:27](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/uses-of-a-data-dictionary?u=76281980&t=27)** By the end of this course, you will have built out your complete data dictionary for the project.
>
> **[0:32](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/uses-of-a-data-dictionary?u=76281980&t=32)** So first, please don't ask me for a data dictionary form or template.
>
> **[0:37](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/uses-of-a-data-dictionary?u=76281980&t=37)** Because this is more of a concept than an official format.
>
> **[0:41](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/uses-of-a-data-dictionary?u=76281980&t=41)** The exact structure of each data dictionary ever made is slightly different, depending upon the project.
>
> **[0:47](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/uses-of-a-data-dictionary?u=76281980&t=47)** But all should meet the main objectives of documenting clearly what each of the variables in the data set mean, and also the exact definitions of each level of each categorical variable included.
>
> **[0:58](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/uses-of-a-data-dictionary?u=76281980&t=58)** Sometimes a data dictionary includes more information, such as variable types and widths, but it has to meet those main objectives to be a useful data dictionary.
>
> **[1:07](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/uses-of-a-data-dictionary?u=76281980&t=67)** Some data sets don't have a data dictionary.
>
> **[1:09](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/uses-of-a-data-dictionary?u=76281980&t=69)** And if that happens, it basically means you cannot analyze it unless you find someone who knows what all those variables mean.
>
> **[1:16](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/uses-of-a-data-dictionary?u=76281980&t=76)** Then you can make your own data dictionary, which I admit I've done on occasion.
>
> **[1:20](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/uses-of-a-data-dictionary?u=76281980&t=80)** But if they do have a data dictionary, sometimes they give it to you in Microsoft Word or PDF format.
>
> **[1:25](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/uses-of-a-data-dictionary?u=76281980&t=85)** And I find those hard to use.
>
> **[1:27](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/uses-of-a-data-dictionary?u=76281980&t=87)** I prefer to have mine in Microsoft Excel, so we will make ours, in this course, in Excel.
>
> **[1:32](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/uses-of-a-data-dictionary?u=76281980&t=92)** I'm not the only one who likes a data dictionary in Excel.
>
> **[1:36](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/uses-of-a-data-dictionary?u=76281980&t=96)** Check out this online data dictionary in Excel for the U.S. Military Data Repository, or MDR.
>
> **[1:42](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/uses-of-a-data-dictionary?u=76281980&t=102)** This is a beautiful data dictionary, which is a joy to use when doing MDR analysis.
>
> **[1:47](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/uses-of-a-data-dictionary?u=76281980&t=107)** Really nice meta data. So like MDR, I prefer my data dictionaries in Excel, and I use the tabs.
>
> **[1:54](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/uses-of-a-data-dictionary?u=76281980&t=114)** I document our main analytic data set in the first tab, and then all the levels of the different categorical variables. I use the term picklists from informatics and data-basing, in the tabs across the rest of the workbook.
>
> **[2:06](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/uses-of-a-data-dictionary?u=76281980&t=126)** In the main tab, I just refer to the picklists.
>
> **[2:11](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/uses-of-a-data-dictionary?u=76281980&t=131)** So what we are doing is documenting our analytic data set, and this is an activity that falls under the larger category of data curation.
>
> **[2:18](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/uses-of-a-data-dictionary?u=76281980&t=138)** I explain the word curation by saying, have you ever been in a museum, and sat down on a broken down old chair, only to be yelled at by the museum staff, that that was a historic chair on display? Right.
>
> **[2:31](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/uses-of-a-data-dictionary?u=76281980&t=151)** You thought it was a crappy old chair, because you did not see the curation, or the little plaque that explained it was George Washington's chair or something.
>
> **[2:39](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/uses-of-a-data-dictionary?u=76281980&t=159)** The point is, the information about the chair made the chair valuable. Not the chair itself.
>
> **[2:44](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/uses-of-a-data-dictionary?u=76281980&t=164)** And that is also true of data. If you do not have sufficient information about the data, then the data are not useful. But once you read the documentation, or data curation, you can use the data.
>
> **[2:55](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/uses-of-a-data-dictionary?u=76281980&t=175)** And the main piece of documentation you need among those curation files is the data dictionary.
>
> **[3:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/uses-of-a-data-dictionary?u=76281980&t=180)** So we need to get going on that now.
>
> **[3:02](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/uses-of-a-data-dictionary?u=76281980&t=182)** I want to point out some vocabulary words here that I'm going to use as we make our data dictionary.
>
> **[3:07](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/uses-of-a-data-dictionary?u=76281980&t=187)** Luckily, all we are documenting is an analytic data set.
>
> **[3:10](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/uses-of-a-data-dictionary?u=76281980&t=190)** So we only have two kinds of variables.
>
> **[3:13](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/uses-of-a-data-dictionary?u=76281980&t=193)** Native variables, or variables coming directly from the BRFSS data set. And calculated variables, or ones we make in R. When we read in the BRFSS data set, you'll see there are tons of variables.
>
> **[3:27](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/uses-of-a-data-dictionary?u=76281980&t=207)** Our data dictionary will guide us to only keep the native variables we need for the analysis.
>
> **[3:33](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/uses-of-a-data-dictionary?u=76281980&t=213)** But those native variables are typically not in the exact format we need to analyze them.
>
> **[3:38](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/uses-of-a-data-dictionary?u=76281980&t=218)** Therefore, we usually need to make many calculated variables using those native variables.
>
> **[3:44](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/uses-of-a-data-dictionary?u=76281980&t=224)** And the data dictionary is good for planning those.
>
> **[3:47](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/uses-of-a-data-dictionary?u=76281980&t=227)** Sometimes you make a few calculated variables that you do not end up using, but if they are in the data set, it is good to document them.
>
> **[3:55](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/uses-of-a-data-dictionary?u=76281980&t=235)** As you go through the project, you will first document your native variables.
>
> **[3:58](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/uses-of-a-data-dictionary?u=76281980&t=238)** But then, as you make calculated variables, you will continue to update your data dictionary.
>
> **[4:03](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/uses-of-a-data-dictionary?u=76281980&t=243)** How I do my analyses is I have two monitors.
>
> **[4:06](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/uses-of-a-data-dictionary?u=76281980&t=246)** One with the statistical software on it.
>
> **[4:09](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/uses-of-a-data-dictionary?u=76281980&t=249)** And one with the data dictionary on it.
>
> **[4:11](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/uses-of-a-data-dictionary?u=76281980&t=251)** So I can read my map, or the data dictionary, and update it on one screen as I go through the analysis on the other screen.
>
> **[4:19](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/uses-of-a-data-dictionary?u=76281980&t=259)** Perhaps you have heard of a data dictionary, but now you know exactly what one is.
>
> **[4:23](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/uses-of-a-data-dictionary?u=76281980&t=263)** This movie introduced you to what goes in a data dictionary, different formats of data dictionaries, and what native and calculated variables are.
>
> **[4:31](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/uses-of-a-data-dictionary?u=76281980&t=271)** In the next section, we will start making our own.

> [!info]- Semantic Content
>
> **CLI Commands:** make (8), find (2)
> **Env Vars:** mdr (3), brfss (2), pdf (1)
> **Definitions:** is a  (2), is an  (2), basically means (1)
> **Code Keywords:** let (1), continue (1)
> **Cross-References:** in the next (2)
> **Documentation:** the documentation (1)
> **Exercise Files:** template (1)
> **Analogies:** such as (1)

#### How to set up a data dictionary
> [LinkedIn Learning](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/how-to-set-up-a-data-dictionary?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/how-to-set-up-a-data-dictionary?u=76281980&t=0)** - [Narrator] Welcome to Section Two of Chapter Two.
>
> **[0:03](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/how-to-set-up-a-data-dictionary?u=76281980&t=3)** In the last movie, you learned what a data dictionary is, and in this section we will talk about how to set one up.
>
> **[0:10](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/how-to-set-up-a-data-dictionary?u=76281980&t=10)** Some of my students complain that making the data dictionary is really boring in the beginning, and very picky work.
>
> **[0:16](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/how-to-set-up-a-data-dictionary?u=76281980&t=16)** And it seems like it's a waste of time because they want to be analyzing data.
>
> **[0:20](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/how-to-set-up-a-data-dictionary?u=76281980&t=20)** If they stick with me and follow along, they are always happy.
>
> **[0:24](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/how-to-set-up-a-data-dictionary?u=76281980&t=24)** Because like with Dungeons and Dragons, you really need that map when you are in the thick of a woods, or even a fence, which is a swampy area.
>
> **[0:32](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/how-to-set-up-a-data-dictionary?u=76281980&t=32)** You hope you've been keeping up your map so you know where the swampy part is.
>
> **[0:36](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/how-to-set-up-a-data-dictionary?u=76281980&t=36)** Your whole party can be attacked, and you will not finish your analysis if you get stuck hopelessly in a BRFSS swamp.
>
> **[0:44](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/how-to-set-up-a-data-dictionary?u=76281980&t=44)** So be disciplined, and keep up your data dictionary.
>
> **[0:47](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/how-to-set-up-a-data-dictionary?u=76281980&t=47)** In the end, you need a reason for each of the analytic decisions you make, and you need to be able to provide that reason if anyone asks.
>
> **[0:55](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/how-to-set-up-a-data-dictionary?u=76281980&t=55)** The data dictionary is part of your data curation documents that can help you answer those questions later.
>
> **[1:01](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/how-to-set-up-a-data-dictionary?u=76281980&t=61)** Our next step is to figure out what variables we will use in our analysis.
>
> **[1:06](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/how-to-set-up-a-data-dictionary?u=76281980&t=66)** This is a descriptive analysis so we don't need a hypothesis.
>
> **[1:09](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/how-to-set-up-a-data-dictionary?u=76281980&t=69)** In my other course, Health Analytics Regression and R, I cover how to formulate a hypothesis that uses the variables that we will use in this descriptive analysis.
>
> **[1:20](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/how-to-set-up-a-data-dictionary?u=76281980&t=80)** But for now, let's just focus on what they are.
>
> **[1:23](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/how-to-set-up-a-data-dictionary?u=76281980&t=83)** I used to work at the US Army, so I became very interested in Veterans, so I decided I'd use Veterans as an example.
>
> **[1:30](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/how-to-set-up-a-data-dictionary?u=76281980&t=90)** Next, we have to select a risk factor.
>
> **[1:32](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/how-to-set-up-a-data-dictionary?u=76281980&t=92)** Since we are talking about quote, behavioral risk factors, unquote, you can pretty much bet any vice will be in there.
>
> **[1:40](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/how-to-set-up-a-data-dictionary?u=76281980&t=100)** How about alcohol drinking?
>
> **[1:41](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/how-to-set-up-a-data-dictionary?u=76281980&t=101)** We'll pick that one.
>
> **[1:43](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/how-to-set-up-a-data-dictionary?u=76281980&t=103)** I want to demonstrate for you how to do a descriptive analysis with a continuous variable, or one that can take on many numerical values.
>
> **[1:51](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/how-to-set-up-a-data-dictionary?u=76281980&t=111)** I also want to demonstrate for you how to do a descriptive analysis with a binary categorical variable, or one that has two categories.
>
> **[1:59](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/how-to-set-up-a-data-dictionary?u=76281980&t=119)** Therefore, I'm selecting hours of sleep per night for the continuous variable, and whether or not the veteran has asthma for the categorical variable.
>
> **[2:08](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/how-to-set-up-a-data-dictionary?u=76281980&t=128)** So our idea is to start our data dictionary by documenting the native variables we will need from the BRFSS data set for analysis.
>
> **[2:17](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/how-to-set-up-a-data-dictionary?u=76281980&t=137)** This section will show you how to document the veteran variable, and the next section will explain how to document the other variables.
>
> **[2:23](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/how-to-set-up-a-data-dictionary?u=76281980&t=143)** Let's start by looking at the codebook.
>
> **[2:26](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/how-to-set-up-a-data-dictionary?u=76281980&t=146)** Here we are at our codebook.
>
> **[2:28](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/how-to-set-up-a-data-dictionary?u=76281980&t=148)** Let's start by looking for veteran status.
>
> **[2:30](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/how-to-set-up-a-data-dictionary?u=76281980&t=150)** I'm going to do Control F for "find", and type in "veteran".
>
> **[2:36](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/how-to-set-up-a-data-dictionary?u=76281980&t=156)** Here we are.
>
> **[2:37](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/how-to-set-up-a-data-dictionary?u=76281980&t=157)** Variable Veteran Three.
>
> **[2:40](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/how-to-set-up-a-data-dictionary?u=76281980&t=160)** See all the different choices we have?
>
> **[2:43](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/how-to-set-up-a-data-dictionary?u=76281980&t=163)** Let's document this variable.
>
> **[2:45](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/how-to-set-up-a-data-dictionary?u=76281980&t=165)** See, in the data dictionary, we have field name, which is Veteran Three, and source, which is BRFSS.
>
> **[2:54](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/how-to-set-up-a-data-dictionary?u=76281980&t=174)** Later when we make calculated variables, we'll be the source.
>
> **[2:58](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/how-to-set-up-a-data-dictionary?u=76281980&t=178)** But for these native variables, BRFSS is the source.
>
> **[3:02](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/how-to-set-up-a-data-dictionary?u=76281980&t=182)** Then I just copy in the question from the codebook here.
>
> **[3:06](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/how-to-set-up-a-data-dictionary?u=76281980&t=186)** Next, I list the role the variable plays in our analysis.
>
> **[3:10](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/how-to-set-up-a-data-dictionary?u=76281980&t=190)** In this case it's to filter in the sub-population.
>
> **[3:13](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/how-to-set-up-a-data-dictionary?u=76281980&t=193)** So I'll put inclusion, exclusion criteria.
>
> **[3:17](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/how-to-set-up-a-data-dictionary?u=76281980&t=197)** Now, since Veteran Three is a categorical variable, we still have to document the levels.
>
> **[3:22](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/how-to-set-up-a-data-dictionary?u=76281980&t=202)** So I do that here on a different tab.
>
> **[3:26](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/how-to-set-up-a-data-dictionary?u=76281980&t=206)** Here from the code book I put the value, and the description.
>
> **[3:31](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/how-to-set-up-a-data-dictionary?u=76281980&t=211)** So we are in good shape.
>
> **[3:33](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/how-to-set-up-a-data-dictionary?u=76281980&t=213)** We have begun our data dictionary, selected which native variables we need, and even documented one, the veteran variable.
>
> **[3:39](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/how-to-set-up-a-data-dictionary?u=76281980&t=219)** In the next section, we will find the other variables we need, alcohol consumption, sleep hours per night, and asthma status, and document those.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2), find (2)
> **Code Keywords:** let (4)
> **Env Vars:** brfss (4)
> **Definitions:** is a  (3)
> **Cross-References:** in the last (1), in the next (1)
> **Speakers:** - [narrator] (1)

#### Adding to the data dictionary
> [LinkedIn Learning](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-to-the-data-dictionary?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-to-the-data-dictionary?u=76281980&t=0)** - [Narrator] In the last lecture, we began the data dictionary and added a native variable, veteran status.
>
> **[0:06](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-to-the-data-dictionary?u=76281980&t=6)** Here, we will add three more native variables: alcohol consumption, sleep duration, and asthma status.
>
> **[0:13](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-to-the-data-dictionary?u=76281980&t=13)** Again, we return to the code book.
>
> **[0:16](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-to-the-data-dictionary?u=76281980&t=16)** Let's find the alcohol variable we want to use.
>
> **[0:19](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-to-the-data-dictionary?u=76281980&t=19)** I'm going to use Control + F and look for alcohol.
>
> **[0:22](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-to-the-data-dictionary?u=76281980&t=22)** Here we are, ALCDAY5.
>
> **[0:26](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-to-the-data-dictionary?u=76281980&t=26)** This is a pretty complicated variable, so let's document it.
>
> **[0:30](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-to-the-data-dictionary?u=76281980&t=30)** Let's go over to the data dictionary, where I already did that.
>
> **[0:35](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-to-the-data-dictionary?u=76281980&t=35)** The question is simple enough.
>
> **[0:37](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-to-the-data-dictionary?u=76281980&t=37)** During the past 30 days, how many days per week or per month did you have at least one drink of any alcoholic beverage, such as beer, wine, a malt beverage, or liquor?
>
> **[0:48](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-to-the-data-dictionary?u=76281980&t=48)** But let's look at the coding I documented on the tab.
>
> **[0:52](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-to-the-data-dictionary?u=76281980&t=52)** See how complex the coding of this field is?
>
> **[0:56](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-to-the-data-dictionary?u=76281980&t=56)** One in the first position means per week.
>
> **[0:59](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-to-the-data-dictionary?u=76281980&t=59)** The other two positions are how many times per week.
>
> **[1:03](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-to-the-data-dictionary?u=76281980&t=63)** But note that two in the first position means "in the past 30 days."
>
> **[1:10](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-to-the-data-dictionary?u=76281980&t=70)** The other positions are how many times in the past 30 days.
>
> **[1:14](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-to-the-data-dictionary?u=76281980&t=74)** And then there are these other codes.
>
> **[1:16](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-to-the-data-dictionary?u=76281980&t=76)** What a mess.
>
> **[1:17](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-to-the-data-dictionary?u=76281980&t=77)** We are going to look for a dose response relationship, which means the more alcohol you have, the more you have of the outcome.
>
> **[1:25](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-to-the-data-dictionary?u=76281980&t=85)** Either sleep problems or asthma.
>
> **[1:28](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-to-the-data-dictionary?u=76281980&t=88)** So let's reduce the complexity here.
>
> **[1:30](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-to-the-data-dictionary?u=76281980&t=90)** I propose a new variable, ALCGRP.
>
> **[1:34](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-to-the-data-dictionary?u=76281980&t=94)** See how I documented this variable's coding here.
>
> **[1:37](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-to-the-data-dictionary?u=76281980&t=97)** See how I gave all of the ones that indicate no answer a nine.
>
> **[1:42](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-to-the-data-dictionary?u=76281980&t=102)** Now, let's leave this tab and go document our new variable ALCGRP in the main data dictionary.
>
> **[1:49](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-to-the-data-dictionary?u=76281980&t=109)** See, I added a line for that grouping variable here in our main data dictionary.
>
> **[1:54](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-to-the-data-dictionary?u=76281980&t=114)** And I refer to the tab.
>
> **[1:57](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-to-the-data-dictionary?u=76281980&t=117)** But we're not done yet.
>
> **[1:58](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-to-the-data-dictionary?u=76281980&t=118)** Let's design indicator variables for this grouping variable.
>
> **[2:02](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-to-the-data-dictionary?u=76281980&t=122)** In regression, which is the next course, we often need indicator variables, or variables coded as one or zero.
>
> **[2:10](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-to-the-data-dictionary?u=76281980&t=130)** It's easy to explain, so I'll show you how to plan those fields now.
>
> **[2:14](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-to-the-data-dictionary?u=76281980&t=134)** Basically, whoever is coded one will be compared to whoever is coded zero.
>
> **[2:19](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-to-the-data-dictionary?u=76281980&t=139)** Who should be the comparison group?
>
> **[2:21](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-to-the-data-dictionary?u=76281980&t=141)** This is also known as the reference group.
>
> **[2:23](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-to-the-data-dictionary?u=76281980&t=143)** Well, I think we should get rid of all the nines from our data set, because we don't know their exposure status.
>
> **[2:30](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-to-the-data-dictionary?u=76281980&t=150)** So let's not even think about them.
>
> **[2:32](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-to-the-data-dictionary?u=76281980&t=152)** Perhaps we should choose the people we think will be the healthiest for the reference group.
>
> **[2:37](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-to-the-data-dictionary?u=76281980&t=157)** Let's choose the no drinks in the past 30 days group.
>
> **[2:41](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-to-the-data-dictionary?u=76281980&t=161)** This means that they do not get a variable, but the people who report their drinks weekly and the people who report their drinks monthly each get an indicator variable.
>
> **[2:50](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-to-the-data-dictionary?u=76281980&t=170)** You'll see how I set that up.
>
> **[2:52](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-to-the-data-dictionary?u=76281980&t=172)** I added a column called DRKMONTHLY, and I put a one in it for our monthly drinkers, and then zero for all the other ones.
>
> **[3:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-to-the-data-dictionary?u=76281980&t=180)** Next, I added a column called DRKWEEKLY and put a one in the weekly drinkers row.
>
> **[3:06](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-to-the-data-dictionary?u=76281980&t=186)** The rest get a zero.
>
> **[3:08](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-to-the-data-dictionary?u=76281980&t=188)** Now let's go back and make sure that new information about our new variables gets into our main data dictionary.
>
> **[3:15](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-to-the-data-dictionary?u=76281980&t=195)** Now, you can see that we have added the two indicator variables to our main dictionary and filled in the information.
>
> **[3:21](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-to-the-data-dictionary?u=76281980&t=201)** Let's do our continuous variable now, starting with sleep duration.
>
> **[3:26](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-to-the-data-dictionary?u=76281980&t=206)** So here we are back at our code book.
>
> **[3:28](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-to-the-data-dictionary?u=76281980&t=208)** You know what, I'm going back to the beginning, and then I'm going to do Control + F again, and this time, look for sleep.
>
> **[3:36](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-to-the-data-dictionary?u=76281980&t=216)** Here we are, SLEPTIM1.
>
> **[3:39](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-to-the-data-dictionary?u=76281980&t=219)** The question asked is on average, how many hours of sleep do you get in a 24-hour period?
>
> **[3:45](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-to-the-data-dictionary?u=76281980&t=225)** We will add that to our data dictionary, but look at the complex coding.
>
> **[3:50](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-to-the-data-dictionary?u=76281980&t=230)** Let's document this variable.
>
> **[3:52](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-to-the-data-dictionary?u=76281980&t=232)** Here we have the main dictionary, and here we have the SLEPTIM1 tab.
>
> **[3:58](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-to-the-data-dictionary?u=76281980&t=238)** Here's how the coding is.
>
> **[3:59](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-to-the-data-dictionary?u=76281980&t=239)** We need to make a new variable that doesn't have any 77s or 99s in it, or else they will end up in means and averages we make, and everyone will be getting very sleepy.
>
> **[4:12](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-to-the-data-dictionary?u=76281980&t=252)** So let's plan a variable with 77 and 99 are blank.
>
> **[4:17](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-to-the-data-dictionary?u=76281980&t=257)** And also, let's remove them from the analysis.
>
> **[4:20](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-to-the-data-dictionary?u=76281980&t=260)** Let's call this variable SLEPTIM2, and let's go back and put it in our main dictionary.
>
> **[4:27](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-to-the-data-dictionary?u=76281980&t=267)** So here we have it in our main dictionary.
>
> **[4:30](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-to-the-data-dictionary?u=76281980&t=270)** Finally, we move onto asthma, our last native variable, which we want as a binary categorical variable.
>
> **[4:37](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-to-the-data-dictionary?u=76281980&t=277)** Let's look in our code book.
>
> **[4:39](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-to-the-data-dictionary?u=76281980&t=279)** Again, I'm going to scroll up to the beginning, do Control + F, and this time look for asthma.
>
> **[4:48](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-to-the-data-dictionary?u=76281980&t=288)** Here we are, ASTHMA3.
>
> **[4:50](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-to-the-data-dictionary?u=76281980&t=290)** Okay, this is a pretty simple variable.
>
> **[4:52](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-to-the-data-dictionary?u=76281980&t=292)** We will want to remove people who don't answer the question, but otherwise it's kind of like veteran three, pretty easy to document.
>
> **[5:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-to-the-data-dictionary?u=76281980&t=300)** Let's go to our dictionary.
>
> **[5:02](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-to-the-data-dictionary?u=76281980&t=302)** Notice I have ASTHMA3 on here from BRFSS, and I've planned ASTHMA4.
>
> **[5:10](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-to-the-data-dictionary?u=76281980&t=310)** See on the tab that I have planned ASTHMA4 in such a way that we will remove the nines, and then we'll essentially have a grouping variable that can also serve as an indicator variable we can use in regression.
>
> **[5:22](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-to-the-data-dictionary?u=76281980&t=322)** So is our data dictionary done now?
>
> **[5:25](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-to-the-data-dictionary?u=76281980&t=325)** We all wish, but it's not.
>
> **[5:27](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-to-the-data-dictionary?u=76281980&t=327)** We still need to deal with confounders.
>
> **[5:29](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-to-the-data-dictionary?u=76281980&t=329)** In the next few sections, I will explain what confounders are and go through how to select candidate confounders, and then show you how to document them in the data dictionary.
>
> **[5:39](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-to-the-data-dictionary?u=76281980&t=339)** Also, as we go through our analytic process, we may find that we need to make more variables on the fly.
>
> **[5:46](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-to-the-data-dictionary?u=76281980&t=346)** Those get documented in our data dictionary, too.
>
> **[5:50](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-to-the-data-dictionary?u=76281980&t=350)** So in this section, we documented native variables for alcohol, sleep, and asthma.
>
> **[5:55](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-to-the-data-dictionary?u=76281980&t=355)** We set up tabs where we design both grouping variables and indicator variables.
>
> **[5:59](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-to-the-data-dictionary?u=76281980&t=359)** Finally, we updated the main data dictionary with our newly designed variables, which will be calculated variables.
>
> **[6:07](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-to-the-data-dictionary?u=76281980&t=367)** In the next section, we will work on finishing, designing our data set through updating our data dictionary.

> [!info]- Semantic Content
>
> **Code Keywords:** let (18), finally, (2)
> **Env Vars:** alcgrp (2), sleptim1 (2), asthma3 (2), asthma4 (2), alcday5 (1)
> **CLI Commands:** make (4), find (2)
> **Definitions:** is a  (2), known as (1), means that (1)
> **Cross-References:** in the next (2), in the last (1)
> **UI Navigation:** scroll up (1), go to (1)
> **Analogies:** such as (1), kind of like (1)
> **Warnings:** note that (1)

#### Understanding confounders
> [LinkedIn Learning](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/understanding-confounders?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/understanding-confounders?u=76281980&t=0)** - [Instructor] Now we move on to Section Four of Chapter Two, where we get into confounders.
>
> **[0:06](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/understanding-confounders?u=76281980&t=6)** This lecture will first explain what confounders are, meaning how they are defined.
>
> **[0:11](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/understanding-confounders?u=76281980&t=11)** Next, we will go through why they are important to consider in a BRFSS descriptive analysis.
>
> **[0:17](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/understanding-confounders?u=76281980&t=17)** We are eventually doing some bivariate tests, so we have to what confounders we need to think about, including in our analytic data set.
>
> **[0:26](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/understanding-confounders?u=76281980&t=26)** Let's start with explaining what a hypothesis is.
>
> **[0:29](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/understanding-confounders?u=76281980&t=29)** And then, showing where confounders fit in hypotheses.
>
> **[0:34](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/understanding-confounders?u=76281980&t=34)** This is a quick example that will show you how epidemiologists approach making a hypothesis.
>
> **[0:40](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/understanding-confounders?u=76281980&t=40)** Hypotheses are not necessary in a descriptive analysis, but they can help guide the analysis, so we are going to use hypotheses to guide our analyses in this course.
>
> **[0:50](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/understanding-confounders?u=76281980&t=50)** Briefly, a hypothesis needs a defined subpopulation.
>
> **[0:53](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/understanding-confounders?u=76281980&t=53)** I'm giving you the example of Hispanics.
>
> **[0:56](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/understanding-confounders?u=76281980&t=56)** Then, it needs a defined exposure or something that you think causes something else, which is the disease or outcome.
>
> **[1:04](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/understanding-confounders?u=76281980&t=64)** Here I give the example of engaging in regular exercise as the exposure and lowering risk of diabetes as the outcome.
>
> **[1:12](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/understanding-confounders?u=76281980&t=72)** Here's how you'd put the whole hypothesis together.
>
> **[1:14](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/understanding-confounders?u=76281980&t=74)** Among Hispanics, engaging in regular exercise is associated with lower risk of diabetes.
>
> **[1:21](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/understanding-confounders?u=76281980&t=81)** Subpopulation, regular exercise and risk of diabetes.
>
> **[1:25](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/understanding-confounders?u=76281980&t=85)** A confounding variable is associated with the exposure, associated with the outcome, and not on the causal pathway between the exposure and the outcome.
>
> **[1:36](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/understanding-confounders?u=76281980&t=96)** Therefore, as you probably guessed, for each pair of exposure and outcome, you will define a different set of confounding variables.
>
> **[1:45](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/understanding-confounders?u=76281980&t=105)** In this course, we will use confounding variables for stratification and bivariate tests.
>
> **[1:51](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/understanding-confounders?u=76281980&t=111)** This is what you do in a descriptive analysis.
>
> **[1:54](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/understanding-confounders?u=76281980&t=114)** I'll show you what I mean by both stratification and bivariate tests when we get to it in the analysis.
>
> **[2:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/understanding-confounders?u=76281980&t=120)** In the Regression course, you will also need these confounders because that is where you control for confounders by doing multivariate analyses.
>
> **[2:08](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/understanding-confounders?u=76281980&t=128)** So we really need to figure out what they are.
>
> **[2:11](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/understanding-confounders?u=76281980&t=131)** I'll give you a classic example of a confounder.
>
> **[2:14](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/understanding-confounders?u=76281980&t=134)** By now, we all know that the exposure of smoking causes the outcome of lung cancer.
>
> **[2:21](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/understanding-confounders?u=76281980&t=141)** That's pretty well established.
>
> **[2:23](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/understanding-confounders?u=76281980&t=143)** But people also wondered, does alcohol drinking cause lung cancer?
>
> **[2:27](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/understanding-confounders?u=76281980&t=147)** So studies using the exposure alcohol drinking and the outcome of lung cancer were also undertaken.
>
> **[2:33](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/understanding-confounders?u=76281980&t=153)** Now, to demonstrate a confounder, we will test your bar knowledge.
>
> **[2:37](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/understanding-confounders?u=76281980&t=157)** Imagine, you are at a bar, even one that does not allow smoking.
>
> **[2:41](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/understanding-confounders?u=76281980&t=161)** You will see that there are a lot of smokers there, more than you'd normally see at some other venue, such as a class or at the gym.
>
> **[2:48](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/understanding-confounders?u=76281980&t=168)** And we know that smoking causes lung cancer, so we feel sorry for these people each time they go outside to take a hit of their cigarette.
>
> **[2:56](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/understanding-confounders?u=76281980&t=176)** Okay, now remember we wanted to actually study drinkers.
>
> **[3:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/understanding-confounders?u=76281980&t=180)** Does drinking cause lung cancer?
>
> **[3:02](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/understanding-confounders?u=76281980&t=182)** But after what I just said, we realize that bars seem to attract smokers.
>
> **[3:07](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/understanding-confounders?u=76281980&t=187)** So, if someone was a smoker and a drinker, maybe their lung cancer was actually caused by the smoking?
>
> **[3:14](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/understanding-confounders?u=76281980&t=194)** So this is the problem.
>
> **[3:16](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/understanding-confounders?u=76281980&t=196)** We know smoking causes lung cancer already, but we want to study the independent effect of alcohol consumption on causing lung cancer and now we see a true confounder.
>
> **[3:28](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/understanding-confounders?u=76281980&t=208)** Since smokers are more likely to drink, we have the classic situation where smoking is confounding the relationship between drinking and lung cancer.
>
> **[3:38](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/understanding-confounders?u=76281980&t=218)** So, let's review, is smoking a confounder in the relationship between alcohol consumption and lung cancer?
>
> **[3:45](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/understanding-confounders?u=76281980&t=225)** Well, it sure looks like it.
>
> **[3:47](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/understanding-confounders?u=76281980&t=227)** Smoking is associated with both the exposure, alcohol drinking, and the outcome, lung cancer.
>
> **[3:53](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/understanding-confounders?u=76281980&t=233)** And also, it's not on the causal pathway between alcohol and lung cancer.
>
> **[3:58](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/understanding-confounders?u=76281980&t=238)** To figure that out, you ask yourself, does smoking cause people to drink?
>
> **[4:03](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/understanding-confounders?u=76281980&t=243)** Probably not.
>
> **[4:04](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/understanding-confounders?u=76281980&t=244)** So, after this lecture, you know the components of a hypothesis: subpopulation, exposure, and outcome.
>
> **[4:11](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/understanding-confounders?u=76281980&t=251)** And you know what a confounder is: a variable associated with the exposure, associated with the outcome, and not on the causal pathway.
>
> **[4:19](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/understanding-confounders?u=76281980&t=259)** Next, we will go into how to identify confounders, once we select a hypothesis.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), else, (1)
> **Analogies:** imagine (1), such as (1)
> **Env Vars:** brfss (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Making a web of causation
> [LinkedIn Learning](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-web-of-causation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-web-of-causation?u=76281980&t=0)** - [Instructor] Welcome to Chapter Two, Section Five.
>
> **[0:03](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-web-of-causation?u=76281980&t=3)** Where we work some more with confounders.
>
> **[0:05](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-web-of-causation?u=76281980&t=5)** In this section, we will identify confounders by looking in the literature.
>
> **[0:10](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-web-of-causation?u=76281980&t=10)** And by making a web of causation.
>
> **[0:12](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-web-of-causation?u=76281980&t=12)** I'll give brief examples of both.
>
> **[0:15](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-web-of-causation?u=76281980&t=15)** To identify confounders, we need some practical hypotheses.
>
> **[0:19](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-web-of-causation?u=76281980&t=19)** We already have selected a sub-population, veterans, and an exposure, alcohol drinking.
>
> **[0:25](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-web-of-causation?u=76281980&t=25)** Let's choose two different outcomes so I can demonstrate two different types of descriptive analyses.
>
> **[0:31](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-web-of-causation?u=76281980&t=31)** Sleep duration, which is continuous variable, and asthma status, which is a binary variable.
>
> **[0:38](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-web-of-causation?u=76281980&t=38)** So our goal is to identify confounding variables between our exposure, alcohol drinking, and our outcomes, which are sleep duration and asthma, which are not on the causal pathway between the exposure and the outcome.
>
> **[0:52](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-web-of-causation?u=76281980&t=52)** And a good way to do that is to go shop in the scientific literature.
>
> **[0:56](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-web-of-causation?u=76281980&t=56)** Here is an article from BRFSS about insufficient rest and sleep among veterans. Let's go to Table 1.
>
> **[1:05](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-web-of-causation?u=76281980&t=65)** Here we are. You will see that they have stratified veterans in Table 1 by recently returning, called newly transitioned, versus long term.
>
> **[1:15](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-web-of-causation?u=76281980&t=75)** That's what stratification is.
>
> **[1:16](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-web-of-causation?u=76281980&t=76)** Separating people into strata, or groups.
>
> **[1:19](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-web-of-causation?u=76281980&t=79)** Let's see what characteristics they included in Table 1.
>
> **[1:23](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-web-of-causation?u=76281980&t=83)** In fact, let's make a list, and then we can think about including these variables in our analysis.
>
> **[1:29](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-web-of-causation?u=76281980&t=89)** Okay, here's what will go on the list: age, sex, race/ethnicity, highest education level, marital status, employment status, and income.
>
> **[1:40](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-web-of-causation?u=76281980&t=100)** We can scroll down for the rest of this long table and finish our list.
>
> **[1:44](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-web-of-causation?u=76281980&t=104)** So one way to come up with confounders is to look in the literature.
>
> **[1:49](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-web-of-causation?u=76281980&t=109)** Regardless of what your final candidate confounder list is, please understand that you do not need to agree with all other BRFSS and non-BRFSS authors.
>
> **[2:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-web-of-causation?u=76281980&t=120)** You are allowed, even encouraged, to think for yourself.
>
> **[2:04](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-web-of-causation?u=76281980&t=124)** However, you do have to have a rationale for any potential confounding variable you include.
>
> **[2:10](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-web-of-causation?u=76281980&t=130)** In other words, you have to believe it is associated with the exposure, associated with the outcome, and not on the causal pathway between the exposure and the outcome.
>
> **[2:20](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-web-of-causation?u=76281980&t=140)** And how can you do that? Well, a good way to do that is to draw a web of causation. I'll show you how.
>
> **[2:26](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-web-of-causation?u=76281980&t=146)** A lot of times, I've seen people draw these webs using the shapes and arrows in Microsoft Word.
>
> **[2:32](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-web-of-causation?u=76281980&t=152)** But I've also seen it in Visio.
>
> **[2:34](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-web-of-causation?u=76281980&t=154)** I prefer to use Gliffy, an online diagramming program at www.[gliffy.com](https://gliffy.com). This is the software I'm going to use to demonstrate a web of causation.
>
> **[2:46](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-web-of-causation?u=76281980&t=166)** Gliffy is a freemium product, which means you can get a free account and try out three diagrams before having to pay.
>
> **[2:52](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-web-of-causation?u=76281980&t=172)** And if you do pay, the costs are reasonable.
>
> **[2:55](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-web-of-causation?u=76281980&t=175)** I encourage you to try it out.
>
> **[2:57](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-web-of-causation?u=76281980&t=177)** So I logged in to [Gliffy.com](https://Gliffy.com) and began our web of causation based on what we know so far. Let's start with this legend.
>
> **[3:05](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-web-of-causation?u=76281980&t=185)** See this yellow object is the exposure?
>
> **[3:09](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-web-of-causation?u=76281980&t=189)** And the red one is the outcome.
>
> **[3:11](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-web-of-causation?u=76281980&t=191)** Then, I have the blue boxes as candidate confounders from BRFSS and the green box for candidate confounders not available in BRFSS. This web of causation I'm drawing will helps me decide which variables to include in the analytic data set as candidate confounders.
>
> **[3:29](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-web-of-causation?u=76281980&t=209)** Let's remember the variables used in the article we reviewed.
>
> **[3:33](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-web-of-causation?u=76281980&t=213)** They included: age, sex, race/ethnicity, highest education level, and marital status.
>
> **[3:41](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-web-of-causation?u=76281980&t=221)** They also included a lot more, but let me demonstrate starting the web of causation with these.
>
> **[3:47](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-web-of-causation?u=76281980&t=227)** Let's start with age. Age is probably related to insufficient sleep and also to alcohol consumption.
>
> **[3:54](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-web-of-causation?u=76281980&t=234)** So I connected age and sleep and put arrows on it accordingly. Next, we have sex.
>
> **[3:59](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-web-of-causation?u=76281980&t=239)** And that probably has the same relationship with out exposure and our outcome.
>
> **[4:03](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-web-of-causation?u=76281980&t=243)** So I added a line with those arrows.
>
> **[4:06](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-web-of-causation?u=76281980&t=246)** Now, race and ethnicity. Same thing.
>
> **[4:10](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-web-of-causation?u=76281980&t=250)** But now, let's include highest education level.
>
> **[4:13](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-web-of-causation?u=76281980&t=253)** And things get a little complicated.
>
> **[4:15](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-web-of-causation?u=76281980&t=255)** Yes, this is probably associated with insufficient sleep and alcohol consumption.
>
> **[4:20](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-web-of-causation?u=76281980&t=260)** But it is also associated with other confounders.
>
> **[4:24](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-web-of-causation?u=76281980&t=264)** Older people tend to be more educated.
>
> **[4:27](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-web-of-causation?u=76281980&t=267)** And so we have an association with age.
>
> **[4:30](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-web-of-causation?u=76281980&t=270)** Also, historically, men went to college more often than women, so we have a potential sex association.
>
> **[4:37](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-web-of-causation?u=76281980&t=277)** We know that non-white races have, on average, lower educational obtainment than white race.
>
> **[4:42](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-web-of-causation?u=76281980&t=282)** So that is associated with education.
>
> **[4:45](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-web-of-causation?u=76281980&t=285)** And then if we add marital status, we get more complex relationships.
>
> **[4:49](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-web-of-causation?u=76281980&t=289)** Married people are older, so they are more likely to be highly educated. And also, being married conserves money, so you are more likely to get an education.
>
> **[4:59](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-web-of-causation?u=76281980&t=299)** The arrow goes both ways.
>
> **[5:01](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-web-of-causation?u=76281980&t=301)** I'm going to finish this web of causation off stage and then show you what I came up with.
>
> **[5:06](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-web-of-causation?u=76281980&t=306)** You might see it differently, but like I said, the trick is to be able to defend everything you did and did not include.
>
> **[5:11](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-web-of-causation?u=76281980&t=311)** I'll be right back with my finished web.
>
> **[5:14](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-web-of-causation?u=76281980&t=314)** Okay, now I have completed my web of causation based on my review of the literature and of the BRFSS core questions in 2014.
>
> **[5:23](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-web-of-causation?u=76281980&t=323)** I've chosen 11 candidate confounders and represented those in blue boxes.
>
> **[5:29](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-web-of-causation?u=76281980&t=329)** I also included a green box, just for an example.
>
> **[5:32](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-web-of-causation?u=76281980&t=332)** We know that people with sleep apnea are more likely to have trouble sleeping. And also, alcohol consumers have higher rates of sleep apnea.
>
> **[5:40](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-web-of-causation?u=76281980&t=340)** So it would be nice to consider putting it in the model, but some might complain it's on the causal pathway and doesn't belong there. But we don't have a choice.
>
> **[5:49](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-web-of-causation?u=76281980&t=349)** Because the core 2014 BRFSS questions didn't ask about sleep apnea.
>
> **[5:55](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-web-of-causation?u=76281980&t=355)** So that's why the box is green. We can't use it anyway.
>
> **[5:59](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-web-of-causation?u=76281980&t=359)** So now we have selected our candidate confounders.
>
> **[6:01](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-web-of-causation?u=76281980&t=361)** The next step is to add the native variables for these candidate confounders to our data dictionary.
>
> **[6:07](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-web-of-causation?u=76281980&t=367)** Then, just as we did with our exposure and outcomes, we need to design calculated variables for these confounders, so we can use them in our analysis.
>
> **[6:16](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-web-of-causation?u=76281980&t=376)** Remember, we often need indicator variables for the regression analysis, and otherwise, we need to clean up the variables and make them the way we want them for the next course.
>
> **[6:25](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-web-of-causation?u=76281980&t=385)** That's what we'll do in the next section.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), include. (2)
> **Env Vars:** brfss (7)
> **Definitions:** is a  (2), is an  (1), in other words (1)
> **CLI Commands:** make (2)
> **URLs:** [gliffy.com](https://gliffy.com) (2)
> **UI Navigation:** go to (1), scroll down (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Designing confounders: Age and smoking
> [LinkedIn Learning](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-age-and-smoking?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-age-and-smoking?u=76281980&t=0)** - [Instructor] Welcome to chapter two section six where we will design the confounding variables we will use for age and smoking in our analysis.
>
> **[0:08](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-age-and-smoking?u=76281980&t=8)** So where are we in our journey?
>
> **[0:10](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-age-and-smoking?u=76281980&t=10)** We selected one hypothesis per outcome variable to guide our analyses and put our native variables in our data dictionary.
>
> **[0:18](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-age-and-smoking?u=76281980&t=18)** In the last section, I showed you my final web of causation, which included the confounders I am choosing to include in the analysis.
>
> **[0:26](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-age-and-smoking?u=76281980&t=26)** The next step is I need to go into the code book and find all the native variables that correspond to those variables I selected as potential confounders.
>
> **[0:34](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-age-and-smoking?u=76281980&t=34)** I need to make sure I retain these in the analytic data set.
>
> **[0:38](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-age-and-smoking?u=76281980&t=38)** Next, as you saw with the exposure and outcome, I need to redesign most if not all of the variables to make it so I can use them in the descriptive analysis.
>
> **[0:49](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-age-and-smoking?u=76281980&t=49)** Also, I will need indicator variables for multi-level categorical variables.
>
> **[0:54](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-age-and-smoking?u=76281980&t=54)** After making my web of causation, I added age and smoking to my data dictionary.
>
> **[0:59](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-age-and-smoking?u=76281980&t=59)** Let's see what I did.
>
> **[1:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-age-and-smoking?u=76281980&t=60)** So you can easily see I made the native variables blue and the calculated ones are not blue.
>
> **[1:05](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-age-and-smoking?u=76281980&t=65)** You can see at the top we have the subpopulation, exposure and outcome variables we designed in previous sections.
>
> **[1:12](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-age-and-smoking?u=76281980&t=72)** Now, I will go through the confounders I selected.
>
> **[1:16](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-age-and-smoking?u=76281980&t=76)** First, you will see that _AGE_G is the native age variable in BRFSS 2014.
>
> **[1:24](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-age-and-smoking?u=76281980&t=84)** You will see that there are a lot of age variables in the values document and in the table named _AGE_G.
>
> **[1:31](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-age-and-smoking?u=76281980&t=91)** Let's go to the _AGE_G tab.
>
> **[1:34](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-age-and-smoking?u=76281980&t=94)** See here, we can use _AGE_G as a grouping variable because it doesn't have any missings or refused or don't knows.
>
> **[1:41](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-age-and-smoking?u=76281980&t=101)** But we need indicator variables.
>
> **[1:43](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-age-and-smoking?u=76281980&t=103)** I chose age one or the first age category as the reference group.
>
> **[1:48](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-age-and-smoking?u=76281980&t=108)** This means I have to make age two, age three, age four, age five, and age six as the indicator variables.
>
> **[1:56](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-age-and-smoking?u=76281980&t=116)** See how each indicator variables has all zeros except for where the category is true for it, where there is a one.
>
> **[2:03](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-age-and-smoking?u=76281980&t=123)** Okay great, let's look at our next confounder.
>
> **[2:07](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-age-and-smoking?u=76281980&t=127)** See here, there are all the indicator variables made for age.
>
> **[2:12](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-age-and-smoking?u=76281980&t=132)** Okay, what's next?
>
> **[2:14](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-age-and-smoking?u=76281980&t=134)** Smoking.
>
> **[2:15](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-age-and-smoking?u=76281980&t=135)** So smoking is kind of hard in BRFSS.
>
> **[2:18](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-age-and-smoking?u=76281980&t=138)** Let's look at the code book.
>
> **[2:19](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-age-and-smoking?u=76281980&t=139)** First, they ask have you ever smoked 100 cigarettes in your life?
>
> **[2:24](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-age-and-smoking?u=76281980&t=144)** My answer is no so I'm a never smoker.
>
> **[2:28](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-age-and-smoking?u=76281980&t=148)** So I get out of being asked that smoking section.
>
> **[2:32](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-age-and-smoking?u=76281980&t=152)** But let's say you used to smoke, but you quit or maybe you're still smoking.
>
> **[2:37](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-age-and-smoking?u=76281980&t=157)** Then you get asked the next question, which is do you now smoke cigarettes every day, some days, or not at all?
>
> **[2:43](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-age-and-smoking?u=76281980&t=163)** So they can figure out if you quit.
>
> **[2:45](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-age-and-smoking?u=76281980&t=165)** We have to do some fancy handling to recode this into one grouping variable.
>
> **[2:50](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-age-and-smoking?u=76281980&t=170)** So here's how we're going to handle it.
>
> **[2:52](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-age-and-smoking?u=76281980&t=172)** We'll make a never smoke flag, which is another name for an indicator variable and we'll put it there for people like me who have never smoked.
>
> **[3:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-age-and-smoking?u=76281980&t=180)** Then when we code the grouping variable, we'll put the never smoked people in there under non-smokers, otherwise we'll miss them as unknown if we just use the next question, which is only asked of smokers.
>
> **[3:12](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-age-and-smoking?u=76281980&t=192)** That's called SMOKDAY2 Here we see the coding for the native variable SMOKDAY2.
>
> **[3:18](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-age-and-smoking?u=76281980&t=198)** Respondents who said they smoked 100 cigarettes in their life already were asked how many days they smoked in the last 30 days.
>
> **[3:25](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-age-and-smoking?u=76281980&t=205)** As you can see, they could say some days or every day or not at all.
>
> **[3:31](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-age-and-smoking?u=76281980&t=211)** So I made SMOKGRP, which is a grouping variable for smokers that groups the first two, the some days and the every day together.
>
> **[3:38](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-age-and-smoking?u=76281980&t=218)** See how there are two ones here?
>
> **[3:40](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-age-and-smoking?u=76281980&t=220)** That way when I make this new variable and use it, I can collapse these two groups together and also we can code the never smoke people into the non-smokers and then in my indicator variable SMOKER for current smoker, I put the one in both every day and some days because they both count as smokers.
>
> **[3:58](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-age-and-smoking?u=76281980&t=238)** Isn't that clever?
>
> **[4:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-age-and-smoking?u=76281980&t=240)** Let's not forget to revisit our main dictionary and put our newly designed calculated variables in it.
>
> **[4:06](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-age-and-smoking?u=76281980&t=246)** And here they are.
>
> **[4:07](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-age-and-smoking?u=76281980&t=247)** Here is NEVERSMK along with SMOKEGRP and SMOKER.
>
> **[4:11](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-age-and-smoking?u=76281980&t=251)** In conclusion, in this section I showed you that I realized that the age variable has no unknowns in it, so we can use it as a grouping variable, and also how I identified the smoking variables in the code book.
>
> **[4:24](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-age-and-smoking?u=76281980&t=264)** Then I showed you how I documented these variables and also designed documentation for the new variables.
>
> **[4:30](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-age-and-smoking?u=76281980&t=270)** This new documentation included not only the main variable, but documenting what each level of the variable means on a separate tab.
>
> **[4:38](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-age-and-smoking?u=76281980&t=278)** We'll keep doing this in the next section for other confounders commonly used in analyses.

> [!info]- Semantic Content
>
> **Env Vars:** brfss (2), smokday2 (2), smoker (2), smokgrp (1), neversmk (1)
> **CLI Commands:** make (5), find (1)
> **Code Keywords:** let (6)
> **Cross-References:** in the last (2), as you saw (1), in the next (1)
> **Definitions:** is a  (2)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### Designing confounders: Other demographics
> [LinkedIn Learning](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-other-demographics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-other-demographics?u=76281980&t=0)** - [Instructor] Onto Chapter 2, section 7, where we proceed to designing demographic confounders.
>
> **[0:07](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-other-demographics?u=76281980&t=7)** So, this lecture will show you how to design variables for ethnicity, race, and other demographics.
>
> **[0:12](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-other-demographics?u=76281980&t=12)** The way the variables come in in the BRFSS, and in most data sets, are not suitable for analysis.
>
> **[0:19](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-other-demographics?u=76281980&t=19)** You'll understand why as I walk you through this.
>
> **[0:22](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-other-demographics?u=76281980&t=22)** This is why you have to almost always redesign each variable you want to use.
>
> **[0:27](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-other-demographics?u=76281980&t=27)** Let's look at how I did this in the data dictionary.
>
> **[0:30](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-other-demographics?u=76281980&t=30)** And back at our dictionary, we can see that our smoking grouping variable and the smoking indicator variable is documented.
>
> **[0:37](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-other-demographics?u=76281980&t=37)** Next on the list, we have two, what you call two-state flags, because they can only be 1 and 0, and that is _HISPANC and SEX.
>
> **[0:46](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-other-demographics?u=76281980&t=46)** But as you can see, I redid those variables too.
>
> **[0:50](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-other-demographics?u=76281980&t=50)** Please notice that for some reason they did not include the second I in Hispanic in the variable.
>
> **[0:55](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-other-demographics?u=76281980&t=55)** So, I call it Hispanc!
>
> **[0:58](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-other-demographics?u=76281980&t=58)** I don't know who names these variables.
>
> **[1:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-other-demographics?u=76281980&t=60)** But you get to name your own when you design them.
>
> **[1:02](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-other-demographics?u=76281980&t=62)** So, as you can see here on the Hispanc tab, the native coding of the Hispanic variable is annoying, because it has an unknown level.
>
> **[1:11](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-other-demographics?u=76281980&t=71)** To solve this, I designed a real two-state flag, putting zeroes in the No and Unknown levels, and including the second I in the word Hispanic.
>
> **[1:21](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-other-demographics?u=76281980&t=81)** But you'll see on the SEX tab the native variable is coded 1 and 2.
>
> **[1:25](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-other-demographics?u=76281980&t=85)** Not only am I never going to remember which is which, this is not like the indicative variables I like, which are coded 0 and 1.
>
> **[1:33](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-other-demographics?u=76281980&t=93)** So if I have a two-state flag, I tend to name it after what one means.
>
> **[1:38](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-other-demographics?u=76281980&t=98)** If 1 means you have allergies, I'll name it Allergies, and if 1 means you do not have allergies, I will name the variable NoAllergies.
>
> **[1:46](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-other-demographics?u=76281980&t=106)** But here, we are going to make it so 1 means male.
>
> **[1:49](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-other-demographics?u=76281980&t=109)** We are going to make a field called Male and fill it in with 1, and the other field with 0, just for practicality.
>
> **[1:56](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-other-demographics?u=76281980&t=116)** Okay, back at our dictionary.
>
> **[1:58](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-other-demographics?u=76281980&t=118)** You'll notice that Hispanic ethnicity is different from race, so we have to have the native variable _MRACE1 that I chose.
>
> **[2:05](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-other-demographics?u=76281980&t=125)** Let's go look at the coding.
>
> **[2:07](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-other-demographics?u=76281980&t=127)** Now, remember, we can look up this coding in the codebook as well as the questionnaire.
>
> **[2:11](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-other-demographics?u=76281980&t=131)** I actually prefer the codebook, as I think they sometimes don't have the right variable names on the questionnaire.
>
> **[2:17](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-other-demographics?u=76281980&t=137)** And also, you can see the frequencies of each level.
>
> **[2:20](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-other-demographics?u=76281980&t=140)** Like here, let's look at _MRACE1 in the codebook.
>
> **[2:24](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-other-demographics?u=76281980&t=144)** Note that _MRACE1 is already a calculated variable that BRFSS makes just for you, but it still has many levels, and these levels need to be collapsed.
>
> **[2:34](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-other-demographics?u=76281980&t=154)** Imagine that your hypothesis wasn't about veterans, like ours is, but was about African Americans instead.
>
> **[2:40](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-other-demographics?u=76281980&t=160)** You know from this codebook that only 36,699 people are African American in this data set.
>
> **[2:48](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-other-demographics?u=76281980&t=168)** So this can help you design your analytic plan.
>
> **[2:50](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-other-demographics?u=76281980&t=170)** Okay, let's go back to the dictionary and document this variable, and also decide how to collapse it.
>
> **[2:56](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-other-demographics?u=76281980&t=176)** Okay, so first you will see I made a race grouping variable.
>
> **[3:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-other-demographics?u=76281980&t=180)** And that I designated the top five races to be separate, but also six is other and multiracial.
>
> **[3:08](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-other-demographics?u=76281980&t=188)** Then you'll see I only made three indicator variables: BLACK, ASIAN, and OTHRACE, for other race.
>
> **[3:15](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-other-demographics?u=76281980&t=195)** White will be the reference group.
>
> **[3:17](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-other-demographics?u=76281980&t=197)** I really feel that black people and Asian people should get their own variable, but due to small cells, meaning having few people in the category, you will see I coded American Indians, Native Hawaiians, other, and multiracial into the same OTHRACE flag.
>
> **[3:34](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-other-demographics?u=76281980&t=214)** And you'll see these now in the main dictionary.
>
> **[3:38](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-other-demographics?u=76281980&t=218)** Okay, we have one more to go through in this movie.
>
> **[3:41](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-other-demographics?u=76281980&t=221)** Let's look at marital status.
>
> **[3:45](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-other-demographics?u=76281980&t=225)** For this one, in the grouping variable, I grouped together divorced and widowed as formerly married.
>
> **[3:52](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-other-demographics?u=76281980&t=232)** Then, as you can see by the flags, I chose married as the reference group, then coded flag for never married and then one for former married, and that has 1s in both the divorced and widowed.
>
> **[4:04](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-other-demographics?u=76281980&t=244)** So I just showed you how to design some demographic variables in your data dictionary.
>
> **[4:09](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-other-demographics?u=76281980&t=249)** I showed you how to document the native variable and how to design both grouping and indicator variables.
>
> **[4:14](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-other-demographics?u=76281980&t=254)** The next section, we'll finish up our design of confounding variables for our analytic data set.

> [!info]- Semantic Content
>
> **Env Vars:** brfss (2), sex (2), othrace (2), black (1), asian (1)
> **Code Keywords:** let (5), this. (1), this, (1)
> **CLI Commands:** make (2)
> **Cross-References:** go back to (1)
> **Analogies:** imagine (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Designing confounders: Other variables used in analysis
> [LinkedIn Learning](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-other-variables-used-in-analysis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-other-variables-used-in-analysis?u=76281980&t=0)** - [Instructor] Finally, we've made it to the last section of Chapter two where we will finalize the design of our confounders.
>
> **[0:07](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-other-variables-used-in-analysis?u=76281980&t=7)** So referring to my web of causation, there are only a few confounders left to include: self-reported general health, whether or not the respondent has health insurance or a health plan, highest education level of the respondent, respondent's household income and obesity status, and respondent's exercise habits.
>
> **[0:27](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-other-variables-used-in-analysis?u=76281980&t=27)** I added these to the dictionary so let's go take a look.
>
> **[0:30](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-other-variables-used-in-analysis?u=76281980&t=30)** Here's the general health question.
>
> **[0:32](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-other-variables-used-in-analysis?u=76281980&t=32)** This is a helpful question for adjusting for a chronic disease.
>
> **[0:36](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-other-variables-used-in-analysis?u=76281980&t=36)** Rather than putting all the diseases in which can be a problem in modeling, the general health question tends to take care of all that variation.
>
> **[0:44](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-other-variables-used-in-analysis?u=76281980&t=44)** Let's look at the GENHLTH tab.
>
> **[0:47](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-other-variables-used-in-analysis?u=76281980&t=47)** You will see that the grouping variable I designed, GENHLTH2, is almost like the native variable but groups together the Refused and unknown but you will see that I only make indicator variables for the FAIRHLTH level and the POORHLTH level.
>
> **[1:02](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-other-variables-used-in-analysis?u=76281980&t=62)** The rest of the levels are reference levels.
>
> **[1:04](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-other-variables-used-in-analysis?u=76281980&t=64)** I've just found that these two seem to help adjust the models so I plan to make them.
>
> **[1:09](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-other-variables-used-in-analysis?u=76281980&t=69)** From looking at the literature I decided to include not having health insurance as a candidate confounder so you will see HLTHPLN1 one as the native variable here, let's go to the tab.
>
> **[1:21](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-other-variables-used-in-analysis?u=76281980&t=81)** As you can see I designed a simple grouping variable, HLTHPLN2 and also one of those flags I told you about where I name it NOPLAN.
>
> **[1:30](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-other-variables-used-in-analysis?u=76281980&t=90)** As you'll see the one is under the NO for NOPLAN that way I can remember what it means, one means NOPLAN.
>
> **[1:38](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-other-variables-used-in-analysis?u=76281980&t=98)** Well, I needed both education and income so let's look at how I handled those tabs.
>
> **[1:46](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-other-variables-used-in-analysis?u=76281980&t=106)** For education I first made a grouping variable.
>
> **[1:48](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-other-variables-used-in-analysis?u=76281980&t=108)** Look, I put ones in everything that is less than high school so I could group all of those together, then you'll see my two indicator variables.
>
> **[1:57](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-other-variables-used-in-analysis?u=76281980&t=117)** LOWED means that they only had high school up through high school diploma.
>
> **[2:02](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-other-variables-used-in-analysis?u=76281980&t=122)** See the ones in the various levels?
>
> **[2:04](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-other-variables-used-in-analysis?u=76281980&t=124)** And then SOMECOLL is some college and that gets a one.
>
> **[2:08](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-other-variables-used-in-analysis?u=76281980&t=128)** This forces the college graduates to be in the reference group.
>
> **[2:11](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-other-variables-used-in-analysis?u=76281980&t=131)** Okay, now let's look at INCOME.
>
> **[2:14](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-other-variables-used-in-analysis?u=76281980&t=134)** As you can see the native variable for income which by the way is household income has eight levels.
>
> **[2:21](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-other-variables-used-in-analysis?u=76281980&t=141)** It's kind of annoying but I was lazy and decided to keep it that way.
>
> **[2:25](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-other-variables-used-in-analysis?u=76281980&t=145)** So you can see my grouping variable, INCOME3, basically just puts unknowns together.
>
> **[2:30](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-other-variables-used-in-analysis?u=76281980&t=150)** I wasn't really sure how to collapse these categories.
>
> **[2:33](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-other-variables-used-in-analysis?u=76281980&t=153)** A household income of 50,000 to 75,000 per year is low, in my opinion, I live in Boston.
>
> **[2:41](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-other-variables-used-in-analysis?u=76281980&t=161)** These all look low but I decided to make the eighth level, the richest ones, the reference group and created indicator variables for each of the other levels.
>
> **[2:49](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-other-variables-used-in-analysis?u=76281980&t=169)** You can do something different when you do it but that's what I did.
>
> **[2:54](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-other-variables-used-in-analysis?u=76281980&t=174)** Okay, our last two variables are BMI and physical activity.
>
> **[2:59](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-other-variables-used-in-analysis?u=76281980&t=179)** Let's look at the BMI variable, I called the tab OBESITY.
>
> **[3:05](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-other-variables-used-in-analysis?u=76281980&t=185)** You will see here that I just created a grouping variable called BMICAT which has a nine instead of nothing for Missing.
>
> **[3:13](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-other-variables-used-in-analysis?u=76281980&t=193)** This is just good coding because it's easier to call out a number in code than a Missing value in code.
>
> **[3:18](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-other-variables-used-in-analysis?u=76281980&t=198)** Then choosing Normal weight as the reference category, I make flags for Underweight, Overweight, and Obese.
>
> **[3:25](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-other-variables-used-in-analysis?u=76281980&t=205)** Did you know that Underweight is actually the most dangerous for most diseases.
>
> **[3:29](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-other-variables-used-in-analysis?u=76281980&t=209)** You'll see that come out often in a BRFS Analysis.
>
> **[3:34](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-other-variables-used-in-analysis?u=76281980&t=214)** And let's look at our last variable, physical activity, on the EXERANY2 tab.
>
> **[3:40](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-other-variables-used-in-analysis?u=76281980&t=220)** Here you will see I made my grouping variable to put the unknowns together but also I did my trick of naming the flag after what it means.
>
> **[3:48](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-other-variables-used-in-analysis?u=76281980&t=228)** NOEXER stands for no exercise because, as you can see, I'm flagging the no exercisers with a one.
>
> **[3:55](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-other-variables-used-in-analysis?u=76281980&t=235)** Here we are, done with our Data Dictionary and we have finalized our Analytic Data Set.
>
> **[4:01](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-other-variables-used-in-analysis?u=76281980&t=241)** Now we can finalize our Data Dictionary for our Analytic Data Set.
>
> **[4:06](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-other-variables-used-in-analysis?u=76281980&t=246)** So we know what native variables to keep and how to generate all the variables we think we need for the analysis.
>
> **[4:12](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-other-variables-used-in-analysis?u=76281980&t=252)** But if we forget one or we have trouble with one and need to redesign it we can also add more or try something different as we go along but then we will have to update our Data Dictionary to add any new variables we decide to add along the way.
>
> **[4:26](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-other-variables-used-in-analysis?u=76281980&t=266)** For now, this Data Dictionary will be our guide for generating our Analytic Data Set for this analysis.
>
> **[4:32](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-other-variables-used-in-analysis?u=76281980&t=272)** This ends our design work for this analysis.
>
> **[4:35](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/designing-confounders-other-variables-used-in-analysis?u=76281980&t=275)** Now, on to Chapter three where we start working with R.

> [!info]- Semantic Content
>
> **Env Vars:** noplan (3), bmi (2), genhlth (1), genhlth2 (1), fairhlth (1)
> **Code Keywords:** let (7), finally, (1), include: (1), self (1)
> **CLI Commands:** make (4)
> **Definitions:** is a  (1), means that (1), stands for (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)


### 3. Reading in Data and Applying Exclusions

#### Reading in BRFSS XPT data
> [LinkedIn Learning](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reading-in-brfss-xpt-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reading-in-brfss-xpt-data?u=76281980&t=0)** - [Narrator] And now on to Reading in the BRFSS XPT Data which we will do in this section.
>
> **[0:07](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reading-in-brfss-xpt-data?u=76281980&t=7)** So here we will download and read in the data set.
>
> **[0:10](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reading-in-brfss-xpt-data?u=76281980&t=10)** Okay, so let's head over to the BRFSS website and see if we can download our 2014 data.
>
> **[0:18](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reading-in-brfss-xpt-data?u=76281980&t=18)** Okay, so here we are at the BRFSS 2014 Suvey Data and Documentation page.
>
> **[0:26](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reading-in-brfss-xpt-data?u=76281980&t=26)** Information is at the top, the data files are in the middle, and there are some resources at the end.
>
> **[0:33](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reading-in-brfss-xpt-data?u=76281980&t=33)** Let's scroll up to the Data Files.
>
> **[0:36](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reading-in-brfss-xpt-data?u=76281980&t=36)** You will see that they are posted in two formats.
>
> **[0:39](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reading-in-brfss-xpt-data?u=76281980&t=39)** ASCII format, which can be read by any program, and SAS Transport format, which is dot XPT format.
>
> **[0:48](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reading-in-brfss-xpt-data?u=76281980&t=48)** XPT is not the regular SAS data set format.
>
> **[0:51](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reading-in-brfss-xpt-data?u=76281980&t=51)** That is called SAS7BDAT.
>
> **[0:55](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reading-in-brfss-xpt-data?u=76281980&t=55)** XPT stands for transport.
>
> **[0:57](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reading-in-brfss-xpt-data?u=76281980&t=57)** Why XPT?
>
> **[0:58](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reading-in-brfss-xpt-data?u=76281980&t=58)** Well, it's not a secret that SAS7BDAT data sets are really bloated.
>
> **[1:03](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reading-in-brfss-xpt-data?u=76281980&t=63)** So SAS invented this XPT form.
>
> **[1:06](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reading-in-brfss-xpt-data?u=76281980&t=66)** It's kind of like a zip version of the data set so it is smaller when posted on a website for download.
>
> **[1:13](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reading-in-brfss-xpt-data?u=76281980&t=73)** And you know how sneaky R is?
>
> **[1:15](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reading-in-brfss-xpt-data?u=76281980&t=75)** The foreign package we just installed allows you to read in XPT files.
>
> **[1:19](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reading-in-brfss-xpt-data?u=76281980&t=79)** Can you believe it?
>
> **[1:21](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reading-in-brfss-xpt-data?u=76281980&t=81)** So this is the one we will download, the XPT.
>
> **[1:24](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reading-in-brfss-xpt-data?u=76281980&t=84)** Even though it's an XPT, it's a huge file.
>
> **[1:27](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reading-in-brfss-xpt-data?u=76281980&t=87)** So let's get started.
>
> **[1:29](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reading-in-brfss-xpt-data?u=76281980&t=89)** While that's downloading, lets turn to our file manager so we can set up our directories.
>
> **[1:34](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reading-in-brfss-xpt-data?u=76281980&t=94)** I suggest that, for your project, whether you are using SAS or R or any statistical program, you make a folder called analysis or analytics, and put only files directly related to your data analysis there.
>
> **[1:47](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reading-in-brfss-xpt-data?u=76281980&t=107)** In other words, data dictionaries, other notes you take, etc.
>
> **[1:51](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reading-in-brfss-xpt-data?u=76281980&t=111)** Those metadata do not belong in the analysis folder.
>
> **[1:55](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reading-in-brfss-xpt-data?u=76281980&t=115)** The only things that belong in this folder would be the actual data you are using or that you output as part of the R analysis and the actual code you make.
>
> **[2:04](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reading-in-brfss-xpt-data?u=76281980&t=124)** So, within this analytics folder, I have two folders, data and code.
>
> **[2:09](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reading-in-brfss-xpt-data?u=76281980&t=129)** You want to keep these separate and, in case you didn't guess, put the data in the data folder and put the code in the code folder.
>
> **[2:18](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reading-in-brfss-xpt-data?u=76281980&t=138)** So that's it an analysis folder with a data folder and a code folder in it.
>
> **[2:23](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reading-in-brfss-xpt-data?u=76281980&t=143)** And guess where we are going to put that XPT file we are downloading?
>
> **[2:27](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reading-in-brfss-xpt-data?u=76281980&t=147)** You guessed it, in the data folder.
>
> **[2:30](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reading-in-brfss-xpt-data?u=76281980&t=150)** Let's copy it in.
>
> **[2:31](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reading-in-brfss-xpt-data?u=76281980&t=151)** Wow, this is such a big file even the XPT file is zipped.
>
> **[2:36](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reading-in-brfss-xpt-data?u=76281980&t=156)** So lets unzip this from the downloads directory and then drag our XPT data set in to our data folder we just made.
>
> **[2:45](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reading-in-brfss-xpt-data?u=76281980&t=165)** Done! Okay, let's go back to R.
>
> **[2:48](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reading-in-brfss-xpt-data?u=76281980&t=168)** Now, remember how I showed you change directory?
>
> **[2:52](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reading-in-brfss-xpt-data?u=76281980&t=172)** That's how to set a default directory for the session.
>
> **[2:55](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reading-in-brfss-xpt-data?u=76281980&t=175)** Let's get R to be automatically mapped to the data folder for the session.
>
> **[2:59](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reading-in-brfss-xpt-data?u=76281980&t=179)** We do that by clicking on the console, and choosing File, Change dir.
>
> **[3:05](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reading-in-brfss-xpt-data?u=76281980&t=185)** Now we'll choose the analytics folder and then the data folder and say OK.
>
> **[3:11](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reading-in-brfss-xpt-data?u=76281980&t=191)** That way, when we read in the data, R will, by default, look in our data folder.
>
> **[3:17](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reading-in-brfss-xpt-data?u=76281980&t=197)** Here we are back at our code.
>
> **[3:19](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reading-in-brfss-xpt-data?u=76281980&t=199)** At the top we call up the foreign library, but below we will create an R data set out of the downloaded data and we have to name it.
>
> **[3:28](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reading-in-brfss-xpt-data?u=76281980&t=208)** I name data sets simple, short names and then I add a suffix as a letter.
>
> **[3:33](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reading-in-brfss-xpt-data?u=76281980&t=213)** So I start with "a".
>
> **[3:35](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reading-in-brfss-xpt-data?u=76281980&t=215)** You will see I increment this letter each time we remake the data set.
>
> **[3:38](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reading-in-brfss-xpt-data?u=76281980&t=218)** Which we will do about a zillion times in this chapter.
>
> **[3:41](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reading-in-brfss-xpt-data?u=76281980&t=221)** So I start out with BRFSS underscore a as a name and I put that here.
>
> **[3:48](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reading-in-brfss-xpt-data?u=76281980&t=228)** Now, because we are making an object, I use the less than sign followed by the dash to make a little arrow.
>
> **[3:55](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reading-in-brfss-xpt-data?u=76281980&t=235)** This command, the less than and then the dash to make a little arrow, is the universal command in R for making an object.
>
> **[4:02](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reading-in-brfss-xpt-data?u=76281980&t=242)** In this case, the object we are making is called a data frame.
>
> **[4:06](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reading-in-brfss-xpt-data?u=76281980&t=246)** R has other objects we'll encounter, but right now we just want to get the BRFSS data into a data frame called BRFSS underscore a.
>
> **[4:16](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reading-in-brfss-xpt-data?u=76281980&t=256)** So what do we put in BRFSS underscore a now that we have our little arrow?
>
> **[4:22](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reading-in-brfss-xpt-data?u=76281980&t=262)** That's what goes on the other side of the arrow.
>
> **[4:24](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reading-in-brfss-xpt-data?u=76281980&t=264)** The foreign package doco we looked up tells us we want to use the function "read.xport".
>
> **[4:32](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reading-in-brfss-xpt-data?u=76281980&t=272)** This is the function and then we have the parenthesis and that's where I put the actual path and name of the data set.
>
> **[4:40](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reading-in-brfss-xpt-data?u=76281980&t=280)** Complete with the dot xpt at the end in quotes.
>
> **[4:44](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reading-in-brfss-xpt-data?u=76281980&t=284)** Note the direction of the slashes, forward.
>
> **[4:47](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reading-in-brfss-xpt-data?u=76281980&t=287)** That's all that we'll read in our data set.
>
> **[4:50](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reading-in-brfss-xpt-data?u=76281980&t=290)** Lets run it.
>
> **[4:51](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reading-in-brfss-xpt-data?u=76281980&t=291)** Lets run it by highlighting it and doing Control R.
>
> **[4:55](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reading-in-brfss-xpt-data?u=76281980&t=295)** It will take a little while because it's almost 500,00 rows, but it won't take long.
>
> **[5:01](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reading-in-brfss-xpt-data?u=76281980&t=301)** Errors would be reported in the console, but look, no errors. Yay!
>
> **[5:06](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reading-in-brfss-xpt-data?u=76281980&t=306)** Okay, now that it is in there, it would be nice to see a list of all the variables, wouldn't it?
>
> **[5:11](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reading-in-brfss-xpt-data?u=76281980&t=311)** You can do that with a "colnames" function.
>
> **[5:13](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reading-in-brfss-xpt-data?u=76281980&t=313)** So lets look at the colnames of BRFSS underscore a.
>
> **[5:18](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reading-in-brfss-xpt-data?u=76281980&t=318)** Let's highlight this and do Control R.
>
> **[5:23](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reading-in-brfss-xpt-data?u=76281980&t=323)** Here we are.
>
> **[5:24](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reading-in-brfss-xpt-data?u=76281980&t=324)** Okay, I want to call your attention to something.
>
> **[5:26](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reading-in-brfss-xpt-data?u=76281980&t=326)** Remember from our data dictionary how some of the native variables we are using, that the CDC already calculated for us, started with an underscore?
>
> **[5:35](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reading-in-brfss-xpt-data?u=76281980&t=335)** For example, the underscore BMI5CAT variable had that.
>
> **[5:40](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reading-in-brfss-xpt-data?u=76281980&t=340)** But now, as you can see in the colnames output, R has added an "X" to the beginning of the variable name.
>
> **[5:48](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reading-in-brfss-xpt-data?u=76281980&t=348)** Now it is named X underscore BMI5CAT.
>
> **[5:51](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reading-in-brfss-xpt-data?u=76281980&t=351)** We have to update our data dictionary to add this nuance.
>
> **[5:55](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reading-in-brfss-xpt-data?u=76281980&t=355)** I'll do that offstage.
>
> **[5:56](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reading-in-brfss-xpt-data?u=76281980&t=356)** I'll show you how I update the data dictionary by using the BMI example.
>
> **[6:01](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reading-in-brfss-xpt-data?u=76281980&t=361)** First, in the main dictionary, we need to find our BMI5CAT variable and add the "X" before the underscore.
>
> **[6:11](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reading-in-brfss-xpt-data?u=76281980&t=371)** Next, because we called the picklist for this variable Obesity, we need to go to that tab and update the variable name that's listed there.
>
> **[6:20](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reading-in-brfss-xpt-data?u=76281980&t=380)** And, for the other tabs that we actually named after the variable, like HISPANC, remember HISPANC, we'll have to add the "X" to the beginning of the name of the tab.
>
> **[6:31](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reading-in-brfss-xpt-data?u=76281980&t=391)** So congratualtions, you successfully read in your data set.
>
> **[6:35](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reading-in-brfss-xpt-data?u=76281980&t=395)** So, in this movie, we downloaded the xpt file from the BRFSS site.
>
> **[6:40](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reading-in-brfss-xpt-data?u=76281980&t=400)** We set up our directories and put our data in one of them.
>
> **[6:44](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reading-in-brfss-xpt-data?u=76281980&t=404)** And we read in our xpt file.
>
> **[6:47](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reading-in-brfss-xpt-data?u=76281980&t=407)** We also took a quick look at the column names.
>
> **[6:50](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reading-in-brfss-xpt-data?u=76281980&t=410)** In the next movie, I will talk about naming conventions for both our data sets and our code.
>
> **[6:54](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reading-in-brfss-xpt-data?u=76281980&t=414)** So you know what to name what you just wrote.

> [!info]- Semantic Content
>
> **Env Vars:** xpt (12), brfss (9), sas (4), bmi5cat (3), sas7bdat (2)
> **Code Keywords:** let (7), function (3), default, (1), case, (1)
> **CLI Commands:** make (4), unzip (1), find (1)
> **Definitions:** is called (2), stands for (1), in other words (1)
> **Cross-References:** go back to (1), in the next (1)
> **UI Navigation:** scroll up (1), go to (1)
> **Analogies:** kind of like (1), for example (1)
> **Prerequisites:** set up (2)

#### Naming conventions
> [LinkedIn Learning](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/naming-conventions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/naming-conventions?u=76281980&t=0)** - First I'm going to describe data set naming conventions because each time you make a new data set, you don't want to lose track of what you were doing.
>
> **[0:09](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/naming-conventions?u=76281980&t=9)** I will also describe how you should split up code files and I'll give you some naming conventions for your code.
>
> **[0:15](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/naming-conventions?u=76281980&t=15)** As I said, first we'll talk about data set naming conventions, I start each data set with a short character prefix like BRFSS.
>
> **[0:24](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/naming-conventions?u=76281980&t=24)** You don't want a long one or you'll go crazy typing it.
>
> **[0:27](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/naming-conventions?u=76281980&t=27)** And you don't want one with numbers because that gets confusing, I make the first data set I read in have underscore a after it.
>
> **[0:36](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/naming-conventions?u=76281980&t=36)** And each time I remake the data set, I increment the letter so a to b, b to c and c to d.
>
> **[0:44](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/naming-conventions?u=76281980&t=44)** Why do I do that, well, well let's say you make a variable in c and later you use that variable to try make a new variable in d.
>
> **[0:53](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/naming-conventions?u=76281980&t=53)** And you realize that the c variable is messed up.
>
> **[0:56](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/naming-conventions?u=76281980&t=56)** I can roll back and try to figure this out.
>
> **[0:59](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/naming-conventions?u=76281980&t=59)** If the native variable that the variable c is based on is messed up in a then it means I read it in wrong.
>
> **[1:06](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/naming-conventions?u=76281980&t=66)** If it's only messed up in c and in d then it means I transformed it wrong.
>
> **[1:11](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/naming-conventions?u=76281980&t=71)** This allows me to go back to the right code, transform it right and then make sure all the data sets along the way have the fixed version of the variable in them.
>
> **[1:20](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/naming-conventions?u=76281980&t=80)** So it's basically a manual roll back feature.
>
> **[1:24](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/naming-conventions?u=76281980&t=84)** So I'm going to tell you my code naming conventions.
>
> **[1:27](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/naming-conventions?u=76281980&t=87)** Before I go into it, let me explain to you what you don't want to do.
>
> **[1:31](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/naming-conventions?u=76281980&t=91)** When you make an analytic data set, the process is that you read in a data set such as BRFSS_a then do some things to the data set and read it out as BRFSS_b.
>
> **[1:44](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/naming-conventions?u=76281980&t=104)** Then you use b to make c and so on.
>
> **[1:48](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/naming-conventions?u=76281980&t=108)** If you put all that code in one long file, you will drive yourself crazy, but people do that.
>
> **[1:54](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/naming-conventions?u=76281980&t=114)** Can you believe people do that?
>
> **[1:56](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/naming-conventions?u=76281980&t=116)** But why do they do that, well think about it, if you need b to make c and you need c to make d, all the code as to be run in order and the one long code file approach is one way to force that to happen.
>
> **[2:09](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/naming-conventions?u=76281980&t=129)** And if you were doing analysis on a data set, you want to make sure you are using the final edited version.
>
> **[2:15](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/naming-conventions?u=76281980&t=135)** This means all your analytic code has to come after the last data transformation or editing code.
>
> **[2:22](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/naming-conventions?u=76281980&t=142)** Again, others will just add to this already long code file to accomplish keeping things in order.
>
> **[2:28](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/naming-conventions?u=76281980&t=148)** The long code file becomes a problem.
>
> **[2:32](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/naming-conventions?u=76281980&t=152)** First the code gets to be spaghetti because you need to test things or redo things.
>
> **[2:38](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/naming-conventions?u=76281980&t=158)** It's data after all, it doesn't always cooperate.
>
> **[2:41](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/naming-conventions?u=76281980&t=161)** With one long code file, the whole thing becomes a mess even for the person who developed it.
>
> **[2:47](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/naming-conventions?u=76281980&t=167)** Trouble shooting becomes a nightmare trust me.
>
> **[2:49](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/naming-conventions?u=76281980&t=169)** And importantly, you really can't share code that way, you can't be in Dropbox making some code while somebody else is making some other code.
>
> **[2:58](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/naming-conventions?u=76281980&t=178)** That's because it's one big code file.
>
> **[3:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/naming-conventions?u=76281980&t=180)** So while I appreciate the limitations, I strongly recommend you find my alternative approach if you don't want to make yourself crazy.
>
> **[3:07](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/naming-conventions?u=76281980&t=187)** Instead of one long code file, let's make little bit sized files.
>
> **[3:13](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/naming-conventions?u=76281980&t=193)** In each file we just do one little thing like reading in data or removing some rows or adding some fields or running a few analyses.
>
> **[3:22](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/naming-conventions?u=76281980&t=202)** Just little bite size code, that way it's easier to find and edit later if we want to change it.
>
> **[3:27](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/naming-conventions?u=76281980&t=207)** And of course it's nice to have a numbering system for this.
>
> **[3:30](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/naming-conventions?u=76281980&t=210)** And if we put the numbers at the beginning of the file name you can get the files to sort in order.
>
> **[3:35](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/naming-conventions?u=76281980&t=215)** So how I keep everything in order is with this numbering system.
>
> **[3:39](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/naming-conventions?u=76281980&t=219)** And then after I put the three digit number.
>
> **[3:41](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/naming-conventions?u=76281980&t=221)** After I put the three digit number, I put an underscore with some notes about what the code does.
>
> **[3:45](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/naming-conventions?u=76281980&t=225)** This way, it's really easy to find the code you are looking for if you want to modify a particular function.
>
> **[3:51](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/naming-conventions?u=76281980&t=231)** You'll see that I put preprocessing code under the zeros.
>
> **[3:54](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/naming-conventions?u=76281980&t=234)** Reading and editing data under the hundreds.
>
> **[3:57](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/naming-conventions?u=76281980&t=237)** Main analysis under the 200s and then post hoc or unplanned analyses under the 600s.
>
> **[4:04](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/naming-conventions?u=76281980&t=244)** And also exploratory code like I'm looking at a variable thinking about if I want to use it under the 700s.
>
> **[4:11](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/naming-conventions?u=76281980&t=251)** Even if your exploration turns up that you shouldn't use the variable, you should always save your code just in case you forget you explored this already and someone asks you later.
>
> **[4:20](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/naming-conventions?u=76281980&t=260)** And then you can just look under the 700s and see if you looked into it yet or not.
>
> **[4:24](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/naming-conventions?u=76281980&t=264)** Again, comments are you friend.
>
> **[4:27](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/naming-conventions?u=76281980&t=267)** As they are a little message in a bottle to the future you who is looking at this code going what was I doing and why was I doing that, I don't even remember writing this code.
>
> **[4:37](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/naming-conventions?u=76281980&t=277)** Yes, that will happen to you so you want to be neat about saving all the stuff so you can remember what you did.
>
> **[4:43](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/naming-conventions?u=76281980&t=283)** You'll see me demonstrate this naming convention throughout the course.
>
> **[4:47](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/naming-conventions?u=76281980&t=287)** So this movie taught you about naming conventions for data sets by incrementing the suffix letter you can always figure out the order of the data sets and rollback to a previous version if there's a problem.
>
> **[4:58](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/naming-conventions?u=76281980&t=298)** I also taught you how to split your code by function.
>
> **[5:01](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/naming-conventions?u=76281980&t=301)** And name that code in such a way that it comes in order of how you need to run it.
>
> **[5:05](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/naming-conventions?u=76281980&t=305)** This allows you easily do surgery on your code.
>
> **[5:08](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/naming-conventions?u=76281980&t=308)** In other words, locate the problem code right away and amend it.
>
> **[5:12](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/naming-conventions?u=76281980&t=312)** Also using the number of prefixes, you can sneak in a code file in between other code files if extra code is needed to handle a function you didn't think of before.
>
> **[5:21](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/naming-conventions?u=76281980&t=321)** I think of code as scenes from a movie, they are all separate and distinct.
>
> **[5:26](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/naming-conventions?u=76281980&t=326)** But if you don't put them in order, you have no movie.
>
> **[5:29](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/naming-conventions?u=76281980&t=329)** So these code naming conventions always allow you to run the movie from beginning to end in the right order so the code, like the movie, always makes sense.

> [!info]- Semantic Content
>
> **CLI Commands:** make (12), find (3)
> **Code Keywords:** let (3), function (3), this. (1)
> **Env Vars:** brfss (1)
> **Cross-References:** go back to (1)
> **Definitions:** in other words (1)
> **Analogies:** such as (1)
> **Speakers:** - first (1)

#### Keeping native variables
> [LinkedIn Learning](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/keeping-native-variables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/keeping-native-variables?u=76281980&t=0)** - [Instructor] This lecture is about keeping the native variables we need after reading in the data set.
>
> **[0:05](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/keeping-native-variables?u=76281980&t=5)** So let me remind you where we've gone up to now in this chapter.
>
> **[0:09](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/keeping-native-variables?u=76281980&t=9)** First, I talked about what packages there were, and we loaded the foreign package together.
>
> **[0:14](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/keeping-native-variables?u=76281980&t=14)** Then we made some code using the foreign package, and downloaded the BRFSS data set, in the .xpt format, and read it in.
>
> **[0:23](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/keeping-native-variables?u=76281980&t=23)** After that, I explained to you about naming conventions for data set and code.
>
> **[0:28](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/keeping-native-variables?u=76281980&t=28)** Now, in this movie, we'll go back to the code we made to read in the data set, and we'll save it according to our naming conventions.
>
> **[0:35](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/keeping-native-variables?u=76281980&t=35)** And, we will use our data dictionary as a guide to just keep the native variables we need from the large BRFSS data set.
>
> **[0:44](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/keeping-native-variables?u=76281980&t=44)** We made some code to call up the foreign library, and read in the data.
>
> **[0:48](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/keeping-native-variables?u=76281980&t=48)** Okay, now that we learned about naming conventions in section three, let's name this code.
>
> **[0:53](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/keeping-native-variables?u=76281980&t=53)** I like to name my code starting with three integers so it sorts in order of how you run it, like I said.
>
> **[0:59](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/keeping-native-variables?u=76281980&t=59)** I like my editing data code to start with one, so they are all in the hundreds series.
>
> **[1:04](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/keeping-native-variables?u=76281980&t=64)** So let's name this one 100_read in BRFSS XPT.
>
> **[1:12](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/keeping-native-variables?u=76281980&t=72)** So let's go up to File, Save As, and then go to our code folder, and name it 100_read in BRFSS XPT.
>
> **[1:27](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/keeping-native-variables?u=76281980&t=87)** Now, let's open a new set of code I already made that takes BRFSS_a and turns it into BRFSS_b, which will have only the native variables we want in it.
>
> **[1:42](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/keeping-native-variables?u=76281980&t=102)** Okay, here, I already told you we are going to make BRFSS_b, but what are we going to put in BRFSS_b?
>
> **[1:51](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/keeping-native-variables?u=76281980&t=111)** We know we are only going to put the native variables, but how do we do that?
>
> **[1:56](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/keeping-native-variables?u=76281980&t=116)** We are going to leverage one of R's other objects besides data frames to help us do that.
>
> **[2:01](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/keeping-native-variables?u=76281980&t=121)** We are going to create a list.
>
> **[2:04](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/keeping-native-variables?u=76281980&t=124)** So let's name our list BRFSSVarList.
>
> **[2:07](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/keeping-native-variables?u=76281980&t=127)** If we get cold feet later in our analysis, and we want to add or change out some of these variables, this is where we'll do it, we'll edit the VarList.
>
> **[2:16](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/keeping-native-variables?u=76281980&t=136)** Okay, so I write BRFSSVarList, and then my arrow, because that's what we are making.
>
> **[2:23](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/keeping-native-variables?u=76281980&t=143)** But then, how do I tell what goes in it?
>
> **[2:25](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/keeping-native-variables?u=76281980&t=145)** You will learn that, in R, when you refer to character strings, you want to start with a c and an open parenthesis, and then put the character strings in quotes between the parentheses.
>
> **[2:36](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/keeping-native-variables?u=76281980&t=156)** The trick to making this particular list work is that we need to make sure not to misspell any of our native variables.
>
> **[2:43](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/keeping-native-variables?u=76281980&t=163)** How do we do that?
>
> **[2:45](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/keeping-native-variables?u=76281980&t=165)** Let's refer to our data dictionary.
>
> **[2:47](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/keeping-native-variables?u=76281980&t=167)** See how I kept these native variables in blue?
>
> **[2:50](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/keeping-native-variables?u=76281980&t=170)** These are the ones we want to put in the list.
>
> **[2:53](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/keeping-native-variables?u=76281980&t=173)** See how I structured the code with one variable on each line?
>
> **[2:57](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/keeping-native-variables?u=76281980&t=177)** This will make it easy to troubleshoot later, if I grabbed the wrong one, or I want to grab some more later.
>
> **[3:03](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/keeping-native-variables?u=76281980&t=183)** Okay, now when we run this, we create the BRFSSVarList object.
>
> **[3:09](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/keeping-native-variables?u=76281980&t=189)** Let's do that by highlighting it, and putting Ctrl+R.
>
> **[3:14](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/keeping-native-variables?u=76281980&t=194)** But then how do we use that to subset our data to just those variables?
>
> **[3:19](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/keeping-native-variables?u=76281980&t=199)** Pretty easy.
>
> **[3:20](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/keeping-native-variables?u=76281980&t=200)** Now we are going to increment to BRFSS_b, do our arrow, and then say that we will use BRFSS_a, but only keep the VarList we just created.
>
> **[3:32](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/keeping-native-variables?u=76281980&t=212)** Now let's run that, and run a colnames on BRFSS_b, just to make sure we got the right columns.
>
> **[3:41](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/keeping-native-variables?u=76281980&t=221)** Great, it looks like everything came in okay.
>
> **[3:43](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/keeping-native-variables?u=76281980&t=223)** One quick final check: let's look at our codebook to see how many rows should have been read in.
>
> **[3:49](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/keeping-native-variables?u=76281980&t=229)** Everyone in the data set has an interview date, so let's look at the codebook doco for IDATE on page four.
>
> **[3:58](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/keeping-native-variables?u=76281980&t=238)** I'll do Ctrl+F and look for it that way.
>
> **[4:01](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/keeping-native-variables?u=76281980&t=241)** Here's IDATE.
>
> **[4:02](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/keeping-native-variables?u=76281980&t=242)** See this total, 464,664?
>
> **[4:07](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/keeping-native-variables?u=76281980&t=247)** That's how many rows we should have read in.
>
> **[4:09](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/keeping-native-variables?u=76281980&t=249)** Let's see if that happened.
>
> **[4:11](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/keeping-native-variables?u=76281980&t=251)** We can check if BRFSS_b has the right number of rows by running the function nrow, so let's highlight our nrow function and do Ctrl+R.
>
> **[4:22](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/keeping-native-variables?u=76281980&t=262)** Look, we are in the clear!
>
> **[4:24](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/keeping-native-variables?u=76281980&t=264)** Okay, now we have our native variables read in.
>
> **[4:27](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/keeping-native-variables?u=76281980&t=267)** Awesome.
>
> **[4:29](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/keeping-native-variables?u=76281980&t=269)** You'll notice that I saved the snippet of code as 105_Keep vars.
>
> **[4:34](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/keeping-native-variables?u=76281980&t=274)** That way, it will come right after our read code at 100, and has some numbers in between if we later want to sneak some code in, and also has a label or text at the end, Keep vars, so we can remember what the snippet of code does.
>
> **[4:48](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/keeping-native-variables?u=76281980&t=288)** I saved this in our code folder separate from our data.
>
> **[4:52](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/keeping-native-variables?u=76281980&t=292)** Okay, we are getting off to a good start!
>
> **[4:55](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/keeping-native-variables?u=76281980&t=295)** Now we saved the code we used to read in our data set, and, guided by our data dictionary, kept the native variables we need to make the calculated variables in our data set.
>
> **[5:05](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/keeping-native-variables?u=76281980&t=305)** Now in our next sections, we will apply the inclusion and exclusion criteria so we can remove the rows right away that we are not going to use in our analysis.

> [!info]- Semantic Content
>
> **Code Keywords:** let (13), function (2), this, (1)
> **Env Vars:** brfss (4), xpt (2), idate (2)
> **CLI Commands:** make (5)
> **Cross-References:** go back to (1), later in (1)
> **UI Navigation:** go to (1)
> **Warnings:** troubleshoot (1)
> **Speakers:** - [instructor] (1)

#### Applying the first exclusion
> [LinkedIn Learning](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-first-exclusion?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-first-exclusion?u=76281980&t=0)** - [Instructor] In this movie first I'm going to tell you who I am going to exclude from the data set philosophically and how I decided that.
>
> **[0:09](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-first-exclusion?u=76281980&t=9)** Then I'm going to show you how to apply the first exclusion and document the results of that.
>
> **[0:15](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-first-exclusion?u=76281980&t=15)** So the goal of what we're going to do in this part of the chapter is to remove all the rows in our data set we don't need.
>
> **[0:22](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-first-exclusion?u=76281980&t=22)** We don't need anyone who is not a veteran because our sub-population is veterans.
>
> **[0:26](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-first-exclusion?u=76281980&t=26)** We also can't use anyone who doesn't have a valid measurement of the exposure, which is alcohol drinking, and the outcomes, which are sleep duration and asthma status.
>
> **[0:36](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-first-exclusion?u=76281980&t=36)** Now just to be clear, we are only keeping the yeses for veterans, but when it comes to exposure and outcome, we keep the yeses and the nos.
>
> **[0:45](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-first-exclusion?u=76281980&t=45)** We keep everything except unknowns, so our big exclusions should come first, kicking out all the non-veterans.
>
> **[0:53](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-first-exclusion?u=76281980&t=53)** But then we also need to kick out the veterans who don't tell us about their alcohol habits, their sleep habits, or their asthma status.
>
> **[1:01](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-first-exclusion?u=76281980&t=61)** Now some people like to get rid of records with unknowns in the confounders, such as BMI or health plan, remember those from the data dictionary?
>
> **[1:11](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-first-exclusion?u=76281980&t=71)** Personally, I do not do that.
>
> **[1:14](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-first-exclusion?u=76281980&t=74)** The reason is that I include them as nines in the grouping variable, and when we go on to our regression, which is the next course, I always make sure that they have a zero in the indicator variable fields so they just end up in the reference group.
>
> **[1:27](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-first-exclusion?u=76281980&t=87)** Because this is BRFSS and they are very good at getting complete data, this practice is not a problem, leaving these confounders in with unknowns.
>
> **[1:38](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-first-exclusion?u=76281980&t=98)** However, if it were not as high quality of a data set, let's imagine that race was not filled in 30% of the time, then it really wouldn't be fair to put all those people in unknown during a regression.
>
> **[1:51](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-first-exclusion?u=76281980&t=111)** So in that case, we'd want to rethink our plan, but because BRFSS tends to have very few people in unknown in just about every variable, I just leave records that have unknowns in the confounding variables, but we can't risk that with our sub-population exposure and outcome variables, so we have to kick out the unknowns in those cases.
>
> **[2:12](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-first-exclusion?u=76281980&t=132)** So here's what we are going to do for the rest of the chapter.
>
> **[2:16](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-first-exclusion?u=76281980&t=136)** In this section we are going to apply our first exclusion using R code.
>
> **[2:20](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-first-exclusion?u=76281980&t=140)** Next we are going to document what happens when we apply that exclusion to our data set.
>
> **[2:26](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-first-exclusion?u=76281980&t=146)** In subsequent sections of the chapter, we'll keep doing that until we get through all our exclusions, and when we're done, we'll make a diagram of it so people know how we arrived at the final number of rows in our data set.
>
> **[2:38](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-first-exclusion?u=76281980&t=158)** Let's do it.
>
> **[2:39](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-first-exclusion?u=76281980&t=159)** Okay, as you know, because we just did it, BRFSS_b has 464664 rows.
>
> **[2:48](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-first-exclusion?u=76281980&t=168)** We can remember this by running nrow now.
>
> **[2:51](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-first-exclusion?u=76281980&t=171)** Let's highlight then Control + R, and there it is in the console.
>
> **[2:56](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-first-exclusion?u=76281980&t=176)** But now let's apply the first big exclusion.
>
> **[3:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-first-exclusion?u=76281980&t=180)** You have to be a veteran to be in this analysis, because that's our sub-population.
>
> **[3:04](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-first-exclusion?u=76281980&t=184)** Let's refer to the data dictionary and let's look at the Veteran3 tab.
>
> **[3:09](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-first-exclusion?u=76281980&t=189)** Okay, this says we only want to keep the yeses, which are ones.
>
> **[3:13](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-first-exclusion?u=76281980&t=193)** Let's go apply that exclusion.
>
> **[3:15](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-first-exclusion?u=76281980&t=195)** Let's unpack the code I made just for this purpose.
>
> **[3:19](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-first-exclusion?u=76281980&t=199)** We are going to make BRFSS_c out of BRFSS_b, but BRFSS_c is going to be only veterans.
>
> **[3:31](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-first-exclusion?u=76281980&t=211)** Saying it another way, we want to only have rows where VETERAN3 equals one.
>
> **[3:36](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-first-exclusion?u=76281980&t=216)** We will use the subset command.
>
> **[3:39](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-first-exclusion?u=76281980&t=219)** The first argument is the data set, which is BRFSS_b, and then the condition.
>
> **[3:45](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-first-exclusion?u=76281980&t=225)** We want VETERAN3 to equal equal one.
>
> **[3:48](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-first-exclusion?u=76281980&t=228)** No ifs ands or buts about it.
>
> **[3:51](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-first-exclusion?u=76281980&t=231)** So let's highlight that code and run it with Control + R.
>
> **[3:55](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-first-exclusion?u=76281980&t=235)** Our console says that it ran without errors, but let's quickly look at the VETERAN3 variable and just see that all of them look like ones.
>
> **[4:05](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-first-exclusion?u=76281980&t=245)** You see I did that here by typing the table name, then the dollar sign, then field name.
>
> **[4:11](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-first-exclusion?u=76281980&t=251)** So that is the syntax to specify a field in R using its name, table name, dollar sign, then field name.
>
> **[4:19](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-first-exclusion?u=76281980&t=259)** Let's highlight and run it and look at it.
>
> **[4:21](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-first-exclusion?u=76281980&t=261)** In the console we see the output and the values look exactly like what we would expect, all ones.
>
> **[4:27](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-first-exclusion?u=76281980&t=267)** Now let's go back to our code and look at the number of rows in our new data set.
>
> **[4:33](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-first-exclusion?u=76281980&t=273)** I will highlight this nrow command I already wrote, and let's do Control + R to run that.
>
> **[4:39](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-first-exclusion?u=76281980&t=279)** See?
>
> **[4:40](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-first-exclusion?u=76281980&t=280)** We are down now from about 450,000 rows to about 65,000 rows, that's how many veterans we have in the 2014 BRFSS.
>
> **[4:50](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-first-exclusion?u=76281980&t=290)** But we better keep track of this in Excel, but before we go there, I just want to show you I saved this code as 110_Applyexclusions.
>
> **[4:59](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-first-exclusion?u=76281980&t=299)** All right, let's go over to Excel.
>
> **[5:01](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-first-exclusion?u=76281980&t=301)** I'd like to set up the spreadsheet to keep track of my reductions.
>
> **[5:04](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-first-exclusion?u=76281980&t=304)** You'll notice that each row reflects the results of an executed exclusion.
>
> **[5:09](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-first-exclusion?u=76281980&t=309)** See the first row, I start with all the records then I explain the exclusion.
>
> **[5:14](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-first-exclusion?u=76281980&t=314)** Now when we do nrow on the new data set, we get this number of veterans left, which is way over here, 62120, so I use Excel to calculate how many we remove.
>
> **[5:26](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-first-exclusion?u=76281980&t=326)** See the subtraction formula in the Formula Bar?
>
> **[5:30](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-first-exclusion?u=76281980&t=330)** I'm keeping these numbers on the spreadsheet because we'll need them later for our data reduction diagram, so here's the veterans exclusion, and in subsequent movies we will use R to handle and document the other exclusions.
>
> **[5:44](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-first-exclusion?u=76281980&t=344)** So look at what we did, we just applied our first exclusion to the data set to keep our sub-population of veterans.
>
> **[5:50](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-first-exclusion?u=76281980&t=350)** We kicked out everyone who was not a veteran and we documented how many people left and how many people stayed.
>
> **[5:57](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-first-exclusion?u=76281980&t=357)** In the next section we'll continue to apply and document exclusions until we are done with all of 'em.

> [!info]- Semantic Content
>
> **Code Keywords:** let (14), case, (1), continue (1)
> **Env Vars:** brfss (3), veteran3 (3), bmi (1)
> **CLI Commands:** make (3)
> **Cross-References:** go back to (1), in the next (1)
> **Analogies:** such as (1), imagine (1)
> **Best Practices:** always make sure (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Applying the rest of the exclusions
> [LinkedIn Learning](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-rest-of-the-exclusions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-rest-of-the-exclusions?u=76281980&t=0)** - [Instructor] So let's review who we are removing.
>
> **[0:03](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-rest-of-the-exclusions?u=76281980&t=3)** In our last section we removed everyone who was not in our subpopulation, meaning everyone who was not a veteran, done.
>
> **[0:10](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-rest-of-the-exclusions?u=76281980&t=10)** But now in this section we need to remove everyone who does not have a valid value for the exposure or the outcomes we selected.
>
> **[0:18](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-rest-of-the-exclusions?u=76281980&t=18)** So literally, what we are going to do is remove every survey where there is not a valid alcohol drinking variable.
>
> **[0:25](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-rest-of-the-exclusions?u=76281980&t=25)** That's the exposure.
>
> **[0:27](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-rest-of-the-exclusions?u=76281980&t=27)** And then, for the two outcomes we are looking at, sleep duration and asthma status we have to remove records without valid values for those too.
>
> **[0:36](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-rest-of-the-exclusions?u=76281980&t=36)** Each time we remove these rows we need to document them in our data reduction spreadsheet so we don't forget those numbers.
>
> **[0:42](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-rest-of-the-exclusions?u=76281980&t=42)** So I'll show you that.
>
> **[0:44](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-rest-of-the-exclusions?u=76281980&t=44)** Finally, I'll review the code we used.
>
> **[0:47](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-rest-of-the-exclusions?u=76281980&t=47)** Let's start by removing people who do not have a valid value for our exposure, which is drinking alcohol.
>
> **[0:53](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-rest-of-the-exclusions?u=76281980&t=53)** Let's look in our data dictionary to see who we want to remove from the data set.
>
> **[0:58](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-rest-of-the-exclusions?u=76281980&t=58)** So here is the ALCDAY5 tab and let's review what we want to keep and what we want to get rid of.
>
> **[1:05](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-rest-of-the-exclusions?u=76281980&t=65)** Okay we are just looking for valid answers and it seems that anything in the hundreds and in the two hundreds is a valid answer.
>
> **[1:12](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-rest-of-the-exclusions?u=76281980&t=72)** In fact, anything below seven seven seven is a valid answer.
>
> **[1:17](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-rest-of-the-exclusions?u=76281980&t=77)** But wait, don't forget eight eight eight.
>
> **[1:19](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-rest-of-the-exclusions?u=76281980&t=79)** Those are our non-drinkers, that is a valid answer.
>
> **[1:23](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-rest-of-the-exclusions?u=76281980&t=83)** So let's go to our R code.
>
> **[1:25](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-rest-of-the-exclusions?u=76281980&t=85)** So basically we want to create BRFSS underscore D with just ALCDAY5 fields that are less than seven seven seven and also that equal eight eight eight.
>
> **[1:38](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-rest-of-the-exclusions?u=76281980&t=98)** See the pipe, that pipe, is an or.
>
> **[1:41](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-rest-of-the-exclusions?u=76281980&t=101)** Let's run this, highlight and Control + R.
>
> **[1:45](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-rest-of-the-exclusions?u=76281980&t=105)** Okay, let's look at this field the way we looked at the veteran field last time.
>
> **[1:49](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-rest-of-the-exclusions?u=76281980&t=109)** This is just the field name here.
>
> **[1:51](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-rest-of-the-exclusions?u=76281980&t=111)** Table, dollar sign, field.
>
> **[1:54](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-rest-of-the-exclusions?u=76281980&t=114)** We'll highlight and run that to take a look see at what's in it.
>
> **[1:58](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-rest-of-the-exclusions?u=76281980&t=118)** The field looks good, it's got the qualifying numbers in it.
>
> **[2:01](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-rest-of-the-exclusions?u=76281980&t=121)** Now let's update our data reduction spreadsheet.
>
> **[2:04](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-rest-of-the-exclusions?u=76281980&t=124)** First we'll count the rows by running nrow on BRSSF underscore D and then we'll put the results in our spreadsheet.
>
> **[2:13](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-rest-of-the-exclusions?u=76281980&t=133)** So let's highlight and Control + R.
>
> **[2:16](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-rest-of-the-exclusions?u=76281980&t=136)** See here it went down a little.
>
> **[2:19](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-rest-of-the-exclusions?u=76281980&t=139)** It was about 62 thousand and now it's closer to 59 thousand.
>
> **[2:24](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-rest-of-the-exclusions?u=76281980&t=144)** Let's go back to our data reduction spreadsheet and document that.
>
> **[2:27](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-rest-of-the-exclusions?u=76281980&t=147)** Notice how this first cell in the row refers to the last column in the last row.
>
> **[2:32](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-rest-of-the-exclusions?u=76281980&t=152)** So they are the same number.
>
> **[2:35](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-rest-of-the-exclusions?u=76281980&t=155)** You can see that in the formula bar.
>
> **[2:37](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-rest-of-the-exclusions?u=76281980&t=157)** You can also see that I describe the exclusion.
>
> **[2:40](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-rest-of-the-exclusions?u=76281980&t=160)** No alcohol consumption information.
>
> **[2:42](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-rest-of-the-exclusions?u=76281980&t=162)** Then I skipped Number Removed but you can see that I entered Number Left, what we got from nrow.
>
> **[2:49](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-rest-of-the-exclusions?u=76281980&t=169)** And as I did last time I used a subtraction function to have excel fill in the Number Removed.
>
> **[2:55](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-rest-of-the-exclusions?u=76281980&t=175)** Okay, so what's our next exclusion, our outcomes?
>
> **[2:58](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-rest-of-the-exclusions?u=76281980&t=178)** We need to exclude everyone without a valid sleep time variable and everyone without a valid asthma variable.
>
> **[3:04](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-rest-of-the-exclusions?u=76281980&t=184)** Let's review our data dictionary.
>
> **[3:07](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-rest-of-the-exclusions?u=76281980&t=187)** According to this, as long as sleep time is below 77 we can keep it, let's take a note of that.
>
> **[3:14](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-rest-of-the-exclusions?u=76281980&t=194)** Also, let's take a look at our asthma variable while we're over here.
>
> **[3:18](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-rest-of-the-exclusions?u=76281980&t=198)** We see a similar situation with asthma.
>
> **[3:20](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-rest-of-the-exclusions?u=76281980&t=200)** If we keep everyone with less than a seven, we're good.
>
> **[3:24](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-rest-of-the-exclusions?u=76281980&t=204)** Let's hold that thought too.
>
> **[3:26](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-rest-of-the-exclusions?u=76281980&t=206)** Okay, now you can see the code for both variables.
>
> **[3:29](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-rest-of-the-exclusions?u=76281980&t=209)** Let's run it and update the exclusion spreadsheet for both of these.
>
> **[3:33](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-rest-of-the-exclusions?u=76281980&t=213)** We'll start by running the subset code for sleep time and make BRFSS underscore E and count those rows.
>
> **[3:41](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-rest-of-the-exclusions?u=76281980&t=221)** Let's highlight and Control + R.
>
> **[3:45](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-rest-of-the-exclusions?u=76281980&t=225)** Five eight three two one.
>
> **[3:47](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-rest-of-the-exclusions?u=76281980&t=227)** Alright, remember that number.
>
> **[3:49](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-rest-of-the-exclusions?u=76281980&t=229)** Now we are going to run our subset code on BRFSS underscore E to keep only the records with valid asthma answers.
>
> **[3:57](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-rest-of-the-exclusions?u=76281980&t=237)** Here's that code, highlight Control + R and now we'll run the nrow code.
>
> **[4:03](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-rest-of-the-exclusions?u=76281980&t=243)** And now we have five eight one three one.
>
> **[4:06](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-rest-of-the-exclusions?u=76281980&t=246)** Remember that number too and let's go put it on our spreadsheet.
>
> **[4:10](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-rest-of-the-exclusions?u=76281980&t=250)** So here you can see it.
>
> **[4:11](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-rest-of-the-exclusions?u=76281980&t=251)** I've put both those in and used subtraction to figure out number removed each time.
>
> **[4:17](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-rest-of-the-exclusions?u=76281980&t=257)** Congratulations, you cleaned all the rows out of your data set that you don't need for the analysis.
>
> **[4:22](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-rest-of-the-exclusions?u=76281980&t=262)** And the magic number is five eight one three one.
>
> **[4:26](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-rest-of-the-exclusions?u=76281980&t=266)** That's how many records are in your analytic data set.
>
> **[4:29](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-rest-of-the-exclusions?u=76281980&t=269)** So we accomplished our feat.
>
> **[4:32](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-rest-of-the-exclusions?u=76281980&t=272)** We kicked out everyone from our data set who did not qualify.
>
> **[4:35](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-rest-of-the-exclusions?u=76281980&t=275)** Not only that, we kept up a spreadsheet that documented the numbers who left and the numbers who stayed.
>
> **[4:41](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-rest-of-the-exclusions?u=76281980&t=281)** If some of that code flew past you pretty fast, don't worry.
>
> **[4:46](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-rest-of-the-exclusions?u=76281980&t=286)** In the next section we'll review some of the operations we used in executing these exclusions.
>
> **[4:51](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/applying-the-rest-of-the-exclusions?u=76281980&t=291)** And I'll also introduce you to some operations you might need to execute exclusions in other projects.

> [!info]- Semantic Content
>
> **Code Keywords:** let (17), this, (2), finally, (1), function (1)
> **Env Vars:** brfss (3), alcday5 (2), brssf (1)
> **Definitions:** is a  (3), is an  (1), refers to (1)
> **Cross-References:** go back to (1), in the last (1), in the next (1)
> **Best Practices:** don't forget (2)
> **CLI Commands:** make (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### Operations in code
> [LinkedIn Learning](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/operations-in-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/operations-in-code?u=76281980&t=0)** - [Instructor] So far we've gotten our feet a little wet with a few operations.
>
> **[0:04](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/operations-in-code?u=76281980&t=4)** I showed you equals equals, which means, of course, equals.
>
> **[0:09](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/operations-in-code?u=76281980&t=9)** I showed you less than.
>
> **[0:10](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/operations-in-code?u=76281980&t=10)** Remember when we subsetted by the alcohol variable?
>
> **[0:14](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/operations-in-code?u=76281980&t=14)** I also showed you the pipe, which is how you indicate or in your conditions if you want to say this or that.
>
> **[0:21](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/operations-in-code?u=76281980&t=21)** But in this movie, I'll go through some of the operations I haven't mentioned yet.
>
> **[0:26](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/operations-in-code?u=76281980&t=26)** I'll talk about using code to indicate missings in R.
>
> **[0:29](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/operations-in-code?u=76281980&t=29)** How to negate operations such as not equal.
>
> **[0:32](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/operations-in-code?u=76281980&t=32)** And how to say and in R language.
>
> **[0:35](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/operations-in-code?u=76281980&t=35)** Here on the slide are the ones we have used so far in the course.
>
> **[0:39](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/operations-in-code?u=76281980&t=39)** Notice the double equals for equals.
>
> **[0:41](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/operations-in-code?u=76281980&t=41)** Don't forget that.
>
> **[0:42](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/operations-in-code?u=76281980&t=42)** You'll understand why when I show you not equals on the next slide.
>
> **[0:46](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/operations-in-code?u=76281980&t=46)** The next is a less than example.
>
> **[0:48](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/operations-in-code?u=76281980&t=48)** And in the next one, see how we use this pipe as an or to say less than 777 or equal to 888.
>
> **[0:57](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/operations-in-code?u=76281980&t=57)** Here are a few other examples we didn't use.
>
> **[1:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/operations-in-code?u=76281980&t=60)** Often times you want a range of a continuous or ordinal variable.
>
> **[1:04](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/operations-in-code?u=76281980&t=64)** Remember our AGE variable in BRFSS is in groups.
>
> **[1:09](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/operations-in-code?u=76281980&t=69)** I looked it up, group two starts at age 25 and group five ends at age 64, so if you want the group 25 to 64, you need groups two through five.
>
> **[1:22](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/operations-in-code?u=76281980&t=82)** See how we use a greater than sign followed by an equal sign for the bottom limit and a less than followed by a equal sign for the upper limit.
>
> **[1:31](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/operations-in-code?u=76281980&t=91)** Also, notice we use the ampersand as the and operator.
>
> **[1:35](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/operations-in-code?u=76281980&t=95)** Now, if you want to talk about missings in R, you don't talk about a missing as a value.
>
> **[1:41](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/operations-in-code?u=76281980&t=101)** Any SASS users out there?
>
> **[1:43](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/operations-in-code?u=76281980&t=103)** We do it differently in R.
>
> **[1:45](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/operations-in-code?u=76281980&t=105)** In R, you talk about it as a state.
>
> **[1:48](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/operations-in-code?u=76281980&t=108)** In R, when there is a missing value, the letters n-a display.
>
> **[1:53](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/operations-in-code?u=76281980&t=113)** So you get used to seeing na all over your screen.
>
> **[1:56](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/operations-in-code?u=76281980&t=116)** R has a series of commands which are functions where you are asking about the variable's state.
>
> **[2:01](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/operations-in-code?u=76281980&t=121)** For example, if you want to know if a variable is numeric, you'll use the is.numeric function.
>
> **[2:07](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/operations-in-code?u=76281980&t=127)** Here, when we want to say equals missing, we don't.
>
> **[2:12](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/operations-in-code?u=76281980&t=132)** Instead we say is.na.
>
> **[2:15](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/operations-in-code?u=76281980&t=135)** So it's basically evaluating the BMI field.
>
> **[2:18](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/operations-in-code?u=76281980&t=138)** And if is.na equals true for that field, in other words for the rows that are na in that field, it's going to copy them over.
>
> **[2:28](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/operations-in-code?u=76281980&t=148)** But actually, in real life, you usually want to use the rows if they are not na.
>
> **[2:34](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/operations-in-code?u=76281980&t=154)** See how we use this bang, this exclamation point before we use the is.na?
>
> **[2:40](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/operations-in-code?u=76281980&t=160)** That cancels it.
>
> **[2:42](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/operations-in-code?u=76281980&t=162)** Basically calls it, is not na.
>
> **[2:45](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/operations-in-code?u=76281980&t=165)** That's how the exclamation point works in R.
>
> **[2:48](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/operations-in-code?u=76281980&t=168)** So this would get you a data set where the BMI variable is not na, meaning it's all filled in.
>
> **[2:53](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/operations-in-code?u=76281980&t=173)** I'll show you another case where we use the bang to make something opposite.
>
> **[2:57](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/operations-in-code?u=76281980&t=177)** Remember how we use equals equals to indicate we want the criteria to equal something?
>
> **[3:02](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/operations-in-code?u=76281980&t=182)** Well, if you want it to not equal something, you put the exclamation point, instead of the first equals.
>
> **[3:09](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/operations-in-code?u=76281980&t=189)** That's why there are two.
>
> **[3:11](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/operations-in-code?u=76281980&t=191)** So you can unequal the first one, with a bang, if you want.
>
> **[3:15](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/operations-in-code?u=76281980&t=195)** This code will get you everyone where VETERAN3 is not one and where SEX is not two.
>
> **[3:22](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/operations-in-code?u=76281980&t=202)** So in this movie, I took a little break from running code to remind you about operations we have already reviewed, equals, less than, and or.
>
> **[3:31](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/operations-in-code?u=76281980&t=211)** And to teach you about new ones we haven't reviewed.
>
> **[3:33](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/operations-in-code?u=76281980&t=213)** How we use N/As for missing and how the bang is used before operations to negate them.
>
> **[3:39](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/operations-in-code?u=76281980&t=219)** I also showed you how to use the ampersand character to indicate and.
>
> **[3:44](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/operations-in-code?u=76281980&t=224)** Alright, break's over.
>
> **[3:45](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/operations-in-code?u=76281980&t=225)** In the next movie, I'm going to show you something I've been talking about all throughout this chapter, making the data reduction diagram.

> [!info]- Semantic Content
>
> **Env Vars:** bmi (2), age (1), brfss (1), sass (1), veteran3 (1)
> **Definitions:** is a  (2), in other words (1)
> **Cross-References:** in the next (2)
> **Analogies:** such as (1), for example (1)
> **CLI Commands:** make (1)
> **Code Keywords:** function (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - [instructor] (1)

#### Making a data reduction diagram
> [LinkedIn Learning](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-data-reduction-diagram?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-data-reduction-diagram?u=76281980&t=0)** - [Instructor] In this section, you will have to use diagramming software.
>
> **[0:04](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-data-reduction-diagram?u=76281980&t=4)** Like I said before, I use online software called [Gliffy.com](https://Gliffy.com), and I'll show you how that turned out for me, then, referring to our data reduction spreadsheet, we'll walk through the diagram together.
>
> **[0:16](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-data-reduction-diagram?u=76281980&t=16)** There are a few reasons why you should make a data reduction diagram.
>
> **[0:21](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-data-reduction-diagram?u=76281980&t=21)** Often these are included in publications.
>
> **[0:24](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-data-reduction-diagram?u=76281980&t=24)** First, it helps you be clear to your readers about how you defined your subpopulation, that's the subject of your study.
>
> **[0:31](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-data-reduction-diagram?u=76281980&t=31)** Next, it allows the audience to evaluate selection bias.
>
> **[0:35](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-data-reduction-diagram?u=76281980&t=35)** Image that almost all of the alcohol drinking variables were invalid, and that the ones that were filled in, said the respondents drank very little alcohol.
>
> **[0:45](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-data-reduction-diagram?u=76281980&t=45)** That would suggest selection bias, or that people who drank a lot didn't report it, and so they selected themselves out of our criteria in a biased way.
>
> **[0:54](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-data-reduction-diagram?u=76281980&t=54)** Finally, having a clear diagram allows others to replicate defining your exact subpopulation in their future studies, if they want to build on your work.
>
> **[1:03](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-data-reduction-diagram?u=76281980&t=63)** After all, the BRFSS data set is available to everyone.
>
> **[1:07](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-data-reduction-diagram?u=76281980&t=67)** So, others might use your work to move science forward.
>
> **[1:11](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-data-reduction-diagram?u=76281980&t=71)** The diagram helps you be clear about it.
>
> **[1:13](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-data-reduction-diagram?u=76281980&t=73)** Okay, let's go to my diagram and take a look at what I did.
>
> **[1:17](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-data-reduction-diagram?u=76281980&t=77)** So, the deal with this diagram is that the boxes that go down in this vertical chain, are the data we keep, and the boxes to the right, are the data we throw out.
>
> **[1:27](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-data-reduction-diagram?u=76281980&t=87)** So, let's start in the upper left with our total data set.
>
> **[1:31](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-data-reduction-diagram?u=76281980&t=91)** Remember where we got this number?
>
> **[1:33](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-data-reduction-diagram?u=76281980&t=93)** Let's look again at our reduction spread sheet.
>
> **[1:36](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-data-reduction-diagram?u=76281980&t=96)** First, we started with 464,644 records, so that's where we got that number in that first box, and remember, our first big exclusion was not a veteran, and that removed 402,544 people from our data set, and luckily, we kept 62,120 veterans in our data set.
>
> **[1:56](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-data-reduction-diagram?u=76281980&t=116)** Let's go review our diagram.
>
> **[1:58](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-data-reduction-diagram?u=76281980&t=118)** We removed these 402,544 non-veterans, so this goes in the box to the right.
>
> **[2:05](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-data-reduction-diagram?u=76281980&t=125)** Then, below our original box, I put the veterans, the ones we kept, remember?
>
> **[2:10](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-data-reduction-diagram?u=76281980&t=130)** 62,120, so we are getting all the numbers in this diagram off of the spreadsheet.
>
> **[2:16](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-data-reduction-diagram?u=76281980&t=136)** See why I kept the spreadsheet?
>
> **[2:18](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-data-reduction-diagram?u=76281980&t=138)** I needed both the keep numbers, and the throw out numbers in order to make the diagram.
>
> **[2:23](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-data-reduction-diagram?u=76281980&t=143)** Let's look at the other exclusions.
>
> **[2:26](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-data-reduction-diagram?u=76281980&t=146)** Our next exclusion was no alcohol consumption information.
>
> **[2:30](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-data-reduction-diagram?u=76281980&t=150)** We lost about 3K in that exclusion, keeping about 59K.
>
> **[2:36](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-data-reduction-diagram?u=76281980&t=156)** Let's see where those numbers ended up on our diagram.
>
> **[2:40](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-data-reduction-diagram?u=76281980&t=160)** Here's the next box off to the right.
>
> **[2:42](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-data-reduction-diagram?u=76281980&t=162)** These are the people we are removing, these are the ones with no information about their alcohol consumption.
>
> **[2:47](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-data-reduction-diagram?u=76281980&t=167)** See the number?
>
> **[2:49](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-data-reduction-diagram?u=76281980&t=169)** And going down vertically, we have the number of people with information about alcohol consumption.
>
> **[2:54](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-data-reduction-diagram?u=76281980&t=174)** I did it for sleep time and asthma too.
>
> **[2:57](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-data-reduction-diagram?u=76281980&t=177)** Here is where I have the numbers for no information on sleep duration, those were 670, and the ones with no information on asthma, those were 190, and in the end, we have 58,131 records that are valid.
>
> **[3:13](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-data-reduction-diagram?u=76281980&t=193)** Back to the diagram.
>
> **[3:14](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-data-reduction-diagram?u=76281980&t=194)** So, here's the end, the final box, 58,131 is our data set, it's our end, done with the exclusions, the spreadsheet, and the diagram.
>
> **[3:26](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-data-reduction-diagram?u=76281980&t=206)** Good job, you made it through applying exclusions.
>
> **[3:29](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-data-reduction-diagram?u=76281980&t=209)** We applied them, kept track on a spreadsheet, and then I showed you the data reduction diagram I made.
>
> **[3:35](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-data-reduction-diagram?u=76281980&t=215)** We can use this diagram now in our final paper.
>
> **[3:38](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-data-reduction-diagram?u=76281980&t=218)** Either a manuscript, or a thesis, or whatever you're doing.
>
> **[3:41](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-data-reduction-diagram?u=76281980&t=221)** It's really important to report numbers like this, either in the figure, or in the text, so readers can see who and how many you removed.
>
> **[3:49](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-data-reduction-diagram?u=76281980&t=229)** You'll notice there weren't a lot of people with missing values for our exposure, or our outcome.
>
> **[3:55](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-data-reduction-diagram?u=76281980&t=235)** If there were, a lot of readers might say we have selection bias, or specifically with our veterans, healthy warrior bias, or other bias' that creep epidemiologic data analysis, and make the answers look rosier then they should be, or worse then they should be.
>
> **[4:12](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-data-reduction-diagram?u=76281980&t=252)** If someone thought we had selection bias, we could fight back and say that even if it is biased, it's still a good analysis, but by putting the numbers right out there, we can let the skeptics have the information so they can assess the bias level themselves.
>
> **[4:27](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-data-reduction-diagram?u=76281980&t=267)** Now we are really programming in R, isn't it fun?
>
> **[4:31](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-data-reduction-diagram?u=76281980&t=271)** In the next section, we get to start generating variables.
>
> **[4:33](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-data-reduction-diagram?u=76281980&t=273)** Let's go take a look.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), throw (2), finally, (1), this, (1)
> **CLI Commands:** make (3)
> **URLs:** [gliffy.com](https://gliffy.com) (1)
> **Env Vars:** brfss (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### Generating exposure
> [LinkedIn Learning](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-exposure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-exposure?u=76281980&t=0)** - [Instructor] I will show you how to generate the exposure variables we will be using in this analysis.
>
> **[0:06](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-exposure?u=76281980&t=6)** First, we will go to our exposure, alcohol.
>
> **[0:10](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-exposure?u=76281980&t=10)** We'll start by generating the grouping variable, and then we will continue by generating the indicator variables.
>
> **[0:16](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-exposure?u=76281980&t=16)** One for drink monthly and one for drink weekly.
>
> **[0:20](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-exposure?u=76281980&t=20)** If you open the data dictionary, you will see that these are the names of the calculated variables we are preparing.
>
> **[0:26](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-exposure?u=76281980&t=26)** I'll show them to you in the data dictionary, but I'll summarize them here.
>
> **[0:31](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-exposure?u=76281980&t=31)** We are making a grouping variable for alcohol, and indicator variables for drinking monthly and drinking weekly. Next, we are cleaning up the sleep time variable by removing rows coded as 77 or 99.
>
> **[0:44](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-exposure?u=76281980&t=44)** Now this is just an academic exercise in this data set, since we already excluded them.
>
> **[0:50](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-exposure?u=76281980&t=50)** But I just wanted to show you how to do it.
>
> **[0:52](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-exposure?u=76281980&t=52)** Finally, we make a binary asthma variable.
>
> **[0:55](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-exposure?u=76281980&t=55)** But again, we excluded all the unknowns so this is just a demonstration.
>
> **[1:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-exposure?u=76281980&t=60)** Okay, now let's go to our data dictionary and look at the alcohol variable.
>
> **[1:05](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-exposure?u=76281980&t=65)** On the ALCDAY5 tab, we see that if ALCDAY5 falls in this range, 101 to 199, our ALCGRP variable should be coded as three, drink weekly.
>
> **[1:17](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-exposure?u=76281980&t=77)** And those in the 201 to 299 range get a two for drink monthly. And the 888's get a one for no drinks.
>
> **[1:27](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-exposure?u=76281980&t=87)** And the rest are nine, for unknown.
>
> **[1:29](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-exposure?u=76281980&t=89)** Then also, look at how we planned our drink monthly and drink weekly indicator variables.
>
> **[1:35](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-exposure?u=76281980&t=95)** If ALCGRP is two, the drink monthly flag will be one and everyone else gets a zero.
>
> **[1:42](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-exposure?u=76281980&t=102)** If ALCGRP is three, the drink weekly flag will be one and everyone else gets a zero.
>
> **[1:49](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-exposure?u=76281980&t=109)** So the strategy is that we generate ALCGRP first, check the variable to make sure we can trust it, and then use that variable to generate the indicator variables.
>
> **[2:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-exposure?u=76281980&t=120)** Here's our code for this. See how I start by copying the data set from G to F?
>
> **[2:05](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-exposure?u=76281980&t=125)** And then I create ALCGRP by putting a nine in it.
>
> **[2:08](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-exposure?u=76281980&t=128)** Now see here how I apply the criteria to update the variables in brackets.
>
> **[2:13](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-exposure?u=76281980&t=133)** The criteria are on the left side of the arrow, in brackets.
>
> **[2:17](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-exposure?u=76281980&t=137)** And what we fill in, if it meets those criteria, is on the right side.
>
> **[2:21](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-exposure?u=76281980&t=141)** So remember how 101 to 199 was a three?
>
> **[2:26](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-exposure?u=76281980&t=146)** That's the first statement. And then, we use the ampersand to put the two criteria for the 201 to 299 span.
>
> **[2:34](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-exposure?u=76281980&t=154)** I just used 777 as the boundary, as it was the next one up.
>
> **[2:39](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-exposure?u=76281980&t=159)** Finally, we update our teetotalers with a one, if they have an 888.
>
> **[2:44](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-exposure?u=76281980&t=164)** Let's highlight and run all this.
>
> **[2:49](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-exposure?u=76281980&t=169)** Next, I always check my variable with a table command.
>
> **[2:52](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-exposure?u=76281980&t=172)** See how I put table, and then the grouping variable, and the original variable.
>
> **[2:58](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-exposure?u=76281980&t=178)** Let's run this and see how it looks.
>
> **[3:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-exposure?u=76281980&t=180)** Highlight, Ctrl + R.
>
> **[3:03](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-exposure?u=76281980&t=183)** Here's our table in the console.
>
> **[3:05](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-exposure?u=76281980&t=185)** See how on the Y axis we see three levels.
>
> **[3:08](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-exposure?u=76281980&t=188)** We have no nines because we removed all the people with unknown alcohol status. Remember?
>
> **[3:14](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-exposure?u=76281980&t=194)** But see how the 100's people are coded as three?
>
> **[3:18](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-exposure?u=76281980&t=198)** And the 200's people are coded as two?
>
> **[3:21](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-exposure?u=76281980&t=201)** And here are about 26,000 teetotalers coded as one.
>
> **[3:27](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-exposure?u=76281980&t=207)** Now let's go do the indicator variables.
>
> **[3:30](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-exposure?u=76281980&t=210)** Just like before, we start by making drink monthly and we make that entirely zero.
>
> **[3:35](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-exposure?u=76281980&t=215)** Then, we add criteria using our grouping variable.
>
> **[3:38](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-exposure?u=76281980&t=218)** If ALCGRP is two, then this is a one, for these people drink monthly.
>
> **[3:43](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-exposure?u=76281980&t=223)** And below, we see I did the same thing for drink weekly.
>
> **[3:47](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-exposure?u=76281980&t=227)** If ALCGRP is one, then they get a one for drink weekly.
>
> **[3:51](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-exposure?u=76281980&t=231)** And then here are the table commands to check.
>
> **[3:54](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-exposure?u=76281980&t=234)** Let's run this chunk of code. Highlight, Ctrl + R.
>
> **[3:59](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-exposure?u=76281980&t=239)** Looks like we didn't make any mistakes.
>
> **[4:01](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-exposure?u=76281980&t=241)** See the patterns in the tables?
>
> **[4:03](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-exposure?u=76281980&t=243)** The indicator variable is one, where the grouping variable is coded with the correct level.
>
> **[4:08](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-exposure?u=76281980&t=248)** Here is drink monthly and here is drink weekly.
>
> **[4:12](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-exposure?u=76281980&t=252)** Good, this code file is done.
>
> **[4:14](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-exposure?u=76281980&t=254)** Notice how I named it 115_MakeAlcoholvariables.
>
> **[4:19](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-exposure?u=76281980&t=259)** Very create name, don't you think?
>
> **[4:22](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-exposure?u=76281980&t=262)** We generated our exposure variables.
>
> **[4:25](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-exposure?u=76281980&t=265)** First, we made a grouping variable for alcohol and we tested it with a table command to make sure we didn't make a mistake and we could really trust it.
>
> **[4:33](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-exposure?u=76281980&t=273)** Then we used the grouping variable to make indicator variables for the different alcohol levels, and checked those with a table command as well. Next up, we'll move on to generating our outcome variables.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), finally, (2), this. (2), continue (1)
> **Env Vars:** alcgrp (7), alcday5 (2)
> **CLI Commands:** make (7)
> **UI Navigation:** go to (2), open the (1)
> **Definitions:** is a  (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### Generating outcome variables
> [LinkedIn Learning](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-outcome-variables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-outcome-variables?u=76281980&t=0)** - [Instructor] We are going to accomplish two main efforts in this movie.
>
> **[0:04](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-outcome-variables?u=76281980&t=4)** First we are going to clean up our outcome variable for sleep duration.
>
> **[0:08](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-outcome-variables?u=76281980&t=8)** Next we will make sure we have binary variable or flag that is valid for our asthma outcome.
>
> **[0:15](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-outcome-variables?u=76281980&t=15)** Let's start by reviewing our data dictionary.
>
> **[0:18](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-outcome-variables?u=76281980&t=18)** We'll look at our data dictionary but I just wanted to give you an overview on the slide.
>
> **[0:23](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-outcome-variables?u=76281980&t=23)** We need to remove the rows with no information on sleep time and we want to turn our asthma variable into an indicator variable with only ones and zeroes.
>
> **[0:33](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-outcome-variables?u=76281980&t=33)** Now we'll go to our data dictionary.
>
> **[0:35](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-outcome-variables?u=76281980&t=35)** Remember our sleep duration variable?
>
> **[0:38](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-outcome-variables?u=76281980&t=38)** I'm going to show you how to code sleep time 2 which eliminates these unknown records.
>
> **[0:44](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-outcome-variables?u=76281980&t=44)** Technically I don't have to show you how to do this with our project since we kicked out the records with unknown variable in sleep time 1 but it's helpful to see how you would do it if we had not done that.
>
> **[0:56](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-outcome-variables?u=76281980&t=56)** This shows we need to get rid of the 77s and the 99s.
>
> **[1:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-outcome-variables?u=76281980&t=60)** Let's also look at the asthma tab while we're over here and on the asthma tab, here we have asthma 3 and I'm going to show you how to code asthma 4 which eliminates these unknown records.
>
> **[1:13](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-outcome-variables?u=76281980&t=73)** Again, this is just an academic exercise.
>
> **[1:16](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-outcome-variables?u=76281980&t=76)** We already removed the unknowns from the whole dataset.
>
> **[1:19](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-outcome-variables?u=76281980&t=79)** I'm just warming you up for further coding with some examples.
>
> **[1:23](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-outcome-variables?u=76281980&t=83)** Now let's look at some of the code I made.
>
> **[1:25](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-outcome-variables?u=76281980&t=85)** See how I start by making dataset h from g?
>
> **[1:30](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-outcome-variables?u=76281980&t=90)** Let's run that with a control R.
>
> **[1:32](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-outcome-variables?u=76281980&t=92)** Now I'm going to show you how to generate a continuous variable, sleep time 2 that's a cleaned up version of sleep time 1.
>
> **[1:39](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-outcome-variables?u=76281980&t=99)** Instead of starting with nine, we start with all N/A which is missing.
>
> **[1:44](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-outcome-variables?u=76281980&t=104)** Then I add all these criteria.
>
> **[1:46](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-outcome-variables?u=76281980&t=106)** Sleep time 1 can not be N/A.
>
> **[1:49](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-outcome-variables?u=76281980&t=109)** See this bang before the N/A command?
>
> **[1:52](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-outcome-variables?u=76281980&t=112)** It can not be 77.
>
> **[1:54](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-outcome-variables?u=76281980&t=114)** See this bang before the equals for 77?
>
> **[1:57](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-outcome-variables?u=76281980&t=117)** And it can not be 99.
>
> **[2:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-outcome-variables?u=76281980&t=120)** Bang equals 99.
>
> **[2:02](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-outcome-variables?u=76281980&t=122)** If we run that, we will get a correctly recoded continuous variable and then there's the table command.
>
> **[2:10](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-outcome-variables?u=76281980&t=130)** Let's run all this.
>
> **[2:11](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-outcome-variables?u=76281980&t=131)** Highlight Control R.
>
> **[2:13](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-outcome-variables?u=76281980&t=133)** See how everything landed in the right place?
>
> **[2:17](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-outcome-variables?u=76281980&t=137)** Let's finish by doing the asthma variable.
>
> **[2:21](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-outcome-variables?u=76281980&t=141)** This one is more like the alcohol variable.
>
> **[2:24](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-outcome-variables?u=76281980&t=144)** We start with a nine and asthma 4, then we overwrite a one if the person has asthma and a zero if they do not.
>
> **[2:32](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-outcome-variables?u=76281980&t=152)** Now let's run this and look at our table.
>
> **[2:34](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-outcome-variables?u=76281980&t=154)** Highlight Control R.
>
> **[2:37](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-outcome-variables?u=76281980&t=157)** As expected we don't have any nines because we removed them but we see the ones and zeroes are in the right place.
>
> **[2:44](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-outcome-variables?u=76281980&t=164)** All right done with this code and please notice I named it 120 underscore make outcome variables.
>
> **[2:51](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-outcome-variables?u=76281980&t=171)** I'm continuing to follow our naming conventions so our code comes in the right order and so that I know what it does.
>
> **[2:57](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-outcome-variables?u=76281980&t=177)** So in this movie we cleaned up sleep duration by removing the missings but we technically didn't need to do that because we had subsetted them out of the dataset.
>
> **[3:06](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-outcome-variables?u=76281980&t=186)** I got to show you however how to clean up a continuous variable.
>
> **[3:11](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-outcome-variables?u=76281980&t=191)** Remember you start by filling it in with N/As instead of nones.
>
> **[3:15](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-outcome-variables?u=76281980&t=195)** Then with asthma I showed you how I cleaned up that variable to make it say only ones and zeroes.
>
> **[3:19](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-outcome-variables?u=76281980&t=199)** This section ends chapter three, reading and data and applying exclusions.
>
> **[3:25](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-outcome-variables?u=76281980&t=205)** In the next chapter, we will really jump into our dataset by generating all the variables we'll need for our analysis.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), this. (1)
> **CLI Commands:** make (3)
> **Cross-References:** in the next (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Delete rows
> [LinkedIn Learning](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-delete-rows?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-delete-rows?u=76281980&t=0)** - [Instructor] One interesting thing about this challenge is that it doesn't use the Behavioral Risk Factor Surveillance System or BRFSS dataset that we've been using.
>
> **[0:16](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-delete-rows?u=76281980&t=16)** It instead uses the National Health and Nutrition Examination survey dataset or NHANES dataset that I talked about earlier in the course.
>
> **[0:26](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-delete-rows?u=76281980&t=26)** Go ahead and read the handout associated with this challenge for more information.
>
> **[0:32](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-delete-rows?u=76281980&t=32)** Interestingly, you might not notice any difference using the NHANES because the NHANES includes many of the same questionnaire questions as we have been using in the BRFSS.
>
> **[0:45](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-delete-rows?u=76281980&t=45)** But a few things make NHANES different, including the fact that it's an in-person health survey, not a phone survey like BRFSS.
>
> **[0:55](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-delete-rows?u=76281980&t=55)** That means that there are also physical exams, like a dental assessment and an exam where laboratory and blood pressure measurements are taken.
>
> **[1:04](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-delete-rows?u=76281980&t=64)** Having to do these in-person exams makes the datasets for NHANES a lot smaller than the BRFSS core dataset.
>
> **[1:13](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-delete-rows?u=76281980&t=73)** Usually the data sets include only 8,000 or 9,000 records compared to over 400,000 in the BRFSS.
>
> **[1:22](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-delete-rows?u=76281980&t=82)** Another big difference between the core dataset of the BRFSS and the NHANES data sets is their structure.
>
> **[1:30](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-delete-rows?u=76281980&t=90)** In BRFSS, they put the answers to all the questionnaires in one big table, but in NHANES, they keep the data for each questionnaire separate.
>
> **[1:40](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-delete-rows?u=76281980&t=100)** Please look at the handout posted with this challenge.
>
> **[1:43](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-delete-rows?u=76281980&t=103)** It provides you links to these NHANES datasets and some explanation.
>
> **[1:49](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-delete-rows?u=76281980&t=109)** If you go to the main link to the version of NHANES we are using, you'll see that the dataset are split into different topics and each of them is in .xpt format just like the BRFSS dataset.
>
> **[2:02](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-delete-rows?u=76281980&t=122)** The specific dataset we're using for this challenge is the demographic variables and sample weights dataset, which is called P_DEMO.xpt.
>
> **[2:13](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-delete-rows?u=76281980&t=133)** If you go to the link in the handout where you can download this dataset, you'll see it doesn't have a lot of variables in it.
>
> **[2:21](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-delete-rows?u=76281980&t=141)** There's also a short data dictionary there.
>
> **[2:24](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-delete-rows?u=76281980&t=144)** To prepare for this challenge, go ahead and download the dataset and put it in your data folder.
>
> **[2:30](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-delete-rows?u=76281980&t=150)** Earlier in this chapter, we learned how to import a dataset, then remove rows from that dataset based on criteria.
>
> **[2:37](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-delete-rows?u=76281980&t=157)** We also kept counting the number of rows in each resulting dataset to verify the number of rows we were losing each time we deleted rows.
>
> **[2:47](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-delete-rows?u=76281980&t=167)** We also used dataset naming conventions by advancing an appended letter to the end of the dataset name so we kept producing new datasets in order each time we deleted some rows.
>
> **[3:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-delete-rows?u=76281980&t=180)** Alright, we'll be doing something similar in this challenge only using the NHANES data.
>
> **[3:05](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-delete-rows?u=76281980&t=185)** Let's start by looking at the beginning of the challenge code, which you should download and place in your code folder.
>
> **[3:12](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-delete-rows?u=76281980&t=192)** As you can see at the beginning of the challenge code, the first thing we do is call up the foreign package using the library command.
>
> **[3:20](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-delete-rows?u=76281980&t=200)** This is so we can use the read.xport command from that package in the next code so we can import the .xpt file into the R environment.
>
> **[3:31](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-delete-rows?u=76281980&t=211)** As you can see by the code the name, we give the data frame after the data are imported is DEMO_a.
>
> **[3:38](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-delete-rows?u=76281980&t=218)** We then use the nrow command to count the number of rows in DEMO_a.
>
> **[3:45](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-delete-rows?u=76281980&t=225)** Now we come to the DMDBORN variable, which is about country of birth.
>
> **[3:51](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-delete-rows?u=76281980&t=231)** If you look at the documentation, you will see that the value one in that variable indicates the respondent was born in the United States.
>
> **[3:59](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-delete-rows?u=76281980&t=239)** So to remove the records of all respondents not born in the US, we create data frame DEMO_b, by subsetting DEMO_a, and setting the criteria to DMDBORN == 1.
>
> **[4:16](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-delete-rows?u=76281980&t=256)** Alright, now your challenge is to add to the beginning of that code and do another subset so you can delete row by criteria.
>
> **[4:25](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-delete-rows?u=76281980&t=265)** If you look in the documentation, you'll see that the variable for age at screening is RIDAGEYEAR.
>
> **[4:33](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-delete-rows?u=76281980&t=273)** Your challenge is to add subset code that subsets DEMO_b into DEMO_c, where DEMO_c only keeps those whose age is greater than or equal to 55.
>
> **[4:46](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-delete-rows?u=76281980&t=286)** Then after you create DEMO_c from deleting the rows that do not meet the criteria from DEMO_b, you should run an nrow command to observe the number of rows remaining in DEMO_c after you subsetted DEMO_b.
>
> **[5:03](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-delete-rows?u=76281980&t=303)** This challenge should take you no more than five minutes.
>
> **[5:06](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-delete-rows?u=76281980&t=306)** Go ahead and try it and when you are done, we can take a look at my solution and compare what we did.

> [!info]- Semantic Content
>
> **Env Vars:** nhanes (10), brfss (8), dmdborn (2), p_demo (1), ridageyear (1)
> **Cross-References:** earlier in (2), in the next (1)
> **Code Keywords:** let (1), delete (1)
> **Documentation:** the documentation (2)
> **UI Navigation:** go to (2)
> **Definitions:** means that (1), is called (1)
> **CLI Commands:** make (1)
> **Exercise Files:** download the (1)

#### Solution: Delete rows
> [LinkedIn Learning](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/solution-delete-rows?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/solution-delete-rows?u=76281980&t=0)** - [Instructor] Let's see how you did by going over my solution.
>
> **[0:08](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/solution-delete-rows?u=76281980&t=8)** See this comment where it says, remove those aged less than 55 at screening?
>
> **[0:15](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/solution-delete-rows?u=76281980&t=15)** That's where my solution code starts.
>
> **[0:17](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/solution-delete-rows?u=76281980&t=17)** Let's see how close yours is to mine.
>
> **[0:20](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/solution-delete-rows?u=76281980&t=20)** Actually, let's start by running all the code before the comment.
>
> **[0:23](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/solution-delete-rows?u=76281980&t=23)** Okay, you might notice that the first thing I do is count the rows in demo_B, which is the dataset from which we are removing records.
>
> **[0:40](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/solution-delete-rows?u=76281980&t=40)** Actually, let's do that now and see what it is.
>
> **[0:42](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/solution-delete-rows?u=76281980&t=42)** Okay, we see in the console that data frame demo_B has about 12,500 rows.
>
> **[0:58](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/solution-delete-rows?u=76281980&t=58)** Remember, this was after applying the criterion in the first subset, which kept only US-born respondents.
>
> **[1:04](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/solution-delete-rows?u=76281980&t=64)** Our next step is to make code that will create demo_C, and only retain the records where age is greater than or equal to 55.
>
> **[1:12](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/solution-delete-rows?u=76281980&t=72)** So here we use the subset command on demo_B, and we set the criteria for the records we want to retain.
>
> **[1:24](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/solution-delete-rows?u=76281980&t=84)** We want to retain everyone aged 55 and older, so we use the greater than and equal sign to indicate who to keep in the resulting dataset.
>
> **[1:32](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/solution-delete-rows?u=76281980&t=92)** Let's run this line of code.
>
> **[1:33](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/solution-delete-rows?u=76281980&t=93)** Okay, we see in the console that the code ran without any problems, but now, do the resulting number of rows make sense?
>
> **[1:46](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/solution-delete-rows?u=76281980&t=106)** Let's go back to my code and run an N row on our new data frame, demo_C, and just see how many rows are remaining.
>
> **[1:54](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/solution-delete-rows?u=76281980&t=114)** Wow, that step really reduced the dataset.
>
> **[2:03](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/solution-delete-rows?u=76281980&t=123)** It went from over 12,000 records to 3000 records.
>
> **[2:07](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/solution-delete-rows?u=76281980&t=127)** That's because the NHANES is very comprehensive, and includes respondents of all ages, even children.
>
> **[2:13](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/solution-delete-rows?u=76281980&t=133)** You'll find this information in the NHANES documentation.
>
> **[2:17](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/solution-delete-rows?u=76281980&t=137)** That's why removing everyone under the age of 55 removes so much of the dataset.
>
> **[2:22](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/solution-delete-rows?u=76281980&t=142)** And that's also why you need to check each time you delete rows, to make sure the number you deleted is logical and based on an accurate understanding of the data.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), delete (1)
> **Non-Speech:** (silence) (5), (upbeat music) (1)
> **CLI Commands:** make (3), find (1)
> **Env Vars:** nhanes (2)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)


### 4. Preparing for Descriptive Analysis

#### Generating the age variables
> [LinkedIn Learning](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-age-variables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-age-variables?u=76281980&t=0)** - [Instructor] We are going to start with generating the age variables we need for our descriptive analysis.
>
> **[0:05](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-age-variables?u=76281980&t=5)** Remember how we set up our data dictionary?
>
> **[0:08](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-age-variables?u=76281980&t=8)** Remember all those variables we decided to make?
>
> **[0:11](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-age-variables?u=76281980&t=11)** Now, in this chapter we will go through the data dictionary and make all those variables.
>
> **[0:17](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-age-variables?u=76281980&t=17)** We will start in this session with the age variable.
>
> **[0:20](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-age-variables?u=76281980&t=20)** Where I will start by showing you how to refer to your data dictionary about the age variables.
>
> **[0:26](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-age-variables?u=76281980&t=26)** This time we don't need a grouping variable.
>
> **[0:29](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-age-variables?u=76281980&t=29)** But we do need a bunch of indicator variables.
>
> **[0:32](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-age-variables?u=76281980&t=32)** This is part of why we designed the variables and put them in the data dictionary, to make coding easier.
>
> **[0:38](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-age-variables?u=76281980&t=38)** Looking at that while we formulate the code, will prevent us from making mistakes with our code.
>
> **[0:44](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-age-variables?u=76281980&t=44)** Let's go over to the age tab in our data dictionary for guidance.
>
> **[0:48](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-age-variables?u=76281980&t=48)** Age was complete in BRFSS so we don't need to make an age grouping variable.
>
> **[0:55](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-age-variables?u=76281980&t=55)** We can just use X age to G as our grouping variable.
>
> **[0:59](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-age-variables?u=76281980&t=59)** But we need to make all these indicator variables we can use in our regression in the next course.
>
> **[1:05](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-age-variables?u=76281980&t=65)** This is like we did with the drink weekly and drink monthly variables last chapter.
>
> **[1:10](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-age-variables?u=76281980&t=70)** We are going to make Age2 through Age6.
>
> **[1:14](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-age-variables?u=76281980&t=74)** I left the first age group, the young ones, as the reference group.
>
> **[1:18](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-age-variables?u=76281980&t=78)** So they don't get an indicator variable, and they are in the comparison group.
>
> **[1:22](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-age-variables?u=76281980&t=82)** Let's go to R and make these indicator variables, otherwise known as flags.
>
> **[1:27](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-age-variables?u=76281980&t=87)** First things first, increment the data set H to I, HI.
>
> **[1:32](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-age-variables?u=76281980&t=92)** Let's highlight that code and hit Control R to run it.
>
> **[1:36](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-age-variables?u=76281980&t=96)** No errors, good.
>
> **[1:37](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-age-variables?u=76281980&t=97)** Now let's look at the next code.
>
> **[1:40](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-age-variables?u=76281980&t=100)** R has this thing with keeping each column the same length as the last column.
>
> **[1:45](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-age-variables?u=76281980&t=105)** Meaning having the same number of rows.
>
> **[1:48](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-age-variables?u=76281980&t=108)** So when I'm making an indicator variable, my strategy is to make all the fields and set them to zero as a default.
>
> **[1:55](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-age-variables?u=76281980&t=115)** Then, in subsequent code, I'll set conditions, and update that zero to one under those conditions.
>
> **[2:02](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-age-variables?u=76281980&t=122)** This is what I did earlier with the alcohol indicator variables.
>
> **[2:06](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-age-variables?u=76281980&t=126)** So here, you see me at the beginning creating all these flags by setting them to zero.
>
> **[2:12](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-age-variables?u=76281980&t=132)** Let's set up all these variables with zeros first.
>
> **[2:15](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-age-variables?u=76281980&t=135)** So we'll highlight and Control R.
>
> **[2:17](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-age-variables?u=76281980&t=137)** Great, no errors.
>
> **[2:19](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-age-variables?u=76281980&t=139)** So let's now update the first flag.
>
> **[2:22](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-age-variables?u=76281980&t=142)** We have Age2 equaling zero for everybody.
>
> **[2:26](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-age-variables?u=76281980&t=146)** But it should be one for the people who have a two in X Age G.
>
> **[2:30](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-age-variables?u=76281980&t=150)** Remember the data dictionary?
>
> **[2:32](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-age-variables?u=76281980&t=152)** So on the left of the equation, we define the field Age2, because that is the field we are updating, and then we set these conditions in the brackets.
>
> **[2:40](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-age-variables?u=76281980&t=160)** Then the arrow and what to put in that field under that condition.
>
> **[2:44](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-age-variables?u=76281980&t=164)** Which in this case of a flag is one.
>
> **[2:48](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-age-variables?u=76281980&t=168)** Now ever importantly, we run a table command cross-tabbing the native field which is X Age G with the newly coded field, Age2, to make sure we didn't screw up.
>
> **[2:59](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-age-variables?u=76281980&t=179)** Let's highlight and run.
>
> **[3:01](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-age-variables?u=76281980&t=181)** See how to read this table?
>
> **[3:03](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-age-variables?u=76281980&t=183)** The twos in X Age G are ones in Age2.
>
> **[3:09](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-age-variables?u=76281980&t=189)** That's what we want.
>
> **[3:10](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-age-variables?u=76281980&t=190)** So we can do this for the rest of our age indicator variables and we are done.
>
> **[3:15](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-age-variables?u=76281980&t=195)** Let's highlight those and Control R.
>
> **[3:18](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-age-variables?u=76281980&t=198)** Great.
>
> **[3:20](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-age-variables?u=76281980&t=200)** Alright, let's scroll up in our console and do a spot check of our tables.
>
> **[3:27](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-age-variables?u=76281980&t=207)** Looks good.
>
> **[3:28](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-age-variables?u=76281980&t=208)** Let's go back to our dictionary.
>
> **[3:30](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-age-variables?u=76281980&t=210)** With age, we got lucky.
>
> **[3:32](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-age-variables?u=76281980&t=212)** The grouping variable that BRFSS provided us worked out for us.
>
> **[3:36](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-age-variables?u=76281980&t=216)** So we didn't have to make one.
>
> **[3:38](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-age-variables?u=76281980&t=218)** That's because there were no missing fields and no fields needed to be collapsed.
>
> **[3:42](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-age-variables?u=76281980&t=222)** So we didn't need to make a grouping variable, just the indicator variables.
>
> **[3:47](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-age-variables?u=76281980&t=227)** So to conclude this section, I showed you how to look up the age variables in our data dictionary and then develop code to make each variable.
>
> **[3:56](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-age-variables?u=76281980&t=236)** Generally, you have to make a grouping variable and check it and then make indicator variables.
>
> **[4:01](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-age-variables?u=76281980&t=241)** We don't have to do the grouping variable this time, but we will in the next section when we generate smoking variables.
>
> **[4:08](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-age-variables?u=76281980&t=248)** A lot of people don't realize that generating variables is a main part of developing the analytic data set.
>
> **[4:14](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-age-variables?u=76281980&t=254)** Let's move on to the next section where we generate our smoking variables.

> [!info]- Semantic Content
>
> **CLI Commands:** make (14)
> **Code Keywords:** let (11), default. (1)
> **Cross-References:** in the next (2), go back to (1)
> **Env Vars:** brfss (2)
> **UI Navigation:** go to (1), scroll up (1)
> **Definitions:** known as (1), is a  (1)
> **Prerequisites:** set up (2)
> **Speakers:** - [instructor] (1)

#### Generating the smoking variables
> [LinkedIn Learning](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-smoking-variables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-smoking-variables?u=76281980&t=0)** - [Instructor] First we will review the data dictionary for the different smoking variables we need to make.
>
> **[0:06](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-smoking-variables?u=76281980&t=6)** This was a rather complicated variable.
>
> **[0:09](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-smoking-variables?u=76281980&t=9)** Next I will go through the code needed to make the smoking variables.
>
> **[0:13](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-smoking-variables?u=76281980&t=13)** We will make and check the variables.
>
> **[0:15](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-smoking-variables?u=76281980&t=15)** Okay, let's go to our data dictionary.
>
> **[0:18](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-smoking-variables?u=76281980&t=18)** Let's look at SMOKDAY2, our smoking variable.
>
> **[0:21](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-smoking-variables?u=76281980&t=21)** We don't like that these unknowns need to be collapsed.
>
> **[0:25](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-smoking-variables?u=76281980&t=25)** Also, Every Days and Some Days need to be collapsed.
>
> **[0:29](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-smoking-variables?u=76281980&t=29)** Those will both be one in the new variable.
>
> **[0:31](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-smoking-variables?u=76281980&t=31)** So we need to make a grouping variable first which we didn't have to do with age.
>
> **[0:37](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-smoking-variables?u=76281980&t=37)** That will be called SMOKGRP.
>
> **[0:38](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-smoking-variables?u=76281980&t=38)** I'll show you how.
>
> **[0:40](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-smoking-variables?u=76281980&t=40)** But also, don't forget the SMOKE100 tab.
>
> **[0:43](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-smoking-variables?u=76281980&t=43)** We have a bunch of never smokers in there, and we need to make sure that they show up as non-smokers rather than unknown in the grouping variable.
>
> **[0:52](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-smoking-variables?u=76281980&t=52)** Let's scroll down a little and look at the smoking code.
>
> **[0:56](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-smoking-variables?u=76281980&t=56)** First before we get to the grouping variable, let's get our NEVERSMK variable going.
>
> **[1:01](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-smoking-variables?u=76281980&t=61)** Remember if they said two, or No, to smoking a hundred cigarettes in their lives, they are never smokers and get a one in their flag.
>
> **[1:10](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-smoking-variables?u=76281980&t=70)** Let's just run the snippet of code and check it out to make sure we get the NEVERSMK right because we need it for our grouping variable.
>
> **[1:17](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-smoking-variables?u=76281980&t=77)** Let's highlight and Control R to run.
>
> **[1:20](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-smoking-variables?u=76281980&t=80)** In the console, we see that where SMOKE100 is two, NEVERSMK is one. Awesome!
>
> **[1:27](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-smoking-variables?u=76281980&t=87)** Now, let's go back to our code to focus on our grouping variable.
>
> **[1:31](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-smoking-variables?u=76281980&t=91)** Like with the indicator variables, we start by just making the SMOKGRP variable by setting it to a value.
>
> **[1:38](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-smoking-variables?u=76281980&t=98)** Since unknown is nine, we'll start by setting the variable to nine.
>
> **[1:42](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-smoking-variables?u=76281980&t=102)** But afterward in subsequent code, we have to edit that nine based on criteria.
>
> **[1:48](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-smoking-variables?u=76281980&t=108)** Our first situation is making those where the native variable SMOKDAY2 is one or two, as having one in our new variable.
>
> **[1:56](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-smoking-variables?u=76281980&t=116)** Remember those were the people who smoked some days or every day.
>
> **[2:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-smoking-variables?u=76281980&t=120)** So they smoked, okay? That's the take home message.
>
> **[2:03](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-smoking-variables?u=76281980&t=123)** So notice the Or pipe in the conditions.
>
> **[2:06](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-smoking-variables?u=76281980&t=126)** Next, we need to make sure that those who are coded as three in the native variable SMOKDAY2 will be two in our new variable, saying that they don't smoke anymore.
>
> **[2:17](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-smoking-variables?u=76281980&t=137)** Along with those never smokers who obviously never smoked.
>
> **[2:20](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-smoking-variables?u=76281980&t=140)** So we used the pipe to say if you are a three in SMOKDAY2, or a one in NEVERSMK, you get a two in our grouping variable as a non-smoker.
>
> **[2:32](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-smoking-variables?u=76281980&t=152)** That's a lot of editing code.
>
> **[2:34](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-smoking-variables?u=76281980&t=154)** Let's highlight and do Control R to run it.
>
> **[2:38](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-smoking-variables?u=76281980&t=158)** Let's look at this table output to see if we coded our variables properly.
>
> **[2:43](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-smoking-variables?u=76281980&t=163)** We look in our console to compare the native variable to our new grouping variable.
>
> **[2:48](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-smoking-variables?u=76281980&t=168)** It looks like everything landed okay.
>
> **[2:51](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-smoking-variables?u=76281980&t=171)** Now, next. Here's the trick.
>
> **[2:53](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-smoking-variables?u=76281980&t=173)** We will now use the grouping variable to make the indicator variable.
>
> **[2:57](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-smoking-variables?u=76281980&t=177)** See how we are using SMOKGRP's criteria to update the indicator variable SMOKER?
>
> **[3:03](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-smoking-variables?u=76281980&t=183)** And then this is followed by the table command to make sure we did it right.
>
> **[3:08](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-smoking-variables?u=76281980&t=188)** Let's run that code. Highlight, Control R.
>
> **[3:13](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-smoking-variables?u=76281980&t=193)** Now, we review the table in the console.
>
> **[3:16](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-smoking-variables?u=76281980&t=196)** See how it came out? Great.
>
> **[3:18](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-smoking-variables?u=76281980&t=198)** So let's look down this list.
>
> **[3:21](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-smoking-variables?u=76281980&t=201)** Everything is basically that.
>
> **[3:24](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-smoking-variables?u=76281980&t=204)** You make a grouping variable, and then you use that to make the flags.
>
> **[3:28](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-smoking-variables?u=76281980&t=208)** You run table commands to make sure you didn't mess up.
>
> **[3:32](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-smoking-variables?u=76281980&t=212)** You are guided by the specifications on the tabs that you designed in the last chapter.
>
> **[3:37](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-smoking-variables?u=76281980&t=217)** You use the or operator and the and operator when you need to.
>
> **[3:42](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-smoking-variables?u=76281980&t=222)** After coding each grouping in indicator variable, you have to run the table command to check it.
>
> **[3:46](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-smoking-variables?u=76281980&t=226)** So you can make sure it comes out right.
>
> **[3:49](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-smoking-variables?u=76281980&t=229)** It's really this simple. Kind of tedious actually.
>
> **[3:52](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-smoking-variables?u=76281980&t=232)** These code files are available for you in case you get tired of it.
>
> **[3:57](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-smoking-variables?u=76281980&t=237)** Okay, we got a lot done in this lecture.
>
> **[4:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-smoking-variables?u=76281980&t=240)** First, we looked up our plan for our smoking variables in our data dictionary.
>
> **[4:05](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-smoking-variables?u=76281980&t=245)** Then, for each variable we planned, we used R to make the variable.
>
> **[4:09](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-smoking-variables?u=76281980&t=249)** Typically, we started with making a grouping variable based on the native variable and collapsed categories the way we wanted.
>
> **[4:16](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-smoking-variables?u=76281980&t=256)** Then, we tested the grouping variable with a table command to make sure we coded it right.
>
> **[4:21](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-smoking-variables?u=76281980&t=261)** Next, we used that grouping variable to create the new indicator variables and we tested those to make sure we coded those right.
>
> **[4:29](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-smoking-variables?u=76281980&t=269)** Thanks for hanging in there.
>
> **[4:30](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/generating-the-smoking-variables?u=76281980&t=270)** In the next section I'm happy to say we will wrap up and finalize our analytic data set.

> [!info]- Semantic Content
>
> **CLI Commands:** make (16)
> **Env Vars:** smokday2 (4), neversmk (4), smokgrp (3), smoke100 (2), smoker (1)
> **Code Keywords:** let (11)
> **Cross-References:** go back to (1), in the last (1), in the next (1)
> **UI Navigation:** go to (1), scroll down (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - [instructor] (1)

#### Finalizing the analytic data set
> [LinkedIn Learning](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/finalizing-the-analytic-data-set?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/finalizing-the-analytic-data-set?u=76281980&t=0)** - [Instructor] Welcome to Chapter Four, Section Three, where we finalize our analytic data set before we get on with our analysis.
>
> **[0:07](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/finalizing-the-analytic-data-set?u=76281980&t=7)** First, we will start by reviewing our data dictionary and our final code that will make all our calculated variables. Next, I'll show you how to read out your final data set for analysis.
>
> **[0:20](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/finalizing-the-analytic-data-set?u=76281980&t=20)** We'll review the rules for naming conventions, in case you want to edit the data later.
>
> **[0:25](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/finalizing-the-analytic-data-set?u=76281980&t=25)** And we will review the order of operation for editing the data.
>
> **[0:29](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/finalizing-the-analytic-data-set?u=76281980&t=29)** So let's go to our dictionary for a moment.
>
> **[0:32](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/finalizing-the-analytic-data-set?u=76281980&t=32)** So let's look down this list. As I said before, most of these variables follow this pattern.
>
> **[0:39](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/finalizing-the-analytic-data-set?u=76281980&t=39)** You make a grouping variable, and then you use that to make the flags.
>
> **[0:44](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/finalizing-the-analytic-data-set?u=76281980&t=44)** And you run table commands to make sure you didn't mess up.
>
> **[0:48](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/finalizing-the-analytic-data-set?u=76281980&t=48)** You are guided by the specifications on the tabs that you designed in the previous chapter.
>
> **[0:53](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/finalizing-the-analytic-data-set?u=76281980&t=53)** And you use the or operator and the and operator when you need to.
>
> **[0:57](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/finalizing-the-analytic-data-set?u=76281980&t=57)** So let's go to our big code file that we've been working on, where we generated our age variables and our smoking variables, and see what's left to generate.
>
> **[1:06](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/finalizing-the-analytic-data-set?u=76281980&t=66)** I left you off at SMOKER. See how there's the code for male, for Hispanic, for race, all the other variables we specified in our data dictionary.
>
> **[1:19](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/finalizing-the-analytic-data-set?u=76281980&t=79)** These all follow the same pattern I already described.
>
> **[1:22](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/finalizing-the-analytic-data-set?u=76281980&t=82)** So let's run this whole code.
>
> **[1:25](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/finalizing-the-analytic-data-set?u=76281980&t=85)** We will highlight and do one big Ctrl + R.
>
> **[1:31](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/finalizing-the-analytic-data-set?u=76281980&t=91)** Yay, console reports no errors.
>
> **[1:34](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/finalizing-the-analytic-data-set?u=76281980&t=94)** This is kind of an artificial way to do it, to be honest.
>
> **[1:37](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/finalizing-the-analytic-data-set?u=76281980&t=97)** When I actually developed this code, I ran it a section at a time to troubleshoot the tables.
>
> **[1:43](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/finalizing-the-analytic-data-set?u=76281980&t=103)** And that's the way you should do it, when you develop your code. But now, because I secretly tested it before I recorded this video, I know the code is correct. And our last data set is at the end of our code, named BRFSS_i.
>
> **[1:59](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/finalizing-the-analytic-data-set?u=76281980&t=119)** Okay, that's enough action for this code.
>
> **[2:01](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/finalizing-the-analytic-data-set?u=76281980&t=121)** You see, I saved it as 125_Makecategoricalvariables.
>
> **[2:08](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/finalizing-the-analytic-data-set?u=76281980&t=128)** Now, let's move on to writing out our data set.
>
> **[2:11](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/finalizing-the-analytic-data-set?u=76281980&t=131)** That's in the next code, because it is a different function.
>
> **[2:14](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/finalizing-the-analytic-data-set?u=76281980&t=134)** Let's open that code.
>
> **[2:18](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/finalizing-the-analytic-data-set?u=76281980&t=138)** Okay, remember the foreign package and the read xpt command?
>
> **[2:23](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/finalizing-the-analytic-data-set?u=76281980&t=143)** That's what we use to read the data in originally.
>
> **[2:27](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/finalizing-the-analytic-data-set?u=76281980&t=147)** And remember how R knew where to look to read it in, was because we used the change dir command to set the session to the folder with the data in it.
>
> **[2:37](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/finalizing-the-analytic-data-set?u=76281980&t=157)** Well now, you will be writing out your data to that folder as a comma separated value data set, or CSV.
>
> **[2:45](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/finalizing-the-analytic-data-set?u=76281980&t=165)** We'll use the right CSV, say the name of the last data set we had, which was BRFSS_i, and name the data set that comes out all lower case analytic.
>
> **[3:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/finalizing-the-analytic-data-set?u=76281980&t=180)** This isn't a lot of code, so we'll do a Ctrl + A to highlight all of it, and then Ctrl + R to run it.
>
> **[3:07](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/finalizing-the-analytic-data-set?u=76281980&t=187)** There, now we have a finalized data set.
>
> **[3:11](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/finalizing-the-analytic-data-set?u=76281980&t=191)** This is the official data set you will use for your analysis.
>
> **[3:14](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/finalizing-the-analytic-data-set?u=76281980&t=194)** Notice how this code is named 190_Writeoutanalytic.
>
> **[3:20](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/finalizing-the-analytic-data-set?u=76281980&t=200)** Please notice a few things. First, when we go on to actually analyze this analytic data set, our code should first do a read command to read an analytic.
>
> **[3:30](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/finalizing-the-analytic-data-set?u=76281980&t=210)** Each time we change a variable in the 100 series, we need to remake analytic and output it.
>
> **[3:37](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/finalizing-the-analytic-data-set?u=76281980&t=217)** So if we do any changes, we want to make sure that the most current analytic file is read in.
>
> **[3:42](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/finalizing-the-analytic-data-set?u=76281980&t=222)** Also notice that I made this code titled 190.
>
> **[3:46](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/finalizing-the-analytic-data-set?u=76281980&t=226)** That's because that's close to 200.
>
> **[3:48](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/finalizing-the-analytic-data-set?u=76281980&t=228)** It should always be the last code before your analytic code.
>
> **[3:52](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/finalizing-the-analytic-data-set?u=76281980&t=232)** I can sneak in more code than before 200, if I have to remake the analytic data set.
>
> **[3:57](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/finalizing-the-analytic-data-set?u=76281980&t=237)** But in the end, the data set should be built, finalized, and read out before we encounter the 200 code.
>
> **[4:04](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/finalizing-the-analytic-data-set?u=76281980&t=244)** So you notice I could add all kind of code and make a BRFSS_j, or k, or l, but then I just have to write out the final data set and call it analytic, and then read an analytic in the next code, and not have to change any data set names in the analytic code.
>
> **[4:22](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/finalizing-the-analytic-data-set?u=76281980&t=262)** That's the trick.
>
> **[4:24](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/finalizing-the-analytic-data-set?u=76281980&t=264)** So we are getting ready to develop our descriptive analysis.
>
> **[4:28](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/finalizing-the-analytic-data-set?u=76281980&t=268)** The deliverable is called Table 1.
>
> **[4:31](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/finalizing-the-analytic-data-set?u=76281980&t=271)** I'll explain what Table 1 is in the next section.
>
> **[4:34](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/finalizing-the-analytic-data-set?u=76281980&t=274)** We read out our analytic data set and now we will start our 200 analysis code by reading in the analytic data set, and naming analysis code in the 200 series.
>
> **[4:45](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/finalizing-the-analytic-data-set?u=76281980&t=285)** Also, we won't be making any new data sets or variables, unless we have to go back to the 100 series and edit them, and then run them all again.
>
> **[4:53](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/finalizing-the-analytic-data-set?u=76281980&t=293)** So let's hope we do not have to do that.
>
> **[4:56](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/finalizing-the-analytic-data-set?u=76281980&t=296)** And, just to remind you, if we ever do need to do that, the order of operation is first change the 100 series files.
>
> **[5:03](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/finalizing-the-analytic-data-set?u=76281980&t=303)** Then rerun all of them, the whole movie.
>
> **[5:06](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/finalizing-the-analytic-data-set?u=76281980&t=306)** And then set up 190 to output the last one as the analytic data set called analytic.
>
> **[5:12](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/finalizing-the-analytic-data-set?u=76281980&t=312)** And you are good to go then, with all the 200 code you already made.
>
> **[5:17](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/finalizing-the-analytic-data-set?u=76281980&t=317)** So we got a lot done in this section.
>
> **[5:19](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/finalizing-the-analytic-data-set?u=76281980&t=319)** First, we finished generating our calculated variables we designed in our data dictionary.
>
> **[5:24](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/finalizing-the-analytic-data-set?u=76281980&t=324)** And we read them out into a final analytic data set.
>
> **[5:28](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/finalizing-the-analytic-data-set?u=76281980&t=328)** Also, we realized that we are moving to the next phase of the project.
>
> **[5:32](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/finalizing-the-analytic-data-set?u=76281980&t=332)** So I reminded you how to follow the naming conventions when you edit code or add code files to the so-called movie, as I put it, so all the scenes come in order.
>
> **[5:41](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/finalizing-the-analytic-data-set?u=76281980&t=341)** Now that we are done with all that data editing, on to analysis.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), function (1)
> **CLI Commands:** make (6)
> **Cross-References:** in the next (3), previous chapter (1), go back to (1)
> **Env Vars:** csv (2), smoker (1)
> **UI Navigation:** go to (2)
> **Definitions:** is a  (1), is called (1)
> **Warnings:** troubleshoot (1)
> **Prerequisites:** set up (1)

#### What is Table 1?
> [LinkedIn Learning](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/what-is-table-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/what-is-table-1?u=76281980&t=0)** - [Instructor] Welcome to chapter four, section four, where you finally learn what Table 1 is.
>
> **[0:07](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/what-is-table-1?u=76281980&t=7)** First, I'm going to describe to you what Table 1 is.
>
> **[0:10](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/what-is-table-1?u=76281980&t=10)** I'm going to also describe univariate, bivariate and multivariate analyses, and how Table 1 and descriptive analysis fits in those definitions.
>
> **[0:20](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/what-is-table-1?u=76281980&t=20)** I'm going to show you how I set up a table shell in Excel to show you what a Table 1 is, and how it's going to look when we are done.
>
> **[0:29](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/what-is-table-1?u=76281980&t=29)** We'll go over how I made the table shell in the next chapter.
>
> **[0:33](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/what-is-table-1?u=76281980&t=33)** So, I'm just giving you a sneak peek now.
>
> **[0:36](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/what-is-table-1?u=76281980&t=36)** Okay, I promised I'd explain to you what Table 1 is.
>
> **[0:40](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/what-is-table-1?u=76281980&t=40)** I want to be clear that we call it Table 1, but sometimes it's actually Table 2 or 3.
>
> **[0:47](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/what-is-table-1?u=76281980&t=47)** If you put a table earlier in the report, then you can't really call it Table 1.
>
> **[0:51](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/what-is-table-1?u=76281980&t=51)** But the reason we refer to it in the industry as Table 1 is that this should be the first part of your results.
>
> **[0:58](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/what-is-table-1?u=76281980&t=58)** A lot of people don't realize that you always need a descriptive analysis, even if you plan to later go on and do a regression, or multivariate analysis.
>
> **[1:08](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/what-is-table-1?u=76281980&t=68)** And remember, we aren't looking at the whole data set like they do in the BRFSS Code Book.
>
> **[1:14](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/what-is-table-1?u=76281980&t=74)** We are just looking at veterans.
>
> **[1:17](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/what-is-table-1?u=76281980&t=77)** So, we need to show the reader descriptive statistics about the sample, or analytic data set before diving into multivariate regression, if we choose to.
>
> **[1:26](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/what-is-table-1?u=76281980&t=86)** Hence, we are always stuck with making Table 1.
>
> **[1:29](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/what-is-table-1?u=76281980&t=89)** So, I'm going to define a few terms.
>
> **[1:32](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/what-is-table-1?u=76281980&t=92)** Univariate has the root uni, meaning one.
>
> **[1:35](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/what-is-table-1?u=76281980&t=95)** That means when you analyze one variable.
>
> **[1:38](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/what-is-table-1?u=76281980&t=98)** If it's a continuous variable, you could do a mean, or standard deviation, or a median.
>
> **[1:44](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/what-is-table-1?u=76281980&t=104)** If it's a categorical variable, you could report a percentage, but it's just one variable.
>
> **[1:50](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/what-is-table-1?u=76281980&t=110)** Bivariate mean two variables.
>
> **[1:52](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/what-is-table-1?u=76281980&t=112)** So, think of our exposure and outcome.
>
> **[1:55](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/what-is-table-1?u=76281980&t=115)** If we look at the proportion of non-drinkers with asthma, we are doing bivariate analysis involving two variables.
>
> **[2:03](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/what-is-table-1?u=76281980&t=123)** Finally, we move to multivariate, where we have multiple variables.
>
> **[2:08](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/what-is-table-1?u=76281980&t=128)** That's our regression analysis in the next course.
>
> **[2:11](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/what-is-table-1?u=76281980&t=131)** So, the story is you really need to present univariate and bivariate analyses before you jump into multivariate analyses.
>
> **[2:20](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/what-is-table-1?u=76281980&t=140)** Otherwise, your readers have no idea what's going on.
>
> **[2:23](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/what-is-table-1?u=76281980&t=143)** In fact, some papers only have univariate and bivariate analysis.
>
> **[2:28](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/what-is-table-1?u=76281980&t=148)** Univariate and bivariate analyses are perfectly acceptable by themselves.
>
> **[2:32](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/what-is-table-1?u=76281980&t=152)** So Table 1 is always required.
>
> **[2:35](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/what-is-table-1?u=76281980&t=155)** But all Table 1s are not identical.
>
> **[2:38](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/what-is-table-1?u=76281980&t=158)** Because I'm demonstrating a continuous and a categorical outcome variable, we'll have two different Table 1s.
>
> **[2:46](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/what-is-table-1?u=76281980&t=166)** One for continuous, and one for categorical.
>
> **[2:48](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/what-is-table-1?u=76281980&t=168)** I want to demonstrate both, so I'm using one of each.
>
> **[2:52](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/what-is-table-1?u=76281980&t=172)** Each Table 1 will have a different format.
>
> **[2:54](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/what-is-table-1?u=76281980&t=174)** Let's start by walking through the Table 1 format for categorical variables.
>
> **[3:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/what-is-table-1?u=76281980&t=180)** Here is the categorical table shell.
>
> **[3:02](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/what-is-table-1?u=76281980&t=182)** See how we will have the totals across?
>
> **[3:05](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/what-is-table-1?u=76281980&t=185)** Total with asthma, and total with no asthma.
>
> **[3:09](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/what-is-table-1?u=76281980&t=189)** With frequencies and percentages.
>
> **[3:11](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/what-is-table-1?u=76281980&t=191)** Also, see as I scroll down that we will have stratification of each of the levels of the confounding variables.
>
> **[3:18](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/what-is-table-1?u=76281980&t=198)** With n. and percent depending on totals and asthma status.
>
> **[3:23](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/what-is-table-1?u=76281980&t=203)** Univariate and bivariate.
>
> **[3:25](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/what-is-table-1?u=76281980&t=205)** Also, see this column over here on the left for statistical tests?
>
> **[3:29](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/what-is-table-1?u=76281980&t=209)** That's for later in the course.
>
> **[3:31](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/what-is-table-1?u=76281980&t=211)** Now, let's go look at the continuous table shell.
>
> **[3:35](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/what-is-table-1?u=76281980&t=215)** Notice this is similar, but this time we have one column instead of three for the results.
>
> **[3:40](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/what-is-table-1?u=76281980&t=220)** And we put mean and standard deviation in that column.
>
> **[3:44](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/what-is-table-1?u=76281980&t=224)** Same list up the sides.
>
> **[3:46](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/what-is-table-1?u=76281980&t=226)** Also, there is room for the bivariate tests we will do later.
>
> **[3:52](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/what-is-table-1?u=76281980&t=232)** So, these table shells are where we are going to record the results of our descriptive analyses.
>
> **[3:58](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/what-is-table-1?u=76281980&t=238)** So, in this lecture, I explained to you the different type of analysis there are, univariate, bivariate and multivariate.
>
> **[4:06](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/what-is-table-1?u=76281980&t=246)** And explained how univariate and bivariate analyses are descriptive, and are documented on something called Table 1.
>
> **[4:13](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/what-is-table-1?u=76281980&t=253)** I went over how categorical and continuous outcomes have different formats of a Table 1.
>
> **[4:19](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/what-is-table-1?u=76281980&t=259)** And I gave you a sneak peek at the table shell I developed for each of them, which we will cover more carefully in chapter five.

> [!info]- Semantic Content
>
> **Cross-References:** in the next (2), earlier in (1), later in (1)
> **Code Keywords:** let (2), finally, (1)
> **Env Vars:** brfss (1)
> **UI Navigation:** scroll down (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Reviewing categorical variable distribution
> [LinkedIn Learning](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-categorical-variable-distribution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-categorical-variable-distribution?u=76281980&t=0)** - [Narrator] Welcome to chapter four, section five, where we review our categorical variable distributions.
>
> **[0:07](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-categorical-variable-distribution?u=76281980&t=7)** In the last movie, I showed you the table shells I set up.
>
> **[0:11](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-categorical-variable-distribution?u=76281980&t=11)** One for our categorical outcome of asthma, and one for our continuous outcome of sleep duration.
>
> **[0:17](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-categorical-variable-distribution?u=76281980&t=17)** In this lecture, I'm going to show you how to look at the distribution of the asthma variable alone, which is univariate analysis.
>
> **[0:26](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-categorical-variable-distribution?u=76281980&t=26)** Then, I'm going to show you how that relates to the exposure, drinking alcohol, which would be a bivariate analysis.
>
> **[0:33](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-categorical-variable-distribution?u=76281980&t=33)** Let's go over to R.
>
> **[0:35](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-categorical-variable-distribution?u=76281980&t=35)** Here is the beginning of our 200 analysis code.
>
> **[0:38](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-categorical-variable-distribution?u=76281980&t=38)** The first step is to read in our analytic data set.
>
> **[0:42](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-categorical-variable-distribution?u=76281980&t=42)** So, see, I used the read.csv command to read in the analytic data set file here.
>
> **[0:49](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-categorical-variable-distribution?u=76281980&t=49)** And I call it analytic.
>
> **[0:51](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-categorical-variable-distribution?u=76281980&t=51)** Let's highlight and do Control + R to run that line of code.
>
> **[0:55](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-categorical-variable-distribution?u=76281980&t=55)** Great, it read it.
>
> **[0:57](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-categorical-variable-distribution?u=76281980&t=57)** Next, notice I use the simple table command to get the one-way frequency of ASTHMA4.
>
> **[1:03](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-categorical-variable-distribution?u=76281980&t=63)** But this time, I used the arrow to make a data frame, named the lovely name of AsthmaFreq.
>
> **[1:10](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-categorical-variable-distribution?u=76281980&t=70)** As we analysts say, now we are getting freaky.
>
> **[1:13](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-categorical-variable-distribution?u=76281980&t=73)** But in all seriousness, this code just makes a data frame object out of our table results.
>
> **[1:18](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-categorical-variable-distribution?u=76281980&t=78)** After that, I can use write.csv to make a CSV file of that table that will be read out into our data folder.
>
> **[1:27](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-categorical-variable-distribution?u=76281980&t=87)** After that, I can go to our data folder and open up the CSV and copy out the numbers.
>
> **[1:33](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-categorical-variable-distribution?u=76281980&t=93)** But we can see them here because I included a line that just names the data frame.
>
> **[1:38](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-categorical-variable-distribution?u=76281980&t=98)** That gets to print in the console window.
>
> **[1:41](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-categorical-variable-distribution?u=76281980&t=101)** Let's run all this code.
>
> **[1:44](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-categorical-variable-distribution?u=76281980&t=104)** But we are specifically concerned about the distribution of the categorical variable.
>
> **[1:48](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-categorical-variable-distribution?u=76281980&t=108)** So let me calculate a percentage.
>
> **[1:51](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-categorical-variable-distribution?u=76281980&t=111)** See the numbers from our table in the console?
>
> **[1:54](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-categorical-variable-distribution?u=76281980&t=114)** I can just do a division operation and create an object, which is just one variable this time, like a list with only one thing in it, called PropAsthma.
>
> **[2:04](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-categorical-variable-distribution?u=76281980&t=124)** Let's run this and look at PropAsthma.
>
> **[2:06](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-categorical-variable-distribution?u=76281980&t=126)** Highlight and Control + R.
>
> **[2:09](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-categorical-variable-distribution?u=76281980&t=129)** Yeah, about 10% of our people have asthma.
>
> **[2:12](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-categorical-variable-distribution?u=76281980&t=132)** That's good for regression, which is the next course.
>
> **[2:14](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-categorical-variable-distribution?u=76281980&t=134)** You don't want the outcome to be too rare, and 10% or greater is good.
>
> **[2:20](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-categorical-variable-distribution?u=76281980&t=140)** You get iffy below that.
>
> **[2:21](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-categorical-variable-distribution?u=76281980&t=141)** And you should think about a different study design if that happens.
>
> **[2:25](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-categorical-variable-distribution?u=76281980&t=145)** But we are good to go.
>
> **[2:27](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-categorical-variable-distribution?u=76281980&t=147)** Let's visualize what we just found.
>
> **[2:29](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-categorical-variable-distribution?u=76281980&t=149)** I created an Excel spreadsheet with two tabs to document my variable distribution results.
>
> **[2:35](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-categorical-variable-distribution?u=76281980&t=155)** These are private spreadsheets, not things you publish.
>
> **[2:38](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-categorical-variable-distribution?u=76281980&t=158)** Not like the table ones.
>
> **[2:40](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-categorical-variable-distribution?u=76281980&t=160)** These are just for your own consumption to help you out.
>
> **[2:43](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-categorical-variable-distribution?u=76281980&t=163)** See how I have this blank chart and the space to put our numerical results?
>
> **[2:48](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-categorical-variable-distribution?u=76281980&t=168)** I'll show you what to do.
>
> **[2:50](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-categorical-variable-distribution?u=76281980&t=170)** Let's go to our data folder.
>
> **[2:52](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-categorical-variable-distribution?u=76281980&t=172)** Here's AsthmaFreq, the table we just read out.
>
> **[2:55](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-categorical-variable-distribution?u=76281980&t=175)** Let's open it.
>
> **[2:57](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-categorical-variable-distribution?u=76281980&t=177)** See how we have the numbers of zeros, which is no asthma, and the number of ones, which is having asthma?
>
> **[3:05](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-categorical-variable-distribution?u=76281980&t=185)** We can put these numbers on our Excel spreadsheet.
>
> **[3:08](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-categorical-variable-distribution?u=76281980&t=188)** This is everyone in the data set.
>
> **[3:10](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-categorical-variable-distribution?u=76281980&t=190)** We knew about this.
>
> **[3:11](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-categorical-variable-distribution?u=76281980&t=191)** We knew the prevalence of asthma was about 10% in this data set of veterans.
>
> **[3:16](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-categorical-variable-distribution?u=76281980&t=196)** But let's make a pie chart anyway, just to visualize it.
>
> **[3:19](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-categorical-variable-distribution?u=76281980&t=199)** I'm going to highlight just the frequencies and do Control + C for copy.
>
> **[3:24](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-categorical-variable-distribution?u=76281980&t=204)** We will now click on the top cell, next to No, and do Control + V to paste.
>
> **[3:30](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-categorical-variable-distribution?u=76281980&t=210)** That looks about right.
>
> **[3:32](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-categorical-variable-distribution?u=76281980&t=212)** Okay, our next order of business is looking at asthma, the categorical outcome, against the exposure, which is alcohol group.
>
> **[3:40](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-categorical-variable-distribution?u=76281980&t=220)** So, we need a cross tabs.
>
> **[3:42](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-categorical-variable-distribution?u=76281980&t=222)** Let's go back to R.
>
> **[3:44](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-categorical-variable-distribution?u=76281980&t=224)** Here we've got almost the same code, but we named it AsmthaAlcFreq as we added the alcohol grouping variable in there.
>
> **[3:52](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-categorical-variable-distribution?u=76281980&t=232)** You'll see why we made all these grouping variables in the last chapter.
>
> **[3:56](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-categorical-variable-distribution?u=76281980&t=236)** It's to facilitate making table one.
>
> **[3:59](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-categorical-variable-distribution?u=76281980&t=239)** Let's highlight and Control + R to run this code.
>
> **[4:02](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-categorical-variable-distribution?u=76281980&t=242)** Great.
>
> **[4:03](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-categorical-variable-distribution?u=76281980&t=243)** Okay, let's open up the CSV that was the output and then copy our info onto our spreadsheet to make a chart like we did last time.
>
> **[4:12](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-categorical-variable-distribution?u=76281980&t=252)** Here it is in our data folder.
>
> **[4:14](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-categorical-variable-distribution?u=76281980&t=254)** Let's open it up.
>
> **[4:16](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-categorical-variable-distribution?u=76281980&t=256)** See how we have the one, two, three across the top for our three levels of alcohol consumption?
>
> **[4:23](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-categorical-variable-distribution?u=76281980&t=263)** Let's just highlight the cells with the frequencies and do Control + C to copy.
>
> **[4:29](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-categorical-variable-distribution?u=76281980&t=269)** Here we are back at our private visualization spreadsheet.
>
> **[4:33](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-categorical-variable-distribution?u=76281980&t=273)** Again, let's place our cursor in the upper left cell of the table and do Control + V.
>
> **[4:39](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-categorical-variable-distribution?u=76281980&t=279)** This will fill out our graph, and then we can scroll down and look more closely.
>
> **[4:43](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-categorical-variable-distribution?u=76281980&t=283)** I prepared this Excel sheet beforehand, but you can always make these graphs yourself in Excel or in any other graphing program.
>
> **[4:50](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-categorical-variable-distribution?u=76281980&t=290)** And you artists could probably make a way more beautiful one manually.
>
> **[4:54](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-categorical-variable-distribution?u=76281980&t=294)** But let's review what this chart says.
>
> **[4:56](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-categorical-variable-distribution?u=76281980&t=296)** Well, it doesn't look good for our hypothesis so far.
>
> **[5:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-categorical-variable-distribution?u=76281980&t=300)** Look at how the non-drinkers seem to have lower rates of asthma than both the drinking groups.
>
> **[5:07](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-categorical-variable-distribution?u=76281980&t=307)** This always happens to me.
>
> **[5:08](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-categorical-variable-distribution?u=76281980&t=308)** Alcohol seems to often look good in these data sets when it shouldn't.
>
> **[5:13](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-categorical-variable-distribution?u=76281980&t=313)** You probably heard that on the news.
>
> **[5:15](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-categorical-variable-distribution?u=76281980&t=315)** It happens a lot to us.
>
> **[5:16](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-categorical-variable-distribution?u=76281980&t=316)** Okay, it's a dangerous variable, but good thing we looked at the raw bivariate distribution between exposure and outcome.
>
> **[5:24](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-categorical-variable-distribution?u=76281980&t=324)** Maybe they are related, but not the way we hypothesized.
>
> **[5:28](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-categorical-variable-distribution?u=76281980&t=328)** Now we are done with our code for checking asthma.
>
> **[5:31](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-categorical-variable-distribution?u=76281980&t=331)** So you will see I saved this code as 200_Check asthma So the steps we are taking now are to evaluate the distribution of our two outcome variables with our exposure variable.
>
> **[5:43](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-categorical-variable-distribution?u=76281980&t=343)** In this movie, we did it with asthma and alcohol.
>
> **[5:46](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-categorical-variable-distribution?u=76281980&t=346)** And in the next section, we will look at our continuous outcome, sleep duration and alcohol.
>
> **[5:52](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-categorical-variable-distribution?u=76281980&t=352)** In this section, we went over how to do a univariate and bivariate analysis of our categorical outcome, which is asthma.
>
> **[5:59](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-categorical-variable-distribution?u=76281980&t=359)** We outputted CSVs, opened them up, and copied and pasted the results into a private spreadsheet, which serves to document our outcome variable distributions.
>
> **[6:09](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-categorical-variable-distribution?u=76281980&t=369)** So let's move on to the next section where we look at the distribution of our continuous variable, sleep duration.

> [!info]- Semantic Content
>
> **Code Keywords:** let (17), private (3), this. (1)
> **CLI Commands:** make (6)
> **Env Vars:** csv (3), asthma4 (1)
> **Cross-References:** in the last (2), go back to (1), in the next (1)
> **UI Navigation:** go to (2), click on (1), scroll down (1)
> **File Paths:** read.csv (1), write.csv (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [narrator] (1)

#### Reviewing continuous variable distribution
> [LinkedIn Learning](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-continuous-variable-distribution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-continuous-variable-distribution?u=76281980&t=0)** - [Narrator] Welcome to chapter four, section six, where we review continuous variable distributions and get to see some of R's very beautiful plotting capabilities.
>
> **[0:10](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-continuous-variable-distribution?u=76281980&t=10)** So, in this section, we are going to review our continuous variable outcome, which is sleep duration.
>
> **[0:16](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-continuous-variable-distribution?u=76281980&t=16)** We need to see how it relates to the exposure, alcohol status.
>
> **[0:21](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-continuous-variable-distribution?u=76281980&t=21)** And, as with categorical distributions, it's best to visualize the distribution to know what's going on.
>
> **[0:27](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-continuous-variable-distribution?u=76281980&t=27)** So we'll do that, too.
>
> **[0:28](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-continuous-variable-distribution?u=76281980&t=28)** Let's go back to Statistics 101.
>
> **[0:31](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-continuous-variable-distribution?u=76281980&t=31)** How do we visualize continuous distributions?
>
> **[0:34](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-continuous-variable-distribution?u=76281980&t=34)** Well, I like a histogram any day, but we can also use box plots.
>
> **[0:39](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-continuous-variable-distribution?u=76281980&t=39)** We are looking for a normal distribution, but, you know, we might find a skewed one or a bimodal one.
>
> **[0:46](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-continuous-variable-distribution?u=76281980&t=46)** We'll remember our Statistics 101, and R is so nice to use for graphing.
>
> **[0:51](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-continuous-variable-distribution?u=76281980&t=51)** Let's go do it.
>
> **[0:52](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-continuous-variable-distribution?u=76281980&t=52)** Here is some code I made just for you.
>
> **[0:55](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-continuous-variable-distribution?u=76281980&t=55)** You'll notice I keep putting this read command at the top just to make sure we are reading in the most recent data set if we haven't already in the session.
>
> **[1:03](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-continuous-variable-distribution?u=76281980&t=63)** But since we have, I'll skip that and go to the next part of the code.
>
> **[1:08](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-continuous-variable-distribution?u=76281980&t=68)** Okay, it's true, we can look at the summary statistics, but they don't do much for us.
>
> **[1:13](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-continuous-variable-distribution?u=76281980&t=73)** Still, you will see I threw down the summary command.
>
> **[1:17](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-continuous-variable-distribution?u=76281980&t=77)** Summary, parenthesis, and then the variable.
>
> **[1:20](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-continuous-variable-distribution?u=76281980&t=80)** We are summarizing the raw variable sleep time, too.
>
> **[1:23](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-continuous-variable-distribution?u=76281980&t=83)** Highlight and run with Control + R.
>
> **[1:27](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-continuous-variable-distribution?u=76281980&t=87)** So, any good statistician will say, "Big deal."
>
> **[1:30](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-continuous-variable-distribution?u=76281980&t=90)** So the mean is 7.11, and here's the min, max, median, which are our garden variety summary statistics.
>
> **[1:40](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-continuous-variable-distribution?u=76281980&t=100)** But that's not good enough.
>
> **[1:42](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-continuous-variable-distribution?u=76281980&t=102)** We want to visualize the entire distribution.
>
> **[1:44](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-continuous-variable-distribution?u=76281980&t=104)** So let's visualize this puppy with a histogram command.
>
> **[1:48](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-continuous-variable-distribution?u=76281980&t=108)** But before we actually do that, let's unpack this fancy histogram code.
>
> **[1:53](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-continuous-variable-distribution?u=76281980&t=113)** We are using the hist function.
>
> **[1:55](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-continuous-variable-distribution?u=76281980&t=115)** You will see that we separate the arguments with commas, but I also put each one on a separate line, too, so our eyes don't go buggy.
>
> **[2:03](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-continuous-variable-distribution?u=76281980&t=123)** First, we specify our variable, then declare main, which is our title, and X and Y labels, and our X and Y maximums.
>
> **[2:13](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-continuous-variable-distribution?u=76281980&t=133)** I admit, I had to run the histogram a few times and try out different X and Y maximums until I found a set I liked.
>
> **[2:20](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-continuous-variable-distribution?u=76281980&t=140)** But maybe that's just me.
>
> **[2:21](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-continuous-variable-distribution?u=76281980&t=141)** I'm kind of picky.
>
> **[2:22](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-continuous-variable-distribution?u=76281980&t=142)** Next, we specify a pretty red border and a pretty yellow column, then LAS = 1 rotates the Y label, so it's crawling upward on the left.
>
> **[2:33](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-continuous-variable-distribution?u=76281980&t=153)** Isn't that cool?
>
> **[2:34](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-continuous-variable-distribution?u=76281980&t=154)** LAS can equal zero, one, two, or three, but most of the time, you want it to be one.
>
> **[2:40](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-continuous-variable-distribution?u=76281980&t=160)** Then breaks is how many times to break it.
>
> **[2:44](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-continuous-variable-distribution?u=76281980&t=164)** Basically, how many classes you want.
>
> **[2:46](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-continuous-variable-distribution?u=76281980&t=166)** You want to play with that, too, before you decide on the final one.
>
> **[2:50](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-continuous-variable-distribution?u=76281980&t=170)** Let's highlight this fancy histogram code and run it with Control + R.
>
> **[2:56](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-continuous-variable-distribution?u=76281980&t=176)** Can you believe such a beauty before your eyes?
>
> **[2:59](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-continuous-variable-distribution?u=76281980&t=179)** Now, we can click on the graphic to make sure the graphical menus are up and just go to File, Save As.
>
> **[3:05](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-continuous-variable-distribution?u=76281980&t=185)** I'm going to choose .jpg, and I'll save it as 100% quality, because you got to live a little.
>
> **[3:13](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-continuous-variable-distribution?u=76281980&t=193)** I will put this in a special folder outside of our analytics folder, because I want to keep following our rules.
>
> **[3:19](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-continuous-variable-distribution?u=76281980&t=199)** You'll see I created this other files folder for it.
>
> **[3:23](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-continuous-variable-distribution?u=76281980&t=203)** You can create this folder if you want, or you can put the file wherever you want.
>
> **[3:28](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-continuous-variable-distribution?u=76281980&t=208)** Just keep it out of the analytics folder.
>
> **[3:31](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-continuous-variable-distribution?u=76281980&t=211)** Alrighty, let's call it hist.
>
> **[3:34](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-continuous-variable-distribution?u=76281980&t=214)** Okay, now let's do box plots.
>
> **[3:37](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-continuous-variable-distribution?u=76281980&t=217)** Here's the code for an overall box plot.
>
> **[3:40](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-continuous-variable-distribution?u=76281980&t=220)** Pretty easy.
>
> **[3:41](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-continuous-variable-distribution?u=76281980&t=221)** Just specify the variable and put titles and labels down.
>
> **[3:46](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-continuous-variable-distribution?u=76281980&t=226)** Let's highlight and run it with Control + R.
>
> **[3:51](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-continuous-variable-distribution?u=76281980&t=231)** See this nice box plot?
>
> **[3:54](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-continuous-variable-distribution?u=76281980&t=234)** Our data are both attractive and normally distributed.
>
> **[3:58](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-continuous-variable-distribution?u=76281980&t=238)** But we knew that from the histogram.
>
> **[4:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-continuous-variable-distribution?u=76281980&t=240)** Let's save that puppy, too.
>
> **[4:02](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-continuous-variable-distribution?u=76281980&t=242)** We'll live a little and do the Save As 100% .jpg, like we did with the other one.
>
> **[4:07](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-continuous-variable-distribution?u=76281980&t=247)** And we'll put it in the same other files folder.
>
> **[4:12](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-continuous-variable-distribution?u=76281980&t=252)** Let's call it box plot.
>
> **[4:15](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-continuous-variable-distribution?u=76281980&t=255)** Now, the next thing we have to do is look at the distribution of sleep duration by alcohol group.
>
> **[4:21](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-continuous-variable-distribution?u=76281980&t=261)** In other words, we just did a univariate analysis and now we are doing a bivariate analysis.
>
> **[4:28](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-continuous-variable-distribution?u=76281980&t=268)** And again, we can do box plots.
>
> **[4:30](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-continuous-variable-distribution?u=76281980&t=270)** Notice how I do this this time with a tilde, and then I declare it the analytic data set.
>
> **[4:36](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-continuous-variable-distribution?u=76281980&t=276)** Otherwise, it's what we did last time.
>
> **[4:39](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-continuous-variable-distribution?u=76281980&t=279)** Let's run this by highlighting and Control + R.
>
> **[4:44](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-continuous-variable-distribution?u=76281980&t=284)** Isn't that a beauty?
>
> **[4:46](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-continuous-variable-distribution?u=76281980&t=286)** But the news is bad for our hypothesis.
>
> **[4:49](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-continuous-variable-distribution?u=76281980&t=289)** I don't think in bivariate analysis alcohol has anything to do with sleep duration in veterans.
>
> **[4:55](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-continuous-variable-distribution?u=76281980&t=295)** Oh, well.
>
> **[4:56](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-continuous-variable-distribution?u=76281980&t=296)** A lot of people see that at this point and they get depressed.
>
> **[5:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-continuous-variable-distribution?u=76281980&t=300)** But I always say wait for the multivariate.
>
> **[5:03](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-continuous-variable-distribution?u=76281980&t=303)** The rubber hits the road at the regression.
>
> **[5:05](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-continuous-variable-distribution?u=76281980&t=305)** So keep your spirits high.
>
> **[5:06](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-continuous-variable-distribution?u=76281980&t=306)** If you want to see the end of the story, it's in my next course on regression.
>
> **[5:11](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-continuous-variable-distribution?u=76281980&t=311)** Alright, let's save this just like we saved the other ones at .jpg 100% in our other files folder as box plot two.
>
> **[5:20](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-continuous-variable-distribution?u=76281980&t=320)** Okay, this is probably it for this code.
>
> **[5:23](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-continuous-variable-distribution?u=76281980&t=323)** So you'll see I saved it as 205_Check sleep duration.
>
> **[5:28](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-continuous-variable-distribution?u=76281980&t=328)** Remember our private visualization spreadsheet from last time?
>
> **[5:32](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-continuous-variable-distribution?u=76281980&t=332)** For the sleep tab, I just copied these graphics on here to show them.
>
> **[5:37](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-continuous-variable-distribution?u=76281980&t=337)** You could do this in Word or another program.
>
> **[5:40](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-continuous-variable-distribution?u=76281980&t=340)** I know, you were thinking, like, why would you do that?
>
> **[5:43](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-continuous-variable-distribution?u=76281980&t=343)** Well, it's just easier to share it.
>
> **[5:46](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-continuous-variable-distribution?u=76281980&t=346)** If someone comes along and questions your distributions, you can just throw this spreadsheet at them.
>
> **[5:51](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-continuous-variable-distribution?u=76281980&t=351)** See, see? Totally normal.
>
> **[5:53](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-continuous-variable-distribution?u=76281980&t=353)** Normal, normal, normal in every group.
>
> **[5:55](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-continuous-variable-distribution?u=76281980&t=355)** So normal it's boring, but normal tends to be good news in statistics, so I'm not complaining.
>
> **[6:01](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-continuous-variable-distribution?u=76281980&t=361)** Alright, wasn't that fun?
>
> **[6:03](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-continuous-variable-distribution?u=76281980&t=363)** So first I reminded you of Statistics 101, how we like to visualize our continuous data for distributions.
>
> **[6:10](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-continuous-variable-distribution?u=76281980&t=370)** Then we looked at our continuous variable, sleep duration, and we made box plots so we could look at it by alcohol group.
>
> **[6:17](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-continuous-variable-distribution?u=76281980&t=377)** And we put those on the spreadsheet.
>
> **[6:20](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/reviewing-continuous-variable-distribution?u=76281980&t=380)** Now we armed with our knowledge about our outcome variables, so we will proceed onto the next chapter, where we will prepare our tables shell.

> [!info]- Semantic Content
>
> **Code Keywords:** let (12), function (1), private (1), throw (1)
> **CLI Commands:** make (2), find (1)
> **UI Navigation:** go to (2), click on (1)
> **Env Vars:** las (2)
> **Cross-References:** go back to (1), next chapter (1)
> **Versions:** 7.11 (1)
> **Definitions:** in other words (1)
> **Analogies:** just like (1)

#### Challenge: Make a categorical variable from a continuous one
> [LinkedIn Learning](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-make-a-categorical-variable-from-a-continuous-one?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-make-a-categorical-variable-from-a-continuous-one?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-make-a-categorical-variable-from-a-continuous-one?u=76281980&t=5)** - [Lecturer] In this challenge, we're going to practice making a categorical variable based on values from a continuous variable, which is one of the many things we learned in this chapter.
>
> **[0:16](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-make-a-categorical-variable-from-a-continuous-one?u=76281980&t=16)** But this time we're going to spice it up a bit by using a different dataset, the NHANES dataset.
>
> **[0:22](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-make-a-categorical-variable-from-a-continuous-one?u=76281980&t=22)** You might remember me mentioning the National Health and Nutrition Examination Survey, or NHANES, earlier in the course.
>
> **[0:30](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-make-a-categorical-variable-from-a-continuous-one?u=76281980&t=30)** Please look at the handout for this challenge and you'll see the links to access this dataset and documentation.
>
> **[0:37](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-make-a-categorical-variable-from-a-continuous-one?u=76281980&t=37)** NHANES is like the BRFSS, the dataset you are working with in this course, in that respondents answer a lot of the same questionnaire questions as the ones in BRFSS.
>
> **[0:49](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-make-a-categorical-variable-from-a-continuous-one?u=76281980&t=49)** But a big difference between the BRFSS and the NHANES is that the NHANES is done in person and the BRFSS is done over the phone.
>
> **[0:59](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-make-a-categorical-variable-from-a-continuous-one?u=76281980&t=59)** Because of that, the NHANES includes data on the results of physical examinations and the BRFSS doesn't.
>
> **[1:06](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-make-a-categorical-variable-from-a-continuous-one?u=76281980&t=66)** In fact, we will be using some of that examination data in this challenge.
>
> **[1:12](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-make-a-categorical-variable-from-a-continuous-one?u=76281980&t=72)** Another difference between the BRFSS court dataset, the one we are using in this course and the NHANES dataset, is that the BRFSS is one big table and NHANES is split up into many different datasets by topic.
>
> **[1:28](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-make-a-categorical-variable-from-a-continuous-one?u=76281980&t=88)** Like with the BRFSS, these datasets are downloaded in SAS's .xpt format.
>
> **[1:34](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-make-a-categorical-variable-from-a-continuous-one?u=76281980&t=94)** And like with the BRFSS, we are going to use the foreign package and R to import these .xpt datasets.
>
> **[1:43](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-make-a-categorical-variable-from-a-continuous-one?u=76281980&t=103)** For this challenge, we're using the exam dataset called the Blood Pressure Oscillometric measurement dataset.
>
> **[1:50](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-make-a-categorical-variable-from-a-continuous-one?u=76281980&t=110)** Basically it contains the results of the blood pressure examination.
>
> **[1:55](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-make-a-categorical-variable-from-a-continuous-one?u=76281980&t=115)** You might remember that when you take someone's blood pressure, the reading has two numbers: the upper number called systolic blood pressure or SBP and the bottom number called diastolic blood pressure or DBP.
>
> **[2:09](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-make-a-categorical-variable-from-a-continuous-one?u=76281980&t=129)** For this challenge, we are just going to concentrate on SBP to make it simple.
>
> **[2:14](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-make-a-categorical-variable-from-a-continuous-one?u=76281980&t=134)** As you probably noticed, both SBP and DBP are continuous variables.
>
> **[2:20](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-make-a-categorical-variable-from-a-continuous-one?u=76281980&t=140)** What we aim to do in this challenge is to recode one of the SBP variables into a categorical variable by choosing cutpoints.
>
> **[2:29](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-make-a-categorical-variable-from-a-continuous-one?u=76281980&t=149)** In other words, we choose some cutpoints then create a new categorical variable based on those cutpoints.
>
> **[2:37](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-make-a-categorical-variable-from-a-continuous-one?u=76281980&t=157)** So you will notice that I've already started the challenge code for you and we can see it on the slide.
>
> **[2:44](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-make-a-categorical-variable-from-a-continuous-one?u=76281980&t=164)** Because the native dataset is in .xpt format, we start by calling up the foreign package using the library command.
>
> **[2:52](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-make-a-categorical-variable-from-a-continuous-one?u=76281980&t=172)** Next, we use the read.export command to import the P_BPXO dataset into the R environment.
>
> **[3:02](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-make-a-categorical-variable-from-a-continuous-one?u=76281980&t=182)** We name the new data frame BP_A, and then use an nrow command to count the number of rows in BP_A.
>
> **[3:11](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-make-a-categorical-variable-from-a-continuous-one?u=76281980&t=191)** Now the next thing we have to do is choose cutpoints.
>
> **[3:14](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-make-a-categorical-variable-from-a-continuous-one?u=76281980&t=194)** Before doing that, you'll want to get an idea of the distribution.
>
> **[3:19](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-make-a-categorical-variable-from-a-continuous-one?u=76281980&t=199)** That's why we use the hist command to run a histogram of the variable we are working with called BPXOSY1, so we can view its distribution.
>
> **[3:30](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-make-a-categorical-variable-from-a-continuous-one?u=76281980&t=210)** We also use the quantile command to have R tell us some percentiles.
>
> **[3:34](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-make-a-categorical-variable-from-a-continuous-one?u=76281980&t=214)** And we set na.rm equal to true, so that R just ignores the missing values and calculates the percentiles anyway.
>
> **[3:45](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-make-a-categorical-variable-from-a-continuous-one?u=76281980&t=225)** So, on the left side of the slide you can see the histogram and also the results of the quantile command.
>
> **[3:51](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-make-a-categorical-variable-from-a-continuous-one?u=76281980&t=231)** If you were to make a data-driven decision about where to put cutpoints in the variable, you would want to look at the distribution using a histogram and also look at these percentiles.
>
> **[4:02](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-make-a-categorical-variable-from-a-continuous-one?u=76281980&t=242)** This is what you would do if you were thinking of creating a categorical variable with cutpoints at quartiles, like the interquartile range cutpoints.
>
> **[4:11](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-make-a-categorical-variable-from-a-continuous-one?u=76281980&t=251)** But for this challenge to make it straightforward, we are going to use empirical cutpoints.
>
> **[4:17](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-make-a-categorical-variable-from-a-continuous-one?u=76281980&t=257)** Okay, so where will we get those empirical cutpoints for our SBP variable?
>
> **[4:23](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-make-a-categorical-variable-from-a-continuous-one?u=76281980&t=263)** Let's put them where the American Heart Association or AHA, recommends to put them.
>
> **[4:29](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-make-a-categorical-variable-from-a-continuous-one?u=76281980&t=269)** The AHA guidelines classify normal SBP as less than 120 MMHG, elevated as 120 to less than 130 MMHG, and then stage one hypertension, abbreviated HTN, is classified as from 130 to less than 140 MMHG.
>
> **[4:51](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-make-a-categorical-variable-from-a-continuous-one?u=76281980&t=291)** Finally, stage two hypertension is 140 and greater.
>
> **[4:56](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-make-a-categorical-variable-from-a-continuous-one?u=76281980&t=296)** So the categorical variable you are making in this challenge will have those categories based on those parameters.
>
> **[5:03](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-make-a-categorical-variable-from-a-continuous-one?u=76281980&t=303)** So to do the challenge, use the AHA guidelines and make a new categorical variable called BPGrp using the AHA cutpoints.
>
> **[5:14](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-make-a-categorical-variable-from-a-continuous-one?u=76281980&t=314)** To make it easy on you, I included the cutpoints in a big common in the challenge code so you can remember what they are.
>
> **[5:21](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-make-a-categorical-variable-from-a-continuous-one?u=76281980&t=321)** So you are assigned to make this new variable called BPGrp, and you are also assigned to check the new variable against the original variable, BPOXSY1, to make sure you did the recode properly.
>
> **[5:36](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-make-a-categorical-variable-from-a-continuous-one?u=76281980&t=336)** And this should all take you no longer than 10 minutes.

> [!info]- Semantic Content
>
> **Env Vars:** brfss (9), nhanes (8), sbp (6), aha (4), mmhg (3)
> **CLI Commands:** make (7), rm (1)
> **Code Keywords:** let (1), finally, (1)
> **Cross-References:** earlier in (1)
> **Definitions:** in other words (1)
> **Speakers:** - [lecturer] (1)
> **Non-Speech:** (bright music) (1)

#### Solution: Make a categorical variable from a continuous one
> [LinkedIn Learning](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/solution-make-a-categorical-variable-from-a-continuous-one?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/solution-make-a-categorical-variable-from-a-continuous-one?u=76281980&t=0)** - [Instructor] Okay, how did you do on the challenge?
>
> **[0:07](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/solution-make-a-categorical-variable-from-a-continuous-one?u=76281980&t=7)** Were you able to make the variable BPGrp?
>
> **[0:11](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/solution-make-a-categorical-variable-from-a-continuous-one?u=76281980&t=11)** I'll show you what I did for the solution.
>
> **[0:15](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/solution-make-a-categorical-variable-from-a-continuous-one?u=76281980&t=15)** So above the big comment, we have the code we talked about earlier.
>
> **[0:19](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/solution-make-a-categorical-variable-from-a-continuous-one?u=76281980&t=19)** Actually, let's run that code now so we are up to date.
>
> **[0:27](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/solution-make-a-categorical-variable-from-a-continuous-one?u=76281980&t=27)** Let me close this histogram so we can see our code.
>
> **[0:31](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/solution-make-a-categorical-variable-from-a-continuous-one?u=76281980&t=31)** As I said, next we have this big comment just to remind you of the empirical cut points from the AHA, which were the parameters for this challenge.
>
> **[0:41](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/solution-make-a-categorical-variable-from-a-continuous-one?u=76281980&t=41)** Below that, we get to the code I made to create the categorical variable BPGrp in the data frame BP_A.
>
> **[0:51](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/solution-make-a-categorical-variable-from-a-continuous-one?u=76281980&t=51)** See these five lines of code?
>
> **[0:53](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/solution-make-a-categorical-variable-from-a-continuous-one?u=76281980&t=53)** In the first line, I create the variable BPGrp, in the data frame, BP_A and I code the entire variable as nine, meaning don't know in my mind.
>
> **[1:06](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/solution-make-a-categorical-variable-from-a-continuous-one?u=76281980&t=66)** Next, in the next line, I update that value.
>
> **[1:09](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/solution-make-a-categorical-variable-from-a-continuous-one?u=76281980&t=69)** As you can see in the brackets, the criteria for our updating the variables value is if BPXOSY1, meaning the systolic blood pressure measurement is less than 120.
>
> **[1:22](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/solution-make-a-categorical-variable-from-a-continuous-one?u=76281980&t=82)** Remember how that is classified as normal?
>
> **[1:25](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/solution-make-a-categorical-variable-from-a-continuous-one?u=76281980&t=85)** So I decided that normal would equal one and I'd set all the values for records that met that criterion to one.
>
> **[1:33](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/solution-make-a-categorical-variable-from-a-continuous-one?u=76281980&t=93)** As you can probably guess, I chose two, three, and four for the other values for the categories.
>
> **[1:40](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/solution-make-a-categorical-variable-from-a-continuous-one?u=76281980&t=100)** In the third line, you see how I put the boundaries in the brackets, the lower boundary of the range to recode is greater than or equal to 120.
>
> **[1:49](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/solution-make-a-categorical-variable-from-a-continuous-one?u=76281980&t=109)** And the second part of the criteria, the upper boundary of the range is less than 130.
>
> **[1:55](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/solution-make-a-categorical-variable-from-a-continuous-one?u=76281980&t=115)** And I code that as two.
>
> **[1:57](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/solution-make-a-categorical-variable-from-a-continuous-one?u=76281980&t=117)** And then I do the next range for three.
>
> **[2:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/solution-make-a-categorical-variable-from-a-continuous-one?u=76281980&t=120)** And then finally, the top range is just equal to or greater than 140 and those records get a four.
>
> **[2:08](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/solution-make-a-categorical-variable-from-a-continuous-one?u=76281980&t=128)** All right, let's just run this big clump of code.
>
> **[2:11](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/solution-make-a-categorical-variable-from-a-continuous-one?u=76281980&t=131)** I'll highlight and do Ctrl + R.
>
> **[2:17](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/solution-make-a-categorical-variable-from-a-continuous-one?u=76281980&t=137)** Okay, no errors, but there is still another part of the challenge where you had to check the coding on your new variable called BPGrp, with the original continuous variable called BPXOSY1.
>
> **[2:32](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/solution-make-a-categorical-variable-from-a-continuous-one?u=76281980&t=152)** See this table command?
>
> **[2:34](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/solution-make-a-categorical-variable-from-a-continuous-one?u=76281980&t=154)** That's what I'm doing here.
>
> **[2:35](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/solution-make-a-categorical-variable-from-a-continuous-one?u=76281980&t=155)** We are doing a two-way cross tabs between the two variables, even though the first one is continuous and adding the use NA equals C always option just to make sure R shows you the records where there is no value in the variable.
>
> **[2:49](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/solution-make-a-categorical-variable-from-a-continuous-one?u=76281980&t=169)** Remember the way we coded this, respondents who had a missing BPXOSY1 should get a nine in BPGrp.
>
> **[2:58](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/solution-make-a-categorical-variable-from-a-continuous-one?u=76281980&t=178)** Let's run this and check it.
>
> **[3:05](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/solution-make-a-categorical-variable-from-a-continuous-one?u=76281980&t=185)** Okay, we knew we were going to get a very long table, but let me quick scroll to the top.
>
> **[3:17](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/solution-make-a-categorical-variable-from-a-continuous-one?u=76281980&t=197)** Okay, as you can see, we have the first row, which is a respondent with a systolic blood pressure of 52.
>
> **[3:25](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/solution-make-a-categorical-variable-from-a-continuous-one?u=76281980&t=205)** I say a respondent because under the one column, we see a frequency of one, so 53 is pretty low.
>
> **[3:32](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/solution-make-a-categorical-variable-from-a-continuous-one?u=76281980&t=212)** Like people with a 53 systolic blood pressure might be dead.
>
> **[3:36](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/solution-make-a-categorical-variable-from-a-continuous-one?u=76281980&t=216)** So I wonder if this is an outlier.
>
> **[3:38](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/solution-make-a-categorical-variable-from-a-continuous-one?u=76281980&t=218)** Well, anyway, you might remember everyone with a systolic blood pressure less than 120 should be in the one column, let's check that.
>
> **[3:57](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/solution-make-a-categorical-variable-from-a-continuous-one?u=76281980&t=237)** All right, here we go.
>
> **[3:58](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/solution-make-a-categorical-variable-from-a-continuous-one?u=76281980&t=238)** See how for the systolic blood pressure of 119, there are 246 respondents in the one column, but zero respondents in the other columns?
>
> **[4:09](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/solution-make-a-categorical-variable-from-a-continuous-one?u=76281980&t=249)** Then when we get to 120, we see there are 175 people in the two column for 120.
>
> **[4:16](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/solution-make-a-categorical-variable-from-a-continuous-one?u=76281980&t=256)** And you can also see the next cut point where 130 starts the next category, which is three.
>
> **[4:23](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/solution-make-a-categorical-variable-from-a-continuous-one?u=76281980&t=263)** This is how you make sure you have recoded the continuous variable correctly.
>
> **[4:27](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/solution-make-a-categorical-variable-from-a-continuous-one?u=76281980&t=267)** So how did you do?
>
> **[4:29](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/solution-make-a-categorical-variable-from-a-continuous-one?u=76281980&t=269)** Did you make your new categorical variable correctly?
>
> **[4:32](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/solution-make-a-categorical-variable-from-a-continuous-one?u=76281980&t=272)** To end this challenge, here's a little final advice from an epidemiologist.
>
> **[4:37](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/solution-make-a-categorical-variable-from-a-continuous-one?u=76281980&t=277)** Please do your best to keep your systolic blood pressure low enough so you can stay in the normal category, your body will thank you for it.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), finally, (1), this, (1)
> **Env Vars:** bpxosy1 (3), bp_a (2), aha (1)
> **CLI Commands:** make (4)
> **Cross-References:** we talked about (1), in the next (1)
> **Definitions:** is a  (1), is an  (1)
> **Prerequisites:** make sure you have (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 5. Conducting Descriptive Analysis

#### Preparing categorical Table 1 shell
> [LinkedIn Learning](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/preparing-categorical-table-1-shell?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/preparing-categorical-table-1-shell?u=76281980&t=0)** - [Instructor] Now we begin our descriptive analysis.
>
> **[0:03](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/preparing-categorical-table-1-shell?u=76281980&t=3)** Welcome to Chapter Five, Section One, where we look carefully at the blank categorical Table 1 that we will be completing.
>
> **[0:11](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/preparing-categorical-table-1-shell?u=76281980&t=11)** In this section, I'll start by first explaining our order of operation, or the big picture process of how we are going to fill in these Table 1's.
>
> **[0:21](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/preparing-categorical-table-1-shell?u=76281980&t=21)** I will explain what I mean by "on stage" and "off stage" as we complete our Excel spreadsheet.
>
> **[0:27](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/preparing-categorical-table-1-shell?u=76281980&t=27)** Next, I will go over the anatomy of Table 1 categorical.
>
> **[0:31](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/preparing-categorical-table-1-shell?u=76281980&t=31)** I'll go over Table 1 continuous in the next section, because as I said before, they are in a different format.
>
> **[0:38](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/preparing-categorical-table-1-shell?u=76281980&t=38)** So let's get started.
>
> **[0:40](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/preparing-categorical-table-1-shell?u=76281980&t=40)** So to be honest, it's kind of a convoluted process.
>
> **[0:44](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/preparing-categorical-table-1-shell?u=76281980&t=44)** But the big picture of what we're going to do next is this: first, I made these table shells in Excel.
>
> **[0:51](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/preparing-categorical-table-1-shell?u=76281980&t=51)** You guessed it, tables that say what we want to put in them, but they don't have any numbers there yet.
>
> **[0:57](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/preparing-categorical-table-1-shell?u=76281980&t=57)** That way, we can organize what calculations we need to do in R. Remember, we can do easy percentages and data editing in Excel.
>
> **[1:06](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/preparing-categorical-table-1-shell?u=76281980&t=66)** So it's nice to do the heavy lifting in R, and then transfer that to Excel for formatting.
>
> **[1:11](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/preparing-categorical-table-1-shell?u=76281980&t=71)** Please understand I'm just showing you one way.
>
> **[1:14](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/preparing-categorical-table-1-shell?u=76281980&t=74)** You can make the tables to display your descriptive analyses using Excel.
>
> **[1:18](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/preparing-categorical-table-1-shell?u=76281980&t=78)** You could technically use other programs, like Word, to make your tables. This is just one approach.
>
> **[1:24](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/preparing-categorical-table-1-shell?u=76281980&t=84)** Table 1 presents univariate and bivariate analysis.
>
> **[1:28](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/preparing-categorical-table-1-shell?u=76281980&t=88)** But, because we have two different outcomes, we need to different Table 1's.
>
> **[1:33](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/preparing-categorical-table-1-shell?u=76281980&t=93)** One for our categorical variable, which is asthma, and one for our continuous variable, which is sleep duration.
>
> **[1:40](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/preparing-categorical-table-1-shell?u=76281980&t=100)** Okay, once we have those two table shells, we can fill in overall frequencies for the variables we are looking at. Both Table 1's call for this.
>
> **[1:50](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/preparing-categorical-table-1-shell?u=76281980&t=110)** Then, steps three and four are about doing R to fill in the tables.
>
> **[1:55](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/preparing-categorical-table-1-shell?u=76281980&t=115)** Step three is doing frequencies to fill in Table 1 for asthma, and step four is doing means and standard deviations of sleep duration to fill in Table 1 for sleep duration.
>
> **[2:06](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/preparing-categorical-table-1-shell?u=76281980&t=126)** Okay, are you ready? Let's go look at our categorical Table 1 shell.
>
> **[2:12](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/preparing-categorical-table-1-shell?u=76281980&t=132)** Remember, I showed you this briefly before in an earlier section. Now, I'm really going to dissect it for you.
>
> **[2:20](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/preparing-categorical-table-1-shell?u=76281980&t=140)** On the left, we have what I call the stage.
>
> **[2:23](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/preparing-categorical-table-1-shell?u=76281980&t=143)** This is where the displayed data will be copied into a table in Word, pretty it up a little, and then submit it as part of a manuscript or thesis or something like that.
>
> **[2:32](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/preparing-categorical-table-1-shell?u=76281980&t=152)** Then, on the right, we have what I call off stage or back stage, where we do ugly work to make what's on stage pretty.
>
> **[2:40](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/preparing-categorical-table-1-shell?u=76281980&t=160)** That's where all that ugly yellow is.
>
> **[2:42](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/preparing-categorical-table-1-shell?u=76281980&t=162)** So let's look at our columns on stage.
>
> **[2:45](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/preparing-categorical-table-1-shell?u=76281980&t=165)** We start with category, and then level, and then we have these Total n and percent.
>
> **[2:51](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/preparing-categorical-table-1-shell?u=76281980&t=171)** So here are the frequencies of these variables for everyone in the analytic data set.
>
> **[2:56](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/preparing-categorical-table-1-shell?u=76281980&t=176)** So I put all at the top, and then our exposure next, which is alcohol. So our goal is to put in the total and n percent column and the total n and percent of each of these alcohol categories.
>
> **[3:11](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/preparing-categorical-table-1-shell?u=76281980&t=191)** Now, let's scroll down and look at the Y axis of this table.
>
> **[3:16](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/preparing-categorical-table-1-shell?u=76281980&t=196)** This is where your data dictionary totally comes in handy.
>
> **[3:20](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/preparing-categorical-table-1-shell?u=76281980&t=200)** Remember all those grouping variables you made?
>
> **[3:22](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/preparing-categorical-table-1-shell?u=76281980&t=202)** This is what we needed them for.
>
> **[3:25](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/preparing-categorical-table-1-shell?u=76281980&t=205)** Table 1. Now we will use those groups.
>
> **[3:28](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/preparing-categorical-table-1-shell?u=76281980&t=208)** I arrange them in the order I like: demographics first, then socioeconomic stuff, and then risk factors.
>
> **[3:35](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/preparing-categorical-table-1-shell?u=76281980&t=215)** So that's what's on the Y axis.
>
> **[3:38](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/preparing-categorical-table-1-shell?u=76281980&t=218)** Now, let's go back to our columns.
>
> **[3:40](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/preparing-categorical-table-1-shell?u=76281980&t=220)** I explained the total n percent column, but now look. We have two columns: Has Asthma n percent and No Asthma n percent.
>
> **[3:50](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/preparing-categorical-table-1-shell?u=76281980&t=230)** So what we're going to do is put the n and percent of all the people who have asthma, who are in these different categories.
>
> **[3:57](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/preparing-categorical-table-1-shell?u=76281980&t=237)** And then we'll do the same with those who do not have asthma. So, if our hypothesis is correct, we'd expect to see that among the asthma people, there would be a greater proportion in the weekly drinker category.
>
> **[4:10](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/preparing-categorical-table-1-shell?u=76281980&t=250)** And among the non-asthma people, we'd expect a smaller percentage to be among the weekly drinker category.
>
> **[4:16](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/preparing-categorical-table-1-shell?u=76281980&t=256)** Maybe they are concentrated in the non-drinkers or the monthly drinkers.
>
> **[4:21](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/preparing-categorical-table-1-shell?u=76281980&t=261)** But that's just our hypothesis.
>
> **[4:22](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/preparing-categorical-table-1-shell?u=76281980&t=262)** We don't know the answer yet.
>
> **[4:24](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/preparing-categorical-table-1-shell?u=76281980&t=264)** And that's why we make Table 1.
>
> **[4:26](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/preparing-categorical-table-1-shell?u=76281980&t=266)** To see if we can see if there's an imbalance.
>
> **[4:28](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/preparing-categorical-table-1-shell?u=76281980&t=268)** For example, if you studied migraine yes no, instead of asthma yes no, your migraine group always has a greater percentage of women.
>
> **[4:37](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/preparing-categorical-table-1-shell?u=76281980&t=277)** Because being female is a risk factor for having migraines.
>
> **[4:40](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/preparing-categorical-table-1-shell?u=76281980&t=280)** That's why it's nice to do this Table 1 to see if you have anything that looks like a risk factor for asthma.
>
> **[4:46](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/preparing-categorical-table-1-shell?u=76281980&t=286)** Okay, now let's look off stage, in this yellow part.
>
> **[4:50](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/preparing-categorical-table-1-shell?u=76281980&t=290)** Let's start at the top row. These are our denominators.
>
> **[4:54](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/preparing-categorical-table-1-shell?u=76281980&t=294)** The total n, then total asthma people, then total non-asthma people.
>
> **[5:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/preparing-categorical-table-1-shell?u=76281980&t=300)** Next, see these free columns that are in yellow?
>
> **[5:03](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/preparing-categorical-table-1-shell?u=76281980&t=303)** They are yellow because that's what we're going to fill in.
>
> **[5:06](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/preparing-categorical-table-1-shell?u=76281980&t=306)** If we do that, it will automatically calculate the percentages to the right of the yellow.
>
> **[5:12](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/preparing-categorical-table-1-shell?u=76281980&t=312)** Then over on stage, this will display pretty nicely.
>
> **[5:15](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/preparing-categorical-table-1-shell?u=76281980&t=315)** You'll have a little cleanup in Word, but it's minimal.
>
> **[5:19](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/preparing-categorical-table-1-shell?u=76281980&t=319)** You'll see what I mean. Just a quick note: I made this Excel sheet to make it easy to display data.
>
> **[5:24](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/preparing-categorical-table-1-shell?u=76281980&t=324)** We can click in one of the cell in the main table on stage and see some formulas.
>
> **[5:30](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/preparing-categorical-table-1-shell?u=76281980&t=330)** You are welcome to build this table how you want.
>
> **[5:33](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/preparing-categorical-table-1-shell?u=76281980&t=333)** Just so it ends up looking like this display.
>
> **[5:36](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/preparing-categorical-table-1-shell?u=76281980&t=336)** I'm giving you this template because I found, with this Excel helper, making Table 1 goes a lot faster.
>
> **[5:42](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/preparing-categorical-table-1-shell?u=76281980&t=342)** Now, I just want to point out this last column about the chi-squared, which we'll go over later in the bivariate test section.
>
> **[5:51](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/preparing-categorical-table-1-shell?u=76281980&t=351)** So in this lecture, I first went over our big picture plans for completing our Table 1's.
>
> **[5:57](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/preparing-categorical-table-1-shell?u=76281980&t=357)** Next, I took you on a tour through our categorical Table 1, showing you what's both on stage and off stage, and the details of the categorical format for Table 1.
>
> **[6:06](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/preparing-categorical-table-1-shell?u=76281980&t=366)** The next section will cover the continuous format for Table 1.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), this: (1), this. (1), for. (1)
> **CLI Commands:** make (5)
> **Analogies:** picture (3), for example (1)
> **Cross-References:** in the next (1), go back to (1), later in (1)
> **UI Navigation:** scroll down (1)
> **Exercise Files:** template (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Preparing continuous Table 1 shell
> [LinkedIn Learning](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/preparing-continuous-table-1-shell?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/preparing-continuous-table-1-shell?u=76281980&t=0)** - [Lecturer] Welcome to chapter five, section two, where we will now review a blank continuous Table 1 together.
>
> **[0:07](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/preparing-continuous-table-1-shell?u=76281980&t=7)** Remember our big picture?
>
> **[0:09](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/preparing-continuous-table-1-shell?u=76281980&t=9)** First we make these table shells, then we analyze the data and enter them into the table shells for presentation.
>
> **[0:16](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/preparing-continuous-table-1-shell?u=76281980&t=16)** We fill in numbers off stage and they get reported on stage.
>
> **[0:21](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/preparing-continuous-table-1-shell?u=76281980&t=21)** Last section covered Table 1 categorical and this one covers Table 1 continuous, because, as I said before, they are in a different format.
>
> **[0:30](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/preparing-continuous-table-1-shell?u=76281980&t=30)** I'll remind you how they are different with a quick comparison.
>
> **[0:33](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/preparing-continuous-table-1-shell?u=76281980&t=33)** So let's get started.
>
> **[0:34](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/preparing-continuous-table-1-shell?u=76281980&t=34)** Okay, are you ready?
>
> **[0:35](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/preparing-continuous-table-1-shell?u=76281980&t=35)** Let's go look at our continuous table shell.
>
> **[0:39](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/preparing-continuous-table-1-shell?u=76281980&t=39)** Okay, you'll see the stage looks similar, but different, when compared to the categorical stage, similar in that the list on the left looks the same and also we have these overall frequencies I showed you in the last table.
>
> **[0:52](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/preparing-continuous-table-1-shell?u=76281980&t=52)** If you were doing two tables in the same manuscript, you can probably leave off this column, because you are repeating information.
>
> **[1:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/preparing-continuous-table-1-shell?u=76281980&t=60)** But if this table is standing alone, you should include this overall frequency column.
>
> **[1:05](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/preparing-continuous-table-1-shell?u=76281980&t=65)** But let's look at our continuous columns more closely, to see the differences from the last categorical table.
>
> **[1:11](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/preparing-continuous-table-1-shell?u=76281980&t=71)** The column say mean and standard deviation, or sd, for short.
>
> **[1:16](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/preparing-continuous-table-1-shell?u=76281980&t=76)** So we are going to be putting the mean and sd of Sleep Duration here.
>
> **[1:20](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/preparing-continuous-table-1-shell?u=76281980&t=80)** And again, I'll get to t-test and ANOVA in a later section.
>
> **[1:25](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/preparing-continuous-table-1-shell?u=76281980&t=85)** Okay, now over off stage.
>
> **[1:27](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/preparing-continuous-table-1-shell?u=76281980&t=87)** You probably recognize the n column, that's where we'll put the overall frequencies and then that percentage will calculate and we'll get our nice n% over on stage.
>
> **[1:39](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/preparing-continuous-table-1-shell?u=76281980&t=99)** But also notice in yellow we have mean and SD for each of the levels of each categorical variable.
>
> **[1:46](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/preparing-continuous-table-1-shell?u=76281980&t=106)** That's what we will be calculating in R and copying into here.
>
> **[1:50](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/preparing-continuous-table-1-shell?u=76281980&t=110)** So let's recap the formats of our Table 1s, they both have univariate and bivariate descriptive analyses, the categorical one reports frequencies and percentages and has a blank spot ready for the results of our bivariate tests for categorical data.
>
> **[2:05](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/preparing-continuous-table-1-shell?u=76281980&t=125)** And because we have those grouping variables split up by level or strata, we have a stratified analysis.
>
> **[2:12](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/preparing-continuous-table-1-shell?u=76281980&t=132)** The continuous table one is similar, only it has summary statistics for continuous data, means and standard deviations, but it also has a space for bivariate tests for continuous data and it it also stratified.
>
> **[2:27](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/preparing-continuous-table-1-shell?u=76281980&t=147)** So, in this movie, I again reminded you of our big picture plans for completing our Table 1s.
>
> **[2:33](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/preparing-continuous-table-1-shell?u=76281980&t=153)** Next, I showed you the differences between Table 1s that are for categorical outcomes and Table 1s for our continuous outcomes.
>
> **[2:42](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/preparing-continuous-table-1-shell?u=76281980&t=162)** All right, let's now move on to filling in these Table 1s.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5)
> **Analogies:** picture (2)
> **CLI Commands:** make (1)
> **Env Vars:** anova (1)
> **Cross-References:** in the last (1)
> **Speakers:** - [lecturer] (1)

#### Adding overall frequencies to categorical Table 1
> [LinkedIn Learning](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-overall-frequencies-to-categorical-table-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-overall-frequencies-to-categorical-table-1?u=76281980&t=1)** - [Instructor] Welcome to Chapter 5, Section 3 where we start filling in our Table 1s.
>
> **[0:06](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-overall-frequencies-to-categorical-table-1?u=76281980&t=6)** So, both Table 1s, the categorical format and the continuous format, call for overall frequencies in each stratum.
>
> **[0:15](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-overall-frequencies-to-categorical-table-1?u=76281980&t=15)** For example, stratifying by sex, male and female, and stratifying by Hispanic status.
>
> **[0:22](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-overall-frequencies-to-categorical-table-1?u=76281980&t=22)** So what we do in this section is these univariate calculations, because there is only one variable being used at a time.
>
> **[0:29](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-overall-frequencies-to-categorical-table-1?u=76281980&t=29)** We have to put this info in both Table 1s, but I'll start by demonstrating doing asthma and alcohol frequencies and putting them in categorical Table 1.
>
> **[0:39](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-overall-frequencies-to-categorical-table-1?u=76281980&t=39)** Ready to start filling in the tables?
>
> **[0:41](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-overall-frequencies-to-categorical-table-1?u=76281980&t=41)** Let's go to our R code.
>
> **[0:43](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-overall-frequencies-to-categorical-table-1?u=76281980&t=43)** Okay, we'll ignore this read code at the top because we already have our analytic data set in memory, and we will get right to the analysis.
>
> **[0:51](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-overall-frequencies-to-categorical-table-1?u=76281980&t=51)** This is where your data dictionary is so helpful.
>
> **[0:54](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-overall-frequencies-to-categorical-table-1?u=76281980&t=54)** Let's start with asthma.
>
> **[0:56](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-overall-frequencies-to-categorical-table-1?u=76281980&t=56)** See the code?
>
> **[0:57](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-overall-frequencies-to-categorical-table-1?u=76281980&t=57)** We make a frequency table named AsthmaFreq.
>
> **[1:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-overall-frequencies-to-categorical-table-1?u=76281980&t=60)** Then, I listed it here so we could see it.
>
> **[1:04](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-overall-frequencies-to-categorical-table-1?u=76281980&t=64)** If we make a table out of it, it doesn't display unless you call the table.
>
> **[1:08](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-overall-frequencies-to-categorical-table-1?u=76281980&t=68)** Remember when we did this when we did our variable distributions in the last chapter?
>
> **[1:13](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-overall-frequencies-to-categorical-table-1?u=76281980&t=73)** But then, I want to write out the AsthmaFreq table as a CSV, and you will say, why do you want to do that?
>
> **[1:21](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-overall-frequencies-to-categorical-table-1?u=76281980&t=81)** Well, it's a great cheat for helping you fill in Table 1, as you'll see.
>
> **[1:26](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-overall-frequencies-to-categorical-table-1?u=76281980&t=86)** Notice that we do the opposite of a read command.
>
> **[1:28](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-overall-frequencies-to-categorical-table-1?u=76281980&t=88)** We do a write.csv, and then make sure you name the CSV you write out the same as the R table, or you will go bonkers trying to remember what you were doing.
>
> **[1:39](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-overall-frequencies-to-categorical-table-1?u=76281980&t=99)** This will land in the directory we pointed to when we did change dir, so the data directory where the analytic data set is.
>
> **[1:47](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-overall-frequencies-to-categorical-table-1?u=76281980&t=107)** It's also where we put all the other data we have been writing in and out.
>
> **[1:51](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-overall-frequencies-to-categorical-table-1?u=76281980&t=111)** This is essentially the same code we used to visualize our asthma distribution last time, but let's run the snippet of code anyway and see what happens.
>
> **[2:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-overall-frequencies-to-categorical-table-1?u=76281980&t=120)** Let's highlight and Ctrl R.
>
> **[2:02](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-overall-frequencies-to-categorical-table-1?u=76281980&t=122)** See, here are our frequencies.
>
> **[2:05](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-overall-frequencies-to-categorical-table-1?u=76281980&t=125)** We have 5, 3, 4, 3 asthma people, and 5, 2, 7, 8, 8 no asthma people.
>
> **[2:11](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-overall-frequencies-to-categorical-table-1?u=76281980&t=131)** Okay, let's go over to our data folder where our AsthmaFreq CSV is, and open it up.
>
> **[2:17](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-overall-frequencies-to-categorical-table-1?u=76281980&t=137)** Here it is in our folder.
>
> **[2:18](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-overall-frequencies-to-categorical-table-1?u=76281980&t=138)** Let's open it.
>
> **[2:20](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-overall-frequencies-to-categorical-table-1?u=76281980&t=140)** Notice how this table is constructed.
>
> **[2:23](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-overall-frequencies-to-categorical-table-1?u=76281980&t=143)** Var1 is asthma four, and see, it is out of order from how we probably think about it, so keep that in mind.
>
> **[2:30](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-overall-frequencies-to-categorical-table-1?u=76281980&t=150)** Now let's see where these numbers belong on our categorical Table 1.
>
> **[2:35](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-overall-frequencies-to-categorical-table-1?u=76281980&t=155)** Here's our Categorical Table 1 show.
>
> **[2:38](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-overall-frequencies-to-categorical-table-1?u=76281980&t=158)** We are going to be filling in the yellow cells with the raw frequencies, and then they will display nicely in the white cells to the left.
>
> **[2:45](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-overall-frequencies-to-categorical-table-1?u=76281980&t=165)** At the top, I needed to add the total N in the data set.
>
> **[2:49](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-overall-frequencies-to-categorical-table-1?u=76281980&t=169)** Remember our magic number, 58131, and see how I put it in this top cell?
>
> **[2:55](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-overall-frequencies-to-categorical-table-1?u=76281980&t=175)** And as you can see on the left in the white part under Total n %, it is reported as 58131, which is 100%.
>
> **[3:04](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-overall-frequencies-to-categorical-table-1?u=76281980&t=184)** Next, I had to fill in the numbers next to that one in yellow.
>
> **[3:08](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-overall-frequencies-to-categorical-table-1?u=76281980&t=188)** The total asthma people and the total no asthma people.
>
> **[3:13](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-overall-frequencies-to-categorical-table-1?u=76281980&t=193)** Just like we saw from our frequency table, I already typed those in.
>
> **[3:17](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-overall-frequencies-to-categorical-table-1?u=76281980&t=197)** This is how we begin.
>
> **[3:19](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-overall-frequencies-to-categorical-table-1?u=76281980&t=199)** The rest of the work is more routine.
>
> **[3:21](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-overall-frequencies-to-categorical-table-1?u=76281980&t=201)** Let's go back to our code.
>
> **[3:23](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-overall-frequencies-to-categorical-table-1?u=76281980&t=203)** Remember our grouping variable for alcohol group called ALCGRP?
>
> **[3:29](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-overall-frequencies-to-categorical-table-1?u=76281980&t=209)** This is where you just love your data dictionary.
>
> **[3:31](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-overall-frequencies-to-categorical-table-1?u=76281980&t=211)** Okay, we'll do the exact same code we just did, only using ALCGRP instead of asthma four, and we output a table called AlcFreq.
>
> **[3:41](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-overall-frequencies-to-categorical-table-1?u=76281980&t=221)** Let's highlight and run the code, Ctrl R.
>
> **[3:44](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-overall-frequencies-to-categorical-table-1?u=76281980&t=224)** Now, let's open the table.
>
> **[3:46](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-overall-frequencies-to-categorical-table-1?u=76281980&t=226)** Here is AlcFreq.
>
> **[3:48](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-overall-frequencies-to-categorical-table-1?u=76281980&t=228)** Let's open it up.
>
> **[3:50](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-overall-frequencies-to-categorical-table-1?u=76281980&t=230)** See how the frequencies are in order?
>
> **[3:53](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-overall-frequencies-to-categorical-table-1?u=76281980&t=233)** 1, 2, 3, in order of non-drinker, monthly drinker, and weekly drinker.
>
> **[3:59](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-overall-frequencies-to-categorical-table-1?u=76281980&t=239)** Let's highlight these frequencies and do Ctrl C to copy.
>
> **[4:03](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-overall-frequencies-to-categorical-table-1?u=76281980&t=243)** Back at our spreadsheet, we now place our cursor on the top yellow cell of the alcohol group, where the alcohol frequencies go, but let's not use Ctrl V.
>
> **[4:13](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-overall-frequencies-to-categorical-table-1?u=76281980&t=253)** Instead, we need to paste values, so we'll choose the Paste Arrow, and choose the icon under Paste Values on the left side.
>
> **[4:23](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-overall-frequencies-to-categorical-table-1?u=76281980&t=263)** See how the overall frequencies show up on the left.
>
> **[4:27](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-overall-frequencies-to-categorical-table-1?u=76281980&t=267)** And then, we essentially do that a bunch more times, one with each variable.
>
> **[4:32](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-overall-frequencies-to-categorical-table-1?u=76281980&t=272)** Now, I know what you're thinking.
>
> **[4:34](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-overall-frequencies-to-categorical-table-1?u=76281980&t=274)** We need a macro.
>
> **[4:35](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-overall-frequencies-to-categorical-table-1?u=76281980&t=275)** But let's do that in the next section.
>
> **[4:37](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-overall-frequencies-to-categorical-table-1?u=76281980&t=277)** Okay, we started filling in our categorical Table 1.
>
> **[4:41](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-overall-frequencies-to-categorical-table-1?u=76281980&t=281)** First, we revisited some of the code we have used earlier in the course to output CSVs that have our univariate frequencies.
>
> **[4:49](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-overall-frequencies-to-categorical-table-1?u=76281980&t=289)** I demonstrated doing asthma and doing alcohol and putting those on categorical Table 1, but now, we need a macro to do the rest.
>
> **[4:57](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-overall-frequencies-to-categorical-table-1?u=76281980&t=297)** That's in the next section.

> [!info]- Semantic Content
>
> **Code Keywords:** let (14)
> **Env Vars:** csv (3), alcgrp (2)
> **Cross-References:** in the next (2), in the last (1), go back to (1), earlier in (1)
> **CLI Commands:** make (3)
> **UI Navigation:** go to (1), open the (1)
> **Analogies:** for example (1), just like (1)
> **File Paths:** write.csv (1)
> **Speakers:** - [instructor] (1)

#### Making a frequency macro
> [LinkedIn Learning](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-frequency-macro?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-frequency-macro?u=76281980&t=0)** - [Narrator] To save us time and effort writing code for all of our frequencies, in this movie we will cover making a macro to do this work.
>
> **[0:08](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-frequency-macro?u=76281980&t=8)** Welcome to chapter five, section four.
>
> **[0:11](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-frequency-macro?u=76281980&t=11)** In the last section, we made some code that output overall frequencies of asthma and of alcohol consumption into CSVs.
>
> **[0:20](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-frequency-macro?u=76281980&t=20)** We opened them up and copy/pasted them into categorical table one.
>
> **[0:25](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-frequency-macro?u=76281980&t=25)** But then, we realized we had to do that a zillion more times.
>
> **[0:29](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-frequency-macro?u=76281980&t=29)** So this movie will explain how to make a macro.
>
> **[0:32](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-frequency-macro?u=76281980&t=32)** We will use the gtools library so we can use the defmacro command.
>
> **[0:37](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-frequency-macro?u=76281980&t=37)** I'll show you how to set up the arguments in the macro, guided by the code we wrote in the last section which we know works.
>
> **[0:45](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-frequency-macro?u=76281980&t=45)** And I'll show you how to then load the macro and call it up a bunch of times.
>
> **[0:50](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-frequency-macro?u=76281980&t=50)** To do the macro, you have to load the package gtools, and then we'll call up gtools in our library.
>
> **[0:57](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-frequency-macro?u=76281980&t=57)** Then after that, we will use defmacro to define the macro.
>
> **[1:01](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-frequency-macro?u=76281980&t=61)** So let's look at our code.
>
> **[1:02](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-frequency-macro?u=76281980&t=62)** What changes each time?
>
> **[1:04](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-frequency-macro?u=76281980&t=64)** Well, the input variable changes each time.
>
> **[1:07](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-frequency-macro?u=76281980&t=67)** So let's have a variable called InputVar.
>
> **[1:10](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-frequency-macro?u=76281980&t=70)** And the output table name changes each time, so that's a variable in our macro.
>
> **[1:14](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-frequency-macro?u=76281980&t=74)** Then I add this prefix.
>
> **[1:16](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-frequency-macro?u=76281980&t=76)** This will be what our table that is written out as a CSV is named.
>
> **[1:21](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-frequency-macro?u=76281980&t=81)** So let's call our macro FreqTbl.
>
> **[1:24](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-frequency-macro?u=76281980&t=84)** So it's like we are making our own little procedure called FreqTbl with three arguments: OutputTable, InputVar, and CSVTable.
>
> **[1:33](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-frequency-macro?u=76281980&t=93)** We have our table command, but we still need to write out a CSV after each one.
>
> **[1:38](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-frequency-macro?u=76281980&t=98)** So let's put that next and write it out.
>
> **[1:40](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-frequency-macro?u=76281980&t=100)** The way you can get the macro to observe that you have two lines of code is by using a semicolon.
>
> **[1:46](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-frequency-macro?u=76281980&t=106)** Then after expr* and in between the curly brackets, we put the code we've been using above.
>
> **[1:52](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-frequency-macro?u=76281980&t=112)** So, let's highlight the gtools library call and our new macro and do Control + R to run.
>
> **[2:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-frequency-macro?u=76281980&t=120)** And our macro FreqTbl is defined.
>
> **[2:03](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-frequency-macro?u=76281980&t=123)** Now let's use our new FreqTbl.
>
> **[2:06](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-frequency-macro?u=76281980&t=126)** Let's use it on X_AGE_G which was our grouping variable for age since we already did OutGroup above.
>
> **[2:14](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-frequency-macro?u=76281980&t=134)** We'll call the output table AgeFreq.
>
> **[2:18](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-frequency-macro?u=76281980&t=138)** Now let's run it by highlighting it and doing Control + R.
>
> **[2:21](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-frequency-macro?u=76281980&t=141)** Great.
>
> **[2:22](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-frequency-macro?u=76281980&t=142)** Now let's go look at our Data folder to get our CSV that was output there.
>
> **[2:27](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-frequency-macro?u=76281980&t=147)** Here it is.
>
> **[2:27](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-frequency-macro?u=76281980&t=147)** Let's open it.
>
> **[2:30](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-frequency-macro?u=76281980&t=150)** It looks a lot like our alcohol frequency CSV from the last movie because all the frequencies are in order here, from low age to high age.
>
> **[2:40](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-frequency-macro?u=76281980&t=160)** Let's highlight these and do Control + C to copy.
>
> **[2:44](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-frequency-macro?u=76281980&t=164)** Back at our Table 1, now we can place our cursor in the top cell for Age and choose Paste, Paste Values and here they all come in.
>
> **[2:55](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-frequency-macro?u=76281980&t=175)** You'll see that I run this macro below over and over, and I do it in the order of the variables on the Table 1 spreadsheet.
>
> **[3:03](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-frequency-macro?u=76281980&t=183)** Let's highlight and run all these macros.
>
> **[3:07](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-frequency-macro?u=76281980&t=187)** Great, now let's take a peek at our Data folder.
>
> **[3:10](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-frequency-macro?u=76281980&t=190)** Here they are, all of them.
>
> **[3:12](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-frequency-macro?u=76281980&t=192)** And you guessed it.
>
> **[3:14](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-frequency-macro?u=76281980&t=194)** You have to open each one and do the copy thing and then go to Table 1 and do the paste values thing.
>
> **[3:21](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-frequency-macro?u=76281980&t=201)** That's how you get all of the overall frequencies into your Categorical Table 1.
>
> **[3:26](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-frequency-macro?u=76281980&t=206)** Okay, we are done with this code.
>
> **[3:28](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-frequency-macro?u=76281980&t=208)** You'll see I named it 210_Table 1 overall frequencies.
>
> **[3:35](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-frequency-macro?u=76281980&t=215)** How nice to have macros do your repetitive work for you.
>
> **[3:39](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-frequency-macro?u=76281980&t=219)** We used the gtools package and the defmacro command to make a macro called FreqTbl.
>
> **[3:44](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-frequency-macro?u=76281980&t=224)** Then we called up the macro on the Age variable and that output a CSV.
>
> **[3:50](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-frequency-macro?u=76281980&t=230)** We copied the frequencies out of that and then used paste values to get them into Table 1 Categorical.
>
> **[3:56](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-frequency-macro?u=76281980&t=236)** These output CSVs essentially have all the overall frequencies in our dataset.
>
> **[4:02](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/making-a-frequency-macro?u=76281980&t=242)** Next, I'll show you how to use those CSVs to copy into Table 1 Continuous.

> [!info]- Semantic Content
>
> **Code Keywords:** let (13)
> **Env Vars:** csv (5), x_age_g (1)
> **CLI Commands:** make (2)
> **Cross-References:** in the last (2)
> **UI Navigation:** go to (1)
> **Analogies:** it's like (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [narrator] (1)

#### Adding overall frequencies to continuous Table 1
> [LinkedIn Learning](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-overall-frequencies-to-continuous-table-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-overall-frequencies-to-continuous-table-1?u=76281980&t=0)** - [Lecturer] In this section, we update the Continuous Table 1 by adding overall frequencies.
>
> **[0:06](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-overall-frequencies-to-continuous-table-1?u=76281980&t=6)** In previous sections, we developed a macro that allowed us to run overall frequencies and output them as CSVs into our Data folder.
>
> **[0:15](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-overall-frequencies-to-continuous-table-1?u=76281980&t=15)** Before, we opened each of these CSVs and copied the overall frequencies into our categorical Table 1.
>
> **[0:23](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-overall-frequencies-to-continuous-table-1?u=76281980&t=23)** In this movie, we will open these CSVs again, but this time copy and paste them into our continuous Table 1.
>
> **[0:30](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-overall-frequencies-to-continuous-table-1?u=76281980&t=30)** So let's look at our continuous Table 1 shell to reminder ourselves where we are going.
>
> **[0:36](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-overall-frequencies-to-continuous-table-1?u=76281980&t=36)** So, all we have here is our total so far, our magic number, 58131, and see how it is here, in the yellow part and then over here, on the white part, it displays very nicely.
>
> **[0:49](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-overall-frequencies-to-continuous-table-1?u=76281980&t=49)** So our goal is to go get and copy and paste the frequencies from our CSVs into this yellow column, this one under n.
>
> **[0:57](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-overall-frequencies-to-continuous-table-1?u=76281980&t=57)** Let's start with our AlcFreq.
>
> **[1:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-overall-frequencies-to-continuous-table-1?u=76281980&t=60)** Here it is, let's open our CSV AlcFreq, which is left over from the last code.
>
> **[1:06](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-overall-frequencies-to-continuous-table-1?u=76281980&t=66)** We see here are our frequencies.
>
> **[1:08](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-overall-frequencies-to-continuous-table-1?u=76281980&t=68)** Let's highlight and do Control + C and copy them.
>
> **[1:12](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-overall-frequencies-to-continuous-table-1?u=76281980&t=72)** Now, let's place our cursor on the top cell in the yellow, in the Alcohol group and choose Paste Values.
>
> **[1:20](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-overall-frequencies-to-continuous-table-1?u=76281980&t=80)** I'm also going to demonstrate adding asthma frequencies.
>
> **[1:25](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-overall-frequencies-to-continuous-table-1?u=76281980&t=85)** Let's go over to the Data folder again.
>
> **[1:28](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-overall-frequencies-to-continuous-table-1?u=76281980&t=88)** Here, in the Data folder, let's open AsthmaFreq.
>
> **[1:32](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-overall-frequencies-to-continuous-table-1?u=76281980&t=92)** Okay, notice how this table is constructed, Var1 is asthma four and see it is out of order.
>
> **[1:39](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-overall-frequencies-to-continuous-table-1?u=76281980&t=99)** In our shell we have yes first and this one is no first.
>
> **[1:44](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-overall-frequencies-to-continuous-table-1?u=76281980&t=104)** So we'll just sort this table in order then copy out the frequencies.
>
> **[1:48](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-overall-frequencies-to-continuous-table-1?u=76281980&t=108)** I'll highlight the cells, then choose the Data tab and then the Sort button.
>
> **[1:55](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-overall-frequencies-to-continuous-table-1?u=76281980&t=115)** We'll make sure My data has headers is checked and choose column Var1 and Order, Largest to Smallest.
>
> **[2:04](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-overall-frequencies-to-continuous-table-1?u=76281980&t=124)** Now it's in order.
>
> **[2:06](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-overall-frequencies-to-continuous-table-1?u=76281980&t=126)** Let's highlight these two frequencies and do Control + C for copy.
>
> **[2:11](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-overall-frequencies-to-continuous-table-1?u=76281980&t=131)** Then let's put our cursor here, in the top of the asthma variables and do Paste Values.
>
> **[2:19](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-overall-frequencies-to-continuous-table-1?u=76281980&t=139)** So, this is kind of like the last movie, you have to do this over and over.
>
> **[2:24](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-overall-frequencies-to-continuous-table-1?u=76281980&t=144)** Let me show you one with a completed column.
>
> **[2:27](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-overall-frequencies-to-continuous-table-1?u=76281980&t=147)** Here, now you have all your overall frequencies in your continuous table.
>
> **[2:34](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-overall-frequencies-to-continuous-table-1?u=76281980&t=154)** So now, in this movie, we were able to reuse our old frequency CSVs, output it in previous movies to fill in our overall frequencies in continuous Table 1.
>
> **[2:45](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-overall-frequencies-to-continuous-table-1?u=76281980&t=165)** We opened up the Alcohol CSV and copy and pasted those frequencies in and we also did the asthma frequencies, so I could demonstrate them.
>
> **[2:54](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-overall-frequencies-to-continuous-table-1?u=76281980&t=174)** Then I showed you what it looks like if you have the patience to go through all those frequencies and fill them in.
>
> **[3:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-overall-frequencies-to-continuous-table-1?u=76281980&t=180)** Join me in the next section where we continue to add data to our Table 1s.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), continue (1)
> **Env Vars:** csv (2)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Analogies:** kind of like (1)
> **Speakers:** - [lecturer] (1)

#### Completing categorical Table 1
> [LinkedIn Learning](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-categorical-table-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-categorical-table-1?u=76281980&t=0)** - [Instructor] Now we move on to complete our categorical table one.
>
> **[0:04](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-categorical-table-1?u=76281980&t=4)** Welcome to chapter five section six.
>
> **[0:08](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-categorical-table-1?u=76281980&t=8)** Remember, we just made frequency code overall for univariate frequencies of the exposure in each confounder.
>
> **[0:16](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-categorical-table-1?u=76281980&t=16)** So we can use that code as a template.
>
> **[0:18](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-categorical-table-1?u=76281980&t=18)** It has a nice macro we can copy in it.
>
> **[0:22](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-categorical-table-1?u=76281980&t=22)** Next, I'm going to show you how to run separate bivariate frequencies for the portion of the data set where people report having asthma and then for the rest of the data set, the no asthma people.
>
> **[0:34](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-categorical-table-1?u=76281980&t=34)** As we did before, we will output CSVs and then copy paste the results into the categorical table one shell.
>
> **[0:43](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-categorical-table-1?u=76281980&t=43)** Let's go look at our categorical table one and see how it's doing.
>
> **[0:47](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-categorical-table-1?u=76281980&t=47)** As you can see, we need to fill in Freq Asthma and Freq No Asthma.
>
> **[0:53](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-categorical-table-1?u=76281980&t=53)** Remember for each of these, the denominator of the percentage is the column total, having asthma or not having asthma.
>
> **[1:01](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-categorical-table-1?u=76281980&t=61)** So what are we going to do?
>
> **[1:02](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-categorical-table-1?u=76281980&t=62)** Reuse our code.
>
> **[1:04](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-categorical-table-1?u=76281980&t=64)** See these freqs in our Data folder.
>
> **[1:07](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-categorical-table-1?u=76281980&t=67)** Let's just erase all these freq CSVs.
>
> **[1:10](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-categorical-table-1?u=76281980&t=70)** We don't need them now.
>
> **[1:11](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-categorical-table-1?u=76281980&t=71)** They were our overall freqs and we already got the data off of them in earlier sections.
>
> **[1:17](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-categorical-table-1?u=76281980&t=77)** We'll just throw them away and if we need to regenerate them later, we can.
>
> **[1:23](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-categorical-table-1?u=76281980&t=83)** Now, how I created this code is I did Save As using the 210 code, which did the overall frequencies, and I made it 215 and I called it Asthma frequencies.
>
> **[1:38](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-categorical-table-1?u=76281980&t=98)** Now first thing, we'll subset the data by ASTHMA4 into the data set called asthmaonly.
>
> **[1:45](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-categorical-table-1?u=76281980&t=105)** I sneaked that code in here immediately after I did the Save As.
>
> **[1:49](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-categorical-table-1?u=76281980&t=109)** That was my first edit.
>
> **[1:51](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-categorical-table-1?u=76281980&t=111)** We can check the frequency of ASTHMA4 and asthmaonly to convince ourselves we did it right.
>
> **[1:57](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-categorical-table-1?u=76281980&t=117)** Remember that private variable distribution spreadsheet we made?
>
> **[2:01](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-categorical-table-1?u=76281980&t=121)** So here's our subset command and a table command and an end row command.
>
> **[2:06](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-categorical-table-1?u=76281980&t=126)** Let's run those.
>
> **[2:09](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-categorical-table-1?u=76281980&t=129)** Our number is 5343.
>
> **[2:12](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-categorical-table-1?u=76281980&t=132)** That's exactly what we expected because that's what we put on our variable distribution sheet for the number of people who have asthma.
>
> **[2:19](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-categorical-table-1?u=76281980&t=139)** Now, let's look down at the rest of my code.
>
> **[2:22](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-categorical-table-1?u=76281980&t=142)** Okay, now guess what I did?
>
> **[2:25](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-categorical-table-1?u=76281980&t=145)** Exactly, I changed analytic to asthmaonly and ran everything.
>
> **[2:31](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-categorical-table-1?u=76281980&t=151)** I'll do that now.
>
> **[2:33](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-categorical-table-1?u=76281980&t=153)** Okay, we should now have a bunch of new freq CSVs in our Data folder.
>
> **[2:39](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-categorical-table-1?u=76281980&t=159)** Let's go look.
>
> **[2:41](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-categorical-table-1?u=76281980&t=161)** Here they are.
>
> **[2:41](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-categorical-table-1?u=76281980&t=161)** Let's open Alc.
>
> **[2:44](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-categorical-table-1?u=76281980&t=164)** See, these are smaller because, thank goodness, not that many people have asthma in our data.
>
> **[2:50](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-categorical-table-1?u=76281980&t=170)** Let's make sure our table one is ready for these frequencies.
>
> **[2:55](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-categorical-table-1?u=76281980&t=175)** And here we are.
>
> **[2:57](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-categorical-table-1?u=76281980&t=177)** Now we are in the Asthma column.
>
> **[2:59](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-categorical-table-1?u=76281980&t=179)** Let's make sure we have our totals at the top.
>
> **[3:03](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-categorical-table-1?u=76281980&t=183)** Here's our total Asthma, which is 5343, and here's our total No Asthma, which is 52788.
>
> **[3:13](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-categorical-table-1?u=76281980&t=193)** Now let's go back and look at our alc frequencies again.
>
> **[3:17](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-categorical-table-1?u=76281980&t=197)** Let's highlight the frequencies and do Control + C.
>
> **[3:22](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-categorical-table-1?u=76281980&t=202)** Now, back to table one.
>
> **[3:24](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-categorical-table-1?u=76281980&t=204)** Now, let's place our cursor at the top of the yellow cell for the alcohol variables under asthma and then do Paste Values.
>
> **[3:34](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-categorical-table-1?u=76281980&t=214)** Great.
>
> **[3:35](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-categorical-table-1?u=76281980&t=215)** So you can guess how the rest of this goes.
>
> **[3:38](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-categorical-table-1?u=76281980&t=218)** We will have to open up all the new CSVs we just made and then we can copy and paste all the frequencies in under the Asthma column.
>
> **[3:47](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-categorical-table-1?u=76281980&t=227)** Here's what it looks like when we are done.
>
> **[3:50](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-categorical-table-1?u=76281980&t=230)** Okay, so that column is all filled in.
>
> **[3:53](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-categorical-table-1?u=76281980&t=233)** Great.
>
> **[3:54](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-categorical-table-1?u=76281980&t=234)** Let's go back to our Alc CSV and close it.
>
> **[4:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-categorical-table-1?u=76281980&t=240)** Now let's go back to our Data folder.
>
> **[4:03](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-categorical-table-1?u=76281980&t=243)** Our next step is to make the no asthma freqs.
>
> **[4:05](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-categorical-table-1?u=76281980&t=245)** So we will make more CSVs with the same names.
>
> **[4:09](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-categorical-table-1?u=76281980&t=249)** We don't want to get confused.
>
> **[4:10](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-categorical-table-1?u=76281980&t=250)** So we will erase the freq tables from our folder.
>
> **[4:14](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-categorical-table-1?u=76281980&t=254)** We don't have to do that.
>
> **[4:15](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-categorical-table-1?u=76281980&t=255)** R will overwrite them unless they are open.
>
> **[4:18](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-categorical-table-1?u=76281980&t=258)** But I like to do that just to be neat.
>
> **[4:21](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-categorical-table-1?u=76281980&t=261)** Then you can do what I did, which is do a Save As with the 215 asthma code and make the 220 no asthma code and just change out a few commands.
>
> **[4:32](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-categorical-table-1?u=76281980&t=272)** I'll show you what I did.
>
> **[4:34](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-categorical-table-1?u=76281980&t=274)** See, notice how this is code 220 no asthma frequencies.
>
> **[4:39](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-categorical-table-1?u=76281980&t=279)** I changed the subset command to not equal to one, so that gets the no asthma people, and I changed the data set name to no asthma only and the rest is well the same tedium you've been doing.
>
> **[4:53](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-categorical-table-1?u=76281980&t=293)** Let's do Control + A to highlight everything and then do Control + R to run everything.
>
> **[5:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-categorical-table-1?u=76281980&t=300)** Great, let's look in our Data folder.
>
> **[5:03](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-categorical-table-1?u=76281980&t=303)** Here they are.
>
> **[5:04](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-categorical-table-1?u=76281980&t=304)** Let's go see where we will put these numbers.
>
> **[5:08](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-categorical-table-1?u=76281980&t=308)** Here is our no asthma column in table one.
>
> **[5:12](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-categorical-table-1?u=76281980&t=312)** Let's put in the total at the top, which is 52788.
>
> **[5:17](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-categorical-table-1?u=76281980&t=317)** Now, let's look back at our Data folder.
>
> **[5:21](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-categorical-table-1?u=76281980&t=321)** Alrighty, now we'll open Alc.
>
> **[5:24](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-categorical-table-1?u=76281980&t=324)** See how the frequencies are bigger?
>
> **[5:27](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-categorical-table-1?u=76281980&t=327)** That's because, thank goodness, there are a lot of people without asthma.
>
> **[5:31](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-categorical-table-1?u=76281980&t=331)** Let's copy these into our categorical table one.
>
> **[5:35](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-categorical-table-1?u=76281980&t=335)** Let's highlight and do Control + C.
>
> **[5:38](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-categorical-table-1?u=76281980&t=338)** Now, let's put our cursor in the correct cell in the correct column, the no asthma column at the top of the alcohol levels and do Paste Values.
>
> **[5:49](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-categorical-table-1?u=76281980&t=349)** Great.
>
> **[5:50](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-categorical-table-1?u=76281980&t=350)** I did this with all the variables and I'll show you a completed one.
>
> **[5:54](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-categorical-table-1?u=76281980&t=354)** Okay, here is our beautiful table.
>
> **[5:57](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-categorical-table-1?u=76281980&t=357)** You'll notice a little anomaly with the first row.
>
> **[6:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-categorical-table-1?u=76281980&t=360)** I made the two percentages up here for asthma have the whole data set as the denominator.
>
> **[6:07](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-categorical-table-1?u=76281980&t=367)** You can see I put it in orange.
>
> **[6:09](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-categorical-table-1?u=76281980&t=369)** Again, this is just my way of doing it.
>
> **[6:12](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-categorical-table-1?u=76281980&t=372)** You could use these output CSVs in different ways to harvest off and visualize the frequencies.
>
> **[6:18](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-categorical-table-1?u=76281980&t=378)** This is just my style.
>
> **[6:20](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-categorical-table-1?u=76281980&t=380)** Okay, so we established a pattern in this section.
>
> **[6:23](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-categorical-table-1?u=76281980&t=383)** First, we erased the old CSV frequency tables from our data directory so we don't get confused as we regenerate new ones.
>
> **[6:32](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-categorical-table-1?u=76281980&t=392)** In case we hit an error, we don't want to mistakenly use info from old results.
>
> **[6:37](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-categorical-table-1?u=76281980&t=397)** Next, we used the old overall frequency code and edited it to make asthma only code, then output those CSVs, opened them, and copied and pasted from them into our categorical table one.
>
> **[6:52](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-categorical-table-1?u=76281980&t=412)** Now, table one categorical is technically complete, although it could be gussied up a little with bivariate statistical test, which will be covered in the next chapter.
>
> **[7:01](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-categorical-table-1?u=76281980&t=421)** But for now, I'll wrap up this chapter after the next section, which is on completing the continuous table one.

> [!info]- Semantic Content
>
> **Code Keywords:** let (21), throw (1), private (1)
> **CLI Commands:** make (6)
> **Env Vars:** asthma4 (2), csv (2)
> **Cross-References:** go back to (2), in the next (1)
> **Exercise Files:** template (1)
> **Speakers:** - [instructor] (1)

#### Completing continuous Table 1
> [LinkedIn Learning](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-continuous-table-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-continuous-table-1?u=76281980&t=0)** - [Instructor] We are almost done with the basic descriptive analysis.
>
> **[0:04](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-continuous-table-1?u=76281980&t=4)** We are now at chapter five, section seven, where we will be completing continuous Table 1.
>
> **[0:10](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-continuous-table-1?u=76281980&t=10)** For this one, we'll use the plyr package.
>
> **[0:12](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-continuous-table-1?u=76281980&t=12)** And we'll use the command ddply, for means and standard deviations.
>
> **[0:18](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-continuous-table-1?u=76281980&t=18)** Like before, we'll define a macro to output the CSVs, and then we'll copy/paste the results into our Table 1.
>
> **[0:26](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-continuous-table-1?u=76281980&t=26)** Let's go to our continuous Table 1.
>
> **[0:28](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-continuous-table-1?u=76281980&t=28)** This Table 1 is considerably simpler, compared to categorical Table 1.
>
> **[0:34](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-continuous-table-1?u=76281980&t=34)** Our goal is to just get the mean and SD of sleep duration for each category.
>
> **[0:40](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-continuous-table-1?u=76281980&t=40)** We also need to report the overall mean and SD at the top.
>
> **[0:45](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-continuous-table-1?u=76281980&t=45)** So let's go to R and do some fancy coding.
>
> **[0:48](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-continuous-table-1?u=76281980&t=48)** So we just finished with 220.
>
> **[0:51](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-continuous-table-1?u=76281980&t=51)** So the code we are using now is 225 Table 1 means and SDs.
>
> **[0:57](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-continuous-table-1?u=76281980&t=57)** Remember at the top of our Table 1, we need the overall mean and SD.
>
> **[1:02](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-continuous-table-1?u=76281980&t=62)** So I wrote this code here.
>
> **[1:04](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-continuous-table-1?u=76281980&t=64)** As usual, we'll skip the read command because we already have analytic and memory.
>
> **[1:08](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-continuous-table-1?u=76281980&t=68)** See the mean command?
>
> **[1:10](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-continuous-table-1?u=76281980&t=70)** And then the variable in parentheses?
>
> **[1:13](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-continuous-table-1?u=76281980&t=73)** And also see the SD command with the variable.
>
> **[1:16](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-continuous-table-1?u=76281980&t=76)** Let's run these.
>
> **[1:17](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-continuous-table-1?u=76281980&t=77)** Highlight Control+R.
>
> **[1:19](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-continuous-table-1?u=76281980&t=79)** See the numbers in the console?
>
> **[1:21](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-continuous-table-1?u=76281980&t=81)** We could copy these numbers into the yellow part of the Table 1.
>
> **[1:25](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-continuous-table-1?u=76281980&t=85)** I'll do that.
>
> **[1:26](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-continuous-table-1?u=76281980&t=86)** I'm going to copy this mean, which is 7.11 something.
>
> **[1:31](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-continuous-table-1?u=76281980&t=91)** And the standard deviation or SD, which is 1.4 something, into our continuous Table 1.
>
> **[1:37](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-continuous-table-1?u=76281980&t=97)** Let's go look at what I did.
>
> **[1:39](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-continuous-table-1?u=76281980&t=99)** Here they are.
>
> **[1:41](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-continuous-table-1?u=76281980&t=101)** But then, what do we do for the means and SDs for each level?
>
> **[1:46](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-continuous-table-1?u=76281980&t=106)** Guess what? A package.
>
> **[1:48](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-continuous-table-1?u=76281980&t=108)** This time it's plyr.
>
> **[1:50](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-continuous-table-1?u=76281980&t=110)** Let's look at our code.
>
> **[1:52](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-continuous-table-1?u=76281980&t=112)** The package is plyr.
>
> **[1:53](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-continuous-table-1?u=76281980&t=113)** I'm not sure how you pronounce it.
>
> **[1:55](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-continuous-table-1?u=76281980&t=115)** I really love plyr.
>
> **[1:57](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-continuous-table-1?u=76281980&t=117)** I've used so many commands from it.
>
> **[1:59](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-continuous-table-1?u=76281980&t=119)** So we installed plyr and now I'll call it up in the library.
>
> **[2:03](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-continuous-table-1?u=76281980&t=123)** I'll do highlight and Control+R.
>
> **[2:06](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-continuous-table-1?u=76281980&t=126)** So ddply is the cool function we will use from plyr to get our work done on this continuous table.
>
> **[2:13](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-continuous-table-1?u=76281980&t=133)** So first of course, we want to see sleep means by alcohol group.
>
> **[2:17](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-continuous-table-1?u=76281980&t=137)** Because that is our hypothesis.
>
> **[2:19](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-continuous-table-1?u=76281980&t=139)** So we put in here our data set first, which is analytic.
>
> **[2:23](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-continuous-table-1?u=76281980&t=143)** And then we put the tilde, and the grouping variable we want, which is ALCGRP.
>
> **[2:28](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-continuous-table-1?u=76281980&t=148)** And then summarise with the British English spelling.
>
> **[2:32](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-continuous-table-1?u=76281980&t=152)** But you can use the U.S. spelling too, with a Z.
>
> **[2:35](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-continuous-table-1?u=76281980&t=155)** Then summarize, and by doing mean=mean(SLEEPTIM2), and sd=sd(SLEEPTIM2), when we look at the output CSV, we can see the headings mean and SD.
>
> **[2:49](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-continuous-table-1?u=76281980&t=169)** You'll see.
>
> **[2:51](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-continuous-table-1?u=76281980&t=171)** To start by demonstrating, I am not putting the results into an object.
>
> **[2:54](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-continuous-table-1?u=76281980&t=174)** I'm just displaying them on the screen so you can see them.
>
> **[2:57](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-continuous-table-1?u=76281980&t=177)** So let's highlight and run this ddply code.
>
> **[3:02](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-continuous-table-1?u=76281980&t=182)** See this nice output?
>
> **[3:04](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-continuous-table-1?u=76281980&t=184)** But you guessed it, I'm going to make a macro.
>
> **[3:06](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-continuous-table-1?u=76281980&t=186)** And I'm going to want to have the macro write out all these CSVs, so we can copy/paste into the yellow part of the Table 1 spreadsheet.
>
> **[3:15](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-continuous-table-1?u=76281980&t=195)** So let's load library(gtools), which will let us define a macro.
>
> **[3:20](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-continuous-table-1?u=76281980&t=200)** Great. Now I'm going to make a new macro called SumTbl.
>
> **[3:25](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-continuous-table-1?u=76281980&t=205)** And I'm going to look at my code above for guidance.
>
> **[3:29](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-continuous-table-1?u=76281980&t=209)** My new macro will only take in the arguments OutputTable for the output table, GroupVar for the grouping variable, and CSVTable for the name of our CSV table that will be written out.
>
> **[3:40](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-continuous-table-1?u=76281980&t=220)** Okay now I'm going to load the macro.
>
> **[3:43](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-continuous-table-1?u=76281980&t=223)** Let's run that code.
>
> **[3:44](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-continuous-table-1?u=76281980&t=224)** Highlight and Control+R.
>
> **[3:46](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-continuous-table-1?u=76281980&t=226)** Okay great now let's call the macro.
>
> **[3:49](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-continuous-table-1?u=76281980&t=229)** I will call it first using AlcGrp.
>
> **[3:52](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-continuous-table-1?u=76281980&t=232)** And of course, writing this to a table called Alc, so we can find it again.
>
> **[3:57](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-continuous-table-1?u=76281980&t=237)** Let's run this line of code with a highlight and Control+R.
>
> **[4:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-continuous-table-1?u=76281980&t=240)** Okay now let's find the CSV in our data folder.
>
> **[4:04](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-continuous-table-1?u=76281980&t=244)** Here it is in our data folder.
>
> **[4:06](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-continuous-table-1?u=76281980&t=246)** So let's open it.
>
> **[4:08](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-continuous-table-1?u=76281980&t=248)** I'm sure you are guessing what we'll do.
>
> **[4:10](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-continuous-table-1?u=76281980&t=250)** You bet. We will copy this out.
>
> **[4:13](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-continuous-table-1?u=76281980&t=253)** Let's copy these means and these SDs by highlighting and doing Control+C.
>
> **[4:19](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-continuous-table-1?u=76281980&t=259)** Now let's go back to our Table 1 continuous.
>
> **[4:23](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-continuous-table-1?u=76281980&t=263)** Let's locate the upper left corner of where our information goes.
>
> **[4:27](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-continuous-table-1?u=76281980&t=267)** Top of the alcohol variables.
>
> **[4:29](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-continuous-table-1?u=76281980&t=269)** And put our cursor there.
>
> **[4:31](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-continuous-table-1?u=76281980&t=271)** Now we'll do paced values.
>
> **[4:36](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-continuous-table-1?u=76281980&t=276)** So as you can see I essentially call up that macro a bunch of times, and output all the CSVs.
>
> **[4:42](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-continuous-table-1?u=76281980&t=282)** And then, using the same approach as with the alcohol variable, I copy and paste into the Table 1.
>
> **[4:49](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-continuous-table-1?u=76281980&t=289)** Let's highlight and Control+R to run all of this.
>
> **[4:53](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-continuous-table-1?u=76281980&t=293)** Good, this is the end of code 225.
>
> **[4:57](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-continuous-table-1?u=76281980&t=297)** I'll show you the completed version of Table 1 continuous.
>
> **[5:01](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-continuous-table-1?u=76281980&t=301)** Okay here we go.
>
> **[5:02](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-continuous-table-1?u=76281980&t=302)** The whole yellow part is filled in.
>
> **[5:04](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-continuous-table-1?u=76281980&t=304)** And the results are reported to the left.
>
> **[5:08](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-continuous-table-1?u=76281980&t=308)** Whew, that was a lot of work, making all those tables.
>
> **[5:12](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-continuous-table-1?u=76281980&t=312)** So in this section, we focused on developing code around the command ddplyr from the plyr package.
>
> **[5:19](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-continuous-table-1?u=76281980&t=319)** Which helped us output means and SDs into a CSV format.
>
> **[5:23](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-continuous-table-1?u=76281980&t=323)** And then, you are probably getting used to this, we copy/pasted from the CSVs into continuous Table 1.
>
> **[5:31](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-continuous-table-1?u=76281980&t=331)** As I noted the bivariate test fields are still blank, in both of our categorical and continuous Table 1s, even though both tables are technically complete.
>
> **[5:41](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/completing-continuous-table-1?u=76281980&t=341)** In the next chapter, we'll go over how to do these bivariate tests, and complete those sections of Table 1.

> [!info]- Semantic Content
>
> **Code Keywords:** let (17), function (1), this. (1), this, (1)
> **Env Vars:** csv (4), sleeptim2 (2), alcgrp (1)
> **CLI Commands:** make (2), find (2)
> **Versions:** 7.11 (1), 1.4 (1)
> **Cross-References:** go back to (1), in the next (1)
> **UI Navigation:** go to (2)
> **Speakers:** - [instructor] (1)


### 6. Descriptive Analysis: Weights and Tests

#### Three truths about using weights
> [LinkedIn Learning](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/three-truths-about-using-weights?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/three-truths-about-using-weights?u=76281980&t=0)** - [Narrator] Hi there.
>
> **[0:01](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/three-truths-about-using-weights?u=76281980&t=1)** We are on a little detour from our main project here for chapter six, section one.
>
> **[0:06](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/three-truths-about-using-weights?u=76281980&t=6)** So I can show you about using BRFSS weights in a descriptive analysis.
>
> **[0:13](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/three-truths-about-using-weights?u=76281980&t=13)** Here, I teach you about three truths about using the BRFSS weights in an anlaysis.
>
> **[0:20](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/three-truths-about-using-weights?u=76281980&t=20)** So this topic will be mostly philosophy, and a little code.
>
> **[0:25](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/three-truths-about-using-weights?u=76281980&t=25)** Everyone who talks to me about BRFSS always starts by saying they need to understand the weights.
>
> **[0:31](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/three-truths-about-using-weights?u=76281980&t=31)** How do you use the weights?
>
> **[0:33](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/three-truths-about-using-weights?u=76281980&t=33)** Why do you use the weights?
>
> **[0:35](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/three-truths-about-using-weights?u=76281980&t=35)** When do you use the weights?
>
> **[0:37](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/three-truths-about-using-weights?u=76281980&t=37)** And the reality is, you hardly ever use the weights.
>
> **[0:40](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/three-truths-about-using-weights?u=76281980&t=40)** That's what I'll explain philosophically.
>
> **[0:43](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/three-truths-about-using-weights?u=76281980&t=43)** In the next section, I'll do a descriptive example, where we actually get to use the weights.
>
> **[0:49](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/three-truths-about-using-weights?u=76281980&t=49)** So, I'm sorry to get heavy on you, but we have to talk about epidemiology now.
>
> **[0:53](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/three-truths-about-using-weights?u=76281980&t=53)** In epidemiology, some people care more about populations, and some people care more about samples.
>
> **[1:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/three-truths-about-using-weights?u=76281980&t=60)** Who cares about populations?
>
> **[1:02](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/three-truths-about-using-weights?u=76281980&t=62)** Well, the health department.
>
> **[1:03](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/three-truths-about-using-weights?u=76281980&t=63)** The CDC.
>
> **[1:05](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/three-truths-about-using-weights?u=76281980&t=65)** That's because they have to allocate resources to dealing with exposures that are common and that cause a lot of disease.
>
> **[1:12](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/three-truths-about-using-weights?u=76281980&t=72)** So they really need population-based estimates of exactly how many people smoke in Massachusetts, for example.
>
> **[1:20](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/three-truths-about-using-weights?u=76281980&t=80)** These people are the ones who really need the weights.
>
> **[1:24](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/three-truths-about-using-weights?u=76281980&t=84)** But, then we have those of us who just care about samples.
>
> **[1:27](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/three-truths-about-using-weights?u=76281980&t=87)** We don't care exactly how many people smoke.
>
> **[1:30](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/three-truths-about-using-weights?u=76281980&t=90)** We just care if smoking causes something.
>
> **[1:33](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/three-truths-about-using-weights?u=76281980&t=93)** Maybe we are studying subpopulations, like veterans.
>
> **[1:37](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/three-truths-about-using-weights?u=76281980&t=97)** Most epidemiologists are engaged in the hypothesis-driven analysis.
>
> **[1:41](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/three-truths-about-using-weights?u=76281980&t=101)** Think of all the drug company epidemiologists.
>
> **[1:44](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/three-truths-about-using-weights?u=76281980&t=104)** They are looking to see if the drug makes people better.
>
> **[1:47](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/three-truths-about-using-weights?u=76281980&t=107)** Or maybe kills them, you never know.
>
> **[1:49](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/three-truths-about-using-weights?u=76281980&t=109)** But they are not trying to make population-based estimates.
>
> **[1:52](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/three-truths-about-using-weights?u=76281980&t=112)** So when people come frantically talking to me about the BRFSS weights, I point out these things to them.
>
> **[2:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/three-truths-about-using-weights?u=76281980&t=120)** These are never people from the state health department.
>
> **[2:03](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/three-truths-about-using-weights?u=76281980&t=123)** Those kind of people are really used to using weights.
>
> **[2:06](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/three-truths-about-using-weights?u=76281980&t=126)** They could do it in their sleep.
>
> **[2:07](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/three-truths-about-using-weights?u=76281980&t=127)** It's always someone from an academic setting, who is worried that if they don't use the weights, the journal will blacklist them or something.
>
> **[2:16](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/three-truths-about-using-weights?u=76281980&t=136)** So I tell these people three truths about the BRFSS weights.
>
> **[2:20](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/three-truths-about-using-weights?u=76281980&t=140)** The reason I like these truths is that they can really help you decide if you need the weights or not, in your analysis.
>
> **[2:27](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/three-truths-about-using-weights?u=76281980&t=147)** The first truth is that regardless of what kind of analysis you are doing, you can't use the canned weights, or the weights they provide, if you remove any rows from the main dataset, like we did.
>
> **[2:40](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/three-truths-about-using-weights?u=76281980&t=160)** Because we are just studying veterans.
>
> **[2:43](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/three-truths-about-using-weights?u=76281980&t=163)** Now let's say someone says, why don't you just calculate new weights yourself?
>
> **[2:48](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/three-truths-about-using-weights?u=76281980&t=168)** Like I don't have enough to do already?
>
> **[2:51](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/three-truths-about-using-weights?u=76281980&t=171)** But then, even if I do that, what are the weights?
>
> **[2:54](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/three-truths-about-using-weights?u=76281980&t=174)** I don't know the correct distribution of veterans, by sex, race, or any other demographic.
>
> **[3:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/three-truths-about-using-weights?u=76281980&t=180)** So I wouldn't know what to put in the weights.
>
> **[3:03](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/three-truths-about-using-weights?u=76281980&t=183)** So this is a simple truth.
>
> **[3:04](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/three-truths-about-using-weights?u=76281980&t=184)** If you are studying a subpopulation and removing rows, you are disqualified from using the weights.
>
> **[3:10](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/three-truths-about-using-weights?u=76281980&t=190)** End of story.
>
> **[3:11](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/three-truths-about-using-weights?u=76281980&t=191)** Now the second truth.
>
> **[3:12](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/three-truths-about-using-weights?u=76281980&t=192)** Let's say you are actually from the health department, and you want population-based estimates, and you are not removing any rows.
>
> **[3:19](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/three-truths-about-using-weights?u=76281980&t=199)** Well, that's what you are getting.
>
> **[3:22](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/three-truths-about-using-weights?u=76281980&t=202)** Estimates.
>
> **[3:23](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/three-truths-about-using-weights?u=76281980&t=203)** They can have a confidence interval around them.
>
> **[3:26](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/three-truths-about-using-weights?u=76281980&t=206)** Which is cool, but I'm just sayin'.
>
> **[3:28](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/three-truths-about-using-weights?u=76281980&t=208)** It's not actually a population parameter, it's still an estimate.
>
> **[3:32](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/three-truths-about-using-weights?u=76281980&t=212)** Finally, the third truth.
>
> **[3:34](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/three-truths-about-using-weights?u=76281980&t=214)** If you actually do the population-based descriptive analysis that requires the weights, you better use them.
>
> **[3:41](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/three-truths-about-using-weights?u=76281980&t=221)** That's because if you don't, your estimates will really be seriously wrong.
>
> **[3:45](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/three-truths-about-using-weights?u=76281980&t=225)** That is because BRFSS really oversamples minority populations.
>
> **[3:51](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/three-truths-about-using-weights?u=76281980&t=231)** On the other hand, you can use weights in regressions, but it's kind of weird, because you rarely do regressions on the whole BRFSS dataset.
>
> **[4:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/three-truths-about-using-weights?u=76281980&t=240)** But if you do, you can use the weights.
>
> **[4:03](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/three-truths-about-using-weights?u=76281980&t=243)** What I've found is that weights don't change the slope estimates that much in regressions.
>
> **[4:08](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/three-truths-about-using-weights?u=76281980&t=248)** So in my opinion, we are not missing anything by dropping the weights from a hypothesis-driven analysis.
>
> **[4:14](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/three-truths-about-using-weights?u=76281980&t=254)** So to conclude the section, the weights are used in population-based analyses, and these tend to be more on the radar of state and county health departments than those publishing in the academic literature.
>
> **[4:26](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/three-truths-about-using-weights?u=76281980&t=266)** In a descriptive analysis, weights help you estimate the actually frequencies of people.
>
> **[4:31](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/three-truths-about-using-weights?u=76281980&t=271)** Like how many people have no teeth in a certain state.
>
> **[4:35](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/three-truths-about-using-weights?u=76281980&t=275)** If you want to analyze a subpopulation, the way we are analyzing veterans in this example, then you are swiftly disqualified from using the weights, and this is usually the limitation.
>
> **[4:45](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/three-truths-about-using-weights?u=76281980&t=285)** Using the weights when they are not supposed to be used can severely compromise a descriptive analysis.
>
> **[4:51](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/three-truths-about-using-weights?u=76281980&t=291)** I've seen it where the weighted percentages did not add up to 100%, and that was pretty embarrassing for the researcher.

> [!info]- Semantic Content
>
> **Env Vars:** brfss (7), cdc (1)
> **Code Keywords:** let (2), finally, (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [narrator] (1)

#### Conducting a descriptive weighted analysis
> [LinkedIn Learning](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/conducting-a-descriptive-weighted-analysis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/conducting-a-descriptive-weighted-analysis?u=76281980&t=0)** - [Teacher] It's Chapter 6, Section 2, where I give you a quick and dirty example of conducting a weighted analysis.
>
> **[0:07](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/conducting-a-descriptive-weighted-analysis?u=76281980&t=7)** In this section, I'll show some R code I made that's not part of our official series of code, or R-movie, as I keep calling it.
>
> **[0:15](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/conducting-a-descriptive-weighted-analysis?u=76281980&t=15)** It's just a quick and dirty example, like I said.
>
> **[0:19](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/conducting-a-descriptive-weighted-analysis?u=76281980&t=19)** I'll show you how to keep the weight variables when we read in the data, and then I'll show you the code that lets you enter the weighting variable into the descriptive analysis.
>
> **[0:28](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/conducting-a-descriptive-weighted-analysis?u=76281980&t=28)** Then we will look at the output and interpret it.
>
> **[0:31](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/conducting-a-descriptive-weighted-analysis?u=76281980&t=31)** Here's my example for you.
>
> **[0:33](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/conducting-a-descriptive-weighted-analysis?u=76281980&t=33)** I'm going to show you how to calculate state-based rates of asthma.
>
> **[0:38](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/conducting-a-descriptive-weighted-analysis?u=76281980&t=38)** Remember, in order to do this, we can't remove any rows.
>
> **[0:42](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/conducting-a-descriptive-weighted-analysis?u=76281980&t=42)** So you won't see any subset command.
>
> **[0:45](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/conducting-a-descriptive-weighted-analysis?u=76281980&t=45)** Also, remember that if there is any subpopulation that's big in the state that has a high rate of asthma, that will blow up the overall state rate when we use the weights.
>
> **[0:56](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/conducting-a-descriptive-weighted-analysis?u=76281980&t=56)** That's the purpose of using them.
>
> **[0:58](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/conducting-a-descriptive-weighted-analysis?u=76281980&t=58)** So now, join me as we dip our toes into the waters of using the BRFSS weights with some example coding.
>
> **[1:06](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/conducting-a-descriptive-weighted-analysis?u=76281980&t=66)** Here is my code.
>
> **[1:08](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/conducting-a-descriptive-weighted-analysis?u=76281980&t=68)** I started it with zero-zero-zero, because it's not part of our series.
>
> **[1:13](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/conducting-a-descriptive-weighted-analysis?u=76281980&t=73)** I called it BRFSS weights example.
>
> **[1:16](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/conducting-a-descriptive-weighted-analysis?u=76281980&t=76)** You'll see that I first made a list of variables we need, and I called WeightVarList.
>
> **[1:23](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/conducting-a-descriptive-weighted-analysis?u=76281980&t=83)** Remember, I said we are going to do a state-based estimate of asthma prevalence, and so we need the state field, which is X underscore state.
>
> **[1:32](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/conducting-a-descriptive-weighted-analysis?u=76281980&t=92)** And, of course, we need the asthma field, our old friend asthma3.
>
> **[1:36](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/conducting-a-descriptive-weighted-analysis?u=76281980&t=96)** We also need the weights field, and that is X underscore LLCPWT.
>
> **[1:42](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/conducting-a-descriptive-weighted-analysis?u=76281980&t=102)** Obviously, I call it lick-a-put.
>
> **[1:45](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/conducting-a-descriptive-weighted-analysis?u=76281980&t=105)** How did I figure out I needed that field?
>
> **[1:47](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/conducting-a-descriptive-weighted-analysis?u=76281980&t=107)** I looked in the code book.
>
> **[1:49](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/conducting-a-descriptive-weighted-analysis?u=76281980&t=109)** Let's look at the code book together.
>
> **[1:51](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/conducting-a-descriptive-weighted-analysis?u=76281980&t=111)** I'm jumping to page 98 of our code book, where the weight variables are documented.
>
> **[1:56](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/conducting-a-descriptive-weighted-analysis?u=76281980&t=116)** Be careful, because there are different weight variables in the code book.
>
> **[2:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/conducting-a-descriptive-weighted-analysis?u=76281980&t=120)** They are all listed next to each other.
>
> **[2:02](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/conducting-a-descriptive-weighted-analysis?u=76281980&t=122)** So I'm here on page 98, where they start.
>
> **[2:04](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/conducting-a-descriptive-weighted-analysis?u=76281980&t=124)** See at the bottom of this page are child weights, which we don't want.
>
> **[2:09](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/conducting-a-descriptive-weighted-analysis?u=76281980&t=129)** See the title, Final child weight: Land-line and Cell-Phone data.
>
> **[2:14](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/conducting-a-descriptive-weighted-analysis?u=76281980&t=134)** We want the one titled Final weight.
>
> **[2:17](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/conducting-a-descriptive-weighted-analysis?u=76281980&t=137)** Let's scroll down until we see these.
>
> **[2:21](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/conducting-a-descriptive-weighted-analysis?u=76281980&t=141)** Hmm, none of these are final weights.
>
> **[2:23](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/conducting-a-descriptive-weighted-analysis?u=76281980&t=143)** Here, look at the top of this next page.
>
> **[2:26](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/conducting-a-descriptive-weighted-analysis?u=76281980&t=146)** Like I said, lick-a-put.
>
> **[2:28](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/conducting-a-descriptive-weighted-analysis?u=76281980&t=148)** That's the weight variable we want, it says Final weight.
>
> **[2:32](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/conducting-a-descriptive-weighted-analysis?u=76281980&t=152)** Let's go back to R.
>
> **[2:34](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/conducting-a-descriptive-weighted-analysis?u=76281980&t=154)** So we put pick-a-put on the list, and make the list the variables we want into WeightVarList.
>
> **[2:41](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/conducting-a-descriptive-weighted-analysis?u=76281980&t=161)** Let's highlight and control R to run and make the list.
>
> **[2:45](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/conducting-a-descriptive-weighted-analysis?u=76281980&t=165)** Great!
>
> **[2:45](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/conducting-a-descriptive-weighted-analysis?u=76281980&t=165)** Okay, remember how we read in BRFSSA a long time ago, which had all our variables in it?
>
> **[2:54](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/conducting-a-descriptive-weighted-analysis?u=76281980&t=174)** We are going to make a skinny data set for this exercise called BRFSS underscore weights by subsetting only these variables into it, from BRFSSA.
>
> **[3:06](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/conducting-a-descriptive-weighted-analysis?u=76281980&t=186)** We'll just highlight and control R.
>
> **[3:09](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/conducting-a-descriptive-weighted-analysis?u=76281980&t=189)** Now let's do a colnames and in nrow command so we can just see what happens.
>
> **[3:14](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/conducting-a-descriptive-weighted-analysis?u=76281980&t=194)** Let's highlight and run this with control R.
>
> **[3:17](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/conducting-a-descriptive-weighted-analysis?u=76281980&t=197)** Okay, we've convinced ourselves we have the right columns and number of rows.
>
> **[3:21](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/conducting-a-descriptive-weighted-analysis?u=76281980&t=201)** But, surprise, surprise, we need to load a package, the questionr package, or questioner package.
>
> **[3:28](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/conducting-a-descriptive-weighted-analysis?u=76281980&t=208)** I don't know how to pronounce it.
>
> **[3:29](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/conducting-a-descriptive-weighted-analysis?u=76281980&t=209)** But that will let us do the weighted analysis.
>
> **[3:32](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/conducting-a-descriptive-weighted-analysis?u=76281980&t=212)** I already loaded the package earlier, and now we'll call up the questioner package with the library.
>
> **[3:38](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/conducting-a-descriptive-weighted-analysis?u=76281980&t=218)** So let's just run this line of library code, highlight and control R.
>
> **[3:42](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/conducting-a-descriptive-weighted-analysis?u=76281980&t=222)** Great!
>
> **[3:43](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/conducting-a-descriptive-weighted-analysis?u=76281980&t=223)** Now, what we want is the weighted table function.
>
> **[3:46](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/conducting-a-descriptive-weighted-analysis?u=76281980&t=226)** And notice we are turning the results into a table called WeightedAsthma.
>
> **[3:51](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/conducting-a-descriptive-weighted-analysis?u=76281980&t=231)** So we start by calling out our first field, asthma3, and then designating Y as the state variable, and designating the weights as the weight variable, then setting a few options.
>
> **[4:04](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/conducting-a-descriptive-weighted-analysis?u=76281980&t=244)** Normweight equals false, tells us not to normalize the weights.
>
> **[4:08](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/conducting-a-descriptive-weighted-analysis?u=76281980&t=248)** N-a dot r-m equals true tells it to remove n-a's before running the analysis.
>
> **[4:15](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/conducting-a-descriptive-weighted-analysis?u=76281980&t=255)** And n-a dot show equals false, suppresses n-a count in table output.
>
> **[4:21](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/conducting-a-descriptive-weighted-analysis?u=76281980&t=261)** So let's run that, and write it to a csv, and then go look at it.
>
> **[4:25](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/conducting-a-descriptive-weighted-analysis?u=76281980&t=265)** Highlight, control R.
>
> **[4:27](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/conducting-a-descriptive-weighted-analysis?u=76281980&t=267)** Now, to our data folder to open our weighted asthma csv.
>
> **[4:32](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/conducting-a-descriptive-weighted-analysis?u=76281980&t=272)** Here it is, let's open it.
>
> **[4:34](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/conducting-a-descriptive-weighted-analysis?u=76281980&t=274)** See what's going on here?
>
> **[4:36](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/conducting-a-descriptive-weighted-analysis?u=76281980&t=276)** On the Y-axis, the headings for the rows, we have the values for asthma3.
>
> **[4:42](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/conducting-a-descriptive-weighted-analysis?u=76281980&t=282)** Remember how one is "has asthma," and that's in the first row.
>
> **[4:47](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/conducting-a-descriptive-weighted-analysis?u=76281980&t=287)** Then across here, we have all the states.
>
> **[4:51](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/conducting-a-descriptive-weighted-analysis?u=76281980&t=291)** See how it goes up to 72?
>
> **[4:53](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/conducting-a-descriptive-weighted-analysis?u=76281980&t=293)** So state number 72 has about 481,000 people with asthma.
>
> **[5:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/conducting-a-descriptive-weighted-analysis?u=76281980&t=300)** Let's look in the code book to decode what state 72 is.
>
> **[5:04](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/conducting-a-descriptive-weighted-analysis?u=76281980&t=304)** See here on on page 2 of the code book?
>
> **[5:07](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/conducting-a-descriptive-weighted-analysis?u=76281980&t=307)** Here are the states.
>
> **[5:09](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/conducting-a-descriptive-weighted-analysis?u=76281980&t=309)** Alabama is state one, and we'll scroll down.
>
> **[5:13](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/conducting-a-descriptive-weighted-analysis?u=76281980&t=313)** Looks like Rhode Island is state 44, and let's go to the end.
>
> **[5:19](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/conducting-a-descriptive-weighted-analysis?u=76281980&t=319)** Puerto Rico is state 72.
>
> **[5:22](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/conducting-a-descriptive-weighted-analysis?u=76281980&t=322)** So Puerto Rico has about 481,000 people with asthma, estimated by the BRFSS weights.
>
> **[5:30](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/conducting-a-descriptive-weighted-analysis?u=76281980&t=330)** Let's go look again at our weighted asthma csv.
>
> **[5:34](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/conducting-a-descriptive-weighted-analysis?u=76281980&t=334)** You'll notice that the number in here are all frequencies.
>
> **[5:39](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/conducting-a-descriptive-weighted-analysis?u=76281980&t=339)** These are now the estimates of literally the number of people who has asthma and don't have asthma, and also don't know or won't say whether or not they have asthma in each state.
>
> **[5:50](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/conducting-a-descriptive-weighted-analysis?u=76281980&t=350)** As you can see, in Alabama, which is state one, there's about 540,000 people with asthma, estimated.
>
> **[5:58](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/conducting-a-descriptive-weighted-analysis?u=76281980&t=358)** But if we look over here, it's state 44, which is Rhode Island, which is a small state.
>
> **[6:05](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/conducting-a-descriptive-weighted-analysis?u=76281980&t=365)** We see there are only about 127,000 people with asthma in Rhode Island.
>
> **[6:10](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/conducting-a-descriptive-weighted-analysis?u=76281980&t=370)** Well, this is kind of an ugly table.
>
> **[6:13](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/conducting-a-descriptive-weighted-analysis?u=76281980&t=373)** I'll show you how I clean it up.
>
> **[6:15](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/conducting-a-descriptive-weighted-analysis?u=76281980&t=375)** You can use the numbers as you want, but I just wanted to show you how I do it, so you can clarify in your mind how these numbers work together.
>
> **[6:25](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/conducting-a-descriptive-weighted-analysis?u=76281980&t=385)** So, you can see, I transposed the data.
>
> **[6:28](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/conducting-a-descriptive-weighted-analysis?u=76281980&t=388)** You can do that in Excel by copying the data, then going to the Home tab, and choosing the Paste, Paste special menu, and then choosing Transpose.
>
> **[6:38](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/conducting-a-descriptive-weighted-analysis?u=76281980&t=398)** We'll cancel out of that.
>
> **[6:40](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/conducting-a-descriptive-weighted-analysis?u=76281980&t=400)** Also, please notice that I saved it as an Excel file, not a csv.
>
> **[6:45](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/conducting-a-descriptive-weighted-analysis?u=76281980&t=405)** If you use Excel for this, you'll need to do that.
>
> **[6:48](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/conducting-a-descriptive-weighted-analysis?u=76281980&t=408)** You'll see, I added the descriptions so we can see what state we are talking about.
>
> **[6:53](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/conducting-a-descriptive-weighted-analysis?u=76281980&t=413)** I labeled the frequencies, and then I summed up the estimated population.
>
> **[6:59](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/conducting-a-descriptive-weighted-analysis?u=76281980&t=419)** Then, to get the percent with asthma, I took the asthma frequency and divided by the estimated population.
>
> **[7:07](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/conducting-a-descriptive-weighted-analysis?u=76281980&t=427)** You will see it fluctuates in the teens.
>
> **[7:10](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/conducting-a-descriptive-weighted-analysis?u=76281980&t=430)** Oh, look, Massachusetts is pretty high!
>
> **[7:13](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/conducting-a-descriptive-weighted-analysis?u=76281980&t=433)** 18%, probably from all that smoking.
>
> **[7:16](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/conducting-a-descriptive-weighted-analysis?u=76281980&t=436)** So, to wrap of this little example, remember that these are population-based estimates.
>
> **[7:21](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/conducting-a-descriptive-weighted-analysis?u=76281980&t=441)** So, generally, these BRFSS weighted descriptive analyses are regional analyses, like, for a state or a group of states.
>
> **[7:30](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/conducting-a-descriptive-weighted-analysis?u=76281980&t=450)** I provided some examples for you, and we did a little example together looking at asthma prevalence.
>
> **[7:35](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/conducting-a-descriptive-weighted-analysis?u=76281980&t=455)** I showed you how to export a csv with the weighted estimates, clean it up, and interpret it.
>
> **[7:41](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/conducting-a-descriptive-weighted-analysis?u=76281980&t=461)** Okay, enough of that detour.
>
> **[7:43](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/conducting-a-descriptive-weighted-analysis?u=76281980&t=463)** We are back on track, and our next section gets back to our table ones, where we start doing bivariate analysis.

> [!info]- Semantic Content
>
> **Code Keywords:** let (13), this, (2), function (1)
> **Env Vars:** brfss (5), brfssa (2), llcpwt (1)
> **CLI Commands:** make (3)
> **UI Navigation:** scroll down (2), go to (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Warnings:** be careful (1)
> **Prerequisites:** you'll need (1)

#### Why conduct bivariate tests?
> [LinkedIn Learning](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/why-conduct-bivariate-tests?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/why-conduct-bivariate-tests?u=76281980&t=0)** - [Narrator] Welcome to chapter six, section three, where I explain why we conduct bivariate tests when doing descriptive analyses.
>
> **[0:08](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/why-conduct-bivariate-tests?u=76281980&t=8)** This lecture is, again, Statistics 101 review.
>
> **[0:12](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/why-conduct-bivariate-tests?u=76281980&t=12)** Because I'm going to go over the four bivariate testing situations you can get in, and what people normally do about them.
>
> **[0:20](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/why-conduct-bivariate-tests?u=76281980&t=20)** Next, I'm going to explain what bivariate tests get you when you are doing a descriptive analysis and making Table 1.
>
> **[0:27](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/why-conduct-bivariate-tests?u=76281980&t=27)** Finally, I'll tell you my opinion of whether or not they are necessary to actually conduct and report in Table 1.
>
> **[0:34](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/why-conduct-bivariate-tests?u=76281980&t=34)** Let's first refresh our memories about the bivariate statistical tests we can use.
>
> **[0:40](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/why-conduct-bivariate-tests?u=76281980&t=40)** If we have a categorical exposure, like alcohol group, and a categorical outcome, like asthma, then we can do a chi-square test.
>
> **[0:49](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/why-conduct-bivariate-tests?u=76281980&t=49)** If we had small cells, we'd have to use a Fisher's exact test.
>
> **[0:54](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/why-conduct-bivariate-tests?u=76281980&t=54)** But as you noticed, this is big data.
>
> **[0:57](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/why-conduct-bivariate-tests?u=76281980&t=57)** So we do not have small cells in big data.
>
> **[1:01](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/why-conduct-bivariate-tests?u=76281980&t=61)** Alright, so now what if the outcome is continuous, like sleep time?
>
> **[1:06](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/why-conduct-bivariate-tests?u=76281980&t=66)** Well, if your exposure is categorical and has at least three categories, you do an analysis of variance or ANOVA.
>
> **[1:15](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/why-conduct-bivariate-tests?u=76281980&t=75)** But if there are only two categories, like with the confounding variable sex, then you have to do an independent groups t-test.
>
> **[1:24](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/why-conduct-bivariate-tests?u=76281980&t=84)** I put the last one on the slide having a continuous exposure variable and a continuous outcome variable just as an example.
>
> **[1:33](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/why-conduct-bivariate-tests?u=76281980&t=93)** We aren't doing this in our project, but if we were, we'd use a correlation.
>
> **[1:37](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/why-conduct-bivariate-tests?u=76281980&t=97)** Now remember, these are tests between variables, so you just get one test statistic.
>
> **[1:43](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/why-conduct-bivariate-tests?u=76281980&t=103)** Either a chi-square statistic for the chi square, an F statistic for the ANOVA, or a t-statistic for the t-test, or an R statistic for correlation.
>
> **[1:54](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/why-conduct-bivariate-tests?u=76281980&t=114)** And then you get a p-value on the test statistic.
>
> **[1:57](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/why-conduct-bivariate-tests?u=76281980&t=117)** So if you have three categories of alcohol group, and you have two categories of asthma, some people think you should get a lot of p-values out, but you only get one for all of these.
>
> **[2:09](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/why-conduct-bivariate-tests?u=76281980&t=129)** And that one basically is saying if the two variables are associated without adjusting for anything.
>
> **[2:16](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/why-conduct-bivariate-tests?u=76281980&t=136)** If the p-value is low, less than .05, they are associated in bivariate analysis.
>
> **[2:23](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/why-conduct-bivariate-tests?u=76281980&t=143)** And if the p-value is high, greater than 0.05, they are not.
>
> **[2:29](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/why-conduct-bivariate-tests?u=76281980&t=149)** So why would you want to know if, bivariately, two variables are associated, especially if you are planning to do a multivariate regression later?
>
> **[2:38](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/why-conduct-bivariate-tests?u=76281980&t=158)** Well, this is very helpful when you have smaller samples.
>
> **[2:42](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/why-conduct-bivariate-tests?u=76281980&t=162)** You want to see the relationships between the exposures and the outcome before the adjustment happens later in the paper.
>
> **[2:49](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/why-conduct-bivariate-tests?u=76281980&t=169)** And also if you want to do a regression, like in our next course, you want to see the relationships between exposures and the outcome before the adjustment happens later when you do the regression.
>
> **[3:01](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/why-conduct-bivariate-tests?u=76281980&t=181)** Also, it's nice to see how associated the confounders are, too.
>
> **[3:05](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/why-conduct-bivariate-tests?u=76281980&t=185)** These are what you would theoretically adjust for in the regression.
>
> **[3:10](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/why-conduct-bivariate-tests?u=76281980&t=190)** But admittedly in BRFSS it's kind of optional to do bivariate tests, in my opinion.
>
> **[3:17](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/why-conduct-bivariate-tests?u=76281980&t=197)** In fact, I think it's worthwhile to leave out these bivariate tests because we have the curse of big data in BRFSS.
>
> **[3:25](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/why-conduct-bivariate-tests?u=76281980&t=205)** Which means even the smallest differences are statistically significant.
>
> **[3:30](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/why-conduct-bivariate-tests?u=76281980&t=210)** It's just because when you have a large sample, that happens.
>
> **[3:34](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/why-conduct-bivariate-tests?u=76281980&t=214)** You have to ask yourself, "Okay, fine.
>
> **[3:37](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/why-conduct-bivariate-tests?u=76281980&t=217)** "The statistical test says it's significant.
>
> **[3:40](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/why-conduct-bivariate-tests?u=76281980&t=220)** "But is it really important?"
>
> **[3:42](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/why-conduct-bivariate-tests?u=76281980&t=222)** Maybe we are looking at only one percentage point.
>
> **[3:45](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/why-conduct-bivariate-tests?u=76281980&t=225)** Or with sleep, maybe we are looking at a difference of 15 minutes.
>
> **[3:50](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/why-conduct-bivariate-tests?u=76281980&t=230)** Is it really practically or clinically significant?
>
> **[3:54](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/why-conduct-bivariate-tests?u=76281980&t=234)** So personally I feel the only obligation we have in Table 1 is to show the distribution of the outcome, the exposure, and the confounders.
>
> **[4:02](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/why-conduct-bivariate-tests?u=76281980&t=242)** Putting the bivariate statistical test in there is the cherry on top.
>
> **[4:07](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/why-conduct-bivariate-tests?u=76281980&t=247)** I believe it's optional.
>
> **[4:08](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/why-conduct-bivariate-tests?u=76281980&t=248)** So why do I do it?
>
> **[4:10](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/why-conduct-bivariate-tests?u=76281980&t=250)** Well, everyone seems to want to know, even though we can guess right now that they will mostly be significant.
>
> **[4:16](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/why-conduct-bivariate-tests?u=76281980&t=256)** But professors on masters' theses committees and journal reviewers, they tend to want to see this to convince themselves.
>
> **[4:24](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/why-conduct-bivariate-tests?u=76281980&t=264)** So I give it to 'em.
>
> **[4:25](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/why-conduct-bivariate-tests?u=76281980&t=265)** So in conclusion, if you have two categorical variables, as we do with our asthma analysis, you can use a chi-square or Fisher's exact test.
>
> **[4:34](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/why-conduct-bivariate-tests?u=76281980&t=274)** If you have a categorical and a continuous variable, as we do with sleep duration, we can use an independent samples t-test or an ANOVA.
>
> **[4:43](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/why-conduct-bivariate-tests?u=76281980&t=283)** Either way, the estimates are not that helpful if you have big data like we do, because the slightest imbalance results in statistical significance.
>
> **[4:51](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/why-conduct-bivariate-tests?u=76281980&t=291)** These bivariate tests are much more revealing with smaller samples.
>
> **[4:55](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/why-conduct-bivariate-tests?u=76281980&t=295)** And as I said, my opinion is they are not necessary in Table 1.
>
> **[5:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/why-conduct-bivariate-tests?u=76281980&t=300)** But let's do them anyway, just for fun.
>
> **[5:03](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/why-conduct-bivariate-tests?u=76281980&t=303)** Join me in the next section where we add categorical bivariate tests to Table 1.

> [!info]- Semantic Content
>
> **Env Vars:** anova (3), brfss (2)
> **Code Keywords:** let (2), finally, (1), if, (1)
> **Cross-References:** later in (1), in the next (1)
> **Versions:** 0.05 (1)
> **Speakers:** - [narrator] (1)

#### Adding categorical bivariate tests to Table 1
> [LinkedIn Learning](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-categorical-bivariate-tests-to-table-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-categorical-bivariate-tests-to-table-1?u=76281980&t=0)** - [Instructor] Welcome to Chapter 6, Section 4.
>
> **[0:03](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-categorical-bivariate-tests-to-table-1?u=76281980&t=3)** We are now ready to add Categorical Bivariate Tests to our Categorical Table 1.
>
> **[0:09](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-categorical-bivariate-tests-to-table-1?u=76281980&t=9)** In this section, I'm first going to load up the MASS package, which does some great things for us.
>
> **[0:15](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-categorical-bivariate-tests-to-table-1?u=76281980&t=15)** It makes it so you can do a Chi-square and Fisher's exact test, which are Categorical Descriptive Analyses.
>
> **[0:22](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-categorical-bivariate-tests-to-table-1?u=76281980&t=22)** Then again, I'm going to call up the gtools package and make a macro to automate doing all the test we need in Categorical Table 1.
>
> **[0:31](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-categorical-bivariate-tests-to-table-1?u=76281980&t=31)** We'll update our Table 1 and take a look at what we find.
>
> **[0:35](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-categorical-bivariate-tests-to-table-1?u=76281980&t=35)** First, let's start with the Categorical Table.
>
> **[0:39](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-categorical-bivariate-tests-to-table-1?u=76281980&t=39)** We don't have any variables for the first line, so we will just say NA there.
>
> **[0:44](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-categorical-bivariate-tests-to-table-1?u=76281980&t=44)** But next, we have Alcohol status.
>
> **[0:47](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-categorical-bivariate-tests-to-table-1?u=76281980&t=47)** You'll see I merged these cells together.
>
> **[0:49](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-categorical-bivariate-tests-to-table-1?u=76281980&t=49)** We will only have one p-value for this.
>
> **[0:52](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-categorical-bivariate-tests-to-table-1?u=76281980&t=52)** Now let's go to R and get that p-value.
>
> **[0:55](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-categorical-bivariate-tests-to-table-1?u=76281980&t=55)** Alright, we are working with our analytic file so we will skip this read code.
>
> **[1:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-categorical-bivariate-tests-to-table-1?u=76281980&t=60)** And surprise, a new package.
>
> **[1:03](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-categorical-bivariate-tests-to-table-1?u=76281980&t=63)** The package is MASS, all caps.
>
> **[1:06](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-categorical-bivariate-tests-to-table-1?u=76281980&t=66)** Case matters a lot in R.
>
> **[1:08](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-categorical-bivariate-tests-to-table-1?u=76281980&t=68)** We already installed that package and now we'll put a library call on MASS.
>
> **[1:14](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-categorical-bivariate-tests-to-table-1?u=76281980&t=74)** Highlight, control-r. Right.
>
> **[1:17](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-categorical-bivariate-tests-to-table-1?u=76281980&t=77)** Well, why are we doing that?
>
> **[1:19](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-categorical-bivariate-tests-to-table-1?u=76281980&t=79)** MASS has our Chi-square function in it.
>
> **[1:21](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-categorical-bivariate-tests-to-table-1?u=76281980&t=81)** So this is how you use MASS's Chi-square function.
>
> **[1:25](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-categorical-bivariate-tests-to-table-1?u=76281980&t=85)** First, you basically do a table command, but you use an equals instead of the arrow and you turn that into a table.
>
> **[1:32](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-categorical-bivariate-tests-to-table-1?u=76281980&t=92)** I'm doing ASTHMA4, because that's our column in our Table 1, our outcome.
>
> **[1:38](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-categorical-bivariate-tests-to-table-1?u=76281980&t=98)** And then I'm using grouping variable ALCGRP for the rows.
>
> **[1:41](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-categorical-bivariate-tests-to-table-1?u=76281980&t=101)** Then equals and I'm naming our new table AlcTbl.
>
> **[1:46](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-categorical-bivariate-tests-to-table-1?u=76281980&t=106)** We used that name before, but we are done with that file so we can override it with no problem.
>
> **[1:51](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-categorical-bivariate-tests-to-table-1?u=76281980&t=111)** You actually get the Chi-square by running a function on this table.
>
> **[1:56](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-categorical-bivariate-tests-to-table-1?u=76281980&t=116)** Control-r to run, great.
>
> **[1:59](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-categorical-bivariate-tests-to-table-1?u=76281980&t=119)** So now this table, AlcTbl, exists.
>
> **[2:02](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-categorical-bivariate-tests-to-table-1?u=76281980&t=122)** So we'll run this Chi-square test function on the table and look at what it says.
>
> **[2:08](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-categorical-bivariate-tests-to-table-1?u=76281980&t=128)** Control-r to run. Very good.
>
> **[2:12](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-categorical-bivariate-tests-to-table-1?u=76281980&t=132)** Woah, look at this p-value in the console!
>
> **[2:15](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-categorical-bivariate-tests-to-table-1?u=76281980&t=135)** Let's highlight it and do control-c then put it in our table.
>
> **[2:23](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-categorical-bivariate-tests-to-table-1?u=76281980&t=143)** So let's paste this in.
>
> **[2:24](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-categorical-bivariate-tests-to-table-1?u=76281980&t=144)** Let's make sure we first select our merged cell then go to the formula bar and do control-v and enter.
>
> **[2:33](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-categorical-bivariate-tests-to-table-1?u=76281980&t=153)** See how it resolves?
>
> **[2:35](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-categorical-bivariate-tests-to-table-1?u=76281980&t=155)** This is a tiny, little p-value.
>
> **[2:38](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-categorical-bivariate-tests-to-table-1?u=76281980&t=158)** Okay we get it. It's significant.
>
> **[2:40](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-categorical-bivariate-tests-to-table-1?u=76281980&t=160)** But you can't really say 0000, because the answer is actually really tiny, not zero.
>
> **[2:48](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-categorical-bivariate-tests-to-table-1?u=76281980&t=168)** So the way you indicate that, is not to say 0000, but to say less than 0.0001.
>
> **[2:57](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-categorical-bivariate-tests-to-table-1?u=76281980&t=177)** Let's type that.
>
> **[2:59](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-categorical-bivariate-tests-to-table-1?u=76281980&t=179)** We'll type over what we just put in there.
>
> **[3:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-categorical-bivariate-tests-to-table-1?u=76281980&t=180)** We'll put a less than sign and then 0.0001.
>
> **[3:07](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-categorical-bivariate-tests-to-table-1?u=76281980&t=187)** Enter. Great.
>
> **[3:10](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-categorical-bivariate-tests-to-table-1?u=76281980&t=190)** See, I designate this field in Excel to display out to four decimals.
>
> **[3:15](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-categorical-bivariate-tests-to-table-1?u=76281980&t=195)** But like I said, with the curse of big data, you'll see that most of the test results are going to be just like this one.
>
> **[3:22](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-categorical-bivariate-tests-to-table-1?u=76281980&t=202)** Less than 0.0001.
>
> **[3:25](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-categorical-bivariate-tests-to-table-1?u=76281980&t=205)** But not all of them.
>
> **[3:26](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-categorical-bivariate-tests-to-table-1?u=76281980&t=206)** Let's go back to R.
>
> **[3:28](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-categorical-bivariate-tests-to-table-1?u=76281980&t=208)** Okay, let's make a macro shall we?
>
> **[3:31](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-categorical-bivariate-tests-to-table-1?u=76281980&t=211)** Since we have to run this a zillion times, let's do it.
>
> **[3:36](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-categorical-bivariate-tests-to-table-1?u=76281980&t=216)** We'll call up the library gtools.
>
> **[3:40](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-categorical-bivariate-tests-to-table-1?u=76281980&t=220)** Control-r to run.
>
> **[3:41](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-categorical-bivariate-tests-to-table-1?u=76281980&t=221)** And now, here's my macro.
>
> **[3:44](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-categorical-bivariate-tests-to-table-1?u=76281980&t=224)** I used defmacro again.
>
> **[3:46](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-categorical-bivariate-tests-to-table-1?u=76281980&t=226)** I'm naming my macro ChiTest, how creative.
>
> **[3:49](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-categorical-bivariate-tests-to-table-1?u=76281980&t=229)** You will see that the changes from the above code is the variable name, like the grouping variable, and the table we output's name.
>
> **[3:57](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-categorical-bivariate-tests-to-table-1?u=76281980&t=237)** Notice I concatenated the commands with a semicolon, you should not make a habit of that, but it makes sense in the macro.
>
> **[4:05](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-categorical-bivariate-tests-to-table-1?u=76281980&t=245)** It's better to just put the code on separate lines, but you have to do the semicolon in the macro or it doesn't understand that.
>
> **[4:12](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-categorical-bivariate-tests-to-table-1?u=76281980&t=252)** Let's run this defmacro code to load the macro.
>
> **[4:15](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-categorical-bivariate-tests-to-table-1?u=76281980&t=255)** Highlight, control-r. Great.
>
> **[4:18](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-categorical-bivariate-tests-to-table-1?u=76281980&t=258)** The macro is loaded.
>
> **[4:20](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-categorical-bivariate-tests-to-table-1?u=76281980&t=260)** Okay, now let's run the macro chi-test we just made on our outgroup variable to make sure it works.
>
> **[4:26](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-categorical-bivariate-tests-to-table-1?u=76281980&t=266)** Highlight and control-r.
>
> **[4:28](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-categorical-bivariate-tests-to-table-1?u=76281980&t=268)** Great, there it is.
>
> **[4:30](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-categorical-bivariate-tests-to-table-1?u=76281980&t=270)** Let me demonstrate the next variable.
>
> **[4:32](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-categorical-bivariate-tests-to-table-1?u=76281980&t=272)** Age is next.
>
> **[4:33](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-categorical-bivariate-tests-to-table-1?u=76281980&t=273)** So let's do X_Age_Grp.
>
> **[4:37](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-categorical-bivariate-tests-to-table-1?u=76281980&t=277)** Highlight that line and control-r to run.
>
> **[4:41](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-categorical-bivariate-tests-to-table-1?u=76281980&t=281)** Let's look in the console.
>
> **[4:42](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-categorical-bivariate-tests-to-table-1?u=76281980&t=282)** Surprise, surprise.
>
> **[4:44](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-categorical-bivariate-tests-to-table-1?u=76281980&t=284)** Totally tiny p-value.
>
> **[4:46](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-categorical-bivariate-tests-to-table-1?u=76281980&t=286)** So we put the less than 0.0001 thing in the table for age, just like we did for alcohol.
>
> **[4:54](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-categorical-bivariate-tests-to-table-1?u=76281980&t=294)** Let's go do this.
>
> **[4:55](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-categorical-bivariate-tests-to-table-1?u=76281980&t=295)** Okay, let's highlight our cell from the alcohol result, do control-c for copy, then go to the cell for the Age test result, and do control-v.
>
> **[5:04](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-categorical-bivariate-tests-to-table-1?u=76281980&t=304)** We don't need to paste values this time because we are keeping the formatting.
>
> **[5:08](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-categorical-bivariate-tests-to-table-1?u=76281980&t=308)** So control-v for paste is fine.
>
> **[5:11](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-categorical-bivariate-tests-to-table-1?u=76281980&t=311)** Let's return to our code.
>
> **[5:13](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-categorical-bivariate-tests-to-table-1?u=76281980&t=313)** Okay, let's look at our code here and you will see how I called up the macro on all of the other fields.
>
> **[5:19](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-categorical-bivariate-tests-to-table-1?u=76281980&t=319)** Let's highlight and run all of these.
>
> **[5:23](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-categorical-bivariate-tests-to-table-1?u=76281980&t=323)** And control-r.
>
> **[5:25](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-categorical-bivariate-tests-to-table-1?u=76281980&t=325)** Now they are all in the console and just need to be copied out to the spreadsheet.
>
> **[5:29](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-categorical-bivariate-tests-to-table-1?u=76281980&t=329)** I'll show you what it looks like when it's done.
>
> **[5:32](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-categorical-bivariate-tests-to-table-1?u=76281980&t=332)** Here we are.
>
> **[5:33](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-categorical-bivariate-tests-to-table-1?u=76281980&t=333)** Let's scroll down and look at our test.
>
> **[5:36](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-categorical-bivariate-tests-to-table-1?u=76281980&t=336)** Well, it's no surprise.
>
> **[5:38](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-categorical-bivariate-tests-to-table-1?u=76281980&t=338)** Less than 0.0001 was the same answer for almost all of them, actually except Hispanic ethnicity.
>
> **[5:47](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-categorical-bivariate-tests-to-table-1?u=76281980&t=347)** Let's look at that one.
>
> **[5:49](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-categorical-bivariate-tests-to-table-1?u=76281980&t=349)** It was actually greater than 0.05, so I'm pretty convinced that in Bivariate Analysis Hispanic ethnicity has nothing to do with asthma status.
>
> **[6:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-categorical-bivariate-tests-to-table-1?u=76281980&t=360)** You need to keep these findings in mind when you later do regressions in the next course.
>
> **[6:05](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-categorical-bivariate-tests-to-table-1?u=76281980&t=365)** This finding suggests that the Hispanic variable won't survive a multivariate modeling process.
>
> **[6:12](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-categorical-bivariate-tests-to-table-1?u=76281980&t=372)** But let's also scroll down to look at Health plan because I want to point out something.
>
> **[6:18](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-categorical-bivariate-tests-to-table-1?u=76281980&t=378)** Health plan is just barely statistically significant.
>
> **[6:22](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-categorical-bivariate-tests-to-table-1?u=76281980&t=382)** That one might also not survive a modeling in a regression either.
>
> **[6:27](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-categorical-bivariate-tests-to-table-1?u=76281980&t=387)** But you never know until you actually try it.
>
> **[6:30](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-categorical-bivariate-tests-to-table-1?u=76281980&t=390)** Alright here we are, the code is saved under 230_Table 1 chisq.
>
> **[6:37](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-categorical-bivariate-tests-to-table-1?u=76281980&t=397)** Go have fun with this code yourself and take a look at that macro.
>
> **[6:40](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-categorical-bivariate-tests-to-table-1?u=76281980&t=400)** Macros really save time and space.
>
> **[6:43](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-categorical-bivariate-tests-to-table-1?u=76281980&t=403)** Good job! We finished Categorical Table 1 by running tests, outputting them, and updating our table with the results.
>
> **[6:51](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-categorical-bivariate-tests-to-table-1?u=76281980&t=411)** Unfortunately, the results were kind of boring because most were significant as I predicted.
>
> **[6:56](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-categorical-bivariate-tests-to-table-1?u=76281980&t=416)** That's the problem with big data.
>
> **[6:58](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-categorical-bivariate-tests-to-table-1?u=76281980&t=418)** Statistically significant results can be very close so they are not clinically or practically significant in real life.
>
> **[7:05](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-categorical-bivariate-tests-to-table-1?u=76281980&t=425)** That's why Bivariate tests likes these are more revealing on smaller samples.
>
> **[7:10](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-categorical-bivariate-tests-to-table-1?u=76281980&t=430)** Okay, are you ready for doing Bivariate tests for our Continuous Table?
>
> **[7:15](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-categorical-bivariate-tests-to-table-1?u=76281980&t=435)** Let's do that in the next section.

> [!info]- Semantic Content
>
> **Code Keywords:** let (23), function (4), this. (2), override (1)
> **Env Vars:** mass (5), asthma4 (1), alcgrp (1)
> **CLI Commands:** make (5), find (1)
> **Versions:** 0.0001 (5), 0.05 (1)
> **UI Navigation:** go to (3), scroll down (2)
> **Cross-References:** in the next (2), go back to (1)
> **Analogies:** just like (2)
> **Definitions:** is a  (1)

#### Introduction to ANOVA and linear regression code
> [LinkedIn Learning](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/introduction-to-anova-and-linear-regression-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/introduction-to-anova-and-linear-regression-code?u=76281980&t=0)** - Hi there.
>
> **[0:01](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/introduction-to-anova-and-linear-regression-code?u=76281980&t=1)** Before we jump into coding, I just wanted to prepare you for what we will see when we run our ANOVA in Linear Regression Code.
>
> **[0:09](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/introduction-to-anova-and-linear-regression-code?u=76281980&t=9)** First, I'm going to talk about linear regression and ANOVA so I can more easily explain the lm code.
>
> **[0:17](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/introduction-to-anova-and-linear-regression-code?u=76281980&t=17)** That is because you actually use linear model code, or lm code, to get the ANOVA's to come out.
>
> **[0:25](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/introduction-to-anova-and-linear-regression-code?u=76281980&t=25)** Then I'll explain how to interpret the results.
>
> **[0:28](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/introduction-to-anova-and-linear-regression-code?u=76281980&t=28)** I'll give you insight on what to pay attention to and what to ignore.
>
> **[0:32](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/introduction-to-anova-and-linear-regression-code?u=76281980&t=32)** Just to remind you of what we are doing with bivariate tests with a categorical variable and a continuous variable, we are going to want to make sure we run ANOVA on three plus level variables and t-tests on two level variables.
>
> **[0:47](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/introduction-to-anova-and-linear-regression-code?u=76281980&t=47)** A quick review of our data dictionary on this topic shows we need t-tests only for SEX and for ASTHMA.
>
> **[0:55](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/introduction-to-anova-and-linear-regression-code?u=76281980&t=55)** The rest are all three levels at least.
>
> **[0:58](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/introduction-to-anova-and-linear-regression-code?u=76281980&t=58)** So that's what we'll do, two t-tests and a bunch of ANOVA's.
>
> **[1:03](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/introduction-to-anova-and-linear-regression-code?u=76281980&t=63)** Now this is kind of how it works in all statistical packages.
>
> **[1:07](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/introduction-to-anova-and-linear-regression-code?u=76281980&t=67)** You know how when you want to buy a swimsuit top and you always get the bottom with it even if you don't want the bottom like you want to mix and match?
>
> **[1:16](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/introduction-to-anova-and-linear-regression-code?u=76281980&t=76)** I guess you might not relate to that if you're guy.
>
> **[1:18](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/introduction-to-anova-and-linear-regression-code?u=76281980&t=78)** I don't know, maybe there's a male version of this analogy.
>
> **[1:21](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/introduction-to-anova-and-linear-regression-code?u=76281980&t=81)** But if you're a guy, imagine you're a woman buying a bikini.
>
> **[1:24](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/introduction-to-anova-and-linear-regression-code?u=76281980&t=84)** You want to buy the top, but you get the bottom along with it whether you want it or not and vice versa.
>
> **[1:30](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/introduction-to-anova-and-linear-regression-code?u=76281980&t=90)** If you are just trying to buy the bottom, you are forced to buy the top, too.
>
> **[1:34](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/introduction-to-anova-and-linear-regression-code?u=76281980&t=94)** And that is the way ANOVA and linear regression are.
>
> **[1:37](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/introduction-to-anova-and-linear-regression-code?u=76281980&t=97)** You may want one, maybe you want the ANOVA, or maybe you want the linear regression, but it's just one command that produces both.
>
> **[1:46](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/introduction-to-anova-and-linear-regression-code?u=76281980&t=106)** So you have to do what I do, which is buy two whole bikinis if you want to mix and match.
>
> **[1:50](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/introduction-to-anova-and-linear-regression-code?u=76281980&t=110)** In other words, if you want the ANOVA, just run the whole thing and ignore the linear regression and keep the ANOVA.
>
> **[1:58](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/introduction-to-anova-and-linear-regression-code?u=76281980&t=118)** But if you are looking for the linear regression output, skip over the ANOVA and go for the linear regression.
>
> **[2:04](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/introduction-to-anova-and-linear-regression-code?u=76281980&t=124)** In our case, we only need one piece of the swimsuit, the ANOVA piece, so we'll just ignore the linear regression piece.
>
> **[2:12](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/introduction-to-anova-and-linear-regression-code?u=76281980&t=132)** So to conclude, linear regression and ANOVA come together, even if you only wanted the ANOVA, it's a two-for-one sale you can't get out of.
>
> **[2:21](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/introduction-to-anova-and-linear-regression-code?u=76281980&t=141)** So we really only want the ANOVA for now and when we run the code, I will show you how to pick the ANOVA results out of the output and ignore the linear regression results.
>
> **[2:31](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/introduction-to-anova-and-linear-regression-code?u=76281980&t=151)** Since most of our variables have more than two levels, we'll be doing a lot of ANOVA's in this project, like an ANOVA party, right?
>
> **[2:39](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/introduction-to-anova-and-linear-regression-code?u=76281980&t=159)** Join me in the next section for an absolute party of ANOVA's.

> [!info]- Semantic Content
>
> **Env Vars:** anova (18), sex (1), asthma (1)
> **Code Keywords:** match. (1), case, (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Definitions:** in other words (1)
> **Analogies:** imagine (1)
> **Speakers:** - hi (1)

#### Adding continuous bivariate tests to Table 1
> [LinkedIn Learning](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-continuous-bivariate-tests-to-table-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-continuous-bivariate-tests-to-table-1?u=76281980&t=0)** - [Narrator] Hello there.
>
> **[0:01](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-continuous-bivariate-tests-to-table-1?u=76281980&t=1)** In this section, we will finish up our continuous Table 1 by adding continuous bivariate tests.
>
> **[0:09](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-continuous-bivariate-tests-to-table-1?u=76281980&t=9)** I'm going to start with a demonstration of lm code, otherwise known as linear model code, that you need to get the ANOVAs out.
>
> **[0:16](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-continuous-bivariate-tests-to-table-1?u=76281980&t=16)** After we fire up that code and get it going, I'll explain how to interpret the results.
>
> **[0:22](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-continuous-bivariate-tests-to-table-1?u=76281980&t=22)** Then, after we get all of our ANOVAs done, we'll do a few t-tests, copying the results into our continuous Table 1 all along the way.
>
> **[0:31](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-continuous-bivariate-tests-to-table-1?u=76281980&t=31)** And then we'll be done with our descriptive analysis.
>
> **[0:34](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-continuous-bivariate-tests-to-table-1?u=76281980&t=34)** Let's go to R.
>
> **[0:36](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-continuous-bivariate-tests-to-table-1?u=76281980&t=36)** So, here is the linear regression/ANOVA code.
>
> **[0:41](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-continuous-bivariate-tests-to-table-1?u=76281980&t=41)** I named it 235_Table 1 ANOVAS.
>
> **[0:45](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-continuous-bivariate-tests-to-table-1?u=76281980&t=45)** See this lm?
>
> **[0:47](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-continuous-bivariate-tests-to-table-1?u=76281980&t=47)** That stands for linear model.
>
> **[0:49](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-continuous-bivariate-tests-to-table-1?u=76281980&t=49)** Then you say formula, and you say the Y equals the X.
>
> **[0:54](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-continuous-bivariate-tests-to-table-1?u=76281980&t=54)** This is simple linear regression with one-way ANOVA, just one X.
>
> **[0:59](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-continuous-bivariate-tests-to-table-1?u=76281980&t=59)** So we are putting AlCGRP as the X and SLEPTIM2 as the Y.
>
> **[1:04](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-continuous-bivariate-tests-to-table-1?u=76281980&t=64)** Then we say what data we are using, analytic.
>
> **[1:08](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-continuous-bivariate-tests-to-table-1?u=76281980&t=68)** See how we turn this into an object called AlcANOVA?
>
> **[1:12](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-continuous-bivariate-tests-to-table-1?u=76281980&t=72)** The reason is that in order to get the p-value and F-test out of the ANOVA, we need to actually make the ANOVA results into an object and then run a summary function on the object.
>
> **[1:23](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-continuous-bivariate-tests-to-table-1?u=76281980&t=83)** After all, what we actually want from the ANOVA is the p-value.
>
> **[1:27](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-continuous-bivariate-tests-to-table-1?u=76281980&t=87)** So let's highlight the code and do Control + R.
>
> **[1:31](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-continuous-bivariate-tests-to-table-1?u=76281980&t=91)** Alright, first let's look at this console.
>
> **[1:34](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-continuous-bivariate-tests-to-table-1?u=76281980&t=94)** See where it says coefficients up here?
>
> **[1:37](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-continuous-bivariate-tests-to-table-1?u=76281980&t=97)** That's the linear regression.
>
> **[1:39](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-continuous-bivariate-tests-to-table-1?u=76281980&t=99)** That's the part of the swimsuit we had to buy but didn't want, as I said in my last movie.
>
> **[1:44](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-continuous-bivariate-tests-to-table-1?u=76281980&t=104)** Let's ignore it and go lower here.
>
> **[1:47](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-continuous-bivariate-tests-to-table-1?u=76281980&t=107)** See down here, F statistic?
>
> **[1:49](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-continuous-bivariate-tests-to-table-1?u=76281980&t=109)** That's close to what we actually want for Table 1.
>
> **[1:53](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-continuous-bivariate-tests-to-table-1?u=76281980&t=113)** We actually want the p-value on that F statistic.
>
> **[1:57](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-continuous-bivariate-tests-to-table-1?u=76281980&t=117)** See that p-value next to it?
>
> **[2:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-continuous-bivariate-tests-to-table-1?u=76281980&t=120)** Oof, that's not a good p-value.
>
> **[2:02](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-continuous-bivariate-tests-to-table-1?u=76281980&t=122)** 0.8891? That's very high.
>
> **[2:07](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-continuous-bivariate-tests-to-table-1?u=76281980&t=127)** That says that the mean sleep duration in each alcohol group is not statistically significantly different.
>
> **[2:13](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-continuous-bivariate-tests-to-table-1?u=76281980&t=133)** Not even one is different from any of the others.
>
> **[2:17](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-continuous-bivariate-tests-to-table-1?u=76281980&t=137)** Let's go add this to our table.
>
> **[2:20](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-continuous-bivariate-tests-to-table-1?u=76281980&t=140)** Here we go.
>
> **[2:21](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-continuous-bivariate-tests-to-table-1?u=76281980&t=141)** See how it says NA in the first test?
>
> **[2:24](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-continuous-bivariate-tests-to-table-1?u=76281980&t=144)** That's for the all line.
>
> **[2:26](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-continuous-bivariate-tests-to-table-1?u=76281980&t=146)** Obviously there are no groups, so nothing to test there.
>
> **[2:29](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-continuous-bivariate-tests-to-table-1?u=76281980&t=149)** But then see how I merged these three cells for the alcohol levels and then put the super high p-value in it?
>
> **[2:36](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-continuous-bivariate-tests-to-table-1?u=76281980&t=156)** Well, our statistics are going well, but our hypothesis is off to a bad start.
>
> **[2:41](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-continuous-bivariate-tests-to-table-1?u=76281980&t=161)** Let's hope at least some of the other variables will have p-values less than 0.0001.
>
> **[2:47](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-continuous-bivariate-tests-to-table-1?u=76281980&t=167)** That's usually how it works.
>
> **[2:49](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-continuous-bivariate-tests-to-table-1?u=76281980&t=169)** Let's go back to our code.
>
> **[2:51](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-continuous-bivariate-tests-to-table-1?u=76281980&t=171)** Okay, you can imagine what's next, since you've got to know how I roll.
>
> **[2:56](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-continuous-bivariate-tests-to-table-1?u=76281980&t=176)** I'm going to build this ANOVA into a macro, and we'll just call this macro a bunch of times.
>
> **[3:02](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-continuous-bivariate-tests-to-table-1?u=76281980&t=182)** Here again we need to load the library gtools.
>
> **[3:05](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-continuous-bivariate-tests-to-table-1?u=76281980&t=185)** Let's run that line.
>
> **[3:07](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-continuous-bivariate-tests-to-table-1?u=76281980&t=187)** Great.
>
> **[3:08](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-continuous-bivariate-tests-to-table-1?u=76281980&t=188)** And here I built our macro using defmacro and named it the highly creative name of ANOVATest.
>
> **[3:13](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-continuous-bivariate-tests-to-table-1?u=76281980&t=193)** For this macro, the only variables I need to change out each time are the grouping variable, which I call VarName, and the output variable, which I call TblName.
>
> **[3:23](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-continuous-bivariate-tests-to-table-1?u=76281980&t=203)** See, I use the semicolon to concatenate the two lines of code in the macro.
>
> **[3:28](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-continuous-bivariate-tests-to-table-1?u=76281980&t=208)** Let's highlight and run to load the macro.
>
> **[3:31](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-continuous-bivariate-tests-to-table-1?u=76281980&t=211)** Now let's call up that macro on ALCGRP just to make sure it works the same way it just did now that it's in a macro.
>
> **[3:39](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-continuous-bivariate-tests-to-table-1?u=76281980&t=219)** Highlight, Control + R.
>
> **[3:41](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-continuous-bivariate-tests-to-table-1?u=76281980&t=221)** And let's click on the console.
>
> **[3:43](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-continuous-bivariate-tests-to-table-1?u=76281980&t=223)** Yes, we still have our disappointing p-value.
>
> **[3:46](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-continuous-bivariate-tests-to-table-1?u=76281980&t=226)** It works.
>
> **[3:48](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-continuous-bivariate-tests-to-table-1?u=76281980&t=228)** So as you can see, you just call up the macro a bunch of times and then put those answers into the table.
>
> **[3:54](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-continuous-bivariate-tests-to-table-1?u=76281980&t=234)** Let's run all these lines of code.
>
> **[3:57](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-continuous-bivariate-tests-to-table-1?u=76281980&t=237)** Highlight, Control + R.
>
> **[3:59](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-continuous-bivariate-tests-to-table-1?u=76281980&t=239)** That output a lot to our console.
>
> **[4:02](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-continuous-bivariate-tests-to-table-1?u=76281980&t=242)** So you can scroll up and see these p-values.
>
> **[4:05](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-continuous-bivariate-tests-to-table-1?u=76281980&t=245)** You can see that most of them are tiny, tiny.
>
> **[4:09](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-continuous-bivariate-tests-to-table-1?u=76281980&t=249)** As we did with Table 1 categorical and our chi-square test, if they are so low that out to four digits after the decimal point they are rounded to zero, then we just put less than 0.0001 in the table.
>
> **[4:23](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-continuous-bivariate-tests-to-table-1?u=76281980&t=263)** I actually ran these one at a time when I was filling out the rest of the table.
>
> **[4:28](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-continuous-bivariate-tests-to-table-1?u=76281980&t=268)** Let's go look at what it looks like when they are all filled in.
>
> **[4:33](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-continuous-bivariate-tests-to-table-1?u=76281980&t=273)** Okay, we can scroll down, and we see we have all the ANOVA results in there.
>
> **[4:38](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-continuous-bivariate-tests-to-table-1?u=76281980&t=278)** But we are still missing sex and asthma, because they need t-tests.
>
> **[4:44](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-continuous-bivariate-tests-to-table-1?u=76281980&t=284)** That's in the next code, but we have the rest.
>
> **[4:47](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-continuous-bivariate-tests-to-table-1?u=76281980&t=287)** These are all less than 0.0001, except Hispanic.
>
> **[4:53](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-continuous-bivariate-tests-to-table-1?u=76281980&t=293)** Hispanic was still significant, but not as significant as the rest.
>
> **[4:58](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-continuous-bivariate-tests-to-table-1?u=76281980&t=298)** They sleep significantly less, according to this bivariate analysis.
>
> **[5:03](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-continuous-bivariate-tests-to-table-1?u=76281980&t=303)** Let's also look at education level.
>
> **[5:06](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-continuous-bivariate-tests-to-table-1?u=76281980&t=306)** It is barely significant, not sure why.
>
> **[5:10](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-continuous-bivariate-tests-to-table-1?u=76281980&t=310)** The estimates look really close to me.
>
> **[5:12](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-continuous-bivariate-tests-to-table-1?u=76281980&t=312)** See, that's where you have to be practical.
>
> **[5:16](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-continuous-bivariate-tests-to-table-1?u=76281980&t=316)** Let's also look at exercise status.
>
> **[5:19](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-continuous-bivariate-tests-to-table-1?u=76281980&t=319)** Whoa, exercise status was totally not related to sleep duration.
>
> **[5:24](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-continuous-bivariate-tests-to-table-1?u=76281980&t=324)** That's unusual.
>
> **[5:25](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-continuous-bivariate-tests-to-table-1?u=76281980&t=325)** Common knowledge is that people who exercise regularly sleep better.
>
> **[5:30](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-continuous-bivariate-tests-to-table-1?u=76281980&t=330)** But maybe they don't sleep more, or maybe it just doesn't work that way in veterans.
>
> **[5:35](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-continuous-bivariate-tests-to-table-1?u=76281980&t=335)** Let's go back to R and do our t-tests on sex and asthma so we can finish up this table.
>
> **[5:41](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-continuous-bivariate-tests-to-table-1?u=76281980&t=341)** You'll see I am working in new code called 240_Table 1 ttests.
>
> **[5:47](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-continuous-bivariate-tests-to-table-1?u=76281980&t=347)** As you can see, the t-test command could not be simpler.
>
> **[5:50](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-continuous-bivariate-tests-to-table-1?u=76281980&t=350)** You put t.test, then the dependent variable, which is sleep time, a tilde, and then the categorical variable that has two levels.
>
> **[5:58](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-continuous-bivariate-tests-to-table-1?u=76281980&t=358)** Let's run the first one, which is asthma.
>
> **[6:01](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-continuous-bivariate-tests-to-table-1?u=76281980&t=361)** Let's highlight and Control + R.
>
> **[6:03](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-continuous-bivariate-tests-to-table-1?u=76281980&t=363)** Okay, let's look in the console for the results.
>
> **[6:07](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-continuous-bivariate-tests-to-table-1?u=76281980&t=367)** Okay, see the t statistic on the first line, then followed by the degrees of freedom, and then the p-value on the t statistic?
>
> **[6:15](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-continuous-bivariate-tests-to-table-1?u=76281980&t=375)** Very small, less than 0.0001.
>
> **[6:20](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-continuous-bivariate-tests-to-table-1?u=76281980&t=380)** We'll remember this and add it to our Table 1.
>
> **[6:23](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-continuous-bivariate-tests-to-table-1?u=76281980&t=383)** And our only other binary grouping variable is sex, so let's run that.
>
> **[6:29](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-continuous-bivariate-tests-to-table-1?u=76281980&t=389)** Highlight and Control + R.
>
> **[6:31](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-continuous-bivariate-tests-to-table-1?u=76281980&t=391)** Here in the console, we see a very tiny p-value again.
>
> **[6:36](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-continuous-bivariate-tests-to-table-1?u=76281980&t=396)** Again, less than 0.0001.
>
> **[6:40](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-continuous-bivariate-tests-to-table-1?u=76281980&t=400)** Once we transfer this to our continuous Table 1, we're done.
>
> **[6:44](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-continuous-bivariate-tests-to-table-1?u=76281980&t=404)** I did that, and now let's look at our completed continuous Table 1.
>
> **[6:49](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-continuous-bivariate-tests-to-table-1?u=76281980&t=409)** Okay, here's our final final table, with the t-tests added.
>
> **[6:53](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-continuous-bivariate-tests-to-table-1?u=76281980&t=413)** Table 1 continuous is complete.
>
> **[6:57](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-continuous-bivariate-tests-to-table-1?u=76281980&t=417)** Congratulations, we are done with the descriptive analysis of the sample.
>
> **[7:01](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-continuous-bivariate-tests-to-table-1?u=76281980&t=421)** In this section, we did our continuous bivariate statistical tests, mostly ANOVAs, but also two t-tests, and put them on our continuous Table 1.
>
> **[7:10](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-continuous-bivariate-tests-to-table-1?u=76281980&t=430)** Now we are done with our descriptive analysis.
>
> **[7:13](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-continuous-bivariate-tests-to-table-1?u=76281980&t=433)** In this section, we put the cherry on top of our continuous Table 1 by adding ANOVA and t-test p-values.
>
> **[7:20](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-continuous-bivariate-tests-to-table-1?u=76281980&t=440)** Now you are almost done with the course.
>
> **[7:23](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/adding-continuous-bivariate-tests-to-table-1?u=76281980&t=443)** The last chapter wraps up what we learned.

> [!info]- Semantic Content
>
> **Code Keywords:** let (21), function (1), super (1)
> **Env Vars:** anova (8), anovas (1), sleptim2 (1), alcgrp (1)
> **Versions:** 0.0001 (5), 0.8891 (1)
> **UI Navigation:** go to (1), click on (1), scroll up (1), scroll down (1)
> **Cross-References:** go back to (2), in the next (1)
> **CLI Commands:** make (2)
> **Definitions:** known as (1), stands for (1)
> **Analogies:** imagine (1)

#### Challenge: Do a weighted analysis
> [LinkedIn Learning](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-do-a-weighted-analysis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-do-a-weighted-analysis?u=76281980&t=0)** - [Instructor] Let's do a challenge to remember how to do a weighted analysis.
>
> **[0:10](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-do-a-weighted-analysis?u=76281980&t=10)** For this, we'll use the NHANES dataset as described in the handout with this challenge.
>
> **[0:18](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-do-a-weighted-analysis?u=76281980&t=18)** NHANES stands for National Health and Nutrition Examination Survey, and it's a lot like the BRFSS in that it includes a lot of the same questionnaires.
>
> **[0:29](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-do-a-weighted-analysis?u=76281980&t=29)** What's different is NHANES also includes examination data where people come in person for data collection.
>
> **[0:36](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-do-a-weighted-analysis?u=76281980&t=36)** Another difference with NHANES is that it's split up into a lot of different data sets.
>
> **[0:41](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-do-a-weighted-analysis?u=76281980&t=41)** While the core data for the BRFSS is just one big table, but NHANES has a lot of attributes in common with BRFSS.
>
> **[0:51](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-do-a-weighted-analysis?u=76281980&t=51)** Like with BRFSS, the NHANES dataset are stored in .xpt format.
>
> **[0:57](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-do-a-weighted-analysis?u=76281980&t=57)** For this challenge, we'll be using the P_demo.xpt dataset, the demographic dataset, which you can find using the link in the handout.
>
> **[1:07](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-do-a-weighted-analysis?u=76281980&t=67)** As you probably guessed, we're using the demographic dataset because that's the one with the weighting variables in it that we'll need for our analysis.
>
> **[1:15](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-do-a-weighted-analysis?u=76281980&t=75)** We'll need those variables to specify the survey design.
>
> **[1:20](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-do-a-weighted-analysis?u=76281980&t=80)** We'll also use those variables and the survey design to calculate weighted proportions and counts.
>
> **[1:27](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-do-a-weighted-analysis?u=76281980&t=87)** On the slide, I listed the variables important to the challenge.
>
> **[1:31](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-do-a-weighted-analysis?u=76281980&t=91)** The weighting variables are on the left side of the slide.
>
> **[1:35](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-do-a-weighted-analysis?u=76281980&t=95)** These are WTINTPRP for the full sample interview weight, SDMVPSU for the masked variance pseudo primary sampling unit or PSU, and SDMVSTRA for the masked variance pseudo stratum.
>
> **[1:55](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-do-a-weighted-analysis?u=76281980&t=115)** Don't worry if you feel confused because the challenge will help you set up the weight variables.
>
> **[2:02](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-do-a-weighted-analysis?u=76281980&t=122)** What you should focus on for the challenge are the other variables we'll use.
>
> **[2:06](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-do-a-weighted-analysis?u=76281980&t=126)** These are DMDBORN4, which is the country of birth and RIDAGEYR, which is the age at screening.
>
> **[2:15](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-do-a-weighted-analysis?u=76281980&t=135)** I've already started the challenge code for you.
>
> **[2:17](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-do-a-weighted-analysis?u=76281980&t=137)** Here's the beginning of it.
>
> **[2:20](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-do-a-weighted-analysis?u=76281980&t=140)** As I mentioned before, the dataset is in .xpt format.
>
> **[2:25](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-do-a-weighted-analysis?u=76281980&t=145)** Therefore, we start by calling up the foreign package, and then we use the read export command to import the p_demo dataset into the R environment.
>
> **[2:35](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-do-a-weighted-analysis?u=76281980&t=155)** We name the data frame demo_A, and then run an nrow on it to count the rows.
>
> **[2:42](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-do-a-weighted-analysis?u=76281980&t=162)** I also included some code where we make an example variable.
>
> **[2:46](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-do-a-weighted-analysis?u=76281980&t=166)** You'll want to pay attention to this for the challenge.
>
> **[2:50](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-do-a-weighted-analysis?u=76281980&t=170)** Notice the code at the top of the slide makes a variable called one that is just filled in entirely with the number one.
>
> **[2:58](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-do-a-weighted-analysis?u=76281980&t=178)** This is a variable that's useful for counting rows.
>
> **[3:01](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-do-a-weighted-analysis?u=76281980&t=181)** You'll notice us using that variable in subsequent code.
>
> **[3:06](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-do-a-weighted-analysis?u=76281980&t=186)** Next, you'll see that we refer to the native variable DMDBORN4 to create a flag variable called USBORN.
>
> **[3:15](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-do-a-weighted-analysis?u=76281980&t=195)** USBORN is zero for people not born in the United States, and one for people who are.
>
> **[3:21](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-do-a-weighted-analysis?u=76281980&t=201)** Then we run a table command to check the recode.
>
> **[3:24](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-do-a-weighted-analysis?u=76281980&t=204)** You'll want to make flag variables that you use in a weighted analysis.
>
> **[3:31](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-do-a-weighted-analysis?u=76281980&t=211)** Part of the reason I started the challenge code for you is so you didn't have to figure out how to use the weight variables in making the survey design.
>
> **[3:39](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-do-a-weighted-analysis?u=76281980&t=219)** We call that up using the library command, and I'm also setting the option survey.lonely.PSU to adjust, which helps reduce small cells.
>
> **[3:49](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-do-a-weighted-analysis?u=76281980&t=229)** Next we have the command to create the survey design.
>
> **[3:51](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-do-a-weighted-analysis?u=76281980&t=231)** We'll call NHANES_design.
>
> **[3:54](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-do-a-weighted-analysis?u=76281980&t=234)** That's the basic design based on the weight variables.
>
> **[3:58](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-do-a-weighted-analysis?u=76281980&t=238)** Okay, that's the basic design, but in order to analyze any variables, we have to update the design.
>
> **[4:06](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-do-a-weighted-analysis?u=76281980&t=246)** The challenge code shows you how to update the NHANES_design and add the flag we created called USBORN as a factor variable called USBORN_F with labels.
>
> **[4:18](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-do-a-weighted-analysis?u=76281980&t=258)** This updates the design so you can use that variable in a weighted analysis.
>
> **[4:24](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-do-a-weighted-analysis?u=76281980&t=264)** Now that we constructed our variable and edited our design, we can do our weighted analysis.
>
> **[4:31](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-do-a-weighted-analysis?u=76281980&t=271)** At the top of the code, you can see where we use the svymean command to get weighted proportions.
>
> **[4:39](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-do-a-weighted-analysis?u=76281980&t=279)** Next, we can use svytotal and the one variable we made to get the total weighted counts in the dataset.
>
> **[4:47](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-do-a-weighted-analysis?u=76281980&t=287)** And we can use svyby along with our factor variable USBORN_F and that one variable to get the weighted counts.
>
> **[4:58](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-do-a-weighted-analysis?u=76281980&t=298)** As you can see on the right, the output from the svymeans command shows proportions.
>
> **[5:04](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-do-a-weighted-analysis?u=76281980&t=304)** Also, notice that all of the output includes standard errors or SEs, so that you can construct confidence intervals later if you want.
>
> **[5:14](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-do-a-weighted-analysis?u=76281980&t=314)** Okay, now, here is what you are assigned to do in the challenge.
>
> **[5:18](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-do-a-weighted-analysis?u=76281980&t=318)** First, using the age variable RIDAGEYR, make a flag variable called older where zero means less than age 55 and one means greater than or equal to age 55.
>
> **[5:32](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-do-a-weighted-analysis?u=76281980&t=332)** Next, modify the design to add the factor variable older_F based on the older variable.
>
> **[5:39](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-do-a-weighted-analysis?u=76281980&t=339)** Also, add factor labels.
>
> **[5:43](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-do-a-weighted-analysis?u=76281980&t=343)** After that, get the weighted proportion, weighted counts and standard errors for those in the dataset age 55 and older, meaning where your older flag equals one.
>
> **[5:54](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/challenge-do-a-weighted-analysis?u=76281980&t=354)** This challenge should take you no more than 15 to 20 minutes.

> [!info]- Semantic Content
>
> **Env Vars:** nhanes (6), brfss (4), usborn (3), psu (2), dmdborn4 (2)
> **CLI Commands:** make (3), find (1)
> **Code Keywords:** let (1), this, (1)
> **Definitions:** stands for (1), is a  (1)
> **Code Identifiers:** p_demo (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Do a weighted analysis
> [LinkedIn Learning](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/solution-do-a-weighted-analysis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/solution-do-a-weighted-analysis?u=76281980&t=0)** (light upbeat music)
>
> **[0:05](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/solution-do-a-weighted-analysis?u=76281980&t=5)** - [Instructor] All right, let's find out how you did at the challenge.
>
> **[0:08](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/solution-do-a-weighted-analysis?u=76281980&t=8)** I opened the solution code I made.
>
> **[0:11](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/solution-do-a-weighted-analysis?u=76281980&t=11)** I included a reminder of variable meanings at the top of the code in a comment.
>
> **[0:16](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/solution-do-a-weighted-analysis?u=76281980&t=16)** Remember, our first assignment was to make that variable, Older, which was to contain a 1 if the respondent was age 55 or older and a 0 in all other cases.
>
> **[0:27](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/solution-do-a-weighted-analysis?u=76281980&t=27)** Let's look at that code.
>
> **[0:29](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/solution-do-a-weighted-analysis?u=76281980&t=29)** I put it below the example code for making a variable that was in the challenge code.
>
> **[0:34](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/solution-do-a-weighted-analysis?u=76281980&t=34)** Actually, let's start by running all the code that was already there from the beginning of the challenge so we can get up-to-date.
>
> **[0:57](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/solution-do-a-weighted-analysis?u=76281980&t=57)** See here, I start by making the variable, Older, and filling it in entirely with zeros.
>
> **[1:05](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/solution-do-a-weighted-analysis?u=76281980&t=65)** Then I update it on the next line.
>
> **[1:08](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/solution-do-a-weighted-analysis?u=76281980&t=68)** I tell R to update the variable with a 1 if the row meets the criteria that ridageyr is greater than or equal to 55.
>
> **[1:17](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/solution-do-a-weighted-analysis?u=76281980&t=77)** Then I run a two-way frequency table to make sure the recode worked.
>
> **[1:23](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/solution-do-a-weighted-analysis?u=76281980&t=83)** Let's run this code.
>
> **[1:29](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/solution-do-a-weighted-analysis?u=76281980&t=89)** All right, let's review the output in the console.
>
> **[1:32](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/solution-do-a-weighted-analysis?u=76281980&t=92)** Let's scroll to the top.
>
> **[1:35](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/solution-do-a-weighted-analysis?u=76281980&t=95)** We can see by the frequency table that our recode worked.
>
> **[1:39](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/solution-do-a-weighted-analysis?u=76281980&t=99)** These frequencies are listed under 0 until we get to age 55 where they are listed under 1.
>
> **[1:45](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/solution-do-a-weighted-analysis?u=76281980&t=105)** Okay, let's go back to our code.
>
> **[1:50](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/solution-do-a-weighted-analysis?u=76281980&t=110)** You'll remember we already had the code to construct the design.
>
> **[1:54](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/solution-do-a-weighted-analysis?u=76281980&t=114)** Let's run this code.
>
> **[2:11](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/solution-do-a-weighted-analysis?u=76281980&t=131)** Okay, now we have to update that design.
>
> **[2:14](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/solution-do-a-weighted-analysis?u=76281980&t=134)** Let's focus on that code.
>
> **[2:19](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/solution-do-a-weighted-analysis?u=76281980&t=139)** You probably remember that this code was included in the challenge with the USBorn_f variable.
>
> **[2:26](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/solution-do-a-weighted-analysis?u=76281980&t=146)** But you'll see here that I added the Older_f variable.
>
> **[2:30](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/solution-do-a-weighted-analysis?u=76281980&t=150)** Remember, this is the factor variable that is made based on the flag we made in the data named Older.
>
> **[2:37](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/solution-do-a-weighted-analysis?u=76281980&t=157)** As you can see, I included the levels and the labels and then closed the parenthesis at the end.
>
> **[2:44](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/solution-do-a-weighted-analysis?u=76281980&t=164)** Okay, so that was the first part of the challenge, making the new variable.
>
> **[2:48](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/solution-do-a-weighted-analysis?u=76281980&t=168)** Now let's look at using it in an analysis.
>
> **[2:53](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/solution-do-a-weighted-analysis?u=76281980&t=173)** Next, you are supposed to get weighted proportions for your new variable.
>
> **[2:58](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/solution-do-a-weighted-analysis?u=76281980&t=178)** In the challenge code, we included this command, svymean, and I showed you how to get weighted proportions for the factor variable we made called USBorn_f.
>
> **[3:09](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/solution-do-a-weighted-analysis?u=76281980&t=189)** You'll see I added this new code to run svymean on the factor variable Older_f.
>
> **[3:15](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/solution-do-a-weighted-analysis?u=76281980&t=195)** Actually, let's run all this code and see what happens.
>
> **[3:27](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/solution-do-a-weighted-analysis?u=76281980&t=207)** All righty.
>
> **[3:28](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/solution-do-a-weighted-analysis?u=76281980&t=208)** As we can see here, it looks like, for this dataset, the less than 55 year olds make up about 70% of the dataset because the proportion is 0.70.
>
> **[3:39](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/solution-do-a-weighted-analysis?u=76281980&t=219)** And those age 55 and older, you could round it up to 30%.
>
> **[3:44](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/solution-do-a-weighted-analysis?u=76281980&t=224)** And, again, you'll notice that the SE for the proportion is right next to the proportion.
>
> **[3:50](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/solution-do-a-weighted-analysis?u=76281980&t=230)** So here are the weighted proportions.
>
> **[3:52](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/solution-do-a-weighted-analysis?u=76281980&t=232)** The last part of the challenge was to get the weighted counts.
>
> **[3:57](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/solution-do-a-weighted-analysis?u=76281980&t=237)** You might remember from our challenge code, we included this svytotal command so we can get the total weighted frequency of everyone in the dataset.
>
> **[4:06](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/solution-do-a-weighted-analysis?u=76281980&t=246)** But let's look below this.
>
> **[4:08](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/solution-do-a-weighted-analysis?u=76281980&t=248)** Remember the svyby command?
>
> **[4:11](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/solution-do-a-weighted-analysis?u=76281980&t=251)** This was to get weighted frequencies of the different categories in our flag variable.
>
> **[4:15](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/solution-do-a-weighted-analysis?u=76281980&t=255)** You can see that I added the second line where we're calculating the weighted frequencies for our Older_f variable.
>
> **[4:23](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/solution-do-a-weighted-analysis?u=76281980&t=263)** Let's run all this and look at the console.
>
> **[4:33](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/solution-do-a-weighted-analysis?u=76281980&t=273)** Okay, focusing on the Older_f variable results, we can see that there are approximately 227 million people represented from this dataset who are under age 55 and about 95 million who are age 55 and over.
>
> **[4:48](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/solution-do-a-weighted-analysis?u=76281980&t=288)** See these counts under the One column?
>
> **[4:51](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/solution-do-a-weighted-analysis?u=76281980&t=291)** And for each of these frequencies, we get an SE estimate.
>
> **[4:55](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/solution-do-a-weighted-analysis?u=76281980&t=295)** There, we completed the challenge.

> [!info]- Semantic Content
>
> **Code Keywords:** let (13), this. (1)
> **CLI Commands:** make (3), find (1)
> **Versions:** 0.70 (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (light upbeat music) (1)


### Conclusion

#### Review of the metadata
> [LinkedIn Learning](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/review-of-the-metadata?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/review-of-the-metadata?u=76281980&t=0)** - [Female Voiceover] Wow, can you believe we have made it to the last chapter, chapter seven?
>
> **[0:04](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/review-of-the-metadata?u=76281980&t=4)** Great job conducting your analysis.
>
> **[0:06](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/review-of-the-metadata?u=76281980&t=6)** But before we part, let's review the metadata we accrued during this analysis.
>
> **[0:12](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/review-of-the-metadata?u=76281980&t=12)** So, in this movie, I'm going to review all the metadata we made during this course.
>
> **[0:16](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/review-of-the-metadata?u=76281980&t=16)** Can you remember it all?
>
> **[0:17](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/review-of-the-metadata?u=76281980&t=17)** I'll talk about it in roughly the same order in which me made or used it.
>
> **[0:21](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/review-of-the-metadata?u=76281980&t=21)** First, we made a web of causation, and that helped us select confounders, which we added to our data dictionary.
>
> **[0:27](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/review-of-the-metadata?u=76281980&t=27)** Next, we executed our inclusion and exclusion criteria, and we kept track of it on a spreadsheet.
>
> **[0:33](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/review-of-the-metadata?u=76281980&t=33)** Then, we made a data reduction diagram.
>
> **[0:36](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/review-of-the-metadata?u=76281980&t=36)** Of course, we generated code files as we made our code.
>
> **[0:40](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/review-of-the-metadata?u=76281980&t=40)** And we put comments in to guide us when we go back into our code later.
>
> **[0:45](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/review-of-the-metadata?u=76281980&t=45)** And, we collected miscellaneous treasures we needed for our analysis, such as resources provided by BRFSS.
>
> **[0:52](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/review-of-the-metadata?u=76281980&t=52)** It's hard to remember all this.
>
> **[0:54](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/review-of-the-metadata?u=76281980&t=54)** It seems like so much.
>
> **[0:55](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/review-of-the-metadata?u=76281980&t=55)** So, I'll quickly review it here.
>
> **[0:57](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/review-of-the-metadata?u=76281980&t=57)** First, remember how we did the web of causation?
>
> **[1:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/review-of-the-metadata?u=76281980&t=60)** We did that early on because even though we knew we were studying veterans, we selected an exposure and some outcomes, and we did not know what other variables to select from our data and include in the analysis.
>
> **[1:12](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/review-of-the-metadata?u=76281980&t=72)** The web of causation forced us to think about these relationships between variables and helped us shop for confounders.
>
> **[1:19](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/review-of-the-metadata?u=76281980&t=79)** The second big piece of metadata we made was our data dictionary.
>
> **[1:22](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/review-of-the-metadata?u=76281980&t=82)** Remember how we listed all the native variables, or the variables we decided to extract from BRFSS?
>
> **[1:29](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/review-of-the-metadata?u=76281980&t=89)** We also documented what new, calculated variables we wanted to make, to use in our analysis.
>
> **[1:35](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/review-of-the-metadata?u=76281980&t=95)** In addition, we kept track of the definitions of the levels of each categorical variable and the various taps.
>
> **[1:42](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/review-of-the-metadata?u=76281980&t=102)** This approach helped us plan how to recode categorical variables and use them in our analysis.
>
> **[1:47](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/review-of-the-metadata?u=76281980&t=107)** Just to be clear, using Excel, or some other spreadsheet program most computers can read, and most people are familiar with, is how you should be documenting your data.
>
> **[1:57](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/review-of-the-metadata?u=76281980&t=117)** If you meet an analyst who uses SAS and says, "Oh, I just use formats and labels."
>
> **[2:03](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/review-of-the-metadata?u=76281980&t=123)** Don't hire him or her.
>
> **[2:05](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/review-of-the-metadata?u=76281980&t=125)** First of all, formats and labels are only readable in SAS, which most people don't have.
>
> **[2:10](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/review-of-the-metadata?u=76281980&t=130)** And second of all, they do not provide the complete information, such as definitions, that are provided in the data dictionary.
>
> **[2:17](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/review-of-the-metadata?u=76281980&t=137)** Also, you have to have the data set itself to consume these formats and labels.
>
> **[2:22](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/review-of-the-metadata?u=76281980&t=142)** And sometimes, it's not possible to transfer the data set due to privacy of the data set.
>
> **[2:27](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/review-of-the-metadata?u=76281980&t=147)** SPSS users also suffer from the same problem, where they use variable and value labels, but they do not make a data dictionary.
>
> **[2:35](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/review-of-the-metadata?u=76281980&t=155)** This is unfortunately a problem so rampant in academia, I see a lot of professors teaching these bad habits.
>
> **[2:42](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/review-of-the-metadata?u=76281980&t=162)** They seem unaware of the concept of a data dictionary.
>
> **[2:45](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/review-of-the-metadata?u=76281980&t=165)** So I'm just warning you.
>
> **[2:46](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/review-of-the-metadata?u=76281980&t=166)** Do not make this mistake, or you will really regret it when your copy of SAS expires, and you, therefore, can't see the documentation for what you did.
>
> **[2:54](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/review-of-the-metadata?u=76281980&t=174)** Remember, another important component of our metadata was our data reduction documentation.
>
> **[3:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/review-of-the-metadata?u=76281980&t=180)** Remember how we kept a spreadsheet that documented all our exclusions, how we did them, and why?
>
> **[3:06](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/review-of-the-metadata?u=76281980&t=186)** Because we did that, it wasn't that hard to make this data reduction diagram that could actually be used in a journal, article, or PowerPoint presentation.
>
> **[3:14](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/review-of-the-metadata?u=76281980&t=194)** This documentation is really important, especially if you are writing about your analysis in a scientific paper.
>
> **[3:20](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/review-of-the-metadata?u=76281980&t=200)** I knew a student who wanted to analyze a database of babies getting vaccinated, and see if there was difference by race.
>
> **[3:28](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/review-of-the-metadata?u=76281980&t=208)** But later, she learned that the race variable was not filled in on 1/3 of the records.
>
> **[3:34](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/review-of-the-metadata?u=76281980&t=214)** Had she removed all those records, that would have limited her data set to 2/3 of what it was.
>
> **[3:40](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/review-of-the-metadata?u=76281980&t=220)** And this can cause, what is called, selection bias.
>
> **[3:44](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/review-of-the-metadata?u=76281980&t=224)** Usually, people who have data present in health data sets are, in some way, systematically different compared to those where the data are missing.
>
> **[3:52](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/review-of-the-metadata?u=76281980&t=232)** Hence, the term, bias.
>
> **[3:54](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/review-of-the-metadata?u=76281980&t=234)** It's just an unfortunate situation in life.
>
> **[3:57](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/review-of-the-metadata?u=76281980&t=237)** You really can't fill in large proportions of missing data.
>
> **[4:01](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/review-of-the-metadata?u=76281980&t=241)** But providing full documentation of your exclusions will allow the reader to assess the possibility of selection bias.
>
> **[4:09](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/review-of-the-metadata?u=76281980&t=249)** Next, we obviously have our code files.
>
> **[4:12](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/review-of-the-metadata?u=76281980&t=252)** But we followed some good practices when we made them.
>
> **[4:15](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/review-of-the-metadata?u=76281980&t=255)** We did not make one, long, convoluted, spaghetti code file.
>
> **[4:19](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/review-of-the-metadata?u=76281980&t=259)** Instead, we separated the files in a modular fashion by function.
>
> **[4:23](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/review-of-the-metadata?u=76281980&t=263)** We also named the file, starting with the numerical prefix that helped keep the file sorted in the order that we needed to run them.
>
> **[4:30](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/review-of-the-metadata?u=76281980&t=270)** At the end of the file name, we put short descriptors, such as, read and data, so we could quickly see what the file does.
>
> **[4:37](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/review-of-the-metadata?u=76281980&t=277)** Within the file, we kept our code neat, adding comments where appropriate, and using white space and tabs.
>
> **[4:43](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/review-of-the-metadata?u=76281980&t=283)** This makes the code much more pleasant to consume because you can jump immediately to the section you were looking for.
>
> **[4:49](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/review-of-the-metadata?u=76281980&t=289)** And it's just plain easy on the eyes.
>
> **[4:52](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/review-of-the-metadata?u=76281980&t=292)** Our fifth and final category of metadata, I call, miscellaneous.
>
> **[4:56](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/review-of-the-metadata?u=76281980&t=296)** But please don't confuse that with unimportant.
>
> **[5:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/review-of-the-metadata?u=76281980&t=300)** It's just that, each analysis has a different context.
>
> **[5:03](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/review-of-the-metadata?u=76281980&t=303)** So, different documentation might need to be kept to help your research group understand the analysis.
>
> **[5:09](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/review-of-the-metadata?u=76281980&t=309)** When I worked at the U.S. Army, I was provided what was called, the Disability Data Set, to use for an analysis.
>
> **[5:15](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/review-of-the-metadata?u=76281980&t=315)** I Googled around a little and found that the Government Accountability Office had written a report that demonstrated this data set was invalid and could not be used for analysis.
>
> **[5:26](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/review-of-the-metadata?u=76281980&t=326)** I certainly kept that report in my miscellaneous metadata.
>
> **[5:30](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/review-of-the-metadata?u=76281980&t=330)** For our analysis, we want to keep the BRFSS Questionnaire itself, so anyone in the group can look at the actual questions.
>
> **[5:38](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/review-of-the-metadata?u=76281980&t=338)** Also, in our case, we made a web of causation and a couple of plots, which were mainly to help guide us and not present to the public.
>
> **[5:46](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/review-of-the-metadata?u=76281980&t=346)** Still, your research team may benefit from seeing these items, as they support your thought process.
>
> **[5:52](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/review-of-the-metadata?u=76281980&t=352)** Basically, the miscellaneous metadata you keep should be anything that you think could help another analyst understand what you did, without talking to them.
>
> **[6:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/review-of-the-metadata?u=76281980&t=360)** I just reviewed the metadata we made during this course.
>
> **[6:03](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/review-of-the-metadata?u=76281980&t=363)** I also reminded you why we made it.
>
> **[6:06](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/review-of-the-metadata?u=76281980&t=366)** In the next section, I'll explain how we can continue to use it after the analysis is complete.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), this. (1), new, (1), function (1), for. (1)
> **Env Vars:** brfss (3), sas (3), spss (1)
> **CLI Commands:** make (5)
> **Analogies:** such as (3)
> **Cross-References:** in the next (1)
> **Documentation:** the documentation (1)
> **Definitions:** is called (1)
> **Warnings:** warning (1)

#### Uses of metadata
> [LinkedIn Learning](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/uses-of-metadata?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/uses-of-metadata?u=76281980&t=0)** - [Narrator] We are onto chapter seven, section two, where I reveal to you how all this metadata we made is not wasted.
>
> **[0:08](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/uses-of-metadata?u=76281980&t=8)** It's the gift that keeps on giving.
>
> **[0:10](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/uses-of-metadata?u=76281980&t=10)** In this movie, I'm going to remind you how the metadata helped us during our analysis.
>
> **[0:15](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/uses-of-metadata?u=76281980&t=15)** But I'm also going to talk about how the metadata we painstakingly made during this course can also propel us forward.
>
> **[0:23](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/uses-of-metadata?u=76281980&t=23)** So who's going to use this metadata after this analysis?
>
> **[0:26](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/uses-of-metadata?u=76281980&t=26)** Well, if you are on a team of non-analysts, it's a good way to communicate so the whole team can use it.
>
> **[0:33](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/uses-of-metadata?u=76281980&t=33)** If they wonder why you categorized things the way you did or how you came up with your variables or your analytic data set, you can show them your various metadata.
>
> **[0:42](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/uses-of-metadata?u=76281980&t=42)** Also, having all this metadata is a good way to get out of being on a project.
>
> **[0:47](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/uses-of-metadata?u=76281980&t=47)** Let's say you get too busy and want to hand the project off to another analyst when there are edits to be made.
>
> **[0:53](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/uses-of-metadata?u=76281980&t=53)** You can easily hand her all the metadata, and there will be few questions.
>
> **[0:58](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/uses-of-metadata?u=76281980&t=58)** She can carry on the analysis without too much delay or need to consult with you.
>
> **[1:02](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/uses-of-metadata?u=76281980&t=62)** But there is a very special analyst who generally benefits the most from the metadata and that is you.
>
> **[1:10](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/uses-of-metadata?u=76281980&t=70)** Not you today as much as the future you.
>
> **[1:13](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/uses-of-metadata?u=76281980&t=73)** So the main "other analyst" who benefits from your metadata is future you.
>
> **[1:18](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/uses-of-metadata?u=76281980&t=78)** It is so easy to forget what you did on a project when you do so many projects, especially with the same team and using the same data sets.
>
> **[1:26](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/uses-of-metadata?u=76281980&t=86)** You will always get requests for revision, whether from your boss or from a journal, and these take time.
>
> **[1:32](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/uses-of-metadata?u=76281980&t=92)** Having clear documentation lets you cut that time and confusion down and get right to the revision.
>
> **[1:37](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/uses-of-metadata?u=76281980&t=97)** Also, I want to emphasize that publishing in scientific journals has significant obligations for the biostatistician.
>
> **[1:45](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/uses-of-metadata?u=76281980&t=105)** You are producing health research, and you need to be able to demonstrate certain things.
>
> **[1:49](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/uses-of-metadata?u=76281980&t=109)** You need to be able to fully explain your methods, and if you are me, good luck with doing that with no documentation, especially after you've done several similar papers.
>
> **[2:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/uses-of-metadata?u=76281980&t=120)** You also need to be able to share and defend your logic with not just other analysts, but with nonstatisticians.
>
> **[2:06](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/uses-of-metadata?u=76281980&t=126)** Remember, others may be doing presentations about the results of your work, and they will need to be able to understand and explain it well enough to feel comfortable up there presenting.
>
> **[2:16](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/uses-of-metadata?u=76281980&t=136)** Not only do you need to be in a position to easily explain to reviewers and your research team what you did and why, it is always a bonus to be able to easily hand off work to another person if you are too busy to do it or you have a student you want to mentor.
>
> **[2:30](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/uses-of-metadata?u=76281980&t=150)** Finally, the most important reason to keep metadata, in my opinion, is in the case you actually hit it big.
>
> **[2:36](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/uses-of-metadata?u=76281980&t=156)** Journals like JAMA and the New England Journal of Medicine, we are talking Hollywood for scientists here, actually require that a statistician they select review your work before it gets published.
>
> **[2:49](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/uses-of-metadata?u=76281980&t=169)** Having this nice suite of metadata not only helps the person review your work, but puts them in a pleasant mood, rather than a confused stupor.
>
> **[2:58](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/uses-of-metadata?u=76281980&t=178)** Because there is a lot of judgment calls whenever you do an analysis, simply being able to show that you considered the details in what evidence you use to make your choices will allow the reviewing statistician to evaluate if what you did was reasonable, even if it isn't exactly what she or he would have done.
>
> **[3:17](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/uses-of-metadata?u=76281980&t=197)** Some people, including both newbies as well as seasoned analysts, balk at my metadata approach, but I stand by it.
>
> **[3:25](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/uses-of-metadata?u=76281980&t=205)** It's the gift that keeps on giving.
>
> **[3:26](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/uses-of-metadata?u=76281980&t=206)** It helps us during our analysis and helps us possibly even more after our analysis is over and we are onto something new.
>
> **[3:34](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/uses-of-metadata?u=76281980&t=214)** During our analysis, developing metadata allowed us to sit and think carefully as we designed our analytic data set, and it helped us evaluate our exclusions on the fly as we developed our data reduction diagram.
>
> **[3:46](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/uses-of-metadata?u=76281980&t=226)** The data dictionary also served as our map, helping us through the thicket of coding and making our table ones.
>
> **[3:53](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/uses-of-metadata?u=76281980&t=233)** But in the future, now that we are done and onto other things, is where we really need our metadata.
>
> **[3:59](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/uses-of-metadata?u=76281980&t=239)** Whoever is doing the write up, whether it's you or someone else, will need to know exactly how you did what you did so the methods section can be written accurately.
>
> **[4:07](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/uses-of-metadata?u=76281980&t=247)** And this is where I always lean on my metadata.
>
> **[4:10](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/uses-of-metadata?u=76281980&t=250)** Also, it helps you defend the choices the make.
>
> **[4:13](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/uses-of-metadata?u=76281980&t=253)** I remember a friend calling me one day and asking me about an old analysis I didn't even remember doing.
>
> **[4:19](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/uses-of-metadata?u=76281980&t=259)** He asked me why we didn't do a certain plot, and honestly I didn't even remember doing the analysis.
>
> **[4:25](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/uses-of-metadata?u=76281980&t=265)** But sure enough I found the metadata and immediately I was able to report to him why I did not do the plot.
>
> **[4:31](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/uses-of-metadata?u=76281980&t=271)** It sure saved us a lot of trouble.
>
> **[4:33](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/uses-of-metadata?u=76281980&t=273)** And remember, it takes a while for reviewers to get back to you from journals, and when they do, they ask questions like why didn't you do this or that test or plot?
>
> **[4:43](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/uses-of-metadata?u=76281980&t=283)** Your metadata will help you provide an answer quickly and accurately.
>
> **[4:48](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/uses-of-metadata?u=76281980&t=288)** But better yet, metadata facilitates further analysis.
>
> **[4:52](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/uses-of-metadata?u=76281980&t=292)** Maybe you want to study veterans again, or asthma again.
>
> **[4:56](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/uses-of-metadata?u=76281980&t=296)** Now you already have metadata you can reuse or at least use to start new metadata and design a new analysis.
>
> **[5:04](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/uses-of-metadata?u=76281980&t=304)** So in conclusion, in this movie I reminded you how the metadata we made over this course helped us during the analysis, and I explained how the metadata will continue to help us in the future.
>
> **[5:15](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/uses-of-metadata?u=76281980&t=315)** The gift that keeps on giving.
>
> **[5:16](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/uses-of-metadata?u=76281980&t=316)** Now that I've reminded you of all the metadata we made, in the next movie I'll remind you of the process we followed to get where we are now with our analysis.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), finally, (1), require (1), new. (1), else, (1)
> **Definitions:** is a  (3)
> **CLI Commands:** make (2)
> **Env Vars:** jama (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [narrator] (1)

#### Review of the process
> [LinkedIn Learning](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/review-of-the-process?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/review-of-the-process?u=76281980&t=0)** - [Instructor] Hello there.
>
> **[0:01](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/review-of-the-process?u=76281980&t=1)** Welcome to chapter seven, section three.
>
> **[0:04](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/review-of-the-process?u=76281980&t=4)** Where I will review the long process we went through in a nutshell, so you can have a good simple take home overview of what we just did.
>
> **[0:13](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/review-of-the-process?u=76281980&t=13)** Remember, Chapters one and two were in the design phase.
>
> **[0:16](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/review-of-the-process?u=76281980&t=16)** We did this before we did any coding.
>
> **[0:18](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/review-of-the-process?u=76281980&t=18)** Next, chapters three and four were devoted to developing the analytic data set.
>
> **[0:23](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/review-of-the-process?u=76281980&t=23)** And this is what we used in chapters five and six when we did our descriptive analyses and developed our Table 1's.
>
> **[0:30](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/review-of-the-process?u=76281980&t=30)** Now, I'm wrapping it all up for you in chapter seven.
>
> **[0:33](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/review-of-the-process?u=76281980&t=33)** In chapter 1, we went over what BRFSS is.
>
> **[0:38](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/review-of-the-process?u=76281980&t=38)** If you ever want to use a different data set, you should still follow the same process we did in evaluating the BRFSS.
>
> **[0:45](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/review-of-the-process?u=76281980&t=45)** We needed to understand the data set thoroughly, before designing the analysis.
>
> **[0:50](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/review-of-the-process?u=76281980&t=50)** We looked into how the data were collected, when and from who, and also what the intended purpose was for collecting the BRFSS in the first place.
>
> **[0:59](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/review-of-the-process?u=76281980&t=59)** Before designing the analysis, it is important to understand the features of the data set as well as its limitations.
>
> **[1:05](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/review-of-the-process?u=76281980&t=65)** Especially because some data sets will not support some analyses.
>
> **[1:09](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/review-of-the-process?u=76281980&t=69)** We evaluated that all in chapter one.
>
> **[1:12](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/review-of-the-process?u=76281980&t=72)** Next, we did a lot of work in chapter 2 preparing our analysis by designing our metadata.
>
> **[1:18](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/review-of-the-process?u=76281980&t=78)** We looked in the BRFSS documentation and built our data dictionary, effectively designing our data set.
>
> **[1:24](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/review-of-the-process?u=76281980&t=84)** We figured out our sub-population, exposure and outcomes.
>
> **[1:28](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/review-of-the-process?u=76281980&t=88)** And we also identified what confounders we needed to potentially include in our analysis.
>
> **[1:33](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/review-of-the-process?u=76281980&t=93)** Remember how we made the web of causation?
>
> **[1:36](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/review-of-the-process?u=76281980&t=96)** Not as beautiful and as organized as a spider web, but it did the trick of helping us understand what we might need to control for in our analysis.
>
> **[1:45](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/review-of-the-process?u=76281980&t=105)** Then we documented all of our decisions on our data dictionary.
>
> **[1:49](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/review-of-the-process?u=76281980&t=109)** We made sure we accounted for the native and calculated variables, and we also documented our plans for re-codes of categorical variables.
>
> **[1:57](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/review-of-the-process?u=76281980&t=117)** Next, in chapter three, we actually got to coding and built our analytic data set.
>
> **[2:02](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/review-of-the-process?u=76281980&t=122)** We started by applying our inclusion and exclusion criteria to make the data set smaller and easier to handle, and we documented our exclusions.
>
> **[2:11](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/review-of-the-process?u=76281980&t=131)** We even made a data reduction diagram.
>
> **[2:14](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/review-of-the-process?u=76281980&t=134)** At the end, we generated our exposure and outcome variables.
>
> **[2:19](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/review-of-the-process?u=76281980&t=139)** In chapter four, we generated the rest of our variables and finalized our data set.
>
> **[2:24](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/review-of-the-process?u=76281980&t=144)** I introduced you to the concept of Table 1, our main deliverable for our descriptive analysis.
>
> **[2:30](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/review-of-the-process?u=76281980&t=150)** We also prepared for our analysis by reviewing the distributions of both our categorical and continuous outcome variables.
>
> **[2:38](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/review-of-the-process?u=76281980&t=158)** In chapter five, we looked at the Table 1 shells I prepared, one for the categorical outcome we used, asthma, and one for the continuous outcome, which is sleep duration.
>
> **[2:49](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/review-of-the-process?u=76281980&t=169)** We added overall frequencies to both Table 1s.
>
> **[2:52](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/review-of-the-process?u=76281980&t=172)** Then we completed both Table 1s by adding our stratified analyses.
>
> **[2:57](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/review-of-the-process?u=76281980&t=177)** In chapter six, I went over some philosophical issues about the BRFSS weights.
>
> **[3:03](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/review-of-the-process?u=76281980&t=183)** When to use them and when not to use them.
>
> **[3:06](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/review-of-the-process?u=76281980&t=186)** Then I actually showed you how to use them in a simple analysis.
>
> **[3:10](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/review-of-the-process?u=76281980&t=190)** After that, we went back to the Table 1s we had built.
>
> **[3:14](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/review-of-the-process?u=76281980&t=194)** I explained how to do bivariate tests.
>
> **[3:17](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/review-of-the-process?u=76281980&t=197)** Chi-squares and Fisher for categorical, and ANOVAs and t-tests for continuous.
>
> **[3:22](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/review-of-the-process?u=76281980&t=202)** We added those to our Table 1s, too.
>
> **[3:25](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/review-of-the-process?u=76281980&t=205)** Now we are wrapping up with chapter seven.
>
> **[3:27](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/review-of-the-process?u=76281980&t=207)** There are so many processes, I just wanted to give you an overview of our long journey, so you remember what we did in order and why.
>
> **[3:35](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/review-of-the-process?u=76281980&t=215)** My next and last movie will recommend next steps in your descriptive analysis.

> [!info]- Semantic Content
>
> **Env Vars:** brfss (5)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### Next steps in the BRFSS analysis
> [LinkedIn Learning](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/next-steps-in-the-brfss-analysis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/next-steps-in-the-brfss-analysis?u=76281980&t=0)** - [Monika] Now that you have successfully completed your descriptive analysis, let's talk here in our last section about potential next steps for you.
>
> **[0:09](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/next-steps-in-the-brfss-analysis?u=76281980&t=9)** Here we are going to talk about whether you want to say this analysis is done or you want to move on to a regression analysis, which I cover in the next course.
>
> **[0:19](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/next-steps-in-the-brfss-analysis?u=76281980&t=19)** I also cover presenting your results to your research team, which is something you should have to bounce ideas off of and to co-own your analysis.
>
> **[0:27](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/next-steps-in-the-brfss-analysis?u=76281980&t=27)** We will also briefly cover preparing a manuscript and also publication and presentation.
>
> **[0:33](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/next-steps-in-the-brfss-analysis?u=76281980&t=33)** This sounds like a public health warning, but it's not.
>
> **[0:36](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/next-steps-in-the-brfss-analysis?u=76281980&t=36)** Descriptive Analysis often leads to regression.
>
> **[0:40](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/next-steps-in-the-brfss-analysis?u=76281980&t=40)** This is simply because you need to do a descriptive analysis before every regression.
>
> **[0:45](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/next-steps-in-the-brfss-analysis?u=76281980&t=45)** So if you do one and have enough data, why not go forward?
>
> **[0:49](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/next-steps-in-the-brfss-analysis?u=76281980&t=49)** When you are using large data sets like BRFSS, often a regression analysis is expected, but in smaller data sets the regression can't be completed, so the descriptive analysis is fine.
>
> **[1:02](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/next-steps-in-the-brfss-analysis?u=76281980&t=62)** You can check out my next course on regression and see if you want to take your descriptive analysis to the next step.
>
> **[1:09](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/next-steps-in-the-brfss-analysis?u=76281980&t=69)** The reason I said you really need some sort of research team is because I really believe that no one is perfect.
>
> **[1:15](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/next-steps-in-the-brfss-analysis?u=76281980&t=75)** I teach my students not to single author papers, even if you think you are a superwoman, and there are reasons why.
>
> **[1:22](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/next-steps-in-the-brfss-analysis?u=76281980&t=82)** First, you just can't see your own mistakes.
>
> **[1:24](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/next-steps-in-the-brfss-analysis?u=76281980&t=84)** But also, and maybe more importantly, other researchers can gang up on you and try to take you down.
>
> **[1:30](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/next-steps-in-the-brfss-analysis?u=76281980&t=90)** If you've ever had someone write a letter to the editor of a scientific journal criticizing your work and putting you on the spot to respond, you'll know what I mean.
>
> **[1:39](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/next-steps-in-the-brfss-analysis?u=76281980&t=99)** It's just good to have a group to get your back.
>
> **[1:42](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/next-steps-in-the-brfss-analysis?u=76281980&t=102)** So if you're going to have a group around you, they will be experts, but they probably won't be experts in what you are an expert in, which is the BRFSS analysis.
>
> **[1:52](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/next-steps-in-the-brfss-analysis?u=76281980&t=112)** Still, they need to understand your process and decisions, but they really are not in the position to dig through your code.
>
> **[1:59](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/next-steps-in-the-brfss-analysis?u=76281980&t=119)** Hence, the metadata and other communication you have with them can be really helpful to you.
>
> **[2:03](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/next-steps-in-the-brfss-analysis?u=76281980&t=123)** Non-statistician experts can really improve your analysis.
>
> **[2:07](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/next-steps-in-the-brfss-analysis?u=76281980&t=127)** Imagine I had an asthma or a veteran's expert here with me when writing up the paper.
>
> **[2:13](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/next-steps-in-the-brfss-analysis?u=76281980&t=133)** You know it would be a much better paper.
>
> **[2:15](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/next-steps-in-the-brfss-analysis?u=76281980&t=135)** I'm being very generic here talking about presenting your science, but in reality, it makes a difference what kind of deliverable you're making.
>
> **[2:23](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/next-steps-in-the-brfss-analysis?u=76281980&t=143)** If it's for school, you will need to seek out the correct format for your thesis or dissertation and make sure it fits the requirement for graduation.
>
> **[2:32](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/next-steps-in-the-brfss-analysis?u=76281980&t=152)** On the other hand, if you are writing up something for publication in a scientific journal, you have to prepare for the possibility you won't get accepted on the first round, and you'll have to try different journals.
>
> **[2:42](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/next-steps-in-the-brfss-analysis?u=76281980&t=162)** Work with your research team to make a publication plan so they all agree on the journals you select.
>
> **[2:47](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/next-steps-in-the-brfss-analysis?u=76281980&t=167)** And also each time you submit, you will need to make sure your manuscript fits the format the journal requires.
>
> **[2:53](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/next-steps-in-the-brfss-analysis?u=76281980&t=173)** This can even affect the presentation of your tables, so you have to be attuned to this.
>
> **[2:58](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/next-steps-in-the-brfss-analysis?u=76281980&t=178)** If you are preparing something for a conference presentation, like on slides or a poster, you'll want to make sure you deliver the right images, tables, figures, and diagrams that fit on the slide or the poster and look good.
>
> **[3:12](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/next-steps-in-the-brfss-analysis?u=76281980&t=192)** You might need to make some modifications to the items you already have.
>
> **[3:16](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/next-steps-in-the-brfss-analysis?u=76281980&t=196)** Also, I do contracts sometimes where a company asks me to do an analysis and write them a report.
>
> **[3:22](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/next-steps-in-the-brfss-analysis?u=76281980&t=202)** I've also done that for the government.
>
> **[3:24](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/next-steps-in-the-brfss-analysis?u=76281980&t=204)** In either case, you make sure you find out from your customer what format they want and how they want you to present your models.
>
> **[3:31](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/next-steps-in-the-brfss-analysis?u=76281980&t=211)** But whatever the format, realize that it's always some version of introduction, methods, results, and discussion.
>
> **[3:39](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/next-steps-in-the-brfss-analysis?u=76281980&t=219)** And your job as the analyst is to write the first draft of the results, which should be the first thing that gets written of whatever deliverable you are trying to make.
>
> **[3:48](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/next-steps-in-the-brfss-analysis?u=76281980&t=228)** The results section is all you.
>
> **[3:51](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/next-steps-in-the-brfss-analysis?u=76281980&t=231)** Then the next thing that's all you is the section of the methods where you describe the statistics.
>
> **[3:57](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/next-steps-in-the-brfss-analysis?u=76281980&t=237)** In the case of doing a secondary analysis of existing data, like we are with BRFSS, sometimes you end up writing the whole method section.
>
> **[4:06](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/next-steps-in-the-brfss-analysis?u=76281980&t=246)** This is because by now you really understand the data set, the recodes and the exclusions.
>
> **[4:12](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/next-steps-in-the-brfss-analysis?u=76281980&t=252)** So you are usually the best person for the job to talk about it.
>
> **[4:15](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/next-steps-in-the-brfss-analysis?u=76281980&t=255)** You can always have others help you with the rest of the writing if that is not your forte, but you are responsible for the results and statistical methods.
>
> **[4:24](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/next-steps-in-the-brfss-analysis?u=76281980&t=264)** So to conclude this section, remember it takes a village to make a scientific publication and you really want to work as a team.
>
> **[4:32](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/next-steps-in-the-brfss-analysis?u=76281980&t=272)** Your next step after this analysis is some written deliverable, so you will need to figure out the format, begin the blank document and put the images in the results section first, along with their description.
>
> **[4:43](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/next-steps-in-the-brfss-analysis?u=76281980&t=283)** Also write the statistical methods, then send the draft around and the others will help you write the rest of the paper.
>
> **[4:50](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/next-steps-in-the-brfss-analysis?u=76281980&t=290)** And finally, to conclude the course, I will just leave you with a few take home messages that represent advice that has served me well over the years.
>
> **[4:58](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/next-steps-in-the-brfss-analysis?u=76281980&t=298)** First, be organized.
>
> **[5:00](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/next-steps-in-the-brfss-analysis?u=76281980&t=300)** Don't skip steps or cut corners, even during the most tedious or frustrating analysis.
>
> **[5:06](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/next-steps-in-the-brfss-analysis?u=76281980&t=306)** Next, be persistent.
>
> **[5:08](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/next-steps-in-the-brfss-analysis?u=76281980&t=308)** Keep working on your project until you overcome your obstacles.
>
> **[5:11](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/next-steps-in-the-brfss-analysis?u=76281980&t=311)** If you have trouble publishing, keep trying.
>
> **[5:13](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/next-steps-in-the-brfss-analysis?u=76281980&t=313)** Use your team for momentum and encouragement.
>
> **[5:16](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/next-steps-in-the-brfss-analysis?u=76281980&t=316)** And lastly, be proud.
>
> **[5:18](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/next-steps-in-the-brfss-analysis?u=76281980&t=318)** Not everyone can do a BRFSS descriptive analysis in R, and when you do one and publish it, you are making a great contribution to science, and scientists like me say, "Thank you."
>
> **[5:31](https://www.linkedin.com/learning/descriptive-healthcare-analytics-in-r/next-steps-in-the-brfss-analysis?u=76281980&t=331)** From me to you, trained at the University of Minnesota in the lovely Twin Cities, and teaching at Library College in beautiful Milton, Massachusetts, come visit, we'd love to have you.

> [!info]- Semantic Content
>
> **CLI Commands:** make (8), find (1)
> **Code Keywords:** let (1), public (1), this. (1), case, (1), finally, (1)
> **Env Vars:** brfss (4)
> **Cross-References:** in the next (1)
> **Analogies:** imagine (1)
> **Warnings:** warning (1)
> **Speakers:** - [monika] (1)


## Path Context

### In [[Hands-On Healthcare Analytics]]
← [[SQL for Healthcare Professionals]] | **6 of 8** | [[Machine Learning Fundamentals for Healthcare]] →

## Appears In

- [[Hands-On Healthcare Analytics]]

## Related Courses

_Courses sharing skills:_

- [[Build Advanced Charts in R]] — R (Programming Language)
- [[Creating Maps with R]] — R (Programming Language)
- [[R Tidyverse Applications]] — R (Programming Language)
- [[Learning the R Tidyverse]] — R (Programming Language)
- [[Complete Your First Project in R]] — R (Programming Language)

---

[↑ Back to top](#)