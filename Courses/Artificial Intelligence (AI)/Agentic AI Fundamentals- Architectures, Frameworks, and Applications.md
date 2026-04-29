---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: agentic-ai-fundamentals-architectures-frameworks-and-applications
url: "https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications"
duration_minutes: 75
duration: 1h 15m
level: Beginner
updated: 10/8/2024
learners: 92358
skills:
  - AI for Business
  - AI Agents
  - Artificial Intelligence (AI)
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQFeob8hnSjKMQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1727131962285?e=2147483647&amp;v=beta&amp;t=wi1Org_76UJ4ULeSdDTWVq95tDEDiPIS0kq3DRqD6O4"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Building Agentic AI Systems for Tech Leaders]]'
prev_courses:
  - '[[Preparing Your Organization For Ai Agents]]'
next_courses:
  - '[[Transforming Business with AI Agents- Autonomous Efficiency and Decision-Making]]'
path_nav: '[{"path":"Building Agentic AI Systems for Tech Leaders","position":2,"total":7,"prev":"Preparing Your Organization For Ai Agents","next":"Transforming Business with AI Agents- Autonomous Efficiency and Decision-Making"}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - topic/software-development
  - skill/ai-for-business
  - skill/ai-agents
  - skill/artificial-intelligence-ai
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Agentic%20AI%20Fundamentals-%20Architectures%2C%20Frameworks%2C%20and%20Applications.md)

