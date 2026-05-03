---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: ai-product-development-technical-feasibility-and-prototyping
url: "https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping"
duration_minutes: 126
duration: 2h 6m
level: Intermediate
updated: 4/29/2025
learners: 6387
skills:
  - AI Software Development
  - Prototyping
  - Artificial Intelligence (AI)
  - Product Development
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQE6q6oYZ-mdhQ/learning-public-crop_675_1200/B4EZYcb5jbHMAc-/0/1744233798227?e=2147483647&amp;v=beta&amp;t=N-gCi3lQBXKFOfl4wQvj79JHYlCWKzeT15XPN10orKA"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Building AI Products- Prototyping Essentials Professional Certificate by LinkedIn Learning]]'
prev_courses:
  - '[[Responsible AI Framework for Your Enterprise AI Product]]'
next_courses:
  - '[[AI Data Strategy- Data Procurement and Storage]]'
path_nav: '[{"path":"Building AI Products- Prototyping Essentials Professional Certificate by LinkedIn Learning","position":4,"total":6,"prev":"Responsible AI Framework for Your Enterprise AI Product","next":"AI Data Strategy- Data Procurement and Storage"}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - topic/data-science
  - topic/software-development
  - skill/ai-software-development
  - skill/prototyping
  - skill/artificial-intelligence-ai
  - skill/product-development
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/AI%20Product%20Development-%20Technical%20Feasibility%20and%20Prototyping.md)

