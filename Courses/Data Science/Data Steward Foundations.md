---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: data-steward-foundations
url: "https://www.linkedin.com/learning/data-steward-foundations"
duration_minutes: 115
duration: 1h 55m
level: Beginner
updated: 2/12/2024
learners: 13185
skills:
  - Data Governance
  - Data Stewardship
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQE6ppB-UXs8LA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1626889867307?e=2147483647&amp;v=beta&amp;t=WX-_UU79GUX6cycjtM-RDzGBuP28LzGfUENADzKQQMI"
linkedin_topic: Data Science
learning_paths:
  - '[Introduction to Fundamental Skills for Data Work- Data Management](../../Paths/Data%20Science/Learning%20Paths/Introduction%20to%20Fundamental%20Skills%20for%20Data%20Work-%20Data%20Management.md)'
  - '[Mastering Data Governance and Ethics](../../Paths/Data%20Science/Learning%20Paths/Mastering%20Data%20Governance%20and%20Ethics.md)'
prev_courses:
  - '[Secure Data Management for AI Implementation](Secure%20Data%20Management%20for%20AI%20Implementation.md)'
  - '[Learning Data Governance](Learning%20Data%20Governance.md)'
next_courses:
  - null
  - '[Designing Data Governance](Designing%20Data%20Governance.md)'
path_nav: '[{"path":"Introduction to Fundamental Skills for Data Work- Data Management","position":6,"total":6,"prev":"Secure Data Management for AI Implementation","next":null},{"path":"Mastering Data Governance and Ethics","position":3,"total":9,"prev":"Learning Data Governance","next":"Designing Data Governance"}]'
path_count: 2
tags:
  - course
  - topic/data-science
  - topic/database-management
  - skill/data-governance
  - skill/data-stewardship
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Data%20Steward%20Foundations.md)

