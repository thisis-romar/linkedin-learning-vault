---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: eslint-integrating-with-your-workflow
url: "https://www.linkedin.com/learning/eslint-integrating-with-your-workflow"
duration_minutes: 45
duration: 45m
level: Advanced
updated: 5/19/2025
learners: 2834
skills:
  - ESLint
exercise_files: true
github: "https://github.com/LinkedInLearning/eslint-workflow-2254050/codespaces"
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQE3jSbsANgXew/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1668021071471?e=2147483647&amp;v=beta&amp;t=IOz9Xyg7J9QRHZXFAKpdJ72EWRBlAWc403E186y6F0I"
linkedin_topic: Software Development
learning_paths:
  - Advance Your JavaScript Skills
path_count: 1
tags:
  - course
  - topic/software-development
  - skill/eslint
status: not-started
created: 2026-04-20
---

![ESLint: Integrating with Your Workflow](https://media.licdn.com/dms/image/v2/C4E0DAQE3jSbsANgXew/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1668021071471?e=2147483647&amp;v=beta&amp;t=IOz9Xyg7J9QRHZXFAKpdJ72EWRBlAWc403E186y6F0I)

# ESLint: Integrating with Your Workflow

> Errors crop up in even the most experienced JavaScript developer's code. ESLint can help you catch these issues early and often; it gives you a heads-up when your JavaScript code might work, but isn't quite right. This popular tool highlights errors as you're coding and allows you to write and enforce custom rules. In this concise course—the first in the ESLint series—learn how to integrate ESLint

> [LinkedIn Learning](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow) | 45m | Advanced | 3K learners
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Sasha Vodnik]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/eslint-workflow-2254050/codespaces)

## Skills Covered

- ESLint

## Table of Contents

### Introduction

#### Customizing automatic error checking
> [LinkedIn Learning](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/customizing-automatic-error-checking-25668968?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/customizing-automatic-error-checking-25668968?u=76281980&t=0)** - ESLint is a really helpful tool for writing consistent code, but setting it up requires a lot of decision making.
>
> **[0:07](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/customizing-automatic-error-checking-25668968?u=76281980&t=7)** You want it to give you just the right amount of feedback on the style choices that matter to you to say nothing of incorporating it into your existing workflows.
>
> **[0:15](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/customizing-automatic-error-checking-25668968?u=76281980&t=15)** In this course, I'll show you how to add ESLint as a dependency.
>
> **[0:20](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/customizing-automatic-error-checking-25668968?u=76281980&t=20)** We'll configure it to use a popular style guide, and we'll add it to a build process.
>
> **[0:25](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/customizing-automatic-error-checking-25668968?u=76281980&t=25)** We'll also integrate ESLint into an editor so you can identify and fix issues before you build.
>
> **[0:31](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/customizing-automatic-error-checking-25668968?u=76281980&t=31)** After we're done, you'll be ready to add ESLint to any project.

> [!info]- Semantic Content
>
> **Definitions:** is a  (1)
> **Prerequisites:** configure (1)
> **Speakers:** - eslint (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/what-you-should-know?u=76281980&t=0)** - [Narrator] This course assumes you have intermediate to advanced level experience coding in front-end JavaScript, including modern ES6 syntax.
>
> **[0:08](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/what-you-should-know?u=76281980&t=8)** It also assumes you know how to work with npm projects and webpack at the command line.
>
> **[0:13](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/what-you-should-know?u=76281980&t=13)** If you need to brush up on working with packages and modules, search in our library for a course on npm.
>
> **[0:18](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/what-you-should-know?u=76281980&t=18)** If you need to review basic webpack work flow and configuration, check out a webpack course in our library.

> [!info]- Semantic Content
>
> **CLI Commands:** npm (2)
> **Env Vars:** es6 (1)
> **Tools:** command line (1)
> **Speakers:** - [narrator] (1)

#### Using the exercise files for this course
> [LinkedIn Learning](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-the-exercise-files-for-this-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-the-exercise-files-for-this-course?u=76281980&t=0)** - [Instructor] All of the files for this course are freely available as a GitHub repo at this URL.
>
> **[0:06](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-the-exercise-files-for-this-course?u=76281980&t=6)** The repository is built so that there are branches for each of the videos in the course.
>
> **[0:11](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-the-exercise-files-for-this-course?u=76281980&t=11)** You can use the branch popup to switch to a specific branch and take a look at how the code looked on a specific video.
>
> **[0:17](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-the-exercise-files-for-this-course?u=76281980&t=17)** For example, the branch titled 01_02b would show you the code on chapter one and the second video in that chapter.
>
> **[0:26](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-the-exercise-files-for-this-course?u=76281980&t=26)** If you see a letter B at the end of the name, it means that's how the code looked at the beginning of the video.
>
> **[0:33](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-the-exercise-files-for-this-course?u=76281980&t=33)** If you see an E at the end of the branch, that's how the code looked at the end of the video.
>
> **[0:38](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-the-exercise-files-for-this-course?u=76281980&t=38)** In this course, I go through installing and configuring ESLint.
>
> **[0:42](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-the-exercise-files-for-this-course?u=76281980&t=42)** If you want to, you can download any of these branches by first going to the branch and then hitting the clone or download button and downloading the ZIP file for the video that you want to follow along with.
>
> **[0:54](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-the-exercise-files-for-this-course?u=76281980&t=54)** You may need to install MPM as well as Git before you do this.
>
> **[0:59](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-the-exercise-files-for-this-course?u=76281980&t=59)** If you need more experience working with Git and GitHub, make sure you're familiar with Git and GitHub before taking this course.
>
> **[1:07](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-the-exercise-files-for-this-course?u=76281980&t=67)** Do a search for GitHub in our library.
>
> **[1:09](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-the-exercise-files-for-this-course?u=76281980&t=69)** If you're comfortable with this, then let's get started.

> [!info]- Semantic Content
>
> **CLI Commands:** git (3), make (1)
> **Code Keywords:** switch (1), this. (1), this, (1), let (1)
> **Tools:** github (4)
> **Env Vars:** url (1), zip (1), mpm (1)
> **Exercise Files:** github repo (1), zip file (1)
> **UI Navigation:** switch to (1)
> **Definitions:** means that (1)
> **Analogies:** for example (1)

