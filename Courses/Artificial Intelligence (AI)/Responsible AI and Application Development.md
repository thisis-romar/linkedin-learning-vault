---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: responsible-ai-and-application-development
url: "https://www.linkedin.com/learning/responsible-ai-and-application-development"
duration_minutes: 97
duration: 1h 37m
level: Intermediate
updated: 3/25/2025
learners: 4066
skills:
  - Responsible AI
  - AI Software Development
  - Artificial Intelligence (AI)
exercise_files: true
github: "https://github.com/LinkedInLearning/responsible-ai-and-application-development-3979037/codespaces"
thumbnail: "https://media.licdn.com/dms/image/v2/D4D0DAQH8YXrRGvmTgg/learning-public-crop_675_1200/B4DZWRytTjGcAY-/0/1741907744735?e=2147483647&amp;v=beta&amp;t=MLoGdonkd05PP_KUL2FdMuAVHLr6N_p15mXkQKULhZA"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - Building AI Products- Implementing Responsible AI Professional Certificate by LinkedIn Learning
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - topic/security
  - topic/data-science
  - topic/software-development
  - skill/responsible-ai
  - skill/ai-software-development
  - skill/artificial-intelligence-ai
status: not-started
created: 2026-04-19
---

![Responsible AI and Application Development](https://media.licdn.com/dms/image/v2/D4D0DAQH8YXrRGvmTgg/learning-public-crop_675_1200/B4DZWRytTjGcAY-/0/1741907744735?e=2147483647&amp;v=beta&amp;t=MLoGdonkd05PP_KUL2FdMuAVHLr6N_p15mXkQKULhZA)

# Responsible AI and Application Development

> In this course, award-winning AI researcher Laurence Moroney guides you through how to ensure responsible and ethical AI development. Learn how to collect and preprocess data in ways that maintain privacy and reduce biases. Discover advanced techniques in data augmentation that enhance your datasets while safeguarding against introducing unfairness. Dive into optimizing neural network architecture

> [LinkedIn Learning](https://www.linkedin.com/learning/responsible-ai-and-application-development) | 1h 37m | Intermediate | 4K learners
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Laurence Moroney]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/responsible-ai-and-application-development-3979037/codespaces)

## Skills Covered

- Responsible AI
- AI Software Development
- Artificial Intelligence (AI)

## Table of Contents

### Introduction

