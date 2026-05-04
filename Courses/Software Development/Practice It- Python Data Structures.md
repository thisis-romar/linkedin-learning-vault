---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: practice-it-python-data-structures
url: "https://www.linkedin.com/learning/practice-it-python-data-structures"
duration_minutes: 40
duration: 40m
level: Intermediate
updated: 11/9/2022
learners: 55820
skills:
  - Data Structures
  - Python (Programming Language)
exercise_files: false
github: "https://github.com/LinkedInLearning/practice-it-python-data-structs-2486182/codespaces"
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQErSxSAz69Qaw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1666989847354?e=2147483647&amp;v=beta&amp;t=SBJ-vJsjZIegL_be-StDxLJAv84KGIHSrFI_yB1ZrSE"
linkedin_topic: Software Development
learning_paths:
  - '[Python Hands-On Practice](../../Paths/Software%20Development/Learning%20Paths/Python%20Hands-On%20Practice.md)'
prev_courses:
  - '[Hands-On Introduction- Python](Hands-On%20Introduction-%20Python.md)'
next_courses:
  - '[Python Practice- Operations](Python%20Practice-%20Operations.md)'
path_nav: '[{"path":"Python Hands-On Practice","position":2,"total":14,"prev":"Hands-On Introduction- Python","next":"Python Practice- Operations"}]'
path_count: 1
tags:
  - course
  - topic/software-development
  - skill/data-structures
  - skill/python-programming-language
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/Practice%20It-%20Python%20Data%20Structures.md)

