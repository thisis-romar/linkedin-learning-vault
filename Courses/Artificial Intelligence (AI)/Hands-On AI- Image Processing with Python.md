---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: hands-on-ai-image-processing-with-python
url: "https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python"
duration_minutes: 130
duration: 2h 10m
level: Intermediate
updated: 6/16/2025
learners: 35685
skills:
  - Image Processing
  - Python (Programming Language)
  - Artificial Intelligence (AI)
  - Computer Vision
exercise_files: true
github: "https://github.com/LinkedInLearning/hands-on-ai-image-processing-with-python-4001236/codespaces"
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQFGuLG0_BvB7w/learning-public-crop_675_1200/B4EZdlJCsLGcAc-/0/1749748558953?e=2147483647&amp;v=beta&amp;t=GwP95RSMdaJECVUjyGsOXH_EOlGrjnEeB7OIi-jKN5o"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Getting Started with AI and Machine Learning]]'
prev_courses:
  - '[[Deep Learning Getting Started]]'
next_courses:
  - '[[Reinforcement Learning Foundations]]'
path_nav: '[{"path":"Getting Started with AI and Machine Learning","position":4,"total":7,"prev":"Deep Learning Getting Started","next":"Reinforcement Learning Foundations"}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - skill/image-processing
  - skill/python-programming-language
  - skill/artificial-intelligence-ai
  - skill/computer-vision
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Hands-On%20AI-%20Image%20Processing%20with%20Python.md)

![Hands-On AI: Image Processing with Python](https://media.licdn.com/dms/image/v2/D4E0DAQFGuLG0_BvB7w/learning-public-crop_675_1200/B4EZdlJCsLGcAc-/0/1749748558953?e=2147483647&amp;v=beta&amp;t=GwP95RSMdaJECVUjyGsOXH_EOlGrjnEeB7OIi-jKN5o)

# Hands-On AI: Image Processing with Python

> In this course, Eduardo Corpeño—an electrical engineer, computer programmer, and teacher—helps you build a solid foundation in image processing using Python. Begin by creating and manipulating raster images in different resolutions and formats. Learn to apply various filters and delve into edge detection with Sobel filters to extract meaningful image features. Master image transformations like res

> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python) | 2h 10m | Intermediate | 36K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - Computer vision under the hood
  - What you should know
  - Using the exercise files
