---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: eslint-customizing-styles
url: "https://www.linkedin.com/learning/eslint-customizing-styles"
duration_minutes: 37
duration: 37m
level: Advanced
updated: 5/12/2025
learners: 4087
skills:
  - ESLint
exercise_files: true
github: "https://github.com/LinkedInLearning/eslint-styles-2255010/codespaces"
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQFwVAvDC1FHrw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1668021352865?e=2147483647&amp;v=beta&amp;t=9OlJwMeG71YYvKadZjYizeZxzOaoIZ-bd2hbODW4xMQ"
linkedin_topic: Software Development
learning_paths:
  - '[[Advance Your JavaScript Skills]]'
prev_courses:
  - '[[ESLint- Checking for Syntax and Logic Errors]]'
next_courses:
  - '[[Foundational JavaScript Security]]'
path_nav: '[{"path":"Advance Your JavaScript Skills","position":6,"total":10,"prev":"ESLint- Checking for Syntax and Logic Errors","next":"Foundational JavaScript Security"}]'
path_count: 1
tags:
  - course
  - topic/software-development
  - skill/eslint
status: not-started
created: 2026-04-21
---

![ESLint: Customizing Styles](https://media.licdn.com/dms/image/v2/C4E0DAQFwVAvDC1FHrw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1668021352865?e=2147483647&amp;v=beta&amp;t=9OlJwMeG71YYvKadZjYizeZxzOaoIZ-bd2hbODW4xMQ)

# ESLint: Customizing Styles

> Does your project style not adhere seamlessly to rules from a style guide? In this concise course—the second installment in the ESLint series—learn how to add and override rules to your ESLint configuration to ensure that you won't get flagged for "errors" that are really just aspects of your personal style. Instructor Sasha Vodnik shows how to customize your configuration by adding style rules to

> [LinkedIn Learning](https://www.linkedin.com/learning/eslint-customizing-styles) | 37m | Advanced | 4K learners
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Sasha Vodnik]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/eslint-styles-2255010/codespaces)

## Skills Covered

- ESLint

## Table of Contents

### Introduction