#### Using GitHub Codespaces with this course
> [LinkedIn Learning](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-github-codespaces-with-this-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-github-codespaces-with-this-course?u=76281980&t=0)** - [Instructor] This is Ravi De Lobos senior staff instructor at LinkedIn Learning, and I'm going to show you how to work with LinkedIn Learning courses using GitHub Code Spaces.
>
> **[0:09](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-github-codespaces-with-this-course?u=76281980&t=9)** Code Spaces is a code editor in the cloud with the full power of Visual Studio Code.
>
> **[0:15](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-github-codespaces-with-this-course?u=76281980&t=15)** It allows for real world hands-on practice that mirrors software development in the workplace.
>
> **[0:20](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-github-codespaces-with-this-course?u=76281980&t=20)** This course has been adopted for use with GitHub code Spaces.
>
> **[0:24](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-github-codespaces-with-this-course?u=76281980&t=24)** Using code Spaces, you have everything you need to get going without needing complex installations or build tools.
>
> **[0:31](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-github-codespaces-with-this-course?u=76281980&t=31)** One click and you're ready to go.
>
> **[0:34](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-github-codespaces-with-this-course?u=76281980&t=34)** First, make sure you've signed up for a free GitHub account and that you've logged in.
>
> **[0:38](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-github-codespaces-with-this-course?u=76281980&t=38)** You just see your profile icon right here.
>
> **[0:41](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-github-codespaces-with-this-course?u=76281980&t=41)** When you go to the repository for one of our courses.
>
> **[0:44](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-github-codespaces-with-this-course?u=76281980&t=44)** Look for the code button.
>
> **[0:49](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-github-codespaces-with-this-course?u=76281980&t=49)** Click on Create code Space.
>
> **[0:52](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-github-codespaces-with-this-course?u=76281980&t=52)** The first time you open up a code space it might take a few minutes to create the virtual machine.
>
> **[0:58](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-github-codespaces-with-this-course?u=76281980&t=58)** Once it's done, you'll enter the code editor environment.
>
> **[1:02](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-github-codespaces-with-this-course?u=76281980&t=62)** If you're familiar with Visual Studio Code this is a special version of that editor running on GitHub's servers.
>
> **[1:09](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-github-codespaces-with-this-course?u=76281980&t=69)** The cloud editor's menu lives in a hamburger icon inside the activity bar the menu will let you see the keyboard shortcuts for your operating system.
>
> **[1:18](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-github-codespaces-with-this-course?u=76281980&t=78)** Let's find the shortcut for the command palette.
>
> **[1:21](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-github-codespaces-with-this-course?u=76281980&t=81)** Look in the hamburger menu under view and then look for the keyboard shortcut for your operating system.
>
> **[1:28](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-github-codespaces-with-this-course?u=76281980&t=88)** The activity bar has the most common tools you'll need to work with projects.
>
> **[1:33](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-github-codespaces-with-this-course?u=76281980&t=93)** You can, for example, show or hide the Explorer, do a search and replace for content, manage features of the repository and much more.
>
> **[1:46](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-github-codespaces-with-this-course?u=76281980&t=106)** By the way, if for any reason you lose the activity bar you can get it back using the command pallet.
>
> **[1:56](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-github-codespaces-with-this-course?u=76281980&t=116)** Your course can have one or more extensions pre-installed based on the course you're taking.
>
> **[2:01](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-github-codespaces-with-this-course?u=76281980&t=121)** Those can be found in the extensions panel.
>
> **[2:07](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-github-codespaces-with-this-course?u=76281980&t=127)** Because this is a browser it's easy to inadvertently close the browser window and lose the editor.
>
> **[2:13](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-github-codespaces-with-this-course?u=76281980&t=133)** If you do that don't panic code spaces saves everything you're doing on a virtual machine.
>
> **[2:19](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-github-codespaces-with-this-course?u=76281980&t=139)** You can always get the code space back for this repo by going to the code menu and finding your code space right here.
>
> **[2:32](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-github-codespaces-with-this-course?u=76281980&t=152)** Notice that it even remembered that I had opened the extensions panel.
>
> **[2:36](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-github-codespaces-with-this-course?u=76281980&t=156)** This is a sample of what a multi branch repository looks like, which is more common when you're working with web frameworks.
>
> **[2:43](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-github-codespaces-with-this-course?u=76281980&t=163)** If you go to the branch icon on the status bar you can see that there's more than one branch.
>
> **[2:48](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-github-codespaces-with-this-course?u=76281980&t=168)** You can switch to the different branches using this menu.
>
> **[2:52](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-github-codespaces-with-this-course?u=76281980&t=172)** The branches are named with the chapter and the video number you're watching.
>
> **[2:56](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-github-codespaces-with-this-course?u=76281980&t=176)** If you see a B at the end of the branch, that's how the the code looked at the beginning.
>
> **[3:00](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-github-codespaces-with-this-course?u=76281980&t=180)** If you see an E, that's how the code looked at the end.
>
> **[3:04](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-github-codespaces-with-this-course?u=76281980&t=184)** Let's switch to how the code looked on chapter two and the third video.
>
> **[3:10](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-github-codespaces-with-this-course?u=76281980&t=190)** I'll choose the beginning branch.
>
> **[3:13](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-github-codespaces-with-this-course?u=76281980&t=193)** As you work through a course, you might make some changes on a branch.
>
> **[3:17](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-github-codespaces-with-this-course?u=76281980&t=197)** I'm going to make a minor edit on the index at html file right here.
>
> **[3:25](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-github-codespaces-with-this-course?u=76281980&t=205)** I'm going to go ahead and save that, and you can see that I've modified this file because there's an M right here and the branch name now has an asterisk on it.
>
> **[3:36](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-github-codespaces-with-this-course?u=76281980&t=216)** If I try to switch to another branch that CASAS major changes Like say 0703E, I may see a dialog box like this.
>
> **[3:48](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-github-codespaces-with-this-course?u=76281980&t=228)** If you don't care about saving your changes you can simply hit the force checkout button.
>
> **[3:52](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-github-codespaces-with-this-course?u=76281980&t=232)** It will let you switch to that branch.
>
> **[3:55](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-github-codespaces-with-this-course?u=76281980&t=235)** You can then choose to discard the changes on this file.
>
> **[4:01](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-github-codespaces-with-this-course?u=76281980&t=241)** Forking lets you create your own copy of the repository on your account so that you can keep any changes that you've made.
>
> **[4:08](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-github-codespaces-with-this-course?u=76281980&t=248)** even if you've deleted the code space.
>
> **[4:10](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-github-codespaces-with-this-course?u=76281980&t=250)** To create your own fork, you can click on the fork button on the repository.
>
> **[4:17](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-github-codespaces-with-this-course?u=76281980&t=257)** I'm going to hit Create fork.
>
> **[4:21](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-github-codespaces-with-this-course?u=76281980&t=261)** I have my own copy of this repository, and if I want to I can start a new coach space on that fork.
>
> **[4:33](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-github-codespaces-with-this-course?u=76281980&t=273)** This fork version is almost exactly like the original repository but it will let you push your own changes.
>
> **[4:40](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-github-codespaces-with-this-course?u=76281980&t=280)** Notice that the URL of the repository is slightly different.
>
> **[4:44](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-github-codespaces-with-this-course?u=76281980&t=284)** Let's go ahead and make a simple change to this file right here.
>
> **[4:54](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-github-codespaces-with-this-course?u=76281980&t=294)** I'm going to save it.
>
> **[4:57](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-github-codespaces-with-this-course?u=76281980&t=297)** You'll note that there is an M right here, as well as an asterisk on this branch in the source control panel you can also see a one for the change that we just made.
>
> **[5:08](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-github-codespaces-with-this-course?u=76281980&t=308)** Let's go ahead and try to commit this change.
>
> **[5:14](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-github-codespaces-with-this-course?u=76281980&t=314)** I'm going to ahead the commit button and I'll ask it to go ahead and space the changes and then I'm going to hit this button here to commit this onto my own version of the repo.
>
> **[5:30](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-github-codespaces-with-this-course?u=76281980&t=330)** I'll hit okay.
>
> **[5:32](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-github-codespaces-with-this-course?u=76281980&t=332)** You can also let it go ahead and run, get fetch.
>
> **[5:35](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-github-codespaces-with-this-course?u=76281980&t=335)** That way it'll automatically sync with your forked repo.
>
> **[5:39](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-github-codespaces-with-this-course?u=76281980&t=339)** Now that change will be stored in your own version of this repository.
>
> **[5:44](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-github-codespaces-with-this-course?u=76281980&t=344)** Don't worry if you forget the fork, a repo and then try to push changes.
>
> **[5:48](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-github-codespaces-with-this-course?u=76281980&t=348)** Code spaces will also ask you if you want to create a fork automatically.
>
> **[5:53](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-github-codespaces-with-this-course?u=76281980&t=353)** Some courses will let you work with life previews or create other ports so that you can have a web view of what you're doing.
>
> **[6:01](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-github-codespaces-with-this-course?u=76281980&t=361)** This is managed through the ports panel in the status bar.
>
> **[6:04](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-github-codespaces-with-this-course?u=76281980&t=364)** Right now, there are no ports forwarded but if I open up the live server extension you can see a preview of that file.
>
> **[6:18](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-github-codespaces-with-this-course?u=76281980&t=378)** Now, if we go back to the code space to manage ports you can click on the icon in the status bar and take a look at the currently available ports.
>
> **[6:28](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-github-codespaces-with-this-course?u=76281980&t=388)** If you want to open this up in a browser you can click right here, look for additional core specific tips from the instructor.
>
> **[6:35](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-github-codespaces-with-this-course?u=76281980&t=395)** Now, let's get back to the course.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), switch (4), this. (1)
> **UI Navigation:** click on (3), switch to (3), go to (2)
> **Tools:** github (4), visual studio (2)
> **CLI Commands:** make (4), find (1)
> **Definitions:** is a  (4), is an  (1)
> **Env Vars:** casas (1), url (1)
> **Cross-References:** go back to (1)
> **Analogies:** for example (1)


### 1. Integrating ESLint with Your Workflow

