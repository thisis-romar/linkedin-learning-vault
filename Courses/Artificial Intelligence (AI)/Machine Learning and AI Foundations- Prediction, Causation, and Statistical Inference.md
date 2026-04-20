---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference
url: "https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference"
duration_minutes: 122
duration: 2h 2m
level: Intermediate
updated: 3/18/2022
learners: 36246
skills:
  - Machine Learning
  - Artificial Intelligence (AI)
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQFivN9qt5wTUA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1647451672526?e=2147483647&amp;v=beta&amp;t=1gJsLL7cUCqa1Nc1gw7iGvkHzf3YyFFS7Q-cFEm-WHo"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - Advance Your Skills as a Machine Learning Specialist
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - topic/software-development
  - skill/machine-learning
  - skill/artificial-intelligence-ai
status: not-started
created: 2026-04-20
---

![Machine Learning and AI Foundations: Prediction, Causation, and Statistical Inference](https://media.licdn.com/dms/image/v2/C4E0DAQFivN9qt5wTUA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1647451672526?e=2147483647&amp;v=beta&amp;t=1gJsLL7cUCqa1Nc1gw7iGvkHzf3YyFFS7Q-cFEm-WHo)

# Machine Learning and AI Foundations: Prediction, Causation, and Statistical Inference

> In the world of data science, machine learning and statistics are often lumped together, but they serve different purposes, and being versed in one doesn’t mean expertise in the other. In fact, applying a statistical approach to a machine learning problem, or vice versa, can lead to confusion more than elucidation. In this course, Keith McCormick covers how stats and machine learning are different

> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference) | 2h 2m | Intermediate | 36K learners
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Keith McCormick]]

## Resources

- Exercise files available

## Skills Covered

- Machine Learning
- Artificial Intelligence (AI)

## Table of Contents

### Introduction

#### Prediction, causation, and statistical inference
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/prediction-causation-and-statistical-inference?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/prediction-causation-and-statistical-inference?u=76281980&t=0)** - [Keith] If you are a data scientist who got your start in machine learning, statistics may at times seem like a collection of elaborate rules that may or may not apply to machine learning.
>
> **[0:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/prediction-causation-and-statistical-inference?u=76281980&t=11)** However, if you're a data scientist who got your start in statistics, some machine learning may seem like tennis being played without a net.
>
> **[0:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/prediction-causation-and-statistical-inference?u=76281980&t=21)** And frustratingly, neither of them make it very easy to prove that something caused something else.
>
> **[0:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/prediction-causation-and-statistical-inference?u=76281980&t=29)** Hi, I'm Keith McCormick and before I started my machine learning career almost 25 years ago, three topics were competing for my attention, psychology, statistical research methods, and the philosophy of science.
>
> **[0:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/prediction-causation-and-statistical-inference?u=76281980&t=43)** We will draw from all three to sort out how stats and machine learning are different, when to use each, and how to use all the tools at your disposal to be clear and persuasive when you share your results.
>
> **[1:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/prediction-causation-and-statistical-inference?u=76281980&t=60)** We'll also briefly explore the tricky issue of causality.
>
> **[1:04](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/prediction-causation-and-statistical-inference?u=76281980&t=64)** What is safe and not safe to conclude from your statistics and machine learning models, all with the ultimate goal of using them more effectively, making you more confident about what you can say about your data with certainty.
>
> **[1:24](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/prediction-causation-and-statistical-inference?u=76281980&t=84)** We have an interesting journey in front of us, so let's begin.

> [!info]- Semantic Content
>
> **Code Keywords:** else. (1), let (1)
> **CLI Commands:** make (1)
> **Speakers:** - [keith] (1)


### 1. What Is a Casual Model?

#### Lady tasting tea
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/lady-tasting-tea?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/lady-tasting-tea?u=76281980&t=0)** - [Instructor] This course is about evidence and persuasion.
>
> **[0:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/lady-tasting-tea?u=76281980&t=5)** How do you know that you're right?
>
> **[0:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/lady-tasting-tea?u=76281980&t=7)** One of the methods for this is the experiment, and the way that we conduct modern experiments has been very much influenced by Ronald Fisher.
>
> **[0:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/lady-tasting-tea?u=76281980&t=16)** Fisher gets the credit for a number of the techniques that are used in contemporary statistics.
>
> **[0:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/lady-tasting-tea?u=76281980&t=23)** So we are going to begin the course with two very revealing stories about Fisher and what kind of analyses he found convincing.
>
> **[0:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/lady-tasting-tea?u=76281980&t=33)** Since data science has statistics as a major component, data science would not be the same without him.
>
> **[0:40](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/lady-tasting-tea?u=76281980&t=40)** He was also a colorful care character, brilliant, sometimes charming, and sometimes a bit of a curmudgeon who loved a good argument.
>
> **[0:49](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/lady-tasting-tea?u=76281980&t=49)** One of the most famous anecdotes about him first appeared in his text, "The Design of Experiments," written almost 100 years ago.
>
> **[0:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/lady-tasting-tea?u=76281980&t=57)** In 1935, he invented approaches to experiments that we still use today and that will be central to some parts of this course.
>
> **[1:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/lady-tasting-tea?u=76281980&t=66)** One book about famous statisticians, including Fisher, even shows the story as its title, "The Lady Tasting Tea."
>
> **[1:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/lady-tasting-tea?u=76281980&t=76)** The events in the story actually happened.
>
> **[1:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/lady-tasting-tea?u=76281980&t=79)** The lady that the story is named after is Muriel Bristol.
>
> **[1:24](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/lady-tasting-tea?u=76281980&t=84)** She was a psychologist and acquaintance of Fisher.
>
> **[1:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/lady-tasting-tea?u=76281980&t=88)** One day, when they were gathered having tea, she refused a cup of tea because the tea had already been poured into the cup.
>
> **[1:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/lady-tasting-tea?u=76281980&t=97)** She preferred having the milk poured in first.
>
> **[1:40](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/lady-tasting-tea?u=76281980&t=100)** Those in attendance, including Fisher, were rather skeptical that it was possible to detect this, having milk first or tea first.
>
> **[1:50](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/lady-tasting-tea?u=76281980&t=110)** According to the story, Fisher designed an experiment on the spot, which led to his articulation of both hypothesis testing, including the null hypothesis, which is central to statistics, and the Fisher's exact act test.
>
> **[2:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/lady-tasting-tea?u=76281980&t=126)** This isn't the right course to discuss something like the Fisher's exact test, but let's overview how the experiment worked.
>
> **[2:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/lady-tasting-tea?u=76281980&t=134)** Fisher and the group quickly decided that one cup wouldn't be enough of a test, because our heroin could easily guess just one cup.
>
> **[2:24](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/lady-tasting-tea?u=76281980&t=144)** Fisher decided that they should proceed with four cups milk first, and four cups with tea first.
>
> **[2:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/lady-tasting-tea?u=76281980&t=152)** And all of this needed to be prepared outside the view of our taster.
>
> **[2:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/lady-tasting-tea?u=76281980&t=158)** Also, they should be presented in random fashion.
>
> **[2:41](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/lady-tasting-tea?u=76281980&t=161)** These design considerations are still how experiments of this kind would be done today, and they are all designed to minimize the impact of random chance, or in this specific case, random guessing.
>
> **[2:56](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/lady-tasting-tea?u=76281980&t=176)** So what happened?
>
> **[2:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/lady-tasting-tea?u=76281980&t=177)** According to some sources, the results of the experiment are lost to history, but other sources claim that Miss Bristol was correct with all eight cups.
>
> **[3:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/lady-tasting-tea?u=76281980&t=188)** For our purposes, the reason this story is so important and is an appropriate place to start is that we might be skeptical as well that she has this skill.
>
> **[3:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/lady-tasting-tea?u=76281980&t=199)** To overcome that skepticism, we need an experiment that has certain characteristics.
>
> **[3:25](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/lady-tasting-tea?u=76281980&t=205)** It has to be a controlled experiment.
>
> **[3:27](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/lady-tasting-tea?u=76281980&t=207)** There has to be enough sample size to address random guessing, and then there has to be a fairly elaborate setup procedure, including randomization, so that the test subject, in this case our taster, was unable to see the setup.
>
> **[3:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/lady-tasting-tea?u=76281980&t=224)** In this course, we'll be exploring how to establish causality when you are able to perform this kind of experiment.
>
> **[3:52](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/lady-tasting-tea?u=76281980&t=232)** And importantly, we will also explore what to do when this kind of experiment is not possible.
>
> **[4:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/lady-tasting-tea?u=76281980&t=240)** In this course, we'll be exploring how to establish causality when you are able to perform this kind of experiment.
>
> **[4:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/lady-tasting-tea?u=76281980&t=247)** And importantly, we will also explore what to do when this kind of experiment is not possible.
>
> **[4:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/lady-tasting-tea?u=76281980&t=253)** Along the way, we'll be exploring how four distinct types of analysts determine that evidence is convincing.
>
> **[4:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/lady-tasting-tea?u=76281980&t=261)** The statistician, who uses an approach much like Fisher in our story, the data minor, who likely uses machine learning, the bayesian, and then finally, the causal modeler represented by Judea Pearl, who will be a bit of a hero on our journey.
>
> **[4:41](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/lady-tasting-tea?u=76281980&t=281)** But first, let's investigate a time that Fisher failed to find the evidence convincing.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), this, (1), case, (1), finally, (1)
> **Prerequisites:** setup (2)
> **CLI Commands:** find (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### Why causation matters in a business setting
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/why-causation-matters-in-a-business-setting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/why-causation-matters-in-a-business-setting?u=76281980&t=0)** - [Instructor] Why is causality important in a practical situation at work?
>
> **[0:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/why-causation-matters-in-a-business-setting?u=76281980&t=6)** Our minds immediately think in causal terms, so we will sometimes make the leap to causality, even when the evidence doesn't justify it.
>
> **[0:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/why-causation-matters-in-a-business-setting?u=76281980&t=18)** If we get some analytical results and present them to our colleagues or our boss, they may assume that we are making a claim that we have established causality.
>
> **[0:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/why-causation-matters-in-a-business-setting?u=76281980&t=29)** For instance, in a meeting, we might say, "I built a regression model predicting sales "with marketing spend, and it was significant," or "I built a decision tree model, "and the top predictor of sales is marketing spend," or "I ran an A/B test, "one campaign where we had paid social media "and another without, "and the one with paid had significantly higher sales."
>
> **[0:59](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/why-causation-matters-in-a-business-setting?u=76281980&t=59)** Do all of these establish causality, maybe only some of them?
>
> **[1:04](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/why-causation-matters-in-a-business-setting?u=76281980&t=64)** Your boss or colleagues might not ask explicitly for causal inference, but it's going to be on their mind.
>
> **[1:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/why-causation-matters-in-a-business-setting?u=76281980&t=73)** You will want to be certain of when you can safely make a causal claim, so this isn't just an academic topic.
>
> **[1:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/why-causation-matters-in-a-business-setting?u=76281980&t=80)** It gets to the heart of what we are to trying to do in applied data science situations.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### What is a causal model?
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-is-a-causal-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-is-a-causal-model?u=76281980&t=0)** - [Instructor] When we try to use traditional methods to determine causality, we run into two problems.
>
> **[0:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-is-a-causal-model?u=76281980&t=7)** Judea Pearl has built a career around what he calls the causal revolution.
>
> **[0:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-is-a-causal-model?u=76281980&t=13)** During our journey, we will discuss a number of traditional techniques and what we can and can't do with them.
>
> **[0:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-is-a-causal-model?u=76281980&t=20)** So we won't restrict our discussion to only causal models, but it is our destination.
>
> **[0:27](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-is-a-causal-model?u=76281980&t=27)** In the final section when we're better able to appreciate them, causal models will be our focus, and Judea Pearl will frequently be mentioned along the way.
>
> **[0:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-is-a-causal-model?u=76281980&t=37)** When we try to use traditional methods to determine causality, we run into two problems.
>
> **[0:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-is-a-causal-model?u=76281980&t=43)** They lack two key ingredients.
>
> **[0:46](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-is-a-causal-model?u=76281980&t=46)** First, correlation has no directionality.
>
> **[0:50](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-is-a-causal-model?u=76281980&t=50)** When we learn that A is correlated with B, we don't know which causes which.
>
> **[0:55](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-is-a-causal-model?u=76281980&t=55)** In fact, as we shall see later, there are other possibilities beyond just those two.
>
> **[1:02](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-is-a-causal-model?u=76281980&t=62)** One of Pearl's favorite metaphors is a barometer.
>
> **[1:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-is-a-causal-model?u=76281980&t=67)** Moving the needle on the barometer doesn't cause it to rain.
>
> **[1:12](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-is-a-causal-model?u=76281980&t=72)** The second problem with traditional methods is there's no easy way to articulate what if scenarios.
>
> **[1:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-is-a-causal-model?u=76281980&t=78)** If I hadn't bought the Super Bowl ad, would revenue have been lower?
>
> **[1:24](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-is-a-causal-model?u=76281980&t=84)** This is a question we will actually attempt to answer in the final section of the course.
>
> **[1:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-is-a-causal-model?u=76281980&t=89)** Maybe there's a correlation between advertising spend and revenue, but does that mean that increased spending caused the increase in revenue?
>
> **[1:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-is-a-causal-model?u=76281980&t=98)** Maybe consumer confidence has been climbing during the same period.
>
> **[1:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-is-a-causal-model?u=76281980&t=103)** The ideal way is to be able to ask what if we hadn't bought the ad, then what would have happened?
>
> **[1:51](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-is-a-causal-model?u=76281980&t=111)** We will return to these kinds of questions again and again, but we're going to start at the beginning.
>
> **[1:58](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-is-a-causal-model?u=76281980&t=118)** What gives us confidence in any of our results?
>
> **[2:02](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-is-a-causal-model?u=76281980&t=122)** More specifically, how do we convince ourselves and our colleagues to trust our data, trust our models and trust our conclusions?

> [!info]- Semantic Content
>
> **Definitions:** is a  (2)
> **Code Keywords:** super (1)
> **Speakers:** - [instructor] (1)


### 2. Healthy Skepticism about Our Data and Our Results

#### Skepticism about data: Truman 1948 Election Poll
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/skepticism-about-data-truman-1948-election-poll?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/skepticism-about-data-truman-1948-election-poll?u=76281980&t=0)** - [Narrator] Data science, especially statistics, gives us tools to measure uncertainty.
>
> **[0:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/skepticism-about-data-truman-1948-election-poll?u=76281980&t=6)** We encounter many of these tools in our day-to-day lives, even if it's just listening to the news or reading the newspaper.
>
> **[0:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/skepticism-about-data-truman-1948-election-poll?u=76281980&t=15)** The margin of error in political polls or confidence intervals in research reports come to mind.
>
> **[0:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/skepticism-about-data-truman-1948-election-poll?u=76281980&t=22)** But none of those tools help us if our data is biased.
>
> **[0:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/skepticism-about-data-truman-1948-election-poll?u=76281980&t=28)** A margin of error only takes into account sampling variation.
>
> **[0:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/skepticism-about-data-truman-1948-election-poll?u=76281980&t=33)** It does not help us measure bias.
>
> **[0:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/skepticism-about-data-truman-1948-election-poll?u=76281980&t=36)** So if we have flawed data, we're out of luck.
>
> **[0:40](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/skepticism-about-data-truman-1948-election-poll?u=76281980&t=40)** Few examples are as famous as the notorious "Dewey Beats Truman" headline held up proudly by Harry Truman upon Truman winning the election.
>
> **[0:53](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/skepticism-about-data-truman-1948-election-poll?u=76281980&t=53)** So how did this happen?
>
> **[0:55](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/skepticism-about-data-truman-1948-election-poll?u=76281980&t=55)** Political polls have always struggled with the fact that not everyone participates in voting.
>
> **[1:02](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/skepticism-about-data-truman-1948-election-poll?u=76281980&t=62)** As Bud Roper, son of the polling pioneer Elmo Roper, put it in an interview in the LA Times, "I don't think the polls were wrong "in terms of measuring national sentiment.
>
> **[1:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/skepticism-about-data-truman-1948-election-poll?u=76281980&t=75)** "Clearly they were wrong in determining the election.
>
> **[1:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/skepticism-about-data-truman-1948-election-poll?u=76281980&t=78)** "I think the 1948 polls were more accurate "than the 1948 election."
>
> **[1:25](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/skepticism-about-data-truman-1948-election-poll?u=76281980&t=85)** So the population of eligible voters and the population of likely voters are not the same.
>
> **[1:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/skepticism-about-data-truman-1948-election-poll?u=76281980&t=93)** Another factor was that there was no-last minute polls way back then.
>
> **[1:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/skepticism-about-data-truman-1948-election-poll?u=76281980&t=98)** They stopped several weeks before election day and Truman famously campaigned enthusiastically right up to the end.
>
> **[1:46](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/skepticism-about-data-truman-1948-election-poll?u=76281980&t=106)** Also back in the '40s, pollsters were using technologies like landlines and phone books, and not everyone had a landline or a listed number, so that must have been a challenge.
>
> **[1:59](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/skepticism-about-data-truman-1948-election-poll?u=76281980&t=119)** But the reason that is most often identified with this particular polling failure was the old quota system.
>
> **[2:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/skepticism-about-data-truman-1948-election-poll?u=76281980&t=129)** The idea behind the quota system made sense.
>
> **[2:12](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/skepticism-about-data-truman-1948-election-poll?u=76281980&t=132)** It required the interviewers to ensure that they had a diverse set of respondents within a set of demographic categories, like rural-urban, gender, age, income, and so on.
>
> **[2:27](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/skepticism-about-data-truman-1948-election-poll?u=76281980&t=147)** Well, the interviewers chose their own participants within those quotas.
>
> **[2:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/skepticism-about-data-truman-1948-election-poll?u=76281980&t=153)** They were not chosen at random.
>
> **[2:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/skepticism-about-data-truman-1948-election-poll?u=76281980&t=156)** That's how the bias was introduced, so the sample was more Republican than the population was, and Dewey was the Republican candidate and Truman was the Democratic candidate.
>
> **[2:49](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/skepticism-about-data-truman-1948-election-poll?u=76281980&t=169)** If you can't trust your data, everything else that follows is going to be affected.
>
> **[2:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/skepticism-about-data-truman-1948-election-poll?u=76281980&t=177)** So no accurate assessment of causal inference, or even statistical inference, can take place if your data is biased.

> [!info]- Semantic Content
>
> **Speakers:** - [narrator] (1)

