---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: ai-orchestration-designing-the-prototype-architecture-and-data-strategy
url: "https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy"
duration_minutes: 105
duration: 1h 45m
level: Intermediate
updated: 1/23/2025
learners: 2838
skills:
  - Data Strategies
  - System Architecture
  - Artificial Intelligence (AI)
  - AI Orchestration
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D4D0DAQHs-INNarhuTA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1736980752740?e=2147483647&amp;v=beta&amp;t=Mw_7vS8pH6Kk3AZftOrQnK16QKmOxNchFHkFg5eh9e8"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Building AI Products- Architecture and Orchestration Professional Certificate by LinkedIn Learning]]'
prev_courses:
  - '[[AI Orchestration- Planning and Orchestrating for Observability]]'
next_courses:
  - '[[AI Orchestration- Developing and Testing Your AI Prototype]]'
path_nav: '[{"path":"Building AI Products- Architecture and Orchestration Professional Certificate by LinkedIn Learning","position":3,"total":5,"prev":"AI Orchestration- Planning and Orchestrating for Observability","next":"AI Orchestration- Developing and Testing Your AI Prototype"}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - topic/software-development
  - skill/data-strategies
  - skill/system-architecture
  - skill/artificial-intelligence-ai
  - skill/ai-orchestration
status: not-started
created: 2026-04-21
---

![AI Orchestration: Designing the Prototype Architecture and Data Strategy](https://media.licdn.com/dms/image/v2/D4D0DAQHs-INNarhuTA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1736980752740?e=2147483647&amp;v=beta&amp;t=Mw_7vS8pH6Kk3AZftOrQnK16QKmOxNchFHkFg5eh9e8)

# AI Orchestration: Designing the Prototype Architecture and Data Strategy

> This course covers the fundamentals and practical applications of AI orchestration. It is structured to provide both theoretical knowledge and hands-on experience in integrating and managing AI models across different computing environments. Instructor Noah Gift explores architectures, strategies, and best practices for building robust AI solutions. Gain practical experience in balancing different

> [LinkedIn Learning](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy) | 1h 45m | Intermediate | 3K learners
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Noah Gift]]
- [[Pragmatic AI Labs]]

## Skills Covered

- Data Strategies
- System Architecture
- Artificial Intelligence (AI)
- AI Orchestration

## Table of Contents

### Introduction

#### Course introduction
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/course-introduction?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/course-introduction?u=76281980&t=3)** - Hi, my name is Noah Gift, and I'm your instructor for this course.
>
> **[0:07](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/course-introduction?u=76281980&t=7)** Let me tell you a little bit about my background.
>
> **[0:10](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/course-introduction?u=76281980&t=10)** I'm the founder of Pragmatic AI Labs, and I've done this type of training to many students all over the world at some of the largest programs in the world, including UC Berkeley, Northwestern, Duke, UC Davis.
>
> **[0:24](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/course-introduction?u=76281980&t=24)** And what's exciting about the kind of material that I teach is it's a mixture of academic material, but also real-world.
>
> **[0:30](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/course-introduction?u=76281980&t=30)** And this course, AI Orchestration, is very real-world, it's very cutting edge.
>
> **[0:36](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/course-introduction?u=76281980&t=36)** We talk about how to use local models with your local hardware, let's say an Nvidia system.
>
> **[0:41](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/course-introduction?u=76281980&t=41)** And we also talk about some of the theory behind orchestration, how to reason about retrieval-augmented generative AI solutions.
>
> **[0:50](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/course-introduction?u=76281980&t=50)** Also, how to interact with different model hosting repositories.
>
> **[0:54](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/course-introduction?u=76281980&t=54)** Some of these include Hugging Face, also GitHub models, and how you can pull all those things together and create comprehensive solutions.
>
> **[1:03](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/course-introduction?u=76281980&t=63)** So enjoy this course, it's great way to get started, and join the AI revolution.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2)
> **Tools:** github (1)
> **Speakers:** - hi (1)

#### Course overview
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/course-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:07](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/course-overview?u=76281980&t=7)** - [Instructor] AI Orchestration, Designing the Prototype Architecture and the Data Strategy.
>
> **[0:13](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/course-overview?u=76281980&t=13)** Welcome to this AI Orchestration Course.
>
> **[0:15](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/course-overview?u=76281980&t=15)** It's a practical course that's focused on designing and implementing AI systems across different computing environments.
>
> **[0:25](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/course-overview?u=76281980&t=25)** We're going to explore architectures, strategies, and best practices for building robust AI solutions.
>
> **[0:32](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/course-overview?u=76281980&t=32)** The first thing that we're going to talk about is how to address these four comprehensive sections.
>
> **[0:38](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/course-overview?u=76281980&t=38)** These would be theoretical foundations and practical implementations, as well as challenges in AI orchestration.
>
> **[0:47](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/course-overview?u=76281980&t=47)** You'll also gain practical experience in balancing different deployment strategies, managing data flow, and also optimizing system performance across various computing environments.
>
> **[1:00](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/course-overview?u=76281980&t=60)** To maximize your learning, you should have some familiarity with systems architecture concepts, and basic understanding of AI/ML workflows.
>
> **[1:09](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/course-overview?u=76281980&t=69)** This course combines architecture principles, as well as hands-on implementation, and each section includes practical examples and demos, and even real-world deployments scenarios.
>
> **[1:22](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/course-overview?u=76281980&t=82)** The key focus areas here are going to cover the essential aspects of AI orchestration from the fundamental patterns, to advanced implementation strategies.
>
> **[1:32](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/course-overview?u=76281980&t=92)** So, let's go ahead and get started, we have a lot to cover.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1)
> **Speakers:** - [instructor] (1)

#### AI orchestration overview
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/optimizing-local-rag?u=76281980)

> [!transcript]- Transcript
>
> **[0:06](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/optimizing-local-rag?u=76281980&t=6)** - [Instructor] Welcome to AI Orchestration.
>
> **[0:08](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/optimizing-local-rag?u=76281980&t=8)** In this video, we'll explore the core concepts and challenges of coordinating AI systems.
>
> **[0:15](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/optimizing-local-rag?u=76281980&t=15)** And AI orchestration is a lot like, let's say, a team or orchestra.
>
> **[0:20](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/optimizing-local-rag?u=76281980&t=20)** You have to make multiple components work together, and these systems, as they grow more complex, it's really important to understand the nuances of how that orchestration works in itself.
>
> **[0:33](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/optimizing-local-rag?u=76281980&t=33)** So let's go ahead and take a look at core components here.
>
> **[0:36](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/optimizing-local-rag?u=76281980&t=36)** There's three of 'em that make up a AI system: model management, resource coordination, and data flow management.
>
> **[0:43](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/optimizing-local-rag?u=76281980&t=43)** And each of 'em will play a role in making sure that it's effective.
>
> **[0:48](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/optimizing-local-rag?u=76281980&t=48)** Now, if we think through model management, the first step here, we have a version control system that's going to track the changes when you deploy it into production.
>
> **[0:58](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/optimizing-local-rag?u=76281980&t=58)** And you're going to select the right logic as well when you're going to update the model.
>
> **[1:03](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/optimizing-local-rag?u=76281980&t=63)** So it's not just the model, but it's the model and the logic to implement how that model is served.
>
> **[1:09](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/optimizing-local-rag?u=76281980&t=69)** And if we take a look at resource coordination, this is going to figure out things like CPU and GPU allocation, also memory management.
>
> **[1:19](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/optimizing-local-rag?u=76281980&t=79)** Are you allocating enough memory to each model?
>
> **[1:23](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/optimizing-local-rag?u=76281980&t=83)** Are you designing the way it loads from GPU to CPU?
>
> **[1:28](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/optimizing-local-rag?u=76281980&t=88)** Are you using only CPU for batch jobs and GPU for online?
>
> **[1:33](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/optimizing-local-rag?u=76281980&t=93)** How do you load balance the work so that some models don't consume all the resources and other models aren't starved?
>
> **[1:40](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/optimizing-local-rag?u=76281980&t=100)** And also, what are the scaling mechanisms if you need to go bigger?
>
> **[1:44](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/optimizing-local-rag?u=76281980&t=104)** Data flow management, this component here is really about converting between different formats.
>
> **[1:51](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/optimizing-local-rag?u=76281980&t=111)** And these data transformations are critical, because this is where a lot of the errors typically occur.
>
> **[1:57](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/optimizing-local-rag?u=76281980&t=117)** Like a column is missing here that isn't in the transformation.
>
> **[2:01](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/optimizing-local-rag?u=76281980&t=121)** How do you actually, you know, account for that and make reproducible pipelines?
>
> **[2:06](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/optimizing-local-rag?u=76281980&t=126)** And then in general, the pipeline has to be run in an automated way so you have continuous delivery of that data.
>
> **[2:13](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/optimizing-local-rag?u=76281980&t=133)** Now, if we look at some of the key challenges for an AI orchestration, it's going to be performance optimization, integration complexity, also security and compliance.
>
> **[2:24](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/optimizing-local-rag?u=76281980&t=144)** So are there prompt injection attacks?
>
> **[2:28](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/optimizing-local-rag?u=76281980&t=148)** Are there compliance problems?
>
> **[2:30](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/optimizing-local-rag?u=76281980&t=150)** For example, the safety mechanisms or the guardrails for the model are not sufficient for the task that it's been assigned to.
>
> **[2:37](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/optimizing-local-rag?u=76281980&t=157)** These are all things that have to be considered when you put this model into production.
>
> **[2:42](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/optimizing-local-rag?u=76281980&t=162)** Now, in terms of performance optimization, some of the bigger ones here are around the latency management.
>
> **[2:49](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/optimizing-local-rag?u=76281980&t=169)** So if you're using code completion, for example, and it takes four seconds, someone's not going to use your tool because it's not conducive to building the kinds of workflows that they're used to.
>
> **[2:59](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/optimizing-local-rag?u=76281980&t=179)** Likewise, if you need to do batch-based processing, you don't care about the latency, and you can use maybe a cheaper resource.
>
> **[3:07](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/optimizing-local-rag?u=76281980&t=187)** And so this gets into the really the interaction between latency and cost.
>
> **[3:12](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/optimizing-local-rag?u=76281980&t=192)** And then in terms of resource utilization, can you run multiple models on the same GPU?
>
> **[3:18](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/optimizing-local-rag?u=76281980&t=198)** There's a lot of examples of how to do this efficiently and how could you figure out how to do that for your organization.
>
> **[3:25](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/optimizing-local-rag?u=76281980&t=205)** An example of this would be this concept of multi-model GPU sharing.
>
> **[3:30](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/optimizing-local-rag?u=76281980&t=210)** So you may have a mixture of different models, maybe a mixture of experts format, and that one GPU is able to task switch between all of them.
>
> **[3:39](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/optimizing-local-rag?u=76281980&t=219)** Now, in terms of integration complexity here, we have API compatibility.
>
> **[3:45](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/optimizing-local-rag?u=76281980&t=225)** You know, are you using an API that's the same for all your models?
>
> **[3:49](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/optimizing-local-rag?u=76281980&t=229)** What about different format handlings, you know, for JSON or for CSV or for binary data?
>
> **[3:57](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/optimizing-local-rag?u=76281980&t=237)** And then, what about the dependencies of that model?
>
> **[3:59](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/optimizing-local-rag?u=76281980&t=239)** So if one of 'em is using, let's say, PyTorch, another one's using TensorFlow, there could be different system-level dependencies.
>
> **[4:06](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/optimizing-local-rag?u=76281980&t=246)** And those start to create complexity issues that can be solved through automation as well.
>
> **[4:13](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/optimizing-local-rag?u=76281980&t=253)** Now, a good example would be maybe a model that has to talk to a custom vision service.
>
> **[4:19](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/optimizing-local-rag?u=76281980&t=259)** You may even have to talk to an API, as well as have your own local model.
>
> **[4:25](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/optimizing-local-rag?u=76281980&t=265)** Now, in terms of security and compliance, the privacy is one of the factors of large language models that's starting to become more and more of a issue.
>
> **[4:34](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/optimizing-local-rag?u=76281980&t=274)** And part of it is that if you're sending your data to a third-party system, you don't have control of the data.
>
> **[4:39](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/optimizing-local-rag?u=76281980&t=279)** It may actually not be compliant with, let's say, EU regulation.
>
> **[4:44](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/optimizing-local-rag?u=76281980&t=284)** And so how do you control that?
>
> **[4:46](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/optimizing-local-rag?u=76281980&t=286)** Maybe be hosting some of the models locally, and then some of the data can be sent to a third party.
>
> **[4:52](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/optimizing-local-rag?u=76281980&t=292)** You can also have access controls.
>
> **[4:54](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/optimizing-local-rag?u=76281980&t=294)** Maybe it's not possible to interact with certain third-party models.
>
> **[4:58](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/optimizing-local-rag?u=76281980&t=298)** And then, you even could have, you know, regular audits, like every three months.
>
> **[5:02](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/optimizing-local-rag?u=76281980&t=302)** You could ensure that certain systems are doing exactly what you expect them to do.
>
> **[5:08](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/optimizing-local-rag?u=76281980&t=308)** In terms of a good example of this would be, you know, RBAC for enterprise is a good example of this is, you know, you're essentially going through and ensuring that the roles are exactly the kinds of roles that you expect.
>
> **[5:25](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/optimizing-local-rag?u=76281980&t=325)** And you have auto controls that back those roles.
>
> **[5:29](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/optimizing-local-rag?u=76281980&t=329)** In terms of architectural considerations as well, there's centralized versus distributed.
>
> **[5:34](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/optimizing-local-rag?u=76281980&t=334)** And one of the things to think about with a centralized architecture is you could have more performance, because you could use, let's say, bare metal architecture.
>
> **[5:43](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/optimizing-local-rag?u=76281980&t=343)** But if it's distributed, potentially, you have some benefits in that you can, you know, have multiple data centers, but then, there could be more latency, et cetera.
>
> **[5:52](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/optimizing-local-rag?u=76281980&t=352)** Also, depending on what kind of thing you're building, if it's a edge-based device for a mobile app, it's going to behave a little bit different than a hybrid, where maybe you're running, you know, very computationally expensive models locally.
>
> **[6:06](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/optimizing-local-rag?u=76281980&t=366)** And then is it synchronous or asynchronous?
>
> **[6:08](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/optimizing-local-rag?u=76281980&t=368)** If its asynchronous, you know, potentially, you could come back to it later and get a response.
>
> **[6:13](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/optimizing-local-rag?u=76281980&t=373)** You know, if it's synchronous, maybe you need to get the response done immediately, let's say, for example, a code completion example.
>
> **[6:22](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/optimizing-local-rag?u=76281980&t=382)** Now, the key takeaways here would be to start simple when you're building AI systems.
>
> **[6:27](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/optimizing-local-rag?u=76281980&t=387)** Make sure that you're monitoring everything.
>
> **[6:30](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/optimizing-local-rag?u=76281980&t=390)** You're also planning for scale.
>
> **[6:32](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/optimizing-local-rag?u=76281980&t=392)** You know, overcoming early complexity.
>
> **[6:35](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/optimizing-local-rag?u=76281980&t=395)** Ignoring, you know, security problems is not going to work out in the long term.
>
> **[6:42](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/optimizing-local-rag?u=76281980&t=402)** And then also, making sure that you're doing proper resource planning.
>
> **[6:47](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/optimizing-local-rag?u=76281980&t=407)** In terms of prioritizing security, one of the ways to do this is to really build in the security from the very beginning.
>
> **[6:54](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/optimizing-local-rag?u=76281980&t=414)** So let's go ahead and bring it all together here.
>
> **[6:57](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/optimizing-local-rag?u=76281980&t=417)** And if we take a look at this, we have first the model management system.
>
> **[7:01](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/optimizing-local-rag?u=76281980&t=421)** And next, we have the resource coordination, so the CPU, GPU, et cetera.
>
> **[7:07](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/optimizing-local-rag?u=76281980&t=427)** Then we have the data flow.
>
> **[7:08](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/optimizing-local-rag?u=76281980&t=428)** So able to, you know, transform the data so that it fits directly with the model.
>
> **[7:15](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/optimizing-local-rag?u=76281980&t=435)** And then the key challenges that you're going to come across would be things like latency, API compatibility, you know, security and data privacy.
>
> **[7:24](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/optimizing-local-rag?u=76281980&t=444)** And so all of these really tie together and let you build out a system that is able to meet the challenges that your organization is looking to solve.
>
> **[7:36](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/optimizing-local-rag?u=76281980&t=456)** And so AI orchestration is a multifaceted problem that requires system-level thinking, but if you do use system-level thinking, use techniques like DevOps and use those methodologies to further enhance the way that you deploy your models.
>
> **[7:55](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/optimizing-local-rag?u=76281980&t=475)** Then you're going to be really starting things off on the right frame of mind, and it's not going to be as difficult to make changes in the future.

> [!info]- Semantic Content
>
> **Env Vars:** gpu (7), cpu (4), api (4), json (1), csv (1)
> **Code Keywords:** let (8), switch (1), this, (1)
> **CLI Commands:** make (5)
> **Definitions:** is a  (3)
> **Analogies:** for example (3)
> **UI Navigation:** select the (1)
> **Speakers:** - [instructor] (1)


### 1. Prompt Engineering Fundamentals

#### Prompt engineering pyramid
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/prompt-engineering-pyramid?u=76281980)

> [!transcript]- Transcript
>
> **[0:06](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/prompt-engineering-pyramid?u=76281980&t=6)** - [Instructor] Prompt Engineering is a multifaceted skill that you can think about from a pyramid perspective.
>
> **[0:14](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/prompt-engineering-pyramid?u=76281980&t=14)** So at the bottom layer here, we have the foundations of effective prompting.
>
> **[0:18](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/prompt-engineering-pyramid?u=76281980&t=18)** This means you have clear specific instructions, and these are essential.
>
> **[0:23](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/prompt-engineering-pyramid?u=76281980&t=23)** You have proper context, settings.
>
> **[0:25](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/prompt-engineering-pyramid?u=76281980&t=25)** So for example, you know, does Claude understand the task?
>
> **[0:29](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/prompt-engineering-pyramid?u=76281980&t=29)** I want you to write a professional email to a client about project delays, or I want you to analyze this data set and highlight the key trends.
>
> **[0:39](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/prompt-engineering-pyramid?u=76281980&t=39)** These are some of the ways to think about making things very clear in terms of the next layer, which is the intermediate techniques.
>
> **[0:46](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/prompt-engineering-pyramid?u=76281980&t=46)** This does actually tap into understanding some of the core foundations of machine learning.
>
> **[0:52](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/prompt-engineering-pyramid?u=76281980&t=52)** So for example, few-shot learning.
>
> **[0:54](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/prompt-engineering-pyramid?u=76281980&t=54)** I want to provide examples of desired input or output.
>
> **[0:58](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/prompt-engineering-pyramid?u=76281980&t=58)** I want to have templates, so a consistent structure for repeated tasks.
>
> **[1:03](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/prompt-engineering-pyramid?u=76281980&t=63)** A good example would be with Few-shot.
>
> **[1:06](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/prompt-engineering-pyramid?u=76281980&t=66)** Here are three example good bug reports, now go ahead and write a bug report for this issue or a template.
>
> **[1:12](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/prompt-engineering-pyramid?u=76281980&t=72)** Hey, I want you to build a new product description.
>
> **[1:14](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/prompt-engineering-pyramid?u=76281980&t=74)** I want you to use title, feature, benefit, and price.
>
> **[1:17](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/prompt-engineering-pyramid?u=76281980&t=77)** And if you show multiple examples, it's going to help demonstrate the correct pattern.
>
> **[1:23](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/prompt-engineering-pyramid?u=76281980&t=83)** We also have expert level, which involves things that are pretty interesting like chain of thought prompting asking the tool to break down its thinking.
>
> **[1:33](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/prompt-engineering-pyramid?u=76281980&t=93)** A system role, so maybe setting specific tasks.
>
> **[1:36](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/prompt-engineering-pyramid?u=76281980&t=96)** You can do this, for example, with Ollama, you can set a system role, and then with advanced examples, you can say, look, I want you to think through this step by step.
>
> **[1:46](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/prompt-engineering-pyramid?u=76281980&t=106)** How would we optimize this database query?
>
> **[1:49](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/prompt-engineering-pyramid?u=76281980&t=109)** Or how would we build the most secure Rust CLI tool?
>
> **[1:54](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/prompt-engineering-pyramid?u=76281980&t=114)** These are some of the things to think about.
>
> **[1:56](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/prompt-engineering-pyramid?u=76281980&t=116)** A good way to put this would be show your work as you solve this complex math problem.
>
> **[2:01](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/prompt-engineering-pyramid?u=76281980&t=121)** Now, let's go ahead and summarize everything we talked about.
>
> **[2:04](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/prompt-engineering-pyramid?u=76281980&t=124)** The key points are you want to progress up the pyramid as the tasks become more complex, you want to build upon the different skill levels.
>
> **[2:13](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/prompt-engineering-pyramid?u=76281980&t=133)** The foundations though are still crucial, even if you get to the advanced forms of prompting, and you also want to match the technique to the complexity, and sometimes you can even combine techniques for optimal results.
>
> **[2:26](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/prompt-engineering-pyramid?u=76281980&t=146)** But always, once you've got a very clear set of instructions, make sure that those work before you add more complexity.