#### Setting up a project with ESLint
> [LinkedIn Learning](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/setting-up-a-project-with-eslint?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/setting-up-a-project-with-eslint?u=76281980&t=0)** - [Instructor] It's pretty straightforward to add ESLint to a project using a package manager.
>
> **[0:05](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/setting-up-a-project-with-eslint?u=76281980&t=5)** In the folder for this video, I can add ESLint as a dependency.
>
> **[0:09](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/setting-up-a-project-with-eslint?u=76281980&t=9)** With npm install eslint and then I'm going to do a save dev.
>
> **[0:15](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/setting-up-a-project-with-eslint?u=76281980&t=15)** Save it as a dependency.
>
> **[0:17](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/setting-up-a-project-with-eslint?u=76281980&t=17)** So this is actually installing that ESLint package for this project.
>
> **[0:22](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/setting-up-a-project-with-eslint?u=76281980&t=22)** And I'm not worried about warnings here so we're going to go on as long as they're not errors.
>
> **[0:26](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/setting-up-a-project-with-eslint?u=76281980&t=26)** And next, I want to use npx to run ESLint with the init flag.
>
> **[0:31](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/setting-up-a-project-with-eslint?u=76281980&t=31)** So that's npx eslint double dash init.
>
> **[0:36](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/setting-up-a-project-with-eslint?u=76281980&t=36)** And that's going to kick off the ESLint set up wizard.
>
> **[0:40](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/setting-up-a-project-with-eslint?u=76281980&t=40)** So the first choice covers how I want to use ESLint.
>
> **[0:43](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/setting-up-a-project-with-eslint?u=76281980&t=43)** For now, I just want to check syntax and find problems without getting into my code style.
>
> **[0:49](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/setting-up-a-project-with-eslint?u=76281980&t=49)** So, I'm just going to press enter and take that default.
>
> **[0:52](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/setting-up-a-project-with-eslint?u=76281980&t=52)** Next is a choice about which module style ESLint should expect.
>
> **[0:57](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/setting-up-a-project-with-eslint?u=76281980&t=57)** Import export is fairly common.
>
> **[0:59](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/setting-up-a-project-with-eslint?u=76281980&t=59)** But if your project is used in common JS syntax or no modules at all, you can specify that here.
>
> **[1:05](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/setting-up-a-project-with-eslint?u=76281980&t=65)** I'm going to use that default, press enter.
>
> **[1:07](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/setting-up-a-project-with-eslint?u=76281980&t=67)** And next up is frameworks.
>
> **[1:10](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/setting-up-a-project-with-eslint?u=76281980&t=70)** ESLint can provide framework-specific integration for both react and view.
>
> **[1:14](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/setting-up-a-project-with-eslint?u=76281980&t=74)** My project doesn't use either of those so I'm going to choose none of these and press enter.
>
> **[1:21](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/setting-up-a-project-with-eslint?u=76281980&t=81)** If you choose one of those others, you will be presented with additional framework-related questions later in the config process.
>
> **[1:27](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/setting-up-a-project-with-eslint?u=76281980&t=87)** Next is a question about typescript use.
>
> **[1:30](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/setting-up-a-project-with-eslint?u=76281980&t=90)** If you're using it, you can specify that here so ESLint can parse your code as TypeScript rather than as you know, a JavaScript.
>
> **[1:37](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/setting-up-a-project-with-eslint?u=76281980&t=97)** I'm not using TypeScript in this project and the default here is N, 'cause we have that capital N so I can just hit enter.
>
> **[1:44](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/setting-up-a-project-with-eslint?u=76281980&t=104)** Next, I need to specify whether my project contains front-end code, which runs in a browser or back-end code that's executed in the node environment.
>
> **[1:52](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/setting-up-a-project-with-eslint?u=76281980&t=112)** My project is front-end code.
>
> **[1:54](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/setting-up-a-project-with-eslint?u=76281980&t=114)** So I'll keep that default selection and press enter.
>
> **[1:57](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/setting-up-a-project-with-eslint?u=76281980&t=117)** And next, it's a question about the format of the config file.
>
> **[2:01](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/setting-up-a-project-with-eslint?u=76281980&t=121)** ESLint needs to save all the configuration options I just set.
>
> **[2:04](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/setting-up-a-project-with-eslint?u=76281980&t=124)** And I can choose from a few different formats.
>
> **[2:07](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/setting-up-a-project-with-eslint?u=76281980&t=127)** If you're planning to share the config file that ESLint generates with other people working on the same project, or if you're more comfortable in one format or another, you might have an opinion about the format.
>
> **[2:18](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/setting-up-a-project-with-eslint?u=76281980&t=138)** But you can store the same data in all of them.
>
> **[2:20](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/setting-up-a-project-with-eslint?u=76281980&t=140)** And I'm going to accept that default and generate a JavaScript file.
>
> **[2:25](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/setting-up-a-project-with-eslint?u=76281980&t=145)** And I get this message that eslintrc.js file has been created.
>
> **[2:31](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/setting-up-a-project-with-eslint?u=76281980&t=151)** This is the ESLint configuration for my project.
>
> **[2:34](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/setting-up-a-project-with-eslint?u=76281980&t=154)** So, I want to look at my new file list now.
>
> **[2:37](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/setting-up-a-project-with-eslint?u=76281980&t=157)** So I'm going to clear my terminal first.
>
> **[2:40](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/setting-up-a-project-with-eslint?u=76281980&t=160)** And then I'm going to use an ls and I'm going to do a -a so I can see my dot files as well.
>
> **[2:47](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/setting-up-a-project-with-eslint?u=76281980&t=167)** And right over here, I've got that .eslintrc.js file that was just created.
>
> **[2:55](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/setting-up-a-project-with-eslint?u=76281980&t=175)** And over in my editor, I've got my package that JSON file open.
>
> **[3:00](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/setting-up-a-project-with-eslint?u=76281980&t=180)** And first off, I can see that eslint has been added as a dev dependency.
>
> **[3:04](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/setting-up-a-project-with-eslint?u=76281980&t=184)** And then I've also got my .eslintrc file.
>
> **[3:09](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/setting-up-a-project-with-eslint?u=76281980&t=189)** And if I open that up, I have a module that export statement with a set of keys.
>
> **[3:14](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/setting-up-a-project-with-eslint?u=76281980&t=194)** There's an env for the environment.
>
> **[3:18](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/setting-up-a-project-with-eslint?u=76281980&t=198)** And a few other configuration options.
>
> **[3:21](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/setting-up-a-project-with-eslint?u=76281980&t=201)** And then at the bottom, there's this rules key.
>
> **[3:24](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/setting-up-a-project-with-eslint?u=76281980&t=204)** And this is where I can specify any custom rules that I want ESLint to enforce.
>
> **[3:29](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/setting-up-a-project-with-eslint?u=76281980&t=209)** For now, with this default configuration, this extends key is specifying the ESLint-recommended set of rules.
>
> **[3:36](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/setting-up-a-project-with-eslint?u=76281980&t=216)** So any lint I do on my project will be based on those recommendations.
>
> **[3:43](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/setting-up-a-project-with-eslint?u=76281980&t=223)** ESLint allows you to configure a lot of rules and provides extensive documentation on each rule.
>
> **[3:49](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/setting-up-a-project-with-eslint?u=76281980&t=229)** On ESLint website, the rules with check marks next to them are included in the default recommended configuration.
>
> **[3:58](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/setting-up-a-project-with-eslint?u=76281980&t=238)** Back in my package.json, I can create a command to run ESLint on the current project.
>
> **[4:05](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/setting-up-a-project-with-eslint?u=76281980&t=245)** I'm going to use link as the name for my command.
>
> **[4:08](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/setting-up-a-project-with-eslint?u=76281980&t=248)** So, after the existing build command, 'cause my project uses webpack, I'm going to add another command called lint.
>
> **[4:18](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/setting-up-a-project-with-eslint?u=76281980&t=258)** Now the syntax for using ESLint is the term ESLint followed by one or more files or folders to lint.
>
> **[4:24](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/setting-up-a-project-with-eslint?u=76281980&t=264)** I'm going to specify the source folder as rc which contains my index.js file.
>
> **[4:29](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/setting-up-a-project-with-eslint?u=76281980&t=269)** So, my command here is going to be eslint space src.
>
> **[4:35](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/setting-up-a-project-with-eslint?u=76281980&t=275)** And I'll save those changes.
>
> **[4:37](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/setting-up-a-project-with-eslint?u=76281980&t=277)** Now, if you want to try out setting up ESLint on a project of your own, this is a good time to pause the video and give that a go.
>
> **[4:44](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/setting-up-a-project-with-eslint?u=76281980&t=284)** Then you can join back up and we can walk through testing it out.
>
> **[4:48](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/setting-up-a-project-with-eslint?u=76281980&t=288)** And so, returning to the terminal.
>
> **[4:52](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/setting-up-a-project-with-eslint?u=76281980&t=292)** I'm going to clear that.
>
> **[4:54](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/setting-up-a-project-with-eslint?u=76281980&t=294)** And I'm going to try npm run lint.
>
> **[5:00](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/setting-up-a-project-with-eslint?u=76281980&t=300)** And I've got an error message here but this is actually a good thing.
>
> **[5:04](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/setting-up-a-project-with-eslint?u=76281980&t=304)** Because if I dig up above the error messages, I have a very descriptive note here.
>
> **[5:12](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/setting-up-a-project-with-eslint?u=76281980&t=312)** And this is actually referencing an eslint rule.
>
> **[5:15](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/setting-up-a-project-with-eslint?u=76281980&t=315)** No unused vars.
>
> **[5:17](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/setting-up-a-project-with-eslint?u=76281980&t=317)** So, again, eslint can configure tons of things in your project.
>
> **[5:21](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/setting-up-a-project-with-eslint?u=76281980&t=321)** Here, one of the default rules is that you shouldn't declare a variable unless your code actually use it.
>
> **[5:27](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/setting-up-a-project-with-eslint?u=76281980&t=327)** And it's flagging that I declare this very rule text but didn't actually use it in my code.
>
> **[5:31](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/setting-up-a-project-with-eslint?u=76281980&t=331)** So this is actually really useful and this is why we love ESLint.
>
> **[5:35](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/setting-up-a-project-with-eslint?u=76281980&t=335)** So, I'm going to go back to my code.
>
> **[5:38](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/setting-up-a-project-with-eslint?u=76281980&t=338)** And in that source folder, I'm going to go open up index.js.
>
> **[5:42](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/setting-up-a-project-with-eslint?u=76281980&t=342)** There is my text variable.
>
> **[5:45](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/setting-up-a-project-with-eslint?u=76281980&t=345)** And just so I can use this and see how this affects the error, I'm going to go ahead and add console.log text.
>
> **[5:54](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/setting-up-a-project-with-eslint?u=76281980&t=354)** Save that.
>
> **[5:56](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/setting-up-a-project-with-eslint?u=76281980&t=356)** And then back in the terminal, I'll go ahead and reissue that last command npm run lint.
>
> **[6:02](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/setting-up-a-project-with-eslint?u=76281980&t=362)** The command execute it and back at the prompt.
>
> **[6:05](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/setting-up-a-project-with-eslint?u=76281980&t=365)** So this time, there were no issues at all.
>
> **[6:08](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/setting-up-a-project-with-eslint?u=76281980&t=368)** So that means that the code in my file follows all the rules that ESLint is currently configured to enforce.