#### Skepticism about results: Is that really the best predictor?
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/skepticism-about-results-is-that-really-the-best-predictor?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/skepticism-about-results-is-that-really-the-best-predictor?u=76281980&t=0)** - [Instructor] So you've been careful and you believe your data is trustworthy and not biased.
>
> **[0:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/skepticism-about-results-is-that-really-the-best-predictor?u=76281980&t=6)** What else can go wrong?
>
> **[0:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/skepticism-about-results-is-that-really-the-best-predictor?u=76281980&t=8)** Well, few things are as fundamental to an analysis than what your top variable in the model is.
>
> **[0:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/skepticism-about-results-is-that-really-the-best-predictor?u=76281980&t=16)** Imagine that you're a researcher helping a university look into whether SAT scores are predictive of graduating on time.
>
> **[0:24](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/skepticism-about-results-is-that-really-the-best-predictor?u=76281980&t=24)** You run your decision tree model with 50% of the data and the training partition and you discover that the verbal score on the test is the number one variable, but the math score is rather far down the list.
>
> **[0:41](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/skepticism-about-results-is-that-really-the-best-predictor?u=76281980&t=41)** So you may some notes.
>
> **[0:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/skepticism-about-results-is-that-really-the-best-predictor?u=76281980&t=43)** A bit later, you refer to your model and you realize that the results are slightly different.
>
> **[0:49](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/skepticism-about-results-is-that-really-the-best-predictor?u=76281980&t=49)** Apparently, your training partition has been randomized again.
>
> **[0:53](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/skepticism-about-results-is-that-really-the-best-predictor?u=76281980&t=53)** Oh my, well, that should be harmless enough.
>
> **[0:56](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/skepticism-about-results-is-that-really-the-best-predictor?u=76281980&t=56)** You look more carefully and you realize that the ranking of the variables has changed.
>
> **[1:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/skepticism-about-results-is-that-really-the-best-predictor?u=76281980&t=61)** Now it's the math score that's in top place and the only difference is that there's a slightly different training partition now.
>
> **[1:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/skepticism-about-results-is-that-really-the-best-predictor?u=76281980&t=70)** It's a bit disturbing, so you ask your friends at other colleges that are doing similar analyses.
>
> **[1:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/skepticism-about-results-is-that-really-the-best-predictor?u=76281980&t=77)** You want to know how their work is going.
>
> **[1:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/skepticism-about-results-is-that-really-the-best-predictor?u=76281980&t=80)** Your friend analyzing data from a top engineering school is also puzzled by their results.
>
> **[1:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/skepticism-about-results-is-that-really-the-best-predictor?u=76281980&t=88)** Their model says that verbal is important, but math is not.
>
> **[1:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/skepticism-about-results-is-that-really-the-best-predictor?u=76281980&t=92)** A second friend is analyzing a bunch of elite pre-law students and verbal is not important, but math is.
>
> **[1:42](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/skepticism-about-results-is-that-really-the-best-predictor?u=76281980&t=102)** It all seems so confusing.
>
> **[1:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/skepticism-about-results-is-that-really-the-best-predictor?u=76281980&t=104)** What could be go going on?
>
> **[1:46](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/skepticism-about-results-is-that-really-the-best-predictor?u=76281980&t=106)** This kind of behavior in models is not that unusual.
>
> **[1:51](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/skepticism-about-results-is-that-really-the-best-predictor?u=76281980&t=111)** When you have two very similar independent variables, in this case, math and verbal score, all kinds of things can go wrong.
>
> **[1:59](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/skepticism-about-results-is-that-really-the-best-predictor?u=76281980&t=119)** Multicollinearity in linear regression can cause coefficients to flip from positive relationships to negative relationships or vice versa.
>
> **[2:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/skepticism-about-results-is-that-really-the-best-predictor?u=76281980&t=130)** On the decision tree, what can happen is that the ordering can be unstable.
>
> **[2:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/skepticism-about-results-is-that-really-the-best-predictor?u=76281980&t=135)** And since they're very similar, whichever one, math or verbal, gets top position by luck of the draw, the other gets pushed down because it doesn't have anymore to contribute.
>
> **[2:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/skepticism-about-results-is-that-really-the-best-predictor?u=76281980&t=148)** In the case of the engineering students and the pre-law students, there might be what's called restriction of range.
>
> **[2:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/skepticism-about-results-is-that-really-the-best-predictor?u=76281980&t=156)** At the engineering school, for instance, they might all have high math scores, which they needed to get in, after all, so there's no variance left in math scores.
>
> **[2:48](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/skepticism-about-results-is-that-really-the-best-predictor?u=76281980&t=168)** The reverse might be true for the pre-law students.
>
> **[2:52](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/skepticism-about-results-is-that-really-the-best-predictor?u=76281980&t=172)** So what can we do about all of this?
>
> **[2:55](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/skepticism-about-results-is-that-really-the-best-predictor?u=76281980&t=175)** It's important to have a good foundation to build our analysis on.
>
> **[3:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/skepticism-about-results-is-that-really-the-best-predictor?u=76281980&t=180)** Causal models can sometimes get a bit complex, so we have to be very familiar with our data and the subject matter that we're analyzing.
>
> **[3:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/skepticism-about-results-is-that-really-the-best-predictor?u=76281980&t=189)** If we're not certain of the magnitude or even the direction of our correlations, we're simply not ready for the next step.
>
> **[3:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/skepticism-about-results-is-that-really-the-best-predictor?u=76281980&t=200)** So this is just a bit of caution to always start with the basic analysis, including exploratory analysis.
>
> **[3:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/skepticism-about-results-is-that-really-the-best-predictor?u=76281980&t=209)** If the data seems to throw you a curve ball or if the results are surprising to you or your colleagues, slow down and take a closer look before moving on to something more elaborate, like some of the techniques that we're going to be seeing later on in the course.

> [!info]- Semantic Content
>
> **Code Keywords:** case, (1), throw (1)
> **Analogies:** imagine (1), for instance (1)
> **Env Vars:** sat (1)
> **Warnings:** caution (1)
> **Speakers:** - [instructor] (1)

#### Skepticism about causes: Is X really causing Y?
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/skepticism-about-causes-is-x-really-causing-y?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/skepticism-about-causes-is-x-really-causing-y?u=76281980&t=0)** - [Instructor] We've all heard the saying, "Correlation does not imply causation."
>
> **[0:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/skepticism-about-causes-is-x-really-causing-y?u=76281980&t=5)** We might even be reminded of it on occasion by our friends and colleagues with statistics training while we're in the middle of a report.
>
> **[0:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/skepticism-about-causes-is-x-really-causing-y?u=76281980&t=13)** In the context of this course, we have to remind ourselves of this because we have an explicit goal to try to establish causation.
>
> **[0:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/skepticism-about-causes-is-x-really-causing-y?u=76281980&t=21)** So it's worth spending a moment to see visually why one doesn't imply the other.
>
> **[0:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/skepticism-about-causes-is-x-really-causing-y?u=76281980&t=29)** Tyler Vigen has a website and a book where he and the rest of us get to have a bit of fun with this.
>
> **[0:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/skepticism-about-causes-is-x-really-causing-y?u=76281980&t=36)** Remember that the reason it's important for us is that we should always be skeptical about correlations and causes.
>
> **[0:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/skepticism-about-causes-is-x-really-causing-y?u=76281980&t=45)** We'll explore when we can trust this information and when we can't but his work is a lighthearted way to see just how strong a spurious correlation can be.
>
> **[0:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/skepticism-about-causes-is-x-really-causing-y?u=76281980&t=57)** They're so ridiculous that it's obvious that there is no underlying causation.
>
> **[1:03](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/skepticism-about-causes-is-x-really-causing-y?u=76281980&t=63)** For instance, look at this one.
>
> **[1:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/skepticism-about-causes-is-x-really-causing-y?u=76281980&t=65)** Math doctorates awarded in the US correlates with uranium stored at US nuclear power plants.
>
> **[1:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/skepticism-about-causes-is-x-really-causing-y?u=76281980&t=74)** Notice the correlation is very high over 0.95.
>
> **[1:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/skepticism-about-causes-is-x-really-causing-y?u=76281980&t=80)** This is a fun thing to try on his website.
>
> **[1:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/skepticism-about-causes-is-x-really-causing-y?u=76281980&t=83)** You actually can pick out a variable and it will search for correlations.
>
> **[1:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/skepticism-about-causes-is-x-really-causing-y?u=76281980&t=88)** Let's try it.
>
> **[1:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/skepticism-about-causes-is-x-really-causing-y?u=76281980&t=90)** I'm going to go with sunlight by state, and I reside in North Carolina.
>
> **[1:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/skepticism-about-causes-is-x-really-causing-y?u=76281980&t=98)** So let's go with sunlight and North Carolina and then it's going to search for potential correlations.
>
> **[1:46](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/skepticism-about-causes-is-x-really-causing-y?u=76281980&t=106)** I'll click on the correlate button.
>
> **[1:48](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/skepticism-about-causes-is-x-really-causing-y?u=76281980&t=108)** Okay. So visitors to Universal Studios, over a five year period, let's generate the chart.
>
> **[1:56](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/skepticism-about-causes-is-x-really-causing-y?u=76281980&t=116)** This correlation is almost 0.9 and you can see that it really tracks closely.
>
> **[2:03](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/skepticism-about-causes-is-x-really-causing-y?u=76281980&t=123)** So it's strangely impressive but clearly not telling us very much about North Carolina nor is it telling us very much about Universal Studios or how those two variables interact.
>
> **[2:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/skepticism-about-causes-is-x-really-causing-y?u=76281980&t=135)** So even if your data is solid and your analysis is solid, you're still not in the clear.
>
> **[2:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/skepticism-about-causes-is-x-really-causing-y?u=76281980&t=142)** The mere fact that we're searching through lots of variables makes us assured to stumble upon some spurious correlations and that last demonstration of searching the correlations to find one that correlated with sunset in North Carolina underscores this.
>
> **[2:39](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/skepticism-about-causes-is-x-really-causing-y?u=76281980&t=159)** So watch out.
>
> **[2:40](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/skepticism-about-causes-is-x-really-causing-y?u=76281980&t=160)** Data alone won't keep you out of trouble.
>
> **[2:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/skepticism-about-causes-is-x-really-causing-y?u=76281980&t=163)** You'll need more than that to tell the difference between a real correlation and a spurious correlation.
>
> **[2:50](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/skepticism-about-causes-is-x-really-causing-y?u=76281980&t=170)** You'll need a combination of common sense, subject matter expertise, and some of the techniques we'll be seeing in the course.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), this. (2)
> **Versions:** 0.95 (1), 0.9 (1)
> **Definitions:** is a  (2)
> **Prerequisites:** you'll need (2)
> **CLI Commands:** find (1)
> **UI Navigation:** click on (1)
> **Analogies:** for instance (1)
> **Warnings:** watch out (1)


### 3. Correlation Does Not Imply Causation

#### What is a strong correlation?
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-is-a-strong-correlation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-is-a-strong-correlation?u=76281980&t=0)** - [Instructor] So let's talk a little bit about correlation.
>
> **[0:03](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-is-a-strong-correlation?u=76281980&t=3)** Correlation is certainly a recurring theme of our course.
>
> **[0:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-is-a-strong-correlation?u=76281980&t=7)** But folks that deal with data on a day-to-day basis are probably quite familiar with correlation.
>
> **[0:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-is-a-strong-correlation?u=76281980&t=14)** I just want to take a moment to talk a bit about magnitude and direction of correlation relationships.
>
> **[0:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-is-a-strong-correlation?u=76281980&t=21)** So the first correlation I have up here is a Pearson correlation and that's a name that we're going to be hearing again.
>
> **[0:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-is-a-strong-correlation?u=76281980&t=30)** Karl Pearson is a famous name in statistics.
>
> **[0:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-is-a-strong-correlation?u=76281980&t=33)** And we're going to be looking at the correlation between displacement and horsepower.
>
> **[0:39](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-is-a-strong-correlation?u=76281980&t=39)** And those both involve the power of the engine.
>
> **[0:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-is-a-strong-correlation?u=76281980&t=43)** So we would expect that correlation to be quite high, and it is indeed.
>
> **[0:47](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-is-a-strong-correlation?u=76281980&t=47)** That correlation is .89.
>
> **[0:53](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-is-a-strong-correlation?u=76281980&t=53)** Very high.
>
> **[0:54](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-is-a-strong-correlation?u=76281980&t=54)** You would rarely find a correlation that high if it wasn't this kind of engineering type data.
>
> **[1:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-is-a-strong-correlation?u=76281980&t=61)** By the way, this is a famous dataset that's been around for many years.
>
> **[1:04](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-is-a-strong-correlation?u=76281980&t=64)** I'm providing a modified version of it called autompg_causality.
>
> **[1:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-is-a-strong-correlation?u=76281980&t=69)** But you can also find it on the UC Irvine Data Repository, which is a great resource for practice datasets.
>
> **[1:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-is-a-strong-correlation?u=76281980&t=77)** Let's actually take those same two variables and take a look at a scatterplot looking at this.
>
> **[1:25](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-is-a-strong-correlation?u=76281980&t=85)** So we'll just go down and make a scatterplot and make that a little bit bigger.
>
> **[1:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-is-a-strong-correlation?u=76281980&t=96)** And we can see again a very strong relationship.
>
> **[1:40](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-is-a-strong-correlation?u=76281980&t=100)** One of the things that we want to remind ourselves of is that if we're dealing with human behavior, which is commonly what we're doing in data science and machine learning, we're going to see correlations a lot smaller than this and I think you'll be surprised how fuzzy the relationship can be.
>
> **[2:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-is-a-strong-correlation?u=76281980&t=120)** Notice that even with the correlation of .9, we have some exceptions here.
>
> **[2:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-is-a-strong-correlation?u=76281980&t=127)** Second correlation is weight and miles per gallon.
>
> **[2:12](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-is-a-strong-correlation?u=76281980&t=132)** Now, this is interesting because there's a clear directionality here.
>
> **[2:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-is-a-strong-correlation?u=76281980&t=137)** However, there's nothing about the correlation that communicates that directionality.
>
> **[2:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-is-a-strong-correlation?u=76281980&t=141)** We would anticipate that weight predicts miles per gallon or rather that weight might have some causal relationship to miles per gallon.
>
> **[2:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-is-a-strong-correlation?u=76281980&t=152)** Heavier cars having a poor or higher miles per gallon.
>
> **[2:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-is-a-strong-correlation?u=76281980&t=158)** We would not expect that miles per gallon would cause the weight.
>
> **[2:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-is-a-strong-correlation?u=76281980&t=163)** This one is negative, so let's take a look at those same two in a quick little chart.
>
> **[2:50](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-is-a-strong-correlation?u=76281980&t=170)** So highlight just those two.
>
> **[2:53](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-is-a-strong-correlation?u=76281980&t=173)** And we'll insert a scatter chart, scatterplot rather.
>
> **[2:58](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-is-a-strong-correlation?u=76281980&t=178)** Make that a little bit bigger.
>
> **[3:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-is-a-strong-correlation?u=76281980&t=181)** Also a clear relationship.
>
> **[3:03](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-is-a-strong-correlation?u=76281980&t=183)** Notice a little bit of curvilinearity here.
>
> **[3:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-is-a-strong-correlation?u=76281980&t=186)** We can almost certainly get a larger negative correlation if we had introduced some curvilinearity in here in the form of regression.
>
> **[3:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-is-a-strong-correlation?u=76281980&t=196)** We might add a polynomial.
>
> **[3:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-is-a-strong-correlation?u=76281980&t=198)** But again, the correlation doesn't tell us anything about that.
>
> **[3:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-is-a-strong-correlation?u=76281980&t=201)** So in this case, we are indeed predicting miles per gallon with weight.
>
> **[3:27](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-is-a-strong-correlation?u=76281980&t=207)** I say that because the convention is that the y-axis is always your dependent variable and the x-axis is always your independent variable.
>
> **[3:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-is-a-strong-correlation?u=76281980&t=215)** But we could flip this around and the correlation procedure doesn't know that.
>
> **[3:39](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-is-a-strong-correlation?u=76281980&t=219)** It's still going to give us the correlation.
>
> **[3:42](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-is-a-strong-correlation?u=76281980&t=222)** So there's no way to communicate directionality with a correlation.
>
> **[3:48](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-is-a-strong-correlation?u=76281980&t=228)** Let's look at one that's a little bit weaker.
>
> **[3:50](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-is-a-strong-correlation?u=76281980&t=230)** So now we have acceleration and miles per gallon.
>
> **[3:55](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-is-a-strong-correlation?u=76281980&t=235)** We can see that that's also positive and it's not trivial in strength.
>
> **[4:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-is-a-strong-correlation?u=76281980&t=240)** It's over .4, which I would describe as a medium strength correlation.
>
> **[4:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-is-a-strong-correlation?u=76281980&t=247)** But let's take a look at acceleration and miles per gallon in the form of a scatterplot.
>
> **[4:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-is-a-strong-correlation?u=76281980&t=259)** And this was something I really wanted us to take a look at.
>
> **[4:24](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-is-a-strong-correlation?u=76281980&t=264)** Here's a correlation of over .4 and it's not nearly as clear the relationship.
>
> **[4:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-is-a-strong-correlation?u=76281980&t=274)** Here we have acceleration in the x-axis and we have miles per gallon on the y-axis.
>
> **[4:39](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-is-a-strong-correlation?u=76281980&t=279)** But a lot fuzzier, a lot nosier than any of the other ones that we've seen.
>
> **[4:46](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-is-a-strong-correlation?u=76281980&t=286)** I want to talk a bit about magnitude.
>
> **[4:48](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-is-a-strong-correlation?u=76281980&t=288)** Now, this is engineering data.
>
> **[4:50](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-is-a-strong-correlation?u=76281980&t=290)** We're almost talking physics here.
>
> **[4:53](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-is-a-strong-correlation?u=76281980&t=293)** So we get correlations like a .9.
>
> **[4:55](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-is-a-strong-correlation?u=76281980&t=295)** When you're talking about human behavior, you're not going to see numbers like that.
>
> **[4:59](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-is-a-strong-correlation?u=76281980&t=299)** So for a long time, I've used the rule of thumb that low correlations are between .3 to .5.
>
> **[5:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-is-a-strong-correlation?u=76281980&t=309)** Now, why would I choose those numbers?
>
> **[5:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-is-a-strong-correlation?u=76281980&t=313)** What about correlations lower than .3?
>
> **[5:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-is-a-strong-correlation?u=76281980&t=317)** There's probably someone out there right now trying very, very hard to describe the underlying causal relationships of a correlation as low as .2.
>
> **[5:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-is-a-strong-correlation?u=76281980&t=328)** The reason you have to be so cautious is that when you square that and get the R squared, the numbers are pretty low.
>
> **[5:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-is-a-strong-correlation?u=76281980&t=335)** So what would tempt someone to come up with an elaborate theory about a correlation smaller than .3?
>
> **[5:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-is-a-strong-correlation?u=76281980&t=343)** It might be because the correlation is statistically significant but I think it's more important to talk about the magnitude.
>
> **[5:49](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-is-a-strong-correlation?u=76281980&t=349)** So these low correlations are going to end up with an R squared between 9%, you can kind of round that to 10 up to .5.
>
> **[5:58](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-is-a-strong-correlation?u=76281980&t=358)** Why?
>
> **[5:59](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-is-a-strong-correlation?u=76281980&t=359)** Because if you square .5, you would get 25% of variance explained.
>
> **[6:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-is-a-strong-correlation?u=76281980&t=365)** These numbers are the R and you square them to get the R squared.
>
> **[6:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-is-a-strong-correlation?u=76281980&t=370)** So that would make a medium start at .5 and I usually say this should go up to about .7.
>
> **[6:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-is-a-strong-correlation?u=76281980&t=378)** Why would I say that?
>
> **[6:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-is-a-strong-correlation?u=76281980&t=379)** Well, if you square the .7, you're just a hair below 50% of variance explained.
>
> **[6:25](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-is-a-strong-correlation?u=76281980&t=385)** And if you're talking about people and human behavior, anything above .7 is really quite high.
>
> **[6:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-is-a-strong-correlation?u=76281980&t=396)** So we're going to move on in a little bit to see this in the regression realm but that gives you a little bit of a feel for what these different magnitudes look like and what their implications are for analysis.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), this. (1), case, (1)
> **CLI Commands:** make (4), find (2)
> **Definitions:** is a  (4)
> **Code Identifiers:** autompg_causality (1)
> **Best Practices:** rule of thumb (1)
> **Speakers:** - [instructor] (1)

