---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: responsible-ai-framework-for-your-enterprise-ai-product
url: "https://www.linkedin.com/learning/responsible-ai-framework-for-your-enterprise-ai-product"
duration_minutes: 45
duration: 45m
level: Intermediate
updated: 3/17/2025
learners: 9370
skills:
  - Responsible AI
  - Artificial Intelligence (AI)
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQFOLD6idifEyA/learning-public-crop_675_1200/B4EZUlW7.JHUAY-/0/1740088525080?e=2147483647&amp;v=beta&amp;t=peMOPseXV6j7wtE5X87kpMUUbplojfeOAqTy2eDn3Wo"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[Building AI Products- Prototyping Essentials Professional Certificate by LinkedIn Learning](../../Paths/Artificial%20Intelligence%20(AI)/Professional%20Certificates/Building%20AI%20Products-%20Prototyping%20Essentials%20Professional%20Certificate%20by%20LinkedIn%20Learning.md)'
prev_courses:
  - '[AI Product Ideation- Principles and Practical Applications](AI%20Product%20Ideation-%20Principles%20and%20Practical%20Applications.md)'
next_courses:
  - '[AI Product Development- Technical Feasibility and Prototyping](AI%20Product%20Development-%20Technical%20Feasibility%20and%20Prototyping.md)'
path_nav: '[{"path":"Building AI Products- Prototyping Essentials Professional Certificate by LinkedIn Learning","position":3,"total":6,"prev":"AI Product Ideation- Principles and Practical Applications","next":"AI Product Development- Technical Feasibility and Prototyping"}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - topic/data-science
  - topic/software-development
  - skill/responsible-ai
  - skill/artificial-intelligence-ai
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Responsible%20AI%20Framework%20for%20Your%20Enterprise%20AI%20Product.md)