- [**1. Setting Up Our Development Environment**](#1-setting-up-our-development-environment) (2 videos)
  - Testing your environment
  - Maintaining a clean notebook workspace
- [**2. The Basics of Image Processing**](#2-the-basics-of-image-processing) (7 videos)
  - Image representation
  - Color encoding
  - Image file management
  - Resolution
  - Rotations and flips
  - Challenge: Manipulate pictures
  - Solution: Manipulate pictures
- [**3. From Color to Black and White**](#3-from-color-to-black-and-white) (6 videos)
  - Average grayscale
  - Weighted grayscale
  - Converting grayscale to black and white
  - Adaptive thresholding
  - Challenge: Removing color
  - Solution: Removing color
- [**4. Filters**](#4-filters) (7 videos)
  - Convolution filters
  - Average filters
  - Median filters
  - Gaussian filters
  - Edge-detection filters
  - Challenge: Convolution filters
  - Solution: Convolution filters
- [**5. Image Scaling**](#5-image-scaling) (6 videos)
  - Image downscaling methods
  - Downscaling example
  - Image upscaling methods
  - Upscaling example
  - Challenge: Resize a picture
  - Solution: Resize a picture
- [**6. Fun with Cuts**](#6-fun-with-cuts) (5 videos)
  - Image cuts
  - Stitching two images together
  - Cuts in panoramic photography
  - Challenge: Stitch two pictures together
  - Solution: Stitch two pictures together
- [**7. Morphological Modifications**](#7-morphological-modifications) (5 videos)
  - Why modify objects?
  - Erosion and dilation
  - Open and close
  - Challenge: Help a robot
  - Solution: Help a robot
- [**Conclusion**](#conclusion) (1 videos)
  - Next steps

### Introduction

> [↑ Back to Table of Contents](#table-of-contents)

#### Computer vision under the hood
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/computer-vision-under-the-hood?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/computer-vision-under-the-hood?u=76281980&t=0)** - [Eduardo] Image processing is all around us, from social media filters to smartphone cameras and QR code scanners.
>
> **[0:08](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/computer-vision-under-the-hood?u=76281980&t=8)** Whether you are just starting or looking to revisit the fundamentals behind tools like OpenCV, Photoshop, or MATLAB, this course is for you.
>
> **[0:18](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/computer-vision-under-the-hood?u=76281980&t=18)** By understanding how the algorithms work under the hood, you'll be better equipped to use advanced libraries in real-world projects.
>
> **[0:27](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/computer-vision-under-the-hood?u=76281980&t=27)** And the best part, we'll be using GitHub Codespaces, so there is no setup required.
>
> **[0:33](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/computer-vision-under-the-hood?u=76281980&t=33)** I'm Eduardo Corpeño, and I'd like to invite you to take this course where we will build key image processing operations from scratch using Python.
>
> **[0:42](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/computer-vision-under-the-hood?u=76281980&t=42)** So come join me.
>
> **[0:43](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/computer-vision-under-the-hood?u=76281980&t=43)** Let's explore image processing together on LinkedIn Learning.

> [!info]- Semantic Content
>
> **CLI Commands:** python (1)
> **Code Keywords:** let (1)
> **Env Vars:** matlab (1)
> **Tools:** github (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [eduardo] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/what-you-should-know?u=76281980&t=0)** - [Instructor] Before we start, there are some things you should know.
>
> **[0:04](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/what-you-should-know?u=76281980&t=4)** First, the objective of this course is for you to learn image processing.
>
> **[0:10](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/what-you-should-know?u=76281980&t=10)** We will not create a computer vision library or use a professional library like OpenCV in depth.
>
> **[0:17](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/what-you-should-know?u=76281980&t=17)** Instead, I will introduce you to the basic concepts and some of the most popular algorithms in computer vision and computational photography.
>
> **[0:28](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/what-you-should-know?u=76281980&t=28)** Once you've acquired this knowledge, you'll make better use of image processing tools in the future.
>
> **[0:36](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/what-you-should-know?u=76281980&t=36)** Every code example you'll see in this course is written in Python 3 and runs inside a Jupyter Notebook.
>
> **[0:43](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/what-you-should-know?u=76281980&t=43)** So you should feel comfortable with this programming language and platform.
>
> **[0:49](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/what-you-should-know?u=76281980&t=49)** If you are not very experienced in Python, I recommend that you consider taking an introductory course from our library, like the one titled, "[[Python Essential Training]]".
>
> **[1:00](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/what-you-should-know?u=76281980&t=60)** Or if you are new to Jupyter Notebooks, you will probably catch the basics from this course but if you'd like to learn more, I recommend the course titled, "Introducing Jupyter".
>
> **[1:13](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/what-you-should-know?u=76281980&t=73)** And lastly, there is no setup required to get your system up and running, as we will use GitHub code spaces.
>
> **[1:21](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/what-you-should-know?u=76281980&t=81)** However, if you prefer to download the code and use it in your local setting, all you need is the Anaconda distribution and OpenCV for Python 3.

> [!info]- Semantic Content
>
> **CLI Commands:** python (4), make (1)
> **Tools:** jupyter (3), github (1), anaconda (1)
> **Versions:** python 3 (2)
> **Prerequisites:** before we start (1), setup (1)
> **Exercise Files:** download the (1)
> **Speakers:** - [instructor] (1)

#### Using the exercise files
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/using-the-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/using-the-exercise-files?u=76281980&t=0)** - [Instructor] Let me show you how to find the exercise files on GitHub.
>
> **[0:05](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/using-the-exercise-files?u=76281980&t=5)** To work with this code you have a few options.
>
> **[0:08](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/using-the-exercise-files?u=76281980&t=8)** If you want to download the code and use it in your favorite ID, you may do so by clicking on the green code button.
>
> **[0:16](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/using-the-exercise-files?u=76281980&t=16)** You'll need to install the Anaconda distribution and open CV for Python 3.
>
> **[0:22](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/using-the-exercise-files?u=76281980&t=22)** However, I recommend following the exercises using GitHub Codespaces, a cloud-based IDE you may use with this course.
>
> **[0:31](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/using-the-exercise-files?u=76281980&t=31)** Since this repository is owned by LinkedIn, you cannot push any changes to it.
>
> **[0:37](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/using-the-exercise-files?u=76281980&t=37)** So I recommend that you create your own copy of the repository on your GitHub account so you can keep any changes you make, even if you later decide to delete a Codespace.
>
> **[0:51](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/using-the-exercise-files?u=76281980&t=51)** To create your own copy of the repository, you can click on the fork button.
>
> **[0:58](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/using-the-exercise-files?u=76281980&t=58)** Then review the name and description of your fork, keep the checkbox checked and click on create fork.
>
> **[1:09](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/using-the-exercise-files?u=76281980&t=69)** Now you have your own copy of the repository where you can start a new Codespace.
>
> **[1:15](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/using-the-exercise-files?u=76281980&t=75)** All you need to do is click on the code button.
>
> **[1:19](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/using-the-exercise-files?u=76281980&t=79)** Then under the Codespaces tab, you can start a new Codespace or open an existing one.
>
> **[1:26](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/using-the-exercise-files?u=76281980&t=86)** I'll create a new one.
>
> **[1:30](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/using-the-exercise-files?u=76281980&t=90)** Setting up the Codespace may take a while.
>
> **[1:35](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/using-the-exercise-files?u=76281980&t=95)** Once started, you will see a cloud version of Visual Studio Code with your repository as an open folder.
>
> **[1:43](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/using-the-exercise-files?u=76281980&t=103)** At the left, we can see all the files.
>
> **[1:46](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/using-the-exercise-files?u=76281980&t=106)** This is a single branch repository, so you can find the code related to each video under the exercises folder.
>
> **[1:55](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/using-the-exercise-files?u=76281980&t=115)** The source folders are named with the chapter number followed by the video number.
>
> **[2:01](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/using-the-exercise-files?u=76281980&t=121)** For example, let me show you the exercises for Chapter four.
>
> **[2:06](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/using-the-exercise-files?u=76281980&t=126)** And let's say we want to see the exercise file for the fifth video in Chapter four.
>
> **[2:13](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/using-the-exercise-files?u=76281980&t=133)** All main sources in the course are Jupyter Notebooks with the "ipynb" extension.
>
> **[2:22](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/using-the-exercise-files?u=76281980&t=142)** These are all notebooks that guide you through the topics in the course.
>
> **[2:27](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/using-the-exercise-files?u=76281980&t=147)** Visual Studio Code is already set up for you to run your code.
>
> **[2:32](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/using-the-exercise-files?u=76281980&t=152)** Now let me show you how to push your changes to your repository.
>
> **[2:37](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/using-the-exercise-files?u=76281980&t=157)** Let me add some text to the comment in line one in this source file, so it's modified.
>
> **[2:45](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/using-the-exercise-files?u=76281980&t=165)** Now let me save the file.
>
> **[2:49](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/using-the-exercise-files?u=76281980&t=169)** You can do this with a shortcut like CTRL+S.
>
> **[2:55](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/using-the-exercise-files?u=76281980&t=175)** And now you'll notice that there is an M at the right of the file name, as well as an asterisk on the main branch at the bottom, and a number in the source control button at the left.
>
> **[3:11](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/using-the-exercise-files?u=76281980&t=191)** These are all indicators that there are changes in the repository.
>
> **[3:16](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/using-the-exercise-files?u=76281980&t=196)** Now let me open the source control panel.
>
> **[3:20](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/using-the-exercise-files?u=76281980&t=200)** In here you can also see that one file was changed.
>
> **[3:24](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/using-the-exercise-files?u=76281980&t=204)** This is the one we just modified.
>
> **[3:27](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/using-the-exercise-files?u=76281980&t=207)** Clicking on it will show us the changes in the code section.
>
> **[3:32](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/using-the-exercise-files?u=76281980&t=212)** So let me stage the changes for this file by clicking on the plus sign next to the file name.
>
> **[3:40](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/using-the-exercise-files?u=76281980&t=220)** Next, I'll type a commit message.
>
> **[3:44](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/using-the-exercise-files?u=76281980&t=224)** And now instead of pressing the commit button, I will click on the down arrow and select commit and push.
>
> **[3:54](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/using-the-exercise-files?u=76281980&t=234)** There, your changes have been pushed to your repository.
>
> **[3:58](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/using-the-exercise-files?u=76281980&t=238)** The first time you may be asked if you want VS Code to run fetch periodically.
>
> **[4:05](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/using-the-exercise-files?u=76281980&t=245)** Click yes and it will automatically sync with your repo.
>
> **[4:09](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/using-the-exercise-files?u=76281980&t=249)** And remember, if you close the browser, you don't need to start a new Codespace.
>
> **[4:15](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/using-the-exercise-files?u=76281980&t=255)** You can simply reopen the existing Codespace from GitHub and you will see your session right where you left it.
>
> **[4:23](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/using-the-exercise-files?u=76281980&t=263)** So that's it.
>
> **[4:24](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/using-the-exercise-files?u=76281980&t=264)** Try Codespaces and enjoy coding in your browser without having to install anything.
>
> **[4:30](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/using-the-exercise-files?u=76281980&t=270)** Great, we are good to go.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), delete (1), while. (1)
> **Tools:** github (4), visual studio (2), anaconda (1), jupyter (1), vs code (1)
> **UI Navigation:** click on (4), checkbox (1), open the (1)
> **CLI Commands:** find (2), python (1), make (1)
> **Prerequisites:** install (2), you'll need (1), set up (1)
> **Exercise Files:** exercise files (1), download the (1), exercise file (1)
> **Env Vars:** ide (1), ctrl (1)
> **Definitions:** is a  (1), is an  (1)


### 1. Setting Up Our Development Environment

> [↑ Back to Table of Contents](#table-of-contents)

#### Testing your environment
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/testing-your-environment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/testing-your-environment?u=76281980&t=0)** - [Instructor] Let's test your setting to make sure you have everything you need to run Jupyter Notebooks.
>
> **[0:05](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/testing-your-environment?u=76281980&t=5)** For this, let me open the file "Testing your Environment.ipynb" in the Chapter one folder.
>
> **[0:14](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/testing-your-environment?u=76281980&t=14)** Jupyter Notebooks are interactive documents where you can write and run codes alongside explanations and results.
>
> **[0:22](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/testing-your-environment?u=76281980&t=22)** They are made up of cells, which you can run one at a time, making them suitable for testing things out step by step.
>
> **[0:31](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/testing-your-environment?u=76281980&t=31)** For this reason, Jupyter Notebooks are perfect for experimenting, visualizing results, and learning by doing.
>
> **[0:39](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/testing-your-environment?u=76281980&t=39)** Now let's run this notebook.
>
> **[0:41](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/testing-your-environment?u=76281980&t=41)** You can do this by selecting a cell and pressing the "Run" button on the left.
>
> **[0:47](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/testing-your-environment?u=76281980&t=47)** The very first time you may be prompted for the "kernel" to use.
>
> **[0:51](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/testing-your-environment?u=76281980&t=51)** This is the backend to execute the Python code.
>
> **[0:55](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/testing-your-environment?u=76281980&t=55)** You can go ahead and select Python if asked.
>
> **[0:59](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/testing-your-environment?u=76281980&t=59)** So the first cell should print your installed version of Python.
>
> **[1:03](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/testing-your-environment?u=76281980&t=63)** Below each cell you run, you'll see its output.
>
> **[1:06](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/testing-your-environment?u=76281980&t=66)** Here we have Python version 3.12.1.
>
> **[1:12](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/testing-your-environment?u=76281980&t=72)** In the next cell, we'll print your NumPy version and create a matrix just to make sure it's working.
>
> **[1:19](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/testing-your-environment?u=76281980&t=79)** Let me run it.
>
> **[1:23](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/testing-your-environment?u=76281980&t=83)** There you go.
>
> **[1:24](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/testing-your-environment?u=76281980&t=84)** We have NumPy version 2.2.4, and a nice 2 by 2 matrix.
>
> **[1:32](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/testing-your-environment?u=76281980&t=92)** The next cell uses the Matplotlib library to open and display a picture of two handsome Komodo dragons.
>
> **[1:41](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/testing-your-environment?u=76281980&t=101)** And here they are looking all smug.
>
> **[1:44](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/testing-your-environment?u=76281980&t=104)** Remember, this is VS Code so you can always open image files to inspect at their full size.
>
> **[1:52](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/testing-your-environment?u=76281980&t=112)** Let me show you.
>
> **[1:54](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/testing-your-environment?u=76281980&t=114)** This file is in the same folder as the notebook and it's named "komodo.jpg".
>
> **[2:01](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/testing-your-environment?u=76281980&t=121)** Here you can examine every last detail and you can pan and zoom to your heart's content.
>
> **[2:12](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/testing-your-environment?u=76281980&t=132)** All right, let's go back to the notebook.
>
> **[2:16](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/testing-your-environment?u=76281980&t=136)** The last cell opens and displays the same Komodo dragon picture, but this time using OpenCV.
>
> **[2:23](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/testing-your-environment?u=76281980&t=143)** This is a library we will use to perform some specialized computer vision operations.
>
> **[2:32](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/testing-your-environment?u=76281980&t=152)** As you can see, we are using OpenCV version 4.11.0.
>
> **[2:39](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/testing-your-environment?u=76281980&t=159)** And we are done.
>
> **[2:40](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/testing-your-environment?u=76281980&t=160)** If everything went well, your setting is good to go.
>
> **[2:44](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/testing-your-environment?u=76281980&t=164)** Now you know how to access the notebooks you'll see in the videos ahead, so please have them handy to replicate the procedures I will show you.
>
> **[2:53](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/testing-your-environment?u=76281980&t=173)** And also, keep an eye out for the many visual artifacts these procedures will create in your images.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), this, (1)
> **CLI Commands:** python (4), make (2)
> **Versions:** version 3 (1), 12.1 (1), version 2 (1), 2.4 (1), version 4 (1)
> **Tools:** jupyter (3), vs code (1)
> **Cross-References:** in the next (1), go back to (1)
> **Analogies:** picture (2)
> **UI Navigation:** open the (1)
> **Definitions:** is a  (1)

#### Maintaining a clean notebook workspace
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/maintaining-a-clean-notebook-workspace?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/maintaining-a-clean-notebook-workspace?u=76281980&t=0)** - [Instructor] Let me give you a few recommendations to help keep your environment and your repository in good shape.
>
> **[0:07](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/maintaining-a-clean-notebook-workspace?u=76281980&t=7)** If you've used Codespaces before, you're probably familiar with Auto Save being enabled by default.
>
> **[0:15](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/maintaining-a-clean-notebook-workspace?u=76281980&t=15)** In this Codespace though, I've disabled it intentionally as a precaution, to encourage cleaner workflows.
>
> **[0:22](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/maintaining-a-clean-notebook-workspace?u=76281980&t=22)** Here's why.
>
> **[0:23](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/maintaining-a-clean-notebook-workspace?u=76281980&t=23)** Jupyter Notebooks save not just your code, but also the output of each cell you run.
>
> **[0:30](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/maintaining-a-clean-notebook-workspace?u=76281980&t=30)** That includes text, plots, and high resolution images.
>
> **[0:35](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/maintaining-a-clean-notebook-workspace?u=76281980&t=35)** Over time this can make your notebook files grow significantly, even when the code itself hasn't changed much.
>
> **[0:43](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/maintaining-a-clean-notebook-workspace?u=76281980&t=43)** Let me show you what I mean.
>
> **[0:45](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/maintaining-a-clean-notebook-workspace?u=76281980&t=45)** I will open a terminal in the folder where we ran the test notebook in the previous video.
>
> **[0:53](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/maintaining-a-clean-notebook-workspace?u=76281980&t=53)** Let's take a look at the size of the file before saving.
>
> **[0:58](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/maintaining-a-clean-notebook-workspace?u=76281980&t=58)** So the file name is "Testing your Environment.ipynb" and its size is about 2.4 kilobytes.
>
> **[1:07](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/maintaining-a-clean-notebook-workspace?u=76281980&t=67)** That's pretty lightweight.
>
> **[1:09](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/maintaining-a-clean-notebook-workspace?u=76281980&t=69)** Now I'll save the file either from the file menu or using CTRL+S.
>
> **[1:16](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/maintaining-a-clean-notebook-workspace?u=76281980&t=76)** Now let's check the size again.
>
> **[1:20](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/maintaining-a-clean-notebook-workspace?u=76281980&t=80)** And now it's 2.9 megabytes.
>
> **[1:23](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/maintaining-a-clean-notebook-workspace?u=76281980&t=83)** That's a huge difference.
>
> **[1:25](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/maintaining-a-clean-notebook-workspace?u=76281980&t=85)** And remember, this is just a small demo.
>
> **[1:28](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/maintaining-a-clean-notebook-workspace?u=76281980&t=88)** Later on, we'll be working with notebooks that include many images and much more output.
>
> **[1:34](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/maintaining-a-clean-notebook-workspace?u=76281980&t=94)** If saved automatically, those files can quickly become difficult to manage.
>
> **[1:41](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/maintaining-a-clean-notebook-workspace?u=76281980&t=101)** Let's also take a look at the source control panel to see exactly what changed.
>
> **[1:48](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/maintaining-a-clean-notebook-workspace?u=76281980&t=108)** On the left, we have the current version of the file, and on the right, the saved version that includes output.
>
> **[1:56](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/maintaining-a-clean-notebook-workspace?u=76281980&t=116)** If we scroll down, you'll notice that all the text and image output is now part of the file.
>
> **[2:03](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/maintaining-a-clean-notebook-workspace?u=76281980&t=123)** This is what causes the file size to increase so dramatically.
>
> **[2:09](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/maintaining-a-clean-notebook-workspace?u=76281980&t=129)** By disabling Auto Save, you are in control of when your notebooks get written to storage.
>
> **[2:16](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/maintaining-a-clean-notebook-workspace?u=76281980&t=136)** That gives you a chance to clean things up before saving or committing your changes.
>
> **[2:22](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/maintaining-a-clean-notebook-workspace?u=76281980&t=142)** Whenever you are about to commit, I recommend reviewing this diff view to make sure you are not unintentionally pushing large outputs into your repository.
>
> **[2:34](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/maintaining-a-clean-notebook-workspace?u=76281980&t=154)** So in summary, after running a notebook, I suggest cleaning it up by using the clear all outputs button.
>
> **[2:42](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/maintaining-a-clean-notebook-workspace?u=76281980&t=162)** You may also want to restart the kernel between longer sessions to keep things running smoothly.
>
> **[2:50](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/maintaining-a-clean-notebook-workspace?u=76281980&t=170)** So now I can save a clean version of this file.
>
> **[2:57](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/maintaining-a-clean-notebook-workspace?u=76281980&t=177)** And lastly, if you prefer having Auto Save enabled, you can turn it back on in the "settings.json" file by "setting files.autoSave" to "afterDelay".
>
> **[3:11](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/maintaining-a-clean-notebook-workspace?u=76281980&t=191)** Just keep in mind that doing so will save your notebooks, including any outputs, every time you run a cell.
>
> **[3:21](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/maintaining-a-clean-notebook-workspace?u=76281980&t=201)** I prefer to keep this off.
>
> **[3:25](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/maintaining-a-clean-notebook-workspace?u=76281980&t=205)** It's entirely up to you, but now you know how to manage your notebooks in a way that keeps your workspace and your repo clean.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), default. (1)
> **CLI Commands:** make (2)
> **Code Identifiers:** autosave (1), afterdelay (1)
> **Versions:** 2.4 (1), 2.9 (1)
> **Tools:** jupyter (1), terminal (1)
> **File Paths:** settings.json (1)
> **Env Vars:** ctrl (1)
> **Cross-References:** previous video (1)


### 2. The Basics of Image Processing

> [↑ Back to Table of Contents](#table-of-contents)

#### Image representation
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-representation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-representation?u=76281980&t=0)** - [Instructor] There are a few ways you may represent images in a computer.
>
> **[0:04](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-representation?u=76281980&t=4)** One of the most popular is the "Raster Image Representation", which is the type of images we will see in this course.
>
> **[0:13](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-representation?u=76281980&t=13)** Up ahead, we will get to know raster images and some important details about them.
>
> **[0:20](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-representation?u=76281980&t=20)** First, a raster image consists of a matrix of pixels, which are the small dots or squares that compose a picture like this smiley.
>
> **[0:31](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-representation?u=76281980&t=31)** Images may encode color, but they may be gray scale or even black and white.
>
> **[0:38](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-representation?u=76281980&t=38)** There are several file formats used to store pictures.
>
> **[0:42](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-representation?u=76281980&t=42)** Some of these formats involve compression, but not all of them.
>
> **[0:48](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-representation?u=76281980&t=48)** And lastly, an image may be stored at different resolutions.
>
> **[0:53](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-representation?u=76281980&t=53)** Let's start tweaking some pictures.
>
> **[0:57](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-representation?u=76281980&t=57)** In this notebook, let me show you how you can create raster images in gray scale and color with integers and floating point numbers.
>
> **[1:08](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-representation?u=76281980&t=68)** Let's look at the first cell where I'll create a simple gray scale image.
>
> **[1:13](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-representation?u=76281980&t=73)** Notice that I'm importing NumPy and Matplotlib's Pyplot Module in lines 4 and 5.
>
> **[1:21](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-representation?u=76281980&t=81)** In line 6, the assignment of retina to figure formats is done to get the best resolution from Matplotlib's imshow, which is the image show function.
>
> **[1:33](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-representation?u=76281980&t=93)** You'll see this line in every notebook ahead.
>
> **[1:37](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-representation?u=76281980&t=97)** So next, I'm creating a three by three NumPy array, and I'm initializing it with numbers between 0 and 255.
>
> **[1:47](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-representation?u=76281980&t=107)** These numbers represent shades of gray, where 0 is black and 255 is white.
>
> **[1:55](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-representation?u=76281980&t=115)** Look at the comments to make sense of these shades.
>
> **[1:58](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-representation?u=76281980&t=118)** Lastly, in line 12, I'm displaying the image with Pyplot's imshow function.
>
> **[2:05](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-representation?u=76281980&t=125)** This function takes an image object as an argument, and optionally a color map.
>
> **[2:11](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-representation?u=76281980&t=131)** For gray scale, we'll use the gray color map. Let's run it.
>
> **[2:20](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-representation?u=76281980&t=140)** Notice that the plot shows the row and column coordinates.
>
> **[2:25](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-representation?u=76281980&t=145)** Since this is a three by three matrix, the image is extremely magnified.
>
> **[2:32](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-representation?u=76281980&t=152)** In the next cell, I am printing the image with the print function to see how it looks in a text representation.
>
> **[2:41](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-representation?u=76281980&t=161)** I'm also printing the data type of one pixel.
>
> **[2:46](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-representation?u=76281980&t=166)** As you can see, it's a matrix of 64 bit integers.
>
> **[2:54](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-representation?u=76281980&t=174)** Moving on to the next cell, let me show you the same thing for a three by three color image.
>
> **[3:00](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-representation?u=76281980&t=180)** This time, each pixel is encoded as a red, green, blue triad.
>
> **[3:05](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-representation?u=76281980&t=185)** That is to say, that this image has three channels of intensity per pixel.
>
> **[3:11](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-representation?u=76281980&t=191)** Each number represents the intensity of its color.
>
> **[3:15](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-representation?u=76281980&t=195)** We'll talk about colors shortly.
>
> **[3:18](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-representation?u=76281980&t=198)** Look at line 10 and notice that this time I turned off the displaying of the X and Y axis in Pyplot.
>
> **[3:26](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-representation?u=76281980&t=206)** Also, notice that the image show function doesn't need a color map anymore because this image has all the color information it needs.
>
> **[3:35](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-representation?u=76281980&t=215)** Let's run it.
>
> **[3:37](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-representation?u=76281980&t=217)** You may want to take a moment to pause the video and confirm that these colors match the ones in the comments above.
>
> **[3:45](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-representation?u=76281980&t=225)** And once again, let's see its text representation and the type of an intensity value.
>
> **[3:52](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-representation?u=76281980&t=232)** As expected, this is a three dimensional array of 64 bit integers.
>
> **[4:01](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-representation?u=76281980&t=241)** Lastly, let me show you the same image, but encoded with floating point numbers between 0 and 1.
>
> **[4:09](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-representation?u=76281980&t=249)** This is the same image we saw before because the image show function uses the maximum value in the array as the maximum intensity.
>
> **[4:19](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-representation?u=76281980&t=259)** Yep, that's the same image.
>
> **[4:22](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-representation?u=76281980&t=262)** And now let's look at its text representation and type.
>
> **[4:27](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-representation?u=76281980&t=267)** This image is made of 64 bit floating point numbers.
>
> **[4:32](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-representation?u=76281980&t=272)** Oh yeah, let's move on.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), function (6), module (1), type. (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Analogies:** picture (1)
> **Speakers:** - [instructor] (1)

#### Color encoding
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/color-encoding?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/color-encoding?u=76281980&t=0)** - [Instructor] Color may be encoded in a variety of ways, like RGB, RGBA, CMYK, or HSL.
>
> **[0:08](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/color-encoding?u=76281980&t=8)** In this course, we'll exclusively use the RGB encoding where each pixel is represented as a vector with three channels, Red, Green, and Blue.
>
> **[0:21](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/color-encoding?u=76281980&t=21)** RGB is usually encoded as a 24-bit bitmap, meaning that each color channel has a number between 0 and 255, where zero means 0% intensity of its color, and 255 means 100% intensity.
>
> **[0:40](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/color-encoding?u=76281980&t=40)** 24-bit color in coding is also known as true color.
>
> **[0:45](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/color-encoding?u=76281980&t=45)** The first cell in this notebook is the same we saw before.
>
> **[0:49](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/color-encoding?u=76281980&t=49)** In line 10, I'm initializing "img" with an array of three by three pixels, and every pixel is an RGB triad.
>
> **[0:58](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/color-encoding?u=76281980&t=58)** According to this encoding, take a moment to pause the video and read the comments in line seven through nine, which describe the combination of colors in the image.
>
> **[1:09](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/color-encoding?u=76281980&t=69)** Notice that all pixels have either 0 or 255 in their intensity values, except for the bottom right pixel, which is 50% gray.
>
> **[1:21](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/color-encoding?u=76281980&t=81)** Let me run this cell.
>
> **[1:26](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/color-encoding?u=76281980&t=86)** This image has trivial combinations of full intensity colors.
>
> **[1:31](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/color-encoding?u=76281980&t=91)** For example, blue and green yields cyan, and red and green yields yellow.
>
> **[1:37](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/color-encoding?u=76281980&t=97)** Also, notice that when all three channels have the same value, we get a shade of gray.
>
> **[1:45](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/color-encoding?u=76281980&t=105)** Now, let's modify one pixel.
>
> **[1:48](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/color-encoding?u=76281980&t=108)** In this cell, I will change the bottom left pixel to go from black to orange.
>
> **[1:54](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/color-encoding?u=76281980&t=114)** The bottom left pixel is at row two, column zero.
>
> **[1:58](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/color-encoding?u=76281980&t=118)** That's why I'm indexing img with 2, 0, and the third index is for the color channel.
>
> **[2:06](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/color-encoding?u=76281980&t=126)** Zero is red, one is green, and two is blue.
>
> **[2:11](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/color-encoding?u=76281980&t=131)** Now, I know the tone of orange I want.
>
> **[2:14](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/color-encoding?u=76281980&t=134)** It has 100% red and about 80% green, with no blue.
>
> **[2:20](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/color-encoding?u=76281980&t=140)** So, to change this black pixel to orange, I can set its red channel to 255 and its green channel to 200, as you can see in lines three and four.
>
> **[2:33](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/color-encoding?u=76281980&t=153)** I've left the blue channel alone, since the pixel was black anyway.
>
> **[2:38](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/color-encoding?u=76281980&t=158)** Now, look at line six to see how the imshow function can print partial images.
>
> **[2:44](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/color-encoding?u=76281980&t=164)** Well, because Python allows us to do so.
>
> **[2:47](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/color-encoding?u=76281980&t=167)** Here, we'll print the sub-image at row two, column zero.
>
> **[2:52](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/color-encoding?u=76281980&t=172)** Let me run this.
>
> **[2:55](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/color-encoding?u=76281980&t=175)** And there you have it, a big, orange pixel.
>
> **[3:00](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/color-encoding?u=76281980&t=180)** Finally, let me display the whole image just to make sure that we changed the bottom left pixel.
>
> **[3:08](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/color-encoding?u=76281980&t=188)** And there it is.
>
> **[3:09](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/color-encoding?u=76281980&t=189)** We can see the bottom left pixel painted in orange.
>
> **[3:13](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/color-encoding?u=76281980&t=193)** Let's move on.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), function (1), this. (1), finally, (1)
> **Env Vars:** rgb (4), rgba (1), cmyk (1), hsl (1)
> **CLI Commands:** python (1), make (1)
> **Definitions:** known as (1), is an  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Image file management
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-file-management?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-file-management?u=76281980&t=0)** - [Instructor] Opening image files and saving images into files are the start and finish of image processing, respectively.
>
> **[0:08](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-file-management?u=76281980&t=8)** Let's look at some important aspects of image file management.
>
> **[0:12](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-file-management?u=76281980&t=12)** In the first cell, let me open a JPEG file using the "pyplot.imread function".
>
> **[0:19](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-file-management?u=76281980&t=19)** JPEG is an image format that uses lossy compression.
>
> **[0:23](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-file-management?u=76281980&t=23)** That means that the compression slightly modifies the image, but it can achieve amazing compression ratios.
>
> **[0:31](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-file-management?u=76281980&t=31)** Look at the imread function call in line seven.
>
> **[0:35](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-file-management?u=76281980&t=35)** The file name is "stickanimals.jpg", and I've assigned the returned object to a variable named, "jpeg."
>
> **[0:44](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-file-management?u=76281980&t=44)** Before moving on, notice that the files we are opening are all in the current notebook folder.
>
> **[0:52](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-file-management?u=76281980&t=52)** Now let's run this cell to see the JPEG image.
>
> **[0:57](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-file-management?u=76281980&t=57)** As you can see in the axes, the image is a little over 600 by 600 pixels.
>
> **[1:05](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-file-management?u=76281980&t=65)** Now let's see another version of the same image I had previously saved as a PNG file.
>
> **[1:12](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-file-management?u=76281980&t=72)** PNG is another image format that uses lossless compression.
>
> **[1:17](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-file-management?u=76281980&t=77)** That means that all pixels are left unchanged, but the compression ratio isn't as good as JPEG's.
>
> **[1:24](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-file-management?u=76281980&t=84)** This time, the file name is "stickanimalsRGBA.png", and I'm assigning it to a variable named "png."
>
> **[1:33](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-file-management?u=76281980&t=93)** Let's run it.
>
> **[1:36](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-file-management?u=76281980&t=96)** The two images look the same, right?
>
> **[1:38](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-file-management?u=76281980&t=98)** Well, they're not.
>
> **[1:40](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-file-management?u=76281980&t=100)** Let's look at their sizes. In this cell, I'm using the NumPy's shape function to get the sizes of both images.
>
> **[1:51](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-file-management?u=76281980&t=111)** As you can see, both are 617 by 648 pixels, but the JPEG has three color channels, while the PNG has four.
>
> **[2:03](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-file-management?u=76281980&t=123)** In the next cell, let's inspect the first pixel.
>
> **[2:07](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-file-management?u=76281980&t=127)** That's the pixel at row zero, column zero.
>
> **[2:12](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-file-management?u=76281980&t=132)** A-ha, the JPEG is encoding the pixels with integers from zero to 255, and the PNG is encoding them as floating point numbers from zero to one, and then there's the fourth value for the PNG picture, which is one for this pixel.
>
> **[2:32](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-file-management?u=76281980&t=152)** Let's confirm this in the next cell.
>
> **[2:35](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-file-management?u=76281980&t=155)** Let's see their data types.
>
> **[2:37](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-file-management?u=76281980&t=157)** I'm looking at the data type of the first channel in the first pixel of each image.
>
> **[2:43](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-file-management?u=76281980&t=163)** The JPEG uses eight-bit unsigned integers, and the PNG uses 32-bit floating point numbers.
>
> **[2:51](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-file-management?u=76281980&t=171)** All of this is because of two reasons.
>
> **[2:54](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-file-management?u=76281980&t=174)** First, PNG supports a fourth channel for every pixel.
>
> **[2:59](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-file-management?u=76281980&t=179)** This extra channel, often called "alpha", encodes transparency.
>
> **[3:05](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-file-management?u=76281980&t=185)** This is the RGBA encoding.
>
> **[3:08](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-file-management?u=76281980&t=188)** And second, the imread function encodes PNG files as floating point numbers from zero to one.
>
> **[3:16](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-file-management?u=76281980&t=196)** All other formats like JPEG or BMP are encoded as integers from zero to 255.
>
> **[3:26](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-file-management?u=76281980&t=206)** So to be able to work with one single format for all pictures, let me show you a function I wrote to convert an RGBA with floating point numbers to RGB with eight-bit integers.
>
> **[3:40](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-file-management?u=76281980&t=220)** As the comment in this cell reads, to do this conversion, we need to change five things.
>
> **[3:47](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-file-management?u=76281980&t=227)** First, we need to get rid of channel A.
>
> **[3:50](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-file-management?u=76281980&t=230)** Second, we must multiply each value by 255.
>
> **[3:56](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-file-management?u=76281980&t=236)** Third, we must round the results.
>
> **[3:59](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-file-management?u=76281980&t=239)** Fourth, we must ensure that all values are between zero and 255, and five, we must convert the data type to eight-bit unsigned integers.
>
> **[4:12](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-file-management?u=76281980&t=252)** You may want to take a moment to hit pause and read the code to convince yourself that this is indeed performing that conversion.
>
> **[4:21](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-file-management?u=76281980&t=261)** The function definition starts at line 13.
>
> **[4:25](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-file-management?u=76281980&t=265)** It's called adapt_PNG, and it performs steps one and two.
>
> **[4:30](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-file-management?u=76281980&t=270)** Then in line 16, it calls another function to perform steps three, four, and five.
>
> **[4:39](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-file-management?u=76281980&t=279)** This function definition starts at line 24.
>
> **[4:42](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-file-management?u=76281980&t=282)** It's called adapt_image, and I wrote it because we'll need it when manipulating images where the results may go outside the zero to 255 range.
>
> **[4:54](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-file-management?u=76281980&t=294)** Let me just run this cell to have these functions available.
>
> **[4:58](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-file-management?u=76281980&t=298)** I've made these functions available in a separate source file named "EC_CV.py", which you may import in your code.
>
> **[5:07](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-file-management?u=76281980&t=307)** There's a copy of it in every notebook folder.
>
> **[5:10](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-file-management?u=76281980&t=310)** Let me show you.
>
> **[5:15](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-file-management?u=76281980&t=315)** Here you can see these two functions first, and many others we will need throughout the course.
>
> **[5:30](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-file-management?u=76281980&t=330)** Let's go back to the notebook.
>
> **[5:34](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-file-management?u=76281980&t=334)** Here's how I suggest opening PNG files to work with 24-bit RGB images.
>
> **[5:41](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-file-management?u=76281980&t=341)** In line six, I'm calling the adapt PNG function with the result of imread.
>
> **[5:48](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-file-management?u=76281980&t=348)** Next, I'll display the picture, but notice that I'll also bring the data type of the first pixel and its value just to make sure everything went well.
>
> **[5:58](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-file-management?u=76281980&t=358)** Let's run it.
>
> **[6:01](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-file-management?u=76281980&t=361)** And there you have it.
>
> **[6:03](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-file-management?u=76281980&t=363)** Its data type is uint8, and it has integers within the expected range.
>
> **[6:11](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-file-management?u=76281980&t=371)** Lastly, let's save our file.
>
> **[6:14](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-file-management?u=76281980&t=374)** This time, I'm extracting the horse as a subarray named "horsie".
>
> **[6:20](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-file-management?u=76281980&t=380)** The imsave function receives the desired file name and the image variable to use.
>
> **[6:27](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-file-management?u=76281980&t=387)** Now let me run this cell and show you the folder.
>
> **[6:33](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-file-management?u=76281980&t=393)** There it is, horsie.jpg.
>
> **[6:36](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-file-management?u=76281980&t=396)** We can open this file to see the newly saved "horsie" in the JPEG format.

> [!info]- Semantic Content
>
> **Code Keywords:** let (16), function (10)
> **Env Vars:** png (10), jpeg (9), rgba (2), rgb (2), bmp (1)
> **Definitions:** means that (2), is an  (1), is a  (1)
> **Cross-References:** in the next (2), go back to (1)
> **Code Identifiers:** stickanimalsrgba (1), adapt_image (1)
> **Analogies:** picture (2)
> **File Paths:** ec_cv.py (1)
> **CLI Commands:** make (1)

#### Resolution
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/resolution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/resolution?u=76281980&t=0)** - [Instructor] The resolution of an image is its level of detail or its pixel density.
>
> **[0:06](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/resolution?u=76281980&t=6)** Bigger resolution images are suitable for printing on a larger area, but they require more space and computational power to process.
>
> **[0:16](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/resolution?u=76281980&t=16)** In this notebook, we will take a quick look at the same picture at three different resolutions.
>
> **[0:23](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/resolution?u=76281980&t=23)** The first cell opens the file named "dog800x600.jpg".
>
> **[0:29](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/resolution?u=76281980&t=29)** Before running this cell, look at line six, I'm importing rcParams which are the runtime configuration parameters because I want to manipulate the size of the pictures that will be displayed by the imshow function.
>
> **[0:45](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/resolution?u=76281980&t=45)** To do this in line eight, I'm setting the figure size parameter to a maximum width of 10 inches and a maximum height of eight inches.
>
> **[0:56](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/resolution?u=76281980&t=56)** Now, here are two things you shouldn't worry about.
>
> **[1:00](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/resolution?u=76281980&t=60)** First, these units may not be actual inches in your screen.
>
> **[1:05](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/resolution?u=76281980&t=65)** On my screen, they are more like centimeters.
>
> **[1:09](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/resolution?u=76281980&t=69)** And second, the ratio of these sizes will not affect the ratio of your images, so your images will be limited to the width and height you specify here, but they will not be stretched out of their original ratio.
>
> **[1:23](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/resolution?u=76281980&t=83)** Let's see the picture.
>
> **[1:28](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/resolution?u=76281980&t=88)** That's my spoiled mixed breed dog sitting like a pug.
>
> **[1:33](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/resolution?u=76281980&t=93)** Remember, this image is 800 pixels wide by 600 pixels tall.
>
> **[1:39](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/resolution?u=76281980&t=99)** This resolution is enough for us to see some detail in the grass and the flowers at the back.
>
> **[1:46](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/resolution?u=76281980&t=106)** Now let's look at a lower resolution version of the same picture.
>
> **[1:52](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/resolution?u=76281980&t=112)** If you look closely, you may notice a pixelation artifact in the dog's eyes and snout.
>
> **[1:59](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/resolution?u=76281980&t=119)** That's because this picture has a resolution of 300 by 225, but it was displayed at the same size in the screen as the previous one.
>
> **[2:10](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/resolution?u=76281980&t=130)** So technically, this picture has less dots per inch or DPI than the previous one.
>
> **[2:17](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/resolution?u=76281980&t=137)** This second picture is appropriate for displaying at a smaller size.
>
> **[2:23](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/resolution?u=76281980&t=143)** Now let's see an even smaller resolution version.
>
> **[2:28](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/resolution?u=76281980&t=148)** This one is 120 by 90 pixels, so the pixelation artifact is extreme.
>
> **[2:36](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/resolution?u=76281980&t=156)** Once again, this picture isn't necessarily bad.
>
> **[2:40](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/resolution?u=76281980&t=160)** It's a lightweight file, so it would be suitable as a thumbnail or preview for the high resolution picture, just like this.
>
> **[2:51](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/resolution?u=76281980&t=171)** This is the same low resolution picture displayed at a much smaller size.
>
> **[2:56](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/resolution?u=76281980&t=176)** Imagine this as a thumbnail in a folder view among many other picture files.

> [!info]- Semantic Content
>
> **Analogies:** picture (10), just like (1), imagine (1)
> **Code Keywords:** let (3), require (1), function (1), this. (1)
> **Code Identifiers:** rcparams (1)
> **Env Vars:** dpi (1)
> **Speakers:** - [instructor] (1)

#### Rotations and flips
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/rotations-and-flips?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/rotations-and-flips?u=76281980&t=0)** - Rotating images at right angles and flipping them horizontally or vertically involves transposing pixels and inverting their order.
>
> **[0:10](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/rotations-and-flips?u=76281980&t=10)** NumPy supports these operations for images without changing the order of the pixel data, that's RGB.
>
> **[0:18](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/rotations-and-flips?u=76281980&t=18)** First, let's open a picture of a street in my neighborhood.
>
> **[0:24](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/rotations-and-flips?u=76281980&t=24)** There, we can see the iconic water volcano in Guatemala.
>
> **[0:30](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/rotations-and-flips?u=76281980&t=30)** Now, let's rotate it 90 degrees counter clockwise.
>
> **[0:34](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/rotations-and-flips?u=76281980&t=34)** This is possible with numpy.rot90 function, which reorders pixels while maintaining the color channels as RGB.
>
> **[0:44](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/rotations-and-flips?u=76281980&t=44)** Notice in nine three that the function receives two arguments, the image and the number of rotations to perform.
>
> **[0:52](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/rotations-and-flips?u=76281980&t=52)** This time, we want one rotation.
>
> **[0:57](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/rotations-and-flips?u=76281980&t=57)** There it is.
>
> **[0:58](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/rotations-and-flips?u=76281980&t=58)** Notice that I'm assigning these rotations to the same IMG object, so I am updating the image.
>
> **[1:07](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/rotations-and-flips?u=76281980&t=67)** Now, to rotate the image 90 degrees clockwise, we may rotate it counterclockwise three times, as you can see in nine three.
>
> **[1:18](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/rotations-and-flips?u=76281980&t=78)** And we are back where we started.
>
> **[1:21](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/rotations-and-flips?u=76281980&t=81)** Now, let's flip the image horizontally.
>
> **[1:24](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/rotations-and-flips?u=76281980&t=84)** This is how a mirror reflection would look.
>
> **[1:27](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/rotations-and-flips?u=76281980&t=87)** We can do this with the flip left, right function as you can see in nine four.
>
> **[1:33](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/rotations-and-flips?u=76281980&t=93)** This function inverts the order of pixels in the horizontal axis.
>
> **[1:42](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/rotations-and-flips?u=76281980&t=102)** There it is, a mirror image.
>
> **[1:45](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/rotations-and-flips?u=76281980&t=105)** And lastly, let's flip the image vertically, which is not the same as putting it upside down by rotating it 180 degrees.
>
> **[1:55](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/rotations-and-flips?u=76281980&t=115)** This vertical flip is performed with the flip up, down function.
>
> **[2:00](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/rotations-and-flips?u=76281980&t=120)** Let's see it.
>
> **[2:03](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/rotations-and-flips?u=76281980&t=123)** You could easily write functions for these operations as an exercise if you'd like.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), function (5)
> **Env Vars:** rgb (2), img (1)
> **Analogies:** picture (1)
> **Speakers:** - rotating (1)