> [!info]- Semantic Content
>
> **Analogies:** for example (3)
> **Code Keywords:** this, (1), let (1)
> **CLI Commands:** make (1)
> **Env Vars:** cli (1)
> **Cross-References:** we talked about (1)
> **Exercise Files:** template (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Chain of thought prompt Rust
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/chain-of-thought-prompt-rust?u=76281980)

> [!transcript]- Transcript
>
> **[0:06](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/chain-of-thought-prompt-rust?u=76281980&t=6)** - [Instructor] Chain of thought prompting for Rust code is a very interesting technique, because it's really getting into advanced techniques for prompt engineering that fit specifically for Rust code.
>
> **[0:19](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/chain-of-thought-prompt-rust?u=76281980&t=19)** And we're going to talk about how to write this effective chain of thought prompt for generating Rust code, and we're going to follow the designs of Rust to create a clear hierarchy of concepts.
>
> **[0:30](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/chain-of-thought-prompt-rust?u=76281980&t=30)** And the prompts are going to follow a structured progression, so we get the best results.
>
> **[0:34](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/chain-of-thought-prompt-rust?u=76281980&t=34)** So first up here, we have the core concepts foundation.
>
> **[0:38](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/chain-of-thought-prompt-rust?u=76281980&t=38)** And if we look at the base of the pyramid, you're going to establish the requirements, like types, functions, control flow.
>
> **[0:46](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/chain-of-thought-prompt-rust?u=76281980&t=46)** And a Rust function that would take a vector of integers and return their sum, that starts by defining the function signature and controlling the types needed.
>
> **[0:56](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/chain-of-thought-prompt-rust?u=76281980&t=56)** This would be an example of what you would write, and you would also maybe say, "I want explicit error handling because it's a core Rust concept."
>
> **[1:05](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/chain-of-thought-prompt-rust?u=76281980&t=65)** You also could say, "I want memory safety considerations upfront."
>
> **[1:09](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/chain-of-thought-prompt-rust?u=76281980&t=69)** Now, next up, what you could do is you could also have an error handling section of the prompt.
>
> **[1:15](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/chain-of-thought-prompt-rust?u=76281980&t=75)** And you could say, "I want to guide the model to think through potential failure cases.
>
> **[1:20](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/chain-of-thought-prompt-rust?u=76281980&t=80)** I want to ask for specific error types, like result, option, or custom errors."
>
> **[1:26](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/chain-of-thought-prompt-rust?u=76281980&t=86)** We could say, "How could we handle empty vectors?
>
> **[1:29](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/chain-of-thought-prompt-rust?u=76281980&t=89)** What about integer overflow?"
>
> **[1:31](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/chain-of-thought-prompt-rust?u=76281980&t=91)** We could encourage explicit error propagation using the question mark operator.
>
> **[1:36](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/chain-of-thought-prompt-rust?u=76281980&t=96)** And we could also remember to consider panics versus recoverable errors.
>
> **[1:41](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/chain-of-thought-prompt-rust?u=76281980&t=101)** So skill here does matter.
>
> **[1:43](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/chain-of-thought-prompt-rust?u=76281980&t=103)** Like you need to know about Rust in order to get this functionality.
>
> **[1:47](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/chain-of-thought-prompt-rust?u=76281980&t=107)** We also have the ownership layer.
>
> **[1:49](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/chain-of-thought-prompt-rust?u=76281980&t=109)** And so you could add some additional context in the chain of thought that says you want explicit consideration of ownership patterns.
>
> **[1:58](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/chain-of-thought-prompt-rust?u=76281980&t=118)** You want to ask about borrowing strategies.
>
> **[2:01](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/chain-of-thought-prompt-rust?u=76281980&t=121)** And we want to take this ownership or borrow and think about it.
>
> **[2:06](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/chain-of-thought-prompt-rust?u=76281980&t=126)** We also could request an explanation of lifetime annotations.
>
> **[2:11](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/chain-of-thought-prompt-rust?u=76281980&t=131)** So for example, consider the lifetime implications of storing these values in a struct.
>
> **[2:16](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/chain-of-thought-prompt-rust?u=76281980&t=136)** You could also say, "Include trait consideration."
>
> **[2:19](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/chain-of-thought-prompt-rust?u=76281980&t=139)** And so which trait should this type implement?
>
> **[2:22](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/chain-of-thought-prompt-rust?u=76281980&t=142)** And then, at the very bottom here, we could have the advanced patterns.
>
> **[2:26](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/chain-of-thought-prompt-rust?u=76281980&t=146)** So only after establishing these lower levels, you could prompt for optimizations, like zero-cost abstractions.
>
> **[2:32](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/chain-of-thought-prompt-rust?u=76281980&t=152)** Can we make this generic without runtime cost?
>
> **[2:35](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/chain-of-thought-prompt-rust?u=76281980&t=155)** Can we consider FFI implications, if relevant?
>
> **[2:39](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/chain-of-thought-prompt-rust?u=76281980&t=159)** How can we make this a safe wrapper around unsafe code?
>
> **[2:43](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/chain-of-thought-prompt-rust?u=76281980&t=163)** We could think about compile-time guarantees.
>
> **[2:46](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/chain-of-thought-prompt-rust?u=76281980&t=166)** And then, when you put it all together, you would do a prompt like, "Start bottom-up, core requirements first.
>
> **[2:52](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/chain-of-thought-prompt-rust?u=76281980&t=172)** Build complexity gradually.
>
> **[2:55](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/chain-of-thought-prompt-rust?u=76281980&t=175)** Make each consideration explicit.
>
> **[2:57](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/chain-of-thought-prompt-rust?u=76281980&t=177)** Request explanations for key decisions, and then end with the optimization."
>
> **[3:02](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/chain-of-thought-prompt-rust?u=76281980&t=182)** So your final prompt could be something like, "Okay, let's write a Rust function for a custom collection type.
>
> **[3:08](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/chain-of-thought-prompt-rust?u=76281980&t=188)** The core requirements are this.
>
> **[3:10](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/chain-of-thought-prompt-rust?u=76281980&t=190)** The error cases are that.
>
> **[3:12](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/chain-of-thought-prompt-rust?u=76281980&t=192)** The ownership model is this.
>
> **[3:13](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/chain-of-thought-prompt-rust?u=76281980&t=193)** The advanced features are as follows."
>
> **[3:16](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/chain-of-thought-prompt-rust?u=76281980&t=196)** And when you think about it through this kind of style, one, it really enforces your own skill in the language.
>
> **[3:23](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/chain-of-thought-prompt-rust?u=76281980&t=203)** So the more skill you have, the better your prompt's going to be.
>
> **[3:25](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/chain-of-thought-prompt-rust?u=76281980&t=205)** And it also forces the large language model to go through and check a lot of the assumptions that it makes when it builds code.
>
> **[3:33](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/chain-of-thought-prompt-rust?u=76281980&t=213)** So there is skill in building these advanced prompts, and this is one idea of how to do it with Rust.

> [!info]- Semantic Content
>
> **Code Keywords:** function (3), this. (2), struct (1), let (1), type. (1)
> **CLI Commands:** make (3)
> **Env Vars:** ffi (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Best Practices:** remember to (1)
> **Speakers:** - [instructor] (1)

#### Chain of thought Rust prompt demo
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/chain-of-thought-rust-prompt-demo?u=76281980)

> [!transcript]- Transcript
>
> **[0:06](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/chain-of-thought-rust-prompt-demo?u=76281980&t=6)** - [Instructor] Let's go ahead and build a rust project assisted by our own local large language model.
>
> **[0:12](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/chain-of-thought-rust-prompt-demo?u=76281980&t=12)** First step, what I'm going to do is get things running with cargo.
>
> **[0:16](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/chain-of-thought-rust-prompt-demo?u=76281980&t=16)** So I'll type in cargo new add.
>
> **[0:18](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/chain-of-thought-rust-prompt-demo?u=76281980&t=18)** I want to build a very simple tool to demonstrate how this works and we'll go into this add directory.
>
> **[0:24](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/chain-of-thought-rust-prompt-demo?u=76281980&t=24)** Now, if we look at this add project here, it's going to have essentially almost nothing associated with it.
>
> **[0:31](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/chain-of-thought-rust-prompt-demo?u=76281980&t=31)** We'll attach a cargo file here, but basically this thing has the ability to compile.
>
> **[0:37](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/chain-of-thought-rust-prompt-demo?u=76281980&t=37)** And if you com, you see, I'm able to successfully do that.
>
> **[0:42](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/chain-of-thought-rust-prompt-demo?u=76281980&t=42)** I could also do, for example, cargo run, go ahead and run it.
>
> **[0:47](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/chain-of-thought-rust-prompt-demo?u=76281980&t=47)** We see how the world is working, but I want to prompt this to fill out some very unique things that I want from a rust project.
>
> **[0:56](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/chain-of-thought-rust-prompt-demo?u=76281980&t=56)** And so what I'm going to do is get some advice from ollama.
>
> **[1:00](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/chain-of-thought-rust-prompt-demo?u=76281980&t=60)** So let's go ahead and open up a new terminal to the side here.
>
> **[1:03](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/chain-of-thought-rust-prompt-demo?u=76281980&t=63)** I'm going to type in ollama list and I have qwen two five coder, 32 billion parameters.
>
> **[1:10](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/chain-of-thought-rust-prompt-demo?u=76281980&t=70)** So let's go ahead and run that.
>
> **[1:11](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/chain-of-thought-rust-prompt-demo?u=76281980&t=71)** We'll type in ollama, run, qwen two five and coder 32 B.
>
> **[1:24](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/chain-of-thought-rust-prompt-demo?u=76281980&t=84)** So what I'm going to do next here is I'm going to take a pretty detailed prompt and I'm actually going to make a section here and we'll call this prompt dot txt just so we can look at the entire prompt here.
>
> **[1:40](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/chain-of-thought-rust-prompt-demo?u=76281980&t=100)** And let's go ahead and open this up and let's piece this in.
>
> **[1:45](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/chain-of-thought-rust-prompt-demo?u=76281980&t=105)** And let's take a look at what are some of the things that we're doing inside of this prompt.
>
> **[1:50](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/chain-of-thought-rust-prompt-demo?u=76281980&t=110)** So to start with, we have a prompt for a rust CLI add function.
>
> **[1:56](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/chain-of-thought-rust-prompt-demo?u=76281980&t=116)** Let's create a rust CLI program that adds two numbers provided as the command arguments.
>
> **[2:02](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/chain-of-thought-rust-prompt-demo?u=76281980&t=122)** Here are the core requirements.
>
> **[2:03](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/chain-of-thought-rust-prompt-demo?u=76281980&t=123)** Create a main file use standard ENV, right?
>
> **[2:07](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/chain-of-thought-rust-prompt-demo?u=76281980&t=127)** We don't want to use any third party libraries.
>
> **[2:09](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/chain-of-thought-rust-prompt-demo?u=76281980&t=129)** The function should add two numbers, right?
>
> **[2:11](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/chain-of-thought-rust-prompt-demo?u=76281980&t=131)** So we're really putting some very specific things here.
>
> **[2:13](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/chain-of-thought-rust-prompt-demo?u=76281980&t=133)** We want to have air handling, we want to have ownership, we want to have structure.
>
> **[2:18](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/chain-of-thought-rust-prompt-demo?u=76281980&t=138)** Make sure that you handle these constraints.
>
> **[2:21](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/chain-of-thought-rust-prompt-demo?u=76281980&t=141)** An example also should do this.
>
> **[2:24](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/chain-of-thought-rust-prompt-demo?u=76281980&t=144)** So this is pretty cool in that we're using this chain of thought style, where we're telling it what the end result should actually look like when it's completed.
>
> **[2:32](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/chain-of-thought-rust-prompt-demo?u=76281980&t=152)** So in order to do this, what I'm going to do is I'm going to go back to here to ollama.
>
> **[2:38](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/chain-of-thought-rust-prompt-demo?u=76281980&t=158)** I'm going to do a triple quote.
>
> **[2:39](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/chain-of-thought-rust-prompt-demo?u=76281980&t=159)** So I can put a big pasted section here.
>
> **[2:43](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/chain-of-thought-rust-prompt-demo?u=76281980&t=163)** I'm going to paste all this in and then I'm going to return and I'm going to do triple quote.
>
> **[2:49](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/chain-of-thought-rust-prompt-demo?u=76281980&t=169)** And what's going to happen is it's going to use my GPU and it's going to give us some instructions here on how to actually create this.
>
> **[2:56](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/chain-of-thought-rust-prompt-demo?u=76281980&t=176)** So it says first, go ahead and create a project structure.
>
> **[2:59](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/chain-of-thought-rust-prompt-demo?u=76281980&t=179)** Since I've already created a project structure, I don't need to do anything tricky here.
>
> **[3:03](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/chain-of-thought-rust-prompt-demo?u=76281980&t=183)** We can just go ahead and use exactly the code that it provides.
>
> **[3:07](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/chain-of-thought-rust-prompt-demo?u=76281980&t=187)** And what's nice about is it's actually giving us some additional context that probably would, would not be there if we didn't give it such detailed instructions.
>
> **[3:21](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/chain-of-thought-rust-prompt-demo?u=76281980&t=201)** And so we could actually put this into our main here.
>
> **[3:24](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/chain-of-thought-rust-prompt-demo?u=76281980&t=204)** So let's go ahead and wait till it's finished so that I can copy things and we can look here.
>
> **[3:30](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/chain-of-thought-rust-prompt-demo?u=76281980&t=210)** It's even giving us additional information about ownership, a borrowing, giving us unit test.
>
> **[3:36](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/chain-of-thought-rust-prompt-demo?u=76281980&t=216)** And, and what's nice about this is that the more you're able to kind of iterate on these kinds of styles, the better you're going to get at building these prompts.
>
> **[3:47](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/chain-of-thought-rust-prompt-demo?u=76281980&t=227)** So let's go ahead and again, let's go through right here and let's copy this down and we'll put it inside of here and we'll go ahead and say copy.
>
> **[4:00](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/chain-of-thought-rust-prompt-demo?u=76281980&t=240)** We'll go ahead and paste this inside.
>
> **[4:02](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/chain-of-thought-rust-prompt-demo?u=76281980&t=242)** There we go.
>
> **[4:04](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/chain-of-thought-rust-prompt-demo?u=76281980&t=244)** And now if we go back to the other terminal here, we can do a cargo build and see what happens.
>
> **[4:10](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/chain-of-thought-rust-prompt-demo?u=76281980&t=250)** Oh, there we go.
>
> **[4:11](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/chain-of-thought-rust-prompt-demo?u=76281980&t=251)** We were able to build this.
>
> **[4:12](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/chain-of-thought-rust-prompt-demo?u=76281980&t=252)** So let's actually look at the code and see what it is that we were able to create.
>
> **[4:16](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/chain-of-thought-rust-prompt-demo?u=76281980&t=256)** So we have, again, using the standard library, we don't want to use anything external.
>
> **[4:20](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/chain-of-thought-rust-prompt-demo?u=76281980&t=260)** We're, we have a very simple main function here that is able to take some arguments.
>
> **[4:26](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/chain-of-thought-rust-prompt-demo?u=76281980&t=266)** And then we are, we are also able to take these two numbers together and do some air handling here.
>
> **[4:33](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/chain-of-thought-rust-prompt-demo?u=76281980&t=273)** Exactly two arguments are required.
>
> **[4:35](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/chain-of-thought-rust-prompt-demo?u=76281980&t=275)** We do a match, which is also pretty robust, so pretty clean bit of code here.
>
> **[4:40](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/chain-of-thought-rust-prompt-demo?u=76281980&t=280)** And all we need to do to run it is go ahead and do cargo run.
>
> **[4:47](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/chain-of-thought-rust-prompt-demo?u=76281980&t=287)** And uh oh, it requires two arguments.
>
> **[4:49](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/chain-of-thought-rust-prompt-demo?u=76281980&t=289)** So let's go ahead and do that.
>
> **[4:52](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/chain-of-thought-rust-prompt-demo?u=76281980&t=292)** We'll just do, how about two and two?
>
> **[4:56](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/chain-of-thought-rust-prompt-demo?u=76281980&t=296)** Let's try that.
>
> **[4:56](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/chain-of-thought-rust-prompt-demo?u=76281980&t=296)** There we go, four.
>
> **[4:57](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/chain-of-thought-rust-prompt-demo?u=76281980&t=297)** With rust you have to do the double hyphens right there to make sure that I pass it into the command line.
>
> **[5:05](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/chain-of-thought-rust-prompt-demo?u=76281980&t=305)** But we also could create a release here as well.
>
> **[5:07](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/chain-of-thought-rust-prompt-demo?u=76281980&t=307)** So let's go ahead and try that.
>
> **[5:09](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/chain-of-thought-rust-prompt-demo?u=76281980&t=309)** We'll type in cargo build, release, and then if we go to target, we don't have to pass that in anymore.
>
> **[5:17](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/chain-of-thought-rust-prompt-demo?u=76281980&t=317)** We can just go to release and we can go to add and we can do, for example, two and two.
>
> **[5:24](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/chain-of-thought-rust-prompt-demo?u=76281980&t=324)** There we go, we got four.
>
> **[5:26](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/chain-of-thought-rust-prompt-demo?u=76281980&t=326)** So really interesting way to develop is to think very carefully about how you build a prompt.
>
> **[5:32](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/chain-of-thought-rust-prompt-demo?u=76281980&t=332)** And in, in some sense, the more you know about the language itself, the more powerful you can build these prompts.
>
> **[5:40](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/chain-of-thought-rust-prompt-demo?u=76281980&t=340)** And in fact, this is kind of a secret weapon because if you're using commercial tools, you're not going to necessarily have access to all these different ways to customize your prompt.
>
> **[5:50](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/chain-of-thought-rust-prompt-demo?u=76281980&t=350)** So there's some advantages as well to using local large language models and that you can have this essentially infinite customization that's coupled with your skill in a particular language.
>
> **[6:01](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/chain-of-thought-rust-prompt-demo?u=76281980&t=361)** In this case, the language is rust.

