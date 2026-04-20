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
  - Career Essentials in GitHub Professional Certificate
path_count: 1
tags:
  - course
  - topic/software-development
  - skill/github
status: not-started
created: 2026-04-20
---

![Practical GitHub Code Search](https://media.licdn.com/dms/image/v2/D560DAQGVJmvT3cIOXg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1684514017465?e=2147483647&amp;v=beta&amp;t=HeqmlkUlfTYVfy0lj9t6HQDFbnb_4Zuemu-fVdxy3S0)

# Practical GitHub Code Search

> GitHub is a vast code repository—with over 100 million developers and more than 330 million repositories, it’s the largest developer platform in the world. Finding your way when you're looking for something specific can be difficult, but GitHub has tools to help. In this course, Ray Villalobos helps you find what you need. Ray starts out with a look at the regular search features of GitHub—showing

> [LinkedIn Learning](https://www.linkedin.com/learning/practical-github-code-search) | 41m | Advanced | 6K learners
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Ray Villalobos]]

## Skills Covered

- GitHub

## Table of Contents

### Introduction

#### Creating projects for development
> [LinkedIn Learning](https://www.linkedin.com/learning/practical-github-code-search/creating-projects-for-development?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-github-code-search/creating-projects-for-development?u=76281980&t=0)** - GitHub hosts more than a hundred million developers and hundreds of millions of repositories, and that can add up to a lot of code, so finding what you need can quickly feel overwhelming.
>
> **[0:10](https://www.linkedin.com/learning/practical-github-code-search/creating-projects-for-development?u=76281980&t=10)** So GitHub Code Search changes the way developers find and reuse code.
>
> **[0:15](https://www.linkedin.com/learning/practical-github-code-search/creating-projects-for-development?u=76281980&t=15)** Built from the ground up in Rust, it lets you search billions of lines of code in milliseconds.
>
> **[0:20](https://www.linkedin.com/learning/practical-github-code-search/creating-projects-for-development?u=76281980&t=20)** In this course, I'm going to show you how to build powerful queries, use qualifiers and operators, plus work with the new code view.
>
> **[0:27](https://www.linkedin.com/learning/practical-github-code-search/creating-projects-for-development?u=76281980&t=27)** You'll learn shortcuts to move faster and techniques to refine results.
>
> **[0:32](https://www.linkedin.com/learning/practical-github-code-search/creating-projects-for-development?u=76281980&t=32)** Now, whether you're solving problems, studying examples, or revisiting past work, you'll leap with a faster way to get to the code that matters.
>
> **[0:40](https://www.linkedin.com/learning/practical-github-code-search/creating-projects-for-development?u=76281980&t=40)** So if you want to master finding code within GitHub, let's do this.

> [!info]- Semantic Content
>
> **Tools:** github (3)
> **Code Keywords:** let (1), this. (1)
> **CLI Commands:** find (1)
> **Speakers:** - github (1)

#### Using the slideshow
> [LinkedIn Learning](https://www.linkedin.com/learning/practical-github-code-search/using-the-slideshow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-github-code-search/using-the-slideshow?u=76281980&t=0)** - [Instructor] You can find all the slides for this course at [raybo.org/slides_githubsearch](https://raybo.org/slides_githubsearch), which is the page you're looking at.
>
> **[0:09](https://www.linkedin.com/learning/practical-github-code-search/using-the-slideshow?u=76281980&t=9)** At the bottom of the screen there is a toolbar, which you can show or hide by hitting the T key on your keyboard.
>
> **[0:16](https://www.linkedin.com/learning/practical-github-code-search/using-the-slideshow?u=76281980&t=16)** There are some links to my courses, my blog, as well as some other contact information.
>
> **[0:22](https://www.linkedin.com/learning/practical-github-code-search/using-the-slideshow?u=76281980&t=22)** If you want to get to one of the slides in the course, just hit the M key, and you can choose one of these different slides.
>
> **[0:30](https://www.linkedin.com/learning/practical-github-code-search/using-the-slideshow?u=76281980&t=30)** So for example, if I want to watch the first chapter and the first video, I would choose 0101, and if I click on that, now I can use the arrow keys to navigate through the slides that I used for that video.
>
> **[0:45](https://www.linkedin.com/learning/practical-github-code-search/using-the-slideshow?u=76281980&t=45)** You can also hit the M key and click on this notes section, and this will take you to all the notes that I wrote for that specific slideshow.
>
> **[0:55](https://www.linkedin.com/learning/practical-github-code-search/using-the-slideshow?u=76281980&t=55)** This often has links to different places on the web that I refer to on the slideshow.
>
> **[1:01](https://www.linkedin.com/learning/practical-github-code-search/using-the-slideshow?u=76281980&t=61)** If I want to go back to the slides, just go ahead and click on this icon right next to the index.

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

#### GitHub code search
> [LinkedIn Learning](https://www.linkedin.com/learning/practical-github-code-search/github-code-search?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-github-code-search/github-code-search?u=76281980&t=0)** - [Instructor] GitHub Code Search is a featuring GitHub that lets you find the code you're looking for faster and more efficiently.
>
> **[0:06](https://www.linkedin.com/learning/practical-github-code-search/github-code-search?u=76281980&t=6)** You can find more information on this website which is an overview of the features available through Code Search.
>
> **[0:14](https://www.linkedin.com/learning/practical-github-code-search/github-code-search?u=76281980&t=14)** With it, you can quickly search through your own code, your team's code, or billions of lines of public code.
>
> **[0:21](https://www.linkedin.com/learning/practical-github-code-search/github-code-search?u=76281980&t=21)** It was written from scratch in Rust and uses modern approaches like charting and delta and coding to allow you to search through terabytes of data and billions of lines of code in milliseconds.
>
> **[0:31](https://www.linkedin.com/learning/practical-github-code-search/github-code-search?u=76281980&t=31)** You can learn more about the technology behind the improvements on this blog post right here.
>
> **[0:43](https://www.linkedin.com/learning/practical-github-code-search/github-code-search?u=76281980&t=43)** Let's talk features.
>
> **[0:44](https://www.linkedin.com/learning/practical-github-code-search/github-code-search?u=76281980&t=44)** You can use regular expressions or bullion operators like and or or, and there's also tons of keyboard shortcuts to help you search faster.
>
> **[0:53](https://www.linkedin.com/learning/practical-github-code-search/github-code-search?u=76281980&t=53)** Once you start searching, you'll get suggestions throughout the entire interface as well as added completions that suggest what you should do.
>
> **[1:01](https://www.linkedin.com/learning/practical-github-code-search/github-code-search?u=76281980&t=61)** There is an advanced and intuitive syntax that helps you build and save your searches so you can retrieve similar results later.
>
> **[1:09](https://www.linkedin.com/learning/practical-github-code-search/github-code-search?u=76281980&t=69)** And it's not just a search engine.
>
> **[1:11](https://www.linkedin.com/learning/practical-github-code-search/github-code-search?u=76281980&t=71)** There is a new code view that lets you interact with the results better with a sidebar that also shows you definitions of the code and a file browser that's more familiar to what you're used to in your IDE.
>
> **[1:24](https://www.linkedin.com/learning/practical-github-code-search/github-code-search?u=76281980&t=84)** As of this video, it's not on by default on GitHub.
>
> **[1:26](https://www.linkedin.com/learning/practical-github-code-search/github-code-search?u=76281980&t=86)** It's available through a public beta which you can sign up by going to [github.com](https://github.com).
>
> **[1:32](https://www.linkedin.com/learning/practical-github-code-search/github-code-search?u=76281980&t=92)** Now, you toggle this feature by going to the feature preview section and look for the new code search and code view.
>
> **[1:39](https://www.linkedin.com/learning/practical-github-code-search/github-code-search?u=76281980&t=99)** So we'll click on this link right here which is going to take us to [github.com](https://github.com) and then look up your profile right here.
>
> **[1:46](https://www.linkedin.com/learning/practical-github-code-search/github-code-search?u=76281980&t=106)** Notice there is a section called feature preview and then here you're going to find hopefully a lot of different things that you can turn on and off and one of them is this new code search and code view.
>
> **[1:57](https://www.linkedin.com/learning/practical-github-code-search/github-code-search?u=76281980&t=117)** You can enable it or disable it depending on which version of the Code Search you want to use.
>
> **[2:03](https://www.linkedin.com/learning/practical-github-code-search/github-code-search?u=76281980&t=123)** There are some differences between the old and the new, and there are right now still some instances where you may want to toggle this on and off.
>
> **[2:13](https://www.linkedin.com/learning/practical-github-code-search/github-code-search?u=76281980&t=133)** You can also access it through a special URL at [github.com/search](https://github.com/search).

> [!info]- Semantic Content
>
> **Tools:** github (6)
> **Code Keywords:** public (2), let (1), interface (1), new, (1)
> **Definitions:** is a  (3), is an  (2)
> **CLI Commands:** find (3)
> **URLs:** [github.com](https://github.com) (3)
> **UI Navigation:** toggle (2), click on (1)
> **Env Vars:** ide (1), url (1)
> **Speakers:** - [instructor] (1)

#### Using the search box and shortcuts
> [LinkedIn Learning](https://www.linkedin.com/learning/practical-github-code-search/using-the-search-box-and-shortcuts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-github-code-search/using-the-search-box-and-shortcuts?u=76281980&t=0)** - [Instructor] Let's take a look at some of the features of the search box, as well as the shortcuts that are available.
>
> **[0:05](https://www.linkedin.com/learning/practical-github-code-search/using-the-search-box-and-shortcuts?u=76281980&t=5)** Search is available from every page on the site via a search box in the header.
>
> **[0:11](https://www.linkedin.com/learning/practical-github-code-search/using-the-search-box-and-shortcuts?u=76281980&t=11)** You can see that there is a "slash" in the box, which suggests that you can use the slash in your keyboard to get to the search box.
>
> **[0:18](https://www.linkedin.com/learning/practical-github-code-search/using-the-search-box-and-shortcuts?u=76281980&t=18)** And although it doesn't say so, you can also hit the "S" key, and of course, you can click on the search box.
>
> **[0:26](https://www.linkedin.com/learning/practical-github-code-search/using-the-search-box-and-shortcuts?u=76281980&t=26)** You can also use the command pallet to get to the search, which is "command+K" or "command+option+K" on a Mac, and "control+K" and "control+option+K" on a PC, although I think using the slash is a little bit easier and it seems to have better auto completion.
>
> **[0:42](https://www.linkedin.com/learning/practical-github-code-search/using-the-search-box-and-shortcuts?u=76281980&t=42)** Just have to mention that if you are ever looking for shortcuts in GitHub, you can also hit the question mark key to get a list.
>
> **[0:51](https://www.linkedin.com/learning/practical-github-code-search/using-the-search-box-and-shortcuts?u=76281980&t=51)** And then here you can see all of the shortcuts, plus even more down here in this link.
>
> **[0:57](https://www.linkedin.com/learning/practical-github-code-search/using-the-search-box-and-shortcuts?u=76281980&t=57)** You can also hit "Escape" to get out of any one of those dialogue boxes.
>
> **[1:02](https://www.linkedin.com/learning/practical-github-code-search/using-the-search-box-and-shortcuts?u=76281980&t=62)** The search box is context sensitive.
>
> **[1:05](https://www.linkedin.com/learning/practical-github-code-search/using-the-search-box-and-shortcuts?u=76281980&t=65)** So right now we are at just [github.com](https://github.com) and if I hit the slash, you'll notice that I can search for things and it gives you some hints down here.
>
> **[1:14](https://www.linkedin.com/learning/practical-github-code-search/using-the-search-box-and-shortcuts?u=76281980&t=74)** So I'm going to type in "React," and I'm going to hit return, and notice that it's going to look for "React" in [github.com](https://github.com).
>
> **[1:24](https://www.linkedin.com/learning/practical-github-code-search/using-the-search-box-and-shortcuts?u=76281980&t=84)** So you can see that it lets you also filter by all these options here.
>
> **[1:29](https://www.linkedin.com/learning/practical-github-code-search/using-the-search-box-and-shortcuts?u=76281980&t=89)** However, I'm going to go now to my profile page, and I'm going to hit the slash, and you'll see that now it's auto filling the owner, because it knows that I am looking under my profile, so it automatically pre-fills that.
>
> **[1:45](https://www.linkedin.com/learning/practical-github-code-search/using-the-search-box-and-shortcuts?u=76281980&t=105)** And let's say that I am looking at a specific repository, so I'll click right here on "repositories," and I'll click on this podcast generator repository.
>
> **[1:55](https://www.linkedin.com/learning/practical-github-code-search/using-the-search-box-and-shortcuts?u=76281980&t=115)** And now I'm going to hit the slash and you'll notice that it's pre-filled where I am, so it's saying "repo," and then it's explaining that I am in planet of the web slash podcast generator.
>
> **[2:07](https://www.linkedin.com/learning/practical-github-code-search/using-the-search-box-and-shortcuts?u=76281980&t=127)** Now whenever you are searching, you can also use the arrow keys and the enter key to accept one of the options that you've selected.
>
> **[2:16](https://www.linkedin.com/learning/practical-github-code-search/using-the-search-box-and-shortcuts?u=76281980&t=136)** So I can search for "action dot YML" right here, by hitting return, and it's going to show me that file.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), return, (2)
> **Tools:** github (3)
> **URLs:** [github.com](https://github.com) (2)
> **UI Navigation:** click on (2)
> **Env Vars:** yml (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Search qualifiers
> [LinkedIn Learning](https://www.linkedin.com/learning/practical-github-code-search/search-qualifiers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-github-code-search/search-qualifiers?u=76281980&t=0)** - [Instructor] So you may be wondering what some of these other qualifiers are.
>
> **[0:04](https://www.linkedin.com/learning/practical-github-code-search/search-qualifiers?u=76281980&t=4)** I'm going to show you a big, huge list in a minute, and I want you not to worry about the size of the list because there are a lot of qualifiers that you can use.
>
> **[0:14](https://www.linkedin.com/learning/practical-github-code-search/search-qualifiers?u=76281980&t=14)** The super nice thing about search is that it gives you a lot of hints about what these qualifiers are, and also how you should fill them out.
>
> **[0:22](https://www.linkedin.com/learning/practical-github-code-search/search-qualifiers?u=76281980&t=22)** So you've already seen things like the owner qualifier, and perhaps something like the org.
>
> **[0:27](https://www.linkedin.com/learning/practical-github-code-search/search-qualifiers?u=76281980&t=27)** And you may have seen some other sections in the search and the search results that are going to help you with some of these things.
>
> **[0:34](https://www.linkedin.com/learning/practical-github-code-search/search-qualifiers?u=76281980&t=34)** Now, there's basically two types of qualifiers, these sort of generic main qualifiers, and there's also a series of flex qualifiers, which you'll use to narrow down a lot of the main qualifiers.
>
> **[0:48](https://www.linkedin.com/learning/practical-github-code-search/search-qualifiers?u=76281980&t=48)** So, for example, there is the type qualifier, which you can use with like org, pr, issues, discussions, et cetera.
>
> **[0:55](https://www.linkedin.com/learning/practical-github-code-search/search-qualifiers?u=76281980&t=55)** So that allows you to further refine your search.
>
> **[0:58](https://www.linkedin.com/learning/practical-github-code-search/search-qualifiers?u=76281980&t=58)** In addition, you can also use the is flex qualifier to let you look through whether an item is a fork, a poll request, an issue, et cetera, et cetera.
>
> **[1:10](https://www.linkedin.com/learning/practical-github-code-search/search-qualifiers?u=76281980&t=70)** There's also an in qualifier, and that gives you a simple way to search for content in a repository, and you can look for the title, comment, or the body in here as well.
>
> **[1:24](https://www.linkedin.com/learning/practical-github-code-search/search-qualifiers?u=76281980&t=84)** Now, the important thing here is to try some of these out.
>
> **[1:26](https://www.linkedin.com/learning/practical-github-code-search/search-qualifiers?u=76281980&t=86)** I know this is a big, huge list.
>
> **[1:28](https://www.linkedin.com/learning/practical-github-code-search/search-qualifiers?u=76281980&t=88)** It's not going to help you unless you check these things out.
>
> **[1:31](https://www.linkedin.com/learning/practical-github-code-search/search-qualifiers?u=76281980&t=91)** So let's look at some of the examples.
>
> **[1:34](https://www.linkedin.com/learning/practical-github-code-search/search-qualifiers?u=76281980&t=94)** So I'm going to come back here to the [github.com](https://github.com) page, and I'm going to try to search for something super simple.
>
> **[1:40](https://www.linkedin.com/learning/practical-github-code-search/search-qualifiers?u=76281980&t=100)** Notice that already when I click on the search box or I hit the Slash button, I get a lot of different options here.
>
> **[1:46](https://www.linkedin.com/learning/practical-github-code-search/search-qualifiers?u=76281980&t=106)** So I can search for my latest repositories or I can search for a specific owners.
>
> **[1:52](https://www.linkedin.com/learning/practical-github-code-search/search-qualifiers?u=76281980&t=112)** So it's going to give you some hints, but I'm just going to type in javascript here because it's going to be a pretty broad search.
>
> **[1:58](https://www.linkedin.com/learning/practical-github-code-search/search-qualifiers?u=76281980&t=118)** When it gives me my search results, you can see some of the main qualifiers here on the left-hand side.
>
> **[2:04](https://www.linkedin.com/learning/practical-github-code-search/search-qualifiers?u=76281980&t=124)** And you can even expand this to see more of them.
>
> **[2:07](https://www.linkedin.com/learning/practical-github-code-search/search-qualifiers?u=76281980&t=127)** So I can look for code that has the keyword javascript in it, repositories, issues, et cetera, et cetera.
>
> **[2:16](https://www.linkedin.com/learning/practical-github-code-search/search-qualifiers?u=76281980&t=136)** So if I look for repositories, I can further refine that search by using some of these options down here, looking for specific languages.
>
> **[2:27](https://www.linkedin.com/learning/practical-github-code-search/search-qualifiers?u=76281980&t=147)** Since I already type JavaScript in here, that's not going to make a lot of sense, although I could perhaps click on TypeScript, which is a subset of JavaScript, and that would let me know repos that had both of the items in there.
>
> **[2:39](https://www.linkedin.com/learning/practical-github-code-search/search-qualifiers?u=76281980&t=159)** But notice that there's also a section down here in the Advanced tab right here that lets me further refine my search by different things.
>
> **[2:49](https://www.linkedin.com/learning/practical-github-code-search/search-qualifiers?u=76281980&t=169)** So, for example, I can look for the number of stars of these repos, and it already gives me a lot of different values right here.
>
> **[2:57](https://www.linkedin.com/learning/practical-github-code-search/search-qualifiers?u=76281980&t=177)** So you could see that this repo has to have between zero and 100 stars.
>
> **[3:03](https://www.linkedin.com/learning/practical-github-code-search/search-qualifiers?u=76281980&t=183)** And I'm going to hit return here.
>
> **[3:05](https://www.linkedin.com/learning/practical-github-code-search/search-qualifiers?u=76281980&t=185)** And that's further going to refine my search by that amount.
>
> **[3:10](https://www.linkedin.com/learning/practical-github-code-search/search-qualifiers?u=76281980&t=190)** So you don't really have to memorize all of the different qualifiers, you just have to know that there are different kinds of qualifiers, mainly the traditional sort of qualifiers, and then the type, the is, and the in, which allows you to filter things further.
>
> **[3:28](https://www.linkedin.com/learning/practical-github-code-search/search-qualifiers?u=76281980&t=208)** And there is a lot of options.
>
> **[3:30](https://www.linkedin.com/learning/practical-github-code-search/search-qualifiers?u=76281980&t=210)** Most of them are right here.
>
> **[3:32](https://www.linkedin.com/learning/practical-github-code-search/search-qualifiers?u=76281980&t=212)** The other ones you can also find through this last option over here, which is the Advanced search.
>
> **[3:37](https://www.linkedin.com/learning/practical-github-code-search/search-qualifiers?u=76281980&t=217)** And Advanced search is going to be just a form that you can use to make it easier to find all of the different categories that you can search by.
>
> **[3:47](https://www.linkedin.com/learning/practical-github-code-search/search-qualifiers?u=76281980&t=227)** So here is pretty much all of the options that we already saw, with some examples of what you can type.
>
> **[3:54](https://www.linkedin.com/learning/practical-github-code-search/search-qualifiers?u=76281980&t=234)** And notice that they are broken down by the types of things that you want to search.
>
> **[3:59](https://www.linkedin.com/learning/practical-github-code-search/search-qualifiers?u=76281980&t=239)** And that's the thing about the qualifiers too.
>
> **[4:02](https://www.linkedin.com/learning/practical-github-code-search/search-qualifiers?u=76281980&t=242)** So sometimes, you'll try to find qualifiers and sub qualifiers, and it won't find what you're looking for, and that's because they really should be thought of as giving you the option of looking for certain types of things.
>
> **[4:14](https://www.linkedin.com/learning/practical-github-code-search/search-qualifiers?u=76281980&t=254)** So you can say, if you're looking for a repository, it would make sense to find the number of stars for the repository, with a certain amount of forks, of the size, and so on and so forth.
>
> **[4:26](https://www.linkedin.com/learning/practical-github-code-search/search-qualifiers?u=76281980&t=266)** But if I'm looking under issues, perhaps, the stars don't really matter all that much for issues.
>
> **[4:31](https://www.linkedin.com/learning/practical-github-code-search/search-qualifiers?u=76281980&t=271)** You want to find things like, for example, whether or not an issue is open or close, with a specific reason, with certain labels, et cetera, et cetera.
>
> **[4:40](https://www.linkedin.com/learning/practical-github-code-search/search-qualifiers?u=76281980&t=280)** So the qualifiers aren't as important to memorize because they are everywhere in the interface.
>
> **[4:46](https://www.linkedin.com/learning/practical-github-code-search/search-qualifiers?u=76281980&t=286)** And if you want to learn more about them, you can look at this Advanced search, and it's going to give you all the options that you need to know in order to search.
>
> **[4:56](https://www.linkedin.com/learning/practical-github-code-search/search-qualifiers?u=76281980&t=296)** I do want to remind you that if you're not seeing what I'm seeing when I'm searching, you want to make sure that you go to Feature preview on your account, and that you have this New Code Search and Code View turned on.
>
> **[5:07](https://www.linkedin.com/learning/practical-github-code-search/search-qualifiers?u=76281980&t=307)** Let's go ahead and just disable it for a second to see what this looks like.
>
> **[5:11](https://www.linkedin.com/learning/practical-github-code-search/search-qualifiers?u=76281980&t=311)** And then I'm going to go back here and then just type in... And notice that the list itself is a little bit different than what we've been seeing.
>
> **[5:23](https://www.linkedin.com/learning/practical-github-code-search/search-qualifiers?u=76281980&t=323)** So if you're not seeing the same thing I'm seeing, make sure that you do have that turn on.
>
> **[5:27](https://www.linkedin.com/learning/practical-github-code-search/search-qualifiers?u=76281980&t=327)** I'm just going to do a search for javascript again so you can see the difference between what we get.
>
> **[5:31](https://www.linkedin.com/learning/practical-github-code-search/search-qualifiers?u=76281980&t=331)** It's similar but not the same.
>
> **[5:33](https://www.linkedin.com/learning/practical-github-code-search/search-qualifiers?u=76281980&t=333)** And I'm missing some information here that would be on the right, which are some hints and lots of other goodies.
>
> **[5:40](https://www.linkedin.com/learning/practical-github-code-search/search-qualifiers?u=76281980&t=340)** Although it does give me this cheat sheet.
>
> **[5:42](https://www.linkedin.com/learning/practical-github-code-search/search-qualifiers?u=76281980&t=342)** And here's where the Advanced search would be, which is still pretty similar, but the two types of searches are different.
>
> **[5:49](https://www.linkedin.com/learning/practical-github-code-search/search-qualifiers?u=76281980&t=349)** And I'm also going to mention that sometimes because the new search engine is in beta form, sometimes the things that work with traditional search are not going to be quite implemented in the new search.
>
> **[6:03](https://www.linkedin.com/learning/practical-github-code-search/search-qualifiers?u=76281980&t=363)** So just keep that in mind as you continue to attempt to search for things.

> [!info]- Semantic Content
>
> **CLI Commands:** find (6), make (5)
> **Code Keywords:** let (4), super (2), type, (1), type. (1), for, (1)
> **Definitions:** is a  (5)
> **UI Navigation:** click on (2), go to (1)
> **Analogies:** for example (3)
> **URLs:** [github.com](https://github.com) (1)
> **Tools:** github (1)
> **Speakers:** - [instructor] (1)

#### Search results
> [LinkedIn Learning](https://www.linkedin.com/learning/practical-github-code-search/search-results?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-github-code-search/search-results?u=76281980&t=0)** - [Instructor] Let's take a look at the search interface.
>
> **[0:03](https://www.linkedin.com/learning/practical-github-code-search/search-results?u=76281980&t=3)** It is truly a thing of beauty.
>
> **[0:05](https://www.linkedin.com/learning/practical-github-code-search/search-results?u=76281980&t=5)** The UI and UX are some of the best I've seen in any application.
>
> **[0:09](https://www.linkedin.com/learning/practical-github-code-search/search-results?u=76281980&t=9)** So to get there, I'm just going to hit the slash, and I'm going to start by typing org and then I'll choose Microsoft.
>
> **[0:17](https://www.linkedin.com/learning/practical-github-code-search/search-results?u=76281980&t=17)** I'm going to hit return.
>
> **[0:20](https://www.linkedin.com/learning/practical-github-code-search/search-results?u=76281980&t=20)** And you'll see that the first time I search for that it just tries to find the page for the organization.
>
> **[0:26](https://www.linkedin.com/learning/practical-github-code-search/search-results?u=76281980&t=26)** So I'm going to hit slash again and I'll replace that with user and then I'll type in planet of the web here.
>
> **[0:33](https://www.linkedin.com/learning/practical-github-code-search/search-results?u=76281980&t=33)** And you'll see that it'll just jump directly onto my profile page, which is interesting.
>
> **[0:37](https://www.linkedin.com/learning/practical-github-code-search/search-results?u=76281980&t=37)** However, if I hit the slash again and I'm already in here and I'm just going to hit return, basically the same query.
>
> **[0:44](https://www.linkedin.com/learning/practical-github-code-search/search-results?u=76281980&t=44)** This time or the second time, it tries to find the code for that particular owner, which is pretty interesting.
>
> **[0:52](https://www.linkedin.com/learning/practical-github-code-search/search-results?u=76281980&t=52)** Let's go back to Microsoft.
>
> **[0:54](https://www.linkedin.com/learning/practical-github-code-search/search-results?u=76281980&t=54)** So I'm going to hit the slash again and I'll hit delete a couple times to get to Microsoft again.
>
> **[1:05](https://www.linkedin.com/learning/practical-github-code-search/search-results?u=76281980&t=65)** And again, I'll do the slash and do it once again just to get to all of the different options.
>
> **[1:10](https://www.linkedin.com/learning/practical-github-code-search/search-results?u=76281980&t=70)** Now you can see that the main interface has two panes, one to the left and one to the right.
>
> **[1:16](https://www.linkedin.com/learning/practical-github-code-search/search-results?u=76281980&t=76)** The one on the left has all of the options, and you've probably been working with these before.
>
> **[1:21](https://www.linkedin.com/learning/practical-github-code-search/search-results?u=76281980&t=81)** You can filter by different options here.
>
> **[1:24](https://www.linkedin.com/learning/practical-github-code-search/search-results?u=76281980&t=84)** If you click right here, you can see more of the options, and then you have languages.
>
> **[1:29](https://www.linkedin.com/learning/practical-github-code-search/search-results?u=76281980&t=89)** And this is always going to be context sensitive.
>
> **[1:32](https://www.linkedin.com/learning/practical-github-code-search/search-results?u=76281980&t=92)** So depending on which one of these filter by categories you have chosen it will show you different things.
>
> **[1:39](https://www.linkedin.com/learning/practical-github-code-search/search-results?u=76281980&t=99)** So here for example, it's showing me popular repositories, popular paths, and then some other advanced options right here as well as the advanced search down at the bottom.
>
> **[1:50](https://www.linkedin.com/learning/practical-github-code-search/search-results?u=76281980&t=110)** Let's go to repositories.
>
> **[1:53](https://www.linkedin.com/learning/practical-github-code-search/search-results?u=76281980&t=113)** And there's 5,000 of those.
>
> **[1:56](https://www.linkedin.com/learning/practical-github-code-search/search-results?u=76281980&t=116)** Now, one thing I did want to point out, look how quickly it's searching.
>
> **[1:59](https://www.linkedin.com/learning/practical-github-code-search/search-results?u=76281980&t=119)** So I mentioned that this search engine is based on rust which is super fast, and they have done a lot of optimizations to make it super nice.
>
> **[2:08](https://www.linkedin.com/learning/practical-github-code-search/search-results?u=76281980&t=128)** Now notice that sometimes when you search for things you get this extra sidebar and this is sort of like a hints section of your code that encourages you, for example, to sponsor or it lets you give feedback and sometimes it'll give you even more things in here related to the type of things that you're doing.
>
> **[2:29](https://www.linkedin.com/learning/practical-github-code-search/search-results?u=76281980&t=149)** So I'm going to click on issues.
>
> **[2:30](https://www.linkedin.com/learning/practical-github-code-search/search-results?u=76281980&t=150)** I'm going to click through all these right here, just so that you can see that depending on what things you need it's going to give you that additional sidebar or not.
>
> **[2:39](https://www.linkedin.com/learning/practical-github-code-search/search-results?u=76281980&t=159)** And let's go back to repositories.
>
> **[2:43](https://www.linkedin.com/learning/practical-github-code-search/search-results?u=76281980&t=163)** So we can see that over here.
>
> **[2:45](https://www.linkedin.com/learning/practical-github-code-search/search-results?u=76281980&t=165)** It's going to tell you how many results it's received, and a lot of times you want to sort of sort that perhaps by like the number of forks or the number of stars, which you can find by scrolling down here.
>
> **[2:56](https://www.linkedin.com/learning/practical-github-code-search/search-results?u=76281980&t=176)** But there's another section in this main search result area that lets you do the same thing.
>
> **[3:03](https://www.linkedin.com/learning/practical-github-code-search/search-results?u=76281980&t=183)** So if you want to find, say, the project in Microsoft with the most stars, you can look for that.
>
> **[3:09](https://www.linkedin.com/learning/practical-github-code-search/search-results?u=76281980&t=189)** And not surprisingly, it's Visual Studio Code, as well as TypeScript is number two.
>
> **[3:14](https://www.linkedin.com/learning/practical-github-code-search/search-results?u=76281980&t=194)** It tells you the amount of stars that each one of those projects has received 146,000 for VS Code and 90,000 for TypeScript.
>
> **[3:23](https://www.linkedin.com/learning/practical-github-code-search/search-results?u=76281980&t=203)** It gives you some of the different tags right here as well as some additional information, and while this is updated six minutes ago.
>
> **[3:32](https://www.linkedin.com/learning/practical-github-code-search/search-results?u=76281980&t=212)** You can star projects directly, so I'm going to give VS Code a star.
>
> **[3:36](https://www.linkedin.com/learning/practical-github-code-search/search-results?u=76281980&t=216)** I really love that project.
>
> **[3:38](https://www.linkedin.com/learning/practical-github-code-search/search-results?u=76281980&t=218)** And you can also, right here, save the search results so that you can utilize it again later.
>
> **[3:46](https://www.linkedin.com/learning/practical-github-code-search/search-results?u=76281980&t=226)** So if you want to go back to this Microsoft page we can hit the safe button and I'm going to save Microsoft repos.
>
> **[3:54](https://www.linkedin.com/learning/practical-github-code-search/search-results?u=76281980&t=234)** And then you can refine the query and you can just save it.
>
> **[3:58](https://www.linkedin.com/learning/practical-github-code-search/search-results?u=76281980&t=238)** And you'll see that when we create a saved search, the list of the previous searches that I have done is right here.
>
> **[4:06](https://www.linkedin.com/learning/practical-github-code-search/search-results?u=76281980&t=246)** You can hit the delete button to delete this or create another safe search if you want to.
>
> **[4:12](https://www.linkedin.com/learning/practical-github-code-search/search-results?u=76281980&t=252)** So I'm going to hit the close box and now I'm going to hit the slash to get back in here.
>
> **[4:19](https://www.linkedin.com/learning/practical-github-code-search/search-results?u=76281980&t=259)** And I'll delete all this just to show you that your saved query is now in here.
>
> **[4:24](https://www.linkedin.com/learning/practical-github-code-search/search-results?u=76281980&t=264)** And give it whatever name you want, but now that's a quick way of getting back to where you were when you were searching.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), delete (4), interface (2), super (2), return. (1)
> **CLI Commands:** find (4), make (1)
> **Cross-References:** go back to (3)
> **Tools:** vs code (2), visual studio (1)
> **UI Navigation:** go to (1), click on (1)
> **Analogies:** for example (2)
> **Speakers:** - [instructor] (1)

#### Syntax operators
> [LinkedIn Learning](https://www.linkedin.com/learning/practical-github-code-search/syntax-operators?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-github-code-search/syntax-operators?u=76281980&t=0)** - You can construct queries with a variety of operators that can help you narrow your searches.
>
> **[0:05](https://www.linkedin.com/learning/practical-github-code-search/syntax-operators?u=76281980&t=5)** Let's take a look at some of them.
>
> **[0:06](https://www.linkedin.com/learning/practical-github-code-search/syntax-operators?u=76281980&t=6)** You can use comparison operators like greater than, greater than or equals to, less than, or less than and equals to.
>
> **[0:15](https://www.linkedin.com/learning/practical-github-code-search/syntax-operators?u=76281980&t=15)** You can also do ranges by using the two different dots and you can use a star right here.
>
> **[0:21](https://www.linkedin.com/learning/practical-github-code-search/syntax-operators?u=76281980&t=21)** So the first one will be at least 10 or more items, up to 10 items or 10 to a hundred items.
>
> **[0:30](https://www.linkedin.com/learning/practical-github-code-search/syntax-operators?u=76281980&t=30)** And you can also use dates as well as times in these formats right here.
>
> **[0:35](https://www.linkedin.com/learning/practical-github-code-search/syntax-operators?u=76281980&t=35)** Plus you can exclude with minus or the not keyword and not should be capitalized here.
>
> **[0:43](https://www.linkedin.com/learning/practical-github-code-search/syntax-operators?u=76281980&t=43)** You also have the ability to create quotations when you want to be a little more specific.
>
> **[0:48](https://www.linkedin.com/learning/practical-github-code-search/syntax-operators?u=76281980&t=48)** So let's take a look at some examples of this.
>
> **[0:51](https://www.linkedin.com/learning/practical-github-code-search/syntax-operators?u=76281980&t=51)** All right, so here I am back on [github.com](https://github.com).
>
> **[0:53](https://www.linkedin.com/learning/practical-github-code-search/syntax-operators?u=76281980&t=53)** You could just hit this little icon if you ever want to get to the main level here.
>
> **[0:57](https://www.linkedin.com/learning/practical-github-code-search/syntax-operators?u=76281980&t=57)** And I'm going to do a search right here.
>
> **[1:00](https://www.linkedin.com/learning/practical-github-code-search/syntax-operators?u=76281980&t=60)** So I'll hit the slash and I want to type in the word syntax.
>
> **[1:06](https://www.linkedin.com/learning/practical-github-code-search/syntax-operators?u=76281980&t=66)** So I'm going to look for a syntax highlighter for my website.
>
> **[1:09](https://www.linkedin.com/learning/practical-github-code-search/syntax-operators?u=76281980&t=69)** So when I type that in, I get 10,000 results.
>
> **[1:13](https://www.linkedin.com/learning/practical-github-code-search/syntax-operators?u=76281980&t=73)** That's quite a bit.
>
> **[1:15](https://www.linkedin.com/learning/practical-github-code-search/syntax-operators?u=76281980&t=75)** Now I can't sort right here, so if I want to, I can say just give me the ones with the most stars.
>
> **[1:20](https://www.linkedin.com/learning/practical-github-code-search/syntax-operators?u=76281980&t=80)** This isn't a permanent search and it isn't anything that I can save.
>
> **[1:25](https://www.linkedin.com/learning/practical-github-code-search/syntax-operators?u=76281980&t=85)** So if I want to come back and look for this a little bit later, I may want to add some additional qualifiers here.
>
> **[1:32](https://www.linkedin.com/learning/practical-github-code-search/syntax-operators?u=76281980&t=92)** Now notice that if I add quotations here, it's not going to just look for either syntax or highlighter, but it's going to look for those words together which sometimes gives you a little bit of a better search.
>
> **[1:44](https://www.linkedin.com/learning/practical-github-code-search/syntax-operators?u=76281980&t=104)** So now I have 10,000. That's still quite a bit.
>
> **[1:47](https://www.linkedin.com/learning/practical-github-code-search/syntax-operators?u=76281980&t=107)** Let's see if we can narrow that a little bit more.
>
> **[1:50](https://www.linkedin.com/learning/practical-github-code-search/syntax-operators?u=76281980&t=110)** So I'm going to say I want to see the ones that have at least a thousand stars, 'cause this appears to be a pretty popular topic.
>
> **[1:58](https://www.linkedin.com/learning/practical-github-code-search/syntax-operators?u=76281980&t=118)** And that gives me just 48 results.
>
> **[2:01](https://www.linkedin.com/learning/practical-github-code-search/syntax-operators?u=76281980&t=121)** That's much better.
>
> **[2:02](https://www.linkedin.com/learning/practical-github-code-search/syntax-operators?u=76281980&t=122)** Now if I take a look at these, I can see that there's a lot of interesting stuff, but there's weird things like Postgres CLI without auto-completion and syntax highlighting.
>
> **[2:12](https://www.linkedin.com/learning/practical-github-code-search/syntax-operators?u=76281980&t=132)** That doesn't quite seem what I'm looking for.
>
> **[2:14](https://www.linkedin.com/learning/practical-github-code-search/syntax-operators?u=76281980&t=134)** Or a terminal client for MySQL.
>
> **[2:16](https://www.linkedin.com/learning/practical-github-code-search/syntax-operators?u=76281980&t=136)** And there's some other things in here.
>
> **[2:19](https://www.linkedin.com/learning/practical-github-code-search/syntax-operators?u=76281980&t=139)** So let's see what else we can do to narrow this down a little better.
>
> **[2:23](https://www.linkedin.com/learning/practical-github-code-search/syntax-operators?u=76281980&t=143)** I'm going to add language and I'll put JavaScript here.
>
> **[2:28](https://www.linkedin.com/learning/practical-github-code-search/syntax-operators?u=76281980&t=148)** Now you can actually choose that from this list right here.
>
> **[2:30](https://www.linkedin.com/learning/practical-github-code-search/syntax-operators?u=76281980&t=150)** But notice how well it gives you the hints when you type in those things.
>
> **[2:34](https://www.linkedin.com/learning/practical-github-code-search/syntax-operators?u=76281980&t=154)** So I'm just going to click on JavaScript, let's hit return.
>
> **[2:38](https://www.linkedin.com/learning/practical-github-code-search/syntax-operators?u=76281980&t=158)** And now we got 10 results.
>
> **[2:41](https://www.linkedin.com/learning/practical-github-code-search/syntax-operators?u=76281980&t=161)** Let's take a look at what we got here.
>
> **[2:43](https://www.linkedin.com/learning/practical-github-code-search/syntax-operators?u=76281980&t=163)** And this is sort of cool.
>
> **[2:44](https://www.linkedin.com/learning/practical-github-code-search/syntax-operators?u=76281980&t=164)** This turns your source code into syntax highlighted images, but that isn't quite what I'm looking for.
>
> **[2:51](https://www.linkedin.com/learning/practical-github-code-search/syntax-operators?u=76281980&t=171)** So I can add a not sort of query here.
>
> **[2:54](https://www.linkedin.com/learning/practical-github-code-search/syntax-operators?u=76281980&t=174)** I'll say not.
>
> **[2:56](https://www.linkedin.com/learning/practical-github-code-search/syntax-operators?u=76281980&t=176)** And then I will put in here images.
>
> **[3:00](https://www.linkedin.com/learning/practical-github-code-search/syntax-operators?u=76281980&t=180)** And see what happens then.
>
> **[3:02](https://www.linkedin.com/learning/practical-github-code-search/syntax-operators?u=76281980&t=182)** So now I have nine results.
>
> **[3:03](https://www.linkedin.com/learning/practical-github-code-search/syntax-operators?u=76281980&t=183)** I've kind of gotten rid of that one and I think there's one here for Python or there's something here for Python.
>
> **[3:10](https://www.linkedin.com/learning/practical-github-code-search/syntax-operators?u=76281980&t=190)** So I'm going to add that here and I'll just say, or Python.
>
> **[3:18](https://www.linkedin.com/learning/practical-github-code-search/syntax-operators?u=76281980&t=198)** Okay, that should be a little bit better.
>
> **[3:19](https://www.linkedin.com/learning/practical-github-code-search/syntax-operators?u=76281980&t=199)** So I got nine results now, so that's interesting.
>
> **[3:23](https://www.linkedin.com/learning/practical-github-code-search/syntax-operators?u=76281980&t=203)** So I could still, maybe I should add not instead of or, not Python.
>
> **[3:32](https://www.linkedin.com/learning/practical-github-code-search/syntax-operators?u=76281980&t=212)** Let's try that.
>
> **[3:34](https://www.linkedin.com/learning/practical-github-code-search/syntax-operators?u=76281980&t=214)** Yeah, now we have eight results, so that's great.
>
> **[3:36](https://www.linkedin.com/learning/practical-github-code-search/syntax-operators?u=76281980&t=216)** So let's see.
>
> **[3:38](https://www.linkedin.com/learning/practical-github-code-search/syntax-operators?u=76281980&t=218)** In addition to that, I'm going to say that I want to make sure that this has been updated recently.
>
> **[3:45](https://www.linkedin.com/learning/practical-github-code-search/syntax-operators?u=76281980&t=225)** So I'm going to add another thing here called pushed.
>
> **[3:49](https://www.linkedin.com/learning/practical-github-code-search/syntax-operators?u=76281980&t=229)** And I'm going to say I'm going to want stuff that's been pushed since the beginning of the year.
>
> **[3:54](https://www.linkedin.com/learning/practical-github-code-search/syntax-operators?u=76281980&t=234)** So 2023 01 01, or I could just go maybe a few months.
>
> **[3:59](https://www.linkedin.com/learning/practical-github-code-search/syntax-operators?u=76281980&t=239)** But I'll just choose that.
>
> **[4:00](https://www.linkedin.com/learning/practical-github-code-search/syntax-operators?u=76281980&t=240)** I don't know if this is going to give me any.
>
> **[4:01](https://www.linkedin.com/learning/practical-github-code-search/syntax-operators?u=76281980&t=241)** Yeah, actually it did go down all the way to four results.
>
> **[4:05](https://www.linkedin.com/learning/practical-github-code-search/syntax-operators?u=76281980&t=245)** And I can keep on using these different syntax operators to get me very specific results.
>
> **[4:12](https://www.linkedin.com/learning/practical-github-code-search/syntax-operators?u=76281980&t=252)** And what I like to do is go ahead and save this so that I can always come back and see if there's any interesting new syntax highlighter.
>
> **[4:21](https://www.linkedin.com/learning/practical-github-code-search/syntax-operators?u=76281980&t=261)** I may want to decrease the amount of stars because if it's new, it's not going to get that many stars.
>
> **[4:26](https://www.linkedin.com/learning/practical-github-code-search/syntax-operators?u=76281980&t=266)** So let's go ahead and just make that, let's be more gentle here.
>
> **[4:30](https://www.linkedin.com/learning/practical-github-code-search/syntax-operators?u=76281980&t=270)** Let's try a hundred and see how many we get.
>
> **[4:32](https://www.linkedin.com/learning/practical-github-code-search/syntax-operators?u=76281980&t=272)** 21 results. Okay, that still seems manageable and still sorted by most stars.
>
> **[4:37](https://www.linkedin.com/learning/practical-github-code-search/syntax-operators?u=76281980&t=277)** And so let's go ahead and save.
>
> **[4:41](https://www.linkedin.com/learning/practical-github-code-search/syntax-operators?u=76281980&t=281)** And I'm going to say search syntax.
>
> **[4:45](https://www.linkedin.com/learning/practical-github-code-search/syntax-operators?u=76281980&t=285)** I'll just say syntax highlighters here.
>
> **[4:48](https://www.linkedin.com/learning/practical-github-code-search/syntax-operators?u=76281980&t=288)** All right, so it keeps the query right here.
>
> **[4:50](https://www.linkedin.com/learning/practical-github-code-search/syntax-operators?u=76281980&t=290)** So I'm going to say create saved search and then I can look at the ones that I have going and I can close this out and I can always come back to that search and take a look at at least things with a hundred stars that are syntax highlighter.
>
> **[5:07](https://www.linkedin.com/learning/practical-github-code-search/syntax-operators?u=76281980&t=307)** That might be a good search for later.
>
> **[5:09](https://www.linkedin.com/learning/practical-github-code-search/syntax-operators?u=76281980&t=309)** Now you can ask that the results be sorted by a specific qualifier.
>
> **[5:13](https://www.linkedin.com/learning/practical-github-code-search/syntax-operators?u=76281980&t=313)** So you can say sort and then specify either something like ascending or descending or sort by date and index or update it.
>
> **[5:24](https://www.linkedin.com/learning/practical-github-code-search/syntax-operators?u=76281980&t=324)** So let's take a look at how we may use something like that.
>
> **[5:29](https://www.linkedin.com/learning/practical-github-code-search/syntax-operators?u=76281980&t=329)** So I'm going to go hit this Mona Lisa Octocat icon just to get to the main search, as well.
>
> **[5:34](https://www.linkedin.com/learning/practical-github-code-search/syntax-operators?u=76281980&t=334)** And that'll clear everything out.
>
> **[5:36](https://www.linkedin.com/learning/practical-github-code-search/syntax-operators?u=76281980&t=336)** So this time I'm going to look for React UI components and that might be something we put in quotes.
>
> **[5:42](https://www.linkedin.com/learning/practical-github-code-search/syntax-operators?u=76281980&t=342)** Let's see what we get when we just search for that.
>
> **[5:45](https://www.linkedin.com/learning/practical-github-code-search/syntax-operators?u=76281980&t=345)** 892 results. That's quite a bit.
>
> **[5:50](https://www.linkedin.com/learning/practical-github-code-search/syntax-operators?u=76281980&t=350)** So let's go ahead and say, I want to sort basically I want only the ones that have greater than a thousand stars and then I'm going to sort them by date and then add the ascending qualifier here.
>
> **[6:05](https://www.linkedin.com/learning/practical-github-code-search/syntax-operators?u=76281980&t=365)** So now that's only five results.
>
> **[6:08](https://www.linkedin.com/learning/practical-github-code-search/syntax-operators?u=76281980&t=368)** That's much better.
>
> **[6:09](https://www.linkedin.com/learning/practical-github-code-search/syntax-operators?u=76281980&t=369)** And I can keep on refining any of my searches and saving them.
>
> **[6:14](https://www.linkedin.com/learning/practical-github-code-search/syntax-operators?u=76281980&t=374)** Learning how to use these qualifiers is going to make it much easier for you to find things that you're looking for a lot quicker.

> [!info]- Semantic Content
>
> **Code Keywords:** let (15), for. (2), this. (1), return. (1), new, (1)
> **CLI Commands:** python (4), make (3), mysql (1), find (1)
> **Tools:** github (1), terminal (1)
> **URLs:** [github.com](https://github.com) (1)
> **Env Vars:** cli (1)
> **UI Navigation:** click on (1)
> **Exercise Files:** source code (1)
> **Speakers:** - you (1)


### 2. Code Search Beta

#### Finding code
> [LinkedIn Learning](https://www.linkedin.com/learning/practical-github-code-search/finding-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-github-code-search/finding-code?u=76281980&t=0)** - [Lecturer] In this chapter, we're going to focus on how GitHub works when searching for code.
>
> **[0:05](https://www.linkedin.com/learning/practical-github-code-search/finding-code?u=76281980&t=5)** It's a new way to not define things, but also navigate and even understand what's happening with the code you are looking for.
>
> **[0:12](https://www.linkedin.com/learning/practical-github-code-search/finding-code?u=76281980&t=12)** Now, I'm going to run through a series of exercises, but I really want to emphasize that you want to be trying this out yourself quite possibly on your own repositories or on public repositories so you can get good at what works and what doesn't work when finding things.
>
> **[0:29](https://www.linkedin.com/learning/practical-github-code-search/finding-code?u=76281980&t=29)** Now, with repositories and codes specifically, you want to give it as much context as possible.
>
> **[0:35](https://www.linkedin.com/learning/practical-github-code-search/finding-code?u=76281980&t=35)** So it's better if you actually start on your page since you know you're going to be searching for your own repos.
>
> **[0:43](https://www.linkedin.com/learning/practical-github-code-search/finding-code?u=76281980&t=43)** And now when I hit the slash, it's going to already have owner planet of the web.
>
> **[0:48](https://www.linkedin.com/learning/practical-github-code-search/finding-code?u=76281980&t=48)** If I know the name of the repo, I can just click on repositories here to go even further and find the repository by using this different search rate here.
>
> **[0:59](https://www.linkedin.com/learning/practical-github-code-search/finding-code?u=76281980&t=59)** So I'm going to type in raybo because I know that this is for my website [raybo.org](https://raybo.org).
>
> **[1:04](https://www.linkedin.com/learning/practical-github-code-search/finding-code?u=76281980&t=64)** Now this repo, because it is the one that uses the main domain that I have added to my profile.
>
> **[1:13](https://www.linkedin.com/learning/practical-github-code-search/finding-code?u=76281980&t=73)** It's actually under planetoftheweb.[github.io](https://github.io).
>
> **[1:17](https://www.linkedin.com/learning/practical-github-code-search/finding-code?u=76281980&t=77)** That's a special name.
>
> **[1:18](https://www.linkedin.com/learning/practical-github-code-search/finding-code?u=76281980&t=78)** If you create a repository with your username .[github.io](https://github.io), that becomes your default repository.
>
> **[1:26](https://www.linkedin.com/learning/practical-github-code-search/finding-code?u=76281980&t=86)** And if you attach a domain name like [raybo.org](https://raybo.org), then that domain name is going to point to this repo.
>
> **[1:33](https://www.linkedin.com/learning/practical-github-code-search/finding-code?u=76281980&t=93)** So I can click right here, and now I am really in context.
>
> **[1:36](https://www.linkedin.com/learning/practical-github-code-search/finding-code?u=76281980&t=96)** It should know exactly what I want to look in.
>
> **[1:40](https://www.linkedin.com/learning/practical-github-code-search/finding-code?u=76281980&t=100)** In this case, the planetoftheweb.[github.io](https://github.io) repository.
>
> **[1:44](https://www.linkedin.com/learning/practical-github-code-search/finding-code?u=76281980&t=104)** Now from here, I'm just going to hit return.
>
> **[1:46](https://www.linkedin.com/learning/practical-github-code-search/finding-code?u=76281980&t=106)** Again, because once I hit return on the search box, it's going to try to give me a little more of the help that I can use to find things.
>
> **[1:56](https://www.linkedin.com/learning/practical-github-code-search/finding-code?u=76281980&t=116)** So here you can see that I have 360 files of code.
>
> **[2:00](https://www.linkedin.com/learning/practical-github-code-search/finding-code?u=76281980&t=120)** I want to look in the markdown document because I wrote all the newsletter articles and markdown and there's all the markdown files.
>
> **[2:08](https://www.linkedin.com/learning/practical-github-code-search/finding-code?u=76281980&t=128)** That's still quite a bit, 348 files.
>
> **[2:10](https://www.linkedin.com/learning/practical-github-code-search/finding-code?u=76281980&t=130)** So what I can look in is specific paths and you can just click on one of these.
>
> **[2:16](https://www.linkedin.com/learning/practical-github-code-search/finding-code?u=76281980&t=136)** I know that that was a newsletter article that I wrote so that will be under site newsletter.
>
> **[2:22](https://www.linkedin.com/learning/practical-github-code-search/finding-code?u=76281980&t=142)** And you can type these in yourself.
>
> **[2:23](https://www.linkedin.com/learning/practical-github-code-search/finding-code?u=76281980&t=143)** Notice that it gave me a regular expression which you can also use on search.
>
> **[2:29](https://www.linkedin.com/learning/practical-github-code-search/finding-code?u=76281980&t=149)** If I wanted to though, I could just write newsletter here.
>
> **[2:31](https://www.linkedin.com/learning/practical-github-code-search/finding-code?u=76281980&t=151)** It doesn't need to be that complicated, but it did it for me so that's nice.
>
> **[2:35](https://www.linkedin.com/learning/practical-github-code-search/finding-code?u=76281980&t=155)** But I'll show you.
>
> **[2:36](https://www.linkedin.com/learning/practical-github-code-search/finding-code?u=76281980&t=156)** Newsletter should work just fine as well.
>
> **[2:41](https://www.linkedin.com/learning/practical-github-code-search/finding-code?u=76281980&t=161)** All right, so that's 42 articles.
>
> **[2:43](https://www.linkedin.com/learning/practical-github-code-search/finding-code?u=76281980&t=163)** Now I'm going to try to put the word here, prototype, 'cause I know that's what we were talking about.
>
> **[2:51](https://www.linkedin.com/learning/practical-github-code-search/finding-code?u=76281980&t=171)** And there it found the article that I was looking for.
>
> **[2:54](https://www.linkedin.com/learning/practical-github-code-search/finding-code?u=76281980&t=174)** It also noticed that I talked about the prototypes twice and they are on these specific line numbers.
>
> **[3:02](https://www.linkedin.com/learning/practical-github-code-search/finding-code?u=76281980&t=182)** So notice how it actually gave me the two line numbers that I did them in.
>
> **[3:07](https://www.linkedin.com/learning/practical-github-code-search/finding-code?u=76281980&t=187)** It also showed me the branch that I was using, the format, and everything else in here looks pretty good.
>
> **[3:13](https://www.linkedin.com/learning/practical-github-code-search/finding-code?u=76281980&t=193)** Now instead of typing prototype, I'm going to type morten just to see what else I have written about him.
>
> **[3:18](https://www.linkedin.com/learning/practical-github-code-search/finding-code?u=76281980&t=198)** So apparently I wrote seven of my newsletter articles about him, so we really talk about Morten quite a bit.
>
> **[3:24](https://www.linkedin.com/learning/practical-github-code-search/finding-code?u=76281980&t=204)** You can see that the one that I was looking for was this one right here.
>
> **[3:30](https://www.linkedin.com/learning/practical-github-code-search/finding-code?u=76281980&t=210)** So you can, if you want to add this, so say Morten and prototype.
>
> **[3:37](https://www.linkedin.com/learning/practical-github-code-search/finding-code?u=76281980&t=217)** And, that would find that as well.
>
> **[3:39](https://www.linkedin.com/learning/practical-github-code-search/finding-code?u=76281980&t=219)** Let's see how many times I have mentioned Canada because my friend lives in Canada.
>
> **[3:45](https://www.linkedin.com/learning/practical-github-code-search/finding-code?u=76281980&t=225)** So, it looks like a couple of times.
>
> **[3:47](https://www.linkedin.com/learning/practical-github-code-search/finding-code?u=76281980&t=227)** So this is pretty cool.
>
> **[3:49](https://www.linkedin.com/learning/practical-github-code-search/finding-code?u=76281980&t=229)** You can really dig through to the code that you're looking for by using the interface as well as the navigation.
>
> **[3:58](https://www.linkedin.com/learning/practical-github-code-search/finding-code?u=76281980&t=238)** And then once you get the code, you can just go directly either to the article right here or you can go to a specific line number.
>
> **[4:05](https://www.linkedin.com/learning/practical-github-code-search/finding-code?u=76281980&t=245)** So let's go ahead and let's go back to the article on prototype.
>
> **[4:10](https://www.linkedin.com/learning/practical-github-code-search/finding-code?u=76281980&t=250)** So we'll type prototype.
>
> **[4:12](https://www.linkedin.com/learning/practical-github-code-search/finding-code?u=76281980&t=252)** We'll see what I was talking about.
>
> **[4:14](https://www.linkedin.com/learning/practical-github-code-search/finding-code?u=76281980&t=254)** And I'm going to just hit this line number 21 and notice that it's going to take me to that specific line number.
>
> **[4:22](https://www.linkedin.com/learning/practical-github-code-search/finding-code?u=76281980&t=262)** Now in GitHub, you have all these additional features that you can use when you're dealing with code.
>
> **[4:29](https://www.linkedin.com/learning/practical-github-code-search/finding-code?u=76281980&t=269)** So for example, you can hit this to go to a page that shows you just all the text in raw form.
>
> **[4:37](https://www.linkedin.com/learning/practical-github-code-search/finding-code?u=76281980&t=277)** This'll actually just let you copy things or you can just see the literal code that you typed in.
>
> **[4:43](https://www.linkedin.com/learning/practical-github-code-search/finding-code?u=76281980&t=283)** I'm going to hit the back button on my browser here.
>
> **[4:46](https://www.linkedin.com/learning/practical-github-code-search/finding-code?u=76281980&t=286)** And notice that there's also a button right here to copy this raw file.
>
> **[4:51](https://www.linkedin.com/learning/practical-github-code-search/finding-code?u=76281980&t=291)** So I could just copy all the code.
>
> **[4:52](https://www.linkedin.com/learning/practical-github-code-search/finding-code?u=76281980&t=292)** And it's the same as going to the raw file and then select an all and then copying to the clipboard.
>
> **[4:59](https://www.linkedin.com/learning/practical-github-code-search/finding-code?u=76281980&t=299)** So that's a really nice shortcut.
>
> **[5:01](https://www.linkedin.com/learning/practical-github-code-search/finding-code?u=76281980&t=301)** And I can also download this file directly into my desktop.
>
> **[5:05](https://www.linkedin.com/learning/practical-github-code-search/finding-code?u=76281980&t=305)** Now, there's also an additional way to open symbols which are a really nice feature of search.
>
> **[5:12](https://www.linkedin.com/learning/practical-github-code-search/finding-code?u=76281980&t=312)** But for markdown, that's not going to be relevant.
>
> **[5:15](https://www.linkedin.com/learning/practical-github-code-search/finding-code?u=76281980&t=315)** I'm going to show you a different example later on where you can use this to look at the modules as well as definitions of what is going on in your code.
>
> **[5:26](https://www.linkedin.com/learning/practical-github-code-search/finding-code?u=76281980&t=326)** Now, there's another three dots right here which are pretty cool because in here you can copy a link which this is pretty cool, permalink.
>
> **[5:34](https://www.linkedin.com/learning/practical-github-code-search/finding-code?u=76281980&t=334)** So if I ever update this newsletter article or code and I want to have a link through this version of the code, I can get a permalink which will always send me to this version of the code right here.
>
> **[5:49](https://www.linkedin.com/learning/practical-github-code-search/finding-code?u=76281980&t=349)** I can view a git blame which shows you who has worked or who has modified this code.
>
> **[5:55](https://www.linkedin.com/learning/practical-github-code-search/finding-code?u=76281980&t=355)** I know it's just me so this is not going to be too interesting, in which you can also get to blames right here in GitHub.
>
> **[6:02](https://www.linkedin.com/learning/practical-github-code-search/finding-code?u=76281980&t=362)** And you can also reference this in a new issue.
>
> **[6:05](https://www.linkedin.com/learning/practical-github-code-search/finding-code?u=76281980&t=365)** So if you want to talk about that perhaps I want to mention this to Morten, I could just reference this in a new issue or I just copy the line.
>
> **[6:12](https://www.linkedin.com/learning/practical-github-code-search/finding-code?u=76281980&t=372)** So this will be great.
>
> **[6:13](https://www.linkedin.com/learning/practical-github-code-search/finding-code?u=76281980&t=373)** Like if you wanted to write maybe a blog post about this newsletter article, I could just copy that whole line.
>
> **[6:19](https://www.linkedin.com/learning/practical-github-code-search/finding-code?u=76281980&t=379)** And then, I can just add it to a post.
>
> **[6:21](https://www.linkedin.com/learning/practical-github-code-search/finding-code?u=76281980&t=381)** Hey, Morten, remember this?
>
> **[6:22](https://www.linkedin.com/learning/practical-github-code-search/finding-code?u=76281980&t=382)** Or I could copy the entire contents of the page and then maybe feed it into ChatGPT and get a bunch of different post ideas.
>
> **[6:31](https://www.linkedin.com/learning/practical-github-code-search/finding-code?u=76281980&t=391)** So learning to search for things is really important and it's also really easy.
>
> **[6:36](https://www.linkedin.com/learning/practical-github-code-search/finding-code?u=76281980&t=396)** I really love the way search integrates not just with all the different types of things like repositories and discussions and issues, but also with how it finds your code in your projects on [github.com](https://github.com).

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), for. (2), public (1), case, (1), return. (1)
> **Tools:** github (7)
> **URLs:** [github.io](https://github.io) (3), [raybo.org](https://raybo.org) (2), [github.com](https://github.com) (1)
> **CLI Commands:** find (3), git (1)
> **UI Navigation:** click on (2), go to (2)
> **Cross-References:** go back to (1)
> **Analogies:** for example (1)
> **Speakers:** - [lecturer] (1)

#### Finding code to learn from
> [LinkedIn Learning](https://www.linkedin.com/learning/practical-github-code-search/finding-code-to-learn-from?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-github-code-search/finding-code-to-learn-from?u=76281980&t=0)** - [Narrator] Let's go ahead and try another type of search.
>
> **[0:02](https://www.linkedin.com/learning/practical-github-code-search/finding-code-to-learn-from?u=76281980&t=2)** Now, this time I'm going to look for something, that I want to learn from.
>
> **[0:06](https://www.linkedin.com/learning/practical-github-code-search/finding-code-to-learn-from?u=76281980&t=6)** So I want to write a Dockerfile for one of my projects.
>
> **[0:10](https://www.linkedin.com/learning/practical-github-code-search/finding-code-to-learn-from?u=76281980&t=10)** I want to make sure that it is for a codespace's project that I'll be creating.
>
> **[0:16](https://www.linkedin.com/learning/practical-github-code-search/finding-code-to-learn-from?u=76281980&t=16)** So usually those go in the dev container and I want to learn from what other people have done.
>
> **[0:22](https://www.linkedin.com/learning/practical-github-code-search/finding-code-to-learn-from?u=76281980&t=22)** So I'm going to start by always resetting everything by hitting the GitHub icon.
>
> **[0:27](https://www.linkedin.com/learning/practical-github-code-search/finding-code-to-learn-from?u=76281980&t=27)** This will take you back to [github.com](https://github.com) and if you are already in a repository, it'll kind of clear out the previous search.
>
> **[0:35](https://www.linkedin.com/learning/practical-github-code-search/finding-code-to-learn-from?u=76281980&t=35)** Sometimes you'll find that even though you click on things in the interface, when you just go to another page, it'll reset things or leave some things in the search.
>
> **[0:46](https://www.linkedin.com/learning/practical-github-code-search/finding-code-to-learn-from?u=76281980&t=46)** So I find that I always love starting by clicking on this icon and it just clears everything out.
>
> **[0:52](https://www.linkedin.com/learning/practical-github-code-search/finding-code-to-learn-from?u=76281980&t=52)** So after that, then I hit the slash of course.
>
> **[0:54](https://www.linkedin.com/learning/practical-github-code-search/finding-code-to-learn-from?u=76281980&t=54)** And let's start off by looking for a Dockerfile and see what we get.
>
> **[1:00](https://www.linkedin.com/learning/practical-github-code-search/finding-code-to-learn-from?u=76281980&t=60)** All right, so when I do this, notice that it's assuming that I'm looking for repositories.
>
> **[1:05](https://www.linkedin.com/learning/practical-github-code-search/finding-code-to-learn-from?u=76281980&t=65)** That's not exactly what I'm looking for.
>
> **[1:06](https://www.linkedin.com/learning/practical-github-code-search/finding-code-to-learn-from?u=76281980&t=66)** In this case, I'm looking for code.
>
> **[1:08](https://www.linkedin.com/learning/practical-github-code-search/finding-code-to-learn-from?u=76281980&t=68)** It is smart and tries to make a decision about what you're looking for but sometimes it gets it wrong.
>
> **[1:13](https://www.linkedin.com/learning/practical-github-code-search/finding-code-to-learn-from?u=76281980&t=73)** So I'm just going to hit Code right here and it's going to show me some Dockerfiles.
>
> **[1:18](https://www.linkedin.com/learning/practical-github-code-search/finding-code-to-learn-from?u=76281980&t=78)** Now I noticed that some of these are in different places, right?
>
> **[1:22](https://www.linkedin.com/learning/practical-github-code-search/finding-code-to-learn-from?u=76281980&t=82)** So here's a circleci, which is a platform for continuous integration.
>
> **[1:27](https://www.linkedin.com/learning/practical-github-code-search/finding-code-to-learn-from?u=76281980&t=87)** I'm really interested in something for a codespace.
>
> **[1:32](https://www.linkedin.com/learning/practical-github-code-search/finding-code-to-learn-from?u=76281980&t=92)** So what I'll do next is I'll look over here on the left to see what's available.
>
> **[1:36](https://www.linkedin.com/learning/practical-github-code-search/finding-code-to-learn-from?u=76281980&t=96)** And first I'm going to choose the language to be Dockerfile, 'cause I did notice that sometimes it's picking up things like this DockerTests.
>
> **[1:45](https://www.linkedin.com/learning/practical-github-code-search/finding-code-to-learn-from?u=76281980&t=105)** This is just a markdown document talking about Dockerfiles.
>
> **[1:49](https://www.linkedin.com/learning/practical-github-code-search/finding-code-to-learn-from?u=76281980&t=109)** So I want to make sure that I hit Dockerfile here.
>
> **[1:52](https://www.linkedin.com/learning/practical-github-code-search/finding-code-to-learn-from?u=76281980&t=112)** That'll just give me the Dockerfile.
>
> **[1:54](https://www.linkedin.com/learning/practical-github-code-search/finding-code-to-learn-from?u=76281980&t=114)** Now some of these are in different places than I said, that I only won things in the dev container 'cause I'm assuming that it's related to how codespaces are put together.
>
> **[2:04](https://www.linkedin.com/learning/practical-github-code-search/finding-code-to-learn-from?u=76281980&t=124)** So I'll click on this path and you can see everything changing up here.
>
> **[2:09](https://www.linkedin.com/learning/practical-github-code-search/finding-code-to-learn-from?u=76281980&t=129)** And then I can take a look through this and I'm going to add a keyword to make sure that I'm only getting Python paths or Python Dockerfiles.
>
> **[2:20](https://www.linkedin.com/learning/practical-github-code-search/finding-code-to-learn-from?u=76281980&t=140)** So that gives me only Python Dockerfiles in the dev container with a language of Dockerfile to make sure that it's a Dockerfile that I'm talking about.
>
> **[2:30](https://www.linkedin.com/learning/practical-github-code-search/finding-code-to-learn-from?u=76281980&t=150)** So that's getting pretty good.
>
> **[2:32](https://www.linkedin.com/learning/practical-github-code-search/finding-code-to-learn-from?u=76281980&t=152)** I can look for some things down here that might be helpful.
>
> **[2:35](https://www.linkedin.com/learning/practical-github-code-search/finding-code-to-learn-from?u=76281980&t=155)** Let's see if we can sort of take a look at the Dockerfiles that my organization has done.
>
> **[2:42](https://www.linkedin.com/learning/practical-github-code-search/finding-code-to-learn-from?u=76281980&t=162)** So I'm going to look for org and as I look for that, it's showing me the orgs that I am subscribed to.
>
> **[2:49](https://www.linkedin.com/learning/practical-github-code-search/finding-code-to-learn-from?u=76281980&t=169)** So I'm going to click on LinkedInLearning and that's really going to narrow things down to like nine files.
>
> **[2:56](https://www.linkedin.com/learning/practical-github-code-search/finding-code-to-learn-from?u=76281980&t=176)** Now, occasionally you will make a search that it doesn't like.
>
> **[3:00](https://www.linkedin.com/learning/practical-github-code-search/finding-code-to-learn-from?u=76281980&t=180)** So let me show you what that's like.
>
> **[3:02](https://www.linkedin.com/learning/practical-github-code-search/finding-code-to-learn-from?u=76281980&t=182)** So I'm going to type in is, and I'm going to hit the colon here.
>
> **[3:05](https://www.linkedin.com/learning/practical-github-code-search/finding-code-to-learn-from?u=76281980&t=185)** So notice that it's saying that I can choose either archived or forked.
>
> **[3:10](https://www.linkedin.com/learning/practical-github-code-search/finding-code-to-learn-from?u=76281980&t=190)** So that's kind of cool.
>
> **[3:11](https://www.linkedin.com/learning/practical-github-code-search/finding-code-to-learn-from?u=76281980&t=191)** It lets you look for archived repos, which is something that you do when you don't really want to delete a repo, but you can archive it so that you can get to it later but it doesn't come up normally under search.
>
> **[3:24](https://www.linkedin.com/learning/practical-github-code-search/finding-code-to-learn-from?u=76281980&t=204)** What I really wanted though is to make sure that what I'm looking for is a public repo.
>
> **[3:30](https://www.linkedin.com/learning/practical-github-code-search/finding-code-to-learn-from?u=76281980&t=210)** So let's go ahead and type that in, is:public and it gives me this error.
>
> **[3:34](https://www.linkedin.com/learning/practical-github-code-search/finding-code-to-learn-from?u=76281980&t=214)** You've probably run into this already.
>
> **[3:36](https://www.linkedin.com/learning/practical-github-code-search/finding-code-to-learn-from?u=76281980&t=216)** This is what happens when you make a mistake.
>
> **[3:38](https://www.linkedin.com/learning/practical-github-code-search/finding-code-to-learn-from?u=76281980&t=218)** It tells you that this didn't match any code.
>
> **[3:41](https://www.linkedin.com/learning/practical-github-code-search/finding-code-to-learn-from?u=76281980&t=221)** Sometimes it gives you a warning and it's taken into consideration, the context of the type of search that you're trying to do.
>
> **[3:48](https://www.linkedin.com/learning/practical-github-code-search/finding-code-to-learn-from?u=76281980&t=228)** So it's telling you here that searching for this term literally is not going to work, right?
>
> **[3:55](https://www.linkedin.com/learning/practical-github-code-search/finding-code-to-learn-from?u=76281980&t=235)** And really the problem is this is public section right here.
>
> **[3:58](https://www.linkedin.com/learning/practical-github-code-search/finding-code-to-learn-from?u=76281980&t=238)** It's going to try to give you some suggestions on the type of things that you can do and you know, some hints about some of the other things that you can try but this is what you get if you try to do something that's not making sense for it.
>
> **[4:12](https://www.linkedin.com/learning/practical-github-code-search/finding-code-to-learn-from?u=76281980&t=252)** Now, I personally think that I should be able to look for is:public in this context but the current version of the search isn't liking that.
>
> **[4:22](https://www.linkedin.com/learning/practical-github-code-search/finding-code-to-learn-from?u=76281980&t=262)** So I'm going to have to back out and go back just to my regular search that I was doing for what I need, this is great.
>
> **[4:29](https://www.linkedin.com/learning/practical-github-code-search/finding-code-to-learn-from?u=76281980&t=269)** It's taken me right to some code that I can take a peek at to see how people in my organization have been creating docker containers to take a look at starting up a codespace.
>
> **[4:42](https://www.linkedin.com/learning/practical-github-code-search/finding-code-to-learn-from?u=76281980&t=282)** So this works for me.
>
> **[4:44](https://www.linkedin.com/learning/practical-github-code-search/finding-code-to-learn-from?u=76281980&t=284)** You may want to try this yourself and try to see, when you are trying to learn from a piece of code, what kind of searches work really well.
>
> **[4:52](https://www.linkedin.com/learning/practical-github-code-search/finding-code-to-learn-from?u=76281980&t=292)** And I think a combination of using, you know, qualifiers as well as using the interface is the best way to find things when you are learning from code.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), public (4), interface (2), from. (1), this, (1)
> **CLI Commands:** make (8), find (3), python (3), docker (1)
> **UI Navigation:** click on (3), go to (1)
> **Tools:** github (2)
> **Definitions:** is a  (2)
> **URLs:** [github.com](https://github.com) (1)
> **Warnings:** warning (1)
> **Speakers:** - [narrator] (1)

#### Code results
> [LinkedIn Learning](https://www.linkedin.com/learning/practical-github-code-search/code-results?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-github-code-search/code-results?u=76281980&t=0)** - [Instructor] There's a few real subtle additions to the search results for code that I think are so good that you're not going to know that you didn't have them before.
>
> **[0:09](https://www.linkedin.com/learning/practical-github-code-search/code-results?u=76281980&t=9)** They look so natural that you're really going to love it.
>
> **[0:11](https://www.linkedin.com/learning/practical-github-code-search/code-results?u=76281980&t=11)** So I'm going to start off by once again being at just [github.com](https://github.com).
>
> **[0:15](https://www.linkedin.com/learning/practical-github-code-search/code-results?u=76281980&t=15)** Which you can get to it just by clicking on this Mona Lisa icon here.
>
> **[0:19](https://www.linkedin.com/learning/practical-github-code-search/code-results?u=76281980&t=19)** And I want to scope this properly.
>
> **[0:20](https://www.linkedin.com/learning/practical-github-code-search/code-results?u=76281980&t=20)** So I know that I'm going to be looking for something in my own code.
>
> **[0:25](https://www.linkedin.com/learning/practical-github-code-search/code-results?u=76281980&t=25)** And instead of trying to create a search or a safe search for that I always just go here to this little icon and just go to my repositories.
>
> **[0:34](https://www.linkedin.com/learning/practical-github-code-search/code-results?u=76281980&t=34)** That'll scope the search so that now if I hit slash it's already there at owner, right?
>
> **[0:39](https://www.linkedin.com/learning/practical-github-code-search/code-results?u=76281980&t=39)** And I can type something in here.
>
> **[0:41](https://www.linkedin.com/learning/practical-github-code-search/code-results?u=76281980&t=41)** So I'm going to do a try a path and for a path I could do like *.py or do some sort of regular expression if I want to.
>
> **[0:51](https://www.linkedin.com/learning/practical-github-code-search/code-results?u=76281980&t=51)** So this is going to find all of my Python code and you can see that I don't code a ton in Python.
>
> **[0:57](https://www.linkedin.com/learning/practical-github-code-search/code-results?u=76281980&t=57)** Most of these aren't even mine they're just sort of part of other packages.
>
> **[1:00](https://www.linkedin.com/learning/practical-github-code-search/code-results?u=76281980&t=60)** I could try to now go directly to this feed.py as a result.
>
> **[1:08](https://www.linkedin.com/learning/practical-github-code-search/code-results?u=76281980&t=68)** I'm going to change the owner to repo and then here I can type in planet of the web and here notice that it's already looking for things and that first result was called podcast generator.
>
> **[1:22](https://www.linkedin.com/learning/practical-github-code-search/code-results?u=76281980&t=82)** So whether I type in generator or podcast generator it'll come up and there's a couple of them.
>
> **[1:28](https://www.linkedin.com/learning/practical-github-code-search/code-results?u=76281980&t=88)** I want to go to the first one.
>
> **[1:30](https://www.linkedin.com/learning/practical-github-code-search/code-results?u=76281980&t=90)** So I'm going to hit that and it takes me to the podcast generator file.
>
> **[1:35](https://www.linkedin.com/learning/practical-github-code-search/code-results?u=76281980&t=95)** I probably want to add specifically the Python file.
>
> **[1:38](https://www.linkedin.com/learning/practical-github-code-search/code-results?u=76281980&t=98)** So let's hit the slash again, and nice it remembered everything before.
>
> **[1:42](https://www.linkedin.com/learning/practical-github-code-search/code-results?u=76281980&t=102)** So I'm going to add that path *.py.
>
> **[1:45](https://www.linkedin.com/learning/practical-github-code-search/code-results?u=76281980&t=105)** And it takes me just to the one file I have, I could really put in a sort of, put in feed.py as the path.
>
> **[1:51](https://www.linkedin.com/learning/practical-github-code-search/code-results?u=76281980&t=111)** But this'll work.
>
> **[1:52](https://www.linkedin.com/learning/practical-github-code-search/code-results?u=76281980&t=112)** So what I want to show you is what happens when I actually click on this code.
>
> **[1:57](https://www.linkedin.com/learning/practical-github-code-search/code-results?u=76281980&t=117)** Now this is the new code view and sometimes some of these things will be hidden.
>
> **[2:02](https://www.linkedin.com/learning/practical-github-code-search/code-results?u=76281980&t=122)** So there's two sidebars, one on the left and one on the right.
>
> **[2:05](https://www.linkedin.com/learning/practical-github-code-search/code-results?u=76281980&t=125)** This one shows you the commit.
>
> **[2:07](https://www.linkedin.com/learning/practical-github-code-search/code-results?u=76281980&t=127)** So notice you can go to different branches.
>
> **[2:10](https://www.linkedin.com/learning/practical-github-code-search/code-results?u=76281980&t=130)** If you have been publishing different versions of this code you can actually go to the different branches or view all the branches.
>
> **[2:18](https://www.linkedin.com/learning/practical-github-code-search/code-results?u=76281980&t=138)** And this left sidebar is like a file view.
>
> **[2:21](https://www.linkedin.com/learning/practical-github-code-search/code-results?u=76281980&t=141)** And believe it or not, it wasn't here before.
>
> **[2:24](https://www.linkedin.com/learning/practical-github-code-search/code-results?u=76281980&t=144)** As soon as I saw it, it felt like something that was there already.
>
> **[2:27](https://www.linkedin.com/learning/practical-github-code-search/code-results?u=76281980&t=147)** If you do go to code view, you get kind of the list of files.
>
> **[2:31](https://www.linkedin.com/learning/practical-github-code-search/code-results?u=76281980&t=151)** So you know this is sort of a similar thing, but it's so much more useful that when you're looking at a specific piece of code that you get the files that are also in the same directory.
>
> **[2:43](https://www.linkedin.com/learning/practical-github-code-search/code-results?u=76281980&t=163)** And you can, you know, hit the 'T' key here you can see that there's a shortcut and start typing in something in here.
>
> **[2:48](https://www.linkedin.com/learning/practical-github-code-search/code-results?u=76281980&t=168)** So say that we wanted to find the action .yml.
>
> **[2:51](https://www.linkedin.com/learning/practical-github-code-search/code-results?u=76281980&t=171)** You can also just look for things within the sub directories right here.
>
> **[2:56](https://www.linkedin.com/learning/practical-github-code-search/code-results?u=76281980&t=176)** And if you want to you can also show or hide this right sidebar.
>
> **[3:02](https://www.linkedin.com/learning/practical-github-code-search/code-results?u=76281980&t=182)** So notice that sometimes this gets docked but this is the symbols panel.
>
> **[3:06](https://www.linkedin.com/learning/practical-github-code-search/code-results?u=76281980&t=186)** And symbol is basically anything that is not plain text in your code.
>
> **[3:12](https://www.linkedin.com/learning/practical-github-code-search/code-results?u=76281980&t=192)** So if it finds a symbol something that you have entered repeatedly notice that it's automatically highlighting it for you which is pretty cool.
>
> **[3:20](https://www.linkedin.com/learning/practical-github-code-search/code-results?u=76281980&t=200)** It tells you all the places where you have used this.
>
> **[3:23](https://www.linkedin.com/learning/practical-github-code-search/code-results?u=76281980&t=203)** So the sub element method in Python I'm using over and over.
>
> **[3:27](https://www.linkedin.com/learning/practical-github-code-search/code-results?u=76281980&t=207)** And sometimes it'll try to give you a definition depending on how you're using it of what this symbol even means.
>
> **[3:34](https://www.linkedin.com/learning/practical-github-code-search/code-results?u=76281980&t=214)** And it's going to get a lot better in the future.
>
> **[3:37](https://www.linkedin.com/learning/practical-github-code-search/code-results?u=76281980&t=217)** It's going to be able to recognize symbols from a lot of different languages and even give you feedback about how you use that symbol in multiple places and also what those symbols perhaps mean.
>
> **[3:50](https://www.linkedin.com/learning/practical-github-code-search/code-results?u=76281980&t=230)** So I can do right here, click on search for symbol and it can try to find that symbol which is also a qualifier in other files as well.
>
> **[3:59](https://www.linkedin.com/learning/practical-github-code-search/code-results?u=76281980&t=239)** So you can actually search for a symbol like where did I use this specific method?
>
> **[4:04](https://www.linkedin.com/learning/practical-github-code-search/code-results?u=76281980&t=244)** Which files have I used this in?
>
> **[4:07](https://www.linkedin.com/learning/practical-github-code-search/code-results?u=76281980&t=247)** And it'll take you to that and allow you to see all the other places where you're using.
>
> **[4:12](https://www.linkedin.com/learning/practical-github-code-search/code-results?u=76281980&t=252)** And see there's great navigation here.
>
> **[4:14](https://www.linkedin.com/learning/practical-github-code-search/code-results?u=76281980&t=254)** You can also filter the symbols if you have a ton of them.
>
> **[4:18](https://www.linkedin.com/learning/practical-github-code-search/code-results?u=76281980&t=258)** And this is just such a huge improvement.
>
> **[4:21](https://www.linkedin.com/learning/practical-github-code-search/code-results?u=76281980&t=261)** But what I really love about it is that it feels like it's always been there.
>
> **[4:25](https://www.linkedin.com/learning/practical-github-code-search/code-results?u=76281980&t=265)** When user interfaces are so good that it seems like an obvious thing you know they have done a fantastic job.
>
> **[4:32](https://www.linkedin.com/learning/practical-github-code-search/code-results?u=76281980&t=272)** And this is a fantastic way to work with and also look at the code that you're dealing with on a daily basis.

> [!info]- Semantic Content
>
> **CLI Commands:** python (4), find (3)
> **UI Navigation:** go to (5), click on (2)
> **File Paths:** feed.py (2)
> **Code Keywords:** let (1), this. (1)
> **URLs:** [github.com](https://github.com) (1)
> **Tools:** github (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### Conclusion


## Path Context

### In [[Career Essentials in GitHub Professional Certificate]]
← [[Practical GitHub Copilot]] | **4 of 4**

## Part of

- [[Career Essentials in GitHub Professional Certificate]]

## Appears In

- [[Career Essentials in GitHub Professional Certificate]]

## Related Courses

_Courses sharing skills:_

- [[Practical GitHub Project Management and Collaboration]] — GitHub
- [[Creating a Book Search Engine from Scratch Using Java and GitHub Copilot]] — GitHub
- [[Benefits of GitHub Community]] — GitHub
- [[GitHub Foundations- Privacy, Security, and Administration]] — GitHub
- [[Learning GitHub Codespaces for Enterprise]] — GitHub

---

[↑ Back to top](#)