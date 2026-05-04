---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: practical-github-code-search
url: "https://www.linkedin.com/learning/practical-github-code-search"
duration_minutes: 41
duration: 41m
level: Advanced
updated: 10/29/2025
learners: 5562
skills:
  - GitHub
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQGVJmvT3cIOXg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1684514017465?e=2147483647&amp;v=beta&amp;t=HeqmlkUlfTYVfy0lj9t6HQDFbnb_4Zuemu-fVdxy3S0"
linkedin_topic: Software Development
learning_paths:
  - '[Career Essentials in GitHub Professional Certificate](../../Paths/Software%20Development/Professional%20Certificates/Career%20Essentials%20in%20GitHub%20Professional%20Certificate.md)'
prev_courses:
  - '[Practical GitHub Copilot](Practical%20GitHub%20Copilot.md)'
path_nav: '[{"path":"Career Essentials in GitHub Professional Certificate","position":4,"total":4,"prev":"Practical GitHub Copilot","next":null}]'
path_count: 1
tags:
  - course
  - topic/software-development
  - skill/github
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/Practical%20GitHub%20Code%20Search.md)

![Practical GitHub Code Search](https://media.licdn.com/dms/image/v2/D560DAQGVJmvT3cIOXg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1684514017465?e=2147483647&amp;v=beta&amp;t=HeqmlkUlfTYVfy0lj9t6HQDFbnb_4Zuemu-fVdxy3S0)

# Practical GitHub Code Search

> GitHub is a vast code repository—with over 100 million developers and more than 330 million repositories, it’s the largest developer platform in the world. Finding your way when you're looking for something specific can be difficult, but GitHub has tools to help. In this course, Ray Villalobos helps you find what you need. Ray starts out with a look at the regular search features of GitHub—showing

> [LinkedIn Learning](https://www.linkedin.com/learning/practical-github-code-search) | 41m | Advanced | 6K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Creating projects for development](#creating-projects-for-development)
  - [Using the slideshow](#using-the-slideshow)
- [**1. Regular Search Features**](#1-regular-search-features) (5 videos)
  - [GitHub code search](#github-code-search)
  - [Using the search box and shortcuts](#using-the-search-box-and-shortcuts)
  - [Search qualifiers](#search-qualifiers)
  - [Search results](#search-results)
  - [Syntax operators](#syntax-operators)
- [**2. Code Search Beta**](#2-code-search-beta) (3 videos)
  - [Finding code](#finding-code)
  - [Finding code to learn from](#finding-code-to-learn-from)
  - [Code results](#code-results)
- [**Conclusion**](#conclusion) (0 videos)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Creating projects for development](https://www.linkedin.com/learning/practical-github-code-search/creating-projects-for-development?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-github-code-search/creating-projects-for-development?u=76281980&t=0)** - [GitHub](../../Skills/Software%20Development/GitHub.md) hosts more than a hundred million developers and hundreds of millions of repositories, and that can add up to a lot of code, so finding what you need can quickly feel overwhelming. So GitHub Code Search changes the way developers find and reuse code. Built from the ground up in [Rust](../../Skills/Software%20Development/Rust%20(Programming%20Language).md), it lets you search billions of lines of code in milliseconds. In this course, I'm going to show you how to build powerful queries, use qualifiers and operators, plus work with the new code view. You'll learn shortcuts to move faster and techniques to refine results. Now, whether you're solving problems, studying examples, or revisiting past work, you'll leap with a faster way to get to the code that matters. So if you want to master finding code within GitHub, let's do this.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GitHub](../../Skills/Software%20Development/GitHub.md) (3), [Rust](../../Skills/Software%20Development/Rust%20(Programming%20Language).md) (1)
> **Tools:** github (3)
> **CLI Commands:** find (1)
> **Speakers:** - github (1)

#### [Using the slideshow](https://www.linkedin.com/learning/practical-github-code-search/using-the-slideshow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-github-code-search/using-the-slideshow?u=76281980&t=0)** - [Instructor] You can find all the slides for this course at [raybo.org/slides_githubsearch](https://raybo.org/slides_githubsearch), which is the page you're looking at. At the bottom of the screen there is a toolbar, which you can show or hide by hitting the T key on your keyboard. There are some links to my courses, my blog, as well as some other contact information. If you want to get to one of the slides in the course, just hit the M key, and you can choose one of these different slides. So for example, if I want to watch the first chapter and the first video, I would choose 0101, and if I click on that, now I can use the arrow keys to navigate through the slides that I used for that video. You can also hit the M key and click on this notes section, and this will take you to all the notes that I wrote for that specific slideshow. This often has links to different places on the web that I refer to on the slideshow. If I want to go back to the slides, just go ahead and click on this icon right next to the index.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (3)
> **CLI Commands:** find (1)
> **Code Identifiers:** slides_githubsearch (1)
> **URLs:** [raybo.org](https://raybo.org) (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 1. Regular Search Features

[↑ Back to Table of Contents](#table-of-contents)

#### [GitHub code search](https://www.linkedin.com/learning/practical-github-code-search/github-code-search?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-github-code-search/github-code-search?u=76281980&t=0)** - [Instructor] [GitHub](../../Skills/Software%20Development/GitHub.md) Code Search is a featuring GitHub that lets you find the code you're looking for faster and more efficiently. You can find more information on this website which is an overview of the features available through Code Search. With it, you can quickly search through your own code, your team's code, or billions of lines of public code. It was written from scratch in [Rust](../../Skills/Software%20Development/Rust%20(Programming%20Language).md) and uses modern approaches like charting and delta and coding to allow you to search through terabytes of data and billions of lines of code in milliseconds. You can learn more about the technology behind the improvements on this blog post right here.
>
> **[0:43](https://www.linkedin.com/learning/practical-github-code-search/github-code-search?u=76281980&t=43)** Let's talk features. You can use regular expressions or bullion operators like and or or, and there's also tons of keyboard shortcuts to help you search faster. Once you start searching, you'll get suggestions throughout the entire interface as well as added completions that suggest what you should do. There is an advanced and intuitive syntax that helps you build and save your searches so you can retrieve similar results later. And it's not just a search engine. There is a new code view that lets you interact with the results better with a sidebar that also shows you definitions of the code and a file browser that's more familiar to what you're used to in your IDE. As of this video, it's not on by default on GitHub. It's available through a public beta which you can sign up by going to [github.com](https://github.com). Now, you toggle this feature by going to the feature preview section and look for the new code search and code view. So we'll click on this link right here which is going to take us to [github.com](https://github.com) and then look up your profile right here. Notice there is a section called feature preview and then here you're going to find hopefully a lot of different things that you can turn on and off and one of them is this new code search and code view. You can enable it or disable it depending on which version of the Code Search you want to use. There are some differences between the old and the new, and there are right now still some instances where you may want to toggle this on and off. You can also access it through a special URL at [github.com/search](https://github.com/search).

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GitHub](../../Skills/Software%20Development/GitHub.md) (6), [Rust](../../Skills/Software%20Development/Rust%20(Programming%20Language).md) (1)
> **Tools:** github (6)
> **Definitions:** is a  (3), is an  (2)
> **CLI Commands:** find (3)
> **URLs:** [github.com](https://github.com) (3)
> **UI Navigation:** toggle (2), click on (1)
> **Env Vars:** ide (1), url (1)
> **Speakers:** - [instructor] (1)

#### [Using the search box and shortcuts](https://www.linkedin.com/learning/practical-github-code-search/using-the-search-box-and-shortcuts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-github-code-search/using-the-search-box-and-shortcuts?u=76281980&t=0)** - [Instructor] Let's take a look at some of the features of the search box, as well as the shortcuts that are available. Search is available from every page on the site via a search box in the header. You can see that there is a "slash" in the box, which suggests that you can use the slash in your keyboard to get to the search box. And although it doesn't say so, you can also hit the "S" key, and of course, you can click on the search box. You can also use the command pallet to get to the search, which is "command+K" or "command+option+K" on a Mac, and "control+K" and "control+option+K" on a PC, although I think using the slash is a little bit easier and it seems to have better auto completion. Just have to mention that if you are ever looking for shortcuts in [GitHub](../../Skills/Software%20Development/GitHub.md), you can also hit the question mark key to get a list. And then here you can see all of the shortcuts, plus even more down here in this link. You can also hit "Escape" to get out of any one of those dialogue boxes. The search box is context sensitive. So right now we are at just [github.com](https://github.com) and if I hit the slash, you'll notice that I can search for things and it gives you some hints down here. So I'm going to type in "[React](../../Skills/Web%20Development/React.js.md)," and I'm going to hit return, and notice that it's going to look for "React" in [github.com](https://github.com). So you can see that it lets you also filter by all these options here. However, I'm going to go now to my profile page, and I'm going to hit the slash,
>
> **[1:36](https://www.linkedin.com/learning/practical-github-code-search/using-the-search-box-and-shortcuts?u=76281980&t=96)** and you'll see that now it's auto filling the owner, because it knows that I am looking under my profile, so it automatically pre-fills that. And let's say that I am looking at a specific repository, so I'll click right here on "repositories," and I'll click on this podcast generator repository. And now I'm going to hit the slash and you'll notice that it's pre-filled where I am, so it's saying "repo," and then it's explaining that I am in planet of the web slash podcast generator. Now whenever you are searching, you can also use the arrow keys and the enter key to accept one of the options that you've selected. So I can search for "action dot YML" right here, by hitting return, and it's going to show me that file.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GitHub](../../Skills/Software%20Development/GitHub.md) (3), [React](../../Skills/Web%20Development/React.js.md) (2)
> **Tools:** github (3)
> **URLs:** [github.com](https://github.com) (2)
> **UI Navigation:** click on (2)
> **Env Vars:** yml (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Search qualifiers](https://www.linkedin.com/learning/practical-github-code-search/search-qualifiers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-github-code-search/search-qualifiers?u=76281980&t=0)** - [Instructor] So you may be wondering what some of these other qualifiers are. I'm going to show you a big, huge list in a minute, and I want you not to worry about the size of the list because there are a lot of qualifiers that you can use. The super nice thing about search is that it gives you a lot of hints about what these qualifiers are, and also how you should fill them out. So you've already seen things like the owner qualifier, and perhaps something like the org. And you may have seen some other sections in the search and the search results that are going to help you with some of these things. Now, there's basically two types of qualifiers, these sort of generic main qualifiers, and there's also a series of flex qualifiers, which you'll use to narrow down a lot of the main qualifiers. So, for example, there is the type qualifier, which you can use with like org, pr, issues, discussions, et cetera. So that allows you to further refine your search. In addition, you can also use the is flex qualifier to let you look through whether an item is a fork, a poll request, an issue, et cetera, et cetera. There's also an in qualifier, and that gives you a simple way to search for content in a repository, and you can look for the title, comment, or the body in here as well. Now, the important thing here is to try some of these out. I know this is a big, huge list. It's not going to help you unless you check these things out. So let's look at some of the examples.
>
> **[1:34](https://www.linkedin.com/learning/practical-github-code-search/search-qualifiers?u=76281980&t=94)** So I'm going to come back here to the [github.com](https://github.com) page, and I'm going to try to search for something super simple. Notice that already when I click on the search box or I hit the Slash button, I get a lot of different options here. So I can search for my latest repositories or I can search for a specific owners. So it's going to give you some hints, but I'm just going to type in [JavaScript](../../Skills/Software%20Development/JavaScript.md) here because it's going to be a pretty broad search. When it gives me my search results, you can see some of the main qualifiers here on the left-hand side. And you can even expand this to see more of them. So I can look for code that has the keyword javascript in it, repositories, issues, et cetera, et cetera. So if I look for repositories, I can further refine that search by using some of these options down here, looking for specific languages. Since I already type JavaScript in here, that's not going to make a lot of sense, although I could perhaps click on TypeScript, which is a subset of JavaScript, and that would let me know repos that had both of the items in there. But notice that there's also a section down here in the Advanced tab right here that lets me further refine my search by different things. So, for example, I can look for the number of stars of these repos, and it already gives me a lot of different values right here. So you could see that this repo has to have between zero and 100 stars. And I'm going to hit return here. And that's further going to refine my search by that amount.
>
> **[3:10](https://www.linkedin.com/learning/practical-github-code-search/search-qualifiers?u=76281980&t=190)** So you don't really have to memorize all of the different qualifiers, you just have to know that there are different kinds of qualifiers, mainly the traditional sort of qualifiers, and then the type, the is, and the in, which allows you to filter things further. And there is a lot of options. Most of them are right here. The other ones you can also find through this last option over here, which is the Advanced search. And Advanced search is going to be just a form that you can use to make it easier to find all of the different categories that you can search by. So here is pretty much all of the options that we already saw, with some examples of what you can type. And notice that they are broken down by the types of things that you want to search. And that's the thing about the qualifiers too. So sometimes, you'll try to find qualifiers and sub qualifiers, and it won't find what you're looking for, and that's because they really should be thought of as giving you the option of looking for certain types of things. So you can say, if you're looking for a repository, it would make sense to find the number of stars for the repository, with a certain amount of forks, of the size, and so on and so forth. But if I'm looking under issues, perhaps, the stars don't really matter all that much for issues. You want to find things like, for example, whether or not an issue is open or close, with a specific reason, with certain labels, et cetera, et cetera. So the qualifiers aren't as important to memorize
>
> **[4:43](https://www.linkedin.com/learning/practical-github-code-search/search-qualifiers?u=76281980&t=283)** because they are everywhere in the interface. And if you want to learn more about them, you can look at this Advanced search, and it's going to give you all the options that you need to know in order to search. I do want to remind you that if you're not seeing what I'm seeing when I'm searching, you want to make sure that you go to Feature preview on your account, and that you have this New Code Search and Code View turned on. Let's go ahead and just disable it for a second to see what this looks like. And then I'm going to go back here and then just type in... And notice that the list itself is a little bit different than what we've been seeing. So if you're not seeing the same thing I'm seeing, make sure that you do have that turn on. I'm just going to do a search for javascript again so you can see the difference between what we get. It's similar but not the same. And I'm missing some information here that would be on the right, which are some hints and lots of other goodies. Although it does give me this cheat sheet. And here's where the Advanced search would be, which is still pretty similar, but the two types of searches are different. And I'm also going to mention that sometimes because the new search engine is in beta form, sometimes the things that work with traditional search are not going to be quite implemented in the new search. So just keep that in mind as you continue to attempt to search for things.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (5), [GitHub](../../Skills/Software%20Development/GitHub.md) (1)
> **CLI Commands:** find (6), make (5)
> **Definitions:** is a  (5)
> **UI Navigation:** click on (2), go to (1)
> **Analogies:** for example (3)
> **URLs:** [github.com](https://github.com) (1)
> **Tools:** github (1)
> **Speakers:** - [instructor] (1)

#### [Search results](https://www.linkedin.com/learning/practical-github-code-search/search-results?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-github-code-search/search-results?u=76281980&t=0)** - [Instructor] Let's take a look at the search interface. It is truly a thing of beauty. The UI and UX are some of the best I've seen in any application. So to get there, I'm just going to hit the slash, and I'm going to start by typing org and then I'll choose [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md). I'm going to hit return. And you'll see that the first time I search for that it just tries to find the page for the organization. So I'm going to hit slash again and I'll replace that with user and then I'll type in planet of the web here. And you'll see that it'll just jump directly onto my profile page, which is interesting. However, if I hit the slash again and I'm already in here and I'm just going to hit return, basically the same query. This time or the second time, it tries to find the code for that particular owner, which is pretty interesting. Let's go back to Microsoft. So I'm going to hit the slash again and I'll hit delete a couple times to get to Microsoft again. And again, I'll do the slash and do it once again just to get to all of the different options. Now you can see that the main interface has two panes, one to the left and one to the right. The one on the left has all of the options, and you've probably been working with these before. You can filter by different options here. If you click right here, you can see more of the options, and then you have languages. And this is always going to be context sensitive. So depending on which one
>
> **[1:34](https://www.linkedin.com/learning/practical-github-code-search/search-results?u=76281980&t=94)** of these filter by categories you have chosen it will show you different things. So here for example, it's showing me popular repositories, popular paths, and then some other advanced options right here as well as the advanced search down at the bottom. Let's go to repositories. And there's 5,000 of those. Now, one thing I did want to point out, look how quickly it's searching. So I mentioned that this search engine is based on [rust](../../Skills/Software%20Development/Rust%20(Programming%20Language).md) which is super fast, and they have done a lot of optimizations to make it super nice. Now notice that sometimes when you search for things you get this extra sidebar and this is sort of like a hints section of your code that encourages you, for example, to sponsor or it lets you give feedback and sometimes it'll give you even more things in here related to the type of things that you're doing. So I'm going to click on issues. I'm going to click through all these right here, just so that you can see that depending on what things you need it's going to give you that additional sidebar or not. And let's go back to repositories. So we can see that over here. It's going to tell you how many results it's received, and a lot of times you want to sort of sort that perhaps by like the number of forks or the number of stars, which you can find by scrolling down here. But there's another section in this main search result area that lets you do the same thing. So if you want to find, say, the project in Microsoft with the most stars, you can look for that.
>
> **[3:09](https://www.linkedin.com/learning/practical-github-code-search/search-results?u=76281980&t=189)** And not surprisingly, it's Visual Studio Code, as well as TypeScript is number two. It tells you the amount of stars that each one of those projects has received 146,000 for VS Code and 90,000 for TypeScript. It gives you some of the different tags right here as well as some additional information, and while this is updated six minutes ago. You can star projects directly, so I'm going to give VS Code a star. I really love that project. And you can also, right here, save the search results so that you can utilize it again later. So if you want to go back to this Microsoft page we can hit the safe button and I'm going to save Microsoft repos. And then you can refine the query and you can just save it. And you'll see that when we create a saved search, the list of the previous searches that I have done is right here. You can hit the delete button to delete this or create another safe search if you want to. So I'm going to hit the close box and now I'm going to hit the slash to get back in here. And I'll delete all this just to show you that your saved query is now in here. And give it whatever name you want, but now that's a quick way of getting back to where you were when you were searching.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (6), [Rust](../../Skills/Software%20Development/Rust%20(Programming%20Language).md) (1)
> **CLI Commands:** find (4), make (1)
> **Cross-References:** go back to (3)
> **Tools:** vs code (2), visual studio (1)
> **UI Navigation:** go to (1), click on (1)
> **Analogies:** for example (2)
> **Speakers:** - [instructor] (1)

#### [Syntax operators](https://www.linkedin.com/learning/practical-github-code-search/syntax-operators?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-github-code-search/syntax-operators?u=76281980&t=0)** - You can construct queries with a variety of operators that can help you narrow your searches. Let's take a look at some of them. You can use comparison operators like greater than, greater than or equals to, less than, or less than and equals to. You can also do ranges by using the two different dots and you can use a star right here. So the first one will be at least 10 or more items, up to 10 items or 10 to a hundred items. And you can also use dates as well as times in these formats right here. Plus you can exclude with minus or the not keyword and not should be capitalized here. You also have the ability to create quotations when you want to be a little more specific. So let's take a look at some examples of this. All right, so here I am back on [github.com](https://github.com). You could just hit this little icon if you ever want to get to the main level here. And I'm going to do a search right here. So I'll hit the slash and I want to type in the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) syntax. So I'm going to look for a syntax highlighter for my website. So when I type that in, I get 10,000 results. That's quite a bit. Now I can't sort right here, so if I want to, I can say just give me the ones with the most stars. This isn't a permanent search and it isn't anything that I can save. So if I want to come back and look for this a little bit later, I may want to add some additional qualifiers here. Now notice that if I add quotations here,
>
> **[1:35](https://www.linkedin.com/learning/practical-github-code-search/syntax-operators?u=76281980&t=95)** it's not going to just look for either syntax or highlighter, but it's going to look for those words together which sometimes gives you a little bit of a better search. So now I have 10,000. That's still quite a bit. Let's see if we can narrow that a little bit more. So I'm going to say I want to see the ones that have at least a thousand stars, 'cause this appears to be a pretty popular topic. And that gives me just 48 results. That's much better. Now if I take a look at these, I can see that there's a lot of interesting stuff, but there's weird things like [Postgres](../../Skills/Software%20Development/PostgreSQL.md) [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) without auto-completion and syntax highlighting. That doesn't quite seem what I'm looking for. Or a terminal client for [MySQL](../../Skills/Software%20Development/MySQL.md). And there's some other things in here. So let's see what else we can do to narrow this down a little better. I'm going to add language and I'll put [JavaScript](../../Skills/Software%20Development/JavaScript.md) here. Now you can actually choose that from this list right here. But notice how well it gives you the hints when you type in those things. So I'm just going to click on JavaScript, let's hit return. And now we got 10 results. Let's take a look at what we got here. And this is sort of cool. This turns your source code into syntax highlighted images, but that isn't quite what I'm looking for. So I can add a not sort of query here. I'll say not. And then I will put in here images. And see what happens then. So now I have nine results. I've kind of gotten rid of that one and I think there's one here for [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) or there's something here for Python.
>
> **[3:10](https://www.linkedin.com/learning/practical-github-code-search/syntax-operators?u=76281980&t=190)** So I'm going to add that here and I'll just say, or Python. Okay, that should be a little bit better. So I got nine results now, so that's interesting. So I could still, maybe I should add not instead of or, not Python. Let's try that. Yeah, now we have eight results, so that's great. So let's see. In addition to that, I'm going to say that I want to make sure that this has been updated recently. So I'm going to add another thing here called pushed. And I'm going to say I'm going to want stuff that's been pushed since the beginning of the year. So 2023 01 01, or I could just go maybe a few months. But I'll just choose that. I don't know if this is going to give me any. Yeah, actually it did go down all the way to four results. And I can keep on using these different syntax operators to get me very specific results. And what I like to do is go ahead and save this so that I can always come back and see if there's any interesting new syntax highlighter. I may want to decrease the amount of stars because if it's new, it's not going to get that many stars. So let's go ahead and just make that, let's be more gentle here. Let's try a hundred and see how many we get. 21 results. Okay, that still seems manageable and still sorted by most stars. And so let's go ahead and save. And I'm going to say search syntax.
>
> **[4:45](https://www.linkedin.com/learning/practical-github-code-search/syntax-operators?u=76281980&t=285)** I'll just say syntax highlighters here. All right, so it keeps the query right here. So I'm going to say create saved search and then I can look at the ones that I have going and I can close this out and I can always come back to that search and take a look at at least things with a hundred stars that are syntax highlighter. That might be a good search for later. Now you can ask that the results be sorted by a specific qualifier. So you can say sort and then specify either something like ascending or descending or sort by date and index or update it. So let's take a look at how we may use something like that. So I'm going to go hit this Mona Lisa Octocat icon just to get to the main search, as well. And that'll clear everything out. So this time I'm going to look for [React](../../Skills/Web%20Development/React.js.md) UI components and that might be something we put in quotes. Let's see what we get when we just search for that. 892 results. That's quite a bit. So let's go ahead and say, I want to sort basically I want only the ones that have greater than a thousand stars and then I'm going to sort them by date and then add the ascending qualifier here. So now that's only five results. That's much better. And I can keep on refining any of my searches and saving them. Learning how to use these qualifiers is going to make it much easier for you
>
> **[6:17](https://www.linkedin.com/learning/practical-github-code-search/syntax-operators?u=76281980&t=377)** to find things that you're looking for a lot quicker.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (4), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (2), [GitHub](../../Skills/Software%20Development/GitHub.md) (1), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1), [Postgres](../../Skills/Software%20Development/PostgreSQL.md) (1)
> **CLI Commands:** python (4), make (3), mysql (1), find (1)
> **Tools:** github (1), terminal (1)
> **URLs:** [github.com](https://github.com) (1)
> **Env Vars:** cli (1)
> **UI Navigation:** click on (1)
> **Exercise Files:** source code (1)
> **Speakers:** - you (1)


### 2. Code Search Beta

[↑ Back to Table of Contents](#table-of-contents)

#### [Finding code](https://www.linkedin.com/learning/practical-github-code-search/finding-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-github-code-search/finding-code?u=76281980&t=0)** - [Lecturer] In this chapter, we're going to focus on how [GitHub](../../Skills/Software%20Development/GitHub.md) works when searching for code. It's a new way to not define things, but also navigate and even understand what's happening with the code you are looking for. Now, I'm going to run through a series of exercises, but I really want to emphasize that you want to be trying this out yourself quite possibly on your own repositories or on public repositories so you can get good at what works and what doesn't work when finding things. Now, with repositories and codes specifically, you want to give it as much context as possible. So it's better if you actually start on your page since you know you're going to be searching for your own repos. And now when I hit the slash, it's going to already have owner planet of the web. If I know the name of the repo, I can just click on repositories here to go even further and find the repository by using this different search rate here. So I'm going to type in raybo because I know that this is for my website [raybo.org](https://raybo.org). Now this repo, because it is the one that uses the main domain that I have added to my profile. It's actually under planetoftheweb.[github.io](https://github.io). That's a special name. If you create a repository with your username .[github.io](https://github.io), that becomes your default repository. And if you attach a domain name like [raybo.org](https://raybo.org), then that domain name is going to point to this repo. So I can click right here, and now I am really in context.
>
> **[1:36](https://www.linkedin.com/learning/practical-github-code-search/finding-code?u=76281980&t=96)** It should know exactly what I want to look in. In this case, the planetoftheweb.[github.io](https://github.io) repository. Now from here, I'm just going to hit return. Again, because once I hit return on the search box, it's going to try to give me a little more of the help that I can use to find things. So here you can see that I have 360 files of code. I want to look in the markdown document because I wrote all the newsletter articles and markdown and there's all the markdown files. That's still quite a bit, 348 files. So what I can look in is specific paths and you can just click on one of these. I know that that was a newsletter article that I wrote so that will be under site newsletter. And you can type these in yourself. Notice that it gave me a regular expression which you can also use on search. If I wanted to though, I could just write newsletter here. It doesn't need to be that complicated, but it did it for me so that's nice. But I'll show you. Newsletter should work just fine as well. All right, so that's 42 articles. Now I'm going to try to put the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) here, prototype, 'cause I know that's what we were talking about. And there it found the article that I was looking for. It also noticed that I talked about the prototypes twice and they are on these specific line numbers. So notice how it actually gave me the two line numbers that I did them in. It also showed me the branch that I was using, the format,
>
> **[3:10](https://www.linkedin.com/learning/practical-github-code-search/finding-code?u=76281980&t=190)** and everything else in here looks pretty good. Now instead of typing prototype, I'm going to type morten just to see what else I have written about him. So apparently I wrote seven of my newsletter articles about him, so we really talk about Morten quite a bit. You can see that the one that I was looking for was this one right here. So you can, if you want to add this, so say Morten and prototype. And, that would find that as well. Let's see how many times I have mentioned Canada because my friend lives in Canada. So, it looks like a couple of times. So this is pretty cool. You can really dig through to the code that you're looking for by using the interface as well as the navigation. And then once you get the code, you can just go directly either to the article right here or you can go to a specific line number. So let's go ahead and let's go back to the article on prototype. So we'll type prototype. We'll see what I was talking about. And I'm going to just hit this line number 21 and notice that it's going to take me to that specific line number. Now in GitHub, you have all these additional features that you can use when you're dealing with code. So for example, you can hit this to go to a page that shows you just all the text in raw form. This'll actually just let you copy things or you can just see the literal code that you typed in. I'm going to hit the back button on my browser here.
>
> **[4:46](https://www.linkedin.com/learning/practical-github-code-search/finding-code?u=76281980&t=286)** And notice that there's also a button right here to copy this raw file. So I could just copy all the code. And it's the same as going to the raw file and then select an all and then copying to the clipboard. So that's a really nice shortcut. And I can also download this file directly into my desktop. Now, there's also an additional way to open symbols which are a really nice feature of search. But for markdown, that's not going to be relevant. I'm going to show you a different example later on where you can use this to look at the modules as well as definitions of what is going on in your code. Now, there's another three dots right here which are pretty cool because in here you can copy a link which this is pretty cool, permalink. So if I ever update this newsletter article or code and I want to have a link through this version of the code, I can get a permalink which will always send me to this version of the code right here. I can view a [Git](../../Skills/Software%20Development/Git.md) blame which shows you who has worked or who has modified this code. I know it's just me so this is not going to be too interesting, in which you can also get to blames right here in GitHub. And you can also reference this in a new issue. So if you want to talk about that perhaps I want to mention this to Morten, I could just reference this in a new issue or I just copy the line. So this will be great. Like if you wanted to write maybe a blog post about this newsletter article, I could just copy that whole line.
>
> **[6:19](https://www.linkedin.com/learning/practical-github-code-search/finding-code?u=76281980&t=379)** And then, I can just add it to a post. Hey, Morten, remember this? Or I could copy the entire contents of the page and then maybe feed it into [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md) and get a bunch of different post ideas. So learning to search for things is really important and it's also really easy. I really love the way search integrates not just with all the different types of things like repositories and discussions and issues, but also with how it finds your code in your projects on [github.com](https://github.com).

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GitHub](../../Skills/Software%20Development/GitHub.md) (7), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1), [Git](../../Skills/Software%20Development/Git.md) (1), [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md) (1)
> **Tools:** github (7)
> **URLs:** [github.io](https://github.io) (3), [raybo.org](https://raybo.org) (2), [github.com](https://github.com) (1)
> **CLI Commands:** find (3), git (1)
> **UI Navigation:** click on (2), go to (2)
> **Cross-References:** go back to (1)
> **Analogies:** for example (1)
> **Speakers:** - [lecturer] (1)

#### [Finding code to learn from](https://www.linkedin.com/learning/practical-github-code-search/finding-code-to-learn-from?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-github-code-search/finding-code-to-learn-from?u=76281980&t=0)** - [Narrator] Let's go ahead and try another type of search. Now, this time I'm going to look for something, that I want to learn from. So I want to write a Dockerfile for one of my projects. I want to make sure that it is for a codespace's project that I'll be creating. So usually those go in the dev container and I want to learn from what other people have done. So I'm going to start by always resetting everything by hitting the [GitHub](../../Skills/Software%20Development/GitHub.md) icon. This will take you back to [github.com](https://github.com) and if you are already in a repository, it'll kind of clear out the previous search. Sometimes you'll find that even though you click on things in the interface, when you just go to another page, it'll reset things or leave some things in the search. So I find that I always love starting by clicking on this icon and it just clears everything out. So after that, then I hit the slash of course. And let's start off by looking for a Dockerfile and see what we get. All right, so when I do this, notice that it's assuming that I'm looking for repositories. That's not exactly what I'm looking for. In this case, I'm looking for code. It is smart and tries to make a decision about what you're looking for but sometimes it gets it wrong. So I'm just going to hit Code right here and it's going to show me some Dockerfiles. Now I noticed that some of these are in different places, right? So here's a circleci, which is a platform for [continuous integration](../../Skills/Software%20Development/Continuous%20Integration%20(CI).md). I'm really interested in something for a codespace. So what I'll do next is I'll look over here on the left
>
> **[1:34](https://www.linkedin.com/learning/practical-github-code-search/finding-code-to-learn-from?u=76281980&t=94)** to see what's available. And first I'm going to choose the language to be Dockerfile, 'cause I did notice that sometimes it's picking up things like this DockerTests. This is just a markdown document talking about Dockerfiles. So I want to make sure that I hit Dockerfile here. That'll just give me the Dockerfile. Now some of these are in different places than I said, that I only won things in the dev container 'cause I'm assuming that it's related to how [Codespaces](../../Skills/Software%20Development/Codespaces.md) are put together. So I'll click on this path and you can see everything changing up here. And then I can take a look through this and I'm going to add a keyword to make sure that I'm only getting [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) paths or Python Dockerfiles. So that gives me only Python Dockerfiles in the dev container with a language of Dockerfile to make sure that it's a Dockerfile that I'm talking about. So that's getting pretty good. I can look for some things down here that might be helpful. Let's see if we can sort of take a look at the Dockerfiles that my organization has done. So I'm going to look for org and as I look for that, it's showing me the orgs that I am subscribed to. So I'm going to click on LinkedInLearning and that's really going to narrow things down to like nine files. Now, occasionally you will make a search that it doesn't like. So let me show you what that's like. So I'm going to type in is, and I'm going to hit the colon here. So notice that it's saying
>
> **[3:07](https://www.linkedin.com/learning/practical-github-code-search/finding-code-to-learn-from?u=76281980&t=187)** that I can choose either archived or forked. So that's kind of cool. It lets you look for archived repos, which is something that you do when you don't really want to delete a repo, but you can archive it so that you can get to it later but it doesn't come up normally under search. What I really wanted though is to make sure that what I'm looking for is a public repo. So let's go ahead and type that in, is:public and it gives me this error. You've probably run into this already. This is what happens when you make a mistake. It tells you that this didn't match any code. Sometimes it gives you a warning and it's taken into consideration, the context of the type of search that you're trying to do. So it's telling you here that searching for this term literally is not going to work, right? And really the problem is this is public section right here. It's going to try to give you some suggestions on the type of things that you can do and you know, some hints about some of the other things that you can try but this is what you get if you try to do something that's not making sense for it. Now, I personally think that I should be able to look for is:public in this context but the current version of the search isn't liking that. So I'm going to have to back out and go back just to my regular search that I was doing for what I need, this is great. It's taken me right to some code that I can take a peek at to see how people in my organization have been creating docker containers to take a look at starting up a codespace.
>
> **[4:42](https://www.linkedin.com/learning/practical-github-code-search/finding-code-to-learn-from?u=76281980&t=282)** So this works for me. You may want to try this yourself and try to see, when you are trying to learn from a piece of code, what kind of searches work really well. And I think a combination of using, you know, qualifiers as well as using the interface is the best way to find things when you are learning from code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (3), [GitHub](../../Skills/Software%20Development/GitHub.md) (2), [Continuous integration](../../Skills/Software%20Development/Continuous%20Integration%20(CI).md) (1), [Codespaces](../../Skills/Software%20Development/Codespaces.md) (1)
> **CLI Commands:** make (8), find (3), python (3), docker (1)
> **UI Navigation:** click on (3), go to (1)
> **Tools:** github (2)
> **Definitions:** is a  (2)
> **URLs:** [github.com](https://github.com) (1)
> **Warnings:** warning (1)
> **Speakers:** - [narrator] (1)

#### [Code results](https://www.linkedin.com/learning/practical-github-code-search/code-results?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-github-code-search/code-results?u=76281980&t=0)** - [Instructor] There's a few real subtle additions to the search results for code that I think are so good that you're not going to know that you didn't have them before. They look so natural that you're really going to love it. So I'm going to start off by once again being at just [github.com](https://github.com). Which you can get to it just by clicking on this Mona Lisa icon here. And I want to scope this properly. So I know that I'm going to be looking for something in my own code. And instead of trying to create a search or a safe search for that I always just go here to this little icon and just go to my repositories. That'll scope the search so that now if I hit slash it's already there at owner, right? And I can type something in here. So I'm going to do a try a path and for a path I could do like *.py or do some sort of regular expression if I want to. So this is going to find all of my [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) code and you can see that I don't code a ton in Python. Most of these aren't even mine they're just sort of part of other packages. I could try to now go directly to this feed.py as a result. I'm going to change the owner to repo and then here I can type in planet of the web and here notice that it's already looking for things and that first result was called podcast generator. So whether I type in generator or podcast generator it'll come up and there's a couple of them. I want to go to the first one. So I'm going to hit that and it takes me to the podcast generator file.
>
> **[1:35](https://www.linkedin.com/learning/practical-github-code-search/code-results?u=76281980&t=95)** I probably want to add specifically the Python file. So let's hit the slash again, and nice it remembered everything before. So I'm going to add that path *.py. And it takes me just to the one file I have, I could really put in a sort of, put in feed.py as the path. But this'll work. So what I want to show you is what happens when I actually click on this code. Now this is the new code view and sometimes some of these things will be hidden. So there's two sidebars, one on the left and one on the right. This one shows you the commit. So notice you can go to different branches. If you have been publishing different versions of this code you can actually go to the different branches or view all the branches. And this left sidebar is like a file view. And believe it or not, it wasn't here before. As soon as I saw it, it felt like something that was there already. If you do go to code view, you get kind of the list of files. So you know this is sort of a similar thing, but it's so much more useful that when you're looking at a specific piece of code that you get the files that are also in the same directory. And you can, you know, hit the 'T' key here you can see that there's a shortcut and start typing in something in here. So say that we wanted to find the action .yml. You can also just look for things within the sub directories right here. And if you want to you can also show or hide this right sidebar. So notice that sometimes this gets docked but this is the symbols panel. And symbol is basically anything that is not plain text
>
> **[3:11](https://www.linkedin.com/learning/practical-github-code-search/code-results?u=76281980&t=191)** in your code. So if it finds a symbol something that you have entered repeatedly notice that it's automatically highlighting it for you which is pretty cool. It tells you all the places where you have used this. So the sub element method in Python I'm using over and over. And sometimes it'll try to give you a definition depending on how you're using it of what this symbol even means. And it's going to get a lot better in the future. It's going to be able to recognize symbols from a lot of different languages and even give you feedback about how you use that symbol in multiple places and also what those symbols perhaps mean. So I can do right here, click on search for symbol and it can try to find that symbol which is also a qualifier in other files as well. So you can actually search for a symbol like where did I use this specific method? Which files have I used this in? And it'll take you to that and allow you to see all the other places where you're using. And see there's great navigation here. You can also filter the symbols if you have a ton of them. And this is just such a huge improvement. But what I really love about it is that it feels like it's always been there. When user interfaces are so good that it seems like an obvious thing you know they have done a fantastic job. And this is a fantastic way to work with and also look at the code that you're dealing with on a daily basis.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (4), [GitHub](../../Skills/Software%20Development/GitHub.md) (1)
> **CLI Commands:** python (4), find (3)
> **UI Navigation:** go to (5), click on (2)
> **File Paths:** feed.py (2)
> **URLs:** [github.com](https://github.com) (1)
> **Tools:** github (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)


## Instructor

- [Ray Villalobos](../../Instructors/Software%20Development/Ray%20Villalobos.md)

## Skills Covered

- GitHub

## Path Context

### In [Career Essentials in GitHub Professional Certificate](../../Paths/Software%20Development/Professional%20Certificates/Career%20Essentials%20in%20GitHub%20Professional%20Certificate.md)
← [Practical GitHub Copilot](Practical%20GitHub%20Copilot.md) | **4 of 4**

## Part of

- [Career Essentials in GitHub Professional Certificate](../../Paths/Software%20Development/Professional%20Certificates/Career%20Essentials%20in%20GitHub%20Professional%20Certificate.md)

## Appears In

- [Career Essentials in GitHub Professional Certificate](../../Paths/Software%20Development/Professional%20Certificates/Career%20Essentials%20in%20GitHub%20Professional%20Certificate.md)

## Related Courses

_Courses sharing skills:_

- [Practical GitHub Project Management and Collaboration](Practical%20GitHub%20Project%20Management%20and%20Collaboration.md) — GitHub
- [Creating a Book Search Engine from Scratch Using Java and GitHub Copilot](../Artificial%20Intelligence%20(AI)/Creating%20a%20Book%20Search%20Engine%20from%20Scratch%20Using%20Java%20and%20GitHub%20Copilot.md) — GitHub
- [Benefits of GitHub Community](../Artificial%20Intelligence%20(AI)/Benefits%20of%20GitHub%20Community.md) — GitHub
- [GitHub Foundations- Privacy, Security, and Administration](../Artificial%20Intelligence%20(AI)/GitHub%20Foundations-%20Privacy%2C%20Security%2C%20and%20Administration.md) — GitHub
- [Learning GitHub Codespaces for Enterprise](../Artificial%20Intelligence%20(AI)/Learning%20GitHub%20Codespaces%20for%20Enterprise.md) — GitHub

---

[↑ Back to top](#)