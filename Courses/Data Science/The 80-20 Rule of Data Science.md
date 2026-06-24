---
type: course
cssclasses:
  - lle-course
slug: the-80-20-rule-of-data-science
url: "https://www.linkedin.com/learning/the-80-20-rule-of-data-science"
duration_minutes: 86
duration: 1h 26m
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D4D0DAQEcI8TngOHfeg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1724267271010?e=2147483647&amp;v=beta&amp;t=HoBiLuSGWby-16_rSkaxbOxXDRe_KOUdx04PY91WIWQ"
linkedin_topic: Data Science
learning_paths:
  - '[Introduction to Fundamental Skills for Data Work- Data Strategy and Planning](../../Paths/Data%20Science/Learning%20Paths/Introduction%20to%20Fundamental%20Skills%20for%20Data%20Work-%20Data%20Strategy%20and%20Planning.md)'
prev_courses:
  - '[Using AI to Improve Ops for Your Data Organization](../Database%20Management/Using%20AI%20to%20Improve%20Ops%20for%20Your%20Data%20Organization.md)'
next_courses:
  - '[Data Science Team Lifecycle Management](Data%20Science%20Team%20Lifecycle%20Management.md)'
path_nav: '[{"path":"Introduction to Fundamental Skills for Data Work- Data Strategy and Planning","position":6,"total":10,"prev":"Using AI to Improve Ops for Your Data Organization","next":"Data Science Team Lifecycle Management"}]'
path_count: 1
tags:
  - course
  - topic/data-science
  - topic/database-management
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/The%2080-20%20Rule%20of%20Data%20Science.md)

