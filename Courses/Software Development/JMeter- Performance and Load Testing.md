---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: jmeter-performance-and-load-testing
url: "https://www.linkedin.com/learning/jmeter-performance-and-load-testing"
duration_minutes: 45
duration: 45m
level: Intermediate
updated: 1/13/2026
learners: 41099
skills:
  - Load Testing
  - JMeter
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQE1PjhgUpJ9-w/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1568073920612?e=2147483647&amp;v=beta&amp;t=51ECuHjRfwT305vGerHs1HGctUQJNlkxZX_r-oty8d0"
linkedin_topic: Software Development
learning_paths:
  - '[[Getting Started with Software Testing]]'
prev_courses:
  - '[[Learning Playwright]]'
next_courses:
  - '[[API Testing Foundations]]'
path_nav: '[{"path":"Getting Started with Software Testing","position":7,"total":12,"prev":"Learning Playwright","next":"API Testing Foundations"}]'
path_count: 1
tags:
  - course
  - topic/software-development
  - skill/load-testing
  - skill/jmeter
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/JMeter-%20Performance%20and%20Load%20Testing.md)

![JMeter: Performance and Load Testing](https://media.licdn.com/dms/image/v2/C4E0DAQE1PjhgUpJ9-w/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1568073920612?e=2147483647&amp;v=beta&amp;t=51ECuHjRfwT305vGerHs1HGctUQJNlkxZX_r-oty8d0)

# JMeter: Performance and Load Testing

> Interested in adding load testing to your professional tool kit? In this course, learn how to use Apache JMeter, a popular open-source performance testing tool, to create and execute load tests that help you highlight performance issues in your software. Instructor Mike Smith takes you through the installation and setup of JMeter and JRE on Windows, and then shows how to create and run your first 

> [LinkedIn Learning](https://www.linkedin.com/learning/jmeter-performance-and-load-testing) | 45m | Intermediate | 41K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - Testing with JMeter
  - What is load testing, and why do we do it?
- [**1. Getting Started**](#1-getting-started) (6 videos)
  - Installing graph plugins
  - Creating a load test
  - Adding a thread group
  - Adding a sampler
  - Adding a listener
  - Running your first load test
- [**2. Improving the Test**](#2-improving-the-test) (4 videos)
  - Adding timers
  - Adding assertions
  - Adding HTTP managers
  - Challenge: Create a simple test plan with Thread Group, Sampler, and Listener
- [**3. JMeter CLI**](#3-jmeter-cli) (5 videos)
  - Why use the command line?
  - Opening JMeter through the CLI
  - Running your load test through the CLI
  - Saving CLI results to a .jtl file
  - Challenge: Run a load test via CLI
- [**4. Viewing the Results**](#4-viewing-the-results) (4 videos)
  - Importing a .jtl file to JMeter graphs
  - Creating an HTML dashboard at CLI runtime
  - Viewing the dashboard
  - Pros and cons
- [**Conclusion**](#conclusion) (0 videos)

### Introduction

> [↑ Back to Table of Contents](#table-of-contents)

#### Testing with JMeter
> [LinkedIn Learning](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/testing-with-jmeter?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/testing-with-jmeter?u=76281980&t=0)** - [Instructor] Performance issues in software don't just vanish because we can't see them, and all software fails eventually.
>
> **[0:06](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/testing-with-jmeter?u=76281980&t=6)** With the right skills and software, any software tester or IT professional can start to highlight these issues so they can be fixed.
>
> **[0:13](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/testing-with-jmeter?u=76281980&t=13)** It isn't magic, and there isn't anything up my sleeves.
>
> **[0:16](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/testing-with-jmeter?u=76281980&t=16)** Just an understanding of how load testing works.
>
> **[0:19](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/testing-with-jmeter?u=76281980&t=19)** My name's Mike Smith, and I've spent almost a decade as a test specialist with performance testing.
>
> **[0:23](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/testing-with-jmeter?u=76281980&t=23)** I'm excited for the opportunity to pass that knowledge onto you.
>
> **[0:27](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/testing-with-jmeter?u=76281980&t=27)** And this is where our story begins.
>
> **[0:28](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/testing-with-jmeter?u=76281980&t=28)** Join me and my course on LinkedIn Learning where I'll dive into the intricacies of JMeter.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (1)
> **Speakers:** - [instructor] (1)

#### What is load testing, and why do we do it?
> [LinkedIn Learning](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/what-is-load-testing-and-why-do-we-do-it?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/what-is-load-testing-and-why-do-we-do-it?u=76281980&t=0)** - [Instructor] Every piece of software has performance issues.
>
> **[0:03](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/what-is-load-testing-and-why-do-we-do-it?u=76281980&t=3)** Memory leaks, poorly optimized code, mismatched resource allocation.
>
> **[0:08](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/what-is-load-testing-and-why-do-we-do-it?u=76281980&t=8)** It's important to try and discover these issues as quickly as possible so that they can be fixed.
>
> **[0:16](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/what-is-load-testing-and-why-do-we-do-it?u=76281980&t=16)** There are three terms in the world of software performance analysis that get used interchangeably even though they have very different meanings.
>
> **[0:24](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/what-is-load-testing-and-why-do-we-do-it?u=76281980&t=24)** Load testing, whereby I apply simulated load to a system in order to measure the impact of how that system performs.
>
> **[0:33](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/what-is-load-testing-and-why-do-we-do-it?u=76281980&t=33)** Performance testing, whereby I measure the performance of a site or application regardless of the load to understand its underlying metrics.
>
> **[0:41](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/what-is-load-testing-and-why-do-we-do-it?u=76281980&t=41)** And stress testing, where I would increase the simulated load on a system to a point where the system fails.
>
> **[0:47](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/what-is-load-testing-and-why-do-we-do-it?u=76281980&t=47)** This is important as this allows me to understand how a system would recover from such a failure.
>
> **[0:54](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/what-is-load-testing-and-why-do-we-do-it?u=76281980&t=54)** This course will focus on load testing.
>
> **[0:57](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/what-is-load-testing-and-why-do-we-do-it?u=76281980&t=57)** However, the skills you'll take away will mean that all three will be available to you once you get to grips with the software Apache JMeter.
>
> **[1:06](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/what-is-load-testing-and-why-do-we-do-it?u=76281980&t=66)** There are lots of different load testing tools on the open source market today.
>
> **[1:10](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/what-is-load-testing-and-why-do-we-do-it?u=76281980&t=70)** And my choice of JMeter is purely because I've spent so long using it and learning about it.
>
> **[1:18](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/what-is-load-testing-and-why-do-we-do-it?u=76281980&t=78)** Load testing is usually seen as a highly technical and difficult to learn.
>
> **[1:22](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/what-is-load-testing-and-why-do-we-do-it?u=76281980&t=82)** And this is simply not the case.
>
> **[1:24](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/what-is-load-testing-and-why-do-we-do-it?u=76281980&t=84)** Anyone can start to run load test against applications and start feeding information back to development teams about their findings.

> [!info]- Semantic Content
>
> **CLI Commands:** apache (1)
> **Code Keywords:** case. (1)
> **Speakers:** - [instructor] (1)


### 1. Getting Started

> [↑ Back to Table of Contents](#table-of-contents)

#### Installing graph plugins
> [LinkedIn Learning](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/installing-graph-plugins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/installing-graph-plugins?u=76281980&t=0)** [Instructor] Once JMeter is downloaded, it can be expanded with plugins.
>
> **[0:04](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/installing-graph-plugins?u=76281980&t=4)** The plugins I'll install focus on graphing and displaying results after running a load test and this is important because the graphing function within JMeter doesn't always offer us the clearest information on our results.
>
> **[0:19](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/installing-graph-plugins?u=76281980&t=19)** There are a lot of plugins that I can install for JMeter to expand this functionality and the Jmeter-plugins website is the place to find them.
>
> **[0:27](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/installing-graph-plugins?u=76281980&t=27)** I'm focusing on two specific downloads that contain bundles of plugins.
>
> **[0:32](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/installing-graph-plugins?u=76281980&t=32)** I'll head on over to the Jmeter-plugins website and in the search bar, I'm going to search for graphs and the first one I'm concerned with is three basic graphs, pretty self-explanatory, right?.'
>
> **[0:47](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/installing-graph-plugins?u=76281980&t=47)** So I'm going to click on the download versions link at the bottom to download that version.
>
> **[0:52](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/installing-graph-plugins?u=76281980&t=52)** The second one I want to download is the five additional graphs, again just clicking on the download version that I want to download.
>
> **[0:59](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/installing-graph-plugins?u=76281980&t=59)** Now, once downloaded, I can extract these files to their corresponding ext and lib folders within the JMeter installation directory.
>
> **[1:07](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/installing-graph-plugins?u=76281980&t=67)** So for the first download, I'm going to grab this, jmeter-plugins-cmn-jmeter-0.4 jar file.
>
> **[1:15](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/installing-graph-plugins?u=76281980&t=75)** I'm going to copy that, I going to jump over to my JMeter installation directory and in the lib folder, I'm just going to paste that.
>
> **[1:22](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/installing-graph-plugins?u=76281980&t=82)** Now we get one of these files with every plugin we download, so I only need to move it across the one time.
>
> **[1:30](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/installing-graph-plugins?u=76281980&t=90)** In the ext folder of the plugin I've just downloaded, you can see that this is the basic graphs.
>
> **[1:35](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/installing-graph-plugins?u=76281980&t=95)** I can just copy this, jump back to my apache-jmeter installation directory, find the ext folder and then paste that in.
>
> **[1:44](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/installing-graph-plugins?u=76281980&t=104)** And I want to do exactly the same thing with the other lib folder.
>
> **[1:49](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/installing-graph-plugins?u=76281980&t=109)** As you can see, this is our five additional graphs jar file, so I'm going to copy that and paste it over the the ext folder.
>
> **[1:57](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/installing-graph-plugins?u=76281980&t=117)** So I've installed a bunch of different graphs, that look at things like, response codes, latency times and lots of other features.
>
> **[2:04](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/installing-graph-plugins?u=76281980&t=124)** These plugins will be the backbone of your reporting after a load test and will be invaluable when creating custom reports.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (2), function (1), self (1)
> **CLI Commands:** find (2), apache (1)
> **Prerequisites:** install (2)
> **Versions:** 0.4 (1)
> **UI Navigation:** click on (1)

#### Creating a load test
> [LinkedIn Learning](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/creating-a-load-test?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/creating-a-load-test?u=76281980&t=0)** - [Instructor] To create my first load test, I need to open Jmeter.
>
> **[0:04](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/creating-a-load-test?u=76281980&t=4)** To do this, I'm going to navigate to the bin folder within my Jmeter directory, and from here, I'm going to double click on the Apache_JMeter.jar file.
>
> **[0:14](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/creating-a-load-test?u=76281980&t=14)** Once open, you'll see the Jmeter front end.
>
> **[0:16](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/creating-a-load-test?u=76281980&t=16)** This is broken up into three distinct sections.
>
> **[0:19](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/creating-a-load-test?u=76281980&t=19)** The toolbar section at the top of the screen has all of the functionality you'd expect it to have, including creating a new test, opening an existing one, and saving the current one.
>
> **[0:30](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/creating-a-load-test?u=76281980&t=30)** It also contains buttons for starting a test, stopping it, and clearing out any information from old tests from the current session.
>
> **[0:38](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/creating-a-load-test?u=76281980&t=38)** The right hand section is your context panel.
>
> **[0:41](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/creating-a-load-test?u=76281980&t=41)** This will show you details on anything that you've selected on the left hand side.
>
> **[0:47](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/creating-a-load-test?u=76281980&t=47)** And speaking of which, the left hand side is your Test Plan.
>
> **[0:50](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/creating-a-load-test?u=76281980&t=50)** This section shows a list of every item within the test so far.
>
> **[0:55](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/creating-a-load-test?u=76281980&t=55)** For this course, I'll be building tests against a fake brand, [landonhotels.com](https://landonhotels.com).
>
> **[1:02](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/creating-a-load-test?u=76281980&t=62)** With this in mind, it's time to start building some tests.

> [!info]- Semantic Content
>
> **UI Navigation:** navigate to (1), click on (1)
> **Code Keywords:** this, (1)
> **URLs:** [landonhotels.com](https://landonhotels.com) (1)
> **Speakers:** - [instructor] (1)

#### Adding a thread group
> [LinkedIn Learning](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/adding-a-thread-group?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/adding-a-thread-group?u=76281980&t=0)** - [Announcer] If I want to run a low test that simulates a lot of users performing various actions, it all starts with the users, right?
>
> **[0:08](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/adding-a-thread-group?u=76281980&t=8)** I need to build out the test to help simulate users within my low test.
>
> **[0:14](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/adding-a-thread-group?u=76281980&t=14)** To do that, I'm going to use something called a thread group.
>
> **[0:18](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/adding-a-thread-group?u=76281980&t=18)** Think of a thread group as a group of people waiting to do what is written in the test plan section of the JMeter GUI.
>
> **[0:27](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/adding-a-thread-group?u=76281980&t=27)** To add the thread group to the test plan, I'm going to right click on the test plan on the left-hand side of the screen, go to add and find threads.
>
> **[0:39](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/adding-a-thread-group?u=76281980&t=39)** There are a few types of thread groups built into JMeter that I could add, but I'm just concerned with thread group at this stage.
>
> **[0:48](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/adding-a-thread-group?u=76281980&t=48)** It's the most basic type and the one I'll be using most.
>
> **[0:53](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/adding-a-thread-group?u=76281980&t=53)** Left clicking on this, adds that element to the test plan meaning that we now have a group of users to perform the actions we set out in the plan.
>
> **[1:04](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/adding-a-thread-group?u=76281980&t=64)** I can now also see that the context view section of the screen has changed to show me the specific details of the thread group.
>
> **[1:12](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/adding-a-thread-group?u=76281980&t=72)** Here, I can change elements such as the name of the thread group.
>
> **[1:16](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/adding-a-thread-group?u=76281980&t=76)** This is specifically useful if I have many different groups performing different actions and I can also schedule the users or delay them until I need them to perform their actions.
>
> **[1:28](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/adding-a-thread-group?u=76281980&t=88)** So my users are ready to execute within the low test.
>
> **[1:32](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/adding-a-thread-group?u=76281980&t=92)** Thread groups are the backbone of any good JMeter low test, as without users you would have no load with which to perform the test.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (1), go to (1)
> **CLI Commands:** find (1)
> **Code Keywords:** this, (1)
> **Env Vars:** gui (1)
> **Speakers:** - [announcer] (1)

#### Adding a sampler
> [LinkedIn Learning](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/adding-a-sampler?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/adding-a-sampler?u=76281980&t=0)** - [Instructor] I now need it to add a sampler to my thread group to give my users actions to perform during the load test.
>
> **[0:08](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/adding-a-sampler?u=76281980&t=8)** A sampler is basically an instruction, think of it as an action for the users to take.
>
> **[0:14](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/adding-a-sampler?u=76281980&t=14)** Right clicking on the thread group, I can highlight add and then sampler.
>
> **[0:20](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/adding-a-sampler?u=76281980&t=20)** From here I get long list of the different samples.
>
> **[0:25](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/adding-a-sampler?u=76281980&t=25)** JMeter is pretty diverse in the types of requests it can send through.
>
> **[0:31](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/adding-a-sampler?u=76281980&t=31)** For this load test I just want to visit the site so I'll select HTTP load test.
>
> **[0:38](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/adding-a-sampler?u=76281980&t=38)** Left clicking on this will add it into the test plan underneath the thread group.
>
> **[0:44](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/adding-a-sampler?u=76281980&t=44)** I cannot add a sampler to the test plan itself I have to have a thread group to perform these actions before I can start adding them.
>
> **[0:53](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/adding-a-sampler?u=76281980&t=53)** With the sampler added, I can see that the context section of the screen has changed also.
>
> **[0:58](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/adding-a-sampler?u=76281980&t=58)** I can see all of the details within my HTTP request.
>
> **[1:03](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/adding-a-sampler?u=76281980&t=63)** To visit the Landon Hotel website I'm going to put HTTP in the protocol box and the name of the website in the server name or IP box.
>
> **[1:17](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/adding-a-sampler?u=76281980&t=77)** If I were looking for a page within the Landon Hotel's domain, like slash log in I would simply add that to the path box in this window.
>
> **[1:27](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/adding-a-sampler?u=76281980&t=87)** Other features of the HTTP request sampler is the ability to automatically follow redirects.
>
> **[1:34](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/adding-a-sampler?u=76281980&t=94)** You can change the content encoding if you need to and even send request specific parameters if you're logging into a web application for example.
>
> **[1:45](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/adding-a-sampler?u=76281980&t=105)** This load test will simply load the website and capture how long it takes to load.
>
> **[1:51](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/adding-a-sampler?u=76281980&t=111)** The sampler allows my thread group to do this.

> [!info]- Semantic Content
>
> **Env Vars:** http (4)
> **Analogies:** think of it as (1), for example (1)
> **Code Keywords:** this. (1)
> **Speakers:** - [instructor] (1)

#### Adding a listener
> [LinkedIn Learning](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/adding-a-listener?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/adding-a-listener?u=76281980&t=0)** - If I wanted to run my test right now all I would really need to do is click on the start button on the toolbar, and the load test would perform a test as outlined.
>
> **[0:12](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/adding-a-listener?u=76281980&t=12)** However, I set up the actions that the load test need to perform, but I have no real way of knowing if the test has been successful or not.
>
> **[0:20](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/adding-a-listener?u=76281980&t=20)** To do this, I'll need to add a listener.
>
> **[0:26](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/adding-a-listener?u=76281980&t=26)** Listeners give JMeter a way of displaying the results of a test as it's running.
>
> **[0:31](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/adding-a-listener?u=76281980&t=31)** Now for larger tests, this isn't recommended, because displaying the output live during the load test can use a lot of system resources.
>
> **[0:39](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/adding-a-listener?u=76281980&t=39)** But for small tests like this and for a test creation, it's absolutely fine.
>
> **[0:44](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/adding-a-listener?u=76281980&t=44)** Plus, I want to know if my test actually works, so I'll need to add at least one to verify this.
>
> **[0:50](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/adding-a-listener?u=76281980&t=50)** If I right click on the test plan instead of the thread group and highlight listeners, I can see a long list of listeners that I can add to the project including some of the additional graph plugins I added earlier.
>
> **[1:05](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/adding-a-listener?u=76281980&t=65)** I'm going to add the view results tree into my test plan to see the basic results of my load test.
>
> **[1:12](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/adding-a-listener?u=76281980&t=72)** This is important, because otherwise, I don't really know if it's working.
>
> **[1:17](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/adding-a-listener?u=76281980&t=77)** Once added, I've got a context view that looks pretty empty.
>
> **[1:21](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/adding-a-listener?u=76281980&t=81)** But it's primed to show me the results once I run the test.
>
> **[1:27](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/adding-a-listener?u=76281980&t=87)** Listeners can plot almost any information you want from your test.
>
> **[1:32](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/adding-a-listener?u=76281980&t=92)** The trick is the JMeter doesn't come with a great deal of them pre-installed, which is why we installed some cool plugins earlier to show us transactions per second and even connection latency.
>
> **[1:45](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/adding-a-listener?u=76281980&t=105)** The plugins can be used during the test, however that does use a lot of resources, so it's usually better to graph the data after the test is finished.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (1), this. (1)
> **UI Navigation:** click on (2)
> **Best Practices:** recommended (1)
> **Prerequisites:** set up (1)
> **Speakers:** - if (1)

#### Running your first load test
> [LinkedIn Learning](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/running-your-first-load-test?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/running-your-first-load-test?u=76281980&t=0)** - [Instructor] The stage is set, time for some final preflight checks and then I can run the first load test.
>
> **[0:07](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/running-your-first-load-test?u=76281980&t=7)** First things first, I have a test plan.
>
> **[0:10](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/running-your-first-load-test?u=76281980&t=10)** This contains all the information for the test.
>
> **[0:13](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/running-your-first-load-test?u=76281980&t=13)** Everything nested within this will execute when I run the load test.
>
> **[0:18](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/running-your-first-load-test?u=76281980&t=18)** Then I've got the thread group or users who will perform the actions or samplers.
>
> **[0:24](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/running-your-first-load-test?u=76281980&t=24)** The samplers can be numerous things.
>
> **[0:26](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/running-your-first-load-test?u=76281980&t=26)** This test is loading a HTTP website.
>
> **[0:30](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/running-your-first-load-test?u=76281980&t=30)** And finally, I've got the listener that will display the output of the load test.
>
> **[0:36](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/running-your-first-load-test?u=76281980&t=36)** Before I dive in, however, I want to go to my thread group and change some of the settings.
>
> **[0:40](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/running-your-first-load-test?u=76281980&t=40)** If I click Start Now, this test will only run once, so before I run the test, I want to set the number of threads to five and I want to set the loop count to 30.
>
> **[0:53](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/running-your-first-load-test?u=76281980&t=53)** This means that five virtual users will each access the website at the same time and then repeat that process 29 more times.
>
> **[1:03](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/running-your-first-load-test?u=76281980&t=63)** I'll save it and then click on the listener.
>
> **[1:07](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/running-your-first-load-test?u=76281980&t=67)** This is to verify that auto-scroll is checked on the bottom of this screen, otherwise I'll only see the first few results.
>
> **[1:14](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/running-your-first-load-test?u=76281980&t=74)** And now I'm ready, time for the big drum roll and I can press start and begin the load test.
>
> **[1:19](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/running-your-first-load-test?u=76281980&t=79)** And now the load test is running.
>
> **[1:21](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/running-your-first-load-test?u=76281980&t=81)** The reason I'm not seeing any cool graphs appear right now is simply because I haven't told JMeter to show me anything like that.
>
> **[1:28](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/running-your-first-load-test?u=76281980&t=88)** I just wanted a list of successes or failures and that's what I've got right here.
>
> **[1:34](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/running-your-first-load-test?u=76281980&t=94)** But right now I can sit back and rejoice in the glory of the fact that I'm running my first load test against the Landon Hotel website.
>
> **[1:42](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/running-your-first-load-test?u=76281980&t=102)** This test is far from perfect though.
>
> **[1:44](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/running-your-first-load-test?u=76281980&t=104)** We can always aim to improve our craft with more elements than we can add to the test.
>
> **[1:50](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/running-your-first-load-test?u=76281980&t=110)** Now I'll save this to the Exercise File directory.
>
> **[1:56](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/running-your-first-load-test?u=76281980&t=116)** Typically I'd save this to the bin folder where JMeter is running from.
>
> **[2:01](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/running-your-first-load-test?u=76281980&t=121)** This is usually recommended as when we start running the test headlessly later, it's much easier if they're saved to the bin folder.
>
> **[2:09](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/running-your-first-load-test?u=76281980&t=129)** When running headless tests in the command line, JMeter will utilize this bin directory as its working folder reading and writing here by default.
>
> **[2:17](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/running-your-first-load-test?u=76281980&t=137)** Think of this folder as your project directory for now.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (1), from. (1), default. (1)
> **UI Navigation:** go to (1), click on (1)
> **Env Vars:** http (1)
> **Tools:** command line (1)
> **Exercise Files:** exercise file (1)
> **Definitions:** means that (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)


### 2. Improving the Test

> [↑ Back to Table of Contents](#table-of-contents)

#### Adding timers
> [LinkedIn Learning](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/adding-timers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/adding-timers?u=76281980&t=0)** - [Instructor] One easy way to improve this load test is to introduce Timers.
>
> **[0:05](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/adding-timers?u=76281980&t=5)** Timers are ways of pausing a load test.
>
> **[0:08](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/adding-timers?u=76281980&t=8)** Now I wouldn't expect a group of five users, virtual or otherwise, to perform the same action at precisely the same time.
>
> **[0:15](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/adding-timers?u=76281980&t=15)** There needs to be some element of randomness to the test, so that it appears more human.
>
> **[0:22](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/adding-timers?u=76281980&t=22)** This is important because emulating human interaction is what we're trying to achieve.
>
> **[0:26](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/adding-timers?u=76281980&t=26)** This is not Test automation, in Test automation we want the test to complete as quickly as possible to check something that you'd otherwise have to do manually.
>
> **[0:37](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/adding-timers?u=76281980&t=37)** I want to simulate a large amount of load on the system so that I can replicate known errors, or find new ones that otherwise wouldn't get found until hundreds or thousands of users start using the software.
>
> **[0:51](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/adding-timers?u=76281980&t=51)** To add a Timer, I'm going to right click on my Test Plan.
>
> **[0:55](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/adding-timers?u=76281980&t=55)** I can either add a Timer to the overall Test Plan, and then effect everything within it, or I can add it to individual samples within the plan.
>
> **[1:04](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/adding-timers?u=76281980&t=64)** Right now I've only got a small test, with a single action so it doesn't matter where I put it.
>
> **[1:10](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/adding-timers?u=76281980&t=70)** For more complicated tests I might want multiple thread groups to have different times against them.
>
> **[1:16](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/adding-timers?u=76281980&t=76)** Or, perhaps I know of a piece of business logic that will take roughly six seconds to execute so I could add a six second Timer.
>
> **[1:24](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/adding-timers?u=76281980&t=84)** Right now though, I set the Timer against the Test Plan.
>
> **[1:28](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/adding-timers?u=76281980&t=88)** Right click and hover over Timers, there are a few I can add, but I'm only interested in the Gaussian Random Timer.
>
> **[1:36](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/adding-timers?u=76281980&t=96)** As that will allow me to specify a range of times, instead of a set delay like Constant Timer.
>
> **[1:43](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/adding-timers?u=76281980&t=103)** The Timer's Context Window shows that I can set two time values, a Constant Delay and an Offset.
>
> **[1:51](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/adding-timers?u=76281980&t=111)** How much time do I want to pause for, and how random do I want that to be, essentially.
>
> **[1:57](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/adding-timers?u=76281980&t=117)** JMeter works in seconds and milliseconds.
>
> **[2:00](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/adding-timers?u=76281980&t=120)** So, I put 1,000 in the Constant Delay for one second.
>
> **[2:07](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/adding-timers?u=76281980&t=127)** And, 500 in the Offset for half second.
>
> **[2:12](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/adding-timers?u=76281980&t=132)** This means that for every action our users now take, they will pause for between half and one and half seconds before continuing to the next loop.
>
> **[2:22](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/adding-timers?u=76281980&t=142)** This is important because I want to create a realistic environment for my load test to run in.
>
> **[2:28](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/adding-timers?u=76281980&t=148)** I want to know what would happen if I got a room full of people and asked them to perform this action, and Timers can help me do that.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Code Keywords:** for, (1)
> **UI Navigation:** click on (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### Adding assertions
> [LinkedIn Learning](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/adding-assertions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/adding-assertions?u=76281980&t=0)** - [Instructor] I now need to know that my results are correct.
>
> **[0:04](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/adding-assertions?u=76281980&t=4)** Sure, it's easy to see a green tick and assume that they're correct, but it's better to have assertions every now and then to ensure that what you're wanting to happen actually did.
>
> **[0:16](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/adding-assertions?u=76281980&t=16)** If I click on the view results tree and select one of the results that came back, I can see that the response code came back as a 200 OK.
>
> **[0:25](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/adding-assertions?u=76281980&t=25)** This is good, because if the site were down, then we'd get a failure.
>
> **[0:31](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/adding-assertions?u=76281980&t=31)** But what if I wanted to check another response code was being sent back through?
>
> **[0:35](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/adding-assertions?u=76281980&t=35)** What if I wanted to know that a redirect was happening before the 200 OK?
>
> **[0:41](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/adding-assertions?u=76281980&t=41)** Adding an assertion lets me be sure that something is happening that I specify.
>
> **[0:46](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/adding-assertions?u=76281980&t=46)** This can be positive or negative.
>
> **[0:48](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/adding-assertions?u=76281980&t=48)** I can add assertions on lots of things like the context of a site, their response, the load time, the headers, loads of stuff.
>
> **[0:57](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/adding-assertions?u=76281980&t=57)** Adding an assertion is simple.
>
> **[0:59](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/adding-assertions?u=76281980&t=59)** All I need to do is right click on the step I want the assertion to be associated with.
>
> **[1:04](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/adding-assertions?u=76281980&t=64)** In this case it's the HTTP request.
>
> **[1:06](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/adding-assertions?u=76281980&t=66)** Go to add, go to assertions, and then I'll click on response assertion.
>
> **[1:12](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/adding-assertions?u=76281980&t=72)** From the context view, I see lots of different options that I can assert against including text within the website, the URL itself, the response code, and many others.
>
> **[1:24](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/adding-assertions?u=76281980&t=84)** To ensure that a 200 OK message is returned, I'm going to select the response code radio button from the field to test area.
>
> **[1:34](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/adding-assertions?u=76281980&t=94)** Under the pattern matching rules, I'm going to select equals.
>
> **[1:39](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/adding-assertions?u=76281980&t=99)** There are other options here that give you more freedom but usually equals looks for a definitive value.
>
> **[1:45](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/adding-assertions?u=76281980&t=105)** And finally in pattern to test, I'm going to click add.
>
> **[1:49](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/adding-assertions?u=76281980&t=109)** I'm going to double click in the box that should appear and then I'm going to type in 200.
>
> **[1:55](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/adding-assertions?u=76281980&t=115)** This assertion will check the response code of each request coming from the London Hotel site and give me an appropriate result for this sampler.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (2), go to (2), select the (1)
> **Env Vars:** http (1), url (1)
> **Code Keywords:** assert (1)
> **Speakers:** - [instructor] (1)

#### Adding HTTP managers
> [LinkedIn Learning](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/adding-http-managers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/adding-http-managers?u=76281980&t=0)** - [Instructor] Running a load test against a website means that you sometimes need to manage and handle different aspects of that website such as cookies and the cache that the browser would normally take care of.
>
> **[0:11](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/adding-http-managers?u=76281980&t=11)** As JMeter isn't a web browser, there can be times when I'll need to give it a helping hand with things like this.
>
> **[0:16](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/adding-http-managers?u=76281980&t=16)** I can do this with HTTP Managers.
>
> **[0:20](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/adding-http-managers?u=76281980&t=20)** Right-clicking on my Test Plan reveals Config Elements.
>
> **[0:24](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/adding-http-managers?u=76281980&t=24)** Within this, I can add several helpful website-related managers.
>
> **[0:30](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/adding-http-managers?u=76281980&t=30)** HTTP Cache Manager allows me to manipulate the cache that can be sent with the requests in the HTTP load test.
>
> **[0:37](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/adding-http-managers?u=76281980&t=37)** This means that I can preserve or delete a cache during that test.
>
> **[0:42](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/adding-http-managers?u=76281980&t=42)** HTTP Cookie Manager allows me to manage the cookies used within the HTTP load test.
>
> **[0:48](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/adding-http-managers?u=76281980&t=48)** If, for example, I'm testing anything with authentication, and I want to preserve the cookies, then this allows me to do just that.
>
> **[0:55](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/adding-http-managers?u=76281980&t=55)** HTTP Header Manager does exactly what it says on the tin, it manages the headers of the HTTP load test.
>
> **[1:02](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/adding-http-managers?u=76281980&t=62)** This means that your load test can carry forward the headers from the request without you needing to specify them each time.
>
> **[1:10](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/adding-http-managers?u=76281980&t=70)** Adding all of these means that my load test against the HTTP website can now manage itself better so I don't need to, and means that if I want to use or manipulate certain data within the HTTP request, that these managers handle, then I can.

> [!info]- Semantic Content
>
> **Env Vars:** http (9)
> **Code Keywords:** this. (1), this, (1), delete (1), if, (1)
> **Definitions:** means that (4)
> **Analogies:** such as (1), for example (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Create a simple test plan with Thread Group, Sampler, and Listener
> [LinkedIn Learning](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/challenge-create-a-simple-test-plan-with-thread-group-sampler-and-listener?u=76281980)

> [!transcript]- Transcript
>
> **[0:04](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/challenge-create-a-simple-test-plan-with-thread-group-sampler-and-listener?u=76281980&t=4)** All right, so it's time to get your hands dirty.
>
> **[0:07](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/challenge-create-a-simple-test-plan-with-thread-group-sampler-and-listener?u=76281980&t=7)** Now you've seen how JMeter works, you've seen the moving parts, and now you want to actually build something yourself.
>
> **[0:16](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/challenge-create-a-simple-test-plan-with-thread-group-sampler-and-listener?u=76281980&t=16)** This challenge is intentionally simple, but don't mistake that for pointless.
>
> **[0:21](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/challenge-create-a-simple-test-plan-with-thread-group-sampler-and-listener?u=76281980&t=21)** These complex tests you'll build later start exactly here.
>
> **[0:26](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/challenge-create-a-simple-test-plan-with-thread-group-sampler-and-listener?u=76281980&t=26)** So, I want you to start with a blank test plan.
>
> **[0:30](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/challenge-create-a-simple-test-plan-with-thread-group-sampler-and-listener?u=76281980&t=30)** Inside that, I want you to add a thread group.
>
> **[0:34](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/challenge-create-a-simple-test-plan-with-thread-group-sampler-and-listener?u=76281980&t=34)** Keep it basic, one thread, one loop.
>
> **[0:36](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/challenge-create-a-simple-test-plan-with-thread-group-sampler-and-listener?u=76281980&t=36)** You're not load testing anything yet.
>
> **[0:38](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/challenge-create-a-simple-test-plan-with-thread-group-sampler-and-listener?u=76281980&t=38)** We're just wiring the pieces together.
>
> **[0:41](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/challenge-create-a-simple-test-plan-with-thread-group-sampler-and-listener?u=76281980&t=41)** Next, add an HTTP sampler request.
>
> **[0:45](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/challenge-create-a-simple-test-plan-with-thread-group-sampler-and-listener?u=76281980&t=45)** Point it at the London Hotel URL for this course.
>
> **[0:49](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/challenge-create-a-simple-test-plan-with-thread-group-sampler-and-listener?u=76281980&t=49)** No bodies, no parameters, nothing fancy.
>
> **[0:52](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/challenge-create-a-simple-test-plan-with-thread-group-sampler-and-listener?u=76281980&t=52)** The goal is just request goes out, response comes back.
>
> **[0:56](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/challenge-create-a-simple-test-plan-with-thread-group-sampler-and-listener?u=76281980&t=56)** And now, add a listener.
>
> **[0:58](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/challenge-create-a-simple-test-plan-with-thread-group-sampler-and-listener?u=76281980&t=58)** I don't mind which one, but honestly, View Results Tree or Summary Report will make your life a bit easier.
>
> **[1:06](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/challenge-create-a-simple-test-plan-with-thread-group-sampler-and-listener?u=76281980&t=66)** This is what will tell you whether everything is actually connected properly.
>
> **[1:11](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/challenge-create-a-simple-test-plan-with-thread-group-sampler-and-listener?u=76281980&t=71)** Once you've got all three parts, run the test.
>
> **[1:14](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/challenge-create-a-simple-test-plan-with-thread-group-sampler-and-listener?u=76281980&t=74)** If everything's wired up, you'll see the results instantly appear.
>
> **[1:18](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/challenge-create-a-simple-test-plan-with-thread-group-sampler-and-listener?u=76281980&t=78)** If you don't see anything or something's missing, then that's exactly why we do these small challenges first.
>
> **[1:25](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/challenge-create-a-simple-test-plan-with-thread-group-sampler-and-listener?u=76281980&t=85)** Go on, pause the course here and give it a go.
>
> **[1:28](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/challenge-create-a-simple-test-plan-with-thread-group-sampler-and-listener?u=76281980&t=88)** Don't worry about getting it perfect.
>
> **[1:30](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/challenge-create-a-simple-test-plan-with-thread-group-sampler-and-listener?u=76281980&t=90)** You'll see a complete walkthrough in the next lesson and we'll break down every choice step by step.

> [!info]- Semantic Content
>
> **Env Vars:** http (1), url (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)


### 3. JMeter CLI

> [↑ Back to Table of Contents](#table-of-contents)

#### Why use the command line?
> [LinkedIn Learning](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/why-use-the-command-line?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/why-use-the-command-line?u=76281980&t=0)** - [Instructor] Running my load test is a simple process through JMeter's interface, but using this for anything other than test creation or debugging means that I'm using far more computer resources than I need to.
>
> **[0:13](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/why-use-the-command-line?u=76281980&t=13)** Eventually, when I increase the load associated with the test, I'll start seeing errors, because there isn't enough RAM or CPU power for JMeter to use.
>
> **[0:24](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/why-use-the-command-line?u=76281980&t=24)** Running a load test from the Command Line Interface, or CLI, can help alleviate that by using significantly less resources.
>
> **[0:32](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/why-use-the-command-line?u=76281980&t=32)** Running load tests within the Command Line also allows for distributive load testing, which is an advanced way of sending your load test file to multiple instances of JMeter to increase that load exponentially.
>
> **[0:45](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/why-use-the-command-line?u=76281980&t=45)** The application openly recommends using the Command Line to do this.
>
> **[0:50](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/why-use-the-command-line?u=76281980&t=50)** It's faster, more reliable, and the CLI can still save all of the results of information to a file for later examination.
>
> **[0:57](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/why-use-the-command-line?u=76281980&t=57)** The CLI is the purest way of running a load test.
>
> **[1:01](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/why-use-the-command-line?u=76281980&t=61)** If you'll be working with JMeter in the future, it's something you should become very comfortable with.

> [!info]- Semantic Content
>
> **Env Vars:** cli (3), ram (1), cpu (1)
> **Code Keywords:** interface (2), this. (1)
> **Tools:** command line (3)
> **Definitions:** is a  (1), means that (1), is an  (1)
> **Speakers:** - [instructor] (1)

#### Opening JMeter through the CLI
> [LinkedIn Learning](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/opening-jmeter-through-the-cli?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/opening-jmeter-through-the-cli?u=76281980&t=0)** - [Instructor] If I need to use the JMeter application with a full GUI, I can still open it through the command line.
>
> **[0:07](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/opening-jmeter-through-the-cli?u=76281980&t=7)** On the command line, I can navigate to the bin folder within my JMeter directory and on my Mac I'll change my directory to where JMeter is stored.
>
> **[0:16](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/opening-jmeter-through-the-cli?u=76281980&t=16)** In the bin folder, I'm going to run the following command.
>
> **[0:19](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/opening-jmeter-through-the-cli?u=76281980&t=19)** Sh jmeter.sh and running that will open Jmeter.
>
> **[0:27](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/opening-jmeter-through-the-cli?u=76281980&t=27)** On Windows, I need to do almost the same series of events aside from the actual command line to run.
>
> **[0:33](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/opening-jmeter-through-the-cli?u=76281980&t=33)** I'd run jmeter.bat to perform the same action.
>
> **[0:40](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/opening-jmeter-through-the-cli?u=76281980&t=40)** When JMeter opens, it suggests that I shouldn't really use the GUI to run the load test.
>
> **[0:45](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/opening-jmeter-through-the-cli?u=76281980&t=45)** The GUI is most helpful for creating or debugging the code.
>
> **[0:49](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/opening-jmeter-through-the-cli?u=76281980&t=49)** At this point, I'm only halfway to doing what JMeter wants by learning to open the application using the command line.
>
> **[0:57](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/opening-jmeter-through-the-cli?u=76281980&t=57)** The GUI is a great place to start a new load test, however, once the test reaches a robust state, the CLI is the place to be.

> [!info]- Semantic Content
>
> **Env Vars:** gui (4), cli (1)
> **Tools:** command line (4)
> **UI Navigation:** navigate to (1), open the (1)
> **File Paths:** jmeter.sh (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Running your load test through the CLI
> [LinkedIn Learning](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/running-your-load-test-through-the-cli?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/running-your-load-test-through-the-cli?u=76281980&t=0)** - [Instructor] So I've created my load test that hits the London hotel site a number of times and returns results.
>
> **[0:07](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/running-your-load-test-through-the-cli?u=76281980&t=7)** I've edited it and debugged it and now I want to run it properly in the command line.
>
> **[0:14](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/running-your-load-test-through-the-cli?u=76281980&t=14)** Firstly, I need to make sure I'm in the right location.
>
> **[0:16](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/running-your-load-test-through-the-cli?u=76281980&t=16)** I need to be in the bin folder of the jmeter installation directory.
>
> **[0:22](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/running-your-load-test-through-the-cli?u=76281980&t=22)** From there I'm going to be using the sh jmeter.sh command.
>
> **[0:26](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/running-your-load-test-through-the-cli?u=76281980&t=26)** But, before I press return I'm going to add a couple of switches.
>
> **[0:30](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/running-your-load-test-through-the-cli?u=76281980&t=30)** I'm first going to add -n switch, this test jmeter to run in non-gooey mode.
>
> **[0:36](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/running-your-load-test-through-the-cli?u=76281980&t=36)** This means we essentially need to tell jmeter everything it needs to do with this load test on this command line.
>
> **[0:45](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/running-your-load-test-through-the-cli?u=76281980&t=45)** To specify a test file that I'm going to run, I need to include a -t switch, followed by the name of the test file.
>
> **[0:54](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/running-your-load-test-through-the-cli?u=76281980&t=54)** I've moved this file to the jmeter bin folder, but you'll find this in the exercise files.
>
> **[1:01](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/running-your-load-test-through-the-cli?u=76281980&t=61)** So, to recap I've built a command that opens jmeter, tells it to run on non-gooey mode, and also specifies a test file with it's associated switches.
>
> **[1:13](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/running-your-load-test-through-the-cli?u=76281980&t=73)** And then I'm going to hit return.
>
> **[1:15](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/running-your-load-test-through-the-cli?u=76281980&t=75)** Now number of things is going to happen here.
>
> **[1:17](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/running-your-load-test-through-the-cli?u=76281980&t=77)** First, the application is going to start in non-gooey mode and grab that test file.
>
> **[1:22](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/running-your-load-test-through-the-cli?u=76281980&t=82)** It's then going to read it and then execute that test based on the information within.
>
> **[1:28](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/running-your-load-test-through-the-cli?u=76281980&t=88)** From here it's going to run that load test, which is where that output is coming from.
>
> **[1:33](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/running-your-load-test-through-the-cli?u=76281980&t=93)** Think of this as a visual indicator that the test has run.
>
> **[1:38](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/running-your-load-test-through-the-cli?u=76281980&t=98)** If there are any issues with the execution of the test, they would be printed here.
>
> **[1:44](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/running-your-load-test-through-the-cli?u=76281980&t=104)** Once the test is finished, you will then also see 'end of test output' at the bottom of the terminal window.
>
> **[1:51](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/running-your-load-test-through-the-cli?u=76281980&t=111)** And this is how I should be running all of my load tests that I'm no longer editing or debugging.
>
> **[1:56](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/running-your-load-test-through-the-cli?u=76281980&t=116)** Running tests within the command line is straight forward, once you learn the different commands for jmeter.

> [!info]- Semantic Content
>
> **Code Keywords:** switch (2), return. (1), from. (1)
> **Tools:** command line (3), terminal (1)
> **CLI Commands:** make (1), find (1)
> **File Paths:** jmeter.sh (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### Saving CLI results to a .jtl file
> [LinkedIn Learning](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/saving-cli-results-to-a-jtl-file?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/saving-cli-results-to-a-jtl-file?u=76281980&t=0)** - [Instructor] It's awesome running your load test through the command-line.
>
> **[0:03](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/saving-cli-results-to-a-jtl-file?u=76281980&t=3)** If you've never done it before, you kind of feel like you're in the Matrix.
>
> **[0:07](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/saving-cli-results-to-a-jtl-file?u=76281980&t=7)** But, I didn't tell Jamie to save any reports from that last load test, meaning that the only output we have was the text from the output of the terminal.
>
> **[0:18](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/saving-cli-results-to-a-jtl-file?u=76281980&t=18)** Not ideal if you want to find out more detailed information about the test.
>
> **[0:24](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/saving-cli-results-to-a-jtl-file?u=76281980&t=24)** Now, I did add a listener to the test earlier through the GUI.
>
> **[0:28](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/saving-cli-results-to-a-jtl-file?u=76281980&t=28)** However, when running a load test through the command-line, it ignores all of the listeners we put in the test previously in the GUI.
>
> **[0:36](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/saving-cli-results-to-a-jtl-file?u=76281980&t=36)** Those listeners are for use only with the GUI when debugging and creating tests and are of no use to us here.
>
> **[0:44](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/saving-cli-results-to-a-jtl-file?u=76281980&t=44)** We can, however, save all of the detailed information of this test to a file for use later and for evidentiary purposes.
>
> **[0:53](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/saving-cli-results-to-a-jtl-file?u=76281980&t=53)** To do this, we'll go back to our command-line.
>
> **[0:56](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/saving-cli-results-to-a-jtl-file?u=76281980&t=56)** We'll get our previous command on deck ready to run, and I'm going to add the minus L switch followed by a unique name for our testing report.
>
> **[1:06](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/saving-cli-results-to-a-jtl-file?u=76281980&t=66)** So, demoresults.jtl.
>
> **[1:13](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/saving-cli-results-to-a-jtl-file?u=76281980&t=73)** And it's important to include the file extension as this is the Jamie to standard results file format that we can use through those listeners to visualize the information from this test.
>
> **[1:26](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/saving-cli-results-to-a-jtl-file?u=76281980&t=86)** Hitting return again, we'll run the same test, and once it's finished, if I list all of the files within that BIN folder on my terminal, I can see that there is a demoresults.jtl file now saved there.

> [!info]- Semantic Content
>
> **Env Vars:** gui (3), bin (1)
> **Code Keywords:** this, (1), switch (1)
> **Tools:** terminal (2)
> **CLI Commands:** find (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Run a load test via CLI
> [LinkedIn Learning](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/challenge-run-a-load-test-via-cli?u=76281980)

> [!transcript]- Transcript
>
> **[0:04](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/challenge-run-a-load-test-via-cli?u=76281980&t=4)** All right, so it's time to step away from the GUI.
>
> **[0:09](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/challenge-run-a-load-test-via-cli?u=76281980&t=9)** You've built test plans, you've clicked the run button, and now I want you to launch JMeter the way performance testers actually do it day-to-day, through the command line.
>
> **[0:21](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/challenge-run-a-load-test-via-cli?u=76281980&t=21)** This challenge looks simple, but don't underestimate it.
>
> **[0:25](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/challenge-run-a-load-test-via-cli?u=76281980&t=25)** Once you can run tests through the CLI, you've unlocked automation, CI integration and large scale test execution.
>
> **[0:35](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/challenge-run-a-load-test-via-cli?u=76281980&t=35)** Start by opening your command prompt or terminal.
>
> **[0:39](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/challenge-run-a-load-test-via-cli?u=76281980&t=39)** Find the test plan you've created earlier in this course.
>
> **[0:42](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/challenge-run-a-load-test-via-cli?u=76281980&t=42)** You can also find it in the exercise files.
>
> **[0:45](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/challenge-run-a-load-test-via-cli?u=76281980&t=45)** Any valid .jmx file is absolutely fine for this challenge.
>
> **[0:51](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/challenge-run-a-load-test-via-cli?u=76281980&t=51)** Now we're going to run the core command jmeter-n-t and then your testplan.jmx filename, then dash l and then your results.jtl filename.
>
> **[1:06](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/challenge-run-a-load-test-via-cli?u=76281980&t=66)** Now make sure you replace these placeholders with real filenames.
>
> **[1:10](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/challenge-run-a-load-test-via-cli?u=76281980&t=70)** So in our example, it would be jmeter-n-t landonhoteltest.jmx-l landonhotelresults.jtl Once you hit enter, JMeter runs completely without the GUI.
>
> **[1:28](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/challenge-run-a-load-test-via-cli?u=76281980&t=88)** No windows, no graphs, just raw console output showing threads starting and finishing.
>
> **[1:35](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/challenge-run-a-load-test-via-cli?u=76281980&t=95)** If the command works, the JTL file appears wherever you told JMeter to write it.
>
> **[1:41](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/challenge-run-a-load-test-via-cli?u=76281980&t=101)** This file will contain all of your test results.
>
> **[1:45](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/challenge-run-a-load-test-via-cli?u=76281980&t=105)** If the command doesn't work, it's almost always a missing file path or JMeter not being on your system's path variable.
>
> **[1:56](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/challenge-run-a-load-test-via-cli?u=76281980&t=116)** Now these are some very specific issues depending on your system and your setup.
>
> **[2:02](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/challenge-run-a-load-test-via-cli?u=76281980&t=122)** So my suggestion would be to refer to the JMeter documentation or have a look on Google to see if you can resolve any issues.
>
> **[2:11](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/challenge-run-a-load-test-via-cli?u=76281980&t=131)** So pause the course here and go and give it a go.
>
> **[2:14](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/challenge-run-a-load-test-via-cli?u=76281980&t=134)** Keep it simple, one command, one test plan, one results file.
>
> **[2:18](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/challenge-run-a-load-test-via-cli?u=76281980&t=138)** When you're done, head on over to the next lesson and we'll walk through the full solution and explain exactly what each part of the command does.

> [!info]- Semantic Content
>
> **Env Vars:** gui (2), cli (1), jtl (1)
> **CLI Commands:** find (2), make (1)
> **Tools:** command line (1), command prompt (1), terminal (1)
> **Exercise Files:** exercise files (1)
> **Prerequisites:** setup (1)


### 4. Viewing the Results

> [↑ Back to Table of Contents](#table-of-contents)

#### Importing a .jtl file to JMeter graphs
> [LinkedIn Learning](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/importing-a-jtl-file-to-jmeter-graphs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/importing-a-jtl-file-to-jmeter-graphs?u=76281980&t=0)** - [Instructor] If I have a .jtl file from a previous load test I can view the results of that load test within JMeter to analyze the results.
>
> **[0:10](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/importing-a-jtl-file-to-jmeter-graphs?u=76281980&t=10)** Even from a fresh test within JMeter, if I right click on the test plan and go to listeners, I can then choose a listener to display some information I can then import my previously saved jtl for results file into this.
>
> **[0:26](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/importing-a-jtl-file-to-jmeter-graphs?u=76281980&t=26)** I'm going to choose jp@gc response codes per second.
>
> **[0:31](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/importing-a-jtl-file-to-jmeter-graphs?u=76281980&t=31)** And I'm going to right click again, go to listener and go to summary report.
>
> **[0:38](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/importing-a-jtl-file-to-jmeter-graphs?u=76281980&t=38)** Clicking onto one of these shows me in the context screen that I have a browse button that allows me to import a jtl file.
>
> **[0:46](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/importing-a-jtl-file-to-jmeter-graphs?u=76281980&t=46)** Clicking here allows me to select the jtl file that I saved earlier.
>
> **[0:51](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/importing-a-jtl-file-to-jmeter-graphs?u=76281980&t=51)** Doing this shows me the data within that file displayed how the listener would display it in real time.
>
> **[0:58](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/importing-a-jtl-file-to-jmeter-graphs?u=76281980&t=58)** This is crucial because data interrogation is a large part of load testing.
>
> **[1:03](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/importing-a-jtl-file-to-jmeter-graphs?u=76281980&t=63)** Finding out when something happened on a website and why is just as important as putting a site onto load.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (3), click on (1), select the (1)
> **Code Keywords:** this. (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Creating an HTML dashboard at CLI runtime
> [LinkedIn Learning](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/creating-an-html-dashboard-at-cli-runtime?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/creating-an-html-dashboard-at-cli-runtime?u=76281980&t=1)** - If I'm running a very simple load test and the expectation is to report on the amount of users that hit the website or server and what kind of response codes came back, I could run the test as I've already done in the CLI, generate the .jtl file, and then use that jtl file to graph the results within JMeter.
>
> **[0:20](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/creating-an-html-dashboard-at-cli-runtime?u=76281980&t=20)** I could ask JMeter to do most of that for me by creating a dashboard after running the test.
>
> **[0:26](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/creating-an-html-dashboard-at-cli-runtime?u=76281980&t=26)** To do this, I'm going to add two very simple switches to my command line instruction.
>
> **[0:31](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/creating-an-html-dashboard-at-cli-runtime?u=76281980&t=31)** - e will tell JMeter to perform any action following it only after the test has completed and the -o, followed by a name.
>
> **[0:40](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/creating-an-html-dashboard-at-cli-runtime?u=76281980&t=40)** This will instruct JMeter to create this dashboard in a folder of that name.
>
> **[0:45](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/creating-an-html-dashboard-at-cli-runtime?u=76281980&t=45)** I'm going to call mine demoresults and I'm also going to just rename my .jtl file just to make sure there's no duplication errors and then I'm going to hit return.
>
> **[0:57](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/creating-an-html-dashboard-at-cli-runtime?u=76281980&t=57)** This allows the test to run and when this is finished, I'm going to go and find that dashboard folder and take a look at the results.
>
> **[1:04](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/creating-an-html-dashboard-at-cli-runtime?u=76281980&t=64)** My test has run and I'm ready to look at the results.
>
> **[1:08](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/creating-an-html-dashboard-at-cli-runtime?u=76281980&t=68)** Navigating to the bin folder of the JMeter translation directory shows me that I have a new folder called the name I specified in the CLI command.
>
> **[1:17](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/creating-an-html-dashboard-at-cli-runtime?u=76281980&t=77)** Opening this folder shows me that there's an index.html file and this is where all of that information is going to be nicely presented in a webpage.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1), find (1)
> **Code Keywords:** this, (1), return. (1)
> **Env Vars:** cli (2)
> **Speakers:** - if (1), - e (1)
> **File Paths:** index.html (1)
> **Tools:** command line (1)

#### Viewing the dashboard
> [LinkedIn Learning](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/viewing-the-dashboard?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/viewing-the-dashboard?u=76281980&t=0)** - [Instructor] So I've moved the 0403 exercise file into the JMX folder and run this test.
>
> **[0:06](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/viewing-the-dashboard?u=76281980&t=6)** It will run for longer so that we have more data to show in the dashboard.
>
> **[0:12](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/viewing-the-dashboard?u=76281980&t=12)** If I wanted to interrogate or, perhaps, present this information, I can open the html dashboard that I have created.
>
> **[0:19](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/viewing-the-dashboard?u=76281980&t=19)** Finding the named dashboard folder within JMX's bin directory, allows me to see the index.html file.
>
> **[0:28](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/viewing-the-dashboard?u=76281980&t=28)** Opening this uses the other files from that location to generate a stand alone dashboard for the information that you may need to gather during the test.
>
> **[0:37](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/viewing-the-dashboard?u=76281980&t=37)** For this dashboard, I can see aspects like the amount of and most prevalent errors.
>
> **[0:43](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/viewing-the-dashboard?u=76281980&t=43)** I could also see a selection of other graphs such as the overall connections and statistics like the response time versus request, and hits per second.
>
> **[0:52](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/viewing-the-dashboard?u=76281980&t=52)** This is a cool amount of information to have, because it lets me see at a glance some metrics that are otherwise difficult to visualize.
>
> **[1:00](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/viewing-the-dashboard?u=76281980&t=60)** I can then report on this information, citing the graphs directly.
>
> **[1:04](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/viewing-the-dashboard?u=76281980&t=64)** It's an easy to present and use format for the load and performance testing data that should suit people's needs in the initial instance.

> [!info]- Semantic Content
>
> **Env Vars:** jmx (2)
> **File Paths:** index.html (1)
> **UI Navigation:** open the (1)
> **Exercise Files:** exercise file (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Pros and cons
> [LinkedIn Learning](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/pros-and-cons?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/pros-and-cons?u=76281980&t=0)** - [Instructor] I now have two quite different options for data interrogation after my load test is finished.
>
> **[0:06](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/pros-and-cons?u=76281980&t=6)** So which one should I use?
>
> **[0:08](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/pros-and-cons?u=76281980&t=8)** The answer to this isn't quite as straightforward as you might think.
>
> **[0:12](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/pros-and-cons?u=76281980&t=12)** Both options come with their pros and cons.
>
> **[0:16](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/pros-and-cons?u=76281980&t=16)** On one hand, we have the dashboard.
>
> **[0:18](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/pros-and-cons?u=76281980&t=18)** This dashboard is largely automated, it's easy to package up and distribute to others, like developers and stakeholders, and gives you an interactive source of data visualization.
>
> **[0:29](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/pros-and-cons?u=76281980&t=29)** On the other hand, the dashboard only has a finite amount of statistics that it graphs, and if you are interested in something that it doesn't graph, then you simply won't have that information.
>
> **[0:39](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/pros-and-cons?u=76281980&t=39)** The JTL file file, on the other hand, allows you to use the data within it however you want.
>
> **[0:44](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/pros-and-cons?u=76281980&t=44)** You can transpose it through any of the installed graph plugins or so you count brand-new plugins from the JMeter plugins website and see if this offers you the information you require.
>
> **[0:55](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/pros-and-cons?u=76281980&t=55)** You can also use the graphs that these plugins generate to build your own custom report for load and performance testing.
>
> **[1:01](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/pros-and-cons?u=76281980&t=61)** Conversely, this process is time-consuming and requires more dedication than some people might be able to give.
>
> **[1:09](https://www.linkedin.com/learning/jmeter-performance-and-load-testing/pros-and-cons?u=76281980&t=69)** At the end of the load test, it is the test runner's responsibility to discover what they need to generate results on and use the method that best suits their need.

> [!info]- Semantic Content
>
> **Code Keywords:** require (1)
> **Env Vars:** jtl (1)
> **Speakers:** - [instructor] (1)


### Conclusion

> [↑ Back to Table of Contents](#table-of-contents)


## Instructor

- [[Mike Smith]]

## Resources

- Exercise files available

## Skills Covered

- Load Testing
- JMeter

## Path Context

### In [[Getting Started with Software Testing]]
← [[Learning Playwright]] | **7 of 12** | [[API Testing Foundations]] →

## Appears In

- [[Getting Started with Software Testing]]

---

[↑ Back to top](#)