---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: software-design-from-requirements-to-release
url: "https://www.linkedin.com/learning/software-design-from-requirements-to-release"
duration_minutes: 144
duration: 2h 24m
level: Advanced
updated: 2/28/2025
learners: 79197
skills:
  - Software Development Life Cycle (SDLC)
  - Software Design
exercise_files: true
github: "https://github.com/LinkedInLearning/Software-Design-Requirements-Release-2825344"
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQEv-kwYOt-yCQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1588091598778?e=2147483647&amp;v=beta&amp;t=bqyw1b48o_PeTvl5aoFowx2362vr0oNguoUtSmTWM6E"
linkedin_topic: DevOps
learning_paths:
  - '[[Essential New Skills in Software Engineering]]'
prev_courses:
  - '[[GitHub Dependabot- Dependency Updates]]'
path_nav: '[{"path":"Essential New Skills in Software Engineering","position":4,"total":4,"prev":"GitHub Dependabot- Dependency Updates","next":null}]'
path_count: 1
tags:
  - course
  - topic/devops
  - topic/software-development
  - skill/software-development-life-cycle-sdlc
  - skill/software-design
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/DevOps/Software%20Design-%20From%20Requirements%20to%20Release.md)

![Software Design: From Requirements to Release](https://media.licdn.com/dms/image/v2/C4E0DAQEv-kwYOt-yCQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1588091598778?e=2147483647&amp;v=beta&amp;t=bqyw1b48o_PeTvl5aoFowx2362vr0oNguoUtSmTWM6E)

# Software Design: From Requirements to Release

> Follow along with the full life-cycle implementation of a software project. This course takes you from requirements development to modeling, design, coding, and testing. It features a small-scale web application project that realistically depicts the workflow and challenges of a typical software development project. Instructor Neelam Dwivedi brings together the most important concepts, tools, and 

> [LinkedIn Learning](https://www.linkedin.com/learning/software-design-from-requirements-to-release) | 2h 24m | Advanced | 79K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (4 videos)
  - [Going from requirements to release](#going-from-requirements-to-release)
  - [What you should know](#what-you-should-know)
  - [Case study overview](#case-study-overview)
  - [Using the GitHub repo](#using-the-github-repo)
- [**1. Sprint 1: Project Kickoff**](#1-sprint-1-project-kickoff) (9 videos)
  - [Define problem and vision statements](#define-problem-and-vision-statements)
  - [Elicit and specify requirements](#elicit-and-specify-requirements)
  - [Requirement validation](#requirement-validation)
  - [Technology validation](#technology-validation)
  - [Proof of concept (POC) setup](#proof-of-concept-poc-setup)
  - [POC implementation](#poc-implementation)
  - [POC deployment](#poc-deployment)
  - [Challenge: From dev to deploy](#challenge-from-dev-to-deploy)
  - [Solution: From dev to deploy](#solution-from-dev-to-deploy)
- [**2. Sprint 2: Beta**](#2-sprint-2-beta) (6 videos)
  - [Prepare sprint backlog](#prepare-sprint-backlog)
  - [Build models](#build-models)
  - [Build code](#build-code)
  - [Deliver and deploy](#deliver-and-deploy)
  - [Challenge](#challenge)
  - [Solution](#solution)
- [**3. Sprint 3: Release 1.0**](#3-sprint-3-release-10) (6 videos)
  - [Prepare sprint backlog](#prepare-sprint-backlog)
  - [Implement 'included' use case](#implement-included-use-case)
  - [Final release](#final-release)
  - [Refactoring](#refactoring)
  - [Challenge](#challenge)
  - [Solution](#solution)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Going from requirements to release](https://www.linkedin.com/learning/software-design-from-requirements-to-release/going-from-requirements-to-release?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-design-from-requirements-to-release/going-from-requirements-to-release?u=76281980&t=0)** - [Instructor] [[Software Development]] requires many skills to deliver a product that meets user needs and sponsor's expectations. And there is nothing better than actually working on a project that offers a chance to learn and apply all these skills. In this course we will do just that, learn and apply the skills required to take a product idea from requirements to its release. In a simulated [[Capstone]] project, we will adopt engine best practices and go from analyzing requirements to releasing several versions of a product while creating development artifacts such as markups and models along the way. In a fictional-case-studies setting, we will have a development and production environment connected to a simple [[DevOps]] tool chain starting from local host in dev environment to [[Git]] to [[Jenkins]] to production servers on AWS Cloud. Join me in this course to experience the process of taking a product from requirements to its release.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Software Development]] (1), [[Capstone]] (1), [[DevOps]] (1), [[Git]] (1), [[Jenkins]] (1)
> **CLI Commands:** git (1), aws (1)
> **Env Vars:** aws (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [What you should know](https://www.linkedin.com/learning/software-design-from-requirements-to-release/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-design-from-requirements-to-release/what-you-should-know?u=76281980&t=0)** - [Instructor] There are many skills that come together in this course, much like in any real-life [[Software Development]] project. To start with, the project requires some understanding of web-based [[Application Development]] using [[Java]] and Apache Tomcat. We will use [[Java Database Connectivity (JDBC)|JDBC]] to connect to [[MySQL]] and write some simple [[SQL]] queries to perform database-related operations. From development methodology point of view it will be good if you have experience with [[Agile Development|agile]] methodology and some [[Scrum]] techniques such as writing user stories and creating story maps. Alternatively, if you are familiar with use case-based approach, that will also work. I will extensively use UML models, specifically sequence diagrams, class diagrams, package diagrams, and deployment diagrams. Finally, to simulate a [[DevOps]] environment, we will use a toolchain comprising [[GitHub]] for source code management, [[Jenkins]] for building and deploying, and AWS Cloud with production web server on an [[Amazon EC2|EC2]] instance, and database server on IDS. It is likely that you may not know all these pieces but I would encourage you to explore the course, identify any gaps that you may find, and plug those gaps by learning through many courses available on these topics in [[LinkedIn]] Learning library. I hope you enjoy working on this project with me.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Software Development]] (1), [[Application Development]] (1), [[Java]] (1), [[Java Database Connectivity (JDBC)|Jdbc]] (1), [[MySQL]] (1)
> **Env Vars:** jdbc (1), sql (1), uml (1), aws (1), ec2 (1)
> **CLI Commands:** apache (1), mysql (1), aws (1), find (1)
> **Tools:** github (1)
> **Exercise Files:** source code (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Case study overview](https://www.linkedin.com/learning/software-design-from-requirements-to-release/case-study-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-design-from-requirements-to-release/case-study-overview?u=76281980&t=0)** - [Instructor] In this course, we are going to work through a case study that involves two fictitious companies, H+ Sport and Red30 Tech. Red30 Tech is a [[Software Development]] firm that is going to build a software for H+ Sport. H+ Sport offers health-related [[Microsoft Products|products]] and services. One of its services offers diet consulting to its customers through a panel of professional health coaches. H+ customers can register for this service and become H+ members. H+ then connects each member to a coach who then becomes the member's diet consultant. All members need to maintain a daily diet log in a paper notebook and their coaches then look at members' diet logs to make recommendations as needed. However, the coaches often feel constrained by paper-based diet logs as they are hard to analyze and to find nutritional trends in the data. Also, members often log incomplete data and whatever data they do log lacks any information about the nutrients and ingredients in their food items. To this purpose, H+ Sport has partnered with Red30 to build an application for members and coaches to track their diets and perform useful analysis. The current scenario is that the team from Red30 assigned to H+ project has met with some coaches and members to get an initial understanding of requirements. To confirm their understanding, the project team
>
> **[1:37](https://www.linkedin.com/learning/software-design-from-requirements-to-release/case-study-overview?u=76281980&t=97)** is preparing for its first workshop with all key stakeholders from H+. The purpose is to present the team's understanding of the project goals and jointly come up with a product vision statement that clearly articulates what H+ aspires for.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Software Development]] (1), [[Microsoft Products|Products]] (1)
> **CLI Commands:** make (1), find (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Using the GitHub repo](https://www.linkedin.com/learning/software-design-from-requirements-to-release/using-the-github-repo?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/software-design-from-requirements-to-release/using-the-github-repo?u=76281980&t=1)** - [Instructor] There are two sets of references that I have provided in this course. First set has the code, and the second set has development artifacts such as UML models and UI mock-ups. Both are available in [[Git]] repo. Let us first look at the code. The Git repo for this project is set up so that whichever lesson you go to, you can find its corresponding code in one of the branches. For example, when you are reviewing the seventh lesson in chapter two, you can go to 02-07b. The lesson ends with the code being check in to 02-07b. In some cases you will find that there is no b, or beginning branch, and only e, that is end branch, and that is because I have simply walked through the code without making any changes. I have created these branches so that you can see the code going through various stages. You will find me working off of master branch in some cases, especially when I'm pushing the code to production, and that is because I have set up [[Jenkins]] to pull the code from master. In some cases I have also demonstrated committing the code to one of the lesson branches locally, but then I have merged the changes to master before pushing them to production. These scenarios demonstrate various ways in which you may manage your code. The other development artifact has UML models and is available here, at the root, in this PDF.
>
> **[1:36](https://www.linkedin.com/learning/software-design-from-requirements-to-release/using-the-github-repo?u=76281980&t=96)** This PDF is structured so that you can refer to various diagrams shown in the video using the lesson name. For example, you may find the use case diagram discussed in lesson titled Elicit and Specify Requirements in the chapter with the same name.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Git]] (2), [[Jenkins]] (1)
> **CLI Commands:** find (4), git (2)
> **Env Vars:** uml (2), pdf (2)
> **Analogies:** for example (2), such as (1)
> **UI Navigation:** go to (2)
> **Prerequisites:** set up (2)
> **Speakers:** - [instructor] (1)


### 1. Sprint 1: Project Kickoff

[↑ Back to Table of Contents](#table-of-contents)

#### [Define problem and vision statements](https://www.linkedin.com/learning/software-design-from-requirements-to-release/define-problem-and-vision-statements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-design-from-requirements-to-release/define-problem-and-vision-statements?u=76281980&t=0)** - [Instructor] Starting any project requires understanding key business requirements, articulating a vision and defining the project scope. The picture here shows a linear waterfall like flow from requirements to scope, but that is not what it means. The key message in this simple diagram is two folds. One, that business requirement drives the product vision which then defines the project scope. It should never be the other way around. We should make sure that we are trying to solve a clearly defined business problem. We should never be in a situation where we have a solution in a product that is looking for the business problem to solve. And two, as our product gets built up and evolves over time, we should keep checking that it aligns with the business requirements. Yes, the business requirements will change and so will the product, but they should never go out of sync. Keeping these two ideas in mind will help us build the right product. So fist, meet up with your stakeholders and understand what they're looking for and why. These meetings can be formal or informal, depending on the culture and norms of your and your customers organization. It is also critical to understand the industry your stakeholders are in. Working with a bank is very different from, say, working with a restaurant chain or a media and entertainment company. The more you understand their domain,
>
> **[1:32](https://www.linkedin.com/learning/software-design-from-requirements-to-release/define-problem-and-vision-statements?u=76281980&t=92)** the better you understand their needs, and higher are the chances of your success. So, as you meet with the stakeholders, get your best domain experts in these meetings to ask the right questions. Also, this is a good time to start mapping your stakeholders into groups. Each group brings a different perspective and categorizing them helps organize their requirements. One simple technique is to draw a stakeholder map. You may draw it in the form of a detailed table or just a simple Venn diagram as shown here. In our case study, we have members for whom the application is being developed, there are coaches who use the data entered by these members and we have the current IT team that is going to support and manage the product once it is built up and launched. All these groups are part of H+ Sport. We need to identify representatives from these groups to be part of the project team. The project team consists of the development team from Red30 and representatives from all the other key stakeholder groups. Finally, there are external users who are potential members that H+ Sport wants to attract by offering them some simple, but useful features on its website. Let us see some examples of how two of these groups express their needs from their perspectives. Coaches say that diet logs in their current form are often incomplete,
>
> **[3:06](https://www.linkedin.com/learning/software-design-from-requirements-to-release/define-problem-and-vision-statements?u=76281980&t=186)** prone to errors and difficult to analyze. Members say that these diet logs are hard to maintain and do not offer much value. Both refer to diet logs from different perspectives. Combining all these perspectives helps us identify the core business requirements which then help us arrive at a problem statement. Here is how I have articulated the problem statement in this case study. I have used the Open UP template which is just a matter of choice. Such templates help us ensure that we are not missing any critical aspect of the problem. The statement captures the problem, that is basically the paper based diet logs, it identifies who it affects, that is coaches and members. What is its impact, which is coaches not able to analyze the data and members not getting the value they expect. So, what should a successful solution look like? Well, it should make it easier for members to log their data and for coaches to analyze their data. This is our problem statement. From here, we can now arrive at the product vision. Once again, I have used the Open UP template. Here, I identify the target user of the product, that is members and coaches, who want a diet tracking application that gives them intuitive and insightful ways to analyze nutrition in their diets. Notice that I have given a name to our product, Red30, that we are going to build.
>
> **[4:38](https://www.linkedin.com/learning/software-design-from-requirements-to-release/define-problem-and-vision-statements?u=76281980&t=278)** Also, in this statement, it is good to identify how your product will be different from whatever is available in the market. In this example, H+ Sport doesn't want to use any other product in the market because it wants total control over its customer data.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Exercise Files:** template (2)
> **Definitions:** is a  (1)
> **Analogies:** picture (1)
> **Speakers:** - [instructor] (1)

#### [Elicit and specify requirements](https://www.linkedin.com/learning/software-design-from-requirements-to-release/elicit-and-specify-requirements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-design-from-requirements-to-release/elicit-and-specify-requirements?u=76281980&t=0)** - [narrator] Once you have your product vision, you are ready to start working on detailed requirements. You can use any of the techniques such as interviews, workshops, focus groups, surveys, and several others. If you're interested, you can learn about these techniques in my other course on developing effective requirements. In this case study, let us say we decide on first conducting individual interviews and then bringing all key stakeholders together in a workshop. Interviews give us individual perspectives and needs and workshop help us collectively define the scope, prioritize requirements and bring everyone onto the same page. Both these techniques require some preparation. For interviews, we need to first identify the roles and for that our stakeholder map will come handy. From there we will then identify who specifically we want to interview. Sometimes these decisions are fairly easy, but in large organizations this may require some asking around, some observations, a study of the organization structure, or a mix of all these things. You could also use what is called as a Snowballing Technique. In which you start with one user and in the course of the interview, you ask the names of those who can give you more information that you may need. Whichever way you do it, it is important that you cover all the roles for your product. The next step is to figure out what you want
>
> **[1:35](https://www.linkedin.com/learning/software-design-from-requirements-to-release/elicit-and-specify-requirements?u=76281980&t=95)** to ask in these interviews. At a high level, write down some key questions you want to ask for each role. You could group these questions into categories for example, how they are currently doing their activities, what challenges they face, and any suggestions they may have. This framework can help give some structure to your interviews. As you compile your interview findings, an initial set of system requirements will begin to emerge. For example here, Red30 shall search and compare various food [[Microsoft Products|products]]. It should allow members to record and view their daily diet logs, and it should allow coaches to track and analyze them. When you talk to the IT team representatives, they express the need to track the usage of various application features. During these discussions, the coaches also tell you that they want their members to use the data available from the US Department of Agriculture, that is USDA. USDA is a government agency that offers food products related data, and we are going to take a closer look at it later in this course. Some non functional requirements will also emerge. For example, that system response should be fast and that the application should be easy to learn. Next step, translate all these requirements into user needs and features, and group them together
>
> **[3:09](https://www.linkedin.com/learning/software-design-from-requirements-to-release/elicit-and-specify-requirements?u=76281980&t=189)** so that you can begin to see some structure. For example, one of the most basic needs is to look up a food product. This translates to search and display feature. Next need is to compare the nutritional values of food products in terms of their nutrients and their ingredients. Another need is to maintain dialogues. For that the product should have the feature to allow the user to log in, then the user can record a meal in terms of what they ate, quantity, date and time. The member should also be able to view the history of dialogues. For more advanced functionality, a member should be able to maintain his or her health profile based on which the system may provide some diet recommendations. Finally, the system should give a feature to track and analyze a members diet logs. It should also give some analytics on the feature usage of the product. Looking at all these requirements together gives us broadly three themes. One theme focuses on food product data lookup, and other theme focuses on recording diet logs, and the third theme is analytics, which will use all the data generated in previous two themes. You can also see that there is some dependency among them. The first theme of looking up products has to be in place before users can record their meals, and both lookup and recording meals have to be in place
>
> **[4:45](https://www.linkedin.com/learning/software-design-from-requirements-to-release/elicit-and-specify-requirements?u=76281980&t=285)** before we can do any analytics. At this point, we are ready to shift from a system oriented view of functional requirements to a user oriented view of use cases and user stories. This use case diagram shows different types of users in a sort of inheritance hierarchy. A user, which represents everyone, can search and compare food products shown as two use cases. Both these use cases need to use the data from the external data source from USDA. Then there are registered users as members, coaches and Red30 IDT members such as admin, they must log in to perform any of these use cases. All of them can record meals, view meal history, track nutrients, and create health profiles. Coaches can additionally analyze member diet logs and Red30 admin can manage user accounts to analyze their product feature usage.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (5)
> **Analogies:** for example (4), such as (2)
> **Env Vars:** usda (3), idt (1)
> **Definitions:** is called (1), is a  (1)
> **Cross-References:** later in (1)
> **Speakers:** - [narrator] (1)

#### [Requirement validation](https://www.linkedin.com/learning/software-design-from-requirements-to-release/requirement-validation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-design-from-requirements-to-release/requirement-validation?u=76281980&t=0)** - [Instructor] Requirement analysis needs system functionalities specified in some form. Either use cases or user stories. Analyzing user stories, helps identify conditions of satisfaction or acceptance criteria for the functionality, and analyzing use case specifications helps us identify domain classes, their attributes and associations. This gives us domain diagrams that are structural representation of our system in terms of, key entities and their attributes. These entities most often translate into, design classes and database tables. From the use case diagrams that we created, let me pick one which I will use just as an example here. One of the simplest ones here is the search food [[Microsoft Products|products]] use case. Let us look at its user story first. Following the standard user story format, we can write it as, as a user, I want to search for a food product by name, so that I can see its nutritional value. What this means is that, not only we need to do a product search but we also need to show its nutrients. And here is the use case specification for such use case. The primary actor is any user here and the secondary actor, is the database to be used for searching. For now, we are thinking of using the database from USDA. The precondition is that, user should be able to access the web application over the internet.
>
> **[1:35](https://www.linkedin.com/learning/software-design-from-requirements-to-release/requirement-validation?u=76281980&t=95)** In basic flow, user chooses the search option and Red30 asks to enter a search string. Once user enters the search string, Red30 displays the product names that have that search string in their names and also the nutrients and their quantities in them. The alternate flow could be that Red30 doesn't find anything with matching names and accordingly displays a message. Writing the use case in this way, helps us see the flow of interaction between the user and the system. We can now move on to creating a domain diagram in which we identify, key nouns, their properties, and possible relationships among them. As an example, if I take this excerpt from the use case, I find food products and nutrients as two key nouns that can become possible entities in our system. Food product has an attribute name and also a list of nutrients. We can also infer from this text that nutrients are present in products in certain quantities. So this gives us, two domain classes. Product and nutrient. Product has product name and nutrients and nutrient has name and quantity. The association between them is aggregation, as product contains nutrients. Now, that gives us possible classes when we get to design. And also to our [[Data Modeling]]. But before we go there,
>
> **[3:08](https://www.linkedin.com/learning/software-design-from-requirements-to-release/requirement-validation?u=76281980&t=188)** we need to continuously check for two things. First, whatever we are building, we are building it in the right way, and second, that we are building the right thing. To assess whether we are building in the right way, pertains to using correct methodology, tools and techniques. It also requires assessing architectural feasibility, which means coming up with a high level architecture, and, then developing a proof of concept to check if it works. To assess whether we are building the right thing, the best way is to show it to our customer and seek their feedback. This reduces project risk and gives us more confidence. So, let us do these two things for our Red30 product. First, let us see what we want to show to our customer. We can show our customer a low fidelity mockup, drawn on a paper which focuses mainly on structure for a rough idea or, we can have a high fidelity prototype that focuses on [[User Experience (UX)|user experience]] for a real look and feel. For this case study, I'm going to build a mockup using a tool called balsamiq which makes it a little more formal than a paper mockup and also gives some idea about look and feel. In balsamiq you can create your projects, and then within each project, you can create wireframes. These wireframes have various components such as hyperlinks, text, buttons et cetera, which you can link to create the kind of workflow that you want to show to your customer.
>
> **[4:43](https://www.linkedin.com/learning/software-design-from-requirements-to-release/requirement-validation?u=76281980&t=283)** As you can see I have created several wireframes that capture key use cases of search, compare, login, record meal, view diet log and track nutrition. These wireframes are rough sketches of what I will actually build over next few iterations. You could start with just one of the wireframes, and build the [[Representational State Transfer (REST)|rest]] over sprints, or you could create several of them if you have enough clarity at this point. The idea is to keep them simple, and always be open to change them as your project progresses. I will run this wireframe now, which will take me to first wireframe, showing the homepage. From there, I select search which takes me to search box and let's say I enter tomato basil soup here, this gives me all products with tomato basil soup in their names along with their manufacturer's brand names. At this point, I have put some fake data here and there is no back-end linked to any database. There is a selection radio button, on the right of each of these and the table at the bottom shows nutrients in hundred units of the selected product. If I select the second product, I can see the nutrients for the new selected product. In this way, this mockup shows screen transitions with some sample data for first two products. If I show it to my customer, it is easier for them to ask questions such as changes or point out any mistakes I may have made. Another benefit of using such a tool
>
> **[6:18](https://www.linkedin.com/learning/software-design-from-requirements-to-release/requirement-validation?u=76281980&t=378)** is that you can share the link of this mockup with your team members as well as your customers, and ask them to try it out. A great way to get a quick well-rounded feedback from all your stakeholders.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (5), [[Data Modeling]] (1), [[User Experience (UX)|User experience]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** find (2)
> **Analogies:** such as (2)
> **Env Vars:** usda (1)
> **Cross-References:** coming up (1)
> **Documentation:** specification (1)
> **UI Navigation:** select the (1)
> **Definitions:** is a  (1)

#### [Technology validation](https://www.linkedin.com/learning/software-design-from-requirements-to-release/technology-validation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-design-from-requirements-to-release/technology-validation?u=76281980&t=0)** - [Instructor] Technology validation requires developing some functionality that cuts through all layers of technology stack. User interface at front end, business logic in middle layer, and data at the back end. So we need to build a proof of concept. And to do that, let us set up the stack. This is a deployment diagram that shows various layers in the stack. It helps to have some visual layout before we go ahead and set up the environment. Starting from the user's end, the diagram shows browser on the user device with [[HTML]], CSS, and [[JavaScript]] at the front end. Then I plan to use Apache Tomcat as my web server that will host my application. The application will be in the form of a web archive that is a war file. The database called a Red30DB will be on [[MySQL]] which will have some connection with the external USDA database. This is the architecture of my production environment. Now we need to think about the dev environment as well. In [[Agile Development|agile]] methodology, the entire cycle from dev to test, to stage, to production needs to flow in one seamless pipeline. [[DevOps]], which is the agile approach for [[Software Development]] life cycle makes that happen. When you integrate dev and [[Integration Testing]] environment, you achieve [[Continuous Integration (CI)|continuous integration]].
>
> **[1:35](https://www.linkedin.com/learning/software-design-from-requirements-to-release/technology-validation?u=76281980&t=95)** When you are able to promote your code to staging environment incrementally where your end users can do some acceptance testing, you'll get [[Continuous Delivery (CD)|continuous delivery]]. And when you are able to move your code incrementally to production, then you have continuous deployment. Now to get this level of sophistication requires building a fairly sophisticated DevOps tool chain. In this case study, we will limit ourselves to using [[JUnit]] for [[Unit Testing]], Maven for building, [[GitHub]] for source code management, and [[Jenkins]] for promoting our code to production. Let us take a look at how it is all set up. The developer works on dev machine using an IDE, which is in this case is eclipse. It has JUnit for unit testing, Maven for build automation, and [[Git]] for staging configured within it. I have the Tomcat for dev environment also configured on this machine named as TomcatDev on port 8082. The code deployed on TomcatDev connects to MySQL server also running on the dev machine. As code is developed and tested, it is staged using git staging and then pushed onto the git repo. I have Jenkins hosted on my localhost at port 8080. That will pull the code from git repo,
>
> **[3:10](https://www.linkedin.com/learning/software-design-from-requirements-to-release/technology-validation?u=76281980&t=190)** use Maven plugin to build a war file, and use the deployment plugin to deploy onto the production server. The production server is on AWS Cloud hosted on an [[Amazon EC2|EC2]] instance that has another Tomcat server running on it. When Jenkins deploys a war file on production server, it connections with production database, red30db, which is running on Amazon Cloud Relation Database Service or RDS. As you can see, I have not shown the USDA database here, and that is because the data coming from USDA is static and read-only. So instead of configuring hard connection to it, I'll simply put the data provided by USDA into my database, red30db. Now there is just one thing missing, and that is the data model. At this point, I will encourage you to visit USDA FoodData Central at the URL shown here. The data we want to use in this project is available as a CSV or Access database, along with some documentation. We do not need all that data. For the use cases we have identified, we need just four tables to start with, and these tables are food, branded food, nutrient, and food nutrient. I have drawn the entity relationship that has ER model here, showing key entities, their primary and foreign keys,
>
> **[4:42](https://www.linkedin.com/learning/software-design-from-requirements-to-release/technology-validation?u=76281980&t=282)** data type for each field, relationships, and their cardinalities. These tables have many more columns, but I have not modeled them here as they're not relevant for us. Next step, let us take a look at the data on [[Microsoft SQL Server|SQL server]] to understand its basic structure and values. I have already migrated the data for these four tables from Access to red30db in MySQL. I'm using MySQL Workbench to view the data. And so let us start the default table. I have already made red30db as my default schema. So now I can say select start from food, and then run the query. And this shows FDC ID, which is the primary key, and description, which has the product menu. It has some other columns, which are not relevant for us at this stage. The next table is branded food. This table will show some additional information about the food [[Microsoft Products|products]], starting with the primary key once again, FDC ID, the brand owner, ingredients, serving size, serving size unit, household survey, and some other columns that are not relevant for us at this stage. Third is nutrient table. This is a small table. It has nutrient ID, name, and measuring unit with some other data.
>
> **[6:17](https://www.linkedin.com/learning/software-design-from-requirements-to-release/technology-validation?u=76281980&t=377)** And finally, food nutrient, which has all products and the nutrients in each product. This is the largest table, and it has maximum number of rows. So as you can see here, food has close to 300,000, branded food has slightly lesser number of rows, nutrient had just about 220, and now we can see food nutrient, it has close to half a million rows. Here you can see the FDC ID, which is the product identifier, nutrient ID, which is the nutrient identifier, and the amount which tells us how much nutrient is there in that product. Now to see all these four tables coming together, I have written one simple query, which shows information for a particular product with FDC ID S344604. And if I run this query, I can see the product FDC ID, description, brand owner, nutrient name, and nutrient amount coming from these four tables. So you can see that this is the product name, this is the brand owner, and then all these nutrients. One thing you notice, some nutrients have zero amount, which we will ignore when we get to coding. So these are the four tables that we will work with in our initial cycle of development.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MySQL]] (4), [[Git]] (4), [[Jenkins]] (3), [[Agile Development|Agile]] (2), [[DevOps]] (2)
> **Env Vars:** usda (5), fdc (5), html (1), css (1), ide (1)
> **CLI Commands:** mysql (4), git (4), apache (1), aws (1)
> **Definitions:** is a  (3)
> **Prerequisites:** set up (3)
> **Ports:** port 8082 (1), port 8080 (1)
> **Tools:** github (1)
> **Exercise Files:** source code (1)

#### [Proof of concept (POC) setup](https://www.linkedin.com/learning/software-design-from-requirements-to-release/proof-of-concept-poc-setup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-design-from-requirements-to-release/proof-of-concept-poc-setup?u=76281980&t=0)** - [Narrator] To build our proof of concept, we need to set up our Dev environment that has several elements that require careful configuration. I already set up the environment, and we will now take a brief tour, looking at each of the elements. First, let us take a look at Eclipse. Here, I have created a Maven project that is linked with [[Git]] Repo. To create this project, I used Maven Webapp Archetype, which generates this folder structure. A key element in Maven projects is pom.xml. In this, starting from the top, in line number five and six, the GROUP_ID is com.hplussport, and artifact ID is red30. The packaging in line number seven is set to war, which we will deploy on our production server. After that, I have included some dependencies for [[Java]] and [[MySQL]]. I am finally in build. The important elements are these directories. Source directory in line 54, test source directory in line 55, and war source directory in line 70. These directories should be correctly specified so that Maven can find these files for testing, building, and deploying. Now this project is configured to run on Tomcat server. To set it up, I installed Tomcat on my machine, and then created a server from within Eclipse. Then,
>
> **[1:31](https://www.linkedin.com/learning/software-design-from-requirements-to-release/proof-of-concept-poc-setup?u=76281980&t=91)** I bound the two together, by going into project, build path, configure build path. From here, into server, and you can see that TomcatDev is associated with project Red30. You can see some configurations of the server by going into server view, and double clicking on the server. This shows some basic configuration settings, starting with the server name, TomcatDev, hosted on local host, and the configuration path where all these files are stored. One important aspect here are these ports. Make sure these ports are not clashing with any other applications running on your machine. Coming back to these files, these files have some important configuration settings which we need to look at. So starting with Eclipse project workspace, you will find a folder named servers, that has another folder named TomcatDev-config, if TomcatDev is your Dev server name. It has several configuration files and the ones we are interested in are context.xml, server.xml, and tomcat-users.xml. Notice that we won't touch the web.xml in this folder because it pertains to the server and not to our application. First, let's look at context.xml. This defines the data source to connect to, which is red30db database.
>
> **[3:04](https://www.linkedin.com/learning/software-design-from-requirements-to-release/proof-of-concept-poc-setup?u=76281980&t=184)** I have given it the name DataSource, and the username and password you see here are for accessing red30db. Next, server.xml. Here you need to specify the ports that should not clash with any other application. And finally, tomcat-users.xml, where you need to add a user for manager-gui role, if you want to manage the Tomcat application using the gui provided by Tomcat. If not, then you can ignore it. Now, to the applications web.xml, which sits inside WEB-INF folder, inside webapp folder of the application. What I'm going to set up here in this xml is, how does the data get loaded from the database. I want my application to have all data loaded up before users start interacting with it. This improves the application performance. So I'm going to create a servlet named DataLoader, that will connect to red30db and read all the data. And to do this, I need to specify here in web.xml, that it should be loaded on startup. The number one indicates the sequence in which it should be loaded. So these are the settings on the Dev. site. The Tomcat proj [[Server Configuration]] settings are quite similar except, that the config files are not inside Eclipse Workspace, but inside the base Apache installation folder on our aws [[Amazon EC2|ec2]] instance.
>
> **[4:37](https://www.linkedin.com/learning/software-design-from-requirements-to-release/proof-of-concept-poc-setup?u=76281980&t=277)** So in the Apache root folder, there is a conf folder with two xml files which need some configuring. And then there is webapps folder, where we will deploy our war file. This war will explode to create the red30 folder, which will have all the application files, as shown here. The context.xml file remains the same for proj server, except that the URL for database, comes from Amazon RDS. Web.xml also remains the same, where we specify DataLoader servlet to be loaded on startup, and in tomcat-users.xml, we need to add one additional user that has manager-script role. This role will allow us to deploy war file into servers webapps folder through [[Jenkins]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Git]] (1), [[Java]] (1), [[MySQL]] (1), [[Server Configuration]] (1), [[Amazon EC2|Ec2]] (1)
> **File Paths:** web.xml (4), context.xml (3), tomcat-users.xml (3), server.xml (2), pom.xml (1)
> **CLI Commands:** find (2), apache (2), git (1), mysql (1), make (1)
> **Env Vars:** group_id (1), web (1), inf (1), url (1), rds (1)
> **Prerequisites:** set up (3), configure (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)

#### [POC implementation](https://www.linkedin.com/learning/software-design-from-requirements-to-release/poc-implementation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-design-from-requirements-to-release/poc-implementation?u=76281980&t=0)** - [Instructor] Before we implement our POC, we need to take a look at our use case diagram, as there is one change we need to make. We were initially thinking of connecting directly to USDA DB, but later we decided to have the data loaded upfront into our own Red30 DB. So we will not show it in this diagram any more, because any database that is fully controlled by our application is part of the system that we are creating, and not an external actor. Now, about the functionality for POC. A good idea is to take something that is simple, is part of one of the core use cases, and cuts across the entire technology stack. So how about just printing the number of [[Microsoft Products|products]] that are there in the database? I think it checks all the boxes. So starting from the front end, there was this UI mock-up, which we saw earlier. So we do have some idea of the look and feel. Instead of implementing the functionalities, such as search, compare, et cetera, all we need here is a POC link, which when I click, it should display the product map sites. To get that going, I have used the classic approach of iteratively moving between sequence diagram, class diagram, and code. It helped me model the behavioral and structural aspects of the system, so whatever I'm going to show you did not come in one shot. It took some back and forth between modeling and coding to get this straight.
>
> **[1:34](https://www.linkedin.com/learning/software-design-from-requirements-to-release/poc-implementation?u=76281980&t=94)** So let us see what we got. Very early in the cycle, I realized that if I sent an [[SQL]] query to the database for every search or comparison request, the response time gets really poor. And since all food product-related data coming from USDA is read-only, there is no need to read it afresh for every query, so I decided to load all food products-related data into memory when the application starts. And I did that by creating a DataLoader servlet whose init is involved when application starts up. This init does the job of initial data loading. Another class I created here is Dao. That is data access object, which will connect with the data source that we defined in context XML. Let us model this init sequence diagram. Starting from top left, when server calls init on DataLoader, the DataLoader reaches out to Dao, whose instance establishes connection with red30db, and then passes itself to DataLoader. The DataLoader then loads all the data. So my final class diagram for initial data load looks like this. Here we have DataLoader extending HttpServlet, that has in it destroy and three methods for loading data. It contains an instance of Dao that has two maps, Product map and Nutrient map, which is where DataLoader loads all the data. Product and Nutrient are two beans
>
> **[3:08](https://www.linkedin.com/learning/software-design-from-requirements-to-release/poc-implementation?u=76281980&t=188)** that have their properties, sectors, and getters. I have also created non-default constructors which initialize some of their properties. Okay, now let us take a look at Eclipse. First, the overall structure. In JavaResources inside sourceMainJava, I have a package, commHPlus4_red30, that has Dao, DataLoader, and PocController, which will implement the functionality for POC. Then in beans I have Nutrient and Product beans. The JSPs are inside webapp. Inside src main I have css folder here. That has stylecss. Images, that has the logo image. Jsp folder, that has another folder, POC, with pocResults.jsp. Jsp also has header.jsp, which is the common header across all pages. WEB-INR, which has web.xml. And index.jsp, that is where everything gets started. Now let us take a look at code inside all these files. Starting with Dao, in Dao class there is a private constructor at line 30 in which it creates an initial context, and then looks up the DataSource resource, which we have defined in our context XML file. It uses this resource to initialize the connection variable in line 36. In line 43 the getInstance method checks
>
> **[4:46](https://www.linkedin.com/learning/software-design-from-requirements-to-release/poc-implementation?u=76281980&t=286)** if the private member variable Dao is null. If yes, it invokes the constructor and returns its instance. This is singleton pattern, which ensures that we have only one instance of Dao running in our system, which then ensures that we have just one connection to database at a time. Now let us look at DataLoader. In its init method, we get Dao's instance in line 30, and then invoke the three methods for loading data. The destroy method just cleans up the memory and closes the connection. And then there are three data loading methods: loadProducts, loadNutrients, and loadProductNutrients. These methods use SQL queries to pull the data and load the Product and Nutrient maps. Product and Nutrient are two beans. Nutrient has id, name, and unit_name as three properties. I have used these same names as the field names in database table for better understandability. Product similarly has many properties, all named as per field names in the database tables. There is this productNutrientMap in line 15 which will store all nutrients and their amounts in the product. Now let us take a look at JSPs, which will help us understand the flow. They're all in the src main, as I showed you earlier.
>
> **[6:20](https://www.linkedin.com/learning/software-design-from-requirements-to-release/poc-implementation?u=76281980&t=380)** Starting with index.jsp, here we have header.jsp included in line 11, followed by some simple text. Then in header.jsp we have image logo and a set of links that you see for index, POC, search, compare, and login. We will implement the search, compare, login functionalities later. For now, we will have POC, which is pointing to our PocController, so let's take a look at that. In PocController we have just simple doGet and doPost methods. The doGet method is forwarding the request to pocResults.jsp, and pocResults.jsp is simply printing the productMap.size in line 14. Okay, now let us run the application. I go into project, run as, run on server. This will take a little bit of a time, because it has to load all the data, as you can see, and the loading is completed, and our application is up and running. If I click on POC I can see the number of products in database. So the entire flow that you just looked at, I have traced it out in a sequence diagram here. I see several benefits of doing so. First, by laying out the entire flow, it helps me think clearly about my design,
>
> **[7:55](https://www.linkedin.com/learning/software-design-from-requirements-to-release/poc-implementation?u=76281980&t=475)** and identify any incorrect or unnecessary objects, loops, or flows. Second, it helps anyone else reading and trying to understand my code and design. And third, it is a great pedagogical tool, because it helps one teach and learn. Using the objects identified in this sequence diagram, here is the final class diagram. You can find this and many other diagrams in the artifacts provided along with this course. Now that we have looked at implementation, it's time to move all this to production server.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (3), [[SQL]] (2)
> **Env Vars:** poc (8), usda (2), sql (2), xml (2), web (1)
> **Code Identifiers:** pocresults (3), doget (2), sourcemainjava (1), getinstance (1), loadproducts (1)
> **Definitions:** is a  (3)
> **CLI Commands:** make (1), find (1)
> **File Paths:** web.xml (1)
> **UI Navigation:** click on (1)
> **Analogies:** such as (1)

#### [POC deployment](https://www.linkedin.com/learning/software-design-from-requirements-to-release/poc-deployment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-design-from-requirements-to-release/poc-deployment?u=76281980&t=0)** - [Instructor] With our POC implementation completed on dev side, we are all set to deploy our proof of concept to production, so let us take a look at what we have here. I have one [[Amazon EC2|EC2]] instance which I have connected through remote desktop or RDB. Through this RDB I have installed Apache Tomcat and inside the folder I can go into bin and get this server started. You can see that the server is up and running. I can test that by going into browser and then getting into localhost 8080 this webpage shows that my server is up and running. We should also test connecting to this Tomcat from some other machine outside the RDB just to make sure that we are able to access it from public domain. For that, I'll go back to my bank machine here you see my EC2 management console showing the EC2 instance and you can also see the public DNS, which I can copy. Go to my browser. Type in the port 8080 and you will see once again the same web server up and running. Now to make this happen. Make sure that your EC2 instance has public access, it Security groups allow port 8080 to be accessed through HTTP and optionally if needed HTTPS and also that EC2 firewall is not blocking port 8080. If it is you need to go into firewall settings
>
> **[1:36](https://www.linkedin.com/learning/software-design-from-requirements-to-release/poc-deployment?u=76281980&t=96)** and unblock 8080. Now going back to my remote desktop, I want to look at the configuration files for Apache Tomcat, which are important for our application. So I go into con folder. There are two files that we are interested in Tomcat users and context, so let's open that and in Tomcat users you see that I have included the deployer user that has managed a scriptural, this is the user that will use [[Jenkins]] to deploy the warfighter. Then in context XML, here is the resource. It has the data source red30db, that is our production database and you can see that it is pointing to the RDS. Where do I get this URL from? Let me go back to my dev machine. Now I am on my IDS management console in [[Databases]]. Here is my production database and if I click there, I can see the URL along with the port where my production DB is running. I can connect to this database through my [[SQL]] workbench. You can see that I was connecting initially to my local instance, which was my dev server, and here is my production data server. If I click on it, I can get to the database and you can see that I am using the same four tables that we have been with so far. Now the only thing left is Jenkins, which is supposed to deploy the war file, but before we do that,
>
> **[3:08](https://www.linkedin.com/learning/software-design-from-requirements-to-release/poc-deployment?u=76281980&t=188)** how about let us deploy it manually just to see how it works and then deploy it later through Jenkins. So let me go back to eclipse and here on my project I say run as and maven build. Here I specify the goal as package, which will create the war package for me and then run. Now you can see that the build is successful, which means my war file has been created, which I can find in my target folder. I go into that folder right click show in system Explorer, copy the file so that I can copy it to my Tomcat server. Go back to my EC2 instance into file Explorer from Apache Tomcat go into web apps and paste the war file. As you do that, if you open up your Tomcat instance, you can see that the server could detect a new application war file. It exploded it and now is loading the data. This may take a while because it is pulling the data from Amazon cloud. Now you can see that the application has been uploaded. I go back to my browser on my local instance and say red30 run the POC
>
> **[4:42](https://www.linkedin.com/learning/software-design-from-requirements-to-release/poc-deployment?u=76281980&t=282)** and you can see that we are getting the desired result. I can also test this out on my dev machine. So let me go back there onto the browser, back to the page where we had our EC2 instance server running and say red30. Once again, POC and we see the desired result again. Now we need to do this entire cycle using Jenkins for that let me go back to eclipse and make a small change so that you can see the change going back to production. So let me open up the airbag folder inside which I have POC results and here I'll make a tiny change. I'll say, wow, I found save this. Now I'll go into get staging. You can see that all the files that we have been working on are showing up as onstage changes. I will stage them and then push them to get. So here I will put in my lesson number which is 02-07e and we can say POC completed as the comment, comment and push, here you see that it is pushing you to the master now to Jenkins. Now in Jenkins I have created a deploy red30 project as a freestyle project. If I go inside the project, I can see its configuration settings.
>
> **[6:17](https://www.linkedin.com/learning/software-design-from-requirements-to-release/poc-deployment?u=76281980&t=377)** Starting from here with a general description and source code management, it is pointing to my good report with the credentials in build. I have the Maven plugin and I'm giving the goal of clean package to create a war file, which will be deployed in the context red30 add the URL specified here, which requires these credentials. So let me save this setting and go into build now. This takes a while because it has to pull all the code from get creative or file, and then deploy it on Amazon server. Excellent we see that our build has been successful, so I can go back to my URL and simply refresh, and you can see that the change is showing up on the production site. Now our dev ops pipeline is running and we can start delivering our product increments.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Amazon EC2|Ec2]] (7), [[Jenkins]] (6), [[Databases]] (1), [[SQL]] (1)
> **Env Vars:** ec2 (7), poc (5), url (4), rdb (3), dns (1)
> **CLI Commands:** make (5), apache (3), find (1)
> **Cross-References:** go back to (7)
> **Ports:** port 8080 (3)
> **UI Navigation:** go to (1), click on (1)
> **Exercise Files:** source code (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: From dev to deploy](https://www.linkedin.com/learning/software-design-from-requirements-to-release/challenge-from-dev-to-deploy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-design-from-requirements-to-release/challenge-from-dev-to-deploy?u=76281980&t=0)** (rhythmic music)
>
> **[0:05](https://www.linkedin.com/learning/software-design-from-requirements-to-release/challenge-from-dev-to-deploy?u=76281980&t=5)** - [Instructor] This is a simple challenge in which you just need to repeat the cycle from dev to production one more time. Last time, we printed the number of [[Microsoft Products|products]] in the database. This time, can you change the POC to also print the number of nutrients, take the changes all the way from dev to [[Git]] to [[Jenkins]] and then to production server? Once done, check out my solution in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (1), [[Git]] (1), [[Jenkins]] (1)
> **CLI Commands:** git (1)
> **Env Vars:** poc (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (rhythmic music) (1)

#### [Solution: From dev to deploy](https://www.linkedin.com/learning/software-design-from-requirements-to-release/solution-from-dev-to-deploy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-design-from-requirements-to-release/solution-from-dev-to-deploy?u=76281980&t=0)** - [Instructor] In this challenge you were to print the number of nutrients in database. So for that I have added this one more statement, printing the size of the nutrient map. And to test it out, I go back to my local host and refresh, you can see, it is printing the number of nutrients. Now I need to push this change to [[Git]], so for that I go to Git staging, you can see it is showing up as unstaged, so I stage it, you can also see that I'm adding it to a branch 02-09, just so that I can keep it separate, I will add the comment 02-09e, you'll see it changed. Then I commit and push, next, and it is done. Now [[Jenkins]] is going to pull the code from master, which means the branch needs to be merged to the master, so that Jenkins can pull the changes. For that I'll go to my command line and I am in my Git folder, so I'll say Git, checkout master, Git pull origin master. Then I'll say Git merge 02-09e and then Git push origin master.
>
> **[1:37](https://www.linkedin.com/learning/software-design-from-requirements-to-release/solution-from-dev-to-deploy?u=76281980&t=97)** This will merge the changes to master. Now I go to Jenkins, I'm in Jenkins now, and all I need to do is build my project one more time. So we are good with a build here, I go back to my URL and just refresh and you can see the changes are showing up on the production as well.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Git]] (7), [[Jenkins]] (4)
> **CLI Commands:** git (7)
> **UI Navigation:** go to (3)
> **Cross-References:** go back to (2)
> **Env Vars:** url (1)
> **Tools:** command line (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 2. Sprint 2: Beta

[↑ Back to Table of Contents](#table-of-contents)

#### [Prepare sprint backlog](https://www.linkedin.com/learning/software-design-from-requirements-to-release/prepare-sprint-backlog-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-design-from-requirements-to-release/prepare-sprint-backlog-2?u=76281980&t=0)** - [Instructor] We had identified several requirements in our previous iteration, which grouped into three big themes. Now it's time to prioritize them, so that we can pick what to implement in our next iteration. At a detailed level, this is the list from which we need to prioritize. Requirement prioritization is a fairly intensive and important activity, and you need to work with your stakeholders to help you prioritize. There are many techniques to do this, which I have explained in detail in my course on developing effective requirements. Here I used a simple ranking based on requirement dependency to come up with first cut prioritization. I have ranked requirements that other requirements depend on with a higher priority. For example, to compare two [[Microsoft Products|products]] I should be able to first search for them. Similarly, to record a meal, I need to first search for food products to add to the meal. So search is my first priority, ranked as one. In this way I rank them from one to five. There may be some requirements that you may not have enough clarity about at this point, so you can leave them unranked as of now, which I have done for some of them, as you can see. From here, using [[Scrum]] methodology we can now create our product backlog, which is nothing but a prioritized list of requirements. Depending on how much clarity we have about these requirements, we may also write them out as user stories.
>
> **[1:35](https://www.linkedin.com/learning/software-design-from-requirements-to-release/prepare-sprint-backlog-2?u=76281980&t=95)** Whichever way we do, we need to pick the highest priority requirements, write them out in the form of user stories, if not already done so, come up with effort estimates, and see how many we can deliver in next sprint. So in our case, let us assume that we think we can deliver the first three requirements, that is search by product name, display food product nutrients, and compare food products by their nutrients. This list then becomes our sprint backlog. A slightly different view of prioritized requirements, especially if you have your requirements written down as user stories, is a story map. We write the user stories on index cards, group them into themes, and then pin them up on a wall. The horizontal axis shows workflow, indicating some kind of requirement dependency, and the vertical axis shows priority that we arrived at through our first cut prioritization. The story map is also a form of product backlog, but with a little more structure and information to it. Now, let us go back to our sprint backlog and pick up our first user story to implement. Our highest priority requirement is search, and its user story can be written as, "As a user, I want to search for a food product "by name so that I can see its nutritional value." This user story takes care of first two requirements of showing a list of products, and their nutrients.
>
> **[3:10](https://www.linkedin.com/learning/software-design-from-requirements-to-release/prepare-sprint-backlog-2?u=76281980&t=190)** If you want to specify search requirement in the form of a use case specification, it may look like this. User is the primary actor, with no secondary actor. The precondition is that user should have access to the application at the given URL. Then in basic flow, user initiates the use case by choosing the search option, and provides key words to search for. Red30 responds with a list of products and nutrients displayed as needed, and use case ends successfully. The ultimate flow may be that Red30 could not find any product with the given key words, and the use case fails. Now that we have articulated the search user story and use case, let us move on to its design and development.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (5), [[Scrum]] (1)
> **Definitions:** is a  (2)
> **CLI Commands:** find (1)
> **Env Vars:** url (1)
> **Cross-References:** go back to (1)
> **Documentation:** specification (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Build models](https://www.linkedin.com/learning/software-design-from-requirements-to-release/build-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-design-from-requirements-to-release/build-models?u=76281980&t=0)** - [Instructor] This is the UI mockup that we looked at earlier when we discussed requirement validation. In this mockup when we choose search from homepage, it takes us to a Search page where we enter some string based on which it pulls the [[Microsoft Products|products]] and then nutrients. When I select a different product, the nutrient table below also changes to reflect new set of nutrients. This markup helps us in thinking about the flow, which will now help us draw a sequence. We already know the sequence for initial data loading, which we worked through in the previous chapter. The food product and nutrients data are available in DAO in the form of product and nutrient maps. From here, our use case starts when the user chooses the search link on index JSP. Index JSP then forwards the request to search controller servlet. Search controller forwards the request to search inputs JSP, where user gets the option to enter a search string. Our search is currently very simple. So, all we have is one search box. But in future springs, we may offer options such as search by nutrient or ingredient or brand owner and so on. User sees the search box and enters a search string. Search input JSP received the search string and forwards it to search products servlet. The job of this servlet is to now connect with DAO
>
> **[1:35](https://www.linkedin.com/learning/software-design-from-requirements-to-release/build-models?u=76281980&t=95)** and get search results. Since DAO has all the data, we can ask DAO to perform the search and return the results. Now, for all this to happen, we need some mechanism of passing the search string and search results among the JSPs and servlets. One approach is to use session variables. In this approach, the search products servlet get the session from the request and saves search string as a session attribute, then it asks DAO to search for products that have the search string in their names. DAO looks them up in its product map, and then returns a list of products that have the search string in their names. Now, if you recall our UI mockup, the first product in the list is selected by default, and its nutrients are displayed just beneath the product list. That means we need to search for first products nutrients. So now, the search product servlet makes another request to DAO this time to search what nutrients in the first product. DAO performs the search and then returns the list of nutrients. The search servlet has the search string, the product list, the list of nutrients, and the selected product, which is by default, the first product. It saves all these as session attributes and forwards the request to search results JSP for display. At this point, you can see that by tracing this flow, we have identified two new JSPs,
>
> **[3:09](https://www.linkedin.com/learning/software-design-from-requirements-to-release/build-models?u=76281980&t=189)** search inputs and search results, and two new servlets, search controller and search product. You will also notice that this entire flow is shown in a loop, indicating that user can go back to input a new search as many times as needed. There is just one functionality missing in this workflow. And that is, user can select a different product from the product list. At that point, the search results should show a different list of nutrients, and not the nutrients for the first product which was selected by default. That means we need to have search results JSP, respond to a user's product selection based on which it needs to then change the nutrients display. And for that we can get a FDC ID of the selected product from radio button in search results JSP. It can then submit the form to another servlet, say, search nutrients. This servlet will then ask DAO to find nutrients for the product, get the list of nutrients, update the nutrients list session attribute and forward the request to search results for displaying the new set of nutrients. And for that we can get FDC ID of the selected product from radio buttons in search results JSP and submit the form to another servlet, say, search nutrients. This servlet will then ask DAO to find nutrients for the product, get the list of nutrients,
>
> **[4:42](https://www.linkedin.com/learning/software-design-from-requirements-to-release/build-models?u=76281980&t=282)** update the nutrients list session attribute, and forward the request to search results for displaying the new set of nutrients. And once again, all this can happen in a loop where the user continues to select a different product from the search results, and the nutrient list keeps changing. So, with all these classes and their interaction traced out in a sequence diagram, we have this class diagram, where there are three new servlets and two new methods in DAO, that perform all the search we need. Also, I have now written out the hashCode and equals method in product class, as we need to compare objects for searching. With all this, we are now set to look at the code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (6)
> **Env Vars:** dao (11), jsp (8), fdc (2)
> **CLI Commands:** find (2)
> **Cross-References:** we discussed (1), previous chapter (1)
> **Code Identifiers:** hashcode (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Build code](https://www.linkedin.com/learning/software-design-from-requirements-to-release/build-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-design-from-requirements-to-release/build-code?u=76281980&t=0)** - As I was drawing these sequence and clause diagrams that you saw in previous lesson, I was also coding which help me make sure that whatever I was thinking was also in implementable in code. I will now show you the code for search use case which starts when the user chooses search option from the homepage. The homepage is index.jsp but the link for search is in header.jsp. Here you can see that we have POC link in line 17 from the previous iteration which we no longer need. So I have commented it out. In the next line, you see that search link is pointing to search, which is actually the SearchController Servlet. All search-related [[Java]] classes are now in a package near search inside com.hplussport.red30. In SearchController, we have just regular doGet and doPost methods. Both for running the request to search in inputs.jsp. Search Inputs.jsp is in a folder Search, inside jsp folder. This has one form in line 12, that has a search box in line 13. When the user submits a searchString in this box, the request is forwarded to searchproducts which is also a Servlet. In searchproducts, there are several things going on. First, as you see in line 28 to 30, it extracts the session and the searchString parameter from request option. It then save the searchString as a session attribute.
>
> **[1:34](https://www.linkedin.com/learning/software-design-from-requirements-to-release/build-code?u=76281980&t=94)** This makes sure that searchString is available for [[Representational State Transfer (REST)|rest]] of the session. Next, in line 33, it asks DAO to searchProductOnName using this searchString. This is a new method in DAO. So let's take a look at that. In DAO, in line 52 it takes searchString as a parameter, creates a Product ArrayList in line 53 and then in a for loop, searches the productMap for [[Microsoft Products|products]] that have searchString in their names. As it finds these products, it keeps adding them to the list in line 56. And then returns the list back to searchProduct Servlet. In line 33, we now have the products that have searchString in their names. Next, we need to find nutrients in the product that is at index one. So in line 38, we invoke another DAO method. This time, to search nutrients for a product passing the product's FDC ID. So let us go back to DAO. Here in line 64, we have a method searchNutrients for product that takes an FDC ID. It first creates an empty list of nutrients in line 65, fetches the product from the map with the given FDC ID, and then uses the nutrient IDs in the ProductNutrientMap to find nutrient objects from nutrientMap. These nutrients are then added into nutrientsList one-by-one and then nutrientsList is returned. Back to searchProducts, the productList, the nutrientsList
>
> **[3:13](https://www.linkedin.com/learning/software-design-from-requirements-to-release/build-code?u=76281980&t=193)** and the selectedProduct which is nothing but the first product, are saved as session attributes in line 39 to 41. Finally, the request is forwarded to searchResults.jsp. In searchResults.jsp, first in line 17 to 20, it extracts all session attributes, and then it creates a counter in line 21 to number the products that are to be displayed. It then displays the productsList in a table starting in line 29. Notice that this entire table is inside a form declared in line 23. This form is submitted when the user selects a radio button defined for each product in line 49. As this form is submitted, the control goes to search nutrients Servlet as you can see in line 52. But before we go there, let us continue with the initial scenario where the selectedProduct by default is the first product in the list. In that case, the nutrient table starts in line 64 which displays nutrient name, quantity per 100 units of product and unit of measure for nutrient. Finally, if user selects a different product, the control goes to searchNutrient. In searchNutrient, here in line 30, the Servlet gets fdcId parameter coming from radio button selection. Using this fdcId, it uses DAO's productMap
>
> **[4:48](https://www.linkedin.com/learning/software-design-from-requirements-to-release/build-code?u=76281980&t=288)** to get the product object in line 33... And it search nutrients for product method to get it's nutrient in line 35. Both these are saved as session attributes in line 37 and 38. The request is sent back to searchResults.jsp which refreshes the nutrients table on the webpage. Now we are all set to run our application. For that, I go to Run As. Run on Server. And you can see that is beginning to load all the data. The data loading is now completed and the application is up and running. Here, if I say search... Let's say I do "apple pie". I can see the results here. I can also run this application from outside, so let me go to browser, localhostRed30. Search products, let's say "apple pie" one more time and you can see the results. If I change the product selection from radio buttons, you can see that the set of nutrients in the table below are also changing. At this time, I do want to say that I am not a UI designer. As you can probably tell. This UI is just bare bones to get the functionality up and running. This would be a good time to involve your UI design expert if you have one in your team. I don't have any, so we will have to live with this beauty.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (5), [[Java]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Code Identifiers:** searchstring (8), nutrientslist (3), searchresults (3), productmap (2), selectedproduct (2)
> **Env Vars:** dao (6), fdc (3), poc (1)
> **CLI Commands:** find (2), make (1)
> **Cross-References:** in the next (1), go back to (1)
> **UI Navigation:** go to (2)
> **Definitions:** is a  (1)
> **Speakers:** - as (1)

#### [Deliver and deploy](https://www.linkedin.com/learning/software-design-from-requirements-to-release/deliver-and-deploy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-design-from-requirements-to-release/deliver-and-deploy?u=76281980&t=0)** - (Instructor) In [[Continuous Integration (CI)|continuous integration]], delivery and deployment, testing plays a critical role in ensuring that each step ensures quality and bug free release. Many kinds of testing must be performed for applications such as [[Integration Testing]], UI testing, [[Load Testing]], [[Security Testing]] and so on. Most of these testing activities require automated tools which need to be integrated into the [[DevOps]] cycle. To keep it simple in this case study, we will look only at initial [[Unit Testing]], which is part of the build process. It can be easily integrated into our current setup using the [[JUnit]] framework. But JUnit can help us test only non-servlet code. Our current code base is quite small with very little code outside servlets and JSPs. So just to demonstrate how to bring unit testing into our release cycle, I will put some simple test cases that tests the two new search methods we wrote in dow class. These test cases will become part of the cycle and the new bill will go through only if the test cases pass. For that I have written my test cases in test dow [[Java]], which is inside the SRC test folder. And it is the same folder which is also mentioned in POM XMLS test source directory. That way Maven knows where to find test files to run before making a new build. So here is test dow dot java.
>
> **[1:37](https://www.linkedin.com/learning/software-design-from-requirements-to-release/deliver-and-deploy?u=76281980&t=97)** Since we are doing unit testing, we do not want to connect to the database because that slows down testing. And also, we only want to test what we do after the data has been read from the database. So here, I have a setup class method in line 20 that is executed before any tests are run. This method has fake data that initializes Dow's product and nutrient maps. With this fake data we want to test whether the two search methods in dow return correct results. My first test case in line 55 tests dow search product on names by passing these search string Apple to it, and then asserting that the returned list has size two based on the fake data I created about. My second test in line 61 test the same Dow's method, but this time to check whether the return list has correct [[Microsoft Products|products]] in it. The third test in line 74, test the other search method in Dow. That is search nutrients in product by passing it an FDCID and asserting that it has three nutrients. The fourth test in line 80 tests whether the nutrients in this product are the correct ones. Now we can add more tests to it, but for now, this suffices to demonstrate the build process that includes testing. And to do that, I go into project,
>
> **[3:11](https://www.linkedin.com/learning/software-design-from-requirements-to-release/deliver-and-deploy?u=76281980&t=191)** right click run as and in Maven build gives the goal as test. Here you see that our tests have been run and our build is successful. I could also run Maven as with a gold package, which is what [[Jenkins]] will do. And this will run the tests and then create a war file. Now we are ready to commit our code for next release. Now that my code is on get, I can deploy it through Jenkins for that I say build now. So the build is now successful. I go to my EC two instance, pick up the DNS URL. Go to my browser 8080 red30 when you can see the new homepage in search, let's search for apple pie. And you can see the products and the nutrients. If I change the product selection, the nutrient also change.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Unit Testing]] (3), [[JUnit]] (2), [[Java]] (2), [[Microsoft Products|Products]] (2), [[Jenkins]] (2)
> **Env Vars:** src (1), pom (1), xmls (1), fdcid (1), dns (1)
> **UI Navigation:** go to (2)
> **Prerequisites:** setup (2)
> **CLI Commands:** find (1)
> **Analogies:** such as (1)

#### [Challenge](https://www.linkedin.com/learning/software-design-from-requirements-to-release/challenge-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-design-from-requirements-to-release/challenge-2?u=76281980&t=0)** - [Instructor] In this challenge you need to take the next requirement in our sprint backlog through the entire cycle from requirements to release. This requirement is to compare two [[Microsoft Products|products]] in terms of their nutrients. Write its user story, create its UI mockup, and then iteratively build its sequence diagram, class diagram, and code. Then test your code, commit it to [[Git]], and then deploy to productions through [[Jenkins]]. I will show you my solution in my next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (1), [[Git]] (1), [[Jenkins]] (1)
> **CLI Commands:** git (1)
> **Cross-References:** next video (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution](https://www.linkedin.com/learning/software-design-from-requirements-to-release/solution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-design-from-requirements-to-release/solution?u=76281980&t=0)** - [Instructor] In this challenge you want to take the compare use case from requirement to release, so this is how I did it. First, let us see its user story. As a user I want to look up food [[Microsoft Products|products]], so that I can compare their nutritional values. Now this user story does not specify how many products the user wants to compare at a time. But let us assume that user wants to compare two products. And with that assumption, here is the UI mock up. From home page I go to compare. It shows two search boxes. I can enter two different strings or same string in both like I have done it here in this mock-up. When I compare, it shows two sets of products. To start with both lists will have their first product selected. Here I have shown a scenario where the left box has first product selected and the user has selected third product in the second box. Accordingly, the nutrient lists show different sets of nutrients just below these two products. As you can see, this functionality is very similar to what we had in search use case except that we are dealing with two sets of products and nutrients here. So with that understanding, let us move to sequence diagram. To start with, user chooses to compare an index GSB which forwards a request to compare controller.
>
> **[1:34](https://www.linkedin.com/learning/software-design-from-requirements-to-release/solution?u=76281980&t=94)** Compare controller forwards it to comparison inputs GSB which shows the options to enter search strings. User provides two search strings, and search inputs GSB forwards them to another servlet, comparer on product need. This servlet gets the session from request object, and saves search streams as session attributes. Then, one by one, it sends them to Dao, to look for products that have these search strings on their names, gets the two product lists, and then asks Dao to search for nutrients for first products in both the lists. Once it gets all these things, it saves them as session attributes, and forwards them to comparison as GSP to display results. Now, like we had it in searching case, the user can select different products from the two lists, which will require nutrient lists to be refreshed. And that would create another interloop where users select a product, displayed by comparison results GSP, and then the ABC ID of selected product is forwarded to another servlet comparer on FDC ID. The servlet asks Dao to get nutrients for the selected product, Dao sends the list, and then the new list of nutrients is displayed. As you can see, tracing this flow has helped us identify three servlets, compares our controller, comparer, or product name,
>
> **[3:08](https://www.linkedin.com/learning/software-design-from-requirements-to-release/solution?u=76281980&t=188)** and comparer on FDC ID, and to GSPs, compares and inputs, and compares and resolves. Our class diagram for compare use case looks like this. There are three new servlets that were introduced. Thanks to object-oriented design, no other classes had to change. And finally, our FOIL class diagram, for all functionalities and Red30 so far looks like this. Here, you can see three packages, search, compare, and beings inside (mumbles). Now, time to look at the code. Starting with head of GSP, that has the link for user to initiate compare functionality in line 19. Here, you can see that it goes to compare servlet, which is compare controller. All the other classes related to compare use case are in compare package here. Compare controller has doGet and doPost as usual, and it takes us to compares and inputs GSP. Compares and inputs is in a folder named "compare inside GSP folder". It has a form in line 12. That takes two inputs per search. Line 18 for search string one, and line 23 for search string two. Once user enters these two search strings, control goes to compare name, which is the URL for comparer on, product name. Comparer on product name, first,
>
> **[4:43](https://www.linkedin.com/learning/software-design-from-requirements-to-release/solution?u=76281980&t=283)** gets the session from request object, and saves search strings in line 28 to 30, then in line 33 to 36, it gets products lists for first string searched in Dao. In line 40 to 43, it gets products lists for second search string. Then in line 47 to 53, it gets nutrients for first product in first list, and in line 56 to 62, it gets nutrients for first product in second list. While doing so, it saves all these results as session attributes and forwards the request to compare and results. In line 64, let us look at compares and results now. In compares and results, the approach is same as what we had in search results. In line 16 through 26, we pull all session attributes in local (mumbles). There are several [[Forms]] here, at the top, there is a form in line 29, for changing the search string to get a different product to compare. Any change here will take the control to comparer on product name servlet, which we just looked at. Then in line 39, onwards, there's a table that has two columns and two rows. Top row has two lists of products, you can see this row starting in line 41, it displays the first product list in the first column, and it goes on
>
> **[6:17](https://www.linkedin.com/learning/software-design-from-requirements-to-release/solution?u=76281980&t=377)** to line 90, and then second list from line 107 to line 147. The bottom row starts in line 156, where in left side, you have first nutrient list until line 200. And then second cells starting in line 208, showing second nutrients list up to line 255. Lastly, when the user chooses a different product from the list, using radio button selection, the control goes to the third servlet comparer on FDC ID. Comparer on FDC ID as usual, first gets the session and requests parameters from request option in line 25 to 27, then in line 32 to 39, finds the product with selected FDC ID from product map, gets its nutrients from Dao's search nutrients for product matter, and sets nutrient list one attribute. Same thing for second product in lines 42 to 49. Finally, forward all these results to compare to last year's B4 display. Now, that we have seen all (mumbles) functionalities, so now, let's run the application. I go into 'run as', then 'all server', you can see the product data is being loaded,
>
> **[7:51](https://www.linkedin.com/learning/software-design-from-requirements-to-release/solution?u=76281980&t=471)** and our application is running, I can go into compare products from here, or let's go to the browser. Here, I can say local host 8082 Red30, and compare products. Let's say I say apple pie, and compare it with apple crisp. And you can see two sets of products and nutrients, I can select a different product, and you can see the nutrient changing for that product. So now, on the writing side, I can choose a different product, and the nutrient list is changing here as well. Now I need to move all these changes to production. So, for that, I'll go to eclipse, and in my (mumble), I can see all my new compare functionality files are unstaged, which I can stage now, and I can come like this, I am commenting it to 0306. Compare use case completed. Comment and push, and next. And finish. Now, I am in [[Jenkins]], I have already merged the new changes to master, like I did before for Jenkins to pick up from. So, all I need here is to build, you can see the build has begun, and, I can go to my production URL, refresh, and then compare.
>
> **[9:26](https://www.linkedin.com/learning/software-design-from-requirements-to-release/solution?u=76281980&t=566)** Use the same products just to compare here, Apple pie and apple crisp, and we are all good.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (16), [[Jenkins]] (2), [[Forms]] (1)
> **Env Vars:** gsp (5), fdc (5), gsb (3), url (2), abc (1)
> **UI Navigation:** go to (4)
> **Code Identifiers:** doget (1), dopost (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 3. Sprint 3: Release 1.0

[↑ Back to Table of Contents](#table-of-contents)

#### [Prepare sprint backlog](https://www.linkedin.com/learning/software-design-from-requirements-to-release/prepare-sprint-backlog?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-design-from-requirements-to-release/prepare-sprint-backlog?u=76281980&t=0)** - [Instructor] We had this product backlog when we started, out of which we delivered top three requirements in previous print. Now, we move to next set of requirements in which we need to cater to our registered users. They need to have their user accounts created so that they can start recording their meals and viewing their diet logs. Since the functionality of creating user accounts is based on having the customer actually register themselves with diet consulting services at H+ Sport and doing all the paperwork and making the payments, we will take some shortcuts to simplify the requirements for our case study. Let us assume that for now, the user accounts are created at the backend by IT admin directly in the database. So customers register themselves with diet consulting services. They are given a user name and password, which they use to access other functionalities. If we see the use case diagram view, we can see that all use cases, other than search and compare, require the user to log in. So we need to implement the login functionality for all use cases going forward. It is an included use case as is shown by include arrows in the diagram. Let us write user stories for the other two requirements. Record a meal and view diet log. First, user story for recording meals can be written as a registered user, I want to record my meals
>
> **[1:33](https://www.linkedin.com/learning/software-design-from-requirements-to-release/prepare-sprint-backlog?u=76281980&t=93)** so that I can maintain my daily diet log. While this user story seems complete in itself, it doesn't say how will the user know if the meal has been recorded. And so, the next requirement of viewing diet log becomes closely related to this, which is as a registered user, I want to view my diet log so that I can keep track of what I'm eating. Each of these two user stories can also be written as use case specifications. This time, the actor is a registered user, and the precondition is that the registered user should be logged in. In basic flow, as usual, the registered user chooses the option to record a meal. Red30 offers options to enter meal date, time and meal type. We know the possible values for date and time but what is a meal type? Well, we want to track breakfast, lunch, dinner and any other snacking separately. Once the user provides these inputs, Red30 asks user to start putting in what they ate in the meal. This means selecting different [[Microsoft Products|products]] and their quantities. For example, one cup of soup and 1/2 sandwich. So this tells us that a meal has several products, which we will call as servings. The user continues to add different servings as needed and then saves the meal. Similarly, in the view diet log use case, the actor is a registered user and the precondition
>
> **[3:05](https://www.linkedin.com/learning/software-design-from-requirements-to-release/prepare-sprint-backlog?u=76281980&t=185)** is that the registered user should be logged in. In basic flow, the user chooses the option to view diet log and Red30 displays a list of all meals logged so far starting with most recent at the top. Now, we have one critical part of these two use cases left to specify, and that is the login functionality. In itself, it is not a use case. But because this functionality is common to all other use cases for registered users, we have pulled it out as an included use case. As a user story, we can state it as a registered user, I want to log in to Red30 system so that I can use special features in the system for registered users. This means as soon as registered users log in, they should be able to see some special features. As use case specification, the registered user, as a primary actor, should have access to Red30 application on the web. In basic flow, the user chooses the login option. Red30 asks user to enter username and password, and if they're correct, Red30 displays special functionalities for registered users. If the username or password are incorrect, then Red30 should ask user to try again. Now we have written out these use cases, let's analyze them to move towards some design. If we look at our record meal use case specification, we can identity some nouns,
>
> **[4:39](https://www.linkedin.com/learning/software-design-from-requirements-to-release/prepare-sprint-backlog?u=76281980&t=279)** such as registered user, and meal. Meal has attributes, date, time and meal type. This gives us our first domain class, meal. Then, continuing further in the use case, we find another one. Serving. We can infer from the text that it is a serving of food product with a certain quantity. So here is another class called serving. Notice that serving is added to meal. So there is a composition relationship between meal and serving. If there is no meal, there is no serving and one serving belongs only to one meal. Continuing with our login use case, we see registered user again that has username and password. So that gives another class, user. At present, we are naming it just as a user. And we also see an association between meal and user because user records the meal. At this point, there are several possibilities. We can create a list of meals in user class or put username in the meal. I chose to do the latter. So this analysis tells us that we need to add three more classes into our system and we can also see that we will need to create all three of them as tables in our database as well.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (2)
> **Definitions:** is a  (5), is an  (1)
> **Documentation:** specification (2)
> **Analogies:** for example (1), such as (1)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### [Implement 'included' use case](https://www.linkedin.com/learning/software-design-from-requirements-to-release/implement-included-use-case?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-design-from-requirements-to-release/implement-included-use-case?u=76281980&t=0)** - [Instructor] As login use case is an included use case on which the other functionalities depend upon, let us first design login functionality. To start with, let us take a look at its UI mockup. This one is simple, we start off with a page in which there are just these links, with one of them being login. Once we choose that, it takes us to login page where we enter username and password, and then once the login is successful, it shows other links, such as record meal, view diet log, et cetera. The sequence diagram for this flow will look like this. User chooses login option from Index, which forwards the request to LoginController, which in turn forwards it to LoginInput JSP. LoginInput JSP takes username and password from user and forwards them to LoginValidator, which then reaches out to Dao to connect with Red30 DB, that has user data for validation. If Dao finds that user credentials match with the ones in database, it creates User object, which will now be used for other use cases. It sends the validation status to LoginResponse, which displays a message about whether login was successful or not. As you can see, the entire flow is in a loop indicating that system will ask user to login until successful. When we think about login, we also need to think about the flow for logout. In larger applications, there may be several activities,
>
> **[1:33](https://www.linkedin.com/learning/software-design-from-requirements-to-release/implement-included-use-case?u=76281980&t=93)** such as logging the date and time when the user signed in or signed out, closing user-specific resources, and updating other user-related data. In this case, all we are doing when the user chooses logout option from Index JSP, the control goes to a servlet named Logout, which gets the session object from request object, and then invalidates the session. Putting all the objects identified above gives us this class diagram. I have created another package, login, inside com.hplussport.red30 package that has three servlets, LoginController, LoginValidator, and LogOut. There is a new method in Dao to validate the user's name and password, and if the credentials are correct, then Dao creates a new user instance, which is a bean. From data model point of view, we need to add one table to our Red30 DB, which is the user table. We have just two fields in the table as of now, username and password. In more complex scenarios, you would need many more parameters, such as role related to access privileges, user preferences, record of logins and logouts, and so on. Let us look at the code now. Earlier, our header JSP had just one set of links for non-registered users. But once the user logs in, then the header has to change to display links for new use cases.
>
> **[3:06](https://www.linkedin.com/learning/software-design-from-requirements-to-release/implement-included-use-case?u=76281980&t=186)** I have enabled this switch in header JSP by splitting the JSP into two parts. In line five, I check if session attribute user is null. If it is, then I display the old set of links from line 19 to 22. If it is not null, then I display another set of links in lines from 42 to 48. So, once the user logs in, the reference in line 22 takes us to LoginController, which is inside login package. LoginController forwards the request to login input JSP. This has a form in line 13 that has two input boxes in line 17 and line 21. These are for username and password. Once the form is submitted, the action takes us to validate, which is the LoginValidator class. This is where the Dao comes in at line 30, validates the username and password, and creates user instance that gets saved as session variable in line 31. Finally, the request is forwarded to login response JSP, which if login was unsuccessful and user object is null, displays the message in line 17, or else if it was successful, the welcome message in line 23. I have already created a table in Red30 DB, which we can look at through [[MySQL]] Workbench. As you can see here, I have added two records
>
> **[4:40](https://www.linkedin.com/learning/software-design-from-requirements-to-release/implement-included-use-case?u=76281980&t=280)** with username and password. Now, let us run our code. For that, I go back to Eclipse, and, as usual, Run As, Run on Server, and wait for initial data load. Now the application is up, so I go into login and enter the username and password based on the data that you just saw, and the login is successful. You can see new links that are meant for registered users. If I log out, then I come back to the page for unregistered users. At this point, we don't want to publish these changes to our production server because our real use cases for recording meals and viewing diet logs are not ready yet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MySQL]] (1)
> **Env Vars:** jsp (8)
> **Definitions:** is a  (2), is an  (1)
> **Analogies:** such as (3)
> **CLI Commands:** mysql (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)

#### [Final release](https://www.linkedin.com/learning/software-design-from-requirements-to-release/final-release?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-design-from-requirements-to-release/final-release?u=76281980&t=0)** - [Instructor] Now that the login use case is ready, we can complete the two dependent use cases, record a meal and view diet log. Let us take a look at the UI mock-up to plan its workflow. After logging in, when I choose record meal option, it takes me to a page where I can enter meal date, time and meal type. If you recall, we decided that meal type can be breakfast, lunch, dinner or snack. Then we enter some search string to find the product that was served in the meal. I see a list of [[Microsoft Products|products]] with each product having a radio button to select. Once I select a product, I need to specify its quantity and unit of measure. The unit of measure is a product's property so it will be displayed. Then we add it to the meal. We can add more products, each product as a serving, and then save the meal. After having saved the meals, I can choose view diet log and it shows all meals recorded between certain dates. Now let us take a look at sequence diagram. As usual, starting from the user selecting the option to add meal from index JSP, the meal controller gets the session and then creates a new empty meal object. It initializes the meal with username and then waits for user to provide more inputs. User creates meal with date, time and meal type,
>
> **[1:35](https://www.linkedin.com/learning/software-design-from-requirements-to-release/final-release?u=76281980&t=95)** which them goes to meal initializer which then forwards it to mealProducts JSP. MealProducts JSP opens up the options to input food products or servings. Continuing with the flow, now user adds different products and their quantities in a loop. User enters a search string to search for food product and selects a product from the list along with entering the quantity. Once the user submits it as a serving, mealProducts JSP passes the control to serving adder, which then creates a new serving and adds it to the meal. This goes on in a loop until user chooses to save the meal, which goes to meal saver, which asks now to save the meal in Red30 DB. The flow and sequence diagram gives us this class diagram, with two new beans, one new method in dow to save the meal and several servlets to record meal as a use case. The dotted arrows between packages indicate package dependencies. So record meal package depends on beans and dow to implement its functionality. The data mode has two new tables, meal and serving, showing the relationship that a meal can belong to only one user and a meal can have many servings. The last use case to view diet log is fairly simple. User chooses the view diet log option.
>
> **[3:08](https://www.linkedin.com/learning/software-design-from-requirements-to-release/final-release?u=76281980&t=188)** And enters the date range. The diet log controller asks dow to find the meal data from Red30 DB, which is then displayed by dietLogResults JSP. Finally, the class diagram shows a new package, dietlog with just one servlet added and one new method, find meals in dow. As usual, I have been writing code while building these models. So if you have been following my previous lessons, you can now understand the code I've provided. So let us just go ahead and run the code. The application is up and running and so I can go to the browser, log in as Carla and I've already added some records just to test the functionality. So if I go to view diet log, I can see some records have been added. Let me add one more meal so that we can test the functionality one more time. So for that, I go to record meal. Pick up a date, so let's say I chose March 3rd. Time. 12:30 p.m. Meal, lunch. And here I say salad. We can see several salads here. Let me pick this one. And you can see that the product unit is already getting displayed here. Some quantity, add to meal. Let me add one more. And then add some juice. This displays the quantity as milliliter.
>
> **[4:43](https://www.linkedin.com/learning/software-design-from-requirements-to-release/final-release?u=76281980&t=283)** Add to meal. And then save. We can see that the meal has been saved. I go to view diet log and shows the meal that was just saved. Now, these two use cases need much more refinement in terms of functionalities. For example, what if the user adds more than one lunch in a day? Should Red30 give a warning or just go ahead? Also, we need to write many more test cases for [[Unit Testing]], [[Integration Testing]], [[Load Testing]], [[Security Testing]], and so on. Such a system needs significant effort in planning and conducting testing activities before we can move it to production. For this case study, let us go ahead and check the code into [[Git]]. I'm back in Eclipse. And if I go into Git staging, I can see all the new files that have been added plus some changes made in older files. Let me stage all of them. And I'm checking into 04-03e. All use cases. Commit and push. Now, I need to merge my new branch into the master. So I'm in my Git folder. Here I say git checkout master.
>
> **[6:11](https://www.linkedin.com/learning/software-design-from-requirements-to-release/final-release?u=76281980&t=371)** This has pulled the master already up to date and I say git merge 04-03, which is the branch I just now created. And then git push origin master. Now one last thing, [[Jenkins]]. Now I'm in Jenkins in DeployRed30 project. I simply say build now. Excellent, our build is successful. Let me go to my production URL. This is the DNS which I got from my [[Amazon EC2|EC2]] management console. I log in here. I've already created the database tables so the user that I had been using in dev is available here as well. So Carla is logged in. I will go ahead and record a meal. And let's say this is for March 4th. Breakfast. And create a meal. And let me just pick. Buttermilk pancakes. Say 50 grams. Add to meal so you can see it is now a serving in my meal. And then I say save meal. The meal is saved. I go to view diet log and I can see the meal has been added. Now we have successful deployed our next product increment.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Git]] (6), [[Microsoft Products|Products]] (4), [[Jenkins]] (2), [[Unit Testing]] (1), [[Integration Testing]] (1)
> **CLI Commands:** git (6), find (3)
> **Env Vars:** jsp (5), url (1), dns (1), ec2 (1)
> **UI Navigation:** go to (6)
> **Code Identifiers:** mealproducts (2), dietlogresults (1)
> **Ports:** :30 (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)

#### [Refactoring](https://www.linkedin.com/learning/software-design-from-requirements-to-release/refactoring?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-design-from-requirements-to-release/refactoring?u=76281980&t=0)** - [Instructor] Software is built to change, and to enable that change without breaking it, one of the most important activities that must be performed while building an application is refactoring. Refactoring means changing internal structure of software to make it easier to understand and cheaper to modify while maintaining its external behavior. Since it is about changing software's internal structure, we can think about in two ways. First, making the code maintainable. This means making it easier to read by following good coding conventions, naming methods and variables meaningfully, moving the code around to help understand the flow, and so on. Second, making the design extensible so that we can keep adding new functionalities and improving its nonfunctional characteristics, such as performance, security, usability, et cetera. A great way to do this is to apply [[Design Patterns]], such as Gang of Four, SOLID, GRASP, and many more. But, before we start refactoring the code, we need to make sure that we do not break something which is already working, and so here are some best practices to keep in mind. Ensure that you have complete test suite ready, and use it to test the application before and after refactoring. Do not add any new features when you are refactoring because this will confuse the issue. Design patterns are great only when used wisely.
>
> **[1:34](https://www.linkedin.com/learning/software-design-from-requirements-to-release/refactoring?u=76281980&t=94)** Do not force them into your design. And, if possible, dedicate a special sprint for refactoring. Now, with these best practices in mind, let us see what we have in Red30. Here is a summary package diagram of what we have developed so far. We started with DataLoader and Dao Dao is central to our application because it helps all of the classes connect to the database. Dao uses beans to encapsulate the data read from the database. Then we have search and compare packages that depend on Dao to get food, product, and nutrients data. Login which uses Dao to get user authentication data, and record meal and diet log packages that need Dao to read and write meal and servings related data. When you see one class catering to so many other packages and classes, you should begin to see some red flags. If you look into Dao, you will see that it is doing almost entire [[Data Processing]] for all used cases in terms of [[Microsoft Products|products]], nutrients, meals, servings, and users. This reveals two big problems. Dao is a highly coupled class because it is talking almost to all of the classes in the application. If I need to make any change in Dao, I might break something or the other somewhere, and because of that, I'll have to perform extensive testing every time I change Dao. Second, the Dao class has very low cohesion.
>
> **[3:10](https://www.linkedin.com/learning/software-design-from-requirements-to-release/refactoring?u=76281980&t=190)** It is trying to do too many things. It is like what is known as a God object. And these two problems are leading to violation of the first solid principle that is single responsibility. According to single responsibility principle, a class should have a single reason to change. Obviously, Dao has too many reasons to change. So, let us fix that by splitting it into multiple classes. One way to do this is to create a data layer with one Dao dedicated for maintaining the database connection, and create other Daos to handle other types of data. So here, I have UserDao that has one validate user method, which handles user data. MealDao, that has methods for saving or reading meals and servings related data, and USDADao that reads the product and nutrients data. I have put all these classes in one package named datalayer. If we make this change, you can see that Dao is much lighter now and couples only with other classes within the datalayer package. Each of the other Daos couple with classes of their respective used cases. UserDao will be used by login classes. MealDao will be used by classes and record meal and diet log packages. And USDADao will be used by classes in search and compare packages. There are many more improvements you can make in the code that I have given to you. For example, you could look into combining some of the servlets and removing code redundancy.
>
> **[4:43](https://www.linkedin.com/learning/software-design-from-requirements-to-release/refactoring?u=76281980&t=283)** Renaming any of the classes, methods, and variables a little more meaningfully, and applying design patterns for future extensibility.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Design Patterns]] (3), [[Data Processing]] (1), [[Microsoft Products|Products]] (1)
> **CLI Commands:** make (5)
> **Definitions:** is a  (2), known as (1)
> **Analogies:** such as (2), for example (1)
> **Env Vars:** solid (1), grasp (1)
> **Warnings:** keep in mind (1)
> **Prerequisites:** before we start (1)
> **Speakers:** - [instructor] (1)

#### [Challenge](https://www.linkedin.com/learning/software-design-from-requirements-to-release/challenge?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-design-from-requirements-to-release/challenge?u=76281980&t=0)** - [Instructor] In this challenge, you need to do two things to complete our project that we started with. First, go through one complete sprint from requirement to release to implement Track Nutrition use case, and then, run through another sprint to refactor your code and design based on the design suggestions I made in my previous lesson. This essentially means creating a data layer and splitting the DAO class into multiple DAOs to lower coupling and increase cohesion. Once you are done, check out my solution in the next video.

> [!info]- Semantic Content
>
> **Env Vars:** dao (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution](https://www.linkedin.com/learning/software-design-from-requirements-to-release/solution-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/software-design-from-requirements-to-release/solution-2?u=76281980&t=1)** - [Instructor] In this challenge you were to do two things: Implement track nutrition use case and then refactor the data layer by splitting the DAO class into multiple DAOs. Let us first go to this sprint for tracking nutrition. The user story is, "As a user, I want to see a trend in the consumption of a nutrient in my meals over time." The UI Mockup I came up with looks like this. Given a range of dates and a nutrient, the UI will show some kind of trend line showing nutrient consumption over time. The sequence diagram has one new servlet, track nutrition controller and one new GSP, track daily nutrients. You will find this flow now very familiar where a user selects track nutrition functionality, which takes the control to track nutrition controller, which takes session attributes from requests and forwards them to track nutrients GSP. Then user provides inputs for the nutrient and dates. JSP asks the controller, which then asks DAO to find nutrition for meals between the given dates. And finally the chart is displayed based on the nutrition map returned by DAO. The class diagram has one new package, track nutrition, with each track nutrition controller servlet. Now let us go to the code. The code that I'm going to show you
>
> **[1:33](https://www.linkedin.com/learning/software-design-from-requirements-to-release/solution-2?u=76281980&t=93)** has the code from our implementation of track nutrition use case, as well as the refactored data layer. So here you can see that I have all these packages, one of which is track nutrition which has the track nutrition controller. In GSP I have a new folder, track, that has track daily nutrients JSP. For refactoring, I have a new data layer package that has DAO, meal DAO, USDA DAO, and user DAO. DAO has just the constructor and GET instance method. All other methods from DAO have been moved to USDA DAO, meal DAO and user DAO, relevant to their use cases as was explained in the previous lesson. I have also moved data layer in this package as it is part of a data layer and because of that I had to make another important change and that is in the web XML file. Web XML has data loader class for load on startup. I had to change its package name as it is now in data layer package and you can see that change in line seven. Now that you're familiar with the entire [[DevOps]] tool chain I created, taking the code from [[Git]] to [[Jenkins]] and then to production. I already completed that part and now it's time to run the application. So I'm production now logged in as Carla. Let me first look at the diet log, and you can see that there is some data
>
> **[3:06](https://www.linkedin.com/learning/software-design-from-requirements-to-release/solution-2?u=76281980&t=186)** starting from 4th of March to 6th of March. Now if I go into track nutrition, I can see that by default it is picking up protein for dates based on the data available as showing some kind of trend. I can take any other nutrient from this dropdown. Let's say I pick calcium and submit. And you can see the trend line looks very similar. Let me try carbohydrate and there is some difference. So this is how we are currently implementing the track nutrition use case. This brings us to the end of this functionality.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DevOps]] (1), [[Git]] (1), [[Jenkins]] (1)
> **Env Vars:** dao (12), gsp (3), jsp (2), usda (2), xml (2)
> **CLI Commands:** find (2), make (1), git (1)
> **UI Navigation:** go to (2), dropdown (1)
> **API Endpoints:** get  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/software-design-from-requirements-to-release/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-design-from-requirements-to-release/next-steps?u=76281980&t=0)** - [Neelam] I hope you enjoyed working on the Red 30 project with me. This was a small scale [[Simulation]] of a project spanning its process from end to end. In trying to keep it simple, I had to forego many activities that are very critical in a real world setting, for example, testing, multithreading, horizontal scaling to improve performance, and use of advanced frameworks and APIs that make development much more efficient and of higher quality. I would encourage you to take the application we built as a foundation and start improving it as you learn all these new and advanced techniques. Wish you all the best.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Simulation]] (1)
> **CLI Commands:** make (1)
> **Analogies:** for example (1)
> **Speakers:** - [neelam] (1)


## Instructor

- [[Neelam Dwivedi]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/Software-Design-Requirements-Release-2825344)

## Skills Covered

- Software Development Life Cycle (SDLC)
- Software Design

## Path Context

### In [[Essential New Skills in Software Engineering]]
← [[GitHub Dependabot- Dependency Updates]] | **4 of 4**

## Appears In

- [[Essential New Skills in Software Engineering]]

## Related Courses

_Courses sharing skills:_

- [[Software Development Life Cycle (SDLC)]] — Software Development Life Cycle (SDLC)
- [[Getting Started With Technology Think Like An Engineer]] — Software Design
- [[Planning and Releasing Software with Jira]] — Software Development Life Cycle (SDLC)

---

[↑ Back to top](#)