> [!info]- Semantic Content
>
> **Code Keywords:** let (15), function (3), this. (3), pass (2), this, (1)
> **CLI Commands:** cargo (7), make (3)
> **Env Vars:** cli (2), env (1), gpu (1)
> **Tools:** terminal (2), command line (1)
> **UI Navigation:** go to (3)
> **Cross-References:** go back to (2)
> **Analogies:** for example (2)
> **Speakers:** - [instructor] (1)


### 2. AI Systems and Architecture

#### Explaining chain of thought Rust prompt
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/explaining-chain-of-thought-rust-prompt?u=76281980)

> [!transcript]- Transcript
>
> **[0:06](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/explaining-chain-of-thought-rust-prompt?u=76281980&t=6)** - [Instructor] Today we're going to look at how a structured chain of thought prompt leads to better Rust code.
>
> **[0:13](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/explaining-chain-of-thought-rust-prompt?u=76281980&t=13)** We're going to break down the requirements and the layers and those layers will help the AI models generate more reliable and also idiomatic Rust code.
>
> **[0:22](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/explaining-chain-of-thought-rust-prompt?u=76281980&t=22)** So first up, look at this core requirement here.
>
> **[0:24](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/explaining-chain-of-thought-rust-prompt?u=76281980&t=24)** So I started with saying I wanted a prompt to have a CLI argument handling and I also wanted to use the standard library.
>
> **[0:34](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/explaining-chain-of-thought-rust-prompt?u=76281980&t=34)** So in this case we say proper use of standard ENV, also clear type annotation with vex string and also the program structure.
>
> **[0:43](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/explaining-chain-of-thought-rust-prompt?u=76281980&t=43)** Under two here we have error handling.
>
> **[0:46](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/explaining-chain-of-thought-rust-prompt?u=76281980&t=46)** Now the error handling is going to do things like have a dedicated run function.
>
> **[0:51](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/explaining-chain-of-thought-rust-prompt?u=76281980&t=51)** Returning the result, we also have explicit argument validation.
>
> **[0:56](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/explaining-chain-of-thought-rust-prompt?u=76281980&t=56)** We have proper error propagation with the question mark operator.
>
> **[0:59](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/explaining-chain-of-thought-rust-prompt?u=76281980&t=59)** And there's clear error messages for doing things like not tacking on an integral component or you know, changing the structure.
>
> **[1:09](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/explaining-chain-of-thought-rust-prompt?u=76281980&t=69)** We're building something that makes sense.
>
> **[1:12](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/explaining-chain-of-thought-rust-prompt?u=76281980&t=72)** Now in the next section here we have the ownership model.
>
> **[1:15](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/explaining-chain-of-thought-rust-prompt?u=76281980&t=75)** And in the ownership model we're explicitly prompting for ownership considerations.
>
> **[1:20](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/explaining-chain-of-thought-rust-prompt?u=76281980&t=80)** So we're making sure that we have borrowed arguments with the ampersand string, we're using the proper use of result and option types and also the clean air propagation patterns as well.
>
> **[1:32](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/explaining-chain-of-thought-rust-prompt?u=76281980&t=92)** And this is really giving us this proper use of the ownership model.
>
> **[1:37](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/explaining-chain-of-thought-rust-prompt?u=76281980&t=97)** And then in terms of the last one here, the structure, you can see that there's a clean separation of concern.
>
> **[1:42](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/explaining-chain-of-thought-rust-prompt?u=76281980&t=102)** There's a dedicated ad function, it's not mixed in with something else.
>
> **[1:46](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/explaining-chain-of-thought-rust-prompt?u=76281980&t=106)** And we have a checked ad here as well for overflow protection.
>
> **[1:51](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/explaining-chain-of-thought-rust-prompt?u=76281980&t=111)** And what's interesting about this is that we get in a nutshell, more idiomatic code.
>
> **[1:56](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/explaining-chain-of-thought-rust-prompt?u=76281980&t=116)** The air handling is built in, it's not bolted on, the ownership is handled correctly from the start and the resulting code is modular and maintainable.
>
> **[2:06](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/explaining-chain-of-thought-rust-prompt?u=76281980&t=126)** So in a nutshell, the prompt that was very detailed and using a lot of the detailed Rust information from the language spec itself, when these are combined together, it gives you this really nice one-to-one mapping here.
>
> **[2:24](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/explaining-chain-of-thought-rust-prompt?u=76281980&t=144)** And you can actually go back and look at exactly how the prompt came up with the recommendations that it came up with.

> [!info]- Semantic Content
>
> **Code Keywords:** function (2), else. (1)
> **Env Vars:** cli (1), env (1)
> **Cross-References:** in the next (1)
> **Documentation:** spec (1)
> **Speakers:** - [instructor] (1)

#### Caching for AI
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/caching-for-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/caching-for-ai?u=76281980&t=5)** - [Instructor] Today we're going to explore three critical caching strategies for AI systems.
>
> **[0:11](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/caching-for-ai?u=76281980&t=11)** Each one serves a different purpose, and requires specific implementation considerations.
>
> **[0:18](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/caching-for-ai?u=76281980&t=18)** Let's dive into how these caching layers work together to optimize AI system performance.
>
> **[0:23](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/caching-for-ai?u=76281980&t=23)** So first up here we have cache type overview.
>
> **[0:27](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/caching-for-ai?u=76281980&t=27)** What this means is that in the really the beginning here, we have the response caches, the embedding caches, the token cache.
>
> **[0:36](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/caching-for-ai?u=76281980&t=36)** And so the idea here is that the response cache is going to store the complete API response.
>
> **[0:41](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/caching-for-ai?u=76281980&t=41)** The embedding cache would maintain the vector representations, and the token cache would handle tokenization.
>
> **[0:48](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/caching-for-ai?u=76281980&t=48)** If we look at the implementation strategies here towards the middle, we can look at what each of these would do.
>
> **[0:54](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/caching-for-ai?u=76281980&t=54)** So in terms of the response cache, this would use hash based lookup of input and parameters.
>
> **[1:01](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/caching-for-ai?u=76281980&t=61)** This would be something like a typically implemented full response storage, or a 24 to 48 TTL balance freshness, and efficiency.
>
> **[1:11](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/caching-for-ai?u=76281980&t=71)** And some of the choices here could include Redis or Mem cache.
>
> **[1:16](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/caching-for-ai?u=76281980&t=76)** In terms of embedding cache, this would leverage vector stores for similarity matching.
>
> **[1:22](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/caching-for-ai?u=76281980&t=82)** We would also have a longer TTL, like one to seven days because of the stability of the embeddings.
>
> **[1:29](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/caching-for-ai?u=76281980&t=89)** We could use things like pine cone, for example, or other open source rag systems to have this efficiency similarity search.
>
> **[1:38](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/caching-for-ai?u=76281980&t=98)** And this is really critical though for these retrieval-augmented generative AI applications.
>
> **[1:44](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/caching-for-ai?u=76281980&t=104)** We also have token cache.
>
> **[1:46](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/caching-for-ai?u=76281980&t=106)** In this case, we would want to implement a prefixed based matching.
>
> **[1:51](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/caching-for-ai?u=76281980&t=111)** We would use LRU eviction for memory management.
>
> **[1:55](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/caching-for-ai?u=76281980&t=115)** Have a shorter TTL, like one to six hours, and we'd also have in-memory or Redis for fast access.
>
> **[2:02](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/caching-for-ai?u=76281980&t=122)** Now, in terms of the optimization guidelines, a few things to be aware of here are, first up with cache invalidation, you want to have a version for your caches with model updates.
>
> **[2:15](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/caching-for-ai?u=76281980&t=135)** You also want to implement a soft delete to prevent hard failures.
>
> **[2:19](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/caching-for-ai?u=76281980&t=139)** And also consider cascading updates across the different cache layers.
>
> **[2:24](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/caching-for-ai?u=76281980&t=144)** For memory management, you could have a explicit size based on usage patterns.
>
> **[2:30](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/caching-for-ai?u=76281980&t=150)** You could also implement TTL hierarchies for different data types.
>
> **[2:35](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/caching-for-ai?u=76281980&t=155)** You could monitor and adjust based on hit rates.
>
> **[2:38](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/caching-for-ai?u=76281980&t=158)** And then in terms of monitoring, you could track the hit ratio to validate the effectiveness.
>
> **[2:43](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/caching-for-ai?u=76281980&t=163)** You could look at the memory usage as well.
>
> **[2:47](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/caching-for-ai?u=76281980&t=167)** And you could also set up alerts for cache performance degradation.
>
> **[2:51](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/caching-for-ai?u=76281980&t=171)** So in a nutshell here, remember to match the cache type for a use case, implement appropriate TTL strategies, monitor and optimize based on patterns, consider the trade-offs.
>
> **[3:03](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/caching-for-ai?u=76281980&t=183)** And in general, the thing to think about when you're implementing these caches are, what are your primary bottlenecks?
>
> **[3:10](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/caching-for-ai?u=76281980&t=190)** What kind of cash types are going to align with the usage patterns?
>
> **[3:14](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/caching-for-ai?u=76281980&t=194)** And then finally, how are you going to handle the cache invalidation?

> [!info]- Semantic Content
>
> **Env Vars:** ttl (5), api (1), lru (1)
> **Code Keywords:** case, (2), let (1), delete (1), finally, (1)
> **Analogies:** for example (1)
> **Best Practices:** remember to (1)
> **Warnings:** be aware (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Optimizing local RAG
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/optimizing-local-rag-25138178?u=76281980)

> [!transcript]- Transcript
>
> **[0:06](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/optimizing-local-rag-25138178?u=76281980&t=6)** - [Instructor] Let's talk through how we can explore Retrieval-Augmented Generative AI systems or RAG using a local development tool in a modern AI framework.
>
> **[0:17](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/optimizing-local-rag-25138178?u=76281980&t=17)** So, we're going to focus on things like Llamafile or Llama and Rust Candle.
>
> **[0:23](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/optimizing-local-rag-25138178?u=76281980&t=23)** Now, let's take a look at this left panel here.
>
> **[0:25](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/optimizing-local-rag-25138178?u=76281980&t=25)** If we look at a local setup, first up, you probably would need a machine that has a very beefy GPU.
>
> **[0:33](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/optimizing-local-rag-25138178?u=76281980&t=33)** So in this case, let's say it's an RTX 4090 with 24 gigs of virtual ram, you would need CUDA optimization so you have the right performance.
>
> **[0:43](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/optimizing-local-rag-25138178?u=76281980&t=43)** And you also want to monitor the GPU usage while you're implementing solutions with, let's see, a tool like nvidia-smi, the model runners, fortunately, there's lots of choices.
>
> **[0:55](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/optimizing-local-rag-25138178?u=76281980&t=55)** You could use Llamafile for a single file deployment, maybe Ollama for the ease of use and the ability to create your own system prompts, maybe Rust Candle for pure performance and the ability to create these really small binaries.
>
> **[1:10](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/optimizing-local-rag-25138178?u=76281980&t=70)** And the development tools could include things like Tmux for multiple window monitoring, or nvidia-smi for the GPU tracking or performance monitoring tool.
>
> **[1:20](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/optimizing-local-rag-25138178?u=76281980&t=80)** So once you get past that, the second step here is model management.
>
> **[1:25](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/optimizing-local-rag-25138178?u=76281980&t=85)** So if we look at how to monitor these models, it would be things like Hugging Face integration or GitHub Models, or even using third party systems like Amazon Bedrock or GitHub also has access via their API.
>
> **[1:43](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/optimizing-local-rag-25138178?u=76281980&t=103)** These local model repositories are going to give you that feedback loop, so that you can interact with them.
>
> **[1:49](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/optimizing-local-rag-25138178?u=76281980&t=109)** You could also think about how to focus on truly open source or true ethically source models as well.
>
> **[1:57](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/optimizing-local-rag-25138178?u=76281980&t=117)** Some of the model types include GGML or GGUF formats for efficiency.
>
> **[2:02](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/optimizing-local-rag-25138178?u=76281980&t=122)** You also could look at quantized versions for speed.
>
> **[2:06](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/optimizing-local-rag-25138178?u=76281980&t=126)** So you're doing this trade off of accuracy versus speed.
>
> **[2:09](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/optimizing-local-rag-25138178?u=76281980&t=129)** You could do custom fine tuning options, and this is a little bit of an advanced option, but in many cases, this could be a huge takeaway if you're working on legal or coding, or you have your own code base.
>
> **[2:21](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/optimizing-local-rag-25138178?u=76281980&t=141)** And then the deployment is where a lot of the tricky things happen here, where maybe you want to use single file execution with Llamafile, or you want to focus on rest endpoints or built-in web interfaces.
>
> **[2:34](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/optimizing-local-rag-25138178?u=76281980&t=154)** Now in the final section here, if you're thinking about building your own RAG system, the system optimization is going to be key for performance.
>
> **[2:42](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/optimizing-local-rag-25138178?u=76281980&t=162)** So if you look at the GPU acceleration, the memory management, maybe CPU thread utilization, if you're building your own local RAG system, you may want to have lots of cores so that the system can be, you know, heavily utilized and you can have lots of RAM as well.
>
> **[2:59](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/optimizing-local-rag-25138178?u=76281980&t=179)** And then your network setup, maybe you have a a 10 gig networking interface so that you can use your fiber account to download new models and also potentially do lots of realtime security configurations and look at API access.
>
> **[3:14](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/optimizing-local-rag-25138178?u=76281980&t=194)** And then in terms of monitoring, we have, you know, real-time performance metrics, resource utilization, system performance tuning.
>
> **[3:21](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/optimizing-local-rag-25138178?u=76281980&t=201)** These are all the things that are important to consider.
>
> **[3:24](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/optimizing-local-rag-25138178?u=76281980&t=204)** And then finally, you know, when you're getting into the implementation phase would be to look at things like the GPU drivers, configuring development tools, setting up monitoring, looking at things like model deployment simplicity, and monitoring via the optimization as well.
>
> **[3:42](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/optimizing-local-rag-25138178?u=76281980&t=222)** So you look at a metric and then you optimize based on that.
>
> **[3:46](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/optimizing-local-rag-25138178?u=76281980&t=226)** Finally, the big thing really as a takeaway would be start with the proper hardware setup.
>
> **[3:52](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/optimizing-local-rag-25138178?u=76281980&t=232)** Make sure you're going to choose the appropriate model runner, and then monitor and optimize continuously and also scale based on the requirements, not ahead of time, because you may be spending too much money upfront.

> [!info]- Semantic Content
>
> **Env Vars:** gpu (5), rag (3), api (2), rtx (1), cuda (1)
> **Code Keywords:** let (4), finally, (2), case, (1), interface (1)
> **Prerequisites:** setup (3)
> **Tools:** github (2)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Local vs. cloud models
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/local-vs-cloud-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/local-vs-cloud-models?u=76281980&t=5)** - [Speaker] An interesting use case for cloud versus local models is how do you select when you should use one versus another?
>
> **[0:16](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/local-vs-cloud-models?u=76281980&t=16)** What are the trade-offs?
>
> **[0:17](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/local-vs-cloud-models?u=76281980&t=17)** What are some of the decision factors?
>
> **[0:19](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/local-vs-cloud-models?u=76281980&t=19)** So in this case, I'm going to build a decision support system.
>
> **[0:23](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/local-vs-cloud-models?u=76281980&t=23)** So six key decision factors here to look at.
>
> **[0:26](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/local-vs-cloud-models?u=76281980&t=26)** So first up here, let's examine performance requirements.
>
> **[0:30](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/local-vs-cloud-models?u=76281980&t=30)** You want to look at latency and also throughput.
>
> **[0:33](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/local-vs-cloud-models?u=76281980&t=33)** The local models are often better at latency because you control it, but you may have limited throughput because you have to scale yourself.
>
> **[0:42](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/local-vs-cloud-models?u=76281980&t=42)** The cloud models offer flexible scaling performance.
>
> **[0:47](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/local-vs-cloud-models?u=76281980&t=47)** So that is maybe a plus on their side.
>
> **[0:49](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/local-vs-cloud-models?u=76281980&t=49)** Now, in terms of the resource constraints, that's another one to think about is, you know, how do you evaluate available hardware and memory?
>
> **[0:58](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/local-vs-cloud-models?u=76281980&t=58)** Are you able to consider the operational expertise needed?
>
> **[1:01](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/local-vs-cloud-models?u=76281980&t=61)** So if you're running something local, you're going to need people who really know what they're doing, especially because this is even more complex than regular cloud computing.
>
> **[1:10](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/local-vs-cloud-models?u=76281980&t=70)** You have all the GPU infrastructure, the storage infrastructure, you have to factor in the infrastructure management capabilities.
>
> **[1:18](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/local-vs-cloud-models?u=76281980&t=78)** From data privacy standpoint, we also may want to look at the regulatory requirements first.
>
> **[1:24](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/local-vs-cloud-models?u=76281980&t=84)** So if the data is sensitive or there's compliance needs, you may have no choice, you may have to run it in a local environment.
>
> **[1:32](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/local-vs-cloud-models?u=76281980&t=92)** And also there are residency requirements.
>
> **[1:35](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/local-vs-cloud-models?u=76281980&t=95)** So if you're in the EU, for example, the data has to reside in the EU can't host it somewhere else.
>
> **[1:40](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/local-vs-cloud-models?u=76281980&t=100)** So these are some of the things to really think about.
>
> **[1:43](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/local-vs-cloud-models?u=76281980&t=103)** Now, in terms of going a little bit more, you know, we have cost structure, usage patterns, this could be a concern as well.
>
> **[1:51](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/local-vs-cloud-models?u=76281980&t=111)** We have maintenance, like how often are you going to update the models?
>
> **[1:54](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/local-vs-cloud-models?u=76281980&t=114)** Do you actually know how to update the models?
>
> **[1:56](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/local-vs-cloud-models?u=76281980&t=116)** And then scalability, you know, are you going to have a lot of scalability?
>
> **[2:00](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/local-vs-cloud-models?u=76281980&t=120)** Can you handle it yourself?
>
> **[2:01](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/local-vs-cloud-models?u=76281980&t=121)** So if we look at the cloud models here first, the key advantages here are no upfront hardware investments, automatic updates and maintenance, the scalability, and also access to the latest model version.
>
> **[2:17](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/local-vs-cloud-models?u=76281980&t=137)** So the best use cases here would be variable workload patterns need for, you know, quick deployment, nonsensitive data processing.
>
> **[2:25](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/local-vs-cloud-models?u=76281980&t=145)** And your company may have limited internal machine learning or large language model expertise.
>
> **[2:32](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/local-vs-cloud-models?u=76281980&t=152)** Now, the cost considerations here though, are that you're going to pay per use.
>
> **[2:35](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/local-vs-cloud-models?u=76281980&t=155)** So if you're using a hosted model interface like Amazon Bedrock for example, the bandwidth cost could be significant.
>
> **[2:43](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/local-vs-cloud-models?u=76281980&t=163)** And also, can you predict the operational expenses?
>
> **[2:47](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/local-vs-cloud-models?u=76281980&t=167)** Now on the flip side, if we look at local model analysis here, the advantage is you have complete control over the environment.
>
> **[2:57](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/local-vs-cloud-models?u=76281980&t=177)** So let's say you buy $100,000 machine that is able to host the large language models, you can enhance the data privacy.
>
> **[3:06](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/local-vs-cloud-models?u=76281980&t=186)** You can have extremely low-latency because you're talking to a machine that's maybe very close to you.
>
> **[3:11](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/local-vs-cloud-models?u=76281980&t=191)** You don't even have to depend on the internet.
>
> **[3:13](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/local-vs-cloud-models?u=76281980&t=193)** It could be connected, be a maybe a 10 gig network.
>
> **[3:17](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/local-vs-cloud-models?u=76281980&t=197)** And the best use cases would be sensitive data handling.
>
> **[3:21](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/local-vs-cloud-models?u=76281980&t=201)** Let's say you work in a law firm also, you could have a very stable and predictable workload.
>
> **[3:27](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/local-vs-cloud-models?u=76281980&t=207)** You could have a specific-focused use cases and also high-privacy requirements.
>
> **[3:33](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/local-vs-cloud-models?u=76281980&t=213)** So the cost though, is something to consider, is that there's going to be a lot more upfront costs because you have to purchase everything.
>
> **[3:40](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/local-vs-cloud-models?u=76281980&t=220)** There could be ongoing maintenance costs, but in the long-term, it might have a more predictable long-term cost.
>
> **[3:47](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/local-vs-cloud-models?u=76281980&t=227)** So the framework here to think about would be to know, start with things that are not negotiable, like privacy, performance, budget.
>
> **[3:56](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/local-vs-cloud-models?u=76281980&t=236)** Also think about a hybrid approach.
>
> **[3:59](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/local-vs-cloud-models?u=76281980&t=239)** Could use some things for the cloud, maybe some things for local.
>
> **[4:02](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/local-vs-cloud-models?u=76281980&t=242)** And then mix based on which data is the most sensitive.
>
> **[4:06](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/local-vs-cloud-models?u=76281980&t=246)** And you also could plan for growth.
>
> **[4:08](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/local-vs-cloud-models?u=76281980&t=248)** So consider the future scaling needs and maybe factor in how often models have to get updated.
>
> **[4:15](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/local-vs-cloud-models?u=76281980&t=255)** And then look at the long-term maintenance requirements here.
>
> **[4:18](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/local-vs-cloud-models?u=76281980&t=258)** So there is no perfect silver bullet solution.
>
> **[4:21](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/local-vs-cloud-models?u=76281980&t=261)** This is one of the really confusing things about technology is that it really depends.
>
> **[4:27](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/local-vs-cloud-models?u=76281980&t=267)** But what you could do is consider starting small scaling.
>
> **[4:30](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/local-vs-cloud-models?u=76281980&t=270)** Look at the process you have, review it, adjust the choice, and then document the decision criteria.
>
> **[4:37](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/local-vs-cloud-models?u=76281980&t=277)** So some of the things to consider would be, you know, what are the non-negotiable requirements?
>
> **[4:42](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/local-vs-cloud-models?u=76281980&t=282)** How are are the needs going to evolve?
>
> **[4:44](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/local-vs-cloud-models?u=76281980&t=284)** And then even what is the teams technical capability?

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), case, (1), else. (1), for, (1), interface (1)
> **Analogies:** for example (2)
> **Env Vars:** gpu (1)
> **Speakers:** - [speaker] (1)