#### Pearson on correlation and causation
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/pearson-on-correlation-and-causation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/pearson-on-correlation-and-causation?u=76281980&t=0)** - [Narrator] Some years ago, Daniel Engber wrote a remarkable column on Slate about the phrase "Correlation does not imply causation."
>
> **[0:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/pearson-on-correlation-and-causation?u=76281980&t=10)** He noticed that folks get remarkably worked up whenever someone is perceived as trying to sneak by that implication.
>
> **[0:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/pearson-on-correlation-and-causation?u=76281980&t=19)** He hunted down some quotes when an article appeared in the New York Times.
>
> **[0:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/pearson-on-correlation-and-causation?u=76281980&t=23)** The topic happened to be depression and time spent on social media.
>
> **[0:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/pearson-on-correlation-and-causation?u=76281980&t=28)** But the subject, I think, isn't particularly important.
>
> **[0:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/pearson-on-correlation-and-causation?u=76281980&t=31)** The authors of the article apparently were quite cautious about their claims.
>
> **[0:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/pearson-on-correlation-and-causation?u=76281980&t=37)** The social media respondents, on the other hand, were pretty earlier about their opinions.
>
> **[0:42](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/pearson-on-correlation-and-causation?u=76281980&t=42)** This is the kind of thing that Engber found.
>
> **[0:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/pearson-on-correlation-and-causation?u=76281980&t=45)** "'Facepalm.
>
> **[0:47](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/pearson-on-correlation-and-causation?u=76281980&t=47)** Correlation doesn't imply causation,' wrote one unhappy Internet user.
>
> **[0:53](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/pearson-on-correlation-and-causation?u=76281980&t=53)** 'That's pretty much how I read this too.
>
> **[0:55](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/pearson-on-correlation-and-causation?u=76281980&t=55)** Correlation is not causation,' agreed a Huffington Post superuser, seemingly distraught."
>
> **[1:03](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/pearson-on-correlation-and-causation?u=76281980&t=63)** 'I was surprised not to find a discussion of correlation versus causation.'"
>
> **[1:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/pearson-on-correlation-and-causation?u=76281980&t=69)** I think they're referring to, It wasn't crystal clear in the article that they were talking about.
>
> **[1:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/pearson-on-correlation-and-causation?u=76281980&t=75)** Only correlation and not causation.
>
> **[1:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/pearson-on-correlation-and-causation?u=76281980&t=78)** That was from somebody at Hacker News.
>
> **[1:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/pearson-on-correlation-and-causation?u=76281980&t=81)** And then finally, "'Correlation does not mean causation,' a reader moaned at Slashdot.
>
> **[1:27](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/pearson-on-correlation-and-causation?u=76281980&t=87)** 'There are so many variables here that it isn't funny.'"
>
> **[1:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/pearson-on-correlation-and-causation?u=76281980&t=92)** Engber makes the point in the article, and, in fact, it's the whole inspiration of the article.
>
> **[1:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/pearson-on-correlation-and-causation?u=76281980&t=97)** And I agree that while the rule of thumb is true, folks have such a knee-jerk reaction that they seem to forget that where there's a correlation, there might be something interesting.
>
> **[1:51](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/pearson-on-correlation-and-causation?u=76281980&t=111)** I found it particularly fascinating that Engber hunted down what appears to be the first use of the phrase by Pearson himself.
>
> **[2:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/pearson-on-correlation-and-causation?u=76281980&t=120)** Pearson writes, "All causation, as we have defined it, is correlation, but the converse is not necessarily true.
>
> **[2:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/pearson-on-correlation-and-causation?u=76281980&t=130)** Where we find correlation we cannot always predict causation."
>
> **[2:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/pearson-on-correlation-and-causation?u=76281980&t=135)** Of course he hasn't introduced the word imply in here, but you can see that it's very close to what we say today.
>
> **[2:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/pearson-on-correlation-and-causation?u=76281980&t=142)** I think in this quote, Pearson comes off as a bit moderate in tone, but Judea Pearl in "The Book of Why" in a section entitled Pearson, the Wrath of the Zealot makes the case that Pearson set the tone early that causation was off limits.
>
> **[2:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/pearson-on-correlation-and-causation?u=76281980&t=163)** Pearl selects a different quote to help give us a feel for this.
>
> **[2:48](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/pearson-on-correlation-and-causation?u=76281980&t=168)** It reads, "That a certain sequence has occurred and reoccurred in the past is a matter of experience to which we give expression in the concept of causation.
>
> **[2:59](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/pearson-on-correlation-and-causation?u=76281980&t=179)** Science, in no case, can demonstrate any inherent necessity in a sequence nor prove with absolute certainty that it must be repeated."
>
> **[3:12](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/pearson-on-correlation-and-causation?u=76281980&t=192)** So Pearson is really slamming the door on causation there.
>
> **[3:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/pearson-on-correlation-and-causation?u=76281980&t=196)** Pearl spends the better part of a chapter on all of this.
>
> **[3:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/pearson-on-correlation-and-causation?u=76281980&t=200)** But here's the bottom line, Pearson was making it very clear that not only could you not infer causation from correlation but the whole discussion was unscientific.
>
> **[3:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/pearson-on-correlation-and-causation?u=76281980&t=214)** This was the attitude for nearly a century.
>
> **[3:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/pearson-on-correlation-and-causation?u=76281980&t=218)** So what does correlation imply?
>
> **[3:42](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/pearson-on-correlation-and-causation?u=76281980&t=222)** Well, just to be clear, here are the possibilities.
>
> **[3:46](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/pearson-on-correlation-and-causation?u=76281980&t=226)** When you find a correlation between A and B, A perhaps causes B, maybe it's the other way around, B causes A, or A and B are both caused by a third variable.
>
> **[4:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/pearson-on-correlation-and-causation?u=76281980&t=240)** Some other possibilities that don't always get mentioned.
>
> **[4:04](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/pearson-on-correlation-and-causation?u=76281980&t=244)** A and B could have a bidirectional relationship; this does occur sometimes.
>
> **[4:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/pearson-on-correlation-and-causation?u=76281980&t=250)** And finally, and this is an important reminder, it might just be a coincidence that also happens.
>
> **[4:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/pearson-on-correlation-and-causation?u=76281980&t=257)** So in summary, what's our path forward?
>
> **[4:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/pearson-on-correlation-and-causation?u=76281980&t=261)** It really as simple as this.
>
> **[4:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/pearson-on-correlation-and-causation?u=76281980&t=263)** Don't make an incautious leap to causation when it isn't justified but don't rule out the possibility either.
>
> **[4:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/pearson-on-correlation-and-causation?u=76281980&t=271)** Work through the possibilities like a checklist.
>
> **[4:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/pearson-on-correlation-and-causation?u=76281980&t=275)** Ask yourself questions like, Maybe the causation's going in the reverse direction to what I thought?
>
> **[4:41](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/pearson-on-correlation-and-causation?u=76281980&t=281)** Is there another variable that could be causing both?
>
> **[4:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/pearson-on-correlation-and-causation?u=76281980&t=284)** But don't get so worried about the correlation doesn't imply causation rule that you forget that causation is important, and it's possible to establish; you just can't do it with correlation alone.

> [!info]- Semantic Content
>
> **Code Keywords:** this. (3), finally, (2), case, (1)
> **CLI Commands:** find (3), make (1)
> **Definitions:** is a  (1), is an  (1)
> **Best Practices:** rule of thumb (1)
> **Speakers:** - [narrator] (1)

#### Correlation and regression
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/correlation-and-regression?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/correlation-and-regression?u=76281980&t=0)** - [Instructor] Okay, we're in the same spreadsheet that we used when we were talking about correlations.
>
> **[0:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/correlation-and-regression?u=76281980&t=6)** Now, what I'd like to do is, with this same data, talk about what those correlations look like when we run them in linear regression.
>
> **[0:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/correlation-and-regression?u=76281980&t=16)** So first, we can start with the relationship that makes the most sense, weight predicting miles per gallon.
>
> **[0:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/correlation-and-regression?u=76281980&t=26)** So miles per gallon is our dependent variable and weight is our independent variable.
>
> **[0:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/correlation-and-regression?u=76281980&t=34)** What I want you to look for is the numbers that will look exactly the same, not just resemble, but exactly the same when we reverse this and try to predict weight from miles per gallon, which frankly doesn't make a lot of sense.
>
> **[0:54](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/correlation-and-regression?u=76281980&t=54)** So, first, we see that we have a number called the multiple R.
>
> **[1:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/correlation-and-regression?u=76281980&t=60)** Now, it's called the multiple R, because if we were doing multiple linear regression, and we had multiple independent variables, this calculation would reflect that.
>
> **[1:12](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/correlation-and-regression?u=76281980&t=72)** But since we're just doing one variable, one independent variable, then this correlation is just like the correlation that we would see if we ran a Pearson, and then notice that it's squared.
>
> **[1:25](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/correlation-and-regression?u=76281980&t=85)** So again, very, very high numbers here, because we have a correlation of over .8, extremely high.
>
> **[1:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/correlation-and-regression?u=76281980&t=93)** So when we square that, we get a very high R squared.
>
> **[1:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/correlation-and-regression?u=76281980&t=97)** Notice we have a difficult to read, tiny, tiny P value here for the F test.
>
> **[1:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/correlation-and-regression?u=76281980&t=104)** Why is it hard to read?
>
> **[1:46](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/correlation-and-regression?u=76281980&t=106)** Well, you may recognize that's scientific notation, but also it's a huge exponent on there, times 10 to the negative 102, so it's got 100 zeros after the decimal place.
>
> **[1:59](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/correlation-and-regression?u=76281980&t=119)** Notice we have the same number here.
>
> **[2:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/correlation-and-regression?u=76281980&t=121)** If you know your regression, you may recognize why, but this is not going to be a terribly important detail for this course, but nonetheless, we're looking at it.
>
> **[2:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/correlation-and-regression?u=76281980&t=129)** So let's talk about it.
>
> **[2:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/correlation-and-regression?u=76281980&t=131)** The F test is giving us a sense of how well the overall model fits, and this P value is giving us a sense of whether or not the individual variable is significant.
>
> **[2:25](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/correlation-and-regression?u=76281980&t=145)** So a significant variable versus a significant model.
>
> **[2:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/correlation-and-regression?u=76281980&t=150)** Since we have a one independent variable model, those numbers are identical.
>
> **[2:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/correlation-and-regression?u=76281980&t=156)** And then we have a coefficient here that gives us a sense of the magnitude of the change in miles per gallon for each pound of weight.
>
> **[2:46](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/correlation-and-regression?u=76281980&t=166)** So we remember in algebra class, we learned that the equation of a line is y equals mx plus b.
>
> **[2:51](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/correlation-and-regression?u=76281980&t=171)** In regression, we would phrase it this way, have to add that y intercept in there.
>
> **[2:58](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/correlation-and-regression?u=76281980&t=178)** So we would start with 46.2 miles per gallon, and then we would subtract from that beta coefficient the coefficient for the weight.
>
> **[3:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/correlation-and-regression?u=76281980&t=190)** If we switch over here, that beta zero is different, it's 5101.
>
> **[3:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/correlation-and-regression?u=76281980&t=200)** We start because we're talking pounds now, whereas over here, we were talking about miles per gallon.
>
> **[3:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/correlation-and-regression?u=76281980&t=206)** So the numbers are quite different.
>
> **[3:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/correlation-and-regression?u=76281980&t=208)** And then the coefficient is very different.
>
> **[3:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/correlation-and-regression?u=76281980&t=211)** Rather than this tiny number, we have negative 90.
>
> **[3:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/correlation-and-regression?u=76281980&t=216)** So it is true that there's some difference when we flip this around, but in terms of the magnitude of the correlation, the size of the R squared, and the P value, it's all the same.
>
> **[3:53](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/correlation-and-regression?u=76281980&t=233)** You can compare it.
>
> **[3:54](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/correlation-and-regression?u=76281980&t=234)** I'm going to provide this spreadsheet.
>
> **[3:56](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/correlation-and-regression?u=76281980&t=236)** The multiple R, the R squared, and the P values are all exactly the same.
>
> **[4:02](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/correlation-and-regression?u=76281980&t=242)** So there is nothing about regression that tells us the direction of this relationship.
>
> **[4:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/correlation-and-regression?u=76281980&t=251)** We have to use our common sense and our subject matter expertise, and we have to provide the direction.
>
> **[4:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/correlation-and-regression?u=76281980&t=259)** We have to provide the causal story, but regression has no way to communicate that to the reader in terms of the formula.
>
> **[4:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/correlation-and-regression?u=76281980&t=269)** We can write it and they can see that in this one, weight is the dependent and miles per gallon is the independent, which again is rather odd.
>
> **[4:40](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/correlation-and-regression?u=76281980&t=280)** That's not the way that we should do it, but other than that, there's no way to communicate directionality here.
>
> **[4:46](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/correlation-and-regression?u=76281980&t=286)** So we're going to be seeing, later in the course, the importance of using graphs, where we can communicate the directionality of the relationship and indicate graphically that this is the one that makes sense, weight causing miles per gallon, and not the other way around.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), class, (1), switch (1)
> **CLI Commands:** make (1)
> **Versions:** 46.2 (1)
> **Cross-References:** later in (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### Challenge: What is causing what?
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/challenge-what-is-causing-what?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/challenge-what-is-causing-what?u=76281980&t=0)** - [Instructor] Okay, we've come to our first challenge.
>
> **[0:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/challenge-what-is-causing-what?u=76281980&t=10)** The idea of challenge and solution is to give you a chance to interact with some data, apply some of the concepts, and experiment with what we've been talking about.
>
> **[0:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/challenge-what-is-causing-what?u=76281980&t=20)** So I've provided a data set that I'm sure that you'll find interesting.
>
> **[0:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/challenge-what-is-causing-what?u=76281980&t=23)** It's called PSAT_causality.
>
> **[0:27](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/challenge-what-is-causing-what?u=76281980&t=27)** It's actual data from a research project some years ago.
>
> **[0:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/challenge-what-is-causing-what?u=76281980&t=31)** It has preliminary SAT scores, the college entrance test, along with things like class rank, whether or not they took honors classes, and it even has a learning style indicator in the form of sensing and intuition.
>
> **[0:46](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/challenge-what-is-causing-what?u=76281980&t=46)** If you take a look at the data description, there's some brief descriptions of the variables to help you out.
>
> **[0:54](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/challenge-what-is-causing-what?u=76281980&t=54)** So here's the challenge.
>
> **[0:56](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/challenge-what-is-causing-what?u=76281980&t=56)** Find where the stronger correlations appear to be and try to develop a brief narrative around what you believe is causing what.
>
> **[1:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/challenge-what-is-causing-what?u=76281980&t=68)** You don't want to do anything elaborate at this stage.
>
> **[1:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/challenge-what-is-causing-what?u=76281980&t=71)** We're still warming up and we'll have a chance to work with this data set again in future challenges.
>
> **[1:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/challenge-what-is-causing-what?u=76281980&t=77)** Just to give you a head start, I've run one correlation here between PSAT and class rank that shows a negative correlation that's non-trivial in size, almost a 0.6, and then we have another correlation here between PSAT score and percent honors, but I'll leave it to you to figure out what you think the directionality is and where the most interesting correlations are.
>
> **[1:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/challenge-what-is-causing-what?u=76281980&t=105)** So give that a try, spend just a few minutes on it, and then we'll talk about it in the solution.

> [!info]- Semantic Content
>
> **Env Vars:** psat (2), sat (1)
> **CLI Commands:** find (2)
> **Code Keywords:** try, (1)
> **Versions:** 0.6 (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: What is causing what?
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/solution-what-is-causing-what?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/solution-what-is-causing-what?u=76281980&t=0)** - [Instructor] Okay, let's first address the two explicit tasks in the challenge.
>
> **[0:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/solution-what-is-causing-what?u=76281980&t=11)** What's correlated with that?
>
> **[0:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/solution-what-is-causing-what?u=76281980&t=13)** And what might be causing what?
>
> **[0:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/solution-what-is-causing-what?u=76281980&t=16)** So the first thing I would notice if I was looking at this is these sub scales.
>
> **[0:25](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/solution-what-is-causing-what?u=76281980&t=25)** We have verbal and math, PSAT.
>
> **[0:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/solution-what-is-causing-what?u=76281980&t=28)** Don't forget that we have the data description here with what these variables mean.
>
> **[0:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/solution-what-is-causing-what?u=76281980&t=34)** So we've got the math and verbal sub scales of the Preliminary SAT.
>
> **[0:41](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/solution-what-is-causing-what?u=76281980&t=41)** And we also have this percent honors over here but we have various components of it: English, math, science and social studies.
>
> **[0:51](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/solution-what-is-causing-what?u=76281980&t=51)** So of course, I'm quite familiar with this dataset but if I was looking at it for the first time, I think that's one of the first things that I would notice.
>
> **[0:58](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/solution-what-is-causing-what?u=76281980&t=58)** Another thing that I would notice is that this sensing intuition variable, I have the letter version and the binary kind of dummy-coded version if you're familiar with how that term is used in regression and I've got sex and then a sex dummy variable there.
>
> **[1:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/solution-what-is-causing-what?u=76281980&t=75)** Again, all ready to go for regression.
>
> **[1:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/solution-what-is-causing-what?u=76281980&t=78)** Those are binary in nature.
>
> **[1:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/solution-what-is-causing-what?u=76281980&t=80)** So I want to be careful about correlations there.
>
> **[1:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/solution-what-is-causing-what?u=76281980&t=82)** So again, the first question is what's correlated with what?
>
> **[1:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/solution-what-is-causing-what?u=76281980&t=86)** I would want to check out verbal with English 'cause that possibly would be maybe even a stronger correlation than overall with overall, and then maybe math with verbal, so I've done that.
>
> **[1:41](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/solution-what-is-causing-what?u=76281980&t=101)** And over here, if you take a look, I've done a Pearson of column B with column I, verbal with English.
>
> **[1:50](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/solution-what-is-causing-what?u=76281980&t=110)** And then over here, math with math, and another one that you could... Now, notice that neither of those are as strong as the overall with the overall.
>
> **[2:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/solution-what-is-causing-what?u=76281980&t=121)** That was this one.
>
> **[2:03](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/solution-what-is-causing-what?u=76281980&t=123)** Preliminary SAT with percentage honors overall, okay?
>
> **[2:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/solution-what-is-causing-what?u=76281980&t=129)** A couple of notes though.
>
> **[2:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/solution-what-is-causing-what?u=76281980&t=130)** We're doing a Pearson correlation and that's supposed to be scale variables.
>
> **[2:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/solution-what-is-causing-what?u=76281980&t=135)** So if you know your Pearson from your rank order correlation and so on, you might be saying Keith, boy, we're being a little sloppy here because we can't really be correlating these binary variables or even something like Class_Rank, which is clearly ordinal and not scale.
>
> **[2:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/solution-what-is-causing-what?u=76281980&t=152)** That's all true but we're probably not going to go right to some kind of report with just the correlations.
>
> **[2:39](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/solution-what-is-causing-what?u=76281980&t=159)** We're probably preparing to do something like regression.
>
> **[2:42](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/solution-what-is-causing-what?u=76281980&t=162)** So what we notice is that the sub scales don't do a better job than the overall and that's interesting to know.
>
> **[2:49](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/solution-what-is-causing-what?u=76281980&t=169)** So the next explicit question in the challenge is what could be causing what?
>
> **[2:56](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/solution-what-is-causing-what?u=76281980&t=176)** Well, you could come with a plausible narrative that PSAT score tells something about somebody's readiness for advanced work.
>
> **[3:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/solution-what-is-causing-what?u=76281980&t=186)** So that could be college work since these are high school students or it could be advanced work right within the high school environment, like these honors classes.
>
> **[3:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/solution-what-is-causing-what?u=76281980&t=197)** So you could say well, that makes a lot of sense.
>
> **[3:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/solution-what-is-causing-what?u=76281980&t=199)** That ability as reflected in the PSAT is making them capable of lots of honors classes.
>
> **[3:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/solution-what-is-causing-what?u=76281980&t=208)** You could make the reverse argument.
>
> **[3:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/solution-what-is-causing-what?u=76281980&t=210)** I don't know how many, whether this is the more popular way to go, it's a reframing of it that is somewhat appealing to me.
>
> **[3:39](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/solution-what-is-causing-what?u=76281980&t=219)** What if the kind of homework and the kind of classroom challenges that are faced in an honors class produces greater readiness for the test?
>
> **[3:53](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/solution-what-is-causing-what?u=76281980&t=233)** Now, these college entrance tests, you're not supposed to be able to study for them, at least that's been a debate over many years but you could make a plausible argument that the greater challenges or the nature of the homework and the studying and the lectures in an honors class perhaps creates a readiness for a college entrance test.
>
> **[4:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/solution-what-is-causing-what?u=76281980&t=257)** So what does this have to do with actually doing this kind of research at work or perhaps even in an academic environment?
>
> **[4:24](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/solution-what-is-causing-what?u=76281980&t=264)** Well, one hopes that you had a hypothesis like this before you gathered the data and you even different a literature review or something like that.
>
> **[4:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/solution-what-is-causing-what?u=76281980&t=272)** That's what we're supposed to do when we're wearing our statistics hat.
>
> **[4:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/solution-what-is-causing-what?u=76281980&t=276)** However, you always have to consider the reverse direction of the causality because even if that's not your hypothesis, somebody that's reading or listening to your research will want you to consider that opposite direction.
>
> **[4:54](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/solution-what-is-causing-what?u=76281980&t=294)** So I hope this hasn't seemed like a trick question but there's nothing about the data, nor anything about the correlations that tells you if PSAT causes honors percentage or if it's the other way around.
>
> **[5:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/solution-what-is-causing-what?u=76281980&t=308)** Also, don't forget that it could just be coincidence but there's not that many correlations here.
>
> **[5:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/solution-what-is-causing-what?u=76281980&t=314)** It's not like we've run 500 variables.
>
> **[5:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/solution-what-is-causing-what?u=76281980&t=317)** So you'll have to decide for yourself what the likelihood is that we have some coincidences going on here.
>
> **[5:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/solution-what-is-causing-what?u=76281980&t=326)** And then the other possibility, don't forget, is they could both be caused by a third variable.
>
> **[5:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/solution-what-is-causing-what?u=76281980&t=331)** And you have to be prepared for someone in your audience to attempt to refute your analysis by saying what about the third variable?
>
> **[5:40](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/solution-what-is-causing-what?u=76281980&t=340)** You could speculate that it might be something like IQ.
>
> **[5:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/solution-what-is-causing-what?u=76281980&t=343)** You might even speculate that the kinds of questions on an entrance test aren't all that different from the kinds of questions on an IQ test.
>
> **[5:51](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/solution-what-is-causing-what?u=76281980&t=351)** You could hold that position.
>
> **[5:53](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/solution-what-is-causing-what?u=76281980&t=353)** But there's another third variable to consider.
>
> **[5:55](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/solution-what-is-causing-what?u=76281980&t=355)** What about something like parental education?
>
> **[5:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/solution-what-is-causing-what?u=76281980&t=357)** If the parents of these high school kids are scientists or engineers or doctors or lawyers and so on, maybe they have a particular approach to homework time in the home or being more able to help their students with homework and so on.
>
> **[6:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/solution-what-is-causing-what?u=76281980&t=376)** And I'm not saying I'm taking that position myself but you have to consider that and it might create a home environment that makes these students more ready for honors and more ready for college but then you could also make the claim that parents with an academic background like that might go marching into the school and say my kids are going to take all honors classes, which is something that you hear about.
>
> **[6:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/solution-what-is-causing-what?u=76281980&t=405)** So there's nothing in the data that sorts this out for you.
>
> **[6:49](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/solution-what-is-causing-what?u=76281980&t=409)** You have to read the literature and go in with a hypothesis.
>
> **[6:53](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/solution-what-is-causing-what?u=76281980&t=413)** I know that's sobering if you haven't done a lot of it before but that's the way this works.
>
> **[6:59](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/solution-what-is-causing-what?u=76281980&t=419)** If you're going to try to get at causality, you have to do your homework so to speak and have these hypotheses going in.
>
> **[7:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/solution-what-is-causing-what?u=76281980&t=428)** Hope that was helpful.

> [!info]- Semantic Content
>
> **Env Vars:** psat (4), sat (2)
> **CLI Commands:** make (3)
> **Best Practices:** don't forget (3)
> **Code Keywords:** let (1)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 4. Prediction and Proof in Statistics