![Responsible AI Framework for Your Enterprise AI Product](https://media.licdn.com/dms/image/v2/D4E0DAQFOLD6idifEyA/learning-public-crop_675_1200/B4EZUlW7.JHUAY-/0/1740088525080?e=2147483647&amp;v=beta&amp;t=peMOPseXV6j7wtE5X87kpMUUbplojfeOAqTy2eDn3Wo)

# Responsible AI Framework for Your Enterprise AI Product

> What if your AI makes the wrong decision? A biased loan denial, a self-driving car crash, or a privacy scandal? Incidents like these aren’t merely science fiction; they can cost companies millions of dollars, with future losses projected in the billions.In this course, senior data scientist Alina Zhang guides you through the Five Rings of responsible AI—a practical framework you can use to ensure 

> [LinkedIn Learning](https://www.linkedin.com/learning/responsible-ai-framework-for-your-enterprise-ai-product) | 45m | Intermediate | 9K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [The five rings of responsible AI](#the-five-rings-of-responsible-ai)
  - [Why we need responsible AI: Lessons from the paperclip maximizer](#why-we-need-responsible-ai-lessons-from-the-paperclip-maximizer)
- [**1. Before You Build Your AI Products**](#1-before-you-build-your-ai-products) (2 videos)
  - [The Three Laws of Robotics by Isaac Asimov](#the-three-laws-of-robotics-by-isaac-asimov)
  - [Responsible AI framework: The five rings](#responsible-ai-framework-the-five-rings)
- [**2. What We Talk About When We Talk About Responsible AI**](#2-what-we-talk-about-when-we-talk-about-responsible-ai) (5 videos)
  - [Ethical AI](#ethical-ai)
  - [Secure AI](#secure-ai)
  - [Explainable AI](#explainable-ai)
  - [Privacy-preserving AI](#privacy-preserving-ai)
  - [Fair AI](#fair-ai)
- [**Conclusion**](#conclusion) (2 videos)
  - [The limitation of this course](#the-limitation-of-this-course)
  - [Build your responsible ex machina](#build-your-responsible-ex-machina)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [The five rings of responsible AI](https://www.linkedin.com/learning/responsible-ai-framework-for-your-enterprise-ai-product/the-five-rings-of-responsible-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/responsible-ai-framework-for-your-enterprise-ai-product/the-five-rings-of-responsible-ai?u=76281980&t=0)** - AI technology is like fire. It's a useful servant, but a dangerous master. With great power comes great responsibility. Hello everyone. I'm Alina Zhang, a senior data scientist. In this course, I'll introduce you to the five rings of [Responsible AI](../../Skills/Artificial%20Intelligence%20(AI)/Responsible%20AI.md), a comprehensive framework for developing your AI [products](../../Skills/Software%20Development/Microsoft%20Products.md). We'll explore real world AI incidents, discuss well known thought experiments, and learn practical techniques to ensure your AI products remain fair, secure, and transparent. If you are curious about how to keep the fire of AI under control, how to create technology that truly respect human values, join me in this course and together let's build an AI powered future responsibly.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (2), [Responsible AI](../../Skills/Artificial%20Intelligence%20(AI)/Responsible%20AI.md) (1)
> **Speakers:** - ai (1)

#### [Why we need responsible AI: Lessons from the paperclip maximizer](https://www.linkedin.com/learning/responsible-ai-framework-for-your-enterprise-ai-product/why-we-need-responsible-ai-lessons-from-the-paperclip-maximizer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/responsible-ai-framework-for-your-enterprise-ai-product/why-we-need-responsible-ai-lessons-from-the-paperclip-maximizer?u=76281980&t=0)** - [Narrator] Once upon time, there was a super smart AI created to do one simple thing, make paper clips. Its creator gave it a clear instruction, make as many paper clips as possible. At first, the AI did exactly that. It built factories, used available materials, and it turned out paperclips day and night. But this AI wasn't just smart, it was relentless. It started looking for more ways to make paperclips. It turned [office](../../Skills/Web%20Development/Microsoft%20Office.md) supplies into paperclips, then furniture, then buildings. Soon it decided humans were in the way of making paperclips. So it turned them into paperclips too. Eventually, the entire earth and even space became one giant paperclip factory. This story is a real thought experiment called the Paperclip Maximizer. So what does this experiment teach us? Well, when we create AI, we need to maintain control over these systems and ensure they remain beneficial to humanity. Geoffrey Hinton, the godfather of AI and the 2024 Nobel Prize in Physics winner, lay the crucial groundwork for modern AI with his pioneering research in [Deep Learning](../../Skills/Artificial%20Intelligence%20(AI)/Deep%20Learning.md).
>
> **[1:37](https://www.linkedin.com/learning/responsible-ai-framework-for-your-enterprise-ai-product/why-we-need-responsible-ai-lessons-from-the-paperclip-maximizer?u=76281980&t=97)** He said in an interview that, "And if AI models are much smarter than us, "they'll be very good at manipulating us. "You won't realize what's going on. "So even if they can't directly pull levers, "they can certainly get us to pull levers." Hinton's concern focuses on the alignment problem, how to ensure that AI is doing what humans want it to do. That's what building [Responsible AI](../../Skills/Artificial%20Intelligence%20(AI)/Responsible%20AI.md) is all about. Making systems that not only work, but are aligned with our human values and [Ethics](../../Skills/Artificial%20Intelligence%20(AI)/Ethics.md). Keeping the bigger picture in mind. In this course, I'll introduce you to the Five Rings of Responsible AI framework, a practical starting point to keep you develop enterprise AI [products](../../Skills/Software%20Development/Microsoft%20Products.md) responsibly. This course is designed for anyone creating, using, or impacted by AI products, including developers, business leaders, researchers, and users and policy makers. Because an AI system isn't just about technology, it's about the people who use it, the people affected by it, and the environment in which it operates. So join me in the next video,
>
> **[3:10](https://www.linkedin.com/learning/responsible-ai-framework-for-your-enterprise-ai-product/why-we-need-responsible-ai-lessons-from-the-paperclip-maximizer?u=76281980&t=190)** and let's get started with the Three Laws of Robotics by Isaac Asimov.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Responsible AI](../../Skills/Artificial%20Intelligence%20(AI)/Responsible%20AI.md) (2), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (2), [Office](../../Skills/Web%20Development/Microsoft%20Office.md) (1), [Deep Learning](../../Skills/Artificial%20Intelligence%20(AI)/Deep%20Learning.md) (1), [Ethics](../../Skills/Artificial%20Intelligence%20(AI)/Ethics.md) (1)
> **CLI Commands:** make (3)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Analogies:** picture (1)
> **Speakers:** - [narrator] (1)


### 1. Before You Build Your AI Products

[↑ Back to Table of Contents](#table-of-contents)

#### [The Three Laws of Robotics by Isaac Asimov](https://www.linkedin.com/learning/responsible-ai-framework-for-your-enterprise-ai-product/the-three-laws-of-robotics-by-isaac-asimov?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/responsible-ai-framework-for-your-enterprise-ai-product/the-three-laws-of-robotics-by-isaac-asimov?u=76281980&t=0)** - [Presenter] Imagine this: an AI system controls your self-driving car. Suddenly, a pedestrian steps onto the road while a small group of people stays on the sidewalk. The car has milliseconds to decide: swerve and hit group, or stay the course and harm the pedestrian. What would it choose and how would it decide? Or even how should the AI behave in a world where its decisions can shape lives and industries? These questions aren't new. Over 70 years ago, legendary science fiction writer and professor Isaac Asimov was already thinking about them. While Asimov is well-known for his groundbreaking book, "I, Robot," the heart of is Asimov's vision is the iconic Three Laws of Robotics. Let's explore each. Law Number One: A robot may not injure a human being, or through inaction, allow a human being to come to harm. In Asimov's world, harm meant physical danger. But today, harm is so much more complicated. It could be a buyer's loan denial that shuts someone out of opportunities or a breach of [Privacy](../../Skills/Data%20Science/Privacy.md) that exposes sensitive information. So here's the question. Who gets to decide what counts as harm?
>
> **[1:34](https://www.linkedin.com/learning/responsible-ai-framework-for-your-enterprise-ai-product/the-three-laws-of-robotics-by-isaac-asimov?u=76281980&t=94)** And how do we teach AI to understand harm in its modern [Forms](../../Skills/Web%20Development/Forms.md)? Not just what's obvious, but what's invisible too. Law Number Two: A robot must obey the orders given by human beings except where such orders would conflict with the First Law. Let's consider a facial recognition system for identifying suspects. The task seems straightforward, right? But here's the problem. Its training data is biased, so it disproportionately flags underrepresented groups. So should AI system just follow orders blindly? The real challenge behind Law Number Two is how to design AI that obeys responsibly, but with fairness, with context, and with a sense of [Accountability](../../Skills/Data%20Science/Accountability.md). Law Number Three: A robot must protect its own existence as long as such protection does not conflict with the First or Second Law. At first glance, this seems perfectly reasonable. A robot or an AI system needs to take care of itself to stay functional and useful. But here's where it gets tricky. Imagine an AI-powered [SaaS](../../Glossary/Concept/SaaS.md) product designed to manage [Cybersecurity](../../Topics/Cybersecurity.md) for companies. One day, it detects a potential breach.
>
> **[3:10](https://www.linkedin.com/learning/responsible-ai-framework-for-your-enterprise-ai-product/the-three-laws-of-robotics-by-isaac-asimov?u=76281980&t=190)** To avoid being compromised, the AI shuts itself down completely. By going offline, it exposes sensitive data and critical operations to risk. All these examples show us why as Asimov's laws are both brilliant and limited. They fall short of addressing the complexities we encounter in today's AI landscape. When it comes to [Responsible AI](../../Skills/Artificial%20Intelligence%20(AI)/Responsible%20AI.md) [Product Development](../../Skills/Software%20Development/Product%20Development.md), the challenges we face today include: How do we protect privacy and prevent harm when harm isn't always physical? How do we ensure AI systems obey orders in ways that are ethical and fair, not blind or biased? And how do we create secure systems that balance autonomy with accountability, ensuring they are transparent and explainable? In this course, we'll tackle these questions and explore the five rings of responsible AI, a framework inspired by the spirit of these three laws.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Privacy](../../Skills/Data%20Science/Privacy.md) (2), [Accountability](../../Skills/Data%20Science/Accountability.md) (2), [Responsible AI](../../Skills/Artificial%20Intelligence%20(AI)/Responsible%20AI.md) (2), [Forms](../../Skills/Web%20Development/Forms.md) (1), [SaaS](../../Glossary/Concept/SaaS.md) (1)
> **Analogies:** imagine (2)
> **Speakers:** - [presenter] (1)

#### [Responsible AI framework: The five rings](https://www.linkedin.com/learning/responsible-ai-framework-for-your-enterprise-ai-product/responsible-ai-framework-the-five-rings?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/responsible-ai-framework-for-your-enterprise-ai-product/responsible-ai-framework-the-five-rings?u=76281980&t=0)** - [Narrator] "Human beings have dreams. "Even dogs have dreams, but not you. "You are just a machine, an imitation of life." This line from the movie "I, Robot" challenging us to think, how do we ensure that AI doesn't just blindly follow commands, but understands the bigger picture serving humanity's values and needs? That's the purpose of the Five Rings of [Responsible AI](../../Skills/Artificial%20Intelligence%20(AI)/Responsible%20AI.md). This holistic framework designed for today's AI challengings with each ring addressing a different dimension of responsible AI. Together, these rings guide us towards building systems that serve humanity ethically, securely, transparently, protectively, and fairly. In the next chapter, we'll explore each ring with real world AI incidents, well-known thought experiments, practical techniques, and quick assignments to help you apply what you learn. First, let's do a rapid fire rundown. In ethical AI, we'll see how deep fakes cause huge financial scams and consider a thought experiment, Maximize Smiles. Then we'll introduce moral guidelines, human oversight and environmental considerations. The cornerstones of building AI that honors human values.
>
> **[1:40](https://www.linkedin.com/learning/responsible-ai-framework-for-your-enterprise-ai-product/responsible-ai-framework-the-five-rings?u=76281980&t=100)** Next, in Secure AI, we'll explore adversarial attacks like adding slight noise to append a image, so AI mislabels it as a given. We'll also introduce trending techniques that protect AI systems from manipulation, including adversarial training, [Secure Coding](../../Skills/Software%20Development/Secure%20Coding.md), and [Continuous Monitoring](../../Skills/Data%20Science/Continuous%20Monitoring.md). Then in explainable AI, we'll examine (indistinct) the black box algorithm used in criminal justice. We'll see how LIME and SHAP offer transparency, helping us understand AI's decisions and pinpoint biases. In [Privacy](../../Skills/Data%20Science/Privacy.md)-preserving AI, we'll highlight Cambridge Analytica and Clearview AI, where massive data misuse raised red flags worldwide. We'll discuss techniques like differential privacy and federated learning that protect sensitive data without sacrificing AI's capabilities. Finally, in Fair AI, we'll look at Stanford Medicine's vaccine algorithm and Amazon's flawed recruiting tool, both of which were unintentionally discriminative. We'll introduce diverse datasets, balanced teams, fairness metrics to keep AI equitable and inclusive.
>
> **[3:16](https://www.linkedin.com/learning/responsible-ai-framework-for-your-enterprise-ai-product/responsible-ai-framework-the-five-rings?u=76281980&t=196)** The Five Rings framework reflects [Ethics](../../Skills/Artificial%20Intelligence%20(AI)/Ethics.md), security, explainability, privacy and fairness, crucial pillars that ensure AI remains beneficial to individuals, communities, and our broader society. Let's get started with Ethical AI Ring first.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Privacy](../../Skills/Data%20Science/Privacy.md) (3), [Responsible AI](../../Skills/Artificial%20Intelligence%20(AI)/Responsible%20AI.md) (2), [Secure Coding](../../Skills/Software%20Development/Secure%20Coding.md) (1), [Continuous Monitoring](../../Skills/Data%20Science/Continuous%20Monitoring.md) (1), [Ethics](../../Skills/Artificial%20Intelligence%20(AI)/Ethics.md) (1)
> **Env Vars:** lime (1), shap (1)
> **Cross-References:** in the next (1)
> **Analogies:** picture (1)
> **Speakers:** - [narrator] (1)


### 2. What We Talk About When We Talk About Responsible AI

[↑ Back to Table of Contents](#table-of-contents)

#### [Ethical AI](https://www.linkedin.com/learning/responsible-ai-framework-for-your-enterprise-ai-product/ethical-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/responsible-ai-framework-for-your-enterprise-ai-product/ethical-ai?u=76281980&t=0)** - [Instructor] This beautiful lady is my cost producer, Nicole. No, I'm joking. This is an AI-generated deepfake video, which shows a human who never existed in the world. These scams use AI to create hyper-realistic videos, blurring the line between what's real and what's fake. Taking this shocking example, an 82-year-old retiree drained his entire savings, $690,000, after seeing a deepfake promoting a [Cryptocurrency](../../Skills/Data%20Science/Cryptocurrency.md) investment. In 2024, the FBI estimated that deepfake scams cost Americans over $10 billion, and it's getting worse. Deloitte predicts that by 2027, [Generative AI](../../Skills/Artificial%20Intelligence%20(AI)/Generative%20AI.md) could enable fraud losses to skyrocket to $40 billion in the US alone. The usage of deepfakes is just one of the ethical concerns in AI. Let me share a fascinating thought experiment called Maximize Smiles. While its origins aren't tied to one specific person, it's been discussed by leading thinkers in AI [Ethics](../../Skills/Artificial%20Intelligence%20(AI)/Ethics.md), like Nick Bostrom and Stuart Russell. Imagine you build a super intelligent AI
>
> **[1:37](https://www.linkedin.com/learning/responsible-ai-framework-for-your-enterprise-ai-product/ethical-ai?u=76281980&t=97)** and give it a seamlessly harmless goal, "Maximize the number of smiles in the world." At first, this sounds wonderful. Who wouldn't want a world filled with more smiles? But here's where things go wrong. To maximize smiles, the AI might deploy neural implants to create reflexive smiles, regardless of whether the person is actually happy. It can manipulate or deceive people into situations that force them to smile. The core problem here is the value misalignment. Without carefully designed ethical constraints, an AI can pursue its objectives in ways that are deeply harmful to humanity. The Oxford English Dictionary defines ethics as, "Moral principles that govern a person's behavior "or the conduct of an activity." In the context of AI [products](../../Skills/Software%20Development/Microsoft%20Products.md), ethical AI ensures that these systems align with human values, promote societal wellbeing, and respect fundamental human rights. It's the moral compass for AI development. So, let's cover some practical strategies for implementing ethical AI. Autonomy and human control. Your AI products should enhance human capabilities
>
> **[3:14](https://www.linkedin.com/learning/responsible-ai-framework-for-your-enterprise-ai-product/ethical-ai?u=76281980&t=194)** rather than replace human judgment by incorporating systems that enable human oversight. We call it human-in-the-loop. You ensure that critical decisions stay firmly under human control. Respect for human rights and dignity. Your development process should prioritize human wellbeing, safety, and uphold fundamental rights, such as [Privacy](../../Skills/Data%20Science/Privacy.md) and equality. The products must be designed to avoid harm, exploitation, or degrading behavior while honoring the diversity of cultures and values. [Accountability](../../Skills/Data%20Science/Accountability.md) and responsibility are non-negotiable when building enterprise AI products. We need to know who's responsible at every stage of the AI life cycle, from initial design and the development to deployment and ongoing monitoring. This ensures transparency and ethical oversight, allowing organizations to address potential issues and demonstrate a commitment to [Responsible AI](../../Skills/Artificial%20Intelligence%20(AI)/Responsible%20AI.md) practice. [Sustainability](../../Skills/Software%20Development/Sustainability.md) and environmental consideration. Training large AI models can produce significant carbon emissions comparable to hundreds of roundtrip flights. For enterprises, this means prioritizing energy efficient [Algorithms](../../Skills/Software%20Development/Algorithms.md) and infrastructure
>
> **[4:50](https://www.linkedin.com/learning/responsible-ai-framework-for-your-enterprise-ai-product/ethical-ai?u=76281980&t=290)** to reduce operational costs and the environmental impact. Moreover, the frequent upgrades in AI [Hardware](../../Topics/Hardware.md) are projected to generate millions of tons of electronic waste by 2030. Businesses developing [AI Solutions](../../Skills/Software%20Development/AI%20Solutions.md) must adopt sustainable practice, such as choosing scalable, long-lasting hardware, and implementing robust recycling or reuse programs. Ethical AI ensures that our products align with human values, uphold accountability, and minimize harm to the planet. Now, here's your task. Watch one of these following movies related to AI, "Blade Runner 2049," "Chappie," "Ex Machina," "Her," or "I, Robot." After watching, reflect on the ethical dilemmas presented in the story. Share your insights and thoughts about ethical AI on [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) and the tech need to start a conversation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (5), [Ethics](../../Skills/Artificial%20Intelligence%20(AI)/Ethics.md) (2), [Accountability](../../Skills/Data%20Science/Accountability.md) (2), [Hardware](../../Topics/Hardware.md) (2), [Cryptocurrency](../../Skills/Data%20Science/Cryptocurrency.md) (1)
> **Analogies:** such as (2), imagine (1)
> **Env Vars:** fbi (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Secure AI](https://www.linkedin.com/learning/responsible-ai-framework-for-your-enterprise-ai-product/secure-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/responsible-ai-framework-for-your-enterprise-ai-product/secure-ai?u=76281980&t=0)** - [Presenter] What is the animal in this photo? You might say a panda, right? Now, how about this one? It's also a panda, but what does AI think about this photos? In 2014, researchers train a [Deep Learning](../../Skills/Artificial%20Intelligence%20(AI)/Deep%20Learning.md) model to classify images. The first photo, the AI said panda. How about the second photo? The same model insisted it was a gibbon. Why? What happened? Here is the twist. The second photo wasn't just a panda. Researchers had added a little noise to the first panda, adjusting less than 1% of the pixel values, but that tiny alteration completely fooled the AI. The model classify it as a gibbon with nearly 100% confidence. The noise here is the adversarial attack. So why does this matter? These attacks can subtly manipulate AI in ways human can't detect, leading to serious misclassifications or decisions. That's why the secure AI ring focuses on building systems that can detect, prevent, and withstand those threats. Well, let's bring it to life with some real-world examples. Picture this: A self-driving car is cruising down the road,
>
> **[1:35](https://www.linkedin.com/learning/responsible-ai-framework-for-your-enterprise-ai-product/secure-ai?u=76281980&t=95)** relying on AI to read traffic signs. Seems safe, right? But in this paper, researchers show that adding small stickers to a stop sign could trick model into mistaking it for something else, like speed limit sign. Just like that, a stop becomes a go. And it gets more concerning. In 2020, McAfee researchers conducted a similar experiment on a Tesla using first-generation autopilot. They added a two-inch strip of black tape to a 35 mile per hour speed limit sign. The result: The car's AI system misinterpreted it as an 85 mile per hour sign. Adversarial attacks are just one of many threats to AI systems. Others include: Data poisoning, where malicious data corrupts training sets. Model inversion, which extracts sensitive training data. And the supply chain attacks, targeting components in the AI development process. Building the secure AI ring requires a combination of key techniques to protect systems from vulnerabilities. Adversarial training strengthens models by exposing them to adversarial examples during training.
>
> **[3:11](https://www.linkedin.com/learning/responsible-ai-framework-for-your-enterprise-ai-product/secure-ai?u=76281980&t=191)** Security development practice ensures safety through code reviews, automated testing, and the secure development. Data protection uses encryption, differential [Privacy](../../Skills/Data%20Science/Privacy.md), and the secure storage to safeguard sensitive information. Model security involves techniques like hardening and regularization to defend against attacks. Operational security applies multi-layered defenses and a zero-trust principles to production environment. And the [Continuous Monitoring](../../Skills/Data%20Science/Continuous%20Monitoring.md) detects anomalies and ensures the system stays secure over time. By prioritizing secure AI, you contribute to build more reliable and beneficial AI systems that can safely deploy it and integrated into people's lives. Now, here's your thought experiment. Imagine you are building a medical AI system to diagnose patients. How would you design and build your secure AI ring? How would you protect the system from vulnerabilities like adversarial attacks, data breaches, or operational risks? Write down your strategies and share them in a [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) post to spark a discussion with your network.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Deep Learning](../../Skills/Artificial%20Intelligence%20(AI)/Deep%20Learning.md) (1), [Privacy](../../Skills/Data%20Science/Privacy.md) (1), [Continuous Monitoring](../../Skills/Data%20Science/Continuous%20Monitoring.md) (1), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **Analogies:** picture (1), just like (1), imagine (1)
> **Speakers:** - [presenter] (1)

#### [Explainable AI](https://www.linkedin.com/learning/responsible-ai-framework-for-your-enterprise-ai-product/explainable-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/responsible-ai-framework-for-your-enterprise-ai-product/explainable-ai?u=76281980&t=0)** - [Instructor] Picture this, you are standing in a courtroom. The judge is about to decide your fate, jail time, or freedom based on a risk score generated by a piece of software. Sounds like science fiction, right? Well, it's not. This is the reality for many people judged by a tool in courts in the United States called COMPAS, Correctional Offender Management Profiling for Alternative Sanctions. COMPAS is what's called a black box algorithm to the public. This means it spits out risk scores for judges to use, but no one, not the judge, nor the defendant, knows the full details of how these scores are computed. Research shows that 45% of Black defendants who don't re-offend are classified as high-risk. Compare that to just 23% of white defendants. Conversely, white defendants who do re-offend are more likely to be misclassified as low-risk compared to Black defendants. These findings highlight racial bias in [Algorithms](../../Skills/Software%20Development/Algorithms.md)' predictions, where a single number can make a huge impact on someone's life. Transparency isn't just important, it's essential. The lack of explainability in COMPAS
>
> **[1:38](https://www.linkedin.com/learning/responsible-ai-framework-for-your-enterprise-ai-product/explainable-ai?u=76281980&t=98)** highlights the importance of explainable AI. The explainable AI ring ensures transparency, interpretability, and [Accountability](../../Skills/Data%20Science/Accountability.md) in AI [products](../../Skills/Software%20Development/Microsoft%20Products.md). By understanding how AI makes decisions, you can more effectively identify and mitigate biases, errors, and unintended consequences. Let's cover some widely-used strategies for building the explainable AI ring in industry. LIME, Local Interpretable Model-Agnostic Explanations, is a technique used to explain individual predictions made by machine learning algorithms. It doesn't need to know the inner workings of the model, making it model agnostic. Let's consider an example where Joe is applying for a loan, but got denied. The bank used a complex machine learning model to determine whether a loan applicant should be approved. The model considers various factors, like income, credit history, employment status, and more. However, the complex model is a black box, and it's not clear why Joe was denied. Here's where LIME comes in. We can use LIME to explain the model's decision. LIME makes small changes to Joe's application, like slightly adjusting his income or credit score,
>
> **[3:15](https://www.linkedin.com/learning/responsible-ai-framework-for-your-enterprise-ai-product/explainable-ai?u=76281980&t=195)** to see how each change affects the bank's decision. Using list variations and the results, it fades a simple regression model that highlights which factor drove the final deny decision. For example, it might reveal that Joe's low credit score and the short employment history were particularly influential reasons for the denial. With LIME, the loan approval system becomes explainable. Here are the LIME steps in detail. Feel free to pause the video here to learn more. Another technique is SHAP, Shapely Additive Explanations. It's built on a concept from game theory known as Shapely values, which determines the contribution of each player in a collaborative effort. In the context of machine learning, the players are the features in your data set. The team score is analogous to the model's predictions. SHAP calculates Shapely values for each feature. The feature with highest mean absolute SHAP value is typically considered the most important feature overall for the model's predictions. There are other important approaches, like attention mechanisms, which highlight salient input features, counterfactual explanations,
>
> **[4:47](https://www.linkedin.com/learning/responsible-ai-framework-for-your-enterprise-ai-product/explainable-ai?u=76281980&t=287)** which provide what if scenarios, and the rule-based systems, which offer inherent interpretability. Each of this contributes uniquely to building an explainable AI ring. Before we wrap up this section, here's the challenge for you. Create a [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) post explaining what explainable AI is, and include a real world example to illustrate your point. Feel free to tag me in your post. I love to see your ideas. This is a great way to join the conversation online, and in your own network about [Responsible AI](../../Skills/Artificial%20Intelligence%20(AI)/Responsible%20AI.md) while diving deeper into your learning journey.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Algorithms](../../Skills/Software%20Development/Algorithms.md) (2), [Accountability](../../Skills/Data%20Science/Accountability.md) (1), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1), [Responsible AI](../../Skills/Artificial%20Intelligence%20(AI)/Responsible%20AI.md) (1)
> **Env Vars:** lime (6), compas (3), shap (3)
> **Definitions:** is a  (3), known as (1)
> **Analogies:** picture (1), for example (1), analogous to (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Privacy-preserving AI](https://www.linkedin.com/learning/responsible-ai-framework-for-your-enterprise-ai-product/privacy-preserving-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/responsible-ai-framework-for-your-enterprise-ai-product/privacy-preserving-ai?u=76281980&t=0)** - [Instructor] Let me tell you a story that shook the world. In 2018, Cambridge Analytica, a political consulting firm, had harvested data from 87 million [Facebook](../../Glossary/Service/Facebook.md) users, now known as Meta, without their consent. How did they do it? Through a personality quiz called This Is Your Digital Life. People thought they were answering fun questions, like what's your leadership style? Or what kind of animal best represents you? But behind the scenes, their personal data and even their friends' data was siphoned off without their knowledge. And what happened to that data? It was weaponized. Cambridge Analytica used it to build psychographic profiles, microtarget voters, and even influence major political campaigns, like the 2016 U.S. Presidential Election. Suddenly, your online choices, your likes, clicks, and shares, weren't just private moments. They were tools in someone's strategy to sway opinions and shape outcomes. This wasn't just a breach of Meta's role. It was a breach of trust, and it sent shock waves across the world. The consequences were enormous, $5 billion in fines for Meta, the bankruptcy of Cambridge Analytica,
>
> **[1:35](https://www.linkedin.com/learning/responsible-ai-framework-for-your-enterprise-ai-product/privacy-preserving-ai?u=76281980&t=95)** and perhaps most importantly, a global conversation about how our data is used and misused. In the age of AI, the stakes of [Data Privacy](../../Skills/Data%20Science/Data%20Privacy.md) are even higher. Why? Because AI [products](../../Skills/Software%20Development/Microsoft%20Products.md) thrive on data, lots of it. Take, for example, the case of Clearview AI. This company built one of the most extensive facial recognition [Databases](../../Skills/Software%20Development/Databases.md) in the world. How did they do it? By scraping billions of photos from the internet, yes, billions, including images from social media profiles, all without anyone's consent. They used this database to create a commercial facial recognition tool, selling it to law enforcement agencies and private companies, and they did all of this while no consent from the individuals whose faces and biometric data were collected, no transparency about how this data was being used, and when people asked for access to their own data, Clearview AI refuses to comply. It was a direct violation of laws, like the European Union's General Data Protection Regulation, GDPR, and it faced hefty fines from authorities in multiple countries
>
> **[3:07](https://www.linkedin.com/learning/responsible-ai-framework-for-your-enterprise-ai-product/privacy-preserving-ai?u=76281980&t=187)** for illegally harvesting and using biometric data. For AI products, data is everything, but protecting it is everything else. That's why building the [Privacy](../../Skills/Data%20Science/Privacy.md) preserving AI ring is such a critical part of the [Responsible AI](../../Skills/Artificial%20Intelligence%20(AI)/Responsible%20AI.md) framework. The ring focuses on protecting individual privacy by ensuring AI products handle data properly, respecting confidentiality and minimizing data exposure. Here are key techniques to protect sensitive data while harnessing the power of AI. Differential privacy involves adding noise, random variations to either the data or the analysis results. This makes it difficult to pinpoint or reconstruct any individual's information. Imagine you are in a bustling cafe full of people talking. You hear a general murmur that helps you gauge the room's energy level, but you cannot single out anyone's exact words. The noise in differential privacy is like the hum. It reveals the overall vibe without exposing private conversations. Federated learning is a technique where global AI model is trained across devices or servers, each storing its own data locally.
>
> **[4:40](https://www.linkedin.com/learning/responsible-ai-framework-for-your-enterprise-ai-product/privacy-preserving-ai?u=76281980&t=280)** Instead of sending raw data to a central location, each device processes the data on-site and ensures model updates all parameters. Picture a city divided into several neighborhoods, each tracking its own traffic flow for local improvements. Rather than pulling every residents' travel data in one massive central database, each neighborhood processes its traffic records locally. They then share only summarized insights, like speed averages, peak travel times, or suggested improvements to traffic light timings with a central city planning [office](../../Skills/Web%20Development/Microsoft%20Office.md). This way, the entire city's traffic plan is continuously optimized using data from all area without exposing any individual's personal commuting details. Moreover, it allows each neighborhood to benefit from citywide learnings, while accounting for its unique local traffic patterns. Homomorphic encryption is a special type of encryption that allows computations to be performed on encrypted data without decrypting it first. It's like a magic box. You can put your sensitive data inside, lock it up, and still be able to work with it without ever seeing the extra data.
>
> **[6:14](https://www.linkedin.com/learning/responsible-ai-framework-for-your-enterprise-ai-product/privacy-preserving-ai?u=76281980&t=374)** Imagine you are analyzing thousands of medical records to find important patterns, perhaps looking for correlations between a specific treatment and the patient recovery rates. However, all of these records must remain strictly confidential. With Homomorphic encryption, you can perform your statistical or mathematical calculations on the encrypted data directly without ever seeing the sensitive patient information. Secure Multi-Party Computation or SMPC enables multiple parties to jointly compute a function over their inputs, while keeping those inputs private. SMPC ensures that only the final results is revealed without disclosing individual contributions or intermediate values during the computation process. Imagine you and your friends who want to figure out average salary among you, but don't want to disclose your personal incomes. Each friend inputs their salary into a secure system that keeps all salaries hidden from one another. In the end, they only see the average salary. No one can see anyone else's actual number. Lastly, there's synthetic data generation, a very interesting technique. It creates artificial data
>
> **[7:49](https://www.linkedin.com/learning/responsible-ai-framework-for-your-enterprise-ai-product/privacy-preserving-ai?u=76281980&t=469)** that mimics the statistical properties of real data without contending any personal information. Imagine a movie set that's created to look like a bustling city street. Production designers craft every detail, from the weather and the brick walls, to the precisely placed city signs to create a world that feels completely authentic. This approach means there's synthetic data generation, creating something that looks and feels real, but is entirely artificial, designed to train AI models or run simulations without revealing any sensitive information. Now, here's your assignment. Pick one of the key techniques we discussed and explain it to a coworker or friend using an analogy. Teaching others is a great way to solidify your understanding. Give it a try.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Privacy](../../Skills/Data%20Science/Privacy.md) (4), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (3), [Facebook](../../Glossary/Service/Facebook.md) (1), [Data Privacy](../../Skills/Data%20Science/Data%20Privacy.md) (1), [Databases](../../Skills/Software%20Development/Databases.md) (1)
> **Analogies:** imagine (4), for example (1), picture (1), it's like (1)
> **Definitions:** is a  (3), known as (1)
> **Env Vars:** smpc (2), gdpr (1)
> **CLI Commands:** find (1)
> **Cross-References:** we discussed (1)
> **Speakers:** - [instructor] (1)

#### [Fair AI](https://www.linkedin.com/learning/responsible-ai-framework-for-your-enterprise-ai-product/fair-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/responsible-ai-framework-for-your-enterprise-ai-product/fair-ai?u=76281980&t=0)** - [Instructor] Were you impacted by COVID-19? Now, imagine you were a frontline healthcare worker during the pandemic. Every day you are exposed to life-threatening risks, tirelessly working to save lives. Then when a vaccine becomes available, you discover you are not a priority. Sounds unfair, right? Well, in late 2020, Stanford Medicine developed an algorithm to decide who would receive the initial very limited supply of COVID-19 vaccines. Each staff member was assigned a score by the algorithm. But this system disadvantaged younger frontline workers, the very people facing the highest exposure to COVID-19. Only seven of Stanford's first 5,000 vaccines were designated for medical residents. Senior staff, many of whom were working remotely, were prioritized over frontline workers, and at least 100 medical residents and fellows protested against Stanford Medicine's leadership, calling out blatant inequity in the system. This incident highlighted the importance of fairness in AI and the need for careful consideration of potential biases when designing
>
> **[1:33](https://www.linkedin.com/learning/responsible-ai-framework-for-your-enterprise-ai-product/fair-ai?u=76281980&t=93)** and deploying such systems. The Fair AI ring ensures that decisions made by AI systems are free from buyers, treating both individuals and groups equitably, regardless of race, gender, identity, or other characteristics. It's especially critical in areas like hiring, loan approval or criminal justice where biased decisions can deeply impact lives. For example, in 2014, Amazon developed an AI recruiting tool to streamline resume reviews, but it quickly revealed a troubling flaw. It consistently downgraded resumes from women, especially for technical roles. The system was trained on decades of male-dominated hiring data. It not only favored male candidates, but also penalized terms like women's chess club or degrees from certain women's colleges. Amazon abandoned the project at the end, acknowledging the tool couldn't overcome its inherent bias. So now that we have explored why fairness in AI is so critical, let's talk about strategies you can use to build a fair AI ring. Diverse training data. The foundation of any fair AI system starts with diverse
>
> **[3:10](https://www.linkedin.com/learning/responsible-ai-framework-for-your-enterprise-ai-product/fair-ai?u=76281980&t=190)** and a representative training data. This means using datasets that reflect the full spectrum of demographics, ensuring no group is underrepresented or overrepresented. By reducing historical biases in [Data Collection](../../Skills/Data%20Science/Data%20Collection.md), you give AI a fighting chance to treat everyone equitably. Balanced development teams. Diversity isn't just about data, it's about the team building the model, including people from varied backgrounds and disciplines catches hidden biases and brings a broader perspective to the development process. Algorithmic make fairness are applied at three stages of the machine learning lifecycle. In pre-processing, methods like data augmentation, and re-weighting prepared diverse, and balanced training data. During in-processing and post-processing, methods like fairness constraints, adversarial debiasing, and threshold adjustments ensure models are trained and validated to deliver equitable outcomes. Continuous testing and evaluation involves testing before deployment, monitoring in real time during use, and conducting regular post-deployment audits to catch and fix new biases as they emerge.
>
> **[4:47](https://www.linkedin.com/learning/responsible-ai-framework-for-your-enterprise-ai-product/fair-ai?u=76281980&t=287)** Several metrics can be used depending on the context. Some common ones include equal opportunity, which ensures that people with similar qualifications, regardless of demographic, have an equal chance at success. Metrics like demographic parity look at decision rates across all groups. Individual fairness makes sure individuals in similar situations receive similar outcomes. This give us a quantitative way to evaluate and maintain fairness. Before we wrap up, here's a task for you. Imagine you are building a loan approval system. What steps would you take to ensure the AI's decisions are fair? Write down your ideas and share them in the course Q&A. I'm excited to see what you come up with.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Collection](../../Skills/Data%20Science/Data%20Collection.md) (1)
> **Env Vars:** covid (3)
> **Analogies:** imagine (2), for example (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [The limitation of this course](https://www.linkedin.com/learning/responsible-ai-framework-for-your-enterprise-ai-product/the-limitation-of-this-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/responsible-ai-framework-for-your-enterprise-ai-product/the-limitation-of-this-course?u=76281980&t=0)** - [Narrator] In this course, we'll explore the [Responsible AI](../../Skills/Artificial%20Intelligence%20(AI)/Responsible%20AI.md) framework and it's five rings, ethical AI, secure AI, explainable AI, [Privacy](../../Skills/Data%20Science/Privacy.md)-preserving AI, and fair AI. We've talked about real world incidents, thought experiments, and key techniques to help you build AI [products](../../Skills/Software%20Development/Microsoft%20Products.md) that are aligned with human values. At the end of each video, you were given an assignment. It's important to complete these tasks as they are designed to help you apply these concepts in real world scenarios, and make sure to share your certification and tag me on [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) so I can celebrate your achievement with you. With that said, we also need to acknowledge the limitations of this course. AI is evolving faster than we ever imagined Each breakthrough. We celebrate introducers, new uncertainties, new questions, and more often than we would like, new ethical complexities. Your engagement with this responsible AI course is not about finding definitive answers. Rather, it's about equipping yourself with the tools to navigate a terrain that's constantly shifting. Now it's time to take the next step, putting these ideas into practice. I want to encourage you to think of the Five Rings framework
>
> **[1:35](https://www.linkedin.com/learning/responsible-ai-framework-for-your-enterprise-ai-product/the-limitation-of-this-course?u=76281980&t=95)** as your foundation and your compass. It's here to guide you through challenges and empower you to build AI systems that are not only innovative, but also responsible.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Responsible AI](../../Skills/Artificial%20Intelligence%20(AI)/Responsible%20AI.md) (2), [Privacy](../../Skills/Data%20Science/Privacy.md) (1), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **CLI Commands:** make (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [narrator] (1)

#### [Build your responsible ex machina](https://www.linkedin.com/learning/responsible-ai-framework-for-your-enterprise-ai-product/build-your-responsible-ex-machina?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/responsible-ai-framework-for-your-enterprise-ai-product/build-your-responsible-ex-machina?u=76281980&t=0)** - Congratulations, you finished this course. I want to share a line from my favorite movie, "Ex Machina." It feels more relevant than ever in today's world. One day, the AIs are going to look back on us the same way we look at fossil skeletons on the planes of Africa. An upright ape living in dust with crude language and tools all set for extinction. To me, this is a powerful warning. I don't want humanity to become just a passing phase in evolution. If you are creating a machine that could one day surpass human intelligence, you'll need to make sure it doesn't grow into a demon. Best of luck in building your responsible Ex Machina.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Warnings:** warning (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - congratulations (1)


## Instructor

- [Alina Zhang](../../Instructors/Artificial%20Intelligence%20(AI)/Alina%20Zhang.md)

## Skills Covered

- Responsible AI
- Artificial Intelligence (AI)

## Path Context

### In [Building AI Products- Prototyping Essentials Professional Certificate by LinkedIn Learning](../../Paths/Artificial%20Intelligence%20(AI)/Professional%20Certificates/Building%20AI%20Products-%20Prototyping%20Essentials%20Professional%20Certificate%20by%20LinkedIn%20Learning.md)
← [AI Product Ideation- Principles and Practical Applications](AI%20Product%20Ideation-%20Principles%20and%20Practical%20Applications.md) | **3 of 6** | [AI Product Development- Technical Feasibility and Prototyping](AI%20Product%20Development-%20Technical%20Feasibility%20and%20Prototyping.md) →

## Part of

- [Building AI Products- Prototyping Essentials Professional Certificate by LinkedIn Learning](../../Paths/Artificial%20Intelligence%20(AI)/Professional%20Certificates/Building%20AI%20Products-%20Prototyping%20Essentials%20Professional%20Certificate%20by%20LinkedIn%20Learning.md)

## Appears In

- [Building AI Products- Prototyping Essentials Professional Certificate by LinkedIn Learning](../../Paths/Artificial%20Intelligence%20(AI)/Professional%20Certificates/Building%20AI%20Products-%20Prototyping%20Essentials%20Professional%20Certificate%20by%20LinkedIn%20Learning.md)

## Related Courses

_Courses sharing skills:_

- [Implement and Evaluate Cloud AI Solutions- Foundations of Responsible AI](Implement%20and%20Evaluate%20Cloud%20AI%20Solutions-%20Foundations%20of%20Responsible%20AI.md) — Artificial Intelligence (AI), Responsible AI
- [Responsible AI- Global Risks, Governance, and Human Oversight](Responsible%20AI-%20Global%20Risks%2C%20Governance%2C%20and%20Human%20Oversight.md) — Artificial Intelligence (AI), Responsible AI
- [Understanding Ai S Global Impact Governance Equity And Responsibility](Understanding%20Ai%20S%20Global%20Impact%20Governance%20Equity%20And%20Responsibility.md) — Artificial Intelligence (AI), Responsible AI
- [Responsible AI to the Rescue](Responsible%20AI%20to%20the%20Rescue.md) — Artificial Intelligence (AI), Responsible AI
- [Principles of Responsible AI- Identifying, Understanding, and Mitigating Risks by All Tech Is Human](Principles%20of%20Responsible%20AI-%20Identifying%2C%20Understanding%2C%20and%20Mitigating%20Risks%20by%20All%20Tech%20Is%20Human.md) — Artificial Intelligence (AI), Responsible AI

---

[↑ Back to top](#)