---
type: course
cssclasses:
  - lle-course
slug: the-80-20-rule-of-data-science
url: "https://www.linkedin.com/learning/the-80-20-rule-of-data-science"
duration_minutes: 86
duration: 1h 26m
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D4D0DAQEcI8TngOHfeg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1724267271010?e=2147483647&amp;v=beta&amp;t=HoBiLuSGWby-16_rSkaxbOxXDRe_KOUdx04PY91WIWQ"
linkedin_topic: Data Science
learning_paths:
  - '[[Introduction to Fundamental Skills for Data Work- Data Strategy and Planning]]'
prev_courses:
  - '[[Using AI to Improve Ops for Your Data Organization]]'
next_courses:
  - '[[Data Science Team Lifecycle Management]]'
path_nav: '[{"path":"Introduction to Fundamental Skills for Data Work- Data Strategy and Planning","position":6,"total":10,"prev":"Using AI to Improve Ops for Your Data Organization","next":"Data Science Team Lifecycle Management"}]'
path_count: 1
tags:
  - course
  - topic/data-science
  - topic/database-management
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/The%2080-20%20Rule%20of%20Data%20Science.md)

![The 80/20 Rule of Data Science](https://media.licdn.com/dms/image/v2/D4D0DAQEcI8TngOHfeg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1724267271010?e=2147483647&amp;v=beta&amp;t=HoBiLuSGWby-16_rSkaxbOxXDRe_KOUdx04PY91WIWQ)

# The 80/20 Rule of Data Science

> In this course, join instructor Howard Friedman as he outlines the core concepts of the 80/20 rule for data science and how to get most of the value with minimal effort. Explore the basic steps required to assign value to different parts of your work, including defining success, obtaining high-quality datasets, starting with basic statistics, building basic models early, and avoiding getting bogge

> [LinkedIn Learning](https://www.linkedin.com/learning/the-80-20-rule-of-data-science) | 1h 26m
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [What is the 80/20 rule of data science?](#what-is-the-8020-rule-of-data-science)
  - [What you should know for this course](#what-you-should-know-for-this-course)
- [**1. Getting Started with Prioritizing**](#1-getting-started-with-prioritizing) (5 videos)
  - [Defining success](#defining-success)
  - [Make minimum viable products (MVP) your friend](#make-minimum-viable-products-mvp-your-friend)
  - [The point of diminishing returns](#the-point-of-diminishing-returns)
  - [Why do data science projects fail?](#why-do-data-science-projects-fail)
  - [Plan for deployment](#plan-for-deployment)
- [**2. Database Selection and Quality Checks**](#2-database-selection-and-quality-checks) (5 videos)
  - [Comb the literature](#comb-the-literature)
  - [Triaging data sources](#triaging-data-sources)
  - [Checking data quality](#checking-data-quality)
  - [Dealing with missing data](#dealing-with-missing-data)
  - [Finding strong features](#finding-strong-features)
- [**3. Simple Models First**](#3-simple-models-first) (6 videos)
  - [Feature transformations](#feature-transformations)
  - [Transforming continuous features](#transforming-continuous-features)
  - [Interaction terms](#interaction-terms)
  - [Adding data sources](#adding-data-sources)
  - [Linear regression](#linear-regression)
  - [Logistic regression](#logistic-regression)
- [**4. Tracking Performance**](#4-tracking-performance) (4 videos)
  - [Choosing metrics](#choosing-metrics)
  - [Designing simple dashboards](#designing-simple-dashboards)
  - [Rapid prototyping](#rapid-prototyping)
  - [When to stop](#when-to-stop)
- [**5. Communicating the 80/20 of Data Science**](#5-communicating-the-8020-of-data-science) (3 videos)
  - [Focus on outcome, not technique](#focus-on-outcome-not-technique)
  - [Manage expectations and build trust](#manage-expectations-and-build-trust)
  - [Emphasize collaboration](#emphasize-collaboration)
- [**Conclusion**](#conclusion) (1 videos)
  - [Key takeaways for your future career in data science](#key-takeaways-for-your-future-career-in-data-science)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### What is the 80/20 rule of data science?
> [LinkedIn Learning](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/what-is-the-80-20-rule-of-data-science?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/what-is-the-80-20-rule-of-data-science?u=76281980&t=0)** - Data science can feel overwhelming.
>
> **[0:02](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/what-is-the-80-20-rule-of-data-science?u=76281980&t=2)** The sheer amount of data, complex algorithms, and sophisticated software out there can create the illusion that massive effort is required.
>
> **[0:11](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/what-is-the-80-20-rule-of-data-science?u=76281980&t=11)** But here's the secret, that's often not the case.
>
> **[0:14](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/what-is-the-80-20-rule-of-data-science?u=76281980&t=14)** The 80-20 rule, also known as the Pareto Principle, tells us that in many situations, roughly 80% of the value often comes from just 20% of the effort.
>
> **[0:26](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/what-is-the-80-20-rule-of-data-science?u=76281980&t=26)** This idea absolutely applies to data science.
>
> **[0:29](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/what-is-the-80-20-rule-of-data-science?u=76281980&t=29)** In this course, we're going to focus on that crucial 20%.
>
> **[0:34](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/what-is-the-80-20-rule-of-data-science?u=76281980&t=34)** I'm Howard Friedman.
>
> **[0:35](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/what-is-the-80-20-rule-of-data-science?u=76281980&t=35)** I'm a data scientist with decades of experience.
>
> **[0:38](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/what-is-the-80-20-rule-of-data-science?u=76281980&t=38)** Are you ready to use data science to have a greater impact at work?
>
> **[0:42](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/what-is-the-80-20-rule-of-data-science?u=76281980&t=42)** Let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (5), [[Algorithms]] (1)
> **Definitions:** known as (1)
> **Speakers:** - data (1)

#### What you should know for this course
> [LinkedIn Learning](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/what-you-should-know-for-this-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/what-you-should-know-for-this-course?u=76281980&t=0)** - So what do you need to know coming into this course?
>
> **[0:04](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/what-you-should-know-for-this-course?u=76281980&t=4)** First, you need to understand crystal clear project goals.
>
> **[0:08](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/what-you-should-know-for-this-course?u=76281980&t=8)** Can you describe what problem you're actually trying to solve?
>
> **[0:12](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/what-you-should-know-for-this-course?u=76281980&t=12)** This is your guiding star, keeping you from getting lost in a sea of data.
>
> **[0:18](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/what-you-should-know-for-this-course?u=76281980&t=18)** Second, you need to recognize good, relevant data.
>
> **[0:22](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/what-you-should-know-for-this-course?u=76281980&t=22)** It's about quality.
>
> **[0:23](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/what-you-should-know-for-this-course?u=76281980&t=23)** Yes, there is a minimum amount of data needed, but quality beats quantity whether it is volume or the features being used for modeling.
>
> **[0:33](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/what-you-should-know-for-this-course?u=76281980&t=33)** A focused data set filled with informative features will take you much further than a massive error filled one that lacks strong features.
>
> **[0:43](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/what-you-should-know-for-this-course?u=76281980&t=43)** And third, you'll need to leverage what you already know, existing company knowledge, market insights, even expert opinions.
>
> **[0:53](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/what-you-should-know-for-this-course?u=76281980&t=53)** These form the foundations on which your analysis stands.
>
> **[0:59](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/what-you-should-know-for-this-course?u=76281980&t=59)** Now, here's what you don't need when applying the 80-20 rules of data science.
>
> **[1:04](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/what-you-should-know-for-this-course?u=76281980&t=64)** You can leave behind the most cutting edge AI models since they're often overkill.
>
> **[1:09](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/what-you-should-know-for-this-course?u=76281980&t=69)** You can avoid trying to analyze every single data source since that's a recipe for analysis paralysis.
>
> **[1:17](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/what-you-should-know-for-this-course?u=76281980&t=77)** And you can stop endless explorations of features.
>
> **[1:22](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/what-you-should-know-for-this-course?u=76281980&t=82)** The basics are often surprisingly powerful.
>
> **[1:26](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/what-you-should-know-for-this-course?u=76281980&t=86)** Tune into the next video to learn more.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (6), ai (1), next (1)
> **Cross-References:** next video (1)
> **Definitions:** is a  (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - so (1)


### 1. Getting Started with Prioritizing

[↑ Back to Table of Contents](#table-of-contents)

#### Defining success
> [LinkedIn Learning](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/defining-success?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/defining-success?u=76281980&t=0)** - In the realm of data science, the thrill often lies in building models, analyzing trends, and crafting insights from raw data.
>
> **[0:09](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/defining-success?u=76281980&t=9)** These are all critical, yet without clearly delineating what success looks like for your project, all these efforts risk amounting to very little.
>
> **[0:19](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/defining-success?u=76281980&t=19)** You could build models that no one implements, create analysis that no one reviews, and offer insights that simply result in shoulder shrugs.
>
> **[0:28](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/defining-success?u=76281980&t=28)** Your success in data science requires a definition of success, one that you and your customer have to agree on.
>
> **[0:36](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/defining-success?u=76281980&t=36)** So let's dissect the idea of success.
>
> **[0:40](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/defining-success?u=76281980&t=40)** First, you have to put on your customer hat.
>
> **[0:44](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/defining-success?u=76281980&t=44)** Whether your customer is a department within the company, a paying client, or any other stakeholder, it's vital to understand their needs and requirements.
>
> **[0:54](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/defining-success?u=76281980&t=54)** What problems did they need solved?
>
> **[0:57](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/defining-success?u=76281980&t=57)** What sort of outcomes would be considered a win in their eyes?
>
> **[1:02](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/defining-success?u=76281980&t=62)** What model performance is needed, by when, and at what cost?
>
> **[1:07](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/defining-success?u=76281980&t=67)** Here's a scenario.
>
> **[1:08](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/defining-success?u=76281980&t=68)** Imagine you're building a predictive model to forecast sales.
>
> **[1:13](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/defining-success?u=76281980&t=73)** While the technically accurate model is essential, your client may actually be far more concerned with the practical implications it has for their decision making.
>
> **[1:22](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/defining-success?u=76281980&t=82)** Can it identify high potential regions for focused marketing?
>
> **[1:27](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/defining-success?u=76281980&t=87)** Can it predict demand well enough to improve inventory levels and reduce waste by some predefined percent?
>
> **[1:35](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/defining-success?u=76281980&t=95)** Once you understand the customer view of success, you can put on your performer hat.
>
> **[1:42](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/defining-success?u=76281980&t=102)** It's now your job to translate those requirements into tangible metrics and targets.
>
> **[1:48](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/defining-success?u=76281980&t=108)** These metrics fall into a few broad categories.
>
> **[1:52](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/defining-success?u=76281980&t=112)** Performance.
>
> **[1:53](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/defining-success?u=76281980&t=113)** How well does your model or analysis work?
>
> **[1:56](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/defining-success?u=76281980&t=116)** Accuracy, precision, recall, these are where the technical guts of your project come under scrutiny.
>
> **[2:05](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/defining-success?u=76281980&t=125)** Time. Did you deliver on schedule?
>
> **[2:08](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/defining-success?u=76281980&t=128)** A project that was needed in March may be viewed as a failure if it arrives in June.
>
> **[2:15](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/defining-success?u=76281980&t=135)** Cost.
>
> **[2:17](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/defining-success?u=76281980&t=137)** Was the project within budget?
>
> **[2:19](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/defining-success?u=76281980&t=139)** Data science doesn't exist in a vacuum.
>
> **[2:21](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/defining-success?u=76281980&t=141)** It has to fit within business constraints.
>
> **[2:25](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/defining-success?u=76281980&t=145)** Stakeholder satisfaction.
>
> **[2:27](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/defining-success?u=76281980&t=147)** This is more qualitative.
>
> **[2:29](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/defining-success?u=76281980&t=149)** Overall, is the customer satisfied with the product?
>
> **[2:33](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/defining-success?u=76281980&t=153)** This is tightly linked to whether you communicated effectively.
>
> **[2:36](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/defining-success?u=76281980&t=156)** Were the insights actionable and readily presented?
>
> **[2:40](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/defining-success?u=76281980&t=160)** Did the project enhance trust in data-driven approaches?
>
> **[2:46](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/defining-success?u=76281980&t=166)** Quality.
>
> **[2:47](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/defining-success?u=76281980&t=167)** Is your code well-structured, documented, and reproducible?
>
> **[2:51](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/defining-success?u=76281980&t=171)** Think long-term.
>
> **[2:52](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/defining-success?u=76281980&t=172)** Will others be able to pick up your work if needed?
>
> **[2:57](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/defining-success?u=76281980&t=177)** Business impact.
>
> **[2:58](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/defining-success?u=76281980&t=178)** Ultimately, did the project make a difference to the bottom line or the key objectives of the customer?
>
> **[3:06](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/defining-success?u=76281980&t=186)** Here's the key takeaway.
>
> **[3:08](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/defining-success?u=76281980&t=188)** Start data science projects with a shared understanding of what success looks like.
>
> **[3:14](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/defining-success?u=76281980&t=194)** Try this step.
>
> **[3:15](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/defining-success?u=76281980&t=195)** Reach out to your data science customer and ask them to have a sit down to discuss project success.
>
> **[3:22](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/defining-success?u=76281980&t=202)** In that meeting, agree on these success metrics.
>
> **[3:26](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/defining-success?u=76281980&t=206)** Later you can then track them and communicate the progress on these goals.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (7), business (2), product (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Analogies:** imagine (1)
> **Speakers:** - in (1)

#### Make minimum viable products (MVP) your friend
> [LinkedIn Learning](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/make-minimal-viable-products-mvp-your-friend?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/make-minimal-viable-products-mvp-your-friend?u=76281980&t=0)** - Here's the secret to success in data science that so many teams overlook.
>
> **[0:05](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/make-minimal-viable-products-mvp-your-friend?u=76281980&t=5)** Start small and iterate fast.
>
> **[0:08](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/make-minimal-viable-products-mvp-your-friend?u=76281980&t=8)** This is where the concept of a minimum viable product, usually called an MVP, becomes your biggest ally.
>
> **[0:16](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/make-minimal-viable-products-mvp-your-friend?u=76281980&t=16)** So what exactly is a data science MVP?
>
> **[0:20](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/make-minimal-viable-products-mvp-your-friend?u=76281980&t=20)** Think of it as the simplest functional version of your solution.
>
> **[0:25](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/make-minimal-viable-products-mvp-your-friend?u=76281980&t=25)** It's focused on delivering the core value proposition, answering a key question, and critically important is that it can be implemented fast.
>
> **[0:35](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/make-minimal-viable-products-mvp-your-friend?u=76281980&t=35)** It might not be the prettiest.
>
> **[0:37](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/make-minimal-viable-products-mvp-your-friend?u=76281980&t=37)** It may lack some bells and whistles.
>
> **[0:39](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/make-minimal-viable-products-mvp-your-friend?u=76281980&t=39)** It probably won't use the most sophisticated algorithm under the sun, but it works.
>
> **[0:47](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/make-minimal-viable-products-mvp-your-friend?u=76281980&t=47)** Why bother with MVP?
>
> **[0:49](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/make-minimal-viable-products-mvp-your-friend?u=76281980&t=49)** First, it helps you understand real-world deployment.
>
> **[0:53](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/make-minimal-viable-products-mvp-your-friend?u=76281980&t=53)** An MVP helps you understand early on what it would take to move a model into a real-world application, including the operational considerations and hurdles that need to be overcome.
>
> **[1:08](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/make-minimal-viable-products-mvp-your-friend?u=76281980&t=68)** Second, you can validate your assumptions.
>
> **[1:11](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/make-minimal-viable-products-mvp-your-friend?u=76281980&t=71)** Data science is messy and the real world rarely lines up with your neat textbook examples.
>
> **[1:20](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/make-minimal-viable-products-mvp-your-friend?u=76281980&t=80)** An MVP forces you to confront real data and get user feedback early on.
>
> **[1:27](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/make-minimal-viable-products-mvp-your-friend?u=76281980&t=87)** You might learn that your original problem statement was off, or your initial model doesn't actually offer much improvement.
>
> **[1:36](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/make-minimal-viable-products-mvp-your-friend?u=76281980&t=96)** Third, you can prioritize relentlessly.
>
> **[1:40](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/make-minimal-viable-products-mvp-your-friend?u=76281980&t=100)** Big projects have scope creep, that tendency to grow until they are unwieldy.
>
> **[1:47](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/make-minimal-viable-products-mvp-your-friend?u=76281980&t=107)** Focusing on an MVP helps you ruthlessly prioritize features and data sources based on what must be there to prove value.
>
> **[1:57](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/make-minimal-viable-products-mvp-your-friend?u=76281980&t=117)** Lastly, you get tangible wins.
>
> **[2:00](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/make-minimal-viable-products-mvp-your-friend?u=76281980&t=120)** A fully functional, albeit basic product, builds confidence among stakeholders and keeps your team motivated.
>
> **[2:09](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/make-minimal-viable-products-mvp-your-friend?u=76281980&t=129)** Demonstrating a working solution fuels momentum and opens up opportunities to get funding or resources for future development.
>
> **[2:19](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/make-minimal-viable-products-mvp-your-friend?u=76281980&t=139)** But hold on.
>
> **[2:21](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/make-minimal-viable-products-mvp-your-friend?u=76281980&t=141)** Does this mean low quality?
>
> **[2:23](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/make-minimal-viable-products-mvp-your-friend?u=76281980&t=143)** Absolutely not.
>
> **[2:25](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/make-minimal-viable-products-mvp-your-friend?u=76281980&t=145)** Minimum doesn't mean sloppy.
>
> **[2:28](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/make-minimal-viable-products-mvp-your-friend?u=76281980&t=148)** Your MVP still has to be well-structured and perform sufficiently well to deliver meaningful insights.
>
> **[2:36](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/make-minimal-viable-products-mvp-your-friend?u=76281980&t=156)** Think of your data science project like building a house.
>
> **[2:40](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/make-minimal-viable-products-mvp-your-friend?u=76281980&t=160)** You wouldn't focus on the art on the walls until the foundation is laid.
>
> **[2:46](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/make-minimal-viable-products-mvp-your-friend?u=76281980&t=166)** An MVP is your solid foundation.
>
> **[2:49](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/make-minimal-viable-products-mvp-your-friend?u=76281980&t=169)** Build it, get feedback, quickly improve, and only then start decorating with the fancy advanced features.
>
> **[2:59](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/make-minimal-viable-products-mvp-your-friend?u=76281980&t=179)** This method will save you time, money, and a whole lot of potential headaches.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (6), product (2), functional (2), teams (1), application (1)
> **Env Vars:** mvp (8)
> **Definitions:** is a  (1)
> **Analogies:** think of it as (1)
> **Speakers:** - here (1)

#### The point of diminishing returns
> [LinkedIn Learning](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/the-point-of-diminishing-returns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/the-point-of-diminishing-returns?u=76281980&t=0)** - In data science, there's an undeniable thrill in pursuing perfection, that relentless drive to squeeze every last drop of accuracy or predictive power out of your model.
>
> **[0:14](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/the-point-of-diminishing-returns?u=76281980&t=14)** The idea is more data, more complex models, more tweaking, and surely those performance metrics will keep soaring, right?
>
> **[0:23](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/the-point-of-diminishing-returns?u=76281980&t=23)** Well, not quite.
>
> **[0:25](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/the-point-of-diminishing-returns?u=76281980&t=25)** That's where the concept of diminishing returns comes in.
>
> **[0:28](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/the-point-of-diminishing-returns?u=76281980&t=28)** It's like baking.
>
> **[0:30](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/the-point-of-diminishing-returns?u=76281980&t=30)** Those first few ingredients make a huge difference, but each extra sprinkle you add has less and less impact on the final taste.
>
> **[0:40](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/the-point-of-diminishing-returns?u=76281980&t=40)** Consider the example of creating an email spam blocker.
>
> **[0:44](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/the-point-of-diminishing-returns?u=76281980&t=44)** Let's say you're building a model to classify emails as spam or not.
>
> **[0:49](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/the-point-of-diminishing-returns?u=76281980&t=49)** You start with a simple model based on keywords and sender information.
>
> **[0:54](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/the-point-of-diminishing-returns?u=76281980&t=54)** This gives you 90% accuracy, pretty decent.
>
> **[0:57](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/the-point-of-diminishing-returns?u=76281980&t=57)** You then add features like email length, time of day, and patterns in the subject line.
>
> **[1:04](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/the-point-of-diminishing-returns?u=76281980&t=64)** Your accuracy jumps to 92%.
>
> **[1:07](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/the-point-of-diminishing-returns?u=76281980&t=67)** Encouraged.
>
> **[1:09](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/the-point-of-diminishing-returns?u=76281980&t=69)** You invest time investigating advanced text analysis, techniques, building custom features based on word frequency.
>
> **[1:18](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/the-point-of-diminishing-returns?u=76281980&t=78)** After significant effort, you managed to reach 93%.
>
> **[1:23](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/the-point-of-diminishing-returns?u=76281980&t=83)** That final 1% gain might have taken far more money, time, and effort than achieving the first simple model with 90% accuracy.
>
> **[1:35](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/the-point-of-diminishing-returns?u=76281980&t=95)** That is why it's important to track your efforts and your gains.
>
> **[1:40](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/the-point-of-diminishing-returns?u=76281980&t=100)** Here's where it gets practical.
>
> **[1:42](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/the-point-of-diminishing-returns?u=76281980&t=102)** Always visualize the improvement in your model's key metrics over time and effort.
>
> **[1:48](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/the-point-of-diminishing-returns?u=76281980&t=108)** Plot the number of model iterations, the amount of data you've used, or the time invested on the x-axis.
>
> **[1:55](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/the-point-of-diminishing-returns?u=76281980&t=115)** Track your performance metric, accuracy, precision, or some other metric on the Y-axis.
>
> **[2:02](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/the-point-of-diminishing-returns?u=76281980&t=122)** You'll likely notice that the curve initially has a steep upward slope, but eventually flattens out.
>
> **[2:10](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/the-point-of-diminishing-returns?u=76281980&t=130)** The exact spot where it flattens significantly is when you might be reaching your point of diminishing returns.
>
> **[2:17](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/the-point-of-diminishing-returns?u=76281980&t=137)** This point of diminishing returns is a reminder that data science products are also subject to cost benefit analysis, not just examining the technical performance of a model.
>
> **[2:29](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/the-point-of-diminishing-returns?u=76281980&t=149)** To think about the cost benefit of a data science project, you can ask yourself about each of these factors.
>
> **[2:37](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/the-point-of-diminishing-returns?u=76281980&t=157)** Cost of complexity, each model refinement probably requires more time, computational resources or expertise.
>
> **[2:45](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/the-point-of-diminishing-returns?u=76281980&t=165)** Are these costs justified by the marginal gains you're seeing?
>
> **[2:50](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/the-point-of-diminishing-returns?u=76281980&t=170)** Opportunity cost.
>
> **[2:52](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/the-point-of-diminishing-returns?u=76281980&t=172)** Could your team's time be better spent on another project or exploring a different approach?
>
> **[3:00](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/the-point-of-diminishing-returns?u=76281980&t=180)** Business need.
>
> **[3:01](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/the-point-of-diminishing-returns?u=76281980&t=181)** Does that extra 1% reduction in spam reaching users inboxes make a substantial difference to their experience?
>
> **[3:09](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/the-point-of-diminishing-returns?u=76281980&t=189)** Or is it a nice to have at this point?
>
> **[3:12](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/the-point-of-diminishing-returns?u=76281980&t=192)** Is the substantial extra cost and time expended worth the effort?
>
> **[3:18](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/the-point-of-diminishing-returns?u=76281980&t=198)** The goal is never to achieve perfection.
>
> **[3:21](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/the-point-of-diminishing-returns?u=76281980&t=201)** It's to provide value.
>
> **[3:23](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/the-point-of-diminishing-returns?u=76281980&t=203)** Sometimes a good enough model that gets deployed quickly, addresses the core problems, costs a minimum amount of money and time, and is easy to understand offers far more practical benefit than endlessly pursuing marginal gains.
>
> **[3:39](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/the-point-of-diminishing-returns?u=76281980&t=219)** Think about your own work.
>
> **[3:40](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/the-point-of-diminishing-returns?u=76281980&t=220)** Pick a project and try tracking the model performance improvement as a function of effort.
>
> **[3:46](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/the-point-of-diminishing-returns?u=76281980&t=226)** Can you identify where you might be past the point of diminishing returns?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (5), power (1), [[Performance Metrics]] (1), [[Microsoft Word|Word]] (1), [[Microsoft Products|Products]] (1)
> **CLI Commands:** make (2)
> **Definitions:** is a  (1)
> **Analogies:** it's like (1)
> **Speakers:** - in (1)

#### Why do data science projects fail?
> [LinkedIn Learning](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/why-do-data-science-projects-fail?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/why-do-data-science-projects-fail?u=76281980&t=0)** - The harsh reality of data science is that a significant number of data science projects fail to deliver on their potential.
>
> **[0:08](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/why-do-data-science-projects-fail?u=76281980&t=8)** They might get stuck in development purgatory, produce results that are irrelevant to the business, have insurmountable implementation issues, or lose the confidence of their business customers.
>
> **[0:21](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/why-do-data-science-projects-fail?u=76281980&t=21)** So what are we going to do?
>
> **[0:23](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/why-do-data-science-projects-fail?u=76281980&t=23)** Well, understanding these common pitfalls is the first step in avoiding them.
>
> **[0:28](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/why-do-data-science-projects-fail?u=76281980&t=28)** Let's dissect some of the primary reasons why data science projects go off the rails.
>
> **[0:34](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/why-do-data-science-projects-fail?u=76281980&t=34)** First, fuzzy goals and success metrics.
>
> **[0:38](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/why-do-data-science-projects-fail?u=76281980&t=38)** Imagine setting off on a road trip without a clear destination.
>
> **[0:42](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/why-do-data-science-projects-fail?u=76281980&t=42)** Sounds crazy.
>
> **[0:44](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/why-do-data-science-projects-fail?u=76281980&t=44)** Many data science projects begin with vague objectives like let's use data to improve things.
>
> **[0:52](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/why-do-data-science-projects-fail?u=76281980&t=52)** This lacks a specific, measurable target essential to guide the project and evaluate its ultimate success.
>
> **[1:01](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/why-do-data-science-projects-fail?u=76281980&t=61)** Second, the project management gap.
>
> **[1:05](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/why-do-data-science-projects-fail?u=76281980&t=65)** Data science isn't purely technical.
>
> **[1:08](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/why-do-data-science-projects-fail?u=76281980&t=68)** Project management principles like clear timelines, well-defined milestones, contingency plans, resource allocation, and stakeholder communication are critical.
>
> **[1:20](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/why-do-data-science-projects-fail?u=76281980&t=80)** Yet many data science teams ignore project management 101 principles, leading to delays and misaligned expectations.
>
> **[1:30](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/why-do-data-science-projects-fail?u=76281980&t=90)** Third, resource bottlenecks.
>
> **[1:32](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/why-do-data-science-projects-fail?u=76281980&t=92)** Data science is resource intensive.
>
> **[1:36](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/why-do-data-science-projects-fail?u=76281980&t=96)** It requires not just data, but appropriate software, computational power, and crucially, skilled data scientists.
>
> **[1:45](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/why-do-data-science-projects-fail?u=76281980&t=105)** Underestimating these needs can lead to project stalling with insufficient tools, a lack of necessary expertise, and a loss of customer confidence when the data science team has to return to the customer to say they fail to anticipate the costs, software needs, human resources, or some other necessary component.
>
> **[2:08](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/why-do-data-science-projects-fail?u=76281980&t=128)** The time factor.
>
> **[2:10](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/why-do-data-science-projects-fail?u=76281980&t=130)** Quality data analysis and model building takes time.
>
> **[2:15](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/why-do-data-science-projects-fail?u=76281980&t=135)** Rushing a project or not allocating enough time for exploration, cleaning, and iteration results in subpar models that miss the mark.
>
> **[2:26](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/why-do-data-science-projects-fail?u=76281980&t=146)** Misaligned incentives.
>
> **[2:28](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/why-do-data-science-projects-fail?u=76281980&t=148)** Data scientists often get excited by bleeding edge algorithms and technical elegance.
>
> **[2:35](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/why-do-data-science-projects-fail?u=76281980&t=155)** But if the incentives within the organization solely reward complexity over utility, they may build solutions that are impressive in theory but impractical for the real world.
>
> **[2:49](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/why-do-data-science-projects-fail?u=76281980&t=169)** Missing executive support.
>
> **[2:52](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/why-do-data-science-projects-fail?u=76281980&t=172)** Successful data science initiatives often need a champion at the senior management level.
>
> **[2:57](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/why-do-data-science-projects-fail?u=76281980&t=177)** Someone who understands its potential helps navigate organizational hurdles and protects the project from getting prematurely axed.
>
> **[3:06](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/why-do-data-science-projects-fail?u=76281980&t=186)** The takeaway is that data science isn't magic.
>
> **[3:10](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/why-do-data-science-projects-fail?u=76281980&t=190)** It requires careful planning, strategic investment and alignment between those building the models and those ultimately making the decisions.
>
> **[3:20](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/why-do-data-science-projects-fail?u=76281980&t=200)** Projects that overcome these potential failures become the success stories that demonstrate the power of data-driven insights for the organization.
>
> **[3:30](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/why-do-data-science-projects-fail?u=76281980&t=210)** Here's a task for you.
>
> **[3:32](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/why-do-data-science-projects-fail?u=76281980&t=212)** Select one of your current projects and check how it performs against the checklist above.
>
> **[3:39](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/why-do-data-science-projects-fail?u=76281980&t=219)** Does it have clear goals and success metrics?
>
> **[3:42](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/why-do-data-science-projects-fail?u=76281980&t=222)** How well is the project being managed in terms of tracking milestones, deadlines, risks and resources?
>
> **[3:49](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/why-do-data-science-projects-fail?u=76281980&t=229)** Does the project have senior management support?
>
> **[3:52](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/why-do-data-science-projects-fail?u=76281980&t=232)** If the answer to these questions are all positive, then you're probably in good shape.
>
> **[3:57](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/why-do-data-science-projects-fail?u=76281980&t=237)** Otherwise, you may want to pause and revisit the gaps, which could cause the project to fail.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (16), management (5), business (2), power (2), teams (1)
> **CLI Commands:** rails (1)
> **Analogies:** imagine (1)
> **Speakers:** - the (1)

#### Plan for deployment
> [LinkedIn Learning](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/plan-for-deployment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/plan-for-deployment?u=76281980&t=0)** - Think of a data science model, like a finely-crafted surgical scalpel.
>
> **[0:05](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/plan-for-deployment?u=76281980&t=5)** It may be brilliant, sharp and polished, but its true value lies in how it's used.
>
> **[0:11](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/plan-for-deployment?u=76281980&t=11)** Many data science projects fall into the trap of obsessing over model perfection, only to discover that when it's time to actually use the results, nobody quite knows what to do with them.
>
> **[0:24](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/plan-for-deployment?u=76281980&t=24)** Remember, the goal isn't just a model, it's real-world impact.
>
> **[0:30](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/plan-for-deployment?u=76281980&t=30)** That's where a deployment plan comes in, and why it should be considered right from the start of your project.
>
> **[0:37](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/plan-for-deployment?u=76281980&t=37)** Here are some key questions for deployment to ask yourself, how will the model be used?
>
> **[0:43](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/plan-for-deployment?u=76281980&t=43)** Will the results be fed into a dashboard?
>
> **[0:46](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/plan-for-deployment?u=76281980&t=46)** Directly triggered action in another system, or support human decision-making?
>
> **[0:52](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/plan-for-deployment?u=76281980&t=52)** Each has different implications for how the model needs to be integrated.
>
> **[0:58](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/plan-for-deployment?u=76281980&t=58)** Who is the user?
>
> **[1:00](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/plan-for-deployment?u=76281980&t=60)** Is it technical staff, customer service representatives or executives?
>
> **[1:05](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/plan-for-deployment?u=76281980&t=65)** Their comfort with data will shape how you'd need to present insights.
>
> **[1:11](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/plan-for-deployment?u=76281980&t=71)** Deployment environment.
>
> **[1:13](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/plan-for-deployment?u=76281980&t=73)** Where will it live?
>
> **[1:15](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/plan-for-deployment?u=76281980&t=75)** Is it in the cloud, a local server or embedded in an existing software application?
>
> **[1:21](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/plan-for-deployment?u=76281980&t=81)** This impacts the technical choices you'll make.
>
> **[1:26](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/plan-for-deployment?u=76281980&t=86)** Required speed and frequency.
>
> **[1:28](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/plan-for-deployment?u=76281980&t=88)** Does the model output need to be in real time or can there be some delay in processing?
>
> **[1:34](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/plan-for-deployment?u=76281980&t=94)** How often will predictions need to be refreshed?
>
> **[1:39](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/plan-for-deployment?u=76281980&t=99)** Maintenance and monitoring.
>
> **[1:40](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/plan-for-deployment?u=76281980&t=100)** How will you check that the model continues to perform?
>
> **[1:43](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/plan-for-deployment?u=76281980&t=103)** Who is responsible for retraining when things go out of sync?
>
> **[1:49](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/plan-for-deployment?u=76281980&t=109)** These questions emphasize why it's important to pilot and iterate.
>
> **[1:54](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/plan-for-deployment?u=76281980&t=114)** Don't wait until your model's a masterpiece to start thinking about deployment.
>
> **[1:59](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/plan-for-deployment?u=76281980&t=119)** Even with a simple, early version of your model, set up a pilot test within its intended operating environment.
>
> **[2:07](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/plan-for-deployment?u=76281980&t=127)** This achieves a few critical things.
>
> **[2:10](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/plan-for-deployment?u=76281980&t=130)** It gives you a reality check.
>
> **[2:12](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/plan-for-deployment?u=76281980&t=132)** You'll discover early if your assumptions about data flows, user needs and technical constraints were accurate.
>
> **[2:20](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/plan-for-deployment?u=76281980&t=140)** It helps you gain buy-in seeing the model in the wild, even if imperfectly, helps stakeholders visualize its potential and gets them invested in the project.
>
> **[2:33](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/plan-for-deployment?u=76281980&t=153)** It lets you make iterative improvements.
>
> **[2:36](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/plan-for-deployment?u=76281980&t=156)** Real-world feedback often reveals aspects of your model or output format that need refinement.
>
> **[2:42](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/plan-for-deployment?u=76281980&t=162)** Long before you've spent countless hours chasing theoretical perfection, try this on one of your own projects.
>
> **[2:51](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/plan-for-deployment?u=76281980&t=171)** Pick a project that is still in the early stages, ask yourself if you have thoroughly examined the key questions for deployment.
>
> **[2:59](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/plan-for-deployment?u=76281980&t=179)** For this project, do you know how the model will be used, and who is the user?
>
> **[3:04](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/plan-for-deployment?u=76281980&t=184)** Is the deployment environment experienced at implementing models like the one you're building, or are you breaking new ground?
>
> **[3:13](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/plan-for-deployment?u=76281980&t=193)** Once you begin asking these types of questions for this model, you may get concerned about the deployment environment and consider the MVP approach.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (4), [[Decision-Making]] (1), cloud (1), application (1)
> **CLI Commands:** make (2)
> **Env Vars:** mvp (1)
> **Prerequisites:** set up (1)
> **Speakers:** - think (1)


### 2. Database Selection and Quality Checks

[↑ Back to Table of Contents](#table-of-contents)

#### Comb the literature
> [LinkedIn Learning](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/comb-the-literature?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/comb-the-literature?u=76281980&t=0)** - Imagine you're a basketball coach, would you have your team enter the big tournament without background research?
>
> **[0:08](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/comb-the-literature?u=76281980&t=8)** Of course not.
>
> **[0:10](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/comb-the-literature?u=76281980&t=10)** Effective coaching starts with understanding not just your own team's talents and opportunities, but also combing through videos, reports, and analysis of the opponents.
>
> **[0:22](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/comb-the-literature?u=76281980&t=22)** The same goes for data science.
>
> **[0:24](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/comb-the-literature?u=76281980&t=24)** We often look around to understand what has been done before diving headfirst into a major analysis.
>
> **[0:31](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/comb-the-literature?u=76281980&t=31)** I call this combing the literature.
>
> **[0:34](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/comb-the-literature?u=76281980&t=34)** Now, a literature search is not critical for a small project, though it might be helpful.
>
> **[0:39](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/comb-the-literature?u=76281980&t=39)** That said, if you're about to embark on a major modeling project, it's definitely a good idea to do some literature review since it serves multiple purposes.
>
> **[0:51](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/comb-the-literature?u=76281980&t=51)** First, feature inspiration.
>
> **[0:54](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/comb-the-literature?u=76281980&t=54)** Let's say you're building a customer churn prediction model.
>
> **[0:58](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/comb-the-literature?u=76281980&t=58)** What behaviors and demographics have been significant in similar studies?
>
> **[1:04](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/comb-the-literature?u=76281980&t=64)** Their findings become a springboard for your feature engineering.
>
> **[1:09](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/comb-the-literature?u=76281980&t=69)** Second, data source scouting.
>
> **[1:13](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/comb-the-literature?u=76281980&t=73)** Maybe you need data on weather patterns for an agriculture project.
>
> **[1:17](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/comb-the-literature?u=76281980&t=77)** Digging into past research reveals reliable sources and any potential limitations to keep in mind.
>
> **[1:26](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/comb-the-literature?u=76281980&t=86)** Third, model exploration.
>
> **[1:29](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/comb-the-literature?u=76281980&t=89)** If your problem is common such as fraud detection, then let's learn what other people have already tested.
>
> **[1:37](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/comb-the-literature?u=76281980&t=97)** Research exposes what model architectures typically perform well and where they might fall short in your specific use case.
>
> **[1:47](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/comb-the-literature?u=76281980&t=107)** And fourth, realistic benchmarks.
>
> **[1:50](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/comb-the-literature?u=76281980&t=110)** Published papers often include performance metrics.
>
> **[1:54](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/comb-the-literature?u=76281980&t=114)** This gives you an achievable baseline and lets you spot if your results are shockingly good, which suggests maybe you had an error such as data leakage or vastly underperforming, which hints that more work is likely needed.
>
> **[2:11](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/comb-the-literature?u=76281980&t=131)** So that's why combing the literature is worthwhile.
>
> **[2:14](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/comb-the-literature?u=76281980&t=134)** And here's how to comb effectively.
>
> **[2:17](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/comb-the-literature?u=76281980&t=137)** First, target keywords.
>
> **[2:20](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/comb-the-literature?u=76281980&t=140)** Don't just search broadly for data science.
>
> **[2:23](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/comb-the-literature?u=76281980&t=143)** Brainstorm terms specific to your problem, domain and model type.
>
> **[2:29](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/comb-the-literature?u=76281980&t=149)** Second, use reputable sources.
>
> **[2:33](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/comb-the-literature?u=76281980&t=153)** Focus on academic journals, conference papers, and maybe even code repositories like GitHub.
>
> **[2:39](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/comb-the-literature?u=76281980&t=159)** It's quality over quantity, so don't get fooled by marketing pamphlets that promise the world and deliver nothing.
>
> **[2:47](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/comb-the-literature?u=76281980&t=167)** Third, look beyond the abstract.
>
> **[2:51](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/comb-the-literature?u=76281980&t=171)** Skim the methods section and results.
>
> **[2:54](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/comb-the-literature?u=76281980&t=174)** That's where the real insights about features, models, and challenges lie and not in the abstracts and conclusions.
>
> **[3:02](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/comb-the-literature?u=76281980&t=182)** Fourth, do a snowball search.
>
> **[3:05](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/comb-the-literature?u=76281980&t=185)** You might be asking, what's that?
>
> **[3:08](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/comb-the-literature?u=76281980&t=188)** This strategy has you look through an article's references as a quick way to grow or snowball your research sources.
>
> **[3:15](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/comb-the-literature?u=76281980&t=195)** So imagine you found a super relevant paper.
>
> **[3:18](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/comb-the-literature?u=76281980&t=198)** You then investigate their citations and the papers that cited them.
>
> **[3:24](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/comb-the-literature?u=76281980&t=204)** You can try this right now.
>
> **[3:26](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/comb-the-literature?u=76281980&t=206)** Pick a project that you're either starting or planning to start soon.
>
> **[3:31](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/comb-the-literature?u=76281980&t=211)** Follow the steps described above and do some combing of the literature.
>
> **[3:37](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/comb-the-literature?u=76281980&t=217)** You'll likely find that you're not the first person stepping into this space, so what can you learn from others?
>
> **[3:43](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/comb-the-literature?u=76281980&t=223)** You might discover that crucial 20% that puts your project way ahead of the competition.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (5), [[Search]] (3), feature (1), [[Feature Engineering]] (1), [[Performance Metrics]] (1)
> **Analogies:** imagine (2), such as (2)
> **CLI Commands:** find (1)
> **Tools:** github (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - imagine (1)

#### Triaging data sources
> [LinkedIn Learning](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/triaging-data-sources?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/triaging-data-sources?u=76281980&t=0)** - Just as patients in an ER need to be triaged to prioritize care and stabilize those most in need, data science demands a similar triage approach.
>
> **[0:12](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/triaging-data-sources?u=76281980&t=12)** Not all data sources are created equal.
>
> **[0:15](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/triaging-data-sources?u=76281980&t=15)** Some might require substantial cleaning, analysis, and transformations before they're usable, or are cost prohibitive.
>
> **[0:23](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/triaging-data-sources?u=76281980&t=23)** And quite frankly, perfectly clean, well-aligned data is the unicorn of our field.
>
> **[0:31](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/triaging-data-sources?u=76281980&t=31)** The 80/20 rule of data triaging means we're going to quickly determine whether a data set will be useful by examining some key factors.
>
> **[0:40](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/triaging-data-sources?u=76281980&t=40)** First is availability.
>
> **[0:42](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/triaging-data-sources?u=76281980&t=42)** Is the data publicly available or is it behind a paywall?
>
> **[0:46](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/triaging-data-sources?u=76281980&t=46)** Do you need special permissions or are there security concerns?
>
> **[0:51](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/triaging-data-sources?u=76281980&t=51)** Knowing major logistics barriers can prevent you from chasing a dead end.
>
> **[0:56](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/triaging-data-sources?u=76281980&t=56)** Second is costs.
>
> **[0:58](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/triaging-data-sources?u=76281980&t=58)** Data can be surprisingly expensive.
>
> **[1:01](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/triaging-data-sources?u=76281980&t=61)** Are there usage fees and how do they compare with your budget?
>
> **[1:06](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/triaging-data-sources?u=76281980&t=66)** How much are the storage costs?
>
> **[1:08](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/triaging-data-sources?u=76281980&t=68)** Will you need to invest in new software to process it?
>
> **[1:12](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/triaging-data-sources?u=76281980&t=72)** Third is utility.
>
> **[1:15](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/triaging-data-sources?u=76281980&t=75)** Does the data actually contain the information you need?
>
> **[1:18](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/triaging-data-sources?u=76281980&t=78)** Do the fields represent needed data or nice-to-haves?
>
> **[1:22](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/triaging-data-sources?u=76281980&t=82)** Beware of proxies.
>
> **[1:25](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/triaging-data-sources?u=76281980&t=85)** Just because it's related to your topic doesn't mean it's the right fit.
>
> **[1:30](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/triaging-data-sources?u=76281980&t=90)** Fourth is frequency of updates.
>
> **[1:33](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/triaging-data-sources?u=76281980&t=93)** If you are predicting a real-time outcome, then stale annually, updated data won't cut it.
>
> **[1:41](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/triaging-data-sources?u=76281980&t=101)** Find data with time resolution and update frequency that aligns with your problem.
>
> **[1:47](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/triaging-data-sources?u=76281980&t=107)** Fifth is geographic resolution.
>
> **[1:50](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/triaging-data-sources?u=76281980&t=110)** Are you studying zip code level sales trends?
>
> **[1:53](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/triaging-data-sources?u=76281980&t=113)** Then nationwide data won't help.
>
> **[1:56](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/triaging-data-sources?u=76281980&t=116)** Make sure the granularity of the data matches your scope.
>
> **[2:00](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/triaging-data-sources?u=76281980&t=120)** Try this yourself.
>
> **[2:02](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/triaging-data-sources?u=76281980&t=122)** First, pick one of your most important projects.
>
> **[2:06](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/triaging-data-sources?u=76281980&t=126)** Using online resources, colleagues and other sources, identify the possible data sets.
>
> **[2:14](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/triaging-data-sources?u=76281980&t=134)** For each possible data set, assess the data set based on criteria of availability, costs, utility in terms of the available features, frequency of updates, and geographic resolution.
>
> **[2:29](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/triaging-data-sources?u=76281980&t=149)** What insights do you gain that will help you in triaging data sources?
>
> **[2:34](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/triaging-data-sources?u=76281980&t=154)** I always find it useful to obtain a quick sample of the data.
>
> **[2:38](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/triaging-data-sources?u=76281980&t=158)** This quick look can often reveal formatting issues, missing values, and whether it's worth a deeper dive.
>
> **[2:46](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/triaging-data-sources?u=76281980&t=166)** Data triage is about making tough calls.
>
> **[2:49](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/triaging-data-sources?u=76281980&t=169)** Be prepared to say no to a source that looks initially promising, but will take a whole lot of time or money for minimal gain.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (19), [[Security]] (1), [[Real-Time]] (1)
> **CLI Commands:** find (2), make (1)
> **Speakers:** - just (1)

#### Checking data quality
> [LinkedIn Learning](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/checking-data-quality?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/checking-data-quality?u=76281980&t=0)** - Imagine building a beautiful house, but on a foundation of sand.
>
> **[0:06](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/checking-data-quality?u=76281980&t=6)** That's the risk you take working with unchecked data.
>
> **[0:10](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/checking-data-quality?u=76281980&t=10)** Garbage in, garbage out is much more than a phrase, it's a truism.
>
> **[0:14](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/checking-data-quality?u=76281980&t=14)** Bad data can derail models, leading to laughably incorrect predictions and costly business mistakes.
>
> **[0:22](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/checking-data-quality?u=76281980&t=22)** So let's roll up our sleeves and get into some data quality detective work so you can set the right foundation for everything that follows.
>
> **[0:31](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/checking-data-quality?u=76281980&t=31)** To do that, let's build you a quality control toolkit.
>
> **[0:36](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/checking-data-quality?u=76281980&t=36)** Here are the key tools you'll need in your kit.
>
> **[0:40](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/checking-data-quality?u=76281980&t=40)** First, is the missing this count.
>
> **[0:43](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/checking-data-quality?u=76281980&t=43)** Empty cells are holes that can cause trouble in your model.
>
> **[0:47](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/checking-data-quality?u=76281980&t=47)** It's important to understand not only the percentage of missing values for each column, but also to test if there is a pattern then in the missingness.
>
> **[0:58](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/checking-data-quality?u=76281980&t=58)** Dig a little deeper.
>
> **[1:00](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/checking-data-quality?u=76281980&t=60)** You should inquire about why the data is missing.
>
> **[1:03](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/checking-data-quality?u=76281980&t=63)** High rates of missing data point to data collection problems or signal that correcting these missing data might not be worth the hassle.
>
> **[1:13](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/checking-data-quality?u=76281980&t=73)** Range check reality.
>
> **[1:16](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/checking-data-quality?u=76281980&t=76)** Does it make sense for someone's age to be 450 or a product price to be negative $10?
>
> **[1:23](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/checking-data-quality?u=76281980&t=83)** Simple min-max checks reveal errors that might slip into complex models causing poor performance.
>
> **[1:31](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/checking-data-quality?u=76281980&t=91)** Outlier review.
>
> **[1:34](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/checking-data-quality?u=76281980&t=94)** Data points far outside the norm can be genuine data points or mistakes.
>
> **[1:39](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/checking-data-quality?u=76281980&t=99)** Visualizations such as histograms and box plots help identify these issues and provide insights that will be useful later for modeling.
>
> **[1:49](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/checking-data-quality?u=76281980&t=109)** Sometimes outliers hold valuable insights.
>
> **[1:53](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/checking-data-quality?u=76281980&t=113)** Other times they distort analysis.
>
> **[1:56](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/checking-data-quality?u=76281980&t=116)** Best to discuss outliers with the business customer to understand if they are real data points or errors.
>
> **[2:05](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/checking-data-quality?u=76281980&t=125)** Timeliness matters.
>
> **[2:07](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/checking-data-quality?u=76281980&t=127)** When was the data last updated?
>
> **[2:09](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/checking-data-quality?u=76281980&t=129)** Stale data can lead to outdated insights and modeled interactions.
>
> **[2:14](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/checking-data-quality?u=76281980&t=134)** If your dealing with a rapidly changing situation, make sure your data source has a refresh rate to match your business needs.
>
> **[2:24](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/checking-data-quality?u=76281980&t=144)** Formatting issues.
>
> **[2:26](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/checking-data-quality?u=76281980&t=146)** Are dates stored consistently, text fields riddled with typos?
>
> **[2:31](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/checking-data-quality?u=76281980&t=151)** Inconsistent formatting is a headache waiting to happen during analysis.
>
> **[2:37](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/checking-data-quality?u=76281980&t=157)** Remember that we want to be applying the 80/20 rule.
>
> **[2:41](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/checking-data-quality?u=76281980&t=161)** That means we're going to want to prioritize.
>
> **[2:44](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/checking-data-quality?u=76281980&t=164)** Not all columns are equal.
>
> **[2:46](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/checking-data-quality?u=76281980&t=166)** Focus on the core features driving your model.
>
> **[2:51](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/checking-data-quality?u=76281980&t=171)** We'll want to sample smartly.
>
> **[2:53](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/checking-data-quality?u=76281980&t=173)** You don't need to hand inspect every row.
>
> **[2:56](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/checking-data-quality?u=76281980&t=176)** Use descriptive statistics and random sampling to understand the overall quality of the features.
>
> **[3:03](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/checking-data-quality?u=76281980&t=183)** And we're going to want to automate the basics.
>
> **[3:06](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/checking-data-quality?u=76281980&t=186)** Set up scripts for range checks, missingness reports, and outlier alerts.
>
> **[3:12](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/checking-data-quality?u=76281980&t=192)** These save time while keeping an eye on things.
>
> **[3:17](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/checking-data-quality?u=76281980&t=197)** For your own work, select one of your most important projects.
>
> **[3:21](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/checking-data-quality?u=76281980&t=201)** With fresh eyes, review exactly what data quality checks you have put in place.
>
> **[3:27](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/checking-data-quality?u=76281980&t=207)** Confirm that you've examined the percent missing, that the ranges are valid, and the formatting is consistent.
>
> **[3:36](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/checking-data-quality?u=76281980&t=216)** If anything is amiss, then you should ask yourself, how is this impacting downstream workflow?
>
> **[3:42](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/checking-data-quality?u=76281980&t=222)** And what other data projects of yours have similar issues?
>
> **[3:47](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/checking-data-quality?u=76281980&t=227)** The real world is messy and your data may be a little messy too.
>
> **[3:54](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/checking-data-quality?u=76281980&t=234)** Don't get discouraged by imperfections.
>
> **[3:57](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/checking-data-quality?u=76281980&t=237)** The goal is to understand how bad the data is and whether you can clean it up by fixing errors, filling in reasonable missing values, using imputation, and correcting range issues, or work around it by removing problematic features or adjusting models accordingly, or look elsewhere.
>
> **[4:22](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/checking-data-quality?u=76281980&t=262)** If the data's beyond saving, time spending fixing it is worse than seeking a better source.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (18), business (3), product (1), [[Statistics]] (1)
> **CLI Commands:** make (2)
> **Definitions:** is a  (2)
> **Analogies:** imagine (1), such as (1)
> **Prerequisites:** you'll need (1), set up (1)
> **Speakers:** - imagine (1)

#### Dealing with missing data
> [LinkedIn Learning](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/dealing-with-missing-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/dealing-with-missing-data?u=76281980&t=0)** - Imagine building a beautiful map of the US road system, but sections of your data set are blank.
>
> **[0:09](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/dealing-with-missing-data?u=76281980&t=9)** You are missing some roads, and some states have almost no data.
>
> **[0:14](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/dealing-with-missing-data?u=76281980&t=14)** Other states are 100% complete.
>
> **[0:17](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/dealing-with-missing-data?u=76281980&t=17)** What can you do with this data set?
>
> **[0:20](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/dealing-with-missing-data?u=76281980&t=20)** Can it still be used to create reasonable driving routes?
>
> **[0:24](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/dealing-with-missing-data?u=76281980&t=24)** The answer is you could get some value out of the map, depending on where you're going to use it.
>
> **[0:31](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/dealing-with-missing-data?u=76281980&t=31)** That's the frustration of missing data.
>
> **[0:33](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/dealing-with-missing-data?u=76281980&t=33)** It can still be useful in many cases, but you need to work with it carefully.
>
> **[0:38](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/dealing-with-missing-data?u=76281980&t=38)** It's a widespread issue, but there are smart ways to handle it.
>
> **[0:44](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/dealing-with-missing-data?u=76281980&t=44)** The first step is to assess the impact of the missingness.
>
> **[0:48](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/dealing-with-missing-data?u=76281980&t=48)** How much is missing?
>
> **[0:51](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/dealing-with-missing-data?u=76281980&t=51)** A few scattered missing values, such as 1% of the records, is very different from missing 1/3 or more of a feature.
>
> **[1:01](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/dealing-with-missing-data?u=76281980&t=61)** While there are no absolute rules for an acceptable level of missingness, I get uncomfortable when I'm imputing more than a few percent of the data.
>
> **[1:11](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/dealing-with-missing-data?u=76281980&t=71)** Identifying what percent is missing is very straightforward, and you can quickly see where you're in trouble.
>
> **[1:19](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/dealing-with-missing-data?u=76281980&t=79)** Is there a pattern of absence?
>
> **[1:22](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/dealing-with-missing-data?u=76281980&t=82)** Are values missing completely at random?
>
> **[1:25](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/dealing-with-missing-data?u=76281980&t=85)** Is there a relationship between missingness and other variables?
>
> **[1:30](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/dealing-with-missing-data?u=76281980&t=90)** Understanding the why behind missing data helps you choose the right fix.
>
> **[1:37](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/dealing-with-missing-data?u=76281980&t=97)** You also need to consider the implications on algorithms.
>
> **[1:42](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/dealing-with-missing-data?u=76281980&t=102)** There are some tolerant algorithms, like decision trees or certain ensemble models that can handle missing data without major modeling interruptions.
>
> **[1:52](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/dealing-with-missing-data?u=76281980&t=112)** Other algorithms, such as linear aggression, have to drop observations when a feature is missing.
>
> **[2:00](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/dealing-with-missing-data?u=76281980&t=120)** I recommend you spend some time exploring imputation, which are methods for filling in the missing values.
>
> **[2:07](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/dealing-with-missing-data?u=76281980&t=127)** Here are some basic but powerful methods.
>
> **[2:11](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/dealing-with-missing-data?u=76281980&t=131)** Mean or median imputation.
>
> **[2:14](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/dealing-with-missing-data?u=76281980&t=134)** By replacing the missing values with the average or middle value of that feature, you get a very quick but dirty method.
>
> **[2:22](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/dealing-with-missing-data?u=76281980&t=142)** It fills in missing values, but it ignores important information about how the features relate.
>
> **[2:30](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/dealing-with-missing-data?u=76281980&t=150)** Similarly, mode imputation for categorical features is a quick and crude way to fill in gaps using the most frequent category observed.
>
> **[2:42](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/dealing-with-missing-data?u=76281980&t=162)** I prefer predictive imputation methods.
>
> **[2:45](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/dealing-with-missing-data?u=76281980&t=165)** Here we build a model to estimate the value of the missing data points using the other data points.
>
> **[2:52](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/dealing-with-missing-data?u=76281980&t=172)** It's more work, but you might want to use them if the simpler methods of mean, median, or mode imputation are too crude.
>
> **[3:04](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/dealing-with-missing-data?u=76281980&t=184)** The 80/20 approach to dealing with missing data involves making sure that you don't panic, but take a systematic approach, starting with basic diagnostics, simple imputations, then moving on to more advanced.
>
> **[3:20](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/dealing-with-missing-data?u=76281980&t=200)** Always remember that sometimes the smartest move is to drop a feature that is missing too many records rather than try to impute.
>
> **[3:30](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/dealing-with-missing-data?u=76281980&t=210)** If you want to learn more about imputation, there are some excellent references.
>
> **[3:35](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/dealing-with-missing-data?u=76281980&t=215)** Links to some of these references are provided in the accompanying text.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (10), feature (4), [[Algorithms]] (3), [[Decision Trees]] (1)
> **Analogies:** such as (2), imagine (1)
> **Definitions:** is a  (1)
> **Speakers:** - imagine (1)

#### Finding strong features
> [LinkedIn Learning](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/finding-strong-features?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/finding-strong-features?u=76281980&t=0)** - Not all features are equally useful.
>
> **[0:04](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/finding-strong-features?u=76281980&t=4)** Finding features that are strong predictors is absolutely critical to building good models.
>
> **[0:10](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/finding-strong-features?u=76281980&t=10)** Without strong features, advanced models will still struggle.
>
> **[0:15](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/finding-strong-features?u=76281980&t=15)** Let's review some of the main methods used to identify strong features.
>
> **[0:21](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/finding-strong-features?u=76281980&t=21)** Filter-based methods are useful because they're very fast.
>
> **[0:26](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/finding-strong-features?u=76281980&t=26)** If you had tens of thousands of potential features, you might employ these speedy methods where you simply test the relationship between the target and the feature one-on-one.
>
> **[0:39](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/finding-strong-features?u=76281980&t=39)** Filtering techniques include correlation analysis, chi-square tests and other univariate tests.
>
> **[0:46](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/finding-strong-features?u=76281980&t=46)** They only test, though, one-on-one relationship between the outcome and the feature, so you risk dropping features that have more complex relationships.
>
> **[0:58](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/finding-strong-features?u=76281980&t=58)** Feature selection wrappers are a traditional algorithmic approach where you explore changing the number of features one after another.
>
> **[1:09](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/finding-strong-features?u=76281980&t=69)** Methods include forward selection, where you start with one feature and then add others, and backwards selection where you start with all features and then remove the weakest ones.
>
> **[1:22](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/finding-strong-features?u=76281980&t=82)** It gives quick results that are often strong, though, perhaps not the most optimal ones.
>
> **[1:29](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/finding-strong-features?u=76281980&t=89)** The best solutions to feature selection are embedded methods.
>
> **[1:33](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/finding-strong-features?u=76281980&t=93)** Some models have a method of feature selection built in as part of the model-building algorithm itself.
>
> **[1:40](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/finding-strong-features?u=76281980&t=100)** Think of tree-based methods like cart, random forest, and gradient-boosted machine learning where features that are not part of the decision are not selected.
>
> **[1:51](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/finding-strong-features?u=76281980&t=111)** The feature importance of zero is a clear sign that the feature should be dropped.
>
> **[1:57](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/finding-strong-features?u=76281980&t=117)** Where the beauty of these methods is that you get model development and feature selection at the same time.
>
> **[2:05](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/finding-strong-features?u=76281980&t=125)** Feature importance scores are helpful, but don't stop there.
>
> **[2:10](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/finding-strong-features?u=76281980&t=130)** It is useful to really understand the role of the feature by developing feature importance plots, which show how much each feature contributed to the model's predictions as well as partial dependence plots that show how a feature influences the outcome, going beyond just correlation.
>
> **[2:29](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/finding-strong-features?u=76281980&t=149)** Here is where domain knowledge helps.
>
> **[2:32](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/finding-strong-features?u=76281980&t=152)** Is the direction of the partial dependence plot in line with expectations?
>
> **[2:37](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/finding-strong-features?u=76281980&t=157)** Looking back on one of your recent projects, what methods did you use for feature selection?
>
> **[2:43](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/finding-strong-features?u=76281980&t=163)** Did you apply filtering or an embedded method?
>
> **[2:48](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/finding-strong-features?u=76281980&t=168)** In summary, the 80-20 approach to feature selection is to start simple, then experiment.
>
> **[2:56](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/finding-strong-features?u=76281980&t=176)** Filtering methods are an excellent, the rough first pass.
>
> **[3:01](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/finding-strong-features?u=76281980&t=181)** While they may drop some features that have interaction term effects, overall, they are a good guide.
>
> **[3:08](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/finding-strong-features?u=76281980&t=188)** Embedded methods are a nice way to get your model and feature selection done at the same time and are often a better bet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** feature (17)
> **Definitions:** is a  (1)
> **Speakers:** - not (1)


### 3. Simple Models First

[↑ Back to Table of Contents](#table-of-contents)

#### Feature transformations
> [LinkedIn Learning](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/feature-transformations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/feature-transformations?u=76281980&t=0)** - Feature transformations are one of the best examples of applying the 80-20 rule of data science.
>
> **[0:07](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/feature-transformations?u=76281980&t=7)** They can result in boosting performance with minimal effort since you don't need to gather new data sources or clean data sets.
>
> **[0:15](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/feature-transformations?u=76281980&t=15)** The features are already prepared and just need some creativity to be combined.
>
> **[0:22](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/feature-transformations?u=76281980&t=22)** There are many reasons to transform features.
>
> **[0:25](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/feature-transformations?u=76281980&t=25)** The most basic reason is better performance due to representing the underlying relationships more accurately.
>
> **[0:32](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/feature-transformations?u=76281980&t=32)** Sometimes scaling a feature by a log transformation or squaring can substantially improve the model performance by increasing the amount of variance the model explains.
>
> **[0:43](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/feature-transformations?u=76281980&t=43)** Simply put, it gets the job done better.
>
> **[0:47](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/feature-transformations?u=76281980&t=47)** In other cases, the algorithm assumptions work best for certain types of data.
>
> **[0:52](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/feature-transformations?u=76281980&t=52)** Think of linear regression, which can give good results in many situations, but works best with normally distributed data.
>
> **[1:00](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/feature-transformations?u=76281980&t=60)** A feature transformation can improve the model performance substantially in this case.
>
> **[1:06](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/feature-transformations?u=76281980&t=66)** There are many transformations that can be readily explored.
>
> **[1:10](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/feature-transformations?u=76281980&t=70)** A few that I like to use include log and square root transformations.
>
> **[1:15](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/feature-transformations?u=76281980&t=75)** They can compress values with a wide range, helping tame outliers and is quite useful for features like income or product sales.
>
> **[1:26](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/feature-transformations?u=76281980&t=86)** Scaling, such as standardization and normalization, rescales features to have similar ranges.
>
> **[1:34](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/feature-transformations?u=76281980&t=94)** This helps when features are measured on vastly different units.
>
> **[1:39](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/feature-transformations?u=76281980&t=99)** Adding in polynomial terms, adding squared and cubic terms is often a great way to represent complex non-linear relationships with minimal effort.
>
> **[1:52](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/feature-transformations?u=76281980&t=112)** Try this on your own model.
>
> **[1:54](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/feature-transformations?u=76281980&t=114)** The 80-20 approach for feature transformations involves, first, visualizing using histograms and scatterplots to see if a feature is a good candidate for transformations.
>
> **[2:05](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/feature-transformations?u=76281980&t=125)** Do you have good candidates identified?
>
> **[2:08](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/feature-transformations?u=76281980&t=128)** Embrace experimentation with feature transformations.
>
> **[2:12](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/feature-transformations?u=76281980&t=132)** Experiment with some of the common transformations to see if the model is improving.
>
> **[2:18](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/feature-transformations?u=76281980&t=138)** Do you see better model performance?
>
> **[2:21](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/feature-transformations?u=76281980&t=141)** Remember, feature transformations are not magic bullets, but they're very quick, often powerful, and sometimes underused tools in your data science arsenal.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** feature (7), data (6), [[Linear Regression]] (1), product (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - feature (1)

#### Transforming continuous features
> [LinkedIn Learning](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/transforming-continuous-features?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/transforming-continuous-features?u=76281980&t=0)** - Imagine you're analyzing the relationship between rainfall and crop yield.
>
> **[0:05](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/transforming-continuous-features?u=76281980&t=5)** It's not a simple, more rain is always better situation.
>
> **[0:09](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/transforming-continuous-features?u=76281980&t=9)** Plants can drown too.
>
> **[0:11](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/transforming-continuous-features?u=76281980&t=11)** This is where transforming continuous features like rainfall becomes essential.
>
> **[0:17](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/transforming-continuous-features?u=76281980&t=17)** Continuous features look simple, but often hide complex nonlinear patterns.
>
> **[0:24](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/transforming-continuous-features?u=76281980&t=24)** Transformations unlock these patterns and can boost even simple models.
>
> **[0:29](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/transforming-continuous-features?u=76281980&t=29)** We already discussed some simple transformations like log, square root, scaling, and adding polynomial terms.
>
> **[0:37](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/transforming-continuous-features?u=76281980&t=37)** Another simple transformation is binning.
>
> **[0:41](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/transforming-continuous-features?u=76281980&t=41)** Binning means slicing a continuous feature into ranges.
>
> **[0:46](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/transforming-continuous-features?u=76281980&t=46)** Think of it like grouping different rainfall amounts, one to 10 millimeters drought, 10 to 30 millimeters ideal growth, more than 30 millimeters oversaturation.
>
> **[0:58](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/transforming-continuous-features?u=76281980&t=58)** Now within a model like linear regression, we're not limited to a single regression coefficient to represent the impact.
>
> **[1:07](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/transforming-continuous-features?u=76281980&t=67)** Each bin can have its own impact on crop yield revealing those non-linear effects.
>
> **[1:14](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/transforming-continuous-features?u=76281980&t=74)** Of course, more complicated algorithms can allow for non-linear interactions without the need for transformations.
>
> **[1:22](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/transforming-continuous-features?u=76281980&t=82)** Another very useful transformation is turning multiple features into something more insightful.
>
> **[1:28](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/transforming-continuous-features?u=76281980&t=88)** Ratios, such as the price per square foot, and products of two features can often provide substantial value.
>
> **[1:38](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/transforming-continuous-features?u=76281980&t=98)** The 80/20 approach to transformations is about doing the simple first, and then seeing what helps.
>
> **[1:45](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/transforming-continuous-features?u=76281980&t=105)** Visualize the data using histograms and scatterplots to reveal if a feature might benefit from transformation, as well as test some of the other transformations like binning and ratios.
>
> **[1:58](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/transforming-continuous-features?u=76281980&t=118)** For ratios, I find it useful to learn what ratios have been used in previous modeling, or which resonate with the clients.
>
> **[2:07](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/transforming-continuous-features?u=76281980&t=127)** Items that are readily interpretable can help later in communicating the results to the client.
>
> **[2:13](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/transforming-continuous-features?u=76281980&t=133)** The goal is not to do a brute force approach of all possible transformations of all variables, but rather define the features and transformations that are most likely to succeed.
>
> **[2:26](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/transforming-continuous-features?u=76281980&t=146)** Tracking performance is critical.
>
> **[2:28](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/transforming-continuous-features?u=76281980&t=148)** Always evaluate if a transformation improves your model's performance and interpretability.
>
> **[2:35](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/transforming-continuous-features?u=76281980&t=155)** Remember, feature transformations are like a toolkit.
>
> **[2:40](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/transforming-continuous-features?u=76281980&t=160)** Knowing when to use which tool empowers you to uncover insights that would otherwise stay hidden.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** feature (3), [[Linear Regression]] (1), [[Algorithms]] (1), [[Microsoft Products|Products]] (1), data (1)
> **Analogies:** imagine (1), think of it like (1), such as (1)
> **CLI Commands:** find (1)
> **Speakers:** - imagine (1)

#### Interaction terms
> [LinkedIn Learning](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/interaction-terms?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/interaction-terms?u=76281980&t=0)** - Imagine you're baking a cake.
>
> **[0:03](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/interaction-terms?u=76281980&t=3)** Flour and sugar are important, but it's their interaction that creates the delicious result.
>
> **[0:09](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/interaction-terms?u=76281980&t=9)** Similarly, features in a data science model can interact to create effects you can't see in isolation.
>
> **[0:17](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/interaction-terms?u=76281980&t=17)** That's where interaction terms come in.
>
> **[0:20](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/interaction-terms?u=76281980&t=20)** What are interaction terms?
>
> **[0:22](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/interaction-terms?u=76281980&t=22)** Essentially, you create a new feature by combining existing ones.
>
> **[0:28](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/interaction-terms?u=76281980&t=28)** Here are a few ways to do this.
>
> **[0:30](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/interaction-terms?u=76281980&t=30)** Multiplication.
>
> **[0:32](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/interaction-terms?u=76281980&t=32)** This is the most common type.
>
> **[0:34](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/interaction-terms?u=76281980&t=34)** Let's say you're predicting house prices with square footage and number of bedrooms.
>
> **[0:40](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/interaction-terms?u=76281980&t=40)** You could add an interaction term, such as a product of square footage times number of bedrooms.
>
> **[0:47](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/interaction-terms?u=76281980&t=47)** This new feature captures the idea that the impact of an extra bedroom might be different depending on the size of the house.
>
> **[0:56](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/interaction-terms?u=76281980&t=56)** For example, maybe adding another bedroom to a small house has much more impact than adding one to a house that is very large.
>
> **[1:06](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/interaction-terms?u=76281980&t=66)** You could also examine division by creating ratios.
>
> **[1:10](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/interaction-terms?u=76281980&t=70)** Price per square foot is a potentially more meaningful feature than either price or square footage alone.
>
> **[1:19](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/interaction-terms?u=76281980&t=79)** Also, you can go beyond basic arithmetic and get creative.
>
> **[1:23](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/interaction-terms?u=76281980&t=83)** Calculate the average of multiple features, take the difference between them, or use more complex functions.
>
> **[1:31](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/interaction-terms?u=76281980&t=91)** You may be wondering, "Why should we create interaction terms?"
>
> **[1:35](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/interaction-terms?u=76281980&t=95)** The first reason is that it can improve accuracy.
>
> **[1:40](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/interaction-terms?u=76281980&t=100)** If important interactions exist, a model with interaction terms will often outperform those without.
>
> **[1:47](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/interaction-terms?u=76281980&t=107)** Also interaction terms let your model learn patterns beyond this feature increases the outcome.
>
> **[1:55](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/interaction-terms?u=76281980&t=115)** They uncover how features influence each other.
>
> **[2:00](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/interaction-terms?u=76281980&t=120)** Additionally, they help you tackle non-linearities.
>
> **[2:04](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/interaction-terms?u=76281980&t=124)** The real world is rarely perfectly linear.
>
> **[2:08](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/interaction-terms?u=76281980&t=128)** Interaction terms introduce flexibility to capture curves and bends in the relationship between features and your target variable.
>
> **[2:18](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/interaction-terms?u=76281980&t=138)** In applying the 80/20 approach, domain knowledge is key.
>
> **[2:24](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/interaction-terms?u=76281980&t=144)** Pick one of your projects and work with subject matter experts to identify which features make sense to interact.
>
> **[2:32](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/interaction-terms?u=76281980&t=152)** Don't just multiply blindly.
>
> **[2:35](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/interaction-terms?u=76281980&t=155)** First, start simple by focusing on pairwise, two-feature interactions.
>
> **[2:41](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/interaction-terms?u=76281980&t=161)** More complex combinations can get computationally heavy and may not provide much yield.
>
> **[2:48](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/interaction-terms?u=76281980&t=168)** Remember to be aware of overfitting.
>
> **[2:51](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/interaction-terms?u=76281980&t=171)** Too many interaction terms can lead to models that fit your trading data superbly, but fail in the real world.
>
> **[3:00](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/interaction-terms?u=76281980&t=180)** Did your model improve with the introduction of interaction terms?
>
> **[3:04](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/interaction-terms?u=76281980&t=184)** Did you generate new insights?
>
> **[3:07](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/interaction-terms?u=76281980&t=187)** Interaction terms are a way to supercharge your models.
>
> **[3:11](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/interaction-terms?u=76281980&t=191)** By letting features work together, you can unlock insights and improve results.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** feature (5), data (2), product (1)
> **Analogies:** imagine (1), such as (1), for example (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Best Practices:** remember to (1)
> **Warnings:** be aware (1)
> **Speakers:** - imagine (1)

#### Adding data sources
> [LinkedIn Learning](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/adding-data-sources?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/adding-data-sources?u=76281980&t=0)** - Let's start this video with a key takeaway.
>
> **[0:04](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/adding-data-sources?u=76281980&t=4)** Throwing fancy algorithms at limited data gets you only so far.
>
> **[0:09](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/adding-data-sources?u=76281980&t=9)** Unleashing your model's potential often means finding the right data sources and features to feed it.
>
> **[0:17](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/adding-data-sources?u=76281980&t=17)** Imagine you're building a self-driving car.
>
> **[0:20](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/adding-data-sources?u=76281980&t=20)** Top-notch computer vision algorithms are crucial, but without a map and sensor data, your car goes nowhere.
>
> **[0:29](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/adding-data-sources?u=76281980&t=29)** The same applies to data science projects.
>
> **[0:32](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/adding-data-sources?u=76281980&t=32)** New data unlocks new insights.
>
> **[0:36](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/adding-data-sources?u=76281980&t=36)** Before you dive into doing a lot of advanced modeling, ask yourself these critical questions.
>
> **[0:43](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/adding-data-sources?u=76281980&t=43)** What information is definitely missing?
>
> **[0:47](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/adding-data-sources?u=76281980&t=47)** What problem are you trying to solve, and what data points would ideally help answer these questions?
>
> **[0:54](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/adding-data-sources?u=76281980&t=54)** Doing research as well as brainstorming with subject matter experts about what features might be strong predictors is important.
>
> **[1:03](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/adding-data-sources?u=76281980&t=63)** Have you included most of these strong features in the model already?
>
> **[1:07](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/adding-data-sources?u=76281980&t=67)** Do you have major gaps?
>
> **[1:10](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/adding-data-sources?u=76281980&t=70)** Once you've established what your gaps are, it's time to find those data sources.
>
> **[1:17](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/adding-data-sources?u=76281980&t=77)** Some common sources include internal sources.
>
> **[1:20](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/adding-data-sources?u=76281980&t=80)** Does your company collect data you haven't thought of?
>
> **[1:23](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/adding-data-sources?u=76281980&t=83)** This could include customer interactions, website logs, transaction, and application data.
>
> **[1:31](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/adding-data-sources?u=76281980&t=91)** Public data is another useful source.
>
> **[1:34](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/adding-data-sources?u=76281980&t=94)** Government websites, academic repositories, and open data sites often hold treasures, available often without access charges.
>
> **[1:45](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/adding-data-sources?u=76281980&t=105)** Commercial providers that specialize in data on demographics, markets, or industry trends can be a game changer if the cost is worth it, but beware of the long-term costs of being dependent on external data vendors.
>
> **[2:02](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/adding-data-sources?u=76281980&t=122)** And of course, web scraping can be a useful option, but be careful.
>
> **[2:06](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/adding-data-sources?u=76281980&t=126)** Extracting data from websites is tempting, but there are restrictions due to terms of service and ethical considerations.
>
> **[2:16](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/adding-data-sources?u=76281980&t=136)** Consider one of your current data projects.
>
> **[2:18](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/adding-data-sources?u=76281980&t=138)** Have you explored other possible data sources?
>
> **[2:22](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/adding-data-sources?u=76281980&t=142)** If you have found another data source, then think about these things.
>
> **[2:27](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/adding-data-sources?u=76281980&t=147)** Incremental value.
>
> **[2:28](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/adding-data-sources?u=76281980&t=148)** Does this data offer genuinely new information, or does it just duplicate what you have with a different spin?
>
> **[2:38](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/adding-data-sources?u=76281980&t=158)** Price.
>
> **[2:39](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/adding-data-sources?u=76281980&t=159)** Is it free, a one-time cost, or a recurring subscription?
>
> **[2:45](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/adding-data-sources?u=76281980&t=165)** Factor this against the potential gains.
>
> **[2:48](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/adding-data-sources?u=76281980&t=168)** Availability.
>
> **[2:50](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/adding-data-sources?u=76281980&t=170)** Can you access the data easily or is permission needed?
>
> **[2:56](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/adding-data-sources?u=76281980&t=176)** Update frequency.
>
> **[2:58](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/adding-data-sources?u=76281980&t=178)** Is this stale data that won't help you, or is it timely enough for your needs.
>
> **[3:05](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/adding-data-sources?u=76281980&t=185)** Quality.
>
> **[3:07](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/adding-data-sources?u=76281980&t=187)** Review the documentation on how the data was collected, it's cleanliness, and if it has known limitations to understand if it is acceptable for your problem.
>
> **[3:18](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/adding-data-sources?u=76281980&t=198)** In applying the 80-20 approach to adding data sources, it is important to start with good enough since sometimes free external data or readily available local data can massively boost your model before seeking expensive custom data sets.
>
> **[3:38](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/adding-data-sources?u=76281980&t=218)** I find it helpful to get some small data samples first to assess its relevance, quality, level of completeness, and update frequency before committing.
>
> **[3:50](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/adding-data-sources?u=76281980&t=230)** Lastly, don't be afraid to walk away.
>
> **[3:53](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/adding-data-sources?u=76281980&t=233)** Remember, adding data sources is an investment, one that will cost time and money.
>
> **[4:00](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/adding-data-sources?u=76281980&t=240)** If the cost, hassle, or questionable quality outweigh potential benefits, focus on features that you can actually use well.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (27), [[Algorithms]] (2), [[Computer Vision]] (1), application (1), game (1)
> **CLI Commands:** find (2)
> **Documentation:** the documentation (1)
> **Definitions:** is an  (1)
> **Analogies:** imagine (1)
> **Warnings:** be careful (1)
> **Speakers:** - let (1)

#### Linear regression
> [LinkedIn Learning](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/linear-regression?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/linear-regression?u=76281980&t=0)** - Least squares linear aggression has been around for over 200 years and is a terrific algorithm.
>
> **[0:08](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/linear-regression?u=76281980&t=8)** In fact, when the residuals are normal, it is the best linear algorithm.
>
> **[0:15](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/linear-regression?u=76281980&t=15)** More advanced algorithms are tempting and can often offer stronger predictive value, but don't underestimate the power of simplicity and explainability.
>
> **[0:27](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/linear-regression?u=76281980&t=27)** Linear regression is often the best place to start when predicting continuous outcomes, offering insight, simplicity of interpretation, and a solid baseline on which to improve.
>
> **[0:41](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/linear-regression?u=76281980&t=41)** At its heart, linear aggression is about finding the best fit line through a multidimensional scatterplot of your data.
>
> **[0:49](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/linear-regression?u=76281980&t=49)** Since your features can be transformed easily, you can capture many non-linear relationships with this simple modeling method.
>
> **[0:58](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/linear-regression?u=76281980&t=58)** Some of my favorite reasons for starting with linear regression are that it is computationally fast, easy to interpret, and readily understood by clients.
>
> **[1:09](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/linear-regression?u=76281980&t=69)** You can review the coefficients of the regression and ask yourself and your client if the direction of the coefficients makes sense.
>
> **[1:18](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/linear-regression?u=76281980&t=78)** The model creates a strong baseline for comparison.
>
> **[1:22](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/linear-regression?u=76281980&t=82)** Complex models may improve performance marginally, but at the cost of interpretation, time, and possibly money.
>
> **[1:31](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/linear-regression?u=76281980&t=91)** The 80-20 approach to modeling means that linear aggression is not just for beginners.
>
> **[1:37](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/linear-regression?u=76281980&t=97)** Rather, it tackles surprisingly complex problems even in experienced hands.
>
> **[1:45](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/linear-regression?u=76281980&t=105)** As always, visualize the data to see if linear relationships make sense, or if you should transform the data.
>
> **[1:53](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/linear-regression?u=76281980&t=113)** Examine the residuals in the model performance.
>
> **[1:56](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/linear-regression?u=76281980&t=116)** If the residuals are normally distributed, then linear regression is often particularly strong.
>
> **[2:02](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/linear-regression?u=76281980&t=122)** If you're seeing patterns in the residuals, then you probably should consider feature engineering, adding new features and data sources, or a more advanced model.
>
> **[2:13](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/linear-regression?u=76281980&t=133)** Similarly, if the model performance is insufficient to be useful, then you should explore new features and data sources, but also be open to moving to a more advanced model.
>
> **[2:25](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/linear-regression?u=76281980&t=145)** Even if linear aggression isn't your final model, the insights gleaned along the way are invaluable, and in some cases, maybe the good enough solution.
>
> **[2:38](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/linear-regression?u=76281980&t=158)** Time to review one of your recent projects.
>
> **[2:41](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/linear-regression?u=76281980&t=161)** Did you jump straight to an advanced machine learning model, or did you first explore regression?
>
> **[2:47](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/linear-regression?u=76281980&t=167)** If you did explore a linear regression model first, how much better was the advanced model in terms of performance?
>
> **[2:54](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/linear-regression?u=76281980&t=174)** Was the time and effort worth the incremental impact?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (5), [[Linear Regression]] (4), [[Algorithms]] (1), power (1), [[Feature Engineering]] (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - least (1)

#### Logistic regression
> [LinkedIn Learning](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/logistic-regression?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/logistic-regression?u=76281980&t=0)** - The logistic function, the basis of logistic regression is another old algorithm.
>
> **[0:07](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/logistic-regression?u=76281980&t=7)** Its history dates back more than 100 years, and it is still providing a great deal of power and insight today for problems with binary or classification outcomes.
>
> **[0:19](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/logistic-regression?u=76281980&t=19)** Binary outcomes, ones that take on a zero or one, either yes or no, are found throughout the business world.
>
> **[0:27](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/logistic-regression?u=76281980&t=27)** In banking, there is risk and fraud.
>
> **[0:30](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/logistic-regression?u=76281980&t=30)** In health, we predict mortality, and retail where we find binary outcomes like cross-sell and churn.
>
> **[0:39](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/logistic-regression?u=76281980&t=39)** Logistic regression can even be used when there are more than two outcomes or when the outcomes are ordered, like predicting if someone will finish high school, college, graduate school, or higher.
>
> **[0:52](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/logistic-regression?u=76281980&t=52)** Logistic regression is a great example of using the 80-20 rule of data science because it gives us a prediction of probability that is useful for decision-making and it is readily interpretable.
>
> **[1:05](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/logistic-regression?u=76281980&t=65)** The coefficients tell us how much a feature influences the probability and in what direction.
>
> **[1:11](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/logistic-regression?u=76281980&t=71)** By applying a threshold for the probability, we obtain a classification algorithm that is fast and simple.
>
> **[1:20](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/logistic-regression?u=76281980&t=80)** Select one of your own models of a binary or categorical variable.
>
> **[1:25](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/logistic-regression?u=76281980&t=85)** First try with the logistic regression model and explore the results as well as the direction of the coefficients.
>
> **[1:32](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/logistic-regression?u=76281980&t=92)** You can get this model in front of customers.
>
> **[1:36](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/logistic-regression?u=76281980&t=96)** After you've done this, explore some feature transformations.
>
> **[1:40](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/logistic-regression?u=76281980&t=100)** These transformations can be a powerful way to improve your logistic regression model.
>
> **[1:45](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/logistic-regression?u=76281980&t=105)** Once you have this model, then explore more advanced models to see how the incremental level of effort improves the model compared with logistic regression.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Logistic Regression]] (6), [[Probability]] (3), feature (2), power (1), business (1)
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Speakers:** - the (1)


### 4. Tracking Performance

[↑ Back to Table of Contents](#table-of-contents)

#### Choosing metrics
> [LinkedIn Learning](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/choosing-metrics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/choosing-metrics?u=76281980&t=0)** - Not all metrics are equally useful.
>
> **[0:04](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/choosing-metrics?u=76281980&t=4)** Imagine you're evaluating two fitness trackers.
>
> **[0:08](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/choosing-metrics?u=76281980&t=8)** One flawlessly counts your steps.
>
> **[0:11](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/choosing-metrics?u=76281980&t=11)** The other also tracks calories burned and heart rate, but costs twice the price, which is better?
>
> **[0:19](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/choosing-metrics?u=76281980&t=19)** It depends on your goal.
>
> **[0:21](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/choosing-metrics?u=76281980&t=21)** Data science metrics are very much the same.
>
> **[0:25](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/choosing-metrics?u=76281980&t=25)** Different metrics shine a light on different aspects of performance, and some are more appropriate than others for specific problems.
>
> **[0:35](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/choosing-metrics?u=76281980&t=35)** Some commonly used metrics include accuracy, precision, recall, F1 score, area under the curve, mean absolute error, and mean absolute percent error.
>
> **[0:48](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/choosing-metrics?u=76281980&t=48)** Here are a few simple suggestions for these metrics.
>
> **[0:53](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/choosing-metrics?u=76281980&t=53)** Accuracy is a simple metric.
>
> **[0:56](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/choosing-metrics?u=76281980&t=56)** For a binary outcome, like spam or not spam, it indicates what percentage of predictions did your model get right?
>
> **[1:05](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/choosing-metrics?u=76281980&t=65)** It works well for balanced data sets where the outcome is relatively common, but not well for rare events like fraud detection.
>
> **[1:16](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/choosing-metrics?u=76281980&t=76)** Precision is about minimizing false positives, while recall focuses on catching true positives.
>
> **[1:25](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/choosing-metrics?u=76281980&t=85)** The distinction is vital when mistakes have unequal costs.
>
> **[1:30](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/choosing-metrics?u=76281980&t=90)** A common situation since often, false positives have very different implications from false negatives.
>
> **[1:39](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/choosing-metrics?u=76281980&t=99)** F1 scores balance precision and recall.
>
> **[1:43](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/choosing-metrics?u=76281980&t=103)** They are helpful when you need your model to be both accurate and not miss important instances.
>
> **[1:51](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/choosing-metrics?u=76281980&t=111)** Area under the curve is especially useful for classification models.
>
> **[1:56](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/choosing-metrics?u=76281980&t=116)** It measures how well your model separates positive and negative classes regardless of a specific cutoff threshold.
>
> **[2:06](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/choosing-metrics?u=76281980&t=126)** For continuous outcomes, there are metrics, like the mean absolute error and the mean percent error.
>
> **[2:13](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/choosing-metrics?u=76281980&t=133)** There is a science and art to matching the right metric to the right problem.
>
> **[2:19](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/choosing-metrics?u=76281980&t=139)** After all, detecting rare diseases needs different metrics than predicting product sales.
>
> **[2:26](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/choosing-metrics?u=76281980&t=146)** Let's get back to that fraud example.
>
> **[2:29](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/choosing-metrics?u=76281980&t=149)** Here is where class imbalance matters.
>
> **[2:32](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/choosing-metrics?u=76281980&t=152)** Let's say fraud occurs in only 0.1% of the cases.
>
> **[2:38](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/choosing-metrics?u=76281980&t=158)** That means that a simple model that marks all cases as not fraud, will be extremely accurate, but useless.
>
> **[2:46](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/choosing-metrics?u=76281980&t=166)** We also need to consider the business context.
>
> **[2:50](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/choosing-metrics?u=76281980&t=170)** Does your model need to be easily explained?
>
> **[2:53](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/choosing-metrics?u=76281980&t=173)** Some metrics are easier to understand than others for non-technical stakeholders.
>
> **[3:00](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/choosing-metrics?u=76281980&t=180)** Go back to one of your main models.
>
> **[3:02](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/choosing-metrics?u=76281980&t=182)** The 80/20 rule of metrics means you should focus on one or two primary metrics.
>
> **[3:08](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/choosing-metrics?u=76281980&t=188)** Can you select one or two metrics for this model that directly align with your project goals?
>
> **[3:15](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/choosing-metrics?u=76281980&t=195)** Also, have you considered the trade-offs of that metric?
>
> **[3:19](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/choosing-metrics?u=76281980&t=199)** After all, chasing a model with outstanding metrics on one front might mean sacrificing performance in another area.
>
> **[3:29](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/choosing-metrics?u=76281980&t=209)** Communicate clearly with your business stakeholders about what your metrics mean and why you selected them.
>
> **[3:37](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/choosing-metrics?u=76281980&t=217)** If you take those steps, then you should end up with a good choice for metrics.
>
> **[3:43](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/choosing-metrics?u=76281980&t=223)** These will help you evaluate your model honestly.
>
> **[3:46](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/choosing-metrics?u=76281980&t=226)** Set the stage for continuous model improvement and make data-driven decisions with confidence.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (3), business (2), product (1)
> **Definitions:** is a  (2), means that (1)
> **CLI Commands:** make (1)
> **Versions:** 0.1 (1)
> **Cross-References:** go back to (1)
> **Analogies:** imagine (1)
> **Speakers:** - not (1)

#### Designing simple dashboards
> [LinkedIn Learning](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/designing-simple-dashboards?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/designing-simple-dashboards?u=76281980&t=0)** - Imagine you spent weeks meticulously crafting a model that predicts customer churn with impressive accuracy.
>
> **[0:09](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/designing-simple-dashboards?u=76281980&t=9)** But when you present a long spreadsheet of results, eyes glaze over.
>
> **[0:14](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/designing-simple-dashboards?u=76281980&t=14)** That's where dashboards step in.
>
> **[0:16](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/designing-simple-dashboards?u=76281980&t=16)** They bridge the gap between complex analysis and actionable takeaways.
>
> **[0:23](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/designing-simple-dashboards?u=76281980&t=23)** There are some basic principles for creating simple and effective dashboards.
>
> **[0:28](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/designing-simple-dashboards?u=76281980&t=28)** First, understand and target your audience.
>
> **[0:33](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/designing-simple-dashboards?u=76281980&t=33)** Executives need a high level summary, while analysts might need more granular insights.
>
> **[0:40](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/designing-simple-dashboards?u=76281980&t=40)** Second, focus on key metrics.
>
> **[0:44](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/designing-simple-dashboards?u=76281980&t=44)** What are the two or three most important numbers?
>
> **[0:48](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/designing-simple-dashboards?u=76281980&t=48)** Resist the urge to cram everything in.
>
> **[0:52](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/designing-simple-dashboards?u=76281980&t=52)** Third, use clear visualizations.
>
> **[0:56](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/designing-simple-dashboards?u=76281980&t=56)** Choose charts that match the data type and the message.
>
> **[1:01](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/designing-simple-dashboards?u=76281980&t=61)** Simple bar charts and line graphs are often more powerful than flashy, complex visuals.
>
> **[1:09](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/designing-simple-dashboards?u=76281980&t=69)** Fourth, highlight changes over time.
>
> **[1:13](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/designing-simple-dashboards?u=76281980&t=73)** Is model performance slipping?
>
> **[1:16](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/designing-simple-dashboards?u=76281980&t=76)** Are key features drifting?
>
> **[1:18](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/designing-simple-dashboards?u=76281980&t=78)** Your dashboard should track trends, not just snapshots.
>
> **[1:23](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/designing-simple-dashboards?u=76281980&t=83)** Lastly, context matters.
>
> **[1:27](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/designing-simple-dashboards?u=76281980&t=87)** Numbers alone mean little.
>
> **[1:29](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/designing-simple-dashboards?u=76281980&t=89)** Add some brief text annotations to explain significant changes or patterns.
>
> **[1:36](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/designing-simple-dashboards?u=76281980&t=96)** Take a look at one of your dashboards.
>
> **[1:39](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/designing-simple-dashboards?u=76281980&t=99)** Have you included the right information for your target audience?
>
> **[1:44](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/designing-simple-dashboards?u=76281980&t=104)** You should have model performance metrics.
>
> **[1:47](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/designing-simple-dashboards?u=76281980&t=107)** Does the chosen metric, such as accuracy or area under the curve, make sense?
>
> **[1:53](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/designing-simple-dashboards?u=76281980&t=113)** Are you tracking this over time for early deterioration warnings?
>
> **[1:59](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/designing-simple-dashboards?u=76281980&t=119)** Are you displaying feature importance?
>
> **[2:02](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/designing-simple-dashboards?u=76281980&t=122)** Do the most important features make sense in terms of the priority and direction?
>
> **[2:08](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/designing-simple-dashboards?u=76281980&t=128)** If the feature importance changes unexpectedly during a model refresh, that suggests there may be problems with your data or substantial data drift.
>
> **[2:21](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/designing-simple-dashboards?u=76281980&t=141)** Are you showing key distributions, such as mini histograms, of how important features are distributed and whether this distribution is shifting over time?
>
> **[2:32](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/designing-simple-dashboards?u=76281980&t=152)** Now that you've looked at your own dashboards, let's recall that 80/20 approach.
>
> **[2:38](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/designing-simple-dashboards?u=76281980&t=158)** First, start with a sketch of the dashboard, so you can prioritize the essentials.
>
> **[2:44](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/designing-simple-dashboards?u=76281980&t=164)** Get feedback early on by sharing with potential users.
>
> **[2:49](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/designing-simple-dashboards?u=76281980&t=169)** Do they understand the main message at a glance?
>
> **[2:52](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/designing-simple-dashboards?u=76281980&t=172)** Iterate, iterate, iterate.
>
> **[2:55](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/designing-simple-dashboards?u=76281980&t=175)** Dashboard should evolve with your model.
>
> **[2:58](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/designing-simple-dashboards?u=76281980&t=178)** Make regular based on what's most useful.
>
> **[3:03](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/designing-simple-dashboards?u=76281980&t=183)** Remember, a dashboard isn't just about pretty visuals.
>
> **[3:07](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/designing-simple-dashboards?u=76281980&t=187)** It's your tool to drive understanding, track progress, and trigger the right actions from your data science insights.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Dashboards]] (4), data (4), feature (2), [[Performance Metrics]] (1)
> **CLI Commands:** make (3)
> **Analogies:** such as (2), imagine (1)
> **Speakers:** - imagine (1)

#### Rapid prototyping
> [LinkedIn Learning](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/rapid-prototyping?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/rapid-prototyping?u=76281980&t=0)** - In data science, sometimes the fastest path to the best solution is by building lots of good enough models quickly.
>
> **[0:09](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/rapid-prototyping?u=76281980&t=9)** Embrace experimentation and iteration.
>
> **[0:13](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/rapid-prototyping?u=76281980&t=13)** What are the advantages of rapid prototyping?
>
> **[0:16](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/rapid-prototyping?u=76281980&t=16)** Well, it allows you to uncover hidden assumptions.
>
> **[0:19](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/rapid-prototyping?u=76281980&t=19)** Early simple models, even if imperfect, expose flawed assumptions about the data or problem.
>
> **[0:27](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/rapid-prototyping?u=76281980&t=27)** Rapid prototyping is not just about failing fast, it's about learning from those failures.
>
> **[0:34](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/rapid-prototyping?u=76281980&t=34)** The early prototypes provide some benchmarking so you can see the improvement in the models.
>
> **[0:40](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/rapid-prototyping?u=76281980&t=40)** Additionally, these early prototypes allow you to get feedback from stakeholders early on, ensuring your project stays aligned with real world needs.
>
> **[0:51](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/rapid-prototyping?u=76281980&t=51)** One of my favorite ways of developing rapid prototyping is using automated machine learning software, AutoML for short.
>
> **[1:00](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/rapid-prototyping?u=76281980&t=60)** AutoML tools streamline large parts of the model building process.
>
> **[1:06](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/rapid-prototyping?u=76281980&t=66)** It assists a little in the data cleaning process by identifying issues like missing values, format inconsistencies, and potential target leakage.
>
> **[1:17](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/rapid-prototyping?u=76281980&t=77)** It automatically tries different feature transformations and combinations so you don't have to manually explore them.
>
> **[1:25](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/rapid-prototyping?u=76281980&t=85)** It tests a large variety of algorithms to find ones that are suitable for your data and often does hyper-parameter tuning automatically.
>
> **[1:34](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/rapid-prototyping?u=76281980&t=94)** Have you tried AutoML software in your work?
>
> **[1:38](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/rapid-prototyping?u=76281980&t=98)** There are many options to choose from out there, including DataRobot, H2O, SageMaker, Google Cloud AutoML, and Azure AutoML.
>
> **[1:49](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/rapid-prototyping?u=76281980&t=109)** AutoML is not a magic bullet, but is certainly helpful in the rapid prototyping process.
>
> **[1:57](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/rapid-prototyping?u=76281980&t=117)** But please remember that rapid prototyping is about progress, not perfection.
>
> **[2:03](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/rapid-prototyping?u=76281980&t=123)** Embrace the power of building quickly, testing often, and iterating your way towards data science breakthroughs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (5), [[Prototyping]] (5), feature (1), [[Algorithms]] (1), [[Google Cloud Platform (GCP)|Google cloud]] (1)
> **CLI Commands:** find (1)
> **Env Vars:** h2o (1)
> **Speakers:** - in (1)

#### When to stop
> [LinkedIn Learning](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/when-to-stop?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/when-to-stop?u=76281980&t=0)** - Data science isn't about endless accuracy chasing.
>
> **[0:05](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/when-to-stop?u=76281980&t=5)** Understanding when a model is good enough for real world impact is essential for delivering value within time and budget constraints.
>
> **[0:15](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/when-to-stop?u=76281980&t=15)** You can always get more complex models, but it might offer diminishing returns.
>
> **[0:21](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/when-to-stop?u=76281980&t=21)** This is why feedback loops are a critical reality check for model development.
>
> **[0:27](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/when-to-stop?u=76281980&t=27)** In terms of deployment and monitoring, ask yourself if putting your model to use actually improved business outcomes.
>
> **[0:34](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/when-to-stop?u=76281980&t=34)** And if so, by how much?
>
> **[0:38](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/when-to-stop?u=76281980&t=38)** Does it make better decisions than the existing system or no system?
>
> **[0:44](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/when-to-stop?u=76281980&t=44)** We can also learn about the use of real world data versus training data.
>
> **[0:49](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/when-to-stop?u=76281980&t=49)** How did your model perform on messy live data compared to your tidy dataset?
>
> **[0:55](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/when-to-stop?u=76281980&t=55)** This is where hidden weaknesses often emerge.
>
> **[0:59](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/when-to-stop?u=76281980&t=59)** Stakeholder input is going to be crucial.
>
> **[1:02](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/when-to-stop?u=76281980&t=62)** You've established in advance what success means in terms of model performance, costs, time, and other factors.
>
> **[1:10](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/when-to-stop?u=76281980&t=70)** Now that the model's in place, is the improved accuracy meaningful to the people using the model's results?
>
> **[1:18](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/when-to-stop?u=76281980&t=78)** Sometimes better explainability matters more than a 1% gain.
>
> **[1:24](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/when-to-stop?u=76281980&t=84)** To avoid the trap of diminishing returns, you should ask yourself, how much improvement buys us what?
>
> **[1:31](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/when-to-stop?u=76281980&t=91)** Does an extra 2% accuracy justify doubling the development time?
>
> **[1:37](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/when-to-stop?u=76281980&t=97)** The implications on time and resources.
>
> **[1:41](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/when-to-stop?u=76281980&t=101)** Do we have the time and money to invest in improving the model further?
>
> **[1:45](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/when-to-stop?u=76281980&t=105)** And is this the best use of resources?
>
> **[1:49](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/when-to-stop?u=76281980&t=109)** From an opportunity cost perspective, are there other projects where your effort would have a greater return on investment?
>
> **[1:58](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/when-to-stop?u=76281980&t=118)** Visualizing the decision can help you decide when to pause.
>
> **[2:02](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/when-to-stop?u=76281980&t=122)** A simple plot of effort in terms of cost or time versus model performance can help you see where that curve starts to flatten and you're entering the diminishing return zone.
>
> **[2:15](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/when-to-stop?u=76281980&t=135)** Comparing performance to baseline tells you how much better is your fancy model really compared to a simple solution or existing process.
>
> **[2:25](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/when-to-stop?u=76281980&t=145)** You can apply the 80-20 approach to knowing when to pause for one of your models by first defining what is good enough early on.
>
> **[2:35](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/when-to-stop?u=76281980&t=155)** If you know what accuracy or performance threshold meets the business need, then that can guide you on when to stop.
>
> **[2:43](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/when-to-stop?u=76281980&t=163)** Next, iterate and deploy.
>
> **[2:46](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/when-to-stop?u=76281980&t=166)** Once you get a basic model working, gather feedback, then decide if refinement is worth it.
>
> **[2:53](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/when-to-stop?u=76281980&t=173)** Remember to embrace imperfection.
>
> **[2:56](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/when-to-stop?u=76281980&t=176)** After all, the real world is messy.
>
> **[2:59](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/when-to-stop?u=76281980&t=179)** Sometimes a slightly less accurate but understandable model is more valuable.
>
> **[3:06](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/when-to-stop?u=76281980&t=186)** In looking at your own models, do you have an idea of when to pause and focus on the bigger picture or other opportunities?
>
> **[3:14](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/when-to-stop?u=76281980&t=194)** If so, you'll maximize your impact and avoid wasting precious resources.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (4), business (2), next (1)
> **CLI Commands:** make (1)
> **Analogies:** picture (1)
> **Best Practices:** remember to (1)
> **Speakers:** - data (1)


### 5. Communicating the 80/20 of Data Science

[↑ Back to Table of Contents](#table-of-contents)

#### Focus on outcome, not technique
> [LinkedIn Learning](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/focus-on-outcome-not-technique?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/focus-on-outcome-not-technique?u=76281980&t=1)** - Clients care about solving problems and their return on investment, not the fancy algorithms you use.
>
> **[0:09](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/focus-on-outcome-not-technique?u=76281980&t=9)** Imagine you call a plumber with a leaky faucet.
>
> **[0:12](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/focus-on-outcome-not-technique?u=76281980&t=12)** You probably don't care too much about his opinion on the possible wrench sizes or details about the pipe fittings.
>
> **[0:19](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/focus-on-outcome-not-technique?u=76281980&t=19)** You just want the leak fixed.
>
> **[0:21](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/focus-on-outcome-not-technique?u=76281980&t=21)** Business clients feel the same way about data science.
>
> **[0:24](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/focus-on-outcome-not-technique?u=76281980&t=24)** They're looking for solutions, not a jargon-filled lecture.
>
> **[0:29](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/focus-on-outcome-not-technique?u=76281980&t=29)** Try this at work by creating a habit called, "So, what?"
>
> **[0:33](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/focus-on-outcome-not-technique?u=76281980&t=33)** In the "So, what?" habit, you constantly ask yourself how this is relevant to the business.
>
> **[0:40](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/focus-on-outcome-not-technique?u=76281980&t=40)** The "So, what?" habit means you need to speak the language of impact by translating technical terms into business value.
>
> **[0:49](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/focus-on-outcome-not-technique?u=76281980&t=49)** Instead of, "I used a gradient-boosted machine learning model," try, "This approach lets us predict customer churn with 15% greater accuracy, saving you an estimated $500,000 annually."
>
> **[1:04](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/focus-on-outcome-not-technique?u=76281980&t=64)** By discussing results, you are keeping the conversation relevant to the customer.
>
> **[1:10](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/focus-on-outcome-not-technique?u=76281980&t=70)** That's their "So, what?"
>
> **[1:13](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/focus-on-outcome-not-technique?u=76281980&t=73)** Look at one of your models.
>
> **[1:15](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/focus-on-outcome-not-technique?u=76281980&t=75)** Are the most powerful features well known by your client?
>
> **[1:19](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/focus-on-outcome-not-technique?u=76281980&t=79)** Can your client use that information to run the business better?
>
> **[1:24](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/focus-on-outcome-not-technique?u=76281980&t=84)** If you have a sales model, then the customer might want to know this information so they can fine-tune their outreach.
>
> **[1:32](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/focus-on-outcome-not-technique?u=76281980&t=92)** Embracing the 80/20 approach for strategic results means that data scientists explain to clients how the 80/20 rule benefits them by prioritizing impact, keeping a strategic focus, and maximizing return on investment.
>
> **[1:50](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/focus-on-outcome-not-technique?u=76281980&t=110)** By prioritizing impact, we can discuss how to focus on the most important 20% of the work, generating 80% of the results.
>
> **[1:59](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/focus-on-outcome-not-technique?u=76281980&t=119)** This means a faster time to gain value from your project.
>
> **[2:04](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/focus-on-outcome-not-technique?u=76281980&t=124)** The strategic focus means that the 80/20 approach keeps us agile.
>
> **[2:10](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/focus-on-outcome-not-technique?u=76281980&t=130)** We can quickly pivot if new information or priorities emerge.
>
> **[2:15](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/focus-on-outcome-not-technique?u=76281980&t=135)** Maximizing the project's bottom line impact and maximizing ROI means that by starting with what works well enough and iterating, we ensure your data science investment produces the biggest return.
>
> **[2:31](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/focus-on-outcome-not-technique?u=76281980&t=151)** The 80/20 mindset will impress your clients since it shows that you are outcome-driven, focused on practical solutions, see the big picture, and can manage complexity effectively.
>
> **[2:45](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/focus-on-outcome-not-technique?u=76281980&t=165)** More importantly, by emphasizing the business outcomes you deliver, you'll transform yourself from a technician into a trusted strategic partner.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** business (5), data (3), [[Algorithms]] (1), [[Agile Development|Agile]] (1)
> **Analogies:** imagine (1), picture (1)
> **Env Vars:** roi (1)
> **Definitions:** means that (1)
> **Speakers:** - clients (1)

#### Manage expectations and build trust
> [LinkedIn Learning](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/manage-expectations-and-build-trust?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/manage-expectations-and-build-trust?u=76281980&t=0)** - Clients and stakeholders aren't naive.
>
> **[0:03](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/manage-expectations-and-build-trust?u=76281980&t=3)** Setting realistic expectations builds far more trust than overpromising and under-delivering or the reverse of completely sandbagging a deadline and then producing results in what you claim is record time.
>
> **[0:20](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/manage-expectations-and-build-trust?u=76281980&t=20)** Trust is built with transparency, and transparency simply means being clear about key steps and timelines in your project, as well as explaining the risks and mitigation steps.
>
> **[0:34](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/manage-expectations-and-build-trust?u=76281980&t=34)** Remember, data can be unpredictable.
>
> **[0:38](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/manage-expectations-and-build-trust?u=76281980&t=38)** Even with careful planning, new data issues or unexpected patterns can require adjustments.
>
> **[0:45](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/manage-expectations-and-build-trust?u=76281980&t=45)** So don't promise a flawless process from day one.
>
> **[0:50](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/manage-expectations-and-build-trust?u=76281980&t=50)** So how do you build trust through transparency?
>
> **[0:55](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/manage-expectations-and-build-trust?u=76281980&t=55)** First, start by highlighting your early wins.
>
> **[0:58](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/manage-expectations-and-build-trust?u=76281980&t=58)** By delivering smaller, actionable insights, you can quickly show value and build confidence.
>
> **[1:05](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/manage-expectations-and-build-trust?u=76281980&t=65)** As you communicate these wins, share with the client the good enough concept.
>
> **[1:11](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/manage-expectations-and-build-trust?u=76281980&t=71)** This is where the 80-20 principle is your ally.
>
> **[1:15](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/manage-expectations-and-build-trust?u=76281980&t=75)** Explain that aiming for the most critical insights quickly is often better than endlessly chasing perfection.
>
> **[1:24](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/manage-expectations-and-build-trust?u=76281980&t=84)** Second, strive for continuous improvement, but don't guarantee a specific magic accuracy number, especially if you have no basis for that prediction.
>
> **[1:35](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/manage-expectations-and-build-trust?u=76281980&t=95)** Remember that model perfection is a myth, so you should educate your client on what is realistic.
>
> **[1:42](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/manage-expectations-and-build-trust?u=76281980&t=102)** Third, break down complex concepts into understandable terms.
>
> **[1:49](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/manage-expectations-and-build-trust?u=76281980&t=109)** Fourth, adapt as the client's priorities or the market changes.
>
> **[1:55](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/manage-expectations-and-build-trust?u=76281980&t=115)** Since business needs shift, you and your modeling need to be agile and prepared to adapt suit and remember to always think of your client as a partnership.
>
> **[2:07](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/manage-expectations-and-build-trust?u=76281980&t=127)** Emphasize that you're working with the client, not just for them.
>
> **[2:12](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/manage-expectations-and-build-trust?u=76281980&t=132)** Their input is key to success.
>
> **[2:15](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/manage-expectations-and-build-trust?u=76281980&t=135)** I've always found that trust takes time to build and can be lost very quickly.
>
> **[2:21](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/manage-expectations-and-build-trust?u=76281980&t=141)** Honesty, even about setbacks, fuels long-term relationships.
>
> **[2:27](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/manage-expectations-and-build-trust?u=76281980&t=147)** Ask yourself a question about your main project.
>
> **[2:30](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/manage-expectations-and-build-trust?u=76281980&t=150)** Are the expectations realistic?
>
> **[2:32](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/manage-expectations-and-build-trust?u=76281980&t=152)** And do you have a good collaboration with your business partners?
>
> **[2:37](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/manage-expectations-and-build-trust?u=76281980&t=157)** If not, what can you do to make it better?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (2), business (2), [[Agile Development|Agile]] (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Best Practices:** remember to (1)
> **Speakers:** - clients (1)

#### Emphasize collaboration
> [LinkedIn Learning](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/emphasize-collaboration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/emphasize-collaboration?u=76281980&t=0)** - Clients should never just hand you a problem or a data set and walk away.
>
> **[0:06](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/emphasize-collaboration?u=76281980&t=6)** They're bringing problems to be solved, and if you treat data science as a team sport, the results will be far better than working in isolation.
>
> **[0:16](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/emphasize-collaboration?u=76281980&t=16)** Close collaboration isn't a nice-to-have, it's essential.
>
> **[0:20](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/emphasize-collaboration?u=76281980&t=20)** A good way to start is by framing questions together, with the client, where the key word in that sentence was together.
>
> **[0:29](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/emphasize-collaboration?u=76281980&t=29)** You'll start that conversation by getting clear on the what.
>
> **[0:32](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/emphasize-collaboration?u=76281980&t=32)** What is the business problem the client is really trying to tackle?
>
> **[0:37](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/emphasize-collaboration?u=76281980&t=37)** Once you understand the problem, translate business speak and potentially vague goals, like boosting sales, into measurable data questions such as, can we identify customers likely to spend x amount repeatedly in the next year?
>
> **[0:54](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/emphasize-collaboration?u=76281980&t=54)** Now you need to prioritize relentlessly.
>
> **[0:57](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/emphasize-collaboration?u=76281980&t=57)** Not all questions are equally valuable or feasible with the available data.
>
> **[1:01](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/emphasize-collaboration?u=76281980&t=61)** Collaborate with your client on ranking.
>
> **[1:03](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/emphasize-collaboration?u=76281980&t=63)** What problems offer the most potential impact to the business?
>
> **[1:08](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/emphasize-collaboration?u=76281980&t=68)** Remember that communications is a key part of the toolkit.
>
> **[1:13](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/emphasize-collaboration?u=76281980&t=73)** A few ways to do this are by visualizing early and often.
>
> **[1:18](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/emphasize-collaboration?u=76281980&t=78)** Simple charts and graphs make findings accessible, even with raw early models, so get feedback immediately.
>
> **[1:27](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/emphasize-collaboration?u=76281980&t=87)** Providing regular progress updates, not just big reveals.
>
> **[1:32](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/emphasize-collaboration?u=76281980&t=92)** Share insights as they emerge, not as a grand presentation at the end.
>
> **[1:37](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/emphasize-collaboration?u=76281980&t=97)** This makes course correction easier if needed.
>
> **[1:41](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/emphasize-collaboration?u=76281980&t=101)** Lastly, be open by inviting feedback and questions.
>
> **[1:45](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/emphasize-collaboration?u=76281980&t=105)** Encourage clients to be active participants in the process.
>
> **[1:49](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/emphasize-collaboration?u=76281980&t=109)** This strengthens their understanding and trust in the results.
>
> **[1:54](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/emphasize-collaboration?u=76281980&t=114)** Try the 80/20 approach to collaboration in one of your projects.
>
> **[1:59](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/emphasize-collaboration?u=76281980&t=119)** Pick a new project and start with identifying shared goals, such as defining upfront what success looks like.
>
> **[2:06](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/emphasize-collaboration?u=76281980&t=126)** Next, identify what visualizations you can share with the client as early as possible in the project.
>
> **[2:14](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/emphasize-collaboration?u=76281980&t=134)** This will help the client see how their input is shaping the modeling and results.
>
> **[2:19](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/emphasize-collaboration?u=76281980&t=139)** Did you schedule regular meetings to review progress with the client as well as solicit feedback and questions?
>
> **[2:26](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/emphasize-collaboration?u=76281980&t=146)** If not, do that today.
>
> **[2:28](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/emphasize-collaboration?u=76281980&t=148)** Remember, you're not just a data cruncher.
>
> **[2:32](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/emphasize-collaboration?u=76281980&t=152)** You are a problem-solving partner.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (5), business (3), next (2), [[Microsoft Word|Word]] (1)
> **Analogies:** such as (2)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Speakers:** - clients (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### Key takeaways for your future career in data science
> [LinkedIn Learning](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/key-takeaways-for-your-future-career-in-data-science?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/key-takeaways-for-your-future-career-in-data-science?u=76281980&t=0)** - The 80/20 rule of data science is centered around one thing, keeping the business impact front and center.
>
> **[0:08](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/key-takeaways-for-your-future-career-in-data-science?u=76281980&t=8)** That means more than a fancy model.
>
> **[0:11](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/key-takeaways-for-your-future-career-in-data-science?u=76281980&t=11)** You need to go out and discover the business problems, pain points, and opportunities for improvement.
>
> **[0:18](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/key-takeaways-for-your-future-career-in-data-science?u=76281980&t=18)** Remember that the 80/20 rule of data science suggests that the vast majority of the value comes from a small part of the effort.
>
> **[0:27](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/key-takeaways-for-your-future-career-in-data-science?u=76281980&t=27)** In order to do efficient data science, the 80/20 approach is all about focusing on the applications and solving problems.
>
> **[0:36](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/key-takeaways-for-your-future-career-in-data-science?u=76281980&t=36)** It is about finding good, quick data sources, features, transformations, and models, all with the goal of fast and effective deployment.
>
> **[0:48](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/key-takeaways-for-your-future-career-in-data-science?u=76281980&t=48)** Data science is a journey of continuous learning and adaptation.
>
> **[0:52](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/key-takeaways-for-your-future-career-in-data-science?u=76281980&t=52)** Embrace the challenges, celebrate the wins, and let your curiosity be your guide as you unlock ever greater value for both yourself and your organization.
>
> **[1:05](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/key-takeaways-for-your-future-career-in-data-science?u=76281980&t=65)** If you enjoyed this course, please check out some of my other LinkedIn Learning courses, including Becoming a Good Data Science Customer and the Data Science Playbook for Private Equity and Venture Capital.
>
> **[1:18](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/key-takeaways-for-your-future-career-in-data-science?u=76281980&t=78)** Also, you can contact me on LinkedIn through my website, [winningwithdatascience.com](https://winningwithdatascience.com), and check out my latest book, "Winning with Data Science."
>
> **[1:28](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/key-takeaways-for-your-future-career-in-data-science?u=76281980&t=88)** Thank you for joining me on this learning adventure.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (8), business (2), [[LinkedIn]] (2)
> **URLs:** [winningwithdatascience.com](https://winningwithdatascience.com) (1)
> **Definitions:** is a  (1)
> **Speakers:** - the (1)


## Instructor

- [[Howard Friedman]]

## Path Context

### In [[Introduction to Fundamental Skills for Data Work- Data Strategy and Planning]]
← [[Using AI to Improve Ops for Your Data Organization]] | **6 of 10** | [[Data Science Team Lifecycle Management]] →

## Appears In

- [[Introduction to Fundamental Skills for Data Work- Data Strategy and Planning]]

---

[↑ Back to top](#)