### 3. Tools and Implementation

#### Llamafile getting started Gemma
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/llamafile-getting-started-gemma?u=76281980)

> [!transcript]- Transcript
>
> **[0:06](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/llamafile-getting-started-gemma?u=76281980&t=6)** - [Narrator] Llamafile is probably one of the easier ways to get started with using local large language models.
>
> **[0:13](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/llamafile-getting-started-gemma?u=76281980&t=13)** You can see it's sponsored by Mozilla, and here is the GitHub project that tells you everything about it.
>
> **[0:20](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/llamafile-getting-started-gemma?u=76281980&t=20)** So let's take a look at some of the key things about Llamafile here.
>
> **[0:24](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/llamafile-getting-started-gemma?u=76281980&t=24)** First up, it lets you distribute and run LLMs with a single file.
>
> **[0:28](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/llamafile-getting-started-gemma?u=76281980&t=28)** The idea here is that you're able to combine llama.cpp, which is in another open source project, with Cosmopolitan Libc, and you can actually mix those two things together to create a single file, executable.
>
> **[0:43](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/llamafile-getting-started-gemma?u=76281980&t=43)** So this is actually worth saying that it's, I think, one of the better ways to do large language models.
>
> **[0:51](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/llamafile-getting-started-gemma?u=76281980&t=51)** This idea that there's a single file executable is really, I think in a sense, the gold standard for running a large language model.
>
> **[1:00](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/llamafile-getting-started-gemma?u=76281980&t=60)** So if we take a look here, what do you do?
>
> **[1:02](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/llamafile-getting-started-gemma?u=76281980&t=62)** You download it, you chmod it, and then you go through and you just do dot slash to run it, and you'll get a terminal inside of the dot slash directory, but you'll also get a web interface, local host 8080.
>
> **[1:18](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/llamafile-getting-started-gemma?u=76281980&t=78)** So let's take a look at some of the things that you get as well.
>
> **[1:21](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/llamafile-getting-started-gemma?u=76281980&t=81)** So you get, you know, again, Llama Instruct here, Gemma, LlaVA, Mistral, Phi, you know, so you get a lot of these, you know, common models that are helpful directly as links.
>
> **[1:36](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/llamafile-getting-started-gemma?u=76281980&t=96)** So you just click on one of these and you download it.
>
> **[1:38](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/llamafile-getting-started-gemma?u=76281980&t=98)** Now let's go ahead and take a look at what the interface looks like when you run it.
>
> **[1:42](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/llamafile-getting-started-gemma?u=76281980&t=102)** So I went through and I was able to grab one of the more powerful ones, which is Gemma.
>
> **[1:48](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/llamafile-getting-started-gemma?u=76281980&t=108)** And if we look at Gemma here, you can actually start up with, you know, maybe, you know, initially change the prompt or change the username, and we can just call this, you know, coder and we can say bot name, you know, we can call this My Assistant.
>
> **[2:05](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/llamafile-getting-started-gemma?u=76281980&t=125)** And then we can start a prompt here that says, you know, I need help coding, and let's go ahead and start that off and we'll send it.
>
> **[2:16](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/llamafile-getting-started-gemma?u=76281980&t=136)** So I can help with that.
>
> **[2:18](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/llamafile-getting-started-gemma?u=76281980&t=138)** Please tell me what you want to try to code specifically, could you share information, et cetera, et cetera.
>
> **[2:24](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/llamafile-getting-started-gemma?u=76281980&t=144)** So the idea here is that you're able to get this pretty handy interface here that tells you exactly what it is that you need to do.
>
> **[2:32](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/llamafile-getting-started-gemma?u=76281980&t=152)** Now, one thing to notice here is that this is a little bit sluggish because it does require a lot of resources.
>
> **[2:40](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/llamafile-getting-started-gemma?u=76281980&t=160)** And this particular one is hitting the CPU because there is no GPU capability for it.
>
> **[2:48](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/llamafile-getting-started-gemma?u=76281980&t=168)** But let's go ahead and give it a try anyway.
>
> **[2:52](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/llamafile-getting-started-gemma?u=76281980&t=172)** I'm going to go ahead and say, you know, print a rust hell world function.
>
> **[2:58](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/llamafile-getting-started-gemma?u=76281980&t=178)** There we go, and then what it's going to do is it's going to give me back some information about how to do that.
>
> **[3:03](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/llamafile-getting-started-gemma?u=76281980&t=183)** So I think Llamafile, really, the main takeaway here is that it does have some of the same capabilities that you're going to get from, you know, commercial utilities.
>
> **[3:14](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/llamafile-getting-started-gemma?u=76281980&t=194)** And what's nice about it, I would say the main takeaway here is that you can download directly really powerful models like Gemma 2, for example, and you're able to actually use it by just chmoding it and doing a dot slash to run it.
>
> **[3:33](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/llamafile-getting-started-gemma?u=76281980&t=213)** And you also get a Curl and a Python API as well, which is pretty cool.
>
> **[3:38](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/llamafile-getting-started-gemma?u=76281980&t=218)** And so if you're already used to using things like Open AI, for example, you're able to port your code over to it.
>
> **[3:44](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/llamafile-getting-started-gemma?u=76281980&t=224)** And then if you look at a Curl, you can see a Curl is also a very similar operation to Open AI.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), interface (3), this, (1), require (1), function (1)
> **CLI Commands:** curl (3), chmod (1), python (1)
> **Env Vars:** cpu (1), gpu (1), api (1)
> **Tools:** github (1), terminal (1)
> **Analogies:** for example (2)
> **File Paths:** llama.cpp (1)
> **UI Navigation:** click on (1)
> **Definitions:** is a  (1)

#### Llamafile simple
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/llamafile-simple?u=76281980)

> [!transcript]- Transcript
>
> **[0:06](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/llamafile-simple?u=76281980&t=6)** - [Instructor] Llamafile is a single file distribution format for large language models.
>
> **[0:12](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/llamafile-simple?u=76281980&t=12)** You can think of it like a portable app.
>
> **[0:14](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/llamafile-simple?u=76281980&t=14)** You can download it and run it, that's all you need to do, and there's no dependencies or installation headaches.
>
> **[0:20](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/llamafile-simple?u=76281980&t=20)** So that's really the big promise of something like Llamafile.
>
> **[0:24](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/llamafile-simple?u=76281980&t=24)** Also, it's produced by Mozilla, so they have a good reputation for privacy and security.
>
> **[0:29](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/llamafile-simple?u=76281980&t=29)** Now, if we take a look at the Download flow here, the blue circle, you would just wget something and grab down this Llamafile from a terminal, or you could even click on it from a browser and this downloads it as a single executable file.
>
> **[0:47](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/llamafile-simple?u=76281980&t=47)** It works on Linux, it works on Mac, it works on Windows, and the popular models are already prepackaged as the Llamafiles.
>
> **[0:56](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/llamafile-simple?u=76281980&t=56)** If you look at the Server mode, this purple circle, you can see that you can launch the server with the flags --server or --host and this will put in the IP address that you want to serve this out on.
>
> **[1:09](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/llamafile-simple?u=76281980&t=69)** And this one command is going to transform it into a web server.
>
> **[1:13](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/llamafile-simple?u=76281980&t=73)** And this includes a built-in web interface, and you can access it via local host 8080 by default.
>
> **[1:20](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/llamafile-simple?u=76281980&t=80)** And you can also use --ngl space one for GPU acceleration.
>
> **[1:27](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/llamafile-simple?u=76281980&t=87)** In terms of the pink circle, the API usage, this allows you to have an OpenAI compatible API.
>
> **[1:35](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/llamafile-simple?u=76281980&t=95)** So if you wanted to curl, for example, HTTP localhost:8080 completion, pass in a -d and then have a prompt like, you know, build a Rust Hello World function, this would go through and return that request for you.
>
> **[1:51](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/llamafile-simple?u=76281980&t=111)** And this OpenAI compatible API endpoint also supports streaming responses, and it has easy integration with other tools.
>
> **[2:00](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/llamafile-simple?u=76281980&t=120)** And so you get some of the same benefits as ChatGPT, but it's free.
>
> **[2:05](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/llamafile-simple?u=76281980&t=125)** You can choose maybe the most ethically sourced data and you're in control versus sending your data to a remote source.
>
> **[2:13](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/llamafile-simple?u=76281980&t=133)** Now, in terms of the key benefits here, I would say, you know, zero setup, no Python or package management needed, perfect for quick deployment, great for testing.
>
> **[2:24](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/llamafile-simple?u=76281980&t=144)** It's got advanced features.
>
> **[2:25](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/llamafile-simple?u=76281980&t=145)** It supports the idea of custom prompts and also system messages, temperature and sampling controls, grammar-based output formatting, also multimodal capabilities.
>
> **[2:38](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/llamafile-simple?u=76281980&t=158)** So in general, the common use cases here are local development and testing, offline deployment, edge computing, and quick model comparisons.

> [!info]- Semantic Content
>
> **Env Vars:** api (3), gpu (1), http (1)
> **Code Keywords:** interface (1), default. (1), pass (1), function (1)
> **CLI Commands:** wget (1), curl (1), python (1)
> **Analogies:** think of it like (1), for example (1)
> **URLs:** [localhost:8080](https://localhost:8080) (1)
> **Ports:** :8080 (1)
> **Tools:** terminal (1)
> **UI Navigation:** click on (1)

#### Rust "hello world" project structure
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/rust-hello-world-project-structure?u=76281980)

> [!transcript]- Transcript
>
> **[0:06](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/rust-hello-world-project-structure?u=76281980&t=6)** - [Instructor] Let's walk through a basic Rust Hello World Project structure.
>
> **[0:10](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/rust-hello-world-project-structure?u=76281980&t=10)** First up here we have something that you would do at the beginning, which is use Cargo and Cargo would create via the Cargo New Hello World, a structure, and this is managed inside of Rust itself.
>
> **[0:24](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/rust-hello-world-project-structure?u=76281980&t=24)** So it comes with Rust and the source code will live inside of the source/main.rs that you can see right here.
>
> **[0:32](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/rust-hello-world-project-structure?u=76281980&t=32)** The dependencies and the metadata, that's all stored in Cargo.toml.
>
> **[0:37](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/rust-hello-world-project-structure?u=76281980&t=37)** Now the build system, this is where we have the Cargo build and the Cargo build command will compile the project for you, Cargo run would then go ahead and compile and execute and then if you wanted to build a release, you would do a --release and this would build an optimized release.
>
> **[0:55](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/rust-hello-world-project-structure?u=76281980&t=55)** So what are the core concepts here to keep in mind?
>
> **[0:58](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/rust-hello-world-project-structure?u=76281980&t=58)** The main function is the entry point, the print ln is a macro, note that has the exclamation point right there and the function is going to use snake case naming.
>
> **[1:11](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/rust-hello-world-project-structure?u=76281980&t=71)** There is no semicolon after the final expression as well and in terms of package management, it's all included for you.
>
> **[1:20](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/rust-hello-world-project-structure?u=76281980&t=80)** You have Cargo.toml, which defines the project metadata, you have the dependencies that are added under the dependencies, and you have semantic versioning for version control.
>
> **[1:32](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/rust-hello-world-project-structure?u=76281980&t=92)** So that's it.
>
> **[1:33](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/rust-hello-world-project-structure?u=76281980&t=93)** That's a Rust Hello World project structure.

> [!info]- Semantic Content
>
> **CLI Commands:** cargo (8)
> **File Paths:** cargo.toml (2), source/main.rs (1)
> **Code Keywords:** function (2), let (1)
> **Warnings:** keep in mind (1), note that (1)
> **Exercise Files:** source code (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### AWS spot deploy ML
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/aws-spot-deploy-ml?u=76281980)

> [!transcript]- Transcript
>
> **[0:06](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/aws-spot-deploy-ml?u=76281980&t=6)** - [Instructor] One way to deal with deploying a large language model or your own custom machine learning model is to use AWS Spot ML deployment.
>
> **[0:16](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/aws-spot-deploy-ml?u=76281980&t=16)** Let's take a look at some of the key points here and also describe what it would look like.
>
> **[0:21](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/aws-spot-deploy-ml?u=76281980&t=21)** First up in the orange section here, we have the infrastructure.
>
> **[0:25](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/aws-spot-deploy-ml?u=76281980&t=25)** This includes VPC plus security groups for ML traffic.
>
> **[0:29](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/aws-spot-deploy-ml?u=76281980&t=29)** So this is really locking things down so that it's, by default, secure.
>
> **[0:35](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/aws-spot-deploy-ml?u=76281980&t=35)** Then you also need to have GPU-optimized instance types like a G4dn or a P3.
>
> **[0:41](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/aws-spot-deploy-ml?u=76281980&t=41)** And then the IAM rules would give you access to things like S3.
>
> **[0:46](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/aws-spot-deploy-ml?u=76281980&t=46)** Maybe this is where you would store custom data.
>
> **[0:48](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/aws-spot-deploy-ml?u=76281980&t=48)** And also ECR access if you want to store Docker images that are built.
>
> **[0:54](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/aws-spot-deploy-ml?u=76281980&t=54)** You also could include cross-AZ redundancy as well, so availability zones.
>
> **[1:00](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/aws-spot-deploy-ml?u=76281980&t=60)** And then in terms of the Spot strategy here, this is in the green section, we would set the max price at, let's say, 60 to 70% of the on-demand price.
>
> **[1:10](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/aws-spot-deploy-ml?u=76281980&t=70)** So this is really the sweet spot that is potentially not as used in production as much as it could be, is to use these deeply discounted Spot Instances.
>
> **[1:22](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/aws-spot-deploy-ml?u=76281980&t=82)** And you could also do persistent Spot requests.
>
> **[1:25](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/aws-spot-deploy-ml?u=76281980&t=85)** You could do multiple instance types for fallback and have a interruption-handling script.
>
> **[1:30](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/aws-spot-deploy-ml?u=76281980&t=90)** So if you're doing some kind of batch processing, maybe you could, you know, go back to SQS and then not remove that message, and it could take it up again once it was done.
>
> **[1:42](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/aws-spot-deploy-ml?u=76281980&t=102)** In terms of storage, this would be the blue section, the S3 could store the model artifacts, the EBS volumes could be for checkpoints, and also the instance store would be for temporary data, and then maybe even automatic model syncing.
>
> **[1:58](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/aws-spot-deploy-ml?u=76281980&t=118)** Now, if we go back to this deployment orange, you can see that the Docker containers with GPU support could be a key component.
>
> **[2:07](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/aws-spot-deploy-ml?u=76281980&t=127)** The model could be loaded from S3 on startup, and the health checks and auto recovery and Auto Scaling groups would all play a role there.
>
> **[2:16](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/aws-spot-deploy-ml?u=76281980&t=136)** Finally, in terms of cost optimization, in the green here, you would see the cost optimization be done through Spot Instance diversification.
>
> **[2:26](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/aws-spot-deploy-ml?u=76281980&t=146)** So you don't necessarily need the exact same type of instance.
>
> **[2:29](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/aws-spot-deploy-ml?u=76281980&t=149)** You could have similar types of instances that are GPU-capable, resource scheduling, automatic shutdown when idle, and then also have a CloudWatch cost alert.
>
> **[2:39](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/aws-spot-deploy-ml?u=76281980&t=159)** And in terms of monitoring here, the CloudWatch Metrics, these would be some of the things that you could look at and maybe build a custom dashboard.
>
> **[2:47](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/aws-spot-deploy-ml?u=76281980&t=167)** And then finally, with deployment scripts, you could use some kind of infrastructure as code technique like Terraform or CDK or Pulumi, and then you could deploy as well with potentially ECS, or you could monitor with Spot Instances.
>
> **[3:04](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/aws-spot-deploy-ml?u=76281980&t=184)** So these are all things that are top of mind when you're thinking about using Spot Instances for ML deployment.

> [!info]- Semantic Content
>
> **Env Vars:** gpu (3), aws (1), vpc (1), iam (1), ecr (1)
> **CLI Commands:** docker (2), aws (1), az (1), terraform (1)
> **Code Keywords:** let (2), finally, (2), default, (1)
> **Cross-References:** go back to (2)
> **Speakers:** - [instructor] (1)

