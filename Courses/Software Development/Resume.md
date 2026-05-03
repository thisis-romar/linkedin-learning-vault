---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: practical-github-actions
url: "https://www.linkedin.com/learning/practical-github-actions"
level: Advanced
updated: 10/29/2025
learners: 19165
skills:
  - GitHub
exercise_files: true
github: "https://github.com/LinkedInLearning/github-practical-actions-4412872"
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQHTXEX1TA50Kw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1685056279542?e=2147483647&amp;v=beta&amp;t=rFP5VzvoJw1X6KjvDo1yQmNSPJ6QpxGsJiz35rh2WKQ"
linkedin_topic: Software Development
learning_paths:
  - '[[Prepare for the GitHub Foundations Certification]]'
  - '[[Career Essentials in GitHub Professional Certificate]]'
next_courses:
  - '[[Learning Git and GitHub]]'
  - '[[Practical GitHub Project Management and Collaboration]]'
path_nav: '[{"path":"Prepare for the GitHub Foundations Certification","position":1,"total":7,"prev":null,"next":"Learning Git and GitHub"},{"path":"Career Essentials in GitHub Professional Certificate","position":1,"total":4,"prev":null,"next":"Practical GitHub Project Management and Collaboration"}]'
path_count: 2
tags:
  - course
  - topic/artificial-intelligence
  - topic/software-development
  - skill/github
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/Resume.md)