#### Using probability to measure uncertainty
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/using-probability-to-measure-uncertainty?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/using-probability-to-measure-uncertainty?u=76281980&t=0)** - [Narrator] Remember the experiment with the eight cups of tea?
>
> **[0:03](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/using-probability-to-measure-uncertainty?u=76281980&t=3)** Why do you think that Fisher chose to have eight cups?
>
> **[0:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/using-probability-to-measure-uncertainty?u=76281980&t=8)** By the way, the proper way of measuring the probability in the historical experiment with Muriel Bristol is more complicated than what we're going to talk about, because she was informed that there would be four milk first and four tea first, but let's just pretend that guessing correctly is analogous to eight coin tosses, your chance of getting the milk first, tea first challenge is 50%, if it's on just one cup, but for eight cups, it would be less than 1%, if we make the math easy and just make it 1/2 to the eighth power.
>
> **[0:50](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/using-probability-to-measure-uncertainty?u=76281980&t=50)** If we only give our taster one cup or one coin flip, we can't tell guessing from the real thing.
>
> **[0:59](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/using-probability-to-measure-uncertainty?u=76281980&t=59)** If we have eight cups, we have much more certainty.
>
> **[1:03](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/using-probability-to-measure-uncertainty?u=76281980&t=63)** Much of statistics is using probability to measure uncertainty.
>
> **[1:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/using-probability-to-measure-uncertainty?u=76281980&t=70)** So what does that have to do with the actual day to day practice of statistics?
>
> **[1:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/using-probability-to-measure-uncertainty?u=76281980&t=76)** That same kind of probability calculation is why we learn about the normal curve and has a lot to do with how we make typical calculations like the famous p-value.
>
> **[1:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/using-probability-to-measure-uncertainty?u=76281980&t=89)** If we could always get the entire dataset as if we were doing a census we wouldn't need all this probability theory.
>
> **[1:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/using-probability-to-measure-uncertainty?u=76281980&t=98)** We would just report the number and that would be the end of it.
>
> **[1:41](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/using-probability-to-measure-uncertainty?u=76281980&t=101)** But we never have census data.
>
> **[1:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/using-probability-to-measure-uncertainty?u=76281980&t=104)** Even if you at times, think you have complete data, because you do machine learning and you have big data, we still have data that represents a snapshot in time and data is always changing.
>
> **[1:59](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/using-probability-to-measure-uncertainty?u=76281980&t=119)** So we never have a census.
>
> **[2:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/using-probability-to-measure-uncertainty?u=76281980&t=121)** Big data doesn't change the situation very much at all.
>
> **[2:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/using-probability-to-measure-uncertainty?u=76281980&t=126)** We observe this when we do a LinkedIn poll or we're monitoring something like a political tracking poll.
>
> **[2:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/using-probability-to-measure-uncertainty?u=76281980&t=133)** We use probability to measure the amount of noise in the system so that we can figure out if there's any signal that's louder than the noise.
>
> **[2:24](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/using-probability-to-measure-uncertainty?u=76281980&t=144)** Okay, let's do a few basic analyses in a dataset.
>
> **[2:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/using-probability-to-measure-uncertainty?u=76281980&t=149)** You don't have to worry about bringing this up in Excel now, but I provided a modified version of a dataset as an Excel spreadsheet and I'm going to make that available to you.
>
> **[2:40](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/using-probability-to-measure-uncertainty?u=76281980&t=160)** Also, I'm providing a PDF with some more elaborate analysis, since we're only going to spend a couple of minutes in this dataset.
>
> **[2:49](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/using-probability-to-measure-uncertainty?u=76281980&t=169)** It's a modified version of a real dataset that captured some health information, but I've removed most of the variables.
>
> **[2:55](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/using-probability-to-measure-uncertainty?u=76281980&t=175)** We're focused on just one question, how much does weight fluctuate among the folks in the dataset?
>
> **[3:02](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/using-probability-to-measure-uncertainty?u=76281980&t=182)** And does it appear to be random or is there some systematic pattern?
>
> **[3:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/using-probability-to-measure-uncertainty?u=76281980&t=187)** So notice we have weight here.
>
> **[3:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/using-probability-to-measure-uncertainty?u=76281980&t=190)** We also have two communities.
>
> **[3:12](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/using-probability-to-measure-uncertainty?u=76281980&t=192)** You can see only one, but there's a total of two and we have a patient ID and also a nurse ID.
>
> **[3:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/using-probability-to-measure-uncertainty?u=76281980&t=200)** Location here is the same as this, but if you really want to get elaborate and play around with some regression this has already been dummy coded for you.
>
> **[3:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/using-probability-to-measure-uncertainty?u=76281980&t=209)** So let's take a look at a t-test that I've ran.
>
> **[3:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/using-probability-to-measure-uncertainty?u=76281980&t=213)** So here we are on a tab where I've run a t-test and it looks like the average weight in one community is 178.71.
>
> **[3:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/using-probability-to-measure-uncertainty?u=76281980&t=224)** And the average weight in the other community is 176.49.
>
> **[3:49](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/using-probability-to-measure-uncertainty?u=76281980&t=229)** So what we're going to do is we're going to explore this notion of whether or not that's a big difference or not a big difference.
>
> **[3:56](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/using-probability-to-measure-uncertainty?u=76281980&t=236)** Is it a surprising difference or not a surprising difference?
>
> **[3:59](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/using-probability-to-measure-uncertainty?u=76281980&t=239)** So clearly this is not a census.
>
> **[4:02](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/using-probability-to-measure-uncertainty?u=76281980&t=242)** These are just some folks that participated in a study.
>
> **[4:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/using-probability-to-measure-uncertainty?u=76281980&t=245)** We have no reason to think that they're random.
>
> **[4:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/using-probability-to-measure-uncertainty?u=76281980&t=248)** They're what statisticians like to call a convenient sample.
>
> **[4:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/using-probability-to-measure-uncertainty?u=76281980&t=251)** They're the folks that happened to maybe go to a particular clinic or were part of a study, because they were receiving a treatment or something like that.
>
> **[4:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/using-probability-to-measure-uncertainty?u=76281980&t=260)** But we're only looking at their weights.
>
> **[4:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/using-probability-to-measure-uncertainty?u=76281980&t=263)** Nor do we have any reason to think that these communities should differ.
>
> **[4:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/using-probability-to-measure-uncertainty?u=76281980&t=268)** But we do notice a couple of pounds between the two averages.
>
> **[4:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/using-probability-to-measure-uncertainty?u=76281980&t=271)** So what do we make of that?
>
> **[4:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/using-probability-to-measure-uncertainty?u=76281980&t=273)** Do we think this means something, could it even be causal?
>
> **[4:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/using-probability-to-measure-uncertainty?u=76281980&t=278)** Well, if you know your t-test the p-value here is well above 0.05.
>
> **[4:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/using-probability-to-measure-uncertainty?u=76281980&t=285)** So according to the t-test, the difference between the two communities is not greater than we would expect from random fluctuation alone.
>
> **[4:54](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/using-probability-to-measure-uncertainty?u=76281980&t=294)** So let's pursue that thinking a little bit.
>
> **[4:58](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/using-probability-to-measure-uncertainty?u=76281980&t=298)** So let's put the t-test in perspective.
>
> **[5:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/using-probability-to-measure-uncertainty?u=76281980&t=301)** How does the t-test draw this conclusion?
>
> **[5:04](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/using-probability-to-measure-uncertainty?u=76281980&t=304)** Well, you're looking at a cool little experiment that I did.
>
> **[5:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/using-probability-to-measure-uncertainty?u=76281980&t=308)** I simulated rolling dice on behalf of the members of this dataset and look at what I've got.
>
> **[5:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/using-probability-to-measure-uncertainty?u=76281980&t=314)** It looks a bit like a normal curve, doesn't it?
>
> **[5:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/using-probability-to-measure-uncertainty?u=76281980&t=317)** But the two communities also look a bit different in the dice rolls that they got, but we wouldn't expect them to be identical, would we?
>
> **[5:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/using-probability-to-measure-uncertainty?u=76281980&t=326)** And that's the whole point of the p-value, it's helping you assess this level of uncertainty so that you can tell a real difference from a mirage.
>
> **[5:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/using-probability-to-measure-uncertainty?u=76281980&t=337)** So what about this?
>
> **[5:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/using-probability-to-measure-uncertainty?u=76281980&t=338)** Now we're looking at the weights again, but we don't just have two averages, we've got it broken down by 10 measurements, five nurse IDs in the two communities.
>
> **[5:52](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/using-probability-to-measure-uncertainty?u=76281980&t=352)** The nurse IDs are presumably associated with whom measured and recorded the weight information.
>
> **[5:59](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/using-probability-to-measure-uncertainty?u=76281980&t=359)** Now this is interesting.
>
> **[6:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/using-probability-to-measure-uncertainty?u=76281980&t=361)** Nurse ID 1 appears to have had the lowest weight measurements in both communities.
>
> **[6:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/using-probability-to-measure-uncertainty?u=76281980&t=368)** Maybe that nurse asked their patients to remove their shoes, but maybe the other nurses didn't, we could speculate that something like that has happened.
>
> **[6:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/using-probability-to-measure-uncertainty?u=76281980&t=377)** What else do you see in the pattern?
>
> **[6:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/using-probability-to-measure-uncertainty?u=76281980&t=379)** One thing looks particularly noteworthy.
>
> **[6:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/using-probability-to-measure-uncertainty?u=76281980&t=382)** The highest and lowest overall are 20 pounds apart.
>
> **[6:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/using-probability-to-measure-uncertainty?u=76281980&t=388)** That's rather striking.
>
> **[6:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/using-probability-to-measure-uncertainty?u=76281980&t=390)** Is there perhaps something we could look for in the other variables to help explain the difference?
>
> **[6:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/using-probability-to-measure-uncertainty?u=76281980&t=396)** Well, I ran another test, but first I have a confession to make.
>
> **[6:42](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/using-probability-to-measure-uncertainty?u=76281980&t=402)** All but one variable comes from the real dataset.
>
> **[6:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/using-probability-to-measure-uncertainty?u=76281980&t=405)** It's real weight measurements, but nurse ID has been added by me and it's randomly generated.
>
> **[6:54](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/using-probability-to-measure-uncertainty?u=76281980&t=414)** Our F-test, what you're looking at now has a non-significant can p-value.
>
> **[7:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/using-probability-to-measure-uncertainty?u=76281980&t=420)** In fact, it's 0.628.
>
> **[7:02](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/using-probability-to-measure-uncertainty?u=76281980&t=422)** So the analysis of variance was able to detect that this amount of fluctuation is not surprising at all.
>
> **[7:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/using-probability-to-measure-uncertainty?u=76281980&t=430)** By the way, the F in F-test stands for Fisher.
>
> **[7:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/using-probability-to-measure-uncertainty?u=76281980&t=434)** It's typical and unsurprising that you would have this much noise.
>
> **[7:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/using-probability-to-measure-uncertainty?u=76281980&t=439)** It's not greater in magnitude than we would expect if it was pure noise.
>
> **[7:25](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/using-probability-to-measure-uncertainty?u=76281980&t=445)** So we conclude that there's nothing going on, but were you at all surprised by the amount of noise in the system?
>
> **[7:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/using-probability-to-measure-uncertainty?u=76281980&t=454)** Did your mind drift to thoughts of how to explain the fluctuation or what the cause might be, perhaps when I threw out the shoes, no shoes theory?
>
> **[7:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/using-probability-to-measure-uncertainty?u=76281980&t=464)** Personally, I love reminding myself from time to time that random fluctuations can seem fairly dramatic.
>
> **[7:51](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/using-probability-to-measure-uncertainty?u=76281980&t=471)** You stare at the data long enough and you may become convinced that there's something there.
>
> **[7:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/using-probability-to-measure-uncertainty?u=76281980&t=477)** So p-values are not a cure all.
>
> **[8:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/using-probability-to-measure-uncertainty?u=76281980&t=480)** And over the years, since Fisher, who's the most famously associated with them, they've come under periodic criticism.
>
> **[8:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/using-probability-to-measure-uncertainty?u=76281980&t=488)** There's certainly a lot of confusion surrounding them too.
>
> **[8:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/using-probability-to-measure-uncertainty?u=76281980&t=491)** But if you remember that their main purpose is to help you measure the expected amount of noise and you learn how to use them properly, they can be very helpful.

> [!info]- Semantic Content
>
> **CLI Commands:** make (6)
> **Code Keywords:** let (5), this, (1)
> **Versions:** 178.71 (1), 176.49 (1), 0.05 (1), 0.628 (1)
> **Env Vars:** pdf (1)
> **Tools:** notion (1)
> **UI Navigation:** go to (1)
> **Definitions:** stands for (1)
> **Analogies:** analogous to (1)

#### p-value review
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/p-value-review?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/p-value-review?u=76281980&t=0)** - [Instructor] So we've just seen that the p-value can be very helpful in determining when patterns in our data are extreme or merely fluctuating no more than we would expect from random forces like sampling variation.
>
> **[0:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/p-value-review?u=76281980&t=15)** That should prepare us for the official definition of a p-value.
>
> **[0:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/p-value-review?u=76281980&t=21)** The American Statistical Association panel defined the p-value as, "The probability under a specified statistical model that a statistical summary of the data, for example, the sample mean difference between two compared groups, would be equal to or more extreme than its observed value."
>
> **[0:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/p-value-review?u=76281980&t=45)** Oh boy, that's a bit intense if you're not familiar with it.
>
> **[0:50](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/p-value-review?u=76281980&t=50)** I added the underlying, by the way.
>
> **[0:52](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/p-value-review?u=76281980&t=52)** But think of it this way.
>
> **[0:54](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/p-value-review?u=76281980&t=54)** For our nurses' weight and measurements example, that would simply mean would fluctuations of 20 pounds or more between measurements be probable or unlikely?
>
> **[1:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/p-value-review?u=76281980&t=69)** That's really all it means.
>
> **[1:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/p-value-review?u=76281980&t=71)** But it can be confusing if you aren't well rehearsed in it.
>
> **[1:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/p-value-review?u=76281980&t=76)** So the best way to keep track is to make a list of what to consider when you get a p-value below 0.05 and what to do when you get a p-value above 0.05.

> [!info]- Semantic Content
>
> **Versions:** 0.05 (2)
> **CLI Commands:** make (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Hypothesis testing checklist
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/hypothesis-testing-checklist?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/hypothesis-testing-checklist?u=76281980&t=0)** - [Speaker] Okay, this is a checklist that I've used for many years as a quick reminder of all the numerous things that a P-Value below 0.05 could mean.
>
> **[0:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/hypothesis-testing-checklist?u=76281980&t=13)** And the things that a P-Value above 0.05 could mean.
>
> **[0:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/hypothesis-testing-checklist?u=76281980&t=19)** So we'll do a quick review of this, and you'll get a chance to try working with this checklist actually in the upcoming challenge and solution.
>
> **[0:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/hypothesis-testing-checklist?u=76281980&t=29)** So when you get a result below 0.05, naturally, the first thing that everyone thinks of, is that we have a true positive.
>
> **[0:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/hypothesis-testing-checklist?u=76281980&t=36)** We have an actual effect.
>
> **[0:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/hypothesis-testing-checklist?u=76281980&t=38)** And that could certainly be true.
>
> **[0:40](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/hypothesis-testing-checklist?u=76281980&t=40)** But now, let's talk about what else could be going on.
>
> **[0:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/hypothesis-testing-checklist?u=76281980&t=44)** Well, even though you might have a significant result, you have to be careful to check for the magnitude of the effect.
>
> **[0:53](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/hypothesis-testing-checklist?u=76281980&t=53)** So what can happen is you can have a result that's statistically significant, but so minimal in its magnitude that it's not helpful very much.
>
> **[1:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/hypothesis-testing-checklist?u=76281980&t=65)** I remember years ago, reading a study of the effectiveness of some toothpaste and the P-Value is very, very low but the magnitude of the effect was 1/10 of a cavity.
>
> **[1:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/hypothesis-testing-checklist?u=76281980&t=81)** So less than a cavity, a 10th of a cavity over a child's entire childhood.
>
> **[1:27](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/hypothesis-testing-checklist?u=76281980&t=87)** That's the kind of thing that you'd be looking for.
>
> **[1:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/hypothesis-testing-checklist?u=76281980&t=89)** So something can be statistically significant without being clinically significant.
>
> **[1:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/hypothesis-testing-checklist?u=76281980&t=94)** That's a good reminder.
>
> **[1:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/hypothesis-testing-checklist?u=76281980&t=95)** We also know that the data can be biased.
>
> **[1:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/hypothesis-testing-checklist?u=76281980&t=97)** And bias can make it go below 0.05 when it shouldn't, and bias can make it go in the other direction as well.
>
> **[1:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/hypothesis-testing-checklist?u=76281980&t=105)** Next, you could have just encountered a rare event.
>
> **[1:47](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/hypothesis-testing-checklist?u=76281980&t=107)** In other words, it could be a coincidence.
>
> **[1:49](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/hypothesis-testing-checklist?u=76281980&t=109)** But I love this phrasing, which I borrowed from a lecture that I heard years ago at Chapel Hill.
>
> **[1:56](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/hypothesis-testing-checklist?u=76281980&t=116)** I just always remember it because I just think this is the best way to talk about it.
>
> **[2:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/hypothesis-testing-checklist?u=76281980&t=121)** In other words, if you say, oh, you use fancy language like oh, it could be a false positive.
>
> **[2:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/hypothesis-testing-checklist?u=76281980&t=126)** Well, sure, that's the language we often use.
>
> **[2:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/hypothesis-testing-checklist?u=76281980&t=129)** But calling it a rare event is a very powerful reminder because if you're exposing yourself to 5% chance of a false positive, and you're doing that 500 times, it doesn't feel like a rare event anymore.
>
> **[2:24](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/hypothesis-testing-checklist?u=76281980&t=144)** So there's a certain amount of subjectivity to this and we use 0.05 out of habit.
>
> **[2:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/hypothesis-testing-checklist?u=76281980&t=148)** But there are certain times when maybe 0.1 or 0.01 are better choices.
>
> **[2:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/hypothesis-testing-checklist?u=76281980&t=155)** So again, I love that phrasing.
>
> **[2:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/hypothesis-testing-checklist?u=76281980&t=157)** Finally, you could be using the wrong test.
>
> **[2:39](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/hypothesis-testing-checklist?u=76281980&t=159)** You could be violating assumptions.
>
> **[2:41](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/hypothesis-testing-checklist?u=76281980&t=161)** And there's certain tests that make the P-Value too low.
>
> **[2:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/hypothesis-testing-checklist?u=76281980&t=164)** Those are called liberal test.
>
> **[2:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/hypothesis-testing-checklist?u=76281980&t=165)** And there's other tests that make the P-Value too high.
>
> **[2:48](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/hypothesis-testing-checklist?u=76281980&t=168)** Those are conservative tests.
>
> **[2:50](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/hypothesis-testing-checklist?u=76281980&t=170)** That's how liberal and conservative are used in the statistical context.
>
> **[2:54](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/hypothesis-testing-checklist?u=76281980&t=174)** So going over to the greater than 0.05, and we've already discussed most of these, you could have a true negative.
>
> **[3:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/hypothesis-testing-checklist?u=76281980&t=181)** And one of the controversies going on is that since journals only publish papers with a lot of findings below 0.05, you don't get to read about the true negatives in a lot of academic journals.
>
> **[3:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/hypothesis-testing-checklist?u=76281980&t=196)** And that's something that people are talking about, that they're concerned about.
>
> **[3:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/hypothesis-testing-checklist?u=76281980&t=199)** If you truly believe that you have a true negative result, that's interesting.
>
> **[3:25](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/hypothesis-testing-checklist?u=76281980&t=205)** You also might not have enough power.
>
> **[3:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/hypothesis-testing-checklist?u=76281980&t=208)** Now this is a complex topic and we won't talk about it in depth now.
>
> **[3:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/hypothesis-testing-checklist?u=76281980&t=212)** But the whole notion of statistical power is did I have sufficient sample size that I truly believe that my result above 0.05 is because I have a true negative and not simply because I had two weak a sample size.
>
> **[3:49](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/hypothesis-testing-checklist?u=76281980&t=229)** Bias, we've already mentioned, and conservative tests, we've already mentioned.
>
> **[3:53](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/hypothesis-testing-checklist?u=76281980&t=233)** So I hope you find this checklist helpful and you'll get a chance to use this in the challenge and solution.

> [!info]- Semantic Content
>
> **Versions:** 0.05 (8), 0.1 (1), 0.01 (1)
> **CLI Commands:** make (4), find (1)
> **Definitions:** is a  (3), in other words (2)
> **Code Keywords:** this, (1), let (1), for. (1), finally, (1)
> **Tools:** notion (1)
> **Warnings:** be careful (1)
> **Speakers:** - [speaker] (1)