#### Responsible AI and application development
> [LinkedIn Learning](https://www.linkedin.com/learning/responsible-ai-and-application-development/responsible-ai-and-application-development?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/responsible-ai-and-application-development/responsible-ai-and-application-development?u=76281980&t=0)** - Responsible AI.
>
> **[0:02](https://www.linkedin.com/learning/responsible-ai-and-application-development/responsible-ai-and-application-development?u=76281980&t=2)** We hear about it everywhere, and we talk about it a lot, but when it comes time to put those words into action, well, what can you do?
>
> **[0:09](https://www.linkedin.com/learning/responsible-ai-and-application-development/responsible-ai-and-application-development?u=76281980&t=9)** I'm Laurence Moroney, and I've been working in the AI field for as many decades as there are Rs in strawberry, and I've put together this course to help you see how end to end, there are places that you can think about where the great power of AI can fail if you don't build it with great responsibility.
>
> **[0:28](https://www.linkedin.com/learning/responsible-ai-and-application-development/responsible-ai-and-application-development?u=76281980&t=28)** Hint, it's more than just data.
>
> **[0:30](https://www.linkedin.com/learning/responsible-ai-and-application-development/responsible-ai-and-application-development?u=76281980&t=30)** We're going to go through the entire machine learning pipeline, exploring tools that are available to you to understand your ML system, and we'll get hands-on in exploring the fine nuances, because if you do it wrong, it can paint you into the unwanted corner of undesired responsibility issues, so let's do it right, and let's dive in.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2)
> **Speakers:** - responsible (1)


### 1. Designing Responsible AI

#### Responsible design
> [LinkedIn Learning](https://www.linkedin.com/learning/responsible-ai-and-application-development/responsible-design?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/responsible-ai-and-application-development/responsible-design?u=76281980&t=1)** - Responsible AI and avoiding harm generally makes the imagination leap to science fiction stories like "The Matrix" or "Terminator" and self-aware machines judging us to our detriment.
>
> **[0:12](https://www.linkedin.com/learning/responsible-ai-and-application-development/responsible-design?u=76281980&t=12)** "I'm sorry, Dave, I can't do that."
>
> **[0:15](https://www.linkedin.com/learning/responsible-ai-and-application-development/responsible-design?u=76281980&t=15)** But poorly designed systems including, and especially ones that use artificial intelligence, can be harmful in a multitude of ways.
>
> **[0:23](https://www.linkedin.com/learning/responsible-ai-and-application-development/responsible-design?u=76281980&t=23)** That while less dramatic, they are still wrong and they are negatively impactful to people.
>
> **[0:29](https://www.linkedin.com/learning/responsible-ai-and-application-development/responsible-design?u=76281980&t=29)** For example, let me tell you a story about my friend Elizabeth.
>
> **[0:33](https://www.linkedin.com/learning/responsible-ai-and-application-development/responsible-design?u=76281980&t=33)** One day. She was browsing a website for a conference that she was speaking at.
>
> **[0:37](https://www.linkedin.com/learning/responsible-ai-and-application-development/responsible-design?u=76281980&t=37)** She's a talented designer who works tirelessly to simplify Web3 UX and AI design.
>
> **[0:43](https://www.linkedin.com/learning/responsible-ai-and-application-development/responsible-design?u=76281980&t=43)** And like me, she's a graduate of Google Maps.
>
> **[0:46](https://www.linkedin.com/learning/responsible-ai-and-application-development/responsible-design?u=76281980&t=46)** Anyway, a picture of her on this website was wrong.
>
> **[0:49](https://www.linkedin.com/learning/responsible-ai-and-application-development/responsible-design?u=76281980&t=49)** It had her blouse unbuttoned a little more than she was comfortable with, and it was showing a hint of underwear underneath.
>
> **[0:56](https://www.linkedin.com/learning/responsible-ai-and-application-development/responsible-design?u=76281980&t=56)** What happened?
>
> **[0:57](https://www.linkedin.com/learning/responsible-ai-and-application-development/responsible-design?u=76281980&t=57)** Well, long story short, she sent in a square picture of herself, but the website needed a vertical portrait, so it used an upscaling app to fill in the difference.
>
> **[1:07](https://www.linkedin.com/learning/responsible-ai-and-application-development/responsible-design?u=76281980&t=67)** And this app, it didn't just stretch out the pixels, it used generative AI to create more new pixels.
>
> **[1:14](https://www.linkedin.com/learning/responsible-ai-and-application-development/responsible-design?u=76281980&t=74)** Now, that seems harmless, right?
>
> **[1:16](https://www.linkedin.com/learning/responsible-ai-and-application-development/responsible-design?u=76281980&t=76)** But the generative AI reimagined her shirt to make it more revealing than she was comfortable with.
>
> **[1:23](https://www.linkedin.com/learning/responsible-ai-and-application-development/responsible-design?u=76281980&t=83)** The training data for the generative AI likely had more sexualized images of the women, and that led to this result.
>
> **[1:31](https://www.linkedin.com/learning/responsible-ai-and-application-development/responsible-design?u=76281980&t=91)** And if you don't believe me, I asked a popular generative model to create images of women, and I got images like this, this, this, and this.
>
> **[1:41](https://www.linkedin.com/learning/responsible-ai-and-application-development/responsible-design?u=76281980&t=101)** But when I asked it for men, I noticed that they all had a lot more clothes on.
>
> **[1:45](https://www.linkedin.com/learning/responsible-ai-and-application-development/responsible-design?u=76281980&t=105)** Oh, and for some reason, they all had facial hair.
>
> **[1:48](https://www.linkedin.com/learning/responsible-ai-and-application-development/responsible-design?u=76281980&t=108)** I guess that means I'm not a man.
>
> **[1:50](https://www.linkedin.com/learning/responsible-ai-and-application-development/responsible-design?u=76281980&t=110)** So while it's not Cylons ambushing peace talks, or Hal saying, "I'm sorry, Dave, I can't do that," the principle is the same.
>
> **[1:58](https://www.linkedin.com/learning/responsible-ai-and-application-development/responsible-design?u=76281980&t=118)** It's AI not being thoughtfully trained or used.
>
> **[2:03](https://www.linkedin.com/learning/responsible-ai-and-application-development/responsible-design?u=76281980&t=123)** So let's not do that.
>
> **[2:04](https://www.linkedin.com/learning/responsible-ai-and-application-development/responsible-design?u=76281980&t=124)** And here's the good news.
>
> **[2:06](https://www.linkedin.com/learning/responsible-ai-and-application-development/responsible-design?u=76281980&t=126)** Many of these types of issues can be prevented through careful, thoughtful development end-to-end.
>
> **[2:12](https://www.linkedin.com/learning/responsible-ai-and-application-development/responsible-design?u=76281980&t=132)** And in this course, I'm going to take you on a journey through the entire machine learning lifecycle, showing you how to build systems responsibly from the ground up.
>
> **[2:21](https://www.linkedin.com/learning/responsible-ai-and-application-development/responsible-design?u=76281980&t=141)** In the next video, I'll show you the pipeline that I like to follow when training and using a model.
>
> **[2:26](https://www.linkedin.com/learning/responsible-ai-and-application-development/responsible-design?u=76281980&t=146)** We'll use that as the basis for how we can think about responsibility at every step of the way.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (3), let (2), self (1), this. (1)
> **Analogies:** picture (2), for example (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Speakers:** - responsible (1)

#### Being responsible end to end
> [LinkedIn Learning](https://www.linkedin.com/learning/responsible-ai-and-application-development/being-responsible-end-to-end?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/responsible-ai-and-application-development/being-responsible-end-to-end?u=76281980&t=1)** - Artificially intelligent applications are usually built around models, which in turn are created by training them on labeled data.
>
> **[0:09](https://www.linkedin.com/learning/responsible-ai-and-application-development/being-responsible-end-to-end?u=76281980&t=9)** Often, we think about being responsible simply means having clean data like the example of the photo upscaler that I mentioned earlier on.
>
> **[0:18](https://www.linkedin.com/learning/responsible-ai-and-application-development/being-responsible-end-to-end?u=76281980&t=18)** It's easy to think that more images of closed shirts would fix the problem, but that's a naive solution.
>
> **[0:24](https://www.linkedin.com/learning/responsible-ai-and-application-development/being-responsible-end-to-end?u=76281980&t=24)** Problems like this can arise at any step in the pipeline of creating an artificially intelligent application.
>
> **[0:31](https://www.linkedin.com/learning/responsible-ai-and-application-development/being-responsible-end-to-end?u=76281980&t=31)** So in this course, I'm going to explore tools and techniques to help you avoid responsibility pitfalls along the journey of creating a model.
>
> **[0:39](https://www.linkedin.com/learning/responsible-ai-and-application-development/being-responsible-end-to-end?u=76281980&t=39)** The first process is acquiring data.
>
> **[0:42](https://www.linkedin.com/learning/responsible-ai-and-application-development/being-responsible-end-to-end?u=76281980&t=42)** We'll look at this and we'll look at how you can do it in a way that's always responsible.
>
> **[0:47](https://www.linkedin.com/learning/responsible-ai-and-application-development/being-responsible-end-to-end?u=76281980&t=47)** Then we'll look at the important task of pre-processing data, and here's where you turn those raw piles of information that you have into something that's structured that your model can learn from, and it's really easy to inadvertently go wrong here.
>
> **[1:02](https://www.linkedin.com/learning/responsible-ai-and-application-development/being-responsible-end-to-end?u=76281980&t=62)** After that is one of my favorite parts of machine learning, data augmentation, which allows you to artificially extend limited data, but in so doing, you might make mistakes that are impactful in a bad way.
>
> **[1:15](https://www.linkedin.com/learning/responsible-ai-and-application-development/being-responsible-end-to-end?u=76281980&t=75)** And we're going to go through some ideas about how not to do that.
>
> **[1:19](https://www.linkedin.com/learning/responsible-ai-and-application-development/being-responsible-end-to-end?u=76281980&t=79)** Next up, of course, is the model architecture.
>
> **[1:22](https://www.linkedin.com/learning/responsible-ai-and-application-development/being-responsible-end-to-end?u=76281980&t=82)** Now, you might think there's no problems here, but every step in the process is important.
>
> **[1:27](https://www.linkedin.com/learning/responsible-ai-and-application-development/being-responsible-end-to-end?u=76281980&t=87)** And when there are multiple ways to design a model and multiple techniques, it's good to be aware of the ups and downs with each.
>
> **[1:36](https://www.linkedin.com/learning/responsible-ai-and-application-development/being-responsible-end-to-end?u=76281980&t=96)** Transfer learning is very powerful and one of the best ways that you can get models quickly, particularly if you don't have a lot of your own data, but when you do it, as well as inheriting the good, you could also be inheriting the bad, such as built-in biases.
>
> **[1:53](https://www.linkedin.com/learning/responsible-ai-and-application-development/being-responsible-end-to-end?u=76281980&t=113)** Fine-tuning can be done in many ways beyond transfer learning, and we'll explore the techniques used in LLMs particularly such as soft prompt tuning, LoRA and PEFT, parameter efficient fine-tuning.
>
> **[2:07](https://www.linkedin.com/learning/responsible-ai-and-application-development/being-responsible-end-to-end?u=76281980&t=127)** Again, we'll do this while being mindful of areas where we can go wrong from a responsibility perspective.
>
> **[2:13](https://www.linkedin.com/learning/responsible-ai-and-application-development/being-responsible-end-to-end?u=76281980&t=133)** Jigyasa will be spending a lot of time on this in the next course after mine, so be sure to tune in for that.
>
> **[2:20](https://www.linkedin.com/learning/responsible-ai-and-application-development/being-responsible-end-to-end?u=76281980&t=140)** Model training is the next step, and again, it's really easy to overlook this.
>
> **[2:25](https://www.linkedin.com/learning/responsible-ai-and-application-development/being-responsible-end-to-end?u=76281980&t=145)** Often, we just look at the percentages of accuracy or the curve of loss, but what if the model does better for one set of data than it does for another, again, introducing potential biases?
>
> **[2:37](https://www.linkedin.com/learning/responsible-ai-and-application-development/being-responsible-end-to-end?u=76281980&t=157)** Wouldn't it be great that if we could capture that while we were training and not wait until afterwards?
>
> **[2:43](https://www.linkedin.com/learning/responsible-ai-and-application-development/being-responsible-end-to-end?u=76281980&t=163)** And of course, a model is no good without getting it into people's hands, but what happens then?
>
> **[2:48](https://www.linkedin.com/learning/responsible-ai-and-application-development/being-responsible-end-to-end?u=76281980&t=168)** For example, models that process images, particularly on mobile devices, may they work differently based on the camera or other sensors that the mobile devices have that you didn't specifically test for?
>
> **[3:00](https://www.linkedin.com/learning/responsible-ai-and-application-development/being-responsible-end-to-end?u=76281980&t=180)** Not every device is equal, and it would be naive to think that the model would be, too.
>
> **[3:05](https://www.linkedin.com/learning/responsible-ai-and-application-development/being-responsible-end-to-end?u=76281980&t=185)** The next step is usually ops, where you continually update and improve your model with a similar pipeline.
>
> **[3:11](https://www.linkedin.com/learning/responsible-ai-and-application-development/being-responsible-end-to-end?u=76281980&t=191)** I'm not going to go into all of that in detail, but later in this series, Kumaran will do a deep dive on Gen AI Ops.
>
> **[3:18](https://www.linkedin.com/learning/responsible-ai-and-application-development/being-responsible-end-to-end?u=76281980&t=198)** Okay, now we know where we're going to go.
>
> **[3:21](https://www.linkedin.com/learning/responsible-ai-and-application-development/being-responsible-end-to-end?u=76281980&t=201)** So let's get started and let's get exploring areas where we can be responsible with the acquisition of data.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), from, (1), this. (1)
> **Analogies:** such as (2), for example (1)
> **Cross-References:** in the next (1), later in (1)
> **CLI Commands:** make (1)
> **Env Vars:** peft (1)
> **Warnings:** be aware (1)
> **Speakers:** - artificially (1)


### 2. Acquiring Data

#### Ethical data collection
> [LinkedIn Learning](https://www.linkedin.com/learning/responsible-ai-and-application-development/ethical-data-collection?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/responsible-ai-and-application-development/ethical-data-collection?u=76281980&t=1)** - Let's start our journey into data acquisition with one of the most fundamental but often overlooked aspects, and that's ethical data collection.
>
> **[0:09](https://www.linkedin.com/learning/responsible-ai-and-application-development/ethical-data-collection?u=76281980&t=9)** Decisions that you make at this stage can have far-reaching implications.
>
> **[0:14](https://www.linkedin.com/learning/responsible-ai-and-application-development/ethical-data-collection?u=76281980&t=14)** Think about it this way.
>
> **[0:15](https://www.linkedin.com/learning/responsible-ai-and-application-development/ethical-data-collection?u=76281980&t=15)** Imagine building a house on a foundation of sand.
>
> **[0:18](https://www.linkedin.com/learning/responsible-ai-and-application-development/ethical-data-collection?u=76281980&t=18)** No matter how well you construct everything else, that underlying weakness will always pose a risk.
>
> **[0:25](https://www.linkedin.com/learning/responsible-ai-and-application-development/ethical-data-collection?u=76281980&t=25)** The same principle applies in artificially intelligent applications.
>
> **[0:29](https://www.linkedin.com/learning/responsible-ai-and-application-development/ethical-data-collection?u=76281980&t=29)** Your data is your foundation.
>
> **[0:31](https://www.linkedin.com/learning/responsible-ai-and-application-development/ethical-data-collection?u=76281980&t=31)** So let's dig into what you need to consider when you're collecting that data.
>
> **[0:36](https://www.linkedin.com/learning/responsible-ai-and-application-development/ethical-data-collection?u=76281980&t=36)** Because there's such a diversity of requirements, I won't really go deep into any particular workflow.
>
> **[0:41](https://www.linkedin.com/learning/responsible-ai-and-application-development/ethical-data-collection?u=76281980&t=41)** Instead, I'm going to introduce some recommended tools for various scenarios.
>
> **[0:47](https://www.linkedin.com/learning/responsible-ai-and-application-development/ethical-data-collection?u=76281980&t=47)** All of these apply to collecting real world data.
>
> **[0:50](https://www.linkedin.com/learning/responsible-ai-and-application-development/ethical-data-collection?u=76281980&t=50)** When it comes to synthetic data, you should evaluate the terms of use of the platform that generates that data for you.
>
> **[0:57](https://www.linkedin.com/learning/responsible-ai-and-application-development/ethical-data-collection?u=76281980&t=57)** For example, many large language model services don't allow you to use them to generate data to train other models, and you should consider that very carefully.
>
> **[1:07](https://www.linkedin.com/learning/responsible-ai-and-application-development/ethical-data-collection?u=76281980&t=67)** Anyway, back to collecting real world data.
>
> **[1:10](https://www.linkedin.com/learning/responsible-ai-and-application-development/ethical-data-collection?u=76281980&t=70)** First, you should consider privacy.
>
> **[1:13](https://www.linkedin.com/learning/responsible-ai-and-application-development/ethical-data-collection?u=76281980&t=73)** Every piece of data that you collect likely belongs to or represents a real person.
>
> **[1:18](https://www.linkedin.com/learning/responsible-ai-and-application-development/ethical-data-collection?u=76281980&t=78)** When collecting personal data, you will need clear consent protocols, not just for legal compliance, but let's be honest here.
>
> **[1:26](https://www.linkedin.com/learning/responsible-ai-and-application-development/ethical-data-collection?u=76281980&t=86)** It's just the right thing to do.
>
> **[1:28](https://www.linkedin.com/learning/responsible-ai-and-application-development/ethical-data-collection?u=76281980&t=88)** A great first step in having a privacy policy is having tools that help you generate one so you can understand the aspects of privacy that you need to use and you can communicate with those who are providing you with data.
>
> **[1:41](https://www.linkedin.com/learning/responsible-ai-and-application-development/ethical-data-collection?u=76281980&t=101)** TermsFeed has a privacy policy generator that you can use for free, which complies with many worldwide privacy laws.
>
> **[1:49](https://www.linkedin.com/learning/responsible-ai-and-application-development/ethical-data-collection?u=76281980&t=109)** If you want a commercial alternative, [GetTerms.io](https://GetTerms.io) will also provide a one-stop shop.
>
> **[1:55](https://www.linkedin.com/learning/responsible-ai-and-application-development/ethical-data-collection?u=76281980&t=115)** Additionally, the Electronic Frontier Foundation provides excellent resources for implementing privacy-preserving data collection practices.
>
> **[2:05](https://www.linkedin.com/learning/responsible-ai-and-application-development/ethical-data-collection?u=76281980&t=125)** Okay, so you've now put together a privacy policy and you're processes to implement it, and you're confident that you're not just being legal, but you're also being responsible when collecting data.
>
> **[2:16](https://www.linkedin.com/learning/responsible-ai-and-application-development/ethical-data-collection?u=76281980&t=136)** So of course, the next question is, well, what exactly do you collect?
>
> **[2:20](https://www.linkedin.com/learning/responsible-ai-and-application-development/ethical-data-collection?u=76281980&t=140)** Well, data diversity is equally crucial.
>
> **[2:22](https://www.linkedin.com/learning/responsible-ai-and-application-development/ethical-data-collection?u=76281980&t=142)** For example, if you're building a facial recognition system using data primarily from one demographic, you're essentially creating a system that might fail for everyone else, and that's not just a technical issue.
>
> **[2:34](https://www.linkedin.com/learning/responsible-ai-and-application-development/ethical-data-collection?u=76281980&t=154)** It's an ethical one that can perpetuate existing societal biases.
>
> **[2:40](https://www.linkedin.com/learning/responsible-ai-and-application-development/ethical-data-collection?u=76281980&t=160)** The open-source Fairlearn toolkit, and Google's ML-fairness-gym provide powerful tools for detecting and mitigating these biases before they impact your models.
>
> **[2:52](https://www.linkedin.com/learning/responsible-ai-and-application-development/ethical-data-collection?u=76281980&t=172)** For legal guidance, the Open Data Commons provides free legal tools and licenses specifically designed for data sharing and collection.
>
> **[3:02](https://www.linkedin.com/learning/responsible-ai-and-application-development/ethical-data-collection?u=76281980&t=182)** Their guides can help you navigate that complex landscape of data rights and usage across different jurisdictions.
>
> **[3:10](https://www.linkedin.com/learning/responsible-ai-and-application-development/ethical-data-collection?u=76281980&t=190)** The Mozilla Foundation's Data Privacy Principles will also offer excellent guidelines for ethical data collection practices.
>
> **[3:18](https://www.linkedin.com/learning/responsible-ai-and-application-development/ethical-data-collection?u=76281980&t=198)** Documentation is crucial for transparency and reproducibility.
>
> **[3:22](https://www.linkedin.com/learning/responsible-ai-and-application-development/ethical-data-collection?u=76281980&t=202)** The Community Data Documentation Initiative, CDDI, provides free templates and guides for creating comprehensive dataset documentation.
>
> **[3:32](https://www.linkedin.com/learning/responsible-ai-and-application-development/ethical-data-collection?u=76281980&t=212)** For assessing data quality, Great Expectations is a powerful open-source tool that helps you validate, document, and profile your data.
>
> **[3:42](https://www.linkedin.com/learning/responsible-ai-and-application-development/ethical-data-collection?u=76281980&t=222)** The open source community has also developed excellent frameworks like DVC, Data Version Control, for tracking your data collection and its changes over time, ensuring reproducibility and transparency in your data pipeline.
>
> **[3:57](https://www.linkedin.com/learning/responsible-ai-and-application-development/ethical-data-collection?u=76281980&t=237)** Now, these considerations are not just check boxes to tick.
>
> **[4:01](https://www.linkedin.com/learning/responsible-ai-and-application-development/ethical-data-collection?u=76281980&t=241)** They are fundamental principles that will shape how your AI system interacts with the world.
>
> **[4:08](https://www.linkedin.com/learning/responsible-ai-and-application-development/ethical-data-collection?u=76281980&t=248)** While these tools can help systemize that process, they will not replace thoughtful consideration of ethical implications.
>
> **[4:15](https://www.linkedin.com/learning/responsible-ai-and-application-development/ethical-data-collection?u=76281980&t=255)** They're aids in building AI systems that are not just powerful, but responsible and fair.
>
> **[4:21](https://www.linkedin.com/learning/responsible-ai-and-application-development/ethical-data-collection?u=76281980&t=261)** And thanks to the open-source community, these tools are accessible to everyone.
>
> **[4:27](https://www.linkedin.com/learning/responsible-ai-and-application-development/ethical-data-collection?u=76281980&t=267)** I touched on it a little in this video when talking about collecting data, but the next step, once you've got it, is to understand what you have before you can train models, and we're going to explore some tools for that next.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), else, (2)
> **Analogies:** for example (2), imagine (1)
> **Env Vars:** cddi (1), dvc (1)
> **CLI Commands:** make (1)
> **URLs:** [getterms.io](https://getterms.io) (1)
> **Definitions:** is a  (1)
> **Best Practices:** recommended (1)
> **Speakers:** - let (1)

#### Tools to understand your data
> [LinkedIn Learning](https://www.linkedin.com/learning/responsible-ai-and-application-development/tools-to-understand-your-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/responsible-ai-and-application-development/tools-to-understand-your-data?u=76281980&t=1)** - Okay, so we've seen how data is crucial for responsible AI development, but let's now look a little deeper at how we can document and understand our data to help us make better decisions.
>
> **[0:13](https://www.linkedin.com/learning/responsible-ai-and-application-development/tools-to-understand-your-data?u=76281980&t=13)** It's kind of like how food has nutrition labels and medicines have detailed inserts about what they do and what their effects are.
>
> **[0:20](https://www.linkedin.com/learning/responsible-ai-and-application-development/tools-to-understand-your-data?u=76281980&t=20)** Now, there's lots of tools to help with this, but I'm going to tour six of the major ones and why they matter.
>
> **[0:26](https://www.linkedin.com/learning/responsible-ai-and-application-development/tools-to-understand-your-data?u=76281980&t=26)** So these are datasheets, dataset nutrition labels, model cards, data statements, fact sheets, and About ML documentation.
>
> **[0:36](https://www.linkedin.com/learning/responsible-ai-and-application-development/tools-to-understand-your-data?u=76281980&t=36)** Each of these has a unique purpose to ensure that we can understand datasets and use them responsibly.
>
> **[0:41](https://www.linkedin.com/learning/responsible-ai-and-application-development/tools-to-understand-your-data?u=76281980&t=41)** Before I dive into each one, let's understand fully why this matters.
>
> **[0:46](https://www.linkedin.com/learning/responsible-ai-and-application-development/tools-to-understand-your-data?u=76281980&t=46)** Imagine building a system around a model that's trained without understanding potential biases in your data.
>
> **[0:52](https://www.linkedin.com/learning/responsible-ai-and-application-development/tools-to-understand-your-data?u=76281980&t=52)** It'd be a little bit like driving blindfolded.
>
> **[0:54](https://www.linkedin.com/learning/responsible-ai-and-application-development/tools-to-understand-your-data?u=76281980&t=54)** So with this documentation and these tools, you can have your eyes be more wide open, not just to be ethical and responsible, but also to build better models.
>
> **[1:04](https://www.linkedin.com/learning/responsible-ai-and-application-development/tools-to-understand-your-data?u=76281980&t=64)** Let's dive in and we'll take a look.
>
> **[1:06](https://www.linkedin.com/learning/responsible-ai-and-application-development/tools-to-understand-your-data?u=76281980&t=66)** First are datasheets.
>
> **[1:08](https://www.linkedin.com/learning/responsible-ai-and-application-development/tools-to-understand-your-data?u=76281980&t=68)** Now these are very detailed specification sheets telling you everything about a dataset's creation, composition, and intended uses.
>
> **[1:18](https://www.linkedin.com/learning/responsible-ai-and-application-development/tools-to-understand-your-data?u=76281980&t=78)** A fantastic example of this is the CheXpert datasheet from Stanford.
>
> **[1:22](https://www.linkedin.com/learning/responsible-ai-and-application-development/tools-to-understand-your-data?u=76281980&t=82)** It documents their dataset of over a quarter of a million chest x-rays, and it importantly demonstrates how to handle sensitive medical data.
>
> **[1:31](https://www.linkedin.com/learning/responsible-ai-and-application-development/tools-to-understand-your-data?u=76281980&t=91)** You can find it at this URL.
>
> **[1:34](https://www.linkedin.com/learning/responsible-ai-and-application-development/tools-to-understand-your-data?u=76281980&t=94)** It explains the motivation behind the dataset, how it was used, and crystal clear definitions of everything that they did while gathering and labeling the data, all the way down to the methodology.
>
> **[1:46](https://www.linkedin.com/learning/responsible-ai-and-application-development/tools-to-understand-your-data?u=76281980&t=106)** They even link you to their GitHub, and they've got this diagram demonstrating the team composure for checking, double checking, and validating the data.
>
> **[1:56](https://www.linkedin.com/learning/responsible-ai-and-application-development/tools-to-understand-your-data?u=76281980&t=116)** Next up, and still following our food analogy, are dataset nutrition labels.
>
> **[2:01](https://www.linkedin.com/learning/responsible-ai-and-application-development/tools-to-understand-your-data?u=76281980&t=121)** The vision of the data nutrition project is to help us move technology forward without mirroring societal biases, and they do this by creating tools and practices to encourage responsible AI development.
>
> **[2:14](https://www.linkedin.com/learning/responsible-ai-and-application-development/tools-to-understand-your-data?u=76281980&t=134)** One missing step that they aim to address is to assess datasets based on standard qualitative and quantitative measures.
>
> **[2:22](https://www.linkedin.com/learning/responsible-ai-and-application-development/tools-to-understand-your-data?u=76281980&t=142)** They then package these up into an easy-to-use nutrition label, and they provide tools for you to be able to do it for yourself.
>
> **[2:29](https://www.linkedin.com/learning/responsible-ai-and-application-development/tools-to-understand-your-data?u=76281980&t=149)** Here's an example label showing details of the California Health Interview Survey, and you can see it highlights the intended use, restricted uses, and forbidden use cases.
>
> **[2:41](https://www.linkedin.com/learning/responsible-ai-and-application-development/tools-to-understand-your-data?u=76281980&t=161)** In addition, it shows where it could be a risk for inference with a warning that you're doing inference about people when training a model on this set.
>
> **[2:50](https://www.linkedin.com/learning/responsible-ai-and-application-development/tools-to-understand-your-data?u=76281980&t=170)** Next up is model cards, and again, with a similar idea describing both the model and the underlying data.
>
> **[2:57](https://www.linkedin.com/learning/responsible-ai-and-application-development/tools-to-understand-your-data?u=76281980&t=177)** The BERT based model from Google is a great example of this with a page on Hugging Face where you can test it out, and it even calls out limitations and biases in the model, so you can be aware up front.
>
> **[3:09](https://www.linkedin.com/learning/responsible-ai-and-application-development/tools-to-understand-your-data?u=76281980&t=189)** Here, for example, we can see the man worked as a blank, gets auto completed to jobs like carpenter, waiter, et cetera, while the woman worked as blank, gets completed to jobs like nurse or maid.
>
> **[3:24](https://www.linkedin.com/learning/responsible-ai-and-application-development/tools-to-understand-your-data?u=76281980&t=204)** They'll also call out that this bias can impact fine-tuned versions of the model.
>
> **[3:30](https://www.linkedin.com/learning/responsible-ai-and-application-development/tools-to-understand-your-data?u=76281980&t=210)** Another approach by Bender and Friedman from the University of Washington, is the idea of data statements presented in this paper.
>
> **[3:38](https://www.linkedin.com/learning/responsible-ai-and-application-development/tools-to-understand-your-data?u=76281980&t=218)** Data statements are characterizations of datasets that provide context, allowing developers and users to better understand how experimental results could generalize.
>
> **[3:49](https://www.linkedin.com/learning/responsible-ai-and-application-development/tools-to-understand-your-data?u=76281980&t=229)** The paper includes a full schema on how to provide data statements and a follow up publication at the University of Washington Tech Policy Lab will give you detailed guidelines on how to write them.
>
> **[4:03](https://www.linkedin.com/learning/responsible-ai-and-application-development/tools-to-understand-your-data?u=76281980&t=243)** Fact sheets from IBM Watson are components in the watsonx.governance namespace.
>
> **[4:08](https://www.linkedin.com/learning/responsible-ai-and-application-development/tools-to-understand-your-data?u=76281980&t=248)** Their goal is to provide a systematic approach to collecting and managing facts About ML models and data.
>
> **[4:15](https://www.linkedin.com/learning/responsible-ai-and-application-development/tools-to-understand-your-data?u=76281980&t=255)** They include open-source software on GitHub to help you publish fact sheets about your work, and in turn, it includes examples such as this notebook for a full end-to-end training run, which captures key facts and metrics for you to publish.
>
> **[4:30](https://www.linkedin.com/learning/responsible-ai-and-application-development/tools-to-understand-your-data?u=76281980&t=270)** Finally, About ML, and About stands for annotation and benchmarking on understanding and transparency of ML lifecycles.
>
> **[4:39](https://www.linkedin.com/learning/responsible-ai-and-application-development/tools-to-understand-your-data?u=76281980&t=279)** It's a multi-stakeholder initiative whose goal is to guide you through the entire process of being responsible, including with your data.
>
> **[4:47](https://www.linkedin.com/learning/responsible-ai-and-application-development/tools-to-understand-your-data?u=76281980&t=287)** Their website is full of guidance and articles around data, and you can access it via this URL.
>
> **[4:54](https://www.linkedin.com/learning/responsible-ai-and-application-development/tools-to-understand-your-data?u=76281980&t=294)** So that was a tour through some of the tools that are out there for you to use both ways.
>
> **[4:59](https://www.linkedin.com/learning/responsible-ai-and-application-development/tools-to-understand-your-data?u=76281980&t=299)** If you're acquiring data, you should make sure that there's some kind of publication supporting it, then you should choose at least one of these approaches for providing data to others.
>
> **[5:09](https://www.linkedin.com/learning/responsible-ai-and-application-development/tools-to-understand-your-data?u=76281980&t=309)** In the next video, we're going to look in a little more detail at the dataset nutrition labels.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), this, (1), finally, (1)
> **Env Vars:** url (2), bert (1), ibm (1)
> **Analogies:** kind of like (1), imagine (1), for example (1), such as (1)
> **CLI Commands:** make (2), find (1)
> **Tools:** github (2)
> **Definitions:** is a  (1), stands for (1)
> **Warnings:** warning (1), be aware (1)
> **Cross-References:** in the next (1)

#### Demo of model cards, nutrition labels, etc.
> [LinkedIn Learning](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-model-cards-nutrition-labels-etc?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-model-cards-nutrition-labels-etc?u=76281980&t=0)** - [Instructor] Okay, so this is the data nutrition project that we were talking about in the presentation.
>
> **[0:05](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-model-cards-nutrition-labels-etc?u=76281980&t=5)** And at this URL, there's an example of a data nutrition card.
>
> **[0:09](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-model-cards-nutrition-labels-etc?u=76281980&t=9)** It's pretty cool because it tells you really everything you need to know about this data, everything from the intended use.
>
> **[0:16](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-model-cards-nutrition-labels-etc?u=76281980&t=16)** If we start here and we can take a look, it initially says right off the bat, the intended domain is Public Health.
>
> **[0:23](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-model-cards-nutrition-labels-etc?u=76281980&t=23)** It tells you the use, the ways that you can use it, everything, for example, planning and budget in healthcare, developing and advocating policies for those who have needs, et cetera.
>
> **[0:33](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-model-cards-nutrition-labels-etc?u=76281980&t=33)** It gives you some known uses of where people have actually used it that you can check as a reference.
>
> **[0:38](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-model-cards-nutrition-labels-etc?u=76281980&t=38)** And also importantly, it tells you where you should not use it.
>
> **[0:42](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-model-cards-nutrition-labels-etc?u=76281980&t=42)** So, for example, specific counts of demographic characteristics, things like that.
>
> **[0:47](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-model-cards-nutrition-labels-etc?u=76281980&t=47)** Then as you go down through it, it will tell you some of the inference risks.
>
> **[0:51](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-model-cards-nutrition-labels-etc?u=76281980&t=51)** And I think this is really important, because often when you build a model inference is how people are going to use that model.
>
> **[0:58](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-model-cards-nutrition-labels-etc?u=76281980&t=58)** And there are risks, for example, if they're building models to check things about humans.
>
> **[1:03](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-model-cards-nutrition-labels-etc?u=76281980&t=63)** And again, if we go back here, it's the same reason here.
>
> **[1:06](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-model-cards-nutrition-labels-etc?u=76281980&t=66)** Do not use it for population demographics, and the warning here is about using it for humans.
>
> **[1:11](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-model-cards-nutrition-labels-etc?u=76281980&t=71)** So again, if you're consuming a dataset, this is really, really useful, and I encourage you that if you're producing a dataset to share with others, that you're able to provide nutrition details like this.
>
> **[1:21](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-model-cards-nutrition-labels-etc?u=76281980&t=81)** And then finally, I really like to go down to this one where it's like we're looking at the data values and the values that are under each column, and they've done an assessment on this to kind of look at the issues, what's risky, what's safe, and what's unknown.
>
> **[1:34](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-model-cards-nutrition-labels-etc?u=76281980&t=94)** And it's color coded, so as we can see here, Collection and Labeling Protocols, they've listed as being risky, and then they will tell you details why that might be the case.
>
> **[1:43](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-model-cards-nutrition-labels-etc?u=76281980&t=103)** For example, again, also unknown is the gray, so Data Imputation Protocols, they'll list out all of the details around that.
>
> **[1:51](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-model-cards-nutrition-labels-etc?u=76281980&t=111)** So it's really, really fabulous, and being very open, and very clear about this data, how the data has been gathered, recommendations about how it should be used, examples of how it has been used successfully, places where it should not be used, and then also like assessments that you can make that say, "Hey, if you're going to be using this thing in a particular way, then there are risks involved with that," or it's also safety involved with that.
>
> **[2:18](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-model-cards-nutrition-labels-etc?u=76281980&t=138)** So two way, number one, if you are receiving data from someone else, maybe encourage them to have data nutrition facts like this on it.
>
> **[2:27](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-model-cards-nutrition-labels-etc?u=76281980&t=147)** Or if you're producing data for someone else, it's really powerful for you to help them build better by producing this type of data for yourself.

> [!info]- Semantic Content
>
> **Code Keywords:** else, (2), public (1), this. (1), finally, (1), case. (1)
> **Analogies:** for example (4), it's like (1)
> **CLI Commands:** make (1)
> **Env Vars:** url (1)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)


### 3. Preprocessing Data

#### Why preprocess data?
> [LinkedIn Learning](https://www.linkedin.com/learning/responsible-ai-and-application-development/why-preprocess-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/responsible-ai-and-application-development/why-preprocess-data?u=76281980&t=1)** - Have you ever tried to cook with unprepared foods like whole vegetables?
>
> **[0:05](https://www.linkedin.com/learning/responsible-ai-and-application-development/why-preprocess-data?u=76281980&t=5)** Or maybe have you tried to build furniture with uncut wood?
>
> **[0:08](https://www.linkedin.com/learning/responsible-ai-and-application-development/why-preprocess-data?u=76281980&t=8)** That's what using raw data for AI can be like.
>
> **[0:11](https://www.linkedin.com/learning/responsible-ai-and-application-development/why-preprocess-data?u=76281980&t=11)** And just like the vegetable that you would have to peel and chop, or the wood that you have to hone and polish, you need to prepare your data for training AI models.
>
> **[0:19](https://www.linkedin.com/learning/responsible-ai-and-application-development/why-preprocess-data?u=76281980&t=19)** And this is where we're going to clean it up, we're going to fix any issues and we're going to get it into optimal shape.
>
> **[0:25](https://www.linkedin.com/learning/responsible-ai-and-application-development/why-preprocess-data?u=76281980&t=25)** Now, of course, data and vegetables are two different things.
>
> **[0:27](https://www.linkedin.com/learning/responsible-ai-and-application-development/why-preprocess-data?u=76281980&t=27)** So let's take a look at what we would do to clean up our data.
>
> **[0:31](https://www.linkedin.com/learning/responsible-ai-and-application-development/why-preprocess-data?u=76281980&t=31)** First, real world data can be very messy.
>
> **[0:34](https://www.linkedin.com/learning/responsible-ai-and-application-development/why-preprocess-data?u=76281980&t=34)** It might come with missing values, inconsistent formats, or outliers that could skew our results or even more mundane, but just as important, it's just not the right shape for a model architecture.
>
> **[0:45](https://www.linkedin.com/learning/responsible-ai-and-application-development/why-preprocess-data?u=76281980&t=45)** We'll explore that in a later video.
>
> **[0:47](https://www.linkedin.com/learning/responsible-ai-and-application-development/why-preprocess-data?u=76281980&t=47)** But let's look first at some real examples.
>
> **[0:50](https://www.linkedin.com/learning/responsible-ai-and-application-development/why-preprocess-data?u=76281980&t=50)** The first, imagine you're working with customer data and the raw dataset might have phone numbers in different formats like these.
>
> **[0:58](https://www.linkedin.com/learning/responsible-ai-and-application-development/why-preprocess-data?u=76281980&t=58)** And that's just for one country.
>
> **[0:59](https://www.linkedin.com/learning/responsible-ai-and-application-development/why-preprocess-data?u=76281980&t=59)** Phone numbers in other countries could have more digits and different breakdowns than US-based ones.
>
> **[1:04](https://www.linkedin.com/learning/responsible-ai-and-application-development/why-preprocess-data?u=76281980&t=64)** Or this, missing values, where the customer didn't fill out the fields and we forgot to make it compulsory on whatever data entry system that they used.
>
> **[1:13](https://www.linkedin.com/learning/responsible-ai-and-application-development/why-preprocess-data?u=76281980&t=73)** Or income values with and without currency signs, or sometimes expressed in hours or weeks instead of years.
>
> **[1:20](https://www.linkedin.com/learning/responsible-ai-and-application-development/why-preprocess-data?u=76281980&t=80)** And don't get me started on addresses.
>
> **[1:22](https://www.linkedin.com/learning/responsible-ai-and-application-development/why-preprocess-data?u=76281980&t=82)** Or we could maybe look at image processing.
>
> **[1:24](https://www.linkedin.com/learning/responsible-ai-and-application-development/why-preprocess-data?u=76281980&t=84)** Raw images could come in different sizes.
>
> **[1:28](https://www.linkedin.com/learning/responsible-ai-and-application-development/why-preprocess-data?u=76281980&t=88)** They could have different brightness or other attributes.
>
> **[1:31](https://www.linkedin.com/learning/responsible-ai-and-application-development/why-preprocess-data?u=76281980&t=91)** They could include a lot of irrelevant content.
>
> **[1:33](https://www.linkedin.com/learning/responsible-ai-and-application-development/why-preprocess-data?u=76281980&t=93)** They could be rotated in different directions, and stuff like that.
>
> **[1:37](https://www.linkedin.com/learning/responsible-ai-and-application-development/why-preprocess-data?u=76281980&t=97)** Ultimately, your model needs consistency or it won't learn effectively.
>
> **[1:42](https://www.linkedin.com/learning/responsible-ai-and-application-development/why-preprocess-data?u=76281980&t=102)** So before we dive into pre-processing, let's also remember responsibility.
>
> **[1:48](https://www.linkedin.com/learning/responsible-ai-and-application-development/why-preprocess-data?u=76281980&t=108)** Pre-processing isn't just about making the data model ready, it's also important to make conscious ethical choices.
>
> **[1:55](https://www.linkedin.com/learning/responsible-ai-and-application-development/why-preprocess-data?u=76281980&t=115)** It's easy to make mistakes here.
>
> **[1:57](https://www.linkedin.com/learning/responsible-ai-and-application-development/why-preprocess-data?u=76281980&t=117)** For example, think about that phone number example that we mentioned earlier.
>
> **[2:01](https://www.linkedin.com/learning/responsible-ai-and-application-development/why-preprocess-data?u=76281980&t=121)** It's more than just fixing the format.
>
> **[2:03](https://www.linkedin.com/learning/responsible-ai-and-application-development/why-preprocess-data?u=76281980&t=123)** What if your data has lots of numbers for one area code and relatively few for another?
>
> **[2:09](https://www.linkedin.com/learning/responsible-ai-and-application-development/why-preprocess-data?u=76281980&t=129)** Now, that would mean that your model would work great with one of the area codes, but how would that impact people who live in the other one?
>
> **[2:16](https://www.linkedin.com/learning/responsible-ai-and-application-development/why-preprocess-data?u=76281980&t=136)** What if, for example, it was used for mortgage approvals and just the existence of less data in one area could mean people who live there get a worse deal than those that don't.
>
> **[2:27](https://www.linkedin.com/learning/responsible-ai-and-application-development/why-preprocess-data?u=76281980&t=147)** And as you're pre-processing the data, this is the mindset that you need to consider.
>
> **[2:32](https://www.linkedin.com/learning/responsible-ai-and-application-development/why-preprocess-data?u=76281980&t=152)** It will help you build better models and build them responsibly.
>
> **[2:37](https://www.linkedin.com/learning/responsible-ai-and-application-development/why-preprocess-data?u=76281980&t=157)** In the next video, we're going to go a little bit deeper and take a use case where you might be building a house price prediction model.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), this, (1), if, (1)
> **Analogies:** for example (2), just like (1), imagine (1)
> **CLI Commands:** make (3)
> **Cross-References:** we mentioned (1), in the next (1)
> **Speakers:** - have (1)

#### Techniques to preprocess data
> [LinkedIn Learning](https://www.linkedin.com/learning/responsible-ai-and-application-development/techniques-to-preprocess-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/responsible-ai-and-application-development/techniques-to-preprocess-data?u=76281980&t=1)** - In the previous video, we spoke about how you should think about your data, and in particular, the pre-processing steps.
>
> **[0:07](https://www.linkedin.com/learning/responsible-ai-and-application-development/techniques-to-preprocess-data?u=76281980&t=7)** Now these are amongst the most important parts of building models for AI, and it's important to get them right.
>
> **[0:13](https://www.linkedin.com/learning/responsible-ai-and-application-development/techniques-to-preprocess-data?u=76281980&t=13)** Some studies even show that about 80% of the time spent in building AI-based applications is comprised of just data pre-processing.
>
> **[0:22](https://www.linkedin.com/learning/responsible-ai-and-application-development/techniques-to-preprocess-data?u=76281980&t=22)** It's a hugely important part of your development lifecycle.
>
> **[0:26](https://www.linkedin.com/learning/responsible-ai-and-application-development/techniques-to-preprocess-data?u=76281980&t=26)** So let's take a look at what's involved.
>
> **[0:28](https://www.linkedin.com/learning/responsible-ai-and-application-development/techniques-to-preprocess-data?u=76281980&t=28)** We'll just be pretty high level for now, but the concepts you learn here will apply across any project.
>
> **[0:34](https://www.linkedin.com/learning/responsible-ai-and-application-development/techniques-to-preprocess-data?u=76281980&t=34)** Before we jump in, let's talk about responsibility.
>
> **[0:37](https://www.linkedin.com/learning/responsible-ai-and-application-development/techniques-to-preprocess-data?u=76281980&t=37)** Every decision we make can impact the model's fairness and bias.
>
> **[0:41](https://www.linkedin.com/learning/responsible-ai-and-application-development/techniques-to-preprocess-data?u=76281980&t=41)** So we need to think very carefully about things like what data we choose to keep or discard, how we handle missing values for different demographic groups.
>
> **[0:51](https://www.linkedin.com/learning/responsible-ai-and-application-development/techniques-to-preprocess-data?u=76281980&t=51)** And as we do feature engineering, we want to make sure we don't amplify any existing biases.
>
> **[0:57](https://www.linkedin.com/learning/responsible-ai-and-application-development/techniques-to-preprocess-data?u=76281980&t=57)** It's similar with scaling.
>
> **[0:58](https://www.linkedin.com/learning/responsible-ai-and-application-development/techniques-to-preprocess-data?u=76281980&t=58)** If we perform any, we shouldn't do it to disadvantage any particular group.
>
> **[1:04](https://www.linkedin.com/learning/responsible-ai-and-application-development/techniques-to-preprocess-data?u=76281980&t=64)** Ultimately, pre-processing isn't about making data model ready as much as it is about making conscious, ethical choices that will help you build better models.
>
> **[1:14](https://www.linkedin.com/learning/responsible-ai-and-application-development/techniques-to-preprocess-data?u=76281980&t=74)** So I like to break it down into three steps, and these are cleaning, transformation and feature engineering.
>
> **[1:21](https://www.linkedin.com/learning/responsible-ai-and-application-development/techniques-to-preprocess-data?u=76281980&t=81)** Cleaning is the process of handling missing values, removing any duplicates and fixing inconsistencies in the data.
>
> **[1:29](https://www.linkedin.com/learning/responsible-ai-and-application-development/techniques-to-preprocess-data?u=76281980&t=89)** Transformation is when you scale values to similar ranges or maybe convert category indices to raw numbers or vice versa and standardize across different formats, all that kind of stuff.
>
> **[1:41](https://www.linkedin.com/learning/responsible-ai-and-application-development/techniques-to-preprocess-data?u=76281980&t=101)** Feature engineering is when you combine data points to create new and useful features, and this can help you extract meaningful patterns from your data.
>
> **[1:50](https://www.linkedin.com/learning/responsible-ai-and-application-development/techniques-to-preprocess-data?u=76281980&t=110)** Let's explore this with a simple example.
>
> **[1:52](https://www.linkedin.com/learning/responsible-ai-and-application-development/techniques-to-preprocess-data?u=76281980&t=112)** Imagine you're building a house price prediction model.
>
> **[1:55](https://www.linkedin.com/learning/responsible-ai-and-application-development/techniques-to-preprocess-data?u=76281980&t=115)** Your raw data might include things like house sizes in various units, prices in different currencies, unstructured text descriptions of neighborhoods, and of course there could be missing fields here and there.
>
> **[2:08](https://www.linkedin.com/learning/responsible-ai-and-application-development/techniques-to-preprocess-data?u=76281980&t=128)** After pre-processing, we will want all the measurements to be in the same unit.
>
> **[2:13](https://www.linkedin.com/learning/responsible-ai-and-application-development/techniques-to-preprocess-data?u=76281980&t=133)** All the prices to be standardized, numerical representations of neighborhood features and any missing values properly handled.
>
> **[2:21](https://www.linkedin.com/learning/responsible-ai-and-application-development/techniques-to-preprocess-data?u=76281980&t=141)** The cleaning part is obvious.
>
> **[2:23](https://www.linkedin.com/learning/responsible-ai-and-application-development/techniques-to-preprocess-data?u=76281980&t=143)** Taking the data and ensuring the missing values are filled in are at least smartly and fared.
>
> **[2:29](https://www.linkedin.com/learning/responsible-ai-and-application-development/techniques-to-preprocess-data?u=76281980&t=149)** Inconsistencies are fixed.
>
> **[2:31](https://www.linkedin.com/learning/responsible-ai-and-application-development/techniques-to-preprocess-data?u=76281980&t=151)** A standardized measurement for an area can be an example of this.
>
> **[2:34](https://www.linkedin.com/learning/responsible-ai-and-application-development/techniques-to-preprocess-data?u=76281980&t=154)** Transformation has some overlaps with cleaning, of course.
>
> **[2:38](https://www.linkedin.com/learning/responsible-ai-and-application-development/techniques-to-preprocess-data?u=76281980&t=158)** For example, if we pick a standardized measurement for area, then we're going to transform all of our data to fit that.
>
> **[2:45](https://www.linkedin.com/learning/responsible-ai-and-application-development/techniques-to-preprocess-data?u=76281980&t=165)** And then feature engineering could involve calculations based on other fields.
>
> **[2:50](https://www.linkedin.com/learning/responsible-ai-and-application-development/techniques-to-preprocess-data?u=76281980&t=170)** For example, price per square foot is a powerful metric, but that may not be in the original data.
>
> **[2:56](https://www.linkedin.com/learning/responsible-ai-and-application-development/techniques-to-preprocess-data?u=76281980&t=176)** The quality of the work that you do in pre-processing can make or break your model, not just in terms of performance, but if it falls over on ethical grounds, it could get sidelined for real world use.
>
> **[3:08](https://www.linkedin.com/learning/responsible-ai-and-application-development/techniques-to-preprocess-data?u=76281980&t=188)** Every decision you make in pre-processing for cleaning, transformation or feature engineering should be done through that ethical lens.
>
> **[3:17](https://www.linkedin.com/learning/responsible-ai-and-application-development/techniques-to-preprocess-data?u=76281980&t=197)** It's important to get into that mindset.
>
> **[3:20](https://www.linkedin.com/learning/responsible-ai-and-application-development/techniques-to-preprocess-data?u=76281980&t=200)** For example, with our house prices data, think about the following.
>
> **[3:24](https://www.linkedin.com/learning/responsible-ai-and-application-development/techniques-to-preprocess-data?u=76281980&t=204)** If you drop rows with missing values, are you disproportionately removing data from some underrepresented groups?
>
> **[3:31](https://www.linkedin.com/learning/responsible-ai-and-application-development/techniques-to-preprocess-data?u=76281980&t=211)** Or if you normalize income data, are you using methods that might mask out economic inequalities?
>
> **[3:38](https://www.linkedin.com/learning/responsible-ai-and-application-development/techniques-to-preprocess-data?u=76281980&t=218)** And if you're processing text data, are your cleaning steps preserving important cultural or linguistic nuances?
>
> **[3:45](https://www.linkedin.com/learning/responsible-ai-and-application-development/techniques-to-preprocess-data?u=76281980&t=225)** Similarly, with feature engineering to remove outliers, could you accidentally be removing valid but minority cases?
>
> **[3:54](https://www.linkedin.com/learning/responsible-ai-and-application-development/techniques-to-preprocess-data?u=76281980&t=234)** All of these choices matter.
>
> **[3:56](https://www.linkedin.com/learning/responsible-ai-and-application-development/techniques-to-preprocess-data?u=76281980&t=236)** They will impact on how your model will serve and might make it fail, not just for the few, but also for the many.

> [!info]- Semantic Content
>
> **CLI Commands:** make (5)
> **Code Keywords:** let (3), this. (1)
> **Analogies:** for example (3), imagine (1)
> **Cross-References:** previous video (1)
> **Definitions:** is a  (1)
> **Speakers:** - in (1)

#### Demo of data preprocessing
> [LinkedIn Learning](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-data-preprocessing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-data-preprocessing?u=76281980&t=0)** - [Instructor] Okay, if we take a look at chapter 3, and within chapter 3, I've downloaded the houses dataset that we were looking at in the slides.
>
> **[0:08](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-data-preprocessing?u=76281980&t=8)** It's from Kaggle.
>
> **[0:10](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-data-preprocessing?u=76281980&t=10)** And what I've done is written a lot of code that you can take a look at that slices and dices that dataset and does a lot of the pre-processing and cleaning and stuff that we were talking about.
>
> **[0:21](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-data-preprocessing?u=76281980&t=21)** If I run this, and you can run it the same way yourself as houses.py, you can see the test CSV and train CSV on screen.
>
> **[0:29](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-data-preprocessing?u=76281980&t=29)** Those are the data.
>
> **[0:30](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-data-preprocessing?u=76281980&t=30)** It's going to take a look at them and it's going to analyze them in a number of ways.
>
> **[0:33](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-data-preprocessing?u=76281980&t=33)** And you're going to get a lot of output like this.
>
> **[0:35](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-data-preprocessing?u=76281980&t=35)** Now remember in naive solution will be you're just going to design a machine learning algorithm.
>
> **[0:40](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-data-preprocessing?u=76281980&t=40)** You're going to train it off of this data and you're then going to start trying to tweak your model.
>
> **[0:45](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-data-preprocessing?u=76281980&t=45)** But one of the things that we've done here is to start using some of the tools that we spoke about in the presentation to think about how this data is actually really working.
>
> **[0:55](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-data-preprocessing?u=76281980&t=55)** And if we take a look at some of the outputs, one of the things that we'll get a warning of is that we're using something called median imputation.
>
> **[1:05](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-data-preprocessing?u=76281980&t=65)** And you'll see that warning is right here.
>
> **[1:07](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-data-preprocessing?u=76281980&t=67)** So median imputation.
>
> **[1:09](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-data-preprocessing?u=76281980&t=69)** The idea behind that one is that when the data is being transformed, we're actually picking the median value.
>
> **[1:15](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-data-preprocessing?u=76281980&t=75)** We're using a spread around that.
>
> **[1:17](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-data-preprocessing?u=76281980&t=77)** And what will happen then is that if there are extreme values, so for example, imagine it's a house price and most house prices are clustered around the median price.
>
> **[1:26](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-data-preprocessing?u=76281980&t=86)** But there are some houses that are very, very cheap, like maybe $1.
>
> **[1:30](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-data-preprocessing?u=76281980&t=90)** And there are some houses that are very, very expensive, like maybe $50 million, extreme values like that could get underrepresented.
>
> **[1:37](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-data-preprocessing?u=76281980&t=97)** Now obviously I've picked a really extreme value, but where do you draw the line about what's the norm and what isn't?
>
> **[1:43](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-data-preprocessing?u=76281980&t=103)** So again, the data scientists that you might be working with to go through this data and to help you shape this data may pick something like that.
>
> **[1:51](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-data-preprocessing?u=76281980&t=111)** So let me show you the source code for that.
>
> **[1:54](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-data-preprocessing?u=76281980&t=114)** So this is the code that has been doing the data cleaning, the data pre-processing and all of that kind of thing.
>
> **[2:01](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-data-preprocessing?u=76281980&t=121)** And you'll find very commonly in pre-processing, you'll use a numeric transformer, it has a pipeline, and that pipeline has an imputer.
>
> **[2:09](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-data-preprocessing?u=76281980&t=129)** And in this case, I have a simple imputer that I'm using for this one where the strategy is medium.
>
> **[2:14](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-data-preprocessing?u=76281980&t=134)** So again, if we're using a spread around that median and there are extreme values, you are falling into the case of underrepresenting some groups.
>
> **[2:23](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-data-preprocessing?u=76281980&t=143)** So let's think about it in a different way.
>
> **[2:25](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-data-preprocessing?u=76281980&t=145)** Like I gave an extreme example about house prices a moment ago, but what if around your median is the average price?
>
> **[2:31](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-data-preprocessing?u=76281980&t=151)** But then there are some neighborhoods that you're looking at where their average price is maybe 20% less than the median, and some of them will be less than the median of their neighborhood and they may be cut off by as extreme values.
>
> **[2:45](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-data-preprocessing?u=76281980&t=165)** So the underrepresentation of that group would end up being far more drastic than the underrepresentation for houses around the master median.
>
> **[2:55](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-data-preprocessing?u=76281980&t=175)** So things like that, these kind of mathematical models are places where this kind of bias can unintentionally creep in.
>
> **[3:04](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-data-preprocessing?u=76281980&t=184)** So it's something really to look out for.
>
> **[3:06](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-data-preprocessing?u=76281980&t=186)** Similarly, if I go back to the output from the terminal for a moment when we were looking at that one, we also can see that a very common practice in data science, particularly if you're doing one hot encoding, is to remove a particular category.
>
> **[3:23](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-data-preprocessing?u=76281980&t=203)** So the first category being dropped, and this is a common trick for efficiency, and this code is actually doing it.
>
> **[3:29](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-data-preprocessing?u=76281980&t=209)** If you've inherited from a data scientist, you should check out for this, it's probably okay.
>
> **[3:33](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-data-preprocessing?u=76281980&t=213)** But again, you want to explore the data that you have to make sure that it's not actually doing that.
>
> **[3:39](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-data-preprocessing?u=76281980&t=219)** And the code that I've written here for you to go through this kind of stuff is spotting things like that and warning you.
>
> **[3:44](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-data-preprocessing?u=76281980&t=224)** Now, the reason why you might do something like that is imagine if you're one hard encoding a piece of data and say there's three values.
>
> **[3:51](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-data-preprocessing?u=76281980&t=231)** If I just pick RGB for example.
>
> **[3:53](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-data-preprocessing?u=76281980&t=233)** And one hard encoding for RGB might be 100 for R, 010 for G, 001 for B.
>
> **[4:00](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-data-preprocessing?u=76281980&t=240)** But if you think about it, you can just remove the first value and then have two sets of values, 01 and 10 as well as 00.
>
> **[4:10](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-data-preprocessing?u=76281980&t=250)** So then you can actually have that third value without having the third column.
>
> **[4:14](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-data-preprocessing?u=76281980&t=254)** It's a little trick that data scientists can use.
>
> **[4:17](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-data-preprocessing?u=76281980&t=257)** You'll see that that ends up happening quite commonly in things.
>
> **[4:20](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-data-preprocessing?u=76281980&t=260)** And it's something to watch out for because again, if you're dropping one category in one hot encoding, which category are you dropping?
>
> **[4:27](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-data-preprocessing?u=76281980&t=267)** Which ones are you affecting?
>
> **[4:28](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-data-preprocessing?u=76281980&t=268)** Which parts of data are you actually going to be looking at?
>
> **[4:31](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-data-preprocessing?u=76281980&t=271)** And then one other part of it is if you're doing categorical data, and we can see here I do have this warning that it's using constant value imputation.
>
> **[4:39](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-data-preprocessing?u=76281980&t=279)** And this is something that we need to investigate.
>
> **[4:41](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-data-preprocessing?u=76281980&t=281)** And what happens with this is that if a category is missing, it'll just add missing to that.
>
> **[4:47](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-data-preprocessing?u=76281980&t=287)** So once you've processed the data, you want to take a look at it.
>
> **[4:51](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-data-preprocessing?u=76281980&t=291)** So if there are some categories where the word missing is in there a lot, you'll realize those categories are missing.
>
> **[4:57](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-data-preprocessing?u=76281980&t=297)** And if you're training a model off of this, the pre-processing instead of having nulls there has added just this missing thing.
>
> **[5:05](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-data-preprocessing?u=76281980&t=305)** But you could be training something to categorize for missing and there could be excess values of missing there.
>
> **[5:10](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-data-preprocessing?u=76281980&t=310)** So again, it's just a nice place where you can have yet another eye looking at your data and looking at how you're going to train a model with it.
>
> **[5:19](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-data-preprocessing?u=76281980&t=319)** It's really, really important to just take the time to look through the data that you've have and if the pre-processing that you're doing with really neat tricks to make things more efficient ends up magnifying biases completely unintentionally.
>
> **[5:35](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-data-preprocessing?u=76281980&t=335)** So I've provided this code.
>
> **[5:36](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-data-preprocessing?u=76281980&t=336)** It's houses.py, it's in the download.
>
> **[5:39](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-data-preprocessing?u=76281980&t=339)** It's going to go through that houses dataset.
>
> **[5:41](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-data-preprocessing?u=76281980&t=341)** It's going to do some of the tricks that a data scientist would do, and it's going to look out for them for you and like just warn you about these things.
>
> **[5:49](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-data-preprocessing?u=76281980&t=349)** Thoroughly recommend that you study it, particularly before you use any kind of CSV data, any kind of numerical tabular data for training machine learning models.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (3), let (2), this. (1), case, (1), for. (1)
> **Env Vars:** csv (3), rgb (2)
> **Warnings:** warning (4), watch out (1)
> **Analogies:** for example (2), imagine (2)
> **CLI Commands:** make (2), find (1)
> **File Paths:** houses.py (2)
> **Cross-References:** go back to (1)
> **Tools:** terminal (1)


### 4. Augmenting Data

#### What is data augmentation
> [LinkedIn Learning](https://www.linkedin.com/learning/responsible-ai-and-application-development/what-is-data-augmentation?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/responsible-ai-and-application-development/what-is-data-augmentation?u=76281980&t=1)** - Data augmentation is a powerful technique to help you source data to train your machine learning models.
>
> **[0:07](https://www.linkedin.com/learning/responsible-ai-and-application-development/what-is-data-augmentation?u=76281980&t=7)** The concept is simple, but it is very effective.
>
> **[0:10](https://www.linkedin.com/learning/responsible-ai-and-application-development/what-is-data-augmentation?u=76281980&t=10)** Imagine you're training a model to recognize shoes and you've gathered lots of images of shoes that you're going to train the model with, and a computer vision model will learn features from these images such as laces and soles.
>
> **[0:24](https://www.linkedin.com/learning/responsible-ai-and-application-development/what-is-data-augmentation?u=76281980&t=24)** But what if it saw something like this?
>
> **[0:26](https://www.linkedin.com/learning/responsible-ai-and-application-development/what-is-data-augmentation?u=76281980&t=26)** You know it's a shoe, I know it's a shoe, but the computer won't because it's never seen anything like that before.
>
> **[0:32](https://www.linkedin.com/learning/responsible-ai-and-application-development/what-is-data-augmentation?u=76281980&t=32)** But there's more.
>
> **[0:33](https://www.linkedin.com/learning/responsible-ai-and-application-development/what-is-data-augmentation?u=76281980&t=33)** When you train a model to recognize features, it might even recognize things like the ears on this cat when recognizing a cat.
>
> **[0:41](https://www.linkedin.com/learning/responsible-ai-and-application-development/what-is-data-augmentation?u=76281980&t=41)** But what if it saw an image like this?
>
> **[0:43](https://www.linkedin.com/learning/responsible-ai-and-application-development/what-is-data-augmentation?u=76281980&t=43)** Again, you know it's a cat and I know it's a cat, but if a computer only ever saw ears that were oriented like the image on the left, it might not recognize the one on the right as a cat.
>
> **[0:53](https://www.linkedin.com/learning/responsible-ai-and-application-development/what-is-data-augmentation?u=76281980&t=53)** So, wouldn't it be nice if when we're training the model, that we rotate some of the cat pictures like this, and now the ears on the cat in the training image are similar to those of the cat on the right?
>
> **[1:05](https://www.linkedin.com/learning/responsible-ai-and-application-development/what-is-data-augmentation?u=76281980&t=65)** Then the computer might be able to recognize that the shapes in the image on the right are actually cat's ears.
>
> **[1:11](https://www.linkedin.com/learning/responsible-ai-and-application-development/what-is-data-augmentation?u=76281980&t=71)** And it's not just about rotation.
>
> **[1:13](https://www.linkedin.com/learning/responsible-ai-and-application-development/what-is-data-augmentation?u=76281980&t=73)** For example, look at these images.
>
> **[1:15](https://www.linkedin.com/learning/responsible-ai-and-application-development/what-is-data-augmentation?u=76281980&t=75)** On the left is a human from the horses or humans dataset, and on the right is a picture of a human.
>
> **[1:21](https://www.linkedin.com/learning/responsible-ai-and-application-development/what-is-data-augmentation?u=76281980&t=81)** Now again, you and I see that the one on the right is a man lying in grass, and if the dataset was modified with a sheer algorithm, suddenly the pixels in the image on the left kind of look the same way.
>
> **[1:34](https://www.linkedin.com/learning/responsible-ai-and-application-development/what-is-data-augmentation?u=76281980&t=94)** So a computer could be trained to recognize the one on the right as a human, where there's no data that looks like that in the training dataset.
>
> **[1:43](https://www.linkedin.com/learning/responsible-ai-and-application-development/what-is-data-augmentation?u=76281980&t=103)** A couple more examples.
>
> **[1:45](https://www.linkedin.com/learning/responsible-ai-and-application-development/what-is-data-augmentation?u=76281980&t=105)** On the left is a picture of a woman from the horses or humans dataset, and on the right is a photo of a woman.
>
> **[1:51](https://www.linkedin.com/learning/responsible-ai-and-application-development/what-is-data-augmentation?u=76281980&t=111)** A computer may not recognize her as a woman because the training set had full body height shots where the picture on the right crops the woman off at the waistline.
>
> **[2:01](https://www.linkedin.com/learning/responsible-ai-and-application-development/what-is-data-augmentation?u=76281980&t=121)** But, augmenting the data while training to zoom in on the images could produce one like the image on the left, which is now quite similar and improve the vision of the model to recognize the woman on the right correctly.
>
> **[2:14](https://www.linkedin.com/learning/responsible-ai-and-application-development/what-is-data-augmentation?u=76281980&t=134)** One last example is flipping an image.
>
> **[2:17](https://www.linkedin.com/learning/responsible-ai-and-application-development/what-is-data-augmentation?u=76281980&t=137)** On the left is data from the training set.
>
> **[2:19](https://www.linkedin.com/learning/responsible-ai-and-application-development/what-is-data-augmentation?u=76281980&t=139)** Her right arm is raised.
>
> **[2:21](https://www.linkedin.com/learning/responsible-ai-and-application-development/what-is-data-augmentation?u=76281980&t=141)** On the right is an image that the model may not recognize because her left arm is raised.
>
> **[2:26](https://www.linkedin.com/learning/responsible-ai-and-application-development/what-is-data-augmentation?u=76281980&t=146)** But a flip of the image in the training data now gives us two very similar images, and that's the big idea behind augmentation.
>
> **[2:34](https://www.linkedin.com/learning/responsible-ai-and-application-development/what-is-data-augmentation?u=76281980&t=154)** By applying simple transforms to our existing images, we can create new, valid training examples.
>
> **[2:41](https://www.linkedin.com/learning/responsible-ai-and-application-development/what-is-data-augmentation?u=76281980&t=161)** I've showed a few examples, but of course there could be many more.
>
> **[2:44](https://www.linkedin.com/learning/responsible-ai-and-application-development/what-is-data-augmentation?u=76281980&t=164)** A single image can generate dozens of valid variations through different combinations of transformations.
>
> **[2:51](https://www.linkedin.com/learning/responsible-ai-and-application-development/what-is-data-augmentation?u=76281980&t=171)** A data set of a thousand images could then become tens of thousands.
>
> **[2:55](https://www.linkedin.com/learning/responsible-ai-and-application-development/what-is-data-augmentation?u=76281980&t=175)** It really helps with over-fitting, but it isn't just about quantity.
>
> **[3:00](https://www.linkedin.com/learning/responsible-ai-and-application-development/what-is-data-augmentation?u=76281980&t=180)** Let's also think about quality and diversity.
>
> **[3:03](https://www.linkedin.com/learning/responsible-ai-and-application-development/what-is-data-augmentation?u=76281980&t=183)** It's simple and it's effective and it's relatively easy to do, but, if you're not careful, it can go wrong from a responsibility and an ethics perspective, and we're going to explore that next.

> [!info]- Semantic Content
>
> **CLI Commands:** cat (9)
> **Definitions:** is a  (6), is an  (1)
> **Analogies:** picture (3), imagine (1), such as (1), similar to (1), for example (1)
> **Code Keywords:** this, (1), new, (1), let (1)
> **Speakers:** - data (1)

#### When data augmentation goes wrong
> [LinkedIn Learning](https://www.linkedin.com/learning/responsible-ai-and-application-development/when-data-augmentation-goes-wrong?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/responsible-ai-and-application-development/when-data-augmentation-goes-wrong?u=76281980&t=0)** - In the previous video, we explored how data augmentation can be a powerful technique that helps increase the size and coverage of your dataset to help you build better models.
>
> **[0:11](https://www.linkedin.com/learning/responsible-ai-and-application-development/when-data-augmentation-goes-wrong?u=76281980&t=11)** But with great power, comes great responsibility, and it's important for you to understand how this can cause issues with your data, and impact how your model performs across different classes, and potentially introduce a bias.
>
> **[0:24](https://www.linkedin.com/learning/responsible-ai-and-application-development/when-data-augmentation-goes-wrong?u=76281980&t=24)** For example, consider we have a data set that's overrepresented for one class instead of another.
>
> **[0:30](https://www.linkedin.com/learning/responsible-ai-and-application-development/when-data-augmentation-goes-wrong?u=76281980&t=30)** Like, maybe there's more cats than there are dogs in the data.
>
> **[0:33](https://www.linkedin.com/learning/responsible-ai-and-application-development/when-data-augmentation-goes-wrong?u=76281980&t=33)** As a result, a model that we would build would likely perform better for cats than it would for dogs.
>
> **[0:39](https://www.linkedin.com/learning/responsible-ai-and-application-development/when-data-augmentation-goes-wrong?u=76281980&t=39)** It would be biased around cats, maybe in favor, maybe against, depending on what the model was designed for.
>
> **[0:46](https://www.linkedin.com/learning/responsible-ai-and-application-development/when-data-augmentation-goes-wrong?u=76281980&t=46)** Anyway, you could jump to a conclusion where you could add more dogs to the dataset using data augmentation, and thus, you've balanced your dataset and you've reduced bias.
>
> **[0:55](https://www.linkedin.com/learning/responsible-ai-and-application-development/when-data-augmentation-goes-wrong?u=76281980&t=55)** But, have you?
>
> **[0:56](https://www.linkedin.com/learning/responsible-ai-and-application-development/when-data-augmentation-goes-wrong?u=76281980&t=56)** This situation can be called oversampling, and it introduces a dangerous bias where you have mostly real cats and mostly augmented dogs.
>
> **[1:06](https://www.linkedin.com/learning/responsible-ai-and-application-development/when-data-augmentation-goes-wrong?u=76281980&t=66)** Not a great situation.
>
> **[1:08](https://www.linkedin.com/learning/responsible-ai-and-application-development/when-data-augmentation-goes-wrong?u=76281980&t=68)** Okay, you might say, we could introduce regularity by using less cats.
>
> **[1:12](https://www.linkedin.com/learning/responsible-ai-and-application-development/when-data-augmentation-goes-wrong?u=76281980&t=72)** That way, there's the same number of both.
>
> **[1:14](https://www.linkedin.com/learning/responsible-ai-and-application-development/when-data-augmentation-goes-wrong?u=76281980&t=74)** But, you could be throwing the baby away with the bath water by getting rid of data.
>
> **[1:18](https://www.linkedin.com/learning/responsible-ai-and-application-development/when-data-augmentation-goes-wrong?u=76281980&t=78)** A better term for this is undersampling.
>
> **[1:21](https://www.linkedin.com/learning/responsible-ai-and-application-development/when-data-augmentation-goes-wrong?u=76281980&t=81)** Instead, the smart thing to do is to understand your data set thoroughly.
>
> **[1:26](https://www.linkedin.com/learning/responsible-ai-and-application-development/when-data-augmentation-goes-wrong?u=76281980&t=86)** Explore the scenarios that are missing and enhance those with augmentation as appropriate.
>
> **[1:33](https://www.linkedin.com/learning/responsible-ai-and-application-development/when-data-augmentation-goes-wrong?u=76281980&t=93)** It's not about numbers.
>
> **[1:34](https://www.linkedin.com/learning/responsible-ai-and-application-development/when-data-augmentation-goes-wrong?u=76281980&t=94)** And note, while typically more is better, this is a call to remind you that thoroughly understanding your data is more important.
>
> **[1:42](https://www.linkedin.com/learning/responsible-ai-and-application-development/when-data-augmentation-goes-wrong?u=76281980&t=102)** You need to understand what's missing.
>
> **[1:44](https://www.linkedin.com/learning/responsible-ai-and-application-development/when-data-augmentation-goes-wrong?u=76281980&t=104)** And then you can design an augmentation strategy to fill in those holes.
>
> **[1:49](https://www.linkedin.com/learning/responsible-ai-and-application-development/when-data-augmentation-goes-wrong?u=76281980&t=109)** Okay, my example here is a little bit trivial, but what if this was a real world scenario for something like facial recognition, and what if a model was biased towards a particular class?
>
> **[2:00](https://www.linkedin.com/learning/responsible-ai-and-application-development/when-data-augmentation-goes-wrong?u=76281980&t=120)** It might have more false positives for one group of people.
>
> **[2:04](https://www.linkedin.com/learning/responsible-ai-and-application-development/when-data-augmentation-goes-wrong?u=76281980&t=124)** And, what if that model was about detecting a crime?
>
> **[2:07](https://www.linkedin.com/learning/responsible-ai-and-application-development/when-data-augmentation-goes-wrong?u=76281980&t=127)** Now suddenly, that group of people is impacted more negatively because of a failure in the design of the system.
>
> **[2:15](https://www.linkedin.com/learning/responsible-ai-and-application-development/when-data-augmentation-goes-wrong?u=76281980&t=135)** And the naive belief could be that data augmentation will fix this.
>
> **[2:19](https://www.linkedin.com/learning/responsible-ai-and-application-development/when-data-augmentation-goes-wrong?u=76281980&t=139)** It can help in fixing it, but alone, it's not enough.
>
> **[2:24](https://www.linkedin.com/learning/responsible-ai-and-application-development/when-data-augmentation-goes-wrong?u=76281980&t=144)** So, as I've said, knowing your data is essential.
>
> **[2:28](https://www.linkedin.com/learning/responsible-ai-and-application-development/when-data-augmentation-goes-wrong?u=76281980&t=148)** Testing for all scenarios is essential.
>
> **[2:31](https://www.linkedin.com/learning/responsible-ai-and-application-development/when-data-augmentation-goes-wrong?u=76281980&t=151)** Data augmentation can take you some of the way there, but it's not a magic wand to fix your problems.
>
> **[2:37](https://www.linkedin.com/learning/responsible-ai-and-application-development/when-data-augmentation-goes-wrong?u=76281980&t=157)** In the next video, we're going to get hands-on and I'll show you how to do some fun scenarios using data augmentation.

> [!info]- Semantic Content
>
> **Code Keywords:** for. (1), this. (1)
> **Cross-References:** previous video (1), in the next (1)
> **Definitions:** is a  (2)
> **Analogies:** for example (1)
> **Speakers:** - in (1)

#### Demo of image augmentation with PyTorch
> [LinkedIn Learning](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=0)** - [Instructor] Okay, so in this demo we're going to take a look at the Horses Or Human Dataset.
>
> **[0:03](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=3)** And this is a really interesting dataset for computer vision and machine learning.
>
> **[0:08](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=8)** I created it a few years ago with a few ideas in mind.
>
> **[0:11](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=11)** The first of these ideas was to think about, well, if we wanted to create more and more datasets, it became cost prohibitive to do so, to, for example, hire a photographer to take lots of photographs of horses or humans.
>
> **[0:23](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=23)** So, I was like if I can create photoreal CGI can a machine learning algorithm, then learn the correct features from them to distinguish a horse or a human?
>
> **[0:32](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=32)** And it's interesting from that regard and I'd love you to play with it and see what you can find.
>
> **[0:36](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=36)** For example, you can see an image of a horse on the right here.
>
> **[0:38](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=38)** And this is not a real horse.
>
> **[0:39](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=39)** This was a CGI one that I created.
>
> **[0:42](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=42)** And this horse has a spectacular mane as you can see.
>
> **[0:45](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=45)** And the second reason for this one is to also explore bias and to see what would happen if I deliberately created a dataset where the things that I thought would bring about bias, such as different skin tones, different genders, different lighting, different clothing, if I deliberately created a dataset to overcome all of them, to think about the different ones and have them in the data, would we then still be able to produce an unbiased model?
>
> **[1:13](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=73)** The interesting answer to that question is, no, we were not able to do so.
>
> **[1:17](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=77)** Bias has still crept in and that's why you're doing this course.
>
> **[1:20](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=80)** So, one of the things that we're going to look at is to use this Horses Or Humans Dataset and to use this with image augmentation and to see what image augmentation looks like and the potential things that can creep in when you're using that.
>
> **[1:32](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=92)** So, I'm going to switch over to the code here.
>
> **[1:34](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=94)** I'm running this in Google Colab and this first cell, the code is available to you in the GitHub.
>
> **[1:40](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=100)** So, this first cell, all it's going to do is download the code, download the data for Horse or Human.
>
> **[1:45](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=105)** As you can see, it has both the training set and the validation set.
>
> **[1:48](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=108)** It's downloading those and it's unzipping them.
>
> **[1:50](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=110)** So, then I can create data loaders from them.
>
> **[1:53](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=113)** The second cell is defining the transformations on the data loader.
>
> **[1:57](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=117)** I've commented out this code because this is some of the simple augmentation that I've created for you.
>
> **[2:02](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=122)** I want to run it first without the augmentation.
>
> **[2:05](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=125)** So, I'm going to run this just to define the datasets and the data loaders.
>
> **[2:09](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=129)** Okay, now once that's done, the next cell defines the neural network.
>
> **[2:13](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=133)** And this is just using PyTorch to create a convolutional neural network, which is a number of convolutional 2D layers with batch normalization.
>
> **[2:22](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=142)** Pretty classic network, not a whole lot of thoughts gone into this one, but it demonstrates the point for us.
>
> **[2:27](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=147)** So, I've defined my neural network and next is going to be my training loop.
>
> **[2:31](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=151)** So, if I start running the training loop, we're just going through typical PyTorch training and I want to come down to show you the status.
>
> **[2:38](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=158)** So, we're going to train it for 15 epochs where an epoch is once throughout all of the data.
>
> **[2:43](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=163)** So, we see we start reporting almost immediately.
>
> **[2:46](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=166)** I'm using an A100 collab with this, which means it's going to run pretty quickly.
>
> **[2:50](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=170)** So, even after one epoch, we can see that my accuracy on the training set is 94% and my accuracy on the validation set is 88%.
>
> **[3:00](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=180)** And here's some random examples that it produces from the dataset for you.
>
> **[3:04](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=184)** So, you can start seeing different humans in different poses, some things where it's like cropped off, like this gentleman's hand is cropped off here, or some things where parts of the human is obscured, like this lady's holding up her arm or this lady's standing sideways.
>
> **[3:17](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=197)** This was the one that we actually saw in the slides earlier on.
>
> **[3:21](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=201)** So, as we go through other epochs, we can begin to see I'm 98% accurate after two epochs, but 82% on validation, 99 after three epochs, 85 on invalidation, a hundred percent accuracy after four epochs.
>
> **[3:37](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=217)** And a hundred percent is my least favorite number in machine learning because that tells you something's wrong.
>
> **[3:42](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=222)** You're really never going to get it to a hundred percent.
>
> **[3:45](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=225)** And we're beginning already to see massive, massive, massive overfitting.
>
> **[3:49](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=229)** If your training set is giving you a hundred percent, you already know that you're overfit.
>
> **[3:54](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=234)** But when you look at the delta between the training and the validation, you can see that it's huge, right?
>
> **[4:00](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=240)** 76 to a hundred, 82 to a hundred, 80 to a hundred.
>
> **[4:03](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=243)** So, we've massively overfit to the training set to begin with, with our model architecture and how we've set it up.
>
> **[4:09](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=249)** So, let's think about how data augmentation can fix that.
>
> **[4:12](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=252)** So, I'm just going to stop at training now.
>
> **[4:14](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=254)** There's no point in doing the full 15 epochs.
>
> **[4:18](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=258)** So, if I now go back and recomment this code so that the transformations will happen, (keyboard clicking) so we're going to be doing things like random flips and random rotations, and the affine transformation does things like, again, rotations but also translation where it moves around the image, it scales to zoom, it shears it, and things like that.
>
> **[4:39](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=279)** So, I'm going to run this now to define the new transformations.
>
> **[4:42](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=282)** I'm going to run this just to reinitialize the object for the neural network.
>
> **[4:47](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=287)** And then I'm going to run our training code again and let's see what we get.
>
> **[4:50](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=290)** In those previews of the images, you'll also see now the previews of what they look like post-augmentation and what's the impact going to be on this?
>
> **[4:59](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=299)** Okay, so initially we're seeing that our training set, it's a bit lower, it's 68%, our validation is 50%.
>
> **[5:06](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=306)** I would generally expect 50% because there's two classes, right?
>
> **[5:09](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=309)** So, when something hasn't learned, it's just making random choices and it's able to, from those random choices, kind of get it 50-50, it's a coin flip.
>
> **[5:18](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=318)** Subsequent epochs, you would hope that it would learn a little bit better.
>
> **[5:21](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=321)** And again, we're seeing now the effect of some of these transformations.
>
> **[5:25](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=325)** This poor horse has had part of its head cut off.
>
> **[5:29](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=329)** This lady has lost part of her hand, this lady is kind of zoomed in on and we can see some of the hand is missing.
>
> **[5:34](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=334)** But again, here's a nice idea for us to start learning the features of what makes a human a human and what makes a horse a horse.
>
> **[5:41](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=341)** And is this going to help us prevent overfitting?
>
> **[5:45](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=345)** Well, as we start looking at the epochs, we're beginning to see we're still overfitting, right?
>
> **[5:50](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=350)** So, our training, we're not trending up to a hundred percent as quickly.
>
> **[5:55](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=355)** We're already up to 91% after four epochs.
>
> **[5:59](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=359)** But our validation dataset is getting pretty poor results.
>
> **[6:03](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=363)** You know, a coin flip would be 50% neural network, after five epochs has only gotten up to 57%.
>
> **[6:10](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=370)** So, part of what's happening here is I am probably over-augmenting the images.
>
> **[6:15](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=375)** So, in some cases, like this horse is barely recognizable as a horse.
>
> **[6:20](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=380)** But here's also some of the places where augmentation can make bias worse.
>
> **[6:27](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=387)** So, for example, if we look at this gentleman, he's African American, he's got darker skin, he's wearing darker clothes.
>
> **[6:33](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=393)** As a human, you and I can look at this and we can start to make out features like his forearms and his face.
>
> **[6:38](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=398)** But again, a computer looking at this, looking for features, looking to try to learn features is just seeing a lot of dark pixels.
>
> **[6:45](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=405)** And an image like this one, which is underexposed, is not going to train very well.
>
> **[6:50](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=410)** And as a result, darker skin individuals in the Horses Or Human Dataset actually do a lot worse and it drags down the overall human scores in some architectures.
>
> **[7:00](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=420)** So, despite me augmenting, we can still see that while I'm not overfitting as quickly, I'm not getting to the horrible hundred percent that I don't like, I'm in the nineties, there is still a level of overfitting going on here.
>
> **[7:13](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=433)** So, let me stop this and then just do a couple more augmentations that we can experiment with for fun.
>
> **[7:20](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=440)** The first one of these is, you know, I mentioned like that picture of the gentleman we saw a moment ago was overexposed, so, one of the things that you can do with image augmentation is what's called a color jitter, where you can shake around color, you can shake around like things like brightness and contrast.
>
> **[7:36](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=456)** So, let me add that transformation.
>
> **[7:39](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=459)** Let me run the code again.
>
> **[7:41](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=461)** So, I'm defining the network and now I start training the network, hopefully all these times training it, I'm not going to break it.
>
> **[7:49](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=469)** And let's take a look at the impact on the images and on the training.
>
> **[7:52](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=472)** Remember, image augmentation is a fantastic tool, but hopefully what we're learning from this and what we're seeing very clearly is that it's not a magic bullet that can help us.
>
> **[8:02](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=482)** So, now we can begin to see some of the impact of the image jitter, like this image is a little darker.
>
> **[8:08](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=488)** And we're starting with our training set where I'd expect it to be.
>
> **[8:12](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=492)** I would really like to start my neural network initialized roughly 50-50, 'cause there's two classes, validation is at 50.
>
> **[8:19](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=499)** It's now the second epoch, it's gone up to 61%, which is good, which seems to show that it's learning.
>
> **[8:25](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=505)** But the question is, are we going to continually, horribly overfit?
>
> **[8:30](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=510)** Let's leave it for a little bit longer to see what's happening.
>
> **[8:33](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=513)** And one thing to note is the loss curve.
>
> **[8:35](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=515)** While I'm not drawing it here, you can actually see the numbers.
>
> **[8:38](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=518)** In epoch one, it was 27.
>
> **[8:40](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=520)** In epoch two it was eight.
>
> **[8:42](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=522)** In epoch three it was six.
>
> **[8:43](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=523)** In epoch four it was 1.5.
>
> **[8:45](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=525)** Epoch five it was 0.6.
>
> **[8:48](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=528)** This is a very desirable metric to drive your loss as low as possible.
>
> **[8:52](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=532)** But are we driving it as low as possible while sacrificing quality of our neural network?
>
> **[8:57](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=537)** Well, we still have a level of overfitting here, 69 on training, 65 on validation, 74 on training, 62 on validation.
>
> **[9:06](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=546)** But you can see that we are doing better than we were before.
>
> **[9:09](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=549)** It's not trending to a hundred as quickly on the training set.
>
> **[9:13](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=553)** The gap between the training and validation set, while in my opinion, is still too big, it's heading in the right direction.
>
> **[9:20](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=560)** And a lot of that is because we're beginning to learn multiple features for humans.
>
> **[9:25](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=565)** And effects sometimes of an image being too dark or being too bright are being filtered out by that color jitter that we did.
>
> **[9:32](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=572)** So, again, this is a step in the right direction.
>
> **[9:35](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=575)** Now, let me just do one more.
>
> **[9:37](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=577)** And my encouragement to you is to play with these kind of things for your dataset to see what works.
>
> **[9:42](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=582)** And I'm going to go back to the color jitter and make it a little bit more extreme.
>
> **[9:46](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=586)** So, my color jitter instead of from 0.5 to 1.5, let's say if I go from 0.1 to 2.5, and these numbers are relative.
>
> **[9:58](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=598)** So, if you can imagine the brightness of an image was at one, 0.1 would be 10% brightness, 2.5 would be two point a half times brightness.
>
> **[10:06](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=606)** So, the idea is it's going to pick a random value between the two of them.
>
> **[10:10](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=610)** And similarly with contrast, let me make, you know, say let's, we can go from very low contrast, 10% of what it was to crazy high contrast, let's say 4.2 times what it is.
>
> **[10:20](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=620)** Again, pick a random value between those two and we'll see that when we preview the images.
>
> **[10:25](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=625)** So, if I run this and I run this, again, to define the network and then this cell to do the training, the model will start training in just a moment.
>
> **[10:36](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=636)** So, again, the point here as always is to really, really deeply consider what your network is doing.
>
> **[10:42](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=642)** Any of the work that you can do to optimize your network, to lower the loss, to raise the accuracy, you know, can be really, really good, but you can end up causing problems in your network.
>
> **[10:54](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=654)** And here you can see I've created some crazy contrasts.
>
> **[10:57](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=657)** Here's that same picture that we saw earlier on, and now the man is just an outline.
>
> **[11:02](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=662)** A lady with lighter skin with high contrast like this, at least you can begin to see features like face, arms, and clothing.
>
> **[11:10](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=670)** But we see this is also greatly reducing our overfitting, at least earlier on, right?
>
> **[11:15](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=675)** We're 59 and 59, here, we're 68 and 66.
>
> **[11:19](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=679)** So, by having this great changes in our data by really messing with the augmentation, we're optimizing for our overall training, but is this good for the neural network?
>
> **[11:29](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=689)** And that's something that we're going to be looking at a little further.
>
> **[11:32](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=692)** So, please try out this notebook, have a play with it.
>
> **[11:35](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=695)** Feel free to change any of the values.
>
> **[11:37](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=697)** See if you can build a neural network that's very accurate.
>
> **[11:40](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=700)** And if you're doing so and you want to have a little bit of fun, if you go back to kaggle and the Horses Or Humans Dataset, people have shared a lot of code and there's a lot of notebooks that people have shared over the years to see what they can do with this dataset to be able to try to build a classifier.
>
> **[11:55](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=715)** It's a real challenge to be able to do it.
>
> **[11:57](https://www.linkedin.com/learning/responsible-ai-and-application-development/demo-of-image-augmentation-with-pytorch?u=76281980&t=717)** Some folks have also done transfer learning, have fun with it!

> [!info]- Semantic Content
>
> **Code Keywords:** let (12), this, (4), switch (1), raise (1)
> **Versions:** 1.5 (2), 0.1 (2), 2.5 (2), 0.6 (1), 0.5 (1)
> **Analogies:** for example (3), picture (2), such as (1), it's like (1), imagine (1)
> **Definitions:** is a  (6)
> **CLI Commands:** make (4), find (1)
> **Env Vars:** cgi (2), a100 (1)
> **Cross-References:** go back to (2)
> **Tools:** colab (1), github (1)


### 5. Creating Model Architectures

#### Optimization: Responsible neural architecture design
> [LinkedIn Learning](https://www.linkedin.com/learning/responsible-ai-and-application-development/optimization-responsible-neural-architecture-design?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/responsible-ai-and-application-development/optimization-responsible-neural-architecture-design?u=76281980&t=0)** - So far, we've been looking at data and its role in creating artificially intelligent applications.
>
> **[0:06](https://www.linkedin.com/learning/responsible-ai-and-application-development/optimization-responsible-neural-architecture-design?u=76281980&t=6)** It's one of the most important parts of your system and one of the ways that bias and irresponsible practices can be introduced in a way that ultimately ruins your solution.
>
> **[0:17](https://www.linkedin.com/learning/responsible-ai-and-application-development/optimization-responsible-neural-architecture-design?u=76281980&t=17)** But data is not the only potential source of problems.
>
> **[0:21](https://www.linkedin.com/learning/responsible-ai-and-application-development/optimization-responsible-neural-architecture-design?u=76281980&t=21)** And a focus solely on data can be a naive one when you want to build responsibly.
>
> **[0:26](https://www.linkedin.com/learning/responsible-ai-and-application-development/optimization-responsible-neural-architecture-design?u=76281980&t=26)** You should also focus on your neural network architecture.
>
> **[0:29](https://www.linkedin.com/learning/responsible-ai-and-application-development/optimization-responsible-neural-architecture-design?u=76281980&t=29)** And while this is a very broad area, I would like to introduce you to some general concepts that you need to consider where biases can be introduced without you even being aware of them.
>
> **[0:40](https://www.linkedin.com/learning/responsible-ai-and-application-development/optimization-responsible-neural-architecture-design?u=76281980&t=40)** The first one is optimization objectives.
>
> **[0:43](https://www.linkedin.com/learning/responsible-ai-and-application-development/optimization-responsible-neural-architecture-design?u=76281980&t=43)** There's an old saying, "You are what you measure."
>
> **[0:46](https://www.linkedin.com/learning/responsible-ai-and-application-development/optimization-responsible-neural-architecture-design?u=76281980&t=46)** And often when we look at neural networks and the training of neural networks, our goal is to be as accurate as possible.
>
> **[0:53](https://www.linkedin.com/learning/responsible-ai-and-application-development/optimization-responsible-neural-architecture-design?u=76281980&t=53)** In particular with things like classification models, the common wisdom is that the more accurate the model, the better.
>
> **[0:59](https://www.linkedin.com/learning/responsible-ai-and-application-development/optimization-responsible-neural-architecture-design?u=76281980&t=59)** A computer vision model that achieves accuracy on 95% of the test set is generally seen as better than one that's accurate on say 90% of the test set.
>
> **[1:09](https://www.linkedin.com/learning/responsible-ai-and-application-development/optimization-responsible-neural-architecture-design?u=76281980&t=69)** But is that true or is there a trap hiding in plain sight?
>
> **[1:13](https://www.linkedin.com/learning/responsible-ai-and-application-development/optimization-responsible-neural-architecture-design?u=76281980&t=73)** Think about it for a second.
>
> **[1:14](https://www.linkedin.com/learning/responsible-ai-and-application-development/optimization-responsible-neural-architecture-design?u=76281980&t=74)** Generally, when you're writing code for neural network, you're going to do test training cycles where you'll evaluate loss and accuracy.
>
> **[1:22](https://www.linkedin.com/learning/responsible-ai-and-application-development/optimization-responsible-neural-architecture-design?u=76281980&t=82)** You'll then tweak hyper parameters and model architecture to minimize one, maximize the other, and that all seems to make sense.
>
> **[1:29](https://www.linkedin.com/learning/responsible-ai-and-application-development/optimization-responsible-neural-architecture-design?u=76281980&t=89)** You'll get the optimal one and declare victory, but an important step could easily be overlooked, and that's to explore the data that the model failed on.
>
> **[1:39](https://www.linkedin.com/learning/responsible-ai-and-application-development/optimization-responsible-neural-architecture-design?u=76281980&t=99)** To go back to our hypothetical cats and dogs data set, what if the model that was 95% accurate looked good, but all of the 5% of failures were in dogs?
>
> **[1:50](https://www.linkedin.com/learning/responsible-ai-and-application-development/optimization-responsible-neural-architecture-design?u=76281980&t=110)** And what if the model that was 90% accurate, which looked less good, had an even distribution of failures across cats and dogs?
>
> **[1:57](https://www.linkedin.com/learning/responsible-ai-and-application-development/optimization-responsible-neural-architecture-design?u=76281980&t=117)** Surely we can see that in this case, optimizing for accuracy actually introduced a bias that we weren't aware of.
>
> **[2:05](https://www.linkedin.com/learning/responsible-ai-and-application-development/optimization-responsible-neural-architecture-design?u=76281980&t=125)** We were better off taking a step backwards in our model architecture to see if we can improve the inferior model because it didn't have the built-in bias.
>
> **[2:15](https://www.linkedin.com/learning/responsible-ai-and-application-development/optimization-responsible-neural-architecture-design?u=76281980&t=135)** While this example is hypothetical, it is important to realize that you can introduce biases in every part of the process, even in how you optimize your model code, and that's just one example.
>
> **[2:28](https://www.linkedin.com/learning/responsible-ai-and-application-development/optimization-responsible-neural-architecture-design?u=76281980&t=148)** In the next video, we're going to explore another related one, and that's the sensitivity of your loss function.

> [!info]- Semantic Content
>
> **Code Keywords:** case, (1), function (1)
> **Cross-References:** go back to (1), in the next (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - so (1)

#### Loss: Responsible neural architecture design
> [LinkedIn Learning](https://www.linkedin.com/learning/responsible-ai-and-application-development/loss-responsible-neural-architecture-design?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/responsible-ai-and-application-development/loss-responsible-neural-architecture-design?u=76281980&t=1)** - Previously, we looked at how biases could be introduced inadvertently in the process of optimizing your network architecture and targeting overall accuracy as your metric.
>
> **[0:12](https://www.linkedin.com/learning/responsible-ai-and-application-development/loss-responsible-neural-architecture-design?u=76281980&t=12)** In a similar way, the loss functions that you choose could cause your model to become biased without you being aware of it.
>
> **[0:19](https://www.linkedin.com/learning/responsible-ai-and-application-development/loss-responsible-neural-architecture-design?u=76281980&t=19)** For example, consider cross-entropy loss, which is a powerful loss function when you do categorization and classification models.
>
> **[0:27](https://www.linkedin.com/learning/responsible-ai-and-application-development/loss-responsible-neural-architecture-design?u=76281980&t=27)** The problem lies in the fact that all losses are treated equally by a loss function, but in reality, an error in classification can have a bigger impact on one group than it has on another.
>
> **[0:39](https://www.linkedin.com/learning/responsible-ai-and-application-development/loss-responsible-neural-architecture-design?u=76281980&t=39)** Let's consider an example.
>
> **[0:41](https://www.linkedin.com/learning/responsible-ai-and-application-development/loss-responsible-neural-architecture-design?u=76281980&t=41)** Imagine a model that's classifying resumes for a job as being qualified or not qualified.
>
> **[0:46](https://www.linkedin.com/learning/responsible-ai-and-application-development/loss-responsible-neural-architecture-design?u=76281980&t=46)** And let's say the training data includes 900 resumes from women and 100 resumes from men.
>
> **[0:53](https://www.linkedin.com/learning/responsible-ai-and-application-development/loss-responsible-neural-architecture-design?u=76281980&t=53)** An error would be when the model classifies a resume incorrectly with either a false positive, claiming they're qualified when they're not, or a false negative, claiming they're not qualified when they are.
>
> **[1:06](https://www.linkedin.com/learning/responsible-ai-and-application-development/loss-responsible-neural-architecture-design?u=76281980&t=66)** Now, let's say that the error rate is roughly the same, about 10%.
>
> **[1:10](https://www.linkedin.com/learning/responsible-ai-and-application-development/loss-responsible-neural-architecture-design?u=76281980&t=70)** In the case of the women, the 10% error rate would equate to 90 mistakes.
>
> **[1:15](https://www.linkedin.com/learning/responsible-ai-and-application-development/loss-responsible-neural-architecture-design?u=76281980&t=75)** In the case of the men, the 10% error rate would equate to 10 mistakes.
>
> **[1:20](https://www.linkedin.com/learning/responsible-ai-and-application-development/loss-responsible-neural-architecture-design?u=76281980&t=80)** The percentages are the same, so the impact on a per-gender basis appears to be the same.
>
> **[1:26](https://www.linkedin.com/learning/responsible-ai-and-application-development/loss-responsible-neural-architecture-design?u=76281980&t=86)** But let's look deeper.
>
> **[1:28](https://www.linkedin.com/learning/responsible-ai-and-application-development/loss-responsible-neural-architecture-design?u=76281980&t=88)** When we look at the cumulative loss, a loss function like cross-entropy calculates a value associated with that loss.
>
> **[1:35](https://www.linkedin.com/learning/responsible-ai-and-application-development/loss-responsible-neural-architecture-design?u=76281980&t=95)** The details of that are beyond the scope of this video, but I'll just assign a value to the loss based on the probability.
>
> **[1:42](https://www.linkedin.com/learning/responsible-ai-and-application-development/loss-responsible-neural-architecture-design?u=76281980&t=102)** So, for example, if a resume is a qualified one and we calculated a 10% probability of that, the score will be 2.3 based on the cross-entropy loss calculation.
>
> **[1:55](https://www.linkedin.com/learning/responsible-ai-and-application-development/loss-responsible-neural-architecture-design?u=76281980&t=115)** For the sake of simplicity, I'm just going to use that number for all errors.
>
> **[1:58](https://www.linkedin.com/learning/responsible-ai-and-application-development/loss-responsible-neural-architecture-design?u=76281980&t=118)** But in reality, there'll be a different one calculated across all of the different errors.
>
> **[2:03](https://www.linkedin.com/learning/responsible-ai-and-application-development/loss-responsible-neural-architecture-design?u=76281980&t=123)** So the 10 miscategorized resumes from men would have a total score of 23, and the 90 miscategorized resumes from women would have a total error score of 2,070.
>
> **[2:15](https://www.linkedin.com/learning/responsible-ai-and-application-development/loss-responsible-neural-architecture-design?u=76281980&t=135)** So when we combine these for a total error score of 2,093, the errors from the male resumes could get lost in the noise.
>
> **[2:24](https://www.linkedin.com/learning/responsible-ai-and-application-development/loss-responsible-neural-architecture-design?u=76281980&t=144)** The majority group errors overwhelm the minority group errors, and when a model is optimized for low loss, it's effectively rewarded by ignoring the minority group.
>
> **[2:36](https://www.linkedin.com/learning/responsible-ai-and-application-development/loss-responsible-neural-architecture-design?u=76281980&t=156)** So you now have a biased model.
>
> **[2:39](https://www.linkedin.com/learning/responsible-ai-and-application-development/loss-responsible-neural-architecture-design?u=76281980&t=159)** Fixing this depends on your data and your model, and being up to date on the latest research is a great step forward so you can understand issues like this one and techniques to avoid it.
>
> **[2:51](https://www.linkedin.com/learning/responsible-ai-and-application-development/loss-responsible-neural-architecture-design?u=76281980&t=171)** For this specific issue, there are new loss functions like focal loss or weighted loss that can help mitigate it.
>
> **[2:57](https://www.linkedin.com/learning/responsible-ai-and-application-development/loss-responsible-neural-architecture-design?u=76281980&t=177)** Or, if you go back to your data, when you've identified a minority class, you can re-sample the data.
>
> **[3:03](https://www.linkedin.com/learning/responsible-ai-and-application-development/loss-responsible-neural-architecture-design?u=76281980&t=183)** And that's an important note.
>
> **[3:05](https://www.linkedin.com/learning/responsible-ai-and-application-development/loss-responsible-neural-architecture-design?u=76281980&t=185)** You may have minority classes that you don't immediately recognize.
>
> **[3:09](https://www.linkedin.com/learning/responsible-ai-and-application-development/loss-responsible-neural-architecture-design?u=76281980&t=189)** We tend to gravitate toward things that we can understand easily, like the gender I just used in this example.
>
> **[3:15](https://www.linkedin.com/learning/responsible-ai-and-application-development/loss-responsible-neural-architecture-design?u=76281980&t=195)** But minority groups might be far more subtle than that.
>
> **[3:19](https://www.linkedin.com/learning/responsible-ai-and-application-development/loss-responsible-neural-architecture-design?u=76281980&t=199)** And as you build your model and explore the outliers in your groups that have higher loss than others, you could then identify subgroups that you would've never have thought of, and these could be impacted.
>
> **[3:30](https://www.linkedin.com/learning/responsible-ai-and-application-development/loss-responsible-neural-architecture-design?u=76281980&t=210)** So it's always good to think about your code and about your model architecture and continually push the boundaries of what it's categorizing or learning about.
>
> **[3:40](https://www.linkedin.com/learning/responsible-ai-and-application-development/loss-responsible-neural-architecture-design?u=76281980&t=220)** You never know what biases you might find lurking in there.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), function (3), class, (1)
> **Definitions:** is a  (3)
> **Analogies:** for example (2), imagine (1)
> **CLI Commands:** find (1)
> **Versions:** 2.3 (1)
> **Cross-References:** go back to (1)
> **Warnings:** important note (1)
> **Speakers:** - previously (1)

#### Others: Responsible neural architecture design
> [LinkedIn Learning](https://www.linkedin.com/learning/responsible-ai-and-application-development/others-responsible-neural-architecture-design?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/responsible-ai-and-application-development/others-responsible-neural-architecture-design?u=76281980&t=1)** - In the previous couple of videos we explored how a neural network learning from the results of the optimization process and loss calculation can be rewarded for becoming biased.
>
> **[0:11](https://www.linkedin.com/learning/responsible-ai-and-application-development/others-responsible-neural-architecture-design?u=76281980&t=11)** And as a result, it could inadvertently introduce bias into your applications.
>
> **[0:16](https://www.linkedin.com/learning/responsible-ai-and-application-development/others-responsible-neural-architecture-design?u=76281980&t=16)** But there are lots more ways for this error to happen, and it would take many books to explore them all.
>
> **[0:20](https://www.linkedin.com/learning/responsible-ai-and-application-development/others-responsible-neural-architecture-design?u=76281980&t=20)** There are a few things that you should consider, and they're these, feature extraction capability.
>
> **[0:27](https://www.linkedin.com/learning/responsible-ai-and-application-development/others-responsible-neural-architecture-design?u=76281980&t=27)** Deep architectures often learn complex features in combination.
>
> **[0:31](https://www.linkedin.com/learning/responsible-ai-and-application-development/others-responsible-neural-architecture-design?u=76281980&t=31)** The lower layers typically learn things like edge detection, color gradients, or simple shapes.
>
> **[0:37](https://www.linkedin.com/learning/responsible-ai-and-application-development/others-responsible-neural-architecture-design?u=76281980&t=37)** The middle layers generally combine these into things like textured common parts, spatial arrangements, and a whole lot more.
>
> **[0:45](https://www.linkedin.com/learning/responsible-ai-and-application-development/others-responsible-neural-architecture-design?u=76281980&t=45)** The higher layers then learn complex features of aggregates of these so complete objects, abstract concepts, or even relationships between features.
>
> **[0:53](https://www.linkedin.com/learning/responsible-ai-and-application-development/others-responsible-neural-architecture-design?u=76281980&t=53)** Why is this important?
>
> **[0:56](https://www.linkedin.com/learning/responsible-ai-and-application-development/others-responsible-neural-architecture-design?u=76281980&t=56)** Well, if you followed good data sanitization and augmentation processes, you might be working to exclude protected attributes like race, gender, or age in an attempt to prevent bias.
>
> **[1:08](https://www.linkedin.com/learning/responsible-ai-and-application-development/others-responsible-neural-architecture-design?u=76281980&t=68)** But the model might reconstruct these from aggregate features that correlate and as a result will reintroduce those biases from the aggregate features.
>
> **[1:19](https://www.linkedin.com/learning/responsible-ai-and-application-development/others-responsible-neural-architecture-design?u=76281980&t=79)** So you do need to keep a close eye on the feature set that the model learns, so you can minimize issues like this.
>
> **[1:27](https://www.linkedin.com/learning/responsible-ai-and-application-development/others-responsible-neural-architecture-design?u=76281980&t=87)** Another issue to consider, particularly with language models is that models can memorize data very effectively, consider, for example, a large data set about professions.
>
> **[1:38](https://www.linkedin.com/learning/responsible-ai-and-application-development/others-responsible-neural-architecture-design?u=76281980&t=98)** This data set might have a lot of historical examples, but the trends have changed over time.
>
> **[1:45](https://www.linkedin.com/learning/responsible-ai-and-application-development/others-responsible-neural-architecture-design?u=76281980&t=105)** So for example, data for gender ratios in a particular job in the 1970s will be very different than the data for the same thing today.
>
> **[1:55](https://www.linkedin.com/learning/responsible-ai-and-application-development/others-responsible-neural-architecture-design?u=76281980&t=115)** And as a result, if the LLM learned from that data without the historical context, it would see all of the data as being considered equal.
>
> **[2:05](https://www.linkedin.com/learning/responsible-ai-and-application-development/others-responsible-neural-architecture-design?u=76281980&t=125)** And as you're creating the code for the network architecture or data training, you could introduce that type of bias, thus thorough understanding of your data, which will allow you to add weights to data that's more appropriate for the current time.
>
> **[2:19](https://www.linkedin.com/learning/responsible-ai-and-application-development/others-responsible-neural-architecture-design?u=76281980&t=139)** And the coding skills to do this are essential to mitigate an issue like this.
>
> **[2:25](https://www.linkedin.com/learning/responsible-ai-and-application-development/others-responsible-neural-architecture-design?u=76281980&t=145)** And these are just two examples. There's many, many more.
>
> **[2:28](https://www.linkedin.com/learning/responsible-ai-and-application-development/others-responsible-neural-architecture-design?u=76281980&t=148)** So if you take nothing else away from this section and this course, let it be a reminder that it's not just the data, you can fix and clean your data, and still have biases in your model.
>
> **[2:39](https://www.linkedin.com/learning/responsible-ai-and-application-development/others-responsible-neural-architecture-design?u=76281980&t=159)** It takes hard work and detailed awareness of your code as well as your data to mitigate this, but the reward is so worth it.

> [!info]- Semantic Content
>
> **Code Keywords:** this. (2), abstract (1), protected (1), let (1), this, (1)
> **Analogies:** for example (2)
> **Env Vars:** llm (1)
> **Speakers:** - in (1)


### 6. Transfer Learning

#### What is transfer learning?
> [LinkedIn Learning](https://www.linkedin.com/learning/responsible-ai-and-application-development/what-is-transfer-learning?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/responsible-ai-and-application-development/what-is-transfer-learning?u=76281980&t=1)** - We've looked at your data and your system architecture, and we've identified places where you could think about potential biases.
>
> **[0:08](https://www.linkedin.com/learning/responsible-ai-and-application-development/what-is-transfer-learning?u=76281980&t=8)** One other important aspect in creating a machine learning model is to think about transfer learning.
>
> **[0:14](https://www.linkedin.com/learning/responsible-ai-and-application-development/what-is-transfer-learning?u=76281980&t=14)** So, what is transfer learning?
>
> **[0:16](https://www.linkedin.com/learning/responsible-ai-and-application-development/what-is-transfer-learning?u=76281980&t=16)** Well, the idea here is that existing machine learning models trained by others who may have a lot more data and compute power than you do, are likely to have learned a lot of generalized features.
>
> **[0:27](https://www.linkedin.com/learning/responsible-ai-and-application-development/what-is-transfer-learning?u=76281980&t=27)** And then you can build on those for your particular features.
>
> **[0:32](https://www.linkedin.com/learning/responsible-ai-and-application-development/what-is-transfer-learning?u=76281980&t=32)** Now, that sounds and looks like a little bit of a mouthful, so let me explain with a real world example.
>
> **[0:37](https://www.linkedin.com/learning/responsible-ai-and-application-development/what-is-transfer-learning?u=76281980&t=37)** Say, you're building an app to identify if a plant leaf is diseased or not, and you have just a few hundred images.
>
> **[0:45](https://www.linkedin.com/learning/responsible-ai-and-application-development/what-is-transfer-learning?u=76281980&t=45)** If you were to build from scratch, you'd need an ML model that recognizes everything, from edges and textures, all the way up to complex patterns.
>
> **[0:54](https://www.linkedin.com/learning/responsible-ai-and-application-development/what-is-transfer-learning?u=76281980&t=54)** This is the architecture for the popular ResNet model, and you might not have enough data to be able to do that properly.
>
> **[1:01](https://www.linkedin.com/learning/responsible-ai-and-application-development/what-is-transfer-learning?u=76281980&t=61)** But you could use an existing model like ResNet that's already been trained on millions of images and it has already learned to recognize these things.
>
> **[1:11](https://www.linkedin.com/learning/responsible-ai-and-application-development/what-is-transfer-learning?u=76281980&t=71)** Now, of course, it didn't do them for plant diseases.
>
> **[1:13](https://www.linkedin.com/learning/responsible-ai-and-application-development/what-is-transfer-learning?u=76281980&t=73)** And, in this case, it would just see a leaf and wouldn't be able to go any deeper.
>
> **[1:17](https://www.linkedin.com/learning/responsible-ai-and-application-development/what-is-transfer-learning?u=76281980&t=77)** However, from looking at millions of other images, it might be successful to help you with your plant disease classifier.
>
> **[1:24](https://www.linkedin.com/learning/responsible-ai-and-application-development/what-is-transfer-learning?u=76281980&t=84)** And typically, you'll do this through a process called fine-tuning.
>
> **[1:29](https://www.linkedin.com/learning/responsible-ai-and-application-development/what-is-transfer-learning?u=76281980&t=89)** You get to keep most of the learned patterns from that model and just retrain the final layers of the network to combine these in what you need to classify plant diseases.
>
> **[1:41](https://www.linkedin.com/learning/responsible-ai-and-application-development/what-is-transfer-learning?u=76281980&t=101)** So, instead of training all this, you'll probably just train this.
>
> **[1:45](https://www.linkedin.com/learning/responsible-ai-and-application-development/what-is-transfer-learning?u=76281980&t=105)** A lot less work and a lot less data.
>
> **[1:48](https://www.linkedin.com/learning/responsible-ai-and-application-development/what-is-transfer-learning?u=76281980&t=108)** It's a bit like working with a professional, experienced photographer.
>
> **[1:52](https://www.linkedin.com/learning/responsible-ai-and-application-development/what-is-transfer-learning?u=76281980&t=112)** They may have never taken a picture of a particular item before, but the general skills that they have can make them an expert in that.
>
> **[2:00](https://www.linkedin.com/learning/responsible-ai-and-application-development/what-is-transfer-learning?u=76281980&t=120)** They already know all the things like lighting, composition and focus, and those general skills will work for the particular environment.
>
> **[2:08](https://www.linkedin.com/learning/responsible-ai-and-application-development/what-is-transfer-learning?u=76281980&t=128)** In coding terms, transfer learning is surprisingly straightforward.
>
> **[2:13](https://www.linkedin.com/learning/responsible-ai-and-application-development/what-is-transfer-learning?u=76281980&t=133)** With frameworks like PyTorch or TensorFlow, you can take a pre-trained model, you can freeze most of the layers to preserve their knowledge, and then you can replace the final classification layer with one that's suited to your task.
>
> **[2:26](https://www.linkedin.com/learning/responsible-ai-and-application-development/what-is-transfer-learning?u=76281980&t=146)** So, for example, instead of classifying thousands of items, you might only want diseased or not diseased, which is just two output neurons.
>
> **[2:35](https://www.linkedin.com/learning/responsible-ai-and-application-development/what-is-transfer-learning?u=76281980&t=155)** And then you can train a model in minutes or hours, instead of days, with maybe only a few hundred pieces of data instead of millions.
>
> **[2:43](https://www.linkedin.com/learning/responsible-ai-and-application-development/what-is-transfer-learning?u=76281980&t=163)** But, there are risks involved with this, and we'll explore those next.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (2), let (1), case, (1), this. (1)
> **Analogies:** picture (1), for example (1)
> **CLI Commands:** make (1)
> **Speakers:** - we (1)

#### The risks of transfer learning: Inheriting bias
> [LinkedIn Learning](https://www.linkedin.com/learning/responsible-ai-and-application-development/the-risks-of-transfer-learning-inheriting-bias?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/responsible-ai-and-application-development/the-risks-of-transfer-learning-inheriting-bias?u=76281980&t=1)** - So we've just looked at transfer learning and how powerful it can be to help you build models without having to do it from scratch.
>
> **[0:08](https://www.linkedin.com/learning/responsible-ai-and-application-development/the-risks-of-transfer-learning-inheriting-bias?u=76281980&t=8)** But there is something that you should be aware of, and that is the risk of inheriting issues with responsible AI, such as inbuilt biases, from that model that you're building on top of.
>
> **[0:19](https://www.linkedin.com/learning/responsible-ai-and-application-development/the-risks-of-transfer-learning-inheriting-bias?u=76281980&t=19)** For example, take ImageNet.
>
> **[0:21](https://www.linkedin.com/learning/responsible-ai-and-application-development/the-risks-of-transfer-learning-inheriting-bias?u=76281980&t=21)** It's one of the most widely used datasets for pre-trained computer vision models, ones such as AlexNet, ResNet, Inception, and Mobile Net, and many, many others as well.
>
> **[0:31](https://www.linkedin.com/learning/responsible-ai-and-application-development/the-risks-of-transfer-learning-inheriting-bias?u=76281980&t=31)** These models are some of the most widely used, particularly in transfer learning scenarios.
>
> **[0:37](https://www.linkedin.com/learning/responsible-ai-and-application-development/the-risks-of-transfer-learning-inheriting-bias?u=76281980&t=37)** In the past, I've built many apps that use Mobile Net, for example, because of its compact nature, it's easy, it's quick to retrain, it makes on device vision intelligence super easy.
>
> **[0:49](https://www.linkedin.com/learning/responsible-ai-and-application-development/the-risks-of-transfer-learning-inheriting-bias?u=76281980&t=49)** But the ImageNet dataset that was used to train it has now been demonstrated to contain massively problematic content and demographic skews.
>
> **[0:59](https://www.linkedin.com/learning/responsible-ai-and-application-development/the-risks-of-transfer-learning-inheriting-bias?u=76281980&t=59)** In the 2020 paper by Prabhu and Birhane called "Large Datasets: A Pyrrhic Win for Computer Vision?"
>
> **[1:05](https://www.linkedin.com/learning/responsible-ai-and-application-development/the-risks-of-transfer-learning-inheriting-bias?u=76281980&t=65)** they documented many massively problematic issues with images in this dataset.
>
> **[1:11](https://www.linkedin.com/learning/responsible-ai-and-application-development/the-risks-of-transfer-learning-inheriting-bias?u=76281980&t=71)** I thoroughly recommend that you read this paper if you consider building any applications with transfer learning and to read it with an open mind.
>
> **[1:20](https://www.linkedin.com/learning/responsible-ai-and-application-development/the-risks-of-transfer-learning-inheriting-bias?u=76281980&t=80)** Their findings are from one dataset, but the techniques that they use can apply to any.
>
> **[1:25](https://www.linkedin.com/learning/responsible-ai-and-application-development/the-risks-of-transfer-learning-inheriting-bias?u=76281980&t=85)** But I do want to call out that the ImageNet team have been working hard to constantly improve the dataset and fix those issues with bias.
>
> **[1:33](https://www.linkedin.com/learning/responsible-ai-and-application-development/the-risks-of-transfer-learning-inheriting-bias?u=76281980&t=93)** Please keep an eye on their work at their website.
>
> **[1:36](https://www.linkedin.com/learning/responsible-ai-and-application-development/the-risks-of-transfer-learning-inheriting-bias?u=76281980&t=96)** But reading papers like this did change the way that I do things.
>
> **[1:40](https://www.linkedin.com/learning/responsible-ai-and-application-development/the-risks-of-transfer-learning-inheriting-bias?u=76281980&t=100)** I could not just assume that my models were bias-free because I didn't have biased data or practices of my own.
>
> **[1:47](https://www.linkedin.com/learning/responsible-ai-and-application-development/the-risks-of-transfer-learning-inheriting-bias?u=76281980&t=107)** And of course, it's not just vision models.
>
> **[1:49](https://www.linkedin.com/learning/responsible-ai-and-application-development/the-risks-of-transfer-learning-inheriting-bias?u=76281980&t=109)** Language models can have built-in bias also, and building applications that either fine tune them via transfer learning or just use them via prompting will still carry inherent risk.
>
> **[2:00](https://www.linkedin.com/learning/responsible-ai-and-application-development/the-risks-of-transfer-learning-inheriting-bias?u=76281980&t=120)** We spoke about this a little earlier when we looked at model cards and nutrition labels.
>
> **[2:05](https://www.linkedin.com/learning/responsible-ai-and-application-development/the-risks-of-transfer-learning-inheriting-bias?u=76281980&t=125)** Some models like BERT will disclose any inherent biases, which is really useful, but I always urge you to look further before you build on them.
>
> **[2:14](https://www.linkedin.com/learning/responsible-ai-and-application-development/the-risks-of-transfer-learning-inheriting-bias?u=76281980&t=134)** For example, sticking with BERT for a moment, research such as that done by Hardmeier, Basta, et. al., published in the "Association for Computational Linguistics" compared 63 different models using BERT and fine tuning, and it showed that all of them yielded gender biases in language.
>
> **[2:33](https://www.linkedin.com/learning/responsible-ai-and-application-development/the-risks-of-transfer-learning-inheriting-bias?u=76281980&t=153)** It's good to read up on stuff like this to help you in your decision-making process when you're building on top of existing models.
>
> **[2:41](https://www.linkedin.com/learning/responsible-ai-and-application-development/the-risks-of-transfer-learning-inheriting-bias?u=76281980&t=161)** So what can you do as a developer?
>
> **[2:42](https://www.linkedin.com/learning/responsible-ai-and-application-development/the-risks-of-transfer-learning-inheriting-bias?u=76281980&t=162)** Well, first, don't let me scare you off of transfer learning.
>
> **[2:45](https://www.linkedin.com/learning/responsible-ai-and-application-development/the-risks-of-transfer-learning-inheriting-bias?u=76281980&t=165)** It's a wonderful and a powerful technique.
>
> **[2:48](https://www.linkedin.com/learning/responsible-ai-and-application-development/the-risks-of-transfer-learning-inheriting-bias?u=76281980&t=168)** But do be aware that when you build on other people's work, you're inheriting risk, so you should understand everything about their work.
>
> **[2:56](https://www.linkedin.com/learning/responsible-ai-and-application-development/the-risks-of-transfer-learning-inheriting-bias?u=76281980&t=176)** Look up papers like the ones that I mentioned, explore different models or new versions of datasets that have been fixed in the wake of responsible AI research.
>
> **[3:06](https://www.linkedin.com/learning/responsible-ai-and-application-development/the-risks-of-transfer-learning-inheriting-bias?u=76281980&t=186)** It's good practice to always consider alternatives, and it's always good practice to ask yourself if it is worth the performance of productivity savings you might get from problematic models at the cost of perpetuating harmful biases.
>
> **[3:21](https://www.linkedin.com/learning/responsible-ai-and-application-development/the-risks-of-transfer-learning-inheriting-bias?u=76281980&t=201)** Even if your training set and your retraining does not contain those biases, like building a plant disease classifier on top of MobileNet, you still take the risk of associating yourself with problematic stuff should you not go into it with eyes wide open.
>
> **[3:38](https://www.linkedin.com/learning/responsible-ai-and-application-development/the-risks-of-transfer-learning-inheriting-bias?u=76281980&t=218)** The future of AI depends not just on our technical capabilities, but on our commitment to building systems that work for everyone, and that can involve weeding out problematic issues, even if it's inconvenient for us.

> [!info]- Semantic Content
>
> **Analogies:** such as (3), for example (3)
> **Env Vars:** bert (3)
> **Code Keywords:** super (1), let (1)
> **Best Practices:** good practice (2)
> **Warnings:** be aware (2)
> **Speakers:** - so (1)

#### The risks of fine-tuning: Inheriting bias
> [LinkedIn Learning](https://www.linkedin.com/learning/responsible-ai-and-application-development/the-risks-of-fine-tuning-inheriting-bias?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/responsible-ai-and-application-development/the-risks-of-fine-tuning-inheriting-bias?u=76281980&t=1)** - When looking at language models, we should also understand that there may be underlying biases in the model, and if we fine tune based on that model, we could inherit those biases.
>
> **[0:11](https://www.linkedin.com/learning/responsible-ai-and-application-development/the-risks-of-fine-tuning-inheriting-bias?u=76281980&t=11)** Let me show you with a simple example, and that's the BERT model, which is one of the foundational ones in language exploration.
>
> **[0:19](https://www.linkedin.com/learning/responsible-ai-and-application-development/the-risks-of-fine-tuning-inheriting-bias?u=76281980&t=19)** If I take these sets of words, which are obviously gendered, one set that's male-focused and another that's female-focused, I could use code like this to get the base BERT model and also get the embeddings within BERT for a particular word.
>
> **[0:34](https://www.linkedin.com/learning/responsible-ai-and-application-development/the-risks-of-fine-tuning-inheriting-bias?u=76281980&t=34)** So then my sets of words about genders can be converted into embeddings like this.
>
> **[0:40](https://www.linkedin.com/learning/responsible-ai-and-application-development/the-risks-of-fine-tuning-inheriting-bias?u=76281980&t=40)** We iterate through both arrays and we call our get embeddings to create associated arrays of male and female embeddings.
>
> **[0:48](https://www.linkedin.com/learning/responsible-ai-and-application-development/the-risks-of-fine-tuning-inheriting-bias?u=76281980&t=48)** If you're not familiar with embeddings, a simple explanation is that they're a vector in a higher dimensional space.
>
> **[0:55](https://www.linkedin.com/learning/responsible-ai-and-application-development/the-risks-of-fine-tuning-inheriting-bias?u=76281980&t=55)** Similar words will have similar directions within that vector.
>
> **[1:00](https://www.linkedin.com/learning/responsible-ai-and-application-development/the-risks-of-fine-tuning-inheriting-bias?u=76281980&t=60)** So for example, if it was in 3D space, and I point this way for man and this way for brother, they're kind of similar.
>
> **[1:07](https://www.linkedin.com/learning/responsible-ai-and-application-development/the-risks-of-fine-tuning-inheriting-bias?u=76281980&t=67)** And in the same way, it might be this way for woman and this way for sister.
>
> **[1:12](https://www.linkedin.com/learning/responsible-ai-and-application-development/the-risks-of-fine-tuning-inheriting-bias?u=76281980&t=72)** These embeddings are learned over time by the model.
>
> **[1:15](https://www.linkedin.com/learning/responsible-ai-and-application-development/the-risks-of-fine-tuning-inheriting-bias?u=76281980&t=75)** The logic is that if we look at the embeddings for gendered words and then we look at the embeddings for something else, like professions for example, then we can explore if the model has a bias towards a particular gender for a particular profession.
>
> **[1:32](https://www.linkedin.com/learning/responsible-ai-and-application-development/the-risks-of-fine-tuning-inheriting-bias?u=76281980&t=92)** So if male-oriented words point this way and female ones point this way, and engineer is kind of over here, then we can demonstrate scientifically and mathematically that the model has a bias towards engineers being male.
>
> **[1:49](https://www.linkedin.com/learning/responsible-ai-and-application-development/the-risks-of-fine-tuning-inheriting-bias?u=76281980&t=109)** So it's probably a good idea to get a general sense for the embedding that represents maleness and femaleness instead of a bunch of different similar vectors for each.
>
> **[2:00](https://www.linkedin.com/learning/responsible-ai-and-application-development/the-risks-of-fine-tuning-inheriting-bias?u=76281980&t=120)** And we can do that with code like this.
>
> **[2:02](https://www.linkedin.com/learning/responsible-ai-and-application-development/the-risks-of-fine-tuning-inheriting-bias?u=76281980&t=122)** It first calculates the mean of each of the embeddings to give us an overall average vector for each.
>
> **[2:09](https://www.linkedin.com/learning/responsible-ai-and-application-development/the-risks-of-fine-tuning-inheriting-bias?u=76281980&t=129)** By subtracting one from the other, we end up with a sense of direction along the same axis, kind of like this way for male, this way for female, and in this case, that will end up in the plus direction for male and the negative direction for female.
>
> **[2:23](https://www.linkedin.com/learning/responsible-ai-and-application-development/the-risks-of-fine-tuning-inheriting-bias?u=76281980&t=143)** Of course, this is purely arbitrary, there's no value there.
>
> **[2:26](https://www.linkedin.com/learning/responsible-ai-and-application-development/the-risks-of-fine-tuning-inheriting-bias?u=76281980&t=146)** If we wanted it to be the other way around, we could just subtract male from female and then would have plus for female, negative for male.
>
> **[2:33](https://www.linkedin.com/learning/responsible-ai-and-application-development/the-risks-of-fine-tuning-inheriting-bias?u=76281980&t=153)** The second line of code then normalizes this into effectively a range from minus one for female to plus one for male, and that just keeps the math simple.
>
> **[2:43](https://www.linkedin.com/learning/responsible-ai-and-application-development/the-risks-of-fine-tuning-inheriting-bias?u=76281980&t=163)** So now let's explore some professions and we'll see their intersections with gender.
>
> **[2:48](https://www.linkedin.com/learning/responsible-ai-and-application-development/the-risks-of-fine-tuning-inheriting-bias?u=76281980&t=168)** And here's a set of words describing professions, and we'll calculate the BERT embeddings for them.
>
> **[2:54](https://www.linkedin.com/learning/responsible-ai-and-application-development/the-risks-of-fine-tuning-inheriting-bias?u=76281980&t=174)** We have a normalized gender direction.
>
> **[2:56](https://www.linkedin.com/learning/responsible-ai-and-application-development/the-risks-of-fine-tuning-inheriting-bias?u=76281980&t=176)** We have embeddings for the professions.
>
> **[2:59](https://www.linkedin.com/learning/responsible-ai-and-application-development/the-risks-of-fine-tuning-inheriting-bias?u=76281980&t=179)** So now we can calculate the bias by getting the dot product of these.
>
> **[3:03](https://www.linkedin.com/learning/responsible-ai-and-application-development/the-risks-of-fine-tuning-inheriting-bias?u=76281980&t=183)** And here are the results.
>
> **[3:04](https://www.linkedin.com/learning/responsible-ai-and-application-development/the-risks-of-fine-tuning-inheriting-bias?u=76281980&t=184)** Now, they may surprise you.
>
> **[3:06](https://www.linkedin.com/learning/responsible-ai-and-application-development/the-risks-of-fine-tuning-inheriting-bias?u=76281980&t=186)** Every single one of these values is negative, and this indicates that BERT has a biased association with each of these professions for women.
>
> **[3:15](https://www.linkedin.com/learning/responsible-ai-and-application-development/the-risks-of-fine-tuning-inheriting-bias?u=76281980&t=195)** In some cases, the association is very strong, like with nurse.
>
> **[3:19](https://www.linkedin.com/learning/responsible-ai-and-application-development/the-risks-of-fine-tuning-inheriting-bias?u=76281980&t=199)** In others, it's weaker, but it's still a female-oriented bias in the language, for example, engineer or scientist.
>
> **[3:27](https://www.linkedin.com/learning/responsible-ai-and-application-development/the-risks-of-fine-tuning-inheriting-bias?u=76281980&t=207)** Now, before we jump to any conclusions about this, let's realize that this was a relatively simple test with a few words.
>
> **[3:34](https://www.linkedin.com/learning/responsible-ai-and-application-development/the-risks-of-fine-tuning-inheriting-bias?u=76281980&t=214)** It has strong signals that BERT has a female bias for these professions, but further investigations would be needed before we get too upset about it.
>
> **[3:43](https://www.linkedin.com/learning/responsible-ai-and-application-development/the-risks-of-fine-tuning-inheriting-bias?u=76281980&t=223)** And that being said, I think it's a good demonstration of bias in an underlying model and how you can inherit that bias if you fine tune despite your best intentions.
>
> **[3:54](https://www.linkedin.com/learning/responsible-ai-and-application-development/the-risks-of-fine-tuning-inheriting-bias?u=76281980&t=234)** So, I went ahead and tried to fine tune BERT using explicitly gender-neutral language for each of the professions, like this.
>
> **[4:04](https://www.linkedin.com/learning/responsible-ai-and-application-development/the-risks-of-fine-tuning-inheriting-bias?u=76281980&t=244)** And the impact that that had on the results is shown here.
>
> **[4:07](https://www.linkedin.com/learning/responsible-ai-and-application-development/the-risks-of-fine-tuning-inheriting-bias?u=76281980&t=247)** Words like doctor and assistant remained largely unchanged, but others like engineer got an even stronger female bias.
>
> **[4:16](https://www.linkedin.com/learning/responsible-ai-and-application-development/the-risks-of-fine-tuning-inheriting-bias?u=76281980&t=256)** Now this might be because of association with words like designed in the fine tuning data set.
>
> **[4:22](https://www.linkedin.com/learning/responsible-ai-and-application-development/the-risks-of-fine-tuning-inheriting-bias?u=76281980&t=262)** And only one word flipped from female to male, and that's scientist.
>
> **[4:26](https://www.linkedin.com/learning/responsible-ai-and-application-development/the-risks-of-fine-tuning-inheriting-bias?u=76281980&t=266)** Maybe that's something to do with association with the word research in the training set.
>
> **[4:31](https://www.linkedin.com/learning/responsible-ai-and-application-development/the-risks-of-fine-tuning-inheriting-bias?u=76281980&t=271)** I hope this example is useful to you to understand two main things.
>
> **[4:35](https://www.linkedin.com/learning/responsible-ai-and-application-development/the-risks-of-fine-tuning-inheriting-bias?u=76281980&t=275)** The first, bias will exist in any model.
>
> **[4:38](https://www.linkedin.com/learning/responsible-ai-and-application-development/the-risks-of-fine-tuning-inheriting-bias?u=76281980&t=278)** And if you're going to build an application on top of that model through fine tuning, realize that you're inheriting that bias.
>
> **[4:46](https://www.linkedin.com/learning/responsible-ai-and-application-development/the-risks-of-fine-tuning-inheriting-bias?u=76281980&t=286)** Second, when you have content that you're going to use to fine tune the model, realize that any text that you might use, despite your desire to be unbiased, as I was in this example, with gender-neutral text for roles and actions, that the embeddings for the words themselves may have unfavorable biases within them and that can impact the bias of your fine-tuned model.
>
> **[5:11](https://www.linkedin.com/learning/responsible-ai-and-application-development/the-risks-of-fine-tuning-inheriting-bias?u=76281980&t=311)** The important thing is to fully understand what you're doing and to analyze the work so you don't get blindsided.
>
> **[5:17](https://www.linkedin.com/learning/responsible-ai-and-application-development/the-risks-of-fine-tuning-inheriting-bias?u=76281980&t=317)** Never assume something is unbiased.
>
> **[5:19](https://www.linkedin.com/learning/responsible-ai-and-application-development/the-risks-of-fine-tuning-inheriting-bias?u=76281980&t=319)** In fact, the opposite's probably true.
>
> **[5:21](https://www.linkedin.com/learning/responsible-ai-and-application-development/the-risks-of-fine-tuning-inheriting-bias?u=76281980&t=321)** Indeed, do analysis like I just did here to explore the impact of biases in the original model and in any modifications that you make.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), this. (3), else, (1), case, (1), this, (1)
> **Env Vars:** bert (7)
> **Analogies:** for example (3), kind of like (1)
> **CLI Commands:** make (1)
> **Speakers:** - when (1)

#### Demonstrate BERT, inherited bias, and fine-tuning to fix
> [LinkedIn Learning](https://www.linkedin.com/learning/responsible-ai-and-application-development/demonstrate-bert-inherited-bias-and-fine-tuning-to-fix?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/responsible-ai-and-application-development/demonstrate-bert-inherited-bias-and-fine-tuning-to-fix?u=76281980&t=0)** - [Instructor] This demo is one of my personal favorites.
>
> **[0:02](https://www.linkedin.com/learning/responsible-ai-and-application-development/demonstrate-bert-inherited-bias-and-fine-tuning-to-fix?u=76281980&t=2)** And this is where we're going to take a look at implicit bias that may be encoded into the language sets of large language models.
>
> **[0:10](https://www.linkedin.com/learning/responsible-ai-and-application-development/demonstrate-bert-inherited-bias-and-fine-tuning-to-fix?u=76281980&t=10)** We saw this in the slides earlier when we were talking about Bert, and what I have done is I've created a couple of pieces of code for you that you can take a look at.
>
> **[0:18](https://www.linkedin.com/learning/responsible-ai-and-application-development/demonstrate-bert-inherited-bias-and-fine-tuning-to-fix?u=76281980&t=18)** The first one is this, 6-3.BERTBias.py.
>
> **[0:21](https://www.linkedin.com/learning/responsible-ai-and-application-development/demonstrate-bert-inherited-bias-and-fine-tuning-to-fix?u=76281980&t=21)** And then the second one is this CH6_3.ipynb.
>
> **[0:25](https://www.linkedin.com/learning/responsible-ai-and-application-development/demonstrate-bert-inherited-bias-and-fine-tuning-to-fix?u=76281980&t=25)** I'm going to show you the BERTBias.py one first and I'm just going to run that in Python in my handy dandy terminal.
>
> **[0:33](https://www.linkedin.com/learning/responsible-ai-and-application-development/demonstrate-bert-inherited-bias-and-fine-tuning-to-fix?u=76281980&t=33)** So when I run this one, what's going to happen is you're going to see a few warnings, but it's going to take a look at bias, it's going to do the encodings of professions that I mentioned, and then it's going to reduce to like male or female encodings.
>
> **[0:46](https://www.linkedin.com/learning/responsible-ai-and-application-development/demonstrate-bert-inherited-bias-and-fine-tuning-to-fix?u=76281980&t=46)** And if we see these original codes here, remember that in the negative direction were ones that were associated with female and the positive direction ones that were associated with male.
>
> **[0:57](https://www.linkedin.com/learning/responsible-ai-and-application-development/demonstrate-bert-inherited-bias-and-fine-tuning-to-fix?u=76281980&t=57)** This has got nothing to do with values, male not being positive and female being negative.
>
> **[1:00](https://www.linkedin.com/learning/responsible-ai-and-application-development/demonstrate-bert-inherited-bias-and-fine-tuning-to-fix?u=76281980&t=60)** These are just purely directions.
>
> **[1:02](https://www.linkedin.com/learning/responsible-ai-and-application-development/demonstrate-bert-inherited-bias-and-fine-tuning-to-fix?u=76281980&t=62)** It could have been the other direction if we wanted and I'll show you how to change the code for that.
>
> **[1:06](https://www.linkedin.com/learning/responsible-ai-and-application-development/demonstrate-bert-inherited-bias-and-fine-tuning-to-fix?u=76281980&t=66)** But the idea being that, you know, the stronger the vector, the higher the number and then the plus or minus sign gives you the direction of that one.
>
> **[1:15](https://www.linkedin.com/learning/responsible-ai-and-application-development/demonstrate-bert-inherited-bias-and-fine-tuning-to-fix?u=76281980&t=75)** So for example, in the original Bert scores, the word nurse is very, very, very strongly associated with female.
>
> **[1:22](https://www.linkedin.com/learning/responsible-ai-and-application-development/demonstrate-bert-inherited-bias-and-fine-tuning-to-fix?u=76281980&t=82)** Given that it's 2.064.
>
> **[1:24](https://www.linkedin.com/learning/responsible-ai-and-application-development/demonstrate-bert-inherited-bias-and-fine-tuning-to-fix?u=76281980&t=84)** And that's obvious from societal biases that you know, nurses are usually female, not always, but usually.
>
> **[1:31](https://www.linkedin.com/learning/responsible-ai-and-application-development/demonstrate-bert-inherited-bias-and-fine-tuning-to-fix?u=76281980&t=91)** But the interesting thing with Bert in particular was that whomever trained Bert and whoever tuned Bert, you know, really focused on almost all of these professions, at least according to the very naive algorithm that I'll show you in a moment that I used to calculate the vectors for them.
>
> **[1:47](https://www.linkedin.com/learning/responsible-ai-and-application-development/demonstrate-bert-inherited-bias-and-fine-tuning-to-fix?u=76281980&t=107)** So they are entirely female, it's just difference of degree.
>
> **[1:51](https://www.linkedin.com/learning/responsible-ai-and-application-development/demonstrate-bert-inherited-bias-and-fine-tuning-to-fix?u=76281980&t=111)** So for example, while typically encoded in a societal bias that doctors are male and nurses are female, we can see here that doctors were still female, just with a very weak signal.
>
> **[2:02](https://www.linkedin.com/learning/responsible-ai-and-application-development/demonstrate-bert-inherited-bias-and-fine-tuning-to-fix?u=76281980&t=122)** Teachers were female but with a stronger signal, but they were all in the same direction.
>
> **[2:07](https://www.linkedin.com/learning/responsible-ai-and-application-development/demonstrate-bert-inherited-bias-and-fine-tuning-to-fix?u=76281980&t=127)** They were all leaning in the direction of being associated with the same embedding for female words like mother, daughter, aunt, niece, that type of thing.
>
> **[2:18](https://www.linkedin.com/learning/responsible-ai-and-application-development/demonstrate-bert-inherited-bias-and-fine-tuning-to-fix?u=76281980&t=138)** So then when I created a very simple data set where I was using gender neutral, so instead of the doctor saw his patients, it could be the doctor saw the patients and instead of the nurse saw her patients, it would be the nurse saw the patients, things like that.
>
> **[2:35](https://www.linkedin.com/learning/responsible-ai-and-application-development/demonstrate-bert-inherited-bias-and-fine-tuning-to-fix?u=76281980&t=155)** And then use that to try to then fine tune Bert, realizing that you're inheriting these implicit biases within Bert, we can see the fine tune scores that came out.
>
> **[2:46](https://www.linkedin.com/learning/responsible-ai-and-application-development/demonstrate-bert-inherited-bias-and-fine-tuning-to-fix?u=76281980&t=166)** And again, you're never going to get completely neutral.
>
> **[2:49](https://www.linkedin.com/learning/responsible-ai-and-application-development/demonstrate-bert-inherited-bias-and-fine-tuning-to-fix?u=76281980&t=169)** We'd love a society where words like this are gender neutral, but we have to realize that when we're training on data sets where there's massive amounts of these words and there's then filters that have been added to that data set with pre-processing and post-processing to maybe change things up.
>
> **[3:06](https://www.linkedin.com/learning/responsible-ai-and-application-development/demonstrate-bert-inherited-bias-and-fine-tuning-to-fix?u=76281980&t=186)** In the case of Bert, we saw that it's changed things up as while trying to be neutral, it tended to push things to be more female.
>
> **[3:13](https://www.linkedin.com/learning/responsible-ai-and-application-development/demonstrate-bert-inherited-bias-and-fine-tuning-to-fix?u=76281980&t=193)** And then when we tried to push it in the other way, we've inherited that bias.
>
> **[3:17](https://www.linkedin.com/learning/responsible-ai-and-application-development/demonstrate-bert-inherited-bias-and-fine-tuning-to-fix?u=76281980&t=197)** But again, we're a little bit closer and I've probably pushed it a little bit too strongly.
>
> **[3:21](https://www.linkedin.com/learning/responsible-ai-and-application-development/demonstrate-bert-inherited-bias-and-fine-tuning-to-fix?u=76281980&t=201)** So now for example, I've pushed it so that doctor 0.544 is male.
>
> **[3:26](https://www.linkedin.com/learning/responsible-ai-and-application-development/demonstrate-bert-inherited-bias-and-fine-tuning-to-fix?u=76281980&t=206)** It's not as strong a male as nurse was female in the original Bert.
>
> **[3:30](https://www.linkedin.com/learning/responsible-ai-and-application-development/demonstrate-bert-inherited-bias-and-fine-tuning-to-fix?u=76281980&t=210)** But it's the second strongest signal of a number.
>
> **[3:34](https://www.linkedin.com/learning/responsible-ai-and-application-development/demonstrate-bert-inherited-bias-and-fine-tuning-to-fix?u=76281980&t=214)** Here we have, for example, teacher being strong female, doctor being strong male, nurse being closer to neutral.
>
> **[3:40](https://www.linkedin.com/learning/responsible-ai-and-application-development/demonstrate-bert-inherited-bias-and-fine-tuning-to-fix?u=76281980&t=220)** If we want things to be neutral, that's great.
>
> **[3:42](https://www.linkedin.com/learning/responsible-ai-and-application-development/demonstrate-bert-inherited-bias-and-fine-tuning-to-fix?u=76281980&t=222)** If we want to reflect society, that's a decision that you want to make.
>
> **[3:46](https://www.linkedin.com/learning/responsible-ai-and-application-development/demonstrate-bert-inherited-bias-and-fine-tuning-to-fix?u=76281980&t=226)** You know, do you really want things to reflect society to reflect your perception of society or to try to force neutrality?
>
> **[3:53](https://www.linkedin.com/learning/responsible-ai-and-application-development/demonstrate-bert-inherited-bias-and-fine-tuning-to-fix?u=76281980&t=233)** You know, these are decisions that you make in data, but the most important thing to realize is that if you're building on a model such as Bert or any other model, you are inheriting the biases that were within that model and you can try to overcome them as I did here.
>
> **[4:09](https://www.linkedin.com/learning/responsible-ai-and-application-development/demonstrate-bert-inherited-bias-and-fine-tuning-to-fix?u=76281980&t=249)** So that's a simple demo.
>
> **[4:10](https://www.linkedin.com/learning/responsible-ai-and-application-development/demonstrate-bert-inherited-bias-and-fine-tuning-to-fix?u=76281980&t=250)** I also created a little bit more complicated, an example, let's take a look at that.
>
> **[4:15](https://www.linkedin.com/learning/responsible-ai-and-application-development/demonstrate-bert-inherited-bias-and-fine-tuning-to-fix?u=76281980&t=255)** So if you go to the notebook, the same code that you just ran to get the same values that we just had is there.
>
> **[4:21](https://www.linkedin.com/learning/responsible-ai-and-application-development/demonstrate-bert-inherited-bias-and-fine-tuning-to-fix?u=76281980&t=261)** But I've also added a second cell where I went into a little bit more detail.
>
> **[4:25](https://www.linkedin.com/learning/responsible-ai-and-application-development/demonstrate-bert-inherited-bias-and-fine-tuning-to-fix?u=76281980&t=265)** First, let me just explain, you know how I did analyzing the gender bias.
>
> **[4:29](https://www.linkedin.com/learning/responsible-ai-and-application-development/demonstrate-bert-inherited-bias-and-fine-tuning-to-fix?u=76281980&t=269)** So for example, I created a set of male words.
>
> **[4:32](https://www.linkedin.com/learning/responsible-ai-and-application-development/demonstrate-bert-inherited-bias-and-fine-tuning-to-fix?u=76281980&t=272)** He, man, father, son, brother, uncle.
>
> **[4:34](https://www.linkedin.com/learning/responsible-ai-and-application-development/demonstrate-bert-inherited-bias-and-fine-tuning-to-fix?u=76281980&t=274)** I created a set of female words.
>
> **[4:36](https://www.linkedin.com/learning/responsible-ai-and-application-development/demonstrate-bert-inherited-bias-and-fine-tuning-to-fix?u=76281980&t=276)** She, woman, mother, daughter, sister, aunts, and I created a set of professions, doctor, nurse, et cetera.
>
> **[4:43](https://www.linkedin.com/learning/responsible-ai-and-application-development/demonstrate-bert-inherited-bias-and-fine-tuning-to-fix?u=76281980&t=283)** So for the male embeddings, I can then get the word embeddings from Bert as it's been trained for each of these and effectively average them out.
>
> **[4:53](https://www.linkedin.com/learning/responsible-ai-and-application-development/demonstrate-bert-inherited-bias-and-fine-tuning-to-fix?u=76281980&t=293)** For the female embeddings, I could do the same thing.
>
> **[4:55](https://www.linkedin.com/learning/responsible-ai-and-application-development/demonstrate-bert-inherited-bias-and-fine-tuning-to-fix?u=76281980&t=295)** And for the profession embeddings I could do the same thing.
>
> **[4:59](https://www.linkedin.com/learning/responsible-ai-and-application-development/demonstrate-bert-inherited-bias-and-fine-tuning-to-fix?u=76281980&t=299)** So then what I wanted to do was for the male and female ones like this is the averaging out part of them where I'm just getting the mean of them and then I'm finding the center norm of that mean and then I'm turning that into a direction.
>
> **[5:11](https://www.linkedin.com/learning/responsible-ai-and-application-development/demonstrate-bert-inherited-bias-and-fine-tuning-to-fix?u=76281980&t=311)** So like plus or minus direction, again, no value here.
>
> **[5:16](https://www.linkedin.com/learning/responsible-ai-and-application-development/demonstrate-bert-inherited-bias-and-fine-tuning-to-fix?u=76281980&t=316)** It doesn't mean male positive, female negative, it's just the direction.
>
> **[5:19](https://www.linkedin.com/learning/responsible-ai-and-application-development/demonstrate-bert-inherited-bias-and-fine-tuning-to-fix?u=76281980&t=319)** If you've preferred female positive, male negative, you could just swap the variables around here.
>
> **[5:23](https://www.linkedin.com/learning/responsible-ai-and-application-development/demonstrate-bert-inherited-bias-and-fine-tuning-to-fix?u=76281980&t=323)** Where's the female center minus the male center.
>
> **[5:26](https://www.linkedin.com/learning/responsible-ai-and-application-development/demonstrate-bert-inherited-bias-and-fine-tuning-to-fix?u=76281980&t=326)** And then from that, I'm then able to just get the dot product of the male center and the gender direction to get the overall male projection and female projection.
>
> **[5:36](https://www.linkedin.com/learning/responsible-ai-and-application-development/demonstrate-bert-inherited-bias-and-fine-tuning-to-fix?u=76281980&t=336)** When I do the same with professions, I can then just calculate the difference and all the code to do that is in here.
>
> **[5:42](https://www.linkedin.com/learning/responsible-ai-and-application-development/demonstrate-bert-inherited-bias-and-fine-tuning-to-fix?u=76281980&t=342)** So what I did then is to retrain Bert is I then just created some basic training texts that aren't gendered.
>
> **[5:51](https://www.linkedin.com/learning/responsible-ai-and-application-development/demonstrate-bert-inherited-bias-and-fine-tuning-to-fix?u=76281980&t=351)** The doctor performed surgery, the nurse helped the patient, the engineer designed the bridge without his or her or any other text in there.
>
> **[5:58](https://www.linkedin.com/learning/responsible-ai-and-application-development/demonstrate-bert-inherited-bias-and-fine-tuning-to-fix?u=76281980&t=358)** And use this with this code to then effectively fine tune Bert.
>
> **[6:03](https://www.linkedin.com/learning/responsible-ai-and-application-development/demonstrate-bert-inherited-bias-and-fine-tuning-to-fix?u=76281980&t=363)** The details of fine tuning Bert are a little bit beyond the scope of this course, but the code here, you can take a look at it and you can dissect it and you can play with it.
>
> **[6:11](https://www.linkedin.com/learning/responsible-ai-and-application-development/demonstrate-bert-inherited-bias-and-fine-tuning-to-fix?u=76281980&t=371)** So what I did then was that to do the same thing to output the details of these we're looking at the overall projections.
>
> **[6:18](https://www.linkedin.com/learning/responsible-ai-and-application-development/demonstrate-bert-inherited-bias-and-fine-tuning-to-fix?u=76281980&t=378)** And then what I wanted to do was like take a look at some of the magnitudes of embedding.
>
> **[6:23](https://www.linkedin.com/learning/responsible-ai-and-application-development/demonstrate-bert-inherited-bias-and-fine-tuning-to-fix?u=76281980&t=383)** So taking gender out of it for a moment.
>
> **[6:26](https://www.linkedin.com/learning/responsible-ai-and-application-development/demonstrate-bert-inherited-bias-and-fine-tuning-to-fix?u=76281980&t=386)** The strength of embeddings generally indicates higher numbers are a stronger semantic representation.
>
> **[6:34](https://www.linkedin.com/learning/responsible-ai-and-application-development/demonstrate-bert-inherited-bias-and-fine-tuning-to-fix?u=76281980&t=394)** So the word engineer is very, very strong.
>
> **[6:36](https://www.linkedin.com/learning/responsible-ai-and-application-development/demonstrate-bert-inherited-bias-and-fine-tuning-to-fix?u=76281980&t=396)** It's got very strong associations with other words that are like engineer.
>
> **[6:41](https://www.linkedin.com/learning/responsible-ai-and-application-development/demonstrate-bert-inherited-bias-and-fine-tuning-to-fix?u=76281980&t=401)** So the higher the number, the stronger, like pilot, you know, again weaker associations, but still very, very strong when it's at 12.
>
> **[6:49](https://www.linkedin.com/learning/responsible-ai-and-application-development/demonstrate-bert-inherited-bias-and-fine-tuning-to-fix?u=76281980&t=409)** And this can sometimes be seen if we kind of start pairing these off against each other.
>
> **[6:53](https://www.linkedin.com/learning/responsible-ai-and-application-development/demonstrate-bert-inherited-bias-and-fine-tuning-to-fix?u=76281980&t=413)** And looking at the similarity, although this is probably not a great example because my highest one was a scientist and a chef, I guess food science or something like that came into this.
>
> **[7:03](https://www.linkedin.com/learning/responsible-ai-and-application-development/demonstrate-bert-inherited-bias-and-fine-tuning-to-fix?u=76281980&t=423)** So you could see those associations were pretty strong and like weaker associations.
>
> **[7:07](https://www.linkedin.com/learning/responsible-ai-and-application-development/demonstrate-bert-inherited-bias-and-fine-tuning-to-fix?u=76281980&t=427)** If I go down the table would be like pilot and manager, but again, still very strong.
>
> **[7:11](https://www.linkedin.com/learning/responsible-ai-and-application-development/demonstrate-bert-inherited-bias-and-fine-tuning-to-fix?u=76281980&t=431)** So in this second piece of code, I took other professions other than the five that we saw earlier on and did the same analysis.
>
> **[7:20](https://www.linkedin.com/learning/responsible-ai-and-application-development/demonstrate-bert-inherited-bias-and-fine-tuning-to-fix?u=76281980&t=440)** So we could see again, doctor being female, nurse being very strong female.
>
> **[7:25](https://www.linkedin.com/learning/responsible-ai-and-application-development/demonstrate-bert-inherited-bias-and-fine-tuning-to-fix?u=76281980&t=445)** But in Bert, very, very few male ones, programmer, which is typically a very male dominated thing, was just slightly right of zero.
>
> **[7:35](https://www.linkedin.com/learning/responsible-ai-and-application-development/demonstrate-bert-inherited-bias-and-fine-tuning-to-fix?u=76281980&t=455)** Chef was just slightly right of zero.
>
> **[7:37](https://www.linkedin.com/learning/responsible-ai-and-application-development/demonstrate-bert-inherited-bias-and-fine-tuning-to-fix?u=76281980&t=457)** So again, very, very strong female bias in the embeddings within Bert.
>
> **[7:42](https://www.linkedin.com/learning/responsible-ai-and-application-development/demonstrate-bert-inherited-bias-and-fine-tuning-to-fix?u=76281980&t=462)** And then after I retrained it, you know, and did the same kind of analysis and you can look at this for yourself and have fun with it, we began to see trying to get it to be more neutral, to have the things clustered closer to zero.
>
> **[7:55](https://www.linkedin.com/learning/responsible-ai-and-application-development/demonstrate-bert-inherited-bias-and-fine-tuning-to-fix?u=76281980&t=475)** I ended up making probably over biased here, making doctor very strongly male, which is incorrect.
>
> **[8:00](https://www.linkedin.com/learning/responsible-ai-and-application-development/demonstrate-bert-inherited-bias-and-fine-tuning-to-fix?u=76281980&t=480)** Science, very, very strongly male, which is incorrect.
>
> **[8:03](https://www.linkedin.com/learning/responsible-ai-and-application-development/demonstrate-bert-inherited-bias-and-fine-tuning-to-fix?u=76281980&t=483)** So I am left with the choice.
>
> **[8:06](https://www.linkedin.com/learning/responsible-ai-and-application-development/demonstrate-bert-inherited-bias-and-fine-tuning-to-fix?u=76281980&t=486)** Do I inherit the bias and work with that?
>
> **[8:09](https://www.linkedin.com/learning/responsible-ai-and-application-development/demonstrate-bert-inherited-bias-and-fine-tuning-to-fix?u=76281980&t=489)** Do I try to fix the bias, realizing that I can't zero everything?
>
> **[8:12](https://www.linkedin.com/learning/responsible-ai-and-application-development/demonstrate-bert-inherited-bias-and-fine-tuning-to-fix?u=76281980&t=492)** 'Cause if I zero everything, effectively the data set will be useless.
>
> **[8:17](https://www.linkedin.com/learning/responsible-ai-and-application-development/demonstrate-bert-inherited-bias-and-fine-tuning-to-fix?u=76281980&t=497)** But if I try to fine tune to remove some biases, am I introducing new ones?
>
> **[8:21](https://www.linkedin.com/learning/responsible-ai-and-application-development/demonstrate-bert-inherited-bias-and-fine-tuning-to-fix?u=76281980&t=501)** And this type of evaluation is what I'd recommend that you do if you're going down that road.
>
> **[8:27](https://www.linkedin.com/learning/responsible-ai-and-application-development/demonstrate-bert-inherited-bias-and-fine-tuning-to-fix?u=76281980&t=507)** If you are inheriting from existing models, but you don't want their biases, do this experimentation.
>
> **[8:33](https://www.linkedin.com/learning/responsible-ai-and-application-development/demonstrate-bert-inherited-bias-and-fine-tuning-to-fix?u=76281980&t=513)** Do this kind of tuning, realize you will get biases, but what is acceptable to you and what isn't.
>
> **[8:39](https://www.linkedin.com/learning/responsible-ai-and-application-development/demonstrate-bert-inherited-bias-and-fine-tuning-to-fix?u=76281980&t=519)** And this will give you the toolkit to be able to make those decisions.

> [!info]- Semantic Content
>
> **Analogies:** for example (5), such as (1)
> **CLI Commands:** make (3), python (1)
> **Code Keywords:** let (2), this, (1), this. (1)
> **File Paths:** 6-3.bertbias.py (1), bertbias.py (1)
> **Versions:** 2.064 (1), 0.544 (1)
> **Env Vars:** ch6_3 (1)
> **Tools:** terminal (1)
> **UI Navigation:** go to (1)


### 7. Model Training

#### Responsible practices during training
> [LinkedIn Learning](https://www.linkedin.com/learning/responsible-ai-and-application-development/responsible-practices-during-training?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/responsible-ai-and-application-development/responsible-practices-during-training?u=76281980&t=1)** - Earlier, we spoke a lot about model architecture and about how you can introduce biases without realizing it in your loss function, your optimizer, or even the metrics that you optimize for.
>
> **[0:11](https://www.linkedin.com/learning/responsible-ai-and-application-development/responsible-practices-during-training?u=76281980&t=11)** Much of that won't surface as issues until you start training your model.
>
> **[0:16](https://www.linkedin.com/learning/responsible-ai-and-application-development/responsible-practices-during-training?u=76281980&t=16)** So let's explore what that would look like using computer vision.
>
> **[0:20](https://www.linkedin.com/learning/responsible-ai-and-application-development/responsible-practices-during-training?u=76281980&t=20)** A few years ago, I created the popular Horses and Humans Dataset where there's a few hundred images of horses and humans that look like this.
>
> **[0:28](https://www.linkedin.com/learning/responsible-ai-and-application-development/responsible-practices-during-training?u=76281980&t=28)** The data is all synthetic rendered by me using 3D image creation software.
>
> **[0:33](https://www.linkedin.com/learning/responsible-ai-and-application-development/responsible-practices-during-training?u=76281980&t=33)** My goal was to reduce bias by having broad distributions of race, gender, and pose in humans and species' color and pose in the horses.
>
> **[0:43](https://www.linkedin.com/learning/responsible-ai-and-application-development/responsible-practices-during-training?u=76281980&t=43)** You would think that by explicitly designing the data set to be unbiased, that I would be able to avoid bias, and a naive approach would be to declare victory and move on, but we couldn't be further from the truth.
>
> **[0:56](https://www.linkedin.com/learning/responsible-ai-and-application-development/responsible-practices-during-training?u=76281980&t=56)** Let's explore this.
>
> **[0:58](https://www.linkedin.com/learning/responsible-ai-and-application-development/responsible-practices-during-training?u=76281980&t=58)** I used the convolutional neural network to train a classifier for horses are humans over 50 epochs, and these are the results for that model over those 50 epochs, the model accuracy trended up towards 100% on both the training and the validation data set.
>
> **[1:14](https://www.linkedin.com/learning/responsible-ai-and-application-development/responsible-practices-during-training?u=76281980&t=74)** The loss was trending towards zero.
>
> **[1:17](https://www.linkedin.com/learning/responsible-ai-and-application-development/responsible-practices-during-training?u=76281980&t=77)** Everything seemed good, right?
>
> **[1:19](https://www.linkedin.com/learning/responsible-ai-and-application-development/responsible-practices-during-training?u=76281980&t=79)** Well, no, it wasn't, and this is the kind of trap that you need to think about when training.
>
> **[1:24](https://www.linkedin.com/learning/responsible-ai-and-application-development/responsible-practices-during-training?u=76281980&t=84)** If I do a detailed analysis of my inference with this model, I get results like this.
>
> **[1:29](https://www.linkedin.com/learning/responsible-ai-and-application-development/responsible-practices-during-training?u=76281980&t=89)** When looking at humans, the precision score was close to 60%, and that's interesting.
>
> **[1:34](https://www.linkedin.com/learning/responsible-ai-and-application-development/responsible-practices-during-training?u=76281980&t=94)** Statistically, the dataset is roughly 50% humans, so we could see that when it looked at humans, it got them right a lot, almost too much.
>
> **[1:44](https://www.linkedin.com/learning/responsible-ai-and-application-development/responsible-practices-during-training?u=76281980&t=104)** And we can see this in the recall number, which was a perfect one.
>
> **[1:48](https://www.linkedin.com/learning/responsible-ai-and-application-development/responsible-practices-during-training?u=76281980&t=108)** So basically we got humans right whenever we saw them.
>
> **[1:52](https://www.linkedin.com/learning/responsible-ai-and-application-development/responsible-practices-during-training?u=76281980&t=112)** But then if we look at the specificity score, it's really low at 0.3, and that means we built something that's excellent at recognizing humans, but weaker at recognizing horses.
>
> **[2:04](https://www.linkedin.com/learning/responsible-ai-and-application-development/responsible-practices-during-training?u=76281980&t=124)** We've introduced a pro-human bias into the model.
>
> **[2:08](https://www.linkedin.com/learning/responsible-ai-and-application-development/responsible-practices-during-training?u=76281980&t=128)** And this is held up.
>
> **[2:09](https://www.linkedin.com/learning/responsible-ai-and-application-development/responsible-practices-during-training?u=76281980&t=129)** When we look at the metrics for horses, the model is precise.
>
> **[2:12](https://www.linkedin.com/learning/responsible-ai-and-application-development/responsible-practices-during-training?u=76281980&t=132)** Whenever it does guess a horse, it gets it right, but it often does not predict a horse.
>
> **[2:19](https://www.linkedin.com/learning/responsible-ai-and-application-development/responsible-practices-during-training?u=76281980&t=139)** Indeed, of the 128 horses in the test, it only gets the horse 40 times getting them all right, but for the other 88, it gets human and that impacts the scores.
>
> **[2:30](https://www.linkedin.com/learning/responsible-ai-and-application-development/responsible-practices-during-training?u=76281980&t=150)** Now this data set is a difficult one to build a classifier for.
>
> **[2:34](https://www.linkedin.com/learning/responsible-ai-and-application-development/responsible-practices-during-training?u=76281980&t=154)** As a result, it's easy to think you've done a good job when the training metrics are good, but peeling them apart and looking at what's happening under the hood isn't just good for being responsible with your AI, but it also helps you be a better developer.
>
> **[2:49](https://www.linkedin.com/learning/responsible-ai-and-application-development/responsible-practices-during-training?u=76281980&t=169)** In the next video, we'll do a screencast of this code in action.
>
> **[2:52](https://www.linkedin.com/learning/responsible-ai-and-application-development/responsible-practices-during-training?u=76281980&t=172)** It's beyond the scope of this course to go into advanced computer vision and explore techniques that can be used to optimize this model and fix issues like the ones we're talking about, but hopefully what you're seeing here will help raise awareness of potential issues that are hiding in plain sight and give you the tools to find them.
>
> **[3:10](https://www.linkedin.com/learning/responsible-ai-and-application-development/responsible-practices-during-training?u=76281980&t=190)** The code I share will help you analyze your models to find bias and other issues like these.

> [!info]- Semantic Content
>
> **Code Keywords:** this. (3), for. (2), let (2), function (1), raise (1)
> **CLI Commands:** find (2)
> **Versions:** 0.3 (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Speakers:** - earlier (1)

#### Training an image classifier
> [LinkedIn Learning](https://www.linkedin.com/learning/responsible-ai-and-application-development/training-an-image-classifier?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/responsible-ai-and-application-development/training-an-image-classifier?u=76281980&t=0)** - [Instructor] So let's go back to horses or humans.
>
> **[0:02](https://www.linkedin.com/learning/responsible-ai-and-application-development/training-an-image-classifier?u=76281980&t=2)** And in the download, you'll see a notebook where I've built a more complicated model that's supposed to be able to do a lot better in being able to establish horses or humans without the overfitting that we were looking at previously.
>
> **[0:18](https://www.linkedin.com/learning/responsible-ai-and-application-development/training-an-image-classifier?u=76281980&t=18)** And if you run that model, I'm not going to run it now 'cause it takes quite some time to run, but I just want to show you the results.
>
> **[0:24](https://www.linkedin.com/learning/responsible-ai-and-application-development/training-an-image-classifier?u=76281980&t=24)** So typically if you're training a machine learning model, and you're training it naively, you're going to be looking at the accuracy, and you're going to be looking at the loss, and you're going to be hoping that these curves fit each other.
>
> **[0:35](https://www.linkedin.com/learning/responsible-ai-and-application-development/training-an-image-classifier?u=76281980&t=35)** Now these curves are a little bit jagged.
>
> **[0:37](https://www.linkedin.com/learning/responsible-ai-and-application-development/training-an-image-classifier?u=76281980&t=37)** I probably need to do a little bit of work to smooth them out with some regularization and stuff like that.
>
> **[0:42](https://www.linkedin.com/learning/responsible-ai-and-application-development/training-an-image-classifier?u=76281980&t=42)** But the overall point here on the accuracy is that this looks like it is not overfitting because the blue line, which is the accuracy on the training dataset and the orange line are converging pretty close to each other.
>
> **[0:54](https://www.linkedin.com/learning/responsible-ai-and-application-development/training-an-image-classifier?u=76281980&t=54)** Now there's a little bit of suspicion, as I mentioned earlier on with the blue line approaching one.
>
> **[0:59](https://www.linkedin.com/learning/responsible-ai-and-application-development/training-an-image-classifier?u=76281980&t=59)** So approaching 100% accuracy, that already makes me a little bit suspicious.
>
> **[1:04](https://www.linkedin.com/learning/responsible-ai-and-application-development/training-an-image-classifier?u=76281980&t=64)** But those suspicions are allayed by the fact that when you test on the validation sets, that it's actually pretty close.
>
> **[1:10](https://www.linkedin.com/learning/responsible-ai-and-application-development/training-an-image-classifier?u=76281980&t=70)** So that's suggesting that we potentially have a very, very good model because our validation set, which is data that the model hasn't previously seen, that when it classifies on that, it's, the accuracy is still very, very high.
>
> **[1:24](https://www.linkedin.com/learning/responsible-ai-and-application-development/training-an-image-classifier?u=76281980&t=84)** And then similarly, when we look at loss, the same behavior is happening.
>
> **[1:28](https://www.linkedin.com/learning/responsible-ai-and-application-development/training-an-image-classifier?u=76281980&t=88)** Some of this early training, there's a lot of noise.
>
> **[1:31](https://www.linkedin.com/learning/responsible-ai-and-application-development/training-an-image-classifier?u=76281980&t=91)** You expect that generally with early training where the model's trying to figure itself out with the hyper parameters.
>
> **[1:36](https://www.linkedin.com/learning/responsible-ai-and-application-development/training-an-image-classifier?u=76281980&t=96)** We're seeing the same kind of noise here with all this jaggedness, but it's beginning to smooth out.
>
> **[1:40](https://www.linkedin.com/learning/responsible-ai-and-application-development/training-an-image-classifier?u=76281980&t=100)** If I ran this maybe for a few hundred epochs, it would get very smooth.
>
> **[1:43](https://www.linkedin.com/learning/responsible-ai-and-application-development/training-an-image-classifier?u=76281980&t=103)** I've only just ran it for 40.
>
> **[1:45](https://www.linkedin.com/learning/responsible-ai-and-application-development/training-an-image-classifier?u=76281980&t=105)** But again, our loss are beginning to converge against each other, and that's generally a really, really good sign that we're really happy with.
>
> **[1:53](https://www.linkedin.com/learning/responsible-ai-and-application-development/training-an-image-classifier?u=76281980&t=113)** However, there can be a trap here.
>
> **[1:56](https://www.linkedin.com/learning/responsible-ai-and-application-development/training-an-image-classifier?u=76281980&t=116)** And part of that trap is as we're optimizing for some things, we could be forgetting other things.
>
> **[2:02](https://www.linkedin.com/learning/responsible-ai-and-application-development/training-an-image-classifier?u=76281980&t=122)** So I'm not going to go into detail in the code, but in this code that I've provided for you, when you run this, I've created some detailed performance analysis of what happens when we are actually doing prediction against this model.
>
> **[2:17](https://www.linkedin.com/learning/responsible-ai-and-application-development/training-an-image-classifier?u=76281980&t=137)** So for example, if I look at my horses, and I look at the metrics for my horses, and I look at precision first of all, this looks really good.
>
> **[2:26](https://www.linkedin.com/learning/responsible-ai-and-application-development/training-an-image-classifier?u=76281980&t=146)** When we predict that something is a horse, how often are we right?
>
> **[2:29](https://www.linkedin.com/learning/responsible-ai-and-application-development/training-an-image-classifier?u=76281980&t=149)** We're right all of the time.
>
> **[2:31](https://www.linkedin.com/learning/responsible-ai-and-application-development/training-an-image-classifier?u=76281980&t=151)** So if we get an image, and we say that image is a horse, it is always a horse.
>
> **[2:36](https://www.linkedin.com/learning/responsible-ai-and-application-development/training-an-image-classifier?u=76281980&t=156)** However, let's start looking at some other scores around this.
>
> **[2:40](https://www.linkedin.com/learning/responsible-ai-and-application-development/training-an-image-classifier?u=76281980&t=160)** So for example, I'm going to come down here, and that is, that only happens seven times.
>
> **[2:46](https://www.linkedin.com/learning/responsible-ai-and-application-development/training-an-image-classifier?u=76281980&t=166)** So in our test, we actually have 128 horses.
>
> **[2:50](https://www.linkedin.com/learning/responsible-ai-and-application-development/training-an-image-classifier?u=76281980&t=170)** Seven times that we predicted that a picture was a horse, we got it right, but 121 times we got it wrong.
>
> **[2:57](https://www.linkedin.com/learning/responsible-ai-and-application-development/training-an-image-classifier?u=76281980&t=177)** That was, we saw a horse, but we said it was a human.
>
> **[3:01](https://www.linkedin.com/learning/responsible-ai-and-application-development/training-an-image-classifier?u=76281980&t=181)** So as a result, this F1 score is something that you always want to really look out for.
>
> **[3:06](https://www.linkedin.com/learning/responsible-ai-and-application-development/training-an-image-classifier?u=76281980&t=186)** We've calculated a very, very low F1 score, and as a result, if I look at humans, now, my precision is 50/50, right?
>
> **[3:19](https://www.linkedin.com/learning/responsible-ai-and-application-development/training-an-image-classifier?u=76281980&t=199)** When we predict humans, how often are we right?
>
> **[3:21](https://www.linkedin.com/learning/responsible-ai-and-application-development/training-an-image-classifier?u=76281980&t=201)** We're looking at 128 humans, I believe it is, and we're only getting it right half of the time.
>
> **[3:27](https://www.linkedin.com/learning/responsible-ai-and-application-development/training-an-image-classifier?u=76281980&t=207)** So despite our learning curves looking really, really, really good and optimizing for those learning curves, as we start to peel our data apart, we're beginning to show some really, really poor scores on these.
>
> **[3:43](https://www.linkedin.com/learning/responsible-ai-and-application-development/training-an-image-classifier?u=76281980&t=223)** So the precision of horses is probably dragging our overall accuracy up, even though our precision of horses was actually poor.
>
> **[3:51](https://www.linkedin.com/learning/responsible-ai-and-application-development/training-an-image-classifier?u=76281980&t=231)** So the point here, and the important thing is when you're doing some kind of a classification or when you're training a model, it's really, really important for you to start peeling apart the accuracy and loss curves because these can lead you into a false sense of security, and they can lead you to creating models that over predict for one class and under predict for another, where the overall average might look pretty good.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), this, (1), this. (1), for. (1)
> **Analogies:** for example (2), picture (1)
> **Definitions:** is a  (2)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)


### 8. Model Deployment and Applications

#### Considerations in model deployment
> [LinkedIn Learning](https://www.linkedin.com/learning/responsible-ai-and-application-development/considerations-in-model-deployment?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/responsible-ai-and-application-development/considerations-in-model-deployment?u=76281980&t=1)** - We've come a long way in discussing the end-to-end pipeline in ML model development and how to be conscious of bias throughout the process.
>
> **[0:09](https://www.linkedin.com/learning/responsible-ai-and-application-development/considerations-in-model-deployment?u=76281980&t=9)** Of course, you still need to get your model out into the wild for people to use it, and as a result, you might actually be introducing more issues without careful consideration of your rollout.
>
> **[0:19](https://www.linkedin.com/learning/responsible-ai-and-application-development/considerations-in-model-deployment?u=76281980&t=19)** Let's explore this.
>
> **[0:21](https://www.linkedin.com/learning/responsible-ai-and-application-development/considerations-in-model-deployment?u=76281980&t=21)** First is hardware and device accessibility.
>
> **[0:24](https://www.linkedin.com/learning/responsible-ai-and-application-development/considerations-in-model-deployment?u=76281980&t=24)** Various research estimates that the global share of low to mid-range smartphones is anywhere to 60 to 75% of the total global market share.
>
> **[0:34](https://www.linkedin.com/learning/responsible-ai-and-application-development/considerations-in-model-deployment?u=76281980&t=34)** So then the question arises, how well will your model run on that hardware?
>
> **[0:39](https://www.linkedin.com/learning/responsible-ai-and-application-development/considerations-in-model-deployment?u=76281980&t=39)** Will it even run at all?
>
> **[0:40](https://www.linkedin.com/learning/responsible-ai-and-application-development/considerations-in-model-deployment?u=76281980&t=40)** And if it does, how about the rest of the hardware on lower end devices, things like the cameras.
>
> **[0:46](https://www.linkedin.com/learning/responsible-ai-and-application-development/considerations-in-model-deployment?u=76281980&t=46)** Earlier we looked at the bean disease data set, and this is a data set of various bean plant diseases that was collected from farms in Uganda.
>
> **[0:54](https://www.linkedin.com/learning/responsible-ai-and-application-development/considerations-in-model-deployment?u=76281980&t=54)** It's relatively easy for you to build a classifier for this data, and a model that works to classify images where you take a photo of a leaf and determine if it's diseased or not, but it might work on your development machine or your test phone, but what about real phones out there in the real world, and in particular in places where the app would be most useful, like Uganda for this bean disease app.
>
> **[1:17](https://www.linkedin.com/learning/responsible-ai-and-application-development/considerations-in-model-deployment?u=76281980&t=77)** Now there's work that you can do to mitigate bias issues there, and one that I really recommend is the Firebase Test Lab, which allows you to test your Android or iOS app on a variety of devices, both virtual and physical, and it's a lot more devices than you probably have access to yourself.
>
> **[1:34](https://www.linkedin.com/learning/responsible-ai-and-application-development/considerations-in-model-deployment?u=76281980&t=94)** It won't help you find everything, but it is a huge leap forward to help you at least get some level of mitigation and help you do the model optimization and quantization to get your model to run on lower end devices and explore the performance trade-offs that come with that, as well as broadening the availability of your model and your app.
>
> **[1:54](https://www.linkedin.com/learning/responsible-ai-and-application-development/considerations-in-model-deployment?u=76281980&t=114)** Similarly, if your model uses language, there are many documented disparities in model performance across different languages and cultures.
>
> **[2:03](https://www.linkedin.com/learning/responsible-ai-and-application-development/considerations-in-model-deployment?u=76281980&t=123)** For example, consider this study published in the National Library of Medicine that showed racial disparities in automated speech recognition.
>
> **[2:11](https://www.linkedin.com/learning/responsible-ai-and-application-development/considerations-in-model-deployment?u=76281980&t=131)** This research found that for a relatively small population of speakers, 42 were white, 73 were black, speech recognition systems had an average word error rate almost double for the black speakers than it did for the white ones.
>
> **[2:26](https://www.linkedin.com/learning/responsible-ai-and-application-development/considerations-in-model-deployment?u=76281980&t=146)** So if you're building anything that uses voice, you should consider who will be using it and where.
>
> **[2:32](https://www.linkedin.com/learning/responsible-ai-and-application-development/considerations-in-model-deployment?u=76281980&t=152)** If it's going to be deployed in areas where people have different types of speech or different devices than what you're used to, maybe cheaper or lower fidelity microphones, you're introducing a whole new place for bias.
>
> **[2:44](https://www.linkedin.com/learning/responsible-ai-and-application-development/considerations-in-model-deployment?u=76281980&t=164)** One final example, particularly if you're deploying to the cloud is remember, the cloud isn't really a cloud.
>
> **[2:50](https://www.linkedin.com/learning/responsible-ai-and-application-development/considerations-in-model-deployment?u=76281980&t=170)** It's a complex infrastructure of computers and connectivity, and data centers running the machines that your code executes on have specific geographic locations.
>
> **[3:00](https://www.linkedin.com/learning/responsible-ai-and-application-development/considerations-in-model-deployment?u=76281980&t=180)** And these geographic locations are not distributed evenly around the globe.
>
> **[3:05](https://www.linkedin.com/learning/responsible-ai-and-application-development/considerations-in-model-deployment?u=76281980&t=185)** This means that people in some parts of the world have much lower latency than others, and if you're deploying to a data center, realize that you're instantly creating a bias.
>
> **[3:15](https://www.linkedin.com/learning/responsible-ai-and-application-development/considerations-in-model-deployment?u=76281980&t=195)** Some people will access your AI faster than others.
>
> **[3:19](https://www.linkedin.com/learning/responsible-ai-and-application-development/considerations-in-model-deployment?u=76281980&t=199)** So it's on you to make sure that a minimum level of service can be met by everyone.
>
> **[3:24](https://www.linkedin.com/learning/responsible-ai-and-application-development/considerations-in-model-deployment?u=76281980&t=204)** Ruthless optimization for those with better connectivity to a data center might leave others out in the dark.
>
> **[3:31](https://www.linkedin.com/learning/responsible-ai-and-application-development/considerations-in-model-deployment?u=76281980&t=211)** It's a hidden aspect of responsibility.
>
> **[3:33](https://www.linkedin.com/learning/responsible-ai-and-application-development/considerations-in-model-deployment?u=76281980&t=213)** You might think building the best possible app is the best possible thing, but that's not always the case.
>
> **[3:39](https://www.linkedin.com/learning/responsible-ai-and-application-development/considerations-in-model-deployment?u=76281980&t=219)** Of course, you can't know everything in advance, and often your learnings will come from what happens while your app is being used.
>
> **[3:46](https://www.linkedin.com/learning/responsible-ai-and-application-development/considerations-in-model-deployment?u=76281980&t=226)** And from there you can continually improve it, and in so doing, make it more responsible and less biased.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2), find (1)
> **Code Keywords:** let (1), this. (1), case. (1)
> **Definitions:** is a  (2), means that (1)
> **Code Identifiers:** ios (1)
> **Analogies:** for example (1)
> **Speakers:** - we (1)

#### Ops and continuous evaluation
> [LinkedIn Learning](https://www.linkedin.com/learning/responsible-ai-and-application-development/ops-and-continuous-evaluation?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/responsible-ai-and-application-development/ops-and-continuous-evaluation?u=76281980&t=1)** - Training your first model and getting it into your users' hands is just the first step in building a system.
>
> **[0:07](https://www.linkedin.com/learning/responsible-ai-and-application-development/ops-and-continuous-evaluation?u=76281980&t=7)** We've looked at responsibility in end-to-end training and deploying of your model, but there is another opportunity to stay on target and do better with the operations of your model.
>
> **[0:16](https://www.linkedin.com/learning/responsible-ai-and-application-development/ops-and-continuous-evaluation?u=76281980&t=16)** And let's look at that in a little more detail.
>
> **[0:18](https://www.linkedin.com/learning/responsible-ai-and-application-development/ops-and-continuous-evaluation?u=76281980&t=18)** The process of MLOps can be broken down into six steps, going from data to deployment.
>
> **[0:24](https://www.linkedin.com/learning/responsible-ai-and-application-development/ops-and-continuous-evaluation?u=76281980&t=24)** We've looked at the data, training, testing, and deployment pipelines, and we've explored them from the perspective of responsibility and bias in detail already.
>
> **[0:34](https://www.linkedin.com/learning/responsible-ai-and-application-development/ops-and-continuous-evaluation?u=76281980&t=34)** But an important part of Ops is monitoring.
>
> **[0:37](https://www.linkedin.com/learning/responsible-ai-and-application-development/ops-and-continuous-evaluation?u=76281980&t=37)** MLOps emphasizes comprehensive monitoring, and this is crucial for identifying bias and performance issues.
>
> **[0:44](https://www.linkedin.com/learning/responsible-ai-and-application-development/ops-and-continuous-evaluation?u=76281980&t=44)** When looking at monitoring from a responsibility perspective, there's two main things that you should consider.
>
> **[0:49](https://www.linkedin.com/learning/responsible-ai-and-application-development/ops-and-continuous-evaluation?u=76281980&t=49)** The first is performance segmentation, where you should explore and capture your model's performance in different environments.
>
> **[0:57](https://www.linkedin.com/learning/responsible-ai-and-application-development/ops-and-continuous-evaluation?u=76281980&t=57)** And these include, but they're not limited to, tracking the performance across different demographics, looking at the model's latency and resource usage across different device types and locales, feature availability and performance across regions, and thoroughly documenting error rates across languages, demographics, regions, all in all that kind of stuff.
>
> **[1:19](https://www.linkedin.com/learning/responsible-ai-and-application-development/ops-and-continuous-evaluation?u=76281980&t=79)** The next is data drift.
>
> **[1:21](https://www.linkedin.com/learning/responsible-ai-and-application-development/ops-and-continuous-evaluation?u=76281980&t=81)** And here, you need to check on both the input and output data for your model over time.
>
> **[1:27](https://www.linkedin.com/learning/responsible-ai-and-application-development/ops-and-continuous-evaluation?u=76281980&t=87)** One thing is to check on the trends in input distribution changes that might indicate exclusion.
>
> **[1:35](https://www.linkedin.com/learning/responsible-ai-and-application-development/ops-and-continuous-evaluation?u=76281980&t=95)** If one demographic is more likely to drop out of your app, that's a signal that you might be biased against them somehow.
>
> **[1:42](https://www.linkedin.com/learning/responsible-ai-and-application-development/ops-and-continuous-evaluation?u=76281980&t=102)** Similarly, tracking feature availability and results across different user segments could surface important information that helps you do better with underrepresented groups.
>
> **[1:53](https://www.linkedin.com/learning/responsible-ai-and-application-development/ops-and-continuous-evaluation?u=76281980&t=113)** Finally, all applications will degrade in performance over time.
>
> **[1:58](https://www.linkedin.com/learning/responsible-ai-and-application-development/ops-and-continuous-evaluation?u=76281980&t=118)** As situations change, it's a given that this is going to happen, but if it's more severe for some groups than it is for others, you might need to spring into action with updates.
>
> **[2:09](https://www.linkedin.com/learning/responsible-ai-and-application-development/ops-and-continuous-evaluation?u=76281980&t=129)** All of this data should lead you to a feedback loop where you can continually improve and update your model.
>
> **[2:16](https://www.linkedin.com/learning/responsible-ai-and-application-development/ops-and-continuous-evaluation?u=76281980&t=136)** Depending on what you learn while monitoring, you can get new data to fix any bias issues discovered through holes in your dataset.
>
> **[2:24](https://www.linkedin.com/learning/responsible-ai-and-application-development/ops-and-continuous-evaluation?u=76281980&t=144)** You can retrain your model with new data or modify the model architecture to fix or mitigate any of the issues that you found.
>
> **[2:32](https://www.linkedin.com/learning/responsible-ai-and-application-development/ops-and-continuous-evaluation?u=76281980&t=152)** You can improve your test cases, and you can test against new data and models that you've retrained.
>
> **[2:38](https://www.linkedin.com/learning/responsible-ai-and-application-development/ops-and-continuous-evaluation?u=76281980&t=158)** And of course, you can redeploy.
>
> **[2:40](https://www.linkedin.com/learning/responsible-ai-and-application-development/ops-and-continuous-evaluation?u=76281980&t=160)** And remember, there may have been devices that weren't available when you first built and deployed your model, so you'll need to redeploy for them.
>
> **[2:47](https://www.linkedin.com/learning/responsible-ai-and-application-development/ops-and-continuous-evaluation?u=76281980&t=167)** And this cycle repeats with more monitoring of the new system.
>
> **[2:50](https://www.linkedin.com/learning/responsible-ai-and-application-development/ops-and-continuous-evaluation?u=76281980&t=170)** This way, you can continually learn and improve your system, not just from a responsibility of bias aspect, but for everything, from performance to user experience to overall quality.
>
> **[3:03](https://www.linkedin.com/learning/responsible-ai-and-application-development/ops-and-continuous-evaluation?u=76281980&t=183)** So when you've put all of these steps that we've covered together into your overall machine learning strategy, you'll be taking a huge leap towards building better and more responsible AI.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), include, (1), finally, (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - training (1)


### Conclusion

#### Continue your responsible AI journey
> [LinkedIn Learning](https://www.linkedin.com/learning/responsible-ai-and-application-development/continue-your-responsible-ai-journey?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/responsible-ai-and-application-development/continue-your-responsible-ai-journey?u=76281980&t=0)** - Wow, that's a lot of information and we have come a long way.
>
> **[0:05](https://www.linkedin.com/learning/responsible-ai-and-application-development/continue-your-responsible-ai-journey?u=76281980&t=5)** We've been on a journey to explore the end-to-end machine learning lifecycle and explored how bias and responsible practices can and should intersect with everything you do while performing machine learning.
>
> **[0:18](https://www.linkedin.com/learning/responsible-ai-and-application-development/continue-your-responsible-ai-journey?u=76281980&t=18)** We started with data and understanding that the very act of data collection and curation can encode societal biases, and we learned that asking what is not represented in a data set is just as important as what is.
>
> **[0:34](https://www.linkedin.com/learning/responsible-ai-and-application-development/continue-your-responsible-ai-journey?u=76281980&t=34)** Then we saw pre-processing and augmentation and how the technical choices we make can amplify or mitigate existing biases.
>
> **[0:43](https://www.linkedin.com/learning/responsible-ai-and-application-development/continue-your-responsible-ai-journey?u=76281980&t=43)** Something as seemingly natural as normalizing features or handling missing values can have profound implications for different groups of people.
>
> **[0:53](https://www.linkedin.com/learning/responsible-ai-and-application-development/continue-your-responsible-ai-journey?u=76281980&t=53)** When looking at data augmentation, we saw that while that's a powerful way to expand our data set and reduce overfitting, it also has to be done thoughtfully so as not to introduce new issues.
>
> **[1:06](https://www.linkedin.com/learning/responsible-ai-and-application-development/continue-your-responsible-ai-journey?u=76281980&t=66)** We looked at model architectures and how the choice of architecture, loss function and optimizer can inadvertently lead to issues of bias, where the very process of rewarding the machine for learning can lead it to learning the wrong things.
>
> **[1:20](https://www.linkedin.com/learning/responsible-ai-and-application-development/continue-your-responsible-ai-journey?u=76281980&t=80)** Similarly, for transfer learning and fine tuning, we saw that building on existing work is not just a handy shortcut to help us build better and quicker, but it does come with a cost and that is of inheriting the existing biases within that model.
>
> **[1:37](https://www.linkedin.com/learning/responsible-ai-and-application-development/continue-your-responsible-ai-journey?u=76281980&t=97)** We also saw that while training our model, we have to keep a close eye on its performance and how by digging deeper than just accuracy and loss, we can discover interesting details and potential biases that we weren't aware of.
>
> **[1:51](https://www.linkedin.com/learning/responsible-ai-and-application-development/continue-your-responsible-ai-journey?u=76281980&t=111)** When looking at deployment, we saw that we need to understand where and how a model gets deployed because what works on our test systems may not work in the field.
>
> **[2:02](https://www.linkedin.com/learning/responsible-ai-and-application-development/continue-your-responsible-ai-journey?u=76281980&t=122)** Particularly in emerging markets where lower cost and lower powered hardware is commonplace, responsibility does not end with us building a fair model.
>
> **[2:12](https://www.linkedin.com/learning/responsible-ai-and-application-development/continue-your-responsible-ai-journey?u=76281980&t=132)** We have to make sure that it works across different and diverse environments.
>
> **[2:17](https://www.linkedin.com/learning/responsible-ai-and-application-development/continue-your-responsible-ai-journey?u=76281980&t=137)** Finally, we looked at MLOps and how it provides a framework for continuous improvement, allowing us to monitor, detect, and address bias throughout the system's lifecycle.
>
> **[2:29](https://www.linkedin.com/learning/responsible-ai-and-application-development/continue-your-responsible-ai-journey?u=76281980&t=149)** We saw how to gather data and implement feedback loops to help our system be better.
>
> **[2:35](https://www.linkedin.com/learning/responsible-ai-and-application-development/continue-your-responsible-ai-journey?u=76281980&t=155)** Remember, irresponsible practices can creep in at any stage and they're almost always unintended.
>
> **[2:42](https://www.linkedin.com/learning/responsible-ai-and-application-development/continue-your-responsible-ai-journey?u=76281980&t=162)** They can be subtle in ways that aren't immediately apparent.
>
> **[2:46](https://www.linkedin.com/learning/responsible-ai-and-application-development/continue-your-responsible-ai-journey?u=76281980&t=166)** Each decision point along the way is an opportunity for you to either reinforce or challenge existing inequities.
>
> **[2:54](https://www.linkedin.com/learning/responsible-ai-and-application-development/continue-your-responsible-ai-journey?u=76281980&t=174)** How will you respond to that?
>
> **[2:56](https://www.linkedin.com/learning/responsible-ai-and-application-development/continue-your-responsible-ai-journey?u=76281980&t=176)** And that brings me to the end of this course.
>
> **[2:58](https://www.linkedin.com/learning/responsible-ai-and-application-development/continue-your-responsible-ai-journey?u=76281980&t=178)** And next up my friend Jigyasa is going to go into detail around AI model integration with a focus on large language models.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Code Keywords:** function (1), finally, (1)
> **Definitions:** is an  (1)
> **Speakers:** - wow (1)


## Path Context

### In [[Building AI Products- Implementing Responsible AI Professional Certificate by LinkedIn Learning]]
← [[Learning XAI- Explainable Artificial Intelligence]] | **4 of 7** | [[Integrating AI into the Product Architecture]] →

## Part of

- [[Building AI Products- Implementing Responsible AI Professional Certificate by LinkedIn Learning]]

## Appears In

- [[Building AI Products- Implementing Responsible AI Professional Certificate by LinkedIn Learning]]

## Related Courses

_Courses sharing skills:_

- [[Exploring the Future of Development with GitHub Copilot Workspace]] — Artificial Intelligence (AI), AI Software Development
- [[Implement and Evaluate Cloud AI Solutions- Foundations of Responsible AI]] — Artificial Intelligence (AI), Responsible AI
- [[AI Orchestration- Foundations]] — Artificial Intelligence (AI), AI Software Development
- [[Welcome To The Building Ai Products Understanding The Workflow Professional Certificate]] — Artificial Intelligence (AI), AI Software Development
- [[Responsible AI- Global Risks, Governance, and Human Oversight]] — Artificial Intelligence (AI), Responsible AI

---

[↑ Back to top](#)