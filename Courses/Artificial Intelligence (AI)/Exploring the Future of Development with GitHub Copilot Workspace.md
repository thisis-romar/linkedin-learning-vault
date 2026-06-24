---
type: course
cssclasses:
  - lle-course
slug: exploring-the-future-of-development-with-github-copilot-workspace
url: "https://www.linkedin.com/learning/exploring-the-future-of-development-with-github-copilot-workspace"
duration_minutes: 14
duration: 14m
updated: 8/27/2024
learners: 7909
skills:
  - Software Development
  - AI Software Development
  - Artificial Intelligence (AI)
  - GitHub Copilot
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQG5oNpjPsDhZg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1724694523741?e=2147483647&amp;v=beta&amp;t=WojonxksaCoWB_rIERx8lgajZ6wThZ_cNCtV5rqHvO0"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[Master GitHub Copilot](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Master%20GitHub%20Copilot.md)'
prev_courses:
  - '[AI Pair Programming with GitHub Copilot](AI%20Pair%20Programming%20with%20GitHub%20Copilot.md)'
next_courses:
  - '[Supercharge the Development Process with GitHub Extensions for Copilot Chat](Supercharge%20the%20Development%20Process%20with%20GitHub%20Extensions%20for%20Copilot%20Chat.md)'
path_nav: '[{"path":"Master GitHub Copilot","position":2,"total":8,"prev":"AI Pair Programming with GitHub Copilot","next":"Supercharge the Development Process with GitHub Extensions for Copilot Chat"}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - topic/software-development
  - skill/software-development
  - skill/ai-software-development
  - skill/artificial-intelligence-ai
  - skill/github-copilot
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Exploring%20the%20Future%20of%20Development%20with%20GitHub%20Copilot%20Workspace.md)

