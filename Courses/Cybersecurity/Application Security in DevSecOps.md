---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: application-security-in-devsecops-25151529
url: "https://www.linkedin.com/learning/application-security-in-devsecops-25151529"
duration_minutes: 97
duration: 1h 37m
level: Intermediate
updated: 1/27/2025
learners: 2850
skills:
  - Application Security
  - DevSecOps
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQF37BYmtSlFBA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1736370992396?e=2147483647&amp;v=beta&amp;t=CjGpKT_f8zYrYyZcLPNaIMhrlof7c1-_AgLvfRvC2OQ"
linkedin_topic: Cybersecurity
learning_paths:
  - '[[Get Ahead in DevSecOps]]'
prev_courses:
  - '[[DevSecOps- Building a Secure Continuous Delivery Pipeline]]'
next_courses:
  - '[[DevSecOps- Tips for Success]]'
path_nav: '[{"path":"Get Ahead in DevSecOps","position":4,"total":5,"prev":"DevSecOps- Building a Secure Continuous Delivery Pipeline","next":"DevSecOps- Tips for Success"}]'
path_count: 1
tags:
  - course
  - topic/security
  - topic/devops
  - skill/application-security
  - skill/devsecops
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cybersecurity/Application%20Security%20in%20DevSecOps.md)