#### Taleb on normality, mediocristan, and extremistan
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/taleb-on-normality-mediocristan-and-extremistan?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/taleb-on-normality-mediocristan-and-extremistan?u=76281980&t=0)** - [Instructor] Nassim Taleb is famous for writing "The Black Swan."
>
> **[0:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/taleb-on-normality-mediocristan-and-extremistan?u=76281980&t=5)** He also wrote "Fooled by Randomness" in which he talks about similar issues.
>
> **[0:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/taleb-on-normality-mediocristan-and-extremistan?u=76281980&t=11)** We'll have more to say about Black Swan events when we discuss inductive reasoning, but for now let's revisit the notion of the normal curve and how it helps us determine what is expected and what is sufficiently rare that it's unexpected.
>
> **[0:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/taleb-on-normality-mediocristan-and-extremistan?u=76281980&t=29)** In other words, it's predicted to be in the thin tails or the outer edges of the distribution.
>
> **[0:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/taleb-on-normality-mediocristan-and-extremistan?u=76281980&t=36)** In "The Black Swan" Taleb performs a thought experiment in which he introduces two imaginary place names, Mediocristan and Extremistan, to be metaphors for types of data distributions that we might encounter.
>
> **[0:54](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/taleb-on-normality-mediocristan-and-extremistan?u=76281980&t=54)** For his example of Mediocristan, he has us imagine a distribution of our caloric intake over the course of a whole year.
>
> **[1:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/taleb-on-normality-mediocristan-and-extremistan?u=76281980&t=65)** On one day, perhaps Thanksgiving dinner, we have an unusually high caloric intake.
>
> **[1:12](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/taleb-on-normality-mediocristan-and-extremistan?u=76281980&t=72)** It might be twice or maybe even more than twice the usual, but it is still a very, very small fraction for the total of the entire year.
>
> **[1:25](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/taleb-on-normality-mediocristan-and-extremistan?u=76281980&t=85)** Then imagine that we're in a stadium full of people but a famous billionaire is present, worth many tens of billions of dollars.
>
> **[1:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/taleb-on-normality-mediocristan-and-extremistan?u=76281980&t=95)** And you're looking at the distribution of net worth for everyone in the stadium.
>
> **[1:41](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/taleb-on-normality-mediocristan-and-extremistan?u=76281980&t=101)** This is a very different situation, for which he uses this metaphor of Extremistan.
>
> **[1:48](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/taleb-on-normality-mediocristan-and-extremistan?u=76281980&t=108)** It's different because in this situation, one data point, the multi-billionaire, has a net worth that exceeds the entire grand total of everybody else in the stadium.
>
> **[2:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/taleb-on-normality-mediocristan-and-extremistan?u=76281980&t=121)** That situation has another name.
>
> **[2:03](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/taleb-on-normality-mediocristan-and-extremistan?u=76281980&t=123)** It's sometimes referred to as a fat-tailed distribution.
>
> **[2:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/taleb-on-normality-mediocristan-and-extremistan?u=76281980&t=128)** The reason it's important is that if you had analyzed the distribution before the billionaire arrived, you would have concluded the existence of such a data point, was not only unlikely, but nearly impossible.
>
> **[2:24](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/taleb-on-normality-mediocristan-and-extremistan?u=76281980&t=144)** So when you're talking about Taleb's metaphor of Extremistan, the normal curve breaks down.
>
> **[2:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/taleb-on-normality-mediocristan-and-extremistan?u=76281980&t=152)** We'll revisit Taleb and his concept of Black Swan events a bit later in the course.

> [!info]- Semantic Content
>
> **Definitions:** in other words (1), is a  (1)
> **Analogies:** imagine (2)
> **Code Keywords:** let (1)
> **Cross-References:** later in (1)
> **Tools:** notion (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Evaluate significant finding
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/challenge-evaluate-significant-finding?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/challenge-evaluate-significant-finding?u=76281980&t=0)** - [Instructor] Okay, it's time for our next challenge.
>
> **[0:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/challenge-evaluate-significant-finding?u=76281980&t=8)** This will be an easy one to set up.
>
> **[0:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/challenge-evaluate-significant-finding?u=76281980&t=10)** Here we are in the same data set, but I performed a t-test.
>
> **[0:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/challenge-evaluate-significant-finding?u=76281980&t=14)** Let's take a look.
>
> **[0:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/challenge-evaluate-significant-finding?u=76281980&t=16)** And it's significant. So I have two questions for you.
>
> **[0:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/challenge-evaluate-significant-finding?u=76281980&t=21)** What does this P value mean?
>
> **[0:25](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/challenge-evaluate-significant-finding?u=76281980&t=25)** Here's the P value down here.
>
> **[0:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/challenge-evaluate-significant-finding?u=76281980&t=28)** And what are the implications for further analysis?
>
> **[0:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/challenge-evaluate-significant-finding?u=76281980&t=32)** A bit about these two categories.
>
> **[0:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/challenge-evaluate-significant-finding?u=76281980&t=35)** You know, interestingly, the first publisher of the Myers Briggs, or MBTI, was Educational Testing Service, the publisher of the SAT and the PSAT, so there's a ton of data in the literature about the relationship between the sensing intuition and the PSAT.
>
> **[0:55](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/challenge-evaluate-significant-finding?u=76281980&t=55)** The quick version is that those that prefer sensing value competence and a rehearsed procedure, even though the procedure can be quite complex like what you would find in engineering or math or science.
>
> **[1:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/challenge-evaluate-significant-finding?u=76281980&t=71)** Those that prefer intuition like a more creative, exploratory approach to solving problems.
>
> **[1:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/challenge-evaluate-significant-finding?u=76281980&t=80)** Again, it can be in those same areas, like engineering or math or science.
>
> **[1:24](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/challenge-evaluate-significant-finding?u=76281980&t=84)** Remember, though, that this is a multiple choice test, so you can speculate a bit about how those two learning styles might approach multiple choice tests.
>
> **[1:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/challenge-evaluate-significant-finding?u=76281980&t=95)** But remember, your two questions are what does the P value mean, and what are the implications for further analysis, like regression or maybe even further along something like a causal model.

> [!info]- Semantic Content
>
> **Env Vars:** psat (2), mbti (1), sat (1)
> **CLI Commands:** find (1)
> **Code Keywords:** let (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Evaluate significant finding
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/solution-evaluate-significant-finding?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/solution-evaluate-significant-finding?u=76281980&t=0)** (upbeat electro-pop music)
>
> **[0:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/solution-evaluate-significant-finding?u=76281980&t=5)** - [Instructor] So here we are, we have these two different scores and the challenge was, what do we make of this?
>
> **[0:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/solution-evaluate-significant-finding?u=76281980&t=13)** What does it mean by implication?
>
> **[0:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/solution-evaluate-significant-finding?u=76281980&t=15)** Do we believe it?
>
> **[0:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/solution-evaluate-significant-finding?u=76281980&t=17)** Two, what are the implications for future analysis?
>
> **[0:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/solution-evaluate-significant-finding?u=76281980&t=20)** So let's go down the list of the things to think about when your p-value is below 0.05, which is certainly the case here.
>
> **[0:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/solution-evaluate-significant-finding?u=76281980&t=31)** We have 2.9 times 10 to the negative fifth.
>
> **[0:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/solution-evaluate-significant-finding?u=76281980&t=34)** I know it's a little frustrating sometimes when you get the scientific notation, but in other words we're well below 0.05 and it really should be thought of as a threshold phenomenon.
>
> **[0:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/solution-evaluate-significant-finding?u=76281980&t=44)** So we've got a significant result.
>
> **[0:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/solution-evaluate-significant-finding?u=76281980&t=45)** What do we make of it?
>
> **[0:46](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/solution-evaluate-significant-finding?u=76281980&t=46)** Well, one possibility obviously is that this is real and that it represents a real phenomenon which has implications for further analysis, but let's rule out the other possibilities.
>
> **[0:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/solution-evaluate-significant-finding?u=76281980&t=57)** So the first possibility to rule out is sure it's significant, but it's not meaningful in the sense that it's too small.
>
> **[1:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/solution-evaluate-significant-finding?u=76281980&t=65)** Well, on the PSAT, and you may or may not be familiar with the PSAT, you have to multiply at times 10 to get the equivalent of an SAT score.
>
> **[1:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/solution-evaluate-significant-finding?u=76281980&t=75)** And you might not be familiar with the SAT either, but that would be in SAT terms like an 905 and just shy of an 800.
>
> **[1:24](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/solution-evaluate-significant-finding?u=76281980&t=84)** So that's about 100 points, that would be like a standard deviation.
>
> **[1:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/solution-evaluate-significant-finding?u=76281980&t=88)** So this is a non-trivial difference.
>
> **[1:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/solution-evaluate-significant-finding?u=76281980&t=91)** So we can rule that out.
>
> **[1:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/solution-evaluate-significant-finding?u=76281980&t=92)** This isn't a significant result of a tiny difference.
>
> **[1:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/solution-evaluate-significant-finding?u=76281980&t=96)** This would be a noteworthy difference, enough to impact someone's ability to get admitted to a university, for instance.
>
> **[1:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/solution-evaluate-significant-finding?u=76281980&t=104)** So the effect is large enough that it would have an impact.
>
> **[1:48](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/solution-evaluate-significant-finding?u=76281980&t=108)** So we want to understand what might be causing that even though on this screen alone we don't have what we need to know for cause.
>
> **[1:56](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/solution-evaluate-significant-finding?u=76281980&t=116)** Other possibility is a poor sample.
>
> **[1:58](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/solution-evaluate-significant-finding?u=76281980&t=118)** Now, you couldn't possibly know about how the data is gathered, but I happen to know how the data was gathered and to talk about it for a moment, we'll give you an idea of the kinds of questions that you'd want to ask, if you had access to someone that knew.
>
> **[2:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/solution-evaluate-significant-finding?u=76281980&t=131)** The Myers-Briggs, the sensing intuition indicator, as well as the PSAT, were taken together back to back by all the students that were in attendance at a particular high school during the data collection.
>
> **[2:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/solution-evaluate-significant-finding?u=76281980&t=148)** So what's noteworthy about this is this is not a convenient sample, it's a pretty comprehensive sample, and it's not only college-bound students who happen to take the PSAT.
>
> **[2:42](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/solution-evaluate-significant-finding?u=76281980&t=162)** So the sample is almost certainly representative, certainly of that high school, but we can probably also make some generalizations more broadly.
>
> **[2:51](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/solution-evaluate-significant-finding?u=76281980&t=171)** Then the next thing to ask, is this just a rare event?
>
> **[2:54](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/solution-evaluate-significant-finding?u=76281980&t=174)** Is it a coincidence?
>
> **[2:56](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/solution-evaluate-significant-finding?u=76281980&t=176)** Well, one way to rule out that possibility is if anybody's ever found this before is this kind of thing in the literature?
>
> **[3:03](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/solution-evaluate-significant-finding?u=76281980&t=183)** And it is.
>
> **[3:04](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/solution-evaluate-significant-finding?u=76281980&t=184)** So we can probably rule that out.
>
> **[3:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/solution-evaluate-significant-finding?u=76281980&t=187)** The other factor for just coming across a rare event just a coincidence, just a false positive, would be did we run 100 variables or 200 variables?
>
> **[3:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/solution-evaluate-significant-finding?u=76281980&t=197)** And that wasn't the case here.
>
> **[3:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/solution-evaluate-significant-finding?u=76281980&t=198)** There were a fair number of variables, but more like on the order of a half dozen to a dozen not a huge number of variables.
>
> **[3:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/solution-evaluate-significant-finding?u=76281980&t=206)** In statistics terms they sometimes call that parson money.
>
> **[3:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/solution-evaluate-significant-finding?u=76281980&t=209)** The last one to think about is, did we possibly use the wrong test and accidentally use a test that's too liberal?
>
> **[3:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/solution-evaluate-significant-finding?u=76281980&t=217)** Now what that would mean is that the p-value was artificially too low, but we were cautious.
>
> **[3:42](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/solution-evaluate-significant-finding?u=76281980&t=222)** If you notice up at the top, it says, assuming unequal variances.
>
> **[3:46](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/solution-evaluate-significant-finding?u=76281980&t=226)** So if we use the test that did assume equal variances but we failed to meet that assumption, it can cause a little bit of distortion in the p-value, but that doesn't seem to be what's going on.
>
> **[3:58](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/solution-evaluate-significant-finding?u=76281980&t=238)** So I would conclude frankly, that there's something real and meaningful here, but we don't know what it is.
>
> **[4:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/solution-evaluate-significant-finding?u=76281980&t=245)** So what are the implications for further analysis?
>
> **[4:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/solution-evaluate-significant-finding?u=76281980&t=248)** Well, let's remind ourselves of the other variables.
>
> **[4:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/solution-evaluate-significant-finding?u=76281980&t=251)** We have no idea what the direction of causality would be and that's why we have to be so careful that if we try to do something like regression which we certainly could, because the SN variable has been dummy coded with ones and zeros for the purpose of doing something like regression, we don't know what's causing what.
>
> **[4:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/solution-evaluate-significant-finding?u=76281980&t=270)** Maybe there's something about sensing intuition that makes you more inclined to take an honors class.
>
> **[4:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/solution-evaluate-significant-finding?u=76281980&t=276)** Maybe there's something about the classes you think you would like, maybe there's some inherent talent that makes them better at a test.
>
> **[4:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/solution-evaluate-significant-finding?u=76281980&t=284)** Maybe intuitives are good guessers which actually has been speculated as a possible reason for this finding.
>
> **[4:51](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/solution-evaluate-significant-finding?u=76281980&t=291)** So we really have to go out there and get some subject matter expertise and so on before we know where to take this.
>
> **[4:58](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/solution-evaluate-significant-finding?u=76281980&t=298)** So it appears to be real, but whether or not it's kind of in a role of more like a dependent or more like an independent variable, or maybe it's an A causes B causes C type scenario, this finding alone doesn't help us with that at all.
>
> **[5:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/solution-evaluate-significant-finding?u=76281980&t=316)** We have to get that subject matter expertise and try to sort that out.
>
> **[5:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/solution-evaluate-significant-finding?u=76281980&t=320)** And then if we want to prove some kind of causal relationship, we're going to have to get to the point that we're going to see later on in the course where we assign some directionality to this variable, but we're not there yet.
>
> **[5:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/solution-evaluate-significant-finding?u=76281980&t=332)** Hope you found that helpful.

> [!info]- Semantic Content
>
> **Env Vars:** psat (4), sat (3)
> **Code Keywords:** let (3), class. (1), this. (1)
> **CLI Commands:** make (3)
> **Versions:** 0.05 (2), 2.9 (1)
> **Definitions:** is a  (2), in other words (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat electro-pop music) (1)


### 5. Deduction and Induction

#### What are induction and deduction?
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-are-induction-and-deduction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-are-induction-and-deduction?u=76281980&t=0)** - [Instructor] When you look up induction and deduction, two names frequently come up; David Hume, the Scottish, empiricist philosopher, and Sherlock Holmes, the fictional detective.
>
> **[0:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-are-induction-and-deduction?u=76281980&t=14)** Let's clarify what induction and deduction are and how they work.
>
> **[0:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-are-induction-and-deduction?u=76281980&t=20)** The difference between the two will be important to our discussions of statistics and machine learning.
>
> **[0:27](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-are-induction-and-deduction?u=76281980&t=27)** We'll discuss Hume soon enough, but let's start with Sherlock Holmes.
>
> **[0:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-are-induction-and-deduction?u=76281980&t=31)** So why Sherlock Holmes?
>
> **[0:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-are-induction-and-deduction?u=76281980&t=33)** The hero of the famous Arthur Conan Doyle stories is forever chatting up his ever-loyal companion, Dr. Watson, with the importance of deduction.
>
> **[0:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-are-induction-and-deduction?u=76281980&t=43)** But together, they engage in induction, At least as often as they perform deduction.
>
> **[0:49](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-are-induction-and-deduction?u=76281980&t=49)** Induction allows you to derive generalizations and develop theories from specific observations.
>
> **[0:58](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-are-induction-and-deduction?u=76281980&t=58)** Deduction allows you to draw specific, logical conclusions from general knowledge, theories and hypotheses.
>
> **[1:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-are-induction-and-deduction?u=76281980&t=69)** In one of the stories, "The Hound of the Baskervilles," a visitor stops by when Holmes is away and forgets a walking stick.
>
> **[1:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-are-induction-and-deduction?u=76281980&t=76)** In typical fashion, Holmes proceeds to guess the identity of the visitor by examining the walking stick.
>
> **[1:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-are-induction-and-deduction?u=76281980&t=82)** There's a whole elaborate exchange, but if you read it carefully, they're making clever, educated guesses, but guesses nonetheless based on a large number of observations that they make about the walking stick.
>
> **[1:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-are-induction-and-deduction?u=76281980&t=96)** Holmes is using induction.
>
> **[1:39](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-are-induction-and-deduction?u=76281980&t=99)** Here's what he hypothesizes after all that induction: There emerges a young fellow under 30, amiable, unambitious, absent-minded and the possessor of a favorite dog, which I should describe roughly as being larger than a terrier and smaller than a mastiff.
>
> **[1:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-are-induction-and-deduction?u=76281980&t=117)** The guess about the dog resulted from noticing what appeared to be teeth marks left where the dog may have carried the stick.
>
> **[2:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-are-induction-and-deduction?u=76281980&t=125)** But then he looked at the width of the teeth marks, allowing him to deduce the size of the dog.
>
> **[2:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-are-induction-and-deduction?u=76281980&t=130)** Here's how that works.
>
> **[2:12](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-are-induction-and-deduction?u=76281980&t=132)** A dog has been carrying the stick.
>
> **[2:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-are-induction-and-deduction?u=76281980&t=134)** The teeth marks have a particular width.
>
> **[2:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-are-induction-and-deduction?u=76281980&t=137)** We can deduce the size range of the dog.
>
> **[2:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-are-induction-and-deduction?u=76281980&t=140)** So the conclusion follows logically from the premises.
>
> **[2:24](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-are-induction-and-deduction?u=76281980&t=144)** So having deduced that the size of the dog has to be between a terrier and a mastiff, Holmes now has a hypothesis about the dog, which allows him to eliminate possibilities that don't fit the data.
>
> **[2:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-are-induction-and-deduction?u=76281980&t=158)** He has certain characteristics that he can look for to confirm or disconfirm that his hypothesis is correct.
>
> **[2:47](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-are-induction-and-deduction?u=76281980&t=167)** The reputation is that Holmes is always very serious and scientific, but the stories are actually quite humorous at times, almost like a modern sitcom.
>
> **[2:56](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-are-induction-and-deduction?u=76281980&t=176)** He almost immediately announces that it must be a curly haired spaniel.
>
> **[3:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-are-induction-and-deduction?u=76281980&t=181)** Watson objects that he couldn't possibly know that.
>
> **[3:04](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-are-induction-and-deduction?u=76281980&t=184)** But Holmes, meanwhile, has been looking out the window and the visitor is back, which allows him to confirm his hunch.
>
> **[3:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-are-induction-and-deduction?u=76281980&t=193)** So he's right about the dog, but some of the other hypotheses are actually disconfirmed when the mystery visitor returns.
>
> **[3:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-are-induction-and-deduction?u=76281980&t=201)** So induction and deduction differ greatly in the role of the hypothesis.
>
> **[3:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-are-induction-and-deduction?u=76281980&t=206)** And this is going to be very important for us.
>
> **[3:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-are-induction-and-deduction?u=76281980&t=210)** With induction, you start with observations, move on to pattern recognition, and then end up with a hypothesis.
>
> **[3:40](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-are-induction-and-deduction?u=76281980&t=220)** With deduction, you start with a hypothesis, then you perform an experiment or collect data, and that allows you to confirm or disconfirm your hypothesis.
>
> **[3:53](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-are-induction-and-deduction?u=76281980&t=233)** Why are these terms so important to the goals of this course?
>
> **[3:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-are-induction-and-deduction?u=76281980&t=237)** Well, induction is going to be more closely aligned with what we can expect to achieve with machine learning, and statistics is the better bet if our goals are deductive in nature.
>
> **[4:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-are-induction-and-deduction?u=76281980&t=250)** However, as we're about to see, induction has some challenges associated with it.
>
> **[4:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/what-are-induction-and-deduction?u=76281980&t=255)** In fact, it's often called the problem of induction.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### Hume on induction
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/hume-on-induction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/hume-on-induction?u=76281980&t=0)** - [Instructor] David Hume usually gets the credit for starting the conversation about the problem of induction, and that's why his name is so often associated with these issues.
>
> **[0:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/hume-on-induction?u=76281980&t=10)** He concludes that induction can't tell you very much with certainty, and that seems to endanger the whole notion of science.
>
> **[0:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/hume-on-induction?u=76281980&t=20)** And although he lived many decades ago, centuries ago, really, it seems to undermine our ability to accomplish very much with machine learning as well.
>
> **[0:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/hume-on-induction?u=76281980&t=32)** For Hume, causation is not something that we can directly perceive, which is important if you're an empiricist like Hume was.
>
> **[0:41](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/hume-on-induction?u=76281980&t=41)** For him, all we could perceive was a constant conjunction, that's the phrase that's always used, and temporal priority.
>
> **[0:51](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/hume-on-induction?u=76281980&t=51)** Those two phrases simply meaning that the cause and effect are observed together and that the cause must occur before the effect.
>
> **[1:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/hume-on-induction?u=76281980&t=61)** If you've ever tried to read Hume, he loves to talk about billiards, so there's always a lot of talk of one billiard ball causing the second billiard ball to move.
>
> **[1:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/hume-on-induction?u=76281980&t=71)** Experience this enough times and your mind starts to expect it.
>
> **[1:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/hume-on-induction?u=76281980&t=76)** The association becomes a habit, and your mind projects the idea of cause onto the situation.
>
> **[1:24](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/hume-on-induction?u=76281980&t=84)** But according to Hume, there's nothing about causation that we can directly experience.
>
> **[1:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/hume-on-induction?u=76281980&t=88)** So it's nothing more than a habit, seemingly no different than any other habit we might have.
>
> **[1:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/hume-on-induction?u=76281980&t=95)** There's a phrase that contemporary philosopher Marianne Talbot used in a lecture which I just love, "inductively bold."
>
> **[1:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/hume-on-induction?u=76281980&t=103)** By this, she means you might take a dozen examples of constant conjunction for you to attribute cause and effect, but if you're inductively bold, you might attribute cause and effect sooner.
>
> **[1:56](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/hume-on-induction?u=76281980&t=116)** I love this because it underscores that there's something subjective associated with all this and that something's happening in our mind, not in the data itself.
>
> **[2:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/hume-on-induction?u=76281980&t=128)** A lot of folks, then and now, find this quite disturbing.
>
> **[2:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/hume-on-induction?u=76281980&t=133)** The classic example is pondering if the sun will rise tomorrow, something that we usually don't worry much about.
>
> **[2:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/hume-on-induction?u=76281980&t=141)** Just because it always has in the past does not give us a logical reason to believe that it must always be so.
>
> **[2:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/hume-on-induction?u=76281980&t=150)** If you've ever researched a mutual fund, you've encountered this in a different context.
>
> **[2:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/hume-on-induction?u=76281980&t=157)** The famous disclaimer always reads, past performance is no indication of future results.
>
> **[2:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/hume-on-induction?u=76281980&t=165)** This should be potentially disturbing to us in the context of this course because if this is true, then supervised machine learning is going to have a very tough time getting us to causal inference.
>
> **[2:58](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/hume-on-induction?u=76281980&t=178)** After all, all it's doing is finding patterns in the historical data.
>
> **[3:03](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/hume-on-induction?u=76281980&t=183)** On what basis can we generalize to future data?
>
> **[3:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/hume-on-induction?u=76281980&t=186)** Well, the holdout validation, which we're going to see in a bit, gives us some confidence that the patterns are real, but there's more to the story.
>
> **[3:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/hume-on-induction?u=76281980&t=195)** Hume is one of the earliest modern philosophers.
>
> **[3:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/hume-on-induction?u=76281980&t=199)** We're still feeling the impact of the problem of induction today.
>
> **[3:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/hume-on-induction?u=76281980&t=202)** People still talk about it.
>
> **[3:24](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/hume-on-induction?u=76281980&t=204)** So let's explore what some other influential folks more contemporary than Hume have had to say about it and how to address the problem in our analyses.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (1), let (1)
> **CLI Commands:** find (1)
> **Tools:** notion (1)
> **Speakers:** - [instructor] (1)