#### Setting up ESLint to match your style
> [LinkedIn Learning](https://www.linkedin.com/learning/eslint-customizing-styles/setting-up-eslint-to-match-your-style-25668962?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/eslint-customizing-styles/setting-up-eslint-to-match-your-style-25668962?u=76281980&t=0)** - Specifying your own custom styles in ESLint can feel like a complex undertaking.
>
> **[0:05](https://www.linkedin.com/learning/eslint-customizing-styles/setting-up-eslint-to-match-your-style-25668962?u=76281980&t=5)** The code isn't super complicated, but some of the options require you to understand both the available choices and the specific syntax to apply them.
>
> **[0:14](https://www.linkedin.com/learning/eslint-customizing-styles/setting-up-eslint-to-match-your-style-25668962?u=76281980&t=14)** I created this course to provide an overview of what's possible when customizing ESLint rules and how to do it.
>
> **[0:21](https://www.linkedin.com/learning/eslint-customizing-styles/setting-up-eslint-to-match-your-style-25668962?u=76281980&t=21)** We'll explore the different values that ESLint rules can take from simple strings to nested data structures, and we'll look at common configuration errors and how to troubleshoot them.
>
> **[0:31](https://www.linkedin.com/learning/eslint-customizing-styles/setting-up-eslint-to-match-your-style-25668962?u=76281980&t=31)** When we're done, you'll be able to build ESLint rules to work for your code style.

> [!info]- Semantic Content
>
> **Code Keywords:** super (1), require (1)
> **Warnings:** troubleshoot (1)
> **Speakers:** - specifying (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/eslint-customizing-styles/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/eslint-customizing-styles/what-you-should-know?u=76281980&t=0)** - [Instructor] This course assumes you have intermediate to advanced level experience coding in front-end JavaScript, including modern ES6 syntax.
>
> **[0:09](https://www.linkedin.com/learning/eslint-customizing-styles/what-you-should-know?u=76281980&t=9)** It also assumes you know how to integrate ESLint into an npm project and incorporate a popular ESLint style guide.
>
> **[0:17](https://www.linkedin.com/learning/eslint-customizing-styles/what-you-should-know?u=76281980&t=17)** If you need to review basic ESLint configuration, search in our library for a course on configuring ESLint.

> [!info]- Semantic Content
>
> **CLI Commands:** npm (1)
> **Env Vars:** es6 (1)
> **Speakers:** - [instructor] (1)

#### Using the exercise files for this course
> [LinkedIn Learning](https://www.linkedin.com/learning/eslint-customizing-styles/using-the-exercise-files-for-this-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/eslint-customizing-styles/using-the-exercise-files-for-this-course?u=76281980&t=0)** - [Narrator] All of the files for this course are freely available as a GitHub repo at this URL.
>
> **[0:06](https://www.linkedin.com/learning/eslint-customizing-styles/using-the-exercise-files-for-this-course?u=76281980&t=6)** The repository is built so that there are branches for each of the videos in this course.
>
> **[0:11](https://www.linkedin.com/learning/eslint-customizing-styles/using-the-exercise-files-for-this-course?u=76281980&t=11)** You can use the branch list to switch to a specific branch and take a look at how the code looked in a specific video.
>
> **[0:20](https://www.linkedin.com/learning/eslint-customizing-styles/using-the-exercise-files-for-this-course?u=76281980&t=20)** For example, the branch titled 01_03e would show you the code for chapter one and the third video in that chapter.
>
> **[0:30](https://www.linkedin.com/learning/eslint-customizing-styles/using-the-exercise-files-for-this-course?u=76281980&t=30)** If you see a letter B at the end of the name, it means that's how the code looked at the beginning of the video.
>
> **[0:37](https://www.linkedin.com/learning/eslint-customizing-styles/using-the-exercise-files-for-this-course?u=76281980&t=37)** But if you see an E at the end of the branch, that's how the code looked at the end of the video.
>
> **[0:41](https://www.linkedin.com/learning/eslint-customizing-styles/using-the-exercise-files-for-this-course?u=76281980&t=41)** In this course, I go through customizing ESLint rules.
>
> **[0:46](https://www.linkedin.com/learning/eslint-customizing-styles/using-the-exercise-files-for-this-course?u=76281980&t=46)** If you want to, you can download any of these branches by first going to the branch and then hitting clone or download and downloading the ZIP file for the video that you want to follow along with.
>
> **[0:57](https://www.linkedin.com/learning/eslint-customizing-styles/using-the-exercise-files-for-this-course?u=76281980&t=57)** You can also just download the entire repo and start from the beginning with me.
>
> **[1:01](https://www.linkedin.com/learning/eslint-customizing-styles/using-the-exercise-files-for-this-course?u=76281980&t=61)** You may need to install MPM as well as Git before you do this.
>
> **[1:07](https://www.linkedin.com/learning/eslint-customizing-styles/using-the-exercise-files-for-this-course?u=76281980&t=67)** If you need more experience working with Git and GitHub, make sure you're familiar working with those before taking this course.
>
> **[1:14](https://www.linkedin.com/learning/eslint-customizing-styles/using-the-exercise-files-for-this-course?u=76281980&t=74)** Do a search for GitHub in our library.
>
> **[1:16](https://www.linkedin.com/learning/eslint-customizing-styles/using-the-exercise-files-for-this-course?u=76281980&t=76)** If you're comfortable with this then let's get started.

> [!info]- Semantic Content
>
> **CLI Commands:** git (2), make (1)
> **Code Keywords:** switch (1), this. (1), let (1)
> **Env Vars:** url (1), zip (1), mpm (1)
> **Tools:** github (3)
> **Exercise Files:** github repo (1), zip file (1), download the (1)
> **UI Navigation:** switch to (1)
> **Definitions:** means that (1)
> **Analogies:** for example (1)

#### Using GitHub Codespaces with this course
> [LinkedIn Learning](https://www.linkedin.com/learning/eslint-customizing-styles/using-github-codespaces-with-this-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/eslint-customizing-styles/using-github-codespaces-with-this-course?u=76281980&t=0)** - [Ravi De Lobos] This is Rav De Lobos, senior staff instructor at LinkedIn Learning.
>
> **[0:03](https://www.linkedin.com/learning/eslint-customizing-styles/using-github-codespaces-with-this-course?u=76281980&t=3)** And I'm going to show you how to work with LinkedIn Learning courses using GitHub Code Spaces.
>
> **[0:09](https://www.linkedin.com/learning/eslint-customizing-styles/using-github-codespaces-with-this-course?u=76281980&t=9)** Code Spaces is a code editor in the cloud with the full power of Visual Studio Code.
>
> **[0:15](https://www.linkedin.com/learning/eslint-customizing-styles/using-github-codespaces-with-this-course?u=76281980&t=15)** It allows for real world hands-on practice, that mirrors software development in the workplace.
>
> **[0:20](https://www.linkedin.com/learning/eslint-customizing-styles/using-github-codespaces-with-this-course?u=76281980&t=20)** This course has been adapted for use with GitHub Code Spaces.
>
> **[0:24](https://www.linkedin.com/learning/eslint-customizing-styles/using-github-codespaces-with-this-course?u=76281980&t=24)** Using Code Spaces, you have everything you need to get going without needing complex installations or build tools.
>
> **[0:31](https://www.linkedin.com/learning/eslint-customizing-styles/using-github-codespaces-with-this-course?u=76281980&t=31)** One click and you're ready to go.
>
> **[0:34](https://www.linkedin.com/learning/eslint-customizing-styles/using-github-codespaces-with-this-course?u=76281980&t=34)** First make sure you've signed up for a free GitHub account and that you've logged in.
>
> **[0:38](https://www.linkedin.com/learning/eslint-customizing-styles/using-github-codespaces-with-this-course?u=76281980&t=38)** You just see your profile icon right here.
>
> **[0:41](https://www.linkedin.com/learning/eslint-customizing-styles/using-github-codespaces-with-this-course?u=76281980&t=41)** When you go to the repository for one of our courses, look for the code button.
>
> **[0:49](https://www.linkedin.com/learning/eslint-customizing-styles/using-github-codespaces-with-this-course?u=76281980&t=49)** Click on Create Code Space.
>
> **[0:52](https://www.linkedin.com/learning/eslint-customizing-styles/using-github-codespaces-with-this-course?u=76281980&t=52)** The first time you open up a code space, it might take a few minutes to create the virtual machine.
>
> **[0:58](https://www.linkedin.com/learning/eslint-customizing-styles/using-github-codespaces-with-this-course?u=76281980&t=58)** Once it's done, you'll enter the code editor environment.
>
> **[1:02](https://www.linkedin.com/learning/eslint-customizing-styles/using-github-codespaces-with-this-course?u=76281980&t=62)** If you're familiar with Visual Studio Code, this is a special version of that editor running on GitHub's servers.
>
> **[1:09](https://www.linkedin.com/learning/eslint-customizing-styles/using-github-codespaces-with-this-course?u=76281980&t=69)** The cloud editor's menu lives in a hamburger icon, inside the activity bar.
>
> **[1:14](https://www.linkedin.com/learning/eslint-customizing-styles/using-github-codespaces-with-this-course?u=76281980&t=74)** The menu will let you see the keyboard shortcuts for your operating system.
>
> **[1:18](https://www.linkedin.com/learning/eslint-customizing-styles/using-github-codespaces-with-this-course?u=76281980&t=78)** Let's find the shortcut for the command palette.
>
> **[1:21](https://www.linkedin.com/learning/eslint-customizing-styles/using-github-codespaces-with-this-course?u=76281980&t=81)** Look in the hamburger menu under view, and then look for the keyboard shortcut for your operating system.
>
> **[1:28](https://www.linkedin.com/learning/eslint-customizing-styles/using-github-codespaces-with-this-course?u=76281980&t=88)** The activity bar has the most common tools, you'll need to work with projects.
>
> **[1:33](https://www.linkedin.com/learning/eslint-customizing-styles/using-github-codespaces-with-this-course?u=76281980&t=93)** You can, for example, show or hide the Explorer.
>
> **[1:38](https://www.linkedin.com/learning/eslint-customizing-styles/using-github-codespaces-with-this-course?u=76281980&t=98)** Do a search and replace for content.
>
> **[1:41](https://www.linkedin.com/learning/eslint-customizing-styles/using-github-codespaces-with-this-course?u=76281980&t=101)** Manage features of the repository and much more.
>
> **[1:46](https://www.linkedin.com/learning/eslint-customizing-styles/using-github-codespaces-with-this-course?u=76281980&t=106)** By the way, if for any reason you lose the activity bar, you can get it back using the command pallet.
>
> **[1:56](https://www.linkedin.com/learning/eslint-customizing-styles/using-github-codespaces-with-this-course?u=76281980&t=116)** Your course can have one or more extensions pre-installed, based on the course you're taking.
>
> **[2:01](https://www.linkedin.com/learning/eslint-customizing-styles/using-github-codespaces-with-this-course?u=76281980&t=121)** Those can be found in the extensions panel.
>
> **[2:07](https://www.linkedin.com/learning/eslint-customizing-styles/using-github-codespaces-with-this-course?u=76281980&t=127)** Because this is a browser, it's easy to inadvertently close the browser window and lose the editor.
>
> **[2:13](https://www.linkedin.com/learning/eslint-customizing-styles/using-github-codespaces-with-this-course?u=76281980&t=133)** If you do that don't panic.
>
> **[2:15](https://www.linkedin.com/learning/eslint-customizing-styles/using-github-codespaces-with-this-course?u=76281980&t=135)** Code spaces saves everything you're doing on a virtual machine.
>
> **[2:19](https://www.linkedin.com/learning/eslint-customizing-styles/using-github-codespaces-with-this-course?u=76281980&t=139)** You can always get the code space back for this repo by going to the code menu, and finding your code space right here.
>
> **[2:32](https://www.linkedin.com/learning/eslint-customizing-styles/using-github-codespaces-with-this-course?u=76281980&t=152)** Notice that it even remembered that I had opened the extensions panel.
>
> **[2:36](https://www.linkedin.com/learning/eslint-customizing-styles/using-github-codespaces-with-this-course?u=76281980&t=156)** This is a sample of what a multi branch repository looks like.
>
> **[2:40](https://www.linkedin.com/learning/eslint-customizing-styles/using-github-codespaces-with-this-course?u=76281980&t=160)** Which is more common when you're working with web frameworks.
>
> **[2:43](https://www.linkedin.com/learning/eslint-customizing-styles/using-github-codespaces-with-this-course?u=76281980&t=163)** If you go to the branch icon on the status bar, you can see that there's more than one branch.
>
> **[2:48](https://www.linkedin.com/learning/eslint-customizing-styles/using-github-codespaces-with-this-course?u=76281980&t=168)** You can switch to the different branches using this menu.
>
> **[2:52](https://www.linkedin.com/learning/eslint-customizing-styles/using-github-codespaces-with-this-course?u=76281980&t=172)** The branches are named with the chapter and the video number you're watching.
>
> **[2:56](https://www.linkedin.com/learning/eslint-customizing-styles/using-github-codespaces-with-this-course?u=76281980&t=176)** If you see a B at the end of the branch.
>
> **[2:58](https://www.linkedin.com/learning/eslint-customizing-styles/using-github-codespaces-with-this-course?u=76281980&t=178)** That's how the the code looked at the beginning.
>
> **[3:00](https://www.linkedin.com/learning/eslint-customizing-styles/using-github-codespaces-with-this-course?u=76281980&t=180)** If you see an E, that's how the code looked at the end.
>
> **[3:04](https://www.linkedin.com/learning/eslint-customizing-styles/using-github-codespaces-with-this-course?u=76281980&t=184)** Let's switch to how the code looked on chapter two and the third video.
>
> **[3:10](https://www.linkedin.com/learning/eslint-customizing-styles/using-github-codespaces-with-this-course?u=76281980&t=190)** I'll choose the beginning branch.
>
> **[3:13](https://www.linkedin.com/learning/eslint-customizing-styles/using-github-codespaces-with-this-course?u=76281980&t=193)** As you work through a course, you might make some changes on a branch.
>
> **[3:17](https://www.linkedin.com/learning/eslint-customizing-styles/using-github-codespaces-with-this-course?u=76281980&t=197)** I'm going to make a minor edit on the index html file right here.
>
> **[3:25](https://www.linkedin.com/learning/eslint-customizing-styles/using-github-codespaces-with-this-course?u=76281980&t=205)** I'm going to go ahead and save that.
>
> **[3:26](https://www.linkedin.com/learning/eslint-customizing-styles/using-github-codespaces-with-this-course?u=76281980&t=206)** And you can see that I've modified this file because there's an M right here, and the branch name now has an asterisk on it.
>
> **[3:36](https://www.linkedin.com/learning/eslint-customizing-styles/using-github-codespaces-with-this-course?u=76281980&t=216)** If I try to switch to another branch that causes major changes.
>
> **[3:41](https://www.linkedin.com/learning/eslint-customizing-styles/using-github-codespaces-with-this-course?u=76281980&t=221)** Like say O seven O three E, I may see a dialog box like this.
>
> **[3:48](https://www.linkedin.com/learning/eslint-customizing-styles/using-github-codespaces-with-this-course?u=76281980&t=228)** If you don't care about saving your changes, you can simply hit the force checkout button.
>
> **[3:52](https://www.linkedin.com/learning/eslint-customizing-styles/using-github-codespaces-with-this-course?u=76281980&t=232)** It will let you switch to that branch.
>
> **[3:55](https://www.linkedin.com/learning/eslint-customizing-styles/using-github-codespaces-with-this-course?u=76281980&t=235)** You can then choose to discard the changes on this file.
>
> **[4:01](https://www.linkedin.com/learning/eslint-customizing-styles/using-github-codespaces-with-this-course?u=76281980&t=241)** Forking lets you create your own copy of the repository on your account.
>
> **[4:05](https://www.linkedin.com/learning/eslint-customizing-styles/using-github-codespaces-with-this-course?u=76281980&t=245)** So that you can keep any changes that you've made.
>
> **[4:08](https://www.linkedin.com/learning/eslint-customizing-styles/using-github-codespaces-with-this-course?u=76281980&t=248)** Even if you've deleted the code space.
>
> **[4:10](https://www.linkedin.com/learning/eslint-customizing-styles/using-github-codespaces-with-this-course?u=76281980&t=250)** To create your own fork, you can click on the fork button on the repository.
>
> **[4:17](https://www.linkedin.com/learning/eslint-customizing-styles/using-github-codespaces-with-this-course?u=76281980&t=257)** I'm going to hit create fork.
>
> **[4:21](https://www.linkedin.com/learning/eslint-customizing-styles/using-github-codespaces-with-this-course?u=76281980&t=261)** I have my own copy of this repository, and if I want to I can start a new coach space on that fork.
>
> **[4:33](https://www.linkedin.com/learning/eslint-customizing-styles/using-github-codespaces-with-this-course?u=76281980&t=273)** This fork version is almost exactly like the original repository, but it will let you push your own changes.
>
> **[4:40](https://www.linkedin.com/learning/eslint-customizing-styles/using-github-codespaces-with-this-course?u=76281980&t=280)** Notice that the URL of the repository is slightly different.
>
> **[4:44](https://www.linkedin.com/learning/eslint-customizing-styles/using-github-codespaces-with-this-course?u=76281980&t=284)** Let's go ahead and make a simple change to this file right here.
>
> **[4:54](https://www.linkedin.com/learning/eslint-customizing-styles/using-github-codespaces-with-this-course?u=76281980&t=294)** I'm going to save it.
>
> **[4:57](https://www.linkedin.com/learning/eslint-customizing-styles/using-github-codespaces-with-this-course?u=76281980&t=297)** You'll note that there is an M right here, as well as an asterisk on this branch.
>
> **[5:03](https://www.linkedin.com/learning/eslint-customizing-styles/using-github-codespaces-with-this-course?u=76281980&t=303)** In the source control panel, you can also see a one for the change that we just made.
>
> **[5:08](https://www.linkedin.com/learning/eslint-customizing-styles/using-github-codespaces-with-this-course?u=76281980&t=308)** Let's go ahead and try to commit this change.
>
> **[5:14](https://www.linkedin.com/learning/eslint-customizing-styles/using-github-codespaces-with-this-course?u=76281980&t=314)** I'm going to hit the commit button.
>
> **[5:16](https://www.linkedin.com/learning/eslint-customizing-styles/using-github-codespaces-with-this-course?u=76281980&t=316)** And I'll ask it to go ahead and stage the changes.
>
> **[5:22](https://www.linkedin.com/learning/eslint-customizing-styles/using-github-codespaces-with-this-course?u=76281980&t=322)** And then I'm going to hit this button here to commit this onto my own version of the repo.
>
> **[5:30](https://www.linkedin.com/learning/eslint-customizing-styles/using-github-codespaces-with-this-course?u=76281980&t=330)** I'll hit okay.
>
> **[5:32](https://www.linkedin.com/learning/eslint-customizing-styles/using-github-codespaces-with-this-course?u=76281980&t=332)** You can also let it go ahead and run get fetch.
>
> **[5:35](https://www.linkedin.com/learning/eslint-customizing-styles/using-github-codespaces-with-this-course?u=76281980&t=335)** That way it'll automatically sync with your forked repo.
>
> **[5:39](https://www.linkedin.com/learning/eslint-customizing-styles/using-github-codespaces-with-this-course?u=76281980&t=339)** Now that change will be stored in your own version of this repository.
>
> **[5:44](https://www.linkedin.com/learning/eslint-customizing-styles/using-github-codespaces-with-this-course?u=76281980&t=344)** Don't worry if you forget to fork a repo and then try to push changes.
>
> **[5:48](https://www.linkedin.com/learning/eslint-customizing-styles/using-github-codespaces-with-this-course?u=76281980&t=348)** Code spaces will also ask you if you want to create a fork automatically.
>
> **[5:53](https://www.linkedin.com/learning/eslint-customizing-styles/using-github-codespaces-with-this-course?u=76281980&t=353)** Some courses will let you work with life previews or create other ports so that you can have a web view of what you're doing.
>
> **[6:01](https://www.linkedin.com/learning/eslint-customizing-styles/using-github-codespaces-with-this-course?u=76281980&t=361)** This is managed through the ports panel in the status bar.
>
> **[6:04](https://www.linkedin.com/learning/eslint-customizing-styles/using-github-codespaces-with-this-course?u=76281980&t=364)** Right now, there are no ports forwarded.
>
> **[6:08](https://www.linkedin.com/learning/eslint-customizing-styles/using-github-codespaces-with-this-course?u=76281980&t=368)** But if I open up the live server extension, you can see a preview of that file.
>
> **[6:18](https://www.linkedin.com/learning/eslint-customizing-styles/using-github-codespaces-with-this-course?u=76281980&t=378)** Now if we go back to the code space to manage ports.
>
> **[6:20](https://www.linkedin.com/learning/eslint-customizing-styles/using-github-codespaces-with-this-course?u=76281980&t=380)** You can click on the icon in the status bar, and take a look at the currently available ports.
>
> **[6:28](https://www.linkedin.com/learning/eslint-customizing-styles/using-github-codespaces-with-this-course?u=76281980&t=388)** If you want to open this up in a browser, you can click right here.
>
> **[6:32](https://www.linkedin.com/learning/eslint-customizing-styles/using-github-codespaces-with-this-course?u=76281980&t=392)** Look for additional core specific tips from the instructor.
>
> **[6:35](https://www.linkedin.com/learning/eslint-customizing-styles/using-github-codespaces-with-this-course?u=76281980&t=395)** Now, let's get back to the course.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), switch (4), this. (1)
> **UI Navigation:** switch to (4), click on (3), go to (2)
> **Tools:** github (4), visual studio (2)
> **CLI Commands:** make (4), find (1)
> **Definitions:** is a  (4), is an  (1)
> **Env Vars:** url (1)
> **Cross-References:** go back to (1)
> **Analogies:** for example (1)


### 1. Customizing ESLint Styles

#### Turning on checking for a rule
> [LinkedIn Learning](https://www.linkedin.com/learning/eslint-customizing-styles/turning-on-checking-for-a-rule?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/eslint-customizing-styles/turning-on-checking-for-a-rule?u=76281980&t=0)** - [Instructor] To specify a custom style for an ESlint rule, you add a key value pair in the rule section of your .eslintrc file.
>
> **[0:08](https://www.linkedin.com/learning/eslint-customizing-styles/turning-on-checking-for-a-rule?u=76281980&t=8)** By default, an empty rules key is included in the .eslintrc file when you set it up with npx, using the Eslint--init option.
>
> **[0:17](https://www.linkedin.com/learning/eslint-customizing-styles/turning-on-checking-for-a-rule?u=76281980&t=17)** The value of the rules key is an object.
>
> **[0:20](https://www.linkedin.com/learning/eslint-customizing-styles/turning-on-checking-for-a-rule?u=76281980&t=20)** And within that object, I can add a key for each rule that I want to customize.
>
> **[0:25](https://www.linkedin.com/learning/eslint-customizing-styles/turning-on-checking-for-a-rule?u=76281980&t=25)** So for instance, I want to enforce the brace-style rule.
>
> **[0:28](https://www.linkedin.com/learning/eslint-customizing-styles/turning-on-checking-for-a-rule?u=76281980&t=28)** That means my key name will be brace-style.
>
> **[0:32](https://www.linkedin.com/learning/eslint-customizing-styles/turning-on-checking-for-a-rule?u=76281980&t=32)** To understand the value I need to specify, a handy first stop is the documentation page for the style rule on [ESlint.org](https://ESlint.org).
>
> **[0:39](https://www.linkedin.com/learning/eslint-customizing-styles/turning-on-checking-for-a-rule?u=76281980&t=39)** I want to use the one true brace-style and reading through the docs, that's the default when I turn the rule on.
>
> **[0:46](https://www.linkedin.com/learning/eslint-customizing-styles/turning-on-checking-for-a-rule?u=76281980&t=46)** Whenever I'm happy with the defaults, I just have to specify a string as the value.
>
> **[0:51](https://www.linkedin.com/learning/eslint-customizing-styles/turning-on-checking-for-a-rule?u=76281980&t=51)** That string indicates what I want to happen when my code violates this rule.
>
> **[0:57](https://www.linkedin.com/learning/eslint-customizing-styles/turning-on-checking-for-a-rule?u=76281980&t=57)** ESlint has three settings for what happens.
>
> **[1:01](https://www.linkedin.com/learning/eslint-customizing-styles/turning-on-checking-for-a-rule?u=76281980&t=61)** Off for nothing, warn for generating a warning that allows the build to continue or error that throws and error and an exit code.
>
> **[1:13](https://www.linkedin.com/learning/eslint-customizing-styles/turning-on-checking-for-a-rule?u=76281980&t=73)** So in my rules section, I'm going to specify brace-style as a string then a colon and I want this to throw an error.
>
> **[1:25](https://www.linkedin.com/learning/eslint-customizing-styles/turning-on-checking-for-a-rule?u=76281980&t=85)** I want to be stringent.
>
> **[1:27](https://www.linkedin.com/learning/eslint-customizing-styles/turning-on-checking-for-a-rule?u=76281980&t=87)** So I'll specify error as my value and I'm going to use single quotes.
>
> **[1:32](https://www.linkedin.com/learning/eslint-customizing-styles/turning-on-checking-for-a-rule?u=76281980&t=92)** Now over in the documentation, you notice that in addition to the strings, you can use a number instead.
>
> **[1:38](https://www.linkedin.com/learning/eslint-customizing-styles/turning-on-checking-for-a-rule?u=76281980&t=98)** So 01 or 2 will give you those same results.
>
> **[1:43](https://www.linkedin.com/learning/eslint-customizing-styles/turning-on-checking-for-a-rule?u=76281980&t=103)** But I like to use the strings just because it makes the code a little more self-documenting, makes it clear to anybody who reads my configuration what I intend to happen here.
>
> **[1:52](https://www.linkedin.com/learning/eslint-customizing-styles/turning-on-checking-for-a-rule?u=76281980&t=112)** So I'm going to save this change.
>
> **[1:54](https://www.linkedin.com/learning/eslint-customizing-styles/turning-on-checking-for-a-rule?u=76281980&t=114)** Now, I have the ESlint extension installed in my editor.
>
> **[1:58](https://www.linkedin.com/learning/eslint-customizing-styles/turning-on-checking-for-a-rule?u=76281980&t=118)** In the source folder, I can open my index.js file.
>
> **[2:02](https://www.linkedin.com/learning/eslint-customizing-styles/turning-on-checking-for-a-rule?u=76281980&t=122)** And right here in the editor, the extension shows me that I have a number of errors.
>
> **[2:06](https://www.linkedin.com/learning/eslint-customizing-styles/turning-on-checking-for-a-rule?u=76281980&t=126)** It shows me that number right here and it shows me these red squiggles where it sees errors.
>
> **[2:12](https://www.linkedin.com/learning/eslint-customizing-styles/turning-on-checking-for-a-rule?u=76281980&t=132)** And in particular, I have one error here around the braces.
>
> **[2:16](https://www.linkedin.com/learning/eslint-customizing-styles/turning-on-checking-for-a-rule?u=76281980&t=136)** So if I select the file and hover over, I have brace-style as the rule that's being violated here.
>
> **[2:24](https://www.linkedin.com/learning/eslint-customizing-styles/turning-on-checking-for-a-rule?u=76281980&t=144)** So right there in the editor, I have that information.
>
> **[2:28](https://www.linkedin.com/learning/eslint-customizing-styles/turning-on-checking-for-a-rule?u=76281980&t=148)** Now if you don't have an extension installed in your editor, you can go to the command line and you can use npm run lint which is a script that I've configured for this project.
>
> **[2:42](https://www.linkedin.com/learning/eslint-customizing-styles/turning-on-checking-for-a-rule?u=76281980&t=162)** And this gives me a readout of all the errors in this project.
>
> **[2:48](https://www.linkedin.com/learning/eslint-customizing-styles/turning-on-checking-for-a-rule?u=76281980&t=168)** So there is a couple others but these last two right here are errors for curly braces specifically around the brace-style.
>
> **[2:56](https://www.linkedin.com/learning/eslint-customizing-styles/turning-on-checking-for-a-rule?u=76281980&t=176)** So if you don't have that extension you can still do any of these checks at the command line.
>
> **[3:01](https://www.linkedin.com/learning/eslint-customizing-styles/turning-on-checking-for-a-rule?u=76281980&t=181)** So if I go back to my .eslintrc file, maybe I want to flag these issues but let that build run anyway because those errors right now are going to throw an error and keep that built from happening.
>
> **[3:15](https://www.linkedin.com/learning/eslint-customizing-styles/turning-on-checking-for-a-rule?u=76281980&t=195)** So I'll change the value for brace-style to warn.
>
> **[3:19](https://www.linkedin.com/learning/eslint-customizing-styles/turning-on-checking-for-a-rule?u=76281980&t=199)** And I'll save that and then back in index.js, these two, these other errors that we'll get to in a minute are still in red as errors but down here now the underscores in yellow for the brace-style and that means that this would just throw a warning and my build would still succeed.
>
> **[3:37](https://www.linkedin.com/learning/eslint-customizing-styles/turning-on-checking-for-a-rule?u=76281980&t=217)** Now I can go through and fix those brace issues so first off, the brace-style, you start with that opening brace on the first line of code and you don't put your "else" on a different line.
>
> **[3:48](https://www.linkedin.com/learning/eslint-customizing-styles/turning-on-checking-for-a-rule?u=76281980&t=228)** So I'll fix those and now I've got that ironed out but I still have another issue.
>
> **[3:53](https://www.linkedin.com/learning/eslint-customizing-styles/turning-on-checking-for-a-rule?u=76281980&t=233)** I saw this at the command line and I see it also in the pop-up in my editor here that I've got no unused vars.
>
> **[4:00](https://www.linkedin.com/learning/eslint-customizing-styles/turning-on-checking-for-a-rule?u=76281980&t=240)** So I've declared the text variable and I'm never using it and same thing with the counter variable.
>
> **[4:06](https://www.linkedin.com/learning/eslint-customizing-styles/turning-on-checking-for-a-rule?u=76281980&t=246)** Now I haven't created a key value pair for this issue in my eslintrc.
>
> **[4:12](https://www.linkedin.com/learning/eslint-customizing-styles/turning-on-checking-for-a-rule?u=76281980&t=252)** All I've got is that one brace-style rule.
>
> **[4:14](https://www.linkedin.com/learning/eslint-customizing-styles/turning-on-checking-for-a-rule?u=76281980&t=254)** But what I have done is set up the ESlint to use the recommended rules and settings as a baseline for this project and that comes from the extends key and ESlint recommended as the value.
>
> **[4:26](https://www.linkedin.com/learning/eslint-customizing-styles/turning-on-checking-for-a-rule?u=76281980&t=266)** In the documentation for the ESlint rule on [ESlint.org](https://ESlint.org), the rules of a check marks next to them are turned on by default when I use the recommended rules.
>
> **[4:38](https://www.linkedin.com/learning/eslint-customizing-styles/turning-on-checking-for-a-rule?u=76281980&t=278)** And just searching the page on no-unused variables, there we go, it's right here.
>
> **[4:43](https://www.linkedin.com/learning/eslint-customizing-styles/turning-on-checking-for-a-rule?u=76281980&t=283)** It's got a check mark.
>
> **[4:45](https://www.linkedin.com/learning/eslint-customizing-styles/turning-on-checking-for-a-rule?u=76281980&t=285)** So that's why this issue is getting flagged in my code even though I haven't written a rule for it because I'm using those recommended values.
>
> **[4:53](https://www.linkedin.com/learning/eslint-customizing-styles/turning-on-checking-for-a-rule?u=76281980&t=293)** But I can also use my rules key down here to turn off a rule that's part of whatever style I'm using as a baseline like the ESlint recommended rules.
>
> **[5:04](https://www.linkedin.com/learning/eslint-customizing-styles/turning-on-checking-for-a-rule?u=76281980&t=304)** For now I'm okay with unused variables in my code during development.
>
> **[5:09](https://www.linkedin.com/learning/eslint-customizing-styles/turning-on-checking-for-a-rule?u=76281980&t=309)** So in .eslintrc, I'm going to add another key value pair here and that's going to be no-unused-vars.
>
> **[5:17](https://www.linkedin.com/learning/eslint-customizing-styles/turning-on-checking-for-a-rule?u=76281980&t=317)** And I'm going to use the value of off.
>
> **[5:21](https://www.linkedin.com/learning/eslint-customizing-styles/turning-on-checking-for-a-rule?u=76281980&t=321)** And I'll save that and now back in my index.js, I don't have any issues at all because my .Eslintrc rules override that baseline from the style guide.
>
> **[5:34](https://www.linkedin.com/learning/eslint-customizing-styles/turning-on-checking-for-a-rule?u=76281980&t=334)** So now I have an ESlint rule set up to turn on checking for a rule and another to turn off checking for a rule.

> [!info]- Semantic Content
>
> **Code Keywords:** throw (3), default, (1), continue (1), self (1), let (1)
> **Best Practices:** recommended (5)
> **Documentation:** the documentation (3), the docs (1)
> **File Paths:** index.js (3)
> **Tools:** command line (3)
> **Definitions:** is a  (2), is an  (1)
> **CLI Commands:** npx (1), npm (1)
> **URLs:** [eslint.org](https://eslint.org) (2)

#### Configuring options for a rule
> [LinkedIn Learning](https://www.linkedin.com/learning/eslint-customizing-styles/configuring-options-for-a-rule?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/eslint-customizing-styles/configuring-options-for-a-rule?u=76281980&t=0)** - [Instructor] I want to add a style rule to my project to help me enforce spacing around curly braces in code for objects.
>
> **[0:07](https://www.linkedin.com/learning/eslint-customizing-styles/configuring-options-for-a-rule?u=76281980&t=7)** ESLint supports an object curly spacing rule for this detail and in the rules list it doesn't have a check mark so I have to enable it myself if I want to use it.
>
> **[0:18](https://www.linkedin.com/learning/eslint-customizing-styles/configuring-options-for-a-rule?u=76281980&t=18)** So I can add in my .eslintrc file object-curly-spacing
>
> **[0:26](https://www.linkedin.com/learning/eslint-customizing-styles/configuring-options-for-a-rule?u=76281980&t=26)** with a value of error and I'll save that and then over in my code I'll add a test statement for that.
>
> **[0:37](https://www.linkedin.com/learning/eslint-customizing-styles/configuring-options-for-a-rule?u=76281980&t=37)** So I'll do a constant called contact and I'll make that an object with a firstName of Sasha and I'm including a space after the opening curly brace and before the closing curly brace.
>
> **[0:54](https://www.linkedin.com/learning/eslint-customizing-styles/configuring-options-for-a-rule?u=76281980&t=54)** Now this is a single line statement so for me including the spaces makes the content stand out better from the surrounding characters.
>
> **[1:02](https://www.linkedin.com/learning/eslint-customizing-styles/configuring-options-for-a-rule?u=76281980&t=62)** But when I save it, my editor flags it as an error which I can see with those red squiggles right there.
>
> **[1:07](https://www.linkedin.com/learning/eslint-customizing-styles/configuring-options-for-a-rule?u=76281980&t=67)** Now I wrote the test code the way I wanted it to be, so this makes me think I didn't write the ESLint rule quite right so I'm going to check the documentation.
>
> **[1:17](https://www.linkedin.com/learning/eslint-customizing-styles/configuring-options-for-a-rule?u=76281980&t=77)** And in fact this rule has a second option which is never or always.
>
> **[1:25](https://www.linkedin.com/learning/eslint-customizing-styles/configuring-options-for-a-rule?u=76281980&t=85)** So in addition to turning it on I can choose which way I want the rule to work.
>
> **[1:31](https://www.linkedin.com/learning/eslint-customizing-styles/configuring-options-for-a-rule?u=76281980&t=91)** And the default here is never which is to say no spaces ever.
>
> **[1:35](https://www.linkedin.com/learning/eslint-customizing-styles/configuring-options-for-a-rule?u=76281980&t=95)** So I wrote a rule that calls for never having spaces inside curly braces in an object literal when I actually want the opposite.
>
> **[1:43](https://www.linkedin.com/learning/eslint-customizing-styles/configuring-options-for-a-rule?u=76281980&t=103)** But that's pretty easy to correct.
>
> **[1:45](https://www.linkedin.com/learning/eslint-customizing-styles/configuring-options-for-a-rule?u=76281980&t=105)** I just need to add that second argument.
>
> **[1:48](https://www.linkedin.com/learning/eslint-customizing-styles/configuring-options-for-a-rule?u=76281980&t=108)** Now when I have multiple arguments for an ESLint rule they go in an array like the sample code here.
>
> **[1:57](https://www.linkedin.com/learning/eslint-customizing-styles/configuring-options-for-a-rule?u=76281980&t=117)** And so over in my eslintrc file I need to convert my existing error string to be the first element in an array and I'm going to break that up onto multiple lines, go ahead and add in that closing punctuation just to make sure I don't forget it.
>
> **[2:16](https://www.linkedin.com/learning/eslint-customizing-styles/configuring-options-for-a-rule?u=76281980&t=136)** And then on the first line I have the existing element in that array which is the error string.
>
> **[2:21](https://www.linkedin.com/learning/eslint-customizing-styles/configuring-options-for-a-rule?u=76281980&t=141)** And then I want a second element which is the string always because I always want a space inside each curly brace for my objects.
>
> **[2:31](https://www.linkedin.com/learning/eslint-customizing-styles/configuring-options-for-a-rule?u=76281980&t=151)** Now I'll save that and then I'll go back to index.js, and my editor is no longer flagging an issue because the code I wrote fits my rule.
>
> **[2:42](https://www.linkedin.com/learning/eslint-customizing-styles/configuring-options-for-a-rule?u=76281980&t=162)** If I take those spaces out now I get an error because I specified I want them to work the other way.
>
> **[2:50](https://www.linkedin.com/learning/eslint-customizing-styles/configuring-options-for-a-rule?u=76281980&t=170)** So here I've specified a non-default value for a simple rule.
>
> **[2:54](https://www.linkedin.com/learning/eslint-customizing-styles/configuring-options-for-a-rule?u=76281980&t=174)** So I'm going to go ahead and take out those spaces again and make everything work according to the rules.
>
> **[3:02](https://www.linkedin.com/learning/eslint-customizing-styles/configuring-options-for-a-rule?u=76281980&t=182)** Now when it comes to styles, it's common to have really specific ways of approaching some details.
>
> **[3:07](https://www.linkedin.com/learning/eslint-customizing-styles/configuring-options-for-a-rule?u=76281980&t=187)** Take comma-spacing.
>
> **[3:09](https://www.linkedin.com/learning/eslint-customizing-styles/configuring-options-for-a-rule?u=76281980&t=189)** I want to write a rule for comma-spacing, and for commas I have to think about spaces before and spaces after.
>
> **[3:16](https://www.linkedin.com/learning/eslint-customizing-styles/configuring-options-for-a-rule?u=76281980&t=196)** Now there's a comma spacing rule and it has defaults.
>
> **[3:20](https://www.linkedin.com/learning/eslint-customizing-styles/configuring-options-for-a-rule?u=76281980&t=200)** But it allows me to get even more finely grained than simply always or never.
>
> **[3:25](https://www.linkedin.com/learning/eslint-customizing-styles/configuring-options-for-a-rule?u=76281980&t=205)** If I turn this on, by default it's before never and after always.
>
> **[3:33](https://www.linkedin.com/learning/eslint-customizing-styles/configuring-options-for-a-rule?u=76281980&t=213)** So in my eslintrc file I'm going to start a new rule, comma dash spacing, and to use the default settings I can just set this to error.
>
> **[3:50](https://www.linkedin.com/learning/eslint-customizing-styles/configuring-options-for-a-rule?u=76281980&t=230)** And then in my index.js file I'll add some test code.
>
> **[3:55](https://www.linkedin.com/learning/eslint-customizing-styles/configuring-options-for-a-rule?u=76281980&t=235)** Const scores, and I'll just make a little array.
>
> **[3:58](https://www.linkedin.com/learning/eslint-customizing-styles/configuring-options-for-a-rule?u=76281980&t=238)** 55, 23, 78.
>
> **[4:04](https://www.linkedin.com/learning/eslint-customizing-styles/configuring-options-for-a-rule?u=76281980&t=244)** I've used a space after each comma, but not before, which is the default.
>
> **[4:09](https://www.linkedin.com/learning/eslint-customizing-styles/configuring-options-for-a-rule?u=76281980&t=249)** And I save it, and ESLint doesn't flag it, so this code fits with my rules.
>
> **[4:16](https://www.linkedin.com/learning/eslint-customizing-styles/configuring-options-for-a-rule?u=76281980&t=256)** But what if I'm on a project that uses a different style by convention?
>
> **[4:20](https://www.linkedin.com/learning/eslint-customizing-styles/configuring-options-for-a-rule?u=76281980&t=260)** Maybe spacing before and after each comma to make the comma stand out.
>
> **[4:24](https://www.linkedin.com/learning/eslint-customizing-styles/configuring-options-for-a-rule?u=76281980&t=264)** So I'll stick a couple spaces in there.
>
> **[4:26](https://www.linkedin.com/learning/eslint-customizing-styles/configuring-options-for-a-rule?u=76281980&t=266)** So it's abundantly clear where those commas are and where the spaces are between values.
>
> **[4:30](https://www.linkedin.com/learning/eslint-customizing-styles/configuring-options-for-a-rule?u=76281980&t=270)** But now I've got my ESLint extension flagging an error here for comma spacing.
>
> **[4:37](https://www.linkedin.com/learning/eslint-customizing-styles/configuring-options-for-a-rule?u=76281980&t=277)** And so going back to iron this out in my ESLint file, I could add a second value, but in this case it's not enough.
>
> **[4:47](https://www.linkedin.com/learning/eslint-customizing-styles/configuring-options-for-a-rule?u=76281980&t=287)** I can't just say always is an argument because I need to specify settings for before and after.
>
> **[4:53](https://www.linkedin.com/learning/eslint-customizing-styles/configuring-options-for-a-rule?u=76281980&t=293)** So over in .eslintrc I'm going to start by converting my existing value to an array.
>
> **[5:00](https://www.linkedin.com/learning/eslint-customizing-styles/configuring-options-for-a-rule?u=76281980&t=300)** And then for that second argument I'm going to put in an object and the first key is before, the value is true, the second key is after, and that value is also true.
>
> **[5:20](https://www.linkedin.com/learning/eslint-customizing-styles/configuring-options-for-a-rule?u=76281980&t=320)** Now I'm using a JavaScript config file and this is just JavaScript object code.
>
> **[5:24](https://www.linkedin.com/learning/eslint-customizing-styles/configuring-options-for-a-rule?u=76281980&t=324)** I could easily write it as JSON in a JSON config file instead.
>
> **[5:29](https://www.linkedin.com/learning/eslint-customizing-styles/configuring-options-for-a-rule?u=76281980&t=329)** So saving that and returning back to index.js and now the editor is flagging some issues saying there should be no space before the comma but I said in my config that I do want a space before the comma.
>
> **[5:43](https://www.linkedin.com/learning/eslint-customizing-styles/configuring-options-for-a-rule?u=76281980&t=343)** So sometimes when the browser extension acts up I just close that JavaScript file, open it back up, and now I've got those rules being loaded correctly.
>
> **[5:54](https://www.linkedin.com/learning/eslint-customizing-styles/configuring-options-for-a-rule?u=76281980&t=354)** And now my code complies with the rule I wrote and so I have a specific setting that describes what I want here.
>
> **[6:04](https://www.linkedin.com/learning/eslint-customizing-styles/configuring-options-for-a-rule?u=76281980&t=364)** Now every rule has its own options so it's important to return to the documentation for the rule that you're working with to understand just what's possible and what structure you need to use to specify the settings you want.
>
> **[6:17](https://www.linkedin.com/learning/eslint-customizing-styles/configuring-options-for-a-rule?u=76281980&t=377)** But in general you'll be working with a familiar JavaScript data structure and the requirements are well documented at [eslint.org](https://eslint.org) for whatever rule you want to implement or tweak.

> [!info]- Semantic Content
>
> **CLI Commands:** make (5)
> **File Paths:** index.js (3)
> **Code Keywords:** const (1), default. (1)
> **Env Vars:** json (2)
> **Documentation:** the documentation (2)
> **Definitions:** is a  (1), is an  (1)
> **Code Identifiers:** firstname (1)
> **URLs:** [eslint.org](https://eslint.org) (1)

#### Troubleshooting ESLint styles
> [LinkedIn Learning](https://www.linkedin.com/learning/eslint-customizing-styles/troubleshooting-eslint-styles?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/eslint-customizing-styles/troubleshooting-eslint-styles?u=76281980&t=0)** - [Instructor] I've moved over to the troubleshooting folder in the start files.
>
> **[0:04](https://www.linkedin.com/learning/eslint-customizing-styles/troubleshooting-eslint-styles?u=76281980&t=4)** And in my .eslintrc file, I have one rule specified but in index.js, I expect that some of the standard rules are going to be applied, and I should have a bunch of errors here 'cause I wrote this code to test out the fact that these errors are being checked.
>
> **[0:20](https://www.linkedin.com/learning/eslint-customizing-styles/troubleshooting-eslint-styles?u=76281980&t=20)** But I've only got one thing being flagged so I think there's some things amiss here and I need to do a little troubleshooting.
>
> **[0:27](https://www.linkedin.com/learning/eslint-customizing-styles/troubleshooting-eslint-styles?u=76281980&t=27)** First thing is, I know I have an unused variable right here.
>
> **[0:30](https://www.linkedin.com/learning/eslint-customizing-styles/troubleshooting-eslint-styles?u=76281980&t=30)** I defined text and never use it in my code.
>
> **[0:33](https://www.linkedin.com/learning/eslint-customizing-styles/troubleshooting-eslint-styles?u=76281980&t=33)** Now, I didn't include that in .eslintrc because I know that the no unused vars rule is set as true by default in the ESLint recommended configuration.
>
> **[0:43](https://www.linkedin.com/learning/eslint-customizing-styles/troubleshooting-eslint-styles?u=76281980&t=43)** So, what's up?
>
> **[0:45](https://www.linkedin.com/learning/eslint-customizing-styles/troubleshooting-eslint-styles?u=76281980&t=45)** Well, the first place to check is .eslintrc, but not the rules key.
>
> **[0:51](https://www.linkedin.com/learning/eslint-customizing-styles/troubleshooting-eslint-styles?u=76281980&t=51)** Instead, I need to see what value I have for extends, which specifies the rules set, or style guide, that I'm using as a baseline.
>
> **[1:00](https://www.linkedin.com/learning/eslint-customizing-styles/troubleshooting-eslint-styles?u=76281980&t=60)** This might be Airbnb or another popular style guide, or it might the ESLint recommended styles.
>
> **[1:07](https://www.linkedin.com/learning/eslint-customizing-styles/troubleshooting-eslint-styles?u=76281980&t=67)** Now, in this .eslintrc file, I notice I have no value for extends so I have no baseline.
>
> **[1:14](https://www.linkedin.com/learning/eslint-customizing-styles/troubleshooting-eslint-styles?u=76281980&t=74)** And that's why I'm not seeing errors based on one of the recommended styles.
>
> **[1:18](https://www.linkedin.com/learning/eslint-customizing-styles/troubleshooting-eslint-styles?u=76281980&t=78)** So these keys are usually generated in alphabetical order just to keep everything clear So I want to add an extends key that'll come right after the env or Nth key.
>
> **[1:27](https://www.linkedin.com/learning/eslint-customizing-styles/troubleshooting-eslint-styles?u=76281980&t=87)** And so that's going to be extends, and the value's going to be eslint:recommended, and a comma after that.
>
> **[1:40](https://www.linkedin.com/learning/eslint-customizing-styles/troubleshooting-eslint-styles?u=76281980&t=100)** And I save that and then over in index.js, now I have a couple more errors being flagged and the first one is indeed that error for no unused vars.
>
> **[1:53](https://www.linkedin.com/learning/eslint-customizing-styles/troubleshooting-eslint-styles?u=76281980&t=113)** So just to bring my code in line with my style settings, I'm going to go ahead and comment that out.
>
> **[1:58](https://www.linkedin.com/learning/eslint-customizing-styles/troubleshooting-eslint-styles?u=76281980&t=118)** And again, the same thing down here, but I've got a little more work to do with that variable 'cause there's clearly another error there.
>
> **[2:03](https://www.linkedin.com/learning/eslint-customizing-styles/troubleshooting-eslint-styles?u=76281980&t=123)** So I'm going to leave that for right now.
>
> **[2:06](https://www.linkedin.com/learning/eslint-customizing-styles/troubleshooting-eslint-styles?u=76281980&t=126)** Now, I have another line of test code here that I expect to generate an error and it's not.
>
> **[2:11](https://www.linkedin.com/learning/eslint-customizing-styles/troubleshooting-eslint-styles?u=76281980&t=131)** I'm comparing a variable value to itself, which is pretty ridiculous and unlikely to be useful.
>
> **[2:19](https://www.linkedin.com/learning/eslint-customizing-styles/troubleshooting-eslint-styles?u=76281980&t=139)** I know I have the recommended styles in place but this isn't being flagged.
>
> **[2:23](https://www.linkedin.com/learning/eslint-customizing-styles/troubleshooting-eslint-styles?u=76281980&t=143)** So it's back to the documentation.
>
> **[2:25](https://www.linkedin.com/learning/eslint-customizing-styles/troubleshooting-eslint-styles?u=76281980&t=145)** The rule I'm thinking of is no self compare.
>
> **[2:30](https://www.linkedin.com/learning/eslint-customizing-styles/troubleshooting-eslint-styles?u=76281980&t=150)** And here on the list of styles, I notice it does not have a check mark, which means it's not included in the recommended styles.
>
> **[2:37](https://www.linkedin.com/learning/eslint-customizing-styles/troubleshooting-eslint-styles?u=76281980&t=157)** There's a similar rule, no self assign, rather than no self compare.
>
> **[2:41](https://www.linkedin.com/learning/eslint-customizing-styles/troubleshooting-eslint-styles?u=76281980&t=161)** And that is included in the recommended styles.
>
> **[2:44](https://www.linkedin.com/learning/eslint-customizing-styles/troubleshooting-eslint-styles?u=76281980&t=164)** You can see the check mark right there.
>
> **[2:46](https://www.linkedin.com/learning/eslint-customizing-styles/troubleshooting-eslint-styles?u=76281980&t=166)** But I want to enforce no self compare so I'll need to specify that myself in my in my .eslintrc.
>
> **[2:54](https://www.linkedin.com/learning/eslint-customizing-styles/troubleshooting-eslint-styles?u=76281980&t=174)** And so I'll go back and add that to my rules, no self compare error.
>
> **[3:04](https://www.linkedin.com/learning/eslint-customizing-styles/troubleshooting-eslint-styles?u=76281980&t=184)** Save that.
>
> **[3:05](https://www.linkedin.com/learning/eslint-customizing-styles/troubleshooting-eslint-styles?u=76281980&t=185)** Check over here again.
>
> **[3:07](https://www.linkedin.com/learning/eslint-customizing-styles/troubleshooting-eslint-styles?u=76281980&t=187)** Save my changes that I made here.
>
> **[3:10](https://www.linkedin.com/learning/eslint-customizing-styles/troubleshooting-eslint-styles?u=76281980&t=190)** And now that issue is being flagged.
>
> **[3:13](https://www.linkedin.com/learning/eslint-customizing-styles/troubleshooting-eslint-styles?u=76281980&t=193)** And again, just to get ride of that error, I'm going to comment this out and not worry about it.
>
> **[3:24](https://www.linkedin.com/learning/eslint-customizing-styles/troubleshooting-eslint-styles?u=76281980&t=204)** And my final test statement is an object called algorithm.
>
> **[3:29](https://www.linkedin.com/learning/eslint-customizing-styles/troubleshooting-eslint-styles?u=76281980&t=209)** So I have an error because I have an unused variable.
>
> **[3:31](https://www.linkedin.com/learning/eslint-customizing-styles/troubleshooting-eslint-styles?u=76281980&t=211)** I'm not worried about that right now.
>
> **[3:34](https://www.linkedin.com/learning/eslint-customizing-styles/troubleshooting-eslint-styles?u=76281980&t=214)** But I'm also getting an error thrown based on the func names rule.
>
> **[3:40](https://www.linkedin.com/learning/eslint-customizing-styles/troubleshooting-eslint-styles?u=76281980&t=220)** Now checking in .eslintrc, I did include func names rule here.
>
> **[3:45](https://www.linkedin.com/learning/eslint-customizing-styles/troubleshooting-eslint-styles?u=76281980&t=225)** Func names calls for all functions to be named.
>
> **[3:49](https://www.linkedin.com/learning/eslint-customizing-styles/troubleshooting-eslint-styles?u=76281980&t=229)** But I thought the sample code was adequately named.
>
> **[3:52](https://www.linkedin.com/learning/eslint-customizing-styles/troubleshooting-eslint-styles?u=76281980&t=232)** So the next step here is going to be to check the docs.
>
> **[3:56](https://www.linkedin.com/learning/eslint-customizing-styles/troubleshooting-eslint-styles?u=76281980&t=236)** And in func names, it turns out there's three levels of settings, and my result function relies on an implicit name, which is an ES6 feature.
>
> **[4:07](https://www.linkedin.com/learning/eslint-customizing-styles/troubleshooting-eslint-styles?u=76281980&t=247)** And I'm good with that.
>
> **[4:09](https://www.linkedin.com/learning/eslint-customizing-styles/troubleshooting-eslint-styles?u=76281980&t=249)** But the default for this rule is not good with that.
>
> **[4:12](https://www.linkedin.com/learning/eslint-customizing-styles/troubleshooting-eslint-styles?u=76281980&t=252)** So I was relying on that default and I just misunderstood the cases that that covered.
>
> **[4:18](https://www.linkedin.com/learning/eslint-customizing-styles/troubleshooting-eslint-styles?u=76281980&t=258)** So to get what I need, I want to use the as-needed option rather than always.
>
> **[4:25](https://www.linkedin.com/learning/eslint-customizing-styles/troubleshooting-eslint-styles?u=76281980&t=265)** So I'm going to update my rule.
>
> **[4:29](https://www.linkedin.com/learning/eslint-customizing-styles/troubleshooting-eslint-styles?u=76281980&t=269)** Instead of simply calling for an error, I need to make this into an array so I can tell the reporting level but also when that should be invoked and I want that to be as-needed.
>
> **[4:45](https://www.linkedin.com/learning/eslint-customizing-styles/troubleshooting-eslint-styles?u=76281980&t=285)** So I'm saving that, going back to index.js, and now that error in the function name is gone because my code now passes.
>
> **[4:56](https://www.linkedin.com/learning/eslint-customizing-styles/troubleshooting-eslint-styles?u=76281980&t=296)** So sometimes issues with ESLint's behavior stem from a misunderstanding of a rules default.
>
> **[5:02](https://www.linkedin.com/learning/eslint-customizing-styles/troubleshooting-eslint-styles?u=76281980&t=302)** And the same thing could even apply if I wrote out a detailed rule value.
>
> **[5:07](https://www.linkedin.com/learning/eslint-customizing-styles/troubleshooting-eslint-styles?u=76281980&t=307)** It's totally possible to get the value wrong or miss out on some cases and then CES loop behavior that doesn't match what I want.
>
> **[5:15](https://www.linkedin.com/learning/eslint-customizing-styles/troubleshooting-eslint-styles?u=76281980&t=315)** But as in so many situations the documentation is my friend.
>
> **[5:20](https://www.linkedin.com/learning/eslint-customizing-styles/troubleshooting-eslint-styles?u=76281980&t=320)** It's always a good idea to scan the [ESLint.org](https://ESLint.org) page for the rule and see if I might have missed something when setting it up.
>
> **[5:28](https://www.linkedin.com/learning/eslint-customizing-styles/troubleshooting-eslint-styles?u=76281980&t=328)** And now, after all that troubleshooting, my rules are good to go.
>
> **[5:32](https://www.linkedin.com/learning/eslint-customizing-styles/troubleshooting-eslint-styles?u=76281980&t=332)** The only errors I have flagged are ones that make sense, which are unused variables.
>
> **[5:36](https://www.linkedin.com/learning/eslint-customizing-styles/troubleshooting-eslint-styles?u=76281980&t=336)** And so I have fixed my rules, and I've got them working as I expect against my sample code.

> [!info]- Semantic Content
>
> **Code Keywords:** self (5), extends (4), function (2), this . (1), default. (1)
> **Best Practices:** recommended (7)
> **File Paths:** index.js (3)
> **Documentation:** the documentation (2), the docs (1)
> **CLI Commands:** make (2)
> **Env Vars:** es6 (1), ces (1)
> **Exercise Files:** sample code (2)
> **Definitions:** is an  (2)

#### Challenge: Customize ESLint styles
> [LinkedIn Learning](https://www.linkedin.com/learning/eslint-customizing-styles/challenge-customize-eslint-styles?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/eslint-customizing-styles/challenge-customize-eslint-styles?u=76281980&t=0)** (electronic techno music)
>
> **[0:05](https://www.linkedin.com/learning/eslint-customizing-styles/challenge-customize-eslint-styles?u=76281980&t=5)** - [Instructor] Ready to try your hand at troubleshooting an ESLint configuration?
>
> **[0:09](https://www.linkedin.com/learning/eslint-customizing-styles/challenge-customize-eslint-styles?u=76281980&t=9)** It's time for a challenge.
>
> **[0:12](https://www.linkedin.com/learning/eslint-customizing-styles/challenge-customize-eslint-styles?u=76281980&t=12)** The start files for this video are in the challenge folder.
>
> **[0:16](https://www.linkedin.com/learning/eslint-customizing-styles/challenge-customize-eslint-styles?u=76281980&t=16)** For this project, the .eslintrc file contains a few key value pairs in the rules section.
>
> **[0:22](https://www.linkedin.com/learning/eslint-customizing-styles/challenge-customize-eslint-styles?u=76281980&t=22)** And the index.js file in the source folder contains a set of test statements.
>
> **[0:27](https://www.linkedin.com/learning/eslint-customizing-styles/challenge-customize-eslint-styles?u=76281980&t=27)** Each test statement has a comment right above it that describes how ESLint should react to it.
>
> **[0:34](https://www.linkedin.com/learning/eslint-customizing-styles/challenge-customize-eslint-styles?u=76281980&t=34)** Some statements are written to result in errors, while others aren't.
>
> **[0:38](https://www.linkedin.com/learning/eslint-customizing-styles/challenge-customize-eslint-styles?u=76281980&t=38)** Your task is to edit the .eslintrc file to get the appropriate results from the index.js file.
>
> **[0:47](https://www.linkedin.com/learning/eslint-customizing-styles/challenge-customize-eslint-styles?u=76281980&t=47)** Remember to use [eslint.org](https://eslint.org) to read up on the documentation for the rules you're working with.
>
> **[0:53](https://www.linkedin.com/learning/eslint-customizing-styles/challenge-customize-eslint-styles?u=76281980&t=53)** This should take you 10 to 15 minutes.
>
> **[0:56](https://www.linkedin.com/learning/eslint-customizing-styles/challenge-customize-eslint-styles?u=76281980&t=56)** When you're done, join me in the next video and I'll walk you through how I approached it.
>
> **[1:01](https://www.linkedin.com/learning/eslint-customizing-styles/challenge-customize-eslint-styles?u=76281980&t=61)** Have fun.

> [!info]- Semantic Content
>
> **File Paths:** index.js (2)
> **URLs:** [eslint.org](https://eslint.org) (1)
> **Cross-References:** in the next (1)
> **Documentation:** the documentation (1)
> **Best Practices:** remember to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (electronic techno music) (1)

#### Solution: Customize ESLint styles
> [LinkedIn Learning](https://www.linkedin.com/learning/eslint-customizing-styles/solution-customize-eslint-styles?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/eslint-customizing-styles/solution-customize-eslint-styles?u=76281980&t=0)** (upbeat electronic music)
>
> **[0:06](https://www.linkedin.com/learning/eslint-customizing-styles/solution-customize-eslint-styles?u=76281980&t=6)** - [Instructor] So, sitting down with this challenge project.
>
> **[0:10](https://www.linkedin.com/learning/eslint-customizing-styles/solution-customize-eslint-styles?u=76281980&t=10)** The first thing I notice, is I've got some pretty common rules like no unused vars that are not being flagged here.
>
> **[0:21](https://www.linkedin.com/learning/eslint-customizing-styles/solution-customize-eslint-styles?u=76281980&t=21)** In fact, aside from the counter variable, all my other variables aren't used anywhere else.
>
> **[0:25](https://www.linkedin.com/learning/eslint-customizing-styles/solution-customize-eslint-styles?u=76281980&t=25)** So they should all be flagged at this point.
>
> **[0:28](https://www.linkedin.com/learning/eslint-customizing-styles/solution-customize-eslint-styles?u=76281980&t=28)** So, that makes me wonder what I'm using as a baseline here.
>
> **[0:33](https://www.linkedin.com/learning/eslint-customizing-styles/solution-customize-eslint-styles?u=76281980&t=33)** And indeed, back in eslintrc I don't have any extends value at all.
>
> **[0:41](https://www.linkedin.com/learning/eslint-customizing-styles/solution-customize-eslint-styles?u=76281980&t=41)** So, I'm just going to go with eslint recommended, and so we want the extends key and eslint:, lint:recommended as the value.
>
> **[0:56](https://www.linkedin.com/learning/eslint-customizing-styles/solution-customize-eslint-styles?u=76281980&t=56)** Save that, and go back here.
>
> **[1:00](https://www.linkedin.com/learning/eslint-customizing-styles/solution-customize-eslint-styles?u=76281980&t=60)** Now, I'm still not seeing an issue, but I do have no-unused-vars turned off.
>
> **[1:05](https://www.linkedin.com/learning/eslint-customizing-styles/solution-customize-eslint-styles?u=76281980&t=65)** I didn't notice that before.
>
> **[1:06](https://www.linkedin.com/learning/eslint-customizing-styles/solution-customize-eslint-styles?u=76281980&t=66)** So I looked for this for the wrong reasons, but now I at least know that I have my baseline setup.
>
> **[1:15](https://www.linkedin.com/learning/eslint-customizing-styles/solution-customize-eslint-styles?u=76281980&t=75)** And so let's start going down the list here.
>
> **[1:19](https://www.linkedin.com/learning/eslint-customizing-styles/solution-customize-eslint-styles?u=76281980&t=79)** So, I want to use the comma-dangle rule here, and I want to allow myself to have these terminal commas in an object literal.
>
> **[1:30](https://www.linkedin.com/learning/eslint-customizing-styles/solution-customize-eslint-styles?u=76281980&t=90)** Over here in .eslintrc, I do have comma-dangle turned on with error, so I'm going to go over to the rules and just search for comma-dangle, there it is, and I will open up and check out the documentation here.
>
> **[1:47](https://www.linkedin.com/learning/eslint-customizing-styles/solution-customize-eslint-styles?u=76281980&t=107)** And so, we've got a few options here.
>
> **[1:51](https://www.linkedin.com/learning/eslint-customizing-styles/solution-customize-eslint-styles?u=76281980&t=111)** Never disallows those trailing commas, but I actually want to allow those trailing commas, so I want to use always instead.
>
> **[1:59](https://www.linkedin.com/learning/eslint-customizing-styles/solution-customize-eslint-styles?u=76281980&t=119)** And so I just need to convert my string into an array like this right here.
>
> **[2:05](https://www.linkedin.com/learning/eslint-customizing-styles/solution-customize-eslint-styles?u=76281980&t=125)** And so back in the rules section, comma-dangle, I'm going to make this into an array, I'm a fan of making my arrays multi line just to make them more readable, so I'm going to do that.
>
> **[2:15](https://www.linkedin.com/learning/eslint-customizing-styles/solution-customize-eslint-styles?u=76281980&t=135)** And I'm going to do error, and always comma-dangle there as well.
>
> **[2:24](https://www.linkedin.com/learning/eslint-customizing-styles/solution-customize-eslint-styles?u=76281980&t=144)** And then back here, now I don't have that comma-dangle error.
>
> **[2:28](https://www.linkedin.com/learning/eslint-customizing-styles/solution-customize-eslint-styles?u=76281980&t=148)** We also had that showing up down here in these arrays and those are gone as well.
>
> **[2:31](https://www.linkedin.com/learning/eslint-customizing-styles/solution-customize-eslint-styles?u=76281980&t=151)** So, awesome, one down.
>
> **[2:35](https://www.linkedin.com/learning/eslint-customizing-styles/solution-customize-eslint-styles?u=76281980&t=155)** So the next one is for the yoda rule.
>
> **[2:37](https://www.linkedin.com/learning/eslint-customizing-styles/solution-customize-eslint-styles?u=76281980&t=157)** There's actually a yoda rule in ESLint.
>
> **[2:39](https://www.linkedin.com/learning/eslint-customizing-styles/solution-customize-eslint-styles?u=76281980&t=159)** So, I'm going to go back and do a search on yoda.
>
> **[2:44](https://www.linkedin.com/learning/eslint-customizing-styles/solution-customize-eslint-styles?u=76281980&t=164)** And this is yoda conditions.
>
> **[2:46](https://www.linkedin.com/learning/eslint-customizing-styles/solution-customize-eslint-styles?u=76281980&t=166)** So this is basically inverting the name and the value in an operation.
>
> **[2:52](https://www.linkedin.com/learning/eslint-customizing-styles/solution-customize-eslint-styles?u=76281980&t=172)** It's not wrong, but there's an argument that folks subscribe to that you really want to do these in an order that makes sense rather than having your code sound like yoda talks.
>
> **[3:03](https://www.linkedin.com/learning/eslint-customizing-styles/solution-customize-eslint-styles?u=76281980&t=183)** So, fix this we will.
>
> **[3:05](https://www.linkedin.com/learning/eslint-customizing-styles/solution-customize-eslint-styles?u=76281980&t=185)** And to do that, I simply want to turn it on, and I'm going to use the default which is never, saying I never want yoda conditions.
>
> **[3:16](https://www.linkedin.com/learning/eslint-customizing-styles/solution-customize-eslint-styles?u=76281980&t=196)** I don't even need to say never, I can just turn this on and make it an error.
>
> **[3:21](https://www.linkedin.com/learning/eslint-customizing-styles/solution-customize-eslint-styles?u=76281980&t=201)** So, in my eslint, I'm going to add a new line which is yoda, error, the value is.
>
> **[3:35](https://www.linkedin.com/learning/eslint-customizing-styles/solution-customize-eslint-styles?u=76281980&t=215)** And now I get the error I expected here, because generally the way we write this is counter less than 10 rather than 10 greater than counter.
>
> **[3:45](https://www.linkedin.com/learning/eslint-customizing-styles/solution-customize-eslint-styles?u=76281980&t=225)** So, for my personal style, I want to use this and so counter less than 10.
>
> **[3:52](https://www.linkedin.com/learning/eslint-customizing-styles/solution-customize-eslint-styles?u=76281980&t=232)** It's important when fixing that to make sure you're inverting that sign.
>
> **[3:56](https://www.linkedin.com/learning/eslint-customizing-styles/solution-customize-eslint-styles?u=76281980&t=236)** You don't want to just flip the sides around but leave the same comparison operator in there.
>
> **[4:01](https://www.linkedin.com/learning/eslint-customizing-styles/solution-customize-eslint-styles?u=76281980&t=241)** At least when it's not an equal.
>
> **[4:03](https://www.linkedin.com/learning/eslint-customizing-styles/solution-customize-eslint-styles?u=76281980&t=243)** So, we got an error now for the yoda rule here.
>
> **[4:06](https://www.linkedin.com/learning/eslint-customizing-styles/solution-customize-eslint-styles?u=76281980&t=246)** And we fixed that.
>
> **[4:09](https://www.linkedin.com/learning/eslint-customizing-styles/solution-customize-eslint-styles?u=76281980&t=249)** And then we have two different comments down here at the bottom about array-brackets-newline.
>
> **[4:15](https://www.linkedin.com/learning/eslint-customizing-styles/solution-customize-eslint-styles?u=76281980&t=255)** In the first one, we want errors.
>
> **[4:17](https://www.linkedin.com/learning/eslint-customizing-styles/solution-customize-eslint-styles?u=76281980&t=257)** The second one, we want no errors.
>
> **[4:20](https://www.linkedin.com/learning/eslint-customizing-styles/solution-customize-eslint-styles?u=76281980&t=260)** So, we got to get a little fine grained in this rule here.
>
> **[4:24](https://www.linkedin.com/learning/eslint-customizing-styles/solution-customize-eslint-styles?u=76281980&t=264)** So array-brackets-newline, I'm going to head to the docs, array-bracket-newline.
>
> **[4:32](https://www.linkedin.com/learning/eslint-customizing-styles/solution-customize-eslint-styles?u=76281980&t=272)** Okay, it's actually singular, array-bracket-newline.
>
> **[4:37](https://www.linkedin.com/learning/eslint-customizing-styles/solution-customize-eslint-styles?u=76281980&t=277)** And so in this case, we've got a few options and we've got a couple extras here.
>
> **[4:45](https://www.linkedin.com/learning/eslint-customizing-styles/solution-customize-eslint-styles?u=76281980&t=285)** So we can do multiline, that always require line breaks in between elements.
>
> **[4:54](https://www.linkedin.com/learning/eslint-customizing-styles/solution-customize-eslint-styles?u=76281980&t=294)** We've got minItems, and this one lets us say "Okay, a certain number "can be on a line together, "but if it gets more than that, "we want them on multiple lines."
>
> **[5:04](https://www.linkedin.com/learning/eslint-customizing-styles/solution-customize-eslint-styles?u=76281980&t=304)** And looking back at our code, that's the difference here.
>
> **[5:08](https://www.linkedin.com/learning/eslint-customizing-styles/solution-customize-eslint-styles?u=76281980&t=308)** We've got two items in the second array, but we've got five items in the first array.
>
> **[5:14](https://www.linkedin.com/learning/eslint-customizing-styles/solution-customize-eslint-styles?u=76281980&t=314)** So we don't want to require a new line for two items or less.
>
> **[5:18](https://www.linkedin.com/learning/eslint-customizing-styles/solution-customize-eslint-styles?u=76281980&t=318)** We want to require a new line say three items or more.
>
> **[5:23](https://www.linkedin.com/learning/eslint-customizing-styles/solution-customize-eslint-styles?u=76281980&t=323)** And so looking at the code, I'll find some sample code for this.
>
> **[5:32](https://www.linkedin.com/learning/eslint-customizing-styles/solution-customize-eslint-styles?u=76281980&t=332)** We've got minItems two.
>
> **[5:35](https://www.linkedin.com/learning/eslint-customizing-styles/solution-customize-eslint-styles?u=76281980&t=335)** So we probably want to do a minItems three, for requiring that multiline.
>
> **[5:40](https://www.linkedin.com/learning/eslint-customizing-styles/solution-customize-eslint-styles?u=76281980&t=340)** So we want to change ours to an error, we want it on a multiline so that requires us to use this multiline true, but we want to qualify that and say that that's for a minimum items of three.
>
> **[5:54](https://www.linkedin.com/learning/eslint-customizing-styles/solution-customize-eslint-styles?u=76281980&t=354)** So, in eslintrc, I'm going to add the array-bracket-newline
>
> **[6:07](https://www.linkedin.com/learning/eslint-customizing-styles/solution-customize-eslint-styles?u=76281980&t=367)** and my array is going to flag that as an error.
>
> **[6:14](https://www.linkedin.com/learning/eslint-customizing-styles/solution-customize-eslint-styles?u=76281980&t=374)** And then describing what I actually want here.
>
> **[6:19](https://www.linkedin.com/learning/eslint-customizing-styles/solution-customize-eslint-styles?u=76281980&t=379)** I want multiline option, with a value of true.
>
> **[6:25](https://www.linkedin.com/learning/eslint-customizing-styles/solution-customize-eslint-styles?u=76281980&t=385)** And I want the minItems, camel case, value.
>
> **[6:31](https://www.linkedin.com/learning/eslint-customizing-styles/solution-customize-eslint-styles?u=76281980&t=391)** And the minimum number of items that should trigger the multiline mode should be three.
>
> **[6:40](https://www.linkedin.com/learning/eslint-customizing-styles/solution-customize-eslint-styles?u=76281980&t=400)** So I'll save that.
>
> **[6:42](https://www.linkedin.com/learning/eslint-customizing-styles/solution-customize-eslint-styles?u=76281980&t=402)** And we can check that in the file over here.
>
> **[6:46](https://www.linkedin.com/learning/eslint-customizing-styles/solution-customize-eslint-styles?u=76281980&t=406)** I do not have an error on the second one, there's no error anymore, so I've got these on the same line and that's fine.
>
> **[6:53](https://www.linkedin.com/learning/eslint-customizing-styles/solution-customize-eslint-styles?u=76281980&t=413)** And up here I do have an error saying a linebreak is required after that opening square bracket, before the closing square bracket, because of the number of items I have here.
>
> **[7:05](https://www.linkedin.com/learning/eslint-customizing-styles/solution-customize-eslint-styles?u=76281980&t=425)** This is actually adjust to match the rule we just put in, array-bracket-newline.
>
> **[7:10](https://www.linkedin.com/learning/eslint-customizing-styles/solution-customize-eslint-styles?u=76281980&t=430)** So we've successfully gotten that error to show up on the first one and not on the second.
>
> **[7:14](https://www.linkedin.com/learning/eslint-customizing-styles/solution-customize-eslint-styles?u=76281980&t=434)** I think if we want to fix that, we're going to break this up and I'm going to prefer that if we're breaking it up like that I want all my values on different lines as well.
>
> **[7:29](https://www.linkedin.com/learning/eslint-customizing-styles/solution-customize-eslint-styles?u=76281980&t=449)** I leaned really heavily on the documentation, that's always my friend, and I started out looking for that extension, looking for what we are starting with as a baseline.
>
> **[7:42](https://www.linkedin.com/learning/eslint-customizing-styles/solution-customize-eslint-styles?u=76281980&t=462)** So just taking it step by step and issue by issue, got this ironed out so that I have a set of rules that define how I want my code to look.
>
> **[7:54](https://www.linkedin.com/learning/eslint-customizing-styles/solution-customize-eslint-styles?u=76281980&t=474)** And my code now looks the way I want it to.

> [!info]- Semantic Content
>
> **Code Keywords:** require (3), extends (2), case, (2), else. (1), let (1)
> **CLI Commands:** make (4), find (1)
> **Code Identifiers:** minitems (4)
> **Documentation:** the documentation (2), the docs (1)
> **Best Practices:** recommended (2)
> **Tools:** terminal (1)
> **Exercise Files:** sample code (1)
> **Prerequisites:** setup (1)


### Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/eslint-customizing-styles/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/eslint-customizing-styles/next-steps?u=76281980&t=0)** - [Narrator] Thanks so much for joining me in this course.
>
> **[0:03](https://www.linkedin.com/learning/eslint-customizing-styles/next-steps?u=76281980&t=3)** You now have experience customizing ESLint for your projects.
>
> **[0:07](https://www.linkedin.com/learning/eslint-customizing-styles/next-steps?u=76281980&t=7)** To dig deeper into incorporating ESLint into a tool chain, check out a course on integrating ESLint.
>
> **[0:13](https://www.linkedin.com/learning/eslint-customizing-styles/next-steps?u=76281980&t=13)** If you want to learn more about the reasons behind common coding styles, check out a course on JavaScript best practices.
>
> **[0:20](https://www.linkedin.com/learning/eslint-customizing-styles/next-steps?u=76281980&t=20)** Feel free to follow me online.
>
> **[0:22](https://www.linkedin.com/learning/eslint-customizing-styles/next-steps?u=76281980&t=22)** Now take your new skills and build something amazing.
>
> **[0:25](https://www.linkedin.com/learning/eslint-customizing-styles/next-steps?u=76281980&t=25)** Good luck!

> [!info]- Semantic Content
>
> **Speakers:** - [narrator] (1)


## Path Context

### In [[Advance Your JavaScript Skills]]
← [[ESLint- Checking for Syntax and Logic Errors]] | **6 of 10** | [[Foundational JavaScript Security]] →

## Appears In

- [[Advance Your JavaScript Skills]]

## Related Courses

_Courses sharing skills:_

- [[ESLint- Checking for Syntax and Logic Errors]] — ESLint
- [[ESLint- Integrating with Your Workflow]] — ESLint

---

[↑ Back to top](#)