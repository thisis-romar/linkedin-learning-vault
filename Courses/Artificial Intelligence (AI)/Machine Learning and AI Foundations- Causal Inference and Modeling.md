---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: machine-learning-and-ai-foundations-causal-inference-and-modeling
url: "https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling"
duration_minutes: 171
duration: 2h 51m
level: Advanced
updated: 7/22/2022
learners: 36246
skills:
  - Machine Learning
  - Causal Inference
  - Artificial Intelligence (AI)
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQFOdsFRUJdSkA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1658347193726?e=2147483647&amp;v=beta&amp;t=4zj7gi5P0HGmvn3Gfku2qHqJeSq7Z7p74_6fMSjdVyo"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Advance Your Skills as a Machine Learning Specialist]]'
prev_courses:
  - '[[Machine Learning and AI Foundations- Decision Trees with KNIME]]'
next_courses:
  - '[[Machine Learning and AI Foundations- Prediction, Causation, and Statistical Inference]]'
path_nav: '[{"path":"Advance Your Skills as a Machine Learning Specialist","position":7,"total":9,"prev":"Machine Learning and AI Foundations- Decision Trees with KNIME","next":"Machine Learning and AI Foundations- Prediction, Causation, and Statistical Inference"}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - topic/software-development
  - skill/machine-learning
  - skill/causal-inference
  - skill/artificial-intelligence-ai
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Machine%20Learning%20and%20AI%20Foundations-%20Causal%20Inference%20and%20Modeling.md)