> [!info]- Semantic Content
>
> **CLI Commands:** npm (3), npx (2), find (1), node (1), ls (1)
> **File Paths:** eslintrc.js (2), index.js (2), package.json (1)
> **Code Keywords:** module (2), default. (1), default, (1), extends (1)
> **Definitions:** is a  (3), means that (1)
> **Prerequisites:** configure (2), install (1), set up (1)
> **Tools:** terminal (3)
> **Cross-References:** later in (1), go back to (1)
> **Best Practices:** recommended (2)

#### Enforcing code style with ESLint
> [LinkedIn Learning](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/enforcing-code-style-with-eslint?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/enforcing-code-style-with-eslint?u=76281980&t=0)** - [Instructor] In addition to checking syntax and finding problems, ESLint can enforce a code style that I specify.
>
> **[0:07](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/enforcing-code-style-with-eslint?u=76281980&t=7)** I can specify my own rules within the rules key, but it's pretty common to use a widely used style guide instead as a starting point.
>
> **[0:16](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/enforcing-code-style-with-eslint?u=76281980&t=16)** Now I already have ESLint configured for my project, and I could just make changes directly to the .eslintrc file to enable checking for style.
>
> **[0:27](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/enforcing-code-style-with-eslint?u=76281980&t=27)** But I'm going to run through the init step again to explore what's different when I specify that I want to enforce a code style.
>
> **[0:35](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/enforcing-code-style-with-eslint?u=76281980&t=35)** Responding to those prompts also keeps my hands off the eslintrc file, which eliminates configuration issues due to typos.
>
> **[0:44](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/enforcing-code-style-with-eslint?u=76281980&t=44)** To reinitialize ESLint, I use npx eslint --init.
>
> **[0:52](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/enforcing-code-style-with-eslint?u=76281980&t=52)** Now, I want to do a basic front-end setup without a framework, so I'm going to select most of the defaults, but the first choice covers how I want to use ESLint, and this is where I get to talk about code style.
>
> **[1:03](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/enforcing-code-style-with-eslint?u=76281980&t=63)** I want ESLint to check syntax.
>
> **[1:05](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/enforcing-code-style-with-eslint?u=76281980&t=65)** I want it to find problems, and I want it to enforce that code style.
>
> **[1:10](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/enforcing-code-style-with-eslint?u=76281980&t=70)** I'm going to choose that third option, and press Enter.
>
> **[1:14](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/enforcing-code-style-with-eslint?u=76281980&t=74)** Now I'm going to use JavaScript modules, so I'll press Enter here for the default.
>
> **[1:18](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/enforcing-code-style-with-eslint?u=76281980&t=78)** I'm not using a framework, so down to None of these, and select that.
>
> **[1:23](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/enforcing-code-style-with-eslint?u=76281980&t=83)** I'm not using TypeScript, so I can press Enter to take the default here.
>
> **[1:27](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/enforcing-code-style-with-eslint?u=76281980&t=87)** And I'm writing front-end code, so I'm going to press Enter to select browser.
>
> **[1:33](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/enforcing-code-style-with-eslint?u=76281980&t=93)** Now because I chose to enforce code style earlier in the configuration, ESLint asks how I'd like to define a style for my project with the three options.
>
> **[1:42](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/enforcing-code-style-with-eslint?u=76281980&t=102)** First, I can select a popular style guide, such as Airbnb.
>
> **[1:46](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/enforcing-code-style-with-eslint?u=76281980&t=106)** If my project uses a popular style guide, specifying it during configuration allows me to quickly setup ESLint rather than specifying individual rules.
>
> **[1:56](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/enforcing-code-style-with-eslint?u=76281980&t=116)** If I'm not using a common style guide though, there are a couple of other options to get me setup as quickly as possible.
>
> **[2:02](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/enforcing-code-style-with-eslint?u=76281980&t=122)** I can answer questions about my style and allow ESLint to create rules based on my preferences.
>
> **[2:08](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/enforcing-code-style-with-eslint?u=76281980&t=128)** I can also ask ESLint to simply inspect my files and create rules based on my coding style.
>
> **[2:14](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/enforcing-code-style-with-eslint?u=76281980&t=134)** For instance, how many spaces I use for indents or whether I start a new line before or after opening curly braces.
>
> **[2:21](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/enforcing-code-style-with-eslint?u=76281980&t=141)** Now for this project, I want to use a popular style guide.
>
> **[2:24](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/enforcing-code-style-with-eslint?u=76281980&t=144)** So I'm going to keep the default selected, and press Enter.
>
> **[2:28](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/enforcing-code-style-with-eslint?u=76281980&t=148)** ESLint offers quick setup for three commonly used style guides, Airbnb, standard, and Google.
>
> **[2:36](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/enforcing-code-style-with-eslint?u=76281980&t=156)** If you're working on a big project, you should check which style guide is in use before selecting one.
>
> **[2:41](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/enforcing-code-style-with-eslint?u=76281980&t=161)** But for your own project, you can compare the styles and make your own choice.
>
> **[2:46](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/enforcing-code-style-with-eslint?u=76281980&t=166)** I'm a fan of the Airbnb style guide, so I'm going to keep that selected, and press Enter.
>
> **[2:51](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/enforcing-code-style-with-eslint?u=76281980&t=171)** Next is a question about the format of my config file, and I'm going to once again accept the default and generate a JavaScript file.
>
> **[2:59](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/enforcing-code-style-with-eslint?u=76281980&t=179)** Now the Airbnb style guide has a couple of dependencies, so I'll press Enter here to install those.
>
> **[3:07](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/enforcing-code-style-with-eslint?u=76281980&t=187)** And then, switching to my editor and checking out my .eslintrc.js file, I can see here that the value of extends has changed to airbnb-base.
>
> **[3:20](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/enforcing-code-style-with-eslint?u=76281980&t=200)** So this is based on the popular style guide that I chose in the init.
>
> **[3:25](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/enforcing-code-style-with-eslint?u=76281980&t=205)** Let's test this out.
>
> **[3:27](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/enforcing-code-style-with-eslint?u=76281980&t=207)** Before I changed my configuration, ESLint was linting only against the recommended syntax and code problems.
>
> **[3:35](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/enforcing-code-style-with-eslint?u=76281980&t=215)** Back in the terminal, I'm going to clear, and I'm going to use the lint command I have setup in npm, so npm run lint.
>
> **[3:45](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/enforcing-code-style-with-eslint?u=76281980&t=225)** And now, I'm getting some interesting errors.
>
> **[3:50](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/enforcing-code-style-with-eslint?u=76281980&t=230)** The first one is a actual error, and it's flagging that I've created a variable, but I've never actually made a change to it so according to the style rules from Airbnb, that should just be declared as a const to be very clear in the code that that is meant to be a constant that's not changed.
>
> **[4:11](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/enforcing-code-style-with-eslint?u=76281980&t=251)** And I think that's a smart rule.
>
> **[4:13](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/enforcing-code-style-with-eslint?u=76281980&t=253)** And as long as I'm using the Airbnb style guide, my code won't successfully lint unless I follow it.
>
> **[4:20](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/enforcing-code-style-with-eslint?u=76281980&t=260)** Now the second one is about my console.log statement, and notice that this is just a warning.
>
> **[4:24](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/enforcing-code-style-with-eslint?u=76281980&t=264)** It's not going to keep my project from building, but it is a flag that's going to get raised whenever I build.
>
> **[4:32](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/enforcing-code-style-with-eslint?u=76281980&t=272)** Airbnb recommends not using any console statements, like console.log, in production.
>
> **[4:38](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/enforcing-code-style-with-eslint?u=76281980&t=278)** Back in my code, I'm going to open up the index.js file in the source folder, and I'm going to change that let to a const.
>
> **[4:50](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/enforcing-code-style-with-eslint?u=76281980&t=290)** And I'm going to save.
>
> **[4:52](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/enforcing-code-style-with-eslint?u=76281980&t=292)** And then back in the terminal, I'm going to clear, and I'm going to run that previous command again.
>
> **[4:59](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/enforcing-code-style-with-eslint?u=76281980&t=299)** I still have that warning, which I'm fine with, but I have no errors, meaning that my code passes linting.
>
> **[5:06](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/enforcing-code-style-with-eslint?u=76281980&t=306)** Now if you wrote your code even slightly differently than I did, you may have additional errors flagged when you run your lint command.
>
> **[5:14](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/enforcing-code-style-with-eslint?u=76281980&t=314)** You can look up the rules at [eslint.org](https://eslint.org) and tweak your code to resolve any remaining issues.
>
> **[5:20](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/enforcing-code-style-with-eslint?u=76281980&t=320)** For instance, right here, I see in a lighter color, this is the name of the actual rule for ESLint that's flagged for this warning, no-console.
>
> **[5:32](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/enforcing-code-style-with-eslint?u=76281980&t=332)** I can go over to the rules page, I can search the docs for no-console, and I can actually look up what that rules means.
>
> **[5:43](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/enforcing-code-style-with-eslint?u=76281980&t=343)** And we have some use cases here showing code that passes and code that fails.
>
> **[5:50](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/enforcing-code-style-with-eslint?u=76281980&t=350)** And so now, in addition to being checked for syntax and code problems, my code is being checked for adherence to the Airbnb style guide.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2), npm (2), npx (1), find (1)
> **Code Keywords:** let (2), const (2), default. (1), extends (1)
> **Prerequisites:** setup (5), install (1)
> **Definitions:** is a  (3)
> **Analogies:** for instance (2), such as (1)
> **Warnings:** warning (3)
> **File Paths:** eslintrc.js (1), index.js (1)
> **Tools:** terminal (2)

