---
type: course
cssclasses:
  - lle-course
slug: decision-intelligence-data-stories
url: "https://www.linkedin.com/learning/decision-intelligence-data-stories"
duration_minutes: 45
duration: 45m
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D4D0DAQFmj194938whQ/learning-public-crop_675_1200/B4DZaTdWEDGwAc-/0/1746230665733?e=2147483647&amp;v=beta&amp;t=asAyjfn4Dcg_rY1Vj33EGJ7ZC9E_wTPWGOQuPi-aLlk"
linkedin_topic: Data Science
learning_paths:
  - '[[Introduction to Fundamental Skills for Data Work- Data Strategy and Planning]]'
prev_courses:
  - '[[Data Literacy Exploring And Describing Data In An Ai World]]'
next_courses:
  - '[[Decision Intelligence]]'
path_nav: '[{"path":"Introduction to Fundamental Skills for Data Work- Data Strategy and Planning","position":2,"total":10,"prev":"Data Literacy Exploring And Describing Data In An Ai World","next":"Decision Intelligence"}]'
path_count: 1
tags:
  - course
  - topic/data-science
  - topic/database-management
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Decision%20Intelligence-%20Data%20Stories.md)

![Decision Intelligence: Data Stories](https://media.licdn.com/dms/image/v2/D4D0DAQFmj194938whQ/learning-public-crop_675_1200/B4DZaTdWEDGwAc-/0/1746230665733?e=2147483647&amp;v=beta&amp;t=asAyjfn4Dcg_rY1Vj33EGJ7ZC9E_wTPWGOQuPi-aLlk)

# Decision Intelligence: Data Stories

> In this course, instructor Franz Buscha explores the critical lessons behind some of the most famous data stories to equip learners with the non-technical skills needed to improve decision-making, data interpretation, and communication. Learn via engaging examples and real-world scenarios. Discover how to navigate challenges such as causality, ethical considerations, flawed models, and declining d

> [LinkedIn Learning](https://www.linkedin.com/learning/decision-intelligence-data-stories) | 45m
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Theory is good, but practice can be better](#theory-is-good-but-practice-can-be-better)
  - [What you should know](#what-you-should-know)
- [**1. Data Stories**](#1-data-stories) (8 videos)
  - [Why perfect predictions can backfire](#why-perfect-predictions-can-backfire)
  - [Why inaccurate modelling can cause harm](#why-inaccurate-modelling-can-cause-harm)
  - [Why causality needs careful thought](#why-causality-needs-careful-thought)
  - [Why experiments need ethical considerations](#why-experiments-need-ethical-considerations)
  - [How dashboards and visualizations can clarify or obscure](#how-dashboards-and-visualizations-can-clarify-or-obscure)
  - [Why early modeling success should not be taken for granted](#why-early-modeling-success-should-not-be-taken-for-granted)
  - [Why effective communication between stakeholders matters](#why-effective-communication-between-stakeholders-matters)
  - [Why survey quality shouldn't be taken for granted](#why-survey-quality-shouldnt-be-taken-for-granted)
- [**Conclusion**](#conclusion) (1 videos)
  - [Boost your data skills](#boost-your-data-skills)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Theory is good, but practice can be better](https://www.linkedin.com/learning/decision-intelligence-data-stories/theory-is-good-but-practice-can-be-better?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/decision-intelligence-data-stories/theory-is-good-but-practice-can-be-better?u=76281980&t=0)** - Data is everywhere, and it influences everything. It helps decide what [[Microsoft Products|products]] we purchase, what books we read, and what food we eat. Making decisions with data is crucial, and to make the right decisions, you need to think critically about the findings from the data. In this course, you'll learn from real world examples. You'll learn how real previous data decisions expose both the power and the pitfalls of using data to drive decisions. You'll learn essential strategies that will help you avoid decision mistakes, maintain your ethical standards, and communicate insights effectively. So, let's go ahead and dive in.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (1)
> **CLI Commands:** make (1)
> **Speakers:** - data (1)

#### [What you should know](https://www.linkedin.com/learning/decision-intelligence-data-stories/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/decision-intelligence-data-stories/what-you-should-know?u=76281980&t=0)** - This course is all about giving you the skills needed to successfully make the right decisions with data. So before we dive into the course, let's talk about what you should know to make the most out of this training. First, you'll need a basic grasp of [[Data Science]] concepts. Understanding what a data set is, knowing that data can come in different formats, and recognizing that statistical models are used to draw inferences are important basic prerequisites. If you're comfortable with the idea of collecting data, analyzing it, and interpreting results, then you're in good shape. Second, you need to have some familiarity with how data is used in everyday settings. For example, businesses track sales figures, governments monitor unemployment trends, or individuals make health decisions on their health data. Different contexts can change how you view that data. So having an understanding of the broader context can help you see why data-driven decisions matter. And that's it. You don't need to know advanced data science, PhD-level [[Statistics]], or be able to interpret complex results tables. Enjoy the lessons for what they are, and let them make you think. That's all you need.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Science]] (2), [[Statistics]] (1)
> **CLI Commands:** make (4)
> **Prerequisites:** you'll need (1), you need to have (1)
> **Analogies:** for example (1)
> **Speakers:** - this (1)


### 1. Data Stories

[↑ Back to Table of Contents](#table-of-contents)

#### [Why perfect predictions can backfire](https://www.linkedin.com/learning/decision-intelligence-data-stories/why-perfect-predictions-can-backfire?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/decision-intelligence-data-stories/why-perfect-predictions-can-backfire?u=76281980&t=0)** - When we think of [[Data Science]], we often imagine a quest for perfect predictions. Statistical models that are so accurate, they can tell you exactly what will happen next. But while accuracy can be a powerful asset, near perfect predictions don't always have positive outcomes. Sometimes perfect predictions can lead to ethical, social, and even personal consequences. So let's explore the story of Target and how its [[Predictive Analytics]] program got it into a lot of trouble. Target is a large retail chain in the United States. It sells a wide variety of food and general merchandise, and this includes clothes, household essentials, and baby items. Target's data analysts developed a sophisticated model to predict which of their customers might be pregnant. The goal was to send targeted coupons and advertisements to expecting parents right when they were most likely to need it. That helps Target sell more merchandise, but it can also help future parents focus on what they might need for their babies. So it sounds like a win-win. How they Target do this? By analyzing shopping behavior. Target has a baby shower registry from which they examined how shopping habits changed as a woman approached her due date. They found that women on the baby registry were buying larger quantities of unscented lotion around the beginning of their second trimester.
>
> **[1:33](https://www.linkedin.com/learning/decision-intelligence-data-stories/why-perfect-predictions-can-backfire?u=76281980&t=93)** They also noticed that in the first 20-weeks, pregnant women loaded up on supplements like calcium, magnesium, and zinc. All in all, Target identified 25 [[Microsoft Products|products]] associated with pregnancy. From this, Target could then estimate a due date to within a very small window and send coupons time to very specific stages of a woman's pregnancy. Their model became uncannily accurate at identifying customers who were pregnant. But here's where perfect predictions backfired. The story goes that a father discovered that his teenage daughter was pregnant after Target sent coupons for baby products to their house. This revealed private and sensitive information before she had told her parents. What began as a clever [[Marketing Strategy]] turned into a [[Privacy]] and public relations nightmare. Although Target never meant to intrude, the model success directly led to a deeply uncomfortable situation. It damaged trust and raised ethical questions. This incident highlights the unintended consequences that arise when data predictions become too accurate. The lesson here is that perfect predictions can have real-world consequences. It's important to understand what your predictions are used for and what kind of harm they might cause. Ethical and privacy concerns are also essential.
>
> **[3:08](https://www.linkedin.com/learning/decision-intelligence-data-stories/why-perfect-predictions-can-backfire?u=76281980&t=188)** Having the perfect statistical model without consideration of context and [[Ethics]] can result in real-world harm, legal issues, and loss of confidence in data science. When your model predicts human behavior, high accuracy isn't enough. You need to understand the human impact of your predictions, who is affected, and how. As data professionals, we must ask ourselves just because you can predict, should you? What Target did wasn't illegal. Predicting pregnancy isn't a crime, but the lesson here is that perfect predictions can have a real-world fallout. And in our drive for predictive precision, we can't forget the human beings behind the data. Only by balancing accuracy with ethical awareness, can you ensure that data-driven decisions truly benefit everybody.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Science]] (2), [[Microsoft Products|Products]] (2), [[Privacy]] (2), [[Predictive Analytics]] (1), [[Marketing Strategy]] (1)
> **Definitions:** is a  (1)
> **Analogies:** imagine (1)
> **Speakers:** - when (1)

#### [Why inaccurate modelling can cause harm](https://www.linkedin.com/learning/decision-intelligence-data-stories/why-innacurate-modelling-can-cause-harm?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/decision-intelligence-data-stories/why-innacurate-modelling-can-cause-harm?u=76281980&t=0)** - Data can drive huge decisions affecting millions of people worldwide, and that's why accurate modeling is so very important. When models are flawed, the results can ripple out across entire nations. So let's have a look at how one inaccurate analysis shaped economic policy across the entire world. The 2007 to 2008 global financial crisis was one of the most severe economic crises in modern history. Banks and financial institutions went bankrupt and many others were on the verge of collapse. Short-term effects included millions of jobs being lost, poverty levels increasing, and the stock market falling rapidly. Governments across the world reacted to this with huge bailouts, and this caused debt to GDP ratios to soar. This table here shows how every major economy in the world saw a sudden and significant increase in their debt-to-GDP levels. During this time of uncertainty, a highly influential academic paper emerged. It was published in 2010 in the American Economics Review, a very prestigious economics journal. The economists, Carmen Reinhardt and Kenneth Rogoff suggested that once a country's debt exceeded 90% of GDP growth slowed dramatically. Specifically, their paper claimed over the past two centuries,
>
> **[1:33](https://www.linkedin.com/learning/decision-intelligence-data-stories/why-innacurate-modelling-can-cause-harm?u=76281980&t=93)** debt in excess of 90% has typically been associated with a mean growth of 1.7% versus 3.7% when debt is low. Unfortunately, many countries saw that GDP-to-debt ratios explode beyond such numbers due to the financial crisis. So policy makers around the world seized on this finding to justify austerity measures, cutting government spending, reducing public services, and raising taxes. These policies weren't just academic exercises. They influenced real decisions. Governments across the world implemented harsh austerity programs. Millions of people were affected, and the logic was that some short-term pain would lead to growth in the near future, but there was a serious problem. The paper wasn't peer reviewed, and its data was initially unpublished. After a few years, researchers trying to replicate its results uncovered spreadsheet errors, missing data, and selective exclusions once corrected. The link between high debt and low growth was far weaker than originally claimed. Specifically, there were coding errors in the original spreadsheet that led to five countries being excluded from the analysis. There were data gaps for many countries. Three countries were excluded without any reason, and there was inappropriate waiting in the calculation of summary [[Statistics]]. Unfortunately, these weren't just minor academic hiccups.
>
> **[3:09](https://www.linkedin.com/learning/decision-intelligence-data-stories/why-innacurate-modelling-can-cause-harm?u=76281980&t=189)** By that time, many governments had already imposed harsh austerity programs, which affected jobs, social welfare, and [[Public Health]]. Protests erupted around the world as people questioned whether these sacrifices were truly necessary. This shows the real harm that inaccurate modeling can cause. Governments rely on data and data decisions to guide billion dollar programs. If the data is biased or miscalculated, policies can become misguided as well. In this case, a few simple areas led leaders worldwide towards austerity, potentially worsening economic hardship instead of alleviating it. The lesson learned from this example are as follows. Before you trust a model, no matter how prestigious its authors or publication, you must validate its methods and sources. Check for errors and consider alternative interpretations. Recognize the impact that a model has. Does it affect national policy, local areas, or teams within your company? Be aware that even small areas can create large ripple effects, and be transparent and use peer review. Good decision making demands that we approach data with humility, acknowledging that even widely accepted findings can be flawed. My advice is this. Ensure that you embrace rigorous scrutiny and open debate of [[Data Modeling]].
>
> **[4:44](https://www.linkedin.com/learning/decision-intelligence-data-stories/why-innacurate-modelling-can-cause-harm?u=76281980&t=284)** This will guard against the fallout from inaccurate modeling. And that is how you can ensure that data-driven decisions protect welfare and guide all of us towards better economies and societies.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Statistics]] (1), [[Public Health]] (1), [[Data Modeling]] (1)
> **Env Vars:** gdp (4)
> **Versions:** 1.7 (1), 3.7 (1)
> **Warnings:** be aware (1)
> **Speakers:** - data (1)

#### [Why causality needs careful thought](https://www.linkedin.com/learning/decision-intelligence-data-stories/why-causality-needs-careful-thought?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/decision-intelligence-data-stories/why-causality-needs-careful-thought?u=76281980&t=1)** - In data-driven decisions, it's tempting to jump from patterns to conclusions. But establishing why something happens, true causality, that takes more than spotting correlations. To see why, let's travel back to 1854 London, where Dr. [[John the Ripper|John]] Snow forever changed how we understand disease transmission. But at the same time, he perfectly demonstrated why careful thinking is required for cause and effect analysis. As cities grew in the 18th and 19th century, they transformed rapidly. By the 1800s, London was one of the largest cities in the world. With such a large population came new problems, and one of them was how waste was dealt with. In the early days, it wasn't, and diseases such as typhoid, scarlet fever, and cholera became common. By the mid-19th century, many people were dying due to cholera outbreaks. Of course, people had an idea that poor living conditions were to blame. That direct link between poor living conditions, disease, and mortality was established by the Chadwick Report of 1842. This report used careful [[Statistical Analysis]] to recommend that sanitation and cleaner living was needed. The rapid removal of human waste into the drainage systems of London was a key outcome of this report. But there was a problem.
>
> **[1:34](https://www.linkedin.com/learning/decision-intelligence-data-stories/why-causality-needs-careful-thought?u=76281980&t=94)** Chadwick had uncovered a statistical correlation that was assumed to be causation. Indeed, Chadwick was right. Poor living conditions do lead to health problems, but the exact mechanism was not well understood, and that made things worse. Most people back then believed that bad air caused disease. The belief was that diseases were caused by the presence in the air of something called miasma, a poisonous vapor. And this prompted officials to flush waste into the drains, which unknowingly also contaminated the drinking water. So the policy solution to Chadwick's report led to much greater flows of raw sewage right into London's drinking water, and as a result, even more people died. John Snow suspected something different. He thought that cholera might be waterborne. Instead of trusting popular theory, he went ahead and gathered data. He mapped cholera cases in Soho, London, and found that they clustered around the Broad Street pump, which was a water pump. Here's the original map of the area with cholera cases drawn as black bars. You can see that there's a clustering around a single water pump. But the critical move was not just spotting a pattern, but testing alternatives. If miasma was truly the cause, removing a water pump wouldn't matter,
>
> **[3:07](https://www.linkedin.com/learning/decision-intelligence-data-stories/why-causality-needs-careful-thought?u=76281980&t=187)** yet that's exactly what John Snow did. Local authorities removed the Broad Street pump handle, making it inoperable. Cholera cases declined dramatically. This targeted intervention confirmed John Snow's hypothesis. It shifted the understanding of disease transmission from bad smells causes cholera to contaminated water causes cholera. And the story illustrates why establishing causality and the mechanisms behind it are so important. In this case, many lives were saved. The lessons learned here are that you should always ask questions that probe beyond superficial connections. You should test interventions, if ethically and practically possible, to confirm causal links. And you should consider alternative explanations and confounding variables that might shape what you see in the data. Dr. John's work is a powerful reminder that true understanding comes from careful analysis, skepticism, and a willingness to dig deeper. By distinguishing correlation from causation, you can make decisions that genuinely address core concerns. But you always need to think carefully and logically to identify causation in data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[John the Ripper|John]] (5), [[Statistical Analysis]] (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Best Practices:** you should always (1)
> **Speakers:** - in (1)

#### [Why experiments need ethical considerations](https://www.linkedin.com/learning/decision-intelligence-data-stories/why-experiments-need-ethical-considerations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/decision-intelligence-data-stories/why-experiments-need-ethical-considerations?u=76281980&t=0)** - Randomized data experiments are often hailed as the gold standard for uncovering insights. By randomly assigning conditions, you can isolate causal effects with great precision. But when real people are involved, especially at massive scales, ethical considerations become crucial. So let's examine a case where a social media joint tested the power of emotional contagion and revealed the urgent need for ethical oversight. A few years ago, a large social media platform run an experiment on 700,000 users without their explicit consent. For one week, its newsfeed algorithm showed 1 in 2,500 people either more positive posts or more negative posts. The researchers wanted to know if they change the emotional tone to what people see, will their own posts then reflect that tone. And the results showed emotional contagion was a real thing. People who had their positive content reduced in their newsfeed were more likely to update their own status with negative words. But when negativity was reduced, the opposite pattern occurred. So what was the problem? On the one hand, this was a neat scientific question. Understanding how environment and exposure shapes emotions is a fascinating topic, but users hadn't agreed
>
> **[1:37](https://www.linkedin.com/learning/decision-intelligence-data-stories/why-experiments-need-ethical-considerations?u=76281980&t=97)** to have their emotional wellbeing tested. This wasn't a controlled laboratory environment. It was a platform that many users relied on to connect with their friends and family. And by subtly altering their emotional diet, the company had crossed a line that many people found very unsettling. The backlash came swiftly, not about science, but the [[Ethics]]. Newspapers, academics, ethicists, policy makers, and everyday users ask, "Where do we draw the line?" When does the pursuit of knowledge and improved [[User Experience (UX)|user experience]] infringe upon our personal autonomy and emotional safety? Public outrage was the result. People were upset. This case shows that data experiments aren't purely technical. They shape human experiences, they influence moods, and they affect trust. Without informed consent, manipulating users' emotional states can erode confidence in the platform and harm brand reputation. Many companies hold vast amounts of data on the customers. They all analyze and manipulate this data to some extent. In fact, algorithmic tweaking based on feedback loops is very common. But to use this data responsibly, consider these lessons. Consent and transparency. People should know when their data and experiences are part of an experiment. Seek informed consent. Potential harm assessment.
>
> **[3:10](https://www.linkedin.com/learning/decision-intelligence-data-stories/why-experiments-need-ethical-considerations?u=76281980&t=190)** You should evaluate the psychological or social risks of the experiment. Even subtle changes can influence emotions, decisions, or wellbeing. Think about long-term trust. Ethical lapses today can erode trust in the future, leading users to leave platforms or become wary of participating in any further data-driven initiatives. Data experiments can unlock groundbreaking insights, but at what cost if ethics are disregarded. The scientific methodology in this research was fine, but the ethics methodology wasn't. People's agency needs to be respected, and this experiment could have inadvertently harmed the emotional wellbeing and the personal relationships of many people. Ethics isn't a checkbox. It's a shared responsibility, demanding transparency, user control, and careful consideration of real-world impact. By embedding the lessons from this video into your own data experiments, you can ensure that you respect and protect the very people that you aim to help.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ethics]] (4), [[User Experience (UX)|User experience]] (1)
> **UI Navigation:** checkbox (1)
> **Definitions:** is a  (1)
> **Speakers:** - randomized (1)

#### [How dashboards and visualizations can clarify or obscure](https://www.linkedin.com/learning/decision-intelligence-data-stories/how-dashboards-and-visualisations-can-clarify-or-obscure?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/decision-intelligence-data-stories/how-dashboards-and-visualisations-can-clarify-or-obscure?u=76281980&t=1)** - I'm sure you've heard of the idiom, "A picture is worth 1,000 words." It signifies that data visualizations are powerful tools for communicating complex information. But if those 1,000 words are all jumbled up, the picture is worthless. So let's have a look at how data visualizations and data [[Dashboards]] can either clarify or obscure data decisions. The COVID-19 pandemic struck in 2020. It was a unique event across the world. It was a [[Public Health]] crisis that affected everybody. In many cases, significant liberties were taken away from people, such as moving around or meeting each other. Taking such freedoms away was a very serious change to society. To build trust and ensure that decisions were followed, many public health officials quickly understood the power of data and keeping people informed. Good data visualizations and dashboard helped underpin and rationalize such very difficult decisions. Data dashboards soon became household tools for many people to understand a fast-changing global crisis. A good example of a well-designed dashboard with clear visualizations was the [[John the Ripper|John]] Hopkins COVID-19 dashboard. Let's have a look at it. Here is the COVID tracking site by John Hopkins University.
>
> **[1:35](https://www.linkedin.com/learning/decision-intelligence-data-stories/how-dashboards-and-visualisations-can-clarify-or-obscure?u=76281980&t=95)** It doesn't collect live data anymore, but all historical records are still accessible. If you click on Topics and then Tracking, you can still get all the historical data. Here, you're immediately presented with various interesting looking graphs and topic that you can explore further, but perhaps the map was the most important. This map provided citizens with a great level of detail on what is happening in their own local geography. Data is clearly presented on this dashboard. Also, users can [[Zoom]] in and click on their own local geography. Here, they can access additional [[Statistics]] in beautifully presented [[Infographics]]. The John Hopkins dashboard quickly became the go-to source for global case count, deaths, and COVID recoveries. The interface was clear and intuitive and contained smart and relevant data visualizations. This allowed public health officials to spot surges in certain regions and also mobilize resources accordingly. At the same time, every person could see why policies, like travel restrictions or school closures, were necessary. The John Hopkins COVID-19 dashboard provided something critically needed in time of crisis, provided [[Real-Time]] public health intelligence that everybody could access. On the other end of the spectrum
>
> **[3:08](https://www.linkedin.com/learning/decision-intelligence-data-stories/how-dashboards-and-visualisations-can-clarify-or-obscure?u=76281980&t=188)** was the Georgia Department of Public Health's COVID-19 dashboard. It demonstrated how poor design can obscure reality and spread confusion. Let's have a look at it. Here's the Georgia Department of Public Health's COVID-19 dashboard. Like the John Hopkins dashboard, it doesn't collect data anymore. Scrolling down, at first glance, it looks relatively similar to the John Hopkins dashboard, but in May 2020, Georgia's official COVID-19 dashboard displayed a bar chart. It doesn't exist anymore, but here is a reconstructed image of what it showed. It appeared to show wonderful news In five counties that had the highest infections, new cases were dropping every single day for two weeks. The visualization looks neat. It looks like a downward staircase of declining cases. The problem, it wasn't true. In reality, there was no clear downward trend. The chart had been manipulated by sorting the dates out of chronological order. If you look very closely, you can see that the dates don't make any sense. The 7th of May is followed by the 26th of May. This is a very poor and dangerous way to present public health data. When users caught this, the backlash was [[Swift (Programming Language)|Swift]]. Public trust took an immediate hit. Many people openly questioned whether the misrepresentation was accidental or a deliberate attempt to hide data.
>
> **[4:43](https://www.linkedin.com/learning/decision-intelligence-data-stories/how-dashboards-and-visualisations-can-clarify-or-obscure?u=76281980&t=283)** It also wasn't an isolated slipup. There were previous data errors in the dashboard, and [[Data Integrity]] was questioned. While these two examples come from public health, the lessons apply far beyond COVID-19. You should take care to prioritize data integrity and accuracy. You should always double-check the data and how it's presented. You should focus on clarity in visual design. A dashboard should be intuitive and not a puzzle. Use standard and sensible design choices. You should provide context and explain trends. Numbers rarely speak for themselves. Good dashboards include context, annotations, or notes about what the data means. And finally, you should be transparent of the sources and methods. Trust comes from openness, so you should disclose where the data comes from and how the dashboard updates. And while the dashboards presented here have now closed, their ideas and concepts live on. For example, the UK's Health Security Agency dashboard applied the lessons learned from such prior dashboards, and it now shares public health data in the United Kingdom in a simple, inclusive, and very accessible way. So whether you're tracking a global pandemic or presenting quarterly sales, remember these lessons from the John Hopkins and Georgia Department of Public Health dashboards.
>
> **[6:18](https://www.linkedin.com/learning/decision-intelligence-data-stories/how-dashboards-and-visualisations-can-clarify-or-obscure?u=76281980&t=378)** By striving for clarity, context, and transparency, you can ensure that data serves its purpose, empowering users to make better decisions and [[Building Trust]] in the world around us.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Public Health]] (10), [[John the Ripper|John]] (7), [[Dashboards]] (6), [[Data Integrity]] (2), [[Zoom]] (1)
> **Env Vars:** covid (9)
> **Analogies:** picture (2), such as (1), similar to (1), for example (1)
> **CLI Commands:** make (2)
> **UI Navigation:** click on (2)
> **Definitions:** is a  (2)
> **Best Practices:** you should always (1)
> **Speakers:** - i (1)

#### [Why early modeling success should not be taken for granted](https://www.linkedin.com/learning/decision-intelligence-data-stories/why-early-modelling-success-should-not-be-taken-for-granted?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/decision-intelligence-data-stories/why-early-modelling-success-should-not-be-taken-for-granted?u=76281980&t=0)** - In [[Data Science]], early success can be thrilling, especially when the results seem almost too good to be true. But those first wins can create a false sense of security. So let's explore the case of [[Google]] Flu Trends, a once-celebrated model that promised to track flu outbreaks in real time, until it didn't. Launched in 2008, Google Flu Trends analyzed search queries related to flu symptoms. Its mission was to predict flu outbreaks based on web searches of Google users, and analyze search queries such as fever, cough, or sore throat, and use these to predict influenza outbreaks faster than traditional reporting methods. After some initial teething problems, it worked remarkably well. It gathered headlines and praise from media and [[Public Health]] experts alike. Google claimed an accuracy of 97% with a reporting lag of only one day, compared to the previous, traditional, two-weeks reporting lag. So that was a big improvement in terms of modeling. Essentially, Google said, "We can use our search data to massively improve flu prediction, and in turn provide lifesaving insights to health policy makers." It was a fantastic example of using data analytics to improve health outcomes for everyone. However, just a few years later, Google Flu Trends began overestimating flu levels. It missed the mark during some flu seasons,
>
> **[1:36](https://www.linkedin.com/learning/decision-intelligence-data-stories/why-early-modelling-success-should-not-be-taken-for-granted?u=76281980&t=96)** showing inflated case numbers compared to official public health data. In particular, it missed the 2012 flu season by a huge margin. It severely overestimated the number of flu cases compared to actual flu cases. Google Flu Trends predicted that 11% of the US population had the flu, whilst only 6% actually had the flu. Before long, what seemed like an unstoppable model had lost much of its credibility. In 2015, Google quietly stopped publishing estimates. The model was dead. Standard surveillance data by the Center for Disease Control, with its standard two-week lag was shown to have significantly higher accuracy. This was a remarkable turnaround of a model that was praised by experts, policy makers, and the public alike. So what went wrong? One factor was model drift. Over time, when there was a flu season, more people searched for flu symptoms and remedies. In addition, the news stories about the flu surge during a flu season. This artificially boosted the search volume over time. Put simply, during flu epidemics, Google's Flu Trends [[Algorithms]] were susceptible to unexpected surges in search queries, which led to over projection of actual flu cases. Another factor was over-fitting. The original model was tuned so closely to its early data that it struggled to adapt to new search patterns. Essentially, the methodology was to find the best matches
>
> **[3:13](https://www.linkedin.com/learning/decision-intelligence-data-stories/why-early-modelling-success-should-not-be-taken-for-granted?u=76281980&t=193)** among 50 million search terms to fit 1,152 data points. The model used the best 45 search terms that best predicted this data. In addition, Google acknowledged manually excluding some search terms, which were known to be sparsely related. The fact that they only used 45 search terms and had to exclude some, should have been a big hint that over-fitting was taking place. This could have been avoided by regular updates to the model, but the model was not updated often, only being tuned in 2009 and 2013. And without regular calibration and real world validation, any model can become wildly inaccurate over time. The lessons from Google Flu Trends' downfall are as follows. The first is [[Continuous Monitoring]]. Even the best models need regular updates, rechecks and fine-tuning. Human behavior is dynamic and data models must keep up. It's not always just about [[Big Data]] and [[Data Mining]]. The second lesson is model validation and collaboration matters. Relying only on digital signals without cross-referencing official data can lead to blind spots. Algorithm construction and maintenance, and close collaboration with domain experts like epidemiologists, ensure that you can account for real world factors. In practice, both lessons mean establishing processes to review your model's performance regularly, say every three to six months. If your model's predictions'
>
> **[4:44](https://www.linkedin.com/learning/decision-intelligence-data-stories/why-early-modelling-success-should-not-be-taken-for-granted?u=76281980&t=284)** start deviating from trusted benchmarks, that's a red flag that you need to look at. Preferably with different kinds of experts. Early success shouldn't be a final verdict on a model's accuracy or longevity. As the Google Flu Trends case study proved, data science is never set it and forget it. In this case, flawed forecasts could have misled public health officials. Delayed interventions all resulted in ineffective resource allocation. The lesson is that you always need to stay vigilant, collaborative, and open to recalibrating your methods and models.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (12), [[Public Health]] (3), [[Data Science]] (2), [[Algorithms]] (1), [[Continuous Monitoring]] (1)
> **CLI Commands:** find (1)
> **Analogies:** such as (1)
> **Speakers:** - in (1)

#### [Why effective communication between stakeholders matters](https://www.linkedin.com/learning/decision-intelligence-data-stories/why-effective-communication-between-stakeholders-matters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/decision-intelligence-data-stories/why-effective-communication-between-stakeholders-matters?u=76281980&t=0)** - [[Data Science]] doesn't happen in isolation. It involves engineers, analysts, managers, and sometimes even the public. When critical decisions rely on data, how it's communicated can mean the difference between success and failure. A [[Stark (Accessibility Software)|stark]] example is the 1986 Challenger disaster, where communication breakdown contributed to the tragedy. So let's examine why effective dialogue is so crucial in data-driven decisions. On January 28th, 1986, the space shuttle Challenger broke apart just over a minute into its flight, claiming the lives of all seven crew members, and was a terrible tragedy. Investigations by the Rogers Commission revealed that rubber O-rings on the rocket boosters failed under unusually cold conditions. It was around two degrees Celsius, or 36 degrees Fahrenheit, on the day of launch. And this meant that the O-rings weren't flexible enough during the launch process. This produced a breach of burning gas through the solid rocket motor, and this resulted in the shuttle's explosion after liftoff. Of course, there was a substantial investigation, and a crucial factor emerged during this investigation. Engineers had data showing the launch risk, yet their warnings weren't fully acknowledged or effectively communicated to decision makers who were under pressure to launch. The tragedy was preventable.
>
> **[1:34](https://www.linkedin.com/learning/decision-intelligence-data-stories/why-effective-communication-between-stakeholders-matters?u=76281980&t=94)** So how was it preventable? Engineers had charts indicating the likelihood of failure in cold weather. Yet the way these concerns were conveyed, through dense charts, technical jargon, or ambiguous memos, didn't resonate with senior NASA officials who were under intense time and budget pressures. So let's have a look at the problem. The night before launch, data of how O-rings would fail at different temperature was specifically discussed in a meeting. And this is what the engineers and scientists showed to NASA managers. This diagram was shown to launch managers by the engineers. It contains data on previous flights where the O-rings experienced some kind of failure. It looks like there's no significant relationship between temperature and failure from this diagram, and that's what the managers concluded. They went ahead with the launch. However, this data excluded flights that had no O-ring incidents, and if you include that data, the graph looks like this. That's the same graph, but now with extra data points from flights with no incidents. If you now look at the correlation between failure and temperature, it will look something like this. There's a negative relationship between temperature and failure. The risk of low temperatures is now very evident. Lower temperatures increase the risk of O-ring failure. However, this specific graph was not shown. Here's my own visualization of that graph. A simple [[Logistic Regression]] model shows the [[Probability]] of failure on launch day was 99.99%.
>
> **[3:11](https://www.linkedin.com/learning/decision-intelligence-data-stories/why-effective-communication-between-stakeholders-matters?u=76281980&t=191)** That graph would certainly get the point across. I would definitely not launch if I was a manager and I was shown this graph. But the data wasn't presented like this. The raw data containing all prior launches was presented, but it looked like this. This picture contains exactly the same data as my logistic graph, but it's shown in a completely different way. It's much more complex, and it doesn't tell a clear story. I'm sure that you can see that identifying the significant risk that temperature has on O-ring failure is very hard to identify from this graph, and that's not the right way to communicate data in this kind of case. The end result, tragedy. Had the data been communicated differently, NASA managers would've understood that the probability of O-ring failure on launch day was above 99%. So what does this teach? It teaches that clarity over complexity is important. Presenting critical insights in jargon-heavy or overly technical reports can lead to confusion. You need to translate complex data into clear, actionable terms that help everyone grasp the core message. It also teaches us that we need to empower expert voices. Junior engineers or data analysts might hesitate to speak up if they feel overshadowed by higher-ups. Creating a culture where all voices are encouraged matters, especially in high-stakes environments.
>
> **[4:48](https://www.linkedin.com/learning/decision-intelligence-data-stories/why-effective-communication-between-stakeholders-matters?u=76281980&t=288)** And context is everything. Raw data rarely speaks for itself. Decision makers need to understand the why behind the numbers. A data point without context can be dangerously misread by different people. The Challenger disaster stands as a sobering reminder of what can happen when critical data isn't effectively communicated. So whether you're making space flight decisions, business strategy decisions, or public policy decisions, the same principle applies: well-informed, transparent, and inclusive communication can save time, money, and lives.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Probability]] (2), [[Data Science]] (1), [[Stark (Accessibility Software)|Stark]] (1), [[Logistic Regression]] (1)
> **Env Vars:** nasa (3)
> **Versions:** 99.99 (1)
> **Analogies:** picture (1)
> **Speakers:** - data (1)

#### [Why survey quality shouldn't be taken for granted](https://www.linkedin.com/learning/decision-intelligence-data-stories/why-survey-quality-shouldn-t-be-taken-for-granted?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/decision-intelligence-data-stories/why-survey-quality-shouldn-t-be-taken-for-granted?u=76281980&t=0)** - [Instructor] Surveys are critical to measuring the world. They cover everything from unemployment rates and public sentiment to health outcomes. Many of our most important [[Statistics]] come from high-quality surveys. But what happens when responses dwindle and overall quality plunges? The UK Labor Force Survey offers a cautionary tale. Its declining response rates have compromised key data, leaving policymakers, businesses, and researchers without reliable insights. So let's unpack why survey quality matters and why it shouldn't be taken for granted. Labor Force surveys are used worldwide to measure employment and unemployment. They help central banks set interest rates and inform government policy. They're essential, but only if response rates remain robust. In the United Kingdom, the Labor Force Survey is the main source of labor market data. It directly determines official statistics such as the employment rate and the number of people employed. However, there is a long-term drop in participation in the Labor Force Survey. Response rates are declining. Response rates for the first interview are now at around 29%. For the final interview, they're 15%. This forced the offers of national statistics to suspend and downgrade the survey
>
> **[1:34](https://www.linkedin.com/learning/decision-intelligence-data-stories/why-survey-quality-shouldn-t-be-taken-for-granted?u=76281980&t=94)** to statistics in development in 2023. That's not a good thing. This survey is in a lot of trouble, and that leaves key stakeholders with an incomplete picture of the labor market's health. So what's causing these low response rates? Two important factors are causing low response rates in the Labor Force Survey. The most significant was the impact of the COVID-19 pandemic. During COVID, [[Data Collection]] was switched from face-to-face interviews to phone interviews, and they stayed that way. This led to sharp fallen response rates as certain demographics were less reachable through phone surveys, and those who did pick up the phone and answered questions suffered from survey fatigue. Being asked a hundred questions over the phone is quite different to being asked a hundred questions in person. People just didn't want follow up. Another issue is the changing habits of people over time. Factors such as survey fatigue, declining trust, and data due to controversies, [[Privacy]] concerns, and changing communication habits all led to increasingly low response rates over time. And 'cause the survey had never adjusted to such changing habits, response rates continue to drop year after year. The fallout from this is significant with fewer people responding. Sample sizes have shrunk by more than half. Current sample sizes are less than 50,000 people from almost 100,000 people 10 years ago. And this means that representation has suffered.
>
> **[3:08](https://www.linkedin.com/learning/decision-intelligence-data-stories/why-survey-quality-shouldn-t-be-taken-for-granted?u=76281980&t=188)** Small groups or particular demographics cannot be tracked anymore due to missing data and estimates for workforce size, unemployment rates, and even local health statistics have become unreliable or implausible. For example, comparing the Labor Force Survey to other data sources, such as tax data suggests that over a million workers are missing from the Labor Force Survey data. And all of this because the sample quality has dropped so much. Thankfully, the [[Microsoft Office|Office]] of National Statistics is committed to fixing these issues. It'll do this via different ways, but these include reinstating home interviews, recontacting those who didn't respond, prioritizing certain groups and [[Interviewing]] more people, and they will also update their waiting scheme. However, all of this will take time and a lot of money. So are there lessons to be learned from all of this? The example of the teaches us that surveys must adapt to modern habits. They need to use multiple channels of data collection and keep questionnaires as user-friendly as possible. As habits change, surveys need to constantly adapt. In addition, trust building is vital. People are much more at tuned to [[Data Privacy]] and the value of data. So asking for their data requires trust. Measures that explain how data is used and how it will be protected are vital to modern data collection and modern surveys. Importantly, these lessons shouldn't be ignored.
>
> **[4:42](https://www.linkedin.com/learning/decision-intelligence-data-stories/why-survey-quality-shouldn-t-be-taken-for-granted?u=76281980&t=282)** Other countries are not immune to this phenomenon. Here take a look at the response rates from the US current population survey. This is a vital US survey. It has exactly the same problem that the Labor Force Survey has, and this will need to be addressed very soon. The key lesson is that surveys must adapt to modern habits to remain reliable. When [[Data Quality]] declines, everybody feels the impact. High-quality surveys shouldn't be taken for granted. And by investing in robust and transparent collection methods, you can ensure that the data you rely on truly reflects reality.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Statistics]] (6), [[Data Collection]] (3), [[Privacy]] (1), [[Microsoft Office|Office]] (1), [[Interviewing]] (1)
> **Analogies:** such as (3), picture (1), for example (1)
> **Definitions:** is a  (2), means that (1)
> **Env Vars:** covid (2)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Boost your data skills](https://www.linkedin.com/learning/decision-intelligence-data-stories/boost-your-data-skills?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/decision-intelligence-data-stories/boost-your-data-skills?u=76281980&t=0)** - Congratulations. You've completed [[Decision Intelligence]] data stories. You've learned how real-world stories offer valuable lessons to help your data decision making. Now let's talk about where you can go from here. There are many more [[LinkedIn]] Learning courses for you to delve into. These can help solidify the skills that you need to take accurate and insightful decisions from your own data. You should look for courses that have [[Storytelling]], communication, or [[Data Science]] angles. For example, [[Decision Intelligence]] by Cassie Kozyrkov is a great introduction to the core principles of [[Decision Intelligence]]. Or Data Visualization: Storytelling by Bill Shander is a useful course to help you tell data stories. Alternatively, Communication with Emotional Intelligence from Brenda Bailey Hughes can help you improve how you communicate your data decisions. And finally, you can't go wrong with learning more [[Statistics]] with Eddie Davila's fantastic statistics courses. Of course, there are also books and websites that can help you further. A classic book is "How to Lie With Statistics" by Darrel Huff. It shows how statistics can be easily misused, and there are many similar books. Alternatively, websites such as [medium.com](https://medium.com)
>
> **[1:35](https://www.linkedin.com/learning/decision-intelligence-data-stories/boost-your-data-skills?u=76281980&t=95)** or [informationisbeautiful.net](https://informationisbeautiful.net) do a great job of presenting data and data stories in interesting and insightful ways. Finally, practice. As you explore new data, remember to stay curious, question assumptions, evaluate [[Ethics]], and think about the way you present data to others. Speak to others about your thoughts on data and seek their feedback. Thank you for following this course. I hope you enjoyed it. And if you did, check out some of my other courses, which range from beginner to advanced level. Keep learning and keep growing your data skills. Good luck

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Statistics]] (4), [[Storytelling]] (2), [[LinkedIn]] (1), [[Data Science]] (1), [[Ethics]] (1)
> **URLs:** [medium.com](https://medium.com) (1), [informationisbeautiful.net](https://informationisbeautiful.net) (1)
> **Definitions:** is a  (2)
> **Analogies:** for example (1), such as (1)
> **Best Practices:** remember to (1)
> **Speakers:** - congratulations (1)


## Instructor

- [[Franz Buscha]]

## Path Context

### In [[Introduction to Fundamental Skills for Data Work- Data Strategy and Planning]]
← [[Data Literacy Exploring And Describing Data In An Ai World]] | **2 of 10** | [[Decision Intelligence]] →

## Appears In

- [[Introduction to Fundamental Skills for Data Work- Data Strategy and Planning]]

---

[↑ Back to top](#)