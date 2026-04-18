---
type: course
slug: data-science-foundations-data-assessment-for-predictive-modeling
url: "https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling"
duration_minutes: 248
duration: 4h 8m
level: Intermediate
updated: 8/29/2025
learners: 36246
skills:
  - CRISP-DM
  - Data Assessment
  - Data Science Foundations
  - Predictive Modeling
exercise_files: true
tags:
  - course
  - topic/data-science
  - topic/artificial-intelligence
  - topic/software-development
  - skill/crisp-dm
  - skill/data-assessment
  - skill/data-science-foundations
  - skill/predictive-modeling
status: not-started
created: 2026-04-17
---

# Data Science Foundations: Data Assessment for Predictive Modeling

> CRISP-DM, the cross-industry standard process for data mining, is composed of six phases. Most new data scientists rush to modeling because it's the phase in which they have the most training. But whether the project succeeds or fails is actually determined far earlier. This course introduces a systematic approach to the data understanding phase for predictive modeling. Instructor Keith McCormick 

> [LinkedIn Learning](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling) | 4h 8m | Intermediate | 36K learners

## Instructor

- [[Keith McCormick]]

## Resources

- Exercise files available

## Skills Covered

- CRISP-DM
- Data Assessment
- Data Science Foundations
- Predictive Modeling

## Table of Contents

### Introduction

#### Why data assessment is critical
> [LinkedIn Learning](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/why-data-assessment-is-critical?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/why-data-assessment-is-critical?u=76281980&t=0)** - [Instructor] You can't properly model your data before you prepare it, and you can't properly prepare it before you perform the analyses that we will review in this course.
>
> **[0:12](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/why-data-assessment-is-critical?u=76281980&t=12)** My name is Keith McCormick, and I've been building predictive models for 25 years.
>
> **[0:17](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/why-data-assessment-is-critical?u=76281980&t=17)** Even though I've had a ton of experience doing this stuff, I've had to learn the hard way that before I can begin modeling, I have to make sure that I fully assess the data with which I'm working.
>
> **[0:29](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/why-data-assessment-is-critical?u=76281980&t=29)** I've learned that careful work is ultimately the fastest and most productive way.
>
> **[0:36](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/why-data-assessment-is-critical?u=76281980&t=36)** And in this course, I tell you exactly what to do.
>
> **[0:40](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/why-data-assessment-is-critical?u=76281980&t=40)** Each dataset is different, so I can't give you a step by step recipe.
>
> **[0:44](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/why-data-assessment-is-critical?u=76281980&t=44)** There is no such thing.
>
> **[0:46](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/why-data-assessment-is-critical?u=76281980&t=46)** But I can give you a set of principles, guidelines, and tools to properly assess a dataset for its suitability for machine learning models.
>
> **[0:54](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/why-data-assessment-is-critical?u=76281980&t=54)** And hopefully pass on some of the wisdom I've picked up along the way so that you can learn from my mistakes and my experience, rather than have to figure it out, trial and error on your own.
>
> **[1:07](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/why-data-assessment-is-critical?u=76281980&t=67)** This is a neglected topic, rarely presented in this depth.
>
> **[1:11](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/why-data-assessment-is-critical?u=76281980&t=71)** So I hope that you're excited for our journey together, let's get started.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (1), let (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### A note about the exercise files
> [LinkedIn Learning](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/a-note-about-the-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/a-note-about-the-exercise-files?u=76281980&t=0)** - [Instructor] I've provided an Exercise Files folder, and I want to briefly review how it's organized.
>
> **[0:06](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/a-note-about-the-exercise-files?u=76281980&t=6)** In the Originals folder, there is a folder for each data source.
>
> **[0:12](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/a-note-about-the-exercise-files?u=76281980&t=12)** We're going to use a number of data sources, and many of them come in multiple versions.
>
> **[0:19](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/a-note-about-the-exercise-files?u=76281980&t=19)** And the Solutions folder, it's been organized by video.
>
> **[0:24](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/a-note-about-the-exercise-files?u=76281980&t=24)** So when you get to the end of the lecture, if a solution has been provided, it's going to be found in the folder for that video number.
>
> **[0:32](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/a-note-about-the-exercise-files?u=76281980&t=32)** To make it even easier, I provided a cheat sheet.
>
> **[0:36](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/a-note-about-the-exercise-files?u=76281980&t=36)** Let's take a quick look.
>
> **[0:38](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/a-note-about-the-exercise-files?u=76281980&t=38)** Now, yours is going to be a PDF, but this is how it's organized.
>
> **[0:42](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/a-note-about-the-exercise-files?u=76281980&t=42)** Every video is numbered, and the file that you need from the Originals folder at the beginning of the video is indicated.
>
> **[0:52](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/a-note-about-the-exercise-files?u=76281980&t=52)** And then when a solution is provided, that's indicated as well.
>
> **[0:57](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/a-note-about-the-exercise-files?u=76281980&t=57)** Notice in many instances a solution is not provided.
>
> **[1:01](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/a-note-about-the-exercise-files?u=76281980&t=61)** If I'm simply doing something very quick, I show you in the video but don't produce a solutions file.
>
> **[1:06](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/a-note-about-the-exercise-files?u=76281980&t=66)** If it's more elaborate, I do provide it.
>
> **[1:09](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/a-note-about-the-exercise-files?u=76281980&t=69)** And just one more caution, if there's a series of related videos like these three, I'll only provide the solution in the final one of the series.
>
> **[1:20](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/a-note-about-the-exercise-files?u=76281980&t=80)** I hope you find those helpful, and I hope you try the challenge and solutions exercises that I've included.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1), find (1)
> **Code Keywords:** let (1)
> **Env Vars:** pdf (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Warnings:** caution (1)
> **Speakers:** - [instructor] (1)


### 1. What Is Data Assessment?

#### Clarifying how data understanding differs from data visualization
> [LinkedIn Learning](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/clarifying-how-data-understanding-differs-from-data-visualization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/clarifying-how-data-understanding-differs-from-data-visualization?u=76281980&t=0)** - [Instructor] By data assessment, don't we just mean a type of data exploration or data visualization?
>
> **[0:08](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/clarifying-how-data-understanding-differs-from-data-visualization?u=76281980&t=8)** In short, no.
>
> **[0:10](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/clarifying-how-data-understanding-differs-from-data-visualization?u=76281980&t=10)** Here we have a very specific purpose in mind, to check the suitability of our data for predictive modeling and to determine what actions we can take to improve the data during data preparation.
>
> **[0:25](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/clarifying-how-data-understanding-differs-from-data-visualization?u=76281980&t=25)** Consider the metaphor of building construction.
>
> **[0:29](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/clarifying-how-data-understanding-differs-from-data-visualization?u=76281980&t=29)** As the materials arrive, which for us is the data, we need to check to see if it's what we were expecting, what do we need to do to ready the materials, and what potential flaws do we see?
>
> **[0:45](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/clarifying-how-data-understanding-differs-from-data-visualization?u=76281980&t=45)** A lot of what we have to do is mundane, but there are a very specific set of criteria to inspect for.
>
> **[0:53](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/clarifying-how-data-understanding-differs-from-data-visualization?u=76281980&t=53)** Edward Tufte has inspired many with his books on effective data visualization.
>
> **[0:59](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/clarifying-how-data-understanding-differs-from-data-visualization?u=76281980&t=59)** But notice in the opening sentence of one of his books, he is focused on communication.
>
> **[1:06](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/clarifying-how-data-understanding-differs-from-data-visualization?u=76281980&t=66)** We are focused on a stage in the model-building process well before we communicate results to others.
>
> **[1:15](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/clarifying-how-data-understanding-differs-from-data-visualization?u=76281980&t=75)** The analyses are for us, not our audience.
>
> **[1:20](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/clarifying-how-data-understanding-differs-from-data-visualization?u=76281980&t=80)** Not yet.
>
> **[1:21](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/clarifying-how-data-understanding-differs-from-data-visualization?u=76281980&t=81)** Clarity and accuracy are important, certainly, but towards the end goal of completing our assessment and planning for the data preparation that will follow.
>
> **[1:34](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/clarifying-how-data-understanding-differs-from-data-visualization?u=76281980&t=94)** So the emphasis is on our own perception.
>
> **[1:38](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/clarifying-how-data-understanding-differs-from-data-visualization?u=76281980&t=98)** Stephen Few, another visualization expert, calls it thinking with our eyes.
>
> **[1:46](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/clarifying-how-data-understanding-differs-from-data-visualization?u=76281980&t=106)** Jonathan Kumi, in introductory comments to Few's book, describes this neglected cornerstone in this quote, "Encapsulating data in graphics "forces us to confront its limitations "and helps us to understand the dynamics "of the underlying phenomenon."
>
> **[2:06](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/clarifying-how-data-understanding-differs-from-data-visualization?u=76281980&t=126)** So we'll be using graphics in part of the course, but not in the way that data visualization is usually discussed.
>
> **[2:14](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/clarifying-how-data-understanding-differs-from-data-visualization?u=76281980&t=134)** Few likes catchy titles, by the way.
>
> **[2:17](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/clarifying-how-data-understanding-differs-from-data-visualization?u=76281980&t=137)** It's interesting to note that his book on presenting is, "Show Me the Numbers," whereas this book is called, "Now You See It."
>
> **[2:26](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/clarifying-how-data-understanding-differs-from-data-visualization?u=76281980&t=146)** So they really are topics different enough to each be discussed at book-length.
>
> **[2:34](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/clarifying-how-data-understanding-differs-from-data-visualization?u=76281980&t=154)** Finally, we should all thank Tukey for starting this conversation almost a half century ago.
>
> **[2:41](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/clarifying-how-data-understanding-differs-from-data-visualization?u=76281980&t=161)** I love this quote about a detective needing both tools and understanding.
>
> **[2:48](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/clarifying-how-data-understanding-differs-from-data-visualization?u=76281980&t=168)** His book, "Exploratory Data Analysis," came out in the late 70s.
>
> **[2:53](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/clarifying-how-data-understanding-differs-from-data-visualization?u=76281980&t=173)** So how we explore data has changed and why we do it has changed somewhat too, because we'll be assessing data for machine learning models, not statistical models.
>
> **[3:05](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/clarifying-how-data-understanding-differs-from-data-visualization?u=76281980&t=185)** But he gets the credit for influencing generations of effective analysts, including many machine learning specialists.

> [!info]- Semantic Content
>
> **Code Keywords:** for. (1), finally, (1)
> **Definitions:** is called (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Introducing the critical data understanding phase of CRISP-DM
> [LinkedIn Learning](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-critical-data-understanding-phase-of-crisp-dm?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-critical-data-understanding-phase-of-crisp-dm?u=76281980&t=0)** - [Instructor] CRISP-DM is an acronym for the cross-industry standard process for data mining.
>
> **[0:07](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-critical-data-understanding-phase-of-crisp-dm?u=76281980&t=7)** This course is about the second phase of CRISP-DM.
>
> **[0:11](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-critical-data-understanding-phase-of-crisp-dm?u=76281980&t=11)** So we'll review a bit about CRISP-DM, but just enough to put our course goals into context.
>
> **[0:17](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-critical-data-understanding-phase-of-crisp-dm?u=76281980&t=17)** If you're already familiar with it, there will still be some important context for you.
>
> **[0:23](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-critical-data-understanding-phase-of-crisp-dm?u=76281980&t=23)** So we can see that data understanding is the second phase in a six phase process.
>
> **[0:32](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-critical-data-understanding-phase-of-crisp-dm?u=76281980&t=32)** This, of course, is the famous circular diagram.
>
> **[0:35](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-critical-data-understanding-phase-of-crisp-dm?u=76281980&t=35)** But it's critical to note that CRISP-DM is much more than just a circular diagram.
>
> **[0:42](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-critical-data-understanding-phase-of-crisp-dm?u=76281980&t=42)** In fact, if I zoom out a bit so that you can see the entire page, you'll note that this is page 10 of a 76 page document.
>
> **[0:51](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-critical-data-understanding-phase-of-crisp-dm?u=76281980&t=51)** And this is the beginning of part two, when the circular diagram makes its first appearance.
>
> **[0:58](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-critical-data-understanding-phase-of-crisp-dm?u=76281980&t=58)** So what does the document say about data understanding, how does it describe it?
>
> **[1:03](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-critical-data-understanding-phase-of-crisp-dm?u=76281980&t=63)** Well, with the following key points.
>
> **[1:05](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-critical-data-understanding-phase-of-crisp-dm?u=76281980&t=65)** First, although this is the second phase, we're just starting to assemble our data.
>
> **[1:12](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-critical-data-understanding-phase-of-crisp-dm?u=76281980&t=72)** Then it continues to describe some of the tasks, which could easily be confused with just exploring, getting familiar with the data, identifying data quality problems, getting some of our initial insights, and even possibly detecting interesting subsets of our data.
>
> **[1:29](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-critical-data-understanding-phase-of-crisp-dm?u=76281980&t=89)** So what is this mysterious, hidden information?
>
> **[1:34](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-critical-data-understanding-phase-of-crisp-dm?u=76281980&t=94)** This is a critical phrase, because we must remember that data understanding is just prior to data preparation.
>
> **[1:43](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-critical-data-understanding-phase-of-crisp-dm?u=76281980&t=103)** So we need to look carefully for information that is hidden, not only to us, but hidden to our algorithms.
>
> **[1:50](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-critical-data-understanding-phase-of-crisp-dm?u=76281980&t=110)** We must be careful not to have magical thinking regarding our algorithms, they need our help.
>
> **[1:58](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-critical-data-understanding-phase-of-crisp-dm?u=76281980&t=118)** Perhaps the best one sentence summary of the entire course is this.
>
> **[2:03](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-critical-data-understanding-phase-of-crisp-dm?u=76281980&t=123)** During data understanding, we are uncovering hidden patterns which we reveal through data preparation so that our modeling algorithms can detect them.
>
> **[2:15](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-critical-data-understanding-phase-of-crisp-dm?u=76281980&t=135)** Let's briefly address another issue.
>
> **[2:18](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-critical-data-understanding-phase-of-crisp-dm?u=76281980&t=138)** No one really uses the phrase data mining anymore.
>
> **[2:21](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-critical-data-understanding-phase-of-crisp-dm?u=76281980&t=141)** So what did they mean at the time when they wrote it and chose this to be part of their title?
>
> **[2:27](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-critical-data-understanding-phase-of-crisp-dm?u=76281980&t=147)** Well, these days we'd call it traditional machine learning.
>
> **[2:31](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-critical-data-understanding-phase-of-crisp-dm?u=76281980&t=151)** Specifically, we're more focused on supervised machine learning.
>
> **[2:37](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-critical-data-understanding-phase-of-crisp-dm?u=76281980&t=157)** Supervised is more common than unsupervised in general, but also in CRISP-DM, we're focused on deployed models and unsupervised models just aren't deployed in the same way as supervised models.
>
> **[2:54](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-critical-data-understanding-phase-of-crisp-dm?u=76281980&t=174)** So what else did they mean when they chose the phrase data mining?
>
> **[3:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-critical-data-understanding-phase-of-crisp-dm?u=76281980&t=180)** Well, they didn't mean exploring as an end goal and data mining didn't have the privacy implications that it has today.
>
> **[3:09](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-critical-data-understanding-phase-of-crisp-dm?u=76281980&t=189)** It merely meant finding useful patterns and data, there was no assumption about what kind of data it was or where it came from.
>
> **[3:17](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-critical-data-understanding-phase-of-crisp-dm?u=76281980&t=197)** That negative connotation came later, mostly from journalists adopting the phrase when discussing privacy concerns.
>
> **[3:27](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-critical-data-understanding-phase-of-crisp-dm?u=76281980&t=207)** And that's an important topic.
>
> **[3:30](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-critical-data-understanding-phase-of-crisp-dm?u=76281980&t=210)** But data mining was not associated with that topic when CRISP-DM was originally written.
>
> **[3:37](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-critical-data-understanding-phase-of-crisp-dm?u=76281980&t=217)** Also, the author's were focused on building predictive models, not merely discovering interesting things, and then using those models to score new cases, to make predictions.
>
> **[3:52](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-critical-data-understanding-phase-of-crisp-dm?u=76281980&t=232)** So the name may have changed but those are still our goals today.

> [!info]- Semantic Content
>
> **Env Vars:** crisp (6)
> **Code Keywords:** this, (1), this. (1), let (1), from. (1)
> **Warnings:** note that (2), be careful (1)
> **Definitions:** is an  (1), is a  (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### Data assessment in CRISP-DM alternatives: The IBM ASUM-DM and Microsoft TDSP
> [LinkedIn Learning](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/data-assessment-in-crisp-dm-alternatives-the-ibm-asum-dm-and-microsoft-tdsp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/data-assessment-in-crisp-dm-alternatives-the-ibm-asum-dm-and-microsoft-tdsp?u=76281980&t=0)** - [Instructor} For the purpose of this course, we will use the terms data assessment and data understanding interchangeably.
>
> **[0:08](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/data-assessment-in-crisp-dm-alternatives-the-ibm-asum-dm-and-microsoft-tdsp?u=76281980&t=8)** But if data assessment is used in the title of the course, why risk confusing it with CRISP-DM term data understanding?
>
> **[0:17](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/data-assessment-in-crisp-dm-alternatives-the-ibm-asum-dm-and-microsoft-tdsp?u=76281980&t=17)** Well, out of context, it's not always clear what data understanding means.
>
> **[0:23](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/data-assessment-in-crisp-dm-alternatives-the-ibm-asum-dm-and-microsoft-tdsp?u=76281980&t=23)** More importantly, others have tried to improvise on the CRISP-DM theme, especially the diagram, but when they have, they've also introduced many competing terms.
>
> **[0:36](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/data-assessment-in-crisp-dm-alternatives-the-ibm-asum-dm-and-microsoft-tdsp?u=76281980&t=36)** However, they always include something like the data understanding phase.
>
> **[0:42](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/data-assessment-in-crisp-dm-alternatives-the-ibm-asum-dm-and-microsoft-tdsp?u=76281980&t=42)** Let's look at two of the more well known attempts to do this.
>
> **[0:47](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/data-assessment-in-crisp-dm-alternatives-the-ibm-asum-dm-and-microsoft-tdsp?u=76281980&t=47)** I always thought IBM spin on the diagram was intriguing.
>
> **[0:51](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/data-assessment-in-crisp-dm-alternatives-the-ibm-asum-dm-and-microsoft-tdsp?u=76281980&t=51)** IBM has come up with ASUM-DM, which is an acronym for Analytics Solutions Unified Method for Data Mining/Predictive Analytics.
>
> **[1:01](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/data-assessment-in-crisp-dm-alternatives-the-ibm-asum-dm-and-microsoft-tdsp?u=76281980&t=61)** IBM makes it a bit tricky to read up on ASUM-DM, you have to register on the website.
>
> **[1:06](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/data-assessment-in-crisp-dm-alternatives-the-ibm-asum-dm-and-microsoft-tdsp?u=76281980&t=66)** And it's evolved quite a bit over just the few years that it's been around.
>
> **[1:12](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/data-assessment-in-crisp-dm-alternatives-the-ibm-asum-dm-and-microsoft-tdsp?u=76281980&t=72)** This blog post was written by an IBMer at around the time that ASUM-DM was first making its appearance.
>
> **[1:20](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/data-assessment-in-crisp-dm-alternatives-the-ibm-asum-dm-and-microsoft-tdsp?u=76281980&t=80)** And I think that the diagram, when it first showed up, is the most intriguing.
>
> **[1:27](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/data-assessment-in-crisp-dm-alternatives-the-ibm-asum-dm-and-microsoft-tdsp?u=76281980&t=87)** Here it is.
>
> **[1:28](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/data-assessment-in-crisp-dm-alternatives-the-ibm-asum-dm-and-microsoft-tdsp?u=76281980&t=88)** Notice this interesting figure eight diagram, clearly influenced by CRISP-DM starts with business understanding, then you see data discovery and data wrangling.
>
> **[1:40](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/data-assessment-in-crisp-dm-alternatives-the-ibm-asum-dm-and-microsoft-tdsp?u=76281980&t=100)** Very similar indeed.
>
> **[1:42](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/data-assessment-in-crisp-dm-alternatives-the-ibm-asum-dm-and-microsoft-tdsp?u=76281980&t=102)** But here's the interesting part.
>
> **[1:44](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/data-assessment-in-crisp-dm-alternatives-the-ibm-asum-dm-and-microsoft-tdsp?u=76281980&t=104)** The other half of the figure eight diagram is a completely different cycle.
>
> **[1:49](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/data-assessment-in-crisp-dm-alternatives-the-ibm-asum-dm-and-microsoft-tdsp?u=76281980&t=109)** What IBM is identifying here and I've observed this to be true is that the modeling team and the deployment team are often kept separate.
>
> **[2:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/data-assessment-in-crisp-dm-alternatives-the-ibm-asum-dm-and-microsoft-tdsp?u=76281980&t=120)** So again, quite intriguing.
>
> **[2:03](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/data-assessment-in-crisp-dm-alternatives-the-ibm-asum-dm-and-microsoft-tdsp?u=76281980&t=123)** Of course, IBM isn't the only one to come up with modifications, there are several.
>
> **[2:10](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/data-assessment-in-crisp-dm-alternatives-the-ibm-asum-dm-and-microsoft-tdsp?u=76281980&t=130)** The variation that is perhaps getting the most traction at the moment is Microsoft's Team Data Science Process.
>
> **[2:20](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/data-assessment-in-crisp-dm-alternatives-the-ibm-asum-dm-and-microsoft-tdsp?u=76281980&t=140)** And here it is, let's take a look at their diagram.
>
> **[2:24](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/data-assessment-in-crisp-dm-alternatives-the-ibm-asum-dm-and-microsoft-tdsp?u=76281980&t=144)** Here's the data science lifecycle.
>
> **[2:27](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/data-assessment-in-crisp-dm-alternatives-the-ibm-asum-dm-and-microsoft-tdsp?u=76281980&t=147)** Again, clearly influenced by CRISP-DM starting with business understanding, and then going to a phase data acquisition and understanding then deployment and modeling.
>
> **[2:40](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/data-assessment-in-crisp-dm-alternatives-the-ibm-asum-dm-and-microsoft-tdsp?u=76281980&t=160)** So notice the nature of the feedback loops is rather different.
>
> **[2:44](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/data-assessment-in-crisp-dm-alternatives-the-ibm-asum-dm-and-microsoft-tdsp?u=76281980&t=164)** Now an important difference between this one and some others.
>
> **[2:48](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/data-assessment-in-crisp-dm-alternatives-the-ibm-asum-dm-and-microsoft-tdsp?u=76281980&t=168)** It is heavily documented, and it's not difficult to access it.
>
> **[2:53](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/data-assessment-in-crisp-dm-alternatives-the-ibm-asum-dm-and-microsoft-tdsp?u=76281980&t=173)** If you download the PDF from Microsoft's website, you'll find a 400 page document.
>
> **[2:59](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/data-assessment-in-crisp-dm-alternatives-the-ibm-asum-dm-and-microsoft-tdsp?u=76281980&t=179)** So why so long?
>
> **[3:01](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/data-assessment-in-crisp-dm-alternatives-the-ibm-asum-dm-and-microsoft-tdsp?u=76281980&t=181)** Well, because unlike CRISP-DM, it refers specifically to technology.
>
> **[3:08](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/data-assessment-in-crisp-dm-alternatives-the-ibm-asum-dm-and-microsoft-tdsp?u=76281980&t=188)** And that takes up additional pages.
>
> **[3:12](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/data-assessment-in-crisp-dm-alternatives-the-ibm-asum-dm-and-microsoft-tdsp?u=76281980&t=192)** So why stick with CRISP-DM?
>
> **[3:15](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/data-assessment-in-crisp-dm-alternatives-the-ibm-asum-dm-and-microsoft-tdsp?u=76281980&t=195)** Well, polls of working data scientists on this subject are infrequent.
>
> **[3:20](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/data-assessment-in-crisp-dm-alternatives-the-ibm-asum-dm-and-microsoft-tdsp?u=76281980&t=200)** But they consistently show that if there is a process that the data scientist is familiar with, it's probably CRISP-DM.
>
> **[3:28](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/data-assessment-in-crisp-dm-alternatives-the-ibm-asum-dm-and-microsoft-tdsp?u=76281980&t=208)** They really did their homework when they wrote CRISP-DM as well.
>
> **[3:32](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/data-assessment-in-crisp-dm-alternatives-the-ibm-asum-dm-and-microsoft-tdsp?u=76281980&t=212)** It was a three year effort.
>
> **[3:34](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/data-assessment-in-crisp-dm-alternatives-the-ibm-asum-dm-and-microsoft-tdsp?u=76281980&t=214)** The fact that it is tool and technology neutral is why the document does not get out of date, and why it's not unwieldy.
>
> **[3:44](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/data-assessment-in-crisp-dm-alternatives-the-ibm-asum-dm-and-microsoft-tdsp?u=76281980&t=224)** So I read the alternatives when they come out, and I find them interesting, but when working on a project myself, or with clients, I still recommend CRISP-DM.

> [!info]- Semantic Content
>
> **Env Vars:** crisp (9), ibm (5), asum (3), pdf (1)
> **Code Keywords:** let (2), this. (1)
> **Definitions:** is a  (2), is an  (1)
> **CLI Commands:** find (2)
> **Exercise Files:** download the (1)
> **Speakers:** - [instructor (1)

#### Navigating the transition from business understanding to data understanding
> [LinkedIn Learning](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/navigating-the-transition-from-business-understanding-to-data-understanding?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/navigating-the-transition-from-business-understanding-to-data-understanding?u=76281980&t=0)** - [Instructor] Now we're going to briefly review the four tasks associated with the business understanding phase, which is just prior to data understanding.
>
> **[0:10](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/navigating-the-transition-from-business-understanding-to-data-understanding?u=76281980&t=10)** Our goal is to better understand the transition from one to the other.
>
> **[0:15](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/navigating-the-transition-from-business-understanding-to-data-understanding?u=76281980&t=15)** In the Christiane document, If you go beyond the circular diagram, you'll get to the task list.
>
> **[0:23](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/navigating-the-transition-from-business-understanding-to-data-understanding?u=76281980&t=23)** You can see the four tasks for business understanding.
>
> **[0:28](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/navigating-the-transition-from-business-understanding-to-data-understanding?u=76281980&t=28)** The items in italics are interesting as well.
>
> **[0:32](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/navigating-the-transition-from-business-understanding-to-data-understanding?u=76281980&t=32)** Those are the recommended outputs or documentation requirements for Christiane.
>
> **[0:38](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/navigating-the-transition-from-business-understanding-to-data-understanding?u=76281980&t=38)** But for the moment, we're going to stay focused on the tasks.
>
> **[0:44](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/navigating-the-transition-from-business-understanding-to-data-understanding?u=76281980&t=44)** Each of these are important, but one in particular overlaps with data understanding, and that is the assess situation task.
>
> **[0:55](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/navigating-the-transition-from-business-understanding-to-data-understanding?u=76281980&t=55)** The phrase that Christiane associates with assessed situation is that it includes a inventory of resources.
>
> **[1:04](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/navigating-the-transition-from-business-understanding-to-data-understanding?u=76281980&t=64)** And that of course includes data.
>
> **[1:07](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/navigating-the-transition-from-business-understanding-to-data-understanding?u=76281980&t=67)** The trick and understanding the relationship between business understanding and data understanding is that in the business understanding phase, you are discussing data that you haven't examined yet.
>
> **[1:19](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/navigating-the-transition-from-business-understanding-to-data-understanding?u=76281980&t=79)** So you're relying heavily on data dictionaries, metadata and data models.
>
> **[1:26](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/navigating-the-transition-from-business-understanding-to-data-understanding?u=76281980&t=86)** This reliance on data dictionaries is especially true If you're an external resources.
>
> **[1:31](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/navigating-the-transition-from-business-understanding-to-data-understanding?u=76281980&t=91)** I have been most of my career.
>
> **[1:34](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/navigating-the-transition-from-business-understanding-to-data-understanding?u=76281980&t=94)** But it's true even if you are internal and your extremely familiar with the data, after all, you've never seen data from this particular timeframe combined with these particular data sources before.
>
> **[1:49](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/navigating-the-transition-from-business-understanding-to-data-understanding?u=76281980&t=109)** I always schedule a meeting with a group that has a diverse knowledge of various components of the data warehouse and the data model.
>
> **[2:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/navigating-the-transition-from-business-understanding-to-data-understanding?u=76281980&t=120)** Seek out those that know some aspect of the data that you might not know.
>
> **[2:06](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/navigating-the-transition-from-business-understanding-to-data-understanding?u=76281980&t=126)** This is the time to be creative.
>
> **[2:09](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/navigating-the-transition-from-business-understanding-to-data-understanding?u=76281980&t=129)** More is better than less.
>
> **[2:12](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/navigating-the-transition-from-business-understanding-to-data-understanding?u=76281980&t=132)** If left out now it's more challenging to circle back later.
>
> **[2:16](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/navigating-the-transition-from-business-understanding-to-data-understanding?u=76281980&t=136)** It's more efficient to add to this list of data sources now.
>
> **[2:22](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/navigating-the-transition-from-business-understanding-to-data-understanding?u=76281980&t=142)** Finally, the inventory of resources is not just data, It's our focus in this course, but it also includes personnel, computing resources and software.
>
> **[2:36](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/navigating-the-transition-from-business-understanding-to-data-understanding?u=76281980&t=156)** And now a rapid fire clarification of the other three tasks, starting with defined business objectives.
>
> **[2:47](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/navigating-the-transition-from-business-understanding-to-data-understanding?u=76281980&t=167)** It's about understanding the problem and how the business will define success.
>
> **[2:53](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/navigating-the-transition-from-business-understanding-to-data-understanding?u=76281980&t=173)** It's not about an elaborate set of requirements.
>
> **[2:57](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/navigating-the-transition-from-business-understanding-to-data-understanding?u=76281980&t=177)** It's more about which metrics will the business use to measure progress when we're done.
>
> **[3:04](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/navigating-the-transition-from-business-understanding-to-data-understanding?u=76281980&t=184)** The determine data mining goals task is a process of translation.
>
> **[3:12](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/navigating-the-transition-from-business-understanding-to-data-understanding?u=76281980&t=192)** Translating the business objectives into a form that modeling algorithms can help us with.
>
> **[3:19](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/navigating-the-transition-from-business-understanding-to-data-understanding?u=76281980&t=199)** This translation almost always involves figuring out what we have to predict, after all, we're building predictive models.
>
> **[3:29](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/navigating-the-transition-from-business-understanding-to-data-understanding?u=76281980&t=209)** After modeling you translate back into the language of the business.
>
> **[3:35](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/navigating-the-transition-from-business-understanding-to-data-understanding?u=76281980&t=215)** The fourth task is developing your project plan.
>
> **[3:39](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/navigating-the-transition-from-business-understanding-to-data-understanding?u=76281980&t=219)** The project plan is kept quite loose at this point.
>
> **[3:44](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/navigating-the-transition-from-business-understanding-to-data-understanding?u=76281980&t=224)** You've sorted out who will be on the initial team, what software will be supported, and you have a working list of data sources, but you commit to very little at this point.
>
> **[3:55](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/navigating-the-transition-from-business-understanding-to-data-understanding?u=76281980&t=235)** Data understanding will be the open-ended process by which you determine which of these resources will continue on to the later phases.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (1), continue (1)
> **Definitions:** is a  (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### How to organize your work with the four data understanding tasks
> [LinkedIn Learning](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-organize-your-work-with-the-four-data-understanding-tasks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-organize-your-work-with-the-four-data-understanding-tasks?u=76281980&t=0)** - We're back in the Christie M document, looking at figure three, the task list.
>
> **[0:05](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-organize-your-work-with-the-four-data-understanding-tasks?u=76281980&t=5)** Now let's talk about the four data understanding tasks.
>
> **[0:11](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-organize-your-work-with-the-four-data-understanding-tasks?u=76281980&t=11)** These tasks and even their names will be important to us because they will help us structure the course.
>
> **[0:20](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-organize-your-work-with-the-four-data-understanding-tasks?u=76281980&t=20)** In fact you may notice that the chapter titles for the most part refer explicitly back to these task names.
>
> **[0:30](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-organize-your-work-with-the-four-data-understanding-tasks?u=76281980&t=30)** So let's talk about each of them in turn.
>
> **[0:33](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-organize-your-work-with-the-four-data-understanding-tasks?u=76281980&t=33)** The first task is Collect Initial Data and that's going to include getting the data into your software environment of choice.
>
> **[0:42](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-organize-your-work-with-the-four-data-understanding-tasks?u=76281980&t=42)** So there might be a little bit of cleaning and formatting but only in support of data loading.
>
> **[0:50](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-organize-your-work-with-the-four-data-understanding-tasks?u=76281980&t=50)** Also keep in mind that we have not integrated the data yet.
>
> **[0:54](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-organize-your-work-with-the-four-data-understanding-tasks?u=76281980&t=54)** We have to give the individual data sources a little bit of attention before we integrate them.
>
> **[1:01](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-organize-your-work-with-the-four-data-understanding-tasks?u=76281980&t=61)** Integration conceals some missing data problems but it creates some new ones.
>
> **[1:06](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-organize-your-work-with-the-four-data-understanding-tasks?u=76281980&t=66)** So you must do an initial exploration first.
>
> **[1:11](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-organize-your-work-with-the-four-data-understanding-tasks?u=76281980&t=71)** I love this phrase, gross or surface properties because I think it captures perfectly what this task, Describe Data is all about.
>
> **[1:23](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-organize-your-work-with-the-four-data-understanding-tasks?u=76281980&t=83)** Sometimes with clients I compare it to counting apples and oranges.
>
> **[1:27](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-organize-your-work-with-the-four-data-understanding-tasks?u=76281980&t=87)** Specifically, It entails things like how many customers last year and how many transactions collectively and individually did they have.
>
> **[1:37](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-organize-your-work-with-the-four-data-understanding-tasks?u=76281980&t=97)** So it's basically counting but counting with a purpose.
>
> **[1:42](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-organize-your-work-with-the-four-data-understanding-tasks?u=76281980&t=102)** You're getting the first glimpse at sample size issues and if you have enough of everything, if you have 10 million insurance claims but only 310 known frauds, you can anticipate that you are going to have some challenges building a supervised machine learning model.
>
> **[1:59](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-organize-your-work-with-the-four-data-understanding-tasks?u=76281980&t=119)** Or, if you have 750,000 shopper IDs in your regional supermarket loyalty program but 250,000 haven't bought anything in the last year, then you'd include those zero transaction folks for some analysis but drop them for others.
>
> **[2:19](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-organize-your-work-with-the-four-data-understanding-tasks?u=76281980&t=139)** So as simple as it sounds, thoughtful counting is important and we will discuss this and practice it with examples.
>
> **[2:29](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-organize-your-work-with-the-four-data-understanding-tasks?u=76281980&t=149)** Explore Data is a big task.
>
> **[2:33](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-organize-your-work-with-the-four-data-understanding-tasks?u=76281980&t=153)** We're going to spend a lot of time on this task.
>
> **[2:36](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-organize-your-work-with-the-four-data-understanding-tasks?u=76281980&t=156)** At first, it seems to overlap a bit with business intelligence skills in that there's a lot of querying, visualizing and reporting.
>
> **[2:44](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-organize-your-work-with-the-four-data-understanding-tasks?u=76281980&t=164)** Where it's very different from BI is the goal.
>
> **[2:49](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-organize-your-work-with-the-four-data-understanding-tasks?u=76281980&t=169)** Don't forget that we aren't jumping right to our report after data understanding.
>
> **[2:54](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-organize-your-work-with-the-four-data-understanding-tasks?u=76281980&t=174)** The next phase is data prep and then modeling.
>
> **[2:58](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-organize-your-work-with-the-four-data-understanding-tasks?u=76281980&t=178)** So all this work is in the service of better models and developing a data prep to do list.
>
> **[3:06](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-organize-your-work-with-the-four-data-understanding-tasks?u=76281980&t=186)** Our fourth task is Verify Data Quality, missing data, another big topic.
>
> **[3:12](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-organize-your-work-with-the-four-data-understanding-tasks?u=76281980&t=192)** Don't forget that we must examine data quality through the lens of the individual data sources.
>
> **[3:19](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-organize-your-work-with-the-four-data-understanding-tasks?u=76281980&t=199)** Then we have to come back later after data integration and look at it again.
>
> **[3:25](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-organize-your-work-with-the-four-data-understanding-tasks?u=76281980&t=205)** Don't rush to fix the data.
>
> **[3:28](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-organize-your-work-with-the-four-data-understanding-tasks?u=76281980&t=208)** Proper treatment requires proper diagnosis.
>
> **[3:32](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-organize-your-work-with-the-four-data-understanding-tasks?u=76281980&t=212)** Data understanding is all about getting our analysis off to an effective start with a thorough diagnosis and a proper assessment.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2)
> **Best Practices:** don't forget (2)
> **Cross-References:** in the last (1)
> **Definitions:** is a  (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - we (1)


### 2. Collect Initial Data

#### Considerations in gathering the relevant data
> [LinkedIn Learning](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/considerations-in-gathering-the-relevant-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/considerations-in-gathering-the-relevant-data?u=76281980&t=0)** - [Instructor] The first task is collect initial data.
>
> **[0:03](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/considerations-in-gathering-the-relevant-data?u=76281980&t=3)** One thing that experience has taught me is that the data that will be most effective during modeling is often found where no one else has been looking, so you have to do a thorough search.
>
> **[0:17](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/considerations-in-gathering-the-relevant-data?u=76281980&t=17)** So where do you start?
>
> **[0:19](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/considerations-in-gathering-the-relevant-data?u=76281980&t=19)** How can you start to assemble a list of potential data sources and potential subject matter experts that will help you understand the data?
>
> **[0:28](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/considerations-in-gathering-the-relevant-data?u=76281980&t=28)** I often start with a building directory or an organizational chart.
>
> **[0:33](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/considerations-in-gathering-the-relevant-data?u=76281980&t=33)** It might seem counterintuitive, but if you want to understand the business problem, you have to understand all aspects of the business that potentially involve that problem, and the managers within each department will be your best SMEs.
>
> **[0:49](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/considerations-in-gathering-the-relevant-data?u=76281980&t=49)** Each department or business process is a potential source of data.
>
> **[0:55](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/considerations-in-gathering-the-relevant-data?u=76281980&t=55)** Most variables that you try will fail, but almost all sources of data will succeed in producing at least one good variable.
>
> **[1:05](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/considerations-in-gathering-the-relevant-data?u=76281980&t=65)** At first, this seems to be a paradox.
>
> **[1:08](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/considerations-in-gathering-the-relevant-data?u=76281980&t=68)** If others warn you, that you're wasting your time with some of the variables and data sources that you try, won't you just end up with more variables than you can use in the final model?
>
> **[1:19](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/considerations-in-gathering-the-relevant-data?u=76281980&t=79)** This is true, but the reason that you must do it and that this approach is effective, is the more data sources you use representing different departments and operations, the greater the coverage of the business processes.
>
> **[1:36](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/considerations-in-gathering-the-relevant-data?u=76281980&t=96)** If the project has been chosen properly for its potential ROI, and its alignment with executive priorities, then it is worth it to do this thoroughly, it is worth it to do it right.
>
> **[1:48](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/considerations-in-gathering-the-relevant-data?u=76281980&t=108)** Here's why you can't look only where you've been told to look.
>
> **[1:52](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/considerations-in-gathering-the-relevant-data?u=76281980&t=112)** The variables under constant scrutiny had been baked into the cake.
>
> **[1:57](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/considerations-in-gathering-the-relevant-data?u=76281980&t=117)** They probably don't hold the secrets to organizational transformation, improvement, nor in moving business metrics in the right direction.
>
> **[2:06](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/considerations-in-gathering-the-relevant-data?u=76281980&t=126)** So if an SME tells you, you should look, you should look.
>
> **[2:10](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/considerations-in-gathering-the-relevant-data?u=76281980&t=130)** If they tell you not to bother, you might want to look anyway.
>
> **[2:15](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/considerations-in-gathering-the-relevant-data?u=76281980&t=135)** There's another way to think about why you have to be very careful about including only the variables that everybody else has focused on.
>
> **[2:23](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/considerations-in-gathering-the-relevant-data?u=76281980&t=143)** It's sometimes called Goodhart's law.
>
> **[2:26](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/considerations-in-gathering-the-relevant-data?u=76281980&t=146)** The original phrasing makes it sound a bit technical.
>
> **[2:30](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/considerations-in-gathering-the-relevant-data?u=76281980&t=150)** This rephrasing of it is what most people quote.
>
> **[2:34](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/considerations-in-gathering-the-relevant-data?u=76281980&t=154)** When a measure becomes a target, it ceases to be a good measure, meaning that given an incentive, everyone will alter their behavior to maximize the incentive, whether it's sales, commissions, performance bonuses, favorable work reviews, or discounts.
>
> **[2:54](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/considerations-in-gathering-the-relevant-data?u=76281980&t=174)** This is operating both at the employee side and your customers.
>
> **[2:59](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/considerations-in-gathering-the-relevant-data?u=76281980&t=179)** So variables that might be influenced by these effects have to be used with caution, your model might only give you insights about the incentive system, and not about the actual business problem.
>
> **[3:12](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/considerations-in-gathering-the-relevant-data?u=76281980&t=192)** For instance, some frequent flyers, book a long round trip flight to a far away place, just to rack up the miles at the end of the year.
>
> **[3:22](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/considerations-in-gathering-the-relevant-data?u=76281980&t=202)** Sometimes they don't even leave the airport, they just arrive, turn around and go back, they are just trying to maintain their VIP status.
>
> **[3:31](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/considerations-in-gathering-the-relevant-data?u=76281980&t=211)** Now you don't ignore these variables, but you need to understand how the incentives can create confusing and distracting patterns.
>
> **[3:40](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/considerations-in-gathering-the-relevant-data?u=76281980&t=220)** So key performance indicators are critical to business understanding and evaluation, but you can't build your model on KPIs alone.
>
> **[3:53](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/considerations-in-gathering-the-relevant-data?u=76281980&t=233)** For instance, in a cell phone project I participated in, we looked at billing data, usage patterns, the features on their phone, their current and previous contracts, call center transcripts, and even retail store interactions.
>
> **[4:09](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/considerations-in-gathering-the-relevant-data?u=76281980&t=249)** The bottom line is this, you really need to assemble a comprehensive view of what you were trying to model.

> [!info]- Semantic Content
>
> **Env Vars:** roi (1), sme (1), vip (1)
> **Code Keywords:** try, (1), this, (1)
> **Analogies:** for instance (2)
> **Definitions:** is a  (1)
> **Warnings:** caution (1)
> **Speakers:** - [instructor] (1)

#### A strategy for processing data sources
> [LinkedIn Learning](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/a-strategy-for-processing-data-sources?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/a-strategy-for-processing-data-sources?u=76281980&t=0)** - [Male Speaker] I want to share a strategy and a metaphor to help you with how to go about choosing data sources.
>
> **[0:08](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/a-strategy-for-processing-data-sources?u=76281980&t=8)** I'm going to give you a suggestion about where and how to look for data.
>
> **[0:14](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/a-strategy-for-processing-data-sources?u=76281980&t=14)** What many are tempted to try, at least at first, is to start small with just one or two data sources.
>
> **[0:23](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/a-strategy-for-processing-data-sources?u=76281980&t=23)** They start by asking a subject matter expert for advice on where to look first, and then they work with one major data source at a time, lets say, social media, then they rush right to modeling.
>
> **[0:37](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/a-strategy-for-processing-data-sources?u=76281980&t=37)** The idea is that it will be more efficient.
>
> **[0:40](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/a-strategy-for-processing-data-sources?u=76281980&t=40)** This is especially tempting if you're working in sprints and you're feeling time pressure.
>
> **[0:47](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/a-strategy-for-processing-data-sources?u=76281980&t=47)** I want to explain the risks of that approach using our metaphor.
>
> **[0:52](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/a-strategy-for-processing-data-sources?u=76281980&t=52)** Perhaps not the metaphor you were expecting.
>
> **[0:54](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/a-strategy-for-processing-data-sources?u=76281980&t=54)** It works like a dog show.
>
> **[0:57](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/a-strategy-for-processing-data-sources?u=76281980&t=57)** I'll explain the dog show metaphor in just a moment, but first, a bit of theory.
>
> **[1:03](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/a-strategy-for-processing-data-sources?u=76281980&t=63)** The reason that folks want to start slow and fail fast, is that they're afraid that the data will fail to reveal a pattern.
>
> **[1:13](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/a-strategy-for-processing-data-sources?u=76281980&t=73)** If you know where to look, this is extremely rare, and according to the nine laws of data mining, it never happens.
>
> **[1:22](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/a-strategy-for-processing-data-sources?u=76281980&t=82)** The fifth law is Watkins's Law and it states there are always patterns.
>
> **[1:29](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/a-strategy-for-processing-data-sources?u=76281980&t=89)** Why is this true?
>
> **[1:31](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/a-strategy-for-processing-data-sources?u=76281980&t=91)** Well the way that it's phrased in the nine laws is this.
>
> **[1:34](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/a-strategy-for-processing-data-sources?u=76281980&t=94)** Data relevant to the business objective and consequent data mining goal is generated by processes within the domain.
>
> **[1:45](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/a-strategy-for-processing-data-sources?u=76281980&t=105)** In other words, if you're keeping records, then you have data that is relevant to the area of the business that you're interested in, therefore you've also got data in there somewhere that will help you make predictions about the same area of the business.
>
> **[2:03](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/a-strategy-for-processing-data-sources?u=76281980&t=123)** You can assume it.
>
> **[2:05](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/a-strategy-for-processing-data-sources?u=76281980&t=125)** It's always there.
>
> **[2:07](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/a-strategy-for-processing-data-sources?u=76281980&t=127)** 25 years of building predictive models has taught me two things about this.
>
> **[2:12](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/a-strategy-for-processing-data-sources?u=76281980&t=132)** Watkins's Law, that there's always patterns, is true.
>
> **[2:17](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/a-strategy-for-processing-data-sources?u=76281980&t=137)** And here's what else is true.
>
> **[2:19](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/a-strategy-for-processing-data-sources?u=76281980&t=139)** There are always interactions, that is if I look at disparate data sources like social media, call center data, warranty claims and billing, it's in the interactions between those departments that will be the least obvious, but also the most powerful.
>
> **[2:40](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/a-strategy-for-processing-data-sources?u=76281980&t=160)** So here's how you capitalize on these facts.
>
> **[2:44](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/a-strategy-for-processing-data-sources?u=76281980&t=164)** Don't try to build your model on just one department's data.
>
> **[2:48](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/a-strategy-for-processing-data-sources?u=76281980&t=168)** Of course you start with one, but you'll find that the variables are closely related and somewhat redundant with each other.
>
> **[2:56](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/a-strategy-for-processing-data-sources?u=76281980&t=176)** Many won't work out, but the best within each area of the business will emerge.
>
> **[3:03](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/a-strategy-for-processing-data-sources?u=76281980&t=183)** It is metaphorically like best in breed, but don't stop there.
>
> **[3:09](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/a-strategy-for-processing-data-sources?u=76281980&t=189)** Keep going.
>
> **[3:10](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/a-strategy-for-processing-data-sources?u=76281980&t=190)** After cleaning up and weeding out variables within each department, data integration will have to take place and best in breed becomes best in show, and you look for the interactions between those diverse data sources.
>
> **[3:28](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/a-strategy-for-processing-data-sources?u=76281980&t=208)** This process never fails for the same reason that Watkins's Law is true.
>
> **[3:33](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/a-strategy-for-processing-data-sources?u=76281980&t=213)** If you are keeping relevant records for the business processes you are investigating, there are always patterns.
>
> **[3:41](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/a-strategy-for-processing-data-sources?u=76281980&t=221)** Let's imagine a possible scenario to better understand how this works.
>
> **[3:46](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/a-strategy-for-processing-data-sources?u=76281980&t=226)** Let's say that some users of new phones are having battery issues.
>
> **[3:52](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/a-strategy-for-processing-data-sources?u=76281980&t=232)** They call customer service, and discover that it's not a damage category that's covered under their warranty.
>
> **[4:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/a-strategy-for-processing-data-sources?u=76281980&t=240)** Current standard policy is that for batteries they have to buy a new one, or they have to get a whole new phone, but either way, they'll have to pay.
>
> **[4:09](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/a-strategy-for-processing-data-sources?u=76281980&t=249)** Frustrated, they skip a payment, even though they've never been late before and therefore they don't trigger any collection warnings in the data.
>
> **[4:18](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/a-strategy-for-processing-data-sources?u=76281980&t=258)** This could be a powerful discovery, and these are the kinds of patterns that are always present, but to find them you have to look in lots of departments at once.
>
> **[4:29](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/a-strategy-for-processing-data-sources?u=76281980&t=269)** So remember, best in breed followed by best in show.

> [!info]- Semantic Content
>
> **Code Keywords:** this. (2), let (2), try, (1)
> **CLI Commands:** find (2), make (1)
> **Definitions:** in other words (1)
> **Analogies:** imagine (1)
> **Speakers:** - [male (1)

#### Getting creative about data sources
> [LinkedIn Learning](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/getting-creative-about-data-sources?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/getting-creative-about-data-sources?u=76281980&t=0)** - [Instructor] I want to tell you a brief story to help you picture what it feels like to do all this detective work acquiring data during a real world project.
>
> **[0:09](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/getting-creative-about-data-sources?u=76281980&t=9)** Some years ago, I was on an insurance fraud project.
>
> **[0:13](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/getting-creative-about-data-sources?u=76281980&t=13)** We were trying to predict risky claims.
>
> **[0:16](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/getting-creative-about-data-sources?u=76281980&t=16)** Specifically, we were focused on staged accidents.
>
> **[0:20](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/getting-creative-about-data-sources?u=76281980&t=20)** That's when the criminal gets into an accident on purpose and uses a network of other criminals to generate fake medical bills for reimbursement.
>
> **[0:27](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/getting-creative-about-data-sources?u=76281980&t=27)** It's big money, hundreds of millions of dollars.
>
> **[0:31](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/getting-creative-about-data-sources?u=76281980&t=31)** I was using my approach of following the data through the various departments that were related to the problem.
>
> **[0:37](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/getting-creative-about-data-sources?u=76281980&t=37)** The primary focus was claims investigation, but one of my subject matter experts was the executive that was in charge of claims processing.
>
> **[0:47](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/getting-creative-about-data-sources?u=76281980&t=47)** In other words, the day-to-day handling of the paperwork of receiving the claims and entering the information.
>
> **[0:54](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/getting-creative-about-data-sources?u=76281980&t=54)** In my effort to understand all the business processes that generated the data for each of the data sources, I asked to sit in for a half hour while inbound claims initiation calls were coming in.
>
> **[1:06](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/getting-creative-about-data-sources?u=76281980&t=66)** I was introduced to one of the team members and tried to stay out of her way while she worked.
>
> **[1:10](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/getting-creative-about-data-sources?u=76281980&t=70)** Keep in mind that I would have already studied the data dictionaries at this point.
>
> **[1:15](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/getting-creative-about-data-sources?u=76281980&t=75)** I was just there to observe.
>
> **[1:18](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/getting-creative-about-data-sources?u=76281980&t=78)** There was no call on her queue at the moment, so I noticed that she had a folder and she was typing some information from paper documents into the computer and made note of this and was about to ask her about it when the first call came in.
>
> **[1:33](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/getting-creative-about-data-sources?u=76281980&t=93)** Then I noticed that caller ID appeared when she took her call.
>
> **[1:38](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/getting-creative-about-data-sources?u=76281980&t=98)** I made note of that too.
>
> **[1:40](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/getting-creative-about-data-sources?u=76281980&t=100)** After the call, I asked her if the caller ID was being captured in the data.
>
> **[1:44](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/getting-creative-about-data-sources?u=76281980&t=104)** She wasn't sure, but I made notes to ask the data team about the caller ID.
>
> **[1:51](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/getting-creative-about-data-sources?u=76281980&t=111)** Trust me, these were big discoveries.
>
> **[1:55](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/getting-creative-about-data-sources?u=76281980&t=115)** First, the caller ID.
>
> **[1:57](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/getting-creative-about-data-sources?u=76281980&t=117)** If you're going to make a career out of fraud, you need to make a bunch of fake identities.
>
> **[2:03](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/getting-creative-about-data-sources?u=76281980&t=123)** You can't use the same identity twice, so you put fake names and addresses on the forms, but wouldn't it be strange if several different claims all had the same caller ID?
>
> **[2:19](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/getting-creative-about-data-sources?u=76281980&t=139)** Then remember those paper forms I observed being typed into the computer?
>
> **[2:23](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/getting-creative-about-data-sources?u=76281980&t=143)** They were weather descriptions from the accident report.
>
> **[2:26](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/getting-creative-about-data-sources?u=76281980&t=146)** No one had mentioned them to me.
>
> **[2:29](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/getting-creative-about-data-sources?u=76281980&t=149)** The weather turned out to be very helpful and it had been missed because it wasn't in the data dictionaries I had seen.
>
> **[2:36](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/getting-creative-about-data-sources?u=76281980&t=156)** If you are faking an accident, you don't want to do it in icy weather.
>
> **[2:40](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/getting-creative-about-data-sources?u=76281980&t=160)** Somebody could get hurt, including the criminal themselves.
>
> **[2:44](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/getting-creative-about-data-sources?u=76281980&t=164)** They aren't trying to work that hard.
>
> **[2:46](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/getting-creative-about-data-sources?u=76281980&t=166)** They just want to pretend to be hurt.
>
> **[2:49](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/getting-creative-about-data-sources?u=76281980&t=169)** So two extremely helpful variables that were used in the final model were just a half hour investment.
>
> **[2:57](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/getting-creative-about-data-sources?u=76281980&t=177)** Think about this, a serious return on investment producing model like this might only have two to three dozen variables in the final model.
>
> **[3:06](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/getting-creative-about-data-sources?u=76281980&t=186)** So two top-performing variables is a very big deal.
>
> **[3:10](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/getting-creative-about-data-sources?u=76281980&t=190)** If you spent the same half hour observing each business process in your project and another half hour with a subject matter expert in each department, imagine what you might find.
>
> **[3:25](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/getting-creative-about-data-sources?u=76281980&t=205)** It won't always come easy and most of your tries won't work out, but this is the kind of hard work it takes to acquire the data for a world-class model.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2), find (1)
> **Definitions:** in other words (1), is a  (1)
> **Analogies:** picture (1), imagine (1)
> **Code Keywords:** this, (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### How to envision a proper flat file
> [LinkedIn Learning](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-envision-a-proper-flat-file?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-envision-a-proper-flat-file?u=76281980&t=0)** - [Instructor] We're going to briefly review something quite basic, but also terribly important.
>
> **[0:06](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-envision-a-proper-flat-file?u=76281980&t=6)** By the time you reach the end of the data preparation phase, you need everything in a flat file.
>
> **[0:12](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-envision-a-proper-flat-file?u=76281980&t=12)** All of your information, and it has to be in this format.
>
> **[0:17](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-envision-a-proper-flat-file?u=76281980&t=17)** During data acquisition and assessment, you needed an ID field to merge your data.
>
> **[0:22](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-envision-a-proper-flat-file?u=76281980&t=22)** You still need it, just at this point it's to prepare you for eventual deployment.
>
> **[0:28](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-envision-a-proper-flat-file?u=76281980&t=28)** Of course nothing is more important to supervise learning than your Target field, and naturally it has to be 100% complete, no missing data.
>
> **[0:40](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-envision-a-proper-flat-file?u=76281980&t=40)** Generally, there's no missing data in the inputs either.
>
> **[0:44](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-envision-a-proper-flat-file?u=76281980&t=44)** We diagnose it during data understanding, and address it during data prep.
>
> **[0:48](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-envision-a-proper-flat-file?u=76281980&t=48)** By the time we get to this point, every row of data has been vetted and belongs there, and every column has been vetted and belongs there.
>
> **[0:56](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-envision-a-proper-flat-file?u=76281980&t=56)** Specifically, each column should be a unique and useful source of information with little or no redundancy.
>
> **[1:04](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-envision-a-proper-flat-file?u=76281980&t=64)** The whole point of data understanding is to explore the data so thoroughly that by the time we work our data prep to-do list, we have the data in exactly the form we need.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)

#### Anticipating data integration
> [LinkedIn Learning](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/anticipating-data-integration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/anticipating-data-integration?u=76281980&t=0)** - [Instructor] In the 25 years that I've been doing this, I've concluded that the best source of modeling data is often transactional data, but it's not in the form that we need.
>
> **[0:11](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/anticipating-data-integration?u=76281980&t=11)** It's not flat.
>
> **[0:13](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/anticipating-data-integration?u=76281980&t=13)** So what we have to do is aggregate it, and in numerous ways.
>
> **[0:17](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/anticipating-data-integration?u=76281980&t=17)** This is all done in the data preparation phase, but we have to be clear on what it looks like when we're done so that we can properly perform our data understanding tasks.
>
> **[0:28](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/anticipating-data-integration?u=76281980&t=28)** So just one example might be calculating average number of domestic U.S. calls over this four month period, turning four rows into just one number.
>
> **[0:39](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/anticipating-data-integration?u=76281980&t=39)** Then for this one customer, that becomes their value on a single row of data in our modeling flat file.
>
> **[0:48](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/anticipating-data-integration?u=76281980&t=48)** Just in the form we need, just one row per customer, or whatever our unit of analysis might be.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (1)
> **Speakers:** - [instructor] (1)


### 3. First Look at the Data

#### Reviewing basic concepts in the level of measurement
> [LinkedIn Learning](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/reviewing-basic-concepts-in-the-level-of-measurement?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/reviewing-basic-concepts-in-the-level-of-measurement?u=76281980&t=0)** - [Instructor] Okay, you're about to look at a data set for the very first time.
>
> **[0:04](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/reviewing-basic-concepts-in-the-level-of-measurement?u=76281980&t=4)** What do you look for?
>
> **[0:06](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/reviewing-basic-concepts-in-the-level-of-measurement?u=76281980&t=6)** The very first thing on my mind, other than the very obvious, the number of rows and the number of columns, is the level of measurement of each of the variables.
>
> **[0:19](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/reviewing-basic-concepts-in-the-level-of-measurement?u=76281980&t=19)** Level of measurement's been around for 75 years, but it's still fundamental to everything we do.
>
> **[0:26](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/reviewing-basic-concepts-in-the-level-of-measurement?u=76281980&t=26)** It determines which descriptive statistics, which statistical tests, which charts, and which machine learning algorithms make sense for the data.
>
> **[0:37](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/reviewing-basic-concepts-in-the-level-of-measurement?u=76281980&t=37)** It drives almost everything we do during data understanding and then later during the modeling phase.
>
> **[0:45](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/reviewing-basic-concepts-in-the-level-of-measurement?u=76281980&t=45)** Stevens was a Harvard psychologist, and he wrote on the theory of scales of measurement way back in 1946, but we're still under its influence today.
>
> **[0:56](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/reviewing-basic-concepts-in-the-level-of-measurement?u=76281980&t=56)** Even had this little table in the paper with the four levels and what statistical tests were appropriate, like median for some, but mean for others.
>
> **[1:06](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/reviewing-basic-concepts-in-the-level-of-measurement?u=76281980&t=66)** The four terms, nominal, ordinal, interval, and ratio, are still used.
>
> **[1:13](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/reviewing-basic-concepts-in-the-level-of-measurement?u=76281980&t=73)** We'll define them, but first, for our purposes, we can combine the last two.
>
> **[1:19](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/reviewing-basic-concepts-in-the-level-of-measurement?u=76281980&t=79)** The only distinction between ratio and interval is having a true zero.
>
> **[1:25](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/reviewing-basic-concepts-in-the-level-of-measurement?u=76281980&t=85)** The nerdy example that's often used is that Fahrenheit and Celsius temperature scales do not have a true zero and might be cold at zero degrees on either scale, but it's not the complete absence of heat.
>
> **[1:41](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/reviewing-basic-concepts-in-the-level-of-measurement?u=76281980&t=101)** But Kelvin does meet this criteria, because zero degrees Kelvin is absolute zero.
>
> **[1:49](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/reviewing-basic-concepts-in-the-level-of-measurement?u=76281980&t=109)** It's a fun fact to know, but not a distinction that we need to worry about.
>
> **[1:54](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/reviewing-basic-concepts-in-the-level-of-measurement?u=76281980&t=114)** So we'll combine them into one category called either scale or continuous.
>
> **[1:59](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/reviewing-basic-concepts-in-the-level-of-measurement?u=76281980&t=119)** You'll hear them both.
>
> **[2:01](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/reviewing-basic-concepts-in-the-level-of-measurement?u=76281980&t=121)** However, the distinction between nominal, ordinal, and scale will be very important to us.
>
> **[2:08](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/reviewing-basic-concepts-in-the-level-of-measurement?u=76281980&t=128)** Examples of nominal include things like marital status, payment method, whether you own or rent your home, or perhaps your occupation.
>
> **[2:17](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/reviewing-basic-concepts-in-the-level-of-measurement?u=76281980&t=137)** It's separate and distinct categories that are not meaningfully ranked.
>
> **[2:23](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/reviewing-basic-concepts-in-the-level-of-measurement?u=76281980&t=143)** Ordinal are separate and distinct categories that are meaningfully ranked, so it includes things like degree status, bachelor, masters, PhD, et cetera, age, when reported in categories, income in categories, and many others.
>
> **[2:42](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/reviewing-basic-concepts-in-the-level-of-measurement?u=76281980&t=162)** Scale variables, the classic being things like height and weight, are variables where taking an average makes sense, where you're measuring things on a continuum.
>
> **[2:53](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/reviewing-basic-concepts-in-the-level-of-measurement?u=76281980&t=173)** This could also include age and income, but when reported in years or dollars.
>
> **[2:59](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/reviewing-basic-concepts-in-the-level-of-measurement?u=76281980&t=179)** It could also include things like miles per gallon or the number of individuals living in a household.
>
> **[3:06](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/reviewing-basic-concepts-in-the-level-of-measurement?u=76281980&t=186)** I know it seems basic, but level of measurement is critical to the efficient analysis of your variables.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### What is dummy coding?
> [LinkedIn Learning](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/what-is-dummy-coding?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/what-is-dummy-coding?u=76281980&t=0)** - [Instructor] What is dummy coding?
>
> **[0:02](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/what-is-dummy-coding?u=76281980&t=2)** Dummy coding is a special kind of data preparation that most software runs automatically on your categorical variables.
>
> **[0:11](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/what-is-dummy-coding?u=76281980&t=11)** That's both nominal and ordinal.
>
> **[0:14](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/what-is-dummy-coding?u=76281980&t=14)** We won't focus on the modeling aspect of it right now, just why you need to be aware of this while assessing your data.
>
> **[0:24](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/what-is-dummy-coding?u=76281980&t=24)** Take a nominal variable like marital status.
>
> **[0:26](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/what-is-dummy-coding?u=76281980&t=26)** We have four categories.
>
> **[0:29](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/what-is-dummy-coding?u=76281980&t=29)** These four categories will get converted into four new true or false variables.
>
> **[0:36](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/what-is-dummy-coding?u=76281980&t=36)** For instance, the new variable, marital, is true when the old variable, marital status, is equal to married.
>
> **[0:46](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/what-is-dummy-coding?u=76281980&t=46)** Why worry about this?
>
> **[0:47](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/what-is-dummy-coding?u=76281980&t=47)** Well, again, most software packages and analytics programming languages do this automatically during the modeling phase in your modeling algorithms.
>
> **[1:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/what-is-dummy-coding?u=76281980&t=60)** If you don't understand that, it's going to complicate interpreting the results.
>
> **[1:05](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/what-is-dummy-coding?u=76281980&t=65)** Also, when you go to deploy those same models, you need to make sure that you are creating these new variables even if you have moved the model to a new platform.
>
> **[1:17](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/what-is-dummy-coding?u=76281980&t=77)** Also, ordinal variables become tricky.
>
> **[1:20](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/what-is-dummy-coding?u=76281980&t=80)** Imagine that you have a variable like family size: zero children, one, two, three, four, up to five children.
>
> **[1:28](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/what-is-dummy-coding?u=76281980&t=88)** Do you want to treat that as a scale variable? Perhaps.
>
> **[1:32](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/what-is-dummy-coding?u=76281980&t=92)** Do you want to treat it as an ordinal variable?
>
> **[1:35](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/what-is-dummy-coding?u=76281980&t=95)** That's a real option but if you choose that it be an ordinal variable, it's going to get dummy coded.
>
> **[1:42](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/what-is-dummy-coding?u=76281980&t=102)** So the choice is largely affected by whether or not you want that scale variable or the collection of dummy-coded variables.
>
> **[1:51](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/what-is-dummy-coding?u=76281980&t=111)** So naturally the number of variables increases and it increases by a lot.
>
> **[1:57](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/what-is-dummy-coding?u=76281980&t=117)** In particular, variables with lots of categories really cause trouble.
>
> **[2:03](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/what-is-dummy-coding?u=76281980&t=123)** Let's say you innocently put state of residency in your model.
>
> **[2:08](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/what-is-dummy-coding?u=76281980&t=128)** Well, assuming that you've just got the 50 states and not the territories, you still have 50 new dummy-coded variables.
>
> **[2:18](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/what-is-dummy-coding?u=76281980&t=138)** So there's a lot to think about but the primary thing on your mind right now should be that number of categories because that really is an issue during the data understanding phase.

> [!info]- Semantic Content
>
> **Definitions:** is a  (1), is an  (1)
> **Analogies:** for instance (1), imagine (1)
> **CLI Commands:** make (1)
> **Code Keywords:** let (1)
> **UI Navigation:** go to (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### Expanding our definition of level of measurement
> [LinkedIn Learning](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/expanding-our-definition-of-level-of-measurement?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/expanding-our-definition-of-level-of-measurement?u=76281980&t=0)** - [Instructor] When Stevens first proposed level of measurement back in the '40s, he was focused on statistics, specifically survey style data.
>
> **[0:10](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/expanding-our-definition-of-level-of-measurement?u=76281980&t=10)** Since we're doing machine learning, we really have to expand our notion of level of measurement and include some additional categories.
>
> **[0:18](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/expanding-our-definition-of-level-of-measurement?u=76281980&t=18)** First, we have to focus more carefully on potential ID fields, not in the same way that the IT team does when they're building the data warehouse, but thinking creatively about fields that may help us link the current dataset with other datasets during data integration, things like street address, for instance, grabbing neighborhood level detail using zip code, then some fairly obvious ones, like telephone number and email can connect us with other data, but then also credit card number.
>
> **[0:51](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/expanding-our-definition-of-level-of-measurement?u=76281980&t=51)** Not because we're going to check a customer's credit score, I suppose in the case of banking, that might be relevant, but generally using it as a proxy.
>
> **[1:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/expanding-our-definition-of-level-of-measurement?u=76281980&t=60)** For instance, years ago when I was doing a project for Michael Kors, since they don't have a loyalty program, credit card was one way to identify that somebody was a repeat shopper.
>
> **[1:14](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/expanding-our-definition-of-level-of-measurement?u=76281980&t=74)** Also, you want to be looking at how complete they are.
>
> **[1:18](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/expanding-our-definition-of-level-of-measurement?u=76281980&t=78)** Knowing the email for everybody is different than knowing the email for only half of the cases.
>
> **[1:24](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/expanding-our-definition-of-level-of-measurement?u=76281980&t=84)** Finally, you want to look for opportunities for data extraction, like this.
>
> **[1:29](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/expanding-our-definition-of-level-of-measurement?u=76281980&t=89)** For instance, did you know that the second character in a vehicle identification number identifies the manufacturer?
>
> **[1:38](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/expanding-our-definition-of-level-of-measurement?u=76281980&t=98)** In this case, this VIN number belongs to an Audi.
>
> **[1:42](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/expanding-our-definition-of-level-of-measurement?u=76281980&t=102)** Also, we have to rethink nominal variables.
>
> **[1:46](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/expanding-our-definition-of-level-of-measurement?u=76281980&t=106)** Nominal variables are more complicated in machine learning than what we might encounter when we're doing nominal variables in stats.
>
> **[1:54](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/expanding-our-definition-of-level-of-measurement?u=76281980&t=114)** For instance, we might find variables that have only one value.
>
> **[1:58](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/expanding-our-definition-of-level-of-measurement?u=76281980&t=118)** You would think that this is an unusual, quirky thing to occur, but it's actually quite common.
>
> **[2:03](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/expanding-our-definition-of-level-of-measurement?u=76281980&t=123)** Or binary variables have characteristics that make them quite different from other nominal variables and should be identified as so.
>
> **[2:11](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/expanding-our-definition-of-level-of-measurement?u=76281980&t=131)** True/false being the classic example, although there are many.
>
> **[2:15](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/expanding-our-definition-of-level-of-measurement?u=76281980&t=135)** Low order nominal variable means that it doesn't have that many categories, and that's really what Stevens had in mind when he created this notion of a nominal variable.
>
> **[2:28](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/expanding-our-definition-of-level-of-measurement?u=76281980&t=148)** But we also encounter high order and very high order variables.
>
> **[2:33](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/expanding-our-definition-of-level-of-measurement?u=76281980&t=153)** Let's take a closer look at those.
>
> **[2:35](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/expanding-our-definition-of-level-of-measurement?u=76281980&t=155)** Examples of high order variables would be things like the phone model of your cell phone, the state that you live in, things like car make and model or occupation.
>
> **[2:47](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/expanding-our-definition-of-level-of-measurement?u=76281980&t=167)** Most data scientists, especially when they're starting out, include variables like this in their models, and it can create all kinds of complications.
>
> **[2:56](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/expanding-our-definition-of-level-of-measurement?u=76281980&t=176)** And the reason is, is that the algorithms automatically dummy code variables like this.
>
> **[3:02](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/expanding-our-definition-of-level-of-measurement?u=76281980&t=182)** So we'll sometimes include them, but we want to be very careful.
>
> **[3:07](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/expanding-our-definition-of-level-of-measurement?u=76281980&t=187)** And by high order, I really have in mind, those variables that have more than 12 to 15 categories, although there is no magic number, examples of very high order, include variables like the following, product code or SKU, city, that a customer lives in, zip code, something like movie name.
>
> **[3:32](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/expanding-our-definition-of-level-of-measurement?u=76281980&t=212)** Now of course we know that variables like this are used in models all the time, variables like moving name or book title are frequently used by Netflix and Amazon, but it's different because there, we're talking about association rules, models, not supervised machine learning.
>
> **[3:51](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/expanding-our-definition-of-level-of-measurement?u=76281980&t=231)** These very high order variables are going to be deadly to your model.
>
> **[3:56](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/expanding-our-definition-of-level-of-measurement?u=76281980&t=236)** Quite simply, you cannot include them, you have to handle them in some other way.
>
> **[4:01](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/expanding-our-definition-of-level-of-measurement?u=76281980&t=241)** So watch out for those high order and very high order variables at this stage in the game, we're mostly trying to identify them.
>
> **[4:09](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/expanding-our-definition-of-level-of-measurement?u=76281980&t=249)** That's not quite the last of it though, because we also have dates and text.
>
> **[4:14](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/expanding-our-definition-of-level-of-measurement?u=76281980&t=254)** And by text, I really mean unstructured data, things like physician's notes and so on.
>
> **[4:20](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/expanding-our-definition-of-level-of-measurement?u=76281980&t=260)** These have to be handled in a special way as well.
>
> **[4:23](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/expanding-our-definition-of-level-of-measurement?u=76281980&t=263)** For instance, dates in and of themselves are rarely useful in predictive models.
>
> **[4:32](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/expanding-our-definition-of-level-of-measurement?u=76281980&t=272)** What you need to do is perform date arithmetic, the distance and time between two dates, and that is what can be included in the model.
>
> **[4:40](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/expanding-our-definition-of-level-of-measurement?u=76281980&t=280)** So here you want to be spotting those dates and be thinking about what kinds of manipulations you might need to make during the data preparation phase down the line.
>
> **[4:51](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/expanding-our-definition-of-level-of-measurement?u=76281980&t=291)** Another example would be extracting from a date, whether or not it's a weekday or weekend.
>
> **[4:59](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/expanding-our-definition-of-level-of-measurement?u=76281980&t=299)** Finally, regarding the text, what you have to do is turn that text into something that the supervised model can use.
>
> **[5:08](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/expanding-our-definition-of-level-of-measurement?u=76281980&t=308)** Now, text mining is a topic in and of itself.
>
> **[5:11](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/expanding-our-definition-of-level-of-measurement?u=76281980&t=311)** But here what we're doing is we're scanning unstructured texts to see, are there opportunities to extract discrete pieces of information that could be used in a supervised model?
>
> **[5:23](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/expanding-our-definition-of-level-of-measurement?u=76281980&t=323)** For instance, this customer is upset about the bag fee that they had to pay.
>
> **[5:28](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/expanding-our-definition-of-level-of-measurement?u=76281980&t=328)** We might create a new variable, luggage fee, and mark it as true for this customer.
>
> **[5:36](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/expanding-our-definition-of-level-of-measurement?u=76281980&t=336)** So that's our expanded list of variable types when we talk about level of measurement for machine learning.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (2), this. (2), case, (1), let (1)
> **Analogies:** for instance (6)
> **CLI Commands:** make (3), find (1)
> **Definitions:** is an  (1), means that (1), is a  (1)
> **Env Vars:** vin (1), sku (1)
> **Tools:** notion (2)
> **Warnings:** watch out (1)
> **Speakers:** - [instructor] (1)

#### Taking an initial look at possible key variables
> [LinkedIn Learning](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/taking-an-initial-look-at-possible-key-variables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/taking-an-initial-look-at-possible-key-variables?u=76281980&t=0)** - [Instructor] Okay, let's take a look at a data set called Phone Service Customers.
>
> **[0:05](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/taking-an-initial-look-at-possible-key-variables?u=76281980&t=5)** This is available in the Originals folder.
>
> **[0:09](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/taking-an-initial-look-at-possible-key-variables?u=76281980&t=9)** And we're going to take a look at the data set and look for possible ID fields, simply any field that might help us merge this data with other data.
>
> **[0:21](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/taking-an-initial-look-at-possible-key-variables?u=76281980&t=21)** So the obvious choice is phone customer.
>
> **[0:25](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/taking-an-initial-look-at-possible-key-variables?u=76281980&t=25)** So hopefully we'll have other information that we can bring in with that but that certainly looks like it's what we need.
>
> **[0:32](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/taking-an-initial-look-at-possible-key-variables?u=76281980&t=32)** But we have a bunch of other possibilities.
>
> **[0:34](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/taking-an-initial-look-at-possible-key-variables?u=76281980&t=34)** For instance, street address might allow us to identify if we have multiple customers at the same address.
>
> **[0:43](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/taking-an-initial-look-at-possible-key-variables?u=76281980&t=43)** And that could be very interesting indeed.
>
> **[0:46](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/taking-an-initial-look-at-possible-key-variables?u=76281980&t=46)** Email address is an interesting one because we wouldn't assume that we have email address for everyone.
>
> **[0:54](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/taking-an-initial-look-at-possible-key-variables?u=76281980&t=54)** So it could be that we have a different set of services for those individuals for whom we know their email address.
>
> **[1:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/taking-an-initial-look-at-possible-key-variables?u=76281980&t=60)** For instance, we might have an email address for somebody that belongs to a loyalty program or that we handle their emails but otherwise, maybe we don't.
>
> **[1:12](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/taking-an-initial-look-at-possible-key-variables?u=76281980&t=72)** Same with telephone number.
>
> **[1:14](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/taking-an-initial-look-at-possible-key-variables?u=76281980&t=74)** Wouldn't it be interesting to know that there were more than one telephone number per customer ID in some instances, right?
>
> **[1:24](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/taking-an-initial-look-at-possible-key-variables?u=76281980&t=84)** We've got phone customer.
>
> **[1:25](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/taking-an-initial-look-at-possible-key-variables?u=76281980&t=85)** What if phone customer is sometimes in there twice, along with more than one phone number?
>
> **[1:32](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/taking-an-initial-look-at-possible-key-variables?u=76281980&t=92)** That would be interesting.
>
> **[1:37](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/taking-an-initial-look-at-possible-key-variables?u=76281980&t=97)** Credit card number.
>
> **[1:39](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/taking-an-initial-look-at-possible-key-variables?u=76281980&t=99)** In this instance, this might not be terribly important.
>
> **[1:44](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/taking-an-initial-look-at-possible-key-variables?u=76281980&t=104)** But in a retail situation, it's quite common that credit card number ends up being a proxy for customer ID because cash customers, you might not know that they came back.
>
> **[1:56](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/taking-an-initial-look-at-possible-key-variables?u=76281980&t=116)** So if you were doing something like market basket analysis and you did not have a loyalty program, credit card number might be the only way to do that.
>
> **[2:05](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/taking-an-initial-look-at-possible-key-variables?u=76281980&t=125)** Now, there's two critical reasons why we're going through this exercise.
>
> **[2:11](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/taking-an-initial-look-at-possible-key-variables?u=76281980&t=131)** One is the last thing that you want to do is accidentally put these potential ID fields into the model.
>
> **[2:19](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/taking-an-initial-look-at-possible-key-variables?u=76281980&t=139)** So if nothing else, you have to identify them to exclude them from any modeling process down the road.
>
> **[2:26](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/taking-an-initial-look-at-possible-key-variables?u=76281980&t=146)** But the other reason is what we've been hinting at, which is these might allow you to generate new variables, variables that you weren't anticipating before.
>
> **[2:35](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/taking-an-initial-look-at-possible-key-variables?u=76281980&t=155)** So for instance, you don't have a loyalty card number but you do know that you only have email addresses for people that have filled out a particular form.
>
> **[2:45](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/taking-an-initial-look-at-possible-key-variables?u=76281980&t=165)** So for both of those reasons, it's very important to go through your data in looking for this kind of information.

> [!info]- Semantic Content
>
> **Analogies:** for instance (3)
> **Code Keywords:** let (1), else, (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### Dealing with duplicate IDs and transactional data
> [LinkedIn Learning](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/dealing-with-duplicate-ids-and-transactional-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/dealing-with-duplicate-ids-and-transactional-data?u=76281980&t=0)** - Okay, so we've got our customer file.
>
> **[0:04](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/dealing-with-duplicate-ids-and-transactional-data?u=76281980&t=4)** We're in the same file, phone service customers and we've got our ID field.
>
> **[0:10](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/dealing-with-duplicate-ids-and-transactional-data?u=76281980&t=10)** What might we be merging this with?
>
> **[0:12](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/dealing-with-duplicate-ids-and-transactional-data?u=76281980&t=12)** Well, let's take a look.
>
> **[0:13](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/dealing-with-duplicate-ids-and-transactional-data?u=76281980&t=13)** I've got another file, Here It's called monthly statements.
>
> **[0:16](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/dealing-with-duplicate-ids-and-transactional-data?u=76281980&t=16)** It's also found in the originals folder and here we go.
>
> **[0:20](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/dealing-with-duplicate-ids-and-transactional-data?u=76281980&t=20)** We have several monthly statements.
>
> **[0:22](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/dealing-with-duplicate-ids-and-transactional-data?u=76281980&t=22)** It looks like six of them for customer one zero zero two, four zero.
>
> **[0:28](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/dealing-with-duplicate-ids-and-transactional-data?u=76281980&t=28)** So what kinds of variables can we generate with this?
>
> **[0:30](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/dealing-with-duplicate-ids-and-transactional-data?u=76281980&t=30)** Well, if we talk to our subject matter experts and we find out that the reason that they've gotten six monthly statements is because they've only been a customer for six months.
>
> **[0:40](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/dealing-with-duplicate-ids-and-transactional-data?u=76281980&t=40)** Then the number six becomes interesting.
>
> **[0:42](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/dealing-with-duplicate-ids-and-transactional-data?u=76281980&t=42)** That's their customer tenure.
>
> **[0:44](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/dealing-with-duplicate-ids-and-transactional-data?u=76281980&t=44)** We might want to calculate average drop calls.
>
> **[0:47](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/dealing-with-duplicate-ids-and-transactional-data?u=76281980&t=47)** We might want to calculate maximum drop calls.
>
> **[0:51](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/dealing-with-duplicate-ids-and-transactional-data?u=76281980&t=51)** Maybe what drives churn is that if they get a bunch of drop calls, just once they get upset and they want insurance.
>
> **[0:58](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/dealing-with-duplicate-ids-and-transactional-data?u=76281980&t=58)** So maybe it's max drop calls that we're interested in.
>
> **[1:01](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/dealing-with-duplicate-ids-and-transactional-data?u=76281980&t=61)** Same kinds of things for international calls and U S calls, averages, maximums, minimums, medians the whole nine yards.
>
> **[1:09](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/dealing-with-duplicate-ids-and-transactional-data?u=76281980&t=69)** We might generate hundreds, literally hundreds of variables from transactional data like this.
>
> **[1:14](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/dealing-with-duplicate-ids-and-transactional-data?u=76281980&t=74)** Now you're not going to get hundreds of variables from just five columns but if you had a real phone bill here you really could generate hundreds of variables.
>
> **[1:25](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/dealing-with-duplicate-ids-and-transactional-data?u=76281980&t=85)** So let's take a look at what else you would be doing.
>
> **[1:28](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/dealing-with-duplicate-ids-and-transactional-data?u=76281980&t=88)** So let's go back to the other file 'cause we're not done yet.
>
> **[1:32](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/dealing-with-duplicate-ids-and-transactional-data?u=76281980&t=92)** So you want to imagine now that you're going to have a whole bunch of new columns and heres your max drop variable, which obviously you would calculate with your software and populate all of that.
>
> **[1:46](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/dealing-with-duplicate-ids-and-transactional-data?u=76281980&t=106)** But there's other possibilities too.
>
> **[1:48](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/dealing-with-duplicate-ids-and-transactional-data?u=76281980&t=108)** Let's insert another column.
>
> **[1:50](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/dealing-with-duplicate-ids-and-transactional-data?u=76281980&t=110)** We might want to put number at household.
>
> **[1:54](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/dealing-with-duplicate-ids-and-transactional-data?u=76281980&t=114)** So if we find out that there's more than one customer hiding here somewhere that also resides at 34th 92 weekly street.
>
> **[2:03](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/dealing-with-duplicate-ids-and-transactional-data?u=76281980&t=123)** We'd want to ask our subject matter experts, if there's some way to confirm that, like if we have a household ID.
>
> **[2:10](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/dealing-with-duplicate-ids-and-transactional-data?u=76281980&t=130)** But possibly we don't, but we know that they go to the same address.
>
> **[2:13](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/dealing-with-duplicate-ids-and-transactional-data?u=76281980&t=133)** Now granted, we don't know if their husband and a wife.
>
> **[2:15](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/dealing-with-duplicate-ids-and-transactional-data?u=76281980&t=135)** If they're roommates but otherwise unrelated, we don't know.
>
> **[2:20](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/dealing-with-duplicate-ids-and-transactional-data?u=76281980&t=140)** But it might be very interesting to know if they live together in the household.
>
> **[2:24](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/dealing-with-duplicate-ids-and-transactional-data?u=76281980&t=144)** For instance, when I was on a churn project I discovered that when one household member churned, it was more likely that another household member would churn within the next few months after that.
>
> **[2:36](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/dealing-with-duplicate-ids-and-transactional-data?u=76281980&t=156)** Also we might go with the phone number and we might simply do, number of phone numbers with this account.
>
> **[2:49](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/dealing-with-duplicate-ids-and-transactional-data?u=76281980&t=169)** Number of numbers seems like a strange way to do it but I'm just going to say number of phones, let's say, right.
>
> **[2:57](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/dealing-with-duplicate-ids-and-transactional-data?u=76281980&t=177)** And again, there would be dozens of these.
>
> **[2:59](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/dealing-with-duplicate-ids-and-transactional-data?u=76281980&t=179)** So what you're basically doing at this point is you're working at two different levels.
>
> **[3:04](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/dealing-with-duplicate-ids-and-transactional-data?u=76281980&t=184)** You're merging data in that's transactional in nature.
>
> **[3:08](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/dealing-with-duplicate-ids-and-transactional-data?u=76281980&t=188)** That's one example of a one to many relationship that you're getting down to a single row.
>
> **[3:13](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/dealing-with-duplicate-ids-and-transactional-data?u=76281980&t=193)** But the other kind of one to many relationship that you're bringing on to the single row could be one ID to more than one address or one ID to more than one phone number.
>
> **[3:26](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/dealing-with-duplicate-ids-and-transactional-data?u=76281980&t=206)** And again, numerous examples of this.
>
> **[3:28](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/dealing-with-duplicate-ids-and-transactional-data?u=76281980&t=208)** So look at all of your ID fields and find out where you have one to one relationships.
>
> **[3:34](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/dealing-with-duplicate-ids-and-transactional-data?u=76281980&t=214)** Like you would expect one unique name for each ID but where you have those one to many relationships, there are potential new variables hiding in those one to many relationships.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), this. (2)
> **CLI Commands:** find (3)
> **Analogies:** imagine (1), for instance (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** go to (1)
> **Speakers:** - okay (1)

#### How many potential variables (columns) will I have?
> [LinkedIn Learning](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-many-potential-variables-columns-will-i-have?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-many-potential-variables-columns-will-i-have?u=76281980&t=0)** - [Instructor] Okay, we're going to continue in the same dataset.
>
> **[0:04](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-many-potential-variables-columns-will-i-have?u=76281980&t=4)** Let's talk about a slightly different but related issue now, which is trying to get a sense of how many of these variables in this customer file will be potentially good input variables in a predictive model, down the line.
>
> **[0:20](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-many-potential-variables-columns-will-i-have?u=76281980&t=20)** Well, our ID field isn't going to help us at all in the modeling phase, even though it's critical now.
>
> **[0:26](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-many-potential-variables-columns-will-i-have?u=76281980&t=26)** These new variables, these features, we usually call them feature engineering, is the phrase of generating this new information from the original information, those are probably going to be terribly helpful.
>
> **[0:38](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-many-potential-variables-columns-will-i-have?u=76281980&t=38)** Gender, possibly, but look, all of this stuff really can't help us at all.
>
> **[0:45](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-many-potential-variables-columns-will-i-have?u=76281980&t=45)** The only thing we could hope to do with City is that maybe we have certain promotions going on in some cities and not others.
>
> **[0:53](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-many-potential-variables-columns-will-i-have?u=76281980&t=53)** Same kind of thing maybe with State, but look at this, people tend to to think, "Wow, I have dozens of variables.
>
> **[0:59](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-many-potential-variables-columns-will-i-have?u=76281980&t=59)** My model is going to succeed.
>
> **[1:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-many-potential-variables-columns-will-i-have?u=76281980&t=60)** I have so many variables. How can I fail?"
>
> **[1:03](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-many-potential-variables-columns-will-i-have?u=76281980&t=63)** Well, these two columns are the same thing.
>
> **[1:05](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-many-potential-variables-columns-will-i-have?u=76281980&t=65)** You'd be surprised at how many people don't make note of that when they first pass through.
>
> **[1:09](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-many-potential-variables-columns-will-i-have?u=76281980&t=69)** These two variables are the same thing, and really, all four of these variables aren't really variables at all.
>
> **[1:15](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-many-potential-variables-columns-will-i-have?u=76281980&t=75)** They're really just identifying information again.
>
> **[1:17](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-many-potential-variables-columns-will-i-have?u=76281980&t=77)** Unless you're going to merge it with something, there's not much you can do.
>
> **[1:21](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-many-potential-variables-columns-will-i-have?u=76281980&t=81)** EmailAddress isn't going to help us.
>
> **[1:23](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-many-potential-variables-columns-will-i-have?u=76281980&t=83)** We've already seen the kinds of things you can do with these variables, but you can't use them directly.
>
> **[1:29](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-many-potential-variables-columns-will-i-have?u=76281980&t=89)** You could extract area code from TelephoneNumber.
>
> **[1:32](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-many-potential-variables-columns-will-i-have?u=76281980&t=92)** Maybe that tells you something.
>
> **[1:35](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-many-potential-variables-columns-will-i-have?u=76281980&t=95)** This column, completely useless, right?
>
> **[1:37](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-many-potential-variables-columns-will-i-have?u=76281980&t=97)** We know that for a fact, because it's always the same.
>
> **[1:40](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-many-potential-variables-columns-will-i-have?u=76281980&t=100)** All of these customers are US customers.
>
> **[1:43](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-many-potential-variables-columns-will-i-have?u=76281980&t=103)** All US customers have one as the prefix in the phone number.
>
> **[1:48](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-many-potential-variables-columns-will-i-have?u=76281980&t=108)** Credit Card Type isn't going to help us.
>
> **[1:50](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-many-potential-variables-columns-will-i-have?u=76281980&t=110)** The Credit Card Number, again, might allow us to merge things, but can't be used directly in the model.
>
> **[1:55](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-many-potential-variables-columns-will-i-have?u=76281980&t=115)** We've gone through dozens of columns now.
>
> **[1:57](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-many-potential-variables-columns-will-i-have?u=76281980&t=117)** None of them are helpful.
>
> **[1:59](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-many-potential-variables-columns-will-i-have?u=76281980&t=119)** Occupation has numerous, numerous categories here.
>
> **[2:03](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-many-potential-variables-columns-will-i-have?u=76281980&t=123)** By the way, these are somewhat silly occupations because they come from [fakedata.com](https://fakedata.com), but you can see that there's far too many.
>
> **[2:09](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-many-potential-variables-columns-will-i-have?u=76281980&t=129)** It's much too granular to be useful. Same for Company.
>
> **[2:14](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-many-potential-variables-columns-will-i-have?u=76281980&t=134)** Latitude and Longitude could be very interesting, but it could be interesting as distance to the store, distance to a shipping location to address cost.
>
> **[2:28](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-many-potential-variables-columns-will-i-have?u=76281980&t=148)** Those are interesting questions, but these variables cannot be used directly.
>
> **[2:32](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-many-potential-variables-columns-will-i-have?u=76281980&t=152)** Same with ZIP code.
>
> **[2:33](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-many-potential-variables-columns-will-i-have?u=76281980&t=153)** ZIP code isn't useful at all directly, but it might be useful to bring in some neighborhood-level data.
>
> **[2:39](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-many-potential-variables-columns-will-i-have?u=76281980&t=159)** So, now we get to the variables that probably got pulled from other places, PhoneModel, Date Of Birth, and so on, but most of these are not useful right now as well.
>
> **[2:50](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-many-potential-variables-columns-will-i-have?u=76281980&t=170)** PhoneModel, also too granular.
>
> **[2:53](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-many-potential-variables-columns-will-i-have?u=76281980&t=173)** It's only on occasion that I see the same one repeating.
>
> **[2:56](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-many-potential-variables-columns-will-i-have?u=76281980&t=176)** I see 105D, 105D, 105D, 105D.
>
> **[3:01](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-many-potential-variables-columns-will-i-have?u=76281980&t=181)** This is too granular to be used as a nominal variable.
>
> **[3:04](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-many-potential-variables-columns-will-i-have?u=76281980&t=184)** Now, I haven't counted the number of PhoneModels.
>
> **[3:06](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-many-potential-variables-columns-will-i-have?u=76281980&t=186)** Maybe there's only six, but it looks like there's more like dozens of them.
>
> **[3:11](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-many-potential-variables-columns-will-i-have?u=76281980&t=191)** Date Of Birth, date is not useful directly.
>
> **[3:14](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-many-potential-variables-columns-will-i-have?u=76281980&t=194)** Now, I can calculate their age. That might be useful.
>
> **[3:16](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-many-potential-variables-columns-will-i-have?u=76281980&t=196)** I can calculate the distance and time between when they became a customer and their last transaction, or when they became a customer and their first transaction, or how old they were when they made their first transaction.
>
> **[3:28](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-many-potential-variables-columns-will-i-have?u=76281980&t=208)** Those are all interesting, but Date Of Birth itself I can't put in.
>
> **[3:31](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-many-potential-variables-columns-will-i-have?u=76281980&t=211)** All of these got pulled from something else, it looks like, because they're different in character, they're different in kind.
>
> **[3:38](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-many-potential-variables-columns-will-i-have?u=76281980&t=218)** Whether or not they belong to our Phone Customer database, as opposed to cable, or TV, or whatever other services we have, but everybody's true, because we're only looking at phone customers, so this variable is not useful.
>
> **[3:52](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-many-potential-variables-columns-will-i-have?u=76281980&t=232)** Whether or not they have our proprietary phone app.
>
> **[3:55](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-many-potential-variables-columns-will-i-have?u=76281980&t=235)** Some do, some don't. That might be useful.
>
> **[3:58](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-many-potential-variables-columns-will-i-have?u=76281980&t=238)** Whether or not in addition to being a phone customer, they also belong to our TV service.
>
> **[4:04](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-many-potential-variables-columns-will-i-have?u=76281980&t=244)** Sometimes true, sometimes false. That might be useful.
>
> **[4:08](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-many-potential-variables-columns-will-i-have?u=76281980&t=248)** We'd have to get clarification on what this Spend is referring to, potentially useful.
>
> **[4:13](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-many-potential-variables-columns-will-i-have?u=76281980&t=253)** Number of Features, it's probably a la carte things they've added, like are they on our international plan, or something like that?
>
> **[4:20](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-many-potential-variables-columns-will-i-have?u=76281980&t=260)** That's probably useful, and we have our target variable.
>
> **[4:23](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-many-potential-variables-columns-will-i-have?u=76281980&t=263)** Thank goodness for that. We always need that.
>
> **[4:26](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-many-potential-variables-columns-will-i-have?u=76281980&t=266)** So, reflect on this for a moment.
>
> **[4:28](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-many-potential-variables-columns-will-i-have?u=76281980&t=268)** Dozens of columns, almost three dozen.
>
> **[4:32](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-many-potential-variables-columns-will-i-have?u=76281980&t=272)** We have about three dozen columns here.
>
> **[4:34](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-many-potential-variables-columns-will-i-have?u=76281980&t=274)** Only a handful are useful right now, and the most promising ones are probably all these new ones that were added, as well as a couple of them on the far right-hand side.
>
> **[4:46](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-many-potential-variables-columns-will-i-have?u=76281980&t=286)** So, many fewer than you might have thought you had when you first opened this table.

> [!info]- Semantic Content
>
> **Code Keywords:** continue (1), let (1), this, (1), pass (1), else, (1)
> **Env Vars:** zip (2)
> **CLI Commands:** make (1)
> **URLs:** [fakedata.com](https://fakedata.com) (1)
> **Speakers:** - [instructor] (1)

#### How to deal with high-order multiple nominals
> [LinkedIn Learning](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-deal-with-high-order-multiple-nominals?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-deal-with-high-order-multiple-nominals?u=76281980&t=0)** - [Instructor] Now let's talk about an issue that I think very few modelers handle in an optimal way.
>
> **[0:07](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-deal-with-high-order-multiple-nominals?u=76281980&t=7)** Let's take a look at the far right-hand side of the phone service customers data set, specifically the phone model variable, and I've turned the filter on so that we can quickly take a look at how many models we have.
>
> **[0:23](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-deal-with-high-order-multiple-nominals?u=76281980&t=23)** What most analysts would do at this point is just treat this as a nominal variable, but it simply is not the best way to go.
>
> **[0:34](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-deal-with-high-order-multiple-nominals?u=76281980&t=34)** For one, there's quite a few categories here.
>
> **[0:37](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-deal-with-high-order-multiple-nominals?u=76281980&t=37)** It's not at the breaking point, but there's quite a few.
>
> **[0:41](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-deal-with-high-order-multiple-nominals?u=76281980&t=41)** So you could debate whether or not to call this a high order nominal or a very high order nominal, but what are we going to accomplish if we put this directly into the model?
>
> **[0:51](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-deal-with-high-order-multiple-nominals?u=76281980&t=51)** What's going to happen when these model numbers change?
>
> **[0:55](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-deal-with-high-order-multiple-nominals?u=76281980&t=55)** There's a much better way, and let's take a look at what it is.
>
> **[1:01](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-deal-with-high-order-multiple-nominals?u=76281980&t=61)** Now I have a new data set, the phone model spreadsheet, and this is found in the originals folder, and what we have is those same phone models over here.
>
> **[1:11](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-deal-with-high-order-multiple-nominals?u=76281980&t=71)** And we've taken the characteristics of the phone, information about their screen size, and so on.
>
> **[1:19](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-deal-with-high-order-multiple-nominals?u=76281980&t=79)** If we use phone model as an ID and merge in this information, then the presence of 4K video, how the security is handled, whether it's facial recognition or fingerprint, and other information about the phone gets pulled into the model.
>
> **[1:37](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-deal-with-high-order-multiple-nominals?u=76281980&t=97)** And as new models come online, this information can still be used in the ultimate model.
>
> **[1:45](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-deal-with-high-order-multiple-nominals?u=76281980&t=105)** So please resist the temptation to take the easy way out, which is to treat phone model as a nominal variable.
>
> **[1:53](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-deal-with-high-order-multiple-nominals?u=76281980&t=113)** Much better, use it in a lookup table to pull in information about the phones.
>
> **[2:01](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-deal-with-high-order-multiple-nominals?u=76281980&t=121)** The model will be better, it will be more accurate, and it will be more resilient to change.
>
> **[2:09](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-deal-with-high-order-multiple-nominals?u=76281980&t=129)** So since we're in the data understanding phase, be looking for opportunities to use exactly the same approach.
>
> **[2:17](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-deal-with-high-order-multiple-nominals?u=76281980&t=137)** Zip code and neighborhood information is another possibility.
>
> **[2:22](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-deal-with-high-order-multiple-nominals?u=76281980&t=142)** Look for those variables that you can use as a lookup table, and not simply as a nominal variable in the model.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3)
> **Speakers:** - [instructor] (1)

#### Challenge: Identifying the level of measurement
> [LinkedIn Learning](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-identifying-the-level-of-measurement?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-identifying-the-level-of-measurement?u=76281980&t=0)** (upbeat electronic music)
>
> **[0:05](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-identifying-the-level-of-measurement?u=76281980&t=5)** - [Instructor] Welcome to your first challenge.
>
> **[0:08](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-identifying-the-level-of-measurement?u=76281980&t=8)** This challenge is going to be very straightforward.
>
> **[0:10](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-identifying-the-level-of-measurement?u=76281980&t=10)** You simply have to make note of the level of measurement of each of these columns.
>
> **[0:17](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-identifying-the-level-of-measurement?u=76281980&t=17)** First, a little bit about the data set.
>
> **[0:19](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-identifying-the-level-of-measurement?u=76281980&t=19)** This is the famous Titanic data set.
>
> **[0:21](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-identifying-the-level-of-measurement?u=76281980&t=21)** You can find this version of it in the originals folder.
>
> **[0:24](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-identifying-the-level-of-measurement?u=76281980&t=24)** So something to make note of, if you've encountered the Titanic data set before, this might be a little bit different than what you're familiar with, because it's both the train and test partitions.
>
> **[0:36](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-identifying-the-level-of-measurement?u=76281980&t=36)** Normally during data understanding, we're looking at all the data, not only the train partition.
>
> **[0:42](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-identifying-the-level-of-measurement?u=76281980&t=42)** So there's a new column, column M here, that designates whether it's train or test.
>
> **[0:49](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-identifying-the-level-of-measurement?u=76281980&t=49)** That's obviously a binary variable, so don't really worry about that for the purpose of the challenge.
>
> **[0:55](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-identifying-the-level-of-measurement?u=76281980&t=55)** And then your target variable here is complete only for the train data and not for the test data, which is much further down.
>
> **[1:05](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-identifying-the-level-of-measurement?u=76281980&t=65)** There you have it.
>
> **[1:06](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-identifying-the-level-of-measurement?u=76281980&t=66)** That's all you have to know about the data set.
>
> **[1:08](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-identifying-the-level-of-measurement?u=76281980&t=68)** So simply make note of the level of measurement, and in the solutions video, I'll give you what I consider to be the answers.
>
> **[1:17](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-identifying-the-level-of-measurement?u=76281980&t=77)** One final thought, remember that we're using an expanded notion of level of measurement here, not only nominal, ordinal, and scale, but the other categories we've been talking about.
>
> **[1:30](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-identifying-the-level-of-measurement?u=76281980&t=90)** And if you work efficiently, you should be able to do this in about 10 minutes, but take some time to look over the variables as you work.
>
> **[1:37](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-identifying-the-level-of-measurement?u=76281980&t=97)** Hope you enjoy the challenge.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3), find (1)
> **Tools:** notion (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat electronic music) (1)

#### Solution: Identifying the level of measurement
> [LinkedIn Learning](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-identifying-the-level-of-measurement?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-identifying-the-level-of-measurement?u=76281980&t=0)** - [Instructor] Okay, let's talk about the level of measurement of each of these columns.
>
> **[0:09](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-identifying-the-level-of-measurement?u=76281980&t=9)** Obviously Passenger ID is going to be an ID field.
>
> **[0:14](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-identifying-the-level-of-measurement?u=76281980&t=14)** Survived is clearly a binary.
>
> **[0:16](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-identifying-the-level-of-measurement?u=76281980&t=16)** Now granted, it's missing for the test data, but for all intents and purposes, it's a binary so that special kind of nominal that we talked about.
>
> **[0:29](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-identifying-the-level-of-measurement?u=76281980&t=29)** Passenger Class.
>
> **[0:30](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-identifying-the-level-of-measurement?u=76281980&t=30)** It's got three categories, first, second, third.
>
> **[0:33](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-identifying-the-level-of-measurement?u=76281980&t=33)** Order is important here.
>
> **[0:35](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-identifying-the-level-of-measurement?u=76281980&t=35)** It is true to say that second is in between first and third, so definitely ordinal.
>
> **[0:42](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-identifying-the-level-of-measurement?u=76281980&t=42)** Name field.
>
> **[0:44](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-identifying-the-level-of-measurement?u=76281980&t=44)** Definitely not nominal.
>
> **[0:47](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-identifying-the-level-of-measurement?u=76281980&t=47)** Can't possibly be nominal.
>
> **[0:48](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-identifying-the-level-of-measurement?u=76281980&t=48)** The reason is is that there's as many names as there are IDs, so logically we really have to think of this as an ID field.
>
> **[0:58](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-identifying-the-level-of-measurement?u=76281980&t=58)** Now granted, if you stripped away just the last name, you could make some kind of variable that you would consider a high order nominal that was family unit or something, but really this is just as much an ID field as ID is because there's a different one for each row.
>
> **[1:18](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-identifying-the-level-of-measurement?u=76281980&t=78)** Gender in this data set has just two categories.
>
> **[1:22](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-identifying-the-level-of-measurement?u=76281980&t=82)** This can be certainly thought of as a binary.
>
> **[1:25](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-identifying-the-level-of-measurement?u=76281980&t=85)** It's not a zero, one variable like Survived is, but if could be dummy coded, and after doing so, it would be zero and one.
>
> **[1:33](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-identifying-the-level-of-measurement?u=76281980&t=93)** Bottom line is it has only two categories in this data set.
>
> **[1:36](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-identifying-the-level-of-measurement?u=76281980&t=96)** We can think of it as a binary.
>
> **[1:39](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-identifying-the-level-of-measurement?u=76281980&t=99)** Age is definitely a scale variable.
>
> **[1:41](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-identifying-the-level-of-measurement?u=76281980&t=101)** No debate there.
>
> **[1:43](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-identifying-the-level-of-measurement?u=76281980&t=103)** Sibling, Spouse, that's what this variable stands for.
>
> **[1:47](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-identifying-the-level-of-measurement?u=76281980&t=107)** This is a scale variable as well.
>
> **[1:50](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-identifying-the-level-of-measurement?u=76281980&t=110)** However, it is not unreasonable at all to treat this in an algorithm as an ordinal.
>
> **[1:58](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-identifying-the-level-of-measurement?u=76281980&t=118)** The reason is that we've got only whole numbers and we don't have that many of them, so you could absolutely declare this as an ordinal, depending on what algorithm you were going to use down the line in the modeling phase.
>
> **[2:13](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-identifying-the-level-of-measurement?u=76281980&t=133)** Same for Parent, Child.
>
> **[2:15](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-identifying-the-level-of-measurement?u=76281980&t=135)** Ticket.
>
> **[2:17](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-identifying-the-level-of-measurement?u=76281980&t=137)** Sometimes people get a little turned around on this one, and you think well, maybe it's a nominal variable.
>
> **[2:22](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-identifying-the-level-of-measurement?u=76281980&t=142)** If it's a nominal variable, it certainly a high order nominal variable, and we can't use it as a nominal variable in a model.
>
> **[2:31](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-identifying-the-level-of-measurement?u=76281980&t=151)** It's basically an ID field.
>
> **[2:33](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-identifying-the-level-of-measurement?u=76281980&t=153)** What makes this tricky is there isn't quite as many different tickets as there are IDs, but you absolutely cannot use this as a nominal, so you want to think of it more like phone number or address.
>
> **[2:47](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-identifying-the-level-of-measurement?u=76281980&t=167)** There may be some duplicates in here, but there's just too many categories to think of this as a nominal.
>
> **[2:54](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-identifying-the-level-of-measurement?u=76281980&t=174)** Best answer, ID field.
>
> **[2:57](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-identifying-the-level-of-measurement?u=76281980&t=177)** Fare is definitely a scale variable.
>
> **[3:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-identifying-the-level-of-measurement?u=76281980&t=180)** Cabin, another tricky one perhaps.
>
> **[3:03](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-identifying-the-level-of-measurement?u=76281980&t=183)** You really can't think of this as a nominal variable.
>
> **[3:06](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-identifying-the-level-of-measurement?u=76281980&t=186)** There's just too many categories, but you might think it's a terrible ID field because there's a lot of missing data.
>
> **[3:14](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-identifying-the-level-of-measurement?u=76281980&t=194)** What are we supposed to do?
>
> **[3:15](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-identifying-the-level-of-measurement?u=76281980&t=195)** It's more like an ID field than anything else.
>
> **[3:19](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-identifying-the-level-of-measurement?u=76281980&t=199)** If you stripped away the letter, which appears to be what level of the ship they're on, level C, level G, so on, then that letter could be a nominal variable, but this cabin ID is really more like an ID field.
>
> **[3:37](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-identifying-the-level-of-measurement?u=76281980&t=217)** Embarked, definitely a nominal variable.
>
> **[3:40](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-identifying-the-level-of-measurement?u=76281980&t=220)** Looks like we have three categories, and Train Test.
>
> **[3:44](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-identifying-the-level-of-measurement?u=76281980&t=224)** We can ignore that for this purpose.
>
> **[3:46](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-identifying-the-level-of-measurement?u=76281980&t=226)** It's only got two categories, but again, we're never going to use this in a model.
>
> **[3:49](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-identifying-the-level-of-measurement?u=76281980&t=229)** It's just our train, test partition.
>
> **[3:53](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-identifying-the-level-of-measurement?u=76281980&t=233)** So, there you have it.
>
> **[3:55](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-identifying-the-level-of-measurement?u=76281980&t=235)** This simple task is sometimes a little bit trickier than it looks at first.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), class. (1), for. (1), else. (1)
> **Definitions:** stands for (1), is a  (1)
> **CLI Commands:** make (1)
> **Cross-References:** we talked about (1)
> **Analogies:** think of it as (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 4. Data Loading and Unit of Analysis

#### Introducing the KNIME Analytics Platform
> [LinkedIn Learning](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-knime-analytics-platform?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-knime-analytics-platform?u=76281980&t=0)** Welcome to the KNIME Analytics Platform.
>
> **[0:04](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-knime-analytics-platform?u=76281980&t=4)** We're going to be using KNIME, for some of the demonstrations in this course, really for three reasons.
>
> **[0:11](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-knime-analytics-platform?u=76281980&t=11)** It's free, it's easy to learn.
>
> **[0:14](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-knime-analytics-platform?u=76281980&t=14)** And it's really been specifically designed, to support Predictive Analytics Modeling.
>
> **[0:19](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-knime-analytics-platform?u=76281980&t=19)** So it gives us all the features that we would need for the demonstrations.
>
> **[0:26](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-knime-analytics-platform?u=76281980&t=26)** Also, the KNIME folks have made it very easy to download and set up right here on their website.
>
> **[0:35](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-knime-analytics-platform?u=76281980&t=35)** So, let me just orient you to KNIME a little bit.
>
> **[0:39](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-knime-analytics-platform?u=76281980&t=39)** I want to start in the middle, where it says Welcome to the KNIME Analytics Platform!
>
> **[0:44](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-knime-analytics-platform?u=76281980&t=44)** Most of these are links that will take you to the internet, although I don't want you to feel the pressure to do an extensive orientation.
>
> **[0:51](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-knime-analytics-platform?u=76281980&t=51)** Our time and KNIME will be relatively brief, and I'm going to tell you everything, that you need to know, right within the course.
>
> **[0:58](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-knime-analytics-platform?u=76281980&t=58)** If you want to go a little bit deeper, the Learning Hub and KNIME TV are indeed very helpful.
>
> **[1:06](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-knime-analytics-platform?u=76281980&t=66)** And I even have a course dedicated to KNIME, right here in the library.
>
> **[1:09](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-knime-analytics-platform?u=76281980&t=69)** Okay so, let's go to the upper left hand corner.
>
> **[1:14](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-knime-analytics-platform?u=76281980&t=74)** And there's one thing that is going to be a little bit different on your copy, more than likely, if you're installing this from scratch and that you just see the reference to NodePit.
>
> **[1:23](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-knime-analytics-platform?u=76281980&t=83)** It's worth mentioning what that is.
>
> **[1:25](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-knime-analytics-platform?u=76281980&t=85)** NodePit is just a place where you can go, on the internet to download community based contributions to the KNIME Platform.
>
> **[1:35](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-knime-analytics-platform?u=76281980&t=95)** Since it's Open-source, people develop new Nodes for KNIME, Nodes are the little symbols we're going to see in a moment, that have the various functionality within KNIME.
>
> **[1:45](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-knime-analytics-platform?u=76281980&t=105)** In NodePit is just a great place to go to get some community based ones, that come from the KNIME user community and not from the KNIME company itself.
>
> **[1:55](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-knime-analytics-platform?u=76281980&t=115)** So you won't have that, but you don't have to worry about it, if you did want to install it.
>
> **[1:59](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-knime-analytics-platform?u=76281980&t=119)** You certainly could, you could just go up to File, and you'll see a bunch of different choices, including KNIME Extensions.
>
> **[2:06](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-knime-analytics-platform?u=76281980&t=126)** But we won't worry about that now.
>
> **[2:08](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-knime-analytics-platform?u=76281980&t=128)** So let's go to the EXAMPLES.
>
> **[2:11](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-knime-analytics-platform?u=76281980&t=131)** I love these EXAMPLES. If you just Double-click, it will load them up here, you have to be connected to the internet.
>
> **[2:19](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-knime-analytics-platform?u=76281980&t=139)** And you can see countless extensive EXAMPLES.
>
> **[2:23](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-knime-analytics-platform?u=76281980&t=143)** I'll let you peruse those on your own.
>
> **[2:26](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-knime-analytics-platform?u=76281980&t=146)** And we can just go to the local Examples, and specifically to Basic Examples.
>
> **[2:31](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-knime-analytics-platform?u=76281980&t=151)** I'm just going to Double-click on Building a Simple Classifier.
>
> **[2:35](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-knime-analytics-platform?u=76281980&t=155)** Then I'm going to go to the middle where the Example has showed up.
>
> **[2:39](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-knime-analytics-platform?u=76281980&t=159)** And I can start to manipulate it here, note that if I click on the File Reader, on the right hand side, the help for File Reader will show up and then look at this the Color Manager, we get help on the Color Manager and so on.
>
> **[2:53](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-knime-analytics-platform?u=76281980&t=173)** If you want it to find Nodes, that you needed to build your own Workflow.
>
> **[2:58](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-knime-analytics-platform?u=76281980&t=178)** You could go over here to the left.
>
> **[3:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-knime-analytics-platform?u=76281980&t=180)** And you can see countless Examples there.
>
> **[3:03](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-knime-analytics-platform?u=76281980&t=183)** And there's even a search bar, where you could try to find the Node that you need.
>
> **[3:07](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-knime-analytics-platform?u=76281980&t=187)** But for now, we're just going to expand this middle window.
>
> **[3:12](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-knime-analytics-platform?u=76281980&t=192)** And you can see that these Examples are not just pretty thorough, they're well documented.
>
> **[3:16](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-knime-analytics-platform?u=76281980&t=196)** So they're really fantastic.
>
> **[3:18](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-knime-analytics-platform?u=76281980&t=198)** I can go over to the File Reader here, since this Example is already to go.
>
> **[3:23](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-knime-analytics-platform?u=76281980&t=203)** And I can click on Execute, takes a moment, then you see that Node has a green dot appearing now, meaning that has been Run.
>
> **[3:31](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-knime-analytics-platform?u=76281980&t=211)** And we could do that with the Whole Example.
>
> **[3:34](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-knime-analytics-platform?u=76281980&t=214)** That really is enough for now.
>
> **[3:37](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-knime-analytics-platform?u=76281980&t=217)** Because each time we use KNIME, we're going to do Simple Examples.
>
> **[3:42](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-knime-analytics-platform?u=76281980&t=222)** And I will walk them through, I'll make one final comment.
>
> **[3:46](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-knime-analytics-platform?u=76281980&t=226)** So when you want to go back, you certainly can, just go to View, Reset Perspective.
>
> **[3:54](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-knime-analytics-platform?u=76281980&t=234)** And say Yes.
>
> **[3:56](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-knime-analytics-platform?u=76281980&t=236)** And the reason that I love that trick is that, that gives you license.
>
> **[4:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-knime-analytics-platform?u=76281980&t=240)** to manipulate the windows and completely closed things or expand things and not feel as though, it's going to be a lot of work to go back to where you started, that is more than enough for now.
>
> **[4:11](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-knime-analytics-platform?u=76281980&t=251)** So welcome to KNIME.

> [!info]- Semantic Content
>
> **Env Vars:** knime (16), examples (3)
> **UI Navigation:** go to (6), double-click (2), click on (2)
> **CLI Commands:** find (2), node (2), make (1)
> **Code Keywords:** let (4)
> **Prerequisites:** set up (1), install (1)

#### Tips and tricks to consider during data loading
> [LinkedIn Learning](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-to-consider-during-data-loading?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-to-consider-during-data-loading?u=76281980&t=0)** - [Instructor] Okay, I want to talk a little bit about data loading.
>
> **[0:03](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-to-consider-during-data-loading?u=76281980&t=3)** We're going to be working a lot with the Census Income Data Set from the UCI Machine Learning Repository.
>
> **[0:10](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-to-consider-during-data-loading?u=76281980&t=10)** This is a comma-separated file.
>
> **[0:13](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-to-consider-during-data-loading?u=76281980&t=13)** Now, let's face it, a lot of the information you're going to be pulling in is going to be from a data table, from a data warehouse or something like that but there's still a lot of information that you're going to get from scraping or pulling down from websites and comma-separated files are still around.
>
> **[0:29](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-to-consider-during-data-loading?u=76281980&t=29)** So we want to talk a little bit about the challenges of using them.
>
> **[0:33](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-to-consider-during-data-loading?u=76281980&t=33)** Tab-delimited, of course, would be similar but we'll talk just about this one and it's a comma-separated file.
>
> **[0:41](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-to-consider-during-data-loading?u=76281980&t=41)** So here's the top line and we see that there's no header.
>
> **[0:45](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-to-consider-during-data-loading?u=76281980&t=45)** That unfortunately is commonplace for this kind of file.
>
> **[0:49](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-to-consider-during-data-loading?u=76281980&t=49)** Everything is separated by commas.
>
> **[0:51](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-to-consider-during-data-loading?u=76281980&t=51)** So a couple of things that I always keep my eye out for.
>
> **[0:55](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-to-consider-during-data-loading?u=76281980&t=55)** Strange characters, like we have a question mark here and it's actually embedded in the data.
>
> **[1:01](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-to-consider-during-data-loading?u=76281980&t=61)** That's fine.
>
> **[1:02](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-to-consider-during-data-loading?u=76281980&t=62)** You know what would be worse, I'm going to briefly make a change to this.
>
> **[1:06](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-to-consider-during-data-loading?u=76281980&t=66)** I'm not going to save it this way, of course but I am going to get rid of that question mark.
>
> **[1:11](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-to-consider-during-data-loading?u=76281980&t=71)** You really want to look out for a couple of commas with nothing in between or worse yet, three commas with nothing in between.
>
> **[1:19](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-to-consider-during-data-loading?u=76281980&t=79)** That can make a real mess.
>
> **[1:21](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-to-consider-during-data-loading?u=76281980&t=81)** We don't have that problem here but some files, every once in a while, don't put a placeholder in between the commas.
>
> **[1:31](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-to-consider-during-data-loading?u=76281980&t=91)** So when there's missing data, it can cause challenges.
>
> **[1:35](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-to-consider-during-data-loading?u=76281980&t=95)** So at the moment, we notice the question mark and the fact that there's no headers but this doesn't seem to be really bad.
>
> **[1:41](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-to-consider-during-data-loading?u=76281980&t=101)** One more thing about those commas that if the number of variables on two lines is different, that can cause all kinds of problems.
>
> **[1:50](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-to-consider-during-data-loading?u=76281980&t=110)** Since the comma placement seems to be uniform, we don't seem to have any big challenges like that.
>
> **[1:57](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-to-consider-during-data-loading?u=76281980&t=117)** Let's take a look at what this might look like if we brought it into Excel.
>
> **[2:01](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-to-consider-during-data-loading?u=76281980&t=121)** Okay, now what I've done is without importing it into Excel, I've simply right clicked on it and forced it in and Excel didn't know what to make of it.
>
> **[2:14](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-to-consider-during-data-loading?u=76281980&t=134)** It didn't recognize the fact that this was comma-separated and this is one big string.
>
> **[2:21](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-to-consider-during-data-loading?u=76281980&t=141)** Don't be terribly surprised if this happens.
>
> **[2:23](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-to-consider-during-data-loading?u=76281980&t=143)** So the solution really is twofold.
>
> **[2:25](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-to-consider-during-data-loading?u=76281980&t=145)** At the moment, this file is called adult.data.
>
> **[2:30](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-to-consider-during-data-loading?u=76281980&t=150)** That's exactly how it was pulled down from UCI.
>
> **[2:33](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-to-consider-during-data-loading?u=76281980&t=153)** You could add .csv to it and then Excel would recognize it as comma-separated or you could use the import feature in Excel and bring it in.
>
> **[2:44](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-to-consider-during-data-loading?u=76281980&t=164)** In this course, we don't have to worry about any of this because I've created an Excel file with the same information.
>
> **[2:50](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-to-consider-during-data-loading?u=76281980&t=170)** So you won't be using the CSV file but these are the challenges that you might encounter on our real-world project.
>
> **[2:57](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-to-consider-during-data-loading?u=76281980&t=177)** Let's take a look at it in KNIME.
>
> **[3:01](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-to-consider-during-data-loading?u=76281980&t=181)** Here we are in KNIME.
>
> **[3:02](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-to-consider-during-data-loading?u=76281980&t=182)** And all I've done is dragged a File Reader over and an Excel Reader over.
>
> **[3:08](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-to-consider-during-data-loading?u=76281980&t=188)** These aren't your only choices.
>
> **[3:10](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-to-consider-during-data-loading?u=76281980&t=190)** If I go to the left-hand side and click on IO and click on Read, we've got Excel file, CSV and so on, okay?
>
> **[3:18](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-to-consider-during-data-loading?u=76281980&t=198)** The File Reader is your Swiss Army Knife in KNIME.
>
> **[3:22](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-to-consider-during-data-loading?u=76281980&t=202)** It can read a whole bunch of different things whereas the CSV Reader can only read CSV and the Table Reader is rather unique to KNIME.
>
> **[3:32](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-to-consider-during-data-loading?u=76281980&t=212)** That's really kind of KNIME's proprietary format.
>
> **[3:35](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-to-consider-during-data-loading?u=76281980&t=215)** So File Reader and Excel Reader would be the way to go.
>
> **[3:38](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-to-consider-during-data-loading?u=76281980&t=218)** Let's start with File Reader.
>
> **[3:42](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-to-consider-during-data-loading?u=76281980&t=222)** I've directed it to the Originals folder.
>
> **[3:44](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-to-consider-during-data-loading?u=76281980&t=224)** That's the only step that I took on my own.
>
> **[3:49](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-to-consider-during-data-loading?u=76281980&t=229)** And note that we have I and S, they're in the header, indicating that it recognizes it as an integer or a string.
>
> **[3:58](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-to-consider-during-data-loading?u=76281980&t=238)** And this is good.
>
> **[3:59](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-to-consider-during-data-loading?u=76281980&t=239)** What's not good, of course, is that we don't have a header row.
>
> **[4:04](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-to-consider-during-data-loading?u=76281980&t=244)** We can tell what to read a header row but we don't want to do it in this instance because there is no header row.
>
> **[4:09](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-to-consider-during-data-loading?u=76281980&t=249)** We're going to have to type in these variable names on our own, and that's a bit of a pain.
>
> **[4:14](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-to-consider-during-data-loading?u=76281980&t=254)** So for our purposes in the course, I've provided you with an Excel version of this file but remember that integer string business.
>
> **[4:22](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-to-consider-during-data-loading?u=76281980&t=262)** It's very important.
>
> **[4:23](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-to-consider-during-data-loading?u=76281980&t=263)** In the File Reader, we can override what it says and tell it that it thinks it's an integer but we want to call it a string.
>
> **[4:33](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-to-consider-during-data-loading?u=76281980&t=273)** That's something we can do in the File Reader that we cannot do in the Excel Reader.
>
> **[4:37](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-to-consider-during-data-loading?u=76281980&t=277)** Let's cancel and go over to the Excel Reader.
>
> **[4:40](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-to-consider-during-data-loading?u=76281980&t=280)** Again, all I've done is told it to look for it in the Originals folder.
>
> **[4:46](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-to-consider-during-data-loading?u=76281980&t=286)** Now, this is the Excel file that I have prepared for you so it does have column headers.
>
> **[4:55](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-to-consider-during-data-loading?u=76281980&t=295)** Let's inform it that that's the case.
>
> **[4:58](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-to-consider-during-data-loading?u=76281980&t=298)** Table contains column names and row number one.
>
> **[5:02](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-to-consider-during-data-loading?u=76281980&t=302)** And then we're going to need to refresh.
>
> **[5:04](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-to-consider-during-data-loading?u=76281980&t=304)** If we didn't do this, it's going to think that every variable is a string.
>
> **[5:11](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-to-consider-during-data-loading?u=76281980&t=311)** Notice at the very, very bottom, you can see that.
>
> **[5:14](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-to-consider-during-data-loading?u=76281980&t=314)** That is bad news because these are not all string variables.
>
> **[5:18](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-to-consider-during-data-loading?u=76281980&t=318)** It's confusing the headers with the data.
>
> **[5:21](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-to-consider-during-data-loading?u=76281980&t=321)** So I'm going to refresh and now it recognizes that some variables are integers and some variables are strings.
>
> **[5:31](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-to-consider-during-data-loading?u=76281980&t=331)** So we're actually in good shape.
>
> **[5:33](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-to-consider-during-data-loading?u=76281980&t=333)** For all of our future work in KNIME, we're going to be using the Excel Reader node with the Excel file that I have prepared for you, not the original data from the UCI website.
>
> **[5:47](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-to-consider-during-data-loading?u=76281980&t=347)** That Excel file is in the Originals folder.

> [!info]- Semantic Content
>
> **Env Vars:** knime (6), csv (4), uci (3)
> **Code Keywords:** let (6), for. (1), this. (1), while, (1), override (1)
> **CLI Commands:** make (3), node (1)
> **UI Navigation:** click on (2), go to (1)
> **Definitions:** is a  (2), is called (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Unit analysis decisions
> [LinkedIn Learning](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/unit-analysis-decisions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/unit-analysis-decisions?u=76281980&t=0)** - [Narrator] I want to talk about a terribly important issue, and that is, how to structure your data set in terms of what you want your row to be.
>
> **[0:10](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/unit-analysis-decisions?u=76281980&t=10)** Now, I'm looking at the Census Income Data Set in it's excel version, in excel with the header row, so that we can focus on the data.
>
> **[0:21](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/unit-analysis-decisions?u=76281980&t=21)** So we don't have to worry about setting up the variable names, everything's all set and Census Income Data Set in its excel form is found in the originals folder.
>
> **[0:32](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/unit-analysis-decisions?u=76281980&t=32)** So this is set up currently, so that we have a single individual, top row, for instance, is a 17 year old that is never been married.
>
> **[0:41](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/unit-analysis-decisions?u=76281980&t=41)** That is the child of the household, or apparently in the household is female.
>
> **[0:48](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/unit-analysis-decisions?u=76281980&t=48)** Actually had a large capital gains, which is unusual if you look at this column, there's a lot of zeros there.
>
> **[0:54](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/unit-analysis-decisions?u=76281980&t=54)** And total income is under 50,000.
>
> **[0:59](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/unit-analysis-decisions?u=76281980&t=59)** Okay, so it's set up so that every row is an individual.
>
> **[1:03](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/unit-analysis-decisions?u=76281980&t=63)** And we're trying to determine if that individual is going to make less than or more than 50,000 and what the predictors of that outcome would be.
>
> **[1:14](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/unit-analysis-decisions?u=76281980&t=74)** It's critical early, early on to ponder the following question, might we contemplate setting up this data another way?
>
> **[1:25](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/unit-analysis-decisions?u=76281980&t=85)** Because if we change the underlying structure of the data, it's going to change everything that follows.
>
> **[1:31](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/unit-analysis-decisions?u=76281980&t=91)** So it's a very big decision.
>
> **[1:32](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/unit-analysis-decisions?u=76281980&t=92)** And here's the question.
>
> **[1:34](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/unit-analysis-decisions?u=76281980&t=94)** There's a rule of thumb that says that you shouldn't spend more than 28% of your income on housing.
>
> **[1:42](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/unit-analysis-decisions?u=76281980&t=102)** But that's really household income.
>
> **[1:44](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/unit-analysis-decisions?u=76281980&t=104)** So how might we think about this?
>
> **[1:46](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/unit-analysis-decisions?u=76281980&t=106)** Well we don't have a household ID at the moment.
>
> **[1:49](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/unit-analysis-decisions?u=76281980&t=109)** Let's go to the far right-hand side again, but let's say we did, for instance, let's go to relationship here.
>
> **[1:57](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/unit-analysis-decisions?u=76281980&t=117)** We have husbands, wives, unmarried folks.
>
> **[2:02](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/unit-analysis-decisions?u=76281980&t=122)** What if we were to determine a household ID after all this is census data, that's probably possible.
>
> **[2:08](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/unit-analysis-decisions?u=76281980&t=128)** And we (indistinct)aggregate those rows up, to summarize that.
>
> **[2:14](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/unit-analysis-decisions?u=76281980&t=134)** Well, we could have total hours per week.
>
> **[2:16](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/unit-analysis-decisions?u=76281980&t=136)** Sounds strange at first, but it actually might be interesting.
>
> **[2:20](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/unit-analysis-decisions?u=76281980&t=140)** We could have average hours per member of the household, but again, the total hours worked would not be so bizarre in that context.
>
> **[2:28](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/unit-analysis-decisions?u=76281980&t=148)** If we were trying to figure out if the household collectively could afford the home or rental property that they ran, again, if we were testing this 28% of your income towards housing rule, it would also really simplify capital loss and capital gain because we could sum that over the household.
>
> **[2:48](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/unit-analysis-decisions?u=76281980&t=168)** I'm not trying to suggest that the top four rows were household, but you get the idea.
>
> **[2:52](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/unit-analysis-decisions?u=76281980&t=172)** Where it would get complicated, would be education.
>
> **[2:57](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/unit-analysis-decisions?u=76281980&t=177)** Would that be averaged to sum that would be rather strange.
>
> **[3:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/unit-analysis-decisions?u=76281980&t=180)** What if some individuals were working and other individuals weren't, perhaps we would have to look at out of five members in the household, three were working and two were not.
>
> **[3:11](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/unit-analysis-decisions?u=76281980&t=191)** One was working in the home, let's say, and one was unemployed at the time of the census.
>
> **[3:17](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/unit-analysis-decisions?u=76281980&t=197)** He got the idea would change the structure a lot.
>
> **[3:20](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/unit-analysis-decisions?u=76281980&t=200)** It would also massively reduce the number of rows because if we had 100,000 individuals, we probably only have 20,000.
>
> **[3:29](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/unit-analysis-decisions?u=76281980&t=209)** Let's say households or 30,000 households with a lot of folks living alone, you get the idea.
>
> **[3:36](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/unit-analysis-decisions?u=76281980&t=216)** This is a major, major thing to consider.
>
> **[3:38](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/unit-analysis-decisions?u=76281980&t=218)** So why does this come up?
>
> **[3:40](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/unit-analysis-decisions?u=76281980&t=220)** It's usually the nature of the intervention strategy, or the nature of what you're trying to predict.
>
> **[3:45](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/unit-analysis-decisions?u=76281980&t=225)** So if we're trying to understand individual incomes, this structure makes a lot of sense.
>
> **[3:50](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/unit-analysis-decisions?u=76281980&t=230)** If we're trying to understand the affordability of the home to the household members collectively, then rolling it up makes sense.
>
> **[3:59](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/unit-analysis-decisions?u=76281980&t=239)** If we were doing something completely different like cell phone, and I wanted to prevent you from churning on your cell phone, by sending you a text message with a discount, I'd want to do that at the individual phone level.
>
> **[4:11](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/unit-analysis-decisions?u=76281980&t=251)** If I wanted to understand how a household relates to their cell phone account, I might want to use account ID.
>
> **[4:20](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/unit-analysis-decisions?u=76281980&t=260)** You get the idea very, very important issue.
>
> **[4:23](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/unit-analysis-decisions?u=76281980&t=263)** We've only scratched the surface, but I wanted you to be aware of this very important decision to make early on, when first looking at your data.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5)
> **Definitions:** is a  (2), is an  (1)
> **CLI Commands:** make (2)
> **UI Navigation:** go to (2)
> **Analogies:** for instance (2)
> **Prerequisites:** set up (2)
> **Best Practices:** rule of thumb (1)
> **Warnings:** be aware (1)

#### Challenge: What should the row be?
> [LinkedIn Learning](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-what-should-the-row-be?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-what-should-the-row-be?u=76281980&t=0)** (upbeat uplifting music)
>
> **[0:05](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-what-should-the-row-be?u=76281980&t=5)** - [Instructor] Here's your next challenge.
>
> **[0:08](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-what-should-the-row-be?u=76281980&t=8)** You're going to determine how to structure a predictive modeling problem using the Titanic dataset.
>
> **[0:16](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-what-should-the-row-be?u=76281980&t=16)** It's the same dataset, we'll be grabbing that from the Originals folder.
>
> **[0:20](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-what-should-the-row-be?u=76281980&t=20)** It's not as obvious as it sounds, and you'll have to run some very brief analyses to solve the puzzle.
>
> **[0:27](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-what-should-the-row-be?u=76281980&t=27)** We're going to have to simulate a bit of what you would normally learn during the business understanding phase.
>
> **[0:34](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-what-should-the-row-be?u=76281980&t=34)** The incredible popularity of the Titanic dataset has a lot of advantages for using it for a short challenge like this, there's so much information out there about it, but it has one major disadvantage.
>
> **[0:47](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-what-should-the-row-be?u=76281980&t=47)** It's from a unique accident, and not from a recurring event.
>
> **[0:52](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-what-should-the-row-be?u=76281980&t=52)** So in a sense, there's nothing to predict.
>
> **[0:55](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-what-should-the-row-be?u=76281980&t=55)** Let's do a little thought experiment using a feature of the accident that we're all familiar with, the lifeboats.
>
> **[1:02](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-what-should-the-row-be?u=76281980&t=62)** Let's imagine that what we're trying to predict is not if they survived or not, but whether they got to the safety drill on time.
>
> **[1:12](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-what-should-the-row-be?u=76281980&t=72)** On a modern cruise ship, all passengers must report to their assigned lifeboat before the ship can leave port.
>
> **[1:18](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-what-should-the-row-be?u=76281980&t=78)** This is a mandatory drill that you may have experienced if you've taken a cruise.
>
> **[1:23](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-what-should-the-row-be?u=76281980&t=83)** Everyone's name has to be checked against a list.
>
> **[1:27](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-what-should-the-row-be?u=76281980&t=87)** So here is your job.
>
> **[1:28](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-what-should-the-row-be?u=76281980&t=88)** When the model is eventually deployed, we need a risk score to determine if anyone might fail to show up at the mandatory drill on time.
>
> **[1:37](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-what-should-the-row-be?u=76281980&t=97)** Always assume that there's some intervention strategy in mind.
>
> **[1:42](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-what-should-the-row-be?u=76281980&t=102)** That most likely in this case would be some kind of escort.
>
> **[1:46](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-what-should-the-row-be?u=76281980&t=106)** The question is how to set up the problem, and your answer must be based upon the data.
>
> **[1:52](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-what-should-the-row-be?u=76281980&t=112)** When building the model, you'd worry about all kinds of things, like if there's a set of stairs between their cabin and their lifeboat drill location.
>
> **[2:01](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-what-should-the-row-be?u=76281980&t=121)** But we aren't building the model yet.
>
> **[2:04](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-what-should-the-row-be?u=76281980&t=124)** We are deciding how to set up the problem.
>
> **[2:07](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-what-should-the-row-be?u=76281980&t=127)** So here's your challenge.
>
> **[2:09](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-what-should-the-row-be?u=76281980&t=129)** Pick one of these and justify your answer based on the data.
>
> **[2:14](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-what-should-the-row-be?u=76281980&t=134)** Assuming that some kind of escort is going to be sent, do we score each individual on the ship, score cabins and send an escort to the cabin, or try to do something with a family unit, which implies we have to define what family means in this context.
>
> **[2:33](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-what-should-the-row-be?u=76281980&t=153)** This challenge will take a good 15 to 20 minutes.
>
> **[2:37](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-what-should-the-row-be?u=76281980&t=157)** It could certainly take potentially more.
>
> **[2:40](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-what-should-the-row-be?u=76281980&t=160)** But your solution doesn't have to be perfect, just rule in some and rule out others of the three possible answers.
>
> **[2:48](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-what-should-the-row-be?u=76281980&t=168)** I hope you enjoy wrestling with this, and in the solutions video, I'll give you my thoughts.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (2), let (2)
> **Prerequisites:** set up (2)
> **Definitions:** is a  (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat uplifting music) (1)

#### Solution: What should the row be?
> [LinkedIn Learning](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-what-should-the-row-be?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-what-should-the-row-be?u=76281980&t=0)** - [Tutor] Okay, here we go.
>
> **[0:07](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-what-should-the-row-be?u=76281980&t=7)** This is going to be more thought process than definitive solution because to make a definitive decision about this, you'd have to look outside the data set and consult with a subject matter expert.
>
> **[0:19](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-what-should-the-row-be?u=76281980&t=19)** Nonetheless, we have a lot to consider already.
>
> **[0:22](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-what-should-the-row-be?u=76281980&t=22)** So this is what I've done.
>
> **[0:23](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-what-should-the-row-be?u=76281980&t=23)** I've got the Titanic data set in its original form, which you can find in the originals folder, and I've added a new tab with a pivot table.
>
> **[0:30](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-what-should-the-row-be?u=76281980&t=30)** I've also turned on the filters so we can take a look.
>
> **[0:33](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-what-should-the-row-be?u=76281980&t=33)** So if we click down and filter here, it looks like we have as many passenger IDs as we have passengers.
>
> **[0:41](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-what-should-the-row-be?u=76281980&t=41)** It looks like almost all the numbers are used so that's good.
>
> **[0:45](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-what-should-the-row-be?u=76281980&t=45)** That means that if we wanted to do a risk score at the passenger level, it looks like we don't have duplicates and so on.
>
> **[0:51](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-what-should-the-row-be?u=76281980&t=51)** That's certainly a plausible way to go.
>
> **[0:53](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-what-should-the-row-be?u=76281980&t=53)** What about the other options?
>
> **[0:55](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-what-should-the-row-be?u=76281980&t=55)** Let's take a look at Ticket for instance as a possible way to get at the Family Unit And we click here and we see there's all kinds of weird patterns.
>
> **[1:05](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-what-should-the-row-be?u=76281980&t=65)** We can see tickets that are just numbers, and if we scroll down, now look at how many different choices there are all of a sudden we're into six, seven digit ticket numbers.
>
> **[1:16](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-what-should-the-row-be?u=76281980&t=76)** If we keep on going, we get to all kinds of letters and all kinds of things going on.
>
> **[1:20](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-what-should-the-row-be?u=76281980&t=80)** There seems to be no rhyme or reason to Ticket.
>
> **[1:23](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-what-should-the-row-be?u=76281980&t=83)** So certainly without advice from a subject matter expert, we're not going to be able to find Family Unit using Ticket unless we learn a lot more about what's going on with that coding scheme.
>
> **[1:37](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-what-should-the-row-be?u=76281980&t=97)** Also, it appears that there's more Tickets probably than Family Units, it's a real puzzle Let's take a look at Name.
>
> **[1:44](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-what-should-the-row-be?u=76281980&t=104)** Now there's as many names as there are passengers.
>
> **[1:48](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-what-should-the-row-be?u=76281980&t=108)** We could try stripping away the surname, we'd have to determine if that was reliable.
>
> **[1:56](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-what-should-the-row-be?u=76281980&t=116)** Do we have unrelated individuals traveling together?
>
> **[2:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-what-should-the-row-be?u=76281980&t=120)** Also we'd have to do a little bit of text parsing to do that.
>
> **[2:03](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-what-should-the-row-be?u=76281980&t=123)** So again, we can't rule it out completely, but it seems problematic at the moment.
>
> **[2:09](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-what-should-the-row-be?u=76281980&t=129)** What about Cabin?
>
> **[2:12](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-what-should-the-row-be?u=76281980&t=132)** Well, if we look here, there's a whole bunch of different Cabins.
>
> **[2:16](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-what-should-the-row-be?u=76281980&t=136)** Keep on scrolling down, we notice some strange patterns like more than one cabin listed.
>
> **[2:21](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-what-should-the-row-be?u=76281980&t=141)** And all the way down at the bottom, we do have some blanks.
>
> **[2:26](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-what-should-the-row-be?u=76281980&t=146)** So let's take a look.
>
> **[2:29](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-what-should-the-row-be?u=76281980&t=149)** Scroll back up to the top, deselect all, go back down to the bottom and select just the blanks.
>
> **[2:37](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-what-should-the-row-be?u=76281980&t=157)** And it looks like there are hundreds and hundreds of blanks.
>
> **[2:42](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-what-should-the-row-be?u=76281980&t=162)** That's a real factor.
>
> **[2:44](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-what-should-the-row-be?u=76281980&t=164)** So let's go back, return to all the data.
>
> **[2:47](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-what-should-the-row-be?u=76281980&t=167)** There we go.
>
> **[2:48](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-what-should-the-row-be?u=76281980&t=168)** And let's take a look at the light that a pivot table could shed on this.
>
> **[2:52](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-what-should-the-row-be?u=76281980&t=172)** So what I'm going to do is I'm going to drag passenger ID down to rows, and I don't want the sum that's what it automatically gives me.
>
> **[3:01](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-what-should-the-row-be?u=76281980&t=181)** What I want is the count.
>
> **[3:04](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-what-should-the-row-be?u=76281980&t=184)** And it looks like we've got no duplicates.
>
> **[3:11](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-what-should-the-row-be?u=76281980&t=191)** Not trying to impress you with my Excel prowess, I work in predictive analytics workbenches more often than I work Excel.
>
> **[3:18](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-what-should-the-row-be?u=76281980&t=198)** But that was quick and easy enough, we figured out that it looks like all the passenger IDs have one passenger assigned to them and that's it.
>
> **[3:25](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-what-should-the-row-be?u=76281980&t=205)** That's important to know for our purpose.
>
> **[3:28](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-what-should-the-row-be?u=76281980&t=208)** So let's take a look at Ticket because it looks somewhat promising.
>
> **[3:31](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-what-should-the-row-be?u=76281980&t=211)** We're going to do the same thing.
>
> **[3:33](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-what-should-the-row-be?u=76281980&t=213)** So we've got Ticket and count of Ticket.
>
> **[3:35](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-what-should-the-row-be?u=76281980&t=215)** We've got a ticket here with eight, we've got a ticket here with two, we got a ticket here with two, a lot of singles, a ticket here with three.
>
> **[3:44](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-what-should-the-row-be?u=76281980&t=224)** Tickets starting to look a little bit more interesting.
>
> **[3:48](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-what-should-the-row-be?u=76281980&t=228)** Let's go back to the data and take a look at this one.
>
> **[3:51](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-what-should-the-row-be?u=76281980&t=231)** Let's see if it's picking up on family name, let's see what the dynamic is there.
>
> **[3:56](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-what-should-the-row-be?u=76281980&t=236)** We go back to full data and Ticket, deselect it was 1601, I believe.
>
> **[4:05](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-what-should-the-row-be?u=76281980&t=245)** wow, it's actually quite an interesting pattern.
>
> **[4:09](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-what-should-the-row-be?u=76281980&t=249)** They appear to be unrelated males traveling together and this makes me suspect that maybe Ticket has something to do with the travel agent or who sold the ticket.
>
> **[4:20](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-what-should-the-row-be?u=76281980&t=260)** Maybe these gentlemen all came in looking for a ticket at the same time.
>
> **[4:25](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-what-should-the-row-be?u=76281980&t=265)** Perhaps they were transiting.
>
> **[4:27](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-what-should-the-row-be?u=76281980&t=267)** I mean, the names certainly looked like they would be Chinese names as opposed to French or European names.
>
> **[4:35](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-what-should-the-row-be?u=76281980&t=275)** This would be about 100 years ago, there's a distinct possibility that there was transit before they reached Europe.
>
> **[4:42](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-what-should-the-row-be?u=76281980&t=282)** That might give us a clue as to what Ticket is really telling us.
>
> **[4:46](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-what-should-the-row-be?u=76281980&t=286)** It could be telling us a bit about the trip that they made prior to getting on the Titanic, who knows?
>
> **[4:53](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-what-should-the-row-be?u=76281980&t=293)** But these are mysteries that would have to be solved if we're going to use Ticket in that way.
>
> **[4:58](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-what-should-the-row-be?u=76281980&t=298)** It's not perhaps what we thought it was going to tell us.
>
> **[5:01](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-what-should-the-row-be?u=76281980&t=301)** So now let's take a look at Cabin through the lens of the pivot table.
>
> **[5:05](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-what-should-the-row-be?u=76281980&t=305)** So we'll get rid of Ticket.
>
> **[5:08](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-what-should-the-row-be?u=76281980&t=308)** We'll go ahead and bring in Cabin, drag down Cabin.
>
> **[5:14](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-what-should-the-row-be?u=76281980&t=314)** Get rid of that.
>
> **[5:16](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-what-should-the-row-be?u=76281980&t=316)** And what do we have here?
>
> **[5:17](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-what-should-the-row-be?u=76281980&t=317)** How many people do we have in a cabin?
>
> **[5:19](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-what-should-the-row-be?u=76281980&t=319)** A lot of singles.
>
> **[5:20](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-what-should-the-row-be?u=76281980&t=320)** We've got three people in a cabin down here.
>
> **[5:24](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-what-should-the-row-be?u=76281980&t=324)** We got two people in a cabin in there, but a whole bunch of singles and then we certainly saw that there were a lot of blanks.
>
> **[5:33](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-what-should-the-row-be?u=76281980&t=333)** So what's the bottom line?
>
> **[5:37](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-what-should-the-row-be?u=76281980&t=337)** Clearly we can proceed with passenger ID and give all passenger IDs a score.
>
> **[5:43](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-what-should-the-row-be?u=76281980&t=343)** Parsing the last name, not clear that's going to help us but we haven't really tried it yet.
>
> **[5:49](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-what-should-the-row-be?u=76281980&t=349)** Ticket clearly is going to give us trouble.
>
> **[5:52](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-what-should-the-row-be?u=76281980&t=352)** Cabin we have all those blanks.
>
> **[5:54](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-what-should-the-row-be?u=76281980&t=354)** So we're hitting roadblocks all over the place.
>
> **[5:57](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-what-should-the-row-be?u=76281980&t=357)** It doesn't mean that the other options couldn't be pursued.
>
> **[6:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-what-should-the-row-be?u=76281980&t=360)** But at the moment, only passenger ID looks like we're ready to go.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), this, (1), this. (1)
> **CLI Commands:** find (2), make (1)
> **Cross-References:** go back to (2)
> **UI Navigation:** scroll down (1)
> **Definitions:** means that (1)
> **Analogies:** for instance (1)
> **Speakers:** - [tutor] (1)
> **Non-Speech:** (upbeat music) (1)


### 5. Describe Data

#### How to uncover the gross properties of the data
> [LinkedIn Learning](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-uncover-the-gross-properties-of-the-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-uncover-the-gross-properties-of-the-data?u=76281980&t=0)** - [Instructor] Okay, we're back in the CRISP-DM document.
>
> **[0:03](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-uncover-the-gross-properties-of-the-data?u=76281980&t=3)** You know, far too few look over this document carefully enough to discover that the real heart of the document is part three, the user's guide.
>
> **[0:13](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-uncover-the-gross-properties-of-the-data?u=76281980&t=13)** That's where the phases in the tasks are discussed in greatest detail.
>
> **[0:19](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-uncover-the-gross-properties-of-the-data?u=76281980&t=19)** So of course it begins with the first phase but let's advance in the document to the data understanding phase.
>
> **[0:27](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-uncover-the-gross-properties-of-the-data?u=76281980&t=27)** And we discover that it begins here on 37.
>
> **[0:30](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-uncover-the-gross-properties-of-the-data?u=76281980&t=30)** But let's further proceed to the second task.
>
> **[0:34](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-uncover-the-gross-properties-of-the-data?u=76281980&t=34)** And here it is, describe data.
>
> **[0:36](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-uncover-the-gross-properties-of-the-data?u=76281980&t=36)** With that phrase that I love, examine the gross properties of the acquired data.
>
> **[0:43](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-uncover-the-gross-properties-of-the-data?u=76281980&t=43)** So let's take a closer look at what it has to say about describe data.
>
> **[0:49](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-uncover-the-gross-properties-of-the-data?u=76281980&t=49)** The first topic this section discusses is what it calls the volumetric analysis of data.
>
> **[0:57](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-uncover-the-gross-properties-of-the-data?u=76281980&t=57)** If you're looking in unusual places as I recommend, sometimes you'll get data directly from the subject matter expert and not via the data warehouse.
>
> **[1:06](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-uncover-the-gross-properties-of-the-data?u=76281980&t=66)** So it really is important to document where you're getting all of this data.
>
> **[1:11](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-uncover-the-gross-properties-of-the-data?u=76281980&t=71)** There's one issue where I disagree slightly with CRISP-DM.
>
> **[1:15](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-uncover-the-gross-properties-of-the-data?u=76281980&t=75)** It's a bit ambiguous in the document and I want to clear this up.
>
> **[1:19](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-uncover-the-gross-properties-of-the-data?u=76281980&t=79)** I would save the descriptive statistics for the next task, explore data, because you want to move more briskly here in describe data, mostly focus on what are the typical values and if they are nominal or ordinal and if so, how many categories?
>
> **[1:40](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-uncover-the-gross-properties-of-the-data?u=76281980&t=100)** Finally, is there anything that looks unstructured, like free text?
>
> **[1:45](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-uncover-the-gross-properties-of-the-data?u=76281980&t=105)** So don't overthink it. Just make notes of what you observe.
>
> **[1:51](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-uncover-the-gross-properties-of-the-data?u=76281980&t=111)** Now let's zero in on more specifics.
>
> **[1:54](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-uncover-the-gross-properties-of-the-data?u=76281980&t=114)** What's the level of measurement, as we just mentioned?
>
> **[1:57](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-uncover-the-gross-properties-of-the-data?u=76281980&t=117)** What are the normal ranges or values?
>
> **[1:59](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-uncover-the-gross-properties-of-the-data?u=76281980&t=119)** What are some weird values that you see?
>
> **[2:03](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-uncover-the-gross-properties-of-the-data?u=76281980&t=123)** Does the data make sense?
>
> **[2:05](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-uncover-the-gross-properties-of-the-data?u=76281980&t=125)** Do you have questions for the subject matter experts?
>
> **[2:08](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-uncover-the-gross-properties-of-the-data?u=76281980&t=128)** Does it look like something you can work with?
>
> **[2:11](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-uncover-the-gross-properties-of-the-data?u=76281980&t=131)** You are really just at the surface but, moving along briskly, the idea is that you are listing issues and questions, questions that might require a conversation or a meeting so it's best to get the conversation started.
>
> **[2:26](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-uncover-the-gross-properties-of-the-data?u=76281980&t=146)** With practice, you'll make a first pass at a data set at a pace of about five minutes per variable or even less.
>
> **[2:36](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-uncover-the-gross-properties-of-the-data?u=76281980&t=156)** If someone gives me access to data and I can't work with it for some reason, there's no shame in that.
>
> **[2:43](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-uncover-the-gross-properties-of-the-data?u=76281980&t=163)** You talk about it.
>
> **[2:44](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-uncover-the-gross-properties-of-the-data?u=76281980&t=164)** But if I've had the data for three weeks and I have to say that, it's embarrassing.
>
> **[2:50](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-uncover-the-gross-properties-of-the-data?u=76281980&t=170)** So make your initial pass efficiently.
>
> **[2:53](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-uncover-the-gross-properties-of-the-data?u=76281980&t=173)** Within 24 to 72 hours, you should be able to say that you've opened it, looked at it, and have some initial comments and questions.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), pass (2), finally, (1), require (1)
> **CLI Commands:** make (4)
> **Env Vars:** crisp (2)
> **Best Practices:** it's best to (1)
> **Speakers:** - [instructor] (1)

#### Researching the dataset
> [LinkedIn Learning](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/researching-the-dataset?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/researching-the-dataset?u=76281980&t=0)** - [Narrator] I want to talk a little bit about how to properly research a data set.
>
> **[0:05](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/researching-the-dataset?u=76281980&t=5)** And I want to caution you against relying too heavily on subject matter experts.
>
> **[0:11](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/researching-the-dataset?u=76281980&t=11)** They're critical to what we do, but they're also busy.
>
> **[0:15](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/researching-the-dataset?u=76281980&t=15)** So you want to be as self-sufficient as possible.
>
> **[0:19](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/researching-the-dataset?u=76281980&t=19)** So here we are.
>
> **[0:20](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/researching-the-dataset?u=76281980&t=20)** We're looking at the UCI webpage for the census income data set.
>
> **[0:25](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/researching-the-dataset?u=76281980&t=25)** What I want you to imagine is that you're pulling data from a data warehouse or from another source.
>
> **[0:30](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/researching-the-dataset?u=76281980&t=30)** And the IT team is going to maintain some kind of a data catalog, data dictionary, metadata that's going to help you understand where the data is.
>
> **[0:38](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/researching-the-dataset?u=76281980&t=38)** However, don't underestimate how frequently you're going to be pulling data from all kinds of different places.
>
> **[0:45](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/researching-the-dataset?u=76281980&t=45)** Census data, tied to zip code, to better understand the neighborhood of a customer or possibly weather data.
>
> **[0:53](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/researching-the-dataset?u=76281980&t=53)** There are numerous times that I'm reaching for data outside the context of a data warehouse.
>
> **[0:58](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/researching-the-dataset?u=76281980&t=58)** So let's scroll down a little bit.
>
> **[1:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/researching-the-dataset?u=76281980&t=60)** And at first glance you think we pretty much have everything we need. We have the attribute information.
>
> **[1:06](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/researching-the-dataset?u=76281980&t=66)** It explains that we have age and work class and education and so on, but there are some mysteries.
>
> **[1:11](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/researching-the-dataset?u=76281980&t=71)** Like we have married-civ-spouse and married-AF-spouse.
>
> **[1:19](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/researching-the-dataset?u=76281980&t=79)** Well, my intuition tells me that civilian and armed forces, but that's the kind of thing that we'd want to confirm.
>
> **[1:26](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/researching-the-dataset?u=76281980&t=86)** Other things that are a bit odd, like what is own-child?
>
> **[1:32](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/researching-the-dataset?u=76281980&t=92)** Why is that own-child and not child?
>
> **[1:35](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/researching-the-dataset?u=76281980&t=95)** What's going on there?
>
> **[1:36](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/researching-the-dataset?u=76281980&t=96)** So where are we going to solve these mysteries?
>
> **[1:38](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/researching-the-dataset?u=76281980&t=98)** Well, clearly you could reach out to your colleague who generated this data or someone in IT, but why not take a step on your own and try to figure out some of this?
>
> **[1:51](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/researching-the-dataset?u=76281980&t=111)** For instance, we know that this was actually extracted by somebody from the 1994 Census database.
>
> **[1:59](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/researching-the-dataset?u=76281980&t=119)** You guessed it.
>
> **[2:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/researching-the-dataset?u=76281980&t=120)** We're going to check out the 1994 Census database and see what we can find.
>
> **[2:06](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/researching-the-dataset?u=76281980&t=126)** And sure enough, there's a whole description of this, including an extensive document.
>
> **[2:13](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/researching-the-dataset?u=76281980&t=133)** So let's check out this PDF, also available right there on the web.
>
> **[2:19](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/researching-the-dataset?u=76281980&t=139)** This is just one part of many.
>
> **[2:21](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/researching-the-dataset?u=76281980&t=141)** It's the beginning.
>
> **[2:22](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/researching-the-dataset?u=76281980&t=142)** And it's a huge document with lots of detail.
>
> **[2:25](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/researching-the-dataset?u=76281980&t=145)** I started to go through this document and I was struggling a little bit.
>
> **[2:29](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/researching-the-dataset?u=76281980&t=149)** So I searched for some of the specific terms and I hit pay dirt.
>
> **[2:35](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/researching-the-dataset?u=76281980&t=155)** I found that in general terms not tied to 1994, but more generally, there's a glossary of sorts here on the census website.
>
> **[2:44](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/researching-the-dataset?u=76281980&t=164)** What in particular caught my attention is this notion of a reference person.
>
> **[2:49](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/researching-the-dataset?u=76281980&t=169)** Let's take a look.
>
> **[2:51](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/researching-the-dataset?u=76281980&t=171)** The reference person is the person to whom the relationship of other people in the household is recorded.
>
> **[2:58](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/researching-the-dataset?u=76281980&t=178)** Oh, I've got you.
>
> **[2:59](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/researching-the-dataset?u=76281980&t=179)** So if the reference person is the father, then the own child would be their child, as opposed to perhaps an unrelated person living in the home.
>
> **[3:09](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/researching-the-dataset?u=76281980&t=189)** Let's try to confirm this.
>
> **[3:11](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/researching-the-dataset?u=76281980&t=191)** I'm going to go up and read more about household.
>
> **[3:14](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/researching-the-dataset?u=76281980&t=194)** So up to the top, here we are, and go to household.
>
> **[3:23](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/researching-the-dataset?u=76281980&t=203)** And we have a wealth of information now.
>
> **[3:26](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/researching-the-dataset?u=76281980&t=206)** A household consists of all people who occupy a housing unit.
>
> **[3:31](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/researching-the-dataset?u=76281980&t=211)** That's helpful to know, and we have all kinds of additional detail there.
>
> **[3:37](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/researching-the-dataset?u=76281980&t=217)** If we go a bit further down, there's this notion of the family householder.
>
> **[3:44](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/researching-the-dataset?u=76281980&t=224)** And it goes on to explain that years ago, one would talk about head of household, but this whole notion of applying stereotypes to who the head of household is, has caused the census to abandon that language.
>
> **[4:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/researching-the-dataset?u=76281980&t=240)** And we talk about the householder, and the householder is the person to whom everybody else is related getting back again to that notion of the reference.
>
> **[4:12](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/researching-the-dataset?u=76281980&t=252)** It's a bit complicated and we won't try to iron out every detail here, but I wanted to give you a notion of the kind of research that I conduct before I go in to talk to a subject matter expert.
>
> **[4:25](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/researching-the-dataset?u=76281980&t=265)** And that could be reading the documentation, the metadata in regards to the data warehouse, it might involve going in the web and it frequently involves going on the web so that when I get that 30 minutes with a subject matter expert, I'm using their time efficiently.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), self (1), this, (1), this. (1)
> **Tools:** notion (5)
> **Env Vars:** uci (1), pdf (1)
> **UI Navigation:** scroll down (1), go to (1)
> **Analogies:** imagine (1), for instance (1)
> **CLI Commands:** find (1)
> **Documentation:** the documentation (1)
> **Warnings:** caution (1)

#### Tips and tricks using simple aggregation commands
> [LinkedIn Learning](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-using-simple-aggregation-commands?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-using-simple-aggregation-commands?u=76281980&t=0)** - [Instructor] Here we are in KNIME and we're going to do some simple aggregations and sorts.
>
> **[0:04](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-using-simple-aggregation-commands?u=76281980&t=4)** The reason this is valuable is that we'll be able to quickly determine what's going on with our IDs and our high order nominals the same kinds of things you might do with a pivot table in Excel.
>
> **[0:15](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-using-simple-aggregation-commands?u=76281980&t=15)** But I think it's especially quick and easy in KNIME.
>
> **[0:19](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-using-simple-aggregation-commands?u=76281980&t=19)** So let's start with the aggregation.
>
> **[0:21](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-using-simple-aggregation-commands?u=76281980&t=21)** So that's called the GroupBy node.
>
> **[0:23](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-using-simple-aggregation-commands?u=76281980&t=23)** If we just start to type it, it will help us find it.
>
> **[0:25](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-using-simple-aggregation-commands?u=76281980&t=25)** Here it is. We can drag it into place and let's be clear on why we would want to do this.
>
> **[0:35](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-using-simple-aggregation-commands?u=76281980&t=35)** It's those very high order nominals that really cause us trouble and in this data set country of origin is one of them.
>
> **[0:44](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-using-simple-aggregation-commands?u=76281980&t=44)** It's got a few dozen categories and that's a bit too many for us to include.
>
> **[0:49](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-using-simple-aggregation-commands?u=76281980&t=49)** We don't want the software to automatically dummy code it.
>
> **[0:52](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-using-simple-aggregation-commands?u=76281980&t=52)** That's really the issue that would bring us to something like the GroupBy node.
>
> **[0:56](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-using-simple-aggregation-commands?u=76281980&t=56)** So let's take a look inside.
>
> **[0:58](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-using-simple-aggregation-commands?u=76281980&t=58)** Don't worry about that red light indicator.
>
> **[1:01](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-using-simple-aggregation-commands?u=76281980&t=61)** It just means we haven't given any instructions yet.
>
> **[1:04](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-using-simple-aggregation-commands?u=76281980&t=64)** So native country, there we go.
>
> **[1:06](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-using-simple-aggregation-commands?u=76281980&t=66)** So what that's going to do is create a row for each unique value of native country.
>
> **[1:13](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-using-simple-aggregation-commands?u=76281980&t=73)** So now what we need is some kind of variable to summarize there.
>
> **[1:17](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-using-simple-aggregation-commands?u=76281980&t=77)** So we could for instance, take age and it immediately wants to do average age based on native country, but at the moment, we're really just focused on count.
>
> **[1:29](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-using-simple-aggregation-commands?u=76281980&t=89)** We want to know which countries are common and which countries are rare.
>
> **[1:33](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-using-simple-aggregation-commands?u=76281980&t=93)** So we could bring in any number of things, mean, median and so on.
>
> **[1:38](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-using-simple-aggregation-commands?u=76281980&t=98)** And the context of KNIME, the explore node does a lot of that for us.
>
> **[1:45](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-using-simple-aggregation-commands?u=76281980&t=105)** So here we're focused on count and we've got age, we got count. We really could use almost any variable, but age is complete and that's going to be helpful to us so that we can focus our attention on the native country variable.
>
> **[1:59](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-using-simple-aggregation-commands?u=76281980&t=119)** So we'll click on, okay, now we have a yellow indicator, meaning that it's almost ready to go.
>
> **[2:05](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-using-simple-aggregation-commands?u=76281980&t=125)** We gave it some instructions, but we haven't run it.
>
> **[2:07](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-using-simple-aggregation-commands?u=76281980&t=127)** So we're going to execute.
>
> **[2:10](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-using-simple-aggregation-commands?u=76281980&t=130)** Then we're going to look at the group table and it's kind of interesting.
>
> **[2:14](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-using-simple-aggregation-commands?u=76281980&t=134)** We've got a bunch of question marks.
>
> **[2:16](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-using-simple-aggregation-commands?u=76281980&t=136)** We've got Cambodia, Canada.
>
> **[2:19](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-using-simple-aggregation-commands?u=76281980&t=139)** We can find all the information we need here, but boy, it would be a lot easier to read if we sorted it.
>
> **[2:26](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-using-simple-aggregation-commands?u=76281980&t=146)** So let's do that kind of close that, come back here, delete group and type in sort.
>
> **[2:35](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-using-simple-aggregation-commands?u=76281980&t=155)** That's the fastest way to find it. Here's the sorter node
>
> **[2:43](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-using-simple-aggregation-commands?u=76281980&t=163)** And we can take count descending, okay.
>
> **[2:51](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-using-simple-aggregation-commands?u=76281980&t=171)** Execute and take a look at the sorted table.
>
> **[2:56](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-using-simple-aggregation-commands?u=76281980&t=176)** Now, the reason that you would do something like this in a work bench keep in mind is you might be creating a lookup table or some kind of report.
>
> **[3:04](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-using-simple-aggregation-commands?u=76281980&t=184)** You know, we're not just going in here to generate a table.
>
> **[3:07](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-using-simple-aggregation-commands?u=76281980&t=187)** That's the issue at the moment, but we might be doing an elaborate merge.
>
> **[3:11](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-using-simple-aggregation-commands?u=76281980&t=191)** We might be doing data integration.
>
> **[3:13](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-using-simple-aggregation-commands?u=76281980&t=193)** So there's lots of applications for GroupBy, but our GroupBy followed by a sort now clearly indicates that the majority of our cases are from the US substantial number relative to the other countries, at least are from Mexico and 583 are from an unknown native country.
>
> **[3:34](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-using-simple-aggregation-commands?u=76281980&t=214)** We can make that a little bit wider so that we can read it.
>
> **[3:36](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-using-simple-aggregation-commands?u=76281980&t=216)** So what will we do with this information?
>
> **[3:38](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-using-simple-aggregation-commands?u=76281980&t=218)** Well, clearly we're going to be in trouble with the one person from Holland and the 12 people from Scotland and the 13 people from Hungary.
>
> **[3:46](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-using-simple-aggregation-commands?u=76281980&t=226)** So what's going to happen is rather than creating dozens of dummy coded variables.
>
> **[3:51](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-using-simple-aggregation-commands?u=76281980&t=231)** We're probably looking at something like US, Mexico, Canada, Europe, Latin America, Asia, something like that.
>
> **[4:02](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-using-simple-aggregation-commands?u=76281980&t=242)** The detail that you get from this level of granularity seems helpful, but all of those dummy coded variables are going to be a problem.
>
> **[4:11](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-using-simple-aggregation-commands?u=76281980&t=251)** So here you go.
>
> **[4:12](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-using-simple-aggregation-commands?u=76281980&t=252)** You can explore those high order nominals in KNIME using the combination of GroupBy and sort.

> [!info]- Semantic Content
>
> **CLI Commands:** node (4), find (3), make (1)
> **Code Keywords:** let (4), this. (1), include. (1), delete (1)
> **Env Vars:** knime (4)
> **UI Navigation:** click on (1)
> **Analogies:** for instance (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### A simple strategy for organizing your work
> [LinkedIn Learning](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/a-simple-strategy-for-organizing-your-work?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/a-simple-strategy-for-organizing-your-work?u=76281980&t=0)** - [Instructor] I'm in the Census Income Dataset spreadsheet, but I've added a new tab.
>
> **[0:07](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/a-simple-strategy-for-organizing-your-work?u=76281980&t=7)** I've added a tab where I'm going to be placing some notes, and this is just to illustrate a very simple strategy for organizing your work while performing this task.
>
> **[0:17](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/a-simple-strategy-for-organizing-your-work?u=76281980&t=17)** So what I've done is I've taken all the variable names and then transposed them, so that constitutes my first column here, just all the variable names.
>
> **[0:26](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/a-simple-strategy-for-organizing-your-work?u=76281980&t=26)** Then I've come up with several column headers.
>
> **[0:29](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/a-simple-strategy-for-organizing-your-work?u=76281980&t=29)** Now there's nothing magic about these column headers.
>
> **[0:32](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/a-simple-strategy-for-organizing-your-work?u=76281980&t=32)** They're similar to ones that I will typically use.
>
> **[0:35](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/a-simple-strategy-for-organizing-your-work?u=76281980&t=35)** On each project, I might add or subtract some very basic things, but what I have is where the data's come from, so notice that a number of these are just coming from the original source.
>
> **[0:47](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/a-simple-strategy-for-organizing-your-work?u=76281980&t=47)** I put UCI here, I could've put census as the source.
>
> **[0:52](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/a-simple-strategy-for-organizing-your-work?u=76281980&t=52)** Frankly most of the time, it's going to be an explicit reference to a data warehouse table, but on occasion you won't be getting it from the data warehouse, you might be getting it directly from SME.
>
> **[1:02](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/a-simple-strategy-for-organizing-your-work?u=76281980&t=62)** Also notice that it's my opportunity to flag here that three of them are derived variables, new features that I already know that I'm going to want to do.
>
> **[1:13](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/a-simple-strategy-for-organizing-your-work?u=76281980&t=73)** I have a column here for a potential role.
>
> **[1:16](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/a-simple-strategy-for-organizing-your-work?u=76281980&t=76)** Most of these are going to be input, some of them I'm quite suspicious are not going to work out, but they have problems.
>
> **[1:22](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/a-simple-strategy-for-organizing-your-work?u=76281980&t=82)** Some of those problem variables have inspired the new derived variables.
>
> **[1:27](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/a-simple-strategy-for-organizing-your-work?u=76281980&t=87)** I've got level of measure, I actually have an added level of measure for this.
>
> **[1:32](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/a-simple-strategy-for-organizing-your-work?u=76281980&t=92)** Don't think of this worksheet as being complete.
>
> **[1:34](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/a-simple-strategy-for-organizing-your-work?u=76281980&t=94)** I'm trying to give you a feel for how you would work through this, okay?
>
> **[1:37](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/a-simple-strategy-for-organizing-your-work?u=76281980&t=97)** But let me clarify what I mean.
>
> **[1:40](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/a-simple-strategy-for-organizing-your-work?u=76281980&t=100)** So down here for instance, I've got a scale variable capital gain that has a huge number of zeroes, that's going to pose a problem.
>
> **[1:47](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/a-simple-strategy-for-organizing-your-work?u=76281980&t=107)** So I've already made note to myself that I'm going to have a gain yes or no variable that's going to be Boolean in nature that I'm going to use.
>
> **[1:57](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/a-simple-strategy-for-organizing-your-work?u=76281980&t=117)** So that's going to be a binary.
>
> **[2:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/a-simple-strategy-for-organizing-your-work?u=76281980&t=120)** In fact actually, I think that sex has only two values in this particular data set, so that's a binary as well.
>
> **[2:09](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/a-simple-strategy-for-organizing-your-work?u=76281980&t=129)** You get the idea, right?
>
> **[2:10](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/a-simple-strategy-for-organizing-your-work?u=76281980&t=130)** So this is note taking, this is not complete, it's not official.
>
> **[2:15](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/a-simple-strategy-for-organizing-your-work?u=76281980&t=135)** The column headings might change a bit as I have said, but really is a powerful working document.
>
> **[2:20](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/a-simple-strategy-for-organizing-your-work?u=76281980&t=140)** So why would the number of values, my next column, be important because that's going to separate the nominal variables that are going to be no deal from the ones that are going to cause trouble.
>
> **[2:32](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/a-simple-strategy-for-organizing-your-work?u=76281980&t=152)** I don't want native country for instance, which is clearly a high order nominal, to generate 41 dummy-coded variables.
>
> **[2:39](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/a-simple-strategy-for-organizing-your-work?u=76281980&t=159)** There's nothing especially strange about having a question mark as a variable, but it's a little bit of an odd way to signal that something is missing.
>
> **[2:48](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/a-simple-strategy-for-organizing-your-work?u=76281980&t=168)** If I go back to the actual data, you can see that the question mark is not figurative, it is explicitly in there.
>
> **[2:56](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/a-simple-strategy-for-organizing-your-work?u=76281980&t=176)** So is that going to be explicitly in there during deployment, during scoring?
>
> **[3:01](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/a-simple-strategy-for-organizing-your-work?u=76281980&t=181)** Am I going to need to have if then statements that say if work class equals quote question mark close quote, you get the idea, I have to resolve this.
>
> **[3:11](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/a-simple-strategy-for-organizing-your-work?u=76281980&t=191)** So that's going to be something that I want to ask my colleagues and ask a subject matter expert.
>
> **[3:16](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/a-simple-strategy-for-organizing-your-work?u=76281980&t=196)** The relationship variable does have some odd categories that aren't entirely clear, I'm going to want to discuss that with an SME.
>
> **[3:24](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/a-simple-strategy-for-organizing-your-work?u=76281980&t=204)** I've noticed for instance that got a lot of zeroes here because most people don't have gains or losses.
>
> **[3:30](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/a-simple-strategy-for-organizing-your-work?u=76281980&t=210)** So I want to make sure, is that included in my 50,000, is that not included in my 50,000, that would be in my notes to ask an SME.
>
> **[3:39](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/a-simple-strategy-for-organizing-your-work?u=76281980&t=219)** I don't have complete formulas yet, but I do know basically that gain is either going to be a non-zero number or it's going to be a zero, so a non-zero number would get a one, a non-zero number would still get zero, and I'm off to the races, okay?
>
> **[3:54](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/a-simple-strategy-for-organizing-your-work?u=76281980&t=234)** So again, this might evolve a little bit to fit your particular project.
>
> **[3:59](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/a-simple-strategy-for-organizing-your-work?u=76281980&t=239)** But I do something like this, on every project I find it extremely helpful.
>
> **[4:03](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/a-simple-strategy-for-organizing-your-work?u=76281980&t=243)** Simply transpose your variable names, come up with appropriate columns, and be populating the spreadsheet as you go through the task.

> [!info]- Semantic Content
>
> **Code Keywords:** this. (2), this, (2), from, (1), let (1)
> **Env Vars:** sme (3), uci (1)
> **Analogies:** for instance (3), similar to (1)
> **CLI Commands:** make (1), find (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 6. Data Description Case Studies

#### Describe data demo using the UCI heart dataset
> [LinkedIn Learning](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/describe-data-demo-using-the-uci-heart-dataset?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/describe-data-demo-using-the-uci-heart-dataset?u=76281980&t=0)** - [Instructor] Okay, welcome to a brand new data set.
>
> **[0:02](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/describe-data-demo-using-the-uci-heart-dataset?u=76281980&t=2)** This is the heart disease data set from the UCI Machine Learning repository.
>
> **[0:07](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/describe-data-demo-using-the-uci-heart-dataset?u=76281980&t=7)** I want to make a couple of general comments.
>
> **[0:09](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/describe-data-demo-using-the-uci-heart-dataset?u=76281980&t=9)** First, we're introducing this dataset for extra reinforcement of the skills.
>
> **[0:15](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/describe-data-demo-using-the-uci-heart-dataset?u=76281980&t=15)** So we won't be introducing new concepts, we're going to be practicing them on this new data set.
>
> **[0:21](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/describe-data-demo-using-the-uci-heart-dataset?u=76281980&t=21)** We'll be doing that in the current section.
>
> **[0:22](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/describe-data-demo-using-the-uci-heart-dataset?u=76281980&t=22)** And then further along in the course when we've added some skills to our toolkit.
>
> **[0:29](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/describe-data-demo-using-the-uci-heart-dataset?u=76281980&t=29)** Okay, let's take a look at the data dictionary that's been provided here, that's always helpful.
>
> **[0:34](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/describe-data-demo-using-the-uci-heart-dataset?u=76281980&t=34)** So the first thing perhaps that you might notice is that there's a very small number of instances.
>
> **[0:39](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/describe-data-demo-using-the-uci-heart-dataset?u=76281980&t=39)** Try not to be too distracted by that because this is what I want you to imagine might happen.
>
> **[0:44](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/describe-data-demo-using-the-uci-heart-dataset?u=76281980&t=44)** I encounter this in real world projects all the time.
>
> **[0:47](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/describe-data-demo-using-the-uci-heart-dataset?u=76281980&t=47)** The data collection might be ongoing.
>
> **[0:49](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/describe-data-demo-using-the-uci-heart-dataset?u=76281980&t=49)** This data is being collected.
>
> **[0:51](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/describe-data-demo-using-the-uci-heart-dataset?u=76281980&t=51)** It seems like measurements of patients basically at different locations.
>
> **[0:55](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/describe-data-demo-using-the-uci-heart-dataset?u=76281980&t=55)** So the measurements might be ongoing.
>
> **[0:57](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/describe-data-demo-using-the-uci-heart-dataset?u=76281980&t=57)** Meaning the amount of transactional data is increasing and the number of patients might be increasing as well or we might only have a sampling of the locations.
>
> **[1:06](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/describe-data-demo-using-the-uci-heart-dataset?u=76281980&t=66)** The reason I explain all this is that it's so important to look at data early when there is ongoing data collection.
>
> **[1:14](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/describe-data-demo-using-the-uci-heart-dataset?u=76281980&t=74)** Many analysts will make the mistake of waiting until the data's complete because we're all busy.
>
> **[1:20](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/describe-data-demo-using-the-uci-heart-dataset?u=76281980&t=80)** We have different things going on.
>
> **[1:21](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/describe-data-demo-using-the-uci-heart-dataset?u=76281980&t=81)** But the reason that is potentially a really critical error is that now is your opportunity to influence the data collection from a machine learning point of view.
>
> **[1:33](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/describe-data-demo-using-the-uci-heart-dataset?u=76281980&t=93)** Imagine that you've got heart doctors, and an IT team, perhaps, there's no one really thinking about it from the modeler's point of view.
>
> **[1:41](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/describe-data-demo-using-the-uci-heart-dataset?u=76281980&t=101)** And you might be able to intervene early to prevent a problem with data collection, which would be really powerful.
>
> **[1:49](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/describe-data-demo-using-the-uci-heart-dataset?u=76281980&t=109)** Let's scroll down and look at some of the details.
>
> **[1:51](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/describe-data-demo-using-the-uci-heart-dataset?u=76281980&t=111)** So we have a whole bunch of attributes, and I want to pause here for a moment because I see this phrase only 14 attributes used.
>
> **[2:02](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/describe-data-demo-using-the-uci-heart-dataset?u=76281980&t=122)** Please ignore that.
>
> **[2:04](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/describe-data-demo-using-the-uci-heart-dataset?u=76281980&t=124)** And let me explain why.
>
> **[2:05](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/describe-data-demo-using-the-uci-heart-dataset?u=76281980&t=125)** Obviously we want to attend to the doctors, the IT team, the subject matter experts.
>
> **[2:10](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/describe-data-demo-using-the-uci-heart-dataset?u=76281980&t=130)** However, this only 14 attributes used could be, those were the only attribute used in a executive dashboard or some other application.
>
> **[2:22](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/describe-data-demo-using-the-uci-heart-dataset?u=76281980&t=142)** We're doing a brand new project with a brand new purpose.
>
> **[2:25](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/describe-data-demo-using-the-uci-heart-dataset?u=76281980&t=145)** We cannot assume that what was used on a prior project is what we will use.
>
> **[2:31](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/describe-data-demo-using-the-uci-heart-dataset?u=76281980&t=151)** So please be so careful about that.
>
> **[2:34](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/describe-data-demo-using-the-uci-heart-dataset?u=76281980&t=154)** It's just really easy to say.
>
> **[2:37](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/describe-data-demo-using-the-uci-heart-dataset?u=76281980&t=157)** Oh, so and so said, I should only look at these 14 variables and then focus only on those.
>
> **[2:41](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/describe-data-demo-using-the-uci-heart-dataset?u=76281980&t=161)** It's almost always a mistake.
>
> **[2:43](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/describe-data-demo-using-the-uci-heart-dataset?u=76281980&t=163)** You really want to thoroughly vet things.
>
> **[2:45](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/describe-data-demo-using-the-uci-heart-dataset?u=76281980&t=165)** Now, you could do those 14 more carefully and the other columns more briskly, that's okay, but don't discount them altogether.
>
> **[2:55](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/describe-data-demo-using-the-uci-heart-dataset?u=76281980&t=175)** Take at least a quick peak.
>
> **[2:57](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/describe-data-demo-using-the-uci-heart-dataset?u=76281980&t=177)** So with that in mind, got an ID, we've got something CCF here that is basically a social security number.
>
> **[3:05](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/describe-data-demo-using-the-uci-heart-dataset?u=76281980&t=185)** Supposedly those were all replaced with a dummy value of zero, interesting.
>
> **[3:10](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/describe-data-demo-using-the-uci-heart-dataset?u=76281980&t=190)** Keep on going down to the bottom here.
>
> **[3:13](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/describe-data-demo-using-the-uci-heart-dataset?u=76281980&t=193)** And it's also interesting at the very bottom, there is a few columns that are explicitly listed as not used.
>
> **[3:20](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/describe-data-demo-using-the-uci-heart-dataset?u=76281980&t=200)** Perhaps they're going to be empty.
>
> **[3:22](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/describe-data-demo-using-the-uci-heart-dataset?u=76281980&t=202)** Column 75 junk, not used.
>
> **[3:24](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/describe-data-demo-using-the-uci-heart-dataset?u=76281980&t=204)** That's kind of a weird one.
>
> **[3:26](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/describe-data-demo-using-the-uci-heart-dataset?u=76281980&t=206)** 76, name.
>
> **[3:28](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/describe-data-demo-using-the-uci-heart-dataset?u=76281980&t=208)** This did have personal identifying information and it's been replaced with the dummy string name.
>
> **[3:34](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/describe-data-demo-using-the-uci-heart-dataset?u=76281980&t=214)** So let's take a look.
>
> **[3:35](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/describe-data-demo-using-the-uci-heart-dataset?u=76281980&t=215)** Now, going back up to the top, we've got a whole bunch of different data files here.
>
> **[3:40](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/describe-data-demo-using-the-uci-heart-dataset?u=76281980&t=220)** If we go to the data folder, or in fact here, it says, go into the data folder.
>
> **[3:46](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/describe-data-demo-using-the-uci-heart-dataset?u=76281980&t=226)** You can see there's a whole bunch of different files there.
>
> **[3:48](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/describe-data-demo-using-the-uci-heart-dataset?u=76281980&t=228)** I've consolidated them and provided them in a single Excel spreadsheet called UCI Heart in the originals folder.
>
> **[3:58](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/describe-data-demo-using-the-uci-heart-dataset?u=76281980&t=238)** Now remember when I modify files with solutions and so on, I put those in the solutions file.
>
> **[4:06](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/describe-data-demo-using-the-uci-heart-dataset?u=76281980&t=246)** And here we are in the UCI Heart spreadsheet.
>
> **[4:10](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/describe-data-demo-using-the-uci-heart-dataset?u=76281980&t=250)** Let's start looking at these variables.
>
> **[4:12](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/describe-data-demo-using-the-uci-heart-dataset?u=76281980&t=252)** Mow, supposedly we've got ID here, but boy I've could see some negative nines.
>
> **[4:18](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/describe-data-demo-using-the-uci-heart-dataset?u=76281980&t=258)** Now, negative nine, particularly in academic environments, also notice down at the very bottom blanks.
>
> **[4:24](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/describe-data-demo-using-the-uci-heart-dataset?u=76281980&t=264)** I'm just using the filter feature in Excel, keeping it simple.
>
> **[4:29](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/describe-data-demo-using-the-uci-heart-dataset?u=76281980&t=269)** Also seeing negative nine here in blanks.
>
> **[4:33](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/describe-data-demo-using-the-uci-heart-dataset?u=76281980&t=273)** Normally that wouldn't concern me, but for an ID field and for something that is a masked social security number, that seems very strange.
>
> **[4:43](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/describe-data-demo-using-the-uci-heart-dataset?u=76281980&t=283)** Age.
>
> **[4:45](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/describe-data-demo-using-the-uci-heart-dataset?u=76281980&t=285)** Now this is a pattern that's not quite as problematic, but also interesting.
>
> **[4:49](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/describe-data-demo-using-the-uci-heart-dataset?u=76281980&t=289)** We're seeing negative nine.
>
> **[4:51](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/describe-data-demo-using-the-uci-heart-dataset?u=76281980&t=291)** Now that doesn't surprise me because academic-oriented data sets will frequently use negative numbers to indicate missing instead of null.
>
> **[5:01](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/describe-data-demo-using-the-uci-heart-dataset?u=76281980&t=301)** Negative nine, negative 99, even negative 999 are all very popular.
>
> **[5:06](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/describe-data-demo-using-the-uci-heart-dataset?u=76281980&t=306)** I don't know when this trend started, but I've seen dozens of data sets with these negative nines.
>
> **[5:11](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/describe-data-demo-using-the-uci-heart-dataset?u=76281980&t=311)** So that's not a problem.
>
> **[5:13](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/describe-data-demo-using-the-uci-heart-dataset?u=76281980&t=313)** The problem is the combination of some ages that look like they're really ages, combined with the nine, the negative nines, no problem there, but then also the blanks and then also zeros.
>
> **[5:26](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/describe-data-demo-using-the-uci-heart-dataset?u=76281980&t=326)** So it seems like we have different flavors of missing data, and that would start to make me a little nervous.
>
> **[5:33](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/describe-data-demo-using-the-uci-heart-dataset?u=76281980&t=333)** And then we get into some variables where we would expect to see negative nine with some regularity, the actual measurements, sometimes the measurements will be missing.
>
> **[5:41](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/describe-data-demo-using-the-uci-heart-dataset?u=76281980&t=341)** Negative 69 is a little bit odd.
>
> **[5:44](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/describe-data-demo-using-the-uci-heart-dataset?u=76281980&t=344)** Let's go to the far right-hand side, because remember we were told to expect a name column.
>
> **[5:52](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/describe-data-demo-using-the-uci-heart-dataset?u=76281980&t=352)** Let's actually look at location.
>
> **[5:53](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/describe-data-demo-using-the-uci-heart-dataset?u=76281980&t=353)** That's an important one.
>
> **[5:55](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/describe-data-demo-using-the-uci-heart-dataset?u=76281980&t=355)** It looks like the locations look good, but we've got negative nine in this junk column, but also stuff that doesn't look like junk.
>
> **[6:06](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/describe-data-demo-using-the-uci-heart-dataset?u=76281980&t=366)** And then in the name column, we have all kinds of stuff that doesn't look like names.
>
> **[6:11](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/describe-data-demo-using-the-uci-heart-dataset?u=76281980&t=371)** Very problematic.
>
> **[6:13](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/describe-data-demo-using-the-uci-heart-dataset?u=76281980&t=373)** Take a look.
>
> **[6:14](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/describe-data-demo-using-the-uci-heart-dataset?u=76281980&t=374)** Let's remove the names and look at all the stuff that aren't proper names.
>
> **[6:21](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/describe-data-demo-using-the-uci-heart-dataset?u=76281980&t=381)** These rows look very troublesome.
>
> **[6:24](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/describe-data-demo-using-the-uci-heart-dataset?u=76281980&t=384)** They just don't look right at all.
>
> **[6:26](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/describe-data-demo-using-the-uci-heart-dataset?u=76281980&t=386)** Let's go back to all data.
>
> **[6:30](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/describe-data-demo-using-the-uci-heart-dataset?u=76281980&t=390)** And go to the far left-hand side here.
>
> **[6:34](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/describe-data-demo-using-the-uci-heart-dataset?u=76281980&t=394)** Under ID, again, let's look only at the negative nines for ID.
>
> **[6:41](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/describe-data-demo-using-the-uci-heart-dataset?u=76281980&t=401)** You know what catches my attention too, is that there's four rows like this.
>
> **[6:46](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/describe-data-demo-using-the-uci-heart-dataset?u=76281980&t=406)** You might think why is that interesting?
>
> **[6:48](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/describe-data-demo-using-the-uci-heart-dataset?u=76281980&t=408)** Well, we've got four locations.
>
> **[6:51](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/describe-data-demo-using-the-uci-heart-dataset?u=76281980&t=411)** So if I have four rows and four locations, I immediately think that there's some kind of header row or a trailing row.
>
> **[7:02](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/describe-data-demo-using-the-uci-heart-dataset?u=76281980&t=422)** Maybe the row at the bottom of some data, that's a summary row of some kind or a blank row in between the locations.
>
> **[7:10](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/describe-data-demo-using-the-uci-heart-dataset?u=76281980&t=430)** You have to imagine that these are documents that are being combined or machines are generating those data.
>
> **[7:18](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/describe-data-demo-using-the-uci-heart-dataset?u=76281980&t=438)** The measurements are done and typed into a machine by someone in a medical facility and that it all gets pulled into the system.
>
> **[7:25](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/describe-data-demo-using-the-uci-heart-dataset?u=76281980&t=445)** You look for things like that.
>
> **[7:26](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/describe-data-demo-using-the-uci-heart-dataset?u=76281980&t=446)** So I don't think it's a coincidence, four locations, four blank rows.
>
> **[7:30](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/describe-data-demo-using-the-uci-heart-dataset?u=76281980&t=450)** So this is what I would be focused on next.
>
> **[7:34](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/describe-data-demo-using-the-uci-heart-dataset?u=76281980&t=454)** This is different than missing data.
>
> **[7:36](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/describe-data-demo-using-the-uci-heart-dataset?u=76281980&t=456)** This is potentially a data loading problem or a data dictionary problem.
>
> **[7:41](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/describe-data-demo-using-the-uci-heart-dataset?u=76281980&t=461)** So it really falls fully under collect initial data and the tasks within that.
>
> **[7:47](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/describe-data-demo-using-the-uci-heart-dataset?u=76281980&t=467)** So I would want to very rapidly diagnose this and get it in front of a subject matter expert.
>
> **[7:54](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/describe-data-demo-using-the-uci-heart-dataset?u=76281980&t=474)** So let me go back to all data and tell you exactly what I would probably do.
>
> **[8:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/describe-data-demo-using-the-uci-heart-dataset?u=76281980&t=480)** I would add a new sheet.
>
> **[8:03](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/describe-data-demo-using-the-uci-heart-dataset?u=76281980&t=483)** I would call the sheet discards and the rows that I would contemplate removing because they seem like they're not data.
>
> **[8:14](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/describe-data-demo-using-the-uci-heart-dataset?u=76281980&t=494)** Like there's some kind of a problem there.
>
> **[8:16](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/describe-data-demo-using-the-uci-heart-dataset?u=76281980&t=496)** I would cut them from the main sheet and paste them into the discard sheet and then schedule a meeting with a subject matter expert.
>
> **[8:26](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/describe-data-demo-using-the-uci-heart-dataset?u=76281980&t=506)** So those are my initial reactions, some of my thoughts, but that would be the first thing on my mind.
>
> **[8:32](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/describe-data-demo-using-the-uci-heart-dataset?u=76281980&t=512)** What rows are potentially bad rows and how to document those rows and get my questions in front of an expert.

> [!info]- Semantic Content
>
> **Code Keywords:** let (11), this. (1)
> **Env Vars:** uci (3), ccf (1)
> **UI Navigation:** go to (3), scroll down (1)
> **Definitions:** is a  (4)
> **CLI Commands:** make (3)
> **Analogies:** imagine (3)
> **Cross-References:** go back to (2)
> **Speakers:** - [instructor] (1)

#### Challenge: Practice describe data with the UCI heart dataset
> [LinkedIn Learning](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-practice-describe-data-with-the-uci-heart-dataset?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-practice-describe-data-with-the-uci-heart-dataset?u=76281980&t=0)** (electronic music)
>
> **[0:05](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-practice-describe-data-with-the-uci-heart-dataset?u=76281980&t=5)** - [Instructor] Okay, we're going to continue working in the same spreadsheet with that added discards tab, which is currently empty.
>
> **[0:15](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-practice-describe-data-with-the-uci-heart-dataset?u=76281980&t=15)** And that's your next challenge.
>
> **[0:17](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-practice-describe-data-with-the-uci-heart-dataset?u=76281980&t=17)** To pick up where we left off, there's clearly some problematic data here in the UCI Heart spreadsheet.
>
> **[0:25](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-practice-describe-data-with-the-uci-heart-dataset?u=76281980&t=25)** Identify the rows that you think are the most suspicious, not merely missing, problematic and reflective of a data loading problem.
>
> **[0:35](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-practice-describe-data-with-the-uci-heart-dataset?u=76281980&t=35)** Cut and paste them into the discards tab as if you were preparing for a meeting with a subject matter expert.
>
> **[0:43](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-practice-describe-data-with-the-uci-heart-dataset?u=76281980&t=43)** So specifically, here's your challenge.
>
> **[0:46](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-practice-describe-data-with-the-uci-heart-dataset?u=76281980&t=46)** Identify rows that looked like they don't belong, cut them from the Data tab, and place them in the Discards tab as if you were preparing for a meeting with a subject matter expert.
>
> **[0:56](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-practice-describe-data-with-the-uci-heart-dataset?u=76281980&t=56)** And this should take a good 10 minutes, since you're not very familiar with the data file yet.
>
> **[1:02](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-practice-describe-data-with-the-uci-heart-dataset?u=76281980&t=62)** The simple act of identifying the bad rows might be a bit quicker, but you want some familiarity with the data first.
>
> **[1:10](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-practice-describe-data-with-the-uci-heart-dataset?u=76281980&t=70)** Good luck.

> [!info]- Semantic Content
>
> **Code Keywords:** continue (1)
> **Env Vars:** uci (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (electronic music) (1)

#### Solution: Practice describe data with the UCI heart dataset
> [LinkedIn Learning](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-practice-describe-data-with-the-uci-heart-dataset?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-practice-describe-data-with-the-uci-heart-dataset?u=76281980&t=0)** - [Instructor] Okay, let's review what I've done.
>
> **[0:08](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-practice-describe-data-with-the-uci-heart-dataset?u=76281980&t=8)** So I started by going through and looking for IDs that were strange because it seems to me that's a variable that should be present and consistent.
>
> **[0:20](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-practice-describe-data-with-the-uci-heart-dataset?u=76281980&t=20)** Then remember that this column, column B is supposed to always be a zero.
>
> **[0:25](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-practice-describe-data-with-the-uci-heart-dataset?u=76281980&t=25)** It's where their social security numbers were.
>
> **[0:28](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-practice-describe-data-with-the-uci-heart-dataset?u=76281980&t=28)** So I was focused on that as well.
>
> **[0:31](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-practice-describe-data-with-the-uci-heart-dataset?u=76281980&t=31)** Notice that the ages now are all within a reasonable range.
>
> **[0:34](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-practice-describe-data-with-the-uci-heart-dataset?u=76281980&t=34)** There's no negative nine for age.
>
> **[0:36](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-practice-describe-data-with-the-uci-heart-dataset?u=76281980&t=36)** Very few rows were taken out by the way, sex variables are now consistent, no negative nines.
>
> **[0:42](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-practice-describe-data-with-the-uci-heart-dataset?u=76281980&t=42)** Again, that would normally be something basic information that you would have for everybody.
>
> **[0:47](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-practice-describe-data-with-the-uci-heart-dataset?u=76281980&t=47)** Then we get into a whole bunch of columns that we expect there to be some missing data, and we don't attribute to a data loading problem.
>
> **[0:54](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-practice-describe-data-with-the-uci-heart-dataset?u=76281980&t=54)** If you go to the far right-hand side, the rows that I've taken out, junk still looks a bit strange.
>
> **[1:03](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-practice-describe-data-with-the-uci-heart-dataset?u=76281980&t=63)** But after all the column is called junk, and it said that it's not used, who knows what the legacy is there.
>
> **[1:08](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-practice-describe-data-with-the-uci-heart-dataset?u=76281980&t=68)** My guess would be that it was used in some locations differently than other locations who knows.
>
> **[1:16](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-practice-describe-data-with-the-uci-heart-dataset?u=76281980&t=76)** But name is something that you really shouldn't expect a lot of problems.
>
> **[1:21](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-practice-describe-data-with-the-uci-heart-dataset?u=76281980&t=81)** I actually see that there's still a couple of negative nines there.
>
> **[1:25](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-practice-describe-data-with-the-uci-heart-dataset?u=76281980&t=85)** Most of them are there, but let's look just at the negative nines.
>
> **[1:33](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-practice-describe-data-with-the-uci-heart-dataset?u=76281980&t=93)** We might have one more row that we have to deal with going to the far left-hand side.
>
> **[1:38](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-practice-describe-data-with-the-uci-heart-dataset?u=76281980&t=98)** We have an ID that looks like it's okay.
>
> **[1:41](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-practice-describe-data-with-the-uci-heart-dataset?u=76281980&t=101)** Age and sex look okay, but negative nine for name.
>
> **[1:47](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-practice-describe-data-with-the-uci-heart-dataset?u=76281980&t=107)** I would err on the side of caution here and also bring that row over.
>
> **[1:54](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-practice-describe-data-with-the-uci-heart-dataset?u=76281980&t=114)** So cut and over to discards.
>
> **[2:01](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-practice-describe-data-with-the-uci-heart-dataset?u=76281980&t=121)** And here we go.
>
> **[2:02](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-practice-describe-data-with-the-uci-heart-dataset?u=76281980&t=122)** So this is the discards tab and I've got blank rows in here I've added comments actually to indicate why I took certain things out.
>
> **[2:11](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-practice-describe-data-with-the-uci-heart-dataset?u=76281980&t=131)** This doesn't have to be perfect.
>
> **[2:13](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-practice-describe-data-with-the-uci-heart-dataset?u=76281980&t=133)** The data sheet doesn't have to be perfect to this point and the discards doesn't have to be perfect.
>
> **[2:18](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-practice-describe-data-with-the-uci-heart-dataset?u=76281980&t=138)** Now you do want to delete rows that you've cut the information out of so that you have complete data, but going back to the discards here, let's remember what the purpose is.
>
> **[2:32](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-practice-describe-data-with-the-uci-heart-dataset?u=76281980&t=152)** The purpose is to have a few examples of each kind of potential error so it can be put in front of an expert, and we've accomplished that nicely.
>
> **[2:43](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-practice-describe-data-with-the-uci-heart-dataset?u=76281980&t=163)** So if your discards tab looks anything like mine, it doesn't have to be perfect, then you've accomplished the mission.
>
> **[2:51](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-practice-describe-data-with-the-uci-heart-dataset?u=76281980&t=171)** But that doesn't mean that we're finished.
>
> **[2:53](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-practice-describe-data-with-the-uci-heart-dataset?u=76281980&t=173)** We have a lot of unfinished business if we were to claim that we've completed the first half of data understanding.
>
> **[3:01](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-practice-describe-data-with-the-uci-heart-dataset?u=76281980&t=181)** Here's just a handful of those unresolved issues.
>
> **[3:06](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-practice-describe-data-with-the-uci-heart-dataset?u=76281980&t=186)** We have to have a level of measurement and notes for all of the input variables and our target.
>
> **[3:13](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-practice-describe-data-with-the-uci-heart-dataset?u=76281980&t=193)** We have to start to turn our attention from bad rows to true missing data.
>
> **[3:18](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-practice-describe-data-with-the-uci-heart-dataset?u=76281980&t=198)** All those negative nines.
>
> **[3:20](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-practice-describe-data-with-the-uci-heart-dataset?u=76281980&t=200)** We have to count up the IDs.
>
> **[3:21](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-practice-describe-data-with-the-uci-heart-dataset?u=76281980&t=201)** We have a lot of duplicate IDs collectively and by location.
>
> **[3:27](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-practice-describe-data-with-the-uci-heart-dataset?u=76281980&t=207)** How many unique IDs do we actually have?
>
> **[3:31](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-practice-describe-data-with-the-uci-heart-dataset?u=76281980&t=211)** We have to start the conversation about what's our unit of analysis.
>
> **[3:35](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-practice-describe-data-with-the-uci-heart-dataset?u=76281980&t=215)** Are we looking at the row of data that we're actually going to model?
>
> **[3:39](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-practice-describe-data-with-the-uci-heart-dataset?u=76281980&t=219)** Some kind of transactional row or are we going to be analyzing at the patient row?
>
> **[3:44](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-practice-describe-data-with-the-uci-heart-dataset?u=76281980&t=224)** And if so, do we have enough?
>
> **[3:47](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-practice-describe-data-with-the-uci-heart-dataset?u=76281980&t=227)** What other locations are going to come on board?
>
> **[3:49](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-practice-describe-data-with-the-uci-heart-dataset?u=76281980&t=229)** So we have lots of questions that we would have to resolve, but for now we've accomplished our challenge and solution.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), delete (1)
> **UI Navigation:** go to (1)
> **Definitions:** is called (1)
> **Warnings:** caution (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 7. Explore Data Basics

#### The explore data task
> [LinkedIn Learning](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/the-explore-data-task?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/the-explore-data-task?u=76281980&t=0)** - [Instructor] The explore data task is the bulk of the effort that you will spend on the entire phase.
>
> **[0:06](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/the-explore-data-task?u=76281980&t=6)** And it's easy to get distracted because you'll make some interesting discoveries along the way.
>
> **[0:11](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/the-explore-data-task?u=76281980&t=11)** It will feel almost like routine reporting and data visualization at times.
>
> **[0:16](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/the-explore-data-task?u=76281980&t=16)** But remember that we have somewhat different priorities.
>
> **[0:21](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/the-explore-data-task?u=76281980&t=21)** Try to remember that you're especially focused on things that look out of place.
>
> **[0:25](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/the-explore-data-task?u=76281980&t=25)** The reason that outliers, quirks, and various oddities deserve your attention is that you'll need to chat with a subject matter expert about them, so you'll want to discover them early.
>
> **[0:35](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/the-explore-data-task?u=76281980&t=35)** Basically anything that makes you wonder if it's the real value or might possibly be a mistake.
>
> **[0:41](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/the-explore-data-task?u=76281980&t=41)** So how do you go about it?
>
> **[0:43](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/the-explore-data-task?u=76281980&t=43)** Based upon the level of measurement run basic stats in simple graphics, you're looking for anything interesting that either indicates that a variable might be promising, that you have a question for an SME, or that something needs to be fixed during data prep.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Env Vars:** sme (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### How to be effective doing univariate analysis and data visualization
> [LinkedIn Learning](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-doing-univariate-analysis-and-data-visualization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-doing-univariate-analysis-and-data-visualization?u=76281980&t=0)** - There are rules for how to perform Univariate analysis and data Visualization.
>
> **[0:06](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-doing-univariate-analysis-and-data-visualization?u=76281980&t=6)** Univariate simply means looking at one variable at a time.
>
> **[0:09](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-doing-univariate-analysis-and-data-visualization?u=76281980&t=9)** These rules date all the way back to Stevens in his article, "Introducing Level of Measurement."
>
> **[0:16](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-doing-univariate-analysis-and-data-visualization?u=76281980&t=16)** Not only are they what others are going to expect, an increasing number of automated software packages will automatically generate output based on these rules.
>
> **[0:28](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-doing-univariate-analysis-and-data-visualization?u=76281980&t=28)** So you really should be familiar with them.
>
> **[0:31](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-doing-univariate-analysis-and-data-visualization?u=76281980&t=31)** Let's start with the highest level, Scale.
>
> **[0:34](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-doing-univariate-analysis-and-data-visualization?u=76281980&t=34)** And you really can describe it as the highest level because it has the most information content, and therefore you can run the most tests on it.
>
> **[0:44](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-doing-univariate-analysis-and-data-visualization?u=76281980&t=44)** The rules say to run just the Mean, but I always run both Mean and Median.
>
> **[0:51](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-doing-univariate-analysis-and-data-visualization?u=76281980&t=51)** Because if the Mean is much higher than the Median it indicates a skew to the data.
>
> **[0:58](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-doing-univariate-analysis-and-data-visualization?u=76281980&t=58)** So what about min, max and standard deviation?
>
> **[1:01](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-doing-univariate-analysis-and-data-visualization?u=76281980&t=61)** Well, with Scale variables we're looking at a continuous distribution of data and we want to see the shape.
>
> **[1:09](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-doing-univariate-analysis-and-data-visualization?u=76281980&t=69)** We don't necessarily require a bell curve, but we want to know if the data is a bell curve shape or some other shape.
>
> **[1:17](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-doing-univariate-analysis-and-data-visualization?u=76281980&t=77)** So the data visualization option should always be a Histogram.
>
> **[1:24](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-doing-univariate-analysis-and-data-visualization?u=76281980&t=84)** In contrast, Ordinal variables must have a Bar chart, not a Histogram.
>
> **[1:32](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-doing-univariate-analysis-and-data-visualization?u=76281980&t=92)** A Histogram will just conceal the real pattern.
>
> **[1:35](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-doing-univariate-analysis-and-data-visualization?u=76281980&t=95)** Ordinal categories while ordered are separate and distinct, that's why Bar charts have those gaps in between.
>
> **[1:45](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-doing-univariate-analysis-and-data-visualization?u=76281980&t=105)** Ordinal variables have a unique set of characteristics.
>
> **[1:48](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-doing-univariate-analysis-and-data-visualization?u=76281980&t=108)** They lack something that Scale variables have.
>
> **[1:51](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-doing-univariate-analysis-and-data-visualization?u=76281980&t=111)** With Scale variables the gap between $1 and $2 is the same as $101 and $102.
>
> **[1:59](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-doing-univariate-analysis-and-data-visualization?u=76281980&t=119)** With Ordinal you don't know that the time gap between the first placed finisher and the second is the same as the gap between the second and the third.
>
> **[2:10](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-doing-univariate-analysis-and-data-visualization?u=76281980&t=130)** So you should use Medians and not Means, and always Bar charts, but never Histograms.
>
> **[2:18](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-doing-univariate-analysis-and-data-visualization?u=76281980&t=138)** Nominal variables don't allow for very much.
>
> **[2:22](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-doing-univariate-analysis-and-data-visualization?u=76281980&t=142)** All we can really do is count.
>
> **[2:25](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-doing-univariate-analysis-and-data-visualization?u=76281980&t=145)** We're interested in which categories are common and which are rare, that's about it.
>
> **[2:32](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-doing-univariate-analysis-and-data-visualization?u=76281980&t=152)** So we're really identifying that most common category, the Mode, and running Bar charts.
>
> **[2:39](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-doing-univariate-analysis-and-data-visualization?u=76281980&t=159)** There is very little else that makes sense for nominal variables.
>
> **[2:44](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-doing-univariate-analysis-and-data-visualization?u=76281980&t=164)** I often focus my attention instead, when working with nominal variables, to running simple aggregations in sorting so that I can clearly see how well the categories are populated.
>
> **[2:58](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-doing-univariate-analysis-and-data-visualization?u=76281980&t=178)** Univariates are important, but they can be done very quickly.
>
> **[3:02](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-doing-univariate-analysis-and-data-visualization?u=76281980&t=182)** Just use the rules to run rapidly through each variable, and don't overthink it.
>
> **[3:08](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-doing-univariate-analysis-and-data-visualization?u=76281980&t=188)** And if you have the benefit of automation within your software, you can examine the results at a pace of about one minute per variable, or even less.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), require (1)
> **Definitions:** is a  (1)
> **Speakers:** - there (1)

#### Anscombe's quartet
> [LinkedIn Learning](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/anscombe-s-quartet?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/anscombe-s-quartet?u=76281980&t=0)** - [Instructor] Okay, let's talk about Anscombe's quartet.
>
> **[0:03](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/anscombe-s-quartet?u=76281980&t=3)** This data, which you can find in the Originals folder, was developed by a statistician named Francis Anscombe way back in 1973.
>
> **[0:12](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/anscombe-s-quartet?u=76281980&t=12)** It has become justifiably famous as a cautionary tale.
>
> **[0:17](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/anscombe-s-quartet?u=76281980&t=17)** What he's trying to caution us about is don't pay attention only to descriptive statistics, and the absence of a graphical representation.
>
> **[0:28](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/anscombe-s-quartet?u=76281980&t=28)** So here's the trick.
>
> **[0:29](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/anscombe-s-quartet?u=76281980&t=29)** To understand what this demonstration is all about, you want to treat these various pairs almost as if they're separate datasets.
>
> **[0:37](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/anscombe-s-quartet?u=76281980&t=37)** We have an X1, Y1 pair, X2, Y2, X3, Y3 and so on.
>
> **[0:45](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/anscombe-s-quartet?u=76281980&t=45)** So let's first do some basic descriptive statistics.
>
> **[0:48](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/anscombe-s-quartet?u=76281980&t=48)** We can keep it very basic indeed.
>
> **[0:50](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/anscombe-s-quartet?u=76281980&t=50)** I'll go ahead and calculate an average here and then I'll close off the parens and we see that we get an average.
>
> **[1:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/anscombe-s-quartet?u=76281980&t=60)** And I'm just going to drag that across so that we can get an average for everything.
>
> **[1:03](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/anscombe-s-quartet?u=76281980&t=63)** And what do we have?
>
> **[1:05](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/anscombe-s-quartet?u=76281980&t=65)** We've got an average of nine on all of the X variables and an average of 7.5 on all of the Y variables.
>
> **[1:14](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/anscombe-s-quartet?u=76281980&t=74)** Now again, imagine that these are four different datasets and you're predicting Y with X.
>
> **[1:21](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/anscombe-s-quartet?u=76281980&t=81)** So, so far, so good but it looks like all the datasets are pretty much the same according to the descriptive statistics.
>
> **[1:28](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/anscombe-s-quartet?u=76281980&t=88)** So let's do a little bit more sophisticated.
>
> **[1:31](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/anscombe-s-quartet?u=76281980&t=91)** Let's just bring in a correlation.
>
> **[1:33](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/anscombe-s-quartet?u=76281980&t=93)** So I can say equals and start to signal to it that I want to do a Pearson correlation.
>
> **[1:39](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/anscombe-s-quartet?u=76281980&t=99)** I'm doing this in Excel to keep it simple.
>
> **[1:42](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/anscombe-s-quartet?u=76281980&t=102)** We obviously could look at this data in any number of places.
>
> **[1:46](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/anscombe-s-quartet?u=76281980&t=106)** So I'm going to take all the X variables and correlate them with the Y variables.
>
> **[1:53](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/anscombe-s-quartet?u=76281980&t=113)** Looks like we have a correlation of .82.
>
> **[1:56](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/anscombe-s-quartet?u=76281980&t=116)** And if I bring that across, if I'm pasting carefully, I should be able to show that I'm repeating that Pearson for each of those X-Y pairs.
>
> **[2:08](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/anscombe-s-quartet?u=76281980&t=128)** Notice up in the Formula bar, it's doing a Pearson, so I'm not copying and pasting the value, I'm copying and pasting the formula, okay?
>
> **[2:16](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/anscombe-s-quartet?u=76281980&t=136)** So far, so good.
>
> **[2:17](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/anscombe-s-quartet?u=76281980&t=137)** It looks like all of these pairs are telling us the same story about the data.
>
> **[2:23](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/anscombe-s-quartet?u=76281980&t=143)** So let's bring in the graphics.
>
> **[2:25](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/anscombe-s-quartet?u=76281980&t=145)** Let's run some scatterplots.
>
> **[2:29](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/anscombe-s-quartet?u=76281980&t=149)** So I'm going to go ahead and highlight my X and Y pair here.
>
> **[2:34](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/anscombe-s-quartet?u=76281980&t=154)** Insert.
>
> **[2:37](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/anscombe-s-quartet?u=76281980&t=157)** Here am are my various charts and I'm going to do an X-Y scatter.
>
> **[2:43](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/anscombe-s-quartet?u=76281980&t=163)** There we go.
>
> **[2:44](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/anscombe-s-quartet?u=76281980&t=164)** It doesn't look too surprising.
>
> **[2:47](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/anscombe-s-quartet?u=76281980&t=167)** Let's add a trendline though.
>
> **[2:51](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/anscombe-s-quartet?u=76281980&t=171)** Okay, so I'm going to go in here and I want a trendline and I'll do a linear trendline.
>
> **[2:55](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/anscombe-s-quartet?u=76281980&t=175)** Look at that, no big surprises.
>
> **[2:57](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/anscombe-s-quartet?u=76281980&t=177)** Let's do it again for the X2, Y2 pair.
>
> **[3:02](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/anscombe-s-quartet?u=76281980&t=182)** Highlight those, same thing.
>
> **[3:06](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/anscombe-s-quartet?u=76281980&t=186)** Insert, Chart, Scatterplot.
>
> **[3:11](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/anscombe-s-quartet?u=76281980&t=191)** There we go.
>
> **[3:12](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/anscombe-s-quartet?u=76281980&t=192)** Oh, that looks different, doesn't it?
>
> **[3:13](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/anscombe-s-quartet?u=76281980&t=193)** That has really strong curvilinear in it.
>
> **[3:16](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/anscombe-s-quartet?u=76281980&t=196)** I'll go ahead and add the trendline again.
>
> **[3:20](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/anscombe-s-quartet?u=76281980&t=200)** I bet you can see where this is going.
>
> **[3:24](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/anscombe-s-quartet?u=76281980&t=204)** Look at that.
>
> **[3:26](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/anscombe-s-quartet?u=76281980&t=206)** The trendline is actually identical.
>
> **[3:27](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/anscombe-s-quartet?u=76281980&t=207)** In fact, if you were to run a linear regression, you would get the same coefficients in everything.
>
> **[3:31](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/anscombe-s-quartet?u=76281980&t=211)** So I'm sure you can see where this is going but let's continue.
>
> **[3:40](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/anscombe-s-quartet?u=76281980&t=220)** Insert, now I can do this with the ribbon or I can do, and the menus doesn't matter.
>
> **[3:47](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/anscombe-s-quartet?u=76281980&t=227)** Oh, look at this one, really interesting.
>
> **[3:49](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/anscombe-s-quartet?u=76281980&t=229)** It's got a really, really strong linear pattern but with an outlier.
>
> **[3:54](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/anscombe-s-quartet?u=76281980&t=234)** Let's add that trendline.
>
> **[3:59](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/anscombe-s-quartet?u=76281980&t=239)** Look at that.
>
> **[4:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/anscombe-s-quartet?u=76281980&t=240)** Isn't that something?
>
> **[4:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/anscombe-s-quartet?u=76281980&t=240)** This really is a brilliant demonstration and of course, Anscombe himself gets all the credit because he cleverly came up with this dataset.
>
> **[4:09](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/anscombe-s-quartet?u=76281980&t=249)** No one actually knows exactly what he did to dream up this dataset but a lot of people have tried to imitate his work since then and with interesting results.
>
> **[4:17](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/anscombe-s-quartet?u=76281980&t=257)** Let's do the final one.
>
> **[4:20](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/anscombe-s-quartet?u=76281980&t=260)** Yeah, and look at this.
>
> **[4:21](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/anscombe-s-quartet?u=76281980&t=261)** You've got this really, really strong vertical pattern.
>
> **[4:25](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/anscombe-s-quartet?u=76281980&t=265)** You're going straight up.
>
> **[4:27](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/anscombe-s-quartet?u=76281980&t=267)** But with this crazy outlier and I'm sure you've picked up on the pattern now.
>
> **[4:32](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/anscombe-s-quartet?u=76281980&t=272)** You can see where this is going to go.
>
> **[4:34](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/anscombe-s-quartet?u=76281980&t=274)** The trendline is in an identical location.
>
> **[4:38](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/anscombe-s-quartet?u=76281980&t=278)** Really something.
>
> **[4:40](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/anscombe-s-quartet?u=76281980&t=280)** I had a fascinating experience once.
>
> **[4:42](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/anscombe-s-quartet?u=76281980&t=282)** I ran these Anscombe quartet pairs through an automatic modeler, automatic data prep was done and then the modeling was automatically done.
>
> **[4:53](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/anscombe-s-quartet?u=76281980&t=293)** And it managed to fool the system.
>
> **[4:56](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/anscombe-s-quartet?u=76281980&t=296)** All four pairs were treated the same way.
>
> **[5:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/anscombe-s-quartet?u=76281980&t=300)** I don't blame the folks that designed it.
>
> **[5:03](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/anscombe-s-quartet?u=76281980&t=303)** The whole point of this dataset was to reveal this trick.
>
> **[5:07](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/anscombe-s-quartet?u=76281980&t=307)** But it managed to fool the auto data prep and I think that's a cautionary tale as well.
>
> **[5:13](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/anscombe-s-quartet?u=76281980&t=313)** I want to close by showing you something that's bound to give you a smile and that's a more recent attempt to imitate what Anscombe was doing.
>
> **[5:24](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/anscombe-s-quartet?u=76281980&t=324)** Some folks came up with a really interesting idea.
>
> **[5:27](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/anscombe-s-quartet?u=76281980&t=327)** They said if Anscombe can do four, maybe we can do several more than four.
>
> **[5:33](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/anscombe-s-quartet?u=76281980&t=333)** Maybe we can be a little bit more ambitious.
>
> **[5:35](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/anscombe-s-quartet?u=76281980&t=335)** And you can actually see all these different shapes.
>
> **[5:37](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/anscombe-s-quartet?u=76281980&t=337)** Let's scroll down.
>
> **[5:39](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/anscombe-s-quartet?u=76281980&t=339)** First, there's a neat little discussion of Anscombe's quartet there.
>
> **[5:43](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/anscombe-s-quartet?u=76281980&t=343)** But then as you go further down, and this is the one that's just a lot of fun, and here it is, the so-called Datasaurus Dozen.
>
> **[5:50](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/anscombe-s-quartet?u=76281980&t=350)** You can see the dinosaur up at the top there and the X, the Y, the standard deviations, the correlation, all the same and we have these crazy patterns.
>
> **[5:59](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/anscombe-s-quartet?u=76281980&t=359)** We have circles, we have Xs, we have stars and of course, the dinosaur.
>
> **[6:04](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/anscombe-s-quartet?u=76281980&t=364)** And that's just a lot of fun.
>
> **[6:05](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/anscombe-s-quartet?u=76281980&t=365)** So Anscombe really deserves a lot of credit for what he accomplished and I hope the lesson has sunk in.
>
> **[6:12](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/anscombe-s-quartet?u=76281980&t=372)** Descriptive statistics are important but be very careful to graph your data in addition to the descriptive statistics.
>
> **[6:21](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/anscombe-s-quartet?u=76281980&t=381)** Used alone, the descriptive statistics can fool you.

> [!info]- Semantic Content
>
> **Code Keywords:** let (12), continue (1), this. (1)
> **CLI Commands:** find (1)
> **Versions:** 7.5 (1)
> **UI Navigation:** scroll down (1)
> **Definitions:** is a  (1)
> **Analogies:** imagine (1)
> **Warnings:** caution (1)
> **Speakers:** - [instructor] (1)

#### The Data Explorer node feature in KNIME
> [LinkedIn Learning](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/the-data-explorer-node-feature-in-knime?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/the-data-explorer-node-feature-in-knime?u=76281980&t=0)** - [Instructor] Okay, here I am in KNIME.
>
> **[0:03](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/the-data-explorer-node-feature-in-knime?u=76281980&t=3)** All I have on the workflow is the census data set in its original form, being read in by an Excel reader.
>
> **[0:12](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/the-data-explorer-node-feature-in-knime?u=76281980&t=12)** Be careful that you've declared that headers are present.
>
> **[0:18](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/the-data-explorer-node-feature-in-knime?u=76281980&t=18)** I'm going to show the data set.
>
> **[0:23](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/the-data-explorer-node-feature-in-knime?u=76281980&t=23)** Because this is important to verify, critical really for our task.
>
> **[0:28](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/the-data-explorer-node-feature-in-knime?u=76281980&t=28)** You can see the little symbols here, I and S.
>
> **[0:32](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/the-data-explorer-node-feature-in-knime?u=76281980&t=32)** Without them, the tool that we're going to use would not work it has to recognize whether it's integer or a string, because that signals level of measurement and KNIME.
>
> **[0:47](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/the-data-explorer-node-feature-in-knime?u=76281980&t=47)** We'll close them.
>
> **[0:48](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/the-data-explorer-node-feature-in-knime?u=76281980&t=48)** So to find the note that we need, type in explore, and you're going to find the Data Explorer, which is part of the KNIME labs.
>
> **[0:58](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/the-data-explorer-node-feature-in-knime?u=76281980&t=58)** So if it's not coming up, you might have to install the extensions.
>
> **[1:03](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/the-data-explorer-node-feature-in-knime?u=76281980&t=63)** Go up to file, install KNIME extensions, and you should be all set.
>
> **[1:09](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/the-data-explorer-node-feature-in-knime?u=76281980&t=69)** But I already have it so I'm going to drag it over into place.
>
> **[1:13](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/the-data-explorer-node-feature-in-knime?u=76281980&t=73)** And this is really one of the motivating reasons to show you KNIME with a tool like this, there's so much that's been prepared for you that makes your work easier.
>
> **[1:25](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/the-data-explorer-node-feature-in-knime?u=76281980&t=85)** So what makes this tool special, the so called Data Explorer, is that it recognizes the level of measurement, again using that integer and string information, to automatically do an appropriate type of descriptive statistics as well as univariate graphics.
>
> **[1:47](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/the-data-explorer-node-feature-in-knime?u=76281980&t=107)** So let's right click execute and open views.
>
> **[1:52](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/the-data-explorer-node-feature-in-knime?u=76281980&t=112)** So this is the report that it generates.
>
> **[1:54](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/the-data-explorer-node-feature-in-knime?u=76281980&t=114)** And if we look here, we have a tab for numeric and we have a tab for nominal and we have a tab called Data Preview that shows us the original data.
>
> **[2:03](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/the-data-explorer-node-feature-in-knime?u=76281980&t=123)** Let's start with numeric.
>
> **[2:06](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/the-data-explorer-node-feature-in-knime?u=76281980&t=126)** It really is fabulous.
>
> **[2:07](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/the-data-explorer-node-feature-in-knime?u=76281980&t=127)** So as long as these variables have been correctly identified as numeric and nominal, it gives you just about everything you need from the standpoint of descriptive statistics.
>
> **[2:17](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/the-data-explorer-node-feature-in-knime?u=76281980&t=137)** You've got your minimum and maximum, you have your mean, you can request a median, it doesn't come up automatically because it's computationally intensive, but it's easily requested, you've got your standard deviation and so on.
>
> **[2:31](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/the-data-explorer-node-feature-in-knime?u=76281980&t=151)** Also on the far right-hand side and I love this, it has number of zeros, which can be very helpful and number of missing.
>
> **[2:41](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/the-data-explorer-node-feature-in-knime?u=76281980&t=161)** So what do we notice?
>
> **[2:42](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/the-data-explorer-node-feature-in-knime?u=76281980&t=162)** Age, we don't have anything bizarre, we don't have any negative values for instance.
>
> **[2:46](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/the-data-explorer-node-feature-in-knime?u=76281980&t=166)** Final weight, of course is not going to be important for us, we have education number ranging from one to 16.
>
> **[2:54](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/the-data-explorer-node-feature-in-knime?u=76281980&t=174)** But look at capital gain and capital loss, it's alerted us to the fact that the number of zeros is very very high, that's going to be a problem.
>
> **[3:02](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/the-data-explorer-node-feature-in-knime?u=76281980&t=182)** That's because most people simply don't have a capital gain or a capital loss in a given calendar year.
>
> **[3:09](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/the-data-explorer-node-feature-in-knime?u=76281980&t=189)** And then hours per week ranges from one all the way up to 99.
>
> **[3:12](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/the-data-explorer-node-feature-in-knime?u=76281980&t=192)** Gosh, that's an awfully long week.
>
> **[3:15](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/the-data-explorer-node-feature-in-knime?u=76281980&t=195)** What you can't see here visually, is that there's that spike at 40 but again, it's telling you a lot.
>
> **[3:22](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/the-data-explorer-node-feature-in-knime?u=76281980&t=202)** Let's switch over to nominal.
>
> **[3:24](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/the-data-explorer-node-feature-in-knime?u=76281980&t=204)** I prefer to have a bar chart for nominal variables, but it doesn't ultimately matter much.
>
> **[3:30](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/the-data-explorer-node-feature-in-knime?u=76281980&t=210)** Because when you have lots of nominal categories a chart of any kind isn't going to be especially useful.
>
> **[3:37](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/the-data-explorer-node-feature-in-knime?u=76281980&t=217)** But I really like a couple of things that KNIME has done here.
>
> **[3:41](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/the-data-explorer-node-feature-in-knime?u=76281980&t=221)** That ability to set a max number of categories is very important if you have hundreds of categories.
>
> **[3:46](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/the-data-explorer-node-feature-in-knime?u=76281980&t=226)** So make sure that you use that if you find it is taking too long to generate this report.
>
> **[3:52](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/the-data-explorer-node-feature-in-knime?u=76281980&t=232)** And I love the unique values columns, that makes it very easy to determine that number.
>
> **[3:59](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/the-data-explorer-node-feature-in-knime?u=76281980&t=239)** So for instance nine is not too bad, but 16 is getting into that high order nominal area and starts to cause a problem, I wouldn't want those 16 education categories to generate 15 dummy-coded variables.
>
> **[4:14](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/the-data-explorer-node-feature-in-knime?u=76281980&t=254)** So I might have to do some recoding, or think about that sum.
>
> **[4:17](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/the-data-explorer-node-feature-in-knime?u=76281980&t=257)** I also love that it lists all the values.
>
> **[4:20](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/the-data-explorer-node-feature-in-knime?u=76281980&t=260)** Now when you get to a larger number, sometimes you can't see them all, but again, this is very helpful indeed.
>
> **[4:26](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/the-data-explorer-node-feature-in-knime?u=76281980&t=266)** And then if I go to the Data Preview, that just allows me to not have to run a separate piece of output to look at the individual data.
>
> **[4:36](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/the-data-explorer-node-feature-in-knime?u=76281980&t=276)** You know, for those of you that are in Python fans, I know that you can generate a head or a tail and you can control how many rows.
>
> **[4:44](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/the-data-explorer-node-feature-in-knime?u=76281980&t=284)** But I have to admit that when I'm at this stage in the process, I really like to be able to scroll up and down into the data set and just get some basic familiarity with it.
>
> **[4:55](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/the-data-explorer-node-feature-in-knime?u=76281980&t=295)** So, this in and of itself, I think starts to build the argument to have access to a workbench just to be able to do certain tasks quickly.
>
> **[5:05](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/the-data-explorer-node-feature-in-knime?u=76281980&t=305)** Because here's a node that's been specifically developed just for this and it really helps out for this particular task of the data understanding phase.

> [!info]- Semantic Content
>
> **CLI Commands:** find (3), make (1), python (1), node (1)
> **Code Keywords:** let (3), this, (2), switch (1)
> **Env Vars:** knime (6)
> **UI Navigation:** go to (1), scroll up (1)
> **Analogies:** for instance (2)
> **Warnings:** be careful (1), note that (1)
> **Prerequisites:** install (2)
> **Cross-References:** coming up (1)

#### How to navigate borderline cases of variable type
> [LinkedIn Learning](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-navigate-borderline-cases-of-variable-type?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-navigate-borderline-cases-of-variable-type?u=76281980&t=0)** - [Instructor] Okay, we're in KNIME with the same dataset, and the same workflow.
>
> **[0:05](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-navigate-borderline-cases-of-variable-type?u=76281980&t=5)** So now what we're going to talk about is variables that seem like they might be one level of measurement but where there's some benefit to call them another level of measurement.
>
> **[0:16](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-navigate-borderline-cases-of-variable-type?u=76281980&t=16)** I'll illustrate with an example.
>
> **[0:18](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-navigate-borderline-cases-of-variable-type?u=76281980&t=18)** We're going to use hours.
>
> **[0:19](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-navigate-borderline-cases-of-variable-type?u=76281980&t=19)** So the way that we're supposed to look at hours is with a histogram.
>
> **[0:24](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-navigate-borderline-cases-of-variable-type?u=76281980&t=24)** So I start to types that in.
>
> **[0:26](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-navigate-borderline-cases-of-variable-type?u=76281980&t=26)** And there's an interactive histogram, which we can use.
>
> **[0:33](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-navigate-borderline-cases-of-variable-type?u=76281980&t=33)** We'll hook that up and when we go in, we don't want final weight, we want hours-per-week.
>
> **[0:40](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-navigate-borderline-cases-of-variable-type?u=76281980&t=40)** And we definitely want to display all rows.
>
> **[0:42](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-navigate-borderline-cases-of-variable-type?u=76281980&t=42)** Click on OK.
>
> **[0:45](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-navigate-borderline-cases-of-variable-type?u=76281980&t=45)** Execute and open views.
>
> **[0:49](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-navigate-borderline-cases-of-variable-type?u=76281980&t=49)** Okay, so we can see a pattern here.
>
> **[0:53](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-navigate-borderline-cases-of-variable-type?u=76281980&t=53)** We can see that the tallest bar up here appears to be 33 to 41.
>
> **[0:57](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-navigate-borderline-cases-of-variable-type?u=76281980&t=57)** Although 25 to 33 is a pretty tall bar as well.
>
> **[1:01](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-navigate-borderline-cases-of-variable-type?u=76281980&t=61)** The problem is we can't see who said exactly 40.
>
> **[1:04](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-navigate-borderline-cases-of-variable-type?u=76281980&t=64)** And just instinctively, we know that exactly 40 is going to be a common choice.
>
> **[1:10](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-navigate-borderline-cases-of-variable-type?u=76281980&t=70)** But the problem is is that histograms bin as we can see here.
>
> **[1:14](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-navigate-borderline-cases-of-variable-type?u=76281980&t=74)** Now, you can go to the bin settings and make it more granular.
>
> **[1:18](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-navigate-borderline-cases-of-variable-type?u=76281980&t=78)** So let's give that a try.
>
> **[1:19](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-navigate-borderline-cases-of-variable-type?u=76281980&t=79)** We'll go to the Bin Settings.
>
> **[1:21](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-navigate-borderline-cases-of-variable-type?u=76281980&t=81)** Increase this to 12.
>
> **[1:23](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-navigate-borderline-cases-of-variable-type?u=76281980&t=83)** Maybe further to 15 or so and it gets more granular and actually, interestingly enough, now 37 down to 32 is the tallest bar but we can't see those exact values.
>
> **[1:37](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-navigate-borderline-cases-of-variable-type?u=76281980&t=97)** Now, here's the problem.
>
> **[1:39](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-navigate-borderline-cases-of-variable-type?u=76281980&t=99)** It's not like folks are recording 39 hours and 45 minutes or 40 hours and 15 minutes, at least with regularity.
>
> **[1:48](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-navigate-borderline-cases-of-variable-type?u=76281980&t=108)** We're not really looking at fractions here.
>
> **[1:50](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-navigate-borderline-cases-of-variable-type?u=76281980&t=110)** We're really looking at whole numbers and probably whole numbers that clump around popular values.
>
> **[1:56](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-navigate-borderline-cases-of-variable-type?u=76281980&t=116)** We really have to examine that before we can decide whether it behaves like a scale or behaves like an ordinal, even though technically, it's a scale variable.
>
> **[2:07](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-navigate-borderline-cases-of-variable-type?u=76281980&t=127)** So let's take a look.
>
> **[2:09](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-navigate-borderline-cases-of-variable-type?u=76281980&t=129)** We're going to try a bar chart because that's what you would use with an ordinal variable.
>
> **[2:14](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-navigate-borderline-cases-of-variable-type?u=76281980&t=134)** Go over here, type in bar.
>
> **[2:19](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-navigate-borderline-cases-of-variable-type?u=76281980&t=139)** Now, remember, if you ever have trouble finding one of these, install the extensions.
>
> **[2:26](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-navigate-borderline-cases-of-variable-type?u=76281980&t=146)** And we're going to discover that we have a problem.
>
> **[2:29](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-navigate-borderline-cases-of-variable-type?u=76281980&t=149)** These are only displaying the string variables.
>
> **[2:32](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-navigate-borderline-cases-of-variable-type?u=76281980&t=152)** And hours per week is not a string variable.
>
> **[2:35](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-navigate-borderline-cases-of-variable-type?u=76281980&t=155)** So it's been filtered out.
>
> **[2:37](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-navigate-borderline-cases-of-variable-type?u=76281980&t=157)** What do we have to do?
>
> **[2:38](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-navigate-borderline-cases-of-variable-type?u=76281980&t=158)** We have to convert it.
>
> **[2:40](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-navigate-borderline-cases-of-variable-type?u=76281980&t=160)** So let's cancel out of here.
>
> **[2:42](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-navigate-borderline-cases-of-variable-type?u=76281980&t=162)** And I'm going to start typing in convert.
>
> **[2:46](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-navigate-borderline-cases-of-variable-type?u=76281980&t=166)** And this might seem surprising at first but what we need to do is convert it from a number to a string 'cause that's the easiest way to tell KNIME that we want it treated as an ordinal in our bar chart.
>
> **[3:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-navigate-borderline-cases-of-variable-type?u=76281980&t=180)** So let's go in the number to string conversion and hours-per-week is the only variable that we need to do.
>
> **[3:09](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-navigate-borderline-cases-of-variable-type?u=76281980&t=189)** Then go in here and now, we can choose our hours-per-week, okay?
>
> **[3:16](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-navigate-borderline-cases-of-variable-type?u=76281980&t=196)** Now, we want to sort bars alphabetically.
>
> **[3:20](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-navigate-borderline-cases-of-variable-type?u=76281980&t=200)** Otherwise, we're not going to be able to see the numbers in order, okay?
>
> **[3:25](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-navigate-borderline-cases-of-variable-type?u=76281980&t=205)** Now, remember, sometimes you're doing this with a nominal variable and you wouldn't have to worry about that but with an ordinal variable, we really want to have it in this particular order.
>
> **[3:35](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-navigate-borderline-cases-of-variable-type?u=76281980&t=215)** So we're going to click on OK.
>
> **[3:38](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-navigate-borderline-cases-of-variable-type?u=76281980&t=218)** We're going to execute in open views.
>
> **[3:42](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-navigate-borderline-cases-of-variable-type?u=76281980&t=222)** And wow, it is radically different and this is so important that we are seeing this.
>
> **[3:48](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-navigate-borderline-cases-of-variable-type?u=76281980&t=228)** If we hover down at the bottom, we can see that exactly 20 hours is popular.
>
> **[3:53](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-navigate-borderline-cases-of-variable-type?u=76281980&t=233)** I'll tell you what though, a little bit less than 20 and a little bit more than 20, not so popular.
>
> **[3:58](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-navigate-borderline-cases-of-variable-type?u=76281980&t=238)** 30 hours a week is a popular choice.
>
> **[4:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-navigate-borderline-cases-of-variable-type?u=76281980&t=240)** 35 is a popular choice.
>
> **[4:02](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-navigate-borderline-cases-of-variable-type?u=76281980&t=242)** 40 is overwhelmingly a popular choice as is 45 as is 50 as is 60.
>
> **[4:09](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-navigate-borderline-cases-of-variable-type?u=76281980&t=249)** I don't think anyone is going to be surprised by this but the histogram was not revealing this.
>
> **[4:16](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-navigate-borderline-cases-of-variable-type?u=76281980&t=256)** Recognize that the algorithm isn't going to pick up on the patterns either.
>
> **[4:22](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-navigate-borderline-cases-of-variable-type?u=76281980&t=262)** So we probably have to bin this.
>
> **[4:25](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-navigate-borderline-cases-of-variable-type?u=76281980&t=265)** Please do not draw the conclusion that therefore we should treat all of our scale variables in this way.
>
> **[4:32](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-navigate-borderline-cases-of-variable-type?u=76281980&t=272)** The reason that this is special is we can see these dramatic clumps that it really doesn't look even remotely like a bell curve.
>
> **[4:41](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-navigate-borderline-cases-of-variable-type?u=76281980&t=281)** It's piled up at exactly 40 for reasons that make sense to all of us.
>
> **[4:46](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-navigate-borderline-cases-of-variable-type?u=76281980&t=286)** So what we probably need is less than 20, exactly 20, between 20 and 40, exactly 40, more than 40, something like that.
>
> **[4:57](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-navigate-borderline-cases-of-variable-type?u=76281980&t=297)** We have to do natural groupings that are consistent with the data and that reveal the real pattern that will help us, it will also help the algorithms when the pattern is as dramatic as what we see here.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), this. (3), try. (1)
> **UI Navigation:** click on (2), go to (2)
> **Definitions:** is a  (3)
> **CLI Commands:** make (2)
> **Env Vars:** knime (2)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### How to be effective in doing bivariate data visualization
> [LinkedIn Learning](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-in-doing-bivariate-data-visualization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-in-doing-bivariate-data-visualization?u=76281980&t=0)** - [Instructor] Okay, we're going to continue in Knime, same dataset, same workflow.
>
> **[0:05](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-in-doing-bivariate-data-visualization?u=76281980&t=5)** Let me move this histogram out of the way.
>
> **[0:07](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-in-doing-bivariate-data-visualization?u=76281980&t=7)** So we're going to move on to bivariate charts and visualizations.
>
> **[0:14](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-in-doing-bivariate-data-visualization?u=76281980&t=14)** Now, the reason that we're doing this is that if we want to be thorough, we're going to look at every payer of variables.
>
> **[0:21](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-in-doing-bivariate-data-visualization?u=76281980&t=21)** Now, naturally our focus is the target variable, but if we really want to do this right, we want to try to move quickly enough that we can fit every payer into our schedule, including the inputs against the inputs.
>
> **[0:37](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-in-doing-bivariate-data-visualization?u=76281980&t=37)** We're going to spot things that we have to fix or spot patterns that we can capitalize on during modeling.
>
> **[0:45](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-in-doing-bivariate-data-visualization?u=76281980&t=45)** So you have to live within the constraints of your software and Knime has suitable visualization, certainly, but not amazing.
>
> **[0:54](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-in-doing-bivariate-data-visualization?u=76281980&t=54)** So I'm going to suggest that we just go with a cross tab here, 'cause we're not worried about it looking pretty.
>
> **[1:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-in-doing-bivariate-data-visualization?u=76281980&t=60)** We want to get the information content and we want to do so quickly.
>
> **[1:05](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-in-doing-bivariate-data-visualization?u=76281980&t=65)** So I'm going to suggest that we use what's called the crosstab node, which is really just going to be a little table, but it will give us what we need.
>
> **[1:12](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-in-doing-bivariate-data-visualization?u=76281980&t=72)** So I'm going to make the row income.
>
> **[1:21](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-in-doing-bivariate-data-visualization?u=76281980&t=81)** That's our target variable.
>
> **[1:23](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-in-doing-bivariate-data-visualization?u=76281980&t=83)** And to make this especially simple, I'm going to use a variable with just a couple of categories, sex, very brief mention of final weight.
>
> **[1:31](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-in-doing-bivariate-data-visualization?u=76281980&t=91)** What a survey weight does is manipulates the data so that it looks like the population, not the sample.
>
> **[1:39](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-in-doing-bivariate-data-visualization?u=76281980&t=99)** We're not going to get into survey weights in this course.
>
> **[1:42](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-in-doing-bivariate-data-visualization?u=76281980&t=102)** Interesting topic, but it's just not our topic.
>
> **[1:45](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-in-doing-bivariate-data-visualization?u=76281980&t=105)** So I'm going to set that to none.
>
> **[1:51](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-in-doing-bivariate-data-visualization?u=76281980&t=111)** Then we can execute an open views.
>
> **[1:57](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-in-doing-bivariate-data-visualization?u=76281980&t=117)** And maximize this.
>
> **[1:58](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-in-doing-bivariate-data-visualization?u=76281980&t=118)** Okay so, first thing that perhaps you might notice is that we have more men than women in the sample.
>
> **[2:07](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-in-doing-bivariate-data-visualization?u=76281980&t=127)** We've got 21,790 men, and we have 10,771 women.
>
> **[2:14](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-in-doing-bivariate-data-visualization?u=76281980&t=134)** So about 2/3 men.
>
> **[2:16](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-in-doing-bivariate-data-visualization?u=76281980&t=136)** What's interesting therefore, is that we should have 2/3 men in both the low income and the high income categories.
>
> **[2:24](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-in-doing-bivariate-data-visualization?u=76281980&t=144)** Assuming that being male has nothing to do with these incomes.
>
> **[2:28](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-in-doing-bivariate-data-visualization?u=76281980&t=148)** But of course we know that there is generally gender bias in income.
>
> **[2:33](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-in-doing-bivariate-data-visualization?u=76281980&t=153)** Certainly the further back in time you go, the more severe it is, and this is census data from the 90s.
>
> **[2:39](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-in-doing-bivariate-data-visualization?u=76281980&t=159)** So we don't find the 2/3 of men are in the under 50 category.
>
> **[2:44](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-in-doing-bivariate-data-visualization?u=76281980&t=164)** It's more like 61%.
>
> **[2:46](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-in-doing-bivariate-data-visualization?u=76281980&t=166)** And it's not 2/3 of men in the above 50,000 category, it's 85%.
>
> **[2:52](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-in-doing-bivariate-data-visualization?u=76281980&t=172)** So there's definitely a pattern here.
>
> **[2:54](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-in-doing-bivariate-data-visualization?u=76281980&t=174)** And if you are statistically inclined, you might notice that down at the bottom, on the far right, you can see probability 0.0 that's below 0.05.
>
> **[3:04](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-in-doing-bivariate-data-visualization?u=76281980&t=184)** So for you stats fans, this is statistically significant.
>
> **[3:08](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-in-doing-bivariate-data-visualization?u=76281980&t=188)** But what we're focused on, is there anything weird?
>
> **[3:11](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-in-doing-bivariate-data-visualization?u=76281980&t=191)** Is there anything that might help us in the model?
>
> **[3:14](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-in-doing-bivariate-data-visualization?u=76281980&t=194)** At the moment, all we would conclude is that gender probably should be in the model because it's showing some early promise as far as being able to make predictions because of this apparent bias that we can see.
>
> **[3:28](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-in-doing-bivariate-data-visualization?u=76281980&t=208)** Okay, so now we have to do a category versus a scale because we have to do every combination, category and category, which we've just seen, category and scale and then scale and scale.
>
> **[3:40](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-in-doing-bivariate-data-visualization?u=76281980&t=220)** So let's move on to the second option.
>
> **[3:44](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-in-doing-bivariate-data-visualization?u=76281980&t=224)** My favorite option in any software package for looking at a category in a scale is going to be a box plot.
>
> **[3:52](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-in-doing-bivariate-data-visualization?u=76281980&t=232)** So we're going to do what's called a conditional box plot.
>
> **[4:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-in-doing-bivariate-data-visualization?u=76281980&t=240)** And we're going to be asked what our variables are.
>
> **[4:03](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-in-doing-bivariate-data-visualization?u=76281980&t=243)** Our categorical or nominal column is going to be our target variable.
>
> **[4:10](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-in-doing-bivariate-data-visualization?u=76281980&t=250)** And let's go ahead and choose an appropriate one.
>
> **[4:12](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-in-doing-bivariate-data-visualization?u=76281980&t=252)** Let's go ahead and look at income and age is actually just fine.
>
> **[4:17](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-in-doing-bivariate-data-visualization?u=76281980&t=257)** Let's go ahead and click okay.
>
> **[4:18](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-in-doing-bivariate-data-visualization?u=76281980&t=258)** We'd also want to do income against all other scale variables.
>
> **[4:26](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-in-doing-bivariate-data-visualization?u=76281980&t=266)** Again, a lot of folks would not consider this to be a very pretty looking chart, but we're not focused on that right now.
>
> **[4:32](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-in-doing-bivariate-data-visualization?u=76281980&t=272)** Presence of a pattern, potential problems.
>
> **[4:35](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-in-doing-bivariate-data-visualization?u=76281980&t=275)** First, the presence of a pattern.
>
> **[4:37](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-in-doing-bivariate-data-visualization?u=76281980&t=277)** The heavy line in the center of the box there, again, it's called a box plot is the median.
>
> **[4:44](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-in-doing-bivariate-data-visualization?u=76281980&t=284)** So it looks like the median for the above 50 is 44 years old, the median for the under 50K is 34 years old.
>
> **[4:53](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-in-doing-bivariate-data-visualization?u=76281980&t=293)** So there's some pattern here for sure.
>
> **[4:56](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-in-doing-bivariate-data-visualization?u=76281980&t=296)** But what's really noteworthy is that these outliers on age, we have folks in their 90s, both in the, under 50 and the over 50.
>
> **[5:05](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-in-doing-bivariate-data-visualization?u=76281980&t=305)** And it really gets me thinking, everybody in this data set has some hours worked, but is it like a semi retired attorney who goes to the office a couple of hours a week because they're a partner in the firm or something.
>
> **[5:20](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-in-doing-bivariate-data-visualization?u=76281980&t=320)** I'm wondering what someone in that age group is doing.
>
> **[5:24](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-in-doing-bivariate-data-visualization?u=76281980&t=324)** And if we have to try to figure out if they're retired or not, and if they're retired, where are the hours coming from?
>
> **[5:32](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-in-doing-bivariate-data-visualization?u=76281980&t=332)** That's just a mystery that I would want resolved.
>
> **[5:34](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-in-doing-bivariate-data-visualization?u=76281980&t=334)** This one chart is not going to resolve it.
>
> **[5:37](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-in-doing-bivariate-data-visualization?u=76281980&t=337)** I just know that I have both a pattern and some things that trouble me a little bit.
>
> **[5:42](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-in-doing-bivariate-data-visualization?u=76281980&t=342)** So keep on moving.
>
> **[5:45](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-in-doing-bivariate-data-visualization?u=76281980&t=345)** Now we have to see an example of a scale and a scale.
>
> **[5:49](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-in-doing-bivariate-data-visualization?u=76281980&t=349)** And once we've done this, we have all the combinations that we're going to see.
>
> **[5:54](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-in-doing-bivariate-data-visualization?u=76281980&t=354)** So let's go ahead and do a scatterplot.
>
> **[5:57](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-in-doing-bivariate-data-visualization?u=76281980&t=357)** Now our target variable is not a scale variable.
>
> **[6:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-in-doing-bivariate-data-visualization?u=76281980&t=360)** So we'll go ahead and look at two of the inputs against each other.
>
> **[6:05](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-in-doing-bivariate-data-visualization?u=76281980&t=365)** And we'll go with age and hours.
>
> **[6:13](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-in-doing-bivariate-data-visualization?u=76281980&t=373)** And let's increase that maximum number of rows to 50,000, which is more than enough for our sample size, but we don't want to grab just a sampling of the data.
>
> **[6:25](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-in-doing-bivariate-data-visualization?u=76281980&t=385)** We want to look at all of it.
>
> **[6:29](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-in-doing-bivariate-data-visualization?u=76281980&t=389)** Execute and open views.
>
> **[6:33](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-in-doing-bivariate-data-visualization?u=76281980&t=393)** Okay, here we are inside of the scatter plot.
>
> **[6:35](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-in-doing-bivariate-data-visualization?u=76281980&t=395)** And when you do a scatter plot on a very large number of cases like this, it's not going to be pretty, but it's going to give us what we need at the moment, which is to see the pattern.
>
> **[6:46](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-in-doing-bivariate-data-visualization?u=76281980&t=406)** So do we generally see that as folks get older, they have more hours, do they have less hours?
>
> **[6:53](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-in-doing-bivariate-data-visualization?u=76281980&t=413)** You know, there's really no obvious pattern.
>
> **[6:55](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-in-doing-bivariate-data-visualization?u=76281980&t=415)** It's a bit of a mess, but I'll tell you what.
>
> **[6:57](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-in-doing-bivariate-data-visualization?u=76281980&t=417)** I'm not seeing a lot of individuals with ages like 86 or 87 or 88 or 89, but there's a bunch of folks with an age of 90.
>
> **[7:12](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-in-doing-bivariate-data-visualization?u=76281980&t=432)** That makes me nervous.
>
> **[7:13](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-in-doing-bivariate-data-visualization?u=76281980&t=433)** Why would it be that mid 80s, the data thins out, but we have this unusual number of people that are exactly 90&gt; I would be very worried about that.
>
> **[7:25](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-in-doing-bivariate-data-visualization?u=76281980&t=445)** I'd want to talk to a subject matter expert.
>
> **[7:28](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-in-doing-bivariate-data-visualization?u=76281980&t=448)** Is that some kind of weird maximum going on?
>
> **[7:31](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-in-doing-bivariate-data-visualization?u=76281980&t=451)** Makes me nervous.
>
> **[7:33](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-in-doing-bivariate-data-visualization?u=76281980&t=453)** Along the same lines, notice that generally speaking, as you get above 75 hours or 80 hours, 80 hours is awful lot.
>
> **[7:46](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-in-doing-bivariate-data-visualization?u=76281980&t=466)** That's two full time jobs.
>
> **[7:48](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-in-doing-bivariate-data-visualization?u=76281980&t=468)** It starts to thin out.
>
> **[7:50](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-in-doing-bivariate-data-visualization?u=76281980&t=470)** Then you get this weird thing where at 100 hours, now, all of a sudden, we have more data than at 95 or at 90.
>
> **[7:59](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-in-doing-bivariate-data-visualization?u=76281980&t=479)** That really concerns me.
>
> **[8:01](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-in-doing-bivariate-data-visualization?u=76281980&t=481)** You know, I know that the temptation would be overwhelming to only do the target against the inputs.
>
> **[8:09](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-in-doing-bivariate-data-visualization?u=76281980&t=489)** 'Cause you would think, wow, how am I going to have the time?
>
> **[8:11](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-in-doing-bivariate-data-visualization?u=76281980&t=491)** But do you see how important it is to do inputs against inputs as well?
>
> **[8:15](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-in-doing-bivariate-data-visualization?u=76281980&t=495)** Because there's some weird stuff going on.
>
> **[8:18](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-in-doing-bivariate-data-visualization?u=76281980&t=498)** So there you have it.
>
> **[8:19](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-in-doing-bivariate-data-visualization?u=76281980&t=499)** The trick to do these by variants is to move quickly.
>
> **[8:22](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-in-doing-bivariate-data-visualization?u=76281980&t=502)** Look for patterns, look for problems.
>
> **[8:24](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-in-doing-bivariate-data-visualization?u=76281980&t=504)** Keep on moving along.
>
> **[8:26](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-be-effective-in-doing-bivariate-data-visualization?u=76281980&t=506)** And level of measurement will drive what type of visualization table or chart you do.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), this, (2), continue (1), this. (1)
> **CLI Commands:** make (3), node (1), find (1)
> **Versions:** 0.0 (1), 0.05 (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Producing bivariate visualizations for case study 1
> [LinkedIn Learning](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-producing-bivariate-visualizations-for-case-study-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-producing-bivariate-visualizations-for-case-study-1?u=76281980&t=0)** (electronic music)
>
> **[0:05](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-producing-bivariate-visualizations-for-case-study-1?u=76281980&t=5)** - [Instructor] Okay, welcome to your next challenge.
>
> **[0:07](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-producing-bivariate-visualizations-for-case-study-1?u=76281980&t=7)** We're in the Titanic data set and we're going to do some bivariate analyses.
>
> **[0:12](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-producing-bivariate-visualizations-for-case-study-1?u=76281980&t=12)** So the first one we're going to do is a category and a category.
>
> **[0:16](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-producing-bivariate-visualizations-for-case-study-1?u=76281980&t=16)** Survived is a category, of course, so let's go ahead and pair it with the sex variable.
>
> **[0:21](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-producing-bivariate-visualizations-for-case-study-1?u=76281980&t=21)** Then for your next one, do survived and fare.
>
> **[0:26](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-producing-bivariate-visualizations-for-case-study-1?u=76281980&t=26)** Obviously then a category and a scale.
>
> **[0:29](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-producing-bivariate-visualizations-for-case-study-1?u=76281980&t=29)** Let's make the third one a little bit more interesting.
>
> **[0:32](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-producing-bivariate-visualizations-for-case-study-1?u=76281980&t=32)** Survived one more time, but parent/child.
>
> **[0:35](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-producing-bivariate-visualizations-for-case-study-1?u=76281980&t=35)** Look at it through the lens of scale and ordinal and see which one you think is more informative.
>
> **[0:41](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-producing-bivariate-visualizations-for-case-study-1?u=76281980&t=41)** One final condition.
>
> **[0:43](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-producing-bivariate-visualizations-for-case-study-1?u=76281980&t=43)** Since we're looking at relationships that might potentially work their way into the model, it will be safer if we look at only the train partition.
>
> **[0:54](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-producing-bivariate-visualizations-for-case-study-1?u=76281980&t=54)** I'll be working in KNIME.
>
> **[0:55](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-producing-bivariate-visualizations-for-case-study-1?u=76281980&t=55)** You're welcome to use any tool you like.
>
> **[0:57](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-producing-bivariate-visualizations-for-case-study-1?u=76281980&t=57)** If you, like me, are in KNIME, you're going to need a row filter to grab just that train partition.
>
> **[1:03](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-producing-bivariate-visualizations-for-case-study-1?u=76281980&t=63)** So to recap, you're going to have to do four charts for your challenge.
>
> **[1:09](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-producing-bivariate-visualizations-for-case-study-1?u=76281980&t=69)** And if you're getting comfortable in KNIME and you're working efficiently, you can probably get this done in about 15 minutes.
>
> **[1:15](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-producing-bivariate-visualizations-for-case-study-1?u=76281980&t=75)** Hope you enjoy the challenge.

> [!info]- Semantic Content
>
> **Env Vars:** knime (3)
> **Code Keywords:** let (2)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (electronic music) (1)

#### Solution: Producing bivariate visualizations for case study 1
> [LinkedIn Learning](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-producing-bivariate-visualizations-for-case-study-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-producing-bivariate-visualizations-for-case-study-1?u=76281980&t=0)** - Okay. I'm a anime with the Titanic dataset and I've created a new workflow just for our challenge and solution.
>
> **[0:13](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-producing-bivariate-visualizations-for-case-study-1?u=76281980&t=13)** So as mentioned, we should be looking at only the training partition.
>
> **[0:18](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-producing-bivariate-visualizations-for-case-study-1?u=76281980&t=18)** So I've added a row filter and I've got column to test partition, use pattern matching train.
>
> **[0:27](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-producing-bivariate-visualizations-for-case-study-1?u=76281980&t=27)** Okay. So that will be just our train partition.
>
> **[0:29](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-producing-bivariate-visualizations-for-case-study-1?u=76281980&t=29)** I've also added a number to string conversion here because in Titanic Survived as ones and zeros, and it's going to get all mixed up.
>
> **[0:40](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-producing-bivariate-visualizations-for-case-study-1?u=76281980&t=40)** I want to make sure it treats it as a category and not as a scale.
>
> **[0:45](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-producing-bivariate-visualizations-for-case-study-1?u=76281980&t=45)** Okay. So we're ready to go.
>
> **[0:47](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-producing-bivariate-visualizations-for-case-study-1?u=76281980&t=47)** First one is a category by a category.
>
> **[0:50](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-producing-bivariate-visualizations-for-case-study-1?u=76281980&t=50)** So I'm going to use a Crosstab,
>
> **[0:59](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-producing-bivariate-visualizations-for-case-study-1?u=76281980&t=59)** here it is.
>
> **[1:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-producing-bivariate-visualizations-for-case-study-1?u=76281980&t=60)** And I'm going to make Survived my row and Sex my column.
>
> **[1:07](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-producing-bivariate-visualizations-for-case-study-1?u=76281980&t=67)** No, Weight available Click on Okay.
>
> **[1:13](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-producing-bivariate-visualizations-for-case-study-1?u=76281980&t=73)** Execute and Open Views.
>
> **[1:16](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-producing-bivariate-visualizations-for-case-study-1?u=76281980&t=76)** And it looks like about two thirds of the passengers were men.
>
> **[1:20](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-producing-bivariate-visualizations-for-case-study-1?u=76281980&t=80)** So we would expect the two thirds of the survivors and two thirds of those that died should also be men.
>
> **[1:25](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-producing-bivariate-visualizations-for-case-study-1?u=76281980&t=85)** Assuming that there is not some relationship here between sex and survival.
>
> **[1:30](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-producing-bivariate-visualizations-for-case-study-1?u=76281980&t=90)** But that's not what we see at all is that we see that 31.87% of the men have survived and more than 85% have died.
>
> **[1:42](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-producing-bivariate-visualizations-for-case-study-1?u=76281980&t=102)** So there's clearly a pattern here, nothing particularly odd.
>
> **[1:45](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-producing-bivariate-visualizations-for-case-study-1?u=76281980&t=105)** This is consistent with what we might expect.
>
> **[1:47](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-producing-bivariate-visualizations-for-case-study-1?u=76281980&t=107)** So that worked out just fine.
>
> **[1:50](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-producing-bivariate-visualizations-for-case-study-1?u=76281980&t=110)** Now let's to do our category and our scale.
>
> **[1:53](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-producing-bivariate-visualizations-for-case-study-1?u=76281980&t=113)** So that's going to be a box plot, specifically a conditional box plot.
>
> **[2:05](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-producing-bivariate-visualizations-for-case-study-1?u=76281980&t=125)** And if we take a look at that our nominal column is going to be Survived.
>
> **[2:09](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-producing-bivariate-visualizations-for-case-study-1?u=76281980&t=129)** Our numeric column is Fair.
>
> **[2:11](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-producing-bivariate-visualizations-for-case-study-1?u=76281980&t=131)** We decided click on, Okay, Execute and Open Views.
>
> **[2:19](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-producing-bivariate-visualizations-for-case-study-1?u=76281980&t=139)** Again, these won't look pretty, but it gives us what we need.
>
> **[2:23](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-producing-bivariate-visualizations-for-case-study-1?u=76281980&t=143)** So what we see is that we're really looking at a pretty subtle difference between the two.
>
> **[2:30](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-producing-bivariate-visualizations-for-case-study-1?u=76281980&t=150)** In fact, very subtle indeed.
>
> **[2:33](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-producing-bivariate-visualizations-for-case-study-1?u=76281980&t=153)** We've got zero fairs.
>
> **[2:34](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-producing-bivariate-visualizations-for-case-study-1?u=76281980&t=154)** It's hard to know what to make of that.
>
> **[2:37](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-producing-bivariate-visualizations-for-case-study-1?u=76281980&t=157)** It looks like on those that survive, we do have some higher end, but we got plenty of higher end on the not survive the zeros as well.
>
> **[2:48](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-producing-bivariate-visualizations-for-case-study-1?u=76281980&t=168)** We have, maybe that's an outlier, the 512, but we don't know if that's a large group or big family, more than one cabin, really tricky.
>
> **[2:58](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-producing-bivariate-visualizations-for-case-study-1?u=76281980&t=178)** So the pattern here is highly problematic.
>
> **[3:02](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-producing-bivariate-visualizations-for-case-study-1?u=76281980&t=182)** I mostly want to understand Fair when I go to talk to the subject matter expert now.
>
> **[3:08](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-producing-bivariate-visualizations-for-case-study-1?u=76281980&t=188)** I don't see problems exactly, but I see a pattern that I don't really understand yet, but we've accomplished what we had to.
>
> **[3:17](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-producing-bivariate-visualizations-for-case-study-1?u=76281980&t=197)** We're getting a feel for the data.
>
> **[3:20](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-producing-bivariate-visualizations-for-case-study-1?u=76281980&t=200)** Okay. We have one more.
>
> **[3:21](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-producing-bivariate-visualizations-for-case-study-1?u=76281980&t=201)** We've got to look at Parent-Child.
>
> **[3:24](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-producing-bivariate-visualizations-for-case-study-1?u=76281980&t=204)** So let's go ahead and bring over another conditional box plot and see what it looks like.
>
> **[3:33](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-producing-bivariate-visualizations-for-case-study-1?u=76281980&t=213)** So we'll do Survived against Parent-Child.
>
> **[3:45](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-producing-bivariate-visualizations-for-case-study-1?u=76281980&t=225)** Wow.
>
> **[3:47](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-producing-bivariate-visualizations-for-case-study-1?u=76281980&t=227)** Let me maximize this again.
>
> **[3:51](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-producing-bivariate-visualizations-for-case-study-1?u=76281980&t=231)** A bit of a mess, isn't it.
>
> **[3:54](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-producing-bivariate-visualizations-for-case-study-1?u=76281980&t=234)** We mostly have, for those that survived, we actually have quite a range, but for those that didn't survive the median and the minimum, and it looks like the 75th percentile.
>
> **[4:10](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-producing-bivariate-visualizations-for-case-study-1?u=76281980&t=250)** In other words, it's all scrunched together.
>
> **[4:12](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-producing-bivariate-visualizations-for-case-study-1?u=76281980&t=252)** Look like they're all zero.
>
> **[4:15](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-producing-bivariate-visualizations-for-case-study-1?u=76281980&t=255)** I'm guessing it's because there's a lot of single men, but boy, looking at this, I'm really convinced that we probably don't want to mess around with.
>
> **[4:23](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-producing-bivariate-visualizations-for-case-study-1?u=76281980&t=263)** This as a scale verbal.
>
> **[4:24](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-producing-bivariate-visualizations-for-case-study-1?u=76281980&t=264)** We're not seeing the pattern clearly at all.
>
> **[4:28](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-producing-bivariate-visualizations-for-case-study-1?u=76281980&t=268)** So let's get rid of this and let's try this another way.
>
> **[4:31](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-producing-bivariate-visualizations-for-case-study-1?u=76281980&t=271)** In fact, let's just return to this Crosstab note and do Survived against Parent-Child.
>
> **[4:39](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-producing-bivariate-visualizations-for-case-study-1?u=76281980&t=279)** It's actually going to let us, this note is going to let us without doing a conversion.
>
> **[4:44](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-producing-bivariate-visualizations-for-case-study-1?u=76281980&t=284)** So we'll take advantage of that.
>
> **[4:45](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-producing-bivariate-visualizations-for-case-study-1?u=76281980&t=285)** Click on, Okay.
>
> **[4:47](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-producing-bivariate-visualizations-for-case-study-1?u=76281980&t=287)** Click on, Okay.
>
> **[4:48](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-producing-bivariate-visualizations-for-case-study-1?u=76281980&t=288)** And Execute and Open Views.
>
> **[4:51](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-producing-bivariate-visualizations-for-case-study-1?u=76281980&t=291)** And let's see what's going on here.
>
> **[4:53](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-producing-bivariate-visualizations-for-case-study-1?u=76281980&t=293)** You know, this is really a lot better.
>
> **[4:56](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-producing-bivariate-visualizations-for-case-study-1?u=76281980&t=296)** Now I know the pattern doesn't jump off the screen because there's a lot of numbers here, but we can actually see every combination.
>
> **[5:04](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-producing-bivariate-visualizations-for-case-study-1?u=76281980&t=304)** We can see for instance, among those that survived, we see one against zero, one against one, one against two, and the pattern doesn't immediately reveal itself.
>
> **[5:16](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-producing-bivariate-visualizations-for-case-study-1?u=76281980&t=316)** But boy, if I'm going to sit down with a subject matter expert, I would much rather have this in front of me than that box plot, because that box plot was not revealing the pattern at all.
>
> **[5:27](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-producing-bivariate-visualizations-for-case-study-1?u=76281980&t=327)** So be creative.
>
> **[5:28](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-producing-bivariate-visualizations-for-case-study-1?u=76281980&t=328)** There are times that a variable will seem like a scale and maybe according to the official definition it is, but you want to treat it as an ordinal because that's the only way that you going to uncover the pattern.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), this, (1)
> **UI Navigation:** click on (4), go to (1)
> **CLI Commands:** make (3)
> **Definitions:** is a  (1), in other words (1)
> **Versions:** 31.87 (1)
> **Analogies:** for instance (1)
> **Speakers:** - okay (1)
> **Non-Speech:** (upbeat music) (1)


### 8. Explore Data Tips and Tricks

#### How to utilize an SME's time effectively
> [LinkedIn Learning](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-utilize-an-sme-s-time-effectively?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-utilize-an-sme-s-time-effectively?u=76281980&t=0)** - [Instructor] The image that comes to mind for many when working with subject matter experts is you just sit down with them and get their advice.
>
> **[0:07](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-utilize-an-sme-s-time-effectively?u=76281980&t=7)** They'll be able to point you in the right direction.
>
> **[0:09](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-utilize-an-sme-s-time-effectively?u=76281980&t=9)** And you'll leave the meeting with a rough idea of what variables to use and what the relationships are.
>
> **[0:14](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-utilize-an-sme-s-time-effectively?u=76281980&t=14)** Then you just fill in the details.
>
> **[0:16](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-utilize-an-sme-s-time-effectively?u=76281980&t=16)** It's a common view but it's completely inconsistent with my experience.
>
> **[0:22](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-utilize-an-sme-s-time-effectively?u=76281980&t=22)** Subject matter experts are critical to the data understanding process but they aren't going to build the model for you.
>
> **[0:29](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-utilize-an-sme-s-time-effectively?u=76281980&t=29)** First of all, they're too busy and you want to make efficient use of their time.
>
> **[0:33](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-utilize-an-sme-s-time-effectively?u=76281980&t=33)** Also, while they'll have a pretty good idea of what's going on, their mental model of the business problem is likely to include just a handful of variables and very few, if any, interactions between variables.
>
> **[0:45](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-utilize-an-sme-s-time-effectively?u=76281980&t=45)** That's not enough raw material for machine learning.
>
> **[0:49](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-utilize-an-sme-s-time-effectively?u=76281980&t=49)** Finally, they need you to find the unusual patterns so that together you can confirm if they are real patterns or maybe represent errors in the data.
>
> **[1:01](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-utilize-an-sme-s-time-effectively?u=76281980&t=61)** So here's how you leverage your time with subject matter experts.
>
> **[1:04](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-utilize-an-sme-s-time-effectively?u=76281980&t=64)** First, you need a technique for presenting the strong relationships in the data so that they can confirm that that's consistent with their experience.
>
> **[1:14](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-utilize-an-sme-s-time-effectively?u=76281980&t=74)** But then you have to also explore the weak relationships and find out if there's a pattern hiding in there.
>
> **[1:21](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-utilize-an-sme-s-time-effectively?u=76281980&t=81)** Maybe there's nothing there but maybe the data or errors in the data is concealing something that's new that people don't currently understand.
>
> **[1:31](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-utilize-an-sme-s-time-effectively?u=76281980&t=91)** You also have to uncover quirks about the data.
>
> **[1:34](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-utilize-an-sme-s-time-effectively?u=76281980&t=94)** In other words, just strange, odd things that you find.
>
> **[1:38](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-utilize-an-sme-s-time-effectively?u=76281980&t=98)** And sit down with the subject matter expert and figure out what's going on.
>
> **[1:43](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-utilize-an-sme-s-time-effectively?u=76281980&t=103)** Finally, only you, working with software and the data, can try to uncover complex relationships that involve four or five or even six or more variables.
>
> **[1:56](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-utilize-an-sme-s-time-effectively?u=76281980&t=116)** This is not something that people just intuit.
>
> **[1:59](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-utilize-an-sme-s-time-effectively?u=76281980&t=119)** It has to be uncovered and it involves work.
>
> **[2:02](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-utilize-an-sme-s-time-effectively?u=76281980&t=122)** We are going to be rehearsing all four of these approaches in the chapter.

> [!info]- Semantic Content
>
> **CLI Commands:** find (3), make (1)
> **Code Keywords:** finally, (2)
> **Definitions:** in other words (1)
> **Speakers:** - [instructor] (1)

#### Techniques for working with the top predictors
> [LinkedIn Learning](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/techniques-for-working-with-the-top-predictors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/techniques-for-working-with-the-top-predictors?u=76281980&t=0)** - [Instructor] I'm in KNIME with an unmodified version of the census data set, and I've started a new workflow.
>
> **[0:07](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/techniques-for-working-with-the-top-predictors?u=76281980&t=7)** What we're going to do now is walk through how to establish the relationships in your strong predictors to then discuss them with a subject matter expert.
>
> **[0:20](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/techniques-for-working-with-the-top-predictors?u=76281980&t=20)** My favorite technique, is to grow the top branch of a decision tree.
>
> **[0:26](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/techniques-for-working-with-the-top-predictors?u=76281980&t=26)** I'm going to take KNIME's Decision Tree Learner, and hook it up to the data, double click to configure it, and my class column is going to be income, we can keep it as that, but I'm going to go down here to force route split column, and what you want to do is grab one of the variables that you think has a strong relationship with this, and realize that at this point you would know that because you would have done by variate relationships of all the payers with the target variable.
>
> **[1:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/techniques-for-working-with-the-top-predictors?u=76281980&t=60)** For instance, gender is going to have a strong relationship with income, and I can maximize that.
>
> **[1:12](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/techniques-for-working-with-the-top-predictors?u=76281980&t=72)** Let's remember what stage in the process that we are.
>
> **[1:17](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/techniques-for-working-with-the-top-predictors?u=76281980&t=77)** We're in the date understanding phase obviously, so we're not building the model yet.
>
> **[1:21](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/techniques-for-working-with-the-top-predictors?u=76281980&t=81)** Building a model with the decision tree is a big topic and I actually have a couple of courses on that subject in the library, but we're focused on data understanding right now.
>
> **[1:30](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/techniques-for-working-with-the-top-predictors?u=76281980&t=90)** Also remember that you've looked at all these payers.
>
> **[1:33](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/techniques-for-working-with-the-top-predictors?u=76281980&t=93)** You would have already seen that gender has a strong relationship here, but you're trying to prepare for a meeting with a subject matter expert.
>
> **[1:39](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/techniques-for-working-with-the-top-predictors?u=76281980&t=99)** You're trying to confirm that the variables that the model likes are consistent with the subject matter experts experience, and that the relationships make sense.
>
> **[1:51](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/techniques-for-working-with-the-top-predictors?u=76281980&t=111)** Also things like cut points.
>
> **[1:53](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/techniques-for-working-with-the-top-predictors?u=76281980&t=113)** We don't have anything like that with the gender variable, we just have male and female, but you're just trying to confirm that everything looks good so that when you do get to the modeling phase, all the variables have been thoroughly vetted and prepared.
>
> **[2:07](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/techniques-for-working-with-the-top-predictors?u=76281980&t=127)** As we look here, we can see an overall rate at which people earn more than 50,000 at 24.1%.
>
> **[2:15](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/techniques-for-working-with-the-top-predictors?u=76281980&t=135)** But for men, it's 30.6% and for women it's 10.9.
>
> **[2:22](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/techniques-for-working-with-the-top-predictors?u=76281980&t=142)** My experience is that even a subject matter expert, that's never worked with decision trees before can relate to this quite readily.
>
> **[2:30](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/techniques-for-working-with-the-top-predictors?u=76281980&t=150)** Don't be afraid to introduce an approach like this into a meeting.
>
> **[2:34](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/techniques-for-working-with-the-top-predictors?u=76281980&t=154)** Let's do one more.
>
> **[2:36](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/techniques-for-working-with-the-top-predictors?u=76281980&t=156)** Again, we're forcing one variable at a time, so I can take education number now notice I have a string and an integer, but if I take the integer, it's going to treat it differently in the algorithm, and I think that's what I'm going to want to try next.
>
> **[2:56](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/techniques-for-working-with-the-top-predictors?u=76281980&t=176)** Take a walk we see, and this is not a surprise that at 12 and a half at the equivalent of a high school degree, it's trying to make the split there.
>
> **[3:06](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/techniques-for-working-with-the-top-predictors?u=76281980&t=186)** That's valuable because you don't want to just talk to the subject matter expert about whether or not, they are surprised or not, that education is related to income, but where the model is indicating that the split should take place, is something that you also want to confirm with the subject matter expert.
>
> **[3:26](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/techniques-for-working-with-the-top-predictors?u=76281980&t=206)** Sometimes, actually there's some kind of underlying business rule or process that forces it to break at a particular point.
>
> **[3:33](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/techniques-for-working-with-the-top-predictors?u=76281980&t=213)** You want to see if all of this makes sense to the subject matter experts.
>
> **[3:36](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/techniques-for-working-with-the-top-predictors?u=76281980&t=216)** So again, you're not going to the subject matter expert asking where I should look, but rather you're looking and going them for confirmation that things seem to be correct.
>
> **[3:47](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/techniques-for-working-with-the-top-predictors?u=76281980&t=227)** Let's see where it splits if we let it, it actually wants to go to a different variable relationship.
>
> **[3:53](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/techniques-for-working-with-the-top-predictors?u=76281980&t=233)** We could use in nine, a column filter to force it, to stick with education so it can split at more than one location but this is where I would want to start the conversation with the subject matter expert.
>
> **[4:08](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/techniques-for-working-with-the-top-predictors?u=76281980&t=248)** We saw the gender had a strong relationship, no big surprise, and education as well splitting at high school degree attainment, which makes a lot of sense.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), this, (1)
> **Versions:** 24.1 (1), 30.6 (1), 10.9 (1)
> **CLI Commands:** make (2)
> **Env Vars:** knime (2)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### Advice for weak predictors
> [LinkedIn Learning](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/advice-for-weak-predictors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/advice-for-weak-predictors?u=76281980&t=0)** - [Instructor] Okay, we're going to continue with the same dataset and the same workflow but turn our attention to weak predictors.
>
> **[0:09](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/advice-for-weak-predictors?u=76281980&t=9)** So I'll close this.
>
> **[0:10](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/advice-for-weak-predictors?u=76281980&t=10)** So when we're looking at predictors, we're going to have to do more detective work.
>
> **[0:15](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/advice-for-weak-predictors?u=76281980&t=15)** The way most people behave is they treat the data understanding phase as a kind of screening phase and they get rid of variables left and right.
>
> **[0:25](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/advice-for-weak-predictors?u=76281980&t=25)** We don't want to do that.
>
> **[0:26](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/advice-for-weak-predictors?u=76281980&t=26)** I want to encourage a different approach.
>
> **[0:29](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/advice-for-weak-predictors?u=76281980&t=29)** What you want to do is when there's a variable that has problems, dig deep and see if you can't save it.
>
> **[0:35](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/advice-for-weak-predictors?u=76281980&t=35)** See if there are interesting relationships there.
>
> **[0:38](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/advice-for-weak-predictors?u=76281980&t=38)** So for instance, the variable that comes to mind for having problems would be variables like capital-gain and capital-loss.
>
> **[0:46](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/advice-for-weak-predictors?u=76281980&t=46)** We'll look at capital-gain.
>
> **[0:48](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/advice-for-weak-predictors?u=76281980&t=48)** The reason is there's so many zeros.
>
> **[0:52](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/advice-for-weak-predictors?u=76281980&t=52)** Let's run this and talk about it.
>
> **[0:54](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/advice-for-weak-predictors?u=76281980&t=54)** That large number of zeros isn't necessarily going to bring the variants and standard deviation way down because those individuals that do have capital gains, have large ones relative to zero.
>
> **[1:08](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/advice-for-weak-predictors?u=76281980&t=68)** But what's going to happen is a lot of modeling algorithms don't like variables that have a lot of the same value.
>
> **[1:15](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/advice-for-weak-predictors?u=76281980&t=75)** And for that reason, it might be thrown out.
>
> **[1:17](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/advice-for-weak-predictors?u=76281980&t=77)** We want to find out if there's information content here that we want to keep.
>
> **[1:21](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/advice-for-weak-predictors?u=76281980&t=81)** You might think that all we can do is go to the subject matter expert, report that it wants to break at 5,119 and leave it at that.
>
> **[1:30](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/advice-for-weak-predictors?u=76281980&t=90)** But there is more we can do.
>
> **[1:31](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/advice-for-weak-predictors?u=76281980&t=91)** Let's take a look.
>
> **[1:34](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/advice-for-weak-predictors?u=76281980&t=94)** We're going to have to calculate a Boolean that's going to tell us whether or not they have a zero or a nonzero value.
>
> **[1:40](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/advice-for-weak-predictors?u=76281980&t=100)** That's going to be the first step.
>
> **[1:42](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/advice-for-weak-predictors?u=76281980&t=102)** So let's go down here and we're going to search for math.
>
> **[1:57](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/advice-for-weak-predictors?u=76281980&t=117)** So we have number of different function types.
>
> **[1:59](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/advice-for-weak-predictors?u=76281980&t=119)** We need a logical function, specifically the if function.
>
> **[2:04](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/advice-for-weak-predictors?u=76281980&t=124)** And the grammar, as you can see there, is If-Condition, true value, false value.
>
> **[2:09](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/advice-for-weak-predictors?u=76281980&t=129)** So I'm going to make this a capital game.
>
> **[2:12](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/advice-for-weak-predictors?u=76281980&t=132)** You can do this in a number of ways but I like to do one and zero for false.
>
> **[2:17](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/advice-for-weak-predictors?u=76281980&t=137)** The downside of that is going to be that it's going to produce a scale variable and we really want a nominal here but there's a simple step we can do.
>
> **[2:25](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/advice-for-weak-predictors?u=76281980&t=145)** And we'll call this gains_yes no.
>
> **[2:30](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/advice-for-weak-predictors?u=76281980&t=150)** That's just a naming convention I like.
>
> **[2:31](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/advice-for-weak-predictors?u=76281980&t=151)** In other words, do they have a gain, yes or no?
>
> **[2:34](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/advice-for-weak-predictors?u=76281980&t=154)** Click on okay.
>
> **[2:37](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/advice-for-weak-predictors?u=76281980&t=157)** Then we'll do a simple conversion so that it's treated as a nominal variable.
>
> **[2:43](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/advice-for-weak-predictors?u=76281980&t=163)** So number to string.
>
> **[2:45](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/advice-for-weak-predictors?u=76281980&t=165)** And if we had a bunch of these, remember that a lot of times, you can do some of this stuff in bulk and notice that it's representing all of them here but the only one that we need to convert at the moment was guess_yes no.
>
> **[2:57](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/advice-for-weak-predictors?u=76281980&t=177)** But I could have a whole list of these.
>
> **[3:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/advice-for-weak-predictors?u=76281980&t=180)** There you go, that's going to be treated as a nominal now.
>
> **[3:03](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/advice-for-weak-predictors?u=76281980&t=183)** And one additional step.
>
> **[3:05](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/advice-for-weak-predictors?u=76281980&t=185)** Let me give myself a little bit of extra room.
>
> **[3:07](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/advice-for-weak-predictors?u=76281980&t=187)** Once we get looking at the tree again, we're going to want to look at only these gains variables.
>
> **[3:14](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/advice-for-weak-predictors?u=76281980&t=194)** So I'm going to introduce a column filter.
>
> **[3:26](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/advice-for-weak-predictors?u=76281980&t=206)** Get rid of everything and bring back only the original gain variable and the gains_yes no variable.
>
> **[3:34](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/advice-for-weak-predictors?u=76281980&t=214)** Just those two.
>
> **[3:44](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/advice-for-weak-predictors?u=76281980&t=224)** I'm somewhat going in a circle here but it'll work just fine.
>
> **[3:48](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/advice-for-weak-predictors?u=76281980&t=228)** So then I'm going to force it to split on, oh my goodness, I made a mistake but that's easily fixed.
>
> **[3:57](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/advice-for-weak-predictors?u=76281980&t=237)** I forgot to bring in my dependent variable.
>
> **[3:59](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/advice-for-weak-predictors?u=76281980&t=239)** I need income.
>
> **[4:02](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/advice-for-weak-predictors?u=76281980&t=242)** There we go.
>
> **[4:04](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/advice-for-weak-predictors?u=76281980&t=244)** So class column is going to be income.
>
> **[4:06](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/advice-for-weak-predictors?u=76281980&t=246)** I'm going to force it to split on the Boolean because I want that to be the first split.
>
> **[4:12](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/advice-for-weak-predictors?u=76281980&t=252)** Let's take a look.
>
> **[4:16](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/advice-for-weak-predictors?u=76281980&t=256)** Okay, so what we see is that overall, 24.1% are over 50 K.
>
> **[4:26](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/advice-for-weak-predictors?u=76281980&t=266)** But 62% of those with gains, they're in that category.
>
> **[4:33](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/advice-for-weak-predictors?u=76281980&t=273)** And 1/3 the percentage are in that category when they don't have the gains.
>
> **[4:39](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/advice-for-weak-predictors?u=76281980&t=279)** But then here's what's different that's going to come next is we're going to additionally split below those that had gains and this is noteworthy but this does not always happen.
>
> **[4:52](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/advice-for-weak-predictors?u=76281980&t=292)** We're splitting it the same location.
>
> **[4:55](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/advice-for-weak-predictors?u=76281980&t=295)** We're splitting it 5,119.
>
> **[4:57](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/advice-for-weak-predictors?u=76281980&t=297)** Often the split will move.
>
> **[4:59](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/advice-for-weak-predictors?u=76281980&t=299)** So we're in the early stages of possibly having a new variable that looks something like no gain, low gain, high gain.
>
> **[5:12](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/advice-for-weak-predictors?u=76281980&t=312)** But we really want to sit down with a subject matter expert and find out what might be special about 5,119.
>
> **[5:19](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/advice-for-weak-predictors?u=76281980&t=319)** I'd also be very curious at this stage about what is the nature of the capital gains.
>
> **[5:24](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/advice-for-weak-predictors?u=76281980&t=324)** You would imagine, for instance, that if someone has sold a home, that their capital gain might be much larger than 5,000.
>
> **[5:33](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/advice-for-weak-predictors?u=76281980&t=333)** You also have other things that might, you would think be a larger amount, perhaps like an inheritance or something like that.
>
> **[5:40](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/advice-for-weak-predictors?u=76281980&t=340)** I might very much want to understand these different capital gains types and see if that can be incorporated into the data somehow.
>
> **[5:48](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/advice-for-weak-predictors?u=76281980&t=348)** We don't have that variable now but that's exactly what these meetings with subject matter experts are about.
>
> **[5:52](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/advice-for-weak-predictors?u=76281980&t=352)** They're about to understand is it correct, is it possibly wrong and what other data can we bring in?
>
> **[6:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/advice-for-weak-predictors?u=76281980&t=360)** Those are the priorities when you have these meetings.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), function (3), continue (1), this. (1)
> **CLI Commands:** find (2), make (1)
> **Code Identifiers:** gains_yes (2), guess_yes (1)
> **Analogies:** for instance (2), imagine (1)
> **UI Navigation:** go to (1), click on (1)
> **Definitions:** is a  (1), in other words (1)
> **Versions:** 24.1 (1)
> **Speakers:** - [instructor] (1)

#### Tips and tricks when searching for quirks in your data
> [LinkedIn Learning](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-when-searching-for-quirks-in-your-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-when-searching-for-quirks-in-your-data?u=76281980&t=0)** - [Instructor] Okay, we're in the census Income Excel spreadsheet, and I want to to talk about quirks and weird patterns and how to handle this when sitting down with a subject matter expert.
>
> **[0:12](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-when-searching-for-quirks-in-your-data?u=76281980&t=12)** Now, one of the best ways to do this since a lot of times, we're looking at the relationship between nominal variables is to run a cross tab, using the cross tab note and nine or another software that would support that.
>
> **[0:24](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-when-searching-for-quirks-in-your-data?u=76281980&t=24)** The problem is as the number of categories grows larger, it's somewhat unmanageable, so for demonstration purposes I'm going to to use filters in Excel, but a lot of times you're going to to be checking about the correspondence between two variables.
>
> **[0:38](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-when-searching-for-quirks-in-your-data?u=76281980&t=38)** So let me give you an example.
>
> **[0:39](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-when-searching-for-quirks-in-your-data?u=76281980&t=39)** If we go over to education and we go to education number 12, let's say it would be important to verify that this always means the same thing.
>
> **[0:51](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-when-searching-for-quirks-in-your-data?u=76281980&t=51)** So clearly education number is not years of school because that would be a high school diploma and we can see that it's always associated with an associate's degree.
>
> **[1:03](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-when-searching-for-quirks-in-your-data?u=76281980&t=63)** And if we went with, let's say 10, I'm sorry I have to select all and then do 10 .
>
> **[1:11](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-when-searching-for-quirks-in-your-data?u=76281980&t=71)** Again you could do this more efficiently In a cross tab except that it's very difficult to see once the categories get above six or eight.
>
> **[1:18](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-when-searching-for-quirks-in-your-data?u=76281980&t=78)** So you have to be creative and work your way through it.
>
> **[1:21](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-when-searching-for-quirks-in-your-data?u=76281980&t=81)** So it doesn't take very long at all to confirm that these are really just the same variable in two different forms.
>
> **[1:28](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-when-searching-for-quirks-in-your-data?u=76281980&t=88)** And the metadata should have told us that.
>
> **[1:31](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-when-searching-for-quirks-in-your-data?u=76281980&t=91)** So we're fine there.
>
> **[1:32](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-when-searching-for-quirks-in-your-data?u=76281980&t=92)** See there's really three different kinds of individuals that might be giving you advice about quirks or about your data in general, it's going to to be somebody that let's say is an economist or a tax expert, they might know something about this data, somebody in IT, because they're going to be an expert on how it's stored, and then of course the internal customer, the person for whom the project is being done.
>
> **[1:52](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-when-searching-for-quirks-in-your-data?u=76281980&t=112)** They're going to to have a certain expertise and will want to explain what's going on with the variables.
>
> **[1:58](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-when-searching-for-quirks-in-your-data?u=76281980&t=118)** But what do I mean by a quirk?
>
> **[2:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-when-searching-for-quirks-in-your-data?u=76281980&t=120)** So we're looking at all of these different relationships between variables 'cause you don't want to to go to the subject matter experts and ask them, what does code 10 mean in education number?
>
> **[2:09](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-when-searching-for-quirks-in-your-data?u=76281980&t=129)** You should know that, you have other ways of figuring that out.
>
> **[2:12](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-when-searching-for-quirks-in-your-data?u=76281980&t=132)** Your job is to find out things that are a bit odd in here.
>
> **[2:16](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-when-searching-for-quirks-in-your-data?u=76281980&t=136)** Now it's not a game of gotcha.
>
> **[2:18](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-when-searching-for-quirks-in-your-data?u=76281980&t=138)** You're not trying to say that the data's wrong or that there's something wrong with the process, that's not your purpose.
>
> **[2:24](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-when-searching-for-quirks-in-your-data?u=76281980&t=144)** Your purpose is to uncover anything that might prevent the model from succeeding.
>
> **[2:30](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-when-searching-for-quirks-in-your-data?u=76281980&t=150)** Sometimes that does uncover issues with how things are labeled and how they're stored.
>
> **[2:37](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-when-searching-for-quirks-in-your-data?u=76281980&t=157)** We all know that sometimes there problems in the data, but that's not the primary mission the primary mission is making sure that you don't run into trouble, that will stay with you.
>
> **[2:46](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-when-searching-for-quirks-in-your-data?u=76281980&t=166)** So let's make sure that all of this is selected.
>
> **[2:50](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-when-searching-for-quirks-in-your-data?u=76281980&t=170)** And let's look at one of these oddities together.
>
> **[2:54](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-when-searching-for-quirks-in-your-data?u=76281980&t=174)** So notice I've got a question mark here in row two for both work class and occupation.
>
> **[3:02](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-when-searching-for-quirks-in-your-data?u=76281980&t=182)** So let's take a closer look.
>
> **[3:05](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-when-searching-for-quirks-in-your-data?u=76281980&t=185)** I'm going to to choose only the question marks and it looks like whenever there are a question mark on one, there also a question mark on the other.
>
> **[3:18](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-when-searching-for-quirks-in-your-data?u=76281980&t=198)** Now again, you can confirm this with a cross tab, but we're just taking a quick look here and it looks like that's the case.
>
> **[3:27](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-when-searching-for-quirks-in-your-data?u=76281980&t=207)** So here's my question.
>
> **[3:29](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-when-searching-for-quirks-in-your-data?u=76281980&t=209)** My question is how can you have seemingly no occupation and no work class yet you have hours?
>
> **[3:39](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-when-searching-for-quirks-in-your-data?u=76281980&t=219)** Because we know that the inclusion criteria in this data set is you have to have at least an hour, but yet oddly enough we have a fairly large group, that is question mark, question mark, but yet still has hours.
>
> **[3:54](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-when-searching-for-quirks-in-your-data?u=76281980&t=234)** That's the kind of issue we'd want to raise, and you might be surprised how often, the question is unexpected.
>
> **[4:03](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-when-searching-for-quirks-in-your-data?u=76281980&t=243)** Because people look at individual variables all the time and anyone who's in charge of this data or is a consumer of this data is going to know all of the allowed values.
>
> **[4:15](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-when-searching-for-quirks-in-your-data?u=76281980&t=255)** But there's a distinct possibility, that they don't know that this many cases are occurring, where column B is question mark and column G is question mark and yet there's a positive number of hours.
>
> **[4:28](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/tips-and-tricks-when-searching-for-quirks-in-your-data?u=76281980&t=268)** That's the piece of information that you're uncovering and that you're sharing with them and on any real world project that I've been a part of, there are dozens of issues like this that come up and that have to be rectified before you move into data prep, where they would be resolved and then into modeling.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), case. (1), raise (1)
> **CLI Commands:** find (1), make (1)
> **UI Navigation:** go to (2)
> **Definitions:** is an  (1), is a  (1)
> **Warnings:** gotcha (1)
> **Speakers:** - [instructor] (1)

#### Learning when to discard rows
> [LinkedIn Learning](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/learning-when-to-discard-rows?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/learning-when-to-discard-rows?u=76281980&t=0)** - There is a lot of confusion about discarding data and machine learning.
>
> **[0:05](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/learning-when-to-discard-rows?u=76281980&t=5)** Many folks will imply that you keep all the data in the model and it's just not true.
>
> **[0:12](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/learning-when-to-discard-rows?u=76281980&t=12)** It's helpful to imagine what will really be taking place at deployment.
>
> **[0:17](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/learning-when-to-discard-rows?u=76281980&t=17)** It's not as simple as all the data being run through the model and scored.
>
> **[0:21](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/learning-when-to-discard-rows?u=76281980&t=21)** There are always exclusion criteria and often multiple models.
>
> **[0:27](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/learning-when-to-discard-rows?u=76281980&t=27)** So some data but not all data is being routed into the model.
>
> **[0:32](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/learning-when-to-discard-rows?u=76281980&t=32)** That's why only data that will be scored when the model is done should be used, When the model is developed.
>
> **[0:40](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/learning-when-to-discard-rows?u=76281980&t=40)** For instance, on a cell phone churn project I worked on, one churn reason code was military deployment.
>
> **[0:47](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/learning-when-to-discard-rows?u=76281980&t=47)** This is a different kind of churn.
>
> **[0:49](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/learning-when-to-discard-rows?u=76281980&t=49)** The reasons it is happening are different and the likely intervention strategies for a disappointed customer will be irrelevant.
>
> **[0:57](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/learning-when-to-discard-rows?u=76281980&t=57)** For all those reasons, the model is better with these cases removed.
>
> **[1:03](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/learning-when-to-discard-rows?u=76281980&t=63)** What if you're trying to predict 30 day readmit to a hospital, an important issue.
>
> **[1:08](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/learning-when-to-discard-rows?u=76281980&t=68)** Where you're trying to prevent someone from returning to the hospital with the same diagnostic code?
>
> **[1:13](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/learning-when-to-discard-rows?u=76281980&t=73)** Well, what if they weren't discharged to home?
>
> **[1:17](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/learning-when-to-discard-rows?u=76281980&t=77)** What if they were moved into an assisted living facility?
>
> **[1:21](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/learning-when-to-discard-rows?u=76281980&t=81)** They might not be processed by the same model at deployment.
>
> **[1:26](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/learning-when-to-discard-rows?u=76281980&t=86)** What if you're emailing out a promotion to your loyalty card customers?
>
> **[1:30](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/learning-when-to-discard-rows?u=76281980&t=90)** How are you going to email anonymous cash customers?
>
> **[1:35](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/learning-when-to-discard-rows?u=76281980&t=95)** They'll either be removed at deployment or routed to a different kind of model with a different set of deployment goals.
>
> **[1:44](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/learning-when-to-discard-rows?u=76281980&t=104)** So they should come out.
>
> **[1:46](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/learning-when-to-discard-rows?u=76281980&t=106)** Every single project has inclusion and exclusion criteria and the process of identifying these subpopulations in discussing them with both subject matter experts and management begins during data understanding specifically the explore data task.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2)
> **Analogies:** imagine (1), for instance (1)
> **Speakers:** - there (1)

#### Introducing ggplot2
> [LinkedIn Learning](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-ggplot2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-ggplot2?u=76281980&t=0)** - [Instructor] We're going to introduce ggplot2 as a wonderful way to make multivariate graphics.
>
> **[0:08](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-ggplot2?u=76281980&t=8)** It's very difficult to find good options for making graphics with three or four or five or even more variables, but ggplot2 is one of them.
>
> **[0:19](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-ggplot2?u=76281980&t=19)** So if you want to try it, you're going to want to download RStudio right here on the website.
>
> **[0:25](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-ggplot2?u=76281980&t=25)** They make it pretty straightforward.
>
> **[0:28](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-ggplot2?u=76281980&t=28)** And then you might want to find out a little bit more about ggplot2, although this is optional.
>
> **[0:35](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-ggplot2?u=76281980&t=35)** There's a website for this too, and the website encourages you to install ggplot2 by installing the entire Tidyverse, and you can certainly do that if you want to.
>
> **[0:49](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-ggplot2?u=76281980&t=49)** And there's also a cheat sheet for ggplot2 that you might want to download and take a quick look at.
>
> **[0:55](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-ggplot2?u=76281980&t=55)** But there's another option for installing ggplot2.
>
> **[0:59](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-ggplot2?u=76281980&t=59)** Here I am in RStudio, and we're only going to be in this platform very briefly, so I'm not going to give you an extensive overview at all, but you have a place for typing your code over there on the left.
>
> **[1:11](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-ggplot2?u=76281980&t=71)** You also have the option of a tutorial if you're interested.
>
> **[1:15](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-ggplot2?u=76281980&t=75)** There's also wonderful options for R and ggplot2 right here in the library.
>
> **[1:20](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-ggplot2?u=76281980&t=80)** We're going to stick only to our goal of understanding how to do charts with lots of variables in them, but if you want to install ggplot2, you can scroll down, find that particular package, check it off, and there you go.
>
> **[1:38](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-ggplot2?u=76281980&t=98)** So in the next video, we're going to explore how to make these charts with ggplot2.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3), find (3)
> **Prerequisites:** install (2)
> **Cross-References:** in the next (1)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [instructor] (1)

#### Orientating to R's ggplot2 for powerful multivariate data visualizations
> [LinkedIn Learning](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/orientating-to-r-s-ggplot2-for-powerful-multivariate-data-visualizations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/orientating-to-r-s-ggplot2-for-powerful-multivariate-data-visualizations?u=76281980&t=0)** - [Instructor] Okay, here we are in RStudio and what I'm going to walk you through is how to make this graphic.
>
> **[0:05](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/orientating-to-r-s-ggplot2-for-powerful-multivariate-data-visualizations?u=76281980&t=5)** Now, before I begin, let me caution you, this graphic is a little busy.
>
> **[0:09](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/orientating-to-r-s-ggplot2-for-powerful-multivariate-data-visualizations?u=76281980&t=9)** This is not something you would rush to put on an executive dashboard but our priorities are different.
>
> **[0:15](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/orientating-to-r-s-ggplot2-for-powerful-multivariate-data-visualizations?u=76281980&t=15)** We are focused on finding out what's going on in the data.
>
> **[0:19](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/orientating-to-r-s-ggplot2-for-powerful-multivariate-data-visualizations?u=76281980&t=19)** And often that means we have to look at a lot of variables at once and this graphic has four variables in it.
>
> **[0:25](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/orientating-to-r-s-ggplot2-for-powerful-multivariate-data-visualizations?u=76281980&t=25)** Now ggplot2 can make beautiful graphics but again, we're focused on getting the information content out and that means looking at outliers and so on.
>
> **[0:34](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/orientating-to-r-s-ggplot2-for-powerful-multivariate-data-visualizations?u=76281980&t=34)** So this might look a bit cluttered to you but it's because our goals are different than executive reporting.
>
> **[0:41](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/orientating-to-r-s-ggplot2-for-powerful-multivariate-data-visualizations?u=76281980&t=41)** So here we go.
>
> **[0:42](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/orientating-to-r-s-ggplot2-for-powerful-multivariate-data-visualizations?u=76281980&t=42)** To get the data in, you're going to need a command, something like this.
>
> **[0:47](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/orientating-to-r-s-ggplot2-for-powerful-multivariate-data-visualizations?u=76281980&t=47)** And we're going to call the data census while we're in RStudio.
>
> **[0:52](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/orientating-to-r-s-ggplot2-for-powerful-multivariate-data-visualizations?u=76281980&t=52)** Now, please be careful.
>
> **[0:53](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/orientating-to-r-s-ggplot2-for-powerful-multivariate-data-visualizations?u=76281980&t=53)** Your path might not be identical to mine but there we go, it seems happy with that.
>
> **[0:58](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/orientating-to-r-s-ggplot2-for-powerful-multivariate-data-visualizations?u=76281980&t=58)** It's reading it in just fine.
>
> **[1:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/orientating-to-r-s-ggplot2-for-powerful-multivariate-data-visualizations?u=76281980&t=60)** And then let's do the most basic chart we can.
>
> **[1:02](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/orientating-to-r-s-ggplot2-for-powerful-multivariate-data-visualizations?u=76281980&t=62)** Take a look at this command.
>
> **[1:05](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/orientating-to-r-s-ggplot2-for-powerful-multivariate-data-visualizations?u=76281980&t=65)** We're referring to the census data, which we've just read in.
>
> **[1:10](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/orientating-to-r-s-ggplot2-for-powerful-multivariate-data-visualizations?u=76281980&t=70)** And then we're looking at workclass_recoded.
>
> **[1:13](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/orientating-to-r-s-ggplot2-for-powerful-multivariate-data-visualizations?u=76281980&t=73)** That's why you're going to want to grab this file called Census_modified.
>
> **[1:17](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/orientating-to-r-s-ggplot2-for-powerful-multivariate-data-visualizations?u=76281980&t=77)** I've changed some of the numeric data into strings so that ggplot2 doesn't think that they're scale variables when they're really nominal.
>
> **[1:26](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/orientating-to-r-s-ggplot2-for-powerful-multivariate-data-visualizations?u=76281980&t=86)** It was the easiest way to do it.
>
> **[1:28](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/orientating-to-r-s-ggplot2-for-powerful-multivariate-data-visualizations?u=76281980&t=88)** Ggplot2 and R have tremendous power to do numeric conversions and so on.
>
> **[1:35](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/orientating-to-r-s-ggplot2-for-powerful-multivariate-data-visualizations?u=76281980&t=95)** But this was the easiest way to give you a file that already may it obvious to ggplot2 that we were dealing with nominal variables.
>
> **[1:41](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/orientating-to-r-s-ggplot2-for-powerful-multivariate-data-visualizations?u=76281980&t=101)** So let's take a look at this simple plot.
>
> **[1:46](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/orientating-to-r-s-ggplot2-for-powerful-multivariate-data-visualizations?u=76281980&t=106)** There you go, that's all there is to it.
>
> **[1:48](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/orientating-to-r-s-ggplot2-for-powerful-multivariate-data-visualizations?u=76281980&t=108)** It's a box plot with five categories.
>
> **[1:50](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/orientating-to-r-s-ggplot2-for-powerful-multivariate-data-visualizations?u=76281980&t=110)** Now, the original file had more than five but I've collapsed government into just one.
>
> **[1:55](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/orientating-to-r-s-ggplot2-for-powerful-multivariate-data-visualizations?u=76281980&t=115)** Then we've got people that are listed as private, in other words, they work for corporations, not government.
>
> **[2:02](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/orientating-to-r-s-ggplot2-for-powerful-multivariate-data-visualizations?u=76281980&t=122)** Then we've got self-employed incorporated, self-employed non-incorporated.
>
> **[2:06](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/orientating-to-r-s-ggplot2-for-powerful-multivariate-data-visualizations?u=76281980&t=126)** And people doing volunteer work.
>
> **[2:09](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/orientating-to-r-s-ggplot2-for-powerful-multivariate-data-visualizations?u=76281980&t=129)** And we can see some real differences.
>
> **[2:10](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/orientating-to-r-s-ggplot2-for-powerful-multivariate-data-visualizations?u=76281980&t=130)** For instance, the government folks, it doesn't look like there's any white rectangle there.
>
> **[2:16](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/orientating-to-r-s-ggplot2-for-powerful-multivariate-data-visualizations?u=76281980&t=136)** That's because there seemingly is almost no variance.
>
> **[2:19](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/orientating-to-r-s-ggplot2-for-powerful-multivariate-data-visualizations?u=76281980&t=139)** They all work almost exactly 40 hours.
>
> **[2:22](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/orientating-to-r-s-ggplot2-for-powerful-multivariate-data-visualizations?u=76281980&t=142)** So anyone that does not work exactly 40 hours, appears as an outlier here.
>
> **[2:29](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/orientating-to-r-s-ggplot2-for-powerful-multivariate-data-visualizations?u=76281980&t=149)** Let's make it just a little bit fancier.
>
> **[2:32](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/orientating-to-r-s-ggplot2-for-powerful-multivariate-data-visualizations?u=76281980&t=152)** Let's grab the same line and run it again.
>
> **[2:38](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/orientating-to-r-s-ggplot2-for-powerful-multivariate-data-visualizations?u=76281980&t=158)** But put a plus after boxplot and when we do that, what that allows us to do is to keep writing.
>
> **[2:45](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/orientating-to-r-s-ggplot2-for-powerful-multivariate-data-visualizations?u=76281980&t=165)** And I'm going to add in this line.
>
> **[2:49](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/orientating-to-r-s-ggplot2-for-powerful-multivariate-data-visualizations?u=76281980&t=169)** But without the plus.
>
> **[2:51](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/orientating-to-r-s-ggplot2-for-powerful-multivariate-data-visualizations?u=76281980&t=171)** Take a look.
>
> **[2:54](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/orientating-to-r-s-ggplot2-for-powerful-multivariate-data-visualizations?u=76281980&t=174)** It just makes it a little bit easier visual to see where 40 is because that's ultimately what we're trying to do.
>
> **[3:01](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/orientating-to-r-s-ggplot2-for-powerful-multivariate-data-visualizations?u=76281980&t=181)** So clearly, we can see that the group that seems to be putting in the most hours consistently would be well, the corporate folks because the 25th percentile is at 40 hours.
>
> **[3:17](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/orientating-to-r-s-ggplot2-for-powerful-multivariate-data-visualizations?u=76281980&t=197)** And the self-employed incorporated, they're putting in, but the self-employed not incorporated as well, right?
>
> **[3:25](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/orientating-to-r-s-ggplot2-for-powerful-multivariate-data-visualizations?u=76281980&t=205)** So we have the government folks right at 40.
>
> **[3:28](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/orientating-to-r-s-ggplot2-for-powerful-multivariate-data-visualizations?u=76281980&t=208)** We have the corporate and self-employed folks, 25% below or at 40.
>
> **[3:36](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/orientating-to-r-s-ggplot2-for-powerful-multivariate-data-visualizations?u=76281980&t=216)** A good chunk above and then the volunteers, somewhat lower, right?
>
> **[3:40](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/orientating-to-r-s-ggplot2-for-powerful-multivariate-data-visualizations?u=76281980&t=220)** So we've got a pattern.
>
> **[3:42](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/orientating-to-r-s-ggplot2-for-powerful-multivariate-data-visualizations?u=76281980&t=222)** But now let's make it interesting because we've only been looking at a couple of variables here and I've been making the argument that ggplot2 is powerful when you're looking at a lot more than two variables.
>
> **[3:54](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/orientating-to-r-s-ggplot2-for-powerful-multivariate-data-visualizations?u=76281980&t=234)** So we're going to go ahead and run this line again.
>
> **[3:57](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/orientating-to-r-s-ggplot2-for-powerful-multivariate-data-visualizations?u=76281980&t=237)** The plus again always indicates that we've got more to explain to it.
>
> **[4:03](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/orientating-to-r-s-ggplot2-for-powerful-multivariate-data-visualizations?u=76281980&t=243)** So this line again but with a plus.
>
> **[4:09](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/orientating-to-r-s-ggplot2-for-powerful-multivariate-data-visualizations?u=76281980&t=249)** And what we need is this facet information.
>
> **[4:14](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/orientating-to-r-s-ggplot2-for-powerful-multivariate-data-visualizations?u=76281980&t=254)** There we go.
>
> **[4:17](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/orientating-to-r-s-ggplot2-for-powerful-multivariate-data-visualizations?u=76281980&t=257)** Now it's more complicated.
>
> **[4:19](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/orientating-to-r-s-ggplot2-for-powerful-multivariate-data-visualizations?u=76281980&t=259)** So we've got to make this bigger.
>
> **[4:22](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/orientating-to-r-s-ggplot2-for-powerful-multivariate-data-visualizations?u=76281980&t=262)** We could add back our reference line if we wanted to but now, we've got a lot of information content here and hopefully, this is also given you a little bit of a feel for ggplot2 and that we're adding layers on top of layers, adding features on top of features.
>
> **[4:40](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/orientating-to-r-s-ggplot2-for-powerful-multivariate-data-visualizations?u=76281980&t=280)** So as we look here, the patterns are largely consistent but we see that pattern of the exactly 40 hours is most consistent for the government employee men earning less than 50.
>
> **[4:57](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/orientating-to-r-s-ggplot2-for-powerful-multivariate-data-visualizations?u=76281980&t=297)** We see more variation in the other combinations for government.
>
> **[5:03](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/orientating-to-r-s-ggplot2-for-powerful-multivariate-data-visualizations?u=76281980&t=303)** Also, it looks like we don't have any volunteers that are earning more than 50,000.
>
> **[5:11](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/orientating-to-r-s-ggplot2-for-powerful-multivariate-data-visualizations?u=76281980&t=311)** Now, of course, that sounds strange to talk about how much the volunteers are earning but I'm going to assume that the under 50,000 volunteers are probably retirees that have investment income but they're not getting paid for their volunteer work.
>
> **[5:27](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/orientating-to-r-s-ggplot2-for-powerful-multivariate-data-visualizations?u=76281980&t=327)** Now, I could be completely wrong about that.
>
> **[5:29](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/orientating-to-r-s-ggplot2-for-powerful-multivariate-data-visualizations?u=76281980&t=329)** That's something that you would confirm by looking at something like age and some other factors.
>
> **[5:34](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/orientating-to-r-s-ggplot2-for-powerful-multivariate-data-visualizations?u=76281980&t=334)** Now, it's not impossible to do five or even six variables ggplot2.
>
> **[5:40](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/orientating-to-r-s-ggplot2-for-powerful-multivariate-data-visualizations?u=76281980&t=340)** It gets increasingly complicated to look at but there you go.
>
> **[5:43](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/orientating-to-r-s-ggplot2-for-powerful-multivariate-data-visualizations?u=76281980&t=343)** That's the basics of how ggplot2 can allow you to build charts with three or four or five or more variables all at the same time.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), self (5), this. (1), private (1)
> **CLI Commands:** make (5)
> **Definitions:** is a  (1), in other words (1)
> **Warnings:** caution (1), be careful (1)
> **Code Identifiers:** workclass_recoded (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Producing multivariate visualizations for case study 1
> [LinkedIn Learning](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-producing-multivariate-visualizations-for-case-study-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-producing-multivariate-visualizations-for-case-study-1?u=76281980&t=0)** (electronic music)
>
> **[0:05](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-producing-multivariate-visualizations-for-case-study-1?u=76281980&t=5)** - [Instructor] Welcome to your next challenge.
>
> **[0:08](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-producing-multivariate-visualizations-for-case-study-1?u=76281980&t=8)** I'm showing the previous ggplot2 chart, because your challenge is to reproduce a chart just like this using the Titanic dataset.
>
> **[0:18](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-producing-multivariate-visualizations-for-case-study-1?u=76281980&t=18)** I've created a special file for this purpose.
>
> **[0:21](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-producing-multivariate-visualizations-for-case-study-1?u=76281980&t=21)** It's called train modified, train because it's only the train partition and modified because some numeric variables have been converted into strings so that ggplot2 immediately recognizes that they are nominal variables and not scale.
>
> **[0:39](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-producing-multivariate-visualizations-for-case-study-1?u=76281980&t=39)** So your challenge is to take the following variables and imitate this chart.
>
> **[0:46](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-producing-multivariate-visualizations-for-case-study-1?u=76281980&t=46)** Age, passenger class, survived, and sex, and note that just one of those is a scale variable and the other three are nominal.
>
> **[0:59](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-producing-multivariate-visualizations-for-case-study-1?u=76281980&t=59)** If you know, ggplot2, this should only take about five minutes.
>
> **[1:04](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-producing-multivariate-visualizations-for-case-study-1?u=76281980&t=64)** If you've never used ggplot2 before, you should be able to figure it out from the previous example, but it might take more like 15 minutes.

> [!info]- Semantic Content
>
> **Code Keywords:** class, (1)
> **Definitions:** is a  (1)
> **Analogies:** just like (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (electronic music) (1)

#### Solution: Producing multivariate visualizations for case study 1
> [LinkedIn Learning](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-producing-multivariate-visualizations-for-case-study-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-producing-multivariate-visualizations-for-case-study-1?u=76281980&t=0)** (electronic music)
>
> **[0:05](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-producing-multivariate-visualizations-for-case-study-1?u=76281980&t=5)** - [Instructor] Okay, let's imitate this in the Titanic data set.
>
> **[0:10](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-producing-multivariate-visualizations-for-case-study-1?u=76281980&t=10)** First you're going to need a command, something like this.
>
> **[0:13](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-producing-multivariate-visualizations-for-case-study-1?u=76281980&t=13)** Please be cognizant of the fact that your file structure might not be the same on your machine, but I'm reading it in from the originals folder, and I'm going to call the data set simply train.
>
> **[0:26](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-producing-multivariate-visualizations-for-case-study-1?u=76281980&t=26)** Also, I have handy the code that we used for the census data set.
>
> **[0:31](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-producing-multivariate-visualizations-for-case-study-1?u=76281980&t=31)** So the most fundamental piece is this piece.
>
> **[0:38](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-producing-multivariate-visualizations-for-case-study-1?u=76281980&t=38)** And what this is doing is telling it that the two variables are work class and hours, but that we want a box plot.
>
> **[0:45](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-producing-multivariate-visualizations-for-case-study-1?u=76281980&t=45)** So hours was our scale variable, and our scale variable on the Titanic data set is going to be age, so we can replace that.
>
> **[0:55](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-producing-multivariate-visualizations-for-case-study-1?u=76281980&t=55)** And rather than work class recoded, we have passenger class.
>
> **[1:01](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-producing-multivariate-visualizations-for-case-study-1?u=76281980&t=61)** That alone will produce a result.
>
> **[1:05](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-producing-multivariate-visualizations-for-case-study-1?u=76281980&t=65)** That's an interesting error that I've made.
>
> **[1:07](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-producing-multivariate-visualizations-for-case-study-1?u=76281980&t=67)** Let's bring it down.
>
> **[1:09](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-producing-multivariate-visualizations-for-case-study-1?u=76281980&t=69)** Perhaps you already spotted the mistake that I made is I'm still referring to the census data set, and I have to refer to the train data set.
>
> **[1:16](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-producing-multivariate-visualizations-for-case-study-1?u=76281980&t=76)** And now we should be all set.
>
> **[1:19](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-producing-multivariate-visualizations-for-case-study-1?u=76281980&t=79)** Three changes.
>
> **[1:20](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-producing-multivariate-visualizations-for-case-study-1?u=76281980&t=80)** Now, it's giving me a warning, but it's not a fatal warning.
>
> **[1:23](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-producing-multivariate-visualizations-for-case-study-1?u=76281980&t=83)** It's simply saying it's ignoring the 177 rows that don't have age.
>
> **[1:27](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-producing-multivariate-visualizations-for-case-study-1?u=76281980&t=87)** So, so far, so good.
>
> **[1:30](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-producing-multivariate-visualizations-for-case-study-1?u=76281980&t=90)** Let's bring that line down 'cause that's working correctly.
>
> **[1:34](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-producing-multivariate-visualizations-for-case-study-1?u=76281980&t=94)** Let's add a plus to indicate that we have more to do.
>
> **[1:38](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-producing-multivariate-visualizations-for-case-study-1?u=76281980&t=98)** And the additional piece that we need is the faceting.
>
> **[1:44](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-producing-multivariate-visualizations-for-case-study-1?u=76281980&t=104)** Okay, now we've used passenger class and age.
>
> **[1:48](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-producing-multivariate-visualizations-for-case-study-1?u=76281980&t=108)** We haven't used the other two, survived and sex.
>
> **[1:55](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-producing-multivariate-visualizations-for-case-study-1?u=76281980&t=115)** So let's change this to survived.
>
> **[2:01](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-producing-multivariate-visualizations-for-case-study-1?u=76281980&t=121)** And I believe we have mixed case in the Titanic data set.
>
> **[2:05](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-producing-multivariate-visualizations-for-case-study-1?u=76281980&t=125)** We will know soon enough.
>
> **[2:09](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-producing-multivariate-visualizations-for-case-study-1?u=76281980&t=129)** Yes, indeed.
>
> **[2:10](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-producing-multivariate-visualizations-for-case-study-1?u=76281980&t=130)** Let's make this bigger so that we can see it.
>
> **[2:13](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-producing-multivariate-visualizations-for-case-study-1?u=76281980&t=133)** That's a successful result.
>
> **[2:15](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-producing-multivariate-visualizations-for-case-study-1?u=76281980&t=135)** And it actually gives us a lot of information.
>
> **[2:18](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-producing-multivariate-visualizations-for-case-study-1?u=76281980&t=138)** Now, again, a chart like this isn't necessarily real pretty, but it gives us information on four variables at once, and that gives us information that we just can't get looking at one or two variables at a time.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), this. (1), class. (1)
> **Warnings:** warning (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (electronic music) (1)


### 9. Verify Data Quality

#### Exploring your missing data options
> [LinkedIn Learning](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/exploring-your-missing-data-options?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/exploring-your-missing-data-options?u=76281980&t=0)** - [Instructor] The fourth task of the data understanding phase is verify data quality.
>
> **[0:07](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/exploring-your-missing-data-options?u=76281980&t=7)** Here's a small piece of the Titanic data, so what are some of the first things I would be looking for?
>
> **[0:13](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/exploring-your-missing-data-options?u=76281980&t=13)** Well, we have complete ID information.
>
> **[0:16](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/exploring-your-missing-data-options?u=76281980&t=16)** That's critical because missing IDs make data integration extremely difficult.
>
> **[0:20](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/exploring-your-missing-data-options?u=76281980&t=20)** Not impossible, but it's so problematic that if you had missing IDs, it becomes a topic for the whole team to discuss.
>
> **[0:28](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/exploring-your-missing-data-options?u=76281980&t=28)** We have no missing data on the target variable.
>
> **[0:31](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/exploring-your-missing-data-options?u=76281980&t=31)** This is, perhaps, even more important.
>
> **[0:34](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/exploring-your-missing-data-options?u=76281980&t=34)** Supervised learning requires this variable to be present and accurate, but no problem here.
>
> **[0:40](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/exploring-your-missing-data-options?u=76281980&t=40)** Now, we get to the real heart of the matter.
>
> **[0:43](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/exploring-your-missing-data-options?u=76281980&t=43)** It is very rare in a real-world data set complex enough to be useful that you have no missing data among the inputs.
>
> **[0:51](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/exploring-your-missing-data-options?u=76281980&t=51)** In 25 years of doing this, I'm not sure that I've ever encountered it.
>
> **[0:55](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/exploring-your-missing-data-options?u=76281980&t=55)** Now, I've had clients that thought they were okay on missing data, but often because they weren't being very ambitious when it came to their data sources.
>
> **[1:05](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/exploring-your-missing-data-options?u=76281980&t=65)** Here we have quite a bit haphazardly appearing in various places with no obvious pattern.
>
> **[1:11](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/exploring-your-missing-data-options?u=76281980&t=71)** Obviously the worst culprit is cabin.
>
> **[1:14](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/exploring-your-missing-data-options?u=76281980&t=74)** It seems about half of these cases are missing.
>
> **[1:18](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/exploring-your-missing-data-options?u=76281980&t=78)** If that were true of all the other rows in the data set, we would have a real problem with this variable, so what are the options?
>
> **[1:27](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/exploring-your-missing-data-options?u=76281980&t=87)** Assuming that you've confirmed that there are no other alternative sources of this data, there's really just three, you can drop the problematic columns and that's a decision you make for each column.
>
> **[1:42](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/exploring-your-missing-data-options?u=76281980&t=102)** You can get rid of rows that are proving to be a problem, or you can impute, meaning to estimate, the missing data.
>
> **[1:52](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/exploring-your-missing-data-options?u=76281980&t=112)** Do we have any candidates to impute here?
>
> **[1:55](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/exploring-your-missing-data-options?u=76281980&t=115)** Well, at first glance, age seems to be the most promising.
>
> **[2:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/exploring-your-missing-data-options?u=76281980&t=120)** For instance, if we know that they were the ones to buy the ticket, they're almost certainly an adult, so if they are a child of the ticket holder, that's a clue, and if they are the parent of the ticket holder, that's a clue as well, so there's some potential here.
>
> **[2:20](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/exploring-your-missing-data-options?u=76281980&t=140)** So, what are the options for age?
>
> **[2:23](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/exploring-your-missing-data-options?u=76281980&t=143)** Well, we could estimate the missing value, as we've just discussed.
>
> **[2:28](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/exploring-your-missing-data-options?u=76281980&t=148)** We could drop the entire age column.
>
> **[2:31](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/exploring-your-missing-data-options?u=76281980&t=151)** We could drop the rows that are missing age, but in this data set, quite a few rows are missing age.
>
> **[2:39](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/exploring-your-missing-data-options?u=76281980&t=159)** We would be losing 20, 30% of our data set doing that.
>
> **[2:43](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/exploring-your-missing-data-options?u=76281980&t=163)** We could replace with the mean.
>
> **[2:46](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/exploring-your-missing-data-options?u=76281980&t=166)** Would that be okay?
>
> **[2:48](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/exploring-your-missing-data-options?u=76281980&t=168)** Well, if we were doing something like regression, replacing a whole bunch of cases with the mean aren't going to move the regression line, but we really have to think through the implications of replace with mean.
>
> **[3:03](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/exploring-your-missing-data-options?u=76281980&t=183)** However, there's software that automatically does it, and a lot of folks rely upon that approach.
>
> **[3:08](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/exploring-your-missing-data-options?u=76281980&t=188)** Just use it with caution.
>
> **[3:10](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/exploring-your-missing-data-options?u=76281980&t=190)** It can be problematic.
>
> **[3:12](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/exploring-your-missing-data-options?u=76281980&t=192)** How 'about replacing with zero?
>
> **[3:15](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/exploring-your-missing-data-options?u=76281980&t=195)** Well, replacing with zero sometimes scares folks a bit, and it should.
>
> **[3:21](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/exploring-your-missing-data-options?u=76281980&t=201)** It's not a good idea if the missing value is definitely not zero, so here replacing age with zero makes no sense, but if a credit report showed no evidence of a credit card, then a good guess is there is no credit card, so sometimes replacing with zero makes sense.
>
> **[3:43](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/exploring-your-missing-data-options?u=76281980&t=223)** Other times it doesn't.
>
> **[3:45](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/exploring-your-missing-data-options?u=76281980&t=225)** So, every variable in the data set that has any missing data needs a few minutes of attention just like we've given age.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Analogies:** for instance (1), just like (1)
> **Code Keywords:** this, (1)
> **Warnings:** caution (1)
> **Speakers:** - [instructor] (1)

#### Why you lose rows to listwise deletion
> [LinkedIn Learning](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/why-you-lose-rows-to-listwise-deletion?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/why-you-lose-rows-to-listwise-deletion?u=76281980&t=0)** - [Instructor] Here's a topic that can get you into real trouble if you're not familiar with it.
>
> **[0:05](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/why-you-lose-rows-to-listwise-deletion?u=76281980&t=5)** Listwise deletion.
>
> **[0:08](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/why-you-lose-rows-to-listwise-deletion?u=76281980&t=8)** When operating under listwise deletion, if any value is missing, the entire record is excluded from your analysis.
>
> **[0:18](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/why-you-lose-rows-to-listwise-deletion?u=76281980&t=18)** Here's that small sample of the Titanic data.
>
> **[0:21](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/why-you-lose-rows-to-listwise-deletion?u=76281980&t=21)** Note that if listwise deletion is applied, almost all of the data will be discarded.
>
> **[0:28](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/why-you-lose-rows-to-listwise-deletion?u=76281980&t=28)** However, cabin, while it contains some interesting information, is in no shape at the moment to be a good input variable.
>
> **[0:37](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/why-you-lose-rows-to-listwise-deletion?u=76281980&t=37)** So let's assume that you drop it.
>
> **[0:40](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/why-you-lose-rows-to-listwise-deletion?u=76281980&t=40)** However, on real world projects you want to be fixing your variables, not just discarding them, but in this case it's not clear that cabin is going to help us so let's remove it.
>
> **[0:54](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/why-you-lose-rows-to-listwise-deletion?u=76281980&t=54)** When we do, things have changed a lot, however, we're still losing four rows and keeping only six.
>
> **[1:03](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/why-you-lose-rows-to-listwise-deletion?u=76281980&t=63)** Taken on a grand scale of hundreds of thousands of records, that's just too much.
>
> **[1:09](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/why-you-lose-rows-to-listwise-deletion?u=76281980&t=69)** So as you can see, it's very important that you know this is going on and it's important that you aren't casual about throwing in a variable like cabin just as an experiment.
>
> **[1:21](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/why-you-lose-rows-to-listwise-deletion?u=76281980&t=81)** Everything you do has ripple effects and that's why assessing data quality is so important.
>
> **[1:28](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/why-you-lose-rows-to-listwise-deletion?u=76281980&t=88)** So why do you need to understand listwise deletion?
>
> **[1:33](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/why-you-lose-rows-to-listwise-deletion?u=76281980&t=93)** Well, it's not there to be a burden, it's there so that you don't accidentally produce poor results.
>
> **[1:40](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/why-you-lose-rows-to-listwise-deletion?u=76281980&t=100)** The problem is that too few know about it or know that their software is automatically doing it behind the scenes.
>
> **[1:49](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/why-you-lose-rows-to-listwise-deletion?u=76281980&t=109)** As we've just seen with a small data sample, you could lose half of your data.
>
> **[1:55](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/why-you-lose-rows-to-listwise-deletion?u=76281980&t=115)** Or worse, you could exclude all of your data.
>
> **[1:59](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/why-you-lose-rows-to-listwise-deletion?u=76281980&t=119)** Zero records is not uncommon.
>
> **[2:03](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/why-you-lose-rows-to-listwise-deletion?u=76281980&t=123)** Let's discuss why.
>
> **[2:05](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/why-you-lose-rows-to-listwise-deletion?u=76281980&t=125)** What if you asked passengers about their level of satisfaction for their in flight meal.
>
> **[2:12](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/why-you-lose-rows-to-listwise-deletion?u=76281980&t=132)** No one on board has had both the first class meal and the coach meal, so even if you have ten million rows of data, not a single row is complete and this is true even if you have 500 variables.
>
> **[2:28](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/why-you-lose-rows-to-listwise-deletion?u=76281980&t=148)** It happens all the time.
>
> **[2:32](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/why-you-lose-rows-to-listwise-deletion?u=76281980&t=152)** So if this is the first time you're hearing about listwise deletion, go back to your favorite algorithm and your favorite software option and double check that it hasn't been a hidden factor in your analysis.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3)
> **Cross-References:** go back to (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Investigating the provenance of the missing data
> [LinkedIn Learning](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/investigating-the-provenance-of-the-missing-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/investigating-the-provenance-of-the-missing-data?u=76281980&t=0)** - [Instructor] A very common pattern when examining data quality is variables that cluster together in terms of their missing data.
>
> **[0:09](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/investigating-the-provenance-of-the-missing-data?u=76281980&t=9)** When one is missing, it's consistently missing on some other column, but not in a random pattern.
>
> **[0:15](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/investigating-the-provenance-of-the-missing-data?u=76281980&t=15)** When this happens, try to figure out the provenance of the data.
>
> **[0:20](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/investigating-the-provenance-of-the-missing-data?u=76281980&t=20)** Where did it come from?
>
> **[0:22](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/investigating-the-provenance-of-the-missing-data?u=76281980&t=22)** I had a memorable experience visiting a cell phone company overseas.
>
> **[0:26](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/investigating-the-provenance-of-the-missing-data?u=76281980&t=26)** Prepaid mobile minutes are more popular internationally than they are domestically.
>
> **[0:31](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/investigating-the-provenance-of-the-missing-data?u=76281980&t=31)** It's quite common for international business travelers to buy a SIM card from a kiosk right in the airport.
>
> **[0:37](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/investigating-the-provenance-of-the-missing-data?u=76281980&t=37)** It's also common at convenience stores.
>
> **[0:40](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/investigating-the-provenance-of-the-missing-data?u=76281980&t=40)** Many of the customers of my client on this trip about half purchase their minutes in this way, either at a kiosk or a convenience store.
>
> **[0:49](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/investigating-the-provenance-of-the-missing-data?u=76281980&t=49)** Alternatively, some of their customers had a monthly contract, which of course, is the dominant method here in the US.
>
> **[0:56](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/investigating-the-provenance-of-the-missing-data?u=76281980&t=56)** Those customers fill out a form with various information requests like name, address, email, and age.
>
> **[1:03](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/investigating-the-provenance-of-the-missing-data?u=76281980&t=63)** Well, you get a pattern of something like this.
>
> **[1:06](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/investigating-the-provenance-of-the-missing-data?u=76281980&t=66)** Modeling algorithms generally love scale variables.
>
> **[1:10](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/investigating-the-provenance-of-the-missing-data?u=76281980&t=70)** Many will automatically throw out strings, like name and address, but they try to fit a variable like age to the model.
>
> **[1:19](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/investigating-the-provenance-of-the-missing-data?u=76281980&t=79)** Of course, if you've got list wise deletion being applied, perhaps automatically, even without the modelers knowledge, half of the rows would be thrown out, and age would be tried but with the reduced number of rows.
>
> **[1:35](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/investigating-the-provenance-of-the-missing-data?u=76281980&t=95)** Or maybe the missing ages have been populated with zeros, which is incorrect, but it's a common mistake.
>
> **[1:44](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/investigating-the-provenance-of-the-missing-data?u=76281980&t=104)** It's hard to know which of these scenarios is worse, but there's no need to let it happen.
>
> **[1:50](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/investigating-the-provenance-of-the-missing-data?u=76281980&t=110)** You must explore the data and intervene before these mistakes are made during the modeling phase.
>
> **[1:57](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/investigating-the-provenance-of-the-missing-data?u=76281980&t=117)** What I always do is replace the data with simple Booleans, which indicate whether the data is known, or if it's missing just ones and zeros.
>
> **[2:07](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/investigating-the-provenance-of-the-missing-data?u=76281980&t=127)** Then very simple correlations can be run, and you should be able to confirm the pattern even on a very large data set.
>
> **[2:16](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/investigating-the-provenance-of-the-missing-data?u=76281980&t=136)** Before you know it, you can treat the variables like a block of variables.
>
> **[2:21](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/investigating-the-provenance-of-the-missing-data?u=76281980&t=141)** And then it's easy to see in this case that it all has something to do with the customer type.
>
> **[2:27](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/investigating-the-provenance-of-the-missing-data?u=76281980&t=147)** Now, of course, you don't keep the one variable in the modeling phase, this is to confirm the provenance.
>
> **[2:34](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/investigating-the-provenance-of-the-missing-data?u=76281980&t=154)** The SIM card kiosk and convenience store customers always have this information missing.
>
> **[2:41](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/investigating-the-provenance-of-the-missing-data?u=76281980&t=161)** On this real world project, the algorithm was indicating that age was an important predictor but really what was happening was a missing data problem.
>
> **[2:53](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/investigating-the-provenance-of-the-missing-data?u=76281980&t=173)** The solution isn't very complicated.
>
> **[2:56](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/investigating-the-provenance-of-the-missing-data?u=76281980&t=176)** If you know the provenance, you can break the data into two groups and then model them separately.
>
> **[3:02](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/investigating-the-provenance-of-the-missing-data?u=76281980&t=182)** I demonstrate a two model modeling approach just like this in my ensembles and made modeling course, right here on the Library.
>
> **[3:10](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/investigating-the-provenance-of-the-missing-data?u=76281980&t=190)** It addresses the missing data problem, but it is also better suited to the business problem.
>
> **[3:16](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/investigating-the-provenance-of-the-missing-data?u=76281980&t=196)** These two groups of customers probably have quite different needs and wants.
>
> **[3:23](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/investigating-the-provenance-of-the-missing-data?u=76281980&t=203)** Two models will address their needs better.

> [!info]- Semantic Content
>
> **Code Keywords:** this. (1), throw (1), let (1), type. (1)
> **Env Vars:** sim (2)
> **Analogies:** just like (1)
> **Warnings:** common mistake (1)
> **Speakers:** - [instructor] (1)


### 10. Missing Data Case Study

#### Introducing the KDD Cup 1998 data
> [LinkedIn Learning](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-kdd-cup-1998-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-kdd-cup-1998-data?u=76281980&t=0)** - Okay to do a proper job talking about missing data, we need a data set with a lot of missing data.
>
> **[0:08](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-kdd-cup-1998-data?u=76281980&t=8)** In this data set, the 1998 KDD Cup, KDD is the knowledge discovery in databases conference, and they have an annual competition.
>
> **[0:17](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-kdd-cup-1998-data?u=76281980&t=17)** The 1998 cup competition data set is famously a bit of a mess.
>
> **[0:23](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-kdd-cup-1998-data?u=76281980&t=23)** It's got an odd coding scheme, It's got lots of blanks it has lots of missing data.
>
> **[0:29](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-kdd-cup-1998-data?u=76281980&t=29)** Frankly it's a real challenge to work with, but that's why it's perfect for our purposes.
>
> **[0:35](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-kdd-cup-1998-data?u=76281980&t=35)** So the data set is available here in the UCI machine learning repository.
>
> **[0:39](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-kdd-cup-1998-data?u=76281980&t=39)** There's another website that has more supporting information.
>
> **[0:44](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-kdd-cup-1998-data?u=76281980&t=44)** That's this website, this is the competition website from years ago and it's still up.
>
> **[0:49](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-kdd-cup-1998-data?u=76281980&t=49)** And if you scroll down and importantly, you can see all kinds of supporting files including the data dictionary, which you're going to find very valuable.
>
> **[0:59](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-kdd-cup-1998-data?u=76281980&t=59)** Here it is you can see this is from years ago, it looks like a coding font.
>
> **[1:03](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-kdd-cup-1998-data?u=76281980&t=63)** And if we scroll down, there's all kinds of information here, numerous titles and so on, but really a lot of detail.
>
> **[1:12](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-kdd-cup-1998-data?u=76281980&t=72)** And you can get a sense why some of the variables are somewhat of a mess, like rather than having ones and zeros that has Xs and blanks.
>
> **[1:21](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-kdd-cup-1998-data?u=76281980&t=81)** Also noteworthy.
>
> **[1:22](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-kdd-cup-1998-data?u=76281980&t=82)** Sometimes you'll get to a part of the data dictionary, and we'll talk about a whole section.
>
> **[1:27](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-kdd-cup-1998-data?u=76281980&t=87)** You're going to find that very valuable as well.
>
> **[1:29](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-kdd-cup-1998-data?u=76281980&t=89)** Now you may think, Oh, a competition data set like this isn't really good practice, but you know, I find that these data dictionaries are very similar to what I encounter in a corporate setting when I'm trying to look at corporate documentation.
>
> **[1:44](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-kdd-cup-1998-data?u=76281980&t=104)** So dealing with a data set like this, I really do think is good practice.
>
> **[1:47](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-kdd-cup-1998-data?u=76281980&t=107)** Even though this one is a bit unique.
>
> **[1:49](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-kdd-cup-1998-data?u=76281980&t=109)** Okay.
>
> **[1:50](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-kdd-cup-1998-data?u=76281980&t=110)** Now what I'd like to do is look at the data set in two forms and tell you a little bit more about it.
>
> **[1:56](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-kdd-cup-1998-data?u=76281980&t=116)** Here we are in Excel, and this has been provided to you as a CSV file, as well as an Excel file.
>
> **[2:04](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-kdd-cup-1998-data?u=76281980&t=124)** It's called Cup 98 Learn it's the same data set we were just looking at on the website.
>
> **[2:09](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-kdd-cup-1998-data?u=76281980&t=129)** You can download it.
>
> **[2:10](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-kdd-cup-1998-data?u=76281980&t=130)** And there it is.
>
> **[2:11](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-kdd-cup-1998-data?u=76281980&t=131)** It's not an Excel form, but I brought into Excel for you.
>
> **[2:14](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-kdd-cup-1998-data?u=76281980&t=134)** So let's just talk about it in general terms.
>
> **[2:17](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-kdd-cup-1998-data?u=76281980&t=137)** It's got hundreds of columns and I liked that about it because it provides good practice.
>
> **[2:22](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-kdd-cup-1998-data?u=76281980&t=142)** But what starts to just scroll through the columns a little bit and we find lots and lots of blanks everywhere.
>
> **[2:30](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-kdd-cup-1998-data?u=76281980&t=150)** Then you have sections where you have this distinct pattern where some rows are populated in some rows aren't, but where the blank seemed to be contiguous, that's an interesting pattern that I always want to look for.
>
> **[2:41](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-kdd-cup-1998-data?u=76281980&t=161)** And then after columns and columns of these blanks, you get to a section that at least for the top 30 rows seems completely populated.
>
> **[2:52](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-kdd-cup-1998-data?u=76281980&t=172)** And I can tell you from experience that if you scroll down, there's a hundred thousand rows here, but if you scroll down, you're going to find that it's also populated there.
>
> **[3:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-kdd-cup-1998-data?u=76281980&t=180)** Why?
>
> **[3:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-kdd-cup-1998-data?u=76281980&t=180)** Well, if you go to the data dictionary, it will confirm it, you're getting to census data here.
>
> **[3:06](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-kdd-cup-1998-data?u=76281980&t=186)** This is a very important point because what it means is the information on individuals is spotty, but we've merged that with census information, which is largely complete.
>
> **[3:20](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-kdd-cup-1998-data?u=76281980&t=200)** Looking at heterogeneous data like this all at once is going to be very, very confusing.
>
> **[3:26](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-kdd-cup-1998-data?u=76281980&t=206)** You really want to look at the data sources and the department separately.
>
> **[3:30](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-kdd-cup-1998-data?u=76281980&t=210)** So what I've done is provided you another version of the data set with reduced number of variables and get these census variables out.
>
> **[3:37](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-kdd-cup-1998-data?u=76281980&t=217)** It's not that the census variables aren't useful, it's rather you should look at the variables at the individual level first, establish a baseline and then bring in the census variables if they help.
>
> **[3:50](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-kdd-cup-1998-data?u=76281980&t=230)** You cannot build a model like this on just the census variables, because if you were to do so, you would be scoring neighborhoods and not individuals.
>
> **[4:01](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-kdd-cup-1998-data?u=76281980&t=241)** So we really have to start with the individuals first and bring in the neighborhood information later.
>
> **[4:07](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-kdd-cup-1998-data?u=76281980&t=247)** Let's go to the other dataset.
>
> **[4:09](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-kdd-cup-1998-data?u=76281980&t=249)** This has been provided as well.
>
> **[4:11](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-kdd-cup-1998-data?u=76281980&t=251)** I know that the name is a little bit odd, but that's because this particular data set was featured ina book that I was a part of called the SPSS Model or Cookbook.
>
> **[4:20](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-kdd-cup-1998-data?u=76281980&t=260)** There's some interesting demonstrations with it in there.
>
> **[4:23](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-kdd-cup-1998-data?u=76281980&t=263)** It's also used in my ensembles course for modeling a dataset like this.
>
> **[4:30](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-kdd-cup-1998-data?u=76281980&t=270)** Which makes a nice compliment to the examples we're going to see in this course.
>
> **[4:34](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-kdd-cup-1998-data?u=76281980&t=274)** So it has fewer variables.
>
> **[4:36](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-kdd-cup-1998-data?u=76281980&t=276)** Otherwise everything is here, and the main variables that have been taken out are the census variables, as we've just discussed.
>
> **[4:44](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/introducing-the-kdd-cup-1998-data?u=76281980&t=284)** So what start looking at this data.

> [!info]- Semantic Content
>
> **UI Navigation:** scroll down (4), go to (2)
> **CLI Commands:** find (5)
> **Code Keywords:** let (2), this, (1), for. (1), this. (1)
> **Env Vars:** kdd (2), uci (1), csv (1), spss (1)
> **Definitions:** is a  (3)
> **Best Practices:** good practice (3)
> **Analogies:** similar to (1)
> **Speakers:** - okay (1)

#### What is the pattern of missing data in your data?
> [LinkedIn Learning](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/what-is-the-pattern-of-missing-data-in-your-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/what-is-the-pattern-of-missing-data-in-your-data?u=76281980&t=0)** - [Instructor] Okay, I'm in KNIME, and I've started a new workflow called chapter 10.
>
> **[0:05](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/what-is-the-pattern-of-missing-data-in-your-data?u=76281980&t=5)** And I'm working with the reduced vars version of the data set just to make it a little bit more manageable.
>
> **[0:13](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/what-is-the-pattern-of-missing-data-in-your-data?u=76281980&t=13)** You're going to find that when you have a large data set, and 100,000 really shouldn't be large.
>
> **[0:19](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/what-is-the-pattern-of-missing-data-in-your-data?u=76281980&t=19)** But when you have a large data set with a lot of missing data, it can be more computationally intensive and the reason is that you can end up having huge numbers of categories within those nominal variables, particularly if there's a lot of errors and blanks and so on.
>
> **[0:36](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/what-is-the-pattern-of-missing-data-in-your-data?u=76281980&t=36)** So I think you're going to find that handling the original version of the data can be a little bit challenging.
>
> **[0:42](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/what-is-the-pattern-of-missing-data-in-your-data?u=76281980&t=42)** So we're using the reduced vars version for this.
>
> **[0:45](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/what-is-the-pattern-of-missing-data-in-your-data?u=76281980&t=45)** And I've attached to Data Explorer, and it's already run.
>
> **[0:49](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/what-is-the-pattern-of-missing-data-in-your-data?u=76281980&t=49)** So let's take a look.
>
> **[0:51](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/what-is-the-pattern-of-missing-data-in-your-data?u=76281980&t=51)** Okay, so here we go.
>
> **[0:52](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/what-is-the-pattern-of-missing-data-in-your-data?u=76281980&t=52)** How do you size up your missing data situation?
>
> **[0:55](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/what-is-the-pattern-of-missing-data-in-your-data?u=76281980&t=55)** Well, clearly, we can scan through all these variables, at the moment I'm going to focus on these numeric variables, looks like we have a whole bunch of those, we also have a bunch of nominal variables.
>
> **[1:06](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/what-is-the-pattern-of-missing-data-in-your-data?u=76281980&t=66)** The report, of course, is different for the two, okay.
>
> **[1:09](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/what-is-the-pattern-of-missing-data-in-your-data?u=76281980&t=69)** But in particular, it's very helpful to go to those numeric ones because there's some columns there that are very helpful to us.
>
> **[1:18](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/what-is-the-pattern-of-missing-data-in-your-data?u=76281980&t=78)** And that's both the number of missing as well as the number of zeros.
>
> **[1:24](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/what-is-the-pattern-of-missing-data-in-your-data?u=76281980&t=84)** So here's the real focus.
>
> **[1:26](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/what-is-the-pattern-of-missing-data-in-your-data?u=76281980&t=86)** To do this properly takes a long time, you have to make sure that you're not conflating the zeros and the missing, but we have a particular focus at the moment and that is to try to find the underlying pattern.
>
> **[1:38](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/what-is-the-pattern-of-missing-data-in-your-data?u=76281980&t=98)** With a data set that's as complex as this, you start to realize why it's helpful to look at the data sources individually before you integrate them.
>
> **[1:48](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/what-is-the-pattern-of-missing-data-in-your-data?u=76281980&t=108)** Because when it's all mixed together, you lose a bit of the underlying structure.
>
> **[1:53](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/what-is-the-pattern-of-missing-data-in-your-data?u=76281980&t=113)** So what I'm going to suggest that we do is scroll down a bit and look for when the number of missing might repeat and we see a clear instance of that here.
>
> **[2:04](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/what-is-the-pattern-of-missing-data-in-your-data?u=76281980&t=124)** MBCRAFT, MBGARDEN MBBOOK.
>
> **[2:08](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/what-is-the-pattern-of-missing-data-in-your-data?u=76281980&t=128)** Now the data dictionary seems to indicate that this is magazines and publications.
>
> **[2:14](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/what-is-the-pattern-of-missing-data-in-your-data?u=76281980&t=134)** The notion is, is that if you subscribe to a gardening publication that your into gardening or into photography, and that might tell us something about your personality, which in turn might tell us something about your donation pattern.
>
> **[2:29](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/what-is-the-pattern-of-missing-data-in-your-data?u=76281980&t=149)** So what we can do is since this number is really coming up a lot, 36380, we're going to make note of that.
>
> **[2:37](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/what-is-the-pattern-of-missing-data-in-your-data?u=76281980&t=157)** Let's see if there's other sections that seem to have that pattern.
>
> **[2:42](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/what-is-the-pattern-of-missing-data-in-your-data?u=76281980&t=162)** This is a rather different pattern down here.
>
> **[2:45](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/what-is-the-pattern-of-missing-data-in-your-data?u=76281980&t=165)** It does seem like a lot of these have a very, very high number of missing, but it's not the same number coming up.
>
> **[2:53](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/what-is-the-pattern-of-missing-data-in-your-data?u=76281980&t=173)** So what is going on with those?
>
> **[2:55](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/what-is-the-pattern-of-missing-data-in-your-data?u=76281980&t=175)** Well RDATE_3, RDATE_4, RDATE_5, they're clearly all related, these are referring to the last date that they made a donation.
>
> **[3:06](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/what-is-the-pattern-of-missing-data-in-your-data?u=76281980&t=186)** And you start to think, wow, it has something to do with customer tenure.
>
> **[3:11](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/what-is-the-pattern-of-missing-data-in-your-data?u=76281980&t=191)** You know, the longer you've been around, the more promotions you've been exposed to, something is going on there that we'd have to talk to a subject matter expert about because 10s of thousands of missing are clearly going to be a concern.
>
> **[3:24](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/what-is-the-pattern-of-missing-data-in-your-data?u=76281980&t=204)** So we have to figure out why this is the case.
>
> **[3:27](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/what-is-the-pattern-of-missing-data-in-your-data?u=76281980&t=207)** And it's probably simply if they're new, they weren't even exposed to an older promotion.
>
> **[3:33](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/what-is-the-pattern-of-missing-data-in-your-data?u=76281980&t=213)** And maybe that's why they're missing.
>
> **[3:34](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/what-is-the-pattern-of-missing-data-in-your-data?u=76281980&t=214)** That would be a working theory that we might have.
>
> **[3:38](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/what-is-the-pattern-of-missing-data-in-your-data?u=76281980&t=218)** Continuing down we see the same but it's those R variables again, now it's RAMNT.
>
> **[3:43](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/what-is-the-pattern-of-missing-data-in-your-data?u=76281980&t=223)** So it's how much they donated.
>
> **[3:45](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/what-is-the-pattern-of-missing-data-in-your-data?u=76281980&t=225)** So maybe if they didn't donate, they're missing.
>
> **[3:47](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/what-is-the-pattern-of-missing-data-in-your-data?u=76281980&t=227)** But does that really mean that we throw the roll out?
>
> **[3:50](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/what-is-the-pattern-of-missing-data-in-your-data?u=76281980&t=230)** Certainly not, we have to figure it out.
>
> **[3:52](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/what-is-the-pattern-of-missing-data-in-your-data?u=76281980&t=232)** Let's go back to the section because this is a very specific pattern.
>
> **[3:57](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/what-is-the-pattern-of-missing-data-in-your-data?u=76281980&t=237)** Whenever I see the numbers repeating, I get very intrigued because I want to analyze them as a section.
>
> **[4:03](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/what-is-the-pattern-of-missing-data-in-your-data?u=76281980&t=243)** So I'm going to go all the way up to the top and sort descending, and I want to see if there's anything else that has that repeating number that escaped my attention.
>
> **[4:17](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/what-is-the-pattern-of-missing-data-in-your-data?u=76281980&t=257)** Well, MBCOLECT, we can see doesn't quite have that 36380, but it's awfully close.
>
> **[4:24](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/what-is-the-pattern-of-missing-data-in-your-data?u=76281980&t=264)** Yeah, there's no other variables that really show that pattern.
>
> **[4:29](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/what-is-the-pattern-of-missing-data-in-your-data?u=76281980&t=269)** So what I would want to do now is look only at this section and dig a level deeper.
>
> **[4:35](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/what-is-the-pattern-of-missing-data-in-your-data?u=76281980&t=275)** And that's what we're going to do next.

> [!info]- Semantic Content
>
> **Env Vars:** knime (1), mbcraft (1), mbgarden (1), mbbook (1), rdate_3 (1)
> **Code Keywords:** let (3), this. (1), this, (1), case. (1), new, (1)
> **CLI Commands:** make (3), find (3)
> **Cross-References:** coming up (2), go back to (1)
> **UI Navigation:** go to (1), scroll down (1)
> **Definitions:** is a  (2)
> **Tools:** notion (1)
> **Speakers:** - [instructor] (1)

#### Is the missing data worth saving?
> [LinkedIn Learning](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/is-the-missing-data-worth-saving?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/is-the-missing-data-worth-saving?u=76281980&t=0)** - [Instructor] Okay, we're back in KNIME with the same data set and the same workflow, but I've added several nodes because what we're about to do is a bit elaborate.
>
> **[0:08](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/is-the-missing-data-worth-saving?u=76281980&t=8)** It'll be easier to walk you through it, with the work done in advance.
>
> **[0:12](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/is-the-missing-data-worth-saving?u=76281980&t=12)** So our mission at the moment is to deal with the fact that we have several sections within our data set.
>
> **[0:20](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/is-the-missing-data-worth-saving?u=76281980&t=20)** And when one variable is missing, it usually means a dozen variables are missing.
>
> **[0:24](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/is-the-missing-data-worth-saving?u=76281980&t=24)** So let's take a closer look.
>
> **[0:26](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/is-the-missing-data-worth-saving?u=76281980&t=26)** I've added a row filter, and I've chosen one variable out of this section about magazines and so on, MBCRAFT, and I've checked to see if that's missing.
>
> **[0:41](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/is-the-missing-data-worth-saving?u=76281980&t=41)** And I'm going to exclude those rows that are missing.
>
> **[0:47](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/is-the-missing-data-worth-saving?u=76281980&t=47)** So if our understanding of the data is correct, I'm not just excluding MBCRAFT missing cases.
>
> **[0:54](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/is-the-missing-data-worth-saving?u=76281980&t=54)** Those cases will be missing on that whole section of variables.
>
> **[1:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/is-the-missing-data-worth-saving?u=76281980&t=60)** So in the column filter, so that I can focus on what I'm doing, I've got that whole section and our target variable called target B.
>
> **[1:12](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/is-the-missing-data-worth-saving?u=76281980&t=72)** B for binary in this case, it's a true false variable.
>
> **[1:20](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/is-the-missing-data-worth-saving?u=76281980&t=80)** Then since target B is ones and zeros, I've got to convert it to a string.
>
> **[1:25](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/is-the-missing-data-worth-saving?u=76281980&t=85)** That's the usual KNIME things, so that it's recognized as a nominal.
>
> **[1:30](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/is-the-missing-data-worth-saving?u=76281980&t=90)** And then I've added a decision tree learner.
>
> **[1:33](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/is-the-missing-data-worth-saving?u=76281980&t=93)** So what is this all about?
>
> **[1:35](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/is-the-missing-data-worth-saving?u=76281980&t=95)** Here's the idea.
>
> **[1:36](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/is-the-missing-data-worth-saving?u=76281980&t=96)** If we have a lot of rows that are still valid, thousands of them, in fact, that should be enough to determine if these variables, any of these variables are potentially useful in a model.
>
> **[1:51](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/is-the-missing-data-worth-saving?u=76281980&t=111)** If they are potentially useful in a model, I've got to figure out some way to save them or split the data into two portions data where I have this kind of consumer information that I've purchased from a list broker and times when I don't, I've got to figure that out somehow.
>
> **[2:09](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/is-the-missing-data-worth-saving?u=76281980&t=129)** If on the other hand, none of these variables are interesting, then I don't want to sacrifice the rows.
>
> **[2:16](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/is-the-missing-data-worth-saving?u=76281980&t=136)** So instead I get rid of the columns, it's really as simple as that.
>
> **[2:20](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/is-the-missing-data-worth-saving?u=76281980&t=140)** So to confirm that we've done our work properly, let's do a double check.
>
> **[2:25](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/is-the-missing-data-worth-saving?u=76281980&t=145)** Let's bring in another data explorer.
>
> **[2:30](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/is-the-missing-data-worth-saving?u=76281980&t=150)** We don't want to reread the whole dataset because that would be computationally intensive.
>
> **[2:34](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/is-the-missing-data-worth-saving?u=76281980&t=154)** It would take a few seconds for that to run, or maybe even a few minutes, but we can easily hook this one up because it's after the column filter, there's only a little bit of data there.
>
> **[2:43](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/is-the-missing-data-worth-saving?u=76281980&t=163)** Let's let this run to orient ourselves to what we've accomplished.
>
> **[2:50](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/is-the-missing-data-worth-saving?u=76281980&t=170)** Okay, well, here's the report.
>
> **[2:52](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/is-the-missing-data-worth-saving?u=76281980&t=172)** So let's take a look.
>
> **[2:53](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/is-the-missing-data-worth-saving?u=76281980&t=173)** It looks like we've got 37 missing for MBCOLECT, but that's about it.
>
> **[3:01](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/is-the-missing-data-worth-saving?u=76281980&t=181)** So we've accomplished our mission.
>
> **[3:02](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/is-the-missing-data-worth-saving?u=76281980&t=182)** Now, how many rows do we have?
>
> **[3:06](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/is-the-missing-data-worth-saving?u=76281980&t=186)** Now we've got some zeros.
>
> **[3:07](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/is-the-missing-data-worth-saving?u=76281980&t=187)** But that doesn't mean that it's false, it means that we know it to be a zero value.
>
> **[3:12](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/is-the-missing-data-worth-saving?u=76281980&t=192)** So we have quite a bit of data here.
>
> **[3:17](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/is-the-missing-data-worth-saving?u=76281980&t=197)** So let's try the decision tree.
>
> **[3:21](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/is-the-missing-data-worth-saving?u=76281980&t=201)** Maximize that.
>
> **[3:23](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/is-the-missing-data-worth-saving?u=76281980&t=203)** Okay, so the first split is rather strange.
>
> **[3:27](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/is-the-missing-data-worth-saving?u=76281980&t=207)** We've got 29,155 cases.
>
> **[3:31](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/is-the-missing-data-worth-saving?u=76281980&t=211)** So to remind you, we started with closer to a hundred thousand.
>
> **[3:35](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/is-the-missing-data-worth-saving?u=76281980&t=215)** We've lost two thirds of our data, but 30,000 is more than enough records to find a relationship with these variables.
>
> **[3:43](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/is-the-missing-data-worth-saving?u=76281980&t=223)** But the first split is really rather odd.
>
> **[3:47](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/is-the-missing-data-worth-saving?u=76281980&t=227)** It strips away based on whether or not they subscribe to a photo publication with only two cases.
>
> **[3:55](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/is-the-missing-data-worth-saving?u=76281980&t=235)** Decision tree algorithms don't like to do that.
>
> **[3:58](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/is-the-missing-data-worth-saving?u=76281980&t=238)** If it's behaving that way, it's not finding much of a pattern.
>
> **[4:01](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/is-the-missing-data-worth-saving?u=76281980&t=241)** Let's try further splitting on the remaining 29,153 cases.
>
> **[4:07](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/is-the-missing-data-worth-saving?u=76281980&t=247)** Okay, now this is whether or not it's a health publication, but it seems like multiple health publications.
>
> **[4:16](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/is-the-missing-data-worth-saving?u=76281980&t=256)** So we start out with 5.2 at the very top of our target B variable, our dependent variable.
>
> **[4:27](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/is-the-missing-data-worth-saving?u=76281980&t=267)** We stay at 5.2 and then when we further split on pub health, we get 8.2 and 5.1 and the 8.2 isn't a lot of cases.
>
> **[4:39](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/is-the-missing-data-worth-saving?u=76281980&t=279)** Okay folks, this is what I'm concluding, these variables are not great.
>
> **[4:44](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/is-the-missing-data-worth-saving?u=76281980&t=284)** I've got almost 30,000 records.
>
> **[4:47](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/is-the-missing-data-worth-saving?u=76281980&t=287)** It is complete for these dozen variables.
>
> **[4:50](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/is-the-missing-data-worth-saving?u=76281980&t=290)** I'm giving it an opportunity to predict my target variable, and they're not doing a great job.
>
> **[4:57](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/is-the-missing-data-worth-saving?u=76281980&t=297)** Now I would spend more than just five or 10 minutes on this.
>
> **[5:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/is-the-missing-data-worth-saving?u=76281980&t=300)** I would spend an hour or so, but if I tried this every which way, and I was getting no traction, I would seriously consider eliminating this entire section.
>
> **[5:12](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/is-the-missing-data-worth-saving?u=76281980&t=312)** Hopefully other sections of the data are going to be a lot better, but I'm certainly not going to do the following.
>
> **[5:19](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/is-the-missing-data-worth-saving?u=76281980&t=319)** I'm certainly not going to sacrifice 60,000 rows of data to save these columns at the moment, it looks like these variables are on the chopping block.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), case, (1), pub (1), this. (1)
> **Env Vars:** knime (2), mbcraft (2), mbcolect (1)
> **Versions:** 5.2 (2), 8.2 (2), 5.1 (1)
> **Definitions:** is a  (1), means that (1)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### Assessing imputation as a potential solution
> [LinkedIn Learning](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/assessing-imputation-as-a-potential-solution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/assessing-imputation-as-a-potential-solution?u=76281980&t=0)** - [Instructor] We're going to start by looking at the data in Excel.
>
> **[0:04](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/assessing-imputation-as-a-potential-solution?u=76281980&t=4)** Our mission is going to be to figure out if it's appropriate to impute age.
>
> **[0:11](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/assessing-imputation-as-a-potential-solution?u=76281980&t=11)** Age is the kind of variable that people normally think about imputing.
>
> **[0:14](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/assessing-imputation-as-a-potential-solution?u=76281980&t=14)** It's a scale variable.
>
> **[0:16](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/assessing-imputation-as-a-potential-solution?u=76281980&t=16)** You figure, just replace with a mean, just replace with a median.
>
> **[0:20](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/assessing-imputation-as-a-potential-solution?u=76281980&t=20)** It's exactly the kind of thing that's often automated in software.
>
> **[0:24](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/assessing-imputation-as-a-potential-solution?u=76281980&t=24)** Now remember that the actual act of imputation is usually done in the data preparation phase, but we're doing the detective work.
>
> **[0:31](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/assessing-imputation-as-a-potential-solution?u=76281980&t=31)** Does it make sense to do it?
>
> **[0:33](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/assessing-imputation-as-a-potential-solution?u=76281980&t=33)** So let's start by exploring age.
>
> **[0:35](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/assessing-imputation-as-a-potential-solution?u=76281980&t=35)** I've turned the filter on and I'm going to grab all of the blanks.
>
> **[0:41](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/assessing-imputation-as-a-potential-solution?u=76281980&t=41)** And we just investigate a bit.
>
> **[0:43](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/assessing-imputation-as-a-potential-solution?u=76281980&t=43)** If there's anything obvious about what we see, well here in column H, we've got all zeros.
>
> **[0:50](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/assessing-imputation-as-a-potential-solution?u=76281980&t=50)** Now those date of birth values probably shouldn't be zero, but the point is it is missing, at the same time that age is missing.
>
> **[0:56](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/assessing-imputation-as-a-potential-solution?u=76281980&t=56)** That makes sense.
>
> **[0:57](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/assessing-imputation-as-a-potential-solution?u=76281980&t=57)** In column R here, we've got AGEFLAG, which actually, in the data dictionary, it explains, is where age came from.
>
> **[1:05](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/assessing-imputation-as-a-potential-solution?u=76281980&t=65)** Did it come directly from the data or was it calculated from date of birth?
>
> **[1:11](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/assessing-imputation-as-a-potential-solution?u=76281980&t=71)** So you can see how it's all connected.
>
> **[1:13](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/assessing-imputation-as-a-potential-solution?u=76281980&t=73)** And then the kind of variable that I would be especially intrigued with here is something like source.
>
> **[1:22](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/assessing-imputation-as-a-potential-solution?u=76281980&t=82)** Here it is. Data source.
>
> **[1:24](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/assessing-imputation-as-a-potential-solution?u=76281980&t=84)** That's which list broker, or which list sharing company helped provide the information.
>
> **[1:32](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/assessing-imputation-as-a-potential-solution?u=76281980&t=92)** Sometimes it's company one, sometimes it's company two.
>
> **[1:35](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/assessing-imputation-as-a-potential-solution?u=76281980&t=95)** The data dictionary actually tells us that company three means from both, and the blanks, it's unclear.
>
> **[1:41](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/assessing-imputation-as-a-potential-solution?u=76281980&t=101)** It must mean that the data was gathered internally and not from an external source, but bottom line is it's not telling us much, is it?
>
> **[1:50](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/assessing-imputation-as-a-potential-solution?u=76281980&t=110)** I mean, if this was always the number one, if it was never the number one, that would be interesting.
>
> **[1:55](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/assessing-imputation-as-a-potential-solution?u=76281980&t=115)** That would mean that maybe one source was giving us age, but the other source wasn't.
>
> **[1:59](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/assessing-imputation-as-a-potential-solution?u=76281980&t=119)** It looks like we're going to have to do more detective work.
>
> **[2:01](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/assessing-imputation-as-a-potential-solution?u=76281980&t=121)** So let's go into Knime.
>
> **[2:04](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/assessing-imputation-as-a-potential-solution?u=76281980&t=124)** I prepared a workflow in advance called chapter 10 impute, and I've done this for two reasons.
>
> **[2:09](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/assessing-imputation-as-a-potential-solution?u=76281980&t=129)** Some of the steps are computationally intensive and some of the steps are a bit elaborate.
>
> **[2:14](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/assessing-imputation-as-a-potential-solution?u=76281980&t=134)** So it's helpful to just have it built in advance.
>
> **[2:17](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/assessing-imputation-as-a-potential-solution?u=76281980&t=137)** Let's go into the math formula node.
>
> **[2:21](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/assessing-imputation-as-a-potential-solution?u=76281980&t=141)** This is the first new step that we're introducing.
>
> **[2:24](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/assessing-imputation-as-a-potential-solution?u=76281980&t=144)** And the formula might be a little bit surprising at first, but it means not between zero and 100 All the valid ages and the dataset are between zero and 100.
>
> **[2:34](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/assessing-imputation-as-a-potential-solution?u=76281980&t=154)** So if it's not between zero and 100, that tells us that we're in trouble.
>
> **[2:39](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/assessing-imputation-as-a-potential-solution?u=76281980&t=159)** The problem is it's not going to give us ones and zeros.
>
> **[2:44](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/assessing-imputation-as-a-potential-solution?u=76281980&t=164)** The next step addresses this.
>
> **[2:48](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/assessing-imputation-as-a-potential-solution?u=76281980&t=168)** It's given us zeros, but it's given us zeros and blanks, so we have to turn the blanks into ones.
>
> **[2:55](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/assessing-imputation-as-a-potential-solution?u=76281980&t=175)** So then what we end up with is one when age is missing, zero when it's not.
>
> **[3:04](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/assessing-imputation-as-a-potential-solution?u=76281980&t=184)** Okay, the number to string conversion is something that we've seen before.
>
> **[3:08](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/assessing-imputation-as-a-potential-solution?u=76281980&t=188)** So now we're going to use the decision tree learner.
>
> **[3:11](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/assessing-imputation-as-a-potential-solution?u=76281980&t=191)** Why is that going to be helpful?
>
> **[3:13](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/assessing-imputation-as-a-potential-solution?u=76281980&t=193)** We want to know what's predictive of age being missing.
>
> **[3:20](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/assessing-imputation-as-a-potential-solution?u=76281980&t=200)** Let's take a look. We shouldn't be surprised by this.
>
> **[3:23](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/assessing-imputation-as-a-potential-solution?u=76281980&t=203)** And we should have seen it coming.
>
> **[3:25](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/assessing-imputation-as-a-potential-solution?u=76281980&t=205)** The best predictor of age being missing is whether date of birth is in there somewhere, because they're clearly related.
>
> **[3:32](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/assessing-imputation-as-a-potential-solution?u=76281980&t=212)** So what we have to do now is get rid of all those obvious answers to our question so that we can go a level deeper.
>
> **[3:41](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/assessing-imputation-as-a-potential-solution?u=76281980&t=221)** We're going to do that with a column filter node.
>
> **[3:43](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/assessing-imputation-as-a-potential-solution?u=76281980&t=223)** Let me drag it into place.
>
> **[3:49](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/assessing-imputation-as-a-potential-solution?u=76281980&t=229)** And the only variable that we want to filter out, well, the variables that we want to filter out, will be those that have an obvious relationship with age missing.
>
> **[4:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/assessing-imputation-as-a-potential-solution?u=76281980&t=240)** So, age itself, AGEFLAG, and date of birth.
>
> **[4:10](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/assessing-imputation-as-a-potential-solution?u=76281980&t=250)** Now, we have to redirect this and clean it up a little bit.
>
> **[4:16](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/assessing-imputation-as-a-potential-solution?u=76281980&t=256)** Let's see what we get.
>
> **[4:19](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/assessing-imputation-as-a-potential-solution?u=76281980&t=259)** Interesting; so, for the homeowner variable, according to the data dictionary, homeowner H means they're a homeowner.
>
> **[4:30](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/assessing-imputation-as-a-potential-solution?u=76281980&t=270)** Homeowner U means unknown.
>
> **[4:33](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/assessing-imputation-as-a-potential-solution?u=76281980&t=273)** And then the equals sign with nothing else has to mean that we don't know their homeowner status.
>
> **[4:40](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/assessing-imputation-as-a-potential-solution?u=76281980&t=280)** In other words, we have known homeowner, unknown homeowner, no value at all.
>
> **[4:47](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/assessing-imputation-as-a-potential-solution?u=76281980&t=287)** And boy, the pattern is really striking, because we have only 9.3% missing if they're a homeowner.
>
> **[4:57](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/assessing-imputation-as-a-potential-solution?u=76281980&t=297)** It's three times as high, 27% missing, if they're not a homeowner.
>
> **[5:03](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/assessing-imputation-as-a-potential-solution?u=76281980&t=303)** And much, much higher, if we don't know their homeowner status at all.
>
> **[5:08](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/assessing-imputation-as-a-potential-solution?u=76281980&t=308)** This is a real tricky one.
>
> **[5:10](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/assessing-imputation-as-a-potential-solution?u=76281980&t=310)** We're going to have to talk to a subject matter expert about this, but there must be something about public records or something, about homeowners, that's allowing us to get this other information that we're not getting any other way.
>
> **[5:24](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/assessing-imputation-as-a-potential-solution?u=76281980&t=324)** This is why you can start to see that it's going to be dangerous imputing this, unless we know the story behind this.
>
> **[5:33](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/assessing-imputation-as-a-potential-solution?u=76281980&t=333)** Let's take a moment to take a look at what the imputation would look like.
>
> **[5:38](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/assessing-imputation-as-a-potential-solution?u=76281980&t=338)** And then I want to go another level on the tree.
>
> **[5:42](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/assessing-imputation-as-a-potential-solution?u=76281980&t=342)** So, what we can do is type in missing here.
>
> **[5:47](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/assessing-imputation-as-a-potential-solution?u=76281980&t=347)** And we have our missing values filter.
>
> **[5:52](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/assessing-imputation-as-a-potential-solution?u=76281980&t=352)** Now there's already one on the workflow, but I'm going to put a separate one here.
>
> **[5:57](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/assessing-imputation-as-a-potential-solution?u=76281980&t=357)** We just want to take a quick look inside to see what it would be like if we chose to impute.
>
> **[6:04](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/assessing-imputation-as-a-potential-solution?u=76281980&t=364)** For instance, I could identify age, I could add it, and look at my choices.
>
> **[6:11](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/assessing-imputation-as-a-potential-solution?u=76281980&t=371)** And these are just the choices that Knime gives me, but most software will have options for this.
>
> **[6:17](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/assessing-imputation-as-a-potential-solution?u=76281980&t=377)** I can fix the value, which is the one that we saw before.
>
> **[6:21](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/assessing-imputation-as-a-potential-solution?u=76281980&t=381)** Let me maximize this.
>
> **[6:23](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/assessing-imputation-as-a-potential-solution?u=76281980&t=383)** I can do fixed value where I have to designate what that value is going to be.
>
> **[6:28](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/assessing-imputation-as-a-potential-solution?u=76281980&t=388)** But then there are a lot of others.
>
> **[6:29](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/assessing-imputation-as-a-potential-solution?u=76281980&t=389)** I could replace with the median.
>
> **[6:31](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/assessing-imputation-as-a-potential-solution?u=76281980&t=391)** I could replace with the mean.
>
> **[6:34](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/assessing-imputation-as-a-potential-solution?u=76281980&t=394)** You get the idea.
>
> **[6:35](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/assessing-imputation-as-a-potential-solution?u=76281980&t=395)** In fact, if it was very important that I get an accurate estimate, I might even build a model just for the purpose of providing that estimate, but I wouldn't be comfortable with these standard approaches given across the board quite yet.
>
> **[6:52](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/assessing-imputation-as-a-potential-solution?u=76281980&t=412)** I'm actually going to cancel here, and we're just going to leave that there.
>
> **[6:56](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/assessing-imputation-as-a-potential-solution?u=76281980&t=416)** Let's go another level on the tree.
>
> **[6:59](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/assessing-imputation-as-a-potential-solution?u=76281980&t=419)** So I'm going to remove homeowner, using the column filter.
>
> **[7:05](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/assessing-imputation-as-a-potential-solution?u=76281980&t=425)** See what else comes up. Maximize.
>
> **[7:10](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/assessing-imputation-as-a-potential-solution?u=76281980&t=430)** Now think of this as preparing for a meeting with a subject matter expert, because that's exactly what it is.
>
> **[7:16](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/assessing-imputation-as-a-potential-solution?u=76281980&t=436)** That's why we keep on digging and digging.
>
> **[7:19](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/assessing-imputation-as-a-potential-solution?u=76281980&t=439)** We're doing the detective work to prepare for a meeting to decide how we want to handle this.
>
> **[7:23](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/assessing-imputation-as-a-potential-solution?u=76281980&t=443)** It really gets interesting now, because we have a different rate for the different sources.
>
> **[7:30](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/assessing-imputation-as-a-potential-solution?u=76281980&t=450)** Source number one is missing 29% of the time.
>
> **[7:34](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/assessing-imputation-as-a-potential-solution?u=76281980&t=454)** Source number two is missing 17.1% of the time.
>
> **[7:39](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/assessing-imputation-as-a-potential-solution?u=76281980&t=459)** Remember, the data source code three means that we got it from both sources.
>
> **[7:44](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/assessing-imputation-as-a-potential-solution?u=76281980&t=464)** And when that's the case, the percent missing comes way down to 10.6%.
>
> **[7:49](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/assessing-imputation-as-a-potential-solution?u=76281980&t=469)** When we don't get it from an external source at all, we are way up to 61% missing.
>
> **[7:56](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/assessing-imputation-as-a-potential-solution?u=76281980&t=476)** And that's for the vast majority of cases, thousands and thousands of cases.
>
> **[8:01](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/assessing-imputation-as-a-potential-solution?u=76281980&t=481)** We have to have a meeting with a subject matter expert before we apply imputation here.
>
> **[8:07](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/assessing-imputation-as-a-potential-solution?u=76281980&t=487)** And I'm starting to think that if it's not costly, I might want to do list matches.
>
> **[8:13](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/assessing-imputation-as-a-potential-solution?u=76281980&t=493)** See if I can increase the number of cases that I get from both sources.
>
> **[8:18](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/assessing-imputation-as-a-potential-solution?u=76281980&t=498)** Is it that we're not doing this at all?
>
> **[8:20](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/assessing-imputation-as-a-potential-solution?u=76281980&t=500)** That handful of cases.
>
> **[8:22](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/assessing-imputation-as-a-potential-solution?u=76281980&t=502)** Well, actually more than a handful.
>
> **[8:24](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/assessing-imputation-as-a-potential-solution?u=76281980&t=504)** Of the 5,736 cases that we do know age, for the internal data, where did it come from?
>
> **[8:32](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/assessing-imputation-as-a-potential-solution?u=76281980&t=512)** So lots of questions.
>
> **[8:33](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/assessing-imputation-as-a-potential-solution?u=76281980&t=513)** And until those questions are resolved in my mind, I'm very reluctant to impute.
>
> **[8:39](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/assessing-imputation-as-a-potential-solution?u=76281980&t=519)** I need to know that context, the provenance of the data.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), this. (6), this, (2), from. (1), public (1)
> **CLI Commands:** node (2), make (1)
> **Versions:** 9.3 (1), 17.1 (1), 10.6 (1)
> **Definitions:** in other words (1), is a  (1), means that (1)
> **Env Vars:** ageflag (2)
> **Exercise Files:** source code (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)


### 11. Explore and Verify Case Studies

#### Exploring and verifying data quality with the UCI heart dataset
> [LinkedIn Learning](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/exploring-and-verifying-data-quality-with-the-uci-heart-dataset?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/exploring-and-verifying-data-quality-with-the-uci-heart-dataset?u=76281980&t=0)** - Okay, let's revisit the Heart Dataset, after quite some time.
>
> **[0:06](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/exploring-and-verifying-data-quality-with-the-uci-heart-dataset?u=76281980&t=6)** So, we made a little bit of progress on this analysis, what would be on our mind next?
>
> **[0:12](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/exploring-and-verifying-data-quality-with-the-uci-heart-dataset?u=76281980&t=12)** Well, we have to certainly populate our cheat sheet with all the notes that we'd have on the different variables, level of measurement, potential role, questions that we want to ask the subject matter expert.
>
> **[0:23](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/exploring-and-verifying-data-quality-with-the-uci-heart-dataset?u=76281980&t=23)** We're going to assume, that the rows that we suggested should be discarded, or approved to be discarded.
>
> **[0:31](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/exploring-and-verifying-data-quality-with-the-uci-heart-dataset?u=76281980&t=31)** In other words, they weren't valid data, they needed to be set aside.
>
> **[0:35](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/exploring-and-verifying-data-quality-with-the-uci-heart-dataset?u=76281980&t=35)** But going back to the data, we're rapidly going to run into a roadblock here, because we're going to want to move on to do our univariate visualizations, our bi-variate visualizations, looking for potential predictors.
>
> **[0:48](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/exploring-and-verifying-data-quality-with-the-uci-heart-dataset?u=76281980&t=48)** There are a number of things that will be on our mind, but we have a lot of missing data, and we have to figure out, if our row is a transactional row, or if it's an ID.
>
> **[0:59](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/exploring-and-verifying-data-quality-with-the-uci-heart-dataset?u=76281980&t=59)** And those two are related, because, if we generally have some information on an ID, for instance, we have a 1st and 3rd cholesterol measurement, but we don't have a 2nd one.
>
> **[1:13](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/exploring-and-verifying-data-quality-with-the-uci-heart-dataset?u=76281980&t=73)** Now we can start to talk about averaging across visits, so maybe most IDs have information, they just don't have information on every visit.
>
> **[1:23](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/exploring-and-verifying-data-quality-with-the-uci-heart-dataset?u=76281980&t=83)** So we can't ignore this any longer, we have to look at these negative nines, we have to look at Verify Data Quality Issues.
>
> **[1:32](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/exploring-and-verifying-data-quality-with-the-uci-heart-dataset?u=76281980&t=92)** So the very next thing would be in my mind would be two issues, looking at the nines across, and down, but also moving to the right hand side of the data set now.
>
> **[1:46](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/exploring-and-verifying-data-quality-with-the-uci-heart-dataset?u=76281980&t=106)** When I've got clinical collection type data like this, and I've got locations, I want to look at not just the pattern of these negative nines, but that pattern by location.
>
> **[1:58](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/exploring-and-verifying-data-quality-with-the-uci-heart-dataset?u=76281980&t=118)** I really want to do both of those things.
>
> **[2:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/exploring-and-verifying-data-quality-with-the-uci-heart-dataset?u=76281980&t=120)** Let's take a quick look and KNIME to see if the Data Explorer helps us with this at all.
>
> **[2:06](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/exploring-and-verifying-data-quality-with-the-uci-heart-dataset?u=76281980&t=126)** Okay, I've got a very basic stream, that's bringing in the data with the discards removed now, and we'll go into the Data Explorer View.
>
> **[2:16](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/exploring-and-verifying-data-quality-with-the-uci-heart-dataset?u=76281980&t=136)** Here we go, so we've got our data set, with those discards removed.
>
> **[2:20](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/exploring-and-verifying-data-quality-with-the-uci-heart-dataset?u=76281980&t=140)** But of course we still have a lot of missing data, we have negative nines all over the place.
>
> **[2:24](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/exploring-and-verifying-data-quality-with-the-uci-heart-dataset?u=76281980&t=144)** So what I've done is sorted descending on number of zeros, and it's very interesting to know, if the numbers come in clumps.
>
> **[2:34](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/exploring-and-verifying-data-quality-with-the-uci-heart-dataset?u=76281980&t=154)** We've seen this pattern before, will we see it in the Heart Dataset?
>
> **[2:38](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/exploring-and-verifying-data-quality-with-the-uci-heart-dataset?u=76281980&t=158)** Will we find, that there are collections of variables, that when one is missing in the collection, the others are missing in the collection?
>
> **[2:46](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/exploring-and-verifying-data-quality-with-the-uci-heart-dataset?u=76281980&t=166)** Will we have 899 zeros for CFF, but that's all of our data, we are not worried about that.
>
> **[2:51](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/exploring-and-verifying-data-quality-with-the-uci-heart-dataset?u=76281980&t=171)** A zero is actually a valid value there, that's the replacement for the Social Security Number.
>
> **[2:58](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/exploring-and-verifying-data-quality-with-the-uci-heart-dataset?u=76281980&t=178)** X-hypo, we have a whole bunch, almost the whole dataset.
>
> **[3:01](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/exploring-and-verifying-data-quality-with-the-uci-heart-dataset?u=76281980&t=181)** Then it drops from 819 all the way down to 802, then 725, then 692, and I'm not seeing a pattern here.
>
> **[3:12](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/exploring-and-verifying-data-quality-with-the-uci-heart-dataset?u=76281980&t=192)** And it gets worse, scrolling back up to the top.
>
> **[3:16](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/exploring-and-verifying-data-quality-with-the-uci-heart-dataset?u=76281980&t=196)** Clearly KNIME is not going to have a column for a negative nine.
>
> **[3:19](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/exploring-and-verifying-data-quality-with-the-uci-heart-dataset?u=76281980&t=199)** So we're going to have to go somewhat manual here, we'd either have to derive something in KNIME, or do something simple in Excel.
>
> **[3:27](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/exploring-and-verifying-data-quality-with-the-uci-heart-dataset?u=76281980&t=207)** So let's return to Excel, and what I'm going to suggest, is that we count the negative nines across, and down, and then look at that by location.
>
> **[3:40](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/exploring-and-verifying-data-quality-with-the-uci-heart-dataset?u=76281980&t=220)** So that's the very next thing, that would be on my mind.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), this, (1)
> **Env Vars:** knime (3), cff (1)
> **Definitions:** in other words (1), is a  (1)
> **CLI Commands:** find (1)
> **Analogies:** for instance (1)
> **Speakers:** - okay (1)

#### Challenge: Quantifying missing data with the UCI heart dataset
> [LinkedIn Learning](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-quantifying-missing-data-with-the-uci-heart-dataset?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-quantifying-missing-data-with-the-uci-heart-dataset?u=76281980&t=0)** (bright upbeat music)
>
> **[0:05](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-quantifying-missing-data-with-the-uci-heart-dataset?u=76281980&t=5)** - [Instructor] And that brings us to our next challenge.
>
> **[0:09](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-quantifying-missing-data-with-the-uci-heart-dataset?u=76281980&t=9)** Working in the same Excel spreadsheet, I provided a somewhat updated one called Chapter 11 for this exercise.
>
> **[0:19](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-quantifying-missing-data-with-the-uci-heart-dataset?u=76281980&t=19)** Count the number of -9s across each row.
>
> **[0:23](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-quantifying-missing-data-with-the-uci-heart-dataset?u=76281980&t=23)** Also count the number of -9s going down each column.
>
> **[0:28](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-quantifying-missing-data-with-the-uci-heart-dataset?u=76281980&t=28)** Now remember, you're always preparing for a meeting with a subject matter expert potentially, so make sure that what you're doing is obvious to someone that might've seen the spreadsheet.
>
> **[0:38](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-quantifying-missing-data-with-the-uci-heart-dataset?u=76281980&t=38)** And when you're done, then compare the results by location.
>
> **[0:43](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-quantifying-missing-data-with-the-uci-heart-dataset?u=76281980&t=43)** This should take about 15 minutes, but try to reflect a bit on what you'd want to ask the subject matter expert based on the location that you find.
>
> **[0:52](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/challenge-quantifying-missing-data-with-the-uci-heart-dataset?u=76281980&t=52)** Give it a try.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1), find (1)
> **Code Keywords:** try. (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright upbeat music) (1)

#### Solution: Quantifying missing data with the UCI heart dataset
> [LinkedIn Learning](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-quantifying-missing-data-with-the-uci-heart-dataset?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-quantifying-missing-data-with-the-uci-heart-dataset?u=76281980&t=0)** - [Instructor] Okay, I hope you enjoyed giving that a try, let me walk you through how I chose to solve the problem.
>
> **[0:11](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-quantifying-missing-data-with-the-uci-heart-dataset?u=76281980&t=11)** So I'm in a spreadsheet called UCI_ Heart_chapter 11_ solution, which I provided for you in the solutions folder.
>
> **[0:19](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-quantifying-missing-data-with-the-uci-heart-dataset?u=76281980&t=19)** And if you go to the far right hand side, what I've done is use the COUNTIF function.
>
> **[0:26](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-quantifying-missing-data-with-the-uci-heart-dataset?u=76281980&t=26)** Let me go ahead and show you that formula bar.
>
> **[0:32](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-quantifying-missing-data-with-the-uci-heart-dataset?u=76281980&t=32)** I've used the COUNTIF function to count negative nines.
>
> **[0:36](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-quantifying-missing-data-with-the-uci-heart-dataset?u=76281980&t=36)** Obviously, I don't attempt to count the negative nines in the name or location columns, but in the columns that are appropriate.
>
> **[0:45](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-quantifying-missing-data-with-the-uci-heart-dataset?u=76281980&t=45)** And there's no obvious pattern here, so I'll have a lot to ask a subject-matter expert but that's not all.
>
> **[0:50](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-quantifying-missing-data-with-the-uci-heart-dataset?u=76281980&t=50)** Remember, we had to do columns.
>
> **[0:53](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-quantifying-missing-data-with-the-uci-heart-dataset?u=76281980&t=53)** So if you scroll all the way down to the bottom I've got COUNTIF going across the bottom as well and because we've got hundreds of rows I've copied and paste the IDs down at the bottom so that I can see them better.
>
> **[1:10](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-quantifying-missing-data-with-the-uci-heart-dataset?u=76281980&t=70)** Now, please keep in mind that if you go to pull this in to something like nine, you don't want to have the IDs in the middle of the data, it's going to cause confusion.
>
> **[1:20](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-quantifying-missing-data-with-the-uci-heart-dataset?u=76281980&t=80)** So I have a Data tab that doesn't have those headers at the bottom and a COUNTIF tab that does, but again no obvious pattern jumps out at us.
>
> **[1:32](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-quantifying-missing-data-with-the-uci-heart-dataset?u=76281980&t=92)** So we're going to need nines help.
>
> **[1:33](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-quantifying-missing-data-with-the-uci-heart-dataset?u=76281980&t=93)** And that last part, which is looking at the locations, you could do a crosstab here in Excel, but I chose to do it in nine.
>
> **[1:41](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-quantifying-missing-data-with-the-uci-heart-dataset?u=76281980&t=101)** So let's switch over to that.
>
> **[1:44](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-quantifying-missing-data-with-the-uci-heart-dataset?u=76281980&t=104)** Okay, so I've got a source of the data with the discard stripped away, and make sure you don't have those COUNTIF formulas mixed in there.
>
> **[1:52](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-quantifying-missing-data-with-the-uci-heart-dataset?u=76281980&t=112)** Although I did keep the COUNTIF column that's going to be valuable and what we can do is add a crosstab.
>
> **[2:11](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-quantifying-missing-data-with-the-uci-heart-dataset?u=76281980&t=131)** And my advice is to take the variable with more categories in it, make it the row.
>
> **[2:16](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-quantifying-missing-data-with-the-uci-heart-dataset?u=76281980&t=136)** So I'm going to take this new variable column I have negative nine and make it the row variable, and the column variable is going to be location 'cause remember that's the task.
>
> **[2:28](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-quantifying-missing-data-with-the-uci-heart-dataset?u=76281980&t=148)** Weight, none.
>
> **[2:36](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-quantifying-missing-data-with-the-uci-heart-dataset?u=76281980&t=156)** Execute and open views.
>
> **[2:39](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-quantifying-missing-data-with-the-uci-heart-dataset?u=76281980&t=159)** Maximize.
>
> **[2:40](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-quantifying-missing-data-with-the-uci-heart-dataset?u=76281980&t=160)** And we find that a lot of the rows are cut off.
>
> **[2:42](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-quantifying-missing-data-with-the-uci-heart-dataset?u=76281980&t=162)** So I'm going to go ahead and make this much bigger, jump it all the way up to 50, there we go.
>
> **[2:48](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-quantifying-missing-data-with-the-uci-heart-dataset?u=76281980&t=168)** Now, you might think, gosh, this is going to be hard to read and it is at first but there's a very strong pattern here.
>
> **[2:56](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-quantifying-missing-data-with-the-uci-heart-dataset?u=76281980&t=176)** Those rows that were missing nine or 10 or 11 or 12 that's the rarest missing we have.
>
> **[3:04](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-quantifying-missing-data-with-the-uci-heart-dataset?u=76281980&t=184)** We're all associated with Long Beach.
>
> **[3:07](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-quantifying-missing-data-with-the-uci-heart-dataset?u=76281980&t=187)** Then we get to Swiss starting with 16, but Cleveland and Hungary doesn't show up with those small numbers at all.
>
> **[3:16](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-quantifying-missing-data-with-the-uci-heart-dataset?u=76281980&t=196)** As we scroll down, we get kind of to the middle and all the locations are seemingly involved.
>
> **[3:24](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-quantifying-missing-data-with-the-uci-heart-dataset?u=76281980&t=204)** But then when we get down to the bottom, we noticed that when we get up into 34 to 45, that's only that third location there, going back up to the top, that's the Long Beach so Long Beach is really all over the place compared to the others.
>
> **[3:44](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-quantifying-missing-data-with-the-uci-heart-dataset?u=76281980&t=224)** Cleveland seemingly 20, 21, 22, 23 but nothing very high.
>
> **[3:52](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-quantifying-missing-data-with-the-uci-heart-dataset?u=76281980&t=232)** Nothing very low.
>
> **[3:54](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-quantifying-missing-data-with-the-uci-heart-dataset?u=76281980&t=234)** This really needs a subject-matter expert's attention because there's a clear relationship between number of missing and location.
>
> **[4:05](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-quantifying-missing-data-with-the-uci-heart-dataset?u=76281980&t=245)** And that's something we would have to discuss.
>
> **[4:09](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-quantifying-missing-data-with-the-uci-heart-dataset?u=76281980&t=249)** Of course, we still have several things on our plate.
>
> **[4:12](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-quantifying-missing-data-with-the-uci-heart-dataset?u=76281980&t=252)** As we start the transition from business understanding to Data Prep, many more things have to be done.
>
> **[4:20](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-quantifying-missing-data-with-the-uci-heart-dataset?u=76281980&t=260)** For instance, the nature of this data set with its data collection in multiple locations, we've got to figure out what data is in?
>
> **[4:28](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-quantifying-missing-data-with-the-uci-heart-dataset?u=76281980&t=268)** What data is out?
>
> **[4:29](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-quantifying-missing-data-with-the-uci-heart-dataset?u=76281980&t=269)** And what data is still coming?
>
> **[4:32](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-quantifying-missing-data-with-the-uci-heart-dataset?u=76281980&t=272)** We have to really start to focus our attention on bivariate relationships, which relationships are strong?
>
> **[4:39](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-quantifying-missing-data-with-the-uci-heart-dataset?u=76281980&t=279)** And which relationships are weak?
>
> **[4:41](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-quantifying-missing-data-with-the-uci-heart-dataset?u=76281980&t=281)** Also, if we're going to aggregate up to ID, what impact is that going to have on missing data?
>
> **[4:48](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-quantifying-missing-data-with-the-uci-heart-dataset?u=76281980&t=288)** If we're looking at average cholesterol over multiple measurements, maybe we don't have as much missing data as we think.
>
> **[4:56](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-quantifying-missing-data-with-the-uci-heart-dataset?u=76281980&t=296)** But if we're going to operate at the patient level, we better get more patients because we don't have a ton of data Finally, is imputation in our future?
>
> **[5:07](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-quantifying-missing-data-with-the-uci-heart-dataset?u=76281980&t=307)** Maybe, but we can't decide that until we sort out some of these other issues.
>
> **[5:12](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/solution-quantifying-missing-data-with-the-uci-heart-dataset?u=76281980&t=312)** So we would have days or weeks of data understanding still ahead of us in this data set for a real world project, but we're well on our way.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), function (2), try, (1), switch (1), finally, (1)
> **Env Vars:** countif (6), uci_ (1)
> **CLI Commands:** make (4), find (1)
> **UI Navigation:** go to (2), scroll down (1)
> **Analogies:** for instance (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 12. Making the Transition to Data Preparation

#### Why formal reports are important
> [LinkedIn Learning](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/why-formal-reports-are-important?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/why-formal-reports-are-important?u=76281980&t=0)** - [Instructor] When we first introduced CRISP-DM and we looked at the task list, we mentioned that the documentation requirements for each task are listed in italics, but there's another part of the document that talks about documentation.
>
> **[0:20](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/why-formal-reports-are-important?u=76281980&t=20)** That's part four.
>
> **[0:22](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/why-formal-reports-are-important?u=76281980&t=22)** What part four does is it talks about more summary reports at the end of each phase.
>
> **[0:31](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/why-formal-reports-are-important?u=76281980&t=31)** Part four is shown at the end of the document.
>
> **[0:36](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/why-formal-reports-are-important?u=76281980&t=36)** We'll advance to the end here.
>
> **[0:39](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/why-formal-reports-are-important?u=76281980&t=39)** Here we go.
>
> **[0:40](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/why-formal-reports-are-important?u=76281980&t=40)** Now let's talk about how part four works, but notice that the idea behind part four is to focus on the end of the phases, not while you're doing the tasks.
>
> **[0:54](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/why-formal-reports-are-important?u=76281980&t=54)** So here's how it's described in part four.
>
> **[0:58](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/why-formal-reports-are-important?u=76281980&t=58)** We really have two separate aspects here.
>
> **[1:03](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/why-formal-reports-are-important?u=76281980&t=63)** While you're performing the tasks and then a summary at the end.
>
> **[1:07](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/why-formal-reports-are-important?u=76281980&t=67)** Let's face it, no one enjoys writing or even reading reports, but let me try to make the case for why it's so important.
>
> **[1:17](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/why-formal-reports-are-important?u=76281980&t=77)** I've been an external resource most of my career, and I've always considered the report I file at the end of date understanding to be among the most important of the entire project.
>
> **[1:29](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/why-formal-reports-are-important?u=76281980&t=89)** Remember for someone like me, I would likely be invoicing at this point.
>
> **[1:35](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/why-formal-reports-are-important?u=76281980&t=95)** This report is my last chance to say that things are not quite what we expected when we started the project.
>
> **[1:42](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/why-formal-reports-are-important?u=76281980&t=102)** Any later than this and it reflects badly on me and suggests that I'm not doing my homework.
>
> **[1:49](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/why-formal-reports-are-important?u=76281980&t=109)** Many of you of course are internal resources, so you're certainly not all invoicing at this stage.
>
> **[1:56](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/why-formal-reports-are-important?u=76281980&t=116)** There are numerous ways to run a project.
>
> **[1:59](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/why-formal-reports-are-important?u=76281980&t=119)** But everyone has to have some way of measuring progress and eventually everybody has to tell their boss how things are going.
>
> **[2:08](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/why-formal-reports-are-important?u=76281980&t=128)** Remember too, we aren't just exploring, hoping to stumble upon an insight or two.
>
> **[2:14](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/why-formal-reports-are-important?u=76281980&t=134)** We're preparing for eventual deployment.
>
> **[2:17](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/why-formal-reports-are-important?u=76281980&t=137)** As we document, we have to keep in mind that it won't be a human repeating your steps.
>
> **[2:23](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/why-formal-reports-are-important?u=76281980&t=143)** It's going to be put into production.
>
> **[2:26](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/why-formal-reports-are-important?u=76281980&t=146)** I think the fear is that these documents will be out of date in about five minutes and that no one will read them.
>
> **[2:34](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/why-formal-reports-are-important?u=76281980&t=154)** Neither is true.
>
> **[2:36](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/why-formal-reports-are-important?u=76281980&t=156)** I have projects that I completed 10 years ago that still have substantial chunks of code and documentation that are still in use.
>
> **[2:47](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/why-formal-reports-are-important?u=76281980&t=167)** Each of the four tasks is paired with a section of the summary report as listed and described in part four.
>
> **[2:54](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/why-formal-reports-are-important?u=76281980&t=174)** I'm going to focus my comments on the end of phase summary, but I hope I've convinced you at this point to sit down someday soon and read CRISP-DM in its entirety.
>
> **[3:06](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/why-formal-reports-are-important?u=76281980&t=186)** So what about the initial data collection report?
>
> **[3:09](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/why-formal-reports-are-important?u=76281980&t=189)** What are some of the things that would be on our mind?
>
> **[3:12](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/why-formal-reports-are-important?u=76281980&t=192)** Obviously the list of the data sources in the areas covered by each.
>
> **[3:16](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/why-formal-reports-are-important?u=76281980&t=196)** Certainly our method of acquisition and extraction.
>
> **[3:21](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/why-formal-reports-are-important?u=76281980&t=201)** That's going to be important when you put into production, and problems that we've encountered.
>
> **[3:26](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/why-formal-reports-are-important?u=76281980&t=206)** What about the data description report?
>
> **[3:29](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/why-formal-reports-are-important?u=76281980&t=209)** Well, this is going to have each data source described in detail, especially the descriptions of each field and all of that is going to have implications for data integration, especially the IDs that we identify.
>
> **[3:44](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/why-formal-reports-are-important?u=76281980&t=224)** The data exploration report is going to include something that I want to quote directly from CRISP-DM.
>
> **[3:52](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/why-formal-reports-are-important?u=76281980&t=232)** "Regularities or patterns found, both expected and unexpected."
>
> **[3:58](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/why-formal-reports-are-important?u=76281980&t=238)** But also any kind of surprises or quirks, including your discussions with subject matter experts and their reactions to these surprises.
>
> **[4:09](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/why-formal-reports-are-important?u=76281980&t=249)** Also conclusions for data transformation, data cleaning, and other pre-processing.
>
> **[4:15](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/why-formal-reports-are-important?u=76281980&t=255)** That information is going to directly feed into the data preparation phase.
>
> **[4:21](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/why-formal-reports-are-important?u=76281980&t=261)** What about data quality?
>
> **[4:23](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/why-formal-reports-are-important?u=76281980&t=263)** Well the approach that you took, what you found, and finally the summary of data quality conclusions, which will also directly feed into data prep in terms of how we're going to address our missing data issues.
>
> **[4:39](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/why-formal-reports-are-important?u=76281980&t=279)** This has a direct impact on data prep, but it also affects the model when deployed and put into production.
>
> **[4:46](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/why-formal-reports-are-important?u=76281980&t=286)** All of these details might be retrieved and read years after you record them.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3)
> **Env Vars:** crisp (3)
> **CLI Commands:** make (1)
> **Cross-References:** we mentioned (1)
> **Documentation:** the documentation (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Creating a data prep to-do list
> [LinkedIn Learning](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/creating-a-data-prep-to-do-list?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/creating-a-data-prep-to-do-list?u=76281980&t=0)** - [Presenter] One way to think about data understanding is that it's a way of preparing a checklist for data prep.
>
> **[0:08](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/creating-a-data-prep-to-do-list?u=76281980&t=8)** By doing a thorough job, you know what deserves your attention and you have developed a sense of what needs to be done.
>
> **[0:17](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/creating-a-data-prep-to-do-list?u=76281980&t=17)** There are five data prep tasks.
>
> **[0:20](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/creating-a-data-prep-to-do-list?u=76281980&t=20)** Let's discuss how they are influenced by the work you've done during data understanding.
>
> **[0:24](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/creating-a-data-prep-to-do-list?u=76281980&t=24)** Remember that the phases overlap and iterate.
>
> **[0:27](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/creating-a-data-prep-to-do-list?u=76281980&t=27)** They don't come to a complete stop before you move on.
>
> **[0:30](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/creating-a-data-prep-to-do-list?u=76281980&t=30)** And a lot of formatting has already been done during data loading, so it isn't a major issue as you transition to data prep.
>
> **[0:39](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/creating-a-data-prep-to-do-list?u=76281980&t=39)** Data integration is a different story.
>
> **[0:41](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/creating-a-data-prep-to-do-list?u=76281980&t=41)** It's a major data prep task, and it has such a big impact on the data that it forces you to revisit some of the data understanding tasks.
>
> **[0:51](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/creating-a-data-prep-to-do-list?u=76281980&t=51)** Missing data in particular is often generated during data integration, any ID field that's found in one table but is missing from the other is going to cause problems.
>
> **[1:03](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/creating-a-data-prep-to-do-list?u=76281980&t=63)** But don't be discouraged.
>
> **[1:04](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/creating-a-data-prep-to-do-list?u=76281980&t=64)** Through data understanding you may have eliminated entire data tables as not being helpful.
>
> **[1:10](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/creating-a-data-prep-to-do-list?u=76281980&t=70)** Plus all the hard work you did trying to find creative ways to merge tables will pay off.
>
> **[1:16](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/creating-a-data-prep-to-do-list?u=76281980&t=76)** Finally, you'll have a sense of how missing data might complicate data integration.
>
> **[1:22](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/creating-a-data-prep-to-do-list?u=76281980&t=82)** So while the work of integration takes place in data prep, the groundwork done during data understanding is critical to its success.
>
> **[1:31](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/creating-a-data-prep-to-do-list?u=76281980&t=91)** The select task is about what data stays in and what data's out.
>
> **[1:36](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/creating-a-data-prep-to-do-list?u=76281980&t=96)** By the time data understanding is drawing to a close, you have a detailed sense of how you're going to define a row and which rows should be included.
>
> **[1:46](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/creating-a-data-prep-to-do-list?u=76281980&t=106)** Data integration sometimes causes a slight reassessment of this.
>
> **[1:51](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/creating-a-data-prep-to-do-list?u=76281980&t=111)** But while data prep might involve the act of writing code to perform the selection, most of the decisions should be made by this point.
>
> **[2:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/creating-a-data-prep-to-do-list?u=76281980&t=120)** The simplistic view of why we verify data quality is to discard variables that have too much missing data.
>
> **[2:09](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/creating-a-data-prep-to-do-list?u=76281980&t=129)** And automated data prep tools can't do much better than that.
>
> **[2:13](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/creating-a-data-prep-to-do-list?u=76281980&t=133)** But as we've seen, we can fix variables with missing data.
>
> **[2:18](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/creating-a-data-prep-to-do-list?u=76281980&t=138)** You should be transitioning into data prep with a detailed list of which variables are worth fixing, and what the possible fixes should be.
>
> **[2:28](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/creating-a-data-prep-to-do-list?u=76281980&t=148)** Finally, data construction and feature engineering.
>
> **[2:32](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/creating-a-data-prep-to-do-list?u=76281980&t=152)** This is perhaps the most important data prep task of all.
>
> **[2:36](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/creating-a-data-prep-to-do-list?u=76281980&t=156)** But it can't be done efficiently without all of the hard work of uncovering those variable interactions, which we do during data understanding.
>
> **[2:47](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/creating-a-data-prep-to-do-list?u=76281980&t=167)** Data prep without proper data understanding is frustrating and it goes in circles.
>
> **[2:51](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/creating-a-data-prep-to-do-list?u=76281980&t=171)** Nothing makes data prep faster easy, but if you've done good work, you'll know what you have to do and you can work your plan.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (2), let (1), this. (1)
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Speakers:** - [presenter] (1)

#### How to prepare for eventual deployment
> [LinkedIn Learning](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-prepare-for-eventual-deployment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-prepare-for-eventual-deployment?u=76281980&t=0)** - [Instructor] The final phase of CRISP-DM is deployment.
>
> **[0:06](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-prepare-for-eventual-deployment?u=76281980&t=6)** And we want to be ready, because if we don't plan for it now, it either won't happen efficiently or it won't happen at all.
>
> **[0:14](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-prepare-for-eventual-deployment?u=76281980&t=14)** We want to be especially attentive to discoveries and decisions that we're making during data understanding that will impact deployment because we probably won't be around.
>
> **[0:25](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-prepare-for-eventual-deployment?u=76281980&t=25)** Sure, we might be around at first, but what about a year from now or five years from now?
>
> **[0:31](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-prepare-for-eventual-deployment?u=76281980&t=31)** Each of the tasks that we've discussed will have at least one aspect that will have a direct impact on deployment.
>
> **[0:39](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-prepare-for-eventual-deployment?u=76281980&t=39)** Let's discuss some of the most important.
>
> **[0:41](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-prepare-for-eventual-deployment?u=76281980&t=41)** Those same data sources needed for integration are going to be needed in production, as well, and the work that you did in describing the data could be used to flag out of range values, thereby removing that row of data during scoring.
>
> **[1:01](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-prepare-for-eventual-deployment?u=76281980&t=61)** Some of the inputs are pulled in directly, of course, just like you did during data loading, but the vast majority are extracted or calculated or modified, all of which has to be readied for production.
>
> **[1:17](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-prepare-for-eventual-deployment?u=76281980&t=77)** Finally, any imputation that was designed during data understanding and implemented during data prep was done in the context of a historical data set.
>
> **[1:27](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-prepare-for-eventual-deployment?u=76281980&t=87)** During scoring, there might be just a single record flowing through the model that all has to be planned.
>
> **[1:34](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-prepare-for-eventual-deployment?u=76281980&t=94)** These are all critical elements that the deployment team will need to know and that have to be reduced to writing in the data understanding documentation.
>
> **[1:45](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/how-to-prepare-for-eventual-deployment?u=76281980&t=105)** A successful deployment relies upon it.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), finally, (1)
> **Env Vars:** crisp (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)


### Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/next-steps?u=76281980&t=0)** - [Keith McCormick] Now that you're done watching the course, what should be the next step on your journey?
>
> **[0:05](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/next-steps?u=76281980&t=5)** Well, you can start with putting the techniques you learned to use.
>
> **[0:08](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/next-steps?u=76281980&t=8)** Go back and try the challenge and solutions exercises.
>
> **[0:12](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/next-steps?u=76281980&t=12)** If you've completed those and want more, consider going back to the heart dataset.
>
> **[0:18](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/next-steps?u=76281980&t=18)** We've only scratched the surface.
>
> **[0:20](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/next-steps?u=76281980&t=20)** Take the original data, integrate it on your own, and try to work through all the tools we've used in the entire course.
>
> **[0:28](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/next-steps?u=76281980&t=28)** There's a lot to try.
>
> **[0:30](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/next-steps?u=76281980&t=30)** Then post your progress or questions using the Q and A feature.
>
> **[0:34](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/next-steps?u=76281980&t=34)** I try to visit course Q and A questions at least once a week.
>
> **[0:38](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/next-steps?u=76281980&t=38)** When you feel ready, consider a modeling course.
>
> **[0:42](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/next-steps?u=76281980&t=42)** I have a number of them in the library, but a great one to take after this would be Intro to Classification, which overviews a dozen different modeling algorithms.
>
> **[0:52](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/next-steps?u=76281980&t=52)** It would pair with this course nicely.
>
> **[0:54](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/next-steps?u=76281980&t=54)** And I'd like to stay in touch.
>
> **[0:57](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/next-steps?u=76281980&t=57)** I can't connect with everyone, but please follow me on LinkedIn.
>
> **[1:01](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/next-steps?u=76281980&t=61)** I frequently post book reviews, course announcements, and comment on industry trends.
>
> **[1:06](https://www.linkedin.com/learning/data-science-foundations-data-assessment-for-predictive-modeling/next-steps?u=76281980&t=66)** I hope to see you posting your progress with a certificate, participating in the Q and A, or just saying hi.

> [!info]- Semantic Content
>
> **Code Keywords:** try. (1)
> **Speakers:** - [keith (1)


## Path Context

### In [[Advance Your Skills in Predictive Analytics]]
← [[Python- Working with Predictive Analytics]] | **6 of 8** | [[Predictive Analytics Essential Training- Estimating and Ensuring ROI]] →

### In [[Learning Codeless Machine Learning with KNIME]]
← [[Machine Learning and AI Foundations- Decision Trees with KNIME]] | **3 of 5** | [[Machine Learning and AI Foundations- Producing Explainable AI (XAI) and Interpretable Machine Learning Solutions]] →

### In [[Advance Your Business Analytics Skills]]
← [[Predictive Customer Analytics]] | **10 of 11** | [[Data Visualization for Data Analysts and Analytics]] →

## Appears In

- [[Advance Your Skills in Predictive Analytics]]
- [[Learning Codeless Machine Learning with KNIME]]
- [[Advance Your Business Analytics Skills]]

## Related Courses

_Courses sharing skills:_

- [[Data Science Foundations- Python Scientific Stack -CoderPad-]] — Data Science Foundations
- [[Introduction To Machine Learning With Knime]] — CRISP-DM
- [[Data Science Foundations- Data Mining in R]] — Data Science Foundations
- [[Executive Guide to Predictive Modeling Strategy at Scale]] — Predictive Modeling
- [[Predictive Analytics Essential Training- Data Mining]] — CRISP-DM
