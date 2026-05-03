---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: process-mining-for-robotic-process-automation
url: "https://www.linkedin.com/learning/process-mining-for-robotic-process-automation"
duration_minutes: 27
duration: 27m
level: Beginner
updated: 1/21/2026
learners: 101856
skills:
  - Robotic Process Automation (RPA)
  - Process Mining
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQG_HD0ooAtefQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1653415045934?e=2147483647&amp;v=beta&amp;t=GxnR8XsGoFGqb-CWstQm8OQS5_kxMfDby7PV4KQheBI"
linkedin_topic: Network and System Administration
learning_paths:
  - '[[Become an RPA Developer]]'
  - '[[SS&C Blue Prism Robotic Process Automation Professional Certificate]]'
prev_courses:
  - '[[Introducing Robotic Process Automation]]'
  - '[[Introducing Robotic Process Automation]]'
next_courses:
  - '[[Rpa Ai And Cognitive Tech For Leaders]]'
  - '[[Process Discovery for Robotic Process Automation]]'
path_nav: '[{"path":"Become an RPA Developer","position":2,"total":3,"prev":"Introducing Robotic Process Automation","next":"Rpa Ai And Cognitive Tech For Leaders"},{"path":"SS&C Blue Prism Robotic Process Automation Professional Certificate","position":2,"total":4,"prev":"Introducing Robotic Process Automation","next":"Process Discovery for Robotic Process Automation"}]'
path_count: 2
tags:
  - course
  - topic/cloud-computing
  - topic/network-and-system-administration
  - topic/software-development
  - skill/robotic-process-automation-rpa
  - skill/process-mining
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Network%20and%20System%20Administration/Process%20Mining%20for%20Robotic%20Process%20Automation.md)