![Data Steward Foundations](https://media.licdn.com/dms/image/v2/C560DAQE6ppB-UXs8LA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1626889867307?e=2147483647&amp;v=beta&amp;t=WX-_UU79GUX6cycjtM-RDzGBuP28LzGfUENADzKQQMI)

# Data Steward Foundations

> Data stewardship programs help organizations achieve the maximum value from their information assets. In this course, instructor Mike Chapple shows you the basic foundations of data stewardship and best practices for getting your own data stewardship program off the ground. Mike explores the roles, qualities, and responsibilities of a data steward. He goes over best practices for maintaining data 

> [LinkedIn Learning](https://www.linkedin.com/learning/data-steward-foundations) | 1h 55m | Beginner | 13K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Data stewardship](#data-stewardship)
  - [What you need to know](#what-you-need-to-know)
- [**1. Data Stewardship Roles**](#1-data-stewardship-roles) (5 videos)
  - [What is data stewardship?](#what-is-data-stewardship)
  - [Exploring data stewardship roles](#exploring-data-stewardship-roles)
  - [Qualities of a good data steward](#qualities-of-a-good-data-steward)
  - [Data stewardship responsibilities](#data-stewardship-responsibilities)
  - [Obtaining senior leadership support](#obtaining-senior-leadership-support)
- [**2. Maintaining Data Quality**](#2-maintaining-data-quality) (5 videos)
  - [Implementing master data management](#implementing-master-data-management)
  - [Developing data definitions](#developing-data-definitions)
  - [Protecting data quality](#protecting-data-quality)
  - [Validating data quality](#validating-data-quality)
  - [Promoting data reuse](#promoting-data-reuse)
- [**3. Protecting Data Security**](#3-protecting-data-security) (10 videos)
  - [Goals of information security](#goals-of-information-security)
  - [Preserving data confidentiality](#preserving-data-confidentiality)
  - [Protecting data integrity](#protecting-data-integrity)
  - [Maintaining data availability](#maintaining-data-availability)
  - [Identification, authentication, and authorization](#identification-authentication-and-authorization)
  - [Discretionary access controls](#discretionary-access-controls)
  - [Access control lists](#access-control-lists)
  - [Role-based access control](#role-based-access-control)
  - [Managing the data lifecycle](#managing-the-data-lifecycle)
  - [Generative AI](#generative-ai)
- [**4. Preserving Individual Privacy**](#4-preserving-individual-privacy) (4 videos)
  - [Privacy program development](#privacy-program-development)
  - [Generally accepted privacy principles](#generally-accepted-privacy-principles)
  - [Data anonymization](#data-anonymization)
  - [Data obfuscation](#data-obfuscation)
- [**5. Regulatory Compliance**](#5-regulatory-compliance) (6 videos)
  - [Today's regulatory landscape](#todays-regulatory-landscape)
  - [Health Insurance Portability and Accountability Act (HIPAA)](#health-insurance-portability-and-accountability-act-hipaa)
  - [Family Educational Rights and Privacy Act (FERPA)](#family-educational-rights-and-privacy-act-ferpa)
  - [Gramm-Leach-Bliley Act (GLBA)](#gramm-leach-bliley-act-glba)
  - [Data breach notification laws](#data-breach-notification-laws)
  - [International data transfers](#international-data-transfers)
- [**6. Getting Started**](#6-getting-started) (6 videos)
  - [Data inventory](#data-inventory)
  - [Entity-relationship diagrams](#entity-relationship-diagrams)
  - [Data classification](#data-classification)
  - [Interviewing key employees](#interviewing-key-employees)
  - [Following data flows](#following-data-flows)
  - [Data sharing and transfers](#data-sharing-and-transfers)
- [**Conclusion**](#conclusion) (1 videos)
  - [Continuing your studies](#continuing-your-studies)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Data stewardship](https://www.linkedin.com/learning/data-steward-foundations/data-stewardship?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-steward-foundations/data-stewardship?u=76281980&t=0)** - [Mike] Every organization handles an almost overwhelming volume of data on a daily basis. From customer [Databases](../../Skills/Software%20Development/Databases.md) to web traffic logs and from credit card records to employee social security numbers, we're responsible for managing massive amounts of data that's crucial to our businesses and sensitive to our stakeholders. [Data Stewardship](../../Skills/Data%20Science/Data%20Stewardship.md) program set up formal structures for [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) in an organization. These programs address many different aspects of [Data Management](../../Skills/Software%20Development/Data%20Management.md), ranging from the initial collection of data, through its storage, maintenance, security, and proper use. Hi, I'm Mike Chapple. I'm a professor of [Business Analytics](../../Skills/Data%20Science/Business%20Analytics.md), and I've been working in the field of data stewardship for over a decade. It's my pleasure to welcome you to this course on data stewardship. As you progress through this course, you'll learn all of the essential skills required to design, implement, and maintain a data stewardship program for your organization. You'll learn about the role of a data steward, techniques to maintain [Data Quality](../../Skills/Data%20Science/Data%20Quality.md), controls designed to protect [Data Security](../../Skills/Data%20Science/Data%20Security.md), the responsibilities of an organization for protecting personal [Privacy](../../Skills/Data%20Science/Privacy.md), and details of the regulatory and compliance environment surrounding data stewardship. We'll wrap up with a discussion of techniques that you can use to get started with a data stewardship program in your organization. All right, let's get rolling.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Stewardship](../../Skills/Data%20Science/Data%20Stewardship.md) (6), [Databases](../../Skills/Software%20Development/Databases.md) (1), [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) (1), [Data Management](../../Skills/Software%20Development/Data%20Management.md) (1), [Business Analytics](../../Skills/Data%20Science/Business%20Analytics.md) (1)
> **Prerequisites:** set up (1), required to (1)
> **Speakers:** - [mike] (1)

#### [What you need to know](https://www.linkedin.com/learning/data-steward-foundations/what-you-need-to-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-steward-foundations/what-you-need-to-know?u=76281980&t=0)** - [Instructor] I've designed this course with the beginner in mind, and you don't need to have any prior knowledge or experience to find it helpful. Now that said, it will be helpful if you have some familiarity with the ways that your organization collects, stores, and uses different types of data in mind as you work your way through this course. As we discuss different topics in [Data Stewardship](../../Skills/Data%20Science/Data%20Stewardship.md), try to imagine how they fit into the ways that your organization currently works and how your organization might work more effectively in the future. That framework will help you get the most benefit from this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Stewardship](../../Skills/Data%20Science/Data%20Stewardship.md) (1)
> **CLI Commands:** find (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)


### 1. Data Stewardship Roles

[↑ Back to Table of Contents](#table-of-contents)

#### [What is data stewardship?](https://www.linkedin.com/learning/data-steward-foundations/what-is-data-stewardship?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-steward-foundations/what-is-data-stewardship?u=76281980&t=0)** - [Instructor] Managing data is a complex undertaking that requires collaboration across the entire organization. The work of collecting, preserving, securing and maintaining data doesn't fit neatly into our traditional organizational structures. Consider for example the [human resources](../../Skills/Artificial%20Intelligence%20(AI)/Human%20Resources%20(HR).md) data collected by your own organization. You probably have a pretty significant amount of information about your employees collected from their job applications, new hire paperwork, performance management processes, computer activity, and many other sources. Well, who's responsible for that data? It is human resources data, so it probably makes sense for the human resources department to have overall responsibility for the data, but they can't possibly do it alone. Think about the other groups involved in collecting and handling this information. The information technology team certainly plays an important role. They design, implement and manage the systems that store this data. The information security team plays a role in protecting the confidentiality, integrity and availability of that data. Your legal team helps the organization understand the legal and regulatory requirements around processing that data. You may have a data analytics team that also helps protect the quality of the data and helps business leaders use the data to make decisions and the list may go on and on. Balancing all of these diverse interests is the main reason that organizations develop [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) programs that try to clearly outline the lines of authority and responsibility for [Data Management](../../Skills/Software%20Development/Data%20Management.md).
>
> **[1:33](https://www.linkedin.com/learning/data-steward-foundations/what-is-data-stewardship?u=76281980&t=93)** In a data governance program, the organization typically designates a senior leader as the data owner for a particular topic area of data. In the example of our human resources department, the vice president of human resources might be designated as the data owner for employee data. The data owner has ultimate authority over the data, but the nature of their role as a senior leader means that they probably don't have the time or knowledge required to make day-to-day decisions. For this reason, data owners designate a series of data stewards to help carry out their data responsibilities. [Data Stewardship](../../Skills/Data%20Science/Data%20Stewardship.md) programs take their name from this designation and they help ensure that the organization has a clear and consistent process for making decisions about its data. Now, the general term stewardship means a job of supervising or taking care of something, such as an organization or property. And that's exactly what's happening in the world of data stewardship. The organization's data stewards are responsible for taking care of the organization's data. As we work our way through this course, we'll explore the roles and responsibilities of data stewards in more detail, but this high level description will always be our guiding principle: data stewards take care of the organization's data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Human resources](../../Skills/Artificial%20Intelligence%20(AI)/Human%20Resources%20(HR).md) (5), [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) (2), [Data Stewardship](../../Skills/Data%20Science/Data%20Stewardship.md) (2), [Data Management](../../Skills/Software%20Development/Data%20Management.md) (1)
> **CLI Commands:** make (2)
> **Definitions:** is a  (1), means that (1)
> **Analogies:** for example (1), such as (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)

#### [Exploring data stewardship roles](https://www.linkedin.com/learning/data-steward-foundations/exploring-data-stewardship-roles?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-steward-foundations/exploring-data-stewardship-roles?u=76281980&t=0)** - [Instructor] [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) is a complex problem and many different people throughout the organization play a role. Let's take a look at some of the concepts surrounding data ownership and stewardship, as well as security and [Privacy](../../Skills/Data%20Science/Privacy.md). Data controllers are the entities who determine the reasons for processing personal information and direct the methods of processing that data. This term is used primarily in European law, and it serves as a substitute for the term data owner to avoid a presumption that anyone who collects data has an ownership interest in that data. Data processors, are service providers who process personal information on behalf of a data controller. For example, a credit card processing service might be a data processor for a retailer. The retailer retains responsibility as the data controller, but uses the service as a data processor within these two types of organizations, individuals often hold varying roles based upon their responsibilities. We often think of these roles as fitting into a three tiered model. At the highest level, the data owner for a particular data set is a senior level official who bears overall responsibility for that data. The data owners sets policies and guidelines around data use and [Data Security](../../Skills/Data%20Science/Data%20Security.md), and has the authority to make final decisions regarding the data sets under their control. Data owners are usually business leaders who have responsibility for the mission area most closely related to the data set. In the example I gave earlier in this course, an organization's vice president for [human resources](../../Skills/Artificial%20Intelligence%20(AI)/Human%20Resources%20(HR).md) might be the data owner for employment information.
>
> **[1:34](https://www.linkedin.com/learning/data-steward-foundations/exploring-data-stewardship-roles?u=76281980&t=94)** Practically speaking, most individuals who are senior enough to hold the position of data owner, don't have the time available to get involved in the nitty gritty decisions of data governance. And they usually delegate that responsibility to a data steward. The data steward handles the implementation of the high level policies set by the data owner. For example, a data steward might make day-to-day decisions about who may access the data set. In the case of an employee data set, if the data owner is the vice president for human resources, that vice president might delegate [Data Stewardship](../../Skills/Data%20Science/Data%20Stewardship.md) responsibility to a director for HR information services. In most cases, there is a reporting relationship between the data owner and the data steward. Data custodians are the individuals who actually store and process the information in question. Information technology teams often find themselves in the position of data custodian because of their roles as system owners and administrators. Technologists are rarely data owners or data stewards, but they are often data custodians for almost all of the data in the organization due to the nature of their jobs. Data custodians ensure that appropriate data protections are in place, including encryption backups, access controls, and other mechanisms that meet the requirements set forth by data owners and data stewards. In addition to security, data owners have a responsibility to ensure that the organization fulfills its privacy requirements. These requirements may come from legal contractual or ethical obligations.
>
> **[3:07](https://www.linkedin.com/learning/data-steward-foundations/exploring-data-stewardship-roles?u=76281980&t=187)** For example, if an organization stores the social security numbers of employees, the data owners should make sure that those numbers are properly protected and only used for legitimate business purposes. Organizations, subject to the European Union's general data protection regulation, GDPR. Are required to formally identify a specific individual who is responsible for data protection. This person is known as the data protection officer or DPO and has specific responsibilities under European law. GDPR also requires that the organization grant the DPO, the authority to carry out their responsibilities free from intrusion by management.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) (2), [Privacy](../../Skills/Data%20Science/Privacy.md) (2), [Human resources](../../Skills/Artificial%20Intelligence%20(AI)/Human%20Resources%20(HR).md) (2), [Data Security](../../Skills/Data%20Science/Data%20Security.md) (1), [Data Stewardship](../../Skills/Data%20Science/Data%20Stewardship.md) (1)
> **CLI Commands:** make (3), find (1)
> **Env Vars:** gdpr (2), dpo (2)
> **Definitions:** is a  (3), known as (1)
> **Analogies:** for example (3)
> **Cross-References:** earlier in (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)

#### [Qualities of a good data steward](https://www.linkedin.com/learning/data-steward-foundations/qualities-of-a-good-data-steward?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-steward-foundations/qualities-of-a-good-data-steward?u=76281980&t=0)** - [Instructor] Serving as a data steward is a challenging role. Data stewards need to have a strong understanding of their organizations, the subject matter domain over which they will have stewardship responsibilities, and the different areas of [Data Stewardship](../../Skills/Data%20Science/Data%20Stewardship.md) responsibility. Let's take a moment to talk about the qualities that make a good data steward. First, a good data steward is a relationship builder. Data stewards often find themselves in difficult situations where they're being forced to balance competing demands, or even say no to requests from different parts of the organization. These difficult conversations go much better when the data steward has strong working relationships throughout the organization. They have the trust of colleagues from around the organization and a network of preexisting relationships to rely upon when they have to make those tough calls. Along those same lines, a good data steward is collaborative. It's true that data stewards have a lot of authority and discretion in how they carry out their work, but the best data stewards aren't authoritarians who simply lay down the law. Strong data stewards work closely with others in the organization to collaboratively reach solutions to challenges that are in the best interests of the entire organization. Now unfortunately, it's not always possible to reach a consensus on some of the thornier issues surrounding data access, security, [Privacy](../../Skills/Data%20Science/Privacy.md), and related issues. For this reason, good data stewards are also influential respected members of the organization. When they have to make those tough calls, they have both the formal authority
>
> **[1:32](https://www.linkedin.com/learning/data-steward-foundations/qualities-of-a-good-data-steward?u=76281980&t=92)** and the informal influence to make their views known and drive the organization toward achieving their objectives. Serving as a data steward also requires subject matter expertise. Others in the organization will look to the data steward to have a thorough understanding of their functional area and be able to apply that functional knowledge in the context of data decisions. For example, you wouldn't want to have a data steward covering [human resources](../../Skills/Artificial%20Intelligence%20(AI)/Human%20Resources%20(HR).md) data who doesn't understand human resources practices. Finally, data stewards also must have an understanding of the principles of [Data Governance](../../Skills/Data%20Science/Data%20Governance.md). While many organizations consider [Data Management](../../Skills/Software%20Development/Data%20Management.md) a technical activity, the reality is, is that it's a hybrid function where technologists and subject matter experts have to work together. Good data stewards serve as the bridge between these worlds, bringing together technical and functional experts and helping each understand the other's concerns.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Human resources](../../Skills/Artificial%20Intelligence%20(AI)/Human%20Resources%20(HR).md) (2), [Data Stewardship](../../Skills/Data%20Science/Data%20Stewardship.md) (1), [Privacy](../../Skills/Data%20Science/Privacy.md) (1), [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) (1), [Data Management](../../Skills/Software%20Development/Data%20Management.md) (1)
> **CLI Commands:** make (4), find (1)
> **Definitions:** is a  (2)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Data stewardship responsibilities](https://www.linkedin.com/learning/data-steward-foundations/data-stewardship-responsibilities?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-steward-foundations/data-stewardship-responsibilities?u=76281980&t=0)** - [Instructor] Earlier, I summed up the responsibilities of a data steward as taking care of the organization's data. Now, that's a reasonable description of the role, but it's also pretty high level. What does it actually mean to take care of the organization's data? Well, [Data Stewardship](../../Skills/Data%20Science/Data%20Stewardship.md) responsibilities may vary from organization to organization, but we can summarize them as fitting into four general categories: [Data Quality](../../Skills/Data%20Science/Data%20Quality.md), [Data Security](../../Skills/Data%20Science/Data%20Security.md), [Data Privacy](../../Skills/Data%20Science/Data%20Privacy.md), and [Regulatory Compliance](../../Skills/Artificial%20Intelligence%20(AI)/Regulatory%20Compliance.md). Data quality ensures that the organization has accurate, relevant, and timely data to meet its business objectives. Managing data quality requires developing clear data definitions; monitoring data consistency, accuracy, and completeness; validating data quality on an ongoing basis; and promoting data reuse. We'll talk about each of these activities in the maintaining data quality section of this course. Data security protects the confidentiality, integrity, and availability of the organization's data. Data stewards have deep responsibilities for access control. They determine when the organization should enter into data use agreements with third parties and they're responsible for granting release approvals to share information internally and externally. We'll cover common confidentiality, integrity, and availability controls in the protecting data security section of this course. Data privacy ensures that the organization respects the rights and wishes of data subjects, the people whom they collect information about.
>
> **[1:35](https://www.linkedin.com/learning/data-steward-foundations/data-stewardship-responsibilities?u=76281980&t=95)** [Privacy](../../Skills/Data%20Science/Privacy.md) and security are closely related, but they are separate disciplines. We'll discuss data privacy responsibilities and controls in the preserving individual privacy section of this course. Finally, regulatory compliance ensures that the organization meets its legal obligations to protect data. Organizations are subject to a variety of laws and regulations, depending upon the nature of the organization, the types of data that it collects, and the jurisdictions where it operates. Data stewards must understand these obligations and help ensure the organization's compliance. We'll cover some major regulations in the regulatory compliance section of this course. Now, no list of data stewardship responsibilities can be 100% complete. There isn't a universally agreed upon definition of the role and the exact nature of a data steward's job will vary based upon [Organizational Culture](../../Skills/Data%20Science/Organizational%20Culture.md) and needs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) (5), [Data Security](../../Skills/Data%20Science/Data%20Security.md) (3), [Data Privacy](../../Skills/Data%20Science/Data%20Privacy.md) (3), [Regulatory Compliance](../../Skills/Artificial%20Intelligence%20(AI)/Regulatory%20Compliance.md) (3), [Data Stewardship](../../Skills/Data%20Science/Data%20Stewardship.md) (2)
> **Speakers:** - [instructor] (1)

#### [Obtaining senior leadership support](https://www.linkedin.com/learning/data-steward-foundations/obtaining-senior-leadership-support?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-steward-foundations/obtaining-senior-leadership-support?u=76281980&t=0)** - [Instructor] [Data Stewardship](../../Skills/Data%20Science/Data%20Stewardship.md) programs require collaboration across the organization and they can be disruptive to other business activities. Successful programs have senior leadership support as they get started. This support sets the tone for the organization that [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) is an important initiative and that the implementation of the program is an organizational priority. Obtaining the support requires building a strong business case. Senior leaders want to understand the return on their investment. If they dedicate time and money to rolling out a data stewardship program, how will the organization benefit and how will the program advance the objectives of the business? Let's look at some of the key benefits of a strong data governance program that can help you build that business case. First, data governance programs improve the organization's ability to use its own data. Analysis efforts will be faster, more accurate, and they'll deliver greater business value. Data governance programs also build analytic collaboration across the organization. They provide a common language for data efforts and they help diverse units work together to achieve common goals. Third, data governance programs reduce the costs of other data and technology initiatives. They lay the important foundation for these efforts by helping the organization develop consistent data definitions and stores of master data. This smooths the rollout of any other initiative that relies upon this data. And finally, data governance programs help meet the organization's legal
>
> **[1:33](https://www.linkedin.com/learning/data-steward-foundations/obtaining-senior-leadership-support?u=76281980&t=93)** and regulatory obligations. Data stewards protect the organization from legal violations that may result in costly fines and negative publicity. As you roll out or improve your own organization's data governance program, understanding these benefits can help you build a stronger business case and obtain senior leadership support.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) (7), [Data Stewardship](../../Skills/Data%20Science/Data%20Stewardship.md) (2)
> **Definitions:** is an  (2)
> **Speakers:** - [instructor] (1)


### 2. Maintaining Data Quality

[↑ Back to Table of Contents](#table-of-contents)

#### [Implementing master data management](https://www.linkedin.com/learning/data-steward-foundations/implementing-master-data-management?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-steward-foundations/implementing-master-data-management?u=76281980&t=0)** - [Instructor] [Data Management](../../Skills/Software%20Development/Data%20Management.md) is a tricky issue for organizations of all sizes and across all industries. It's really challenging to maintain accurate and consistent data across a wide variety of business functions, and then use that data to effectively achieve business value. To help understand these challenges, let's imagine the business of a large automobile manufacturer and think about the ways that manufacturer might collect information about different people. Of course, the manufacturer has customers who purchase their new cars. These customers come through vehicle dealerships in their local areas where they purchase cars and the company receives information about those customers from the dealer allowing them to track ownership of new vehicles. Now those new car customers eventually sell their cars and each vehicle may have one or more subsequent owners who purchased the car used. Those transactions may or may not be reported back to the manufacturer who then might lose track of who owns one of their vehicles over time. Vehicle repair shops also interact with the manufacturer, providing information about customer repairs, ordering parts and placing claims under vehicle warranties. As part of the repair process, they may feed information about customers back to the manufacturer. Now the company also has a marketing team that purchases mailing lists of potential customers and sends out literature and other advertising targeting new car buyers who might be interested in their [products](../../Skills/Software%20Development/Microsoft%20Products.md). And some people are both employees of the manufacturer, as well as customers purchasing the products
>
> **[1:34](https://www.linkedin.com/learning/data-steward-foundations/implementing-master-data-management?u=76281980&t=94)** that their company produces. Each of these activities collects and generates data about customers, and if all of that data is stored in separate systems, it may become very difficult to maintain over time. If different systems have different data, the manufacturer may have no way of telling which information is accurate and which is incorrect or outdated. That's where master data management, or MDM, comes into the picture. MDM is a [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) discipline that has the goal of maintaining a single source of truth for the most important data elements handled by the organization. This requires a combination of business processes and technology solutions that help keep systems aligned with a single source of truth and maintain the organization's master data. Now organizations adopt MDM for a variety of reasons. In most cases, the organization begins to realize that its data is getting out of control and they want to improve consistency across systems. Organizations may also want to streamline data access and they realize that MDM can help them achieve that goal. Other organizations are driven to adopt MDM when they go through mergers and acquisitions that increase the scope of their business and have to quickly bring together data sources that need reconciliation. And other businesses are subject to policies and regulations that require them to handle data consistently. They're driven to MDM by their compliance obligations.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Management](../../Skills/Software%20Development/Data%20Management.md) (2), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (2), [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) (1)
> **Env Vars:** mdm (6)
> **Definitions:** is a  (2)
> **Analogies:** imagine (1), picture (1)
> **Speakers:** - [instructor] (1)

#### [Developing data definitions](https://www.linkedin.com/learning/data-steward-foundations/developing-data-definitions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-steward-foundations/developing-data-definitions?u=76281980&t=0)** - [Instructor] [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) begins with developing solid data definitions. We can't have consistent data in our organizations unless we have a shared understanding of the meaning of different terms that we use. Now that might sound obvious and simple, but developing these definitions can be a very challenging and time-consuming task. You're likely to discover hidden data issues that you never thought of. Data definitions provide clear, concise descriptions of terms that are available to all stakeholders and then used throughout the organization. They might be for broad, important concepts such as revenue and profit, or for very specific narrow niches, such as the definition of a snap fastener. The nature and number of definitions that you'll need for your organization depends upon your business and your data needs. Together, the collection of data definitions developed by your organization form a data dictionary. This dictionary is a centralized reference available to business analysts, technologists, and other stakeholders to help them ensure that their work is aligned with the organization's master data definitions. Each definition should include some common elements: the term being defined and a definition of that term in language understandable to business users. Now that doesn't necessarily mean that the term has to be defined in plain English, as it may include some business-specific terminology, but it shouldn't use technical jargon. Anyone involved in the business should be able to pick up a definition and understand what it means. The definition may also include some technical details, such as the location of the single source of truth
>
> **[1:33](https://www.linkedin.com/learning/data-steward-foundations/developing-data-definitions?u=76281980&t=93)** for the definition's master data. In some cases, it may include possible values for a term if the term is for a categorical data element, and the definition should also include the identity of the data owner or data steward for the term, as well as other stakeholders. It should also include the [Data Classification](../../Skills/Data%20Science/Data%20Classification.md) and it may include other notes and fields that are useful to the business. Here's the definition that I helped develop at a major university. It defines what it means to be an active student at this university. Now, as you can see in the definition, it reads: an active student is an individual who has been confirmed by an admitting [office](../../Skills/Web%20Development/Microsoft%20Office.md) or other admitting authority as recorded by the university registrar, is considered an active student until he or she graduates, complete the academic term, withdraws or is dismissed, or fails to enroll for a term. Now that might sound complicated, but I assure you there's a good reason behind every single one of those words. The [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the definition contains some of the other fields that we discussed as well as notes on exceptions and specialized use cases. This is just one of the hundreds of data definitions used by the organization. As you develop data definitions, you'll want to work collaboratively with all the stakeholders who might have input into the definition. Getting that input as you develop your definition helps avoid headaches later on if someone objects to the language that you chose. As your data dictionary grows, be careful to avoid overlapping definitions. You'll want to consolidate fields in cases where multiple data fields cover the same topic area.
>
> **[3:07](https://www.linkedin.com/learning/data-steward-foundations/developing-data-definitions?u=76281980&t=187)** And along those same lines, you'll want to standardize the names used for data fields if they differ across business units.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) (1), [Data Classification](../../Skills/Data%20Science/Data%20Classification.md) (1), [Office](../../Skills/Web%20Development/Microsoft%20Office.md) (1), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **Analogies:** such as (3)
> **Definitions:** is a  (1), is an  (1)
> **CLI Commands:** snap (1)
> **Cross-References:** we discussed (1)
> **Warnings:** be careful (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Protecting data quality](https://www.linkedin.com/learning/data-steward-foundations/protecting-data-quality?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-steward-foundations/protecting-data-quality?u=76281980&t=0)** - Master [Data Management](../../Skills/Software%20Development/Data%20Management.md) programs are also charged with maintaining the quality of the data in those single source of truth data stores. After all, if a master data store contains inaccurate information, that inaccurate information will then propagate to affect business processes all across the organization. We track [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) by evaluating it on six different dimensions. These include accuracy, completeness, consistency, timeliness, validity, and uniqueness. Let's dive into each one of those. Data accuracy is what we'd often call the correctness of the data. In our master data stores, we want to make sure that our data accurately reflects the reality of the situation. For example, if we have customer telephone numbers in our database, the data is accurate if those numbers actually are the telephone numbers of our customers. Data completeness means that we have all of the relevant data for a field stored in our master data store. For example, if we have a listing of classes taken by a student, the data is only complete if our master data store includes all of the classes that that student actually took. Data consistency means that the data stored in multiple locations is the same. Master data management seeks to build a single source of truth in an effort to achieve data consistency. We want to reduce or eliminate duplicate data stores, and in cases where we need them, ensure that they are synchronized with the master data store. Data timeliness means that our data is current and not out of date. And once again, thinking about telephone numbers,
>
> **[1:33](https://www.linkedin.com/learning/data-steward-foundations/protecting-data-quality?u=76281980&t=93)** our data is only timely if the telephone number listed in the database remains current. If the customer changes their telephone number and that change isn't reflected in the master data, it's no longer timely. Data validity means that the data meets our requirements and any attribute limitations. For example, a US ZIP code should be either five digits or nine digits with a dash between the fifth and sixth digits. And data uniqueness means that we only have one record for each entity represented in a data set. If the same customer has two different records, that introduces the possibility for error. When checking for data quality, consider the full data life cycle, and look for places where error might be introduced. This begins at [Data Acquisition](../../Skills/Software%20Development/Data%20Acquisition.md). Verify that the data source is reputable, and that you're receiving high quality data from that source. As you ingest data into your systems, it often goes through transformations to fit into your data stores, and it may pass through several systems on its way to the final destination. Make sure that this process doesn't mangle your data as it passes through different conversion steps. And you may also have other [Data Manipulation](../../Skills/Data%20Science/Data%20Manipulation.md) operations that take place during your analysis as you summarize, aggregate, and transform your data. Finally, you present data on reports and [Dashboards](../../Skills/Data%20Science/Dashboards.md). It's up to data stewards and others involved in the reporting process to make sure that this data is high quality and presented accurately.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Management](../../Skills/Software%20Development/Data%20Management.md) (2), [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) (2), [Data Acquisition](../../Skills/Software%20Development/Data%20Acquisition.md) (1), [Data Manipulation](../../Skills/Data%20Science/Data%20Manipulation.md) (1), [Dashboards](../../Skills/Data%20Science/Dashboards.md) (1)
> **CLI Commands:** make (3)
> **Definitions:** means that (3)
> **Analogies:** for example (3)
> **Env Vars:** zip (1)
> **Speakers:** - master (1)

#### [Validating data quality](https://www.linkedin.com/learning/data-steward-foundations/validating-data-quality?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-steward-foundations/validating-data-quality?u=76281980&t=0)** - [Instructor] Let's dig a little deeper into one of the dimensions of [Data Quality](../../Skills/Data%20Science/Data%20Quality.md), data validity. [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) program should perform regular data quality validation, both when bringing new data into the organization and on an ongoing basis, this helps ensure that data remains valid and healthy, and it's ready to provide business value. Some of the techniques that we use to validate data quality, may be automated and performed when bringing new data into our system. If we're loading a data file, we can confirm that the data fields we're loading match our data type requirements. For example, in the last video, I used zip codes as an example of a data field that might have validation requirements. If I'm loading a dataset and I have a requirement that my database should contain nine digit zip codes, and we encounter a record that has only five digits, or it contains alphabetic characters, that's a [Data Validation](../../Skills/Software%20Development/Data%20Validation.md) failure. Similarly, we can compare the number of data points in our source system and the number of data points loaded into our master data store. If we import a transaction log that contains 10,000 records, but only wind up adding 9,500 to our system, something has likely gone wrong. Now, those were just a couple of examples of the types of data quality checks that we might perform. Each of the checks we perform should have associated metrics that allow us to keep track of its status. When we're checking data types, we can track the number of rows that conform to requirements and then report metrics for the percentage of conforming rows and the percentage of nonconforming rows. Similarly, when we're checking other data validation requirements, we can track the number of rows
>
> **[1:32](https://www.linkedin.com/learning/data-steward-foundations/validating-data-quality?u=76281980&t=92)** that pass validity checks and the number of rows that fail those checks. Once we have these metrics, we need to know what we're going to do with them though. Will we allow the partial importing of datasets that have rows that fail to meet validity requirements? We may choose to go ahead and import only the passing rows, or we may choose to reject the entire dataset. That's a business decision that must be made by data stewards in the context of this specific situation. We can also use non-automated methods to check data validity. It's usually not reasonable to check every single record that we bring into our master data stores by hand, but we do have some options available to us. We can sample our dataset to perform spot checks or data audits on a small proportion of rows, if we find errors that may trigger a deeper investigation of the entire dataset. We can also cross validate new data with data that already exists in our system or other systems and flag cases where we have apparent inconsistencies. Human beings can also apply judgment to our data and use a set of reasonable expectations to identify outlier values. For example, if we have a customer record where the age of a living customer is listed as 150 years old, that defies reasonable expectations and it merits investigation. Finally, we can perform data profiling to help us get a better sense of the normal parameters of our dataset, and then use those profiles to help identify outliers in a more automated fashion.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) (4), [Data Validation](../../Skills/Software%20Development/Data%20Validation.md) (2), [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) (1)
> **Analogies:** for example (2)
> **CLI Commands:** find (1)
> **Cross-References:** in the last (1)
> **Speakers:** - [instructor] (1)

#### [Promoting data reuse](https://www.linkedin.com/learning/data-steward-foundations/promoting-data-reuse?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-steward-foundations/promoting-data-reuse?u=76281980&t=0)** - [Instructor] Data definitions and quality validation are two of the harder tasks facing data stewards, but they're also crucial to maintaining a strong master [Data Management](../../Skills/Software%20Development/Data%20Management.md) program. Once you have solid master data, you then have the luxury of moving on to the more fun work of [Data Stewardship](../../Skills/Data%20Science/Data%20Stewardship.md), promoting data reuse. Data stewards should work with their colleagues around the organization to spread the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) about master data stores and the benefits that the organization may achieve by relying upon those master data stores rather than maintaining separate [Databases](../../Skills/Software%20Development/Databases.md) around the organization that may fail on one or more of the six dimensions of [Data Quality](../../Skills/Data%20Science/Data%20Quality.md). One technique that many organizations have adopted is to apply a [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) seal of approval to reports and [Dashboards](../../Skills/Data%20Science/Dashboards.md) that reuse data for master data stores. This approach gives leaders relying upon the data the confidence that they're looking at conclusions drawn from high quality data, and it also helps promote the use of master data throughout the organization.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Management](../../Skills/Software%20Development/Data%20Management.md) (1), [Data Stewardship](../../Skills/Data%20Science/Data%20Stewardship.md) (1), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1), [Databases](../../Skills/Software%20Development/Databases.md) (1), [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) (1)
> **Speakers:** - [instructor] (1)


### 3. Protecting Data Security

[↑ Back to Table of Contents](#table-of-contents)

#### [Goals of information security](https://www.linkedin.com/learning/data-steward-foundations/goals-of-information-security?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-steward-foundations/goals-of-information-security?u=76281980&t=0)** - [Instructor] Information security professionals have broad and important responsibilities for safeguarding the information and systems that are often an organization's most valuable assets. When we think of the goals of information security, we often use a model known as the CIA triad shown here. It highlights the three most important functions that information security performs in an enterprise, Confidentiality, Integrity, and Availability. Each of these is crucial to a strong [Data Stewardship](../../Skills/Data%20Science/Data%20Stewardship.md) program. Confidentiality, ensures that only authorized individuals have access to information and resources. This is what most people think of when they think about information security, keeping secrets away from prying eyes. And it is in fact how [Cybersecurity](../../Topics/Cybersecurity.md) professionals spend the majority of their time. Malicious individuals seeking to undermine confidentiality are said to engage in disclosure, making sensitive information available to individuals or the general public without the owner's consent. Cybersecurity professionals are also responsible for protecting the integrity of an organization's information. This means that there aren't any unauthorized changes to that data. And this goal is closely linked to the data stewardship goal of [Data Quality](../../Skills/Data%20Science/Data%20Quality.md). Unauthorized changes may come in the form of a hacker seeking to intentionally alter information or a service disruption accidentally affecting data stored in the system. In either case it's the cybersecurity professionals responsibility to prevent these lapses in integrity and data stewards must work closely with those cybersecurity
>
> **[1:34](https://www.linkedin.com/learning/data-steward-foundations/goals-of-information-security?u=76281980&t=94)** professionals to achieve the goals of their [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) programs. The final goal of cybersecurity is availability. Ensuring that authorized individuals are able to gain access to information when they need it. If users can't access important business records or systems that lack of availability may have a profound impact on the business. Malicious individuals seeking to undermine availability, engage in attacks, known as denial of service attacks. These attacks try to either overwhelm a system or cause it to crash, denying legitimate users, the access that they need.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Cybersecurity](../../Topics/Cybersecurity.md) (5), [Data Stewardship](../../Skills/Data%20Science/Data%20Stewardship.md) (2), [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) (1), [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) (1)
> **Definitions:** known as (2), means that (1)
> **Env Vars:** cia (1)
> **Speakers:** - [instructor] (1)

#### [Preserving data confidentiality](https://www.linkedin.com/learning/data-steward-foundations/preserving-data-confidentiality?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-steward-foundations/preserving-data-confidentiality?u=76281980&t=0)** - [Instructor] Each [Cybersecurity](../../Topics/Cybersecurity.md) control that we implement is aligned with at least one of the three key objectives of cyber security: confidentiality, integrity, or availability. Let's take a look at some of the controls that security professionals use to enhance confidentiality. One way that we protect the confidentiality of information is preventing people from accessing sensitive information in the first place. Access controls are the primary mechanism for restricting people from seeing data that they shouldn't see. Access controls protect confidentiality by limiting users to accessing only those files and other stored data where they have been granted permission. In the world of access controls, cyber security professionals are often responsible for designing those controls while data stewards may be responsible for actually granting and administering user access. Encryption is also an important security control for enforcing confidentiality. Attackers may try to steal information without going through normal channels. For example, they might attempt to eavesdrop on network communications or remove data from a hard drive by bypassing the operating system and its access controls. Encryption uses mathematical [Algorithms](../../Skills/Software%20Development/Algorithms.md) to transform plain text into cipher text, that is then unintelligible to anyone who doesn't have access to the appropriate decryption key. Encryption plays an important role in protecting data in two different environments. First, encryption protects data at [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md). That's what cyber security professionals call data that's stored on some sort of media or system. Data at rest might be on a local hard drive,
>
> **[1:34](https://www.linkedin.com/learning/data-steward-foundations/preserving-data-confidentiality?u=76281980&t=94)** on a server shared drive, or in a cloud service. Encrypting this data protects it from unauthorized access by requiring that decryption key for a user to gain access to the information. The second data environment is data in motion. That's what cybersecurity professionals call data that's being transmitted over a public or private network. When data is sent over a network, it's subject to eavesdropping by an attacker who has access to that wired or wireless network. Adding encryption to data before transmission protects it from this type of eavesdropping. Information can also be hidden in plain sight to protect it. Steganography is a technique that hides information inside of other files by subtly manipulating the contents of that file. For example steganography may be used to embed a secret message within an image file that is undetectable to the naked eye.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Cybersecurity](../../Topics/Cybersecurity.md) (2), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (2), [Algorithms](../../Skills/Software%20Development/Algorithms.md) (1)
> **Analogies:** for example (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Protecting data integrity](https://www.linkedin.com/learning/data-steward-foundations/protecting-data-integrity?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-steward-foundations/protecting-data-integrity?u=76281980&t=0)** - [Instructor] [Cybersecurity](../../Topics/Cybersecurity.md) professionals also apply controls to protect the integrity of information. As the second leg of the CIA triad, integrity controls ensure that information is not altered without authorization. Integrity controls protect an organization's information from accidental or intentional tampering that may come as a result of many different issues. Integrity failures may result from the intentional alteration of information, such as an employee altering his or her salary or a student altering their grades. They may come from user error, such as a data entry clerk accidentally entering the wrong information in a field. They may come from software or [Hardware](../../Topics/Hardware.md) errors such as an application malfunctioning and writing erroneous data. Or they may come from an act of nature such as a lightning strike that alters information stored on the disk. Hashing is one of the core controls used to protect integrity. A hash function is a mathematical algorithm that computes a unique digest for a file of any length. This digest is like a fingerprint for the file. It's a short piece of data that can uniquely identify the contents of a file and tell if they've been modified. Hashes can easily detect changes in a file. You can compute the hash value of a file today and then compare it to the hash value you compute tomorrow. If the hash value hasn't changed, the file hasn't been modified. If the two hashes are different, you know that the file has changed. Hashes serve as the foundation for many different integrity controls. One of those is digital signatures, a control that helps achieve two different goals: authenticity and nonrepudiation.
>
> **[1:36](https://www.linkedin.com/learning/data-steward-foundations/protecting-data-integrity?u=76281980&t=96)** Authenticity is the ability of one person to prove to another person that the data they sent was received in tact. If you imagine Alice sending a message to Bob, authenticity says that Bob should be able to know confidently that the message actually came from Alice. Nonrepudiation goes a step further and means that the creator of text cannot later dispute that they were the real originator of that text. In the case of Alice sending that message to Bob, nonrepudiation means that Bob can not only be confident that the message is authentic, but Bob can also prove the authenticity of that message to a third party. To create a digital signature, the person signing a document first uses a hash function to create a digest of the data and then encrypts that hash value using their private encryption key. The recipient of a digitally signed message can then use the sender's public key to decrypt the signature and then compute the hash of the message themselves. Then they compare the two hash values. If they match, the message is authentic. Digital signatures can also be used to create digital certificates. Digital certificates are files used to provide a system or individual's public encryption key to previously unknown third parties. Organizations known as certificate authorities create these certificates and then digitally sign them to show that they're authentic.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Cybersecurity](../../Topics/Cybersecurity.md) (1), [Hardware](../../Topics/Hardware.md) (1)
> **Analogies:** such as (4), imagine (1)
> **Definitions:** means that (2), is a  (1), known as (1)
> **Env Vars:** cia (1)
> **Speakers:** - [instructor] (1)

#### [Maintaining data availability](https://www.linkedin.com/learning/data-steward-foundations/maintaining-data-availability?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-steward-foundations/maintaining-data-availability?u=76281980&t=0)** - [Instructor] Security professionals also apply security controls that protect the availability of information and systems. As the third leg of the CIA triad, availability controls ensure that information and systems remain available to authorized users when needed. They protect against disruptions to normal system operation or data availability. Potential availability failures may result from malicious attackers, such as those conducting a denial of service attack to bring down a website, from component failures, such as the failure of a hard drive or power supply, from application failures such as errors in code that cause a crash, or utility failures such as a power outage that disrupt systems or a network disruption that prevents internet access. There are many controls that protect the availability of systems and information. One example of an availability control, the use of redundant system components such as including two power supplies in a server or having extra hard drives using RAID technology. Another example is the use of high availability systems that have multiple servers dedicated to the same purpose so that if one server fails, the others may continue carrying the load. And the more general category of fault tolerance ensures that IT services remain functioning even when small failures occur. Keeping operating systems and applications patched to current levels ensures that any flaws identified by the manufacturer are corrected promptly. This not only protects your system from vulnerabilities that might allow an attacker to gain access, but it also corrects issues that may cause that system
>
> **[1:33](https://www.linkedin.com/learning/data-steward-foundations/maintaining-data-availability?u=76281980&t=93)** to crash disrupting availability.

> [!info]- Semantic Content
>
> **Analogies:** such as (5)
> **Env Vars:** cia (1), raid (1)
> **Speakers:** - [instructor] (1)

#### [Identification, authentication, and authorization](https://www.linkedin.com/learning/data-steward-foundations/identification-authentication-and-authorization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-steward-foundations/identification-authentication-and-authorization?u=76281980&t=0)** - [Instructor] As data stewards, one of the most important things that we do is ensure that only authorized individuals gain access to information, systems and networks under our protection. The access control process consists of three steps that you need to understand. These steps are identification, authentication and authorization. During the first step of the process, identification, an individual makes a claim about their identity. The person trying to gain access doesn't present any proof at this point. They simply make an assertion. Now it's important to remember that the identification step is only a claim and the user could certainly be making a false claim. Imagine a physical world scenario where you want to enter a secure [office](../../Skills/Web%20Development/Microsoft%20Office.md) building where you have an appointment. During the identification step of the process, you might walk up to the security desk and say, "Hi, I'm Mike Chapell." Now proof comes into play during the second step of the process, authentication. During the authentication step, the individual proves their identity to the satisfaction of the access control system. In our office building example, the guard would probably want to see my driver's license to confirm my identity. Now just proving your identity isn't enough to gain access to a system. The access control system also needs to be satisfied that you are allowed to access the system. That's the third step of the access control process, authorization. In our office building example, the security guard might check a list of that day's appointments to see if it includes my name. So far, we've talked about identification, authentication and authorization
>
> **[1:32](https://www.linkedin.com/learning/data-steward-foundations/identification-authentication-and-authorization?u=76281980&t=92)** in the context of gaining access to a building. Let's talk about how they work in the digital world. When we go to log into a system, we most often identify ourselves by using a username, probably composed of some combination of the letters from our name. When we reach the authentication phase, we're commonly asked to enter a password. Now there are many other ways to authenticate, including very strong authentication mechanisms, but those are beyond the scope of this course. What you need to know is that authentication is proving your identity. Finally, in the digital world, authorization often takes the form of access control lists that itemize the specific file system permissions granted to an individual user or group of users. Users proceed through the identification, authentication and authorization processes when they request access to a resource. In addition to this process, access control systems also provide accounting functionality that allows administrators to track user activity and reconstruct it from logs. Together, the activities of authentication, authorization and accounting are commonly described as Triple A. As you design access management programs, you'll need to think about the mechanisms that you use to perform each of these tasks. You'll also want to consider the environment supported by identity and access management mechanisms. In a modern computing environment where organizations combine resources from both cloud and on-premise systems, you'll want an identity and access management program that can work across both environments.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Office](../../Skills/Web%20Development/Microsoft%20Office.md) (3)
> **CLI Commands:** make (1)
> **UI Navigation:** go to (1)
> **Analogies:** imagine (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Discretionary access controls](https://www.linkedin.com/learning/data-steward-foundations/discretionary-access-controls?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-steward-foundations/discretionary-access-controls?u=76281980&t=0)** - [Instructor] Discretionary access control systems, or DAC systems, offer a flexible approach to authorization, allowing users to assign access permissions to other users. The owners of files, computers, and other resources have the discretion to configure permissions as they see fit. Discretionary access control systems are the most common form of access control because they provide organizations with much needed flexibility. Imagine if users in your organization didn't have the ability to assign file rights to other users as needed, and IT had to be involved in every request. That would certainly make life difficult, wouldn't it. Let's take a look at an example of a discretionary access control system. Imagine that we have a file containing information on some of the organizations employees. Alice, an analyst within [human resources](../../Skills/Artificial%20Intelligence%20(AI)/Human%20Resources%20(HR).md) created this file, and the operating system recognizes her as the file owner. Alice however created this file at Bob's request, and she wants Bob to have permission to do everything that she can do, so Alice gives Bob full control permission over that file. Alice also knows that Carol needs to occasionally make updates to the file, so she assigns Carol read and write permission. Bob want his boss, Tracy, to be able to look at the file as well, but he doesn't want Tracy to make modifications to the file. Since Bob has full control of the file, he can also set permissions for other users, so he goes ahead and grants Tracy permission,
>
> **[1:35](https://www.linkedin.com/learning/data-steward-foundations/discretionary-access-controls?u=76281980&t=95)** Tracy and Carol can't modify these file permissions because they're not the file owners, and they don't have full control over the file. This is a great example of a discretionary access control system. In this case, Alice and Bob both have the discretion to change the permissions on the file as they see fit. In a mandatory access control scenario on the other hand, Alice and Bob would not have the ability to grant other users access to the file. Permissions will be set by the operating system based upon the file's classification. The NTFS file system access control model used on [Windows](../../Glossary/Service/Windows.md) disks is one of the most common examples of a discretionary access control system. It allows users who own a file to assign each other various permissions. We'll look more at NTFS access control lists in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Human resources](../../Skills/Artificial%20Intelligence%20(AI)/Human%20Resources%20(HR).md) (1), [Windows](../../Glossary/Service/Windows.md) (1)
> **CLI Commands:** make (3)
> **Env Vars:** ntfs (2), dac (1)
> **Analogies:** imagine (2)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [Access control lists](https://www.linkedin.com/learning/data-steward-foundations/access-control-lists?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-steward-foundations/access-control-lists?u=76281980&t=0)** - [Presenter] In a discretionary access control system resource owners have the ability to set and modify permissions for other users of the system. File owners manage file system permissions by the creation of access control lists. An access control list is simply a table containing usernames and the permissions granted to each user on a resource. For example, I might own a file on a computer governed by a discretionary access control system and decide that I want other users to access my file. I might grant one user the ability to edit the file and a large group of users the ability to read that file, each of those decisions would require an entry on an access control list. The NTFS file system used by [Windows](../../Glossary/Service/Windows.md) implements access control lists and allows users to assign a variety of permissions. Full control is just what the name implies. The user can perform any action on the file or folder. Read permission allows the user to view the contents of the file while read an execute permission goes beyond read permission and also allows the user to run executable programs. Write permission allows the user to create files and add data to them and modify goes beyond that to allow the user to delete files. It also adds read and execute permissions not already present in the write permission group. Let's take a look at an example. Suppose we have a file of employee information and we want to set up access for four users. Alice should be the owner of the file,
>
> **[1:34](https://www.linkedin.com/learning/data-steward-foundations/access-control-lists?u=76281980&t=94)** Bob should have full control of it, Tracy should have read only access and Carol should have read/write access to the file. We'll go ahead and do this on a real [Windows Server](../../Skills/Network%20and%20System%20Administration/Windows%20Server.md). Here is a folder containing that employee's file. If I right click on this file and choose properties from the pop-up menu, I see some general information about the file. I'm interested in security settings so I'm going to go ahead and click on the security tab. Now, the first thing that I want to do is set Alice as the file owner. I do that by clicking advanced which opens the files advanced security settings. Here you can see that the administrator currently owns the file. I'm going to click the change link and now I'd like to change this so that Alice owns the file. I'm going to go ahead and just type Alice in and then use check names which auto completes it to Alice Jones, my user and then I'm going to click Ok. That completes the change and now you can see that Alice Jones owns the file. Now I also want to make Alice's life easier. So I want to give her explicit full control of the file. I can do this back here in the permissions dialogue by going ahead and clicking the add button. The principle is the user object that's going to receive those permissions. So I click Select a Principle and then just type in Alice's name again. And now she's selected as the principal and I'd like her to have full control of the file So I'm just going to click that full control box
>
> **[3:09](https://www.linkedin.com/learning/data-steward-foundations/access-control-lists?u=76281980&t=189)** and then click the Ok button. Now we can see that Alice has full control of the file. The second user that I want to have permissions is Bob. Now Bob won't be the file owner but he should also have full control. So I'm going to repeat that process with Bob's account. I'm going to add a new entry to the access control list for Bob. And I'm going to go ahead and give him full control of the file. Now, Tracy on the other hand should only be able to read the file. So let's go ahead and create an access control entry for her. I'm going to add another one. I'm going to click Select Principal and type in Tracy's name this time. Confirm that that's okay and I can see here that the default is to give her both read and read and execute permissions. Now I only want her to have read permission so I'm going to unselect read and execute and click Ok. And now I can verify the Tracy has read permission to the file. Finally, I want to give Carol read and write and execute permissions. So let's create her entry. We'll select her principal and then we'll just add right to make sure that she now has read, read and execute and write permissions. If you now look at the permissions dialogue, you can see that we have to establish the desired set of permissions. That's the power of discretionary access control. I didn't need to modify the file attributes or account rules to make this work. As the file owner or the system administrator, I have the discretion to set whatever permissions
>
> **[4:44](https://www.linkedin.com/learning/data-steward-foundations/access-control-lists?u=76281980&t=284)** I deem appropriate.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Windows](../../Glossary/Service/Windows.md) (1), [Windows Server](../../Skills/Network%20and%20System%20Administration/Windows%20Server.md) (1)
> **CLI Commands:** make (3)
> **UI Navigation:** click on (2)
> **Env Vars:** ntfs (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [presenter] (1)

#### [Role-based access control](https://www.linkedin.com/learning/data-steward-foundations/role-based-access-control?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-steward-foundations/role-based-access-control?u=76281980&t=0)** - [Instructor] Role-based access control systems simplify some of the work of managing authorizations. Instead of trying to manage all of the permissions for an individual user, administrators create job-based roles and then assign permissions to those roles. They can then assign users to groups that correspond to those roles as well. Now this is a little more work up front, but it makes life much easier down the road. When a new user arrives, administrators don't need to figure out all the explicit permissions that user requires. The user just needs to be added to the appropriate groups and all of the permissions will follow. Similarly, when a group of users needs a new permission, the administrator doesn't need to apply it to all of the individual users. The permission can be assigned to the group and all users with that role will receive the permission automatically. Let's look at an example. Imagine Alice Jones comes to our company as a new supervisor in the accounting department. As part of her job, she needs to handle all the work of an accounting clerk. Now, administrators can go ahead and assign her to the accounting clerk group and she will automatically receive all related permissions. She'll also inherit changes as the permissions assigned to that group change. Alice might also need advanced privileges reserved for accounting supervisors, so administrators can also assign her to that role. With these two role assignments in this example, Alice received six permissions and her permissions will change with those roles as the business needs change.

> [!info]- Semantic Content
>
> **Definitions:** is a  (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### [Managing the data lifecycle](https://www.linkedin.com/learning/data-steward-foundations/managing-the-data-lifecycle?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-steward-foundations/managing-the-data-lifecycle?u=76281980&t=0)** - [Instructor] The data life cycle is a useful way to understand the process that data goes through within an organization. It covers everything from the time that data is first created until it's eventually destroyed. You can think of the life cycle as a way of viewing the data journey from cradle to grave. In the first stage of the life cycle, create, the organization generates new data, either in an on-premises system or in the cloud. The create stage also includes modifications to existing data. From there, the second stage of the life cycle is store. In this stage, the organization places the data into one or more storage systems. Again, these storage systems may be either on-premises or with the cloud service provider. The next stage, use, is where the active use of data occurs. Users and systems view and process data in this stage. In the fourth stage, share, data is made available to others through one or more sharing mechanisms. This might include providing customers with a link to a file, modifying access control so that other employees can view the file or similar actions. When the data is no longer being actively used, it moves on to the fifth stage, archive. In this stage, data is retained in long-term storage where it's not immediately accessible, but it can be restored to active use if necessary. And in the final stage of the life cycle, data is eventually destroyed when it's no longer needed. This destruction should take place using a secure disposal method.
>
> **[1:34](https://www.linkedin.com/learning/data-steward-foundations/managing-the-data-lifecycle?u=76281980&t=94)** Let's dig into this last stage of the data life cycle a little more deeply. Data destruction must be done in a secure manner to avoid situations where an attacker obtains paper or electronic media, and then manages to reconstruct sensitive data that still exists on that media in some form. The National Institute for Standards and Technology provides a set of guidelines for secure media sanitization in special publication 800-88. It includes three different activities for sanitizing electronic media. Clearing is the most basic sanitization technique and it consists of simply writing new data to the device that overwrites sensitive data. Clearing is effective against most types of casual analysis. Purging or wiping is similar to clearing, but it uses more advanced techniques and it takes longer. Purging might use cryptographic functions to obscure media on disc. Purging also includes the use of degaussing techniques that apply strong magnetic fields to securely overwrite data. Destroying is the ultimate type of data sanitization. You shred, pulverize, melt, incinerate, or otherwise completely destroy the media so that it's totally impossible for someone to reconstruct it. The downside of destruction of course, is that you can't reuse the media as you would with clearing or purging. Here's a flowchart that can help you make decisions about what type of sanitization technique to use. It comes from the [NIST](../../Skills/IT%20Help%20Desk/NIST.md) guidelines and it's widely used throughout government and industry. You begin the flow chart at one of three locations,
>
> **[3:10](https://www.linkedin.com/learning/data-steward-foundations/managing-the-data-lifecycle?u=76281980&t=190)** depending upon what classification of information was on the media. And then you walk through a series of decision points based upon whether you plan to reuse the media and whether it will leave your organization. The flow chart then leads you to advice on clearing, purging or destroying the media. You should also destroy paper records when they reach the end of their useful life. And you have some different options at your disposal here. Paper records may be shredded using a cross-cut shredder that cuts them into very small pieces that would be very difficult to reassemble. Pulping uses chemical processes to remove the ink from paper and return it to pulp form for recycling into new paper [products](../../Skills/Software%20Development/Microsoft%20Products.md). And paper can be incinerated although burning paper is less environmentally friendly because it creates carbon emissions and unlike pulping or shredding, burned paper can't be recycled. If you don't want to handle data sanitization and destruction yourself, there are third party services available that offer outsource data destruction services. While we do describe this process as a life cycle, it's important to note that the stages of the life cycle are not always followed in order and not all of them occur for every piece of data. For example, it's possible to create new data in memory, use it there and then destroy it without ever storing it in a repository. Similarly, data might be permanently retained in active storage and never reach the archive or destroy stages. However, the life cycle is still a useful model for understanding the different stages of data life.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [NIST](../../Skills/IT%20Help%20Desk/NIST.md) (1), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1)
> **Analogies:** similar to (1), for example (1)
> **CLI Commands:** make (1)
> **Env Vars:** nist (1)
> **Definitions:** is a  (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Generative AI](https://www.linkedin.com/learning/data-steward-foundations/generative-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-steward-foundations/generative-ai?u=76281980&t=0)** - [Instructor] [Generative AI](../../Skills/Artificial%20Intelligence%20(AI)/Generative%20AI.md) is at the forefront of a technological revolution. It's a branch of [artificial intelligence](../../Topics/Artificial%20Intelligence%20(AI).md) that, as the name suggests, generates new data. This is a significant shift from [Traditional AI](../../Skills/Artificial%20Intelligence%20(AI)/Traditional%20AI.md) models that primarily focused on understanding or interpreting existing data. Generative AI uses advanced [Algorithms](../../Skills/Software%20Development/Algorithms.md) to learn from vast amounts of data, recognizing underlying patterns, structures, and features. Once you have a model that understands that data, it can then produce entirely new content that is sometimes nearly indistinguishable from human-generated data. This ability of generative AI to create novel content has wide-ranging applications and implications. It's not just about creating data, it's about creating value experiences, and sometimes even art. From writing software code to composing music, from designing virtual environments to generating realistic images and text, the possibilities are nearly limitless. The power of generative AI lies in its ability to learn from existing data and use that learning to generate something new and sometimes something unexpected. To illustrate the capabilities of generative AI, let's consider two examples. First, [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md) is a large language model developed by Open AI. It can converse, answer questions, write essays, and even create poetry. What makes ChatGPT unique is its ability to understand and respond to natural language inputs in a way that's remarkably human-like.
>
> **[1:36](https://www.linkedin.com/learning/data-steward-foundations/generative-ai?u=76281980&t=96)** This ability stems from its training on a diverse range of internet text. ChatGPT is an example of how generative AI is transforming the way that we interact with machines, making them more accessible and useful for a broader range of tasks. Let's try an example of using ChatGPT to create some text. Let's say that I'd like to write a marketing email that I can use to promote a sale that my car dealership is having on used cars over the 4th of July weekend. I'm just going to write a message to ChatGPT asking it to do just that. Let's say, "Write a marketing email promoting the fact that my car dealership is having an exclusive one-time sale this weekend on used cars." Let's see what it comes up with. As you can see, ChatGPT, since it's learned from so many different sources, takes on the tone that a used car dealer might use in their email. As it's going through and writing this email, I notice it's left some details out. I didn't tell it the name of my car dealership, so it's left a placeholder there, but it's going and creating a pretty nice marketing email that looks like the many that flood my inbox, and all I had to do was ask for a marketing email. Let's go ahead and give it a little more information. I'm going to go ahead and tell ChatGPT the name of my dealership is Mike's Cars, and the sale runs over the 4th of July. Also, please make the email a little shorter.
>
> **[3:11](https://www.linkedin.com/learning/data-steward-foundations/generative-ai?u=76281980&t=191)** I'd like it to fit on one screen. Now we have a more customized email. This is just an example of how we can do this back and forth conversation with ChatGPT to fine tune the results and come to the content that we'd like. [DALL-E](../../Skills/Software%20Development/DALL-E.md), also by Open AI, is an AI that generates images from textual descriptions. DALL-E can create pictures of things that don't necessarily even exist in the real world, combining concepts and objects in novel and sometimes surreal ways. For instance, DALL-E can create an image of a two-headed flamingo or a surreal painting of a futuristic cityscape. The implications of this technology are profound, not just for art and design, but for how we conceptualize creativity itself. DALL-E is integrated with ChatGPT, so we can go ahead and write a ChatGPT prompt that will use DALL-E to create an image. Let's continue with my car dealership theme and say that I'd like to have an image that I can use at the header of my email. I'm going to say, "Create an image that would be interesting and useful at the top of a marketing email for used cars that are on sale over the 4th of July weekend." ChatGPT then says "creating an image", so it's leveraging the DALL-E model as it goes and creates this image, as opposed to the [GPT-4](../../Skills/Artificial%20Intelligence%20(AI)/GPT-4.md) model that was used to create text earlier. And there we have an image
>
> **[4:45](https://www.linkedin.com/learning/data-steward-foundations/generative-ai?u=76281980&t=285)** that could be used at the top of the email. As you can see, it did bring in the theme of the 4th of July with red, white, and blue colors, and it certainly gives the image of a car sale, but we have a few oddities here. For example, one car is parked on the windshield of another car, and we have some text there that isn't quite English, but we can fine tune this model to make it a little better. Let's go ahead and try that. Give me three more examples that don't use any text. Well, the first image is much better. It doesn't have any of that weird text in it. We've got, again, the 4th of July theme. The one thing I noticed that is a little bit unusual is that we have an American flag that consists only of a blue flag with white stars on it, but we're getting closer to an image that we could use. The second image is a nighttime theme with fireworks that offhand looks pretty good to me, and the third image created by a model has a little bit more of an animated theme showing a family going and shopping for cars. We do have some people standing on the hood of a car and some cars that are decorated with the American flag, but as you can see, we can continue working with DALL-E and ChatGPT to fine tune our request and come up with an image that perfectly matches our needs. Now let's talk about the impact of these technologies on [Data Stewardship](../../Skills/Data%20Science/Data%20Stewardship.md). The emergence of generative AI challenges traditional notions of [Data Management](../../Skills/Software%20Development/Data%20Management.md). As data stewards, we're not only tasked with managing and securing data, but also with understanding the implications of AI-generated data. First, the influx of AI-generated content adds complexity to [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) assurance.
>
> **[6:20](https://www.linkedin.com/learning/data-steward-foundations/generative-ai?u=76281980&t=380)** Distinguishing between human-generated and AI-generated data, ensuring the accuracy and reliability of information and validating sources become paramount. Data stewards must adapt their strategies to encompass these new data generation techniques, ensuring that data generated by AI meets the quality standards expected in their field. Second, [Data Security](../../Skills/Data%20Science/Data%20Security.md) and [Privacy](../../Skills/Data%20Science/Privacy.md) concerns are heightened with generative AI. AI can create realistic representations of personal or sensitive information, blurring the lines between real and AI-generated data. This raises significant concerns about consent, privacy, and the ethical use of data. Data stewards need to be at the forefront of these issues, establishing robust protocols to protect [Data Privacy](../../Skills/Data%20Science/Data%20Privacy.md) and adhere to ethical standards. Finally, the role of data stewards needs to evolve to include guiding the ethical use of AI-generated data. Data stewards must ensure that AI is not perpetuating biases or misinformation, and that the use of AI models aligns with organizational and societal values. This involves understanding the limitations and potential biases in AI models and actively working to mitigate them. Generative AI is reshaping the landscape of data creation and management. As data stewards, we must embrace this technology, understand its implications, and adapt our practices to ensure responsible and ethical management of AI-generated data. The future of data stewardship in an AI driven world is not just about managing data, but also about stewarding the relationship between humans, data, and machines.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md) (12), [Generative AI](../../Skills/Artificial%20Intelligence%20(AI)/Generative%20AI.md) (9), [DALL-E](../../Skills/Software%20Development/DALL-E.md) (7), [Data Stewardship](../../Skills/Data%20Science/Data%20Stewardship.md) (2), [Privacy](../../Skills/Data%20Science/Privacy.md) (2)
> **Env Vars:** dall (7), gpt (1)
> **Definitions:** is a  (4), is an  (2)
> **CLI Commands:** make (2)
> **Analogies:** for instance (1), for example (1)
> **Speakers:** - [instructor] (1)


### 4. Preserving Individual Privacy

[↑ Back to Table of Contents](#table-of-contents)

#### [Privacy program development](https://www.linkedin.com/learning/data-steward-foundations/privacy-program-development?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-steward-foundations/privacy-program-development?u=76281980&t=0)** - [Instructor] [Data Privacy](../../Skills/Data%20Science/Data%20Privacy.md) is one of the key pillars of [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) and data owners and stewards must act to protect the [Privacy](../../Skills/Data%20Science/Privacy.md) of personal information entrusted to their care. This requires a strong understanding of the principles of data privacy, as well as the willingness and ability to enforce those principles wherever data is collected, stored, processed, and transmitted by the organization. As an organization establishes its privacy program. It should begin by documenting a privacy policy. This is an external facing document that explains the organization's privacy practices to data subjects and other stakeholders. The privacy policy is normally published on an organization's website and it's written through a collaboration of privacy professionals and attorneys to ensure that it satisfies any legal obligations the organization may have. The organization should also develop an acceptable Use Policy. This policy is an internal policy that sets expectations for how the organization will handle data and explains privacy responsibilities to employees who will handle personally identifiable information. Now with those building blocks in place, the organization may move forward and build out the mechanisms required to implement a privacy program. We'll talk more about the privacy principles that the program should enforce in the next video, but you'll need some systems in place to implement those principles. For example, you'll need procedures for distributing privacy notices to data subjects, mechanisms for tracking user preferences, including opt-ins and opt-outs
>
> **[1:32](https://www.linkedin.com/learning/data-steward-foundations/privacy-program-development?u=76281980&t=92)** and logging and auditing facilities that provide [Accountability](../../Skills/Data%20Science/Accountability.md) for user actions when handling personally identifiable information.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Privacy](../../Skills/Data%20Science/Privacy.md) (10), [Data Privacy](../../Skills/Data%20Science/Data%20Privacy.md) (2), [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) (1), [Accountability](../../Skills/Data%20Science/Accountability.md) (1)
> **Prerequisites:** you'll need (2), required to (1)
> **Definitions:** is an  (2)
> **Cross-References:** in the next (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Generally accepted privacy principles](https://www.linkedin.com/learning/data-steward-foundations/generally-accepted-privacy-principles?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-steward-foundations/generally-accepted-privacy-principles?u=76281980&t=0)** - [Instructor] All of the stakeholders in a [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) program bear responsibility for protecting the [Privacy](../../Skills/Data%20Science/Privacy.md) of personal information under their care throughout the information lifecycle. Now, this private information may come in many [Forms](../../Skills/Web%20Development/Forms.md). Two of the most common elements of private information are Personally Identifiable Information or PII and Protected Health Information or PHI. PII includes all information that can be tied back to a specific individual, while PHI includes healthcare records that are regulated under the Health Insurance Portability and [Accountability](../../Skills/Data%20Science/Accountability.md) Act, HIPAA. The Generally Accepted Privacy Principles, or GAPP, are 10 components of [Data Privacy](../../Skills/Data%20Science/Data%20Privacy.md) that can be used to help organizations design their own privacy programs. The GAPP principles were developed through a collaboration between four major industry organizations, the American Institute of Certified Public Accountants, the Canadian Institute of Chartered Accountants, the Information Systems Audit and Control Association, and the Institute of Internal Auditors. The first of the 10 GAPP principles is management. This principle states that an organization handling private information should have policies, procedures, and governance structures in place to protect privacy. For example, the organization should clearly define the roles of data owner, data steward, and data custodian. The second GAPP principle is notice. Anyone who is the subject of records maintained by the organization
>
> **[1:33](https://www.linkedin.com/learning/data-steward-foundations/generally-accepted-privacy-principles?u=76281980&t=93)** should receive notice of that fact as well as access to the privacy policies and procedures followed by the organization. This is often accomplished through the terms of agreement for a website and a formal privacy notice. The third GAPP principle is choice and consent. The organization should inform data subjects of their options regarding the data they own and get consent from those individuals for the collection, storage, use, and sharing of that information. The fourth GAPP principle is collection. The organization should only collect personal information for purposes disclosed in their privacy notices. The fifth principle is use, retention, and disposal. When the organization collects personal information, it should only use it for disclosed purposes and not use it for other reasons just because they already have the data. Additionally, the organization should dispose of the data securely as soon as it is no longer needed for the disclosed purpose. The sixth GAPP principle is access. Organizations should provide data subjects with the ability to review and update their personal information. The seventh GAPP principle surrounds disclosure to third parties. The organization should only share information with third parties if that sharing is consistent with the purposes disclosed in privacy notices and they have the consent of the individual to share that information. The eighth GAPP principle is security. The organization must secure private information against unauthorized access.
>
> **[3:07](https://www.linkedin.com/learning/data-steward-foundations/generally-accepted-privacy-principles?u=76281980&t=187)** The ninth GAPP principle is quality. The organization should take reasonable steps to ensure that the private information they maintain is accurate, complete, and relevant. And finally, the 10th GAPP principle is monitoring and enforcement. The organization should have a program in place to monitor compliance with its privacy policies and provide a dispute resolution mechanism. Each of these 10 GAPP principles plays an important role in developing a comprehensive information privacy program. Data owners should ensure that they are followed for each element of personal information under their control. If you're looking for more detailed control objectives, the International Organization for Standardization offers ISO standard 27018. This standard provides a code of practice for the protection of Personally Identifiable Information in public cloud environments. Organizations developing and monitoring their privacy program should conduct regular privacy impact assessments to identify the privacy ramifications of their [Business Operations](../../Skills/Data%20Science/Business%20Operations.md).

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Privacy](../../Skills/Data%20Science/Privacy.md) (13), [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) (1), [Forms](../../Skills/Web%20Development/Forms.md) (1), [Accountability](../../Skills/Data%20Science/Accountability.md) (1), [Data Privacy](../../Skills/Data%20Science/Data%20Privacy.md) (1)
> **Env Vars:** gapp (12), pii (2), phi (2), hipaa (1), iso (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Data anonymization](https://www.linkedin.com/learning/data-steward-foundations/data-anonymization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-steward-foundations/data-anonymization?u=76281980&t=0)** - [Instructor] One way that many organizations seek to protect themselves against accidental disclosures of personal information is to remove all identifying information from data sets before placing them in the cloud or with another service provider. De-identification is the process of moving through a data set and removing data that may be individually identifying. For example, you would certainly want to remove names, social security numbers, and other obvious identifiers. However, simple data de-identification is often insufficient to completely safeguard information. The reason for this is that you can often combine seemingly innocuous fields to uniquely identify an individual. A study done at Carnegie Mellon University analyzed three fields commonly retained in de-identified data sets, zip codes, dates of birth, and gender. Now, you wouldn't think any one of these fields used alone would allow you to identify someone. After all, a lot of people live in the same town as me and there are a lot of people on the planet who were born the same day I was born. However, the danger comes when you combine all three elements. The Carnegie Mellon study found that these three elements together uniquely identify 87% of people in the United States. So while there may indeed be many people in my town and many people born on the same day as me in the world, there's an 87% chance that I am the only male in my town born on my birthday. What this means for us is that we need to be much more careful with protecting data
>
> **[1:33](https://www.linkedin.com/learning/data-steward-foundations/data-anonymization?u=76281980&t=93)** than simply removing obvious identifiers. Instead of just de-identifying data, we want to anonymize our data, making it almost impossible for someone to figure out the identity of an individual person. The HIPAA standards include a rigorous process for anonymizing data that's widely accepted in the analytics community. It offers two pathways to clearing a data set. First, you can have statisticians analyze your data set and validate that it would be very unlikely that it could disclose the identity of an individual. This pathway requires access to professional statisticians, and it does include the possibility of an accidental disclosure. Alternatively, you can opt to use the Safe Harbor approach that requires eliminating 18 data elements from your data set that might be combined with each other to reveal an individual's identity. I won't read you this whole list, but you're welcome to peruse it on the US Department of Health and Human Services website. It includes things like social security numbers and email addresses, as well as date of birth and zip code. Whichever method you use for data de-identification and anonymization, make sure that you've thought through this issue carefully and that you're taking appropriate steps to protect the [Privacy](../../Skills/Data%20Science/Privacy.md) of your data subjects. Now, of course, the best approach to minimizing your risk is to minimize the data that you have in the first place. If you're able to destroy data completely, there's no need to worry about de-identification or anonymization.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Privacy](../../Skills/Data%20Science/Privacy.md) (1)
> **CLI Commands:** make (1)
> **Env Vars:** hipaa (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Data obfuscation](https://www.linkedin.com/learning/data-steward-foundations/data-obfuscation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-steward-foundations/data-obfuscation?u=76281980&t=0)** - [Instructor] An alternative to removing data from a data set is transforming it into a format where the original information can't be retrieved. This is a process called data obfuscation, and we have several tools at our disposal to assist us. First, we can use a hash function to transform a value in our data set to a hashed value. Now, remember from our discussion of hash functions that they're one way functions. If we apply a strong hash function to a data element, we may replace the value in our file with a hashed value. While it isn't possible to retrieve the original value directly from the hashed value, there is one possible flaw to this approach. If someone has a list of all possible values for a field, they can conduct something called a rainbow table attack. In this attack, the attacker computes the hashes of those candidate values and then checks to see if those hashes exist in the data file. Let's say that we had a file listing all of the students at a college who have failed courses, but we hash their student IDs. If an attacker has a list of all students, they can compute the hash values of all student IDs and then check to see which hash values are on the list. For this reason, hashing should be used with caution. A related approach is tokenization. In tokenization, sensitive values are replaced with a unique identifier using a lookup table. For example, we might replace a widely known value, such as a student ID, with a randomly generated 10 digit number. We then maintain a lookup table that allows us
>
> **[1:33](https://www.linkedin.com/learning/data-steward-foundations/data-obfuscation?u=76281980&t=93)** to convert those back to student IDs if we need to determine someone's identity. Now, of course, if you use this approach, you need to keep the lookup table secure. Because this tokenization is reversible, it's often referred to as a pseudonymization technique. Finally, in many cases, we simply don't need to reidentify data. If that's the case, you can redact the data from the file using an approach known as masking. This simply replaces the sensitive information with blanks. For example, we might replace all of the digits of a social security number with Xs.

> [!info]- Semantic Content
>
> **Analogies:** for example (2), such as (1)
> **Definitions:** is a  (1), known as (1)
> **Warnings:** caution (1)
> **Speakers:** - [instructor] (1)


### 5. Regulatory Compliance

[↑ Back to Table of Contents](#table-of-contents)

#### [Today's regulatory landscape](https://www.linkedin.com/learning/data-steward-foundations/today-s-regulatory-landscape?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-steward-foundations/today-s-regulatory-landscape?u=76281980&t=0)** - [Instructor] Data stewards find themselves increasingly becoming legal and [Regulatory Compliance](../../Skills/Artificial%20Intelligence%20(AI)/Regulatory%20Compliance.md) experts. As governments and other regulators become more aware of the impact that private businesses may have on the security and [Privacy](../../Skills/Data%20Science/Privacy.md) of information, they continue to create laws and regulations that seek to enforce safeguards. There are four main types of compliance obligations that you should be familiar with: criminal law, civil law, administrative law, and private regulations. Criminal law is designed to deter people from taking actions that would be detrimental to society and punish those who do take such actions. Criminal offenses include a wide range of unacceptable activities, such as murder, robbery, hacking, insider trading, and espionage. Criminal laws have one important characteristic that is not found in any other type of law. Violations of criminal law may be punishable by deprivation of liberty, such as a jail sentence or probation. Criminal laws must be created by a legislative body at the national, state, or local level, such as the US Congress. Civil law is designed to resolve disputes among individuals, organizations, and/or government agencies. Civil laws cover almost any matter that is not addressed by criminal law, including liability claim, estate probate, contractual disputes, and other matters. As with criminal laws, civil laws must be passed by a legislative body, but they do not allow the possibility of jail time. The most common outcomes of a successful civil lawsuit
>
> **[1:33](https://www.linkedin.com/learning/data-steward-foundations/today-s-regulatory-landscape?u=76281980&t=93)** are monetary damages, or orders by the court that someone perform or refrain from an action. Administrative law allows for the effective operation of government by allowing executive branch agencies to promulgate regulations that facilitate carrying out their duties. These regulations often provide details that are missing from the law, or they provide procedural rules for the operation of government. For example, the Health Insurance Portability and [Accountability](../../Skills/Data%20Science/Accountability.md) Act, HIPAA, provides criminal and civil law governing the uses of health information, but it doesn't go into great detail. The Center for Medicare and Medicaid Services publishes security and privacy regulations that include the specific requirements that HIPAA covered entities must follow. At the federal government level in the United States, administrative laws found in the Code of Federal Regulations, or CFR. Private industry regulations also govern many activities of individuals and organizations. Now these regulations don't have the force of law on their own, but they are often required by contracts. The most common example of this in the world of cyber security is the [Payment Card Industry Data Security Standard](../../Glossary/Standard/PCI%20DSS.md), [PCI DSS](../../Glossary/Standard/PCI%20DSS.md). PCI DSS was created by a consortium of companies without the involvement of a government agency. They then included language in the contracts for those accepting and processing credit cards requiring compliance with the standard. Now remember that in the United States, the highest form of law is the US Constitution. The most common intersection between [Data Stewardship](../../Skills/Data%20Science/Data%20Stewardship.md) and constitutional law involves
>
> **[3:06](https://www.linkedin.com/learning/data-steward-foundations/today-s-regulatory-landscape?u=76281980&t=186)** the fourth amendment to the Constitution. Part of the Bill of Rights, it reads in part, "The right of the people to be secure "in their persons, houses, papers, and effects "against unreasonable searches and seizures "shall not be violated." The fourth amendment comes into play anytime that government agents, including law enforcement officers want to collect private information from computing systems without consent. If they do so without a warrant, they run the risk of the evidence being inadmissible in court.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Privacy](../../Skills/Data%20Science/Privacy.md) (2), [PCI DSS](../../Glossary/Standard/PCI%20DSS.md) (2), [Regulatory Compliance](../../Skills/Artificial%20Intelligence%20(AI)/Regulatory%20Compliance.md) (1), [Accountability](../../Skills/Data%20Science/Accountability.md) (1), [Payment card industry data security standard](../../Glossary/Standard/PCI%20DSS.md) (1)
> **Env Vars:** hipaa (2), pci (2), dss (2), cfr (1)
> **Analogies:** such as (3), for example (1)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### [Health Insurance Portability and Accountability Act (HIPAA)](https://www.linkedin.com/learning/data-steward-foundations/health-insurance-portability-and-accountability-act-hipaa?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-steward-foundations/health-insurance-portability-and-accountability-act-hipaa?u=76281980&t=0)** - [Instructor] The Health Insurance Portability and [Accountability](../../Skills/Data%20Science/Accountability.md) Act or HIPAA, is a comprehensive healthcare law that among other things, regulates the security and [Privacy](../../Skills/Data%20Science/Privacy.md) of health records. HIPAA applies to two categories of information. Protected Health Information, or PHI is a broad category of individually identifiable health information. PHI includes information about an individual's current, past or future health status that's collected in relation to the provision of healthcare. The processing of healthcare payments and insurance claims, or is used in facilitating the provisioning of healthcare. The rules surrounding PHI only apply to HIPAA-covered entities. A concept we'll talk about more in just a moment. Electronic Protected Health Information, or ePHI must first meet the definition of PHI. ePHI is any PHI that is stored or transmitted by digital means. Now I mentioned earlier that the provisions of HIPAA apply only to covered entities, just because information is about an individual's health does not mean that it is governed by HIPAA. There are three different types of HIPAA covered entities. First, healthcare providers such as physicians, hospitals, clinics, and labs that provide healthcare to patients are covered entities if they engage in certain electronic transactions that we'll explore more in a moment. Second, health insurance plans are covered entities, and finally healthcare information and clearinghouses are covered entities.
>
> **[1:35](https://www.linkedin.com/learning/data-steward-foundations/health-insurance-portability-and-accountability-act-hipaa?u=76281980&t=95)** Here's a list of electronic transactions that make a healthcare provider, a HIPAA covered entity. If a provider engages in any of these transactions in electronic form, they are covered. As you can see, these are basic medical transactions, and it's hard to imagine any healthcare provider who can run a modern business without engaging in at least several of these. HIPAA does apply to covered entities, but it also extends to the business partners of those covered entities who handle protected health information on the covered entities behalf. HIPAA requires the covered entities enter into special agreements known as Business associate agreements or BAAs with their partners. The BAA requires that the business partner also comply with provisions of HIPAA. There are three important exceptions to HIPAA. First, HIPAA does not apply to records that are maintained by an organization in its capacity as an employer. Even if the organization is a covered entity under HIPAA. Second, HIPAA doesn't apply to student educational records that are covered by the family educational rights and privacy act FERPA. And finally, HIPAA does not apply to information that has been de-identified so it may no longer be traced back to an individual. The centers for Medicare and Medicaid services, CMS is responsible for laying out the rules that implement HIPAA and they publish two important rules that apply directly to [Data Security](../../Skills/Data%20Science/Data%20Security.md) and privacy. The HIPAA Privacy Rule governs the privacy of protected health information and the HIPAA Security Rule governs the security of electronic protected health information.
>
> **[3:10](https://www.linkedin.com/learning/data-steward-foundations/health-insurance-portability-and-accountability-act-hipaa?u=76281980&t=190)** Let's talk about some of the key provisions of the Privacy Rule. The HIPAA Privacy Rule requires the covered entities disclose their privacy practices to individuals at the time of their first service delivery. It also sets out permitted uses of PHI, including the treatment of patients, the processing of payments and the operations of the organization. Uses that are not explicitly permitted by the Privacy Rule require patient consent. The Privacy Rule requires limiting the use and disclosure of PHI to the minimum possible extent. And it provides individuals with the right to review their own health records. The rule also requires that covered entities implement controls to protect the confidentiality and integrity of protected health information. Let's also review some of the key provisions of the HIPAA Security Rule. While the Privacy Rule applies to all PHI, the Security Rule applies only to electronic PHI or ePHI. It requires that healthcare providers ensure the confidentiality, integrity and availability of all of the ePHI that they create, receive, maintain, or transmit. It also requires the covered entities, identify and protect against reasonably anticipated threats to the security and integrity of information that they protect against reasonably anticipated impermissible uses or disclosures, and that they ensure compliance with the rule by their workforce. HIPAA is a complex regulation with many nuances. If you work in healthcare,
>
> **[4:41](https://www.linkedin.com/learning/data-steward-foundations/health-insurance-portability-and-accountability-act-hipaa?u=76281980&t=281)** you should carefully review both the security and privacy rules and consult with attorneys who specialize in the field when you're making decisions about your data that might have regulatory impact.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Privacy](../../Skills/Data%20Science/Privacy.md) (12), [Accountability](../../Skills/Data%20Science/Accountability.md) (1), [Data Security](../../Skills/Data%20Science/Data%20Security.md) (1)
> **Env Vars:** hipaa (21), phi (9), baa (1), ferpa (1), cms (1)
> **Definitions:** is a  (4), known as (1)
> **Code Identifiers:** ephi (4)
> **Analogies:** such as (1), imagine (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Family Educational Rights and Privacy Act (FERPA)](https://www.linkedin.com/learning/data-steward-foundations/family-educational-rights-and-privacy-act-ferpa?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-steward-foundations/family-educational-rights-and-privacy-act-ferpa?u=76281980&t=0)** - [Instructor] The Family Educational Rights and [Privacy](../../Skills/Data%20Science/Privacy.md) Act of 1974 introduced privacy protections for student educational records that are maintained by an educational institution that receives federal funding through the US Department of Education. This law applies to most educational institutions in the United States. Almost all colleges and universities receive some federal funding through Department of Education programs, so FERPA generally applies to colleges and universities. The same is true for public schools at the elementary, middle, and secondary levels. Most private elementary, middle, and secondary schools do not receive federal funding from the Department of Education, so they are generally excluded from the scope of FERPA. FERPA grants rights surrounding student records to a responsible individual or individuals. For a child under the age of 18 enrolled in an elementary, middle, or secondary school, rights under FERPA fall to the parents or guardians of that child. Those rights transfer from the parent to the student when one of two things happens. When the student turns 18, they then gain control over their privacy rights regardless of the school they attend. The same is true if a student enrolls in a post-secondary institution even if they're under the age of 18. So what are these rights that parents or students have under FERPA? Well, the most frequently exercised right is that students and their parents have control over the disclosure of student educational records to third parties. There are some exceptions to this that I'll discuss in a moment,
>
> **[1:32](https://www.linkedin.com/learning/data-steward-foundations/family-educational-rights-and-privacy-act-ferpa?u=76281980&t=92)** but generally speaking schools can not share educational records with third parties without gaining consent. FERPA also provides the right of access to a student's educational records and the right to dispute information and educational records that they believe to be incorrect. FERPA covers all educational records and the law defines this as records that are directly related to a student and are maintained by an educational agency or institution, or a party acting for or on behalf of that agency or institution. These records may be in any format including records that are handwritten, printed, digital, videotaped, audio-taped, or emailed. The Department of Education provides some examples of the types of records that are covered under FERPA. The most common examples are grades, transcripts, class lists, student course schedules, health records for K through 12 students, student financial information for post-secondary students, and student disciplinary records. FERPA does have some specific exclusions. It doesn't cover law enforcement records when those records are created and maintained by a campus law enforcement agency for law enforcement purposes. Application records are a little more complicated. When a potential student applies to a school, they are not yet students and their records are not covered by FERPA. If the student isn't admitted or chooses not to enroll, the record remains non-covered. However, if the student enrolls at the school, the application records then become educational records
>
> **[3:07](https://www.linkedin.com/learning/data-steward-foundations/family-educational-rights-and-privacy-act-ferpa?u=76281980&t=187)** and are covered by FERPA. Alumni records created after a student graduates are not educational records. Medical and mental health records used only for the treatment of a student are also normally excluded from FERPA, but that's a complex area that requires specific legal guidance based upon individual circumstances. Sole possession records created by a member of the faculty or staff for their personal use are not covered by FERPA either unless they are shared with other people. And peer-graded exams or papers are also not covered by FERPA until they are entered into the course of instructor's grade book. Institutions are permitted to disclose records under FERPA in some circumstances. It's always permitted if the student or parent, whomever has rights under FERPA, consent to the disclosure. Disclosure is also permitted at the information is not personally identifiable or falls under the broad definition of directory information. That's information that would not generally be considered harmful or an invasion of privacy if it were disclosed. It includes things like a student's name, address, telephone number, major, or other similar information. Disclosure is permitted if the information is not personally identifiable meaning that it can't be linked to an individual student. And there is an exception to FERPA that permits the disclosure of information in a health or safety emergency. Educational institutions may also disclose information without obtaining student consent when that disclosure is to school officials with a legitimate educational interest, another school where the student
>
> **[4:40](https://www.linkedin.com/learning/data-steward-foundations/family-educational-rights-and-privacy-act-ferpa?u=76281980&t=280)** is enrolled or seeks admission, financial aid organizations, researchers studying testing financial aid or instruction, accrediting agencies reviewing the school, or for a variety of law enforcement purposes that are defined in FERPA. FERPA does require that schools provide an annual notice to those with rights under the law and the US Department of Education offers a model notice that schools may adapt to their specific circumstances. Companies providing educational technology also find themselves subject to FERPA requirements in an indirect manner. While FERPA does not directly include educational technology companies in its scope, schools wishing to share information with these providers often require contract language that designates the provider as a school official under FERPA. This is a legal term of art that brings the provider under the scope of the school's FERPA compliance efforts.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Privacy](../../Skills/Data%20Science/Privacy.md) (4)
> **Env Vars:** ferpa (23)
> **Definitions:** is an  (1), is a  (1)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### [Gramm-Leach-Bliley Act (GLBA)](https://www.linkedin.com/learning/data-steward-foundations/gramm-leach-bliley-act-glba?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-steward-foundations/gramm-leach-bliley-act-glba?u=76281980&t=0)** - [Illustrator] At the turn of the century, the Federal Government embarked upon a major change in the regulation of financial institutions in the United States. The Gramm-Leach-Bliley Act or GLBA, introduced many new requirements on financial institutions and their operations. Two have these requirements of particular interest from a [Privacy](../../Skills/Data%20Science/Privacy.md) perspective. The GLBA Financial Privacy Rule limits how financial institutions may handle the non-public personal information of its consumers. And the GLBA Safeguards Rule requires that financial institutions develop a written information security plan to protect consumer data. Before we dive into some of the specific requirements of those rules, it's important that we clarify the scope of GLBA. The law applies to financial institutions, but the term financial institution is defined more broadly than you might think. The Federal Trade Commission states that GLBA applies to all businesses, regardless of their size, that are significantly engaged in providing financial [products](../../Skills/Software%20Development/Microsoft%20Products.md) or services. This definition includes many businesses that you would not normally describe as financial institutions. It does include the activities of banks, including online [Banking](../../Skills/Software%20Development/Banking.md), non-bank lenders and financial or investment advisors, but it also includes check-cashing services, payday loan providers, real estate appraisers, tax preparers, mortgage brokers, ATM operators, and even colleges and universities that issues student loans. Now this is not a complete list.
>
> **[1:33](https://www.linkedin.com/learning/data-steward-foundations/gramm-leach-bliley-act-glba?u=76281980&t=93)** And you think that GLBA might apply to your organization. You should consult an attorney for assistance in determining whether you meet the definition of significant engagement in providing financial products or services. The GLBA Financial Privacy Rule requires that institutions who intend to share information, provide customers with copies of their privacy notice when they first establish a relationship and on an annual basis thereafter. Now this notice must describe the organization's privacy policies and practices, including the types of information collected and disclosed, the types of third-parties and affiliates with whom they share information, information security policies and practices. And it must also provide customers with the ability to opt out of non-public information sharing, and provide them with a reasonable amount of time to do so before information is shared. Federal regulators had developed a template privacy notice that organizations may choose to adopt in an effort to provide clear and transparent information, that meets the financial privacy rules requirements. GLBA does make a distinction between consumers and customers. Consumers are individuals who engage in transactions with the financial institutions. These transactions may simply be a one-time engagement, such as cashing a check or applying for a loan. Customers or consumers who have an ongoing relationship with the institution. Such as opening an account or taking out a loan. Customers must receive the full privacy notice required under GLBA. Consumers who are not customers
>
> **[3:05](https://www.linkedin.com/learning/data-steward-foundations/gramm-leach-bliley-act-glba?u=76281980&t=185)** may instead receive a short form notice that explains how they can get the longer form notice. The major requirement of the GLBA Safeguards Rule is that financial institutions must develop and implement a written information security plan describing how they protect the confidentiality, integrity and availability of consumer information. The plan should be appropriate for the size and complexity of the organization, the types of information that it handles, and the nature of its activities. GLBA compliant information security plans must include the designation of one or more employees who are responsible for information security, and identification and assessment of the risks to customer information in each area of the company's operations, and evaluation of the effectiveness of the safeguards that are in place to protect that information against identified risks. A safeguards program that is regularly monitored and tested. The use of service providers who maintain appropriate safeguards and are required to do so by contract and ongoing evaluation and adjustment of the program as circumstances change.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Privacy](../../Skills/Data%20Science/Privacy.md) (8), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (2), [Banking](../../Skills/Software%20Development/Banking.md) (1)
> **Env Vars:** glba (11), atm (1)
> **Analogies:** such as (2)
> **CLI Commands:** make (1)
> **Exercise Files:** template (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [illustrator] (1)

#### [Data breach notification laws](https://www.linkedin.com/learning/data-steward-foundations/data-breach-notification-laws?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-steward-foundations/data-breach-notification-laws?u=76281980&t=0)** - [Instructor] [Privacy](../../Skills/Data%20Science/Privacy.md) professionals believe that one of the fundamental rights of data subjects is the right to be informed when their personal information is accessed in an authorized manner. This concept is known as data breach notification. Now the US federal government does not have a data breach notification law. So states have stepped up and created their own laws to fill in the gaps. This has happened in a slow manner with California passing the first data breach notification law back in 2002 and Alabama becoming the 50th state to pass a law 16 years later in 2018. While there are differences between the laws, many of them were modeled after California's law and they share common element. Let's talk through some of those. Each law includes a definition of personal information. California's law defines personal information that triggers a data breach notification as a person's first name or first initial and their last name. When it's combined with their social security number, driver's license or state identity card number and account number, credit card number, or debit card number in combination with a security code or password that grants access to an account. Other states either use this definition or expand it to include additional elements, such as passport numbers, health records, biometric data, and mother's maiden name. These laws also include a definition of what it means to have a security breach. Here's the definition used by the state of Mississippi. The unauthorized acquisition of electronic files, media, [Databases](../../Skills/Software%20Development/Databases.md), or computerized data containing personal information
>
> **[1:34](https://www.linkedin.com/learning/data-steward-foundations/data-breach-notification-laws?u=76281980&t=94)** of any resident of the state. When access to the personal information has not been secured by encryption or by other method or technology that renders the personal information unreadable or unusable. Now, other states have their own definitions. And these definitions differ in whether they exclude encrypted data, require the actual occurrence of identity theft and on some other attributes. States also include the required timing of the notification to individuals and government agencies. Many states use generic language requiring notification without an unreasonable delay while others impose specific timeframes for escalation to appropriate authorities. Colorado, for example, requires notice within 30 days. While Delaware has a 60 day deadline and Connecticut allows 90 days. The states have differing requirements for the content and delivery of the notice as well. Some include specific items that must be included in the notice while others leave this to the discretion of the business. Some laws require individual notification while others allow the use of mass media for large-scale notifications. Another major difference between the laws is whether they allow a private right of action. California's original law does provide this right, allowing individual citizens of California to sue a company that they believe has violated their privacy rights. But laws of about a dozen other states include this as provision well, but most states only allow the state attorney general to prosecute violations of the breach notification law. As you can imagine, there are many, many nuances in these 50 state laws.
>
> **[3:07](https://www.linkedin.com/learning/data-steward-foundations/data-breach-notification-laws?u=76281980&t=187)** You should be familiar with the details of the laws that apply in the jurisdictions where your business operates. The national conference of state legislatures provides this convenient reference that links to the text of the laws in each state.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Privacy](../../Skills/Data%20Science/Privacy.md) (2), [Databases](../../Skills/Software%20Development/Databases.md) (1)
> **Analogies:** such as (1), for example (1), imagine (1)
> **Cross-References:** later in (1)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)

#### [International data transfers](https://www.linkedin.com/learning/data-steward-foundations/international-data-transfers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-steward-foundations/international-data-transfers?u=76281980&t=0)** - [Instructor] Multinational organizations must often transfer data across international borders as part of their standard business practices. In those cases, international regulations may provide specific requirements regarding the allowable transfer and use of that information. Let's talk about a couple of very significant international regulations. First, the European Union's General Data Protection Regulation, GDPR, is a broad [Privacy](../../Skills/Data%20Science/Privacy.md) law that regulates the handling of almost all personal information related to European Union residents. US companies who do business in Europe or with EU residents must be familiar with GDPR and implement controls designed to avoid violations of that law. This is of particular concern when transferring information across international borders. Organizations needing to conduct transfers between their subsidiaries have a few options available for complying with EU regulations. First, organizations may adopt a set of standard contractual clauses that have been approved for use in situations where information is being transferred outside of the European Union. Those clauses are found on the European Union website and they're available for integration into contracts. And organizations may adopt binding corporate rules that regulate data transfers. This is a very time consuming process as the rules must be approved by every EU member nation where they will be used. So typically this path is only adopted by very large organizations. Finally, in the past, the European Union
>
> **[1:34](https://www.linkedin.com/learning/data-steward-foundations/international-data-transfers?u=76281980&t=94)** and the United States operated a safe harbor agreement called Privacy Shield. Organizations could certify their compliance with privacy practices through independent assessors. And if they were awarded the Privacy Shield would be permitted to transfer information. However, a 2020 ruling by the European Court of Justice in a case called Schrems II, declared the EU/US Privacy Shield invalid. Currently, companies may not rely upon the Privacy Shield and must use either standard contractual clauses or binding corporate rules. This may change in the future if the Privacy Shield is modified to meet EU requirements. The Asia Pacific Economic Cooperation, or APEC, also publishes a privacy framework that incorporates many standard privacy practices. These include preventing harm, providing notice, obtaining consent, and implementing security and [Accountability](../../Skills/Data%20Science/Accountability.md) controls. This framework is used to promote the smooth cross-border flow of information between APEC member nations. And in some cases, conflicts arise between the laws of different nations. For example, electronic discovery rules in the United States might require the preservation and production of evidence that is protected under GDPR. In those cases, you should consult with attorneys to identify the appropriate course of action.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Privacy](../../Skills/Data%20Science/Privacy.md) (9), [Accountability](../../Skills/Data%20Science/Accountability.md) (1)
> **Env Vars:** gdpr (3), apec (2)
> **Definitions:** is a  (2)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 6. Getting Started

[↑ Back to Table of Contents](#table-of-contents)

#### [Data inventory](https://www.linkedin.com/learning/data-steward-foundations/data-inventory?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-steward-foundations/data-inventory?u=76281980&t=0)** - [Instructor] One of the first tasks that you should undertake as part of your [Privacy](../../Skills/Data%20Science/Privacy.md) program is developing an inventory of all of the types of information that your organization handles that might be affected by privacy programs. A good rule of thumb is that you should include any information in your inventory that might be considered personally identifiable information or PII. Now, the specific definition of PII that you use may vary based upon your organization's privacy policy and the regulations that apply to you, but the US government's definition is a good working start. It has two elements. Under that definition, PII includes any information that can be used to distinguish an individual's identity, such as their name, social security number, date and place of birth, mother's maiden name, or biometric records. PII also includes any other information that is either linkable or linked to an individual, such as medical, educational, financial, and employment information. Following this definition, you can then begin building your data inventory. This step is very important because this inventory will serve as a roadmap for all of your future work. The inventory should also persist as a permanent repository of information, so design it in such a way that it will be accessible and understandable by others, perhaps years down the road. Now, the best place to start your inventory is probably in your own mind. You probably know a lot more about data use in your organization than you might think. If you bring in a few colleagues, you can probably flesh out a list of business processes that include sensitive information very quickly. When you're developing this list,
>
> **[1:33](https://www.linkedin.com/learning/data-steward-foundations/data-inventory?u=76281980&t=93)** think about common activities that might include this data. How does [human resources](../../Skills/Artificial%20Intelligence%20(AI)/Human%20Resources%20(HR).md) collect information from new hires? Do they share employee information with any vendors? Do any health insurance companies, retirement plan services, or other benefits program involve the use of medical information? Do you ever ask customers for information about themselves or collect information about customers in some other way? Do you employ independent contractors? If so, where do you collect and store their information? Now, these questions just serve as a starting point. You'll want to consider them in the context of your organization and its business activities. As you do this, a great way to identify other possible uses of data is to walk the customer and employee journeys yourself. Think about every way that you've interacted with your organization as an employee. Is personal information ever involved? How about as a customer? Tracing the footsteps of these normal interactions is a great way to flesh out your list of business processes that use sensitive data. As you build your list, think about the types of information that it should include. You'll probably want to know the name of the business process, the reason that it uses PII, whether that reason matches your definition of legitimate PII use. You'll want to know where information is stored and transmitted by the process, who has access to the information, and whether there are any third parties involved. And don't worry if you don't have all of this information right away. Your goal at this point is just to build a list. Now, you might mistakenly include business processes in your inventory that don't actually use personal information, or you might miss a few processes along the way.
>
> **[3:07](https://www.linkedin.com/learning/data-steward-foundations/data-inventory?u=76281980&t=187)** You also might get some of the facts wrong about the ways the data is being used. Don't worry about that at this point. You're going to verify all of these details later. Err on the side of including things, and treat this list simply as a starting point.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Privacy](../../Skills/Data%20Science/Privacy.md) (3), [Human resources](../../Skills/Artificial%20Intelligence%20(AI)/Human%20Resources%20(HR).md) (1)
> **Env Vars:** pii (6)
> **Definitions:** is a  (2)
> **Analogies:** such as (2)
> **Best Practices:** rule of thumb (1)
> **Speakers:** - [instructor] (1)

#### [Entity-relationship diagrams](https://www.linkedin.com/learning/data-steward-foundations/entity-relationship-diagrams?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-steward-foundations/entity-relationship-diagrams?u=76281980&t=0)** - [Instructor] Entity relationship diagrams, also known as ER diagrams, provide database designers with a valuable tool for modeling the relationships between database entities in a clear, precise format. This industry standard approach uses a series of block shapes and lines to describe the structure of a database in a manner understandable to all data professionals. In a database model, each object that you wish to track in the database is known as an entity. Normally, each entity is stored in a database table, and every instance of an entity corresponds to a row in that table. In an ER diagram, each entity is depicted as a rectangular box with the name of the entity contained in the box. For example, a database containing information about individual people would likely have an entity called Person. This would correspond to a table with the same name in the database, and every person tracked in the database would be an instance of that Person entity and have a corresponding row in the Person table. Database designers creating an ER diagram would draw the Person entity using a shape similar to the one shown here. They would then repeat that process to create a rectangular box for each entity in the data model. Now, of course, tracking entities alone isn't sufficient to develop a data model. [Databases](../../Skills/Software%20Development/Databases.md) contain information about each entity. This information is tracked in individual fields, known as attributes, which normally correspond to the columns of a database table. For example, the Person entity might have attributes
>
> **[1:34](https://www.linkedin.com/learning/data-steward-foundations/entity-relationship-diagrams?u=76281980&t=94)** corresponding to the person's first and last name, date of birth, and a unique person identifier. Each of these attributes is depicted in an ER diagram as an oval, shown here. Notice that the text in the attribute ovals is formatted slightly differently. There are two text formatting features used to convey additional information about an entity's attributes. First, some fields are displayed in bold. These are required fields, similar to the NotNull database constraint. Each instance of an entity must contain information in the FirstName, LastName, and PersonID attributes in this example. Also, one attribute is underlined, indicating that it serves as the database's primary key. In this example, PersonID serves as the primary key. Now using this format can be a little cumbersome in a diagram containing information about entities with many attributes. Therefore, database designers prefer to use an alternate format that lists an entity's attributes in tabular form under the name of the entity. Here is a depiction of the Person entity in that format. Now that covers the entity part of entity relationship diagrams. Let's take a look at displaying data relationships. The power of the ER diagram lies in its ability to accurately display information about the relationships between entities. For example, we might track information in our database about the city where each person lives. Information about the city itself is tracked within a City entity, and a relationship is used to tie together Person and City instances.
>
> **[3:07](https://www.linkedin.com/learning/data-steward-foundations/entity-relationship-diagrams?u=76281980&t=187)** Relationships are normally given names that are verbs, while attributes and entities are named after nouns. This convention makes it easy to express relationships. For example, if we name our Person City relationship Lives in, we can string those together to say a person lives in a city. We express relationships in ER diagrams by drawing a line between the related entities and placing a diamond shape that contains the relationship name in the middle of the line. Here's how our Person City relationship would look. Now you'll notice there are some additional shapes on the line. The double hashed line appearing just to the left of the City entity indicates that this part of the relationship has a cardinality of one. On the other hand, the crow's foot symbol to the right of the Person entity indicates that this part of the relationship has a cardinality of many. Stated more plainly, each person may live in only one city, while a city may contain many people.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Databases](../../Skills/Software%20Development/Databases.md) (1)
> **Analogies:** for example (4), similar to (2)
> **Definitions:** known as (3), is a  (1)
> **Speakers:** - [instructor] (1)

#### [Data classification](https://www.linkedin.com/learning/data-steward-foundations/data-classification?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-steward-foundations/data-classification?u=76281980&t=0)** - [Instructor] Organizations use information classification to help users understand the security requirements around handling different types of data. Classification policies describe the security levels of information used in an organization and the process for assigning information to a particular classification level. The different security categories or classifications used by an organization determine the appropriate storage, handling and access requirements for classified data. These classifications are assigned based upon both the sensitivity of the information and the criticality of that information to the organization. A classification schemes vary, but all basically try to group information into high, medium and low sensitivity levels and differentiate between public and private information. For example, the military uses the Top Secret, Secret, Confidential and Classified classification scheme, while a business might use friendlier terms to accomplish the same goal, such as Highly Sensitive, Sensitive, Internal and Public. [Data Classification](../../Skills/Data%20Science/Data%20Classification.md) is extremely important, because it's used as the basis for other [Data Security](../../Skills/Data%20Science/Data%20Security.md) decisions. For example, a company might require the use of strong encryption to protect sensitive and highly sensitive information, both at [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) and in motion. That's an example of a data handling requirement. When an organization classifies information, it should also include labeling requirements that apply consistent markings to sensitive information. Using standard labeling practices ensures that users are able to consistently
>
> **[1:32](https://www.linkedin.com/learning/data-steward-foundations/data-classification?u=76281980&t=92)** recognize sensitive information and handle it appropriately. Organizations may also have classification schemes imposed upon them by regulators. They may handle three different types of information classified by external groups. These include Personally Identifiable Information, PII, which is information traceable back to an individual person, Protected Health Information, PHI, which includes medical records protected by HIPAA, and Payment Card Information, PCI, which includes credit and debit card numbers, that must be handled in accordance with the [Payment Card Industry Data Security Standard](../../Glossary/Standard/PCI%20DSS.md). Every organization should adopt secure disposal procedures for sensitive information. This should include the wiping techniques used to securely erase hard drives, flash drives and other storage media before they're thrown away, recycled or otherwise discarded. This is very important because of data remnants issues. Simply deleting files or formatting a hard disk isn't sufficient to remove all traces of data from a device. Security administrators must use specialized tools to securely wipe storage devices and prevent the future retrieval of information that was believed to have been deleted.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Security](../../Skills/Data%20Science/Data%20Security.md) (2), [Data Classification](../../Skills/Data%20Science/Data%20Classification.md) (1), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **Env Vars:** pii (1), phi (1), hipaa (1), pci (1)
> **Analogies:** for example (2), such as (1)
> **Speakers:** - [instructor] (1)

#### [Interviewing key employees](https://www.linkedin.com/learning/data-steward-foundations/interviewing-key-employees?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-steward-foundations/interviewing-key-employees?u=76281980&t=0)** - [Instructor] Once you have an initial list of business processes from your data inventory, it's time to confirm the information that you gathered during your brainstorming by [Interviewing](../../Skills/Data%20Science/Interviewing.md) other employees who possess information about both the business processes that use PII and the technology systems and applications that handle that data. These interviews are where you convert your initial inventory into a detailed roadmap and we approach these interviews in two phases. First, we should talk to the functional employees from departments responsible for business processes involving PII and then when those interviews are complete, we'll turn to the technologists involved in maintaining those business processes and the systems and applications that support them. There are several approaches that you can use when determining the list of functional departments that you'll interview. My preferred approach is to start with a blank piece of paper and think about all of the business units in your organization that might touch PII. This may include your [human resources](../../Skills/Artificial%20Intelligence%20(AI)/Human%20Resources%20(HR).md) department, salespeople, compliance officers, call centers, and others. The list will be unique to your organization. Once you've developed that list of departments, then turn to the inventory that you created and confirm that you've covered each of the business processes on your list. This serves as a good cross check on your initial work, and you may add departments to your interview list or business process inventory as a result. Next, go through each of the functional departments on your list and think about who would be the best people to interview. This may include managers, line employees, technologists, or others, and the list may not be the same
>
> **[1:32](https://www.linkedin.com/learning/data-steward-foundations/interviewing-key-employees?u=76281980&t=92)** from department to department. This is where you need to apply your own knowledge of the organization and ask for input from others for areas that you don't know very well. You're trying to find people who know the inner workings of the department themselves and can explain to you where different types of information are being used. When you speak with functional users, ask open-ended questions. Ask them to describe what business processes use personal information without providing them with your own initial list. You can use your list to pre-probe for things that they might have overlooked, but give them the opportunity to list things off the top of their heads first. This may surface processes that you weren't aware of. Providing your list as a starting point might limit their thinking and prompt them to just confirm your list without thinking carefully through uses. Your goal in asking questions is to fill in the details on processes in your inventory and confirm your understanding of each process. After you've worked your way through the functional departments, now it's time to turn to the technology team. These are the people who understand the inner workings of your systems and can help ferret out previously undiscovered uses of personal information. You'll want to talk to a wide variety of technologists, database administrators who know where the central stores of data exist and who has access to it, application developers are familiar with user interfaces and they may know where PII has collected and accessed, security and [Privacy](../../Skills/Data%20Science/Privacy.md) professionals may have already done research on the issue and know of PII stores and technology consultants know the business processes of their functional units, and may be able to elaborate on uses.
>
> **[3:07](https://www.linkedin.com/learning/data-steward-foundations/interviewing-key-employees?u=76281980&t=187)** Once again, you'll need to use your own knowledge of the organization to flesh out this list. These conversations with technologists serve two purposes. First, they confirm the technical details of business processes that functional departments might not know, and second, they might identify new processes that you hadn't already considered. If this happens, you'll want to circle back to the functional departments involved and repeat the interview process until you're confident that you've covered everything.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Interviewing](../../Skills/Data%20Science/Interviewing.md) (1), [Human resources](../../Skills/Artificial%20Intelligence%20(AI)/Human%20Resources%20(HR).md) (1), [Privacy](../../Skills/Data%20Science/Privacy.md) (1)
> **Env Vars:** pii (5)
> **CLI Commands:** find (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Following data flows](https://www.linkedin.com/learning/data-steward-foundations/following-data-flows?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-steward-foundations/following-data-flows?u=76281980&t=0)** - [Instructor] Interviews provide you with important information about where to start. They identify the business processes that handle PII and the IT systems that support those transactions. But interviews can only help you to the extent that the people you interview are aware of the details of those processes. Once you've completed your interviews, it's time to roll up your sleeves and follow the data. Data flow diagram show all the ways that information enters and leave systems. You should create a data flow diagram for every system that you're aware of that handles PII. The diagram should show the journey of the PII, including every location where it's stored and every process that touches it. For example, your [human resources](../../Skills/Artificial%20Intelligence%20(AI)/Human%20Resources%20(HR).md) system probably handles employees' Social Security Numbers. As you go through the data flow [Diagramming](../../Skills/Software%20Development/Diagramming.md) process, you might identify that Social Security Numbers are first collected by employees on a paper form that they submit to an HR clerk. The HR clerk then enters this information into the HR system and shreds the form. The HR system sends the employee's SSN and other information off to an employment verification service that checks to see if the employee is eligible to work and then reports back to the HR system directly. The HR system also stores the employee SSN and work eligibility status in a database that supports the reporting environment. Then when tax season rolls around, the payroll system sends a request to the HR system for a list of all employees and their Social Security Numbers. It uses those lists to create the tax reporting [Forms](../../Skills/Web%20Development/Forms.md) that are sent to employees in the mail
>
> **[1:34](https://www.linkedin.com/learning/data-steward-foundations/following-data-flows?u=76281980&t=94)** and to file a report with the internal revenue service detailing each employee's wages for the year. Now this is a simple data flow diagram. And as we built it, we've identified several new areas that we should investigate. Is a process where clerks are shredding paper forms secure and well-managed? How does the employment verification vendor secure the use of SSNs and do they retain them? What about the database where we Store Social Security Numbers, is that secure? And did we already know that the payroll system received SSNs? The data flow diagram serves as the starting point for an investigation of a single business process, but it also may identify new processes that require an investigation. It's a crucial tool in developing a comprehensive inventory of PII used by the organization.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Forms](../../Skills/Web%20Development/Forms.md) (2), [Human resources](../../Skills/Artificial%20Intelligence%20(AI)/Human%20Resources%20(HR).md) (1), [Diagramming](../../Skills/Software%20Development/Diagramming.md) (1)
> **Env Vars:** pii (4), ssn (2)
> **Definitions:** is a  (2)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Data sharing and transfers](https://www.linkedin.com/learning/data-steward-foundations/data-sharing-and-transfers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-steward-foundations/data-sharing-and-transfers?u=76281980&t=0)** - [Instructor] As you work your way through the process of developing data flow diagrams, you may discover instances of [Data Sharing](../../Skills/Database%20Management/Data%20Sharing.md), and transfers that take place both within your organization, and with your business partners. It's important to them evaluate each of these arrangements with [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) in mind. Have you notified data subjects of the data sharing? Do you have their consent to share PII? Are you confident that your business partners will comply with their security, and [Privacy](../../Skills/Data%20Science/Privacy.md) obligations? And are there any legal or regulatory impacts to this data sharing? If so, what jurisdictions are involved? Data sharing is a tricky issue. Sharing data is often necessary to achieve your business objectives. But when you share data, you lose some degree of control over how that information is treated. You should always document data sharing arrangements in written contracts or memorandum of understanding, that clearly outlined privacy, and security expectations.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Sharing](../../Skills/Database%20Management/Data%20Sharing.md) (5), [Privacy](../../Skills/Data%20Science/Privacy.md) (2), [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) (1)
> **Env Vars:** pii (1)
> **Definitions:** is a  (1)
> **Best Practices:** you should always (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Continuing your studies](https://www.linkedin.com/learning/data-steward-foundations/continuing-your-studies?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-steward-foundations/continuing-your-studies?u=76281980&t=0)** - [Mike] Thanks for joining me for this exploration of the world of [Data Stewardship](../../Skills/Data%20Science/Data%20Stewardship.md). I hope that you've learned quite a bit in this course, and found it helpful in developing your own organization's [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) program. I hope that you'll take the principles that you've learned here and apply them to your own organization. Data governance practices have the ability to transform the way that businesses operate and allow them to unlock the hidden power of their data. Congratulations on completing the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) (2), [Data Stewardship](../../Skills/Data%20Science/Data%20Stewardship.md) (1)
> **Speakers:** - [mike] (1)


## Instructor

- [Mike Chapple](../../Instructors/Data%20Science/Mike%20Chapple.md)

## Resources

- Exercise files available

## Skills Covered

- Data Governance
- Data Stewardship

## Path Context

### In [Introduction to Fundamental Skills for Data Work- Data Management](../../Paths/Data%20Science/Learning%20Paths/Introduction%20to%20Fundamental%20Skills%20for%20Data%20Work-%20Data%20Management.md)
← [Secure Data Management for AI Implementation](Secure%20Data%20Management%20for%20AI%20Implementation.md) | **6 of 6**

### In [Mastering Data Governance and Ethics](../../Paths/Data%20Science/Learning%20Paths/Mastering%20Data%20Governance%20and%20Ethics.md)
← [Learning Data Governance](Learning%20Data%20Governance.md) | **3 of 9** | [Designing Data Governance](Designing%20Data%20Governance.md) →

## Appears In

- [Introduction to Fundamental Skills for Data Work- Data Management](../../Paths/Data%20Science/Learning%20Paths/Introduction%20to%20Fundamental%20Skills%20for%20Data%20Work-%20Data%20Management.md)
- [Mastering Data Governance and Ethics](../../Paths/Data%20Science/Learning%20Paths/Mastering%20Data%20Governance%20and%20Ethics.md)

## Related Courses

_Courses sharing skills:_

- [Automated Data Governance in Practice](Automated%20Data%20Governance%20in%20Practice.md) — Data Governance, Data Stewardship
- [Designing Data Governance](Designing%20Data%20Governance.md) — Data Governance
- [Learning Data Governance](Learning%20Data%20Governance.md) — Data Governance
- [AI Data Governance, Compliance, and Auditing for Developers](../Artificial%20Intelligence%20(AI)/AI%20Data%20Governance%2C%20Compliance%2C%20and%20Auditing%20for%20Developers.md) — Data Governance
- [AI Product Security- Building Strong Data Governance and Protection](../Artificial%20Intelligence%20(AI)/AI%20Product%20Security-%20Building%20Strong%20Data%20Governance%20and%20Protection.md) — Data Governance

---

[↑ Back to top](#)