![Practice It: Python Data Structures](https://media.licdn.com/dms/image/v2/D560DAQErSxSAz69Qaw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1666989847354?e=2147483647&amp;v=beta&amp;t=SBJ-vJsjZIegL_be-StDxLJAv84KGIHSrFI_yB1ZrSE)

# Practice It: Python Data Structures

> Are you looking to brush up on your Python skills? Maybe you’ve learned some Python basics and want to take your skills further? This course with Kaylee Kohfeldt provides some hands-on, practical training on Python concepts like sets, collections, string formatting, and lambda functions. Kayle covers skills that you may not use in your day-to-day programming—like a counter, palindrome checker, cle

> [LinkedIn Learning](https://www.linkedin.com/learning/practice-it-python-data-structures) | 40m | Intermediate | 56K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Practice the Python data structures](#practice-the-python-data-structures)
  - [What you should know](#what-you-should-know)
  - [Using GitHub Codespaces with this course](#using-github-codespaces-with-this-course)
- [**1. Counter**](#1-counter) (6 videos)
  - [Try it: Count words from a paragraph](#try-it-count-words-from-a-paragraph)
  - [Check it: Count words from a paragraph](#check-it-count-words-from-a-paragraph)
  - [Try it: Finding the most common products](#try-it-finding-the-most-common-products)
  - [Check it: Finding the most common products](#check-it-finding-the-most-common-products)
  - [Try it: Doing inventory](#try-it-doing-inventory)
  - [Check it: Doing inventory](#check-it-doing-inventory)
- [**2. Deque**](#2-deque) (6 videos)
  - [Try it: Storing a user's most recent food orders](#try-it-storing-a-users-most-recent-food-orders)
  - [Check it: Storing a user's most recent food orders](#check-it-storing-a-users-most-recent-food-orders)
  - [Try it: Palindrome checker](#try-it-palindrome-checker)
  - [Check it: Palindrome checker](#check-it-palindrome-checker)
  - [Try it: Scheduling tasks with Priority](#try-it-scheduling-tasks-with-priority)
  - [Check it: Scheduling tasks with priority](#check-it-scheduling-tasks-with-priority)
- [**3. Namedtuple**](#3-namedtuple) (4 videos)
  - [Try it: Store driver details](#try-it-store-driver-details)
  - [Check it: Store driver details](#check-it-store-driver-details)
  - [Try it: Reading CSV files](#try-it-reading-csv-files)
  - [Check it: Reading CSV files](#check-it-reading-csv-files)
- [**4. Defaultdict**](#4-defaultdict) (4 videos)
  - [Try it: Cleaning up duplicate data](#try-it-cleaning-up-duplicate-data)
  - [Check it: Cleaning up duplicate data](#check-it-cleaning-up-duplicate-data)
  - [Try it: Calculating gain and loss](#try-it-calculating-gain-and-loss)
  - [Check it: Calculating gain and loss](#check-it-calculating-gain-and-loss)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps in your Python data structures learning journey](#next-steps-in-your-python-data-structures-learning-journey)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Practice the Python data structures](https://www.linkedin.com/learning/practice-it-python-data-structures/practice-the-python-data-structures?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practice-it-python-data-structures/practice-the-python-data-structures?u=76281980&t=0)** - [Kaylee] You can save yourself time and effort as well as make your code a lot more readable by using [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) collections. A lot of Python developers have heard of collections, maybe you have even used them. The Python collections module is part of the Python Standard Library. It implements specialized container data types, providing alternatives to Python's general purpose built-in containers. This can be quite powerful and make our code more readable and efficient. In this course, we will practice using the paths as provided by this module. This way, they will come second nature to you in your daily job, side projects, or even interviews. Hi, I'm Kaylee Kohfeldt, and I'm a software engineer who enjoys teaching others about different ways to accomplish things through code. I'm excited to offer you some fun and simple practice problems to hone your collection skills. This is great for those who have some experience with Python, but you don't need to be a collections expert. We will go through each example together, so let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (6)
> **CLI Commands:** python (6), make (2)
> **Speakers:** - [kaylee] (1)

#### [What you should know](https://www.linkedin.com/learning/practice-it-python-data-structures/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practice-it-python-data-structures/what-you-should-know?u=76281980&t=0)** - [Instructor] We'll use Nadia's Garden Restaurant as an example throughout the course. Nadia's Garden offers many different menu items and also has delivery, so there is plenty of data to work with. We will go through several examples using Nadia's data. After each example, think about what class we used and other ways to solve the problem. I have configured a get [GitHub](../../Skills/Software%20Development/GitHub.md) CodeSpace for you to get started coding right away. If you're unfamiliar with [Codespaces](../../Skills/Software%20Development/Codespaces.md), let me invite [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) staff instructor Ray Villalobos to show you how to get started in CodeSpaces.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Codespaces](../../Skills/Software%20Development/Codespaces.md) (2), [GitHub](../../Skills/Software%20Development/GitHub.md) (1), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **Tools:** github (1)
> **Speakers:** - [instructor] (1)

#### [Using GitHub Codespaces with this course](https://www.linkedin.com/learning/practice-it-python-data-structures/using-github-codespaces-with-this-course-16045515?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practice-it-python-data-structures/using-github-codespaces-with-this-course-16045515?u=76281980&t=0)** - [Ray] This is Ray Villalobos, senior staff instructor at [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning, and I'm going to show you how to work with LinkedIn Learning courses using [GitHub](../../Skills/Software%20Development/GitHub.md) [Codespaces](../../Skills/Software%20Development/Codespaces.md). Codespaces is a code editor in the cloud with the full power of Visual Studio Code. It allows for real world hands on practice that mirrors [Software Development](../../Topics/Software%20Development.md) in the workplace. This course was created using GitHub Codespaces. Using Codespaces, you have everything you need to get going without needing complex installations or build tools. One click and you're ready to go. To practice along with the course, you can create a codespace directly from the course overview page. First, click open next to GitHub Codespaces. If you're already logged in, you'll be directed to a getting started with GitHub Codespaces page. If you're not logged in, you'll be prompted to log in or create a free GitHub account first. From this page, click on create codespace on main. The first time you open up a codespace, it might take a few minutes to create the virtual machine. Once it's done, you'll enter the code editor environment. If you're familiar with Visual Studio Code, this is a special version of that editor running on GitHub's servers. Your course can have one or more extensions pre-installed based on the course you're taking. Those can be found in the extensions panel. Because this is a browser, it's easy to inadvertently close the browser window and lose the editor. If you do that, don't panic.
>
> **[1:33](https://www.linkedin.com/learning/practice-it-python-data-structures/using-github-codespaces-with-this-course-16045515?u=76281980&t=93)** Codespaces saves everything you're doing on a virtual machine. You can always get the codespace back for this repo right here. Notice that it even remembered that I had opened the extensions panel. An alternate way to create a codespace is directly from one of our course's GitHub repositories. From here, click code and then create codespace on main. You can also restart a previous codespace from this location. GitHub Codespaces is compatible on devices with smaller screen sizes like mobile phones or tablets, but it is optimized for larger screens so we recommend that you practice along with this course on a laptop or desktop computer. The sample course I'm looking at is what is known as a flat branch repository. You can tell because there's a single branch when you click on the branch icon on the status bar. You can also tell because there are different folders for each of the videos in the course. This is a sample of what a multi branch repository looks like which is more common when you're working with web frameworks. If you go to the branch icon on the status bar, you can see that there's more than one branch. You can switch to the different branches using this menu. The branches are named with the chapter and the video number you're watching. If you see a B at the end of the branch, that's how the code looked at the beginning. If you see an E, that's how the code looked at the end.
>
> **[3:06](https://www.linkedin.com/learning/practice-it-python-data-structures/using-github-codespaces-with-this-course-16045515?u=76281980&t=186)** Let's switch to how the code looked on chapter two and the third video. I'll choose the beginning branch. As you work through a course, you might make some changes on a branch. I'm going to make a minor edit on the index.[HTML](../../Skills/Web%20Development/HTML.md) file right here. I'm going to go ahead and save that, and you can see that I've modified this file because there's an M right here and the branch name now has an asterisk on it. If I try to switch to another branch that causes major changes like say, 07_03e, I may see a dialogue box like this. If you don't care about saving your changes, you can simply hit the force checkout button. It will let you switch to that branch. You can then choose to discard the changes on this file. Your instructor will let you know what the folder structure is for your course. Forking lets you create your own copy of the repository on your account so that you can keep any changes that you've made, even if you've deleted the codespace. To create your own fork, you can click on the fork button on the repository. I'm going to hit create fork. I'll have my own copy of this repository, and if I want to, I can start a new codespace on that fork. This forked version is almost exactly
>
> **[4:41](https://www.linkedin.com/learning/practice-it-python-data-structures/using-github-codespaces-with-this-course-16045515?u=76281980&t=281)** like the original repository but it will let you push your own changes. Notice that the URL of the repository is slightly different. Let's go ahead and make a simple change to this file right here.
>
> **[5:00](https://www.linkedin.com/learning/practice-it-python-data-structures/using-github-codespaces-with-this-course-16045515?u=76281980&t=300)** I'm going to save it. You'll note that there is an M right here as well as an asterisk on this branch. In the source control panel, you can also see a one for the change that we just made. Let's go ahead and try to commit this change. I'm going to hit the commit button and I'll ask it to go ahead and stage the changes. And then I'm going to hit this button here. I'll hit okay. You can also let it go ahead and run [Git](../../Skills/Software%20Development/Git.md) [Fetch](../../Skills/Web%20Development/Fetch.md). That way, it'll automatically sync with your forked repo. Now that change will be stored in your own version of this repository. Don't worry if you forget to fork a repo and then try to push changes. Codespaces will also ask you if you want to create a fork automatically. Look for additional course specific tips from the instructor. Now, let's get back to the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Codespaces](../../Skills/Software%20Development/Codespaces.md) (9), [GitHub](../../Skills/Software%20Development/GitHub.md) (8), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (2), [Software Development](../../Topics/Software%20Development.md) (1), [HTML](../../Skills/Web%20Development/HTML.md) (1)
> **Tools:** github (8), visual studio (2)
> **UI Navigation:** switch to (4), click on (3), go to (1)
> **Definitions:** is a  (4), known as (1), is an  (1)
> **CLI Commands:** make (3), git (1)
> **File Paths:** index.html (1)
> **Env Vars:** url (1)
> **Warnings:** note that (1)


### 1. Counter

[↑ Back to Table of Contents](#table-of-contents)

#### [Try it: Count words from a paragraph](https://www.linkedin.com/learning/practice-it-python-data-structures/try-it-count-words-from-a-paragraph?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practice-it-python-data-structures/try-it-count-words-from-a-paragraph?u=76281980&t=0)** (keyboard keys clicking)
>
> **[0:03](https://www.linkedin.com/learning/practice-it-python-data-structures/try-it-count-words-from-a-paragraph?u=76281980&t=3)** - [Instructor] Let's say we need to count the words in this paragraph. This might help us get the overall idea of the content in the paragraph for something like categorization. In this case, we will use a paragraph about Nadia's Garden which can be found in your exercise one file. First, we need to put the paragraph into a parsable format. You'll have to normalize the data taking into account capitalization and punctuation. You can create a list of words from a paragraph using string split, then you can count the words. The most straightforward way we can accomplish this is with counter. If you'd like to practice by yourself, please pause the video here and practice. Otherwise, keep going to practice with me.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (keyboard keys clicking) (1)

#### [Check it: Count words from a paragraph](https://www.linkedin.com/learning/practice-it-python-data-structures/check-it-count-words-from-a-paragraph?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practice-it-python-data-structures/check-it-count-words-from-a-paragraph?u=76281980&t=0)** (technical blip noises) (keyboard buttons clicking)
>
> **[0:03](https://www.linkedin.com/learning/practice-it-python-data-structures/check-it-count-words-from-a-paragraph?u=76281980&t=3)** - [Instructor] Okay. Here we are with our lovely paragraph about Nadia's Garden. Unfortunately, a lot of the complexity in this problem is from normalizing the data, not so much about the count itself. First, let's do a few simple things to normalize that data. We will use "lower" to ensure that [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) properly counts words as the same, even if they have different capitalizations. Next, let's get rid of all punctuation. If there is punctuation after the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md), that might throw off the count. Like here, "restaurant" might be counted separately from "restaurant" with the period attached. We can use the string translator function to strip all punctuation. First, we import string. Then we use "translate" on our paragraph to convert all punctuation to nothing.
>
> **[1:05](https://www.linkedin.com/learning/practice-it-python-data-structures/check-it-count-words-from-a-paragraph?u=76281980&t=65)** Finally, we are able to get to the core of our problem, actually counting the words. First, let's split the string into a list by using "string split." Then, we can count each word in "wordless" using "counter." Don't forget to import "counter" from collections. Let's return "counter" and see what it looks like.
>
> **[1:43](https://www.linkedin.com/learning/practice-it-python-data-structures/check-it-count-words-from-a-paragraph?u=76281980&t=103)** As you can see, it counts our words and gives us a convenient dictionary to use. Some of the top words here are rather obvious, like conjunctions. You can also see that "Nadia's" and "restaurant" are quite popular. This all makes sense. What else can we do with "counter?" Let's keep practicing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (2), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **Non-Speech:** (technical blip noises) (1), (keyboard buttons clicking) (1)
> **CLI Commands:** python (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - [instructor] (1)

#### [Try it: Finding the most common products](https://www.linkedin.com/learning/practice-it-python-data-structures/try-it-finding-the-most-common-products?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/practice-it-python-data-structures/try-it-finding-the-most-common-products?u=76281980&t=3)** - [Instructor] Nadia would like to see the most common items customers purchase so that she can be sure to keep these items in stock. She has a list of items purchased in the last week and will be using that as her baseline. First, you'll have to take in that list of items, then use a counter to get counts for each item, and finally, return the three most common items. Look into what methods counter has to offer, and see how easily you can do this. If you'd like to practice by yourself, please pause the video here and practice. Otherwise, keep going to practice with me.

> [!info]- Semantic Content
>
> **Cross-References:** in the last (1)
> **Speakers:** - [instructor] (1)

#### [Check it: Finding the most common products](https://www.linkedin.com/learning/practice-it-python-data-structures/check-it-finding-the-most-common-products?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/practice-it-python-data-structures/check-it-finding-the-most-common-products?u=76281980&t=3)** - [Narrator] So, of course, we are practicing Counter. So, let's import Counter again from collections. (keys tapping) Then, we can get our dictionary of counts by using Counter on our [products](../../Skills/Software%20Development/Microsoft%20Products.md). (keys tapping) Counter has a very neat built in method called Most Common. Since we are looking to find the most common products so that we can order enough of them, let's use it. You can pass any number to this function. We will use three. (keys tapping) Let's return it, run, and see what happens. As you can see, we have all of our products purchased in a list. We'll pass it to get common products and see what happens. (keys tapping) As you can see, does four does two and on four are our most popular items. Nadia should order lots of these. Now that we've practiced some more basic functionalities, let's try something a little more complicated.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (4)
> **CLI Commands:** find (1)
> **Speakers:** - [narrator] (1)

#### [Try it: Doing inventory](https://www.linkedin.com/learning/practice-it-python-data-structures/try-it-doing-inventory?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practice-it-python-data-structures/try-it-doing-inventory?u=76281980&t=0)** (pulsing electronic tones) (keyboard clacking)
>
> **[0:03](https://www.linkedin.com/learning/practice-it-python-data-structures/try-it-doing-inventory?u=76281980&t=3)** - [Instructor] Nadia wants to be sure that she has the right dishes prepared for delivery. We want to subtract her sales this week from her inventory. She also made some dishes, so let's add those to the inventory as well. First, you'll need to get the inventory into a counter object. Then, when you need to subtract, you can use the subtraction method in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md). To add, I recommend using the update method provided by the counter. If you'd like to practice by yourself, please pause the video here and practice. Otherwise, keep going to practice with me.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **CLI Commands:** python (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Check it: Doing inventory](https://www.linkedin.com/learning/practice-it-python-data-structures/check-it-doing-inventory?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practice-it-python-data-structures/check-it-doing-inventory?u=76281980&t=0)** (keys pressed)
>
> **[0:03](https://www.linkedin.com/learning/practice-it-python-data-structures/check-it-doing-inventory?u=76281980&t=3)** - [Instructor] We are still practicing with Counter, so let's import Counter again from Collections. We will start with our beginning inventory in Counter format. As you can see, we had 10 starters, 20 salads, and 13 entrees. We sold five starters, three salads and three entrees this week, so we are making another counter with that information.
>
> **[0:42](https://www.linkedin.com/learning/practice-it-python-data-structures/check-it-doing-inventory?u=76281980&t=42)** We can simply subtract our sales this week from our inventory to see what we have left.
>
> **[0:54](https://www.linkedin.com/learning/practice-it-python-data-structures/check-it-doing-inventory?u=76281980&t=54)** Let's print it to see what we have so far. As you can see, we have 17 salads, 10 entrees and five starters. This week we also got a small shipment of inventory in. This includes nine starters and one salad. I'll represent that as a dictionary here.
>
> **[1:31](https://www.linkedin.com/learning/practice-it-python-data-structures/check-it-doing-inventory?u=76281980&t=91)** We can use the update method from Counter to add this inventory to our original inventory Counter.
>
> **[1:42](https://www.linkedin.com/learning/practice-it-python-data-structures/check-it-doing-inventory?u=76281980&t=102)** Again, let's print it to see. As you can see, we have 17 salads, 14 starters, and 11 entree. Okay, we're done practicing with Counter for now. Let's see what's up next with deque.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)


### 2. Deque

[↑ Back to Table of Contents](#table-of-contents)

#### [Try it: Storing a user's most recent food orders](https://www.linkedin.com/learning/practice-it-python-data-structures/try-it-storing-a-user-s-most-recent-food-orders?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/practice-it-python-data-structures/try-it-storing-a-user-s-most-recent-food-orders?u=76281980&t=1)** (keyboard clicking)
>
> **[0:03](https://www.linkedin.com/learning/practice-it-python-data-structures/try-it-storing-a-user-s-most-recent-food-orders?u=76281980&t=3)** - [Instructor] Imagine you want to keep track of the last five foods you ordered from Nadia, and only the last five foods. How can you accomplish this with [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) using collections? First, you will have to make a deque. Then you can append foods to it. I would encourage you to try this with a typical deque first and see what happens. Then you can set the max length property when you create your deque. This will keep only five foods at a time. If you'd like to practice by yourself, please pause the video here and practice. Otherwise, keep going to practice with me.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **CLI Commands:** python (1), make (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (keyboard clicking) (1)

#### [Check it: Storing a user's most recent food orders](https://www.linkedin.com/learning/practice-it-python-data-structures/check-it-storing-a-user-s-most-recent-food-orders?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practice-it-python-data-structures/check-it-storing-a-user-s-most-recent-food-orders?u=76281980&t=0)** - [Speaker] First, we need to input from collections again. This time we're going to use deque.
>
> **[0:15](https://www.linkedin.com/learning/practice-it-python-data-structures/check-it-storing-a-user-s-most-recent-food-orders?u=76281980&t=15)** Now let's make a deque with our orders and go ahead and set that max length to five.
>
> **[0:26](https://www.linkedin.com/learning/practice-it-python-data-structures/check-it-storing-a-user-s-most-recent-food-orders?u=76281980&t=26)** First, I'll add starter one to the deque. We can do that just by calling append on foods. Let's print it to see what it looks like.
>
> **[0:44](https://www.linkedin.com/learning/practice-it-python-data-structures/check-it-storing-a-user-s-most-recent-food-orders?u=76281980&t=44)** As you can see, we have our deque and it only has one item right now, STA001. I've ordered four more foods recently. Let's add them all at once. First, I'll make a list with these foods called ordered foods.
>
> **[1:13](https://www.linkedin.com/learning/practice-it-python-data-structures/check-it-storing-a-user-s-most-recent-food-orders?u=76281980&t=73)** Now we need to call extend to properly add them to foods. Let's print it again to see what we're working with. As you can see, now we have five foods in our food stack. Now what happens when we reach one more. This time I ordered dessert two, so let's just append it again. As you can see, we added dessert two and we got rid of STA001. We didn't really have to worry about keeping track or knowing what to pop off. The deque removed an element from the opposite side automatically. Although not necessarily relevant to our use case, I do want to show an example of appending to the left with maxlen.
>
> **[2:07](https://www.linkedin.com/learning/practice-it-python-data-structures/check-it-storing-a-user-s-most-recent-food-orders?u=76281980&t=127)** Let's see what happened. So as you can see, since we appended to the left with DES005, we still have dessert three and we actually got rid of dessert two from the opposite side. It's very important to keep this in mind when using maxlen. Let's practice some more with deque.

> [!info]- Semantic Content
>
> **Env Vars:** sta001 (2), des005 (1)
> **CLI Commands:** make (2)
> **Non-Speech:** (beeping) (1), (typing clicks) (1)
> **Speakers:** - [speaker] (1)

#### [Try it: Palindrome checker](https://www.linkedin.com/learning/practice-it-python-data-structures/try-it-palindrome-checker?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practice-it-python-data-structures/try-it-palindrome-checker?u=76281980&t=0)** (pulsing electronic tones) (keyboard clacking)
>
> **[0:03](https://www.linkedin.com/learning/practice-it-python-data-structures/try-it-palindrome-checker?u=76281980&t=3)** - [Instructor] Let's practice one of dict's key functionalities, popping from either side of the dict. We can practice this by checking for palindromes in some of the new menu items Nadia is considering. If Nadia was considering adding a Tacocat, that would be a palindrome. The [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) is the same backwards and forward. Think about how you can continually check on the equality of the first and last letter of a word using popleft() and pop(). If the letters are not the same, then the word is not a palindrome. If you'd like to practice by yourself, please pause the video here and practice. Otherwise, keep going to practice with me.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (3)
> **Speakers:** - [instructor] (1)

#### [Check it: Palindrome checker](https://www.linkedin.com/learning/practice-it-python-data-structures/check-it-palindrome-checker?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practice-it-python-data-structures/check-it-palindrome-checker?u=76281980&t=0)** - [Lecturer] As always, we need to import "deque" from "collections".
>
> **[0:12](https://www.linkedin.com/learning/practice-it-python-data-structures/check-it-palindrome-checker?u=76281980&t=12)** I'm going to break "check_palindrome" out, into another function. This way, in "main", we can call "check_palindrome," after we choose our [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md).
>
> **[0:35](https://www.linkedin.com/learning/practice-it-python-data-structures/check-it-palindrome-checker?u=76281980&t=35)** In "check_palindrome," first, we need to make our deque, "d".
>
> **[0:44](https://www.linkedin.com/learning/practice-it-python-data-structures/check-it-palindrome-checker?u=76281980&t=44)** We want to keep checking the left and right sides of our word, until we are down to one letter. So our condition here can be, while "len(d)" is bigger than one. We know something is a palindrome, if it is the same, backwards and forwards, so we will check left and right. If they're not equal, no need to keep going.
>
> **[1:12](https://www.linkedin.com/learning/practice-it-python-data-structures/check-it-palindrome-checker?u=76281980&t=72)** We can return false. If we made it through the whole deque without a letter mismatch, we can return true. Let's try first, with this word choice. As you can see, we return false. That's not a palindrome. Let's check with our known palindrome, "tacocat". As you can see, we return true. Let's do one more deque practice. This time, it will be a little bit more complicated. If you're ready for it, let's move on to the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (3)
> **Code Identifiers:** check_palindrome (3)
> **CLI Commands:** make (1)
> **Cross-References:** next video (1)
> **Definitions:** is a  (1)
> **Speakers:** - [lecturer] (1)
> **Non-Speech:** (typing sound) (1)

#### [Try it: Scheduling tasks with Priority](https://www.linkedin.com/learning/practice-it-python-data-structures/try-it-scheduling-tasks-with-priority?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practice-it-python-data-structures/try-it-scheduling-tasks-with-priority?u=76281980&t=0)** (keys pressed)
>
> **[0:03](https://www.linkedin.com/learning/practice-it-python-data-structures/try-it-scheduling-tasks-with-priority?u=76281980&t=3)** - [Instructor] Now that we have practiced popping from either side of the queue, we can practice something a little more involved. Let's implement a to-do list with priority, so that Nadia can properly handle all of her business. If she adds something to the list with priority, we want to move it to the front of the list. Otherwise, new tasks should be added to the end. Think about how you can accomplish this using deque, with append and appendleft. I would recommend creating a small class for task, then creating methods for adding, completing, and printing tasks. Add a few tasks with priority and a few without, so that you can see how each is incorporated into the deque. If you'd like to practice by yourself, please pause the video here and practice. Otherwise, keep going to practice with me.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)

#### [Check it: Scheduling tasks with priority](https://www.linkedin.com/learning/practice-it-python-data-structures/check-it-scheduling-tasks-with-priority?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/practice-it-python-data-structures/check-it-scheduling-tasks-with-priority?u=76281980&t=1)** - [Instructor] Let's import deck from collections.
>
> **[0:12](https://www.linkedin.com/learning/practice-it-python-data-structures/check-it-scheduling-tasks-with-priority?u=76281980&t=12)** Then since we'll be using tasks with and without priority let's make a simple task class that has a task description and has priority. The default for has priority can be false.
>
> **[0:56](https://www.linkedin.com/learning/practice-it-python-data-structures/check-it-scheduling-tasks-with-priority?u=76281980&t=56)** We will also make a string method just so these print nice and pretty.
>
> **[1:26](https://www.linkedin.com/learning/practice-it-python-data-structures/check-it-scheduling-tasks-with-priority?u=76281980&t=86)** Let's have a special ad task method that takes priority into account. If a task has priority, we'll pend it to the left. Otherwise we will pend it to the right.
>
> **[2:02](https://www.linkedin.com/learning/practice-it-python-data-structures/check-it-scheduling-tasks-with-priority?u=76281980&t=122)** Let's actually make that task queue as well.
>
> **[2:11](https://www.linkedin.com/learning/practice-it-python-data-structures/check-it-scheduling-tasks-with-priority?u=76281980&t=131)** When we do a task, we always want to take from the left since that is how we are prioritizing tasks. For now, I'll just use this method to pop left. All right, let's make a method called do task. For now we just want to return the left most item in the queue. Ideally, due task would actually do the task.
>
> **[2:39](https://www.linkedin.com/learning/practice-it-python-data-structures/check-it-scheduling-tasks-with-priority?u=76281980&t=159)** I'll also make a quick print tasks method as well because if I just print the queue it will show you tasks objects, which is not very useful.
>
> **[2:54](https://www.linkedin.com/learning/practice-it-python-data-structures/check-it-scheduling-tasks-with-priority?u=76281980&t=174)** Let's print the description instead. Okay, we're finally actually ready to use our queue. Let's add some tasks to the deck and see how it goes. We will add two without priority and then one with priority. First, let's add make list with no priority.
>
> **[3:21](https://www.linkedin.com/learning/practice-it-python-data-structures/check-it-scheduling-tasks-with-priority?u=76281980&t=201)** Now we can add make breakfast again with no priority.
>
> **[3:31](https://www.linkedin.com/learning/practice-it-python-data-structures/check-it-scheduling-tasks-with-priority?u=76281980&t=211)** Finally, let's add respond to email. This time with priority.
>
> **[3:45](https://www.linkedin.com/learning/practice-it-python-data-structures/check-it-scheduling-tasks-with-priority?u=76281980&t=225)** Let's print out our queue and see what it looks like.
>
> **[3:55](https://www.linkedin.com/learning/practice-it-python-data-structures/check-it-scheduling-tasks-with-priority?u=76281980&t=235)** As you can see, we have respond to email first, then make list, then make breakfast. Let's also print the result of do task.
>
> **[4:08](https://www.linkedin.com/learning/practice-it-python-data-structures/check-it-scheduling-tasks-with-priority?u=76281980&t=248)** As you can see, it responds with Respond to email, where our priority is true. You can do many things with deck. See if you can think of even more ways to practice on your own.

> [!info]- Semantic Content
>
> **CLI Commands:** make (9)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (typing sounds) (1)


### 3. Namedtuple

[↑ Back to Table of Contents](#table-of-contents)

#### [Try it: Store driver details](https://www.linkedin.com/learning/practice-it-python-data-structures/try-it-store-driver-details?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/practice-it-python-data-structures/try-it-store-driver-details?u=76281980&t=1)** (keyboard clacking)
>
> **[0:03](https://www.linkedin.com/learning/practice-it-python-data-structures/try-it-store-driver-details?u=76281980&t=3)** - [Instructor] Sometimes, we have structured data that we don't want to access by indices. In large applications, it can be especially confusing to pass around traditional tuples. Let's go through an example where we track Nadia's drivers by car type and capacity as well as of course, their names. You will have to create a named tuple called driver which contains name, car type, and car capacity as values. Then, you can use this data to do various things like check if a driver can hold all the required food for a delivery route. If you'd like to practice by yourself, please pause the video here and practice. Otherwise, keep going to practice with me.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)

#### [Check it: Store driver details](https://www.linkedin.com/learning/practice-it-python-data-structures/check-it-store-driver-details?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/practice-it-python-data-structures/check-it-store-driver-details?u=76281980&t=1)** (keys clicking)
>
> **[0:03](https://www.linkedin.com/learning/practice-it-python-data-structures/check-it-store-driver-details?u=76281980&t=3)** - [Instructor] Let's import namedtuple from collections. First, we'll create a namedtuple called driver. The fields we want to use are name, car type and car capacity. We can specify that here. (keys clicking)
>
> **[0:36](https://www.linkedin.com/learning/practice-it-python-data-structures/check-it-store-driver-details?u=76281980&t=36)** Now let's create a few different drivers. First, we've got Iris.
>
> **[0:52](https://www.linkedin.com/learning/practice-it-python-data-structures/check-it-store-driver-details?u=76281980&t=52)** Iris has a Prius and can take seven packages. Now let's create Mickie.
>
> **[1:06](https://www.linkedin.com/learning/practice-it-python-data-structures/check-it-store-driver-details?u=76281980&t=66)** Mickie's Tucson can take 15 packages. Finally, we'll create Witty.
>
> **[1:20](https://www.linkedin.com/learning/practice-it-python-data-structures/check-it-store-driver-details?u=76281980&t=80)** Witty's Hummer can take 26 packages. Now we can get to the core of the problem. Let's write a function for determining if the driver can carry a certain number of food packages for delivery.
>
> **[1:41](https://www.linkedin.com/learning/practice-it-python-data-structures/check-it-store-driver-details?u=76281980&t=101)** We can simply return if the driver's car capacity is greater than or equal to the number of packages.
>
> **[1:57](https://www.linkedin.com/learning/practice-it-python-data-structures/check-it-store-driver-details?u=76281980&t=117)** We should change this variable to be a little more clear about what we're passing. Okay, let's check with Witty.
>
> **[2:15](https://www.linkedin.com/learning/practice-it-python-data-structures/check-it-store-driver-details?u=76281980&t=135)** We'll do that by just passing the driver and the capacity. Let's run it and see. As you can see, Witty can take this order. Neither of the other drivers can take the order since their capacity is below 20. Let's try with Iris. Iris can't take the package. As you can see, namedtuple made this a lot simpler. We don't have to worry about indices or getting into nested indices, anything like that. We just colled car capacity. Let's practice one more thing with namedtuple before we move on. We'll see in the next video.

> [!info]- Semantic Content
>
> **Non-Speech:** (keys clicking) (2)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Try it: Reading CSV files](https://www.linkedin.com/learning/practice-it-python-data-structures/try-it-reading-csv-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practice-it-python-data-structures/try-it-reading-csv-files?u=76281980&t=0)** (keyboard clacking)
>
> **[0:03](https://www.linkedin.com/learning/practice-it-python-data-structures/try-it-reading-csv-files?u=76281980&t=3)** - [Instructor] A really cool use of namedtuple is reading data. Let's practice by reading a CSV and printing the values. Nadia wants to read in her customer data so that she can easily manipulate it later. We have included Customer.csv in the data directory. You will have to use a CSV reader to read in data, then use the first row as the field names for your named tuple. After that, you can create named tuples from rows two and beyond so that Nadia can easily use this customer data. If you'd like to practice by yourself, please pause the video here and practice. Otherwise, keep going to practice with me.

> [!info]- Semantic Content
>
> **Env Vars:** csv (2)
> **File Paths:** customer.csv (1)
> **Speakers:** - [instructor] (1)

#### [Check it: Reading CSV files](https://www.linkedin.com/learning/practice-it-python-data-structures/check-it-reading-csv-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practice-it-python-data-structures/check-it-reading-csv-files?u=76281980&t=0)** (keyboard clicking)
>
> **[0:03](https://www.linkedin.com/learning/practice-it-python-data-structures/check-it-reading-csv-files?u=76281980&t=3)** - [Instructor] First, we will import namedtuple, of course.
>
> **[0:11](https://www.linkedin.com/learning/practice-it-python-data-structures/check-it-reading-csv-files?u=76281980&t=11)** We will also be using a CSV reader to read in our file. So we can import that as well.
>
> **[0:23](https://www.linkedin.com/learning/practice-it-python-data-structures/check-it-reading-csv-files?u=76281980&t=23)** We will open our data file with open and call it open csv. Then we can read the data with the reader imported above.
>
> **[0:49](https://www.linkedin.com/learning/practice-it-python-data-structures/check-it-reading-csv-files?u=76281980&t=49)** We can get the fields for our namedtuple from the first line in our CSV file. We will create a namedtuple called person and use next to grab the first row for the fields. Now we have the person namedtuple and we can use it as we see fit.
>
> **[1:16](https://www.linkedin.com/learning/practice-it-python-data-structures/check-it-reading-csv-files?u=76281980&t=76)** Now let's go through line by line and create namedtuples.
>
> **[1:29](https://www.linkedin.com/learning/practice-it-python-data-structures/check-it-reading-csv-files?u=76281980&t=89)** Usually you would want to store this in some sort of data structure so that you could use it later. However, for our purposes, we'll just print out the person. Let's try it and see how it looks. As you can see, we have a namedtuple for each customer from our CSV file. We're using a simple example to practice, but think about how useful this could be with a large data set you'll eventually need to manipulate. We have conveniently named fields and you can use them however you see fit. I challenge you to continue practicing with namedtuple until you can confidently use it in many situations.

> [!info]- Semantic Content
>
> **Env Vars:** csv (3)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (keyboard clicking) (1)


### 4. Defaultdict

[↑ Back to Table of Contents](#table-of-contents)

#### [Try it: Cleaning up duplicate data](https://www.linkedin.com/learning/practice-it-python-data-structures/try-it-cleaning-up-duplicate-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practice-it-python-data-structures/try-it-cleaning-up-duplicate-data?u=76281980&t=0)** (low beeping) (keyboard clacking)
>
> **[0:03](https://www.linkedin.com/learning/practice-it-python-data-structures/try-it-cleaning-up-duplicate-data?u=76281980&t=3)** - [Instructor] Let's talk about our last collections container, DefaultDict. A DefaultDict is a subclass of [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md)'s dictionary class. The only difference is that DefaultDict allows you to set a default value when a key is not present, instead of raising a key error. We can practice using a DefaultDict with more data from Nadia's Garden. Nadia has a list of dishes, but somehow she accidentally duplicated several of them. She wants to organize these by entree, salad, starter, and dessert while removing the duplicates, so she can create a menu. Practice categorizing each item in this list while removing the duplicates. You'll have to make a DefaultDict, and use a set as the default value. Then input each item. As you can see, we use named tuples for the data, which gives you a chance to work with them a bit more. If you'd like to practice by yourself, please pause the video here and practice. Otherwise, keep going to practice with me.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **CLI Commands:** python (1), make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (low beeping) (1)

#### [Check it: Cleaning up duplicate data](https://www.linkedin.com/learning/practice-it-python-data-structures/check-it-cleaning-up-duplicate-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/practice-it-python-data-structures/check-it-cleaning-up-duplicate-data?u=76281980&t=3)** - [Instructor] As you can see we're already using namedtuple from collections. Let's also add defaultdict so we can use that as well. I'm also going to want to use pretty print so I'll import that too.
>
> **[0:27](https://www.linkedin.com/learning/practice-it-python-data-structures/check-it-cleaning-up-duplicate-data?u=76281980&t=27)** First, let's make a helper method that takes in a list to categorize.
>
> **[0:42](https://www.linkedin.com/learning/practice-it-python-data-structures/check-it-cleaning-up-duplicate-data?u=76281980&t=42)** Then we can make a defaultdict that has an empty set as the value.
>
> **[0:54](https://www.linkedin.com/learning/practice-it-python-data-structures/check-it-cleaning-up-duplicate-data?u=76281980&t=54)** Now we have to iterate through each item in the list and categorize them.
>
> **[1:04](https://www.linkedin.com/learning/practice-it-python-data-structures/check-it-cleaning-up-duplicate-data?u=76281980&t=64)** We can do this by looking at the first three letters of their identifier. Then we can use a match statement to put them into their respective categories. So let's get those first three letters.
>
> **[1:28](https://www.linkedin.com/learning/practice-it-python-data-structures/check-it-cleaning-up-duplicate-data?u=76281980&t=88)** For each case, we'll want a case statement. In the case of STA, it will go into the starter category.
>
> **[1:45](https://www.linkedin.com/learning/practice-it-python-data-structures/check-it-cleaning-up-duplicate-data?u=76281980&t=105)** For BEV, it will go into beverages.
>
> **[1:58](https://www.linkedin.com/learning/practice-it-python-data-structures/check-it-cleaning-up-duplicate-data?u=76281980&t=118)** SAL is for salad.
>
> **[2:21](https://www.linkedin.com/learning/practice-it-python-data-structures/check-it-cleaning-up-duplicate-data?u=76281980&t=141)** ENT is for our entrees. And finally, DES is for dessert.
>
> **[2:36](https://www.linkedin.com/learning/practice-it-python-data-structures/check-it-cleaning-up-duplicate-data?u=76281980&t=156)** As you can see for each of these we don't have to check if the key is already there. We just add the item. Let's return our res dictionary. Let's return our res dictionary. Okay, now we have Nadia's list of food which are all namedtuples. And let's print that out.
>
> **[3:12](https://www.linkedin.com/learning/practice-it-python-data-structures/check-it-cleaning-up-duplicate-data?u=76281980&t=192)** Let's run it and see how it looks.
>
> **[3:20](https://www.linkedin.com/learning/practice-it-python-data-structures/check-it-cleaning-up-duplicate-data?u=76281980&t=200)** As you can see here, we no longer have duplicates for berry tart, cafe latte or anything else. It's also all nicely categorized into the right category. Let's move on to our final practice. We will see how Nadia can use defaultdict to calculate her gains from the food delivery service.

> [!info]- Semantic Content
>
> **Env Vars:** sta (1), bev (1), sal (1), ent (1), des (1)
> **CLI Commands:** make (2)
> **Best Practices:** the key is (1)
> **Speakers:** - [instructor] (1)

#### [Try it: Calculating gain and loss](https://www.linkedin.com/learning/practice-it-python-data-structures/try-it-calculating-gain-and-loss?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/practice-it-python-data-structures/try-it-calculating-gain-and-loss?u=76281980&t=3)** - [Instructor] Welcome to our final practice where we explore more ways to use the DefaultDict. We will use another example from Nadia's Garden. Nadia wants to calculate how many of each product she has sold. Nadia has all of her data in OrderItems.csv. We will have to use this data and calculate how much of each item she has sold. You'll have to read the data into a usable format, then use a DefaultDict to add up the quantity from each item. If you'd like to practice by yourself, please pause the video here and practice. Otherwise, keep going to practice.

> [!info]- Semantic Content
>
> **File Paths:** orderitems.csv (1)
> **Speakers:** - [instructor] (1)

#### [Check it: Calculating gain and loss](https://www.linkedin.com/learning/practice-it-python-data-structures/check-it-calculating-gain-and-loss?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/practice-it-python-data-structures/check-it-calculating-gain-and-loss?u=76281980&t=3)** - [Female Narrator] We're actually going to combine quite a few concepts in this video. So we'll need to import a lot of stuff. First, let's import both namedtuple and defaultdict from collections.
>
> **[0:19](https://www.linkedin.com/learning/practice-it-python-data-structures/check-it-calculating-gain-and-loss?u=76281980&t=19)** We're going to use the same method as before to read from our csv file, so we'll need to import reader again. Finally, we'll want to use pretty print one more time.
>
> **[0:41](https://www.linkedin.com/learning/practice-it-python-data-structures/check-it-calculating-gain-and-loss?u=76281980&t=41)** First, let's create a default deck, and put int as the default value. This will mean it will return zero if the key doesn't exist yet. Then we can read our data into a namedtuple like we did in section three. So once again, let's open our order items dot csv file as open csv.
>
> **[1:30](https://www.linkedin.com/learning/practice-it-python-data-structures/check-it-calculating-gain-and-loss?u=76281980&t=90)** Then let's make an aim namedtuple called item with the first line of the CSV being that namedtuple's values.
>
> **[1:51](https://www.linkedin.com/learning/practice-it-python-data-structures/check-it-calculating-gain-and-loss?u=76281980&t=111)** Now let's go through and make each item, and add it to our dictionary.
>
> **[2:08](https://www.linkedin.com/learning/practice-it-python-data-structures/check-it-calculating-gain-and-loss?u=76281980&t=128)** We can simply add the item's quantity to the value we get back from its product ID. This way we keep incrementing as we see more orders for that item. Once we have our namedtuple, we can simply add the item's quantity to the value we get back from its product ID. This way we keep incrementing as we see more orders for that item.
>
> **[2:40](https://www.linkedin.com/learning/practice-it-python-data-structures/check-it-calculating-gain-and-loss?u=76281980&t=160)** Let's print our dictionary and see what we have.
>
> **[2:54](https://www.linkedin.com/learning/practice-it-python-data-structures/check-it-calculating-gain-and-loss?u=76281980&t=174)** Use a lowercase I in item. Now that we are done you can see every item and its quantity. It looks like DES 4 is the most popular item with 12 orders. Thank you for practicing [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) Collections with me. I hope you find new creative ways to use collections now that you have a good handle on some of them.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **CLI Commands:** make (2), python (1), find (1)
> **Env Vars:** csv (1), des (1)
> **Speakers:** - [female (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps in your Python data structures learning journey](https://www.linkedin.com/learning/practice-it-python-data-structures/next-steps-in-your-python-data-structures-learning-journey?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practice-it-python-data-structures/next-steps-in-your-python-data-structures-learning-journey?u=76281980&t=0)** - [Instructor] We've reached the end of our course. At this point, we have practiced with several different data types from the collections module. As some next steps, go through what you have learned here and see how you can expand it. Can you use our data in fun and different ways? Are there places we could have used namedtuple where we didn't? Make sure to experiment and have fun. Try using counter, deque, namedtuple, and defautdict as you develop your [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) applications. You might find that these come to mind a lot as you're going through your day-to-day life. You might find a great deal of these will help your code readability immensely. Explore other offerings from the Python collections module and keep an eye out for further additions. Make sure you keep in mind how these additions will help your code be more readable and easier for the next developer who comes along.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2)
> **CLI Commands:** make (2), python (2), find (2)
> **Best Practices:** make sure to (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [Kaylee Kohfeldt](../../Instructors/Software%20Development/Kaylee%20Kohfeldt.md)

## Resources

- [GitHub Repository](https://github.com/LinkedInLearning/practice-it-python-data-structs-2486182/codespaces)

## Skills Covered

- Data Structures
- Python (Programming Language)

## Path Context

### In [Python Hands-On Practice](../../Paths/Software%20Development/Learning%20Paths/Python%20Hands-On%20Practice.md)
← [Hands-On Introduction- Python](Hands-On%20Introduction-%20Python.md) | **2 of 14** | [Python Practice- Operations](Python%20Practice-%20Operations.md) →

## Appears In

- [Python Hands-On Practice](../../Paths/Software%20Development/Learning%20Paths/Python%20Hands-On%20Practice.md)

## Related Courses

_Courses sharing skills:_

- [Python Data Structures- Trees](../Database%20Management/Python%20Data%20Structures-%20Trees.md) — Python (Programming Language), Data Structures
- [Python Data Structures- Linked Lists](Python%20Data%20Structures-%20Linked%20Lists.md) — Python (Programming Language), Data Structures
- [Python Data Structures- Stacks, Deques, and Queues](Python%20Data%20Structures-%20Stacks%2C%20Deques%2C%20and%20Queues.md) — Python (Programming Language), Data Structures
- [Python Data Structures and Algorithms](Python%20Data%20Structures%20and%20Algorithms.md) — Python (Programming Language), Data Structures
- [Learning ArcGIS Python Scripting](../Data%20Science/Learning%20ArcGIS%20Python%20Scripting.md) — Python (Programming Language)

---

[↑ Back to top](#)