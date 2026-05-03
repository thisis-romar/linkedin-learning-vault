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
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/ESLint-%20Customizing%20Styles.md)

![ESLint: Customizing Styles](https://media.licdn.com/dms/image/v2/C4E0DAQFwVAvDC1FHrw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1668021352865?e=2147483647&amp;v=beta&amp;t=9OlJwMeG71YYvKadZjYizeZxzOaoIZ-bd2hbODW4xMQ)

# ESLint: Customizing Styles

> Does your project style not adhere seamlessly to rules from a style guide? In this concise course—the second installment in the ESLint series—learn how to add and override rules to your ESLint configuration to ensure that you won't get flagged for "errors" that are really just aspects of your personal style. Instructor Sasha Vodnik shows how to customize your configuration by adding style rules to

> [LinkedIn Learning](https://www.linkedin.com/learning/eslint-customizing-styles) | 37m | Advanced | 4K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (4 videos)
  - [Setting up ESLint to match your style](#setting-up-eslint-to-match-your-style)
  - [What you should know](#what-you-should-know)
  - [Using the exercise files for this course](#using-the-exercise-files-for-this-course)
  - [Using GitHub Codespaces with this course](#using-github-codespaces-with-this-course)
- [**1. Customizing ESLint Styles**](#1-customizing-eslint-styles) (5 videos)
  - [Turning on checking for a rule](#turning-on-checking-for-a-rule)
  - [Configuring options for a rule](#configuring-options-for-a-rule)
  - [Troubleshooting ESLint styles](#troubleshooting-eslint-styles)
  - [Challenge: Customize ESLint styles](#challenge-customize-eslint-styles)
  - [Solution: Customize ESLint styles](#solution-customize-eslint-styles)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Setting up ESLint to match your style](https://www.linkedin.com/learning/eslint-customizing-styles/setting-up-eslint-to-match-your-style-25668962?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/eslint-customizing-styles/setting-up-eslint-to-match-your-style-25668962?u=76281980&t=0)** - Specifying your own custom styles in [[ESLint]] can feel like a complex undertaking. The code isn't super complicated, but some of the options require you to understand both the available choices and the specific syntax to apply them. I created this course to provide an overview of what's possible when customizing ESLint rules and how to do it. We'll explore the different values that ESLint rules can take from simple strings to nested [[Data Structures]], and we'll look at common configuration errors and how to troubleshoot them. When we're done, you'll be able to build ESLint rules to work for your code style.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ESLint]] (4), [[Data Structures]] (1)
> **Warnings:** troubleshoot (1)
> **Speakers:** - specifying (1)

#### [What you should know](https://www.linkedin.com/learning/eslint-customizing-styles/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/eslint-customizing-styles/what-you-should-know?u=76281980&t=0)** - [Instructor] This course assumes you have intermediate to advanced level experience coding in front-end [[JavaScript]], including modern ES6 syntax. It also assumes you know how to integrate [[ESLint]] into an [[npm]] project and incorporate a popular ESLint style guide. If you need to review basic ESLint configuration, search in our library for a course on configuring ESLint.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ESLint]] (4), [[JavaScript]] (1), [[npm]] (1)
> **CLI Commands:** npm (1)
> **Env Vars:** es6 (1)
> **Speakers:** - [instructor] (1)

#### [Using the exercise files for this course](https://www.linkedin.com/learning/eslint-customizing-styles/using-the-exercise-files-for-this-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/eslint-customizing-styles/using-the-exercise-files-for-this-course?u=76281980&t=0)** - [Narrator] All of the files for this course are freely available as a [[GitHub]] repo at this URL. The repository is built so that there are branches for each of the videos in this course. You can use the branch list to switch to a specific branch and take a look at how the code looked in a specific video. For example, the branch titled 01_03e would show you the code for chapter one and the third video in that chapter. If you see a letter B at the end of the name, it means that's how the code looked at the beginning of the video. But if you see an E at the end of the branch, that's how the code looked at the end of the video. In this course, I go through customizing [[ESLint]] rules. If you want to, you can download any of these branches by first going to the branch and then hitting clone or download and downloading the ZIP file for the video that you want to follow along with. You can also just download the entire repo and start from the beginning with me. You may need to install MPM as well as [[Git]] before you do this. If you need more experience working with Git and GitHub, make sure you're familiar working with those before taking this course. Do a search for GitHub in our library. If you're comfortable with this then let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (3), [[Git]] (2), [[ESLint]] (1)
> **CLI Commands:** git (2), make (1)
> **Env Vars:** url (1), zip (1), mpm (1)
> **Tools:** github (3)
> **Exercise Files:** github repo (1), zip file (1), download the (1)
> **UI Navigation:** switch to (1)
> **Definitions:** means that (1)
> **Analogies:** for example (1)

#### [Using GitHub Codespaces with this course](https://www.linkedin.com/learning/eslint-customizing-styles/using-github-codespaces-with-this-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/eslint-customizing-styles/using-github-codespaces-with-this-course?u=76281980&t=0)** - [Ravi De Lobos] This is Rav De Lobos, senior staff instructor at [[LinkedIn]] Learning. And I'm going to show you how to work with LinkedIn Learning courses using [[GitHub]] Code Spaces. Code Spaces is a code editor in the cloud with the full power of Visual Studio Code. It allows for real world hands-on practice, that mirrors [[Software Development]] in the workplace. This course has been adapted for use with GitHub Code Spaces. Using Code Spaces, you have everything you need to get going without needing complex installations or build tools. One click and you're ready to go. First make sure you've signed up for a free GitHub account and that you've logged in. You just see your profile icon right here. When you go to the repository for one of our courses, look for the code button. Click on Create Code Space. The first time you open up a code space, it might take a few minutes to create the virtual machine. Once it's done, you'll enter the code editor environment. If you're familiar with Visual Studio Code, this is a special version of that editor running on GitHub's servers. The cloud editor's menu lives in a hamburger icon, inside the activity bar. The menu will let you see the keyboard shortcuts for your operating system. Let's find the shortcut for the command palette. Look in the hamburger menu under view, and then look for the keyboard shortcut for your operating system. The activity bar has the most common tools, you'll need to work with projects.
>
> **[1:33](https://www.linkedin.com/learning/eslint-customizing-styles/using-github-codespaces-with-this-course?u=76281980&t=93)** You can, for example, show or hide the Explorer. Do a search and replace for content. Manage features of the repository and much more. By the way, if for any reason you lose the activity bar, you can get it back using the command pallet. Your course can have one or more extensions pre-installed, based on the course you're taking. Those can be found in the extensions panel. Because this is a browser, it's easy to inadvertently close the browser window and lose the editor. If you do that don't panic. Code spaces saves everything you're doing on a virtual machine. You can always get the code space back for this repo by going to the code menu, and finding your code space right here. Notice that it even remembered that I had opened the extensions panel. This is a sample of what a multi branch repository looks like. Which is more common when you're working with web frameworks. If you go to the branch icon on the status bar, you can see that there's more than one branch. You can switch to the different branches using this menu. The branches are named with the chapter and the video number you're watching. If you see a B at the end of the branch. That's how the the code looked at the beginning. If you see an E, that's how the code looked at the end. Let's switch to how the code looked on chapter two
>
> **[3:07](https://www.linkedin.com/learning/eslint-customizing-styles/using-github-codespaces-with-this-course?u=76281980&t=187)** and the third video. I'll choose the beginning branch. As you work through a course, you might make some changes on a branch. I'm going to make a minor edit on the index [[HTML]] file right here. I'm going to go ahead and save that. And you can see that I've modified this file because there's an M right here, and the branch name now has an asterisk on it. If I try to switch to another branch that causes major changes. Like say O seven O three E, I may see a dialog box like this. If you don't care about saving your changes, you can simply hit the force checkout button. It will let you switch to that branch. You can then choose to discard the changes on this file. Forking lets you create your own copy of the repository on your account. So that you can keep any changes that you've made. Even if you've deleted the code space. To create your own fork, you can click on the fork button on the repository. I'm going to hit create fork. I have my own copy of this repository, and if I want to I can start a new coach space on that fork.
>
> **[4:33](https://www.linkedin.com/learning/eslint-customizing-styles/using-github-codespaces-with-this-course?u=76281980&t=273)** This fork version is almost exactly like the original repository, but it will let you push your own changes. Notice that the URL of the repository is slightly different. Let's go ahead and make a simple change to this file right here.
>
> **[4:54](https://www.linkedin.com/learning/eslint-customizing-styles/using-github-codespaces-with-this-course?u=76281980&t=294)** I'm going to save it. You'll note that there is an M right here, as well as an asterisk on this branch. In the source control panel, you can also see a one for the change that we just made. Let's go ahead and try to commit this change. I'm going to hit the commit button. And I'll ask it to go ahead and stage the changes. And then I'm going to hit this button here to commit this onto my own version of the repo. I'll hit okay. You can also let it go ahead and run get [[Fetch]]. That way it'll automatically sync with your forked repo. Now that change will be stored in your own version of this repository. Don't worry if you forget to fork a repo and then try to push changes. Code spaces will also ask you if you want to create a fork automatically. Some courses will let you work with life previews or create other ports so that you can have a web view of what you're doing. This is managed through the ports panel in the status bar. Right now, there are no ports forwarded. But if I open up the live server extension, you can see a preview of that file. Now if we go back to the code space to manage ports. You can click on the icon in the status bar, and take a look at the currently available ports.
>
> **[6:28](https://www.linkedin.com/learning/eslint-customizing-styles/using-github-codespaces-with-this-course?u=76281980&t=388)** If you want to open this up in a browser, you can click right here. Look for additional core specific tips from the instructor. Now, let's get back to the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (4), [[LinkedIn]] (2), [[Software Development]] (1), [[HTML]] (1), [[Fetch]] (1)
> **UI Navigation:** switch to (4), click on (3), go to (2)
> **Tools:** github (4), visual studio (2)
> **CLI Commands:** make (4), find (1)
> **Definitions:** is a  (4), is an  (1)
> **Env Vars:** url (1)
> **Cross-References:** go back to (1)
> **Analogies:** for example (1)


### 1. Customizing ESLint Styles

[↑ Back to Table of Contents](#table-of-contents)

#### [Turning on checking for a rule](https://www.linkedin.com/learning/eslint-customizing-styles/turning-on-checking-for-a-rule?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/eslint-customizing-styles/turning-on-checking-for-a-rule?u=76281980&t=0)** - [Instructor] To specify a custom style for an [[ESLint]] rule, you add a key value pair in the rule section of your .eslintrc file. By default, an empty rules key is included in the .eslintrc file when you set it up with npx, using the Eslint--init option. The value of the rules key is an object. And within that object, I can add a key for each rule that I want to customize. So for instance, I want to enforce the brace-style rule. That means my key name will be brace-style. To understand the value I need to specify, a handy first stop is the documentation page for the style rule on [ESlint.org](https://ESlint.org). I want to use the one true brace-style and reading through the docs, that's the default when I turn the rule on. Whenever I'm happy with the defaults, I just have to specify a string as the value. That string indicates what I want to happen when my code violates this rule. ESlint has three settings for what happens. Off for nothing, warn for generating a warning that allows the build to continue or error that throws and error and an exit code. So in my rules section, I'm going to specify brace-style as a string then a colon and I want this to throw an error. I want to be stringent. So I'll specify error as my value and I'm going to use single quotes. Now over in the documentation,
>
> **[1:34](https://www.linkedin.com/learning/eslint-customizing-styles/turning-on-checking-for-a-rule?u=76281980&t=94)** you notice that in addition to the strings, you can use a number instead. So 01 or 2 will give you those same results. But I like to use the strings just because it makes the code a little more self-documenting, makes it clear to anybody who reads my configuration what I intend to happen here. So I'm going to save this change. Now, I have the ESlint extension installed in my editor. In the source folder, I can open my index.js file. And right here in the editor, the extension shows me that I have a number of errors. It shows me that number right here and it shows me these red squiggles where it sees errors. And in particular, I have one error here around the braces. So if I select the file and hover over, I have brace-style as the rule that's being violated here. So right there in the editor, I have that information. Now if you don't have an extension installed in your editor, you can go to the command line and you can use [[npm]] run lint which is a script that I've configured for this project. And this gives me a readout of all the errors in this project. So there is a couple others but these last two right here are errors for curly braces specifically around the brace-style. So if you don't have that extension you can still do any of these checks at the command line. So if I go back to my .eslintrc file, maybe I want to flag these issues
>
> **[3:06](https://www.linkedin.com/learning/eslint-customizing-styles/turning-on-checking-for-a-rule?u=76281980&t=186)** but let that build run anyway because those errors right now are going to throw an error and keep that built from happening. So I'll change the value for brace-style to warn. And I'll save that and then back in index.js, these two, these other errors that we'll get to in a minute are still in red as errors but down here now the underscores in yellow for the brace-style and that means that this would just throw a warning and my build would still succeed. Now I can go through and fix those brace issues so first off, the brace-style, you start with that opening brace on the first line of code and you don't put your "else" on a different line. So I'll fix those and now I've got that ironed out but I still have another issue. I saw this at the command line and I see it also in the pop-up in my editor here that I've got no unused vars. So I've declared the text variable and I'm never using it and same thing with the counter variable. Now I haven't created a key value pair for this issue in my eslintrc. All I've got is that one brace-style rule. But what I have done is set up the ESlint to use the recommended rules and settings as a baseline for this project and that comes from the extends key and ESlint recommended as the value. In the documentation for the ESlint rule on [ESlint.org](https://ESlint.org), the rules of a check marks next to them are turned on by default when I use the recommended rules. And just searching the page on no-unused variables,
>
> **[4:42](https://www.linkedin.com/learning/eslint-customizing-styles/turning-on-checking-for-a-rule?u=76281980&t=282)** there we go, it's right here. It's got a check mark. So that's why this issue is getting flagged in my code even though I haven't written a rule for it because I'm using those recommended values. But I can also use my rules key down here to turn off a rule that's part of whatever style I'm using as a baseline like the ESlint recommended rules. For now I'm okay with unused variables in my code during development. So in .eslintrc, I'm going to add another key value pair here and that's going to be no-unused-vars. And I'm going to use the value of off. And I'll save that and now back in my index.js, I don't have any issues at all because my .Eslintrc rules override that baseline from the style guide. So now I have an ESlint rule set up to turn on checking for a rule and another to turn off checking for a rule.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ESLint]] (11), [[npm]] (1)
> **Best Practices:** recommended (5)
> **Documentation:** the documentation (3), the docs (1)
> **File Paths:** index.js (3)
> **Tools:** command line (3)
> **Definitions:** is a  (2), is an  (1)
> **CLI Commands:** npx (1), npm (1)
> **URLs:** [eslint.org](https://eslint.org) (2)

#### [Configuring options for a rule](https://www.linkedin.com/learning/eslint-customizing-styles/configuring-options-for-a-rule?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/eslint-customizing-styles/configuring-options-for-a-rule?u=76281980&t=0)** - [Instructor] I want to add a style rule to my project to help me enforce spacing around curly braces in code for objects. [[ESLint]] supports an object curly spacing rule for this detail and in the rules list it doesn't have a check mark so I have to enable it myself if I want to use it. So I can add in my .eslintrc file object-curly-spacing
>
> **[0:26](https://www.linkedin.com/learning/eslint-customizing-styles/configuring-options-for-a-rule?u=76281980&t=26)** with a value of error and I'll save that and then over in my code I'll add a test statement for that. So I'll do a constant called contact and I'll make that an object with a firstName of Sasha and I'm including a space after the opening curly brace and before the closing curly brace. Now this is a single line statement so for me including the spaces makes the content stand out better from the surrounding characters. But when I save it, my editor flags it as an error which I can see with those red squiggles right there. Now I wrote the test code the way I wanted it to be, so this makes me think I didn't write the ESLint rule quite right so I'm going to check the documentation. And in fact this rule has a second option which is never or always. So in addition to turning it on I can choose which way I want the rule to work. And the default here is never which is to say no spaces ever. So I wrote a rule that calls for never having spaces inside curly braces in an object literal when I actually want the opposite. But that's pretty easy to correct. I just need to add that second argument. Now when I have multiple arguments for an ESLint rule they go in an array like the sample code here. And so over in my eslintrc file
>
> **[2:02](https://www.linkedin.com/learning/eslint-customizing-styles/configuring-options-for-a-rule?u=76281980&t=122)** I need to convert my existing error string to be the first element in an array and I'm going to break that up onto multiple lines, go ahead and add in that closing punctuation just to make sure I don't forget it. And then on the first line I have the existing element in that array which is the error string. And then I want a second element which is the string always because I always want a space inside each curly brace for my objects. Now I'll save that and then I'll go back to index.js, and my editor is no longer flagging an issue because the code I wrote fits my rule. If I take those spaces out now I get an error because I specified I want them to work the other way. So here I've specified a non-default value for a simple rule. So I'm going to go ahead and take out those spaces again and make everything work according to the rules. Now when it comes to styles, it's common to have really specific ways of approaching some details. Take comma-spacing. I want to write a rule for comma-spacing, and for commas I have to think about spaces before and spaces after. Now there's a comma spacing rule and it has defaults. But it allows me to get even more finely grained than simply always or never. If I turn this on, by default it's before never and after always. So in my eslintrc file
>
> **[3:35](https://www.linkedin.com/learning/eslint-customizing-styles/configuring-options-for-a-rule?u=76281980&t=215)** I'm going to start a new rule, comma dash spacing, and to use the default settings I can just set this to error. And then in my index.js file I'll add some test code. Const scores, and I'll just make a little array. 55, 23, 78. I've used a space after each comma, but not before, which is the default. And I save it, and ESLint doesn't flag it, so this code fits with my rules. But what if I'm on a project that uses a different style by convention? Maybe spacing before and after each comma to make the comma stand out. So I'll stick a couple spaces in there. So it's abundantly clear where those commas are and where the spaces are between values. But now I've got my ESLint extension flagging an error here for comma spacing. And so going back to iron this out in my ESLint file, I could add a second value, but in this case it's not enough. I can't just say always is an argument because I need to specify settings for before and after. So over in .eslintrc I'm going to start by converting my existing value to an array. And then for that second argument I'm going to put in an object and the first key is before, the value is true,
>
> **[5:13](https://www.linkedin.com/learning/eslint-customizing-styles/configuring-options-for-a-rule?u=76281980&t=313)** the second key is after, and that value is also true. Now I'm using a [[JavaScript]] config file and this is just JavaScript object code. I could easily write it as [[JSON]] in a JSON config file instead. So saving that and returning back to index.js and now the editor is flagging some issues saying there should be no space before the comma but I said in my config that I do want a space before the comma. So sometimes when the browser extension acts up I just close that JavaScript file, open it back up, and now I've got those rules being loaded correctly. And now my code complies with the rule I wrote and so I have a specific setting that describes what I want here. Now every rule has its own options so it's important to return to the documentation for the rule that you're working with to understand just what's possible and what structure you need to use to specify the settings you want. But in general you'll be working with a familiar JavaScript data structure and the requirements are well documented at [eslint.org](https://eslint.org) for whatever rule you want to implement or tweak.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ESLint]] (7), [[JavaScript]] (4), [[JSON]] (2)
> **CLI Commands:** make (5)
> **File Paths:** index.js (3)
> **Env Vars:** json (2)
> **Documentation:** the documentation (2)
> **Definitions:** is a  (1), is an  (1)
> **Code Identifiers:** firstname (1)
> **URLs:** [eslint.org](https://eslint.org) (1)

#### [Troubleshooting ESLint styles](https://www.linkedin.com/learning/eslint-customizing-styles/troubleshooting-eslint-styles?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/eslint-customizing-styles/troubleshooting-eslint-styles?u=76281980&t=0)** - [Instructor] I've moved over to the troubleshooting folder in the start files. And in my .eslintrc file, I have one rule specified but in index.js, I expect that some of the standard rules are going to be applied, and I should have a bunch of errors here 'cause I wrote this code to test out the fact that these errors are being checked. But I've only got one thing being flagged so I think there's some things amiss here and I need to do a little troubleshooting. First thing is, I know I have an unused variable right here. I defined text and never use it in my code. Now, I didn't include that in .eslintrc because I know that the no unused vars rule is set as true by default in the [[ESLint]] recommended configuration. So, what's up? Well, the first place to check is .eslintrc, but not the rules key. Instead, I need to see what value I have for extends, which specifies the rules set, or style guide, that I'm using as a baseline. This might be Airbnb or another popular style guide, or it might the ESLint recommended styles. Now, in this .eslintrc file, I notice I have no value for extends so I have no baseline. And that's why I'm not seeing errors based on one of the recommended styles. So these keys are usually generated in alphabetical order just to keep everything clear So I want to add an extends key that'll come right after the env or Nth key. And so that's going to be extends, and the value's going to be eslint:recommended,
>
> **[1:38](https://www.linkedin.com/learning/eslint-customizing-styles/troubleshooting-eslint-styles?u=76281980&t=98)** and a comma after that. And I save that and then over in index.js, now I have a couple more errors being flagged and the first one is indeed that error for no unused vars. So just to bring my code in line with my style settings, I'm going to go ahead and comment that out. And again, the same thing down here, but I've got a little more work to do with that variable 'cause there's clearly another error there. So I'm going to leave that for right now. Now, I have another line of test code here that I expect to generate an error and it's not. I'm comparing a variable value to itself, which is pretty ridiculous and unlikely to be useful. I know I have the recommended styles in place but this isn't being flagged. So it's back to the documentation. The rule I'm thinking of is no self compare. And here on the list of styles, I notice it does not have a check mark, which means it's not included in the recommended styles. There's a similar rule, no self assign, rather than no self compare. And that is included in the recommended styles. You can see the check mark right there. But I want to enforce no self compare so I'll need to specify that myself in my in my .eslintrc. And so I'll go back and add that to my rules, no self compare error. Save that. Check over here again. Save my changes that I made here. And now that issue is being flagged.
>
> **[3:13](https://www.linkedin.com/learning/eslint-customizing-styles/troubleshooting-eslint-styles?u=76281980&t=193)** And again, just to get ride of that error, I'm going to comment this out and not worry about it. And my final test statement is an object called algorithm. So I have an error because I have an unused variable. I'm not worried about that right now. But I'm also getting an error thrown based on the func names rule. Now checking in .eslintrc, I did include func names rule here. Func names calls for all functions to be named. But I thought the sample code was adequately named. So the next step here is going to be to check the docs. And in func names, it turns out there's three levels of settings, and my result function relies on an implicit name, which is an ES6 feature. And I'm good with that. But the default for this rule is not good with that. So I was relying on that default and I just misunderstood the cases that that covered. So to get what I need, I want to use the as-needed option rather than always. So I'm going to update my rule. Instead of simply calling for an error, I need to make this into an array so I can tell the reporting level but also when that should be invoked and I want that to be as-needed. So I'm saving that, going back to index.js,
>
> **[4:49](https://www.linkedin.com/learning/eslint-customizing-styles/troubleshooting-eslint-styles?u=76281980&t=289)** and now that error in the function name is gone because my code now passes. So sometimes issues with ESLint's behavior stem from a misunderstanding of a rules default. And the same thing could even apply if I wrote out a detailed rule value. It's totally possible to get the value wrong or miss out on some cases and then CES loop behavior that doesn't match what I want. But as in so many situations the documentation is my friend. It's always a good idea to scan the [ESLint.org](https://ESLint.org) page for the rule and see if I might have missed something when setting it up. And now, after all that troubleshooting, my rules are good to go. The only errors I have flagged are ones that make sense, which are unused variables. And so I have fixed my rules, and I've got them working as I expect against my sample code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ESLint]] (5)
> **Best Practices:** recommended (7)
> **File Paths:** index.js (3)
> **Documentation:** the documentation (2), the docs (1)
> **CLI Commands:** make (2)
> **Env Vars:** es6 (1), ces (1)
> **Exercise Files:** sample code (2)
> **Definitions:** is an  (2)

#### [Challenge: Customize ESLint styles](https://www.linkedin.com/learning/eslint-customizing-styles/challenge-customize-eslint-styles?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/eslint-customizing-styles/challenge-customize-eslint-styles?u=76281980&t=0)** (electronic techno music)
>
> **[0:05](https://www.linkedin.com/learning/eslint-customizing-styles/challenge-customize-eslint-styles?u=76281980&t=5)** - [Instructor] Ready to try your hand at troubleshooting an [[ESLint]] configuration? It's time for a challenge. The start files for this video are in the challenge folder. For this project, the .eslintrc file contains a few key value pairs in the rules section. And the index.js file in the source folder contains a set of test statements. Each test statement has a comment right above it that describes how ESLint should [[React.js|react]] to it. Some statements are written to result in errors, while others aren't. Your task is to edit the .eslintrc file to get the appropriate results from the index.js file. Remember to use [eslint.org](https://eslint.org) to read up on the documentation for the rules you're working with. This should take you 10 to 15 minutes. When you're done, join me in the next video and I'll walk you through how I approached it. Have fun.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ESLint]] (3), [[React.js|React]] (1)
> **File Paths:** index.js (2)
> **URLs:** [eslint.org](https://eslint.org) (1)
> **Cross-References:** in the next (1)
> **Documentation:** the documentation (1)
> **Best Practices:** remember to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (electronic techno music) (1)

#### [Solution: Customize ESLint styles](https://www.linkedin.com/learning/eslint-customizing-styles/solution-customize-eslint-styles?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/eslint-customizing-styles/solution-customize-eslint-styles?u=76281980&t=0)** (upbeat electronic music)
>
> **[0:06](https://www.linkedin.com/learning/eslint-customizing-styles/solution-customize-eslint-styles?u=76281980&t=6)** - [Instructor] So, sitting down with this challenge project. The first thing I notice, is I've got some pretty common rules like no unused vars that are not being flagged here. In fact, aside from the counter variable, all my other variables aren't used anywhere else. So they should all be flagged at this point. So, that makes me wonder what I'm using as a baseline here. And indeed, back in eslintrc I don't have any extends value at all. So, I'm just going to go with [[ESLint]] recommended, and so we want the extends key and eslint:, lint:recommended as the value. Save that, and go back here. Now, I'm still not seeing an issue, but I do have no-unused-vars turned off. I didn't notice that before. So I looked for this for the wrong reasons, but now I at least know that I have my baseline setup. And so let's start going down the list here. So, I want to use the comma-dangle rule here, and I want to allow myself to have these terminal commas in an object literal. Over here in .eslintrc, I do have comma-dangle turned on with error, so I'm going to go over to the rules and just search for comma-dangle,
>
> **[1:40](https://www.linkedin.com/learning/eslint-customizing-styles/solution-customize-eslint-styles?u=76281980&t=100)** there it is, and I will open up and check out the documentation here. And so, we've got a few options here. Never disallows those trailing commas, but I actually want to allow those trailing commas, so I want to use always instead. And so I just need to convert my string into an array like this right here. And so back in the rules section, comma-dangle, I'm going to make this into an array, I'm a fan of making my arrays multi line just to make them more readable, so I'm going to do that. And I'm going to do error, and always comma-dangle there as well. And then back here, now I don't have that comma-dangle error. We also had that showing up down here in these arrays and those are gone as well. So, awesome, one down. So the next one is for the yoda rule. There's actually a yoda rule in ESLint. So, I'm going to go back and do a search on yoda. And this is yoda conditions. So this is basically inverting the name and the value in an operation. It's not wrong, but there's an argument that folks subscribe to that you really want to do these in an order that makes sense rather than having your code sound like yoda talks. So, fix this we will. And to do that, I simply want to turn it on, and I'm going to use the default which is never,
>
> **[3:14](https://www.linkedin.com/learning/eslint-customizing-styles/solution-customize-eslint-styles?u=76281980&t=194)** saying I never want yoda conditions. I don't even need to say never, I can just turn this on and make it an error. So, in my eslint, I'm going to add a new line which is yoda, error, the value is. And now I get the error I expected here, because generally the way we write this is counter less than 10 rather than 10 greater than counter. So, for my personal style, I want to use this and so counter less than 10. It's important when fixing that to make sure you're inverting that sign. You don't want to just flip the sides around but leave the same comparison operator in there. At least when it's not an equal. So, we got an error now for the yoda rule here. And we fixed that. And then we have two different comments down here at the bottom about array-brackets-newline. In the first one, we want errors. The second one, we want no errors. So, we got to get a little fine grained in this rule here. So array-brackets-newline, I'm going to head to the docs, array-bracket-newline. Okay, it's actually singular, array-bracket-newline. And so in this case, we've got a few options and we've got a couple extras here. So we can do multiline,
>
> **[4:48](https://www.linkedin.com/learning/eslint-customizing-styles/solution-customize-eslint-styles?u=76281980&t=288)** that always require line breaks in between elements. We've got minItems, and this one lets us say "Okay, a certain number "can be on a line together, "but if it gets more than that, "we want them on multiple lines." And looking back at our code, that's the difference here. We've got two items in the second array, but we've got five items in the first array. So we don't want to require a new line for two items or less. We want to require a new line say three items or more. And so looking at the code, I'll find some sample code for this. We've got minItems two. So we probably want to do a minItems three, for requiring that multiline. So we want to change ours to an error, we want it on a multiline so that requires us to use this multiline true, but we want to qualify that and say that that's for a minimum items of three. So, in eslintrc, I'm going to add the array-bracket-newline
>
> **[6:07](https://www.linkedin.com/learning/eslint-customizing-styles/solution-customize-eslint-styles?u=76281980&t=367)** and my array is going to flag that as an error. And then describing what I actually want here. I want multiline option, with a value of true. And I want the minItems, camel case, value. And the minimum number of items that should trigger the multiline mode should be three. So I'll save that. And we can check that in the file over here. I do not have an error on the second one, there's no error anymore, so I've got these on the same line and that's fine. And up here I do have an error saying a linebreak is required after that opening square bracket, before the closing square bracket, because of the number of items I have here. This is actually adjust to match the rule we just put in, array-bracket-newline. So we've successfully gotten that error to show up on the first one and not on the second. I think if we want to fix that, we're going to break this up and I'm going to prefer that if we're breaking it up like that I want all my values on different lines as well. I leaned really heavily on the documentation, that's always my friend, and I started out looking for that extension, looking for what we are starting with as a baseline.
>
> **[7:42](https://www.linkedin.com/learning/eslint-customizing-styles/solution-customize-eslint-styles?u=76281980&t=462)** So just taking it step by step and issue by issue, got this ironed out so that I have a set of rules that define how I want my code to look. And my code now looks the way I want it to.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ESLint]] (4)
> **CLI Commands:** make (4), find (1)
> **Code Identifiers:** minitems (4)
> **Documentation:** the documentation (2), the docs (1)
> **Best Practices:** recommended (2)
> **Tools:** terminal (1)
> **Exercise Files:** sample code (1)
> **Prerequisites:** setup (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/eslint-customizing-styles/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/eslint-customizing-styles/next-steps?u=76281980&t=0)** - [Narrator] Thanks so much for joining me in this course. You now have experience customizing [[ESLint]] for your projects. To dig deeper into incorporating ESLint into a tool chain, check out a course on integrating ESLint. If you want to learn more about the reasons behind common coding styles, check out a course on [[JavaScript]] best practices. Feel free to follow me online. Now take your new skills and build something amazing. Good luck!

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ESLint]] (3), [[JavaScript]] (1)
> **Speakers:** - [narrator] (1)


## Instructor

- [[Sasha Vodnik]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/eslint-styles-2255010/codespaces)

## Skills Covered

- ESLint

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