![AI Product Development: Technical Feasibility and Prototyping](https://media.licdn.com/dms/image/v2/D4E0DAQE6q6oYZ-mdhQ/learning-public-crop_675_1200/B4EZYcb5jbHMAc-/0/1744233798227?e=2147483647&amp;v=beta&amp;t=N-gCi3lQBXKFOfl4wQvj79JHYlCWKzeT15XPN10orKA)

# AI Product Development: Technical Feasibility and Prototyping

> In this course, learn how to evaluate the technical feasibility of AI solutions by considering critical factors such as data availability, resources, ethical implications, technology constraints, and security concerns. Instructor Maria Parysz shows you how to select appropriate AI models and tools that align with specific project requirements, ensuring optimal performance and compatibility. The co

> [LinkedIn Learning](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping) | 2h 6m | Intermediate | 6K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Introduction](#introduction)
- [**1. What Is "Feasible"?**](#1-what-is-feasible) (2 videos)
  - [The goal: Feasibility and prototyping](#the-goal-feasibility-and-prototyping)
  - [Building options](#building-options)
- [**2. Tech Feasibility in Detail**](#2-tech-feasibility-in-detail) (16 videos)
  - ["Must knows" for feasibility](#must-knows-for-feasibility)
  - [Proof of concept, part 1](#proof-of-concept-part-1)
  - [Proof of concept, part 2](#proof-of-concept-part-2)
  - [Core AI architecture concepts, part 1](#core-ai-architecture-concepts-part-1)
  - [Core AI architecture concepts, part 2](#core-ai-architecture-concepts-part-2)
  - [How to do tech feasibility](#how-to-do-tech-feasibility)
  - [Questions for different implementation options](#questions-for-different-implementation-options)
  - [Who can help you out? Storage and computing power](#who-can-help-you-out-storage-and-computing-power)
  - [Architecture, latency, standalone vs. connected](#architecture-latency-standalone-vs-connected)
  - [Security, ethics, and compliance](#security-ethics-and-compliance)
  - [Endpoints and data](#endpoints-and-data)
  - [Talent](#talent)
  - [Maintenance and retraining](#maintenance-and-retraining)
  - [Scaling and testing](#scaling-and-testing)
  - [Metrics and time and budget updates](#metrics-and-time-and-budget-updates)
  - [Best practices of working with vendors](#best-practices-of-working-with-vendors)
- [**3. Prototyping**](#3-prototyping) (10 videos)
  - [Fundamentals of prototyping and prototyping timeline](#fundamentals-of-prototyping-and-prototyping-timeline)
  - [Prototyping roles, personas and expected outcome](#prototyping-roles-personas-and-expected-outcome)
  - [Minimum viable product (MVP)](#minimum-viable-product-mvp)
  - [Six strategies for building prototypes, part 1](#six-strategies-for-building-prototypes-part-1)
  - [Six strategies for building prototypes, part 2](#six-strategies-for-building-prototypes-part-2)
  - [Prototyping best practices](#prototyping-best-practices)
  - [The process of gathering feedback from users](#the-process-of-gathering-feedback-from-users)
  - [Best practices for gathering feedback from users](#best-practices-for-gathering-feedback-from-users)
  - [Drawing conclusions after the feedback](#drawing-conclusions-after-the-feedback)
  - [Demo](#demo)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/introduction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/introduction?u=76281980&t=0)** - In today's corporate environment, 50% of AI projects end in failure. It's not about the quality of the design, but rather when the product doesn't meet the business needs. AI managers will be in a very high demand to manage the process of visibility and [[Prototyping]]. In this course, you'll learn how to add super power to your product and make it feasible, and with prototyping, make sure your users will love it. My name is Maria Parysz and I have worked in AI for more than nine years. I want to share with you my hands-on experience as an AI product builder, advisor, and United Nations Speaker. If you're ready, let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Prototyping]] (2)
> **CLI Commands:** make (2)
> **Speakers:** - in (1)


### 1. What Is "Feasible"?

[↑ Back to Table of Contents](#table-of-contents)

#### [The goal: Feasibility and prototyping](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/must-knows-for-feasibility?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/must-knows-for-feasibility?u=76281980&t=0)** - Imagine you have a brilliant idea that feels like it's worth a billion dollars. You get so excited by how much it will help people and how it will make you rich and famous. But when you look closer, the idea is more detailing before you decide to invest all your savings in the development. Feasibility is the process of evaluating whether a product idea is viable before investing significant time and resources into its development. Actually, feasibility is a very broad term that answers the question is it worth our attention, money, and effort? Many companies select their AI ideas for the wrong reasons. For example, staying trendy. Some companies just like riding the AI hype wave, and if everyone's got their own chatbot, they want one too. The second, staying competitive. Sometimes companies decide on an investment simply because the competition is doing it and they want to keep up not being sure if it will benefit them at all. The third one is the other approach. They trust Their instincts over data, I just know is the right product. And lastly, sometimes companies implement AI because headquarters says so.
>
> **[1:33](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/must-knows-for-feasibility?u=76281980&t=93)** No deep dive into local needs, just blindly following headquarters case study. We don't want that. So we'll want to use the feasibility analysis, a process that will help us analyze if we actually want to invest in AI idea. Feasibility is a very broad term that answers questions like, is there demand on the market? Who are the target customers? What is the competition like? This market feasibility. Can the product be built with current technology and resources? That's technical feasibility. Will it be profitable? What are the costs and expected revenue? That's financial feasibility. Does the company have the right skills, infrastructure and supply chain to deliver the product? That's operational feasibility. And are there any legal, ethical or compliance barriers? That's compliance and legal feasibility. As you can see, there are different types of feasibility and there can be many more like environmental friendliness, cultural fit, sales capabilities and more. In this course, we'll focus on technical feasibility. We'll be asking questions that I use with my clients before they finally decide the project is
>
> **[3:07](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/must-knows-for-feasibility?u=76281980&t=187)** worth the investment. Simply speaking, our goal is to save money, time, and resources for the best AI initiatives. That makes sense and that's the key. What constitutes sense and how much effort should we be investing to check it out? A feasibility study itself comes with a cost, so it's important to keep it efficient. The goal is to gather enough insights to make an informed decision without overspending time and resources before the project even starts. Because it is you who will decide on how long to spend on analysis. You want to keep it concise, focused, and time limited. In the next video, I'll guide you step by step on how the visibility can be done and the must have steps. So if you are ready to learn more about visibility in practice, let's go.

> [!info]- Semantic Content
>
> **Analogies:** imagine (1), for example (1), just like (1)
> **CLI Commands:** make (2)
> **Definitions:** is a  (2)
> **Cross-References:** in the next (1)
> **Speakers:** - imagine (1)

#### [Building options](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/building-options?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/building-options?u=76281980&t=0)** - [Instructor] Some people get confused about when feasibility should happen. There are actually three points in time where you evaluate the AI idea and decide if it's worth further attention. Let's briefly look at AI project lifecycle to show you these three moments. The first moment is ideation. This is where we gather and brainstorm AI ideas that are based on customer pain points and operational inefficiencies. The goal is to generate as many options as possible without worrying about feasibility just yet. First and foremost, we remove overlaps and duplicates, then non-compliant ideas. Then we engage data scientists and business experts for a very limited time to do the second evaluation, early feasibility, potential impact, and alignment with strategic goals. At this stage, we don't need full feasibility studies, but we do need enough clarity to make meaningful comparisons between projects. If you want to know more about these steps, check out my course on [[AI Product Ideation- Principles and Practical Applications]]. Once we've narrowed the list down significantly, we move to the third and most critical moment, feasibility analysis and [[Prototyping]]. At this stage, we've already decided
>
> **[1:35](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/building-options?u=76281980&t=95)** that the project makes sense from a business perspective. Now we need to see if it will actually work from both a technological and user standpoint. We analyze whether the required AI models exist, whether the data is available and usable, and whether the project is technically achievable with current resources. A small-scale prototype, or proof of concept helps validate assumptions and highlights potential roadblocks early. Let me be clear. At this point, we will not be checking the business case. I assume that this has been done and until the outcome of the tech feasibility and prototyping says that it needs redesigning, we do not need to come back to the business calculations. Feasibility and prototyping is for deciding whether the project should proceed to full-scale development and fine-tune it accordingly before committing further investment. Sometimes when companies are in a hurry, they skip the traditional phase approach and go straight into gorilla development. In this approach, prototyping isn't a separate step. It becomes part of the development itself. Instead of validating the concept before starting, the company moves forward knowing
>
> **[3:10](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/building-options?u=76281980&t=190)** that they will implement the AI project no matter what. However, they fine-tune the concept as they go, usually through a series of prototypes, making adjustments in [[Real-Time]] based on feedback, technical challenges, and evolving business needs. This can be a highly effective method, especially in fast moving industries where speed is critical. However, it requires an experienced team skilled in [[Agile Development|agile]] AI development. Without strong [[Technical Leadership]], gorilla development can easily turn into chaos, so don't assume it's the best option simply because it's the fastest one. Okay, so what happens after feasibility? The product concept gets refined and it becomes a full blown AI project. We all want that, so let's meet in the next video to learn some more.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Prototyping]] (4), [[Real-Time]] (1), [[Agile Development|Agile]] (1), [[Technical Leadership]] (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)


### 2. Tech Feasibility in Detail

[↑ Back to Table of Contents](#table-of-contents)

#### ["Must knows" for feasibility](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/must-knows-for-feasibility-25734183?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/must-knows-for-feasibility-25734183?u=76281980&t=0)** - Before we move to analyzing feasibility, I want you to get familiar with several AI technology-related elements you need to be aware of. First, options for AI implementation. Second, the idea behind proof of concept. And third, the core AI architecture concepts. I'll explain everything in simple terms, so even without a technology background, you'll be able to understand it. These concepts will help you benefit more from the next chapter, so I strongly encourage you to go through them and dig deeper. If any of the presented concepts are new to you, I cover them in my other [[LinkedIn]] Learning course, The new AI Tech Stack: [[AI Literacy]] for Tech Leaders, so feel free to check it out. Now let's start with options for AI implementation. You see each option brings different challenges to the table, so, naturally, the visibility for each one will be conducted in a slightly different way. For example, with the buy option, you want to check licensing. While for the build, you will be assessing the computational power and storage. The option for implementation is usually selected during the first or second evaluation, but it can change at the feasibility
>
> **[1:34](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/must-knows-for-feasibility-25734183?u=76281980&t=94)** and [[Prototyping]] phase as well. Let's start with the first option, buying prebuilt [[AI Solutions]]. If you want a fast and simple way to integrate AI, buying an off the shelf solution is the easiest option. These are AI tools designed for specific tasks like customer service, marketing automation, or data analytics. Examples include [[ChatGPT]], Claude, or [[Gemini]] for answering customer questions, ElevenLabs for voice automation, or [[Tableau]] for data visualization. These solutions can be [[SaaS]], [[PaaS]], or even on-premise, depending on your needs. The biggest advantage is that it usually works right away. However, they can be less flexible and may not fit your exact needs. For companies with unique requirements, building an AI custom model is a better option. This means developing AI from scratch, either with an in-house team or by working with an external AI firm. Custom AI is best when there is no existing solution that meets your needs, or when current AI models aren't specific enough to add real value. However, this approach requires time, money, and high quality data.
>
> **[3:09](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/must-knows-for-feasibility-25734183?u=76281980&t=189)** Some companies start with prebuilt solutions first, then move to custom AI once they understand what they really need. If you want something customized but don't want to start from scratch, [[Fine Tuning]] might be the best approach. For example, you could fine tune a large language model to respond to customer emails in your brand's voice or add company-specific data like product catalogs or pricing. Fine tuning is a cost-effective way to get a more personalized AI without the time and expense of building an entire model. Sometimes the best approach isn't one AI tool, but a combination of several working together. This is where [[AI Agents]] come in, automated systems that connect different AI models to perform complex tasks automatically. For example, a customer service AI agent might integrate a chatbot, a CRM system, and an analytics tool to provide a seamless support experience. And the last option is to use AI services available on the cloud. Platforms like AWS, [[Google Cloud Platform (GCP)|Google Cloud]], and [[Microsoft Azure]] offer ready-made AI tools for tasks like [[Speech Recognition]], [[Image Processing]], [[Predictive Analytics]], and more.
>
> **[4:45](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/must-knows-for-feasibility-25734183?u=76281980&t=285)** They also allow you to easily fine tune models. You don't need to build or maintain AI infrastructure yourself. It's all managed in the cloud. However, it's rather a costly option and [[Data Security]] should be considered. Now that you know the implementation options, what's next? A super useful proof of concept for AI. I can't wait to share it with you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Fine Tuning]] (2), [[LinkedIn]] (1), [[AI Literacy]] (1), [[Prototyping]] (1), [[AI Solutions]] (1)
> **Analogies:** for example (3)
> **Env Vars:** crm (1), aws (1)
> **Definitions:** is a  (2)
> **CLI Commands:** aws (1)
> **Cross-References:** next chapter (1)
> **Warnings:** be aware (1)
> **Speakers:** - before (1)

#### [Proof of concept, part 1](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/proof-of-concept-part-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/proof-of-concept-part-1?u=76281980&t=0)** - [Instructor] Imagine a company wants to build an AI powered prediction mechanism to reduce long tails and predict which product should they sell in their [[E-Commerce]]. The leadership team is excited, the budget is approved, and developers start working on a complex AI model. Months go by, the team struggles with [[Data Quality]] issues because data is scars and poor quality, the model isn't performing as expected and integrating it into existing systems turns out to be much harder than they thought. Eventually, after spending thousands of hours and resources, they realize the AI system doesn't actually solve the problem and they will never use it. This happens all the time in AI development. The issue isn't a lack of ambition, it's a lack of early validation. In AI projects, before we look into data and test the first [[Algorithms]], it is very hard to say if the predictions will be at the satisfactory level. This is when proof of concept enters the scene. A POC is a small scene, experimental version of an AI solution that helps us to test whether an idea is technically and practically feasible.
>
> **[1:33](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/proof-of-concept-part-1?u=76281980&t=93)** I use it when I'm not sure how good the data is. The project is relatively new and there is not many resources on the effectiveness of AI for this problem. When client has high expectations from AI and we are not sure if the expected accuracy is possible in the given time or when a hypothesis is completely new, and we don't know if AI can solve the problem at all. Remember that POC in the AI world is not a document, but a real project where you clean a part of your data and build and test models to check if the data will give you nice returns or not. A couple of times I recommended not to continue a project after a POC and the company saves a lot of money rather than pushing through with the full project. Okay, so how does this work? Start with defining the hypothesis and the North Star. Set a specific measurable goal to keep the POC focused. For example, instead of saying improve film predictions with AI, ask can an AI predict which movie will become a blockbuster before the movie release with over 80% of accuracy? Then you need to agree on the timing.
>
> **[3:07](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/proof-of-concept-part-1?u=76281980&t=187)** So how long will the POC last? I usually suggest three to five months for the POC and for large projects around six months. Remember, at this point we don't want a full project, but the project verification. POC is an important topic, so we have another video to explore it in depth. See you in the next video then.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[E-Commerce]] (1), [[Data Quality]] (1), [[Algorithms]] (1)
> **Env Vars:** poc (7)
> **Definitions:** is a  (1), is an  (1)
> **Analogies:** imagine (1), for example (1)
> **Cross-References:** in the next (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### [Proof of concept, part 2](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/proof-of-concept-part-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/proof-of-concept-part-2?u=76281980&t=0)** - [Instructor] POC is like a standard project, but significantly smaller. You need to do business analysis and [[Data Preparation]]. Obviously, first you need to collect the data, clean it, and move on with testing some [[Algorithms]]. For the sake of POC, you can use just part of the data and then estimate what the accuracy could be if you use the complete data set. I prefer to use the whole data set from the beginning. It saves time for the future once the project gets accepted for full development. Obviously, assuming I have available computational power, if not, I use small data sets and simple infrastructure. Then select the best method based on the problem type or use a pre-trained model if you want to fine tune it, and trained algorithm on the data you prepared. You don't need to train the full model. The goal is to verify the hypothesis and estimate how the model will learn if given more time and potentially more data. Just to remind you, and POC, we are usually not building any front end nor back end. We are simply testing the AI capabilities, meaning AI models. For the front end testing, there are simpler ways to check if it is user-friendly, then to build it. The last two steps are preparation of findings
>
> **[1:38](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/proof-of-concept-part-2?u=76281980&t=98)** and suggestions and presenting it to the decision makers. For this, you'll need to have detailed documentation proving what you manage to achieve. I always have a brainstorming session with my team to decide on the options we can propose to the client and which we find the most sensible given the client's situation. The main suggestions should be to move forward with certain requirements and adjustments or not to go with the project at all. Presenting these conclusions to decision makers takes time, so a one hour meeting is a bare minimum. It usually takes up to two hours as the decision makers want to know how we came up with the conclusions and the results, both positive and negative. I know it might sound awful to propose a no-go decision, but honestly, sometimes it is the best option. Even if the POC fails, the insights gain can guide future improvements. One time my client heard the suggestion, supported by information that the data is too small and they decided to push the project forward until they gathered the data. Nine months later, we finally launched the successful project. Okay, now let's move on to the next video where I'll explain to you important and highly practical AI concepts.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Preparation]] (1), [[Algorithms]] (1)
> **Env Vars:** poc (4)
> **CLI Commands:** find (1)
> **Cross-References:** next video (1)
> **UI Navigation:** select the (1)
> **Definitions:** is a  (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Core AI architecture concepts, part 1](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/core-ai-architecture-concepts-part-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/core-ai-architecture-concepts-part-1?u=76281980&t=0)** - [Instructor] Let's explore some of the most exciting parts of [[Artificial Intelligence (AI)|artificial intelligence]] that you will use as a foundation for our deeper tech dives later. Think of this as both a great introduction and a cool refresher if you are already familiar with these ideas. First, you need to know that in most cases, you need [[Hardware]] to use ai except when you plan to go the buy option in the form of [[SaaS]], [[SaaS|software as a service]] where the solution is on someone else's server. A tech stack is the mix of hardware and software that runs your AI project. It includes the processing power, mostly from GPUs and the storage that holds all your data. A strong tech stock means your AI can work fast, process more data, do more computations, hence deliver more advanced AI in less time. The stronger the tech stock you have, the better, but it also means higher cost. Computing power is how fast is your computer to run computations. The faster GPU and the more GPUs you have, your model building will be faster and easier. Storage on the other hand, refers to the capacity to hold the vast amounts of data
>
> **[1:36](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/core-ai-architecture-concepts-part-1?u=76281980&t=96)** that AI projects require. This includes not only the raw data like images, text or sensor readings, but also the models, training checkpoints, user feedback and logs generated during the process. And the second point, you need to understand the difference between building an AI model and building an AI system. Building a model focuses on creating the smart [[Algorithms]] that make predictions or decisions, but on its own, it's not yet a working system. You can either connect the model with an existing system through API in your architecture, or you can build it from scratch. Building a system from scratch means creating the front end, which is what people see and interact with, and the backend that does the heavy lifting with data and processing. Simple example, you can input AI based sales predictions into an ERP, or you can build a separate system for that. Moving on to the third point. I mentioned API a moment ago. APIs are like bridges that let different software systems talk to each other. They allow your AI to share information and functions with other applications easily. You'll need them to connect AI model with any system
>
> **[3:13](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/core-ai-architecture-concepts-part-1?u=76281980&t=193)** and also to bind several AI into a process. The fourth element is [[MLOps]]. MLOps is all about putting machine learning into practice after the deployment. Regular maintenance and retraining is a must have as new data comes in. Remember, retraining is not an option, it's a must have. And it should be taken into consideration while analyzing visibility. Then the fifth point, who is working with AI models? At a minimum, you'll need data scientists to create and train the models or to fine tune them. Also, engineers integrate these models into larger systems and developers to build apps. Data engineers are also important because they prepare and manage the data. Additional common roles are data analysts, machine learning engineers, and also business roles like AI project or product management. And if possible, also hire AI ethicists and AI UX designers. This is not the end of the list guys, so join me in the next video for five additional important concepts.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hardware]] (2), [[MLOps]] (2), [[Artificial Intelligence (AI)|Artificial intelligence]] (1), [[SaaS]] (1), [[SaaS|Software as a service]] (1)
> **Env Vars:** api (2), gpu (1), erp (1)
> **Definitions:** refers to (1), is a  (1)
> **Prerequisites:** you'll need (2)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Core AI architecture concepts, part 2](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/core-ai-architecture-concepts-part-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/core-ai-architecture-concepts-part-2?u=76281980&t=0)** - [Instructor] Welcome back. We'll continue with our list of AI concepts that are super important for assessing feasibility. We left off on the fifth. The sixth one is the device you design for, like a smartphone, computer, smartwatch, [[IoT]] gadget, or a robot. It greatly influences your development choices. Each device has its own strengths and limits in terms of power, memory, and user interface, and each one has a separate OS, meaning, operational system you would be writing the code for. The more endpoints, the more costly and complicated the project will be. Then the seventh point, data sources. And they can come from different places: synthetic, external, and internal. Internal data is gathered from within your organization and are considered the best and cheapest source. Synthetic data is generated by computers when you don't have enough real data, which can be really handy but requires resources and time. And external data that comes from outside sources, like public datasets, adding extra context to your models, but you need to clean and thoroughly check them.
>
> **[1:35](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/core-ai-architecture-concepts-part-2?u=76281980&t=95)** You can either scrape them, download from an open data source, or buy them. Scraping brings some risks and challenges, especially around [[Data Privacy]] and ownership and buying, you know, costs. Then the eighth element. You need to know what RAG is. RAG, or [[Retrieval-Augmented Generation (RAG)|retrieval-augmented generation]], is the most popular fine-tuning strategy, a method that helps AI models [[Fetch]] extra information before generating a response. This makes the answers more accurate and tailored to what you need, with less risk of hallucinations. However, sometimes you might want to do standard fine-tuning that takes longer and is less flexible, but it's more coherent, especially if you want to sell the product to someone. Then the ninth element, [[AI Security]], is all about protecting your data, models, and systems from unauthorized access and attacks. It involves measures like encryption, [[Secure Coding]] practices, and [[Continuous Monitoring]] to keep everything safe. And obviously the more prone to attacks the project is, the more costly and potentially less feasible it will be. And then the tenth, last element, the metrics.
>
> **[3:11](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/core-ai-architecture-concepts-part-2?u=76281980&t=191)** Feasibility largely depends on the AI metrics you set. Because higher expectations for accuracy means you'll need more resources. This includes investing extra time, computing power, and the larger amount of quality data to train your model effectively. In simple terms, the more ambitious your goals for model performance, the more you'll need to put into making it a reality.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[IoT]] (1), [[Data Privacy]] (1), [[Retrieval-Augmented Generation (RAG)|Retrieval-augmented generation]] (1), [[Fetch]] (1), [[AI Security]] (1)
> **Env Vars:** rag (2)
> **Prerequisites:** you'll need (2)
> **Speakers:** - [instructor] (1)

#### [How to do tech feasibility](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/how-to-do-tech-feasibility?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/how-to-do-tech-feasibility?u=76281980&t=0)** - [Speaker] How to do tech feasibility. I share a little secret with you. It's actually very simple. I make a straightforward process for you, so even people with no technical background can follow it. You start with your project idea. Describe it first in an initial template and then in the detailed one, and then you just work through the list of questions I have prepared. For each question, you should decide if the project is feasible from the particular point of view. If it's not, think about what would need to happen to make it feasible. Maybe that means buying additional computing power or using cloud resources. Once you've answered all the questions and added the appropriate comments, just sum up your responses along with any potential activities and costs required to make the project work. Then you present your findings to the decision-makers. We prepared for you an additional file, a checklist with all the questions we just mentioned. It is done in a form of a table where you go point by point and you feel such elements are, the selected option, whether it's feasible or not feasible, what is required to get it feasible,
>
> **[1:33](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/how-to-do-tech-feasibility?u=76281980&t=93)** and your additional comment. Okay, so there is a template that you can use for checking out your AI ideas and also a filled-out template for you to see how I would do it. I hope you'll find it useful. Make sure to check your exercise file. Before we move on to the list of questions. Let's first define what it means for an element to be feasible. Take computing power, for example. It's not about having the resource at hand, but also ensuring that using it is realistic or achievable. If training a model would use up all your GPUs for the next six months, leaving no room for other initiatives, it might be technically possible but not really practical. In that situation, you'd mark it as potentially feasible and add a note that if the company is ready to invest in additional GPUs, then it becomes truly feasible. The same with achievable. Let me give you an example. Let's say the expectation is to have a model of 99% of accuracy. That's pretty high, but achievable. However, in a significantly longer time and with much more resources engaged, such high-expectations can make the project possible, but hardly achievable, hence less feasible.
>
> **[3:08](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/how-to-do-tech-feasibility?u=76281980&t=188)** Okay, so let's have a look at the list of main questions that you should be asking during feasibility analysis. First, do we have enough computing power? Think enough GPUs. Second, do we have sufficient storage? Think space and systems to store, manage, and quickly assess data. Third, do we integrate with existing systems or build standalone? The fourth one, what is the architecture and is our network capacity enough? The fifth one, are we meeting all security and regulatory standards? Sixth one, what are the compliance and ethical risks? Is the solution explainable? Seventh, what devices are we designing for? Eighth, is the data available and of good quality? The ninth is our in-house talent up to the task? The 10th one, what is our plan for maintenance and retraining? 11th, how do we plan to scale? 12, what kind of testing and validation will be required? 13th, how likely are we going to achieve the metrics? And additionally, check once again, the budget and timeline. If after your analysis, it needs some tweaks and updates, so you ask two additional questions in the end. The 14th, what will the overall costs look like?
>
> **[4:43](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/how-to-do-tech-feasibility?u=76281980&t=283)** And the 15th is the project timeline realistic? Once we have questions, we'll dive deeper into them in the next videos.

> [!info]- Semantic Content
>
> **CLI Commands:** make (5), find (1)
> **Exercise Files:** template (3), exercise file (1)
> **Prerequisites:** required to (2)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Best Practices:** make sure to (1)
> **Warnings:** note that (1)

#### [Questions for different implementation options](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/different-questions-for-different-implementation-options?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/different-questions-for-different-implementation-options?u=76281980&t=0)** - [Instructor] In one of the previous videos, you learned about five different options for AI implementation. Remember, buy, build, fine tune, connect into agents and use cloud. Great. So you need to know how you should adopt the list of feasibility questions for each of these options. So it reflects the architecture of this particular solution. Let me explain with examples. With buy, we would be focusing mainly on the installation, security, data, maintenance and retraining because all the other points are being taken care of by the vendor. However, we would be adding additional questions like, what is the stage of [[Product Development]]? Is it alpha, beta? Is it fully operational? How long has it been on the market? Remember that for the buy, we need to check all the points from the list above, but they would be phrased somehow differently. For example, what data was used for training the system? Is the system secure? What level of latency is the product promising? How secure the data is that will be flowing through the sauce? It means that we are still interested in all the feasibility points, but instead of checking it on our end, you need to check it with the supplier. The supplier should be taking care of
>
> **[1:34](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/different-questions-for-different-implementation-options?u=76281980&t=94)** everything except for the integration. There will be a separate video on the best practices of working with suppliers, and external product providers. With built, you simply go through the list above. With fine tune. You install the external system in your environment, and it still requires your own data, installation experts, testing, storage, processing power and more. The most typical application of fine tune is to buy the AI system, and make it safe on local premises. With Connect into agents, you should focus on connections, latency, but also on the security of separate elements of the network, so-called the Internet of Agents. As with all the networks, it's as strong as its weakest link, so you need to focus on that. And lastly, with cloud, you simply must add these questions. Where is our data stored? How safe is the cloud? What is promised in the SLA? What applications are available on the cloud? Will it allow us to easily scale, add new components, retrain, test and debug and monitor? Okay, guys.
>
> **[3:06](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/different-questions-for-different-implementation-options?u=76281980&t=186)** Well done. We are finally ready to dig into the feasibility questions from our list. We'll do it one by one starting in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Product Development]] (1)
> **CLI Commands:** make (1)
> **Env Vars:** sla (1)
> **Cross-References:** in the next (1)
> **Definitions:** means that (1)
> **Analogies:** for example (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [Who can help you out? Storage and computing power](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/who-can-help-you-out-storage-and-computing-power?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/who-can-help-you-out-storage-and-computing-power?u=76281980&t=0)** - [Instructor] Before we move on, I'd like to clarify that feasibility analysis is a team exercise and should include several experts. You must engage a data scientist who understands the model; a developer who gets architecture and connections; a data person, for example a data engineer, who knows the state of data in your organization. And quick checks with the infrastructure managers, resource planning manager, and someone from security, regulations like AI Act, compliance, or risk. Now, let's jump into feasibility questions. The first question is: Do we have enough computing power? In the context of AI projects, this usually means having powerful GPUs because they are optimized for the large-scale parallel computations needed for tasks like training and fine-tuning LLMs. You should estimate your project in the number of GPU hours or GPU days. For example, if your project is 1,000 GPU hours, it means that either one GPU will be working for 1,000 hours or 10 GPUs per 100 hours nonstop. The more GPUs you have at your disposal, the better.
>
> **[1:36](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/who-can-help-you-out-storage-and-computing-power?u=76281980&t=96)** More GPUs can handle larger models or multiple tasks simultaneously. For example, having a cluster of GPUs can significantly speed up the process compared to using a simple GPU. Not all GPUs were created equal. There are faster and slower models, and the price tag usually follows the speed. The market is practically monopolized by NVIDIA chips, which are considered the best, but there are many other suppliers. Do you need to go for the best? The fact is you usually work with what you have, except for the strategic projects for which the company can agree to buy special set of GPUs. If you don't have GPUs, you either need to buy them, use the cloud, or select the buy option where computing power is not necessary. Okay, to summarize. First, you go to data scientist for the estimate and then to the [[Hardware]] experts to check if this is possible. Or in reverse, check what is available and calculate the time of the project. The second question is about storage you need for the project. For this, you need to contact hardware experts, the data scientists, and data engineers to give you data estimates. So, you should get an estimate in gigabytes, terabytes, or for the largest projects, in petabytes.
>
> **[3:15](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/who-can-help-you-out-storage-and-computing-power?u=76281980&t=195)** And it should be estimated over time because the data will only get larger. To do some savings, remember, you don't always need the high-quality pictures for training [[Computer Vision]] models. Consider if lower quality is enough. The good news is that storage can be shared within one company and that there are several options, including data warehouse, [[Data Lakes]], and more. Adding additional storage sounds easy, but it usually takes time, so we are often stuck with what the company has. This is not the case when the company uses the cloud for [[Data Storage]]. In that case, you can scale up in minutes, assuming you have budget, to cover additional demand. Remember that the data expert should advise what combination of cert will work best for you. Suppose you're working on a large language model that processes millions of sentences. The raw text data might not take up a lot of space, but once you start creating multiple versions of your model and saving intermediate training results, the storage requirement increases dramatically. In such cases, using a combination of local and [[Cloud Storage]] might be the best approach.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hardware]] (2), [[Computer Vision]] (1), [[Data Lakes]] (1), [[Data Storage]] (1), [[Cloud Storage]] (1)
> **Env Vars:** gpu (5), nvidia (1)
> **Analogies:** for example (3)
> **UI Navigation:** select the (1), go to (1)
> **Definitions:** is a  (1), means that (1)
> **Prerequisites:** assuming you have (1)
> **Speakers:** - [instructor] (1)

#### [Architecture, latency, standalone vs. connected](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/architecture-latency-standalone-vs-connected?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/architecture-latency-standalone-vs-connected?u=76281980&t=0)** - [Instructor] Let's continue with the next questions. The third one is, do we integrate with existing systems or build standalone? This is about deciding whether your AI solution should be built to work within an already existing system like your company's current software, or as a completely separate independent application. Remember, not all models come with frontend nor backend, so either you need to build it or connect the model to an existing system. If you decide to build standalone, you need to consider extra time, cost, additional talents, security, and all the elements that are usually connected to building an IT system. Sometimes, this is easier than connecting the model to an existing system. If you want to connect, make sure to analyze if the current systems use technology or data formats that your AI solution must work with. Add extra time for testing the connection and potential changes in the interface of the existing system, and be sure to check the risk of AI slowing down the existing system. The fourth question is what is the architecture, and is our network capacity enough? Depending on the option of implementation you selected, this question will be either about connection
>
> **[1:35](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/architecture-latency-standalone-vs-connected?u=76281980&t=95)** with internal systems for the buy, using RAG or a set of RAGs for the fine tune, how the AI model works for the build, the agentic flow for the connecting to agents, and the relation between systems on cloud. For this, I like drawing the simple structure and then analyzing connections, the inputs and outputs. You also need to decide whether you want to use [[Batch Processing]] or a real time model. [[Real-Time]] AI applications are much more demanding and usually more expensive to build and maintain. For example, for applications requiring fast responses, like real-time fraud detection or online recommendation systems, low latency is crucial. For that, you must check if your network can handle peak loads. Latency is the delay between when data is sent and when it is received. For example, if you click a button in an online game, the time it takes for your action to register on the screen is the latency. Lower latency means faster response times. However, low latency always comes at a cost. The architecture you choose, for example, RAG, will affect the latency. RAG will slow it down
>
> **[3:08](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/architecture-latency-standalone-vs-connected?u=76281980&t=188)** in comparison to a fully fine-tuned model, which is why such concepts as CAG, cash augmented generation, are being applied. At this point, you should also analyze your network capacity and if your current network infrastructure can support the data flow required by your AI application. A common mistake is to assume the app will be used in large cities and in the offices with fiber. Come on. This is obviously completely unrealistic. So first, you put together an architecture potentially in two, three options, and then analyze its feasibility and apply changes accordingly. As one of the steps, I strongly recommend creating a flow chart showing how data moves through the system and where potential bottlenecks might occur. I also add stress tests into the project's schedule and budget because at this time, they are just assumptions. Now let's continue with security, [[Ethics]], and compliance. See you in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Real-Time]] (2), [[Batch Processing]] (1), [[Ethics]] (1)
> **Env Vars:** rag (3), cag (1)
> **Analogies:** for example (3)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Best Practices:** make sure to (1)
> **Warnings:** common mistake (1)
> **Speakers:** - [instructor] (1)

#### [Security, ethics, and compliance](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/security-ethics-and-compliance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/security-ethics-and-compliance?u=76281980&t=0)** - [Instructor] Okay, now let's focus on the fifth question. Are we meeting all security and regulatory standards? The first point is about regulations. Is your AI solution compliant with laws and guidelines that apply to [[AI Solutions]]? Think of it as making sure your project follows all the rules of the road for technology. Depending on the region and country, the regulations can be different. For example, if you want to operate on the European Union market, you need to comply with the AI Act, Digital Act, and GDPR for the data. In the USA, check out HIPAA, and in Canada, the PIPEDA. Regulations are evolving, so make sure to check their latest versions. Additionally, you should check out the specific regulations for industries. Usually healthcare is quite demanding because of the personal health data, but also utilities and [[Banking]], which are traditionally rather tightly regulated. Let's say you are building an AI health diagnosis tool. It must protect patient data through encryption, limit access to sensitive information, and follow healthcare regulations. So it will affect the whole project from [[Privacy]]-oriented architecture
>
> **[1:36](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/security-ethics-and-compliance?u=76281980&t=96)** to additional time and budget for [[Data Preparation]] and anonymization. The second element is security. You need to verify with [[Cybersecurity]] experts if your concept is vulnerable at any level. The security team should also help you in adding certain steps to your schedule during the project that will help in securing the development, for example, security tests. Obviously, while checking the feasibility of regulations and security, you can't say that it's not compliant or insecure because no one will accept it for implementation. If at this point you come up with some vulnerabilities, make sure to change the project accordingly. Time for the sixth question. What are the compliance and ethical risks? Is the solution explainable? Okay, there are two points here. Compliance and ethical risks and explainability. They are connected, but not the same. Analysis of ethical risks involves looking at potential issues that arise from how your AI system operates, makes decisions, and processes data. For example, does your system unintentionally discriminate or does it operate in any way that isn't fair? Ethical risks also include concerns
>
> **[3:08](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/security-ethics-and-compliance?u=76281980&t=188)** about transparency and [[Accountability]]. Ethical analysis at this point should be done by an AI [[Ethics]] expert, but if there is none, make sure you engaged as many people as possible. A super important rule is you should never make ethical decisions alone because whether we want it to be or not, we are all biased. It is a simple checklist that should be filled out. I have added a list of resources that you can use in the exercise files. Ultimately, what you're looking for are potential risks that should be summarized in the feasibility form. Now, explainability. Explainability means that the users will understand how the system works and will be able to use it properly. It should also be transparent to decision makers. If something goes wrong, stakeholders should be able to see why the AI made a certain decision. My personal opinion is that all AI systems can be made explainable. It's just a matter of their architecture, front end, and documentation, and it just takes time and effort. So if I would say it is less about verification and more adapting the project, so the explainability requirement is met. Okay, now that you know about ethics, compliance, regulations, and explainability,
>
> **[4:45](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/security-ethics-and-compliance?u=76281980&t=285)** let's move on to the end points and data in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ethics]] (2), [[AI Solutions]] (1), [[Banking]] (1), [[Privacy]] (1), [[Data Preparation]] (1)
> **CLI Commands:** make (4)
> **Env Vars:** gdpr (1), usa (1), hipaa (1), pipeda (1)
> **Analogies:** for example (3), think of it as (1)
> **Best Practices:** make sure to (2), you should never (1)
> **Definitions:** is a  (1), means that (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** exercise files (1)

#### [Endpoints and data](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/endpoints-and-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/endpoints-and-data?u=76281980&t=0)** - [Speaker] Welcome back. Let's continue with our feasibility questions. The seventh question is about endpoints. What devices are we designing for? Typically, people don't remember that when you design an AI application, you need to decide about the type of devices that will be using it. The design requirements for a mobile app, a desktop application, a robot, or an embedded system like [[IoT]] devices are very different. For each device, you typically use different codes because you use different operational systems. If you want to write for several endpoints, it will be pretty costly and require significant resources. You should consider factors like processing power, screen size, battery level, and connectivity options when designing for various devices. Imagine you are developing a voice assistant. Designing for a smartwatch means you need to account for limited processing power and battery life. While designing for a smart speaker might allow for more processing power and a constant power supply, but requires excellent sound quality. So first, you need to list all devices where your AI will be used, and then understand the requirements and limitations of each device. Next, make a fast-track estimate and decide on the final list of endpoints.
>
> **[1:36](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/endpoints-and-data?u=76281980&t=96)** Then simply adjust the project, including scope, time, and budget to meet the specific needs and constraints of each device. The eighth question we should talk about is data. That is a very lengthy point, and we'll go into more detail in a separate video. In general, you need to assess the following elements at this point. Do we have enough data? Does data cover the scope? Is the data good quality? What is the risk of data being biased? Enough data is obviously relative and depends on the project type and scope. Data scientists should tell you how much data you need. This is usually defined by the size of data sets and sometimes, the time period. For example, one terabyte of sales data from the last five years. Sometimes, data is narrow, so it doesn't cover the scope. Good data is varied and deep. If data is too small or not varied enough, you can consider several strategies including acquiring, scraping, or synthesizing data. You should estimate the cost of such data-related activity and add it to your feasibility form. You can also decide to wait for the data to be generated organically. In that case, you should add such information to the form suggesting a project delay due to lack of data.
>
> **[3:15](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/endpoints-and-data?u=76281980&t=195)** Good quality data means that data is complete. There aren't duplicates or any misplaced information, and the data can be easily connected from several sources. For this, you first take data samples and ask data scientists or data engineers to verify the quality and estimate the time required to clean and prepare data for training the model. Lastly, at this point, the same team should help you with assessing if data may hold some kind of bias that the model would perpetuate. See you in the next video where we'll be talking about how to verify talent that you need for your project.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[IoT]] (1)
> **Definitions:** is a  (1), means that (1)
> **Analogies:** imagine (1), for example (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [speaker] (1)

#### [Talent](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/talent?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/talent?u=76281980&t=0)** - [Instructor] Now that we are back, let's discuss how to assess if we have the talent needed for the project. In a previous video, we covered that for each project, you'll need a different set of talents from the list of necessary resources. I suggest doing this assessment at the end of your analysis, as it should reflect all the scope changes you might make over the feasibility analysis. You can do it two ways. Either you estimate who you need and then check with the person responsible for resources in your company, or check the available resources and place the scope and project length accordingly. Remember that some roles are interchangeable. For example, data scientists can most of the time do the jobs of data analysts, ML engineers, testers, and also data engineers. You can also support your project by inviting some external experts. If there aren't trained experts on board, try working with a trusted vendor that can either contract out a complete team or do the project for you. At this point, remember this one thing, AI experts shouldn't be generalists anymore. AI has grown in the huge field with so many technologies under the AI umbrella.
>
> **[1:36](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/talent?u=76281980&t=96)** They usually require different technologies, different set of scales, different software, and sometimes even [[Hardware]]. This means that you should engage people who are experienced in the particular technology you want to use in your project. At the feasibility stage, you can engage generalists, but for the project, plan for the field, utilize experts like time series experts, voice [[Generative AI|GenAI]] experts, recommendation engine experts, and so forth. And now, pro tip from my projects. I engage one super expert and the [[Representational State Transfer (REST)|rest]] follow this person's lead. Many people forget that one of the crucial talents necessary for AI project success is the skilled AI manager or AI product manager. Take this role into consideration in your estimates, because in many companies, the lack of this role can be one of the main bottlenecks. Okay. I'm pretty sure you know who you should engage in your AI project, so let's talk about maintenance and retraining.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hardware]] (1), [[Generative AI|Genai]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Cross-References:** previous video (1), we covered (1)
> **CLI Commands:** make (1)
> **Definitions:** means that (1)
> **Analogies:** for example (1)
> **Best Practices:** pro tip (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Maintenance and retraining](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/maintenance-and-retraining?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/maintenance-and-retraining?u=76281980&t=0)** - [Instructor] Hi. Now let's have a look at the most underappreciated element of visibility. The 10th question is about our plan for maintenance and the retraining. Many people assume that what happens after an AI project gets deployed is not a project matter anymore. I disagree. Yes, maintenance is taking place after the deployment. While it's unwise to assess the feasibility of the project only for the short term, you should also consider what will make the AI system a success in the long term. I suggest finding answers to following questions. Is there a team to maintain the AI system? Did you plan for the data from the system to be safely stored? Do you have storage? You'll need both correct and faulty system predictions when it comes to retraining. How do you plan to monitor the AI app? Maybe you need to buy a system for that. Monitoring is an absolute must. As you'll hear in a moment, all AI systems decay in time. And the fourth one, how do you plan to arrange feedback loops? In other words, how do you plan to gather feedback from users or stakeholders about the AI systems performance? And finally, what are the retraining requirements and can you afford it? Retraining means that every couple of months
>
> **[1:37](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/maintenance-and-retraining?u=76281980&t=97)** you update the AI model with new data so that it stays accurate and relevant. The model decay or data drift, as some people call it, is a standard way all models behave in time. AI quickly becomes less accurate simply because the real world conditions change. How often do you need to do it, depends on several elements. Like the industry. [[E-Commerce]] typically changes faster than finance. The importance of the model and how fast the data changes. You can learn more about retraining from my course, the new AI tech stack. [[AI Literacy]] for tech leaders. Typically, it's done every six months or so, but not later than a year. There is also an option of a constant retraining loop that is installed in the system. It is very convenient, but quite complicated when it comes to development and maintenance. It involves additional costs and a specific architecture you'll need to develop during your project. Typically, companies decide on the periodical retraining. Okay, so with retraining, you should analyze the frequency of such retraining. Think how much it will cost you what data is necessary. If you plan to acquire data for the core project, you need to do the same for the retraining, right?
>
> **[3:11](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/maintenance-and-retraining?u=76281980&t=191)** And what talent is necessary. Please remember that with each retraining round, you need to do testing and that it is an additional cost. If you don't know how often you should do retraining, you can assume six months. Well done. Meet me in the next video for the scaling and testing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[E-Commerce]] (1), [[AI Literacy]] (1)
> **Definitions:** is an  (2), in other words (1), means that (1), is a  (1)
> **Prerequisites:** you'll need (2)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Scaling and testing](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/scaling-and-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/scaling-and-testing?u=76281980&t=0)** - [Instructor] Okay, we're almost there. In this video, we'll be talking about scaling, testing and validation. The 11th question is, what is the plan for scaling? Typically, when we plan our AI projects, we tend to think that it will be used by a couple of hundred users with stable internet connection, that understand application language well and are AI native, meaning they will be able to use all our functionalities with ease. That is rarely the case. Even if this is at first, in time, the system will grow and should have more data, more users, more tasks, more functionalities, and more connections with existing systems. Why should you bother at this stage? Because how you plan the project now will affect the ease of [[Scalability]]. The potential for larger volumes must be planned into your architecture. Obviously, some systems are meant to stay small, but most are designed to get larger and more complicated in time. This is especially important for client-facing systems, because you don't know when your system will take off, and you need to be prepared to scale fast. Imagine you have developed
>
> **[1:32](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/scaling-and-testing?u=76281980&t=92)** an AI chatbot for customer service that works well with 100 users. However, your company grows and 10,000 customers start interacting with it. The system needs to be able to manage that higher load. If it isn't designed to scale, the chatbot might become slow or unresponsive. So, in the feasibility form, you need to state how many users, data, and connections the system is designed for, if the system can be easily scaled, and to what size. The 12th and the next question is about testing and validation. Obviously, you do testing to ensure that your AI system works as intended and meets quality standards, but with AI, you need to test several times, and each of them requires budget, time, and different talent. So the first one is model validation. This test performed by data scientist is to check your models accuracy in terms of predictions, comparing predictions against historical data, so-called back testing, and running pilot programs to see how it performs in real time. The second standard system testing, like UATs, unit tests, performance tests, stress tests, and more.
>
> **[3:11](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/scaling-and-testing?u=76281980&t=191)** You want to catch errors and verify performance. If your AI architecture is to connect the model with the existing system, you obviously should test the integration. This is done by developers or testers. And the third one, ethical and UX testing, where you test if the system is free from bias, and whether users intuitively know how to use it. Each of these tests bear considerable costs. With more advanced systems, you will need more thorough testing. So for the testing, plan it with the people who will help you. Data scientists, developers, testers, ethical experts, and UX testers, as they should estimate the necessary amount of tests for the minimum and maximum levels. All clear? Great! Let's meet for one of the last videos in this chapter. The metrics.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Scalability]] (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### [Metrics and time and budget updates](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/the-metrics-and-the-time-and-budget-updates?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/the-metrics-and-the-time-and-budget-updates?u=76281980&t=0)** - [Narrator] We still need to address three points to properly fill out our feasibility template. Metrics are the 13th question and actually one of the most important components for feasibility. Why? Because you'll plan your project differently knowing that the decision makers expect 70% of accuracy versus a situation with 99% accuracy. These would be completely different systems in terms of time, budget, talent, level of testing, amount of [[Data Security]], and computing power. As we set the metrics, the system design should follow. Let's look at the three types of metrics. The first one, strategic related to business goals. For example, increasing sales from recommendations to X percent, or decreasing cost of customer service by X percent. The second one is the project metrics related to system performance. For example, error rate or time to achieve goal. And the third one, the [[Data Science]] metrics related to how good the predictions are. For example, 90% of accuracy. If you think that it would make sense to set these metrics up before you start doing the feasibility, you are right. However, that is one of the most common mistakes,
>
> **[1:35](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/the-metrics-and-the-time-and-budget-updates?u=76281980&t=95)** and companies don't set goals only to learn that a couple of months later they didn't achieve much. Here's how to set metrics. Either contact business experts and set some metrics with them and then do the feasibility against them, or you do your own assumptions and list the metrics that could be the effect of the system. You can build with resources you currently have. Obviously at this point, it'll be a high level estimate rather than a detailed analysis. Okay, we are left with two elements, budget and timeline updates. It is very common to change both of them during the feasibility analysis, adapting the time and budget based on the information you gather. Let's say you need more storage or additional experts, you need to put it in the budget as an extra cost. Put information about changes to the budget and to the schedule in the feasibility form. For the sake of simplicity, I like to prepare several scenarios for the decision makers. For example, Scenario A. Since we don't have enough data, we need to acquire it or synthesize it at a certain cost in time. Scenario B. We buy existing product, but the metrics will not be met and the cost would be X. And then Scenario C.
>
> **[3:10](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/the-metrics-and-the-time-and-budget-updates?u=76281980&t=190)** We delay the project for six months to gather minimal amount of data to start the project. Sometimes the feasibility goes like check, check, check because you have everything for the project success in the expected scope, but to be honest, it only happens in maybe 25% of the cases, so you should prepare for the scenario building. Wow, well done. You learned so much in this chapter time. For a quick break, grab some coffee or tea and meet me in the next chapter where I'll share with you how to do prototypes and why they are necessary for your project success.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Security]] (1), [[Data Science]] (1)
> **Analogies:** for example (4)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** template (1)
> **Speakers:** - [narrator] (1)

#### [Best practices of working with vendors](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/best-practices-of-working-with-vendors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/best-practices-of-working-with-vendors?u=76281980&t=0)** - [Instructor] Hi friends. In one of the previous videos, I promised to share with you a couple of best practices on how to work with vendors in AI. I engage vendors for two things. Either I want to use their off-the-shelf product, or I want them to create a tailor-made solution for me. Let's split the best practices into two categories then. When buying off-the-shelf solutions, you should take into consideration where they took the data from. If they won't tell, you know something is off. A serious company will at least give you the scale of dataset they use and the industry. Obviously, you want to select suppliers with solid, transparent data practices. Then how often the retraining will be done and who is responsible for that. It should be explained in the documentation, but you need to ask these questions to make sure that the model will stay relevant. Then [[Data Security]]. You must know where your data is going if the solution is based on [[SaaS]] approach. You should also make sure that your data will not be used to train the model without your consent. Then [[Performance Metrics]]. You need to know how accurate the model
>
> **[1:35](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/best-practices-of-working-with-vendors?u=76281980&t=95)** will be and if the company guarantees that it'll stay at that accuracy level. And obviously, it's worth asking about the support and point of contact. This is a must if your business will rely on that AI solution. And for engaging a vendor to build a tailor-made solution for you, make sure to establish a tight, fixed budget. I usually do a fixed price with time and material addition after my consent. This allows for flexibility, but only if you actually see the need for extras. Then take care of the data and make sure you control it. There are lots of ways, including anonymization, but also giving secure access to data, even to the point that suppliers work on your premise. And just like with the off-the-shelf, make sure your data stays yours and that the supplier can't use it for training any additional model. Then it's important to clarify responsibilities around model retraining. Both options are fine, but be sure to clarify who bears this cost and how often it should happen. If the vendor is being paid additionally, make sure to set the fixed price for that. If the vendor does the retraining, make sure to agree on how often this is done or what triggers the retraining.
>
> **[3:13](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/best-practices-of-working-with-vendors?u=76281980&t=193)** Then confirm if you can make any changes to the product. Sometimes the licensing agreement says that if you do that, you can lose your guarantee. Then define expected metrics and performance benchmarks upfront, clearly state what success looks like and what the accepted thresholds are. Lastly, documentation. Make sure the vendor is responsible for providing details and complete documentation. You might ask how this affects the feasibility analysis. Since choosing the vendor or a supplier is a part of the stage, you must know how to do it and what to take into consideration. All right, ready for the next chapter. Super interesting stuff ahead of us. You'll learn a lot about [[Prototyping]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Security]] (1), [[SaaS]] (1), [[Performance Metrics]] (1), [[Prototyping]] (1)
> **CLI Commands:** make (9)
> **Best Practices:** make sure to (3)
> **Definitions:** is a  (2)
> **Cross-References:** next chapter (1)
> **Documentation:** the documentation (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)


### 3. Prototyping

[↑ Back to Table of Contents](#table-of-contents)

#### [Fundamentals of prototyping and prototyping timeline](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/fundamentals-of-prototyping-and-prototyping-timeline?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/fundamentals-of-prototyping-and-prototyping-timeline?u=76281980&t=0)** - [Instructor] In this chapter, we'll dive into fundamentals of [[Prototyping]] AI [[Microsoft Products|products]]. Prototyping is the process of creating an early, simplified version of an AI solution. Think of it as a trial run that lets you test ideas before committing to full-scale development. There are actually two moments in time where you can do prototyping. First is at the stage of feasibility analysis. The goal is to test with the users if your product concept will solve their problem. This prototyping focuses mostly on the inter, and the second stage is during the project development, where you build an MVP and test the solution on a small scale. In this course, we'll be focusing on the first, feasibility prototyping. However, we'll touch on the MVP in one brief video. The main goal of prototyping is to validate AI ideas as quickly and efficiently as possible. This is simple. Show your AI concept to your future users and gather their feedback if this is what they have expected. To do that you need to show them something, right? This is a prototype.
>
> **[1:34](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/fundamentals-of-prototyping-and-prototyping-timeline?u=76281980&t=94)** It's a kind of a "Wizard of Oz" because you are showing something that doesn't exist yet. To be clear, a prototype is not a working application, so it's not an MVP. With prototyping, we want to test if the concept works as intended by the users, gather feedback, and identify potential issues early on, so we can redesign our project if necessary. And importantly, based on the feedback, decide if it's worth investing further resources to actually build the product. For example, if you are designing an AI chat bot, a prototype might help you see if users understand the responses and find the interaction helpful before you invest in more complex features. You can use prototyping once you have a clear concept of what you want to build. So we usually do prototyping at the same time as testing and the feasibility analysis. Let's have a look at the prototyping steps and timeline. I assume, at this point, you know [[System Architecture]], system functionalities, and the desired outcome. First, start with deciding what functionalities you want
>
> **[3:10](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/fundamentals-of-prototyping-and-prototyping-timeline?u=76281980&t=190)** to prototype and what strategy to select. We usually test complete functionalities, but there is typical stuff like logging in that you can easily skip. Here are several strategies to choose from: Paper based, application based, presentation based, designer tools and UI based, AI tools based, and basic code based. We'll cover them in depth in the next video. Next, you need to select the testers. They should reflect project personas. Then, prepare the prototypes and arrange the place for testing. The next step is to conduct the testing and collect feedback. And finally, we want to implement feedback we found valuable to the product concept. If you are implementing considerable changes to the product, you might want to do another iteration of prototyping. Prototyping is rather a costly process that since it's not confirmed as a project yet should be minimized in terms of time and budget. Depending on the prototyping strategy, it should take you around four to six weeks to conduct the full iteration. I usually do one week for preparation; one, two weeks to prepare a prototype;
>
> **[4:44](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/fundamentals-of-prototyping-and-prototyping-timeline?u=76281980&t=284)** one week of testing; and one week to analyze the feedback and make decisions if we want to redesign the product.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Prototyping]] (13), [[Microsoft Products|Products]] (1), [[System Architecture]] (1)
> **Env Vars:** mvp (3)
> **CLI Commands:** find (1), make (1)
> **Analogies:** think of it as (1), for example (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** select the (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Prototyping roles, personas and expected outcome](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/prototyping-roles-personas-and-expected-outcome?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/prototyping-roles-personas-and-expected-outcome?u=76281980&t=0)** - [Narrator] You are probably curious who is engaged in [[Prototyping]]. Prototyping is a team effort, where project or product managers coordinate the process. Data scientists and developers draft system functionalities. UX designers generate the interface and conduct the testing process. Most of the time I was doing the coordination and conducting tests on my own. Data scientists and devs were drafting the system on a whiteboard and the graphic designer was preparing the interface. Then altogether, we were analyzing feedback and deciding on redesigns. To do effective prototyping, you need to define personas, representations of the different types of users who will interact with your AI system. There are typically two types of personas for AI systems. The client type, for example, someone who is interacting with the system, and the support type, for example, someone in the company who is overviewing the process. You will need to select some people to test your prototypes. I like to have five to 10 testers for each persona group, but if you have three to four, it might also do. So, what do we actually want to test? The basic elements are:
>
> **[1:34](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/prototyping-roles-personas-and-expected-outcome?u=76281980&t=94)** Does the system have all the functions users expected? Do users know how to interact with it without special instructions? Do users know what the proper system behavior is? Do they understand what AI does for them? For example, if you prototype an AI that automates complaints, you want to test if the users know how to use it if they expect communication to be conducted in a certain way. How the system reacts with incomplete complaints, and how the complaint manager is interacting with the complaint console, which sometimes asks him to make a decision. Just from this description, you can tell that the tests must be conducted according to certain scenarios that you will need to prepare. These scenarios are usually a list of activities that the testers should conduct on their own. The expected outcome of the prototyping process is a processed feedback from the testers in a form of list of changes and new functionalities that needs to be applied to the [[Product Design]]. Their changes should be prioritized and grouped into three categories: Must-have changes, nice-to-have changes, and changes we consciously don't want to implement. Remember, there is a higher goal,
>
> **[3:11](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/prototyping-roles-personas-and-expected-outcome?u=76281980&t=191)** to test if it makes sense to develop the concept further. Okay, now that you know what prototyping is, let's move on to understanding the difference between prototyping and MVP.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Prototyping]] (6), [[Product Design]] (1)
> **Definitions:** is a  (3)
> **Analogies:** for example (3)
> **CLI Commands:** make (1)
> **Env Vars:** mvp (1)
> **Speakers:** - [narrator] (1)

#### [Minimum viable product (MVP)](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/mvp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/mvp?u=76281980&t=0)** - [Narrator] Many people think that MVP is a prototype. That is only partially true. You see, a prototype is like a rough sketch or a model of your idea, a product draft to test design choices and gather early feedback. The product doesn't exist at this stage. With [[Prototyping]], we want to learn if it makes sense to build it. In contrast, an MVP, which stands for minimum viable product, it's an actual product. It is a minimum version of the product that includes just enough core features to satisfy early users and validate your idea in a real world setting. Prototypes are tested with potential users and MVP is released to the market. While no one will pay you for the prototype, for the MVP, you should get paid. It's actually the ultimate verification of the MVP. If someone is willing to pay for the system that solves their problem, then it's worth growing the product. The best explanation of MVP I know is the lean startup picture of how not to build a car. In the top row, how not to develop a product. Each stage delivers only part of a future car, a wheel,
>
> **[1:36](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/mvp?u=76281980&t=96)** then two wheels, so forth, which isn't functional or useful until the very last step. From the customer's perspective, there is nothing that brings them value until the last step. Such development is usually lengthy and costly, and in fact, you don't know if the client will like it at all. That's what makes this approach very risky. In the bottom row, how to develop a product. Each step is a fully usable solution, starting from a very simple skateboard, then moving to a scooter, a bicycle, a motorcycle, and finally, a car. Even though it's not the final version, at each stage, the customer can still get value out of the product and the development team can gather real feedback to guide to the next iteration. Not to mention that the earlier you release the product, the more likely you will become a market leader, even if the product is not ideal yet, it already brings value to customers. This approach helps you avoid investing a lot of money and time into building something that clients may not want. This is actually the main reason for startup failure, the product that was unfit to the market needs. This brings us to the problem. Once you know what the user's problem is,
>
> **[3:11](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/mvp?u=76281980&t=191)** you can build an MVP. In the car example, the problem is I want to get from point A to B faster than by walking. You see, it is not about having a car at all. However, if the problem were I want to show off how much money I have, the car would be probably the MVP. Let's have a look at the AI example. Let's say you want to build an AI chatbot. Your MVP could be a chatbot that can answer a limited set of frequently asked questions and provide basic [[Customer Support]], and the full product would be a sophisticated chatbot that can handle complex inquiries, can integrate with various customer service platforms, that sentiment analysis, and has a voice mode. In summary, the MVP is a strategic tool in [[Product Development]], and I strongly recommend applying it to all AI [[Microsoft Products|products]], simply because the AI world is fast these days. You have probably noticed that many popular [[AI Solutions]] are being released to the market at a crazy pace, even with minor bugs and deficiencies. All clear? Great, now let's come back to prototyping. See you in the next video where we'll understand prototyping strategies.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Prototyping]] (3), [[Customer Support]] (1), [[Product Development]] (1), [[Microsoft Products|Products]] (1), [[AI Solutions]] (1)
> **Env Vars:** mvp (10)
> **Definitions:** is a  (4), stands for (1)
> **Cross-References:** in the next (1)
> **Analogies:** picture (1)
> **Speakers:** - [narrator] (1)

#### [Six strategies for building prototypes, part 1](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/six-strategies-for-building-prototypes-part-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/six-strategies-for-building-prototypes-part-1?u=76281980&t=0)** - [Instructor] Welcome back. You're going to like this video, as we will cover six strategies for building prototypes. Selecting the best strategy depends on how much time you have, how advanced the product is, how strategic is it for the company, and what implementation strategy. You remember, buy, build, fine-tune, and so you choose. For all the strategies, I have prepared a special resource list in the Exercise Files for you. You'll find links to interesting articles, as well as names of useful tools worth testing out. The first one on our list is paper-based prototype. It is very simple, just simple sketches or mockups on paper that illustrate how the AI system or interface will function. Look at the pictures. You draw several screens and show interactions between them. When you show it to someone, you simply switch between screens based on a virtual pay-per-click. Many people think it's old school, especially for AI, but I found it one of the most effective strategies when you don't have time, and you need to create prototypes on the spot. Imagine you are at a client meeting or in a workshop, and you discuss a new idea of an AI product.
>
> **[1:35](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/six-strategies-for-building-prototypes-part-1?u=76281980&t=95)** Instead of explaining using words, I usually sketch how this app or a functionality could look, and immediately, I gather feedback. I love to use it especially because users can instantly draw how they would like the functionality look, and with other types of prototypes, it's not that simple. This method is extremely quick and low cost. If you have more time, it's always better to prepare something more advanced. The second type is presentation-based prototype. This is also a very simplistic approach where you present AI functionalities in a presentation. Why presentation? Because it's widely used in large organizations, and it's very quick to build. Slide decks can be built with any presentation tool, but you can use also tools, such as [[Canva]], that give you access to design templates for computers, laptops, and smartphones. It is a simple drag-and-drop solution. Canva allow you to easily share your presentation in several formats, including a video with voice. The third type is a designer tools and UI-based prototype. There are plenty of online tools that allow you to design interfaces and interactions. They are usually used by UX and UI designers and usually require some level of fluency to use them,
>
> **[3:12](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/six-strategies-for-building-prototypes-part-1?u=76281980&t=192)** but they are no-code tools, and they are available to everyone. The most popular tools are [[Figma (Software)|Figma]], Sketch, [[Adobe XD]], Envision, [[Microsoft Azure|Azure]], UXPin, Miro, and Canva. You can easily create clickable mockups that simulate how the AI solution would look and feel. All of these tools have some kind of free access, so you can test it before buying, and don't worry about having to learn it the hard way. All of them have hundreds of good tutorials available on YouTube. I like using this type of [[Prototyping]] because it looks almost like a real-life application you can send to testers just by sharing the link, and it allows them to comment on elements that are unnecessary or too complicated. Okay, there are three more strategies ahead of us. Meet me in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Canva]] (3), [[Figma (Software)|Figma]] (1), [[Adobe XD]] (1), [[Microsoft Azure|Azure]] (1), [[Prototyping]] (1)
> **Definitions:** is a  (2)
> **Analogies:** imagine (1), such as (1)
> **CLI Commands:** find (1)
> **Cross-References:** in the next (1)
> **Tools:** figma (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### [Six strategies for building prototypes, part 2](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/six-strategies-for-building-prototypes-part-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/six-strategies-for-building-prototypes-part-2?u=76281980&t=0)** - [Instructor] Good to see you again. Let's learn more about prototypes. There are three more for us to explore. The first strategy for [[Prototyping]] is an application-based prototype. These are online tools that allow you to design a website or an application in a very simple way, just like you are doing it with designer tools, but instead of dummy elements, you create an actual interface. To build a basic working app, I'm using off-the-shelf components preset in the system. Such tools as Webflow, Framer, Wix, and even Bubble allow you to quickly design an interface, and later on you can use the design for an actual system just by clicking Publish. Interestingly, there are some preset connections between the UI-based prototyping tools and application-based ones. For example, you can create a prototype in [[Figma (Software)|Figma]] and easily export it to Webflow to create a real working website. Check these connections now and then, because there are more and more of them, and they make our life so much easier. The fifth one is AI tools-based prototype, where you use [[Generative AI|GenAI]] to design the prototype for you. It requires some practice to design the whole product experience just by GenAI, but for some mockups, it is more than enough.
>
> **[1:37](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/six-strategies-for-building-prototypes-part-2?u=76281980&t=97)** The main advantage of such tools is that they are extremely fast and getting more and more effective. Okay, so it works like all GenAI tools. You input a prompt and the system generates a design for you. There are general LLM-based tools that can help you out, like Claude, and also specialized AI-based tools that are great for designing websites, interfaces, and mockups like Bolt, Lovable, Cursor or VZERO. My pro tip for such tools is to join some Reddit and Discord UI designers groups that share prompts for designing interfaces. To show you how these tools work, I have two videos for you, where with the help of bolt.new, we'll build an AI-based prototype in a couple of minutes. Make sure to check them out. The last one, and usually the most demanding, is code-based prototype. For this option, you use coding to show how the system is going to work. In other words, you build a simplified version of an actual application. With AI coding tools like Cursor, [[GitHub Copilot]], Claude, DeepSeek, Grok, [[Gemini]], or [[ChatGPT]], coding becomes super easy, because in some of these tools, you immediately see the outcome
>
> **[3:12](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/six-strategies-for-building-prototypes-part-2?u=76281980&t=192)** of automatically-generated code. However, you still need to have basic coding skills to change the code, if needed. Just to be clear, you don't need to use the AI tools if you prefer to code in a standard way. Whichever way is faster for you. So with all these awesome strategies, how do you pick the right one? They were presented to you in a way that reflects time engagement, from minimum to maximum, as well as level of complexity. It is fairly simple. First, check how much time you have. If you don't have much, go for the simpler solutions. Then think about who can do these prototypes for you. If you have great talent on board, use their skills, but if not, again, go for the simplest ones. I say simplest, and for each one of you, simplest strategy may be different. Some people like drawing, some coding, some prompting, and some drag and dropping. I always look at the client expectations as well, meaning the more advanced the client is, the higher quality of mockups they will expect. Also, for the more complex projects like advanced AI functionalities, a more advanced mockup may be a good idea, so the user will be able to actually test it and provide feedback.
>
> **[4:46](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/six-strategies-for-building-prototypes-part-2?u=76281980&t=286)** Phew, ha! That was something! You learned so much. Now let me share with you best practices on how to do these prototypes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Generative AI|Genai]] (3), [[Prototyping]] (2), cursor (2), [[Figma (Software)|Figma]] (1), [[GitHub Copilot]] (1)
> **Tools:** figma (1), discord (1), github (1)
> **CLI Commands:** make (2)
> **Env Vars:** llm (1), vzero (1)
> **Definitions:** is an  (1), in other words (1)
> **Analogies:** just like (1), for example (1)
> **Best Practices:** pro tip (1), make sure to (1)
> **Speakers:** - [instructor] (1)

#### [Prototyping best practices](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/prototyping-best-practices?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/prototyping-best-practices?u=76281980&t=0)** - [Instructor] Welcome to the next video. Let me share some of my best practices of working with prototypes. First, number of prototypes. If you don't have time, the answer is simple, but if you do, then it's often helpful to create two or three prototypes each focusing on different aspects of your AI solution. You can think of it as different versions of your system. Let users tell you which of them they like more. Second, time allocation. [[Prototyping]], especially the testing part, tends to take longer than expected. After all, you're dealing with people that have their own lives and responsibilities. I always add a week buffer to the estimated time. Third, if you want to go with online versions of prototypes, think about testers' computers and networks. Ask them to use a fast connection. Otherwise, they will focus on how slow moving the prototype is rather than on the functionalities. Fourth, iterations. Prototyping isn't a one and done process. After creating an initial prototype and gathering feedback, you can refine the prototype, add or remove features, and then repeat the prototyping cycle. This sounds cool, but be careful. Since your project is in the design phase,
>
> **[1:37](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/prototyping-best-practices?u=76281980&t=97)** there will be always something to make better. Plan in advance for the number of iterations. With standard AI projects, I usually go with one, with more complicated projects, two. If this is not enough, this means the project is simply poorly designed and you should go back to the ideation phase. Fifth, focus on core functionality. I suggest avoiding feature overload in early prototypes. Concentrate on the essential AI capabilities that demonstrate the solution's potential value. Sixth, document everything. Plan the prototyping and testing carefully and keep clear records of all the decisions, assumptions, data sources, and potentially system touch-ups. Good documentation helps you trace the best ideas and later on confirm your decisions. Seventh, never ask users for what they like. While it might seem intuitive to directly ask users what features or solutions they desire, experience shows that users often struggle to explain their true needs. They might give you answers that will seem sensible, but these users wouldn't necessarily be willing to pay for these functionalities. Instead, observe user behavior, focus on their problems,
>
> **[3:13](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/prototyping-best-practices?u=76281980&t=193)** and gather feedback through real interactions with the system. Eighth, the Occam's Razor, or in other words, the KISS rule, keep it simple, stupid. Occam's Razor suggests that the simplest solution, one with the fewest assumptions, is often the best. In practice, this means focusing on the core features and tests that are simple to follow, rather than advanced and usually more complicated processes. Keep the process simple and list of questions short. Ninth, the budget. I always say don't overdo it. This is still a preparatory phase. As the initiative can be stopped, if someone decides that it's not feasible or beneficial enough, usually the biggest cost is the cost of people's time who are prototyping, and later on conducting the test. Tools that I mentioned are rather cheap if bought for just a few people. In total, try not to go over 30 man-days for one prototyping iteration, including the test. Great. Now it's time to tell you more about the testing process and gathering feedback from users.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Prototyping]] (6)
> **Cross-References:** next video (1), go back to (1)
> **CLI Commands:** make (1)
> **Env Vars:** kiss (1)
> **Definitions:** in other words (1)
> **Analogies:** think of it as (1)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)

#### [The process of gathering feedback from users](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/gathering-feedback-from-users-the-process?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/gathering-feedback-from-users-the-process?u=76281980&t=0)** - So you are building an AI prototype to test it, right? We'll focus on this now and in the next video. You'll want to gather feedback from users, not only about the functionalities of the system, but also on additional elements like usability, interpretability, easiness of use, and transparency. You first want to test what you have prepared, but also want to get constructive feedback. What functionalities could be added by asking the user if the system solves all their problems. Once you have prototype, you need to plan for testing sessions. First, decide on who you are going to invite. Prepare a longer list as probably not everyone will want to participate. Obviously, focus on personas you defined earlier. Also, make sure that these people are prepared to spend the needed amount of time with you. Depending on how large your system is, such a meeting will take somewhere between 40 to 60 minutes. I always suggest getting acceptance from their employers so they feel it's a part of their work and treat these tests seriously. You need to know that there are basically three types of tests. In-person where you meet with participants face to face and observe how they interact with the prototype.
>
> **[1:35](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/gathering-feedback-from-users-the-process?u=76281980&t=95)** Online testing, where participants get access to the prototype. And based on the list of tasks, they conduct the tests in front of you. Such sessions are usually recorded. And third, using a [[Prototyping]] tool like Maze, UserTesting or Lookback. They allow you to conduct the tests online and track user behavior through, for example, heat maps. They are designed in a way that the user can take the test in their own time. Although unlike all the automations, I believe that in-person testing is absolutely the best. If you have time and access to users, always go for this option. Okay, so once you decide on the type of test, decide when you'll be testing your prototype and make sure you have a clear agenda. An agenda that works best for me always follows these steps. Before the meeting, I send a short email to participants explaining how the test will be conducted. However, I don't reveal the test questions because I want to simulate a real life situation where users are using the system for the first time. In the email, I usually explain how they should prepare for the test, including organizational matters that they should have stable connection if we meet online, or that they should be prepared to have their own computer and smartphone if we meet in person.
>
> **[3:13](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/gathering-feedback-from-users-the-process?u=76281980&t=193)** So once we meet, I start with introducing myself the goal, and explain how the test would be conducted. Then I remind testers that the meeting will be recorded, but will use the recording only for [[Product Development]]. Then I give a list of tasks to the tester and ask is everything is clear. Usually I get a couple of questions and I answer. Then the tester continues with the tasks that are on the list, and I do absolutely nothing. I don't comment and I don't say if the task was done correctly or not. After the tester finishes all the tasks from the list, I usually ask a couple of questions about the experience of using the system. Like, was it easy, was it intuitive, was it enjoyable? And most of all, does the system do everything that was expected of it? Then if we have time, I give space for the tester to share their thoughts. And finally, I close the session and inform the tester about the next steps. For example, about the plan timeline for product development. Brilliant, now you know the process. So let's focus on best practices of conducting the test sessions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Product Development]] (2), [[Prototyping]] (1)
> **CLI Commands:** make (2)
> **Analogies:** for example (2)
> **Cross-References:** in the next (1)
> **Prerequisites:** make sure you have (1)
> **Speakers:** - so (1)

#### [Best practices for gathering feedback from users](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/best-practices-for-gathering-feedback-from-users?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/best-practices-for-gathering-feedback-from-users?u=76281980&t=0)** - [Instructor] Some people say that prototype testing is a science, and some call it art. I think it's both. Let me share with you best practices for conducting prototype testing. Start with a warm welcome and explain how the test will go. The second one, no judgment. Encourage honest opinions so the testers share their thoughts without fear of criticism. The third one, ask open-ended questions. Instead of yes/no questions, ask questions like, "What did you think about how the AI responded," to get more detailed insights. The fourth one, test the features and experience. First test if the system works as planned, and then try to understand how the prototype makes users feel and what they expect. The fifth one, stay neutral and avoid leading. As the facilitator, you shouldn't be giving hints or correcting mistakes immediately. Allow users to express difficulties on their own to get genuine feedback. Even if the testers get stuck, it tells you something about the [[Product Design]], right? A wise person once told me that there are no human mistakes, just poorly designed [[Microsoft Products|products]]. The sixth one, sometimes,
>
> **[1:33](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/best-practices-for-gathering-feedback-from-users?u=76281980&t=93)** especially with more advanced products, I like to ask testers to think out loud and verbalize their thoughts as they use the prototype. It's super useful as you understand the best way of interacting with users. The seventh one, observe not only what users do, but also their body language and facial expressions. These nonverbal messages can indicate frustration, confusion, but also pleasure and joy. The eighth one, use a test list as a guideline rather than a rule. Be flexible. On one hand, test all the main features, but on the other, be open to hear additional feedback. The ninth one, do the summary immediately after the session, while they're still fresh, even if you recorded it. Additionally, at the end of each test, briefly review with the tester their experience. And last, but definitely not the least, record the session. With participant's consent, record video or screen interactions, so you can review the session later, and during the session, you can focus on the tester instead of taking notes. Remember that not all feedback is valuable. Valuable feedback is specific, actionable, and focused on the core features of your prototype. For example, rather than just saying, "It's confusing,"
>
> **[3:11](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/best-practices-for-gathering-feedback-from-users?u=76281980&t=191)** testers should explain which part of the interface was unclear, or how the system's response didn't match their expectations. This way, you'll know what to improve. Lastly, let's talk about documentation. I admit it's not my favorite part, but it's a must. Shortly after, you'll need to draw conclusions from the feedback, and you'll need some notes for that. During the testing session, I usually listen, observe, and note only my observations, something that will be not presented in the standard voice transcript. I note down surprising facial expressions, timestamps for significant moments, like when a tester hesitates or looks confused. For example, you might note, "At 3:15, users struggled with the chatbots prompt saying, 'I don't understand what to do next.'" After the session, create a transcript using AI tools, compile your handwritten notes, and organize feedback by themes, like usability issues or feature requests. I'll share more about what happens after the testing session in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (2), [[Product Design]] (1)
> **Analogies:** for example (2)
> **Prerequisites:** you'll need (2)
> **Ports:** :15 (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Drawing conclusions after the feedback](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/drawing-conclusions-after-the-feedback?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/drawing-conclusions-after-the-feedback?u=76281980&t=0)** - [Instructor] After an AI [[Prototyping]] session, the work is far from over. It's time to process, sort, and act on the valuable feedback you have gathered. The first step is to consolidate all the documentation. This means gathering your session notes and conclusions, video recordings, and any transcripts from recorded user's interactions. For example, if a tester hesitated while interacting with a chatbot feature, you'd note the exact moment and context. Step two is to sort all the feedback into manageable snippets, then sort them into categories. You can use a simple spreadsheet, Post-it notes, or project management tool like [[Trello]] or Asana. For this task, Trello is my personal favorite. You should create columns for different categories such as usability, functionality, design, and technical issues. You can also use your own categorization, like which functionalities was the feedback about? Another approach is thematic analysis, where you identify recurring themes or pain points by grouping similar feedback together. This helps you see patterns and user behavior that might indicate that the project needs to be redesigned.
>
> **[1:38](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/drawing-conclusions-after-the-feedback?u=76281980&t=98)** So while you analyze documentation, assign each piece of feedback to one of these categories. But wait, AI can do this for you as well. A cool way to analyze your documentation is to use your trusted LLM and share all your documents. First, ask for all documents combined, then for listing all pain points, then sorting them into categories. And lastly, you can also ask the LLM for the summary of suggested changes in the system. Once your feedback is sorted, it's time to prioritize. You should consider factors such as frequency, severity, and impact. For example, if multiple testers reported a core feature is confusing, that issue should be high on your list. In contrast, a single comment about a minor aesthetic detail might be less urgent. One practical method I like to use is a simple scoring system. I rate each issue on a scale from one to five for frequency, impact and ease of resolution. I sum up all the points to get an overall score. Imagine we have a list of 50 suggestions, prioritized and analyzed,
>
> **[3:12](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/drawing-conclusions-after-the-feedback?u=76281980&t=192)** but it's not like you always take the top ones. These are just suggestions. What you want to do instead is organize a meeting to decide on which feedback to implement. Bring together your data scientists, devs, and business experts to review the prioritized list. Discuss the feasibility of implementing changes and balance them against your project's goals and timeline. Remember to keep your eyes on the goal, which is solving the key problem your AI product is addressing. After that, redesign your AI prototype and potentially do one more testing. If you don't plan to do another round, then just update your designs, plans, budgets, schedules, and don't waste time on updating your prototype. I always like sending thank-you notes to the testers summarizing the feedback we got, but this is optional. Lastly, you should document everything. I mean the changes you have implemented to your AI project. And that's it, my dear friends. Once you use the gathered feedback to make your product better and you update all the plans, you go for the green light. Once you get it and the project gets approval, you simply implement your plan knowing that prototyping and visibility prepared you for nothing else but success.
>
> **[4:50](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/drawing-conclusions-after-the-feedback?u=76281980&t=290)** I wish you good luck. Happy AI building.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Prototyping]] (2), [[Trello]] (2)
> **Analogies:** for example (2), such as (2), imagine (1)
> **Env Vars:** llm (2)
> **CLI Commands:** make (1)
> **Documentation:** the documentation (1)
> **Definitions:** is a  (1)
> **Best Practices:** remember to (1)
> **Speakers:** - [instructor] (1)

#### [Demo](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=0)** - [Instructor] Hello and welcome to the video where I would be showing you how you do [[Prototyping]] with one of the AI tools. You know the power of AI, you know the power of LMS and you know that if you put any prompt, the system should return what you want. We can do exactly the same with AI tools for prototyping. I selected the easiest tool I know, and you don't need any coding for that. The system would be showing you the code and actually implementing it instantly. Okay, without further ado, let's move on to work. I will be using bolt.new in a almost free version. You just need to log in and you get some credits to build a couple of websites so you can play with it completely for free. And later on you can decide if you like this tool or maybe the others that I'm providing you in the exercise files. Okay, cool. So I have a couple of prompts prepared for today so it goes faster. I want you to build an app for the ice cream mansion. Look at that, I'm not providing any technical information. I'm clicking Go and we wait. The system at the same time is telling you what it does and it's doing some kind of coding. Don't need to worry about that at all.
>
> **[1:35](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=95)** We will switch into preview in a couple of moments when the system finishes. Of course, the faster your system is, the faster it will generate the code and the preview. Let's see what it does for us. Okay, we have our preview. Look at that, "Ice Cream Mansion, where dreams are served in scoops." I love it. Okay, so it created a kind of a website for us, featured, classics, look at that. I can click on that and I have some menu. It gets bigger, oh cool. Oh, "Visit us." Okay, that's kind of cool, look at that. What we did is we put just one line, so I just wanted to give you the preview of how powerful this system is, but now let's do more. I would be showing you how to add an additional AI functionality to an existing website. It's kind of more demanding, because you would be working with an existing application. I have a website for Wisdom Pet Medicine and I would like to add something to the contact section. We'll do a screenshot, because we would be working with this section. We want to add an additional AI section here. Okay, and we want of course to use it to show it to the owners of the website,
>
> **[3:10](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=190)** how the new AI functionality would be working. I just took a simple, simple snapshot of a website and what I do, I just dropped it in here. Kind of easy, right? So, and I have a couple of prompts prepared to save your time. Yes, both. You can help us. "To the website, I attach, add a button that would lead us to the AI veterinary prescreening. Keep the same styling and keep all the existing elements." Okay, cool, so we are just adding a button here and now in a moment we will add a functionality. You already know how it works, so it's just adding a button. Okay, kind of easy. Okay, cool, what it did, look at that. It rearranged the contact section. This is something, sometimes it does it. So it removed the cutie dog with a phone, but it has has Send and AI veterinary prescreening. Okay, cool. And a cutie dog. Okay, so some rearrangements here. Sometimes it's quite difficult to keep the original website. So what we want the system to do now for us is to upload additional instruction,
>
> **[4:48](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=288)** connect the button, start prescreening, right? That's AI veterinary, "AI veterinary prescreening to the sub-website for AI Vet. Explain in steps how this works. First, tell us about your friend. Second, upload pictures and condition explanation." So we want to help owners, dog or animal owners until they can get and reach the vet what to do with their pets that's suffering somehow. "Three, get recommendation and prescreening suggestions." Okay, so we are adding an actual AI functionality where we want to simulate and analyze the condition of a pet before the pet comes to the vet. Okay, so we want our website to be advanced and of course AI-powered.
>
> **[5:55](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=355)** Okay, let's look what it did for us. So what we do have, we have contact, looks similar. The cutie dog is here. Okay, so what happens if we click on AI veterinarian prescreening? Look at that. We got our new functionality. Okay, there are some symbols for a process. "Tell us about your pet, pet's name, pet species." Oh, that's kind of cool. We didn't ask for that. "Breed, age, weight." Okay, cool. So it probably, we can put doggy species. It's a dog. Breed. Unknown, Right, age, five years. Weight. 20. Okay, cool. Oh yeah, we have a second step. "Describe the condition and upload photos." Just as we want it. Okay, it looks sick. And upload photos. Oh, how awesome is that? Oh, I love this tool. Okay, for desktop, I won't be doing that, but yeah, you can tell that you can click on that. And it also says that it's optional. Okay, we'll skip that. I want to see the last screen, AI prescreen results. So we have our preliminary assessment. Oh, for doggy, our AI system suggests the following.
>
> **[7:29](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=449)** Okay. "May require veterinary attention." For animal owners. And next steps and there should be schedule appointment. Oh good. What happens? Oh, and we are back to Contact. Let's see, what if I want to connect this particular button. I mean schedule appointment. You seen that, schedule appointment, and it should open a new window for scheduling appointments with the calendar. Let's go. Okay. Okay, let's see. We are working on that. Let's be very quick. Unknown. Five. 20. Okay, next. Describe. It looks sick. Okay, and photos are optional. Okay, so we got schedule appointment. Yes, we had it before. And look at that. Yes. Schedule it for what? For July. And select time. These times are available. Okay, your name, let's say it's 123456789. Email, aa@[aa.org](https://aa.org).
>
> **[9:08](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/demo?u=76281980&t=548)** Additional notes? Nope. And confirm appointment. Okay, appointment scheduled successfully. Can you imagine that here we would have a connection with an actual appointment-arranging website, or some kind of a calendar or CRM, whatever, a working website that would be giving to our API a return that the appointment was actually scheduled successfully. So this is how it's done, guys. Can you imagine how many additional elements could we put into our current websites and show to our decision makers and potential users how they are working with that? I can easily tell that our testers could tell, "Okay, this is working for me." Or, "This doesn't work for me." Anyway, thank you for your time. Thank you for your attention. I hope you like this video. Just check the other resources that we have put into exercise files for you. For now, I thank you so much and have fun.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Prototyping]] (2)
> **Env Vars:** lms (1), crm (1), api (1)
> **UI Navigation:** click on (2)
> **Exercise Files:** exercise files (2)
> **Analogies:** imagine (2)
> **URLs:** [aa.org](https://aa.org) (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-development-technical-feasibility-and-prototyping/next-steps?u=76281980&t=0)** - Congratulations, you've made it to the end of this course. By now, you know how to successfully check the feasibility for selecting the most valuable AI ideas that clients will love. You have also learned how to use [[Prototyping]] to gain valuable client feedback to make the next superstar AI product. With great power comes great responsibility, and as you gain so much powerful knowledge, be sure to use it responsibly. I hope we will stay in touch. I'd love to connect with you on [[LinkedIn]]. I'll be happy to answer questions, as well as to hear about your personal stories and AI successes. The more successful you are as AI managers, the safer our world will be for us, and future generations. So I can't wait to see your next brilliant AI product. Good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Prototyping]] (1), [[LinkedIn]] (1)
> **CLI Commands:** make (1)
> **Speakers:** - congratulations (1)


## Instructor

- [[Maria Parysz]]

## Resources

- Exercise files available

## Skills Covered

- AI Software Development
- Prototyping
- Artificial Intelligence (AI)
- Product Development

## Path Context

### In [[Building AI Products- Prototyping Essentials Professional Certificate by LinkedIn Learning]]
← [[Responsible AI Framework for Your Enterprise AI Product]] | **4 of 6** | [[AI Data Strategy- Data Procurement and Storage]] →

## Part of

- [[Building AI Products- Prototyping Essentials Professional Certificate by LinkedIn Learning]]

## Appears In

- [[Building AI Products- Prototyping Essentials Professional Certificate by LinkedIn Learning]]

## Related Courses

_Courses sharing skills:_

- [[Welcome To The Building Ai Products Prototyping Essentials Professional Certificate]] — Artificial Intelligence (AI), AI Software Development, Prototyping
- [[Exploring the Future of Development with GitHub Copilot Workspace]] — Artificial Intelligence (AI), AI Software Development
- [[AI Orchestration- Foundations]] — Artificial Intelligence (AI), AI Software Development
- [[AI Foundations- Ideating and Prototyping]] — Artificial Intelligence (AI), Prototyping
- [[Welcome To The Building Ai Products Understanding The Workflow Professional Certificate]] — Artificial Intelligence (AI), AI Software Development

---

[↑ Back to top](#)