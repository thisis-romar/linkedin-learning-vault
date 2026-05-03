---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: security-risks-in-ai-and-machine-learning-categorizing-attacks-and-failure-modes-2022
url: "https://www.linkedin.com/learning/security-risks-in-ai-and-machine-learning-categorizing-attacks-and-failure-modes-2022"
duration_minutes: 71
duration: 1h 11m
level: Beginner
updated: 2/23/2022
learners: 4692
skills:
  - Machine Learning
  - Security Risk
  - Artificial Intelligence (AI)
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQHhUUuH979xIA/learning-public-crop_675_1200/B56Zm6nBRSHkAY-/0/1759772415815?e=2147483647&amp;v=beta&amp;t=pdfcdwtoQPJ71B7YZmpVgtHNh0KM2iy-wsr9ynM0AfM"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Develop Your AI Skills as a Cybersecurity Professional]]'
prev_courses:
  - '[[Artificial Intelligence and Application Security]]'
next_courses:
  - '[[Red Teaming for Generative AI- Building Robust and Responsible Solutions]]'
path_nav: '[{"path":"Develop Your AI Skills as a Cybersecurity Professional","position":4,"total":8,"prev":"Artificial Intelligence and Application Security","next":"Red Teaming for Generative AI- Building Robust and Responsible Solutions"}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - topic/security
  - skill/machine-learning
  - skill/security-risk
  - skill/artificial-intelligence-ai
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Security%20Risks%20in%20AI%20and%20Machine%20Learning-%20Categorizing%20Attacks%20and%20Failure%20Modes%20(2022).md)