![Machine Learning and AI Foundations: Causal Inference and Modeling](https://media.licdn.com/dms/image/v2/C560DAQFOdsFRUJdSkA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1658347193726?e=2147483647&amp;v=beta&amp;t=4zj7gi5P0HGmvn3Gfku2qHqJeSq7Z7p74_6fMSjdVyo)

# Machine Learning and AI Foundations: Causal Inference and Modeling

> This course with instructor Keith McCormick provides an introduction to some advanced techniques in causal inference and causal modeling. It builds upon a foundation in Keith’s course, Machine Learning and AI Foundations: Prediction, Causality, and Statistical Inference. Keith focuses the course on three major topics: The power of experiments (and the reality that they aren't always available as a

> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling) | 2h 51m | Advanced | 36K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Thinking about causality](#thinking-about-causality)
  - [What you should know](#what-you-should-know)
- [**1. Experimental Design and Statistical Controls**](#1-experimental-design-and-statistical-controls) (10 videos)
  - [The investigator, the jury, and the judge](#the-investigator-the-jury-and-the-judge)
  - [Fisher and experiments](#fisher-and-experiments)
  - [John Snow and natural experiments](#john-snow-and-natural-experiments)
  - [Double blind studies](#double-blind-studies)
  - [Control variables (ANCOVA)](#control-variables-ancova)
  - [Judea Pearl: Problems with control variables](#judea-pearl-problems-with-control-variables)
  - [Moderation, mediation, and lurking variables](#moderation-mediation-and-lurking-variables)
  - [Simpson's paradox](#simpsons-paradox)
  - [Challenge: Moderation, mediation, or a third variable](#challenge-moderation-mediation-or-a-third-variable)
  - [Solution: Moderation, mediation, or a third variable](#solution-moderation-mediation-or-a-third-variable)
- [**2. Conditional Probability and Bayes' Theorem**](#2-conditional-probability-and-bayes-theorem) (8 videos)
  - [Turing, Enigma, and CAPTCHA](#turing-enigma-and-captcha)
  - [Enigma and uncertainty](#enigma-and-uncertainty)
  - [Developing an intuition for Bayes with Wordle](#developing-an-intuition-for-bayes-with-wordle)
  - [Wordle and conditional probability](#wordle-and-conditional-probability)
  - [Wordle, bans, and bits](#wordle-bans-and-bits)
  - [Wordle and Bayes' theorem](#wordle-and-bayes-theorem)
  - [Challenge: Conditional probability and Bayes' theorem](#challenge-conditional-probability-and-bayes-theorem)
  - [Solution: Conditional probability and Bayes' theorem](#solution-conditional-probability-and-bayes-theorem)
- [**3. Prediction and Proof with Bayesian statistics**](#3-prediction-and-proof-with-bayesian-statistics) (6 videos)
  - [Contrasting frequentist statistics and Bayesian statistics](#contrasting-frequentist-statistics-and-bayesian-statistics)
  - [Bayesian T-Test with JASP](#bayesian-t-test-with-jasp)
  - [Google Optimize](#google-optimize)
  - [Bayes and rare events](#bayes-and-rare-events)
  - [Challenge: JASP](#challenge-jasp)
  - [Solution: JASP](#solution-jasp)
- [**4. Causal Modeling with Structural Equation Modeling (SEM)**](#4-causal-modeling-with-structural-equation-modeling-sem) (6 videos)
  - [Sewell Wright](#sewell-wright)
  - [Introducing path analysis and SEM](#introducing-path-analysis-and-sem)
  - [SEM example: Intention](#sem-example-intention)
  - [Myths about SEM](#myths-about-sem)
  - [Latent variables in SEM](#latent-variables-in-sem)
  - [Finding direction of causality with SEM (PSAT)](#finding-direction-of-causality-with-sem-psat)
- [**5. Causal Modeling with Bayesian Networks**](#5-causal-modeling-with-bayesian-networks) (5 videos)
  - [Judea Pearl and the causal revolution](#judea-pearl-and-the-causal-revolution)
  - [Downloading BayesiaLab and resources](#downloading-bayesialab-and-resources)
  - [Introducing BayesiaLab: Hair and eye color](#introducing-bayesialab-hair-and-eye-color)
  - [Introduction to causal modeling with Bayesian networks](#introduction-to-causal-modeling-with-bayesian-networks)
  - [Bayesian Networks: Black Swan case study](#bayesian-networks-black-swan-case-study)
- [**Conclusion**](#conclusion) (1 videos)
  - [Taking causality further](#taking-causality-further)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Thinking about causality](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/thinking-about-causality?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/thinking-about-causality?u=76281980&t=0)** - [Keith] Are you ready to continue your journey and to learn about [[Causal Inference]] and causal modeling?
>
> **[0:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/thinking-about-causality?u=76281980&t=7)** This course is a companion to the course, Prediction, Causation, and Statistical Inference.
>
> **[0:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/thinking-about-causality?u=76281980&t=14)** In this course we're going to go even further.
>
> **[0:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/thinking-about-causality?u=76281980&t=17)** By our journey's end, we'll get an introduction to building causal models.
>
> **[0:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/thinking-about-causality?u=76281980&t=22)** Hi, I'm Keith McCormick, and I've been a data scientist for more than 25 years.
>
> **[0:27](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/thinking-about-causality?u=76281980&t=27)** And one of the toughest challenges on any project is confidently and persuasively discussing causality.
>
> **[0:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/thinking-about-causality?u=76281980&t=36)** Part of the reason is that many of us were taught that you weren't supposed to talk about it.
>
> **[0:41](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/thinking-about-causality?u=76281980&t=41)** We were expected to define, describe, and confirm patterns, but causality was sometimes treated almost as a forbidden topic, but it doesn't have to be that way.
>
> **[0:52](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/thinking-about-causality?u=76281980&t=52)** There are ways to tackle it.
>
> **[0:54](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/thinking-about-causality?u=76281980&t=54)** And we are experiencing a revolution in how we think about causality.
>
> **[0:59](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/thinking-about-causality?u=76281980&t=59)** This course will talk about three major topics, the power of experiments combined with the reality that they aren't always available as an option.
>
> **[1:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/thinking-about-causality?u=76281980&t=69)** The Bayesian statistic philosophy and approach, and when it's a good choice.
>
> **[1:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/thinking-about-causality?u=76281980&t=74)** And then the culmination of our journey, an introduction to causal modeling with techniques like structural equation modeling and Bayesian networks.
>
> **[1:24](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/thinking-about-causality?u=76281980&t=84)** These are advanced techniques that reward time and study, but we'll learn enough to discover what makes them both powerful and interesting, which I bet will inspire you to learn even more.
>
> **[1:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/thinking-about-causality?u=76281980&t=98)** I couldn't be more excited to introduce you to them.
>
> **[1:41](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/thinking-about-causality?u=76281980&t=101)** So let's begin.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Causal Inference]] (1)
> **Definitions:** is a  (1)
> **Speakers:** - [keith] (1)

#### [What you should know](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/what-you-should-know?u=76281980&t=0)** - [Narrator] So what should you know to enjoy and benefit from this course?
>
> **[0:04](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/what-you-should-know?u=76281980&t=4)** Well, the first question you should ask is whether you should consider taking the companion course first if you haven't had a chance to do so.
>
> **[0:12](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/what-you-should-know?u=76281980&t=12)** And here would be some of the reasons I would list.
>
> **[0:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/what-you-should-know?u=76281980&t=15)** If you want to know more about why causality is challenging, if you want a review of [[Statistics]] including hypothesis testing, or if you want to better understand how stats and machine learning are different, and when to use which, then I would go back and start with the companion course.
>
> **[0:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/what-you-should-know?u=76281980&t=37)** However, there are some folks that might want to dive right in and start here.
>
> **[0:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/what-you-should-know?u=76281980&t=43)** If you're considering that, this is what I would consider.
>
> **[0:47](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/what-you-should-know?u=76281980&t=47)** Those that should jump right into this course would be advanced users of both stats and machine learning.
>
> **[0:55](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/what-you-should-know?u=76281980&t=55)** It's not that the other course has extensive hands on in these two areas, but of terms of the concepts and the theory, we do a very thorough review.
>
> **[1:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/what-you-should-know?u=76281980&t=66)** Next, if you're thinking about starting with this one, you want to make sure that you're very comfortable with hypothesis testing and the way models are validated in machine learning.
>
> **[1:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/what-you-should-know?u=76281980&t=77)** Finally, if you're comfortable with all of that and you have a particular interest in Bayes and statistics, or causal modeling, this is the course where we cover that.
>
> **[1:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/what-you-should-know?u=76281980&t=89)** So if those are your top priorities this is the course for you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Statistics]] (2)
> **CLI Commands:** make (1)
> **Speakers:** - [narrator] (1)


### 1. Experimental Design and Statistical Controls

[↑ Back to Table of Contents](#table-of-contents)

#### [The investigator, the jury, and the judge](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/the-investigator-the-jury-and-the-judge?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/the-investigator-the-jury-and-the-judge?u=76281980&t=0)** - [Instructor] A friend and colleague of mine, Vince Polito, has a wonderful metaphor that he uses with analytics stakeholders that will allow us to briefly summarize the differences between [[Statistics]] and machine learning.
>
> **[0:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/the-investigator-the-jury-and-the-judge?u=76281980&t=14)** That distinction was a major topic of the sibling course to this one, [[Machine Learning and AI Foundations- Prediction, Causation, and Statistical Inference]].
>
> **[0:27](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/the-investigator-the-jury-and-the-judge?u=76281980&t=27)** In his metaphor, being the data miner or machine learning practitioner is like being an investigator, and statistics acts like a judge.
>
> **[0:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/the-investigator-the-jury-and-the-judge?u=76281980&t=38)** It reminds me of the popular genre of TV shows where police detectives investigate the crime in the first half hour of the show, and a trial is held in the second half of the show.
>
> **[0:50](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/the-investigator-the-jury-and-the-judge?u=76281980&t=50)** The investigators, usually police detectives, have to go out and find information, some of which is helpful and some of which is not.
>
> **[0:58](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/the-investigator-the-jury-and-the-judge?u=76281980&t=58)** And through persistence and hard work, they find the patterns in the data.
>
> **[1:04](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/the-investigator-the-jury-and-the-judge?u=76281980&t=64)** Now comes a completely different step.
>
> **[1:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/the-investigator-the-jury-and-the-judge?u=76281980&t=67)** Is the information deemed trustworthy?
>
> **[1:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/the-investigator-the-jury-and-the-judge?u=76281980&t=70)** Statistics, particularly traditional statistics, is very much focused on this question.
>
> **[1:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/the-investigator-the-jury-and-the-judge?u=76281980&t=77)** In a legal proceeding, whether a document or testimony is trustworthy and will be allowed at trial is often a cause for considerable debate.
>
> **[1:27](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/the-investigator-the-jury-and-the-judge?u=76281980&t=87)** There is a lot of behind-the-scenes discussion, often with both proponents in favor and also against key pieces of information.
>
> **[1:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/the-investigator-the-jury-and-the-judge?u=76281980&t=96)** To extend our metaphor, the p-value from traditional statistics acts like a judge, determining whether the information is a trustworthy signal in the data or may be reflective of just noise in the data.
>
> **[1:51](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/the-investigator-the-jury-and-the-judge?u=76281980&t=111)** This is a critical step because it controls what the jury will see and hear at trial.
>
> **[1:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/the-investigator-the-jury-and-the-judge?u=76281980&t=117)** And in the metaphor, the jury are the project stakeholders.
>
> **[2:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/the-investigator-the-jury-and-the-judge?u=76281980&t=121)** They will likely never get to see the data that was deemed insignificant by the hypotheses tests.
>
> **[2:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/the-investigator-the-jury-and-the-judge?u=76281980&t=130)** If they do see some of it during the course of the trial, they are warned that some data points are more trustworthy than others by seeing the p-value that was associated with the individual analysis.
>
> **[2:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/the-investigator-the-jury-and-the-judge?u=76281980&t=142)** Of course, a metaphor isn't a substitute for a full course, but it prepares our minds for what is coming next.
>
> **[2:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/the-investigator-the-jury-and-the-judge?u=76281980&t=150)** In this course, we will largely leave machine learning behind so that we can focus on why proving cause is so connected to experiments, and also what we can do when experiments are impossible.
>
> **[2:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/the-investigator-the-jury-and-the-judge?u=76281980&t=165)** Along the way, we'll have a lot to say about the differences between two kinds of statistics.
>
> **[2:50](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/the-investigator-the-jury-and-the-judge?u=76281980&t=170)** Traditional, often called frequentist, and Bayesian statistics.
>
> **[2:56](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/the-investigator-the-jury-and-the-judge?u=76281980&t=176)** Finally, the narrative that flows through both courses will culminate in a discussion of contemporary approaches to causal modeling.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Statistics]] (7)
> **Definitions:** is a  (3)
> **CLI Commands:** find (2)
> **Speakers:** - [instructor] (1)

#### [Fisher and experiments](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/fisher-and-experiments?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/fisher-and-experiments?u=76281980&t=0)** - [Voiceover] Starting in 1919, Ronald Fisher worked at Rothamsted Experimental Station for 14 years.
>
> **[0:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/fisher-and-experiments?u=76281980&t=7)** He was quite young.
>
> **[0:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/fisher-and-experiments?u=76281980&t=9)** He was in his late 20s when he arrived.
>
> **[0:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/fisher-and-experiments?u=76281980&t=11)** It was there that he developed and refined many of the techniques that he's famous for and that are still in use.
>
> **[0:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/fisher-and-experiments?u=76281980&t=18)** So what was he up to?
>
> **[0:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/fisher-and-experiments?u=76281980&t=19)** He was using [[Statistics]] to study how to best apply artificial fertilizer to optimally grow winter wheat and other crops.
>
> **[0:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/fisher-and-experiments?u=76281980&t=28)** While he was at it, Fisher laid the groundwork of statistical inference, invented experimental design featuring randomization and Inova.
>
> **[0:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/fisher-and-experiments?u=76281980&t=38)** The first edition of Statistical Methods for Research Workers appeared in 1925.
>
> **[0:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/fisher-and-experiments?u=76281980&t=43)** What's important to underscore is how his work here is a great example of the kind of environment where these techniques work especially well.
>
> **[0:54](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/fisher-and-experiments?u=76281980&t=54)** After all, it was during this period that he invented them.
>
> **[0:58](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/fisher-and-experiments?u=76281980&t=58)** These were highly controlled experiments using randomization.
>
> **[1:02](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/fisher-and-experiments?u=76281980&t=62)** Everything was planned in advance, often called prospective.
>
> **[1:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/fisher-and-experiments?u=76281980&t=67)** He famously said, "To consult the statistician "after an experiment is finished "is merely to ask him to conduct a post mortem examination.
>
> **[1:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/fisher-and-experiments?u=76281980&t=76)** "He can perhaps say what the experiment died of."
>
> **[1:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/fisher-and-experiments?u=76281980&t=80)** The statistician has to be involved before the experiment is conducted.
>
> **[1:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/fisher-and-experiments?u=76281980&t=86)** I love this passage in The Book of Why, they write "At the time, the idea of randomly designed experiments "horrified Fisher's statistical colleagues.
>
> **[1:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/fisher-and-experiments?u=76281980&t=97)** "Fisher literally drawing from a deck of cards "to assign subplots "to each fertilizer may have contributed to their dismay."
>
> **[1:46](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/fisher-and-experiments?u=76281980&t=106)** Why was this so important?
>
> **[1:48](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/fisher-and-experiments?u=76281980&t=108)** He was measuring the effectiveness of each fertilizer.
>
> **[1:51](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/fisher-and-experiments?u=76281980&t=111)** So he had to control for the influence of other factors.
>
> **[1:54](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/fisher-and-experiments?u=76281980&t=114)** For instance, there's water, and hours of sunlight and soil fertility.
>
> **[1:59](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/fisher-and-experiments?u=76281980&t=119)** Anyone with plants at home soon discovers that moving a plant from one window to another can make a difference.
>
> **[2:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/fisher-and-experiments?u=76281980&t=125)** Fisher had acres of outdoor plantings as part of his experiment.
>
> **[2:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/fisher-and-experiments?u=76281980&t=130)** There were a lot of variables in addition to the fertilizer.
>
> **[2:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/fisher-and-experiments?u=76281980&t=134)** As we shall see in the course, there are two ways of dealing with this randomization and control variables.
>
> **[2:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/fisher-and-experiments?u=76281980&t=142)** When you can do it, randomization is better because you don't have to itemize all of those other factors, add them to your data set, and statistically remove their influence.
>
> **[2:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/fisher-and-experiments?u=76281980&t=152)** As we shall see, there's lots of complications with control variables.
>
> **[2:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/fisher-and-experiments?u=76281980&t=158)** So it was Fisher's job to carefully perform experiments with different conditions under his control, specifically the variable under study; fertilizer.
>
> **[2:49](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/fisher-and-experiments?u=76281980&t=169)** Then he used randomization to control for the influence of all of the other factors that could potentially interfere with his analysis of fertilizer.
>
> **[2:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/fisher-and-experiments?u=76281980&t=177)** Like the sunlight, water, and soil fertility.
>
> **[3:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/fisher-and-experiments?u=76281980&t=181)** Not only did Fisher innovate these techniques, his book became the definitive source for statistical research.
>
> **[3:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/fisher-and-experiments?u=76281980&t=188)** After Rothamsted, he was also a very influential professor and academic.
>
> **[3:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/fisher-and-experiments?u=76281980&t=193)** I think it's powerful to pause for a moment and reflect on just how influential Fisher and his book was.
>
> **[3:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/fisher-and-experiments?u=76281980&t=201)** It's all discussed in a book, Bernoulli's Fallacy.
>
> **[3:25](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/fisher-and-experiments?u=76281980&t=205)** In the book, "The tests are supplemented "by many numerical examples and tables "of the relevant distributions.
>
> **[3:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/fisher-and-experiments?u=76281980&t=212)** "For an experimental scientist "without advanced mathematical training "the book was a godsend.
>
> **[3:39](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/fisher-and-experiments?u=76281980&t=219)** "All such a person had to do was find the procedure "corresponding to their problem and follow the instructions.
>
> **[3:47](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/fisher-and-experiments?u=76281980&t=227)** "As a result, Statistical Methods "for Research Workers was enormously successful.
>
> **[3:53](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/fisher-and-experiments?u=76281980&t=233)** "It went through fourteens between 1925 and 1970 "and it became such the industry standard "that anyone not following one of Fisher's recipes "would have a hard time getting results published."
>
> **[4:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/fisher-and-experiments?u=76281980&t=250)** These techniques were powerful.
>
> **[4:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/fisher-and-experiments?u=76281980&t=251)** They still are powerful.
>
> **[4:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/fisher-and-experiments?u=76281980&t=253)** They represent how modern experiments are conducted.
>
> **[4:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/fisher-and-experiments?u=76281980&t=256)** But the reason that Fisher's influence is important to mention is that we won't always be able to apply these techniques like the winter wheat research at Rothamsted.
>
> **[4:27](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/fisher-and-experiments?u=76281980&t=267)** And when you're doing anything other than a randomized trial, you have the weight of all of that statistical history on your shoulders, so to speak.
>
> **[4:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/fisher-and-experiments?u=76281980&t=277)** In the companion course, we experienced this as the debate between stats and machine learning.
>
> **[4:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/fisher-and-experiments?u=76281980&t=283)** And in this course we'll experience that as the debate between traditional statistics represented by Fisher and Beigian statistics.
>
> **[4:51](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/fisher-and-experiments?u=76281980&t=291)** But not to worry, by the end of the course we'll have options and an expanded toolkit at our disposal.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Statistics]] (3)
> **CLI Commands:** make (1), find (1)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)
> **Speakers:** - [voiceover] (1)

#### [John Snow and natural experiments](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/john-snow-and-natural-experiments?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/john-snow-and-natural-experiments?u=76281980&t=0)** - [Narrator] One of the most famous epidemiological detective stories is the story of [[John the Ripper|John]] Snow and the cholera epidemics in London in the middle of the 19th century.
>
> **[0:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/john-snow-and-natural-experiments?u=76281980&t=11)** There were multiple outbreaks, so we're not going to get caught up in the timeline and we'll discuss just enough to address our theme.
>
> **[0:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/john-snow-and-natural-experiments?u=76281980&t=20)** What kind of analysis is convincing?
>
> **[0:24](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/john-snow-and-natural-experiments?u=76281980&t=24)** Cholera is a serious waterborne illness caused by contaminated drinking water.
>
> **[0:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/john-snow-and-natural-experiments?u=76281980&t=30)** London at the time did not have a modern sewage system.
>
> **[0:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/john-snow-and-natural-experiments?u=76281980&t=34)** All of that is well understood now but at the time it was very scary because entire neighborhoods were affected and the mid 19th century physicians didn't know the cause and therefore, didn't know how to prevent it.
>
> **[0:48](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/john-snow-and-natural-experiments?u=76281980&t=48)** The story takes place over many years and has a rich cast of characters.
>
> **[0:53](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/john-snow-and-natural-experiments?u=76281980&t=53)** We'll mention just three analyses and two characters.
>
> **[0:58](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/john-snow-and-natural-experiments?u=76281980&t=58)** John Snow believed that cholera was waterborne and William Farr believed that cholera was airborne.
>
> **[1:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/john-snow-and-natural-experiments?u=76281980&t=66)** The story is so important to the history of epidemiology and actually to the history of London that there's a replica of the famous Broad Street pump in the same neighborhood today.
>
> **[1:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/john-snow-and-natural-experiments?u=76281980&t=77)** And there's even a pub in the neighborhood called the John Snow.
>
> **[1:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/john-snow-and-natural-experiments?u=76281980&t=81)** There is the most remarkable website mentioned in the references of the book, "The Ghost Map".
>
> **[1:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/john-snow-and-natural-experiments?u=76281980&t=88)** By visiting the website, we can get a great view of this old map.
>
> **[1:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/john-snow-and-natural-experiments?u=76281980&t=93)** So, here's the website.
>
> **[1:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/john-snow-and-natural-experiments?u=76281980&t=95)** It's a little bit tricky to find 'cause it's a very old website.
>
> **[1:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/john-snow-and-natural-experiments?u=76281980&t=98)** It was developed by a Professor Emeritus at UCLA It was developed by a Professor Emeritus at UCLA and there's some old formatting issues and so on that you have to navigate but don't let that deter you because it's a wonderful website and we actually get to take a look at the famous ghost map.
>
> **[1:56](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/john-snow-and-natural-experiments?u=76281980&t=116)** Here it is.
>
> **[1:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/john-snow-and-natural-experiments?u=76281980&t=117)** So, you can see along kind of the center of the image that there is Broad Street, then there's a little indicator of the pump.
>
> **[2:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/john-snow-and-natural-experiments?u=76281980&t=127)** And then the little hash marks are instances of cholera And then the little hash marks are instances of cholera and you can see a larger concentration of them near the pump.
>
> **[2:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/john-snow-and-natural-experiments?u=76281980&t=138)** And this is an incredibly famous map made famous by its mention in many books, not only books about the cholera epidemic but also books about data visualization.
>
> **[2:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/john-snow-and-natural-experiments?u=76281980&t=151)** Nonetheless, this famous chart was not as persuasive as you might think.
>
> **[2:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/john-snow-and-natural-experiments?u=76281980&t=158)** And one of the factors seems to be that Snow was doing a powerful job analyzing the positive cases but did not really have a thorough analysis of the negative cases.
>
> **[2:50](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/john-snow-and-natural-experiments?u=76281980&t=170)** The equivalent today would be like having a treated group but not having a placebo group.
>
> **[2:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/john-snow-and-natural-experiments?u=76281980&t=177)** Nonetheless, we still remember this today and he was onto something.
>
> **[3:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/john-snow-and-natural-experiments?u=76281980&t=180)** He eventually was able to convince authorities but not at this stage in the analysis.
>
> **[3:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/john-snow-and-natural-experiments?u=76281980&t=189)** One of the folks that was not convinced was named William Farr.
>
> **[3:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/john-snow-and-natural-experiments?u=76281980&t=195)** He actually made this statement about Snow's analysis, He actually made this statement about Snow's analysis, "To measure the effects of good or bad water supply, "it is requisite to find of inhabitants."
>
> **[3:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/john-snow-and-natural-experiments?u=76281980&t=208)** And then he went on to list a bunch of what we would now [[Call Control]] variables, things like living at the same altitude.
>
> **[3:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/john-snow-and-natural-experiments?u=76281980&t=216)** Remember that he favored the airborne theory.
>
> **[3:39](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/john-snow-and-natural-experiments?u=76281980&t=219)** Having similar socioeconomic status, engaged in the same pursuits, but differing in just one respect: having two different sources of water.
>
> **[3:50](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/john-snow-and-natural-experiments?u=76281980&t=230)** Then he went on to say, "But of such experimenta crucis, "the circumstances of London do not admit", which is a very fancy way of saying that he thought that John Snow needed an experiment.
>
> **[4:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/john-snow-and-natural-experiments?u=76281980&t=245)** Experimenta crucis means decisive experiment.
>
> **[4:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/john-snow-and-natural-experiments?u=76281980&t=249)** Now, Farr knew that Snow couldn't do an experiment and couldn't meet the challenge that he put forth.
>
> **[4:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/john-snow-and-natural-experiments?u=76281980&t=255)** Now, Farr wasn't the only skeptic.
>
> **[4:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/john-snow-and-natural-experiments?u=76281980&t=257)** Snow was pretty much alone in his theory about waterborne illness.
>
> **[4:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/john-snow-and-natural-experiments?u=76281980&t=263)** What's ironic about Farr's comment is that he had nothing more than correlation and support of his theory.
>
> **[4:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/john-snow-and-natural-experiments?u=76281980&t=271)** He produced a very compelling analysis based on altitude but it was purely correlational.
>
> **[4:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/john-snow-and-natural-experiments?u=76281980&t=278)** Farr's numbers seemed to show that higher ground was safer ground.
>
> **[4:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/john-snow-and-natural-experiments?u=76281980&t=283)** This would prove to be a classic case of correlation being mistaken from causation and that's right from the extensive discussion of this in "The Ghost Map".
>
> **[4:55](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/john-snow-and-natural-experiments?u=76281980&t=295)** You see, what Farr was finding was that the higher neighborhoods were less affected.
>
> **[5:02](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/john-snow-and-natural-experiments?u=76281980&t=302)** So, he then went on to claim that it must be the altitude So, he then went on to claim that it must be the altitude but as they discussed in "The Ghost Map", the higher neighborhoods were less crowded and they're further away from the Thames.
>
> **[5:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/john-snow-and-natural-experiments?u=76281980&t=315)** And the Thames, of course, was eventually shown as being the source of the contamination.
>
> **[5:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/john-snow-and-natural-experiments?u=76281980&t=321)** "The Ghost Map" puts it this way, "Higher elevations were safer, "not because they were free of miasma.
>
> **[5:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/john-snow-and-natural-experiments?u=76281980&t=328)** "They were safer because they tended to have cleaner water."
>
> **[5:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/john-snow-and-natural-experiments?u=76281980&t=333)** See, miasma is the [[Microsoft Word|word]] that they used for bad air.
>
> **[5:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/john-snow-and-natural-experiments?u=76281980&t=338)** The claim was that was the cause.
>
> **[5:40](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/john-snow-and-natural-experiments?u=76281980&t=340)** It was the miasma theory.
>
> **[5:42](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/john-snow-and-natural-experiments?u=76281980&t=342)** The miasma theory was so popular that it continued to be the prevailing theory for years.
>
> **[5:48](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/john-snow-and-natural-experiments?u=76281980&t=348)** In short, neither Snow's pump map nor Farr's elevation analysis changed any minds.
>
> **[5:56](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/john-snow-and-natural-experiments?u=76281980&t=356)** In order to understand what eventually did change minds, we have to take a look at a second map that John Snow made.
>
> **[6:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/john-snow-and-natural-experiments?u=76281980&t=365)** This map is found on the same website.
>
> **[6:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/john-snow-and-natural-experiments?u=76281980&t=368)** And if I scroll up a little bit, you can see the legend blue, it doesn't really look blue anymore, is the Southwark and Vauxhall company.
>
> **[6:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/john-snow-and-natural-experiments?u=76281980&t=379)** Red is the Lambeth company; and that purplish color is pipes of both companies are intermingled.
>
> **[6:27](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/john-snow-and-natural-experiments?u=76281980&t=387)** This was really key because what did change minds, and it's critical to us, is what would now be called a natural experiment.
>
> **[6:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/john-snow-and-natural-experiments?u=76281980&t=398)** Unlike the two correlational analyses, Snow was able to determine that there were two water companies that provided water to affected neighborhoods.
>
> **[6:47](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/john-snow-and-natural-experiments?u=76281980&t=407)** Victorian London was so complex that there wasn't any systematic reason why one house would get water from one company and not the other, so it mimicked randomization.
>
> **[6:58](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/john-snow-and-natural-experiments?u=76281980&t=418)** The Broad Street pump map is justifiably famous but the map that really made the difference is this one.
>
> **[7:04](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/john-snow-and-natural-experiments?u=76281980&t=424)** It turns out that one company was getting water upstream from London and the other company downstream from London after the sewage had been released into the river, that's what made the difference.
>
> **[7:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/john-snow-and-natural-experiments?u=76281980&t=436)** But by showing that the customers of one company got sick but the others did not, Snow was finally able to convince the authorities that it was waterborne.
>
> **[7:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/john-snow-and-natural-experiments?u=76281980&t=446)** For us, the lesson is this.
>
> **[7:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/john-snow-and-natural-experiments?u=76281980&t=448)** Under the right circumstances, you can get experiment-like results and experiment-like persuasion from observational and retrospective data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[John the Ripper|John]] (5), [[Call Control]] (1), [[Microsoft Word|Word]] (1)
> **Definitions:** is a  (2), is an  (1)
> **CLI Commands:** find (2)
> **Env Vars:** ucla (2)
> **UI Navigation:** scroll up (1)
> **Speakers:** - [narrator] (1)

#### [Double blind studies](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/double-blind-studies?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/double-blind-studies?u=76281980&t=0)** - [Instructor] Most of us have heard of double-blind studies but most data scientists don't work in a setting, or an industry where they get an opportunity to conduct them A more complete name is a randomized double-blind placebo control study.
>
> **[0:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/double-blind-studies?u=76281980&t=20)** They are often described with phrases like "the best method," or "the gold standard," or "least likely to be biased," or "the most convincing."
>
> **[0:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/double-blind-studies?u=76281980&t=34)** That can inspire feelings of frustration because many of us are competing with the reputation of a technique that is not available to us.
>
> **[0:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/double-blind-studies?u=76281980&t=45)** We'll discuss alternatives in this course, so we will have options but let's first, get clear about what the features are, and why they are considered so attractive.
>
> **[0:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/double-blind-studies?u=76281980&t=57)** What makes it a double-blind?
>
> **[1:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/double-blind-studies?u=76281980&t=60)** In a double blind-study, not only the patient but also the clinician is unaware of the assignment.
>
> **[1:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/double-blind-studies?u=76281980&t=69)** The assignment being whether or not the patient was given the treatment, or the placebo.
>
> **[1:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/double-blind-studies?u=76281980&t=75)** Without blinding the patient's beliefs in the efficacy could impact the results.
>
> **[1:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/double-blind-studies?u=76281980&t=81)** The purpose of double blinding is that the clinician could accidentally give subtle clues during the treatment.
>
> **[1:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/double-blind-studies?u=76281980&t=90)** There's even something called triple blinding where even the data analysts, and researchers don't know which group is which.
>
> **[1:40](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/double-blind-studies?u=76281980&t=100)** So let's recap with a list of these characteristics.
>
> **[1:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/double-blind-studies?u=76281980&t=105)** There's a placebo group, there's randomization, it's prospective meaning that assignment to treatment, or a placebo is done before the study begins.
>
> **[2:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/double-blind-studies?u=76281980&t=120)** And finally, as we've discussed, there is blinding.
>
> **[2:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/double-blind-studies?u=76281980&t=125)** These characteristics work together to produce the type of study that most scientists, and statisticians find the most convincing.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Control variables (ANCOVA)](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/control-variables-ancova?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/control-variables-ancova?u=76281980&t=0)** - [Instructor] We've just discussed that a randomized, double-blind, placebo-controlled study would have a placebo group, randomization, it would be prospective, and there would be blinding.
>
> **[0:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/control-variables-ancova?u=76281980&t=13)** But now imagine that you are an institutional researcher at a university, you've been asked to evaluate a peer tutoring program from last year.
>
> **[0:24](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/control-variables-ancova?u=76281980&t=24)** Based on your analysis the program may or may not get renewed funding.
>
> **[0:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/control-variables-ancova?u=76281980&t=30)** Well, you can't have a placebo group or blinding because there's no equivalent of a sugar pill, and you can't conceal from either the student or the tutor that the tutoring occurred.
>
> **[0:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/control-variables-ancova?u=76281980&t=44)** And you can't randomize because not everyone needed tutoring, and the students that needed it had to be willing to participate in the program.
>
> **[0:55](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/control-variables-ancova?u=76281980&t=55)** Finally, this all happened last year, it's not prospective, by its nature it's retrospective.
>
> **[1:03](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/control-variables-ancova?u=76281980&t=63)** So double-blind is not an option. What do you do?
>
> **[1:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/control-variables-ancova?u=76281980&t=67)** Well, you need what are called statistical controls or control variables.
>
> **[1:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/control-variables-ancova?u=76281980&t=73)** We'll explore the concept of control variables using a dataset that was also used in the sibling course to this one, [[Machine Learning and AI Foundations- Prediction, Causation, and Statistical Inference]].
>
> **[1:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/control-variables-ancova?u=76281980&t=88)** It's the PSAT causality dataset.
>
> **[1:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/control-variables-ancova?u=76281980&t=90)** I'll be providing it for your convenience but we won't be doing an analysis in [[Microsoft Excel|Excel]], but I do want to show you some results.
>
> **[1:41](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/control-variables-ancova?u=76281980&t=101)** If you're unfamiliar with t-tests, then you might want to consider going back to the other course because we will be increasingly referring to concepts that are reviewed in more depth there but that we need here.
>
> **[1:56](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/control-variables-ancova?u=76281980&t=116)** But onto something new.
>
> **[1:59](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/control-variables-ancova?u=76281980&t=119)** We won't be revisiting t-test, we're going to be talking about the analysis of covariance, often simply called ANCOVA.
>
> **[2:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/control-variables-ancova?u=76281980&t=130)** We will be seeing if the PSAT score gap between the students that prefer intuition and sensing, coded S and N in the data set, changes when we take into account a control variable.
>
> **[2:27](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/control-variables-ancova?u=76281980&t=147)** I want to refer you to a document that you might find helpful.
>
> **[2:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/control-variables-ancova?u=76281980&t=152)** Now, you don't need it, but it's free and it will have the figures that I'm going to refer to, and if you care to, you can read a more extensive discussion of these examples, but I'm going to focus only on ANCOVA.
>
> **[2:47](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/control-variables-ancova?u=76281980&t=167)** So if you're interested in the handout you can download chapter one, and I'm going to be drawing from just a couple of pages in that chapter that will show us our ANCOVA results.
>
> **[3:04](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/control-variables-ancova?u=76281980&t=184)** Our look at the example will be rather quick and we won't spend any time on software steps, just concepts and results.
>
> **[3:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/control-variables-ancova?u=76281980&t=194)** ANCOVA is widely available, there are dozens of options for reproducing this analysis in your software tool of choice.
>
> **[3:24](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/control-variables-ancova?u=76281980&t=204)** A proper introduction to ANOVA and ANCOVA would deserve its own course, so our goal is much more focused.
>
> **[3:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/control-variables-ancova?u=76281980&t=213)** We want to accomplish just two things.
>
> **[3:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/control-variables-ancova?u=76281980&t=216)** First, what's a covariate?
>
> **[3:39](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/control-variables-ancova?u=76281980&t=219)** And for now I'm going to be basically using covariate and control variable interchangeably.
>
> **[3:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/control-variables-ancova?u=76281980&t=225)** Second, how does using a covariate allow us to adjust our estimate of the effect we're trying to measure?
>
> **[3:55](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/control-variables-ancova?u=76281980&t=235)** So we're looking at Figure 1-4 in that PDF.
>
> **[3:59](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/control-variables-ancova?u=76281980&t=239)** Now, remember, you can just enjoy the example on screen, you don't need to download the PDF, but here it is.
>
> **[4:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/control-variables-ancova?u=76281980&t=247)** We're looking at Figure 1-4 and what do we see?
>
> **[4:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/control-variables-ancova?u=76281980&t=250)** We see that PSAT is in the y-axis, indicating that that's our dependent variable, we have Percent Honors ranging from zero to 100% in the x-axis, and then in the legend we can see that there's actually two groups.
>
> **[4:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/control-variables-ancova?u=76281980&t=268)** Since we can't see it in color it's a little bit tough, but the higher of the two lines is N and the lower of the two lines is S.
>
> **[4:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/control-variables-ancova?u=76281980&t=277)** So we have three variables, PSAT, Percent Honors, and this SN dichotomy.
>
> **[4:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/control-variables-ancova?u=76281980&t=285)** So what is this scatter plot telling us?
>
> **[4:48](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/control-variables-ancova?u=76281980&t=288)** Well, noteworthy, is the lines are parallel.
>
> **[4:53](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/control-variables-ancova?u=76281980&t=293)** That's important because there's actually an assumption when you use ANCOVA and that's the homogeneity of slopes assumption, a fancy way of saying the lines have to be parallel.
>
> **[5:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/control-variables-ancova?u=76281980&t=306)** Why do they have to be parallel?
>
> **[5:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/control-variables-ancova?u=76281980&t=308)** Well, because if we're going to adjust for Percent Honors, we want to be making an adjustment that affects both groups N and S equally.
>
> **[5:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/control-variables-ancova?u=76281980&t=319)** So what's the purpose of all of this?
>
> **[5:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/control-variables-ancova?u=76281980&t=322)** Well, we could simply look at the average PSAT of N and the average PSAT of S, and we actually did that on the other course and we found out that the score gap was 10 points.
>
> **[5:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/control-variables-ancova?u=76281980&t=337)** And we found out, that based on something called the Cohen's d, that that was a medium sized effect so it was noteworthy and it was worth looking at.
>
> **[5:46](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/control-variables-ancova?u=76281980&t=346)** The question is, what is causing that to happen?
>
> **[5:50](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/control-variables-ancova?u=76281980&t=350)** After all, we're very interested in causality.
>
> **[5:53](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/control-variables-ancova?u=76281980&t=353)** Well, what if it's just a coincidence that N's and S's have a different PSAT because there's some third variable out there that's causing it.
>
> **[6:04](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/control-variables-ancova?u=76281980&t=364)** Something about the environment in the home, or something about the education of the parents, or something about the classes that they're taking in school, are they taking honors classes or not honors classes?
>
> **[6:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/control-variables-ancova?u=76281980&t=377)** And when you determine that there's a score difference like this, critics will come and say it's not really SN, it's some other variable.
>
> **[6:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/control-variables-ancova?u=76281980&t=388)** That's what ANCOVA is all about, it's about trying to identify what that other variable could be, and then adjusting for it.
>
> **[6:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/control-variables-ancova?u=76281980&t=397)** So if you think of a t-test as being something more like the simple average of N and S, think of ANCOVA as being, and I'm oversimplifying a bit, but think of ANCOVA as being more like a weighted average.
>
> **[6:54](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/control-variables-ancova?u=76281980&t=414)** So let's take a look at the results.
>
> **[6:56](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/control-variables-ancova?u=76281980&t=416)** We're going to scroll down to Figure 1-8, but everything you need is going to be on screen.
>
> **[7:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/control-variables-ancova?u=76281980&t=425)** So we have 97 intuitives, we have 125 that prefer sensing, and we see that the corrected model is significant at .000.
>
> **[7:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/control-variables-ancova?u=76281980&t=437)** What that is telling us about is the whole model so we have a significant model.
>
> **[7:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/control-variables-ancova?u=76281980&t=442)** But the real action is down there at the bottom because we know that in terms of parameter estimates now, we know that next to SN = N we have a significance of .002
>
> **[7:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/control-variables-ancova?u=76281980&t=463)** and we have a 95% confidence interval that says that the score gap is between two and 10.
>
> **[7:51](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/control-variables-ancova?u=76281980&t=471)** I'm rounding to the nearest integer.
>
> **[7:53](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/control-variables-ancova?u=76281980&t=473)** But in the beta column, in the B column, we can see that the coefficient for SN = N is 6.233.
>
> **[8:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/control-variables-ancova?u=76281980&t=485)** What does that mean?
>
> **[8:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/control-variables-ancova?u=76281980&t=487)** Well, it means if you simply calculate the average performance of N and the average performance of S, you get a difference of about 10.
>
> **[8:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/control-variables-ancova?u=76281980&t=496)** We saw that when we ran the t-test in the other course.
>
> **[8:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/control-variables-ancova?u=76281980&t=500)** But using the ANCOVA, we see that the score gap is smaller.
>
> **[8:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/control-variables-ancova?u=76281980&t=506)** It's significant, but smaller. It's a score gap of 6.2.
>
> **[8:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/control-variables-ancova?u=76281980&t=511)** What does that tell us?
>
> **[8:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/control-variables-ancova?u=76281980&t=512)** It tells us that it's true that Percent Honors is influencing these averages, but it's also true that even when you remove the influence of Percent Honors, not through randomization but through math, when you remove the influence of Percent Honors, there is still a score gap and it's a score gap of greater than six.
>
> **[8:58](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/control-variables-ancova?u=76281980&t=538)** And this, in essence, is what ANCOVA is all about.
>
> **[9:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/control-variables-ancova?u=76281980&t=541)** It's trying to get at, does the control variable, does the covariate wipe out the difference or does the difference remain, and does the difference remain with the same magnitude or with an altered magnitude?
>
> **[9:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/control-variables-ancova?u=76281980&t=558)** So let's try to put this into context and issue a quick caution about covariates.
>
> **[9:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/control-variables-ancova?u=76281980&t=563)** It's not a magic bullet, if you're going to use covariates you'll need to keep a few things in mind.
>
> **[9:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/control-variables-ancova?u=76281980&t=570)** First, it complicates your analysis.
>
> **[9:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/control-variables-ancova?u=76281980&t=573)** You might need to upgrade your [[Statistics]] toolkit if you aren't already familiar with advanced statistical techniques.
>
> **[9:42](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/control-variables-ancova?u=76281980&t=582)** ANCOVA is just the beginning, there are dozens of different variations and flavors.
>
> **[9:48](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/control-variables-ancova?u=76281980&t=588)** It's a big part of what statisticians learn in grad school, all of these specialized techniques and all of these special cases.
>
> **[9:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/control-variables-ancova?u=76281980&t=597)** Next, you'll need more variables.
>
> **[10:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/control-variables-ancova?u=76281980&t=600)** You can't use a control variable that you don't have so even if it isn't the variable under study, you have to measure it and acquire it.
>
> **[10:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/control-variables-ancova?u=76281980&t=609)** Just as in this case, we were really looking at PSAT and SN but we needed Percent Honors in order to use it as a covariate.
>
> **[10:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/control-variables-ancova?u=76281980&t=622)** Critics may want even more.
>
> **[10:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/control-variables-ancova?u=76281980&t=626)** No matter how many you take into account, someone out there might feel that you missed one that they thought you should have used as a control variable.
>
> **[10:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/control-variables-ancova?u=76281980&t=638)** Finally, you need more data, not just columns, but rows.
>
> **[10:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/control-variables-ancova?u=76281980&t=643)** Covariates put demands on your sample size.
>
> **[10:46](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/control-variables-ancova?u=76281980&t=646)** Generally speaking, the more columns that you want to add to your model, the more row of data that you will need.
>
> **[10:55](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/control-variables-ancova?u=76281980&t=655)** So covariates, or again, often called control variables, are powerful but they take some training and they have limitations.
>
> **[11:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/control-variables-ancova?u=76281980&t=665)** Nonetheless, they are often critical to persuading others that you've done a thorough job.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (1), [[Statistics]] (1)
> **Env Vars:** ancova (12), psat (8), pdf (2), anova (1)
> **Versions:** 6.233 (1), 6.2 (1)
> **Prerequisites:** you'll need (2)
> **CLI Commands:** find (1)
> **UI Navigation:** scroll down (1)
> **Exercise Files:** download the (1)
> **Analogies:** imagine (1)

#### [Judea Pearl: Problems with control variables](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/judea-pearl-problems-with-control-variables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/judea-pearl-problems-with-control-variables?u=76281980&t=0)** - [Instructor] In "The Book of Why," Pearl acknowledges the value of control variables, like the covariate we used in INCOVA.
>
> **[0:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/judea-pearl-problems-with-control-variables?u=76281980&t=8)** But there's a bit of caution as well.
>
> **[0:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/judea-pearl-problems-with-control-variables?u=76281980&t=10)** They aren't a perfect solution.
>
> **[0:12](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/judea-pearl-problems-with-control-variables?u=76281980&t=12)** We'll get to the newer options in the second half of the course, but let's first summarize his major concerns.
>
> **[0:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/judea-pearl-problems-with-control-variables?u=76281980&t=20)** In the book, they put it this way.
>
> **[0:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/judea-pearl-problems-with-control-variables?u=76281980&t=22)** "Oddly, statisticians both over and underrate "the importance of adjusting for possible confounders," which is what you're trying to do with the control variables.
>
> **[0:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/judea-pearl-problems-with-control-variables?u=76281980&t=31)** "They overrate it in the sense that they often control "for more variables than they need to "and even for variables they should not control for.
>
> **[0:41](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/judea-pearl-problems-with-control-variables?u=76281980&t=41)** "At the same time, "statisticians greatly underrate controlling in the sense "that they are loath to talk about causality at all, "even if controlling has been done correctly."
>
> **[0:53](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/judea-pearl-problems-with-control-variables?u=76281980&t=53)** They give a powerful example of this.
>
> **[0:56](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/judea-pearl-problems-with-control-variables?u=76281980&t=56)** They discuss a study that had the potential to show reduced death rates among retired men in Hawaii in the category the researchers called intense walkers.
>
> **[1:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/judea-pearl-problems-with-control-variables?u=76281980&t=69)** They quote the study in the book, which according to their assessment, controlled for every reasonable factor.
>
> **[1:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/judea-pearl-problems-with-control-variables?u=76281980&t=76)** Factors like age, physical condition and several others, yet when the study was done, even though the numbers were quite convincing and the statistical controls were thorough, the researchers were reluctant to conclude that the walking got the credit.
>
> **[1:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/judea-pearl-problems-with-control-variables?u=76281980&t=92)** This discussion isn't just about the technique of control variables.
>
> **[1:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/judea-pearl-problems-with-control-variables?u=76281980&t=97)** Yes, control variables are powerful and we need to learn some new techniques too, like those discussed in the final section of the course, but we also need a different mindset.
>
> **[1:49](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/judea-pearl-problems-with-control-variables?u=76281980&t=109)** We have to overcome this reluctance to discuss causality even when the data gives us ample evidence to do so.
>
> **[1:58](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/judea-pearl-problems-with-control-variables?u=76281980&t=118)** And what's also trying not to be overly concerned about the fact that in [[Data Science]], we often find ourselves in a position where it is a poor fit to imitate controlled experiments like double blind studies or like the techniques that Fisher innovated at Rothamsted.
>
> **[2:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/judea-pearl-problems-with-control-variables?u=76281980&t=134)** Those techniques simply don't fit every situation so our professional development requires us to be familiar with how experiments work and how to use tricks, like statistical controls, but they are just some of the tools in the toolkit.
>
> **[2:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/judea-pearl-problems-with-control-variables?u=76281980&t=152)** In the second half of the course, we'll be exposed to some of the newer options in the study and practice of [[Causal Inference]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Science]] (1), [[Causal Inference]] (1)
> **CLI Commands:** find (1)
> **Env Vars:** incova (1)
> **Definitions:** is a  (1)
> **Warnings:** caution (1)
> **Speakers:** - [instructor] (1)

#### [Moderation, mediation, and lurking variables](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/moderation-mediation-and-lurking-variables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/moderation-mediation-and-lurking-variables?u=76281980&t=0)** - [Instructor] We've seen an example with three variables where one variable was the dependent, one variable was an independent and one was a control variable.
>
> **[0:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/moderation-mediation-and-lurking-variables?u=76281980&t=10)** Understanding how three variables interact and developing a language for discussing it will be important for us.
>
> **[0:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/moderation-mediation-and-lurking-variables?u=76281980&t=18)** We're going to discuss a few terms.
>
> **[0:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/moderation-mediation-and-lurking-variables?u=76281980&t=21)** And the first term is mediate.
>
> **[0:25](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/moderation-mediation-and-lurking-variables?u=76281980&t=25)** How is it used in everyday English?
>
> **[0:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/moderation-mediation-and-lurking-variables?u=76281980&t=28)** Well, it means to intervene between people or it can mean connected indirectly.
>
> **[0:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/moderation-mediation-and-lurking-variables?u=76281980&t=35)** Well, when we use the term in [[Statistics]], the key [[Microsoft Word|word]] is between.
>
> **[0:40](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/moderation-mediation-and-lurking-variables?u=76281980&t=40)** It's the variable that is in between as in an A causes B causes C pattern.
>
> **[0:50](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/moderation-mediation-and-lurking-variables?u=76281980&t=50)** For example, let's say that you work for a big airline and you want to understand how to get business travelers to spend more of their vacation money with the airline.
>
> **[1:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/moderation-mediation-and-lurking-variables?u=76281980&t=60)** It might seem straightforward that if a customer likes an airline for work travel, that they might naturally spend more of their personal dollars with them too.
>
> **[1:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/moderation-mediation-and-lurking-variables?u=76281980&t=70)** I happen to be a frequent flyer and I think it's more subtle than that.
>
> **[1:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/moderation-mediation-and-lurking-variables?u=76281980&t=74)** Most of my friends don't fly as often as I do and they don't particularly care which airline we choose if we go on a trip together.
>
> **[1:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/moderation-mediation-and-lurking-variables?u=76281980&t=83)** However, if flying together means that we both get upgraded to business class for free, then they'll obviously want to take advantage of that.
>
> **[1:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/moderation-mediation-and-lurking-variables?u=76281980&t=93)** So it looks more like this.
>
> **[1:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/moderation-mediation-and-lurking-variables?u=76281980&t=95)** Business spend only predicts personal spend if there are perks.
>
> **[1:41](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/moderation-mediation-and-lurking-variables?u=76281980&t=101)** If you have this pattern, you should be able to show that business spend predicts perks, perks predict personal spend, but if you control for perks, remember control variables, if you control for perks, the correlation between business and personal spend diminishes or goes away.
>
> **[2:02](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/moderation-mediation-and-lurking-variables?u=76281980&t=122)** Later in the course, we'll be learning about techniques like path analysis, structural equation modeling and Bayesian networks.
>
> **[2:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/moderation-mediation-and-lurking-variables?u=76281980&t=130)** There'll be some little differences in the details but the diagrams basically look like this.
>
> **[2:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/moderation-mediation-and-lurking-variables?u=76281980&t=137)** A causes B causes C.
>
> **[2:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/moderation-mediation-and-lurking-variables?u=76281980&t=141)** What about moderate?
>
> **[2:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/moderation-mediation-and-lurking-variables?u=76281980&t=143)** In everyday conversation, moderate means an average amount or as a verb, to moderate means to make less extreme or to weaken.
>
> **[2:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/moderation-mediation-and-lurking-variables?u=76281980&t=154)** In stats, a moderating variable is a variable that causes a correlation to change strength or direction.
>
> **[2:42](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/moderation-mediation-and-lurking-variables?u=76281980&t=162)** So the moderator B for instance might change the correlation between A and C.
>
> **[2:49](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/moderation-mediation-and-lurking-variables?u=76281980&t=169)** Let's talk about an example.
>
> **[2:51](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/moderation-mediation-and-lurking-variables?u=76281980&t=171)** We've seen the PSAT data set in this course and also in the companion course.
>
> **[2:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/moderation-mediation-and-lurking-variables?u=76281980&t=177)** It's the one for instance that we used for ANCOVA.
>
> **[3:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/moderation-mediation-and-lurking-variables?u=76281980&t=181)** One hypothesis regarding the score gap between the N's, those that prefer the intuitive learning style, and the S's, those that prefer the sensing learning style, has to do with how they might either prepare for standardized tests or perhaps what strategy they use while they're taking the standardized tests.
>
> **[3:25](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/moderation-mediation-and-lurking-variables?u=76281980&t=205)** When I was just out of college, I actually owned a small SAT prep tutoring company and I noticed a particular learning style difference among students.
>
> **[3:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/moderation-mediation-and-lurking-variables?u=76281980&t=215)** Some students were very comfortable eliminating wrong answers.
>
> **[3:40](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/moderation-mediation-and-lurking-variables?u=76281980&t=220)** Sometimes they could do it even when they didn't completely understand the question.
>
> **[3:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/moderation-mediation-and-lurking-variables?u=76281980&t=225)** Other students were quite uncomfortable with that and much preferred to work carefully, solve the problem, and then look for the answer among the five choices.
>
> **[3:56](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/moderation-mediation-and-lurking-variables?u=76281980&t=236)** Well, there's some evidence in the data that S's when compared to the N's choose more of the popular incorrect answers that were placed there to be the so-called attractors.
>
> **[4:12](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/moderation-mediation-and-lurking-variables?u=76281980&t=252)** The data set that I've provided doesn't have the questions broken down in that amount of detail, but it was an interesting pattern.
>
> **[4:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/moderation-mediation-and-lurking-variables?u=76281980&t=261)** So a moderating third variable would show two different parameters or coefficients for the two strategies, the solve and then choose strategy and the eliminate wrong answers strategy.
>
> **[4:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/moderation-mediation-and-lurking-variables?u=76281980&t=275)** This can be tricky to show in a diagram.
>
> **[4:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/moderation-mediation-and-lurking-variables?u=76281980&t=277)** Sometimes you actually have to do two diagrams, but one way to do it is to put both coefficients right there on the arrow.
>
> **[4:46](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/moderation-mediation-and-lurking-variables?u=76281980&t=286)** Another important one for us is going to be a confound.
>
> **[4:51](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/moderation-mediation-and-lurking-variables?u=76281980&t=291)** In everyday English, to confound is to cause confusion.
>
> **[4:56](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/moderation-mediation-and-lurking-variables?u=76281980&t=296)** Or you could say that you have confounded or mixed up A with B.
>
> **[5:02](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/moderation-mediation-and-lurking-variables?u=76281980&t=302)** To be lurking on the other hand is to be hidden.
>
> **[5:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/moderation-mediation-and-lurking-variables?u=76281980&t=306)** And that's what it means in stats too.
>
> **[5:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/moderation-mediation-and-lurking-variables?u=76281980&t=308)** So you'll see these words together sometimes, confounder and lurking variable or lurking third variable.
>
> **[5:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/moderation-mediation-and-lurking-variables?u=76281980&t=316)** In stats, a confounder is a variable that is causing everything to appear mixed up.
>
> **[5:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/moderation-mediation-and-lurking-variables?u=76281980&t=322)** Sometimes it's something that you are measuring but sometimes it's something you're not measuring and is therefore lurking or hidden.
>
> **[5:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/moderation-mediation-and-lurking-variables?u=76281980&t=332)** The classic example of this is the infamous shark attacks and ice cream.
>
> **[5:39](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/moderation-mediation-and-lurking-variables?u=76281980&t=339)** Ice cream sales and shark attacks are correlated.
>
> **[5:42](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/moderation-mediation-and-lurking-variables?u=76281980&t=342)** And of course we all know that it's not causal.
>
> **[5:47](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/moderation-mediation-and-lurking-variables?u=76281980&t=347)** So what's going on?
>
> **[5:49](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/moderation-mediation-and-lurking-variables?u=76281980&t=349)** Well, it's because there's a third variable out there, the number of beach visitors and there's no requirement that you have a handy way of counting number of beach visitors.
>
> **[6:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/moderation-mediation-and-lurking-variables?u=76281980&t=360)** The confounding variable can create this spurious relationship, whether it's in your data set or not.
>
> **[6:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/moderation-mediation-and-lurking-variables?u=76281980&t=368)** That's why it's sometimes called a lurking third variable.
>
> **[6:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/moderation-mediation-and-lurking-variables?u=76281980&t=373)** So in a technique like path analysis or Bayesian networks, it would look like this.
>
> **[6:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/moderation-mediation-and-lurking-variables?u=76281980&t=378)** Beach visitors, variable B is causing both A and C.
>
> **[6:25](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/moderation-mediation-and-lurking-variables?u=76281980&t=385)** And the result of that confound is that we are led to believe that A might be causing C, but it's just a spurious correlation.
>
> **[6:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/moderation-mediation-and-lurking-variables?u=76281980&t=395)** It can cause a lot of confusion, but not to worry as we will have strategies to address this by the time we reach the end of the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Statistics]] (1), [[Microsoft Word|Word]] (1)
> **Env Vars:** psat (1), ancova (1), sat (1)
> **Analogies:** for instance (2), for example (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Cross-References:** later in (1)
> **Speakers:** - [instructor] (1)

#### [Simpson's paradox](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/simpson-s-paradox?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/simpson-s-paradox?u=76281980&t=0)** - [Instructor] There was a famous case study of a phenomenon called Simpson's paradox.
>
> **[0:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/simpson-s-paradox?u=76281980&t=6)** It takes place back in 1973 at Berkeley.
>
> **[0:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/simpson-s-paradox?u=76281980&t=11)** An academic paper was written exploring the possibility that there might be gender bias in admissions.
>
> **[0:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/simpson-s-paradox?u=76281980&t=19)** It turns out that there was no gender bias, but the data made it look like there was.
>
> **[0:27](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/simpson-s-paradox?u=76281980&t=27)** Now we'll look at the original paper, but first let's define Simpson's paradox.
>
> **[0:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/simpson-s-paradox?u=76281980&t=35)** Here's the definition from Britannica.
>
> **[0:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/simpson-s-paradox?u=76281980&t=38)** I like this definition because it uses some of the language we're going to be using in the course.
>
> **[0:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/simpson-s-paradox?u=76281980&t=45)** Here goes, Simpson's paradox is an effect that occurs when the marginal association between two categorical variables is qualitatively different from the partial association between the same two variables after controlling for one or more variables.
>
> **[1:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/simpson-s-paradox?u=76281980&t=65)** So for me, here are the key points.
>
> **[1:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/simpson-s-paradox?u=76281980&t=67)** You're looking at two variables, you have a particular pattern, then you involve a third control variable.
>
> **[1:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/simpson-s-paradox?u=76281980&t=75)** The pattern seems to change, possibly even reverse, and things get confusing.
>
> **[1:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/simpson-s-paradox?u=76281980&t=81)** The reason I want to bring this up now is because we've been discussing control variables in confounders.
>
> **[1:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/simpson-s-paradox?u=76281980&t=89)** Let's take a look at the data and what they said about it.
>
> **[1:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/simpson-s-paradox?u=76281980&t=94)** Here it is, Sex Bias in Graduate Admissions, Data from Berkeley, by Bickel, Hammel and O'Connell.
>
> **[1:42](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/simpson-s-paradox?u=76281980&t=102)** Okay. I love the subtitle.
>
> **[1:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/simpson-s-paradox?u=76281980&t=104)** It's actually very illuminating.
>
> **[1:47](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/simpson-s-paradox?u=76281980&t=107)** Measuring bias is harder than is usually assumed, and the evidence is sometimes contrary to expectation.
>
> **[1:55](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/simpson-s-paradox?u=76281980&t=115)** Now, the way this story is usually told is the following, we saw some bias, then we looked at it by department, and we did not see bias.
>
> **[2:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/simpson-s-paradox?u=76281980&t=125)** And that's usually the whole story.
>
> **[2:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/simpson-s-paradox?u=76281980&t=128)** But what I want to do is I want to focus on some statistical elements that usually don't get discussed.
>
> **[2:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/simpson-s-paradox?u=76281980&t=135)** So let's scroll down here to the key table, and I'm going to [[Zoom]] in a bit.
>
> **[2:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/simpson-s-paradox?u=76281980&t=142)** So here's the figure that I want you to see.
>
> **[2:25](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/simpson-s-paradox?u=76281980&t=145)** In particular, I want you to look at how they reported it.
>
> **[2:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/simpson-s-paradox?u=76281980&t=149)** It's a chi-square.
>
> **[2:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/simpson-s-paradox?u=76281980&t=151)** The way that works is you calculate an expected value from what are called the marginal frequencies.
>
> **[2:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/simpson-s-paradox?u=76281980&t=157)** Note that they use that phrase and the definition too.
>
> **[2:41](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/simpson-s-paradox?u=76281980&t=161)** Basically you're making the assumption that men and women should have the same rate.
>
> **[2:48](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/simpson-s-paradox?u=76281980&t=168)** Then you check that null hypothesis against the data.
>
> **[2:52](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/simpson-s-paradox?u=76281980&t=172)** The larger the difference, the more likely that you conclude that you must reject the null hypothesis.
>
> **[2:59](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/simpson-s-paradox?u=76281980&t=179)** So if you look over to the right-hand side where it says difference, we see that there are almost 300 fewer women admitted then the marginal frequencies would lead you to expect.
>
> **[3:12](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/simpson-s-paradox?u=76281980&t=192)** That's the minus 277.
>
> **[3:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/simpson-s-paradox?u=76281980&t=195)** The P value, this is shown above the table, in the kind of the caption for the table.
>
> **[3:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/simpson-s-paradox?u=76281980&t=201)** The P value is very low.
>
> **[3:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/simpson-s-paradox?u=76281980&t=202)** In fact, we can see that it's actually reported to be zero.
>
> **[3:25](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/simpson-s-paradox?u=76281980&t=205)** So we conclude that there is some evidence of bias.
>
> **[3:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/simpson-s-paradox?u=76281980&t=210)** This is looking at the overall data set, and it's actually thousands of cases.
>
> **[3:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/simpson-s-paradox?u=76281980&t=214)** So we have, at this level, we have evidence of bias, but of course that's not the end of the story.
>
> **[3:40](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/simpson-s-paradox?u=76281980&t=220)** So they say right in the paper, "We could not find many biased [[Decision-Making]] units by examining them individually."
>
> **[3:51](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/simpson-s-paradox?u=76281980&t=231)** What do they mean by this?
>
> **[3:52](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/simpson-s-paradox?u=76281980&t=232)** Well, they mean individual departments.
>
> **[3:55](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/simpson-s-paradox?u=76281980&t=235)** And when they said they didn't find many, there was no real evidence of bias at the department level, But this is where it starts to get more complex, because it becomes a story of P values and sample sizes.
>
> **[4:12](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/simpson-s-paradox?u=76281980&t=252)** First, let's get why Simpson's paradox is occurring out of the way.
>
> **[4:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/simpson-s-paradox?u=76281980&t=257)** Simpson's paradox occurs when there's a third variable, that's confusing the relationship.
>
> **[4:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/simpson-s-paradox?u=76281980&t=263)** So the two original variables are gender and admissions, and the third variable is department.
>
> **[4:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/simpson-s-paradox?u=76281980&t=268)** So again, right from the paper, "The proportion of women applicants tends to be high in departments that are hard to get into and low in those that are easy to get into."
>
> **[4:40](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/simpson-s-paradox?u=76281980&t=280)** So if all the women are applying for tough to get into departments, when you aggregate that to the grand total, it makes it look like fewer women are getting in.
>
> **[4:52](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/simpson-s-paradox?u=76281980&t=292)** So often the narrative jumps to a deeper explanation or a solution.
>
> **[4:58](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/simpson-s-paradox?u=76281980&t=298)** For instance, Bayesian networks provide a solution, and we'll see that later in the course.
>
> **[5:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/simpson-s-paradox?u=76281980&t=305)** But I want to return to this other aspect of the problem.
>
> **[5:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/simpson-s-paradox?u=76281980&t=308)** The challenge that control variable sometimes creates by fragmenting your data and multiplying the number of P values that you have to calculate.
>
> **[5:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/simpson-s-paradox?u=76281980&t=317)** Now, keep in mind, this was an elite team of statisticians that were writing in this paper.
>
> **[5:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/simpson-s-paradox?u=76281980&t=322)** But if you read it carefully, you get the sense that there is no way to solve this problem, at least back in the '70s, or at least according to that team.
>
> **[5:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/simpson-s-paradox?u=76281980&t=336)** Let's quote a bit from the problems they were running into.
>
> **[5:39](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/simpson-s-paradox?u=76281980&t=339)** So the chi-square that we looked at is actually mathematically similar in many ways to the lady tasting tea example that you might remember from the companion course.
>
> **[5:49](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/simpson-s-paradox?u=76281980&t=349)** Fisher has a method for pooling the results of a bunch of chi-squares.
>
> **[5:54](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/simpson-s-paradox?u=76281980&t=354)** So they say in the paper, "If we apply Fisher's method to the chi-square [[Statistics]] of the 85 individual contingency tables, we obtain a value that has a [[Probability]] of occurrence by chance alone."
>
> **[6:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/simpson-s-paradox?u=76281980&t=368)** What they're saying is they're worried about a false positive.
>
> **[6:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/simpson-s-paradox?u=76281980&t=374)** They're worried about rejecting the no hypothesis, when they should not be rejecting the no hypothesis.
>
> **[6:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/simpson-s-paradox?u=76281980&t=380)** This happens all the time, but they're saying this particular technique runs that risk.
>
> **[6:25](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/simpson-s-paradox?u=76281980&t=385)** The approach that a lot of folks might think about on their own, or at least first think about, would be let's just run the department separately.
>
> **[6:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/simpson-s-paradox?u=76281980&t=394)** So as they say here, 85 simultaneous experiments, and in that many experiments, the probability of finding some marked departures from expected frequencies quote, just by chance, is not insubstantial.
>
> **[6:51](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/simpson-s-paradox?u=76281980&t=411)** This is reminiscent of the argument made by Jacob Cohen about false positives in the companion course.
>
> **[6:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/simpson-s-paradox?u=76281980&t=417)** This is our classic P value problem.
>
> **[7:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/simpson-s-paradox?u=76281980&t=420)** This part of the story is rarely told, but the authors really seem stuck at this point.
>
> **[7:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/simpson-s-paradox?u=76281980&t=426)** So how would we handle it through the lens of our subject, causal modeling?
>
> **[7:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/simpson-s-paradox?u=76281980&t=433)** How do you resolve the problem?
>
> **[7:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/simpson-s-paradox?u=76281980&t=435)** Well, 85 different P values isn't going to fix it.
>
> **[7:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/simpson-s-paradox?u=76281980&t=438)** You need a causal diagram.
>
> **[7:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/simpson-s-paradox?u=76281980&t=440)** If you were to draw this as a causal diagram, it would look something like this, with B causing both A and C.
>
> **[7:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/simpson-s-paradox?u=76281980&t=448)** We've seen that before.
>
> **[7:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/simpson-s-paradox?u=76281980&t=450)** We know that when B causes both A and C, it can create a confound.
>
> **[7:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/simpson-s-paradox?u=76281980&t=455)** In fact, it was the famous shark ice cream example looked just like this.
>
> **[7:41](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/simpson-s-paradox?u=76281980&t=461)** So for this particular example, it would look like this, gender causing both department and admission, because we're testing the hypothesis that gender is correlated with admission, but we know for a fact gender is a major impact on which department they apply to.
>
> **[7:59](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/simpson-s-paradox?u=76281980&t=479)** And we further know that the difficulty of getting into those departments is well established in the data.
>
> **[8:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/simpson-s-paradox?u=76281980&t=486)** When you have this, that gender is associated with both of the other two variables, you've got yourself a problem.
>
> **[8:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/simpson-s-paradox?u=76281980&t=493)** Now Judea Pearl and his colleagues have some techniques to deal with this, and we'll see them soon enough, but we'll have to wait until we discuss Bayesian networks to fully understand that approach.
>
> **[8:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/simpson-s-paradox?u=76281980&t=506)** And the time for that will come in the final section of the course.
>
> **[8:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/simpson-s-paradox?u=76281980&t=510)** For now, keep in mind that control variables are powerful, but they can complicate significance testing, so control variables have to be handled with care.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Probability]] (2), [[Zoom]] (1), [[Decision-Making]] (1), [[Statistics]] (1)
> **Warnings:** keep in mind (2), note that (1)
> **CLI Commands:** find (2)
> **Definitions:** is an  (1), is a  (1)
> **Analogies:** for instance (1), just like (1)
> **Cross-References:** later in (1)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Moderation, mediation, or a third variable](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/challenge-moderation-mediation-or-a-third-variable?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/challenge-moderation-mediation-or-a-third-variable?u=76281980&t=0)** - [Instructor] Okay, I'm in [[Microsoft Excel|Excel]] with a new data set and it's time for another challenge.
>
> **[0:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/challenge-moderation-mediation-or-a-third-variable?u=76281980&t=11)** So we've switched to a different one now, it's called Bank Salaries Causality and I'm going to provide the data set for you.
>
> **[0:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/challenge-moderation-mediation-or-a-third-variable?u=76281980&t=18)** However, you don't really need the data set if you choose not to go in there.
>
> **[0:24](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/challenge-moderation-mediation-or-a-third-variable?u=76281980&t=24)** Let me orient you to it first, but I'm going to show you an image and really all you need is the image and to take a look at it to do the solution.
>
> **[0:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/challenge-moderation-mediation-or-a-third-variable?u=76281980&t=37)** But if you want to, you can open the data set.
>
> **[0:39](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/challenge-moderation-mediation-or-a-third-variable?u=76281980&t=39)** So what we have is beginning salary, current salary and a number of other variables.
>
> **[0:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/challenge-moderation-mediation-or-a-third-variable?u=76281980&t=45)** There is a tab here that gives you a little bit of information about the variables.
>
> **[0:52](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/challenge-moderation-mediation-or-a-third-variable?u=76281980&t=52)** And what we're going to do is determine whether or not we think we see mediation, moderation or some third variable issue.
>
> **[1:02](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/challenge-moderation-mediation-or-a-third-variable?u=76281980&t=62)** Okay, here's the image.
>
> **[1:04](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/challenge-moderation-mediation-or-a-third-variable?u=76281980&t=64)** We've got beginning salary in the Y axis, we have education level in the X axis and this is the data that you were just looking at.
>
> **[1:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/challenge-moderation-mediation-or-a-third-variable?u=76281980&t=74)** Now, the higher of the two lines is the blue line and that represents the men, and the lower of the two lines is the green line and that represents the women.
>
> **[1:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/challenge-moderation-mediation-or-a-third-variable?u=76281980&t=88)** So you got three variables, you have a dependent variable, beginning salary, you have an independent variable, education level, and you have another independent variable, gender.
>
> **[1:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/challenge-moderation-mediation-or-a-third-variable?u=76281980&t=98)** So here's the question.
>
> **[1:40](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/challenge-moderation-mediation-or-a-third-variable?u=76281980&t=100)** When you look at this, do you see mediation, moderation or the third variable problem?
>
> **[1:50](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/challenge-moderation-mediation-or-a-third-variable?u=76281980&t=110)** And then just spend a couple of minutes on that.
>
> **[1:53](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/challenge-moderation-mediation-or-a-third-variable?u=76281980&t=113)** And again, you're welcome to look at the data if you choose.
>
> **[1:55](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/challenge-moderation-mediation-or-a-third-variable?u=76281980&t=115)** And after that, if you care to, do you see the potential for any other issues, maybe not these three variables but when you look at the dataset, do you see any other issues?
>
> **[2:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/challenge-moderation-mediation-or-a-third-variable?u=76281980&t=125)** That's kind of an optional second question.
>
> **[2:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/challenge-moderation-mediation-or-a-third-variable?u=76281980&t=128)** Okay, so look it over.
>
> **[2:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/challenge-moderation-mediation-or-a-third-variable?u=76281980&t=130)** Again, you don't have to spend a lot of time and next we'll do the solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (1)
> **UI Navigation:** open the (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Moderation, mediation, or a third variable](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/solution-moderation-mediation-or-a-third-variable?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/solution-moderation-mediation-or-a-third-variable?u=76281980&t=0)** (upbeat electronic intro)
>
> **[0:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/solution-moderation-mediation-or-a-third-variable?u=76281980&t=5)** - [Instructor] Okay, so now our solution.
>
> **[0:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/solution-moderation-mediation-or-a-third-variable?u=76281980&t=7)** The question was, and you really can use just this image, are we looking at mediation, moderation or is there some third variable?
>
> **[0:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/solution-moderation-mediation-or-a-third-variable?u=76281980&t=17)** Now, remember if it's a lurking variable, it might not even be in the dataset at all.
>
> **[0:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/solution-moderation-mediation-or-a-third-variable?u=76281980&t=21)** It might be something that we weren't able to measure or not able to get access to.
>
> **[0:25](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/solution-moderation-mediation-or-a-third-variable?u=76281980&t=25)** But in this case, we can give a straightforward answer I believe.
>
> **[0:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/solution-moderation-mediation-or-a-third-variable?u=76281980&t=30)** Gender is acting as a moderator.
>
> **[0:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/solution-moderation-mediation-or-a-third-variable?u=76281980&t=34)** How can we safely say that?
>
> **[0:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/solution-moderation-mediation-or-a-third-variable?u=76281980&t=35)** Well, there's a relationship between education level and beginning salary but the line for men, the blue line is steeper.
>
> **[0:46](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/solution-moderation-mediation-or-a-third-variable?u=76281980&t=46)** So there's been a change in the relationship.
>
> **[0:48](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/solution-moderation-mediation-or-a-third-variable?u=76281980&t=48)** It doesn't have to be a difference in direction.
>
> **[0:50](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/solution-moderation-mediation-or-a-third-variable?u=76281980&t=50)** You do not have to have a situation where as education goes up, salary goes up for men but that somehow, as education goes up, it goes down for women.
>
> **[1:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/solution-moderation-mediation-or-a-third-variable?u=76281980&t=60)** That's not a requirement as long as we have a change in the rate that's noteworthy.
>
> **[1:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/solution-moderation-mediation-or-a-third-variable?u=76281980&t=66)** And if you were to test this, you would find that there's a significant difference.
>
> **[1:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/solution-moderation-mediation-or-a-third-variable?u=76281980&t=69)** So gender is moderating the relationship between education level and beginning salary.
>
> **[1:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/solution-moderation-mediation-or-a-third-variable?u=76281980&t=76)** And you could verify that by actually measuring the regression line, looking at those slopes and you'd be able to find a significant difference in slopes between the slope for men and the slope for women.
>
> **[1:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/solution-moderation-mediation-or-a-third-variable?u=76281980&t=88)** But let's go back over to the dataset.
>
> **[1:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/solution-moderation-mediation-or-a-third-variable?u=76281980&t=91)** But in the dataset, let's briefly speculate just by way of review.
>
> **[1:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/solution-moderation-mediation-or-a-third-variable?u=76281980&t=96)** We definitely could have a situation where what's going on with the salaries for women is that they're not being considered for certain jobs.
>
> **[1:48](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/solution-moderation-mediation-or-a-third-variable?u=76281980&t=108)** If you look at this data set and I actually use this data set for some examples in my regression course, if you dig deeper into this, you'll find that women simply aren't being hired for the executive positions.
>
> **[2:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/solution-moderation-mediation-or-a-third-variable?u=76281980&t=121)** This is a real data set by the way.
>
> **[2:03](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/solution-moderation-mediation-or-a-third-variable?u=76281980&t=123)** It's quite a few years old now but the bank was actually sued by women in minority at the bank, and they were able to win the suit.
>
> **[2:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/solution-moderation-mediation-or-a-third-variable?u=76281980&t=131)** So if you look, it could be the mechanism by which the bank is discriminating against women, could be in the hiring in positions more so than the salary, right?
>
> **[2:24](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/solution-moderation-mediation-or-a-third-variable?u=76281980&t=144)** And if that's your hypothesis, you might make the claim gender is influencing jobcat at hire.
>
> **[2:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/solution-moderation-mediation-or-a-third-variable?u=76281980&t=155)** Jobcat is strongly correlated to salary, but that three way relationship, A causes B causes C, might diminish if you controlled for it, the direct relationship of gender to salary, if you remove the influence of jobcat.
>
> **[2:54](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/solution-moderation-mediation-or-a-third-variable?u=76281980&t=174)** And that would make it not a moderator, but a mediator.
>
> **[2:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/solution-moderation-mediation-or-a-third-variable?u=76281980&t=177)** And you may, if you looked at the variables have seen that it would take you quite a while to prove that with regression so we're not going to do anything like that now.
>
> **[3:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/solution-moderation-mediation-or-a-third-variable?u=76281980&t=187)** But again, this is a great data set to look at those kinds of issues and things like interaction terms.
>
> **[3:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/solution-moderation-mediation-or-a-third-variable?u=76281980&t=193)** So based on the image, we saw evidence of a moderator and somewhat of a speculation.
>
> **[3:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/solution-moderation-mediation-or-a-third-variable?u=76281980&t=200)** There may be some evidence of a mediator as well, but involving different variables.

> [!info]- Semantic Content
>
> **CLI Commands:** find (3), make (2)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)


### 2. Conditional Probability and Bayes' Theorem

[↑ Back to Table of Contents](#table-of-contents)

#### [Turing, Enigma, and CAPTCHA](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/turing-enigma-and-captcha?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/turing-enigma-and-captcha?u=76281980&t=0)** - [Instructor] Alan Turing led a tragically short but remarkable life.
>
> **[0:04](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/turing-enigma-and-captcha?u=76281980&t=4)** He has a presence in popular culture with several biographies, multiple films made about him, and recently, he's on the British 50 pound note.
>
> **[0:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/turing-enigma-and-captcha?u=76281980&t=14)** In computer science, he's most famous for three things, Turing machines, the Turing test, and cracking the Enigma code during World War II.
>
> **[0:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/turing-enigma-and-captcha?u=76281980&t=26)** Turing machines were a thought experiment where Turing described digital computers decades before they existed, and this was back in the '30s.
>
> **[0:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/turing-enigma-and-captcha?u=76281980&t=37)** As an undergrad, I remember studying Turing machines, and I'd have to imitate their behavior on paper on homework assignments and on exams.
>
> **[0:47](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/turing-enigma-and-captcha?u=76281980&t=47)** The Turing test, which is referred to as the imitation game in the movie of the same name, is a way of evaluating the progress of [[Artificial Intelligence (AI)|artificial intelligence]].
>
> **[0:58](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/turing-enigma-and-captcha?u=76281980&t=58)** Keep in mind, Turing came up with this concept long before we felt we had made any progress in AI.
>
> **[1:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/turing-enigma-and-captcha?u=76281980&t=68)** During a Turing test, one interacts with either a computer or a human through remote communication, and you have to guess which one they are.
>
> **[1:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/turing-enigma-and-captcha?u=76281980&t=79)** Finally, he was instrumental, along with several others, in cracking the code used by the German Navy during World War II.
>
> **[1:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/turing-enigma-and-captcha?u=76281980&t=88)** To be clear, this was actually a machine that produced the codes.
>
> **[1:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/turing-enigma-and-captcha?u=76281980&t=92)** We'll have more to say about this during the course.
>
> **[1:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/turing-enigma-and-captcha?u=76281980&t=95)** Cracking that code was critical to do because only a small fraction of the food necessary to survive was available in England during the war.
>
> **[1:46](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/turing-enigma-and-captcha?u=76281980&t=106)** It had to be brought in by ship, so without Turing, his colleagues, and this achievement, England might have lost the war, and it's the primary reason he's been recently portrayed on British currency.
>
> **[2:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/turing-enigma-and-captcha?u=76281980&t=121)** A less well-known fact about him is particularly relevant to our course, and it's how he did it.
>
> **[2:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/turing-enigma-and-captcha?u=76281980&t=129)** It turns out that Turing was a Bayesian and used Bayesian methods to help crack Enigma.
>
> **[2:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/turing-enigma-and-captcha?u=76281980&t=137)** Bayesian [[Statistics]] is a major theme of this course.
>
> **[2:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/turing-enigma-and-captcha?u=76281980&t=142)** There's something else that you may not connect with Turing that's very interesting indeed.
>
> **[2:27](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/turing-enigma-and-captcha?u=76281980&t=147)** We've all experienced CAPTCHA, where you have to perform a test to convince a website that you're not a bot.
>
> **[2:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/turing-enigma-and-captcha?u=76281980&t=155)** Well, that's a kind of Turing test.
>
> **[2:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/turing-enigma-and-captcha?u=76281980&t=157)** From a Bayesian point of view, which is all about updating probabilities, before you do the test, the probabilities indicate that they aren't sure if you're a bot or not, but if you perform the test, the probabilities adjust and you're allowed to enter the site.
>
> **[2:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/turing-enigma-and-captcha?u=76281980&t=177)** The term CAPTCHA is an acronym which actually means completely automated public Turing test to tell computers and humans apart.
>
> **[3:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/turing-enigma-and-captcha?u=76281980&t=189)** The term was coined back in 2000 by a team at Carnegie Mellon who came up with CAPTCHA.
>
> **[3:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/turing-enigma-and-captcha?u=76281980&t=196)** So how did he crack the Enigma machine?
>
> **[3:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/turing-enigma-and-captcha?u=76281980&t=201)** Well, he used Bayesian techniques, as we've mentioned, which is really just a method of updating probabilities based on new information.
>
> **[3:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/turing-enigma-and-captcha?u=76281980&t=208)** We'll discuss this in more detail a bit later but the quick version is that he used a process of elimination.
>
> **[3:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/turing-enigma-and-captcha?u=76281980&t=216)** Each time he learned a new clue, he was able to update the probabilities and narrow in on his solution.
>
> **[3:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/turing-enigma-and-captcha?u=76281980&t=223)** If you've seen the movie, which, like most movies, is not really a documentary, but it is based on fact, you might recall that he had to do this all over again every 24 hours because each night, the machines would be put into new secret settings that made the previous day's work useless.
>
> **[4:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/turing-enigma-and-captcha?u=76281980&t=245)** We'll have more to say about this as well in the next video.
>
> **[4:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/turing-enigma-and-captcha?u=76281980&t=250)** Finally, Turing came up with a measure of uncertainty.
>
> **[4:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/turing-enigma-and-captcha?u=76281980&t=254)** He wanted this because he had to measure how much progress he was making with each clue on his Enigma project.
>
> **[4:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/turing-enigma-and-captcha?u=76281980&t=263)** He knew how fast the computers of his day were, which, as you might imagine, were mechanical and much, much slower than today's digital machines.
>
> **[4:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/turing-enigma-and-captcha?u=76281980&t=274)** So he had to try a huge number of possible machine settings each day using these machines that weren't very fast.
>
> **[4:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/turing-enigma-and-captcha?u=76281980&t=283)** If he didn't narrow down the possibilities enough to complete his search in 24 hours, he wasn't going to succeed.
>
> **[4:51](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/turing-enigma-and-captcha?u=76281980&t=291)** He came up with a term for this, a term for measuring information gain that you likely haven't heard, a ban.
>
> **[5:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/turing-enigma-and-captcha?u=76281980&t=300)** You could also think of information gain as a measure of how much the uncertainty was going down.
>
> **[5:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/turing-enigma-and-captcha?u=76281980&t=308)** Even if you haven't heard of Turing's ban, I bet you've heard a different [[Microsoft Word|word]] for a similar concept, a bit.
>
> **[5:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/turing-enigma-and-captcha?u=76281980&t=318)** Turing and Claude Shannon were contemporaries.
>
> **[5:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/turing-enigma-and-captcha?u=76281980&t=322)** They were both codebreakers and they knew each other, but they couldn't talk about their codebreaking because it was classified so they independently came up with similar ideas.
>
> **[5:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/turing-enigma-and-captcha?u=76281980&t=334)** Often called the father of information theory, Shannon is not a household name but he probably should be.
>
> **[5:42](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/turing-enigma-and-captcha?u=76281980&t=342)** Around the same time, they each developed a way of quantifying information.
>
> **[5:48](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/turing-enigma-and-captcha?u=76281980&t=348)** We'll have more to say about this as well in a later video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Artificial Intelligence (AI)|Artificial intelligence]] (1), [[Statistics]] (1), [[Microsoft Word|Word]] (1)
> **Env Vars:** captcha (3)
> **Definitions:** is a  (2), is an  (1)
> **Cross-References:** in the next (1)
> **Analogies:** imagine (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Enigma and uncertainty](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/enigma-and-uncertainty?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/enigma-and-uncertainty?u=76281980&t=0)** - [Instructor] Let's talk just a little bit about how the Enigma machine worked and then about how Turing broke the code with Bayesian techniques.
>
> **[0:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/enigma-and-uncertainty?u=76281980&t=11)** With Enigma, you would press a letter just like a typewriter, and it would light up, indicating what the encrypted letter would be.
>
> **[0:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/enigma-and-uncertainty?u=76281980&t=20)** The intended recipient of the message would do the reverse to decrypt it.
>
> **[0:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/enigma-and-uncertainty?u=76281980&t=26)** They would type in the coded message and the decrypted letter would light up.
>
> **[0:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/enigma-and-uncertainty?u=76281980&t=31)** Every time you hit the key, the rotors would turn.
>
> **[0:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/enigma-and-uncertainty?u=76281980&t=35)** So if you typed A, A, A, you would actually get three different letters.
>
> **[0:42](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/enigma-and-uncertainty?u=76281980&t=42)** To make it more complicated, there was a set of rotors.
>
> **[0:46](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/enigma-and-uncertainty?u=76281980&t=46)** So you might have only three rotors in the machine, but there was a set of eight.
>
> **[0:53](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/enigma-and-uncertainty?u=76281980&t=53)** Both sides of the conversation would have to know which rotors to use.
>
> **[1:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/enigma-and-uncertainty?u=76281980&t=60)** I'm afraid it gets more complicated than that.
>
> **[1:03](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/enigma-and-uncertainty?u=76281980&t=63)** There was also a plug board, and again both sides of the conversation would have to be in agreement as to how that was set up.
>
> **[1:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/enigma-and-uncertainty?u=76281980&t=73)** If you want to try to picture how the plug board was used, it was like an old style telephone switchboard.
>
> **[1:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/enigma-and-uncertainty?u=76281980&t=81)** So if you were trying to listen in on a conversation that you weren't part of, exactly what Turing was trying to do, you had to guess.
>
> **[1:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/enigma-and-uncertainty?u=76281980&t=92)** But it was hard to guess because it took longer to try all of the possibilities than you had time.
>
> **[1:39](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/enigma-and-uncertainty?u=76281980&t=99)** Every 24 hours or so they would change all of the settings.
>
> **[1:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/enigma-and-uncertainty?u=76281980&t=105)** So Turing built a computer, but it wasn't made with silicon computer chips.
>
> **[1:52](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/enigma-and-uncertainty?u=76281980&t=112)** This was decades and decades ago.
>
> **[1:54](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/enigma-and-uncertainty?u=76281980&t=114)** It was a bigger, heavy metal wall of equipment with cords, dials, and machinery.
>
> **[2:02](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/enigma-and-uncertainty?u=76281980&t=122)** So it wasn't as fast as a modern digital computer.
>
> **[2:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/enigma-and-uncertainty?u=76281980&t=126)** He called it a bombe, B-O-M-B-E.
>
> **[2:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/enigma-and-uncertainty?u=76281980&t=130)** If that sounds like an unusual name, it's actually named after an earlier device that was developed by Polish cryptographers.
>
> **[2:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/enigma-and-uncertainty?u=76281980&t=140)** They were also trying to do the same thing, crack Enigma.
>
> **[2:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/enigma-and-uncertainty?u=76281980&t=146)** Alan Hodge's amazing biography of Turing, The Enigma, explains all of this in detail, but a shorter easier explanation appears in the book, The Theory That Would Not Die, which is about the history of Bayesian [[Statistics]].
>
> **[2:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/enigma-and-uncertainty?u=76281980&t=164)** The author writes, "One of Turing's first jobs was "to reduce the number of tests a bombe had to conduct."
>
> **[2:51](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/enigma-and-uncertainty?u=76281980&t=171)** Although it was fast it took 18 minutes to test a possible wheel setting.
>
> **[2:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/enigma-and-uncertainty?u=76281980&t=177)** Assuming the worst, a bombe would need four days to test all possible wheel permutations on an Enigma.
>
> **[3:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/enigma-and-uncertainty?u=76281980&t=186)** Turing used the fact that certain words almost always appeared in the messages.
>
> **[3:12](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/enigma-and-uncertainty?u=76281980&t=192)** For instance, the German [[Microsoft Word|word]] for one, eine, appeared in 90% of Enigma messages.
>
> **[3:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/enigma-and-uncertainty?u=76281980&t=201)** It would let him guess a stretch of letters, using Bayesian methods to assess their probabilities and add more clues as they arrived.
>
> **[3:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/enigma-and-uncertainty?u=76281980&t=212)** If it worked, it would identify three of Enigma's three wheels, and reduce the number of wheel settings from 336 to as few as 18.
>
> **[3:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/enigma-and-uncertainty?u=76281980&t=225)** So critical in his use of Bayes, Turing was trying to reduce these possibilities to a more manageable number.
>
> **[3:54](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/enigma-and-uncertainty?u=76281980&t=234)** The author of the book Sharon Bertsch McGrayne, considers Turing, among his other achievements to be the father of the modern Bayesian revival.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Statistics]] (1), [[Microsoft Word|Word]] (1)
> **Analogies:** just like (1), picture (1), for instance (1)
> **CLI Commands:** make (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Developing an intuition for Bayes with Wordle](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/developing-an-intuition-for-bayes-with-wordle?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/developing-an-intuition-for-bayes-with-wordle?u=76281980&t=0)** - [Lecturer] There's a fun way to explore what Turing was up to when he was trying to crack Enigma.
>
> **[0:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/developing-an-intuition-for-bayes-with-wordle?u=76281980&t=7)** And it also allows us to talk a bit about Bayes' and about concepts like conditional [[Probability]].
>
> **[0:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/developing-an-intuition-for-bayes-with-wordle?u=76281980&t=14)** It's a game and it's called Wordle.
>
> **[0:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/developing-an-intuition-for-bayes-with-wordle?u=76281980&t=17)** You may be familiar with this.
>
> **[0:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/developing-an-intuition-for-bayes-with-wordle?u=76281980&t=19)** It's a game that's been popular through The New York Times.
>
> **[0:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/developing-an-intuition-for-bayes-with-wordle?u=76281980&t=23)** So how does it work?
>
> **[0:24](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/developing-an-intuition-for-bayes-with-wordle?u=76281980&t=24)** Well, you have to guess five-letter words and you get six guesses to do it, but they have to be words in a list.
>
> **[0:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/developing-an-intuition-for-bayes-with-wordle?u=76281980&t=33)** So for instance, you can't do a nonsense [[Microsoft Word|word]].
>
> **[0:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/developing-an-intuition-for-bayes-with-wordle?u=76281980&t=36)** You couldn't do X-Y-Z-V-B, just some letters at random.
>
> **[0:42](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/developing-an-intuition-for-bayes-with-wordle?u=76281980&t=42)** It says not in a list.
>
> **[0:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/developing-an-intuition-for-bayes-with-wordle?u=76281980&t=45)** And you can't do all vowels even though AEIOU would actually be pretty handy as we'll see in a moment.
>
> **[0:55](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/developing-an-intuition-for-bayes-with-wordle?u=76281980&t=55)** Again, it won't let you do this.
>
> **[0:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/developing-an-intuition-for-bayes-with-wordle?u=76281980&t=57)** So it has to be in the word in the list, but you can be fairly flexible.
>
> **[1:02](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/developing-an-intuition-for-bayes-with-wordle?u=76281980&t=62)** So it has to be a word in the list, but you'd be surprised, there are some unusual words that would qualify.
>
> **[1:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/developing-an-intuition-for-bayes-with-wordle?u=76281980&t=70)** So how would you go about tackling this?
>
> **[1:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/developing-an-intuition-for-bayes-with-wordle?u=76281980&t=74)** Just in general, just for the fun of playing a game, but also through this lens of trying to understand how you would crack a code or understand Bayesian methods.
>
> **[1:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/developing-an-intuition-for-bayes-with-wordle?u=76281980&t=86)** Well, one thing you could certainly try is a very common word.
>
> **[1:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/developing-an-intuition-for-bayes-with-wordle?u=76281980&t=92)** So for instance, maybe you would do something like their, possessive, or there, T-H-E-R-E.
>
> **[1:41](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/developing-an-intuition-for-bayes-with-wordle?u=76281980&t=101)** Those would be common words.
>
> **[1:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/developing-an-intuition-for-bayes-with-wordle?u=76281980&t=103)** So the idea would be if they're common words, then maybe that's a good guess.
>
> **[1:47](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/developing-an-intuition-for-bayes-with-wordle?u=76281980&t=107)** The problem is, though, that doesn't necessarily help you solve the puzzle in six tries.
>
> **[1:54](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/developing-an-intuition-for-bayes-with-wordle?u=76281980&t=114)** So one thing that a lot of people talk about is what's a word that has a lot of common letters in it.
>
> **[2:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/developing-an-intuition-for-bayes-with-wordle?u=76281980&t=121)** And if you research this online, you'll find that a lot of people argue that crane is a good first guess.
>
> **[2:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/developing-an-intuition-for-bayes-with-wordle?u=76281980&t=129)** It's got a couple of common vowels and a couple of common consonants.
>
> **[2:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/developing-an-intuition-for-bayes-with-wordle?u=76281980&t=134)** So let's explore this.
>
> **[2:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/developing-an-intuition-for-bayes-with-wordle?u=76281980&t=136)** I'm actually going to show you some completed games.
>
> **[2:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/developing-an-intuition-for-bayes-with-wordle?u=76281980&t=141)** So here's a completed game starting with crane and I want to indicate the color coding.
>
> **[2:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/developing-an-intuition-for-bayes-with-wordle?u=76281980&t=146)** So yellow indicates that those letters are in the puzzle, but they're not in the proper place.
>
> **[2:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/developing-an-intuition-for-bayes-with-wordle?u=76281980&t=154)** And green indicates that the letter is present and it belongs in that spot.
>
> **[2:40](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/developing-an-intuition-for-bayes-with-wordle?u=76281980&t=160)** So that's how you do it.
>
> **[2:42](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/developing-an-intuition-for-bayes-with-wordle?u=76281980&t=162)** So crane indicated that C and A were both in the puzzle.
>
> **[2:47](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/developing-an-intuition-for-bayes-with-wordle?u=76281980&t=167)** So why did I not choose C or A for the second word?
>
> **[2:55](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/developing-an-intuition-for-bayes-with-wordle?u=76281980&t=175)** Well, there's actually a rule regarding this.
>
> **[2:59](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/developing-an-intuition-for-bayes-with-wordle?u=76281980&t=179)** The rule is that if you're in Difficult mode, you have to use the C and the A, but it's actually easier to complete this in six guesses if you go in a completely different direction with your second clue.
>
> **[3:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/developing-an-intuition-for-bayes-with-wordle?u=76281980&t=197)** Again, remember that Turing was trying to eliminate possibilities, so if we kept on guessing C and A, we get no additional information content from the second clue to the third and fourth and so on.
>
> **[3:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/developing-an-intuition-for-bayes-with-wordle?u=76281980&t=213)** So it's actually better for us to go in a completely different direction.
>
> **[3:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/developing-an-intuition-for-bayes-with-wordle?u=76281980&t=217)** Let me go back to Wordle and show you this.
>
> **[3:41](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/developing-an-intuition-for-bayes-with-wordle?u=76281980&t=221)** A lot of people don't know about this rule.
>
> **[3:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/developing-an-intuition-for-bayes-with-wordle?u=76281980&t=224)** I'm going to the settings in the Wordle game.
>
> **[3:47](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/developing-an-intuition-for-bayes-with-wordle?u=76281980&t=227)** And what you see is so-called Hard mode which is turned off, reads, and it's a small font I know, any revealed hints must be used in subsequent guesses.
>
> **[4:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/developing-an-intuition-for-bayes-with-wordle?u=76281980&t=241)** But if we were to do that, it really is much more difficult because the ideal strategy is to have very disparate guesses and eliminate as many letters as possible.
>
> **[4:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/developing-an-intuition-for-bayes-with-wordle?u=76281980&t=253)** This increases the odds that you're going to achieve the correct guess in your six allowed guesses.
>
> **[4:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/developing-an-intuition-for-bayes-with-wordle?u=76281980&t=262)** So spoil does just that.
>
> **[4:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/developing-an-intuition-for-bayes-with-wordle?u=76281980&t=266)** It allows an O and an I, vowels that weren't in the top one.
>
> **[4:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/developing-an-intuition-for-bayes-with-wordle?u=76281980&t=271)** And then next thing you know, we know that we have a C, we know that we have an A, we know that we have an I.
>
> **[4:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/developing-an-intuition-for-bayes-with-wordle?u=76281980&t=278)** By the third guess, we've figured out where the C and the I have to be and this is where, if you're anything like me, you have to pause for a couple of minutes and think about what words might fill that.
>
> **[4:52](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/developing-an-intuition-for-bayes-with-wordle?u=76281980&t=292)** And I managed to guess that on the fourth try with the word tacit.
>
> **[4:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/developing-an-intuition-for-bayes-with-wordle?u=76281980&t=297)** I was trying to come up with words that would have a C in the third place and an I in the fourth place.
>
> **[5:03](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/developing-an-intuition-for-bayes-with-wordle?u=76281980&t=303)** So what I'd like to do now is talk about my favorite starting word.
>
> **[5:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/developing-an-intuition-for-bayes-with-wordle?u=76281980&t=308)** If crane is one of the most popular starting words on the web, I like to start with adieu.
>
> **[5:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/developing-an-intuition-for-bayes-with-wordle?u=76281980&t=315)** Why?
>
> **[5:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/developing-an-intuition-for-bayes-with-wordle?u=76281980&t=316)** It's got A, I, E, U in it, so as you can see here, with the very first guess, I've narrowed down the vowels pretty well.
>
> **[5:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/developing-an-intuition-for-bayes-with-wordle?u=76281980&t=326)** So why go with a word like worts?
>
> **[5:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/developing-an-intuition-for-bayes-with-wordle?u=76281980&t=328)** Well, A and E are two vowels.
>
> **[5:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/developing-an-intuition-for-bayes-with-wordle?u=76281980&t=334)** Two vowels is probably the number of vowels I'm going to have in a five-word guess.
>
> **[5:39](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/developing-an-intuition-for-bayes-with-wordle?u=76281980&t=339)** So what I'm trying to do is trying to find out what other letters I can eliminate.
>
> **[5:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/developing-an-intuition-for-bayes-with-wordle?u=76281980&t=345)** So worts is an ingredient in beer.
>
> **[5:49](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/developing-an-intuition-for-bayes-with-wordle?u=76281980&t=349)** So it just happened to have the letters I needed for my guess.
>
> **[5:53](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/developing-an-intuition-for-bayes-with-wordle?u=76281980&t=353)** And then next thing you know, we have A, E, and S, and we can start filling them in.
>
> **[6:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/developing-an-intuition-for-bayes-with-wordle?u=76281980&t=360)** So why apple?
>
> **[6:02](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/developing-an-intuition-for-bayes-with-wordle?u=76281980&t=362)** Really just to get some other letters in there.
>
> **[6:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/developing-an-intuition-for-bayes-with-wordle?u=76281980&t=365)** Reflecting back on this particular game, I don't think apple was a tremendous guess, but happened to get lucky because by that stage, we know that there's an A, there's an E, there's a P, there's an L.
>
> **[6:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/developing-an-intuition-for-bayes-with-wordle?u=76281980&t=379)** The inspiration for apple was probably trying to get A and E in different places to try to figure out where in the word they occurred, which of course is part of the game.
>
> **[6:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/developing-an-intuition-for-bayes-with-wordle?u=76281980&t=392)** Now, this is going to get interesting because we're going to spend some time talking about the letter O.
>
> **[6:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/developing-an-intuition-for-bayes-with-wordle?u=76281980&t=397)** If you use adieu as an opening clue, then if none of them come up, which happens, you probably have an O or possibly a Y or also the possibility of two Os, which makes things tricky.
>
> **[6:56](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/developing-an-intuition-for-bayes-with-wordle?u=76281980&t=416)** So why guess corks?
>
> **[7:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/developing-an-intuition-for-bayes-with-wordle?u=76281980&t=420)** Just simply because A, I, E, and U didn't come up, so there's got to be an O in there somewhere and trying to eliminate some consonants.
>
> **[7:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/developing-an-intuition-for-bayes-with-wordle?u=76281980&t=431)** The third guess was out of this concern that maybe there's a double O somewhere in the word, something that's not terribly uncommon in English.
>
> **[7:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/developing-an-intuition-for-bayes-with-wordle?u=76281980&t=441)** So having to rule out that possibility that again with the fourth guess wrong, trying to eliminate some consonants, narrowing down on where things are.
>
> **[7:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/developing-an-intuition-for-bayes-with-wordle?u=76281980&t=451)** It looks like we didn't have a double O, but we have an O in the middle.
>
> **[7:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/developing-an-intuition-for-bayes-with-wordle?u=76281980&t=455)** You take all those clues together and the guess was thorn.
>
> **[7:39](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/developing-an-intuition-for-bayes-with-wordle?u=76281980&t=459)** But the fifth guess, so cutting it a bit close with that one.
>
> **[7:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/developing-an-intuition-for-bayes-with-wordle?u=76281980&t=463)** Take a look at this.
>
> **[7:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/developing-an-intuition-for-bayes-with-wordle?u=76281980&t=464)** This is one of those instances where a double O becomes a real possibility.
>
> **[7:49](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/developing-an-intuition-for-bayes-with-wordle?u=76281980&t=469)** So starting with adieu.
>
> **[7:50](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/developing-an-intuition-for-bayes-with-wordle?u=76281980&t=470)** Again, none of the letters coming up.
>
> **[7:52](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/developing-an-intuition-for-bayes-with-wordle?u=76281980&t=472)** Tried stoop to eliminate right off the bat the possibility of a double O.
>
> **[7:59](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/developing-an-intuition-for-bayes-with-wordle?u=76281980&t=479)** Why?
>
> **[8:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/developing-an-intuition-for-bayes-with-wordle?u=76281980&t=480)** It's not that it's overall that common, but it becomes more common now that you've eliminated adieu.
>
> **[8:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/developing-an-intuition-for-bayes-with-wordle?u=76281980&t=488)** So tried the double O without success, but ended up discovering that S, T, and O are the initial three letters.
>
> **[8:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/developing-an-intuition-for-bayes-with-wordle?u=76281980&t=496)** So generally speaking, guessing storm and then stork and so on can be very risky because you could run out of guesses, you're not gaining a lot of information content.
>
> **[8:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/developing-an-intuition-for-bayes-with-wordle?u=76281980&t=508)** But with four letters in the proper sequence and only one letter to go, it seemed like the appropriate step.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (12), [[Probability]] (1)
> **Definitions:** is a  (2), is an  (1)
> **CLI Commands:** find (2)
> **Cross-References:** go back to (1), coming up (1)
> **Analogies:** for instance (2)
> **Env Vars:** aeiou (1)
> **Speakers:** - [lecturer] (1)

#### [Wordle and conditional probability](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-and-conditional-probability?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-and-conditional-probability?u=76281980&t=0)** - [Instructor] I've put together a little spreadsheet with 500 five letter words, just as a simple way to practice some math regarding conditional [[Probability]] in Bayes' rule and Wordle.
>
> **[0:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-and-conditional-probability?u=76281980&t=14)** So let me orient you to this.
>
> **[0:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-and-conditional-probability?u=76281980&t=17)** Across the top, there are some simple calculations that I've made like whether or not it has an A and it turns out there's 228 words out of 500 that have an A, whether it has an I, whether it has an E or whether it has a U.
>
> **[0:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-and-conditional-probability?u=76281980&t=31)** You may recognize that these are the vowels in the [[Microsoft Word|word]], adieu, which I've been using as a first guess.
>
> **[0:40](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-and-conditional-probability?u=76281980&t=40)** But then it gets a little bit more interesting in that this A I E U calculation is whether or not it has any of the letters or rather, how many of those letters it has, whether or not there's an O and whether or not there's more than one O.
>
> **[0:58](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-and-conditional-probability?u=76281980&t=58)** So what we're going to do now is practice the math behind marginal and conditional probabilities.
>
> **[1:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-and-conditional-probability?u=76281980&t=68)** So let's define a couple of terms and go over some notation.
>
> **[1:12](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-and-conditional-probability?u=76281980&t=72)** A marginal probability is the probability without reference to other variables.
>
> **[1:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-and-conditional-probability?u=76281980&t=78)** So for instance, we just saw the probability of having the letter A, but nothing else.
>
> **[1:25](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-and-conditional-probability?u=76281980&t=85)** A conditional probability on the other hand, is a probability given that another event has occurred.
>
> **[1:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-and-conditional-probability?u=76281980&t=92)** So if there is no letter A, does that increase the probability that there is a letter O?
>
> **[1:39](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-and-conditional-probability?u=76281980&t=99)** That's the kind of math we're going to be practicing.
>
> **[1:42](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-and-conditional-probability?u=76281980&t=102)** So a little bit of notation.
>
> **[1:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-and-conditional-probability?u=76281980&t=104)** When people want to say the probability of A, or rather, when you want to write that out, typically people will write P of A with parenths.
>
> **[1:54](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-and-conditional-probability?u=76281980&t=114)** Probability of B, P of B, straightforward enough.
>
> **[1:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-and-conditional-probability?u=76281980&t=117)** The main thing, actually that you have to orient yourself to, if you're not familiar with this notation is the use of the bar.
>
> **[2:04](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-and-conditional-probability?u=76281980&t=124)** The bar being there, sandwiched between the A and the B.
>
> **[2:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-and-conditional-probability?u=76281980&t=127)** So this is usually pronounced P of A given B.
>
> **[2:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-and-conditional-probability?u=76281980&t=133)** P of A given B.
>
> **[2:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-and-conditional-probability?u=76281980&t=136)** And what does that mean?
>
> **[2:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-and-conditional-probability?u=76281980&t=137)** That's the probability of A assuming that B is present or B is true.
>
> **[2:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-and-conditional-probability?u=76281980&t=143)** And then the last one is probability of B given A, and of course, those aren't the same thing.
>
> **[2:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-and-conditional-probability?u=76281980&t=149)** We're not referring to the probability of A and B.
>
> **[2:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-and-conditional-probability?u=76281980&t=154)** A and B and B and A would be the same thing.
>
> **[2:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-and-conditional-probability?u=76281980&t=157)** That's the intersection.
>
> **[2:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-and-conditional-probability?u=76281980&t=158)** We're not talking about that.
>
> **[2:40](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-and-conditional-probability?u=76281980&t=160)** We're talking about the probability of A given B and the probability of B given A, and those are two different things.
>
> **[2:47](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-and-conditional-probability?u=76281980&t=167)** So let's give this a try.
>
> **[2:49](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-and-conditional-probability?u=76281980&t=169)** If you refer to the spreadsheet, you can actually check this.
>
> **[2:53](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-and-conditional-probability?u=76281980&t=173)** There are 11 instances of double O.
>
> **[2:56](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-and-conditional-probability?u=76281980&t=176)** Now we're not doing this to master the game of Wordle or to do some kind of scientific assessment of word frequency.
>
> **[3:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-and-conditional-probability?u=76281980&t=185)** There's only 500 words in the list.
>
> **[3:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-and-conditional-probability?u=76281980&t=187)** It's just to practice the math.
>
> **[3:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-and-conditional-probability?u=76281980&t=189)** But nonetheless, there are 11 instances of O appearing twice out of 500 words.
>
> **[3:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-and-conditional-probability?u=76281980&t=197)** There's 41 instances of no A, no I, no E, no U.
>
> **[3:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-and-conditional-probability?u=76281980&t=206)** And then here's the interesting part.
>
> **[3:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-and-conditional-probability?u=76281980&t=208)** Are you ready?
>
> **[3:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-and-conditional-probability?u=76281980&t=209)** This is where it all comes together.
>
> **[3:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-and-conditional-probability?u=76281980&t=211)** The probability of double O given no A, I, E, U.
>
> **[3:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-and-conditional-probability?u=76281980&t=218)** And to be clear, this doesn't require that the O's are contiguous.
>
> **[3:42](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-and-conditional-probability?u=76281980&t=222)** The probability of two O's given no A, no I, no E, no U, is seven out of 41.
>
> **[3:54](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-and-conditional-probability?u=76281980&t=234)** So 11 out of 500 is 2.2%.
>
> **[3:59](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-and-conditional-probability?u=76281980&t=239)** Seven out of 41 is 17%.
>
> **[4:02](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-and-conditional-probability?u=76281980&t=242)** So the probability that you have two O's in there goes up dramatically if you determine that you don't have an A, you don't have an I, you don't have an E and you don't have a U.
>
> **[4:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-and-conditional-probability?u=76281980&t=256)** And that can be very useful if you're doing something like code breaking or something much more trivial like playing a game of Wordle.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Probability]] (17), [[Microsoft Word|Word]] (2)
> **Definitions:** is a  (2)
> **Versions:** 2.2 (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### [Wordle, bans, and bits](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-bans-and-bits?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-bans-and-bits?u=76281980&t=0)** - [Instructor] Let's revisit a concept from our discussion of Turing and Enigma, and then use Wordle to better understand it.
>
> **[0:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-bans-and-bits?u=76281980&t=9)** We mentioned that Turing needed some way of measuring his progress.
>
> **[0:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-bans-and-bits?u=76281980&t=15)** "The Theory That Would Not Die" tells the story.
>
> **[0:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-bans-and-bits?u=76281980&t=19)** Turing realized that he could not systematize his hunches or compare their probabilities without a unit of measurement.
>
> **[0:27](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-bans-and-bits?u=76281980&t=27)** He named his unit a ban.
>
> **[0:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-bans-and-bits?u=76281980&t=30)** One ban represented odds of 10 to 1 in favor of a guess.
>
> **[0:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-bans-and-bits?u=76281980&t=36)** We'll see how this works in a moment.
>
> **[0:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-bans-and-bits?u=76281980&t=38)** But Turing often dealt with much smaller quantities.
>
> **[0:42](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-bans-and-bits?u=76281980&t=42)** He called those decibans, or even centibans.
>
> **[0:47](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-bans-and-bits?u=76281980&t=47)** The ban was basically the same concept as the bit.
>
> **[0:53](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-bans-and-bits?u=76281980&t=53)** Of course, the bit is more famous today.
>
> **[0:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-bans-and-bits?u=76281980&t=57)** The bit, sometimes called the Shannon, is the measure of information Claude Shannon developed at roughly the same time at Bell Labs.
>
> **[1:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-bans-and-bits?u=76281980&t=67)** Okay, so here we are in our Wordle spreadsheet, and we're going to discuss how the concept of bans and bits can be helpful to us.
>
> **[1:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-bans-and-bits?u=76281980&t=76)** So column B is whether or not the [[Microsoft Word|word]] has an A.
>
> **[1:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-bans-and-bits?u=76281980&t=82)** So if I go down to the bottom, I've got a sum there, and there's 228 words out of 500 that have an A.
>
> **[1:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-bans-and-bits?u=76281980&t=91)** So let's remind ourselves of what columns we're talking about.
>
> **[1:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-bans-and-bits?u=76281980&t=96)** Column B is A, and then I, and then E, and then U.
>
> **[1:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-bans-and-bits?u=76281980&t=103)** So let's start with the bit.
>
> **[1:46](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-bans-and-bits?u=76281980&t=106)** A bit cuts our odds in half.
>
> **[1:50](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-bans-and-bits?u=76281980&t=110)** Now, where that's coming from is that, if you're storing a bunch of ones and zeroes, you have a 50% chance of guessing that.
>
> **[1:59](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-bans-and-bits?u=76281980&t=119)** So it's all about 1 out of 2.
>
> **[2:02](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-bans-and-bits?u=76281980&t=122)** So in this context, if we can drop the number of guesses from 500 down to 250, that would be 1 bit.
>
> **[2:12](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-bans-and-bits?u=76281980&t=132)** So if we learn, if all we know about it is that it has an A, that drops our guesses down to 228, and that's very close to 1 bit.
>
> **[2:24](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-bans-and-bits?u=76281980&t=144)** If we drop it down to 125, that would be 2 bits.
>
> **[2:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-bans-and-bits?u=76281980&t=150)** Cut it in half and then cut it in half again.
>
> **[2:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-bans-and-bits?u=76281980&t=154)** And if we could drop it down to 62 1/2, we'll just call that 63, that would be 3 bits.
>
> **[2:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-bans-and-bits?u=76281980&t=163)** So I think you can see where this is going.
>
> **[2:47](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-bans-and-bits?u=76281980&t=167)** Now, keep in mind that when we did the Wordle example earlier, we weren't just checking for one letter at a time, we we're using the clue adieu, A-D-I-E-U, and then getting all of that information.
>
> **[3:02](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-bans-and-bits?u=76281980&t=182)** So it'd be more complicated than what we're doing at the moment.
>
> **[3:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-bans-and-bits?u=76281980&t=185)** But this column is that A-I-E-U.
>
> **[3:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-bans-and-bits?u=76281980&t=189)** And you might recall that that happened, I believe, 41 times.
>
> **[3:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-bans-and-bits?u=76281980&t=197)** So we've talked about a bit, let's now talk about a ban.
>
> **[3:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-bans-and-bits?u=76281980&t=201)** 41 is pretty close to 50.
>
> **[3:25](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-bans-and-bits?u=76281980&t=205)** And if you go from 500 down to 50, that reduces your guesswork by a factor of 10, and that would be 1 ban.
>
> **[3:39](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-bans-and-bits?u=76281980&t=219)** So what's really interesting is better understanding how this comes together, how the bit relates to the ban, because they both accomplish the same thing, but they do it in a different way.
>
> **[3:50](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-bans-and-bits?u=76281980&t=230)** So another way of thinking about the bit is we cut our guesses into 1/2 or 1/4, or 1/8.
>
> **[4:02](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-bans-and-bits?u=76281980&t=242)** So how does that relate to a ban?
>
> **[4:04](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-bans-and-bits?u=76281980&t=244)** Well, the ban is 1 in 10.
>
> **[4:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-bans-and-bits?u=76281980&t=246)** So as it turns out, 1 ban is about 3.22 bits.
>
> **[4:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-bans-and-bits?u=76281980&t=256)** Can you see why? Because it's 1 in 10.
>
> **[4:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-bans-and-bits?u=76281980&t=259)** So it has to be more than 1 in 8, but it's less than, let's say, 1 in 16.
>
> **[4:27](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-bans-and-bits?u=76281980&t=267)** 1 in 16 would be 4 bits.
>
> **[4:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-bans-and-bits?u=76281980&t=269)** So we know that 1 in 10 is somewhere between 3 bits and 4 bits, and it works out to be 3.22.
>
> **[4:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-bans-and-bits?u=76281980&t=277)** So really, very interesting.
>
> **[4:39](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-bans-and-bits?u=76281980&t=279)** This can help us determine our progress.
>
> **[4:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-bans-and-bits?u=76281980&t=283)** So actually applying this in a Wordle game would be much more complicated than we're going to do, because we would have to be determining things like it has an A but it doesn't have an I, it has an E but it doesn't have a D, and so on.
>
> **[4:58](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-bans-and-bits?u=76281980&t=298)** We're not going to do anything as complicated as that.
>
> **[5:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-bans-and-bits?u=76281980&t=300)** But now you're more familiar with bits, bans, and how they relate together.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1)
> **Versions:** 3.22 (2)
> **Cross-References:** we mentioned (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Wordle and Bayes' theorem](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-and-bayes-theorem?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-and-bayes-theorem?u=76281980&t=0)** - [Instructor] We've already seen how to calculate a conditional [[Probability]] using the data in our Wordle spreadsheet, specifically, we calculated the probability of having two Os given that we don't have an A, I, E or U.
>
> **[0:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-and-bayes-theorem?u=76281980&t=18)** But what if we had to calculate the other way?
>
> **[0:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-and-bayes-theorem?u=76281980&t=21)** The probability of no A, I, E, or U given two Os in our [[Microsoft Word|word]].
>
> **[0:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-and-bayes-theorem?u=76281980&t=30)** A natural first reaction would be to simply go back to the spreadsheet.
>
> **[0:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-and-bayes-theorem?u=76281980&t=34)** After all, it wasn't too difficult to do the calculation.
>
> **[0:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-and-bayes-theorem?u=76281980&t=38)** However, in this instance, we have complete information and often you don't have complete information.
>
> **[0:47](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-and-bayes-theorem?u=76281980&t=47)** That's where the famous Bayes's rule or Bayes's theorem comes in.
>
> **[0:53](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-and-bayes-theorem?u=76281980&t=53)** It allows you to solve for the probability of A given B if you know the other three values.
>
> **[1:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-and-bayes-theorem?u=76281980&t=60)** The probability of A, the probability of B and the probability of B given A.
>
> **[1:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-and-bayes-theorem?u=76281980&t=67)** So here's what it looks like.
>
> **[1:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-and-bayes-theorem?u=76281980&t=69)** So we're solving for the probability of A given B over there on the left, and on the right side of the equation is the probability of B given A times the probability of A all divided by the probability of B.
>
> **[1:27](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-and-bayes-theorem?u=76281980&t=87)** A fair question at this point is why is this so helpful?
>
> **[1:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-and-bayes-theorem?u=76281980&t=91)** Now, we've already mentioned that you might know the probability of B given A but not be able to calculate the probability of A given B directly.
>
> **[1:42](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-and-bayes-theorem?u=76281980&t=102)** What might be unclear is how often this is an issue.
>
> **[1:46](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-and-bayes-theorem?u=76281980&t=106)** So the second reason listed here is perhaps the more important one.
>
> **[1:51](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-and-bayes-theorem?u=76281980&t=111)** But it might seem abstract at first.
>
> **[1:54](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-and-bayes-theorem?u=76281980&t=114)** The other reason is that we might want to generate what is called a posterior distribution from a prior distribution combined with new information.
>
> **[2:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-and-bayes-theorem?u=76281980&t=127)** As Allen Downey, author of "Think Bayes" puts it, "This formula, Bayes's theorem, is a recipe for updating beliefs in light of new data."
>
> **[2:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-and-bayes-theorem?u=76281980&t=137)** That's really what it's all about.
>
> **[2:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-and-bayes-theorem?u=76281980&t=139)** Constantly ingesting new information and updating all of the probabilities.
>
> **[2:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-and-bayes-theorem?u=76281980&t=146)** I especially like a phrase from [[John the Ripper|John]] Kruschke's book, "Doing Bayesian Data Analysis."
>
> **[2:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-and-bayes-theorem?u=76281980&t=153)** "Bayesian inference is the reallocation of credibility across possibilities."
>
> **[2:39](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-and-bayes-theorem?u=76281980&t=159)** In the context of our ongoing example, you wouldn't likely make a word with two Os your first guess in Wordle but if you learned that you have no A, I, E, or U, you might make it your second guess.
>
> **[2:59](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-and-bayes-theorem?u=76281980&t=179)** Bayesian models do the same kind of thing but on a grander scale to predict political elections or the locations of missing submarines and many other use cases.
>
> **[3:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-and-bayes-theorem?u=76281980&t=191)** So let's resolve those fractions we had.
>
> **[3:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-and-bayes-theorem?u=76281980&t=195)** We've got our three values to plug into our formula.
>
> **[3:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-and-bayes-theorem?u=76281980&t=199)** 0.022, 0.082 and 0.171.
>
> **[3:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-and-bayes-theorem?u=76281980&t=208)** And here are the same numbers inserted into the right-hand side of our equation.
>
> **[3:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-and-bayes-theorem?u=76281980&t=215)** And the answer is 63.7%.
>
> **[3:39](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-and-bayes-theorem?u=76281980&t=219)** Let's pause for a moment and reflect on if that makes sense.
>
> **[3:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-and-bayes-theorem?u=76281980&t=224)** Well, we know that words with two Os are not incredibly rare but they aren't incredibly common either.
>
> **[3:53](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-and-bayes-theorem?u=76281980&t=233)** However, with only five letters, if two of those letters are O, that doesn't leave a lot of room left over for other vowels.
>
> **[4:03](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-and-bayes-theorem?u=76281980&t=243)** So a much higher percentage makes sense.
>
> **[4:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-and-bayes-theorem?u=76281980&t=248)** In fact, if no examples come to mind, our little spreadsheet has just three examples and they all start with the letter A.
>
> **[4:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-and-bayes-theorem?u=76281980&t=257)** Afoot, aloof, and agogo.
>
> **[4:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-and-bayes-theorem?u=76281980&t=261)** So there you have it, the famous Bayes rule.
>
> **[4:24](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-and-bayes-theorem?u=76281980&t=264)** Many discussions of Bayes start with the rule on the very first page.
>
> **[4:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-and-bayes-theorem?u=76281980&t=270)** But I hope that the discussion up to this point has put it into context.
>
> **[4:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/wordle-and-bayes-theorem?u=76281980&t=275)** And there'll be much more to say about Bayes in the second half of the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Probability]] (13), [[Microsoft Word|Word]] (2), [[John the Ripper|John]] (1)
> **Versions:** 0.022 (1), 0.082 (1), 0.171 (1), 63.7 (1)
> **Definitions:** is an  (1), is called (1), is a  (1)
> **CLI Commands:** make (2)
> **Speakers:** - [instructor] (1)

#### [Challenge: Conditional probability and Bayes' theorem](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/challenge-conditional-probability-and-bayes-theorem?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/challenge-conditional-probability-and-bayes-theorem?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/challenge-conditional-probability-and-bayes-theorem?u=76281980&t=5)** - [Instructor] Okay, it's ready for another challenge.
>
> **[0:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/challenge-conditional-probability-and-bayes-theorem?u=76281980&t=9)** I've provided this spreadsheet.
>
> **[0:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/challenge-conditional-probability-and-bayes-theorem?u=76281980&t=11)** This is actually a well known dataset that you'll encounter in lots of discussions of Bayes.
>
> **[0:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/challenge-conditional-probability-and-bayes-theorem?u=76281980&t=19)** It has eye color and hair color, and I believe when this was originally collected, it was a bunch of college students that were probably in a psychology class.
>
> **[0:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/challenge-conditional-probability-and-bayes-theorem?u=76281980&t=31)** But what we're going to do is we're going to use this for practice doing these basic [[Probability]] calculations.
>
> **[0:40](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/challenge-conditional-probability-and-bayes-theorem?u=76281980&t=40)** So your mission is to do three calculations.
>
> **[0:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/challenge-conditional-probability-and-bayes-theorem?u=76281980&t=44)** First is a marginal probability.
>
> **[0:48](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/challenge-conditional-probability-and-bayes-theorem?u=76281980&t=48)** What is sometimes called an unconditional probability.
>
> **[0:51](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/challenge-conditional-probability-and-bayes-theorem?u=76281980&t=51)** Simply, what is the probability of having brown eyes according to this spreadsheet?
>
> **[0:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/challenge-conditional-probability-and-bayes-theorem?u=76281980&t=57)** The second task is what is the probability of brown eyes given red hair?
>
> **[1:04](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/challenge-conditional-probability-and-bayes-theorem?u=76281980&t=64)** And again, you should be using the spreadsheet to do this.
>
> **[1:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/challenge-conditional-probability-and-bayes-theorem?u=76281980&t=68)** Finally and no cheating.
>
> **[1:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/challenge-conditional-probability-and-bayes-theorem?u=76281980&t=71)** You want to use Bayes Rule to predict red hair given brown eyes and flip that around.
>
> **[1:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/challenge-conditional-probability-and-bayes-theorem?u=76281980&t=79)** Now the reason I joked about no cheating is that you could calculate what is the probability of red hair given brown eyes using the spreadsheet directly, but the task in this case is to use Bayes Rule to do that.
>
> **[1:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/challenge-conditional-probability-and-bayes-theorem?u=76281980&t=94)** This should just take a few minutes.
>
> **[1:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/challenge-conditional-probability-and-bayes-theorem?u=76281980&t=97)** It's really just to practice the math.
>
> **[1:39](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/challenge-conditional-probability-and-bayes-theorem?u=76281980&t=99)** And next, we'll take a look at the results in the solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Probability]] (6)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)

#### [Solution: Conditional probability and Bayes' theorem](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/solution-conditional-probability-and-bayes-theorem?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/solution-conditional-probability-and-bayes-theorem?u=76281980&t=0)** - [Instructor] Okay, let's do our solution.
>
> **[0:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/solution-conditional-probability-and-bayes-theorem?u=76281980&t=7)** So first, what's the [[Probability]] of brown eyes?
>
> **[0:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/solution-conditional-probability-and-bayes-theorem?u=76281980&t=10)** This is going to be pretty simple.
>
> **[0:12](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/solution-conditional-probability-and-bayes-theorem?u=76281980&t=12)** It's going to be brown eyes divided by the total.
>
> **[0:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/solution-conditional-probability-and-bayes-theorem?u=76281980&t=20)** There we go.
>
> **[0:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/solution-conditional-probability-and-bayes-theorem?u=76281980&t=22)** And then I'm going to do an extra one over here, because we're going to need it.
>
> **[0:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/solution-conditional-probability-and-bayes-theorem?u=76281980&t=26)** We need red hair, and that's going to be red hair divided by the total.
>
> **[0:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/solution-conditional-probability-and-bayes-theorem?u=76281980&t=37)** There we go.
>
> **[0:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/solution-conditional-probability-and-bayes-theorem?u=76281980&t=38)** That's going to come in handy later.
>
> **[0:40](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/solution-conditional-probability-and-bayes-theorem?u=76281980&t=40)** Let's do our conditional probability.
>
> **[0:42](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/solution-conditional-probability-and-bayes-theorem?u=76281980&t=42)** Let's do the probability of brown eyes given red hair.
>
> **[0:47](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/solution-conditional-probability-and-bayes-theorem?u=76281980&t=47)** So that's going to be 26 divided by 220.
>
> **[0:53](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/solution-conditional-probability-and-bayes-theorem?u=76281980&t=53)** Now remember, we've got to use Bayes' rule.
>
> **[0:56](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/solution-conditional-probability-and-bayes-theorem?u=76281980&t=56)** Doing red hair divided by brown eyes would be really simple.
>
> **[1:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/solution-conditional-probability-and-bayes-theorem?u=76281980&t=60)** We just have to refer to the spreadsheet here.
>
> **[1:04](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/solution-conditional-probability-and-bayes-theorem?u=76281980&t=64)** But again, we want to practice Bayes' rule.
>
> **[1:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/solution-conditional-probability-and-bayes-theorem?u=76281980&t=66)** So let's remind ourselves of how it works by double checking with the slides that we saw earlier.
>
> **[1:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/solution-conditional-probability-and-bayes-theorem?u=76281980&t=74)** In order to solve for probability of red hair given brown eyes, assuming that we don't have complete data like we do in the spreadsheet, we need the following ingredients, the probability of brown eyes, the probability of red hair and the probability of brown eyes given red hair, and we just solve for each of those.
>
> **[1:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/solution-conditional-probability-and-bayes-theorem?u=76281980&t=93)** Quick refresher as to what the formula looks like.
>
> **[1:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/solution-conditional-probability-and-bayes-theorem?u=76281980&t=97)** We're going to do the probability of B given A, which, for us, is the red hair given brown eyes times the probability of A, which is, for us, the probability of brown eyes divided by the probability of B, which, for us, is the probability of red hair.
>
> **[1:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/solution-conditional-probability-and-bayes-theorem?u=76281980&t=117)** Okay, we actually just solve for what these are.
>
> **[2:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/solution-conditional-probability-and-bayes-theorem?u=76281980&t=120)** They're 0.372.
>
> **[2:03](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/solution-conditional-probability-and-bayes-theorem?u=76281980&t=123)** Probability of red hair is 0.12.
>
> **[2:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/solution-conditional-probability-and-bayes-theorem?u=76281980&t=128)** And the conditional probability, we just solve that as well, 0.118.
>
> **[2:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/solution-conditional-probability-and-bayes-theorem?u=76281980&t=134)** All right, here's what they look like when they're plugged into the formula.
>
> **[2:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/solution-conditional-probability-and-bayes-theorem?u=76281980&t=138)** And if you take 0.118 and multiply it times 0.372 and then divide that by 0.12, you get 36.6%, and I'll leave you to double check it if you care to.
>
> **[2:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/solution-conditional-probability-and-bayes-theorem?u=76281980&t=152)** If you go back to the spreadsheet, you can verify this the easy way.
>
> **[2:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/solution-conditional-probability-and-bayes-theorem?u=76281980&t=156)** Remember that we have the formula for when we have incomplete information.
>
> **[2:42](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/solution-conditional-probability-and-bayes-theorem?u=76281980&t=162)** So I hope you found that to be helpful practice.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Probability]] (14)
> **Versions:** 0.372 (2), 0.12 (2), 0.118 (2), 36.6 (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 3. Prediction and Proof with Bayesian statistics

[↑ Back to Table of Contents](#table-of-contents)

#### [Contrasting frequentist statistics and Bayesian statistics](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/contrasting-frequentist-statistics-and-bayesian-statistics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/contrasting-frequentist-statistics-and-bayesian-statistics?u=76281980&t=0)** - [Instructor] A full discussion of Bayesian [[Statistics]] would require a whole course, but we will discuss it briefly in this section to place two topics into a fuller context.
>
> **[0:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/contrasting-frequentist-statistics-and-bayesian-statistics?u=76281980&t=10)** First, we want to build upon our discussion of conditional [[Probability]] and Bayes' rule.
>
> **[0:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/contrasting-frequentist-statistics-and-bayesian-statistics?u=76281980&t=16)** Second, we want to prepare for an eventual brief discussion of Bayesian networks, that will be in the next section.
>
> **[0:25](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/contrasting-frequentist-statistics-and-bayesian-statistics?u=76281980&t=25)** In order to do this let's start by contrasting Bayesian and traditional statistics.
>
> **[0:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/contrasting-frequentist-statistics-and-bayesian-statistics?u=76281980&t=32)** They both use probability to quantify uncertainty, but they differ philosophically in what is fixed and what is uncertain.
>
> **[0:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/contrasting-frequentist-statistics-and-bayesian-statistics?u=76281980&t=45)** What I have been sometimes calling traditional statistics is also called frequentist statistics.
>
> **[0:52](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/contrasting-frequentist-statistics-and-bayesian-statistics?u=76281980&t=52)** You'll even hear the phrase Fisherian statistics, so let's discuss that approach first.
>
> **[1:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/contrasting-frequentist-statistics-and-bayesian-statistics?u=76281980&t=61)** In the frequentist philosophy the population parameter is fixed.
>
> **[1:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/contrasting-frequentist-statistics-and-bayesian-statistics?u=76281980&t=66)** Something that you're trying to measure, let's say how many people are voting for a particular political candidate, is fixed in the population.
>
> **[1:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/contrasting-frequentist-statistics-and-bayesian-statistics?u=76281980&t=76)** But what is uncertain is how accurately any given sample reflects that population.
>
> **[1:24](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/contrasting-frequentist-statistics-and-bayesian-statistics?u=76281980&t=84)** So, the data, specifically your sample, is uncertain.
>
> **[1:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/contrasting-frequentist-statistics-and-bayesian-statistics?u=76281980&t=90)** All the work you do in this approach is trying to measure how much uncertainty exists when drawing population-level conclusions from your sample.
>
> **[1:41](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/contrasting-frequentist-statistics-and-bayesian-statistics?u=76281980&t=101)** So, your calculations are based on the idea that you might hypothetically do the poll many times, and you use those hypothetical repetitions to extrapolate confidence intervals and things like p-values.
>
> **[1:58](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/contrasting-frequentist-statistics-and-bayesian-statistics?u=76281980&t=118)** So, there's trust in these hypothetical repetitions through the law of large numbers, but there's always doubt as to whether the sample statistic you calculate is the same value as the population parameter.
>
> **[2:12](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/contrasting-frequentist-statistics-and-bayesian-statistics?u=76281980&t=132)** One important limitation is you always need a large enough sample to perform these hypothetical repetitions.
>
> **[2:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/contrasting-frequentist-statistics-and-bayesian-statistics?u=76281980&t=140)** Without enough data you'll just get an inconclusive result, and you'll have to wait for more data.
>
> **[2:27](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/contrasting-frequentist-statistics-and-bayesian-statistics?u=76281980&t=147)** Of course, we spent a lot of time on p-values in the companion course to this one, but another way to think about p-values is that frequentist statistics is about asking yes-no questions.
>
> **[2:42](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/contrasting-frequentist-statistics-and-bayesian-statistics?u=76281980&t=162)** It often reminds me of the toy that you can use to ask yes-no questions.
>
> **[2:47](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/contrasting-frequentist-statistics-and-bayesian-statistics?u=76281980&t=167)** Is my null hypothesis plausible?
>
> **[2:51](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/contrasting-frequentist-statistics-and-bayesian-statistics?u=76281980&t=171)** And the answer you get back is a yes, a no, or maybe an inconclusive answer but it's fundamentally a yes-no question.
>
> **[3:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/contrasting-frequentist-statistics-and-bayesian-statistics?u=76281980&t=181)** Metaphorically like a judge, if you can frame your question in the form of a yes-no question like do I have convincing evidence that the effect of the fertilizer is non-zero, just like Fisher at Rothamsted, then it can be quite effective.
>
> **[3:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/contrasting-frequentist-statistics-and-bayesian-statistics?u=76281980&t=200)** In the case of Bayesian statistics the philosophy is to accept the data as fixed because it represents the best evidence currently available.
>
> **[3:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/contrasting-frequentist-statistics-and-bayesian-statistics?u=76281980&t=211)** So, the question that we base upon the current data is what is the best guess as to the parameter values?
>
> **[3:40](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/contrasting-frequentist-statistics-and-bayesian-statistics?u=76281980&t=220)** In other words, the parameters are uncertain.
>
> **[3:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/contrasting-frequentist-statistics-and-bayesian-statistics?u=76281980&t=224)** They represent just our best current hypothesis of the parameter values, and therefore they are uncertain.
>
> **[3:53](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/contrasting-frequentist-statistics-and-bayesian-statistics?u=76281980&t=233)** All the work in the Bayesian approach is trying to build a distribution that represents all of the plausible parameter values and the probabilities associated with them.
>
> **[4:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/contrasting-frequentist-statistics-and-bayesian-statistics?u=76281980&t=245)** Perhaps the best metaphor would be a scale.
>
> **[4:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/contrasting-frequentist-statistics-and-bayesian-statistics?u=76281980&t=248)** At the moment which hypothesis has more evidence, hypothesis A or hypothesis B?
>
> **[4:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/contrasting-frequentist-statistics-and-bayesian-statistics?u=76281980&t=256)** As of today which political candidate is likely to win, candidate A or candidate B?
>
> **[4:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/contrasting-frequentist-statistics-and-bayesian-statistics?u=76281980&t=263)** When you have limited data and or when you have a subject matter expert that might provide evidence it is often the better choice.
>
> **[4:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/contrasting-frequentist-statistics-and-bayesian-statistics?u=76281980&t=271)** So, in this case when you have limited data, even very limited data, you are not prevented from making an assessment, but you will just associate a higher degree of uncertainty to your current hypothesis.
>
> **[4:46](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/contrasting-frequentist-statistics-and-bayesian-statistics?u=76281980&t=286)** You're not required to wait for more data.
>
> **[4:49](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/contrasting-frequentist-statistics-and-bayesian-statistics?u=76281980&t=289)** You can proceed and make an updated assessment later.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Statistics]] (7), [[Probability]] (2)
> **Definitions:** is a  (1), in other words (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Analogies:** just like (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)

#### [Bayesian T-Test with JASP](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=0)** - [Instructor] There is a piece of free and very easy to use software that's going to be tremendously helpful to us.
>
> **[0:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=7)** It is called JASP, J-A-S-P.
>
> **[0:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=10)** You're looking at the website here.
>
> **[0:12](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=12)** Very easy to download.
>
> **[0:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=14)** So the reason this is going to be so helpful is that it allows you to do basic statistical tests in both the frequentist version and the Bayesian version in the same software.
>
> **[0:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=28)** So we're going to do a brief demonstration of it now and then we're also going to use it in one of our challenge and solutions later.
>
> **[0:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=36)** If you prefer to just watch you can absolutely do that as well.
>
> **[0:41](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=41)** We're only going to be seeing the software in three videos in the whole course.
>
> **[0:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=45)** But if you care to use it the download instructions are right there.
>
> **[0:49](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=49)** I happen to be using this on a Mac.
>
> **[0:51](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=51)** So let's take a look.
>
> **[0:54](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=54)** And what we're going to do is we're going to use an existing data set.
>
> **[0:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=57)** They really do make this easy.
>
> **[0:59](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=59)** So we're going to click in the upper left hand corner to show the main menu.
>
> **[1:03](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=63)** Then we're going to go down to data library where they have a built in example.
>
> **[1:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=67)** And lo and behold, they have a built in example, in fact more than one, for T tests.
>
> **[1:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=73)** So if we look here, we're going to go with the very first one, directed reading activities.
>
> **[1:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=79)** So go ahead and click on that.
>
> **[1:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=81)** And not only have they given us a practice data set, they've completely worked out the solution.
>
> **[1:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=89)** So let me show you how this works.
>
> **[1:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=91)** On the far left hand side, we can click on the little arrow and we get to see the data.
>
> **[1:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=96)** It's got just four columns.
>
> **[1:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=98)** I'm not going to talk about the data a lot, but they actually describe it.
>
> **[1:41](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=101)** But it's basically going to be scores in two groups, a treated group in a control group.
>
> **[1:46](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=106)** So if we use the arrow in the far right now we go back to what we were looking at.
>
> **[1:51](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=111)** And if you click on this arrow in the middle, you can get a closeup of their walkthrough of the example including a discussion of the data set.
>
> **[1:59](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=119)** So they really do a fabulous job.
>
> **[2:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=121)** What I'm going to suggest we do is go back to this arrangement, go up to the menus.
>
> **[2:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=130)** And as great a job as they do, we're going to go ahead and close that and start from scratch so that you can get familiar with the menus.
>
> **[2:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=139)** But certainly feel free to return and take a look at this example a bit later.
>
> **[2:24](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=144)** It's frankly a bit more complicated than what we're going to do, so you may find it useful.
>
> **[2:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=151)** I'm going to close that, I'm going to close this.
>
> **[2:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=154)** We're back to the data set.
>
> **[2:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=156)** We're going to go up to the menu, T test, classical independent samples T test.
>
> **[2:42](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=162)** So we talked about T test in the companion course to this one.
>
> **[2:48](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=168)** So we'll be brief, but there are a couple of things I want to refer you to.
>
> **[2:51](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=171)** Our dependent variable is DRP.
>
> **[2:54](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=174)** Our grouping variable is going to be group.
>
> **[2:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=177)** Very quick reminder that when you're doing a T test, your dependent should be a scale variable of some kind and your grouping variable should not only be a group, there should be exactly two groups because that's what T test is all about is comparing two groups.
>
> **[3:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=193)** You may recall from just a couple of moments ago when we were looking at the data that the two groups were the treated group and the control group.
>
> **[3:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=201)** So we are going to check off student under tests.
>
> **[3:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=206)** Student is referring to Student's T.
>
> **[3:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=209)** Student was the pseudonym of Gossett.
>
> **[3:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=212)** He is the guy who developed this, so a little bit of stats history there.
>
> **[3:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=216)** And then down under alternative hypotheses, remember that when we're doing traditional or frequentist [[Statistics]], our null hypothesis is almost always that group one equals group two.
>
> **[3:49](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=229)** So here, our alternate hypothesis is group one does not equal group two.
>
> **[3:56](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=236)** We are not going to do anything with the assumptions checks down here in the lower left.
>
> **[4:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=241)** But remember when you're doing frequentist statistics, assumptions checks are very often part of the game.
>
> **[4:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=248)** Okay?
>
> **[4:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=249)** We will do confidence intervals around the parameters.
>
> **[4:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=254)** We will request effect size, specifically something that's called Cohen's D.
>
> **[4:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=260)** And down here we're going to request descriptive plots.
>
> **[4:24](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=264)** And we're all ready to go.
>
> **[4:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=266)** And you notice that the way this interface works, it's working while you work.
>
> **[4:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=271)** So before we look more closely at the results I want to tell you a little bit about Cohen's D.
>
> **[4:39](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=279)** So remember that a P value does not tell you that you have a big difference or an important difference.
>
> **[4:49](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=289)** Doesn't tell you any of those things.
>
> **[4:52](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=292)** It's the P value, when it's below 0.05, is simply telling you that you can reject the null hypothesis, therefore you no longer conclude that group one and group two are the same and you revert to your alternate hypothesis.
>
> **[5:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=308)** Okay, why the refresher?
>
> **[5:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=309)** Well, because Cohen's D gets at something that P value does not.
>
> **[5:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=314)** What Cohen's D gets at is what's called effect size.
>
> **[5:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=318)** So let me show you a quick reference slide.
>
> **[5:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=322)** The way that Cohen's D is interpreted is it's telling you whether or not you have a small, medium, or large effect.
>
> **[5:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=330)** So the breakpoints that you should make a mental note of is above 0.2, above 0.5, and above 0.8 for small, medium and large.
>
> **[5:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=343)** And this is according to Cohen himself.
>
> **[5:46](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=346)** Jacob Cohen is one of the most influential statisticians of the last century.
>
> **[5:52](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=352)** He's not as famous as, let's say, Fisher, but he definitely makes it to the top 100 of important statisticians.
>
> **[5:58](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=358)** He passed away some years ago but he is particularly famous for effect size.
>
> **[6:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=365)** So let's take a closer look at these results by clicking on the arrow in the middle.
>
> **[6:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=371)** And remember, we get a description of the data set.
>
> **[6:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=373)** We're not worried about that at the moment.
>
> **[6:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=375)** I'm going to scroll up a bit.
>
> **[6:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=376)** And we see that the P value is 0.029.
>
> **[6:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=382)** So we're going to reject the null hypothesis that the two groups are the same.
>
> **[6:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=389)** But what is the Cohen's D?
>
> **[6:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=391)** The Cohen's D has a magnitude of 0.684.
>
> **[6:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=397)** So not quite as big as a large effect, this would be called a medium effect.
>
> **[6:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=405)** I want to draw your attention to one other thing as we kind of review traditional T tests.
>
> **[6:51](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=411)** And that is that the data is telling us where the dots are.
>
> **[6:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=417)** The dots in this plot tell us where the average of the treated group and the average of the control group are.
>
> **[7:04](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=424)** However, notice that the whiskers that you see there are uniform in width.
>
> **[7:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=431)** I don't mean from control to treated, I mean that they're symmetric.
>
> **[7:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=435)** Why would I bring this up?
>
> **[7:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=437)** Well, remember that we don't get the confidence interval, which is what these whiskers are showing, these are called error bars by the way, we don't get that width from the data directly.
>
> **[7:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=451)** We get the dot, we get the average from the data, and then we derive the width of those confidence intervals using our normality assumptions.
>
> **[7:41](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=461)** That's an important difference between frequentist and Bayesian is that we're deriving the width of the confidence interval.
>
> **[7:50](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=470)** We're not getting it by building a distribution.
>
> **[7:54](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=474)** So two different approaches.
>
> **[7:56](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=476)** So we've got our P value and we've got confidence intervals.
>
> **[8:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=480)** Those are two things we won't see when we do the Bayesian version of this.
>
> **[8:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=485)** So I'm going to go up to T test and then I'm going to go down independent samples, T test Bayesian, and everything we need is right here.
>
> **[8:12](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=492)** So we take DRP and bring it over to dependent and we take group over to grouping variable.
>
> **[8:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=500)** We're going to keep our alternative hypothesis, group one does not equal group two.
>
> **[8:24](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=504)** We're going to request a Bayes factor, and we're going to have more to say about that.
>
> **[8:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=509)** And we're going to do a rain cloud plot with a horizontal display.
>
> **[8:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=515)** And if you scroll down now, alternatively you can go up and do that.
>
> **[8:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=523)** So you can get that out of the way and expand the Bayesian.
>
> **[8:46](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=526)** And we can scroll down a little bit, and there's actually not a huge amount that we have to scroll through because we've kept it very basic.
>
> **[8:53](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=533)** So we have what's called the Bayes factor and our Bayes factor is 2.2.
>
> **[8:59](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=539)** And then when you look at these distributions, this is the actual data.
>
> **[9:04](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=544)** Okay, so when you're looking at these rain cloud plots there's nothing special about Bayes here.
>
> **[9:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=551)** But notice that the actual data is not symmetric like the error bars were.
>
> **[9:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=557)** I'm going to scroll up again to remind you, the error bars were highly symmetric.
>
> **[9:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=563)** The distributions of the data are not.
>
> **[9:25](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=565)** So remember, those confidence intervals are derived using their normality assumptions.
>
> **[9:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=571)** They're not based upon the quirkiness of the data, whereas the Bayesian approach very much is.
>
> **[9:39](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=579)** So what is the Bayes factor?
>
> **[9:41](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=581)** Well, we'll talk about that in a moment but I want to orient you to how large you can expect this to be.
>
> **[9:48](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=588)** So let's take a look at a slide.
>
> **[9:50](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=590)** So what we see, and this is from Harold Jeffreys himself who gave us the concept of a Bayes factor and is an influential thinker in Bayesian statistics.
>
> **[10:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=601)** So when we interpret this anecdotal evidence or kind of a small amount of evidence would be between one and three, and we're somewhat in that range.
>
> **[10:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=611)** Moderate would be three to 10, strong, 10 to 30, and very strong, 30 to 100.
>
> **[10:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=619)** I can't resist mentioning a very interesting if somewhat nerdy fact about Bayes factor.
>
> **[10:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=626)** JASP offers a log of the Bayes factor but they happen to have chosen a natural log, which of course has a base of E.
>
> **[10:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=635)** However, if the log was with a base of two you would be able to convert the base factor into a bit, AKA a Shannon.
>
> **[10:46](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=646)** We've already talked about Shannons and bits because that was Claude Shannon's information gain unit of measurement.
>
> **[10:55](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=655)** And if you were to use a base of 10, you would get a ban, Turing's version of the measure of information gain.
>
> **[11:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=666)** So it's remarkable, it's all connected.
>
> **[11:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=669)** So let's go back to the JASP output.
>
> **[11:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=673)** So here we are back in the results and we see that the Bayes factor we have is not really huge, it's just 2.2, which if you recall from the slide we were just looking at would be considered small or anecdotal evidence.
>
> **[11:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=688)** So what does this Bayes factor mean?
>
> **[11:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=690)** Well, it's a ratio, it's a ratio in favor of one hypothesis or the other.
>
> **[11:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=696)** So with a 2.2, in fact, anything greater than one, it means that we have more evidence for one hypothesis than the other.
>
> **[11:46](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=706)** If you happen to get a negative Bayes factor, it actually means that according to the data the evidence is going in the opposite direction to what you hypothesized, but that's not the case here.
>
> **[11:58](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=718)** So we're larger than one, we're at 2.2.
>
> **[12:02](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=722)** So we have evidence in favor of our hypothesis.
>
> **[12:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=726)** It's just not a huge amount of evidence.
>
> **[12:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-t-test-with-jasp?u=76281980&t=729)** I hope you found this to be as straightforward and easy to use as I've discovered it to be, because we'll get a chance to see this again in a challenge and solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Statistics]] (3)
> **Versions:** 2.2 (4), 0.05 (1), 0.2 (1), 0.5 (1), 0.8 (1)
> **Env Vars:** jasp (3), drp (2), aka (1)
> **UI Navigation:** click on (2), scroll up (2), scroll down (2)
> **Definitions:** means that (2), is a  (1), is called (1), is an  (1)
> **Cross-References:** go back to (3), we talked about (1)
> **CLI Commands:** make (2), find (1)
> **Speakers:** - [instructor] (1)

#### [Google Optimize](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/google-optimize?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/google-optimize?u=76281980&t=0)** - [Instructor] Now that we've learned a bit about the Bayesian approach, we can discuss a brief case study.
>
> **[0:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/google-optimize?u=76281980&t=6)** It will reinforce why a Bayesian approach can fit certain situations very well.
>
> **[0:12](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/google-optimize?u=76281980&t=12)** Now, A/B testing is most often associated with traditional [[Statistics]], specifically a t-test, but the team at [[Google]] Optimize chose a Bayesian approach for their A/B testing, and they discuss it on their resources hub.
>
> **[0:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/google-optimize?u=76281980&t=30)** There are three reasons that the folks at Google Optimize mention that a Bayes approach was a good one for their platform.
>
> **[0:39](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/google-optimize?u=76281980&t=39)** It allows variants to be compared directly rather than dealing with null hypotheses, it avoids the confusion and misinterpretation that is often associated with p-values, and it doesn't have a minimum sample size.
>
> **[0:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/google-optimize?u=76281980&t=57)** So let's explore each of these three main points in their own words.
>
> **[1:02](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/google-optimize?u=76281980&t=62)** It's actually kind of fun to explore their site because you can type in Bayes here and it autocompletes to Bayesian inference.
>
> **[1:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/google-optimize?u=76281980&t=73)** And you get a pretty cool introduction to Bayesian inference here, but I really like this section entitled, For Those Used to Frequentist Approaches, 'cause this will give us a lovely compare and contrast.
>
> **[1:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/google-optimize?u=76281980&t=89)** So, "Aren't frequentist methods good enough?
>
> **[1:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/google-optimize?u=76281980&t=92)** "Many times, yes."
>
> **[1:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/google-optimize?u=76281980&t=94)** And they specifically cite doing a clinical trial.
>
> **[1:40](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/google-optimize?u=76281980&t=100)** But they continue, "P-values don't directly answer questions "that testers are really asking."
>
> **[1:49](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/google-optimize?u=76281980&t=109)** And what they're really referring to here is, what did the better job, your variant or your control?
>
> **[1:59](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/google-optimize?u=76281980&t=119)** Remember that what p-values are testing is whether or not your variant and your control were not different.
>
> **[2:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/google-optimize?u=76281980&t=128)** That's really the only question that's being asked by the p-values.
>
> **[2:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/google-optimize?u=76281980&t=133)** We also mentioned sample size.
>
> **[2:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/google-optimize?u=76281980&t=135)** And I love the way that this is phrased.
>
> **[2:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/google-optimize?u=76281980&t=137)** "Wait, you don't have a sample size requirement?
>
> **[2:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/google-optimize?u=76281980&t=140)** "No, unlike frequentist approaches, "Bayesian inference doesn't need a minimum sample."
>
> **[2:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/google-optimize?u=76281980&t=146)** Now, remember, it's not magic.
>
> **[2:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/google-optimize?u=76281980&t=149)** It's not that you're becoming more certain with less data.
>
> **[2:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/google-optimize?u=76281980&t=153)** They go on to explain, "If your conversion rates are really consistent, "even with low traffic, you can find actionable results."
>
> **[2:41](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/google-optimize?u=76281980&t=161)** Do you see what they're getting at there?
>
> **[2:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/google-optimize?u=76281980&t=163)** They're saying that you can actually have a pretty good guess based on a small amount of data if all of the data is telling you the same story, which I think is really powerful.
>
> **[2:55](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/google-optimize?u=76281980&t=175)** And then, finally, "Don't significance and p-values tell me the [[Probability]] "that my variant would beat my control?"
>
> **[3:02](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/google-optimize?u=76281980&t=182)** Now, of course, we've talked about p-values at some length in the sibling course to this one.
>
> **[3:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/google-optimize?u=76281980&t=190)** But what they're really getting at here is a reminder that the null hypothesis in A/B testing is that the variant and the control are the same, as we've just discussed.
>
> **[3:24](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/google-optimize?u=76281980&t=204)** That's not the same question as asking, did the A or did the B do better?
>
> **[3:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/google-optimize?u=76281980&t=212)** So those are the reasons why the team at Google Optimize felt that a Bayesian approach was going to be the best fit for their platform.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (3), [[Statistics]] (1), [[Probability]] (1)
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Bayes and rare events](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayes-and-rare-events?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayes-and-rare-events?u=76281980&t=0)** - [Instructor] There was a Cold War policy in the late '60s that would surprise most of us today.
>
> **[0:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayes-and-rare-events?u=76281980&t=8)** And it led to an amazing story of the successful use of Bayesian [[Statistics]].
>
> **[0:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayes-and-rare-events?u=76281980&t=15)** Operation Chrome Dome was a program that kept B-52s armed with nuclear weapons in continuous flight in case of attack.
>
> **[0:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayes-and-rare-events?u=76281980&t=26)** That required very tricky and dangerous mid-air refueling.
>
> **[0:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayes-and-rare-events?u=76281980&t=32)** On January 17th, 1966, there was a mid-air accident and both the bomber and a refueling tanker fell into the sea, along with four hydrogen bombs.
>
> **[0:46](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayes-and-rare-events?u=76281980&t=46)** The incident occurred over Spain.
>
> **[0:49](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayes-and-rare-events?u=76281980&t=49)** Specifically near a rural village called Palomares on the northeastern coast.
>
> **[0:56](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayes-and-rare-events?u=76281980&t=56)** One of the four H bombs could not be located and a massive team was assembled to conduct the search.
>
> **[1:04](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayes-and-rare-events?u=76281980&t=64)** The chapter about it in "The Theory That Would Not Die" reads like a suspense novel.
>
> **[1:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayes-and-rare-events?u=76281980&t=70)** Now, it's a complicated story but it's interesting to reflect on some of the hypotheses that [[John the Ripper|John]] Craven, the scientist that the Navy sent came up with.
>
> **[1:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayes-and-rare-events?u=76281980&t=81)** Now, these were based on subject matter experts that he spoke to and also some guesswork on his part prior to the search.
>
> **[1:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayes-and-rare-events?u=76281980&t=90)** One possibility is that the missing bomb was in the plane's debris or could be found along the path of debris.
>
> **[1:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayes-and-rare-events?u=76281980&t=98)** Another possibility was that it had fallen free and was not in the debris.
>
> **[1:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayes-and-rare-events?u=76281980&t=105)** Another possibility was that one or both of the parachutes deployed, which would have helped it carry out further to sea.
>
> **[1:54](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayes-and-rare-events?u=76281980&t=114)** Finally, it's possible that it was near where a fisherman had reported seeing something entering the water.
>
> **[2:03](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayes-and-rare-events?u=76281980&t=123)** Remember that a Bayesian approach is focused on updating probabilities as you get new data.
>
> **[2:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayes-and-rare-events?u=76281980&t=131)** So the subject matter expertise allows you to prioritize the search map even without search data.
>
> **[2:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayes-and-rare-events?u=76281980&t=140)** And then update the map as the search's progress rules out certain areas.
>
> **[2:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayes-and-rare-events?u=76281980&t=148)** The details of this particular story are complicated because in some areas, the water was so deep that it was difficult to rule an area out even when they had sailed over and searched it.
>
> **[2:42](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayes-and-rare-events?u=76281980&t=162)** I want to include in our discussion of the accident and the search the most remarkable conclusion drawn from the author Sharon Bertsch McGrayne, the author of "The Theory That Would Not Die."
>
> **[2:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayes-and-rare-events?u=76281980&t=177)** In retelling the story, she makes this statement.
>
> **[3:02](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayes-and-rare-events?u=76281980&t=182)** "Most academic statisticians would have thrown in the towel.
>
> **[3:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayes-and-rare-events?u=76281980&t=186)** They would have believed, with Fisher and Neyman, that sources of information should be confined to verifiable sample data.
>
> **[3:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayes-and-rare-events?u=76281980&t=197)** Craven, of course, had no wish to repeat the experiment.
>
> **[3:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayes-and-rare-events?u=76281980&t=202)** He needed to find the bomb."
>
> **[3:25](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayes-and-rare-events?u=76281980&t=205)** Let's reflect on that for a moment.
>
> **[3:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayes-and-rare-events?u=76281980&t=208)** What she's saying is that from the standpoint of traditional statistics, there's nothing that can be done until there's a sufficient sample size, which would mean waiting until we could generate a sampling distribution, which in turn would require that there were dozens of similar accidents to examine.
>
> **[3:49](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayes-and-rare-events?u=76281980&t=229)** Sometimes you'll encounter this kind of response during projects, the suggestion that we can't proceed, that it can't be done, but some analyses are so important that you have to find a way and in this case, Craven's approach worked.
>
> **[4:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayes-and-rare-events?u=76281980&t=246)** And they ultimately found the missing bomb.
>
> **[4:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayes-and-rare-events?u=76281980&t=250)** As powerful as frequentest approaches can be when used in the correct setting, it's an approach that simply doesn't fit the situation as described in the case study of the Palomares incident.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Statistics]] (2), [[John the Ripper|John]] (1)
> **CLI Commands:** find (2)
> **Speakers:** - [instructor] (1)

#### [Challenge: JASP](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/challenge-jasp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/challenge-jasp?u=76281980&t=0)** - [Instructor] Time for our next challenge.
>
> **[0:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/challenge-jasp?u=76281980&t=7)** And here we are in JASP, the free software that we saw earlier.
>
> **[0:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/challenge-jasp?u=76281980&t=14)** So I'm going to go to the main menu here and down to Open and Recent Files, and I just want to indicate that we're going to use the PSAT_causality dataset, which we've seen a number of times.
>
> **[0:27](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/challenge-jasp?u=76281980&t=27)** I'm going to provide you with the CSV version of that file but it's just like the [[Microsoft Excel|Excel]] file, it's just a different format to facilitate JASP.
>
> **[0:40](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/challenge-jasp?u=76281980&t=40)** As a reminder, your copy is not going to be on my desktop.
>
> **[0:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/challenge-jasp?u=76281980&t=45)** You're going to have to direct it to the path that you want, and that's easily done.
>
> **[0:50](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/challenge-jasp?u=76281980&t=50)** If you go to, you're just going to simply have to browse for that file location.
>
> **[0:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/challenge-jasp?u=76281980&t=57)** This is what it looks like.
>
> **[0:58](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/challenge-jasp?u=76281980&t=58)** Again, it should be familiar to you.
>
> **[1:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/challenge-jasp?u=76281980&t=61)** And what I love about this is that it's just so simple now to do a classical T-test and a Bayesian T-test.
>
> **[1:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/challenge-jasp?u=76281980&t=69)** So your mission is going to be, to do both.
>
> **[1:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/challenge-jasp?u=76281980&t=73)** I'll just click on Independent Samples.
>
> **[1:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/challenge-jasp?u=76281980&t=75)** Our dependent is going to be PSAT, and our grouping variable is going to be SN.
>
> **[1:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/challenge-jasp?u=76281980&t=82)** I'll let you choose the settings and run that.
>
> **[1:25](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/challenge-jasp?u=76281980&t=85)** I am going to request that you do a Cohen's D as part of the challenge and say whether or not you think this is a small, medium, or large effect.
>
> **[1:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/challenge-jasp?u=76281980&t=94)** And then also when you do the Bayesian version, you're going to want to request a Bayes factor.
>
> **[1:42](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/challenge-jasp?u=76281980&t=102)** And once again, report whether or not it's convincing or not in Bayes factor terms, and that's your challenge.
>
> **[1:51](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/challenge-jasp?u=76281980&t=111)** To do both versions will probably take 10 minutes, but I think it will be good practice and we'll return next with the solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (1)
> **Env Vars:** jasp (2), csv (1), psat (1)
> **UI Navigation:** go to (2), click on (1)
> **Definitions:** is a  (1)
> **Analogies:** just like (1)
> **Best Practices:** good practice (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: JASP](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/solution-jasp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/solution-jasp?u=76281980&t=0)** - [Instructor] Okay, let's walk through our solution.
>
> **[0:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/solution-jasp?u=76281980&t=7)** So we're going to do T-test both ways.
>
> **[0:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/solution-jasp?u=76281980&t=9)** I'm in the dataset.
>
> **[0:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/solution-jasp?u=76281980&t=11)** Independent samples T-test, here we go.
>
> **[0:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/solution-jasp?u=76281980&t=14)** So PSAT is going to be our dependent.
>
> **[0:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/solution-jasp?u=76281980&t=18)** SN is going to be our grouping variable.
>
> **[0:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/solution-jasp?u=76281980&t=21)** Our hypothesis is group one is not equal to group two.
>
> **[0:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/solution-jasp?u=76281980&t=26)** Let's go ahead and request parameters, then remember the Cohen's d.
>
> **[0:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/solution-jasp?u=76281980&t=30)** So what we getting for our Cohen's d?
>
> **[0:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/solution-jasp?u=76281980&t=32)** We're getting .581.
>
> **[0:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/solution-jasp?u=76281980&t=35)** Great, that makes it medium.
>
> **[0:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/solution-jasp?u=76281980&t=37)** If it was .8 or higher, it would be a large effect.
>
> **[0:41](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/solution-jasp?u=76281980&t=41)** So what is that telling us?
>
> **[0:42](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/solution-jasp?u=76281980&t=42)** Well, we can see that the p-value is .001 but that simply tells us that group one is not equal to group two.
>
> **[0:52](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/solution-jasp?u=76281980&t=52)** It doesn't tell us if the difference is noteworthy.
>
> **[0:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/solution-jasp?u=76281980&t=57)** So let's also request descriptives and we can see that N has a mean of 90.5 and S has a mean of 79.69.
>
> **[1:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/solution-jasp?u=76281980&t=69)** But what Cohen's d is telling us is given the other information about the data, is that a big deal difference?
>
> **[1:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/solution-jasp?u=76281980&t=76)** So it's very helpful, particularly if you're not familiar with these scores.
>
> **[1:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/solution-jasp?u=76281980&t=81)** It's telling you that there's a non-trivial difference between the N scores and the S scores here.
>
> **[1:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/solution-jasp?u=76281980&t=89)** We could also do a descriptives plot.
>
> **[1:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/solution-jasp?u=76281980&t=92)** And to remind you, we have that symmetry around the error bars.
>
> **[1:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/solution-jasp?u=76281980&t=96)** The dot represents the 90.5 and the 79.7.
>
> **[1:42](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/solution-jasp?u=76281980&t=102)** But the little bars that you see, kind of the whiskers that you see, that isn't coming from the data per se.
>
> **[1:49](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/solution-jasp?u=76281980&t=109)** That's built around the averages using the normality assumptions.
>
> **[1:56](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/solution-jasp?u=76281980&t=116)** Now, we didn't request the normality assumptions.
>
> **[1:58](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/solution-jasp?u=76281980&t=118)** That's beyond the scope of our little challenge solution here but remember that when you're doing the frequentest approach, you have to be cognizant of normality assumptions 'cause they're important.
>
> **[2:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/solution-jasp?u=76281980&t=129)** So now let's do the Bayesian version and PSAT is our dependent and SN is our grouping variable.
>
> **[2:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/solution-jasp?u=76281980&t=141)** There's nothing particularly Bayesian about the raincloud plots but I like the horizontal display here because it gives us a better sense of the actual shape of the data, the actual shape of the data is lost in the error bars as much as I like error bars 'cause they communicate the confidence intervals, but this gives us a better sense of what the data actually looks like.
>
> **[2:47](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/solution-jasp?u=76281980&t=167)** And we have our Bayes factor.
>
> **[2:51](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/solution-jasp?u=76281980&t=171)** Now, if you recall, getting up to a Bayes factor up to 100 would be considered a very strong piece of evidence that the hypothesis was correct.
>
> **[3:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/solution-jasp?u=76281980&t=187)** Now, here we don't mean the null hypothesis.
>
> **[3:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/solution-jasp?u=76281980&t=189)** We mean the hypothesis of difference.
>
> **[3:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/solution-jasp?u=76281980&t=193)** We're over 100.
>
> **[3:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/solution-jasp?u=76281980&t=195)** So we have very compelling evidence here that the distribution of N shown in green and the distribution of S shown in orange are not the same distribution.
>
> **[3:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/solution-jasp?u=76281980&t=206)** We have some pretty powerful evidence to that effect.
>
> **[3:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/solution-jasp?u=76281980&t=210)** Just to further underscore what the Bayes factor is getting at, we can show the prior and posterior distributions.
>
> **[3:40](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/solution-jasp?u=76281980&t=220)** So this really helps us picture what the Bayes factor is all about because we're calculating the amount of evidence that the prior distribution is correct and we're measuring the amount of evidence that the posterior distribution is correct.
>
> **[3:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/solution-jasp?u=76281980&t=237)** The prior represents this idea that there's no difference between group one and group two.
>
> **[4:02](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/solution-jasp?u=76281980&t=242)** And you can see the posterior distribution.
>
> **[4:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/solution-jasp?u=76281980&t=245)** The Bayes factor is showing us that there's much more evidence for hypothesis one than for hypothesis zero.

> [!info]- Semantic Content
>
> **Versions:** 90.5 (2), 79.69 (1), 79.7 (1)
> **Env Vars:** psat (2)
> **Analogies:** picture (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 4. Causal Modeling with Structural Equation Modeling (SEM)

[↑ Back to Table of Contents](#table-of-contents)

#### [Sewell Wright](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/sewell-wright?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/sewell-wright?u=76281980&t=0)** - [Narrator] And now for something seemingly completely different, guinea pigs.
>
> **[0:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/sewell-wright?u=76281980&t=5)** Sewall Wright is one of the heroes that emerges from the "Book of Why".
>
> **[0:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/sewell-wright?u=76281980&t=9)** He innovated path analysis 100 years ago.
>
> **[0:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/sewell-wright?u=76281980&t=14)** He was working in animal heredity and his animal subjects were guinea pigs.
>
> **[0:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/sewell-wright?u=76281980&t=20)** His contributions to path analysis alone would deserve mention in the course.
>
> **[0:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/sewell-wright?u=76281980&t=26)** But he also confidently fought back criticism that he was conflating correlation with causation.
>
> **[0:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/sewell-wright?u=76281980&t=35)** Path analysis and structural equation modeling, as we shall see, under the right conditions can shed light on causal relationships.
>
> **[0:46](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/sewell-wright?u=76281980&t=46)** First, I want to take a look at one of Wright's original papers 'cause I just think it's so interesting to look at a 100 year old path diagram.
>
> **[0:55](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/sewell-wright?u=76281980&t=55)** So here we go.
>
> **[0:55](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/sewell-wright?u=76281980&t=55)** And I love the title, "Correlation and causation" by Sewall Wright.
>
> **[1:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/sewell-wright?u=76281980&t=60)** And you can see here that his title was Senior Animal Husbandman in Animal Genetics, Bureau Of Animal Industry, United States Department of Agriculture.
>
> **[1:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/sewell-wright?u=76281980&t=71)** Also very interesting.
>
> **[1:12](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/sewell-wright?u=76281980&t=72)** And as we said, doing his research with guinea pigs.
>
> **[1:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/sewell-wright?u=76281980&t=76)** So let's scroll down.
>
> **[1:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/sewell-wright?u=76281980&t=79)** Think it's wonderful that you can find these old papers.
>
> **[1:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/sewell-wright?u=76281980&t=82)** So here it is, diagram illustrating the interrelations among the factors which determine the weight of guinea pigs at birth and at weaning, which is apparently at 33 days, I did not know that.
>
> **[1:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/sewell-wright?u=76281980&t=97)** So you can see heredity, the size of the litter, the condition of the dam, the dam is the female guinea pig, and so on, really fascinating stuff.
>
> **[1:48](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/sewell-wright?u=76281980&t=108)** And what we do today is not wildly different from what you see.
>
> **[1:54](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/sewell-wright?u=76281980&t=114)** Note that these are all rectangles.
>
> **[1:56](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/sewell-wright?u=76281980&t=116)** So this is path analysis.
>
> **[1:58](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/sewell-wright?u=76281980&t=118)** We're going to have more to say about that later on in the course, the shapes are relevant here.
>
> **[2:04](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/sewell-wright?u=76281980&t=124)** I love this quote describing Wright's path diagrams in the "Book of Why".
>
> **[2:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/sewell-wright?u=76281980&t=129)** "I want to emphasize that path diagrams are not just a pretty picture.
>
> **[2:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/sewell-wright?u=76281980&t=134)** It is a powerful computational device because the rule for calculating correlations involves tracing the paths.
>
> **[2:24](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/sewell-wright?u=76281980&t=144)** Also notice the omitted arrows actually convey more significant assumptions than those that are present."
>
> **[2:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/sewell-wright?u=76281980&t=154)** Goes on to explain why, "An omitted arrow restricts the causal effect to zero."
>
> **[2:40](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/sewell-wright?u=76281980&t=160)** So when an arrow is present, unless you tell the model that you need that to be a particular value, normally it calculates that coefficient for you.
>
> **[2:51](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/sewell-wright?u=76281980&t=171)** But when an arrow is absent it forces that effect to be zero.
>
> **[2:58](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/sewell-wright?u=76281980&t=178)** So where the arrows are present and where they're absent is terribly important.
>
> **[3:02](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/sewell-wright?u=76281980&t=182)** And that's how the researcher is communicating their theory in the form of the diagram.
>
> **[3:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/sewell-wright?u=76281980&t=189)** Now this was all 100 years ago.
>
> **[3:12](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/sewell-wright?u=76281980&t=192)** When some of the folks that we talked about in the companion course like Carl Pearson were even more influential than they continue to be today.
>
> **[3:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/sewell-wright?u=76281980&t=202)** So there was no talk of causation at the time.
>
> **[3:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/sewell-wright?u=76281980&t=206)** And Wright got hit with some scathing criticism.
>
> **[3:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/sewell-wright?u=76281980&t=211)** We'll discuss just one brief response that Wright gave.
>
> **[3:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/sewell-wright?u=76281980&t=216)** So Wright himself said that he never made the preposterous claim that the theory of path coefficients provides a general formula for the deduction of causal relations.
>
> **[3:49](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/sewell-wright?u=76281980&t=229)** The key point is this, Wright is providing the causal explanation in the form of the diagram.
>
> **[3:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/sewell-wright?u=76281980&t=237)** He's providing that, he's not discovering it from the data.
>
> **[4:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/sewell-wright?u=76281980&t=241)** So he was trying to use the diagram and the data together to weigh the plausibility of his theory.
>
> **[4:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/sewell-wright?u=76281980&t=250)** Now we'll get deeper into this with some examples, but first we want to take a chance to review some terms and to get more familiar with path diagrams.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Cross-References:** we talked about (1)
> **UI Navigation:** scroll down (1)
> **Definitions:** is a  (1)
> **Analogies:** picture (1)
> **Warnings:** note that (1)
> **Speakers:** - [narrator] (1)

#### [Introducing path analysis and SEM](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introducing-path-analysis-and-sem?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introducing-path-analysis-and-sem?u=76281980&t=0)** - [Instructor] So what is path analysis and structural equation modeling all about?
>
> **[0:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introducing-path-analysis-and-sem?u=76281980&t=5)** Well, remember our mediating variable, perks for frequent business travelers.
>
> **[0:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introducing-path-analysis-and-sem?u=76281980&t=11)** Path analysis allows you to run a single model, rather than trying to run a bunch of different regression models.
>
> **[0:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introducing-path-analysis-and-sem?u=76281980&t=17)** Trying to show business predicts perks, perks predicts personal, but business fails to predict personal, when controlling for perks.
>
> **[0:27](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introducing-path-analysis-and-sem?u=76281980&t=27)** Path analysis allows you to run one comprehensive model with a single measure of overall fit.
>
> **[0:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introducing-path-analysis-and-sem?u=76281980&t=35)** But there's more to structural equation modeling.
>
> **[0:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introducing-path-analysis-and-sem?u=76281980&t=38)** It adds another layer.
>
> **[0:41](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introducing-path-analysis-and-sem?u=76281980&t=41)** First, let's review some terms.
>
> **[0:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introducing-path-analysis-and-sem?u=76281980&t=44)** So what is a manifest or observed variable?
>
> **[0:48](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introducing-path-analysis-and-sem?u=76281980&t=48)** Well, it's a variable that can be measured directly.
>
> **[0:51](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introducing-path-analysis-and-sem?u=76281980&t=51)** An example would be our business spend, you just added up and you've got your number.
>
> **[0:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introducing-path-analysis-and-sem?u=76281980&t=57)** We'll see this soon enough, but observe variables are always shown with rectangles.
>
> **[1:04](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introducing-path-analysis-and-sem?u=76281980&t=64)** We'll see that in the diagrams later.
>
> **[1:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introducing-path-analysis-and-sem?u=76281980&t=67)** What about a latent or unobserved variable?
>
> **[1:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introducing-path-analysis-and-sem?u=76281980&t=71)** Well, it's not measured directly.
>
> **[1:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introducing-path-analysis-and-sem?u=76281980&t=73)** You know, even something like perks could potentially fall into this category.
>
> **[1:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introducing-path-analysis-and-sem?u=76281980&t=78)** You could just add up perks as a dollar amount then it would be observed and it would be a rectangle.
>
> **[1:25](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introducing-path-analysis-and-sem?u=76281980&t=85)** But there's another way to measure it.
>
> **[1:27](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introducing-path-analysis-and-sem?u=76281980&t=87)** That would be a latent or unobserved variable.
>
> **[1:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introducing-path-analysis-and-sem?u=76281980&t=91)** You might measure perceived VIP status within a corporate hotel group by measuring it with a survey.
>
> **[1:40](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introducing-path-analysis-and-sem?u=76281980&t=100)** And you can ask a series of questions like to what degree do you feel that your stay was enhanced by your VIP status?
>
> **[1:48](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introducing-path-analysis-and-sem?u=76281980&t=108)** Or does the likelihood of an upgrade, factor into your choice of property when you book?
>
> **[1:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introducing-path-analysis-and-sem?u=76281980&t=117)** Then it would be an unobserved variable indicated with an oval shape because it's not being measured directly.
>
> **[2:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introducing-path-analysis-and-sem?u=76281980&t=125)** It's being measured indirectly through the survey questions.
>
> **[2:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introducing-path-analysis-and-sem?u=76281980&t=130)** Finding a one sentence definition of SEM is hard to come by.
>
> **[2:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introducing-path-analysis-and-sem?u=76281980&t=135)** So I've written my own.
>
> **[2:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introducing-path-analysis-and-sem?u=76281980&t=137)** SEM allows you to test theoretical relationships, including manifest and latent variables.
>
> **[2:27](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introducing-path-analysis-and-sem?u=76281980&t=147)** So with SEM, you always have a theory.
>
> **[2:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introducing-path-analysis-and-sem?u=76281980&t=150)** This is not an exploratory technique.
>
> **[2:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introducing-path-analysis-and-sem?u=76281980&t=153)** You can test for mediation.
>
> **[2:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introducing-path-analysis-and-sem?u=76281980&t=155)** Like the example we just saw, which would be path analysis because we used only manifest variables.
>
> **[2:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introducing-path-analysis-and-sem?u=76281980&t=163)** But where it gets really interesting is when you have both manifest and latent variables and that's what we're going to call SEM.
>
> **[2:51](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introducing-path-analysis-and-sem?u=76281980&t=171)** We'll have opportunities to see examples of both.

> [!info]- Semantic Content
>
> **Env Vars:** sem (4), vip (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [SEM example: Intention](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/sem-example-intention?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/sem-example-intention?u=76281980&t=0)** - [Instructor] There is a theory in organizational behavior called the theory of planned behavior.
>
> **[0:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/sem-example-intention?u=76281980&t=7)** And it's a great example of what SCM can do.
>
> **[0:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/sem-example-intention?u=76281980&t=11)** So we're going to briefly discuss this theory, not for the sake of really understanding the underlining psychology, but to better understand SCM diagrams.
>
> **[0:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/sem-example-intention?u=76281980&t=23)** So I want to quote from an article written by one of the developers of this theory.
>
> **[0:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/sem-example-intention?u=76281980&t=30)** "Intentions to perform behaviors of different kinds can be predicted with high accuracy from attitudes towards the behavior, subjective norms, and perceived behavioral control."
>
> **[0:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/sem-example-intention?u=76281980&t=45)** I've underlined those three words, attitudes, norms, and perceived behavioral control because we're going to see them in the diagram.
>
> **[0:55](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/sem-example-intention?u=76281980&t=55)** You can think of them as.
>
> **[0:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/sem-example-intention?u=76281980&t=57)** What do I think about it?
>
> **[0:58](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/sem-example-intention?u=76281980&t=58)** What do others think about it?
>
> **[1:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/sem-example-intention?u=76281980&t=60)** And do I think I can do it?
>
> **[1:04](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/sem-example-intention?u=76281980&t=64)** The author goes on to elaborate here.
>
> **[1:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/sem-example-intention?u=76281980&t=66)** Now, the reason we're reading this is to see how the words get turned into a diagram.
>
> **[1:12](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/sem-example-intention?u=76281980&t=72)** So he continues with this part of the theory, "And these intentions, together with perceptions of behavioral control, account for considerable variance in actual behavior."
>
> **[1:25](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/sem-example-intention?u=76281980&t=85)** So it's going to be easier to see in the diagram, but what he's describing is a mediator.
>
> **[1:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/sem-example-intention?u=76281980&t=91)** He's describing that intention acts as a mediator between the three factors in the actual behavior.
>
> **[1:40](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/sem-example-intention?u=76281980&t=100)** Finally, he goes on to say, "Much has been made of the fact that general dispositions," those are the three factors, "tend to be poor predictors of behavior in specific situations."
>
> **[1:53](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/sem-example-intention?u=76281980&t=113)** What's the translation?
>
> **[1:55](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/sem-example-intention?u=76281980&t=115)** He's trying to say that you're not going to do a very good job explaining behavior unless you take into account the mediator, intention.
>
> **[2:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/sem-example-intention?u=76281980&t=125)** So what do you get?
>
> **[2:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/sem-example-intention?u=76281980&t=126)** You get something like this, attitude, norms, and PBC predicting intention, which in turn predicts behavior.
>
> **[2:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/sem-example-intention?u=76281980&t=135)** Now, again, we won't get into the psychology of this.
>
> **[2:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/sem-example-intention?u=76281980&t=138)** What I want to explain now is how you can have an academic debating with another academic using these diagrams and the data and the math as part of that discussion.
>
> **[2:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/sem-example-intention?u=76281980&t=151)** So in the literature, including the author that we just quoted, will sometimes talk about PBC having both a direct and a direct relationship with behavior.
>
> **[2:47](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/sem-example-intention?u=76281980&t=167)** So that would be two arrows, and you'll see diagrams like this.
>
> **[2:52](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/sem-example-intention?u=76281980&t=172)** Now, both this theory and SCM are big topics, but we're going to stay focused on getting comfortable with the basic idea of what to look for in a diagram like this.
>
> **[3:04](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/sem-example-intention?u=76281980&t=184)** So, we've seen two different plausible ways to set this up, and here's a third.
>
> **[3:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/sem-example-intention?u=76281980&t=190)** Someone else might make the case that PBC is only directly related.
>
> **[3:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/sem-example-intention?u=76281980&t=197)** These different theories can be tested.
>
> **[3:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/sem-example-intention?u=76281980&t=200)** So you can think of SCM as a way of encapsulating your theory in the form of a diagram, which can be compared to other theories, and ultimately confirmed, or disconfirmed, against the data with one overall measure of fit.
>
> **[3:39](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/sem-example-intention?u=76281980&t=219)** Now we won't be discussing the long list of types of model fit, but it's interesting to mention that they include statistically inspired ones like root mean squared error of approximation.
>
> **[3:53](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/sem-example-intention?u=76281980&t=233)** You'll often just see the letters RMSEA, and even ones with names like Bayesian information criterion.
>
> **[4:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/sem-example-intention?u=76281980&t=241)** Believe me, SCM is a whole big world.
>
> **[4:04](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/sem-example-intention?u=76281980&t=244)** So we can't pursue all the detail of model fit in this course, but we will get to see more examples of models that fit the data well.

> [!info]- Semantic Content
>
> **Env Vars:** scm (5), pbc (3), rmsea (1)
> **Definitions:** is a  (3)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Myths about SEM](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/myths-about-sem?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/myths-about-sem?u=76281980&t=0)** - Kenneth Bollen, who is an influential member of the SEM community, and Judea Pearl worked together to write a paper on eight myths about SEM.
>
> **[0:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/myths-about-sem?u=76281980&t=11)** It revisits an established topic for us.
>
> **[0:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/myths-about-sem?u=76281980&t=14)** Everyone seemingly is reluctant to talk about causality.
>
> **[0:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/myths-about-sem?u=76281980&t=19)** SEM is sometimes referred to as causal modeling, but it isn't hard to find articles or videos that apologize for that name and explain that correlation isn't causation.
>
> **[0:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/myths-about-sem?u=76281980&t=30)** We've heard that before.
>
> **[0:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/myths-about-sem?u=76281980&t=32)** Well, SEM is more than just correlation.
>
> **[0:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/myths-about-sem?u=76281980&t=36)** So as they state the myth, number one is SEM's aim to establish causal relations from associations alone.
>
> **[0:46](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/myths-about-sem?u=76281980&t=46)** Now I recommend the paper, but it's quite lengthy.
>
> **[0:48](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/myths-about-sem?u=76281980&t=48)** So we're only going to talk about this first myth.
>
> **[0:52](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/myths-about-sem?u=76281980&t=52)** The authors start by providing page after page of quotes of academics cautioning against saying anything about causality, even with SEM.
>
> **[1:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/myths-about-sem?u=76281980&t=61)** But then they start to refute those arguments, and they make their position very clear.
>
> **[1:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/myths-about-sem?u=76281980&t=66)** "Lest there be any doubt: SEM does not aim to establish causal relations from associations alone."
>
> **[1:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/myths-about-sem?u=76281980&t=75)** Then they start to elaborate on what SEM does do, and I think this is important for our discussion.
>
> **[1:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/myths-about-sem?u=76281980&t=82)** "Researchers do not derive relations from an SEM.
>
> **[1:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/myths-about-sem?u=76281980&t=86)** Rather, the SEM represents and relies upon the causal assumptions of the researcher."
>
> **[1:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/myths-about-sem?u=76281980&t=94)** So the theory is coming from the researcher.
>
> **[1:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/myths-about-sem?u=76281980&t=97)** The confirmation, as we will see, comes from the data.
>
> **[1:41](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/myths-about-sem?u=76281980&t=101)** "These assumptions derive from theory," and then the authors list what this entails.
>
> **[1:48](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/myths-about-sem?u=76281980&t=108)** The assumptions derive from research design, prior studies, scientific knowledge, logical arguments, temporal priorities, and other evidence "that the researcher can marshal in support of them."
>
> **[2:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/myths-about-sem?u=76281980&t=125)** Now remember, this diagram that we're talking about isn't just a visualization.
>
> **[2:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/myths-about-sem?u=76281980&t=130)** You can think of it as a physical manifestation of the theory by indicating what predicts what.
>
> **[2:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/myths-about-sem?u=76281980&t=136)** Now you'll hear it suggested by skeptics that only an experiment can do the job.
>
> **[2:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/myths-about-sem?u=76281980&t=142)** But that's a shame because SEM is so often used with observational data.
>
> **[2:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/myths-about-sem?u=76281980&t=148)** So Pearl and Bollen nail it down this way.
>
> **[2:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/myths-about-sem?u=76281980&t=152)** "SEM is an inference engine that takes in two inputs, qualitative causal assumptions and empirical data.
>
> **[2:42](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/myths-about-sem?u=76281980&t=162)** Failure to fit the data casts doubt on the strong causal assumptions of zero coefficients or zero covariances and guides the researcher to diagnose or repair the structural misspecifications."
>
> **[2:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/myths-about-sem?u=76281980&t=177)** Now I want to pause here on this zero coefficient business.
>
> **[3:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/myths-about-sem?u=76281980&t=180)** It's really important.
>
> **[3:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/myths-about-sem?u=76281980&t=181)** That's the missing arrows.
>
> **[3:04](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/myths-about-sem?u=76281980&t=184)** The arrows that are left out are just as important as the arrows that are put in.
>
> **[3:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/myths-about-sem?u=76281980&t=189)** They together form the theory.
>
> **[3:12](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/myths-about-sem?u=76281980&t=192)** Next, I want to talk a little bit about fit.
>
> **[3:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/myths-about-sem?u=76281980&t=195)** Failure to fit the data, what does that mean?
>
> **[3:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/myths-about-sem?u=76281980&t=198)** Well, it's going to be using techniques like we very briefly mentioned RMSEA or BIC.
>
> **[3:25](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/myths-about-sem?u=76281980&t=205)** Again, that's root mean square error of approximation, or Bayesian information criterion.
>
> **[3:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/myths-about-sem?u=76281980&t=210)** And believe me, there's dozens of those.
>
> **[3:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/myths-about-sem?u=76281980&t=213)** That's just two that I've mentioned.
>
> **[3:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/myths-about-sem?u=76281980&t=215)** Here we go, a key point.
>
> **[3:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/myths-about-sem?u=76281980&t=217)** "Fitting the data does not prove the causal assumptions, but it makes them tentatively more plausible."
>
> **[3:46](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/myths-about-sem?u=76281980&t=226)** Again, theory from the researcher, confirmation from the data.
>
> **[3:51](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/myths-about-sem?u=76281980&t=231)** I know that's a lot to digest, but I want to help make you a little bit more brave when you try to talk about causality and you are challenged.
>
> **[4:03](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/myths-about-sem?u=76281980&t=243)** But if you do your homework, you develop a good theory, you master the right techniques, and SEM is one of those techniques, you really can ask causal questions with SEM.

> [!info]- Semantic Content
>
> **Env Vars:** sem (14), rmsea (1), bic (1)
> **CLI Commands:** make (2), find (1)
> **Definitions:** is an  (2)
> **Analogies:** think of it as (1)
> **Speakers:** - kenneth (1)

#### [Latent variables in SEM](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/latent-variables-in-sem?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/latent-variables-in-sem?u=76281980&t=0)** - [Instructor] Okay, it's time to talk more about latent or unobserved variables.
>
> **[0:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/latent-variables-in-sem?u=76281980&t=6)** So far, we've only imagined a scenario where perceived VIP status could be measured with survey questions.
>
> **[0:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/latent-variables-in-sem?u=76281980&t=14)** This one uses actual data.
>
> **[0:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/latent-variables-in-sem?u=76281980&t=16)** It's figure 128 in the same PDF that we downloaded when we talked about ANCOVA.
>
> **[0:24](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/latent-variables-in-sem?u=76281980&t=24)** So we see five variables: four rectangles and one oval.
>
> **[0:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/latent-variables-in-sem?u=76281980&t=30)** The rectangles are familiar if you remember the dataset.
>
> **[0:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/latent-variables-in-sem?u=76281980&t=34)** English honors, math honors, science honors and social studies honors.
>
> **[0:39](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/latent-variables-in-sem?u=76281980&t=39)** At first, you might think that level is something you've seen too but the variable in the dataset is average level, which is a simple average of the four.
>
> **[0:50](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/latent-variables-in-sem?u=76281980&t=50)** This is a weighted average of the four using factor analysis.
>
> **[0:56](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/latent-variables-in-sem?u=76281980&t=56)** It's a latent or unobserved variable and that's why it has an oval.
>
> **[1:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/latent-variables-in-sem?u=76281980&t=61)** So how does this help us?
>
> **[1:03](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/latent-variables-in-sem?u=76281980&t=63)** We're about to look at a more elaborate example and it will be very helpful to get familiar with this classic pattern in SEM.
>
> **[1:12](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/latent-variables-in-sem?u=76281980&t=72)** So let's briefly review all the component parts.
>
> **[1:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/latent-variables-in-sem?u=76281980&t=75)** Level is a latent trait.
>
> **[1:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/latent-variables-in-sem?u=76281980&t=77)** The rectangles are observed variables that are components of level.
>
> **[1:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/latent-variables-in-sem?u=76281980&t=82)** Note that the arrows point away from level.
>
> **[1:24](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/latent-variables-in-sem?u=76281980&t=84)** That's the way it always looks in SEM.
>
> **[1:27](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/latent-variables-in-sem?u=76281980&t=87)** Now, we won't be reviewing factor analysis or the math in this course.
>
> **[1:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/latent-variables-in-sem?u=76281980&t=93)** But if you happen to already be familiar with factor analysis, the little numbers that you see next to the arrows and in the upper right-hand corner of the rectangles are the factor loadings and the commonalities.
>
> **[1:46](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/latent-variables-in-sem?u=76281980&t=106)** If you aren't familiar with those terms, you won't need them in this course.
>
> **[1:50](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/latent-variables-in-sem?u=76281980&t=110)** The circles are error terms.
>
> **[1:53](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/latent-variables-in-sem?u=76281980&t=113)** You might be familiar with the notion of error terms if you know your [[Linear Regression]] but we won't be discussing that detail in this course either.
>
> **[2:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/latent-variables-in-sem?u=76281980&t=121)** Finally, there are some stats and a number in a larger font as the captions basically.
>
> **[2:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/latent-variables-in-sem?u=76281980&t=128)** Specifically, a chi square and an RMSEA.
>
> **[2:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/latent-variables-in-sem?u=76281980&t=133)** Those are both indications of fit.
>
> **[2:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/latent-variables-in-sem?u=76281980&t=136)** The chi square is non-significant, which is actually what we want in SEM.
>
> **[2:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/latent-variables-in-sem?u=76281980&t=140)** So a p-value below .05 is good.
>
> **[2:24](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/latent-variables-in-sem?u=76281980&t=144)** And the RMSEA indicates a good fit.
>
> **[2:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/latent-variables-in-sem?u=76281980&t=148)** That's root mean square error of approximation.
>
> **[2:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/latent-variables-in-sem?u=76281980&t=152)** Now, there's just one thing to focus on and it's why we're looking at this.
>
> **[2:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/latent-variables-in-sem?u=76281980&t=158)** The overall relationship between the oval and the rectangles.
>
> **[2:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/latent-variables-in-sem?u=76281980&t=163)** You'll be seeing that same pattern again in the very next example.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linear Regression]] (1)
> **Env Vars:** sem (3), rmsea (2), vip (1), pdf (1), ancova (1)
> **Definitions:** is a  (3)
> **Cross-References:** we talked about (1)
> **Tools:** notion (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Finding direction of causality with SEM (PSAT)](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/finding-direction-of-causality-with-sem-psat?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/finding-direction-of-causality-with-sem-psat?u=76281980&t=0)** - [Instructor] Okay, we're in the same PDF, and then we scroll down to Figure 1-40.
>
> **[0:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/finding-direction-of-causality-with-sem-psat?u=76281980&t=6)** There are several examples in here, but we're going to look at just one.
>
> **[0:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/finding-direction-of-causality-with-sem-psat?u=76281980&t=10)** This one example will give you a taste for where SCM can take you, and this is my favorite part in the context of this course, we'll see how to explore the direction of causality.
>
> **[0:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/finding-direction-of-causality-with-sem-psat?u=76281980&t=23)** That was one of our first topics in the companion course, and it's been a theme throughout both courses.
>
> **[0:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/finding-direction-of-causality-with-sem-psat?u=76281980&t=30)** So, how do you digest all of this?
>
> **[0:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/finding-direction-of-causality-with-sem-psat?u=76281980&t=35)** The first thing to do is to focus on the ovals, but not the variables that are components of those same latent traits, that simplifies things greatly.
>
> **[0:46](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/finding-direction-of-causality-with-sem-psat?u=76281980&t=46)** So Level is the honors classes and Readiness is the PSAT scores.
>
> **[0:53](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/finding-direction-of-causality-with-sem-psat?u=76281980&t=53)** Once you get that, you can ignore MPSAT, verbal PSAT, English, math, science, social studies honors.
>
> **[1:02](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/finding-direction-of-causality-with-sem-psat?u=76281980&t=62)** All of those rectangles, you can set aside for the moment.
>
> **[1:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/finding-direction-of-causality-with-sem-psat?u=76281980&t=66)** So once you've established all that, you've got Level and Readiness, and there's just one more variable that isn't an oval, but that also is not a component of the latent traits, and that's SN.
>
> **[1:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/finding-direction-of-causality-with-sem-psat?u=76281980&t=83)** So really, three to focus on.
>
> **[1:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/finding-direction-of-causality-with-sem-psat?u=76281980&t=86)** We can summarize the main relationships in the following way, Level and SN work together to predict PSAT scores, and PSAT scores also work in the opposite direction to predict Level.
>
> **[1:42](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/finding-direction-of-causality-with-sem-psat?u=76281980&t=102)** And it's possible that this could be, the honors classes predict scores, and then those scores predict getting into honors classes.
>
> **[1:52](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/finding-direction-of-causality-with-sem-psat?u=76281980&t=112)** Now, this doesn't mean that we can make every arrow go in both directions, that'd be too many variables.
>
> **[2:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/finding-direction-of-causality-with-sem-psat?u=76281980&t=120)** There's actually an issue where you run out of degrees of freedom, which gets complicated.
>
> **[2:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/finding-direction-of-causality-with-sem-psat?u=76281980&t=127)** We're not going to get into that technicality, but it's important to underscore that this is not an exploratory technique.
>
> **[2:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/finding-direction-of-causality-with-sem-psat?u=76281980&t=134)** Having said that, and this is the fun part, this overall model fits the data fairly well.
>
> **[2:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/finding-direction-of-causality-with-sem-psat?u=76281980&t=142)** The P value is slightly significant, which is bad news in SCM, but it's close to 0.05.
>
> **[2:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/finding-direction-of-causality-with-sem-psat?u=76281980&t=150)** So this model is likely pretty close to an even better model.
>
> **[2:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/finding-direction-of-causality-with-sem-psat?u=76281980&t=155)** So there really is some evidence that the arrows could go in both directions, but the stronger arrow is pointing down.
>
> **[2:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/finding-direction-of-causality-with-sem-psat?u=76281980&t=164)** The arrow pointing down is 0.67, and the arrow pointing up is 0.13.
>
> **[2:51](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/finding-direction-of-causality-with-sem-psat?u=76281980&t=171)** Those are like standardized coefficients and regression, and larger would mean more important.
>
> **[2:58](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/finding-direction-of-causality-with-sem-psat?u=76281980&t=178)** So what would you try next?
>
> **[3:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/finding-direction-of-causality-with-sem-psat?u=76281980&t=181)** Well, the PDF actually tries a bunch of these, and eventually finds the best one.
>
> **[3:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/finding-direction-of-causality-with-sem-psat?u=76281980&t=186)** That would take a deeper dive into SCM than we're able to do, but you might want to take a look at some of those other examples.
>
> **[3:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/finding-direction-of-causality-with-sem-psat?u=76281980&t=195)** However, we've accomplished our mission.
>
> **[3:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/finding-direction-of-causality-with-sem-psat?u=76281980&t=199)** We've seen a fairly elaborate application of SCM, using real data, and we've seen one method to explore the direction of causality using SCM.

> [!info]- Semantic Content
>
> **Env Vars:** scm (5), psat (4), pdf (2), mpsat (1)
> **Versions:** 0.05 (1), 0.67 (1), 0.13 (1)
> **CLI Commands:** make (1)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [instructor] (1)


### 5. Causal Modeling with Bayesian Networks

[↑ Back to Table of Contents](#table-of-contents)

#### [Judea Pearl and the causal revolution](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/judea-pearl-and-the-causal-revolution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/judea-pearl-and-the-causal-revolution?u=76281980&t=0)** - Judea Pearl has truly been one of the heroes of this course.
>
> **[0:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/judea-pearl-and-the-causal-revolution?u=76281980&t=5)** This section of the course is a major milestone in the journey that began with the companion course.
>
> **[0:12](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/judea-pearl-and-the-causal-revolution?u=76281980&t=12)** We've talked about the challenges of causality.
>
> **[0:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/judea-pearl-and-the-causal-revolution?u=76281980&t=15)** We've talked about [[Statistics]] and experiments.
>
> **[0:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/judea-pearl-and-the-causal-revolution?u=76281980&t=19)** We've introduced Bayesian statistics and we've even talked about SEM.
>
> **[0:24](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/judea-pearl-and-the-causal-revolution?u=76281980&t=24)** Now we're going to talk about a technique that Pearl himself has pioneered, Bayesian networks.
>
> **[0:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/judea-pearl-and-the-causal-revolution?u=76281980&t=31)** First a bit about his journey.
>
> **[0:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/judea-pearl-and-the-causal-revolution?u=76281980&t=33)** In the preface to "The Book of Why" he recalls some of the claims he made about causality 20 years ago when his book, "Causality" was released.
>
> **[0:42](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/judea-pearl-and-the-causal-revolution?u=76281980&t=42)** "Causality has undergone a major transformation from a concept shrouded in mystery into a mathematical object with well defined semantics and well founded logic."
>
> **[0:54](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/judea-pearl-and-the-causal-revolution?u=76281980&t=54)** His description of his story takes a couple of pages but I find this phrase particularly powerful, "Practical problems relying on causal information that long were regarded as either metaphysical or unmanageable can now be solved using elementary mathematics."
>
> **[1:12](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/judea-pearl-and-the-causal-revolution?u=76281980&t=72)** He goes on to say that while colleagues accused him of being a bit bold, he feels that what he called a transformation has truly turned out to be a revolution.
>
> **[1:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/judea-pearl-and-the-causal-revolution?u=76281980&t=82)** He calls it the causal revolution.
>
> **[1:25](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/judea-pearl-and-the-causal-revolution?u=76281980&t=85)** He wouldn't be alone in feeling this way.
>
> **[1:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/judea-pearl-and-the-causal-revolution?u=76281980&t=88)** A few years ago, he won the Turing Award, the most prestigious award in computer science.
>
> **[1:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/judea-pearl-and-the-causal-revolution?u=76281980&t=94)** Now Bayesian networks are a big topic and I want to provide some context, but I have good news.
>
> **[1:40](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/judea-pearl-and-the-causal-revolution?u=76281980&t=100)** We've been preparing for this section of the course all along.
>
> **[1:46](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/judea-pearl-and-the-causal-revolution?u=76281980&t=106)** Some of the things that we've already seen are conditional [[Probability]] during our discussion of Bayes, causal diagrams, we've seen a number of them now, mediation, and I bet you'll recall our discussion of Simpson's paradox.
>
> **[2:04](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/judea-pearl-and-the-causal-revolution?u=76281980&t=124)** And there's a topic that has been a theme throughout this course and the companion course.
>
> **[2:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/judea-pearl-and-the-causal-revolution?u=76281980&t=130)** Why exactly is there such a reluctance to discuss causation when you have observational data?
>
> **[2:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/judea-pearl-and-the-causal-revolution?u=76281980&t=137)** That has been a big part of getting ready for Bayesian networks too.
>
> **[2:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/judea-pearl-and-the-causal-revolution?u=76281980&t=143)** If there's a big topic that we have to introduce here to further prepare us for the examples.
>
> **[2:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/judea-pearl-and-the-causal-revolution?u=76281980&t=148)** Pearl's notion of doing versus seeing.
>
> **[2:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/judea-pearl-and-the-causal-revolution?u=76281980&t=153)** In the book of Y, he uses the example of lifespan and a drug.
>
> **[2:39](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/judea-pearl-and-the-causal-revolution?u=76281980&t=159)** The standard notation as we see here listed first is if we want to look at lifespan given a drug is probability of L given D.
>
> **[2:53](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/judea-pearl-and-the-causal-revolution?u=76281980&t=173)** But then Pearl introduces the following notation, P of L given do D and P of L given do not D.
>
> **[3:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/judea-pearl-and-the-causal-revolution?u=76281980&t=187)** There's two key points.
>
> **[3:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/judea-pearl-and-the-causal-revolution?u=76281980&t=189)** First, they're not the same.
>
> **[3:12](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/judea-pearl-and-the-causal-revolution?u=76281980&t=192)** The first represents observing or seeing.
>
> **[3:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/judea-pearl-and-the-causal-revolution?u=76281980&t=196)** For instance, patients that have voluntarily taken the drug.
>
> **[3:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/judea-pearl-and-the-causal-revolution?u=76281980&t=200)** The other two equations predict the effects of an intervention.
>
> **[3:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/judea-pearl-and-the-causal-revolution?u=76281980&t=206)** And the intervention is the do as in doing or the do in the formula.
>
> **[3:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/judea-pearl-and-the-causal-revolution?u=76281980&t=214)** We'll see how this works in the Bayesian network software.
>
> **[3:39](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/judea-pearl-and-the-causal-revolution?u=76281980&t=219)** The software will do the math for us.
>
> **[3:41](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/judea-pearl-and-the-causal-revolution?u=76281980&t=221)** So we won't be needing these formulas again in this course but it's important to understand that Pearl and the software make a distinction between doing and seeing.
>
> **[3:55](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/judea-pearl-and-the-causal-revolution?u=76281980&t=235)** As usual, the phrasing in "The Book of Why" itself is priceless.
>
> **[3:59](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/judea-pearl-and-the-causal-revolution?u=76281980&t=239)** "This difference between seeing and doing is fundamental and explains why we do not regard the falling barometer to be a cause of the coming storm.
>
> **[4:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/judea-pearl-and-the-causal-revolution?u=76281980&t=250)** One of the crowning achievements of the causal revolution has been to explain how to predict the effects of an intervention without actually enacting it."
>
> **[4:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/judea-pearl-and-the-causal-revolution?u=76281980&t=262)** And finally, I want to summarize our opening discussion of Bayesian networks with another quote from Pearl, "You are smarter than your data.
>
> **[4:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/judea-pearl-and-the-causal-revolution?u=76281980&t=272)** Data do not understand causes and effects; humans do."
>
> **[4:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/judea-pearl-and-the-causal-revolution?u=76281980&t=278)** So let's now explore some examples of Bayesian networks.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Statistics]] (2), [[Probability]] (2)
> **CLI Commands:** find (1), make (1)
> **Env Vars:** sem (1)
> **Tools:** notion (1)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)
> **Speakers:** - judea (1)

#### [Downloading BayesiaLab and resources](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/downloading-bayesialab-and-resources?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/downloading-bayesialab-and-resources?u=76281980&t=0)** - [Instructor] Okay, here's the software that we're going to use.
>
> **[0:03](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/downloading-bayesialab-and-resources?u=76281980&t=3)** The company name is Bayesia and BayesiaLab 10 is the software that I'm going to be using to do a demonstration.
>
> **[0:12](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/downloading-bayesialab-and-resources?u=76281980&t=12)** If you scroll down a little bit, there is a discussion of what is a Bayesia Network and there's an explicit reference to Judea Pearl here.
>
> **[0:24](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/downloading-bayesialab-and-resources?u=76281980&t=24)** By the way, the Bayesia folks are quite familiar with Pearl.
>
> **[0:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/downloading-bayesialab-and-resources?u=76281980&t=30)** They've become friends over the years.
>
> **[0:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/downloading-bayesialab-and-resources?u=76281980&t=33)** Pearl has spoken at BayesiaLab conferences and so on.
>
> **[0:40](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/downloading-bayesialab-and-resources?u=76281980&t=40)** So it's an interesting section.
>
> **[0:41](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/downloading-bayesialab-and-resources?u=76281980&t=41)** You may want to check it out.
>
> **[0:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/downloading-bayesialab-and-resources?u=76281980&t=43)** Now, there is a trial.
>
> **[0:46](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/downloading-bayesialab-and-resources?u=76281980&t=46)** You can see here, there's a 30-day trial.
>
> **[0:49](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/downloading-bayesialab-and-resources?u=76281980&t=49)** Now here's my advice on this.
>
> **[0:52](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/downloading-bayesialab-and-resources?u=76281980&t=52)** We're going to be doing three fairly brief examples.
>
> **[0:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/downloading-bayesialab-and-resources?u=76281980&t=57)** One that's very basic.
>
> **[1:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/downloading-bayesialab-and-resources?u=76281980&t=60)** One that's a bit more elaborate that will give you a feel for how Bayesia Networks work.
>
> **[1:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/downloading-bayesialab-and-resources?u=76281980&t=66)** And then, finally, a third one that is quite a bit more elaborate that we're going to talk about but not do a walkthrough.
>
> **[1:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/downloading-bayesialab-and-resources?u=76281980&t=74)** Because of that, I'm going to recommend that you stay focused on watching the demo and referring to the references, but do that once before you consider clicking along.
>
> **[1:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/downloading-bayesialab-and-resources?u=76281980&t=90)** And the reason for that is the supporting materials are really quite extensive.
>
> **[1:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/downloading-bayesialab-and-resources?u=76281980&t=95)** If you go to the BayesiaLab Knowledge Hub and Library, there are two resources in particular that I'm going to recommend.
>
> **[1:47](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/downloading-bayesialab-and-resources?u=76281980&t=107)** There is the eBook.
>
> **[1:53](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/downloading-bayesialab-and-resources?u=76281980&t=113)** And then, going back to this page, there is an extensive section, BayesiaLab webinars, seminars, tutorials, examples and case studies.
>
> **[2:03](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/downloading-bayesialab-and-resources?u=76281980&t=123)** All three of our examples are going to come either from the eBook or from here.
>
> **[2:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/downloading-bayesialab-and-resources?u=76281980&t=128)** So my suggestion is watch the next three videos, do a little bit of reading in the resources, get familiar, set aside a block of time, then download the trial and then try the examples along with me.
>
> **[2:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/downloading-bayesialab-and-resources?u=76281980&t=148)** Certainly you can do that now, but that's my recommendation, that you watch first and then circle back and try the examples.

> [!info]- Semantic Content
>
> **Definitions:** is a  (3), is an  (1)
> **Code Identifiers:** ebook (2)
> **UI Navigation:** scroll down (1), go to (1)
> **Exercise Files:** download the (1)
> **Speakers:** - [instructor] (1)

#### [Introducing BayesiaLab: Hair and eye color](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introducing-bayesialab-hair-and-eye-color?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introducing-bayesialab-hair-and-eye-color?u=76281980&t=0)** - [Instructor] So we're in the BayesiaLab resources.
>
> **[0:03](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introducing-bayesialab-hair-and-eye-color?u=76281980&t=3)** And I'm going to show you where to get a very simple example from the ebook.
>
> **[0:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introducing-bayesialab-hair-and-eye-color?u=76281980&t=8)** So if you scroll down and you go here to ebook, we're going to be doing an example.
>
> **[0:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introducing-bayesialab-hair-and-eye-color?u=76281980&t=14)** An example that you're going to recognize, by the way, from chapter two.
>
> **[0:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introducing-bayesialab-hair-and-eye-color?u=76281980&t=19)** Bayesian network theory.
>
> **[0:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introducing-bayesialab-hair-and-eye-color?u=76281980&t=21)** And, of course, there's some good information there that you might want to return to and review.
>
> **[0:25](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introducing-bayesialab-hair-and-eye-color?u=76281980&t=25)** But here we go, I bet you're going to remember this.
>
> **[0:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introducing-bayesialab-hair-and-eye-color?u=76281980&t=28)** This is the eye color and hair color data set that we used in an earlier challenge and solution.
>
> **[0:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introducing-bayesialab-hair-and-eye-color?u=76281980&t=37)** And there are links that allow you to get this data or to look at the BayesiaLab file, which I've already loaded.
>
> **[0:46](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introducing-bayesialab-hair-and-eye-color?u=76281980&t=46)** So let's take a look at it.
>
> **[0:49](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introducing-bayesialab-hair-and-eye-color?u=76281980&t=49)** Okay, so here we are in BayesiaLab.
>
> **[0:53](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introducing-bayesialab-hair-and-eye-color?u=76281980&t=53)** I'm going to recommend that you just watch this example.
>
> **[0:56](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introducing-bayesialab-hair-and-eye-color?u=76281980&t=56)** If you care to play around with the software, you can certainly do so, but I'm going to recommend that perhaps you watch this video a second time if you do so.
>
> **[1:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introducing-bayesialab-hair-and-eye-color?u=76281980&t=65)** The reason is I want to stay focused on the concepts and I'm going to make very little reference to the point and click.
>
> **[1:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introducing-bayesialab-hair-and-eye-color?u=76281980&t=71)** So, here we go.
>
> **[1:12](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introducing-bayesialab-hair-and-eye-color?u=76281980&t=72)** I'm going to double click on eye, and we can see the [[Probability]] distribution for blue, brown, green, and hazel.
>
> **[1:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introducing-bayesialab-hair-and-eye-color?u=76281980&t=80)** Notice it's just four values, it's not a matrix at all.
>
> **[1:24](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introducing-bayesialab-hair-and-eye-color?u=76281980&t=84)** Going to click on okay.
>
> **[1:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introducing-bayesialab-hair-and-eye-color?u=76281980&t=86)** Then we're going to go down to hair.
>
> **[1:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introducing-bayesialab-hair-and-eye-color?u=76281980&t=88)** And notice here we have a matrix.
>
> **[1:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introducing-bayesialab-hair-and-eye-color?u=76281980&t=90)** So what's going on?
>
> **[1:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introducing-bayesialab-hair-and-eye-color?u=76281980&t=92)** Well, we have the marginal probabilities for eye, but we have the conditional probabilities for hair.
>
> **[1:41](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introducing-bayesialab-hair-and-eye-color?u=76281980&t=101)** And that's going to bring back some memories I hope of when we were talking about this data set the last time.
>
> **[1:49](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introducing-bayesialab-hair-and-eye-color?u=76281980&t=109)** Going to click on cancel.
>
> **[1:50](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introducing-bayesialab-hair-and-eye-color?u=76281980&t=110)** Then what I'm going to do is I'm going to go back up to eye and I'm going to use this button right around the center here.
>
> **[1:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introducing-bayesialab-hair-and-eye-color?u=76281980&t=117)** And I can choose between disc, badge, monitor, gauge, and bar.
>
> **[2:02](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introducing-bayesialab-hair-and-eye-color?u=76281980&t=122)** I'm going to choose monitor.
>
> **[2:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introducing-bayesialab-hair-and-eye-color?u=76281980&t=125)** Then I'm going to go to hair and do the same.
>
> **[2:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introducing-bayesialab-hair-and-eye-color?u=76281980&t=128)** And, at first, you might think what's happening?
>
> **[2:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introducing-bayesialab-hair-and-eye-color?u=76281980&t=130)** What happened to our numbers?
>
> **[2:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introducing-bayesialab-hair-and-eye-color?u=76281980&t=131)** Well, we want to switch from modeling mode, where you do the work of creating these diagrams, to validation mode.
>
> **[2:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introducing-bayesialab-hair-and-eye-color?u=76281980&t=140)** And when we go to validation mode, we can actually see that the most common eye color is brown by a little bit.
>
> **[2:27](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introducing-bayesialab-hair-and-eye-color?u=76281980&t=147)** And the most common hair color is also brown.
>
> **[2:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introducing-bayesialab-hair-and-eye-color?u=76281980&t=151)** But watch this.
>
> **[2:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introducing-bayesialab-hair-and-eye-color?u=76281980&t=152)** This is where it's going to start getting a little bit more interesting.
>
> **[2:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introducing-bayesialab-hair-and-eye-color?u=76281980&t=155)** Remember that what we would be doing is building, eventually, elaborate networks.
>
> **[2:40](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introducing-bayesialab-hair-and-eye-color?u=76281980&t=160)** So we can go in and say that someone's eye color is blue and the hair distribution updates accordingly.
>
> **[2:50](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introducing-bayesialab-hair-and-eye-color?u=76281980&t=170)** Or brown, and it updates accordingly.
>
> **[2:52](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introducing-bayesialab-hair-and-eye-color?u=76281980&t=172)** And so on, right?
>
> **[2:54](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introducing-bayesialab-hair-and-eye-color?u=76281980&t=174)** I also want to draw your attention to where it says value.
>
> **[2:58](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introducing-bayesialab-hair-and-eye-color?u=76281980&t=178)** Note that brown has a value of 1.468.
>
> **[3:02](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introducing-bayesialab-hair-and-eye-color?u=76281980&t=182)** Hazel has a slightly higher value.
>
> **[3:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introducing-bayesialab-hair-and-eye-color?u=76281980&t=186)** The values that you see, as well as numbers like the log-loss in the upper right, are getting at information gain, type considerations.
>
> **[3:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introducing-bayesialab-hair-and-eye-color?u=76281980&t=197)** Similar to what we talked about when we were talking about bits and bands.
>
> **[3:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introducing-bayesialab-hair-and-eye-color?u=76281980&t=202)** And we're not going to go into detail with that now, but there's the basics.
>
> **[3:27](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introducing-bayesialab-hair-and-eye-color?u=76281980&t=207)** So we have the simplest example that you can imagine.
>
> **[3:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introducing-bayesialab-hair-and-eye-color?u=76281980&t=211)** We have just two nodes with one arrow.
>
> **[3:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introducing-bayesialab-hair-and-eye-color?u=76281980&t=215)** And we have the marginal probabilities for eye and we have the conditional probabilities for hair.
>
> **[3:41](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introducing-bayesialab-hair-and-eye-color?u=76281980&t=221)** And as we indicate that we know something, the probabilities adjust.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Probability]] (1)
> **UI Navigation:** click on (3), go to (2), scroll down (1)
> **Analogies:** similar to (1), imagine (1)
> **CLI Commands:** make (1)
> **Versions:** 1.468 (1)
> **Cross-References:** we talked about (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Introduction to causal modeling with Bayesian networks](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introduction-to-causal-modeling-with-bayesian-networks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introduction-to-causal-modeling-with-bayesian-networks?u=76281980&t=0)** - [Instructor] This is an exciting moment because we're about to achieve an important goal of this section and really the entire two core series.
>
> **[0:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introduction-to-causal-modeling-with-bayesian-networks?u=76281980&t=8)** We're going to measure the impact of an intervention with observational data.
>
> **[0:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introduction-to-causal-modeling-with-bayesian-networks?u=76281980&t=14)** The team at Bayesia Lab have developed a wonderful example.
>
> **[0:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introduction-to-causal-modeling-with-bayesian-networks?u=76281980&t=18)** It involves asking in the question of whether buying a Super Bowl ad made a difference.
>
> **[0:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introduction-to-causal-modeling-with-bayesian-networks?u=76281980&t=23)** So a classic question of inference, in this case with Bayesian networks.
>
> **[0:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introduction-to-causal-modeling-with-bayesian-networks?u=76281980&t=30)** I want to prepare our minds for what's coming.
>
> **[0:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introduction-to-causal-modeling-with-bayesian-networks?u=76281980&t=34)** So this is going to be observational data.
>
> **[0:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introduction-to-causal-modeling-with-bayesian-networks?u=76281980&t=37)** It's a marketing survey after the Super Bowl, so obviously that also makes it retrospective.
>
> **[0:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introduction-to-causal-modeling-with-bayesian-networks?u=76281980&t=45)** The point is this is not like Fisher at Rothamsted.
>
> **[0:50](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introduction-to-causal-modeling-with-bayesian-networks?u=76281980&t=50)** Next you're going to see Simpson's paradox again, a little bit more complicated this time around.
>
> **[0:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introduction-to-causal-modeling-with-bayesian-networks?u=76281980&t=57)** We'll also see how Bayesia Lab declares a variable as an intervention.
>
> **[1:02](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introduction-to-causal-modeling-with-bayesian-networks?u=76281980&t=62)** In this case the intervention is our Super Bowl ad.
>
> **[1:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introduction-to-causal-modeling-with-bayesian-networks?u=76281980&t=66)** By implication that means that we'll see the difference between due and see, as Pearl describes it.
>
> **[1:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introduction-to-causal-modeling-with-bayesian-networks?u=76281980&t=74)** Now we won't be getting into the calculations and we won't be starting the example from scratch.
>
> **[1:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introduction-to-causal-modeling-with-bayesian-networks?u=76281980&t=82)** Doing either of those would really require an entire course on Bayesian networks.
>
> **[1:27](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introduction-to-causal-modeling-with-bayesian-networks?u=76281980&t=87)** However, I think you'll find this example very helpful in having the pieces start to fall into place.
>
> **[1:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introduction-to-causal-modeling-with-bayesian-networks?u=76281980&t=95)** I continue to be impressed with the wonderful resources in the library at Bayesia Lab.
>
> **[1:42](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introduction-to-causal-modeling-with-bayesian-networks?u=76281980&t=102)** So here we're in the Bayesia Lab webinars, seminars, tutorials, examples, and case study section.
>
> **[1:48](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introduction-to-causal-modeling-with-bayesian-networks?u=76281980&t=108)** And the one that you want to find is Media Mix Modeling And Optimization.
>
> **[1:54](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introduction-to-causal-modeling-with-bayesian-networks?u=76281980&t=114)** By the way, we're not going to get into the media mix.
>
> **[1:56](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introduction-to-causal-modeling-with-bayesian-networks?u=76281980&t=116)** We're going to only do the Super Bowl ad example.
>
> **[2:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introduction-to-causal-modeling-with-bayesian-networks?u=76281980&t=120)** And if we scroll down a little bit I just want you to see this graphic.
>
> **[2:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introduction-to-causal-modeling-with-bayesian-networks?u=76281980&t=126)** So we do an initial overall test of the aggregated data, I don't know if you see where this is going, it's just like Berkeley, we've got the aggregated data.
>
> **[2:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introduction-to-causal-modeling-with-bayesian-networks?u=76281980&t=137)** We paid a lot of money for this ad.
>
> **[2:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introduction-to-causal-modeling-with-bayesian-networks?u=76281980&t=139)** And uh oh, it actually looks like purchase went down.
>
> **[2:25](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introduction-to-causal-modeling-with-bayesian-networks?u=76281980&t=145)** But when you break this down by gender and we're about to see all this, it's actually going to help.
>
> **[2:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introduction-to-causal-modeling-with-bayesian-networks?u=76281980&t=154)** So we've seen this before.
>
> **[2:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introduction-to-causal-modeling-with-bayesian-networks?u=76281980&t=155)** We recognize it as Simpson's paradox.
>
> **[2:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introduction-to-causal-modeling-with-bayesian-networks?u=76281980&t=158)** In the aggregated data, we get one pattern, you break it down by category, you get another pattern.
>
> **[2:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introduction-to-causal-modeling-with-bayesian-networks?u=76281980&t=163)** But now we're going to see it through the lens of Bayesian network, so let's take a look.
>
> **[2:49](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introduction-to-causal-modeling-with-bayesian-networks?u=76281980&t=169)** I hope you'll recognize this as the same pattern we saw.
>
> **[2:52](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introduction-to-causal-modeling-with-bayesian-networks?u=76281980&t=172)** It's actually kind of similar to shark attack and ice cream and it's similar to Berkeley.
>
> **[3:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introduction-to-causal-modeling-with-bayesian-networks?u=76281980&t=181)** But if you don't see the resemblance right away, what you want to do is, in your mind subtract test drive.
>
> **[3:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introduction-to-causal-modeling-with-bayesian-networks?u=76281980&t=188)** And then you have that classic gender predicts ad as well as purchase.
>
> **[3:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introduction-to-causal-modeling-with-bayesian-networks?u=76281980&t=195)** So we have a mediator here and we've got some direct and indirect effects and a bunch of things that make this a little bit more complicated, but it's a great example.
>
> **[3:24](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introduction-to-causal-modeling-with-bayesian-networks?u=76281980&t=204)** And all the supporting files you could need are in the library on that same page.
>
> **[3:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introduction-to-causal-modeling-with-bayesian-networks?u=76281980&t=211)** So the first thing we're going to do is go to view and go to validation mode.
>
> **[3:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introduction-to-causal-modeling-with-bayesian-networks?u=76281980&t=216)** Okay, now I want to draw your attention to something.
>
> **[3:40](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introduction-to-causal-modeling-with-bayesian-networks?u=76281980&t=220)** Ad exposure has a little arrow on it in the upper right hand corner.
>
> **[3:46](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introduction-to-causal-modeling-with-bayesian-networks?u=76281980&t=226)** What I'm going to do is right click on that and scroll down here and identify that as intervention.
>
> **[3:55](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introduction-to-causal-modeling-with-bayesian-networks?u=76281980&t=235)** That's why that's a little bit different.
>
> **[3:58](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introduction-to-causal-modeling-with-bayesian-networks?u=76281980&t=238)** But at the moment we still have what you could describe as a see versus a do point of view, because we're simply letting the ad exposure be fixed at 50-50.
>
> **[4:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introduction-to-causal-modeling-with-bayesian-networks?u=76281980&t=253)** But what you're about to see in a moment is that the circle is going to turn into a square and one of the lines is going to be removed too.
>
> **[4:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introduction-to-causal-modeling-with-bayesian-networks?u=76281980&t=261)** So I want you to attend to that.
>
> **[4:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introduction-to-causal-modeling-with-bayesian-networks?u=76281980&t=263)** So what I'm going to do is I'm going to go over here and I'm going to force the value of ad exposure to be one.
>
> **[4:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introduction-to-causal-modeling-with-bayesian-networks?u=76281980&t=271)** That's the same as saying, do ad exposure.
>
> **[4:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introduction-to-causal-modeling-with-bayesian-networks?u=76281980&t=276)** And then if I click on zero, that's the same as saying not do ad exposure.
>
> **[4:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introduction-to-causal-modeling-with-bayesian-networks?u=76281980&t=284)** If I click once again, by the way, the circle comes back.
>
> **[4:46](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introduction-to-causal-modeling-with-bayesian-networks?u=76281980&t=286)** So why does the horizontal line between gender and ad exposure disappear when I do ad exposure?
>
> **[4:56](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introduction-to-causal-modeling-with-bayesian-networks?u=76281980&t=296)** Well, all inbound arrows are removed when you perform a do because I'm deciding whether we buy the ad or not.
>
> **[5:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introduction-to-causal-modeling-with-bayesian-networks?u=76281980&t=305)** We're not simply observing events as they may have taken place.
>
> **[5:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introduction-to-causal-modeling-with-bayesian-networks?u=76281980&t=310)** What I'm illustrating here is that you can do or not do the ad.
>
> **[5:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introduction-to-causal-modeling-with-bayesian-networks?u=76281980&t=316)** So let's go back to this mode.
>
> **[5:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introduction-to-causal-modeling-with-bayesian-networks?u=76281980&t=318)** And I'm going to click on purchase.
>
> **[5:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introduction-to-causal-modeling-with-bayesian-networks?u=76281980&t=322)** And I'm going to show this as a monitor type node.
>
> **[5:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introduction-to-causal-modeling-with-bayesian-networks?u=76281980&t=326)** But now what I'm going to do is not do, and it's 50-50, remember that these were fixed at 50-50.
>
> **[5:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introduction-to-causal-modeling-with-bayesian-networks?u=76281980&t=335)** Now I'm going to do do.
>
> **[5:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introduction-to-causal-modeling-with-bayesian-networks?u=76281980&t=338)** And we actually see that it's 55-45 in favor of buying the ad.
>
> **[5:46](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introduction-to-causal-modeling-with-bayesian-networks?u=76281980&t=346)** So again, there's a lot of moving parts here.
>
> **[5:48](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introduction-to-causal-modeling-with-bayesian-networks?u=76281980&t=348)** You would have to know enough about Bayesia Lab to set this up and either enter the data or pull the data in from a data set.
>
> **[5:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introduction-to-causal-modeling-with-bayesian-networks?u=76281980&t=357)** And obviously you have to know more about do and not do than we've just illustrated.
>
> **[6:04](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/introduction-to-causal-modeling-with-bayesian-networks?u=76281980&t=364)** However, I think this is a powerful example to help you understand how you can perform inference and show that in this case, even though the overall data seemed to indicate that the ad did not help, if you do a proper model and apply do, not do, you can infer that the ad was indeed helpful.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (3), scroll down (2), go to (2)
> **CLI Commands:** find (2), make (1), node (1)
> **Definitions:** is an  (1), means that (1), is a  (1)
> **Analogies:** similar to (2), just like (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)

#### [Bayesian Networks: Black Swan case study](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-networks-black-swan-case-study?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-networks-black-swan-case-study?u=76281980&t=0)** - [Instructor] Singapore is one of the largest ports in the world.
>
> **[0:04](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-networks-black-swan-case-study?u=76281980&t=4)** The Strait of Malacca connects the Indian Ocean and the South China Sea and supports much of this shipping traffic.
>
> **[0:12](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-networks-black-swan-case-study?u=76281980&t=12)** Despite its importance to world shipping, it's rather narrow and quite shallow at least in some spots.
>
> **[0:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-networks-black-swan-case-study?u=76281980&t=20)** So here's a thought experiment for you.
>
> **[0:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-networks-black-swan-case-study?u=76281980&t=23)** What if an incident of some kind disrupted shipping traffic through the Strait of Malacca?
>
> **[0:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-networks-black-swan-case-study?u=76281980&t=29)** It's a fascinating case study with which to end the course because such an event has not yet happened and it's not likely to, but it could.
>
> **[0:39](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-networks-black-swan-case-study?u=76281980&t=39)** So it's reminiscent of both our discussion of Tileb in the companion course as well as our discussion of the Palomares incident in this course.
>
> **[0:52](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-networks-black-swan-case-study?u=76281980&t=52)** There is a powerful case study that explores just this in the Bayesialab webinars, seminars, tutorials, examples and case study section.
>
> **[1:03](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-networks-black-swan-case-study?u=76281980&t=63)** It's entitled, "Black Swans and Bayesian Networks."
>
> **[1:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-networks-black-swan-case-study?u=76281980&t=67)** And it's an excellent piece of work by Stefan Conrady of the Bayesialab team.
>
> **[1:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-networks-black-swan-case-study?u=76281980&t=74)** You can see here a map of the Strait of Malacca but also exploring all of these different shipping paths through various parts of the world and underscoring just how important this narrow and sometimes shallow strait is.
>
> **[1:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-networks-black-swan-case-study?u=76281980&t=93)** It's got all the supporting materials that you would need to explore this further.
>
> **[1:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-networks-black-swan-case-study?u=76281980&t=97)** It's got the Bayesian network file, the underlying data file and also a PDF of some slides.
>
> **[1:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-networks-black-swan-case-study?u=76281980&t=105)** Let's take a quick look.
>
> **[1:47](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-networks-black-swan-case-study?u=76281980&t=107)** Now this example is far too complex at this point in our journey, because we've only briefly touched upon Bayesian network technique.
>
> **[1:59](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-networks-black-swan-case-study?u=76281980&t=119)** Although you can see there's a lot going on, basically it's a variety of stock prices, as well as a node that represents this extreme event that we've been describing as well as a portfolio score.
>
> **[2:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-networks-black-swan-case-study?u=76281980&t=135)** Now, this is an elaborate example that actually is looking at ways of optimizing these values.
>
> **[2:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-networks-black-swan-case-study?u=76281980&t=142)** What Stefan Conrady has done is explored portfolio management, but for now I just want to focus on the fact that we have options here to explore this extreme event.
>
> **[2:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-networks-black-swan-case-study?u=76281980&t=155)** We don't have to wait until we actually have data in support of the extreme event.
>
> **[2:41](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-networks-black-swan-case-study?u=76281980&t=161)** Now make no mistake, there's data here.
>
> **[2:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-networks-black-swan-case-study?u=76281980&t=163)** There's data about the stock portfolio, but we don't have data per se about the extreme event.
>
> **[2:50](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-networks-black-swan-case-study?u=76281980&t=170)** What we have to do is make a rough guess which is really what this is of how common that extreme event could be.
>
> **[2:58](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-networks-black-swan-case-study?u=76281980&t=178)** But it's more than that.
>
> **[3:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-networks-black-swan-case-study?u=76281980&t=180)** We can toggle this and say that it's happened or we can toggle this and say that it hasn't happened.
>
> **[3:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-networks-black-swan-case-study?u=76281980&t=188)** And that allows us to run the optimization under various what if scenarios.
>
> **[3:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-networks-black-swan-case-study?u=76281980&t=194)** So it really is powerful and underscores how valuable it is to combine theory with data.
>
> **[3:25](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/bayesian-networks-black-swan-case-study?u=76281980&t=205)** Something that Bayesian networks along with a handful of other causal modeling techniques are capable of doing.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2), node (1)
> **UI Navigation:** toggle (2)
> **Definitions:** is a  (1), is an  (1)
> **Env Vars:** pdf (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Taking causality further](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/taking-causality-further?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/taking-causality-further?u=76281980&t=0)** - [Keith] If you've joined me on the journey this far, you have probably developed a taste for even more.
>
> **[0:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/taking-causality-further?u=76281980&t=7)** So, here are my recommendations.
>
> **[0:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/taking-causality-further?u=76281980&t=9)** First, keep going.
>
> **[0:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/taking-causality-further?u=76281980&t=11)** Take a data set that you're already familiar with and dive right in.
>
> **[0:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/taking-causality-further?u=76281980&t=15)** Maybe give JASP a try.
>
> **[0:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/taking-causality-further?u=76281980&t=18)** Then carve out a block of time, download the 30-day trial and spend some quality time with BayesiaLab.
>
> **[0:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/taking-causality-further?u=76281980&t=26)** The examples are so extensive, they will keep you busy for the full 30 days.
>
> **[0:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/taking-causality-further?u=76281980&t=33)** Some of you will want to go deeper.
>
> **[0:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/taking-causality-further?u=76281980&t=36)** Certainly, I've mentioned Pearl's "The Book of Why" many times.
>
> **[0:40](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/taking-causality-further?u=76281980&t=40)** It's absolutely worth a read, and it's not a textbook.
>
> **[0:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/taking-causality-further?u=76281980&t=44)** It's the kind of book that you read from cover to cover.
>
> **[0:47](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/taking-causality-further?u=76281980&t=47)** Although, certainly, you could skip around to topics of interest, this is a book that you're going to want to sit down and read the whole thing.
>
> **[0:55](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/taking-causality-further?u=76281980&t=55)** In the same vein, "The Theory That Would Not Die" is a fabulous book, and it really reads like a story.
>
> **[1:02](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/taking-causality-further?u=76281980&t=62)** It was written by a tech journalist.
>
> **[1:03](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/taking-causality-further?u=76281980&t=63)** It, too, is not a textbook.
>
> **[1:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/taking-causality-further?u=76281980&t=65)** It's very enjoyable.
>
> **[1:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/taking-causality-further?u=76281980&t=68)** The next two recommendations are a little bit more technical.
>
> **[1:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/taking-causality-further?u=76281980&t=71)** I'd recommend, if you have an interest in stats, in structural equation modeling, that you read the entire chapter that we downloaded when we were talking about ANCOVA.
>
> **[1:24](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/taking-causality-further?u=76281980&t=84)** And also, a book that I'm very fond of, but doesn't have, perhaps, as broad an audience as "The Book of Why" or "The Theory That Would Not Die" is "Bernoulli's Fallacy" by Aubrey Clayton.
>
> **[1:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/taking-causality-further?u=76281980&t=97)** It takes a very pro-Bayesian point of view.
>
> **[1:41](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/taking-causality-further?u=76281980&t=101)** It's written by a mathematician.
>
> **[1:42](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/taking-causality-further?u=76281980&t=102)** Although, there's not a lot of heavy math in it.
>
> **[1:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/taking-causality-further?u=76281980&t=105)** It's written for a general audience, but it's pretty intense when it gets to [[Statistics]] and hypothesis testing and so on.
>
> **[1:52](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/taking-causality-further?u=76281980&t=112)** So, if that side of the story, the statistics and hypothesis testing and comparing traditional statistics to Bayesian is your cup of tea, you might really enjoy this book.
>
> **[2:03](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/taking-causality-further?u=76281980&t=123)** Finally, after all of this, you're going to want to have some fun with the topic.
>
> **[2:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/taking-causality-further?u=76281980&t=126)** Consider the biographies of Alan Turing and Claude Shannon.
>
> **[2:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/taking-causality-further?u=76281980&t=131)** And also there's a lovely movie about Claude Shannon called "A Bit Player," obviously, a play on words there, that is really fantastic that I recommend.
>
> **[2:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/taking-causality-further?u=76281980&t=142)** Finally, I hope you'll stay in touch.
>
> **[2:24](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/taking-causality-further?u=76281980&t=144)** I hope you'll use the Q and A feature in the course.
>
> **[2:27](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/taking-causality-further?u=76281980&t=147)** I hope you'll follow me on [[LinkedIn]].
>
> **[2:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-causal-inference-and-modeling/taking-causality-further?u=76281980&t=149)** And I hope you'll let me know how your quest to learn about and practice causal modeling is going.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Statistics]] (3), [[LinkedIn]] (1)
> **Env Vars:** jasp (1), ancova (1)
> **Definitions:** is a  (2)
> **Exercise Files:** download the (1)
> **Speakers:** - [keith] (1)


## Instructor

- [[Keith McCormick]]

## Resources

- Exercise files available

## Skills Covered

- Machine Learning
- Causal Inference
- Artificial Intelligence (AI)

## Path Context

### In [[Advance Your Skills as a Machine Learning Specialist]]
← [[Machine Learning and AI Foundations- Decision Trees with KNIME]] | **7 of 9** | [[Machine Learning and AI Foundations- Prediction, Causation, and Statistical Inference]] →

## Appears In

- [[Advance Your Skills as a Machine Learning Specialist]]

## Related Courses

_Courses sharing skills:_

- [[Machine Learning and AI Foundations- Clustering and Association]] — Artificial Intelligence (AI), Machine Learning
- [[Machine Learning and AI- Advanced Decision Trees with SPSS]] — Artificial Intelligence (AI), Machine Learning
- [[Machine Learning and AI Foundations- Decision Trees with SPSS]] — Artificial Intelligence (AI), Machine Learning
- [[Machine Learning and AI Foundations- Classification Modeling]] — Artificial Intelligence (AI), Machine Learning
- [[Machine Learning & AI Foundations- Linear Regression]] — Artificial Intelligence (AI), Machine Learning

---

[↑ Back to top](#)