#### Challenge: Manipulate pictures
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-manipulate-some-pictures?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-manipulate-some-pictures?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-manipulate-some-pictures?u=76281980&t=5)** - [Instructor] It's time for your first challenge.
>
> **[0:07](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-manipulate-some-pictures?u=76281980&t=7)** As you may have guessed, for all challenges, you'll have to write code on a Jupyter notebook.
>
> **[0:13](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-manipulate-some-pictures?u=76281980&t=13)** Please read every cell and follow the instructions in the comments.
>
> **[0:19](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-manipulate-some-pictures?u=76281980&t=19)** For this challenge, you will have to manipulate some pictures.
>
> **[0:23](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-manipulate-some-pictures?u=76281980&t=23)** These pictures are taken from three files in the first cell, and you'll work with the images in variables "traffic", "penguins", and "icepops".
>
> **[0:33](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-manipulate-some-pictures?u=76281980&t=33)** You don't have to modify this cell, you can simply run it.
>
> **[0:38](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-manipulate-some-pictures?u=76281980&t=38)** Your first task is to find the RGBA image.
>
> **[0:42](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-manipulate-some-pictures?u=76281980&t=42)** One of these images is a JPEG file and the other two are PNGs.
>
> **[0:47](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-manipulate-some-pictures?u=76281980&t=47)** One of these PNGs is encoded as RGB and the other one as RGBA.
>
> **[0:54](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-manipulate-some-pictures?u=76281980&t=54)** You have to find out which one it is.
>
> **[0:59](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-manipulate-some-pictures?u=76281980&t=59)** Your second task is to convert all images to an 8-bit unsigned integer encoding.
>
> **[1:05](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-manipulate-some-pictures?u=76281980&t=65)** Feel free to use the functions I showed you.
>
> **[1:08](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-manipulate-some-pictures?u=76281980&t=68)** These functions are available in the EC_CV source file, which is imported in your first cell.
>
> **[1:15](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-manipulate-some-pictures?u=76281980&t=75)** You can always open the file to see the code.
>
> **[1:19](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-manipulate-some-pictures?u=76281980&t=79)** Your third task is to display the three images in three separate cells.
>
> **[1:24](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-manipulate-some-pictures?u=76281980&t=84)** You have to show the access for some pictures and hide them for others.
>
> **[1:29](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-manipulate-some-pictures?u=76281980&t=89)** Just follow the instructions in the comments.
>
> **[1:33](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-manipulate-some-pictures?u=76281980&t=93)** Task 4 is to manipulate the images with rotations and flips.
>
> **[1:38](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-manipulate-some-pictures?u=76281980&t=98)** Once again, you have three separate cells for this.
>
> **[1:42](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-manipulate-some-pictures?u=76281980&t=102)** First you have to flip the traffic picture.
>
> **[1:45](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-manipulate-some-pictures?u=76281980&t=105)** In the next cell, you have to rotate the penguins picture.
>
> **[1:50](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-manipulate-some-pictures?u=76281980&t=110)** And lastly, I have something special for the icepops picture.
>
> **[1:55](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-manipulate-some-pictures?u=76281980&t=115)** This cell will copy icepops to img.
>
> **[1:58](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-manipulate-some-pictures?u=76281980&t=118)** Just run this cell without changing it.
>
> **[2:03](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-manipulate-some-pictures?u=76281980&t=123)** Now, the next cell will multiply img by two and show you the resulting image.
>
> **[2:09](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-manipulate-some-pictures?u=76281980&t=129)** You don't have to write code in this cell either, you'll just have to run this cell 10 times and notice how the image changes each time.
>
> **[2:20](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-manipulate-some-pictures?u=76281980&t=140)** If you lose count or want to run the experiment again, you can rerun the previous cell to start over.
>
> **[2:27](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-manipulate-some-pictures?u=76281980&t=147)** After running the experiment, try to explain what happened.
>
> **[2:32](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-manipulate-some-pictures?u=76281980&t=152)** This should take you about 15 minutes.
>
> **[2:34](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-manipulate-some-pictures?u=76281980&t=154)** When you are done, check out the next video to see my solution.

> [!info]- Semantic Content
>
> **Env Vars:** rgba (2), jpeg (1), rgb (1), ec_cv (1)
> **Analogies:** picture (3)
> **CLI Commands:** find (2)
> **Cross-References:** in the next (1), next video (1)
> **Code Keywords:** this. (1)
> **Tools:** jupyter (1)
> **UI Navigation:** open the (1)
> **Definitions:** is a  (1)

#### Solution: Manipulate pictures
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-manipulate-some-pictures?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-manipulate-some-pictures?u=76281980&t=0)** - [Instructor] Here's my solution.
>
> **[0:06](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-manipulate-some-pictures?u=76281980&t=6)** For the first task, I simply printed out the picture sizes with the NumPy shape function starting at line 10.
>
> **[0:15](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-manipulate-some-pictures?u=76281980&t=15)** So here we can see that penguins is the RGBA image, because it has four elements in the third dimension.
>
> **[0:26](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-manipulate-some-pictures?u=76281980&t=26)** For task number two, I used my adapt PNG function for penguins, and I used my adapt image function for icepops after multiplying it by 255.
>
> **[0:39](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-manipulate-some-pictures?u=76281980&t=39)** I could have used adapt PNG for this as well.
>
> **[0:43](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-manipulate-some-pictures?u=76281980&t=43)** Now, for traffic, I didn't do anything because it's already encoded with eight-bit unsigned integers.
>
> **[0:50](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-manipulate-some-pictures?u=76281980&t=50)** Then, starting at line 14, I print the sizes and data types of all pictures.
>
> **[0:59](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-manipulate-some-pictures?u=76281980&t=59)** The results show that they are all now eight-bit integers with three channels.
>
> **[1:06](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-manipulate-some-pictures?u=76281980&t=66)** Task three was easy.
>
> **[1:08](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-manipulate-some-pictures?u=76281980&t=68)** First, I printed traffic with axes.
>
> **[1:14](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-manipulate-some-pictures?u=76281980&t=74)** Here we can see the axes.
>
> **[1:17](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-manipulate-some-pictures?u=76281980&t=77)** Then I printed penguins and icepops without axes.
>
> **[1:22](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-manipulate-some-pictures?u=76281980&t=82)** Here we have the penguins.
>
> **[1:28](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-manipulate-some-pictures?u=76281980&t=88)** And here are the icepops.
>
> **[1:32](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-manipulate-some-pictures?u=76281980&t=92)** Then we have task four where I flipped traffic horizontally with the fliplr function.
>
> **[1:42](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-manipulate-some-pictures?u=76281980&t=102)** This results in a mirrored image.
>
> **[1:46](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-manipulate-some-pictures?u=76281980&t=106)** Then I performed three rotations of 90 degrees on penguins.
>
> **[1:52](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-manipulate-some-pictures?u=76281980&t=112)** This is effectively the same as rotating by minus 90 degrees.
>
> **[1:59](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-manipulate-some-pictures?u=76281980&t=119)** And lastly, let me show you what happens to the icepops picture when I double its pixel values repeatedly.
>
> **[2:08](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-manipulate-some-pictures?u=76281980&t=128)** Here we go.
>
> **[2:10](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-manipulate-some-pictures?u=76281980&t=130)** One.
>
> **[2:13](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-manipulate-some-pictures?u=76281980&t=133)** Two.
>
> **[2:16](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-manipulate-some-pictures?u=76281980&t=136)** Three.
>
> **[2:19](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-manipulate-some-pictures?u=76281980&t=139)** Four.
>
> **[2:22](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-manipulate-some-pictures?u=76281980&t=142)** Five.
>
> **[2:24](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-manipulate-some-pictures?u=76281980&t=144)** Six.
>
> **[2:27](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-manipulate-some-pictures?u=76281980&t=147)** Seven.
>
> **[2:30](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-manipulate-some-pictures?u=76281980&t=150)** Eight.
>
> **[2:32](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-manipulate-some-pictures?u=76281980&t=152)** Whoa, it went black.
>
> **[2:35](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-manipulate-some-pictures?u=76281980&t=155)** Nine.
>
> **[2:36](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-manipulate-some-pictures?u=76281980&t=156)** And 10.
>
> **[2:39](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-manipulate-some-pictures?u=76281980&t=159)** So, what do you think happened?
>
> **[2:41](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-manipulate-some-pictures?u=76281980&t=161)** Well, recall that all the values in these images are encoded in eight bits.
>
> **[2:47](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-manipulate-some-pictures?u=76281980&t=167)** So every time we multiply this image by two, we are losing information because the most significant bit in the multiplication is lost.
>
> **[2:58](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-manipulate-some-pictures?u=76281980&t=178)** Another way of at it is that multiplying an integer by two is the same as shifting its bits to the left by one position.
>
> **[3:08](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-manipulate-some-pictures?u=76281980&t=188)** In the end, we can only do this eight times before we have filled every byte with zeros, and that's why the image eventually goes black.

> [!info]- Semantic Content
>
> **Code Keywords:** function (4), let (1)
> **Env Vars:** png (2), rgba (1)
> **Analogies:** picture (2)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 3. From Color to Black and White

> [↑ Back to Table of Contents](#table-of-contents)

#### Average grayscale
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/average-grayscale?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/average-grayscale?u=76281980&t=0)** - [Instructor] In many applications of computer vision, color isn't very useful.
>
> **[0:05](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/average-grayscale?u=76281980&t=5)** So all the data that comes with it may slow down the computing process.
>
> **[0:10](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/average-grayscale?u=76281980&t=10)** That's why removing color is a common practice.
>
> **[0:14](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/average-grayscale?u=76281980&t=14)** Let's see a two-step process for going from full color to black and white.
>
> **[0:20](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/average-grayscale?u=76281980&t=20)** First, we must convert a color image to grayscale.
>
> **[0:25](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/average-grayscale?u=76281980&t=25)** This conversion means reducing the encoding from three or four color channels to only one brightness channel.
>
> **[0:34](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/average-grayscale?u=76281980&t=34)** There are several ways to do this, not just one, we may stop at a grayscale image if that's what we want, but the second step is to convert the grayscale image to black and white.
>
> **[0:48](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/average-grayscale?u=76281980&t=48)** This conversion will allow us to encode each pixel with just one bit.
>
> **[0:54](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/average-grayscale?u=76281980&t=54)** Now, this is not as easy as it sounds.
>
> **[0:57](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/average-grayscale?u=76281980&t=57)** You'll see why in a minute.
>
> **[1:01](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/average-grayscale?u=76281980&t=61)** Let me show you a simple way to convert a color picture to grayscale.
>
> **[1:05](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/average-grayscale?u=76281980&t=65)** It consists in calculating the average of its red, green and blue intensity components, and use this average as the only intensity for its pixels.
>
> **[1:16](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/average-grayscale?u=76281980&t=76)** That is to say, a single channel picture.
>
> **[1:21](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/average-grayscale?u=76281980&t=81)** First, let's open a picture of a play space.
>
> **[1:24](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/average-grayscale?u=76281980&t=84)** In line 11, I'm using an object named toys for the picture, and in line 13, I'm printing its size.
>
> **[1:36](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/average-grayscale?u=76281980&t=96)** Here's the picture, and its dimensions are 629 rows by 408 columns.
>
> **[1:45](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/average-grayscale?u=76281980&t=105)** This is a relatively low resolution.
>
> **[1:51](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/average-grayscale?u=76281980&t=111)** In the next cell, I defined a function to go through all the pixels and calculate the RGB average to finally return the resulting grayscale image.
>
> **[2:02](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/average-grayscale?u=76281980&t=122)** You may want to pause the video and examine the code, and please, keep in mind that our objective is not to create a professional library, but only to illustrate what's going on.
>
> **[2:15](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/average-grayscale?u=76281980&t=135)** In line 11, I'm using this function to get a new object named "toys_gs" for the grayscale version of toys.
>
> **[2:23](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/average-grayscale?u=76281980&t=143)** Let's see it working.
>
> **[2:27](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/average-grayscale?u=76281980&t=147)** It's taking a while.
>
> **[2:30](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/average-grayscale?u=76281980&t=150)** It took about three seconds.
>
> **[2:32](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/average-grayscale?u=76281980&t=152)** This is exactly what I expected for a grayscale version of this picture.
>
> **[2:37](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/average-grayscale?u=76281980&t=157)** Also, notice at the top that the image has only two dimensions, and yet it took a while.
>
> **[2:44](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/average-grayscale?u=76281980&t=164)** That's because I used two nested loops in my code, and since Python is an interpreted language, it takes its time to do the job sequentially.
>
> **[2:54](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/average-grayscale?u=76281980&t=174)** Luckily, Python is known for its MATLAB-like vector notation.
>
> **[3:00](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/average-grayscale?u=76281980&t=180)** So in this next cell, we have a one-line implementation of this average calculation.
>
> **[3:06](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/average-grayscale?u=76281980&t=186)** It turns out that a ".product " takes care of it.
>
> **[3:10](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/average-grayscale?u=76281980&t=190)** Let's see how long it takes now.
>
> **[3:14](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/average-grayscale?u=76281980&t=194)** Yep, it was faster, just 0.6 seconds.
>
> **[3:21](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/average-grayscale?u=76281980&t=201)** So now that we have a faster way of doing this, let's try it on a high-resolution picture.
>
> **[3:27](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/average-grayscale?u=76281980&t=207)** Let's see it first.
>
> **[3:32](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/average-grayscale?u=76281980&t=212)** There it is, a colorful picture of fruit on a plate.
>
> **[3:36](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/average-grayscale?u=76281980&t=216)** Now, this picture is over 5,000 by 3,000 pixels.
>
> **[3:41](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/average-grayscale?u=76281980&t=221)** So even the vector operation may take a while.
>
> **[3:44](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/average-grayscale?u=76281980&t=224)** Let's see how long it takes.
>
> **[3:53](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/average-grayscale?u=76281980&t=233)** There you have it, a nice grayscale image with a rather high resolution.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), while. (3), this, (2), function (2)
> **Analogies:** picture (9)
> **Definitions:** is a  (2), is an  (1)
> **CLI Commands:** python (2)
> **Env Vars:** rgb (1), matlab (1)
> **Code Identifiers:** toys_gs (1)
> **Versions:** 0.6 (1)
> **Cross-References:** in the next (1)

#### Weighted grayscale
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/weighted-grayscale?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/weighted-grayscale?u=76281980&t=0)** - [Instructor] An average grayscale doesn't always look very natural to the human eye or brain.
>
> **[0:06](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/weighted-grayscale?u=76281980&t=6)** A more natural alternative is to calculate a weighted average with different weights for red, green, and blue, based on luminance or human perception.
>
> **[0:17](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/weighted-grayscale?u=76281980&t=17)** A popular distribution of weights is 0.299 for red, 0.587 for green, and 0.114 for blue.
>
> **[0:32](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/weighted-grayscale?u=76281980&t=32)** Let's work with the play space image again.
>
> **[0:36](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/weighted-grayscale?u=76281980&t=36)** Notice the different colors and try to figure out which colors should look lighter and which should look darker in the grayscale version.
>
> **[0:47](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/weighted-grayscale?u=76281980&t=47)** In the next cell, I'm creating the regular average in line four and a weighted average in line five.
>
> **[0:56](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/weighted-grayscale?u=76281980&t=56)** Notice the distribution of weights.
>
> **[0:59](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/weighted-grayscale?u=76281980&t=59)** After that, I'm printing both pictures side by side.
>
> **[1:03](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/weighted-grayscale?u=76281980&t=63)** As you can see, starting at line 8.
>
> **[1:08](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/weighted-grayscale?u=76281980&t=68)** Here we have the regular average on the left and the weighted average at the right.
>
> **[1:14](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/weighted-grayscale?u=76281980&t=74)** Pay attention to the difference in the shades of gray.
>
> **[1:18](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/weighted-grayscale?u=76281980&t=78)** Notice how the truck and the mat at the back look different between the two pictures.
>
> **[1:25](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/weighted-grayscale?u=76281980&t=85)** Now let's see it again in the fruit picture.
>
> **[1:28](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/weighted-grayscale?u=76281980&t=88)** Here's the color version.
>
> **[1:32](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/weighted-grayscale?u=76281980&t=92)** Once again, try to predict which colors should look lighter and which should look darker in the grayscale version.
>
> **[1:42](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/weighted-grayscale?u=76281980&t=102)** Alright, let's see the grayscale versions.
>
> **[1:47](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/weighted-grayscale?u=76281980&t=107)** And here they are side by side.
>
> **[1:50](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/weighted-grayscale?u=76281980&t=110)** One difference I can notice is in the leaves, which look much lighter in the weighted grayscale image at the right.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3)
> **Versions:** 0.299 (1), 0.587 (1), 0.114 (1)
> **Cross-References:** in the next (1)
> **Analogies:** picture (1)
> **Speakers:** - [instructor] (1)