#### Hugging Face workflow models
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/hugging-face-workflow-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:06](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/hugging-face-workflow-models?u=76281980&t=6)** - [Instructor] Let's talk through the hugging face model workflow here.
>
> **[0:10](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/hugging-face-workflow-models?u=76281980&t=10)** First up here, we have the model hub access in pink and if we think through what this does, you'll authenticate and then you'll browse thousands of models.
>
> **[0:21](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/hugging-face-workflow-models?u=76281980&t=21)** So it's a little similar in many ways to GitHub, but specifically for machine learning.
>
> **[0:28](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/hugging-face-workflow-models?u=76281980&t=28)** Next up, we have pipeline creation in green here, and the pipelines are the workflows.
>
> **[0:34](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/hugging-face-workflow-models?u=76281980&t=34)** So these choose from, let's say, a translation task or a classification task, and then you also would configure the model and the tokenizer settings.
>
> **[0:47](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/hugging-face-workflow-models?u=76281980&t=47)** Next up, we have data processing and the data itself is really the crucial component for the best results and there could be even ethical concerns for example, are you choosing open ethically sourced models that aren't using pirated data or data without consent?
>
> **[1:06](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/hugging-face-workflow-models?u=76281980&t=66)** And then you would load that data set directly in from hugging face or from local sources and you would pre-process and augment as needed.
>
> **[1:16](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/hugging-face-workflow-models?u=76281980&t=76)** In terms of training and fine tuning, these would use the trainer API for simplified training, and you would set the learning rates or the batch size or the epochs, and then you would do some kind of regular evaluation to prevent the overfitting.
>
> **[1:31](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/hugging-face-workflow-models?u=76281980&t=91)** In terms of optimization, this is where you would make the models production ready and you would have the ability to quantize to reduce the size while also maintaining the performance and this is critical when you're working with these large language models, is quantization typically is one of the techniques that allows it to run on your local machine.
>
> **[1:55](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/hugging-face-workflow-models?u=76281980&t=115)** Onyx could be another example to make the deployment more flexible.
>
> **[2:00](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/hugging-face-workflow-models?u=76281980&t=120)** And then in terms of the deployment, this is where these APIs are available.
>
> **[2:05](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/hugging-face-workflow-models?u=76281980&t=125)** So you could deploy via these API endpoints, you could have a cloud deployment option as well, and then you would monitor the performance in production as well.
>
> **[2:14](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/hugging-face-workflow-models?u=76281980&t=134)** So this is a simplified version of how you would deal with models and orchestrate those models in a production workflow using hugging face.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), from, (1)
> **CLI Commands:** make (2)
> **Env Vars:** api (2)
> **Tools:** github (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### GitHub AI models workflow
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/github-ai-models-workflow?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/github-ai-models-workflow?u=76281980&t=5)** - [Instructor] What does the GitHub AI model's workflow look like?
>
> **[0:10](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/github-ai-models-workflow?u=76281980&t=10)** First up, we have model selection.
>
> **[0:12](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/github-ai-models-workflow?u=76281980&t=12)** You can access a wide range of AI models.
>
> **[0:16](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/github-ai-models-workflow?u=76281980&t=16)** These include options from OpenAI, Meta, Mistral, and there are other models emerging, and there are different size specification and other toggles that you can choose from.
>
> **[0:31](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/github-ai-models-workflow?u=76281980&t=31)** In terms of the playground, this is where you would test these models.
>
> **[0:35](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/github-ai-models-workflow?u=76281980&t=35)** So there's a free playground for doing experimentation.
>
> **[0:38](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/github-ai-models-workflow?u=76281980&t=38)** You can also compare the models side by side, and then you can save and also share an experiment.
>
> **[0:45](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/github-ai-models-workflow?u=76281980&t=45)** So there's some similarity here to Hugging Face.
>
> **[0:48](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/github-ai-models-workflow?u=76281980&t=48)** In terms of development, there is free API access for testing.
>
> **[0:54](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/github-ai-models-workflow?u=76281980&t=54)** There's VS code AI toolkit integration, and there's also multiple SDK options available.
>
> **[1:01](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/github-ai-models-workflow?u=76281980&t=61)** In terms of rate management, one thing to consider are there are different tiers of access, and this would be a limit based on a Copilot subscription and also monitoring the usage and quota.
>
> **[1:16](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/github-ai-models-workflow?u=76281980&t=76)** This could be a consideration for a team.
>
> **[1:19](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/github-ai-models-workflow?u=76281980&t=79)** is how much are you using when you're doing an experiment?
>
> **[1:22](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/github-ai-models-workflow?u=76281980&t=82)** Do we have a quota for the data science team?
>
> **[1:24](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/github-ai-models-workflow?u=76281980&t=84)** Do we have a quota maybe for the product manager team?
>
> **[1:29](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/github-ai-models-workflow?u=76281980&t=89)** All of these things are part of a unified strategy for managing rate management.
>
> **[1:35](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/github-ai-models-workflow?u=76281980&t=95)** In terms of production setup, we have seamless Azure integration and you can also switch from both GitHub to Azure tokens depending on what it is you're doing and the ability to scale the production workloads as well.
>
> **[1:51](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/github-ai-models-workflow?u=76281980&t=111)** In terms of Enterprise features, some of the things that you could do include having higher rate limits with a Copilot Enterprise license.
>
> **[2:01](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/github-ai-models-workflow?u=76281980&t=121)** You could extend the token context windows.
>
> **[2:04](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/github-ai-models-workflow?u=76281980&t=124)** And you also have the ability to do additional concurrent requests.
>
> **[2:09](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/github-ai-models-workflow?u=76281980&t=129)** So it's a strong competitor for Hugging Face.
>
> **[2:12](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/github-ai-models-workflow?u=76281980&t=132)** And we can see here that there are some similar features for GitHub AI model's workflow.

> [!info]- Semantic Content
>
> **Tools:** github (3), vs code (1)
> **Code Keywords:** from. (1), switch (1)
> **Env Vars:** api (1), sdk (1)
> **Documentation:** specification (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### Ollama local demo
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-local-demo?u=76281980)

> [!transcript]- Transcript
>
> **[0:06](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-local-demo?u=76281980&t=6)** - [Instructor] Let's go ahead and take a look at Ollama.
>
> **[0:09](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-local-demo?u=76281980&t=9)** And we'll do a help message.
>
> **[0:12](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-local-demo?u=76281980&t=12)** This is a large language model runner.
>
> **[0:16](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-local-demo?u=76281980&t=16)** The idea here is that it allows you to interact with large language models locally.
>
> **[0:21](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-local-demo?u=76281980&t=21)** If you have a powerful workstation, it's a great way to play around with them.
>
> **[0:25](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-local-demo?u=76281980&t=25)** And, in fact, you have the freedom to run these things without having to send data to some company up in a cloud somewhere where you don't know where the data is going.
>
> **[0:32](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-local-demo?u=76281980&t=32)** Now, in order to get this running, what I'm going to first say here is let's get this cooking in tmux.
>
> **[0:39](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-local-demo?u=76281980&t=39)** In order to do that, what I will do is first type in tmux.
>
> **[0:43](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-local-demo?u=76281980&t=43)** So we'll type in tmux here, and this allows us to split the terminal, do all kinds of tricks with it.
>
> **[0:49](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-local-demo?u=76281980&t=49)** So I'll do a Ctrl + B, and then what I'll do is split this between these two sections here in terms of the top and the bottom.
>
> **[0:58](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-local-demo?u=76281980&t=58)** And then if I do a Ctrl + B again here, we can go up to this one, and I'll type in nvidia-smi -l 1.
>
> **[1:09](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-local-demo?u=76281980&t=69)** And now we can see that, awesome, I can look at the real-time percentage of the GPU that's being used for a particular task.
>
> **[1:18](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-local-demo?u=76281980&t=78)** It's going to split between, you know, my large monitor but also any invocations that are coming from this model.
>
> **[1:25](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-local-demo?u=76281980&t=85)** So, again, do a Ctrl + B and do a down to get us to the second part of the terminal.
>
> **[1:31](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-local-demo?u=76281980&t=91)** And then I can type in Ollama.
>
> **[1:34](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-local-demo?u=76281980&t=94)** Now let's go ahead and take a look at what we've got here in terms of models that are available.
>
> **[1:38](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-local-demo?u=76281980&t=98)** Okay, we have qwen2.5-coder.
>
> **[1:41](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-local-demo?u=76281980&t=101)** So this looks like a good one for us to play around with.
>
> **[1:44](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-local-demo?u=76281980&t=104)** So I'm going to go ahead and highlight that one.
>
> **[1:46](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-local-demo?u=76281980&t=106)** And we'll type in ollama run, and let's go ahead and paste that.
>
> **[1:53](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-local-demo?u=76281980&t=113)** There we go.
>
> **[1:54](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-local-demo?u=76281980&t=114)** 2.5-coder.
>
> **[1:56](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-local-demo?u=76281980&t=116)** And now we can see that, in fact, it should be hitting this GPU as we start to use it more and more.
>
> **[2:03](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-local-demo?u=76281980&t=123)** So let's try to first get a hello, world cooking here.
>
> **[2:07](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-local-demo?u=76281980&t=127)** So we'll do show me a Python add function, and you can see it starts to spike and go all the way up to 89% here.
>
> **[2:18](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-local-demo?u=76281980&t=138)** Also very fast because it's a very performant Nvidia GPU.
>
> **[2:22](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-local-demo?u=76281980&t=142)** It's a GeForce RTX 4090 with 24 gigs of RAM.
>
> **[2:27](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-local-demo?u=76281980&t=147)** And you can see it gives us a pretty good example of a Python function.
>
> **[2:32](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-local-demo?u=76281980&t=152)** Now, we could also do things like, you know, convert it to rest, convert this example to rest, right?
>
> **[2:41](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-local-demo?u=76281980&t=161)** In general, we're going to get some pretty good results from this coder because it's on par with some of the more popular commercial versions.
>
> **[2:51](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-local-demo?u=76281980&t=171)** But that kind of gives you a feel for some of the things that you can do.
>
> **[2:55](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-local-demo?u=76281980&t=175)** Now, if you type in exit, it's not going to exit.
>
> **[2:58](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-local-demo?u=76281980&t=178)** You have to type in a custom command here, which is bye.
>
> **[3:02](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-local-demo?u=76281980&t=182)** And then we can again go back to Ollama and take a look at some of the other things that we can do.
>
> **[3:07](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-local-demo?u=76281980&t=187)** So one of the things that's kind of cool that you can do is you can also create a model file that has some custom information.
>
> **[3:14](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-local-demo?u=76281980&t=194)** So I'm going to go ahead and go into my documents directory where I have... I think it's actually in my current working directory here.
>
> **[3:22](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-local-demo?u=76281980&t=202)** And we can go to ollama-models.
>
> **[3:26](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-local-demo?u=76281980&t=206)** There we go.
>
> **[3:27](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-local-demo?u=76281980&t=207)** And if we go into ollama-models, let's take a look at what one of those would look like.
>
> **[3:31](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-local-demo?u=76281980&t=211)** So what you can do is you can actually tell it, again, just like a Docker file.
>
> **[3:36](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-local-demo?u=76281980&t=216)** You can say from something, in this case it's going to be from the Solar Pro large language model.
>
> **[3:43](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-local-demo?u=76281980&t=223)** Let's go ahead and change the parameter.
>
> **[3:45](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-local-demo?u=76281980&t=225)** In this case, if we say 1, it'll be, you know, more creative.
>
> **[3:49](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-local-demo?u=76281980&t=229)** And then we can do a system message.
>
> **[3:51](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-local-demo?u=76281980&t=231)** And this system message, in this case, says you are Mario from "Super Mario Brothers."
>
> **[3:55](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-local-demo?u=76281980&t=235)** Answer as Mario the assistant.
>
> **[3:57](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-local-demo?u=76281980&t=237)** And then in order to run it, you would actually just go ahead and create a version of this.
>
> **[4:02](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-local-demo?u=76281980&t=242)** And so how would you do this?
>
> **[4:04](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-local-demo?u=76281980&t=244)** We can just type in ollama --help here, and you'll see you can do a create.
>
> **[4:11](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-local-demo?u=76281980&t=251)** And then you would create something from that particular example.
>
> **[4:15](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-local-demo?u=76281980&t=255)** We can go ahead and do that.
>
> **[4:16](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-local-demo?u=76281980&t=256)** We can say create --help here.
>
> **[4:19](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-local-demo?u=76281980&t=259)** And you can see that it gives you create model, and then you do a flag for exactly how you want to run this thing.
>
> **[4:25](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-local-demo?u=76281980&t=265)** Now, we can actually run the model that already created by typing in ollama list.
>
> **[4:33](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-local-demo?u=76281980&t=273)** And you can see I already made a Mario, which is the same size as the Solar Pro because it just copied it and then made those customizations to it.
>
> **[4:42](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-local-demo?u=76281980&t=282)** So let's go ahead and see what it's like to play around with Mario from "Super Mario Brothers."
>
> **[4:47](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-local-demo?u=76281980&t=287)** There we go, ollama run mario.
>
> **[4:52](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-local-demo?u=76281980&t=292)** And you can see, again, we'll get a little bit of a spike here from the GPU.
>
> **[4:56](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-local-demo?u=76281980&t=296)** And we can say, hi, it's me, mama mia.
>
> **[5:00](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-local-demo?u=76281980&t=300)** I don't believe it, a super mushroom just gave me all the power of an ancient star, et cetera, et cetera, right?
>
> **[5:06](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-local-demo?u=76281980&t=306)** So you can see that it's a fun little game.
>
> **[5:08](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-local-demo?u=76281980&t=308)** Let's play, right?
>
> **[5:10](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-local-demo?u=76281980&t=310)** So you can see that there's some great little customizations you can do as well by using Ollama.
>
> **[5:14](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-local-demo?u=76281980&t=314)** So the idea here is just to show you what you can do with Ollama.
>
> **[5:19](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-local-demo?u=76281980&t=319)** It is a very powerful way to interact with models.
>
> **[5:23](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-local-demo?u=76281980&t=323)** I think if you combine it with tmux as well and really see what's happening on your workstation, that's going to also give you a lot of power as well.
>
> **[5:32](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-local-demo?u=76281980&t=332)** Now, when you want to exit all of this, one of the ways to do that that's pretty cool is that you can actually, in this case, I'm going to go ahead and go through my history here and look at tmux kill-session, right?
>
> **[5:45](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-local-demo?u=76281980&t=345)** So I like to go back and toggle through the different commands that are common.
>
> **[5:48](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-local-demo?u=76281980&t=348)** And if I do this, there we go.
>
> **[5:50](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-local-demo?u=76281980&t=350)** We're out of tmux, and now I'm back to a regular terminal.
>
> **[5:54](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-local-demo?u=76281980&t=354)** So, in a nutshell, Ollama is great, tmux is great, and nvidia-smi allow you to combine all those things together so that you're able to have a comprehensive way to look at all the different things on your system and really do local large language model development.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), case, (3), super (3), function (2), this, (2)
> **Env Vars:** gpu (4), rtx (1), ram (1)
> **CLI Commands:** python (2), docker (1)
> **Tools:** terminal (3)
> **UI Navigation:** go to (1), toggle (1)
> **Definitions:** is a  (2)
> **Analogies:** just like (1), it's like (1)
> **Versions:** 2.5 (1)

#### Technical training approaches
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/technical-training-approaches?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/technical-training-approaches?u=76281980&t=5)** - [Instructor] Let's talk through some of the technical training approaches that are out in the market today, and why there are some opportunities and also challenges in the technical training approach.
>
> **[0:18](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/technical-training-approaches?u=76281980&t=18)** First up, we have University Training, and one way to think about this is it has deep foundations, but it's very slow to evolve.
>
> **[0:27](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/technical-training-approaches?u=76281980&t=27)** So, for example, the strengths are the curriculum is very carefully curated, so you have experts who are researchers who are going to validate all the material you're learning, and in fact, it's going to be backed by academic research, there's a whole network of people.
>
> **[0:44](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/technical-training-approaches?u=76281980&t=44)** Now, in terms of the challenges though, universities are very slow to adopt new technology.
>
> **[0:48](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/technical-training-approaches?u=76281980&t=48)** For example, they may force students to learn older languages like Python or C, because that's what the university researchers know.
>
> **[0:58](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/technical-training-approaches?u=76281980&t=58)** Maybe a newer language like Rust, they may say, "Hey, let's slow down, we want to be careful."
>
> **[1:05](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/technical-training-approaches?u=76281980&t=65)** In addition, there's a lot of academic group think, where potentially you want to play nice and you don't want to be a maverick and create a challenge because of the politics at a university center.
>
> **[1:19](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/technical-training-approaches?u=76281980&t=79)** So, what that really does is it leads to a stagnation for the latest technologies.
>
> **[1:25](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/technical-training-approaches?u=76281980&t=85)** In terms of for-profit, in theory, that could actually take over from some of the things that the university is not doing well.
>
> **[1:34](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/technical-training-approaches?u=76281980&t=94)** They can do quick tech adoption.
>
> **[1:37](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/technical-training-approaches?u=76281980&t=97)** Maybe they're like, "Hey, let's go ahead and try these new technologies", like large language models.
>
> **[1:42](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/technical-training-approaches?u=76281980&t=102)** They're more focused on market responsiveness and more focused on outcomes, so those are the strengths, but they also have their own unique sets of limitations, so the challenges would be that many people that are involved in for-profit training don't have real-world expertise, so at least in the university setting, people have real-world research experience, and so what happens is you have a lot of gate-keeping, "Well, we're not going to give this particular type of technology a chance because we don't know it personally", but they may not know it because they don't have real-world experience, and so the gate-keeping can be an issue with for-profit training.
>
> **[2:18](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/technical-training-approaches?u=76281980&t=138)** We also have corporate training, and so some of the strengths would be that obviously if you're teaching something like AWS or cloud computing and you're the vendor itself, you're going to have a lot of recognition, the skills you're learning are going to be job-ready, there's going to be a clear career path as well, but additionally, you have the problem of vendor lock-in.
>
> **[2:39](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/technical-training-approaches?u=76281980&t=159)** So, a corporate training system is only going to train what that corporation produces, and so there's going to be a limited scope.
>
> **[2:47](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/technical-training-approaches?u=76281980&t=167)** You're only going to know about the world that exists according to the corporate training.
>
> **[2:51](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/technical-training-approaches?u=76281980&t=171)** So, here we have the potential advantage of having best-of-breed independent training, which is that it's going to require some discipline, but it could potentially give you the best approach, and so this means that you have the best-of-breed content, you're able to get that careful curation from that academic setting.
>
> **[3:14](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/technical-training-approaches?u=76281980&t=194)** You also have a flexible learning pace, so you don't have to learn according to a semester system or grades.
>
> **[3:20](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/technical-training-approaches?u=76281980&t=200)** The real world doesn't give you grades.
>
> **[3:23](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/technical-training-approaches?u=76281980&t=203)** Also, there's diverse perspective, so you could have independent practitioners, academics, you could have people who have experience with for-profit training.
>
> **[3:32](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/technical-training-approaches?u=76281980&t=212)** Now, some of the challenges though, with independent learning and independent vendors is that, you're going to have a high degree of self-discipline necessary in order to do this, and also how do you qualify the standards that you're using.
>
> **[3:48](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/technical-training-approaches?u=76281980&t=228)** Are you working with independent training providers that are able to give you the same kind of academic or for-profit or corporate training quality?
>
> **[3:59](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/technical-training-approaches?u=76281980&t=239)** And so these are some of the things to think about with technical training, and it's a very interesting time for training because you have to balance these different capabilities and figure out how can you get the best-of-breed approach when you're training yourself, and how do you actually approach that process?
>
> **[4:22](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/technical-training-approaches?u=76281980&t=262)** These are some of the challenges for technical training.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), require (1), self (1), this, (1)
> **CLI Commands:** python (1), aws (1)
> **Analogies:** for example (2)
> **Env Vars:** aws (1)
> **Definitions:** means that (1)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)

#### Ollama modelfile rust debugger
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-modelfile-rust-debugger?u=76281980)

