---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: practical-github-project-management-and-collaboration
url: "https://www.linkedin.com/learning/practical-github-project-management-and-collaboration"
duration_minutes: 79
duration: 1h 19m
level: Advanced
updated: 10/31/2025
learners: 5562
skills:
  - Project Management
  - GitHub
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQED-m1hwFpEWw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1686944899848?e=2147483647&amp;v=beta&amp;t=VnE1Lybft4PfkhKsuPymyh2Epl4MAN_ESCEQuXWLTXY"
linkedin_topic: Software Development
learning_paths:
  - '[[Career Essentials in GitHub Professional Certificate]]'
prev_courses:
  - '[[Resume]]'
next_courses:
  - '[[Practical GitHub Copilot]]'
path_nav: '[{"path":"Career Essentials in GitHub Professional Certificate","position":2,"total":4,"prev":"Resume","next":"Practical GitHub Copilot"}]'
path_count: 1
tags:
  - course
  - topic/software-development
  - skill/project-management
  - skill/github
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/Practical%20GitHub%20Project%20Management%20and%20Collaboration.md)

![Practical GitHub Project Management and Collaboration](https://media.licdn.com/dms/image/v2/D560DAQED-m1hwFpEWw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1686944899848?e=2147483647&amp;v=beta&amp;t=VnE1Lybft4PfkhKsuPymyh2Epl4MAN_ESCEQuXWLTXY)

# Practical GitHub Project Management and Collaboration

> If you’re looking to take advantage of the more powerful features of GitHub, this course was designed for you. GitHub is more than just a code repository—it's also a system for managing social interactions and collaborating with your teammates to create better code. Join Senior LinkedIn Learning staff instructor Ray Villalobos to learn how to get started using GitHub’s built-in project management 

> [LinkedIn Learning](https://www.linkedin.com/learning/practical-github-project-management-and-collaboration) | 1h 19m | Advanced | 6K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Creating projects for development](#creating-projects-for-development)
- [**1. Creating a Project**](#1-creating-a-project) (9 videos)
  - [Projects vs. classic projects](#projects-vs-classic-projects)
  - [Starting your first project](#starting-your-first-project)
  - [Project settings and fields](#project-settings-and-fields)
  - [Using view categories](#using-view-categories)
  - [Converting drafts to issues](#converting-drafts-to-issues)
  - [Assigning items to collaborators](#assigning-items-to-collaborators)
  - [Starting a project with an issue](#starting-a-project-with-an-issue)
  - [Project items with pull requests](#project-items-with-pull-requests)
  - [Using saved replies](#using-saved-replies)
- [**2. Working with Projects**](#2-working-with-projects) (5 videos)
  - [Using labels](#using-labels)
  - [Task lists](#task-lists)
  - [Slash commands and emojis](#slash-commands-and-emojis)
  - [Views and filters](#views-and-filters)
  - [Insights](#insights)
- [**Conclusion**](#conclusion) (0 videos)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Creating projects for development](https://www.linkedin.com/learning/practical-github-project-management-and-collaboration/creating-projects-for-development-29982145?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-github-project-management-and-collaboration/creating-projects-for-development-29982145?u=76281980&t=0)** - Most developers begin writing code on their own, but real software work means collaborating and organizing as a team. [[GitHub]] has grown into a community of over 100 million developers because it provides powerful tools to manage projects. In this course, we'll create a project from scratch connected to a repository, and explore how issues, boards, and roadmaps keep work moving. You'll learn how professionals use GitHub projects to track progress, assign tasks, and gain insights into their work. So, if you wanna see how project management fits into modern development, let's do this.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (2)
> **Tools:** github (2)
> **Speakers:** - most (1)


### 1. Creating a Project

[↑ Back to Table of Contents](#table-of-contents)

#### [Projects vs. classic projects](https://www.linkedin.com/learning/practical-github-project-management-and-collaboration/projects-vs-classic-projects?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-github-project-management-and-collaboration/projects-vs-classic-projects?u=76281980&t=0)** - [Ray] There are two versions of [[GitHub]] Projects. All new projects are created with the New GitHub Projects Experience. But you may run into an instance where a repo is still using the Classics Projects Experience. Let's talk about the differences. You can't create new Classic Project You can only create a new Classic Project if an organization has at least one existing Classic Project. Classic Projects are made up of issues, poll requests, and notes that are similar to the way boards work in the New Experience. With classic Projects you can add a project at a repo level, but with New Projects, your projects are created at the organizational level, and can be attached to any of your repos. Now, this makes a lot more sense because it makes all the projects much easier to find, instead of having to dig around individual repos. You can migrate a project from the Classic Experience to the New Experience when you find a repo that was created in Classic Mode, it will say "classic" in parentheses, and when you open up that project you'll see a way to migrate to the New Projects right at the top. Let's go ahead and take a look at a Classic Project and then a New Project. So here's a repository that has a Classic Project. we're right now in the Projects tab of that repository and you can see here, that we have a section underneath called "Projects," and then in parentheses (Classic). Now because I have that, I can click to create a new Classic Project, but you wouldn't be able to see this unless you already had a Classic Project in your current repository.
>
> **[1:34](https://www.linkedin.com/learning/practical-github-project-management-and-collaboration/projects-vs-classic-projects?u=76281980&t=94)** Now we can click on one of these right here to take a look at the experience. And when we do that, you can see that you can now migrate this to the New Projects Experience. It looks pretty similar to just the Boards in the New Experience, and you can still drag these around to change the Status and Add Columns, Add Cards, it's pretty familiar if you've been using the New Projects. Now, let's compare this to what it would look like on a New Project. So for example, I'm going to click on this GitHub Projects. Now notice that right now I am just in my Profile and I've clicked on the Projects tab, I'm not in a specific repo. So if I click on GitHub Projects here, by default, I'm going to drop into the Table View, but if I go to any of the Board Views, so I'm going to click on this view right here or you can click on New View and then choose Board, from this list right here, you'll see that it looks similar to the previous experience. It's a little bit more colorful, but I can still take these things and move them around and drag them around and I can create new Cards, but by adding items here, and it's basically a simplified version of this Board Experience that doesn't give you the option of seeing Roadmaps, and it doesn't give you the option of doing Tables.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (4)
> **UI Navigation:** click on (5), go to (1)
> **Tools:** github (4)
> **Analogies:** similar to (3), for example (1)
> **CLI Commands:** find (2)
> **Speakers:** - [ray] (1)

#### [Starting your first project](https://www.linkedin.com/learning/practical-github-project-management-and-collaboration/starting-your-first-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-github-project-management-and-collaboration/starting-your-first-project?u=76281980&t=0)** - [Instructor] Let's create our first project and look at some of the options available. I really want to encourage you to do this on your own and follow along with your own [[GitHub]] account. Now, projects live in a special section right here on this Projects tab. They can also be associated with a specific repo. Well, let's go to Projects and create a new project. Now, once you hit this New project button you'll get a modal with a few options. Let's go over these main categories. Tables are the classic way to work with projects. It's a little bit like a spreadsheet view with rows and columns. Boards are created in the style of kanban boards, a popular [[Agile Development|agile]] methodology structure that is really helpful for getting an overview of a project. Roadmaps are a more traditional project management view, where the timeline is visualized clearly. Now you can easily move between these different views, so don't worry about which one you pick. I'm going to go with the classic table to start with. Now I'll give this thing a name. I'm just going to call it Github Projects, but you can call it whatever you want. I'll hit the Create button, and we'll get a new project with our view set to the table style view. So I'm going to rename this by clicking right here, and I'm just going to identify it as the table view. You may want to call it overview or whatever you want on your project. Now the interface is pretty subdued, but very powerful. At the top, you can edit the name of the project. So you can still click right here,
>
> **[1:33](https://www.linkedin.com/learning/practical-github-project-management-and-collaboration/starting-your-first-project?u=76281980&t=93)** and this will take you to the project settings. To get back, you can hit this arrow right here. Here you can type though a short description of your project, and let's just go ahead and type something in here. Or you can type in an additional README with a lot more details. This is a much better place to put complex things. Notice that you can use Markdown, or you can use the little icons right here. And you can also drag and drop files. So you can add a video or an image to this right here. Here's also where you can make a copy of the current project. If you already have created a project, sometimes it's good to start from something you already started previously, or maybe make yourself, like, a little template project, and make a copy whenever you need a new one. Of course, you can also set the visibility. Usually projects are private, but you may want to create a project that is public, especially on an open-source product. This is where you can also close this project. This will disable the workflows and remove it from the list of projects. And then of course, you can delete the project, which will completely delete the project. So make sure you don't do that unless you really mean to. One thing about working with GitHub is that there's usually no Save button. So as soon as you type something in, you've made a modification to the element that you were working with. Let's go back in the project's settings, and there's just a few little icons here at the top. One of them is to look at the insights,
>
> **[3:06](https://www.linkedin.com/learning/practical-github-project-management-and-collaboration/starting-your-first-project?u=76281980&t=186)** which is sort of like analytics for projects. Before you really enter any data you won't be able to see anything in here, but there's also an additional side panel, so you can open the quick access to the description, as well as the README right here, without having to go to the project settings. There's also a little hamburger menu right here, and you can go to different places within projects. Here's also another way of making a copy. Go to your settings, or maybe take a look at some of the archived items. Whenever you create an item, you can also archive them so you don't see them anymore on this list. And this is a way of looking at whatever has been archived. And you can also get some additional links to documentation, feedback, and what else is new. Now you can create as many views as you need to for a project. We'll get into that in just a bit. Notice that there is a little triangle right here. This is for some additional sort of modifications to the current view. So you can even switch to a different layout by clicking on these different tabs. And you can also see the different configuration settings. So you can choose to group items together. We'll do that whenever we create more items. And then you can also choose to sort things in whatever way you want. From here you can also generate charts, and duplicate this view if you want to make a copy of an existing view. Once you start modifying the views you can actually save them,
>
> **[4:38](https://www.linkedin.com/learning/practical-github-project-management-and-collaboration/starting-your-first-project?u=76281980&t=278)** so that you can see the same data in different ways. There's also a place here to filter the available list. Right now there's nothing in here, so if you start typing you wouldn't see anything. But if you had a bunch of items, this is a quick way of finding things. Once you have filtered items, you can also save that as the current view. So if you want to look, for example, for, maybe items that begin "pull request" or anything else, then that view can be saved, and the current view will only show those items. That's quite useful, and you'll see how, when we create multiple views, we can create views showing only the information that we want. Now here you can see the place where you can add additional items. Now items can be tied to a specific repo, but it can also be draft items. That's a place where you can brainstorm ideas for your project. Let's add a task to create a repository for this project. Now you can hit Control + Space, but on a Mac that's usually tied to something else, so you may have a little bit of problem hitting that, but you can just also click on the item and start typing. So we'll add a Create a Repository task for this project. And I'm just going to hit Tab. That creates the repository. Notice that it automatically moved to the next column. And from here I'm going to click right there, and assign myself to this task. And I can even add a status. So my status can be Todo, In Progress, and Done.
>
> **[6:13](https://www.linkedin.com/learning/practical-github-project-management-and-collaboration/starting-your-first-project?u=76281980&t=373)** And I can add additional statuses if I want to. So I'm going to click Todo for right now. So that means that we have created our first draft, we assigned it to ourselves, and we also looked at the general interface. Let's keep going.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (3), [[Agile Development|Agile]] (1)
> **UI Navigation:** go to (4), drag and drop (1), open the (1), switch to (1), click on (1)
> **CLI Commands:** make (5)
> **Definitions:** is a  (4), means that (1)
> **Tools:** github (3)
> **Env Vars:** readme (2)
> **Documentation:** the readme (1)
> **Exercise Files:** template (1)

#### [Project settings and fields](https://www.linkedin.com/learning/practical-github-project-management-and-collaboration/project-settings-and-fields?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-github-project-management-and-collaboration/project-settings-and-fields?u=76281980&t=0)** - [Instructor] Let's go back and take a look at some of the settings available to the project. You can get that with this hamburger menu. And I'm going to go back to settings. Here is where you put in, of course, the name and the description as we saw before, and the read me file and where you can do all these dangerous things down here. Now another thing that you do here is manage the access for your project. And this access means that you can give other people a way to contribute into the current repository or the project so you can search for additional people in here. I'm going to look for my friend and invite her to have access to the project. So I'm going to hit this invite and that will send her an email with an invitation to this project. Here you can also control what kind of access this person has to the current project. Now when you associate this with a repo you also need to give them permissions to the repository. So we'll take a look at how that works later on when we add a repo. But this should allow you to brainstorm with someone else and give them access that they need so you can just have them be able to read the project or do everything you can which means add new collaborators to the project. Write access is just fine for Jojo right now. You can also remove people and if you have a lot of people in your project, you can find a collaborator by doing a search. Right now we only have one member, so that should be enough. Now there's also a way of adding custom fields
>
> **[1:34](https://www.linkedin.com/learning/practical-github-project-management-and-collaboration/project-settings-and-fields?u=76281980&t=94)** or looking at the custom fields that are available in your project. By default, [[GitHub]] adds a status field and this is the one that you saw earlier. The status can be set to to do, in progress and done and these are special field that will automatically get assigned depending on what you are doing. So you can also add options. So I'm going to click right here and add an option called backlog. And this is a good place to hold different brainstorming things that you're doing. So let's go ahead and move that to the top because I usually like it to be at the beginning of the list. So I'm going to click and drag that to the top, let go. And if I want to edit this, I can click on this little pencil icon and maybe modify the color. I'm going to say backlog is more like a blue because it's sort of cold. And I'll put in here, brainstorm ideas for the project. So I'm going to hit save, and now this is a new option that's added at the beginning of the list. Every project can have a number of different fields to let you manage your tasks. The fields can be of different types. So let's go ahead and add a field. I'll click on new field right here. And you can see that the basic field type is text, but there's a number of other different types of fields as well. Now I'm going to create a new field to add a due date to my task. Let's just call it due for right now
>
> **[3:07](https://www.linkedin.com/learning/practical-github-project-management-and-collaboration/project-settings-and-fields?u=76281980&t=187)** and select date as the option. I'm going to hit save. Then I'll add another field and I'm going to call this one sprint. Now the other types available here are pretty straightforward, you can see that text would be just some text that people are able to type like I use that sometimes for URLs or maybe email addresses that you want to have of an individual working on a task. You can also add, say, dates that you saw and also a single select field. The status field was a single select field. So once you choose that one, you can add the options manually right here. You can also choose something called an iteration field and that would be a field that you want to be a recurrent element in your views. They make a lot of sense for the project section. So here, let's say that we wanted to have a sprint every two weeks in this project starting today. Then you could just say, we're going to meet every Tuesday, say or every two Tuesdays and add a duration. So if we wanted it to last maybe one week instead of two weeks, that might be better for each one of these sprints. You can also choose to do something a certain number of days. I'm going to keep it to one week. We're going to have a meeting every week and have different sprints on every week until the project is done. So I'm going to hit save and create and now that becomes a new field. From here, you can also modify or delete any of the sprints.
>
> **[4:42](https://www.linkedin.com/learning/practical-github-project-management-and-collaboration/project-settings-and-fields?u=76281980&t=282)** So you can say add iteration, and notice that it's just going to add another iteration one week after the previous week. I just need three, so I'm going to delete it. Just hit this button right here. It notes that I'm in the current timeframe so it's going to automatically advance as we get through the different timeframes. And you can click here in more options to modify the default settings. So you can say, okay, well this one's going to start on whatever day and then it's going to last however many weeks you want to. So you can modify all these if you want. You can also rename them if you want 'em to have more fun names. And if you click right here on the date you can also change the durations manually by using this sort of pop-up date picker. So that is how you add additional fields and finish up the settings for your project.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (1)
> **CLI Commands:** find (1), make (1)
> **Cross-References:** go back to (1), as we saw (1)
> **Definitions:** is a  (2)
> **Tools:** github (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)

#### [Using view categories](https://www.linkedin.com/learning/practical-github-project-management-and-collaboration/using-view-categories?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-github-project-management-and-collaboration/using-view-categories?u=76281980&t=0)** - [Instructor] There are different ways to view your tasks using the views tabs right here. We created a table view to look at our data in the form of a spreadsheet. Let's go ahead and add another view. So I'm going to click on New view right here. And this time I'm going to choose the Board view. You can see that it's a real convenient way to look at our tasks and how they are progressing. So right now, my first task is under the Todo section but I can easily move it to In Progress just by click and dragging it right here, or I can move it maybe to the Backlog by moving it over here. Now if I switch back into the Table view, you'll notice that the status has automatically updated according to the new position for this task. Now, let's go ahead and make sure that that is name Board. I'm just going to call them what they are right now. I usually call this one kanban because I'm used to that name from [[Agile Development|Agile]] methodology. You can probably give them more descriptive names and sometimes you create different versions of the view as well by clicking right here and then duplicating the view to create an option. Now if you want to get to the more information section from this view, you can click right here. Now this will take you to this sort of sub tab that lets you see all of the information from the view including a description and all of the other fields. So here's another place where you could switch the status to one of the other elements.
>
> **[1:33](https://www.linkedin.com/learning/practical-github-project-management-and-collaboration/using-view-categories?u=76281980&t=93)** You can also add a date right here. So let's go ahead and this will be due say by tomorrow. And then I can choose an iteration. So I'm going to put this in the current sprint. And again, when I close this, let's go back into the table. You can see that all those things have been added to my Table view as well as the Board view. So let's go ahead and do the last type of view called the Roadmap. And I'll go ahead and type in just roadmap here. It's not really a bad name. Now roadmaps do require at least one day or iteration field to get started. So I'm going to click on this Got it right here. And what we need to do is make sure that we specify that one of these fields is something like either the starting date of the item or the due date of the item. So I'm going to say that the target date is going to be the due date. I should probably create a start date sort of field. So I'm going to click on New field here. I'll call this one Start. It's going to be of type date. It already pre-selected that, so that's cool. And so my start date will be set by a field called Start and then my target date will be filled by this field called Due. Now, let's go ahead and I'll click right here. And let's see. For the start date, I'll go ahead and put today's date. So you can always get to all the information
>
> **[3:07](https://www.linkedin.com/learning/practical-github-project-management-and-collaboration/using-view-categories?u=76281980&t=187)** from any one of the views. Every one of the views has a few preferences that you can access right here. One of the ones that are useful for this particular view is the truncate fields because as you can see, the field name here is running way past the beginning and ending date. So let's go ahead and hit truncate fields and notice that when I roll over it shows me the range. And let's go ahead and go back into this view right here. And I can also show the date fields that will show the sort of relevant beginning and ending dates for this particular task. Since it lets you look at 'em when you roll over, I'm going to go ahead and rehide them. So I'll take that off. There's also a way to show different markers. So you can show, for example, a marker for the milestones which we don't have any right now for this project. We'll add those later when we tie the repo to this project. And so we can say add a little marker. You can see this little vertical lines for the due dates or maybe add some markers for the sprints. You can see the little lines over here. And maybe one for the start dates right underneath the current one so you won't really be able to see it. So those markers can be useful. You can see the little titles for the sprints right here. You can also navigate through this by hitting the arrows right here. If you go too far, you can always hit this Today button. It'll scroll you back down to the date. And here you can [[Zoom]] in by different amounts.
>
> **[4:43](https://www.linkedin.com/learning/practical-github-project-management-and-collaboration/using-view-categories?u=76281980&t=283)** You can say quarter view or month view which is what we're in right now. You can also resort things, but again it doesn't really make sense when you have only one item. And then you can also add or look at the markers directly from this section as well. So you can see that the views are really powerful and each type of view shows you a different way to sort of prioritize what's important about your project. But they all work together and modifying a field in one view takes care of them in other views. Now, one more thing. You can see that whenever I modify something, it gets this little blue dot right here. That means that something has changed about my settings for that view and that means that I can hit the Save button. That little circle will go away and now that will be the default way that that view looks. So whenever you do make a change, you'll notice that. You can see super powerful and very easy to work with. It's almost self-explanatory working in this different views, like the drag and drop is a fantastic feature that just works really well.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Agile Development|Agile]] (1), [[Zoom]] (1)
> **CLI Commands:** make (4)
> **UI Navigation:** click on (3), drag and drop (1)
> **Definitions:** means that (2), is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Converting drafts to issues](https://www.linkedin.com/learning/practical-github-project-management-and-collaboration/converting-drafts-to-issues?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-github-project-management-and-collaboration/converting-drafts-to-issues?u=76281980&t=0)** - [Instructor] Although you can create draft items and projects for brainstorming, issues are really at the heart of projects. Let's see how they work and are allowed to tie to our project. Now, [[GitHub]] issues are a way to track your work on GitHub. You don't really need projects to work with issues and you may be familiar with them already but they can have a real special relationship when you use them together in projects. An issue always belongs to a repository. So before we use issue in projects we'll need to create a new repository. Now, the easiest way to do that is by typing in and I'll start a new tab and go to github.new and I'm going to call my repository GitHub Projects Playground. If you have a repo that you want to tie this to already you can go ahead and do that. At least create a repository for following along if you want to. It's a great way to experience what I'm doing as you follow along. So let's go ahead and add a read me file and I'm going to hit create repository down here. All right, so my repository is very bare but it's ready to be tied to a project. So I'm going to go back into my project and I'm going to click on these three buttons right here. I'm going to select convert to issue. From here, I need to type in the name of the repository. So this is going to search through all my repositories. I have hundreds of them. So this is really useful. So you can type in GitHub and the name that you use.
>
> **[1:35](https://www.linkedin.com/learning/practical-github-project-management-and-collaboration/converting-drafts-to-issues?u=76281980&t=95)** So projects playground, select it from the list. And now notice that the status switched to green. Let's go ahead and, let's see. We can open this in a new tab but I'm just going to click right here on this item to take a look at my settings for this particular item. Now you might notice that there's some additional things that were added in here. In addition to assignees now I have something called labels, which refers to issues and there is now a place to add a milestone. Some of the other items were here before so this status is still backlog. Now, I can also relate this to pull requests and there is a repository section here, and it shows me which repository this is tied to. Now let's go ahead and close this, and I'm going to go back into my table view and notice that it also added a number 1. That's because this is the first issue that that repository has, and it's identifying that as the number of the issues. So that's pretty cool. Milestones allow you to keep track of when you've successfully completed a series of tasks that are maybe related to each other. So we're going to go ahead and create one for our project. So let's go ahead and add a milestone to our project. To do that, I'm going to need to switch over into my repository and I'm going to now go to the issue section. You'll notice that there is an issue here and if I click on that, you'll see a slightly different view
>
> **[3:09](https://www.linkedin.com/learning/practical-github-project-management-and-collaboration/converting-drafts-to-issues?u=76281980&t=189)** of what we saw in the project. Interestingly enough, you can see that it actually created a history of when everything happened. So this got assigned to me three minutes ago and then it also converted this from a draft issue and then it also added this to GitHub projects. Notice that this one's actually it says that I did it 31 minutes ago and that's because I did this task much earlier. So I got that time code and then it added these two tasks a little bit after that. So you get a history of everything that you've done, which is pretty cool. And you will notice that as I make modifications to my issue or my project, that will automatically be tracked right here in this section. So I'm going to add a milestone. Right now there is no milestone, so I'm going to click right here and I'm going to create one called setup. All right, so I'm going to create this and assign this issue to the new milestone called setup. And because this item isn't done notice that this bar right here is completely empty. You can add more milestones, like say maybe a milestone for documentation. And whenever all the tasks related to documentation are done, you can mark that as being a milestone that you've achieved. Now, since we just created the repo we can actually go ahead and close this issue and keep an eye on this milestone section.
>
> **[4:42](https://www.linkedin.com/learning/practical-github-project-management-and-collaboration/converting-drafts-to-issues?u=76281980&t=282)** So let's go ahead and close this issue. Notice that the milestone bar just went all green. It now says that it's closed. If you look over here under projects it says that now the status has moved to done. So all that happened automatically. And if we go into the other tab you can see that all that is automatically reflected here. I didn't have to save anything. It took care of that for us. Let's go ahead and close out of here and I'm going to switch over to the board view. Notice that that task actually got moved over here into the done section. So there's a lot of animation built into projects that happens between the project and the repository. There's one more thing that I want to do. I'm going to go back into my repository and notice that there is a tab here for projects but that project that we created isn't automatically associated with this repository. I have to do that manually because I created the repository separately. So I'm going to link this thing to the project and it's called GitHub Projects. So I'm going to select that one. And when I do that, this will refresh and this will just give me a slightly faster access to the project directly from the repo. So now everything is linked together and I can continue working on my project.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (7)
> **Tools:** github (7)
> **UI Navigation:** go to (2), click on (2)
> **Definitions:** is a  (2), refers to (1), is an  (1)
> **Prerequisites:** setup (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Assigning items to collaborators](https://www.linkedin.com/learning/practical-github-project-management-and-collaboration/assigning-items-to-collaborators?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-github-project-management-and-collaboration/assigning-items-to-collaborators?u=76281980&t=0)** - [Instructor] Let's try adding some items related to our setup. So I'm going to switch over to the table view. And I'm going to add another item right here. And this is going to be a node to update the README file since it's pretty bare right now. So I'll go ahead and assign that to myself. I could add another person in that. And let's go ahead and set the status to a Todo and we'll set this to be done within just one day. Add it to Sprint 1 as well since this is part of the current work that we're doing right now. And I'm going to go ahead and modify this to be an issue. So from here, I'll go ahead and hit Convert to issue. I'll use the project that we created, this project's playground. And now this is going to become an issue. Notice that it now gets the number two. So let's go ahead and go back into our repository. And if I go to Issues, you'll notice that there is one new open issue and also that there is a closed issue in here. So if I want to, I can click on this one closed and see the issue that we closed earlier. Now, I want to assign this to somebody else. Let's go ahead and click on this and we'll try over here to assign it to Jojo. Now, Jojo isn't part of this repository
>
> **[1:35](https://www.linkedin.com/learning/practical-github-project-management-and-collaboration/assigning-items-to-collaborators?u=76281980&t=95)** so although she's on the project I need to go ahead and add her to the repository as well. So I'm going to go into Settings and I need to go to Collaborators and I'll need to go ahead and Add people and I'll find Jojo here. And now I'll select this to invite her to collaborate on my project. So now she has been sent an invite through an email. Once she accepts that I'll be able to add her into this particular issue. So if I bring this back up you'll notice that she will not be available until she accepts the invitation. One of the things that's really important about working with [[GitHub]] is working with another person or a team. So I really encourage you to take some time to actually find somebody that you can invite and invite them to a project to collaborate with you because especially with projects the experience is going to be a lot different. So now time has passed, and I can see that if I click on this, Assignees, I actually see my friend Jojo, so I'm going to add her here to this project. And once I do that, I can do all kinds of things. I'm going to go ahead and let's add the milestone of setup because this is part of my setup. And once you add more than one milestone you can see that now because there are two milestones and one of them has been completed,
>
> **[3:08](https://www.linkedin.com/learning/practical-github-project-management-and-collaboration/assigning-items-to-collaborators?u=76281980&t=188)** this particular milestone now shows as 50% complete. So let's take a look at the project and see if everything has upgraded. So you can see that now the assignees for this update the README file is showing the two people and it does that automatically, which is cool. It's already set to Sprint 1. Let's go ahead and add this due date, though let's go ahead and modify that to next week. Or maybe we'll even make it like a little bit later. We'll give Jojo until Friday of next week to work with me on this. And in this case, since it's May 23rd to May 29th, I'll add that really to my second sprint in my project. So now I've got another to-do that shows up as an issue and is also being tracked in my projects. Let's go ahead and assign that in this table start date of say tomorrow, right? And now I can start having say a conversation with Jojo. I'll say, hey, Jojo, I created the repo, but I could really use help with crafting in a better README. Instead of just saying, hey, and then Jojo I'm going to hit the At sign.
>
> **[4:40](https://www.linkedin.com/learning/practical-github-project-management-and-collaboration/assigning-items-to-collaborators?u=76281980&t=280)** And when I do that, because Jojo has been added to this project, I can go ahead and select her after I hit the at sign with this dropdown menu. And that's really cool. One thing you can also do is refer also by hitting the pound sign to say another commit. So I can refer to, say notice that I created the repository and I can just choose that from this list and that will refer this to that other task as well. So let's see, notice that I created the repo at and then refer to this number one. So whenever you want to refer to an issue you use the pound sign. Whenever you want to refer to an individual you can use the at sign, which makes a lot of sense. You can also hit this at sign button here and find somebody from this dropdown. And as soon as you type in the pounce sign you'll get a list of all the issues that have numbers. So that is a fantastic way of sort of collaborating with somebody. I really encourage you to find a friend and try to sort of learn to work on a project by collaborating with them and assigning each other tasks. Really, GitHub used to be known as the social coding place and so it still is that it's a lot more nowadays but it really started as a place to collaborate with others on code. So I'm going to hit this Comment. I'm not going to close this
>
> **[6:12](https://www.linkedin.com/learning/practical-github-project-management-and-collaboration/assigning-items-to-collaborators?u=76281980&t=372)** because I know that this can be a conversation that I continue to have with Jojo.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (2)
> **UI Navigation:** click on (3), go to (2), dropdown (2)
> **CLI Commands:** find (4), node (1), make (1)
> **Env Vars:** readme (3)
> **Definitions:** is a  (2), known as (1)
> **Prerequisites:** setup (3)
> **Documentation:** the readme (2)
> **Tools:** github (2)

#### [Starting a project with an issue](https://www.linkedin.com/learning/practical-github-project-management-and-collaboration/starting-a-project-with-an-issue?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-github-project-management-and-collaboration/starting-a-project-with-an-issue?u=76281980&t=0)** - [Instructor] In addition to creating items in our projects, we can also create issues and then add them to projects at a later time. So sometimes when you're working on something, you aren't just really working within issues. You're kind of not necessarily concerned with the project, but at some point you do want to tie those things if you want to track them there. So I'm going to go just to the issues here and create a new issue. Now here I want to go ahead and add a license to this project. So I'm going to assign this as well. So I'll say add a license to project and I'm going to assign this once again to me and Jojo I'll go ahead and fill out some of the [[Representational State Transfer (REST)|rest]] of this stuff. So for projects, I will say this is [[GitHub]] projects, the one that I've been working on. The milestone will still be set up because it is something related to that as well. And that's all I can do for right now, right here. And once I add it to projects, this will now become an item that I can track as well over here in my regular projects section. So let's go ahead though and add a comment here. Again, it's going to take a little bit to get used to adding that at sign, but it does really help because what will happen also is that Jojo will get a notification depending on how she has her GitHub set up, she'll probably get an email.
>
> **[1:35](https://www.linkedin.com/learning/practical-github-project-management-and-collaboration/starting-a-project-with-an-issue?u=76281980&t=95)** It also appears when you just go to [github.com](https://github.com) on that main screen and the notifications. But mentioning somebody is a good way of making sure that they become aware through a notifications interface of what is happening with the project and perhaps what else they need to be working on. So let's see, in projects, okay, so I have the project already assigned here so that's great. And I'm going to go ahead and submit this new issue. One more thing you may want to do is notice that once I entered this issue, this is now issue number three, I can go ahead and add the status. So we'll put this as in progress since we're kind of working on it right now. And let's see if it's already showing up here, we may have to refresh the page. No, I didn't even have to do that. Look, it just showed up already in here and it's tagged it as in progress. All the other things have been added. Let's go ahead and add a due date. So sometimes you do have to go between the issues and the projects 'cause they have different fields. So in here I'm going to take care of this pretty quickly. So this will be part of sprint one and also be due just by tomorrow. We're going to work this pretty quick. I'm going to wait for Jojo to reply to this and I'll see what license she thinks might be good for our project. So let's check on this item right now, it looks like Jojo already replied and she thinks that we should use an MIT license, so that's great. I know how to do that.
>
> **[3:08](https://www.linkedin.com/learning/practical-github-project-management-and-collaboration/starting-a-project-with-an-issue?u=76281980&t=188)** I'll just go ahead and take care of this right now. So I'm going to go over to my repository and go to the code section here. And I'm going to add a file, create a new file here, and I'm going to type in license. Notice that when I do that, if you are doing certain types of things in GitHub, it's actually going to give you this little template help. And it has one for when you create licenses which is really cool because it helps you pick a license. Let's go ahead and hit okay, just ignore the fact that it adds that because it's actually sending you to the insights for the project. Sort of a weird place for this to be, but it is what I need. So I'm going to say MIT license which is the one that we picked. It gives you a lot of information about the different licenses and what they're good for. It also gives you a way to add your name as well as the year. So we'll go ahead and hit review and submit. Here's the license, all prepared for me, ready to be added as a new file. And I'll go ahead and commit these changes, create a license. I'll go ahead and commit this to the main branch and say commit changes. And now let's go back to the code and we should see this license here. Now that means our little task is now done. So I can go to projects and actually I have it on another tab, but that's another good way. You can go to GitHub projects here and go directly to this. And I'll say, "Thanks Jojo, you are the best.
>
> **[4:48](https://www.linkedin.com/learning/practical-github-project-management-and-collaboration/starting-a-project-with-an-issue?u=76281980&t=288)** I added the license file." Since this is kind of done, I'll go ahead and mark it as closed with this comment so I can add the comment, but I'm just going to go ahead and close this issue because it's done with the comment. And now let's go ahead and back out of here. You can see that the issue was automatically closed here and I'm going to hit the back button a few times to go back into my repo. So now that also has modified the issues. It's really nice. You can see that between what you can do in the projects and what's happening in the issues are all synced up automatically by GitHub which makes taking care of things really intuitive. Honestly, most of the software in the world is created with GitHub, so you can see that things that developers have had to use for a long time are really well thought out in GitHub projects.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (8), [[Representational State Transfer (REST)|Rest]] (1)
> **Tools:** github (8)
> **UI Navigation:** go to (4)
> **Env Vars:** mit (2)
> **Prerequisites:** set up (2)
> **URLs:** [github.com](https://github.com) (1)
> **Exercise Files:** template (1)
> **Definitions:** is a  (1)

#### [Project items with pull requests](https://www.linkedin.com/learning/practical-github-project-management-and-collaboration/project-items-with-pull-requests?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-github-project-management-and-collaboration/project-items-with-pull-requests?u=76281980&t=0)** - [Instructor] Another popular way to work with issues is to use what's called a pull request, which is a way to communicate that you want to make a change to the project but maybe you'd like somebody to take a look at it. So what I'll do here is I'm going to add a [[Git]] ignore file, I'll create a new file. And I'm going to say .gitignore. Now, it does have a lot of templates so you can see that it popped up here that there's a bunch of templates for gitignore, but this is a web project and shockingly enough, I don't really see one that makes sense for me here so I'll just leave it blank. They're pretty easy. I know that I need to add the node_modules folder but I'm not sure what else I should use, so this is a great sort of place to work with projects to perhaps ask a question. So I'll say Commit changes here and I'm going to write a note here. All right, so we'll do a period here and we're going to create a new branch for this. We'll call it add gitignore and I'm going to say propose changes. So this will be a pull request, and notice that I can add somebody as a reviewer of this pull request to work with me on it. And I can also add a project for this pull request kind of sub-project here. And let's go ahead,
>
> **[1:33](https://www.linkedin.com/learning/practical-github-project-management-and-collaboration/project-items-with-pull-requests?u=76281980&t=93)** since we are doing setup right now, this will be part of the setup milestone. And I'm going to go ahead and, let's see, just go ahead and create this pull request. And so, although I'm the owner for this thing, I am asking somebody else for help and I can continue to fill some things about the project out now. So I can say this is in progress, now that I have it in here, and I think that's all that I can do from this view. And assignees, of course I'll put myself and Jojo as the assignees. And so now I have to wait for Jojo to maybe make some comments, or take a look at this pull request before I continue. All right, so I'm refreshing the page and I noticed that Jojo had a chance to review what I wrote and she has suggested some changes that make sense, so I should probably add these three different definitions to the gitignore, so that's pretty cool. One of the things that I can do is jump directly into a Codespace to modify that file and go ahead and continue with my project. So, here I'm going to create a Codespace on add gitignore, it's going to launch a Codespace. So now this is an editor that is like Visual Studio Code so I can make more complicated changes in here. And I'm going to go over to the gitignore file. Let's go ahead and let it run gitfetch,
>
> **[3:11](https://www.linkedin.com/learning/practical-github-project-management-and-collaboration/project-items-with-pull-requests?u=76281980&t=191)** and I'm just going to piece those changes in here, and now my gitignore file is edited. Now, I could have done this in the regular Git Hub interface. This isn't a huge deal, but it's really nice to have [[Codespaces]] available to change anything in the project directly. Once I make these changes, I'll need to go ahead and commit them and push them back. So I can see right here that Source Control is telling me that I need to commit these changes. So I'll hit commit, and I'll go ahead and ask it to always commit changes for me. And I'll add a message here and I'll just say go ahead and modify the gitignore file. I'll hit the check mark here to approve that, and then I'll sync the changes so that it pushes everything onto the repo. Once I do that, I can go ahead, and close out of this Codespace, and now I'm back into this view. Now, you do want to make sure that you are in the pull requests, not in the issue section 'cause this pull request is not going to show up as an issue right now. So now that I've made those modifications then I'm going to go ahead and merge this pull request and confirm it. So now that has been successfully merged and closed, and now if I go back into code, you'll see now that if we open up the gitignore,
>
> **[4:46](https://www.linkedin.com/learning/practical-github-project-management-and-collaboration/project-items-with-pull-requests?u=76281980&t=286)** it has all the changes that I made. Let's check out what's going on with our project. So now you can see that because I closed the pull request, this has been marked as done. If I want to, I did it so fast that I didn't have a chance to add a due date. I'll make us look really good. I'll say that it was due tomorrow, it was part of Sprint 1, and it's already done. So we can click on that and take a look at the history. And we successfully completed something that appeared in projects, but instead of being based on the issues, it's actually based on a pull request, which is another way to work with projects.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Git]] (2), [[Codespaces]] (1)
> **CLI Commands:** make (7), git (2)
> **Definitions:** is a  (3), is an  (1)
> **Prerequisites:** setup (2)
> **Code Identifiers:** node_modules (1)
> **Tools:** visual studio (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)

#### [Using saved replies](https://www.linkedin.com/learning/practical-github-project-management-and-collaboration/using-saved-replies?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-github-project-management-and-collaboration/using-saved-replies?u=76281980&t=0)** - [Instructor] By the way, when someone responds to an issue you can add an automated reply that you've set up. Now, you can do that directly from this write menu down here by clicking on this little arrow and adding a previously saved reply. Now from here you can choose one of the items here and they even get a little command key combination right here or you can hit create a new saved reply and it will take you basically to your profile. So notice that I'm in saved replies, I'm in my profile. Another way to get here is by going to this icon and then you want to go to settings. And from settings on the left hand side you want to scroll down to saved replies. And so in here you can type in a new saved reply. You can see the previous ones that you've done and you can edit these if you want to. So I'm going to do a new one called Ship It. And I'll say something like, great job team, let's ship it. And I'll do a little icon by hitting the colon and I'm going to type in, ship it. And if I want to, I can hit this preview button. That looks pretty good. So I want to add this saved reply. And now it looks like I have two saved replies. And now whenever I am in any comment section like right here, I can see the saved replies right here.
>
> **[1:35](https://www.linkedin.com/learning/practical-github-project-management-and-collaboration/using-saved-replies?u=76281980&t=95)** So I could just click on this and I should be able to see the saved replies and those will be saved for any one of your repos that you have set up you'll be able to quickly get to these saved replies by looking for that icon right there.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (1), scroll down (1), click on (1)
> **Prerequisites:** set up (2)
> **Speakers:** - [instructor] (1)


### 2. Working with Projects

[↑ Back to Table of Contents](#table-of-contents)

#### [Using labels](https://www.linkedin.com/learning/practical-github-project-management-and-collaboration/using-labels?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-github-project-management-and-collaboration/using-labels?u=76281980&t=0)** - [Instructor] Labels are another way that items can be categorized. Now, they're useful when you want to create a unique grouping that is not addressed by other things like milestones or status. Now, to use labels, you really have to go into issues, so you should go to a repository, and right here, you can see the list of labels available to the repository. So if we click on them, here's where you can edit them. Now, you can get to them within projects. If you click on any one of these items, you'll see that there is a spot for labels, and we can add them right here. We just can't create new labels, but they're all right here. Now, if you do go to the repos and you click on labels, you can edit them, delete them, add new ones. This is a great interface for that. And you can see that there are different kinds of labels that are already provided by default for typical things that happen with repos. So you can see that there's a label for a bug, when something's not working, documentation, that's improvements or additions. Now, although we have a documentation milestone, this could be for, say, whenever you are coding something and you realize that it needs documentation, you could add a label to that specific piece of code and say that you would like this to be documented and then have a conversation about that. So in this case, it's a little bit different than having a documentation milestone. Duplicate is usually used for issues that have already been made before.
>
> **[1:33](https://www.linkedin.com/learning/practical-github-project-management-and-collaboration/using-labels?u=76281980&t=93)** A lot of times people will create issues to ask questions, and it could be that it's a question that has already been asked before. You can also do enhancements for new features. Now, this good first issue one is a special one, and it's pretty popular. In open source, this is often used to create issues that will allow people to know that this is a great way to get started collaborating on this project. Often, they are ways to encourage beginners to get some experience in open source. Most of the way that this is used is allowing people to work on documentations. So beginners can be really useful if they're helping document something when they don't have perhaps a lot of skills in some of the advanced topics of a specific repository. Now, there's other ones here. Help wanted, that's great for if you want to flag something that you need help with. Invalid if there's something wrong, question if you have a question about something, and won't fix, it's a good label for saying we don't really want to work on whatever this issue is. So this is also, by the way, where you can get to milestones, right? You can click on the milestones and you can see the milestones available. And here's where you create a new label if you want to. You can sort the labels in different ways. So this is, as I mentioned, a fantastic interface. If you have a ton of labels, you can even search through them right here. So let's go back into our project, and I'm going to go ahead and add a column here for labels.
>
> **[3:09](https://www.linkedin.com/learning/practical-github-project-management-and-collaboration/using-labels?u=76281980&t=189)** I'll make this one a little bit shorter. We don't have any titles that are that big. And I'm going to add a new one here for labels, and then I'm going to just assign some labels here that make sense to me. So create a repository. Let's see if there's anything that makes sense. It's not a bug or a documentation, it's really something that's done, and I don't think there's anything here that makes sense for that one. But for update the readme file, that is definitely something that I'm asking people to help with. It's technically sort of documentation,. so I'll add that one as well. And then add license to project. I don't know if that one needs anything. I don't need any help, it's already completed, so we'll leave that one alone, and then create gitignore. Maybe it's not something that needs documentation. Let's see. I don't really need any help, so none of these actually make sense for that. Let's go ahead and add another issue here, at least another, you know, item, and then we'll convert it to an issue, And this is going to be, "Remind me to copy the starter into the project." So, some code that I began applications with, and I'll go ahead and click right here to convert this to an issue on the project's playground. I'll go ahead and assign myself to it, and I will say this is going to be part of the backlog. So something that I'm going to take care of later. I'll put it on next week's sprint,
>
> **[4:42](https://www.linkedin.com/learning/practical-github-project-management-and-collaboration/using-labels?u=76281980&t=282)** so that'll be like sprint two. And the labels, I'm going to say this is an enhancement, 'cause it's something that I'm changing or adding to this project, and I'm not sure if I need help with that one, so that's probably good enough for now. So you can see that we have these labels here, and if you click on these triangles, you can actually sort these things. So you can sort labels. We'll discuss how you filter things and create different views, but this is kind of an interesting way of sorting things by labels, or you can also filter, of course, by values, but we'll get into that a little bit later. I'm going to also create another issue. This is going to be just a documentation discussion. "What about docs?" And I'll go ahead and assign both of us... And convert this to an issue. This is going to be in progress, so be the next thing that we work on. I'll go ahead and begin it today, and be part of sprint one still. And for this one, I'm going to say help wanted. This is going to be part of, of course, documentation. And I'm going to go into my repository and also create a documentation milestone here. So, a new milestone, documentation, due date. We'll put it maybe by the end of next week.
>
> **[6:20](https://www.linkedin.com/learning/practical-github-project-management-and-collaboration/using-labels?u=76281980&t=380)** Items that need documentation. All right, so that'll be a milestone as well that we can refer to, and whenever it's done, you know, all the items related to documentation will go here, and then when this is done, we can close that milestone. So, cool. All right, so we have this docs issue. I'm going to click on it and I'll start a conversation here. Conversations can be part of the description which has special superpowers, which we'll talk about a little bit later, and they can also just be comments. So here I'm going to start a question that just says, "I wonder what we should do for documentation on this project. Any thoughts?" And I'll refer to Jojo, and I'll say update comments. All right, let's go ahead and fill out. So for milestone, this will be part of my documentation milestone. The status is something that I'm working on. And let's see if there's anything else. I already have a due date in there, so I can say that I started this today. Also, if you are in projects and you want to get to an issue, by the way, you can say open in new tab and this will just take you directly to the issue. It's a quick way of linking to the, I always kind of have a tab open to the repo, as you've seen, but that's a quick way of going to the issues, because remember that there's some things
>
> **[7:55](https://www.linkedin.com/learning/practical-github-project-management-and-collaboration/using-labels?u=76281980&t=475)** that you can do in projects and some things, like adding new milestones and labels, that you'll have to do in issues. This is another way that you can get to the labels, and you can delete labels in here or click on edit labels to edit the labels that are available to you as well. So again, something you can do when you are in the repo, but not in the project. So, labels are a fantastic way, and if you've been to any open source project, you'll know that they have been heavily used. It's one of the oldest features of projects, but as projects evolve, it's still being used quite widely.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (7), go to (2)
> **Definitions:** is a  (4), is an  (1)
> **CLI Commands:** make (3)
> **Documentation:** the readme (1)
> **Speakers:** - [instructor] (1)

#### [Task lists](https://www.linkedin.com/learning/practical-github-project-management-and-collaboration/task-lists?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-github-project-management-and-collaboration/task-lists?u=76281980&t=0)** - [Instructor] Task lists allow you to create a checklist of items inside an issue description. [[GitHub]] has a special way of letting you interact with these tasks once you've included them. So I can see that Jojo has already added a comment down here, and she's got some good points here. So why don't we just get started with the sample docs folder, single markdown document and then we'll turn on GitHub Pages and point to it. We can maybe later on decide if we can do something more complex. I think that's a great idea. Now, whenever you make a comment in GitHub you can add a checklist. It's really, as I mentioned, part of markdown and this is the way that they work. You create a dash, then a space, and then two brackets and then you can add some content here. I'll just say item one right now. If I hit the preview button, you'll see that it renders as a checklist, and if I were to commit it then it would allow me to check these things on and off. So let's go ahead and run through the recommendations from Jojo here. So what you're saying is that we should, and I'll go through them right now, I'll say create a docs folder. And let's see, I'm going to put this in tick marks. So when it previews it shows it kind of like this as a label. That's just a markdown format. And you can see that there's actually a lot of help that GitHub gives you when you're creating these.
>
> **[1:32](https://www.linkedin.com/learning/practical-github-project-management-and-collaboration/task-lists?u=76281980&t=92)** When I just hit return, it automatically placed that dash and the brackets for the next line. So next up, create a new index.md document. And again, I'll put that in tick marks. Let's see. Sometimes the little pallet here will help me. I don't think that it has one just for inline markdown. I think if I click this, it's gone, oh, it does actually. So that did help me. I was able to just click on this. Notice that there is also a way to create a task list. So if for some reason I was starting a new task list here then I could just hit this and it actually gives you the characters so that's super nice. But let's finish this off. So let's see, index.md document. What else do we want to do? Turn on GitHub Pages, decide if we want to go with something more complex. So I think that's a pretty good summary of what Jojo commented on. So we will hit comment here and now it becomes a little checklist. Now notice that now you can actually reorganize these however you want by dragging them. So maybe you can rearrange some of these if you want to. You can also check them off. So if I click on this you'll see that this one will get checked off. And when you do that in the description section it actually gets another superpower.
>
> **[3:05](https://www.linkedin.com/learning/practical-github-project-management-and-collaboration/task-lists?u=76281980&t=185)** Although any sort of comment can have check boxes and this is pretty cool that now you can reorder them. When you add them to the top, you'll get some special superpower. So before I do that let's go ahead and just copy this stuff. So I'll go back to edit and let's go ahead and make this a little bigger. By the way, if you click on this it'll take you to the markdown reference. So you could see all of the different markdown styles commands here that you can add. For example, tables and all kinds of really cool things like this is actually an expanded version of markdown. So it has a few additional goodies and it does a lot of really cool things. So I think when you just, for example, add a URL it'll automatically make it a link, which is pretty cool. So if you don't know markdown, check out this page. It's straight available from every comment that you do. And there's a bunch of helpers here so you can use this one when you want to refer to someone you can reference an issue. So this will basically add a pound sign, I believe. Yeah, and then it'll show you the list of the current issues that are available to you. And there's some other stuff in here. So I'm going to copy all this stuff and I'll leave this as a comment. And I'm going to go and edit the description. The description will be here at the top and it'll be before all
>
> **[4:38](https://www.linkedin.com/learning/practical-github-project-management-and-collaboration/task-lists?u=76281980&t=278)** of the actionable items that we finished right there. So let's go ahead and edit this. And I'll just modify this to say let's work on the documentation with, and I'll mention Jojo suggestions here. And now I'll paste my task list here and I'll say update comment. Now when I do that, I still have the ability here to reorganize these if I want to, notice that I have a little dot right here which means that I can take each one of these and actually convert them to an issue. Also note that up here at the very top, underneath the title, I now have a list of how many tasks are in this issue. And if I click one of these off, you'll see that it says that I've completed one of four tasks. So that is really, really helpful. I love to use this whenever I am sort of brainstorming about things that we should do. But I don't really want to commit to creating these issues because I'm not sure this is the way. So here I can just create a task list. So sometimes some small thing that you're doing doesn't need a bunch of issues. This is one that I think will need a bunch of issues. So we're going to try out the feature that allows you to create them. So let's see, we'll go ahead and click on this right here, hit convert to issue. This will create an issue and notice that it's actually modified this so that it creates a link to the issue. And it added the issue number right here. So I think I'm going to convert these things to issues.
>
> **[6:14](https://www.linkedin.com/learning/practical-github-project-management-and-collaboration/task-lists?u=76281980&t=374)** And I will kind of leave this one not as an issue quite yet because obviously I'll need to decide what else we need to do here. Probably a further discussion that we need to have. So now I'll just leave a note to Jojo. Thanks, Jojo. Created the issues for the first three suggestions, you think of anything else let me know. Cool, so we'll just say comment. We're not going to close this 'cause this will be sort of an issue that hasn't been resolved quite yet. And now if we want to, we can go to this create a docs folder and maybe start doing the traditional assignment here to fill these out. So definitely make sure that we're on the right project. This is, let's see, what labels do we need? This is an enhancement. I don't really need any help. So we'll leave this one here. And the milestone will say this is part of the documentation milestone and I don't really need anything else. I don't think right now, you could probably go into the projects and now you should see that we have a number of different sub-tasks. You won't notice the additional issues here until you actually finish adding them into the project. So remember that here until this shows up under the proper project here.
>
> **[7:48](https://www.linkedin.com/learning/practical-github-project-management-and-collaboration/task-lists?u=76281980&t=468)** And let's go ahead and give this a to-do, definitely something we want to do. So make sure that you finish adding all that. So I really love this ability to create tasks and to track them and be able to know how many of the items that I have created. So this is actually just the issue itself but I really love that ability to create a checklist which has special superpowers when you add them to the description of an issue. And here you could create additional maybe sub-tasks although this is a pretty easy task. So this is now issue number seven, so we can take care of additional tasks with checklists slash task lists. I think they're amazing and it's something that you will love using in your projects.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (5)
> **CLI Commands:** make (5)
> **Tools:** github (5)
> **UI Navigation:** click on (4)
> **Definitions:** means that (1), is an  (1), is a  (1)
> **Analogies:** for example (2), kind of like (1)
> **File Paths:** index.md (2)
> **Documentation:** the documentation (2)

#### [Slash commands and emojis](https://www.linkedin.com/learning/practical-github-project-management-and-collaboration/slash-commands-and-emojis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-github-project-management-and-collaboration/slash-commands-and-emojis?u=76281980&t=0)** - [Instructor] [[Software Development]] is hard enough as it is. So [[GitHub]] has some additional features that can help make your issues a bit easier and more fun to work with. Now let's go ahead and edit this little comment that I made earlier, and I'll show you some of the features right here. Now the first one's called slash command. So if you've been wondering what this little thing does right here is creates or lets you access slash command. You can also just type in a slash, and it does the same thing. And you could see that it gives you a few options here for code blocks, details, save replies, or tables. And these are just shortcuts for creating things. So I'm going to choose code block. You can see that it gives you a list of syntaxes you can use. You can just go down through this, and I'm going to choose [[JavaScript]], but notice that, what it's doing is just writing the markdown for a code block for you. Maybe here we can do document right, and then hello world just to show you. If we hit the preview button, you'd be able to see that it syntax highlights or colorize the code. It also gives you a super nice way of copying the code right next to the item right here. So, that is really great. Let's go ahead and go back to right, and show you some of the other ones. So if we hit this again, and we say the tails, notice that it's giving you a way of creating a box of the tails.
>
> **[1:31](https://www.linkedin.com/learning/practical-github-project-management-and-collaboration/slash-commands-and-emojis?u=76281980&t=91)** And I'll just put Lorem Ipsum here for right now, and we'll hit the preview button, and notice that it gives you a way of taking a bunch of stuff and collapsing it down, so that you can create as many of those as you want and have a list of things that expand and collapse. Again, this is actually sort of regular [[HTML]], so this is just a paragraph tag. Markdown does allow you to do some HTML in it. If you want to check what's allowed, just click right here on this markdown as we saw earlier. That's another useful sort of technique that you can use in your comments. Let's do another one. There's also a way of saving replies. So, if you can create these different replies that will automatically get pasted into your document, right? So, they're sort of like shortcuts to things that you want to say, and you can create those there in your settings. So let's see, in addition to that, so if I go save replies, if you don't have one, I think it gives you an option of going to your settings to find where they are. If not, let's just go ahead, and go to settings, and it may be under your own personal settings. And you can see right here under save replies, you can see the one that I created earlier. So, you can add little shortcuts like URLs to things or maybe your social media,
>
> **[3:03](https://www.linkedin.com/learning/practical-github-project-management-and-collaboration/slash-commands-and-emojis?u=76281980&t=183)** and just very quickly add that to your project as you're typing that in. So, I'm going to hit the back button a few times just to get back here again. So, that is pretty cool. And again, you just type in this slash, and you'll get the list right here. There's another one called table that allows you to create a table really quickly. Again, this is just markdowns. So, let's choose three columns and five rows, and it's just going to create a markdown place where you can type in your table. So, I'm just going to hit update comment here, and you can see that it does create this cell. That extra message that was showing up there was a bug, but tables are really difficult to do in markdown. So, this is kind of a great way of getting started. And if your window right here is a little bit small, you can click on this corner thing right here, and make this window a little bit bigger. We're going to delete this. The last thing that you can use is emojis. Those are extremely common in software development projects. I think it's 'cause developers are sort of bored. It's really easy to add them. And what you do is you just add a colon, and then type in say maybe a heart. So maybe I want to do a heart here for JoJo, because that was some super fantastic suggestions. So I'll do a heart, and then you can choose it from the list, and then it will become a heart once you hit the update button. You can actually add emojis all over the place.
>
> **[4:36](https://www.linkedin.com/learning/practical-github-project-management-and-collaboration/slash-commands-and-emojis?u=76281980&t=276)** You'll see them everywhere. You can add them in the titles of your issues. You can add them honestly just about anywhere you type things in. And it's amazingly common to see them even on very professional companies. So, don't worry that you're being too silly. Just have some fun with software development, and learn to use some of these additional shortcuts and enhancements to make your projects a little more fun.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Software Development]] (3), [[HTML]] (2), [[GitHub]] (1), [[JavaScript]] (1)
> **CLI Commands:** make (3), find (1)
> **Env Vars:** html (2)
> **Cross-References:** go back to (1), as we saw (1)
> **UI Navigation:** go to (1), click on (1)
> **Tools:** github (1)
> **Definitions:** is a  (1)
> **Prerequisites:** getting started (1)

#### [Views and filters](https://www.linkedin.com/learning/practical-github-project-management-and-collaboration/views-and-filters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-github-project-management-and-collaboration/views-and-filters?u=76281980&t=0)** - [Instructor] It's really common to customize the views and show only the information that you need for a project. It's also common to create multiple views and I already showed you how to create the different kinds of views, but you often create different versions of the views for different needs regarding the project. So as we make changes, like when we added these labels, you can see that you get this blue dot next to this table view, and it's just telling you that you've made some modifications. From here, you can either just save the modifications if that's how you want this view to look, or also save the changes and start a new view. So I'm going to go ahead and clear things out. So I'm going to click on this and just turn off the labels. So there's going to be no sorting right now, just by clicking on one of these. And I'm going to also make sure that I do have the fields that I want. I think everything that I need is already right here. Maybe I want to add the "start" field and move that next to the "do" field, so just by clicking and dragging it, you can add a field and position it. Just like with [[Microsoft Excel|Excel]], you can move these things and make them different sizes. So I'm going to make some of these a little bit smaller, maybe a little bit more room for the label since that usually gets a little bit messy. And then maybe the status can be a little bit smaller, since none of it is a lot bigger than that.
>
> **[1:36](https://www.linkedin.com/learning/practical-github-project-management-and-collaboration/views-and-filters?u=76281980&t=96)** And it looks like I could probably use some additional start times. You might notice that I added some additional issues, and that's why as your issue list gets longer and longer, you may need to organize these different views. So it looks like I need to modify this one, and put it on the proper sprint, and maybe work with some of these dates. Now, once you've finished sort of customizing and understanding how your views are going to look, I think this is a really good beginning view that doesn't have anything sorted, or anything filtered. So I'm going to save that as this view, but I'm going to start a new view sorted by the assignees. So right next to each one of these table items, you can see that you can choose to sort things in different ways. So we can sort by assignees, maybe you can sort by status, and notice that now it's changed to "status." Whatever way that you want to treat these things is really good for sorting, maybe due date might be a good sort. So let's see, we will say, "due," this is maybe a good sort. And now if I have that, then all I need to do to create a new view is go ahead and save these changes to new views. So I'll choose that. I can rename these if I want to, just by clicking right here. And I can drag them into different positions by clicking and dragging on them. And I'm going to call this one "by due date." Now, some of these items are done
>
> **[3:09](https://www.linkedin.com/learning/practical-github-project-management-and-collaboration/views-and-filters?u=76281980&t=189)** and this is where filtering comes in pretty handy. So if I want to filter something, I can type in how I want to filter things, usually by typing in the name of what I want to modify. So I can say "assignee," like this, and then choose a specific person. So I'm going to choose Jojo, and now it's going to show me only the things that happened assigned to Jojo. There's a number of other ones that I can use, so for example, I would like to only look at items that are not completed, or where the status is not "done." So I could say here, "status," right? You can see that as you type 'em in it gives you suggestions here. So I'm going to choose status and it's actually giving you some drop-downs. And I'm going to select "done," just because what I want is the things that are not done, but it's easier to just find a status that you want to control and then you can add a minus sign, and now this is going to show me the items that are not done. You could also rewrite this by saying not "done" here, but "to do," and then you can add a comma and add something else in here. So you can either do negative or positive things. Notice that it's adding quotes whenever it typed in "in progress," because that had a space in there in between. So that is good, but I think I do want to just say "status," and then "not done,"
>
> **[4:44](https://www.linkedin.com/learning/practical-github-project-management-and-collaboration/views-and-filters?u=76281980&t=284)** because I just want to see the items that belong, in this case to Jojo, sort it by due date and also that are not done. And this is a great view that I can save for later. So I'm going to call this one "Jojo's tasks" and then hit the save button. And now that's a fantastic view for this particular tab right here. You can do the same sort of filtering in any one of these different views. And if you want to find out more about the specific filters, you can go to this URL right here and you can take a look at all of the filtering options. So there's actually a ton. You can do assignee, you can filter by label, by different fields, the reviewers if there's any, milestones; and then you can also combine filters in a lot of different ways. You saw me use the commas and then you can see that you can negate a specific filter like this, for example. You can also negate a couple of fields and there's all kinds of additional ways here that you can filter and create multiple views for your projects. That's a fantastic way of looking at things, and you'll definitely be doing that quite a bit. So make sure you try that out yourself on your own version of this project.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (1)
> **CLI Commands:** make (5), find (2)
> **Definitions:** is a  (3)
> **Analogies:** for example (2), just like (1)
> **UI Navigation:** click on (1), go to (1)
> **Env Vars:** url (1)
> **Speakers:** - [instructor] (1)

#### [Insights](https://www.linkedin.com/learning/practical-github-project-management-and-collaboration/insights?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-github-project-management-and-collaboration/insights?u=76281980&t=0)** - [Presenter] Projects has a real interesting visualization feature right here on this tab to the top right. And by default, it's just going to show you the status of the items in your project, but it's very customizable. You can create additional charts or you can customize the one that is showing in much the same way that you do projects and tabs. You can filter things, and then you can also configure this particular chart through this button right here. You can choose the type of chart, so you could do a stacked area or just a bar chart, and look at the information in this way. You can also group things right here. So you can say group things by assignee, and then depending on what you have chosen, you can also modify the other axis. So this is really powerful. You can try some of these out yourself and find which one of these are useful, and then you can either save these things to a new chart or just modify the one that you have. You can rename things right here. So this lets me look at items by assignee, and you can always keep referring back to this, maybe take screenshots and include them in your projects. If you want to let people have that information, or if they're part of your team, just give them the link to these specific insights. Notice that everything gets a URL, which is the same thing for your different views. Everything gets a URL that you can send people to if you want to.
>
> **[1:34](https://www.linkedin.com/learning/practical-github-project-management-and-collaboration/insights?u=76281980&t=94)** You can also, of course, duplicate or delete the chart, or configure right from here if you want to get into one of these custom charts. The default chart is pretty good, but there's a lot of options that allows you to control how it looks and there's some additional features, you get this thing called historical charts, but that's only available to [[GitHub]] team and GitHub Enterprise Cloud for organizations. I suspect that this is going to be an area of growth at some point in the future. They can already do quite a few things, but I feel like they could probably look a lot better, and I would love to see an export feature, so who knows, maybe we'll see that in the future.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (2)
> **Env Vars:** url (2)
> **Tools:** github (2)
> **Prerequisites:** configure (2)
> **CLI Commands:** find (1)
> **Speakers:** - [presenter] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)


## Instructor

- [[Ray Villalobos]]

## Skills Covered

- Project Management
- GitHub

## Path Context

### In [[Career Essentials in GitHub Professional Certificate]]
← [[Resume]] | **2 of 4** | [[Practical GitHub Copilot]] →

## Part of

- [[Career Essentials in GitHub Professional Certificate]]

## Appears In

- [[Career Essentials in GitHub Professional Certificate]]

## Related Courses

_Courses sharing skills:_

- [[Project Management Simplified]] — Project Management
- [[Practical GitHub Code Search]] — GitHub
- [[Creating a Book Search Engine from Scratch Using Java and GitHub Copilot]] — GitHub
- [[Benefits of GitHub Community]] — GitHub
- [[GitHub Foundations- Privacy, Security, and Administration]] — GitHub

---

[↑ Back to top](#)