![Agentic AI Fundamentals: Architectures, Frameworks, and Applications](https://media.licdn.com/dms/image/v2/D4E0DAQFeob8hnSjKMQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1727131962285?e=2147483647&amp;v=beta&amp;t=wi1Org_76UJ4ULeSdDTWVq95tDEDiPIS0kq3DRqD6O4)

# Agentic AI Fundamentals: Architectures, Frameworks, and Applications

> Looking to dive into the world of agentic AI? The course covers the essential concepts, architectures, and frameworks that form the foundation of autonomous agents. Explore decision-making processes, machine learning techniques, and multi-agent systems and gain practical knowledge to develop and deploy agentic AI solutions. Instructor David Linthicum also addresses the ethical and societal implica

> [LinkedIn Learning](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications) | 1h 15m | Beginner | 92K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - Agentic AI: The future of smart AI is here!
- [**1. Definition and Importance of Agentic AI**](#1-definition-and-importance-of-agentic-ai) (3 videos)
  - What is agentic AI?
  - Applications and use cases of agentic AI
  - Healthcare scenario
- [**2. Agentic Behavior and Adaptation**](#2-agentic-behavior-and-adaptation) (2 videos)
  - How AI systems perceive their environment
  - How AI agents make decisions
- [**3. Core Methodology and Tools in Agentic AI**](#3-core-methodology-and-tools-in-agentic-ai) (4 videos)
  - Machine learning for agents
  - Policy frameworks
  - Utility-based frameworks
  - Reinforcement learning and Q-learning
- [**4. Agent Architectures in Agentic AI**](#4-agent-architectures-in-agentic-ai) (2 videos)
  - Agent architectures: major
  - Agent architectures: minor
- [**5. Advanced Communication Frameworks in Agentic AI**](#5-advanced-communication-frameworks-in-agentic-ai) (4 videos)
  - Developing a cooperative multiagent system
  - Implementing communication protocols for agents
  - Game theory and strategic interaction
  - Negotiation and conflict resolution
- [**6. Ethical and Societal Implications**](#6-ethical-and-societal-implications) (2 videos)
  - Ethical frameworks and considerations in AI
  - Societal impact of autonomous agents
- [**7. Security and Robustness**](#7-security-and-robustness) (2 videos)
  - Security challenges
  - Robustness and fault tolerance
- [**8. Agentic AI in the Future**](#8-agentic-ai-in-the-future) (2 videos)
  - The future role of agentic AI in industry 4.0 and beyond
  - Integration with other technologies
- [**Conclusion**](#conclusion) (1 videos)
  - Next steps

### Introduction

> [↑ Back to Table of Contents](#table-of-contents)

#### Agentic AI: The future of smart AI is here!
> [LinkedIn Learning](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/agentic-ai-the-future-of-smart-ai-is-here?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/agentic-ai-the-future-of-smart-ai-is-here?u=76281980&t=0)** - If you don't know what agentic AI is or how it works, and you work in tech, pay attention because this technology, known as agentic AI or autonomous AI, is revolutionizing businesses and organizations throughout the world.
>
> **[0:14](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/agentic-ai-the-future-of-smart-ai-is-here?u=76281980&t=14)** Hi, I'm David Linthicum, a cloud computing and AI expert, I've worked with AI systems for 30 years and have helped thousands of businesses and organizations.
>
> **[0:24](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/agentic-ai-the-future-of-smart-ai-is-here?u=76281980&t=24)** This course is for developers getting started with implementing agentic AI.
>
> **[0:28](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/agentic-ai-the-future-of-smart-ai-is-here?u=76281980&t=28)** Here we'll cover the fundamentals of what an agent is, internal agent architectures, and concepts like machine learning.
>
> **[0:37](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/agentic-ai-the-future-of-smart-ai-is-here?u=76281980&t=37)** What the practical applications are in industries such as robotics, healthcare, and transportation, and finally, we discuss ethics and societal impacts.
>
> **[0:47](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/agentic-ai-the-future-of-smart-ai-is-here?u=76281980&t=47)** Together, let's get started building an agentic AI solution for your organization.
>
> **[0:52](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/agentic-ai-the-future-of-smart-ai-is-here?u=76281980&t=52)** There's no time to waste, you need to grasp these concepts to move forward in your career and fast!
>
> **[0:58](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/agentic-ai-the-future-of-smart-ai-is-here?u=76281980&t=58)** So let's get to it.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), finally, (1)
> **Definitions:** known as (1)
> **Analogies:** such as (1)
> **Prerequisites:** getting started (1)
> **Speakers:** - if (1)


### 1. Definition and Importance of Agentic AI

> [↑ Back to Table of Contents](#table-of-contents)

#### What is agentic AI?
> [LinkedIn Learning](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/what-is-agentic-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/what-is-agentic-ai?u=76281980&t=0)** - Agentic AI has the potential to change the way we work and the way that we live.
>
> **[0:06](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/what-is-agentic-ai?u=76281980&t=6)** But when talking about ag Agentic AI, we want to start by talking about what exactly is an Agent.
>
> **[0:13](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/what-is-agentic-ai?u=76281980&t=13)** An Agent is a program designed to perform specific tasks autonomously.
>
> **[0:19](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/what-is-agentic-ai?u=76281980&t=19)** Agents make decisions based on predefined rules or learned patterns, interacting with other users or their environment to achieve their goals.
>
> **[0:29](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/what-is-agentic-ai?u=76281980&t=29)** To grasp its potential, imagine if you had a personal assistant to do your bidding all day long.
>
> **[0:34](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/what-is-agentic-ai?u=76281980&t=34)** They file your taxes, monitor weekly production numbers at work, order lunch, and even make reservations for that movie you want to see with your husband.
>
> **[0:43](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/what-is-agentic-ai?u=76281980&t=43)** The field of Agentic AI is predicated on several key areas that make this technology nothing short of revolutionary.
>
> **[0:51](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/what-is-agentic-ai?u=76281980&t=51)** For one thing, Agents operate independently when making decisions.
>
> **[0:55](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/what-is-agentic-ai?u=76281980&t=55)** They operate automatically allowing the system to divide and conquer complex workflows with the minimal human oversight.
>
> **[1:03](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/what-is-agentic-ai?u=76281980&t=63)** For example, if you have a security camera with Agentic AI features, it carries out functions on its own, like reaching out to its manufacturer to let them know that its storage is producing errors and it needs a firmware update.
>
> **[1:17](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/what-is-agentic-ai?u=76281980&t=77)** Or calling police if it determines a crime is occurring.
>
> **[1:21](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/what-is-agentic-ai?u=76281980&t=81)** all without human attention.
>
> **[1:23](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/what-is-agentic-ai?u=76281980&t=83)** Second, they're goal oriented.
>
> **[1:26](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/what-is-agentic-ai?u=76281980&t=86)** They are programmed to set their own goals and achieve them.
>
> **[1:30](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/what-is-agentic-ai?u=76281980&t=90)** Building on our camera example, the camera that is leveraging Agentic AI may have the ability to set the goal of fighting crime, and as a result, determine if a crime is occurring and report it.
>
> **[1:44](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/what-is-agentic-ai?u=76281980&t=104)** Then there is learning and evolution.
>
> **[1:47](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/what-is-agentic-ai?u=76281980&t=107)** We learn as humans and AI Agents learn and adapt the same way.
>
> **[1:52](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/what-is-agentic-ai?u=76281980&t=112)** Agentic AI can learn from interactions, adapt to new data, and continuously improve performance.
>
> **[1:58](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/what-is-agentic-ai?u=76281980&t=118)** It does this by way of machine learning, and we will talk more about machine learning in a separate video.
>
> **[2:05](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/what-is-agentic-ai?u=76281980&t=125)** But for now, what you should know is that Agentic AI identifies patterns such as trends.
>
> **[2:11](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/what-is-agentic-ai?u=76281980&t=131)** Then it learns from those patterns to adapt workflows and refine strategies.
>
> **[2:16](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/what-is-agentic-ai?u=76281980&t=136)** For example, an Agentic AI system can see whether a change in weather affects sales of a specific product or service, or an Agentic AI system can order more hardeners for a manufacturing process if the humidity is going to be high over the next week.
>
> **[2:35](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/what-is-agentic-ai?u=76281980&t=155)** Fourth, contextual understanding.
>
> **[2:37](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/what-is-agentic-ai?u=76281980&t=157)** These systems understand nuanced context.
>
> **[2:41](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/what-is-agentic-ai?u=76281980&t=161)** Agents can make informed decisions based on the context of a given scenario, enabling Agents to mimic human reasoning for execution.
>
> **[2:50](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/what-is-agentic-ai?u=76281980&t=170)** For example, an Agent might consider things like the weather, time of year market, or whatever considerations are relevant to a customer problem.
>
> **[2:59](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/what-is-agentic-ai?u=76281980&t=179)** Finally, what makes Agentic AI exceptional is multi-domain utility.
>
> **[3:04](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/what-is-agentic-ai?u=76281980&t=184)** AI Agents find and use applications and data across various domains and platforms.
>
> **[3:10](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/what-is-agentic-ai?u=76281980&t=190)** For example, these include customer service, healthcare, retail, manufacturing, and cybersecurity.
>
> **[3:16](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/what-is-agentic-ai?u=76281980&t=196)** And Agentic AI system adds value by creating personalized and proactive solutions that deal with each of these domains differently, and so more effectively.
>
> **[3:28](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/what-is-agentic-ai?u=76281980&t=208)** There you have it.
>
> **[3:29](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/what-is-agentic-ai?u=76281980&t=209)** These are the five main characteristics of Agentic AI.
>
> **[3:33](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/what-is-agentic-ai?u=76281980&t=213)** Collectively, these enable Agentic AI systems to transform your business.

> [!info]- Semantic Content
>
> **Analogies:** for example (4), imagine (1), such as (1)
> **CLI Commands:** make (4), find (1)
> **Code Keywords:** let (1), finally, (1)
> **Definitions:** is an  (1), is a  (1)
> **Speakers:** - agentic (1)

#### Applications and use cases of agentic AI
> [LinkedIn Learning](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/applications-and-use-cases-of-agentic-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/applications-and-use-cases-of-agentic-ai?u=76281980&t=0)** - So what do we use Agentic AI for?
>
> **[0:04](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/applications-and-use-cases-of-agentic-ai?u=76281980&t=4)** Let's look at different industry examples of how Agentic AI solves business problems.
>
> **[0:09](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/applications-and-use-cases-of-agentic-ai?u=76281980&t=9)** First, Insurance in Agentic AI.
>
> **[0:13](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/applications-and-use-cases-of-agentic-ai?u=76281980&t=13)** In the insurance industry, in Daba, which is a software development company, introduced an AI industry accelerator called Morpheus to address the adoption of Agentic AI for core business systems.
>
> **[0:26](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/applications-and-use-cases-of-agentic-ai?u=76281980&t=26)** Morpheus leverages teams of AI agents to streamline and automate complex insurance processes, such as claims processing, onboarding, and data processing.
>
> **[0:37](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/applications-and-use-cases-of-agentic-ai?u=76281980&t=37)** This is an example of a multi-agent development.
>
> **[0:40](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/applications-and-use-cases-of-agentic-ai?u=76281980&t=40)** By assigning specific personas to each agent, accuracy is enhanced as is efficiency value to the business.
>
> **[0:49](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/applications-and-use-cases-of-agentic-ai?u=76281980&t=49)** This Agentic AI application allowed insurers to reduce administrative costs, make more accurate decisions, and offer more personalized customer experience.
>
> **[1:00](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/applications-and-use-cases-of-agentic-ai?u=76281980&t=60)** Second, marketing.
>
> **[1:02](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/applications-and-use-cases-of-agentic-ai?u=76281980&t=62)** The crew AI framework for building AI Agentic in the marketing sector handles diverse and specialized tasks such as data gathering, settlement analysis, and reports generation.
>
> **[1:16](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/applications-and-use-cases-of-agentic-ai?u=76281980&t=76)** The framework creates and manages collaborative AI agents tailored for specific marketing needs.
>
> **[1:23](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/applications-and-use-cases-of-agentic-ai?u=76281980&t=83)** Thus, this is another multi-agent system that can run agents with their own personas, meaning responsibilities and purpose that work together to solve business problems.
>
> **[1:34](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/applications-and-use-cases-of-agentic-ai?u=76281980&t=94)** One agent may gather customer data from social media, another analyzes sentiment, and a third generates reports that the marketing team can leverage.
>
> **[1:45](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/applications-and-use-cases-of-agentic-ai?u=76281980&t=105)** This system allows these teams to tackle complex tasks resulting in more informed strategies.
>
> **[1:51](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/applications-and-use-cases-of-agentic-ai?u=76281980&t=111)** The outcome, optimize marketing efforts.
>
> **[1:55](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/applications-and-use-cases-of-agentic-ai?u=76281980&t=115)** Third, retail.
>
> **[1:57](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/applications-and-use-cases-of-agentic-ai?u=76281980&t=117)** In the retail industry, Agentic AI enhances personalized customer interactions.
>
> **[2:02](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/applications-and-use-cases-of-agentic-ai?u=76281980&t=122)** For example, if a retail site is more aware of who you are as a customer, they're more likely to provide content that provides a better consumer experience and purchase more products.
>
> **[2:14](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/applications-and-use-cases-of-agentic-ai?u=76281980&t=134)** Groups of agents interact with customers across various customer touchpoints, including email, chat, and social media.
>
> **[2:22](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/applications-and-use-cases-of-agentic-ai?u=76281980&t=142)** These agents use data from customer relationship management systems and previous interactions to tailor recommendations providing better after sales care.
>
> **[2:33](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/applications-and-use-cases-of-agentic-ai?u=76281980&t=153)** This leads to improved customer loyalty and increased sales due to the customized shopping experience provided.
>
> **[2:42](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/applications-and-use-cases-of-agentic-ai?u=76281980&t=162)** Finally, AI is revolutionizing the healthcare industry.
>
> **[2:45](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/applications-and-use-cases-of-agentic-ai?u=76281980&t=165)** In healthcare, Agentic AI systems provide diagnostic support.
>
> **[2:50](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/applications-and-use-cases-of-agentic-ai?u=76281980&t=170)** This means better processes for finding what's wrong with you and recommending the best treatments.
>
> **[2:56](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/applications-and-use-cases-of-agentic-ai?u=76281980&t=176)** Again, this is a system that's able to deploy multiple AI agents focused on tasks that may include radiology, image analysis, patient history evaluation, and treatment recommendation.
>
> **[3:08](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/applications-and-use-cases-of-agentic-ai?u=76281980&t=188)** I recently had surgery and had some of these systems participate in my care.
>
> **[3:13](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/applications-and-use-cases-of-agentic-ai?u=76281980&t=193)** They increased the quality of care I received, and I thank AI agents for that.
>
> **[3:18](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/applications-and-use-cases-of-agentic-ai?u=76281980&t=198)** Of course, each day there are more Agentic AI case studies and examples of how this technology can add value to businesses and be used by users.
>
> **[3:28](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/applications-and-use-cases-of-agentic-ai?u=76281980&t=208)** I urge you to keep up with the case studies and see how innovative companies are solving business problems using Agentic AI.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2), is an  (1)
> **Analogies:** such as (2), for example (1)
> **Code Keywords:** let (1), finally, (1)
> **CLI Commands:** make (1)
> **Speakers:** - so (1)

#### Healthcare scenario
> [LinkedIn Learning](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/healthcare-scenario?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/healthcare-scenario?u=76281980&t=0)** - [Instructor] Grey Sloan Medical Center, which is not its real name, is a leading healthcare provider faced with significant challenges so much that the press has taken notice.
>
> **[0:10](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/healthcare-scenario?u=76281980&t=10)** The challenges included high diagnostic error rates, lengthy patient wait times, and inefficiencies in managing patient data.
>
> **[0:19](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/healthcare-scenario?u=76281980&t=19)** The situation became so bad that the healthcare providers board of directors has asked that new and innovative ways be found to improve the quality of care.
>
> **[0:30](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/healthcare-scenario?u=76281980&t=30)** I actually worked on this project.
>
> **[0:32](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/healthcare-scenario?u=76281980&t=32)** The center partnered with me and my firm to implement a cutting edge system to enhance diagnostics, support, and streamline operational workflows.
>
> **[0:41](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/healthcare-scenario?u=76281980&t=41)** Let's see how agentic AI helped.
>
> **[0:44](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/healthcare-scenario?u=76281980&t=44)** The system we deployed at Grey Sloan consisted of various agents tasked with unique functions to optimize different aspects of healthcare delivery.
>
> **[0:55](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/healthcare-scenario?u=76281980&t=55)** The use of a multi-agentic deployment meant that the company had access to a flexible approach where many agents worked together to solve key issues that they needed to address.
>
> **[1:07](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/healthcare-scenario?u=76281980&t=67)** So what do these agents do?
>
> **[1:10](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/healthcare-scenario?u=76281980&t=70)** The diagnostic support agents leveraged advanced machine learning algorithms to analyze radiology images, lab results, and patient histories.
>
> **[1:20](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/healthcare-scenario?u=76281980&t=80)** The agents provided physicians with real-time diagnostic recommendations.
>
> **[1:25](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/healthcare-scenario?u=76281980&t=85)** For example, the ability to find a bone spur in a patient by having an agent look at the X-ray image and recommend potential treatments to doctors.
>
> **[1:35](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/healthcare-scenario?u=76281980&t=95)** This process was based on comprehensive data analysis and reduced diagnostic errors to improve the accuracy of complex medical evaluations.
>
> **[1:45](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/healthcare-scenario?u=76281980&t=105)** The doctors still had the final word, but considering that they have a large workload, this assistance made diagnostic more effective.
>
> **[1:53](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/healthcare-scenario?u=76281980&t=113)** The use of agents to find appointment times sooner and manage the providers and patient's time better was a big part of the center success story.
>
> **[2:03](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/healthcare-scenario?u=76281980&t=123)** These are what we call patient management agents, and they automated the scheduling of patient appointments by considering the availability of healthcare providers and patient needs.
>
> **[2:14](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/healthcare-scenario?u=76281980&t=134)** When we deployed this patient management agent in the system, we saw results.
>
> **[2:19](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/healthcare-scenario?u=76281980&t=139)** Significantly reduced wait times and timely consultations.
>
> **[2:23](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/healthcare-scenario?u=76281980&t=143)** The average clinic saw 30% more patients with fewer cancellations and better use of provider time.
>
> **[2:31](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/healthcare-scenario?u=76281980&t=151)** Also, these agents reallocated resources and optimized schedules using real-time data, meaning that intelligent decisions were using near perfect and current data.
>
> **[2:43](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/healthcare-scenario?u=76281980&t=163)** Not only scheduling had to be considered, but we also needed to solve administrative problems as well.
>
> **[2:49](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/healthcare-scenario?u=76281980&t=169)** We deployed administrative agents to automate data entry from various sources, ensuring regularly updated and accurate patient records.
>
> **[2:59](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/healthcare-scenario?u=76281980&t=179)** Agents handle billing and claims processing, reducing errors and administrative workloads.
>
> **[3:05](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/healthcare-scenario?u=76281980&t=185)** I am so proud to have been involved in the deployment of the system, and I'm proud of how well it functions today.
>
> **[3:13](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/healthcare-scenario?u=76281980&t=193)** By freeing up significant time and resources with agentic AI, this center's healthcare staff could focus more on their core mission, patient care.

> [!info]- Semantic Content
>
> **CLI Commands:** find (2)
> **Code Keywords:** let (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 2. Agentic Behavior and Adaptation

> [↑ Back to Table of Contents](#table-of-contents)

#### How AI systems perceive their environment
> [LinkedIn Learning](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/how-ai-systems-perceive-their-environment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/how-ai-systems-perceive-their-environment?u=76281980&t=0)** - You may own a doorbell video camera that can tell if a human is approaching your door, or when a package has been left.
>
> **[0:08](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/how-ai-systems-perceive-their-environment?u=76281980&t=8)** Ever wonder how that works?
>
> **[0:11](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/how-ai-systems-perceive-their-environment?u=76281980&t=11)** Environmental interaction involves the processes of sensing and acting where the AI agent perceives its surroundings through sensors, interprets the data, makes decisions, and then takes action to influence the environment based on those decisions.
>
> **[0:27](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/how-ai-systems-perceive-their-environment?u=76281980&t=27)** Sources include image data, audio, video, or anything that provides comprehensive understanding of surroundings of the AI agents.
>
> **[0:36](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/how-ai-systems-perceive-their-environment?u=76281980&t=36)** Once the data is gathered, the AI system processes and interprets it to generate insights.
>
> **[0:43](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/how-ai-systems-perceive-their-environment?u=76281980&t=43)** This means that the agent can interpret what that data means, such as understanding the structure, relationships, and potential implications of the gathered data.
>
> **[0:54](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/how-ai-systems-perceive-their-environment?u=76281980&t=54)** Is the person approaching your doors someone who is delivering a package, or stealing one?
>
> **[1:00](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/how-ai-systems-perceive-their-environment?u=76281980&t=60)** Then, a feedback loop occurs where the outcomes of actions, such as mistakenly expecting a person to be stealing a package, are sensed and reassessed.
>
> **[1:12](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/how-ai-systems-perceive-their-environment?u=76281980&t=72)** And based on that feedback loop, the AI system can redefine its future responses.
>
> **[1:18](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/how-ai-systems-perceive-their-environment?u=76281980&t=78)** The system learns that the action of the person once thought to be stealing is actually not stealing, and won't make those assumptions in the future.
>
> **[1:28](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/how-ai-systems-perceive-their-environment?u=76281980&t=88)** Another example would be a fraud detection system that works on our phones, which happens to leverage agentic AI technology.
>
> **[1:37](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/how-ai-systems-perceive-their-environment?u=76281980&t=97)** Listening to a voicemail may leave the agent with the conclusion that it needs to protect the user, but the user could provide feedback to the agent that this is actually a known friend, and not actually a fraud threat.
>
> **[1:53](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/how-ai-systems-perceive-their-environment?u=76281980&t=113)** After that occurs, the agent won't suggest that your friend is attempting to steal from you again.
>
> **[2:00](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/how-ai-systems-perceive-their-environment?u=76281980&t=120)** It leverages a feedback loop to become smarter.
>
> **[2:03](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/how-ai-systems-perceive-their-environment?u=76281980&t=123)** Agents also communicate with each other.
>
> **[2:06](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/how-ai-systems-perceive-their-environment?u=76281980&t=126)** Actually, agent-to-agent communication is more necessary the more complex a goal becomes.
>
> **[2:13](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/how-ai-systems-perceive-their-environment?u=76281980&t=133)** A system that runs independently without communicating with other agents, it's not worth much.
>
> **[2:19](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/how-ai-systems-perceive-their-environment?u=76281980&t=139)** In our camera agentic application, we could have the agent in the camera communicating with an agent in another camera, or agents that exist on a remote server, your personal computer, your phone, you get the idea.
>
> **[2:35](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/how-ai-systems-perceive-their-environment?u=76281980&t=155)** So how do agents talk?
>
> **[2:37](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/how-ai-systems-perceive-their-environment?u=76281980&t=157)** They use agent communications, which is essentially all the methods and protocols the agents use to exchange information.
>
> **[2:45](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/how-ai-systems-perceive-their-environment?u=76281980&t=165)** If done correctly, this ensures that all agents work cohesively.
>
> **[2:49](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/how-ai-systems-perceive-their-environment?u=76281980&t=169)** Information exchanged may include messaging between agent-to-agent.
>
> **[2:56](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/how-ai-systems-perceive-their-environment?u=76281980&t=176)** This is basically two agents sharing commands, data, or anything else needed, allowing them to do their jobs as agents.
>
> **[3:05](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/how-ai-systems-perceive-their-environment?u=76281980&t=185)** Databases are shared by agents or places where persistent data is stored and retrieved.
>
> **[3:12](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/how-ai-systems-perceive-their-environment?u=76281980&t=192)** This can be any database type and brand.
>
> **[3:16](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/how-ai-systems-perceive-their-environment?u=76281980&t=196)** Direct interaction, or an agent making a durable connection to share information.
>
> **[3:22](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/how-ai-systems-perceive-their-environment?u=76281980&t=202)** This is basically the middleware of agents.
>
> **[3:25](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/how-ai-systems-perceive-their-environment?u=76281980&t=205)** Of course, this means that agents have been programmed to coordinate.
>
> **[3:30](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/how-ai-systems-perceive-their-environment?u=76281980&t=210)** Coordination involves the strategies and processes that manage interactions between many agents.
>
> **[3:37](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/how-ai-systems-perceive-their-environment?u=76281980&t=217)** For example, one agent monitoring our doorbell video, another agent spotting objects that need to be determined, another agent still deciding on what object is seen on the video.
>
> **[3:49](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/how-ai-systems-perceive-their-environment?u=76281980&t=229)** You get the idea.
>
> **[3:51](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/how-ai-systems-perceive-their-environment?u=76281980&t=231)** Pretty cool, huh?
>
> **[3:54](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/how-ai-systems-perceive-their-environment?u=76281980&t=234)** Agentic AI architecture has two significant components.
>
> **[3:58](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/how-ai-systems-perceive-their-environment?u=76281980&t=238)** First, the architecture that processes things within the agents, and second, mechanisms that allow the agents to talk and coordinate to work together.
>
> **[4:08](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/how-ai-systems-perceive-their-environment?u=76281980&t=248)** Now that you understand the foundational concepts upon which all agentic AI systems are built, let's spend the rest of the course filling in some of the details.

> [!info]- Semantic Content
>
> **Analogies:** such as (2), for example (1)
> **Definitions:** means that (2)
> **CLI Commands:** make (1)
> **Code Keywords:** let (1)
> **Speakers:** - you (1)

#### How AI agents make decisions
> [LinkedIn Learning](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/how-ai-agents-make-decisions?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/how-ai-agents-make-decisions?u=76281980&t=1)** - Agentic AI systems make complex decisions and achieve goals on their own, independent of human interaction and intervention.
>
> **[0:10](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/how-ai-agents-make-decisions?u=76281980&t=10)** And with that exciting benefit comes the necessity for careful planning.
>
> **[0:16](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/how-ai-agents-make-decisions?u=76281980&t=16)** Your effort spent planning is the difference between an agentic AI system adding value to the business or it being a total failure, even doing damage.
>
> **[0:26](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/how-ai-agents-make-decisions?u=76281980&t=26)** If you are tasked with designing and developing ag agentic AI systems, understand that the agentic AI frameworks support AI's planning and problem solving capabilities.
>
> **[0:39](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/how-ai-agents-make-decisions?u=76281980&t=39)** First though, let's keep it high level to understand how these capabilities interrelate.
>
> **[0:45](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/how-ai-agents-make-decisions?u=76281980&t=45)** We'll start with goal definition, which just means clearly defining objectives the AI needs to accomplish.
>
> **[0:53](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/how-ai-agents-make-decisions?u=76281980&t=53)** These should be done before you deploy the system.
>
> **[0:56](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/how-ai-agents-make-decisions?u=76281980&t=56)** Goals can be simple tasks like finding moving targets in front of our camera or navigating to a specific location if our agentic AI system is an autonomous car.
>
> **[1:09](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/how-ai-agents-make-decisions?u=76281980&t=69)** Or complex, multi-step processes, such as formulating an action strategy based on some event occurring, such as our autonomous vehicle is in an accident, and taking actions to deal with possible injuries and interacting with first responders.
>
> **[1:25](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/how-ai-agents-make-decisions?u=76281980&t=85)** Once a goal is determined, so must be the sequence of actions that leads an agent to that goal state.
>
> **[1:35](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/how-ai-agents-make-decisions?u=76281980&t=95)** For instance, in our Agentic AI-powered security camera examples, we would like the camera to detect crime and take predefined actions if a crime is observed.
>
> **[1:46](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/how-ai-agents-make-decisions?u=76281980&t=106)** So the AI system needs to know how crime is detected, how it's validated, how risks are considered, and how actions are carried out, such as alerting the operator or local authorities.
>
> **[2:00](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/how-ai-agents-make-decisions?u=76281980&t=120)** This could look like, number one, observe the yard.
>
> **[2:04](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/how-ai-agents-make-decisions?u=76281980&t=124)** Number two, detect humans.
>
> **[2:06](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/how-ai-agents-make-decisions?u=76281980&t=126)** Number three, analyze humans.
>
> **[2:08](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/how-ai-agents-make-decisions?u=76281980&t=128)** Number four, determine the intention of the humans.
>
> **[2:12](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/how-ai-agents-make-decisions?u=76281980&t=132)** Number five, determine risk.
>
> **[2:14](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/how-ai-agents-make-decisions?u=76281980&t=134)** Number six, determine trade-offs.
>
> **[2:16](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/how-ai-agents-make-decisions?u=76281980&t=136)** Number seven, take predefined actions.
>
> **[2:19](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/how-ai-agents-make-decisions?u=76281980&t=139)** I bet you can think of a few ways to plan your agentic AI system in terms of sequences of events that need to occur.
>
> **[2:28](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/how-ai-agents-make-decisions?u=76281980&t=148)** Now let's move to environmental modeling, which means creating a representation of the environment in which the AI operates.
>
> **[2:37](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/how-ai-agents-make-decisions?u=76281980&t=157)** This means that the agentic AI system replicates a physical environment as a digital one, so that simulations can occur to determine the best outcomes.
>
> **[2:48](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/how-ai-agents-make-decisions?u=76281980&t=168)** In our camera use case, the ability to replicate the yard, its monitoring within the camera, allows for simulations such as modeling potential movements, et cetera.
>
> **[3:01](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/how-ai-agents-make-decisions?u=76281980&t=181)** Of course, planning is never done.
>
> **[3:05](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/how-ai-agents-make-decisions?u=76281980&t=185)** We'll also need to drive a continual planning process.
>
> **[3:09](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/how-ai-agents-make-decisions?u=76281980&t=189)** This means updating and revising plans based on new information and changes in the environment.
>
> **[3:16](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/how-ai-agents-make-decisions?u=76281980&t=196)** For instance, in our security camera use case, items in the yard such as a bench could be moved, and thus, the camera needs to reevaluate and replan around the changes that have occurred.
>
> **[3:29](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/how-ai-agents-make-decisions?u=76281980&t=209)** Different portions of the image now have to be dealt with differently, and actions need to be redone around the changes.
>
> **[3:37](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/how-ai-agents-make-decisions?u=76281980&t=217)** As the saying goes, you plan or you plan to fail.
>
> **[3:42](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/how-ai-agents-make-decisions?u=76281980&t=222)** In the next video, we'll learn more about autonomous agents, including what they are, how they work, and how they are built by people like you.

> [!info]- Semantic Content
>
> **Analogies:** such as (5), for instance (2)
> **Code Keywords:** let (2), case, (2)
> **Definitions:** is an  (1), means that (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Speakers:** - agentic (1)


### 3. Core Methodology and Tools in Agentic AI

> [↑ Back to Table of Contents](#table-of-contents)

#### Machine learning for agents
> [LinkedIn Learning](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/machine-learning-for-agents?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/machine-learning-for-agents?u=76281980&t=0)** - Machine learning is a result of applying algorithms to learn from data and make choices without being explicitly told to do so.
>
> **[0:09](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/machine-learning-for-agents?u=76281980&t=9)** If this sounds a lot like artificial intelligence, you're right.
>
> **[0:13](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/machine-learning-for-agents?u=76281980&t=13)** Because machine learning is a form of artificial intelligence and is the foundation for most AI systems.
>
> **[0:20](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/machine-learning-for-agents?u=76281980&t=20)** Essentially, ML is the theory and methodology.
>
> **[0:24](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/machine-learning-for-agents?u=76281980&t=24)** And agentic AI frameworks, which we'll cover in the next set of videos, are practical tools that bring the theory to life.
>
> **[0:33](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/machine-learning-for-agents?u=76281980&t=33)** Machine learning allows agents to learn from experiences independently.
>
> **[0:38](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/machine-learning-for-agents?u=76281980&t=38)** And it's been around and in use for years to solve practical business problems, such as spotting fraudulent applications and finding accounting anomalies.
>
> **[0:50](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/machine-learning-for-agents?u=76281980&t=50)** By training models with vast data sets to identify patterns, machine learning models equipped agents with the autonomy to make decisions without human oversight.
>
> **[1:01](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/machine-learning-for-agents?u=76281980&t=61)** Think of it kind of like training a classroom full of people using these different techniques.
>
> **[1:07](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/machine-learning-for-agents?u=76281980&t=67)** There are three main machine learning models that exist, supervised, unsupervised, and reinforcement learning.
>
> **[1:16](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/machine-learning-for-agents?u=76281980&t=76)** Supervised learning leverages labeled data.
>
> **[1:20](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/machine-learning-for-agents?u=76281980&t=80)** Unsupervised explores hidden patterns in unlabeled data.
>
> **[1:25](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/machine-learning-for-agents?u=76281980&t=85)** And reinforcement learning trains the agents by rewarding them for positive actions.
>
> **[1:30](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/machine-learning-for-agents?u=76281980&t=90)** The internal machine learning system is part of an agent and may also be leveraged by an agent as an external resource.
>
> **[1:40](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/machine-learning-for-agents?u=76281980&t=100)** These are needed to guide the agent in evaluating actions, optimizing goals and executing tasks autonomously.
>
> **[1:49](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/machine-learning-for-agents?u=76281980&t=109)** What is critical to understand also is that AI agents with embedded machine learning are in a state of constant improvement.
>
> **[1:58](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/machine-learning-for-agents?u=76281980&t=118)** For example, each time they run, they figure out something new to improve how they carry out their function.
>
> **[2:06](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/machine-learning-for-agents?u=76281980&t=126)** They process new data continuously, refine performance metrics, enhance prediction accuracy, and meet challenges in dynamic context with increasing robustness.
>
> **[2:18](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/machine-learning-for-agents?u=76281980&t=138)** We function much the same way.
>
> **[2:21](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/machine-learning-for-agents?u=76281980&t=141)** We learn from mistakes, and based on feedback from our environments, do things differently to improve how we feel and enjoy life.
>
> **[2:29](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/machine-learning-for-agents?u=76281980&t=149)** You once went out into the cold without a jacket, but quickly learned that that was not a good choice and change your behavior for all events in the future where you knew it was freezing outside.
>
> **[2:42](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/machine-learning-for-agents?u=76281980&t=162)** This is basically what we're talking about here, but what can we do with all of this?
>
> **[2:48](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/machine-learning-for-agents?u=76281980&t=168)** In our security camera business case, there is the ability to adjust a camera's internal cooling features based on air temperature and humidity levels, and learning continuously on how much adjustments should be made based on previous data calculations.
>
> **[3:06](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/machine-learning-for-agents?u=76281980&t=186)** Now that you have the essential groundwork of what machine learning theory and methodology is, let's dive a little deeper into the world of agentic AI by learning about frameworks in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** function (2), case, (1), let (1)
> **Analogies:** such as (1), kind of like (1), for example (1)
> **CLI Commands:** make (2)
> **Cross-References:** in the next (2)
> **Definitions:** is a  (2)
> **Speakers:** - machine (1)

#### Policy frameworks
> [LinkedIn Learning](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/policy-frameworks?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/policy-frameworks?u=76281980&t=1)** - AI agents can make decisions autonomously.
>
> **[0:04](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/policy-frameworks?u=76281980&t=4)** But how do agents do this in a way that's consistent, predictable, and ethical?
>
> **[0:10](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/policy-frameworks?u=76281980&t=10)** One tool to accomplish this is a policy framework.
>
> **[0:15](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/policy-frameworks?u=76281980&t=15)** As you may already know, a framework offers a high-level structure around which developers like you can use to build applications, defining how different parts of the systems interact and integrate.
>
> **[0:28](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/policy-frameworks?u=76281980&t=28)** So what are policy frameworks?
>
> **[0:31](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/policy-frameworks?u=76281980&t=31)** Policy frameworks consist of guidelines that control and direct actions aligning with the values and norms set by architects, designers, developers, or end users.
>
> **[0:43](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/policy-frameworks?u=76281980&t=43)** Build a policy framework to structure how the agentic AI system makes decisions and follows rules to ensure it meets expectations.
>
> **[0:53](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/policy-frameworks?u=76281980&t=53)** If these policies are not set, the system could do less desirable things, such as sending your personal information to a requesting system without asking you or even performing illegal or unethical tasks.
>
> **[1:08](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/policy-frameworks?u=76281980&t=68)** Let's examine two policy frameworks: decision-making and rule-based.
>
> **[1:13](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/policy-frameworks?u=76281980&t=73)** Decision-making frameworks include ethical policies to ensure that AI actions align with broader societal and legal standards, ensuring that your agentic AI system does not break the law or upset users through destructive behaviors.
>
> **[1:31](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/policy-frameworks?u=76281980&t=91)** Decision-making frameworks also include oversight mechanisms.
>
> **[1:35](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/policy-frameworks?u=76281980&t=95)** This is the implementation of human in the loop or human-on-the-loop systems to assure that human operators can intervene in AI decision-making as necessary.
>
> **[1:47](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/policy-frameworks?u=76281980&t=107)** For example, a kill button built into the system that could stop operations if needed by a human operator.
>
> **[1:56](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/policy-frameworks?u=76281980&t=116)** There are also risk assessment and mitigation strategies.
>
> **[2:00](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/policy-frameworks?u=76281980&t=120)** These address potential adverse outcomes from autonomous decisions made by AI agents.
>
> **[2:06](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/policy-frameworks?u=76281980&t=126)** For example, in our security camera example, the police is called if it thinks it sees a crime occurring, but ensures that we're not doing so based on biases such as race and age.
>
> **[2:18](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/policy-frameworks?u=76281980&t=138)** And our second type of policy framework is rules-based.
>
> **[2:22](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/policy-frameworks?u=76281980&t=142)** These specific predefined rules agentic agent systems must follow to ensure predictable and compliant behavior.
>
> **[2:30](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/policy-frameworks?u=76281980&t=150)** For example, a rule that the AI must adhere to might be never to attempt to injure a human.
>
> **[2:40](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/policy-frameworks?u=76281980&t=160)** While adaptability with rule-based frameworks allows AI to modify its behaviors in response to changing conditions, it must still adhere to rules and objectives.
>
> **[2:51](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/policy-frameworks?u=76281980&t=171)** For example, it can alter behavior based on changing weather conditions, such as changing the mix of materials and a temperature sensitive manufacturing process.
>
> **[3:01](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/policy-frameworks?u=76281980&t=181)** Now, you don't want to simply set the decision-making and policy frameworks and never revisit that work.
>
> **[3:08](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/policy-frameworks?u=76281980&t=188)** It's crucial that you also establish systems for ongoing monitoring of AI actions to ensure compliance with established rules.

> [!info]- Semantic Content
>
> **Analogies:** for example (4), such as (3)
> **Definitions:** is a  (1), is called (1)
> **CLI Commands:** make (1)
> **Code Keywords:** let (1)
> **Speakers:** - ai (1)

#### Utility-based frameworks
> [LinkedIn Learning](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/utility-based-frameworks?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/utility-based-frameworks?u=76281980&t=1)** - We will continue our discussion on agentic AI frameworks by exploring utility-based frameworks.
>
> **[0:07](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/utility-based-frameworks?u=76281980&t=7)** Remember, frameworks ensure that AI agents operate with autonomy to achieve goals.
>
> **[0:13](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/utility-based-frameworks?u=76281980&t=13)** Utility-based frameworks for agentic AI are conceptual structures that guide AI systems' design, deployment, and evaluation.
>
> **[0:23](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/utility-based-frameworks?u=76281980&t=23)** They focus on maximizing their usefulness, while balancing risks and benefits.
>
> **[0:29](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/utility-based-frameworks?u=76281980&t=29)** So ,what are the critical components of utility-based frameworks?
>
> **[0:33](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/utility-based-frameworks?u=76281980&t=33)** We'll cover the more important components starting with utility functions.
>
> **[0:38](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/utility-based-frameworks?u=76281980&t=38)** The utility function maps outcomes to numerical values, calculating their desirability.
>
> **[0:44](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/utility-based-frameworks?u=76281980&t=44)** The AI system uses this function to evaluate and choose the best actions based on math.
>
> **[0:51](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/utility-based-frameworks?u=76281980&t=51)** Let's say that a security camera records an image of a person carrying an object.
>
> **[0:56](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/utility-based-frameworks?u=76281980&t=56)** That object could be a weapon or a non-threatening tool, and the camera must evaluate that image to determine which one.
>
> **[1:05](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/utility-based-frameworks?u=76281980&t=65)** In this situation, that utility function would assign a ranking to the image, say 1 to 10, where 1 is less likely to be a weapon, and 10 is most likely.
>
> **[1:16](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/utility-based-frameworks?u=76281980&t=76)** Then, using this formula, evaluate the potential of the person being a threat that needs to be further observed.
>
> **[1:25](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/utility-based-frameworks?u=76281980&t=85)** Another important attribute of utility-based frameworks is preference modeling.
>
> **[1:30](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/utility-based-frameworks?u=76281980&t=90)** This means setting user preferences and integrating them into the utility function, much like the preferences you can put on your smartphone, or even your TV.
>
> **[1:41](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/utility-based-frameworks?u=76281980&t=101)** This maximizes utility within the agentic AI system, meaning always finding the most optimal solution.
>
> **[1:48](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/utility-based-frameworks?u=76281980&t=108)** For example, the image taken by your agentic AI security camera needs to be optimized for analysis to be done before the agent makes the decision.
>
> **[1:59](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/utility-based-frameworks?u=76281980&t=119)** This is not to say there isn't risk involved.
>
> **[2:03](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/utility-based-frameworks?u=76281980&t=123)** Just like the decisions we make in our real world daily environments, each decision an AI agent makes can account for a specific degree of risk and uncertainty.
>
> **[2:15](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/utility-based-frameworks?u=76281980&t=135)** These utility frameworks often leverage probabilistic models and techniques to determine, analyze, manage, and mitigate risks.
>
> **[2:25](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/utility-based-frameworks?u=76281980&t=145)** You can think of a few uses for this, such as determining the amount of risks that innate biases in an agentic AI system's take.
>
> **[2:33](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/utility-based-frameworks?u=76281980&t=153)** This is in consideration of stakeholders risk.
>
> **[2:37](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/utility-based-frameworks?u=76281980&t=157)** Then, there is trade-off analysis, which works with risk analysis to maximize utility.
>
> **[2:43](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/utility-based-frameworks?u=76281980&t=163)** Trade-off analysis means balancing competing objectives and constraints such as we do each day in our own lives.
>
> **[2:51](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/utility-based-frameworks?u=76281980&t=171)** For example, if it seems cloudy, we'll consider the trade off of taking an umbrella that day and the chance it'll rain.
>
> **[2:59](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/utility-based-frameworks?u=76281980&t=179)** Or if it does not rain, you'll be burdened with the umbrella that day.
>
> **[3:04](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/utility-based-frameworks?u=76281980&t=184)** Agentic AI systems should be designed to deal with these trade-offs.
>
> **[3:09](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/utility-based-frameworks?u=76281980&t=189)** This means analyzing trade-offs between different outcomes and optimizing for a balanced solution that aligns with the overall goals and objectives set within the agentic AI system.

> [!info]- Semantic Content
>
> **Code Keywords:** function (4), continue (1), let (1), this, (1)
> **Analogies:** for example (2), such as (2), just like (1)
> **CLI Commands:** make (1)
> **Speakers:** - we (1)

#### Reinforcement learning and Q-learning
> [LinkedIn Learning](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/reinforcement-learning-and-q-learning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/reinforcement-learning-and-q-learning?u=76281980&t=0)** - Reinforcement learning algorithms are instrumental in developing machine learning and agentic AI.
>
> **[0:07](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/reinforcement-learning-and-q-learning?u=76281980&t=7)** These algorithms find their place in numerous practical scenarios including autonomous driving, where agents learn to navigate roads, or troubleshooting a jet engine in flight, automatically finding the best and safest outcome, Reinforcement learning is all about learning by interacting with an environment.
>
> **[0:31](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/reinforcement-learning-and-q-learning?u=76281980&t=31)** The agent takes action in different situations, also known as states, and receives feedback in the form of rewards or punishments.
>
> **[0:40](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/reinforcement-learning-and-q-learning?u=76281980&t=40)** Agents try to maximize rewards much like people do when we get rewards for good conduct or good grades in school.
>
> **[0:49](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/reinforcement-learning-and-q-learning?u=76281980&t=49)** The agent understands that it's not desirable to get a penalty and attempts to figure out how to avoid it in the future.
>
> **[0:58](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/reinforcement-learning-and-q-learning?u=76281980&t=58)** Q-learning is a specific type of reinforcement learning algorithm.
>
> **[1:03](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/reinforcement-learning-and-q-learning?u=76281980&t=63)** It uses a table, a Q-table, to keep track of the best actions to take in each situation.
>
> **[1:13](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/reinforcement-learning-and-q-learning?u=76281980&t=73)** The agent updates this table based on experiences, gradually learning the optimal actions to maximize its rewards.
>
> **[1:22](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/reinforcement-learning-and-q-learning?u=76281980&t=82)** Let's talk about what goes into developing a Q-learning algorithm.
>
> **[1:27](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/reinforcement-learning-and-q-learning?u=76281980&t=87)** The first step is to define the environment.
>
> **[1:31](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/reinforcement-learning-and-q-learning?u=76281980&t=91)** This is the world where the agent interacts.
>
> **[1:34](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/reinforcement-learning-and-q-learning?u=76281980&t=94)** Environment includes all possible states, actions, and rules of interaction.
>
> **[1:40](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/reinforcement-learning-and-q-learning?u=76281980&t=100)** It includes everything that the agent can do and the responses that the agents will get, including policies and rules that apply.
>
> **[1:50](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/reinforcement-learning-and-q-learning?u=76281980&t=110)** Second, identify the different states the system can be in.
>
> **[1:54](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/reinforcement-learning-and-q-learning?u=76281980&t=114)** A state is a representation of the situation or configuration of the environment at a specific point in time.
>
> **[2:03](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/reinforcement-learning-and-q-learning?u=76281980&t=123)** For instance, the fact that it's now dark outside is an example of a state that our camera agent should understand.
>
> **[2:10](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/reinforcement-learning-and-q-learning?u=76281980&t=130)** Third, define the set of possible actions that the agent can take, such as the camera changing the aperture in response to the changed state of the darkness outside or an agent charged with monitoring a jet engine triggers a fire suppression system if a fire state is detected.
>
> **[2:32](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/reinforcement-learning-and-q-learning?u=76281980&t=152)** Fourth, establish a reward signal.
>
> **[2:34](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/reinforcement-learning-and-q-learning?u=76281980&t=154)** A reward what?
>
> **[2:36](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/reinforcement-learning-and-q-learning?u=76281980&t=156)** Think of this as a digital doggy treat.
>
> **[2:39](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/reinforcement-learning-and-q-learning?u=76281980&t=159)** Rewards are numerical values the agent receives after taking an action in a specific state.
>
> **[2:46](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/reinforcement-learning-and-q-learning?u=76281980&t=166)** The goal of the agent is to maximize cumulative awards.
>
> **[2:50](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/reinforcement-learning-and-q-learning?u=76281980&t=170)** Fifth, develop policy.
>
> **[2:53](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/reinforcement-learning-and-q-learning?u=76281980&t=173)** For example, an airline policy is not to shut down the jet engine ever in flight.
>
> **[3:00](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/reinforcement-learning-and-q-learning?u=76281980&t=180)** You need a strategy or a mapping from states to actions that the agent follows.
>
> **[3:07](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/reinforcement-learning-and-q-learning?u=76281980&t=187)** Finally, define a value function.
>
> **[3:10](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/reinforcement-learning-and-q-learning?u=76281980&t=190)** The value function estimates the expected cumulative reward of being in a particular state and following a certain policy.
>
> **[3:18](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/reinforcement-learning-and-q-learning?u=76281980&t=198)** The value function helps the agent assess the long-term benefit of states and actions, much like we determine the longer term benefits of our actions, both good and bad.
>
> **[3:31](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/reinforcement-learning-and-q-learning?u=76281980&t=211)** With reinforcement learning, AI agents are in perpetual state of self discovery.
>
> **[3:37](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/reinforcement-learning-and-q-learning?u=76281980&t=217)** They are always improving performance, becoming better and better at tackling greater and greater challenges.
>
> **[3:45](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/reinforcement-learning-and-q-learning?u=76281980&t=225)** This is a lot of detail, but remember, this is not about memorizing.
>
> **[3:49](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/reinforcement-learning-and-q-learning?u=76281980&t=229)** That won't help you much.
>
> **[3:51](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/reinforcement-learning-and-q-learning?u=76281980&t=231)** Understanding how AI agents carry out tasks conceptually will help you because you can see how it fits into the larger world of agentic AI.
>
> **[4:02](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/reinforcement-learning-and-q-learning?u=76281980&t=242)** Remember what reinforcement learning is and that it can be leveraged when needed.

> [!info]- Semantic Content
>
> **Code Keywords:** function (3), let (1), finally, (1), self (1)
> **Definitions:** is a  (3), known as (1), is an  (1)
> **Analogies:** for instance (1), such as (1), for example (1)
> **CLI Commands:** find (1)
> **Speakers:** - reinforcement (1)


### 4. Agent Architectures in Agentic AI

> [↑ Back to Table of Contents](#table-of-contents)

#### Agent architectures: major
> [LinkedIn Learning](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/agent-architectures-major?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/agent-architectures-major?u=76281980&t=0)** - Like architects use blueprints to build houses, developers use architectures to build working agentic AI systems.
>
> **[0:10](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/agent-architectures-major?u=76281980&t=10)** There are two types to consider, major and minor.
>
> **[0:14](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/agent-architectures-major?u=76281980&t=14)** Major architectures carry out strategic tasks.
>
> **[0:17](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/agent-architectures-major?u=76281980&t=17)** For example, an agentic AI's major architecture describes how a camera with built-in AI works.
>
> **[0:26](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/agent-architectures-major?u=76281980&t=26)** Minor architectures, on the other hand, carry out particular tasks.
>
> **[0:30](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/agent-architectures-major?u=76281980&t=30)** They describe the smaller system components of agentic AI systems.
>
> **[0:35](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/agent-architectures-major?u=76281980&t=35)** For example, updating firmware, determining the current air temperature, or closing the aperture of a camera to adjust to changing light.
>
> **[0:45](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/agent-architectures-major?u=76281980&t=45)** They function at the behest of the systems defined by major architecture.
>
> **[0:51](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/agent-architectures-major?u=76281980&t=51)** Another way to think of this is that the major architecture is the master controller, which can carry out functions using smaller minor systems.
>
> **[1:01](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/agent-architectures-major?u=76281980&t=61)** For example, tasks such as the process an agent goes through to communicate with devices and systems.
>
> **[1:10](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/agent-architectures-major?u=76281980&t=70)** Let's next cover some of the major architectures first.
>
> **[1:14](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/agent-architectures-major?u=76281980&t=74)** We will discuss seven types, starting with single-agent architectures.
>
> **[1:19](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/agent-architectures-major?u=76281980&t=79)** These architectures function with one single agent interacting with the environment and are typically used for well-defined problems where feedback from another agent is unnecessary.
>
> **[1:31](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/agent-architectures-major?u=76281980&t=91)** Second, multi-agent architectures.
>
> **[1:34](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/agent-architectures-major?u=76281980&t=94)** This is just what it sounds like, in which multiple agents work together.
>
> **[1:38](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/agent-architectures-major?u=76281980&t=98)** They are used for tasks that require collaboration between agents.
>
> **[1:43](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/agent-architectures-major?u=76281980&t=103)** They can provide different execution path and leverage the specialized capabilities of all of the agents in the architecture.
>
> **[1:52](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/agent-architectures-major?u=76281980&t=112)** For example, the agent running within a security camera needs to communicate with the other agents running on master servers at the camera's manufacturer to coordinate activities.
>
> **[2:05](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/agent-architectures-major?u=76281980&t=125)** Through multi-agent, actions like an automated firmware upgrade can happen.
>
> **[2:11](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/agent-architectures-major?u=76281980&t=131)** Third, there are reflection-based architectures.
>
> **[2:15](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/agent-architectures-major?u=76281980&t=135)** These have agents critique their own output and refine the results iteratively.
>
> **[2:21](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/agent-architectures-major?u=76281980&t=141)** For example, a security camera-based agent reflects and validates that they are seeing a crime taking place.
>
> **[2:28](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/agent-architectures-major?u=76281980&t=148)** We would not want to call the police on somebody who was just picking something up off the ground, would we?
>
> **[2:34](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/agent-architectures-major?u=76281980&t=154)** A fourth major architecture is tool integrated.
>
> **[2:38](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/agent-architectures-major?u=76281980&t=158)** This type incorporates relevant tools to expand its capabilities beyond its pre-program capabilities.
>
> **[2:44](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/agent-architectures-major?u=76281980&t=164)** Examples of these tools include web search engines or image processing software.
>
> **[2:49](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/agent-architectures-major?u=76281980&t=169)** Our security camera uses the internet to look up a home address to carry out an internal process, you get the idea.
>
> **[2:58](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/agent-architectures-major?u=76281980&t=178)** Fifth, planning centric.
>
> **[3:00](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/agent-architectures-major?u=76281980&t=180)** These break down complex tasks into specific steps, enabling agents to plan and adapt their approaches autonomously during execution.
>
> **[3:10](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/agent-architectures-major?u=76281980&t=190)** For example, the process of upgrading firmware may have 50 steps, but the agent can combine them into one single step.
>
> **[3:21](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/agent-architectures-major?u=76281980&t=201)** Six, generative AI networks or GAINs for short.
>
> **[3:26](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/agent-architectures-major?u=76281980&t=206)** This architecture is a form of multi-agent collaboration, whereas one agent can reach out to others to leverage specialized skills and solve problems together.
>
> **[3:36](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/agent-architectures-major?u=76281980&t=216)** For example, our camera solves a problem by reaching out to other agents that are skilled at identifying a crime, weather predictions, et cetera.
>
> **[3:46](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/agent-architectures-major?u=76281980&t=226)** Seventh and final is human-AI collaboration architectures.
>
> **[3:52](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/agent-architectures-major?u=76281980&t=232)** These facilitate collaboration between AI agents and humans by automating routine tasks.
>
> **[3:58](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/agent-architectures-major?u=76281980&t=238)** They allow people to engage in higher level cognitive functions like creativity and problem solving.
>
> **[4:06](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/agent-architectures-major?u=76281980&t=246)** The capabilities of an agentic AI are heavily shaped by its underlying architecture.
>
> **[4:12](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/agent-architectures-major?u=76281980&t=252)** Whether it's a single or multi-agent model, the architecture defines how the AI processes information, learns from experiences, and makes decisions.

> [!info]- Semantic Content
>
> **Analogies:** for example (7), such as (1)
> **Code Keywords:** function (2), let (1), require (1)
> **Definitions:** is a  (1)
> **Speakers:** - like (1)

#### Agent architectures: minor
> [LinkedIn Learning](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/agent-architectures-minor?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/agent-architectures-minor?u=76281980&t=0)** - In the last video, we examined major Asian architectures.
>
> **[0:04](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/agent-architectures-minor?u=76281980&t=4)** Now let's explore minor architectures.
>
> **[0:08](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/agent-architectures-minor?u=76281980&t=8)** As we described in the last video, minor architectures carry out specific tasks.
>
> **[0:13](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/agent-architectures-minor?u=76281980&t=13)** They serve specialized functions, such as cater to specific problems and are often considered applicable to narrow domains, compared to major architectures.
>
> **[0:24](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/agent-architectures-minor?u=76281980&t=24)** While they are important and useful in certain contexts, they do not provide the broad foundational support seen in major architectures that we covered in the last video.
>
> **[0:36](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/agent-architectures-minor?u=76281980&t=36)** So why are they important?
>
> **[0:38](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/agent-architectures-minor?u=76281980&t=38)** They get things done.
>
> **[0:40](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/agent-architectures-minor?u=76281980&t=40)** There are three types to consider here, behavior-based, emotion-based, and swarm intelligence.
>
> **[0:48](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/agent-architectures-minor?u=76281980&t=48)** Behavior-based architectures are closely related to reactive architectures.
>
> **[0:52](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/agent-architectures-minor?u=76281980&t=52)** They might be considered minor if they emphasize specific behavior patterns or models that are not broadly applicable across domains.
>
> **[1:01](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/agent-architectures-minor?u=76281980&t=61)** Second, emotion-based architectures are systems that simulate or incorporate emotional responses to provide human-like interactions.
>
> **[1:10](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/agent-architectures-minor?u=76281980&t=70)** They can be thought of as humanizing AI agents such as conveying anger.
>
> **[1:15](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/agent-architectures-minor?u=76281980&t=75)** Finally, third, swarm intelligence architectures are used for modeling and designing systems based on collective behaviors observed in natural systems, such as ant colonies or schools of fish.
>
> **[1:29](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/agent-architectures-minor?u=76281980&t=89)** There are many other minor architectures to consider, and you can even create your own based on how you're designing agentic AI systems and the need to do things in specific ways.
>
> **[1:40](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/agent-architectures-minor?u=76281980&t=100)** Now that you have a solid conceptual foundation in both major and minor architectures, you're well-equipped to explore, innovate, and apply agentic AI effectively.

> [!info]- Semantic Content
>
> **Cross-References:** in the last (3), we covered (1)
> **Analogies:** such as (3)
> **Code Keywords:** let (1), finally, (1)
> **Speakers:** - in (1)


### 5. Advanced Communication Frameworks in Agentic AI

> [↑ Back to Table of Contents](#table-of-contents)

#### Developing a cooperative multiagent system
> [LinkedIn Learning](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/developing-a-cooperative-multi-agent-system?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/developing-a-cooperative-multi-agent-system?u=76281980&t=0)** - Taking time to study the components of a cooperative multi-agent system before you start development will help you design a system that's efficient, scalable, and reliable.
>
> **[0:13](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/developing-a-cooperative-multi-agent-system?u=76281980&t=13)** Before development, you want to clearly define the environment where agents will operate.
>
> **[0:19](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/developing-a-cooperative-multi-agent-system?u=76281980&t=19)** This means mapping out all of the possible states and understanding how agents will interact with each other based on that environment.
>
> **[0:29](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/developing-a-cooperative-multi-agent-system?u=76281980&t=29)** Next, communication protocols.
>
> **[0:32](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/developing-a-cooperative-multi-agent-system?u=76281980&t=32)** Decide how they will communicate, such as networking messaging, APIs, et cetera.
>
> **[0:39](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/developing-a-cooperative-multi-agent-system?u=76281980&t=39)** An example would be using a messaging system that's able to communicate over a wide area network using TCP/IP.
>
> **[0:47](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/developing-a-cooperative-multi-agent-system?u=76281980&t=47)** Other options could be RFID, which is communications over a radio network, or even using Bluetooth.
>
> **[0:55](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/developing-a-cooperative-multi-agent-system?u=76281980&t=55)** Define shared goals and rewards.
>
> **[0:58](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/developing-a-cooperative-multi-agent-system?u=76281980&t=58)** Align agents with shared goals or cooperative reward structures.
>
> **[1:03](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/developing-a-cooperative-multi-agent-system?u=76281980&t=63)** This is to answer the question, how do agents know that they are doing a good job?
>
> **[1:11](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/developing-a-cooperative-multi-agent-system?u=76281980&t=71)** For example, set the shared objectives of maximizing sales while minimizing costs.
>
> **[1:17](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/developing-a-cooperative-multi-agent-system?u=76281980&t=77)** By designing reward systems that promote collaboration rather than competition, agents work together harmoniously toward common objectives.
>
> **[1:27](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/developing-a-cooperative-multi-agent-system?u=76281980&t=87)** Set up coordination mechanisms.
>
> **[1:30](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/developing-a-cooperative-multi-agent-system?u=76281980&t=90)** For example, leader-follower structures or other ways to drive consensus between distributed AI agents.
>
> **[1:37](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/developing-a-cooperative-multi-agent-system?u=76281980&t=97)** This helps organize efforts and avoid conflicts or redundant actions.
>
> **[1:43](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/developing-a-cooperative-multi-agent-system?u=76281980&t=103)** Establish decentralized decision-making.
>
> **[1:46](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/developing-a-cooperative-multi-agent-system?u=76281980&t=106)** Each agent should also be capable of making independent decisions based on local and external information.
>
> **[1:54](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/developing-a-cooperative-multi-agent-system?u=76281980&t=114)** Decentralized decision-making increases the system's or the collection of agents' redundancy and resilience.
>
> **[2:02](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/developing-a-cooperative-multi-agent-system?u=76281980&t=122)** For example, if that security camera's AI agent stops communicating with the AI agents and the other cameras, that individual agent can still carry on with their tasks to make the right decisions.
>
> **[2:15](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/developing-a-cooperative-multi-agent-system?u=76281980&t=135)** This is critical.
>
> **[2:18](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/developing-a-cooperative-multi-agent-system?u=76281980&t=138)** Finally, define role specialization.
>
> **[2:21](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/developing-a-cooperative-multi-agent-system?u=76281980&t=141)** This means assigning specific abilities to different agents based on their capabilities.
>
> **[2:26](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/developing-a-cooperative-multi-agent-system?u=76281980&t=146)** When each agent focuses on what it does best, the entire system maximizes efficiency and reduces redundancy.
>
> **[2:35](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/developing-a-cooperative-multi-agent-system?u=76281980&t=155)** For example, one is given the role of communicating with customers using a native chat engine, whereas another is given the role of carrying out customer processes behind the scenes.
>
> **[2:47](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/developing-a-cooperative-multi-agent-system?u=76281980&t=167)** They work together to solve the business problem.
>
> **[2:51](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/developing-a-cooperative-multi-agent-system?u=76281980&t=171)** Study these components and know their importance ahead of development.
>
> **[2:56](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/developing-a-cooperative-multi-agent-system?u=76281980&t=176)** It will help your team avoid potential challenges and pitfalls early in the process, leading to a more robust and reliable system.

> [!info]- Semantic Content
>
> **Analogies:** for example (4), such as (1)
> **Env Vars:** tcp (1), rfid (1)
> **CLI Commands:** make (1)
> **Code Keywords:** finally, (1)
> **Prerequisites:** set up (1)
> **Speakers:** - taking (1)

#### Implementing communication protocols for agents
> [LinkedIn Learning](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/implementing-communication-protocols-for-agents?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/implementing-communication-protocols-for-agents?u=76281980&t=1)** - Implementing communication protocols for agents is like teaching kids to play together on a playground.
>
> **[0:08](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/implementing-communication-protocols-for-agents?u=76281980&t=8)** Children have to be taught how to communicate when sharing toys, taking turns, and cooperating in games.
>
> **[0:15](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/implementing-communication-protocols-for-agents?u=76281980&t=15)** And just like children, agents need to be taught rules, also known as protocols.
>
> **[0:21](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/implementing-communication-protocols-for-agents?u=76281980&t=21)** Agents are trained on protocols to exchange information, coordinate actions, and collaborate on tasks.
>
> **[0:29](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/implementing-communication-protocols-for-agents?u=76281980&t=29)** The lack of protocols means agents are less likely to work together harmoniously, leading to many problems, such as shared errors and security breaches.
>
> **[0:38](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/implementing-communication-protocols-for-agents?u=76281980&t=38)** So how do you start building these protocols?
>
> **[0:42](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/implementing-communication-protocols-for-agents?u=76281980&t=42)** Developers accomplish this through standardization.
>
> **[0:46](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/implementing-communication-protocols-for-agents?u=76281980&t=46)** This is the process of establishing common rules for communication.
>
> **[0:50](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/implementing-communication-protocols-for-agents?u=76281980&t=50)** As children, we learned how to properly form a sentence and deliver it.
>
> **[0:56](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/implementing-communication-protocols-for-agents?u=76281980&t=56)** It's the same for agents.
>
> **[0:58](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/implementing-communication-protocols-for-agents?u=76281980&t=58)** After all, messages are just packages of data that use an agreed-upon structure, allowing an exchange of information between systems.
>
> **[1:07](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/implementing-communication-protocols-for-agents?u=76281980&t=67)** This is critical because clear message structures prevent miscommunication and inaccurate information.
>
> **[1:15](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/implementing-communication-protocols-for-agents?u=76281980&t=75)** Usually, developers use structured data formats like JSON or XML.
>
> **[1:20](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/implementing-communication-protocols-for-agents?u=76281980&t=80)** However, really any message format can be used as long as the agents are trained to understand them.
>
> **[1:27](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/implementing-communication-protocols-for-agents?u=76281980&t=87)** Developing ontologies or in other words shared vocabulary is also essential as it ensures a collective understanding of terms and concepts.
>
> **[1:38](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/implementing-communication-protocols-for-agents?u=76281980&t=98)** Ontologies are structured frameworks that define a set of concepts, categories, and their relationships.
>
> **[1:45](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/implementing-communication-protocols-for-agents?u=76281980&t=105)** This just means the entire system uses the same semantics so agents accurately interpret and act upon information.
>
> **[1:54](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/implementing-communication-protocols-for-agents?u=76281980&t=114)** Standards, such as the Web Ontology Language or OWL, are often used to structure ontology data.
>
> **[2:02](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/implementing-communication-protocols-for-agents?u=76281980&t=122)** It's also important to continuously update ontologies to accommodate new knowledge and understanding.
>
> **[2:09](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/implementing-communication-protocols-for-agents?u=76281980&t=129)** What about security protocols when all this information is being shared across systems?
>
> **[2:15](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/implementing-communication-protocols-for-agents?u=76281980&t=135)** Implementing robust security measures to authenticate agents and secure communication protects data integrity and confidentiality.
>
> **[2:24](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/implementing-communication-protocols-for-agents?u=76281980&t=144)** AI agents might exchange data related to things like our banking information or our last physical and so that data needs to be protected.
>
> **[2:34](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/implementing-communication-protocols-for-agents?u=76281980&t=154)** In terms of implementation, employing cryptographic techniques such as SSL or TLS for secure data transmission is a common approach.
>
> **[2:45](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/implementing-communication-protocols-for-agents?u=76281980&t=165)** Also implementing authentication mechanisms like OAuth or digital certificates.
>
> **[2:51](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/implementing-communication-protocols-for-agents?u=76281980&t=171)** These security concepts help verify agent identities to ensure that we're not talking to agents who are not authorized on the agentic AI network of agents.
>
> **[3:02](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/implementing-communication-protocols-for-agents?u=76281980&t=182)** Without protocols, communications between agents can break down, leading to errors and miscommunication.
>
> **[3:09](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/implementing-communication-protocols-for-agents?u=76281980&t=189)** This is high stakes.
>
> **[3:11](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/implementing-communication-protocols-for-agents?u=76281980&t=191)** Just imagine the consequences of a system that manages financial transactions or patient healthcare data.
>
> **[3:19](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/implementing-communication-protocols-for-agents?u=76281980&t=199)** Effective protocols ensure that all parties involved can interact seamlessly, reliably, and safely.

> [!info]- Semantic Content
>
> **Env Vars:** json (1), xml (1), owl (1), ssl (1), tls (1)
> **Analogies:** such as (3), just like (1), imagine (1)
> **Definitions:** known as (1), in other words (1), is a  (1)
> **Code Keywords:** protected (1)
> **Speakers:** - implementing (1)

#### Game theory and strategic interaction
> [LinkedIn Learning](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/game-theory-and-strategic-interaction?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/game-theory-and-strategic-interaction?u=76281980&t=1)** - What agentic AI is today and how it works is the result of many different models and theories that came before it.
>
> **[0:10](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/game-theory-and-strategic-interaction?u=76281980&t=10)** Game theory is one of those.
>
> **[0:12](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/game-theory-and-strategic-interaction?u=76281980&t=12)** This theory gives us the concepts to design and manage how AI agents interact, making sure they work together smoothly within a whole system.
>
> **[0:23](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/game-theory-and-strategic-interaction?u=76281980&t=23)** But what exactly is game theory?
>
> **[0:26](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/game-theory-and-strategic-interaction?u=76281980&t=26)** Game theory is a mathematical framework for modeling and analyzing behavior.
>
> **[0:32](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/game-theory-and-strategic-interaction?u=76281980&t=32)** Here are the basic concepts of this theory that you want to consider when designing an AI system.
>
> **[0:40](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/game-theory-and-strategic-interaction?u=76281980&t=40)** First, define the game players.
>
> **[0:42](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/game-theory-and-strategic-interaction?u=76281980&t=42)** AI agents are the players.
>
> **[0:44](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/game-theory-and-strategic-interaction?u=76281980&t=44)** Like players at a poker table, your agents, or players, use a predefined set of rules, processes, and strategies to provide the best actions possible.
>
> **[0:54](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/game-theory-and-strategic-interaction?u=76281980&t=54)** Then you need to define the games.
>
> **[0:57](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/game-theory-and-strategic-interaction?u=76281980&t=57)** These are the scenarios where strategic interactions take place or when the game is played.
>
> **[1:03](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/game-theory-and-strategic-interaction?u=76281980&t=63)** They can be cooperative or non-cooperative, zero sum or non-zero sum.
>
> **[1:09](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/game-theory-and-strategic-interaction?u=76281980&t=69)** Cooperative games involve agents forming alliances or agreements to achieve common goals or maximize collective payoffs, for example, a group of poker players who work as a team and share the winnings.
>
> **[1:23](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/game-theory-and-strategic-interaction?u=76281980&t=83)** In contrast, non-cooperative games have agents acting independently, focusing on their individual benefits.
>
> **[1:31](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/game-theory-and-strategic-interaction?u=76281980&t=91)** For example, a group of cameras running AI agents may work together to determine if a theft is occurring based on the images generated by all of the cameras running AI agents.
>
> **[1:43](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/game-theory-and-strategic-interaction?u=76281980&t=103)** In this case, the AI agents are cooperating to achieve a shared reward, which is the behavior that the agentic AI system developers would like you to enforce.
>
> **[1:55](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/game-theory-and-strategic-interaction?u=76281980&t=115)** In zero-sum games one agent's gain is exactly balanced by the losses of other agents.
>
> **[2:03](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/game-theory-and-strategic-interaction?u=76281980&t=123)** This means that the total benefit is always the same.
>
> **[2:07](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/game-theory-and-strategic-interaction?u=76281980&t=127)** In non-zero-sum games the total benefit can vary.
>
> **[2:11](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/game-theory-and-strategic-interaction?u=76281980&t=131)** Often, this is a better way to define the desired outcome and behaviors of the AI agents.
>
> **[2:17](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/game-theory-and-strategic-interaction?u=76281980&t=137)** Can you think of a task that defines how agents should work together?
>
> **[2:22](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/game-theory-and-strategic-interaction?u=76281980&t=142)** Perhaps they need to always consider a finite amount of something in their decision-making, such as a storage budget, then define the strategies.
>
> **[2:32](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/game-theory-and-strategic-interaction?u=76281980&t=152)** Depending on the current situation or conditions in the game, an agent strategy can be fixed, determinative, randomization, or probabilistic.
>
> **[2:42](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/game-theory-and-strategic-interaction?u=76281980&t=162)** For example, in a card game a player might always choose to play a certain card if it's a high-value card.
>
> **[2:51](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/game-theory-and-strategic-interaction?u=76281980&t=171)** Alternatively, if the player is unsure of the opponent's card they might randomly decide between two possible actions.
>
> **[2:59](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/game-theory-and-strategic-interaction?u=76281980&t=179)** These actions could be attacking or defending with assigned probabilities.
>
> **[3:05](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/game-theory-and-strategic-interaction?u=76281980&t=185)** Now we want to reward good behavior, which reinforces how the agents behave.
>
> **[3:10](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/game-theory-and-strategic-interaction?u=76281980&t=190)** You need to define the payoffs or the rewards that the agents may obtain.
>
> **[3:16](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/game-theory-and-strategic-interaction?u=76281980&t=196)** This is the calculated gain or loss each agent receives based on the combined actions of all players.
>
> **[3:24](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/game-theory-and-strategic-interaction?u=76281980&t=204)** We all want to be winners.
>
> **[3:25](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/game-theory-and-strategic-interaction?u=76281980&t=205)** The agents do as well.
>
> **[3:27](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/game-theory-and-strategic-interaction?u=76281980&t=207)** Of course, the use of game theory goes beyond the field of agentic AI.
>
> **[3:33](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/game-theory-and-strategic-interaction?u=76281980&t=213)** The idea here is that it does have value and benefit to you when you get started defining how your systems will work together.
>
> **[3:43](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/game-theory-and-strategic-interaction?u=76281980&t=223)** If you take time now to reflect on your goals I bet you can think of a game theory concept we've covered here that will benefit the design of your agentic AI system.

> [!info]- Semantic Content
>
> **Analogies:** for example (3), such as (1)
> **Definitions:** is a  (2), means that (1)
> **Code Keywords:** case, (1)
> **Speakers:** - what (1)

#### Negotiation and conflict resolution
> [LinkedIn Learning](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/negotiation-and-conflict-resolution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/negotiation-and-conflict-resolution?u=76281980&t=0)** - Negotiation and conflict resolution in agentic AI involves the protocols agents follow to reach agreements.
>
> **[0:09](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/negotiation-and-conflict-resolution?u=76281980&t=9)** This is very much like you resolve issues with other humans.
>
> **[0:13](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/negotiation-and-conflict-resolution?u=76281980&t=13)** You have a discussion, and come to a friendly agreement.
>
> **[0:17](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/negotiation-and-conflict-resolution?u=76281980&t=17)** As we discussed earlier in this course, protocols are agreed upon mechanisms for how agents communicate.
>
> **[0:24](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/negotiation-and-conflict-resolution?u=76281980&t=24)** Simply put, these predefined rules dictate the flow of communications.
>
> **[0:30](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/negotiation-and-conflict-resolution?u=76281980&t=30)** Negotiation protocols therefore structure the interaction or process between agents during a negotiation.
>
> **[0:38](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/negotiation-and-conflict-resolution?u=76281980&t=38)** They do this by outlining steps, actions, and the overall process agents must follow to reach consensus.
>
> **[0:46](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/negotiation-and-conflict-resolution?u=76281980&t=46)** For instance, say that an agent found a violation of a rule in how data is stored in an inventory control application.
>
> **[0:56](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/negotiation-and-conflict-resolution?u=76281980&t=56)** It may communicate this violation to other agents, but what if the other agents disagreed on whether or not the action was a violation?
>
> **[1:05](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/negotiation-and-conflict-resolution?u=76281980&t=65)** This disagreement can trigger a negotiation, with the goal of reaching an agreement.
>
> **[1:11](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/negotiation-and-conflict-resolution?u=76281980&t=71)** Or if an agreement is not reached, a human could be added to the interaction to reach resolution.
>
> **[1:19](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/negotiation-and-conflict-resolution?u=76281980&t=79)** Next, using utility functions help agents evaluate and prioritize different negotiations.
>
> **[1:26](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/negotiation-and-conflict-resolution?u=76281980&t=86)** For example, when a need for negotiation is triggered, each agent employees a utility function to measure the desirability of any number of options to resolve the conflict.
>
> **[1:38](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/negotiation-and-conflict-resolution?u=76281980&t=98)** It's a mathematical representation that allows agents to make decisions based on their goals, objectives, and even constraints.
>
> **[1:47](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/negotiation-and-conflict-resolution?u=76281980&t=107)** Utility functions help agents identify trade-offs, and which trade-offs are acceptable and which are unacceptable.
>
> **[1:54](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/negotiation-and-conflict-resolution?u=76281980&t=114)** These functions also help agents analyze which outcomes maximize utility.
>
> **[2:00](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/negotiation-and-conflict-resolution?u=76281980&t=120)** For example, say an agent has a predefined list of optimized outcomes for a company service that provides price recommendations for products.
>
> **[2:10](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/negotiation-and-conflict-resolution?u=76281980&t=130)** A utility function will help that agent analyze the most optimized outcomes to ensure that the other agents understand the agent's goals.
>
> **[2:19](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/negotiation-and-conflict-resolution?u=76281980&t=139)** It's critical that a system is designed with clear end goals because when agents share goals, they can successfully implement conflict resolution strategies.
>
> **[2:31](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/negotiation-and-conflict-resolution?u=76281980&t=151)** Without clear goals, disputes between agents ultimately impede the entire system's operations.
>
> **[2:38](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/negotiation-and-conflict-resolution?u=76281980&t=158)** Conflict resolution protocols should also outline the actions that agents should never take.
>
> **[2:44](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/negotiation-and-conflict-resolution?u=76281980&t=164)** These are modeled after the laws that humans use to resolve agreements, often incorporate principles of fairness and equity.
>
> **[2:54](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/negotiation-and-conflict-resolution?u=76281980&t=174)** What is really exceptional about agentic AI systems is that when resolution is achieved, agents learn from that interaction.
>
> **[3:02](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/negotiation-and-conflict-resolution?u=76281980&t=182)** I bet that you resolve conflict very differently now than when you were five years old.
>
> **[3:07](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/negotiation-and-conflict-resolution?u=76281980&t=187)** It's the same with agents.
>
> **[3:09](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/negotiation-and-conflict-resolution?u=76281980&t=189)** They automatically improve their negotiation and conflict resolution processes and outcomes over time.
>
> **[3:15](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/negotiation-and-conflict-resolution?u=76281980&t=195)** The agents also analyze past negative outcomes, and optimize how they approach future negotiations.
>
> **[3:23](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/negotiation-and-conflict-resolution?u=76281980&t=203)** They make agentic AI that much more interesting.

> [!info]- Semantic Content
>
> **Analogies:** for example (2), for instance (1)
> **CLI Commands:** make (2)
> **Code Keywords:** function (2)
> **Cross-References:** we discussed (1), earlier in (1)
> **Speakers:** - negotiation (1)


### 6. Ethical and Societal Implications

> [↑ Back to Table of Contents](#table-of-contents)

#### Ethical frameworks and considerations in AI
> [LinkedIn Learning](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/ethical-frameworks-and-considerations-in-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/ethical-frameworks-and-considerations-in-ai?u=76281980&t=0)** - Imagine if the press discovered that a system which was charged with approving bank loans for a major bank brand was turning down loan applications for people of a certain race.
>
> **[0:11](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/ethical-frameworks-and-considerations-in-ai?u=76281980&t=11)** That would be illegal and embarrassment for the bank, and just plain wrong.
>
> **[0:16](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/ethical-frameworks-and-considerations-in-ai?u=76281980&t=16)** Ethics needs to factor into the design, build, deployment, and operations of Agentic AI systems.
>
> **[0:23](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/ethical-frameworks-and-considerations-in-ai?u=76281980&t=23)** This requires that your organization define how it sees fairness, bias, transparency, accountability, privacy, and data protection.
>
> **[0:32](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/ethical-frameworks-and-considerations-in-ai?u=76281980&t=32)** Once that work is done, ethical frameworks in Agentic AI can be designed.
>
> **[0:38](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/ethical-frameworks-and-considerations-in-ai?u=76281980&t=38)** So how do we ensure fairness with frameworks?
>
> **[0:42](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/ethical-frameworks-and-considerations-in-ai?u=76281980&t=42)** Fairness frameworks help developers design systems that minimize bias within AI systems.
>
> **[0:49](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/ethical-frameworks-and-considerations-in-ai?u=76281980&t=49)** These direct agents on identifying and reducing biases by ensuring data sets represent diverse, inclusive perspectives.
>
> **[0:58](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/ethical-frameworks-and-considerations-in-ai?u=76281980&t=58)** We're training the bias out of our agents and when done right, all users are treated equitably regardless of race, gender, or age.
>
> **[1:07](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/ethical-frameworks-and-considerations-in-ai?u=76281980&t=67)** However, it is a common idea in ethics that a system cannot truly treat others fairly without considering transparency and explainability.
>
> **[1:17](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/ethical-frameworks-and-considerations-in-ai?u=76281980&t=77)** Transparency and explainability focus on making the inner workings of AI systems understandable to all stakeholders.
>
> **[1:24](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/ethical-frameworks-and-considerations-in-ai?u=76281980&t=84)** Transparency involves openly sharing the processes, data and logic behind a systems decisions.
>
> **[1:32](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/ethical-frameworks-and-considerations-in-ai?u=76281980&t=92)** Explainability refers to the ability to clearly provide clear explanations of AI decisions and documenting the design and decision making processes.
>
> **[1:41](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/ethical-frameworks-and-considerations-in-ai?u=76281980&t=101)** By incorporating these principles into your design, it meets the trust but verify process that most stakeholders desire.
>
> **[1:49](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/ethical-frameworks-and-considerations-in-ai?u=76281980&t=109)** Stakeholders don't want the bad press or bad feeling of hurting people based on issues with their Agentic AI system.
>
> **[1:56](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/ethical-frameworks-and-considerations-in-ai?u=76281980&t=116)** This fosters trust and accountability.
>
> **[1:59](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/ethical-frameworks-and-considerations-in-ai?u=76281980&t=119)** Also, that makes it so there is an audit trail.
>
> **[2:03](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/ethical-frameworks-and-considerations-in-ai?u=76281980&t=123)** All actions are documented.
>
> **[2:06](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/ethical-frameworks-and-considerations-in-ai?u=76281980&t=126)** Now, I want to talk a bit more about accountability with you.
>
> **[2:10](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/ethical-frameworks-and-considerations-in-ai?u=76281980&t=130)** You want to design and build these systems to keep track of themselves so that issues can be found and eliminated.
>
> **[2:16](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/ethical-frameworks-and-considerations-in-ai?u=76281980&t=136)** This involves establishing governance policies and procedures and defining liabilities for any harm or errors caused by AI systems.
>
> **[2:25](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/ethical-frameworks-and-considerations-in-ai?u=76281980&t=145)** Developers must operate within legal boundaries and ethical standards.
>
> **[2:30](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/ethical-frameworks-and-considerations-in-ai?u=76281980&t=150)** There is a lot at stake, including heavy fines and reputational damage if these issues go undiscovered.
>
> **[2:36](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/ethical-frameworks-and-considerations-in-ai?u=76281980&t=156)** No pressure.
>
> **[2:37](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/ethical-frameworks-and-considerations-in-ai?u=76281980&t=157)** So let's not forget the right to privacy and data protection.
>
> **[2:42](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/ethical-frameworks-and-considerations-in-ai?u=76281980&t=162)** How would you like an AI agent to transmit your personal information to an outside identity?
>
> **[2:48](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/ethical-frameworks-and-considerations-in-ai?u=76281980&t=168)** Not good.
>
> **[2:49](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/ethical-frameworks-and-considerations-in-ai?u=76281980&t=169)** To help with data protection.
>
> **[2:51](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/ethical-frameworks-and-considerations-in-ai?u=76281980&t=171)** AI development should emphasize data minimization and anonymization.
>
> **[2:57](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/ethical-frameworks-and-considerations-in-ai?u=76281980&t=177)** Minimization means only collecting data, and anonymizing data means removing anything that would allow the data to be associated with a person.
>
> **[3:07](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/ethical-frameworks-and-considerations-in-ai?u=76281980&t=187)** An example would be having an agent expose your medical history, including your personal information.
>
> **[3:13](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/ethical-frameworks-and-considerations-in-ai?u=76281980&t=193)** By concentrating on these core concepts, Agentic AI systems can be designed and implemented ethically.
>
> **[3:19](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/ethical-frameworks-and-considerations-in-ai?u=76281980&t=199)** This is not an option.
>
> **[3:21](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/ethical-frameworks-and-considerations-in-ai?u=76281980&t=201)** This is a need.
>
> **[3:22](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/ethical-frameworks-and-considerations-in-ai?u=76281980&t=202)** Ethics should always be a part of the conversation when using AI.

> [!info]- Semantic Content
>
> **Definitions:** is a  (3), refers to (1), is an  (1)
> **Code Keywords:** let (1)
> **Analogies:** imagine (1)
> **Speakers:** - imagine (1)

#### Societal impact of autonomous agents
> [LinkedIn Learning](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/societal-impact-of-autonomous-agents?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/societal-impact-of-autonomous-agents?u=76281980&t=0)** - Along with ethics, what impact does Agentic AI systems have on humans we live with?
>
> **[0:07](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/societal-impact-of-autonomous-agents?u=76281980&t=7)** What is the societal impact?
>
> **[0:09](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/societal-impact-of-autonomous-agents?u=76281980&t=9)** Well, AI automation may displace existing jobs and impact the economy.
>
> **[0:14](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/societal-impact-of-autonomous-agents?u=76281980&t=14)** It comes with great responsibility.
>
> **[0:17](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/societal-impact-of-autonomous-agents?u=76281980&t=17)** The transition requires careful management to balance job displacement with job creation, meaning that often we need to be working with leadership to ensure that we minimize the negative impact on people.
>
> **[0:31](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/societal-impact-of-autonomous-agents?u=76281980&t=31)** The economic implications are significant when considering the function and role of Agentic AI.
>
> **[0:38](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/societal-impact-of-autonomous-agents?u=76281980&t=38)** However, there is also potential to do good, such as creating more and better-paying jobs.
>
> **[0:45](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/societal-impact-of-autonomous-agents?u=76281980&t=45)** Effective regulations and compliance frameworks can help with the goal of doing good.
>
> **[0:50](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/societal-impact-of-autonomous-agents?u=76281980&t=50)** They are needed to keep pace with rapid AI advancements.
>
> **[0:55](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/societal-impact-of-autonomous-agents?u=76281980&t=55)** We are seeing this work happening right now as governance worldwide create laws to ensure AI is used for good and not evil.
>
> **[1:03](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/societal-impact-of-autonomous-agents?u=76281980&t=63)** This includes discussions around agents, legal personhood and rights, and how they should be treated within the legal system.
>
> **[1:11](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/societal-impact-of-autonomous-agents?u=76281980&t=71)** After all, in essence, an AI agent is acting like another employee.
>
> **[1:16](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/societal-impact-of-autonomous-agents?u=76281980&t=76)** They have a persona and make independent decisions.
>
> **[1:20](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/societal-impact-of-autonomous-agents?u=76281980&t=80)** So how should we treat them?
>
> **[1:22](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/societal-impact-of-autonomous-agents?u=76281980&t=82)** Admittedly, it would be interesting to see an AI agent arrested for violating the law.
>
> **[1:27](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/societal-impact-of-autonomous-agents?u=76281980&t=87)** I mean, how would they fit into the handcuffs?
>
> **[1:30](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/societal-impact-of-autonomous-agents?u=76281980&t=90)** Cybersecurity also plays a role in protecting AI systems from malicious attacks.
>
> **[1:35](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/societal-impact-of-autonomous-agents?u=76281980&t=95)** This means preventing them from becoming security risks and giving up protected data, or making them do the bidding of bad actors.
>
> **[1:44](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/societal-impact-of-autonomous-agents?u=76281980&t=104)** These concepts are core to our Agentic AI systems working well as a trusted entity that will become an asset to the end user organization.
>
> **[1:54](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/societal-impact-of-autonomous-agents?u=76281980&t=114)** All of these societal implications need to be considered along with ethical concepts when building and deploying AI agents.
>
> **[2:02](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/societal-impact-of-autonomous-agents?u=76281980&t=122)** Again, do no harm.
>
> **[2:04](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/societal-impact-of-autonomous-agents?u=76281980&t=124)** Hopefully, this is not too much to ask.

> [!info]- Semantic Content
>
> **Code Keywords:** function (1), protected (1)
> **CLI Commands:** make (1)
> **Analogies:** such as (1)
> **Speakers:** - along (1)


### 7. Security and Robustness

> [↑ Back to Table of Contents](#table-of-contents)

#### Security challenges
> [LinkedIn Learning](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/security-challenges?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/security-challenges?u=76281980&t=0)** - Deploying systems that humans don't monitor, or control has both benefits and challenges when it comes to security.
>
> **[0:09](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/security-challenges?u=76281980&t=9)** Primarily, these challenges can be categorized into four important concepts.
>
> **[0:13](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/security-challenges?u=76281980&t=13)** Let's review them together.
>
> **[0:16](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/security-challenges?u=76281980&t=16)** First, AI agents must handle many types of user inputs.
>
> **[0:20](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/security-challenges?u=76281980&t=20)** When they involve multiple steps, these inputs can be unpredictable.
>
> **[0:25](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/security-challenges?u=76281980&t=25)** For example, an AI agent assists a customer in finding and purchasing a product on a website.
>
> **[0:32](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/security-challenges?u=76281980&t=32)** However, a customer decides to split a purchase between several credit cards and PayPal.
>
> **[0:38](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/security-challenges?u=76281980&t=38)** This practice is not unheard of.
>
> **[0:40](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/security-challenges?u=76281980&t=40)** However, for this specific agent, there were no security approaches to deal with this unpredictable process.
>
> **[0:47](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/security-challenges?u=76281980&t=47)** As a result, personal data was exposed, but not because there was any malicious intent.
>
> **[0:52](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/security-challenges?u=76281980&t=52)** The problem was that developers had not considered the sequence of processing credit cards, so their AI agent didn't know what to do.
>
> **[1:01](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/security-challenges?u=76281980&t=61)** The developers could argue they did not foresee this occurring, thus did not create a security system to deal with it.
>
> **[1:08](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/security-challenges?u=76281980&t=68)** But that's not an acceptable excuse.
>
> **[1:10](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/security-challenges?u=76281980&t=70)** Not being able to identify potential risks is a common pattern we see in agentic AI development.
>
> **[1:18](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/security-challenges?u=76281980&t=78)** Also, as we covered in previous videos, the internal decision-making mechanisms AI agents follow can be highly complex and opaque.
>
> **[1:27](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/security-challenges?u=76281980&t=87)** This complexity often makes it difficult to trace and understand the cause of unexpected behavior, errors, or security vulnerabilities.
>
> **[1:36](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/security-challenges?u=76281980&t=96)** To further complicate the matter, AI agents often must operate in diverse environments that are difficult to predict.
>
> **[1:43](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/security-challenges?u=76281980&t=103)** The variability introduces new security risks when agents encounter situations they were not specifically designed, or trained for.
>
> **[1:52](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/security-challenges?u=76281980&t=112)** And again, some of this can lead to security breaches.
>
> **[1:56](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/security-challenges?u=76281980&t=116)** Agents also encounter untrusted external situations.
>
> **[2:01](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/security-challenges?u=76281980&t=121)** I bet your parents were concerned about who you are hanging out with, understanding that some friends can be a bad influence.
>
> **[2:08](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/security-challenges?u=76281980&t=128)** AI agents have the same problems.
>
> **[2:11](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/security-challenges?u=76281980&t=131)** Agentic AI systems need to interact with external entities, such as other systems, other humans, and owned and unowned data.
>
> **[2:20](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/security-challenges?u=76281980&t=140)** These entities may not always be trustworthy.
>
> **[2:23](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/security-challenges?u=76281980&t=143)** Some of these interactions can expose the system to security threats.
>
> **[2:28](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/security-challenges?u=76281980&t=148)** This may include data breaches and manipulation, such as reprogramming your AI agent to work against you.
>
> **[2:36](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/security-challenges?u=76281980&t=156)** There are no perfect security solutions, and agentic AI is specifically challenging.
>
> **[2:42](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/security-challenges?u=76281980&t=162)** However, the first step is understanding what those challenges are.
>
> **[2:46](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/security-challenges?u=76281980&t=166)** Then you can reduce security risks as much as possible.

> [!info]- Semantic Content
>
> **Analogies:** such as (2), for example (1)
> **Code Keywords:** let (1), for. (1)
> **Cross-References:** we covered (1)
> **Speakers:** - deploying (1)

#### Robustness and fault tolerance
> [LinkedIn Learning](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/robustness-and-fault-tolerance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/robustness-and-fault-tolerance?u=76281980&t=0)** - Many AI agents I've built in my career have worked well.
>
> **[0:04](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/robustness-and-fault-tolerance?u=76281980&t=4)** However, a few have had reliability issues discovered during testing, allowing our team to address them before the system was deployed.
>
> **[0:13](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/robustness-and-fault-tolerance?u=76281980&t=13)** If not addressed, a system that lacks reliability will lead to loss of trust in the agent's decision-making.
>
> **[0:20](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/robustness-and-fault-tolerance?u=76281980&t=20)** This can be critical.
>
> **[0:22](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/robustness-and-fault-tolerance?u=76281980&t=22)** Some of these agents could carry out important tasks, such as monitoring a jet engine during flight operations.
>
> **[0:28](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/robustness-and-fault-tolerance?u=76281980&t=28)** To ensure the AI system operates reliably, robustness and fault tolerance are two concepts you want to address in your system design.
>
> **[0:38](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/robustness-and-fault-tolerance?u=76281980&t=38)** Let's examine redundancy first.
>
> **[0:40](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/robustness-and-fault-tolerance?u=76281980&t=40)** This is one of those basic concepts around providing reliability.
>
> **[0:45](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/robustness-and-fault-tolerance?u=76281980&t=45)** We're placing two agents into production, where one will continue if the other stops working.
>
> **[0:51](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/robustness-and-fault-tolerance?u=76281980&t=51)** It's similar to how we're using whole house generators as a backup power when power goes out.
>
> **[0:58](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/robustness-and-fault-tolerance?u=76281980&t=58)** Redundancy ensures that if one part fails, others can take over, maintaining overall system functionality and reliability.
>
> **[1:07](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/robustness-and-fault-tolerance?u=76281980&t=67)** Additionally, automatic failover mechanisms should be developed that switch to backup systems, when primary systems go down.
>
> **[1:14](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/robustness-and-fault-tolerance?u=76281980&t=74)** You need to plan for the event that agents will make mistakes.
>
> **[1:18](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/robustness-and-fault-tolerance?u=76281980&t=78)** Mistakes are not an issue if they are caught and corrected quickly.
>
> **[1:22](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/robustness-and-fault-tolerance?u=76281980&t=82)** I'm talking about error detection and correction.
>
> **[1:26](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/robustness-and-fault-tolerance?u=76281980&t=86)** Error detection algorithms and self-correction techniques allow an agent to identify mistakes in data processing and decision-making.
>
> **[1:34](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/robustness-and-fault-tolerance?u=76281980&t=94)** Then they can adjust their actions or decisions when errors are detected.
>
> **[1:39](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/robustness-and-fault-tolerance?u=76281980&t=99)** For example, an agent can identify an incorrect zip code in a customer order and correct it without humans being involved.
>
> **[1:47](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/robustness-and-fault-tolerance?u=76281980&t=107)** This beats shipping it to the wrong location and incurring the cost of fixing the issues.
>
> **[1:53](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/robustness-and-fault-tolerance?u=76281980&t=113)** Another approach to building more reliable agents is ensuring robust training data.
>
> **[1:59](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/robustness-and-fault-tolerance?u=76281980&t=119)** That training data needs to be diverse and comprehensive.
>
> **[2:03](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/robustness-and-fault-tolerance?u=76281980&t=123)** Why?
>
> **[2:04](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/robustness-and-fault-tolerance?u=76281980&t=124)** Unexpected situations.
>
> **[2:06](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/robustness-and-fault-tolerance?u=76281980&t=126)** Covering a wide range of scenarios is vital, which means that the Agentic AI System can handle whatever potential scenario.
>
> **[2:15](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/robustness-and-fault-tolerance?u=76281980&t=135)** As adults, we understand much more than we did as children.
>
> **[2:19](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/robustness-and-fault-tolerance?u=76281980&t=139)** We have been exposed to more experiences, so we can deal with more complex problems.
>
> **[2:25](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/robustness-and-fault-tolerance?u=76281980&t=145)** This is the same concept in Agentic AI.
>
> **[2:28](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/robustness-and-fault-tolerance?u=76281980&t=148)** We also need to consider implementing system monitoring and diagnostics.
>
> **[2:34](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/robustness-and-fault-tolerance?u=76281980&t=154)** Continuous monitoring tracks the AI agent's performance and health in real-time.
>
> **[2:40](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/robustness-and-fault-tolerance?u=76281980&t=160)** This means developing diagnostic tools to scan system behaviors to find issues.
>
> **[2:46](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/robustness-and-fault-tolerance?u=76281980&t=166)** This also means identifying the root causes of false or unexpected actions.
>
> **[2:51](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/robustness-and-fault-tolerance?u=76281980&t=171)** The objective is to keep the system running.
>
> **[2:54](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/robustness-and-fault-tolerance?u=76281980&t=174)** If issues occur, fix them automatically.
>
> **[2:57](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/robustness-and-fault-tolerance?u=76281980&t=177)** Finally, let's discuss the concept of graceful degradation.
>
> **[3:02](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/robustness-and-fault-tolerance?u=76281980&t=182)** At some point, we all experience a cognitive decline as we grow older.
>
> **[3:07](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/robustness-and-fault-tolerance?u=76281980&t=187)** It's a natural part of the aging process.
>
> **[3:09](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/robustness-and-fault-tolerance?u=76281980&t=189)** Agents are no different.
>
> **[3:11](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/robustness-and-fault-tolerance?u=76281980&t=191)** Indeed, planning and implementing strategies for the AI to gracefully degrade it's functionality in case of faults is important.
>
> **[3:19](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/robustness-and-fault-tolerance?u=76281980&t=199)** We don't want the agent to stop operations if there is some degradation, but move to other modes, allowing it to continue even in a diminished state.
>
> **[3:30](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/robustness-and-fault-tolerance?u=76281980&t=210)** Creating safe operational modes that the AI can switch to if significant issues are detected helps ensure minimum harm or disruption.
>
> **[3:39](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/robustness-and-fault-tolerance?u=76281980&t=219)** This ensures that the system maintains some functions, rather than experiencing a complete failure.
>
> **[3:45](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/robustness-and-fault-tolerance?u=76281980&t=225)** Of course, there are many other issues to consider.
>
> **[3:48](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/robustness-and-fault-tolerance?u=76281980&t=228)** Long-term AI operations is a discipline rising.
>
> **[3:53](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/robustness-and-fault-tolerance?u=76281980&t=233)** Perhaps that's a career option for you.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), continue (2), switch (2), self (1), finally, (1)
> **Analogies:** such as (1), similar to (1), for example (1)
> **CLI Commands:** make (1), find (1)
> **UI Navigation:** switch to (2)
> **Definitions:** means that (1), is a  (1)
> **Speakers:** - many (1)


### 8. Agentic AI in the Future

> [↑ Back to Table of Contents](#table-of-contents)

#### The future role of agentic AI in industry 4.0 and beyond
> [LinkedIn Learning](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/the-future-role-of-agentic-ai-in-industry-4-0-and-beyond?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/the-future-role-of-agentic-ai-in-industry-4-0-and-beyond?u=76281980&t=0)** - There was a time that all the capabilities of agents seem like the stuff of science fiction, but where we are today is only the beginning.
>
> **[0:10](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/the-future-role-of-agentic-ai-in-industry-4-0-and-beyond?u=76281980&t=10)** Let's spend some time talking about the future of agentic AI.
>
> **[0:14](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/the-future-role-of-agentic-ai-in-industry-4-0-and-beyond?u=76281980&t=14)** They will be able to do this automatically, freeing up the humans to do whatever humans want to do.
>
> **[0:21](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/the-future-role-of-agentic-ai-in-industry-4-0-and-beyond?u=76281980&t=21)** Agentic AI is moving towards the ability to autonomously analyze vast amounts of data to train itself.
>
> **[0:28](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/the-future-role-of-agentic-ai-in-industry-4-0-and-beyond?u=76281980&t=28)** This will enable it to make real-time decision-making, which could lead to the optimization of industrial processes, such as a manufacturing system in a factory.
>
> **[0:40](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/the-future-role-of-agentic-ai-in-industry-4-0-and-beyond?u=76281980&t=40)** Or automatically improving the process and decision-making of a loan application at a bank.
>
> **[0:47](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/the-future-role-of-agentic-ai-in-industry-4-0-and-beyond?u=76281980&t=47)** In many cases, agents are much better at decision-making than humans.
>
> **[0:52](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/the-future-role-of-agentic-ai-in-industry-4-0-and-beyond?u=76281980&t=52)** We're heading in this direction fast.
>
> **[0:56](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/the-future-role-of-agentic-ai-in-industry-4-0-and-beyond?u=76281980&t=56)** A lot of that speed has to do with predictive maintenance and asset management.
>
> **[1:00](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/the-future-role-of-agentic-ai-in-industry-4-0-and-beyond?u=76281980&t=60)** By continuously monitoring machinery and equipment, agentic AI can predict when maintenance is required.
>
> **[1:08](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/the-future-role-of-agentic-ai-in-industry-4-0-and-beyond?u=76281980&t=68)** It does not just wait for an alarm to go off, but actually looks at the workloads and patterns of work of the equipment or asset, and makes intelligent decisions about when maintenance should be performed.
>
> **[1:21](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/the-future-role-of-agentic-ai-in-industry-4-0-and-beyond?u=76281980&t=81)** For example, having an agent arrange for the installation of new bushings for an industrial robot before the existing bushing fails.
>
> **[1:30](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/the-future-role-of-agentic-ai-in-industry-4-0-and-beyond?u=76281980&t=90)** This has the effect of reducing downtime and extending asset lifespan.
>
> **[1:35](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/the-future-role-of-agentic-ai-in-industry-4-0-and-beyond?u=76281980&t=95)** In some instances, eliminating breakdowns cost $20 million a year to only 1 million.
>
> **[1:43](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/the-future-role-of-agentic-ai-in-industry-4-0-and-beyond?u=76281980&t=103)** This proactive approach allows businesses to avoid costly breakdowns and maintain smooth production processes.
>
> **[1:51](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/the-future-role-of-agentic-ai-in-industry-4-0-and-beyond?u=76281980&t=111)** Production processes like supply chain logistics.
>
> **[1:55](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/the-future-role-of-agentic-ai-in-industry-4-0-and-beyond?u=76281980&t=115)** Remember during the pandemic when the supply chain broke down within some industries?
>
> **[2:00](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/the-future-role-of-agentic-ai-in-industry-4-0-and-beyond?u=76281980&t=120)** Cars and trucks sat in storage waiting for a specific computer chip to show up, and perhaps you had to wait for items that you needed as well.
>
> **[2:10](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/the-future-role-of-agentic-ai-in-industry-4-0-and-beyond?u=76281980&t=130)** That's no way to do business.
>
> **[2:12](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/the-future-role-of-agentic-ai-in-industry-4-0-and-beyond?u=76281980&t=132)** Agentic AI will optimize supply chain operations by predicting demand, automating inventory management, and streamlining logistics.
>
> **[2:21](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/the-future-role-of-agentic-ai-in-industry-4-0-and-beyond?u=76281980&t=141)** In other words, having AI agents coordinate all aspects of the supply chain using perfect information and making perfect decisions, such as the ability to understand that cars and trucks need a specific chip and automation of the coordination of obtaining that chip from any number of suppliers.
>
> **[2:42](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/the-future-role-of-agentic-ai-in-industry-4-0-and-beyond?u=76281980&t=162)** This will enhance efficiency, reduce costs, and improve customer satisfaction through time of delivery and better resource utilization.
>
> **[2:51](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/the-future-role-of-agentic-ai-in-industry-4-0-and-beyond?u=76281980&t=171)** Also, we get our stuff on time.
>
> **[2:54](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/the-future-role-of-agentic-ai-in-industry-4-0-and-beyond?u=76281980&t=174)** A lot of this course was spent explaining multi-agent or agent-to-agent collaboration, but the future is going to have more human-robot collaboration.
>
> **[3:05](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/the-future-role-of-agentic-ai-in-industry-4-0-and-beyond?u=76281980&t=185)** In Industry 4.0, agentic AI will facilitate close collaboration between humans and robots.
>
> **[3:13](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/the-future-role-of-agentic-ai-in-industry-4-0-and-beyond?u=76281980&t=193)** We've all seen those TV shows and movies where robots played characters that interact with humans.
>
> **[3:20](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/the-future-role-of-agentic-ai-in-industry-4-0-and-beyond?u=76281980&t=200)** While there were people inside of those robots, that's no longer the case.
>
> **[3:23](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/the-future-role-of-agentic-ai-in-industry-4-0-and-beyond?u=76281980&t=203)** Interacting with robots allows us to create smart manufacturing environments.
>
> **[3:28](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/the-future-role-of-agentic-ai-in-industry-4-0-and-beyond?u=76281980&t=208)** AI-powered robots can work alongside of human workers to perform complex tasks.
>
> **[3:35](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/the-future-role-of-agentic-ai-in-industry-4-0-and-beyond?u=76281980&t=215)** This leaves humans to do what humans do best, such as innovative problem-solving.
>
> **[3:41](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/the-future-role-of-agentic-ai-in-industry-4-0-and-beyond?u=76281980&t=221)** The robot can carry out tasks that are easier to automate, such as putting a windshield on a Ford truck.
>
> **[3:48](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/the-future-role-of-agentic-ai-in-industry-4-0-and-beyond?u=76281980&t=228)** This has the benefit of enhancing precision and ensuring safety leading to more flexible and adaptable manufacturing processes.
>
> **[3:58](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/the-future-role-of-agentic-ai-in-industry-4-0-and-beyond?u=76281980&t=238)** I bet you can think of a few more things that AI agents can do and will do in the future.
>
> **[4:04](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/the-future-role-of-agentic-ai-in-industry-4-0-and-beyond?u=76281980&t=244)** It's going to be an exciting time.

> [!info]- Semantic Content
>
> **Analogies:** such as (4), for example (1)
> **Code Keywords:** let (1), case. (1)
> **CLI Commands:** make (1)
> **Versions:** 4.0 (1)
> **Definitions:** in other words (1)
> **Speakers:** - there (1)

#### Integration with other technologies
> [LinkedIn Learning](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/integration-with-other-technologies?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/integration-with-other-technologies?u=76281980&t=0)** - Not only do AI agents need to collaborate well with humans, but AI agents need to work and play well with other systems, platforms, applications, and humans.
>
> **[0:12](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/integration-with-other-technologies?u=76281980&t=12)** Let's chat about what is likely to emerge in the next few years.
>
> **[0:17](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/integration-with-other-technologies?u=76281980&t=17)** The fusion of agent AI with IoT, or the Internet of Things, enables smart, interconnected systems and devices that autonomously collect, analyze, and act on data.
>
> **[0:30](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/integration-with-other-technologies?u=76281980&t=30)** We have aspects of this around today; most use their own smart thermostats while most don't use agent AI, it's a given that in the future most will.
>
> **[0:42](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/integration-with-other-technologies?u=76281980&t=42)** This means that these devices will be more intelligent and thus more useful.
>
> **[0:47](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/integration-with-other-technologies?u=76281980&t=47)** Also, ever heard of edge computing?
>
> **[0:50](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/integration-with-other-technologies?u=76281980&t=50)** The mashup of Agentic AI and edge computing allows AI algorithms to be processed closer to the data source, reducing latency and bandwidth usage.
>
> **[1:00](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/integration-with-other-technologies?u=76281980&t=60)** In our smart thermostat example, this means that the thermostat functioning as an edge device can make decisions on its own without having to transmit data back to a master computer.
>
> **[1:13](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/integration-with-other-technologies?u=76281980&t=73)** This also means that when the network is down, your devices running AI agents continue to function.
>
> **[1:20](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/integration-with-other-technologies?u=76281980&t=80)** Integration with blockchain technology also has many benefits.
>
> **[1:24](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/integration-with-other-technologies?u=76281980&t=84)** This includes the ability to enhance data security, transparency, and traceability, things that blockchain is known to be good at.
>
> **[1:32](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/integration-with-other-technologies?u=76281980&t=92)** For example, when considering supply chain management, blockchain provides better integrity by using distributed ledger systems that are tough to trick.
>
> **[1:41](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/integration-with-other-technologies?u=76281980&t=101)** It also ensures the authenticity of data.
>
> **[1:45](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/integration-with-other-technologies?u=76281980&t=105)** AI agents can optimize logistics and inventory processes in real time using blockchain to ensure that all things are tracked and that they are part of a settlement process.
>
> **[1:57](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/integration-with-other-technologies?u=76281980&t=117)** The rise of cloud computing made Agentics possible.
>
> **[2:01](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/integration-with-other-technologies?u=76281980&t=121)** Other things that cloud computing will be handy at are enabling seamless updates and continuous learning for AI agents.
>
> **[2:09](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/integration-with-other-technologies?u=76281980&t=129)** Indeed, today, cloud providers such as AWS, Microsoft, and Google have all seen the advantages of Agentic AI and have built tools for its development and operations.
>
> **[2:21](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/integration-with-other-technologies?u=76281980&t=141)** This relationship will likely continue well into the future.
>
> **[2:26](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/integration-with-other-technologies?u=76281980&t=146)** Finally, the rollout of 5G networks throughout the world has provided high speed, low latency connectivity.
>
> **[2:34](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/integration-with-other-technologies?u=76281980&t=154)** This is on the critical path for real-time communications between Agentic AI systems and other systems or devices.
>
> **[2:41](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/integration-with-other-technologies?u=76281980&t=161)** Given that AI agents work autonomously, meaning on their own, the ability to have ubiquitous communications and 5G does just that.
>
> **[2:51](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/integration-with-other-technologies?u=76281980&t=171)** This supports advanced applications like autonomous vehicles, smart cities, and remote industrial automation.
>
> **[2:57](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/integration-with-other-technologies?u=76281980&t=177)** I bet you can think of ways that 5G can improve how you work and live your life, and Agentic AI is able to leverage the same capabilities to enhance its value to the business.

> [!info]- Semantic Content
>
> **Code Keywords:** continue (2), let (1), function (1), finally, (1)
> **Definitions:** means that (3)
> **CLI Commands:** make (1), aws (1)
> **Analogies:** for example (1), such as (1)
> **Env Vars:** aws (1)
> **Cross-References:** in the next (1)
> **Speakers:** - not (1)


### Conclusion

> [↑ Back to Table of Contents](#table-of-contents)

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/next-steps?u=76281980&t=0)** - Now that we understand the basics of agentic AI, what are the next steps?
>
> **[0:05](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/next-steps?u=76281980&t=5)** Continue learning.
>
> **[0:07](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/next-steps?u=76281980&t=7)** Beyond courses, there are podcasts, YouTube channels, blogs, and other sources you can subscribe to, to keep up with this technology.
>
> **[0:16](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/next-steps?u=76281980&t=16)** Next, try agentic tools.
>
> **[0:18](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/next-steps?u=76281980&t=18)** There are many you can use for free or for a small fee.
>
> **[0:22](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/next-steps?u=76281980&t=22)** Many of these are cloud-based and allow you to create AI agents.
>
> **[0:27](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/next-steps?u=76281980&t=27)** This will allow you to get some hands-on training in terms of what it's like to build and deploy a agentic AI technology.
>
> **[0:34](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/next-steps?u=76281980&t=34)** You'll likely be surprised at how easy it is and how much you'll understand more about this technology.
>
> **[0:40](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/next-steps?u=76281980&t=40)** Or you can change jobs.
>
> **[0:43](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/next-steps?u=76281980&t=43)** AI professionals, including agentic AI experts, are in demand.
>
> **[0:47](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/next-steps?u=76281980&t=47)** Maybe that's what's motivating you to take this course.
>
> **[0:50](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/next-steps?u=76281980&t=50)** Many businesses are willing to train and mentor you in whatever role that they have.
>
> **[0:57](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/next-steps?u=76281980&t=57)** This includes the development of systems, security, governance, operations, et cetera.
>
> **[1:02](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/next-steps?u=76281980&t=62)** Most of these jobs pay well and demand continues to explode.
>
> **[1:07](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/next-steps?u=76281980&t=67)** No matter what you do with this knowledge you acquired here, I hope it's clear to you now that we're standing on the brink of a new frontier, one where artificial intelligence doesn't just follow commands, but understands, anticipates, and collaborates with us.
>
> **[1:23](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/next-steps?u=76281980&t=83)** Let's embrace this incredible potential with responsibility, creativity, and deep commitment to the betterment of us all.
>
> **[1:31](https://www.linkedin.com/learning/agentic-ai-fundamentals-architectures-frameworks-and-applications/next-steps?u=76281980&t=91)** Together, we can shape an AI-driven future where technology amplifies our humanity, driving innovation, and ethical decision making hand in hand.

> [!info]- Semantic Content
>
> **Code Keywords:** continue (1), let (1)
> **Analogies:** it's like (1)
> **Speakers:** - now (1)


## Instructor

- [[David Linthicum]]

## Skills Covered

- AI for Business
- AI Agents
- Artificial Intelligence (AI)

## Path Context

### In [[Building Agentic AI Systems for Tech Leaders]]
← [[Preparing Your Organization For Ai Agents]] | **2 of 7** | [[Transforming Business with AI Agents- Autonomous Efficiency and Decision-Making]] →

## Appears In

- [[Building Agentic AI Systems for Tech Leaders]]

## Related Courses

_Courses sharing skills:_

- [[AI Agents Made Simple- Your Zero-to-Hero Guide to Prompting for Work Automation]] — AI Agents, Artificial Intelligence (AI), AI for Business
- [[Fundamentals of Agentic AI- Business Implications and Ethical Insights]] — AI Agents, Artificial Intelligence (AI), AI for Business
- [[How to Be an Agent Boss- Leading AI Agents at Work]] — AI Agents, Artificial Intelligence (AI), AI for Business
- [[Transforming Business with AI Agents- Autonomous Efficiency and Decision-Making]] — AI Agents, Artificial Intelligence (AI), AI for Business
- [[Preparing Your Organization For Ai Agents]] — AI Agents, Artificial Intelligence (AI), AI for Business

---

[↑ Back to top](#)