#### Converting grayscale to black and white
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/converting-grayscale-to-black-and-white?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/converting-grayscale-to-black-and-white?u=76281980&t=0)** - [Instructor] Now, let's talk about converting grayscale images to black and white.
>
> **[0:05](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/converting-grayscale-to-black-and-white?u=76281980&t=5)** This is often useful in computer vision where you may need to identify objects and black and white is all you need.
>
> **[0:13](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/converting-grayscale-to-black-and-white?u=76281980&t=13)** Let's work with the play space image again.
>
> **[0:17](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/converting-grayscale-to-black-and-white?u=76281980&t=17)** In this first cell, let me open the file, convert the image to a weighted grayscale, and display it.
>
> **[0:26](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/converting-grayscale-to-black-and-white?u=76281980&t=26)** Now let me show you a function I wrote in the ECCV file to turn each pixel to total black or total white based on a threshold.
>
> **[0:37](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/converting-grayscale-to-black-and-white?u=76281980&t=37)** This is the grayscale_to_BW function starting at line 30.
>
> **[0:43](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/converting-grayscale-to-black-and-white?u=76281980&t=43)** It receives a grayscale image and a threshold to compare to every pixel.
>
> **[0:49](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/converting-grayscale-to-black-and-white?u=76281980&t=49)** This function traverses the whole grayscale picture one pixel at a time, changing the pixel to 0 or 255, depending on whether it is greater than the threshold or not.
>
> **[1:03](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/converting-grayscale-to-black-and-white?u=76281980&t=63)** Notice that the returned image is also grayscale with integers from 0 to 255.
>
> **[1:11](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/converting-grayscale-to-black-and-white?u=76281980&t=71)** Let's go back to the notebook.
>
> **[1:15](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/converting-grayscale-to-black-and-white?u=76281980&t=75)** In this cell, I'm calling the grayscale to BW function with a threshold of 127, the middle shade of gray.
>
> **[1:27](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/converting-grayscale-to-black-and-white?u=76281980&t=87)** This certainly looks like a black and white picture that came from the original one, but there seems to be a lot of missing detail.
>
> **[1:37](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/converting-grayscale-to-black-and-white?u=76281980&t=97)** To have a better understanding of what the 127th threshold we used means in this picture, let me show you a histogram of the pixels in the grayscale image.
>
> **[1:48](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/converting-grayscale-to-black-and-white?u=76281980&t=108)** A histogram is a plot of the frequencies of values in the data points, which are the pixels.
>
> **[1:56](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/converting-grayscale-to-black-and-white?u=76281980&t=116)** So this plot is showing how many pixels have the same value.
>
> **[2:00](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/converting-grayscale-to-black-and-white?u=76281980&t=120)** In the horizontal axis, we have all values from 0 to 255, and in the vertical axis, we have how many pixels have each value.
>
> **[2:12](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/converting-grayscale-to-black-and-white?u=76281980&t=132)** Yes, this image has a lot of pixels, over half a million, actually.
>
> **[2:18](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/converting-grayscale-to-black-and-white?u=76281980&t=138)** Remember, 0 is the black end and 255 is the white end.
>
> **[2:25](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/converting-grayscale-to-black-and-white?u=76281980&t=145)** Each peak means that our image has a significant amount of that shade of gray.
>
> **[2:31](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/converting-grayscale-to-black-and-white?u=76281980&t=151)** So just looking at the histogram, we may get an idea of which threshold levels to try.
>
> **[2:38](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/converting-grayscale-to-black-and-white?u=76281980&t=158)** For example, the valley with the lowest point dividing the dominating peaks seems to be near 115, so let's try putting the threshold there and see how it compares to the 127 threshold image.
>
> **[2:55](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/converting-grayscale-to-black-and-white?u=76281980&t=175)** And that's what we have in the next cell.
>
> **[2:57](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/converting-grayscale-to-black-and-white?u=76281980&t=177)** Let's compare the grayscale picture with a threshold of 127 with one that uses 115 for the threshold.
>
> **[3:10](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/converting-grayscale-to-black-and-white?u=76281980&t=190)** And here they are.
>
> **[3:12](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/converting-grayscale-to-black-and-white?u=76281980&t=192)** Take a moment to notice the differences.
>
> **[3:15](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/converting-grayscale-to-black-and-white?u=76281980&t=195)** I noticed some improvement in the outlines of the truck.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), function (4), try. (1)
> **Analogies:** picture (4), for example (1)
> **Cross-References:** go back to (1), in the next (1)
> **Definitions:** is a  (1), means that (1)
> **Env Vars:** eccv (1)
> **UI Navigation:** open the (1)
> **Speakers:** - [instructor] (1)

#### Adaptive thresholding
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/adaptive-thresholding?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/adaptive-thresholding?u=76281980&t=0)** - [Instructor] Let me tell you about a nice technique called adaptive thresholding.
>
> **[0:05](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/adaptive-thresholding?u=76281980&t=5)** As you may know, an image may contain segments with different lightings and shades, so a static threshold for turning it into black and white may favor some segments and ignore others.
>
> **[0:17](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/adaptive-thresholding?u=76281980&t=17)** For these images, different thresholds apply to different segments.
>
> **[0:23](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/adaptive-thresholding?u=76281980&t=23)** Here we have a tutorial about image thresholding at the OpenCV website.
>
> **[0:29](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/adaptive-thresholding?u=76281980&t=29)** It showcases two functions to perform adaptive thresholding on a Sudoku image with a big shadow over it.
>
> **[0:37](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/adaptive-thresholding?u=76281980&t=37)** This shadow is irregular, so the picture is ideal for this example.
>
> **[0:43](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/adaptive-thresholding?u=76281980&t=43)** As you can see, we have the original image, then it's black and white version with a global threshold of 127, which is very much ruined by the shadow.
>
> **[0:56](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/adaptive-thresholding?u=76281980&t=56)** And then we have two adaptive threshold results.
>
> **[0:59](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/adaptive-thresholding?u=76281980&t=59)** One is the adaptive mean thresholding, and the other is the adaptive Gaussian thresholding.
>
> **[1:06](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/adaptive-thresholding?u=76281980&t=66)** Both are doing a great job at extracting the numbers and the lines.
>
> **[1:11](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/adaptive-thresholding?u=76281980&t=71)** I decided to replicate this code with a different Sudoku image.
>
> **[1:15](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/adaptive-thresholding?u=76281980&t=75)** Let's see it in a notebook.
>
> **[1:19](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/adaptive-thresholding?u=76281980&t=79)** First, let me show you my Sudoku image.
>
> **[1:25](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/adaptive-thresholding?u=76281980&t=85)** Notice that this one doesn't have a big shadow like the picture in the OpenCV tutorial, but it does have different backgrounds in the nine number blocks.
>
> **[1:35](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/adaptive-thresholding?u=76281980&t=95)** It seems like this would get in the way of a global threshold.
>
> **[1:41](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/adaptive-thresholding?u=76281980&t=101)** Now, let's look at the histogram for this picture to get a sense of its global threshold.
>
> **[1:48](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/adaptive-thresholding?u=76281980&t=108)** A threshold of 127 doesn't seem so promising, but we'll try it anyway.
>
> **[1:56](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/adaptive-thresholding?u=76281980&t=116)** So in the next cell, we have a modified version of the OpenCV code.
>
> **[2:01](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/adaptive-thresholding?u=76281980&t=121)** By all means, take a moment to read it, but here are the highlights.
>
> **[2:06](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/adaptive-thresholding?u=76281980&t=126)** In line 6, I'm setting the global threshold to 127.
>
> **[2:11](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/adaptive-thresholding?u=76281980&t=131)** You can try other thresholds later, especially the ones in the comment.
>
> **[2:16](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/adaptive-thresholding?u=76281980&t=136)** In line 7, I'm reading the image with OpenCV's imread function.
>
> **[2:22](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/adaptive-thresholding?u=76281980&t=142)** Next, I'm applying a blur filter to it.
>
> **[2:25](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/adaptive-thresholding?u=76281980&t=145)** We'll talk about filters a bit later, but this is performed to get rid of tiny changes by smoothing the picture, especially if it has a big resolution.
>
> **[2:36](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/adaptive-thresholding?u=76281980&t=156)** In line 9, we have the OpenCV function to produce the black and white image with a fixed threshold.
>
> **[2:43](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/adaptive-thresholding?u=76281980&t=163)** The result goes to the th1 object.
>
> **[2:47](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/adaptive-thresholding?u=76281980&t=167)** Then in line 10, we have OpenCV's adaptive threshold function to get the black and white image with adaptive mean thresholding as one of the arguments specifies.
>
> **[2:59](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/adaptive-thresholding?u=76281980&t=179)** For each pixel, this function sets the threshold at the average of a specified neighborhood area for that pixel.
>
> **[3:08](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/adaptive-thresholding?u=76281980&t=188)** This area is a square with the pixel of interest at the middle, so this block size must be an odd number.
>
> **[3:16](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/adaptive-thresholding?u=76281980&t=196)** That's the next to last argument with the value 33.
>
> **[3:22](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/adaptive-thresholding?u=76281980&t=202)** In line 12, we have the same function performing adaptive Gaussian thresholding.
>
> **[3:28](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/adaptive-thresholding?u=76281980&t=208)** This is similar to the previous one, but it performs a weighted average of the pixels in the neighborhood area.
>
> **[3:35](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/adaptive-thresholding?u=76281980&t=215)** The weights are larger near the pixel of interest and smaller the farther we go in the shape of the Gaussian bell curve.
>
> **[3:45](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/adaptive-thresholding?u=76281980&t=225)** So let's see the results.
>
> **[3:49](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/adaptive-thresholding?u=76281980&t=229)** Here we have the original image and the result of a global threshold of 127.
>
> **[3:55](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/adaptive-thresholding?u=76281980&t=235)** As you can see, some numbers are missing parts and the lines are gone.
>
> **[4:02](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/adaptive-thresholding?u=76281980&t=242)** Now here we have the results for adaptive mean and Gaussian thresholding.
>
> **[4:07](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/adaptive-thresholding?u=76281980&t=247)** Both are pretty good, and don't worry about those tiny leftover spots.
>
> **[4:13](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/adaptive-thresholding?u=76281980&t=253)** We will see some methods to get rid of them later.
>
> **[4:17](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/adaptive-thresholding?u=76281980&t=257)** Now, let's go back to the histogram.
>
> **[4:20](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/adaptive-thresholding?u=76281980&t=260)** In an effort to get a better global threshold, you may want to rerun the next cell with different thresholds.
>
> **[4:27](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/adaptive-thresholding?u=76281980&t=267)** Two I found interesting are 215 and 225.
>
> **[4:33](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/adaptive-thresholding?u=76281980&t=273)** So go ahead and try those thresholds.
>
> **[4:37](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/adaptive-thresholding?u=76281980&t=277)** Lastly, let me show you what happens when you apply adaptive thresholding to photographs.
>
> **[4:43](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/adaptive-thresholding?u=76281980&t=283)** Let's see it for the play space image.
>
> **[4:49](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/adaptive-thresholding?u=76281980&t=289)** As you can see, the borders are highlighted, making it look as if artistically drawn by hand.
>
> **[4:56](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/adaptive-thresholding?u=76281980&t=296)** Go ahead and try it with your own pictures.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), function (5), static (1)
> **Analogies:** picture (4), similar to (1)
> **Cross-References:** in the next (1), go back to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Removing color
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-removing-color?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-removing-color?u=76281980&t=0)** (light music)
>
> **[0:05](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-removing-color?u=76281980&t=5)** - [Instructor] It's time for another challenge.
>
> **[0:07](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-removing-color?u=76281980&t=7)** Let's remove color from an image.
>
> **[0:10](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-removing-color?u=76281980&t=10)** Once again, please follow the instructions in the comments.
>
> **[0:15](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-removing-color?u=76281980&t=15)** Your first task is to print a color image of your own.
>
> **[0:20](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-removing-color?u=76281980&t=20)** For that, you must copy the file into this folder, which is 0305.
>
> **[0:28](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-removing-color?u=76281980&t=28)** Task number two is to convert that image to grayscale and display it.
>
> **[0:35](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-removing-color?u=76281980&t=35)** Task number three is to plot a histogram of your grayscale image for you to try and pick a suitable global threshold later.
>
> **[0:45](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-removing-color?u=76281980&t=45)** Lastly, for task number four, create two global threshold images and compare them.
>
> **[0:52](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-removing-color?u=76281980&t=52)** For this, you may use functions from OpenCV or the grayscale to BW function in ECCV.
>
> **[1:01](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-removing-color?u=76281980&t=61)** This should take you about 15 minutes.
>
> **[1:03](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-removing-color?u=76281980&t=63)** When you're done, check out the next video to see my solution.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), this, (1), function (1)
> **Env Vars:** eccv (1)
> **Cross-References:** next video (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (light music) (1)

#### Solution: Removing color
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-removing-color?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-removing-color?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-removing-color?u=76281980&t=5)** - [Instructor] How did you do? Here's my solution.
>
> **[0:08](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-removing-color?u=76281980&t=8)** First, I used the picture I took of a sunset at the beach.
>
> **[0:13](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-removing-color?u=76281980&t=13)** There it is. That's the Pacific Ocean, by the way.
>
> **[0:19](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-removing-color?u=76281980&t=19)** Next, I converted it to gray scale using the weighted average method I showed you earlier.
>
> **[0:27](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-removing-color?u=76281980&t=27)** And here we have the resulting gray scale image.
>
> **[0:33](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-removing-color?u=76281980&t=33)** Then, here's my histogram code.
>
> **[0:37](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-removing-color?u=76281980&t=37)** Looking at it, I picked two crevices I found interesting for the thresholds.
>
> **[0:42](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-removing-color?u=76281980&t=42)** These are at 115 and 175.
>
> **[0:49](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-removing-color?u=76281980&t=49)** So in the next cell, I applied these thresholds in lines eight and nine. Let's run it.
>
> **[0:58](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-removing-color?u=76281980&t=58)** This took a while because I used my gray scale to BW function.
>
> **[1:04](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-removing-color?u=76281980&t=64)** Here are the resulting black and white pictures.
>
> **[1:07](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-removing-color?u=76281980&t=67)** One of the main problems with global thresholding we can see here is that each of these images has captured some important details that the other missed.
>
> **[1:17](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-removing-color?u=76281980&t=77)** But sadly, they both missed the sun.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), function (1)
> **Cross-References:** in the next (1)
> **Analogies:** picture (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)


### 4. Filters

> [↑ Back to Table of Contents](#table-of-contents)

#### Convolution filters
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/convolution-filters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/convolution-filters?u=76281980&t=0)** - [Instructor] Let me tell you about convolution filters, a special category of operations that can be applied to gray scale and color images.
>
> **[0:09](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/convolution-filters?u=76281980&t=9)** A convolution filter consists in taking a kernel, which is a small square matrix of odd dimensions, and we calculate the value of a corresponding pixel in a new resulting image exactly where the center of the kernel overlaps with the original picture.
>
> **[0:28](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/convolution-filters?u=76281980&t=28)** This new pixel is a function of the kernel and the overlapping pixels.
>
> **[0:34](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/convolution-filters?u=76281980&t=34)** In this example, the new pixel is calculated with a weighted sum of the overlapping values.
>
> **[0:41](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/convolution-filters?u=76281980&t=41)** You can think of the kernel as the set of weights.
>
> **[0:44](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/convolution-filters?u=76281980&t=44)** You'll multiply by the values in the overlapping pixels of the original picture.
>
> **[0:50](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/convolution-filters?u=76281980&t=50)** The kernel is overlapped with every pixel in the original picture to produce the resulting picture.
>
> **[0:58](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/convolution-filters?u=76281980&t=58)** Let me show you an example.
>
> **[1:01](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/convolution-filters?u=76281980&t=61)** Let's suppose we have the gray scale image at the left, and we want to run the three by three kernel at the right throughout this picture to produce a new one.
>
> **[1:12](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/convolution-filters?u=76281980&t=72)** If we start with this overlap, the resulting value in the new image will be the result of adding all the products of the overlapped values.
>
> **[1:22](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/convolution-filters?u=76281980&t=82)** That's one times four plus two times zero, plus one times two, and so on.
>
> **[1:29](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/convolution-filters?u=76281980&t=89)** That comes to 56.
>
> **[1:32](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/convolution-filters?u=76281980&t=92)** At the neighboring pixel to the right, we get 66, at the next one, 76, and so on and so forth.
>
> **[1:43](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/convolution-filters?u=76281980&t=103)** Now, you may be wondering what happens with the pixels at the edges.
>
> **[1:48](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/convolution-filters?u=76281980&t=108)** In this example, we're talking about one level of missing pixels outwards because our kernel is three by three.
>
> **[1:57](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/convolution-filters?u=76281980&t=117)** If our kernel was five by five, then we'd be missing two levels of pixels outwards, so we have a problem with corner pixels and also with border pixels at the sites.
>
> **[2:13](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/convolution-filters?u=76281980&t=133)** Luckily, this is a solved problem.
>
> **[2:16](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/convolution-filters?u=76281980&t=136)** There are several methods to handle ledges, and they all involved extending the picture prior to running the filter.
>
> **[2:24](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/convolution-filters?u=76281980&t=144)** In our case, we could make the picture grow outward by a thickness of one pixel, and these pixels may be black, some level of gray, or an extension of the edge pixels like this.
>
> **[2:39](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/convolution-filters?u=76281980&t=159)** Notice that the extended pixels are the same as the edge pixels and corner pixels extend diagonally.
>
> **[2:48](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/convolution-filters?u=76281980&t=168)** This way we can freely run the kernel through the picture at the corners and at the sides.
>
> **[2:56](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/convolution-filters?u=76281980&t=176)** Lastly, let me tell you a few details about convolution filters.
>
> **[3:01](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/convolution-filters?u=76281980&t=181)** First, they take long to compute because we must traverse every pixel in the original picture, each time performing as many multiplication as the kernel's elements, plus one summation.
>
> **[3:14](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/convolution-filters?u=76281980&t=194)** However, convolution filters are highly parallelizable because as you may have noticed, each pixel in the resulting image is a function of the original picture and the kernel.
>
> **[3:28](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/convolution-filters?u=76281980&t=208)** In other words, all pixels in the new image are independent from each other.
>
> **[3:34](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/convolution-filters?u=76281980&t=214)** This means that computers with a graphics processor with hundreds or thousands, of course, can do a great job at running convolution filters.
>
> **[3:44](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/convolution-filters?u=76281980&t=224)** Virtually every software tool you use for image processing or computer vision takes advantage of this fact.
>
> **[3:52](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/convolution-filters?u=76281980&t=232)** OpenCV is no exception.
>
> **[3:55](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/convolution-filters?u=76281980&t=235)** Also, convolution filters are capable of highlighting certain features of pictures, as you will see up ahead.
>
> **[4:04](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/convolution-filters?u=76281980&t=244)** Now, you might be wondering how this works with a color picture.
>
> **[4:08](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/convolution-filters?u=76281980&t=248)** Well, for color images, the process is applied to each channel, which is equivalent to having a 3D kernel with the same shape for all channels.
>
> **[4:19](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/convolution-filters?u=76281980&t=259)** However, you may use a 3D kernel with different contents for each channel.

> [!info]- Semantic Content
>
> **Analogies:** picture (11)
> **Code Keywords:** let (4), function (2), case, (1), this. (1)
> **Definitions:** is a  (4), in other words (1), means that (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### Average filters
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/average-filters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/average-filters?u=76281980&t=0)** - [Instructor] Let's experiment with average filters, which use the kernel to calculate the average of all overlapping pixels.
>
> **[0:09](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/average-filters?u=76281980&t=9)** This average is the new pixel, and it produces a blurring effect in the image.
>
> **[0:15](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/average-filters?u=76281980&t=15)** This time, we will use the picture of a house.
>
> **[0:19](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/average-filters?u=76281980&t=19)** Notice that this image has a relatively high resolution.
>
> **[0:24](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/average-filters?u=76281980&t=24)** Next, let's run an average filter using the OpenCV's filter2D function.
>
> **[0:31](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/average-filters?u=76281980&t=31)** We'll use this function because it would take too long with a straightforward function of our own.
>
> **[0:37](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/average-filters?u=76281980&t=37)** It turns out that the mathematics behind convolutions has a lot of non-obvious shortcuts that libraries like OpenCV use to their advantage.
>
> **[0:48](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/average-filters?u=76281980&t=48)** In line three, I'm creating the kernel with a seven by seven matrix where all elements are 1/49th.
>
> **[0:57](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/average-filters?u=76281980&t=57)** If you think about it, that's the weight we need for each pixel if we want to calculate an average.
>
> **[1:04](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/average-filters?u=76281980&t=64)** Notice that I'm creating a matrix of all ones, and then I'm dividing it by 49, which is seven squared.
>
> **[1:14](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/average-filters?u=76281980&t=74)** In line four, I'm using the filter2D function, which takes as arguments the image, then the depth, which is the encoding size of the image, like eight bits or 32 bits.
>
> **[1:27](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/average-filters?u=76281980&t=87)** A value of minus one is used to match the original image depth.
>
> **[1:33](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/average-filters?u=76281980&t=93)** The last argument is the kernel we just created.
>
> **[1:37](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/average-filters?u=76281980&t=97)** The result goes to a variable named blurred.
>
> **[1:42](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/average-filters?u=76281980&t=102)** You might be wondering how this 2D function works with a color picture, which is 3D.
>
> **[1:49](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/average-filters?u=76281980&t=109)** Well, the 2D kernel we just created is copied to create a suitable 3D kernel for all channels in the color picture.
>
> **[1:59](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/average-filters?u=76281980&t=119)** Let's see the results.
>
> **[2:02](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/average-filters?u=76281980&t=122)** I can certainly tell that this image is blurry.
>
> **[2:07](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/average-filters?u=76281980&t=127)** Now let's compare the original image and the blurred one side by side.
>
> **[2:13](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/average-filters?u=76281980&t=133)** Notice how each part of the picture has been blurred.
>
> **[2:18](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/average-filters?u=76281980&t=138)** Now, if you'd like to compare at a better level of detail, you may display sub images.
>
> **[2:26](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/average-filters?u=76281980&t=146)** For example, in this cell, we have a vertical section of the pictures from column 400 to 799.
>
> **[2:38](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/average-filters?u=76281980&t=158)** This way you can compare any section of the pictures.
>
> **[2:43](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/average-filters?u=76281980&t=163)** In this example, we used a seven by seven kernel.
>
> **[2:47](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/average-filters?u=76281980&t=167)** Now the size of the kernel translates to how blurry the resulting image will be.
>
> **[2:54](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/average-filters?u=76281980&t=174)** So now let's see the results for a three by three kernel.
>
> **[2:58](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/average-filters?u=76281980&t=178)** Notice in line five that now I'm dividing the all ones matrix by nine, which is three squared.
>
> **[3:08](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/average-filters?u=76281980&t=188)** Look at the image on the right and observe how minimal the blurring effect has become.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), function (5)
> **Analogies:** picture (4), for example (1)
> **Code Identifiers:** filter2d (2)
> **Speakers:** - [instructor] (1)