![Security Risks in AI and Machine Learning: Categorizing Attacks and Failure Modes (2022)](https://media.licdn.com/dms/image/v2/D560DAQHhUUuH979xIA/learning-public-crop_675_1200/B56Zm6nBRSHkAY-/0/1759772415815?e=2147483647&amp;v=beta&amp;t=pdfcdwtoQPJ71B7YZmpVgtHNh0KM2iy-wsr9ynM0AfM)

# Security Risks in AI and Machine Learning: Categorizing Attacks and Failure Modes (2022)

> From predicting medical outcomes to managing retirement funds, we put a lot of trust in machine learning (ML) and artificial intelligence (AI) technology, even though we know they are vulnerable to attacks, and that sometimes they can completely fail us. In this course, instructor Diana Kelley pulls real-world examples from the latest ML research and walks through ways that ML and AI can fail, pro

> [LinkedIn Learning](https://www.linkedin.com/learning/security-risks-in-ai-and-machine-learning-categorizing-attacks-and-failure-modes-2022) | 1h 11m | Beginner | 5K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Machine learning security concerns](#machine-learning-security-concerns)
  - [What you should know](#what-you-should-know)
- [**1. Machine Learning Foundations**](#1-machine-learning-foundations) (4 videos)
  - [How systems can fail and how to protect them](#how-systems-can-fail-and-how-to-protect-them)
  - [Why does ML security matter](#why-does-ml-security-matter)
  - [Attacks vs. unintentional failure modes](#attacks-vs-unintentional-failure-modes)
  - [Security goals for ML: CIA](#security-goals-for-ml-cia)
- [**2. Intentional Failure Modes/Attacks**](#2-intentional-failure-modesattacks) (9 videos)
  - [Perturbation attacks and AUPs](#perturbation-attacks-and-aups)
  - [Poisoning attacks](#poisoning-attacks)
  - [Reprogramming neural nets](#reprogramming-neural-nets)
  - [Physical domain (3D adversarial objects)](#physical-domain-3d-adversarial-objects)
  - [Supply chain attacks](#supply-chain-attacks)
  - [Model inversion](#model-inversion)
  - [System manipulation](#system-manipulation)
  - [Membership inference and model stealing](#membership-inference-and-model-stealing)
  - [Backdoors and existing exploits](#backdoors-and-existing-exploits)
- [**3. Unintentional Failure Modes/Intrinsic Design Flaws**](#3-unintentional-failure-modesintrinsic-design-flaws) (5 videos)
  - [Reward hacking](#reward-hacking)
  - [Side effects in reinforcement learning](#side-effects-in-reinforcement-learning)
  - [Distributional shifts and incomplete testing](#distributional-shifts-and-incomplete-testing)
  - [Overfitting/underfitting](#overfittingunderfitting)
  - [Data bias considerations](#data-bias-considerations)
- [**4. Building Resilient ML**](#4-building-resilient-ml) (4 videos)
  - [Effective techniques for building resilience in ML](#effective-techniques-for-building-resilience-in-ml)
  - [ML dataset hygiene](#ml-dataset-hygiene)
  - [ML adversarial training](#ml-adversarial-training)
  - [ML access control to APIs](#ml-access-control-to-apis)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Machine learning security concerns](https://www.linkedin.com/learning/security-risks-in-ai-and-machine-learning-categorizing-attacks-and-failure-modes-2022/machine-learning-security-concerns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/security-risks-in-ai-and-machine-learning-categorizing-attacks-and-failure-modes-2022/machine-learning-security-concerns?u=76281980&t=0)** - Machine learning and [[Artificial Intelligence (AI)|artificial intelligence]] are here. We use them in so many parts of our lives, everything from predicting the weather to managing our retirement investments. And that means that we're putting a lot of trust in technology that can sometimes feel a little magical. But is that trust warranted? Imagine what could happen with defective AI and ML when they fail. These systems are used in so many aspects of our lives, from financial services to healthcare to autonomous driving cars. So when they fail, that's a big deal. After taking this course, you will have a high-level understanding of how AI and ML fail. Using examples from the latest research, I'll explain both intentional and unintentional failure modes in the systems. And I'll walk you through the ways that organizations are using to build resilience into their AI and ML systems. I'm Diana Kelley, and I hope you'll join me for this course on How and Why AI and ML Fail and what you can do to make them stronger.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Artificial Intelligence (AI)|Artificial intelligence]] (1)
> **CLI Commands:** make (1)
> **Definitions:** means that (1)
> **Analogies:** imagine (1)
> **Speakers:** - machine (1)

#### [What you should know](https://www.linkedin.com/learning/security-risks-in-ai-and-machine-learning-categorizing-attacks-and-failure-modes-2022/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/security-risks-in-ai-and-machine-learning-categorizing-attacks-and-failure-modes-2022/what-you-should-know?u=76281980&t=0)** - [Instructor] This class was built for executives and security practitioners that want to know where and how AI and ML can fail. You don't need a deep technical background in AI or ML, or even [[Cybersecurity]], but a working knowledge of what AI and ML are will help you. Also, we will use common cybersecurity terms, like risk and impact.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cybersecurity]] (2)
> **Speakers:** - [instructor] (1)


### 1. Machine Learning Foundations

[↑ Back to Table of Contents](#table-of-contents)

#### [How systems can fail and how to protect them](https://www.linkedin.com/learning/security-risks-in-ai-and-machine-learning-categorizing-attacks-and-failure-modes-2022/how-systems-can-fail-and-how-to-protect-them?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/security-risks-in-ai-and-machine-learning-categorizing-attacks-and-failure-modes-2022/how-systems-can-fail-and-how-to-protect-them?u=76281980&t=0)** - [[Artificial Intelligence (AI)|Artificial intelligence]], AI, and machine learning, ML, are transforming our worlds. They're involved in so many things we do, everything from helping to keep our crops watered properly to ensuring that our food supply chain is working as expected so that food can get to our tables. It's also how hoping to keep us healthy, by ensuring that doctors can find early stage disease. This is really important work and that's why it's so important that we build these systems as securely and reliably as possible to ensure that these technologies can accomplish their functions safely for all of us, this course explains how and why AI and ML can fail. We explain why some failures are unintentional like a self-driving car that can't see road signs during a blizzard, and others are intentional, like an attacker try to extract sensitive, personal information from a model. For reference, we will use the framework, failure modes and machine learning to illustrate how and why ML and AI don't always do what we expect them to. Once you have a solid foundation and understanding of why these systems and the consequences of that failure, we'll wrap up with a module that summarizes some of the most effective ways to build AI and ML solutions that are resilient and failure resistant.
>
> **[1:35](https://www.linkedin.com/learning/security-risks-in-ai-and-machine-learning-categorizing-attacks-and-failure-modes-2022/how-systems-can-fail-and-how-to-protect-them?u=76281980&t=95)** There are four main concerns when approaching machine learning security. Why we need protection, targeted failure, accidental failure and mitigation. First we'll look at why it's so important to protect AI and ML. It's no secret the computer failure and disruption can result in cascading societal impacts, from a lock on 911 call systems, to interruption of the gasoline supply chain on the east coast. Building secure system requires a deep understanding of why and how those systems can fail. So in the second section, we take a look at failure modes that occur when an attacker attempts to disrupt system function on purpose. Of course, not all failures are intentional or on purpose. So in our third section, we review the ways that and ML can fail when not under attack, due to issues like incomplete training. When builders know what can go wrong, they're armed with the knowledge needed to create and train failure resistant systems. We wrap the course with details and guidance on how to build security and resilience into AI and ML, while are no absolutes in life, the approaches outlined in the final section provide mitigation guidance for builders and buyers alike. Each section is designed to be viewed as a standalone. However, if you don't already have a robust understanding of what can go wrong with AI and ML systems, we strongly recommend that you review those sections
>
> **[3:08](https://www.linkedin.com/learning/security-risks-in-ai-and-machine-learning-categorizing-attacks-and-failure-modes-2022/how-systems-can-fail-and-how-to-protect-them?u=76281980&t=188)** before watching the one on mitigation. The better you understand why and how these systems can fail, the more prepared you'll be to build protections and controls into your AI and ML.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Artificial Intelligence (AI)|Artificial intelligence]] (1)
> **CLI Commands:** find (1)
> **Speakers:** - artificial (1)

#### [Why does ML security matter](https://www.linkedin.com/learning/security-risks-in-ai-and-machine-learning-categorizing-attacks-and-failure-modes-2022/why-does-ml-security-matter?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/security-risks-in-ai-and-machine-learning-categorizing-attacks-and-failure-modes-2022/why-does-ml-security-matter?u=76281980&t=0)** - Science fiction books and movies are full of general knowledge AI, hypersmart independent systems that can think on their own and even repair themselves if a malfunction occurs. The reality is that while AI and ML can accomplish a dazzling array of sophisticated tasks, they are not yet sentient. And unless some element of self-healing functionality is built in, they are not able to fix themselves if something breaks. So it's up to us as builders to analyze where and how things can go wrong within AI and ML systems and to build in resilience and protections. An important first step to understanding how AI and ML can fail is via [[Threat Modeling]] and risk assessments. As security professionals, you probably already know how to perform threat modeling, but it may look a little different with AI and ML due to emergent properties related to the way the systems work. One of the most important considerations is the level of trust that people may place in the output of an AI or ML model. Today, many of us would have a healthy skepticism if we were in an autonomous self-driving vehicle that then attempted to run a stop sign. But it's not very likely that the average person would manually check a complex calculation performed automatically within a spreadsheet. And that's where the problem lies. Once people feel comfortable with self-driving cars, we might focus on doing other things, like reading or watching the news while the car is driving. And we might not even notice
>
> **[1:35](https://www.linkedin.com/learning/security-risks-in-ai-and-machine-learning-categorizing-attacks-and-failure-modes-2022/why-does-ml-security-matter?u=76281980&t=95)** if that self-driving vehicle was failing to stop when it should. Now let's think about other ways AI and ML systems may, and in some cases are, currently being used to make investment decisions for robo-advisor management retirement portfolios, to assess someone's credit risk, and to identify job candidates from the resume and help move them to the interview phase. These are deeply important decisions that can impact people's quality of life. And as our trust in these systems in the AI and ML used to make those decisions increases, the responsibility to ensure they operate as expected, with integrity, also goes up. Another extremely important aspect of security and [[Privacy]] in AI and ML is the need for training data. If you've heard the phrase, data is the new oil. You may already be thinking about this. ML systems require huge amounts of data during the training and testing phases. Finding the right data sets and ensuring they are inclusive and not biased is a critically important part of the process. Since many traditional apps don't need huge amounts of data for training, understanding the risks for AI and ML data sets may be a new consideration for developers and security testers, which is a great segue into another emergent concern with the security of AI and ML, the fact that these systems are quite new in the market. Being new means that there aren't a lot of people
>
> **[3:10](https://www.linkedin.com/learning/security-risks-in-ai-and-machine-learning-categorizing-attacks-and-failure-modes-2022/why-does-ml-security-matter?u=76281980&t=190)** who have experience designing and building them securely. And this consideration is compounded by the fact that we may not always know where AI and ML are present. If, for example, you are creating an app that uses services and functions via third-party APIs, such as a financial offering that pulls credit scores from an external credit provider, you may have hidden ML in your composite application. To ensure the overall reliability of your offering, you will need to assess the security of the machine learning and any services or functions that are called from or used by your application. Lastly, we should be extremely diligent with security and resilience in AI and ML due to their potential for negative impacts. Risk is often described as a measure of likelihood times impact, and the impact of bias or malfunctioning AI and ML could have severe negative consequences on people's lives. An ML radiograph classifier that gives a person with stage IV cancer the all clear or an AI bot that denies a family a new home mortgage due to poisoned data could literally mean the difference between survival and death. And this is why it is so important for developers and builders to get the threat modeling and security right. Lastly, we should be extremely diligent with security and resilient design for AI and ML, because the failure of these systems can have such significant impacts on people's lives.
>
> **[4:46](https://www.linkedin.com/learning/security-risks-in-ai-and-machine-learning-categorizing-attacks-and-failure-modes-2022/why-does-ml-security-matter?u=76281980&t=286)** Risk is defined as likelihood times impact. And when impact is very high, that means that you want to be very careful with the risk. Imagine, for example, a machine learning classifier used by a doctor to determine whether or not a tumor is cancerous and it misdiagnosing or misclassifying that radiograph as being benign, when in fact it's stage IV or an AI system that's used to determine whether or not a family is eligible for a mortgage and having poisoned data and that family not getting the mortgage that they need. This is why it is so important for builders and developers to perform proper threat modeling and design their systems with security and reliability in mind.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Threat Modeling]] (4), [[Privacy]] (1)
> **Definitions:** is a  (2), means that (2), defined as (1)
> **Analogies:** for example (2), such as (1), imagine (1)
> **CLI Commands:** make (2)
> **Speakers:** - science (1)

#### [Attacks vs. unintentional failure modes](https://www.linkedin.com/learning/security-risks-in-ai-and-machine-learning-categorizing-attacks-and-failure-modes-2022/attacks-vs-unintentional-failure-modes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/security-risks-in-ai-and-machine-learning-categorizing-attacks-and-failure-modes-2022/attacks-vs-unintentional-failure-modes?u=76281980&t=0)** - [Instructor] If one of the apps on your phone crashes, do you immediately worry, oh no, is my phone under attack by cyber-criminals? Or do you maybe shake it off and think the developers didn't test it for stability or maybe even that your phone is due for a reboot? The reality is that apps and systems can fail for both intentional and unintentional reasons. A group of experts at [[Microsoft]] and Harvard University published a taxonomy of failure modes in machine learning that describes both types of failures. And I use their research frequently as a reference point when preparing this class. Although both intentional and unintentional attacks lead to system malfunction, the underlying root cause may require a different mitigation approach. Intentional attacks are adversarial. In other words, someone is on purpose trying to disrupt the operation of the system or to use the system to their own advantage. A common adversarial attack that's been in the news lately is ransomware. Most intentional attacks against AI and ML exploit features unique to these technologies. An attacker could interfere with an ML-driven image classification system to make it return a false or incorrect result. A classic way to accomplish this is via perturbation, introducing noise to an image. By changing the right pixels, not visible to the human eye, a photo of a penguin appears to the ML classification system as a bicycle.
>
> **[1:32](https://www.linkedin.com/learning/security-risks-in-ai-and-machine-learning-categorizing-attacks-and-failure-modes-2022/attacks-vs-unintentional-failure-modes?u=76281980&t=92)** To create a system that is resilient to intentional attacks, developers and designers must understand the kinds of attacks and how they work in order to build the right controls into systems. The other way that AI and ML can fail is unintentionally. Let's go back to our crashing app example. It could be that the designers didn't stress test the app. No bad guy tried to make the app crash but by not testing it thoroughly, it failed in normal use. Common corruption, the introduction of natural perturbations or noise, is an example of unintentional failure in AI and ML. This unintentional failure could be dangerous for passengers in self-driving cars that use [[Computer Vision]] to read road signs. Stop signs have been designed to be easily recognizable by humans in varying lighting and weather conditions. If parts of the sign have worn off with age or obscured by rain or snow, chances are you and I would still recognize that red octagon as a stop sign. But if the autonomous vehicle's image classification system was only trained to recognize the ideal case stop signs, then the weather-corrupted sign might not be recognized as a stop sign at all. Without taking common corruption into account, an old stop sign could be the difference between life and death.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft]] (1), [[Computer Vision]] (1)
> **CLI Commands:** make (2)
> **Definitions:** in other words (1), is an  (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)

#### [Security goals for ML: CIA](https://www.linkedin.com/learning/security-risks-in-ai-and-machine-learning-categorizing-attacks-and-failure-modes-2022/security-goals-for-ml-cia?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/security-risks-in-ai-and-machine-learning-categorizing-attacks-and-failure-modes-2022/security-goals-for-ml-cia?u=76281980&t=0)** - [Instructor] CIA. Confidentiality, integrity and availability are the foundational security goals. As security practitioners, we understand the importance of incorporating those goals into our workflows and our systems. And as we bring new technologies like AI and ML into the mix, we need to extend our CIA, confidentiality, integrity, and availability mindset to these new technologies. In addition to categorizing failure modes as either intentional or unintentional, they can also be assessed depending on which part do the CIA triad they impact. Keep in mind that some failure modes have crossover impacts, and span across security goals. While all failure modes matter, and should be addressed, due to resource and time constraints, that's not always possible. Therefore, it's helpful to be able to understand which goals of failure mode impacts to help with prioritization work. If the AI or ML failure mode results in exposure of private data, that impacts the goal of confidentiality. Model inversion. When an attacker is able to learn sensitive information about individuals by querying that machine learning API, application programming interface, is one example of this. For organizations that must meet strict [[Privacy]] regulations,
>
> **[1:33](https://www.linkedin.com/learning/security-risks-in-ai-and-machine-learning-categorizing-attacks-and-failure-modes-2022/security-goals-for-ml-cia?u=76281980&t=93)** the confidentiality security goal will be high priority. Failures that result in unreliable or inaccurate model outputs impact system integrity. If an attacker intentionally poisons the data set either during training or in use, the output of the model will be tainted. In models that are used to predict outcomes, like is it going to rain today, can result in skewed or useless projections if they've been poisoned. And finally, whether a system can be access or not relates to availability. In machine learning, existing software dependencies, and attacks such as buffer overflows, and distributed denial of service, DDoS, can impact that availability as they would any other piece of software. If five nine's uptime of the system is a high priority as it often is in production environments, then focus on reducing, and mitigating failure modes that cause disruptions and availability. As you go through this course, keep CIA in mind, and consider how you would classify each of the failure modes against your own corporate security goals.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Privacy]] (1)
> **Env Vars:** cia (4), api (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)


### 2. Intentional Failure Modes/Attacks

[↑ Back to Table of Contents](#table-of-contents)

#### [Perturbation attacks and AUPs](https://www.linkedin.com/learning/security-risks-in-ai-and-machine-learning-categorizing-attacks-and-failure-modes-2022/perturbation-attacks-and-aups?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/security-risks-in-ai-and-machine-learning-categorizing-attacks-and-failure-modes-2022/perturbation-attacks-and-aups?u=76281980&t=0)** - If you've ever taken a long drive while listening to the radio, you know how frustrating it can be when enough static or noise interferes that you can't even recognize your favorite song. ML is vulnerable to noise too, and when an attacker or other entity introduces noise into the data on purpose, that's known as adversarial perturbation. In machine learning, it occurs when noise is introduced, causing the model to misclassify the outcome, just as you might not be able to identify your favorite song if there's enough static interference on the radio or be able to see road markers if your vision is blurred by heavy rain. So why is the introduction of noise to data a potential failure mode? Well, let's say you're an oncologist who is using an ML classifying tool to assess whether or not a radiograph or X-ray indicates that a patient has a cancerous or a benign mass. If an attacker wanted to interfere with the classification activity and cause the doctor to make an inaccurate diagnosis, the attacker could add perturbation to make a cancerous mass look benign. Going upstream in the process to when the model is being trained, an adversary might train the model with perturbed images to ensure that all or most of the classifications fail to be accurate. Let's see this in action using some research from [[Google]]. Here's a photo of a panda
>
> **[1:33](https://www.linkedin.com/learning/security-risks-in-ai-and-machine-learning-categorizing-attacks-and-failure-modes-2022/perturbation-attacks-and-aups?u=76281980&t=93)** that looks to a human like a panda. The example machine learning algorithm classifies it as a panda with 57.7% confidence, and that's accurate. Now, if the adversary perturbs the image by adding a vector that is not visible to humans but is visible to machines, the machine learning algorithm now classifies it as a gibbon with 99.3% confidence, and it still looks like a panda to us. Now, finding the perfect perturbation for each image may be time-intensive for attackers. However, researchers have found a perturbation shortcut called universal adversarial perturbations, or UAPs. When the same image perturbation here illustrated in the center of the graphic is added to any image in a dataset shown on the left, the model misclassifies that image, as shown on the right. So just as that panda was a gibbon, now a joystick is a Chihuahua. A big question is, can UAPs go beyond images to cause failure in other kinds of ML systems? Well, researchers are looking at how they could be used to evade anti-malware systems that use ML. Malware systems that leverage machine learning are often advertised as superior to solutions that use older technologies such as pattern matching and regular expressions. However, an adversary that can successfully use UAPs against an ML-based [[Malware Detection]] model may be able to evade detection entirely.
>
> **[3:10](https://www.linkedin.com/learning/security-risks-in-ai-and-machine-learning-categorizing-attacks-and-failure-modes-2022/perturbation-attacks-and-aups?u=76281980&t=190)** To test this ideas, researchers injected specially crafted UAP code into malicious binaries and submitted them to the malware classifiers. This technique succeeded. It resulted in a 30% evasion rate, rendering the machine learning-based anti-malware solution significantly less effective.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (1), [[Malware Detection]] (1)
> **CLI Commands:** make (2)
> **Versions:** 57.7 (1), 99.3 (1)
> **Definitions:** known as (1), is a  (1)
> **Env Vars:** uap (1)
> **Analogies:** such as (1)
> **Speakers:** - if (1)

#### [Poisoning attacks](https://www.linkedin.com/learning/security-risks-in-ai-and-machine-learning-categorizing-attacks-and-failure-modes-2022/poisoning-attacks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/security-risks-in-ai-and-machine-learning-categorizing-attacks-and-failure-modes-2022/poisoning-attacks?u=76281980&t=0)** - [Instructor] If you see a picture of a skull and crossbones on a bottle, chances are, you know that that bottle has something in it that could hurt or even make you sick or kill you. In AI and ML, poison data makes the system or model sick too. Machine learning systems learn using data. If that data's been tampered with, the system will not learn what was intended. Consider a machine learning system that's being used to identify polar bears in Greenland to study their migration patterns. If the images of polar bears were poisoned and replaced with images of penguins the system would not be able to track the polar bears and not be able to serve the function it was created for. Marcus Comite of the Harvard Kennedy School Belfer Center described poisoning attacks as corrupting the process during which the AI system is created so that the resulting system malfunctions in a way desired by the attacker. When machine learning systems continue to learn in production, they're being trained on live, and in some cases, un-vetted data sets. This can also lead to unintended consequences or failure. In March, 2016, [[Microsoft]] researchers launched an AI bot on Twitter that they named Tay. Tay was meant to learn from interactions on Twitter how to acquire more natural language. There were no constraints on what people could say to Tay. And unfortunately, a subset of the Twitter-verse quickly figured out how to poison Tay's learning
>
> **[1:32](https://www.linkedin.com/learning/security-risks-in-ai-and-machine-learning-categorizing-attacks-and-failure-modes-2022/poisoning-attacks?u=76281980&t=92)** by tweeting offensive racist phrases at the bot, which the bot then repeated. So rather than being able to study how the bot learned from Twitter due to the poisoning, Microsoft had to take the bot down within 24 hours of launch. Data poisoning can impact other types of AI and ML, too. Regression analysis is often used in financial services to help manage investment portfolios. It's also used in the pharmaceutical sector to determine things like dosage for medications. Researchers in Germany recently published a paper on data poisoning attacks in regression learning and analysis. The Warfarin Dataset is used to predict the correct therapeutic dose for patients. The data set is a joint effort with 59 contributors each contributing about 1.7% of the data. By submitting around 2% poison data, about the same percentage as all the other contributors the researchers were able to increase the median error rate for recommended dosage and decrease the acceptable dosage rate. In other words they would've then been predicting the wrong dosage for patients. Poisoning attacks don't have to be targeted to work. They succeed as long as the system fails in any way to function properly. A form of machine learning denial of service is then achieved. Tay saying offensive things got a lot of attention, but if attackers had simply succeeded
>
> **[3:06](https://www.linkedin.com/learning/security-risks-in-ai-and-machine-learning-categorizing-attacks-and-failure-modes-2022/poisoning-attacks?u=76281980&t=186)** in having the bot spout gibberish that would've been a failure too.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft]] (2)
> **Definitions:** is a  (1), in other words (1)
> **CLI Commands:** make (1)
> **Versions:** 1.7 (1)
> **Analogies:** picture (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### [Reprogramming neural nets](https://www.linkedin.com/learning/security-risks-in-ai-and-machine-learning-categorizing-attacks-and-failure-modes-2022/reprogramming-neural-nets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/security-risks-in-ai-and-machine-learning-categorizing-attacks-and-failure-modes-2022/reprogramming-neural-nets?u=76281980&t=0)** - [Instructor] Neural nets and [[Deep Learning]] systems are subsets of machine learning. Another way to attack these systems is to use a perturbation to reprogram the system to perform a task that it wasn't intended to. This is not to be confused with transfer learning, which is non-adversarial, and refers without when a machine learning system can transfer knowledge to a different problem space. When attackers attempt to reprogram neural nets, they send unintended queries to the model, inducing it to solve new or unintended tasks. That may not sound too bad, but researchers warn that this attack could be used to steal resources or fool systems. Consider the CAPTCHA. CAPTCHAs are 2D images that humans look at and then identify as things like a crosswalk or a traffic light or a mountain. But if an image classifier was able to accurately identify these 2D images as well as, or even better than, a human, that bot would be granted access as though it was a human. This kind of attack could make CAPTCHA useless in instances where it's used to limit abuse, such as to prevent bots from creating accounts and posting fake reviews on a retail site. It could also lead to a theft of resources and denial of service from bot overload, the very thing that CAPTCHA was in place to prevent. Although there have not been a lot of misuse cases studied in this area yet,
>
> **[1:32](https://www.linkedin.com/learning/security-risks-in-ai-and-machine-learning-categorizing-attacks-and-failure-modes-2022/reprogramming-neural-nets?u=76281980&t=92)** designers should keep this failure mode in mind when building resilient AI and ML systems.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Deep Learning]] (1)
> **Env Vars:** captcha (3)
> **CLI Commands:** make (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Physical domain (3D adversarial objects)](https://www.linkedin.com/learning/security-risks-in-ai-and-machine-learning-categorizing-attacks-and-failure-modes-2022/physical-domain-3d-adversarial-objects?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/security-risks-in-ai-and-machine-learning-categorizing-attacks-and-failure-modes-2022/physical-domain-3d-adversarial-objects?u=76281980&t=0)** - Think about autonomous cars on the highway and robots on manufacturing shop floors. These systems are operating in the physical world and the 3D realm is vulnerable to attack too. Physical domain attacks include attempts to mislead the ML system using physical models or vectors, and are sometimes referred to as machine learning optical illusions. 3D image classification is different from 2D because the item being classified can be viewed from so many different angles in three dimensional space, unlike 2D where we've only got the two dimensions. While perturbations in 2D space may not work to fool a 3D classifier, a perturbation created specifically for 3D just might. So to test the viability of using 3D adversarial objects, researchers designed and printed a 3D object that looked to human viewers just like a turtle. But to [[Google]]'s Inception v3 image classifier, it looked like a rifle at every angle. The researchers were also successful in tricking the same system into classifying a baseball as an espresso. [[Computer Vision]] perception is a cornerstone of autonomous driving. The system running the vehicle must be able to recognize
>
> **[1:33](https://www.linkedin.com/learning/security-risks-in-ai-and-machine-learning-categorizing-attacks-and-failure-modes-2022/physical-domain-3d-adversarial-objects?u=76281980&t=93)** and [[React.js|react]] to common objects found on the road, including traffic signs, lane indicators, and pedestrians. One way to cause a self-driving car to fail would be to paint new lines on the road to steer the car in the wrong direction. Researchers tested another physical attack on autonomous vehicle by using stickers printed on a regular printer. The stickers were applied to a stop sign in a way that mimic the look of graffiti so it wouldn't be identifiable to most people who saw it and they'd just think it was graffiti. We're all used to seeing spray painted stop signs. But to an autonomous car's vision, the stop sign was misclassified not as a stop sign 100% of the time in lab settings and 84.8% of the time using captured video frames from a field test. The real risk of negative impacts to public safety underscores the importance of understanding and mitigating physical domain attacks.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (1), [[Computer Vision]] (1), [[React.js|React]] (1)
> **Versions:** 84.8 (1)
> **Definitions:** is a  (1)
> **Analogies:** just like (1)
> **Speakers:** - think (1)

#### [Supply chain attacks](https://www.linkedin.com/learning/security-risks-in-ai-and-machine-learning-categorizing-attacks-and-failure-modes-2022/supply-chain-attacks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/security-risks-in-ai-and-machine-learning-categorizing-attacks-and-failure-modes-2022/supply-chain-attacks?u=76281980&t=0)** - [Instructor] With all of the great code plugins and libraries available for use, it's rare that anyone writes a new app from scratch these days. If you need map functionality in your app, you don't write a mapping system from scratch, you embed one of the many popular map services or APIs. Developers speed up delivery by leveraging each other's work thanks to a robust and complex software supply chain. A supply chain that includes AI and ML development too thanks to pretrained models and Model Zoos. One of the most well known pretrained models is GPT-3: Generative Pretrained Transformer 3. GPT-3 generates written text when it is queried with certain prompts. So for example, if you want to have a poem written about COVID, you could ask GPT-3 to do that for you. How about a cookie recipe or a new song? GPT-3 can do that too. It would be cost prohibitive for most companies to train their own language generation model, but using GPT-3 is fast and easy. Model Zoos are also part of the ML and AI supply chain. They're repositories of pretrained models that can be used to augment your app with ML or to provide additional functionality. The ONNX: Open Neural Network Exchange is an open set of common operators and formats that enables developers to use models with different tools and frameworks. ONNX also has its own Model Zoo
>
> **[1:32](https://www.linkedin.com/learning/security-risks-in-ai-and-machine-learning-categorizing-attacks-and-failure-modes-2022/supply-chain-attacks?u=76281980&t=92)** of pretrained models and tools to help developers convert their existing models to ONNX. Model Zoos are a really valuable way for developers to incorporate ML in their solutions and leverage the work of others without having to reinvent the ML wheel. [[GitHub]] also hosts the list of CoreML models that are available for use by scientists and developers. So Model Zoos and pretrained models are a fantastic resource, but like any component in the software lifecycle, they must be used wisely. Savvy attackers could tamper with models in a number of ways, including poisoning the data in the model or inserting malicious code into it and backdoors. A model with poison data will not produce accurate outcomes, putting the integrity of your entire application at risk and a model with backdoors could mean that your sensitive data might be leaked to the attacker. To keep your AI and ML supply chain safe, only use pretrained models from trusted sources and ensure that they have been properly vetted and tested before use.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (1)
> **Env Vars:** gpt (5), onnx (3), covid (1)
> **Tools:** github (1)
> **Definitions:** is an  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Model inversion](https://www.linkedin.com/learning/security-risks-in-ai-and-machine-learning-categorizing-attacks-and-failure-modes-2022/model-inversion?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/security-risks-in-ai-and-machine-learning-categorizing-attacks-and-failure-modes-2022/model-inversion?u=76281980&t=0)** - [Narrator] Machine learning models need training data, lots of training data to learn from. It's reasonable to expect that the data used to train the model wouldn't be available to users of the model, once it's in production. Consider a person who learns a new language. When we encounter that person, we recognize that they are now able to converse in the new language, but we don't know what books or tools they use to acquire fluency. What if you could figure out which tool a person used to learn a language, just by speaking to them? That's the core of membership inference and model inversion. Access to the ML model can be used by attackers to uncover private information from the training data set. If the training data is public, access to it would not be a big concern. But many machine learning [[Algorithms]] are used for [[Privacy]] sensitive purposes, such as facial recognition and medical diagnosis. And that often means that they've been trained with sensitive personal data. One example is a recommendation system for streaming sites. What if others could infer what you've been watching by seeing what the app recommends for you next? Model inversion can also leak secrets about how the system was trained. Like allowing a competitor to determine which accents an ML based [[Speech Recognition]] app was trained on. Using facial recognition models
>
> **[1:36](https://www.linkedin.com/learning/security-risks-in-ai-and-machine-learning-categorizing-attacks-and-failure-modes-2022/model-inversion?u=76281980&t=96)** and the confidence scores output by the system, an attacker was able to recover a recognizable facial image of a test data subject, using only the person's name. Now granted, in a world where most of us frequently post selfies on social media, the idea of having our face recovered, isn't too concerning, but this technique can expose more private information too. Using model inversion, researchers were able to infer if a respondent answered yes or no, to the infidelity question, with no false positives. And that's probably not the kind of information anybody would want an adversary to know. In some cases the training data itself is not exposed, but it can be inferred by querying the model. In one study, researchers queried a model that contained hospital discharge data, from the Texas Department of State Health Services and were able to infer the patient procedures, with 70% accuracy. Attackers gain access to models by querying the APIs of popular ML as a service, machine learning as a service. Providers like [[Google]], Google prediction API, Amazon, Amazon ML and [[Microsoft Azure]] ML. Machine learning as a service is very popular, because it allows developers to incorporate ML into their systems without a lot of startup time, but they must be used with data protection in mind, to prevent an inadvertent exposure of private information.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (2), [[Algorithms]] (1), [[Privacy]] (1), [[Speech Recognition]] (1), [[Microsoft Azure]] (1)
> **Definitions:** means that (1), is a  (1)
> **Env Vars:** api (1)
> **Analogies:** such as (1)
> **Speakers:** - [narrator] (1)

#### [System manipulation](https://www.linkedin.com/learning/security-risks-in-ai-and-machine-learning-categorizing-attacks-and-failure-modes-2022/system-manipulation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/security-risks-in-ai-and-machine-learning-categorizing-attacks-and-failure-modes-2022/system-manipulation?u=76281980&t=0)** - If a model is looking for unusual patterns over time, one way to manipulate the system is for an attacker to train it that's something that is abnormal is actually normal behavior. Then when the attacker goes to download large amounts of data, rather flagging or alerting this as abnormal behavior, the system has been trained by the attacker to think that this is normal. That is why it is so important to monitor systems for drift and other system manipulation and then to retool or retrain them as needed to ensure ongoing and reliable operation. While the vision of ML and AI for many encompasses a super smart system that gets smarter and better over time the reality isn't quite so futuristic. Many machine learning systems are trained in highly controlled settings and don't actually do a lot of learning in production. For some systems that are learning continuously, system or model manipulation is a concern. Over time, machine learning models will drift or decay when there are significant changes to the inputs, which then impacts the accuracy of their outputs. A model that was trained to predict the likelihood of someone purchasing jeans over yoga pants would drift if everyone started purchasing something
>
> **[1:34](https://www.linkedin.com/learning/security-risks-in-ai-and-machine-learning-categorizing-attacks-and-failure-modes-2022/system-manipulation?u=76281980&t=94)** it was never trained on, like hybrid yoga pants. Attackers can take advantage of this fact, and feed new or unexpected data to the model in order to manipulate the outcomes. Consider a machine learning model used to analyze behaviors on an endpoint or network to keep the company safe. Common activities would be things like accessing emails, and editing documents on a shared drive. Occasionally a user downloads files from shared drive for offline access. The model would learn what looks like normal behavior and only alert if something highly unexpected happen, like that user suddenly downloaded millions of files from the shared drive. If a model is looking for unusual patterns over time an attacker could then introduce behavior that they want to appear as normal slowly, also, over an extended period of time until the model learns the anomalous pattern as normal activity. Then when the attacker is ready to download and steal a large amount of sensitive or valuable data rather than flagging that this is unusual activity the algorithm would perceive the action as normal. If models are not monitored for drift caused by system manipulation and retuned or retrained to ensure proper operation they will fail to function properly in the long term.

> [!info]- Semantic Content
>
> **Definitions:** is a  (1)
> **Speakers:** - if (1)

#### [Membership inference and model stealing](https://www.linkedin.com/learning/security-risks-in-ai-and-machine-learning-categorizing-attacks-and-failure-modes-2022/membership-inference-and-model-stealing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/security-risks-in-ai-and-machine-learning-categorizing-attacks-and-failure-modes-2022/membership-inference-and-model-stealing?u=76281980&t=0)** - [Instructor] Building an effective ML model is not easy. They need to be purpose built for the intended use case, trained with well vetted data, and tested in production to confirm that they are working as expected. Also, there isn't a single one size fits all ML model that can be adapted to infinite myriad uses based on the training data. Organizations develop specific [[Algorithms]] and models for different use cases and then train and tune them to specific needs. Companies that spend time and resources to develop ML to support their business, have some of their corporate IP, intellectual property, embedded in these systems. For example, a financial services entity that has developed an advanced way to evaluate a person's credit risk rating using ML, or a community review site that uses predictive ML to recommend restaurants to their subscribers. These models are valuable corporate assets. Model stealing attacks, sometimes referred to as model extraction or model reconstruction, use special queries to extract information about the underlying model so it can be replicated. In a paper presented at USENIX, researchers were able to demonstrate simple, efficient attacks that extracted target ML models with near perfect fidelity. That replicated model could be used
>
> **[1:34](https://www.linkedin.com/learning/security-risks-in-ai-and-machine-learning-categorizing-attacks-and-failure-modes-2022/membership-inference-and-model-stealing?u=76281980&t=94)** as a baseline for testing or refining other adversarial attacks against the original model. Or it could be used to introduce a new service or application to the marketplace that replicates the functionality of the stolen model. For companies that are investing time and resources into ML to drive a competitive advantage, it's important that they protect that investment by protecting the underlying models.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (1)
> **Env Vars:** usenix (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Backdoors and existing exploits](https://www.linkedin.com/learning/security-risks-in-ai-and-machine-learning-categorizing-attacks-and-failure-modes-2022/backdoors-and-existing-exploits?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/security-risks-in-ai-and-machine-learning-categorizing-attacks-and-failure-modes-2022/backdoors-and-existing-exploits?u=76281980&t=0)** - [Instructor] If you've ever played a video game, you may have discovered something called a cheat code, a special combination of button presses like right-down-right-left-left-right-up-up-down that gives you a power-up, invincibility or unlimited health. These are special codes that developers leave in the game to provide boosts or Easter eggs for players. Developers of non-gaming applications can also leave boosts or backdoors in their systems that allow the person who knows the code to gain access or special privileges. In machine learning, backdoors can be encoded into the model and triggered by a special code or sequence. Machine learning systems operating in the real world can be triggered by physical backdoors, such as a special visual that triggers a self-driving car to accelerate to 65 miles per hour. If an attacker figures out that backdoor, they could negatively impact the safety of the people in the vehicle by placing visual trigger stickers on road signs. In addition to encoded backdoors, researchers have identified backdoor attacks that can be introduced directly into the model while it's operating, allowing the attacker to control the trigger feature. An interesting backdoor attack vector is via blind code poisoning. By injecting a pixel pattern trigger into an image classification system, all images with that pattern would get grouped into the same bucket
>
> **[1:33](https://www.linkedin.com/learning/security-risks-in-ai-and-machine-learning-categorizing-attacks-and-failure-modes-2022/backdoors-and-existing-exploits?u=76281980&t=93)** regardless of actual classification. So with the right pattern trigger, images of bees, birds and flowers would all be classified as trees. Attackers can also attack AI and ML by going after the underlying operating systems and [[Hardware]] which have their own sets of vulnerabilities and exposure points. Rather than exploiting the models directly, the attacker goes after a vulnerability in the OS, like forcing a buffer overflow that causes the ML model to fail or to provide inaccurate outputs. This is why designers need to plan for how the system will respond if a failure or exploit occurs in any component.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hardware]] (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### 3. Unintentional Failure Modes/Intrinsic Design Flaws

[↑ Back to Table of Contents](#table-of-contents)

#### [Reward hacking](https://www.linkedin.com/learning/security-risks-in-ai-and-machine-learning-categorizing-attacks-and-failure-modes-2022/reward-hacking?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/security-risks-in-ai-and-machine-learning-categorizing-attacks-and-failure-modes-2022/reward-hacking?u=76281980&t=0)** - Many years ago, a dog heard a child's cries from the banks of the Seine River in Paris. The dog jumped into the water, saved the child by safely bringing it to shore, and that dog was very well rewarded by the locals. The dog received a lot of positive attention, and a beef steak. A couple of days later, a similar thing happened, and the dog again saved a child from the water, and was again rewarded. But when this started to be an almost daily occurrence, the locals decided to take a closer look. Well, it turns out that the dog had started pushing the children into the water so it could save them and get the reward. Today, we would say that dog was reward hacking, and that's something that machines can do, too, especially in [[Reinforcement Learning]], RL, systems. Consider a floor-cleaning robot that is rewarded every time a mess is cleaned up. Designer expectation is that the ML system driving the robot would be incented to clean up messes quickly and thoroughly. But like that dog in France, the system could start to reward-hack by creating messes that it would then clean up. Systems don't always have to create a problem to solve, though. Reward hacking can also show up in unexpected ways as the system pursues the reward,
>
> **[1:34](https://www.linkedin.com/learning/security-risks-in-ai-and-machine-learning-categorizing-attacks-and-failure-modes-2022/reward-hacking?u=76281980&t=94)** like an AI human [[Simulation]] game, where the avatars or players require energy to function. Designers assign energy points to food, but if they don't carefully limit what qualifies as food, it's possible to have digital sims eating their electronic pets to stay powered up. In these examples, no external attacker caused the system to malfunction. The flaws are in the design of the system itself and how the reinforcement learning is rewarded, which is why, without careful design considerations, RL systems, in their drive for rewards, could cause unexpected and messy outcomes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Reinforcement Learning]] (2), [[Simulation]] (1)
> **Speakers:** - many (1)

#### [Side effects in reinforcement learning](https://www.linkedin.com/learning/security-risks-in-ai-and-machine-learning-categorizing-attacks-and-failure-modes-2022/side-effects-in-reinforcement-learning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/security-risks-in-ai-and-machine-learning-categorizing-attacks-and-failure-modes-2022/side-effects-in-reinforcement-learning?u=76281980&t=0)** - [Instructor] Have you ever heard the term as the Crow flies? People use it when they're trying to explain that the straight path is faster than the actual path. Getting from your [[Microsoft Office|office]] to your house may be only four miles as the Crow flies, but it could be 10 miles of road and 30 minutes of sitting in traffic in reality. If you could eliminate the road and traffic obstacles, you could get home much faster. Without careful design practices in place, machine learning systems that use [[Reinforcement Learning]] and rewards could have unintended and unwanted side effects in operation by trying to operate as directly as the Crow flies. As the system looks for an optimal path to a solution, it may not take other factors into consideration. This can be particularly problematic in physical environments. Consider a floor cleaning robot that is rewarded for cleaning up a liquid when it's spilled on the floor. The smart bot uses [[Computer Vision]] to monitor for spills and then is rewarded for mopping that spill up as quickly as possible. If the robotic systems begin to prioritize speed over other factors, it could begin malfunctioning in destructive ways. For example, if there are no obstacles, there's nothing for the robot to run into on its way to clean up. But if there's a large bouquet of flowers sitting in an expensive vase on top of a table
>
> **[1:34](https://www.linkedin.com/learning/security-risks-in-ai-and-machine-learning-categorizing-attacks-and-failure-modes-2022/side-effects-in-reinforcement-learning?u=76281980&t=94)** between the robot and the spill, the robot could crash into that table, shattering the vase and creating a new mess all in an attempt to get to the spill as quickly as possible. Side effect failures can occur online too. A cyberdefense response tool that is designed to stop attacks quickly must also be programmed with rules regarding acceptable response actions. Although, shutting down all the ports on a firewall and other critical services, such as email and [[Web Servers]], may be the, quote, shortest path to stopping an attack. It would also stop [[Business Operations]], putting the financial success of the company at risk. If AI and ML creators don't consider and design for side effects before launching systems into production, the results could cause real harm.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Office|Office]] (1), [[Reinforcement Learning]] (1), [[Computer Vision]] (1), [[Web Servers]] (1), [[Business Operations]] (1)
> **Analogies:** for example (1), such as (1)
> **Speakers:** - [instructor] (1)

#### [Distributional shifts and incomplete testing](https://www.linkedin.com/learning/security-risks-in-ai-and-machine-learning-categorizing-attacks-and-failure-modes-2022/distributional-shifts-and-incomplete-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/security-risks-in-ai-and-machine-learning-categorizing-attacks-and-failure-modes-2022/distributional-shifts-and-incomplete-testing?u=76281980&t=0)** - [Narrator] Understanding context is something people do remarkably well compared to machines. For example, if you purchase a television or other electrical appliance, you probably look for the UL, underwriter's laboratory certification to determine if the product has been safety tested for use. But you also know that electric devices shouldn't be dropped in water while they're plugged in. ML and AI systems need to be designed with context in mind and used in the same environment they were trained in. Otherwise, they are vulnerable to unintentional failures caused by distributional shifts and incomplete testing. Distributional shifts occur when there are mismatches between the data the system was trained on and the data it encounters during deployment. When distributional shifts become too wide, the performance and accuracy of the ML system goes down. A cleaning robot that was trained in a carpeted [[Microsoft Office|office]] environment that is empty at night could trip workers and cause injury if deployed in a busy uncarpeted manufacturing shop floor. An AI agent used to automatically rebalance power in one city's electrical grid may assume the same distributions will work on every city, potentially causing overload and outages. Incomplete testing causes errors too, especially when the test phase doesn't take into account common corruption that can occur in the real world environment.
>
> **[1:35](https://www.linkedin.com/learning/security-risks-in-ai-and-machine-learning-categorizing-attacks-and-failure-modes-2022/distributional-shifts-and-incomplete-testing?u=76281980&t=95)** Self-driving cars must function reliably in an extremely wide variety of circumstances. Rain and snow blur or block road signs, lane markers wear away with use, and potholes and erosion degrade the surface of the roads the car drives over. If the autonomous vehicle isn't tested for all or most of these examples, it will not be able to perform safely as expected under adverse conditions. Another example of this, a battery powered camera designed to conserve power by only starting a recording when motion is detected. The camera's tested in a lab with human subjects and performs as expected, activating only when a person is in view. But in the real world, the battery drains much faster than expected. Why? Because the camera activated for any motion, including dogs, cats, and flying insects. With more complete and realistic testing, the designers could have identified and corrected the problem before the camera went into production. Since machines aren't great at adding context, it's important for us, the humans and designers of AI and ML, to plan for context and distributional shifts so systems work as expected in the real world.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Office|Office]] (1)
> **Analogies:** for example (1)
> **Speakers:** - [narrator] (1)

#### [Overfitting/underfitting](https://www.linkedin.com/learning/security-risks-in-ai-and-machine-learning-categorizing-attacks-and-failure-modes-2022/overfitting-underfitting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/security-risks-in-ai-and-machine-learning-categorizing-attacks-and-failure-modes-2022/overfitting-underfitting?u=76281980&t=0)** - [Instructor] There's a fairy tale about a small child named Goldilocks, who happens upon a house where three bears live, and since they are out promptly makes herself at home. After eating their food, she decides to have a nap. First, she tests one bed, it's too big. The next one is too small. And the third one is just right. Machine learning models are like that too. If they are not fit properly, they are unsuitable for the intended task. In [[Statistics]] and [[Data Science]] parlance, the not right models are considered to be under fit or overfit. Overfiting can appear to be perfectly fit because the model was so well trained on the training data it has memorized or extracted the noise. But when presented with new data, the model performs very poorly. Let's say a city's tourism bureau wants to build a model to predict when sunny temperate weather is most likely to occur, so they can plan events to draw visitors. If the training data from the model uses information from a single town, let's use Seattle, a town where it rains a lot, the model would accurately predict the nice days for Seattle, but the model would be way off if it was used to predict the number of sunny days in Las Vegas, where it rarely rains, it is overfit to Seattle weather. Another underlying factor for overfiting is training with too many variables.
>
> **[1:35](https://www.linkedin.com/learning/security-risks-in-ai-and-machine-learning-categorizing-attacks-and-failure-modes-2022/overfitting-underfitting?u=76281980&t=95)** If, for example, the tourism bureau used a model that was trained on weather patterns and also on data that isn't relevant to the target prediction, such as number of dogs and cats that live in the city, it may also be overfit. Overfit models are said to have low bias and high variance. They perform extremely well with known past data but don't do well with new data and predictions. The flip side is a model that has been under fit. One that hasn't learned enough from the training data. Under fit models fail to predict trends accurately with new data but they're also not great with the training data either. Back to our weather prediction model, let's say the model was only trained on data for December, the rainiest month in Seattle. In that case, the model would fail even at predicting Seattle weather. While builders and designers need to ensure models are neither under fit nor overfit, under fit models are easier to detect because their failure is more evident during the prelaunch testing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Statistics]] (1), [[Data Science]] (1)
> **Analogies:** for example (1), such as (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Data bias considerations](https://www.linkedin.com/learning/security-risks-in-ai-and-machine-learning-categorizing-attacks-and-failure-modes-2022/data-bias-considerations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/security-risks-in-ai-and-machine-learning-categorizing-attacks-and-failure-modes-2022/data-bias-considerations?u=76281980&t=0)** - [Instructor] Do you have a favorite movie, one you could watch over and over? If you do, there's a good chance that when you find out someone you're speaking to also loves that movie, that you feel more friendly towards them. Why? Because of bias, a tendency, inclination or preference for or against something. Biases are tricky because they often are based on a feeling or past experience rather than on logical analysis of data. And bias is a difficult subject to discuss because it can be very hard to identify, especially within ourselves. Whether we are aware of it or not, bias exists. And just as personal bias can impact our judgment, biased data can impact the judgment of an ML or AI system leading to unintentional failure. ML systems learn from the data they are trained on. If the training data is biased, the system will automate and repeat that bias. One well known example is discrimination in facial recognition technology. Facial recognition systems used to be associated with high tech spy films, but they've hit the mainstream and are being implemented in many consumer applications. Nowadays, you can use your face to unlock your laptop or phone, board a plane and open the front door of your house. Facial recognition is also used by law enforcement to find and track criminals. But with broad usage comes a high bar
>
> **[1:33](https://www.linkedin.com/learning/security-risks-in-ai-and-machine-learning-categorizing-attacks-and-failure-modes-2022/data-bias-considerations?u=76281980&t=93)** for ensuring the systems are functioning with high accuracy and low bias. The 2018 Gender Shades research project showed that facial recognition systems from well-known providers had error rates of up to 34% higher when the face belonged to a darker-skinned female versus a lighter-skinned male. High error rates matter if you can't get onto your phone in an emergency and are even more impactful in the realm of law enforcement where facial mismatches could lead to false arrests. Sample bias shows up in many other areas of AI and ML. One often cited example was a company's resume-filtering tool that favored resumes from males for technical jobs. Another AI-based resume filtering tool highly ranked very specific males who were named Jared and played lacrosse in high school. How does this happen? Well, when the system is trained on biased data, it will learn biased ranking and classification. If a company's technical workforce is predominantly male and the resumes of existing employees are ingested by the system for training data, the system will then attempt to match the ingested data. Another form of bias in AI and ML is exclusion bias, the elimination of a type of information or qualifier during training, because it doesn't seem important. This can happen if a percentage of the data
>
> **[3:08](https://www.linkedin.com/learning/security-risks-in-ai-and-machine-learning-categorizing-attacks-and-failure-modes-2022/data-bias-considerations?u=76281980&t=188)** in the training set seems insignificant but really isn't. Think about a customer base where only 1% of the people are over the age of 65. A data scientist considers that 1% too insignificant to matter to the broad analytics and removes that information from the training set. But if that 1% makes up 75% of the total sales, then they are an extremely significant group, which the model won't know about if their data was eliminated before training. The last kind of bias we'll cover is association bias. This occurs when a model associates things that may not be truly representative. The ImageNet project is a huge database of over 14 million images that are available for use by researchers working on [[Computer Vision]] and [[Data Classification]]. Researchers did a deep dive into ImageNet and discovered that the model was making erroneous associations. For example, a person lying on a towel at the beach was labeled by the system as a kleptomaniac, someone with a compulsion to steal. Imagine not being considered for a job because an image classification system tagged you as a thief, simply because you like to post photos to social media of your trips to the beach. Bias can be a big problem in AI and ML. If we don't eliminate it, we'll automate it. That's why evaluating training data
>
> **[4:41](https://www.linkedin.com/learning/security-risks-in-ai-and-machine-learning-categorizing-attacks-and-failure-modes-2022/data-bias-considerations?u=76281980&t=281)** and associations made by the model are critical to ensuring unbiased ML that works for all.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Computer Vision]] (1), [[Data Classification]] (1)
> **CLI Commands:** find (2)
> **Definitions:** is a  (2)
> **Analogies:** for example (1), imagine (1)
> **UI Navigation:** open the (1)
> **Speakers:** - [instructor] (1)


### 4. Building Resilient ML

[↑ Back to Table of Contents](#table-of-contents)

#### [Effective techniques for building resilience in ML](https://www.linkedin.com/learning/security-risks-in-ai-and-machine-learning-categorizing-attacks-and-failure-modes-2022/effective-techniques-for-building-resilience-in-ml?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/security-risks-in-ai-and-machine-learning-categorizing-attacks-and-failure-modes-2022/effective-techniques-for-building-resilience-in-ml?u=76281980&t=0)** - In technology, there's no such thing as a perfectly secure system. Software degrades, [[Hardware]] fails over time and attackers will continue to hammer on systems until they can find a vulnerability to exploit. Not being able to be perfect doesn't mean that you shouldn't try. It's important to continue working towards a resilience target. Not being able to be perfect doesn't mean you shouldn't try to be as strong as possible by working towards the target of resilience. When we build houses in areas at risk for earthquakes, we architect for strength and stability. That's the essence of resilience, being strong and ready to withstand adversity. Few of us will live a life entirely free of disease, which is why many of us eat well and exercise regularly to support our immune systems. A stronger immune system helps to fight off illness. That's the essence of resilience, being strong and ready to fight back when the inevitable attack occurs. As ML and AI play a larger role in our lives, it's important to ensure that we're designing and building those systems to be as strong and resilient as possible. Strong meaning that we focus on built-in defense to protect against misuse and other attacks. Resilient, meaning that we accept that compromise and attack will occur
>
> **[1:35](https://www.linkedin.com/learning/security-risks-in-ai-and-machine-learning-categorizing-attacks-and-failure-modes-2022/effective-techniques-for-building-resilience-in-ml?u=76281980&t=95)** so we shore up our detection and response capabilities to fight intruders quickly. An area in AI and ML that is growing rapidly is how to build effective resilience into systems. We'll cover three important approaches that support the design and implementation of resilient AI and ML. Dataset hygiene, vetting datasets for bias, poisoning and other unwanted noise before training. Adversarial training, one of the best defenses against attacks, train using adversarial examples to homeopathically build resilience. And access control to APIs. To protect data and machine learning, it is important to limit access to the APIs themselves. Focusing on these three areas during the design and implementation phases of a project will go far to improve the security and resilience of your AI and ML systems.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hardware]] (1)
> **CLI Commands:** find (1)
> **Speakers:** - in (1)

#### [ML dataset hygiene](https://www.linkedin.com/learning/security-risks-in-ai-and-machine-learning-categorizing-attacks-and-failure-modes-2022/ml-dataset-hygiene?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/security-risks-in-ai-and-machine-learning-categorizing-attacks-and-failure-modes-2022/ml-dataset-hygiene?u=76281980&t=0)** - [Instructor] If you've ever accidentally taught your autocorrect system that a typo is an actual [[Microsoft Word|word]], and then had to spend months correcting that typo every time your system tried to insert it, you know how frustrating it can be when machines learn the wrong thing. If the data ML and AI systems are trained on isn't good or accurate, the outcome from the model won't be good either. That's why it's incredibly important to vet datasets and implement dataset hygiene policies. Biased data leads to biased classifications and predictions. But bias isn't always obvious or intentional. Consider an automated faucet that is programed to turn on when the [[Computer Vision]] recognizes human hands in front of the faucet. If the system is trained only with light-skinned adult hands, it may not turn on if darker-skinned or small hands are in front of the sensor. Systems need to be trained on datasets that represent the entire population of potential users. Existing datasets can be biased too. Traditionally, many technical fields, like computer programming, have been staffed predominantly by male workers. The [[Statistics]] are changing as more women enter technical fields but if an ML-based CV or resume analysis system is trained on the older biased data, it could learn that male candidates are desirable.
>
> **[1:36](https://www.linkedin.com/learning/security-risks-in-ai-and-machine-learning-categorizing-attacks-and-failure-modes-2022/ml-dataset-hygiene?u=76281980&t=96)** To get ahead of bias in systems, training sets and technique should be carefully vetted by a wide number of experts. Because we can rarely recognize our own bias, it helps to have different people with different skillsets and viewpoints assess the training data for bias. The more eyes and minds that vet the data for bias, the more likely that bias will be identified and corrected before the resource-intensive training phase. Intentional poisoning of data is another way to cause ML and AI to fail. A great way to protect training data or any sensitive data for that matter is by applying the principle of least privilege. Using the principle in practice means that only those that need access to something are granted access. It is often used in conjunction with [[Data Classification]] programs, which help to identify an organization's most important and sensitive information. For organizations that have not yet started on the data protection journey, this is an opportunity to address overall [[Data Security]] while also defending and protecting AI and ML systems. Existing data classification and privilege management programs should be extended to include AI and ML training data. Not all training data is created or developed in house. Many companies use existing training datasets from public sources or partners.
>
> **[3:09](https://www.linkedin.com/learning/security-risks-in-ai-and-machine-learning-categorizing-attacks-and-failure-modes-2022/ml-dataset-hygiene?u=76281980&t=189)** When using a third-party training set, evaluate the source carefully. Is it a source you trust? How long have you had a relationship with the source? Are there outliers in the data that could skew the training process or the model predictions? Have a data scientist at your organization review the data before it's used for training. The last impact on data bias to consider is the size of the training dataset. Evaluate that there's enough data to train and test the system with. Systems shouldn't be tested on the same data that was used for training. So you'll need enough data in the original set to support both activities. Small samples of data can lead to overfitting where the model performs very well on past data but not well on new data, as well as underfitting because there simply isn't enough data for proper training. The quality of training data used to develop AI and ML solutions directly impacts the success and accuracy of the models. This is why training dataset hygiene is one of the most important things that can be done to ensure AI and ML systems are accurate and unbiased.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Classification]] (2), [[Microsoft Word|Word]] (1), [[Computer Vision]] (1), [[Statistics]] (1), [[Data Security]] (1)
> **Definitions:** is an  (2)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [ML adversarial training](https://www.linkedin.com/learning/security-risks-in-ai-and-machine-learning-categorizing-attacks-and-failure-modes-2022/ml-adversarial-training?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/security-risks-in-ai-and-machine-learning-categorizing-attacks-and-failure-modes-2022/ml-adversarial-training?u=76281980&t=0)** - [Narrator] Living in outer space is not easy. There's no gravity and no option to step out for a walk in the fresh air. Without proper preparation, astronauts bodies would not survive the attack that being in space poses to their health. So they spend hours adjusting to being weightless in NASA's KC-135 and learn how to repair equipment while underwater to simulate the experience of being outside of the ship. The challenges of space are unusual to the human body, which is why training for them is critical to the safety of the astronauts and their mission. Adversarial training in AI and ML works a little like getting a person ready for space. The negative impacts or unusual challenges are defined often through [[Threat Modeling]]. Then the system is trained for resilience using defensive techniques. Models that are trained in controlled environments may not function properly in noisy real world situations and models can fail when malicious actors poison or manipulate data. An average person who was never trained for zero gravity might not survive their first trip to outer space. An ML system that wasn't trained for adversarial conditions might not survive or function properly in the real world. To address these concerns, data scientists train using adversarial examples to create resilient, robust models.
>
> **[1:35](https://www.linkedin.com/learning/security-risks-in-ai-and-machine-learning-categorizing-attacks-and-failure-modes-2022/ml-adversarial-training?u=76281980&t=95)** There are a number of ways to train adversarially. We'll cover a few of the most common ones. One of the most well known approaches to adversarial training is to include adversarial examples as part of the training data set. First, the model is trained with clean data, then model function is refined using adversarial data. Using this methodology, the model is better prepared to recognize and handle noisy data when it is encountered. Tools like anti-malware that are used to protect companies from cyber attack are a prime target for adversaries. To measure success of adversarial training on a malware classifier, researchers emulated a data poisoning attack using perturbed data and labels for training. The results were promising. The adversarially trained model performed better than baseline under adversarial conditions. Distributional shifts occur in machine learning when the training data doesn't match what the model encounters in operation. Researchers are looking into training models on data with large distributional shifts built in. One team has developed the shifts data set to help the community advance testing and research in this area. Another approach to note is the emerging area of ensemble adversarial training, where models are trained using perturbations transferred from other models.
>
> **[3:09](https://www.linkedin.com/learning/security-risks-in-ai-and-machine-learning-categorizing-attacks-and-failure-modes-2022/ml-adversarial-training?u=76281980&t=189)** Well, this approach worked quite well against simple black box attacks. Later research indicated it is less effective against complex attacks. Because estimates and confidence scores provide information on how a model responds to inputs, they can be used by adversaries to build extremely effective attacks. To prevent this class of exploitation, designers and builders should consider hiding the confidence scores and other non-essential data from users. The scores can still be accessible to administrators, just not returned as detailed responses to user query. Research in this area is ongoing but it's clear that using adversarial training and resilient design contributes to the accuracy and robustness of ML and AI in the real world.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Threat Modeling]] (1)
> **Env Vars:** nasa (1)
> **Speakers:** - [narrator] (1)

#### [ML access control to APIs](https://www.linkedin.com/learning/security-risks-in-ai-and-machine-learning-categorizing-attacks-and-failure-modes-2022/ml-access-control-to-apis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/security-risks-in-ai-and-machine-learning-categorizing-attacks-and-failure-modes-2022/ml-access-control-to-apis?u=76281980&t=0)** - [Instructor] Many ML and [[AI Solutions]] are accessed to via API, [[Application Programming Interfaces (API)|application programming interfaces]]. Chatty or verbose models that return a lot of information can result in data leakage of sensitive data. They can also expose ways the model operates making it easier for adversaries to generate effective attacks. Data leakage of sensitive information is of high concern for regulated organizations that must comply with protections for healthcare data, [[Financial Data]] and personally identifiable data. In order to work well, most ML models need a lot of data. But when of amounts of data are aggregated it can be extremely difficult to protect access at a granular level. Traditionally, solutions like encryption, tokenization, and data masking have been used to protect sensitive data in aggregate sets. However, in AI and ML, most of those options could break the models or render them highly inaccurate. So what can companies do? They can extend API protection strategies to all ML and AI. This goes for both the ML and APIs that your organization has put out yourselves as well as for the APIs that your systems are interacting with. Get into a PoLP, or principle of least privileged mindset. Applying it to the APIs themselves using an API gateway
>
> **[1:36](https://www.linkedin.com/learning/security-risks-in-ai-and-machine-learning-categorizing-attacks-and-failure-modes-2022/ml-access-control-to-apis?u=76281980&t=96)** or user interface. Identify which users and systems have a current business need to know for access to the API. Build out roles for access. Determine who and what can view the data in the model. Who and what can edit or change the data via the API, and who and what are able to administer or train the model. For normal use require some form of authentication such as an API key or token for access. If remote administration is supported, lock access down even more tightly with MFA, multifactor authentication, and restrict administrative and training access to only approved devices and users. If the output of the model suddenly goes awry it will be important to be able to forensically examine who or what had access and the actions they took. Maintain granular logging and audit trails to track all data access, changes and new inputs. Of course, API security isn't unique to AI and ML, but if companies don't apply robust API protections and security controls to their API accessible AI and ML, they put both their models and data at risk.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[AI Solutions]] (1), [[Application Programming Interfaces (API)|Application programming interfaces]] (1), [[Financial Data]] (1)
> **Env Vars:** api (9), mfa (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/security-risks-in-ai-and-machine-learning-categorizing-attacks-and-failure-modes-2022/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/security-risks-in-ai-and-machine-learning-categorizing-attacks-and-failure-modes-2022/next-steps?u=76281980&t=0)** - Thanks for watching the course. I hope you feel informed and ready to speak with people about the importance of resilience in AI and ML. If you manage or work on a team that's building AI and ML solutions ask if they have thought about failure modes and protecting against intentional and unintentional failure. Has the team done [[Threat Modeling]] and are you building in controls and other mitigations to ensure proper operation of the systems? If you're considering purchasing AI and ML, ask the vendor about their processes. How are they ensuring dataset hygiene and preventing data poisoning? Are they testing their systems with adversarial training methods and have they tested the systems in multiple different environments and with different data to ensure that they will operate as expected? A final note, we distilled a lot of research in this course. So please consider going a little bit deeper and continuing to read on this very important topic. We've supplied all of the research used in the course in the downloadable content. AI and ML are here. They're important parts of our world but in order to ensure that all of us can use them reliably and safely we must build security and resilience in from day one. Thank you for watching.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Threat Modeling]] (1)
> **Speakers:** - thanks (1)


## Instructor

- [[Diana Kelley]]

## Resources

- Exercise files available

## Skills Covered

- Machine Learning
- Security Risk
- Artificial Intelligence (AI)

## Path Context

### In [[Develop Your AI Skills as a Cybersecurity Professional]]
← [[Artificial Intelligence and Application Security]] | **4 of 8** | [[Red Teaming for Generative AI- Building Robust and Responsible Solutions]] →

## Appears In

- [[Develop Your AI Skills as a Cybersecurity Professional]]

## Related Courses

_Courses sharing skills:_

- [[Machine Learning and AI Foundations- Clustering and Association]] — Artificial Intelligence (AI), Machine Learning
- [[Machine Learning and AI- Advanced Decision Trees with SPSS]] — Artificial Intelligence (AI), Machine Learning
- [[Machine Learning and AI Foundations- Decision Trees with SPSS]] — Artificial Intelligence (AI), Machine Learning
- [[Machine Learning and AI Foundations- Classification Modeling]] — Artificial Intelligence (AI), Machine Learning
- [[Machine Learning & AI Foundations- Linear Regression]] — Artificial Intelligence (AI), Machine Learning

---

[↑ Back to top](#)