![Resume](https://media.licdn.com/dms/image/v2/D560DAQHTXEX1TA50Kw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1685056279542?e=2147483647&amp;v=beta&amp;t=rFP5VzvoJw1X6KjvDo1yQmNSPJ6QpxGsJiz35rh2WKQ)

# Resume

> For developer professionals, solving problems is a vital part of the job—particularly solving problems that keep coming up. GitHub Actions will let you automate your repetitive problems away, and in this course—created in partnership with GitHub—Ray Villalobos shows you how to set them up to tackle real-world projects. Ray starts with the basics of Actions, going over what you can do with them and

> [LinkedIn Learning](https://www.linkedin.com/learning/practical-github-actions) | Advanced | 19K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Creating a marketplace GitHub action](#creating-a-marketplace-github-action)
  - [Using the slides](#using-the-slides)
- [**1. Action Basics**](#1-action-basics) (4 videos)
  - [How actions work](#how-actions-work)
  - [Creating a repo and GitHub Pages](#creating-a-repo-and-github-pages)
  - [Python to process YAML with Codespaces](#python-to-process-yaml-with-codespaces)
  - [Finishing up the RSS feed](#finishing-up-the-rss-feed)
- [**2. Publishing a Marketplace Action**](#2-publishing-a-marketplace-action) (6 videos)
  - [Creating a workflow with existing actions](#creating-a-workflow-with-existing-actions)
  - [Creating a generator repo Dockerfile](#creating-a-generator-repo-dockerfile)
  - [Creating an entry point](#creating-an-entry-point)
  - [Crafting an action.yml file](#crafting-an-actionyml-file)
  - [Testing your actions](#testing-your-actions)
  - [Creating a release](#creating-a-release)
- [**Conclusion**](#conclusion) (0 videos)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Creating a marketplace GitHub action](https://www.linkedin.com/learning/practical-github-actions/creating-a-marketplace-github-action-29981144?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-github-actions/creating-a-marketplace-github-action-29981144?u=76281980&t=0)** - Employers want to see more than your code. They want to know how you solve problems. That's what this course is all about. Together, we're going to build a [[GitHub]] Action and prepare it for the marketplace, something that can become a highlight in your developer portfolio. Along the way, you'll see how different tools like [[Python (Programming Language)|Python]], Docker, YAML, and XML come together. But more importantly, you'll see the process of designing a solution from start to finish. The example we'll be generating is a podcast feed generator that runs on GitHub Pages. The real takeaway will be showing you how you can adapt this approach to your own ideas. By creating and publishing something that others can use, you'll not only practice new skill, but also give employers a concrete example of your abilities. The combination of technical knowhow and problem solving is exactly what makes portfolios stand out. Let's do this.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (2), [[Python (Programming Language)|Python]] (1)
> **CLI Commands:** python (1), docker (1)
> **Env Vars:** yaml (1), xml (1)
> **Tools:** github (2)
> **Definitions:** is a  (1)
> **Speakers:** - employers (1)

#### [Using the slides](https://www.linkedin.com/learning/practical-github-actions/using-the-slides?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-github-actions/using-the-slides?u=76281980&t=0)** - [Instructor] You can find all the slides for this course at [rebo.org/slides_practicalactions](https://rebo.org/slides_practicalactions), which is the page you're looking at. The course is a bit different in that it has three sample or repositories associated with it. You can see them right on this page, and you can click to them by clicking on these links. In the course, I refer to these repositories, and create two of them for different needs, but you can also get to them from this slide. At the bottom of the screen, there is a toolbar, which you can show or hide, by hitting the T key on your keyboard. There are some links to my courses, my blog, and some other contact info. You can hit the M key on your keyboard, and see the menu, and pick one of the videos from the course. Then, you can hit the arrow keys to navigate through the different slides.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2)
> **CLI Commands:** find (1)
> **Code Identifiers:** slides_practicalactions (1)
> **URLs:** [rebo.org](https://rebo.org) (1)
> **Speakers:** - [instructor] (1)


### 1. Action Basics

[↑ Back to Table of Contents](#table-of-contents)

#### [How actions work](https://www.linkedin.com/learning/practical-github-actions/how-actions-work?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-github-actions/how-actions-work?u=76281980&t=0)** - [Instructor] Before we get too far, let's talk about what [[GitHub]] Actions are, how they work, and how this course is put together. GitHub Actions make it easier to automate your projects. You can automate tasks for your repositories, either on a timer or when an event happens, like for example, when somebody pushes a branch or opens a poll request. You can create your own actions or use actions created by the community, which you can find in the GitHub marketplace. In this course, I'm going to show you how to build actions locally and then publish them to the GitHub marketplace. You can also find documentation for GitHub Actions at this URL. Now, this isn't a beginner course, and as a matter of fact, it's categorized as an advanced course, so I'm assuming that you know how to work with [[Git]] and GitHub. If you're new to GitHub, you may want to check out some of the other courses on the site. I'm also assuming that you're familiar with the command line and that you have experience programming with something like [[Python (Programming Language)|Python]]. This is very much a hands-on course. I'm going to be showing you how to do things, but you should definitely try to follow along and I'm hoping that you'll think of how you can build your own custom actions and add them to the marketplace. Now, probably the best piece of advice I can give you when you're trying to learn something is to solve a problem that you are having. So in this course, I'm going to be building something I needed for my own work. I recently launched a podcast and I wanted to create a feed that I could use. Now, a podcast feed is a way for podcast apps
>
> **[1:34](https://www.linkedin.com/learning/practical-github-actions/how-actions-work?u=76281980&t=94)** to find out information about a show and episodes. From a technical standpoint, it's an XML file in a specific format called RSS. XML is a markup language like [[HTML]], but it's used for different kinds of information. RSS is a flavor of XML specifically for syndicating content. It's usually used for news and podcast content. In this course, I'm going to use the YAML format to write the information about my podcast and use a GitHub action to generate the feed. That's because XML and RSS are difficult to create and YAML is a super easy format to write. There are plenty of services that you can use to easily host your podcast feed, but GitHub is a great and free solution for this problem. We can use something called GitHub Pages, which allows you to host static websites for free. You can use it to host, for example, this podcast feed. Now, to parse the YAML into XML, we're going to be using Python. Python is a great language for processing data. It's super fast, easy to use, and has a ton of libraries that can help you with your NaTE. Now, I'm assuming that you have Python installed on your machine, if you need help with that, make sure that you check out our Python courses in this library. Now, because we're going to be publishing this in the marketplace, we're going to need to write out a Docker file, GitHub Actions can use this to build a container that will run our action in the cloud. Think of a container as a virtual machine that runs on the cloud.
>
> **[3:08](https://www.linkedin.com/learning/practical-github-actions/how-actions-work?u=76281980&t=188)** We're also going to need to run some Bash scripts to run our Python file, and also to make sure that our changes are pushed back to GitHub. Normally when I'm building projects, there's a repository for each course and you can use that to follow along with the class. I have created a repository at this URL right here, but you'll be building this project on your own repository. This [[LinkedIn]] repo will have some sample content, as well as the code for the scripts, but you're not going to be able to use it to follow along. You're going to be building your own actions, workflows, Docker files, and customizing things that would break the LinkedIn repository if you used it. Alright, that's enough talk. Let's build this.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (12), [[Python (Programming Language)|Python]] (6), [[LinkedIn]] (2), [[Git]] (1), [[HTML]] (1)
> **CLI Commands:** python (6), make (3), find (3), docker (2), git (1)
> **Env Vars:** xml (5), rss (3), yaml (3), url (2), html (1)
> **Tools:** github (12), command line (1), bash (1)
> **Definitions:** is a  (6)
> **Analogies:** for example (2)
> **Speakers:** - [instructor] (1)

#### [Creating a repo and GitHub Pages](https://www.linkedin.com/learning/practical-github-actions/creating-a-repo-and-github-pages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-github-actions/creating-a-repo-and-github-pages?u=76281980&t=0)** - [Instructor] All right, first things first, let's set up a repository and then take advantage of [[GitHub]] pages to host our podcast feed. So I'm creating a new repository here in my own personal account. You can go to github.new or [github.com/new](https://github.com/new) like this and you can quickly create a repository. I'm going to call this podcast-test. Now I don't need to fill anything else out so I'm going to create a repository. And from here, I'm also going to need to go into the repository that I've created for you at this URL and also grab all the files from here. Now, I'm not going to need all of these files I'm just going to need certain files that are in a different branch. So this 1_02 branch has the beginning version of the files that you're going to need. You're going to need this folder called audio, this folder called images, as well as this README-feed file and this feed.yaml. The easiest way to get all this is just to download a zip file. So I'm going to go here into this code menu and make sure that I am on local. I'm going to scroll down here and click on Download zip. I'm going to put this on the desktop and it's going to download that. And now I'm going to decompress that by double clicking on it. And I'll open up this folder
>
> **[1:31](https://www.linkedin.com/learning/practical-github-actions/creating-a-repo-and-github-pages?u=76281980&t=91)** and you can see all the files are right there. So I need the images folder, the audio folder, this feed.yaml, as well as this README and nothing else from this folder. I'm going to go back to the new project that I created and I'll go ahead and upload an existing file. And now I'm going to grab all these files and just drag them into this repository. This will take a while but it will upload all these documents into that repo. Once that's done, you can hit this Commit changes and you can call this First Commit and we'll hit Commit changes. Now I'm going to rename this README-feed file and that's because the regular [[LinkedIn]] project has this standard README file that we create for all of our courses, and we want to make sure that this one is the README file for this project. So I'm going to click right here and to rename a file we'll just click on this, edit this file button and we're going to change the name here. Just delete this and just call it ReadME.md. We'll commit these changes. It's pretty amazing what you can do in the regular GitHub website without having to do a lot of cloning. So there it is now the README document is this README file that we imported from our LinkedIn repository.
>
> **[3:09](https://www.linkedin.com/learning/practical-github-actions/creating-a-repo-and-github-pages?u=76281980&t=189)** Now we're ready to turn on GitHub pages. So I'm going to click on settings and I'm going to look over here for pages. So GitHub pages is what is going to allow you to host your pages and let GitHub handle everything for you. So here you have a few options you can deploy from a branch or you can also use GitHub actions. Now we're now going to use GitHub actions. We'll just use the regular deploy from a branch. And from here you want to pick the main branch and make sure that you pick the root folder. Now, you can put things in the Docs folder but the root folder will work just fine. So we'll hit Save. And this is going to take a while to fully deploy. You may have to reload this a few times. Once you do that though, it's going to give you a URL where you can find your page. And what it's going to show is the README document which is perfectly fine because our README document has all the information about the podcast. You should also be able to get to any of the other files, like for example, any of the audio files or the images file that has this artwork, that JPG in there, once that shows up. So again, every once in a while go back to settings and go back to pages, take a peek and see if the URL is here and it should come up after a few minutes. All right, so I reloaded a few times and now it's done with the GitHub pages. You can see that it gives you a URL where you can see this page and a button to visit this website plus some other options here.
>
> **[4:42](https://www.linkedin.com/learning/practical-github-actions/creating-a-repo-and-github-pages?u=76281980&t=282)** So you can unpublish this if you want so you can unpublish the site. But let's go ahead and click on this visit site to see where we go. And you can see that it's just a regular [[HTML]] page. It's displaying the README file that I uploaded and you can change the name in here if you want to, but that's actually great. And if we want to, we can go to any of the other files. So as I mentioned, if you go to code and you go to images you can see that we have this artwork.jpeg in here. So we'll do images, artwork.jpeg, and that shows you just the image. And you should be able to also get to any of the MP3 files that are in this audio folder or this feed.yaml. So anything we put in here is going to be published to an actual page. And believe it or not, you actually did that through a GitHub action. I know that we didn't chose GitHub actions here under the pages section of the settings but if we go to the actions tab right here, you'll notice that it actually ran a workflow that created this page and you could have hit this tab as you were waiting for the page to load and seen that page being built. Whenever you see this little green check mark here it means that the page has been completed by GitHub and it's ready to view.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (13), [[LinkedIn]] (2), [[HTML]] (1)
> **Env Vars:** readme (10), url (4), jpg (1), html (1), mp3 (1)
> **Tools:** github (13)
> **UI Navigation:** go to (5), click on (4), scroll down (1)
> **Documentation:** the readme (4), the docs (1)
> **File Paths:** feed.yaml (3), readme.md (1)
> **CLI Commands:** make (3), find (1)
> **Cross-References:** go back to (3)

#### [Python to process YAML with Codespaces](https://www.linkedin.com/learning/practical-github-actions/python-to-process-yaml-with-codespaces?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-github-actions/python-to-process-yaml-with-codespaces?u=76281980&t=0)** - [Teacher] So it's time to start processing our YAML file. Now, to do that, I could clone this repo locally and work on it on my machine, but that would mean I have to make sure that I have [[Python (Programming Language)|Python]] installed and that I also installed something called pip to handle modules plus the module that I'm going to be using called the PyYAML module. But thankfully, [[GitHub]] has this great feature called [[Codespaces]] that allows you to create a virtual environment with a fantastic editor. So we're going to use that. I'm going to go here to the Code button, and under Codespaces, I'll choose Create codespace on main. And this will procure an environment that is already going to have Python. It's already going to have pip installed, as well as the PyYAML module. So this is fantastic. It's going to save us a ton of time. And you don't have to worry about installing things on your local machine. All right, so it looks like my environment is finished loading, so my codespace is ready to go. What I'm going to do is create a file here called feed.py. This will be a Python document. And I'm going to go ahead and hide the terminal if it's showing, for right now. And what I can do here is go ahead and start by importing the package that I'm going to use called yaml, which is already installed with the codespace. And then I'm going to import another module called the ElementTree module. Import xml.etree. ElementTree here.
>
> **[1:38](https://www.linkedin.com/learning/practical-github-actions/python-to-process-yaml-with-codespaces?u=76281980&t=98)** And I'm going to give it a name of xml_tree, right? So that's going to let me use XML and also understand YAML. So I'm going to go ahead and open my feed.yaml document and I'll go ahead and read it and I'm going to call it file, all right? So here I'm going to load that document into a variable called yaml_data and I'll use the yaml command from the module and we'll make sure we'll use safe_load and we'll load up the file. safe_load is just a function that verifies that the file is going to be loading up correctly. All right, now I need to create the RSS element. So if you remember from the feed sample, if you scroll all the way up, you have a few tags that you need. First is this XML tag. We're going to be doing that later on. It's going to write that out automatically for us. Notice that this is a single tag and it has this weird question marks. It's the only one like that. But then we have this rss element. We begin it right here, and we close it at the end. And then there is a bunch of sub-elements. And so for right now, we're going to make the simplest element we can with just sort of a single item in it, just so that you get used to how this sort of module for reading and understanding XML and YAML work.
>
> **[3:14](https://www.linkedin.com/learning/practical-github-actions/python-to-process-yaml-with-codespaces?u=76281980&t=194)** All right, so rss_element equals xml_tree. So we're creating an XML tree. And in the element, we're going to create an rss tag. Now, the way that you write these is by normally either writing the data inside a tag like this. So the data here is Hiking Treks. This is actually a simple one. And then the more complex ones have attributes like this. They may notice that sometimes you'll see the [[Microsoft Word|word]] itunes mentioned a lot. iTunes is an Apple music player that pioneered podcasts, and that's why a lot of these tags will also have this itunes prefix. So sometimes it'll say things like description, but other times it'll say like itunes:author. And that's because this is an RSS feed, which is normally used for news, but the version or the subversion of this RSS feed is a podcast, which has these additional tags and mostly itunes tags. So it looks a little funky, but it works great. So what we're going to need is basically all of the attributes and values that are in this sample RSS. I don't want to have to type all that stuff in. So we'll go back here and we'll go ahead and paste it down here. And basically we need the attributes and the values and we're going to convert these equal signs to colons.
>
> **[4:50](https://www.linkedin.com/learning/practical-github-actions/python-to-process-yaml-with-codespaces?u=76281980&t=290)** So sort of like a [[JSON]]-type format if you're from a [[JavaScript]] background. We're going to convert these to single quotes and make sure that these also have single quotes. So sort of the name and value pairs need to look like this. And so here we're going to take this rss tag that we're making, and because we want there to be a bunch of attributes inside that, then we are going to move all these in here. And we'll indent these. All right, so now we're going to create an element for the channel. So again, if we refer back to the feed, and it's a good idea to sort of have this side by side while you're building this, inside this RSS tag, there is a channel tag. The channel tag has most of the information for the channel. So we need to go ahead and create that. So this will be channel_element equals xml_tree SubElement. So we're creating an element inside the XML tree, right? And this is going to be an rss.
>
> **[6:26](https://www.linkedin.com/learning/practical-github-actions/python-to-process-yaml-with-codespaces?u=76281980&t=386)** Actually, it's going to go inside the rss_element, and it's going to just be called channel. So it's not going to have any subdata in it. It's just going to create sort of the channel tag. Now, let's go ahead and xml_tree SubElement and we'll add a new channel_element. So inside the channel tag, right, we're going to create a title tag. And inside that title tag, we're going to add some text yaml and we'll read it from the YAML file. And all that data from the YAML file is now in an object called yaml_data. And then it'll go and retrieve the title. So if you remember the feed that YAML has this like title field. It's read it all into that variable called yaml_data and we can access it just like that. All right, so now it's time to output these things. So we'll create a variable called output_tree and this will be an xml_tree, right? ElementTree again. rss_element. So basically, the element that we have been building is going to be fed now into this output tree so that we can go ahead and send it out to a separate file.
>
> **[8:02](https://www.linkedin.com/learning/practical-github-actions/python-to-process-yaml-with-codespaces?u=76281980&t=482)** All right. And finally, we do the writing. So we'll say output_tree.write and we'll call this file podcast.xml. We'll do an encoding of UTF-8. It's just sort of an output format for the text file. And then we'll say xml_declaration equals True. So that would be the XML weird tag at the very top of this file right here. So it'll generate that for us automatically. And that should be it for kind of the basics of this file. Let's go ahead and pull up the terminal and I'm going to execute this file with python feed.py and let's see. So it looks like I made a mistake here. rss_element is not defined. And it looks like I need an equal sign here instead of a minus sign, so let's do that. Let's clear out the console. And we'll issue that python feed.py command. Now, it executed correctly and nothing happened, and you should see an additional podcast.xml file. You could see that it has that weird XML tag. It has an RSS feed, and if you follow it along, you can see all of the attributes that we placed in there, and inside that, we have a single element with the title of our podcast.
>
> **[9:36](https://www.linkedin.com/learning/practical-github-actions/python-to-process-yaml-with-codespaces?u=76281980&t=576)** So that's a lot for right now. We'll continue this in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (5), [[Codespaces]] (2), [[GitHub]] (1), [[Microsoft Word|Word]] (1), [[JSON]] (1)
> **Env Vars:** xml (7), yaml (6), rss (6), json (1), utf (1)
> **Code Identifiers:** xml_tree (5), rss_element (4), yaml_data (3), safe_load (2), channel_element (2)
> **CLI Commands:** python (5), make (4), pip (2)
> **File Paths:** feed.py (3), podcast.xml (2), feed.yaml (1)
> **Definitions:** is a  (4), is an  (2)
> **Tools:** terminal (2), github (1)
> **Cross-References:** in the next (1)

#### [Finishing up the RSS feed](https://www.linkedin.com/learning/practical-github-actions/finishing-up-the-rss-feed?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/practical-github-actions/finishing-up-the-rss-feed?u=76281980&t=1)** - [Instructor] All right, so let's build out more of our XML document. Some of this is pretty boring because basically we're going to take this right here and copy it a bunch of times to create most of the other elements from the RSS feed. So we'll do like the length language, like all the different things that are right here. And it's pretty much just a copy of what's in here. So I'm going to copy this a bunch of times and I'll be just replacing the different elements here. So we'll get the format, let's see, we'll get the subtitle as well. There's an element called author. Now here, although I've called this element just to make it easier for me to write author, the actual element is called iTunes author. So here, the element on this side is going to call the iTunes prefix, but it's going to retrieve from the YAML data the author element. All right, then we need a description. We're going to need an image. And this one also gets the iTunes prefix here.
>
> **[1:30](https://www.linkedin.com/learning/practical-github-actions/finishing-up-the-rss-feed?u=76281980&t=90)** We're going to get language. And let's see, I think that's all the ones that we need for right now. We're also going to create a link element, so we're going to use that in different places. So I'm going to create one called link prefix and it's going to hold the URL that we got when we created the [[GitHub]] page. So we'll do YAML data and we'll read the link variable, which we'll need to add and create. So let's go ahead and do that. So somewhere in this YAML file, I'm going to add an additional item called link. And what I want to do here is go back into my repo and make sure that I go to settings and I scroll down to pages, and I copy whatever this link is right here. Remember, yours will be a little bit different. I have a custom URL setup on my website, so yours might be a little bit longer and have like your username. So let's go ahead and go back here, and we'll paste that in there. I'm not going to add that trailing slash, just this right here. All right, so next, let's go back into the [[Python (Programming Language)|Python]] document. And when I use the image, I'm going to add the prefix to that. So iTunes image is actually going to be a little bit different.
>
> **[3:05](https://www.linkedin.com/learning/practical-github-actions/finishing-up-the-rss-feed?u=76281980&t=185)** So if we look at the RSS feed, the image is kind of like an image tag, right? So it has the attribute not inside the item. So it's not like a simple one like this title that has the data right here, but it's like the RSS feed. It has an attribute. So that does need to be written a little bit different. And I'm going to use this link prefix variable that I created here to add that. So instead of that text, it's going to say iTunes image right here. And then it's going to have a list of attributes here, and href. And then I'm going to use that link prefix and also get that YAML data image variable here.
>
> **[4:03](https://www.linkedin.com/learning/practical-github-actions/finishing-up-the-rss-feed?u=76281980&t=243)** And I don't need to put the text right there. So that's that one. And I need to go ahead and create one for the link now that I have it available to me. This'll be just like all the other ones. It'll say link, and then I'll use just the link prefix variable, right?
>
> **[4:34](https://www.linkedin.com/learning/practical-github-actions/finishing-up-the-rss-feed?u=76281980&t=274)** Let's do another one that's sort of a little bit odd, and I think I'm going to call P, this image, one because it's the category. And the category is like the image. It stores the data in the attribute. So category, and this is going to have an element called text, and it's just going to be read it from the YAML data and category. So that should work for that. Okay, so now, after the sort of header section of the feed, so basically all this stuff right here, you have this section called item, right? And there are a series of items. I can see them all here. And each one of those items is basically an episode for the podcast. So we need to create that section, and for that we're going to need to create a loop. So we'll save for item in YAML data, and we're going to read the item section. And then in here, item element. Let's see, element. It's going to go to the XML tree sub element, sort of similar to before channel element item. So we're creating kind of the container
>
> **[6:10](https://www.linkedin.com/learning/practical-github-actions/finishing-up-the-rss-feed?u=76281980&t=370)** for the items for the episodes. And then in here, XML tree, sub element, item element. And then sort of similar to before, title.text = for each of the items.
>
> **[6:40](https://www.linkedin.com/learning/practical-github-actions/finishing-up-the-rss-feed?u=76281980&t=400)** All right, so if you look at the YAML file, here's the items sort of container, and each one of these items has the information right here, which is what we're reading now into these different variables. So they're all going to be pretty similar.
>
> **[7:05](https://www.linkedin.com/learning/practical-github-actions/finishing-up-the-rss-feed?u=76281980&t=425)** This one will be title, then iTunes author. We're including an author tag for each episode. I'm the author for every episode. So here, I'm just actually going to use YAML data
>
> **[7:25](https://www.linkedin.com/learning/practical-github-actions/finishing-up-the-rss-feed?u=76281980&t=445)** instead of the item data, and look for the author. So I do have like an author section right here, and I'm just using that instead of having to put in an additional, you know, sort of thing here in each of these items that is going to be the same. I'm just creating it up here, and then I'm bringing it into feed.py, so. Okay, so now we need a description for the episode.
>
> **[7:59](https://www.linkedin.com/learning/practical-github-actions/finishing-up-the-rss-feed?u=76281980&t=479)** We need a duration, that should be also here. And this should be another one that gets the iTunes prefix here for duration. And then we get something called pub date. And in my YAML file, it's called published, right? So I guess I was a little bit fancy and I, instead of calling it pub date, I called it publish. It has like a very strange kind of format, formatting Greenwich Mean Time. Other than that, we need to create another strange element. It's called the enclosure. So the enclosure, each one of these items has an enclosure element. It has the length in bytes of the episode, plus the type of element that it is, plus the URL of the episode. So we're going to need this as a separate item. So let's see, we'll do enclosure, XML tree, sub element, item, element.
>
> **[9:17](https://www.linkedin.com/learning/practical-github-actions/finishing-up-the-rss-feed?u=76281980&t=557)** And it's similar to the other ones that we've done. So this one has sub items. It's basically an item with attributes, so it gets this sort of notation that we've been using in different places. So for the URL, I'm going to use the link prefix variable so I don't have to type all that out, and then plus item file.
>
> **[9:49](https://www.linkedin.com/learning/practical-github-actions/finishing-up-the-rss-feed?u=76281980&t=589)** Now here, my types are always going to be the same. I could put an attribute that has that, but they're always going to be MP3 files. So the type is always going to be exactly the same. I'm just going to hardcode that in here. You can put in another element if you want to. And then length, item length right here.
>
> **[10:15](https://www.linkedin.com/learning/practical-github-actions/finishing-up-the-rss-feed?u=76281980&t=615)** Cool. And then the [[Representational State Transfer (REST)|rest]] should be just fine. So let's go ahead and save this. We'll try it out and we'll go ahead and execute it. So we'll do Python and then feed.py. All right, so it looks like I need to go ahead and add quotes in a few places here. So this data should have referred to an item, and this item right here should have quotes for this file. And also each of these should have quotes, like that. So let's try this out. Clear this out, and you can see that now it execute it. And if I look at podcast.xml, I'll do a [[Microsoft Word|word]] wrap so you can see that it's a lot longer because it has all the data in the nice RSS feed format with each of the different items for the different episodes. So this is really ready for an iTunes or any other feed that you would want, but we want to automate this process a lot more. So we'll keep on working on this.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (2), [[GitHub]] (1), [[Representational State Transfer (REST)|Rest]] (1), [[Microsoft Word|Word]] (1)
> **Env Vars:** yaml (9), xml (4), rss (4), url (4), mp3 (1)
> **Code Identifiers:** itunes (8)
> **Analogies:** similar to (3), kind of like (1), it's like (1), just like (1)
> **CLI Commands:** make (2), python (2)
> **File Paths:** feed.py (2), podcast.xml (1)
> **UI Navigation:** go to (2), scroll down (1)
> **Tools:** github (1)


### 2. Publishing a Marketplace Action

[↑ Back to Table of Contents](#table-of-contents)

#### [Creating a workflow with existing actions](https://www.linkedin.com/learning/practical-github-actions/creating-a-workflow-with-existing-actions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-github-actions/creating-a-workflow-with-existing-actions?u=76281980&t=0)** - [Instructor] All right, so it's time to start building our own [[GitHub]] actions. Now you can look at the GitHub documentation for actions at this URL. GitHub actions have a ton of options and we're not going to be able to go through all these here. I mean, look at, for example the way that you can run things. It's pretty huge. You can do manual runs, run whenever a branch is maybe changed or when a poll request is issued, all kinds of ways of just running things. There's also cron jobs that you can set up and controlled sort of events for the different types of actions that you have plus different machines that you can run them. We're going to build something simple and I'll walk through the main sections that actions have. So now, one thing you may be noticing is that even though we have this podcast dot XML file right here, if you've been following along, when you go to the website we can see the read me file for the site. But if we try to go to the podcast file, that podcast XML file, you'll notice that right now we get a 404 error. And that's because as I have been working through this course, I've been creating different branches for each of the videos in the course. So you can go back and take a look at how the code looked, for example at the beginning of the fourth video in the first chapter that's why it's called a 01_04b.
>
> **[1:33](https://www.linkedin.com/learning/practical-github-actions/creating-a-workflow-with-existing-actions?u=76281980&t=93)** And take a look at how it looked at the end of the third video in the first chapter. That's what this one is. But we haven't really merged any of these changes into the main branch. So in order for this podcast feed to exist on the website we're going to need to push it to the main branch. So I'll do a [[Git]] checkout main and I'll do a get merge 01_04e, that's the last video the end of the code in the last video. And I'll need to issue a git push command. Okay, that's going to push things onto GitHub. If I go back into my repo I should see a new pages built and deployment action run. And once that's done, we should be able to refresh this page and see the XML file. So what I did basically is what we're going to need to do, but with an action. We want to, if somebody modifies the YAML file, say by adding an additional episode and perhaps drop an additional audio file in this folder, then what we want to do is we want an action that's going to run this [[Python (Programming Language)|Python]] document, generate a new podcast XML file and then push things onto the server. And for that, we're going to need to create an action and we're going to do that in the website. So let's go back into actions. Looks like it's done building and deploying. So if I come over here, I should see my new XML file
>
> **[3:09](https://www.linkedin.com/learning/practical-github-actions/creating-a-workflow-with-existing-actions?u=76281980&t=189)** with all the changes that I did in the previous videos that's great, but how do we automate that process? All right, so we're going to have to go and click on this action tab right here, and I'm going to hit this new workflow button to create a new workflow. Now, from here, you can pick things from the marketplace. This is sort of another way to get to the marketplace popular file. So you can also do a search right here and it will search for things. But we can also click on this, set up a workflow yourself. And that's what we're going to do. So notice that this is going to create a dot GitHub folder and a workflows folder and then add a main dot YAML file in there. So that's going to be in our project and we can put in whatever we want right here. So generally actions begin with a name and they're written in YAML. So this is similar to how you'll be doing the file for the podcasts. And I'm going to create this it, generate podcast feed. It's a really nice editor. All right, and it's also giving you some feedback there. So the next thing we need to do is probably create an on command, which means what is going to cause this to start processing. Now we're going to choose push here. That means that whenever somebody pushes something into our main branch, it's going to execute this action.
>
> **[4:44](https://www.linkedin.com/learning/practical-github-actions/creating-a-workflow-with-existing-actions?u=76281980&t=284)** As I mentioned in the documentation, you can see lots of examples and you can see how workflows can be run. So you can run a workflow manually if you want to or you can run it on different basically events. You can also rerun workflows. There's a lot of stuff here. So we'll go back into this right here. So we're interested in doing things whenever somebody pushes a change onto our main branch in our repository. All right, so now we're going to execute some jobs. This is how we specify what we want to do. And we're going to create a job called Build. This job is going to run on a specific type of machine and you can specify lots of different machines here. You can specify, for example, a [[Windows]] machine, different versions of [[Ubuntu]]. I'm going to ask for Ubuntu machine, which is basically a [[Linux]] workstation, and I'm just going to get the latest version of that machine. Cool, now I need to specify a series of steps and I like to name my steps, although you don't always have to put a name for everything. I like to kind of divide the sub-tasks into sections and identify them with names. And you'll see whenever I show you this workflow running how that works. So I'm going to call this first part check out repo. All right, now there are a number of pre-built actions, as I mentioned.
>
> **[6:18](https://www.linkedin.com/learning/practical-github-actions/creating-a-workflow-with-existing-actions?u=76281980&t=378)** So you can, for example, look for tons of marketplace actions, and you can also do a search right here that do all kinds of stuff. So we're going to utilize probably what's the most popular action in the world. This action that is in charge of letting you check out repositories. Also, it'll let you push things to repositories as well. So I'm going to say actions, and I'm going to use the checkout And release three or version three. Actions can have different releases. They're kind of like the different versions of the action so that your job doesn't, you know sort of die when something gets updated, you can specify the version so that if say somebody creates a version like five of this then your action should still run the proper older version and still work. It's not going to mess up all your work. All right, so now that's great. So it's going to check out the repository, which would be this repository and then I'm going to create another section here. I'm going to say setup Python, and I'm going to say uses actions set up Python, and this'll be release four.
>
> **[7:39](https://www.linkedin.com/learning/practical-github-actions/creating-a-workflow-with-existing-actions?u=76281980&t=459)** All right, so just because we get on Ubuntu latest machine, it doesn't mean that Python is installed and that also the module that we use isn't necessarily installed as well. So we're just kind of verifying that that is happening for us. So set up Python uses that. And then in actions you can pass a width parameter that allows you to pass along some setup and other variables that the actions can use. Python, so we'll say Python version. So we can, with this particular action control which version of Python we're installing. So we're going to install version 3.10. And now I'm going to say name Install Dependencies.
>
> **[8:31](https://www.linkedin.com/learning/practical-github-actions/creating-a-workflow-with-existing-actions?u=76281980&t=511)** Again, I can't guarantee that I have either PIP installed or that I have the PyYAML module that I need to run this particular job. So I'm going to issue a run command and a run command's basically the same thing as something that you would type in on the terminal. And so you could run say something like git checkout command here if you wanted to, whatever you would type into the terminal. But we're going to run a multi-line command, so more than one command and we'll say Python minus M, PIP install upgrade PIP.
>
> **[9:09](https://www.linkedin.com/learning/practical-github-actions/creating-a-workflow-with-existing-actions?u=76281980&t=549)** So we're just making sure that PIP is installed with this copy of Python and that it's upgraded and good to go so that then we can run a PIP install PyYAML command. So this will make sure that we have that extension that we need in order to run our application. Now we'll create another section here called Run Feed Generator. Okay, and here we will issue a run command. This will just be a one line run command and here we'll say Python feed dot py. So that's going to actually execute our feed dot pi document, the application that generates the podcast XML file. And then finally, just like what we had to do a bit earlier in order for all of the changes in the podcast XML file to be re-pushed up to the GitHub repo, we need to go ahead I'll call this Push Repo. And this is going to run multi-line command. And here we're going to have to run basically all the commands to set up git, as if this was a new machine because in reality this is creating a new machine for us and it is installing or making sure that we have a version of Python installing our dependencies. And now since we went to run some git commands we have to make sure that we use the config statement just as if this was a new machine to set up our user name.
>
> **[10:45](https://www.linkedin.com/learning/practical-github-actions/creating-a-workflow-with-existing-actions?u=76281980&t=645)** Otherwise, the GitHub actions won't be able to run. And we'll say GitHub actions, and this is just the name you could actually just put your name in here, but you know, we'll just use GitHub actions that works and we'll do a git config user dot email and we'll just put in GitHub actions at [github.com](https://github.com). You could put in your own email if you wanted to here. We'll just keep it generic. And then we'll issue a git at period. That'll add all of the files after it gets done generated that podcast at XML file. It'll add that. And then we'll do a git commit minus M and we'll say modified feed. So that'll be the message. Then we'll issue a git push and that's the end of this right here. So we'll hit commit changes. we'll just leave the commit message as a default and we'll hit commit. All right, let's check actions over here. So you should see because we've made a change into the main branch you should now see two different actions running, pages build and deployment, as well as create main dot YAML. And I know this action is going to fail and it's not really apparent why it's failing but you can come in here and normally try to get an idea by looking at the build process. This is pretty nice. It actually shows you the job as it's running. So this is would actually get filled out as it was running show you where the error happened
>
> **[12:17](https://www.linkedin.com/learning/practical-github-actions/creating-a-workflow-with-existing-actions?u=76281980&t=737)** and you can take a look right here. It's sometimes not very clear what's happening. And this is one of those instances it's really not very clear, but if we open this up you can kind of see what it did and where it think it failed. All it's telling you is that the process completed with an exit code one, which is not helpful at all. Now I know what the problem is, but this is the kind of thing that you have to know about and read the documentation to find out why things sometimes fail. But I'm going to save you all that trouble. If you go to the settings section of this repository and you go to actions, and we'll go to general you'll see that there's a bunch of actions permissions. The last one says, choose that the default permissions granted to the GitHub token when running workflows in the repository. You can specify more granular permissions in the workflow using YAML. So our project doesn't have the right permissions in order to run basically any of the git and GitHub processes. When we give it read and write permissions and we save it, it should run now, but we haven't made a change into the main branch. It's not going to run automatically. We're going to have to cause it to run by making some sort of change and then pushing it into the main branch. So here we are in the main branch. The easiest thing to do is just to edit something. You could edit actually the README file if you wanted to, but I'll just go ahead and add something to the feed dot YAML. So we'll just add a dash here, commit these changes. And now if we go back to actions
>
> **[13:53](https://www.linkedin.com/learning/practical-github-actions/creating-a-workflow-with-existing-actions?u=76281980&t=833)** you can see the two different jobs. Here's the one that failed. If the failing jobs become annoying you can actually delete them with these three dots right here and you can hit the lead workflow run. We'll leave that one alone. And you can see that Update feed YAML is done. It's going to take a little bit to finish pages build and deployment. So remember, the podcast dot YAML file is not going to be done until this page is built and deployment is done, but the update feed did run and we can kind of keep on checking in here. So it looked like it's actually waiting until that other one was done. Let's go back into podcast test. And you could see that the podcast, that XML filed has been modified now. And if we click on this, it's going to be hard to see, but we should see our little extra dash right there that we added so that we know that that action is working. And once the page finish shows deploying, right? So this pages build and deployment is now check-marked, which means that if we go to this file right here and we hit refresh we should see this little dash right here, which means that our action is working. And that's a great way of creating an action for a project. I think that for processing things, this is fantastic because you can create an action that lets you
>
> **[15:28](https://www.linkedin.com/learning/practical-github-actions/creating-a-workflow-with-existing-actions?u=76281980&t=928)** run a Python command, which can do a lot of different kinds of processing, make a change and then push those changes up to the server. And that means that from now on all we have to do to add a new episode is just go into this feed dot YAML and we'll hit edit again. We'll get rid of this dash and we can let it run again, make whatever changes we want. And now we have an action that allows us to use this repo to go ahead and update an iTunes podcast, which is awesome.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (13), [[Python (Programming Language)|Python]] (13), [[Git]] (10), [[Ubuntu]] (3), [[Windows]] (1)
> **CLI Commands:** python (13), git (10), pip (5), make (4), find (1)
> **Env Vars:** xml (9), yaml (9), pip (5), url (1), readme (1)
> **Tools:** github (13), terminal (2)
> **Prerequisites:** set up (6), install (4), setup (2)
> **UI Navigation:** go to (4), click on (3)
> **Analogies:** for example (4), similar to (1), kind of like (1), just like (1)
> **Definitions:** means that (4)

#### [Creating a generator repo Dockerfile](https://www.linkedin.com/learning/practical-github-actions/creating-a-generator-repo-dockerfile?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-github-actions/creating-a-generator-repo-dockerfile?u=76281980&t=0)** - [Instructor] Let's assume your project has gotten really popular, and you want to have multiple podcasts, and you want to make sure that all of them can use the same version of the application that you developed here to process things. So in order to do that, we're going to need to create another repo that's going to hold our generator, and then we can create other repos that just have our different podcasts, calling the same action from this new generator that we'll be creating. So first off, I'm going to create a new repo. I'll go to [[GitHub]].new, and I'm going to call this podcast-generator. All right, that's available. And I'll go ahead and add a README file. And then I'm also going to add an MIT license, because eventually, I'm going to put this in the marketplace, and I want everyone to be able to use my awesome podcast generator. All right, so I'll create a repository, and you can see that it just gives you a very basic podcast generator file with this license. We're going to need to move some things from our other repository, mainly the [[Python (Programming Language)|Python]] file. And so we can, if we want to, download this, but this Python file is so small, that I'm just going to click on feed.py, and I'll click on this button right here
>
> **[1:34](https://www.linkedin.com/learning/practical-github-actions/creating-a-generator-repo-dockerfile?u=76281980&t=94)** that lets me copy the contents of this, and then I'll just recreate it in my new repository. So I'm going to come in here, add a file, Create new file, I'll call it feed.py, and then I'll just paste the file contents from my other document. I'll hit Commit changes, and I'll commit this, and now I have my feed.py application in here. Now, in order to do this, I'm going to need a series of other documents that will allow me to run this generator as its own action that other repos can use. So I'm going to need a Dockerfile, as well as an action file that's going to run the application. And I'm also going to need something called an entry point. The entry point is what's going to run when other repos call on this action. So in this video, I'm going to get started with the Dockerfile. You're going to see that it's similar to other things that we have made. So I'll go back into podcast-generator here again. You can do a lot of stuff from just GitHub itself. You can, if you want to, type all this in here just by adding the file, like I did this Python document. But whenever things get more complicated, you may want to go ahead and create codespace if you have that available.
>
> **[3:09](https://www.linkedin.com/learning/practical-github-actions/creating-a-generator-repo-dockerfile?u=76281980&t=189)** So I'm going to say Create codespace on main to create a codespace out of this document. So it'll take a second to pull all this up, and here are all my files. And now I have a much better editor that's like Visual Studio Code that I can use. So I don't need to wait until this is done. I'll go ahead and click on this plus button right here to create a new file. And I'm just going to call it Dockerfile. This is a weird file because it doesn't have an extension, it's just called Dockerfile. And we're going to issue a series of commands. So Dockerfile basically controls how your cloud server creates a virtual machine. So it's sort of the steps for creating a virtual machine. Now, we saw some of this when we created our own actions, where we could specify the types of machine that you generate. So my first command is going to be [[Ubuntu]]:latest, and that's going to procure an Ubuntu machine for me. And then I'm going to install things. Now, this is going to be more of a raw installation than what I did earlier, so it's almost as if you were running things from a command line. So I'm going to issue another run command, and this is just another Docker command. We've got plenty of courses that can show you how to work with Docker as well, if you need more help with this. I'm going to once again turn off [[Microsoft Copilot|Copilot]]. You need to do that, I guess,
>
> **[4:41](https://www.linkedin.com/learning/practical-github-actions/creating-a-generator-repo-dockerfile?u=76281980&t=281)** for every type of file that you're working with. And since it doesn't know Dockerfiles, I needed to turn that off, or it's going to give me a little bit too much code that will be distracting. All right, so here, I'm assuming that it's procured a machine, an Ubuntu machine, that's a [[Linux]] machine, the latest version of that. And now I need to go ahead and run some commands that will allow me to install things. So I'm going to say apt-get update, and apt-get install -y,
>
> **[5:19](https://www.linkedin.com/learning/practical-github-actions/creating-a-generator-repo-dockerfile?u=76281980&t=319)** and then a forward slash like this. So basically we're going to update apt-get, which is how I load things into Ubuntu, and then I'm going to install additional packages that I want to work with. Now, luckily for us, we're getting comfortable with YAML, and Docker files are also written in YAML. Now, what we want to install here is Python version 3.10, like we've been doing. And these slashes is almost like carriage returns. I could run these different commands with different run statements, but this slash means that I can run them in multiple lines like this, a little bit easier. So I'm going to say python3-pip. And then finally, I want to make sure that I also have [[Git]] on this machine. So before, we were using an action that took care of these things for us, but now we have to do it a little bit manually, because we're basically creating a machine from scratch. Then we'll do another run statement here, and we'll do pip3 install pyYAML. So this is the module that we've been using, and it's called pyYAML, like this. So we'll go ahead and run that to make sure that we not only have Git and Python, but also this pyYAML, so that we can use it with this feed.py document. All right, so I need to also copy a couple of files. So this is all happening in the cloud,
>
> **[6:53](https://www.linkedin.com/learning/practical-github-actions/creating-a-generator-repo-dockerfile?u=76281980&t=413)** and I need to copy some files from my repository basically to the computer, or the Docker image that I'm creating. So I'm going to copy feed.py, right? And I'll put it in /usr/bin/feed.py, so I'm going to put it in this folder, in this usr folder, the bin folder, which is a pretty common location in Linux. And then I'm going to also copy a file that I'll be creating called entrypoint.sh, and I'm going to put it in the root level, and name it entrypoint.sh as well. So copying it, again, from my repository to my Docker image, which is basically like copying it to the machine that I'll be using it in. All right, so finally, I need to specify the entry point for this project. So I'll say ENTRYPOINT. So this is the file that is going to run when this machine is finished procuring, and I want to run /entrypoint.sh. All right, so now, I'm going to save this file, and that is the basics of the type of Dockerfile that I would need to run things. So that's enough for right now. I'll pick up the [[Representational State Transfer (REST)|rest]] of the other files in the next couple of videos.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (5), [[Ubuntu]] (4), [[GitHub]] (2), [[Linux]] (2), [[Git]] (2)
> **CLI Commands:** python (5), docker (5), make (3), apt (3), git (2)
> **File Paths:** feed.py (5), entrypoint.sh (3), usr/bin/feed.py (1)
> **Prerequisites:** install (6)
> **Env Vars:** yaml (2), readme (1), mit (1), entrypoint (1)
> **Tools:** github (2), visual studio (1), command line (1)
> **UI Navigation:** click on (3), go to (1)
> **Code Identifiers:** pyyaml (3)

#### [Creating an entry point](https://www.linkedin.com/learning/practical-github-actions/creating-an-entry-point?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-github-actions/creating-an-entry-point?u=76281980&t=0)** - [Instructor] All right, let's take care of building this entry point file that the Docker file is going to call upon. So I'm going to hit the plus sign here to create a new file, and I'll type in entrypoint.sh. So this is pretty much a file that will run as if you are running terminal commands, but all the commands are going to be in a file. So we're going to start with the shebang. This basically specifies the interpreter that's going to execute this script, so we'll say bin/bash, we're using Bash here, and we'll issue an echo statement. So here, whenever you use an echo statement, it just basically prints something out to the command line. This is useful if you want to debug some things, and when the action runs, this will print out as well. So it's a great place for you to put in little messages. I like to put these sort of dashes, so that when this action runs, I can actually see this section in the sort of long list of commands that are scrolling by as I see the action run. So here now we're going to do things that we've done in other places. So I'll do a [[Git]] config and set the user. I don't want to do the mail. I'll do the username first, and in here, I'm going to add the GITHUB_ACTOR.
>
> **[1:39](https://www.linkedin.com/learning/practical-github-actions/creating-an-entry-point?u=76281980&t=99)** So this is going to allow me to sort of keep track of who is running the action. That way, if different people are using this action that I'm building, it's going to say that person's username as opposed to just a generic one. It's a little bit better. So we'll do the same thing for email, and this one's called INPUT_EMAIL. And then we'll do one more to make sure that we can run workflows, and this will be global add safe directory
>
> **[2:26](https://www.linkedin.com/learning/practical-github-actions/creating-an-entry-point?u=76281980&t=146)** and [[GitHub]]/workspace. This will just make sure that we are adding this to the safe list of directories so that we can run git operations in here. So next up, we'll go ahead and execute [[Python (Programming Language)|Python]]. Because we installed Python 3, we have to say Python 3 here. And then we will run usr/bin/feed.py, because that's where we copied it to in our Docker file. So remember, we copied, like, this feed.py to usr/bin.py, so we're just referring to that. Then I'm going to just issue a git add minus A, I could do a period if I wanted to, and then just like I would in the terminal, I can also just issue a commit. I could do these in separate lines, but why do that? Update feed. All right, it looks like [[GitHub Copilot]]. It's really helpful, but it keeps on turning itself on, so I'll just disable it for Shell Script as well. Although we're almost done here, so we do a git add, git commit, and then we'll do a git push, and we'll have to do the set upstream. We don't normally have to do this, but again, this is sort of like a new machine, so we just make sure that the upstream branch is set up. I think a lot of times I assume that these things are going to be done, but when you're kind of working with a clean machine, you have to do a lot of the stuff
>
> **[3:58](https://www.linkedin.com/learning/practical-github-actions/creating-an-entry-point?u=76281980&t=238)** that you don't normally have to do. So upstream origin main. So basically, this is allowing us to use Git, run our Python, and then also send things back to the server. So whatever Python file generates, which will be at our podcast.xml, is going to push that back upstream to the main branch. Right? So that should be it for the entry point, and now we have one more file that we need to generate. We'll continue that in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Git]] (7), [[Python (Programming Language)|Python]] (5), [[GitHub]] (1), [[GitHub Copilot]] (1)
> **CLI Commands:** git (7), python (5), make (3), docker (2)
> **Tools:** terminal (2), bash (2), github (2), command line (1)
> **File Paths:** entrypoint.sh (1), usr/bin/feed.py (1), feed.py (1), usr/bin.py (1), podcast.xml (1)
> **Env Vars:** github_actor (1), input_email (1)
> **Versions:** python 3 (2)
> **Cross-References:** in the next (1)
> **Analogies:** just like (1)

#### [Crafting an action.yml file](https://www.linkedin.com/learning/practical-github-actions/crafting-an-action-yml-file?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-github-actions/crafting-an-action-yml-file?u=76281980&t=0)** - All right, we need one more file to make this generator work, and that is going to be the action file. Now, this is a little bit different from our other action file. This file will be run from basically a separate repo and do things to all of the other files that we've been creating so far. So let's go ahead and make it. We will call this one "Action dot Y M L" and in here we will write just basically what's normal action code, but it's just going to do something slightly different than a regular action. Also, it doesn't go in the workflow document like it normally would for regular actions. So this will say "Podcast Generator," I'll go ahead and promptly add my name here, I'll put in a short description, and then I'll issue a series of commands. So just like before, runs, and here we'll say it's going to run using Docker. And for an image we're going to use the Docker file that we created. Now, normally you can add a piece of branding to these things, so that in the marketplace,
>
> **[1:32](https://www.linkedin.com/learning/practical-github-actions/crafting-an-action-yml-file?u=76281980&t=92)** they have a little icon and the icons come from a library called "Feather Icons." So, we'll use an icon called "[[Git]] Branch," because it's the one that makes the most sense, honestly, in most of the instances. This isn't a a big deal, and then I'll make it red. It's just something people do for these things. All right, so inputs is going to have the email. So, remember when we were creating the entry point, we are sort of relying on some of these variables being available to us. So here for the email, we'll use a description and we will say that the default for this is going to be basically the [[GitHub]] actor, and that will let us just get the email from whoever runs the action. So "GitHub, dot actor, at local host." And then we'll get the name as well,
>
> **[2:56](https://www.linkedin.com/learning/practical-github-actions/crafting-an-action-yml-file?u=76281980&t=176)** make it required, and create a default here. So just matching what we're using in our project. We'll just space these out a little bit better so that they look nicer. And so, this is an action that basically controls what is happening with all the files in here as well. So when you use another repository to run this repository, it's going to find this action, understand that it needs to use the Docker image, run the Docker file to generate the server, then this runs the entry point. The entry point is going to set up, "Git run, feed dot py," and then push that all back onto the server. And after all that, it should generate your feeds from another repository. So in the next video, we'll go ahead and link everything together and I'll show you how to call this file from a different repository.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Git]] (2), [[GitHub]] (2)
> **CLI Commands:** make (4), docker (4), git (2), find (1)
> **Tools:** github (2)
> **Definitions:** is a  (1), is an  (1)
> **Cross-References:** in the next (1)
> **Analogies:** just like (1)
> **Prerequisites:** set up (1)
> **Speakers:** - all (1)

#### [Testing your actions](https://www.linkedin.com/learning/practical-github-actions/testing-your-actions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-github-actions/testing-your-actions?u=76281980&t=0)** - [Instructor] All right, so now that I have this action finished, you'll notice that it's telling me that I can publish this action to the Marketplace. That's because it's realized that I have all the files necessary to do that, but I'm not going to do that yet because I need to write a better description, which I'll do later. But then, I also need to make sure that I test this before I just publish it to the Marketplace. No sense to publish it if it's not working. So I'm going to go back to my podcast-test and modify this action so that I can use the other repo, the podcast generator repo, to process the files. So I'm going to go into Actions. You'll see that there's some workflows that are running and failing. That's because these are the ones for the different branches that I created. No big deal. We're going to be replacing the workflow here with our new workflow. So we're going to go to this Generate Podcast Feeds and then we are going to click on any one of these dots and go to the workflow file. That's going to show us the workflow for this run. And then, we're going to hit the Edit button. That, basically, has taken us to podcast-test, to .[[GitHub]] file workflows and the main.yml file. You could also just go to the repo and then just, literally, just open the main.yml file from here.
>
> **[1:34](https://www.linkedin.com/learning/practical-github-actions/testing-your-actions?u=76281980&t=94)** But I wanted to show you a different way of doing it. Now, I'm going to hit the Edit button and you're going to see that this is a much simpler process. It's still going to Generate Podcast Feeds on push and most of the top is going to remain the same but I'm not going to do any of the things that I'm already doing in the other action. So I'm going to delete everything here. I'm still going to use the Checkout Repo action, but then I'm going to add another step here and I'll call this one Run Feed Generator. And here, I'm going to say, uses. And here, I need to type in my username. So you'd be typing your username. And then, you type in the name of the repo that you want to run. So our repo is called podcast-generator, so we'll type that in here, podcast-generator. And normally, what we would do here is specify a release from the Marketplace, like we're doing right here. We're saying use the version three of this checkout action, But here, we can just refer to a repository and then include a branch that we want to run on. So until we create a release, we can run any other sort of test action, like podcast-generator, by using this nomenclature.
>
> **[3:11](https://www.linkedin.com/learning/practical-github-actions/testing-your-actions?u=76281980&t=191)** Notice that it's a lot easier from now on to create these. So let's go ahead and commit these changes. We'll hit Commit Changes, and now it should be trying to use the podcast-generator action. We will see what's happening in here, in Actions. We'll see the pages build and deployment happen and Update YAML also happen. All right, so I knew that this error was going to happen. So let me show you what's going on. I'll click on Update YAML to take a look at the process that it went through and I'll click on build. And you could see that it failed when it was trying to run the Feed Generator step. And once again, you can open this up to see what it tells you. And I'm not really fond of the errors that it tells you because it says, error response from daemon: failed to create shim task, et cetera, et cetera. Now, the key thing here is that, is this right here. It says that the entrypoint.sh: permission denied: unknown. In the list of errors that took me forever to figure out, this probably wins one of the greatest awards ever. This error means that the entrypoint.sh file doesn't have right permissions to it. Now, it is really difficult to find out where this is, but I'm just going to fix it, because. We can do it by going back into our Codespace.
>
> **[4:44](https://www.linkedin.com/learning/practical-github-actions/testing-your-actions?u=76281980&t=284)** You could already have it running and then issuing a command to make sure that this entrypoint has the right permissions. So let's try that. All right, so now that we're here, we can go ahead and pull up a terminal and we're going to issue a command called, chmod -R 775. And then, we'll say entrypoint.sh. And that will change the permissions. I can issue an ls -la command, and I can take a look at the permissions for entrypoint.sh and see that it has the right permissions, so it needs to be able to execute, basically. Now that we have that, then let's try a [[Git]] status. It looked like it knows that it modified entrypoint.sh, so I'll add this, commit it,
>
> **[5:44](https://www.linkedin.com/learning/practical-github-actions/testing-your-actions?u=76281980&t=344)** and then, I'll go ahead and push it. All right, that's going to push everything back onto the server, hopefully with the right permissions. And now, I can try rerunning this again. I think I could easily just modify one of the files again and it would also work, but we'll just try rerunning it. The suspense is killing me, so I'm actually going to see it as it runs, and you can see that it's going through all the different steps. If you don't really need to read all of this right here, from this step, you can collapse it. The one that we are concerned about is this Checkout Repo step. So we'll wait for it, see if it fails. All right, this time it looks like everything ran without errors, so that is progress. Now, let's go back to Actions and see if it shows it. Yeah, it looks like it shows it. Well, it says seven minutes ago, so I don't know that it ran it properly. Let's just go ahead and modify the podcast feed.yaml to make a change. Just a silly change like before, we're just going to add a dash here to just force this thing to rerun and hopefully it'll work just fine. All right, so we'll go back into Actions. We'll take a look at our process run. All right, so it looks like everything built properly. Let's go into the Code and we should be able to see our updated feed, and let's just make sure
>
> **[7:21](https://www.linkedin.com/learning/practical-github-actions/testing-your-actions?u=76281980&t=441)** that it has that dash that we added. And there it is. So that's actually a fantastic way of being able to use a separate project that you can update for multiple podcasts and handle your podcast empire with a single action.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (1), [[Git]] (1)
> **File Paths:** entrypoint.sh (5), main.yml (2), feed.yaml (1)
> **CLI Commands:** make (4), find (1), chmod (1), ls (1), git (1)
> **UI Navigation:** go to (3), click on (3), open the (1)
> **Definitions:** is a  (1), is called (1), means that (1)
> **Env Vars:** yaml (2)
> **Cross-References:** go back to (2)
> **Tools:** github (1), terminal (1)

#### [Creating a release](https://www.linkedin.com/learning/practical-github-actions/creating-a-release?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-github-actions/creating-a-release?u=76281980&t=0)** - [Instructor] Now that our action is ready, we're ready to publish this onto the Marketplace. Now, to do this, we'll need to fill out some [[Forms]] and draft a release. Thankfully, once [[GitHub]] understands that your project is ready for a release, it gives you this little publish action to Marketplace box right here. So we can draft a release from here, and you can also create a release from the sidebar. Let's go ahead and take advantage of this box to draft a release. You're going to need a few pieces of information, and GitHub is going to go through a check to make sure that you have everything you need to release this in the Marketplace. You need to choose a category from here. So I'm going to pick Utilities, and you need to also pick another category. So for this one, I will do community. Let's do deployment instead. That sounds better. All right, I also need to create a tag because of releases. Just basically a tag from [[Git]]. So you click on this right here and then you'll have to create a new tag. So here I want to type in a name and the name has to be in a format that starts with a V and then some sort of number. So this is going to be version 1.0 of this release, and so you type it in here. And then you click on this button called Create New Tag. And that tag is now selected. You choose the target for the release, which is going to be just our main branch. And then you can, if you want to,
>
> **[1:35](https://www.linkedin.com/learning/practical-github-actions/creating-a-release?u=76281980&t=95)** add some notes for the release and you can add some photos in there if you want to. Now, there's a nice new AI feature that allows you to generate release notes. You can just click on this button right here. Now, it's going to look at pull requests. There haven't been any with this project, so it's just going to tell you where you can see all the commits. That's fine for right now. You can also set this as a pre-release if you're not sure this is 100% working and want to let people know that this isn't really production ready. So I'm going to go ahead and hit publish release. Okay, and you can see now that it has a 1.0 release. And this also allows people to download the source code onto their local machines and refer to a specific release by version when they create their own actions. So now when we go back into the main page, you can see that it says that you can use this action with your project and you can also view it on the Marketplace. Another thing that you may want to do is update this about section. It's not really required but it's nice to have a description of your project in here. So I'm going to type in a description and you can put in a website URL. I don't really have a separate website for this project but if you had GitHub pages, you could put in the URL to that here. And then you can also add some topics so that people know what types of tags this repo has. So we'll type in podcast and then we can put
>
> **[3:12](https://www.linkedin.com/learning/practical-github-actions/creating-a-release?u=76281980&t=192)** in a space and it lets you add more, feed, XML, RSS. We'll put in [[Python (Programming Language)|Python]] since this project used Python. And we'll put in gitHubactions. It does give you a little dropdown here, so if you type something in, it kind of gives you some options. We'll also put in actions here, just regular actions. All right, cool. We'll go ahead and hit Save Changes. And that gives us this nice little section here. You can see the release right here and when that release happened. This will appear on your project as a Git tag. And if you want to, you can click on this button to take a look at this action in the Marketplace. And there it is with my little picture on it and that makes me feel really special. I also typed in more detailed README file at the beginning before I started this recording. You don't need to see me typing this in, but generally speaking, you want to sort of describe what the action does and how you use it. So basically here I'm saying that you need to create the YAML file, the format for the YAML file with some examples, as well as the workflow that you'll need to create in your project. So that's what we did in podcast-test. We had this feed.yaml file that we create and we also have the workflow that we created and updated in this main.yml file.
>
> **[4:47](https://www.linkedin.com/learning/practical-github-actions/creating-a-release?u=76281980&t=287)** And that's all you need to put something in the Marketplace. It's pretty cool and it's a really awesome achievement for you to do. And I think that it can go a long way towards showing that you're a more advanced user and that you'll also enjoy putting things for others to collaborate with you on and for other people to perhaps use in some of their projects.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (3), [[Git]] (2), [[Python (Programming Language)|Python]] (2), [[Forms]] (1)
> **Env Vars:** url (2), yaml (2), xml (1), rss (1), readme (1)
> **CLI Commands:** git (2), python (2), make (1)
> **UI Navigation:** click on (3), dropdown (1)
> **Tools:** github (3)
> **File Paths:** feed.yaml (1), main.yml (1)
> **Versions:** version 1 (1), 1.0 (1)
> **Exercise Files:** download the (1), source code (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)


## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/github-practical-actions-4412872)

## Skills Covered

- GitHub

## Path Context

### In [[Prepare for the GitHub Foundations Certification]]
**1 of 7** | [[Learning Git and GitHub]] →

### In [[Career Essentials in GitHub Professional Certificate]]
**1 of 4** | [[Practical GitHub Project Management and Collaboration]] →

## Part of

- [[Career Essentials in GitHub Professional Certificate]]

## Appears In

- [[Prepare for the GitHub Foundations Certification]]
- [[Career Essentials in GitHub Professional Certificate]]

## Related Courses

_Courses sharing skills:_

- [[Practical GitHub Code Search]] — GitHub
- [[Practical GitHub Project Management and Collaboration]] — GitHub
- [[Creating a Book Search Engine from Scratch Using Java and GitHub Copilot]] — GitHub
- [[Benefits of GitHub Community]] — GitHub
- [[GitHub Foundations- Privacy, Security, and Administration]] — GitHub

---

[↑ Back to top](#)