#### Median filters
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/median-filters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/median-filters?u=76281980&t=0)** - [Instructor] Not all filters perform the same weighted sum operation.
>
> **[0:04](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/median-filters?u=76281980&t=4)** Median filters can also blur images by picking the pixel with the median value instead of creating a pixel from the average.
>
> **[0:14](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/median-filters?u=76281980&t=14)** To showcase median filters, let's work with a grainy picture of a damaged photograph.
>
> **[0:22](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/median-filters?u=76281980&t=22)** This picture shows several spots and lines caused by damage to the physical photograph as well as a grainy artifact.
>
> **[0:33](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/median-filters?u=76281980&t=33)** Let's use OpenCV's median blur function in line 3.
>
> **[0:39](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/median-filters?u=76281980&t=39)** As arguments, it takes the image and the size of one side of the square neighborhood where the median will be selected.
>
> **[0:47](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/median-filters?u=76281980&t=47)** This is the neighborhood of the pixel of interest, so this pixel will be in the middle of the square.
>
> **[0:54](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/median-filters?u=76281980&t=54)** I'm using a square of five by five pixels.
>
> **[0:58](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/median-filters?u=76281980&t=58)** Notice that this filter doesn't use a kernel because it works with the original pixels exclusively.
>
> **[1:06](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/median-filters?u=76281980&t=66)** In contrast with an average, the median is the middle value in a sample.
>
> **[1:11](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/median-filters?u=76281980&t=71)** So, if we were to put the pixels in this five by five neighborhood in an array and then sort the array in ascending order, the median would be the pixel in the middle of the sorted array.
>
> **[1:25](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/median-filters?u=76281980&t=85)** Let's see the results.
>
> **[1:28](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/median-filters?u=76281980&t=88)** At first glance, we can see that the damage marks are diminished.
>
> **[1:33](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/median-filters?u=76281980&t=93)** We can barely see the lines and the spots are pretty much gone.
>
> **[1:38](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/median-filters?u=76281980&t=98)** But how does this compare to the average filter we saw before?
>
> **[1:44](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/median-filters?u=76281980&t=104)** In the next cell, I'm displaying them side by side.
>
> **[1:48](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/median-filters?u=76281980&t=108)** At the left, we will see the average filter blur, which is created in lines 5 and 6.
>
> **[1:55](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/median-filters?u=76281980&t=115)** And at the right, we'll see the median blur We just created.
>
> **[2:00](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/median-filters?u=76281980&t=120)** Notice that I'm using a five by five kernel for the average because I want to make a fair comparison of these filters.
>
> **[2:08](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/median-filters?u=76281980&t=128)** Indeed, the median filter did a better job at getting rid of the lines and spots.
>
> **[2:16](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/median-filters?u=76281980&t=136)** Now, let's zoom into these two images in vertical sections.
>
> **[2:20](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/median-filters?u=76281980&t=140)** Let's start with the leftmost section.
>
> **[2:25](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/median-filters?u=76281980&t=145)** Both images have leftover lines and dots, but now we have an emerging feature in the median blur picture.
>
> **[2:33](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/median-filters?u=76281980&t=153)** Notice how the horizon looks different in these two pictures.
>
> **[2:38](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/median-filters?u=76281980&t=158)** That's because median filters work with the actual pixels in the original image.
>
> **[2:44](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/median-filters?u=76281980&t=164)** That means that no new colors or shades will come up, but only copies of the original pixels.
>
> **[2:52](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/median-filters?u=76281980&t=172)** This tends to preserve and highlight edges like the horizon we see here.
>
> **[3:00](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/median-filters?u=76281980&t=180)** Now, let's see the middle section.
>
> **[3:04](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/median-filters?u=76281980&t=184)** Once again, we have the damaged marks less visible in the median blur image.
>
> **[3:10](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/median-filters?u=76281980&t=190)** Also, notice that the plantation shadows look a little sharper in the median image.
>
> **[3:19](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/median-filters?u=76281980&t=199)** And now let's see the rightmost section.
>
> **[3:23](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/median-filters?u=76281980&t=203)** Now, we can see a stronger highlight of edges in the flowers and the plantation outlines.
>
> **[3:29](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/median-filters?u=76281980&t=209)** Is this a good thing?
>
> **[3:31](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/median-filters?u=76281980&t=211)** Well, it all depends on the effect you are trying to produce.
>
> **[3:35](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/median-filters?u=76281980&t=215)** To me, it seems a bit unnatural.
>
> **[3:40](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/median-filters?u=76281980&t=220)** Great, now let's see the same procedure in a different image.
>
> **[3:44](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/median-filters?u=76281980&t=224)** This time we'll work with a vintage picture of a group of workers.
>
> **[3:49](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/median-filters?u=76281980&t=229)** This picture is quite grainy and it also shows some damage.
>
> **[3:56](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/median-filters?u=76281980&t=236)** Let's perform a median blur to this picture.
>
> **[3:59](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/median-filters?u=76281980&t=239)** Now, because of the resolution of this picture in line 3, I'm using a smaller neighborhood of three pixels.
>
> **[4:08](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/median-filters?u=76281980&t=248)** It definitely looks a little better.
>
> **[4:13](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/median-filters?u=76281980&t=253)** And now let's see it side by side with its average blur counterparts created in lines 5 and 6.
>
> **[4:20](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/median-filters?u=76281980&t=260)** To be fair, this filter uses a three by three kernel.
>
> **[4:25](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/median-filters?u=76281980&t=265)** At first glance, the details look better to me in the median filter image, the one on the right.
>
> **[4:34](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/median-filters?u=76281980&t=274)** Let's zoom into three sections again.
>
> **[4:37](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/median-filters?u=76281980&t=277)** Here's the leftmost one.
>
> **[4:41](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/median-filters?u=76281980&t=281)** I like the median filters job at highlighting the details without making it look too blurry.
>
> **[4:48](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/median-filters?u=76281980&t=288)** The edges around the worker do look a bit highlighted, but not too much.
>
> **[4:53](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/median-filters?u=76281980&t=293)** Also, look at the detail in the shirt and buttons.
>
> **[5:01](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/median-filters?u=76281980&t=301)** Let's see the middle section.
>
> **[5:04](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/median-filters?u=76281980&t=304)** Once again, notice the detail in the tools.
>
> **[5:08](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/median-filters?u=76281980&t=308)** Now there's a strong artifact in the edges of the saw.
>
> **[5:16](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/median-filters?u=76281980&t=316)** Lastly, let's see the rightmost section.
>
> **[5:20](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/median-filters?u=76281980&t=320)** Once again, the median filtered image on the right looks much more detailed to me.
>
> **[5:30](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/median-filters?u=76281980&t=330)** I have included a third image for you to apply these filters.
>
> **[5:36](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/median-filters?u=76281980&t=336)** This one is a grainy picture of a face.
>
> **[5:40](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/median-filters?u=76281980&t=340)** Try to experiment with several kernel sizes to see if you can improve the quality of the picture.

> [!info]- Semantic Content
>
> **Code Keywords:** let (13), function (1)
> **Analogies:** picture (9)
> **Definitions:** means that (1), is a  (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Gaussian filters
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/gaussian-filters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/gaussian-filters?u=76281980&t=0)** - [Instructor] While average filters calculate the average in the neighborhood of the pixel of interest, a Gaussian filter calculates a weighted average using a kernel with values that match the Gaussian Bell Curve.
>
> **[0:14](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/gaussian-filters?u=76281980&t=14)** Here we have a three by three Gaussian kernel.
>
> **[0:18](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/gaussian-filters?u=76281980&t=18)** Notice that the center is the highest weight and the weights get lower and lower as we go farther from the center.
>
> **[0:27](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/gaussian-filters?u=76281980&t=27)** Let's open the picture of a house we saw before.
>
> **[0:34](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/gaussian-filters?u=76281980&t=34)** For now, try to notice the detail of the original image.
>
> **[0:41](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/gaussian-filters?u=76281980&t=41)** In the next cell, I'm calling OpenCV's Gaussian Blur function in line three.
>
> **[0:47](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/gaussian-filters?u=76281980&t=47)** As arguments, it takes the image, the size of the kernel and the border type.
>
> **[0:54](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/gaussian-filters?u=76281980&t=54)** Notice that the width and height of the kernel can be different from each other, but they must be positive odd numbers.
>
> **[1:03](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/gaussian-filters?u=76281980&t=63)** So let's see the blurred image with a seven by seven kernel.
>
> **[1:08](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/gaussian-filters?u=76281980&t=68)** There you have it.
>
> **[1:09](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/gaussian-filters?u=76281980&t=69)** It's not easy to tell the difference between an image blurred with an average filter and one blurred with a Gaussian filter.
>
> **[1:19](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/gaussian-filters?u=76281980&t=79)** That's why in the next cell, I'm showing all three blur filters at once.
>
> **[1:24](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/gaussian-filters?u=76281980&t=84)** This time, I'll use a large kernel to make it easier to tell the difference between the median, average, and Gaussian filters.
>
> **[1:33](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/gaussian-filters?u=76281980&t=93)** This will be a 15 by 15 kernel.
>
> **[1:37](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/gaussian-filters?u=76281980&t=97)** First notice the extreme blurring and edge artifacts in the median filter image at the right.
>
> **[1:47](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/gaussian-filters?u=76281980&t=107)** Now, like I said, it's tough to tell the difference between the average and the Gaussian filter results.
>
> **[1:55](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/gaussian-filters?u=76281980&t=115)** So let's zoom in to the front door.
>
> **[2:00](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/gaussian-filters?u=76281980&t=120)** Now we can see some differences.
>
> **[2:03](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/gaussian-filters?u=76281980&t=123)** Look at the light fixtures above the door, and also the one next to the door.
>
> **[2:09](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/gaussian-filters?u=76281980&t=129)** The Gaussian filter seems to have preserved some of the detail in spite of the blurring effect.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), function (1), type. (1)
> **Cross-References:** in the next (2)
> **CLI Commands:** make (1)
> **UI Navigation:** open the (1)
> **Analogies:** picture (1)
> **Speakers:** - [instructor] (1)

#### Edge-detection filters
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/edge-detection-filters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/edge-detection-filters?u=76281980&t=0)** - [Instructor] Now, let's talk about edge detection filters, in particular, "Sobel Filters".
>
> **[0:06](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/edge-detection-filters?u=76281980&t=6)** If you pay attention to what the convolution of a kernel is doing, you'll notice that it's assigning more or less important to certain pixels, so you may expect to extract certain features of images depending on the patterns you use in a kernel.
>
> **[0:24](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/edge-detection-filters?u=76281980&t=24)** Here we have two Sobel filters.
>
> **[0:27](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/edge-detection-filters?u=76281980&t=27)** The first kernel detects vertical edges and the second detects horizontal edges.
>
> **[0:34](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/edge-detection-filters?u=76281980&t=34)** In both kernels, notice that the center pixel has a value of 0 along with its row or column.
>
> **[0:41](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/edge-detection-filters?u=76281980&t=41)** Also notice that the kernel has opposite signs in the values at the edges.
>
> **[0:47](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/edge-detection-filters?u=76281980&t=47)** These simple kernels yield very interesting results.
>
> **[0:53](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/edge-detection-filters?u=76281980&t=53)** Let's work with a picture of penguins.
>
> **[0:56](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/edge-detection-filters?u=76281980&t=56)** To keep things simple, I'll convert this image to grayscale.
>
> **[1:00](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/edge-detection-filters?u=76281980&t=60)** Notice in line 13 that I'm using OpenCV's "Convert Color" function for this.
>
> **[1:08](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/edge-detection-filters?u=76281980&t=68)** There are the penguins.
>
> **[1:10](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/edge-detection-filters?u=76281980&t=70)** By applying Sobel filters, we'll detect all edges in this picture.
>
> **[1:16](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/edge-detection-filters?u=76281980&t=76)** Let's start with a vertical Sobel filter created in line three.
>
> **[1:21](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/edge-detection-filters?u=76281980&t=81)** I'm assigning the resulting image to an object named "vr edges".
>
> **[1:26](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/edge-detection-filters?u=76281980&t=86)** By "vr", I mean that this is a vertical filter where the change from positive to negative goes to the right.
>
> **[1:35](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/edge-detection-filters?u=76281980&t=95)** So "v" stands for vertical and "r" stands for right.
>
> **[1:40](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/edge-detection-filters?u=76281980&t=100)** Let's see it.
>
> **[1:42](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/edge-detection-filters?u=76281980&t=102)** Notice that edges with a strong vertical component are highlighted.
>
> **[1:48](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/edge-detection-filters?u=76281980&t=108)** Also notice the lack of horizontal edges.
>
> **[1:53](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/edge-detection-filters?u=76281980&t=113)** Now, let's use the opposite vertical kernel, the one facing to the left.
>
> **[1:59](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/edge-detection-filters?u=76281980&t=119)** That's why I'm creating a new image named vl edges, as in vertical facing to the left.
>
> **[2:06](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/edge-detection-filters?u=76281980&t=126)** Let's see the two resulting images side by side.
>
> **[2:11](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/edge-detection-filters?u=76281980&t=131)** Look closely and try to notice that both images are highlighting vertical edges, but the edges detected by one filter were not detected by the other filter.
>
> **[2:23](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/edge-detection-filters?u=76281980&t=143)** That's because one kernel highlights changes when the intensity drops, while the other highlights changes when the intensity rises.
>
> **[2:34](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/edge-detection-filters?u=76281980&t=154)** So to get a combined image with all vertical edges, let's add these two images.
>
> **[2:40](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/edge-detection-filters?u=76281980&t=160)** In line three, I'm using OpenCV's add function to create the v edges subject.
>
> **[2:47](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/edge-detection-filters?u=76281980&t=167)** Let's see the result.
>
> **[2:50](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/edge-detection-filters?u=76281980&t=170)** Oh, yeah.
>
> **[2:51](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/edge-detection-filters?u=76281980&t=171)** Now we can see all vertical edges in one picture.
>
> **[2:56](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/edge-detection-filters?u=76281980&t=176)** Great.
>
> **[2:57](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/edge-detection-filters?u=76281980&t=177)** Now let's do the same for horizontal edges.
>
> **[3:01](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/edge-detection-filters?u=76281980&t=181)** In line three, we have the horizontal kernel facing down, and in line nine, we have the one facing up.
>
> **[3:09](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/edge-detection-filters?u=76281980&t=189)** Let's see the results side by side.
>
> **[3:12](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/edge-detection-filters?u=76281980&t=192)** Once again, pay attention to the different edges detected.
>
> **[3:16](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/edge-detection-filters?u=76281980&t=196)** The one on the left is highlighting the tops of the penguins' heads, while the one on the right is highlighting the snow they are standing on.
>
> **[3:27](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/edge-detection-filters?u=76281980&t=207)** Now, let's add the two images in the h edges object.
>
> **[3:33](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/edge-detection-filters?u=76281980&t=213)** There. We have all horizontal edges.
>
> **[3:38](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/edge-detection-filters?u=76281980&t=218)** So now that we have all vertical and horizontal edges, it makes sense to add them all.
>
> **[3:44](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/edge-detection-filters?u=76281980&t=224)** I'm doing that in line three by adding v edges and h edges.
>
> **[3:49](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/edge-detection-filters?u=76281980&t=229)** Let's see it.
>
> **[3:52](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/edge-detection-filters?u=76281980&t=232)** There it is, an image that highlights all edges in the penguins picture.
>
> **[3:58](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/edge-detection-filters?u=76281980&t=238)** Now, let's have some fun.
>
> **[4:01](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/edge-detection-filters?u=76281980&t=241)** Let's turn that picture into black and white and get rid of some noise.
>
> **[4:06](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/edge-detection-filters?u=76281980&t=246)** This black and white picture was created with a threshold of 127.
>
> **[4:12](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/edge-detection-filters?u=76281980&t=252)** Feel free to try other thresholds.
>
> **[4:15](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/edge-detection-filters?u=76281980&t=255)** Again, just for fun, let's invert that picture to make it look like a drawing.
>
> **[4:21](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/edge-detection-filters?u=76281980&t=261)** For that, I'm using OpenCV's "bitwise not" function.
>
> **[4:28](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/edge-detection-filters?u=76281980&t=268)** There you have it. A nice drawing of a gang of penguins.

> [!info]- Semantic Content
>
> **Code Keywords:** let (15), function (3), yield (1), this. (1)
> **Analogies:** picture (7)
> **Definitions:** stands for (2), is a  (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Convolution filters
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-convolution-filters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-convolution-filters?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-convolution-filters?u=76281980&t=5)** - [Instructor] Are you ready for your next challenge?
>
> **[0:08](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-convolution-filters?u=76281980&t=8)** This time you'll create your own convolution filter and try it on your own pictures.
>
> **[0:15](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-convolution-filters?u=76281980&t=15)** Task one is to print a color image of your own as usual.
>
> **[0:20](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-convolution-filters?u=76281980&t=20)** Just make sure to assign it to the IMG variable.
>
> **[0:25](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-convolution-filters?u=76281980&t=25)** For task two, you have to define a kernel of your own.
>
> **[0:30](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-convolution-filters?u=76281980&t=30)** Try to apply some logic to its values and try to predict how it will behave.
>
> **[0:35](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-convolution-filters?u=76281980&t=35)** Your kernel may be three by three, five by five, or any size, as long as it's a square of odd numbers.
>
> **[0:44](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-convolution-filters?u=76281980&t=44)** You simply have to modify the kernel definition in line nine.
>
> **[0:49](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-convolution-filters?u=76281980&t=49)** Notice that this kernel leaves the picture unchanged.
>
> **[0:54](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-convolution-filters?u=76281980&t=54)** You don't have to modify the next cell.
>
> **[0:57](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-convolution-filters?u=76281980&t=57)** Just run it to compare your original image with the filtered image.
>
> **[1:03](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-convolution-filters?u=76281980&t=63)** Task three is to create a second filter.
>
> **[1:07](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-convolution-filters?u=76281980&t=67)** Again, modify the identity kernel.
>
> **[1:10](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-convolution-filters?u=76281980&t=70)** Try to be creative.
>
> **[1:12](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-convolution-filters?u=76281980&t=72)** It may be something related to the previous kernel or something totally different.
>
> **[1:19](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-convolution-filters?u=76281980&t=79)** Lastly, run the next cell to compare your two filtered images.
>
> **[1:25](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-convolution-filters?u=76281980&t=85)** This should take you about 15 minutes.
>
> **[1:28](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-convolution-filters?u=76281980&t=88)** When you are done, watch the next video to see my solution.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Env Vars:** img (1)
> **Cross-References:** next video (1)
> **Analogies:** picture (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)

#### Solution: Convolution filters
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-convolution-filters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-convolution-filters?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-convolution-filters?u=76281980&t=5)** - [Instructor] How did you do?
>
> **[0:06](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-convolution-filters?u=76281980&t=6)** Let me show you my solution.
>
> **[0:09](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-convolution-filters?u=76281980&t=9)** For task 1, I used a nice picture of two Komodo dragons, my second favorite animal species.
>
> **[0:17](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-convolution-filters?u=76281980&t=17)** Look at line 9.
>
> **[0:19](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-convolution-filters?u=76281980&t=19)** Since I decided to play around with edge detection filters, I converted the image to gray scale in this step.
>
> **[0:26](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-convolution-filters?u=76281980&t=26)** Let's see those guys.
>
> **[0:29](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-convolution-filters?u=76281980&t=29)** And there they are, two fellas sharing a nice hug.
>
> **[0:35](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-convolution-filters?u=76281980&t=35)** For task 2, I decided to create a variation of a Sobel filter.
>
> **[0:41](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-convolution-filters?u=76281980&t=41)** This one has a diagonal pattern, like a straight line with a positive slope.
>
> **[0:46](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-convolution-filters?u=76281980&t=46)** Let's see it working.
>
> **[0:50](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-convolution-filters?u=76281980&t=50)** Notice that the positive slopes are indeed highlighted.
>
> **[0:56](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-convolution-filters?u=76281980&t=56)** My second filter is the negative slope version of the first one, so I'm expecting to highlight the other diagonal edges.
>
> **[1:05](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-convolution-filters?u=76281980&t=65)** Let's see it.
>
> **[1:09](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-convolution-filters?u=76281980&t=69)** Yes, the negative slopes are now highlighted.
>
> **[1:13](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-convolution-filters?u=76281980&t=73)** Lastly, let's see both images side by side.
>
> **[1:17](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-convolution-filters?u=76281980&t=77)** There they are.
>
> **[1:19](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-convolution-filters?u=76281980&t=79)** It looks like the grass got in the way.
>
> **[1:21](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-convolution-filters?u=76281980&t=81)** Maybe some blurring at the beginning would've been a good idea.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5)
> **Analogies:** picture (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)


### 5. Image Scaling

> [↑ Back to Table of Contents](#table-of-contents)

#### Image downscaling methods
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-downscaling-methods?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-downscaling-methods?u=76281980&t=0)** - [Instructor] Image downscaling means taking an image of a certain resolution and producing a new image with a lower resolution.
>
> **[0:09](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-downscaling-methods?u=76281980&t=9)** But why would we want to do that to a perfectly good image of a tiger?
>
> **[0:13](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-downscaling-methods?u=76281980&t=13)** Well, maybe the high resolution tiger is taking up too much storage space and we only need to print a thumbnail, which will look a lot smaller on a screen.
>
> **[0:24](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-downscaling-methods?u=76281980&t=24)** Like this.
>
> **[0:26](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-downscaling-methods?u=76281980&t=26)** This smaller tiger is the same low resolution tiger, not the high resolution one, and it looks good enough for me.
>
> **[0:35](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-downscaling-methods?u=76281980&t=35)** Another reason would be to perform operations on a picture to extract data from it where a lower resolution would yield the same result as a higher resolution.
>
> **[0:46](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-downscaling-methods?u=76281980&t=46)** This would help speed up these operations.
>
> **[0:50](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-downscaling-methods?u=76281980&t=50)** So what's the problem we face when downscaling an image?
>
> **[0:54](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-downscaling-methods?u=76281980&t=54)** Let's say we want to downscale this image by a factor of three.
>
> **[0:58](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-downscaling-methods?u=76281980&t=58)** That is, we want to convert a six by six image into a two by two image.
>
> **[1:05](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-downscaling-methods?u=76281980&t=65)** The problem is to determine the color we need in each pixel of the lower resolution image.
>
> **[1:11](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-downscaling-methods?u=76281980&t=71)** Looking at the original picture, we can see that there are four large squares composed of nine pixels each, and each of these squares corresponds to one pixel in the new image.
>
> **[1:25](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-downscaling-methods?u=76281980&t=85)** The problem is to decide what to do with the pixels in each square to produce the new pixel.
>
> **[1:32](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-downscaling-methods?u=76281980&t=92)** We could use an average, a median, or even complicated functions that consider the neighboring pixels or gradients.
>
> **[1:40](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-downscaling-methods?u=76281980&t=100)** The problem becomes more complicated when the shrink factor is not an integer, like a factor of 1.5.
>
> **[1:48](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-downscaling-methods?u=76281980&t=108)** As you can see, the problem in these cases is that we won't always get an integer number of pixels to work with, but this problem also comes up when trying to shrink an image with a resolution that's not divisible by the shrinking factor.
>
> **[2:04](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-downscaling-methods?u=76281980&t=124)** There are several ways to tackle this problem.