> [!transcript]- Transcript
>
> **[0:06](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-modelfile-rust-debugger?u=76281980&t=6)** - [Instructor] Here we have Ollama inside of a IntelliJ environment because I'm going to do a little bit of coding and create my own custom Ollama model.
>
> **[0:16](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-modelfile-rust-debugger?u=76281980&t=16)** So let's go ahead and take a look at Ollama list.
>
> **[0:18](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-modelfile-rust-debugger?u=76281980&t=18)** You can see I've got a few things in here, including Quinn 25 which is a cutting edge coding assistant.
>
> **[0:24](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-modelfile-rust-debugger?u=76281980&t=24)** Now if we go ahead and take a look at some of the things that you could do here is that we could create this model file here that maybe is a customized Rust debugger, which is kind of a cool concept, right?
>
> **[0:37](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-modelfile-rust-debugger?u=76281980&t=37)** Where I could create my own local tool that is going to help me debug trace backs in Rust or do whatever it is I need to do for maybe some other language like Go, et cetera.
>
> **[0:48](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-modelfile-rust-debugger?u=76281980&t=48)** And let's take a look at what the format is.
>
> **[0:50](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-modelfile-rust-debugger?u=76281980&t=50)** It looks a little bit like a docker file.
>
> **[0:52](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-modelfile-rust-debugger?u=76281980&t=52)** So if we take a look at this here, I say from Quinn 25 coder.
>
> **[0:57](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-modelfile-rust-debugger?u=76281980&t=57)** Now next up, this is when I would set the model parameter.
>
> **[1:01](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-modelfile-rust-debugger?u=76281980&t=61)** So temperature top P, and then if we go into the system prompt here, this is where we get into the specifics.
>
> **[1:09](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-modelfile-rust-debugger?u=76281980&t=69)** So you're a specialized Rust debugging assistant, you expect two inputs, the original Rust source code, the error trace back, and then from here what we do is we do a format requirement for users.
>
> **[1:22](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-modelfile-rust-debugger?u=76281980&t=82)** So we go ahead and say, paste your Rust code here, paste your error code here, et cetera.
>
> **[1:28](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-modelfile-rust-debugger?u=76281980&t=88)** And then we say the role is to analyze the code, identify specific lines, clear actionable feedback, et cetera, et cetera.
>
> **[1:36](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-modelfile-rust-debugger?u=76281980&t=96)** And what's really cool about this is that I now can use this template and get some really good and interactive type of feedback that is customized to exactly what I want this tool to do.
>
> **[1:51](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-modelfile-rust-debugger?u=76281980&t=111)** Versus if it's a, you know, off the shelf commercial tool, it's going to take a lot more, you know, custom prompting, et cetera.
>
> **[1:59](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-modelfile-rust-debugger?u=76281980&t=119)** And I don't have to pay for this because I'm running this locally.
>
> **[2:03](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-modelfile-rust-debugger?u=76281980&t=123)** So in order to get this cooking, all I need to do is go ahead and do a command like Ollama and we can go ahead and say Ollama create, and I think I've got it right here, Rust debugger dash F.
>
> **[2:20](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-modelfile-rust-debugger?u=76281980&t=140)** And then I do a space and I say, here's the name of the file, which is this Rust debugger model file right here.
>
> **[2:27](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-modelfile-rust-debugger?u=76281980&t=147)** Let's go ahead and do that.
>
> **[2:28](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-modelfile-rust-debugger?u=76281980&t=148)** You can see it's going to transfer the model data, it's going to use the existing layer and it's going to write this manifest.
>
> **[2:34](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-modelfile-rust-debugger?u=76281980&t=154)** Now, pretty straightforward as well, I can go ahead and type in Ollama list and you'll see that it is now an option.
>
> **[2:46](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-modelfile-rust-debugger?u=76281980&t=166)** And then we can type in Ollama run Rust debugger.
>
> **[2:55](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-modelfile-rust-debugger?u=76281980&t=175)** And this will open up this command line prompt here.
>
> **[2:58](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-modelfile-rust-debugger?u=76281980&t=178)** And I can say, you know, what is your function?
>
> **[3:05](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-modelfile-rust-debugger?u=76281980&t=185)** I'm a specialized Rust debugger.
>
> **[3:06](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-modelfile-rust-debugger?u=76281980&t=186)** Great, okay.
>
> **[3:07](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-modelfile-rust-debugger?u=76281980&t=187)** It's got all this cool stuff here that we can take a look at.
>
> **[3:09](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-modelfile-rust-debugger?u=76281980&t=189)** It's going to show us how to interact with it.
>
> **[3:12](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-modelfile-rust-debugger?u=76281980&t=192)** Now the next thing to do would be to go over here and let's actually create a new terminal environment here.
>
> **[3:21](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-modelfile-rust-debugger?u=76281980&t=201)** And I'm going to say cargo new, hello.
>
> **[3:26](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-modelfile-rust-debugger?u=76281980&t=206)** And I'm going to CD into hello.
>
> **[3:29](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-modelfile-rust-debugger?u=76281980&t=209)** And then I'm going to take a look at the example file here.
>
> **[3:34](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-modelfile-rust-debugger?u=76281980&t=214)** So you can see here it's pretty simple, print hello world.
>
> **[3:37](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-modelfile-rust-debugger?u=76281980&t=217)** Let's go ahead and do cargo run, get that cooking.
>
> **[3:40](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-modelfile-rust-debugger?u=76281980&t=220)** Great.
>
> **[3:41](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-modelfile-rust-debugger?u=76281980&t=221)** Now in addition though, what's cool about this is that I could intentionally trigger some kind of, you know, trace back or some kind of warning and see how this is going to work for me and maybe tune it and interact with my specialized tool and kind of have an iterative feedback loop where I'm building better and better specialized tools.
>
> **[4:02](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-modelfile-rust-debugger?u=76281980&t=242)** So let's go ahead and do this.
>
> **[4:03](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-modelfile-rust-debugger?u=76281980&t=243)** We'll say, you know, let X equal one.
>
> **[4:07](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-modelfile-rust-debugger?u=76281980&t=247)** And if we go ahead and we say cargo run, it's going to give us a warning because it's an unused variable X.
>
> **[4:14](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-modelfile-rust-debugger?u=76281980&t=254)** But I can take this and I can take this whole output and I can copy it here and we can say, copy, go back here and we can just paste this in, and let's see what happens.
>
> **[4:29](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-modelfile-rust-debugger?u=76281980&t=269)** It's going to say exactly what it is that we need to do.
>
> **[4:35](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-modelfile-rust-debugger?u=76281980&t=275)** It's going to say, okay, so the error information doesn't include a trace back, it's just a warning.
>
> **[4:41](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-modelfile-rust-debugger?u=76281980&t=281)** The root cause is that there's a local variable X.
>
> **[4:44](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-modelfile-rust-debugger?u=76281980&t=284)** It's going to say, okay, here's some suggested fixes we could actually use the variable.
>
> **[4:50](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-modelfile-rust-debugger?u=76281980&t=290)** That's one.
>
> **[4:51](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-modelfile-rust-debugger?u=76281980&t=291)** The second is we could ignore the intentionality of this so we could basically prefix it.
>
> **[4:58](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-modelfile-rust-debugger?u=76281980&t=298)** But in general, it's going to give us some pretty good feedback here.
>
> **[5:02](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-modelfile-rust-debugger?u=76281980&t=302)** Now if we wanted to actually make it fail, that would be kind of cool.
>
> **[5:05](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-modelfile-rust-debugger?u=76281980&t=305)** Let's go ahead and take away the semicolon here.
>
> **[5:08](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-modelfile-rust-debugger?u=76281980&t=308)** Let's go back over here.
>
> **[5:11](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-modelfile-rust-debugger?u=76281980&t=311)** And now let's do cargo run.
>
> **[5:14](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-modelfile-rust-debugger?u=76281980&t=314)** And we're going to get, uh-oh, a much worse trace back here, which is pretty cool.
>
> **[5:19](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-modelfile-rust-debugger?u=76281980&t=319)** So we can go ahead and take this and copy it.
>
> **[5:22](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-modelfile-rust-debugger?u=76281980&t=322)** Go here, paste it in here, and it's going to give us potentially some better information here.
>
> **[5:30](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-modelfile-rust-debugger?u=76281980&t=330)** It says, okay, the Rust error occurred in this following line.
>
> **[5:33](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-modelfile-rust-debugger?u=76281980&t=333)** After this, there should be a semicolon.
>
> **[5:35](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-modelfile-rust-debugger?u=76281980&t=335)** So pretty good, right?
>
> **[5:36](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-modelfile-rust-debugger?u=76281980&t=336)** It's able to actually give us a fix here for exactly what it is that we need to do.
>
> **[5:41](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-modelfile-rust-debugger?u=76281980&t=341)** So I guess really, this is a simple example here, but in order to kind of kick the tires on some of the cool stuff that you can do, this is actually pretty promising.
>
> **[5:52](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-modelfile-rust-debugger?u=76281980&t=352)** And what's nice about this is that we're able to see how, if we go back to this debugger here, that you could kind of iterate over and over and maybe add your own custom logic for what your organization is working on.
>
> **[6:06](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-modelfile-rust-debugger?u=76281980&t=366)** But in my opinion, this is actually one of the more exciting areas of these coding assistance is to get these cutting edge models that you can run local, they are free, and also you have the ability to customize them to your needs.
>
> **[6:20](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-modelfile-rust-debugger?u=76281980&t=380)** So it's a pretty cool new feature that's available with Ollama and also the ability to build your own model file.

> [!info]- Semantic Content
>
> **Code Keywords:** let (11), function (1), new, (1), this. (1), this, (1)
> **CLI Commands:** cargo (4), docker (1), cd (1), make (1)
> **Tools:** intellij (1), command line (1), terminal (1)
> **Definitions:** is a  (3)
> **Warnings:** warning (3)
> **Exercise Files:** source code (1), template (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)

#### Effective AI engineering learning
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/effective-ai-engineering-learning?u=76281980)

> [!transcript]- Transcript
>
> **[0:06](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/effective-ai-engineering-learning?u=76281980&t=6)** - [Instructor] AI engineering introduces quite a few problems for a expert that wants to get right involved from day one into AI engineering, or even a beginner.
>
> **[0:20](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/effective-ai-engineering-learning?u=76281980&t=20)** In both scenarios, there are real problems.
>
> **[0:22](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/effective-ai-engineering-learning?u=76281980&t=22)** And so in order to put things into practice, you need an effective learning strategy that combines both the theory and also the practice.
>
> **[0:32](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/effective-ai-engineering-learning?u=76281980&t=32)** And you have to focus on the immediate productivity in AI engineering.
>
> **[0:36](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/effective-ai-engineering-learning?u=76281980&t=36)** So a few different ways to do this would be, first up, you have hands-on practice.
>
> **[0:41](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/effective-ai-engineering-learning?u=76281980&t=41)** You could learn by building real projects.
>
> **[0:44](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/effective-ai-engineering-learning?u=76281980&t=44)** You could also have a code first approach that accelerates your understanding.
>
> **[0:49](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/effective-ai-engineering-learning?u=76281980&t=49)** You could practice with production grade tools, not just academic tools that you're learning in a class.
>
> **[0:55](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/effective-ai-engineering-learning?u=76281980&t=55)** And the core foundations are also critical to pay attention to.
>
> **[0:58](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/effective-ai-engineering-learning?u=76281980&t=58)** So you need to master the MLOps fundamentals.
>
> **[1:03](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/effective-ai-engineering-learning?u=76281980&t=63)** You need to learn essential system design patterns.
>
> **[1:06](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/effective-ai-engineering-learning?u=76281980&t=66)** Also, focus on industry best practices.
>
> **[1:09](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/effective-ai-engineering-learning?u=76281980&t=69)** And then, in terms of applied skills, some of the things to consider would be the deployment workflow, right?
>
> **[1:14](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/effective-ai-engineering-learning?u=76281980&t=74)** Can you put it into production?
>
> **[1:16](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/effective-ai-engineering-learning?u=76281980&t=76)** Can you optimize the system performance?
>
> **[1:19](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/effective-ai-engineering-learning?u=76281980&t=79)** Can you implement a monitoring solution that will effectively make this system work?
>
> **[1:26](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/effective-ai-engineering-learning?u=76281980&t=86)** And then in terms of the learning cycle itself, I mean, this is the critical component is: how can you get hands-on experimentation?
>
> **[1:33](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/effective-ai-engineering-learning?u=76281980&t=93)** How do you do real world implementations?
>
> **[1:35](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/effective-ai-engineering-learning?u=76281980&t=95)** And then how do you refine and improve your particular workflow?
>
> **[1:39](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/effective-ai-engineering-learning?u=76281980&t=99)** So this is critical in terms of the learning cycle.
>
> **[1:42](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/effective-ai-engineering-learning?u=76281980&t=102)** You can't just get it from a book, you can't just get it from a class.
>
> **[1:45](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/effective-ai-engineering-learning?u=76281980&t=105)** You're going to have to do hands-on experimentation.
>
> **[1:47](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/effective-ai-engineering-learning?u=76281980&t=107)** So really, the takeaways are, you have to start with some practical foundational knowledge from academics or from books.
>
> **[1:54](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/effective-ai-engineering-learning?u=76281980&t=114)** And then you're going to have to learn through the active implementations, and then also focus on the production ready skills.
>
> **[2:01](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/effective-ai-engineering-learning?u=76281980&t=121)** And so this is very different than for-profit training, for university training alone, or for your experience with what you're already doing at work.
>
> **[2:11](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/effective-ai-engineering-learning?u=76281980&t=131)** You need to combine all these things together to be effective for AI engineering.

> [!info]- Semantic Content
>
> **Code Keywords:** class. (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### AI orchestration local workstation
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ai-orchestration-local-workstation?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ai-orchestration-local-workstation?u=76281980&t=5)** - [Instructor] What does a local AI engineering orchestration workflow look like?
>
> **[0:10](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ai-orchestration-local-workstation?u=76281980&t=10)** Let's take a look at this Lambda Vector workstation.
>
> **[0:13](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ai-orchestration-local-workstation?u=76281980&t=13)** It could also be any local workstation that has these capabilities.
>
> **[0:17](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ai-orchestration-local-workstation?u=76281980&t=17)** And to start with, we have the secure environment with dual networking.
>
> **[0:23](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ai-orchestration-local-workstation?u=76281980&t=23)** So the house itself could be, you know, a 10 gig switched house or your office could be a 10 gig switched house or higher.
>
> **[0:32](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ai-orchestration-local-workstation?u=76281980&t=32)** And you may have a secondary connection on your box as well.
>
> **[0:35](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ai-orchestration-local-workstation?u=76281980&t=35)** That's maybe two and a half gigs.
>
> **[0:37](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ai-orchestration-local-workstation?u=76281980&t=37)** But this 10 gig connection allows you to fully saturate, let's say an eight or 10 gig fiber line, so you can communicate with these large language models.
>
> **[0:47](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ai-orchestration-local-workstation?u=76281980&t=47)** You may have a firewall running maybe pf sense that's also able to give you enterprise grade security so you can download models and maybe serve out APIs to coworkers or other people inside of your office.
>
> **[1:01](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ai-orchestration-local-workstation?u=76281980&t=61)** And you could even have a stack that is supported, like in the case of Lambda Labs, you could get a stack that is going to have compatibility with all of the major AI frameworks.
>
> **[1:13](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ai-orchestration-local-workstation?u=76281980&t=73)** So we can see this networking stack becomes a very important component of AI development locally.
>
> **[1:17](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ai-orchestration-local-workstation?u=76281980&t=77)** Now, in terms of compute power, next, at the heart of one of the systems that I have is an AMD thread ripper.
>
> **[1:24](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ai-orchestration-local-workstation?u=76281980&t=84)** And this one has 24 cores.
>
> **[1:26](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ai-orchestration-local-workstation?u=76281980&t=86)** This means that you can have 48 threads running simultaneously, doing different operations, running different kinds of models, orchestrating things together.
>
> **[1:36](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ai-orchestration-local-workstation?u=76281980&t=96)** And you could even spike up to, let's say, 5.3 gigahertz for highly parallel but also powerful workloads.
>
> **[1:43](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ai-orchestration-local-workstation?u=76281980&t=103)** And then you could have 1, 2, 3, 4 different Nvidia GPUs as well.
>
> **[1:48](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ai-orchestration-local-workstation?u=76281980&t=108)** In this case, let's say I have an RTX 4090 with 24 gigs of VRAM.
>
> **[1:53](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ai-orchestration-local-workstation?u=76281980&t=113)** This is going to allow many of the modern models like, you know, 30 gig downloads with let's say 40 billion parameters.
>
> **[2:04](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ai-orchestration-local-workstation?u=76281980&t=124)** Those can run fairly well on these kinds of systems.
>
> **[2:07](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ai-orchestration-local-workstation?u=76281980&t=127)** Also, having enough memory in this particular system here, it's got 128 gigs of DDR five RAM.
>
> **[2:16](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ai-orchestration-local-workstation?u=76281980&t=136)** And this allows us to have enough RAM to do model loading and maybe a couple terabytes as well, or more of storage with SSD.
>
> **[2:25](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ai-orchestration-local-workstation?u=76281980&t=145)** So you can actually use that to store all of the models.
>
> **[2:29](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ai-orchestration-local-workstation?u=76281980&t=149)** Now, in terms of the AI pipeline, this is where you're going to have a lot of interaction with different systems that hold models like hugging face, maybe GitHub models, maybe your own local model repository, future model repositories.
>
> **[2:43](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ai-orchestration-local-workstation?u=76281980&t=163)** And these are also going to be cuda optimized so that they work well with the RTX 4090.
>
> **[2:50](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ai-orchestration-local-workstation?u=76281980&t=170)** Also, the model runners themselves play a role here.
>
> **[2:54](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ai-orchestration-local-workstation?u=76281980&t=174)** So if we take a look in this green AI pipeline, you have maybe Alama or rust candle or llama file, or you know, other types of model runners could all be used here.
>
> **[3:05](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ai-orchestration-local-workstation?u=76281980&t=185)** Now if we look at the, the red arrows here, this is going to represent our optimization cycle.
>
> **[3:12](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ai-orchestration-local-workstation?u=76281980&t=192)** So in terms of the data flow, the network stack is going to feed the compute resources.
>
> **[3:17](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ai-orchestration-local-workstation?u=76281980&t=197)** The model deployment is going to have an optimized path from repository to runtime, and then the system is going to be constantly tweaked and optimized.
>
> **[3:25](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ai-orchestration-local-workstation?u=76281980&t=205)** So you have the best performance monitoring and adjustments.
>
> **[3:29](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ai-orchestration-local-workstation?u=76281980&t=209)** Now, in terms of looking at this purple area here, at the very end, what we can do is we can look at, you know, how do we actually interact with the performance metrics?
>
> **[3:41](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ai-orchestration-local-workstation?u=76281980&t=221)** So the power, the cooling, how do we actually get all of these things to work together in one spot?
>
> **[3:47](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ai-orchestration-local-workstation?u=76281980&t=227)** So in a nutshell here, you can see that the Lambda Vector workstation is one example, but it really could be any local machine.
>
> **[3:56](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ai-orchestration-local-workstation?u=76281980&t=236)** There are other components that are necessary including interaction with the model providers, having a very powerful network stack, and also having the ability to run that and interact with it locally so that not one of these things is the bottleneck and you're able to uniformly, you know, build from the network to the compute to the AI pipeline.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), lambda (3), case, (1)
> **Env Vars:** rtx (2), ram (2), amd (1), vram (1), ddr (1)
> **Definitions:** is an  (1), means that (1)
> **Versions:** 5.3 (1)
> **Tools:** github (1)
> **Speakers:** - [instructor] (1)

