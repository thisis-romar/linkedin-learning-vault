---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: level-up-python-data-acquisitions-prep-and-eda
url: "https://www.linkedin.com/learning/level-up-python-data-acquisitions-prep-and-eda"
duration_minutes: 62
duration: 1h 2m
level: Intermediate
updated: 4/9/2025
learners: 6145
skills:
  - Python (Programming Language)
  - Data Acquisition
exercise_files: false
github: "https://github.com/LinkedInLearning/level-up-python-data-acquisitions-prep-EDA-3083218/codespaces"
thumbnail: "https://media.licdn.com/dms/image/v2/D4D0DAQHesOIQyOuTNQ/learning-public-crop_675_1200/B4DZXd6el9HkAY-/0/1743184849916?e=2147483647&amp;v=beta&amp;t=4RUemFalV9c4wFDTKNhmgsLIaA4UKMuRSgIr6mbeqEU"
linkedin_topic: Data Science
learning_paths:
  - '[Advance Your Python Skills for Data Science](../../Paths/Data%20Science/Learning%20Paths/Advance%20Your%20Python%20Skills%20for%20Data%20Science.md)'
prev_courses:
  - '[More Python Tips, Tricks, and Techniques for Data Science](More%20Python%20Tips%2C%20Tricks%2C%20and%20Techniques%20for%20Data%20Science.md)'
path_nav: '[{"path":"Advance Your Python Skills for Data Science","position":6,"total":6,"prev":"More Python Tips, Tricks, and Techniques for Data Science","next":null}]'
path_count: 1
tags:
  - course
  - topic/data-science
  - topic/software-development
  - skill/python-programming-language
  - skill/data-acquisition
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Level%20Up-%20Python%20Data%20Acquisitions%2C%20Prep%2C%20and%20EDA.md)