#### Popper on induction and falsification
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/popper-on-induction-and-falsification?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/popper-on-induction-and-falsification?u=76281980&t=0)** - [Instructor] Carl Popper is a philosopher of science and one of the most important thinkers of the last century.
>
> **[0:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/popper-on-induction-and-falsification?u=76281980&t=6)** Some have tried to refute Hume regarding the problem of induction, but not Popper.
>
> **[0:12](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/popper-on-induction-and-falsification?u=76281980&t=12)** He took Hume's challenge, accepted it and ran with it, but he offered one of the most influential solutions to the problem which is still largely accepted in scientific communities today.
>
> **[0:25](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/popper-on-induction-and-falsification?u=76281980&t=25)** He's famous for contributing to the discussion around two big ideas, the problem of induction and the problem of demarcation.
>
> **[0:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/popper-on-induction-and-falsification?u=76281980&t=35)** Let's tackle demarcation first.
>
> **[0:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/popper-on-induction-and-falsification?u=76281980&t=38)** He was trying to fair it out what makes science different from what he called pseudoscience.
>
> **[0:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/popper-on-induction-and-falsification?u=76281980&t=44)** And since we are worried how to convince with evidence, this is going to be a topic of importance to us too.
>
> **[0:52](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/popper-on-induction-and-falsification?u=76281980&t=52)** He frequently used Einstein and Freud as examples.
>
> **[0:58](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/popper-on-induction-and-falsification?u=76281980&t=58)** Although he was younger than either of them, they were all alive when Popper was developing his ideas.
>
> **[1:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/popper-on-induction-and-falsification?u=76281980&t=65)** For him, Einstein was an exemplar of science.
>
> **[1:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/popper-on-induction-and-falsification?u=76281980&t=70)** And for him, Freud was an example of pseudoscience.
>
> **[1:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/popper-on-induction-and-falsification?u=76281980&t=74)** If you are a fan of Freud, he meant something very specific by this as we'll see.
>
> **[1:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/popper-on-induction-and-falsification?u=76281980&t=80)** Here's why Popper admired Einstein so much.
>
> **[1:24](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/popper-on-induction-and-falsification?u=76281980&t=84)** It seems almost like it was as much an attitude as a process.
>
> **[1:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/popper-on-induction-and-falsification?u=76281980&t=89)** Einstein was looking for crucial experiments whose agreement with his predictions would by no means establish his theory while a disagreement as he was the first to stress would show his theory to be untenable.
>
> **[1:46](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/popper-on-induction-and-falsification?u=76281980&t=106)** So the problem Popper had with Freud is that Freudian concepts like repression and sublimation can't be easily subjected to experimentation.
>
> **[1:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/popper-on-induction-and-falsification?u=76281980&t=117)** So according to Popper, no matter what the evidence is, you can't refute the theory.
>
> **[2:03](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/popper-on-induction-and-falsification?u=76281980&t=123)** On the other hand, if a contemporary social scientist wanted to prove that talk therapy was effective, they could perform an experiment to see if symptoms improved over the course of a period of time.
>
> **[2:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/popper-on-induction-and-falsification?u=76281980&t=137)** And that experiment could confirm or disconfirm that the therapy was effective.
>
> **[2:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/popper-on-induction-and-falsification?u=76281980&t=143)** So while Popper apparently wasn't a fan of Freud, it wasn't entirely an ad hominem attack nor would Popper's experiment requirement make all of psychology unscientific.
>
> **[2:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/popper-on-induction-and-falsification?u=76281980&t=157)** His critique was quite specific.
>
> **[2:39](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/popper-on-induction-and-falsification?u=76281980&t=159)** The term that has become associated with this and has made Popper famous is that scientific theories have to be falsifiable.
>
> **[2:50](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/popper-on-induction-and-falsification?u=76281980&t=170)** It still influences science today and it's the kind of thing that statistics is useful for.
>
> **[2:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/popper-on-induction-and-falsification?u=76281980&t=177)** By falsifiable, he meant that even if it's impossible to prove definitively that you're right, you can prove that your theory is wrong.
>
> **[3:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/popper-on-induction-and-falsification?u=76281980&t=188)** So why can't you prove that you're right?
>
> **[3:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/popper-on-induction-and-falsification?u=76281980&t=191)** Well, we're back to Hume and the problem of induction.
>
> **[3:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/popper-on-induction-and-falsification?u=76281980&t=194)** Remember the rising sun?
>
> **[3:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/popper-on-induction-and-falsification?u=76281980&t=196)** No matter how much historical data you accumulate, you're never a hundred percent sure that you're right when you predict future events.
>
> **[3:25](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/popper-on-induction-and-falsification?u=76281980&t=205)** As Popper described it in his autobiography, it took me a long time to put two and two together and to realize the connection between my demarcation criterion and the problem of induction.
>
> **[3:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/popper-on-induction-and-falsification?u=76281980&t=218)** I regard them as inseparable companions.
>
> **[3:42](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/popper-on-induction-and-falsification?u=76281980&t=222)** Induction simply does not exist and the opposite view is a straightforward mistake.
>
> **[3:50](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/popper-on-induction-and-falsification?u=76281980&t=230)** Popper died in 1994 so he is not here to comment on machine learning, but clearly there's a lot of induction going on when we're using machine learning techniques.
>
> **[4:03](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/popper-on-induction-and-falsification?u=76281980&t=243)** So it's a reminder to be very careful about how loudly and how broadly we talk about our models' accuracy and its relevance to things like causality until we've had a chance to thoroughly investigate its ability to perform in a real world setting.
>
> **[4:24](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/popper-on-induction-and-falsification?u=76281980&t=264)** We'll have much more to say about this when we get to the subject of prediction and proof with data mining.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), for. (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### Taleb on induction
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/taleb-on-induction?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/taleb-on-induction?u=76281980&t=1)** - For Taleb, the whole idea of a black swan is a rare event with big consequences, but the idea is very much connected to the problem of induction.
>
> **[0:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/taleb-on-induction?u=76281980&t=13)** In interviews, he's always quick to explain that the idea didn't originate with him nor with Hume.
>
> **[0:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/taleb-on-induction?u=76281980&t=20)** The Roman poet Juvenal used the phrase many centuries ago, simply as a metaphor for rare.
>
> **[0:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/taleb-on-induction?u=76281980&t=29)** The quote that you'll often see is this one, and you can see how closely it parallels the issues that we've been exploring in this course.
>
> **[0:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/taleb-on-induction?u=76281980&t=38)** "No amount of observations of white swans can allow the inference that all swans are white, but the observation of a single black swan is sufficient to refute that conclusion."
>
> **[0:50](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/taleb-on-induction?u=76281980&t=50)** A quick note of clarification on this quote, he's paraphrasing Hume.
>
> **[0:56](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/taleb-on-induction?u=76281980&t=56)** Taleb is borrowing language similar to Hume in the problem of induction, but also incorporating the black swan metaphor.
>
> **[1:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/taleb-on-induction?u=76281980&t=65)** So it really is attributable to Taleb, and not directly to Hume.
>
> **[1:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/taleb-on-induction?u=76281980&t=71)** Hume never used this exact wording.
>
> **[1:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/taleb-on-induction?u=76281980&t=73)** Taleb has a restatement of it, which is a bit more blunt.
>
> **[1:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/taleb-on-induction?u=76281980&t=77)** "No swan is black because I looked at 4,000 swans and found none.
>
> **[1:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/taleb-on-induction?u=76281980&t=83)** I cannot logically make that statement, unless I'm given the privilege of observing with certainty all available swans."
>
> **[1:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/taleb-on-induction?u=76281980&t=95)** He's a big Karl Popper fan.
>
> **[1:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/taleb-on-induction?u=76281980&t=98)** Why?
>
> **[1:39](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/taleb-on-induction?u=76281980&t=99)** For the same reason.
>
> **[1:40](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/taleb-on-induction?u=76281980&t=100)** You never have access to all the swans.
>
> **[1:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/taleb-on-induction?u=76281980&t=103)** So, you can disconfirm a hypothesis, but confirming is a different story.
>
> **[1:49](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/taleb-on-induction?u=76281980&t=109)** This is incredibly important because sometimes you'll hear talk of big data and having all the data.
>
> **[1:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/taleb-on-induction?u=76281980&t=117)** It may seem at times that you do have the privilege of observing all available swans.
>
> **[2:03](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/taleb-on-induction?u=76281980&t=123)** If you're analyzing the whole database for instance, but this kind of thinking is very risky.
>
> **[2:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/taleb-on-induction?u=76281980&t=131)** Watch out.
>
> **[2:12](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/taleb-on-induction?u=76281980&t=132)** Here's another example from his book.
>
> **[2:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/taleb-on-induction?u=76281980&t=134)** The market never goes down 20% in a given three-month period.
>
> **[2:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/taleb-on-induction?u=76281980&t=141)** According to Taleb, you could disprove this, but this statement is meaningless if verified.
>
> **[2:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/taleb-on-induction?u=76281980&t=149)** So, here are the criteria that define black swan events.
>
> **[2:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/taleb-on-induction?u=76281980&t=155)** They're rare, they're outliers in other words.
>
> **[2:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/taleb-on-induction?u=76281980&t=158)** They have extreme impact, and then a third one that sometimes folks miss because it's in a footnote.
>
> **[2:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/taleb-on-induction?u=76281980&t=165)** It's also a black swan if it's extremely likely, but hasn't happened.
>
> **[2:53](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/taleb-on-induction?u=76281980&t=173)** That's just as surprising if it's supposed to happen, but didn't.
>
> **[2:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/taleb-on-induction?u=76281980&t=177)** And then finally, retrospective predictability.
>
> **[3:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/taleb-on-induction?u=76281980&t=181)** What does all this mean?
>
> **[3:03](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/taleb-on-induction?u=76281980&t=183)** Well, Taleb's argument is that we get fooled by our statistics training to think that rare events are even more rare than they really are.
>
> **[3:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/taleb-on-induction?u=76281980&t=191)** The culprit here is the normal curve as we discussed earlier when we encountered Taleb.
>
> **[3:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/taleb-on-induction?u=76281980&t=197)** But we do so at our peril, because these rare events can have extreme impact.
>
> **[3:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/taleb-on-induction?u=76281980&t=203)** Machine learning is going to face challenges too because it's fueled by induction, and our training data set isn't likely to have any of these extreme outliers.
>
> **[3:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/taleb-on-induction?u=76281980&t=216)** What's the last point regarding retrospective predictability?
>
> **[3:41](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/taleb-on-induction?u=76281980&t=221)** Well, Taleb is referring to what is often called the narrative fallacy, where we tend to look back at experiences and convince ourselves that it made sense all along.
>
> **[3:50](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/taleb-on-induction?u=76281980&t=230)** This psychological quirk, which is just part of our human makeup, makes us worry about black swans less because we feel complacent.
>
> **[4:02](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/taleb-on-induction?u=76281980&t=242)** So, if you've heard about Taleb's black swans, but haven't had a chance to read him, then you might not have known that his books are full of references to Hume and Popper.
>
> **[4:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/taleb-on-induction?u=76281980&t=254)** Now you can put all of that into a richer context.
>
> **[4:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/taleb-on-induction?u=76281980&t=258)** Next, we'll learn that Pearl also has some important things to say about Hume.

> [!info]- Semantic Content
>
> **Definitions:** is a  (3), in other words (1)
> **Code Keywords:** this, (1), finally, (1)
> **Analogies:** similar to (1), for instance (1)
> **CLI Commands:** make (1)
> **Cross-References:** we discussed (1)
> **Warnings:** watch out (1)
> **Speakers:** - for (1)

#### Counterfactuals: Pearl on induction and causality
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/counterfactuals-pearl-on-induction-and-causality?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/counterfactuals-pearl-on-induction-and-causality?u=76281980&t=0)** - [Instructor] For Pearl, a concept called counterfactuals is key to solving the causality issue.
>
> **[0:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/counterfactuals-pearl-on-induction-and-causality?u=76281980&t=8)** In fact, for Pearl, it may unlock the secrets to eventually teaching AI to be more like us.
>
> **[0:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/counterfactuals-pearl-on-induction-and-causality?u=76281980&t=15)** Contemporary robots are simply incapable of asking what if?
>
> **[0:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/counterfactuals-pearl-on-induction-and-causality?u=76281980&t=21)** But the question is uniquely human and allows us to imagine events that have not happened.
>
> **[0:27](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/counterfactuals-pearl-on-induction-and-causality?u=76281980&t=27)** In fact, while Pearl's discussion of counterfactuals in "The Book of Why" does not include a reference to black swans.
>
> **[0:34](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/counterfactuals-pearl-on-induction-and-causality?u=76281980&t=34)** We can imagine that only with subject matter expertise and the ability to ask what if could we predict something that hasn't happened before.
>
> **[0:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/counterfactuals-pearl-on-induction-and-causality?u=76281980&t=45)** Theory and subject matter expertise have an awkward relationship with both stats and machine learning because it isn't always clear how to use this information to improve our models.
>
> **[0:58](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/counterfactuals-pearl-on-induction-and-causality?u=76281980&t=58)** But for Pearl, expertise is critical.
>
> **[1:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/counterfactuals-pearl-on-induction-and-causality?u=76281980&t=61)** Data alone is never enough.
>
> **[1:04](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/counterfactuals-pearl-on-induction-and-causality?u=76281980&t=64)** So what is a counterfactual?
>
> **[1:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/counterfactuals-pearl-on-induction-and-causality?u=76281980&t=67)** Pearl likes to reference a particular line from Hume's "Enquiry."
>
> **[1:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/counterfactuals-pearl-on-induction-and-causality?u=76281980&t=71)** As a brief aside, Hume wrote his "Treatise of Human Nature" when he was a young man but the "Enquiry Concerning understanding," written later, often represents a more mature line of reasoning.
>
> **[1:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/counterfactuals-pearl-on-induction-and-causality?u=76281980&t=86)** Pearl cites the following line.
>
> **[1:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/counterfactuals-pearl-on-induction-and-causality?u=76281980&t=89)** "Where, if the first object had not been, the second never had existed."
>
> **[1:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/counterfactuals-pearl-on-induction-and-causality?u=76281980&t=96)** This line drives the philosophers crazy 'cause it's actually quite different than the constant conjunction phrasing from the treatise.
>
> **[1:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/counterfactuals-pearl-on-induction-and-causality?u=76281980&t=105)** We'll leave all that to the philosophers.
>
> **[1:48](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/counterfactuals-pearl-on-induction-and-causality?u=76281980&t=108)** For us, it's much more important where Pearl takes this.
>
> **[1:52](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/counterfactuals-pearl-on-induction-and-causality?u=76281980&t=112)** And it's critical to his notion of how to build causal models.
>
> **[1:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/counterfactuals-pearl-on-induction-and-causality?u=76281980&t=117)** We can build the model and then by carefully crafting what if scenarios, we can measure the impact of a potential cause.
>
> **[2:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/counterfactuals-pearl-on-induction-and-causality?u=76281980&t=126)** We can explore the model both with and without the potential cause present.
>
> **[2:12](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/counterfactuals-pearl-on-induction-and-causality?u=76281980&t=132)** We're not ready to take that logic or the technique to its conclusion but it's one of Pearl's major contributions to the study of causality.