![Application Security in DevSecOps](https://media.licdn.com/dms/image/v2/D4E0DAQF37BYmtSlFBA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1736370992396?e=2147483647&amp;v=beta&amp;t=CjGpKT_f8zYrYyZcLPNaIMhrlof7c1-_AgLvfRvC2OQ)

# Application Security in DevSecOps

> With DevOps continuing to grow in prominence, modern businesses expect applications to be built with greater speed and efficiency than ever before. Even so, the importance of application security cannot be downplayed for the sake of a pressing deadline. In this course, learn how to build a continuous application security process that meshes with the faster-paced world of DevOps. Instructor Tim Cha

> [LinkedIn Learning](https://www.linkedin.com/learning/application-security-in-devsecops-25151529) | 1h 37m | Intermediate | 3K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Introduction to application security in DevSecOps](#introduction-to-application-security-in-devsecops)
  - [What you should know](#what-you-should-know)
- [**1. DevSecOps Basics**](#1-devsecops-basics) (4 videos)
  - [What is DevSecOps?](#what-is-devsecops)
  - [How is application security different](#how-is-application-security-different)
  - [The key to DevSecOps is continuous](#the-key-to-devsecops-is-continuous)
  - [What is a DevOps pipeline?](#what-is-a-devops-pipeline)
- [**2. Continuous Application Security**](#2-continuous-application-security) (9 videos)
  - [Continuous static scanning](#continuous-static-scanning)
  - [Continuous dynamic scanning](#continuous-dynamic-scanning)
  - [Interactive application security scanning](#interactive-application-security-scanning)
  - [Continuous secret scanning](#continuous-secret-scanning)
  - [Continuous dependency scanning](#continuous-dependency-scanning)
  - [Continuous container security](#continuous-container-security)
  - [Continuous infrastructure as code scanning](#continuous-infrastructure-as-code-scanning)
  - [AI application security](#ai-application-security)
  - [Continuous application runtime monitoring](#continuous-application-runtime-monitoring)
- [**3. Practicing Continuous Application Security**](#3-practicing-continuous-application-security) (5 videos)
  - [Tying it all together](#tying-it-all-together)
  - [Managing the results](#managing-the-results)
  - [Metrics](#metrics)
  - [Challenge: Building a continuous AppSec toolkit](#challenge-building-a-continuous-appsec-toolkit)
  - [Solution: Building a continuous AppSec toolkit](#solution-building-a-continuous-appsec-toolkit)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to application security in DevSecOps](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/introduction-to-application-security-in-devsecops?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/introduction-to-application-security-in-devsecops?u=76281980&t=0)** - [Tim] In today's fast-paced [[Software Development]] landscape, [[DevOps]] teams are constantly pressured to build applications quickly and maintain agility. Security teams face the critical challenge of integrating robust security practices without compromising development speed. [[DevSecOps]] bridges the gap by embedding security directly into the development process. This course provides a comprehensive framework for building a continuous [[Application Security]] strategy that aligns seamlessly with DevOps methodologies. Throughout this training, we'll explore the core principles of DevSecOps, the strategic role of application security in modern development, practical integration of security tools like TruffleHog and DefectDojo, and techniques for embedding security seamlessly into DevOps workflows. I'm Tim Chase, and I'll guide you through transforming security from a potential bottleneck into a collaborative, integrated component of your software development lifecycle.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DevOps]] (3), [[Software Development]] (2), [[DevSecOps]] (2), [[Application Security]] (2)
> **Speakers:** - [tim] (1)

#### [What you should know](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/what-you-should-know?u=76281980&t=1)** - [Instructor] Let's take some time to understand some of the concepts that we should be familiar with before starting this course, and then some of the software that we can install before beginning this course that will make the exercises go more smoothly. First, you should have a high-level [[DevOps]] understanding. We will talk a little bit about DevOps in this course and the CI/CD process, but it will really help if you have a general high-level understanding of what DevOps is and how it's integrated into an SDLC process. You should also have some general information security experience. We're going to be talking about some concepts related to [[Application Security]] and [[DevSecOps]] where a background in information security would really be helpful. And finally, we're going to be running some commands from the terminal, so being able to understand how to bring up a terminal in [[Windows]] or [[Linux]] would really be advantageous. Before starting the course, you can also set up some of the tools that we'll be using. The first tool is Semgrep. If you go to [semgrep.dev](https://semgrep.dev), you can set up an account. You can set it up at no cost. That way, when we go through the exercise, you'll be ready to go. The second tool is TruffleHog. If you go to [github.com/trufflesecurity/trufflehog](https://github.com/trufflesecurity/trufflehog), there are instructions on how you can install this for your particular operating system. We'll be writing and executing a [[Python (Programming Language)|Python]] script in this course, so it will help if you go ahead and have this installed.
>
> **[1:35](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/what-you-should-know?u=76281980&t=95)** We'll be using Contrast Security for our IAS section. You can set up a free account through their community edition. You should also have a [[GitHub]] account already set up. And when you do, go to [github.com/webco/webco](https://github.com/webco/webco),
>
> **[1:57](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/what-you-should-know?u=76281980&t=117)** and fork this into the GitHub repository that you just created. You can just hit create a new fork and that will fork it into your GitHub account. And finally, we will be using Visual Studio or VS Code. It's free, so go ahead and download this at code.[visualstudio.com/download](https://visualstudio.com/download), and download the installation appropriate for your operating system.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (5), [[DevOps]] (3), [[Application Security]] (1), [[DevSecOps]] (1), [[Windows]] (1)
> **Tools:** github (5), terminal (2), visual studio (1), vs code (1)
> **Prerequisites:** set up (4), install (2)
> **URLs:** [github.com](https://github.com) (2), [semgrep.dev](https://semgrep.dev) (1), [visualstudio.com](https://visualstudio.com) (1)
> **CLI Commands:** make (1), cd (1), python (1)
> **UI Navigation:** go to (3)
> **Env Vars:** sdlc (1), ias (1)
> **Exercise Files:** download the (1)


### 1. DevSecOps Basics

[↑ Back to Table of Contents](#table-of-contents)

#### [What is DevSecOps?](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/what-is-devsecops?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/what-is-devsecops?u=76281980&t=1)** - [Instructor] [[DevOps]] and security don't always seem to play well together, so it's important to see how we can make them work with each other. Let's start by talking about the problems of security in the DevOps world. Some of the core principles of DevOps may seem to be at odds with the traditional security practices. Security has historically lagged behind the rapid pace of development in many organizations. As application release cycles continue to accelerate, security cannot be the bottleneck. We must find ways to adapt security practices to keep up without compromising quality or increasing risk. The core challenge is balancing speed and agility with robust [[Security Testing]]. False positive and false negative rates must remain low even as processes become more efficient. Security cannot be an afterthought in the DevOps transformation. It must be seamlessly integrated. There are a few key considerations for aligning security with DevOps. Staffing. Should security be embedded within each DevOps team or provided as a shared service across teams? Automation. How can security testing and controls be automated to keep pace with frequent releases? Visibility. How can security gain full visibility into the application pipeline
>
> **[1:33](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/what-is-devsecops?u=76281980&t=93)** to identify and address vulnerabilities early? The goal should be to make security a true enabler of DevOps, not a roadblock. With the right approach, security can become more responsive, efficient, and effective in the new delivery model. [[DevSecOps]] integrates security practices directly into the DevOps lifecycle. The core idea is to apply the same DevOps principles of collaboration, automation, and continuous improvement to security. Rather than security being a separate siloed function, DevSecOps embeds security seamlessly into the application delivery process. This allows security to scale alongside DevOps teams rather than falling behind. The goal of DevSecOps is to make security an integral, transparent part of the DevOps workflow, not an afterthought or a roadblock. By automating security testing and controls, security can keep pace with the rapid [[Continuous Delivery (CD)|continuous delivery]]. DevSecOps offers several key benefits when implemented effectively. [[Scalability]]. Security can scale alongside DevOps teams, adapting to changes in process, tools, and sprint cadence. Responsiveness. DevSecOps allows security to be more [[Agile Development|agile]], addressing defects, changes, and new feature requests in lockstep with development. Collaboration. By blending security responsibilities into DevOps teams, DevSecOps fosters tighter cross-functional collaboration.
>
> **[3:11](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/what-is-devsecops?u=76281980&t=191)** Ultimately, the goal of DevSecOps is to make security a seamless enabler of the DevOps lifecycle, not a separate gating function. When done well, it can unlock significant improvements in speed, quality, and risk management. The three most important principles of DevSecOps are speed. Security must keep pace with accelerating development and release cycles. Automation is key to achieving this. Quality. Improved speed cannot come at the expense of security effectiveness. False positive and false negative rates must be maintained or improved. Empowerment. Security teams must shift from a gatekeeper role to an advisory auditing role, empowering DevOps teams with more security ownership and responsibility. The overarching goal is to make security a collaborative, embedded partner in the DevOps process, not a separate silo or bottleneck. This requires rethinking security's role, tools, and processes to work in harmony with.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DevOps]] (16), [[DevSecOps]] (8), [[Security Testing]] (3), [[Continuous Delivery (CD)|Continuous delivery]] (1), [[Scalability]] (1)
> **CLI Commands:** make (5), find (1)
> **Speakers:** - [instructor] (1)

#### [How is application security different](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/how-is-application-security-different?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/how-is-application-security-different?u=76281980&t=0)** - [Instructor] In this course, we'll explore how [[Application Security]] can be seamlessly integrated into the [[DevOps]] lifecycle through [[DevSecOps]] practices. While there is no single silver bullet, we'll cover a range of tools and processes to help bridge the gap between security and [[Agile Development|agile]] delivery. We'll start by examining traditional application security approaches and how they differ from a DevSecOps model. Understanding the limitations of legacy security practices is key to driving the necessary cultural and process changes. In a traditional setup, security is often siloed as a separate team or function. When development teams are ready to test their code, they'll typically pass it off to the security team for review and vulnerability scanning. This handoff based approach introduces several challenges. It's a manual, document-heavy process with security teams providing lengthy reports for developers to interpret. It's inherently slow and cumbersome, out of sync with the pace of agile development. It creates an us versus them dynamic with security and development teams at odds over risk tolerance and false positive rates. Fundamentally, this legacy security model is incompatible with the core principles of DevOps: automation, collaboration, and continuous improvement. As you can see, this traditional workflow is long, complex, and ill suited for today's rapid release cycles. It introduces significant delays
>
> **[1:35](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/how-is-application-security-different?u=76281980&t=95)** and friction between the teams. The key issues with the old security approach are: Lack of integration. Security is a completely separate function, disconnected from the development lifecycle. Manual processes. [[Security Testing]] and reporting is a slow, document-driven exercise. Misaligned incentives. Security and development teams often find themselves at odds over risk tolerance. And fourth, inability to scale. The manual model cannot keep pace with accelerating release timelines. All of these limitations run counter to the core principles of DevOps: automation, collaboration, and continuous improvement. A new security model is needed to enable DevOps success. The solution is to apply DevOps principles directly to application security to DevSecOps. This means automating security testing and controls into the build and development pipeline, integrating security seamlessly into the development workflow, and providing security results directly to the DevOps teams in their existing tools and processes. By making security an embedded automated part of DevOps, we can achieve the speed, quality, and [[Scalability]] required in a modern delivery model. The key aspects of this DevSecOps workflow are: Security testing is triggered automatically with each build,
>
> **[3:07](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/how-is-application-security-different?u=76281980&t=187)** running in parallel with other development activities. Test results are fed directly into the DevOps team's existing issue tracking system, like [[Jira]] or [[Slack]], for immediate visibility and remediation. Security thresholds can be set to automatically pass/fail builds based on predefined risk tolerances. And the security testing process is standardized and repeatable regardless of frequency, daily, weekly, et cetera. This integrated automated approach is essential for aligning security with the speed and agility of DevOps.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DevOps]] (9), [[DevSecOps]] (4), [[Security Testing]] (4), [[Application Security]] (3), [[Agile Development|Agile]] (2)
> **Tools:** jira (1), slack (1)
> **Definitions:** is a  (2)
> **CLI Commands:** find (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### [The key to DevSecOps is continuous](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/the-key-to-decsecops-is-continuous?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/the-key-to-decsecops-is-continuous?u=76281980&t=0)** - [Instructor] The core principles of both [[DevOps]] and [[DevSecOps]] center around the idea of continuous everything: testing, integration, delivery and monitoring. Maintaining this continuous flow is essential for achieving the desired speed and agility. The two main goals of DevOps are speed, the ability to quickly respond to changing business needs, priorities and defect fixes through rapid, frequent releases and constant feedback, implementing processes that provide real time visibility into the health of the application and development pipeline. To achieve these goals, DevOps relies on two key practices: [[Continuous Integration (CI)|continuous integration]], CI, and [[Continuous Delivery (CD)|continuous delivery]], CD. Continuous integration is a fundamental DevOps practice that involves regularly merging code changes into a shared repository, triggering automated build and testing processes. Instead of infrequent, big bang integration efforts, CI promotes frequent small code check-ins multiple times a day, automated build [[Unit Testing]], and static analysis and earlier detection of issues and defects. This continuous integration approach allows development teams to identify problems quickly and integrate changes smoothly. Building on the foundation of CI,
>
> **[1:34](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/the-key-to-decsecops-is-continuous?u=76281980&t=94)** continuous delivery automates the release process. Once code changes past the CI pipeline, they can be automatically deployed to staging or production environments. CD enables automated provisioning and deployment of application artifacts, the ability to release new features and updates on demand and consistent, repeatable release processes. CD brings the continuous mindset all the way through to customer facing environments, shortening the feedback loop. For organizations with mature CI/CD practices, continuous deployment takes a concept even further. In this model, successful completion of the automated testing pipeline triggers an immediate deployment to production. Continuous deployment requires exceptional development, testing and release controls to work effectively. It represents the pinnacle of DevOps maturity, radically accelerating time to market. As this diagram illustrates, the core of DevOps is this continuous feedback driven lifecycle. Changes are frequently integrated, automatically tested, and continuously delivered or deployed, creating an ever improving accelerating process. To make this continuous DevOps model work, [[Application Security]] must be seamlessly integrated as well. In the upcoming sections, we'll explore how to embed [[Security Testing]] and controls directly into the CI/CD pipeline,
>
> **[3:09](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/the-key-to-decsecops-is-continuous?u=76281980&t=189)** empowering DevOps teams to own and manage the security process. The key is to make security testing an automated, continuous part of the development workflow, not a separate manual function. By handing security tools and processes over to the DevOps team, we can achieve the speed and agility required without sacrificing security, quality or effectiveness.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DevOps]] (9), [[Continuous Integration (CI)|Continuous integration]] (3), [[Continuous Delivery (CD)|Continuous delivery]] (2), [[Security Testing]] (2), [[DevSecOps]] (1)
> **CLI Commands:** cd (5), make (2)
> **Definitions:** is a  (1)
> **Best Practices:** the key is (1)
> **Speakers:** - [instructor] (1)

#### [What is a DevOps pipeline?](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/what-is-a-devops-pipeline?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/what-is-a-devops-pipeline?u=76281980&t=1)** - [Presenter] The modern development environment is a dynamic interconnected ecosystem characterized by frequent releases. Gone are the days of months long deployment cycles, today we're talking about [[Continuous Delivery (CD)|continuous delivery]], pushing updates daily, sometimes even hourly. This rapid iteration allows businesses to respond quickly to market demands and user feedback. Also, comprehensive automation, from code commit to production deployment, every step is automated. This eliminates human error, reduces manual overhead, and ensures consistent repeatable process across the entire [[Software Development]] lifecycle. In collaborative multi-team approach, breaking down traditional silos between development, operations and security teams, we're creating a culture of shared responsibility where communication and collaboration are key to delivering high quality software efficiently. A [[DevOps]] pipeline is much more than a technical workflow, it's a strategic approach to software delivery. It's a set of automated processes and tools designed to transform development and operations professionals collaborate. Imagine a seamless end-to-end process where code moves from a developer's imagination to a production environment with speed, reliability, and precision, that's the power of a DevOps pipeline. It bridges gaps, reduces friction, and creates a unified path from concept to customer.
>
> **[1:36](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/what-is-a-devops-pipeline?u=76281980&t=96)** What separates a good pipeline from a great one? Here are three critical characteristics. Speed of development, in today's competitive landscape, velocity is vital, a good pipeline dramatically reduces the time from code commit to production deployment, allowing organizations to innovate and respond to market changes rapidly. Comprehensive automation, beyond simple build and deployment process, we're talking about end-to-end automation. This includes code validation, security scanning, performance testing and deployment, all happening automatically and consistently. And then immediate actionable feedback, [[Real-Time]] insights are crucial, a superior pipeline provides instant feedback to developers, enabling quick corrections and maintaining high code quality throughout the development process. And [[DevSecOps]] represents the next evolution of the DevOps pipeline, integrating security directly into the development process. Strategic security automation, instead of treating security as a final point, we're embedding security tools and checks throughout the pipeline. Automated vulnerability scanning, compliance checks and risk assessments happen continuously. A balanced approach, we're achieving the perfect blend of speed and security, no more choosing between rapid development and robust protection, DevSecOps ensures both can coexist. And shared security responsibility, developers are no longer passive recipients of security recommendations,
>
> **[3:08](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/what-is-a-devops-pipeline?u=76281980&t=188)** they become active participants in the security process, understanding and addressing potential risks as an integral part of their development.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DevOps]] (3), [[DevSecOps]] (2), [[Continuous Delivery (CD)|Continuous delivery]] (1), [[Software Development]] (1), [[Real-Time]] (1)
> **Definitions:** is a  (1)
> **Analogies:** imagine (1)
> **Speakers:** - [presenter] (1)


### 2. Continuous Application Security

[↑ Back to Table of Contents](#table-of-contents)

#### [Continuous static scanning](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-static-scanning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-static-scanning?u=76281980&t=0)** - [Instructor] Now we'll dive into the practical application of [[Security Testing]] tools and how to integrate them into the [[DevOps]] pipeline. We'll cover several key types of [[Application Security]] testing, discussing what they are, how they can be automated, and walking through live demos. We'll start with static security analysis, which has been a foundational application security practice for many years. Static security testing involves analyzing the application source code to identify potential vulnerabilities without executing the code. The key advantages are it's an early shift-left security check in the development lifecycle, and it can catch certain classes of vulnerabilities that are difficult to find through dynamic testing. It's language-specific, so you have to use tools tailored to the languages in the code base. The potential downsides are that some static analysis tools can generate a high volume of false positives, requiring careful tuning and configuration. Maintaining an effective static testing process is critical for [[DevSecOps]]. When selecting and integrating a static security testing tool, there are several key qualities to look for. Speed. The tool must be able to analyze code bases quickly, keeping pace with frequent CI/CD cycles. Accuracy. Configurability and tuning options can help minimize false positives. API/[[CLI]] support. Automated headless execution
>
> **[1:33](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-static-scanning?u=76281980&t=93)** is essential for DevOps integration. Bug tracker integration. Seamless handoff of results to the development team's issue tracking system. Automating the static testing process and directly feeding results into the developer workflow is crucial for DevSecOps success. Here's an example of how static security analysis can be integrated into a [[Continuous Delivery (CD)|continuous delivery]] pipeline. Developer commits code changes to the shared repository. The CI system triggers an automated build, including a static code scan. The static analysis tool examines the source code and reports any findings. The results are automatically pushed into the team's bug tracking system, like [[Jira]], [[GitHub]], issues. And finally, developers receive immediate feedback on security issues into their existing workflows. This tight integration ensures that security testing is a repeatable, continuous part of the development process, not a separate manual gating function. Now it's time for a demo. In this demo, we'll walk through automating a static security scan using a popular web-based tool. You'll see how the tool can be executed from the UI and how the findings are reported back into a defect tracking system. This represents just one piece of the overall DevSecOps puzzle. In upcoming videos, we'll explore other application security testing techniques and how to weave them seamlessly into the CI/CD pipeline. Let's go over to our browser.
>
> **[3:09](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-static-scanning?u=76281980&t=189)** You can see here I am in GitHub, and I'm looking at the fork that I created from WebGoat. One of the precursors to starting the course was that you go to WebGoat and you create your own fork and your GitHub repository for WebGoat, and that's what you're looking at here. Next, we're going to go over to a tool called Semgrep. It's [semgrep.dev](https://semgrep.dev), as you can see here.
>
> **[3:40](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-static-scanning?u=76281980&t=220)** Go ahead and sign up. It's going to have you enter your username, a password. It'll create an organization. But what we're going to be doing here today is free. For more complicated things, you can pay for Semgrep, but what I'm going to show you here today is free. And if you remember, one of the keys that we want to talk about is we really want to integrate our testing tools in with our code base or our pipeline. And you can do this here in Semgrep, so let's walk through it. Inside of Projects, okay, we're going to go to Scan a New Project. Okay. I'm going to go to CI/CD, GitHub, and I'm going to select WebGoat. I'm going to hit Add CI Jobs. From here, you can review the YAML file that's going to be committed to your GitHub repository. As a part of this, when I set this up, there may be a few more screens that you have to go through to give permissions for Semgrep to integrate with your GitHub repository. Go ahead and give those permissions. I went ahead and allowed Semgrep to access all of my repos, since I really just use it for tests. But you may want to limit which repositories you give them access to. You can review the config here if you'd like. I'm going to go ahead and commit the file. Okay.
>
> **[5:16](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-static-scanning?u=76281980&t=316)** And now you can see here that it is starting a scan against WebGoat. This was a previous one that I did, and this last scan was 14 hours ago. The advantage of using these CI/CD scans is that anytime there are code changes, there's a GitHub action on the backend that's automatically going to trigger a Semgrep scan. So this is going to take a little bit to scan. And one of the things that I want to show you, as well, if you go to Settings and Integrations, you can set up an integration. And this goes back to meeting the developers where they're at. When you find issues inside of Semgrep, you can have them automatically sent to a [[Slack]] channel. You can have them sent to Jira if that's what they use for task tracking. Or if they have a different tool, there's a webhook that you can use to call to send in the results that way, as well. So this is an important part of the static security testing and doing it continuously. Let's go back to our projects. And this scan is still in progress, and this may take just a little bit of time. Okay, now you can see that our scan is finished. So let's go look at the code findings. And you can see here we have 247 matching findings. And so you can go through here and look at all the different findings and go line by line through the different static analysis. But the idea is that you take the results from the scan and send them to Jira
>
> **[6:47](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-static-scanning?u=76281980&t=407)** or send them to Slack or something like that, that developers can work in. One thing to keep in mind is we may not want to send all of the issues straight to Jira or Slack. You can start with the criticals or with the highs. Send a few at a time so that they don't get overwhelmed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (7), [[Security Testing]] (5), [[Jira]] (4), [[Application Security]] (3), [[DevSecOps]] (3)
> **Tools:** github (7), jira (4), slack (3)
> **CLI Commands:** cd (4), find (2)
> **UI Navigation:** go to (4)
> **Env Vars:** api (1), cli (1), yaml (1)
> **Exercise Files:** source code (2)
> **Definitions:** is a  (1), is an  (1)
> **URLs:** [semgrep.dev](https://semgrep.dev) (1)

#### [Continuous dynamic scanning](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dynamic-scanning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dynamic-scanning?u=76281980&t=0)** - [Instructor] The next type of [[Application Security]] testing we will cover is dynamic analysis. This is the second most common [[Security Testing]] approach utilized by development teams, security professionals, and penetration testers alike. Dynamic testing is akin to an automated penetration test. It involves scanning a running web application to discover its pages, [[Forms]], links, and other attack surface areas. The tool then systematically attempts to identify vulnerabilities by interacting with the application. Unlike static analysis, which examines the source code, dynamic testing is largely language-agnostic. As long as the application has a web interface, the testing can be performed. From a security tester's perspective, dynamic testing is considered a black box approach, as the tester doesn't need to understand the inner workings of the application. One key consideration when integrating dynamic testing into a CI/CD pipeline is to run it asynchronously. Since these scans can be time-consuming, it's best to kick them off in the background and allow the build process to complete rather than holding up the entire pipeline. When selecting a [[Dynamic Application Security Testing]] tool for [[DevSecOps]], look at the following qualities. Speed. The tool must be able to complete scans quickly, keeping pace with frequent builds and releases. Accuracy. The tool should have strong detection capabilities for the technologies and languages used in your application.
>
> **[1:37](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dynamic-scanning?u=76281980&t=97)** API/[[CLI]] support. Automated headless execution is essential for seamless [[DevOps]] integration. Bug tracker integration, the ability to directly feed findings into the development team's issue tracking system. Tools like [[OWASP]] ZAP and [[Burp Suite]] are popular open source options that meet many of these criteria. Integrating [[Dynamic Application Security Testing]] into a CI/CD pipeline follows a similar pattern to static analysis. The CI/CD process triggers a dynamic scan of the running application, typically after a successful build. The DAST tool crawls the application, identifies vulnerabilities, and reports the findings. The results are automatically pushed into the team's bug tracking system for developer remediation. The key difference is running the dynamic scan asynchronously, allowing the build process to complete without being blocked by the potentially lengthy testing process. In this demo, we'll walk through automating a dynamic application security scan using an online tool. You'll see how the tool can be executed from the UI, how it interacts with the running application, and how we can report the findings back into the development workflow. This represents another important piece of the DevSecOps puzzle. In the next section, we'll explore additional security testing techniques and how to weave them seamlessly into the CI/CD pipeline. Let's go over to our tool.
>
> **[3:10](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dynamic-scanning?u=76281980&t=190)** We're going to use a tool called Aikido. So if you go to app.[aikido.dev](https://aikido.dev), you'll have to sign onto it, create an account. This particular tool has a free option, but it also has a. The paid option can be used if you have more projects that you want to scan. But for our purposes, I'm using the free plan. If you come here, when you first come in, and we go look at the feed, it's going to give you information on all of the applications that it's scanning. One of the things that you notice is I personally signed in with my [[GitHub]] account. It took in a lot of the GitHub repos that I have, and it performed a static analysis tool on them as well. So this particular tool has SAST, and it has dynamic, which I think is an interesting combination. What we're going to do is we're going to set up a dynamic scan inside of this tool. So let's go down here to Domain. Remember, with dynamic scans, we're going to point something at a URL. It's not a code-based scan. So let's go over here to [[Google]]-gruyere, which is one of my favorite online applications that's meant to be vulnerable. If you come here, if you go to go to google-gruyere.[appspot.com](https://appspot.com), hit Continue, now it's going to tell you a little bit about what this is about, how to use it, so on and so forth.
>
> **[4:46](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dynamic-scanning?u=76281980&t=286)** We're going to click this link right here, which is to start. Okay. It's telling you, "Hey, this is not secure. Don't put any real data in here. This is just for test." We understand, so let's hit Resume, and now we're in the application. What I'm really interested in is this URL, so take this URL, which is going to be unique to you. Go back over to Aikido Security, hit Add Domain.
>
> **[5:16](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dynamic-scanning?u=76281980&t=316)** Go ahead and type in the domain. For the Application Type, I'm going to use Front-End. It's a CSP, safe cookie. It's not really hosted third-party software. So we're going to keep that, and then we're going to hit. And right here, you could also link a domain to a repository. So if this particular domain were associated with a repo that we were looking at earlier, you could link those together, but we're not going to do that. And we'll hit Finish, and now the scan is going to happen. So on the background, it's utilizing Zap to scan Google Gruyere's website that we just set up. So we'll give it just a couple of minutes to finish the scan. Now the scan is finished. I'm going to click on Open, and you can see that it has found some potential issues. This one, and it's even given you a potential fix time, how long it will take to fix, which is pretty cool. But you can see here, this was from the dynamic scan. This was not from the code. And so you can go through here, and you can review these. So once you have these, obviously, we don't want to send this webpage necessarily to our developers, so let's look at the integrations. Okay, a couple that are of interest if you scroll down. It really matters where your developers work. If they work in [[Slack]], you could take these results, and you can put them over to Slack. If they work in [[Jira]], once again, you could send these results over to Jira and add them as tasks that your developers can work through. Another one that I like is the GitHub,
>
> **[6:52](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dynamic-scanning?u=76281980&t=412)** the CircleCI sort of integrations. Obviously, with GitHub, you can set it up so that if a particular PR has a security issue, it will stop the code from being merged. Also with [[Jenkins]] and CircleCI, I like these two because you can also kick off scans or have the integrations between those so that if a particular vulnerability or number of vulnerabilities are reached, you could always stop the build from happening. So those are a couple of plugins that I really like, but this is overall a great tool that you can use for dynamic testing, but you could also look at it for your SAST testing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Application Security]] (4), [[GitHub]] (4), [[Google]] (3), [[Security Testing]] (2), [[DevSecOps]] (2)
> **Env Vars:** url (3), sast (2), api (1), cli (1), owasp (1)
> **Tools:** github (4), slack (2), jira (2)
> **UI Navigation:** go to (3), click on (1), scroll down (1)
> **CLI Commands:** cd (4)
> **URLs:** [aikido.dev](https://aikido.dev) (1), [appspot.com](https://appspot.com) (1)
> **Prerequisites:** set up (2)
> **Cross-References:** in the next (1)

#### [Interactive application security scanning](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/interactive-application-security-scannning?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/interactive-application-security-scannning?u=76281980&t=1)** - [Instructor] The next type of [[Application Security]] testing we'll explore is interactive application security testing, otherwise known as IAST. This emerging technique is gaining significant traction as it aligns perfectly with the continuous principles of [[DevSecOps]]. What is IAST? IAST represents the newest evolution in application security testing. Unlike static and dynamic scanning, which examine the code or running application from the outside, IAST works by instrumenting the application itself during runtime. IAST tools achieve this by integrating directly with the application's execution environment. For example, hooking into the [[Java]] Virtual Machine, JVM, for Java applications. This allows the IAST agent to observe the application's behavior and data flows in real time, identifying security vulnerabilities as they occur. The key benefits of this approach are continuous [[Real-Time]] monitoring during normal application usage, highly accurate vulnerability detection by observing actual data flows, and reduced false positives compared to static and dynamic analysis. When selecting an IAST tool for your DevSecOps pipeline, key factors to consider are language support. Ensure the tool integrates with the runtime environments used in your application stack. Accuracy. Look for low false positive rates and comprehensive vulnerability detection. Overhead.
>
> **[1:33](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/interactive-application-security-scannning?u=76281980&t=93)** Verify the IAST agent has minimal performance impact on the running application. For this demo, we'll be using the community edition of a leading commercial IAST product. You'll see how the tool instruments the application, the types of vulnerabilities it can detect, and how the results are surfaced back to the development workflow. IAST represents a powerful addition to the DevSecOps [[Security Testing]] arsenal. By embedding security testing directly into the application itself, it enables continuous, accurate vulnerability detection without introducing significant performance overhead. The tool that we're going to use is Contrast Security. At the moment they have a community edition that we can use for free. I know at some point they may change this over to a trial-based edition of Contrast, but the setup will work the same. It's been this way for years. So for our purposes, we're going to use the community edition. Go ahead and click it and you'll see I was automatically logged in because I was signed in. If you have to create an account, go ahead and do so. For the purposes of this demo, we are going to use the WebGoat source code. If you go to this website, you can [[Google]] Contrast Security and WebGoat and this will come up. But it will help you quickly set up the Java agent on WebGoat. But let's walk through what we're going to do
>
> **[3:08](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/interactive-application-security-scannning?u=76281980&t=188)** 'cause we're going to do things just a little bit differently here. The first thing that we're going to do, we're going to bypass this setup. And we're going to, the two things that you need to get from Contrast to work are a YAML file, which describes the properties, and you need to download the Contrast JAR. Okay? You can download the JAR by going into the Contrast documents, going into the installation part for agents, and you should see an install the Java agent. Inside of here, if you scroll down, you can go to Maven Central. And then there's a link in here to just download the JAR file directly, which is what I did.
>
> **[4:07](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/interactive-application-security-scannning?u=76281980&t=247)** Now you also need the YAML file. So let's take a look at this YAML file. I'm going to put a sample YAML file inside of the files for this course. From there, you can edit it to work with your configuration. You can see here I have it open in VS Studio and we're just going to modify a few things and I'll show you where to get this data. We're going to need the URL that you use. So just pay attention to the URL for contrast. If you look back here, by default, it uses a production URL, but since we're using the community edition, just to make sure that we've got this set up for ce.[contrastsecurity.com](https://contrastsecurity.com). You can see I have that here. And then we're going to get the API key, the service key, and then your username. Your username is just going to be your email address that you used. So let's look at where we can get these API keys and these service. Inside of here, you can go to your user settings and that's where you'll get the information that you need. So you can take the API key and your service key and you can put that directly inside of the YAML file phrase. So now you've downloaded the Contrast JAR file and you've downloaded the YAML file and got that set up. If you go to the page on how to set up Contrast with WebGoat, there's a link on downloading WebGoat from [[GitHub]]. So feel free to click that link and just download the source code and extract it is all that you have to do.
>
> **[5:41](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/interactive-application-security-scannning?u=76281980&t=341)** It will be a JAR file itself. And if you scroll down, now we're going to focus on the command line. So make sure that you, just for the simplicity sake, put the JAR file for WebGoat, the JAR file for Contrast, and the YAML file all in the same pack. So now we have our JAR file downloaded, we have our YAML file configured, and we have our source code for WebGoat downloaded. So now let's focus on executing this command from a terminal. For the sake of simplicity, I put all of those things inside of the same directory. That way you don't have to worry about navigating to different paths inside of your command line. So let's type this out. And this is what something, what it will look like. Java, and then Java agent. This is where you're going to point it to the name of your JAR. Pay attention to the name of your JAR here and the version number. Then contrast config. So you're going to point it to the YAML file. I called it WebGoat.YAML. And then slash JAR. So this is going to point to your WebGoat JAR that you downloaded. And then this right here, this --server, this argument is going to just have it run on port 8082, just to avoid any conflicts that may happen to be running on your computer. So let's, so let's run this.
>
> **[7:19](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/interactive-application-security-scannning?u=76281980&t=439)** You can see it started, it's got some Contrast stuff going on. And when it looks to be up and running, which will just take a second, it doesn't take very long, we will head over and we will look at WebGoat. Okay? And just start using it. Register a user.
>
> **[7:51](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/interactive-application-security-scannning?u=76281980&t=471)** Agree, this is all test. And then just start looking through here, right? And just start looking through here and clicking it. 'Cause if you remember, IAST depends on the application being exercised to test. So once you do that, and actually just once you bring up WebGoat and you can see that it's working, if you come over to Contrast and just go to applications, you'll see that it's running and you'll see that you've got one server, which is the machine that I'm running it on, and it's got 138 libraries with 27 of them vulnerable. And you can just click through and look at the vulnerabilities here.
>
> **[8:45](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/interactive-application-security-scannning?u=76281980&t=525)** So this is how interactive application security testing works. You didn't point it to the source code, you didn't run a scan, per se, but as you're using the application, as it's running, it's automatically testing. And then, obviously, once you get kind of, once you want to get it connected, you can connect this to [[Slack]], you can connect it to [[Jira]], and you can really kind of get that continuous flow.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (6), [[Application Security]] (3), [[DevSecOps]] (3), [[Security Testing]] (3), [[Real-Time]] (1)
> **Env Vars:** jar (12), iast (11), yaml (10), url (3), api (3)
> **Exercise Files:** source code (4), download the (4)
> **UI Navigation:** go to (5), scroll down (2)
> **Prerequisites:** set up (4), setup (2), install (1)
> **Tools:** command line (2), github (1), terminal (1), slack (1), jira (1)
> **CLI Commands:** make (2)
> **File Paths:** webgoat.yaml (1)

#### [Continuous secret scanning](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-secret-scanning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-secret-scanning?u=76281980&t=0)** - [Instructor] In today's cloud-first world, protecting our secrets has become more challenging than ever. This isn't just about traditional cloud providers like AWS and [[Microsoft Azure|Azure]], it extends to our entire development ecosystem, including code repositories like [[Bitbucket]] and [[GitHub]]. Today, we'll explore how to proactively scan our code for secrets before they make it to production. Secret scanning is your first line of defense against accidentally exposed credentials in your code base. Here's what you need to know. Common exposures include AWS keys, passwords, and API [[Tokens]]. [[Infrastructure as code (IaC)|Infrastructure as code]] files are particularly vulnerable. Best practice is to implement pre-commit hooks to catch secrets before they're committed. Failed scans should block the commit process. When selecting a secret scanning solution, consider these key factors. Accuracy is paramount. Look for tools with sophisticated entropy detection. Avoid solutions that rely solely on simple regex patterns. Speed matters. Balance thoroughness with performance. Expect some tuning. Initial setup may require multiple iterations to reduce false positives. The process follows a pretty straightforward flow for scanning for secrets. The developer initiates the code commit, an automated secret scanning job is triggered, and then the tool analyzes code on the source server,
>
> **[1:34](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-secret-scanning?u=76281980&t=94)** and the results determine whether the code proceeds. Now let's see secret scanning in action with an open source tool that embodies these principles. [[Real-Time]] scan of a sample code base, demonstration of detection capabilities, and then review of the scanning results and remediation steps. We're going to look at a couple of tools to perform our secret scanning. We've already looked at Aikido before, but I want to take another look. I'm looking at my Feed, I'm logged back into our Aikido queue, and Aikido takes your repositories from GitHub and automatically scans them. So based on adding WebGoat, you should have a scan for WebGoat. But let's take a look at some of the code bases that I have. If you come in here to All types, you can see Exposed Secrets. Now you can see here that we have a generic password field inside of this terragoat repo. Inside of my bWAPP demo, I have two exposed secrets. I mean, you can click over here and you can see the secret that is exposed. A lot of modern static analysis-type tools have secret scanning built into them, because they're already looking at the code base, they can already scan for secrets fairly easily by just using some regex patterns,
>
> **[3:07](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-secret-scanning?u=76281980&t=187)** or utilizing some open source software inside of their product. But if you want to do this separately, one of my favorite tools that I've used for years is called TruffleHog, and you can find it on GitHub under trufflesecurity/trufflehog. Truffle Security actually has an enterprise version of this as well that makes it really easy to connect in with your repositories to do the automated secret scanning as a part of the CI/CD process. We are going to use the open source one and run it from the command line here. If you scroll down, there's several different ways to do the install. You can run the Docker image. I'm running a Mac, so I'm going to use the simplest one, which is brew install trufflehog. If you haven't done that, go ahead and do that. That'll just take maybe 30 seconds or a minute. Let's look at some examples. I'm going to use an easy one. You can scan S3 buckets, you can scan GitHub repos. I'm going to go to one that scans a Docker image. Truffle Secrets has one called secrets that is pre-populated. I'm just going to hit Copy, and that's copied, and then I'm going to switch over to my command line. And you can see here, I've already got it. Ready to go. Trufflehog command line, we're going to scan a Docker image. The image name is trufflesecrity/secrets.
>
> **[4:41](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-secret-scanning?u=76281980&t=281)** It'll only scan for verified secrets. It will run. It runs fairly quickly. The speed of this really does depend on the size of what it's scanning. For larger code bases, this can take quite a long time. So there are some entropy-type of configurations that you can choose to really narrow down the scope of your secret scanning. And you can see here, oh look, I have an AWS key that it found, okay? And so it's going to tell you, "Hey, you probably want to fix this." So you can see, that's fairly straightforward secret scanning. You can actually scan in the CI here as well. There's a Circle CI plugin, and there's a Travis CI plugin that you can use. And the idea here, by calling this from the command line, would be that you can fail it on commit if there are secrets that are found, which is ultimately what you want to do.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (4), [[Microsoft Azure|Azure]] (1), [[Bitbucket]] (1), [[Tokens]] (1), [[Infrastructure as code (IaC)|Infrastructure as code]] (1)
> **CLI Commands:** aws (3), docker (3), make (1), find (1), cd (1)
> **Tools:** github (4), command line (4), bitbucket (1)
> **Env Vars:** aws (3), api (1)
> **Prerequisites:** install (2), setup (1)
> **UI Navigation:** scroll down (1), go to (1)
> **Code Identifiers:** bwapp (1)
> **Exercise Files:** sample code (1)

#### [Continuous dependency scanning](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dependency-scanning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dependency-scanning?u=76281980&t=0)** - [Instructor] Modern applications rely heavily on open source libraries to accelerate development and avoid reinventing the wheel. While these libraries provide tremendous value, they also introduce security risks since their development and maintenance occur outside of our direct control. Understanding and managing these risks is a critical component of any [[DevSecOps]] program. Open source security has become a major focus in [[Application Security]] for several reasons. Widespread usage. Nearly every modern application incorporates open source components. High-profile vulnerabilities. Critical vulnerabilities in popular libraries, for example, Apache Struts, have led to major security incidents. [[OWASP]] recognition. Using components with known vulnerabilities is now a part of the OWASP Top 10. And developer priorities. Updating libraries often competes with feature development for developer retention. For some best practice, implement automated build failures for critical vulnerabilities to ensure timely remediation. This creates the necessary urgency around addressing open source security issues. When choosing a tool for open source security scanning, key considerations include speed, the tool should quickly identify vulnerable dependencies, accuracy, results should be reliable, with minimal false positives,
>
> **[1:33](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dependency-scanning?u=76281980&t=93)** language support, the tool must support your application's technology stack, integration capabilities, easy integration with build systems and bug trackers. Most tools work by comparing your applications dependencies against known vulnerability [[Databases]], CVEs, making this a relatively straightforward but crucial security check. The workflow for continuous open source [[Security Testing]] follows a similar pattern. Developer commits code with updated dependencies, build process triggers automated library security scan, tool analyzes dependencies against known vulnerability databases, builds can be automatically failed based on configured vulnerability thresholds, results are reported back to development teams for remediation. This automated approach ensures consistent enforcement of open source security policies without manual intervention. Now let's take a look at a demo. In this demo, we'll walk through setting up an automated dependency scanning and how we can integrate that with bug tracking systems. Managing open source security is essential for modern application security. By incorporating automated dependency scanning into your CI/CD pipeline, you can ensure that vulnerable components are identified and addressed before they make it to production. Let's head back over to Akido. One of the good things about modern tools is that a lot of times they combine multiple features.
>
> **[3:09](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dependency-scanning?u=76281980&t=189)** Back when I first started doing security testing, there would be static analysis tools and dynamic analysis tools and open source scanning tools. But a lot of times, you can combine these tools together. An example here is Akido, and you can actually look at the open source vulnerabilities in the same place that you can look at your static code vulnerabilities. So let's go over here to our Feed, and this is based on what we've done previously, where we have set up Akido, we've already logged in, set up our repositories, all of that. So on the Feed, you're going to filter for open source dependencies. And you can see here, let's take the look at this first one. All of these are open source in a particular project. I have a shiftleft-[[Java]]-demo project here, and if I click on it, you can see, in this particular library, it's affected by three different vulnerabilities. So how do you fix it? It suggests that you update to 1.13.12. From here, once again, you could take this, and all of these, you could look at your integration and you could send these straight on to [[Jira]], you could send them to [[Slack]], to have that whole automated process built out.
>
> **[4:44](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dependency-scanning?u=76281980&t=284)** And if you go down here to CircleCI, you can also look to stop your build based on certain open source criteria that have been found.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Application Security]] (2), [[OWASP]] (2), [[Databases]] (2), [[Security Testing]] (2), [[DevSecOps]] (1)
> **CLI Commands:** apache (1), cd (1), make (1)
> **Env Vars:** owasp (2)
> **Tools:** jira (1), slack (1)
> **Prerequisites:** set up (2)
> **Versions:** 1.13.12 (1)
> **UI Navigation:** click on (1)
> **Definitions:** is a  (1)

#### [Continuous container security](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continous-container-security?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continous-container-security?u=76281980&t=0)** - [Instructor] Containers have become increasingly popular in modern [[Application Development]] and deployment, introducing new security considerations that [[DevSecOps]] teams must address. In this section, we'll discuss what containers are, the key areas of container security, and how to incorporate continuous container [[Security Testing]] into your [[DevOps]] processes. In a traditional application architecture, the application components are deployed across multiple [[Virtual Machines]], each with its own operating system, libraries and configurations. This setup can be complex to manage and prone to environment-related issues and inconsistencies. Containers simplify this by providing a standardized, portable packaging model. Each container incorporates the application code, dependencies and runtime environment, allowing for consistent deployment across different environments. This containerized approach offers significant benefits in terms of deployment simplicity and consistency. However, it also introduces new security challenges that must be addressed. When securing containerized applications, there are three main areas of focus. Vulnerabilities: identifying known vulnerabilities in the container's base image and installed libraries and dependencies. Policy enforcement: ensuring containers are built and configured according to security best practices, like the CIS Benchmarks. And runtime protection: monitoring runtime containers for suspicious activity
>
> **[1:34](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continous-container-security?u=76281980&t=94)** and preventing container breakouts. For the purposes of this course, we'll primarily concentrate on the vulnerability management aspect of container security. An ideal container security solution would address all three key security areas: vulnerabilities, policies, and runtime; integrate seamlessly with your build and deployment processes, provide clear, actionable feedback on security issues; offer bug tracker integration for efficient remediation. While it's acceptable to start with a more narrow focus on vulnerabilities, the goal should be to build out a comprehensive container security strategy over time. Incorporating container security testing into a [[Continuous Integration (CI)|continuous integration]] and delivery pipeline is crucial. The container image is scanned for vulnerabilities during the build process. If any high-severity issues are detected, the build can automatically be rejected. Detailed vulnerability reports are sent to the development team for remediation. Only containers that pass the security checks are deployed to production. This continuous, automated approach to container security ensures that security is consistently enforced without introducing delays or friction in the delivery process. In this demo, we'll walk through the process of integrating a container security tool. You'll see how the tool can be used to identify vulnerabilities in container images, and how findings can be reported to the development team. Securing containerized applications
>
> **[3:07](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continous-container-security?u=76281980&t=187)** is a critical aspect of DevSecOps. By embedding security testing directly into the container build and deployment workflow, you can ensure that security remains a seamless, consistent part of your application delivery lifecycle. Now, let's come over to Aikido. I'm going to use this same tool to look at our container security. You can use other tools, like Anchore, A-N-C-H-O-R-E, to look at your container security, but I like to try and find tools that are easy to use, have the ability to have a UI or a [[CLI]]. That way, we can test as many things as possible and keep our lives simple. So come to Containers. And we're going to, there's a couple of different ways you can do it. If you have a container registry where you have all of your containers, you can connect the registry here. If you have a public Docker image that you want to scan and maintain, you can add it here, which is what we're going to do. Here's your registry location. We're going to use Docker Hub. And we're going to come here to WebGoat. Let's just keep on using our good ol' WebGoat, 'cause we know it's insecure. And we're going to enter the image identifier, which is webgoat/webgoat. And we'll just do Latest and we'll hit Save. Okay. Now, this will eventually scan, and we can look at the vulnerabilities that are associated with this particular Docker image.
>
> **[4:42](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continous-container-security?u=76281980&t=282)** And you can see that it's scanning right now. Now, if we want to set this up to integrate with our CLI, this is easy to do. Right now, this is going to run every night, but maybe we want to run it on demand, maybe we want to run it multiple times a day after every change, and you can do that. So if you look at the documentation here, here's a command that you can use to run from the CLI. Aikido, local scanner, image scan, the image name and the API key. This will allow you to do the scan from your local desktop or from CircleCI or [[Jenkins]], right? And if you want to be able to take the callback on it so you can fail your build, you can do that here using this switch, the fail on critical. Now, let's go back here to look and see if we have finished scanning. Ah, we have, so let's click on it. And now you'll see that it has scanned WebGoat container for vulnerabilities. So this is all part of the process. We connect our image repository. We can connect it to our Jenkins or our CI, so that we can automatically scan it on build. And once again, from an integration perspective, you can connect this to [[Jira]], connect it to [[Slack]], so you have this continuous container scanning pipeline built and set up.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Security Testing]] (3), [[CLI]] (3), [[DevSecOps]] (2), [[Jenkins]] (2), [[Application Development]] (1)
> **Env Vars:** cli (3), cis (1), api (1)
> **CLI Commands:** docker (3), find (1)
> **Tools:** jira (1), slack (1)
> **Prerequisites:** setup (1), set up (1)
> **Documentation:** the documentation (1)
> **UI Navigation:** click on (1)
> **Definitions:** is a  (1)

#### [Continuous infrastructure as code scanning](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-infrastructure-as-code-scanning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-infrastructure-as-code-scanning?u=76281980&t=0)** - [Instructor] [[Infrastructure as code (IaC)|Infrastructure as code]] security is about building security from the ground up. Let's talk more about it. Infrastructure as code revolutionizes how we deploy our systems. Think of it as writing a recipe for your entire infrastructure. Instead of clicking through countless setup screens, we define everything in code. Why does this matter? Every deployment is identical. No more, "It works on my environment." Teams can spin up entire environments with a single command, and [[DevOps]] teams can focus on innovation rather than repetitive tasks. But with great power comes great responsibility. When we write infrastructure as code, a single misconfiguration can be replicated across all environments. The good news, we can catch these issues before they ever reach production. Security checks become a part of the development process. Problems are caught when they are cheapest to fix, during development. Your IaC tool should feel like a natural part of your development workflow. Seamless IDE integration means developers get instant feedback. Language support ensures no blind spots in your infrastructure code. Bug tracker integration keeps security findings in your existing workflow. Let's look at how IaC security scanning works in practice. Developer writes infrastructure code. Code goes to the build server for initial processing. IaC scanner analyzes the code for security issues,
>
> **[1:35](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-infrastructure-as-code-scanning?u=76281980&t=95)** and results flow two ways. Source code analyzes identified potential vulnerabilities and then the findings are automatically triggered in your bug tracking system. This creates a continuous feedback loop that catches security issues early and often. By implementing IaC security scanning, we're not just checking boxes. We're building security directly into the infrastructure from day one. Now let's look at a demo of an IaC scanning tool. We'll look at one from a UI, but we'll also look at one from the [[CLI]], where you can use it to integrate with [[Jenkins]] or Travis CI or CircleCI. Let's start by looking at TerraGoat. One of the prerequisites for the course was taking your [[GitHub]] repo and cloning TerraGoat into it. And so you can see that here. If you come into a Akido Security, which we've used before, come to your feed, and under All Types, look at Infrastructure as Code. TerraGoat is a purposely misconfigured IaC code base.
>
> **[2:54](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-infrastructure-as-code-scanning?u=76281980&t=174)** So what we're going to see from Akido are a lot of high, medium, low severity issues that result from misconfigured IaC. We're going to click on the first one that says S3 buckets should have block public access globally. So you can see here, S3 bucket should have a default public access block enabled, and here's the code for that particular [[Terraform]] item, and you can see that it does not have the default block public access enabled.
>
> **[3:34](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-infrastructure-as-code-scanning?u=76281980&t=214)** Now this helps from the UI, and once again you can take this, you can integrate Akido with your bug management suite. You can integrate it with CircleCI and Jenkins. But let's also take a look at another tool that's an open source tool. It's called Checkov. It is made by Bridge Crew, which was purchased by Palo Alto, but checkoff is still available as an open source product. We'll go down through here and it will give you some different screenshots describing what it can do, but let's first look at how to install it. I'm on a Mac, so I just did brew install checkov. You can also use pip to install it if you are on a different [[Linux]] operating system. So I installed it and now what I did was I downloaded TerraGoat to my local machine. So if you come here, go to this green button, and hit Download ZIP, I did that and I saved it to my directory. And then what we're going to do is we're just going to do a pretty quick scan from the CLI. So I'm in my directory right now. You can see I've got this AppSec for [[DevSecOps]] directory here on my MacBook. And this is what we're going to do. We're going to do checkov, and you can point it to a file or directory, and it's called terragoat-master, so I'll hit that and it will run a scan. And it's going to run, and it's going to tell you
>
> **[5:08](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-infrastructure-as-code-scanning?u=76281980&t=308)** that there are several misconfigurations. So if you look through here, suspicious use of [[Netcat]] with IP address, found artifact build without evidence of cosign sbom attestation in pipeline. So you can see that it's got several issues that it scanned from the source code that we downloaded. So this is an easy way to run it from the CLI, and you can take this, and with different configuration options, you can plug this into your pipeline to be able to pass or fail. And you can see a screenshot here where it integrates with Jenkins, and these are the tests that fail. So it's fairly easy to run from the command line or run it from your build server, your Circle CI server, where you can pass or fail based on the misconfigurations that come back, whether they're critical or whether they're high.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Infrastructure as code (IaC)|Infrastructure as code]] (4), [[CLI]] (3), [[Jenkins]] (3), [[DevOps]] (1), [[GitHub]] (1)
> **Env Vars:** cli (3), ide (1), zip (1)
> **Prerequisites:** install (3), setup (1)
> **CLI Commands:** terraform (1), brew (1), pip (1)
> **Exercise Files:** source code (2), github repo (1)
> **Tools:** github (1), command line (1)
> **UI Navigation:** click on (1), go to (1)
> **Definitions:** is a  (1), is an  (1)

#### [AI application security](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/ai-application-security?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/ai-application-security?u=76281980&t=1)** - [Instructor] Now we're going to explore how [[Generative AI]] is reshaping the landscape of [[Application Security]], both the opportunities and the challenges. Let's start with a striking statistic from Checkmarx's recent AppSec report. 80% of the security professionals are worried about security threats stemming from AI code generation. This isn't surprising, is it? When developers can generate entire functions with a simple script, we have to ask, "Who's validating this code? Are we introducing new vulnerabilities? How do we maintain control over our code?" But here's the flip side, and it's significant. The same report tells us that 31% of the security professionals believe AI will help both security teams and developers remediate issues faster. Think about that contrast for a moment, we're simultaneously concerned and optimistic, and for good reason. AI is like any powerful tool, its impact depends entirely on how we use it. Let's look at how we're currently seeing generative AI being used in security. Chatbots have become our instant security consultants, available 24/7 for immediate guidance. They can process and explain complex security concepts and help teams understand security best practices. They're also revolutionizing how we handle data, analyzing security logs in real time, identifying patterns in threat data, and generating actionable insights from security incidents.
>
> **[1:35](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/ai-application-security?u=76281980&t=95)** And yes, code generation, but with proper guardrails in place. Now let's get specific about AppSec applications. Security vulnerability analysis has been transformed. We can now have detailed conversations about specific vulnerabilities. AI helps explain complex attack vectors in simple terms. Teams can better understand the impact and urgency of issues. Code remediation is becoming more efficient. AI can suggest secure code alternative. It can explain why certain patterns are vulnerable, and it helps developers learn while they fix. And false positive reduction is a game changer. AI can analyze content more effectively than traditional tools. It helps prioritize which findings need immediate attention, and it saves precious time for both security teams and developers. While we must remain vigilant about AI-generated security risks, we can't ignore its potential to strengthen our security posture. The key is implementing it thoughtfully with proper oversight and op. The future of AppSec isn't about choosing between human expertise and AI, it's about leveraging both to create more secure applications than ever before. Now, let's look at a demo where we can use [[Generative AI|gen AI]] to analyze application security in real time. Let's flip over to VS Code. In a previous exercise,
>
> **[3:10](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/ai-application-security?u=76281980&t=190)** we have downloaded the source code for Terra, which if you remember is the vulnerable IaC codebase. Go ahead and just add it. If you haven't done that before. If you do Open Folder, open the folder where you have the source.
>
> **[3:33](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/ai-application-security?u=76281980&t=213)** Now, as part of the prerequisites, you should have installed the AWS add in for VS Code. So what works? If you haven't done that, go ahead and pause it and go and [[Google]] VS Code AWS plugin, download it and install it. It's pretty easy. And so here we are. And what I'm going to do is down here, I'm going to click on Q at the bottom of my screen here, and then I'm going to hit Run Project Scan, and it's going to scan the project for security issues. It is going to use the native AWS CodeWhisperer or Amazon Q product to scan the source code for security issues like static scanning, but also for IaC configuration issues. Now you can see here, here's an example, Enabled RDS public access. So now you can bring up Q and ask it questions.
>
> **[4:59](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/ai-application-security?u=76281980&t=299)** So here you go. So I just asked it, "How can I fix this vulnerability for enabled RDS public access?" And it says, Based on the file pass shown and the [[Terraform]] snippet, I can help you secure your RDS instance by disabling public access. It's a critical security best practice. Here's how to fix it." And it gives you the code to fix it, right? And then it goes in to tell you what security improvements this code made, and then here's some other security recommendations. That's pretty cool. And it lets you copy, copy, copy so that you can go ahead and do this. It doesn't automatically do it for you. Once again, if you remember, this is really an enabler. It's a tool to help. We're not looking for it at the moment to have it automatically generate code or replace your code. We really want it to look at it, see if we agree with it, and then you can copy and paste and be done with it. And you can see here also we're as far left as we can get, right? So that's the great part about this particular AI is that it's doing this in our development environment, and the developers can do this in real time while they're.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Generative AI]] (2), [[Application Security]] (2), [[Generative AI|Gen ai]] (1), [[Google]] (1), [[Terraform]] (1)
> **Env Vars:** aws (3), rds (3)
> **CLI Commands:** aws (3), terraform (1)
> **Tools:** vs code (3)
> **UI Navigation:** open the (1), click on (1)
> **Exercise Files:** source code (2)
> **Best Practices:** the key is (1), best practice (1)
> **Definitions:** is a  (1)

#### [Continuous application runtime monitoring](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-application-runtime-monitoring?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-application-runtime-monitoring?u=76281980&t=0)** - [Instructor] In this video, we're discussing why continuous security monitoring is essential in today's threat landscape. New vulnerabilities are released often. Security threats emerge daily. We can't rely on periodic scans. Traditional security reviews don't catch zero-day vulnerabilities. Runtime monitoring helps detect emerging threats in real time. Things do slip through the cracks, mo security review is perfect. Common misses are misconfigured services, unpatched dependencies, shadow IT. Runtime monitoring catches what initial scans miss. So you've got to watch for bad guys doing bad things, detect suspicious activity in real time. Unusual processes, unexpected connections, unauthorized changes, those are examples of suspicious activities that you should be monitoring for. And this enables rapid [[Incident Response]]. [[Continuous Monitoring]] is your persistent guardian, catching new threats, overlooked issues, and malicious activities, before they become breaches. Let's look at key features to consider when choosing a runtime monitoring solution. It must support your existing infrastructure, cloud containers, legacy systems. And look for native integration with your development and deployment tools. And avoid solutions that require major architectural changes. Use ML or AI for behavioral analysis.
>
> **[1:34](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-application-runtime-monitoring?u=76281980&t=94)** Smart detection of unusual patterns without manual rule creation reduces false positives through behavioral learning, and it adapts your environment's normal operations. And SIM alert integration should be seamless connection to your existing security tools, alerts should flow into your current incident response workflow, no separate console to monitor. The right tool should feel like it belongs in your environment, not like another piece of security overhead. This is an example of runtime monitoring and what it can look like from an architectural perspective, really focusing on some AWS services. And when you see here, the user input comes in and is first distributed through the load balancer. Traffic is split between multiple [[Amazon EC2|EC2]] instances for redundancy and scale, and then they go to Aurora for database usage. Two key monitoring components are in place. Amazon Aurora logs that monitors database activity, they're sent to GuardDuty. And also, the EC2 logs are sent to GuardDuty for monitoring. This works for a few reasons. GuardDuty is used to continuously monitor for things like suspicious API calls, potentially compromise EC2 instances, malicious database behavior, it takes everything inside of your AWS environment, and it can monitor for these behavioral abnormalities. This architecture gives us a visibility from the front door
>
> **[3:11](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-application-runtime-monitoring?u=76281980&t=191)** all the way through the data layer with AWS's native security tools working together to monitor the runtime. Now let's have a look at the demo. We're going to focus on AWS GuardDuty to understand what it does and the value that it can provide to us. There are other tools out there, like different sims, there's not going to be a lot of open source tools necessarily in this space, but GuardDuty is going to be the closest because a lot of people already use AWS. We'll focus on AWS, but each cloud provider will have their own options. [[Google]] will have Security Command Center, [[Microsoft]] has Sentinel, and [[Microsoft Azure|Azure]] has GuardDuty, but we're going to really focus in on GuardDuty for the purposes of this demo. If you come over here, you can get to GuardDuty by just logging into your console, typing in GuardDuty, and this is what it will show you. You're going to have to enable it if you've never enabled it before, but there's just a couple of things that you can do here to get it to show you some findings. An easy one that you can do is, you can create an S3 instance.
>
> **[4:28](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-application-runtime-monitoring?u=76281980&t=268)** And you can make sure that the instance is available to the public. This particular S3 bucket has public access enabled, which is going to send a flag here to GuardDuty, so you can see that GuardDuty is monitoring your production environment, and looking for the things that are going to cause you issues, or malicious behavior that has already happened, 'cause guard duty does have the ability to do malware scans as well. I'm going to flip over to a different region where it's got a little bit more data. And you can see here that in this particular instance, it has a lot more information, you can click through here. This particular [[Kubernetes]] policy has admin access set to default for this service account. So you can see that this is really monitoring the runtime of your environment. This instance has a suspicious shell created on it, so that would be something that you would want to look at. GuardDuty is pretty good at taking everything across all of your different cloud environments and putting them in one place, and monitoring at runtime for things like misconfigurations, suspicious activity and malware.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Amazon EC2|Ec2]] (3), [[Incident Response]] (2), [[Continuous Monitoring]] (1), [[Google]] (1), [[Microsoft]] (1)
> **Env Vars:** aws (6), ec2 (3), sim (1), api (1)
> **CLI Commands:** aws (6), make (1)
> **UI Navigation:** go to (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)


### 3. Practicing Continuous Application Security

[↑ Back to Table of Contents](#table-of-contents)

#### [Tying it all together](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/tying-it-all-together?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/tying-it-all-together?u=76281980&t=0)** - [Instructor] We've explored various testing tools at the command line level. Now it's time to understand how these tools work together seamlessly in a modern development workflow. Just as we aim to move beyond manual UI testing, we want to automate our [[Security Testing]] process. Continuous [[Application Security]] should be a smooth, uninterrupted journey. Gone are the days of stopping and starting tests, manual reporting, and endless debates about security vulnerabilities. Instead, we want a process that flows seamlessly from build to defect reporting, continuously cycles and improves, integrates security directly into the development lifecycle. While tools are important, the [[DevSecOps]] process and team integration are paramount. Two critical tools in the continuous DevSecOps process are [[Jenkins]] and CircleCI. These platforms are fundamental to modern [[DevOps]], enabling task management, process automation, and streamlined workflow control. These tools are the backbone of a continuous workflow, control the flow of development jobs, manage build check-ins, execute unit tests and security scans, provide pass-fail feedback, and then stop builds that don't meet security standards. The result, a consistent, flexible process that delivers more accurate and repeatable results. While we've examined individual tool flows,
>
> **[1:35](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/tying-it-all-together?u=76281980&t=95)** this slide showcases how Jenkins and CircleCI orchestrate multiple security tools. They integrate numerous security scanning tools and allow each tool to contribute to build acceptance criteria, and they create a comprehensive security validation process. Achieving this level of integration is a significant milestone in continuous application security. Digging into the CircleCI and Jenkins world and setting up pipelines is a little bit outside the scope of this course. There are other courses on [[LinkedIn]] where you can really get in depth on how to set these up, how to create pipelines and tasks, and the automation associated with those. So I would suggest looking to those courses for more detailed explanation of how to set up your pipeline. But next, we'll explore how the security team can gain comprehensive insights into the entire testing and validation process, ensuring transparency and continuous improvement.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jenkins]] (3), [[Application Security]] (2), [[DevSecOps]] (2), [[Security Testing]] (1), [[DevOps]] (1)
> **Definitions:** is a  (2)
> **Tools:** command line (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Managing the results](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/managing-the-results?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/managing-the-results?u=76281980&t=0)** - [Instructor] This presentation will cover a strategic approach to managing the results generated by our diverse toolset. We'll explore how to centralize and automate this process to support our [[DevSecOps]] principles. Each tool in our arsenal produces results unique to its purpose. However, the key insight is that most tools can export their findings to a common interchangeable format. This allows us to consolidate the output from various tools into a central repository. By establishing a single organized location to store all tool results, we can eliminate the scattered result files, enable cross tool analysis, improve [[Team Collaboration]], and maintain a comprehensive audit trail. The benefits include quick access to historical data, simplified reporting, and reduced risk of losing critical information. To streamline this process, we'll use APIs to automatically feed the results from our tools into a central tracking system like DefectDojo. This eliminates the need for manual entry and ensures timely notifications when new results are available. Centralizing our results supports the DevSecOps philosophy by allowing security auditors to review findings in one place, providing developers with visibility into potential issues earlier in the development lifecycle,
>
> **[1:36](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/managing-the-results?u=76281980&t=96)** and enabling more efficient collaboration between teams. To implement this workflow you have to create a script to run your tests. And then inside that script you'll push the results to DefectDojo and then manage the scripting and testing inside of [[Jenkins]]. Inside of our demo, we will create a script and we'll push the results to DefectDojo, but we won't manage the script testing in Jenkins because that really is outside the scope of this course. And by implementing this strategic approach to results management, we transform our raw data into a valuable centralized asset that supports our DevSecOps initiatives. Let's go over to a tool called DefectDojo. You can actually download this and you can run it yourself inside of your cloud or inside of your local computer if you want your own instance of DefectDojo. There is a commercially available version that has a lot more features, but they also maintain the open source version so that they can give back to the open source community. Obviously, if you're going to do this for real, don't use the demo version of DefectDojo. You'll want to maintain your own separate and secure version. But for this demo, we are going to utilize the free version that's online. If you go to demo.[defectdojo.org](https://defectdojo.org), you can log in. Their password is on the [[GitHub]] page for DefectDojo.
>
> **[3:10](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/managing-the-results?u=76281980&t=190)** It may change from time to time. But once you log in, the first thing that you'll look at is to look at all the [[Microsoft Products|products]]. This is kind of what DefectDojo hinges on is creating a product. I created one called [[LinkedIn]] Learning, so I'm going to click on that. Once you're in here, you can create engagements. The engagements are like testing activities of some sort. You can do an interactive engagement or a CI/CD engagement. I did a new CI/CD engagement and I hit view engagements.
>
> **[3:52](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/managing-the-results?u=76281980&t=232)** You can see one I named LinkedIn Learning here. And this is where you can have all of your results from your testing from these engagements. And from there it will feed into the findings. So let's switch over to a script. This script is inside of your exercise files that you can download. Let's walk through this. In a previous video, we ran TruffleHog from the command line. We're going to do the same thing inside of this script. We're going to take our command, we're going to do TruffleHog docker image, truffle security secrets, and we're going to export it to a [[JSON]] file called Results.JSON. Then what we're going to do is we're going to build an API inside of this [[Python (Programming Language)|Python]] script. What we're going to need are a few things. This is the scan date that we want our TruffleHog scan to report on. So today is fine. We're going to name it TruffleHog Scan. The only thing that you should have to modify inside of this file is this engagement ID. So when you come back here, go ahead and create a new engagement inside of your project. And when you do that, click on your engagement. Oops.
>
> **[5:28](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/managing-the-results?u=76281980&t=328)** And you should see an engagement ID. And the easiest place to see that is up here for 15. So I entered 15 right here, and then it's going to build the [[Representational State Transfer (REST)|rest]] of your API call for you. So up here you ran TruffleHog, you exported it to JSON. Right here, you're going to take those JSON results and you're going to push them on your API call inside of this file parameter and then it will post it down here. Here is the username and password for DefectDojo.
>
> **[6:11](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/managing-the-results?u=76281980&t=371)** Once you are finished here, this is in VS code. I'm just going to hit run. And you should see some things populate down here. It's running TruffleHog. And then once you start to see all of these things with the engagement ID, the product ID, that means that this is the result back from your API call. So it worked. And if we go back over, we should have a new scan here. and we do. So let's just look at a scan result. When you click it, DefectDojo can parse scans from a lot of different tools, and so it understands that in the TruffleHog, the results were a hard coded, AWS secret and AWS. You can click for more information. You could do the same thing with other tools like SEMgraph. With SEMgraph, the API usage is actually a part of the commercial set, so we didn't use that one in this example, but most places you can download a JSON or something similar and upload it to DefectDojo just like we did here.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (5), [[DevSecOps]] (3), [[Jenkins]] (2), [[LinkedIn]] (2), [[Team Collaboration]] (1)
> **Env Vars:** json (5), api (5), aws (2)
> **CLI Commands:** cd (2), aws (2), docker (1), python (1)
> **Tools:** github (1), command line (1), vs code (1)
> **UI Navigation:** click on (2), go to (1)
> **Cross-References:** earlier in (1), previous video (1)
> **Definitions:** is a  (1), means that (1)
> **File Paths:** results.json (1)

#### [Metrics](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/metrics?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/metrics?u=76281980&t=1)** - [Instructor] In the world of [[Application Security]], metrics are our compass. They guide our strategy, validate our efforts, and communicate our progress. Metrics serve three critical purposes in our application security program. They help define the success of our program. It's hard to understand where we're failing and where we're succeeding if we don't have a way to measure the success. And for every tool that we use, there has to be a metric. We should have a quantitative measure for every tool and process that we use. Remember, part of [[DevOps]] is that we're always evaluating. We're always continuously improving, and so that should include the tools and the processes that we use. And finally, we should enable meaningful executive reporting with our metrics. It's how executives understand the value of our program. It has to be through metrics that they can understand so that they understand that the money and the resources they're giving us are being used wisely. Let's talk about some metrics that we should use. When tracking operational application security, these are three metrics that I tend to focus on. The first one is flow time. How quickly we move from detection to resolution. How long does it take
>
> **[1:33](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/metrics?u=76281980&t=93)** from the time that a vulnerability is detected until it goes all the way through the process of being found, fixed, released, deployed, retested. The second one is time to resolve vulnerabilities. How long does it take us just to fix a vulnerability? That's a good measurement of how effective our engineers can be or how quickly we can go from seeing a vulnerability to fixing it. And finally, vulnerability density. The concentration of security risks in our applications. Are there specific parts of our application that have more defects than others? That could indicate a problem with a certain development team. It could show that there's a specific part of our application that is maybe more complex and subject to vulnerabilities. So vulnerability density helps us understand areas where we should really focus and double down on our testing. For vulnerability tracking, these are some metrics that we can use. The number of critical vulnerabilities. Are we seeing more critical vulnerabilities over time? Are there certain parts of our application that are seeing more critical vulnerabilities than others? Time required to fix identified issues. How long does it take us to fix? Are some teams fixing more quickly than others? Are there certain parts of our application that require longer fixes? And finally, vulnerabilities by type. I've talked about security champions before in some of my other trainings, but this is a good metric to understand maybe where we can dig deep on a specific type of security test.
>
> **[3:07](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/metrics?u=76281980&t=187)** If we have a certain type of security defect that we're seeing a lot of, like cross-site scripting or [[SQL]] injection, maybe we can do a deep dive to the different teams explaining why we're seeing these issues and how they can fix them. Now, let's talk about some additional thoughts on metrics. There are some metrics you shouldn't use because they have an inverse result. Don't expect anything to go to zero. Never measure defects expecting that we will fix everything in an application. We will never be at zero, and trying to achieve that is a zero-sum game that will just frustrate everybody. Don't just count new vulnerabilities as a blanket metric. It's okay if it's an established part of your application and all of a sudden we see an uptick in the number of vulnerabilities. But keep in mind, if it's a new part of your application, and if there has been substantial changes, then we should expect a higher number of vulnerabilities. So just keep that in mind. And encourage good behavior with metrics, right? Design metrics that promote positive security behaviors and continuous.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Application Security]] (3), [[DevOps]] (1), [[SQL]] (1)
> **Definitions:** is a  (2)
> **Env Vars:** sql (1)
> **UI Navigation:** go to (1)
> **Warnings:** keep in mind (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Building a continuous AppSec toolkit](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/challenge-building-a-continuous-appsec-toolkit?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/challenge-building-a-continuous-appsec-toolkit?u=76281980&t=0)** - [Instructor] Now let's take a lot of what we've learned in the previous movies and focus on a challenge. Let's create an [[Application Security]] pipeline. Let's go from a [[GitHub]] source code repository to a static scanner, and then into a vulnerability management system. Get all of these things to talk and be interconnected. That is the point of a continuous application security pipeline. If you'd like, you can use bWAPP, which is in an intentionally vulnerable application. You can find the link here on GitHub, [[LinkedIn]] Learning, under Building Your First [[DevSecOps]] Pipeline. You can also use [[Jira]] for the vulnerability management system. They allow you to set up a free account that you can use for this purpose. This challenge should take you about 30 minutes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Application Security]] (2), [[GitHub]] (2), [[LinkedIn]] (1), [[DevSecOps]] (1), [[Jira]] (1)
> **Tools:** github (2), jira (1)
> **CLI Commands:** find (1)
> **Code Identifiers:** bwapp (1)
> **Exercise Files:** source code (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Building a continuous AppSec toolkit](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/solution-building-a-continuous-appsec-toolkit?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/solution-building-a-continuous-appsec-toolkit?u=76281980&t=0)** - [Instructor] Here you can see the BWAP application that is on the [[LinkedIn]] [[GitHub]] repository. The first thing that we'll want to do is go ahead and fork this. I'll just leave the default name and we'll just copy the main branch.
>
> **[0:29](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/solution-building-a-continuous-appsec-toolkit?u=76281980&t=29)** Okay, that is forked into my own repository. The next step is to create a [[Jira]] workspace. All you have to do is sign up for an account, create a default workspace, and you should be good to go. I'm going to use semgrep for my static analysis tool. First, let's go and set up the Jira integration. I'm going to use semgrep for my static analysis tool. The first thing you'll want to do is go in and set up your Jira integration. Set up first integration, and then we're going to select Jira. We have to give permission for semgrep and Jira to talk. So I'm going to hit accept. If you want, you can review what this is going to do in the [[Privacy]] policy. Now we have to connect the projects. So my domain inside of Jira is continuous security. Default project is going to be [[Scrum]] and I'd like my issues to go over as bugs. You can also customize the ticket creation, automatically create tickets for high severity and high confidence findings. These are the mappings. Says you can go from the Jira fields to the semgrep fields, I'm going to leave these as default, but if you wanted to be more specific, you could do that as well. Hit save. Now let's connect the source code repository to semgrep.
>
> **[2:08](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/solution-building-a-continuous-appsec-toolkit?u=76281980&t=128)** So if you come here, we're going to go to not scanning, since it's a new repo. Select the code base that you brought over. In my case, it's building-first-[[DevSecOps]]-pipeline. I'm going to hit enable scans. I'm going to do a managed scan. Enable. All right, now we're going to wait. It is going to take just a few minutes to run for the first time. We now have a lot of different items that automatically came over. If you remember when we set up the connection here, we said to automatically send any new findings to Jira. And that's exactly what it did when it did the first scan, is sent them over. So just to recap, you forked a code base over, this is the code base that you're testing. You connected a static scanner to that code base, and then you set up automatic integration between Jira and your static scanner so that when you scan for issues, they are automatically sent over to Jira for management. You could also do this with [[Slack]] or other integrations, but this really is the idea of a continuous [[Application Security]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (10), [[LinkedIn]] (1), [[GitHub]] (1), [[Privacy]] (1), [[Scrum]] (1)
> **Tools:** jira (10), github (1), slack (1)
> **Prerequisites:** set up (5)
> **UI Navigation:** go to (1), select the (1)
> **Env Vars:** bwap (1)
> **Exercise Files:** source code (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/next-steps?u=76281980&t=1)** - [Instructor] Success in [[Application Security]] means integration from end to end. Let's be clear, no tool is perfect and that's okay. In fact, multiple tools with some vulnerability overlap can be a strength, not a weakness. Think of security tools like a team of detectives; each brings a unique perspective, and when they compare notes, they create a more comprehensive understanding. Some tools might catch vulnerabilities that others miss, providing a layered defense approach. Now, how do we turn these insights into action? First, try the process out. Don't just listen to theory. Put these strategies into practice in your environment. Start small and add complexity later. You don't need to implement a perfect full-scale security program overnight. Begin with core principles, learn, adapt, and gradually expand your approach. Be flexible with both your process and your teams. Application security isn't about rigid rules, but about creating a collaborative, adaptive security culture. Encourage communication, continuous learning, and iterative improvement. Your security strategy should be a living, breathing ecosystem that evolves with your technology and threats. It's not about achieving perfection, but about continuous enhancement and proactive risk management. Remember, every step you take toward a more integrated, comprehensive application security approach is a step
>
> **[1:36](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/next-steps?u=76281980&t=96)** towards protecting your organization's most critical assets.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Application Security]] (3)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Tim Chase]]

## Resources

- Exercise files available

## Skills Covered

- Application Security
- DevSecOps

## Path Context

### In [[Get Ahead in DevSecOps]]
← [[DevSecOps- Building a Secure Continuous Delivery Pipeline]] | **4 of 5** | [[DevSecOps- Tips for Success]] →

## Appears In

- [[Get Ahead in DevSecOps]]

## Related Courses

_Courses sharing skills:_

- [[DevSecOps- Automated Security Testing]] — Application Security, DevSecOps
- [[OWASP Top 10- -7 Identification and Authentication Failures and -8 Software and Data Integrity Failures]] — Application Security
- [[OWASP Top 10- -5 Security Misconfiguration and -6 Vulnerable and Outdated Components]] — Application Security
- [[OWASP Top 10- -1 Broken Access Control and -2 Cryptographic Failures]] — Application Security
- [[Node Js Security]] — Application Security

---

[↑ Back to top](#)