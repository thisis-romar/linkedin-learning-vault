---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: agile-software-development-remote-teams-2019
url: "https://www.linkedin.com/learning/agile-software-development-remote-teams-2019"
duration_minutes: 101
duration: 1h 41m
level: Intermediate
updated: 5/9/2019
learners: 259141
skills:
  - Agile Software Development
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQF9vZn-1sn78Q/learning-public-crop_675_1200/B56ZrBOK43HYAY-/0/1764178309251?e=2147483647&amp;v=beta&amp;t=vYl9oTScmclGVTN-a2Uj7DsxdPdRbZ7M0U3JpQi3R7k"
linkedin_topic: Software Development
learning_paths:
  - '[[Succeed as a Remote Software Developer]]'
  - '[[Getting Started with Agile Software Development]]'
prev_courses:
  - '[[Trello Essential Training]]'
  - '[[Agile Software Development- Transforming Your Organization]]'
path_nav: '[{"path":"Succeed as a Remote Software Developer","position":6,"total":6,"prev":"Trello Essential Training","next":null},{"path":"Getting Started with Agile Software Development","position":10,"total":10,"prev":"Agile Software Development- Transforming Your Organization","next":null}]'
path_count: 2
tags:
  - course
  - topic/cloud-computing
  - topic/security
  - topic/data-science
  - topic/software-development
  - topic/devops
  - skill/agile-software-development
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/Agile%20Software%20Development-%20Remote%20Teams%20(2019).md)

