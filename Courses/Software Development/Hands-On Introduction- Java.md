---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: hands-on-introduction-java
url: "https://www.linkedin.com/learning/hands-on-introduction-java"
duration_minutes: 80
duration: 1h 20m
level: Intermediate
updated: 11/9/2022
learners: 48312
skills:
  - Java
exercise_files: false
github: "https://github.com/LinkedInLearning/hands-on-java-3080245/codespaces"
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQF6nAhBEhw54Q/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1666989653554?e=2147483647&amp;v=beta&amp;t=tw74qmskKZKRB94IWWhpLS1uFrYc3Kb_tjg2hqwa3zM"
linkedin_topic: Software Development
learning_paths:
  - '[[A Quick Start Guide to Java Programming]]'
prev_courses:
  - '[[Learning Java 17]]'
next_courses:
  - '[[Practice It- Java]]'
path_nav: '[{"path":"A Quick Start Guide to Java Programming","position":4,"total":5,"prev":"Learning Java 17","next":"Practice It- Java"}]'
path_count: 1
tags:
  - course
  - topic/software-development
  - skill/java
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/Hands-On%20Introduction-%20Java.md)

![Hands-On Introduction: Java](https://media.licdn.com/dms/image/v2/D560DAQF6nAhBEhw54Q/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1666989653554?e=2147483647&amp;v=beta&amp;t=tw74qmskKZKRB94IWWhpLS1uFrYc3Kb_tjg2hqwa3zM)

# Hands-On Introduction: Java

> Java is one of the most popular open-source programming languages that’s currently available on the market. It’s used widely in different industries all over the world, where it’s become something of a must-have for developers. Are you ready to get your skills up to speed? Or are you at risk of falling behind? Join instructor Angie Jones for a hands-on introduction to basic coding in Java. Learn h

> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-introduction-java) | 1h 20m | Intermediate | 48K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#Introduction]]** (4 videos)
- **[[#1. Model Objects]]** (3 videos)
- **[[#2. External Data Sources]]** (3 videos)
- **[[#3. Utility Classes]]** (3 videos)
- **[[#4. State Management]]** (3 videos)
- **[[#Conclusion]]** (1 videos)

### Introduction

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Getting hands on with Java
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-introduction-java/getting-hands-on-with-java?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-java/getting-hands-on-with-java?u=76281980&t=0)** - [Angie] Java is one of the world's most popular programming languages and it's widely used to build enterprise applications in domains such as web, mobile, big data, cloud, gaming, and even artificial intelligence.
>
> **[0:15](https://www.linkedin.com/learning/hands-on-introduction-java/getting-hands-on-with-java?u=76281980&t=15)** While learning programming concepts is an important first step in becoming a Java developer, mastery is obtained by applying those concepts to building applications.
>
> **[0:26](https://www.linkedin.com/learning/hands-on-introduction-java/getting-hands-on-with-java?u=76281980&t=26)** That's why in this course, we'll focus on gaining practical experience and developing a Java application using GitHub Codespaces.
>
> **[0:36](https://www.linkedin.com/learning/hands-on-introduction-java/getting-hands-on-with-java?u=76281980&t=36)** We'll visit core concepts of the Java programming language and learn when and how to apply them to real-world problems.
>
> **[0:45](https://www.linkedin.com/learning/hands-on-introduction-java/getting-hands-on-with-java?u=76281980&t=45)** I'm Angie Jones, a certified Java developer and Java champion.
>
> **[0:50](https://www.linkedin.com/learning/hands-on-introduction-java/getting-hands-on-with-java?u=76281980&t=50)** Join me in this LinkedIn Learning course as we dive into project-based learning.

> [!info]- Semantic Content
>
> **Tools:** github (1)
> **Definitions:** is an  (1)
> **Analogies:** such as (1)
> **Speakers:** - [angie] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-introduction-java/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-java/what-you-should-know?u=76281980&t=0)** - [Instructor] To get the most out of this course, you should have basic knowledge of Java or any other object-oriented programming language.
>
> **[0:07](https://www.linkedin.com/learning/hands-on-introduction-java/what-you-should-know?u=76281980&t=7)** We'll focus on exercising that knowledge by building an application to gain practical experience with Java.
>
> **[0:15](https://www.linkedin.com/learning/hands-on-introduction-java/what-you-should-know?u=76281980&t=15)** If you need an introduction to Java, I encourage you to take my Java 17 Essentials courses which cover Java syntax, data types, decision and repetition structures, classes and objects, methods, inheritance, exception handling, and much more.
>
> **[0:33](https://www.linkedin.com/learning/hands-on-introduction-java/what-you-should-know?u=76281980&t=33)** If you already have fundamental knowledge about object-oriented programming, let's jump right in.
>
> **[0:39](https://www.linkedin.com/learning/hands-on-introduction-java/what-you-should-know?u=76281980&t=39)** We'll use GitHub Codespaces in this course, so Ray will walk us through the initial setup.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1)
> **Versions:** java 17 (1)
> **Tools:** github (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### Using GitHub Codespaces with this course
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-introduction-java/using-github-codespaces-with-this-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-java/using-github-codespaces-with-this-course?u=76281980&t=0)** - This is Ray Villalobos, senior staff instructor at LinkedIn Learning, and I'm going to show you how to work with LinkedIn Learning courses using GitHub Codespaces.
>
> **[0:09](https://www.linkedin.com/learning/hands-on-introduction-java/using-github-codespaces-with-this-course?u=76281980&t=9)** Codespaces is a code editor in the cloud with the full power of Visual Studio Code.
>
> **[0:14](https://www.linkedin.com/learning/hands-on-introduction-java/using-github-codespaces-with-this-course?u=76281980&t=14)** It allows for real-world hands-on practice that mirrors software development in the workplace.
>
> **[0:19](https://www.linkedin.com/learning/hands-on-introduction-java/using-github-codespaces-with-this-course?u=76281980&t=19)** This course was created using GitHub Codespaces.
>
> **[0:22](https://www.linkedin.com/learning/hands-on-introduction-java/using-github-codespaces-with-this-course?u=76281980&t=22)** Using Codespaces, you have everything you need to get going without needing complex installations or build tools.
>
> **[0:29](https://www.linkedin.com/learning/hands-on-introduction-java/using-github-codespaces-with-this-course?u=76281980&t=29)** One click and you're ready to go.
>
> **[0:32](https://www.linkedin.com/learning/hands-on-introduction-java/using-github-codespaces-with-this-course?u=76281980&t=32)** To practice along with the course, you can create a Codespace directly from the course overview page.
>
> **[0:38](https://www.linkedin.com/learning/hands-on-introduction-java/using-github-codespaces-with-this-course?u=76281980&t=38)** First, click Open next to GitHub Codespaces.
>
> **[0:42](https://www.linkedin.com/learning/hands-on-introduction-java/using-github-codespaces-with-this-course?u=76281980&t=42)** If you're already logged in, you'll be directed to a Getting started with GitHub Codespaces page.
>
> **[0:48](https://www.linkedin.com/learning/hands-on-introduction-java/using-github-codespaces-with-this-course?u=76281980&t=48)** If you're not logged in, you'll be prompted to log in or create a free GitHub account first.
>
> **[0:53](https://www.linkedin.com/learning/hands-on-introduction-java/using-github-codespaces-with-this-course?u=76281980&t=53)** From this page, click on Create codespace on main.
>
> **[0:58](https://www.linkedin.com/learning/hands-on-introduction-java/using-github-codespaces-with-this-course?u=76281980&t=58)** The first time you open up a Codespace, it might take a few minutes to create the virtual machine.
>
> **[1:04](https://www.linkedin.com/learning/hands-on-introduction-java/using-github-codespaces-with-this-course?u=76281980&t=64)** Once it's done, you'll enter the code editor environment.
>
> **[1:08](https://www.linkedin.com/learning/hands-on-introduction-java/using-github-codespaces-with-this-course?u=76281980&t=68)** If you're familiar with Visual Studio Code, this is a special version of that editor running on GitHub's servers.
>
> **[1:15](https://www.linkedin.com/learning/hands-on-introduction-java/using-github-codespaces-with-this-course?u=76281980&t=75)** Your course can have one or more extensions pre-installed based on the course you're taking.
>
> **[1:20](https://www.linkedin.com/learning/hands-on-introduction-java/using-github-codespaces-with-this-course?u=76281980&t=80)** Those can be found in the Extensions panel.
>
> **[1:25](https://www.linkedin.com/learning/hands-on-introduction-java/using-github-codespaces-with-this-course?u=76281980&t=85)** Because this is a browser, it's easy to inadvertently close the browser window and lose the editor.
>
> **[1:31](https://www.linkedin.com/learning/hands-on-introduction-java/using-github-codespaces-with-this-course?u=76281980&t=91)** If you do that, don't panic.
>
> **[1:33](https://www.linkedin.com/learning/hands-on-introduction-java/using-github-codespaces-with-this-course?u=76281980&t=93)** Codespaces saves everything you're doing on a virtual machine.
>
> **[1:37](https://www.linkedin.com/learning/hands-on-introduction-java/using-github-codespaces-with-this-course?u=76281980&t=97)** You can always get the Codespace back for this repo right here.
>
> **[1:46](https://www.linkedin.com/learning/hands-on-introduction-java/using-github-codespaces-with-this-course?u=76281980&t=106)** Notice that it even remembered that I had opened the Extensions panel.
>
> **[1:51](https://www.linkedin.com/learning/hands-on-introduction-java/using-github-codespaces-with-this-course?u=76281980&t=111)** An alternate way to create a Codespace is directly from one of our courses GitHub repositories.
>
> **[1:57](https://www.linkedin.com/learning/hands-on-introduction-java/using-github-codespaces-with-this-course?u=76281980&t=117)** From here, click Code and then Create codespace on main.
>
> **[2:02](https://www.linkedin.com/learning/hands-on-introduction-java/using-github-codespaces-with-this-course?u=76281980&t=122)** You can also restart a previous Codespace from this location.
>
> **[2:06](https://www.linkedin.com/learning/hands-on-introduction-java/using-github-codespaces-with-this-course?u=76281980&t=126)** GitHub Codespaces is compatible on devices with smaller screen sizes, like mobile phones or tablets, but it is optimized for larger screens.
>
> **[2:15](https://www.linkedin.com/learning/hands-on-introduction-java/using-github-codespaces-with-this-course?u=76281980&t=135)** So we recommend that you practice along with this course on a laptop or desktop computer.
>
> **[2:22](https://www.linkedin.com/learning/hands-on-introduction-java/using-github-codespaces-with-this-course?u=76281980&t=142)** The sample course I'm looking at is what is known as a flat branch repository.
>
> **[2:27](https://www.linkedin.com/learning/hands-on-introduction-java/using-github-codespaces-with-this-course?u=76281980&t=147)** You can tell because there's a single branch when you click on the branch icon on the status bar.
>
> **[2:32](https://www.linkedin.com/learning/hands-on-introduction-java/using-github-codespaces-with-this-course?u=76281980&t=152)** You can also tell because there are different folders for each of the videos in the course.
>
> **[2:38](https://www.linkedin.com/learning/hands-on-introduction-java/using-github-codespaces-with-this-course?u=76281980&t=158)** This is a sample of what a multi-branch repository looks like, which is more common when you're working with web frameworks.
>
> **[2:45](https://www.linkedin.com/learning/hands-on-introduction-java/using-github-codespaces-with-this-course?u=76281980&t=165)** If you go to the branch icon on the status bar, you can see that there's more than one branch.
>
> **[2:50](https://www.linkedin.com/learning/hands-on-introduction-java/using-github-codespaces-with-this-course?u=76281980&t=170)** You can switch to the different branches using this menu.
>
> **[2:54](https://www.linkedin.com/learning/hands-on-introduction-java/using-github-codespaces-with-this-course?u=76281980&t=174)** The branches are named with the chapter and the video number you're watching.
>
> **[2:58](https://www.linkedin.com/learning/hands-on-introduction-java/using-github-codespaces-with-this-course?u=76281980&t=178)** If you see a B at the end of the branch, that's how the code looked at the beginning.
>
> **[3:02](https://www.linkedin.com/learning/hands-on-introduction-java/using-github-codespaces-with-this-course?u=76281980&t=182)** If you see an E, that's how the code looked at the end.
>
> **[3:06](https://www.linkedin.com/learning/hands-on-introduction-java/using-github-codespaces-with-this-course?u=76281980&t=186)** Let's switch to how the code looked on chapter two and the third video.
>
> **[3:12](https://www.linkedin.com/learning/hands-on-introduction-java/using-github-codespaces-with-this-course?u=76281980&t=192)** I'll choose the beginning branch.
>
> **[3:15](https://www.linkedin.com/learning/hands-on-introduction-java/using-github-codespaces-with-this-course?u=76281980&t=195)** As you work through a course, you might make some changes on a branch.
>
> **[3:19](https://www.linkedin.com/learning/hands-on-introduction-java/using-github-codespaces-with-this-course?u=76281980&t=199)** I'm going to make a minor edit on the index.html file right here.
>
> **[3:27](https://www.linkedin.com/learning/hands-on-introduction-java/using-github-codespaces-with-this-course?u=76281980&t=207)** I'm going to go ahead and save that, and you can see that I've modified this file because there's an M right here, and the branch name now has an asterisk on it.
>
> **[3:37](https://www.linkedin.com/learning/hands-on-introduction-java/using-github-codespaces-with-this-course?u=76281980&t=217)** If I try to switch to another branch that causes major changes, like say 07_03e, I may see a dialog box like this.
>
> **[3:49](https://www.linkedin.com/learning/hands-on-introduction-java/using-github-codespaces-with-this-course?u=76281980&t=229)** If you don't care about saving your changes, you can simply hit the Force Checkout button.
>
> **[3:54](https://www.linkedin.com/learning/hands-on-introduction-java/using-github-codespaces-with-this-course?u=76281980&t=234)** It will let you switch to that branch.
>
> **[3:57](https://www.linkedin.com/learning/hands-on-introduction-java/using-github-codespaces-with-this-course?u=76281980&t=237)** You can then choose to discard the changes on this file.
>
> **[4:01](https://www.linkedin.com/learning/hands-on-introduction-java/using-github-codespaces-with-this-course?u=76281980&t=241)** Your instructor will let you know what the folder structure is for your course.
>
> **[4:06](https://www.linkedin.com/learning/hands-on-introduction-java/using-github-codespaces-with-this-course?u=76281980&t=246)** Forking lets you create your own copy of the repository on your account so that you can keep any changes that you've made, even if you've deleted the Codespace.
>
> **[4:16](https://www.linkedin.com/learning/hands-on-introduction-java/using-github-codespaces-with-this-course?u=76281980&t=256)** To create your own fork, you can click on the Fork button on the repository.
>
> **[4:23](https://www.linkedin.com/learning/hands-on-introduction-java/using-github-codespaces-with-this-course?u=76281980&t=263)** I'm going to hit Create fork.
>
> **[4:27](https://www.linkedin.com/learning/hands-on-introduction-java/using-github-codespaces-with-this-course?u=76281980&t=267)** I now have my own copy of this repository, and if I want to, I can start a new Codespace on that fork.
>
> **[4:39](https://www.linkedin.com/learning/hands-on-introduction-java/using-github-codespaces-with-this-course?u=76281980&t=279)** This forked version is almost exactly like the original repository, but it will let you push your own changes.
>
> **[4:46](https://www.linkedin.com/learning/hands-on-introduction-java/using-github-codespaces-with-this-course?u=76281980&t=286)** Notice that the URL of the repository is slightly different.
>
> **[4:50](https://www.linkedin.com/learning/hands-on-introduction-java/using-github-codespaces-with-this-course?u=76281980&t=290)** Let's go ahead and make a simple change to this file right here.
>
> **[5:00](https://www.linkedin.com/learning/hands-on-introduction-java/using-github-codespaces-with-this-course?u=76281980&t=300)** I'm going to save it.
>
> **[5:03](https://www.linkedin.com/learning/hands-on-introduction-java/using-github-codespaces-with-this-course?u=76281980&t=303)** You'll note that there is an M right here as well as an asterisk on this branch.
>
> **[5:08](https://www.linkedin.com/learning/hands-on-introduction-java/using-github-codespaces-with-this-course?u=76281980&t=308)** In the Source Control panel, you can also see a one for the change that we just made.
>
> **[5:14](https://www.linkedin.com/learning/hands-on-introduction-java/using-github-codespaces-with-this-course?u=76281980&t=314)** Let's go ahead and try to commit this change.
>
> **[5:20](https://www.linkedin.com/learning/hands-on-introduction-java/using-github-codespaces-with-this-course?u=76281980&t=320)** I'm going to hit the Commit button, and I'll ask it to go ahead and stage the changes, and then I'm going to hit this button here.
>
> **[5:32](https://www.linkedin.com/learning/hands-on-introduction-java/using-github-codespaces-with-this-course?u=76281980&t=332)** I'll hit OK.
>
> **[5:34](https://www.linkedin.com/learning/hands-on-introduction-java/using-github-codespaces-with-this-course?u=76281980&t=334)** You can also let it go ahead and run git fetch.
>
> **[5:37](https://www.linkedin.com/learning/hands-on-introduction-java/using-github-codespaces-with-this-course?u=76281980&t=337)** That way, it'll automatically sync with your forked repo.
>
> **[5:41](https://www.linkedin.com/learning/hands-on-introduction-java/using-github-codespaces-with-this-course?u=76281980&t=341)** Now, that change will be stored in your own version of this repository.
>
> **[5:46](https://www.linkedin.com/learning/hands-on-introduction-java/using-github-codespaces-with-this-course?u=76281980&t=346)** Don't worry.
>
> **[5:47](https://www.linkedin.com/learning/hands-on-introduction-java/using-github-codespaces-with-this-course?u=76281980&t=347)** If you forget to fork a repo and then try to push changes, Codespaces will also ask you if you want to create a fork automatically.
>
> **[5:55](https://www.linkedin.com/learning/hands-on-introduction-java/using-github-codespaces-with-this-course?u=76281980&t=355)** Look for additional course-specific tips from the instructor.
>
> **[5:58](https://www.linkedin.com/learning/hands-on-introduction-java/using-github-codespaces-with-this-course?u=76281980&t=358)** Now let's get back to the course.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), switch (4), this. (1)
> **Tools:** github (8), visual studio (2)
> **UI Navigation:** switch to (4), click on (1), go to (1)
> **Definitions:** is a  (4), is an  (1)
> **CLI Commands:** make (3), git (1)
> **File Paths:** index.html (1)
> **Env Vars:** url (1)
> **Warnings:** note that (1)

#### Project setup
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-introduction-java/project-setup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-java/project-setup?u=76281980&t=0)** - [Instructor] Most of the heavy lifting to configure our project has already been taken care of by Codespaces.
>
> **[0:06](https://www.linkedin.com/learning/hands-on-introduction-java/project-setup?u=76281980&t=6)** There's a couple of additional steps we need to cover so that we're ready to build our application.
>
> **[0:12](https://www.linkedin.com/learning/hands-on-introduction-java/project-setup?u=76281980&t=12)** If you haven't already, be sure to fork the repo for this course so that you have your own personal working space.
>
> **[0:19](https://www.linkedin.com/learning/hands-on-introduction-java/project-setup?u=76281980&t=19)** Once you have the editor opened, let's close any panels and popups.
>
> **[0:25](https://www.linkedin.com/learning/hands-on-introduction-java/project-setup?u=76281980&t=25)** So we'll close this one and this one and this one.
>
> **[0:30](https://www.linkedin.com/learning/hands-on-introduction-java/project-setup?u=76281980&t=30)** If you have any others, be sure to close those as well.
>
> **[0:33](https://www.linkedin.com/learning/hands-on-introduction-java/project-setup?u=76281980&t=33)** In this course, we'll use a database, which holds all of the bank's records about customers and their accounts.
>
> **[0:40](https://www.linkedin.com/learning/hands-on-introduction-java/project-setup?u=76281980&t=40)** To view the contents of the database, we'll need to install the SQLite Viewer plugin.
>
> **[0:46](https://www.linkedin.com/learning/hands-on-introduction-java/project-setup?u=76281980&t=46)** To do so, click this Extensions icon on the left navigation menu, and we're going to scroll down to the Recommended section.
>
> **[0:58](https://www.linkedin.com/learning/hands-on-introduction-java/project-setup?u=76281980&t=58)** So I'm just going to collapse these other sections.
>
> **[1:02](https://www.linkedin.com/learning/hands-on-introduction-java/project-setup?u=76281980&t=62)** And you'll see the SQLite Viewer listed here.
>
> **[1:06](https://www.linkedin.com/learning/hands-on-introduction-java/project-setup?u=76281980&t=66)** Go ahead and press Install.
>
> **[1:10](https://www.linkedin.com/learning/hands-on-introduction-java/project-setup?u=76281980&t=70)** Once this is installed, click the Explorer icon on the left, and we're going to expand the Resources folder.
>
> **[1:21](https://www.linkedin.com/learning/hands-on-introduction-java/project-setup?u=76281980&t=81)** Click on the Bank.db file.
>
> **[1:24](https://www.linkedin.com/learning/hands-on-introduction-java/project-setup?u=76281980&t=84)** And this warning is informing us that the file can't be viewed using the default VS Code Editor.
>
> **[1:32](https://www.linkedin.com/learning/hands-on-introduction-java/project-setup?u=76281980&t=92)** If we click Open Anyway, we'll see an option to open this file with the SQLite Viewer plugin.
>
> **[1:40](https://www.linkedin.com/learning/hands-on-introduction-java/project-setup?u=76281980&t=100)** Once we click that, we see the contents of the database.
>
> **[1:45](https://www.linkedin.com/learning/hands-on-introduction-java/project-setup?u=76281980&t=105)** Next, we need to import the Java project we'll be working on.
>
> **[1:48](https://www.linkedin.com/learning/hands-on-introduction-java/project-setup?u=76281980&t=108)** We can do this by expanding the Java Projects section under Explorer.
>
> **[1:55](https://www.linkedin.com/learning/hands-on-introduction-java/project-setup?u=76281980&t=115)** And I'll just collapse the very top one.
>
> **[1:58](https://www.linkedin.com/learning/hands-on-introduction-java/project-setup?u=76281980&t=118)** We'll click this Import Projects button, and this will import our empty Banking project.
>
> **[2:06](https://www.linkedin.com/learning/hands-on-introduction-java/project-setup?u=76281980&t=126)** Awesome. Our project has been imported.
>
> **[2:09](https://www.linkedin.com/learning/hands-on-introduction-java/project-setup?u=76281980&t=129)** Now let's create a hierarchy of packages that we'll then add our project files to.
>
> **[2:16](https://www.linkedin.com/learning/hands-on-introduction-java/project-setup?u=76281980&t=136)** So right-click on this Banking project and choose New Package.
>
> **[2:23](https://www.linkedin.com/learning/hands-on-introduction-java/project-setup?u=76281980&t=143)** Then we need to enter a name.
>
> **[2:25](https://www.linkedin.com/learning/hands-on-introduction-java/project-setup?u=76281980&t=145)** So let's enter src.main.java.bank
>
> **[2:34](https://www.linkedin.com/learning/hands-on-introduction-java/project-setup?u=76281980&t=154)** and press Enter.
>
> **[2:36](https://www.linkedin.com/learning/hands-on-introduction-java/project-setup?u=76281980&t=156)** If you don't see the new package hierarchy automatically appear, click the three dots to the right of the Java projects and click Refresh.
>
> **[2:47](https://www.linkedin.com/learning/hands-on-introduction-java/project-setup?u=76281980&t=167)** Awesome. Now we see our structure.
>
> **[2:50](https://www.linkedin.com/learning/hands-on-introduction-java/project-setup?u=76281980&t=170)** Now we have everything we need to get started building our project.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3)
> **UI Navigation:** scroll down (1), click on (1), right-click (1)
> **Prerequisites:** install (2), configure (1)
> **File Paths:** src.main.java (1)
> **Tools:** vs code (1)
> **Best Practices:** recommended (1)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)


### 1. Model Objects

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Design a solution
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-introduction-java/design-a-solution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-java/design-a-solution?u=76281980&t=0)** - [Instructor] For this project, our task is to build a basic banking system that allows customers to view their balance, make deposits, and withdraw funds from their accounts.
>
> **[0:11](https://www.linkedin.com/learning/hands-on-introduction-java/design-a-solution?u=76281980&t=11)** Before writing any code, let's examine our challenge, design a solution, and identify our assumptions.
>
> **[0:19](https://www.linkedin.com/learning/hands-on-introduction-java/design-a-solution?u=76281980&t=19)** We have a database with two tables: customers and accounts.
>
> **[0:23](https://www.linkedin.com/learning/hands-on-introduction-java/design-a-solution?u=76281980&t=23)** These both represent objects within our application that we'll need to interact with, so we can develop Java classes that represent both of these.
>
> **[0:34](https://www.linkedin.com/learning/hands-on-introduction-java/design-a-solution?u=76281980&t=34)** We'll also need to account for the actions or behaviors of our system, so we'll need methods to check the balance of an account, deposit, and withdraw.
>
> **[0:44](https://www.linkedin.com/learning/hands-on-introduction-java/design-a-solution?u=76281980&t=44)** These are behaviors a customer makes on an account so we'll need a link between these two objects.
>
> **[0:51](https://www.linkedin.com/learning/hands-on-introduction-java/design-a-solution?u=76281980&t=51)** If we look at our database, the Customers table has a fields called ACCOUNT_ID, and the Accounts table has a field called ID.
>
> **[1:00](https://www.linkedin.com/learning/hands-on-introduction-java/design-a-solution?u=76281980&t=60)** These two IDs tie the customer to their account, so we can certainly keep that in mind when implementing our application.
>
> **[1:08](https://www.linkedin.com/learning/hands-on-introduction-java/design-a-solution?u=76281980&t=68)** In fact, for security purposes, we should authenticate the customer before we allow any actions to be taken on an account.
>
> **[1:16](https://www.linkedin.com/learning/hands-on-introduction-java/design-a-solution?u=76281980&t=76)** The database hosts fields for username and password, so we can create an authenticator class that will verify the customer's credentials.
>
> **[1:27](https://www.linkedin.com/learning/hands-on-introduction-java/design-a-solution?u=76281980&t=87)** All of this implementation occurs on the backend, so we'll also need to provide an interface that allows the user to enter input and let us know what actions they'd like to make.
>
> **[1:40](https://www.linkedin.com/learning/hands-on-introduction-java/design-a-solution?u=76281980&t=100)** We'll keep it simple and build a menu class that provides a text-based user interface capable of input and output.
>
> **[1:50](https://www.linkedin.com/learning/hands-on-introduction-java/design-a-solution?u=76281980&t=110)** And finally, because we'll need to read and write from our database, it's best to consolidate the code that does this within one class, so we'll make a data store class as well.
>
> **[2:01](https://www.linkedin.com/learning/hands-on-introduction-java/design-a-solution?u=76281980&t=121)** Now, let's lay out our assumptions as this will help define the limitations of our system.
>
> **[2:07](https://www.linkedin.com/learning/hands-on-introduction-java/design-a-solution?u=76281980&t=127)** A customer only has one account, an account only has one customer, and all accounts are checking accounts.
>
> **[2:17](https://www.linkedin.com/learning/hands-on-introduction-java/design-a-solution?u=76281980&t=137)** The first assumption will eliminate the work of prompting the user to choose which of their accounts they want to make transactions on.
>
> **[2:25](https://www.linkedin.com/learning/hands-on-introduction-java/design-a-solution?u=76281980&t=145)** The second assumption eliminates the need to track which account holder made a transaction.
>
> **[2:31](https://www.linkedin.com/learning/hands-on-introduction-java/design-a-solution?u=76281980&t=151)** And the final assumption means we don't have to account for different behaviors that are allowed depending on the account type.
>
> **[2:40](https://www.linkedin.com/learning/hands-on-introduction-java/design-a-solution?u=76281980&t=160)** Awesome, we have a design.
>
> **[2:42](https://www.linkedin.com/learning/hands-on-introduction-java/design-a-solution?u=76281980&t=162)** Planning how we'll solve the challenge upfront can save us a lot of time, mistakes, and frustration once we begin implementing the solution.
>
> **[2:52](https://www.linkedin.com/learning/hands-on-introduction-java/design-a-solution?u=76281980&t=172)** Let's begin.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), interface (2), finally, (1), class, (1), type. (1)
> **CLI Commands:** make (4)
> **Env Vars:** account_id (1)
> **Best Practices:** it's best to (1)
> **Speakers:** - [instructor] (1)

#### Create customer
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-introduction-java/create-customer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-java/create-customer?u=76281980&t=0)** - We need to model the customer object of our system to define the structure of an object, we do so with a class.
>
> **[0:08](https://www.linkedin.com/learning/hands-on-introduction-java/create-customer?u=76281980&t=8)** Classes contain fields and methods.
>
> **[0:11](https://www.linkedin.com/learning/hands-on-introduction-java/create-customer?u=76281980&t=11)** The fields are variables that represent the characteristics of the object.
>
> **[0:16](https://www.linkedin.com/learning/hands-on-introduction-java/create-customer?u=76281980&t=16)** And the methods are functions that describe the behaviors the object is capable of.
>
> **[0:23](https://www.linkedin.com/learning/hands-on-introduction-java/create-customer?u=76281980&t=23)** We'll create our class within a package, which is a folder that holds our class files.
>
> **[0:29](https://www.linkedin.com/learning/hands-on-introduction-java/create-customer?u=76281980&t=29)** Under the source main Java directory, we see a package called bank.
>
> **[0:35](https://www.linkedin.com/learning/hands-on-introduction-java/create-customer?u=76281980&t=35)** Bank is all lowercase as it's a Java convention for package names to be lower case.
>
> **[0:41](https://www.linkedin.com/learning/hands-on-introduction-java/create-customer?u=76281980&t=41)** We'll create our Java class within this bank package.
>
> **[0:45](https://www.linkedin.com/learning/hands-on-introduction-java/create-customer?u=76281980&t=45)** Click the plus sign to the right of the bank package, and we'll be prompted to create a class name.
>
> **[0:53](https://www.linkedin.com/learning/hands-on-introduction-java/create-customer?u=76281980&t=53)** We'll name the class Customer with the capital C because in Java it's a convention for classes to begin with a capital letter.
>
> **[1:03](https://www.linkedin.com/learning/hands-on-introduction-java/create-customer?u=76281980&t=63)** Now, let's press enter.
>
> **[1:05](https://www.linkedin.com/learning/hands-on-introduction-java/create-customer?u=76281980&t=65)** Notice the generated file contains a declaration of the package and an empty definition of the class.
>
> **[1:15](https://www.linkedin.com/learning/hands-on-introduction-java/create-customer?u=76281980&t=75)** We can add more details within this set of curly braces as the braces denote the beginning and the end of the implementation for the class.
>
> **[1:26](https://www.linkedin.com/learning/hands-on-introduction-java/create-customer?u=76281980&t=86)** Fortunately, the characteristics of a customer are already captured in our database.
>
> **[1:31](https://www.linkedin.com/learning/hands-on-introduction-java/create-customer?u=76281980&t=91)** Let's have a look.
>
> **[1:35](https://www.linkedin.com/learning/hands-on-introduction-java/create-customer?u=76281980&t=95)** So we'll go ahead and look in the resources folder and click on the bank object and then say open anyway.
>
> **[1:43](https://www.linkedin.com/learning/hands-on-introduction-java/create-customer?u=76281980&t=103)** And we're going to choose SQLite Viewer.
>
> **[1:48](https://www.linkedin.com/learning/hands-on-introduction-java/create-customer?u=76281980&t=108)** Here we have the customer's table and we see ID, name, username, password, and account ID.
>
> **[1:55](https://www.linkedin.com/learning/hands-on-introduction-java/create-customer?u=76281980&t=115)** Our fields will be the same as the columns of the customer's table.
>
> **[2:01](https://www.linkedin.com/learning/hands-on-introduction-java/create-customer?u=76281980&t=121)** So let's go back to our class and add those fields.
>
> **[2:05](https://www.linkedin.com/learning/hands-on-introduction-java/create-customer?u=76281980&t=125)** The the first field was the ID, so we'll say Private int ID, semicolon.
>
> **[2:13](https://www.linkedin.com/learning/hands-on-introduction-java/create-customer?u=76281980&t=133)** Private is an access modifier that indicates that this field cannot be directly accessed outside of this class.
>
> **[2:21](https://www.linkedin.com/learning/hands-on-introduction-java/create-customer?u=76281980&t=141)** This is called encapsulation and is a best practice in object oriented programming languages such as Java.
>
> **[2:29](https://www.linkedin.com/learning/hands-on-introduction-java/create-customer?u=76281980&t=149)** Int is the data type of the variable meaning it's an integer number, and ID, is its name.
>
> **[2:36](https://www.linkedin.com/learning/hands-on-introduction-java/create-customer?u=76281980&t=156)** Let's add the other fields as well.
>
> **[2:39](https://www.linkedin.com/learning/hands-on-introduction-java/create-customer?u=76281980&t=159)** So, we'll say private string name private string username, private string password.
>
> **[2:53](https://www.linkedin.com/learning/hands-on-introduction-java/create-customer?u=76281980&t=173)** And then finally, private int account ID.
>
> **[2:58](https://www.linkedin.com/learning/hands-on-introduction-java/create-customer?u=76281980&t=178)** Now, let's add methods to get and set the values of these fields since they are encapsulated.
>
> **[3:06](https://www.linkedin.com/learning/hands-on-introduction-java/create-customer?u=76281980&t=186)** To quickly add getter and setter methods, right click in your class and choose the Java code generators.
>
> **[3:15](https://www.linkedin.com/learning/hands-on-introduction-java/create-customer?u=76281980&t=195)** Next, choose generate getters and setters.
>
> **[3:21](https://www.linkedin.com/learning/hands-on-introduction-java/create-customer?u=76281980&t=201)** And voila, all of the methods for the fields have been generated for us.
>
> **[3:27](https://www.linkedin.com/learning/hands-on-introduction-java/create-customer?u=76281980&t=207)** Great, now we have the fields and the methods for the customer.
>
> **[3:32](https://www.linkedin.com/learning/hands-on-introduction-java/create-customer?u=76281980&t=212)** However, if we wanted to create a customer object using this class, we need to call quite a few methods in order to set all of the field values.
>
> **[3:42](https://www.linkedin.com/learning/hands-on-introduction-java/create-customer?u=76281980&t=222)** As a shortcut to set up our data, we can add a constructor to the class.
>
> **[3:47](https://www.linkedin.com/learning/hands-on-introduction-java/create-customer?u=76281980&t=227)** Constructors are used to initialize an object or set up it's state.
>
> **[3:54](https://www.linkedin.com/learning/hands-on-introduction-java/create-customer?u=76281980&t=234)** We'll make the constructor public so that it can be accessed outside of this class.
>
> **[4:00](https://www.linkedin.com/learning/hands-on-introduction-java/create-customer?u=76281980&t=240)** The access modifier is followed by the name of the constructor.
>
> **[4:04](https://www.linkedin.com/learning/hands-on-introduction-java/create-customer?u=76281980&t=244)** Which must be the exact same name as the class.
>
> **[4:08](https://www.linkedin.com/learning/hands-on-introduction-java/create-customer?u=76281980&t=248)** So, in our case, it's customer.
>
> **[4:13](https://www.linkedin.com/learning/hands-on-introduction-java/create-customer?u=76281980&t=253)** We follow this with a set of parentheses and an optional list of parameters inside of that parentheses.
>
> **[4:20](https://www.linkedin.com/learning/hands-on-introduction-java/create-customer?u=76281980&t=260)** Since we want to give our fields default values, let's ask for those here.
>
> **[4:26](https://www.linkedin.com/learning/hands-on-introduction-java/create-customer?u=76281980&t=266)** So we can see int ID, string name, string username, string password, and int account ID.
>
> **[4:39](https://www.linkedin.com/learning/hands-on-introduction-java/create-customer?u=76281980&t=279)** The inside of the body of the constructor, which is denoted by its curly braces, is where we'll pass these values to their respective setter methods.
>
> **[4:50](https://www.linkedin.com/learning/hands-on-introduction-java/create-customer?u=76281980&t=290)** So, we'll just call each one, we'll say, Set ID and pass an ID.
>
> **[4:55](https://www.linkedin.com/learning/hands-on-introduction-java/create-customer?u=76281980&t=295)** Set name and pass in the name.
>
> **[4:59](https://www.linkedin.com/learning/hands-on-introduction-java/create-customer?u=76281980&t=299)** We'll set the username.
>
> **[5:07](https://www.linkedin.com/learning/hands-on-introduction-java/create-customer?u=76281980&t=307)** And the password.
>
> **[5:14](https://www.linkedin.com/learning/hands-on-introduction-java/create-customer?u=76281980&t=314)** And the account ID.
>
> **[5:22](https://www.linkedin.com/learning/hands-on-introduction-java/create-customer?u=76281980&t=322)** Awesome job.
>
> **[5:23](https://www.linkedin.com/learning/hands-on-introduction-java/create-customer?u=76281980&t=323)** We've created our first class.
>
> **[5:25](https://www.linkedin.com/learning/hands-on-introduction-java/create-customer?u=76281980&t=325)** Don't forget to save it by going to sync your changes to your repo.

> [!info]- Semantic Content
>
> **Code Keywords:** class. (8), let (6), private (6), pass (3), case. (1)
> **Definitions:** is a  (2), is an  (1), is called (1)
> **Best Practices:** best practice (1), don't forget (1)
> **Prerequisites:** set up (2)
> **CLI Commands:** make (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** click on (1)
> **Analogies:** such as (1)

#### Create account
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-introduction-java/create-account?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-java/create-account?u=76281980&t=0)** - In our database, we have an accounts table that holds multiple records of accounts.
>
> **[0:06](https://www.linkedin.com/learning/hands-on-introduction-java/create-account?u=76281980&t=6)** The columns are ID, type, and balance.
>
> **[0:10](https://www.linkedin.com/learning/hands-on-introduction-java/create-account?u=76281980&t=10)** In this video, we'll create a Java class to model this object.
>
> **[0:15](https://www.linkedin.com/learning/hands-on-introduction-java/create-account?u=76281980&t=15)** The steps to complete this task are similar to the ones from the last video, where we created a customer class.
>
> **[0:22](https://www.linkedin.com/learning/hands-on-introduction-java/create-account?u=76281980&t=22)** So if you'd like, you can pause the video here, and work on the solution independently.
>
> **[0:29](https://www.linkedin.com/learning/hands-on-introduction-java/create-account?u=76281980&t=29)** (jazz music) Okay.
>
> **[0:36](https://www.linkedin.com/learning/hands-on-introduction-java/create-account?u=76281980&t=36)** First, we need to create an account class.
>
> **[0:39](https://www.linkedin.com/learning/hands-on-introduction-java/create-account?u=76281980&t=39)** So we'll go to our bank package, and we'll click the plus sign, and create a new class called "Account."
>
> **[0:51](https://www.linkedin.com/learning/hands-on-introduction-java/create-account?u=76281980&t=51)** We need to declare the three fields, so we'll say, "private int id, private string type, and private double balance."
>
> **[1:05](https://www.linkedin.com/learning/hands-on-introduction-java/create-account?u=76281980&t=65)** And let's generate the getter and setter methods for these fields as well.
>
> **[1:09](https://www.linkedin.com/learning/hands-on-introduction-java/create-account?u=76281980&t=69)** So we'll right click, we'll go to Java Code Generators, and we'll choose generate getters and setters.
>
> **[1:19](https://www.linkedin.com/learning/hands-on-introduction-java/create-account?u=76281980&t=79)** Finally, we want to create a constructor, so that when someone needs to instantiate a new account object, they can easily do so by passing the values of each of the fields.
>
> **[1:29](https://www.linkedin.com/learning/hands-on-introduction-java/create-account?u=76281980&t=89)** So we'll go ahead and say, "public Account" and we'll pass in each of the fields.
>
> **[1:37](https://www.linkedin.com/learning/hands-on-introduction-java/create-account?u=76281980&t=97)** So we have "id," we have "type," and we have "balance."
>
> **[1:42](https://www.linkedin.com/learning/hands-on-introduction-java/create-account?u=76281980&t=102)** And then within the curly braces we'll call the setter methods for each of these fields that was passed in to "setType" and then finally "setBalance."
>
> **[1:55](https://www.linkedin.com/learning/hands-on-introduction-java/create-account?u=76281980&t=115)** Awesome. We've now successfully modeled an account.

> [!info]- Semantic Content
>
> **Code Keywords:** type, (3), private (3), class. (2), let (1), finally, (1)
> **Code Identifiers:** settype (1), setbalance (1)
> **UI Navigation:** go to (2)
> **Speakers:** - in (1)
> **Non-Speech:** (jazz music) (1)


### 2. External Data Sources

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Connect to data source
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-introduction-java/connect-to-data-source?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-java/connect-to-data-source?u=76281980&t=0)** - We have a SQLite database that's holding all of the data for our application.
>
> **[0:05](https://www.linkedin.com/learning/hands-on-introduction-java/connect-to-data-source?u=76281980&t=5)** In order to read and write to this database, we need to first connect to it from our Java code.
>
> **[0:10](https://www.linkedin.com/learning/hands-on-introduction-java/connect-to-data-source?u=76281980&t=10)** Fortunately, we can use the SQLite JDBC plugin to accomplish this.
>
> **[0:17](https://www.linkedin.com/learning/hands-on-introduction-java/connect-to-data-source?u=76281980&t=17)** Let's create a new class under our bank package called Data Source.
>
> **[0:26](https://www.linkedin.com/learning/hands-on-introduction-java/connect-to-data-source?u=76281980&t=26)** This class will handle connecting to the database as well as reading and writing from it.
>
> **[0:31](https://www.linkedin.com/learning/hands-on-introduction-java/connect-to-data-source?u=76281980&t=31)** So let's make a static method called Connect, which will return the database connection.
>
> **[0:38](https://www.linkedin.com/learning/hands-on-introduction-java/connect-to-data-source?u=76281980&t=38)** We can say public static.
>
> **[0:41](https://www.linkedin.com/learning/hands-on-introduction-java/connect-to-data-source?u=76281980&t=41)** It'll return a connection object and we'll call this method "connect."
>
> **[0:48](https://www.linkedin.com/learning/hands-on-introduction-java/connect-to-data-source?u=76281980&t=48)** We'll need to import the connection class from the Java dot SQL package.
>
> **[0:52](https://www.linkedin.com/learning/hands-on-introduction-java/connect-to-data-source?u=76281980&t=52)** So let's just click on this connection, you'll see a little light bulb here, click this and they'll show you some ways that you can fix this error.
>
> **[1:02](https://www.linkedin.com/learning/hands-on-introduction-java/connect-to-data-source?u=76281980&t=62)** The one we want is to import connection from Java dot SQL.
>
> **[1:07](https://www.linkedin.com/learning/hands-on-introduction-java/connect-to-data-source?u=76281980&t=67)** Inside of the connect method, let's declare the path to our database file.
>
> **[1:12](https://www.linkedin.com/learning/hands-on-introduction-java/connect-to-data-source?u=76281980&t=72)** If we look over here, as you can see, we have a bank dot db under the resources folder.
>
> **[1:19](https://www.linkedin.com/learning/hands-on-introduction-java/connect-to-data-source?u=76281980&t=79)** This is our database file.
>
> **[1:22](https://www.linkedin.com/learning/hands-on-introduction-java/connect-to-data-source?u=76281980&t=82)** So within our method, let's say string DB file and the path must be prefixed with jdbc colon, SQLite, colon, and then the path to the file.
>
> **[1:38](https://www.linkedin.com/learning/hands-on-introduction-java/connect-to-data-source?u=76281980&t=98)** So we'll say resources, slash, bank dot db.
>
> **[1:45](https://www.linkedin.com/learning/hands-on-introduction-java/connect-to-data-source?u=76281980&t=105)** Next, let's declare the connection object.
>
> **[1:49](https://www.linkedin.com/learning/hands-on-introduction-java/connect-to-data-source?u=76281980&t=109)** So we'll see connection and we'll also call the object name connection.
>
> **[1:55](https://www.linkedin.com/learning/hands-on-introduction-java/connect-to-data-source?u=76281980&t=115)** And we'll set this equal to driver manager, dot get connection and we'll pass in the DB file.
>
> **[2:08](https://www.linkedin.com/learning/hands-on-introduction-java/connect-to-data-source?u=76281980&t=128)** Notice that the driver manager was automatically imported for me.
>
> **[2:13](https://www.linkedin.com/learning/hands-on-introduction-java/connect-to-data-source?u=76281980&t=133)** If this didn't happen for you, be sure to add this import statement.
>
> **[2:17](https://www.linkedin.com/learning/hands-on-introduction-java/connect-to-data-source?u=76281980&t=137)** Now notice, if we hover over the GET connection method, we have a compilation error saying that we have an unhandled exception.
>
> **[2:25](https://www.linkedin.com/learning/hands-on-introduction-java/connect-to-data-source?u=76281980&t=145)** That's because the GET connection method throws an exception in the case of an error.
>
> **[2:30](https://www.linkedin.com/learning/hands-on-introduction-java/connect-to-data-source?u=76281980&t=150)** If a method calls code that throws a runtime exception, that method is obligated to handle the exception or read through it.
>
> **[2:39](https://www.linkedin.com/learning/hands-on-introduction-java/connect-to-data-source?u=76281980&t=159)** We can handle the exception by placing the call to get connection within what's called a try block.
>
> **[2:46](https://www.linkedin.com/learning/hands-on-introduction-java/connect-to-data-source?u=76281980&t=166)** So let's go ahead and set this equal to null initially and then we'll create a try block.
>
> **[2:54](https://www.linkedin.com/learning/hands-on-introduction-java/connect-to-data-source?u=76281980&t=174)** We can do so by writing the word try, followed by a set of curly braces.
>
> **[3:01](https://www.linkedin.com/learning/hands-on-introduction-java/connect-to-data-source?u=76281980&t=181)** Inside of this try block, we're going to set the connection equal to this driver manager dot get connection.
>
> **[3:10](https://www.linkedin.com/learning/hands-on-introduction-java/connect-to-data-source?u=76281980&t=190)** So, I'm just going to cut that and paste it there.
>
> **[3:14](https://www.linkedin.com/learning/hands-on-introduction-java/connect-to-data-source?u=76281980&t=194)** In the event that this call happens to throw an exception, we can catch it with what's called a catch block.
>
> **[3:22](https://www.linkedin.com/learning/hands-on-introduction-java/connect-to-data-source?u=76281980&t=202)** The catch block appears right after the try block.
>
> **[3:25](https://www.linkedin.com/learning/hands-on-introduction-java/connect-to-data-source?u=76281980&t=205)** So we'll say catch and then inside of parentheses, we can specify the exception that we want to catch.
>
> **[3:32](https://www.linkedin.com/learning/hands-on-introduction-java/connect-to-data-source?u=76281980&t=212)** In our case, it's a SQL exception and we'll name this exception E.
>
> **[3:38](https://www.linkedin.com/learning/hands-on-introduction-java/connect-to-data-source?u=76281980&t=218)** Within the catch block, we can do anything we like to make the error a bit more graceful.
>
> **[3:43](https://www.linkedin.com/learning/hands-on-introduction-java/connect-to-data-source?u=76281980&t=223)** In our case, let's just print the exception stack trace which will give us a log of the code's execution path thus far.
>
> **[3:51](https://www.linkedin.com/learning/hands-on-introduction-java/connect-to-data-source?u=76281980&t=231)** So we can say E dot print stack trace.
>
> **[3:55](https://www.linkedin.com/learning/hands-on-introduction-java/connect-to-data-source?u=76281980&t=235)** If no exception occurs, let's print a message saying that we're connected and then return that connection.
>
> **[4:02](https://www.linkedin.com/learning/hands-on-introduction-java/connect-to-data-source?u=76281980&t=242)** So inside of the try block, after we've connected, let's just go ahead and do system dot out, dot print LN, which will print an output statement and we'll give us a little message, we're connected.
>
> **[4:16](https://www.linkedin.com/learning/hands-on-introduction-java/connect-to-data-source?u=76281980&t=256)** Great.
>
> **[4:17](https://www.linkedin.com/learning/hands-on-introduction-java/connect-to-data-source?u=76281980&t=257)** And then outside of the try catch block, after all is said and done, we can return our connection object.
>
> **[4:25](https://www.linkedin.com/learning/hands-on-introduction-java/connect-to-data-source?u=76281980&t=265)** Awesome. Now let's test our connection by calling this method from the main method.
>
> **[4:31](https://www.linkedin.com/learning/hands-on-introduction-java/connect-to-data-source?u=76281980&t=271)** The main method is the starting point of Java applications.
>
> **[4:35](https://www.linkedin.com/learning/hands-on-introduction-java/connect-to-data-source?u=76281980&t=275)** It's the first method that is run when we execute our code.
>
> **[4:40](https://www.linkedin.com/learning/hands-on-introduction-java/connect-to-data-source?u=76281980&t=280)** So the main method signature is public, static, void, main and inside of a set of parentheses, we can add an array of string, which we'll call args.
>
> **[4:56](https://www.linkedin.com/learning/hands-on-introduction-java/connect-to-data-source?u=76281980&t=296)** Within here, let's make a call to connect because methods only execute when they are called.
>
> **[5:02](https://www.linkedin.com/learning/hands-on-introduction-java/connect-to-data-source?u=76281980&t=302)** So we'll see.
>
> **[5:03](https://www.linkedin.com/learning/hands-on-introduction-java/connect-to-data-source?u=76281980&t=303)** Connect a set of parentheses and then a semicolon.
>
> **[5:09](https://www.linkedin.com/learning/hands-on-introduction-java/connect-to-data-source?u=76281980&t=309)** Notice we now have labels run in debug.
>
> **[5:12](https://www.linkedin.com/learning/hands-on-introduction-java/connect-to-data-source?u=76281980&t=312)** So we can click run above the name and this will execute this class.
>
> **[5:20](https://www.linkedin.com/learning/hands-on-introduction-java/connect-to-data-source?u=76281980&t=320)** And see our message is printed out to the console which means we're successfully connected to the database.

> [!info]- Semantic Content
>
> **Code Keywords:** let (12), static (3), public (2), case, (2), this. (1)
> **Env Vars:** sql (3), jdbc (1)
> **CLI Commands:** make (3)
> **API Endpoints:** get  (2)
> **UI Navigation:** click on (1)
> **Speakers:** - we (1)

#### Construct customer from data source
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-introduction-java/construct-customer-from-data-source?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-java/construct-customer-from-data-source?u=76281980&t=0)** - [Instructor] We have a database table that represents a customer and we also have a customer class that models this. What we need now is the construction of an object that represents a specific customer. Within the data source class, let's create a new method called get customer.
>
> **[0:20](https://www.linkedin.com/learning/hands-on-introduction-java/construct-customer-from-data-source?u=76281980&t=20)** So we'll say public static Customer get customer, and this method will accept the username of the customer.
>
> **[0:32](https://www.linkedin.com/learning/hands-on-introduction-java/construct-customer-from-data-source?u=76281980&t=32)** We'll need to craft a SQL query that will get the customer data from the database. We can do that using a string and Java. So we'll call this SQL, and then within quotes, we put the query. So let's say, select star from customers where username equals, and here we want to pass in the username variable that was passed into us. Technically, we could append it to the string.
>
> **[1:05](https://www.linkedin.com/learning/hands-on-introduction-java/construct-customer-from-data-source?u=76281980&t=65)** However, you should never send raw user input as part of a database query because it could be malicious input used as a SQL injection meant to steal data or manipulate your data tables instead.
>
> **[1:21](https://www.linkedin.com/learning/hands-on-introduction-java/construct-customer-from-data-source?u=76281980&t=81)** Let's use a question mark here which serves as a placeholder.
>
> **[1:27](https://www.linkedin.com/learning/hands-on-introduction-java/construct-customer-from-data-source?u=76281980&t=87)** When we provide the value for the placeholder the technique used to query the database will be safer.
>
> **[1:34](https://www.linkedin.com/learning/hands-on-introduction-java/construct-customer-from-data-source?u=76281980&t=94)** Okay, now that we have our query let's connect to the database so that we can execute it.
>
> **[1:39](https://www.linkedin.com/learning/hands-on-introduction-java/construct-customer-from-data-source?u=76281980&t=99)** If we look at our previously defined method connect notice that the connection is never closed.
>
> **[1:46](https://www.linkedin.com/learning/hands-on-introduction-java/construct-customer-from-data-source?u=76281980&t=106)** It cannot be closed within the connect method itself because then we wouldn't be able to query the database after it's closed.
>
> **[1:53](https://www.linkedin.com/learning/hands-on-introduction-java/construct-customer-from-data-source?u=76281980&t=113)** So let's make the call to connect from our Get customer method, and we'll do this within a structure that's called Try with the resources.
>
> **[2:04](https://www.linkedin.com/learning/hands-on-introduction-java/construct-customer-from-data-source?u=76281980&t=124)** Try with resources allows us to specify a set of parentheses and inside of the parentheses we can declare a closable resource.
>
> **[2:14](https://www.linkedin.com/learning/hands-on-introduction-java/construct-customer-from-data-source?u=76281980&t=134)** Java will automatically close that resource for us after the try block has been completed.
>
> **[2:21](https://www.linkedin.com/learning/hands-on-introduction-java/construct-customer-from-data-source?u=76281980&t=141)** So we'll create our connection here and we can do so by calling the Connect method.
>
> **[2:29](https://www.linkedin.com/learning/hands-on-introduction-java/construct-customer-from-data-source?u=76281980&t=149)** We'll add our set of curly braces, and as you can see closing this connection has the possibility of throwing a SQL exception.
>
> **[2:37](https://www.linkedin.com/learning/hands-on-introduction-java/construct-customer-from-data-source?u=76281980&t=157)** So let's add a catch block for that.
>
> **[2:40](https://www.linkedin.com/learning/hands-on-introduction-java/construct-customer-from-data-source?u=76281980&t=160)** We'll say Catch the SQL exception we'll call that E and then print the stack trace.
>
> **[2:48](https://www.linkedin.com/learning/hands-on-introduction-java/construct-customer-from-data-source?u=76281980&t=168)** Next, we want to create a proper object for handling our SQL statement which is now only just a string because we have placeholders in our query.
>
> **[2:59](https://www.linkedin.com/learning/hands-on-introduction-java/construct-customer-from-data-source?u=76281980&t=179)** The object for this is prepared statement which is part of the Java.SQL package.
>
> **[3:06](https://www.linkedin.com/learning/hands-on-introduction-java/construct-customer-from-data-source?u=76281980&t=186)** Prepared statements are also auto closable so we can declare it within our try with resources to specify additional resources you separate them with a semicolon.
>
> **[3:20](https://www.linkedin.com/learning/hands-on-introduction-java/construct-customer-from-data-source?u=76281980&t=200)** So let's now at our prepared statement which we'll call statements, and we can set this equal to our connection.prepare statement and pass in the SQL query.
>
> **[3:37](https://www.linkedin.com/learning/hands-on-introduction-java/construct-customer-from-data-source?u=76281980&t=217)** And let's go ahead and import the prepared statement from Java.SQL package.
>
> **[3:44](https://www.linkedin.com/learning/hands-on-introduction-java/construct-customer-from-data-source?u=76281980&t=224)** Now we need to set the values for the placeholders within our query. Prepared statement has a setter method that enables us to do so because usernames type is a string, we can call set string.
>
> **[4:02](https://www.linkedin.com/learning/hands-on-introduction-java/construct-customer-from-data-source?u=76281980&t=242)** So we'll say statement.set string and then we'll send two arguments.
>
> **[4:10](https://www.linkedin.com/learning/hands-on-introduction-java/construct-customer-from-data-source?u=76281980&t=250)** The position of the placeholder within our SQL variable we only have one placeholder, so it's the first position and then we pass in the value for that placeholder.
>
> **[4:21](https://www.linkedin.com/learning/hands-on-introduction-java/construct-customer-from-data-source?u=76281980&t=261)** So in our case, that's username.
>
> **[4:24](https://www.linkedin.com/learning/hands-on-introduction-java/construct-customer-from-data-source?u=76281980&t=264)** Then to execute the query we'll use statement.execute query which will return a result set.
>
> **[4:36](https://www.linkedin.com/learning/hands-on-introduction-java/construct-customer-from-data-source?u=76281980&t=276)** Result set is also auto closable so let's add it to another try with resources.
>
> **[4:44](https://www.linkedin.com/learning/hands-on-introduction-java/construct-customer-from-data-source?u=76281980&t=284)** So we'll say try and then we'll call this variable results set and then set that equal to this query call.
>
> **[4:59](https://www.linkedin.com/learning/hands-on-introduction-java/construct-customer-from-data-source?u=76281980&t=299)** And let's import results set from Java.SQL Now it's time to parse the results and use that data to instantiate a customer object within our code.
>
> **[5:12](https://www.linkedin.com/learning/hands-on-introduction-java/construct-customer-from-data-source?u=76281980&t=312)** Let's declare a customer object outside of the tribe block so that we still have access to it when we need to return it.
>
> **[5:20](https://www.linkedin.com/learning/hands-on-introduction-java/construct-customer-from-data-source?u=76281980&t=320)** So after our SQL statement, let's go ahead and declare customer and set it equal to no for now.
>
> **[5:30](https://www.linkedin.com/learning/hands-on-introduction-java/construct-customer-from-data-source?u=76281980&t=330)** Then within our second try block, we'll instantiate it.
>
> **[5:35](https://www.linkedin.com/learning/hands-on-introduction-java/construct-customer-from-data-source?u=76281980&t=335)** So we'll say customer equals new customer and VS code has automatically populated the names of the parameters that are expected.
>
> **[5:46](https://www.linkedin.com/learning/hands-on-introduction-java/construct-customer-from-data-source?u=76281980&t=346)** We'll replace these with the values from our database.
>
> **[5:50](https://www.linkedin.com/learning/hands-on-introduction-java/construct-customer-from-data-source?u=76281980&t=350)** The first parameter is ID and it's an it.
>
> **[5:53](https://www.linkedin.com/learning/hands-on-introduction-java/construct-customer-from-data-source?u=76281980&t=353)** So let's go ahead and use our results set and we'll call get it and then we can pass in the label of the column in our case that is ID.
>
> **[6:10](https://www.linkedin.com/learning/hands-on-introduction-java/construct-customer-from-data-source?u=76281980&t=370)** Now let's do the name. This one is a string.
>
> **[6:14](https://www.linkedin.com/learning/hands-on-introduction-java/construct-customer-from-data-source?u=76281980&t=374)** So we'll say resultsset.getstring and we'll pass in the column name, which is name.
>
> **[6:24](https://www.linkedin.com/learning/hands-on-introduction-java/construct-customer-from-data-source?u=76281980&t=384)** Let's do this quickly for the rest of them as well.
>
> **[6:28](https://www.linkedin.com/learning/hands-on-introduction-java/construct-customer-from-data-source?u=76281980&t=388)** So results set username is a string, so we'll see.
>
> **[6:33](https://www.linkedin.com/learning/hands-on-introduction-java/construct-customer-from-data-source?u=76281980&t=393)** Get a string and then the password get string passing the column name, which is password.
>
> **[6:45](https://www.linkedin.com/learning/hands-on-introduction-java/construct-customer-from-data-source?u=76281980&t=405)** And then finally the account ID.
>
> **[6:48](https://www.linkedin.com/learning/hands-on-introduction-java/construct-customer-from-data-source?u=76281980&t=408)** So let's just double check the column name for account ID.
>
> **[6:55](https://www.linkedin.com/learning/hands-on-introduction-java/construct-customer-from-data-source?u=76281980&t=415)** Yes, this one is actually account underscore ID.
>
> **[6:59](https://www.linkedin.com/learning/hands-on-introduction-java/construct-customer-from-data-source?u=76281980&t=419)** So let's be careful there because the column names must match to get.
>
> **[7:04](https://www.linkedin.com/learning/hands-on-introduction-java/construct-customer-from-data-source?u=76281980&t=424)** And this is an it, we'll see it account underscore ID
>
> **[7:14](https://www.linkedin.com/learning/hands-on-introduction-java/construct-customer-from-data-source?u=76281980&t=434)** and then we'll close this with a semicolon.
>
> **[7:18](https://www.linkedin.com/learning/hands-on-introduction-java/construct-customer-from-data-source?u=76281980&t=438)** Great. Now that we have an instance of a specific customer we can return it on the last line of this method.
>
> **[7:26](https://www.linkedin.com/learning/hands-on-introduction-java/construct-customer-from-data-source?u=76281980&t=446)** So after the catch block, let's say Return Customer.
>
> **[7:33](https://www.linkedin.com/learning/hands-on-introduction-java/construct-customer-from-data-source?u=76281980&t=453)** Now before we call this done, let's test it out within our main method by printing the customer's need.
>
> **[7:39](https://www.linkedin.com/learning/hands-on-introduction-java/construct-customer-from-data-source?u=76281980&t=459)** So down in the main, I'm going to remove this call to connect and instead we're going to call get Customer and we'll need to pass it in a username for the specific customer.
>
> **[7:50](https://www.linkedin.com/learning/hands-on-introduction-java/construct-customer-from-data-source?u=76281980&t=470)** So looking in our database, again, let's choose a customer.
>
> **[7:54](https://www.linkedin.com/learning/hands-on-introduction-java/construct-customer-from-data-source?u=76281980&t=474)** How about Torren here?
>
> **[7:57](https://www.linkedin.com/learning/hands-on-introduction-java/construct-customer-from-data-source?u=76281980&t=477)** So Torren's username is tWest80@[friendfee.com](https://friendfee.com).
>
> **[8:04](https://www.linkedin.com/learning/hands-on-introduction-java/construct-customer-from-data-source?u=76281980&t=484)** Now we have to write this exactly like this in order for it to find it.
>
> **[8:08](https://www.linkedin.com/learning/hands-on-introduction-java/construct-customer-from-data-source?u=76281980&t=488)** So T West eight zero C, T West eight, Oh, not zero eight.
>
> **[8:16](https://www.linkedin.com/learning/hands-on-introduction-java/construct-customer-from-data-source?u=76281980&t=496)** Oh. And then@[friendfeed.com](https://friendfeed.com).
>
> **[8:21](https://www.linkedin.com/learning/hands-on-introduction-java/construct-customer-from-data-source?u=76281980&t=501)** Okay. At friend [feed.com](https://feed.com).
>
> **[8:26](https://www.linkedin.com/learning/hands-on-introduction-java/construct-customer-from-data-source?u=76281980&t=506)** Awesome. And we'll set this equal to a customer object.
>
> **[8:31](https://www.linkedin.com/learning/hands-on-introduction-java/construct-customer-from-data-source?u=76281980&t=511)** Then from here we can print out the customer's name and that'll prove to us that it was actually able to connect to the database read data, and instantiate the customer object.
>
> **[8:42](https://www.linkedin.com/learning/hands-on-introduction-java/construct-customer-from-data-source?u=76281980&t=522)** So we'll say system.out.printlm and then we'll see Customer.getname.
>
> **[8:52](https://www.linkedin.com/learning/hands-on-introduction-java/construct-customer-from-data-source?u=76281980&t=532)** Okay, let's run it.
>
> **[8:59](https://www.linkedin.com/learning/hands-on-introduction-java/construct-customer-from-data-source?u=76281980&t=539)** Yes. If we look at our terminal we see that the customer's name Torren West was printed out.
>
> **[9:06](https://www.linkedin.com/learning/hands-on-introduction-java/construct-customer-from-data-source?u=76281980&t=546)** Awesome job retrieving data from a database and constructing a new Java object using that data.

> [!info]- Semantic Content
>
> **Code Keywords:** let (21), pass (6), this. (1), class, (1), public (1)
> **Env Vars:** sql (12)
> **Definitions:** is a  (3), is an  (1), we call this (1)
> **File Paths:** java.sql (3)
> **URLs:** [friendfee.com](https://friendfee.com) (1), [friendfeed.com](https://friendfeed.com) (1), [feed.com](https://feed.com) (1)
> **CLI Commands:** make (1), find (1)
> **Code Identifiers:** twest80 (1)
> **Tools:** terminal (1)

#### Construct account from data source
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-introduction-java/construct-account-from-data-source?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-java/construct-account-from-data-source?u=76281980&t=0)** - [Instructor] In this video, we'll construct an account object, that represents a specific account from our database.
>
> **[0:07](https://www.linkedin.com/learning/hands-on-introduction-java/construct-account-from-data-source?u=76281980&t=7)** The steps to complete this task are similar to the ones from the last video, where we constructed a customer object.
>
> **[0:15](https://www.linkedin.com/learning/hands-on-introduction-java/construct-account-from-data-source?u=76281980&t=15)** If you like, you can pause the video and work on the solution independently.
>
> **[0:20](https://www.linkedin.com/learning/hands-on-introduction-java/construct-account-from-data-source?u=76281980&t=20)** (soft music) Within the data source class, let's create a new method called get account.
>
> **[0:32](https://www.linkedin.com/learning/hands-on-introduction-java/construct-account-from-data-source?u=76281980&t=32)** So we'll say public static account get account
>
> **[0:40](https://www.linkedin.com/learning/hands-on-introduction-java/construct-account-from-data-source?u=76281980&t=40)** and we'll ask them to provide us with the account id.
>
> **[0:45](https://www.linkedin.com/learning/hands-on-introduction-java/construct-account-from-data-source?u=76281980&t=45)** Our SQL query should target the accounts table by account id.
>
> **[0:50](https://www.linkedin.com/learning/hands-on-introduction-java/construct-account-from-data-source?u=76281980&t=50)** So we'll say string SQL equals and we'll go select everything from accounts where the id equals question mark.
>
> **[1:03](https://www.linkedin.com/learning/hands-on-introduction-java/construct-account-from-data-source?u=76281980&t=63)** Let's declare an account object that will later initialize once we have the results from the database.
>
> **[1:10](https://www.linkedin.com/learning/hands-on-introduction-java/construct-account-from-data-source?u=76281980&t=70)** So we'll call this account and for now we'll set this equal to null.
>
> **[1:16](https://www.linkedin.com/learning/hands-on-introduction-java/construct-account-from-data-source?u=76281980&t=76)** Now, let's create a try with resources structure to connect to the database and create our prepared statement.
>
> **[1:23](https://www.linkedin.com/learning/hands-on-introduction-java/construct-account-from-data-source?u=76281980&t=83)** So we'll say try and inside of here, we will define the connection by calling the connect method.
>
> **[1:36](https://www.linkedin.com/learning/hands-on-introduction-java/construct-account-from-data-source?u=76281980&t=96)** And then let's also define our prepared statement.
>
> **[1:45](https://www.linkedin.com/learning/hands-on-introduction-java/construct-account-from-data-source?u=76281980&t=105)** And we can set this equal to connection dot prepare statement.
>
> **[1:53](https://www.linkedin.com/learning/hands-on-introduction-java/construct-account-from-data-source?u=76281980&t=113)** Within the try block, we can set the value of the placeholder to the account id that was passed in.
>
> **[2:00](https://www.linkedin.com/learning/hands-on-introduction-java/construct-account-from-data-source?u=76281980&t=120)** So we'll add curly braces and inside of here we can say statement dot set int.
>
> **[2:10](https://www.linkedin.com/learning/hands-on-introduction-java/construct-account-from-data-source?u=76281980&t=130)** And it's the first placeholder and then the value is account id.
>
> **[2:17](https://www.linkedin.com/learning/hands-on-introduction-java/construct-account-from-data-source?u=76281980&t=137)** Now it's time to execute the query.
>
> **[2:19](https://www.linkedin.com/learning/hands-on-introduction-java/construct-account-from-data-source?u=76281980&t=139)** We can place this statement within another try with resources block.
>
> **[2:24](https://www.linkedin.com/learning/hands-on-introduction-java/construct-account-from-data-source?u=76281980&t=144)** So let's say try, and we'll define our results sets, and we'll set this equal to statement dot execute query.
>
> **[2:39](https://www.linkedin.com/learning/hands-on-introduction-java/construct-account-from-data-source?u=76281980&t=159)** Okay, and let's be sure to add our catch for SQL exception.
>
> **[2:45](https://www.linkedin.com/learning/hands-on-introduction-java/construct-account-from-data-source?u=76281980&t=165)** And we'll print out the stack trace.
>
> **[2:49](https://www.linkedin.com/learning/hands-on-introduction-java/construct-account-from-data-source?u=76281980&t=169)** Awesome, now that we have our results from the database, we can instantiate the account object.
>
> **[2:56](https://www.linkedin.com/learning/hands-on-introduction-java/construct-account-from-data-source?u=76281980&t=176)** So let's say account equals new account.
>
> **[3:01](https://www.linkedin.com/learning/hands-on-introduction-java/construct-account-from-data-source?u=76281980&t=181)** And inside of here we will gather all of the details from the database query and we will pass them into the account.
>
> **[3:10](https://www.linkedin.com/learning/hands-on-introduction-java/construct-account-from-data-source?u=76281980&t=190)** So the first argument is the id we'll say results set dot get int and it's the id column.
>
> **[3:22](https://www.linkedin.com/learning/hands-on-introduction-java/construct-account-from-data-source?u=76281980&t=202)** We'll say results set dot get string.
>
> **[3:26](https://www.linkedin.com/learning/hands-on-introduction-java/construct-account-from-data-source?u=76281980&t=206)** And this is the type column.
>
> **[3:29](https://www.linkedin.com/learning/hands-on-introduction-java/construct-account-from-data-source?u=76281980&t=209)** And then finally we can say result set dot get double.
>
> **[3:34](https://www.linkedin.com/learning/hands-on-introduction-java/construct-account-from-data-source?u=76281980&t=214)** And this is the balance column.
>
> **[3:40](https://www.linkedin.com/learning/hands-on-introduction-java/construct-account-from-data-source?u=76281980&t=220)** Great, and then we can just close this with a semicolon.
>
> **[3:45](https://www.linkedin.com/learning/hands-on-introduction-java/construct-account-from-data-source?u=76281980&t=225)** Finally, we can return the account object by saying return account.
>
> **[3:52](https://www.linkedin.com/learning/hands-on-introduction-java/construct-account-from-data-source?u=76281980&t=232)** Let's test this out by printing the customer's account balance.
>
> **[3:57](https://www.linkedin.com/learning/hands-on-introduction-java/construct-account-from-data-source?u=76281980&t=237)** So within the main, we already have our customer, which was Toren West, and let's call get account, and pass in Toren's account id.
>
> **[4:08](https://www.linkedin.com/learning/hands-on-introduction-java/construct-account-from-data-source?u=76281980&t=248)** So we'll say account equals get account and we can say customer dot get account id.
>
> **[4:24](https://www.linkedin.com/learning/hands-on-introduction-java/construct-account-from-data-source?u=76281980&t=264)** And then in our print statement, instead of printing the customer's name, this time let's print the account's balance.
>
> **[4:34](https://www.linkedin.com/learning/hands-on-introduction-java/construct-account-from-data-source?u=76281980&t=274)** Okay, let's run it.
>
> **[4:40](https://www.linkedin.com/learning/hands-on-introduction-java/construct-account-from-data-source?u=76281980&t=280)** And we can see our account balance here.
>
> **[4:44](https://www.linkedin.com/learning/hands-on-introduction-java/construct-account-from-data-source?u=76281980&t=284)** Perfect. Great job.
>
> **[4:46](https://www.linkedin.com/learning/hands-on-introduction-java/construct-account-from-data-source?u=76281980&t=286)** Now if our application needs to interact with any accounts, we can do so with Java.

> [!info]- Semantic Content
>
> **Code Keywords:** let (11), pass (2), class, (1), public (1), static (1)
> **Env Vars:** sql (3)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (soft music) (1)


### 3. Utility Classes

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Create Authenticator
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-introduction-java/create-authenticator?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-java/create-authenticator?u=76281980&t=0)** - [Instructor] When building real world applications, security should be a major concern.
>
> **[0:05](https://www.linkedin.com/learning/hands-on-introduction-java/create-authenticator?u=76281980&t=5)** For our project, the bank accounts should be secured by a username and password.
>
> **[0:12](https://www.linkedin.com/learning/hands-on-introduction-java/create-authenticator?u=76281980&t=12)** This information is stored in the customer's table of our database.
>
> **[0:16](https://www.linkedin.com/learning/hands-on-introduction-java/create-authenticator?u=76281980&t=16)** Normally, passwords are encrypted and not stored in plain text but since this is a toy application, we are okay.
>
> **[0:25](https://www.linkedin.com/learning/hands-on-introduction-java/create-authenticator?u=76281980&t=25)** Just remember not to store your user's passwords like this when building real world apps.
>
> **[0:31](https://www.linkedin.com/learning/hands-on-introduction-java/create-authenticator?u=76281980&t=31)** Okay, let's create a method to authenticate the user before allowing them access to any customer data.
>
> **[0:38](https://www.linkedin.com/learning/hands-on-introduction-java/create-authenticator?u=76281980&t=38)** First, we'll need to create a new class under the bank package.
>
> **[0:42](https://www.linkedin.com/learning/hands-on-introduction-java/create-authenticator?u=76281980&t=42)** So let's click the plus sign here and we'll name this class authenticator.
>
> **[0:53](https://www.linkedin.com/learning/hands-on-introduction-java/create-authenticator?u=76281980&t=53)** Inside of this class, let's create two methods: login and logout.
>
> **[0:58](https://www.linkedin.com/learning/hands-on-introduction-java/create-authenticator?u=76281980&t=58)** The login method needs to accept the username and the password for a giving customer and then return a customer object representing that user.
>
> **[1:07](https://www.linkedin.com/learning/hands-on-introduction-java/create-authenticator?u=76281980&t=67)** So let's say public static customer login and it accepts a username and it also accepts a password.
>
> **[1:21](https://www.linkedin.com/learning/hands-on-introduction-java/create-authenticator?u=76281980&t=81)** Great. The logout method should accept a customer object.
>
> **[1:26](https://www.linkedin.com/learning/hands-on-introduction-java/create-authenticator?u=76281980&t=86)** So we'll say public static void logout and then specify a customer.
>
> **[1:38](https://www.linkedin.com/learning/hands-on-introduction-java/create-authenticator?u=76281980&t=98)** Within the login method, let's call the getCustomer method from our data source class.
>
> **[1:44](https://www.linkedin.com/learning/hands-on-introduction-java/create-authenticator?u=76281980&t=104)** Because the method is static, we do not need to instantiate a data source object to access the method.
>
> **[1:52](https://www.linkedin.com/learning/hands-on-introduction-java/create-authenticator?u=76281980&t=112)** We can simply use the class name followed by the dot operator and here we can see the getCustomer method.
>
> **[2:04](https://www.linkedin.com/learning/hands-on-introduction-java/create-authenticator?u=76281980&t=124)** And we'll go ahead and assign this to a customer object.
>
> **[2:11](https://www.linkedin.com/learning/hands-on-introduction-java/create-authenticator?u=76281980&t=131)** Then before processing this object, it's best to do an error check to make sure we actually receive data from the database.
>
> **[2:19](https://www.linkedin.com/learning/hands-on-introduction-java/create-authenticator?u=76281980&t=139)** To do so, we can check to make sure the customer object is not null.
>
> **[2:25](https://www.linkedin.com/learning/hands-on-introduction-java/create-authenticator?u=76281980&t=145)** So we'll say if customer equals null.
>
> **[2:31](https://www.linkedin.com/learning/hands-on-introduction-java/create-authenticator?u=76281980&t=151)** If the customer is null, we want to stop the program entirely.
>
> **[2:36](https://www.linkedin.com/learning/hands-on-introduction-java/create-authenticator?u=76281980&t=156)** To do so, we can throw Java's built-in login exception.
>
> **[2:41](https://www.linkedin.com/learning/hands-on-introduction-java/create-authenticator?u=76281980&t=161)** So we can throw the exception by saying throw new LoginException and we can pass a message into this constructor.
>
> **[2:52](https://www.linkedin.com/learning/hands-on-introduction-java/create-authenticator?u=76281980&t=172)** Let's say the username not found.
>
> **[2:58](https://www.linkedin.com/learning/hands-on-introduction-java/create-authenticator?u=76281980&t=178)** Because our method has the possibility of throwing an exception, we need to specify that in the methods header.
>
> **[3:06](https://www.linkedin.com/learning/hands-on-introduction-java/create-authenticator?u=76281980&t=186)** So let's add that clause here, throws LoginException.
>
> **[3:14](https://www.linkedin.com/learning/hands-on-introduction-java/create-authenticator?u=76281980&t=194)** If an exception is not thrown, we know we have a valid customer object and we need to verify the password at that point.
>
> **[3:23](https://www.linkedin.com/learning/hands-on-introduction-java/create-authenticator?u=76281980&t=203)** So we can do that.
>
> **[3:25](https://www.linkedin.com/learning/hands-on-introduction-java/create-authenticator?u=76281980&t=205)** Under this check, we can say if password equals customer.getPassword.
>
> **[3:36](https://www.linkedin.com/learning/hands-on-introduction-java/create-authenticator?u=76281980&t=216)** So that'll compare the two passwords there.
>
> **[3:40](https://www.linkedin.com/learning/hands-on-introduction-java/create-authenticator?u=76281980&t=220)** Notice here, we use the method equals as opposed to the equal equal operator.
>
> **[3:46](https://www.linkedin.com/learning/hands-on-introduction-java/create-authenticator?u=76281980&t=226)** That's because when comparing objects, it's safer to use the equals method as it compares the values of the objects and the equal equal operator compares the memory locations.
>
> **[3:59](https://www.linkedin.com/learning/hands-on-introduction-java/create-authenticator?u=76281980&t=239)** Now that we verify that the customer exists and the password is correct, let's set a flag on this customer object to indicate that they are authenticated.
>
> **[4:10](https://www.linkedin.com/learning/hands-on-introduction-java/create-authenticator?u=76281980&t=250)** We don't have a method to do so in the customer class yet as this field is not represented in the database.
>
> **[4:17](https://www.linkedin.com/learning/hands-on-introduction-java/create-authenticator?u=76281980&t=257)** However, it's okay for us to add additional class fields to represent the state of a specific customer.
>
> **[4:24](https://www.linkedin.com/learning/hands-on-introduction-java/create-authenticator?u=76281980&t=264)** So let's go to our customer class and we'll add a boolean field called authenticated.
>
> **[4:35](https://www.linkedin.com/learning/hands-on-introduction-java/create-authenticator?u=76281980&t=275)** So let's say private boolean authenticated and let's go ahead and generate the getter and setter methods for that field.
>
> **[4:47](https://www.linkedin.com/learning/hands-on-introduction-java/create-authenticator?u=76281980&t=287)** So we'll right click Java code generators and generate getters and setters.
>
> **[4:55](https://www.linkedin.com/learning/hands-on-introduction-java/create-authenticator?u=76281980&t=295)** Notice here we have an isAuthenticated and also a getAuthenticated and they both do the same thing.
>
> **[5:03](https://www.linkedin.com/learning/hands-on-introduction-java/create-authenticator?u=76281980&t=303)** However, because this method is returning a boolean value, it's a Java convention to have the method name essentially ask a question usually starting with the word is.
>
> **[5:15](https://www.linkedin.com/learning/hands-on-introduction-java/create-authenticator?u=76281980&t=315)** So we'll use the isAuthenticated one and get rid of the getAuthenticated.
>
> **[5:21](https://www.linkedin.com/learning/hands-on-introduction-java/create-authenticator?u=76281980&t=321)** Also, let's go back to the constructor and initialize authenticated to false.
>
> **[5:36](https://www.linkedin.com/learning/hands-on-introduction-java/create-authenticator?u=76281980&t=336)** Now back to our authenticator class.
>
> **[5:39](https://www.linkedin.com/learning/hands-on-introduction-java/create-authenticator?u=76281980&t=339)** And in the login method, if the passwords match, then we can go ahead and set that flag of authenticated to true.
>
> **[5:47](https://www.linkedin.com/learning/hands-on-introduction-java/create-authenticator?u=76281980&t=347)** So we'll say customer.setAuthenticated in pass and true.
>
> **[5:55](https://www.linkedin.com/learning/hands-on-introduction-java/create-authenticator?u=76281980&t=355)** And then finally, this decision structure can return the authenticated customer object.
>
> **[6:02](https://www.linkedin.com/learning/hands-on-introduction-java/create-authenticator?u=76281980&t=362)** So let's say return customer.
>
> **[6:06](https://www.linkedin.com/learning/hands-on-introduction-java/create-authenticator?u=76281980&t=366)** We have to also account for the case where the password is incorrect.
>
> **[6:11](https://www.linkedin.com/learning/hands-on-introduction-java/create-authenticator?u=76281980&t=371)** In that case, we'll throw the login exception.
>
> **[6:14](https://www.linkedin.com/learning/hands-on-introduction-java/create-authenticator?u=76281980&t=374)** So let's say else throw new LoginException and we can specify that they have an incorrect password.
>
> **[6:31](https://www.linkedin.com/learning/hands-on-introduction-java/create-authenticator?u=76281980&t=391)** Great! The logout method is very straightforward.
>
> **[6:34](https://www.linkedin.com/learning/hands-on-introduction-java/create-authenticator?u=76281980&t=394)** We need to unauthenticate the user and we can do so by setting that authenticated flag to false.
>
> **[6:42](https://www.linkedin.com/learning/hands-on-introduction-java/create-authenticator?u=76281980&t=402)** So we'll do customer.setAuthenticated and we will pass in false.
>
> **[6:51](https://www.linkedin.com/learning/hands-on-introduction-java/create-authenticator?u=76281980&t=411)** Excellent work making sure our toy banking application is secure.
>
> **[6:56](https://www.linkedin.com/learning/hands-on-introduction-java/create-authenticator?u=76281980&t=416)** In production applications, of course there are additional security measures that should be accounted for.
>
> **[7:03](https://www.linkedin.com/learning/hands-on-introduction-java/create-authenticator?u=76281980&t=423)** You're welcome to search LinkedIn Learning for courses that cover security and software development.

> [!info]- Semantic Content
>
> **Code Keywords:** let (14), throw (5), static (3), pass (3), public (2)
> **Code Identifiers:** getcustomer (2), isauthenticated (2), getauthenticated (2), setauthenticated (2), getpassword (1)
> **CLI Commands:** make (2)
> **Cross-References:** go back to (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Best Practices:** it's best to (1)
> **Speakers:** - [instructor] (1)

#### Create menu
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-introduction-java/create-menu?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-java/create-menu?u=76281980&t=0)** - [Instructor] In order for people to use our application, we need to provide a user interface for them.
>
> **[0:06](https://www.linkedin.com/learning/hands-on-introduction-java/create-menu?u=76281980&t=6)** Most applications provide a graphical user interface with form elements such as menu options, text boxes, and buttons.
>
> **[0:14](https://www.linkedin.com/learning/hands-on-introduction-java/create-menu?u=76281980&t=14)** However, to keep things simple we're going to build a text-based user interface that allows the user to enter their credentials and specify what type of transaction they'd like to make.
>
> **[0:27](https://www.linkedin.com/learning/hands-on-introduction-java/create-menu?u=76281980&t=27)** Let's create a new class called Menu under the bank package.
>
> **[0:31](https://www.linkedin.com/learning/hands-on-introduction-java/create-menu?u=76281980&t=31)** So we'll click this plus sign and let's name it Menu.
>
> **[0:39](https://www.linkedin.com/learning/hands-on-introduction-java/create-menu?u=76281980&t=39)** In order to receive input from the text console we can use Java's built-in Scanner class.
>
> **[0:45](https://www.linkedin.com/learning/hands-on-introduction-java/create-menu?u=76281980&t=45)** Let's declare a Scanner object now.
>
> **[0:47](https://www.linkedin.com/learning/hands-on-introduction-java/create-menu?u=76281980&t=47)** So we can say private Scanner and we'll call it scanner.
>
> **[0:54](https://www.linkedin.com/learning/hands-on-introduction-java/create-menu?u=76281980&t=54)** Now let's create a main method.
>
> **[0:56](https://www.linkedin.com/learning/hands-on-introduction-java/create-menu?u=76281980&t=56)** Remember, the main method is the starting point of Java applications.
>
> **[1:02](https://www.linkedin.com/learning/hands-on-introduction-java/create-menu?u=76281980&t=62)** And we need to import the Scanner class and we can do so from the Java util package.
>
> **[1:08](https://www.linkedin.com/learning/hands-on-introduction-java/create-menu?u=76281980&t=68)** Now let's create a main method.
>
> **[1:11](https://www.linkedin.com/learning/hands-on-introduction-java/create-menu?u=76281980&t=71)** Remember, the main method is the starting point of Java applications and that's defined as public static void main with a string array called args.
>
> **[1:26](https://www.linkedin.com/learning/hands-on-introduction-java/create-menu?u=76281980&t=86)** And since this is the first thing that will be executed, let's print a nice little greeting to our users.
>
> **[1:32](https://www.linkedin.com/learning/hands-on-introduction-java/create-menu?u=76281980&t=92)** So we can say System.out.println and we'll say, "Welcome to Globe Bank International!"
>
> **[1:48](https://www.linkedin.com/learning/hands-on-introduction-java/create-menu?u=76281980&t=108)** Now, because the main is a static method, it does not have direct access to its class's non-static fields and methods.
>
> **[1:57](https://www.linkedin.com/learning/hands-on-introduction-java/create-menu?u=76281980&t=117)** Therefore, we need to create an instance of the Menu class to be able to access this Scanner object here.
>
> **[2:06](https://www.linkedin.com/learning/hands-on-introduction-java/create-menu?u=76281980&t=126)** So we simply say Menu and we'll call the object menu equals new Menu.
>
> **[2:16](https://www.linkedin.com/learning/hands-on-introduction-java/create-menu?u=76281980&t=136)** And now we can instantiate the scanner by calling its constructor and passing in where we want to receive the input from, which in our case is from the system.
>
> **[2:29](https://www.linkedin.com/learning/hands-on-introduction-java/create-menu?u=76281980&t=149)** So let's say menu.scanner equals new Scanner and the input from the system is simply System.in.
>
> **[2:42](https://www.linkedin.com/learning/hands-on-introduction-java/create-menu?u=76281980&t=162)** Now before we forget, let's create the final line of the main method which will close this input stream.
>
> **[2:49](https://www.linkedin.com/learning/hands-on-introduction-java/create-menu?u=76281980&t=169)** So I'm going to go down a few lines and we can say menu.scanner.close.
>
> **[2:57](https://www.linkedin.com/learning/hands-on-introduction-java/create-menu?u=76281980&t=177)** Okay.
>
> **[2:58](https://www.linkedin.com/learning/hands-on-introduction-java/create-menu?u=76281980&t=178)** Now can handle everything that goes between opening and closing the scanner.
>
> **[3:04](https://www.linkedin.com/learning/hands-on-introduction-java/create-menu?u=76281980&t=184)** After greeting the user, our next step should be to prompt them for their credentials.
>
> **[3:11](https://www.linkedin.com/learning/hands-on-introduction-java/create-menu?u=76281980&t=191)** And let's do that in another method which we'll call authenticate user.
>
> **[3:17](https://www.linkedin.com/learning/hands-on-introduction-java/create-menu?u=76281980&t=197)** So we'll make this private, it'll return a customer and the name is authenticateUser.
>
> **[3:26](https://www.linkedin.com/learning/hands-on-introduction-java/create-menu?u=76281980&t=206)** We can ask the user to enter their username.
>
> **[3:30](https://www.linkedin.com/learning/hands-on-introduction-java/create-menu?u=76281980&t=210)** So let's say System.out.println, "Please enter your username."
>
> **[3:41](https://www.linkedin.com/learning/hands-on-introduction-java/create-menu?u=76281980&t=221)** Then we can read their response with our scanner and store it into a variable which we can call username.
>
> **[3:49](https://www.linkedin.com/learning/hands-on-introduction-java/create-menu?u=76281980&t=229)** So this is a string and we'll see scanner.next.
>
> **[3:56](https://www.linkedin.com/learning/hands-on-introduction-java/create-menu?u=76281980&t=236)** And we'll do the same for the password.
>
> **[3:59](https://www.linkedin.com/learning/hands-on-introduction-java/create-menu?u=76281980&t=239)** So we can say System.out.println, "Please enter your password" and we can store this inside of variable call password by saying scanner.next.
>
> **[4:21](https://www.linkedin.com/learning/hands-on-introduction-java/create-menu?u=76281980&t=261)** Given this, we can call the Authenticator.login method to validate these credentials.
>
> **[4:27](https://www.linkedin.com/learning/hands-on-introduction-java/create-menu?u=76281980&t=267)** Let's first declare a customer object with the default value of null, and then set it equal to the value we get from the login method.
>
> **[4:43](https://www.linkedin.com/learning/hands-on-introduction-java/create-menu?u=76281980&t=283)** So we'll say customer equals Authenticator.login and we'll pass in our username and pass in our password.
>
> **[4:56](https://www.linkedin.com/learning/hands-on-introduction-java/create-menu?u=76281980&t=296)** Notice we get a compilation error here saying that we have an unhandled exception.
>
> **[5:03](https://www.linkedin.com/learning/hands-on-introduction-java/create-menu?u=76281980&t=303)** So let's place this within a try-catch block.
>
> **[5:09](https://www.linkedin.com/learning/hands-on-introduction-java/create-menu?u=76281980&t=309)** So we'll go try and then we'll move this line inside of the try, and then we'll add the catch as well.
>
> **[5:22](https://www.linkedin.com/learning/hands-on-introduction-java/create-menu?u=76281980&t=322)** So we're catching a login exception.
>
> **[5:28](https://www.linkedin.com/learning/hands-on-introduction-java/create-menu?u=76281980&t=328)** Let's go ahead and print out a message in case we run into this.
>
> **[5:33](https://www.linkedin.com/learning/hands-on-introduction-java/create-menu?u=76281980&t=333)** So it says, "There was an error" and then we can even tell them what the error is by appending getMessage from the exception.
>
> **[5:47](https://www.linkedin.com/learning/hands-on-introduction-java/create-menu?u=76281980&t=347)** Great.
>
> **[5:48](https://www.linkedin.com/learning/hands-on-introduction-java/create-menu?u=76281980&t=348)** Once we're done logging the user in we can return that customer.
>
> **[5:53](https://www.linkedin.com/learning/hands-on-introduction-java/create-menu?u=76281980&t=353)** So let's see, return customer.
>
> **[5:59](https://www.linkedin.com/learning/hands-on-introduction-java/create-menu?u=76281980&t=359)** Awesome.
>
> **[6:00](https://www.linkedin.com/learning/hands-on-introduction-java/create-menu?u=76281980&t=360)** Okay, now back within our main method let's call our newly created authenticateUser method.
>
> **[6:09](https://www.linkedin.com/learning/hands-on-introduction-java/create-menu?u=76281980&t=369)** So we can say Customer customer equals menu.authenticateUser.
>
> **[6:18](https://www.linkedin.com/learning/hands-on-introduction-java/create-menu?u=76281980&t=378)** And if the customer is not null, we're in good shape and we can show them a set of menu options.
>
> **[6:25](https://www.linkedin.com/learning/hands-on-introduction-java/create-menu?u=76281980&t=385)** So let's say if customer is not equal to null, and since we have a customer we can get the customer's account from our data store.
>
> **[6:38](https://www.linkedin.com/learning/hands-on-introduction-java/create-menu?u=76281980&t=398)** So we'll say account equals DataSource.getAccounts and we can say customer.getAccountId.
>
> **[6:54](https://www.linkedin.com/learning/hands-on-introduction-java/create-menu?u=76281980&t=414)** Great.
>
> **[6:56](https://www.linkedin.com/learning/hands-on-introduction-java/create-menu?u=76281980&t=416)** Now we can show the user the menu.
>
> **[6:59](https://www.linkedin.com/learning/hands-on-introduction-java/create-menu?u=76281980&t=419)** So we'll say menu.showMenu and let's pass in a customer in account.
>
> **[7:11](https://www.linkedin.com/learning/hands-on-introduction-java/create-menu?u=76281980&t=431)** Okay, the last step for this class is to create the showMenu method which will accept both a customer and an associated account.
>
> **[7:19](https://www.linkedin.com/learning/hands-on-introduction-java/create-menu?u=76281980&t=439)** So let's create that one.
>
> **[7:23](https://www.linkedin.com/learning/hands-on-introduction-java/create-menu?u=76281980&t=443)** Here we'll say private void showMenu and this accepts the customer and it also accepts an account.
>
> **[7:35](https://www.linkedin.com/learning/hands-on-introduction-java/create-menu?u=76281980&t=455)** Great.
>
> **[7:35](https://www.linkedin.com/learning/hands-on-introduction-java/create-menu?u=76281980&t=455)** We'll provide the implementation of this method in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (18), interface (3), private (3), static (3), pass (3)
> **Code Identifiers:** authenticateuser (3), showmenu (3), getmessage (1), getaccounts (1), getaccountid (1)
> **Definitions:** is a  (2), defined as (1)
> **CLI Commands:** make (2)
> **Cross-References:** in the next (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Display menu options
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-introduction-java/display-menu-options?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-java/display-menu-options?u=76281980&t=0)** - [Instructor] After we allow the user to authenticate, we want to show them a menu of options.
>
> **[0:05](https://www.linkedin.com/learning/hands-on-introduction-java/display-menu-options?u=76281980&t=5)** Within the showMenu method of the menu class, we'll keep track of the user's selection with the variable which we'll initially set to 0.
>
> **[0:14](https://www.linkedin.com/learning/hands-on-introduction-java/display-menu-options?u=76281980&t=14)** We can call this variable selection.
>
> **[0:18](https://www.linkedin.com/learning/hands-on-introduction-java/display-menu-options?u=76281980&t=18)** Let's then provide menu options for deposit, withdrawal, check balance, and exit, where each of the menu options have a corresponding number between 1 and 4.
>
> **[0:29](https://www.linkedin.com/learning/hands-on-introduction-java/display-menu-options?u=76281980&t=29)** We'll once allow the users to continue with as many transactions as they like, so we can use a loop to continuously show them their menu options after they complete a transaction.
>
> **[0:40](https://www.linkedin.com/learning/hands-on-introduction-java/display-menu-options?u=76281980&t=40)** Because the loop needs to be controlled by a condition, and we're not sure how many transactions the customer will want to make, a while loop is our best option.
>
> **[0:51](https://www.linkedin.com/learning/hands-on-introduction-java/display-menu-options?u=76281980&t=51)** So we'll write our while, and we can say continue allowing transactions while the menu option is not equal to 4, so while selection is not equal to 4, and while the user remains authenticated, so we can see customer is authenticated.
>
> **[1:15](https://www.linkedin.com/learning/hands-on-introduction-java/display-menu-options?u=76281980&t=75)** So this loop will continue executing while both of these conditions are true.
>
> **[1:20](https://www.linkedin.com/learning/hands-on-introduction-java/display-menu-options?u=76281980&t=80)** Now we can print the option so that the user sees them in the terminal.
>
> **[1:26](https://www.linkedin.com/learning/hands-on-introduction-java/display-menu-options?u=76281980&t=86)** Let's just go ahead and print a couple of things here, so I'm going to print first off just a divider,
>
> **[1:40](https://www.linkedin.com/learning/hands-on-introduction-java/display-menu-options?u=76281980&t=100)** and then I'll print out a prompt that asks the user what do they want to select, so please select one of the following options.
>
> **[1:58](https://www.linkedin.com/learning/hands-on-introduction-java/display-menu-options?u=76281980&t=118)** And now we can give them the options, so let's print that as well.
>
> **[2:03](https://www.linkedin.com/learning/hands-on-introduction-java/display-menu-options?u=76281980&t=123)** The first option is 1, and we'll put a label for deposit, and I'm just going to copy this so I don't have to type so much.
>
> **[2:15](https://www.linkedin.com/learning/hands-on-introduction-java/display-menu-options?u=76281980&t=135)** The second option is 2, and that is withdrawal,
>
> **[2:23](https://www.linkedin.com/learning/hands-on-introduction-java/display-menu-options?u=76281980&t=143)** and then the third option is 3, and this one will be check balance, and then the last option is 4, and that is to exit.
>
> **[2:44](https://www.linkedin.com/learning/hands-on-introduction-java/display-menu-options?u=76281980&t=164)** And then finally, I'm going to put another divider, so I'm just going to copy this one and paste it here.
>
> **[2:52](https://www.linkedin.com/learning/hands-on-introduction-java/display-menu-options?u=76281980&t=172)** And just so that it's long enough for this, I'm just going to add a few more here to make it nice and even.
>
> **[2:59](https://www.linkedin.com/learning/hands-on-introduction-java/display-menu-options?u=76281980&t=179)** Okay, that looks great.
>
> **[3:01](https://www.linkedin.com/learning/hands-on-introduction-java/display-menu-options?u=76281980&t=181)** And we'll just copy that again here.
>
> **[3:08](https://www.linkedin.com/learning/hands-on-introduction-java/display-menu-options?u=76281980&t=188)** Okay, pretty good.
>
> **[3:10](https://www.linkedin.com/learning/hands-on-introduction-java/display-menu-options?u=76281980&t=190)** Now we need to read their selection as input, so let's go ahead and set selection equals to scanner., and this time we can't just say next because it's not a string that's coming in, it's actually a number, so we want to say nextInt, and that'll read a integer from the console.
>
> **[3:30](https://www.linkedin.com/learning/hands-on-introduction-java/display-menu-options?u=76281980&t=210)** Okay, now we want to execute different blocks of code depending on the selection the user made, to execute a specific block of code based on a value, we can use the switch decision structure.
>
> **[3:44](https://www.linkedin.com/learning/hands-on-introduction-java/display-menu-options?u=76281980&t=224)** We write the word switch, and in parentheses, we provide the variable that we want evaluated, so in our case, that selection, and then we can follow this with a set of curly braces.
>
> **[3:59](https://www.linkedin.com/learning/hands-on-introduction-java/display-menu-options?u=76281980&t=239)** Inside of the switch statement, we provide cases for all of the possible values of the selection variable.
>
> **[4:06](https://www.linkedin.com/learning/hands-on-introduction-java/display-menu-options?u=76281980&t=246)** The case that matches the value of selection will be the block of code that is executed, so our first case is 1, so we specify this with case 1;, okay?
>
> **[4:21](https://www.linkedin.com/learning/hands-on-introduction-java/display-menu-options?u=76281980&t=261)** Case 1 will be executed when the user enters 1 for their selection.
>
> **[4:27](https://www.linkedin.com/learning/hands-on-introduction-java/display-menu-options?u=76281980&t=267)** 1 is for a deposit, so we can specify what should happen when the customer wants to make a deposit.
>
> **[4:34](https://www.linkedin.com/learning/hands-on-introduction-java/display-menu-options?u=76281980&t=274)** Well, we can ask them how much they'd like to deposit, so let's do a print statement here and ask, "How much would you like to deposit?"
>
> **[4:51](https://www.linkedin.com/learning/hands-on-introduction-java/display-menu-options?u=76281980&t=291)** And then we can read their response into a variable called amount, so let's say amount equals scanner, and this is going to be a desmos number, so we'll say nextDouble, okay?
>
> **[5:10](https://www.linkedin.com/learning/hands-on-introduction-java/display-menu-options?u=76281980&t=310)** Now, we'll need to access the amount variable in multiple cases, so let's not limit its scope to this one particular case, instead, we can declare it before the switch statement and that way we can access it from any case.
>
> **[5:27](https://www.linkedin.com/learning/hands-on-introduction-java/display-menu-options?u=76281980&t=327)** So right after the selection, I'll go ahead and declare amount as well.
>
> **[5:37](https://www.linkedin.com/learning/hands-on-introduction-java/display-menu-options?u=76281980&t=337)** Okay, within our deposit case, we'll call the deposit method on account, so account.deposit, and we'll pass in the amount here.
>
> **[5:49](https://www.linkedin.com/learning/hands-on-introduction-java/display-menu-options?u=76281980&t=349)** Now this method doesn't yet exist, so we can just stub it out for now, and we'll provide the actual implementation in the next video.
>
> **[5:58](https://www.linkedin.com/learning/hands-on-introduction-java/display-menu-options?u=76281980&t=358)** So let's go to our account class, and inside of here, we're going to create a new method called deposit.
>
> **[6:09](https://www.linkedin.com/learning/hands-on-introduction-java/display-menu-options?u=76281980&t=369)** So this is public, it won't return anything, and it will accept a double, which is called amount.
>
> **[6:20](https://www.linkedin.com/learning/hands-on-introduction-java/display-menu-options?u=76281980&t=380)** Okay, back to menu.
>
> **[6:26](https://www.linkedin.com/learning/hands-on-introduction-java/display-menu-options?u=76281980&t=386)** Now the last line of the case should be a break statement, which let's Java know not to continue executing any more cases.
>
> **[6:37](https://www.linkedin.com/learning/hands-on-introduction-java/display-menu-options?u=76281980&t=397)** Without a break statement after a switch case, the code will fall through to the next case, in fact, it will keep going through all of the cases until it reaches a break statement, even if the case does not match the variable of the switch structure, so be extra careful to include a break statement after each case, unless it is your intention to run multiple blocks of code for specific values.
>
> **[7:06](https://www.linkedin.com/learning/hands-on-introduction-java/display-menu-options?u=76281980&t=426)** For case two, the user wants to withdraw, so let's go ahead and make that case, and we'll ask them how much they want to withdraw, so this is a print statement that says, "How much would you like to withdraw?"
>
> **[7:25](https://www.linkedin.com/learning/hands-on-introduction-java/display-menu-options?u=76281980&t=445)** And again, we can read in that value for amount, so amount equals scanner.nextDouble, and then we can call the withdraw method.
>
> **[7:38](https://www.linkedin.com/learning/hands-on-introduction-java/display-menu-options?u=76281980&t=458)** So account.withdraw, and we'll pass in the amount, and of course, we need to go and stub out the withdraw method within the account class, so let's make another method here, public void withdraw, and this also takes a double, which we'll call amounts.
>
> **[8:06](https://www.linkedin.com/learning/hands-on-introduction-java/display-menu-options?u=76281980&t=486)** Okay, back to menu.
>
> **[8:07](https://www.linkedin.com/learning/hands-on-introduction-java/display-menu-options?u=76281980&t=487)** Let's remember to close this case with a break statement.
>
> **[8:13](https://www.linkedin.com/learning/hands-on-introduction-java/display-menu-options?u=76281980&t=493)** For case 3, the user wants to view their balance, so let's print that for them, we can say system.out.println, current balance, and then we can make a call to account.getBalance, and don't forget to break.
>
> **[8:37](https://www.linkedin.com/learning/hands-on-introduction-java/display-menu-options?u=76281980&t=517)** And then for selection 4, the user wants to exit the application, so let's log them out and print a farewell message.
>
> **[8:47](https://www.linkedin.com/learning/hands-on-introduction-java/display-menu-options?u=76281980&t=527)** So we can do authenticator.logout, pass in our customer, and then we'll say system.out.println, "Thanks for banking at Globe Bank International,"
>
> **[9:09](https://www.linkedin.com/learning/hands-on-introduction-java/display-menu-options?u=76281980&t=549)** and break.
>
> **[9:12](https://www.linkedin.com/learning/hands-on-introduction-java/display-menu-options?u=76281980&t=552)** While 1 through 4 are the only valid options, it's common for users to make mistakes.
>
> **[9:18](https://www.linkedin.com/learning/hands-on-introduction-java/display-menu-options?u=76281980&t=558)** As a programmer, it's a good practice to account for likely mistakes and handle them gracefully.
>
> **[9:25](https://www.linkedin.com/learning/hands-on-introduction-java/display-menu-options?u=76281980&t=565)** The switch structure allows us to use a default case in the event that the value of the variable being evaluated doesn't match any of the cases specified.
>
> **[9:36](https://www.linkedin.com/learning/hands-on-introduction-java/display-menu-options?u=76281980&t=576)** We specify this case with the word default, followed by a colon, and then continue writing the implementation just as we would with any other case.
>
> **[9:49](https://www.linkedin.com/learning/hands-on-introduction-java/display-menu-options?u=76281980&t=589)** So in this case, we'll print out a message letting them know that this is an invalid option, and we can say, "Please try again," and break.
>
> **[10:06](https://www.linkedin.com/learning/hands-on-introduction-java/display-menu-options?u=76281980&t=606)** Excellent job providing an interface for the user to engage with our application.

> [!info]- Semantic Content
>
> **Code Keywords:** let (14), case, (8), switch (7), continue (5), class, (3)
> **CLI Commands:** make (7)
> **Code Identifiers:** nextdouble (2), showmenu (1), nextint (1), getbalance (1)
> **Definitions:** is called (1), is a  (1), is an  (1)
> **Best Practices:** remember to (1), don't forget (1), good practice (1)
> **Cross-References:** in the next (1)
> **Tools:** terminal (1)
> **UI Navigation:** go to (1)


### 4. State Management

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Deposit
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-introduction-java/deposit?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-java/deposit?u=76281980&t=0)** - [Instructor] We've provided users with a menu option to deposit funds into their account.
>
> **[0:05](https://www.linkedin.com/learning/hands-on-introduction-java/deposit?u=76281980&t=5)** Let's provide the backend implementation to make that happen within the Account class.
>
> **[0:11](https://www.linkedin.com/learning/hands-on-introduction-java/deposit?u=76281980&t=11)** Because the amount is input provided by the user we want to do a bit of error checking to make sure that the input is valid.
>
> **[0:19](https://www.linkedin.com/learning/hands-on-introduction-java/deposit?u=76281980&t=19)** For example, let's make sure the amount is not zero or a negative number.
>
> **[0:25](https://www.linkedin.com/learning/hands-on-introduction-java/deposit?u=76281980&t=25)** We can do so by writing an if statement and saying if the amount is less than one do something.
>
> **[0:36](https://www.linkedin.com/learning/hands-on-introduction-java/deposit?u=76281980&t=36)** If this happens to be the case we shouldn't continue any further.
>
> **[0:39](https://www.linkedin.com/learning/hands-on-introduction-java/deposit?u=76281980&t=39)** We can stop the program by throwing an exception.
>
> **[0:43](https://www.linkedin.com/learning/hands-on-introduction-java/deposit?u=76281980&t=43)** To throw an exception we'll write the word throw followed by new and the name of the exception.
>
> **[0:50](https://www.linkedin.com/learning/hands-on-introduction-java/deposit?u=76281980&t=50)** Now, Java provides a lot of built-in exception classes that you can use, or you can make your own custom exceptions.
>
> **[0:57](https://www.linkedin.com/learning/hands-on-introduction-java/deposit?u=76281980&t=57)** For this error let's throw our own custom exception.
>
> **[1:01](https://www.linkedin.com/learning/hands-on-introduction-java/deposit?u=76281980&t=61)** So, this exception we'll call it AmountException, and we'll set a message in case this is thrown.
>
> **[1:10](https://www.linkedin.com/learning/hands-on-introduction-java/deposit?u=76281980&t=70)** The error message will say the minimum deposit is one.
>
> **[1:18](https://www.linkedin.com/learning/hands-on-introduction-java/deposit?u=76281980&t=78)** Because this is our own custom exception we have to implement it ourselves by creating a new class with the name of the exception.
>
> **[1:27](https://www.linkedin.com/learning/hands-on-introduction-java/deposit?u=76281980&t=87)** Let's do that.
>
> **[1:29](https://www.linkedin.com/learning/hands-on-introduction-java/deposit?u=76281980&t=89)** So, we'll open up the explorer and under the Bank package I want to create a new package called Exceptions.
>
> **[1:37](https://www.linkedin.com/learning/hands-on-introduction-java/deposit?u=76281980&t=97)** So, let's right-click on Bank, select New Package, and our new package will be called Exceptions.
>
> **[1:49](https://www.linkedin.com/learning/hands-on-introduction-java/deposit?u=76281980&t=109)** And here's our new one.
>
> **[1:51](https://www.linkedin.com/learning/hands-on-introduction-java/deposit?u=76281980&t=111)** Let's create a new class inside of here, which we'll call it AmountException.
>
> **[1:59](https://www.linkedin.com/learning/hands-on-introduction-java/deposit?u=76281980&t=119)** Great, I'm just going to close that up.
>
> **[2:03](https://www.linkedin.com/learning/hands-on-introduction-java/deposit?u=76281980&t=123)** And when creating your own exceptions you can extend from any of Java's built-in exceptions, and that way you'll inherit a lot of the behavior of exceptions.
>
> **[2:14](https://www.linkedin.com/learning/hands-on-introduction-java/deposit?u=76281980&t=134)** In our case let's inherit from the top-level exception whose name is fittingly Exceptions.
>
> **[2:21](https://www.linkedin.com/learning/hands-on-introduction-java/deposit?u=76281980&t=141)** We inherit from other classes by using the keyword extends.
>
> **[2:28](https://www.linkedin.com/learning/hands-on-introduction-java/deposit?u=76281980&t=148)** Because we're inheriting so much from Exception all we need to provide in our custom Exception class is a constructor, which accepts a message and will simply pass that message to our parent class Exception.
>
> **[2:42](https://www.linkedin.com/learning/hands-on-introduction-java/deposit?u=76281980&t=162)** So, we're going to make this constructor, which again, has to be the same name as the class.
>
> **[2:48](https://www.linkedin.com/learning/hands-on-introduction-java/deposit?u=76281980&t=168)** And this will take a message.
>
> **[2:53](https://www.linkedin.com/learning/hands-on-introduction-java/deposit?u=76281980&t=173)** And then we'll call our parent by using the super method, and we'll pass in the message to super.
>
> **[3:01](https://www.linkedin.com/learning/hands-on-introduction-java/deposit?u=76281980&t=181)** Awesome, we're done with this Exception class.
>
> **[3:04](https://www.linkedin.com/learning/hands-on-introduction-java/deposit?u=76281980&t=184)** Let's return to the Account class.
>
> **[3:08](https://www.linkedin.com/learning/hands-on-introduction-java/deposit?u=76281980&t=188)** Now, back in our deposit method we'll need to specify that this method throws an exception in the header.
>
> **[3:16](https://www.linkedin.com/learning/hands-on-introduction-java/deposit?u=76281980&t=196)** So, we can do that by saying throws AmountException.
>
> **[3:22](https://www.linkedin.com/learning/hands-on-introduction-java/deposit?u=76281980&t=202)** And because the method now throws an exception we have to fix the methods that call this one.
>
> **[3:28](https://www.linkedin.com/learning/hands-on-introduction-java/deposit?u=76281980&t=208)** So, if we go back to the Menu class and go down to the deposit call notice now we have an error.
>
> **[3:40](https://www.linkedin.com/learning/hands-on-introduction-java/deposit?u=76281980&t=220)** So, we have two choices, we can catch the exception or we can rethrow it ourselves.
>
> **[3:46](https://www.linkedin.com/learning/hands-on-introduction-java/deposit?u=76281980&t=226)** Let's catch it so that we can give the user another opportunity to enter valid data.
>
> **[3:52](https://www.linkedin.com/learning/hands-on-introduction-java/deposit?u=76281980&t=232)** So, we're going to wrap this inside of a try, and we'll catch it.
>
> **[4:04](https://www.linkedin.com/learning/hands-on-introduction-java/deposit?u=76281980&t=244)** And then inside of our catch let's let them know what the error is by saying e.getMessage.
>
> **[4:17](https://www.linkedin.com/learning/hands-on-introduction-java/deposit?u=76281980&t=257)** And then we'll say go ahead and try again.
>
> **[4:20](https://www.linkedin.com/learning/hands-on-introduction-java/deposit?u=76281980&t=260)** So, we'll do another print statement that says please try again.
>
> **[4:27](https://www.linkedin.com/learning/hands-on-introduction-java/deposit?u=76281980&t=267)** Okay, so we've handled the case where the input is invalid, now let's focus on valid input.
>
> **[4:34](https://www.linkedin.com/learning/hands-on-introduction-java/deposit?u=76281980&t=274)** We'll return to the Account class.
>
> **[4:40](https://www.linkedin.com/learning/hands-on-introduction-java/deposit?u=76281980&t=280)** So, back in our deposit method let's do an else clause here.
>
> **[4:47](https://www.linkedin.com/learning/hands-on-introduction-java/deposit?u=76281980&t=287)** And we're going to update the balance for this account object.
>
> **[4:51](https://www.linkedin.com/learning/hands-on-introduction-java/deposit?u=76281980&t=291)** Let's first calculate what that is.
>
> **[4:53](https://www.linkedin.com/learning/hands-on-introduction-java/deposit?u=76281980&t=293)** So, we'll call this newBalance, and that equals balance plus the amount that was passed in.
>
> **[5:01](https://www.linkedin.com/learning/hands-on-introduction-java/deposit?u=76281980&t=301)** And then we'll call setBalance and pass in our newBalance.
>
> **[5:07](https://www.linkedin.com/learning/hands-on-introduction-java/deposit?u=76281980&t=307)** Now, most importantly, we need to update the database to reflect the increase.
>
> **[5:13](https://www.linkedin.com/learning/hands-on-introduction-java/deposit?u=76281980&t=313)** Let's do that in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (15), class. (5), throw (3), pass (3), super (2)
> **CLI Commands:** make (5)
> **Code Identifiers:** newbalance (2), getmessage (1), setbalance (1)
> **Cross-References:** go back to (1), in the next (1)
> **UI Navigation:** right-click (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Update data source
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-introduction-java/update-data-source?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-java/update-data-source?u=76281980&t=0)** - In the deposit method of the account class, we updated the balance of the account object when a deposit is made.
>
> **[0:07](https://www.linkedin.com/learning/hands-on-introduction-java/update-data-source?u=76281980&t=7)** However, we also need to update the database as that is our source of truth.
>
> **[0:13](https://www.linkedin.com/learning/hands-on-introduction-java/update-data-source?u=76281980&t=13)** Let's create a utility method in the data source class that will update the database.
>
> **[0:20](https://www.linkedin.com/learning/hands-on-introduction-java/update-data-source?u=76281980&t=20)** This method will say public static void, and let's call this updateAccountBalance.
>
> **[0:29](https://www.linkedin.com/learning/hands-on-introduction-java/update-data-source?u=76281980&t=29)** To update the account balance, we'll ask for the account ID.
>
> **[0:34](https://www.linkedin.com/learning/hands-on-introduction-java/update-data-source?u=76281980&t=34)** As well as the balance that should be reflected in the database.
>
> **[0:39](https://www.linkedin.com/learning/hands-on-introduction-java/update-data-source?u=76281980&t=39)** Our query needs to update the balance column of the accounts table.
>
> **[0:44](https://www.linkedin.com/learning/hands-on-introduction-java/update-data-source?u=76281980&t=44)** So, we'll say string SQL equals update accounts by setting the balance equal to question mark, where ID equals question mark.
>
> **[1:00](https://www.linkedin.com/learning/hands-on-introduction-java/update-data-source?u=76281980&t=60)** So now, we have two place holders.
>
> **[1:04](https://www.linkedin.com/learning/hands-on-introduction-java/update-data-source?u=76281980&t=64)** Let's go ahead and connect to our database and prepare the statement.
>
> **[1:08](https://www.linkedin.com/learning/hands-on-introduction-java/update-data-source?u=76281980&t=68)** We'll do that within a try with resources.
>
> **[1:11](https://www.linkedin.com/learning/hands-on-introduction-java/update-data-source?u=76281980&t=71)** So we'll say connection equals connect and then our prepared statement equals connection dot prepare statement, and we'll pass our query.
>
> **[1:33](https://www.linkedin.com/learning/hands-on-introduction-java/update-data-source?u=76281980&t=93)** Now we'll need to add our catch block as well.
>
> **[1:36](https://www.linkedin.com/learning/hands-on-introduction-java/update-data-source?u=76281980&t=96)** So we're going to catch SQL exception.
>
> **[1:44](https://www.linkedin.com/learning/hands-on-introduction-java/update-data-source?u=76281980&t=104)** And we'll print the stack trace in case of error.
>
> **[1:50](https://www.linkedin.com/learning/hands-on-introduction-java/update-data-source?u=76281980&t=110)** Then we need to update the placeholders within the query with the values that were passed in.
>
> **[1:55](https://www.linkedin.com/learning/hands-on-introduction-java/update-data-source?u=76281980&t=115)** So let's do that inside of the try statement and we can see statement dot set double for the first one.
>
> **[2:06](https://www.linkedin.com/learning/hands-on-introduction-java/update-data-source?u=76281980&t=126)** And this will be the balance and then statement dot setInt for the second one.
>
> **[2:14](https://www.linkedin.com/learning/hands-on-introduction-java/update-data-source?u=76281980&t=134)** And this will be the account ID.
>
> **[2:20](https://www.linkedin.com/learning/hands-on-introduction-java/update-data-source?u=76281980&t=140)** Finally, we can execute the statement.
>
> **[2:23](https://www.linkedin.com/learning/hands-on-introduction-java/update-data-source?u=76281980&t=143)** This query is different from the ones we've worked with so far as this one is making a change to the database.
>
> **[2:30](https://www.linkedin.com/learning/hands-on-introduction-java/update-data-source?u=76281980&t=150)** For insert, update or delete statements we use the execute update method as opposed to the execute query method.
>
> **[2:40](https://www.linkedin.com/learning/hands-on-introduction-java/update-data-source?u=76281980&t=160)** So we'll say statement dot execute update.
>
> **[2:49](https://www.linkedin.com/learning/hands-on-introduction-java/update-data-source?u=76281980&t=169)** Now let's test our code to make sure it's doing what we expect.
>
> **[2:53](https://www.linkedin.com/learning/hands-on-introduction-java/update-data-source?u=76281980&t=173)** If we look in our database, we have a customer named Annie.
>
> **[2:59](https://www.linkedin.com/learning/hands-on-introduction-java/update-data-source?u=76281980&t=179)** This is her username, this is her password.
>
> **[3:03](https://www.linkedin.com/learning/hands-on-introduction-java/update-data-source?u=76281980&t=183)** So we'll have Annie deposit 100.
>
> **[3:06](https://www.linkedin.com/learning/hands-on-introduction-java/update-data-source?u=76281980&t=186)** Her current balance is 6,230.49.
>
> **[3:10](https://www.linkedin.com/learning/hands-on-introduction-java/update-data-source?u=76281980&t=190)** Within the data source class let's go ahead and get rid of its main method that was only used for testing.
>
> **[3:17](https://www.linkedin.com/learning/hands-on-introduction-java/update-data-source?u=76281980&t=197)** Now we have a real main method which is inside of our menu class.
>
> **[3:21](https://www.linkedin.com/learning/hands-on-introduction-java/update-data-source?u=76281980&t=201)** So let's open up the menu class.
>
> **[3:27](https://www.linkedin.com/learning/hands-on-introduction-java/update-data-source?u=76281980&t=207)** And we'll go to the main method which is up top and we'll run this main method.
>
> **[3:40](https://www.linkedin.com/learning/hands-on-introduction-java/update-data-source?u=76281980&t=220)** Okay. It's prompting us for our user name.
>
> **[3:42](https://www.linkedin.com/learning/hands-on-introduction-java/update-data-source?u=76281980&t=222)** So we enter Annie's username.
>
> **[3:46](https://www.linkedin.com/learning/hands-on-introduction-java/update-data-source?u=76281980&t=226)** And then it's also prompting us for the password.
>
> **[3:49](https://www.linkedin.com/learning/hands-on-introduction-java/update-data-source?u=76281980&t=229)** So we enter her password.
>
> **[3:51](https://www.linkedin.com/learning/hands-on-introduction-java/update-data-source?u=76281980&t=231)** And as we can see, it has successfully authenticated us and it's showing us our menu options.
>
> **[3:57](https://www.linkedin.com/learning/hands-on-introduction-java/update-data-source?u=76281980&t=237)** We'll choose menu option three to check the balance.
>
> **[4:02](https://www.linkedin.com/learning/hands-on-introduction-java/update-data-source?u=76281980&t=242)** So we see that Annie's current balance is 6,230.49.
>
> **[4:07](https://www.linkedin.com/learning/hands-on-introduction-java/update-data-source?u=76281980&t=247)** Great. We want to test our deposit method.
>
> **[4:10](https://www.linkedin.com/learning/hands-on-introduction-java/update-data-source?u=76281980&t=250)** So let's see, one for deposit.
>
> **[4:13](https://www.linkedin.com/learning/hands-on-introduction-java/update-data-source?u=76281980&t=253)** It's asking us how much, we'll say 100.
>
> **[4:16](https://www.linkedin.com/learning/hands-on-introduction-java/update-data-source?u=76281980&t=256)** And now we see the menu options again.
>
> **[4:19](https://www.linkedin.com/learning/hands-on-introduction-java/update-data-source?u=76281980&t=259)** Let's say we want to check our balance now to make sure it was increased.
>
> **[4:23](https://www.linkedin.com/learning/hands-on-introduction-java/update-data-source?u=76281980&t=263)** And yes, now we see the balance is now 6,330.49, which is an increase by 100.
>
> **[4:31](https://www.linkedin.com/learning/hands-on-introduction-java/update-data-source?u=76281980&t=271)** Perfect.
>
> **[4:32](https://www.linkedin.com/learning/hands-on-introduction-java/update-data-source?u=76281980&t=272)** Now that we have tested this, let's update the deposit method from the account class to call this method.
>
> **[4:40](https://www.linkedin.com/learning/hands-on-introduction-java/update-data-source?u=76281980&t=280)** So in account, after we've set the balance for the object itself, we want to call that deposit method so that the information is updated in the database as well.
>
> **[4:53](https://www.linkedin.com/learning/hands-on-introduction-java/update-data-source?u=76281980&t=293)** We do so by calling data source dot update account balance and we can pass in the ID from this class.
>
> **[5:01](https://www.linkedin.com/learning/hands-on-introduction-java/update-data-source?u=76281980&t=301)** As well as the new balance that we've calculated.
>
> **[5:07](https://www.linkedin.com/learning/hands-on-introduction-java/update-data-source?u=76281980&t=307)** Excellent job implementing data persistence within an external source.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), class. (3), pass (2), class, (1), public (1)
> **Versions:** 230.49 (2), 330.49 (1)
> **CLI Commands:** make (2)
> **Code Identifiers:** updateaccountbalance (1), setint (1)
> **Env Vars:** sql (2)
> **UI Navigation:** go to (1)
> **Definitions:** is an  (1)
> **Speakers:** - in (1)

#### Withdraw
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-introduction-java/withdraw?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-java/withdraw?u=76281980&t=0)** - [Instructor] The last part of the project that we need to complete is the withdraw method and this is inside of the account class.
>
> **[0:07](https://www.linkedin.com/learning/hands-on-introduction-java/withdraw?u=76281980&t=7)** Let's make sure the input is valid by checking that it's a positive number.
>
> **[0:12](https://www.linkedin.com/learning/hands-on-introduction-java/withdraw?u=76281980&t=12)** So we'll do a if statement here and say if the amount is less than zero we're going to throw a new AmountException.
>
> **[0:24](https://www.linkedin.com/learning/hands-on-introduction-java/withdraw?u=76281980&t=24)** And we'll say, "The withdrawal amount must be greater than zero."
>
> **[0:39](https://www.linkedin.com/learning/hands-on-introduction-java/withdraw?u=76281980&t=39)** Because the method now throws an exception, let's add that to our method header.
>
> **[0:44](https://www.linkedin.com/learning/hands-on-introduction-java/withdraw?u=76281980&t=44)** So we'll say this throws AmountException and now we need to update calling methods as well.
>
> **[0:53](https://www.linkedin.com/learning/hands-on-introduction-java/withdraw?u=76281980&t=53)** So let's revisit the menu class.
>
> **[0:56](https://www.linkedin.com/learning/hands-on-introduction-java/withdraw?u=76281980&t=56)** Go over here to our explorer and we'll pull up menu which now has an error.
>
> **[1:01](https://www.linkedin.com/learning/hands-on-introduction-java/withdraw?u=76281980&t=61)** If we go down to withdraw, yep, we see that this needs to be in a try catch block.
>
> **[1:07](https://www.linkedin.com/learning/hands-on-introduction-java/withdraw?u=76281980&t=67)** So we'll do that now and we're going to catch the AmountException
>
> **[1:21](https://www.linkedin.com/learning/hands-on-introduction-java/withdraw?u=76281980&t=81)** and we'll print out the error message so we can say e.getMessage, and then we'll also print out a prompt to ask them to try again.
>
> **[1:44](https://www.linkedin.com/learning/hands-on-introduction-java/withdraw?u=76281980&t=104)** All right, back to our account class.
>
> **[1:48](https://www.linkedin.com/learning/hands-on-introduction-java/withdraw?u=76281980&t=108)** For withdrawals, not only do we need to make sure that the input is a positive number, we also need to make sure that the account has sufficient funds to honor the withdrawal request.
>
> **[2:00](https://www.linkedin.com/learning/hands-on-introduction-java/withdraw?u=76281980&t=120)** So let's add another check here.
>
> **[2:03](https://www.linkedin.com/learning/hands-on-introduction-java/withdraw?u=76281980&t=123)** So we can say else if the amount is greater than getBalance,
>
> **[2:13](https://www.linkedin.com/learning/hands-on-introduction-java/withdraw?u=76281980&t=133)** we are going to throw the AmountException again.
>
> **[2:19](https://www.linkedin.com/learning/hands-on-introduction-java/withdraw?u=76281980&t=139)** And this time the message will say, "You do not have sufficient funds for this withdrawal."
>
> **[2:33](https://www.linkedin.com/learning/hands-on-introduction-java/withdraw?u=76281980&t=153)** Great. And then if we make it this far, we know the input is valid and we can now complete the transaction.
>
> **[2:40](https://www.linkedin.com/learning/hands-on-introduction-java/withdraw?u=76281980&t=160)** So we'll do another else clause and then inside of here let's calculate the newBalance, which will be the current balance minus the amount that they want to withdraw.
>
> **[2:53](https://www.linkedin.com/learning/hands-on-introduction-java/withdraw?u=76281980&t=173)** We'll set the balance to the newBalance and then we'll update the database to reflect the changes as well.
>
> **[3:03](https://www.linkedin.com/learning/hands-on-introduction-java/withdraw?u=76281980&t=183)** So updateAccountBalance and we can pass in the id and the newBalance.
>
> **[3:11](https://www.linkedin.com/learning/hands-on-introduction-java/withdraw?u=76281980&t=191)** Isn't it great that we were able to reuse the updateAccountBalance method for this case as well?
>
> **[3:17](https://www.linkedin.com/learning/hands-on-introduction-java/withdraw?u=76281980&t=197)** Yes. Excellent work.
>
> **[3:20](https://www.linkedin.com/learning/hands-on-introduction-java/withdraw?u=76281980&t=200)** Our project is now complete.
>
> **[3:21](https://www.linkedin.com/learning/hands-on-introduction-java/withdraw?u=76281980&t=201)** You did an amazing job.
>
> **[3:23](https://www.linkedin.com/learning/hands-on-introduction-java/withdraw?u=76281980&t=203)** Be sure to test various scenarios within your project to make sure everything is working as expected.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), class. (3), throw (2), pass (1)
> **Code Identifiers:** newbalance (3), updateaccountbalance (2), getmessage (1), getbalance (1)
> **CLI Commands:** make (5)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### Conclusion

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Continuing on with Java and project-based learning
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-introduction-java/continuing-on-with-java-and-project-based-learning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-java/continuing-on-with-java-and-project-based-learning?u=76281980&t=0)** - [Angie] Congratulations!
>
> **[0:02](https://www.linkedin.com/learning/hands-on-introduction-java/continuing-on-with-java-and-project-based-learning?u=76281980&t=2)** You've made it to the end of the course.
>
> **[0:04](https://www.linkedin.com/learning/hands-on-introduction-java/continuing-on-with-java-and-project-based-learning?u=76281980&t=4)** You've gained practical experience in applying Java programming to build actual applications.
>
> **[0:10](https://www.linkedin.com/learning/hands-on-introduction-java/continuing-on-with-java-and-project-based-learning?u=76281980&t=10)** Hopefully, this project helped to cement your knowledge of the language and provided stronger context on how to solve problems with code.
>
> **[0:20](https://www.linkedin.com/learning/hands-on-introduction-java/continuing-on-with-java-and-project-based-learning?u=76281980&t=20)** I encourage you to add this project to your portfolio and to continue to build additional projects with your newfound experience.
>
> **[0:28](https://www.linkedin.com/learning/hands-on-introduction-java/continuing-on-with-java-and-project-based-learning?u=76281980&t=28)** If you're ready for another course, there are some great options here on LinkedIn Learning.
>
> **[0:33](https://www.linkedin.com/learning/hands-on-introduction-java/continuing-on-with-java-and-project-based-learning?u=76281980&t=33)** This is the first course in a series of courses on Java using GitHub Codespaces so be sure to check out the other courses as well.
>
> **[0:43](https://www.linkedin.com/learning/hands-on-introduction-java/continuing-on-with-java-and-project-based-learning?u=76281980&t=43)** Thanks so much for taking this course.
>
> **[0:46](https://www.linkedin.com/learning/hands-on-introduction-java/continuing-on-with-java-and-project-based-learning?u=76281980&t=46)** If you like to keep in contact, you can follow me on LinkedIn or on Twitter where my handle is @techgirl1908.
>
> **[0:55](https://www.linkedin.com/learning/hands-on-introduction-java/continuing-on-with-java-and-project-based-learning?u=76281980&t=55)** Happy coding.

> [!info]- Semantic Content
>
> **Code Keywords:** continue (1)
> **Tools:** github (1)
> **Speakers:** - [angie] (1)


## Instructor

- [[Angie Jones]]

## Resources

- [GitHub Repository](https://github.com/LinkedInLearning/hands-on-java-3080245/codespaces)

## Skills Covered

- Java

## Path Context

### In [[A Quick Start Guide to Java Programming]]
← [[Learning Java 17]] | **4 of 5** | [[Practice It- Java]] →

## Appears In

- [[A Quick Start Guide to Java Programming]]

## Related Courses

_Courses sharing skills:_

- [[Practice It- Java]] — Java
- [[Learning Java 17]] — Java
- [[Creating a Book Search Engine from Scratch Using Java and GitHub Copilot]] — Java
- [[Advanced Java- Hands-on with Streams, Lambda Expressions, Collections, Generics and More]] — Java
- [[Data Science for Java Developers]] — Java

---

[↑ Back to top](#)