#### Integrating ESLint with webpack
> [LinkedIn Learning](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/integrating-eslint-with-webpack?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/integrating-eslint-with-webpack?u=76281980&t=0)** - [Instructor] Among the many tools available for building modern JavaScript apps, Webpack is one of the most widely used for front end code.
>
> **[0:08](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/integrating-eslint-with-webpack?u=76281980&t=8)** You can run ESLint from NPM using command inpackage.json.
>
> **[0:12](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/integrating-eslint-with-webpack?u=76281980&t=12)** But if you're using Webpack, you can also incorporate ESLint directly into the Webpack build process.
>
> **[0:19](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/integrating-eslint-with-webpack?u=76281980&t=19)** This project uses Webpack and Babel.
>
> **[0:23](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/integrating-eslint-with-webpack?u=76281980&t=23)** And it includes a webpack.config.js file with build options for both of these tools.
>
> **[0:29](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/integrating-eslint-with-webpack?u=76281980&t=29)** Now, over in my packag.json, I have a separate lint command for ESLint.
>
> **[0:34](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/integrating-eslint-with-webpack?u=76281980&t=34)** But I want to incorporate ESLint into the Webpack config, so it's executed automatically as part of the build process.
>
> **[0:41](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/integrating-eslint-with-webpack?u=76281980&t=41)** And I can do that by making some changes to my webpack.config.js.
>
> **[0:47](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/integrating-eslint-with-webpack?u=76281980&t=47)** Webpack supports loaders for a number of different tools, including ESLint.
>
> **[0:53](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/integrating-eslint-with-webpack?u=76281980&t=53)** Down here in the linting and testing section, there's a reference to that in the documentation on webpack.[js.org](https://js.org).
>
> **[1:01](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/integrating-eslint-with-webpack?u=76281980&t=61)** A loader is going to let me pretty easily add and configure ESLint to my Webpack configuration.
>
> **[1:08](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/integrating-eslint-with-webpack?u=76281980&t=68)** And that package name is eslint-loader.
>
> **[1:12](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/integrating-eslint-with-webpack?u=76281980&t=72)** So I'm going to add that to my project first, and then save it.
>
> **[1:17](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/integrating-eslint-with-webpack?u=76281980&t=77)** So that's npm install (mumbles) eslint
>
> **[1:21](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/integrating-eslint-with-webpack?u=76281980&t=81)** - loader
>
> **[1:23](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/integrating-eslint-with-webpack?u=76281980&t=83)** - -save-dev.
>
> **[1:28](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/integrating-eslint-with-webpack?u=76281980&t=88)** Now, to configure eslint in Webpack, I'm going to open webpack.config.js.
>
> **[1:36](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/integrating-eslint-with-webpack?u=76281980&t=96)** In the rules section down here, I already have a babel-loader configuration.
>
> **[1:42](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/integrating-eslint-with-webpack?u=76281980&t=102)** Now if I go to the GitHub repo for eslint-loader, there's documentation for how to use it.
>
> **[1:49](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/integrating-eslint-with-webpack?u=76281980&t=109)** And that includes some code snippets that show usage.
>
> **[1:55](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/integrating-eslint-with-webpack?u=76281980&t=115)** Now I want to make sure that my files are linted before any transpiling happens with Babel.
>
> **[2:01](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/integrating-eslint-with-webpack?u=76281980&t=121)** And down here I've got an example of how to use enforce: 'pre' to make sure that eslint happens before other things.
>
> **[2:09](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/integrating-eslint-with-webpack?u=76281980&t=129)** So you can simply copy these six lines of code to create a new element in the rules array.
>
> **[2:16](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/integrating-eslint-with-webpack?u=76281980&t=136)** I've also got these in the repo for the exercise files for this video.
>
> **[2:21](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/integrating-eslint-with-webpack?u=76281980&t=141)** If you go over to the Wiki tab, and then click the 01.03 link.
>
> **[2:27](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/integrating-eslint-with-webpack?u=76281980&t=147)** I've got a code snippet here all ready to go.
>
> **[2:30](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/integrating-eslint-with-webpack?u=76281980&t=150)** So I'm just going to copy that, and then back over in my webpack.config file, within the rules before the existing code, so right after that opening square bracket, I'm going to paste this in.
>
> **[2:43](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/integrating-eslint-with-webpack?u=76281980&t=163)** And I've already got that comma after it.
>
> **[2:45](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/integrating-eslint-with-webpack?u=76281980&t=165)** So we've got that in force: 'pre' at the beginning to make sure that the eslintlint-loader runs before the Babel loader.
>
> **[2:55](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/integrating-eslint-with-webpack?u=76281980&t=175)** And what this is saying is, when the Webpack build runs, it's going to look for js files using this regular expression, and specifically exclude anything that's in the node_modules folder, because we don't need to bother with that.
>
> **[3:10](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/integrating-eslint-with-webpack?u=76281980&t=190)** And then it's going to process them using this eslint-loader module, with the eslint configuration options that I already have set up in my eslintrc file.
>
> **[3:22](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/integrating-eslint-with-webpack?u=76281980&t=202)** So I'll save those changes.
>
> **[3:24](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/integrating-eslint-with-webpack?u=76281980&t=204)** And then in the terminal, going to clear, and I'm going to do an npm run build, and build is the name... Switching back over here package.json.
>
> **[3:35](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/integrating-eslint-with-webpack?u=76281980&t=215)** I have the script called build.
>
> **[3:36](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/integrating-eslint-with-webpack?u=76281980&t=216)** And so that's what I'm running here, it's just webpack.
>
> **[3:40](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/integrating-eslint-with-webpack?u=76281980&t=220)** So npm run build.
>
> **[3:43](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/integrating-eslint-with-webpack?u=76281980&t=223)** We've got some progress indicators telling us what's going on.
>
> **[3:47](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/integrating-eslint-with-webpack?u=76281980&t=227)** And after those build messages, I see ESLint throwing a warning right here.
>
> **[3:54](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/integrating-eslint-with-webpack?u=76281980&t=234)** So this is a warning about the console.log statement because my style guide calls for eliminating console statements.
>
> **[4:01](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/integrating-eslint-with-webpack?u=76281980&t=241)** But because that rule throws a warning rather than an error, this build is still successful, and I'm good with that.
>
> **[4:08](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/integrating-eslint-with-webpack?u=76281980&t=248)** And so I can go back over to my code.
>
> **[4:11](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/integrating-eslint-with-webpack?u=76281980&t=251)** And so my source file is building to my dist folder, and I have this new file here.
>
> **[4:16](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/integrating-eslint-with-webpack?u=76281980&t=256)** And this is the result of that build process and it includes that console.log statement in it.
>
> **[4:21](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/integrating-eslint-with-webpack?u=76281980&t=261)** So I can see that my build was successful.
>
> **[4:24](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/integrating-eslint-with-webpack?u=76281980&t=264)** And I can see in my output that I actually have eslint running as part of my build now.

> [!info]- Semantic Content
>
> **File Paths:** webpack.config.js (3), inpackage.json (1), packag.json (1), webpack.js (1), webpack.config (1)
> **CLI Commands:** npm (4), make (3)
> **Prerequisites:** configure (2), install (1), set up (1)
> **Warnings:** warning (3)
> **Code Keywords:** let (1), module (1)
> **Tools:** github (1), terminal (1)
> **Exercise Files:** github repo (1), exercise files (1)
> **Speakers:** - [instructor] (1), - loader (1)

