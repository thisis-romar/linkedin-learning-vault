---
type: course
slug: training-neural-networks-in-python-17058600
url: "https://www.linkedin.com/learning/training-neural-networks-in-python-17058600"
duration_minutes: 125
duration: 2h 5m
level: Advanced
updated: 11/9/2022
learners: 35685
skills:
  - Neural Networks
  - Python (Programming Language)
  - Artificial Intelligence (AI)
exercise_files: false
github: "https://github.com/LinkedInLearning/training-neural-networks-in-python-3215347/codespaces"
tags:
  - course
  - topic/artificial-intelligence
  - skill/neural-networks
  - skill/python-programming-language
  - skill/artificial-intelligence-ai
status: not-started
created: 2026-04-17
---

# Training Neural Networks in Python

> Prerequisites
You must feel comfortable writing code in Python 3.

Project
Build a neural network from scratch using Python.

Neural networks are widely used in everyday applications like online shopping, weather forecasting, and smartphones. This course by Eduardo Corpeño teaches the inner workings of neural networks in Python, allowing you to fully understand the algorithms behind them. Although

> [LinkedIn Learning](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600) | 2h 5m | Advanced | 36K learners

## Instructor

- [[Eduardo Corpeño]]

## Resources

- [GitHub Repository](https://github.com/LinkedInLearning/training-neural-networks-in-python-3215347/codespaces)

## Skills Covered

- Neural Networks
- Python (Programming Language)
- Artificial Intelligence (AI)

## Table of Contents

### Introduction

#### Creating a neural network in Python
> [LinkedIn Learning](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/creating-a-neural-network-in-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/creating-a-neural-network-in-python?u=76281980&t=0)** - Neural networks are everywhere and chances are you are using them every day when you're shopping online and a product you like pops up, when you see a weather forecast and why not, when you use your smartphone.
>
> **[0:14](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/creating-a-neural-network-in-python?u=76281980&t=14)** I'm Eduardo Corpeno and I'd like to invite you to take this course where we will create a neural network from scratch in Python.
>
> **[0:21](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/creating-a-neural-network-in-python?u=76281980&t=21)** Whether you are starting your journey into artificial intelligence and machine learning or you have some experience using neural networks with popular tools like PyTorch or TensorFlow and you'd like to brush up on the basics, this course is for you.
>
> **[0:37](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/creating-a-neural-network-in-python?u=76281980&t=37)** Although professional tools allow you to train neural networks from a high-level perspective, the objective of this course is to give you a chance to tap into the details of the algorithms behind neural networks.
>
> **[0:49](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/creating-a-neural-network-in-python?u=76281980&t=49)** This will allow you to fully understand what's going on inside and you'll make much better use of professional machine learning tools in the future.
>
> **[0:58](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/creating-a-neural-network-in-python?u=76281980&t=58)** So come join me in my LinkedIn learning course and let's have fun with neural networks and Python.

> [!info]- Semantic Content
>
> **CLI Commands:** python (2), make (1)
> **Code Keywords:** let (1)
> **Speakers:** - neural (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/what-you-should-know?u=76281980&t=0)** - [Instructor] Before we start, here are some things you should know.
>
> **[0:04](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/what-you-should-know?u=76281980&t=4)** First and foremost, you must feel comfortable with writing code in Python 3.
>
> **[0:09](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/what-you-should-know?u=76281980&t=9)** If you're not sure, I suggest that you give it a try until you reach the first programming exercise.
>
> **[0:16](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/what-you-should-know?u=76281980&t=16)** If you still need some training, go ahead and browse our library to choose one of our many courses on Python.
>
> **[0:23](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/what-you-should-know?u=76281980&t=23)** Second, you may run the exercise files using a GitHub code space, which is a nice cloud development environment for you to test your code without having to install anything.
>
> **[0:36](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/what-you-should-know?u=76281980&t=36)** We'll tell you more about this later.
>
> **[0:39](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/what-you-should-know?u=76281980&t=39)** In case you prefer to run the code in your computer, you'll need to have Python 3 installed with the NumPy library.
>
> **[0:48](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/what-you-should-know?u=76281980&t=48)** Also, for the final project, I will show you an application with a graphical user interface that uses the Tkinter package, which probably came with your Python distribution.
>
> **[1:02](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/what-you-should-know?u=76281980&t=62)** In the GitHub Codespace, you will use the cloud version of Visual Studio Code, but I also recommend that you install this IDE in your computer if you intend to run the code locally.
>
> **[1:15](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/what-you-should-know?u=76281980&t=75)** We'll be discussing functions like summations and exponentials, so having experience with that level of mathematics will be helpful.

> [!info]- Semantic Content
>
> **CLI Commands:** python (4)
> **Prerequisites:** install (2), before we start (1), you'll need (1)
> **Tools:** github (2), visual studio (1)
> **Versions:** python 3 (2)
> **Code Keywords:** interface (1)
> **Env Vars:** ide (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)

#### Using GitHub Codespaces with this course
> [LinkedIn Learning](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/using-github-codespaces-with-this-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/using-github-codespaces-with-this-course?u=76281980&t=0)** - [Instructor] This is Ravi De Lobos, Senior Staff Instructor at LinkedIn Learning, and I'm going to show you how to work with LinkedIn Learning courses using GitHub Codespaces.
>
> **[0:09](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/using-github-codespaces-with-this-course?u=76281980&t=9)** Codespaces is a code editor in the cloud with the full power of Visual Studio Code.
>
> **[0:14](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/using-github-codespaces-with-this-course?u=76281980&t=14)** It allows for real world hands on practice that mirrors software development in the workplace.
>
> **[0:19](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/using-github-codespaces-with-this-course?u=76281980&t=19)** This course was created using GitHub Codespaces.
>
> **[0:22](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/using-github-codespaces-with-this-course?u=76281980&t=22)** Using Codespaces, you have everything you need to get going without needing complex installations or build tools.
>
> **[0:29](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/using-github-codespaces-with-this-course?u=76281980&t=29)** One click and you're ready to go.
>
> **[0:32](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/using-github-codespaces-with-this-course?u=76281980&t=32)** To practice along with the course, you can create a codespace directly from the course overview page.
>
> **[0:38](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/using-github-codespaces-with-this-course?u=76281980&t=38)** First, click Open next to GitHub Codespaces.
>
> **[0:42](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/using-github-codespaces-with-this-course?u=76281980&t=42)** If you're already logged in, you'll be directed to a Getting started with GitHub Codespaces page.
>
> **[0:48](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/using-github-codespaces-with-this-course?u=76281980&t=48)** If you're not logged in, you'll be prompted to log in or create a free GitHub account first.
>
> **[0:53](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/using-github-codespaces-with-this-course?u=76281980&t=53)** From this page, click on Create codespace on main.
>
> **[0:58](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/using-github-codespaces-with-this-course?u=76281980&t=58)** The first time you open up a codespace, it might take a few minutes to create the virtual machine.
>
> **[1:04](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/using-github-codespaces-with-this-course?u=76281980&t=64)** Once it's done, you'll enter the code editor environment.
>
> **[1:08](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/using-github-codespaces-with-this-course?u=76281980&t=68)** If you're familiar with Visual Studio Code, this is a special version of that editor, running on GitHub's servers.
>
> **[1:15](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/using-github-codespaces-with-this-course?u=76281980&t=75)** Your course can have one or more extensions preinstalled based on the course you're taking.
>
> **[1:20](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/using-github-codespaces-with-this-course?u=76281980&t=80)** Those can be found in the extensions panel.
>
> **[1:25](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/using-github-codespaces-with-this-course?u=76281980&t=85)** Because this is a browser, it's easy to inadvertently close the browser window and lose the editor.
>
> **[1:31](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/using-github-codespaces-with-this-course?u=76281980&t=91)** If you do that, don't panic, Codespaces saves everything you're doing on a virtual machine.
>
> **[1:37](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/using-github-codespaces-with-this-course?u=76281980&t=97)** You can always get the codespace back for this repo right here.
>
> **[1:46](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/using-github-codespaces-with-this-course?u=76281980&t=106)** Notice that it even remembered that I had opened the extensions panel.
>
> **[1:51](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/using-github-codespaces-with-this-course?u=76281980&t=111)** An alternate way to create a codespace is directly from one of our course's GitHub repositories.
>
> **[1:57](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/using-github-codespaces-with-this-course?u=76281980&t=117)** From here, click Code and then Create codespace on main.
>
> **[2:02](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/using-github-codespaces-with-this-course?u=76281980&t=122)** You can also restart a previous codespace from this location.
>
> **[2:06](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/using-github-codespaces-with-this-course?u=76281980&t=126)** GitHub Codespaces is compatible on devices with smaller screen sizes like mobile phones or tablets, but it is optimized for larger screens, so we recommend that you practice along with this course on a laptop or desktop computer.
>
> **[2:22](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/using-github-codespaces-with-this-course?u=76281980&t=142)** The sample course I'm looking at is what is known as a flat branch repository.
>
> **[2:27](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/using-github-codespaces-with-this-course?u=76281980&t=147)** You can tell because there's a single branch when you click on the branch icon on the status bar.
>
> **[2:32](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/using-github-codespaces-with-this-course?u=76281980&t=152)** You can also tell because there are different folders for each of the videos in the course.
>
> **[2:38](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/using-github-codespaces-with-this-course?u=76281980&t=158)** This is a sample of what a multi-branch repository looks like, which is more common when you're working with web frameworks.
>
> **[2:45](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/using-github-codespaces-with-this-course?u=76281980&t=165)** If you go to the branch icon on the status bar, you can see that there's more than one branch.
>
> **[2:50](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/using-github-codespaces-with-this-course?u=76281980&t=170)** You can switch to the different branches using this menu.
>
> **[2:54](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/using-github-codespaces-with-this-course?u=76281980&t=174)** The branches are named with the chapter and the video number you're watching.
>
> **[2:58](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/using-github-codespaces-with-this-course?u=76281980&t=178)** If you see a b at the end of the branch, that's how the code looked at the beginning.
>
> **[3:02](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/using-github-codespaces-with-this-course?u=76281980&t=182)** If you see an e, that's how the code looked at the end.
>
> **[3:06](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/using-github-codespaces-with-this-course?u=76281980&t=186)** Let's switch to how the code looked on chapter two in the third video.
>
> **[3:12](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/using-github-codespaces-with-this-course?u=76281980&t=192)** I'll choose the beginning branch.
>
> **[3:15](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/using-github-codespaces-with-this-course?u=76281980&t=195)** As you work through a course, you might make some changes on a branch.
>
> **[3:19](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/using-github-codespaces-with-this-course?u=76281980&t=199)** I'm going to make a minor edit on the index.html file right here.
>
> **[3:27](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/using-github-codespaces-with-this-course?u=76281980&t=207)** I'm going to go ahead and save that, and you can see that I've modified this file because there's an M right here, and the branch name now has an asterisk on it.
>
> **[3:37](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/using-github-codespaces-with-this-course?u=76281980&t=217)** If I try to switch to another branch that causes major changes, like, say, 07_03e, I may see a dialog box like this.
>
> **[3:49](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/using-github-codespaces-with-this-course?u=76281980&t=229)** If you don't care about saving your changes, you can simply hit the Force Checkout button.
>
> **[3:54](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/using-github-codespaces-with-this-course?u=76281980&t=234)** It will let you switch to that branch.
>
> **[3:57](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/using-github-codespaces-with-this-course?u=76281980&t=237)** You can then choose to discard the changes on this file.
>
> **[4:01](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/using-github-codespaces-with-this-course?u=76281980&t=241)** Your instructor will let you know what the folder structure is for your course.
>
> **[4:06](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/using-github-codespaces-with-this-course?u=76281980&t=246)** Forking let's you create your own copy of the repository on your account, so that you can keep any changes that you've made.
>
> **[4:13](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/using-github-codespaces-with-this-course?u=76281980&t=253)** Even if you've deleted the codespace.
>
> **[4:16](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/using-github-codespaces-with-this-course?u=76281980&t=256)** To create your own fork, you can click on the Fork button on the repository.
>
> **[4:23](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/using-github-codespaces-with-this-course?u=76281980&t=263)** I'm going to hit Create fork.
>
> **[4:27](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/using-github-codespaces-with-this-course?u=76281980&t=267)** Now I have my own copy of this repository.
>
> **[4:30](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/using-github-codespaces-with-this-course?u=76281980&t=270)** And if I want to, I can start a new codespace on that fork.
>
> **[4:39](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/using-github-codespaces-with-this-course?u=76281980&t=279)** This forked version is almost exactly like the original repository, but it will let you push your own changes.
>
> **[4:46](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/using-github-codespaces-with-this-course?u=76281980&t=286)** Notice that the URL of the repository is slightly different.
>
> **[4:50](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/using-github-codespaces-with-this-course?u=76281980&t=290)** Let's go ahead and make a simple change to this file right here.
>
> **[5:00](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/using-github-codespaces-with-this-course?u=76281980&t=300)** I'm going to save it.
>
> **[5:03](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/using-github-codespaces-with-this-course?u=76281980&t=303)** You'll note that there is an M right here, as well as an asterisk on this branch.
>
> **[5:08](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/using-github-codespaces-with-this-course?u=76281980&t=308)** In the source control panel, you can also see a 1 for the change that we just made.
>
> **[5:14](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/using-github-codespaces-with-this-course?u=76281980&t=314)** Let's go ahead and try to commit this change.
>
> **[5:20](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/using-github-codespaces-with-this-course?u=76281980&t=320)** I'm going to hit the Commit button.
>
> **[5:22](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/using-github-codespaces-with-this-course?u=76281980&t=322)** And I'll ask it to go ahead and stage the changes, and then I'm going to hit this button here, I'll hit OK.
>
> **[5:34](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/using-github-codespaces-with-this-course?u=76281980&t=334)** You can also let it go ahead and run git fetch.
>
> **[5:37](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/using-github-codespaces-with-this-course?u=76281980&t=337)** That way it'll automatically sync with your forked repo.
>
> **[5:41](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/using-github-codespaces-with-this-course?u=76281980&t=341)** Now that change will be stored in your own version of this repository.
>
> **[5:46](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/using-github-codespaces-with-this-course?u=76281980&t=346)** Don't worry.
>
> **[5:47](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/using-github-codespaces-with-this-course?u=76281980&t=347)** If you forget to fork a repo and then try to push changes, Codespaces will also ask you if you want to create a fork automatically.
>
> **[5:55](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/using-github-codespaces-with-this-course?u=76281980&t=355)** Look for additional course specific tips from the instructor.
>
> **[5:58](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/using-github-codespaces-with-this-course?u=76281980&t=358)** Now, let's get back to the course.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), switch (4), this. (1)
> **Tools:** github (8), visual studio (2)
> **UI Navigation:** click on (3), switch to (3), go to (1)
> **Definitions:** is a  (4), known as (1), is an  (1)
> **CLI Commands:** make (3), git (1)
> **File Paths:** index.html (1)
> **Env Vars:** url (1)
> **Warnings:** note that (1)


### 1. Choosing a Neural Network

#### What is a neural network?
> [LinkedIn Learning](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/what-is-a-neural-network?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/what-is-a-neural-network?u=76281980&t=0)** - [Presenter] Let's start by defining what a neural network is.
>
> **[0:04](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/what-is-a-neural-network?u=76281980&t=4)** A neural network is a piece of software.
>
> **[0:06](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/what-is-a-neural-network?u=76281980&t=6)** It's a model of the brain, and like so, it's capable of reproducing some behaviors of the brain like learning and classifying.
>
> **[0:15](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/what-is-a-neural-network?u=76281980&t=15)** That is, it can be taught to recognize the category of a set of things you present to it.
>
> **[0:21](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/what-is-a-neural-network?u=76281980&t=21)** For example, telling the difference between apples and oranges in a picture.
>
> **[0:26](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/what-is-a-neural-network?u=76281980&t=26)** Now let's consider what a neural network is not so that we get some misconceptions out of the way.
>
> **[0:32](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/what-is-a-neural-network?u=76281980&t=32)** A neural network is not a series of if-then statements or any other form of hard-coded data the software may fetch to produce an answer.
>
> **[0:41](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/what-is-a-neural-network?u=76281980&t=41)** A neural network is not all there is to machine learning.
>
> **[0:45](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/what-is-a-neural-network?u=76281980&t=45)** In fact, you'll see that machine learning is an extensive field of knowledge on its own.
>
> **[0:50](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/what-is-a-neural-network?u=76281980&t=50)** And lastly, although neural networks are useful for classifying, they are certainly not the only type of classifier out there.
>
> **[0:59](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/what-is-a-neural-network?u=76281980&t=59)** Now I'd like to give you an idea of what constitutes a neural network.
>
> **[1:03](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/what-is-a-neural-network?u=76281980&t=63)** Simply put, a neural network is a collection of neurons which are small computing units that perform simple calculations to collectively solve a problem.
>
> **[1:13](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/what-is-a-neural-network?u=76281980&t=73)** These neurons may be interconnected in several ways.
>
> **[1:17](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/what-is-a-neural-network?u=76281980&t=77)** In the illustration, I'm showing the multilayer perceptron, a very popular type of neural network and the one we will implement up ahead.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2), is an  (1)
> **Code Keywords:** let (2)
> **Analogies:** for example (1), picture (1)
> **Speakers:** - [presenter] (1)

#### Why Python
> [LinkedIn Learning](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/why-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/why-python?u=76281980&t=0)** - [Instructor] I'd like to take a moment to tell you why we chose Python as the programing language for this course.
>
> **[0:06](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/why-python?u=76281980&t=6)** So here are some of the most important aspects about Python I'd like you to know.
>
> **[0:10](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/why-python?u=76281980&t=10)** First, Python is undoubtedly one of the most popular programming languages today.
>
> **[0:16](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/why-python?u=76281980&t=16)** It has a very convenient syntax for machine learning, especially because of the mathematical capabilities already embedded in the language.
>
> **[0:24](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/why-python?u=76281980&t=24)** There are lots of libraries available for pretty much any application in machine learning, and this includes lots of neural network variants.
>
> **[0:33](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/why-python?u=76281980&t=33)** Lastly, Python is a very friendly language when it comes to porting your code from one platform to another.
>
> **[0:40](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/why-python?u=76281980&t=40)** So I feel pretty confident when I say that you'll be able to run your code anywhere.
>
> **[0:45](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/why-python?u=76281980&t=45)** That's why I don't expect you to have any platform-related trouble when setting up your environment or trying out your code.

> [!info]- Semantic Content
>
> **CLI Commands:** python (4)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### The many applications of machine learning
> [LinkedIn Learning](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-many-applications-of-machine-learning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-many-applications-of-machine-learning?u=76281980&t=0)** - [Instructor] Since neural networks are an important part of machine learning I'd like to tell you just a few of the most popular applications of machine learning, which is the field of computer science related to training machines to solve problems.
>
> **[0:14](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-many-applications-of-machine-learning?u=76281980&t=14)** Machine learning algorithms are widely used for image recognition where a machine can be taught to make sense of still images or video.
>
> **[0:22](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-many-applications-of-machine-learning?u=76281980&t=22)** An example of this would be face recognition in surveillance systems.
>
> **[0:26](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-many-applications-of-machine-learning?u=76281980&t=26)** Speech recognition is something you may already be used to.
>
> **[0:30](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-many-applications-of-machine-learning?u=76281980&t=30)** Well, this is another typical application of machine learning where the input from thousands and thousands of people has taught a machine what the words mean over time.
>
> **[0:41](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-many-applications-of-machine-learning?u=76281980&t=41)** These people may have different voices and accents, and this makes the computer even better at understanding what new people are saying.
>
> **[0:49](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-many-applications-of-machine-learning?u=76281980&t=49)** Prediction is a big application of machine learning, which is useful at producing stock market advice, weather forecasting, and even at many stages of health care, like diagnostics and treatment.
>
> **[1:02](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-many-applications-of-machine-learning?u=76281980&t=62)** Another big application of machine learning are recommender systems, which I'm sure you are experiencing all the time in your video services like Netflix and Amazon Prime Video, in online stores like [Amazon.com](https://Amazon.com), and even in the advertisements you get in social media.
>
> **[1:19](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-many-applications-of-machine-learning?u=76281980&t=79)** These systems don't only learn from your product feedback, whether you liked a product or not, or how many stars you gave to it, but also from your purchase or view history and from the data of people who behave like you.
>
> **[1:34](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-many-applications-of-machine-learning?u=76281980&t=94)** Finally, an example of machine learning I like very much is [akinator.com](https://akinator.com), which is a genie capable of telling who or what you are thinking of by simply asking questions to you.
>
> **[1:45](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-many-applications-of-machine-learning?u=76281980&t=105)** A similar one is [20q.net](https://20q.net), which plays the game 20 questions against you.
>
> **[1:51](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-many-applications-of-machine-learning?u=76281980&t=111)** You should try these two whenever you get bored.
>
> **[1:54](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-many-applications-of-machine-learning?u=76281980&t=114)** They're surprisingly good.
>
> **[1:56](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-many-applications-of-machine-learning?u=76281980&t=116)** Now, let me briefly tell you about the three broad paradigms of machine learning and some of their best known tools.
>
> **[2:03](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-many-applications-of-machine-learning?u=76281980&t=123)** First, we have supervised learning where you actively teach the AI by providing it with lots of data samples along with the results you expect.
>
> **[2:13](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-many-applications-of-machine-learning?u=76281980&t=133)** Here are two big problems supervised learning can solve.
>
> **[2:16](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-many-applications-of-machine-learning?u=76281980&t=136)** Regression, where the AI comes up with the continuous function that behaves like the data you provided.
>
> **[2:23](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-many-applications-of-machine-learning?u=76281980&t=143)** I'm talking about tools like the linear regressions you may have used in spreadsheets.
>
> **[2:28](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-many-applications-of-machine-learning?u=76281980&t=148)** This is useful for making stock market predictions and weather forecasting.
>
> **[2:33](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-many-applications-of-machine-learning?u=76281980&t=153)** Next, we have classification, or recognizing the category a sample belongs to.
>
> **[2:39](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-many-applications-of-machine-learning?u=76281980&t=159)** Among other famous tools we have the support vector machine, neural networks, and decision trees, which are very suitable for implementing the software behind [akinator.com](https://akinator.com) and [20q.net](https://20q.net).
>
> **[2:52](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-many-applications-of-machine-learning?u=76281980&t=172)** The second paradigm of machine learning is unsupervised learning where you simply feed data into the AI, and it makes sense of this data on its own.
>
> **[3:02](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-many-applications-of-machine-learning?u=76281980&t=182)** Among unsupervised learning tools we have a big family of clustering algorithms to divide samples into clusters, thus learning from the data.
>
> **[3:12](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-many-applications-of-machine-learning?u=76281980&t=192)** This applies to medical imaging and recommender systems.
>
> **[3:16](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-many-applications-of-machine-learning?u=76281980&t=196)** Anomaly detection systems are capable of finding uncommon samples or outliers.
>
> **[3:21](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-many-applications-of-machine-learning?u=76281980&t=201)** This is crucial for detecting credit card fraud, typos in text, or medical conditions to name a few.
>
> **[3:28](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-many-applications-of-machine-learning?u=76281980&t=208)** Finally, there's a whole family of neural networks that learn from the data.
>
> **[3:33](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-many-applications-of-machine-learning?u=76281980&t=213)** Among these we have autoencoders, self-organizing maps, and deep belief networks.
>
> **[3:39](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-many-applications-of-machine-learning?u=76281980&t=219)** The third paradigm of machine learning is reinforcement learning where the AI is composed of a feedback loop with rewards and penalties based on its behavior.
>
> **[3:50](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-many-applications-of-machine-learning?u=76281980&t=230)** For this area I'll just mention the most famous application today, AI agents capable of learning how to play video games without supervision.
>
> **[4:00](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-many-applications-of-machine-learning?u=76281980&t=240)** If you've seen one of these projects you may know that they often exceed human capabilities, which I personally find mind blowing.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (2), let (1), function (1), self (1)
> **URLs:** [akinator.com](https://akinator.com) (2), [20q.net](https://20q.net) (2), [amazon.com](https://amazon.com) (1)
> **CLI Commands:** make (1), find (1)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)

#### Types of classifiers
> [LinkedIn Learning](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/types-of-classifiers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/types-of-classifiers?u=76281980&t=0)** - [Instructor] In this course, we'll work with neural networks for classification, their oldest application.
>
> **[0:06](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/types-of-classifiers?u=76281980&t=6)** So let me show you a few classifiers in machine learning and where neural networks fit in.
>
> **[0:12](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/types-of-classifiers?u=76281980&t=12)** First we have the logistic regression, which is a function with an input vector and a single return value.
>
> **[0:19](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/types-of-classifiers?u=76281980&t=19)** Depending on the values in the input vector the function will return a value between zero and one as a way of classifying the input as belonging to class zero or class one.
>
> **[0:31](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/types-of-classifiers?u=76281980&t=31)** This classifier is technically a very simplistic neural network known as a perceptron.
>
> **[0:37](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/types-of-classifiers?u=76281980&t=37)** We'll take a detailed look at perceptrons shortly.
>
> **[0:40](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/types-of-classifiers?u=76281980&t=40)** Another type of classifier is the K-nearest neighbors algorithm.
>
> **[0:45](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/types-of-classifiers?u=76281980&t=45)** To understand how it works, suppose that we plot our samples in a 2D plane so that we have some samples that belong to one category shown as squares and some other samples belonging to a second category shown as triangles.
>
> **[1:01](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/types-of-classifiers?u=76281980&t=61)** This algorithm takes in a new sample of an unknown category shown as a circle near the center and classifies it in the same category as the majority of its K-nearest neighbors.
>
> **[1:14](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/types-of-classifiers?u=76281980&t=74)** To avoid ties, K must be a odd number, and even so, it's value is very crucial.
>
> **[1:20](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/types-of-classifiers?u=76281980&t=80)** For instance, suppose we chose K equals three for this plot then the new sample would be classified as a triangle because most of its neighbors are triangles.
>
> **[1:32](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/types-of-classifiers?u=76281980&t=92)** However, if K equals five, then it would fall into the square category.
>
> **[1:38](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/types-of-classifiers?u=76281980&t=98)** That said, the advantage of this algorithm is its evident simplicity.
>
> **[1:43](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/types-of-classifiers?u=76281980&t=103)** There are very few calculations going on.
>
> **[1:46](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/types-of-classifiers?u=76281980&t=106)** Support vector machines are very similar to neural networks in their input and output structure and they often solve the same problem.
>
> **[1:55](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/types-of-classifiers?u=76281980&t=115)** Take this plot, for example.
>
> **[1:57](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/types-of-classifiers?u=76281980&t=117)** A support vector machine is capable of finding the line that acts as a boundary between the two categories of points shown as squares and triangles respectively.
>
> **[2:07](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/types-of-classifiers?u=76281980&t=127)** This boundary is aligned for this 2D example, but in general, it's known as a hyperplane.
>
> **[2:14](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/types-of-classifiers?u=76281980&t=134)** So here we have a valid boundary with a potential inconvenience.
>
> **[2:19](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/types-of-classifiers?u=76281980&t=139)** It's too close to some samples.
>
> **[2:21](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/types-of-classifiers?u=76281980&t=141)** Here's another boundary that's way too close to some samples.
>
> **[2:25](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/types-of-classifiers?u=76281980&t=145)** One of the most useful features of support vector machines is that they are capable of finding something close to the optimal boundary, that is a line that separates the categories while maximizing its distance to every point in the plot.
>
> **[2:39](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/types-of-classifiers?u=76281980&t=159)** Here's an example of such boundary.
>
> **[2:44](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/types-of-classifiers?u=76281980&t=164)** A seemingly different approach to classification are decision trees.
>
> **[2:49](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/types-of-classifiers?u=76281980&t=169)** These algorithms have a tree-like structure of questions very much like a series of if-else statements, but not quite.
>
> **[2:56](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/types-of-classifiers?u=76281980&t=176)** It turns out that a decision tree uses a training algorithm based on information theory to produce the shortest possible tree, that is, to classify a new sample in the smallest number of steps.
>
> **[3:10](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/types-of-classifiers?u=76281980&t=190)** In the illustration, we have a decision tree to determine whether a passenger of the Titanic survived or not.
>
> **[3:17](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/types-of-classifiers?u=76281980&t=197)** This tree was produced by observing data and noticing that most of the survivors in the Titanic were women and young children with not so many siblings.
>
> **[3:26](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/types-of-classifiers?u=76281980&t=206)** It's not perfect.
>
> **[3:28](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/types-of-classifiers?u=76281980&t=208)** It may fail sometimes because it's based on probabilities but the goal is to come up with a decision tree that asks fewer questions while getting it right more often.
>
> **[3:39](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/types-of-classifiers?u=76281980&t=219)** The tree is very simple and any programmer could write the code for this decision tree.
>
> **[3:45](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/types-of-classifiers?u=76281980&t=225)** The really tricky part is getting a computer to figure that out from the survivor data.
>
> **[3:50](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/types-of-classifiers?u=76281980&t=230)** And finally, we have the classifier we are interested in, feedforward neural networks.
>
> **[3:56](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/types-of-classifiers?u=76281980&t=236)** Here are some features of neural networks that make them stand out among other tools.
>
> **[4:02](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/types-of-classifiers?u=76281980&t=242)** They were biologically inspired to mimic the brain.
>
> **[4:05](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/types-of-classifiers?u=76281980&t=245)** So although they end up performing like other tools, their architecture is very flexible.
>
> **[4:11](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/types-of-classifiers?u=76281980&t=251)** They may have as many outputs as needed in a single network and their learning algorithm is very clever and simple.

> [!info]- Semantic Content
>
> **Code Keywords:** function (2), let (1), finally, (1)
> **Definitions:** is a  (2), known as (2)
> **Analogies:** for instance (1), similar to (1), for example (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### Types of neural networks
> [LinkedIn Learning](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/types-of-neural-networks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/types-of-neural-networks?u=76281980&t=0)** - As you could see, machine learning has an extensive set of tools for pretty much any problem out there.
>
> **[0:07](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/types-of-neural-networks?u=76281980&t=7)** Now let's zero in on neural networks.
>
> **[0:10](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/types-of-neural-networks?u=76281980&t=10)** There are dozens of neural network types but I'd like to mention three very special types.
>
> **[0:15](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/types-of-neural-networks?u=76281980&t=15)** First, we have Hopfield neural networks which have a fully-connected architecture.
>
> **[0:21](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/types-of-neural-networks?u=76281980&t=21)** That is, every neuron in the network sends its output to all the other neurons.
>
> **[0:27](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/types-of-neural-networks?u=76281980&t=27)** It does have inputs and outputs.
>
> **[0:29](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/types-of-neural-networks?u=76281980&t=29)** The inputs modify what's going on inside the network including the output values.
>
> **[0:35](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/types-of-neural-networks?u=76281980&t=35)** The logic behind this architecture is to let the neurons collectively perform the necessary computation in an emerging manner.
>
> **[0:43](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/types-of-neural-networks?u=76281980&t=43)** That is, the individual neurons aren't aware of the big picture, but we can influence the whole network to produce the outputs we need given the inputs we feed into the network.
>
> **[0:55](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/types-of-neural-networks?u=76281980&t=55)** Perhaps the best-known category of neural networks is the feedforward model where we have a set of inputs, a series of layers of neurons with signals propagating forward until they reach the output.
>
> **[1:08](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/types-of-neural-networks?u=76281980&t=68)** The success of these type of neural networks led to the development of a large family called deep neural networks which have a large number of neural layers between the input and the output.
>
> **[1:21](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/types-of-neural-networks?u=76281980&t=81)** One example of this evolution of deep neural networks are convolutional neural networks.
>
> **[1:27](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/types-of-neural-networks?u=76281980&t=87)** An application I like very much is the Deep Dream Generator which is a convolutional neural network that takes in a picture as input, then processes it through the many, many layers it has, and finally shows you the modifications it has added to the original picture.
>
> **[1:46](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/types-of-neural-networks?u=76281980&t=106)** These modifications include information it has collected over time from thousands of pictures it has seen before.
>
> **[1:53](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/types-of-neural-networks?u=76281980&t=113)** So it seems the AI has been dreaming with your picture, distorting it with interesting imagery in the process.
>
> **[2:00](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/types-of-neural-networks?u=76281980&t=120)** Here we have a nice picture of my dog, Nicholas, and this is the dream it caused.
>
> **[2:06](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/types-of-neural-networks?u=76281980&t=126)** Notice the bird-like tail.
>
> **[2:09](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/types-of-neural-networks?u=76281980&t=129)** This AI has definitely seen birds before.
>
> **[2:13](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/types-of-neural-networks?u=76281980&t=133)** Here's a picture of me looking all smart, and this is the resulting dream.
>
> **[2:18](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/types-of-neural-networks?u=76281980&t=138)** Notice the tattoos all over my skin, the armrest at the left looks like a plant to me, and my knee turned into a bug.
>
> **[2:26](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/types-of-neural-networks?u=76281980&t=146)** Finally, here's my LinkedIn Learning profile picture, and this is the resulting dream.
>
> **[2:33](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/types-of-neural-networks?u=76281980&t=153)** I just love how the AI dreamt of me with a lizard head instead of a hand.

> [!info]- Semantic Content
>
> **Analogies:** picture (7)
> **Code Keywords:** let (2), finally, (1)
> **Definitions:** is a  (1)
> **Speakers:** - as (1)

#### Multilayer perceptrons
> [LinkedIn Learning](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/multilayer-perceptrons?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/multilayer-perceptrons?u=76281980&t=0)** - [Instructor] Now we've come to the point when we'll talk about the multilayer perceptron.
>
> **[0:04](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/multilayer-perceptrons?u=76281980&t=4)** This is the best-known feedforward neural network and it's one of the oldest models of the brain.
>
> **[0:10](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/multilayer-perceptrons?u=76281980&t=10)** It consists of neurons organized in layers and the data traverses the network from input to output.
>
> **[0:18](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/multilayer-perceptrons?u=76281980&t=18)** This is typically sketched from left to right.
>
> **[0:21](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/multilayer-perceptrons?u=76281980&t=21)** Feedforward neural networks have a so-called fully-connected architecture between layers of neurons.
>
> **[0:27](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/multilayer-perceptrons?u=76281980&t=27)** Here's an example. First, we have the input layer.
>
> **[0:31](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/multilayer-perceptrons?u=76281980&t=31)** It contains the inputs of the network, technically known as the input vector.
>
> **[0:36](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/multilayer-perceptrons?u=76281980&t=36)** This is the only layer that does not contain neurons.
>
> **[0:40](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/multilayer-perceptrons?u=76281980&t=40)** You can think of these elements as input terminals.
>
> **[0:43](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/multilayer-perceptrons?u=76281980&t=43)** This is important, especially for the implementation, so I'll say it again.
>
> **[0:47](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/multilayer-perceptrons?u=76281980&t=47)** You don't have to place neurons in this layer.
>
> **[0:51](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/multilayer-perceptrons?u=76281980&t=51)** Second, we have the set of hidden layers, which are composed of neurons.
>
> **[0:55](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/multilayer-perceptrons?u=76281980&t=55)** Notice how all neurons from the first hidden layer are taking in all of the inputs from the input layer.
>
> **[1:02](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/multilayer-perceptrons?u=76281980&t=62)** The second hidden layer is composed of neurons that take all of the outputs from the first hidden layer.
>
> **[1:09](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/multilayer-perceptrons?u=76281980&t=69)** This is what fully connected means in this context.
>
> **[1:12](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/multilayer-perceptrons?u=76281980&t=72)** These layers are called hidden because the neural network does not expose them to the outside world.
>
> **[1:18](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/multilayer-perceptrons?u=76281980&t=78)** The outside world modifies the behavior of the network through its inputs and the outside world gets modified by the network through its outputs but the neurons in the middle layers are hidden.
>
> **[1:31](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/multilayer-perceptrons?u=76281980&t=91)** Lastly, we have the output layer, which is the last layer of neurons.
>
> **[1:36](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/multilayer-perceptrons?u=76281980&t=96)** There are as many neurons in this layer as outputs in the network.
>
> **[1:40](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/multilayer-perceptrons?u=76281980&t=100)** So there you have it.
>
> **[1:42](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/multilayer-perceptrons?u=76281980&t=102)** Now we are ready to start writing some code.

> [!info]- Semantic Content
>
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)


### 2. The Building Blocks of Neural Networks

#### Neurons and the brain
> [LinkedIn Learning](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/neurons-and-the-brain?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/neurons-and-the-brain?u=76281980&t=0)** - Earlier I mentioned that neural networks were inspired by the brain, so it makes sense to take a quick view at the ultimate computer.
>
> **[0:08](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/neurons-and-the-brain?u=76281980&t=8)** There are many things we know about the brain and so many other things we don't.
>
> **[0:13](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/neurons-and-the-brain?u=76281980&t=13)** Here are some important things we do know.
>
> **[0:16](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/neurons-and-the-brain?u=76281980&t=16)** The brain is made of neurons.
>
> **[0:18](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/neurons-and-the-brain?u=76281980&t=18)** The brain is a biological neural network.
>
> **[0:21](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/neurons-and-the-brain?u=76281980&t=21)** Each neuron in the brain performs a very modest cognitive function contributing to larger cognitive functions.
>
> **[0:29](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/neurons-and-the-brain?u=76281980&t=29)** Finally, the combination of these cognitive functions results in our brain's mental ability.
>
> **[0:36](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/neurons-and-the-brain?u=76281980&t=36)** Everything the brain does is the result of these tiny computations, feelings, memories, movement, speech, dreams, all of it.
>
> **[0:46](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/neurons-and-the-brain?u=76281980&t=46)** So let's take some of the known facts of neurons to come up with a computational model of a biological neuron.
>
> **[0:53](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/neurons-and-the-brain?u=76281980&t=53)** The structure of biological neurons consists of several parts.
>
> **[0:57](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/neurons-and-the-brain?u=76281980&t=57)** We are only interested in three parts of the neuron.
>
> **[1:01](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/neurons-and-the-brain?u=76281980&t=61)** Dendrites take electrical signals coming from nerves or other neurons.
>
> **[1:06](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/neurons-and-the-brain?u=76281980&t=66)** These signals may come from sense organs like the eyes, tongue, or ears.
>
> **[1:11](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/neurons-and-the-brain?u=76281980&t=71)** The nucleus of the neuron is where some processing is believed to happen, so that the combination of inputs can yield some response.
>
> **[1:20](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/neurons-and-the-brain?u=76281980&t=80)** This response is usually interpreted as binary, so that if the stimulus from the inputs is high enough, it is said that the neuron fires an output signal.
>
> **[1:31](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/neurons-and-the-brain?u=76281980&t=91)** This output signal goes through an extension called "The Axon" into other neurons, or some other part of the body that will react to this signal, such as muscles.
>
> **[1:43](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/neurons-and-the-brain?u=76281980&t=103)** Now let's build a computational model of a neuron based on these three elements.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), function (1), finally, (1), yield (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - earlier (1)

#### A simple model of a neuron
> [LinkedIn Learning](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/a-simple-model-of-a-neuron?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/a-simple-model-of-a-neuron?u=76281980&t=0)** - [Instructor] So based on the roles of the dendrites, nucleus, and axons, let's just assign those roles to a set of inputs a calculation unit, and an output respectively.
>
> **[0:11](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/a-simple-model-of-a-neuron?u=76281980&t=11)** To come up with the block diagram, you can see at the right, we'll call the inputs X0 through Xn minus 1 for a neuron with n inputs.
>
> **[0:22](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/a-simple-model-of-a-neuron?u=76281980&t=22)** Now, biological neurons seem to react in different sensitivities to different incoming signals, so we'll model that mathematically by assigning a weight to each input channel.
>
> **[0:35](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/a-simple-model-of-a-neuron?u=76281980&t=35)** Let's call them W0 through Wn minus 1.
>
> **[0:39](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/a-simple-model-of-a-neuron?u=76281980&t=39)** Next, the computation performed in order to fire or not is a simple weighted sum as shown inside the circle and that's exactly what our output will be.
>
> **[0:51](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/a-simple-model-of-a-neuron?u=76281980&t=51)** Here's an example of how a neuron would help us classify.
>
> **[0:56](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/a-simple-model-of-a-neuron?u=76281980&t=56)** Let's suppose we have a two input neuron and we feed data with two features into it.
>
> **[1:02](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/a-simple-model-of-a-neuron?u=76281980&t=62)** These features are shown in the plot at the right, which shows the risk of getting some medical condition X based on two factors, A and B, as the horizontal and vertical axis.
>
> **[1:15](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/a-simple-model-of-a-neuron?u=76281980&t=75)** Each point represents a person and its shape represents that person's risk of getting that medical condition.
>
> **[1:22](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/a-simple-model-of-a-neuron?u=76281980&t=82)** Triangles are at risk while squares are not at risk.
>
> **[1:26](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/a-simple-model-of-a-neuron?u=76281980&t=86)** Let's say these points come from a number of observations in a research study.
>
> **[1:31](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/a-simple-model-of-a-neuron?u=76281980&t=91)** Now, let's suppose we want to predict if a person is at risk of getting that medical condition X based on factors A and B alone.
>
> **[1:39](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/a-simple-model-of-a-neuron?u=76281980&t=99)** We could feed A through X0 and B through X1 into our neuron and it will give us some useful information.
>
> **[1:48](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/a-simple-model-of-a-neuron?u=76281980&t=108)** Notice that the weights I assign to the inputs are 1 and minus 1.
>
> **[1:53](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/a-simple-model-of-a-neuron?u=76281980&t=113)** This means that the boundary that divides positive and negative output results would be this line.
>
> **[2:00](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/a-simple-model-of-a-neuron?u=76281980&t=120)** Take a moment to look at this line and notice that whenever A is greater than B, that is for a point above the line, the result of the weighted sum will be positive.
>
> **[2:12](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/a-simple-model-of-a-neuron?u=76281980&t=132)** And whenever B is greater than A, meaning that the point is below the line, the weighted sum will be negative.
>
> **[2:20](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/a-simple-model-of-a-neuron?u=76281980&t=140)** So this neuron model is indeed capable of classifying if we interpret the sign of the weighted sum as the category.
>
> **[2:28](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/a-simple-model-of-a-neuron?u=76281980&t=148)** This way, a positive result means that the person represented by A and B is at risk, while a negative sum means that the person is not at risk.
>
> **[2:39](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/a-simple-model-of-a-neuron?u=76281980&t=159)** Now although this neuron is capable of producing a boundary line, it's very limited.
>
> **[2:45](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/a-simple-model-of-a-neuron?u=76281980&t=165)** That's why we need to talk about bias inputs.
>
> **[2:48](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/a-simple-model-of-a-neuron?u=76281980&t=168)** So as you noticed, a weighted sum is a linear function.
>
> **[2:52](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/a-simple-model-of-a-neuron?u=76281980&t=172)** It has a weight assigned to each input which will provide a slope to the boundary.
>
> **[2:58](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/a-simple-model-of-a-neuron?u=76281980&t=178)** However, an additional independent input is needed to move the line vertically.
>
> **[3:04](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/a-simple-model-of-a-neuron?u=76281980&t=184)** And this extra input is usually fed a constant value of 1, but it has its own weight.
>
> **[3:11](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/a-simple-model-of-a-neuron?u=76281980&t=191)** Now let me show you why we need a bias term.
>
> **[3:14](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/a-simple-model-of-a-neuron?u=76281980&t=194)** The neuron we've considered so far is only capable of producing boundary lines that pass through the origin or the coordinate zero,zero.
>
> **[3:23](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/a-simple-model-of-a-neuron?u=76281980&t=203)** So consider this plot where we have a set of students who passed or failed some class and we want to classify other students based only on their grades on two exams in that class, even though there was more graded work.
>
> **[3:39](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/a-simple-model-of-a-neuron?u=76281980&t=219)** The squares passed and the triangles failed.
>
> **[3:43](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/a-simple-model-of-a-neuron?u=76281980&t=223)** Our first attempt of a neuron could produce any line with a positive slope like this one.
>
> **[3:48](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/a-simple-model-of-a-neuron?u=76281980&t=228)** But notice that, try as we might, there's no way of dividing the two categories with a line like this one.
>
> **[3:56](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/a-simple-model-of-a-neuron?u=76281980&t=236)** How about inverting the slope by switching the signs of the weights?
>
> **[4:01](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/a-simple-model-of-a-neuron?u=76281980&t=241)** Well, we would get a little closer because the triangles and squares seem to be separated by a negative slope line.
>
> **[4:09](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/a-simple-model-of-a-neuron?u=76281980&t=249)** But again, stick to the origin and there's no way of placing the line between the categories.
>
> **[4:15](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/a-simple-model-of-a-neuron?u=76281980&t=255)** As you may have already guessed, a simple solution is to add a biased term.
>
> **[4:20](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/a-simple-model-of-a-neuron?u=76281980&t=260)** A term that's independent of the grades of exams one and two.
>
> **[4:25](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/a-simple-model-of-a-neuron?u=76281980&t=265)** Technically, this is the intercept in the equation of a straight line.
>
> **[4:29](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/a-simple-model-of-a-neuron?u=76281980&t=269)** Notice how this line does the trick for us.
>
> **[4:33](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/a-simple-model-of-a-neuron?u=76281980&t=273)** None of the previous attempts would've divided the categories like this one does.
>
> **[4:38](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/a-simple-model-of-a-neuron?u=76281980&t=278)** So this will be a refined model of a neuron.
>
> **[4:41](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/a-simple-model-of-a-neuron?u=76281980&t=281)** It produces a linear function that can place the boundary wherever it's needed.
>
> **[4:47](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/a-simple-model-of-a-neuron?u=76281980&t=287)** Also, notice that the examples we saw have only two inputs.
>
> **[4:51](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/a-simple-model-of-a-neuron?u=76281980&t=291)** This was done to keep the explanation simple and in two dimensions.
>
> **[4:55](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/a-simple-model-of-a-neuron?u=76281980&t=295)** But our neurons can have any number of inputs making the boundary go from a line to a plane or in general to a hyperplane.
>
> **[5:04](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/a-simple-model-of-a-neuron?u=76281980&t=304)** Pay attention to the notation I'm using here.
>
> **[5:08](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/a-simple-model-of-a-neuron?u=76281980&t=308)** This is an n input neuron with inputs numbered from 0 to n minus 1.
>
> **[5:14](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/a-simple-model-of-a-neuron?u=76281980&t=314)** It has an implicit bias input, which doesn't count as an input because the bias is usually a part of the neural network.
>
> **[5:21](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/a-simple-model-of-a-neuron?u=76281980&t=321)** It doesn't come from the outside.
>
> **[5:23](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/a-simple-model-of-a-neuron?u=76281980&t=323)** So technically the neuron will have n plus 1 inputs, but we'll say that it has n inputs based on the outside world standpoint.
>
> **[5:32](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/a-simple-model-of-a-neuron?u=76281980&t=332)** All of these features of a neuron are going to help us classify, but there's still one missing piece if we want to give this neuron the ability to learn.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), function (2), pass (1), class, (1)
> **Definitions:** means that (3), is a  (2), is an  (1)
> **Speakers:** - [instructor] (1)

#### Activation functions
> [LinkedIn Learning](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/activation-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/activation-functions?u=76281980&t=0)** - [Instructor] We are almost there but our neuron is still missing something.
>
> **[0:05](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/activation-functions?u=76281980&t=5)** So let me tell you what's wrong with weighted sums.
>
> **[0:08](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/activation-functions?u=76281980&t=8)** There are two inconveniences I'd like to mention.
>
> **[0:11](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/activation-functions?u=76281980&t=11)** First, values aren't constrained so a sum may sometimes result in a very large value or a very small value.
>
> **[0:20](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/activation-functions?u=76281980&t=20)** Second, a weighted sum is a linear function.
>
> **[0:23](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/activation-functions?u=76281980&t=23)** So the threshold to fire is not very well defined.
>
> **[0:27](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/activation-functions?u=76281980&t=27)** That is, a change between true and false is not very notable.
>
> **[0:32](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/activation-functions?u=76281980&t=32)** And most importantly, it's not easily trained.
>
> **[0:36](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/activation-functions?u=76281980&t=36)** It turns out that other functions that make learning easier are non-linear.
>
> **[0:41](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/activation-functions?u=76281980&t=41)** This is the real reason to add an element to our neuron.
>
> **[0:45](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/activation-functions?u=76281980&t=45)** So what's wrong with having a very large and a very small value?
>
> **[0:50](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/activation-functions?u=76281980&t=50)** Consider this example where we have a two input neuron and we are feeding 1000 to X0 and two to X1.
>
> **[0:59](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/activation-functions?u=76281980&t=59)** For now, let's leave the bias weight at zero so the bias is not shown to keep the diagram simple.
>
> **[1:05](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/activation-functions?u=76281980&t=65)** If we run the neuron, we'll have a result of 2006.
>
> **[1:10](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/activation-functions?u=76281980&t=70)** So notice that although the weights are very similar, two and three, the big difference in the input values has made the neuron very sensitive to X0 and insensitive to X1.
>
> **[1:23](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/activation-functions?u=76281980&t=83)** That's the job of the weights, not of the inputs.
>
> **[1:27](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/activation-functions?u=76281980&t=87)** And what's wrong with linear functions?
>
> **[1:30](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/activation-functions?u=76281980&t=90)** Well consider this neuron with one feature input and one bias input.
>
> **[1:36](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/activation-functions?u=76281980&t=96)** At the right, we have a plot of the output as a function of X0.
>
> **[1:42](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/activation-functions?u=76281980&t=102)** Now, this is not the usual 2D plot we have seen so far.
>
> **[1:46](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/activation-functions?u=76281980&t=106)** The line is not the boundary.
>
> **[1:48](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/activation-functions?u=76281980&t=108)** This plot is showing the output sum Z as a function of X0, so the boundary is the horizontal axis.
>
> **[1:56](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/activation-functions?u=76281980&t=116)** Remember, this neuron will classify the input values as one of two categories based on the sign of the output.
>
> **[2:04](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/activation-functions?u=76281980&t=124)** That means that whenever X0 is greater than -1.25, the output will be positive, putting X0 in the positive category bucket.
>
> **[2:16](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/activation-functions?u=76281980&t=136)** On the other hand, whenever X0 is less than -1.25, it will go to the negative category bucket.
>
> **[2:24](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/activation-functions?u=76281980&t=144)** A somewhat inconvenient detail of these type of function is that close calls don't have a very dramatic difference.
>
> **[2:31](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/activation-functions?u=76281980&t=151)** For example, if X0 is -1.26 and increases by a small amount to -1.24 the category will change from negative to positive but the value of the function will be close to zero either way.
>
> **[2:49](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/activation-functions?u=76281980&t=169)** A more dramatic change in these cases would give us a bit more confidence in the classification.
>
> **[2:54](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/activation-functions?u=76281980&t=174)** Once again, the real reason why linear functions are inappropriate for a neuron is that this dramatic distinction between the categories near the boundary will make it very easy for this neuron to learn.
>
> **[3:08](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/activation-functions?u=76281980&t=188)** So in conclusion, we need a non-linear element in our neuron that's achieved by adding a so-called activation function to our model, and we'll do that by simply plugging this function to the output of our model so far.
>
> **[3:23](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/activation-functions?u=76281980&t=203)** This means that the sum will be sent as an argument to the function G.
>
> **[3:28](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/activation-functions?u=76281980&t=208)** So let's do a quick recap on activation functions.
>
> **[3:31](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/activation-functions?u=76281980&t=211)** These functions model the desired dramatic threshold behavior of the boundary.
>
> **[3:37](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/activation-functions?u=76281980&t=217)** They usually constrain the output values and most importantly, they provide non-linearity to the neuron, thus enabling training by backpropagation, which is the method we will use.
>
> **[3:51](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/activation-functions?u=76281980&t=231)** This requires activation functions to be differentiatable.
>
> **[3:54](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/activation-functions?u=76281980&t=234)** So let me show you some popular activation functions.
>
> **[3:58](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/activation-functions?u=76281980&t=238)** First, we have the binary step function, which limits the output values between zero and one.
>
> **[4:04](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/activation-functions?u=76281980&t=244)** Actually outputs are exactly zero or one.
>
> **[4:09](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/activation-functions?u=76281980&t=249)** Here's the expression for the function.
>
> **[4:11](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/activation-functions?u=76281980&t=251)** So as you can see in the plot, the function returns one for positive values of X and zero for negative values of X.
>
> **[4:19](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/activation-functions?u=76281980&t=259)** There's the dramatic distinction in the boundary.
>
> **[4:22](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/activation-functions?u=76281980&t=262)** The function jumps between zero and one.
>
> **[4:26](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/activation-functions?u=76281980&t=266)** Next we have the logistic or sigmoid function.
>
> **[4:29](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/activation-functions?u=76281980&t=269)** This is the one we'll use in our neuron.
>
> **[4:31](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/activation-functions?u=76281980&t=271)** This one also limits the output values between zero and one.
>
> **[4:36](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/activation-functions?u=76281980&t=276)** However, output values are real numbers between zero and one.
>
> **[4:41](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/activation-functions?u=76281980&t=281)** Here's the expression for the sigmoid function.
>
> **[4:43](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/activation-functions?u=76281980&t=283)** As you can see in the plot, this function has a smooth change in the boundary, and it turns out that its derivative is a very simple function which we will need for the learning part.
>
> **[4:55](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/activation-functions?u=76281980&t=295)** This is definitely a keeper.
>
> **[4:57](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/activation-functions?u=76281980&t=297)** We also have the hyperbolic tangent function.
>
> **[5:00](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/activation-functions?u=76281980&t=300)** This function limits the output between -1 and plus 1.
>
> **[5:05](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/activation-functions?u=76281980&t=305)** Outputs are also real numbers in this range.
>
> **[5:09](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/activation-functions?u=76281980&t=309)** The expression is a well known function composed of exponentials.
>
> **[5:13](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/activation-functions?u=76281980&t=313)** Now looking at the plot, you may think of the sigmoid function we just saw, and that's because the hyperbolic tangent is the same sigmoid function with a scaling factor and a vertical shift.
>
> **[5:24](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/activation-functions?u=76281980&t=324)** That's why these two functions behave in a similar way, and you may want to choose one or the other depending on how you want to represent your outputs.
>
> **[5:34](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/activation-functions?u=76281980&t=334)** For example, if you want to represent false with zero and true with one, use the sigmoid.
>
> **[5:41](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/activation-functions?u=76281980&t=341)** And if you want to use -1 for false and plus one for true, then use this hyperbolic tangent function.
>
> **[5:48](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/activation-functions?u=76281980&t=348)** Lastly, we have the rectified linear unit function, often called ReLU.
>
> **[5:53](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/activation-functions?u=76281980&t=353)** This function limits outputs to positive values, but it's unbounded for positive values.
>
> **[6:00](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/activation-functions?u=76281980&t=360)** As you can see in the mathematical expression this function leaves the value of X unchanged for positive values and outputs zero for negative values of X.
>
> **[6:11](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/activation-functions?u=76281980&t=371)** All of these traits are visible in the plot, and although the function is unbounded it's a very popular activation function for neural networks.

> [!info]- Semantic Content
>
> **Code Keywords:** function (27), let (4)
> **Definitions:** is a  (3), means that (2)
> **Versions:** 1.25 (2), 1.26 (1), 1.24 (1)
> **CLI Commands:** make (2)
> **Analogies:** for example (2)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### Perceptrons: A better model of a neuron
> [LinkedIn Learning](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/perceptrons-a-better-model-of-a-neuron?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/perceptrons-a-better-model-of-a-neuron?u=76281980&t=0)** - [Instructor] Now we have our complete model known as a perceptron.
>
> **[0:04](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/perceptrons-a-better-model-of-a-neuron?u=76281980&t=4)** As you can see, it has a set of inputs with a global bias term.
>
> **[0:09](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/perceptrons-a-better-model-of-a-neuron?u=76281980&t=9)** This input vector will go through a weighted sum and this value will go into our sigmoid activation function.
>
> **[0:16](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/perceptrons-a-better-model-of-a-neuron?u=76281980&t=16)** Once again, pay attention to the numbering, the inputs and their weights are numbered from zero to N minus one and the bias is treated as input number N.
>
> **[0:28](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/perceptrons-a-better-model-of-a-neuron?u=76281980&t=28)** So how should we interpret the output values of our neuron?
>
> **[0:33](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/perceptrons-a-better-model-of-a-neuron?u=76281980&t=33)** Well, the output comes from the sigmoid function.
>
> **[0:37](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/perceptrons-a-better-model-of-a-neuron?u=76281980&t=37)** Notice that the output is greater than 0.5 for a positive input, that is for a positive weighted sum.
>
> **[0:45](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/perceptrons-a-better-model-of-a-neuron?u=76281980&t=45)** This way, an output value of 0.5 seems like a reasonable threshold for firing.
>
> **[0:53](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/perceptrons-a-better-model-of-a-neuron?u=76281980&t=53)** So before we dive into the code, let me point out some implementation notes.
>
> **[0:58](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/perceptrons-a-better-model-of-a-neuron?u=76281980&t=58)** All values must be real numbers, not integers.
>
> **[1:03](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/perceptrons-a-better-model-of-a-neuron?u=76281980&t=63)** The weights and inputs may be implemented as one dimensional vectors.
>
> **[1:07](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/perceptrons-a-better-model-of-a-neuron?u=76281980&t=67)** In our case, we'll use NumPy arrays.
>
> **[1:11](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/perceptrons-a-better-model-of-a-neuron?u=76281980&t=71)** This way the weighted sum may be calculated in one operation as the dot product between the two vectors.
>
> **[1:19](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/perceptrons-a-better-model-of-a-neuron?u=76281980&t=79)** That's one line of code.
>
> **[1:21](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/perceptrons-a-better-model-of-a-neuron?u=76281980&t=81)** Finally, we'll feed the weighted sum to our implementation of the sigmoid function.
>
> **[1:28](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/perceptrons-a-better-model-of-a-neuron?u=76281980&t=88)** Before we get to the code, let me show you how to set up a code space and browse through the branches in Visual Studio Code.
>
> **[1:36](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/perceptrons-a-better-model-of-a-neuron?u=76281980&t=96)** Here we have the GitHub repository for the course.
>
> **[1:40](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/perceptrons-a-better-model-of-a-neuron?u=76281980&t=100)** To start a code space, you can click on the code button and go to the code spaces tab.
>
> **[1:45](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/perceptrons-a-better-model-of-a-neuron?u=76281980&t=105)** Here you will see a list of your existing code spaces.
>
> **[1:49](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/perceptrons-a-better-model-of-a-neuron?u=76281980&t=109)** You may start a code space by clicking on its name to continue where you left off.
>
> **[1:54](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/perceptrons-a-better-model-of-a-neuron?u=76281980&t=114)** If this is your first code space in this repository, you can create it by pressing the create code space on main button.
>
> **[2:02](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/perceptrons-a-better-model-of-a-neuron?u=76281980&t=122)** Let's do that.
>
> **[2:07](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/perceptrons-a-better-model-of-a-neuron?u=76281980&t=127)** This will open a tab to set up your new code space.
>
> **[2:11](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/perceptrons-a-better-model-of-a-neuron?u=76281980&t=131)** Setting up a code space may take a while but only the first time.
>
> **[2:15](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/perceptrons-a-better-model-of-a-neuron?u=76281980&t=135)** Reopening an existing code space is much faster.
>
> **[2:21](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/perceptrons-a-better-model-of-a-neuron?u=76281980&t=141)** After booting up, you will see the web version of Visual Studio Code with access to the repository.
>
> **[2:28](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/perceptrons-a-better-model-of-a-neuron?u=76281980&t=148)** As you can see in the explorer pane at the left, there is no source folder.
>
> **[2:34](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/perceptrons-a-better-model-of-a-neuron?u=76281980&t=154)** That's because we are in the main branch, which has no code.
>
> **[2:39](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/perceptrons-a-better-model-of-a-neuron?u=76281980&t=159)** This is a multi-branch repository.
>
> **[2:41](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/perceptrons-a-better-model-of-a-neuron?u=76281980&t=161)** So to access the exercise files for a specific video, you must switch to its corresponding branch.
>
> **[2:48](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/perceptrons-a-better-model-of-a-neuron?u=76281980&t=168)** You can do that by clicking on the branch symbol at the bottom.
>
> **[2:52](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/perceptrons-a-better-model-of-a-neuron?u=76281980&t=172)** Notice that it reads main.
>
> **[2:57](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/perceptrons-a-better-model-of-a-neuron?u=76281980&t=177)** When you click on it, you will see a dropdown menu where you can select a branch.
>
> **[3:03](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/perceptrons-a-better-model-of-a-neuron?u=76281980&t=183)** The branches in this list are named with the chapter number followed by the video number.
>
> **[3:09](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/perceptrons-a-better-model-of-a-neuron?u=76281980&t=189)** This is the fourth video in chapter two so its branch name must be 0204.
>
> **[3:16](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/perceptrons-a-better-model-of-a-neuron?u=76281980&t=196)** Now, some branches are provided in the state shown at the beginning of a video, as well as at the end of it.
>
> **[3:23](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/perceptrons-a-better-model-of-a-neuron?u=76281980&t=203)** These have a letter B or an E at the end of the branch name.
>
> **[3:28](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/perceptrons-a-better-model-of-a-neuron?u=76281980&t=208)** So for this exercise, I will pick branch 0204B, as in beginning.
>
> **[3:35](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/perceptrons-a-better-model-of-a-neuron?u=76281980&t=215)** Look at the folders at the left.
>
> **[3:37](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/perceptrons-a-better-model-of-a-neuron?u=76281980&t=217)** Now we have a source folder.
>
> **[3:40](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/perceptrons-a-better-model-of-a-neuron?u=76281980&t=220)** Let me expand it and open the mlp.py source file.
>
> **[3:48](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/perceptrons-a-better-model-of-a-neuron?u=76281980&t=228)** Now let me get the bottom and left panes out of the way.
>
> **[3:52](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/perceptrons-a-better-model-of-a-neuron?u=76281980&t=232)** So here we have the first part of our perception class.
>
> **[3:56](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/perceptrons-a-better-model-of-a-neuron?u=76281980&t=236)** First, we have the header for the constructor in line nine to create a new preceptor and object with a specified number of inputs and a bias term, which will be one by default.
>
> **[4:09](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/perceptrons-a-better-model-of-a-neuron?u=76281980&t=249)** The only member data we need for this class are the weights and the bias term.
>
> **[4:14](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/perceptrons-a-better-model-of-a-neuron?u=76281980&t=254)** So let me initialize the weights as a random array of floating point numbers between minus one and plus one.
>
> **[4:21](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/perceptrons-a-better-model-of-a-neuron?u=76281980&t=261)** This random initial state will be important for the training phase.
>
> **[4:30](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/perceptrons-a-better-model-of-a-neuron?u=76281980&t=270)** I decided to use NumPy arrays here.
>
> **[4:32](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/perceptrons-a-better-model-of-a-neuron?u=76281980&t=272)** That's why I imported NumPy as NP at the top.
>
> **[4:36](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/perceptrons-a-better-model-of-a-neuron?u=76281980&t=276)** So I'll do this with the random function in NumPy.
>
> **[4:42](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/perceptrons-a-better-model-of-a-neuron?u=76281980&t=282)** Now, the size of the array must be the number of inputs plus one because of the bias input.
>
> **[4:49](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/perceptrons-a-better-model-of-a-neuron?u=76281980&t=289)** Now, this random function returns values from zero to one.
>
> **[4:53](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/perceptrons-a-better-model-of-a-neuron?u=76281980&t=293)** So let me add a scaling factor of two and a shift of minus one.
>
> **[5:03](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/perceptrons-a-better-model-of-a-neuron?u=76281980&t=303)** That'll do it.
>
> **[5:04](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/perceptrons-a-better-model-of-a-neuron?u=76281980&t=304)** And finally, let me save the bias term for later.
>
> **[5:12](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/perceptrons-a-better-model-of-a-neuron?u=76281980&t=312)** Now, let's go to line 14 to write the run function which feeds an input array X into the perception to return the activation function's output.
>
> **[5:24](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/perceptrons-a-better-model-of-a-neuron?u=76281980&t=324)** This is a one-liner, but I'll write it in two lines.
>
> **[5:27](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/perceptrons-a-better-model-of-a-neuron?u=76281980&t=327)** First, let's calculate the weighted sum with NumPy's dot product between the input and the weights.
>
> **[5:35](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/perceptrons-a-better-model-of-a-neuron?u=76281980&t=335)** Notice that I'm inserting the bias at the end of the X array because I'll use it as the last input.
>
> **[5:43](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/perceptrons-a-better-model-of-a-neuron?u=76281980&t=343)** And finally, let's plug the sum into the activation function and return that.

> [!info]- Semantic Content
>
> **Code Keywords:** let (11), function (8), finally, (3), case, (1), continue (1)
> **UI Navigation:** go to (2), switch to (1), click on (1), dropdown (1), open the (1)
> **Tools:** visual studio (2), github (1)
> **Versions:** 0.5 (2)
> **Definitions:** is a  (2)
> **Prerequisites:** set up (2)
> **File Paths:** mlp.py (1)
> **Exercise Files:** exercise files (1)

#### Challenge: Finish the perceptron
> [LinkedIn Learning](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-finish-the-perceptron?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-finish-the-perceptron?u=76281980&t=0)** - Ready for your first challenge?
>
> **[0:09](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-finish-the-perceptron?u=76281980&t=9)** Let's finish up the Perceptron class.
>
> **[0:12](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-finish-the-perceptron?u=76281980&t=12)** First, in order to test the class, we'll need to be able to set the weights of specific values.
>
> **[0:18](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-finish-the-perceptron?u=76281980&t=18)** So we need a method for that, and you can find it in line 21.
>
> **[0:23](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-finish-the-perceptron?u=76281980&t=23)** Just replace the pass statement in line 23, and also, remember we'll use a sigmoid as the activation function.
>
> **[0:31](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-finish-the-perceptron?u=76281980&t=31)** So that's the second thing you'll have to write, starting at line 25.
>
> **[0:36](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-finish-the-perceptron?u=76281980&t=36)** Again, do this by replacing the pass statement in line 27.
>
> **[0:41](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-finish-the-perceptron?u=76281980&t=41)** So once again, your task is to write two class methods.
>
> **[0:46](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-finish-the-perceptron?u=76281980&t=46)** The sigmoid activation function, and a separate method to write values to the weights.
>
> **[0:53](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-finish-the-perceptron?u=76281980&t=53)** For the argument, receive a regular Python list of floating point numbers.
>
> **[0:58](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-finish-the-perceptron?u=76281980&t=58)** You may or may not validate that the length of this list matches the number of inputs in the neuron, including the bias.
>
> **[1:06](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-finish-the-perceptron?u=76281980&t=66)** This is not crucial because we'll use it for simple tests.
>
> **[1:10](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-finish-the-perceptron?u=76281980&t=70)** This should take you about 15 minutes.
>
> **[1:13](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-finish-the-perceptron?u=76281980&t=73)** When you are done, let me show you my solution in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), pass (2), function (2), class. (1), class, (1)
> **CLI Commands:** find (1), python (1)
> **Cross-References:** in the next (1)
> **Speakers:** - ready (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Finish the perceptron
> [LinkedIn Learning](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-finish-the-perceptron?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-finish-the-perceptron?u=76281980&t=0)** (pleasant electronic music)
>
> **[0:07](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-finish-the-perceptron?u=76281980&t=7)** - [Eduardo] Here we have my solution.
>
> **[0:08](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-finish-the-perceptron?u=76281980&t=8)** Both methods are one-liners.
>
> **[0:11](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-finish-the-perceptron?u=76281980&t=11)** First, let's look at the set_weights method starting at line 19.
>
> **[0:16](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-finish-the-perceptron?u=76281980&t=16)** As you can see in line 21, I'm simply assigning the NumPy array version of the argument to the class's weights.
>
> **[0:24](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-finish-the-perceptron?u=76281980&t=24)** Now let's see the sigmoid methods starting at line 23.
>
> **[0:28](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-finish-the-perceptron?u=76281980&t=28)** As you can see, the sigmoid is simply written as the definition we saw earlier, and I used the NumPy exponential function for this.
>
> **[0:36](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-finish-the-perceptron?u=76281980&t=36)** That's it, now we are ready to test our neuron, but first, let's give some meaning to our test.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), function (1), this. (1)
> **Code Identifiers:** set_weights (1)
> **Speakers:** - [eduardo] (1)
> **Non-Speech:** (pleasant electronic music) (1)

#### Logic gates
> [LinkedIn Learning](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/logic-gates?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/logic-gates?u=76281980&t=0)** - In their early days, neural networks were tested with simple functions to see if they were capable of performing the calculations they were designed to perform.
>
> **[0:10](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/logic-gates?u=76281980&t=10)** This led to implementing logic gates with perceptrons.
>
> **[0:14](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/logic-gates?u=76281980&t=14)** So let's take a look at a two input AND Gate, and its truth table, which summarizes its behavior.
>
> **[0:22](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/logic-gates?u=76281980&t=22)** Supposing zero means false and one means true, the gate outputs true only in the case where both inputs are true.
>
> **[0:31](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/logic-gates?u=76281980&t=31)** You may already be familiar with this, but let's look at it from a totally different angle, as a classification problem.
>
> **[0:39](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/logic-gates?u=76281980&t=39)** This plot shows four data points.
>
> **[0:42](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/logic-gates?u=76281980&t=42)** The coordinates of these data points are the values of inputs A and B.
>
> **[0:47](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/logic-gates?u=76281980&t=47)** Notice that the data points show their category as a zero or a one.
>
> **[0:53](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/logic-gates?u=76281980&t=53)** This way, a two input classifier may come up with a boundary that divides the categories.
>
> **[1:00](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/logic-gates?u=76281980&t=60)** So based on this, a perceptron may behave as an AND gate.
>
> **[1:05](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/logic-gates?u=76281980&t=65)** Let me show you how the classification is possible.
>
> **[1:09](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/logic-gates?u=76281980&t=69)** The boundary we are seeing in this 2D plot is technically the line where the sigmoid is 0.5.
>
> **[1:16](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/logic-gates?u=76281980&t=76)** Now, a 3D plot may help making this explanation better.
>
> **[1:22](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/logic-gates?u=76281980&t=82)** So let's add a third axis, now vertical to express the output of the sigmoid.
>
> **[1:27](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/logic-gates?u=76281980&t=87)** This will be the category that the perceptron has inferred.
>
> **[1:31](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/logic-gates?u=76281980&t=91)** So if we apply the sigmoid, all of the data points will be a part of the surface of the sigmoid, like objects lying on this uneven terrain.
>
> **[1:42](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/logic-gates?u=76281980&t=102)** So once again, the height of these subjects finally determines the category the perceptron assigns to them.
>
> **[1:49](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/logic-gates?u=76281980&t=109)** The decision plane will be located at the middle of the sigmoid.
>
> **[1:54](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/logic-gates?u=76281980&t=114)** So here is a valid implementation of a two input AND gate.
>
> **[1:59](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/logic-gates?u=76281980&t=119)** It's a two input perceptron with the following weights: 10 for both inputs and minus 15 for the bias.
>
> **[2:07](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/logic-gates?u=76281980&t=127)** I just came up with these weights by aiming to get a negative sum for a result of zero and a positive sum for one.
>
> **[2:16](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/logic-gates?u=76281980&t=136)** After testing it with my perceptron class, I got the values shown in this table.
>
> **[2:22](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/logic-gates?u=76281980&t=142)** Notice that I included a column for the weighted sum Z.
>
> **[2:27](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/logic-gates?u=76281980&t=147)** Those were the values I was aiming for with the weights I used.
>
> **[2:32](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/logic-gates?u=76281980&t=152)** So as you can see in the Y column, the top three values are very close to zero, so they may be safely rounded to zero, and the last value is almost one.
>
> **[2:45](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/logic-gates?u=76281980&t=165)** So here's how I tested the perceptron at the bottom of the code.
>
> **[2:49](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/logic-gates?u=76281980&t=169)** First, I created a perceptron with two inputs in line 29, and then I entered the weights as a list in line 30.
>
> **[2:58](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/logic-gates?u=76281980&t=178)** Notice the order of the weights, 10 and 10 for the inputs and minus 15 for the bias.
>
> **[3:04](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/logic-gates?u=76281980&t=184)** That's it.
>
> **[3:05](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/logic-gates?u=76281980&t=185)** In the rest of the code, I'm testing all four cases with the print function.
>
> **[3:11](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/logic-gates?u=76281980&t=191)** Let's see it working.
>
> **[3:13](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/logic-gates?u=76281980&t=193)** If you look at the terminal at the bottom, you'll see something very similar to the truth table of the AND gate.
>
> **[3:20](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/logic-gates?u=76281980&t=200)** Great.
>
> **[3:21](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/logic-gates?u=76281980&t=201)** So our perceptron can indeed operate as an AND gate.
>
> **[3:25](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/logic-gates?u=76281980&t=205)** Let's move on.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), this, (2), class, (1), function (1)
> **Versions:** 0.5 (1)
> **Tools:** terminal (1)
> **Definitions:** is a  (1)
> **Speakers:** - in (1)

#### Challenge: Logic gates with perceptrons
> [LinkedIn Learning](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-logic-gates-with-perceptrons?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-logic-gates-with-perceptrons?u=76281980&t=0)** (quirky music)
>
> **[0:05](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-logic-gates-with-perceptrons?u=76281980&t=5)** - [Instructor] Ready for your next challenge.
>
> **[0:08](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-logic-gates-with-perceptrons?u=76281980&t=8)** Your task is to make your perception behave as a 2 input OR Gate.
>
> **[0:13](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-logic-gates-with-perceptrons?u=76281980&t=13)** Here's the truth table for the OR Gate, and this is what the classification problem looks like.
>
> **[0:21](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-logic-gates-with-perceptrons?u=76281980&t=21)** So to be clear, what you need to do is come up with a combination of weight that will make the perception behave as an OR Gate.
>
> **[0:29](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-logic-gates-with-perceptrons?u=76281980&t=29)** It may help to fill out the Z column of this table first.
>
> **[0:34](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-logic-gates-with-perceptrons?u=76281980&t=34)** Remember, you want a negative sum whenever you want the output to be 0, and a positive sum for 1.
>
> **[0:42](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-logic-gates-with-perceptrons?u=76281980&t=42)** Go ahead and tweak the code to test your new OR Gate.
>
> **[0:46](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-logic-gates-with-perceptrons?u=76281980&t=46)** This shouldn't take you more than 15 minutes, especially because you may use the provided code which is a modification of the AND Gate code you just saw.
>
> **[0:55](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-logic-gates-with-perceptrons?u=76281980&t=55)** When you're done, watch the next video for my solution and comments.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Cross-References:** next video (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (quirky music) (1)

#### Solution: Logic gates with perceptrons
> [LinkedIn Learning](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-logic-gates-with-perceptrons?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-logic-gates-with-perceptrons?u=76281980&t=0)** - [Instructor] Here we have my solution in line 30.
>
> **[0:09](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-logic-gates-with-perceptrons?u=76281980&t=9)** The values I came up with, are 15 for both inputs and -10 for the bias.
>
> **[0:15](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-logic-gates-with-perceptrons?u=76281980&t=15)** This way, any input value of one will make the weighted sum positive.
>
> **[0:21](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-logic-gates-with-perceptrons?u=76281980&t=21)** Let's see it working.
>
> **[0:24](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-logic-gates-with-perceptrons?u=76281980&t=24)** Looking at the terminal at the bottom, we can see the OR behavior.
>
> **[0:28](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-logic-gates-with-perceptrons?u=76281980&t=28)** That is, for an input of zero zero, we get an output value very close to zero.
>
> **[0:34](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-logic-gates-with-perceptrons?u=76281980&t=34)** The rest of the input combinations yield an output greater than 0.99.
>
> **[0:40](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-logic-gates-with-perceptrons?u=76281980&t=40)** If you like this exercise, you may want to create the NAND and the NOR gate next.
>
> **[0:47](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-logic-gates-with-perceptrons?u=76281980&t=47)** Great! So our perceptron can operate as we ask with the weights we write into it.
>
> **[0:53](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-logic-gates-with-perceptrons?u=76281980&t=53)** Now we are ready to teach a behavior to our perception.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), yield (1)
> **Env Vars:** nand (1), nor (1)
> **CLI Commands:** make (1)
> **Versions:** 0.99 (1)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 3. Building Your Network

#### Linear separability
> [LinkedIn Learning](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/linear-separability?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/linear-separability?u=76281980&t=0)** - [Man] There's a reason why perceptrons work as classifiers.
>
> **[0:04](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/linear-separability?u=76281980&t=4)** Let me tell you what it is.
>
> **[0:06](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/linear-separability?u=76281980&t=6)** Looking back at the pass or fail example, this situation is suitable for a perceptron because it is linearly separable.
>
> **[0:14](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/linear-separability?u=76281980&t=14)** Simply put, linear separability is a property of a data set with two categories where a linear function can separate the categories.
>
> **[0:24](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/linear-separability?u=76281980&t=24)** This is a 2D plot and there is a straight line that separates the categories.
>
> **[0:29](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/linear-separability?u=76281980&t=29)** Therefore, this example is linearly separable and a perceptron can take care of it.
>
> **[0:35](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/linear-separability?u=76281980&t=35)** For more dimensions, a plane or hyperplane would separate the categories, but it's still a linear function.
>
> **[0:42](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/linear-separability?u=76281980&t=42)** Let's look at a pesky logic gate example.
>
> **[0:45](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/linear-separability?u=76281980&t=45)** The XOR gate outputs one when only one of its two inputs is one, but not both.
>
> **[0:52](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/linear-separability?u=76281980&t=52)** Look at the 2D plot.
>
> **[0:54](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/linear-separability?u=76281980&t=54)** I dare you to find one single straight line that divides the zeros and the ones.
>
> **[1:00](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/linear-separability?u=76281980&t=60)** Did you find it?
>
> **[1:01](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/linear-separability?u=76281980&t=61)** Of course not, because there is none.
>
> **[1:04](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/linear-separability?u=76281980&t=64)** The XOR problem is not linearly separable so it's impossible to solve it with a single perceptron.
>
> **[1:11](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/linear-separability?u=76281980&t=71)** See what I did there?
>
> **[1:12](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/linear-separability?u=76281980&t=72)** I chose my words carefully.
>
> **[1:14](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/linear-separability?u=76281980&t=74)** We cannot implement an XOR gate with one perceptron but we can implement it with three perceptrons.
>
> **[1:23](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/linear-separability?u=76281980&t=83)** Let me show you how.
>
> **[1:24](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/linear-separability?u=76281980&t=84)** Recall the OR gate.
>
> **[1:26](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/linear-separability?u=76281980&t=86)** This gate takes care of the first three XOR cases in the truth table.
>
> **[1:31](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/linear-separability?u=76281980&t=91)** Look at the 2D plot of the XOR gate.
>
> **[1:35](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/linear-separability?u=76281980&t=95)** If we used an OR gate, we would get all but one of the points correctly classified.
>
> **[1:40](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/linear-separability?u=76281980&t=100)** The top right point should be zero, but the OR gate would classify it as one.
>
> **[1:46](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/linear-separability?u=76281980&t=106)** What about a NAND gate?
>
> **[1:49](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/linear-separability?u=76281980&t=109)** This one gets the last three XOR cases right.
>
> **[1:53](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/linear-separability?u=76281980&t=113)** If we used a NAND gate to classify the XOR cases, we would misclassify the bottom left point.
>
> **[2:01](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/linear-separability?u=76281980&t=121)** See where I'm going?
>
> **[2:02](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/linear-separability?u=76281980&t=122)** If we could somehow combine the OR gate with the NAND gate, we would get an XOR.
>
> **[2:11](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/linear-separability?u=76281980&t=131)** Well, almost.
>
> **[2:12](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/linear-separability?u=76281980&t=132)** We still need some simple logic.
>
> **[2:15](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/linear-separability?u=76281980&t=135)** Look at the overlap between the 2D plots.
>
> **[2:19](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/linear-separability?u=76281980&t=139)** We want to classify as one, only the points that get classified as one by both gates, so the AND gate would do the trick.
>
> **[2:28](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/linear-separability?u=76281980&t=148)** This isn't anything new though.
>
> **[2:30](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/linear-separability?u=76281980&t=150)** This is a well known implementation of the XOR gate: a composition of an OR, a NAND, and an AND gate.
>
> **[2:40](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/linear-separability?u=76281980&t=160)** Here's the schematic of such composition.
>
> **[2:43](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/linear-separability?u=76281980&t=163)** So this looks like a plan.
>
> **[2:44](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/linear-separability?u=76281980&t=164)** Let's create a network of three perceptrons.
>
> **[2:48](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/linear-separability?u=76281980&t=168)** We've already figured out the weights for the AND and OR gates.
>
> **[2:52](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/linear-separability?u=76281980&t=172)** All that's left is the NAND gate.
>
> **[2:55](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/linear-separability?u=76281980&t=175)** So let me show you our first neural network to create this logic circuit.
>
> **[3:00](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/linear-separability?u=76281980&t=180)** Here's our NAND gate.
>
> **[3:02](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/linear-separability?u=76281980&t=182)** You may want to pause the video and look at the weights to verify that it indeed behaves as a NAND gate.
>
> **[3:09](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/linear-separability?u=76281980&t=189)** Here is the OR gate you already designed.
>
> **[3:12](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/linear-separability?u=76281980&t=192)** And, finally, we plug the outputs into our AND gate.
>
> **[3:16](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/linear-separability?u=76281980&t=196)** Notice that the bias is always one, and that's a very common practice to tie all the bias inputs to a constant value of one and only deal with the bias weights.

> [!info]- Semantic Content
>
> **Env Vars:** xor (9), nand (7)
> **Code Keywords:** let (5), function (2), pass (1), finally, (1)
> **Definitions:** is a  (4)
> **CLI Commands:** find (2)
> **Speakers:** - [man] (1)

#### Writing the multilayer perceptron class
> [LinkedIn Learning](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/writing-the-multilayer-perceptron-class?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/writing-the-multilayer-perceptron-class?u=76281980&t=0)** - [Instructor] So it turns out that the network we just described is a multilayer perceptron.
>
> **[0:06](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/writing-the-multilayer-perceptron-class?u=76281980&t=6)** Think about it.
>
> **[0:07](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/writing-the-multilayer-perceptron-class?u=76281980&t=7)** It's made of perceptrons, they are interconnected in a feed forward fashion, and they are organized in layers.
>
> **[0:16](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/writing-the-multilayer-perceptron-class?u=76281980&t=16)** This is the input layer.
>
> **[0:18](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/writing-the-multilayer-perceptron-class?u=76281980&t=18)** Remember, no neurons, just the inputs.
>
> **[0:21](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/writing-the-multilayer-perceptron-class?u=76281980&t=21)** This is the hidden layer with two neurons and this is the output layer with just one neuron.
>
> **[0:29](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/writing-the-multilayer-perceptron-class?u=76281980&t=29)** So it's time to start writing code again.
>
> **[0:33](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/writing-the-multilayer-perceptron-class?u=76281980&t=33)** So here's our first implementation of the MultiLayerPerceptron class.
>
> **[0:37](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/writing-the-multilayer-perceptron-class?u=76281980&t=37)** I'll write the constructor and you'll write the rest.
>
> **[0:41](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/writing-the-multilayer-perceptron-class?u=76281980&t=41)** In the constructor, starting at line 36, I'm receiving a parameter called layers, which is a Python list of integers, which represent the number of neurons per layer.
>
> **[0:53](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/writing-the-multilayer-perceptron-class?u=76281980&t=53)** This includes the input layer, which has no neurons but here we mean the number of inputs.
>
> **[1:00](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/writing-the-multilayer-perceptron-class?u=76281980&t=60)** The other parameter is the bias with a default value of one.
>
> **[1:04](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/writing-the-multilayer-perceptron-class?u=76281980&t=64)** Now let me show you the data members of the class, starting at line 38.
>
> **[1:09](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/writing-the-multilayer-perceptron-class?u=76281980&t=69)** The layers list becomes the layers NumPy array with exactly the same data as the parameter.
>
> **[1:16](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/writing-the-multilayer-perceptron-class?u=76281980&t=76)** The bias is also a member.
>
> **[1:18](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/writing-the-multilayer-perceptron-class?u=76281980&t=78)** Now in line 40, we have the actual network.
>
> **[1:21](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/writing-the-multilayer-perceptron-class?u=76281980&t=81)** It will be a NumPy array of NumPy arrays at the end but for the moment, I'll use a list of lists, mostly because I'll create arrays of arrays of different sizes.
>
> **[1:33](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/writing-the-multilayer-perceptron-class?u=76281980&t=93)** And lastly, we'll need another array with the same dimensions as the network to hold the output values of the neurons.
>
> **[1:41](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/writing-the-multilayer-perceptron-class?u=76281980&t=101)** This will be useful for propagating the results through the network.
>
> **[1:47](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/writing-the-multilayer-perceptron-class?u=76281980&t=107)** The next part is where I'll write some code.
>
> **[1:50](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/writing-the-multilayer-perceptron-class?u=76281980&t=110)** It consists of two nested loops to create the neurons layer by layer.
>
> **[1:55](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/writing-the-multilayer-perceptron-class?u=76281980&t=115)** The outer loop iterates on i for each layer.
>
> **[2:01](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/writing-the-multilayer-perceptron-class?u=76281980&t=121)** So for each layer, we need to have a list of values and a list of neurons.
>
> **[2:10](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/writing-the-multilayer-perceptron-class?u=76281980&t=130)** The new list of values will be filled with zeros for every neuron in the layer.
>
> **[2:18](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/writing-the-multilayer-perceptron-class?u=76281980&t=138)** Now the inner loop iterates on J for each neuron in the layer but we'll leave the first layer empty because it has no neurons.
>
> **[2:30](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/writing-the-multilayer-perceptron-class?u=76281980&t=150)** So for every neuron, I'll create a perceptron with as many inputs as the neurons in the previous layer.
>
> **[2:37](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/writing-the-multilayer-perceptron-class?u=76281980&t=157)** Not counting the bias input here.
>
> **[2:40](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/writing-the-multilayer-perceptron-class?u=76281980&t=160)** And I also pass the bias value to the perceptron.
>
> **[2:50](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/writing-the-multilayer-perceptron-class?u=76281980&t=170)** And the last two lines turn our newly created lists into NumPy arrays.

> [!info]- Semantic Content
>
> **Code Keywords:** class. (1), let (1), class, (1), pass (1)
> **Definitions:** is a  (2)
> **CLI Commands:** python (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Finish the multilayer perceptron class
> [LinkedIn Learning](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-finish-the-multilayer-perceptron-class?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-finish-the-multilayer-perceptron-class?u=76281980&t=0)** (bright electronic music)
>
> **[0:07](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-finish-the-multilayer-perceptron-class?u=76281980&t=7)** - [Presenter] Are you ready for your next challenge?
>
> **[0:09](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-finish-the-multilayer-perceptron-class?u=76281980&t=9)** Now you must write two methods so we can test our multilayer perceptron.
>
> **[0:14](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-finish-the-multilayer-perceptron-class?u=76281980&t=14)** First, we have the set-weights method in line 56.
>
> **[0:18](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-finish-the-multilayer-perceptron-class?u=76281980&t=18)** For the W-init argument, you may use the organization you want, but I suggest that you make it capable of initializing a network of any size.
>
> **[0:28](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-finish-the-multilayer-perceptron-class?u=76281980&t=28)** Don't forget the bias weights.
>
> **[0:30](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-finish-the-multilayer-perceptron-class?u=76281980&t=30)** Also notice that I have written a printWeights method starting at line 61.
>
> **[0:36](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-finish-the-multilayer-perceptron-class?u=76281980&t=36)** This is for you to check if your neural network received the weights correctly, and to see the weights when you have trained it later in the course.
>
> **[0:45](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-finish-the-multilayer-perceptron-class?u=76281980&t=45)** And lastly, we have the run method starting at line 68, which feeds a sample to the network and returns a NumPy array with the output values.
>
> **[0:55](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-finish-the-multilayer-perceptron-class?u=76281980&t=55)** Let me tell you what to return, just to be clear.
>
> **[0:59](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-finish-the-multilayer-perceptron-class?u=76281980&t=59)** We simply return the last element in the values array, which is a NumPy array containing exactly the output layered values.
>
> **[1:08](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-finish-the-multilayer-perceptron-class?u=76281980&t=68)** So to recap, you must write the method to write values to the weights, and the run method to produce an output.
>
> **[1:16](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-finish-the-multilayer-perceptron-class?u=76281980&t=76)** You can test your neural network with the weights we just saw to make it behave as an XOR gate.
>
> **[1:22](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-finish-the-multilayer-perceptron-class?u=76281980&t=82)** This shouldn't take you more than 15 minutes, so have fun coding and come back to look at my solution.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Code Keywords:** let (1), return, (1)
> **Code Identifiers:** printweights (1)
> **Env Vars:** xor (1)
> **Cross-References:** later in (1)
> **Definitions:** is a  (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - [presenter] (1)

#### Solution: Finish the multilayer perceptron class
> [LinkedIn Learning](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-finish-the-multilayer-perceptron-class?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-finish-the-multilayer-perceptron-class?u=76281980&t=0)** (bright upbeat music)
>
> **[0:07](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-finish-the-multilayer-perceptron-class?u=76281980&t=7)** - [Presenter] Here's my solution.
>
> **[0:08](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-finish-the-multilayer-perceptron-class?u=76281980&t=8)** For the set-weights method starting at line 54, I'm implementing W-init as a list of lists of lists.
>
> **[0:16](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-finish-the-multilayer-perceptron-class?u=76281980&t=16)** That's three dimensions and that's because I'm specifying the layer, the neuron, and the input associated to each weight.
>
> **[0:25](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-finish-the-multilayer-perceptron-class?u=76281980&t=25)** However, W-init will have one less entry in the first dimension because I'm not specifying anything for the input layer as it has no neurons.
>
> **[0:36](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-finish-the-multilayer-perceptron-class?u=76281980&t=36)** So I implemented two nested loops starting at line 57.
>
> **[0:41](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-finish-the-multilayer-perceptron-class?u=76281980&t=41)** The outer loop iterates I through the layers in the network, and the inner loop iterates J through the neurons in each layer.
>
> **[0:50](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-finish-the-multilayer-perceptron-class?u=76281980&t=50)** Now, inside the inner loop, I'm using the set-weights method for each neuron.
>
> **[0:56](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-finish-the-multilayer-perceptron-class?u=76281980&t=56)** Notice that since W-init doesn't have anything for the input layer, I am indexing the network array at I-plus-one.
>
> **[1:05](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-finish-the-multilayer-perceptron-class?u=76281980&t=65)** Now let's look at the run method starting at line 68.
>
> **[1:10](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-finish-the-multilayer-perceptron-class?u=76281980&t=70)** So here, the first thing I do is turning X into a NumPy array.
>
> **[1:15](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-finish-the-multilayer-perceptron-class?u=76281980&t=75)** Then, I copy X into the first layer of the values array.
>
> **[1:20](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-finish-the-multilayer-perceptron-class?u=76281980&t=80)** Now it's time to run a two-level nested loop for every layer in ascending order, and every neuron in each layer.
>
> **[1:28](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-finish-the-multilayer-perceptron-class?u=76281980&t=88)** The body of the loop is simply running the current neuron by feeding it the values in the previous layer.
>
> **[1:35](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-finish-the-multilayer-perceptron-class?u=76281980&t=95)** That's it.
>
> **[1:36](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-finish-the-multilayer-perceptron-class?u=76281980&t=96)** Now we are ready to run a test on the whole thing starting at line 79.
>
> **[1:42](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-finish-the-multilayer-perceptron-class?u=76281980&t=102)** So first, we create a multilayer perceptron with the dimensions of the XOR gate design.
>
> **[1:49](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-finish-the-multilayer-perceptron-class?u=76281980&t=109)** Next, I'm assigning the required weights.
>
> **[1:52](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-finish-the-multilayer-perceptron-class?u=76281980&t=112)** These are the weights we just saw.
>
> **[1:54](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-finish-the-multilayer-perceptron-class?u=76281980&t=114)** Next, I'm printing the weights, just as a sanity check.
>
> **[1:59](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-finish-the-multilayer-perceptron-class?u=76281980&t=119)** And finally, we have four print lines to test our network.
>
> **[2:03](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-finish-the-multilayer-perceptron-class?u=76281980&t=123)** So let's run it.
>
> **[2:06](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-finish-the-multilayer-perceptron-class?u=76281980&t=126)** And here's the result in the terminal at the bottom.
>
> **[2:09](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-finish-the-multilayer-perceptron-class?u=76281980&t=129)** As you can see, it has indeed taken the weights we wrote and it's behaving as an XOR gate.
>
> **[2:17](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-finish-the-multilayer-perceptron-class?u=76281980&t=137)** Give yourself a pat on the back.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), finally, (1)
> **Env Vars:** xor (2)
> **Tools:** terminal (1)
> **Speakers:** - [presenter] (1)
> **Non-Speech:** (bright upbeat music) (1)


### 4. Training Your Network

#### The need for training
> [LinkedIn Learning](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-need-for-training?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-need-for-training?u=76281980&t=0)** - [Instructor] This is one of the most important moments in this course.
>
> **[0:04](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-need-for-training?u=76281980&t=4)** It's time to talk about the need for training.
>
> **[0:07](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-need-for-training?u=76281980&t=7)** So let's look back and reflect on the following points.
>
> **[0:10](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-need-for-training?u=76281980&t=10)** Throughout the coding exercises of this course, we haven't seen a useful neural network yet.
>
> **[0:17](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-need-for-training?u=76281980&t=17)** True, we have seen networks that behave like gates and they may be useful.
>
> **[0:22](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-need-for-training?u=76281980&t=22)** But there are much better hard-coded alternatives to perceptrons when it comes to implementing a NAND or an XOR.
>
> **[0:29](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-need-for-training?u=76281980&t=29)** For example, we could simply use the logic embedded in programming languages to get away with logic.
>
> **[0:35](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-need-for-training?u=76281980&t=35)** Well, it turns out that the real value of neural networks lie in their ability to learn.
>
> **[0:42](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-need-for-training?u=76281980&t=42)** Sure, we just got a multilayer perceptron to behave as an XOR gate by writing the exact weights it needed.
>
> **[0:49](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-need-for-training?u=76281980&t=49)** But what if we could show the neural network a lot of examples of how an XOR behaves so that it can learn from those examples?
>
> **[0:59](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-need-for-training?u=76281980&t=59)** Wouldn't that be something.
>
> **[1:00](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-need-for-training?u=76281980&t=60)** So I have good news.
>
> **[1:02](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-need-for-training?u=76281980&t=62)** Up ahead, we'll see an algorithm to train multilayer perceptrons known as the back propagation algorithm.
>
> **[1:09](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-need-for-training?u=76281980&t=69)** So sit tight and pay attention.
>
> **[1:12](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-need-for-training?u=76281980&t=72)** But wait, there's another reason to train a neural network.
>
> **[1:16](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-need-for-training?u=76281980&t=76)** Remember, linear separability?
>
> **[1:18](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-need-for-training?u=76281980&t=78)** Well, I have bad news.
>
> **[1:20](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-need-for-training?u=76281980&t=80)** Linear separability is hardly a given.
>
> **[1:24](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-need-for-training?u=76281980&t=84)** Consider this example of classifying things as small or large based on their length and width.
>
> **[1:31](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-need-for-training?u=76281980&t=91)** Let's say that small is represented by triangles and large is represented by dots.
>
> **[1:37](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-need-for-training?u=76281980&t=97)** Moreover, notice that this is not linearly separable.
>
> **[1:41](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-need-for-training?u=76281980&t=101)** There is no straight line that will divide the two categories but that doesn't mean that a single perceptron won't do a good job at classifying these samples.
>
> **[1:52](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-need-for-training?u=76281980&t=112)** Take this line, for example.
>
> **[1:54](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-need-for-training?u=76281980&t=114)** Notice that it will misclassify one dot and two triangles, which doesn't seem so bad.
>
> **[2:00](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-need-for-training?u=76281980&t=120)** And even if we used a multilayer perceptron, we will get a nonlinear boundary like this one, which does a better job misclassifying only one triangle.
>
> **[2:11](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-need-for-training?u=76281980&t=131)** It's better but it's not perfect.
>
> **[2:14](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-need-for-training?u=76281980&t=134)** And that's the whole point of training.
>
> **[2:16](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-need-for-training?u=76281980&t=136)** We are looking for a model that will get most of the samples correctly classified because we don't know so much about the problem and we are basing our judgment on the samples we have seen.
>
> **[2:28](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-need-for-training?u=76281980&t=148)** This brings me to the problem of generalizing.
>
> **[2:31](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-need-for-training?u=76281980&t=151)** This neural network may work very well for the provided data points but it still has to prove useful for new data it hasn't seen before.
>
> **[2:40](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-need-for-training?u=76281980&t=160)** So let me tell you about three situations in the spectrum of misclassifying and generalizing.
>
> **[2:47](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-need-for-training?u=76281980&t=167)** Here we have a different dataset for the same problem we just saw.
>
> **[2:51](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-need-for-training?u=76281980&t=171)** I'm showing the same plot three times because I want you to compare these three situations for a classifier.
>
> **[2:59](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-need-for-training?u=76281980&t=179)** So look at the leftmost plot and suppose we use a single perceptron with a straight line as boundary.
>
> **[3:06](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-need-for-training?u=76281980&t=186)** As you can see, this one misclassifies two dots and five triangles.
>
> **[3:11](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-need-for-training?u=76281980&t=191)** This situation is known as underfitting where the network misclassifies too often, so it's not very accurate.
>
> **[3:20](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-need-for-training?u=76281980&t=200)** So we don't want this. This is bad.
>
> **[3:22](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-need-for-training?u=76281980&t=202)** Now, look at the middle plot.
>
> **[3:24](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-need-for-training?u=76281980&t=204)** Suppose we use a multilayer perceptron that ends up using an arc as a boundary.
>
> **[3:30](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-need-for-training?u=76281980&t=210)** Notice that the misclassification has dropped to one dot and two triangles.
>
> **[3:35](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-need-for-training?u=76281980&t=215)** Now, these numbers aren't as important as the visible shape of the trend between the categories.
>
> **[3:42](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-need-for-training?u=76281980&t=222)** When we train a neural network, we are aiming for a boundary that works just right.
>
> **[3:47](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-need-for-training?u=76281980&t=227)** That is it rarely misclassifies and it generalizes well.
>
> **[3:52](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-need-for-training?u=76281980&t=232)** If we feed new unseen samples to this network, chances are it will get it right most of the time.
>
> **[3:59](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-need-for-training?u=76281980&t=239)** Now look at the rightmost plot.
>
> **[4:01](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-need-for-training?u=76281980&t=241)** Suppose we exhaustively train a very complex neural network so that it always gets it right with perfectly accurate boundary.
>
> **[4:11](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-need-for-training?u=76281980&t=251)** Notice that it seems wrong to get every outlier correctly classified.
>
> **[4:15](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-need-for-training?u=76281980&t=255)** It seems wrong because it is wrong.
>
> **[4:18](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-need-for-training?u=76281980&t=258)** This situation is known as overfitting and you may have guessed that an overfitting neural network is bad at generalizing.
>
> **[4:27](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-need-for-training?u=76281980&t=267)** If we feed new unseen data to this classifier, it will probably fail often for data points near the boundary.
>
> **[4:35](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-need-for-training?u=76281980&t=275)** In the real world, outliers are inevitable and we don't need to sacrifice the accuracy of our classifier just to classify known data.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), this. (1)
> **Env Vars:** xor (3), nand (1)
> **Definitions:** known as (2)
> **Analogies:** for example (2)
> **Speakers:** - [instructor] (1)

#### The training process
> [LinkedIn Learning](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-training-process?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-training-process?u=76281980&t=0)** - [Instructor] When training your neural network, there's a usual top-level procedure I'll briefly describe to you.
>
> **[0:07](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-training-process?u=76281980&t=7)** But first, let me tell you what a dataset is.
>
> **[0:10](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-training-process?u=76281980&t=10)** First of all, a dataset is a collection of samples that contain features and labels.
>
> **[0:16](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-training-process?u=76281980&t=16)** We usually represent features with X and labels with Y.
>
> **[0:20](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-training-process?u=76281980&t=20)** The input signals for the network are known as features because what you usually feed a neural network are features of a data point, which can be represented as numbers.
>
> **[0:31](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-training-process?u=76281980&t=31)** For example, length, height, price, salary, number of rooms in a house, large sugar level, and so on.
>
> **[0:39](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-training-process?u=76281980&t=39)** The labels, on the other hand, are the known category attached to each sample.
>
> **[0:45](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-training-process?u=76281980&t=45)** This is how we teach the network.
>
> **[0:47](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-training-process?u=76281980&t=47)** We show the samples to it.
>
> **[0:49](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-training-process?u=76281980&t=49)** And finally, the network is able to learn with each feature label pair.
>
> **[0:54](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-training-process?u=76281980&t=54)** So here's the usual training process.
>
> **[0:57](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-training-process?u=76281980&t=57)** You typically want to use three datasets: a training set, a validation set, and a testing set.
>
> **[1:05](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-training-process?u=76281980&t=65)** The training set is used to train the network so that it learns all it's supposed to learn.
>
> **[1:11](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-training-process?u=76281980&t=71)** This is important so I'll say it again with different words.
>
> **[1:15](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-training-process?u=76281980&t=75)** This is the only dataset that will be used with the training algorithm.
>
> **[1:19](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-training-process?u=76281980&t=79)** The other two are used for two rounds of assessments.
>
> **[1:23](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-training-process?u=76281980&t=83)** So we run the training set with the training algorithm.
>
> **[1:27](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-training-process?u=76281980&t=87)** Another important detail is that we have to run the training set lots of times.
>
> **[1:32](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-training-process?u=76281980&t=92)** Each time we run the training set with the learning algorithm, it's known as a training epoch.
>
> **[1:38](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-training-process?u=76281980&t=98)** Well, the training process usually involves hundreds or thousands of training epochs.
>
> **[1:44](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-training-process?u=76281980&t=104)** We stop after some number of epochs or until some error metric drops under a desired value.
>
> **[1:51](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-training-process?u=76281980&t=111)** We'll talk about this error metric in a bit.
>
> **[1:54](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-training-process?u=76281980&t=114)** After that, the neural network will have learned something from the samples.
>
> **[1:59](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-training-process?u=76281980&t=119)** The validation set is used to assess how well our neural network has learned as compared to other competitors.
>
> **[2:07](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-training-process?u=76281980&t=127)** There's nothing we intend to do to improve the learning.
>
> **[2:10](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-training-process?u=76281980&t=130)** Actually, what's usually done here is that we prepare several classifiers, say two support vector machines and three neural networks.
>
> **[2:21](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-training-process?u=76281980&t=141)** We may tweak our network, you know?
>
> **[2:23](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-training-process?u=76281980&t=143)** We could use one with one hidden layer and another with three hidden layers.
>
> **[2:29](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-training-process?u=76281980&t=149)** We may also vary the number of neurons per layer and we may use different activation functions, for example.
>
> **[2:36](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-training-process?u=76281980&t=156)** So we train all of the competing classifiers.
>
> **[2:40](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-training-process?u=76281980&t=160)** And then we feed the validation set to all classifiers.
>
> **[2:45](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-training-process?u=76281980&t=165)** This time, we only run the dataset.
>
> **[2:47](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-training-process?u=76281980&t=167)** We don't train the classifiers.
>
> **[2:49](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-training-process?u=76281980&t=169)** The validation set will allow us to rank our classifiers and choose the one that shows the best performance for us.
>
> **[2:56](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-training-process?u=76281980&t=176)** Let's say that's our neural network A.
>
> **[3:00](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-training-process?u=76281980&t=180)** Lastly, the testing set is used for evaluating the finally chosen model, just to make sure it's being able to classify data it hasn't seen before.
>
> **[3:11](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-training-process?u=76281980&t=191)** Okay, so what happens when we run one single training sample?
>
> **[3:15](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-training-process?u=76281980&t=195)** This is important for us to write our training code.
>
> **[3:19](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-training-process?u=76281980&t=199)** So first, we feed an input sample X to the network.
>
> **[3:23](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-training-process?u=76281980&t=203)** Then we compare the output to the correct value Y.
>
> **[3:27](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-training-process?u=76281980&t=207)** With this output and the expected correct value, we may calculate the error.
>
> **[3:32](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-training-process?u=76281980&t=212)** And we can use this error to adjust the weights in the network.
>
> **[3:37](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-training-process?u=76281980&t=217)** And we do that to classify that sample a little better in the future without messing up our response to other samples the network learned earlier.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), finally, (1)
> **Definitions:** known as (2), is a  (1)
> **Analogies:** for example (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### The error function
> [LinkedIn Learning](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-error-function?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-error-function?u=76281980&t=0)** - [Instructor] Earlier I mentioned the error of a neural network output.
>
> **[0:04](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-error-function?u=76281980&t=4)** So let me tell you what I meant by that.
>
> **[0:06](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-error-function?u=76281980&t=6)** An error function measures how bad a classifier is doing.
>
> **[0:11](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-error-function?u=76281980&t=11)** So a large value is bad and a small value is good.
>
> **[0:14](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-error-function?u=76281980&t=14)** This function is essential in the training process.
>
> **[0:18](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-error-function?u=76281980&t=18)** So up ahead we'll learn about a training process called gradient dissent.
>
> **[0:23](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-error-function?u=76281980&t=23)** Throughout the algorithm, we'll calculate two types of error metrics, one for the output of a neuron and one for the whole network.
>
> **[0:32](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-error-function?u=76281980&t=32)** So the first metric is not formally known as the error because it's just the measure of how far off a neuron is from the expected value dictated by the label in the dataset.
>
> **[0:44](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-error-function?u=76281980&t=44)** It's simply a subtraction.
>
> **[0:47](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-error-function?u=76281980&t=47)** Let me show you.
>
> **[0:48](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-error-function?u=76281980&t=48)** Suppose we enter a sample {x, Y} to a neural network which for now will be a single layer perception.
>
> **[0:55](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-error-function?u=76281980&t=55)** Now suppose that the output of this one output network is 0.6, and let's say that the label for that input sample is y equals one.
>
> **[1:05](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-error-function?u=76281980&t=65)** This way, the error or deviation can be calculated as the subtraction Y minus out.
>
> **[1:13](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-error-function?u=76281980&t=73)** Again, this output error is just a step in the calculations but it will show up quite often.
>
> **[1:19](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-error-function?u=76281980&t=79)** So the point is that the training function must somehow contribute to getting out closer to why over time.
>
> **[1:27](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-error-function?u=76281980&t=87)** That is making the error approach zero.
>
> **[1:30](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-error-function?u=76281980&t=90)** Now, when we are assessing the performance of the neural network, we use a metric known as the mean squared error.
>
> **[1:38](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-error-function?u=76281980&t=98)** There are several important details about this function.
>
> **[1:41](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-error-function?u=76281980&t=101)** The error is calculated as the sum of the squared output errors for all neurons in the output layer, all of this divided by n, the number of neurons in the output layer.
>
> **[1:52](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-error-function?u=76281980&t=112)** Remember, a neural network may have more than one output.
>
> **[1:56](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-error-function?u=76281980&t=116)** Since we'll use this error to check how our training is going, the training process seeks to minimize this error.
>
> **[2:03](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-error-function?u=76281980&t=123)** A nice thing about this metric is that it gets rid of the sign of the actual error.
>
> **[2:09](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-error-function?u=76281980&t=129)** So when minimizing the error, we're not interested in the direction of this error.
>
> **[2:14](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-error-function?u=76281980&t=134)** It's all the same to us if the output is over or under the desired value.
>
> **[2:19](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-error-function?u=76281980&t=139)** What we extract from this function is the size of the error.
>
> **[2:24](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-error-function?u=76281980&t=144)** This way we always want to minimize this function.

> [!info]- Semantic Content
>
> **Code Keywords:** function (6), let (3)
> **Definitions:** known as (2)
> **Versions:** 0.6 (1)
> **Speakers:** - [instructor] (1)

#### Gradient descent
> [LinkedIn Learning](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/gradient-descent?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/gradient-descent?u=76281980&t=0)** - [Instructor] Great, now that we know about the error function we want to minimize, let's talk about the general algorithm known as gradient descent.
>
> **[0:09](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/gradient-descent?u=76281980&t=9)** This is a training method to minimize the error of our neural network.
>
> **[0:14](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/gradient-descent?u=76281980&t=14)** It consists on adjusting the weights in order to find the minimum error.
>
> **[0:19](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/gradient-descent?u=76281980&t=19)** To get an idea of the logic behind gradient descent, think about trying to go downhill to the lowest valley in the error function.
>
> **[0:28](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/gradient-descent?u=76281980&t=28)** So here's a graphic aid to understand what gradient descent is all about.
>
> **[0:33](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/gradient-descent?u=76281980&t=33)** For now, suppose we have a neural network with several weights but we are only interested in modifying one weight to see how it affects the overall error of the network.
>
> **[0:45](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/gradient-descent?u=76281980&t=45)** So let's say we get this function and we set this weight to say this value.
>
> **[0:51](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/gradient-descent?u=76281980&t=51)** Now think of valuating this function as placing a marble over the function, like this.
>
> **[0:58](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/gradient-descent?u=76281980&t=58)** Reducing the weight will get us to a higher, thus worse, error.
>
> **[1:03](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/gradient-descent?u=76281980&t=63)** But increasing the weight will lead us downhill.
>
> **[1:06](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/gradient-descent?u=76281980&t=66)** If we keep increasing the weight, we'll eventually reach the lowest point in the plot.
>
> **[1:12](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/gradient-descent?u=76281980&t=72)** That's our objective.
>
> **[1:14](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/gradient-descent?u=76281980&t=74)** This is the global minimum of the function and that's the best error we can get by modifying this particular weight.
>
> **[1:22](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/gradient-descent?u=76281980&t=82)** So in some sense, we want to simulate gravity in this plot.
>
> **[1:26](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/gradient-descent?u=76281980&t=86)** And that's what gradient descent will do for us.
>
> **[1:29](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/gradient-descent?u=76281980&t=89)** Now let me quickly warn you about a possible problem here.
>
> **[1:34](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/gradient-descent?u=76281980&t=94)** Since we don't know what our error function will look like and we initialize our weights randomly, what would happen if we start with this value for the weight?
>
> **[1:45](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/gradient-descent?u=76281980&t=105)** Well, simulating the same gravity effect with gradient descent, we would move the marble to the left, eventually getting stuck in this valley, which is not the global minimum but a local minimum.
>
> **[1:59](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/gradient-descent?u=76281980&t=119)** Don't worry, there are several methods to overcome this local minina problem.
>
> **[2:04](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/gradient-descent?u=76281980&t=124)** Pushing our example a little forward, think about modifying two weights to manipulate the error.
>
> **[2:11](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/gradient-descent?u=76281980&t=131)** This would give us a 3D plot where the height is the error and the two weights will place the marble at different points in this surface with mountains and valleys.
>
> **[2:22](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/gradient-descent?u=76281980&t=142)** The objective is still to get the marble to the lowest point.
>
> **[2:26](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/gradient-descent?u=76281980&t=146)** As you can see, it becomes a bit more complicated with more weights.
>
> **[2:30](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/gradient-descent?u=76281980&t=150)** So with two weights, this became a tri-dimensional plot.
>
> **[2:34](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/gradient-descent?u=76281980&t=154)** Well, the XR neural network has nine weights so this becomes a 10-dimensional plot, which we can't even understand graphically.
>
> **[2:44](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/gradient-descent?u=76281980&t=164)** The good news is that we have a method that will simulate this gravity for us, so we don't have to worry about the number of weights involved.

> [!info]- Semantic Content
>
> **Code Keywords:** function (7), let (3), this. (1)
> **Definitions:** known as (1), is a  (1)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### The Delta rule
> [LinkedIn Learning](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-delta-rule?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-delta-rule?u=76281980&t=0)** - [Instructor] The simplest form of the algorithm we'll implement is known as the delta rule.
>
> **[0:05](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-delta-rule?u=76281980&t=5)** It's a simple update formula for adjusting the weights in a single perceptron, that is a neuron.
>
> **[0:12](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-delta-rule?u=76281980&t=12)** Yes, it's a simple formula but its reasoning is very clever.
>
> **[0:16](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-delta-rule?u=76281980&t=16)** The delta rule considers the following values.
>
> **[0:20](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-delta-rule?u=76281980&t=20)** The output error, this is the simple subtraction error.
>
> **[0:24](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-delta-rule?u=76281980&t=24)** One input, the one affected by the weight we are going to tweak.
>
> **[0:29](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-delta-rule?u=76281980&t=29)** And a constant known as the learning rate.
>
> **[0:33](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-delta-rule?u=76281980&t=33)** So here's a nice equation to calculate the update in a weight i in a neuron k.
>
> **[0:40](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-delta-rule?u=76281980&t=40)** Let's call it delta w sub ik.
>
> **[0:44](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-delta-rule?u=76281980&t=44)** And it's the value we'll have to add to w sub ik to get the boundary closer to what we want.
>
> **[0:51](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-delta-rule?u=76281980&t=51)** So to calculate this delta, we multiplied the learning rate eta times the output error.
>
> **[0:59](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-delta-rule?u=76281980&t=59)** That is the label y sub k minus the neuron's output o sub k times the ith input value x sub ik.
>
> **[1:09](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-delta-rule?u=76281980&t=69)** Yeah, it's very simple but notice what's happening there.
>
> **[1:13](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-delta-rule?u=76281980&t=73)** The output error will be positive if the label y is higher than the output, and it will be negative if y is lower than the output.
>
> **[1:23](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-delta-rule?u=76281980&t=83)** This means that when we later update w, it will contribute to making the output closer to the provided label.
>
> **[1:32](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-delta-rule?u=76281980&t=92)** If we calculate all of the delta ws, and add them to the ws, our perceptron will be one step closer to having the boundary we want.
>
> **[1:42](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-delta-rule?u=76281980&t=102)** So let me tell you a few things about the learning rate.
>
> **[1:46](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-delta-rule?u=76281980&t=106)** First, it's a unique constant in the neural network.
>
> **[1:49](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-delta-rule?u=76281980&t=109)** There's only one learning rate for all neurons.
>
> **[1:53](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-delta-rule?u=76281980&t=113)** As the name suggests, it directly affects the rate of learning because higher values will result in larger leaps for the weights and lower values will result in smaller leaps for the weights.
>
> **[2:07](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-delta-rule?u=76281980&t=127)** Does a higher learning rate mean faster learning?
>
> **[2:11](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-delta-rule?u=76281980&t=131)** Yes.
>
> **[2:12](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-delta-rule?u=76281980&t=132)** Does a higher learning rate mean better?
>
> **[2:15](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-delta-rule?u=76281980&t=135)** No.
>
> **[2:16](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-delta-rule?u=76281980&t=136)** The learning rate is usually initialized at 0.5 but you may have to tune it if learning is too fast or too slow.
>
> **[2:25](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-delta-rule?u=76281980&t=145)** Here's why.
>
> **[2:26](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-delta-rule?u=76281980&t=146)** Let me show you six updates of a weight in this error function, considering a learning rate that's too slow.
>
> **[2:34](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-delta-rule?u=76281980&t=154)** So pay attention to the marble.
>
> **[2:36](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-delta-rule?u=76281980&t=156)** One, two, three, four, five, six.
>
> **[2:42](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-delta-rule?u=76281980&t=162)** The marble will eventually find a minimum.
>
> **[2:45](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-delta-rule?u=76281980&t=165)** It will take a long time and it may get stuck at the first local minimum it finds.
>
> **[2:51](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-delta-rule?u=76281980&t=171)** This could be much better.
>
> **[2:53](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-delta-rule?u=76281980&t=173)** Let's see six steps again with a learning rate that's too high.
>
> **[2:59](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-delta-rule?u=76281980&t=179)** One.
>
> **[3:00](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-delta-rule?u=76281980&t=180)** Two.
>
> **[3:02](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-delta-rule?u=76281980&t=182)** Three.
>
> **[3:03](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-delta-rule?u=76281980&t=183)** Four.
>
> **[3:05](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-delta-rule?u=76281980&t=185)** Five.
>
> **[3:07](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-delta-rule?u=76281980&t=187)** Six.
>
> **[3:09](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-delta-rule?u=76281980&t=189)** Large leaps may miss the minimum, getting stuck around it or even missing it all together.
>
> **[3:16](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-delta-rule?u=76281980&t=196)** The desired situation is a learning rate that's just right.
>
> **[3:20](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-delta-rule?u=76281980&t=200)** Notice that it may mimic inertia going a bit past the minimum but being drawn back into the valley.
>
> **[3:27](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-delta-rule?u=76281980&t=207)** One.
>
> **[3:28](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-delta-rule?u=76281980&t=208)** Two.
>
> **[3:30](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-delta-rule?u=76281980&t=210)** Three.
>
> **[3:31](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-delta-rule?u=76281980&t=211)** Four.
>
> **[3:32](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-delta-rule?u=76281980&t=212)** Five.
>
> **[3:33](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-delta-rule?u=76281980&t=213)** Six.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), function (1)
> **Definitions:** known as (2), is a  (2), means that (1)
> **CLI Commands:** find (1)
> **Versions:** 0.5 (1)
> **Speakers:** - [instructor] (1)

#### The Backpropagation algorithm
> [LinkedIn Learning](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-backpropagation-algorithm?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-backpropagation-algorithm?u=76281980&t=0)** - [Instructor] We are finally ready to see the back propagation training algorithm.
>
> **[0:04](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-backpropagation-algorithm?u=76281980&t=4)** This is a general form of the Delta rule.
>
> **[0:07](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-backpropagation-algorithm?u=76281980&t=7)** It has several requirements on the neuron model especially on the activation function.
>
> **[0:13](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-backpropagation-algorithm?u=76281980&t=13)** Don't worry, the sigmoid makes it easy.
>
> **[0:16](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-backpropagation-algorithm?u=76281980&t=16)** The algorithm calculates all weight updates throughout the network.
>
> **[0:21](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-backpropagation-algorithm?u=76281980&t=21)** This is done by propagating the error back through the layers.
>
> **[0:25](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-backpropagation-algorithm?u=76281980&t=25)** So here are the steps of the backpropagation algorithm to train a multilayer perception with one sample.
>
> **[0:33](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-backpropagation-algorithm?u=76281980&t=33)** One, feed a sample to the network.
>
> **[0:36](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-backpropagation-algorithm?u=76281980&t=36)** Two, calculate the mean squared error.
>
> **[0:39](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-backpropagation-algorithm?u=76281980&t=39)** Three, calculate the error term of each output neuron.
>
> **[0:44](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-backpropagation-algorithm?u=76281980&t=44)** Four iteratively calculate the error terms in the hidden layers.
>
> **[0:49](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-backpropagation-algorithm?u=76281980&t=49)** Five, apply the delta rule and six, adjust the weights.
>
> **[0:53](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-backpropagation-algorithm?u=76281980&t=53)** Now for your next challenge you'll have to write the back propagation algorithm.
>
> **[0:58](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-backpropagation-algorithm?u=76281980&t=58)** That's why we're going to have a closed look at each of these steps because it's easy to get confused.
>
> **[1:05](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-backpropagation-algorithm?u=76281980&t=65)** For this example, I'll use a volunteer which is this network with three inputs- four neurons in the first hidden layer three neurons in the second one and two in the output layer.
>
> **[1:17](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-backpropagation-algorithm?u=76281980&t=77)** In my multilayer perception class, these are layers zero through three respectively.
>
> **[1:23](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-backpropagation-algorithm?u=76281980&t=83)** As you can see, our neurons are explicitly showing their bias inputs because we'll use them in the algorithm.
>
> **[1:31](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-backpropagation-algorithm?u=76281980&t=91)** But remember that these inputs are rarely shown for the sake of simplicity.
>
> **[1:36](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-backpropagation-algorithm?u=76281980&t=96)** The bias is fixed at one.
>
> **[1:38](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-backpropagation-algorithm?u=76281980&t=98)** So don't confuse it with the bias input weights of the neurons.
>
> **[1:42](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-backpropagation-algorithm?u=76281980&t=102)** The first step is to run the network forward.
>
> **[1:46](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-backpropagation-algorithm?u=76281980&t=106)** So we feed a sample, say X equals 251 and let's say that our network spitted out the output vector O equals 0.2 and 0.49.
>
> **[2:01](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-backpropagation-algorithm?u=76281980&t=121)** Our training sample included a vector of labels.
>
> **[2:04](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-backpropagation-algorithm?u=76281980&t=124)** Y equals zero one.
>
> **[2:06](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-backpropagation-algorithm?u=76281980&t=126)** That is the expected output for the first output neuron is zero and one for the second one.
>
> **[2:14](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-backpropagation-algorithm?u=76281980&t=134)** The second step is to calculate the mean squared error.
>
> **[2:18](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-backpropagation-algorithm?u=76281980&t=138)** This needs to be done at this point because we will assess the accuracy of the neural network later and we are about to change its weights.
>
> **[2:26](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-backpropagation-algorithm?u=76281980&t=146)** Remember, the MSE is calculated on the outputs so we use Y and O.
>
> **[2:33](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-backpropagation-algorithm?u=76281980&t=153)** So subtracting vectors Y minus O we get minus 0.2 and 0.51.
>
> **[2:41](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-backpropagation-algorithm?u=76281980&t=161)** Squaring those values, we get 0.04 and 0.2601.
>
> **[2:49](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-backpropagation-algorithm?u=76281980&t=169)** Adding those values and dividing by two we finally get 0.15.
>
> **[2:55](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-backpropagation-algorithm?u=76281980&t=175)** That's the current state of the error metric for this network when it receives X as input.
>
> **[3:01](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-backpropagation-algorithm?u=76281980&t=181)** We'll use this value later to review how well the network is learning.
>
> **[3:06](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-backpropagation-algorithm?u=76281980&t=186)** This is the error function that is undergoing gradient dissent.
>
> **[3:10](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-backpropagation-algorithm?u=76281980&t=190)** Is 0.15 a large or small error?
>
> **[3:14](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-backpropagation-algorithm?u=76281980&t=194)** Bear with me when I say that it doesn't matter.
>
> **[3:18](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-backpropagation-algorithm?u=76281980&t=198)** What matters is reducing this number very much as we iterate.
>
> **[3:23](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-backpropagation-algorithm?u=76281980&t=203)** Step three is to calculate the output error terms.
>
> **[3:27](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-backpropagation-algorithm?u=76281980&t=207)** This is a third error metric and it's an intermediate error calculation that will be used for guessing how bad each neuron is doing.
>
> **[3:37](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-backpropagation-algorithm?u=76281980&t=217)** Notice that we're paying attention to the output layer.
>
> **[3:40](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-backpropagation-algorithm?u=76281980&t=220)** We'll later use these error terms to calculate the error terms in the hidden layers moving backwards through the network.
>
> **[3:49](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-backpropagation-algorithm?u=76281980&t=229)** That's the reason for the name back propagation.
>
> **[3:52](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-backpropagation-algorithm?u=76281980&t=232)** Finally, we'll know the error term for all of the neurons in the network and we will apply the delta rule to calculate the deltas and adjust the weights.
>
> **[4:02](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-backpropagation-algorithm?u=76281980&t=242)** So the error term for neuron K in the output layer is represented by lower case delta sub K, and it's related to the partial derivative of the error of the network with respect to each weight in that neuron.
>
> **[4:17](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-backpropagation-algorithm?u=76281980&t=257)** So delta sub K equals O sub K.
>
> **[4:20](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-backpropagation-algorithm?u=76281980&t=260)** That's the output value of neuron K times one minus O, sub K times the simple output error Y sub K minus O sub K.
>
> **[4:32](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-backpropagation-algorithm?u=76281980&t=272)** Just so you know this part is the derivative of the sigmoid function which is very simple, and that's one of the main reasons to use the sigmoid function as an activation function for our neurons.
>
> **[4:47](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-backpropagation-algorithm?u=76281980&t=287)** So let's suppose we are interested in calculating the error term for output 01.
>
> **[4:53](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-backpropagation-algorithm?u=76281980&t=293)** Now let's zoom into the output layer for this example.
>
> **[4:57](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-backpropagation-algorithm?u=76281980&t=297)** To calculate lowercase delta sub one that's the error term for neuron number one in the output layer, we'll use O sub one and Y sub one in the equation.
>
> **[5:09](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-backpropagation-algorithm?u=76281980&t=309)** It's that simple.
>
> **[5:11](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-backpropagation-algorithm?u=76281980&t=311)** The fourth step is where the magic happens.
>
> **[5:14](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-backpropagation-algorithm?u=76281980&t=314)** Now we're going to calculate the error terms for the hidden layers and we do this backwards.
>
> **[5:20](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-backpropagation-algorithm?u=76281980&t=320)** The previous step was done in the output layer.
>
> **[5:23](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-backpropagation-algorithm?u=76281980&t=323)** This step iterates from the last hidden layer all the way to the first hidden layer to find a error term per neuron.
>
> **[5:33](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-backpropagation-algorithm?u=76281980&t=333)** Here's the equation for a error term lowercase delta sub H.
>
> **[5:37](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-backpropagation-algorithm?u=76281980&t=337)** It's almost the same as for the output layer.
>
> **[5:40](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-backpropagation-algorithm?u=76281980&t=340)** The derivative of the sigmoid is still there, but in the hidden layer we have no idea about the error because we simply don't know what to expect from the intermediate neurons.
>
> **[5:53](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-backpropagation-algorithm?u=76281980&t=353)** So what we use instead is a sum of a product that includes the error terms in the neurons connected to this neurons output.
>
> **[6:02](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-backpropagation-algorithm?u=76281980&t=362)** These neurons are in the next layer and we have just calculated their error terms lower case deltas of K but that's not all we calculate in this sum.
>
> **[6:13](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-backpropagation-algorithm?u=76281980&t=373)** We must multiply these error terms by the weight of the input that's connected to the output of our neuron H.
>
> **[6:22](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-backpropagation-algorithm?u=76281980&t=382)** So let's zoom in again to see what happens in the second neuron of the second hidden layer.
>
> **[6:29](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-backpropagation-algorithm?u=76281980&t=389)** This will be neuron one in the last hidden layer.
>
> **[6:32](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-backpropagation-algorithm?u=76281980&t=392)** So in the equation H will be one.
>
> **[6:35](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-backpropagation-algorithm?u=76281980&t=395)** Actually, by lowercase delta one, I'm hiding the layer number.
>
> **[6:41](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-backpropagation-algorithm?u=76281980&t=401)** So let me be more specific in the diagram and call this lowercase delta two one, meaning that this neuron is in layer two and it's neuron number one, the second neuron.
>
> **[6:54](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-backpropagation-algorithm?u=76281980&t=414)** To calculate lowercase delta sub two one, we'll need the usual derivative of the sigmoid times the weighted sum of the error terms.
>
> **[7:04](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-backpropagation-algorithm?u=76281980&t=424)** So these are the products we'll have to add for this neuron.
>
> **[7:08](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-backpropagation-algorithm?u=76281980&t=428)** Lower case delta three zero or the error term of the output neuron zero times W zero one.
>
> **[7:18](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-backpropagation-algorithm?u=76281980&t=438)** That is the input weight one of this output neuron.
>
> **[7:22](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-backpropagation-algorithm?u=76281980&t=442)** We'll add this product with the product of lower case delta three one, which is the error term of the other output neuron times W one one which is the weight of the input connected to our neuron two one.
>
> **[7:39](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-backpropagation-algorithm?u=76281980&t=459)** See why I call this magic?
>
> **[7:41](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-backpropagation-algorithm?u=76281980&t=461)** We are reacting to the error propagated back through the network in the right proportion by scaling the error terms with the weights.
>
> **[7:50](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-backpropagation-algorithm?u=76281980&t=470)** This means that errors with higher weights will take more of the blame and errors with lower weights will get less of the blame.
>
> **[8:00](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-backpropagation-algorithm?u=76281980&t=480)** Now, just for completeness, let's back up to layer one.
>
> **[8:04](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-backpropagation-algorithm?u=76281980&t=484)** So now in layer one, let's say we are interested in the third neuron.
>
> **[8:09](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-backpropagation-algorithm?u=76281980&t=489)** That's lowercase delta two in this layer or it's full name would be lowercase delta one two as shown in the diagram.
>
> **[8:18](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-backpropagation-algorithm?u=76281980&t=498)** To calculate this sum, we'll have to multiply W zero two with delta two zero W one two with delta two one W two two with delta two two, and add these three products.
>
> **[8:35](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-backpropagation-algorithm?u=76281980&t=515)** It's all downhill from here.
>
> **[8:37](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-backpropagation-algorithm?u=76281980&t=517)** Step five is to apply the delta rule.
>
> **[8:40](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-backpropagation-algorithm?u=76281980&t=520)** Since we now have all of the error turns the lower case deltas, we may proceed to calculate the weight adjustments or upper case deltas.
>
> **[8:50](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-backpropagation-algorithm?u=76281980&t=530)** So as the equation shows, to compute the weight adjustment for an input J in a neuron I we need to multiply the learning rate times the error term of the neuron I times the input value J in neuron I.
>
> **[9:06](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-backpropagation-algorithm?u=76281980&t=546)** Great, now that we have the deltas we simply add them to the weights and we are done.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), function (5), class, (1), finally, (1)
> **Versions:** 0.2 (2), 0.15 (2), 0.49 (1), 0.51 (1), 0.04 (1)
> **Definitions:** is a  (3), means that (1)
> **Cross-References:** in the next (1), in the last (1)
> **CLI Commands:** find (1)
> **Env Vars:** mse (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Write your own Backpropagation method
> [LinkedIn Learning](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-write-your-own-backpropagation-method?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-write-your-own-backpropagation-method?u=76281980&t=0)** - [Instructor] Ready to finish up your multilayer perceptron class?
>
> **[0:11](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-write-your-own-backpropagation-method?u=76281980&t=11)** This time your task is to write a backpropagation trainer method, which will run one sample through the network with the backpropagation algorithm.
>
> **[0:20](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-write-your-own-backpropagation-method?u=76281980&t=20)** Don't worry, you'll just have to write a few lines per step in the provided code.
>
> **[0:25](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-write-your-own-backpropagation-method?u=76281980&t=25)** In fact, you'll just have to fill in the blanks.
>
> **[0:28](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-write-your-own-backpropagation-method?u=76281980&t=28)** You can do this.
>
> **[0:30](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-write-your-own-backpropagation-method?u=76281980&t=30)** And feel free to go back to the backpropagation videos if you get stuck.
>
> **[0:35](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-write-your-own-backpropagation-method?u=76281980&t=35)** The method is called bp and it receives a feature vector x and a label vector y.
>
> **[0:41](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-write-your-own-backpropagation-method?u=76281980&t=41)** Both are regular Python lists.
>
> **[0:44](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-write-your-own-backpropagation-method?u=76281980&t=44)** So the first two lines convert those lists into NumPy arrays as usual to have the operations in NumPy.
>
> **[0:52](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-write-your-own-backpropagation-method?u=76281980&t=52)** Now your challenge starts in line 87.
>
> **[0:55](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-write-your-own-backpropagation-method?u=76281980&t=55)** Notice that I've placed a comment for each step and skeleton code for the loops.
>
> **[1:00](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-write-your-own-backpropagation-method?u=76281980&t=60)** Now for steps three and four, you'll need a new NumPy array of arrays I added to the class to store the error terms or lowercase deltas.
>
> **[1:11](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-write-your-own-backpropagation-method?u=76281980&t=71)** That's why I named it lowercase d.
>
> **[1:14](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-write-your-own-backpropagation-method?u=76281980&t=74)** You may want to check the constructor code starting at line 36 and look for this array.
>
> **[1:23](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-write-your-own-backpropagation-method?u=76281980&t=83)** So as you can see, I have highlighted all the appearance of d in the constructor.
>
> **[1:32](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-write-your-own-backpropagation-method?u=76281980&t=92)** And if you pay attention, you'll see that it has the same organization as the value's array.
>
> **[1:38](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-write-your-own-backpropagation-method?u=76281980&t=98)** So it's created and initialized right next to it.
>
> **[1:42](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-write-your-own-backpropagation-method?u=76281980&t=102)** So this d array holds the error term for each neuron, just like the values array holds their output values.
>
> **[1:50](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-write-your-own-backpropagation-method?u=76281980&t=110)** Now let's go back to the backpropagation method.
>
> **[1:55](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-write-your-own-backpropagation-method?u=76281980&t=115)** As you can see in line 109, we must return the mean squared error because we'll need it the training process later.
>
> **[2:06](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-write-your-own-backpropagation-method?u=76281980&t=126)** Speaking of training, at the bottom, I have included a training example starting at line 113.
>
> **[2:13](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-write-your-own-backpropagation-method?u=76281980&t=133)** So notice that I'm running the bp method once for each case in the XOR truth table and that's my whole dataset.
>
> **[2:21](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-write-your-own-backpropagation-method?u=76281980&t=141)** Just four samples.
>
> **[2:23](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-write-your-own-backpropagation-method?u=76281980&t=143)** I'm running it for 3,000 epochs and I'm calculating the mean of the four errors in an epoch.
>
> **[2:31](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-write-your-own-backpropagation-method?u=76281980&t=151)** Notice that I'm only printing the error every 100 epochs.
>
> **[2:35](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-write-your-own-backpropagation-method?u=76281980&t=155)** So I'm expecting to see 30 error values in the terminal to keep it simple.
>
> **[2:42](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-write-your-own-backpropagation-method?u=76281980&t=162)** In line 126, I am also printing out the weights for you to see what the neural network finally came up with.
>
> **[2:50](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-write-your-own-backpropagation-method?u=76281980&t=170)** And finally, we print the truth table.
>
> **[2:53](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-write-your-own-backpropagation-method?u=76281980&t=173)** So when you're ready to test your backpropagation method, you will see the error drop as the training advances.
>
> **[3:00](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-write-your-own-backpropagation-method?u=76281980&t=180)** You will see the final weights and lastly, the four cases will be tested.
>
> **[3:06](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-write-your-own-backpropagation-method?u=76281980&t=186)** So you'll know how your training method is doing.
>
> **[3:09](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-write-your-own-backpropagation-method?u=76281980&t=189)** This may take you a while.
>
> **[3:11](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-write-your-own-backpropagation-method?u=76281980&t=191)** Anything between 30 and 45 minutes.
>
> **[3:14](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-write-your-own-backpropagation-method?u=76281980&t=194)** So have fun and when you're done, look at my solution in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** this. (1), let (1), finally, (1), while. (1)
> **Cross-References:** go back to (1), in the next (1)
> **CLI Commands:** python (1)
> **Env Vars:** xor (1)
> **Tools:** terminal (1)
> **Definitions:** is called (1)
> **Analogies:** just like (1)
> **Prerequisites:** you'll need (1)

#### Solution: Write your own Backpropagation method
> [LinkedIn Learning](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-write-your-own-backpropagation-method?u=76281980)

> [!transcript]- Transcript
>
> **[0:06](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-write-your-own-backpropagation-method?u=76281980&t=6)** - So here's my solution.
>
> **[0:08](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-write-your-own-backpropagation-method?u=76281980&t=8)** Step one is the simplest.
>
> **[0:11](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-write-your-own-backpropagation-method?u=76281980&t=11)** In line 93, we just run X through the network and assign the result to a new array called outputs.
>
> **[0:19](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-write-your-own-backpropagation-method?u=76281980&t=19)** Step two is where we calculate the mean squared error.
>
> **[0:23](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-write-your-own-backpropagation-method?u=76281980&t=23)** So first, I save the simple errors in an array called errors, and notice that I'm using NPI vector operations like the subtraction Y minus outputs.
>
> **[0:35](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-write-your-own-backpropagation-method?u=76281980&t=35)** Then the mean squared error is the sum of the values in error squared divided by the number of neurons in the last layer.
>
> **[0:44](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-write-your-own-backpropagation-method?u=76281980&t=44)** Step three is also done in vector operations.
>
> **[0:48](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-write-your-own-backpropagation-method?u=76281980&t=48)** Just following the equation, notice that the result goes to the last element in our D array.
>
> **[0:57](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-write-your-own-backpropagation-method?u=76281980&t=57)** Now for step four, pay attention to the loop starting at line 1 0 3.
>
> **[1:02](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-write-your-own-backpropagation-method?u=76281980&t=62)** First, I calculate the weighted sum of the forward error terms and then use that sum for the current neurons error term.
>
> **[1:12](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-write-your-own-backpropagation-method?u=76281980&t=72)** Notice that the outputs are not recalculated They are fetched from the values cash.
>
> **[1:19](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-write-your-own-backpropagation-method?u=76281980&t=79)** All this is assigned to each element in the D array which contains the error terms.
>
> **[1:27](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-write-your-own-backpropagation-method?u=76281980&t=87)** Steps five and six contain the most code but it's actually quite simple.
>
> **[1:33](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-write-your-own-backpropagation-method?u=76281980&t=93)** I goes through the layers, J goes through the neurons and K goes through the inputs.
>
> **[1:40](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-write-your-own-backpropagation-method?u=76281980&t=100)** That's why it goes from zero to the number of neurons in the previous layer, plus one because of the bias weight.
>
> **[1:48](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-write-your-own-backpropagation-method?u=76281980&t=108)** And that's exactly what the body of the innermost loop is doing.
>
> **[1:53](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-write-your-own-backpropagation-method?u=76281980&t=113)** Look at line one 14.
>
> **[1:55](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-write-your-own-backpropagation-method?u=76281980&t=115)** If K is the last weight, we calculate the delta by multiplying the learning rate times the error term in that neuron times the bias term as the input because well, that's the input.
>
> **[2:11](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-write-your-own-backpropagation-method?u=76281980&t=131)** On the other hand, if it's not the bias weight we are checking with K.
>
> **[2:15](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-write-your-own-backpropagation-method?u=76281980&t=135)** Then we calculate the delta as the learning rate times the error term times the actual input, which comes from our values.
>
> **[2:24](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-write-your-own-backpropagation-method?u=76281980&t=144)** Cash indexed at the previous layer.
>
> **[2:27](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-write-your-own-backpropagation-method?u=76281980&t=147)** That's it.
>
> **[2:28](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-write-your-own-backpropagation-method?u=76281980&t=148)** Finally, we return the mse.
>
> **[2:31](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-write-your-own-backpropagation-method?u=76281980&t=151)** So let's see it working here.
>
> **[2:35](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-write-your-own-backpropagation-method?u=76281980&t=155)** We have the results.
>
> **[2:37](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-write-your-own-backpropagation-method?u=76281980&t=157)** Pay attention to the 30 error values as they go down.
>
> **[2:48](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-write-your-own-backpropagation-method?u=76281980&t=168)** Next we have the weights.
>
> **[2:50](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-write-your-own-backpropagation-method?u=76281980&t=170)** Notice that it came up with something other than the nan or and combination we designed earlier.
>
> **[2:57](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-write-your-own-backpropagation-method?u=76281980&t=177)** Look at the values and signs of the weights.
>
> **[3:00](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-write-your-own-backpropagation-method?u=76281980&t=180)** This is surely a logical equivalent of that initial ex o R.
>
> **[3:05](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-write-your-own-backpropagation-method?u=76281980&t=185)** And finally, we have the truth table at the bottom.
>
> **[3:08](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-write-your-own-backpropagation-method?u=76281980&t=188)** As you can see we are practically getting the ex o r behavior meaning that our artificial brain has learned it's alive.
>
> **[3:18](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-write-your-own-backpropagation-method?u=76281980&t=198)** Now, this is my favorite part of the whole process.
>
> **[3:22](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-write-your-own-backpropagation-method?u=76281980&t=202)** This plot shows the learning process for the Exor gate.
>
> **[3:26](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-write-your-own-backpropagation-method?u=76281980&t=206)** We just saw I got this data by training an exor like we just saw and I copied the 30 error values reported in the terminal.
>
> **[3:35](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-write-your-own-backpropagation-method?u=76281980&t=215)** I pasted them in a spreadsheet to finally make the plot.
>
> **[3:39](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-write-your-own-backpropagation-method?u=76281980&t=219)** You should try it on your own and you'll get something very similar.
>
> **[3:44](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-write-your-own-backpropagation-method?u=76281980&t=224)** As you can see, the plot shows how the error drops as the neural network learns epoch after reoc.
>
> **[3:51](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-write-your-own-backpropagation-method?u=76281980&t=231)** These plots usually show a very subtle improvement in the error in the first iterations.
>
> **[3:58](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-write-your-own-backpropagation-method?u=76281980&t=238)** But as the gradient dissent starts to pay off you'll see a dramatic drop after which the improvement is subtle.
>
> **[4:07](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-write-your-own-backpropagation-method?u=76281980&t=247)** Again, that's just the law of diminishing returns working and that's a smart way of telling when you should stop training.
>
> **[4:15](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-write-your-own-backpropagation-method?u=76281980&t=255)** You don't want to waste your time getting less significant improvements or even worse getting your neural network to over fit.
>
> **[4:24](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-write-your-own-backpropagation-method?u=76281980&t=264)** So if we look at the plot you will see that the dramatic improvement happened sometime around 1000 eppo, and you'll also see that the diminishing returns started to show at about 1500 eppo.
>
> **[4:41](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-write-your-own-backpropagation-method?u=76281980&t=281)** So with this in mind maybe we should have stopped training some time before 2000 to avoid overfitting.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (2), let (1)
> **CLI Commands:** make (1)
> **Env Vars:** npi (1)
> **Cross-References:** in the last (1)
> **Tools:** terminal (1)
> **Speakers:** - so (1)


### 5. Let's Make a Segment Display Classifier

#### Segment display recognition
> [LinkedIn Learning](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/segment-display-recognition?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/segment-display-recognition?u=76281980&t=0)** - [Instructor] Congratulations for making it this far.
>
> **[0:03](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/segment-display-recognition?u=76281980&t=3)** You've learned an impressive number of concepts that will be useful in your journey into artificial intelligence and machine learning.
>
> **[0:10](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/segment-display-recognition?u=76281980&t=10)** Now it's time to have some fun with a practical application of your brand new multilayer perception class.
>
> **[0:17](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/segment-display-recognition?u=76281980&t=17)** The project is a simplified version of optical character recognition or OCR.
>
> **[0:22](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/segment-display-recognition?u=76281980&t=22)** So let me tell you a few details about OCR.
>
> **[0:25](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/segment-display-recognition?u=76281980&t=25)** It's a set of algorithms used to recognize characters in a picture.
>
> **[0:29](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/segment-display-recognition?u=76281980&t=29)** It's useful for many applications like digitizing books or documents.
>
> **[0:34](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/segment-display-recognition?u=76281980&t=34)** For example, if you have an old book, a contract, or a printed document you'd like to convert to a PDF file.
>
> **[0:41](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/segment-display-recognition?u=76281980&t=41)** A more advanced version of OCR is used for taking notes by hand on your tablet or smartphone.
>
> **[0:47](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/segment-display-recognition?u=76281980&t=47)** This software is able to learn from your own handwriting.
>
> **[0:52](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/segment-display-recognition?u=76281980&t=52)** Another application is actually reading.
>
> **[0:55](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/segment-display-recognition?u=76281980&t=55)** I'm talking about systems that are supposed to understand written text in front of them.
>
> **[1:00](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/segment-display-recognition?u=76281980&t=60)** A nice example would be a robot that reads books out loud.
>
> **[1:04](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/segment-display-recognition?u=76281980&t=64)** It has to understand the printed characters prior to converting text to speech.
>
> **[1:09](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/segment-display-recognition?u=76281980&t=69)** Now about our project.
>
> **[1:11](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/segment-display-recognition?u=76281980&t=71)** It's a Segment Display Recognition system which I decided to call SDR.
>
> **[1:17](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/segment-display-recognition?u=76281980&t=77)** This is not a formal term, I just came up with the name.
>
> **[1:20](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/segment-display-recognition?u=76281980&t=80)** But if you do a web search for systems that recognize digits from seven segment display, you'll find lots of interesting projects and research papers.
>
> **[1:29](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/segment-display-recognition?u=76281980&t=89)** The objective here is to recognize digits from a single seven segment display like this one.
>
> **[1:35](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/segment-display-recognition?u=76281980&t=95)** The letters shown inside each segment are their standard names, A through G.
>
> **[1:41](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/segment-display-recognition?u=76281980&t=101)** We are all familiar with these displays, and these are the most popular digit patterns for seven segment display, and they are the ones we will use for training our neural network.
>
> **[1:53](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/segment-display-recognition?u=76281980&t=113)** So again, the objective is to recognize multi-digit numbers by first recognizing the digits separately.
>
> **[2:00](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/segment-display-recognition?u=76281980&t=120)** This is a suitable task for a neural network because the input may come from a picture or a camera used by some computer vision system.
>
> **[2:08](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/segment-display-recognition?u=76281980&t=128)** The software will extract the brightness of each segment and send that seven number vector to our neural network.
>
> **[2:15](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/segment-display-recognition?u=76281980&t=135)** We'll take it from there.
>
> **[2:17](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/segment-display-recognition?u=76281980&t=137)** Since we'll receive the brightness of each segment, our neural network will have the chance to generalize and guess what a pattern really means.
>
> **[2:26](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/segment-display-recognition?u=76281980&t=146)** In other words, not all numbers will have a 100% brightness in every segment that's on.
>
> **[2:33](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/segment-display-recognition?u=76281980&t=153)** Actually, there may be some ambiguous patterns.
>
> **[2:36](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/segment-display-recognition?u=76281980&t=156)** Take this alarm clock, for example.
>
> **[2:39](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/segment-display-recognition?u=76281980&t=159)** The second digit looks like a zero but it has its middle segment, segment G, somewhat visible, so it may be an eight.
>
> **[2:48](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/segment-display-recognition?u=76281980&t=168)** Here's another example.
>
> **[2:50](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/segment-display-recognition?u=76281980&t=170)** Look at the third digit.
>
> **[2:52](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/segment-display-recognition?u=76281980&t=172)** It's easy for a human to know that's a four.
>
> **[2:55](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/segment-display-recognition?u=76281980&t=175)** Even though it's segment F, the leftmost is quite dim.
>
> **[2:59](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/segment-display-recognition?u=76281980&t=179)** We as humans wouldn't expect this digit to be a minus one.
>
> **[3:03](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/segment-display-recognition?u=76281980&t=183)** Well, for these ambiguous patterns our neural network may be a very good alternative to a simple lookup table.

> [!info]- Semantic Content
>
> **Env Vars:** ocr (3), pdf (1), sdr (1)
> **Analogies:** picture (2), for example (2)
> **Definitions:** is a  (2), in other words (1)
> **Code Keywords:** class. (1), let (1)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Design your own SDR neural network
> [LinkedIn Learning](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-design-your-own-sdr-neural-network?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-design-your-own-sdr-neural-network?u=76281980&t=0)** - [Instructor] All right.
>
> **[0:06](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-design-your-own-sdr-neural-network?u=76281980&t=6)** Here's a system-level challenge for you.
>
> **[0:09](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-design-your-own-sdr-neural-network?u=76281980&t=9)** Design your own segment display recognition neural network.
>
> **[0:13](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-design-your-own-sdr-neural-network?u=76281980&t=13)** We'll give some thought to the design first, so please don't write any code just yet.
>
> **[0:18](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-design-your-own-sdr-neural-network?u=76281980&t=18)** Instead, try to answer this question.
>
> **[0:21](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-design-your-own-sdr-neural-network?u=76281980&t=21)** How would you recognize numbers from zero to nine?
>
> **[0:25](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-design-your-own-sdr-neural-network?u=76281980&t=25)** Think about the dimensions of your multilayer Perceptron.
>
> **[0:29](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-design-your-own-sdr-neural-network?u=76281980&t=29)** We already know that we want seven inputs because we'll receive seven brightness levels, one for each segment, but try to answer these questions.
>
> **[0:38](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-design-your-own-sdr-neural-network?u=76281980&t=38)** How many inputs and outputs would you use?
>
> **[0:41](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-design-your-own-sdr-neural-network?u=76281980&t=41)** How many hidden layers, and how many neurons per hidden layer, would you use?
>
> **[0:46](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-design-your-own-sdr-neural-network?u=76281980&t=46)** And also, try to think how you want the data to be presented at the output of your neural network.
>
> **[0:53](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-design-your-own-sdr-neural-network?u=76281980&t=53)** Your solution should be a diagram like this one, showing the inputs, the neurons, their connections, and the outputs.
>
> **[1:00](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-design-your-own-sdr-neural-network?u=76281980&t=60)** Don't worry about showing the bias inputs for all neurons.
>
> **[1:03](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-design-your-own-sdr-neural-network?u=76281980&t=63)** They will be there, just not in the diagram.
>
> **[1:07](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-design-your-own-sdr-neural-network?u=76281980&t=67)** Give some thought to this.
>
> **[1:09](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-design-your-own-sdr-neural-network?u=76281980&t=69)** As with many computing problems, this is one of the most important steps.
>
> **[1:13](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-design-your-own-sdr-neural-network?u=76281980&t=73)** This should take you about 15 minutes.
>
> **[1:16](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-design-your-own-sdr-neural-network?u=76281980&t=76)** When you are done, watch the next video for a few solutions I came up with.

> [!info]- Semantic Content
>
> **Code Keywords:** this. (1)
> **Cross-References:** next video (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Design your own SDR neural network
> [LinkedIn Learning](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-design-your-own-sdr-neural-network?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-design-your-own-sdr-neural-network?u=76281980&t=0)** - [Instructor] How did you do?
>
> **[0:07](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-design-your-own-sdr-neural-network?u=76281980&t=7)** I came up with three plausible solutions for this single digit SDR neural network.
>
> **[0:12](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-design-your-own-sdr-neural-network?u=76281980&t=12)** The first has seven inputs and one output.
>
> **[0:16](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-design-your-own-sdr-neural-network?u=76281980&t=16)** The second has seven inputs and 10 outputs and the third has seven inputs and seven outputs.
>
> **[0:22](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-design-your-own-sdr-neural-network?u=76281980&t=22)** Let me tell you what I was thinking when I designed each of them.
>
> **[0:26](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-design-your-own-sdr-neural-network?u=76281980&t=26)** My first network has seven inputs, one hidden layer with seven neurons, and one output.
>
> **[0:32](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-design-your-own-sdr-neural-network?u=76281980&t=32)** In fact, all three designs have just one hidden layer with seven neurons.
>
> **[0:38](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-design-your-own-sdr-neural-network?u=76281980&t=38)** My thinking was to allow each segment to affect one neuron exclusively, if needed.
>
> **[0:43](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-design-your-own-sdr-neural-network?u=76281980&t=43)** You could have used more or less neurons in this layer and you could have used more hidden layers.
>
> **[0:49](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-design-your-own-sdr-neural-network?u=76281980&t=49)** Now, since I only have one output neuron, my output will be a real value between zero and one, so some calculations have to be made to output numbers from zero to nine.
>
> **[1:03](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-design-your-own-sdr-neural-network?u=76281980&t=63)** I was thinking of assigning buckets to encode each digit.
>
> **[1:07](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-design-your-own-sdr-neural-network?u=76281980&t=67)** For example, anything from 0.1 to 0.1999, many nines, will correspond to one.
>
> **[1:16](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-design-your-own-sdr-neural-network?u=76281980&t=76)** Anything from 0.5 to 0.5999, many nines, will correspond to five.
>
> **[1:22](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-design-your-own-sdr-neural-network?u=76281980&t=82)** That is, the recognized digit will be the truncated integer of 10 times the output.
>
> **[1:29](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-design-your-own-sdr-neural-network?u=76281980&t=89)** Although this is a valid model, a one-output neural network for a multi-class problem is almost always avoided and discouraged.
>
> **[1:38](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-design-your-own-sdr-neural-network?u=76281980&t=98)** The reason is that it has many setbacks and the alternatives are much better at little to no cost.
>
> **[1:45](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-design-your-own-sdr-neural-network?u=76281980&t=105)** Here, we have two things that are wrong about this approach.
>
> **[1:48](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-design-your-own-sdr-neural-network?u=76281980&t=108)** First, we are solving a classification problem with a regression tool.
>
> **[1:54](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-design-your-own-sdr-neural-network?u=76281980&t=114)** The sigmoid function in the output makes it a binary classification tool.
>
> **[1:59](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-design-your-own-sdr-neural-network?u=76281980&t=119)** So, assigning the output values to uniformly distributed buckets in the output domain is not an easy task with the nonlinear sigmoid, because those buckets aren't so uniformly distributed for the input domain.
>
> **[2:13](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-design-your-own-sdr-neural-network?u=76281980&t=133)** The reason for this is that we are using a good tool for the wrong problem.
>
> **[2:18](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-design-your-own-sdr-neural-network?u=76281980&t=138)** In other words, we are drilling with a screwdriver.
>
> **[2:21](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-design-your-own-sdr-neural-network?u=76281980&t=141)** It may get the job done, but our drill would do a much better job.
>
> **[2:27](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-design-your-own-sdr-neural-network?u=76281980&t=147)** Here's the second reason not to use this model.
>
> **[2:30](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-design-your-own-sdr-neural-network?u=76281980&t=150)** We are assigning the values to consecutive buckets in the output.
>
> **[2:34](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-design-your-own-sdr-neural-network?u=76281980&t=154)** That is, we are mapping our unrelated classes to sequential values as if our classes needed to be sorted that way.
>
> **[2:42](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-design-your-own-sdr-neural-network?u=76281980&t=162)** Yes, in our segment recognition system, we are using digits, but they don't have to represent their values.
>
> **[2:50](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-design-your-own-sdr-neural-network?u=76281980&t=170)** They're just symbols for now.
>
> **[2:52](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-design-your-own-sdr-neural-network?u=76281980&t=172)** Think about it with a different example, like this one with four classes: bird, dog, cat, and mouse.
>
> **[3:00](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-design-your-own-sdr-neural-network?u=76281980&t=180)** There's no real reason to say that dog is greater than mouse or bird is greater than cat.
>
> **[3:07](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-design-your-own-sdr-neural-network?u=76281980&t=187)** So, with this mapping, we are constraining our classifier to satisfy an additional and useless requirement.
>
> **[3:14](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-design-your-own-sdr-neural-network?u=76281980&t=194)** This adds complexity to the learning struggle of our neural network.
>
> **[3:19](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-design-your-own-sdr-neural-network?u=76281980&t=199)** So, this is my first system.
>
> **[3:22](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-design-your-own-sdr-neural-network?u=76281980&t=202)** Once again, this is a valid model, but there's a universally accepted alternative.
>
> **[3:28](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-design-your-own-sdr-neural-network?u=76281980&t=208)** My second network is that alternative.
>
> **[3:30](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-design-your-own-sdr-neural-network?u=76281980&t=210)** It has the required seven inputs and 10 outputs in a technique known as one-hot encoding.
>
> **[3:37](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-design-your-own-sdr-neural-network?u=76281980&t=217)** What this means is that each of the outputs represents one of the output classes, and so each of the output neurons will raise its hand, if you will, whenever we enter the pattern that neuron is sensitive to.
>
> **[3:52](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-design-your-own-sdr-neural-network?u=76281980&t=232)** The way for us to show the recognized number would be to report the class of the output with the greatest value.
>
> **[3:59](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-design-your-own-sdr-neural-network?u=76281980&t=239)** Notice that we've solved both problems of the previous model.
>
> **[4:02](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-design-your-own-sdr-neural-network?u=76281980&t=242)** All of the classes have their own independent neuron so they're not constrained by each other.
>
> **[4:09](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-design-your-own-sdr-neural-network?u=76281980&t=249)** How's that for a convenient alternative to the one output system?
>
> **[4:13](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-design-your-own-sdr-neural-network?u=76281980&t=253)** There's really no reason not to choose this system.
>
> **[4:17](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-design-your-own-sdr-neural-network?u=76281980&t=257)** My third system is something different.
>
> **[4:20](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-design-your-own-sdr-neural-network?u=76281980&t=260)** This one has the seven inputs and seven outputs that also represent the same seven segments.
>
> **[4:26](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-design-your-own-sdr-neural-network?u=76281980&t=266)** So, yes, whenever you enter, say, the pattern for number four, it will output the same pattern for number four.
>
> **[4:34](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-design-your-own-sdr-neural-network?u=76281980&t=274)** Now, this may not sound like a very good idea at first, but think of it like the text predictor in your smartphone, which suggests to complete the words you are typing.
>
> **[4:44](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-design-your-own-sdr-neural-network?u=76281980&t=284)** Well, this system will suggest to complete the number you are entering if we were to edit the number pattern we are sending into the network.
>
> **[4:53](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-design-your-own-sdr-neural-network?u=76281980&t=293)** My objective here is not to predict numbers entered segment by segment over time because that's not done in reality.
>
> **[5:01](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-design-your-own-sdr-neural-network?u=76281980&t=301)** However, this system is able to let you peek into the reasoning of a neural network.
>
> **[5:07](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-design-your-own-sdr-neural-network?u=76281980&t=307)** This system will show you how certain it is of the pattern it has recognized.
>
> **[5:12](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-design-your-own-sdr-neural-network?u=76281980&t=312)** I'll show you what I mean in my implemented system a few videos ahead.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), function (1), raise (1)
> **Versions:** 0.1 (1), 0.1999 (1), 0.5 (1), 0.5999 (1)
> **Definitions:** is a  (2), in other words (1), known as (1)
> **CLI Commands:** cat (2)
> **Analogies:** for example (1), think of it like (1)
> **Env Vars:** sdr (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Challenge: Train your own SDR neural network
> [LinkedIn Learning](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-train-your-own-sdr-neural-network?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-train-your-own-sdr-neural-network?u=76281980&t=0)** - [Instructor] We have come to our final challenge.
>
> **[0:10](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-train-your-own-sdr-neural-network?u=76281980&t=10)** It's time to train the segment display recognition neural network you designed.
>
> **[0:15](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-train-your-own-sdr-neural-network?u=76281980&t=15)** So here's what you have to do in this challenge.
>
> **[0:18](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-train-your-own-sdr-neural-network?u=76281980&t=18)** Create the neural network you just designed.
>
> **[0:21](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-train-your-own-sdr-neural-network?u=76281980&t=21)** Train it either using the provided datasets or your own.
>
> **[0:26](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-train-your-own-sdr-neural-network?u=76281980&t=26)** Now, my dataset is the very minimum.
>
> **[0:30](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-train-your-own-sdr-neural-network?u=76281980&t=30)** We'll simple train the network with the 10 ideal patterns.
>
> **[0:34](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-train-your-own-sdr-neural-network?u=76281980&t=34)** So you may add your own patterns if you want.
>
> **[0:38](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-train-your-own-sdr-neural-network?u=76281980&t=38)** Train the network for a large number of epochs.
>
> **[0:41](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-train-your-own-sdr-neural-network?u=76281980&t=41)** Something between 1,000 and 3,000 epochs will do the trick.
>
> **[0:46](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-train-your-own-sdr-neural-network?u=76281980&t=46)** Just like the XOR training challenge, we will not use the validation or test phases.
>
> **[0:52](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-train-your-own-sdr-neural-network?u=76281980&t=52)** Finally, test the neural network with your own samples.
>
> **[0:57](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-train-your-own-sdr-neural-network?u=76281980&t=57)** Do this in the text terminal to keep it quick and simple.
>
> **[1:01](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-train-your-own-sdr-neural-network?u=76281980&t=61)** Now, after I show you the text-based solution for this challenge, I will show you three separate applications that implement the three neural networks we saw earlier using sliders, buttons and other GUI controls.
>
> **[1:16](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-train-your-own-sdr-neural-network?u=76281980&t=76)** And you'll have the chance to use your neural network in these demos if you'd like.
>
> **[1:22](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-train-your-own-sdr-neural-network?u=76281980&t=82)** So remember, you are only expected to test your neural network in the terminal.
>
> **[1:27](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-train-your-own-sdr-neural-network?u=76281980&t=87)** That said, if you would still like to make your own GUI, please feel free to do so.
>
> **[1:35](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-train-your-own-sdr-neural-network?u=76281980&t=95)** So as usual, I have prepared some testing code at the bottom.
>
> **[1:39](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-train-your-own-sdr-neural-network?u=76281980&t=99)** Here you should be ready to write your own code but I have provided the very minimum training set for the three models I showed you in case you decided to implement one of them.
>
> **[1:51](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-train-your-own-sdr-neural-network?u=76281980&t=111)** Be aware that these code snippets aren't functional on their own.
>
> **[1:55](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-train-your-own-sdr-neural-network?u=76281980&t=115)** So you'll have to write the missing code if you want to use them.
>
> **[2:00](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-train-your-own-sdr-neural-network?u=76281980&t=120)** If not, feel free to delete them from this file.
>
> **[2:05](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-train-your-own-sdr-neural-network?u=76281980&t=125)** So starting at line 124, we have a piece of code you may use to train the seven to one neural network.
>
> **[2:13](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-train-your-own-sdr-neural-network?u=76281980&t=133)** Notice that the patterns in the input are entered with zeros and ones.
>
> **[2:18](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-train-your-own-sdr-neural-network?u=76281980&t=138)** Pick a moment to read these lines and verify that each sample corresponds to the number in the comment at the right.
>
> **[2:26](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-train-your-own-sdr-neural-network?u=76281980&t=146)** So for the labels, notice that I'm assigning each pattern to the midpoint of its intended bucket.
>
> **[2:32](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-train-your-own-sdr-neural-network?u=76281980&t=152)** For example, the pattern for seven is mapped to 0.75.
>
> **[2:41](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-train-your-own-sdr-neural-network?u=76281980&t=161)** Stating at line 140, we have the patterns for the 7 to 10 neural network.
>
> **[2:47](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-train-your-own-sdr-neural-network?u=76281980&t=167)** The patterns are the same as before but notice the nice identity matrix look of the labels.
>
> **[2:54](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-train-your-own-sdr-neural-network?u=76281980&t=174)** That's how one hot encoding looks like.
>
> **[2:57](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-train-your-own-sdr-neural-network?u=76281980&t=177)** No pun intended.
>
> **[3:01](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-train-your-own-sdr-neural-network?u=76281980&t=181)** Finally, starting at line 156, we have the simplistic dataset for the seven to seven neural network.
>
> **[3:09](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-train-your-own-sdr-neural-network?u=76281980&t=189)** Again, at first glance, it looks silly to assign the same input values to the outputs.
>
> **[3:15](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-train-your-own-sdr-neural-network?u=76281980&t=195)** But I actually find it very interesting.
>
> **[3:18](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-train-your-own-sdr-neural-network?u=76281980&t=198)** You'll see why in the next videos.
>
> **[3:21](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-train-your-own-sdr-neural-network?u=76281980&t=201)** This shouldn't take you much longer than 15 minutes.
>
> **[3:24](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-train-your-own-sdr-neural-network?u=76281980&t=204)** So go train that network and come back to see my text-based solution, followed by three demo programs with a hopefully nice GUI.

> [!info]- Semantic Content
>
> **Env Vars:** gui (3), xor (1)
> **Code Keywords:** finally, (2), delete (1)
> **CLI Commands:** make (1), find (1)
> **Tools:** terminal (2)
> **Analogies:** just like (1), for example (1)
> **Versions:** 0.75 (1)
> **Cross-References:** in the next (1)
> **Warnings:** be aware (1)

#### Solution: Train your own SDR neural network
> [LinkedIn Learning](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-train-your-own-sdr-neural-network?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-train-your-own-sdr-neural-network?u=76281980&t=0)** - Let's see my solution.
>
> **[0:09](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-train-your-own-sdr-neural-network?u=76281980&t=9)** This program will train each of the three systems and then it will read an array of seven floats from the terminal to show us the outputs.
>
> **[0:18](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-train-your-own-sdr-neural-network?u=76281980&t=18)** In line 121, we are obtaining the number of epochs from the user.
>
> **[0:24](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-train-your-own-sdr-neural-network?u=76281980&t=24)** Then we initialize mlp1 as the seven to one system, mlp2 as the seven to ten system and mlp3 as the seven to seven system.
>
> **[0:36](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-train-your-own-sdr-neural-network?u=76281980&t=36)** Next, we have the provided training code for mlp1
>
> **[0:49](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-train-your-own-sdr-neural-network?u=76281980&t=49)** then for mlp2, and for mlp3.
>
> **[1:01](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-train-your-own-sdr-neural-network?u=76281980&t=61)** Then starting at line 176, we have a loop where the input pattern is read from the terminal.
>
> **[1:10](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-train-your-own-sdr-neural-network?u=76281980&t=70)** The array must be entered as a series of exactly seven values corresponding to the segments A, B, C, D, E, F, and G all separated by spaces.
>
> **[1:24](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-train-your-own-sdr-neural-network?u=76281980&t=84)** When a negative value is entered, the program ends.
>
> **[1:30](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-train-your-own-sdr-neural-network?u=76281980&t=90)** So the body of the loop prints an interpreted version of the output for each system.
>
> **[1:35](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-train-your-own-sdr-neural-network?u=76281980&t=95)** Look at line 182 for the output of the seven to one system.
>
> **[1:40](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-train-your-own-sdr-neural-network?u=76281980&t=100)** Notice that I'm multiplying the neural networks output by 10 and then printing the truncated version of that number.
>
> **[1:48](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-train-your-own-sdr-neural-network?u=76281980&t=108)** That is an integer between zero and nine.
>
> **[1:52](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-train-your-own-sdr-neural-network?u=76281980&t=112)** In line 185, we have the output of the one hot encoded seven to 10 system.
>
> **[1:58](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-train-your-own-sdr-neural-network?u=76281980&t=118)** Here I'm printing the index of the highest value in the network's output.
>
> **[2:03](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-train-your-own-sdr-neural-network?u=76281980&t=123)** This is easily achieved with the arg max function.
>
> **[2:07](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-train-your-own-sdr-neural-network?u=76281980&t=127)** And for the seven to seven system in line 188, I'm printing around that version of the output array.
>
> **[2:15](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-train-your-own-sdr-neural-network?u=76281980&t=135)** So, we will only see zeros and ones.
>
> **[2:19](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-train-your-own-sdr-neural-network?u=76281980&t=139)** Let's see it all working.
>
> **[2:23](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-train-your-own-sdr-neural-network?u=76281980&t=143)** First, we are asked for the number of epochs to train the neural networks.
>
> **[2:28](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-train-your-own-sdr-neural-network?u=76281980&t=148)** Let me enter 3000.
>
> **[2:33](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-train-your-own-sdr-neural-network?u=76281980&t=153)** Now, we wait.
>
> **[2:35](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-train-your-own-sdr-neural-network?u=76281980&t=155)** Remember that each system is being trained for thousands of epochs, so this will take a while.
>
> **[2:42](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-train-your-own-sdr-neural-network?u=76281980&t=162)** Now, we get to enter patterns to the three neural networks.
>
> **[2:46](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-train-your-own-sdr-neural-network?u=76281980&t=166)** Let's start with an easy one.
>
> **[2:48](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-train-your-own-sdr-neural-network?u=76281980&t=168)** The pattern for number one is 0110000.
>
> **[2:56](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-train-your-own-sdr-neural-network?u=76281980&t=176)** There you have it, the seven to one network recognized number one.
>
> **[3:01](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-train-your-own-sdr-neural-network?u=76281980&t=181)** The seven to 10 system recognized one as well, and the seven to seven system outputs the same input pattern.
>
> **[3:09](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-train-your-own-sdr-neural-network?u=76281980&t=189)** Let's see it again with a pattern that's not in the training set.
>
> **[3:14](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-train-your-own-sdr-neural-network?u=76281980&t=194)** I'll enter a variation of number seven.
>
> **[3:16](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-train-your-own-sdr-neural-network?u=76281980&t=196)** That is three ones followed by four zeros, but I'll enter nearly ones and nearly zeros instead.
>
> **[3:26](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-train-your-own-sdr-neural-network?u=76281980&t=206)** Like this.
>
> **[3:30](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-train-your-own-sdr-neural-network?u=76281980&t=210)** And there you have it, all three systems recognized number seven.
>
> **[3:35](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-train-your-own-sdr-neural-network?u=76281980&t=215)** Now, let's deviate a bit more.
>
> **[3:39](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-train-your-own-sdr-neural-network?u=76281980&t=219)** As you can see, they are all recognizing number seven.
>
> **[3:44](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-train-your-own-sdr-neural-network?u=76281980&t=224)** Feel free to try different patterns and tweak the code.
>
> **[3:47](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-train-your-own-sdr-neural-network?u=76281980&t=227)** I understand if you are not having much fun with this example, this is a visual system so a GUI application is more appropriate, and that's what we are going to see in the next videos.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), function (1), while. (1), this. (1)
> **Tools:** terminal (2)
> **Definitions:** is an  (1), is a  (1)
> **Env Vars:** gui (1)
> **Cross-References:** in the next (1)
> **Speakers:** - let (1)
> **Non-Speech:** (upbeat music) (1)

#### 7 to 1 network GUI demo
> [LinkedIn Learning](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-1-network-gui-demo?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-1-network-gui-demo?u=76281980&t=0)** - I wrote three applications for our segment display recognition neural network, all with a graphical user interface to allow you to see the neural network working as you tweak the input values.
>
> **[0:14](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-1-network-gui-demo?u=76281980&t=14)** Please note that you cannot run these demos in the GitHub code space because of the gooey elements.
>
> **[0:21](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-1-network-gui-demo?u=76281980&t=21)** So if you'd like to follow along, you'll need to have Python installed in your computer, along with Non-py and TK inter.
>
> **[0:30](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-1-network-gui-demo?u=76281980&t=30)** What you are seeing right now is my local installation of Visual Studio Code.
>
> **[0:35](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-1-network-gui-demo?u=76281980&t=35)** The source files are called SDRNN_7to1, SDRNN_7to10, and SDRNN_7to7.py respectively and they all import MLP.py, so you may try your own neural network with them.
>
> **[0:56](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-1-network-gui-demo?u=76281980&t=56)** For your convenience, all these files are included in the code for the three demo videos.
>
> **[1:02](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-1-network-gui-demo?u=76281980&t=62)** If you would like to read through these source files, be advised that they contain a lot of code to implement the graphical stuff, so you may be interested in two functions that deal with the neural network.
>
> **[1:15](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-1-network-gui-demo?u=76281980&t=75)** These functions are present in all three implementations.
>
> **[1:22](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-1-network-gui-demo?u=76281980&t=82)** The first one is called train callback and that's where the back propagation happens.
>
> **[1:27](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-1-network-gui-demo?u=76281980&t=87)** You can see it here starting at line 73.
>
> **[1:32](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-1-network-gui-demo?u=76281980&t=92)** The second one is called run.ann and that's where the neural network is run once every time the user changes the input controls.
>
> **[1:42](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-1-network-gui-demo?u=76281980&t=102)** I'd rather show you the rest in the running application.
>
> **[1:45](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-1-network-gui-demo?u=76281980&t=105)** Let's start with the 7 to 1 model.
>
> **[1:49](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-1-network-gui-demo?u=76281980&t=109)** So first, let me tell you about the user interface.
>
> **[1:53](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-1-network-gui-demo?u=76281980&t=113)** At the left, I created a set of seven sliders to act as the segments in the input. Moving them causes their color to simulate becoming brighter.
>
> **[2:03](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-1-network-gui-demo?u=76281980&t=123)** At the right we have parameters and results.
>
> **[2:07](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-1-network-gui-demo?u=76281980&t=127)** You may enter the number of Epochs to train next which will happen when you press the button.
>
> **[2:12](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-1-network-gui-demo?u=76281980&t=132)** Then as a result, the application displaced the last reported training error, the number of Epochs trained so far, the raw output value, and finally the recognized number in a big, bold font.
>
> **[2:28](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-1-network-gui-demo?u=76281980&t=148)** So let me train this network in steps of 100 epochs.
>
> **[2:32](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-1-network-gui-demo?u=76281980&t=152)** Pay attention to the training error as it drops.
>
> **[2:45](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-1-network-gui-demo?u=76281980&t=165)** I'll keep training until the error drops below 0.0001.
>
> **[2:52](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-1-network-gui-demo?u=76281980&t=172)** In other words, when it reaches four zeros to the right of the decimal point.
>
> **[3:00](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-1-network-gui-demo?u=76281980&t=180)** As you can see I have trained this network for 1700 epochs.
>
> **[3:05](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-1-network-gui-demo?u=76281980&t=185)** Now, none of these applications has a valid excuse for not recognizing a trained pattern.
>
> **[3:12](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-1-network-gui-demo?u=76281980&t=192)** So all numbers from zero to nine must be correctly recognized.
>
> **[3:18](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-1-network-gui-demo?u=76281980&t=198)** Let me show you a few patterns.
>
> **[3:20](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-1-network-gui-demo?u=76281980&t=200)** Here's number one,
>
> **[3:30](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-1-network-gui-demo?u=76281980&t=210)** here's number four,
>
> **[3:40](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-1-network-gui-demo?u=76281980&t=220)** and number nine.
>
> **[3:49](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-1-network-gui-demo?u=76281980&t=229)** Not recognizing either of them would've been unacceptable.
>
> **[3:54](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-1-network-gui-demo?u=76281980&t=234)** Okay, recall I mentioned something wrong about this model.
>
> **[3:57](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-1-network-gui-demo?u=76281980&t=237)** Now let me show you what that is.
>
> **[4:00](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-1-network-gui-demo?u=76281980&t=240)** Let me enter number seven.
>
> **[4:08](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-1-network-gui-demo?u=76281980&t=248)** Yes, it's classified correctly but now let me change the input values from total zeros and ones to nearly zeros and nearly ones, and let's see what happens.
>
> **[4:26](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-1-network-gui-demo?u=76281980&t=266)** Does this look more like a six than a seven?
>
> **[4:46](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-1-network-gui-demo?u=76281980&t=286)** How about this?
>
> **[4:53](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-1-network-gui-demo?u=76281980&t=293)** And this does not look like a five at all.
>
> **[4:57](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-1-network-gui-demo?u=76281980&t=297)** With this behavior, we are witnessing a system that is not very good at generalizing.
>
> **[5:03](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-1-network-gui-demo?u=76281980&t=303)** Now, let me show you something worse.
>
> **[5:16](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-1-network-gui-demo?u=76281980&t=316)** Here we have the pattern for number zero recognized correctly but let me slowly change the middle segment to turn this zero into an eight and back.
>
> **[5:28](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-1-network-gui-demo?u=76281980&t=328)** Pay attention to the output number as I move the slider.
>
> **[5:31](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-1-network-gui-demo?u=76281980&t=331)** Watch closely.
>
> **[5:49](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-1-network-gui-demo?u=76281980&t=349)** Did you see that?
>
> **[5:50](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-1-network-gui-demo?u=76281980&t=350)** Now, ask yourself, is it necessary to go through 1, 2, 3 all the way to eight?
>
> **[5:56](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-1-network-gui-demo?u=76281980&t=356)** Does changing the brightness of the middle segment make the pattern look more like a four or like a five?
>
> **[6:03](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-1-network-gui-demo?u=76281980&t=363)** Of course not.
>
> **[6:05](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-1-network-gui-demo?u=76281980&t=365)** Our neural network was forced to satisfy that constraint and in doing so it has sacrificed its ability to generalize.
>
> **[6:14](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-1-network-gui-demo?u=76281980&t=374)** That does not look good for a neural network at all.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), interface (2)
> **Definitions:** is called (2), in other words (1)
> **File Paths:** sdrnn_7to7.py (1), mlp.py (1)
> **CLI Commands:** python (1), make (1)
> **Tools:** github (1), visual studio (1)
> **Env Vars:** mlp (1)
> **Versions:** 0.0001 (1)
> **Warnings:** note that (1)

#### 7 to 10 network GUI demo
> [LinkedIn Learning](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-10-network-gui-demo?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-10-network-gui-demo?u=76281980&t=0)** - [Instructor] All right.
>
> **[0:01](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-10-network-gui-demo?u=76281980&t=1)** Now let's look at the one hot and coding model, the seven to 10 network.
>
> **[0:06](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-10-network-gui-demo?u=76281980&t=6)** Notice that we have the same controls except for the raw output, which is now showing us 10 raw outputs.
>
> **[0:14](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-10-network-gui-demo?u=76281980&t=14)** That is one output per class.
>
> **[0:17](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-10-network-gui-demo?u=76281980&t=17)** So remember, the output with the highest value will be the one reported as the recognized number.
>
> **[0:24](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-10-network-gui-demo?u=76281980&t=24)** Let me train this network for 1000 epochs.
>
> **[0:31](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-10-network-gui-demo?u=76281980&t=31)** So again, let's see if it recognizes number three correctly.
>
> **[0:49](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-10-network-gui-demo?u=76281980&t=49)** How about number five?
>
> **[0:57](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-10-network-gui-demo?u=76281980&t=57)** Now, let's see, number seven.
>
> **[1:09](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-10-network-gui-demo?u=76281980&t=69)** So far, so good.
>
> **[1:10](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-10-network-gui-demo?u=76281980&t=70)** Let's see how tolerant to small changes this classifier is.
>
> **[1:28](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-10-network-gui-demo?u=76281980&t=88)** As you can see, I am entering nearly zeros and nearly ones.
>
> **[1:38](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-10-network-gui-demo?u=76281980&t=98)** And the recognized number remained a solid seven.
>
> **[1:42](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-10-network-gui-demo?u=76281980&t=102)** So as you can see, this is way more tolerant than the seven to one network.
>
> **[1:47](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-10-network-gui-demo?u=76281980&t=107)** And now for the zero to eight and back test, let me set up the segment.
>
> **[2:03](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-10-network-gui-demo?u=76281980&t=123)** Here, we have the pattern for zero.
>
> **[2:06](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-10-network-gui-demo?u=76281980&t=126)** Now, before I slide the middle segment remember that there's no reason for the output to show anything other than zero and eight.
>
> **[2:15](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-10-network-gui-demo?u=76281980&t=135)** So let's see it.
>
> **[2:37](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-10-network-gui-demo?u=76281980&t=157)** There you have it.
>
> **[2:38](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-10-network-gui-demo?u=76281980&t=158)** So, now it feels like we are using a neural network free from the shackles of a forced sequence in the trained patterns.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), class. (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### 7 to 7 network GUI demo
> [LinkedIn Learning](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-7-network-gui-demo?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-7-network-gui-demo?u=76281980&t=0)** - Lastly, let's look at the seven to seven network.
>
> **[0:04](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-7-network-gui-demo?u=76281980&t=4)** Now, I'm not showing the raw outputs any longer but another set of sliders simulating an actual LED seven segment display.
>
> **[0:13](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-7-network-gui-demo?u=76281980&t=13)** This display will show us what the neural network infers from the input.
>
> **[0:18](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-7-network-gui-demo?u=76281980&t=18)** Again, if the input is a valid pattern, then there is no excuse for outputting anything other than that pattern because the neural network is very well trained.
>
> **[0:29](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-7-network-gui-demo?u=76281980&t=29)** The interesting part is the output we get when we enter an invalid pattern.
>
> **[0:35](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-7-network-gui-demo?u=76281980&t=35)** Let me train the network for 2000 epochs.
>
> **[0:44](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-7-network-gui-demo?u=76281980&t=44)** Once again, let me test the networks to see if it's working correctly.
>
> **[0:49](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-7-network-gui-demo?u=76281980&t=49)** So let's enter number two.
>
> **[1:01](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-7-network-gui-demo?u=76281980&t=61)** Then number six.
>
> **[1:13](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-7-network-gui-demo?u=76281980&t=73)** And finally number one.
>
> **[1:28](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-7-network-gui-demo?u=76281980&t=88)** Great.
>
> **[1:29](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-7-network-gui-demo?u=76281980&t=89)** And now I want to show you a nice example of how the neural network struggles to get the incoming pattern right.
>
> **[1:37](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-7-network-gui-demo?u=76281980&t=97)** I'll show you an invalid pattern now.
>
> **[1:47](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-7-network-gui-demo?u=76281980&t=107)** The pattern at the left is very special because depending on the state of the bottom left and the bottom right segments, it could be two or three.
>
> **[1:57](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-7-network-gui-demo?u=76281980&t=117)** If both segments are on, the pattern is invalid as well as when both segments are off.
>
> **[2:04](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-7-network-gui-demo?u=76281980&t=124)** So at this point, both segments are off and the output is showing something that looks more like a three than a two.
>
> **[2:12](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-7-network-gui-demo?u=76281980&t=132)** But notice as I slowly increase the brightness of the leftmost segment, the output becomes more confident of seeing a two and less confident of seeing a three.
>
> **[2:24](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-7-network-gui-demo?u=76281980&t=144)** So you will see those two sliders at the right go in opposite directions.
>
> **[2:38](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-7-network-gui-demo?u=76281980&t=158)** In fact, whenever I move either of those sliders, the sliders at the right will be having a tug of war towards the correct pattern.
>
> **[3:08](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-7-network-gui-demo?u=76281980&t=188)** Like I said, the interesting part is the output we get when we enter an invalid or rather an incomplete pattern.
>
> **[3:17](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-7-network-gui-demo?u=76281980&t=197)** This behavior is similar to a text completion application.
>
> **[3:21](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-7-network-gui-demo?u=76281980&t=201)** For example, if I turn every segment off, it suggests something that looks like a nine
>
> **[3:34](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-7-network-gui-demo?u=76281980&t=214)** or maybe a four.
>
> **[3:36](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-7-network-gui-demo?u=76281980&t=216)** Now let me turn on segment B.
>
> **[3:41](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-7-network-gui-demo?u=76281980&t=221)** It looks to me like a one and slightly as a seven.
>
> **[3:50](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-7-network-gui-demo?u=76281980&t=230)** Now let's see what happens when I turn on the top left segment.
>
> **[3:57](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-7-network-gui-demo?u=76281980&t=237)** This incomplete pattern seems to make our neural network think of number four.
>
> **[4:03](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-7-network-gui-demo?u=76281980&t=243)** So that's it for the demos.
>
> **[4:05](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-7-network-gui-demo?u=76281980&t=245)** Now, I don't expect these videos to be enough for you.
>
> **[4:09](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-7-network-gui-demo?u=76281980&t=249)** So if you are following along go ahead and play around with these three systems hopefully with your own version of MLP dot pi.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6)
> **Env Vars:** led (1), mlp (1)
> **Analogies:** similar to (1), for example (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - lastly (1)


### Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/next-steps?u=76281980&t=0)** - [Eduardo] So that's it.
>
> **[0:01](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/next-steps?u=76281980&t=1)** I hope you had fun learning how to use Python to create neural networks.
>
> **[0:06](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/next-steps?u=76281980&t=6)** Of course, there's so much more you can learn about neural networks, so as next steps, I suggest the following.
>
> **[0:12](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/next-steps?u=76281980&t=12)** Put your models to the test by using training, validation, and testing datasets.
>
> **[0:18](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/next-steps?u=76281980&t=18)** Assess your neural networks for usual problems like overfitting and underfitting.
>
> **[0:24](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/next-steps?u=76281980&t=24)** Experiment with more hidden layers and with more or less neurons per layer, and you may want to try all of these things with a readily available neural network tool like TensorFlow or PyTorch instead of writing the code by yourself.
>
> **[0:39](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/next-steps?u=76281980&t=39)** Thank you for taking the course.
>
> **[0:41](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/next-steps?u=76281980&t=41)** Now I'll leave you to get to work on your next neural network application.
>
> **[0:45](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/next-steps?u=76281980&t=45)** Till next time.

> [!info]- Semantic Content
>
> **CLI Commands:** python (1)
> **Speakers:** - [eduardo] (1)


## Path Context

### In [[Fundamentals to Become a Machine Learning Engineer]]
← [[Reinforcement Learning Foundations]] | **7 of 7**

### In [[Advance Your Skills in AI and Machine Learning]]
← [[Introduction to Attention-Based Neural Networks]] | **5 of 16** | [[Introduction to Generative Adversarial Networks (GANs)]] →

## Appears In

- [[Fundamentals to Become a Machine Learning Engineer]]
- [[Advance Your Skills in AI and Machine Learning]]

## Related Courses

_Courses sharing skills:_

- [[Advanced Python in Excel- Machine Learning]] — Python (Programming Language), Artificial Intelligence (AI)
- [[Hands-On AI- Image Processing with Python]] — Python (Programming Language), Artificial Intelligence (AI)
- [[Introduction to Attention-Based Neural Networks]] — Artificial Intelligence (AI), Neural Networks
- [[Advanced Python Projects- Build AI Applications]] — Python (Programming Language), Artificial Intelligence (AI)
- [[Machine Learning with Python- Association Rules]] — Python (Programming Language), Artificial Intelligence (AI)