![Level Up: Python Data Acquisitions, Prep, and EDA](https://media.licdn.com/dms/image/v2/D4D0DAQHesOIQyOuTNQ/learning-public-crop_675_1200/B4DZXd6el9HkAY-/0/1743184849916?e=2147483647&amp;v=beta&amp;t=4RUemFalV9c4wFDTKNhmgsLIaA4UKMuRSgIr6mbeqEU)

# Level Up: Python Data Acquisitions, Prep, and EDA

> Join instructor Seth Berry as he presents 15 challenges, starting with a test of basic skills and moving on to more complex tasks. Each video is self-contained, so you can choose which challenges to try, and then compare your solution with Seth's explanation. These challenges focus on data acquisitions, data prep, and EDA.This course is integrated with GitHub Codespaces, an instant cloud developer

> [LinkedIn Learning](https://www.linkedin.com/learning/level-up-python-data-acquisitions-prep-and-eda) | 1h 2m | Intermediate | 6K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Getting started with Python for data science: Code challenges](#getting-started-with-python-for-data-science-code-challenges)
  - [Using GitHub Codespaces with this course](#using-github-codespaces-with-this-course)
- [**1. Data Acquisition**](#1-data-acquisition) (6 videos)
  - [Scraping tables](#scraping-tables)
  - [Finding CSS selectors](#finding-css-selectors)
  - [Scraping text](#scraping-text)
  - [Using LLMs to scrape data](#using-llms-to-scrape-data)
  - [Finding APIs](#finding-apis)
  - [Getting JSON into pandas](#getting-json-into-pandas)
- [**2. Data Prep**](#2-data-prep) (6 videos)
  - [Constructing regular expressions](#constructing-regular-expressions)
  - [Cleaning text](#cleaning-text)
  - [Selecting variables](#selecting-variables)
  - [Encoding categorical variables](#encoding-categorical-variables)
  - [Scaling variables](#scaling-variables)
  - [Reducing dimensionality](#reducing-dimensionality)
- [**3. EDA**](#3-eda) (5 videos)
  - [Describing data](#describing-data)
  - [Finding correlations](#finding-correlations)
  - [Visualizing correlations](#visualizing-correlations)
  - [Multivariable visualizations](#multivariable-visualizations)
  - [Building visualizations with Streamlit](#building-visualizations-with-streamlit)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Getting started with Python for data science: Code challenges](https://www.linkedin.com/learning/level-up-python-data-acquisitions-prep-and-eda/getting-started-with-python-for-data-science-code-challenges?u=76281980)

> [!transcript]- Transcript
>
> **[0:04](https://www.linkedin.com/learning/level-up-python-data-acquisitions-prep-and-eda/getting-started-with-python-for-data-science-code-challenges?u=76281980&t=4)** - [Seth] The [Data Science](../../Topics/Data%20Science.md) world is an exciting place with state-of-the-art models coming out at an unprecedented pace. We can't forget about what makes data science so valuable, the actual data. No matter what models you end up using, acquiring and prepping your data is always going to be the first step in the data science process. No model can make up for poor data. After you have your data it's tempting to dive straight into modeling, but you always need to do some simple exploratory analyses first. Forgetting this simple step can create problems once unsavory data hits your models. In this course you'll see challenges from the beginning phases of the data science workflow, through [Data Acquisition](../../Skills/Software%20Development/Data%20Acquisition.md), [Data Preparation](../../Skills/Data%20Science/Data%20Preparation.md), and exploratory data analysis. You'll have challenges in grabbing data from websites. You'll need to figure out ways to clean tricky text data with regular expressions, and extract specific variables that you need. Even your visualization skills will be tested. I'm Seth Berry, and I'm thrilled to give you some ideas about challenges that you'll face before you get to your models and then show you how I might solve those problems. I'm sure that you'll even figure out different ways of doing things that I present, and I'd love for you to be able to share your ideas with everyone. In the end, that's the real beauty of the data science data prep process. We can take the same ideas, tasks, and challenges, and solve them in different ways. Ultimately, we have the opportunity to share what we've learned with others.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Science](../../Topics/Data%20Science.md) (5), [Data Acquisition](../../Skills/Software%20Development/Data%20Acquisition.md) (1), [Data Preparation](../../Skills/Data%20Science/Data%20Preparation.md) (1)
> **CLI Commands:** make (1)
> **Definitions:** is an  (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [seth] (1)

#### [Using GitHub Codespaces with this course](https://www.linkedin.com/learning/level-up-python-data-acquisitions-prep-and-eda/using-github-codespaces-with-this-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/level-up-python-data-acquisitions-prep-and-eda/using-github-codespaces-with-this-course?u=76281980&t=0)** - This is Ray Villalobos, Senior Staff Instructor at [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning, and I'm going to show you how to work with LinkedIn Learning courses using [GitHub](../../Skills/Software%20Development/GitHub.md) [Codespaces](../../Skills/Software%20Development/Codespaces.md). Codespaces is a code editor in the cloud with the full power of Visual Studio Code. It allows for real world hands on practice that mirrors [Software Development](../../Topics/Software%20Development.md) in the workplace. This course was created using GitHub Codespaces. Using Codespaces, you have everything you need to get going without needing complex installations or build tools. One click, and you're ready to go. To practice along with the course, you can create a Codespace directly from the course overview page. First, click open next to GitHub Codespaces. If you're already logged in, you'll be directed to a Getting Started with GitHub Codespaces page. If you're not logged in, you'll be prompted to log in or create a free GitHub account first. From this page, click on create codespace on main. The first time you open up a codespace, it might take a few minutes to create the virtual machine. Once it's done, you'll enter the code editor environment. If you're familiar with Visual Studio Code, this is a special version of that editor running on GitHub's servers. Your course can have one or more extensions pre-installed, based on the course you're taking. Those can be found in the extensions panel. Because this is a browser, it's easy to inadvertently close the browser window and lose the editor. If you do that, don't panic.
>
> **[1:33](https://www.linkedin.com/learning/level-up-python-data-acquisitions-prep-and-eda/using-github-codespaces-with-this-course?u=76281980&t=93)** Codespaces saves everything you're doing on a virtual machine. You can always get the codespace back for this repo right here. Notice that it even remembered that I had opened the extensions panel. An alternate way to create a codespace is directly from one of our course's GitHub repositories. From here, click code and then create codespace on main. You can also restart a previous codespace from this location. GitHub Codespaces is compatible on devices with smaller screen sizes, like mobile phones or tablets, but it is optimized for larger screens, so we recommend that you practice along with this course on a laptop or desktop computer. The sample course I'm looking at is what is known as a flat branch repository. You can tell because there's a single branch when you click on the branch icon on the status bar. You can also tell because there are different folders for each of the videos in the course. This is a sample of what a multi branch repository looks like, which is more common when you're working with web frameworks. If you go to the branch icon on the status bar, you can see that there's more than one branch. You can switch to the different branches using this menu. The branches are named with the chapter and the video number you're watching. If you see a B at the end of the branch, that's how the code looked at the beginning. If you see an E, that's how the code looked at the end. Let's switch to how the code looked
>
> **[3:07](https://www.linkedin.com/learning/level-up-python-data-acquisitions-prep-and-eda/using-github-codespaces-with-this-course?u=76281980&t=187)** on chapter two and the third video. I'll choose the beginning branch. As you work through our course, you might make some changes on a branch. I'm going to make a minor edit on the index.[HTML](../../Skills/Web%20Development/HTML.md) file right here. I'm going to go ahead and save that, and you can see that I've modified this file, because there's an M right here and the branch name now has an asterisk on it. If I try to switch to another branch that causes major changes, like say, 07_03e, I may see a dialog box like this. If you don't care about saving your changes, you can simply hit the force checkout button. It will let you switch to that branch. You can then choose to discard the changes on this file. Your instructor will let you know what the folder structure is for your course. Forking lets you create your own copy of the repository on your account, so that you can keep any changes that you've made, even if you've deleted the codespace. To create your own fork, you can click on the fork button on the repository. I'm going to hit create fork. I'm going to have my own copy of this repository, and if I want to, I can start a new codespace on that fork. This fork version is almost exactly
>
> **[4:41](https://www.linkedin.com/learning/level-up-python-data-acquisitions-prep-and-eda/using-github-codespaces-with-this-course?u=76281980&t=281)** like the original repository, but it will let you push your own changes. Notice that the URL of the repository is slightly different. Let's go ahead and make a simple change to this file right here.
>
> **[5:00](https://www.linkedin.com/learning/level-up-python-data-acquisitions-prep-and-eda/using-github-codespaces-with-this-course?u=76281980&t=300)** I'm going to save it. You'll note that there is an M right here, as well as an asterisk on this branch. In the source control panel, you can also see a one for the change that we just made. Let's go ahead and try to commit this change. I'm going to hit the commit button, and I'll ask it to go ahead and stage the changes, and then I'm going to hit this button here. I'll hit okay. You can also let it go ahead and run get [Fetch](../../Skills/Web%20Development/Fetch.md). That way it'll automatically sync with your forked repo. Now that change will be stored in your own version of this repository. Don't worry if you forget to fork a repo and then try to push changes. Code spaces will also ask you if you want to create a fork automatically. Look for additional core specific tips from the instructor. Now, let's get back to the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GitHub](../../Skills/Software%20Development/GitHub.md) (8), [Codespaces](../../Skills/Software%20Development/Codespaces.md) (8), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (2), [Software Development](../../Topics/Software%20Development.md) (1), [HTML](../../Skills/Web%20Development/HTML.md) (1)
> **Tools:** github (8), visual studio (2)
> **UI Navigation:** switch to (4), click on (3), go to (1)
> **Definitions:** is a  (4), known as (1), is an  (1)
> **CLI Commands:** make (3)
> **File Paths:** index.html (1)
> **Env Vars:** url (1)
> **Warnings:** note that (1)


### 1. Data Acquisition

[↑ Back to Table of Contents](#table-of-contents)

#### [Scraping tables](https://www.linkedin.com/learning/level-up-python-data-acquisitions-prep-and-eda/scraping-tables?u=76281980)

> [!transcript]- Transcript
>
> **[0:04](https://www.linkedin.com/learning/level-up-python-data-acquisitions-prep-and-eda/scraping-tables?u=76281980&t=4)** - [Instructor] Welcome to scraping tables. You already know that copying and pasting data from the web into a spreadsheet is bad [Data Science](../../Topics/Data%20Science.md). And you also probably already know how easy [pandas](../../Skills/Software%20Development/Pandas%20(Software).md) makes it to pull [HTML](../../Skills/Web%20Development/HTML.md) tables directly in as a DataFrame. So let's check out this page. We can see that we have three tables and we are particularly interested in the last table, the table containing information about the largest states. It would be really easy to access this table through the index, but we want to try to do something a little bit different. So your challenge is to go to this link that contains these tables, pull the "Largest State" table into pandas and create a single DataFrame. But I want you to do it without using any magic numbers. So I want you to take a few minutes to think about how you're going to do this. Code it up, and I'll see you back here in just a couple minutes. (playful music) Welcome back. How'd it go for you? I hope it went well, but I'd love to show you how I did this challenge. So the first thing I'll do is I will import pandas. I'm going to create an object for the link and then I will use read_html, pass the table_link in. I can use match to get the single table that I'm interested in, but we can see that it's still on a list. So we will pop it out. And now we have a single DataFrame, all without using any magic numbers.
>
> **[1:39](https://www.linkedin.com/learning/level-up-python-data-acquisitions-prep-and-eda/scraping-tables?u=76281980&t=99)** A great deal of the work that we'll do is built upon finding patterns. Just remember that if a pattern is there, we can find it and use it to help get our data into shape. The world of scraping is a fun and exciting place. And even though it's fun, just keep in mind that you should do it as safely as possible.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) (3), [Data Science](../../Topics/Data%20Science.md) (1), [HTML](../../Skills/Web%20Development/HTML.md) (1)
> **Code Identifiers:** read_html (1), table_link (1)
> **CLI Commands:** find (1)
> **Env Vars:** html (1)
> **Cross-References:** in the last (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Warnings:** keep in mind (1)

#### [Finding CSS selectors](https://www.linkedin.com/learning/level-up-python-data-acquisitions-prep-and-eda/finding-css-selectors?u=76281980)

> [!transcript]- Transcript
>
> **[0:04](https://www.linkedin.com/learning/level-up-python-data-acquisitions-prep-and-eda/finding-css-selectors?u=76281980&t=4)** - [Instructor] Welcome to finding CSS selectors. Using [pandas](../../Skills/Software%20Development/Pandas%20(Software).md) to pull tables is pretty easy. It goes and finds the table [HTML](../../Skills/Web%20Development/HTML.md) tag and brings 'em all in, just for you to sort through the clutter. Sometimes though, we might want to use CSS selectors to select certain information. You'll hopefully find CSS selectors whenever you inspect an element on a webpage. Let's take a look at this page of board members. Your goal is to get the names and titles for each person on the board. Go to this page and you'll find all the board members. Get the name and title, and get all of that data into a pandas DataFrame. And just as a general way to make this a little trickier, find those CSS selectors without using any selector gadget type tools. Look through the inspect element and find them on your own. Sometimes it's helpful to get very specific when you're looking for CSS selectors, so don't be afraid to really narrow down your search. Take a few minutes, see where you can get, and I'll meet you back here. (lively music) Welcome back here, here's hoping this wasn't too boarding. I'm going to take a minute to show you my code. And as always, if you have done things a little bit differently, we would all love to see it. We can all learn by looking at other people's solutions.
>
> **[1:37](https://www.linkedin.com/learning/level-up-python-data-acquisitions-prep-and-eda/finding-css-selectors?u=76281980&t=97)** I'm going to take the following packages and import them. BeautifulSoup from BS4, pandas, and requests. I will create an object for my base_link, pass that off to requests, specifically, it's a get request, and I'll read that content in. Now you can see here that in my soup object, you'll see that there's a class called "card-name". So I'll use .card-name. And whenever I am reading in things from the internet, I always like to look at how many things I pulled. I know on that page there are six board members and I should see six of them, and I do. I'll do the same thing with their roles, look at the length that I achieve, which is also six. So with those names and titles in hand, I can create a list of results and then just iterate over those, pulling out the text, and then putting them into the results set. After that, I will concatenate that data into one unified pandas DataFrame, and now we can look at our results. And there we have our six board members. We have their names and their roles. Whenever you're scraping data, there are always options as to how you find what you need. So while there are a lot of options out there, CSS selectors provide an easy way to string together items into something that you can pull, and then you can pass that off to somebody else.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) (4), [HTML](../../Skills/Web%20Development/HTML.md) (1)
> **Env Vars:** css (6), html (1), bs4 (1)
> **CLI Commands:** find (5), make (1)
> **Code Identifiers:** base_link (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (lively music) (1)

#### [Scraping text](https://www.linkedin.com/learning/level-up-python-data-acquisitions-prep-and-eda/scraping-text?u=76281980)

> [!transcript]- Transcript
>
> **[0:04](https://www.linkedin.com/learning/level-up-python-data-acquisitions-prep-and-eda/scraping-text?u=76281980&t=4)** - [Instructor] Welcome to Scraping Text. In our Finding CSS Selectors Challenge, you put together some CSS selectors to pull information from the H+ Sport's director's page. Unfortunately, those were pretty easy pieces of information to find. When CSS is nicely structured, our lives continue to be easy. So these are all things that are pretty easy to scrape. But let's look at this new page. This page is a little bit trickier. We have an element at the bottom that should be in the table, but it isn't. That element isn't very well named either. While this might look easy at first, we're going to need to program a solution to make this data usable. Your challenge is to go to this page, and what I want you to do is pull down "Louisiana, the Rainiest State" and combine it with the table that's already on that page. Once those pieces of information are combined, you need to make them into a usable form. Take some time to look at the elements on that page and think about what CSS selectors might be useful for grabbing only the required information. I'll wait here, and I'll see you when you get back. And welcome back. So while that page design is pretty grim, the programming here should make you feel pretty happy. So I want to show you
>
> **[1:35](https://www.linkedin.com/learning/level-up-python-data-acquisitions-prep-and-eda/scraping-text?u=76281980&t=95)** how I typically handle situations like this. And, as always, I would love to see what you came up with. We're going to start by importing a whole mess of things, BeautifulSoup, [pandas](../../Skills/Software%20Development/Pandas%20(Software).md) and requests. We have our page_link and we can make a get request to the page link and read that in with BeautifulSoup. The real magic here with our CSS selector comes in p:last-of-type. This p:last-of-type is going to get the last p element on the page, which is the exact thing that we're looking for. You'll notice when you read that in that it's got a little extra white space that we'll strip out. And this should leave us a very nicely-formatted "Louisiana, the Rainiest state." Now what I want to do is I want to put this into a pandas dataframe, because I need to also read in my page_link again and get the table that matches the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) capital. Although there's only one table, we're just going to make it easy and continue using good programming practices to pull explicitly what we want. We'll pop that one table out. And we're also then going to concatenate our original table with the state data. I want to rename those columns to info and state. And finally, I want to pivot that data. And while we're close, if we take a look at pivot, we see what happens with our data.
>
> **[3:08](https://www.linkedin.com/learning/level-up-python-data-acquisitions-prep-and-eda/scraping-text?u=76281980&t=188)** We see a whole lot of missing elements. So what we need to do is we need to fill those missing elements in and drop out all the unnecessary rows giving us just one row of information that is our complete information. You can never count on beautifully formatted [HTML](../../Skills/Web%20Development/HTML.md) or CSS. When challenged with poor site design, always remember that you can use [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) to parse the nonsense into something useful.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) (2), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1), [HTML](../../Skills/Web%20Development/HTML.md) (1), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **CLI Commands:** make (5), find (1), python (1)
> **Env Vars:** css (6), html (1)
> **Code Identifiers:** page_link (2)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Using LLMs to scrape data](https://www.linkedin.com/learning/level-up-python-data-acquisitions-prep-and-eda/using-llms-to-scrape-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:04](https://www.linkedin.com/learning/level-up-python-data-acquisitions-prep-and-eda/using-llms-to-scrape-data?u=76281980&t=4)** - [Instructor] Welcome to using LLMs to Scrape Data. Scraping data, while fun and useful, can be challenging when you're first starting out. Aside from the [HTML](../../Skills/Web%20Development/HTML.md), you're faced with decisions about which functions from beautiful soup are best to use. Sometimes, a little bit of assistance can be helpful, and that is where [Copilot](../../Skills/Cloud%20Computing/Microsoft%20Copilot.md) and [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md) can help to reduce our time when fighting web pages. While I don't have a challenge for you in this video, I would like to show you how you can use Copilot and ChatGPT to overcome some initial challenges to scraping data. So what we're going to do is determine how much help those assistants can actually offer us. Let's first start by going to ChatGPT. If you recall, we had previously scraped this page, specifically getting this table into a [pandas](../../Skills/Software%20Development/Pandas%20(Software).md) data frame. Using this link, let's see how much assistance ChatGPT can offer us. I'm going to supply a simple prompt. Can you help to scrape the table on this page and we'll just go ahead and paste it there.
>
> **[1:33](https://www.linkedin.com/learning/level-up-python-data-acquisitions-prep-and-eda/using-llms-to-scrape-data?u=76281980&t=93)** So it looks like it's spitting out a fair amount of stuff. It looks like some of this could work even. Hmm, it seems like it's maybe getting there. Maybe getting there. Maybe we should go back and recall what we had to do to scrape it the first time. Let's navigate over to our VS Code. Previously, we had made the request, read in the content. We had specifically gotten the state name to be into the table. If we run all of this, we can see what we are left with. Fantastic. We have the bird, the capital. We have all of the information that we could hope to get. If we take the suggestions of ChatGPT, let's see what we can start by getting if we just copy and paste its code. We'll try the first chunk of code here and we'll just pop it in the terminal to see what it does. Fantastic. Let's navigate back and check some of the other code that it has. So it's going to bring in a Pandas DataFrame and we'll see what tables provides for us. While it's certainly got the information for us as seen in the terminal, we can see that it hasn't been transposed like it has been in video three. Let's see if it has any other suggestions here
>
> **[3:07](https://www.linkedin.com/learning/level-up-python-data-acquisitions-prep-and-eda/using-llms-to-scrape-data?u=76281980&t=187)** about how we may want to handle this. Unfortunately, it doesn't. So no matter what, we are left to take care of this. So let's try and see what Copilot could perhaps offer us. Can you scrape this page? We'll have to go back and get the link. We'll copy this. We will paste it into here. I'm going to specifically tell it to use pandas and produce a transposed table, and let's see what it generates for us. Let's accept this and let's run it, and we will find out what it offers us and we'll just throw this in the terminal down below just to see how close we get. It actually did a pretty good job for us. Now, some of that may be that it's drawing on some of our previous work. You'll notice that it also has not put the variable names in the appropriate spot, but it is far better right out of the gate than what ChatGPT has to offer for us. So whether you're using ChatGPT, Copilot, or something else, you'll never probably be able to get away from the effort of finding the correct elements within a page yourself. Code assistance can though help point you in the right direction for taking HTML elements and getting them into the proper format,
>
> **[4:42](https://www.linkedin.com/learning/level-up-python-data-acquisitions-prep-and-eda/using-llms-to-scrape-data?u=76281980&t=282)** so that you can get your data and move on with your day.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md) (7), [Copilot](../../Skills/Cloud%20Computing/Microsoft%20Copilot.md) (4), [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) (3), [HTML](../../Skills/Web%20Development/HTML.md) (2)
> **Tools:** terminal (3), vs code (1)
> **Env Vars:** html (2)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### [Finding APIs](https://www.linkedin.com/learning/level-up-python-data-acquisitions-prep-and-eda/finding-apis?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/level-up-python-data-acquisitions-prep-and-eda/finding-apis?u=76281980&t=3)** - Welcome to finding APIs. You already know how to register for an API key and pull data but what about pulling data from an API that you can't see? Many websites use internal APIs to populate tables and you can harness that power. You'll find a tremendous amount of information in the network tab of your browser's inspection menu. Let's take a look at this table. You'll see that this is a [JavaScript](../../Skills/Software%20Development/JavaScript.md) data table and with the JavaScript data table, you often see some kind of loading icon to indicate that it's polling the data. So many people think they need to turn to [Selenium](../../Skills/Software%20Development/Selenium.md) when dealing with this type of data structure. Instead of going through that hassle let's just do some detective work. In this challenge, you're going to need to look into the network structure, find the appropriate API call for the table, call the API, and finally get the resulting [JSON](../../Skills/Web%20Development/JSON.md) object into a [pandas](../../Skills/Software%20Development/Pandas%20(Software).md) data frame. So, take a minute and dive into the wonderful world of the network and come back when you're ready. Welcome back. I hope it went okay for you and I'd love to show you how I did it. And really the toughest part is looking through the network tab to find the proper API endpoint. Once you have it, the code is pretty straightforward. I'm going to start by importing pandas and requests. And after that I'm going to make a get request
>
> **[1:40](https://www.linkedin.com/learning/level-up-python-data-acquisitions-prep-and-eda/finding-apis?u=76281980&t=100)** to this JSON object directly. And again, we found that right from the pages source in the network tab. After that, I can read that JSON object in using pandas from dict. A JSON object is just a dictionary which is a beautiful and easy thing to do. After that, I'm going to take my converted state data. I will convert it to a list, and I will create three columns out of that list, rank, state, and rainfall. We'll run that and we'll look at our final result and we have this wonderfully formatted and named table. Being able to pull your own data is the ultimate [Data Science](../../Topics/Data%20Science.md) power. Now that you know how to find internal APIs you never know what interesting things you might find if you just start looking.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JSON](../../Skills/Web%20Development/JSON.md) (4), [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) (3), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (2), [Selenium](../../Skills/Software%20Development/Selenium.md) (1), [Data Science](../../Topics/Data%20Science.md) (1)
> **Env Vars:** api (5), json (4)
> **CLI Commands:** find (5), make (1)
> **Definitions:** is a  (2)
> **Speakers:** - welcome (1)
> **Non-Speech:** (upbeat music) (1)

#### [Getting JSON into pandas](https://www.linkedin.com/learning/level-up-python-data-acquisitions-prep-and-eda/getting-json-into-pandas?u=76281980)

> [!transcript]- Transcript
>
> **[0:04](https://www.linkedin.com/learning/level-up-python-data-acquisitions-prep-and-eda/getting-json-into-pandas?u=76281980&t=4)** - [Instructor] Welcome to iterating API calls websites love to pass along data through [JSON](../../Skills/Web%20Development/JSON.md). The simple dictionary based JSON object is usually easy to read in the [PANDAS](../../Skills/Software%20Development/Pandas%20(Software).md). When we have just one API call to make. Life is easy. What happens though when we need to call the same endpoint but over multiple pieces of information? In this challenge I want you to use Pixelford's image endpoint to pull the first 20 images and I want all of the results to be combined into a single PANDAS data frame. So take a few minutes and see where you can get and when I come back hopefully you've got a nicely engineered solution. Welcome back. I hope you've defeated yet another JSON object. Let me show you how I completed this task. The first thing I'm going to do is to import PANDAS and requests. I'll specify my base link which is image/ID/ the last space after the slash is going to be awaiting our input. I'm going to hold a blank list to dump our results into and then I'm going to iterate over a range of one through 21. There is no image ID zero so we'll start at one. And within our for loop I will paste our base link
>
> **[1:41](https://www.linkedin.com/learning/level-up-python-data-acquisitions-prep-and-eda/getting-json-into-pandas?u=76281980&t=101)** to a string of that number so 1, 2 all the way up to 21. I will then pass that to a get request pull in the JSON object and then like we've done before take that object from a dictionary and put it into a PANDAS data frame. At the end I will concatenate this data into a single data frame. It'll take just a second to run after it does. We can look at our beautifully formatted PANDAS data frame from 20 API calls. When working with the JSON spectrum remember that you're going to encounter a level of structure and a level of iteration that can often make life difficult. Once you break down those bigger objects into smaller pieces you'll find that getting the data into shape isn't really so scary.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JSON](../../Skills/Web%20Development/JSON.md) (5), [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) (5)
> **Env Vars:** json (5), pandas (5), api (3)
> **CLI Commands:** make (2), find (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 2. Data Prep

[↑ Back to Table of Contents](#table-of-contents)

#### [Constructing regular expressions](https://www.linkedin.com/learning/level-up-python-data-acquisitions-prep-and-eda/constructing-regular-expressions?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/level-up-python-data-acquisitions-prep-and-eda/constructing-regular-expressions?u=76281980&t=3)** - [Instructor] Welcome to constructing regular expressions. It's easy to argue that regular expressions are the king of all [Data Cleaning](../../Skills/Data%20Science/Data%20Cleaning.md) methods. And whether you call them RegEx or RegEx isn't important. What is important though is the power and flexibility you get from using regular expressions to clean and explore your challenge. In this video, I'd like you to construct a series of regular expressions to convert these strings to numbers. You'll need to put them into a [pandas](../../Skills/Software%20Development/Pandas%20(Software).md) DataFrame, use regular expressions to clean them, and finally, they need to end up as numbers. As you take a few minutes to solve this problem, know that it is completely okay to do this with a few steps and that a look around is going to be very helpful. How'd you do? I'd love to show you how I managed to solve this problem. Since we're in the regular expression world, remember that there won't be just one way of doing this. If you came up with something different than I did, we'd love to see it. So as I navigate to my code, I want to start by just reading in the data and creating it. So now that that's out of the way, we can highlight what the problem is with this specific variable. If we try to take a mean, it's obviously not going to work but what should hopefully get us a little bit closer is to start by replacing the dollar sign. So that's the first hurdle that we have to clear.
>
> **[1:38](https://www.linkedin.com/learning/level-up-python-data-acquisitions-prep-and-eda/constructing-regular-expressions?u=76281980&t=98)** And you'll see we do that with the STR replace method in pandas. We specify what the pattern is and then we specify what the replacement is. So after that is replaced, we should be one step closer to making our dollars values. Now the real magic of regular expressions comes right here. When we have this look around, this look around is going to do a lot of work. We're going to specify that we're going to look for a comma and we're going to find any comma that is followed by exactly two numbers in the range of zero through nine at the very end of the string. After that, we will replace it with nothing. So let's run this line of code and see what happens at the end. And now when we look at our dollar data, we see that there had been a pesky comma that was removed from our one comma zero zero. Finally, we can replace all of the remaining commas, convert that dollar values to a float and finally run the mean to see that we are indeed dealing with numeric values now. So this was fantastic work and like all regular expression work, you'll always run into problems.
>
> **[3:12](https://www.linkedin.com/learning/level-up-python-data-acquisitions-prep-and-eda/constructing-regular-expressions?u=76281980&t=192)** As you stick with it, and you do it long enough, you won't be confused for too long, and you'll be finding more and more complex patterns.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) (2), [Data Cleaning](../../Skills/Data%20Science/Data%20Cleaning.md) (1)
> **CLI Commands:** find (1)
> **Env Vars:** str (1)
> **UI Navigation:** navigate to (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Cleaning text](https://www.linkedin.com/learning/level-up-python-data-acquisitions-prep-and-eda/cleaning-text?u=76281980)

> [!transcript]- Transcript
>
> **[0:04](https://www.linkedin.com/learning/level-up-python-data-acquisitions-prep-and-eda/cleaning-text?u=76281980&t=4)** - [Instructor] Welcome to Cleaning Text Another Regular Expression Challenge. So you've already constructed some fairly complex regular expressions to clean up some text. Whenever you're scraping text, you can usually count on running into problems. So you see texts like this all the time where we have the \ns coming into the text. We see superfluous spaces littered throughout text. We also see [HTML](../../Skills/Web%20Development/HTML.md) tags frequently coming into play. Probably a more challenging endeavor is when we have spaces that disappear between words. And this usually happens when you're scraping data from the web. So we can see these first two are clearly problems. The third one, BeautifulSoup isn't a mistake but would present some challenges for splitting that into two parts. Your challenge is to take these strings, you need to get them into a [pandas](../../Skills/Software%20Development/Pandas%20(Software).md) dataframe, and then, finally, you want to split those first two strings into separate words. And as you can see, the third string should remain unchanged. Don't overthink this one. Look at the pattern and think about how you can break those run-on words apart. As a friendly hint, you might want to use capturing groups and back references. Take a few minutes and see where you can get with this challenge. Now that we're back, I want to show you my solution.
>
> **[1:45](https://www.linkedin.com/learning/level-up-python-data-acquisitions-prep-and-eda/cleaning-text?u=76281980&t=105)** If you come up with something different, throw it in the comments. We'd love to take a look at it. So the first thing I'll do is I will import pandas and create my set of strings. I'll throw those strings into a pandas dataframe. And finally, I will use some string replacement. So I'll use the string replace method. The first thing I will do is specify a pattern. The pattern here is actually pretty simple. We have any lowercase a to z followed by any uppercase A to Z. You'll notice that both of those sets are wrapped in parentheses. Those parentheses indicate that these are capturing groups. When we have a capturing group, we can use back references to those groups to do whatever we want with those groups. The replacement here, \\1 is a back reference to the first capturing group that we have, a to z lowercase. We can then include a space. That space will be an actual space. And after that actual space, we will put the second capturing group, capital A through capital Z. We can run this code and see that all of our strings have been split appropriately. usePython becomes two words. pandasForLife, becomes three words. And [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) is helpful is still three words. While programmers and data scientists alike will repeat,
>
> **[3:20](https://www.linkedin.com/learning/level-up-python-data-acquisitions-prep-and-eda/cleaning-text?u=76281980&t=200)** if you have a problem that requires a regular expression, you now have two problems, you can never underestimate how useful they are for real-world data situations.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) (3), [HTML](../../Skills/Web%20Development/HTML.md) (1), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **Code Identifiers:** usepython (1), pandasforlife (1)
> **CLI Commands:** python (1)
> **Env Vars:** html (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Selecting variables](https://www.linkedin.com/learning/level-up-python-data-acquisitions-prep-and-eda/selecting-variables?u=76281980)

> [!transcript]- Transcript
>
> **[0:04](https://www.linkedin.com/learning/level-up-python-data-acquisitions-prep-and-eda/selecting-variables?u=76281980&t=4)** - [Instructor] Welcome to Selecting Variables. Programming languages make it easy to toss any variable you want into a model. And the temptation is always great to put all of your variables into a model, as predictors, but you should always be asking yourself if that is a good idea. There are always variables in data that you may not want coming into your model, and we should seek to avoid it. The challenge is pretty simple. You need to select the following variables, age, prior job count, proportion, 401k, starting salary, and days to separate. The wrinkle to this challenge though, is that I want you to find those variables without using the explicit names within a [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) DataFrame. Take a few minutes, think through a possible solution, and see what you can bring together. (gentle music) I hope that was as fun for you as it was for me. And now that we're back, I want to show you how I cobbled together a solution. And as always, if you came up with something different, throw it out there so we can all learn from it. As I navigate to my code, the first thing I'm going to do is I'm always going to read in my data, and then I'm going to look at my data types. And you can see that we have int64, float64, and object. So we can take that information
>
> **[1:40](https://www.linkedin.com/learning/level-up-python-data-acquisitions-prep-and-eda/selecting-variables?u=76281980&t=100)** and we can specifically target the columns that contain those two types of data, float64 and data_types. After we run this line of code, we can then use those numeric columns to pull out our specific variables that we're looking for. And you'll notice here that we have separated_ ny, and we're dropping it. If we think about what the nature of that variable likely is, it's probably a binary indicator. So while we could argue that it is represented as numeric, we should probably treat it as a categorical variable. We'll now subset those variables through the index. We'll take a final look at our numeric_employees dtypes, and we'll see that we have all of the variables that we hope to select out of there. Whenever we get into the modeling phase, we might be tempted to just throw all of our variables in and let [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) sort it out. For us to be ultimately effective as data scientists, we need to think reasonably about what variables are going into our models.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) (1), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **CLI Commands:** make (1), find (1), python (1)
> **Code Identifiers:** data_types (1), numeric_employees (1)
> **UI Navigation:** select the (1), navigate to (1)
> **Definitions:** is a  (1)
> **Best Practices:** you should always (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (gentle music) (1)

#### [Encoding categorical variables](https://www.linkedin.com/learning/level-up-python-data-acquisitions-prep-and-eda/encoding-categorical-variables?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/level-up-python-data-acquisitions-prep-and-eda/encoding-categorical-variables?u=76281980&t=3)** - [Instructor] Welcome to encoding categorical variables. Categorical variables represent potential interpretation problems for most of our models. We can see the result if we put a categorical variable into our model. You'll notice that we're missing one of the levels of that department variable. So, while this simple contrast coding is fine, it offers some limited explanatory power for that variable. It's also a point of confusion for many people when they first encounter results. Fortunately, converting categorical variables to dummy variables is pretty easy. For this challenge, you need to do a few things. First, find the categorical variables. After you have identified those categorical variables, you need to encode them using one-hot encoding. Finally, you need to create your own one-hot encoder function. So, the challenge is a little bit harder by not using preexisting packages to do this work. Take a few minutes, think about how you want to spread those variables out and get them into new columns. (upbeat bass music)
>
> **[1:25](https://www.linkedin.com/learning/level-up-python-data-acquisitions-prep-and-eda/encoding-categorical-variables?u=76281980&t=85)** - [Instructor] Welcome back. If you've got a minute, I'd like to show you how I encoded those categorical variables without using sklearn. As I open up my code, I'll read in the data, and the first thing I'm going to do, is to create a row_id within my data. This will become apparent as to why I'm doing this in just a little while. The next thing I'm going to do, is I am going to convert my department column into a wide pivoted table. So, if we run this, I can show you what this looks like. You can see that if we have pivoted those levels out to brand new columns, and then what I'm going to do is I am going to fill all of those NaN's with zero, and just, again, to show you what this was going to produce, I'll run that, and you can see everything that used to be an NaN is now a zero. I'm going to do the exact same thing for job level. The next thing I'm going to do, is I'm going to create a quick function called value_encoder, where I will be able to pass in my data and a specific variable, and then I will locate every variable that is not a zero, and then I will set that to be a one. Next, I'll create a for loop, a nested for loop in fact, where I will pass in department_wide and job_level_wide,
>
> **[3:00](https://www.linkedin.com/learning/level-up-python-data-acquisitions-prep-and-eda/encoding-categorical-variables?u=76281980&t=180)** my two new data sets, and then I will also produce the column names for both of those data sets and run my value_encoder function over those two pieces of data. Finally, with those two brand new data sets in hand, I will join them back to my original data frame on row_id. That variable that we created at the very beginning becomes critical here. One-hot encoding is just one way to include categorical variables within your model. No matter how you treat those variables, you should always think very carefully about what is going on in your model, and how that influences the interpretation.

> [!info]- Semantic Content
>
> **Code Identifiers:** row_id (2), value_encoder (2), department_wide (1), job_level_wide (1)
> **Speakers:** - [instructor] (2)
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Best Practices:** you should always (1)
> **Non-Speech:** (upbeat bass music) (1)

#### [Scaling variables](https://www.linkedin.com/learning/level-up-python-data-acquisitions-prep-and-eda/scaling-variables?u=76281980)

> [!transcript]- Transcript
>
> **[0:04](https://www.linkedin.com/learning/level-up-python-data-acquisitions-prep-and-eda/scaling-variables?u=76281980&t=4)** - [Instructor] Welcome to Scaling Variables. Preparing your data for modeling is one of the most important steps of the [Data Science](../../Topics/Data%20Science.md) workflow. For many models, scaling your variables is a critical task. And just for an example, here are some models that may need scaling. Obviously, this is not all of them, but a small subset of what requires nicely-scaled variables before we go into modeling. In this challenge, your goal is to perform z-score normalization. The first step is to identify the mean and the standard deviation of the predictor variable. And then after you've found those, you can perform your z-score standardization. You could do this with existing functions, but make this a little bit more interesting by writing your own function to handle this task. Take a few minutes to get some of your data normalized, and I'll see you back here. (intriguing electronic music) That wasn't too hard, was it? And I'll bet your solution isn't too different than mine. So let's go look at how I did this. I'll start by reading in my data, and I'm going to define a function called z_score_maker, where I will pass in a variable, I will find the mean of that variable, the standard deviation of that variable, and then the very simple z-score calculation. I'll subtract the mean from the variable and divide that by the variable's standard deviation.
>
> **[1:40](https://www.linkedin.com/learning/level-up-python-data-acquisitions-prep-and-eda/scaling-variables?u=76281980&t=100)** So as a quick example, I'll run my function, and then we can run z_score_maker on employees age. We'll run that, and we'll see that we have standardized variables. So whether you hear it called standardization, feature scaling, or something else, getting your values into a consistent range will provide your models with much better input. The more your models like the data, the better your models will perform.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Science](../../Topics/Data%20Science.md) (1)
> **CLI Commands:** make (1), find (1)
> **Code Identifiers:** z_score_maker (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (intriguing electronic music) (1)

#### [Reducing dimensionality](https://www.linkedin.com/learning/level-up-python-data-acquisitions-prep-and-eda/reducing-dimensionality?u=76281980)

> [!transcript]- Transcript
>
> **[0:04](https://www.linkedin.com/learning/level-up-python-data-acquisitions-prep-and-eda/reducing-dimensionality?u=76281980&t=4)** - Welcome to Reducing Dimensionality. Whenever we have a lot of potential features in our data, we might have trouble deciding which variables we ultimately want to include in our model. This gets even trickier when we consider how many traditional models don't handle correlated features very well. What if we could take away the worry of multi linearity while reducing the number of variables that ultimately make it into our model? In this challenge, we need to identify numeric variables as potential predictor variables. After we've found those, we need to perform some matrix factorization technique to those variables. And then we ultimately need to decide a reasonable number of reduced variables to retain. Since there are more than a few matrix factorization techniques out there, think about the kind of variables that we have, and what may be easy to do. Use the next few minutes to think about which method you want to use, and get that feature set reduced down to a more manageable set. (energetic music plays) Welcome back. Hopefully, you've got your feature set in a better place for modeling. I'd like to take a minute to show you what I did, and as always, I'm curious to see how you tackled this problem. I'm going to start by importing a whole mess of packages;
>
> **[1:41](https://www.linkedin.com/learning/level-up-python-data-acquisitions-prep-and-eda/reducing-dimensionality?u=76281980&t=101)** matplotlib, numpy, [pandas](../../Skills/Software%20Development/Pandas%20(Software).md) seaborn, and sklearn. And specifically out of SK learn, I want to grab PCA, for principal components analysis. I'll bring those in, read in my data take a quick look at my data types, and I'll see several numeric variables that I want to hold out of this data. And the next lines of code should look pretty familiar. I'm just keeping my numeric data. And then I'm going to drop a few. I'm going to drop 'days to separate,' because that may be an interesting variable to me for an outcome variable. I'm also going to drop 'separated ny.' Because it's more of a categorical variable than a true numeric. After I run that line of code to drop those variables, I will run my principal components analysis with four components. Since I have four candidate variables remaining, our PCA should get four components out of it. I'll create the model. I will fit the model, and then I will finally look at my explained variance ratio. So that's not very interesting. But what I would rather do instead is look at that in visual form. To do that, I'm going to create a pandas data frame where I take my component number, component 1, 2, 3, and 4. I will get that explained variance ratio,
>
> **[3:16](https://www.linkedin.com/learning/level-up-python-data-acquisitions-prep-and-eda/reducing-dimensionality?u=76281980&t=196)** the eigenvalues values, and I will plot all of that.
>
> **[3:24](https://www.linkedin.com/learning/level-up-python-data-acquisitions-prep-and-eda/reducing-dimensionality?u=76281980&t=204)** This line of code will produce a plot. That plot will give you a really clear indication of the proper number of variables, components to retain. I think you're probably going to find that two components will be the best solution to this. While four dimensions is not exactly high dimensional data, this illustrates the importance and the ease in which you can reduce a feature set down. And I want to leave you with an important theoretical note. The temptation to interpret a component as a new variable is great, but they really can't be interpreted like a traditional variable. They are nothing more than linear combinations of many variables. So be careful in the way you interpret those brand new outcomes in your data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) (2)
> **CLI Commands:** make (1), find (1)
> **Env Vars:** pca (2)
> **Warnings:** be careful (1)
> **Speakers:** - welcome (1)
> **Non-Speech:** (energetic music plays) (1)


### 3. EDA

[↑ Back to Table of Contents](#table-of-contents)

#### [Describing data](https://www.linkedin.com/learning/level-up-python-data-acquisitions-prep-and-eda/describing-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:04](https://www.linkedin.com/learning/level-up-python-data-acquisitions-prep-and-eda/describing-data?u=76281980&t=4)** - Welcome to "Describing Data". Whenever you live in the [Data Science](../../Topics/Data%20Science.md) world, you can count on getting data that nobody knows anything about. There might not be documentation and you can probably forget about anybody giving you a code book for the data. Often you'll need to put on your detective hat to discover the nature of your variables. For this challenge, you need to do the following. Produce descriptive [Statistics](../../Skills/Data%20Science/Statistics.md) for every variable in the data. After you've done that, identify anything that might be a problem. Don't be afraid to take your time with this challenge. While the coding might not be difficult this will be a good test of your intuition with the data that you have. I'll see you in a little while so that we can share what we found. (synth music) Welcome back. What problems did you find in the data? If you found anything that I didn't, I'd love for you to share with everyone. I'm going to start by importing [pandas](../../Skills/Software%20Development/Pandas%20(Software).md). I'm also going to set my display option for the max_columns as none. I want to be able to see all of my columns all at one time. I can then read my data in and use the describe function to get the descriptives for all of my variables not just the numeric or categorical, but all of them. Once I do that, I'm going to just take a quick look and see what I have. Age, prior_job_count, department, proportion_401K, all seem relatively straightforward.
>
> **[1:39](https://www.linkedin.com/learning/level-up-python-data-acquisitions-prep-and-eda/describing-data?u=76281980&t=99)** I don't see anything terribly alarming. Starting_salary, again, seems like it should. Then I run into a very variable called separated_ny, and I see this variable has a minimum of zero, a maximum of one, and nothing really interesting going on in any of the interceding values. This is the kind of variable I look at and get a very clear indication that although it is indeed a number, zero and one, it may be representing a categorical variable or it could be a dummy variable, where every zero valuable indicates that an employee is not separated from the company, and every one would be yes, separated from the company. So this is the kind of variable that I have to pay careful attention to when I do my analyses or any other descriptives. I need to be sure to treat this data as it probably would be as a categorical variable. A large part of data science is looking for patterns and this isn't just for the modeling part. Finding out what's happening in your data will pay huge dividends when it's time to model. Models are only as good as the data they get, so always spend some time looking at your data first.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Science](../../Topics/Data%20Science.md) (2), [Statistics](../../Skills/Data%20Science/Statistics.md) (1), [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) (1)
> **Code Identifiers:** max_columns (1), prior_job_count (1), separated_ny (1)
> **CLI Commands:** find (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - welcome (1)
> **Non-Speech:** (synth music) (1)

#### [Finding correlations](https://www.linkedin.com/learning/level-up-python-data-acquisitions-prep-and-eda/finding-correlations?u=76281980)

> [!transcript]- Transcript
>
> **[0:04](https://www.linkedin.com/learning/level-up-python-data-acquisitions-prep-and-eda/finding-correlations?u=76281980&t=4)** - Welcome to finding correlations. One of the most important parts of [Data Science](../../Topics/Data%20Science.md) is the exploratory phase of your analysis. Whether you're doing descriptives, visualizations or exploring initial relationships, you need to dig into the data to really know what's there. A big part of that exploration is finding what variables might be related to one another. For this challenge, you need to identify the numeric variables. And after you find those numeric variables find the bivariate correlations between all of those variables. Identify which variables might have relationships with each other. This is a pretty simple task so take a few minutes to find the relationships. But be mindful of the variables that you ultimately include in your correlations. I'll meet you back here in a few minutes. Welcome back. So which variables did you find that are correlated? Let's take a look at my code and we'll see what we found out together. I'll begin by importing some packages, reading in my data and then also selecting my numeric data types. When you select your numeric data you'll notice that we still have this separated ny variable in there,
>
> **[1:37](https://www.linkedin.com/learning/level-up-python-data-acquisitions-prep-and-eda/finding-correlations?u=76281980&t=97)** and like we've discussed before separated ny is very likely to be a binary indicator for whether an employee has left an organization. So we're going to drop that from our correlation analyses. After we have that dropped we can now perform our correlation with the .corr method.
>
> **[2:01](https://www.linkedin.com/learning/level-up-python-data-acquisitions-prep-and-eda/finding-correlations?u=76281980&t=121)** After our correlations are finished we can finally print those results out and see what may be related. And as you can see, maybe the strongest relationship here is between age and starting salary. That looks suspiciously high to me. I'd be curious to see what's going on there, and that gives us a place to dig. So as simple as they might be correlations can be a good start to finding what's happening in your data. Correlations can tell you if you're going to have problems with your predictors or, or rephrase. Correlations can tell you if you're going to have problems with your predictors, or, if there might be linear relationships within your data. Just because they're simple doesn't mean they aren't valuable.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Science](../../Topics/Data%20Science.md) (1)
> **CLI Commands:** find (4)
> **Definitions:** is a  (1)
> **Speakers:** - welcome (1)

#### [Visualizing correlations](https://www.linkedin.com/learning/level-up-python-data-acquisitions-prep-and-eda/visualizing-correlations?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/level-up-python-data-acquisitions-prep-and-eda/visualizing-correlations?u=76281980&t=5)** - [Instructor] Welcome to visualizing correlations. Finding the correlation values is a pretty straightforward task. And while getting the values is easy, it isn't always easy to see what is going on within your correlation matrix. That's where visualizing them gives you an especially powerful tool for exploring those relationships. For this challenge, you're going to need to do a few things. First, identify the numeric variables, find the correlations between those variables, and finally, visualize the correlation coefficients. There's nothing too tricky here. You've already done most of this work in a previous challenge. So take a few minutes and come up with a solution. And at the end, you should have a very nice visualization to help you understand those correlations. Take a few minutes, and I'll meet you back here. (techno music) Welcome back. I can't think of a more useful visualization than a core plot. I'll show you the steps I took to produce one. We will import our packages, read in our data, select our numeric data, and as always drop our binary indicator out, produce our correlation matrix, and then we'll take a quick look at that correlation matrix. This isn't anything new to us, but what is new, is the need to create a mask for our upper triangle
>
> **[1:39](https://www.linkedin.com/learning/level-up-python-data-acquisitions-prep-and-eda/visualizing-correlations?u=76281980&t=99)** of this correlation matrix. We don't need to print all of it. We don't need to visualize all of it. We only need the bottom triangle. So we are going to mask the upper part. We're going to specify some sub-plots. And here I'm going to rotate some of my access labels, and I'm going to do that purely for display purposes. After I'm done with that, I'm going to use a heat map. I'll include my employee_correlations. I will specify my mask. And then finally, I'll use the yellow, green, and blue color palette. When we run this, we will see a fantastic core plot that really helps to visualize the correlations within our table. And no matter what people think, a correlation table is always going to be tricky to read. By using good pre-attentive processing principles, you could give people a visualization that neatly shows the correlations and the patterns within your data.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Code Identifiers:** employee_correlations (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (techno music) (1)

#### [Multivariable visualizations](https://www.linkedin.com/learning/level-up-python-data-acquisitions-prep-and-eda/multivariable-visualizations?u=76281980)

> [!transcript]- Transcript
>
> **[0:04](https://www.linkedin.com/learning/level-up-python-data-acquisitions-prep-and-eda/multivariable-visualizations?u=76281980&t=4)** - [Instructor] Welcome to Multivariable Visualizations. Whenever we create visualizations, we usually think about mapping a few variables at most to the plotting space. But what if we want to include multiple variables within our visualization, three, four, or maybe even five? For this challenge, your goal is to take these variables, prior_job_count, days_to_separate, proportion_401K, starting_salary, and visualize the distribution for each variable by department. But the trick is to get all of this information into a single visualization. You're probably going to want to take a few minutes to think about how you would want to do this. And while I can't give you too many hints, it's always best to think about the shape of your data before you start visualizing. I'll see you back here in a few minutes. (gentle music) Welcome back. How'd it go? Did you settle on reshaping, or did something different occur to you? If you came up with something different other than some reshaping, I'd be curious to know how you did it. For now, I'd like to show you how I performed this task. As always, we will read in our packages, our data. And we're going to find some old code here, our z_core-maker that we've previously programmed. We're going to use our z_scores here
>
> **[1:40](https://www.linkedin.com/learning/level-up-python-data-acquisitions-prep-and-eda/multivariable-visualizations?u=76281980&t=100)** for the sake of putting everything on the same scale to make for easier visualization. We will hold out our primary visualization variables. We will scale all of those with our z_score_maker. And then what I typically do in this setting is to melt the data into long form. I've specified my id variables as department and the value variables as my viz_variables. And after we run that, we can just take a quick look to see what employees_melted looks like. We have our department variable. We have the variable, our primary visualization variable, and we have the value for each person. With that data in hand, we can then go to some categorical plotting. Specifically, I'm going to use a violin plot. This is going to produce a very nice density plot for all of these variables over our three primary departments. We can run this, and we will be presented with a lovely violin plot showcasing the density of each of these departments over those variables that we held out. When you're working on EDA tasks, visualizing a lot of variables at once can be helpful,, especially when they are related. Just remember, though, that good visualization rules apply, and you don't want to overcrowd your visualizations.

> [!info]- Semantic Content
>
> **Code Identifiers:** prior_job_count (1), days_to_separate (1), starting_salary (1), z_core (1), z_scores (1)
> **CLI Commands:** find (1), make (1)
> **Env Vars:** eda (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (gentle music) (1)

#### [Building visualizations with Streamlit](https://www.linkedin.com/learning/level-up-python-data-acquisitions-prep-and-eda/building-visualizations-with-streamlit?u=76281980)

> [!transcript]- Transcript
>
> **[0:04](https://www.linkedin.com/learning/level-up-python-data-acquisitions-prep-and-eda/building-visualizations-with-streamlit?u=76281980&t=4)** - [Instructor] Welcome to Building Visualizations with Streamlit. Now that you've acquired data, cleaned it, done some initial analyses and created some visualizations, what are you going to do next? Wouldn't it be nice to take your fancy visualizations and share them with other people? What if you could let other people play with your visualizations? In this video, we're going to build a quick Streamlit dashboard together. We can use Streamlit to build and deploy [Dashboards](../../Skills/Data%20Science/Dashboards.md) for all kinds of tasks. For this collaborative challenge, we're going to build a dashboard that will allow people to pick any two variables and display a visualization for those variables. We'll start by selecting our numeric variables, and then we'll create scatterplots for them. We also want to be able to allow people what variables they want to choose for their visualizations. Let's go check out the code. I already have this code ready for you in [GitHub](../../Skills/Software%20Development/GitHub.md), so I suggest you start here. What we're going to do though, is we're going to import some standard things. What we'll need is NumPy, [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md), and Streamlit. You'll notice that we are reading in our data just the same as we've always done, and we are going to filter that to just be numeric data types. For our Streamlit app, we will start our page and set it off with a nice title. Visualizing employee data, seems pretty straightforward.
>
> **[1:40](https://www.linkedin.com/learning/level-up-python-data-acquisitions-prep-and-eda/building-visualizations-with-streamlit?u=76281980&t=100)** Now what we're going to do is we are going to lay out a sidebar. This sidebar is going to hold the places for our user to select what they want to go into the visualization. From there, within the sidebar, we are going to create an object called viz_variables, and that is going to be a multi-select widget that will present the message, select variables to visualize, the available columns will be the columns from employee numeric, and we will give people two choices. Those two choices will cover the X and the Y axis. If we want to get fancy, we can also choose another variable to throw in there that will be color to the visualization. We can lay all of that information out with the scatter chart from Streamlit. We will have our data here, the X and Y, as selected by the user and the color variable selected by the user. So with this entirely laid out, we are going to have to run it. What we'll do is we will start here, python3, then we will specify the M tag, Streamlit Run. We'll use code that is the directory where this lives. Chapter three, video five. So let's try it. Python3 -m
>
> **[3:15](https://www.linkedin.com/learning/level-up-python-data-acquisitions-prep-and-eda/building-visualizations-with-streamlit?u=76281980&t=195)** streamlit run code chapter_03, video_05.
>
> **[3:28](https://www.linkedin.com/learning/level-up-python-data-acquisitions-prep-and-eda/building-visualizations-with-streamlit?u=76281980&t=208)** And you'll see that it's opened up a new browser for us. Fantastic. You'll also notice this scary red box here that says List index out of range. For now, we're not going to worry about this. That will be something that you can figure out on your own how to take care of this, and I know that you'll be able to do it, but for now, we've got a good starting point to where we can select up to two variables. Let's start with age and what else would we like to do? Let's just for the fun of it, do starting salary, and you'll see as soon as we have our two variables selected, the scary red box has gone away and has been replaced with a nice visualization, and we can also change what variable we're coloring by. Maybe let's try prior job count. Streamlit gives you the opportunity to do all kinds of really, really fun stuff from creating visualizations to deploying models and everywhere in between. You can really use it to help people understand your work and give them an opportunity to play with the things that you've done. And we are only just scratching the surface of what Streamlit can do. It can have multiple tabs, pages, and anything else that a modern website would do. No matter what you find yourself doing, you'll no doubt find use for building a Streamlit dashboard.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Dashboards](../../Skills/Data%20Science/Dashboards.md) (1), [GitHub](../../Skills/Software%20Development/GitHub.md) (1), [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) (1)
> **CLI Commands:** python3 (2), find (2)
> **Code Identifiers:** viz_variables (1)
> **Tools:** github (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [Seth Berry](../../Instructors/Data%20Science/Seth%20Berry.md)

## Resources

- [GitHub Repository](https://github.com/LinkedInLearning/level-up-python-data-acquisitions-prep-EDA-3083218/codespaces)

## Skills Covered

- Python (Programming Language)
- Data Acquisition

## Path Context

### In [Advance Your Python Skills for Data Science](../../Paths/Data%20Science/Learning%20Paths/Advance%20Your%20Python%20Skills%20for%20Data%20Science.md)
← [More Python Tips, Tricks, and Techniques for Data Science](More%20Python%20Tips%2C%20Tricks%2C%20and%20Techniques%20for%20Data%20Science.md) | **6 of 6**

## Appears In

- [Advance Your Python Skills for Data Science](../../Paths/Data%20Science/Learning%20Paths/Advance%20Your%20Python%20Skills%20for%20Data%20Science.md)

## Related Courses

_Courses sharing skills:_

- [Learning ArcGIS Python Scripting](Learning%20ArcGIS%20Python%20Scripting.md) — Python (Programming Language)
- [QGIS and Python for AEC](QGIS%20and%20Python%20for%20AEC.md) — Python (Programming Language)
- [Python Data Structures- Trees](../Database%20Management/Python%20Data%20Structures-%20Trees.md) — Python (Programming Language)
- [Using SQL with Python](Using%20SQL%20with%20Python.md) — Python (Programming Language)
- [Python- Working with Predictive Analytics (2019)](../Software%20Development/Python-%20Working%20with%20Predictive%20Analytics%20(2019).md) — Python (Programming Language)

---

[↑ Back to top](#)