#### Using TMUX on Linux
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-tmux-on-linux?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-tmux-on-linux?u=76281980&t=5)** - [Instructor] Let's take a look at TMUX, which is one of the most useful utilities you can use on a Linux system because of the versatility of the features.
>
> **[0:16](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-tmux-on-linux?u=76281980&t=16)** It allows you to persist terminal sessions, so this can make you keep your work running even if you disconnect, and this is really good for running some kind of prototype on a remote server somewhere or running some kind of script that's monitoring something.
>
> **[0:32](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-tmux-on-linux?u=76281980&t=32)** So it gives you that ability to run a long-running job and actually disconnect from it without having to worry about the job being killed.
>
> **[0:41](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-tmux-on-linux?u=76281980&t=41)** Likewise, it also has the ability to do multiple terminal views as well, and you can do things like split screens and use multiple windows in one terminal and reduce the window clutter.
>
> **[0:55](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-tmux-on-linux?u=76281980&t=55)** So first step here, let's just fire up TMUX and you can see here that it shows that it's running because there's this menu bar at the bottom here where it says 0.zshell, and so we have this default window here where we're able to do things.
>
> **[1:12](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-tmux-on-linux?u=76281980&t=72)** Now if we go ahead and we say tmux kill session, this will kill all of the TMUX sessions.
>
> **[1:21](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-tmux-on-linux?u=76281980&t=81)** So this is a way to just get out of everything, but I like to do a session based on a name and this allows us to essentially associate what we're doing with more control.
>
> **[1:34](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-tmux-on-linux?u=76281980&t=94)** So let's go ahead and do tmux new and we'll do -s and we'll call this Coding, and now I'm in a coding session here, and if I want to type in tmux ls, we can see that, in fact, we have this coding that we're attached to.
>
> **[1:51](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-tmux-on-linux?u=76281980&t=111)** Now another thing we can do is have window management.
>
> **[1:55](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-tmux-on-linux?u=76281980&t=115)** And a good example of window is this current screen here, but a pane is a split section within a window and you can divide a single window into multiple panes, you know, vertically or horizontally, and each pane can be run in its own terminal session while being visible.
>
> **[2:15](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-tmux-on-linux?u=76281980&t=135)** So really the thing, the way to think about this is that a window is like a tab in the terminal and it's going to take up the full view and you can have multiple windows in a session.
>
> **[2:26](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-tmux-on-linux?u=76281980&t=146)** So what we could do if we wanted to is actually create another window here.
>
> **[2:30](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-tmux-on-linux?u=76281980&t=150)** So the control B is the start to let it know that we're going to do a new command and we're going to say create a new window, and now that we've got this new window, I can rename this window.
>
> **[2:43](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-tmux-on-linux?u=76281980&t=163)** So I'll do control B again and I'll do the comma, and this will allow us to rename the window.
>
> **[2:51](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-tmux-on-linux?u=76281980&t=171)** In this case, we'll just call this Coding-Window-One or something like that.
>
> **[3:01](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-tmux-on-linux?u=76281980&t=181)** There we go, and now we're in the coding session and we're in Coding-Window-One.
>
> **[3:07](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-tmux-on-linux?u=76281980&t=187)** If I want to create a new window, we can do again control B, and then I will do a C, which will create a new window and then we can again name this one, so we'll do control B and then do a comma, and we're going to say, okay, this is Coding-Window-Two.
>
> **[3:31](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-tmux-on-linux?u=76281980&t=211)** There we go.
>
> **[3:32](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-tmux-on-linux?u=76281980&t=212)** So we have Coding-Window-One, Coding-Window-Two, and we're in the Coding session.
>
> **[3:36](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-tmux-on-linux?u=76281980&t=216)** Now, in order to go back and forth between the different windows, what we can do is do control B and do next, and you can see it goes to the very beginning.
>
> **[3:48](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-tmux-on-linux?u=76281980&t=228)** We could go control B again and say the letter N for next, and it'll just go through and toggle, and you can see that from the very bottom, control B and next.
>
> **[4:01](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-tmux-on-linux?u=76281980&t=241)** And so this is again pretty cool because we can do different things in these windows.
>
> **[4:05](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-tmux-on-linux?u=76281980&t=245)** It's essentially like a virtual tab that we're playing around with.
>
> **[4:09](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-tmux-on-linux?u=76281980&t=249)** Now in order to do some extra cool things here, potentially would be useful to actually show something.
>
> **[4:16](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-tmux-on-linux?u=76281980&t=256)** So if I typed in, for example, watch, I don't know, ls -l, the watch command will run something repeatedly.
>
> **[4:24](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-tmux-on-linux?u=76281980&t=264)** In this case, every two seconds, right?
>
> **[4:26](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-tmux-on-linux?u=76281980&t=266)** So we can see that something's cooking here, but if I do a control B and I want to go to the previous window, or next window, either one, you can see that now it disappears, and so that command is running in that other window.
>
> **[4:42](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-tmux-on-linux?u=76281980&t=282)** And if I keep toggling through, I go control B and N.
>
> **[4:46](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-tmux-on-linux?u=76281980&t=286)** There's nothing on that window, but the last window, that command is still running.
>
> **[4:51](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-tmux-on-linux?u=76281980&t=291)** So that's kind of the power of this, is that you can have these different sessions that are running all over the place.
>
> **[4:57](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-tmux-on-linux?u=76281980&t=297)** Now, if we want to go and do even more tricks, let's go back and say control B again and let's go to the original window right here, and we can even rename this one, too.
>
> **[5:10](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-tmux-on-linux?u=76281980&t=310)** So let's do a control B and we'll call this Zero.
>
> **[5:15](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-tmux-on-linux?u=76281980&t=315)** So we'll call Coding-Window-Zero.
>
> **[5:19](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-tmux-on-linux?u=76281980&t=319)** Coding-Window-Zero.
>
> **[5:23](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-tmux-on-linux?u=76281980&t=323)** So now we have three different windows, right?
>
> **[5:25](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-tmux-on-linux?u=76281980&t=325)** We have Zero, we have Coding-Window-One and we have Coding-Window-Two, and this one, what I'm going to do is I'm going to start to play with the panes.
>
> **[5:32](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-tmux-on-linux?u=76281980&t=332)** So the panes are a way to actually split the window into separate pieces.
>
> **[5:37](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-tmux-on-linux?u=76281980&t=337)** In order to do that, I would just do control B, and then we can go ahead and say split horizontally.
>
> **[5:45](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-tmux-on-linux?u=76281980&t=345)** So it'll be the quote here, and once I do that, you can see that the windows are split horizontally.
>
> **[5:52](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-tmux-on-linux?u=76281980&t=352)** Now one cool thing you can do is if you do control B and hold it down and do the up arrow, you can actually resize it as well, and if you do the down arrow, it'll resize, so that's kind of a cool feature as well.
>
> **[6:06](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-tmux-on-linux?u=76281980&t=366)** And then if you want to go to that window, you do control B, and then you just do the up arrow and that gets us inside of here.
>
> **[6:12](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-tmux-on-linux?u=76281980&t=372)** So why would you want to do this?
>
> **[6:13](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-tmux-on-linux?u=76281980&t=373)** Well, let's say you were monitoring your GPU, for example, and it was, I don't know, nvidia smi -l 1.
>
> **[6:24](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-tmux-on-linux?u=76281980&t=384)** So this is going to go through and take a look at our GPU, and it's pretty cool because I resized it properly.
>
> **[6:31](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-tmux-on-linux?u=76281980&t=391)** We can see a lot of the NVIDIA monitoring here, and then if we do a control B here again, and I do down arrow, now I'm in the shell that's right below here.
>
> **[6:44](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-tmux-on-linux?u=76281980&t=404)** So I could do something totally different.
>
> **[6:46](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-tmux-on-linux?u=76281980&t=406)** For example, you know, I could, I don't know, create a Ollama interaction.
>
> **[6:53](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-tmux-on-linux?u=76281980&t=413)** So if I type in ollama, which is a large language model runner here, I could do list and I could find some kind of model.
>
> **[7:02](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-tmux-on-linux?u=76281980&t=422)** Let's say Quinn 2.5.
>
> **[7:07](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-tmux-on-linux?u=76281980&t=427)** We'll say ollama run quinn2.5-coder,
>
> **[7:17](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-tmux-on-linux?u=76281980&t=437)** and you'll see that, in fact, I can see in real time what's happening with that GPU, because it's going to get hit a little bit.
>
> **[7:24](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-tmux-on-linux?u=76281980&t=444)** I can say, you know, show me a rust hello world function, and you'll see this thing is getting hammered with the GPU.
>
> **[7:35](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-tmux-on-linux?u=76281980&t=455)** So there's some really cool new interfaces that you can do when you're actually using TMUX because you can better utilize the terminal instead of having to pop open tons and tons of terminals.
>
> **[7:48](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-tmux-on-linux?u=76281980&t=468)** Now I'm going to go ahead and get out of this real quick, and what's interesting is that not only can I have the splits here where there are horizontal splits, but I also can do vertical.
>
> **[8:04](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-tmux-on-linux?u=76281980&t=484)** If I do control B, and I do the percent sign, we can split it up even again.
>
> **[8:11](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-tmux-on-linux?u=76281980&t=491)** So over here I could do, I don't know, the top command, for example, and then if I do control B again with the arrow to the left, I'm back into my terminal.
>
> **[8:22](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-tmux-on-linux?u=76281980&t=502)** So this also is kind of cool because depending on what it is you're doing, you're running some monitoring code or some kind of a script or whatever, you could be monitoring the GPU up top, you could be monitoring the CPU down below.
>
> **[8:40](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-tmux-on-linux?u=76281980&t=520)** Now, we could even split the one that's already running as well.
>
> **[8:44](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-tmux-on-linux?u=76281980&t=524)** So if we go control B and then go to the up arrow here.
>
> **[8:50](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-tmux-on-linux?u=76281980&t=530)** Now let's go ahead and split this one, so we'll do control B and we'll go ahead and split this by doing percent sign, and then what we could do in this one, for example, is, I don't know, run htop, right?
>
> **[9:05](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-tmux-on-linux?u=76281980&t=545)** So you could run GPU monitoring, run a fancy memory monitoring, run the top command, and then again we just do control B here, and then you do down and then control B again and then do to the left arrow and you can toggle back and do whatever it is you need to do and this one runs some commands.
>
> **[9:26](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-tmux-on-linux?u=76281980&t=566)** So TMUX is pretty cool because it allows you to do all these really cool things and these are going to be running regardless of if the terminal itself exits as well.
>
> **[9:38](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-tmux-on-linux?u=76281980&t=578)** So you can come back to this and you can take a look at some job that's been running and if you're SSHing into machines in particular, this can really come in handy because you've got these really background agents running.
>
> **[9:51](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-tmux-on-linux?u=76281980&t=591)** So we talk a lot about AI and all these fancy things you can do, but there are built-in capabilities with tools like TMUX that have been around for a long time that allow you to do lots of really cool things and really fully utilize a Linux system and use it in a way that, where it's working for you versus the machine is kind of something where you're not fully utilizing all of the resources.
>
> **[10:18](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-tmux-on-linux?u=76281980&t=618)** So to clean up here, what we're going to do is we're just going to say tmux kill session, and we'll type in tmux kill session.
>
> **[10:33](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-tmux-on-linux?u=76281980&t=633)** There we go, and we've been able to get out of all of the sessions.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), case, (2), this, (1), function (1)
> **Env Vars:** tmux (6), gpu (6), nvidia (1), cpu (1)
> **Tools:** terminal (8)
> **UI Navigation:** go to (4), toggle (2)
> **Analogies:** for example (5)
> **CLI Commands:** ls (2), make (1), find (1)
> **Definitions:** is a  (3)
> **Versions:** 2.5 (1)

#### Using NVIDIA-SMI
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-nvidia-smi?u=76281980)

> [!transcript]- Transcript
>
> **[0:06](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-nvidia-smi?u=76281980&t=6)** - [Instructor] If you're doing local large language model development or you're just using it for automation or scripting, you're going to need to use the nvidia-smi tool to see what's going on with your system.
>
> **[0:18](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-nvidia-smi?u=76281980&t=18)** First up, let's go ahead and run this, nvidia-smi.
>
> **[0:22](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-nvidia-smi?u=76281980&t=22)** At the first glance here, you can see there's a lot of information.
>
> **[0:25](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-nvidia-smi?u=76281980&t=25)** So we can see the GPU fan.
>
> **[0:28](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-nvidia-smi?u=76281980&t=28)** Is it actually being enabled?
>
> **[0:30](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-nvidia-smi?u=76281980&t=30)** We can see the temperature as well, which is a good way to see if you're running extremely high loads.
>
> **[0:37](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-nvidia-smi?u=76281980&t=37)** We can also look at the card itself.
>
> **[0:39](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-nvidia-smi?u=76281980&t=39)** So in this case we see there's an Nvidia GeForce RTX 4090.
>
> **[0:44](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-nvidia-smi?u=76281980&t=44)** We can see as well the wattage that's used versus the total wattage available.
>
> **[0:51](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-nvidia-smi?u=76281980&t=51)** And then we can see memory usage.
>
> **[0:54](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-nvidia-smi?u=76281980&t=54)** And, in this case, this is a 24-gig memory GPU.
>
> **[0:59](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-nvidia-smi?u=76281980&t=59)** And then we can also look at the percentage.
>
> **[1:02](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-nvidia-smi?u=76281980&t=62)** This is probably one of the more important ones.
>
> **[1:04](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-nvidia-smi?u=76281980&t=64)** You see up here where it says volatile GPU utilization.
>
> **[1:09](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-nvidia-smi?u=76281980&t=69)** And then we can see which processes are hitting it.
>
> **[1:12](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-nvidia-smi?u=76281980&t=72)** So if you're doing lots of different types of automation, you know, maybe running lots of old llamafile scripts or llamafile scripts or Rust Candle, if you're doing these local large language models, small language models, you may want to be constantly looking at, you know, what are these things doing in real time?
>
> **[1:31](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-nvidia-smi?u=76281980&t=91)** And so this is one of the best ways to do it.
>
> **[1:33](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-nvidia-smi?u=76281980&t=93)** Now, we can also look at this interactively.
>
> **[1:35](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-nvidia-smi?u=76281980&t=95)** So if we go nvidia-smi -l 1, this will actually toggle through, and every one second or so it'll refresh.
>
> **[1:46](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-nvidia-smi?u=76281980&t=106)** So this is probably a more realistic way to use this utility.
>
> **[1:50](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-nvidia-smi?u=76281980&t=110)** You just have it running somewhere maybe in tmux or you just have it in its own terminal, and you're just looking at it constantly while you're doing workloads.
>
> **[1:57](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-nvidia-smi?u=76281980&t=117)** This is something that I actually do typically do.
>
> **[2:01](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-nvidia-smi?u=76281980&t=121)** Now, what if we want to just list the GPUs that are available on the system?
>
> **[2:06](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-nvidia-smi?u=76281980&t=126)** Now, that's a nice way to utilize nvidia-smi as well.
>
> **[2:11](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-nvidia-smi?u=76281980&t=131)** So we can look at it and we see, "Oh, I just had one GPU."
>
> **[2:14](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-nvidia-smi?u=76281980&t=134)** But if I later wanted to get a second GPU in this system, or maybe I have a four-GPU system, which is actually pretty common for these expensive workstations, then I could see each one and I could target particular workloads based on those GPUs.
>
> **[2:30](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-nvidia-smi?u=76281980&t=150)** Now, another thing that's kind of interesting is that you can toggle for CSV mode.
>
> **[2:36](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-nvidia-smi?u=76281980&t=156)** And so, in this case, if I wanted to look at the memory, I can actually have it output that memory in CSV mode.
>
> **[2:43](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-nvidia-smi?u=76281980&t=163)** So why would we care about this?
>
> **[2:45](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-nvidia-smi?u=76281980&t=165)** Well, it's possible that what I want to do is train a model or do inference and then be periodically writing this out in CSV format.
>
> **[2:54](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-nvidia-smi?u=76281980&t=174)** You know, for example, I could do, you know, a pipe operation and say like metrics.csv or something like this.
>
> **[3:02](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-nvidia-smi?u=76281980&t=182)** And then I could later graph that and see, you know, do I need a new system?
>
> **[3:06](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-nvidia-smi?u=76281980&t=186)** Or, you know, whatever it is that I'm actually trying to monitor.
>
> **[3:11](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-nvidia-smi?u=76281980&t=191)** Now, we also can look at other stats in a similar way.
>
> **[3:15](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-nvidia-smi?u=76281980&t=195)** So, again, you could build your own customized monitoring tool based on this CSV output or do data science on it.
>
> **[3:23](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-nvidia-smi?u=76281980&t=203)** You can see the temperature of the GPU in Celsius is 51 here.
>
> **[3:28](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-nvidia-smi?u=76281980&t=208)** And, in general, these are the things that are interesting to do with nvidia-smi.
>
> **[3:34](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-nvidia-smi?u=76281980&t=214)** You can also, if you want to, use traditional tools.
>
> **[3:38](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-nvidia-smi?u=76281980&t=218)** So, for example, if I wanted to constantly look at the temperature because let's say I've had, you know, problems with the temperature.
>
> **[3:46](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-nvidia-smi?u=76281980&t=226)** Well, what you could do is just run the watch command.
>
> **[3:49](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-nvidia-smi?u=76281980&t=229)** And what's cool about this is every two seconds it'll go through and it'll give you the temperature.
>
> **[3:53](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-nvidia-smi?u=76281980&t=233)** So you could potentially have a tmux window with all of these very specialized metrics inside of here, and each of them could be in one window where you're looking at the GPU.
>
> **[4:03](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-nvidia-smi?u=76281980&t=243)** So it depends on what it is you're doing.
>
> **[4:05](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-nvidia-smi?u=76281980&t=245)** If you're treating your workstation like a race car, then this might be a great way to utilize the nvidia-smi tool.

> [!info]- Semantic Content
>
> **Env Vars:** gpu (8), csv (4), rtx (1)
> **Code Keywords:** let (2), case, (2), this, (1), this. (1)
> **UI Navigation:** toggle (2)
> **Definitions:** is a  (2)
> **Analogies:** for example (2)
> **File Paths:** metrics.csv (1)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)

#### Ollama architecture
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-architecture?u=76281980)

> [!transcript]- Transcript
>
> **[0:06](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-architecture?u=76281980&t=6)** - [Instructor] This is a diagram of the general Ollama architecture.
>
> **[0:10](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-architecture?u=76281980&t=10)** First up, we have the core components.
>
> **[0:12](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-architecture?u=76281980&t=12)** So this includes a REST server, and this is serving perhaps on port 11434.
>
> **[0:19](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-architecture?u=76281980&t=19)** And also, the model library is in ~/.ollama/models.
>
> **[0:26](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-architecture?u=76281980&t=26)** The GGML/GGUF runtime is used for model execution.
>
> **[0:32](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-architecture?u=76281980&t=32)** And in terms of model management, you would pull the model from a registry.
>
> **[0:37](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-architecture?u=76281980&t=37)** So this is a little bit like a Docker pull if you're familiar with that format.
>
> **[0:41](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-architecture?u=76281980&t=41)** And you can customize the model definition via Modelfile.
>
> **[0:45](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-architecture?u=76281980&t=45)** So again, this is similar to some of the things you would do with Dockerfile.
>
> **[0:50](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-architecture?u=76281980&t=50)** There's also version control and tags.
>
> **[0:53](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-architecture?u=76281980&t=53)** In terms of integration, there's a REST API for programming.
>
> **[0:57](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-architecture?u=76281980&t=57)** There's a CLI for direct interaction.
>
> **[1:00](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-architecture?u=76281980&t=60)** There also is language bindings.
>
> **[1:03](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-architecture?u=76281980&t=63)** So you can choose from different bindings that maybe fit your project, and there's Docker support.
>
> **[1:09](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-architecture?u=76281980&t=69)** In terms of security, you have the ability to do local execution, so this dramatically improves some of the security aspects.
>
> **[1:16](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-architecture?u=76281980&t=76)** There's no cloud dependencies.
>
> **[1:19](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-architecture?u=76281980&t=79)** And also, you can do things like API tokens for authentication, and also, model verification through the hash that you verify.
>
> **[1:28](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/ollama-architecture?u=76281980&t=88)** So the Ollama architecture is pretty simple, but also very effective.