> [!info]- Semantic Content
>
> **Code Keywords:** this. (1), yield (1), let (1)
> **Analogies:** picture (2)
> **Versions:** 1.5 (1)
> **Speakers:** - [instructor] (1)

#### Downscaling example
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/downscaling-example?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/downscaling-example?u=76281980&t=0)** - [Instructor] Ready to downscale a picture?
>
> **[0:03](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/downscaling-example?u=76281980&t=3)** Let's work with a close-up of the water volcano we saw before.
>
> **[0:09](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/downscaling-example?u=76281980&t=9)** Notice the resolution.
>
> **[0:10](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/downscaling-example?u=76281980&t=10)** It's 389 rows by 536 columns.
>
> **[0:19](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/downscaling-example?u=76281980&t=19)** Now, let's downscale it.
>
> **[0:21](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/downscaling-example?u=76281980&t=21)** For this, I'm calling the downscale function I wrote in ECCV.
>
> **[0:26](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/downscaling-example?u=76281980&t=26)** Let's see the code.
>
> **[0:28](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/downscaling-example?u=76281980&t=28)** My function starts at line 40 and it receives two parameters, the picture, "pic", and the scaling factor, "n".
>
> **[0:38](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/downscaling-example?u=76281980&t=38)** Feel free to hit pause and examine the code.
>
> **[0:41](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/downscaling-example?u=76281980&t=41)** Here are the highlights.
>
> **[0:43](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/downscaling-example?u=76281980&t=43)** In lines 41 through 44, I'm dealing with the problem of downscaling an image with a resolution that's not divisible by the scaling factor.
>
> **[0:54](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/downscaling-example?u=76281980&t=54)** I'm simply disregarding the remaining pixels at the end of the rows and columns.
>
> **[1:00](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/downscaling-example?u=76281980&t=60)** This isn't bad at all, because I'm only disregarding up to n minus one pixels per row and column, and I'm simplifying the problem greatly.
>
> **[1:12](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/downscaling-example?u=76281980&t=72)** In line 47, I'm creating an empty image object of the smaller dimensions.
>
> **[1:18](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/downscaling-example?u=76281980&t=78)** Then, inside the nested for loops, I'm calculating the average of every n by n square in the original picture for each color channel to produce each pixel in the smaller image.
>
> **[1:32](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/downscaling-example?u=76281980&t=92)** Alright, let's go back to the notebook.
>
> **[1:36](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/downscaling-example?u=76281980&t=96)** In this cell, I'm downscaling the volcano picture by a linear factor of four.
>
> **[1:42](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/downscaling-example?u=76281980&t=102)** That is, I'm making the image area 16 times smaller.
>
> **[1:48](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/downscaling-example?u=76281980&t=108)** Also, notice that I'm using the adapt image function because the downscaler may have left some pixels outside the acceptable range for the image show function.
>
> **[2:00](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/downscaling-example?u=76281980&t=120)** Let's see it.
>
> **[2:03](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/downscaling-example?u=76281980&t=123)** Here we can see the expected pixelation artifact.
>
> **[2:09](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/downscaling-example?u=76281980&t=129)** Now, let's see the two images side by side as usual.
>
> **[2:15](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/downscaling-example?u=76281980&t=135)** Notice the resulting dimensions.
>
> **[2:17](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/downscaling-example?u=76281980&t=137)** Grab your calculator and try to verify that the correct downscaling was performed.
>
> **[2:24](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/downscaling-example?u=76281980&t=144)** The difference is visible everywhere.
>
> **[2:26](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/downscaling-example?u=76281980&t=146)** Look at the volcano slopes and the roof shadows.
>
> **[2:31](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/downscaling-example?u=76281980&t=151)** Now let's display both images, but at a suitable size for the lower resolution one.
>
> **[2:38](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/downscaling-example?u=76281980&t=158)** It's difficult to tell the difference at this size, so we might as well use the smaller image, which uses much less storage space anyway.
>
> **[2:50](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/downscaling-example?u=76281980&t=170)** Now let me save the smaller image in a file named "smaller.bmp".
>
> **[2:56](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/downscaling-example?u=76281980&t=176)** Okay, now let me open the newly created file.
>
> **[3:02](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/downscaling-example?u=76281980&t=182)** Here it is. It looks okay to me.
>
> **[3:08](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/downscaling-example?u=76281980&t=188)** And lastly, let me repeat the process for a different picture.
>
> **[3:12](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/downscaling-example?u=76281980&t=192)** But now let's use a shrink factor of 10 so the resulting picture is 100 times smaller.
>
> **[3:19](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/downscaling-example?u=76281980&t=199)** More importantly, neither the width nor the height of this image is divisible by 10, so I will discard some pixels in the process.
>
> **[3:30](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/downscaling-example?u=76281980&t=210)** Look at the resolutions at the top.
>
> **[3:33](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/downscaling-example?u=76281980&t=213)** I discarded three pixels in every row and nine pixels in every column of the original image.
>
> **[3:41](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/downscaling-example?u=76281980&t=221)** Can you tell by looking at the two pictures? I can't.
>
> **[3:46](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/downscaling-example?u=76281980&t=226)** The pixelation is evident, but the absence of the discarded pixels is not.

> [!info]- Semantic Content
>
> **Code Keywords:** let (11), function (4), this, (1)
> **Analogies:** picture (6)
> **Env Vars:** eccv (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** open the (1)
> **Speakers:** - [instructor] (1)

#### Image upscaling methods
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-upscaling-methods?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-upscaling-methods?u=76281980&t=0)** - [Instructor] Image upscaling is a more ambitious operation.
>
> **[0:04](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-upscaling-methods?u=76281980&t=4)** Now we want to produce a higher resolution image from a lower resolution one.
>
> **[0:10](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-upscaling-methods?u=76281980&t=10)** It may sound impossible at first, and I claim that it is impossible indeed.
>
> **[0:15](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-upscaling-methods?u=76281980&t=15)** Now, the fact that something is mathematically impossible doesn't necessarily mean that there aren't pretty good approximations.
>
> **[0:24](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-upscaling-methods?u=76281980&t=24)** Well, there are some upscaling algorithms that can stretch images well enough to fool many humans.
>
> **[0:31](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-upscaling-methods?u=76281980&t=31)** Here's the problem we face when upscaling an image.
>
> **[0:35](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-upscaling-methods?u=76281980&t=35)** Let's say we want to do the opposite as before.
>
> **[0:38](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-upscaling-methods?u=76281980&t=38)** Now, we want to upscale this image by a factor of three.
>
> **[0:43](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-upscaling-methods?u=76281980&t=43)** That is, we want to convert a two by two image to a six by six image.
>
> **[0:49](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-upscaling-methods?u=76281980&t=49)** The problem is now to determine the colors we need in each pixel of the higher resolution image.
>
> **[0:56](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-upscaling-methods?u=76281980&t=56)** The trivial solution would be to fill all high resolution pixels with the same color of the low resolution pixel they're extending, but this would look pixelated, because it would be simply an enlarged copy of the original picture at a higher resolution.
>
> **[1:15](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-upscaling-methods?u=76281980&t=75)** A better solution would try and guess what colors in the high resolution pixels would produce the missing details.
>
> **[1:23](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-upscaling-methods?u=76281980&t=83)** If interpolation algorithms come to mind, you're onto something.
>
> **[1:28](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-upscaling-methods?u=76281980&t=88)** Here we can see that the high resolution pixels at the borders are trying to create a smooth change to the color in the neighboring low resolution pixels.
>
> **[1:39](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-upscaling-methods?u=76281980&t=99)** And once again, a non integer growth factor is a complication, because we're left with low resolution pixels creating non integer numbers of high resolution pixels.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2)
> **Code Keywords:** let (1)
> **Analogies:** picture (1)
> **Speakers:** - [instructor] (1)

#### Upscaling example
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/upscaling-example?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/upscaling-example?u=76281980&t=0)** - [Instructor] Now let's try our hand at upscaling an image, which is a bit more complicated than downscaling.
>
> **[0:08](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/upscaling-example?u=76281980&t=8)** This time, we'll start with the downscaled image from the previous notebook.
>
> **[0:15](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/upscaling-example?u=76281980&t=15)** There it is.
>
> **[0:18](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/upscaling-example?u=76281980&t=18)** Now I will use the upscale by 2 function from ECCV.
>
> **[0:24](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/upscaling-example?u=76281980&t=24)** Let's see it.
>
> **[0:28](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/upscaling-example?u=76281980&t=28)** The function starts at line 58, and it only receives the picture as an argument.
>
> **[0:34](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/upscaling-example?u=76281980&t=34)** In lines 59 through 64, I create the larger image object with an extension of its last row and column.
>
> **[0:43](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/upscaling-example?u=76281980&t=43)** That's because my algorithm calculates the higher-resolution pixels by interpolating with the neighbors.
>
> **[0:50](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/upscaling-example?u=76281980&t=50)** So these extra pixels are there so that the last pixels have neighbors.
>
> **[0:56](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/upscaling-example?u=76281980&t=56)** Now, don't let the body of the nested loops spook you.
>
> **[1:00](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/upscaling-example?u=76281980&t=60)** All it's doing is calculating the four new pixels from each lower resolution pixel.
>
> **[1:07](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/upscaling-example?u=76281980&t=67)** Let me show you.
>
> **[1:10](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/upscaling-example?u=76281980&t=70)** Let's say we want to calculate the four pixels that would expand the top-left pixel in the leftmost picture.
>
> **[1:17](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/upscaling-example?u=76281980&t=77)** So let's fill up the top-left square in the empty picture at the right.
>
> **[1:23](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/upscaling-example?u=76281980&t=83)** The easiest higher resolution pixel is the top left one because it's just a copy of the original pixel.
>
> **[1:31](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/upscaling-example?u=76281980&t=91)** So this large pixel alone gives us this smaller pixel at the right.
>
> **[1:39](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/upscaling-example?u=76281980&t=99)** Now, the top right pixel in the higher-resolution image is the average of the source pixel and its right neighbor.
>
> **[1:49](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/upscaling-example?u=76281980&t=109)** So these two produce this one.
>
> **[1:54](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/upscaling-example?u=76281980&t=114)** Remember, the resulting color is the average of the two neighbors involved.
>
> **[2:00](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/upscaling-example?u=76281980&t=120)** Moving on, the bottom-left pixel is the average of the source pixel and its lower neighbor.
>
> **[2:09](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/upscaling-example?u=76281980&t=129)** So these two produce this one.
>
> **[2:13](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/upscaling-example?u=76281980&t=133)** And lastly, the bottom-right pixel is the average of the source pixel and its lower-right neighbor.
>
> **[2:21](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/upscaling-example?u=76281980&t=141)** So these two produce this one.
>
> **[2:27](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/upscaling-example?u=76281980&t=147)** So that's what's being calculated in the body of the nested loops.
>
> **[2:31](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/upscaling-example?u=76281980&t=151)** Okay, let's go back to the notebook.
>
> **[2:35](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/upscaling-example?u=76281980&t=155)** And let's see the upscaled image.
>
> **[2:40](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/upscaling-example?u=76281980&t=160)** Remember, this one has interpolated pixels to achieve a higher resolution while avoiding a pixelation artifact.
>
> **[2:51](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/upscaling-example?u=76281980&t=171)** Now let's compare it with the original smaller image.
>
> **[2:57](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/upscaling-example?u=76281980&t=177)** Notice the resolutions in the axes.
>
> **[3:00](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/upscaling-example?u=76281980&t=180)** The lower resolution picture is at the left and the higher resolution picture is at the right.
>
> **[3:06](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/upscaling-example?u=76281980&t=186)** I can definitely see some improvement.
>
> **[3:11](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/upscaling-example?u=76281980&t=191)** Now let me upscale the enlarged image further and compare it with the small image.
>
> **[3:18](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/upscaling-example?u=76281980&t=198)** The higher resolution picture seems a bit blurry, but it's definitely less pixelated.
>
> **[3:28](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/upscaling-example?u=76281980&t=208)** Let's quickly save the larger image into a file.
>
> **[3:32](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/upscaling-example?u=76281980&t=212)** All right, now that we have reduced an image to 1/16 its original size and then stretched it back 16 times, that's compared to your original resolution volcano picture with the final shrunk and stretched image.
>
> **[3:49](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/upscaling-example?u=76281980&t=229)** This is going to be fun.
>
> **[3:52](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/upscaling-example?u=76281980&t=232)** Notice that the dimensions of these two pictures are the same.
>
> **[3:57](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/upscaling-example?u=76281980&t=237)** Now, visibly, the final image lost information at some point.
>
> **[4:02](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/upscaling-example?u=76281980&t=242)** This happened in the downscaling process where 16 pixels were packed into one single pixel.
>
> **[4:09](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/upscaling-example?u=76281980&t=249)** That is to say, we downscaled the image in one step, but upscaled it in two steps.
>
> **[4:18](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/upscaling-example?u=76281980&t=258)** If you are curious, you may want to repeat the whole experiment, but downscaling the image twice by a factor of two instead of once by a factor of four.
>
> **[4:29](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/upscaling-example?u=76281980&t=269)** Would you expect any changes in this final comparison?

> [!info]- Semantic Content
>
> **Code Keywords:** let (11), function (2)
> **Analogies:** picture (7)
> **Env Vars:** eccv (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Resize a picture
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-resize-a-picture?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-resize-a-picture?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-resize-a-picture?u=76281980&t=5)** - [Narrator] It's time for another challenge.
>
> **[0:07](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-resize-a-picture?u=76281980&t=7)** Let's resize some pictures.
>
> **[0:11](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-resize-a-picture?u=76281980&t=11)** As usual, Task #1 is to pick a picture of your own and display it.
>
> **[0:18](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-resize-a-picture?u=76281980&t=18)** Task #2 is to downscale that image to the resolution of your choice.
>
> **[0:24](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-resize-a-picture?u=76281980&t=24)** Feel free to use the downscale function from ECCV or any other function, either made by yourself or from a library, like OpenCV's resize function.
>
> **[0:37](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-resize-a-picture?u=76281980&t=37)** Finally, Task #3 is to upscale your image.
>
> **[0:42](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-resize-a-picture?u=76281980&t=42)** You may want to do this with your original image or with the downscaled image from the previous cell.
>
> **[0:49](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-resize-a-picture?u=76281980&t=49)** Again, feel free to use the upscale by two function from ECCV or any other.
>
> **[0:57](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-resize-a-picture?u=76281980&t=57)** This should take you about 15 minutes.
>
> **[0:59](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-resize-a-picture?u=76281980&t=59)** After you're done, watch the next video so I can show you my solution.

> [!info]- Semantic Content
>
> **Code Keywords:** function (4), let (1), finally, (1)
> **Env Vars:** eccv (2)
> **Cross-References:** next video (1)
> **Analogies:** picture (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (bright music) (1)

#### Solution: Resize a picture
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-resize-a-picture?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-resize-a-picture?u=76281980&t=0)** - [Instructor] Let me show you my solution.
>
> **[0:07](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-resize-a-picture?u=76281980&t=7)** For this challenge, I used the picture of a pizza inside a brick oven.
>
> **[0:12](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-resize-a-picture?u=76281980&t=12)** There it is.
>
> **[0:13](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-resize-a-picture?u=76281980&t=13)** It looks yummy.
>
> **[0:16](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-resize-a-picture?u=76281980&t=16)** Now, for task two, I made a comparison of a downscale made with a linear factor of four using my ECCV function with one made by open CVs resize function.
>
> **[0:30](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-resize-a-picture?u=76281980&t=30)** As you can see in line 10, this function receives the target size as an argument, so I cheated by looking at the resulting size from my function and then sent those dimensions to OpenCVs resize function.
>
> **[0:45](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-resize-a-picture?u=76281980&t=45)** Let's see the comparison.
>
> **[0:48](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-resize-a-picture?u=76281980&t=48)** At the left, we have my downscaled image and on the right is the one by OpenCV.
>
> **[0:55](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-resize-a-picture?u=76281980&t=55)** At this size, I honestly can't tell the difference.
>
> **[1:00](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-resize-a-picture?u=76281980&t=60)** For task three, I decided to blow up the small image four times to get the original resolution.
>
> **[1:07](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-resize-a-picture?u=76281980&t=67)** Once again, I compared my implementation with that of OpenCV.
>
> **[1:12](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-resize-a-picture?u=76281980&t=72)** Let's see it.
>
> **[1:15](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-resize-a-picture?u=76281980&t=75)** Just like before, I can't tell the difference at this size, which I guess is good news.

> [!info]- Semantic Content
>
> **Code Keywords:** function (5), let (3)
> **Analogies:** picture (1), just like (1)
> **Env Vars:** eccv (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 6. Fun with Cuts

> [↑ Back to Table of Contents](#table-of-contents)

#### Image cuts
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-cuts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-cuts?u=76281980&t=0)** - [Instructor] Before wrapping up the course, let me introduce you to "Image Cuts", an application of image processing in the amazing art of computational photography.
>
> **[0:12](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-cuts?u=76281980&t=12)** These are the techniques used by photographic software like Photoshop or your smartphone's camera.
>
> **[0:19](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-cuts?u=76281980&t=19)** "Cuts" are a family of pixel level operations.
>
> **[0:23](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-cuts?u=76281980&t=23)** It's just like cutting a printed photograph with scissors.
>
> **[0:27](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-cuts?u=76281980&t=27)** Cuts are useful for stitching pictures together, as we'll see shortly.
>
> **[0:32](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-cuts?u=76281980&t=32)** But Cuts have a wide variety of other applications, like seam carving, for example, which is a technique for resizing images by adding or removing pixels with the same type of Cuts you are about to see.
>
> **[0:47](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-cuts?u=76281980&t=47)** A very natural application of cuts is in stitching two images together.
>
> **[0:53](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-cuts?u=76281980&t=53)** Let me show you an example.
>
> **[0:55](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-cuts?u=76281980&t=55)** Suppose that we have these two unrelated images and we want to create one novel combination of them.
>
> **[1:03](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-cuts?u=76281980&t=63)** The picture at the left was taken by myself one day I went for a walk and the picture at the right is a professional picture of a tiger in what appears to be a jungle.
>
> **[1:15](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-cuts?u=76281980&t=75)** One way to stitch these two pictures together is to simply put them one next to the other, like this.
>
> **[1:22](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-cuts?u=76281980&t=82)** But as you can see, there's a vertical artifact that gives away the fact that these are two separate pictures.
>
> **[1:30](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-cuts?u=76281980&t=90)** Instead, we can grab the two images and cut them in a very special pattern that minimizes the perceived changes in a seam, like this.
>
> **[1:41](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-cuts?u=76281980&t=101)** Then we can put the two pictures together right at the cut.
>
> **[1:46](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-cuts?u=76281980&t=106)** Let's stop right before we complete the stitch so we can see where the seam is.
>
> **[1:51](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-cuts?u=76281980&t=111)** Interestingly, it's surrounding the plant at the left, so this is how the final picture looks.
>
> **[1:59](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-cuts?u=76281980&t=119)** Notice how peculiar this picture looks.
>
> **[2:02](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-cuts?u=76281980&t=122)** It's difficult to find the seam even for someone with a keen eye.
>
> **[2:09](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-cuts?u=76281980&t=129)** So how can we stitch two pictures together?
>
> **[2:12](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-cuts?u=76281980&t=132)** First, we must define an overlap between the two pictures.
>
> **[2:16](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-cuts?u=76281980&t=136)** This is the number of pixels we will overlap the two pictures horizontally.
>
> **[2:22](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-cuts?u=76281980&t=142)** Next, we calculate the error between the overlapping parts.
>
> **[2:26](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-cuts?u=76281980&t=146)** This can be as simple as the squared difference of the pixels.
>
> **[2:31](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-cuts?u=76281980&t=151)** Then, inside the arrow section, we find the path with the minimum change.
>
> **[2:37](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-cuts?u=76281980&t=157)** This is the seam.
>
> **[2:39](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-cuts?u=76281980&t=159)** Lastly, we stitch the images at the seam.
>
> **[2:43](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-cuts?u=76281980&t=163)** Let's see these steps in the tiger example.
>
> **[2:47](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-cuts?u=76281980&t=167)** First, we start with the two images, which must have the same height.
>
> **[2:52](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-cuts?u=76281980&t=172)** Then we overlap them.
>
> **[2:54](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-cuts?u=76281980&t=174)** For this example, I used an overlap of 100 pixels.
>
> **[2:59](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-cuts?u=76281980&t=179)** This is the overlap we are interested in.
>
> **[3:02](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-cuts?u=76281980&t=182)** Now, we calculate the error for this overlap.
>
> **[3:06](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-cuts?u=76281980&t=186)** It's much easier to remove the color at this point.
>
> **[3:10](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-cuts?u=76281980&t=190)** Then we can perform the subtraction and square it to get only positive values.
>
> **[3:16](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-cuts?u=76281980&t=196)** Here's what the error section looks like.
>
> **[3:19](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-cuts?u=76281980&t=199)** Inside this error section, we can calculate the path with the minimum cost.
>
> **[3:24](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-cuts?u=76281980&t=204)** Visually, that would be the darkest path.
>
> **[3:28](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-cuts?u=76281980&t=208)** This is the path where all overlapping pixels look alike the most among all possible paths in the error section.
>
> **[3:37](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-cuts?u=76281980&t=217)** This path can have any shape, but for our example, it's strictly vertical or diagonal, never horizontal.
>
> **[3:47](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-cuts?u=76281980&t=227)** Lastly, we use pixels from the left picture at the left of the seam and pixels from the right picture at the right of the seam to create the final image.
>
> **[3:58](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-cuts?u=76281980&t=238)** And there you have it, a Bengal tiger in my neighborhood.

> [!info]- Semantic Content
>
> **Analogies:** picture (7), just like (1), for example (1)
> **Code Keywords:** let (4), this. (2)
> **CLI Commands:** find (2)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)

