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
  - '[Advance Your JavaScript Skills](../../Paths/Software%20Development/Learning%20Paths/Advance%20Your%20JavaScript%20Skills.md)'
prev_courses:
  - '[JavaScript- Test-Driven Development (ES6)](JavaScript-%20Test-Driven%20Development%20(ES6).md)'
next_courses:
  - '[ESLint- Checking for Syntax and Logic Errors](ESLint-%20Checking%20for%20Syntax%20and%20Logic%20Errors.md)'
path_nav: '[{"path":"Advance Your JavaScript Skills","position":4,"total":10,"prev":"JavaScript- Test-Driven Development (ES6)","next":"ESLint- Checking for Syntax and Logic Errors"}]'
path_count: 1
tags:
  - course
  - topic/software-development
  - skill/eslint
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/ESLint-%20Integrating%20with%20Your%20Workflow.md)

![ESLint: Integrating with Your Workflow](https://media.licdn.com/dms/image/v2/C4E0DAQE3jSbsANgXew/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1668021071471?e=2147483647&amp;v=beta&amp;t=IOz9Xyg7J9QRHZXFAKpdJ72EWRBlAWc403E186y6F0I)

# ESLint: Integrating with Your Workflow

> Errors crop up in even the most experienced JavaScript developer's code. ESLint can help you catch these issues early and often; it gives you a heads-up when your JavaScript code might work, but isn't quite right. This popular tool highlights errors as you're coding and allows you to write and enforce custom rules. In this concise course—the first in the ESLint series—learn how to integrate ESLint

> [LinkedIn Learning](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow) | 45m | Advanced | 3K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (4 videos)
  - [Customizing automatic error checking](#customizing-automatic-error-checking)
  - [What you should know](#what-you-should-know)
  - [Using the exercise files for this course](#using-the-exercise-files-for-this-course)
  - [Using GitHub Codespaces with this course](#using-github-codespaces-with-this-course)
- [**1. Integrating ESLint with Your Workflow**](#1-integrating-eslint-with-your-workflow) (6 videos)
  - [Setting up a project with ESLint](#setting-up-a-project-with-eslint)
  - [Enforcing code style with ESLint](#enforcing-code-style-with-eslint)
  - [Integrating ESLint with webpack](#integrating-eslint-with-webpack)
  - [Using ESLint in an editor](#using-eslint-in-an-editor)
  - [Challenge: Add ESLint to a project](#challenge-add-eslint-to-a-project)
  - [Solution: Add ESLint to a project](#solution-add-eslint-to-a-project)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Customizing automatic error checking](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/customizing-automatic-error-checking-25668968?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/customizing-automatic-error-checking-25668968?u=76281980&t=0)** - [ESLint](../../Skills/Software%20Development/ESLint.md) is a really helpful tool for writing consistent code, but setting it up requires a lot of decision making. You want it to give you just the right amount of feedback on the style choices that matter to you to say nothing of incorporating it into your existing workflows. In this course, I'll show you how to add ESLint as a dependency. We'll configure it to use a popular style guide, and we'll add it to a build process. We'll also integrate ESLint into an editor so you can identify and fix issues before you build. After we're done, you'll be ready to add ESLint to any project.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [ESLint](../../Skills/Software%20Development/ESLint.md) (4)
> **Definitions:** is a  (1)
> **Prerequisites:** configure (1)
> **Speakers:** - eslint (1)

#### [What you should know](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/what-you-should-know?u=76281980&t=0)** - [Narrator] This course assumes you have intermediate to advanced level experience coding in front-end [JavaScript](../../Skills/Software%20Development/JavaScript.md), including modern ES6 syntax. It also assumes you know how to work with [npm](../../Skills/Web%20Development/npm.md) projects and webpack at the command line. If you need to brush up on working with packages and modules, search in our library for a course on npm. If you need to review basic webpack work flow and configuration, check out a webpack course in our library.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [npm](../../Skills/Web%20Development/npm.md) (2), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1)
> **CLI Commands:** npm (2)
> **Env Vars:** es6 (1)
> **Tools:** command line (1)
> **Speakers:** - [narrator] (1)

#### [Using the exercise files for this course](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-the-exercise-files-for-this-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-the-exercise-files-for-this-course?u=76281980&t=0)** - [Instructor] All of the files for this course are freely available as a [GitHub](../../Skills/Software%20Development/GitHub.md) repo at this URL. The repository is built so that there are branches for each of the videos in the course. You can use the branch popup to switch to a specific branch and take a look at how the code looked on a specific video. For example, the branch titled 01_02b would show you the code on chapter one and the second video in that chapter. If you see a letter B at the end of the name, it means that's how the code looked at the beginning of the video. If you see an E at the end of the branch, that's how the code looked at the end of the video. In this course, I go through installing and configuring [ESLint](../../Skills/Software%20Development/ESLint.md). If you want to, you can download any of these branches by first going to the branch and then hitting the clone or download button and downloading the ZIP file for the video that you want to follow along with. You may need to install MPM as well as [Git](../../Skills/Software%20Development/Git.md) before you do this. If you need more experience working with Git and GitHub, make sure you're familiar with Git and GitHub before taking this course. Do a search for GitHub in our library. If you're comfortable with this, then let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GitHub](../../Skills/Software%20Development/GitHub.md) (4), [Git](../../Skills/Software%20Development/Git.md) (3), [ESLint](../../Skills/Software%20Development/ESLint.md) (1)
> **CLI Commands:** git (3), make (1)
> **Tools:** github (4)
> **Env Vars:** url (1), zip (1), mpm (1)
> **Exercise Files:** github repo (1), zip file (1)
> **UI Navigation:** switch to (1)
> **Definitions:** means that (1)
> **Analogies:** for example (1)

#### [Using GitHub Codespaces with this course](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-github-codespaces-with-this-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-github-codespaces-with-this-course?u=76281980&t=0)** - [Instructor] This is Ravi De Lobos senior staff instructor at [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning, and I'm going to show you how to work with LinkedIn Learning courses using [GitHub](../../Skills/Software%20Development/GitHub.md) Code Spaces. Code Spaces is a code editor in the cloud with the full power of Visual Studio Code. It allows for real world hands-on practice that mirrors [Software Development](../../Topics/Software%20Development.md) in the workplace. This course has been adopted for use with GitHub code Spaces. Using code Spaces, you have everything you need to get going without needing complex installations or build tools. One click and you're ready to go. First, make sure you've signed up for a free GitHub account and that you've logged in. You just see your profile icon right here. When you go to the repository for one of our courses. Look for the code button. Click on Create code Space. The first time you open up a code space it might take a few minutes to create the virtual machine. Once it's done, you'll enter the code editor environment. If you're familiar with Visual Studio Code this is a special version of that editor running on GitHub's servers. The cloud editor's menu lives in a hamburger icon inside the activity bar the menu will let you see the keyboard shortcuts for your operating system. Let's find the shortcut for the command palette. Look in the hamburger menu under view and then look for the keyboard shortcut for your operating system. The activity bar has the most common tools you'll need to work with projects.
>
> **[1:33](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-github-codespaces-with-this-course?u=76281980&t=93)** You can, for example, show or hide the Explorer, do a search and replace for content, manage features of the repository and much more. By the way, if for any reason you lose the activity bar you can get it back using the command pallet. Your course can have one or more extensions pre-installed based on the course you're taking. Those can be found in the extensions panel. Because this is a browser it's easy to inadvertently close the browser window and lose the editor. If you do that don't panic code spaces saves everything you're doing on a virtual machine. You can always get the code space back for this repo by going to the code menu and finding your code space right here.
>
> **[2:32](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-github-codespaces-with-this-course?u=76281980&t=152)** Notice that it even remembered that I had opened the extensions panel. This is a sample of what a multi branch repository looks like, which is more common when you're working with web frameworks. If you go to the branch icon on the status bar you can see that there's more than one branch. You can switch to the different branches using this menu. The branches are named with the chapter and the video number you're watching. If you see a B at the end of the branch, that's how the the code looked at the beginning. If you see an E, that's how the code looked at the end. Let's switch to how the code looked on chapter two and the third video. I'll choose the beginning branch. As you work through a course, you might make some changes on a branch. I'm going to make a minor edit on the index at [HTML](../../Skills/Web%20Development/HTML.md) file right here. I'm going to go ahead and save that, and you can see that I've modified this file because there's an M right here and the branch name now has an asterisk on it. If I try to switch to another branch that CASAS major changes Like say 0703E, I may see a dialog box like this. If you don't care about saving your changes you can simply hit the force checkout button. It will let you switch to that branch. You can then choose to discard the changes on this file. Forking lets you create your own copy of the repository on your account so
>
> **[4:05](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-github-codespaces-with-this-course?u=76281980&t=245)** that you can keep any changes that you've made. even if you've deleted the code space. To create your own fork, you can click on the fork button on the repository. I'm going to hit Create fork. I have my own copy of this repository, and if I want to I can start a new coach space on that fork. This fork version is almost exactly like the original repository but it will let you push your own changes. Notice that the URL of the repository is slightly different. Let's go ahead and make a simple change to this file right here.
>
> **[4:54](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-github-codespaces-with-this-course?u=76281980&t=294)** I'm going to save it. You'll note that there is an M right here, as well as an asterisk on this branch in the source control panel you can also see a one for the change that we just made. Let's go ahead and try to commit this change. I'm going to ahead the commit button and I'll ask it to go ahead and space the changes and then I'm going to hit this button here to commit this onto my own version of the repo. I'll hit okay. You can also let it go ahead and run, get [Fetch](../../Skills/Web%20Development/Fetch.md). That way it'll automatically sync with your forked repo. Now that change will be stored in your own version of this repository. Don't worry if you forget the fork, a repo and then try to push changes. Code spaces will also ask you if you want to create a fork automatically. Some courses will let you work with life previews or create other ports so that you can have a web view of what you're doing. This is managed through the ports panel in the status bar. Right now, there are no ports forwarded but if I open up the live server extension you can see a preview of that file. Now, if we go back to the code space to manage ports you can click on the icon in the status bar and take a look at the currently available ports.
>
> **[6:28](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-github-codespaces-with-this-course?u=76281980&t=388)** If you want to open this up in a browser you can click right here, look for additional core specific tips from the instructor. Now, let's get back to the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GitHub](../../Skills/Software%20Development/GitHub.md) (4), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (2), [Software Development](../../Topics/Software%20Development.md) (1), [HTML](../../Skills/Web%20Development/HTML.md) (1), [Fetch](../../Skills/Web%20Development/Fetch.md) (1)
> **UI Navigation:** click on (3), switch to (3), go to (2)
> **Tools:** github (4), visual studio (2)
> **CLI Commands:** make (4), find (1)
> **Definitions:** is a  (4), is an  (1)
> **Env Vars:** casas (1), url (1)
> **Cross-References:** go back to (1)
> **Analogies:** for example (1)


### 1. Integrating ESLint with Your Workflow

[↑ Back to Table of Contents](#table-of-contents)

#### [Setting up a project with ESLint](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/setting-up-a-project-with-eslint?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/setting-up-a-project-with-eslint?u=76281980&t=0)** - [Instructor] It's pretty straightforward to add [ESLint](../../Skills/Software%20Development/ESLint.md) to a project using a package manager. In the folder for this video, I can add ESLint as a dependency. With [npm](../../Skills/Web%20Development/npm.md) install eslint and then I'm going to do a save dev. Save it as a dependency. So this is actually installing that ESLint package for this project. And I'm not worried about warnings here so we're going to go on as long as they're not errors. And next, I want to use npx to run ESLint with the init flag. So that's npx eslint double dash init. And that's going to kick off the ESLint set up wizard. So the first choice covers how I want to use ESLint. For now, I just want to check syntax and find problems without getting into my code style. So, I'm just going to press enter and take that default. Next is a choice about which module style ESLint should expect. Import export is fairly common. But if your project is used in common JS syntax or no modules at all, you can specify that here. I'm going to use that default, press enter. And next up is frameworks. ESLint can provide framework-specific integration for both [react](../../Skills/Web%20Development/React.js.md) and view. My project doesn't use either of those so I'm going to choose none of these and press enter. If you choose one of those others, you will be presented with additional framework-related questions later in the config process. Next is a question about typescript use. If you're using it, you can specify that here so ESLint can parse your code as TypeScript
>
> **[1:35](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/setting-up-a-project-with-eslint?u=76281980&t=95)** rather than as you know, a [JavaScript](../../Skills/Software%20Development/JavaScript.md). I'm not using TypeScript in this project and the default here is N, 'cause we have that capital N so I can just hit enter. Next, I need to specify whether my project contains front-end code, which runs in a browser or back-end code that's executed in the node environment. My project is front-end code. So I'll keep that default selection and press enter. And next, it's a question about the format of the config file. ESLint needs to save all the configuration options I just set. And I can choose from a few different formats. If you're planning to share the config file that ESLint generates with other people working on the same project, or if you're more comfortable in one format or another, you might have an opinion about the format. But you can store the same data in all of them. And I'm going to accept that default and generate a JavaScript file. And I get this message that eslintrc.js file has been created. This is the ESLint configuration for my project. So, I want to look at my new file list now. So I'm going to clear my terminal first. And then I'm going to use an ls and I'm going to do a -a so I can see my dot files as well. And right over here, I've got that .eslintrc.js file that was just created. And over in my editor, I've got my package that [JSON](../../Skills/Web%20Development/JSON.md) file open. And first off, I can see that eslint has been added as a dev dependency. And then I've also got my .eslintrc file. And if I open that up, I have a module
>
> **[3:11](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/setting-up-a-project-with-eslint?u=76281980&t=191)** that export statement with a set of keys. There's an env for the environment. And a few other configuration options. And then at the bottom, there's this rules key. And this is where I can specify any custom rules that I want ESLint to enforce. For now, with this default configuration, this extends key is specifying the ESLint-recommended set of rules. So any lint I do on my project will be based on those recommendations. ESLint allows you to configure a lot of rules and provides extensive documentation on each rule. On ESLint website, the rules with check marks next to them are included in the default recommended configuration. Back in my package.json, I can create a command to run ESLint on the current project. I'm going to use link as the name for my command. So, after the existing build command, 'cause my project uses webpack, I'm going to add another command called lint. Now the syntax for using ESLint is the term ESLint followed by one or more files or folders to lint. I'm going to specify the source folder as rc which contains my index.js file. So, my command here is going to be eslint space src. And I'll save those changes. Now, if you want to try out setting up ESLint on a project of your own, this is a good time to pause the video and give that a go.
>
> **[4:44](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/setting-up-a-project-with-eslint?u=76281980&t=284)** Then you can join back up and we can walk through testing it out. And so, returning to the terminal. I'm going to clear that. And I'm going to try npm run lint. And I've got an error message here but this is actually a good thing. Because if I dig up above the error messages, I have a very descriptive note here. And this is actually referencing an eslint rule. No unused vars. So, again, eslint can configure tons of things in your project. Here, one of the default rules is that you shouldn't declare a variable unless your code actually use it. And it's flagging that I declare this very rule text but didn't actually use it in my code. So this is actually really useful and this is why we love ESLint. So, I'm going to go back to my code. And in that source folder, I'm going to go open up index.js. There is my text variable. And just so I can use this and see how this affects the error, I'm going to go ahead and add console.log text. Save that. And then back in the terminal, I'll go ahead and reissue that last command npm run lint. The command execute it and back at the prompt. So this time, there were no issues at all. So that means that the code in my file follows all the rules that ESLint is currently configured to enforce.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [ESLint](../../Skills/Software%20Development/ESLint.md) (28), [npm](../../Skills/Web%20Development/npm.md) (3), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (2), [JSON](../../Skills/Web%20Development/JSON.md) (2), [React](../../Skills/Web%20Development/React.js.md) (1)
> **CLI Commands:** npm (3), npx (2), find (1), node (1), ls (1)
> **File Paths:** eslintrc.js (2), index.js (2), package.json (1)
> **Definitions:** is a  (3), means that (1)
> **Prerequisites:** configure (2), install (1), set up (1)
> **Tools:** terminal (3)
> **Cross-References:** later in (1), go back to (1)
> **Best Practices:** recommended (2)

#### [Enforcing code style with ESLint](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/enforcing-code-style-with-eslint?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/enforcing-code-style-with-eslint?u=76281980&t=0)** - [Instructor] In addition to checking syntax and finding problems, [ESLint](../../Skills/Software%20Development/ESLint.md) can enforce a code style that I specify. I can specify my own rules within the rules key, but it's pretty common to use a widely used style guide instead as a starting point. Now I already have ESLint configured for my project, and I could just make changes directly to the .eslintrc file to enable checking for style. But I'm going to run through the init step again to explore what's different when I specify that I want to enforce a code style. Responding to those prompts also keeps my hands off the eslintrc file, which eliminates configuration issues due to typos. To reinitialize ESLint, I use npx eslint --init. Now, I want to do a basic front-end setup without a framework, so I'm going to select most of the defaults, but the first choice covers how I want to use ESLint, and this is where I get to talk about code style. I want ESLint to check syntax. I want it to find problems, and I want it to enforce that code style. I'm going to choose that third option, and press Enter. Now I'm going to use [JavaScript](../../Skills/Software%20Development/JavaScript.md) modules, so I'll press Enter here for the default. I'm not using a framework, so down to None of these, and select that. I'm not using TypeScript, so I can press Enter to take the default here. And I'm writing front-end code, so I'm going to press Enter to select browser.
>
> **[1:33](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/enforcing-code-style-with-eslint?u=76281980&t=93)** Now because I chose to enforce code style earlier in the configuration, ESLint asks how I'd like to define a style for my project with the three options. First, I can select a popular style guide, such as Airbnb. If my project uses a popular style guide, specifying it during configuration allows me to quickly setup ESLint rather than specifying individual rules. If I'm not using a common style guide though, there are a couple of other options to get me setup as quickly as possible. I can answer questions about my style and allow ESLint to create rules based on my preferences. I can also ask ESLint to simply inspect my files and create rules based on my coding style. For instance, how many spaces I use for indents or whether I start a new line before or after opening curly braces. Now for this project, I want to use a popular style guide. So I'm going to keep the default selected, and press Enter. ESLint offers quick setup for three commonly used style guides, Airbnb, standard, and [Google](../../Glossary/Service/Google.md). If you're working on a big project, you should check which style guide is in use before selecting one. But for your own project, you can compare the styles and make your own choice. I'm a fan of the Airbnb style guide, so I'm going to keep that selected, and press Enter. Next is a question about the format of my config file, and I'm going to once again accept the default and generate a JavaScript file. Now the Airbnb style guide has a couple of dependencies, so I'll press Enter here to install those. And then, switching to my editor and checking out
>
> **[3:11](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/enforcing-code-style-with-eslint?u=76281980&t=191)** my .eslintrc.js file, I can see here that the value of extends has changed to airbnb-base. So this is based on the popular style guide that I chose in the init. Let's test this out. Before I changed my configuration, ESLint was linting only against the recommended syntax and code problems. Back in the terminal, I'm going to clear, and I'm going to use the lint command I have setup in [npm](../../Skills/Web%20Development/npm.md), so npm run lint. And now, I'm getting some interesting errors. The first one is a actual error, and it's flagging that I've created a variable, but I've never actually made a change to it so according to the style rules from Airbnb, that should just be declared as a const to be very clear in the code that that is meant to be a constant that's not changed. And I think that's a smart rule. And as long as I'm using the Airbnb style guide, my code won't successfully lint unless I follow it. Now the second one is about my console.log statement, and notice that this is just a warning. It's not going to keep my project from building, but it is a flag that's going to get raised whenever I build. Airbnb recommends not using any console statements, like console.log, in production. Back in my code, I'm going to open up the index.js file in the source folder, and I'm going to change that let
>
> **[4:47](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/enforcing-code-style-with-eslint?u=76281980&t=287)** to a const. And I'm going to save. And then back in the terminal, I'm going to clear, and I'm going to run that previous command again. I still have that warning, which I'm fine with, but I have no errors, meaning that my code passes linting. Now if you wrote your code even slightly differently than I did, you may have additional errors flagged when you run your lint command. You can look up the rules at [eslint.org](https://eslint.org) and tweak your code to resolve any remaining issues. For instance, right here, I see in a lighter color, this is the name of the actual rule for ESLint that's flagged for this warning, no-console. I can go over to the rules page, I can search the docs for no-console, and I can actually look up what that rules means. And we have some use cases here showing code that passes and code that fails. And so now, in addition to being checked for syntax and code problems, my code is being checked for adherence to the Airbnb style guide.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [ESLint](../../Skills/Software%20Development/ESLint.md) (14), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (2), [npm](../../Skills/Web%20Development/npm.md) (2), [Google](../../Glossary/Service/Google.md) (1)
> **CLI Commands:** make (2), npm (2), npx (1), find (1)
> **Prerequisites:** setup (5), install (1)
> **Definitions:** is a  (3)
> **Analogies:** for instance (2), such as (1)
> **Warnings:** warning (3)
> **File Paths:** eslintrc.js (1), index.js (1)
> **Tools:** terminal (2)

#### [Integrating ESLint with webpack](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/integrating-eslint-with-webpack?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/integrating-eslint-with-webpack?u=76281980&t=0)** - [Instructor] Among the many tools available for building modern [JavaScript](../../Skills/Software%20Development/JavaScript.md) apps, Webpack is one of the most widely used for front end code. You can run [ESLint](../../Skills/Software%20Development/ESLint.md) from [npm](../../Skills/Web%20Development/npm.md) using command inpackage.[JSON](../../Skills/Web%20Development/JSON.md). But if you're using Webpack, you can also incorporate ESLint directly into the Webpack build process. This project uses Webpack and Babel. And it includes a webpack.config.js file with build options for both of these tools. Now, over in my packag.json, I have a separate lint command for ESLint. But I want to incorporate ESLint into the Webpack config, so it's executed automatically as part of the build process. And I can do that by making some changes to my webpack.config.js. Webpack supports loaders for a number of different tools, including ESLint. Down here in the linting and testing section, there's a reference to that in the documentation on webpack.[js.org](https://js.org). A loader is going to let me pretty easily add and configure ESLint to my Webpack configuration. And that package name is eslint-loader. So I'm going to add that to my project first, and then save it. So that's npm install (mumbles) eslint
>
> **[1:21](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/integrating-eslint-with-webpack?u=76281980&t=81)** - loader
>
> **[1:23](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/integrating-eslint-with-webpack?u=76281980&t=83)** - -save-dev. Now, to configure eslint in Webpack, I'm going to open webpack.config.js. In the rules section down here, I already have a babel-loader configuration. Now if I go to the [GitHub](../../Skills/Software%20Development/GitHub.md) repo for eslint-loader, there's documentation for how to use it. And that includes some code snippets that show usage. Now I want to make sure that my files are linted before any transpiling happens with Babel. And down here I've got an example of how to use enforce: 'pre' to make sure that eslint happens before other things. So you can simply copy these six lines of code to create a new element in the rules array. I've also got these in the repo for the exercise files for this video. If you go over to the Wiki tab, and then click the 01.03 link. I've got a code snippet here all ready to go. So I'm just going to copy that, and then back over in my webpack.config file, within the rules before the existing code, so right after that opening square bracket, I'm going to paste this in. And I've already got that comma after it. So we've got that in force: 'pre' at the beginning to make sure that the eslintlint-loader runs before the Babel loader. And what this is saying is,
>
> **[2:58](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/integrating-eslint-with-webpack?u=76281980&t=178)** when the Webpack build runs, it's going to look for js files using this regular expression, and specifically exclude anything that's in the node_modules folder, because we don't need to bother with that. And then it's going to process them using this eslint-loader module, with the eslint configuration options that I already have set up in my eslintrc file. So I'll save those changes. And then in the terminal, going to clear, and I'm going to do an npm run build, and build is the name... Switching back over here package.json. I have the script called build. And so that's what I'm running here, it's just webpack. So npm run build. We've got some progress indicators telling us what's going on. And after those build messages, I see ESLint throwing a warning right here. So this is a warning about the console.log statement because my style guide calls for eliminating console statements. But because that rule throws a warning rather than an error, this build is still successful, and I'm good with that. And so I can go back over to my code. And so my source file is building to my dist folder, and I have this new file here. And this is the result of that build process and it includes that console.log statement in it. So I can see that my build was successful. And I can see in my output that I actually have eslint running as part of my build now.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [ESLint](../../Skills/Software%20Development/ESLint.md) (15), [npm](../../Skills/Web%20Development/npm.md) (4), [JSON](../../Skills/Web%20Development/JSON.md) (3), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1), [GitHub](../../Skills/Software%20Development/GitHub.md) (1)
> **File Paths:** webpack.config.js (3), inpackage.json (1), packag.json (1), webpack.js (1), webpack.config (1)
> **CLI Commands:** npm (4), make (3)
> **Prerequisites:** configure (2), install (1), set up (1)
> **Warnings:** warning (3)
> **Tools:** github (1), terminal (1)
> **Exercise Files:** github repo (1), exercise files (1)
> **Speakers:** - [instructor] (1), - loader (1)

#### [Using ESLint in an editor](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-eslint-in-an-editor?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-eslint-in-an-editor?u=76281980&t=0)** - [Instructor] Automating [ESLint](../../Skills/Software%20Development/ESLint.md) within a build process makes it really easy to enforce styles before deploying code. But you can also use ESLint earlier in your development process to flag issues before you even commit them. All the major code editors, Visual Studio Code, Sublime Text, and ATOM, as well as a lot of other IDEs, support extensions that check code against ESLint rules while you're writing it, and flag issues right in the editor window. I'm using Visual Studio Code. To integrate ESLint, I can just add an extension. So I'll open up extensions, and I'll search on ESLint. And the first one that shows up is the ESLint extension by Dirk Baeumer. So it's always a good idea to check the number of installs and the rating. And this one after seven million installs, it has about a four and a half star rating and that's a great sign. And in fact, I've used this one before and it is. So I'll hit install And now it's enabled. So from now on, whenever I open a [JavaScript](../../Skills/Software%20Development/JavaScript.md) file that's associated with a .eslint RC file, the ESLint extension will link the file and flag any issues right in the editor window. So let's test that out. I'm going to go back to the Explorer, and I'm going to open up, close that up, I'm going to open up my index.js file. And I can see here that the console.log statement has a yellow wavy line underneath it. And if I hover over that,
>
> **[1:33](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-eslint-in-an-editor?u=76281980&t=93)** I see the explanation that my ESLint rules call for eliminating console statements. Now if you don't see that. the settings for your extension may need a little bit of adjustment. For VS Code, in particular, you need to go into the Preferences. So I usually open up the control panel and I can do Preferences, Open Settings, [JSON](../../Skills/Web%20Development/JSON.md), take me to the JSON file. And if you go to the wiki page for this video, there is a Visual Studio Code configuration snippet that you can just add to that JSON configuration. And if that ESLint integration isn't working, then adding this snippet to your JSON config may help. But mine's working okay, I'm not going to add that in. So ESLint can flag a whole wide variety of errors, and being reminded of those as you code can be really helpful. So I'm going to write some bad code just to test things out. And this is another thing I've included in the wiki for this video. So just this three line force statement, I'm going to copy and paste in here. And immediately when I paste that in, I see a lot of underlining and it's in red, this time, not in yellow, Also in the file list over here on the left in the Explorer, the file name is in red and I see this number five. And that indicates the number of issues this file has. And also, the containing folder has a red dot,
>
> **[3:08](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-eslint-in-an-editor?u=76281980&t=188)** meaning that it contains files that have issues. So my for loop starts with a value of 10. And it checks for a value greater than zero. But it's incrementing after every loop, and this is a logic error. It means it's never going to get to zero, it's never going to stop. So I've created an infinite loop here. And that can be tricky to catch if you're just writing code and trying to figure out why your code isn't working. But the configuration I'm using flags this, and so if I hover over it, there's a pretty simple explanation of what's going on here, the for direction is wrong. And so if I change that greater than, to a less than, most of that red goes away, I fixed that logic error. Now there's still a bit more going on here. So if I hover over that i++ which has a red underscore there's an explanation about avoiding unary operators. I like doing that in my code as well, because unary operators can have unexpected effects based on order. So I'll replace that ++ with a += 1. Now I still have a red underline. And if I hover over it this time, I see that my rules require spacing around this operator. Again, this is a useful style to make my code more readable. So I'm going to add those spaces one before the plus, one after the minus, and now all those squiggles are gone. I have another yellow squiggle under my console.dot log statement. And that flags another warning about console statements,
>
> **[4:42](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-eslint-in-an-editor?u=76281980&t=282)** and I'm okay with that for right now. And then I have a squiggle under my closing curly brace. And if I hover over that, there's an explanation that my rules call for an empty line at the end of a file, which is a great practice. Now if your file already has one, you won't see this error flagged. But I'm going to go ahead and add a line just for good measure, and now I'm all set. So notice in the sidebar, the color for the file name has changed to yellow. And the number's gone down to two, which just is logging the two warnings that I have, because it's not red and no, there's no errors. So I'm going to save those changes. And so I could go over to ESLint RC if I ever wanted to find rules that would override the style guide I'm using. So there's documentation on how to add those into rules down here as key value pairs. But especially when I'm using ESLint in the editor, it can be useful to turn off errors on a line by line basis. And ESLint supports doing this with comments either on the same line, or on the line before. So for my first console.log statement, I'm going to turn off the warning by adding an inline comment to the end of the line. And I have this as a code snippet on the wiki page for this video. ESLint inline comment, but I'm just going to type it in. So at the end of that line, I'm going to do a single space, double slash. And then ESLint-disable-line no-console. And so I'm saying here, ESLint,
>
> **[6:17](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/using-eslint-in-an-editor?u=76281980&t=377)** disable checking on this line for the no-console rule. And now that yellow underscore is gone, because even though I've violated the rules, I've also included a directive saying don't bother checking this, don't flag this for me, I'm good. I can also add a comment on its own line and have it apply to the line after it. Now I have another flag console.log statement, so I'm going to add a blank line before it. And then I'm going to add a comment. And this is going to be ESLint-disable-next-line, and, no-console, as the rule to disable. And so now that underline goes away from the line that follows from that following console.log statement. And my file list is back to its default color. It's tracking now just the changes that I've made in [Git](../../Skills/Software%20Development/Git.md), and it's got no tally of issues. And so I've indicated here that even though this particular file varies a bit from my specified styles, I'm okay with it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [ESLint](../../Skills/Software%20Development/ESLint.md) (18), [JSON](../../Skills/Web%20Development/JSON.md) (4), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1), [Git](../../Skills/Software%20Development/Git.md) (1)
> **Tools:** visual studio (3), sublime (1), atom (1), vs code (1)
> **Env Vars:** json (4), atom (1)
> **Definitions:** is a  (4)
> **CLI Commands:** make (1), find (1), git (1)
> **UI Navigation:** go to (1), in the sidebar (1)
> **Warnings:** warning (2)
> **File Paths:** index.js (1)

#### [Challenge: Add ESLint to a project](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/challenge-add-eslint-to-a-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/challenge-add-eslint-to-a-project?u=76281980&t=0)** - [Instructor] Ready to try your hand at adding [ESLint](../../Skills/Software%20Development/ESLint.md) to a project? It's time for a challenge. The start files for this video contain a project that's already configured with webpack and Babel. This project is in the new challenge folder, so if you've worked through videos so far with the same set of files, you'll need to grab or switch to the 01_05b branch of this repo for the files you need. The complete version of the work from the other videos is in the videos folder for reference. For the project in the challenge folder, the build command uses webpack and Babel to parse and pack the index.js file in the source folder, and it writes the result to the dist folder. Your task is to add and configure ESLint using the standard style guide, which is the second option in the list of popular style guides when you setup ESLint. You also need to integrate ESLint into the webpack build process. And finally, you should use either error messages thrown in the terminal or in your editor to identify and fix any syntax or style issues in the code. Note that because you'll be using the standard style guide, some of the errors will be ones that the AirBnB style guide doesn't throw, and some AirBnB errors won't be flagged. This should take you about 10 to 15 minutes.
>
> **[1:34](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/challenge-add-eslint-to-a-project?u=76281980&t=94)** When you're done, join me in the next video and I'll walk you through how I approached it. Have fun.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [ESLint](../../Skills/Software%20Development/ESLint.md) (4)
> **Prerequisites:** you'll need (1), configure (1), setup (1)
> **File Paths:** index.js (1)
> **Cross-References:** in the next (1)
> **Tools:** terminal (1)
> **UI Navigation:** switch to (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Add ESLint to a project](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/solution-add-eslint-to-a-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/solution-add-eslint-to-a-project?u=76281980&t=0)** - [Instructor] The first thing that I want to do in building out this project, I need to run [npm](../../Skills/Web%20Development/npm.md) i to actually get all of the dependencies installed, so I've done that already and got my node modules in place for this project. Next up, I actually have to install [ESLint](../../Skills/Software%20Development/ESLint.md) as a dependency in this project. So that's npm install eslint and I'm going to do a save-dev to save it to this particular project. And so that's going to finish installing and when it's done, the next thing I need to do is actually set it up. So there I'll use an npx eslint --init. So this is going to take me through that set of questions that help me get ESLint configured. Now, I want to go ahead and use code style as well as syntax and problem checking so I'm going to choose that third option. I'm going to use modules. I'm not using a framework, I'm not using typescript, I'm doing front-end code in the browser and I want to pick a style guide. Now, the idea here is we're going to try out what it's like to use the standard style guide so that's the second one in the list. And I'm going to use a [JavaScript](../../Skills/Software%20Development/JavaScript.md) file for my configuration. And then I do want to install those dependencies. It's always important because otherwise that selected config will not work. So I'm going to go ahead
>
> **[1:33](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/solution-add-eslint-to-a-project?u=76281980&t=93)** and hit Enter to install all the dependencies that go specifically with most of these with the standard style guide. And now I have ESLint set up for this project. If I switch back to my editor, I can now see that I have that .eslintrc.js file and again, I'm in the challenge folder here. So you just want to make sure you're seeing that there. And I can go ahead and open up in the src folder that index.js file. Now, I can see already I have a red underline and if I look at that, I do see an eslint error. And I put this one in here just to illustrate a point. I'm going to go ahead and comment this line out. And notice it's the only error that's flagged right now in my editor. If I comment that out, all of a sudden, a bunch of other errors pop up. So this is just like debugging in general where sometimes specific errors can mask other errors. So here there is a question of either declaring an existing variable name. So I'm just going to go ahead and rename this and actually let's just rename the other one at the beginning. We'll just call this text. And I'll save that. Now I've got all these juicy errors. For now, I'm going to set those aside because I want to run my build and see the effect of the errors before I fix them. So that's the first part of integrating ESLint. And the second step, I want to actually integrate that ESLint into the webpack build process. So that's going to take me into the webpack.config.js file.
>
> **[3:06](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/solution-add-eslint-to-a-project?u=76281980&t=186)** And because this is a JS file, notice that it is getting flagged by ESLint but I'm not worried about that right now. This works and the stylistic questions are not that big a deal to me. So what I want to do down here in the rules section is add that code snippet that I used the last time I did this that specifically says I want to run ESLint and I want to run it first. So to do that, I want to use the eslint-loader module and so back in the terminal, I'm going to do an npm install eslint-loader. I can do a save-dev. And so I'm installing this dependency that works with webpack to integrate ESLint into that build process. The next thing I'm going to do is go back to the wiki for this repo up on [GitHub](../../Skills/Software%20Development/GitHub.md). And on the 01_03 video for Integrating ESLint with webpack, we've got this code snippet. You can also find this in the documentation for this integration. And going back to my webpack.config file, right inside the array for the rules key, I'm going to paste in this reference to the eslint-loader. We're got that enforce: 'pre' to make sure that this happens before the babel-loader is run. And so I'm going to save that. And now when I run that build command which is defined over here in package.[JSON](../../Skills/Web%20Development/JSON.md),
>
> **[4:42](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/solution-add-eslint-to-a-project?u=76281980&t=282)** I will also be linting my index.js file as well as webpacking it. So let's go over to the console and I'm going to clear that. And then I'm just going to do an npm run build and see what happens when I run that webpack build command. So we did get a bunch of errors. And notice these are all ESLint errors. We have all these different ESLint rules referenced over here and so this is actually success. I knew that there were errors in the file. I saw them already in the editor. But now I've run the build and I can see that ESLint did in fact get executed as part of the build process. So that's the second of the three tasks for this challenge that I've taken care of. And so the third one is I want to fix the errors. So switching back over to my editor and switching back to index.js, I can just follow these red squiggly underlines and read the issues that are going on here. So I've got a variable that is assigned a value but never used. And so if I just comment that out, it's basically saying if you've got a variable, you don't need it. And so this is really, some of this is common sense and well explained. Sometimes you may have to actually look these up on the ESLint documentation online. This is a situation where I've used let to define my variable but my style guide says if you're not redefining the value at all, then use const instead. Great practice so we'll change that let to const. Then we've got result here
>
> **[6:16](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/solution-add-eslint-to-a-project?u=76281980&t=376)** which is never reassigned so again, you can make that a const and while we're at it, I think these two here are the same thing so I'm just going to change all my lets to const. And that gets rid of a few. Now, here at this semicolon, I have an extra semicolon with this ESLint semi rule. And so notice that all of the semicolons in this file have red squiggles under them. So this is the difference in style guides. This specific style guide, and again, for this one, we chose, let's open up that eslintrc file and see we are using the standard style guide. So in the standard style guide, the rule is to not use any semicolons unless they're necessary for syntax, for the code to actually be accurate and so we've got squiggles that are actually telling us to take out all of the semicolons. Now, that's not the way I code. This is just a way to illustrate that different style guides call for different code styles and so it's important to try out different style guides and think about what makes sense to you. It's also possible to start with a base style guide and make your own changes to that and I encourage you to study up more on that. So, then we've got a console.log statement here and it's simply saying this is unreachable code because it comes after the return statement so I can cut that and move it up here before the return statement and I don't get an error so this particular style guide does not call for removing all console statements
>
> **[7:52](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/solution-add-eslint-to-a-project?u=76281980&t=472)** like the Airbnb style guide does. And then down here, we've got things like spacing around our operators. So we've got a couple of instances of that. And then inside in closing characters, it's pretty common, the style guide will call for you to not use those spaces to make the code a little more readable. And then down here, we have an issue where we're supposed to have a new line at the end of our file so I'll press Enter and now, I've got all of my issues taken care of. And so I'm going to go ahead and run that build on more time. So reissuing that last command. Actually let's go ahead and clear the screen, then I'm going to reissue the last command, npm run build. And I can see the build process happening and I've got a warning but I've got no errors so I've got my file built. I can go over to my dist folder, look at main.js and yes, this does not comport with the style guide and that is to be expected. Probably want to eliminate that from my style guide at some point but for now, I've got that build happening and I'm all good. And so this gives you a taste of what it's like to incorporate ESLint into a project, into a build process and then actually use it to make your code fit whatever style you're going for and that's what ESLint is really great at.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [ESLint](../../Skills/Software%20Development/ESLint.md) (22), [npm](../../Skills/Web%20Development/npm.md) (5), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1), [GitHub](../../Skills/Software%20Development/GitHub.md) (1), [JSON](../../Skills/Web%20Development/JSON.md) (1)
> **CLI Commands:** make (6), npm (5), node (1), npx (1), find (1)
> **File Paths:** index.js (3), eslintrc.js (1), webpack.config.js (1), webpack.config (1), package.json (1)
> **Prerequisites:** install (5), set up (1)
> **Definitions:** is a  (3)
> **Analogies:** it's like (2), just like (1)
> **Tools:** terminal (1), github (1)
> **Cross-References:** go back to (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/next-steps?u=76281980&t=0)** - [Instructor] Thanks so much for joining me in this course. You now have experience integrating [ESLint](../../Skills/Software%20Development/ESLint.md) into projects. To dig deeper into working with ESLint, check out a course on customizing ESLint rules. If you want to learn more about the reasons behind common coding styles, check out a course on [JavaScript](../../Skills/Software%20Development/JavaScript.md) best practices and if you want to deepen your knowledge about working with tool chains, check out a course in the webpack. Feel free to follow me online. Now, take your new skills and build something amazing. Good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [ESLint](../../Skills/Software%20Development/ESLint.md) (3), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [Sasha Vodnik](../../Instructors/Software%20Development/Sasha%20Vodnik.md)

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/eslint-workflow-2254050/codespaces)

## Skills Covered

- ESLint

## Path Context

### In [Advance Your JavaScript Skills](../../Paths/Software%20Development/Learning%20Paths/Advance%20Your%20JavaScript%20Skills.md)
← [JavaScript- Test-Driven Development (ES6)](JavaScript-%20Test-Driven%20Development%20(ES6).md) | **4 of 10** | [ESLint- Checking for Syntax and Logic Errors](ESLint-%20Checking%20for%20Syntax%20and%20Logic%20Errors.md) →

## Appears In

- [Advance Your JavaScript Skills](../../Paths/Software%20Development/Learning%20Paths/Advance%20Your%20JavaScript%20Skills.md)

## Related Courses

_Courses sharing skills:_

- [ESLint- Customizing Styles](ESLint-%20Customizing%20Styles.md) — ESLint
- [ESLint- Checking for Syntax and Logic Errors](ESLint-%20Checking%20for%20Syntax%20and%20Logic%20Errors.md) — ESLint

---

[↑ Back to top](#)