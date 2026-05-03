---
type: course
cssclasses:
  - lle-course
slug: interaction-design-flow
url: "https://www.linkedin.com/learning/interaction-design-flow"
duration_minutes: 29
duration: 29m
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C510DAQEwrwNBxVnNEw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1583354233184?e=2147483647&amp;v=beta&amp;t=NDUFZLocl7p1vi0m_G7m578r6jqZdMpqnEOAij4M7Rk"
linkedin_topic: Software Development
learning_paths:
  - '[[Exploring a Career in Interaction Design]]'
prev_courses:
  - '[[Interaction Design- Interface]]'
next_courses:
  - '[[Interaction Design- Design Patterns as Building Blocks]]'
path_nav: '[{"path":"Exploring a Career in Interaction Design","position":7,"total":9,"prev":"Interaction Design- Interface","next":"Interaction Design- Design Patterns as Building Blocks"}]'
path_count: 1
tags:
  - course
  - topic/software-development
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/Interaction%20Design-%20Flow.md)

![Interaction Design: Flow](https://media.licdn.com/dms/image/v2/C510DAQEwrwNBxVnNEw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1583354233184?e=2147483647&amp;v=beta&amp;t=NDUFZLocl7p1vi0m_G7m578r6jqZdMpqnEOAij4M7Rk)

# Interaction Design: Flow

> Explore ways to create and use flow maps: diagrams of the steps users will complete in an experience. Instructor Diane Cronenwett discusses how flow relates to creating great user experiences and outlines the role of technology in designing flow. She demonstrates how diagrams communicate underlying system logic and conditions to produce an effective user experience. Diane covers the ways designing

> [LinkedIn Learning](https://www.linkedin.com/learning/interaction-design-flow) | 29m
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [The power of flow in interaction design](#the-power-of-flow-in-interaction-design)
- [**1. Flow in Interaction Design**](#1-flow-in-interaction-design) (3 videos)
  - [Defining a user's flow](#defining-a-users-flow)
  - [Defining interaction models](#defining-interaction-models)
  - [The role of conditional logic](#the-role-of-conditional-logic)
- [**2. Diagrams As Design Tools**](#2-diagrams-as-design-tools) (4 videos)
  - [Why use diagrams?](#why-use-diagrams)
  - [Diagrams in the design process](#diagrams-in-the-design-process)
  - [Flow and process diagrams](#flow-and-process-diagrams)
  - [Components of a flow diagram](#components-of-a-flow-diagram)
- [**3. Constructing a Flow**](#3-constructing-a-flow) (4 videos)
  - [Creating a flow map](#creating-a-flow-map)
  - [Identifying key tasks and activities](#identifying-key-tasks-and-activities)
  - [Constructing the flow](#constructing-the-flow)
  - [Designing the screens](#designing-the-screens)
- [**Conclusion**](#conclusion) (1 videos)
  - [Mastering flow in UX](#mastering-flow-in-ux)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [The power of flow in interaction design](https://www.linkedin.com/learning/interaction-design-flow/the-power-of-flow-in-interaction-design?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/interaction-design-flow/the-power-of-flow-in-interaction-design?u=76281980&t=0)** - [[User Experience (UX)|User experience]] is more than just interface design. It's about designing processes. To make the invisible visible, we create diagrams to guide our design into an end to end experience flow. Diagrams help us [[Design Systems]] and processes, organize our screens, while facilitating a common understanding of the big picture. Hi, I'm Diane Cronenwett. I'm an experienced UX Designer with a background in designing complex flows. In this course, I'll introduce you to some common diagrams, provide detail into when to use them, and how to construct them to gain a better understanding of this very common UX deliverable. We'll deep dive in a case study examples of user experience and map out the flows with granularity. So please join me in this Interaction Design journey as we delve into the world of [[Diagramming]] complex flows.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[User Experience (UX)|User experience]] (2), [[Design Systems]] (1), [[Diagramming]] (1)
> **CLI Commands:** make (1)
> **Analogies:** picture (1)
> **Speakers:** - user (1)
> **Non-Speech:** (upbeat music) (1)


### 1. Flow in Interaction Design

[↑ Back to Table of Contents](#table-of-contents)

#### [Defining a user's flow](https://www.linkedin.com/learning/interaction-design-flow/defining-a-user-s-flow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/interaction-design-flow/defining-a-user-s-flow?u=76281980&t=0)** - [Instructor] In UX, flow refers to how users will complete steps through the experience. UX designers scope out how flows are interrelated at a high level because you don't want to design everything at once. For example, let's look at the steps involved in paying your bill online. At a high level, you'll log in, pay your bill and receive a confirmation that the bill was paid. When we go a layer deeper, there's more details we have to account for. If you're a new user, you'll have to create an account. If you're a returning user, then you'll have to sign in. If the user forgot their password, they have to go through a separate password recovery flow. To create an optimal flow for users, we'll need to do three things. The first is to understand the customer. The second thing is to benchmark competitive UX experiences and third, derive use cases and scenarios. Delving into understanding the customer means that we need to understand their needs, wants and desires for completing tasks. In a user-centered design process, we engage users and gather insights at the beginning of the project and gather feedback as the design shapes out. If there's a current process or flow, we'll want to model the experience in a flow diagram to understand how the current experience is working and where the issues lie. This helps us get a fuller picture of what the issues are before trying to fix them. Next, we conduct a competitive analysis. Competitive analysis in UX is benchmarking flows of other [[Microsoft Products|products]] and services.
>
> **[1:35](https://www.linkedin.com/learning/interaction-design-flow/defining-a-user-s-flow?u=76281980&t=95)** The goal of a competitive analysis it to look for common paradigms and patterns that users might be familiar with and common activities. Understanding the competitive landscape is crucial in deriving expertise in your product area. It helps us understand why our flows and designs deviate from others and which patterns are canon. After talking to users and reviewing the competitive landscape, we'll want to start defining a set of activities or scenarios. Usually, if you're working on a project team, this is done as a team or between a product manager and a UX designer. This exercise outputs a series of requirements and use cases. I'm using the term use cases informally and what I mean by this is a representation of the business function or process and how the user engages with that function or process. For example, for a bill payment flow, we may want to create a use case that captures the need for the user to enter their credentials to log into the system. That might look something like this. Returning customer needs to enter username and password to access account. When written from the user's point of view, it may say something like as a returning customer, I want to enter a username and password to access my account. Depending on your development process, this might be in the form of user scenarios and stories. For more information, you can search [[LinkedIn]] Learning for videos on user stories. From these use cases, we can start to think about the design and organize the use cases into flows and discreet areas of focus.
>
> **[3:09](https://www.linkedin.com/learning/interaction-design-flow/defining-a-user-s-flow?u=76281980&t=189)** So defining flows requires customer understanding, competitive analysis and defining activities and use cases to develop a vision for the design.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (1), [[LinkedIn]] (1)
> **Analogies:** for example (2), picture (1)
> **Definitions:** refers to (1), is a  (1)
> **Speakers:** - [instructor] (1)

#### [Defining interaction models](https://www.linkedin.com/learning/interaction-design-flow/defining-interaction-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/interaction-design-flow/defining-interaction-models?u=76281980&t=0)** - Defining an interaction model refers to deciding how the user will interact with the experience. In order to create the right design, you'll need to understand the business or technology constraints involved and combine these with user needs. Let's dive into business constraints or sometimes, this is called business rules or business logic. Business rules are business requirements that must be included in the design. For example, if you're working on a product area that's highly regulated, like financial services, your design has to accommodate some regulatory rules. When incorporating these regulatory rules into the design, this might be something as simple as a check box to make sure the user understands what they're agreeing to. Or it might be a complex workflow in which an admin or a supervising entity within a company needs to review the information. Business rules are incorporated into general requirements for the design project. Other input for requirements might be driven by technology. Technology constraints are limitations from the engineering side of the project. A technology constraint might be that your design proposal incorporates information not stored in database or the underlying architecture of the system isn't constructed to support a particular workflow. For example, your design proposal for a user paying their bill requires different options to do this. As an autopay, as a text message or directly on the website. Your tech lead may tell you that there isn't a system in place
>
> **[1:33](https://www.linkedin.com/learning/interaction-design-flow/defining-interaction-models?u=76281980&t=93)** to send text messages and that would take some time to create. In this case, you have a technical constraint around implementing a text messaging system so your design will have to work around the lack of text messages. In addition to business rules and technology inputs, your customers will also be an input. Through [[Interviewing]] and other data from customers, there will also be an input into the user interface flow and general requirements for the project. Aside from these inputs, the project team will also inform product requirements with their own ideas. Sometimes, there are features or experiences no one is asking for but are delightful or helpful. Another consideration when defining your interaction model is thinking about the key principles and goals of your design. For example, if you're designing an experience that requires multiple steps, you'll want to decide if the information is best presented in a wizard-style format, in which you see the information in discreet steps or you may want this to be a single-page experience with interactive states. If your goal is to enhance productivity, you might consider data-intensive views and a layout for users to compare datasets efficiently. Interaction models are also informed by common [[Design Patterns]] and paradigms for your product or service. You'll want to take into consideration how your user will interact with the product experience and work from there to iterate on different approaches. What it comes down to is this, the combination of business, technical and user needs help define your interaction model.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Interviewing]] (1), [[Design Patterns]] (1)
> **Analogies:** for example (3)
> **CLI Commands:** make (1)
> **Definitions:** is called (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - defining (1)

#### [The role of conditional logic](https://www.linkedin.com/learning/interaction-design-flow/the-role-of-conditional-logic?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/interaction-design-flow/the-role-of-conditional-logic?u=76281980&t=0)** - Flows can represent both the idealized [[User Experience (UX)|user experience]] and the current experience. Flows are a standard deliverable for UX designers. Engineers reference the flow to understand how to build the design, so we have to make sure the diagram is easy to understand and the design is accurately represented. In UX, when thinking about flow, we need to take into consideration decisions and conditions. Let's first delve into decisions. Decisions in flow refers to a condition that needs to be met from either the user or the system to determine the next step. Decisions in a diagram are usually represented as a diamond shape, with a question and options for yes and no. Depending on the answer, the user is moved to the next step. Conditions are statements that should be met in order to trigger a process or an action. These can be defined as an if statement. And from a user experience perspective, we use conditions to define the experience we want and refer to them as rules. For example, we can create conditions or rules for encouraging return users and set up a condition like this. If the user signs in for a second time, then show them a little pop-up for a coupon offer. Sometimes, there are multiple conditions to take into consideration for complex experiences. For example, if you're targeting specific customers with a coupon offer, you may want to set up a series of conditions, like if the user is a returning customer and has an average $200 spend per visit and has subscribed
>
> **[1:35](https://www.linkedin.com/learning/interaction-design-flow/the-role-of-conditional-logic?u=76281980&t=95)** to the email newsletter, then, show them an offer when they sign in. If the user doesn't meet these conditions, they'll just sign in a see a regular home page. Each condition could result in a slightly different page in the flow or a different state. The next thing we should be aware of is loops. A loop in a diagram looks like this. There might be some use cases in your flow or design that require a loop. Just make sure it makes sense for it to be there and it's not an oversight. Edit states are a pretty common use case for showing a loop. An example of an edit state is when a user needs to update the settings of their account and can edit those settings any time. When working on a complex project, it's fairly standard to have a lot of conditional states to be aware of, so we just need to take into consideration the role of conditions and how those impact the design.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[User Experience (UX)|User experience]] (2)
> **Definitions:** refers to (1), defined as (1), is a  (1)
> **CLI Commands:** make (2)
> **Analogies:** for example (2)
> **Warnings:** be aware (2)
> **Prerequisites:** set up (2)
> **Speakers:** - flows (1)


### 2. Diagrams As Design Tools

[↑ Back to Table of Contents](#table-of-contents)

#### [Why use diagrams?](https://www.linkedin.com/learning/interaction-design-flow/why-use-diagrams?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/interaction-design-flow/why-use-diagrams?u=76281980&t=0)** - We use diagrams in UX to help visualize and communicate user interaction to project stakeholders. Diagrams used to communicate [[User Experience (UX)|user experience]] are not technical, and we don't need to go deep into the technical aspects of the project. In user experience, we organize our diagrams around the user and how they interact with the system, and are used for communicating user experience at various points of the design process. When identifying a design problem, we can create diagrams that reflect the current user experience and diagrams for the future state. The reason we want to diagram the current experience is to align the project team's understanding of the problem. When working cross-functionally with engineers, product managers, and other designers, sometimes diagrams are the easiest way to facilitate a shared understanding. It helps everyone get on the same page to see the problems easier. Diagrams are also used for future states. When deciding on a design direction, it's fairly common to create a flow diagram highlighting the new flow experience and the ideal path for the user. There are five typical diagrams to help facilitate understanding. The first one is flow maps. Flow maps show a sequential set of steps at a high level. The next one is flow diagrams or process diagrams. Flow diagrams are useful for highlighting various conditional states in a sequential flow. Then we have state diagrams. State diagrams work well for experiences that don't have a linear sequential flow
>
> **[1:35](https://www.linkedin.com/learning/interaction-design-flow/why-use-diagrams?u=76281980&t=95)** but do have different states based on user actions. Next are workflow diagrams. These diagrams are similar to a flow diagram, but the focus is on the user's workflow and highlighting various tools they work with. And finally task flows. Task flows highlight sequential steps but don't have decision points or conditional states. There are some variances to these diagrams, and sometimes the names of the diagrams are used interchangeably depending on the organization. There are different ways to convey how users experience a flow and we can approach [[Diagramming]] that in lots of different ways. When deciding to create a diagram, there are a few things you'll want to take into account. First, understand what you want to communicate. You'll want to decide what is essential for others to understand your train of thought. Ask yourself if you're trying to highlight a problem, organize insights, or show a solution. And also, you'll want to decide on the right diagram. There are common diagrams that are used in UX, but don't feel obligated to follow them to the letter. If you need to create a different diagram that illustrates the problem in a unique way, feel free to explore that. Use diagrams to effectively communicate the user experience at any level.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[User Experience (UX)|User experience]] (5), [[Diagramming]] (1)
> **Analogies:** similar to (1)
> **Speakers:** - we (1)

#### [Diagrams in the design process](https://www.linkedin.com/learning/interaction-design-flow/diagrams-in-the-design-process?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/interaction-design-flow/diagrams-in-the-design-process?u=76281980&t=0)** - In the process of creating design, it's sometimes helpful to create a flow diagram, or map, to better understand the scope of the experience. Depending on your design, you may need to map out different screens for different actions taken, which helps to visualize pages and states to design for in the future state. Let's say that we've been given some requirements for a campaign tool that we have to design against. The requirements are for the marketing team who is our primary user. This tool needs to enable them to create a campaign, schedule a campaign for different dates, view current campaigns, edit campaigns, delete campaigns, and accommodate for different messaging states. With these requirements, there are specific conditions and actions that we can diagram out without knowing exactly what the page will look like. Here's an example of how we might create a diagram that captures the requirements and key interactions. In this flow diagram, I am seeing that there are specific pages and states that I need to account for in the design. In this case, the boxes are a stand in for different screens or states the user will encounter. The two main decisions in this design are whether or not the campaign is new, and if the campaign is active. These two questions create a series of conditional states which we can then start to form some ideas on how to wireframe them. When wireframing this experience, this flow diagram can act as a guide to make sure each page or state has been captured.
>
> **[1:36](https://www.linkedin.com/learning/interaction-design-flow/diagrams-in-the-design-process?u=76281980&t=96)** In this example, I created a wireframe for the campaign list referenced in the flow. The campaign detail page can be accessed from viewing the edit link. We would have wireframes or mock-ups for each of the boxes in the flow diagram. Sometimes there are things that you end up capturing in the design and layout phase that you may have forgotten in the diagram. Just accurately update the diagram accordingly. To make sure it's accurate, you'll want to run your diagram by an engineer or a technical person on your team. Since engineers have to build the design, it's critical they review it. Not every project requires a flow diagram, but it's always a good idea to include one if the project has a lot of conditional logic or states to keep track of. Regardless, if you're trying to visualize the full scope of the experience, developing a flow diagram can help make sure you don't miss something in the design.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3)
> **Speakers:** - in (1)

#### [Flow and process diagrams](https://www.linkedin.com/learning/interaction-design-flow/flow-and-process-diagrams?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/interaction-design-flow/flow-and-process-diagrams?u=76281980&t=1)** - UX projects differ in scope and complexity. And the diagram you use will depend on the project and what you want to communicate. Diagrams that highlight how users sequentially move through the product experience can be at a higher level to show an overview, or at a lower level with more details. The diagrams we use often have terminology that is used interchangeably. For projects that have a longer journey or have a lot of steps, flow maps are useful to tell the story of the user from a high level. Flow maps are particularly helpful when there are a lot of different systems to interact with. These maps condense details, and are less strict in terms of the information shown. They're useful for conveying big picture items to understand how the overall system works together. Flow diagrams are used for experiences with complex conditional states with a sequential flow. While a more traditional approach is to use boxes and arrows to show directional flow, this idea can be adapted for your project. Sometimes a diagram is clearer when you show more than just a box. You can make these into miniature wireframes, in which you don't need to show a lot of detail, but just enough to show some page-level elements. If you need to show each wireframe or screen completely, you can also create flow diagrams that have the fully-rendered screens represented. Oftentimes mobile flows are shown with fully-rendered screens in a flow diagram. Task flows are also sequential in showing a flow, but can be less specific in the details
>
> **[1:34](https://www.linkedin.com/learning/interaction-design-flow/flow-and-process-diagrams?u=76281980&t=94)** and show the high-level steps with no decision points. They're useful in guiding and understanding of a task and the steps involved, but don't go into the details and specifics. For interactions that don't have a sequential flow, but still require a mapping of interaction, we can use a state diagram. State diagrams help visualize various states of interactivity. When you take an experience like booking travel, there's an overall flow of finding a destination and booking a hotel or renting a car. But there's also a lot of interactive states around just the calendar interaction. State diagrams focus on the interactive states of the experience. Workflow diagrams are fairly similar to a standard flow diagram, but their focus is on the user's workflow, which can typically involve a series of processes and tools. To help indicate different stages, using a swimlane format works well to distinguish between phases. The lanes help distinguish a process or a tool, and it can go either up or down or side-to-side. Different diagrams work best for different stages of the design process. Think about the requirements for your project, the level of detail in the story you want to tell, and choose the one that works best for you.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Analogies:** picture (1)
> **Speakers:** - ux (1)

#### [Components of a flow diagram](https://www.linkedin.com/learning/interaction-design-flow/components-of-a-flow-diagram?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/interaction-design-flow/components-of-a-flow-diagram?u=76281980&t=0)** - Diagrams can be created in design drawing tools like Sketch, Photoshop, or Illustrator. They can also be created in [[Diagramming]] and [[Prototyping]] tools like Axure or Lucidchart. It depends on your workflow and which tool works for you. I use Sketch, because I spend most of my time in Sketch, but it's a personal preference. If you're working on a complex flow, you'll want to have a key to interpret the symbols, and those usually go on the bottom corner of the diagram. When constructing a diagram, you'll want to distinguish if something is new, modified, or existing. If you're working on a complex flow, your diagram might have a mix of existing pages that don't need updating and new pages. If there isn't a distinction, engineers might accidentally remove pages thinking they aren't required, or modify pages that you didn't intend to be modified. Single pages are usually represented as a rectangle with a short description inside. Modified are pages that require a change. Usually we distinguished it from a new page by making it a different color or adding some symbol. Existing are pages in the flow that we aren't updating but still need to be represented in the diagram so the flow is accurate. We can also represent this distinction through color. We also want to represent all entry points into the flow. We can do that with a symbol or with words to show how the user enters the flow. Flow is represented with arrows between pages. Sometimes arrows use curvy lines or straight lines.
>
> **[1:35](https://www.linkedin.com/learning/interaction-design-flow/components-of-a-flow-diagram?u=76281980&t=95)** This is a stylistic choice, but straight lines can be easier to read to follow the flow. Decisions are represented as a diamond shape, and usually with a yes/no question mark. I recommend that if possible, try to keep your yeses and nos going in the same direction. For example, if you establish yes to go down, try to keep it consistently going down across the flow if you have multiple decision points. It might make the diagram bigger, but it also establishes a consistent expectation for the reader. To represent subflows, we can use a symbol of multiple pages. For example, if we want to show a password recovery flow that isn't a flow we need to define, we can just use it as a shorthand. Encasing special flows within dotted lines is also common to highlight that the flow is secondary. We can also show processes using dotted lines encasing the special flow and this can also be used to show a black box system. For example, if there's a verification process that runs in the back end, we may want to show this as a process and highlight the possible conditions from the results. If you need to represent emails or text messages or any other specific channel, you can add a symbol in the bottom right corner to show that. And those are the common symbols and representations of components in standard flow diagrams.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Diagramming]] (1), [[Prototyping]] (1)
> **Analogies:** for example (3)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - diagrams (1)


### 3. Constructing a Flow

[↑ Back to Table of Contents](#table-of-contents)

#### [Creating a flow map](https://www.linkedin.com/learning/interaction-design-flow/creating-a-flow-map?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/interaction-design-flow/creating-a-flow-map?u=76281980&t=0)** - When creating a flow map, the goal is to understand and communicate the big picture of the experience. Let's take, for example, that we're looking at the experience of a college student enrolling into a university. Flow maps don't have to have all the details. Our goal is to get a sense of what's next. We're telling the story of the experience at a high level, and we'll eventually get to those details, but it's not required at this stage. I'll walk you through this flow map, showing each step in the process at a high level. So first, students can become aware of the university through either an event, through social media channels, or by going directly to the website itself. Depending on how they've been made aware of the school, we'll likely have different pages for them to track their entry. Now for the enrollment. I'm representing this as its own set of pages, as this will be a multi-step application for each particular program. After the student has submitted the application and created a profile at the university, we have a decision point here. Whether the student is admitted to the university, or not. If the student is not admitted, we will notify them via email. If they are admitted, we'll send them a different email notifying them that they need to attend an orientation and register for classes. This student experience from recruitment to registration gives us a high-level understanding of the overall process. I have enough detail to get a better understanding of key decision points,
>
> **[1:33](https://www.linkedin.com/learning/interaction-design-flow/creating-a-flow-map?u=76281980&t=93)** but I didn't go into too much detail in each area, because we can create a different diagram that captures the more granular aspects of the flow. Flow maps help you see a larger picture and capture different stages of the experience from the user's perspective while keeping the steps in mind.

> [!info]- Semantic Content
>
> **Analogies:** picture (2), for example (1)
> **Speakers:** - when (1)

#### [Identifying key tasks and activities](https://www.linkedin.com/learning/interaction-design-flow/identifying-key-tasks-and-activities?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/interaction-design-flow/identifying-key-tasks-and-activities?u=76281980&t=0)** - After creating a flow map or a larger view of the experience, we can use that to help us narrow down tasks and more granular flows. Using the example of a student applying for university, let's take a look at the enrollment process. When we break this area out, we can define the personas involved and what they need from the experience. During enrollment, we captured some key activities that the student has to complete. First, they have to complete the application and wait for an admissions email. Key personas will interact with the system in different ways. In our scenario, we have admissions staff, who reviews the checklist to make sure all materials have been included as a first pass; a faculty department member, who represents the department the student is applying to and needs to assess the student for the major; and a student reviewer, who represents the student body and the campus culture. The admissions staff won't be reading the essays or scoring the student. They need to verify that the student met the basic criteria for having all the materials in the file, like test scores and letters of recommendation. The admissions staff is the first to review the application and it doesn't get handed off until they change the status for review. We can distill the admissions staff experience into a very specific set of steps. Based on their work flow, we can visualize the steps in this format. They will receive an email notifying them of new applicants. From the email, they can view the applicants in a list and drill into each applicant record
>
> **[1:34](https://www.linkedin.com/learning/interaction-design-flow/identifying-key-tasks-and-activities?u=76281980&t=94)** to double-check that the applicant submitted the correct materials. Let's look at the faculty members' flow. They'll need to view applications, read essays, letters of recommendation, and score the application. To capture the key steps in their flow, they may receive an email informing them that they have applications to review and the email will drive them into the application portal to review the student's profile and their essay. Next, they'll need to score the application based on the university's specific criteria for acceptance. Lastly, the student reviewer is given a limited view, as they will only need access to read the essay and score the applicant. The steps in the flow will be similar, but will represent the flow in this way. By having a good understanding of activities, tasks, and personas, we can design high-level flows to aid us in understanding how the system will be used.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Speakers:** - after (1)

#### [Constructing the flow](https://www.linkedin.com/learning/interaction-design-flow/constructing-the-flow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/interaction-design-flow/constructing-the-flow?u=76281980&t=0)** - A flow diagram describes a sequence of events or processes that the user will encounter as their experience. When constructing a flow diagram at the lower level, we want to make sure we're mapping it to screens. In our prior example, the student experience of enrolling for college, let's focus on the student's flow of getting accepted and what comes next. We'll start this end-to-end flow from the school homepage where the student will apply. The next step is to fill out a three-page application in which the student has to provide their information and add their personal essay. The application should have the ability to be saved for later and to move back any number of steps, so we want to include this in the flow. Once the student has been accepted into the school, the first activity is to send transcripts and set up tuition payment. These preliminary activities are required before the student can register for classes, so we'll add a decision point to make sure these activities have been completed before moving to the next step. Next, after orientation has been completed, the student is assigned an advisor, and they can fill out the degree planner to map out the classes needed for the degree by semester. This part of the flow includes the course list and the ability to register for classes. For classes that require prerequisites, we want to have a decision point to check to see if they fulfilled them. If not, we can allow them to sign up. All of these updates are sent to the student via email, and also updated in the portal,
>
> **[1:34](https://www.linkedin.com/learning/interaction-design-flow/constructing-the-flow?u=76281980&t=94)** which we want to show in the flow diagram. Flow diagrams give us a good understanding of all the different screens we need to design for, and to help us think through some cases that we may have forgotten.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Prerequisites:** set up (1)
> **Speakers:** - a (1)

#### [Designing the screens](https://www.linkedin.com/learning/interaction-design-flow/designing-the-screens?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/interaction-design-flow/designing-the-screens?u=76281980&t=0)** - Once we've created our flow diagrams, we have a better understanding which screens we need to design for. Let's take a look at the flow diagram for the student experience for enrolling in Roux Academy. If we're using the flow diagram as a guide, the experience starts with the homepage as an entry point. I've mocked up the homepage here, and this is the Apply Now call to action which leads to the application flow. I've also mocked up each of these pages of the signup flow, and you can see the button actions are also represented in the flow diagram. Next, after the student submits the application, there's a waiting period until they receive an email, or letter in the mail. In this case, if the student was accepted, we send an email with the link to their student portal. The student can enter the portal, and there's a checklist of items they will need to complete before they can enroll in their classes. They need to sign up for orientation, send their transcripts, and set up their tuition payment. We've represented this in the flow diagram, and this is the accompanying screen. When all of the screens have been created, it's a good idea to prototype the flow. You can do this in Invision, or Axure, or any other [[Prototyping]] tool by creating a simple click flow to make sure all the steps are in order, and the flow makes sense. Once the basic flow has been created, you can go into more detail in some of the screen states. You can also update the basic flow diagram with the full screens to better highlight the flow, if you want to. Ultimately, it's up to you on how you want to communicate the flow.
>
> **[1:33](https://www.linkedin.com/learning/interaction-design-flow/designing-the-screens?u=76281980&t=93)** Flow diagrams are a good way to make sure you've organized your design properly, and now you can start designing your screens.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Prototyping]] (1)
> **CLI Commands:** make (2)
> **Prerequisites:** set up (1)
> **Speakers:** - once (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Mastering flow in UX](https://www.linkedin.com/learning/interaction-design-flow/mastering-flow-in-ux?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/interaction-design-flow/mastering-flow-in-ux?u=76281980&t=0)** - Thanks for watching. I hope you enjoyed this course and took away some information to help you construct an end to end flow diagram for your next UX project. Whether your project is simple or complex, having a solid understanding of conditional states, how pages flow together, and how to diagram these aspects with clarity, is essential for success in your role as a UX designer. If you have follow-up questions, feel free to post them on the Q&A on this course's page. I look forward to reading your thoughts and questions. You can check out my other [[LinkedIn]] Learning interaction design courses on [[Prototyping]] and structure for more relevant material. Also, feel free to follow me on LinkedIn or Twitter. Thanks again and see you in the next course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (2), [[Prototyping]] (1)
> **Cross-References:** in the next (1)
> **Speakers:** - thanks (1)


## Instructor

- [[Diane Cronenwett]]

## Path Context

### In [[Exploring a Career in Interaction Design]]
← [[Interaction Design- Interface]] | **7 of 9** | [[Interaction Design- Design Patterns as Building Blocks]] →

## Appears In

- [[Exploring a Career in Interaction Design]]

---

[↑ Back to top](#)