#### Stitching two images together
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/stitching-two-images-together?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/stitching-two-images-together?u=76281980&t=0)** - [Instructor] Let's look at an example, where we remove an object in an image by splitting the image in two parts and then stitching them back together with a cut that excludes the unwanted object.
>
> **[0:12](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/stitching-two-images-together?u=76281980&t=12)** For this, we will work with a picture of a green wall.
>
> **[0:17](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/stitching-two-images-together?u=76281980&t=17)** This would be a nice photograph to share if it weren't for that pesky piece of litter in the middle.
>
> **[0:24](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/stitching-two-images-together?u=76281980&t=24)** Now, let's split the image in two separate parts right at the middle.
>
> **[0:29](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/stitching-two-images-together?u=76281980&t=29)** Notice in lines three and four that I'm making the split at column 870.
>
> **[0:37](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/stitching-two-images-together?u=76281980&t=37)** Notice the unwanted object in both images.
>
> **[0:40](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/stitching-two-images-together?u=76281980&t=40)** Alternatively, I could have split the picture a little to the left and right to completely exclude the unwanted object.
>
> **[0:49](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/stitching-two-images-together?u=76281980&t=49)** However, I decided to leave it there and use a large enough overlap for my algorithm to have enough opportunity to take it out.
>
> **[1:00](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/stitching-two-images-together?u=76281980&t=60)** Now let's look at the two images put together in a vertical straight line at the middle of their overlap.
>
> **[1:08](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/stitching-two-images-together?u=76281980&t=68)** In line four, I've defined an overlap of 70 pixels.
>
> **[1:13](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/stitching-two-images-together?u=76281980&t=73)** After watching this video, try using other overlaps like 52 and 46.
>
> **[1:20](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/stitching-two-images-together?u=76281980&t=80)** The vertical stitch is done in line eight. Let's see it.
>
> **[1:25](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/stitching-two-images-together?u=76281980&t=85)** Don't worry, I don't expect you to notice the split artifact in the middle because of the resolution.
>
> **[1:34](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/stitching-two-images-together?u=76281980&t=94)** So let's take a closer look at a sub image named "Tiny Stitch".
>
> **[1:41](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/stitching-two-images-together?u=76281980&t=101)** There it is.
>
> **[1:42](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/stitching-two-images-together?u=76281980&t=102)** Can you spot the vertical artifact in the middle as I scroll down?
>
> **[1:49](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/stitching-two-images-together?u=76281980&t=109)** It's quite easy to notice.
>
> **[1:55](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/stitching-two-images-together?u=76281980&t=115)** Now I want to show you how the cut will be created at a noticeable level of detail.
>
> **[2:01](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/stitching-two-images-together?u=76281980&t=121)** So I will calculate a cut for a small section of the overlap.
>
> **[2:05](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/stitching-two-images-together?u=76281980&t=125)** This will be a 100 pixel toll section at the top of the overlap created in line six and seven.
>
> **[2:16](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/stitching-two-images-together?u=76281980&t=136)** Remember, these two parts will overlap.
>
> **[2:22](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/stitching-two-images-together?u=76281980&t=142)** In the next cell, I'm producing the squared error of the rover overlap in three steps.
>
> **[2:28](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/stitching-two-images-together?u=76281980&t=148)** First, I remove color, then I subtract, and then I square.
>
> **[2:36](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/stitching-two-images-together?u=76281980&t=156)** Now, here's where we calculate the cut.
>
> **[2:39](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/stitching-two-images-together?u=76281980&t=159)** It must be the darkest path of all, that is the path that accumulates the least possible sum.
>
> **[2:47](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/stitching-two-images-together?u=76281980&t=167)** So to do this, I'll use a function I wrote called "get_seam".
>
> **[2:52](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/stitching-two-images-together?u=76281980&t=172)** Let's go to ECCV.
>
> **[2:56](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/stitching-two-images-together?u=76281980&t=176)** The function is defined in line 93 and it takes a square difference matrix as an argument.
>
> **[3:03](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/stitching-two-images-together?u=76281980&t=183)** Now the algorithm is a bit involved and you are not required to go through the code.
>
> **[3:09](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/stitching-two-images-together?u=76281980&t=189)** However, if you really want to know, this is a graph search algorithm like A-star or Dijkstra's algorithm.
>
> **[3:18](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/stitching-two-images-together?u=76281980&t=198)** Simply put in the first set of nested loops, I traverse the error matrix top down row by row, adding the values of the shortest sums into another matrix named "cost".
>
> **[3:34](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/stitching-two-images-together?u=76281980&t=214)** Then in the second set of nested loops, I populate an array named seam, by traversing the cost matrix bottom up, selecting the pixel index with the minimum cost.
>
> **[3:47](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/stitching-two-images-together?u=76281980&t=227)** Once again, don't worry too much about this code.
>
> **[3:50](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/stitching-two-images-together?u=76281980&t=230)** Let's go back to the notebook.
>
> **[3:55](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/stitching-two-images-together?u=76281980&t=235)** Notice that I'm calling the "get-seam" function in line five.
>
> **[3:59](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/stitching-two-images-together?u=76281980&t=239)** Then in lines 8 through 11, I'm simply marking the seam in the error with white pixels.
>
> **[4:06](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/stitching-two-images-together?u=76281980&t=246)** Let's see it.
>
> **[4:11](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/stitching-two-images-together?u=76281980&t=251)** This is the darkest path in the error image.
>
> **[4:14](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/stitching-two-images-together?u=76281980&t=254)** All other paths add up to a larger cost.
>
> **[4:20](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/stitching-two-images-together?u=76281980&t=260)** Great, now that we know what we are doing, let's create the whole seam.
>
> **[4:25](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/stitching-two-images-together?u=76281980&t=265)** Basically, I'll repeat the steps we just saw, but for the whole overlap, not just the first 100 rows.
>
> **[4:35](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/stitching-two-images-together?u=76281980&t=275)** Here we have the two overlapping sections.
>
> **[4:43](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/stitching-two-images-together?u=76281980&t=283)** Now let's see the squared error image.
>
> **[4:47](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/stitching-two-images-together?u=76281980&t=287)** This is what we'll send to the get_seam function.
>
> **[4:55](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/stitching-two-images-together?u=76281980&t=295)** Remember, in this cell, we'll calculate the seam and show it in white over the error image.
>
> **[5:05](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/stitching-two-images-together?u=76281980&t=305)** So this is the complete cut.
>
> **[5:07](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/stitching-two-images-together?u=76281980&t=307)** Let me scroll down so you can see all of it.
>
> **[5:17](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/stitching-two-images-together?u=76281980&t=317)** Now comes the easy part, stitching the sections together.
>
> **[5:22](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/stitching-two-images-together?u=76281980&t=322)** In line six, I'm creating the middle section, which has pixels from both the left and right components of the overlap.
>
> **[5:31](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/stitching-two-images-together?u=76281980&t=331)** The seam determines where the left pixels and the right pixel starts.
>
> **[5:37](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/stitching-two-images-together?u=76281980&t=337)** In line 17, I'm creating another version of this middle section, which will be marked with the seam in red pixels.
>
> **[5:46](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/stitching-two-images-together?u=76281980&t=346)** Let's see it.
>
> **[5:55](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/stitching-two-images-together?u=76281980&t=355)** And here we have it.
>
> **[5:56](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/stitching-two-images-together?u=76281980&t=356)** Let me scroll down to show you the whole red seam.
>
> **[6:06](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/stitching-two-images-together?u=76281980&t=366)** Now in this cell, I'm stitching it all together.
>
> **[6:10](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/stitching-two-images-together?u=76281980&t=370)** The leftmost image minus the overlap, the middle section with the seam in red, and the rightmost section minus the overlap.
>
> **[6:22](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/stitching-two-images-together?u=76281980&t=382)** Admittedly, the red seam is barely visible as it has a thickness of just one pixel.
>
> **[6:32](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/stitching-two-images-together?u=76281980&t=392)** Anyway, let's see the result with a middle section without the seam highlight.
>
> **[6:40](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/stitching-two-images-together?u=76281980&t=400)** So this is the finished image.
>
> **[6:43](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/stitching-two-images-together?u=76281980&t=403)** Once again, at this size it would be difficult to spot any artifacts, but it's looking pretty good to me.
>
> **[6:53](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/stitching-two-images-together?u=76281980&t=413)** Lastly, let's zoom in to see the difference in the magnified section we saw before.
>
> **[7:00](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/stitching-two-images-together?u=76281980&t=420)** At the left, we'll see the vertical split and at the right, our nice cut.
>
> **[7:08](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/stitching-two-images-together?u=76281980&t=428)** I'm sure you can notice the vertical split, but I dare you to try and find any unnatural artifacts in the cut version.
>
> **[7:17](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/stitching-two-images-together?u=76281980&t=437)** Also look closely to notice how each artifact in the split image was corrected by the cut.
>
> **[7:25](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/stitching-two-images-together?u=76281980&t=445)** Feel free to pause the video to examine these details.
>
> **[7:32](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/stitching-two-images-together?u=76281980&t=452)** Now, let's save the resulting image in a file.
>
> **[7:35](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/stitching-two-images-together?u=76281980&t=455)** You can go ahead and open it to see it at its full size.
>
> **[7:46](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/stitching-two-images-together?u=76281980&t=466)** Here, you can try harder to find any artifacts.
>
> **[7:54](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/stitching-two-images-together?u=76281980&t=474)** And now let's have some fun.
>
> **[7:56](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/stitching-two-images-together?u=76281980&t=476)** In this cell I repeated the whole process, but I inverted the right and left sections to see how the cut ends up.
>
> **[8:05](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/stitching-two-images-together?u=76281980&t=485)** Let's see it.
>
> **[8:07](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/stitching-two-images-together?u=76281980&t=487)** Well, that doesn't look bad at all.
>
> **[8:10](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/stitching-two-images-together?u=76281980&t=490)** Notice the piece of litter still at the right and left end.
>
> **[8:14](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/stitching-two-images-together?u=76281980&t=494)** That can be easily cropped away.
>
> **[8:21](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/stitching-two-images-together?u=76281980&t=501)** Now let's see the usual zoom.
>
> **[8:26](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/stitching-two-images-together?u=76281980&t=506)** This time, the vertical artifact is very visible and the cut did a wonderful job.
>
> **[8:35](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/stitching-two-images-together?u=76281980&t=515)** Lastly, let's look at the grass.
>
> **[8:40](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/stitching-two-images-together?u=76281980&t=520)** As you can see on the right, the quality of the cut is impeccable.

> [!info]- Semantic Content
>
> **Code Keywords:** let (20), function (4), this, (2)
> **UI Navigation:** scroll down (3), go to (1)
> **CLI Commands:** find (2)
> **Code Identifiers:** get_seam (2)
> **Cross-References:** in the next (1), go back to (1)
> **Definitions:** is a  (2)
> **Analogies:** picture (2)
> **Env Vars:** eccv (1)

#### Cuts in panoramic photography
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/cuts-in-panoramic-photography?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/cuts-in-panoramic-photography?u=76281980&t=0)** - [Instructor] Now, I want to tell you about the application of cuts in "Panoramic Photography".
>
> **[0:06](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/cuts-in-panoramic-photography?u=76281980&t=6)** You are probably familiar with panoramic photographs, and if not, chances are your smartphone has this feature.
>
> **[0:14](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/cuts-in-panoramic-photography?u=76281980&t=14)** A panoramic picture is the result of taking several pictures, like the three pictures you see here, and producing a combined picture as if it were one single wide photograph.
>
> **[0:28](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/cuts-in-panoramic-photography?u=76281980&t=28)** Now, the software behind panoramas consists of a specific pipeline of processes to adjust the separate pictures.
>
> **[0:36](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/cuts-in-panoramic-photography?u=76281980&t=36)** For example, if you look at these three pictures, you'll see that the electrical cables at the top don't match between the pictures, nor do the angles of the fence.
>
> **[0:49](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/cuts-in-panoramic-photography?u=76281980&t=49)** That's why the algorithm includes a step of warping the pictures to make overlapping elements match.
>
> **[0:57](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/cuts-in-panoramic-photography?u=76281980&t=57)** Here we can see the three pictures stitched together with two important details.
>
> **[1:03](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/cuts-in-panoramic-photography?u=76281980&t=63)** First, the pictures are warped in such a way that the electrical cables and the house overlap quite well at the right, and so do the fence and the lamppost at the left.
>
> **[1:17](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/cuts-in-panoramic-photography?u=76281980&t=77)** There are several algorithms to warp images, depending on the effect you want to achieve in your panorama picture.
>
> **[1:25](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/cuts-in-panoramic-photography?u=76281980&t=85)** Second, the original pictures had overlaps shown here between vertical green lines.
>
> **[1:33](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/cuts-in-panoramic-photography?u=76281980&t=93)** Those overlaps were combined with a technique called blending.
>
> **[1:38](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/cuts-in-panoramic-photography?u=76281980&t=98)** This is a weighted sum of the overlapping parts so that one fades away while the other fades in.
>
> **[1:46](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/cuts-in-panoramic-photography?u=76281980&t=106)** We can see that blending was used in this picture because of the ghosting effect at the seam between the two rightmost images.
>
> **[1:55](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/cuts-in-panoramic-photography?u=76281980&t=115)** The final step is to crop the image to remove the visible excess of black at the right, due to the rightmost picture not being warped at all.
>
> **[2:05](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/cuts-in-panoramic-photography?u=76281980&t=125)** The final picture looks very much as if it had been one single wide photograph all along.
>
> **[2:13](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/cuts-in-panoramic-photography?u=76281980&t=133)** Blending is usually very good to stitch two pieces of panorama pictures, but so is cutting.
>
> **[2:20](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/cuts-in-panoramic-photography?u=76281980&t=140)** Let me show you an example where I stitched two parts of a panorama together, first with blending and then with a cut.
>
> **[2:29](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/cuts-in-panoramic-photography?u=76281980&t=149)** Notice that I blended the images at a different horizontal point than where my algorithm ended up making the cut.
>
> **[2:38](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/cuts-in-panoramic-photography?u=76281980&t=158)** Now, let me zoom in to take a better look at that cut.
>
> **[2:42](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/cuts-in-panoramic-photography?u=76281980&t=162)** Here we have the cut, which was calculated with the same algorithm we just saw.
>
> **[2:48](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/cuts-in-panoramic-photography?u=76281980&t=168)** Notice that if the warping stage is good enough, the cutting stage will usually do a good job because of all the similar overlapping pixels.
>
> **[2:58](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/cuts-in-panoramic-photography?u=76281980&t=178)** Now, here we have the same image without highlighting the cut.
>
> **[3:02](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/cuts-in-panoramic-photography?u=76281980&t=182)** Go ahead and try to find an artifact created by the cut.
>
> **[3:06](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/cuts-in-panoramic-photography?u=76281980&t=186)** The only one I can spot is the discontinuity in one half of the roof.
>
> **[3:12](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/cuts-in-panoramic-photography?u=76281980&t=192)** The rest looks tidy, especially the sky.

> [!info]- Semantic Content
>
> **Analogies:** picture (6), for example (1)
> **Code Keywords:** let (2), match. (1)
> **CLI Commands:** make (1), find (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Stitch two pictures together
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-stitch-two-pictures-together?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-stitch-two-pictures-together?u=76281980&t=0)** - [Instructor] It's time for another challenge.
>
> **[0:07](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-stitch-two-pictures-together?u=76281980&t=7)** This time, you'll stitch two pictures together.
>
> **[0:11](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-stitch-two-pictures-together?u=76281980&t=11)** In Task 1, you must choose a pair of pictures to stitch together and display them.
>
> **[0:17](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-stitch-two-pictures-together?u=76281980&t=17)** These two images must have the same height and must be suitable for stitching together.
>
> **[0:24](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-stitch-two-pictures-together?u=76281980&t=24)** They may be two parts of the same picture or they may be two different pictures with similar shades and tones.
>
> **[0:32](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-stitch-two-pictures-together?u=76281980&t=32)** Task 2 is to find a suitable overlap for these two pictures.
>
> **[0:37](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-stitch-two-pictures-together?u=76281980&t=37)** This overlap can be as small as 10 pixels or as large as 100 pixels.
>
> **[0:43](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-stitch-two-pictures-together?u=76281980&t=43)** It all depends on your picture's resolution.
>
> **[0:47](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-stitch-two-pictures-together?u=76281980&t=47)** Then you must produce an appropriate seam and display it.
>
> **[0:51](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-stitch-two-pictures-together?u=76281980&t=51)** You may do this in several cells.
>
> **[0:54](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-stitch-two-pictures-together?u=76281980&t=54)** For Task 3, you have to stitch the images together.
>
> **[0:59](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-stitch-two-pictures-together?u=76281980&t=59)** You may use three sections like I did.
>
> **[1:02](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-stitch-two-pictures-together?u=76281980&t=62)** Finally, don't forget to display the resulting image.
>
> **[1:06](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-stitch-two-pictures-together?u=76281980&t=66)** This should take you about 30 minutes.
>
> **[1:09](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-stitch-two-pictures-together?u=76281980&t=69)** I'll show you my solution in the next video as usual.

> [!info]- Semantic Content
>
> **Analogies:** picture (2)
> **CLI Commands:** find (1)
> **Code Keywords:** finally, (1)
> **Cross-References:** in the next (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Stitch two pictures together
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-stitch-two-pictures-together?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-stitch-two-pictures-together?u=76281980&t=0)** - [Instructor] So how did you do?
>
> **[0:07](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-stitch-two-pictures-together?u=76281980&t=7)** For my solution, let me do something special this time.
>
> **[0:11](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-stitch-two-pictures-together?u=76281980&t=11)** I'll give you a peek behind the scenes into the production of the video where I explained the stitching of the pictures with purple flowers and the tiger.
>
> **[0:21](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-stitch-two-pictures-together?u=76281980&t=21)** This is the code I used to produce those images.
>
> **[0:24](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-stitch-two-pictures-together?u=76281980&t=24)** For Task One, I used the files "Left.bmp" and "Right.bmp".
>
> **[0:34](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-stitch-two-pictures-together?u=76281980&t=34)** These are the purple flowers and the tiger.
>
> **[0:38](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-stitch-two-pictures-together?u=76281980&t=38)** Notice that they have the same height.
>
> **[0:43](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-stitch-two-pictures-together?u=76281980&t=43)** For Task Two, I simply copied the steps to produce the seam.
>
> **[0:48](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-stitch-two-pictures-together?u=76281980&t=48)** Notice in line 15, that I chose an overlap of 100.
>
> **[0:54](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-stitch-two-pictures-together?u=76281980&t=54)** The rest of the code finds the seam and marks it in white pixels.
>
> **[1:00](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-stitch-two-pictures-together?u=76281980&t=60)** Here we have it.
>
> **[1:01](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-stitch-two-pictures-together?u=76281980&t=61)** Let me scroll down, and let me stop here.
>
> **[1:06](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-stitch-two-pictures-together?u=76281980&t=66)** The fact that a seam lingers at one end, right or left, shows that the algorithm had no choice and was cornered.
>
> **[1:15](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-stitch-two-pictures-together?u=76281980&t=75)** So this part of the seam may not be very good.
>
> **[1:19](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-stitch-two-pictures-together?u=76281980&t=79)** Notice that the flowers are getting in the way.
>
> **[1:23](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-stitch-two-pictures-together?u=76281980&t=83)** Alright, let's move on.
>
> **[1:26](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-stitch-two-pictures-together?u=76281980&t=86)** So that's it for the seam.
>
> **[1:30](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-stitch-two-pictures-together?u=76281980&t=90)** Now for Task Three, here we have the code for putting it all together, and here we have the final result I used for that video.
>
> **[1:40](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-stitch-two-pictures-together?u=76281980&t=100)** By the way, the worst part of the seam where the right most flowers are doesn't look so bad to me.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 7. Morphological Modifications