> [!info]- Semantic Content
>
> **Analogies:** imagine (2)
> **Code Keywords:** this. (1)
> **Tools:** notion (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 6. Prediction and Proof in Data Mining

#### Data mining vs. data dredging
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/data-mining-vs-data-dredging?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/data-mining-vs-data-dredging?u=76281980&t=0)** - [Instructor] Data mining is a term that was very popular in the 90's, and is still used sometimes for traditional Machine Learning.
>
> **[0:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/data-mining-vs-data-dredging?u=76281980&t=10)** In the early days of data mining, some very traditional statisticians were horrified and said that it was nothing more than data fishing.
>
> **[0:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/data-mining-vs-data-dredging?u=76281980&t=21)** Sometimes you'd also hear the phrase data dredging neither of these were compliments.
>
> **[0:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/data-mining-vs-data-dredging?u=76281980&t=28)** What did they mean by that and why were they so concerned?
>
> **[0:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/data-mining-vs-data-dredging?u=76281980&t=33)** To be clear, they weren't talking about phishing with a PH, like we talk about these days for the purposes of identity theft.
>
> **[0:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/data-mining-vs-data-dredging?u=76281980&t=43)** What they were referring to by saying data fishing or data dredging, was trying so many variables in the model that you were bound to find something.
>
> **[0:54](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/data-mining-vs-data-dredging?u=76281980&t=54)** They had a very specific violation of statistics protocol in mind.
>
> **[0:59](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/data-mining-vs-data-dredging?u=76281980&t=59)** In statistics were taught to favor parsimony, simpler models are considered better.
>
> **[1:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/data-mining-vs-data-dredging?u=76281980&t=67)** You don't hear folks speak about it in these terms as much anymore, but the problem hasn't gone away.
>
> **[1:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/data-mining-vs-data-dredging?u=76281980&t=75)** And by understanding the problem, you can ensure that your Machine Learning models are the best they can be.
>
> **[1:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/data-mining-vs-data-dredging?u=76281980&t=82)** One of my favorite personalities in statistics is Jacob Cohen.
>
> **[1:27](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/data-mining-vs-data-dredging?u=76281980&t=87)** And I love an article that he wrote years ago called "Things I've Learned So Far."
>
> **[1:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/data-mining-vs-data-dredging?u=76281980&t=93)** I want to briefly talk about Cohen's argument in this article, even though he was mostly talking about statistics and not primarily about Machine Learning, he has an excellent and clear articulation of this data fishing issue.
>
> **[1:49](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/data-mining-vs-data-dredging?u=76281980&t=109)** "One thing I've learned over a long period of time is that less is more.
>
> **[1:55](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/data-mining-vs-data-dredging?u=76281980&t=115)** I've encountered too many studies with prodigious numbers of dependent variables or with what seemed to me far too many independent variables or heaven help us both."
>
> **[2:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/data-mining-vs-data-dredging?u=76281980&t=127)** So he continues and now he's really getting to the heart of the issue.
>
> **[2:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/data-mining-vs-data-dredging?u=76281980&t=130)** He writes, "You know full well that if, there were no real associations in any of the 60 tests the chance of getting one or more quote significant results is quite high and that you would expect three spuriously significant results on the average.
>
> **[2:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/data-mining-vs-data-dredging?u=76281980&t=153)** You then must ask yourself some embarrassing questions such as which three or real, or even is six significantly more than the chance expected three?"
>
> **[2:47](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/data-mining-vs-data-dredging?u=76281980&t=167)** What he's saying here, is that maybe you have six false positives not just three false positives, 'cause that could happen.
>
> **[2:56](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/data-mining-vs-data-dredging?u=76281980&t=176)** I find Cohen very funny, but he's making a powerful point about overly complex statistical analysis.
>
> **[3:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/data-mining-vs-data-dredging?u=76281980&t=185)** But if you extend his logic to something like a decision tree, you're going to start to get nervous about your decision tree.
>
> **[3:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/data-mining-vs-data-dredging?u=76281980&t=193)** Let's revisit what he and others are talking about.
>
> **[3:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/data-mining-vs-data-dredging?u=76281980&t=198)** The concern is based on some simple math, let's say you've got a half dozen independent variables that you are supplying to a decision tree not a big number by the way.
>
> **[3:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/data-mining-vs-data-dredging?u=76281980&t=209)** Every time you form a branch, you have multiple chances of a false positive.
>
> **[3:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/data-mining-vs-data-dredging?u=76281980&t=215)** Possibly, introducing noise into your tree model that won't hold up when you try to apply it to new data.
>
> **[3:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/data-mining-vs-data-dredging?u=76281980&t=224)** So let's take a look at the six, you would take .95 to the six power, you get a number you subtract that from 1 and next thing you know, you find out that you have a 26.5% chance of a false positive.
>
> **[3:58](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/data-mining-vs-data-dredging?u=76281980&t=238)** You can probably live with that, but six independent variables is not a big number.
>
> **[4:03](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/data-mining-vs-data-dredging?u=76281980&t=243)** So now let's try a hundred variables.
>
> **[4:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/data-mining-vs-data-dredging?u=76281980&t=246)** If you do the math here, you'll find that you have a 99.4% chance of a false positive and a hundred variables in a decision tree is not unusual.
>
> **[4:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/data-mining-vs-data-dredging?u=76281980&t=258)** So you can see what Cohen and others were worried about, even though he was talking more about statistical research and wasn't really talking about decision trees.
>
> **[4:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/data-mining-vs-data-dredging?u=76281980&t=268)** But nonetheless, the problem is there.
>
> **[4:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/data-mining-vs-data-dredging?u=76281980&t=271)** So frankly, the solution is to avoid doing this.
>
> **[4:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/data-mining-vs-data-dredging?u=76281980&t=276)** And by that, I mean that most Machine Learning techniques don't use p-values for variable selection.
>
> **[4:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/data-mining-vs-data-dredging?u=76281980&t=285)** So if you are using a statistical method, like linear regression or binary logistic regression let's say, or even a decision tree that uses p-value, some do, you want to be careful it's a risky maneuver.
>
> **[5:04](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/data-mining-vs-data-dredging?u=76281980&t=304)** And if your background in statistics is more extensive than your background in Machine Learning what you might be tempted to do, is to say, wow, I prefer that tree with the six variables over the tree with a hundred variables because I don't want to commit type one.
>
> **[5:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/data-mining-vs-data-dredging?u=76281980&t=320)** But that would be dangerous as well, because when we're doing data mining we don't have a hypothesis so we don't know what variables are important.
>
> **[5:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/data-mining-vs-data-dredging?u=76281980&t=329)** So using p-values for model selection and Machine Learning is risky indeed.
>
> **[5:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/data-mining-vs-data-dredging?u=76281980&t=335)** So what you need is another approach.
>
> **[5:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/data-mining-vs-data-dredging?u=76281980&t=338)** You need some alternative to p-values and at least at the level of model selection we have what's called train test validation, which is our next topic.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), if, (1), this. (1)
> **CLI Commands:** find (4)
> **Versions:** 26.5 (1), 99.4 (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Best Practices:** avoid doing (1)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)

#### Train/Test: What can go wrong?
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/train-test-what-can-go-wrong?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/train-test-what-can-go-wrong?u=76281980&t=0)** - When folks are trained in statistics first and then transition into machine learning, they often ask where are all the p-values?
>
> **[0:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/train-test-what-can-go-wrong?u=76281980&t=11)** P-values don't really work when it comes to machine learning.
>
> **[0:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/train-test-what-can-go-wrong?u=76281980&t=14)** Although Jacob Cohen's critique was really about statistics and not about machine learning, it certainly cast doubt on machine learning in general when it comes to p-values.
>
> **[0:27](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/train-test-what-can-go-wrong?u=76281980&t=27)** It certainly makes it clear that p-values cannot protect us at scale.
>
> **[0:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/train-test-what-can-go-wrong?u=76281980&t=33)** As you start to get dozens or hundreds of variables, the p-values simply can't work.
>
> **[0:40](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/train-test-what-can-go-wrong?u=76281980&t=40)** The risk of a false positive becomes so high as to be a certainty.
>
> **[0:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/train-test-what-can-go-wrong?u=76281980&t=45)** So we need another way and if you've done any machine learning modeling, you're probably already familiar with the alternative.
>
> **[0:55](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/train-test-what-can-go-wrong?u=76281980&t=55)** You randomly divide your data into two halves.
>
> **[0:59](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/train-test-what-can-go-wrong?u=76281980&t=59)** Sometimes you'll meet folks that prefer to have three segments, but it's most often two, and this is called holdout validation.
>
> **[1:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/train-test-what-can-go-wrong?u=76281980&t=69)** Then you build the model on one half, the train data, but you verify its effectiveness on the other half, the test data.
>
> **[1:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/train-test-what-can-go-wrong?u=76281980&t=79)** In stats, there's no equivalent to this.
>
> **[1:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/train-test-what-can-go-wrong?u=76281980&t=82)** In stats you have one data set and the p-value is your check.
>
> **[1:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/train-test-what-can-go-wrong?u=76281980&t=88)** But here, a p-value would offer no help.
>
> **[1:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/train-test-what-can-go-wrong?u=76281980&t=91)** So this whole setup, this holdout validation, is vaguely like a control group in an experimental group.
>
> **[1:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/train-test-what-can-go-wrong?u=76281980&t=98)** Certainly not exactly like that, but there's certain similarities.
>
> **[1:42](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/train-test-what-can-go-wrong?u=76281980&t=102)** There's still no p-value, but if there's a drop in performance between the train performance and the test performance, then you know, you've got trouble.
>
> **[1:53](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/train-test-what-can-go-wrong?u=76281980&t=113)** But if it verifies, you're all set, right?
>
> **[1:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/train-test-what-can-go-wrong?u=76281980&t=117)** Well, not quite.
>
> **[1:59](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/train-test-what-can-go-wrong?u=76281980&t=119)** This is a pretty good system and it's the one that almost everybody uses, but you have to be careful.
>
> **[2:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/train-test-what-can-go-wrong?u=76281980&t=127)** If there's something about the process of acquiring the data, getting the data to the algorithm, even things like data prep, that affected all of the original data, by that I mean both the train and the test, if somehow bias got introduced, you're going to run into trouble, because it's affected both of the halves, because it affected the data before you randomly split into two.
>
> **[2:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/train-test-what-can-go-wrong?u=76281980&t=156)** Let me tell you about an example.
>
> **[2:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/train-test-what-can-go-wrong?u=76281980&t=158)** There's a really powerful case study that was on National Public Radio on the "All Things Considered" show.
>
> **[2:46](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/train-test-what-can-go-wrong?u=76281980&t=166)** It was called How Can Doctors Be Sure A Self-taught Computer Is Making The Right Decisions?
>
> **[2:55](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/train-test-what-can-go-wrong?u=76281980&t=175)** It turns out the problem was exactly what we were just discussing, that something has affected both the train data and the test data.
>
> **[3:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/train-test-what-can-go-wrong?u=76281980&t=185)** In the NPR piece, they said, "Zech and his medical school colleagues discovered "that the Stanford algorithm to diagnose disease "from x-rays sometimes cheated."
>
> **[3:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/train-test-what-can-go-wrong?u=76281980&t=198)** Instead of just scoring the image for medically important details, it considered other elements of the scan, "including information from around the edge of the image "that showed the type of machine that took the x-ray."
>
> **[3:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/train-test-what-can-go-wrong?u=76281980&t=215)** As it turns out, Cynthia Rudin, who's a machine learning researcher at Duke University, talks about this case study all the time and she provides a little bit more detail.
>
> **[3:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/train-test-what-can-go-wrong?u=76281980&t=225)** What happened was that the most serious cases were too ill to go down to the x-ray room, so they were administered the x-ray with a portable x-ray machine.
>
> **[3:58](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/train-test-what-can-go-wrong?u=76281980&t=238)** Well, and this is both fascinating and a bit disturbing, the word portable appeared on the x-ray image and the neural network picked up on the presence of that word.
>
> **[4:12](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/train-test-what-can-go-wrong?u=76281980&t=252)** That affected both the training data and the test data.
>
> **[4:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/train-test-what-can-go-wrong?u=76281980&t=256)** So the modelers got a false sense of performance that did not translate to real situations.
>
> **[4:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/train-test-what-can-go-wrong?u=76281980&t=266)** When this happens, your accuracy would appear better and more useful than it really is.
>
> **[4:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/train-test-what-can-go-wrong?u=76281980&t=273)** This is a common but serious problem.
>
> **[4:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/train-test-what-can-go-wrong?u=76281980&t=278)** So watch out and make sure that models don't have access to the kind of information that will allow them to cheat like this and look out for this problem.
>
> **[4:50](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/train-test-what-can-go-wrong?u=76281980&t=290)** Train test validation is very powerful, but you have to use it carefully.

> [!info]- Semantic Content
>
> **Code Keywords:** this. (1), let (1), public (1), self (1)
> **Definitions:** is a  (2), is called (1)
> **Warnings:** be careful (1), watch out (1)
> **CLI Commands:** make (1)
> **Env Vars:** npr (1)
> **Prerequisites:** setup (1)
> **Speakers:** - when (1)

#### A/B testing during the evaluation phase
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/a-b-testing-during-the-evaluation-phase?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/a-b-testing-during-the-evaluation-phase?u=76281980&t=0)** - [Instructor] Okay. So we've seen again and again, that statistics and machine learning are quite different and this is true but they can work together.
>
> **[0:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/a-b-testing-during-the-evaluation-phase?u=76281980&t=11)** If you look at CRISP-DM, you'll see that the phase after modeling is evaluation.
>
> **[0:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/a-b-testing-during-the-evaluation-phase?u=76281980&t=18)** I have to admit to a bit of a pet peeve.
>
> **[0:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/a-b-testing-during-the-evaluation-phase?u=76281980&t=21)** You'll hear folks say that the evaluation phase is running tests like R squared, area under the curve, overall accuracy.
>
> **[0:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/a-b-testing-during-the-evaluation-phase?u=76281980&t=31)** It's not true.
>
> **[0:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/a-b-testing-during-the-evaluation-phase?u=76281980&t=33)** That's actually modeling assessment.
>
> **[0:35](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/a-b-testing-during-the-evaluation-phase?u=76281980&t=35)** It's part of the modeling phase.
>
> **[0:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/a-b-testing-during-the-evaluation-phase?u=76281980&t=37)** The evaluation phase could be called business evaluation.
>
> **[0:42](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/a-b-testing-during-the-evaluation-phase?u=76281980&t=42)** It's not about the names.
>
> **[0:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/a-b-testing-during-the-evaluation-phase?u=76281980&t=44)** It's about this terribly important reminder that when you get to business evaluation, you're doing something very different than R squared or area under the curve.
>
> **[0:53](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/a-b-testing-during-the-evaluation-phase?u=76281980&t=53)** It's when you use business metrics to see if the model is performing well in a real world setting as a deployed model.
>
> **[1:03](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/a-b-testing-during-the-evaluation-phase?u=76281980&t=63)** This is a perfect opportunity to use statistics in support of your machine learning project.
>
> **[1:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/a-b-testing-during-the-evaluation-phase?u=76281980&t=70)** In my experience, you should always do a partial rollout of the model.
>
> **[1:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/a-b-testing-during-the-evaluation-phase?u=76281980&t=75)** In other words, use the model in just one city or one factory or just one sales office before you deploy it everywhere.
>
> **[1:24](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/a-b-testing-during-the-evaluation-phase?u=76281980&t=84)** This will allow you to do an apples to apples comparison of the test city to the other cities, the test factory to the other factories or the test sales office to the other offices.
>
> **[1:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/a-b-testing-during-the-evaluation-phase?u=76281980&t=97)** It's an AB test.
>
> **[1:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/a-b-testing-during-the-evaluation-phase?u=76281980&t=98)** So statistics is perfectly suited to the task.
>
> **[1:42](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/a-b-testing-during-the-evaluation-phase?u=76281980&t=102)** Now you don't want to run just one T test at this point, you should have determined a set of business metrics and key performance indicators back during business understanding.
>
> **[1:56](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/a-b-testing-during-the-evaluation-phase?u=76281980&t=116)** So you aren't just checking one thing like if you've been detecting machine failures.
>
> **[2:03](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/a-b-testing-during-the-evaluation-phase?u=76281980&t=123)** You want a thorough assessment of several metrics like conversion rate of leads, number of minutes the machines were down.
>
> **[2:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/a-b-testing-during-the-evaluation-phase?u=76281980&t=133)** This again is in perfect alignment between what you need and what statistics can offer.
>
> **[2:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/a-b-testing-during-the-evaluation-phase?u=76281980&t=140)** And it's a much, much more thorough assessment of model performance.
>
> **[2:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/a-b-testing-during-the-evaluation-phase?u=76281980&t=146)** then just train test validation that you were doing back in the modeling phase.
>
> **[2:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/a-b-testing-during-the-evaluation-phase?u=76281980&t=152)** You do that back in the modeling phase because it's scalable to lots of models, but when you get to the evaluation phase, this is the analysis that really counts.

> [!info]- Semantic Content
>
> **Definitions:** is a  (1), in other words (1)
> **Env Vars:** crisp (1)
> **Best Practices:** you should always (1)
> **Speakers:** - [instructor] (1)


### 7. The Two Cultures: Contrasting Statistics and Data Mining