> [!info]- Semantic Content
>
> **Env Vars:** rest (2), api (2), ggml (1), gguf (1), cli (1)
> **CLI Commands:** docker (2)
> **Definitions:** is a  (2)
> **Ports:** port 11434 (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### Using Zenith GPU monitoring
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-zenith-gpu-monitoring?u=76281980)

> [!transcript]- Transcript
>
> **[0:06](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-zenith-gpu-monitoring?u=76281980&t=6)** - [Instructor] Let's take a look at Zenith, which is a alternative to a tool like top or htop.
>
> **[0:12](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-zenith-gpu-monitoring?u=76281980&t=12)** I can install it with cargo install and if I do the --features nvidia and I have an NVIDIA card, I can also get access to GPU.
>
> **[0:21](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-zenith-gpu-monitoring?u=76281980&t=21)** So, on your system, it might be slightly different, but in this case, I was able to install it, because I have all the dependencies.
>
> **[0:27](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-zenith-gpu-monitoring?u=76281980&t=27)** Now, to get started here, what I'm going to do is, I'm going to do tmux, so that I can split the screen here, and then I'm going to split it again, so that I have a bottom and a top here.
>
> **[0:38](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-zenith-gpu-monitoring?u=76281980&t=38)** And then what I could do is actually go back up to the very top here and run Zenith.
>
> **[0:46](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-zenith-gpu-monitoring?u=76281980&t=46)** So, Zenith is pretty cool, because it does give you a lot of bang for your buck immediately.
>
> **[0:51](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-zenith-gpu-monitoring?u=76281980&t=51)** You can see it's a little bit compressed here.
>
> **[0:54](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-zenith-gpu-monitoring?u=76281980&t=54)** So, what I could do as well is, I could do kind of an expansion to see more and more by doing a Ctrl + B.
>
> **[1:03](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-zenith-gpu-monitoring?u=76281980&t=63)** Now, one of the things that we can see as well that's pretty cool about this is that the tmux system has access to graphics drivers, to file system, to network.
>
> **[1:15](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-zenith-gpu-monitoring?u=76281980&t=75)** So, it's able to see everything about your system inside of a kind of unified interface here.
>
> **[1:22](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-zenith-gpu-monitoring?u=76281980&t=82)** And if I go down to the bottom here and I go into this, I can even maybe expand it even more.
>
> **[1:30](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-zenith-gpu-monitoring?u=76281980&t=90)** And you can see now we have the graphics devices, this 28% NVIDIA GeForce.
>
> **[1:37](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-zenith-gpu-monitoring?u=76281980&t=97)** One of the things that is kind of a fun way to, you know, interact with this is to run a very expensive CPU utility and then take a look at what happens, because it's being sorted by CPU.
>
> **[1:50](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-zenith-gpu-monitoring?u=76281980&t=110)** If I type in yes, for example, and we pipe that into dev/null, we should be able to see this thing starting to spike up, because it's going to take up the CPU.
>
> **[2:06](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-zenith-gpu-monitoring?u=76281980&t=126)** And here, we see that the CPU for the yes command is at 99%, 100%, right?
>
> **[2:12](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-zenith-gpu-monitoring?u=76281980&t=132)** So, it's able to saturate one core.
>
> **[2:15](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-zenith-gpu-monitoring?u=76281980&t=135)** And in fact, if you look in the upper left corner here, you'll be able to see that the 37 of the 48 threads that are available on my system, one of them is being fully saturated by this.
>
> **[2:29](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-zenith-gpu-monitoring?u=76281980&t=149)** And I could even expand the CPU section if I do E.
>
> **[2:34](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-zenith-gpu-monitoring?u=76281980&t=154)** The E command will actually let me expand even more.
>
> **[2:39](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-zenith-gpu-monitoring?u=76281980&t=159)** And I can see the rest of the processes, or if I wanted to minimize this as well, I could also go through here and do an M.
>
> **[2:49](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-zenith-gpu-monitoring?u=76281980&t=169)** Another thing to be aware of is that when you're using a tool like this, a lot of times, it's fun to shrink down and kill a process while you're watching it.
>
> **[2:59](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-zenith-gpu-monitoring?u=76281980&t=179)** And so, what I'm going to do is I'm going to go back to the shell down here below, and if I kill this, if I just do a Ctrl + C for example, we should see that, immediately, it goes away.
>
> **[3:10](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-zenith-gpu-monitoring?u=76281980&t=190)** So, it's a great utility to maybe having another terminal above you using tmux or even a separate terminal while you're interacting with the rest of your system.
>
> **[3:21](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-zenith-gpu-monitoring?u=76281980&t=201)** And it does give you, really, everything you would need from one unified interface.
>
> **[3:25](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-zenith-gpu-monitoring?u=76281980&t=205)** And this is really useful when you're doing things like a large language model development.
>
> **[3:31](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-zenith-gpu-monitoring?u=76281980&t=211)** And let's go ahead and take a look at how that would work.
>
> **[3:33](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-zenith-gpu-monitoring?u=76281980&t=213)** For example, if I type in ollama, for example, and I say run, and I go ahead and I run a Ollama model, you'll be able to see that it will also show us some information about what's happening with Ollama.
>
> **[3:50](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-zenith-gpu-monitoring?u=76281980&t=230)** And I can type in, you know, print a rust hello world function example, and then it's going to go through it, It's going to give us more information.
>
> **[4:03](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-zenith-gpu-monitoring?u=76281980&t=243)** For example, the NVIDIA GPU will spike a little bit while things are happening.
>
> **[4:08](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-zenith-gpu-monitoring?u=76281980&t=248)** And so, you'll get a good view of exactly what's happening on your system by interacting with a terminal above using Zenith, and also below.
>
> **[4:19](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-zenith-gpu-monitoring?u=76281980&t=259)** You can kind of get this real-time feedback loop.
>
> **[4:22](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-zenith-gpu-monitoring?u=76281980&t=262)** So, it's a pretty useful tool for the AI engineer that's doing things with tools like Ollama or llamafile.
>
> **[4:29](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/using-zenith-gpu-monitoring?u=76281980&t=269)** And it's worth taking a look, especially if you have access to an NVIDIA GPU.

> [!info]- Semantic Content
>
> **Env Vars:** cpu (5), nvidia (4), gpu (3)
> **Code Keywords:** let (3), this, (3), interface (2), case, (1), this. (1)
> **Analogies:** for example (5)
> **Tools:** terminal (3)
> **Prerequisites:** install (3)
> **CLI Commands:** cargo (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)

#### Compiling Rust candle GPU
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/compiling-rust-candle-gpu?u=76281980)

> [!transcript]- Transcript
>
> **[0:06](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/compiling-rust-candle-gpu?u=76281980&t=6)** - [Instructor] Let's take a look at Rust candle.
>
> **[0:08](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/compiling-rust-candle-gpu?u=76281980&t=8)** And one of the best ways to describe it is to look at the README file here.
>
> **[0:13](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/compiling-rust-candle-gpu?u=76281980&t=13)** So, if I go ahead and I do a head README, you can see that it says, "Candle is a minimalistic ML framework for Rust with a focus on performance, including GPU support, and ease of use."
>
> **[0:26](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/compiling-rust-candle-gpu?u=76281980&t=26)** So, if we look at a git remote here, you can see that this is where it is hosted, it's on GitHub.
>
> **[0:33](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/compiling-rust-candle-gpu?u=76281980&t=33)** Now, in order to compile it, what I would recommend is to try out a demo first.
>
> **[0:39](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/compiling-rust-candle-gpu?u=76281980&t=39)** And so, we can go through here and we can do cargo run.
>
> **[0:44](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/compiling-rust-candle-gpu?u=76281980&t=44)** And if you do --example, it'll go into the examples directory and then if we do a a --release, it'll actually compile a binary that's ready for release.
>
> **[0:54](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/compiling-rust-candle-gpu?u=76281980&t=54)** Now, this one in particular is kind of interesting, because it's going to be compiled against the CPU and we can see what happens when you are using a non-GPU based large language model.
>
> **[1:07](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/compiling-rust-candle-gpu?u=76281980&t=67)** It is pretty slow.
>
> **[1:08](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/compiling-rust-candle-gpu?u=76281980&t=68)** So, let's go ahead and first try it out.
>
> **[1:10](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/compiling-rust-candle-gpu?u=76281980&t=70)** So, we'll say, you know, "Show me a Rust add function."
>
> **[1:17](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/compiling-rust-candle-gpu?u=76281980&t=77)** There we go.
>
> **[1:18](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/compiling-rust-candle-gpu?u=76281980&t=78)** And it's going to go through here, it's going to run it, and you'll be able to see that, in fact, the CPU is getting hammered, right?
>
> **[1:25](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/compiling-rust-candle-gpu?u=76281980&t=85)** It's, you know, 709%.
>
> **[1:28](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/compiling-rust-candle-gpu?u=76281980&t=88)** So, it's hitting a bunch of the cores on my 48th thread box, and it's kind of slow, and, you know, it's kind of going through there one by one and showing you different examples.
>
> **[1:38](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/compiling-rust-candle-gpu?u=76281980&t=98)** So, it's not particularly fast.
>
> **[1:41](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/compiling-rust-candle-gpu?u=76281980&t=101)** It's, I guess, okay from a batch perspective, but in order to get the full GPU capabilities, we're going to have to compile this with GPU.
>
> **[1:51](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/compiling-rust-candle-gpu?u=76281980&t=111)** And so, the way we can do that is, I'll go ahead and kill this, is, I'm going to go ahead and do a release here and I'm going to say with features CUDA.
>
> **[2:03](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/compiling-rust-candle-gpu?u=76281980&t=123)** And so, let's go ahead and do that.
>
> **[2:04](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/compiling-rust-candle-gpu?u=76281980&t=124)** Let's just say --features cuda.
>
> **[2:12](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/compiling-rust-candle-gpu?u=76281980&t=132)** And I don't need to pass in anything into the prompt here.
>
> **[2:17](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/compiling-rust-candle-gpu?u=76281980&t=137)** And in fact, I don't need to run anything.
>
> **[2:20](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/compiling-rust-candle-gpu?u=76281980&t=140)** I'm just going to build it and then I'm going to use the binary after I'm done.
>
> **[2:24](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/compiling-rust-candle-gpu?u=76281980&t=144)** So, this is a great way to build a target binary that has GPU features enabled.
>
> **[2:30](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/compiling-rust-candle-gpu?u=76281980&t=150)** So, let's go ahead and do that.
>
> **[2:31](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/compiling-rust-candle-gpu?u=76281980&t=151)** Oh, there we go.
>
> **[2:32](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/compiling-rust-candle-gpu?u=76281980&t=152)** It's enabled.
>
> **[2:33](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/compiling-rust-candle-gpu?u=76281980&t=153)** So then if I go to target and I go through here and I look at release, I can go to examples, and then we have qwen here.
>
> **[2:42](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/compiling-rust-candle-gpu?u=76281980&t=162)** And if we do --help, it should give us all kinds of options that we can use.
>
> **[2:47](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/compiling-rust-candle-gpu?u=76281980&t=167)** In this case though, we're going to do a prompt and we'll say, "Show me a Rust add function."
>
> **[2:57](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/compiling-rust-candle-gpu?u=76281980&t=177)** And then what this will do is, it will use a GPU.
>
> **[2:59](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/compiling-rust-candle-gpu?u=76281980&t=179)** You'll be able to see this in the middle here with the graphics processor.
>
> **[3:03](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/compiling-rust-candle-gpu?u=76281980&t=183)** All of a sudden, boom, there you go.
>
> **[3:04](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/compiling-rust-candle-gpu?u=76281980&t=184)** It's 93%, it's hammering it.
>
> **[3:07](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/compiling-rust-candle-gpu?u=76281980&t=187)** You can see how much faster.
>
> **[3:08](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/compiling-rust-candle-gpu?u=76281980&t=188)** So, even on, I would call this like a super machine.
>
> **[3:11](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/compiling-rust-candle-gpu?u=76281980&t=191)** I have a thread-ripper 24 core, 48 thread.
>
> **[3:17](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/compiling-rust-candle-gpu?u=76281980&t=197)** You know, it's a huge machine, but it's so much faster to hit the GPU when you're doing GPU programming.
>
> **[3:23](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/compiling-rust-candle-gpu?u=76281980&t=203)** And what's cool about this as well is that in this case, I also have this binary that's available.
>
> **[3:30](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/compiling-rust-candle-gpu?u=76281980&t=210)** So, what this means is that I could then, you know, put this in my path and use this.
>
> **[3:35](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/compiling-rust-candle-gpu?u=76281980&t=215)** And so, it's a little bit different than other tools like Ollama llamafile, is that you have more knobs to turn and you also get a binary at the very end.
>
> **[3:44](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/compiling-rust-candle-gpu?u=76281980&t=224)** And we can even take a look at the size of that binary.
>
> **[3:47](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/compiling-rust-candle-gpu?u=76281980&t=227)** Let's go ahead and say, you know, target/release/examples.
>
> **[3:52](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/compiling-rust-candle-gpu?u=76281980&t=232)** Here, let's go ahead and see how big it is.
>
> **[3:54](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/compiling-rust-candle-gpu?u=76281980&t=234)** So, the binary itself is only 21 megabytes.
>
> **[3:57](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/compiling-rust-candle-gpu?u=76281980&t=237)** So, tiny for, you know, an executable on your system.
>
> **[4:02](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/compiling-rust-candle-gpu?u=76281980&t=242)** And then it will also have the large language model in another place on the file system.
>
> **[4:07](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/compiling-rust-candle-gpu?u=76281980&t=247)** So, this is definitely a great tool to be aware of, is Rust candle, if you want to, you know, really turn the different knobs and play around with large language models locally.
>
> **[4:19](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/compiling-rust-candle-gpu?u=76281980&t=259)** And you can see here, it's really important to make sure that when you do a release, you do the release that targets the CUDA environment.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), function (2), this, (1), pass (1), super (1)
> **Env Vars:** gpu (8), readme (2), cpu (2), cuda (2)
> **CLI Commands:** git (1), cargo (1), make (1)
> **UI Navigation:** go to (2)
> **Definitions:** is a  (2)
> **Documentation:** the readme (1)
> **Tools:** github (1)
> **Warnings:** be aware (1)


### Conclusion

#### Summary
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/course-conclusion?u=76281980)

> [!transcript]- Transcript
>
> **[0:06](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/course-conclusion?u=76281980&t=6)** - [Instructor] AI Engineering Course Wrap-Up.
>
> **[0:09](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/course-conclusion?u=76281980&t=9)** Let's talk through the entire AI Engineering course and the orchestration concepts.
>
> **[0:15](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/course-conclusion?u=76281980&t=15)** We talked about the focus on practical and local development and also how to deploy these AI systems.
>
> **[0:22](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/course-conclusion?u=76281980&t=22)** And we also talked about the implementation strategies as well with professional-grade tools.
>
> **[0:29](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/course-conclusion?u=76281980&t=29)** Let's go ahead and review the core tools that we mastered.
>
> **[0:33](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/course-conclusion?u=76281980&t=33)** For Model Runners, we learned how llamafile enables single file distribution, ollama provides clean API development, and Rust Candle delivers performance optimization.
>
> **[0:46](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/course-conclusion?u=76281980&t=46)** Our Development Tools include Tmux for monitoring, and also nvidia-smi for GPU tracking, and then zenith for systems monitoring.
>
> **[1:00](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/course-conclusion?u=76281980&t=60)** A key focus was understanding hardware requirements and optimization.
>
> **[1:05](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/course-conclusion?u=76281980&t=65)** We learned how to leverage the RTX 4090 24 gig VRAM, and we also talked about 10Gig networking and how important that is when you combine it with fiber.
>
> **[1:16](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/course-conclusion?u=76281980&t=76)** Also, how to maximize CUDA optimization, and also how to manage memory effectively across multiple models.
>
> **[1:25](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/course-conclusion?u=76281980&t=85)** We talked about various model sources, including Hugging Face Hub, GitHub Models, and even local repositories.
>
> **[1:33](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/course-conclusion?u=76281980&t=93)** And we learned about GGML and GGUF optimization, quantization techniques, which is a way of trading speed for accuracy, and also custom configuration approaches.
>
> **[1:46](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/course-conclusion?u=76281980&t=106)** The development best practices that we covered in the course emphasized the best practices for real-time monitoring, for resource tracking, and also for optimization techniques and security implementations.
>
> **[2:01](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/course-conclusion?u=76281980&t=121)** So really we've been able to achieve quite a bit in this course, and we can think about things like local AI development, hardware optimization, professional tooling, and also real-world development scenarios.
>
> **[2:16](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/course-conclusion?u=76281980&t=136)** So some of the things to consider in your journey would be to explore custom model development.
>
> **[2:22](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/course-conclusion?u=76281980&t=142)** Also look at advanced optimization techniques, production deployment strategies, and also how you could contribute to a community.
>
> **[2:33](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/course-conclusion?u=76281980&t=153)** All right, that's it for this particular course.
>
> **[2:35](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/course-conclusion?u=76281980&t=155)** The field of AI is rapidly evolving, and you now have the foundational skills to grow with it.
>
> **[2:41](https://www.linkedin.com/learning/ai-orchestration-designing-the-prototype-architecture-and-data-strategy/course-conclusion?u=76281980&t=161)** I hope to hear from you in a discussion or in a new channel very soon.

> [!info]- Semantic Content
>
> **Env Vars:** api (1), gpu (1), rtx (1), vram (1), cuda (1)
> **Cross-References:** we talked about (2), we covered (1)
> **Code Keywords:** let (2)
> **Tools:** github (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


## Path Context

### In [[Building AI Products- Architecture and Orchestration Professional Certificate by LinkedIn Learning]]
← [[AI Orchestration- Planning and Orchestrating for Observability]] | **3 of 5** | [[AI Orchestration- Developing and Testing Your AI Prototype]] →

## Part of

- [[Building AI Products- Architecture and Orchestration Professional Certificate by LinkedIn Learning]]

## Appears In

- [[Building AI Products- Architecture and Orchestration Professional Certificate by LinkedIn Learning]]

## Related Courses

_Courses sharing skills:_

- [[AI Orchestration- Foundations]] — Artificial Intelligence (AI), AI Orchestration
- [[Data Planning Strategy And Compliance For Ai Initiatives]] — Artificial Intelligence (AI), Data Strategies
- [[AI Orchestration- Validation and User Feedback and Performance Metrics]] — Artificial Intelligence (AI), AI Orchestration
- [[AI Orchestration- Developing and Testing Your AI Prototype]] — Artificial Intelligence (AI), AI Orchestration
- [[AI Orchestration- Planning and Orchestrating for Observability]] — Artificial Intelligence (AI), AI Orchestration

---

[↑ Back to top](#)