> [↑ Back to Table of Contents](#table-of-contents)

#### Why modify objects?
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/why-modify-objects?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/why-modify-objects?u=76281980&t=0)** - [Instructor] For the last application example of image processing, let's look at a series of operations, called "Morphological Transformations".
>
> **[0:09](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/why-modify-objects?u=76281980&t=9)** These are widely used in computer vision, which is the application of computing to make sense of images and video.
>
> **[0:17](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/why-modify-objects?u=76281980&t=17)** For example, software that recognizes handwritten text, faces or people.
>
> **[0:23](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/why-modify-objects?u=76281980&t=23)** Morphological transformations are typically used in black and white images with "blobs", which are polygons that represent objects in a picture.
>
> **[0:32](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/why-modify-objects?u=76281980&t=32)** These operations change the shape of blobs.
>
> **[0:36](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/why-modify-objects?u=76281980&t=36)** So, with these operations, we can make blobs shrink and grow.
>
> **[0:41](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/why-modify-objects?u=76281980&t=41)** To show you why we need to modify objects, let's look at a computer vision process.
>
> **[0:48](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/why-modify-objects?u=76281980&t=48)** Suppose we have a robot that moves boxes in this warehouse.
>
> **[0:52](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/why-modify-objects?u=76281980&t=52)** This robot must go from its starting position to a finished position where the target box is located.
>
> **[1:00](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/why-modify-objects?u=76281980&t=60)** This is a messy warehouse, so the robot must be capable of moving around without bumping into boxes that may be lying on the floor.
>
> **[1:09](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/why-modify-objects?u=76281980&t=69)** Looking at the size of the robot, the only path to get past the boxes at the left, is through the middle like this.
>
> **[1:18](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/why-modify-objects?u=76281980&t=78)** Now, despite facing a narrow path, the robot can certainly fit through it and finally, it can reach the finish point.
>
> **[1:28](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/why-modify-objects?u=76281980&t=88)** So, how can this robot come up with this path before starting to move?
>
> **[1:34](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/why-modify-objects?u=76281980&t=94)** Well, this is a special robot with a wireless connection to a camera fixed to the ceiling, looking straight down.
>
> **[1:42](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/why-modify-objects?u=76281980&t=102)** That camera took this picture and sent it to the robot when it was at the starting point.
>
> **[1:49](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/why-modify-objects?u=76281980&t=109)** With this picture and the start and finish point, the robot or some other computer can process this image and try to come up with a feasible plan of action.
>
> **[2:01](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/why-modify-objects?u=76281980&t=121)** Let's look at a simple image processing algorithm to help this robot find its way.
>
> **[2:07](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/why-modify-objects?u=76281980&t=127)** The first step is to create a black and white image with a set of blobs where the obstacles are.
>
> **[2:14](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/why-modify-objects?u=76281980&t=134)** This is known as a "color mask".
>
> **[2:17](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/why-modify-objects?u=76281980&t=137)** Notice that the obstacles produced white blobs.
>
> **[2:21](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/why-modify-objects?u=76281980&t=141)** Now, this step isn't perfect and it's not expected to be perfect, since not all boxes will look the same and the lighting won't always be the same.
>
> **[2:32](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/why-modify-objects?u=76281980&t=152)** An artifact that's getting in the way, are the many white dots scattered all around, but especially the ones in the path we know the robot must follow.
>
> **[2:43](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/why-modify-objects?u=76281980&t=163)** For this reason, the next step is to get rid of these small dots.
>
> **[2:48](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/why-modify-objects?u=76281980&t=168)** We can do this by shrinking every blob a little bit, just enough to make these spots disappear, but not the large obstacles.
>
> **[2:59](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/why-modify-objects?u=76281980&t=179)** This operation is known as "erosion", and it means reducing the size of white blobs.
>
> **[3:06](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/why-modify-objects?u=76281980&t=186)** As I erode the mask, pay attention to the size of the larger objects and how the tiny spots disappear.
>
> **[3:14](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/why-modify-objects?u=76281980&t=194)** Notice that only one artifact at the bottom-left survived the erosion.
>
> **[3:20](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/why-modify-objects?u=76281980&t=200)** Now, we have two problems.
>
> **[3:22](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/why-modify-objects?u=76281980&t=202)** First, we just eroded everything, so the obstacles are a little smaller.
>
> **[3:29](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/why-modify-objects?u=76281980&t=209)** Second, remember the size of the robot.
>
> **[3:33](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/why-modify-objects?u=76281980&t=213)** Path-planning algorithms usually don't keep track of the robot dimensions.
>
> **[3:38](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/why-modify-objects?u=76281980&t=218)** Instead, they consider the robot to be at a single point like a particle.
>
> **[3:45](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/why-modify-objects?u=76281980&t=225)** This is a problem, because the resulting path may go too close to an obstacle, finally, making the robot run over it.
>
> **[3:54](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/why-modify-objects?u=76281980&t=234)** A usual solution is to make all obstacles grow about the radius of the robot, so that the calculated path is guaranteed to avoid obstacles completely.
>
> **[4:06](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/why-modify-objects?u=76281980&t=246)** So, that's why in the next step, we perform the opposite of erosion, which is "dilation".
>
> **[4:14](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/why-modify-objects?u=76281980&t=254)** Next, I'll dilate the mask many times, so that obstacles grow enough to produce a safe path.
>
> **[4:21](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/why-modify-objects?u=76281980&t=261)** Look closely.
>
> **[4:23](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/why-modify-objects?u=76281980&t=263)** After dilating the mask, we have a clean image, representing the grown obstacles in white and the floor in black.
>
> **[4:32](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/why-modify-objects?u=76281980&t=272)** To find a path from start to finish, we simply feed this mask to a path planning function that implements an algorithm like "A*" or "Dijkstra'sa".
>
> **[4:43](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/why-modify-objects?u=76281980&t=283)** The function also needs the start and finish points and it will produce the path we need.
>
> **[4:51](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/why-modify-objects?u=76281980&t=291)** Now, don't worry about the narrow parts of this path, or the near misses with the obstacles.
>
> **[4:58](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/why-modify-objects?u=76281980&t=298)** Let's see how this path looks in the actual picture.
>
> **[5:01](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/why-modify-objects?u=76281980&t=301)** As you can see, there's enough room for the robot to take the path safely.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), finally, (2), function (2), this. (1), implements (1)
> **CLI Commands:** make (4), find (2)
> **Definitions:** is a  (3), known as (2)
> **Analogies:** picture (4), for example (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Erosion and dilation
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/erosion-and-dilation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/erosion-and-dilation?u=76281980&t=0)** - [Instructor] Erosion and dilation make white blobs shrink and grow respectively.
>
> **[0:06](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/erosion-and-dilation?u=76281980&t=6)** Now, the usual algorithm for this is similar to the median filter.
>
> **[0:11](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/erosion-and-dilation?u=76281980&t=11)** For erosion, a pixel is turned black if there are black pixels in its neighborhood area.
>
> **[0:18](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/erosion-and-dilation?u=76281980&t=18)** For dilation, a pixel is turned white if there are white pixels in its neighborhood area.
>
> **[0:25](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/erosion-and-dilation?u=76281980&t=25)** Let's get to know OpenCV's erode and dilate functions.
>
> **[0:31](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/erosion-and-dilation?u=76281980&t=31)** First, let's open a black and white picture with some text.
>
> **[0:36](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/erosion-and-dilation?u=76281980&t=36)** This image has white text over a black background.
>
> **[0:40](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/erosion-and-dilation?u=76281980&t=40)** This is the usual case in computer vision.
>
> **[0:44](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/erosion-and-dilation?u=76281980&t=44)** In line three, I have defined a three by three kernel with all ones, which I'm using in the erode function in line five.
>
> **[0:53](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/erosion-and-dilation?u=76281980&t=53)** This function takes as arguments the image, the kernel and the number of erosions to perform repeatedly.
>
> **[1:01](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/erosion-and-dilation?u=76281980&t=61)** Also, notice in nine seven that I'm saving this picture for later in img3.
>
> **[1:08](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/erosion-and-dilation?u=76281980&t=68)** Let's see the results of one three by three erosion.
>
> **[1:13](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/erosion-and-dilation?u=76281980&t=73)** The text at the top lost a lot of vital pixels while the text at the bottom is still readable.
>
> **[1:21](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/erosion-and-dilation?u=76281980&t=81)** Notice that the term "erosion" refers to white blobs being eroded or diminished in size.
>
> **[1:30](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/erosion-and-dilation?u=76281980&t=90)** Now, let's dilate this one with a five by five kernel.
>
> **[1:35](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/erosion-and-dilation?u=76281980&t=95)** As you can see in line four, the dilate function works with the same logic as erode.
>
> **[1:44](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/erosion-and-dilation?u=76281980&t=104)** The lost pixels in the text at the top really damaged the shape.
>
> **[1:49](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/erosion-and-dilation?u=76281980&t=109)** Now the text at the bottom looks better.
>
> **[1:51](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/erosion-and-dilation?u=76281980&t=111)** However, look at the letter "R".
>
> **[1:54](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/erosion-and-dilation?u=76281980&t=114)** These are not aesthetic operations.
>
> **[1:59](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/erosion-and-dilation?u=76281980&t=119)** Now, let's see what happens if we erode this image back with a five by five kernel.
>
> **[2:06](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/erosion-and-dilation?u=76281980&t=126)** It looks like we got back to the same state before dilating, right?
>
> **[2:11](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/erosion-and-dilation?u=76281980&t=131)** Wrong.
>
> **[2:13](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/erosion-and-dilation?u=76281980&t=133)** Let's compare this image with the one I saved some steps back.
>
> **[2:19](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/erosion-and-dilation?u=76281980&t=139)** At the left, we have the eroded image and at the right, we have the result of dilating it and eroding it back with a five by five kernel.
>
> **[2:29](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/erosion-and-dilation?u=76281980&t=149)** As you can see, these are not the same image.
>
> **[2:33](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/erosion-and-dilation?u=76281980&t=153)** So dilation and erosion are not exactly inverse operations.
>
> **[2:40](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/erosion-and-dilation?u=76281980&t=160)** Now, let's see a different picture of a few geometric shapes.
>
> **[2:47](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/erosion-and-dilation?u=76281980&t=167)** All these basic shapes are easy to distinguish.
>
> **[2:52](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/erosion-and-dilation?u=76281980&t=172)** Now, let's erode those shapes four times with a three by three kernel.
>
> **[2:59](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/erosion-and-dilation?u=76281980&t=179)** Once again, notice that the shapes were not exactly preserved.
>
> **[3:03](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/erosion-and-dilation?u=76281980&t=183)** The vertices in the triangle got pointier and the star was deformed.
>
> **[3:12](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/erosion-and-dilation?u=76281980&t=192)** Now, let me dilate the image twice with a five by five kernel.
>
> **[3:19](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/erosion-and-dilation?u=76281980&t=199)** Notice that only the square maintained its shape.
>
> **[3:24](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/erosion-and-dilation?u=76281980&t=204)** Now, let's repeat the same experiment we saw before, but this time, let's perform an extreme erosion with a five by five kernel, and let's do it eight times.
>
> **[3:37](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/erosion-and-dilation?u=76281980&t=217)** Look, the arrow disappeared altogether.
>
> **[3:43](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/erosion-and-dilation?u=76281980&t=223)** Now, let's try and get it back to the larger state.
>
> **[3:46](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/erosion-and-dilation?u=76281980&t=226)** So let's dilate eight times with the same kernel.
>
> **[3:51](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/erosion-and-dilation?u=76281980&t=231)** Let's see the results side by side with the version before eroding.
>
> **[3:57](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/erosion-and-dilation?u=76281980&t=237)** There you have it.
>
> **[3:59](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/erosion-and-dilation?u=76281980&t=239)** Only the square seems to have gone back to its original size.
>
> **[4:04](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/erosion-and-dilation?u=76281980&t=244)** Also, we may argue that by eroding and then dilating, we got rid of the arrow.
>
> **[4:11](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/erosion-and-dilation?u=76281980&t=251)** Sure, the shapes are deformed, but the arrow is certainly missing.
>
> **[4:16](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/erosion-and-dilation?u=76281980&t=256)** This isn't necessarily bad.
>
> **[4:19](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/erosion-and-dilation?u=76281980&t=259)** In fact, it's quite useful.

> [!info]- Semantic Content
>
> **Code Keywords:** let (15), function (3)
> **Analogies:** picture (3), similar to (1)
> **CLI Commands:** make (1)
> **Cross-References:** later in (1)
> **Definitions:** refers to (1)
> **Speakers:** - [instructor] (1)

#### Open and close
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/open-and-close?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/open-and-close?u=76281980&t=0)** - [Instructor] "Open" and "Close" are special operations intended to get rid of small imperfections by performing erosions and dilations.
>
> **[0:09](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/open-and-close?u=76281980&t=9)** Open erodes first, and then dilates.
>
> **[0:13](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/open-and-close?u=76281980&t=13)** Close dilates first, and then erodes.
>
> **[0:20](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/open-and-close?u=76281980&t=20)** Let's start with a picture that contains shapes and imperfections.
>
> **[0:26](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/open-and-close?u=76281980&t=26)** As you can see, there are imperfections everywhere.
>
> **[0:31](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/open-and-close?u=76281980&t=31)** Now, let me show you a closeup of two special shapes in there.
>
> **[0:36](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/open-and-close?u=76281980&t=36)** I'm talking about those tiny swirl-like concentric groups of circles, one inside the blob at the left and the other one in the background at the right.
>
> **[0:49](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/open-and-close?u=76281980&t=49)** Let's see what happens after an open operation with a 3x3 kernel.
>
> **[0:54](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/open-and-close?u=76281980&t=54)** Remember, open means an erosion followed by a dilation.
>
> **[1:00](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/open-and-close?u=76281980&t=60)** Let's see the original image and the results side by side.
>
> **[1:05](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/open-and-close?u=76281980&t=65)** Notice that the swirl inside the circular blob became solid as if we opened the hole inside the circular blob.
>
> **[1:14](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/open-and-close?u=76281980&t=74)** All tiny spots in the background disappeared, and all black spots in the shapes survived.
>
> **[1:21](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/open-and-close?u=76281980&t=81)** The swirl in the background at the right was also eliminated.
>
> **[1:28](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/open-and-close?u=76281980&t=88)** Now, let's see if we can get rid of the black spots in the shapes with a 3x3 close.
>
> **[1:36](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/open-and-close?u=76281980&t=96)** Yes, most of them are gone, only the larger ones survived.
>
> **[1:42](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/open-and-close?u=76281980&t=102)** Now, let's start over, but working with a 5x5 kernel.
>
> **[1:47](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/open-and-close?u=76281980&t=107)** Let me perform an open operation once to get rid of the tiny blobs.
>
> **[1:54](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/open-and-close?u=76281980&t=114)** Nothing new, they're all gone.
>
> **[2:00](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/open-and-close?u=76281980&t=120)** Now, let me perform a close to close the holes, so to speak.
>
> **[2:07](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/open-and-close?u=76281980&t=127)** Yep, most holes are gone.
>
> **[2:13](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/open-and-close?u=76281980&t=133)** Now, let me zoom in to show you what happened to the swirl-like shapes.
>
> **[2:18](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/open-and-close?u=76281980&t=138)** So this is the result of opening first and then closing.
>
> **[2:23](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/open-and-close?u=76281980&t=143)** Notice that only the swirl-like shape inside the circle survived.
>
> **[2:30](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/open-and-close?u=76281980&t=150)** Now, let me show you what happens if we close first and then open.
>
> **[2:38](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/open-and-close?u=76281980&t=158)** Now, the swirl-like shape in the background survived.
>
> **[2:43](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/open-and-close?u=76281980&t=163)** So now we know that when it comes to open and close operations, the order matters.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), new, (1)
> **Analogies:** picture (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Help a robot
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-help-a-robot?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-help-a-robot?u=76281980&t=0)** - [Instructor] Are you ready for your last challenge?
>
> **[0:07](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-help-a-robot?u=76281980&t=7)** Don't worry. This one is easy.
>
> **[0:10](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-help-a-robot?u=76281980&t=10)** In this challenge, you'll help the warehouse robot we saw earlier find its way to the box of interest.
>
> **[0:18](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-help-a-robot?u=76281980&t=18)** You'll have to run some cells before getting to your tasks.
>
> **[0:22](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-help-a-robot?u=76281980&t=22)** First, here we have the picture taken by the camera in the ceiling as requested by the robot.
>
> **[0:32](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-help-a-robot?u=76281980&t=32)** In the next cell, I'm performing a procedure to identify the blobs coming from the boxes.
>
> **[0:38](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-help-a-robot?u=76281980&t=38)** This procedure is described in open CVS tutorials website.
>
> **[0:44](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-help-a-robot?u=76281980&t=44)** The URL is in the comment if you'd like to see it.
>
> **[0:47](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-help-a-robot?u=76281980&t=47)** As you can see in the code, this procedure involves working with the HSV representation of the image to produce a mask.
>
> **[0:56](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-help-a-robot?u=76281980&t=56)** That mask is the black and white image with the blobs.
>
> **[1:00](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-help-a-robot?u=76281980&t=60)** This one, notice that it has a lot of lingering white spots that are not actual obstacles for the robot.
>
> **[1:12](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-help-a-robot?u=76281980&t=72)** In the next cell, we have a closeup of the narrow path we know the robot must cross in the end.
>
> **[1:20](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-help-a-robot?u=76281980&t=80)** Notice the noise dots scattered all over.
>
> **[1:24](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-help-a-robot?u=76281980&t=84)** Also, notice that the rightmost box appears as three separate blobs because the packaging tape wasn't detected as an obstacle.
>
> **[1:34](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-help-a-robot?u=76281980&t=94)** We definitely don't want the robot to try to go through that box, and this is where you come in.
>
> **[1:44](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-help-a-robot?u=76281980&t=104)** Task One is to get rid of the noise.
>
> **[1:47](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-help-a-robot?u=76281980&t=107)** In this cell, use morphological transformations to get rid of the white dots throughout the mask.
>
> **[1:57](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-help-a-robot?u=76281980&t=117)** After that, Task Two is to make the blobs grow.
>
> **[2:02](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-help-a-robot?u=76281980&t=122)** We want to do this for two reasons.
>
> **[2:04](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-help-a-robot?u=76281980&t=124)** First, we want to account for the size of the robot, as I explained earlier.
>
> **[2:10](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-help-a-robot?u=76281980&t=130)** And second, remember the box with the packaging tape gap.
>
> **[2:15](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-help-a-robot?u=76281980&t=135)** Well, we need those segments to become one single obstacle.
>
> **[2:20](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-help-a-robot?u=76281980&t=140)** This task is very simple.
>
> **[2:22](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-help-a-robot?u=76281980&t=142)** Just dilate the mask with a five by five kernel about 10 times, or with a three by three kernel about 20 times.
>
> **[2:34](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-help-a-robot?u=76281980&t=154)** Lastly, Task Three is to run all cells again, but skip Task Number One to see what happens.
>
> **[2:43](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-help-a-robot?u=76281980&t=163)** This should take you about 15 minutes.
>
> **[2:45](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-help-a-robot?u=76281980&t=165)** When you are done, watch the next video to see my results.

> [!info]- Semantic Content
>
> **Env Vars:** cvs (1), url (1), hsv (1)
> **Cross-References:** in the next (2), next video (1)
> **CLI Commands:** find (1), make (1)
> **Analogies:** picture (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Help a robot
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-help-a-robot?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-help-a-robot?u=76281980&t=0)** (bright upbeat music)
>
> **[0:05](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-help-a-robot?u=76281980&t=5)** - [Instructor] Let me show you my solution.
>
> **[0:07](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-help-a-robot?u=76281980&t=7)** Here's the mask with the white dots.
>
> **[0:12](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-help-a-robot?u=76281980&t=12)** Now, for Task One, I simply eroded the mask once with a tiny three by three kernel.
>
> **[0:19](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-help-a-robot?u=76281980&t=19)** You can see the code starting at line eight.
>
> **[0:22](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-help-a-robot?u=76281980&t=22)** Let's see it.
>
> **[0:25](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-help-a-robot?u=76281980&t=25)** As you can see, all the noise is gone.
>
> **[0:28](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-help-a-robot?u=76281980&t=28)** Also, notice that some of the shelves in the upper part of the picture are almost gone.
>
> **[0:36](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-help-a-robot?u=76281980&t=36)** Now, for Task Number Two, I followed my own advice and dilated the mask 10 times with a five by five kernel.
>
> **[0:45](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-help-a-robot?u=76281980&t=45)** Let's see my result.
>
> **[0:47](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-help-a-robot?u=76281980&t=47)** There you go.
>
> **[0:49](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-help-a-robot?u=76281980&t=49)** As long as there's a black path from the left portion to the right portion of the warehouse, this result is useful to the robot.
>
> **[1:00](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-help-a-robot?u=76281980&t=60)** Now, let me repeat the experiment, this time skipping Task Number One.
>
> **[1:06](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-help-a-robot?u=76281980&t=66)** That means leaving the tiny white dots before dilating.
>
> **[1:13](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-help-a-robot?u=76281980&t=73)** So first, let me restart the Jupyter kernel and clear outputs.
>
> **[1:21](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-help-a-robot?u=76281980&t=81)** Now, let's run some cells.
>
> **[1:35](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-help-a-robot?u=76281980&t=95)** And now, I will skip Task Number One.
>
> **[1:41](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-help-a-robot?u=76281980&t=101)** Notice what happens when I run Task Number Two.
>
> **[1:46](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-help-a-robot?u=76281980&t=106)** What a mess!
>
> **[1:47](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-help-a-robot?u=76281980&t=107)** Now, the robot can't find a path, because of all the magnified noise.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6)
> **CLI Commands:** find (1)
> **Tools:** jupyter (1)
> **Analogies:** picture (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright upbeat music) (1)


### Conclusion

> [↑ Back to Table of Contents](#table-of-contents)

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/next-steps?u=76281980&t=0)** - [Eduardo] Congratulations on finishing the course.
>
> **[0:03](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/next-steps?u=76281980&t=3)** Now, let me suggest the next steps in your journey as there's still much to learn.
>
> **[0:09](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/next-steps?u=76281980&t=9)** First, get more experience in image processing platforms or libraries like OpenCV, Pillow, Skimage, and MATLAB.
>
> **[0:18](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/next-steps?u=76281980&t=18)** For OpenCV, I recommend the LinkedIn learning course titled "OpenCV for Python Developers".
>
> **[0:25](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/next-steps?u=76281980&t=25)** And in general, learn more about the applications of image processing, especially the ones we saw in the last chapters.
>
> **[0:33](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/next-steps?u=76281980&t=33)** That's computer vision and computational photography.
>
> **[0:38](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/next-steps?u=76281980&t=38)** Thank you very much for taking this course.
>
> **[0:40](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/next-steps?u=76281980&t=40)** I hope you had fun taking it as much as I had creating it.
>
> **[0:44](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/next-steps?u=76281980&t=44)** I'm Eduardo Corpeño, till next time.

> [!info]- Semantic Content
>
> **CLI Commands:** python (1)
> **Code Keywords:** let (1)
> **Env Vars:** matlab (1)
> **Cross-References:** in the last (1)
> **Speakers:** - [eduardo] (1)


## Instructor

- [[Eduardo Corpeño]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/hands-on-ai-image-processing-with-python-4001236/codespaces)

## Skills Covered

- Image Processing
- Python (Programming Language)
- Artificial Intelligence (AI)
- Computer Vision

## Path Context

### In [[Getting Started with AI and Machine Learning]]
← [[Deep Learning Getting Started]] | **4 of 7** | [[Reinforcement Learning Foundations]] →

## Appears In

- [[Getting Started with AI and Machine Learning]]

## Related Courses

_Courses sharing skills:_

- [[Advanced Python in Excel- Machine Learning]] — Python (Programming Language), Artificial Intelligence (AI)
- [[Advanced Python Projects- Build AI Applications]] — Python (Programming Language), Artificial Intelligence (AI)
- [[Machine Learning with Python- Association Rules]] — Python (Programming Language), Artificial Intelligence (AI)
- [[Machine Learning with Python- k-Means Clustering]] — Python (Programming Language), Artificial Intelligence (AI)
- [[Machine Learning with Python- Logistic Regression]] — Python (Programming Language), Artificial Intelligence (AI)

---

[↑ Back to top](#)