#### The Two Cultures
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/the-two-cultures?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/the-two-cultures?u=76281980&t=0)** - [Instructor] Leo Breiman was one of the most important machine learning theorists of the last 50 years.
>
> **[0:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/the-two-cultures?u=76281980&t=6)** He and his co-authors developed the CART algorithm, which is still in use today, but he also contributed to the concepts of bagging and boosting, as well as the random forest algorithm.
>
> **[0:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/the-two-cultures?u=76281980&t=18)** In 2001, he wrote "The Two Cultures," which I have read and reread many times over the years.
>
> **[0:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/the-two-cultures?u=76281980&t=26)** The two cultures of the title are the statistics community and the machine learning community.
>
> **[0:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/the-two-cultures?u=76281980&t=32)** He has a powerful, yet somewhat contentious written exchange with some very influential statisticians.
>
> **[0:40](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/the-two-cultures?u=76281980&t=40)** First, he writes a white paper, then they respond, and then he has one more response after that.
>
> **[0:47](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/the-two-cultures?u=76281980&t=47)** I urge you to check it out.
>
> **[0:49](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/the-two-cultures?u=76281980&t=49)** Reading a 20 year old paper might seem like a bit of nostalgia or just historical context, but it's more than that.
>
> **[0:58](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/the-two-cultures?u=76281980&t=58)** Data science is a combination of two quite disparate fields, which until recently, were separate.
>
> **[1:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/the-two-cultures?u=76281980&t=65)** And historically, they haven't appreciated or understood each other very well.
>
> **[1:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/the-two-cultures?u=76281980&t=70)** Now, a bit of an extended quote where Breiman explains the five key ways he was different from his statistics colleagues.
>
> **[1:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/the-two-cultures?u=76281980&t=79)** He was a consultant for part of his career, but he was also in the statistics department at Berkeley.
>
> **[1:25](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/the-two-cultures?u=76281980&t=85)** He writes, "As I left consulting to go back to the university, these were the perceptions I had about working with data to find answers to problems.
>
> **[1:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/the-two-cultures?u=76281980&t=97)** Focus on finding a good solution, that's what consultants get paid for.
>
> **[1:42](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/the-two-cultures?u=76281980&t=102)** Live with the data before you plunge into modeling.
>
> **[1:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/the-two-cultures?u=76281980&t=105)** Search for a model that gives a good solution, either algorithmic or data.
>
> **[1:51](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/the-two-cultures?u=76281980&t=111)** Predictive accuracy on test sets is the criterion for how good the model is.
>
> **[1:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/the-two-cultures?u=76281980&t=117)** Computers are an indispensable partner."
>
> **[2:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/the-two-cultures?u=76281980&t=120)** He describes himself as being a member of a tribe of just 2% of statisticians that thinks this way.
>
> **[2:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/the-two-cultures?u=76281980&t=129)** And this was written in 2001.
>
> **[2:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/the-two-cultures?u=76281980&t=131)** He and his co-developers invented CART many years prior, in 1984.
>
> **[2:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/the-two-cultures?u=76281980&t=138)** Of course, nothing he said is unusual.
>
> **[2:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/the-two-cultures?u=76281980&t=141)** He's describing data mining very similar to how we would see it described in something like CRISP-DM, the Cross-Industry Standard Process for Data Mining.
>
> **[2:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/the-two-cultures?u=76281980&t=151)** Now let's take a quick look at the rejoinders and replies, as they will underscore just how differently the 2% and the 98% approached problems.
>
> **[2:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/the-two-cultures?u=76281980&t=164)** First, Breiman responding to Sir David Cox's commentary.
>
> **[2:49](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/the-two-cultures?u=76281980&t=169)** Cox had written, "Professor Breiman takes data as his starting point.
>
> **[2:53](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/the-two-cultures?u=76281980&t=173)** I would prefer to start with an issue, a question, or a scientific hypothesis."
>
> **[2:59](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/the-two-cultures?u=76281980&t=179)** Breiman then comes back, "I agree, but I would expand the starting list to include," my underline, "prediction of future events."
>
> **[3:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/the-two-cultures?u=76281980&t=188)** What Breiman is saying is you can have an objective as in predicting, let's say, fraud or churn, and that's different than having hypothesis.
>
> **[3:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/the-two-cultures?u=76281980&t=200)** The exchange goes on.
>
> **[3:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/the-two-cultures?u=76281980&t=202)** Breiman saying, "I have never worked on a project that has started with, 'Here's a lot of data, look at it, and see where we can get some ideas about how to use it.'
>
> **[3:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/the-two-cultures?u=76281980&t=213)** The data has been put together and analyze starting with an objective."
>
> **[3:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/the-two-cultures?u=76281980&t=218)** So, basically, Breiman is accusing Cox of stereotyping him.
>
> **[3:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/the-two-cultures?u=76281980&t=223)** And then, Brad Efron.
>
> **[3:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/the-two-cultures?u=76281980&t=225)** Efron is an extremely influential statistician, and is now a professor emeritus at Stanford.
>
> **[3:52](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/the-two-cultures?u=76281980&t=232)** "At first glance, Leo Breiman's stimulating paper looks like an argument against parsimony and scientific insight," I added the underlines, "and in favor of black boxes with lots of knobs to twiddle.
>
> **[4:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/the-two-cultures?u=76281980&t=247)** At second glance, it still looks that way, but the paper is stimulating and Leo has some important points to hammer home."
>
> **[4:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/the-two-cultures?u=76281980&t=255)** I actually find the whole exchange very humorous.
>
> **[4:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/the-two-cultures?u=76281980&t=258)** I won't get into more detail with the exchange back and forth.
>
> **[4:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/the-two-cultures?u=76281980&t=261)** That's enough to get the idea.
>
> **[4:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/the-two-cultures?u=76281980&t=263)** But remember, these were highly influential contemporaries that just couldn't see eye to eye.
>
> **[4:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/the-two-cultures?u=76281980&t=270)** Is this all just a history lesson or does it shed light on things that are going on right now?
>
> **[4:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/the-two-cultures?u=76281980&t=276)** Of course, I would say that the feud has softened a bit.
>
> **[4:39](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/the-two-cultures?u=76281980&t=279)** Those that think like Breiman describes would now be well over 50%, not just 2%.
>
> **[4:46](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/the-two-cultures?u=76281980&t=286)** But the gap is still there.
>
> **[4:49](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/the-two-cultures?u=76281980&t=289)** And it's not just an academic thing.
>
> **[4:51](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/the-two-cultures?u=76281980&t=291)** It affects how we work together in industry.
>
> **[4:54](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/the-two-cultures?u=76281980&t=294)** Next, we're going to jump forward 20 years to the present and see that these differences are still at work in the day-to-day lives of many researchers and data scientists.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), for. (1), include, (1)
> **Env Vars:** cart (2), crisp (1)
> **CLI Commands:** find (2)
> **Definitions:** is a  (1), is an  (1)
> **Cross-References:** go back to (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### Explain vs. predict
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/explain-vs-predict?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/explain-vs-predict?u=76281980&t=1)** - [Instructor] Galit Shmueli does a remarkable job expanding on the kinds of issues Breiman raises in the "Two Cultures," but I think she's gone beyond that.
>
> **[0:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/explain-vs-predict?u=76281980&t=11)** Not just expanding it by addressing more of the differences, but also modernizing the conversation.
>
> **[0:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/explain-vs-predict?u=76281980&t=19)** She's written a paper, but she has also given keynotes all around the world discussing this important topic.
>
> **[0:27](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/explain-vs-predict?u=76281980&t=27)** Her basic premise is to go out into the world, frankly, almost like an anthropologist would, examining papers that have been submitted to various journals and conferences, and try to better understand and describe how analytics actually occurs in the wild.
>
> **[0:47](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/explain-vs-predict?u=76281980&t=47)** She describes three groups.
>
> **[0:50](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/explain-vs-predict?u=76281980&t=50)** One group is focused on good explanatory power and assumes that if I have a model that explains well, it will predict well too.
>
> **[0:59](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/explain-vs-predict?u=76281980&t=59)** They aren't statisticians exactly as she describes it.
>
> **[1:03](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/explain-vs-predict?u=76281980&t=63)** They are applying statistical ideas, but in areas like the social sciences, business, and industry.
>
> **[1:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/explain-vs-predict?u=76281980&t=71)** So they're applying statistics.
>
> **[1:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/explain-vs-predict?u=76281980&t=73)** Another group is focused on predictive power, and assumes that if you have good prediction, then the model must also have good explanatory power.
>
> **[1:25](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/explain-vs-predict?u=76281980&t=85)** Both of these assumptions are dangerous by the way.
>
> **[1:27](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/explain-vs-predict?u=76281980&t=87)** The second group is, of course, more your data mining and machine learning crowd.
>
> **[1:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/explain-vs-predict?u=76281980&t=93)** Statisticians end up being the third group.
>
> **[1:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/explain-vs-predict?u=76281980&t=97)** She explains this in one of the keynotes.
>
> **[1:39](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/explain-vs-predict?u=76281980&t=99)** They're more like the explain group, but frankly, the explain group doesn't always analyze data quite the way that a statistician might, or might approve of.
>
> **[1:50](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/explain-vs-predict?u=76281980&t=110)** For instance, the explain group tends to try to prove cause with regression.
>
> **[1:56](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/explain-vs-predict?u=76281980&t=116)** I think what is most likely occurring is that not everybody's familiar with causal modeling.
>
> **[2:03](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/explain-vs-predict?u=76281980&t=123)** So, some researchers do the best job they can with the tools they have.
>
> **[2:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/explain-vs-predict?u=76281980&t=129)** She then goes on to explain five key differences.
>
> **[2:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/explain-vs-predict?u=76281980&t=135)** For the explain group, theory is king, hypotheses, much like David Cox was describing in response to Breiman.
>
> **[2:25](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/explain-vs-predict?u=76281980&t=145)** For the predictive group, data is king.
>
> **[2:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/explain-vs-predict?u=76281980&t=149)** For the explain group, their goal is to explain causation.
>
> **[2:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/explain-vs-predict?u=76281980&t=153)** Now again, they may not be using causal models, but that's what they're attempting to do.
>
> **[2:39](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/explain-vs-predict?u=76281980&t=159)** They're attempting to explain causation.
>
> **[2:40](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/explain-vs-predict?u=76281980&t=160)** For the predict group, often correlation or mere association is sufficient.
>
> **[2:47](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/explain-vs-predict?u=76281980&t=167)** If you are trying to figure out what someone is going to watch next on Netflix, you might not need a causal model.
>
> **[2:53](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/explain-vs-predict?u=76281980&t=173)** Correlation might be enough.
>
> **[2:56](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/explain-vs-predict?u=76281980&t=176)** For the explain group, they tend to be retrospective.
>
> **[3:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/explain-vs-predict?u=76281980&t=181)** The predict group has to be prospective.
>
> **[3:04](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/explain-vs-predict?u=76281980&t=184)** If not, they're not doing the job.
>
> **[3:06](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/explain-vs-predict?u=76281980&t=186)** They're trying to make future micro decisions.
>
> **[3:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/explain-vs-predict?u=76281980&t=190)** The explain group is mostly focused on bias.
>
> **[3:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/explain-vs-predict?u=76281980&t=196)** You may be familiar with the bias variance trade off.
>
> **[3:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/explain-vs-predict?u=76281980&t=198)** That's what she's referring to here.
>
> **[3:20](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/explain-vs-predict?u=76281980&t=200)** Bias is accuracy.
>
> **[3:22](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/explain-vs-predict?u=76281980&t=202)** For the explain group, that's the focus, the accuracy, but for the predict group, bias isn't enough.
>
> **[3:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/explain-vs-predict?u=76281980&t=208)** They also have to worry about variance because variance gives you an idea of how well your data will generalize to future situations, and if you're predicting, that's really important.
>
> **[3:39](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/explain-vs-predict?u=76281980&t=219)** The next one I think is really key.
>
> **[3:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/explain-vs-predict?u=76281980&t=223)** The explain group is focused on the average case.
>
> **[3:47](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/explain-vs-predict?u=76281980&t=227)** What's happening overall?
>
> **[3:49](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/explain-vs-predict?u=76281980&t=229)** Where is that regression line?
>
> **[3:51](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/explain-vs-predict?u=76281980&t=231)** Where is that trend line?
>
> **[3:53](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/explain-vs-predict?u=76281980&t=233)** The predict group is focused on the individual case.
>
> **[3:58](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/explain-vs-predict?u=76281980&t=238)** The risk score, the propensity score, is this individual insurance claim likely showing signs of fraud.
>
> **[4:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/explain-vs-predict?u=76281980&t=247)** I think the reason that her research and speaking is so powerful is that as this list makes clear, you can't optimize for both at the same time.
>
> **[4:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/explain-vs-predict?u=76281980&t=257)** You will make different choices during model development and model selection based on these priorities.
>
> **[4:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/explain-vs-predict?u=76281980&t=266)** So, and this is the key point.
>
> **[4:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/explain-vs-predict?u=76281980&t=268)** If you are focused on explain, you won't get good prediction as some kind of a bonus, and if you are focused on prediction, you won't get good explanation as a bonus.
>
> **[4:39](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/explain-vs-predict?u=76281980&t=279)** Now, again, we don't mean something like explainable AI.
>
> **[4:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/explain-vs-predict?u=76281980&t=283)** We mean explanation the way the explain folks would describe it or want to perform it.
>
> **[4:50](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/explain-vs-predict?u=76281980&t=290)** So you have to be clear on your objectives, and you must have good communication with your colleagues and your management to ensure that your priorities are consistent with theirs.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Code Keywords:** case. (2)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### Comparing CRISP-DM and the scientific method
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/comparing-crisp-dm-and-the-scientific-method?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/comparing-crisp-dm-and-the-scientific-method?u=76281980&t=0)** - [Instructor] I had a powerful experience a few years ago.
>
> **[0:03](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/comparing-crisp-dm-and-the-scientific-method?u=76281980&t=3)** I asked a university group I was teaching online to comment in the discussion forum about the similarities that they might see between CRISP-DM and the scientific method.
>
> **[0:15](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/comparing-crisp-dm-and-the-scientific-method?u=76281980&t=15)** I was expecting that everyone would see that they're really quite different, but the vast majority of the a group was certain that the two, CRISP-DM and the scientific method, were the same.
>
> **[0:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/comparing-crisp-dm-and-the-scientific-method?u=76281980&t=26)** I was a bit shocked, but I was outvoted so utterly that it shook my confidence even though I was the one leading the discussion.
>
> **[0:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/comparing-crisp-dm-and-the-scientific-method?u=76281980&t=33)** I reached out to two of the original authors of CRISP-DM that I know.
>
> **[0:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/comparing-crisp-dm-and-the-scientific-method?u=76281980&t=38)** It's worth mentioning that there's no equivalent resource for the scientific method and there's no official version of it but most versions are pretty similar.
>
> **[0:48](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/comparing-crisp-dm-and-the-scientific-method?u=76281980&t=48)** So I emailed Tom Khabaza and Colin Shearer and was very curious to get their feedback.
>
> **[0:54](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/comparing-crisp-dm-and-the-scientific-method?u=76281980&t=54)** Here's what Tom had to say.
>
> **[0:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/comparing-crisp-dm-and-the-scientific-method?u=76281980&t=57)** He explained that, you know, they really hadn't talked about this issue when they were developing CRISP-DM, but he could see some parallels.
>
> **[1:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/comparing-crisp-dm-and-the-scientific-method?u=76281980&t=65)** Here's the first one he mentioned.
>
> **[1:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/comparing-crisp-dm-and-the-scientific-method?u=76281980&t=67)** "Data mining, like all analytics, is about looking for evidence on which to base decisions.
>
> **[1:13](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/comparing-crisp-dm-and-the-scientific-method?u=76281980&t=73)** Science is also about looking for evidence."
>
> **[1:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/comparing-crisp-dm-and-the-scientific-method?u=76281980&t=76)** Here's his second one.
>
> **[1:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/comparing-crisp-dm-and-the-scientific-method?u=76281980&t=77)** "CRISP-DM is iterative, like science: you come up with a model or hypothesis, then you test it, then you refine it, then repeat."
>
> **[1:26](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/comparing-crisp-dm-and-the-scientific-method?u=76281980&t=86)** But where I was struggling with all of this is that some of the students were insistent that business understanding was like asking a question or posing a hypothesis.
>
> **[1:37](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/comparing-crisp-dm-and-the-scientific-method?u=76281980&t=97)** And I've seen similar arguments made online.
>
> **[1:41](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/comparing-crisp-dm-and-the-scientific-method?u=76281980&t=101)** I was very uncomfortable with this.
>
> **[1:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/comparing-crisp-dm-and-the-scientific-method?u=76281980&t=104)** So I asked Tom and Colin explicitly, "Could this be true?
>
> **[1:48](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/comparing-crisp-dm-and-the-scientific-method?u=76281980&t=108)** Could business understanding be analogous to posing a hypothesis?"
>
> **[1:52](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/comparing-crisp-dm-and-the-scientific-method?u=76281980&t=112)** It would seem to be contrary to many of the things we've discussed so far, like the difference between induction and deduction and how they align with data mining and statistics.
>
> **[2:03](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/comparing-crisp-dm-and-the-scientific-method?u=76281980&t=123)** Here was Collins's response.
>
> **[2:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/comparing-crisp-dm-and-the-scientific-method?u=76281980&t=125)** "Business understanding is understanding the problem space and eventual success criteria at the business level; it's not about formulating hypotheses."
>
> **[2:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/comparing-crisp-dm-and-the-scientific-method?u=76281980&t=136)** Now what Colin is referring to here is that business understanding is understanding the problem space and the success criteria that you identify at the beginning is what you then use during the evaluation phase.
>
> **[2:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/comparing-crisp-dm-and-the-scientific-method?u=76281980&t=150)** We had a bit more of an exchange and Tom agreed that business understanding was definitely not making a hypothesis.
>
> **[2:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/comparing-crisp-dm-and-the-scientific-method?u=76281980&t=158)** He then helped me develop an insight.
>
> **[2:41](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/comparing-crisp-dm-and-the-scientific-method?u=76281980&t=161)** We can think of a model, the whole thing now, not just the model but how it's used, as a kind of hypothesis.
>
> **[2:49](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/comparing-crisp-dm-and-the-scientific-method?u=76281980&t=169)** The danger is thinking that the model is an answer to a question.
>
> **[2:54](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/comparing-crisp-dm-and-the-scientific-method?u=76281980&t=174)** Or perhaps you could say the danger is thinking that the model is nothing but an answer to a question.
>
> **[3:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/comparing-crisp-dm-and-the-scientific-method?u=76281980&t=180)** That's where people try to do what I call insight projects, where they're really focused on some business question, not on deploying a model.
>
> **[3:11](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/comparing-crisp-dm-and-the-scientific-method?u=76281980&t=191)** It's potentially a mismatch of the tool of choice and what your intentions are.
>
> **[3:17](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/comparing-crisp-dm-and-the-scientific-method?u=76281980&t=197)** So it better to think of data mining as building a prediction machine with which you can make micro decisions.
>
> **[3:27](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/comparing-crisp-dm-and-the-scientific-method?u=76281980&t=207)** So at the risk of pushing the analogy to its limits, you then proceed to test the whole thing, not just the model, but the adoption of the model as an organization.
>
> **[3:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/comparing-crisp-dm-and-the-scientific-method?u=76281980&t=218)** Will it or will it not bring us value?
>
> **[3:42](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/comparing-crisp-dm-and-the-scientific-method?u=76281980&t=222)** Will it work as intended?
>
> **[3:44](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/comparing-crisp-dm-and-the-scientific-method?u=76281980&t=224)** So the evaluation phase can be thought of as a type of experiment, especially if you're doing things formally like an AB test.
>
> **[3:53](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/comparing-crisp-dm-and-the-scientific-method?u=76281980&t=233)** This is not just semantics.
>
> **[3:55](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/comparing-crisp-dm-and-the-scientific-method?u=76281980&t=235)** It's not just an academic exercise.
>
> **[3:58](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/comparing-crisp-dm-and-the-scientific-method?u=76281980&t=238)** To do statistics properly, you must have a hypothesis at the start or certainly very early in the process typically before you even collect data.
>
> **[4:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/comparing-crisp-dm-and-the-scientific-method?u=76281980&t=248)** Now, of course I know there are exceptions but typically your hypothesis is before you collect data and data mining the data was already there when you started.
>
> **[4:18](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/comparing-crisp-dm-and-the-scientific-method?u=76281980&t=258)** And then when you finish modeling, you're 85% done.
>
> **[4:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/comparing-crisp-dm-and-the-scientific-method?u=76281980&t=263)** So they are really very nearly the opposite of each other.
>
> **[4:29](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/comparing-crisp-dm-and-the-scientific-method?u=76281980&t=269)** Confirming hypotheses on the one hand and generating hypotheses on the other.

> [!info]- Semantic Content
>
> **Env Vars:** crisp (5)
> **CLI Commands:** make (1)
> **Code Keywords:** this. (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### Applying the two methods at work
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/applying-the-two-methods-at-work?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/applying-the-two-methods-at-work?u=76281980&t=0)** - [Instructor] We've already considered a lot of ground.
>
> **[0:02](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/applying-the-two-methods-at-work?u=76281980&t=2)** And it may seem like there are so many tools in the toolkit and so many considerations that there are too many decisions to make.
>
> **[0:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/applying-the-two-methods-at-work?u=76281980&t=10)** That would be an understandable reaction.
>
> **[0:14](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/applying-the-two-methods-at-work?u=76281980&t=14)** But I think there are just two main mistakes that you want to avoid.
>
> **[0:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/applying-the-two-methods-at-work?u=76281980&t=19)** First, we've all heard the truism that when you've mastered or favored just one tool, you might be tempted to solve everything with that tool.
>
> **[0:30](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/applying-the-two-methods-at-work?u=76281980&t=30)** For some, that might be regression.
>
> **[0:32](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/applying-the-two-methods-at-work?u=76281980&t=32)** And for others, that might be a particular black box technique.
>
> **[0:36](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/applying-the-two-methods-at-work?u=76281980&t=36)** And for others, it might be something like AutoML.
>
> **[0:41](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/applying-the-two-methods-at-work?u=76281980&t=41)** All powerful tools, but none of them fit all situations.
>
> **[0:47](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/applying-the-two-methods-at-work?u=76281980&t=47)** The second mistake to avoid is to dabble in dozens of techniques or algorithms, yet treat them as if they're all basically the same.
>
> **[0:55](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/applying-the-two-methods-at-work?u=76281980&t=55)** This might seem objective and neutral, but fundamentally it's to say that there's no real difference between any of these approaches, so I'll just try all of them and whatever has the highest predictive accuracy will win.
>
> **[1:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/applying-the-two-methods-at-work?u=76281980&t=67)** Performing this kind of experiment has its place.
>
> **[1:10](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/applying-the-two-methods-at-work?u=76281980&t=70)** For instance, you might run a CART decision tree and a C5.0 decision tree.
>
> **[1:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/applying-the-two-methods-at-work?u=76281980&t=76)** And in that context, this kind of process makes sense.
>
> **[1:19](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/applying-the-two-methods-at-work?u=76281980&t=79)** So when I'm wearing my data mining hat, I perform this kind of tournament of algorithms all the time.
>
> **[1:25](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/applying-the-two-methods-at-work?u=76281980&t=85)** But what I'm referring to here is if we mix and match elements of machine learning with elements of statistics.
>
> **[1:33](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/applying-the-two-methods-at-work?u=76281980&t=93)** And we've also seen that these approaches apply to different phases of the life cycle.
>
> **[1:40](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/applying-the-two-methods-at-work?u=76281980&t=100)** That's something to keep in mind as well.
>
> **[1:43](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/applying-the-two-methods-at-work?u=76281980&t=103)** So where does this leave us?
>
> **[1:45](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/applying-the-two-methods-at-work?u=76281980&t=105)** If you or your boss has a specific question like, "Did the marketing campaigns "on two different social media platforms "perform equally well?"
>
> **[1:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/applying-the-two-methods-at-work?u=76281980&t=117)** Or "Was the dip in satisfaction last month unusual "and possibly indicative of something "or maybe, on the other hand, nothing to about?"
>
> **[2:07](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/applying-the-two-methods-at-work?u=76281980&t=127)** Note that these questions are fundamentally yes or no questions, and they're asked of overall trends across the whole data set.
>
> **[2:16](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/applying-the-two-methods-at-work?u=76281980&t=136)** These are absolutely statistics type questions.
>
> **[2:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/applying-the-two-methods-at-work?u=76281980&t=141)** If, on the other hand, management wants to send out a phone upgrade discount to customers that might be a potential loyalty risk to encourage them to stick around for a while, or you want to know which mortgage loan customers will avoid default if they participate in a loan modification.
>
> **[2:42](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/applying-the-two-methods-at-work?u=76281980&t=162)** These questions are absolutely data mining questions.
>
> **[2:47](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/applying-the-two-methods-at-work?u=76281980&t=167)** Note that if your trying to automate or at least inform microdecisions, those little decisions made about individual customers or individual loans, you're in data mining territory.
>
> **[3:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/applying-the-two-methods-at-work?u=76281980&t=180)** Also, we know that if you are starting with a hypothesis that you're trying to prove or disprove, that signals statistics.
>
> **[3:09](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/applying-the-two-methods-at-work?u=76281980&t=189)** If you're exploring your data to find a pattern that you're going to use to make future predictions, but at the beginning, you have no idea what pattern might be, that signals data mining.
>
> **[3:23](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/applying-the-two-methods-at-work?u=76281980&t=203)** As we've seen, life cycle comes into play as well.
>
> **[3:27](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/applying-the-two-methods-at-work?u=76281980&t=207)** When you're beginning a data mining project, you don't have a hypothesis.
>
> **[3:31](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/applying-the-two-methods-at-work?u=76281980&t=211)** But once your model is built, that model is a distillation of the patterns that you found.
>
> **[3:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/applying-the-two-methods-at-work?u=76281980&t=218)** So during the evaluation phase, you are effectively transitioning to a situation where you have a prototype that you can test with A/B testing and statistics.
>
> **[3:50](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/applying-the-two-methods-at-work?u=76281980&t=230)** And that can help you show whether or not you've succeeded.
>
> **[3:54](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/applying-the-two-methods-at-work?u=76281980&t=234)** So there's a lot to consider, but there are just a handful of basic principles.
>
> **[4:01](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/applying-the-two-methods-at-work?u=76281980&t=241)** Once you get used to the idea that these are different approaches with different histories and different techniques, you'll be just fine.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2), find (1)
> **Warnings:** note that (2), keep in mind (1)
> **Code Keywords:** if, (1), while, (1)
> **Env Vars:** cart (1)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)


### Conclusion

#### Review
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/review?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/review?u=76281980&t=0)** - [Keith] Okay, our journey has explored a number of different topics.
>
> **[0:05](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/review?u=76281980&t=5)** What would be a good next step?
>
> **[0:08](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/review?u=76281980&t=8)** If you want to explore the topics further and you could use a statistics review, Eddie Davila has several statistics courses in the library, some starting with the very basics.
>
> **[0:21](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/review?u=76281980&t=21)** Also, I have a full treatment of multiple linear regression right here in the library.
>
> **[0:28](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/review?u=76281980&t=28)** If you know your stats, but are new to machine learning, my course Predictive Analytics Essential Training Data Mining might be just what you're looking for.
>
> **[0:38](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/review?u=76281980&t=38)** When you're ready for more advanced material, read Pearl's "The Book of Y" and explore advanced techniques like structural equation modeling and Bayesian networks, which he discusses in the book.
>
> **[0:52](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/review?u=76281980&t=52)** Whichever path you choose, you'll have lots of adventures ahead.
>
> **[0:57](https://www.linkedin.com/learning/machine-learning-and-ai-foundations-prediction-causation-and-statistical-inference/review?u=76281980&t=57)** Please follow me on LinkedIn, utilize the Q and A feature of the course, and share your discoveries.

> [!info]- Semantic Content
>
> **Code Keywords:** for. (1)
> **Speakers:** - [keith] (1)


## Path Context

### In [[Advance Your Skills as a Machine Learning Specialist]]
← [[Machine Learning and AI Foundations- Causal Inference and Modeling]] | **8 of 9** | [[Deep Learning- Model Optimization and Tuning (2022)]] →

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