#### Using ESLint in an editor
> [LinkedIn Learning](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-eslint-in-an-editor?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-eslint-in-an-editor?u=76281980&t=0)** - [Instructor] Automating ESLint within a build process makes it really easy to enforce styles before deploying code.
>
> **[0:06](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-eslint-in-an-editor?u=76281980&t=6)** But you can also use ESLint earlier in your development process to flag issues before you even commit them.
>
> **[0:13](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-eslint-in-an-editor?u=76281980&t=13)** All the major code editors, Visual Studio Code, Sublime Text, and ATOM, as well as a lot of other IDEs, support extensions that check code against ESLint rules while you're writing it, and flag issues right in the editor window.
>
> **[0:30](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-eslint-in-an-editor?u=76281980&t=30)** I'm using Visual Studio Code.
>
> **[0:32](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-eslint-in-an-editor?u=76281980&t=32)** To integrate ESLint, I can just add an extension.
>
> **[0:35](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-eslint-in-an-editor?u=76281980&t=35)** So I'll open up extensions, and I'll search on ESLint.
>
> **[0:40](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-eslint-in-an-editor?u=76281980&t=40)** And the first one that shows up is the ESLint extension by Dirk Baeumer.
>
> **[0:45](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-eslint-in-an-editor?u=76281980&t=45)** So it's always a good idea to check the number of installs and the rating.
>
> **[0:49](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-eslint-in-an-editor?u=76281980&t=49)** And this one after seven million installs, it has about a four and a half star rating and that's a great sign.
>
> **[0:54](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-eslint-in-an-editor?u=76281980&t=54)** And in fact, I've used this one before and it is.
>
> **[0:57](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-eslint-in-an-editor?u=76281980&t=57)** So I'll hit install And now it's enabled.
>
> **[1:02](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-eslint-in-an-editor?u=76281980&t=62)** So from now on, whenever I open a JavaScript file that's associated with a .eslint RC file, the ESLint extension will link the file and flag any issues right in the editor window.
>
> **[1:14](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-eslint-in-an-editor?u=76281980&t=74)** So let's test that out.
>
> **[1:15](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-eslint-in-an-editor?u=76281980&t=75)** I'm going to go back to the Explorer, and I'm going to open up, close that up, I'm going to open up my index.js file.
>
> **[1:26](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-eslint-in-an-editor?u=76281980&t=86)** And I can see here that the console.log statement has a yellow wavy line underneath it.
>
> **[1:32](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-eslint-in-an-editor?u=76281980&t=92)** And if I hover over that, I see the explanation that my ESLint rules call for eliminating console statements.
>
> **[1:39](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-eslint-in-an-editor?u=76281980&t=99)** Now if you don't see that.
>
> **[1:41](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-eslint-in-an-editor?u=76281980&t=101)** the settings for your extension may need a little bit of adjustment.
>
> **[1:45](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-eslint-in-an-editor?u=76281980&t=105)** For VS Code, in particular, you need to go into the Preferences.
>
> **[1:49](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-eslint-in-an-editor?u=76281980&t=109)** So I usually open up the control panel and I can do Preferences, Open Settings, JSON, take me to the JSON file.
>
> **[2:03](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-eslint-in-an-editor?u=76281980&t=123)** And if you go to the wiki page for this video, there is a Visual Studio Code configuration snippet that you can just add to that JSON configuration.
>
> **[2:16](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-eslint-in-an-editor?u=76281980&t=136)** And if that ESLint integration isn't working, then adding this snippet to your JSON config may help.
>
> **[2:25](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-eslint-in-an-editor?u=76281980&t=145)** But mine's working okay, I'm not going to add that in.
>
> **[2:28](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-eslint-in-an-editor?u=76281980&t=148)** So ESLint can flag a whole wide variety of errors, and being reminded of those as you code can be really helpful.
>
> **[2:36](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-eslint-in-an-editor?u=76281980&t=156)** So I'm going to write some bad code just to test things out.
>
> **[2:39](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-eslint-in-an-editor?u=76281980&t=159)** And this is another thing I've included in the wiki for this video.
>
> **[2:44](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-eslint-in-an-editor?u=76281980&t=164)** So just this three line force statement, I'm going to copy and paste in here.
>
> **[2:50](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-eslint-in-an-editor?u=76281980&t=170)** And immediately when I paste that in, I see a lot of underlining and it's in red, this time, not in yellow, Also in the file list over here on the left in the Explorer, the file name is in red and I see this number five.
>
> **[3:02](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-eslint-in-an-editor?u=76281980&t=182)** And that indicates the number of issues this file has.
>
> **[3:06](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-eslint-in-an-editor?u=76281980&t=186)** And also, the containing folder has a red dot, meaning that it contains files that have issues.
>
> **[3:12](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-eslint-in-an-editor?u=76281980&t=192)** So my for loop starts with a value of 10.
>
> **[3:15](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-eslint-in-an-editor?u=76281980&t=195)** And it checks for a value greater than zero.
>
> **[3:20](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-eslint-in-an-editor?u=76281980&t=200)** But it's incrementing after every loop, and this is a logic error.
>
> **[3:23](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-eslint-in-an-editor?u=76281980&t=203)** It means it's never going to get to zero, it's never going to stop.
>
> **[3:26](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-eslint-in-an-editor?u=76281980&t=206)** So I've created an infinite loop here.
>
> **[3:28](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-eslint-in-an-editor?u=76281980&t=208)** And that can be tricky to catch if you're just writing code and trying to figure out why your code isn't working.
>
> **[3:35](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-eslint-in-an-editor?u=76281980&t=215)** But the configuration I'm using flags this, and so if I hover over it, there's a pretty simple explanation of what's going on here, the for direction is wrong.
>
> **[3:43](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-eslint-in-an-editor?u=76281980&t=223)** And so if I change that greater than, to a less than, most of that red goes away, I fixed that logic error.
>
> **[3:52](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-eslint-in-an-editor?u=76281980&t=232)** Now there's still a bit more going on here.
>
> **[3:54](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-eslint-in-an-editor?u=76281980&t=234)** So if I hover over that i++ which has a red underscore there's an explanation about avoiding unary operators.
>
> **[4:03](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-eslint-in-an-editor?u=76281980&t=243)** I like doing that in my code as well, because unary operators can have unexpected effects based on order.
>
> **[4:08](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-eslint-in-an-editor?u=76281980&t=248)** So I'll replace that ++ with a += 1.
>
> **[4:16](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-eslint-in-an-editor?u=76281980&t=256)** Now I still have a red underline.
>
> **[4:18](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-eslint-in-an-editor?u=76281980&t=258)** And if I hover over it this time, I see that my rules require spacing around this operator.
>
> **[4:24](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-eslint-in-an-editor?u=76281980&t=264)** Again, this is a useful style to make my code more readable.
>
> **[4:28](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-eslint-in-an-editor?u=76281980&t=268)** So I'm going to add those spaces one before the plus, one after the minus, and now all those squiggles are gone.
>
> **[4:35](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-eslint-in-an-editor?u=76281980&t=275)** I have another yellow squiggle under my console.dot log statement.
>
> **[4:40](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-eslint-in-an-editor?u=76281980&t=280)** And that flags another warning about console statements, and I'm okay with that for right now.
>
> **[4:45](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-eslint-in-an-editor?u=76281980&t=285)** And then I have a squiggle under my closing curly brace.
>
> **[4:48](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-eslint-in-an-editor?u=76281980&t=288)** And if I hover over that, there's an explanation that my rules call for an empty line at the end of a file, which is a great practice.
>
> **[4:55](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-eslint-in-an-editor?u=76281980&t=295)** Now if your file already has one, you won't see this error flagged.
>
> **[4:58](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-eslint-in-an-editor?u=76281980&t=298)** But I'm going to go ahead and add a line just for good measure, and now I'm all set.
>
> **[5:04](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-eslint-in-an-editor?u=76281980&t=304)** So notice in the sidebar, the color for the file name has changed to yellow.
>
> **[5:09](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-eslint-in-an-editor?u=76281980&t=309)** And the number's gone down to two, which just is logging the two warnings that I have, because it's not red and no, there's no errors.
>
> **[5:17](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-eslint-in-an-editor?u=76281980&t=317)** So I'm going to save those changes.
>
> **[5:20](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-eslint-in-an-editor?u=76281980&t=320)** And so I could go over to ESLint RC if I ever wanted to find rules that would override the style guide I'm using.
>
> **[5:28](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-eslint-in-an-editor?u=76281980&t=328)** So there's documentation on how to add those into rules down here as key value pairs.
>
> **[5:35](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-eslint-in-an-editor?u=76281980&t=335)** But especially when I'm using ESLint in the editor, it can be useful to turn off errors on a line by line basis.
>
> **[5:42](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-eslint-in-an-editor?u=76281980&t=342)** And ESLint supports doing this with comments either on the same line, or on the line before.
>
> **[5:48](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-eslint-in-an-editor?u=76281980&t=348)** So for my first console.log statement, I'm going to turn off the warning by adding an inline comment to the end of the line.
>
> **[5:56](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-eslint-in-an-editor?u=76281980&t=356)** And I have this as a code snippet on the wiki page for this video.
>
> **[6:00](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-eslint-in-an-editor?u=76281980&t=360)** ESLint inline comment, but I'm just going to type it in.
>
> **[6:04](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-eslint-in-an-editor?u=76281980&t=364)** So at the end of that line, I'm going to do a single space, double slash.
>
> **[6:09](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-eslint-in-an-editor?u=76281980&t=369)** And then ESLint-disable-line no-console.
>
> **[6:14](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-eslint-in-an-editor?u=76281980&t=374)** And so I'm saying here, ESLint, disable checking on this line for the no-console rule.
>
> **[6:23](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-eslint-in-an-editor?u=76281980&t=383)** And now that yellow underscore is gone, because even though I've violated the rules, I've also included a directive saying don't bother checking this, don't flag this for me, I'm good.
>
> **[6:32](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-eslint-in-an-editor?u=76281980&t=392)** I can also add a comment on its own line and have it apply to the line after it.
>
> **[6:38](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-eslint-in-an-editor?u=76281980&t=398)** Now I have another flag console.log statement, so I'm going to add a blank line before it.
>
> **[6:44](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-eslint-in-an-editor?u=76281980&t=404)** And then I'm going to add a comment.
>
> **[6:46](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-eslint-in-an-editor?u=76281980&t=406)** And this is going to be ESLint-disable-next-line, and, no-console, as the rule to disable.
>
> **[6:58](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-eslint-in-an-editor?u=76281980&t=418)** And so now that underline goes away from the line that follows from that following console.log statement.
>
> **[7:05](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-eslint-in-an-editor?u=76281980&t=425)** And my file list is back to its default color.
>
> **[7:09](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-eslint-in-an-editor?u=76281980&t=429)** It's tracking now just the changes that I've made in Git, and it's got no tally of issues.
>
> **[7:15](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-eslint-in-an-editor?u=76281980&t=435)** And so I've indicated here that even though this particular file varies a bit from my specified styles, I'm okay with it.