![Agile Software Development: Remote Teams (2019)](https://media.licdn.com/dms/image/v2/D560DAQF9vZn-1sn78Q/learning-public-crop_675_1200/B56ZrBOK43HYAY-/0/1764178309251?e=2147483647&amp;v=beta&amp;t=vYl9oTScmclGVTN-a2Uj7DsxdPdRbZ7M0U3JpQi3R7k)

# Agile Software Development: Remote Teams (2019)

> Software teams are increasingly going remote—and for good reason. Remote workers often boast greater autonomy and productivity than their in-office counterparts. Going remote can also help organizations save on resources by allowing them to invest less in physical infrastructure. Curious about how to help your software team make the switch to remote work? In this course, Andrea Goulet shows you ho

> [LinkedIn Learning](https://www.linkedin.com/learning/agile-software-development-remote-teams-2019) | 1h 41m | Intermediate | 259K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Remote-first culture for agile teams](#remote-first-culture-for-agile-teams)
  - [What you should know](#what-you-should-know)
- [**1. Remote Working**](#1-remote-working) (3 videos)
  - [The rise of remote working](#the-rise-of-remote-working)
  - [Remote working benefits](#remote-working-benefits)
  - [Remote working challenges](#remote-working-challenges)
- [**2. Collaboration and Conversations**](#2-collaboration-and-conversations) (9 videos)
  - [Remote working models](#remote-working-models)
  - [Remote working models: Colocated](#remote-working-models-colocated)
  - [Remote working models: Distributed](#remote-working-models-distributed)
  - [Conway's Law: Building a strong communication foundation](#conways-law-building-a-strong-communication-foundation)
  - [The intentionally distributed mindset](#the-intentionally-distributed-mindset)
  - [Shifting to a digital workspace](#shifting-to-a-digital-workspace)
  - [The cost of context switching](#the-cost-of-context-switching)
  - [ChatOps: Integrating your communications](#chatops-integrating-your-communications)
  - [Signal vs. Noise](#signal-vs-noise)
- [**3. Technical Excellence & Security**](#3-technical-excellence-security) (7 videos)
  - [Virtual private networks (VPNs) and firewalls](#virtual-private-networks-vpns-and-firewalls)
  - [Encryption and two-factor authentication](#encryption-and-two-factor-authentication)
  - [Version control: Never run a remote team without it](#version-control-never-run-a-remote-team-without-it)
  - [Methodologies that drive development](#methodologies-that-drive-development)
  - [Continuous improvement and marginal gains](#continuous-improvement-and-marginal-gains)
  - [Continuous integration, delivery, and deployment](#continuous-integration-delivery-and-deployment)
  - [Understanding technical debt](#understanding-technical-debt)
- [**4. Deploying Early and Often**](#4-deploying-early-and-often) (3 videos)
  - [Atomic commits: One change, one commit](#atomic-commits-one-change-one-commit)
  - [Branching and forking](#branching-and-forking)
  - [Code reviews](#code-reviews)
- [**5. Hiring, Planning, and Measuring**](#5-hiring-planning-and-measuring) (7 videos)
  - [Creating job descriptions for remote positions](#creating-job-descriptions-for-remote-positions)
  - [Interviewing and hiring for remote teams](#interviewing-and-hiring-for-remote-teams)
  - [Where's the whiteboard?](#wheres-the-whiteboard)
  - [Remote whiteboard tools](#remote-whiteboard-tools)
  - [Remote pairing and mobbing](#remote-pairing-and-mobbing)
  - [Remote standups](#remote-standups)
  - [Remote retrospectives](#remote-retrospectives)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Remote-first culture for agile teams](https://www.linkedin.com/learning/agile-software-development-remote-teams-2019/remote-first-culture-for-agile-teams?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/agile-software-development-remote-teams-2019/remote-first-culture-for-agile-teams?u=76281980&t=1)** - Adopting practices that enable remote working can help software teams attract top talent, because they provide autonomy and flexibility. These are often cited as the most important factors when people consider whether or not to take or leave a job. There are a ton of other benefits too. Cost savings, improved productivity, higher job satisfaction. It can even make your software easier to work with, but to successfully roll out a remote working strategy, you'll need to be strategic and intentional. It's easy to get it wrong. In this course, we'll look at remote work through the lens of the [[Agile Development|Agile]] Manifesto and its principles, including effective communication and collaboration, technical excellence, deploying early and often, and planning. We'll also look at practices that are typically thought of as face-to-face activities, such as pair programming, whiteboarding, and recruiting, and explore how they can be adapted for remote teams. Hi, I'm Andrea Goulet. I'm the CEO of Corgibytes, a [[Software Development]] company that specializes in modernizing legacy code. The experience of implementing a remote-first culture at my company has been one of the biggest joys and challenges of my career. A successful remote team requires a lot more than just a headset and a laptop. Join me in my [[LinkedIn]] learning course about remote working for your software development team.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Software Development]] (2), [[Agile Development|Agile]] (1), [[LinkedIn]] (1)
> **CLI Commands:** make (1)
> **Env Vars:** ceo (1)
> **Analogies:** such as (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - adopting (1)

#### [What you should know](https://www.linkedin.com/learning/agile-software-development-remote-teams-2019/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/agile-software-development-remote-teams-2019/what-you-should-know?u=76281980&t=1)** - This course was designed for anyone who has an interest in building software where all of the contributors may not be in the same physical location. You may be familiar with some of the [[Agile Development|Agile]] software concepts discussed in this course, but if not, that's totally okay. Everything discussed is high level, so you don't have to have experience or technical fluency in any specific area. The course touches on remote working on Agile teams from the perspective of both an individual contributor and someone leading an Agile team who has the authority to set budgets and influence policy. So, whether you are a developer, a CEO, or a consultant who's looking to more effectively work with your clients, this course will help you learn specific techniques to make your remote team more effective.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Agile Development|Agile]] (3)
> **CLI Commands:** make (1)
> **Env Vars:** ceo (1)
> **Speakers:** - this (1)


### 1. Remote Working

[↑ Back to Table of Contents](#table-of-contents)

#### [The rise of remote working](https://www.linkedin.com/learning/agile-software-development-remote-teams-2019/the-rise-of-remote-working?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/agile-software-development-remote-teams-2019/the-rise-of-remote-working?u=76281980&t=1)** - Let me ask you a question. Do you ever work remotely? If so, you are not alone. Nearly four million people worked from home at least half time in 2015. And a 2017 study by Gallup found that flexible scheduling and work-from-home opportunities play a major role in an employee's decision to take or leave a job. Working remotely is no longer a fringe or experimental setup. It's very mainstream, especially for [[Software Development]] teams. Now, I don't know about you, but I love research! So whenever I think about a changing trend, I like to spend a little bit of time grounding myself in the data. So let's take some time to look at industry research to help us answer some questions about remote working trends. First, how has remote working changed in the last decade? Gallup cites a 2016 survey from the Society of Human Resource Management, also known as SHRM. 60% of companies offer their employees telecommuting opportunities, a threefold increase from 1996. Gallup also surveyed how much time people spend working remotely. who spent 80 to 100% of their time working remotely. That section grew from 24% in 2012 to 31% in 2016. The State of Telecommuting report shares that regular telecommuting grew 115% in the last decade, nearly 10 times faster than the [[Representational State Transfer (REST)|rest]] of the workforce.
>
> **[1:39](https://www.linkedin.com/learning/agile-software-development-remote-teams-2019/the-rise-of-remote-working?u=76281980&t=99)** We can see a clear trend. Remote working is gaining in popularity. More companies are offering remote working as a choice. Next, what types of teams have had success in implementing remote working? Gallup measured 11 different industries and found the highest percentage of remote workers was in the transportation industry where 61% of people work remotely. Computer, IT, and math was a close second at 57%. And arts, design, entertainment, sports, and media came in third at 48%. That same survey showed that finance, insurance, and real estate are adding remote workers at the fastest rate. The State of Telecommuting report also broke out their data by occupation. They noted that management, [[Microsoft Office|office]] administrative occupations, and sales together account for 43% of telecommuter jobs compared to just 34% of non-telecommuter jobs, and that, though participation levels vary by occupation, telecommuters are found in every industry. That same report also revealed that a person who has a computer or mathematical occupation is 2.8 times more likely to work remotely compared to the non-telecommuting workforce. Remote working is no longer a fad. It's here to stay, especially for software development teams. Companies that learn how to best incorporate remote working benefits give themselves a competitive advantage. give themselves a competitive advantage.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Software Development]] (2), [[Representational State Transfer (REST)|Rest]] (1), [[Microsoft Office|Office]] (1)
> **Cross-References:** in the last (2)
> **Env Vars:** shrm (1)
> **Versions:** 2.8 (1)
> **Definitions:** known as (1)
> **Prerequisites:** setup (1)
> **Speakers:** - let (1)

#### [Remote working benefits](https://www.linkedin.com/learning/agile-software-development-remote-teams-2019/remote-working-benefits?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/agile-software-development-remote-teams-2019/remote-working-benefits?u=76281980&t=1)** - Remote working has gained in popularity over recent years because it provides a myriad of benefits to both the workers and their employers. Some of these benefits include cost savings, increased productivity and efficiency, and higher engagement and job satisfaction. Let's dive into those in a bit more detail. First, let's look at cost savings. For this, the most concrete numbers come from Stanford researcher Nicholas Bloom. In his experiment, he took a group of 500 qualified workers in a travel agency. Half of them worked from home four days per week, and the control group continued to go into the [[Microsoft Office|office]]. After nine months, they were able to glean some measurable data, including saving $2,000 per year, per employee on office space, which adds up. For this group of 250 people, that means half a million dollars in cost savings thanks to remote working. This data is corroborated in the state of telecommuting survey. Their in depth analysis, which has been vetted by the U.S. General [[Accountability]] Office, shows that employers can save $11,000 per half-time telecommuter per year, which equates to a $689 billion savings if all potential telecommuters were set up for remote success. Now that's some significant cost savings! And, cost savings aren't limited to the business. According to the state of telecommuting report,
>
> **[1:36](https://www.linkedin.com/learning/agile-software-development-remote-teams-2019/remote-working-benefits?u=76281980&t=96)** full-time telecommuters save over $4,000 and because they're not spending time commuting everyday, they gain back the equivalent of over two work weeks in time each year. Next, let's look at how remote workers are more productive. Starting with the the state of telecommuting data that we just reviewed, notice how increased productivity contributes to the largest amount of cost savings. Their research shows employees being 15% more productive, which is close to Nicholas Bloom's finding that workers were 13.5% more productive when they worked from home. In addition to being more productive, remote working also increases employee engagement and job satisfaction. Gallup's State of the American Workforce survey dives deepest into this aspect. They found that all employees who spend at least some, but not all, of their time working remotely, have higher engagement than those who don't ever work remotely. And the tipping point for optimal engagement has increased dramatically, from less than 20% of time in 2012, to 60 to 80% of time working remotely in 2017. Nicholas Bloom's study and the state of telecommuting report both discussed how this particular aspect is the most difficult to quantify, but shares how remote workers reported more job satisfaction and feel more loyal to their employer, respectively. Of course, these are only three benefits
>
> **[3:13](https://www.linkedin.com/learning/agile-software-development-remote-teams-2019/remote-working-benefits?u=76281980&t=193)** of working remotely. There are numerous others, including reduced absenteeism and employee turnover, positive impacts on the environment and traffic, and improved health and well-being of employees. With all these benefits it's no surprise that so many employers are making the switch to remote work.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Office|Office]] (3), [[Accountability]] (1)
> **Versions:** 13.5 (1)
> **UI Navigation:** switch to (1)
> **Prerequisites:** set up (1)
> **Speakers:** - remote (1)

#### [Remote working challenges](https://www.linkedin.com/learning/agile-software-development-remote-teams-2019/remote-working-challenges?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/agile-software-development-remote-teams-2019/remote-working-challenges?u=76281980&t=1)** - About a year ago, a good friend came to me for advice. He had recently changed jobs from one that required three hours of day of commuting to a position that allowed him to work from home full-time. He was so eager for the new opportunity so that he could spend more time with his family. But after just a few months, he found his excitement had quickly turned into frustration. I just feel so isolated. The [[Representational State Transfer (REST)|rest]] of the team works in the [[Microsoft Office|office]], and a lot of conversations happen that I'm just not aware of. I like my team, but I feel disconnected. Chances are, you know someone who's been in a similar situation. Maybe even yourself. If so, you are not alone. This is a story that I've heard over and over again. And there's data to back up these reports. Nicholas Bloom, a researcher at Stanford, measured the effectiveness of remote working by tracking a group of 250 employees over the course of nine months. And while he found several profound benefits, he also noted that after the research period had ended, half of the study participants who had been allowed to work from home decided to return to the office. Participants felt isolated, and worried that remote employees would be less likely to receive a promotion or bonus. While I loved the autonomy and balance that remote working brought to my staff,
>
> **[1:35](https://www.linkedin.com/learning/agile-software-development-remote-teams-2019/remote-working-challenges?u=76281980&t=95)** I also noticed that it was harder to forge relationships, build trust, and support the members of my team in a remote only environment. Then I attended a conference where I heard a talk by Matt Barcom about organizing teams effectively. After the talk, I chatted with Matt about my challenges and he gave me this gloriously honest piece of advice. You don't have a team. You have a collection of individuals. For me, that was a turning point in how I approached my own corporate culture. After that, I strategically architected a remote environment that focused on spontaneous interactions, self-organizing teams, mob programming, learning from others, sharing success, transparent communication, and more. Now we're a team. But none of this happens by accident. Creating a remote team that is engaged requites intention and focused effort. Another consideration which can impact the rollout of remote working is access to high speed internet. According to the 2018 FCC broadband deployment report, over 24 million Americans don't have access to high speed internet. Remote working requires video chats and file sharing. And if your connection keeps dropping or it takes too long to share a document,
>
> **[3:09](https://www.linkedin.com/learning/agile-software-development-remote-teams-2019/remote-working-challenges?u=76281980&t=189)** you simply can't work effectively. Throughout this course, we'll explore specific strategies to ensure your remote rollout overcomes these challenges. And feels more like a team and less like a collection of individuals.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Office|Office]] (2), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** fcc (1)
> **Definitions:** is a  (1)
> **Speakers:** - about (1)


### 2. Collaboration and Conversations

[↑ Back to Table of Contents](#table-of-contents)

#### [Remote working models](https://www.linkedin.com/learning/agile-software-development-remote-teams-2019/remote-working-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/agile-software-development-remote-teams-2019/remote-working-models?u=76281980&t=1)** - When I first decided to make remote working central to my company's operations, I sought out organizations who were already successful with remote working. As I explored the blogs and books that these companies had created to help people like me, I noticed a pattern, they often used the [[Microsoft Word|word]] distributed, not remote, to describe the operational setup that I was seeking. Distributed teams are completely remote in that anyone can work from anywhere at any time. Around the same time, a friend of mine was accepted into an accelerator program which required him to move to a different city. Their model, which they described as colocated, meant that everyone needed to be in the same physical space at least part of the time. Other tech giants, like [[Google]], Apple, and IBM, have rejected a distributed model in favor of a colocated model, but still incorporate remote options. All of these organizations build software, so which model is right, colocation or distributed? That will depend on your team. You can include remote elements into either strategy, but choosing a remote model, distributed, or colocated, is the foundation of your remote work strategy and will be one of the most important decisions you make as you introduce remote working to your team.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1), [[Google]] (1)
> **CLI Commands:** make (2)
> **Env Vars:** ibm (1)
> **Prerequisites:** setup (1)
> **Speakers:** - when (1)

#### [Remote working models: Colocated](https://www.linkedin.com/learning/agile-software-development-remote-teams-2019/remote-working-models-colocated?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/agile-software-development-remote-teams-2019/remote-working-models-colocated?u=76281980&t=0)** - In a co-located model, people come together into the same physical space, usually an [[Microsoft Office|office]]. Interactions are more ephemeral, existing for just a moment. Think about the water cooler or the break room. Conversations happen around the office and information tends to live in people's heads. New people who enter the team will rely on physical interactions with other team members to gain context and get up to speed. Co-located teams tend to work especially well for groups that need to interact with the same physical materials to do their job, are highly interdependent so what one person does impacts another person's work and they operate with more ambiguity or complexity. This is why so many incubator and accelerator programs requires participants to share the same physical space. Startups have a lot of ambiguity, complexity and interdependencies. Some other examples might include science labs or healthcare facilities where teams need to physically interact with patients, equipment and samples. My brother owns a Fountain Pen company, a co-located model works great for him. Restaurants, art studios, manufacturing companies, for a lot of organizations, a co-located model is the best choice. For the first several years of my business, we used a co-located model. I had reconnected with a friend from high school
>
> **[1:33](https://www.linkedin.com/learning/agile-software-development-remote-teams-2019/remote-working-models-colocated?u=76281980&t=93)** and joined his startup. We rented an office and for years it was just the two of us. When we decided to become a remote team, we hired some people who lived in different cities and others who came into the office every day. Those of us in the physical office often went out to lunch together or shared our weekend plans and talked about current events. I didn't think about how this small talk would have such an impact on my team's ability to build trust. But by not clearly defining where the social cohesion was supposed to happen in a physical or a digital space, my team ended up as a siloed and fragmented collection of individuals, not a team. This is a mistake that I've heard many, many other teams make. Attempting to add a completely remote person to a co-located team often fails for several reasons. The individual working remotely doesn't have access to the rich treasure trove of conversations that are happening at the office. There's little incentive for leaders to invest in the communication infrastructure required to make the remote workers feel integrated. The co-located group is unlikely to change their behavior and create more durable communication artifacts that would be useful to the remote members. However, there are ways to provide remote opportunities in a co-located model. Many companies allow individuals to work from home one to two days a week.
>
> **[3:07](https://www.linkedin.com/learning/agile-software-development-remote-teams-2019/remote-working-models-colocated?u=76281980&t=187)** Others allow team members to time shift their work day to accommodate schedules. This makes it easier to go to doctor's appointments, pick up children or just better align with circadian rhythms. Teams such as this might have a set of core hours such as from 10 a.m. to 3 p.m. where everyone needs to be physically present but if you wanted to come in earlier or leave later, you can. Co-located models work well in many situations and you can add remote benefits such as telecommuting or giving staff flexibility. But be aware, introducing a completely remote team member into a co-located model will likely cause frustration all around. So, being strategic and intentional about the remote opportunities on your co-located team is the first step.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Office|Office]] (6)
> **Analogies:** such as (3)
> **CLI Commands:** make (2)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Warnings:** be aware (1)
> **Speakers:** - in (1)

#### [Remote working models: Distributed](https://www.linkedin.com/learning/agile-software-development-remote-teams-2019/remote-working-models-distributed?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/agile-software-development-remote-teams-2019/remote-working-models-distributed?u=76281980&t=1)** - When a company is distributed, employees can choose to work from a variety of different geographic locations. A staff member might work from a home [[Microsoft Office|office]], coffee shop, or a coworking location. They might even be a digital nomad, who changes locations on a regular basis, and a snowy landscape the next. Distributed models give staff maximum autonomy and flexibility, which tends to be a highly valuable benefit that attracts top talent. In a distributed model, people working from the same physical space is rare. Software tools become the office, informal conversation needs to be prompted and nurtured, and organizations may fly team members in for a deliberate co-located event. Distributed teams tend to work especially well for groups that are working on non-tangible [[Microsoft Products|products]] such as digital or knowledge products, need a particular skillset that is in high demand, can operate with a higher degree of autonomy and independence, and have a clearly defined mission, task, or objective. At my company, we work exclusively with software, not physical products. We also look for a very particular skillset, developers who enjoy modernizing legacy systems, who are not easy to find in any one spot. My business partner and I also wanted to stay
>
> **[1:34](https://www.linkedin.com/learning/agile-software-development-remote-teams-2019/remote-working-models-distributed?u=76281980&t=94)** in the rural hometown where we grew up, which further put a constraint on sourcing talent. Finally, we worked hard on defining the corporate culture we wanted and came up with four pillars: autonomy, balance, empathy and trust. Once we did all of this analysis, we felt confident that moving to a completely distributed model was the right fit for our team. One of the biggest challenges of a distributed model is finding a way to replicate the social aspects that tend to more naturally occur when in a co-located model. You have to be incredibly intentional and work hard to create social structure and encourage the cross-pollination of ideas to make this model really work. At Corgibytes we do this in three ways: prompts, affinity channels, and in-person socializing. Our chatbot, lovingly named Ein after our mascot, prompts us with random questions everyday. Things like, are you a good dancer, what's your favorite ice cream flavor, do you root for any sports teams? In addition, we have affinity channels set up in [[Slack]] where people can share more about their personal lives. These channels help create a real sense of comradery. I share stories of my workout goals or silly things my kids did, just like I would in a traditional office. Even though the format has changed, the personal relationships stay the same. Finally, we were inspired by teams like Buffer,
>
> **[3:11](https://www.linkedin.com/learning/agile-software-development-remote-teams-2019/remote-working-models-distributed?u=76281980&t=191)** Zapier, and Automatic and who've flown our entire team, to a central location for several days of socializing. I like to think of this as a years worth of team lunches that take place in a compressed time frame. And because we don't see each other very often, we cherish and savor these opportunities to get together in person. It's so easy to write off these social interactions as trivial, but getting to know the people on your team, on a more personal level, helps build trust. It's important to cultivate opportunities for your team to spend time getting to know more about each other, especially in a distributed environment. especially in a distributed environment.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Office|Office]] (3), [[Microsoft Products|Products]] (3), [[Slack]] (1)
> **CLI Commands:** find (1), make (1)
> **Analogies:** such as (1), just like (1)
> **Tools:** slack (1)
> **Prerequisites:** set up (1)
> **Speakers:** - when (1)

#### [Conway's Law: Building a strong communication foundation](https://www.linkedin.com/learning/agile-software-development-remote-teams-2019/conway-s-law-building-a-strong-communication-foundation?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/agile-software-development-remote-teams-2019/conway-s-law-building-a-strong-communication-foundation?u=76281980&t=1)** - Communication is the glue that holds an organization together. It's your foundation and it's easy to take for granted, but don't overlook it, because implementing the right communication infrastructure is the starting point for your success, especially for distributed teams. Several years ago, I was at a conference, and I learned about a rather obscure systems theory called Conway's law. It was one of these flashbulb moments that completely changed the way I worked for the better. A few years later, I started a podcast where I interviewed industry experts about software modernization. Guess what comes up in almost every episode? That's right, Conway's law. So what is Conway's law? In the 1960s, Mel Conway published a paper titled How Do Committees Invent, where he explained how organizations which [[Design Systems]] are constrained to produce designs which are copies of the communication structures of these organizations. First, you'll notice just how essential communication is to Conway's law. How you structure your communication will determine your output. It's a causal link. So if you want your work product to be flexible, modular, and easier to work with, you'll first need to be intentional about how your team communicates. Let's look at an example.
>
> **[1:34](https://www.linkedin.com/learning/agile-software-development-remote-teams-2019/conway-s-law-building-a-strong-communication-foundation?u=76281980&t=94)** Team A works in a traditional co-located [[Microsoft Office|office]]. They are organized in seemingly logical groups. The business team plans out what features need to be built using tools like Gantt charts and big requirements documents. Design, development, and testing are separate teams and don't interact very often. Upper management and executives feel like they're in control, but often the [[Microsoft Products|products]] they produce are late, overbudget, and incredibly difficult to change. Contrast this to Team B, which is fully distributive. All members work in different locations and keep a different set of hours. The management structure is more informal, and there's a diverse group of people who come in and out as the project requires. Teams self organize rather than looking at on org chart. Even the requirements aren't formally stated. Rather, the team relies on emergent design principles, because coordinating and planning tasks in such a distributed fashion quickly becomes a logistical nightmare. Now, let's look at the output of each of these teams. Research shows that Conway's law holds and that Team A's software will mirror their communication infrastructure. The code it produces will be tightly coupled and rigid. It will be very difficult to change, and it will very likely be a monolithic architecture. Team B's code will be much more modular and flexible, because that's the way their communication is set up.
>
> **[3:12](https://www.linkedin.com/learning/agile-software-development-remote-teams-2019/conway-s-law-building-a-strong-communication-foundation?u=76281980&t=192)** If something in the code base needs to change, it will be much easier. The system overall is much more nimble, adaptable, and flexible, why? Conway's law states it's because of the communication infrastructure that was used to build it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Design Systems]] (1), [[Microsoft Office|Office]] (1), [[Microsoft Products|Products]] (1)
> **Prerequisites:** set up (1)
> **Speakers:** - communication (1)

#### [The intentionally distributed mindset](https://www.linkedin.com/learning/agile-software-development-remote-teams-2019/the-intentionally-distributed-mindset?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/agile-software-development-remote-teams-2019/the-intentionally-distributed-mindset?u=76281980&t=1)** - When I first learned about distributed teams I was super skeptical. I was so locked into my traditional mindset I needed to shift my thinking about what makes a team productive. Looking back it's easy for me to see five shifts that I needed to embrace in order to lead a successful distributed team. It took me years to figure this out, but my hope is that by sharing this five shifts with you you'll be able to successfully adopt a remote strategy quickly. This first shift is rethinking where your [[Microsoft Office|office]] is located. In a distributed mindset your workspace is no longer a physical place, but instead transforms into a digital platform that enables collaboration. In the same way that you would spend time with a realtor to find the right physical workspace for your team, you need to survey the market for the right digital tools that will support your remote work goals. Next, you need to think about the longevity of your interactions. On a colocated team conversations happen, then quickly disappear. On a distributed team where people are working at different times creating durable communication that team members can refer to at a later time becomes an important habit. A big part of moving to a distributed team means sharing more. In a physical office interaction is a bit more intuitive.
>
> **[1:36](https://www.linkedin.com/learning/agile-software-development-remote-teams-2019/the-intentionally-distributed-mindset?u=76281980&t=96)** On a distributed team it's easy to hide. This can lead to isolation and miscommunication, so making an intentional effort to share becomes an important skill. This can range from simple things, like sharing when you're sick or stating opinions more clearly in a [[Code Review]], to more radical transparency initiatives, such as openly sharing salaries and the company's financial standing. In a fully distributed model it's unrealistic to expect that someone will be immediately available when you need them. While your team may find a natural working rhythm where folks generally show up to work around the same time, adapting your expectations around when you'll get a response takes some practice. Finally, it's time to think about how you'll empower individual members of your team to separate the signal from the noise. Reply all simply doesn't work as a communication strategy on a distributed team. Instead of making your team suss through an onslaught of content that your distributed team is now producing, you'll want to encourage individuals to opt in and out of conversations as they see fit. This will likely mean you'll need to use new tools that are designed to manage group conversations, such as [[Slack]]. If you can begin to adopt these changes to the way you work you're well on your way to being able to lead a successful and fully distributed team. a successful and fully distributed team.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Office|Office]] (2), [[Code Review]] (1), [[Slack]] (1)
> **CLI Commands:** find (2)
> **Analogies:** such as (2)
> **Tools:** slack (1)
> **Definitions:** is a  (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - when (1)

#### [Shifting to a digital workspace](https://www.linkedin.com/learning/agile-software-development-remote-teams-2019/shifting-to-a-digital-workspace?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/agile-software-development-remote-teams-2019/shifting-to-a-digital-workspace?u=76281980&t=1)** - When you set up a physical [[Microsoft Office|office]], what are the things you need to consider? Well, you'd need a physical space in a building. You might also think about parking and conference rooms, and whether or not you'd have an open floor plan or set up offices for your staff. You might think about the decor and the furniture, office supplies and lighting. There's a lot that goes into planning a physical workspace. Let's look at some popular tools that can help you collaborate, meet face-to-face, and plan in a digital setting. A quick note, that there are thousands of different tools on the market, and I may not mention the one that's right for your team, or it may not even be invented yet. It's important for you to do your due-diligence and research each tool on its own to see if it's the best fit for your needs. Collaboration tools. Just like your team would feel like they're at work when they open the door of a physical space, there should be a similar software tool that acts as your central communication hub. This way, when your staff has this application open, they're at work, but when they have it closed, they're out of the office. The heavyweight in this space is [[Slack]]. At the time of this recording, it dominates the market and has overtaken some of the biggest competitors, such as HipChat. Still, alternatives remain out there, such as Gitter, [[Microsoft Teams]], and more. Collaboration tools such as these work kind of like this: you have the workspace,
>
> **[1:35](https://www.linkedin.com/learning/agile-software-development-remote-teams-2019/shifting-to-a-digital-workspace?u=76281980&t=95)** which is sort of like your big office in a physical workspace. Once you're logged in to the workspace, you can opt in and out of channels, which can represent whatever conversation topic you need. Instead of having a quick chat in the physical break room, that same conversation happens, but it's in a break room channel. At my company, we also have channels around projects, such as finance, marketing, and for each client, affinity channels such as fitness and parenting, and channels that align with typical [[Agile Development|Agile]] practices, such as stand-ups and retrospectives. Using Slack and seeing all the interactions is kind of like the background chatter that you would hear in an office setting. It's a reminder that you're part of something bigger, and you can listen in or tune out throughout the day to make sure you're as productive as possible. Video conferencing tools. Just because you're working remotely doesn't mean you stop meeting face-to-face. It's important to choose a video conferencing tool that makes it easy to schedule time for visual collaboration. At my office, we rely on [[Zoom]] as our main video conferencing tool because it handles group meetings better than the others we tried at the time. Other options include [[Google]] Hangouts, appear.in, Skype, Slack, Webex, and GoToMeeting. I encourage you to try these out and see what works best for your needs. Planning tools.
>
> **[3:09](https://www.linkedin.com/learning/agile-software-development-remote-teams-2019/shifting-to-a-digital-workspace?u=76281980&t=189)** How do you know your team is actually working when they don't have to come into a physical space? This is a question that I get asked all the time. My answer? I can still see my team working, just in a different way. There are tons of different tools that help you manage digital projects. Some popular ones include Asana, [[Trello]], Basecamp, ClickUp, Airtable, and Wrike. These tools help you set goals, manage tasks, and generally keep track of who's doing what. Additionally, there are tools that are more specifically designed for software-related tasks. These include [[GitHub]], [[Jira]], Pivotal Tracker, and GitLab. So, just like you would do research for that perfect piece of real estate for your team's needs, I encourage to take a look around the market at the wide array of tools that are built to help your team collaborate, talk over video, and organize their work.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Office|Office]] (6), [[Slack]] (3), [[Microsoft Teams]] (1), [[Agile Development|Agile]] (1), [[Zoom]] (1)
> **Analogies:** such as (6), just like (2), kind of like (2)
> **Tools:** slack (3), github (1), jira (1), gitlab (1)
> **Prerequisites:** set up (2)
> **CLI Commands:** make (1)
> **UI Navigation:** open the (1)
> **Definitions:** is a  (1)
> **Speakers:** - when (1)

#### [The cost of context switching](https://www.linkedin.com/learning/agile-software-development-remote-teams-2019/the-cost-of-context-switching?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/agile-software-development-remote-teams-2019/the-cost-of-context-switching?u=76281980&t=1)** - Do you have a sec? At a recent conference, a developer told me about his visceral reaction to hearing that question. I immediately tense up. My heart starts racing. I brace for impact because I know my day is about to be wrecked. If you ask most of the developers on your team, chances are they'll feel the same way. I admit, early in my management career, I asked this question all the time. I'm not proud of it, but it's true. That's because I didn't understand the concept of switching costs and just how expensive this innocuous question can be. And on a remote team, it can be even more tempting to reach for this phrase. It's just so easy to type. How bad can it be? Paul Graham, a software developer who went on to co-found Y Combinator describes two different personalities within an organization. Managers and makers. According to Graham, managers break up their day into several small chunks of 30 to 60 minutes each. Makers on the other hand need substantial amounts of uninterrupted time to focus. Usually three to four hours at a time. My business partner Scott and I fell into these roles pretty quickly when we first started our business. In the early days, I constantly interrupted Scott.
>
> **[1:35](https://www.linkedin.com/learning/agile-software-development-remote-teams-2019/the-cost-of-context-switching?u=76281980&t=95)** There were time-sensitive issues that I needed his input on, and it had never really been an issue in my past jobs. But I noticed that every time I asked, he became more and more frustrated until one day he said something. "I was nine inception layers down! "It's going to take me an hour "to get back to where I can be productive again!" After talking with Scott, I better understood what his challenge was. In the movie Inception, when the main character learned they were actually in a dream, the world started falling apart. Apartment [[Windows]], food carts, and dishes shatter all around them. Scott watched his mental model implode. Just like in the movie. No wonder he was frustrated! Now, imagine that happening to you multiple times a day. If you need deep focus time, you'd never get anything done because the context switching costs are just so high. Scott and I worked together to come up with a framework that overcame this challenge. Now, instead of asking, you got a sec, we ask the question: Inception? This small change has had a profound positive impact on our remote team. Developers tell me they can actually focus without sacrificing being responsive. I sometimes think of it as the mental equivalent of decompression sickness. When you're deep into problem-solving,
>
> **[3:11](https://www.linkedin.com/learning/agile-software-development-remote-teams-2019/the-cost-of-context-switching?u=76281980&t=191)** getting suddenly pulled up can be disorienting, just like a Scuba diver needs to take their time to resurface. On our team, anything greater than a two or a non-response indicates that an individual is not available to participate in something that's synchronous right now. Once they get to a good stopping point, they'll get back to you. There are other ways to keep context switching costs low. Coding in groups, such as with mob programming, helps to distribute the mental load. This way, one person can walk away or be interrupted, and the [[Representational State Transfer (REST)|rest]] of the group can carry on. Ask your team how they'd like to work. It might be a combination of the two, or something completely unique that you come up with on your own. In any case, it's worth being aware of the cost of asking the question: You got a sec?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Analogies:** just like (2), imagine (1), such as (1)
> **Speakers:** - do (1)

#### [ChatOps: Integrating your communications](https://www.linkedin.com/learning/agile-software-development-remote-teams-2019/chatops-integrating-your-communications?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/agile-software-development-remote-teams-2019/chatops-integrating-your-communications?u=76281980&t=1)** - [Instructor] Once our team fully embraced our distributed mindset, I started noticing that there were opportunities to use code to help facilitate communication across my team. For example, I wanted [[Slack]] to ask a random question in our break room channel that would get people chatting and building rapport. Things like, what is your favorite time of day, and why? What fictional world would you most want to visit? And then on Fridays, what are your plans for the weekend? I knew that these types of prompts would be useful, but why do it myself when I could program a computer to do it for me? We built a small script, populated it with about 300 questions, and then wrote some code to deliver it how we wanted, and it's worked great. This practice of optimizing and automating team communication is commonly referred to as ChatOps, short for chat operations, and it plays a big role in the success of your distributed team. ChatOps starts by committing to a group chat tool, such as Slack, that will serve as the hub that other apps will push, or hook, into. This tool quickly becomes the Grand Central station of all of your team's communications. There are different levels of complexity when it comes to ChatOps. First, let's look at some basic tools that require little to no coding. Integration services such IFTTT and Zapier help make it easy to form digital connections between different applications, and are the first place to start on your ChatOps journey.
>
> **[1:37](https://www.linkedin.com/learning/agile-software-development-remote-teams-2019/chatops-integrating-your-communications?u=76281980&t=97)** With a third-party service like this, you can quickly connect your apps without writing code. Some applications come with prebuilt integration services that you can enable from the settings. These include a simple push notification to full bidirectional syncing of information. Sometimes the automation you're looking for isn't prebuilt. In these cases, you might want to look at a more custom solution, so here are some options for you to explore. Webhooks. Using the power of HTTP, the protocol that powers the web, we can use some of its underlying properties to get updated information from one site and then post a notification somewhere else. Webhooks are typically event-based notifications. An event happens, and then a message gets sent about what occurred. You can code up your webhook on your own server or you can use tooling like Zapier's webhook service. Chatbots. It might make sense for your team to set up a type of interactive system that mimics human conversation, a chatbot. One of the fist adapters of chatbots was [[GitHub]], who, in 2011, made their code openly available through Hubot. Since then, many other chatbot platforms have joined the scene, such as Lita and Err. Slack even has its own lightweight version called Slack bot that you can configure with custom messaging. I use this so that every time a team member
>
> **[3:10](https://www.linkedin.com/learning/agile-software-development-remote-teams-2019/chatops-integrating-your-communications?u=76281980&t=190)** enters the phrase good morning, Slack bot replies just like a receptionist at a physical [[Microsoft Office|office]] might, nice to see you. It is a great morning. You're going to have a productive day, I just know it. In addition to this lightweight version, you can also use Slack to build a more robust chatbot by tapping into their API. APIs. [[Application Programming Interfaces (API)|Application Programming Interfaces]], APIs, are another way that you can create integrations between your applications. Many tools publicly publish documentation on how you can write custom software to integrate with their systems. It's common to see long lists of possible actions or methods that you could use in this documentation, but taking advantage of an API typically requires some more advanced coding than other options we've presented. However, that development effort can be well worth it for the right customization. It all depends on what your team's needs are. ChatOps is an emerging area with big benefits for distributed teams. By observing places where you can optimize and automate your team's communication, you'll be well on your way to helping everyone be informed and involved, no matter where they are in the world.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Slack]] (6), [[GitHub]] (1), [[Microsoft Office|Office]] (1), [[Application Programming Interfaces (API)|Application programming interfaces]] (1)
> **Tools:** slack (6), github (1)
> **Env Vars:** api (2), ifttt (1), http (1)
> **Analogies:** such as (2), for example (1), just like (1)
> **Definitions:** short for (1), is a  (1), is an  (1)
> **CLI Commands:** make (2)
> **Prerequisites:** set up (1), configure (1)
> **Speakers:** - [instructor] (1)

#### [Signal vs. Noise](https://www.linkedin.com/learning/agile-software-development-remote-teams-2019/signal-vs-noise?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/agile-software-development-remote-teams-2019/signal-vs-noise?u=76281980&t=1)** - [Instructor] Your team has embraced open transparent communication. Awesome, right? You've even set up several automated messages using ChatOps principles. Hooray. But uh oh. There's an unintended consequence of all of these efforts. You're feeling completely overwhelmed by all of the information coming at you. It feels sometimes like you're drinking from a fire hose and it's hard to separate out what's important and what's not. Take a deep breath because there are ways to separate out the signal, the information that you want from the noise. The stuff that's not really as relevant. Step one, making managing communications a priority. Too often communication management is seen as not really as important as the other work so it's just not done. Instead too many people just suffer through the onslaught of notifications. Instead of being a passive recipient, set aside time and make optimizing your notifications a priority. Investing as little as 15 to 20 minutes per week now can save you a lot of time and frustration in the future. Some examples of these activities include leaving, muting and starring [[Slack]] channels, learning to use keyboard shortcuts, setting up do not disturb or out-of-[[Microsoft Office|office]] features, and finding and optimizing third-party tools to help manage emails
>
> **[1:34](https://www.linkedin.com/learning/agile-software-development-remote-teams-2019/signal-vs-noise?u=76281980&t=94)** such as Superhuman, Mailstrom, Unroll.me and SaneBox. In addition to individual optimization, you'll also want to discuss strategies as a group. For example, agreeing to use threaded conservations and making sure that you @mention people. It's also critical to discuss expectations around response times. Step two, manage response time expectations. Email, Slack, text messages, these are all asynchronous communication channels. If you are expecting an immediate response you are using them wrong. Individuals should have the ability to manage their own contact switching and should never feel beholden to a false sense of having to be on call at all times. It's important for individuals to be able to step away from whatever communication platform you are using to focus deeply or recharge. Multitasking is a myth, so stop expecting your team members to do it. Step three, define an escalation path. But Andrea, you might say, there are times when I just have to get in touch with a particular person. Absolutely. Which is why it's important to think about your escalation path well in advance. An escalation path is specifically designed to get attention for urgent issues.
>
> **[3:06](https://www.linkedin.com/learning/agile-software-development-remote-teams-2019/signal-vs-noise?u=76281980&t=186)** First, think about likely scenarios that are time sensitive and have a big impact. The production server going down is a big one on many software teams. Or it might be something good. Our product was just recommended by a celebrity and we're getting a flood of media requests. For example, at my company, we have a Slack channel called #SOS that we use only for urgent issues such as these. I've also let my team know that this is the only channel that comes through as a notification on my phone. Because it's rare that I get a message in this channel, when I see it come through, I know to pay attention and take action swiftly. Additionally, each member on our staff has a Wiki page that describes how best to reach them. My personal escalation plan looks like this. Send me a Slack message with an @ mention, then send me a message to the #sos channel, then text me, then call me, call me twice within three minutes to override a do not disturb feature and if you just can't get in touch with me, call Scott who's my business partner. By spending time streamlining your notifications, setting expectations with your team and predefining a path for escalating urgent communications you can [[Representational State Transfer (REST)|rest]] easy knowing that your communication settings are in balance. Not too much and not too little. Just right. Just right.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Slack]] (4), [[Microsoft Office|Office]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Tools:** slack (4)
> **Analogies:** such as (2), for example (2)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Env Vars:** sos (1)
> **Best Practices:** recommended (1)
> **Prerequisites:** set up (1)


### 3. Technical Excellence & Security

[↑ Back to Table of Contents](#table-of-contents)

#### [Virtual private networks (VPNs) and firewalls](https://www.linkedin.com/learning/agile-software-development-remote-teams-2019/virtual-private-networks-vpns-and-firewalls?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/agile-software-development-remote-teams-2019/virtual-private-networks-vpns-and-firewalls?u=76281980&t=1)** - Figuring out the right security measures for your team is a balancing act. On one hand, you absolutely want to keep the information about your company and your customers safe. At the same time, you don't want your security protocols to be so complex that your team can't work effectively. Now, this topic could easily take up an entire course in and of itself, but let's go over some basics of security on a remote team, virtual private networks and firewalls. VPNs work as a type of fence around a set of servers. In order to get through the fence, you need to have the right credentials. Once inside, you can go about your work and all of your data will be encrypted. Typically, a VPN doesn't make it any more difficult to do your regular work, but that will depend on the settings that your company puts in place. VPNs can be especially useful on a remote team because there are many places that offer free [[Wi-Fi|WiFi]], such as hotels and coffee shops, but they're typically unsecured. Using a VPN helps ensure that your internal servers are secure, even in these locations. Firewalls are another layer of security. A firewall acts sort of like a traffic cop, letting only specific types of traffic through, and can be positioned either at the server, an individual computer, or both. Firewalls are typically used to filter out viruses, bots, and other suspicious programs.
>
> **[1:35](https://www.linkedin.com/learning/agile-software-development-remote-teams-2019/virtual-private-networks-vpns-and-firewalls?u=76281980&t=95)** Most operating systems have an option in their system settings to turn on a firewall on a personal machine. But be aware that doing so can often interfere with many tools that are essential for remote work, such as video conferencing. VPNs and firewalls can help enhance the security of your remote team. However, they do come with some additional setup and maintenance costs. Just like any security measure, and find the right setup that works for your needs. and find the right setup that works for your needs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wi-Fi|Wifi]] (1)
> **Prerequisites:** setup (3), you need to have (1)
> **CLI Commands:** find (2), make (1)
> **Analogies:** such as (2), just like (1)
> **Env Vars:** vpn (2)
> **Definitions:** is a  (1)
> **Warnings:** be aware (1)
> **Speakers:** - figuring (1)

#### [Encryption and two-factor authentication](https://www.linkedin.com/learning/agile-software-development-remote-teams-2019/encryption-and-two-factor-authentication?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/agile-software-development-remote-teams-2019/encryption-and-two-factor-authentication?u=76281980&t=1)** - [Instructor] Encryption is a term that is used to describe taking data and scrambling it up so that it's difficult for a third party to read. This a good thing to know and use regularly, especially on a remote team. Most operating systems have a setting that encrypts the hard drive for that machine. It's a good idea to make sure every member of your team has that setting turned on. In addition you'll want to train your team to spot the difference between a secure website that uses the HTTPS protocol in front of a web address and an unsecured one which only uses HTTP. This is especially true when connecting from an unsecured network, such as a hotel or coffee shop. There are some additional encryption protocols that you'll need you use depending on your role. First is SSH which stands for Secure Shell. If you need work with a code repository on your local machine, you'll want to pull it down over SSH instead of something that isn't secure like FTP which stands for File Transfer Protocol. Luckily this is the standard for most source control platforms like Get Hub and Bit Bucket. It's also important to note that some industries have particular encryption standards that you'll need to follow. For example if you're interacting with credit card data in any way, you'll want to make sure that you're following the PCI, which is [[PCI DSS|Payment Card Industry data security standard]]. Another type of security measure for your team
>
> **[1:37](https://www.linkedin.com/learning/agile-software-development-remote-teams-2019/encryption-and-two-factor-authentication?u=76281980&t=97)** is two factor authentication. With two factor authentication, in order to log into a system, you'll need to provide your password plus another code. Most often this second code is delivered by text message or SMS although there are some known vulnerabilities with this method. Other options for the second authentication method include software such as [[Google]] Authenticator, or Authy, or even [[Hardware]] such as YubiKey. Finally it's important to keep all of the code that you're working with up to date. This means updating languages, frameworks, operating systems, and third party tools regularly to ensure they are receiving security patches. Many of the large data breaches that we've seen have been the result of failing to update critical systems. Just like you bring in your car for regular maintenance, it's important to maintain your code too.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PCI DSS|Payment card industry data security standard]] (1), [[Google]] (1), [[Hardware]] (1)
> **Env Vars:** ssh (2), https (1), http (1), ftp (1), pci (1)
> **Analogies:** such as (3), for example (1), just like (1)
> **CLI Commands:** make (2), ssh (2)
> **Definitions:** stands for (2), is a  (1)
> **Prerequisites:** you'll need (3)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Version control: Never run a remote team without it](https://www.linkedin.com/learning/agile-software-development-remote-teams-2019/version-control-never-run-a-remote-team-without-it?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/agile-software-development-remote-teams-2019/version-control-never-run-a-remote-team-without-it?u=76281980&t=1)** - [Instructor] Let me ask you a question. Where is your code? For some organizations the code that runs their business can only be found on an individual computer or perhaps a server that is in an [[Microsoft Office|office]] closet. Whenever I see this scenario, I get a little nervous. Having your code in only one location presents a lot of risks. What if that laptop was stolen or damaged? Or what if there was a fire or water damage to the building? In addition to the risk, there's also a workflow challenge if multiple people want to make changes to that code. Without a system to effectively track changes, it can be really difficult to find and fix the source of a bug. If you have multiple people working on different parts of the code, they might unintentionally overwrite one of their collaborator's changes, resulting in even more bugs. Luckily there are tried and true tools that can help protect against these scenarios, [[Version Control]]. Today the most widely used version control system is [[Git]], a decentralized system that can be visualized like a tree. You have your main code base, which is often called master. This is like the trunk of a tree so in some systems it's called trunk instead of master. From here there are a couple of different strategies such as creating branches or using feature flags that allow developers to work on code and then merge it into production once it's ready.
>
> **[1:34](https://www.linkedin.com/learning/agile-software-development-remote-teams-2019/version-control-never-run-a-remote-team-without-it?u=76281980&t=94)** One of the challenges of many version control systems is that you need to know how to work on the command line to effectively work with them. But web-based tools, such as [[GitHub]], [[Bitbucket]], and GitLab are all designed to make the [[User Experience (UX)|user experience]] easier. While each tool has its own unique properties, which some developers value more than others, at the end of the day, they all fundamentally have the following features. First they have ways to visualize and navigate the project history, including branches. It can be difficult to keep this information in your head when working on the command line, so the visualization tools of web-based platforms are super helpful here. Number two, tools that encourage back and forth discussions between developers before a branch is merged. Since the developer is requesting that their code be pulled into master, this is often referred to as a pull request, or a merge request. These commenting features can be really useful when you have to go back and reconstruct the rationale of the decision. Number three, web-based tools typically have both cloud-hosted and self-hosted options. With cloud-hosting you don't have to worry about backups and other infrastructure. The company takes care of that for you as part of the service. However if you want to keep your code inside your firewall, you can also use the self-hosted version too. Number four, your code can be organized
>
> **[3:07](https://www.linkedin.com/learning/agile-software-development-remote-teams-2019/version-control-never-run-a-remote-team-without-it?u=76281980&t=187)** into logical groupings typically referred to as repositories. It's fairly common for other developers within the organization to have the ability to view other repositories which helps crosspollinate ideas throughout the organization. They can then propose changes through a pull request or a merge request, making it easy to collaborate with other teams. As for the cost, Git is free and open sourced, but you'll be limited to using it on the command line and there are some commenting features that are easier if you subscribe to a service like GitHub. In general web-based tools have a small monthly fee that is charged either by the team member or by the repository. Version control systems should be an absolute must for any remote development team, although I would argue that they're a must for co-located teams too.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Version Control]] (4), [[Git]] (2), [[GitHub]] (2), [[Microsoft Office|Office]] (1), [[Bitbucket]] (1)
> **Tools:** command line (3), github (2), bitbucket (1), gitlab (1)
> **CLI Commands:** make (2), git (2), find (1)
> **Analogies:** such as (2)
> **Speakers:** - [instructor] (1)

#### [Methodologies that drive development](https://www.linkedin.com/learning/agile-software-development-remote-teams-2019/methodologies-that-drive-development?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/agile-software-development-remote-teams-2019/methodologies-that-drive-development?u=76281980&t=1)** - [Instructor] You've shifted your thinking towards a distributed mindset, set up your tools, and now you're ready to start solving problems, awesome. Now we'll go over some popular methodologies in [[Software Development]] and talk about how they can be adapted for a distributed team. Let's start at the most business focused of the methodologies: [[Design Thinking]], which has its roots in the 1960s but gained global popularity at the turn of the century when the design firm IDEO and the Stanford Design School, d.school, began codifying and teaching its main concepts. Design thinking is particularly useful for solving big and complex problems, one where a solution isn't yet well defined. There are many ways to describe the overall process, but essentially, it comes down to understanding a problem through research, developing creative ideas that might solve the problem, and then getting those ideas into the hands of real people as quickly as possible. Design thinking requires immense amounts of collaboration but it can be successfully used on a distributed team. In addition to using collaboration tools, design for remote work, many organizations will bring collaborators together for focused in-person sessions. Next, let's look at domain-driven design. In 2004, Eric Evans published the book, Domain-Driven Design, commonly referred to as DDD, which outlines the basic tenants of the methodology. One of the biggest goals of DDD is to create a shared language
>
> **[1:33](https://www.linkedin.com/learning/agile-software-development-remote-teams-2019/methodologies-that-drive-development?u=76281980&t=93)** between business teams and development teams so that the code base accurately reflects the context of the problem being solved. This is typically done by looking at the business or a specific business process as a whole and then carving out domains and bounded contexts for the [[Software Architecture]]. Many aspects of DDD require intense collaboration, so some parts of the process might benefit from co-location while others are more easily adapted to a distributive format. Next, let's look at behavior-driven development, developed by Dan North in 2004, and sometimes referred to as specification by example. Traditionally, business people would write up long requirements documents in a [[Microsoft Word|word]] processor or a spreadsheet. However, when requirements are described in this way, there's a big risk that the intent gets lost in translation when the developer needs to turn that requirement into code. BDD uses scenarios which are written in plain English, using a structure such as given-when-then. These scenarios then become executable code that developers can use to ensure the behavior that the business intended is indeed what's implemented. Finally, let's look at the most code-focused of the methodologies: [[Test-Driven Development]]. Test-driven development was developed in 2003 by Kent Beck. It is most effectively used in tandem with behavior-driven development as a way to validate your code in an automated way, write less code overall, and introduce fewer bugs.
>
> **[3:09](https://www.linkedin.com/learning/agile-software-development-remote-teams-2019/methodologies-that-drive-development?u=76281980&t=189)** The framework for TDD is often described as red-green-refactor. First, a developer will write a test that they know will fail and this guards against false positives. Then they work on making that test pass and finally, they refactor or edit their code so that it's easier to make changes later. BDD and TDD methodologies are especially useful for distributed teams since the risk for a misunderstanding which wastes precious resources when you have to go back and forth to clarify is much higher than on co-located teams. There are many other types of methodologies for building code. Acceptance test-driven development, type-driven development, business-driven development, model-driven development, just to name a few. You can definitely dive deep on all sorts of methodologies. The descriptions here only scratch the surface, but hopefully now you have a better understanding of ways that your remote team can build software and how some of the most popular methodologies all relate to each other.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Design Thinking]] (3), [[Test-Driven Development]] (3), [[Software Development]] (1), [[Software Architecture]] (1), [[Microsoft Word|Word]] (1)
> **Env Vars:** ddd (3), bdd (2), tdd (2), ideo (1)
> **CLI Commands:** make (1)
> **Documentation:** specification (1)
> **Analogies:** such as (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Continuous improvement and marginal gains](https://www.linkedin.com/learning/agile-software-development-remote-teams-2019/continuous-improvement-and-marginal-gains?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/agile-software-development-remote-teams-2019/continuous-improvement-and-marginal-gains?u=76281980&t=1)** - [Instructor] Continuous improvement, [[Continuous Integration (CI)|continuous integration]], [[Continuous Delivery (CD)|continuous delivery]], continuous deployment. There is a lot of continuous happening in software, and embracing these practices can have a profound positive impact on distributed teams. So, just what are all of these continuous practices, and how do they relate to each other? The underlying goal of these practices is to make it as easy as possible for a developer to get their changes incorporated into the application they're working on. The principles are inspired by lean manufacturing which has long-embraced the idea of reducing the amount of time from production to delivery. Just like a physical product can lose value if it sits in a warehouse for too long, the quality of your code can deteriorate if it's not put into production quickly. So let's start at the beginning, continuous improvement. This is the practice of identifying areas of improvement, no matter how small, and then implementing those improvements as quickly as you can. Over time, these small changes compound, much like compound interest in a savings account through a process called marginal gains. A great example of marginal gains comes from the British cycling team. Under the leadership of Sir Dave Brailsford, the team committed itself to the practice of continuous improvement, ruthlessly seeking out even the smallest areas of improvement. They improved their equipment, their nutrition, and even brought their own mattresses
>
> **[1:32](https://www.linkedin.com/learning/agile-software-development-remote-teams-2019/continuous-improvement-and-marginal-gains?u=76281980&t=92)** and pillows to competitions all in an effort to make their performance just a little bit better. Six years after adopting this strategy, the team's win rate exploded! They went from winning only one gold medal in their entire 76-year history to dominating the Beijing Olympics, winning seven out of the 10 gold medals available. However, as Sir Brailsford noted in an interview with the Harvard Business Review, in order for this approach to work, the whole team has to buy in, otherwise, you'll breed resentment. Another way to think of this comes from Woody Zuill, a software expert known for his work with [[Team Collaboration]] and helping teams adopt a whole-team approach. His mantra? Turn up the good. Look for things that are benefiting the team and amplify them. Experimentation is a great way to test out possible ideas. For example, several years ago on my team, I was struggling to keep track of how everyone was doing. Synchronous one-on-one meetings were working okay, but I was concerned that I was becoming the bottleneck. I had heard a story of how engineers at NASA during the Apollo missions would take detailed notes throughout their day to help them share ideas across the organization. I'm also kind of a Star Trek nerd and thought the logs that crew members kept on their missions to narrate their own experiences were pretty cool. I was curious if a similar idea might work for us,
>
> **[3:07](https://www.linkedin.com/learning/agile-software-development-remote-teams-2019/continuous-improvement-and-marginal-gains?u=76281980&t=187)** so we decided to run an experiment where we'd all keep a digital journal, update it daily, and then share a link in a dedicated [[Slack]] channel. This practice ended up being transformative. So much so that we've kept this practice going ever since. Not every experiment will be free, although many might. So, in addition to allocating time for your team to experiment, it's also a good idea to set aside some budget for these types of initiatives. Without resources that have been preallocated and approved, good ideas can often get shut down before they even get off the ground. Balancing the costs with the potential benefits is an ongoing process.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Continuous Integration (CI)|Continuous integration]] (1), [[Continuous Delivery (CD)|Continuous delivery]] (1), [[Team Collaboration]] (1), [[Slack]] (1)
> **Definitions:** is a  (2), is an  (1)
> **CLI Commands:** make (2)
> **Analogies:** just like (1), for example (1)
> **Env Vars:** nasa (1)
> **Tools:** slack (1)
> **Speakers:** - [instructor] (1)

#### [Continuous integration, delivery, and deployment](https://www.linkedin.com/learning/agile-software-development-remote-teams-2019/continuous-integration-delivery-and-deployment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/agile-software-development-remote-teams-2019/continuous-integration-delivery-and-deployment?u=76281980&t=0)** - [Narrator] Once your team is committed to identifying and implementing good ideas through continuous improvement, we can start looking at other continuous processes to help you deliver software faster. The next step on our continuous journey, is [[Continuous Integration (CI)|continuous integration]], which is the practice of using smaller commits and an automated test suite to look for potential problems before code is released into production. Practices such as behavior driven development and test driven development, will create what's known as a test suite that can be run every time you want to merge code into the master branch. The test suite works like an insurance policy to guard against bugs, conflicts, and unintended consequences. There are a couple of ways to structure continuous integration. And the debate for which style is the best is always a fun one to engage in. First, developers can commit directly into master themselves. Also known as trunk-based development. With trunk-based development, it's common for teams to build the ability to toggle changes on or off as you're working on them. This is commonly referred to as feature flags, or feature toggles. Another style uses branches, which are merged and then deleted after review. Both styles enable asynchronous review, which is great on a distributed team, but be aware that it's important to regularly prune both your toggles and your branches to keep your code base healthy.
>
> **[1:33](https://www.linkedin.com/learning/agile-software-development-remote-teams-2019/continuous-integration-delivery-and-deployment?u=76281980&t=93)** After you've gotten in the habit of regularly merging commits into master, and running them against an automated test suite, the next logical step in the process, is to automate the process for building and packaging, also known as [[Continuous Delivery (CD)|continuous delivery]]. This often requires deploying to a staging environment for [[Manual Testing]]. With continuous delivery, the code is always ready to release at whatever cadence makes sense. This often means that release schedules can now be determined by business needs, instead of being constrained by technical limitations. Another benefit of being able to deploy on demand, is that you can also roll back on demand. Should an error accidentally make it through into production, it's relatively easy to revert to the last stable release through a good [[Version Control]] system. For some teams it makes sense to extend continuous delivery even further. With continuous deployment, commits are run through the automated test suite, automatically packaged and built for delivery, and then automatically deployed into production. While this provides the most realtime type of development, there could be some very good reasons that businesses choose not to extend their continuous efforts this far. For example, if your software is an executable file that your customers will need to download for an update, requiring them to download a new update several times a day, would likely just create frustration.
>
> **[3:08](https://www.linkedin.com/learning/agile-software-development-remote-teams-2019/continuous-integration-delivery-and-deployment?u=76281980&t=188)** Finding the right balance of continuous practices on your team takes time, patience, and team work. By starting with the mindset of regularly improving your process, and then finding opportunities to reduce risk and speed delivery through automation, you're well on your way to making it easier for your distributed team to deploy working software quickly.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Continuous Delivery (CD)|Continuous delivery]] (3), [[Continuous Integration (CI)|Continuous integration]] (2), [[Manual Testing]] (1), [[Version Control]] (1)
> **Definitions:** known as (3), means that (1), is an  (1)
> **Analogies:** such as (1), for example (1)
> **CLI Commands:** make (1)
> **UI Navigation:** toggle (1)
> **Warnings:** be aware (1)
> **Speakers:** - [narrator] (1)

#### [Understanding technical debt](https://www.linkedin.com/learning/agile-software-development-remote-teams-2019/understanding-technical-debt?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/agile-software-development-remote-teams-2019/understanding-technical-debt?u=76281980&t=1)** - [Instructor] A few weeks ago, I made some cupcakes for a friend's baby shower. Unfortunately, I got caught up in the frenzy of creation, that when the cupcakes were finished, I looked at my kitchen and found a huge mess. I had only thought about making the cupcakes, and when it came time to rush out the door for the event, I admit, I left that mess in my sink to deal with it later. Too often, this is the way we treat our code. In our frenzied push for features, it's easy to overlook the digital mess that we leave behind. [[Software Projects]] that get to this state have some lovely names: spaghetti code, big balls of mud, and dirt field projects, just to name a few. What's more, this mess has an impact on how efficiently we can deliver working software, especially on distributed teams. In 1992, Ward Cunningham described this mess left in a software system as technical debt, and the name has stuck. Cunningham wrote, shipping first-time code is like going into debt, a little debt speeds development, so long as it is paid back promptly with a rewrite. The danger occurs when the debt is not repaid. Every minute spent on not quite right code counts as interest on that debt. Entire engineering organizations can be brought to a standstill under the debt load. So how do you keep technical debt from overtaking your software system?
>
> **[1:36](https://www.linkedin.com/learning/agile-software-development-remote-teams-2019/understanding-technical-debt?u=76281980&t=96)** Recognize its importance, manage your expectations, prioritize activities that help pay down technical debt, and monitor trends. The first step is to recognize that technical debt is something that you'll always have to work on. Just like cleaning up after yourself in your home is a never-ending practice, you'll need to be mindful of technical debt as long as you're developing a project. Next is to make space for your expectations. If you're leading a development team, it's absolutely appropriate for developers to spend a good portion of their development time on activities that reduce technical debt. These may include things such as reducing duplication or complexity in the codebase, extracting methods or other refactoring activities, improving documentation, following [[Test-Driven Development]], updating the names of methods, variables, classes, and functions, and much more. Expecting a team to only ever deliver features is one of the surest ways to find your system in a state of technical bankruptcy. You'll also want to invest in good monitoring tools, such as SonarQube, CodeScene, or Code Climate, just to name a few. These tools can help you monitor key quality metrics, such as complexity, churn, duplication, test coverage, and more. Finally, give your team time to reflect on their experiences, learn about good [[Design Patterns]], and share their ideas for improvement. These investments for your technical team
>
> **[3:11](https://www.linkedin.com/learning/agile-software-development-remote-teams-2019/understanding-technical-debt?u=76281980&t=191)** can pay dividends in the long run and help ensure your distributed team can deliver working code quickly.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Software Projects]] (1), [[Test-Driven Development]] (1), [[Design Patterns]] (1)
> **Analogies:** such as (3), just like (1)
> **CLI Commands:** make (1), find (1)
> **Definitions:** is a  (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)


### 4. Deploying Early and Often

[↑ Back to Table of Contents](#table-of-contents)

#### [Atomic commits: One change, one commit](https://www.linkedin.com/learning/agile-software-development-remote-teams-2019/atomic-commits-one-change-one-commit?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/agile-software-development-remote-teams-2019/atomic-commits-one-change-one-commit?u=76281980&t=1)** - Once I started working on a distributed team, I started to understand the value of the phrase, one change, one commit, otherwise known as an atomic commit. With an atomic commit, each commit represents a single change. Ideally, this commit is accompanied by a short descriptive title and a longer description. This practice of creating atomic commits with detailed notes enables other people on your team to more easily understand your thought process without requiring a synchronous event. I like to imagine myself leaving a trail of thought breadcrumbs for my future self or other members on my team to follow. They're like little artifacts of my thinking. And just like an archeologist or anthropologist relies on pottery, coins, and written text to understand people from different eras or cultures, leaving a rich repository of small commits can be an immense help on a distributed software team. Here's how [[Git]] recommends splitting up commits. They should be small, logical steps, consistent, work independently, and pass the test suite. They also give this advice. Don't be afraid of making too small or imperfect steps along the way. You can always go back later and edit the commits before you publish them. So, how small is small? For some developers like Arlo Belshee, part of their development practice
>
> **[1:33](https://www.linkedin.com/learning/agile-software-development-remote-teams-2019/atomic-commits-one-change-one-commit?u=76281980&t=93)** is to commit at least every 30 to 45 seconds. When I first interviewed Arlo on my podcast, I was really surprised. That felt like so much committing. But Arlo explained how this cadence works well to ensure he's keeping his thinking as small as possible. Arlo also uses a specific notation to help him and the other developers on his team understand what a specific commit does and builds up that rich, emergent documentation of the system. With this notation, anything that's lowercase doesn't impact the behavior of the system. Things like comments, documentation, tests, proven refactorings, and formatting. All of these items present a relatively low risk when deployed to the system. Higher-risk changes such as features and bug fixes are notated using an uppercase letter. And exclamation points and asterisks indicate refactorings that are not proven and intermediate steps that don't compile respectively. Another reason you want to keep your commits small is that it reduces the amount of risk that you're introducing into your system. With atomic commits that introduce a singular change, it's much easier to determine which part of the code isn't working properly if you ever need to go back and fix a bug. Bigger commits require much more effort if you need to roll back a change.
>
> **[3:07](https://www.linkedin.com/learning/agile-software-development-remote-teams-2019/atomic-commits-one-change-one-commit?u=76281980&t=187)** Using smaller commits with their accompanying titles and descriptions is an effective way to share your ideas across time and distance. It also makes it less risky to introduce changes into the system. This might require some habit changes, but the results can be well worth the effort.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Git]] (1)
> **Analogies:** imagine (1), just like (1), such as (1)
> **Definitions:** known as (1), is an  (1)
> **CLI Commands:** git (1)
> **Speakers:** - once (1)

#### [Branching and forking](https://www.linkedin.com/learning/agile-software-development-remote-teams-2019/branching-and-forking?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/agile-software-development-remote-teams-2019/branching-and-forking?u=76281980&t=1)** - [Instructor] Before I came into the software industry, I worked as a writer, specializing in business communication. My team and I would write articles, blog posts, website content, all sorts of stuff. The basic process went like this. Draft, review, publish. We had a rule that nothing would go out unless it had at least two pairs of eyes. This drastically reduced the number of errors that made it into publication, and helped improve the quality of our work. This same basic process applies to [[Software Development]] too. Let's look at how this process works using branches, forks, and poll requests. If a developer wants to change some code, it's probably not a good idea for them to log into the server where the live code is running and just start making changes. This is a huge risk, especially on a team with more than one contributor, and drastically increases the chances that the application will crash, frustrating pretty much everyone. Instead, you want to set up your process so that you have reviews and checks before your code gets deployed. Just like I had someone proofread my article before it was published. Developers can safely work in a draft mode in two ways. Branching or forking. Both of these methods are ways of creating copies of the main code base so that you can work on it separately from the code that's in production.
>
> **[1:37](https://www.linkedin.com/learning/agile-software-development-remote-teams-2019/branching-and-forking?u=76281980&t=97)** With a branch, you create an offshoot of the main code base, usually referred to as master. With a fork, you are creating an exact copy of the repository, a clone. Now, whether or not to use branching or forking is a hot debate in the software world. And you can dig deeper to figure out the best strategy for your team. What's important is that you come up with a process and apply it consistently across your team.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Software Development]] (1)
> **Definitions:** is a  (2)
> **Analogies:** just like (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Code reviews](https://www.linkedin.com/learning/agile-software-development-remote-teams-2019/code-reviews?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/agile-software-development-remote-teams-2019/code-reviews?u=76281980&t=1)** - [Instructor] Now that a developer has some changes they want to incorporate, it's time for a review. The developer will package their changes up into what's called a pull request or a merge request to basically say hey, I'm ready for you to review me. This will signal automated tools such as automated style guides, [[Continuous Integration (CI)|continuous integration]] services, linting services, etc. to check the code and see if it passes whatever parameters the team has set up. This is also a good opportunity for a human to review the code too. Source control platforms such as [[GitHub]] and [[Bitbucket]] have commenting features, so you can have a dialog about the changes. Documenting this back and forth through commenting is especially useful when that code needs to be referenced in the future. It often captures the rationale about why a decision was made and is incredibly useful if you need to go back and fix a bug or make a change to the architecture. It's also a good idea to come up with a team style guide to help facilitate code reviews. You can get inspiration at places like [styleguide.io](https://styleguide.io). A style guide acts as the rules of engagement that are worked out beforehand. This prevents reviews from getting bogged down in the minutia and stylistic opinions too much. For example, in my writing career, we would have long and drawn-out debates as to whether or not you should put a comma before and in a list of items.
>
> **[1:35](https://www.linkedin.com/learning/agile-software-development-remote-teams-2019/code-reviews?u=76281980&t=95)** Team Oxford Comma right here. Or whether or not to use they as a singular pronoun. We decided to implement a style guide to help, and that became the definitive answer to any style debate, and it made it much easier to review each other's work. For developers, some of these style choices are things like whether or not to use past or present tense in your commit messages, or whether you should use tabs or spaces or camel case or underscores, or the best way to use inline comments or global variables. All of these are prone to passionate discussion and benefit greatly from an agreed-upon standard Providing feedback is a skill, so it's probably a good idea to regularly offer training about how to offer constructive criticism about another person's work. One of the most popular books among developers on this topic is Nonviolent Communication by Marshall Rosenberg. [[Microsoft]] CEO Satya Nadella credits this book from turning their culture from cut-throat to creative and considers it a must-read for development teams. After drafting and reviewing, the code is ready to go, hooray! Now it's time to merge the request and deploy it with the confidence that what's out in the world is better than if you had written it alone. than if you had written it alone.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Continuous Integration (CI)|Continuous integration]] (1), [[GitHub]] (1), [[Bitbucket]] (1), [[Microsoft]] (1)
> **Tools:** github (1), bitbucket (1)
> **Analogies:** such as (1), for example (1)
> **CLI Commands:** make (1)
> **URLs:** [styleguide.io](https://styleguide.io) (1)
> **Env Vars:** ceo (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)


### 5. Hiring, Planning, and Measuring

[↑ Back to Table of Contents](#table-of-contents)

#### [Creating job descriptions for remote positions](https://www.linkedin.com/learning/agile-software-development-remote-teams-2019/creating-job-descriptions-for-remote-positions?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/agile-software-development-remote-teams-2019/creating-job-descriptions-for-remote-positions?u=76281980&t=1)** - One of the questions I get asked most often when I tell people I lead a remote team is, how do you hire people that you've never met before. For some people it's hard to comprehend. While it's true that you can glean a ton from an in-person meeting, there are many practices that can be adapted to help you learn about whether someone will be a good fit for your remote team, even if you've never physically occupied the same space. First, let's look at where it all starts, a quality job description. In today's competitive talent market it's worth taking the time to craft a high quality description that will help other people get a sense of why they should work for you instead of someone else. Here are my top tips for attracting remote candidates. Align your operations. Remember, the best candidates have options, They're [[Interviewing]] you as much as you're interviewing them. Read industry reports, such as Buffers annual State of Remote Work. And make sure your [[Business Operations]] are up to snuff with what top talent expects. Think beyond the bullet points. Bullet points may seem easier to write but typically don't help you find the best candidate. It's better to take the time to write something that really showcases your company's unique style. Avoid needless benchmarks. If a benchmark, such as years of experience isn't an absolute must have,
>
> **[1:35](https://www.linkedin.com/learning/agile-software-development-remote-teams-2019/creating-job-descriptions-for-remote-positions?u=76281980&t=95)** no way we can live without it qualifier, don't use it. Research shows that many candidates won't apply unless they meet every single criterion. You don't want them to self-select out and not apply. Make it a conversation. Your job description is often the first impression a candidate will have with your company. If you want them to dig in and learn more it's best to talk to them directly. Imagine your writing directly to your ideal employee, almost like a personal letter rather than to a group of people. Your description should have much more you language than us or we language. Get feedback. Before you post your description get others to review it. Tools like Grammarly can help make sure your writing is professional. And Textio can help ensure your [[Microsoft Word|word]] choices don't accidentally skew to one gender. Provide a clear call to action. Plan out your process ahead of time and give clear directions on what to do. At Corgibytes we point candidate to an online questionnaire that serves as their application. Now that you've got your job description ready to go it's time to advertise. There are many recruiting platforms that target remote workers, such as We Work Remotely, PowerToFly, [Remotive.io](https://Remotive.io), FlexJobs, [Remote.co](https://Remote.co) and many, many, many more.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Interviewing]] (2), [[Business Operations]] (1), [[Microsoft Word|Word]] (1)
> **CLI Commands:** make (3), find (1)
> **Analogies:** such as (3), imagine (1)
> **URLs:** [remotive.io](https://remotive.io) (1), [remote.co](https://remote.co) (1)
> **Best Practices:** it's best to (1)
> **Speakers:** - one (1)

#### [Interviewing and hiring for remote teams](https://www.linkedin.com/learning/agile-software-development-remote-teams-2019/interviewing-and-hiring-for-remote-teams?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/agile-software-development-remote-teams-2019/interviewing-and-hiring-for-remote-teams?u=76281980&t=1)** - Now that candidates are applying, and you've found some folks that you think might be a good fit, it's time to interview. At Corgibytes, our interview process starts out with a screening interview, in the form of an online questionnaire. Candidates answer questions such as, why do you want to work here? What's an article you found interesting, and why? Read this article and tell us your thoughts. These open-ended questions give us a glimpse into how this person might interact on [[Slack]] and in code reviews. Someone who gives a terse answer without much thought behind it isn't likely to advance. Next, we conduct video interviews using [[Zoom]]. During the interview, we ask questions related to our core values and keep track of our experiences in a spreadsheet. For positions where more than 50% of a role will be coding, we invite the candidate to pair with us on some code cot-ahs, or problems on [Exercism.io](https://Exercism.io). Zoom's screen sharing features make this pretty seamless. As a final step in the process, we have a Slack interview. We make the candidate a single channel guest, and invite them to interact with our whole team over the course of a few days. Slack is such a critical part of our day to day workflow, which is why we evaluate this skill too. It's also a great way to help the candidate feel more ease, and build relationships with their future teammates. Woohoo! You've found your ideal team member, and you're ready to set them up.
>
> **[1:33](https://www.linkedin.com/learning/agile-software-development-remote-teams-2019/interviewing-and-hiring-for-remote-teams?u=76281980&t=93)** Thoughtful preparation and strategic planning can go a long way here. We use a detailed Wiki on [[GitHub]] for our onboarding. Other companies use tools like [[Google]] Slides, Notion, or something they've built internally. This self-paced onboarding allows people to get up and running quickly and asynchronously. New team members tell me often about how much they appreciate the treasure trove of information on the company Wiki. They feel empowered, and enjoy being able to add value right away. Some remote companies, such as Zapier, even fly new team members to a co-located space as part of the onboarding process. But many others that don't have a central [[Microsoft Office|office]], such as Buffer, Automatic, and my own company, opt for bringing their team together in a co-located space as part of a separate event. With these ideas in mind, it's possible to hire and work with amazing people on your distributed team.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Slack]] (3), [[Zoom]] (2), [[GitHub]] (1), [[Google]] (1), [[Microsoft Office|Office]] (1)
> **Tools:** slack (3), github (1), notion (1)
> **Analogies:** such as (3)
> **CLI Commands:** make (2)
> **URLs:** [exercism.io](https://exercism.io) (1)
> **Speakers:** - now (1)

#### [Where's the whiteboard?](https://www.linkedin.com/learning/agile-software-development-remote-teams-2019/where-s-the-whiteboard?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/agile-software-development-remote-teams-2019/where-s-the-whiteboard?u=76281980&t=1)** - For many people, there's one last element of co-location that they're hesitant to give up. Whiteboards. And by association, sticky notes. It's with good reason. Visual collaboration is critical for many projects. I know for me, there's just something about the tactile feel, even the smell, of all of the [[Microsoft Office|office]] supplies strewn out on the table that just makes me feel more focused and productive. How can you replicate that on distributed teams? Let's think about what we use whiteboards for. Whiteboards are excellent tools for documenting conversations as they happen in real time. That might be a session where folks generate lots of ideas, or negotiating what to work on next, or figuring out a business process, or any number of things. So the key to being able to find a tool that replicates on-premise functionality as much as possible will need to have the following elements. Uninterrupted flow. The tool you choose should be able to keep up with your conversation. If you need to pause your dialogue because your tool isn't easy to use, that won't give you the feel of in-flow facilitation that a whiteboard provides. Simple to change and restructure. One of the biggest benefits of the whiteboard is how easy it is to erase. Your digital tool should be easy to make sweeping structural changes to. Tools that are locked into a specific format
>
> **[1:34](https://www.linkedin.com/learning/agile-software-development-remote-teams-2019/where-s-the-whiteboard?u=76281980&t=94)** or don't allow for much customization will likely lead to frustration. Multiple simultaneous contributors. Whiteboards make it easy for several people to add their thoughts at the same time. Just pick up a pen. Your digital collaboration tool should make it just as easy for a group to add their ideas. And finally, both visual and text. With whiteboards, it's just as easy to sketch out a picture as it is to write a list of bullets. Sometimes, a picture is worth a thousand words. So it should be just as easy to add visual content as well as words.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Office|Office]] (1)
> **CLI Commands:** make (3), find (1)
> **Analogies:** picture (2)
> **Speakers:** - for (1)

#### [Remote whiteboard tools](https://www.linkedin.com/learning/agile-software-development-remote-teams-2019/remote-whiteboard-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/agile-software-development-remote-teams-2019/remote-whiteboard-tools?u=76281980&t=0)** - There are a plethora of tools to choose from to serve as your digital whiteboard. So do your research, and try different things that work for you. That said, here are some of the more popular tools on the market, to give you a place to start. G Suite, [[Google]]'s [[Microsoft Products|products]], Docs, Sheets, and Slides, are among the best on the market for [[Real-Time]] collaboration. For example, if we want to get a bunch of ideas from a group on our team, we'll open up a file and everyone can start editing at once. Google also has an integration with [[Microsoft Office]], to enable the same instant collaboration across its products, such as [[Microsoft Word|Word]], [[Microsoft Excel|Excel]], and [[Microsoft PowerPoint|PowerPoint]]. Miro, formerly known as RealtimeBoard. When I want to most-closely replicate the visual feel of a whiteboard, this is the tool I reach for. There are tons of pre-built templates that are particularly useful for software teams, such as [[Scrum]], Kanban, Product Roadmaps, Retrospectives, and more. It's just about as easy to place sticky notes on the digital board as it is with a physical whiteboard. And while the flow with multiple people isn't quite as simultaneous as [[Google Drive]], it's still pretty good. A couple of other options in this highly-visual style are Sketchboard, Mural, and [draw.io](https://draw.io). [[Trello]], this is a popular choice for many teams and uses the metaphor of placing cards on a board that can then be reconfigured, as needs change.
>
> **[1:38](https://www.linkedin.com/learning/agile-software-development-remote-teams-2019/remote-whiteboard-tools?u=76281980&t=98)** While it's not as immediately visual as some of the other tools, you do have the option of adding images to individual cards. Like Miro, there are many pre-built templates, plus Trello has loads of integrations, adding to its popularity. Asana, Airtable, and Notion are some other tools that have similar functionality. Paper and pen, sometimes, the best choice for collaborating on a distributed team isn't digital at all. I keep a paper and pen by my computer at all times. This way, if I'm explaining things on a video call that would be enhanced by some visual representation, I'll draw a quick sketch and just hold it up to the video camera. If I want to keep the image, I'll take a quick picture with my phone and add it to another collaboration tool, to help give context. Most of these tools, and again, these only scratch the surface of what's available, do a pretty good job of replicating the functionality of a whiteboard. However, you may still find that there are times when you just have to have people on-site and collaborating in the same room. When that happens, you can always fly folks in for an in-person session. Sometimes, that's the right choice. Working on a distributed team doesn't mean giving up collaborating. But it does require you to think differently about the tools you use. With a little research and experimentation,
>
> **[3:10](https://www.linkedin.com/learning/agile-software-development-remote-teams-2019/remote-whiteboard-tools?u=76281980&t=190)** you can get the same benefits of a whiteboard, even when everyone is physically in a different geographic location.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (2), [[Microsoft Products|Products]] (2), [[Trello]] (2), [[Real-Time]] (1), [[Microsoft Office]] (1)
> **Analogies:** such as (2), for example (1), picture (1)
> **Definitions:** known as (1), is a  (1)
> **CLI Commands:** find (1)
> **URLs:** [draw.io](https://draw.io) (1)
> **Tools:** notion (1)
> **Speakers:** - there (1)

#### [Remote pairing and mobbing](https://www.linkedin.com/learning/agile-software-development-remote-teams-2019/remote-pairing-and-mobbing?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/agile-software-development-remote-teams-2019/remote-pairing-and-mobbing?u=76281980&t=1)** - When people learn that I lead a distributed software team, one of the next follow-up questions is, but how do you pair program? Yes, even this practice can be performed remotely with the right tools. Pair programming, pairing, is the practice of two developers working collaboratively and simultaneously on the same part of a code base. In a co-located space, these developers would share a single workstation and rotate who types. The practice grew out of extreme programming and is a popular way of working because it helps distribute knowledge across a team quickly, reduce the number of bugs that make it into production, makes the process of producing software more social, and expedites the review process. Mob programming, mobbing, takes the same ideas of pair programming, and applies them to a bigger group. Mobs are often comprised of smaller groups of around three to six people, but they can be much larger if necessary. Pairing and mobbing use similar rules to rotate who's at the keyboard. It's common to use a countdown timer to help remind you to switch positions every five to 10 minutes. In strong-style pairing, the person at the keyboard is the driver. Their job is to mostly listen and enter changes using the keyboard and mouse. The person telling the driver what to enter,
>
> **[1:36](https://www.linkedin.com/learning/agile-software-development-remote-teams-2019/remote-pairing-and-mobbing?u=76281980&t=96)** is the navigator. The navigator talks out loud and directs the driver. Llewellyn Falco, a consultant who specializes in pairing and mobbing, describes strong-style pairing like this, "In order for an idea to go "from your head into the computer, "it must go through someone else's hands." Some teams find these more structured rules to be very useful, especially when groups are just forming or are new to the practice. Other teams have more relaxed styles. It's a good idea to try different approaches and find the one that works best for you. Over the years, services that offer video and screen sharing have become much more stable. [[Zoom]] is particularly well-equipped to handle groups. But experiment with different tools until you find the one that works best for your team. There are a couple of different ways to pass the keyboard if you're using a service like Zoom. First is to give control of the screen to a different person. This works well if everyone's internet connection is strong. But might cause some lag for the driver if they don't have access to a high-speed connection. If you feel like lag is impeding your flow, you might want to have developers work locally. In this setup, the driver passes the keyboard by committing what they've done. Then the new driver can pull down changes and share their screen.
>
> **[3:08](https://www.linkedin.com/learning/agile-software-development-remote-teams-2019/remote-pairing-and-mobbing?u=76281980&t=188)** This method means that there is a bit more time between the exchange. But it does allow each developer to work in a local environment, which ensures there is no lag. Containerization will be really useful here to ensure a consistent development environment across all parties. Another option is to rotate the navigator every five to 10 minutes, while keeping the driver the same throughout the session. In this situation, there will be times when an individual is both the driver and the navigator. In this case, it's important for other members of the group to speak up and hold the driver accountable as it breaks the strong-style pairing convention. With the right tools and a little experimentation, working on code together in real time is absolutely possible on a distributed team.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Zoom]] (2)
> **CLI Commands:** find (3), make (1)
> **Definitions:** is a  (2), means that (1)
> **Prerequisites:** setup (1)
> **Speakers:** - when (1)

#### [Remote standups](https://www.linkedin.com/learning/agile-software-development-remote-teams-2019/remote-standups?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/agile-software-development-remote-teams-2019/remote-standups?u=76281980&t=1)** - For [[Agile Development|agile]] teams, standups and retrospectives are core practices to ensure value is delivered quickly and that we're constantly learning about how to be more effective. While these practices were originally developed for co-located teams, you can successfully adapt them for distributed teams as well. On a distributed team, communicating information asynchronously is important. Teams are often separated by time zone and have the autonomy to work flexible hours. Asynchronous communication does not replace synchronous activities but rather works in conjunction with it. This allows team members to digest information at a time of their choosing and helps ensure that everyone is aware of other members' activities, impediments, and ideas for improvement. Standups became popular with the rise of [[Scrum]]. In the Scrum Guide by Jeff Sutherland and Ken Schwaber, they describe a daily standup meeting as a 15-minute timeboxed meeting for the development team. The goal is a short check-in so that members of the team understand how it intends to work together as a self-organizing team to accomplish the sprint goal. In the Scrum Guide, the authors mention that there is no correct format. However, they put forth the following questions as an example structure that have inspired countless teams. What did I do yesterday that helped the development team meet the sprint goal? What will I do today
>
> **[1:35](https://www.linkedin.com/learning/agile-software-development-remote-teams-2019/remote-standups?u=76281980&t=95)** to help the development team meet the sprint goal? Do I see any impediment that prevents me or the development team from meeting the sprint goal? At my organization, after experimenting with a variety of formats, we found an asynchronous daily standup to suit our needs in most situations. Every member of our team, developer or not, posts their status update by 10:00 a.m. Eastern Time in two places: a dedicated [[Slack]] channel called Standups and any client-facing Slack channels that they are participating in. This helps our clients stay up to date on our plans and also helps us track overall progress across all of our teams. Since our focus is broader, we adapted the questions. What did I do yesterday? What do I plan on doing today? And what's getting in my way? In addition, some teams also do a more traditional synchronous standup, particularly if there is negotiating that needs to take place about what to work on. By thinking through how your team needs to communicate and effectively work together, you can adapt your standups to accommodate your distributed team.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Scrum]] (3), [[Slack]] (2), [[Agile Development|Agile]] (1)
> **Tools:** slack (2)
> **Ports:** :00 (1)
> **Definitions:** is a  (1)
> **Speakers:** - for (1)

#### [Remote retrospectives](https://www.linkedin.com/learning/agile-software-development-remote-teams-2019/remote-retrospectives?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/agile-software-development-remote-teams-2019/remote-retrospectives?u=76281980&t=1)** - Regular reflection is a critical component of continuous improvement. Meanings that provide a framework to help teams think through improvement opportunities are commonly referred to as retrospectives a term popularized by Norman Kerth in his book Project Retrospectives: A Handbook for Team Reviews from 2001. shame and blame from the conversation with what he calls the prime directive. Regardless of what we discover we must understand, and truly believe that everyone did the best job he or she could given what was known at the time his or her skills and abilities the resources available and the situation at hand. At the end of the book he listed some questions which teams have adapted to facilitate their own discussions.
>
> **[1:10](https://www.linkedin.com/learning/agile-software-development-remote-teams-2019/remote-retrospectives?u=76281980&t=70)** In 2006, Esther Derby and Diana Larsen published the book [[Agile Development|Agile]] Retrospectives: Making Good Teams Great which offered an expanded framework for facilitating retrospective discussions. One, set the stage. Two, gather data. Three, generate insights. Four, decide what to do. And five, close the retrospective. On my team, regular reflection is a core practice among everyone on our team. Every Friday, we have a whole team retrospective as a synchronous video event using [[Zoom]]. We enable the gallery view and take turns answering modified versions of Norman Kerth's questions. When our turn is done we name the person below us in the gallery view and they go next. It's a joy to be able to see team members that I may not have interacted with much that week and listen to them reflect on their week. As stated in Agile Retrospectives group size matters, and conducting a retrospective on a team larger than 10 people can be a challenge. We use some software we built in house to randomly assign members to a group each week. We're also in the habit of conducting quick 15 minute retrospectives after important client meetings or sales calls. And functional groups regularly get together
>
> **[2:43](https://www.linkedin.com/learning/agile-software-development-remote-teams-2019/remote-retrospectives?u=76281980&t=163)** to reflect on how they can improve on a regular schedule. Of course, we augment these synchronous events with asynchronous activity too. Each week, prior to the synchronous meeting we post an asynchronous version in a dedicated [[Slack]] channel. This way, everyone on the team can see everyone's retro and no one feels out of the loop. Similar to stand-ups retrospectives are also copied into client facing channels. And most of our teams also conduct retrospectives synchronously with our clients each week. Reflection also happens daily on an individual level. Each team member keeps a digital journal and posts a link at the end of the day. This practice started out as an experiment that we ran for a month but we've all liked it so much that we've being doing it for years now. I block off time on my calendar to read my teams' journal entries. This helps me spot trends, provide support and proactively solve problems. Communication is a key to project success even more so on a distributed team. By focusing on good comunication and using both synchronous and asynchronous methods it's possible to get the best out of your team even when you're not all in the same room. even when you're not all in the same room.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Agile Development|Agile]] (2), [[Zoom]] (1), [[Slack]] (1)
> **Definitions:** is a  (3)
> **Tools:** slack (1)
> **Analogies:** similar to (1)
> **Speakers:** - regular (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/agile-software-development-remote-teams-2019/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/agile-software-development-remote-teams-2019/next-steps?u=76281980&t=1)** - Now that you've had an introduction to remote working for [[Software Development]] teams, I recommend you check out some of the companies that are luminaries when it comes to operating successfully distributed teams, Buffer, Zapier, Automatic, and Basecamp, formerly known as 37signals. Check out Buffer's blog at open.[buffer.com](https://buffer.com) where they share insights on building a remote and transparent company. Zapier has an e-book called The Ultimate Guide for Remote Work, which we actually use as part of a reference during our own onboarding. Scott Berkun provides a behind the scenes look at Automatic, the company behind [wordpress.com](https://wordpress.com), in his book The Year Without Pants. As you can guess from the title, it's also a pretty entertaining read. REMOTE: [[Microsoft Office|Office]] Not Required is another book worth reading by the founders of 37signals. I've also provided a PDF with links to the research cited throughout the course and some additional resources, specifically for [[Agile Development|agile]] teams. Also, you can check out my own company's blog at [corgibytes.com/blog](https://corgibytes.com/blog), and follow me on [[LinkedIn]] at in/andreamgoulet where I post frequently about my experiences leading a distributed team. You can also check out our community site legacycode.rocks to discuss remote working and code modernization on an agile team. Thanks for watching.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Agile Development|Agile]] (2), [[Software Development]] (1), [[WordPress]] (1), [[Microsoft Office|Office]] (1), [[LinkedIn]] (1)
> **URLs:** [buffer.com](https://buffer.com) (1), [wordpress.com](https://wordpress.com) (1), [corgibytes.com](https://corgibytes.com) (1)
> **Env Vars:** remote (1), pdf (1)
> **Definitions:** known as (1)
> **Speakers:** - now (1)


## Instructor

- [[Andrea Goulet]]

## Resources

- Exercise files available

## Skills Covered

- Agile Software Development

## Path Context

### In [[Succeed as a Remote Software Developer]]
← [[Trello Essential Training]] | **6 of 6**

### In [[Getting Started with Agile Software Development]]
← [[Agile Software Development- Transforming Your Organization]] | **10 of 10**

## Appears In

- [[Succeed as a Remote Software Developer]]
- [[Getting Started with Agile Software Development]]

## Related Courses

_Courses sharing skills:_

- [[Agile Software Development- Dealing with Legacy Code and Technical Debt]] — Agile Software Development
- [[Agile Software Development- Kanban for Developers (2019)]] — Agile Software Development
- [[Agile Software Development- Extreme Programming]] — Agile Software Development
- [[Agile Software Development- Scrum for Developers]] — Agile Software Development

---

[↑ Back to top](#)