![The 80/20 Rule of Data Science](https://media.licdn.com/dms/image/v2/D4D0DAQEcI8TngOHfeg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1724267271010?e=2147483647&amp;v=beta&amp;t=HoBiLuSGWby-16_rSkaxbOxXDRe_KOUdx04PY91WIWQ)

# The 80/20 Rule of Data Science

> In this course, join instructor Howard Friedman as he outlines the core concepts of the 80/20 rule for data science and how to get most of the value with minimal effort. Explore the basic steps required to assign value to different parts of your work, including defining success, obtaining high-quality datasets, starting with basic statistics, building basic models early, and avoiding getting bogge

> [LinkedIn Learning](https://www.linkedin.com/learning/the-80-20-rule-of-data-science) | 1h 26m
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [What is the 80/20 rule of data science?](#what-is-the-8020-rule-of-data-science)
  - [What you should know for this course](#what-you-should-know-for-this-course)
- [**1. Getting Started with Prioritizing**](#1-getting-started-with-prioritizing) (5 videos)
  - [Defining success](#defining-success)
  - [Make minimum viable products (MVP) your friend](#make-minimum-viable-products-mvp-your-friend)
  - [The point of diminishing returns](#the-point-of-diminishing-returns)
  - [Why do data science projects fail?](#why-do-data-science-projects-fail)
  - [Plan for deployment](#plan-for-deployment)
- [**2. Database Selection and Quality Checks**](#2-database-selection-and-quality-checks) (5 videos)
  - [Comb the literature](#comb-the-literature)
  - [Triaging data sources](#triaging-data-sources)
  - [Checking data quality](#checking-data-quality)
  - [Dealing with missing data](#dealing-with-missing-data)
  - [Finding strong features](#finding-strong-features)
- [**3. Simple Models First**](#3-simple-models-first) (6 videos)
  - [Feature transformations](#feature-transformations)
  - [Transforming continuous features](#transforming-continuous-features)
  - [Interaction terms](#interaction-terms)
  - [Adding data sources](#adding-data-sources)
  - [Linear regression](#linear-regression)
  - [Logistic regression](#logistic-regression)
- [**4. Tracking Performance**](#4-tracking-performance) (4 videos)
  - [Choosing metrics](#choosing-metrics)
  - [Designing simple dashboards](#designing-simple-dashboards)
  - [Rapid prototyping](#rapid-prototyping)
  - [When to stop](#when-to-stop)
- [**5. Communicating the 80/20 of Data Science**](#5-communicating-the-8020-of-data-science) (3 videos)
  - [Focus on outcome, not technique](#focus-on-outcome-not-technique)
  - [Manage expectations and build trust](#manage-expectations-and-build-trust)
  - [Emphasize collaboration](#emphasize-collaboration)
- [**Conclusion**](#conclusion) (1 videos)
  - [Key takeaways for your future career in data science](#key-takeaways-for-your-future-career-in-data-science)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [What is the 80/20 rule of data science?](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/what-is-the-80-20-rule-of-data-science?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/what-is-the-80-20-rule-of-data-science?u=76281980&t=0)** - [Data Science](../../Topics/Data%20Science.md) can feel overwhelming. The sheer amount of data, complex [Algorithms](../../Skills/Software%20Development/Algorithms.md), and sophisticated software out there can create the illusion that massive effort is required. But here's the secret, that's often not the case. The 80-20 rule, also known as the Pareto Principle, tells us that in many situations, roughly 80% of the value often comes from just 20% of the effort. This idea absolutely applies to data science. In this course, we're going to focus on that crucial 20%. I'm Howard Friedman. I'm a data scientist with decades of experience. Are you ready to use data science to have a greater impact at work? Let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Science](../../Topics/Data%20Science.md) (3), [Algorithms](../../Skills/Software%20Development/Algorithms.md) (1)
> **Definitions:** known as (1)
> **Speakers:** - data (1)

#### [What you should know for this course](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/what-you-should-know-for-this-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/what-you-should-know-for-this-course?u=76281980&t=0)** - So what do you need to know coming into this course? First, you need to understand crystal clear project goals. Can you describe what problem you're actually trying to solve? This is your guiding star, keeping you from getting lost in a sea of data. Second, you need to recognize good, relevant data. It's about quality. Yes, there is a minimum amount of data needed, but quality beats quantity whether it is volume or the features being used for modeling. A focused data set filled with informative features will take you much further than a massive error filled one that lacks strong features. And third, you'll need to leverage what you already know, existing company knowledge, market insights, even expert opinions. These form the foundations on which your analysis stands. Now, here's what you don't need when applying the 80-20 rules of [Data Science](../../Topics/Data%20Science.md). You can leave behind the most cutting edge AI models since they're often overkill. You can avoid trying to analyze every single data source since that's a recipe for analysis paralysis. And you can stop endless explorations of features. The basics are often surprisingly powerful. Tune into the next video to learn more.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Science](../../Topics/Data%20Science.md) (1)
> **Cross-References:** next video (1)
> **Definitions:** is a  (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - so (1)


### 1. Getting Started with Prioritizing

[↑ Back to Table of Contents](#table-of-contents)

#### [Defining success](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/defining-success?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/defining-success?u=76281980&t=0)** - In the realm of [Data Science](../../Topics/Data%20Science.md), the thrill often lies in building models, analyzing trends, and crafting insights from raw data. These are all critical, yet without clearly delineating what success looks like for your project, all these efforts risk amounting to very little. You could build models that no one implements, create analysis that no one reviews, and offer insights that simply result in shoulder shrugs. Your success in data science requires a definition of success, one that you and your customer have to agree on. So let's dissect the idea of success. First, you have to put on your customer hat. Whether your customer is a department within the company, a paying client, or any other stakeholder, it's vital to understand their needs and requirements. What problems did they need solved? What sort of outcomes would be considered a win in their eyes? What model performance is needed, by when, and at what cost? Here's a scenario. Imagine you're building a predictive model to forecast sales. While the technically accurate model is essential, your client may actually be far more concerned with the practical implications it has for their decision making. Can it identify high potential regions for focused marketing? Can it predict demand well enough to improve inventory levels and reduce waste by some predefined percent?
>
> **[1:35](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/defining-success?u=76281980&t=95)** Once you understand the customer view of success, you can put on your performer hat. It's now your job to translate those requirements into tangible metrics and targets. These metrics fall into a few broad categories. Performance. How well does your model or analysis work? Accuracy, precision, recall, these are where the technical guts of your project come under scrutiny. Time. Did you deliver on schedule? A project that was needed in March may be viewed as a failure if it arrives in June. Cost. Was the project within budget? Data science doesn't exist in a vacuum. It has to fit within business constraints. Stakeholder satisfaction. This is more qualitative. Overall, is the customer satisfied with the product? This is tightly linked to whether you communicated effectively. Were the insights actionable and readily presented? Did the project enhance trust in data-driven approaches? Quality. Is your code well-structured, documented, and reproducible? Think long-term. Will others be able to pick up your work if needed? Business impact. Ultimately, did the project make a difference to the bottom line or the key objectives of the customer? Here's the key takeaway.
>
> **[3:08](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/defining-success?u=76281980&t=188)** Start data science projects with a shared understanding of what success looks like. Try this step. Reach out to your data science customer and ask them to have a sit down to discuss project success. In that meeting, agree on these success metrics. Later you can then track them and communicate the progress on these goals.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Science](../../Topics/Data%20Science.md) (5)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Analogies:** imagine (1)
> **Speakers:** - in (1)

#### [Make minimum viable products (MVP) your friend](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/make-minimal-viable-products-mvp-your-friend?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/make-minimal-viable-products-mvp-your-friend?u=76281980&t=0)** - Here's the secret to success in [Data Science](../../Topics/Data%20Science.md) that so many teams overlook. Start small and iterate fast. This is where the concept of a minimum viable product, usually called an MVP, becomes your biggest ally. So what exactly is a data science MVP? Think of it as the simplest functional version of your solution. It's focused on delivering the core value proposition, answering a key question, and critically important is that it can be implemented fast. It might not be the prettiest. It may lack some bells and whistles. It probably won't use the most sophisticated algorithm under the sun, but it works. Why bother with MVP? First, it helps you understand real-world deployment. An MVP helps you understand early on what it would take to move a model into a real-world application, including the operational considerations and hurdles that need to be overcome. Second, you can validate your assumptions. Data science is messy and the real world rarely lines up with your neat textbook examples. An MVP forces you to confront real data and get user feedback early on. You might learn that your original problem statement was off, or your initial model doesn't actually offer much improvement.
>
> **[1:36](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/make-minimal-viable-products-mvp-your-friend?u=76281980&t=96)** Third, you can prioritize relentlessly. Big projects have scope creep, that tendency to grow until they are unwieldy. Focusing on an MVP helps you ruthlessly prioritize features and data sources based on what must be there to prove value. Lastly, you get tangible wins. A fully functional, albeit basic product, builds confidence among stakeholders and keeps your team motivated. Demonstrating a working solution fuels momentum and opens up opportunities to get funding or resources for future development. But hold on. Does this mean low quality? Absolutely not. Minimum doesn't mean sloppy. Your MVP still has to be well-structured and perform sufficiently well to deliver meaningful insights. Think of your data science project like building a house. You wouldn't focus on the art on the walls until the foundation is laid. An MVP is your solid foundation. Build it, get feedback, quickly improve, and only then start decorating with the fancy advanced features. This method will save you time, money, and a whole lot of potential headaches.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Science](../../Topics/Data%20Science.md) (4)
> **Env Vars:** mvp (8)
> **Definitions:** is a  (1)
> **Analogies:** think of it as (1)
> **Speakers:** - here (1)

#### [The point of diminishing returns](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/the-point-of-diminishing-returns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/the-point-of-diminishing-returns?u=76281980&t=0)** - In [Data Science](../../Topics/Data%20Science.md), there's an undeniable thrill in pursuing perfection, that relentless drive to squeeze every last drop of accuracy or predictive power out of your model. The idea is more data, more complex models, more tweaking, and surely those [Performance Metrics](../../Skills/Cybersecurity/Performance%20Metrics.md) will keep soaring, right? Well, not quite. That's where the concept of diminishing returns comes in. It's like baking. Those first few ingredients make a huge difference, but each extra sprinkle you add has less and less impact on the final taste. Consider the example of creating an email spam blocker. Let's say you're building a model to classify emails as spam or not. You start with a simple model based on keywords and sender information. This gives you 90% accuracy, pretty decent. You then add features like email length, time of day, and patterns in the subject line. Your accuracy jumps to 92%. Encouraged. You invest time investigating advanced text analysis, techniques, building custom features based on [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) frequency. After significant effort, you managed to reach 93%. That final 1% gain might have taken far more money, time, and effort than achieving the first simple model with 90% accuracy.
>
> **[1:35](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/the-point-of-diminishing-returns?u=76281980&t=95)** That is why it's important to track your efforts and your gains. Here's where it gets practical. Always visualize the improvement in your model's key metrics over time and effort. Plot the number of model iterations, the amount of data you've used, or the time invested on the x-axis. Track your performance metric, accuracy, precision, or some other metric on the Y-axis. You'll likely notice that the curve initially has a steep upward slope, but eventually flattens out. The exact spot where it flattens significantly is when you might be reaching your point of diminishing returns. This point of diminishing returns is a reminder that data science [products](../../Skills/Software%20Development/Microsoft%20Products.md) are also subject to cost benefit analysis, not just examining the technical performance of a model. To think about the cost benefit of a data science project, you can ask yourself about each of these factors. Cost of complexity, each model refinement probably requires more time, computational resources or expertise. Are these costs justified by the marginal gains you're seeing? Opportunity cost. Could your team's time be better spent on another project or exploring a different approach? Business need. Does that extra 1% reduction in spam reaching users inboxes make a substantial difference to their experience?
>
> **[3:09](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/the-point-of-diminishing-returns?u=76281980&t=189)** Or is it a nice to have at this point? Is the substantial extra cost and time expended worth the effort? The goal is never to achieve perfection. It's to provide value. Sometimes a good enough model that gets deployed quickly, addresses the core problems, costs a minimum amount of money and time, and is easy to understand offers far more practical benefit than endlessly pursuing marginal gains. Think about your own work. Pick a project and try tracking the model performance improvement as a function of effort. Can you identify where you might be past the point of diminishing returns?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Science](../../Topics/Data%20Science.md) (3), [Performance Metrics](../../Skills/Cybersecurity/Performance%20Metrics.md) (1), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1)
> **CLI Commands:** make (2)
> **Definitions:** is a  (1)
> **Analogies:** it's like (1)
> **Speakers:** - in (1)

#### [Why do data science projects fail?](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/why-do-data-science-projects-fail?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/why-do-data-science-projects-fail?u=76281980&t=0)** - The harsh reality of [Data Science](../../Topics/Data%20Science.md) is that a significant number of data science projects fail to deliver on their potential. They might get stuck in development purgatory, produce results that are irrelevant to the business, have insurmountable implementation issues, or lose the confidence of their business customers. So what are we going to do? Well, understanding these common pitfalls is the first step in avoiding them. Let's dissect some of the primary reasons why data science projects go off the rails. First, fuzzy goals and success metrics. Imagine setting off on a road trip without a clear destination. Sounds crazy. Many data science projects begin with vague objectives like let's use data to improve things. This lacks a specific, measurable target essential to guide the project and evaluate its ultimate success. Second, the project management gap. Data science isn't purely technical. Project management principles like clear timelines, well-defined milestones, contingency plans, resource allocation, and stakeholder communication are critical. Yet many data science teams ignore project management 101 principles, leading to delays and misaligned expectations. Third, resource bottlenecks. Data science is resource intensive.
>
> **[1:36](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/why-do-data-science-projects-fail?u=76281980&t=96)** It requires not just data, but appropriate software, computational power, and crucially, skilled data scientists. Underestimating these needs can lead to project stalling with insufficient tools, a lack of necessary expertise, and a loss of customer confidence when the data science team has to return to the customer to say they fail to anticipate the costs, software needs, [human resources](../../Skills/Artificial%20Intelligence%20(AI)/Human%20Resources%20(HR).md), or some other necessary component. The time factor. Quality data analysis and model building takes time. Rushing a project or not allocating enough time for exploration, cleaning, and iteration results in subpar models that miss the mark. Misaligned incentives. Data scientists often get excited by bleeding edge [Algorithms](../../Skills/Software%20Development/Algorithms.md) and technical elegance. But if the incentives within the organization solely reward complexity over utility, they may build solutions that are impressive in theory but impractical for the real world. Missing executive support. Successful data science initiatives often need a champion at the senior management level. Someone who understands its potential helps navigate organizational hurdles and protects the project from getting prematurely axed. The takeaway is that data science isn't magic.
>
> **[3:10](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/why-do-data-science-projects-fail?u=76281980&t=190)** It requires careful planning, strategic investment and alignment between those building the models and those ultimately making the decisions. Projects that overcome these potential failures become the success stories that demonstrate the power of data-driven insights for the organization. Here's a task for you. Select one of your current projects and check how it performs against the checklist above. Does it have clear goals and success metrics? How well is the project being managed in terms of tracking milestones, deadlines, risks and resources? Does the project have senior management support? If the answer to these questions are all positive, then you're probably in good shape. Otherwise, you may want to pause and revisit the gaps, which could cause the project to fail.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Science](../../Topics/Data%20Science.md) (10), [Human resources](../../Skills/Artificial%20Intelligence%20(AI)/Human%20Resources%20(HR).md) (1), [Algorithms](../../Skills/Software%20Development/Algorithms.md) (1)
> **CLI Commands:** rails (1)
> **Analogies:** imagine (1)
> **Speakers:** - the (1)

#### [Plan for deployment](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/plan-for-deployment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/plan-for-deployment?u=76281980&t=0)** - Think of a [Data Science](../../Topics/Data%20Science.md) model, like a finely-crafted surgical scalpel. It may be brilliant, sharp and polished, but its true value lies in how it's used. Many data science projects fall into the trap of obsessing over model perfection, only to discover that when it's time to actually use the results, nobody quite knows what to do with them. Remember, the goal isn't just a model, it's real-world impact. That's where a deployment plan comes in, and why it should be considered right from the start of your project. Here are some key questions for deployment to ask yourself, how will the model be used? Will the results be fed into a dashboard? Directly triggered action in another system, or support human [Decision-Making](../../Skills/Data%20Science/Decision-Making.md)? Each has different implications for how the model needs to be integrated. Who is the user? Is it technical staff, customer service representatives or executives? Their comfort with data will shape how you'd need to present insights. Deployment environment. Where will it live? Is it in the cloud, a local server or embedded in an existing software application? This impacts the technical choices you'll make. Required speed and frequency. Does the model output need to be in real time or can there be some delay in processing?
>
> **[1:34](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/plan-for-deployment?u=76281980&t=94)** How often will predictions need to be refreshed? Maintenance and monitoring. How will you check that the model continues to perform? Who is responsible for retraining when things go out of sync? These questions emphasize why it's important to pilot and iterate. Don't wait until your model's a masterpiece to start thinking about deployment. Even with a simple, early version of your model, set up a pilot test within its intended operating environment. This achieves a few critical things. It gives you a reality check. You'll discover early if your assumptions about data flows, user needs and technical constraints were accurate. It helps you gain buy-in seeing the model in the wild, even if imperfectly, helps stakeholders visualize its potential and gets them invested in the project. It lets you make iterative improvements. Real-world feedback often reveals aspects of your model or output format that need refinement. Long before you've spent countless hours chasing theoretical perfection, try this on one of your own projects. Pick a project that is still in the early stages, ask yourself if you have thoroughly examined the key questions for deployment. For this project, do you know how the model will be used, and who is the user? Is the deployment environment experienced
>
> **[3:06](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/plan-for-deployment?u=76281980&t=186)** at implementing models like the one you're building, or are you breaking new ground? Once you begin asking these types of questions for this model, you may get concerned about the deployment environment and consider the MVP approach.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Science](../../Topics/Data%20Science.md) (2), [Decision-Making](../../Skills/Data%20Science/Decision-Making.md) (1)
> **CLI Commands:** make (2)
> **Env Vars:** mvp (1)
> **Prerequisites:** set up (1)
> **Speakers:** - think (1)


### 2. Database Selection and Quality Checks

[↑ Back to Table of Contents](#table-of-contents)

#### [Comb the literature](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/comb-the-literature?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/comb-the-literature?u=76281980&t=0)** - Imagine you're a basketball coach, would you have your team enter the big tournament without background research? Of course not. Effective coaching starts with understanding not just your own team's talents and opportunities, but also combing through videos, reports, and analysis of the opponents. The same goes for [Data Science](../../Topics/Data%20Science.md). We often look around to understand what has been done before diving headfirst into a major analysis. I call this combing the literature. Now, a literature search is not critical for a small project, though it might be helpful. That said, if you're about to embark on a major modeling project, it's definitely a good idea to do some literature review since it serves multiple purposes. First, feature inspiration. Let's say you're building a customer churn prediction model. What behaviors and demographics have been significant in similar studies? Their findings become a springboard for your [Feature Engineering](../../Skills/Data%20Science/Feature%20Engineering.md). Second, data source scouting. Maybe you need data on weather patterns for an agriculture project. Digging into past research reveals reliable sources and any potential limitations to keep in mind. Third, model exploration. If your problem is common such as fraud detection, then let's learn what other people have already tested.
>
> **[1:37](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/comb-the-literature?u=76281980&t=97)** Research exposes what model architectures typically perform well and where they might fall short in your specific use case. And fourth, realistic benchmarks. Published papers often include [Performance Metrics](../../Skills/Cybersecurity/Performance%20Metrics.md). This gives you an achievable baseline and lets you spot if your results are shockingly good, which suggests maybe you had an error such as data leakage or vastly underperforming, which hints that more work is likely needed. So that's why combing the literature is worthwhile. And here's how to comb effectively. First, target keywords. Don't just search broadly for data science. Brainstorm terms specific to your problem, domain and model type. Second, use reputable sources. Focus on academic journals, conference papers, and maybe even code repositories like [GitHub](../../Skills/Software%20Development/GitHub.md). It's quality over quantity, so don't get fooled by marketing pamphlets that promise the world and deliver nothing. Third, look beyond the abstract. Skim the methods section and results. That's where the real insights about features, models, and challenges lie and not in the abstracts and conclusions. Fourth, do a snowball search. You might be asking, what's that? This strategy has you look through an article's references
>
> **[3:10](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/comb-the-literature?u=76281980&t=190)** as a quick way to grow or snowball your research sources. So imagine you found a super relevant paper. You then investigate their citations and the papers that cited them. You can try this right now. Pick a project that you're either starting or planning to start soon. Follow the steps described above and do some combing of the literature. You'll likely find that you're not the first person stepping into this space, so what can you learn from others? You might discover that crucial 20% that puts your project way ahead of the competition.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Science](../../Topics/Data%20Science.md) (2), [Feature Engineering](../../Skills/Data%20Science/Feature%20Engineering.md) (1), [Performance Metrics](../../Skills/Cybersecurity/Performance%20Metrics.md) (1), [GitHub](../../Skills/Software%20Development/GitHub.md) (1)
> **Analogies:** imagine (2), such as (2)
> **CLI Commands:** find (1)
> **Tools:** github (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - imagine (1)

#### [Triaging data sources](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/triaging-data-sources?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/triaging-data-sources?u=76281980&t=0)** - Just as patients in an ER need to be triaged to prioritize care and stabilize those most in need, [Data Science](../../Topics/Data%20Science.md) demands a similar triage approach. Not all data sources are created equal. Some might require substantial cleaning, analysis, and transformations before they're usable, or are cost prohibitive. And quite frankly, perfectly clean, well-aligned data is the unicorn of our field. The 80/20 rule of data triaging means we're going to quickly determine whether a data set will be useful by examining some key factors. First is availability. Is the data publicly available or is it behind a paywall? Do you need special permissions or are there security concerns? Knowing major logistics barriers can prevent you from chasing a dead end. Second is costs. Data can be surprisingly expensive. Are there usage fees and how do they compare with your budget? How much are the storage costs? Will you need to invest in new software to process it? Third is utility. Does the data actually contain the information you need? Do the fields represent needed data or nice-to-haves? Beware of proxies. Just because it's related to your topic doesn't mean it's the right fit. Fourth is frequency of updates. If you are predicting a [Real-Time](../../Skills/Database%20Management/Real-Time.md) outcome,
>
> **[1:36](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/triaging-data-sources?u=76281980&t=96)** then stale annually, updated data won't cut it. Find data with time resolution and update frequency that aligns with your problem. Fifth is geographic resolution. Are you studying zip code level sales trends? Then nationwide data won't help. Make sure the granularity of the data matches your scope. Try this yourself. First, pick one of your most important projects. Using online resources, colleagues and other sources, identify the possible data sets. For each possible data set, assess the data set based on criteria of availability, costs, utility in terms of the available features, frequency of updates, and geographic resolution. What insights do you gain that will help you in triaging data sources? I always find it useful to obtain a quick sample of the data. This quick look can often reveal formatting issues, missing values, and whether it's worth a deeper dive. Data triage is about making tough calls. Be prepared to say no to a source that looks initially promising, but will take a whole lot of time or money for minimal gain.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Science](../../Topics/Data%20Science.md) (1), [Real-Time](../../Skills/Database%20Management/Real-Time.md) (1)
> **CLI Commands:** find (2), make (1)
> **Speakers:** - just (1)

#### [Checking data quality](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/checking-data-quality?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/checking-data-quality?u=76281980&t=0)** - Imagine building a beautiful house, but on a foundation of sand. That's the risk you take working with unchecked data. Garbage in, garbage out is much more than a phrase, it's a truism. Bad data can derail models, leading to laughably incorrect predictions and costly business mistakes. So let's roll up our sleeves and get into some [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) detective work so you can set the right foundation for everything that follows. To do that, let's build you a quality control toolkit. Here are the key tools you'll need in your kit. First, is the missing this count. Empty cells are holes that can cause trouble in your model. It's important to understand not only the percentage of missing values for each column, but also to test if there is a pattern then in the missingness. Dig a little deeper. You should inquire about why the data is missing. High rates of missing data point to [Data Collection](../../Skills/Data%20Science/Data%20Collection.md) problems or signal that correcting these missing data might not be worth the hassle. Range check reality. Does it make sense for someone's age to be 450 or a product price to be negative $10? Simple min-max checks reveal errors that might slip into complex models causing poor performance. Outlier review.
>
> **[1:34](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/checking-data-quality?u=76281980&t=94)** Data points far outside the norm can be genuine data points or mistakes. Visualizations such as histograms and box plots help identify these issues and provide insights that will be useful later for modeling. Sometimes outliers hold valuable insights. Other times they distort analysis. Best to discuss outliers with the business customer to understand if they are real data points or errors. Timeliness matters. When was the data last updated? Stale data can lead to outdated insights and modeled interactions. If your dealing with a rapidly changing situation, make sure your data source has a refresh rate to match your business needs. Formatting issues. Are dates stored consistently, text fields riddled with typos? Inconsistent formatting is a headache waiting to happen during analysis. Remember that we want to be applying the 80/20 rule. That means we're going to want to prioritize. Not all columns are equal. Focus on the core features driving your model. We'll want to sample smartly. You don't need to hand inspect every row. Use descriptive [Statistics](../../Skills/Data%20Science/Statistics.md) and random sampling to understand the overall quality of the features. And we're going to want to automate the basics. Set up scripts for range checks, missingness reports,
>
> **[3:10](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/checking-data-quality?u=76281980&t=190)** and outlier alerts. These save time while keeping an eye on things. For your own work, select one of your most important projects. With fresh eyes, review exactly what data quality checks you have put in place. Confirm that you've examined the percent missing, that the ranges are valid, and the formatting is consistent. If anything is amiss, then you should ask yourself, how is this impacting downstream workflow? And what other data projects of yours have similar issues? The real world is messy and your data may be a little messy too. Don't get discouraged by imperfections. The goal is to understand how bad the data is and whether you can clean it up by fixing errors, filling in reasonable missing values, using imputation, and correcting range issues, or work around it by removing problematic features or adjusting models accordingly, or look elsewhere. If the data's beyond saving, time spending fixing it is worse than seeking a better source.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) (2), [Data Collection](../../Skills/Data%20Science/Data%20Collection.md) (1), [Statistics](../../Skills/Data%20Science/Statistics.md) (1)
> **CLI Commands:** make (2)
> **Definitions:** is a  (2)
> **Analogies:** imagine (1), such as (1)
> **Prerequisites:** you'll need (1), set up (1)
> **Speakers:** - imagine (1)

#### [Dealing with missing data](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/dealing-with-missing-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/dealing-with-missing-data?u=76281980&t=0)** - Imagine building a beautiful map of the US road system, but sections of your data set are blank. You are missing some roads, and some states have almost no data. Other states are 100% complete. What can you do with this data set? Can it still be used to create reasonable driving routes? The answer is you could get some value out of the map, depending on where you're going to use it. That's the frustration of missing data. It can still be useful in many cases, but you need to work with it carefully. It's a widespread issue, but there are smart ways to handle it. The first step is to assess the impact of the missingness. How much is missing? A few scattered missing values, such as 1% of the records, is very different from missing 1/3 or more of a feature. While there are no absolute rules for an acceptable level of missingness, I get uncomfortable when I'm imputing more than a few percent of the data. Identifying what percent is missing is very straightforward, and you can quickly see where you're in trouble. Is there a pattern of absence? Are values missing completely at random? Is there a relationship between missingness and other variables? Understanding the why behind missing data
>
> **[1:34](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/dealing-with-missing-data?u=76281980&t=94)** helps you choose the right fix. You also need to consider the implications on [Algorithms](../../Skills/Software%20Development/Algorithms.md). There are some tolerant algorithms, like [Decision Trees](../../Skills/Artificial%20Intelligence%20(AI)/Decision%20Trees.md) or certain ensemble models that can handle missing data without major modeling interruptions. Other algorithms, such as linear aggression, have to drop observations when a feature is missing. I recommend you spend some time exploring imputation, which are methods for filling in the missing values. Here are some basic but powerful methods. Mean or median imputation. By replacing the missing values with the average or middle value of that feature, you get a very quick but dirty method. It fills in missing values, but it ignores important information about how the features relate. Similarly, mode imputation for categorical features is a quick and crude way to fill in gaps using the most frequent category observed. I prefer predictive imputation methods. Here we build a model to estimate the value of the missing data points using the other data points. It's more work, but you might want to use them if the simpler methods of mean, median, or mode imputation are too crude. The 80/20 approach to dealing with missing data involves making sure that you don't panic,
>
> **[3:10](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/dealing-with-missing-data?u=76281980&t=190)** but take a systematic approach, starting with basic diagnostics, simple imputations, then moving on to more advanced. Always remember that sometimes the smartest move is to drop a feature that is missing too many records rather than try to impute. If you want to learn more about imputation, there are some excellent references. Links to some of these references are provided in the accompanying text.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Algorithms](../../Skills/Software%20Development/Algorithms.md) (3), [Decision Trees](../../Skills/Artificial%20Intelligence%20(AI)/Decision%20Trees.md) (1)
> **Analogies:** such as (2), imagine (1)
> **Definitions:** is a  (1)
> **Speakers:** - imagine (1)

#### [Finding strong features](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/finding-strong-features?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/finding-strong-features?u=76281980&t=0)** - Not all features are equally useful. Finding features that are strong predictors is absolutely critical to building good models. Without strong features, advanced models will still struggle. Let's review some of the main methods used to identify strong features. Filter-based methods are useful because they're very fast. If you had tens of thousands of potential features, you might employ these speedy methods where you simply test the relationship between the target and the feature one-on-one. Filtering techniques include correlation analysis, chi-square tests and other univariate tests. They only test, though, one-on-one relationship between the outcome and the feature, so you risk dropping features that have more complex relationships. Feature selection wrappers are a traditional algorithmic approach where you explore changing the number of features one after another. Methods include forward selection, where you start with one feature and then add others, and backwards selection where you start with all features and then remove the weakest ones. It gives quick results that are often strong, though, perhaps not the most optimal ones. The best solutions to feature selection are embedded methods.
>
> **[1:33](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/finding-strong-features?u=76281980&t=93)** Some models have a method of feature selection built in as part of the model-building algorithm itself. Think of tree-based methods like cart, random forest, and gradient-boosted machine learning where features that are not part of the decision are not selected. The feature importance of zero is a clear sign that the feature should be dropped. Where the beauty of these methods is that you get model development and feature selection at the same time. Feature importance scores are helpful, but don't stop there. It is useful to really understand the role of the feature by developing feature importance plots, which show how much each feature contributed to the model's predictions as well as partial dependence plots that show how a feature influences the outcome, going beyond just correlation. Here is where domain knowledge helps. Is the direction of the partial dependence plot in line with expectations? Looking back on one of your recent projects, what methods did you use for feature selection? Did you apply filtering or an embedded method? In summary, the 80-20 approach to feature selection is to start simple, then experiment. Filtering methods are an excellent, the rough first pass. While they may drop some features that have interaction term effects, overall, they are a good guide.
>
> **[3:08](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/finding-strong-features?u=76281980&t=188)** Embedded methods are a nice way to get your model and feature selection done at the same time and are often a better bet.

> [!info]- Semantic Content
>
> **Definitions:** is a  (1)
> **Speakers:** - not (1)


### 3. Simple Models First

[↑ Back to Table of Contents](#table-of-contents)

#### [Feature transformations](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/feature-transformations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/feature-transformations?u=76281980&t=0)** - Feature transformations are one of the best examples of applying the 80-20 rule of [Data Science](../../Topics/Data%20Science.md). They can result in boosting performance with minimal effort since you don't need to gather new data sources or clean data sets. The features are already prepared and just need some creativity to be combined. There are many reasons to transform features. The most basic reason is better performance due to representing the underlying relationships more accurately. Sometimes scaling a feature by a log transformation or squaring can substantially improve the model performance by increasing the amount of variance the model explains. Simply put, it gets the job done better. In other cases, the algorithm assumptions work best for certain types of data. Think of [Linear Regression](../../Skills/Data%20Science/Linear%20Regression.md), which can give good results in many situations, but works best with normally distributed data. A feature transformation can improve the model performance substantially in this case. There are many transformations that can be readily explored. A few that I like to use include log and square root transformations. They can compress values with a wide range, helping tame outliers and is quite useful for features like income or product sales. Scaling, such as standardization and normalization, rescales features to have similar ranges. This helps when features are measured
>
> **[1:36](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/feature-transformations?u=76281980&t=96)** on vastly different units. Adding in polynomial terms, adding squared and cubic terms is often a great way to represent complex non-linear relationships with minimal effort. Try this on your own model. The 80-20 approach for feature transformations involves, first, visualizing using histograms and scatterplots to see if a feature is a good candidate for transformations. Do you have good candidates identified? Embrace experimentation with feature transformations. Experiment with some of the common transformations to see if the model is improving. Do you see better model performance? Remember, feature transformations are not magic bullets, but they're very quick, often powerful, and sometimes underused tools in your data science arsenal.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Science](../../Topics/Data%20Science.md) (2), [Linear Regression](../../Skills/Data%20Science/Linear%20Regression.md) (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - feature (1)

#### [Transforming continuous features](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/transforming-continuous-features?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/transforming-continuous-features?u=76281980&t=0)** - Imagine you're analyzing the relationship between rainfall and crop yield. It's not a simple, more rain is always better situation. Plants can drown too. This is where transforming continuous features like rainfall becomes essential. Continuous features look simple, but often hide complex nonlinear patterns. Transformations unlock these patterns and can boost even simple models. We already discussed some simple transformations like log, square root, scaling, and adding polynomial terms. Another simple transformation is binning. Binning means slicing a continuous feature into ranges. Think of it like grouping different rainfall amounts, one to 10 millimeters drought, 10 to 30 millimeters ideal growth, more than 30 millimeters oversaturation. Now within a model like [Linear Regression](../../Skills/Data%20Science/Linear%20Regression.md), we're not limited to a single regression coefficient to represent the impact. Each bin can have its own impact on crop yield revealing those non-linear effects. Of course, more complicated [Algorithms](../../Skills/Software%20Development/Algorithms.md) can allow for non-linear interactions without the need for transformations. Another very useful transformation is turning multiple features into something more insightful. Ratios, such as the price per square foot, and [products](../../Skills/Software%20Development/Microsoft%20Products.md) of two features can often provide
>
> **[1:35](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/transforming-continuous-features?u=76281980&t=95)** substantial value. The 80/20 approach to transformations is about doing the simple first, and then seeing what helps. Visualize the data using histograms and scatterplots to reveal if a feature might benefit from transformation, as well as test some of the other transformations like binning and ratios. For ratios, I find it useful to learn what ratios have been used in previous modeling, or which resonate with the clients. Items that are readily interpretable can help later in communicating the results to the client. The goal is not to do a brute force approach of all possible transformations of all variables, but rather define the features and transformations that are most likely to succeed. Tracking performance is critical. Always evaluate if a transformation improves your model's performance and interpretability. Remember, feature transformations are like a toolkit. Knowing when to use which tool empowers you to uncover insights that would otherwise stay hidden.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Linear Regression](../../Skills/Data%20Science/Linear%20Regression.md) (1), [Algorithms](../../Skills/Software%20Development/Algorithms.md) (1), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1)
> **Analogies:** imagine (1), think of it like (1), such as (1)
> **CLI Commands:** find (1)
> **Speakers:** - imagine (1)

#### [Interaction terms](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/interaction-terms?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/interaction-terms?u=76281980&t=0)** - Imagine you're baking a cake. Flour and sugar are important, but it's their interaction that creates the delicious result. Similarly, features in a [Data Science](../../Topics/Data%20Science.md) model can interact to create effects you can't see in isolation. That's where interaction terms come in. What are interaction terms? Essentially, you create a new feature by combining existing ones. Here are a few ways to do this. Multiplication. This is the most common type. Let's say you're predicting house prices with square footage and number of bedrooms. You could add an interaction term, such as a product of square footage times number of bedrooms. This new feature captures the idea that the impact of an extra bedroom might be different depending on the size of the house. For example, maybe adding another bedroom to a small house has much more impact than adding one to a house that is very large. You could also examine division by creating ratios. Price per square foot is a potentially more meaningful feature than either price or square footage alone. Also, you can go beyond basic arithmetic and get creative. Calculate the average of multiple features, take the difference between them, or use more complex functions. You may be wondering,
>
> **[1:32](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/interaction-terms?u=76281980&t=92)** "Why should we create interaction terms?" The first reason is that it can improve accuracy. If important interactions exist, a model with interaction terms will often outperform those without. Also interaction terms let your model learn patterns beyond this feature increases the outcome. They uncover how features influence each other. Additionally, they help you tackle non-linearities. The real world is rarely perfectly linear. Interaction terms introduce flexibility to capture curves and bends in the relationship between features and your target variable. In applying the 80/20 approach, domain knowledge is key. Pick one of your projects and work with subject matter experts to identify which features make sense to interact. Don't just multiply blindly. First, start simple by focusing on pairwise, two-feature interactions. More complex combinations can get computationally heavy and may not provide much yield. Remember to be aware of overfitting. Too many interaction terms can lead to models that fit your trading data superbly, but fail in the real world. Did your model improve with the introduction of interaction terms? Did you generate new insights?
>
> **[3:07](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/interaction-terms?u=76281980&t=187)** Interaction terms are a way to supercharge your models. By letting features work together, you can unlock insights and improve results.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Science](../../Topics/Data%20Science.md) (1)
> **Analogies:** imagine (1), such as (1), for example (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Best Practices:** remember to (1)
> **Warnings:** be aware (1)
> **Speakers:** - imagine (1)

#### [Adding data sources](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/adding-data-sources?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/adding-data-sources?u=76281980&t=0)** - Let's start this video with a key takeaway. Throwing fancy [Algorithms](../../Skills/Software%20Development/Algorithms.md) at limited data gets you only so far. Unleashing your model's potential often means finding the right data sources and features to feed it. Imagine you're building a self-driving car. Top-notch [Computer Vision](../../Skills/Artificial%20Intelligence%20(AI)/Computer%20Vision.md) algorithms are crucial, but without a map and sensor data, your car goes nowhere. The same applies to [Data Science](../../Topics/Data%20Science.md) projects. New data unlocks new insights. Before you dive into doing a lot of advanced modeling, ask yourself these critical questions. What information is definitely missing? What problem are you trying to solve, and what data points would ideally help answer these questions? Doing research as well as brainstorming with subject matter experts about what features might be strong predictors is important. Have you included most of these strong features in the model already? Do you have major gaps? Once you've established what your gaps are, it's time to find those data sources. Some common sources include internal sources. Does your company collect data you haven't thought of? This could include customer interactions, website logs, transaction, and application data. Public data is another useful source.
>
> **[1:34](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/adding-data-sources?u=76281980&t=94)** Government websites, academic repositories, and open data sites often hold treasures, available often without access charges. Commercial providers that specialize in data on demographics, markets, or industry trends can be a game changer if the cost is worth it, but beware of the long-term costs of being dependent on external data vendors. And of course, web scraping can be a useful option, but be careful. Extracting data from websites is tempting, but there are restrictions due to terms of service and ethical considerations. Consider one of your current data projects. Have you explored other possible data sources? If you have found another data source, then think about these things. Incremental value. Does this data offer genuinely new information, or does it just duplicate what you have with a different spin? Price. Is it free, a one-time cost, or a recurring subscription? Factor this against the potential gains. Availability. Can you access the data easily or is permission needed? Update frequency. Is this stale data that won't help you, or is it timely enough for your needs. Quality.
>
> **[3:07](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/adding-data-sources?u=76281980&t=187)** Review the documentation on how the data was collected, it's cleanliness, and if it has known limitations to understand if it is acceptable for your problem. In applying the 80-20 approach to adding data sources, it is important to start with good enough since sometimes free external data or readily available local data can massively boost your model before seeking expensive custom data sets. I find it helpful to get some small data samples first to assess its relevance, quality, level of completeness, and update frequency before committing. Lastly, don't be afraid to walk away. Remember, adding data sources is an investment, one that will cost time and money. If the cost, hassle, or questionable quality outweigh potential benefits, focus on features that you can actually use well.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Algorithms](../../Skills/Software%20Development/Algorithms.md) (2), [Computer Vision](../../Skills/Artificial%20Intelligence%20(AI)/Computer%20Vision.md) (1), [Data Science](../../Topics/Data%20Science.md) (1)
> **CLI Commands:** find (2)
> **Documentation:** the documentation (1)
> **Definitions:** is an  (1)
> **Analogies:** imagine (1)
> **Warnings:** be careful (1)
> **Speakers:** - let (1)

#### [Linear regression](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/linear-regression?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/linear-regression?u=76281980&t=0)** - Least squares linear aggression has been around for over 200 years and is a terrific algorithm. In fact, when the residuals are normal, it is the best linear algorithm. More advanced [Algorithms](../../Skills/Software%20Development/Algorithms.md) are tempting and can often offer stronger predictive value, but don't underestimate the power of simplicity and explainability. [Linear Regression](../../Skills/Data%20Science/Linear%20Regression.md) is often the best place to start when predicting continuous outcomes, offering insight, simplicity of interpretation, and a solid baseline on which to improve. At its heart, linear aggression is about finding the best fit line through a multidimensional scatterplot of your data. Since your features can be transformed easily, you can capture many non-linear relationships with this simple modeling method. Some of my favorite reasons for starting with linear regression are that it is computationally fast, easy to interpret, and readily understood by clients. You can review the coefficients of the regression and ask yourself and your client if the direction of the coefficients makes sense. The model creates a strong baseline for comparison. Complex models may improve performance marginally, but at the cost of interpretation, time, and possibly money. The 80-20 approach to modeling means
>
> **[1:34](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/linear-regression?u=76281980&t=94)** that linear aggression is not just for beginners. Rather, it tackles surprisingly complex problems even in experienced hands. As always, visualize the data to see if linear relationships make sense, or if you should transform the data. Examine the residuals in the model performance. If the residuals are normally distributed, then linear regression is often particularly strong. If you're seeing patterns in the residuals, then you probably should consider [Feature Engineering](../../Skills/Data%20Science/Feature%20Engineering.md), adding new features and data sources, or a more advanced model. Similarly, if the model performance is insufficient to be useful, then you should explore new features and data sources, but also be open to moving to a more advanced model. Even if linear aggression isn't your final model, the insights gleaned along the way are invaluable, and in some cases, maybe the good enough solution. Time to review one of your recent projects. Did you jump straight to an advanced machine learning model, or did you first explore regression? If you did explore a linear regression model first, how much better was the advanced model in terms of performance? Was the time and effort worth the incremental impact?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Linear Regression](../../Skills/Data%20Science/Linear%20Regression.md) (4), [Algorithms](../../Skills/Software%20Development/Algorithms.md) (1), [Feature Engineering](../../Skills/Data%20Science/Feature%20Engineering.md) (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - least (1)

#### [Logistic regression](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/logistic-regression?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/logistic-regression?u=76281980&t=0)** - The logistic function, the basis of [Logistic Regression](../../Skills/Software%20Development/Logistic%20Regression.md) is another old algorithm. Its history dates back more than 100 years, and it is still providing a great deal of power and insight today for problems with binary or classification outcomes. Binary outcomes, ones that take on a zero or one, either yes or no, are found throughout the business world. In [Banking](../../Skills/Software%20Development/Banking.md), there is risk and fraud. In health, we predict mortality, and retail where we find binary outcomes like cross-sell and churn. Logistic regression can even be used when there are more than two outcomes or when the outcomes are ordered, like predicting if someone will finish high school, college, graduate school, or higher. Logistic regression is a great example of using the 80-20 rule of [Data Science](../../Topics/Data%20Science.md) because it gives us a prediction of [Probability](../../Skills/Data%20Science/Probability.md) that is useful for [Decision-Making](../../Skills/Data%20Science/Decision-Making.md) and it is readily interpretable. The coefficients tell us how much a feature influences the probability and in what direction. By applying a threshold for the probability, we obtain a classification algorithm that is fast and simple. Select one of your own models of a binary or categorical variable. First try with the logistic regression model and explore the results as well as the direction of the coefficients. You can get this model in front of customers.
>
> **[1:36](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/logistic-regression?u=76281980&t=96)** After you've done this, explore some feature transformations. These transformations can be a powerful way to improve your logistic regression model. Once you have this model, then explore more advanced models to see how the incremental level of effort improves the model compared with logistic regression.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Logistic Regression](../../Skills/Software%20Development/Logistic%20Regression.md) (6), [Probability](../../Skills/Data%20Science/Probability.md) (3), [Banking](../../Skills/Software%20Development/Banking.md) (1), [Data Science](../../Topics/Data%20Science.md) (1), [Decision-Making](../../Skills/Data%20Science/Decision-Making.md) (1)
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Speakers:** - the (1)


### 4. Tracking Performance

[↑ Back to Table of Contents](#table-of-contents)

#### [Choosing metrics](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/choosing-metrics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/choosing-metrics?u=76281980&t=0)** - Not all metrics are equally useful. Imagine you're evaluating two fitness trackers. One flawlessly counts your steps. The other also tracks calories burned and heart rate, but costs twice the price, which is better? It depends on your goal. [Data Science](../../Topics/Data%20Science.md) metrics are very much the same. Different metrics shine a light on different aspects of performance, and some are more appropriate than others for specific problems. Some commonly used metrics include accuracy, precision, recall, F1 score, area under the curve, mean absolute error, and mean absolute percent error. Here are a few simple suggestions for these metrics. Accuracy is a simple metric. For a binary outcome, like spam or not spam, it indicates what percentage of predictions did your model get right? It works well for balanced data sets where the outcome is relatively common, but not well for rare events like fraud detection. Precision is about minimizing false positives, while recall focuses on catching true positives. The distinction is vital when mistakes have unequal costs. A common situation since often, false positives have very different implications from false negatives.
>
> **[1:39](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/choosing-metrics?u=76281980&t=99)** F1 scores balance precision and recall. They are helpful when you need your model to be both accurate and not miss important instances. Area under the curve is especially useful for classification models. It measures how well your model separates positive and negative classes regardless of a specific cutoff threshold. For continuous outcomes, there are metrics, like the mean absolute error and the mean percent error. There is a science and art to matching the right metric to the right problem. After all, detecting rare diseases needs different metrics than predicting product sales. Let's get back to that fraud example. Here is where class imbalance matters. Let's say fraud occurs in only 0.1% of the cases. That means that a simple model that marks all cases as not fraud, will be extremely accurate, but useless. We also need to consider the business context. Does your model need to be easily explained? Some metrics are easier to understand than others for non-technical stakeholders. Go back to one of your main models. The 80/20 rule of metrics means you should focus on one or two primary metrics. Can you select one or two metrics for this model that directly align with your project goals?
>
> **[3:15](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/choosing-metrics?u=76281980&t=195)** Also, have you considered the trade-offs of that metric? After all, chasing a model with outstanding metrics on one front might mean sacrificing performance in another area. Communicate clearly with your business stakeholders about what your metrics mean and why you selected them. If you take those steps, then you should end up with a good choice for metrics. These will help you evaluate your model honestly. Set the stage for continuous model improvement and make data-driven decisions with confidence.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Science](../../Topics/Data%20Science.md) (1)
> **Definitions:** is a  (2), means that (1)
> **CLI Commands:** make (1)
> **Versions:** 0.1 (1)
> **Cross-References:** go back to (1)
> **Analogies:** imagine (1)
> **Speakers:** - not (1)

#### [Designing simple dashboards](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/designing-simple-dashboards?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/designing-simple-dashboards?u=76281980&t=0)** - Imagine you spent weeks meticulously crafting a model that predicts customer churn with impressive accuracy. But when you present a long spreadsheet of results, eyes glaze over. That's where [Dashboards](../../Skills/Data%20Science/Dashboards.md) step in. They bridge the gap between complex analysis and actionable takeaways. There are some basic principles for creating simple and effective dashboards. First, understand and target your audience. Executives need a high level summary, while analysts might need more granular insights. Second, focus on key metrics. What are the two or three most important numbers? Resist the urge to cram everything in. Third, use clear visualizations. Choose charts that match the data type and the message. Simple bar charts and line graphs are often more powerful than flashy, complex visuals. Fourth, highlight changes over time. Is model performance slipping? Are key features drifting? Your dashboard should track trends, not just snapshots. Lastly, context matters. Numbers alone mean little. Add some brief text annotations to explain significant changes or patterns.
>
> **[1:36](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/designing-simple-dashboards?u=76281980&t=96)** Take a look at one of your dashboards. Have you included the right information for your target audience? You should have model [Performance Metrics](../../Skills/Cybersecurity/Performance%20Metrics.md). Does the chosen metric, such as accuracy or area under the curve, make sense? Are you tracking this over time for early deterioration warnings? Are you displaying feature importance? Do the most important features make sense in terms of the priority and direction? If the feature importance changes unexpectedly during a model refresh, that suggests there may be problems with your data or substantial data drift. Are you showing key distributions, such as mini histograms, of how important features are distributed and whether this distribution is shifting over time? Now that you've looked at your own dashboards, let's recall that 80/20 approach. First, start with a sketch of the dashboard, so you can prioritize the essentials. Get feedback early on by sharing with potential users. Do they understand the main message at a glance? Iterate, iterate, iterate. Dashboard should evolve with your model. Make regular based on what's most useful. Remember, a dashboard isn't just about pretty visuals. It's your tool to drive understanding, track progress,
>
> **[3:11](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/designing-simple-dashboards?u=76281980&t=191)** and trigger the right actions from your [Data Science](../../Topics/Data%20Science.md) insights.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Dashboards](../../Skills/Data%20Science/Dashboards.md) (4), [Performance Metrics](../../Skills/Cybersecurity/Performance%20Metrics.md) (1), [Data Science](../../Topics/Data%20Science.md) (1)
> **CLI Commands:** make (3)
> **Analogies:** such as (2), imagine (1)
> **Speakers:** - imagine (1)

#### [Rapid prototyping](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/rapid-prototyping?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/rapid-prototyping?u=76281980&t=0)** - In [Data Science](../../Topics/Data%20Science.md), sometimes the fastest path to the best solution is by building lots of good enough models quickly. Embrace experimentation and iteration. What are the advantages of rapid [Prototyping](../../Skills/Software%20Development/Prototyping.md)? Well, it allows you to uncover hidden assumptions. Early simple models, even if imperfect, expose flawed assumptions about the data or problem. Rapid prototyping is not just about failing fast, it's about learning from those failures. The early prototypes provide some benchmarking so you can see the improvement in the models. Additionally, these early prototypes allow you to get feedback from stakeholders early on, ensuring your project stays aligned with real world needs. One of my favorite ways of developing rapid prototyping is using [automated machine learning](../../Skills/Data%20Science/Automated%20Machine%20Learning%20(AutoML).md) software, AutoML for short. AutoML tools streamline large parts of the model building process. It assists a little in the [Data Cleaning](../../Skills/Data%20Science/Data%20Cleaning.md) process by identifying issues like missing values, format inconsistencies, and potential target leakage. It automatically tries different feature transformations and combinations so you don't have to manually explore them. It tests a large variety of [Algorithms](../../Skills/Software%20Development/Algorithms.md) to find ones that are suitable for your data and often does hyper-parameter tuning automatically. Have you tried AutoML software in your work?
>
> **[1:38](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/rapid-prototyping?u=76281980&t=98)** There are many options to choose from out there, including DataRobot, H2O, SageMaker, [Google Cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) AutoML, and [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) AutoML. AutoML is not a magic bullet, but is certainly helpful in the rapid prototyping process. But please remember that rapid prototyping is about progress, not perfection. Embrace the power of building quickly, testing often, and iterating your way towards data science breakthroughs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Prototyping](../../Skills/Software%20Development/Prototyping.md) (5), [Data Science](../../Topics/Data%20Science.md) (2), [Data Cleaning](../../Skills/Data%20Science/Data%20Cleaning.md) (1), [Algorithms](../../Skills/Software%20Development/Algorithms.md) (1), [Google cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) (1)
> **CLI Commands:** find (1)
> **Env Vars:** h2o (1)
> **Speakers:** - in (1)

#### [When to stop](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/when-to-stop?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/when-to-stop?u=76281980&t=0)** - [Data Science](../../Topics/Data%20Science.md) isn't about endless accuracy chasing. Understanding when a model is good enough for real world impact is essential for delivering value within time and budget constraints. You can always get more complex models, but it might offer diminishing returns. This is why feedback loops are a critical reality check for model development. In terms of deployment and monitoring, ask yourself if putting your model to use actually improved business outcomes. And if so, by how much? Does it make better decisions than the existing system or no system? We can also learn about the use of real world data versus training data. How did your model perform on messy live data compared to your tidy dataset? This is where hidden weaknesses often emerge. Stakeholder input is going to be crucial. You've established in advance what success means in terms of model performance, costs, time, and other factors. Now that the model's in place, is the improved accuracy meaningful to the people using the model's results? Sometimes better explainability matters more than a 1% gain. To avoid the trap of diminishing returns, you should ask yourself, how much improvement buys us what? Does an extra 2% accuracy justify doubling
>
> **[1:35](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/when-to-stop?u=76281980&t=95)** the development time? The implications on time and resources. Do we have the time and money to invest in improving the model further? And is this the best use of resources? From an opportunity cost perspective, are there other projects where your effort would have a greater return on investment? Visualizing the decision can help you decide when to pause. A simple plot of effort in terms of cost or time versus model performance can help you see where that curve starts to flatten and you're entering the diminishing return zone. Comparing performance to baseline tells you how much better is your fancy model really compared to a simple solution or existing process. You can apply the 80-20 approach to knowing when to pause for one of your models by first defining what is good enough early on. If you know what accuracy or performance threshold meets the business need, then that can guide you on when to stop. Next, iterate and deploy. Once you get a basic model working, gather feedback, then decide if refinement is worth it. Remember to embrace imperfection. After all, the real world is messy. Sometimes a slightly less accurate but understandable model is more valuable. In looking at your own models,
>
> **[3:08](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/when-to-stop?u=76281980&t=188)** do you have an idea of when to pause and focus on the bigger picture or other opportunities? If so, you'll maximize your impact and avoid wasting precious resources.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Science](../../Topics/Data%20Science.md) (1)
> **CLI Commands:** make (1)
> **Analogies:** picture (1)
> **Best Practices:** remember to (1)
> **Speakers:** - data (1)


### 5. Communicating the 80/20 of Data Science

[↑ Back to Table of Contents](#table-of-contents)

#### [Focus on outcome, not technique](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/focus-on-outcome-not-technique?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/focus-on-outcome-not-technique?u=76281980&t=1)** - Clients care about solving problems and their return on investment, not the fancy [Algorithms](../../Skills/Software%20Development/Algorithms.md) you use. Imagine you call a plumber with a leaky faucet. You probably don't care too much about his opinion on the possible wrench sizes or details about the pipe fittings. You just want the leak fixed. Business clients feel the same way about [Data Science](../../Topics/Data%20Science.md). They're looking for solutions, not a jargon-filled lecture. Try this at work by creating a habit called, "So, what?" In the "So, what?" habit, you constantly ask yourself how this is relevant to the business. The "So, what?" habit means you need to speak the language of impact by translating technical terms into business value. Instead of, "I used a gradient-boosted machine learning model," try, "This approach lets us predict customer churn with 15% greater accuracy, saving you an estimated $500,000 annually." By discussing results, you are keeping the conversation relevant to the customer. That's their "So, what?" Look at one of your models. Are the most powerful features well known by your client? Can your client use that information to run the business better? If you have a sales model, then the customer might want to know this information so they can fine-tune their outreach. Embracing the 80/20 approach for strategic results means
>
> **[1:36](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/focus-on-outcome-not-technique?u=76281980&t=96)** that data scientists explain to clients how the 80/20 rule benefits them by prioritizing impact, keeping a strategic focus, and maximizing return on investment. By prioritizing impact, we can discuss how to focus on the most important 20% of the work, generating 80% of the results. This means a faster time to gain value from your project. The strategic focus means that the 80/20 approach keeps us [agile](../../Skills/DevOps/Agile%20Development.md). We can quickly pivot if new information or priorities emerge. Maximizing the project's bottom line impact and maximizing ROI means that by starting with what works well enough and iterating, we ensure your data science investment produces the biggest return. The 80/20 mindset will impress your clients since it shows that you are outcome-driven, focused on practical solutions, see the big picture, and can manage complexity effectively. More importantly, by emphasizing the business outcomes you deliver, you'll transform yourself from a technician into a trusted strategic partner.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Science](../../Topics/Data%20Science.md) (2), [Algorithms](../../Skills/Software%20Development/Algorithms.md) (1), [Agile](../../Skills/DevOps/Agile%20Development.md) (1)
> **Analogies:** imagine (1), picture (1)
> **Env Vars:** roi (1)
> **Definitions:** means that (1)
> **Speakers:** - clients (1)

#### [Manage expectations and build trust](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/manage-expectations-and-build-trust?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/manage-expectations-and-build-trust?u=76281980&t=0)** - Clients and stakeholders aren't naive. Setting realistic expectations builds far more trust than overpromising and under-delivering or the reverse of completely sandbagging a deadline and then producing results in what you claim is record time. Trust is built with transparency, and transparency simply means being clear about key steps and timelines in your project, as well as explaining the risks and mitigation steps. Remember, data can be unpredictable. Even with careful planning, new data issues or unexpected patterns can require adjustments. So don't promise a flawless process from day one. So how do you build trust through transparency? First, start by highlighting your early wins. By delivering smaller, actionable insights, you can quickly show value and build confidence. As you communicate these wins, share with the client the good enough concept. This is where the 80-20 principle is your ally. Explain that aiming for the most critical insights quickly is often better than endlessly chasing perfection. Second, strive for continuous improvement, but don't guarantee a specific magic accuracy number, especially if you have no basis for that prediction.
>
> **[1:35](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/manage-expectations-and-build-trust?u=76281980&t=95)** Remember that model perfection is a myth, so you should educate your client on what is realistic. Third, break down complex concepts into understandable terms. Fourth, adapt as the client's priorities or the market changes. Since business needs shift, you and your modeling need to be [agile](../../Skills/DevOps/Agile%20Development.md) and prepared to adapt suit and remember to always think of your client as a partnership. Emphasize that you're working with the client, not just for them. Their input is key to success. I've always found that trust takes time to build and can be lost very quickly. Honesty, even about setbacks, fuels long-term relationships. Ask yourself a question about your main project. Are the expectations realistic? And do you have a good collaboration with your business partners? If not, what can you do to make it better?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Agile](../../Skills/DevOps/Agile%20Development.md) (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Best Practices:** remember to (1)
> **Speakers:** - clients (1)

#### [Emphasize collaboration](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/emphasize-collaboration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/emphasize-collaboration?u=76281980&t=0)** - Clients should never just hand you a problem or a data set and walk away. They're bringing problems to be solved, and if you treat [Data Science](../../Topics/Data%20Science.md) as a team sport, the results will be far better than working in isolation. Close collaboration isn't a nice-to-have, it's essential. A good way to start is by framing questions together, with the client, where the key [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) in that sentence was together. You'll start that conversation by getting clear on the what. What is the business problem the client is really trying to tackle? Once you understand the problem, translate business speak and potentially vague goals, like boosting sales, into measurable data questions such as, can we identify customers likely to spend x amount repeatedly in the next year? Now you need to prioritize relentlessly. Not all questions are equally valuable or feasible with the available data. Collaborate with your client on ranking. What problems offer the most potential impact to the business? Remember that communications is a key part of the toolkit. A few ways to do this are by visualizing early and often. Simple charts and graphs make findings accessible, even with raw early models, so get feedback immediately. Providing regular progress updates, not just big reveals. Share insights as they emerge,
>
> **[1:34](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/emphasize-collaboration?u=76281980&t=94)** not as a grand presentation at the end. This makes course correction easier if needed. Lastly, be open by inviting feedback and questions. Encourage clients to be active participants in the process. This strengthens their understanding and trust in the results. Try the 80/20 approach to collaboration in one of your projects. Pick a new project and start with identifying shared goals, such as defining upfront what success looks like. Next, identify what visualizations you can share with the client as early as possible in the project. This will help the client see how their input is shaping the modeling and results. Did you schedule regular meetings to review progress with the client as well as solicit feedback and questions? If not, do that today. Remember, you're not just a data cruncher. You are a problem-solving partner.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Science](../../Topics/Data%20Science.md) (1), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **Analogies:** such as (2)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Speakers:** - clients (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Key takeaways for your future career in data science](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/key-takeaways-for-your-future-career-in-data-science?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/the-80-20-rule-of-data-science/key-takeaways-for-your-future-career-in-data-science?u=76281980&t=0)** - The 80/20 rule of [Data Science](../../Topics/Data%20Science.md) is centered around one thing, keeping the business impact front and center. That means more than a fancy model. You need to go out and discover the business problems, pain points, and opportunities for improvement. Remember that the 80/20 rule of data science suggests that the vast majority of the value comes from a small part of the effort. In order to do efficient data science, the 80/20 approach is all about focusing on the applications and solving problems. It is about finding good, quick data sources, features, transformations, and models, all with the goal of fast and effective deployment. Data science is a journey of continuous learning and adaptation. Embrace the challenges, celebrate the wins, and let your curiosity be your guide as you unlock ever greater value for both yourself and your organization. If you enjoyed this course, please check out some of my other [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning courses, including Becoming a Good Data Science Customer and the Data Science Playbook for Private Equity and Venture Capital. Also, you can contact me on LinkedIn through my website, [winningwithdatascience.com](https://winningwithdatascience.com), and check out my latest book, "Winning with Data Science." Thank you for joining me on this learning adventure.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Science](../../Topics/Data%20Science.md) (7), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (2)
> **URLs:** [winningwithdatascience.com](https://winningwithdatascience.com) (1)
> **Definitions:** is a  (1)
> **Speakers:** - the (1)


## Instructor

- [Howard Friedman](../../Instructors/Data%20Science/Howard%20Friedman.md)

## Path Context

### In [Introduction to Fundamental Skills for Data Work- Data Strategy and Planning](../../Paths/Data%20Science/Learning%20Paths/Introduction%20to%20Fundamental%20Skills%20for%20Data%20Work-%20Data%20Strategy%20and%20Planning.md)
← [Using AI to Improve Ops for Your Data Organization](../Database%20Management/Using%20AI%20to%20Improve%20Ops%20for%20Your%20Data%20Organization.md) | **6 of 10** | [Data Science Team Lifecycle Management](Data%20Science%20Team%20Lifecycle%20Management.md) →

## Appears In

- [Introduction to Fundamental Skills for Data Work- Data Strategy and Planning](../../Paths/Data%20Science/Learning%20Paths/Introduction%20to%20Fundamental%20Skills%20for%20Data%20Work-%20Data%20Strategy%20and%20Planning.md)

---

[↑ Back to top](#)