![Process Mining for Robotic Process Automation](https://media.licdn.com/dms/image/v2/C560DAQG_HD0ooAtefQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1653415045934?e=2147483647&amp;v=beta&amp;t=GxnR8XsGoFGqb-CWstQm8OQS5_kxMfDby7PV4KQheBI)

# Process Mining for Robotic Process Automation

> Nearly every company wants to save time—and therefore, money—whenever possible. And automation is a key tool in the modern process improvement toolkit. However, while intelligent automation tools like robot process automation and artificial intelligence have transformed the way organizations work, there’s no one-size-fits-all solution. It’s important to figure out where automation would be most he

> [LinkedIn Learning](https://www.linkedin.com/learning/process-mining-for-robotic-process-automation) | 27m | Beginner | 102K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Course overview and benefits](#course-overview-and-benefits)
- [**1. Introduction to Process Mining**](#1-introduction-to-process-mining) (3 videos)
  - [Defining process mining](#defining-process-mining)
  - [The value of process mining](#the-value-of-process-mining)
  - [Achieving process maturity](#achieving-process-maturity)
- [**2. Process Capture**](#2-process-capture) (3 videos)
  - [What is process capture?](#what-is-process-capture)
  - [Event log capture](#event-log-capture)
  - [Task capture](#task-capture)
- [**3. Process Exploration**](#3-process-exploration) (6 videos)
  - [Building a business case](#building-a-business-case)
  - [Task mining](#task-mining)
  - [Identifying deviations and variations](#identifying-deviations-and-variations)
  - [Conformance checking](#conformance-checking)
  - [Filters and layers](#filters-and-layers)
  - [Machine learning and other intelligent features](#machine-learning-and-other-intelligent-features)
- [**4. Process Development**](#4-process-development) (2 videos)
  - [Optimizing and redesigning processes](#optimizing-and-redesigning-processes)
  - [Using robotic process automation](#using-robotic-process-automation)
- [**5. Process Oversight**](#5-process-oversight) (2 videos)
  - [Outcome measurement and auditing](#outcome-measurement-and-auditing)
  - [Runtime monitoring](#runtime-monitoring)
- [**Conclusion**](#conclusion) (1 videos)
  - [Course takeaways](#course-takeaways)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Course overview and benefits](https://www.linkedin.com/learning/process-mining-for-robotic-process-automation/course-overview-and-benefits?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/process-mining-for-robotic-process-automation/course-overview-and-benefits?u=76281980&t=1)** - Imagine this, lots of people make the journey from New York to Los Angeles every year, but not everyone makes the same trip. Some drive, some fly. You can even take a train, if you have the patience. Now, let's say you are put in charge of mapping this behavior and then deciding on the best way to get from point A to point B. Sounds simple, right? Of course you'd fly on a direct flight. But wait. The best route could mean the fastest, the shortest or the cheapest route or perhaps an optimal combination of all of the above. While that's clearly an analogy, you can see how the map of potential paths gets complex quickly. The answers to these questions can be found with a technology called [[Process Mining]]. My name is Ian Barkin. I've spent my career helping global companies understand, interpret and apply cutting-edge technologies, like process mining. This course is a primer for enterprises and individuals to understand the fundamentals of process mining. What it brings to the table and how you can best leverage it. Let's jump in.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Process Mining]] (3)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Analogies:** imagine (1)
> **Speakers:** - imagine (1)


### 1. Introduction to Process Mining

[↑ Back to Table of Contents](#table-of-contents)

#### [Defining process mining](https://www.linkedin.com/learning/process-mining-for-robotic-process-automation/defining-process-mining?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/process-mining-for-robotic-process-automation/defining-process-mining?u=76281980&t=1)** - Before we get technical, let's first clarify what we mean by [[Process Mining]]. In a broad sense, process mining describes the set of technologies that uses data to help businesses better understand their processes. Because data is the key here, it's expected that the processes being analyzed are completely or mostly digitized, meaning the data is in computers and not stored in someone's brain or captured on paper documents or written on Post-it Notes spread across your desk. As for the name process mining, it's very possible that you'll hear other terms for this industry like process intelligence, but process mining is still the most popular term so we'll use that for this course. There's also a more technical definition. Within the process mining ecosystem, there is a distinction between tools that are strictly called process mining tools and ones called process discovery tools. The difference lies in how the software collects and organizes process data. Process mining tools extract transactional workflow data from applications, also known as event logs. Think of actions in a ticketing system such as case created, case updated and case approved. Each step taken is recorded as an event in a log, hence event logs. And as a result of how it collects information, process mining is related to event log capture. Process discovery tools on the other hand, observe user actions directly as they complete their tasks
>
> **[1:35](https://www.linkedin.com/learning/process-mining-for-robotic-process-automation/defining-process-mining?u=76281980&t=95)** rather than extracting data from event logs. So we say they're related to task capture. We'll explore these two approaches in more detail in the later sections, appropriately titled "What Is Event Log Capture?" and "What Is Task Capture?" Outside of this technical discussion, the term process mining in this course will generally mean the technologies including both process mining and discovery tools. What's more, we're seeing an industry trend of consolidation of both approaches since they've both proven useful in different contexts. The largest process mining vendors increasingly offer both tools in their process mining suites. In summary, the favorite term for the industry as a whole has always been process mining, but don't be surprised if you hear other terms as well. The key is in the value they create for an organization.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Process Mining]] (13)
> **Definitions:** is a  (1), known as (1)
> **Analogies:** such as (1)
> **Best Practices:** the key is (1)
> **Speakers:** - before (1)

#### [The value of process mining](https://www.linkedin.com/learning/process-mining-for-robotic-process-automation/the-value-of-process-mining-30318104?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/process-mining-for-robotic-process-automation/the-value-of-process-mining-30318104?u=76281980&t=0)** In the late 1900s, Frederick Taylor measured every motion in the factory to improve efficiency. His time studies laid the foundation for modern process improvement. Fast forward a century, and we now live in a world of digital work, where every click, approval, and transaction leaves behind a data trail. [[Process Mining]] turns that trail into a powerful visual model of how work actually happens, letting organizations move beyond anecdotal understanding into data-backed truth. But the value of process mining has grown beyond visibility. Today, it powers the intelligence behind automation and AI-driven transformation. [[AI Agents]] and [[Large Language Models (LLM)|large language models]] rely on this process data to understand how work flows, identify bottlenecks, and even take autonomous corrective action. Modern tools can now pair process maps with [[Real-Time]] insights, [[Predictive Analytics]], and conversational interfaces. You can literally ask the system questions. Where are my delays? What if I automate this step and get data-backed answers? In essence, process mining has evolved from an analytical flashlight to an operational nervous system, one that feeds and guides both human decision-makers and AI systems alike.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Process Mining]] (3), [[AI Agents]] (1), [[Large Language Models (LLM)|Large language models]] (1), [[Real-Time]] (1), [[Predictive Analytics]] (1)

#### [Achieving process maturity](https://www.linkedin.com/learning/process-mining-for-robotic-process-automation/achieving-process-maturity?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/process-mining-for-robotic-process-automation/achieving-process-maturity?u=76281980&t=1)** - Discovering process improvement opportunities with [[Process Mining]] can lead to quick wins and while these can create value, they're often small wins. That should not be the end goal. I assert that the longer term goal for the use of this technology should be process maturity. Process maturity means that a process is known inside and out. A mature process is also optimal, efficient, and stable, so it's not subject to significant structural changes. It's also one that's able to be further improved and continuously optimized through feedback loops. Achieving this ideal state has never been easy, but thanks to the digital era, we now have a valuable aid to support us in this journey, data and lots of it. By leveraging the digital bread crumbs present in every step of a digitized workflow, process mining tools can help you define, manage, and optimize your process in less time and with less effort than through traditional methods. For the purpose of this course, the uses of process mining can be broadly divided into four rough stages, capture, exploration, development, and oversight. In the following sections, we'll define these four categories and explore how in each one of them, process mining can help organizations advance towards process maturity.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Process Mining]] (4)
> **Definitions:** means that (1)
> **Speakers:** - discovering (1)


### 2. Process Capture

[↑ Back to Table of Contents](#table-of-contents)

#### [What is process capture?](https://www.linkedin.com/learning/process-mining-for-robotic-process-automation/what-is-process-capture?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/process-mining-for-robotic-process-automation/what-is-process-capture?u=76281980&t=1)** - As mentioned before, [[Process Mining]] provides enhanced visibility compared to traditional process documentation. But that isn't the full story. Process mining also leads to an objective, data-backed understanding of a process, as opposed to the potentially subjective estimates of subject matter experts. In other words, instead of relying on the experiences and descriptions of a handful of personnel, one can gather a more complete picture of a process built on all the thousands or even millions of raw data points that make it up. Basically, you will learn the process by watching the whole team, not just representatives of that team. You can think of process capture as the detective work that a process-mining tool does to help you piece together how work is done in your organization. There are two approaches to process capture today, event log capture and task capture. Tools in the process-mining ecosystem tend to use either one or the other, but in some cases, it's possible to leverage both. Next, let's compare and contrast the two approaches.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Process Mining]] (2)
> **CLI Commands:** make (1)
> **Definitions:** in other words (1)
> **Analogies:** picture (1)
> **Speakers:** - as (1)

#### [Event log capture](https://www.linkedin.com/learning/process-mining-for-robotic-process-automation/event-log-capture?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/process-mining-for-robotic-process-automation/event-log-capture?u=76281980&t=1)** - Event log capture relies on digital breadcrumbs, the user actions in any IT system or application. Think of updating a customer record, deleting a document, or submitting an order. Each of these events leaves behind a unique entry in an application's event log, which is automatically generated by most enterprise applications. Today, this event data is detailed and standardized enough to be mined for insights by [[Process Mining]] [[Algorithms]]. Event logs from popular [[Enterprise Software]], like SAP or Salesforce are standard integrations for the top process mining tools in the market. But how do the algorithms work? By keeping track of unique identifiers within event data, they piece together the chain of actions that a particular item undergoes to reach completion. Do this for each unique item and each unique completion, and you quickly build a complex picture of what's truly going on in the life of a process. Yes, this can end up looking like spaghetti. In fact, it's nicknamed a spaghetti model in the industry for that very reason. Event log capture is good, because it's easy and convenient to connect and sync your process mining tool directly to event [[Databases]] in the enterprise software tools you most frequently use. In so doing, configuration of a process model is simplified and it can be automatically updated as the software is running. This form of capture is favored
>
> **[1:34](https://www.linkedin.com/learning/process-mining-for-robotic-process-automation/event-log-capture?u=76281980&t=94)** for high volume transactional processes such as those in finance and supply chain. The downside is that event log capture can only see processes in IT systems. User actions outside of those systems like mouse movements and clicks, typing in another window, or other desktop actions are not logged. To capture those interactions, you need task capture.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Process Mining]] (3), [[Algorithms]] (2), [[Enterprise Software]] (2), [[Databases]] (1)
> **Analogies:** picture (1), such as (1)
> **Env Vars:** sap (1)
> **Speakers:** - event (1)

#### [Task capture](https://www.linkedin.com/learning/process-mining-for-robotic-process-automation/task-capture-30327023?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/process-mining-for-robotic-process-automation/task-capture-30327023?u=76281980&t=0)** Instead of analyzing digital footprints alone, Task Capture observes how work is done at the individual level. Traditionally, this meant recording mouse clicks and keystrokes, but today's Task Capture tools have evolved dramatically. They now use [[Computer Vision]], [[Natural Language Processing (NLP)|natural language processing]], and multimodal AI to understand not just what a user does, but why. These systems can recognize screen content, interpret context, and even summarize an entire workflow in plain language. Some advanced tools allow users to describe their work conversationally, and the AI reconstructs the workflow automatically. Others create self-documenting process models that continuously update as people perform tasks. This richer, more intelligent form of task capture enables what's often called hybrid process understanding, A view that blends system data with observed human behavior. It's especially powerful when used to train [[AI Agents]] and automation tools, since it helps them learn from human expertise safely and efficiently. The result is a living, adaptive understanding of how work happens. Ready to fuel process optimization, automation, or even agentic orchestration.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Computer Vision]] (1), [[AI Agents]] (1)
> **Definitions:** is a  (1)


### 3. Process Exploration

[↑ Back to Table of Contents](#table-of-contents)

#### [Building a business case](https://www.linkedin.com/learning/process-mining-for-robotic-process-automation/building-a-business-case?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/process-mining-for-robotic-process-automation/building-a-business-case?u=76281980&t=1)** - Going back to the travel analogy, you've mined travel data and captured a large set of all the different routes that people use to get from New York to Los Angeles. Now, the challenge is to analyze and compare the different journeys to find the one you think is optimal. As you can imagine, you'll need some powerful tools to make sense of the data collected. But as we discussed, the shortest trip might not be the best trip. Sometimes in business process improvement, it isn't always as simple as choosing the process variant with the shortest turnaround time. There are many other factors to consider depending on your business goals. For instance, if process cost is determined to be more important than process speed, the faster variants may not be desired as they could be the fastest, but not the cheapest way to get something done. Or what if the most costly process variants are only costly because of an easily solvable bottleneck that was never brought to your attention? Depending on the business critical metrics being targeted, there are several types of features within [[Process Mining]] that can each in their own way, shed light on the inner workings of a process. To give you a taste of what to expect, I'll next introduce the most common process exploration features you'll come across.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Process Mining]] (1)
> **CLI Commands:** find (1), make (1)
> **Analogies:** imagine (1), for instance (1)
> **Cross-References:** we discussed (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - going (1)

#### [Task mining](https://www.linkedin.com/learning/process-mining-for-robotic-process-automation/task-mining?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/process-mining-for-robotic-process-automation/task-mining?u=76281980&t=1)** - The first feature we'll introduce is task mining, which is the analysis of the user interaction data collected with task capture. Task mining helps analysts more precisely understand the connections and context of each activity in a process. This way one can achieve a more nuanced and meaningful understanding of a process at a very detailed keystroke level. For instance, task mining may reveal that the text being typed in an application window is part of a series of activities in a form-filling procedure. The form-filling procedure may be part of a larger chain of actions in a set of applications that ultimately pertains to purchase order approval. The turnaround time for purchase order approval may be seen to be dragging on because the slow speed of an application is causing wait times between steps, and not because the task itself is complex. Each of these task mining examples show how a process analyst is able to observe the detailed reality of how processes are executed at the most granular level. This level of detail is good if the goal is to discover automation opportunities or optimize productivity, which is why task mining compliments technologies like [[Robotic Process Automation (RPA)|robotic process automation]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Robotic Process Automation (RPA)|Robotic process automation]] (1)
> **Analogies:** for instance (1)
> **Speakers:** - the (1)

#### [Identifying deviations and variations](https://www.linkedin.com/learning/process-mining-for-robotic-process-automation/identifying-deviations-and-variations?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/process-mining-for-robotic-process-automation/identifying-deviations-and-variations?u=76281980&t=1)** - The next feature, variant analysis, is an important part of process exploration. Variants consist of the many different paths workers may take to complete the same process from start to finish. You'll usually find process variants visualized through a feature called a variant explorer, although the name may vary slightly. Variant explorers provide an interactive way for analysts to view all permutations of a process, from the most frequent end-to-end paths taken down to the rarest one-time variance. This can be useful in many ways. You can immediately see just how disorganized your process is if your variants look like a spaghetti model, or in other words, you encounter tons of variants you didn't expect. You could compare multiple variants to find out the small differences between them and how they contribute to different measured outcomes. You could determine whether or not to invest in optimizing a common variant. If a process is completed one way 80% of the time, improving that variant will likely have a stronger impact when compared to improving a variant that's only done 5% of the time. Thanks to all of the data collected and organized through process capture, variant explorers are a powerful way to see deep into a process.

> [!info]- Semantic Content
>
> **CLI Commands:** find (2)
> **Definitions:** is an  (1), in other words (1)
> **Speakers:** - the (1)

#### [Conformance checking](https://www.linkedin.com/learning/process-mining-for-robotic-process-automation/conformance-checking?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/process-mining-for-robotic-process-automation/conformance-checking?u=76281980&t=1)** - The next feature is conformance checking. This is a feature that will come in handy when you want to compare steps in an observed process with an ideal or intended workflow. Basically, how big a difference is there between the way you want to be doing things and the way you are actually doing things? Conformance checking works when a user imports or creates a workflow model, which is then set side by side or on top of the real process to highlight differences. In addition to comparing models, conformance checking can also be done with a set of rules. By analyzing where the intended process deviates from one that's expected of it, one can identify where process performance may be taking a hit due to anomalies or measure the relationships between deviations and rank their effects and metrics, like cost and time and audit if a process is complying with the given set of rules and procedures. It's important to remember that since it's humans doing most of the work, processes are bound to have errors and deviations. It would be a surprise if your real process conformed 90% or 100% with the intended one. My estimate is that the average degree of conformance is probably around 60 to 70%. And some may say I'm being generous. The point is that conformance checking features are built into [[Process Mining]] to help identify nonconformance and to make the most sense of it as possible.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Process Mining]] (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - the (1)

#### [Filters and layers](https://www.linkedin.com/learning/process-mining-for-robotic-process-automation/filters-and-layers?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/process-mining-for-robotic-process-automation/filters-and-layers?u=76281980&t=1)** - If you've used [[Microsoft Excel]], you may have created a table with multiple columns and then filtered the rows in the table based on one or many columns at once. The same principle's also seen in [[Process Mining]] in the form of filters and layers. These help analysts narrow down the view of a process model, based on various attributes that were collected in process capture. For high volume processes, those done many times by many people, filtering makes it easy to narrow down process data based on criteria like date, cost, assigned resources and more. A brief example will help illustrate the value of this feature. Let's say you are in charge of [[Technical Support]] for multiple consumer [[Electronics]] [[Microsoft Products|products]] like cameras, laptops and computer monitors. You find out that this past month one product in particular is getting online complaints for poor [[Customer Support]]. You wonder, what's the cause? In your process mining tool, which is already configured to your technical support ticketing process, you filter by date to include only completed interactions in the past month. Then you add another filter layer for instances where tier-2 support was reached. In other words, the complex cases. Finally, you filter the resulting process model by product type and discovered that throughput times for tier-2 support for the company's computer monitor product have been extremely high this past month.
>
> **[1:35](https://www.linkedin.com/learning/process-mining-for-robotic-process-automation/filters-and-layers?u=76281980&t=95)** Your investigation into the product concludes that with certain new computer models the monitor is unable to connect properly. You act quickly and update the technical support guide to include a workaround. The detailed investigation afforded by process mining helped mitigate the issue early and effectively.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Process Mining]] (3), [[Technical Support]] (3), [[Microsoft Excel]] (1), [[Electronics]] (1), [[Microsoft Products|Products]] (1)
> **CLI Commands:** find (1)
> **Definitions:** in other words (1)
> **Speakers:** - if (1)

#### [Machine learning and other intelligent features](https://www.linkedin.com/learning/process-mining-for-robotic-process-automation/machine-learning-and-other-intelligent-features-30306113?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/process-mining-for-robotic-process-automation/machine-learning-and-other-intelligent-features-30306113?u=76281980&t=0)** Machine learning has always been part of [[Process Mining]], but its role has expanded. Originally, [[Algorithms]] were used to find patterns, detect anomalies, and predict outcomes. Now, with the rise of [[Generative AI]] and agentic AI, these systems are capable of much more. Today's intelligent features can simulate, generate, and even orchestrate process changes automatically. For example, you can test how automation might impact performance before implementation. Or ask an AI assistant to explain the root cause of a delay in natural language. Some emerging capabilities include generative [[Simulation]], using [[Large Language Models (LLM)|large language models]] to model what-if scenarios and propose improved process designs. Autonomous root cause analysis. [[AI Agents]] that continuously monitor for anomalies and suggest fixes, conversational analytics, the ability to ask questions and receive process insights in real time. These tools transform process mining from a static analytical platform into a dynamic decision partner, a system that learns, predicts, and collaborates with human teams to drive ongoing improvement.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (1), [[Generative AI]] (1), [[Simulation]] (1), [[Large Language Models (LLM)|Large language models]] (1), [[AI Agents]] (1)
> **CLI Commands:** find (1)
> **Analogies:** for example (1)


### 4. Process Development

[↑ Back to Table of Contents](#table-of-contents)

#### [Optimizing and redesigning processes](https://www.linkedin.com/learning/process-mining-for-robotic-process-automation/optimizing-and-redesigning-processes-30321097?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/process-mining-for-robotic-process-automation/optimizing-and-redesigning-processes-30321097?u=76281980&t=0)** Once insights have been gathered, organizations typically move into improvement through either process optimization or process redesign. Optimization focuses on incremental improvements, adjusting, simplifying, or standardizing steps. Redesign, however, takes a broader view, asking whether the process itself still makes sense. Today, both approaches are being accelerated by AI. [[Process Mining]] data can now feed directly into AI co-designers or agentic modeling tools that simulate future state processes in minutes. These systems use generative reasoning to propose new workflows, test alternatives, and estimate ROI automatically. This evolution is creating what I call agentic process re-engineering, a blend of human insight and machine creativity. The human sets intent, the AI generates optimized versions, and process mining validates them against real world data. It's a faster, smarter way to reimagine work, where people and AI collaborate to design the next generation of business processes together.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Process Mining]] (2)
> **Env Vars:** roi (1)

#### [Using robotic process automation](https://www.linkedin.com/learning/process-mining-for-robotic-process-automation/using-robotic-process-automation-30326028?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/process-mining-for-robotic-process-automation/using-robotic-process-automation-30326028?u=76281980&t=0)** Whether you choose to optimize or redesign, automation inevitably plays a role. Historically, this meant [[Robotic Process Automation (RPA)|robotic process automation]]. Bots that mimic human actions like typing, clicking, or moving data between systems. RPA remains valuable, but it's now part of a broader spectrum known as agentic automation. In this model, RPA bots handle deterministic tasks. AI models handle pattern recognition and prediction, and [[AI Agents]] coordinate activity across systems. [[Process Mining]] provides the foundation that connects these layers. It identifies which steps are best suited for bots, which require judgment, and where human oversight is essential. Modern automation platforms now integrate these insights directly, allowing organizations to orchestrate humans, bots, and AI agents working together, in real time. The result is a continuous cycle. Process mining informs automation, automation generates new data, and that data feeds back into further improvement. In short, we've evolved from automating tasks to autonomizing operations, guided by insight, governed by data, and augmented by intelligence.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[AI Agents]] (2), [[Process Mining]] (2), [[Robotic Process Automation (RPA)|Robotic process automation]] (1)
> **Env Vars:** rpa (2)
> **Definitions:** known as (1), is a  (1)


### 5. Process Oversight

[↑ Back to Table of Contents](#table-of-contents)

#### [Outcome measurement and auditing](https://www.linkedin.com/learning/process-mining-for-robotic-process-automation/outcome-measurement-and-auditing?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/process-mining-for-robotic-process-automation/outcome-measurement-and-auditing?u=76281980&t=1)** - The final category of uses for [[Process Mining]] is process oversight. Rather than seeing it as the last step in the sequence, you should think of process oversight as an extension of process exploration that continues into the foreseeable future. The features relevant to process exploration are all just as relevant for oversight. It's just that oversight is done once a process is more stable. Once a process is relatively consistent in its operation, process oversight offers three important features. Measuring outcomes, auditing for compliance, and runtime monitoring. For instance, comparing variants before and after changes to a process using variant analysis is a direct way to quantitatively measure the impact of process improvements using data backed metrics, like cost, resource allocation, and throughput time. What about auditing a process? For this task, conformance checking would be an effective way to see to what degree the real process is operating in alignment with the intended rules and workflow. It's harder for violations to slip by when every potential process completion is collected during process capture. Now the last feature, runtime monitoring, is one of the most unique capabilities of process mining. So we'll cover it next in its own lesson.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Process Mining]] (2)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)
> **Speakers:** - the (1)

#### [Runtime monitoring](https://www.linkedin.com/learning/process-mining-for-robotic-process-automation/runtime-monitoring-30326029?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/process-mining-for-robotic-process-automation/runtime-monitoring-30326029?u=76281980&t=0)** If traditional process documentation was like taking a snapshot, runtime monitoring is like streaming a live feed. [[Process Mining]] tools now continuously capture event data from systems as work happens. But today's monitoring goes even further. [[AI Agents]] can watch these data streams in real time, detect anomalies, and automatically trigger corrective actions, rerouting cases, escalating exceptions, or recommending process changes. Organizations are also adopting digital twins of the organization, virtual replicas of business processes that allow AI to test adjustments safely before deploying them live. This combination of [[Continuous Monitoring]] and agentic intervention creates a self-optimizing feedback loop. processes no longer just get measured. They adapt dynamically to conditions as they occur. In effect, [[Real-Time]] process oversight is becoming real-time process co-piloting, where AI and humans work side-by-side to keep operations efficient, compliant, and resilient.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Real-Time]] (2), [[Process Mining]] (1), [[AI Agents]] (1), [[Continuous Monitoring]] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Course takeaways](https://www.linkedin.com/learning/process-mining-for-robotic-process-automation/course-takeaways?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/process-mining-for-robotic-process-automation/course-takeaways?u=76281980&t=1)** - Congratulations on completing this course. You now understand what [[Process Mining]] is and how organizations are making use of it to gain enhanced visibility of their processes so they can more quickly and efficiently achieve process maturity. You've also learned the four stages in achieving process maturity with process mining. Process capture, process exploration, process development, and process oversight. Within these stages, you're now familiar with the most relevant features found in process mining tools and how they work. Most importantly, you now have the proper foundations to be an informed contributor on [[Digital Transformation]] programs in your organization and wherever your career may take you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Process Mining]] (3), [[Digital Transformation]] (1)
> **Speakers:** - congratulations (1)


## Instructor

- [[Ian Barkin]]

## Resources

- Exercise files available

## Skills Covered

- Robotic Process Automation (RPA)
- Process Mining

## Path Context

### In [[Become an RPA Developer]]
← [[Introducing Robotic Process Automation]] | **2 of 3** | [[Rpa Ai And Cognitive Tech For Leaders]] →

### In [[SS&C Blue Prism Robotic Process Automation Professional Certificate]]
← [[Introducing Robotic Process Automation]] | **2 of 4** | [[Process Discovery for Robotic Process Automation]] →

## Part of

- [[SS&C Blue Prism Robotic Process Automation Professional Certificate]]

## Appears In

- [[Become an RPA Developer]]
- [[SS&C Blue Prism Robotic Process Automation Professional Certificate]]

## Related Courses

_Courses sharing skills:_

- [[Process Discovery for Robotic Process Automation]] — Robotic Process Automation (RPA)
- [[Introducing Robotic Process Automation]] — Robotic Process Automation (RPA)
- [[Rpa Ai And Cognitive Tech For Leaders]] — Robotic Process Automation (RPA)

---

[↑ Back to top](#)