> [!info]- Semantic Content
>
> **Tools:** visual studio (3), sublime (1), atom (1), vs code (1)
> **Code Keywords:** this, (2), let (1), require (1), override (1)
> **Env Vars:** json (4), atom (1)
> **Definitions:** is a  (4)
> **CLI Commands:** make (1), find (1), git (1)
> **UI Navigation:** go to (1), in the sidebar (1)
> **Warnings:** warning (2)
> **File Paths:** index.js (1)

#### Challenge: Add ESLint to a project
> [LinkedIn Learning](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/challenge-add-eslint-to-a-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/challenge-add-eslint-to-a-project?u=76281980&t=0)** - [Instructor] Ready to try your hand at adding ESLint to a project?
>
> **[0:10](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/challenge-add-eslint-to-a-project?u=76281980&t=10)** It's time for a challenge.
>
> **[0:13](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/challenge-add-eslint-to-a-project?u=76281980&t=13)** The start files for this video contain a project that's already configured with webpack and Babel.
>
> **[0:19](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/challenge-add-eslint-to-a-project?u=76281980&t=19)** This project is in the new challenge folder, so if you've worked through videos so far with the same set of files, you'll need to grab or switch to the 01_05b branch of this repo for the files you need.
>
> **[0:34](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/challenge-add-eslint-to-a-project?u=76281980&t=34)** The complete version of the work from the other videos is in the videos folder for reference.
>
> **[0:40](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/challenge-add-eslint-to-a-project?u=76281980&t=40)** For the project in the challenge folder, the build command uses webpack and Babel to parse and pack the index.js file in the source folder, and it writes the result to the dist folder.
>
> **[0:54](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/challenge-add-eslint-to-a-project?u=76281980&t=54)** Your task is to add and configure ESLint using the standard style guide, which is the second option in the list of popular style guides when you setup ESLint.
>
> **[1:05](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/challenge-add-eslint-to-a-project?u=76281980&t=65)** You also need to integrate ESLint into the webpack build process.
>
> **[1:10](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/challenge-add-eslint-to-a-project?u=76281980&t=70)** And finally, you should use either error messages thrown in the terminal or in your editor to identify and fix any syntax or style issues in the code.
>
> **[1:20](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/challenge-add-eslint-to-a-project?u=76281980&t=80)** Note that because you'll be using the standard style guide, some of the errors will be ones that the AirBnB style guide doesn't throw, and some AirBnB errors won't be flagged.
>
> **[1:31](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/challenge-add-eslint-to-a-project?u=76281980&t=91)** This should take you about 10 to 15 minutes.
>
> **[1:34](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/challenge-add-eslint-to-a-project?u=76281980&t=94)** When you're done, join me in the next video and I'll walk you through how I approached it.
>
> **[1:39](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/challenge-add-eslint-to-a-project?u=76281980&t=99)** Have fun.

