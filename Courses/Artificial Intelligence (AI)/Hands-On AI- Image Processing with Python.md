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
  - '[Getting Started with AI and Machine Learning](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Getting%20Started%20with%20AI%20and%20Machine%20Learning.md)'
prev_courses:
  - '[Deep Learning Getting Started](Deep%20Learning%20Getting%20Started.md)'
next_courses:
  - '[Reinforcement Learning Foundations](Reinforcement%20Learning%20Foundations.md)'
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
created: 2026-05-03
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
  - [Computer vision under the hood](#computer-vision-under-the-hood)
  - [What you should know](#what-you-should-know)
  - [Using the exercise files](#using-the-exercise-files)
- [**1. Setting Up Our Development Environment**](#1-setting-up-our-development-environment) (2 videos)
  - [Testing your environment](#testing-your-environment)
  - [Maintaining a clean notebook workspace](#maintaining-a-clean-notebook-workspace)
- [**2. The Basics of Image Processing**](#2-the-basics-of-image-processing) (7 videos)
  - [Image representation](#image-representation)
  - [Color encoding](#color-encoding)
  - [Image file management](#image-file-management)
  - [Resolution](#resolution)
  - [Rotations and flips](#rotations-and-flips)
  - [Challenge: Manipulate pictures](#challenge-manipulate-pictures)
  - [Solution: Manipulate pictures](#solution-manipulate-pictures)
- [**3. From Color to Black and White**](#3-from-color-to-black-and-white) (6 videos)
  - [Average grayscale](#average-grayscale)
  - [Weighted grayscale](#weighted-grayscale)
  - [Converting grayscale to black and white](#converting-grayscale-to-black-and-white)
  - [Adaptive thresholding](#adaptive-thresholding)
  - [Challenge: Removing color](#challenge-removing-color)
  - [Solution: Removing color](#solution-removing-color)
- [**4. Filters**](#4-filters) (7 videos)
  - [Convolution filters](#convolution-filters)
  - [Average filters](#average-filters)
  - [Median filters](#median-filters)
  - [Gaussian filters](#gaussian-filters)
  - [Edge-detection filters](#edge-detection-filters)
  - [Challenge: Convolution filters](#challenge-convolution-filters)
  - [Solution: Convolution filters](#solution-convolution-filters)
- [**5. Image Scaling**](#5-image-scaling) (6 videos)
  - [Image downscaling methods](#image-downscaling-methods)
  - [Downscaling example](#downscaling-example)
  - [Image upscaling methods](#image-upscaling-methods)
  - [Upscaling example](#upscaling-example)
  - [Challenge: Resize a picture](#challenge-resize-a-picture)
  - [Solution: Resize a picture](#solution-resize-a-picture)
- [**6. Fun with Cuts**](#6-fun-with-cuts) (5 videos)
  - [Image cuts](#image-cuts)
  - [Stitching two images together](#stitching-two-images-together)
  - [Cuts in panoramic photography](#cuts-in-panoramic-photography)
  - [Challenge: Stitch two pictures together](#challenge-stitch-two-pictures-together)
  - [Solution: Stitch two pictures together](#solution-stitch-two-pictures-together)
- [**7. Morphological Modifications**](#7-morphological-modifications) (5 videos)
  - [Why modify objects?](#why-modify-objects)
  - [Erosion and dilation](#erosion-and-dilation)
  - [Open and close](#open-and-close)
  - [Challenge: Help a robot](#challenge-help-a-robot)
  - [Solution: Help a robot](#solution-help-a-robot)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Computer vision under the hood](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/computer-vision-under-the-hood?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/computer-vision-under-the-hood?u=76281980&t=0)** - [Eduardo] [Image Processing](../../Skills/Artificial%20Intelligence%20(AI)/Image%20Processing.md) is all around us, from social media filters to smartphone cameras and QR code scanners. Whether you are just starting or looking to revisit the fundamentals behind tools like OpenCV, Photoshop, or MATLAB, this course is for you. By understanding how the [Algorithms](../../Skills/Software%20Development/Algorithms.md) work under the hood, you'll be better equipped to use advanced libraries in real-world projects. And the best part, we'll be using [GitHub](../../Skills/Software%20Development/GitHub.md) [Codespaces](../../Skills/Software%20Development/Codespaces.md), so there is no setup required. I'm Eduardo Corpeño, and I'd like to invite you to take this course where we will build key image processing operations from scratch using [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md). So come join me. Let's explore image processing together on [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Image Processing](../../Skills/Artificial%20Intelligence%20(AI)/Image%20Processing.md) (3), [Algorithms](../../Skills/Software%20Development/Algorithms.md) (1), [GitHub](../../Skills/Software%20Development/GitHub.md) (1), [Codespaces](../../Skills/Software%20Development/Codespaces.md) (1), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **CLI Commands:** python (1)
> **Env Vars:** matlab (1)
> **Tools:** github (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [eduardo] (1)

#### [What you should know](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/what-you-should-know?u=76281980&t=0)** - [Instructor] Before we start, there are some things you should know. First, the objective of this course is for you to learn [Image Processing](../../Skills/Artificial%20Intelligence%20(AI)/Image%20Processing.md). We will not create a [Computer Vision](../../Skills/Artificial%20Intelligence%20(AI)/Computer%20Vision.md) library or use a professional library like OpenCV in depth. Instead, I will introduce you to the basic concepts and some of the most popular [Algorithms](../../Skills/Software%20Development/Algorithms.md) in computer vision and computational photography. Once you've acquired this knowledge, you'll make better use of image processing tools in the future. Every code example you'll see in this course is written in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) 3 and runs inside a Jupyter Notebook. So you should feel comfortable with this programming language and platform. If you are not very experienced in Python, I recommend that you consider taking an introductory course from our library, like the one titled, "[Python Essential Training](../Software%20Development/Python%20Essential%20Training.md)". Or if you are new to Jupyter Notebooks, you will probably catch the basics from this course but if you'd like to learn more, I recommend the course titled, "Introducing Jupyter". And lastly, there is no setup required to get your system up and running, as we will use [GitHub](../../Skills/Software%20Development/GitHub.md) code spaces. However, if you prefer to download the code and use it in your local setting, all you need is the Anaconda distribution and OpenCV for Python 3.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (4), [Image Processing](../../Skills/Artificial%20Intelligence%20(AI)/Image%20Processing.md) (2), [Computer Vision](../../Skills/Artificial%20Intelligence%20(AI)/Computer%20Vision.md) (2), [Algorithms](../../Skills/Software%20Development/Algorithms.md) (1), [GitHub](../../Skills/Software%20Development/GitHub.md) (1)
> **CLI Commands:** python (4), make (1)
> **Tools:** jupyter (3), github (1), anaconda (1)
> **Versions:** python 3 (2)
> **Prerequisites:** before we start (1), setup (1)
> **Exercise Files:** download the (1)
> **Speakers:** - [instructor] (1)

#### [Using the exercise files](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/using-the-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/using-the-exercise-files?u=76281980&t=0)** - [Instructor] Let me show you how to find the exercise files on [GitHub](../../Skills/Software%20Development/GitHub.md). To work with this code you have a few options. If you want to download the code and use it in your favorite ID, you may do so by clicking on the green code button. You'll need to install the Anaconda distribution and open CV for [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) 3. However, I recommend following the exercises using GitHub [Codespaces](../../Skills/Software%20Development/Codespaces.md), a cloud-based IDE you may use with this course. Since this repository is owned by [LinkedIn](../../Skills/Web%20Development/LinkedIn.md), you cannot push any changes to it. So I recommend that you create your own copy of the repository on your GitHub account so you can keep any changes you make, even if you later decide to delete a Codespace. To create your own copy of the repository, you can click on the fork button. Then review the name and description of your fork, keep the checkbox checked and click on create fork.
>
> **[1:09](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/using-the-exercise-files?u=76281980&t=69)** Now you have your own copy of the repository where you can start a new Codespace. All you need to do is click on the code button. Then under the Codespaces tab, you can start a new Codespace or open an existing one. I'll create a new one. Setting up the Codespace may take a while. Once started, you will see a cloud version of Visual Studio Code with your repository as an open folder. At the left, we can see all the files. This is a single branch repository, so you can find the code related to each video under the exercises folder. The source folders are named with the chapter number followed by the video number. For example, let me show you the exercises for Chapter four. And let's say we want to see the exercise file for the fifth video in Chapter four. All main sources in the course are Jupyter Notebooks with the "ipynb" extension. These are all notebooks that guide you through the topics in the course. Visual Studio Code is already set up for you to run your code. Now let me show you how to push your changes to your repository. Let me add some text to the comment in line one in this source file, so it's modified.
>
> **[2:45](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/using-the-exercise-files?u=76281980&t=165)** Now let me save the file. You can do this with a shortcut like CTRL+S. And now you'll notice that there is an M at the right of the file name, as well as an asterisk on the main branch at the bottom, and a number in the source control button at the left. These are all indicators that there are changes in the repository. Now let me open the source control panel. In here you can also see that one file was changed. This is the one we just modified. Clicking on it will show us the changes in the code section. So let me stage the changes for this file by clicking on the plus sign next to the file name. Next, I'll type a commit message. And now instead of pressing the commit button, I will click on the down arrow and select commit and push. There, your changes have been pushed to your repository. The first time you may be asked if you want VS Code to run [Fetch](../../Skills/Web%20Development/Fetch.md) periodically. Click yes and it will automatically sync with your repo. And remember, if you close the browser, you don't need to start a new Codespace. You can simply reopen the existing Codespace from GitHub and you will see your session right where you left it.
>
> **[4:23](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/using-the-exercise-files?u=76281980&t=263)** So that's it. Try Codespaces and enjoy coding in your browser without having to install anything. Great, we are good to go.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GitHub](../../Skills/Software%20Development/GitHub.md) (4), [Codespaces](../../Skills/Software%20Development/Codespaces.md) (3), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1), [Fetch](../../Skills/Web%20Development/Fetch.md) (1)
> **Tools:** github (4), visual studio (2), anaconda (1), jupyter (1), vs code (1)
> **UI Navigation:** click on (4), checkbox (1), open the (1)
> **CLI Commands:** find (2), python (1), make (1)
> **Prerequisites:** install (2), you'll need (1), set up (1)
> **Exercise Files:** exercise files (1), download the (1), exercise file (1)
> **Env Vars:** ide (1), ctrl (1)
> **Definitions:** is a  (1), is an  (1)


### 1. Setting Up Our Development Environment

[↑ Back to Table of Contents](#table-of-contents)

#### [Testing your environment](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/testing-your-environment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/testing-your-environment?u=76281980&t=0)** - [Instructor] Let's test your setting to make sure you have everything you need to run Jupyter Notebooks. For this, let me open the file "Testing your Environment.ipynb" in the Chapter one folder. Jupyter Notebooks are interactive documents where you can write and run codes alongside explanations and results. They are made up of cells, which you can run one at a time, making them suitable for testing things out step by step. For this reason, Jupyter Notebooks are perfect for experimenting, visualizing results, and learning by doing. Now let's run this notebook. You can do this by selecting a cell and pressing the "Run" button on the left. The very first time you may be prompted for the "kernel" to use. This is the backend to execute the [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) code. You can go ahead and select Python if asked. So the first cell should print your installed version of Python. Below each cell you run, you'll see its output. Here we have Python version 3.12.1. In the next cell, we'll print your NumPy version and create a matrix just to make sure it's working. Let me run it. There you go. We have NumPy version 2.2.4, and a nice 2 by 2 matrix. The next cell uses the Matplotlib library to open
>
> **[1:36](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/testing-your-environment?u=76281980&t=96)** and display a picture of two handsome Komodo dragons. And here they are looking all smug. Remember, this is VS Code so you can always open image files to inspect at their full size. Let me show you. This file is in the same folder as the notebook and it's named "komodo.jpg". Here you can examine every last detail and you can pan and [Zoom](../../Skills/Software%20Development/Zoom.md) to your heart's content.
>
> **[2:12](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/testing-your-environment?u=76281980&t=132)** All right, let's go back to the notebook. The last cell opens and displays the same Komodo dragon picture, but this time using OpenCV. This is a library we will use to perform some specialized [Computer Vision](../../Skills/Artificial%20Intelligence%20(AI)/Computer%20Vision.md) operations. As you can see, we are using OpenCV version 4.11.0. And we are done. If everything went well, your setting is good to go. Now you know how to access the notebooks you'll see in the videos ahead, so please have them handy to replicate the procedures I will show you. And also, keep an eye out for the many visual artifacts these procedures will create in your images.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (4), [Zoom](../../Skills/Software%20Development/Zoom.md) (1), [Computer Vision](../../Skills/Artificial%20Intelligence%20(AI)/Computer%20Vision.md) (1)
> **CLI Commands:** python (4), make (2)
> **Versions:** version 3 (1), 12.1 (1), version 2 (1), 2.4 (1), version 4 (1)
> **Tools:** jupyter (3), vs code (1)
> **Cross-References:** in the next (1), go back to (1)
> **Analogies:** picture (2)
> **UI Navigation:** open the (1)
> **Definitions:** is a  (1)

#### [Maintaining a clean notebook workspace](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/maintaining-a-clean-notebook-workspace?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/maintaining-a-clean-notebook-workspace?u=76281980&t=0)** - [Instructor] Let me give you a few recommendations to help keep your environment and your repository in good shape. If you've used [Codespaces](../../Skills/Software%20Development/Codespaces.md) before, you're probably familiar with Auto Save being enabled by default. In this Codespace though, I've disabled it intentionally as a precaution, to encourage cleaner workflows. Here's why. Jupyter Notebooks save not just your code, but also the output of each cell you run. That includes text, plots, and high resolution images. Over time this can make your notebook files grow significantly, even when the code itself hasn't changed much. Let me show you what I mean. I will open a terminal in the folder where we ran the test notebook in the previous video. Let's take a look at the size of the file before saving. So the file name is "Testing your Environment.ipynb" and its size is about 2.4 kilobytes. That's pretty lightweight. Now I'll save the file either from the file menu or using CTRL+S. Now let's check the size again. And now it's 2.9 megabytes. That's a huge difference. And remember, this is just a small demo. Later on, we'll be working with notebooks that include many images and much more output.
>
> **[1:34](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/maintaining-a-clean-notebook-workspace?u=76281980&t=94)** If saved automatically, those files can quickly become difficult to manage. Let's also take a look at the source control panel to see exactly what changed. On the left, we have the current version of the file, and on the right, the saved version that includes output. If we scroll down, you'll notice that all the text and image output is now part of the file. This is what causes the file size to increase so dramatically. By disabling Auto Save, you are in control of when your notebooks get written to storage. That gives you a chance to clean things up before saving or committing your changes. Whenever you are about to commit, I recommend reviewing this diff view to make sure you are not unintentionally pushing large outputs into your repository. So in summary, after running a notebook, I suggest cleaning it up by using the clear all outputs button. You may also want to restart the kernel between longer sessions to keep things running smoothly. So now I can save a clean version of this file. And lastly, if you prefer having Auto Save enabled, you can turn it back on in the "settings.[JSON](../../Skills/Web%20Development/JSON.md)" file by "setting files.autoSave" to "afterDelay".
>
> **[3:11](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/maintaining-a-clean-notebook-workspace?u=76281980&t=191)** Just keep in mind that doing so will save your notebooks, including any outputs, every time you run a cell. I prefer to keep this off. It's entirely up to you, but now you know how to manage your notebooks in a way that keeps your workspace and your repo clean.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Codespaces](../../Skills/Software%20Development/Codespaces.md) (1), [JSON](../../Skills/Web%20Development/JSON.md) (1)
> **CLI Commands:** make (2)
> **Code Identifiers:** autosave (1), afterdelay (1)
> **Versions:** 2.4 (1), 2.9 (1)
> **Tools:** jupyter (1), terminal (1)
> **File Paths:** settings.json (1)
> **Env Vars:** ctrl (1)
> **Cross-References:** previous video (1)


### 2. The Basics of Image Processing

[↑ Back to Table of Contents](#table-of-contents)

#### [Image representation](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-representation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-representation?u=76281980&t=0)** - [Instructor] There are a few ways you may represent images in a computer. One of the most popular is the "Raster Image Representation", which is the type of images we will see in this course. Up ahead, we will get to know raster images and some important details about them. First, a raster image consists of a matrix of pixels, which are the small dots or squares that [compose](../../Glossary/Framework/Jetpack%20Compose.md) a picture like this smiley. Images may encode color, but they may be gray scale or even black and white. There are several file formats used to store pictures. Some of these formats involve compression, but not all of them. And lastly, an image may be stored at different resolutions. Let's start tweaking some pictures. In this notebook, let me show you how you can create raster images in gray scale and color with integers and floating point numbers. Let's look at the first cell where I'll create a simple gray scale image. Notice that I'm importing NumPy and Matplotlib's Pyplot Module in lines 4 and 5. In line 6, the assignment of retina to figure formats is done to get the best resolution from Matplotlib's imshow, which is the image show function.
>
> **[1:33](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-representation?u=76281980&t=93)** You'll see this line in every notebook ahead. So next, I'm creating a three by three NumPy array, and I'm initializing it with numbers between 0 and 255. These numbers represent shades of gray, where 0 is black and 255 is white. Look at the comments to make sense of these shades. Lastly, in line 12, I'm displaying the image with Pyplot's imshow function. This function takes an image object as an argument, and optionally a color map. For gray scale, we'll use the gray color map. Let's run it.
>
> **[2:20](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-representation?u=76281980&t=140)** Notice that the plot shows the row and column coordinates. Since this is a three by three matrix, the image is extremely magnified. In the next cell, I am printing the image with the print function to see how it looks in a text representation. I'm also printing the data type of one pixel. As you can see, it's a matrix of 64 bit integers. Moving on to the next cell, let me show you the same thing for a three by three color image. This time, each pixel is encoded as a red, green, blue triad. That is to say, that this image has three channels of intensity per pixel. Each number represents the intensity of its color. We'll talk about colors shortly. Look at line 10 and notice that this time I turned off the displaying of the X and Y axis in Pyplot. Also, notice that the image show function doesn't need a color map anymore because this image has all the color information it needs. Let's run it. You may want to take a moment to pause the video and confirm that these colors match the ones in the comments above. And once again, let's see its text representation and the type of an intensity value. As expected, this is a three dimensional array
>
> **[3:56](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-representation?u=76281980&t=236)** of 64 bit integers. Lastly, let me show you the same image, but encoded with floating point numbers between 0 and 1. This is the same image we saw before because the image show function uses the maximum value in the array as the maximum intensity. Yep, that's the same image. And now let's look at its text representation and type. This image is made of 64 bit floating point numbers. Oh yeah, let's move on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Compose](../../Glossary/Framework/Jetpack%20Compose.md) (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Analogies:** picture (1)
> **Speakers:** - [instructor] (1)

#### [Color encoding](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/color-encoding?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/color-encoding?u=76281980&t=0)** - [Instructor] Color may be encoded in a variety of ways, like RGB, RGBA, CMYK, or HSL. In this course, we'll exclusively use the RGB encoding where each pixel is represented as a vector with three channels, Red, Green, and Blue. RGB is usually encoded as a 24-bit bitmap, meaning that each color channel has a number between 0 and 255, where zero means 0% intensity of its color, and 255 means 100% intensity. 24-bit color in coding is also known as true color. The first cell in this notebook is the same we saw before. In line 10, I'm initializing "img" with an array of three by three pixels, and every pixel is an RGB triad. According to this encoding, take a moment to pause the video and read the comments in line seven through nine, which describe the combination of colors in the image. Notice that all pixels have either 0 or 255 in their intensity values, except for the bottom right pixel, which is 50% gray. Let me run this cell. This image has trivial combinations of full intensity colors. For example, blue and green yields cyan,
>
> **[1:35](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/color-encoding?u=76281980&t=95)** and red and green yields yellow. Also, notice that when all three channels have the same value, we get a shade of gray. Now, let's modify one pixel. In this cell, I will change the bottom left pixel to go from black to orange. The bottom left pixel is at row two, column zero. That's why I'm indexing img with 2, 0, and the third index is for the color channel. Zero is red, one is green, and two is blue. Now, I know the tone of orange I want. It has 100% red and about 80% green, with no blue. So, to change this black pixel to orange, I can set its red channel to 255 and its green channel to 200, as you can see in lines three and four. I've left the blue channel alone, since the pixel was black anyway. Now, look at line six to see how the imshow function can print partial images. Well, because [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) allows us to do so. Here, we'll print the sub-image at row two, column zero. Let me run this. And there you have it, a big, orange pixel. Finally, let me display the whole image just to make sure that we changed the bottom left pixel. And there it is.
>
> **[3:09](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/color-encoding?u=76281980&t=189)** We can see the bottom left pixel painted in orange. Let's move on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **Env Vars:** rgb (4), rgba (1), cmyk (1), hsl (1)
> **CLI Commands:** python (1), make (1)
> **Definitions:** known as (1), is an  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Image file management](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-file-management?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-file-management?u=76281980&t=0)** - [Instructor] Opening image files and saving images into files are the start and finish of [Image Processing](../../Skills/Artificial%20Intelligence%20(AI)/Image%20Processing.md), respectively. Let's look at some important aspects of image file management. In the first cell, let me open a JPEG file using the "pyplot.imread function". JPEG is an image format that uses lossy compression. That means that the compression slightly modifies the image, but it can achieve amazing compression ratios. Look at the imread function call in line seven. The file name is "stickanimals.jpg", and I've assigned the returned object to a variable named, "jpeg." Before moving on, notice that the files we are opening are all in the current notebook folder. Now let's run this cell to see the JPEG image. As you can see in the axes, the image is a little over 600 by 600 pixels. Now let's see another version of the same image I had previously saved as a PNG file. PNG is another image format that uses lossless compression. That means that all pixels are left unchanged, but the compression ratio isn't as good as JPEG's. This time, the file name is "stickanimalsRGBA.png", and I'm assigning it to a variable named "png." Let's run it.
>
> **[1:36](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-file-management?u=76281980&t=96)** The two images look the same, right? Well, they're not. Let's look at their sizes. In this cell, I'm using the NumPy's shape function to get the sizes of both images. As you can see, both are 617 by 648 pixels, but the JPEG has three color channels, while the PNG has four. In the next cell, let's inspect the first pixel. That's the pixel at row zero, column zero. A-ha, the JPEG is encoding the pixels with integers from zero to 255, and the PNG is encoding them as floating point numbers from zero to one, and then there's the fourth value for the PNG picture, which is one for this pixel. Let's confirm this in the next cell. Let's see their data types. I'm looking at the data type of the first channel in the first pixel of each image. The JPEG uses eight-bit unsigned integers, and the PNG uses 32-bit floating point numbers. All of this is because of two reasons. First, PNG supports a fourth channel for every pixel. This extra channel, often called "alpha", encodes transparency. This is the RGBA encoding. And second, the imread function
>
> **[3:11](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-file-management?u=76281980&t=191)** encodes PNG files as floating point numbers from zero to one. All other formats like JPEG or BMP are encoded as integers from zero to 255. So to be able to work with one single format for all pictures, let me show you a function I wrote to convert an RGBA with floating point numbers to RGB with eight-bit integers. As the comment in this cell reads, to do this conversion, we need to change five things. First, we need to get rid of channel A. Second, we must multiply each value by 255. Third, we must round the results. Fourth, we must ensure that all values are between zero and 255, and five, we must convert the data type to eight-bit unsigned integers. You may want to take a moment to hit pause and read the code to convince yourself that this is indeed performing that conversion. The function definition starts at line 13. It's called adapt_PNG, and it performs steps one and two. Then in line 16, it calls another function to perform steps three, four, and five. This function definition starts at line 24. It's called adapt_image,
>
> **[4:45](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-file-management?u=76281980&t=285)** and I wrote it because we'll need it when manipulating images where the results may go outside the zero to 255 range. Let me just run this cell to have these functions available. I've made these functions available in a separate source file named "EC_CV.py", which you may import in your code. There's a copy of it in every notebook folder. Let me show you. Here you can see these two functions first, and many others we will need throughout the course.
>
> **[5:30](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-file-management?u=76281980&t=330)** Let's go back to the notebook. Here's how I suggest opening PNG files to work with 24-bit RGB images. In line six, I'm calling the adapt PNG function with the result of imread. Next, I'll display the picture, but notice that I'll also bring the data type of the first pixel and its value just to make sure everything went well. Let's run it. And there you have it. Its data type is uint8, and it has integers within the expected range. Lastly, let's save our file. This time, I'm extracting the horse as a subarray named "horsie". The imsave function receives the desired file name and the image variable to use. Now let me run this cell and show you the folder. There it is, horsie.jpg. We can open this file to see the newly saved "horsie" in the JPEG format.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Image Processing](../../Skills/Artificial%20Intelligence%20(AI)/Image%20Processing.md) (1)
> **Env Vars:** png (10), jpeg (9), rgba (2), rgb (2), bmp (1)
> **Definitions:** means that (2), is an  (1), is a  (1)
> **Cross-References:** in the next (2), go back to (1)
> **Code Identifiers:** stickanimalsrgba (1), adapt_image (1)
> **Analogies:** picture (2)
> **File Paths:** ec_cv.py (1)
> **CLI Commands:** make (1)

#### [Resolution](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/resolution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/resolution?u=76281980&t=0)** - [Instructor] The resolution of an image is its level of detail or its pixel density. Bigger resolution images are suitable for printing on a larger area, but they require more space and computational power to process. In this notebook, we will take a quick look at the same picture at three different resolutions. The first cell opens the file named "dog800x600.jpg". Before running this cell, look at line six, I'm importing rcParams which are the runtime configuration parameters because I want to manipulate the size of the pictures that will be displayed by the imshow function. To do this in line eight, I'm setting the figure size parameter to a maximum width of 10 inches and a maximum height of eight inches. Now, here are two things you shouldn't worry about. First, these units may not be actual inches in your screen. On my screen, they are more like centimeters. And second, the ratio of these sizes will not affect the ratio of your images, so your images will be limited to the width and height you specify here, but they will not be stretched out of their original ratio. Let's see the picture. That's my spoiled mixed breed dog sitting like a pug. Remember, this image is 800 pixels wide by 600 pixels tall.
>
> **[1:39](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/resolution?u=76281980&t=99)** This resolution is enough for us to see some detail in the grass and the flowers at the back. Now let's look at a lower resolution version of the same picture. If you look closely, you may notice a pixelation artifact in the dog's eyes and snout. That's because this picture has a resolution of 300 by 225, but it was displayed at the same size in the screen as the previous one. So technically, this picture has less dots per inch or DPI than the previous one. This second picture is appropriate for displaying at a smaller size. Now let's see an even smaller resolution version. This one is 120 by 90 pixels, so the pixelation artifact is extreme. Once again, this picture isn't necessarily bad. It's a lightweight file, so it would be suitable as a thumbnail or preview for the high resolution picture, just like this. This is the same low resolution picture displayed at a much smaller size. Imagine this as a thumbnail in a folder view among many other picture files.

> [!info]- Semantic Content
>
> **Analogies:** picture (10), just like (1), imagine (1)
> **Code Identifiers:** rcparams (1)
> **Env Vars:** dpi (1)
> **Speakers:** - [instructor] (1)

#### [Rotations and flips](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/rotations-and-flips?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/rotations-and-flips?u=76281980&t=0)** - Rotating images at right angles and flipping them horizontally or vertically involves transposing pixels and inverting their order. NumPy supports these operations for images without changing the order of the pixel data, that's RGB. First, let's open a picture of a street in my neighborhood. There, we can see the iconic water volcano in Guatemala. Now, let's rotate it 90 degrees counter clockwise. This is possible with numpy.rot90 function, which reorders pixels while maintaining the color channels as RGB. Notice in nine three that the function receives two arguments, the image and the number of rotations to perform. This time, we want one rotation. There it is. Notice that I'm assigning these rotations to the same IMG object, so I am updating the image. Now, to rotate the image 90 degrees clockwise, we may rotate it counterclockwise three times, as you can see in nine three. And we are back where we started. Now, let's flip the image horizontally. This is how a mirror reflection would look. We can do this with the flip left, right function as you can see in nine four.
>
> **[1:33](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/rotations-and-flips?u=76281980&t=93)** This function inverts the order of pixels in the horizontal axis. There it is, a mirror image. And lastly, let's flip the image vertically, which is not the same as putting it upside down by rotating it 180 degrees. This vertical flip is performed with the flip up, down function. Let's see it. You could easily write functions for these operations as an exercise if you'd like.

> [!info]- Semantic Content
>
> **Env Vars:** rgb (2), img (1)
> **Analogies:** picture (1)
> **Speakers:** - rotating (1)

#### [Challenge: Manipulate pictures](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-manipulate-some-pictures?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-manipulate-some-pictures?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-manipulate-some-pictures?u=76281980&t=5)** - [Instructor] It's time for your first challenge. As you may have guessed, for all challenges, you'll have to write code on a Jupyter notebook. Please read every cell and follow the instructions in the comments. For this challenge, you will have to manipulate some pictures. These pictures are taken from three files in the first cell, and you'll work with the images in variables "traffic", "penguins", and "icepops". You don't have to modify this cell, you can simply run it. Your first task is to find the RGBA image. One of these images is a JPEG file and the other two are PNGs. One of these PNGs is encoded as RGB and the other one as RGBA. You have to find out which one it is. Your second task is to convert all images to an 8-bit unsigned integer encoding. Feel free to use the functions I showed you. These functions are available in the EC_CV source file, which is imported in your first cell. You can always open the file to see the code. Your third task is to display the three images in three separate cells. You have to show the access for some pictures and hide them for others. Just follow the instructions in the comments. Task 4 is to manipulate the images with rotations and flips. Once again, you have three separate cells for this.
>
> **[1:42](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-manipulate-some-pictures?u=76281980&t=102)** First you have to flip the traffic picture. In the next cell, you have to rotate the penguins picture. And lastly, I have something special for the icepops picture. This cell will copy icepops to img. Just run this cell without changing it. Now, the next cell will multiply img by two and show you the resulting image. You don't have to write code in this cell either, you'll just have to run this cell 10 times and notice how the image changes each time. If you lose count or want to run the experiment again, you can rerun the previous cell to start over. After running the experiment, try to explain what happened. This should take you about 15 minutes. When you are done, check out the next video to see my solution.

> [!info]- Semantic Content
>
> **Env Vars:** rgba (2), jpeg (1), rgb (1), ec_cv (1)
> **Analogies:** picture (3)
> **CLI Commands:** find (2)
> **Cross-References:** in the next (1), next video (1)
> **Tools:** jupyter (1)
> **UI Navigation:** open the (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Manipulate pictures](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-manipulate-some-pictures?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-manipulate-some-pictures?u=76281980&t=0)** - [Instructor] Here's my solution. For the first task, I simply printed out the picture sizes with the NumPy shape function starting at line 10. So here we can see that penguins is the RGBA image, because it has four elements in the third dimension. For task number two, I used my adapt PNG function for penguins, and I used my adapt image function for icepops after multiplying it by 255. I could have used adapt PNG for this as well. Now, for traffic, I didn't do anything because it's already encoded with eight-bit unsigned integers. Then, starting at line 14, I print the sizes and data types of all pictures. The results show that they are all now eight-bit integers with three channels. Task three was easy. First, I printed traffic with axes. Here we can see the axes. Then I printed penguins and icepops without axes. Here we have the penguins. And here are the icepops. Then we have task four where I flipped traffic horizontally
>
> **[1:36](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-manipulate-some-pictures?u=76281980&t=96)** with the fliplr function. This results in a mirrored image. Then I performed three rotations of 90 degrees on penguins. This is effectively the same as rotating by minus 90 degrees. And lastly, let me show you what happens to the icepops picture when I double its pixel values repeatedly. Here we go. One. Two. Three. Four. Five. Six. Seven. Eight. Whoa, it went black. Nine. And 10. So, what do you think happened? Well, recall that all the values in these images are encoded in eight bits. So every time we multiply this image by two, we are losing information because the most significant bit in the multiplication is lost. Another way of at it is that multiplying an integer by two is the same as shifting its bits to the left by one position.
>
> **[3:08](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-manipulate-some-pictures?u=76281980&t=188)** In the end, we can only do this eight times before we have filled every byte with zeros, and that's why the image eventually goes black.

> [!info]- Semantic Content
>
> **Env Vars:** png (2), rgba (1)
> **Analogies:** picture (2)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 3. From Color to Black and White

[↑ Back to Table of Contents](#table-of-contents)

#### [Average grayscale](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/average-grayscale?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/average-grayscale?u=76281980&t=0)** - [Instructor] In many applications of [Computer Vision](../../Skills/Artificial%20Intelligence%20(AI)/Computer%20Vision.md), color isn't very useful. So all the data that comes with it may slow down the computing process. That's why removing color is a common practice. Let's see a two-step process for going from full color to black and white. First, we must convert a color image to grayscale. This conversion means reducing the encoding from three or four color channels to only one brightness channel. There are several ways to do this, not just one, we may stop at a grayscale image if that's what we want, but the second step is to convert the grayscale image to black and white. This conversion will allow us to encode each pixel with just one bit. Now, this is not as easy as it sounds. You'll see why in a minute. Let me show you a simple way to convert a color picture to grayscale. It consists in calculating the average of its red, green and blue intensity components, and use this average as the only intensity for its pixels. That is to say, a single channel picture. First, let's open a picture of a play space. In line 11, I'm using an object named toys for the picture, and in line 13, I'm printing its size. Here's the picture,
>
> **[1:38](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/average-grayscale?u=76281980&t=98)** and its dimensions are 629 rows by 408 columns. This is a relatively low resolution. In the next cell, I defined a function to go through all the pixels and calculate the RGB average to finally return the resulting grayscale image. You may want to pause the video and examine the code, and please, keep in mind that our objective is not to create a professional library, but only to illustrate what's going on. In line 11, I'm using this function to get a new object named "toys_gs" for the grayscale version of toys. Let's see it working. It's taking a while. It took about three seconds. This is exactly what I expected for a grayscale version of this picture. Also, notice at the top that the image has only two dimensions, and yet it took a while. That's because I used two nested loops in my code, and since [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) is an interpreted language, it takes its time to do the job sequentially. Luckily, Python is known for its MATLAB-like vector notation. So in this next cell, we have a one-line implementation of this average calculation. It turns out that a ".product " takes care of it. Let's see how long it takes now.
>
> **[3:14](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/average-grayscale?u=76281980&t=194)** Yep, it was faster, just 0.6 seconds. So now that we have a faster way of doing this, let's try it on a high-resolution picture. Let's see it first. There it is, a colorful picture of fruit on a plate. Now, this picture is over 5,000 by 3,000 pixels. So even the vector operation may take a while. Let's see how long it takes.
>
> **[3:53](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/average-grayscale?u=76281980&t=233)** There you have it, a nice grayscale image with a rather high resolution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2), [Computer Vision](../../Skills/Artificial%20Intelligence%20(AI)/Computer%20Vision.md) (1)
> **Analogies:** picture (9)
> **Definitions:** is a  (2), is an  (1)
> **CLI Commands:** python (2)
> **Env Vars:** rgb (1), matlab (1)
> **Code Identifiers:** toys_gs (1)
> **Versions:** 0.6 (1)
> **Cross-References:** in the next (1)

#### [Weighted grayscale](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/weighted-grayscale?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/weighted-grayscale?u=76281980&t=0)** - [Instructor] An average grayscale doesn't always look very natural to the human eye or brain. A more natural alternative is to calculate a weighted average with different weights for red, green, and blue, based on luminance or human perception. A popular distribution of weights is 0.299 for red, 0.587 for green, and 0.114 for blue. Let's work with the play space image again. Notice the different colors and try to figure out which colors should look lighter and which should look darker in the grayscale version. In the next cell, I'm creating the regular average in line four and a weighted average in line five. Notice the distribution of weights. After that, I'm printing both pictures side by side. As you can see, starting at line 8. Here we have the regular average on the left and the weighted average at the right. Pay attention to the difference in the shades of gray. Notice how the truck and the mat at the back look different between the two pictures. Now let's see it again in the fruit picture. Here's the color version. Once again, try to predict which colors should look lighter
>
> **[1:36](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/weighted-grayscale?u=76281980&t=96)** and which should look darker in the grayscale version. Alright, let's see the grayscale versions. And here they are side by side. One difference I can notice is in the leaves, which look much lighter in the weighted grayscale image at the right.

> [!info]- Semantic Content
>
> **Versions:** 0.299 (1), 0.587 (1), 0.114 (1)
> **Cross-References:** in the next (1)
> **Analogies:** picture (1)
> **Speakers:** - [instructor] (1)

#### [Converting grayscale to black and white](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/converting-grayscale-to-black-and-white?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/converting-grayscale-to-black-and-white?u=76281980&t=0)** - [Instructor] Now, let's talk about converting grayscale images to black and white. This is often useful in [Computer Vision](../../Skills/Artificial%20Intelligence%20(AI)/Computer%20Vision.md) where you may need to identify objects and black and white is all you need. Let's work with the play space image again. In this first cell, let me open the file, convert the image to a weighted grayscale, and display it. Now let me show you a function I wrote in the ECCV file to turn each pixel to total black or total white based on a threshold. This is the grayscale_to_BW function starting at line 30. It receives a grayscale image and a threshold to compare to every pixel. This function traverses the whole grayscale picture one pixel at a time, changing the pixel to 0 or 255, depending on whether it is greater than the threshold or not. Notice that the returned image is also grayscale with integers from 0 to 255. Let's go back to the notebook. In this cell, I'm calling the grayscale to BW function with a threshold of 127, the middle shade of gray. This certainly looks like a black and white picture that came from the original one, but there seems to be a lot of missing detail.
>
> **[1:37](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/converting-grayscale-to-black-and-white?u=76281980&t=97)** To have a better understanding of what the 127th threshold we used means in this picture, let me show you a histogram of the pixels in the grayscale image. A histogram is a plot of the frequencies of values in the data points, which are the pixels. So this plot is showing how many pixels have the same value. In the horizontal axis, we have all values from 0 to 255, and in the vertical axis, we have how many pixels have each value. Yes, this image has a lot of pixels, over half a million, actually. Remember, 0 is the black end and 255 is the white end. Each peak means that our image has a significant amount of that shade of gray. So just looking at the histogram, we may get an idea of which threshold levels to try. For example, the valley with the lowest point dividing the dominating peaks seems to be near 115, so let's try putting the threshold there and see how it compares to the 127 threshold image. And that's what we have in the next cell. Let's compare the grayscale picture with a threshold of 127 with one that uses 115 for the threshold. And here they are.
>
> **[3:12](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/converting-grayscale-to-black-and-white?u=76281980&t=192)** Take a moment to notice the differences. I noticed some improvement in the outlines of the truck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Computer Vision](../../Skills/Artificial%20Intelligence%20(AI)/Computer%20Vision.md) (1)
> **Analogies:** picture (4), for example (1)
> **Cross-References:** go back to (1), in the next (1)
> **Definitions:** is a  (1), means that (1)
> **Env Vars:** eccv (1)
> **UI Navigation:** open the (1)
> **Speakers:** - [instructor] (1)

#### [Adaptive thresholding](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/adaptive-thresholding?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/adaptive-thresholding?u=76281980&t=0)** - [Instructor] Let me tell you about a nice technique called adaptive thresholding. As you may know, an image may contain segments with different lightings and shades, so a static threshold for turning it into black and white may favor some segments and ignore others. For these images, different thresholds apply to different segments. Here we have a tutorial about image thresholding at the OpenCV website. It showcases two functions to perform adaptive thresholding on a Sudoku image with a big shadow over it. This shadow is irregular, so the picture is ideal for this example. As you can see, we have the original image, then it's black and white version with a global threshold of 127, which is very much ruined by the shadow. And then we have two adaptive threshold results. One is the adaptive mean thresholding, and the other is the adaptive Gaussian thresholding. Both are doing a great job at extracting the numbers and the lines. I decided to replicate this code with a different Sudoku image. Let's see it in a notebook. First, let me show you my Sudoku image. Notice that this one doesn't have a big shadow like the picture in the OpenCV tutorial, but it does have different backgrounds in the nine number blocks.
>
> **[1:35](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/adaptive-thresholding?u=76281980&t=95)** It seems like this would get in the way of a global threshold. Now, let's look at the histogram for this picture to get a sense of its global threshold. A threshold of 127 doesn't seem so promising, but we'll try it anyway. So in the next cell, we have a modified version of the OpenCV code. By all means, take a moment to read it, but here are the highlights. In line 6, I'm setting the global threshold to 127. You can try other thresholds later, especially the ones in the comment. In line 7, I'm reading the image with OpenCV's imread function. Next, I'm applying a blur filter to it. We'll talk about filters a bit later, but this is performed to get rid of tiny changes by smoothing the picture, especially if it has a big resolution. In line 9, we have the OpenCV function to produce the black and white image with a fixed threshold. The result goes to the th1 object. Then in line 10, we have OpenCV's adaptive threshold function to get the black and white image with adaptive mean thresholding as one of the arguments specifies. For each pixel, this function sets the threshold at the average of a specified neighborhood area for that pixel.
>
> **[3:08](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/adaptive-thresholding?u=76281980&t=188)** This area is a square with the pixel of interest at the middle, so this block size must be an odd number. That's the next to last argument with the value 33. In line 12, we have the same function performing adaptive Gaussian thresholding. This is similar to the previous one, but it performs a weighted average of the pixels in the neighborhood area. The weights are larger near the pixel of interest and smaller the farther we go in the shape of the Gaussian bell curve. So let's see the results. Here we have the original image and the result of a global threshold of 127. As you can see, some numbers are missing parts and the lines are gone. Now here we have the results for adaptive mean and Gaussian thresholding. Both are pretty good, and don't worry about those tiny leftover spots. We will see some methods to get rid of them later. Now, let's go back to the histogram. In an effort to get a better global threshold, you may want to rerun the next cell with different thresholds. Two I found interesting are 215 and 225. So go ahead and try those thresholds. Lastly, let me show you what happens when you apply adaptive thresholding to photographs.
>
> **[4:43](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/adaptive-thresholding?u=76281980&t=283)** Let's see it for the play space image. As you can see, the borders are highlighted, making it look as if artistically drawn by hand. Go ahead and try it with your own pictures.

> [!info]- Semantic Content
>
> **Analogies:** picture (4), similar to (1)
> **Cross-References:** in the next (1), go back to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Removing color](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-removing-color?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-removing-color?u=76281980&t=0)** (light music)
>
> **[0:05](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-removing-color?u=76281980&t=5)** - [Instructor] It's time for another challenge. Let's remove color from an image. Once again, please follow the instructions in the comments. Your first task is to print a color image of your own. For that, you must copy the file into this folder, which is 0305. Task number two is to convert that image to grayscale and display it. Task number three is to plot a histogram of your grayscale image for you to try and pick a suitable global threshold later. Lastly, for task number four, create two global threshold images and compare them. For this, you may use functions from OpenCV or the grayscale to BW function in ECCV. This should take you about 15 minutes. When you're done, check out the next video to see my solution.

> [!info]- Semantic Content
>
> **Env Vars:** eccv (1)
> **Cross-References:** next video (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (light music) (1)

#### [Solution: Removing color](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-removing-color?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-removing-color?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-removing-color?u=76281980&t=5)** - [Instructor] How did you do? Here's my solution. First, I used the picture I took of a sunset at the beach. There it is. That's the Pacific Ocean, by the way. Next, I converted it to gray scale using the weighted average method I showed you earlier. And here we have the resulting gray scale image. Then, here's my histogram code. Looking at it, I picked two crevices I found interesting for the thresholds. These are at 115 and 175. So in the next cell, I applied these thresholds in lines eight and nine. Let's run it. This took a while because I used my gray scale to BW function. Here are the resulting black and white pictures. One of the main problems with global thresholding we can see here is that each of these images has captured some important details that the other missed. But sadly, they both missed the sun.

> [!info]- Semantic Content
>
> **Cross-References:** in the next (1)
> **Analogies:** picture (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)


### 4. Filters

[↑ Back to Table of Contents](#table-of-contents)

#### [Convolution filters](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/convolution-filters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/convolution-filters?u=76281980&t=0)** - [Instructor] Let me tell you about convolution filters, a special category of operations that can be applied to gray scale and color images. A convolution filter consists in taking a kernel, which is a small square matrix of odd dimensions, and we calculate the value of a corresponding pixel in a new resulting image exactly where the center of the kernel overlaps with the original picture. This new pixel is a function of the kernel and the overlapping pixels. In this example, the new pixel is calculated with a weighted sum of the overlapping values. You can think of the kernel as the set of weights. You'll multiply by the values in the overlapping pixels of the original picture. The kernel is overlapped with every pixel in the original picture to produce the resulting picture. Let me show you an example. Let's suppose we have the gray scale image at the left, and we want to run the three by three kernel at the right throughout this picture to produce a new one. If we start with this overlap, the resulting value in the new image will be the result of adding all the [products](../../Skills/Software%20Development/Microsoft%20Products.md) of the overlapped values. That's one times four plus two times zero, plus one times two, and so on. That comes to 56. At the neighboring pixel to the right, we get 66,
>
> **[1:37](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/convolution-filters?u=76281980&t=97)** at the next one, 76, and so on and so forth. Now, you may be wondering what happens with the pixels at the edges. In this example, we're talking about one level of missing pixels outwards because our kernel is three by three. If our kernel was five by five, then we'd be missing two levels of pixels outwards, so we have a problem with corner pixels and also with border pixels at the sites. Luckily, this is a solved problem. There are several methods to handle ledges, and they all involved extending the picture prior to running the filter. In our case, we could make the picture grow outward by a thickness of one pixel, and these pixels may be black, some level of gray, or an extension of the edge pixels like this. Notice that the extended pixels are the same as the edge pixels and corner pixels extend diagonally. This way we can freely run the kernel through the picture at the corners and at the sides. Lastly, let me tell you a few details about convolution filters. First, they take long to compute because we must traverse every pixel in the original picture, each time performing as many multiplication
>
> **[3:10](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/convolution-filters?u=76281980&t=190)** as the kernel's elements, plus one summation. However, convolution filters are highly parallelizable because as you may have noticed, each pixel in the resulting image is a function of the original picture and the kernel. In other words, all pixels in the new image are independent from each other. This means that computers with a graphics processor with hundreds or thousands, of course, can do a great job at running convolution filters. Virtually every software tool you use for [Image Processing](../../Skills/Artificial%20Intelligence%20(AI)/Image%20Processing.md) or [Computer Vision](../../Skills/Artificial%20Intelligence%20(AI)/Computer%20Vision.md) takes advantage of this fact. OpenCV is no exception. Also, convolution filters are capable of highlighting certain features of pictures, as you will see up ahead. Now, you might be wondering how this works with a color picture. Well, for color images, the process is applied to each channel, which is equivalent to having a 3D kernel with the same shape for all channels. However, you may use a 3D kernel with different contents for each channel.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1), [Image Processing](../../Skills/Artificial%20Intelligence%20(AI)/Image%20Processing.md) (1), [Computer Vision](../../Skills/Artificial%20Intelligence%20(AI)/Computer%20Vision.md) (1)
> **Analogies:** picture (11)
> **Definitions:** is a  (4), in other words (1), means that (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Average filters](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/average-filters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/average-filters?u=76281980&t=0)** - [Instructor] Let's experiment with average filters, which use the kernel to calculate the average of all overlapping pixels. This average is the new pixel, and it produces a blurring effect in the image. This time, we will use the picture of a house. Notice that this image has a relatively high resolution. Next, let's run an average filter using the OpenCV's filter2D function. We'll use this function because it would take too long with a straightforward function of our own. It turns out that the mathematics behind convolutions has a lot of non-obvious shortcuts that libraries like OpenCV use to their advantage. In line three, I'm creating the kernel with a seven by seven matrix where all elements are 1/49th. If you think about it, that's the weight we need for each pixel if we want to calculate an average. Notice that I'm creating a matrix of all ones, and then I'm dividing it by 49, which is seven squared. In line four, I'm using the filter2D function, which takes as arguments the image, then the depth, which is the encoding size of the image, like eight bits or 32 bits. A value of minus one is used to match the original image depth. The last argument is the kernel we just created.
>
> **[1:37](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/average-filters?u=76281980&t=97)** The result goes to a variable named blurred. You might be wondering how this 2D function works with a color picture, which is 3D. Well, the 2D kernel we just created is copied to create a suitable 3D kernel for all channels in the color picture. Let's see the results. I can certainly tell that this image is blurry. Now let's compare the original image and the blurred one side by side. Notice how each part of the picture has been blurred. Now, if you'd like to compare at a better level of detail, you may display sub images. For example, in this cell, we have a vertical section of the pictures from column 400 to 799. This way you can compare any section of the pictures. In this example, we used a seven by seven kernel. Now the size of the kernel translates to how blurry the resulting image will be. So now let's see the results for a three by three kernel. Notice in line five that now I'm dividing the all ones matrix by nine, which is three squared. Look at the image on the right
>
> **[3:10](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/average-filters?u=76281980&t=190)** and observe how minimal the blurring effect has become.

> [!info]- Semantic Content
>
> **Analogies:** picture (4), for example (1)
> **Code Identifiers:** filter2d (2)
> **Speakers:** - [instructor] (1)

#### [Median filters](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/median-filters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/median-filters?u=76281980&t=0)** - [Instructor] Not all filters perform the same weighted sum operation. Median filters can also blur images by picking the pixel with the median value instead of creating a pixel from the average. To showcase median filters, let's work with a grainy picture of a damaged photograph. This picture shows several spots and lines caused by damage to the physical photograph as well as a grainy artifact. Let's use OpenCV's median blur function in line 3. As arguments, it takes the image and the size of one side of the square neighborhood where the median will be selected. This is the neighborhood of the pixel of interest, so this pixel will be in the middle of the square. I'm using a square of five by five pixels. Notice that this filter doesn't use a kernel because it works with the original pixels exclusively. In contrast with an average, the median is the middle value in a sample. So, if we were to put the pixels in this five by five neighborhood in an array and then sort the array in ascending order, the median would be the pixel in the middle of the sorted array. Let's see the results. At first glance, we can see that the damage marks are diminished. We can barely see the lines
>
> **[1:35](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/median-filters?u=76281980&t=95)** and the spots are pretty much gone. But how does this compare to the average filter we saw before? In the next cell, I'm displaying them side by side. At the left, we will see the average filter blur, which is created in lines 5 and 6. And at the right, we'll see the median blur We just created. Notice that I'm using a five by five kernel for the average because I want to make a fair comparison of these filters. Indeed, the median filter did a better job at getting rid of the lines and spots. Now, let's [Zoom](../../Skills/Software%20Development/Zoom.md) into these two images in vertical sections. Let's start with the leftmost section. Both images have leftover lines and dots, but now we have an emerging feature in the median blur picture. Notice how the horizon looks different in these two pictures. That's because median filters work with the actual pixels in the original image. That means that no new colors or shades will come up, but only copies of the original pixels. This tends to preserve and highlight edges like the horizon we see here. Now, let's see the middle section. Once again, we have the damaged marks less visible in the median blur image.
>
> **[3:10](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/median-filters?u=76281980&t=190)** Also, notice that the plantation shadows look a little sharper in the median image. And now let's see the rightmost section. Now, we can see a stronger highlight of edges in the flowers and the plantation outlines. Is this a good thing? Well, it all depends on the effect you are trying to produce. To me, it seems a bit unnatural. Great, now let's see the same procedure in a different image. This time we'll work with a vintage picture of a group of workers. This picture is quite grainy and it also shows some damage. Let's perform a median blur to this picture. Now, because of the resolution of this picture in line 3, I'm using a smaller neighborhood of three pixels. It definitely looks a little better. And now let's see it side by side with its average blur counterparts created in lines 5 and 6. To be fair, this filter uses a three by three kernel. At first glance, the details look better to me in the median filter image, the one on the right. Let's zoom into three sections again. Here's the leftmost one. I like the median filters job at highlighting the details
>
> **[4:44](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/median-filters?u=76281980&t=284)** without making it look too blurry. The edges around the worker do look a bit highlighted, but not too much. Also, look at the detail in the shirt and buttons. Let's see the middle section. Once again, notice the detail in the tools. Now there's a strong artifact in the edges of the saw. Lastly, let's see the rightmost section. Once again, the median filtered image on the right looks much more detailed to me. I have included a third image for you to apply these filters. This one is a grainy picture of a face. Try to experiment with several kernel sizes to see if you can improve the quality of the picture.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Zoom](../../Skills/Software%20Development/Zoom.md) (2)
> **Analogies:** picture (9)
> **Definitions:** means that (1), is a  (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Gaussian filters](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/gaussian-filters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/gaussian-filters?u=76281980&t=0)** - [Instructor] While average filters calculate the average in the neighborhood of the pixel of interest, a Gaussian filter calculates a weighted average using a kernel with values that match the Gaussian Bell Curve. Here we have a three by three Gaussian kernel. Notice that the center is the highest weight and the weights get lower and lower as we go farther from the center. Let's open the picture of a house we saw before. For now, try to notice the detail of the original image. In the next cell, I'm calling OpenCV's Gaussian Blur function in line three. As arguments, it takes the image, the size of the kernel and the border type. Notice that the width and height of the kernel can be different from each other, but they must be positive odd numbers. So let's see the blurred image with a seven by seven kernel. There you have it. It's not easy to tell the difference between an image blurred with an average filter and one blurred with a Gaussian filter. That's why in the next cell, I'm showing all three blur filters at once. This time, I'll use a large kernel to make it easier to tell the difference between the median, average, and Gaussian filters.
>
> **[1:33](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/gaussian-filters?u=76281980&t=93)** This will be a 15 by 15 kernel. First notice the extreme blurring and edge artifacts in the median filter image at the right. Now, like I said, it's tough to tell the difference between the average and the Gaussian filter results. So let's [Zoom](../../Skills/Software%20Development/Zoom.md) in to the front door. Now we can see some differences. Look at the light fixtures above the door, and also the one next to the door. The Gaussian filter seems to have preserved some of the detail in spite of the blurring effect.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Zoom](../../Skills/Software%20Development/Zoom.md) (1)
> **Cross-References:** in the next (2)
> **CLI Commands:** make (1)
> **UI Navigation:** open the (1)
> **Analogies:** picture (1)
> **Speakers:** - [instructor] (1)

#### [Edge-detection filters](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/edge-detection-filters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/edge-detection-filters?u=76281980&t=0)** - [Instructor] Now, let's talk about edge detection filters, in particular, "Sobel Filters". If you pay attention to what the convolution of a kernel is doing, you'll notice that it's assigning more or less important to certain pixels, so you may expect to extract certain features of images depending on the patterns you use in a kernel. Here we have two Sobel filters. The first kernel detects vertical edges and the second detects horizontal edges. In both kernels, notice that the center pixel has a value of 0 along with its row or column. Also notice that the kernel has opposite signs in the values at the edges. These simple kernels yield very interesting results. Let's work with a picture of penguins. To keep things simple, I'll convert this image to grayscale. Notice in line 13 that I'm using OpenCV's "Convert Color" function for this. There are the penguins. By applying Sobel filters, we'll detect all edges in this picture. Let's start with a vertical Sobel filter created in line three. I'm assigning the resulting image to an object named "vr edges". By "vr", I mean that this is a vertical filter where the change from positive to negative goes to the right.
>
> **[1:35](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/edge-detection-filters?u=76281980&t=95)** So "v" stands for vertical and "r" stands for right. Let's see it. Notice that edges with a strong vertical component are highlighted. Also notice the lack of horizontal edges. Now, let's use the opposite vertical kernel, the one facing to the left. That's why I'm creating a new image named vl edges, as in vertical facing to the left. Let's see the two resulting images side by side. Look closely and try to notice that both images are highlighting vertical edges, but the edges detected by one filter were not detected by the other filter. That's because one kernel highlights changes when the intensity drops, while the other highlights changes when the intensity rises. So to get a combined image with all vertical edges, let's add these two images. In line three, I'm using OpenCV's add function to create the v edges subject. Let's see the result. Oh, yeah. Now we can see all vertical edges in one picture. Great. Now let's do the same for horizontal edges. In line three, we have the horizontal kernel facing down, and in line nine, we have the one facing up. Let's see the results side by side.
>
> **[3:12](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/edge-detection-filters?u=76281980&t=192)** Once again, pay attention to the different edges detected. The one on the left is highlighting the tops of the penguins' heads, while the one on the right is highlighting the snow they are standing on. Now, let's add the two images in the h edges object. There. We have all horizontal edges. So now that we have all vertical and horizontal edges, it makes sense to add them all. I'm doing that in line three by adding v edges and h edges. Let's see it. There it is, an image that highlights all edges in the penguins picture. Now, let's have some fun. Let's turn that picture into black and white and get rid of some noise. This black and white picture was created with a threshold of 127. Feel free to try other thresholds. Again, just for fun, let's invert that picture to make it look like a drawing. For that, I'm using OpenCV's "bitwise not" function. There you have it. A nice drawing of a gang of penguins.

> [!info]- Semantic Content
>
> **Analogies:** picture (7)
> **Definitions:** stands for (2), is a  (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Convolution filters](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-convolution-filters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-convolution-filters?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-convolution-filters?u=76281980&t=5)** - [Instructor] Are you ready for your next challenge? This time you'll create your own convolution filter and try it on your own pictures. Task one is to print a color image of your own as usual. Just make sure to assign it to the IMG variable. For task two, you have to define a kernel of your own. Try to apply some logic to its values and try to predict how it will behave. Your kernel may be three by three, five by five, or any size, as long as it's a square of odd numbers. You simply have to modify the kernel definition in line nine. Notice that this kernel leaves the picture unchanged. You don't have to modify the next cell. Just run it to compare your original image with the filtered image. Task three is to create a second filter. Again, modify the identity kernel. Try to be creative. It may be something related to the previous kernel or something totally different. Lastly, run the next cell to compare your two filtered images. This should take you about 15 minutes. When you are done, watch the next video to see my solution.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Env Vars:** img (1)
> **Cross-References:** next video (1)
> **Analogies:** picture (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)

#### [Solution: Convolution filters](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-convolution-filters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-convolution-filters?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-convolution-filters?u=76281980&t=5)** - [Instructor] How did you do? Let me show you my solution. For task 1, I used a nice picture of two Komodo dragons, my second favorite animal species. Look at line 9. Since I decided to play around with edge detection filters, I converted the image to gray scale in this step. Let's see those guys. And there they are, two fellas sharing a nice hug. For task 2, I decided to create a variation of a Sobel filter. This one has a diagonal pattern, like a straight line with a positive slope. Let's see it working. Notice that the positive slopes are indeed highlighted. My second filter is the negative slope version of the first one, so I'm expecting to highlight the other diagonal edges. Let's see it. Yes, the negative slopes are now highlighted. Lastly, let's see both images side by side. There they are. It looks like the grass got in the way. Maybe some blurring at the beginning would've been a good idea.

> [!info]- Semantic Content
>
> **Analogies:** picture (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)


### 5. Image Scaling

[↑ Back to Table of Contents](#table-of-contents)

#### [Image downscaling methods](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-downscaling-methods?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-downscaling-methods?u=76281980&t=0)** - [Instructor] Image downscaling means taking an image of a certain resolution and producing a new image with a lower resolution. But why would we want to do that to a perfectly good image of a tiger? Well, maybe the high resolution tiger is taking up too much storage space and we only need to print a thumbnail, which will look a lot smaller on a screen. Like this. This smaller tiger is the same low resolution tiger, not the high resolution one, and it looks good enough for me. Another reason would be to perform operations on a picture to extract data from it where a lower resolution would yield the same result as a higher resolution. This would help speed up these operations. So what's the problem we face when downscaling an image? Let's say we want to downscale this image by a factor of three. That is, we want to convert a six by six image into a two by two image. The problem is to determine the color we need in each pixel of the lower resolution image. Looking at the original picture, we can see that there are four large squares composed of nine pixels each, and each of these squares corresponds to one pixel in the new image. The problem is to decide what to do with the pixels in each square to produce the new pixel. We could use an average, a median,
>
> **[1:34](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-downscaling-methods?u=76281980&t=94)** or even complicated functions that consider the neighboring pixels or gradients. The problem becomes more complicated when the shrink factor is not an integer, like a factor of 1.5. As you can see, the problem in these cases is that we won't always get an integer number of pixels to work with, but this problem also comes up when trying to shrink an image with a resolution that's not divisible by the shrinking factor. There are several ways to tackle this problem.

> [!info]- Semantic Content
>
> **Analogies:** picture (2)
> **Versions:** 1.5 (1)
> **Speakers:** - [instructor] (1)

#### [Downscaling example](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/downscaling-example?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/downscaling-example?u=76281980&t=0)** - [Instructor] Ready to downscale a picture? Let's work with a close-up of the water volcano we saw before. Notice the resolution. It's 389 rows by 536 columns. Now, let's downscale it. For this, I'm calling the downscale function I wrote in ECCV. Let's see the code. My function starts at line 40 and it receives two parameters, the picture, "pic", and the scaling factor, "n". Feel free to hit pause and examine the code. Here are the highlights. In lines 41 through 44, I'm dealing with the problem of downscaling an image with a resolution that's not divisible by the scaling factor. I'm simply disregarding the remaining pixels at the end of the rows and columns. This isn't bad at all, because I'm only disregarding up to n minus one pixels per row and column, and I'm simplifying the problem greatly. In line 47, I'm creating an empty image object of the smaller dimensions. Then, inside the nested for loops, I'm calculating the average of every n by n square in the original picture for each color channel to produce each pixel in the smaller image. Alright, let's go back to the notebook.
>
> **[1:36](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/downscaling-example?u=76281980&t=96)** In this cell, I'm downscaling the volcano picture by a linear factor of four. That is, I'm making the image area 16 times smaller. Also, notice that I'm using the adapt image function because the downscaler may have left some pixels outside the acceptable range for the image show function. Let's see it. Here we can see the expected pixelation artifact. Now, let's see the two images side by side as usual. Notice the resulting dimensions. Grab your calculator and try to verify that the correct downscaling was performed. The difference is visible everywhere. Look at the volcano slopes and the roof shadows. Now let's display both images, but at a suitable size for the lower resolution one. It's difficult to tell the difference at this size, so we might as well use the smaller image, which uses much less storage space anyway. Now let me save the smaller image in a file named "smaller.bmp". Okay, now let me open the newly created file. Here it is. It looks okay to me. And lastly, let me repeat the process
>
> **[3:10](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/downscaling-example?u=76281980&t=190)** for a different picture. But now let's use a shrink factor of 10 so the resulting picture is 100 times smaller. More importantly, neither the width nor the height of this image is divisible by 10, so I will discard some pixels in the process. Look at the resolutions at the top. I discarded three pixels in every row and nine pixels in every column of the original image. Can you tell by looking at the two pictures? I can't. The pixelation is evident, but the absence of the discarded pixels is not.

> [!info]- Semantic Content
>
> **Analogies:** picture (6)
> **Env Vars:** eccv (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** open the (1)
> **Speakers:** - [instructor] (1)

#### [Image upscaling methods](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-upscaling-methods?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-upscaling-methods?u=76281980&t=0)** - [Instructor] Image upscaling is a more ambitious operation. Now we want to produce a higher resolution image from a lower resolution one. It may sound impossible at first, and I claim that it is impossible indeed. Now, the fact that something is mathematically impossible doesn't necessarily mean that there aren't pretty good approximations. Well, there are some upscaling [Algorithms](../../Skills/Software%20Development/Algorithms.md) that can stretch images well enough to fool many humans. Here's the problem we face when upscaling an image. Let's say we want to do the opposite as before. Now, we want to upscale this image by a factor of three. That is, we want to convert a two by two image to a six by six image. The problem is now to determine the colors we need in each pixel of the higher resolution image. The trivial solution would be to fill all high resolution pixels with the same color of the low resolution pixel they're extending, but this would look pixelated, because it would be simply an enlarged copy of the original picture at a higher resolution. A better solution would try and guess what colors in the high resolution pixels would produce the missing details. If interpolation algorithms come to mind, you're onto something. Here we can see that the high resolution pixels at the borders are trying to create a smooth change
>
> **[1:34](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-upscaling-methods?u=76281980&t=94)** to the color in the neighboring low resolution pixels. And once again, a non integer growth factor is a complication, because we're left with low resolution pixels creating non integer numbers of high resolution pixels.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Algorithms](../../Skills/Software%20Development/Algorithms.md) (2)
> **Definitions:** is a  (2)
> **Analogies:** picture (1)
> **Speakers:** - [instructor] (1)

#### [Upscaling example](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/upscaling-example?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/upscaling-example?u=76281980&t=0)** - [Instructor] Now let's try our hand at upscaling an image, which is a bit more complicated than downscaling. This time, we'll start with the downscaled image from the previous notebook. There it is. Now I will use the upscale by 2 function from ECCV. Let's see it. The function starts at line 58, and it only receives the picture as an argument. In lines 59 through 64, I create the larger image object with an extension of its last row and column. That's because my algorithm calculates the higher-resolution pixels by interpolating with the neighbors. So these extra pixels are there so that the last pixels have neighbors. Now, don't let the body of the nested loops spook you. All it's doing is calculating the four new pixels from each lower resolution pixel. Let me show you. Let's say we want to calculate the four pixels that would expand the top-left pixel in the leftmost picture. So let's fill up the top-left square in the empty picture at the right. The easiest higher resolution pixel is the top left one because it's just a copy of the original pixel. So this large pixel alone
>
> **[1:34](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/upscaling-example?u=76281980&t=94)** gives us this smaller pixel at the right. Now, the top right pixel in the higher-resolution image is the average of the source pixel and its right neighbor. So these two produce this one. Remember, the resulting color is the average of the two neighbors involved. Moving on, the bottom-left pixel is the average of the source pixel and its lower neighbor. So these two produce this one. And lastly, the bottom-right pixel is the average of the source pixel and its lower-right neighbor. So these two produce this one. So that's what's being calculated in the body of the nested loops. Okay, let's go back to the notebook. And let's see the upscaled image. Remember, this one has interpolated pixels to achieve a higher resolution while avoiding a pixelation artifact. Now let's compare it with the original smaller image. Notice the resolutions in the axes. The lower resolution picture is at the left and the higher resolution picture is at the right.
>
> **[3:06](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/upscaling-example?u=76281980&t=186)** I can definitely see some improvement. Now let me upscale the enlarged image further and compare it with the small image. The higher resolution picture seems a bit blurry, but it's definitely less pixelated. Let's quickly save the larger image into a file. All right, now that we have reduced an image to 1/16 its original size and then stretched it back 16 times, that's compared to your original resolution volcano picture with the final shrunk and stretched image. This is going to be fun. Notice that the dimensions of these two pictures are the same. Now, visibly, the final image lost information at some point. This happened in the downscaling process where 16 pixels were packed into one single pixel. That is to say, we downscaled the image in one step, but upscaled it in two steps. If you are curious, you may want to repeat the whole experiment, but downscaling the image twice by a factor of two instead of once by a factor of four. Would you expect any changes in this final comparison?

> [!info]- Semantic Content
>
> **Analogies:** picture (7)
> **Env Vars:** eccv (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Resize a picture](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-resize-a-picture?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-resize-a-picture?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-resize-a-picture?u=76281980&t=5)** - [Narrator] It's time for another challenge. Let's resize some pictures. As usual, Task #1 is to pick a picture of your own and display it. Task #2 is to downscale that image to the resolution of your choice. Feel free to use the downscale function from ECCV or any other function, either made by yourself or from a library, like OpenCV's resize function. Finally, Task #3 is to upscale your image. You may want to do this with your original image or with the downscaled image from the previous cell. Again, feel free to use the upscale by two function from ECCV or any other. This should take you about 15 minutes. After you're done, watch the next video so I can show you my solution.

> [!info]- Semantic Content
>
> **Env Vars:** eccv (2)
> **Cross-References:** next video (1)
> **Analogies:** picture (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (bright music) (1)

#### [Solution: Resize a picture](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-resize-a-picture?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-resize-a-picture?u=76281980&t=0)** - [Instructor] Let me show you my solution. For this challenge, I used the picture of a pizza inside a brick oven. There it is. It looks yummy. Now, for task two, I made a comparison of a downscale made with a linear factor of four using my ECCV function with one made by open CVs resize function. As you can see in line 10, this function receives the target size as an argument, so I cheated by looking at the resulting size from my function and then sent those dimensions to OpenCVs resize function. Let's see the comparison. At the left, we have my downscaled image and on the right is the one by OpenCV. At this size, I honestly can't tell the difference. For task three, I decided to blow up the small image four times to get the original resolution. Once again, I compared my implementation with that of OpenCV. Let's see it. Just like before, I can't tell the difference at this size, which I guess is good news.

> [!info]- Semantic Content
>
> **Analogies:** picture (1), just like (1)
> **Env Vars:** eccv (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 6. Fun with Cuts

[↑ Back to Table of Contents](#table-of-contents)

#### [Image cuts](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-cuts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-cuts?u=76281980&t=0)** - [Instructor] Before wrapping up the course, let me introduce you to "Image Cuts", an application of [Image Processing](../../Skills/Artificial%20Intelligence%20(AI)/Image%20Processing.md) in the amazing art of computational photography. These are the techniques used by photographic software like Photoshop or your smartphone's camera. "Cuts" are a family of pixel level operations. It's just like cutting a printed photograph with scissors. Cuts are useful for stitching pictures together, as we'll see shortly. But Cuts have a wide variety of other applications, like seam carving, for example, which is a technique for resizing images by adding or removing pixels with the same type of Cuts you are about to see. A very natural application of cuts is in stitching two images together. Let me show you an example. Suppose that we have these two unrelated images and we want to create one novel combination of them. The picture at the left was taken by myself one day I went for a walk and the picture at the right is a professional picture of a tiger in what appears to be a jungle. One way to stitch these two pictures together is to simply put them one next to the other, like this. But as you can see, there's a vertical artifact that gives away the fact that these are two separate pictures. Instead, we can grab the two images and cut them in a very special pattern
>
> **[1:35](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-cuts?u=76281980&t=95)** that minimizes the perceived changes in a seam, like this. Then we can put the two pictures together right at the cut. Let's stop right before we complete the stitch so we can see where the seam is. Interestingly, it's surrounding the plant at the left, so this is how the final picture looks. Notice how peculiar this picture looks. It's difficult to find the seam even for someone with a keen eye. So how can we stitch two pictures together? First, we must define an overlap between the two pictures. This is the number of pixels we will overlap the two pictures horizontally. Next, we calculate the error between the overlapping parts. This can be as simple as the squared difference of the pixels. Then, inside the arrow section, we find the path with the minimum change. This is the seam. Lastly, we stitch the images at the seam. Let's see these steps in the tiger example. First, we start with the two images, which must have the same height. Then we overlap them. For this example, I used an overlap of 100 pixels. This is the overlap we are interested in. Now, we calculate the error for this overlap. It's much easier to remove the color at this point.
>
> **[3:10](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/image-cuts?u=76281980&t=190)** Then we can perform the subtraction and square it to get only positive values. Here's what the error section looks like. Inside this error section, we can calculate the path with the minimum cost. Visually, that would be the darkest path. This is the path where all overlapping pixels look alike the most among all possible paths in the error section. This path can have any shape, but for our example, it's strictly vertical or diagonal, never horizontal. Lastly, we use pixels from the left picture at the left of the seam and pixels from the right picture at the right of the seam to create the final image. And there you have it, a Bengal tiger in my neighborhood.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Image Processing](../../Skills/Artificial%20Intelligence%20(AI)/Image%20Processing.md) (1)
> **Analogies:** picture (7), just like (1), for example (1)
> **CLI Commands:** find (2)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)

#### [Stitching two images together](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/stitching-two-images-together?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/stitching-two-images-together?u=76281980&t=0)** - [Instructor] Let's look at an example, where we remove an object in an image by splitting the image in two parts and then stitching them back together with a cut that excludes the unwanted object. For this, we will work with a picture of a green wall. This would be a nice photograph to share if it weren't for that pesky piece of litter in the middle. Now, let's split the image in two separate parts right at the middle. Notice in lines three and four that I'm making the split at column 870. Notice the unwanted object in both images. Alternatively, I could have split the picture a little to the left and right to completely exclude the unwanted object. However, I decided to leave it there and use a large enough overlap for my algorithm to have enough opportunity to take it out. Now let's look at the two images put together in a vertical straight line at the middle of their overlap. In line four, I've defined an overlap of 70 pixels. After watching this video, try using other overlaps like 52 and 46. The vertical stitch is done in line eight. Let's see it. Don't worry, I don't expect you to notice the split artifact in the middle because of the resolution. So let's take a closer look at a sub image
>
> **[1:37](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/stitching-two-images-together?u=76281980&t=97)** named "Tiny Stitch". There it is. Can you spot the vertical artifact in the middle as I scroll down? It's quite easy to notice. Now I want to show you how the cut will be created at a noticeable level of detail. So I will calculate a cut for a small section of the overlap. This will be a 100 pixel toll section at the top of the overlap created in line six and seven. Remember, these two parts will overlap. In the next cell, I'm producing the squared error of the rover overlap in three steps. First, I remove color, then I subtract, and then I square. Now, here's where we calculate the cut. It must be the darkest path of all, that is the path that accumulates the least possible sum. So to do this, I'll use a function I wrote called "get_seam". Let's go to ECCV. The function is defined in line 93 and it takes a square difference matrix as an argument. Now the algorithm is a bit involved and you are not required to go through the code. However, if you really want to know,
>
> **[3:12](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/stitching-two-images-together?u=76281980&t=192)** this is a graph search algorithm like A-star or Dijkstra's algorithm. Simply put in the first set of nested loops, I traverse the error matrix top down row by row, adding the values of the shortest sums into another matrix named "cost". Then in the second set of nested loops, I populate an array named seam, by traversing the cost matrix bottom up, selecting the pixel index with the minimum cost. Once again, don't worry too much about this code. Let's go back to the notebook. Notice that I'm calling the "get-seam" function in line five. Then in lines 8 through 11, I'm simply marking the seam in the error with white pixels. Let's see it. This is the darkest path in the error image. All other paths add up to a larger cost. Great, now that we know what we are doing, let's create the whole seam. Basically, I'll repeat the steps we just saw, but for the whole overlap, not just the first 100 rows. Here we have the two overlapping sections. Now let's see the squared error image.
>
> **[4:47](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/stitching-two-images-together?u=76281980&t=287)** This is what we'll send to the get_seam function. Remember, in this cell, we'll calculate the seam and show it in white over the error image. So this is the complete cut. Let me scroll down so you can see all of it.
>
> **[5:17](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/stitching-two-images-together?u=76281980&t=317)** Now comes the easy part, stitching the sections together. In line six, I'm creating the middle section, which has pixels from both the left and right components of the overlap. The seam determines where the left pixels and the right pixel starts. In line 17, I'm creating another version of this middle section, which will be marked with the seam in red pixels. Let's see it.
>
> **[5:55](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/stitching-two-images-together?u=76281980&t=355)** And here we have it. Let me scroll down to show you the whole red seam.
>
> **[6:06](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/stitching-two-images-together?u=76281980&t=366)** Now in this cell, I'm stitching it all together. The leftmost image minus the overlap, the middle section with the seam in red, and the rightmost section minus the overlap. Admittedly, the red seam is barely visible as it has a thickness of just one pixel. Anyway, let's see the result with a middle section without the seam highlight. So this is the finished image. Once again, at this size it would be difficult to spot any artifacts, but it's looking pretty good to me. Lastly, let's [Zoom](../../Skills/Software%20Development/Zoom.md) in to see the difference in the magnified section we saw before. At the left, we'll see the vertical split and at the right, our nice cut. I'm sure you can notice the vertical split, but I dare you to try and find any unnatural artifacts in the cut version. Also look closely to notice how each artifact in the split image was corrected by the cut. Feel free to pause the video to examine these details. Now, let's save the resulting image in a file. You can go ahead and open it to see it at its full size.
>
> **[7:46](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/stitching-two-images-together?u=76281980&t=466)** Here, you can try harder to find any artifacts.
>
> **[7:54](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/stitching-two-images-together?u=76281980&t=474)** And now let's have some fun. In this cell I repeated the whole process, but I inverted the right and left sections to see how the cut ends up. Let's see it. Well, that doesn't look bad at all. Notice the piece of litter still at the right and left end. That can be easily cropped away. Now let's see the usual zoom. This time, the vertical artifact is very visible and the cut did a wonderful job. Lastly, let's look at the grass. As you can see on the right, the quality of the cut is impeccable.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Zoom](../../Skills/Software%20Development/Zoom.md) (2)
> **UI Navigation:** scroll down (3), go to (1)
> **CLI Commands:** find (2)
> **Code Identifiers:** get_seam (2)
> **Cross-References:** in the next (1), go back to (1)
> **Definitions:** is a  (2)
> **Analogies:** picture (2)
> **Env Vars:** eccv (1)

#### [Cuts in panoramic photography](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/cuts-in-panoramic-photography?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/cuts-in-panoramic-photography?u=76281980&t=0)** - [Instructor] Now, I want to tell you about the application of cuts in "Panoramic Photography". You are probably familiar with panoramic photographs, and if not, chances are your smartphone has this feature. A panoramic picture is the result of taking several pictures, like the three pictures you see here, and producing a combined picture as if it were one single wide photograph. Now, the software behind panoramas consists of a specific pipeline of processes to adjust the separate pictures. For example, if you look at these three pictures, you'll see that the electrical cables at the top don't match between the pictures, nor do the angles of the fence. That's why the algorithm includes a step of warping the pictures to make overlapping elements match. Here we can see the three pictures stitched together with two important details. First, the pictures are warped in such a way that the electrical cables and the house overlap quite well at the right, and so do the fence and the lamppost at the left. There are several [Algorithms](../../Skills/Software%20Development/Algorithms.md) to warp images, depending on the effect you want to achieve in your panorama picture. Second, the original pictures had overlaps shown here between vertical green lines. Those overlaps were combined
>
> **[1:35](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/cuts-in-panoramic-photography?u=76281980&t=95)** with a technique called blending. This is a weighted sum of the overlapping parts so that one fades away while the other fades in. We can see that blending was used in this picture because of the ghosting effect at the seam between the two rightmost images. The final step is to crop the image to remove the visible excess of black at the right, due to the rightmost picture not being warped at all. The final picture looks very much as if it had been one single wide photograph all along. Blending is usually very good to stitch two pieces of panorama pictures, but so is cutting. Let me show you an example where I stitched two parts of a panorama together, first with blending and then with a cut. Notice that I blended the images at a different horizontal point than where my algorithm ended up making the cut. Now, let me [Zoom](../../Skills/Software%20Development/Zoom.md) in to take a better look at that cut. Here we have the cut, which was calculated with the same algorithm we just saw. Notice that if the warping stage is good enough, the cutting stage will usually do a good job because of all the similar overlapping pixels. Now, here we have the same image without highlighting the cut. Go ahead and try to find an artifact created by the cut. The only one I can spot is the discontinuity
>
> **[3:10](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/cuts-in-panoramic-photography?u=76281980&t=190)** in one half of the roof. The [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) looks tidy, especially the sky.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Algorithms](../../Skills/Software%20Development/Algorithms.md) (1), [Zoom](../../Skills/Software%20Development/Zoom.md) (1), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **Analogies:** picture (6), for example (1)
> **CLI Commands:** make (1), find (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Stitch two pictures together](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-stitch-two-pictures-together?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-stitch-two-pictures-together?u=76281980&t=0)** - [Instructor] It's time for another challenge. This time, you'll stitch two pictures together. In Task 1, you must choose a pair of pictures to stitch together and display them. These two images must have the same height and must be suitable for stitching together. They may be two parts of the same picture or they may be two different pictures with similar shades and tones. Task 2 is to find a suitable overlap for these two pictures. This overlap can be as small as 10 pixels or as large as 100 pixels. It all depends on your picture's resolution. Then you must produce an appropriate seam and display it. You may do this in several cells. For Task 3, you have to stitch the images together. You may use three sections like I did. Finally, don't forget to display the resulting image. This should take you about 30 minutes. I'll show you my solution in the next video as usual.

> [!info]- Semantic Content
>
> **Analogies:** picture (2)
> **CLI Commands:** find (1)
> **Cross-References:** in the next (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Stitch two pictures together](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-stitch-two-pictures-together?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-stitch-two-pictures-together?u=76281980&t=0)** - [Instructor] So how did you do? For my solution, let me do something special this time. I'll give you a peek behind the scenes into the production of the video where I explained the stitching of the pictures with purple flowers and the tiger. This is the code I used to produce those images. For Task One, I used the files "Left.bmp" and "Right.bmp". These are the purple flowers and the tiger. Notice that they have the same height. For Task Two, I simply copied the steps to produce the seam. Notice in line 15, that I chose an overlap of 100. The [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the code finds the seam and marks it in white pixels. Here we have it. Let me scroll down, and let me stop here. The fact that a seam lingers at one end, right or left, shows that the algorithm had no choice and was cornered. So this part of the seam may not be very good. Notice that the flowers are getting in the way. Alright, let's move on. So that's it for the seam. Now for Task Three,
>
> **[1:31](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-stitch-two-pictures-together?u=76281980&t=91)** here we have the code for putting it all together, and here we have the final result I used for that video. By the way, the worst part of the seam where the right most flowers are doesn't look so bad to me.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 7. Morphological Modifications

[↑ Back to Table of Contents](#table-of-contents)

#### [Why modify objects?](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/why-modify-objects?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/why-modify-objects?u=76281980&t=0)** - [Instructor] For the last application example of [Image Processing](../../Skills/Artificial%20Intelligence%20(AI)/Image%20Processing.md), let's look at a series of operations, called "Morphological Transformations". These are widely used in [Computer Vision](../../Skills/Artificial%20Intelligence%20(AI)/Computer%20Vision.md), which is the application of computing to make sense of images and video. For example, software that recognizes handwritten text, faces or people. Morphological transformations are typically used in black and white images with "blobs", which are polygons that represent objects in a picture. These operations change the shape of blobs. So, with these operations, we can make blobs shrink and grow. To show you why we need to modify objects, let's look at a computer vision process. Suppose we have a robot that moves boxes in this warehouse. This robot must go from its starting position to a finished position where the target box is located. This is a messy warehouse, so the robot must be capable of moving around without bumping into boxes that may be lying on the floor. Looking at the size of the robot, the only path to get past the boxes at the left, is through the middle like this. Now, despite facing a narrow path, the robot can certainly fit through it and finally, it can reach the finish point. So, how can this robot come up with this path before starting to move?
>
> **[1:34](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/why-modify-objects?u=76281980&t=94)** Well, this is a special robot with a wireless connection to a camera fixed to the ceiling, looking straight down. That camera took this picture and sent it to the robot when it was at the starting point. With this picture and the start and finish point, the robot or some other computer can process this image and try to come up with a feasible plan of action. Let's look at a simple image processing algorithm to help this robot find its way. The first step is to create a black and white image with a set of blobs where the obstacles are. This is known as a "color mask". Notice that the obstacles produced white blobs. Now, this step isn't perfect and it's not expected to be perfect, since not all boxes will look the same and the lighting won't always be the same. An artifact that's getting in the way, are the many white dots scattered all around, but especially the ones in the path we know the robot must follow. For this reason, the next step is to get rid of these small dots. We can do this by shrinking every blob a little bit, just enough to make these spots disappear, but not the large obstacles. This operation is known as "erosion", and it means reducing the size of white blobs. As I erode the mask,
>
> **[3:07](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/why-modify-objects?u=76281980&t=187)** pay attention to the size of the larger objects and how the tiny spots disappear. Notice that only one artifact at the bottom-left survived the erosion. Now, we have two problems. First, we just eroded everything, so the obstacles are a little smaller. Second, remember the size of the robot. Path-planning [Algorithms](../../Skills/Software%20Development/Algorithms.md) usually don't keep track of the robot dimensions. Instead, they consider the robot to be at a single point like a particle. This is a problem, because the resulting path may go too close to an obstacle, finally, making the robot run over it. A usual solution is to make all obstacles grow about the radius of the robot, so that the calculated path is guaranteed to avoid obstacles completely. So, that's why in the next step, we perform the opposite of erosion, which is "dilation". Next, I'll dilate the mask many times, so that obstacles grow enough to produce a safe path. Look closely. After dilating the mask, we have a clean image, representing the grown obstacles in white and the floor in black. To find a path from start to finish, we simply feed this mask to a path planning function that implements an algorithm like "A*" or "Dijkstra'sa".
>
> **[4:43](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/why-modify-objects?u=76281980&t=283)** The function also needs the start and finish points and it will produce the path we need. Now, don't worry about the narrow parts of this path, or the near misses with the obstacles. Let's see how this path looks in the actual picture. As you can see, there's enough room for the robot to take the path safely.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Image Processing](../../Skills/Artificial%20Intelligence%20(AI)/Image%20Processing.md) (2), [Computer Vision](../../Skills/Artificial%20Intelligence%20(AI)/Computer%20Vision.md) (2), [Algorithms](../../Skills/Software%20Development/Algorithms.md) (1)
> **CLI Commands:** make (4), find (2)
> **Definitions:** is a  (3), known as (2)
> **Analogies:** picture (4), for example (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Erosion and dilation](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/erosion-and-dilation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/erosion-and-dilation?u=76281980&t=0)** - [Instructor] Erosion and dilation make white blobs shrink and grow respectively. Now, the usual algorithm for this is similar to the median filter. For erosion, a pixel is turned black if there are black pixels in its neighborhood area. For dilation, a pixel is turned white if there are white pixels in its neighborhood area. Let's get to know OpenCV's erode and dilate functions. First, let's open a black and white picture with some text. This image has white text over a black background. This is the usual case in [Computer Vision](../../Skills/Artificial%20Intelligence%20(AI)/Computer%20Vision.md). In line three, I have defined a three by three kernel with all ones, which I'm using in the erode function in line five. This function takes as arguments the image, the kernel and the number of erosions to perform repeatedly. Also, notice in nine seven that I'm saving this picture for later in img3. Let's see the results of one three by three erosion. The text at the top lost a lot of vital pixels while the text at the bottom is still readable. Notice that the term "erosion" refers to white blobs being eroded or diminished in size. Now, let's dilate this one with a five by five kernel. As you can see in line four,
>
> **[1:37](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/erosion-and-dilation?u=76281980&t=97)** the dilate function works with the same logic as erode. The lost pixels in the text at the top really damaged the shape. Now the text at the bottom looks better. However, look at the letter "R". These are not aesthetic operations. Now, let's see what happens if we erode this image back with a five by five kernel. It looks like we got back to the same state before dilating, right? Wrong. Let's compare this image with the one I saved some steps back. At the left, we have the eroded image and at the right, we have the result of dilating it and eroding it back with a five by five kernel. As you can see, these are not the same image. So dilation and erosion are not exactly inverse operations. Now, let's see a different picture of a few geometric shapes. All these basic shapes are easy to distinguish. Now, let's erode those shapes four times with a three by three kernel. Once again, notice that the shapes were not exactly preserved. The vertices in the triangle got pointier and the star was deformed. Now, let me dilate the image twice
>
> **[3:15](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/erosion-and-dilation?u=76281980&t=195)** with a five by five kernel. Notice that only the square maintained its shape. Now, let's repeat the same experiment we saw before, but this time, let's perform an extreme erosion with a five by five kernel, and let's do it eight times. Look, the arrow disappeared altogether. Now, let's try and get it back to the larger state. So let's dilate eight times with the same kernel. Let's see the results side by side with the version before eroding. There you have it. Only the square seems to have gone back to its original size. Also, we may argue that by eroding and then dilating, we got rid of the arrow. Sure, the shapes are deformed, but the arrow is certainly missing. This isn't necessarily bad. In fact, it's quite useful.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Computer Vision](../../Skills/Artificial%20Intelligence%20(AI)/Computer%20Vision.md) (1)
> **Analogies:** picture (3), similar to (1)
> **CLI Commands:** make (1)
> **Cross-References:** later in (1)
> **Definitions:** refers to (1)
> **Speakers:** - [instructor] (1)

#### [Open and close](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/open-and-close?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/open-and-close?u=76281980&t=0)** - [Instructor] "Open" and "Close" are special operations intended to get rid of small imperfections by performing erosions and dilations. Open erodes first, and then dilates. Close dilates first, and then erodes. Let's start with a picture that contains shapes and imperfections. As you can see, there are imperfections everywhere. Now, let me show you a closeup of two special shapes in there. I'm talking about those tiny swirl-like concentric groups of circles, one inside the blob at the left and the other one in the background at the right. Let's see what happens after an open operation with a 3x3 kernel. Remember, open means an erosion followed by a dilation. Let's see the original image and the results side by side. Notice that the swirl inside the circular blob became solid as if we opened the hole inside the circular blob. All tiny spots in the background disappeared, and all black spots in the shapes survived. The swirl in the background at the right was also eliminated. Now, let's see if we can get rid of the black spots in the shapes with a 3x3 close.
>
> **[1:36](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/open-and-close?u=76281980&t=96)** Yes, most of them are gone, only the larger ones survived. Now, let's start over, but working with a 5x5 kernel. Let me perform an open operation once to get rid of the tiny blobs. Nothing new, they're all gone. Now, let me perform a close to close the holes, so to speak. Yep, most holes are gone. Now, let me [Zoom](../../Skills/Software%20Development/Zoom.md) in to show you what happened to the swirl-like shapes. So this is the result of opening first and then closing. Notice that only the swirl-like shape inside the circle survived. Now, let me show you what happens if we close first and then open. Now, the swirl-like shape in the background survived. So now we know that when it comes to open and close operations, the order matters.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Zoom](../../Skills/Software%20Development/Zoom.md) (1)
> **Analogies:** picture (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Help a robot](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-help-a-robot?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-help-a-robot?u=76281980&t=0)** - [Instructor] Are you ready for your last challenge? Don't worry. This one is easy. In this challenge, you'll help the warehouse robot we saw earlier find its way to the box of interest. You'll have to run some cells before getting to your tasks. First, here we have the picture taken by the camera in the ceiling as requested by the robot. In the next cell, I'm performing a procedure to identify the blobs coming from the boxes. This procedure is described in open CVS tutorials website. The URL is in the comment if you'd like to see it. As you can see in the code, this procedure involves working with the HSV representation of the image to produce a mask. That mask is the black and white image with the blobs. This one, notice that it has a lot of lingering white spots that are not actual obstacles for the robot. In the next cell, we have a closeup of the narrow path we know the robot must cross in the end. Notice the noise dots scattered all over. Also, notice that the rightmost box appears as three separate blobs because the packaging tape wasn't detected as an obstacle.
>
> **[1:34](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/challenge-help-a-robot?u=76281980&t=94)** We definitely don't want the robot to try to go through that box, and this is where you come in. Task One is to get rid of the noise. In this cell, use morphological transformations to get rid of the white dots throughout the mask. After that, Task Two is to make the blobs grow. We want to do this for two reasons. First, we want to account for the size of the robot, as I explained earlier. And second, remember the box with the packaging tape gap. Well, we need those segments to become one single obstacle. This task is very simple. Just dilate the mask with a five by five kernel about 10 times, or with a three by three kernel about 20 times. Lastly, Task Three is to run all cells again, but skip Task Number One to see what happens. This should take you about 15 minutes. When you are done, watch the next video to see my results.

> [!info]- Semantic Content
>
> **Env Vars:** cvs (1), url (1), hsv (1)
> **Cross-References:** in the next (2), next video (1)
> **CLI Commands:** find (1), make (1)
> **Analogies:** picture (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Help a robot](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-help-a-robot?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-help-a-robot?u=76281980&t=0)** (bright upbeat music)
>
> **[0:05](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-help-a-robot?u=76281980&t=5)** - [Instructor] Let me show you my solution. Here's the mask with the white dots. Now, for Task One, I simply eroded the mask once with a tiny three by three kernel. You can see the code starting at line eight. Let's see it. As you can see, all the noise is gone. Also, notice that some of the shelves in the upper part of the picture are almost gone. Now, for Task Number Two, I followed my own advice and dilated the mask 10 times with a five by five kernel. Let's see my result. There you go. As long as there's a black path from the left portion to the right portion of the warehouse, this result is useful to the robot. Now, let me repeat the experiment, this time skipping Task Number One. That means leaving the tiny white dots before dilating. So first, let me restart the Jupyter kernel and clear outputs. Now, let's run some cells.
>
> **[1:35](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/solution-help-a-robot?u=76281980&t=95)** And now, I will skip Task Number One. Notice what happens when I run Task Number Two. What a mess! Now, the robot can't find a path, because of all the magnified noise.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Tools:** jupyter (1)
> **Analogies:** picture (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright upbeat music) (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-ai-image-processing-with-python/next-steps?u=76281980&t=0)** - [Eduardo] Congratulations on finishing the course. Now, let me suggest the next steps in your journey as there's still much to learn. First, get more experience in [Image Processing](../../Skills/Artificial%20Intelligence%20(AI)/Image%20Processing.md) platforms or libraries like OpenCV, Pillow, Skimage, and MATLAB. For OpenCV, I recommend the [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) learning course titled "OpenCV for [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) Developers". And in general, learn more about the applications of image processing, especially the ones we saw in the last chapters. That's [Computer Vision](../../Skills/Artificial%20Intelligence%20(AI)/Computer%20Vision.md) and computational photography. Thank you very much for taking this course. I hope you had fun taking it as much as I had creating it. I'm Eduardo Corpeño, till next time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Image Processing](../../Skills/Artificial%20Intelligence%20(AI)/Image%20Processing.md) (2), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1), [Computer Vision](../../Skills/Artificial%20Intelligence%20(AI)/Computer%20Vision.md) (1)
> **CLI Commands:** python (1)
> **Env Vars:** matlab (1)
> **Cross-References:** in the last (1)
> **Speakers:** - [eduardo] (1)


## Instructor

- [Eduardo Corpeño](../../Instructors/Artificial%20Intelligence%20(AI)/Eduardo%20Corpe%C3%B1o.md)

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/hands-on-ai-image-processing-with-python-4001236/codespaces)

## Skills Covered

- Image Processing
- Python (Programming Language)
- Artificial Intelligence (AI)
- Computer Vision

## Path Context

### In [Getting Started with AI and Machine Learning](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Getting%20Started%20with%20AI%20and%20Machine%20Learning.md)
← [Deep Learning Getting Started](Deep%20Learning%20Getting%20Started.md) | **4 of 7** | [Reinforcement Learning Foundations](Reinforcement%20Learning%20Foundations.md) →

## Appears In

- [Getting Started with AI and Machine Learning](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Getting%20Started%20with%20AI%20and%20Machine%20Learning.md)

## Related Courses

_Courses sharing skills:_

- [Advanced Python in Excel- Machine Learning](../Data%20Science/Advanced%20Python%20in%20Excel-%20Machine%20Learning.md) — Python (Programming Language), Artificial Intelligence (AI)
- [Advanced Python Projects- Build AI Applications](Advanced%20Python%20Projects-%20Build%20AI%20Applications.md) — Python (Programming Language), Artificial Intelligence (AI)
- [Machine Learning with Python- Association Rules](Machine%20Learning%20with%20Python-%20Association%20Rules.md) — Python (Programming Language), Artificial Intelligence (AI)
- [Machine Learning with Python- k-Means Clustering](Machine%20Learning%20with%20Python-%20k-Means%20Clustering.md) — Python (Programming Language), Artificial Intelligence (AI)
- [Machine Learning with Python- Logistic Regression](Machine%20Learning%20with%20Python-%20Logistic%20Regression.md) — Python (Programming Language), Artificial Intelligence (AI)

---

[↑ Back to top](#)