![Exploring the Future of Development with GitHub Copilot Workspace](https://media.licdn.com/dms/image/v2/D560DAQG5oNpjPsDhZg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1724694523741?e=2147483647&amp;v=beta&amp;t=WojonxksaCoWB_rIERx8lgajZ6wThZ_cNCtV5rqHvO0)

# Exploring the Future of Development with GitHub Copilot Workspace

> Explore GitHub’s Copilot Workspace, a task-centric, AI-driven environment designed to help you improve every step of your coding process. Learn how to initiate tasks from issues, refine pull requests, and create new repositories using natural language. With integrated terminals for validation, session sharing for collaboration, and configurable workflows, Copilot Workspace gives you the tools to o

> [LinkedIn Learning](https://www.linkedin.com/learning/exploring-the-future-of-development-with-github-copilot-workspace) | 14m | 8K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [The coding revolution is driven by AI](#the-coding-revolution-is-driven-by-ai)
- [**1. Using Copilot Workspace**](#1-using-copilot-workspace) (3 videos)
  - [Creating a spec with Copilot Workspace](#creating-a-spec-with-copilot-workspace)
  - [Generating a plan for your Copilot Workspace](#generating-a-plan-for-your-copilot-workspace)
  - [Implementing a plan](#implementing-a-plan)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [The coding revolution is driven by AI](https://www.linkedin.com/learning/exploring-the-future-of-development-with-github-copilot-workspace/the-coding-revolution-is-driven-by-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/exploring-the-future-of-development-with-github-copilot-workspace/the-coding-revolution-is-driven-by-ai?u=76281980&t=0)** - Last year at the [GitHub](../../Skills/Software%20Development/GitHub.md) Universe Conference, the company announced a new tool called [Copilot](../../Skills/Cloud%20Computing/Microsoft%20Copilot.md) Workspace. This tool helps you streamline your workflow in partnership with AI. It helps you write a spec that defines the task necessary to accomplish your issue. Then it suggests a plan that looks through your repo profiles and identifies what needs to be changed, and how to go about it. Finally, it suggests code that you could add to your files to accomplish the plan. Throughout the process, it lets you modify or improve on every file, task, or code suggestion, and keeps you in charge of the process. It's the perfect balance between assistance and control, that feels like the future of coding, and, yes, you need to know how it works. Let's do this.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GitHub](../../Skills/Software%20Development/GitHub.md) (1), [Copilot](../../Skills/Cloud%20Computing/Microsoft%20Copilot.md) (1)
> **Documentation:** spec (1)
> **Tools:** github (1)
> **Speakers:** - last (1)


### 1. Using Copilot Workspace

[↑ Back to Table of Contents](#table-of-contents)

#### [Creating a spec with Copilot Workspace](https://www.linkedin.com/learning/exploring-the-future-of-development-with-github-copilot-workspace/creating-a-spec-with-copilot-workspace?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/exploring-the-future-of-development-with-github-copilot-workspace/creating-a-spec-with-copilot-workspace?u=76281980&t=0)** - [Instructor] [Copilot](../../Skills/Cloud%20Computing/Microsoft%20Copilot.md) Workspace is available through a wait list, but the project itself was announced back in [GitHub](../../Skills/Software%20Development/GitHub.md) Universe 2023. Although it's listed as a research prototype, it feels pretty ready for usage. I'm going to work with a couple of issues in this course. First, I'll start with this Create a README file issue, and then I'll follow up with a more complex one. This is going to generate a README file for this project. Notice that you can see an Open in Workspace button on the bottom right-hand side, and if we click on that, the AI will start working to create a specification for solving your issue. This is the key thing that the AI is trying to solve. It will then create a current section that describes how the current state of your files aligns with the questions that it's asked. Then it creates a proposed section, and that tries to describe what's necessary to accomplish the steps in the current section up here. The entire specification is editable, so if you don't like the question that it's asked, you can just click right here and rewrite the question your own way. You can also use these buttons right here to expand and collapse any particular section. So if you want to look at the issue, you can click right here, take a look at how the issue was written. We can go ahead and hit the Edit Issue button and add something right here. I'm going to add something to my spec, and I'll go ahead and ask it to not include any usage guidelines. If I hit Update Specification, then it's going to rewrite the entire specification for me. At any point in time,
>
> **[1:35](https://www.linkedin.com/learning/exploring-the-future-of-development-with-github-copilot-workspace/creating-a-spec-with-copilot-workspace?u=76281980&t=95)** you can hit this Regenerate Specification button and it will let the AI try to write the spec again. You can also hit this button and use natural language to change the specification. You can always add items by hitting this button down here, and if you hit on these three buttons next to an item, you can choose to indent the item, move the item up and down the list, or add child items. Indenting is a good way to indicate hierarchy and help the AI along as it's trying to figure out what things are important. There's a few other buttons that are important right here, so for example, you can toggle a terminal. This will create a temporary code space just with the terminal, and you can use traditional [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) commands to manage your files, perhaps execute some [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md), or run a web server. If you want to open up a full code space, you can do that with this button right here. And now you have a full-featured IDE to work with your files. You can, of course, bookmark this project, and you can always click on the Workspace logo to see all of your different workspaces or get to them with this menu right here by going to Your Sessions. If you click right here, you'll be able to share a snapshot of the project with anyone who you give the link to. If you like the spec, you can also publish the spec into an issue comment, and that will allow you to continue to discuss this project with the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of your team.
>
> **[3:08](https://www.linkedin.com/learning/exploring-the-future-of-development-with-github-copilot-workspace/creating-a-spec-with-copilot-workspace?u=76281980&t=188)** We can click on Open in GitHub and take a look at the issue, which now includes my new notes. This will also give you a link back to the Copilot Workspace.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Copilot](../../Skills/Cloud%20Computing/Microsoft%20Copilot.md) (2), [GitHub](../../Skills/Software%20Development/GitHub.md) (2), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (1), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **Documentation:** specification (6), spec (4)
> **Tools:** github (2), terminal (2)
> **UI Navigation:** click on (3), toggle (1)
> **Env Vars:** readme (2), ide (1)
> **CLI Commands:** python (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)

#### [Generating a plan for your Copilot Workspace](https://www.linkedin.com/learning/exploring-the-future-of-development-with-github-copilot-workspace/generating-a-plan-for-your-copilot-workspace?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/exploring-the-future-of-development-with-github-copilot-workspace/generating-a-plan-for-your-copilot-workspace?u=76281980&t=0)** - [Instructor] When you generate a plan, the AI is going to take the spec and try to show you the files and the changes that are necessary to achieve your proposed results. For this project, I'm starting with a new issue, and in this issue I have asked the AI to update the latest version of Bootstrap. Current version is somewhere in the 4.0 range. And so I want to update to 5.3.3. I want to make sure that I get rid of jQuery and I'm going to switch from currently using local versions of jQuery, Bootstrap and the other libraries to CDN links. So you're going to see that although the AI is pretty good at developing a plan, sometimes it doesn't get everything quite right and I want to help it do that a little bit better. So I already went through the process of creating a spec and here is what I have so far, Bootstrap has not been updated. Index.[HTML](../../Skills/Web%20Development/HTML.md) still references the CSS file, which is not the latest version. jQuery is still present. Local links are still used for Bootstrap and jQuery and the index.html file. And then it's given me a plan of action here. So the current plan is to make sure that Bootstrap has been updated to 5.3.3. The index now references to CDN links, et cetera, et cetera. So I'm going to go ahead and hit this Generate plan button and you're going to see that it's going to work on plan of action for what I want it to do. This is mostly a decent plan. It says that it wants to update the Bootstraps CSS link to use the latest version for 5.3.3.
>
> **[1:34](https://www.linkedin.com/learning/exploring-the-future-of-development-with-github-copilot-workspace/generating-a-plan-for-your-copilot-workspace?u=76281980&t=94)** Then it's going to remove the jQuery script link. That's great. Remove the local Bootstrap CSS link. But I noticed that on a project you really should be linking also to the Bootstrap [JavaScript](../../Skills/Software%20Development/JavaScript.md), and that's not right here. So I may want to add that as an item that I wanted to complete as well. When I go ahead and click on this right here and just say, make sure you add the Bootstrap JavaScript CDN link. On the other implementation, it's saying that it wants to delete that file, which is great. I don't really need that. And then it's going to replace a jQuery sort of call from the JavaScript file. By default, when you use jQuery, you usually put it in this function and it's going to add an EventListener to the DOM. So this is actually fine that it's doing that. And then it's going to replace all jQuery methods with [Vanilla](../../Skills/Web%20Development/Vanilla.md) JavaScript equivalents. Now, it's not really looking through the code and making any changes to the actual index.html file, and it should go ahead and do that. I'm going to go to the Bootstrap website. And if you look at the Bootstrap documentation, you'll notice that at the very end there is a migration guide. This page lists the migration instructions for a previous version to upgrade to the latest versions. One of the nice things that you can do is actually just refer to this migration guide and I'll just say refer to the link from the Bootstrap migration page to update the Bootstrap code. And at any point, you can break out a terminal if that is easier, or you can open a code space. You also get a couple of buttons here
>
> **[3:08](https://www.linkedin.com/learning/exploring-the-future-of-development-with-github-copilot-workspace/generating-a-plan-for-your-copilot-workspace?u=76281980&t=188)** that are kind of important, and this is where you can add a file to a plan. So if you want to reference an existing file somewhere else in your document, you can refer to that document and just ask the project to do something with that file. So I can take a look at this folder to take a look at my file structure. So for example, I have this animate.css file and I never really call that. So I can refer to that file and then ask the AI to make sure that it deletes that file by using this section down here. So I'll click on this, I'll put the file reference and I'm going to say I want you to delete that file. So I'll add that to the list of things that I want it to do, and then I'll take a look at the project again, look at the file explorer. It's sometimes a little bit easier than jump into a code space and see if there's anything else that I wanted to do. I'm going to get rid of this fontawesome library. So let's go and do that in the index.html. Delete reference to, and I'll just paste that right there as part of my plan. You can also click on this button and you can ask the AI to have some information about the entire project, not necessarily referring to specific files. I don't have anything that I want to add to these general notes, so I can go ahead and just delete that instructions and it'll collapse that out. So let's go ahead and hit Implement selected files, and you could see it work through the different changes. And as soon as it finishes some of the changes,
>
> **[4:42](https://www.linkedin.com/learning/exploring-the-future-of-development-with-github-copilot-workspace/generating-a-plan-for-your-copilot-workspace?u=76281980&t=282)** you could see that it's showing you a view of what it's changing. You can see that it's now calling this Bootstrap project from a CDN link, plus it got rid of the fontawesome library. And because I gave it the reference to the Bootstrap modifications, I was able to read that list of changes from that link. You can see on the JavaScript it replace this jQuery version of this function with this document addEventListener. You can come in here and actually just edit the code. So I can literally just delete the jQuery manually if I want to do that. But you can also use natural language to revise the plan. So another thing that I want to do is I'm noticing that when it calls a CDN, it's not quite using the CDN that Bootstrap uses by default. And you could see the same thing is happening up here with this stylesheet. So what we're going to do is take a look at the documentation again and just go to the top of the Bootstrap website. There is a link here to Read the docs, and that's usually where you get the code for how Bootstrap should be loaded. I'm going to just grab the link to the proper or the current CDN with all of this additional code. And again, I'll just replace this link right here with the official one. And that is just a lot easier than actually rebooting the AI into doing some things. I'm going to copy the JavaScript link from this page and make sure that that's the one that I'm using right here as well. So that's great.
>
> **[6:16](https://www.linkedin.com/learning/exploring-the-future-of-development-with-github-copilot-workspace/generating-a-plan-for-your-copilot-workspace?u=76281980&t=376)** Now, from here, I can go ahead and Create a pull request, but before I do that, I want to make sure that I check things on a live preview to make sure that I've done things correctly. We'll take a look at that in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (6), [HTML](../../Skills/Web%20Development/HTML.md) (4), [Vanilla](../../Skills/Web%20Development/Vanilla.md) (1)
> **Code Identifiers:** jquery (10), addeventlistener (1)
> **Env Vars:** cdn (7), css (3), dom (1)
> **CLI Commands:** make (7)
> **File Paths:** index.html (4), animate.css (1)
> **UI Navigation:** click on (3), go to (2)
> **Versions:** 5.3.3 (3), 4.0 (1)
> **Documentation:** spec (2), the documentation (1), the docs (1)

#### [Implementing a plan](https://www.linkedin.com/learning/exploring-the-future-of-development-with-github-copilot-workspace/implementing-a-plan?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/exploring-the-future-of-development-with-github-copilot-workspace/implementing-a-plan?u=76281980&t=0)** - [Instructor] Let's take a look at how we would implement these different changes that we've made and also how we can verify that they're working correctly. So let me point out a couple of things that you can do here. There are some controls that you can do to the Diff tools by switching to a unified view. That's just a different way to look at the code, but it lets you see everything. And you can of course switch it back to split view, which is a side by side view. Sometimes on smaller screens, the unified view might be a little bit better. You can also click on the Target button and notice that it gets added to this section right here. And that way you can ask it to just modify a specific file. You can also give yourself a little bit more room. Now, although we could create the pull request directly from here, we can also just make sure that we verify this particular file in a code space. That's going to be a little bit better, because it's going to allow me to take a look at a preview. So I'm going to open up a code space for this project. So it created this code space for me. And this is a copy of Visual Studio code. Notice that it actually created a branch for the changes that it is working on. I know that any changes that I make here are going to be added. So notice there's source control here showing that the index file as well as some of these other documents have been modified. So if I click on this, I can take a look at the changes and let's take a look at where it replace my CDN link and I can take a look at the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the code
>
> **[1:34](https://www.linkedin.com/learning/exploring-the-future-of-development-with-github-copilot-workspace/implementing-a-plan?u=76281980&t=94)** to see all my changes as well. So one of the things that we can do here is do a live preview. Because this is Visual Studio code, we can actually load an additional extension. So I'm going to load up a live preview extension. I'm actually going to load this third one right here called Live Server. It's going to install that. And now we can go back to the project. And what I want to do is open up this index at [HTML](../../Skills/Web%20Development/HTML.md) in a live preview. So I'll say Open with Live Server. This is going to open up a port that I can click to open in my browser. I can see that it's working just fine. And when I go to this smaller view, I want to verify that my dropdown still works and also that this dropdown code is also working fine since I know that it rewrote that section of the HTML. So my changes look pretty good. Let's go ahead and close this preview and I can even close out the code space and I'll go back into my project and I'll go ahead and create a pull request, update Bootstrap is fine, update to the latest version. Then I'll click on this Fixes Issue #6, and I can even ask the AI to generate a description of the changes for me. And it's going to make a list right here of what I've changed. What a beautiful thing it is to have the AI write your descriptions here. It's much better than when I had to type 'em all in. So I'm going to hit Create Pull Request,
>
> **[3:08](https://www.linkedin.com/learning/exploring-the-future-of-development-with-github-copilot-workspace/implementing-a-plan?u=76281980&t=188)** and now I can open this up in [GitHub](../../Skills/Software%20Development/GitHub.md) and it's going to show me the pull request, added right here. And if I want to, I can go ahead and continue discussing this with team members, or I can just hit the Merge Pull Request button to merge that into my project and add my own notes or confirm the merge here. And that will add those changes from the AI into my project. So you can see that the process of implementation is pretty straightforward. I really love that it tries to help you with AI as much as possible, and it's really helpful, but it always defers to you as the manager of the project.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (2), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1), [GitHub](../../Skills/Software%20Development/GitHub.md) (1)
> **UI Navigation:** click on (3), dropdown (2), go to (1)
> **CLI Commands:** make (3)
> **Env Vars:** html (2), cdn (1)
> **Tools:** visual studio (2), github (1)
> **Definitions:** is a  (2)
> **Cross-References:** go back to (1)
> **Prerequisites:** install (1)


## Instructor

- [Ray Villalobos](../../Instructors/Software%20Development/Ray%20Villalobos.md)

## Skills Covered

- Software Development
- AI Software Development
- Artificial Intelligence (AI)
- GitHub Copilot

## Path Context

### In [Master GitHub Copilot](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Master%20GitHub%20Copilot.md)
← [AI Pair Programming with GitHub Copilot](AI%20Pair%20Programming%20with%20GitHub%20Copilot.md) | **2 of 8** | [Supercharge the Development Process with GitHub Extensions for Copilot Chat](Supercharge%20the%20Development%20Process%20with%20GitHub%20Extensions%20for%20Copilot%20Chat.md) →

## Appears In

- [Master GitHub Copilot](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Master%20GitHub%20Copilot.md)

## Related Courses

_Courses sharing skills:_

- [Ai And Developer Productivity](Ai%20And%20Developer%20Productivity.md) — Artificial Intelligence (AI), Software Development, AI Software Development
- [Software Testing Assistance with GitHub Copilot AI](Software%20Testing%20Assistance%20with%20GitHub%20Copilot%20AI.md) — Artificial Intelligence (AI), AI Software Development, GitHub Copilot
- [Creating a Book Search Engine from Scratch Using Java and GitHub Copilot](Creating%20a%20Book%20Search%20Engine%20from%20Scratch%20Using%20Java%20and%20GitHub%20Copilot.md) — Artificial Intelligence (AI), GitHub Copilot
- [Practical GitHub Copilot](../Software%20Development/Practical%20GitHub%20Copilot.md) — Artificial Intelligence (AI), GitHub Copilot
- [AI Orchestration- Foundations](AI%20Orchestration-%20Foundations.md) — Artificial Intelligence (AI), AI Software Development

---

[↑ Back to top](#)