> [!info]- Semantic Content
>
> **Code Keywords:** switch (1), finally, (1), throw (1)
> **Prerequisites:** you'll need (1), configure (1), setup (1)
> **File Paths:** index.js (1)
> **Cross-References:** in the next (1)
> **Tools:** terminal (1)
> **UI Navigation:** switch to (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Solution: Add ESLint to a project
> [LinkedIn Learning](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/solution-add-eslint-to-a-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/solution-add-eslint-to-a-project?u=76281980&t=0)** - [Instructor] The first thing that I want to do in building out this project, I need to run npm i to actually get all of the dependencies installed, so I've done that already and got my node modules in place for this project.
>
> **[0:19](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/solution-add-eslint-to-a-project?u=76281980&t=19)** Next up, I actually have to install eslint as a dependency in this project.
>
> **[0:24](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/solution-add-eslint-to-a-project?u=76281980&t=24)** So that's npm install eslint and I'm going to do a save-dev to save it to this particular project.
>
> **[0:33](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/solution-add-eslint-to-a-project?u=76281980&t=33)** And so that's going to finish installing and when it's done, the next thing I need to do is actually set it up.
>
> **[0:40](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/solution-add-eslint-to-a-project?u=76281980&t=40)** So there I'll use an npx eslint --init.
>
> **[0:46](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/solution-add-eslint-to-a-project?u=76281980&t=46)** So this is going to take me through that set of questions that help me get ESLint configured.
>
> **[0:51](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/solution-add-eslint-to-a-project?u=76281980&t=51)** Now, I want to go ahead and use code style as well as syntax and problem checking so I'm going to choose that third option.
>
> **[0:58](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/solution-add-eslint-to-a-project?u=76281980&t=58)** I'm going to use modules.
>
> **[1:00](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/solution-add-eslint-to-a-project?u=76281980&t=60)** I'm not using a framework, I'm not using typescript, I'm doing front-end code in the browser and I want to pick a style guide.
>
> **[1:10](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/solution-add-eslint-to-a-project?u=76281980&t=70)** Now, the idea here is we're going to try out what it's like to use the standard style guide so that's the second one in the list.
>
> **[1:19](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/solution-add-eslint-to-a-project?u=76281980&t=79)** And I'm going to use a JavaScript file for my configuration.
>
> **[1:23](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/solution-add-eslint-to-a-project?u=76281980&t=83)** And then I do want to install those dependencies.
>
> **[1:26](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/solution-add-eslint-to-a-project?u=76281980&t=86)** It's always important because otherwise that selected config will not work.
>
> **[1:31](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/solution-add-eslint-to-a-project?u=76281980&t=91)** So I'm going to go ahead and hit Enter to install all the dependencies that go specifically with most of these with the standard style guide.
>
> **[1:41](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/solution-add-eslint-to-a-project?u=76281980&t=101)** And now I have ESLint set up for this project.
>
> **[1:46](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/solution-add-eslint-to-a-project?u=76281980&t=106)** If I switch back to my editor, I can now see that I have that .eslintrc.js file and again, I'm in the challenge folder here.
>
> **[1:55](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/solution-add-eslint-to-a-project?u=76281980&t=115)** So you just want to make sure you're seeing that there.
>
> **[1:57](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/solution-add-eslint-to-a-project?u=76281980&t=117)** And I can go ahead and open up in the src folder that index.js file.
>
> **[2:02](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/solution-add-eslint-to-a-project?u=76281980&t=122)** Now, I can see already I have a red underline and if I look at that, I do see an eslint error.
>
> **[2:10](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/solution-add-eslint-to-a-project?u=76281980&t=130)** And I put this one in here just to illustrate a point.
>
> **[2:14](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/solution-add-eslint-to-a-project?u=76281980&t=134)** I'm going to go ahead and comment this line out.
>
> **[2:15](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/solution-add-eslint-to-a-project?u=76281980&t=135)** And notice it's the only error that's flagged right now in my editor.
>
> **[2:18](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/solution-add-eslint-to-a-project?u=76281980&t=138)** If I comment that out, all of a sudden, a bunch of other errors pop up.
>
> **[2:22](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/solution-add-eslint-to-a-project?u=76281980&t=142)** So this is just like debugging in general where sometimes specific errors can mask other errors.
>
> **[2:31](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/solution-add-eslint-to-a-project?u=76281980&t=151)** So here there is a question of either declaring an existing variable name.
>
> **[2:36](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/solution-add-eslint-to-a-project?u=76281980&t=156)** So I'm just going to go ahead and rename this and actually let's just rename the other one at the beginning.
>
> **[2:43](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/solution-add-eslint-to-a-project?u=76281980&t=163)** We'll just call this text.
>
> **[2:45](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/solution-add-eslint-to-a-project?u=76281980&t=165)** And I'll save that.
>
> **[2:46](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/solution-add-eslint-to-a-project?u=76281980&t=166)** Now I've got all these juicy errors.
>
> **[2:48](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/solution-add-eslint-to-a-project?u=76281980&t=168)** For now, I'm going to set those aside because I want to run my build and see the effect of the errors before I fix them.
>
> **[2:54](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/solution-add-eslint-to-a-project?u=76281980&t=174)** So that's the first part of integrating ESLint.
>
> **[2:57](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/solution-add-eslint-to-a-project?u=76281980&t=177)** And the second step, I want to actually integrate that ESLint into the webpack build process.
>
> **[3:03](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/solution-add-eslint-to-a-project?u=76281980&t=183)** So that's going to take me into the webpack.config.js file.
>
> **[3:06](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/solution-add-eslint-to-a-project?u=76281980&t=186)** And because this is a JS file, notice that it is getting flagged by ESLint but I'm not worried about that right now.
>
> **[3:12](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/solution-add-eslint-to-a-project?u=76281980&t=192)** This works and the stylistic questions are not that big a deal to me.
>
> **[3:17](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/solution-add-eslint-to-a-project?u=76281980&t=197)** So what I want to do down here in the rules section is add that code snippet that I used the last time I did this that specifically says I want to run ESLint and I want to run it first.
>
> **[3:30](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/solution-add-eslint-to-a-project?u=76281980&t=210)** So to do that, I want to use the eslint-loader module and so back in the terminal, I'm going to do an npm install eslint-loader.
>
> **[3:43](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/solution-add-eslint-to-a-project?u=76281980&t=223)** I can do a save-dev.
>
> **[3:45](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/solution-add-eslint-to-a-project?u=76281980&t=225)** And so I'm installing this dependency that works with webpack to integrate ESLint into that build process.
>
> **[3:55](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/solution-add-eslint-to-a-project?u=76281980&t=235)** The next thing I'm going to do is go back to the wiki for this repo up on GitHub.
>
> **[4:02](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/solution-add-eslint-to-a-project?u=76281980&t=242)** And on the 01_03 video for Integrating ESLint with webpack, we've got this code snippet.
>
> **[4:07](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/solution-add-eslint-to-a-project?u=76281980&t=247)** You can also find this in the documentation for this integration.
>
> **[4:12](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/solution-add-eslint-to-a-project?u=76281980&t=252)** And going back to my webpack.config file, right inside the array for the rules key, I'm going to paste in this reference to the eslint-loader.
>
> **[4:25](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/solution-add-eslint-to-a-project?u=76281980&t=265)** We're got that enforce: 'pre' to make sure that this happens before the babel-loader is run.
>
> **[4:30](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/solution-add-eslint-to-a-project?u=76281980&t=270)** And so I'm going to save that.
>
> **[4:34](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/solution-add-eslint-to-a-project?u=76281980&t=274)** And now when I run that build command which is defined over here in package.json, I will also be linting my index.js file as well as webpacking it.
>
> **[4:49](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/solution-add-eslint-to-a-project?u=76281980&t=289)** So let's go over to the console and I'm going to clear that.
>
> **[4:54](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/solution-add-eslint-to-a-project?u=76281980&t=294)** And then I'm just going to do an npm run build and see what happens when I run that webpack build command.
>
> **[5:02](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/solution-add-eslint-to-a-project?u=76281980&t=302)** So we did get a bunch of errors.
>
> **[5:04](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/solution-add-eslint-to-a-project?u=76281980&t=304)** And notice these are all ESLint errors.
>
> **[5:08](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/solution-add-eslint-to-a-project?u=76281980&t=308)** We have all these different ESLint rules referenced over here and so this is actually success.
>
> **[5:13](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/solution-add-eslint-to-a-project?u=76281980&t=313)** I knew that there were errors in the file.
>
> **[5:15](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/solution-add-eslint-to-a-project?u=76281980&t=315)** I saw them already in the editor.
>
> **[5:16](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/solution-add-eslint-to-a-project?u=76281980&t=316)** But now I've run the build and I can see that ESLint did in fact get executed as part of the build process.
>
> **[5:23](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/solution-add-eslint-to-a-project?u=76281980&t=323)** So that's the second of the three tasks for this challenge that I've taken care of.
>
> **[5:28](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/solution-add-eslint-to-a-project?u=76281980&t=328)** And so the third one is I want to fix the errors.
>
> **[5:30](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/solution-add-eslint-to-a-project?u=76281980&t=330)** So switching back over to my editor and switching back to index.js, I can just follow these red squiggly underlines and read the issues that are going on here.
>
> **[5:42](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/solution-add-eslint-to-a-project?u=76281980&t=342)** So I've got a variable that is assigned a value but never used.
>
> **[5:47](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/solution-add-eslint-to-a-project?u=76281980&t=347)** And so if I just comment that out, it's basically saying if you've got a variable, you don't need it.
>
> **[5:52](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/solution-add-eslint-to-a-project?u=76281980&t=352)** And so this is really, some of this is common sense and well explained.
>
> **[5:56](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/solution-add-eslint-to-a-project?u=76281980&t=356)** Sometimes you may have to actually look these up on the ESLint documentation online.
>
> **[6:01](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/solution-add-eslint-to-a-project?u=76281980&t=361)** This is a situation where I've used let to define my variable but my style guide says if you're not redefining the value at all, then use const instead.
>
> **[6:10](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/solution-add-eslint-to-a-project?u=76281980&t=370)** Great practice so we'll change that let to const.
>
> **[6:14](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/solution-add-eslint-to-a-project?u=76281980&t=374)** Then we've got result here which is never reassigned so again, you can make that a const and while we're at it, I think these two here are the same thing so I'm just going to change all my lets to const.
>
> **[6:28](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/solution-add-eslint-to-a-project?u=76281980&t=388)** And that gets rid of a few.
>
> **[6:30](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/solution-add-eslint-to-a-project?u=76281980&t=390)** Now, here at this semicolon, I have an extra semicolon with this ESLint semi rule.
>
> **[6:35](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/solution-add-eslint-to-a-project?u=76281980&t=395)** And so notice that all of the semicolons in this file have red squiggles under them.
>
> **[6:40](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/solution-add-eslint-to-a-project?u=76281980&t=400)** So this is the difference in style guides.
>
> **[6:42](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/solution-add-eslint-to-a-project?u=76281980&t=402)** This specific style guide, and again, for this one, we chose, let's open up that eslintrc file and see we are using the standard style guide.
>
> **[6:54](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/solution-add-eslint-to-a-project?u=76281980&t=414)** So in the standard style guide, the rule is to not use any semicolons unless they're necessary for syntax, for the code to actually be accurate and so we've got squiggles that are actually telling us to take out all of the semicolons.
>
> **[7:12](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/solution-add-eslint-to-a-project?u=76281980&t=432)** Now, that's not the way I code.
>
> **[7:14](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/solution-add-eslint-to-a-project?u=76281980&t=434)** This is just a way to illustrate that different style guides call for different code styles and so it's important to try out different style guides and think about what makes sense to you.
>
> **[7:25](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/solution-add-eslint-to-a-project?u=76281980&t=445)** It's also possible to start with a base style guide and make your own changes to that and I encourage you to study up more on that.
>
> **[7:32](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/solution-add-eslint-to-a-project?u=76281980&t=452)** So, then we've got a console.log statement here and it's simply saying this is unreachable code because it comes after the return statement so I can cut that and move it up here before the return statement and I don't get an error so this particular style guide does not call for removing all console statements like the Airbnb style guide does.
>
> **[7:54](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/solution-add-eslint-to-a-project?u=76281980&t=474)** And then down here, we've got things like spacing around our operators.
>
> **[8:00](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/solution-add-eslint-to-a-project?u=76281980&t=480)** So we've got a couple of instances of that.
>
> **[8:02](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/solution-add-eslint-to-a-project?u=76281980&t=482)** And then inside in closing characters, it's pretty common, the style guide will call for you to not use those spaces to make the code a little more readable.
>
> **[8:12](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/solution-add-eslint-to-a-project?u=76281980&t=492)** And then down here, we have an issue where we're supposed to have a new line at the end of our file so I'll press Enter and now, I've got all of my issues taken care of.
>
> **[8:23](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/solution-add-eslint-to-a-project?u=76281980&t=503)** And so I'm going to go ahead and run that build on more time.
>
> **[8:26](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/solution-add-eslint-to-a-project?u=76281980&t=506)** So reissuing that last command.
>
> **[8:29](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/solution-add-eslint-to-a-project?u=76281980&t=509)** Actually let's go ahead and clear the screen, then I'm going to reissue the last command, npm run build.
>
> **[8:35](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/solution-add-eslint-to-a-project?u=76281980&t=515)** And I can see the build process happening and I've got a warning but I've got no errors so I've got my file built.
>
> **[8:41](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/solution-add-eslint-to-a-project?u=76281980&t=521)** I can go over to my dist folder, look at main.js and yes, this does not comport with the style guide and that is to be expected.
>
> **[8:50](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/solution-add-eslint-to-a-project?u=76281980&t=530)** Probably want to eliminate that from my style guide at some point but for now, I've got that build happening and I'm all good.
>
> **[9:01](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/solution-add-eslint-to-a-project?u=76281980&t=541)** And so this gives you a taste of what it's like to incorporate ESLint into a project, into a build process and then actually use it to make your code fit whatever style you're going for and that's what ESLint is really great at.

> [!info]- Semantic Content
>
> **CLI Commands:** make (6), npm (5), node (1), npx (1), find (1)
> **Code Keywords:** let (6), const (4), switch (1), module (1)
> **File Paths:** index.js (3), eslintrc.js (1), webpack.config.js (1), webpack.config (1), package.json (1)
> **Prerequisites:** install (5), set up (1)
> **Definitions:** is a  (3)
> **Analogies:** it's like (2), just like (1)
> **Tools:** terminal (1), github (1)
> **Cross-References:** go back to (1)


### Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/next-steps?u=76281980&t=0)** - [Instructor] Thanks so much for joining me in this course.
>
> **[0:03](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/next-steps?u=76281980&t=3)** You now have experience integrating ESLint into projects.
>
> **[0:07](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/next-steps?u=76281980&t=7)** To dig deeper into working with ESLint, check out a course on customizing ESLint rules.
>
> **[0:13](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/next-steps?u=76281980&t=13)** If you want to learn more about the reasons behind common coding styles, check out a course on JavaScript best practices and if you want to deepen your knowledge about working with tool chains, check out a course in the webpack.
>
> **[0:25](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/next-steps?u=76281980&t=25)** Feel free to follow me online.
>
> **[0:27](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/next-steps?u=76281980&t=27)** Now, take your new skills and build something amazing.
>
> **[0:30](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/next-steps?u=76281980&t=30)** Good luck.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)


## Path Context

### In [[Advance Your JavaScript Skills]]
← [[JavaScript- Test-Driven Development (ES6)]] | **4 of 10** | [[ESLint- Checking for Syntax and Logic Errors]] →

## Appears In

- [[Advance Your JavaScript Skills]]

## Related Courses

_Courses sharing skills:_

- [[ESLint- Customizing Styles]] — ESLint
- [[ESLint- Checking for Syntax and Logic Errors]] — ESLint

---

[↑ Back to top](#)