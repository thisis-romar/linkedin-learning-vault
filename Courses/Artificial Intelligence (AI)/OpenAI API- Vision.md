---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: openai-api-vision
url: "https://www.linkedin.com/learning/openai-api-vision"
duration_minutes: 30
duration: 30m
level: Intermediate
updated: 1/30/2024
learners: 4799
skills:
  - OpenAI API
  - OpenAI Products
  - Artificial Intelligence (AI)
  - Computer Vision
exercise_files: true
github: "https://github.com/LinkedInLearning/openai-api-vision-4562029"
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQG0Mu6DAHu0uw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1706311523814?e=2147483647&amp;v=beta&amp;t=RbGohYp2_VGkD8tBlx28uUOhPvnykmDj2ymyB1jTitw"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[Develop Your Skills with the OpenAI API](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Develop%20Your%20Skills%20with%20the%20OpenAI%20API.md)'
prev_courses:
  - '[OpenAI API- Image Generation with DALL-E](OpenAI%20API-%20Image%20Generation%20with%20DALL-E.md)'
next_courses:
  - '[OpenAI API- Speech](OpenAI%20API-%20Speech.md)'
path_nav: '[{"path":"Develop Your Skills with the OpenAI API","position":7,"total":10,"prev":"OpenAI API- Image Generation with DALL-E","next":"OpenAI API- Speech"}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - topic/software-development
  - skill/openai-api
  - skill/openai-products
  - skill/artificial-intelligence-ai
  - skill/computer-vision
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/OpenAI%20API-%20Vision.md)

![OpenAI API: Vision](https://media.licdn.com/dms/image/v2/D560DAQG0Mu6DAHu0uw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1706311523814?e=2147483647&amp;v=beta&amp;t=RbGohYp2_VGkD8tBlx28uUOhPvnykmDj2ymyB1jTitw)

# OpenAI API: Vision

> OpenAI’s vision API opens the door to a new generation of Apps. These APIs are also accessible, reducing the barrier to entry for building such apps. This hands-on course with instructor Ronnie Sheer shows you how to use the vision API to build an application that sees. Ronnie covers setting up the API, the basic functionality, working with prompts, and building out a project. Join Ronnie in this 

> [LinkedIn Learning](https://www.linkedin.com/learning/openai-api-vision) | 30m | Intermediate | 5K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (4 videos)
  - [Computer vision with OpenAI's API](#computer-vision-with-openais-api)
  - [Vision API limitations](#vision-api-limitations)
  - [Using the exercise files](#using-the-exercise-files)
  - [Responsible usage of AI](#responsible-usage-of-ai)
- [**1. Vision API Essentials**](#1-vision-api-essentials) (5 videos)
  - [Setting up the API](#setting-up-the-api)
  - [Vision API basics](#vision-api-basics)
  - [Vision API prompts](#vision-api-prompts)
  - [Challenge: Ecommerce description](#challenge-ecommerce-description)
  - [Solution: Ecommerce description](#solution-ecommerce-description)
- [**2. App Developement with Vision API**](#2-app-developement-with-vision-api) (6 videos)
  - [What we'll build](#what-well-build)
  - [Project structure](#project-structure)
  - [Vision code for our project](#vision-code-for-our-project)
  - [Embedding vision code in our web app](#embedding-vision-code-in-our-web-app)
  - [Challenge: User input items](#challenge-user-input-items)
  - [Solution: User input items](#solution-user-input-items)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Computer vision with OpenAI's API](https://www.linkedin.com/learning/openai-api-vision/computer-vision-with-openai-s-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-vision/computer-vision-with-openai-s-api?u=76281980&t=0)** - Use some of the most cutting-edge AI to build applications that see, that's what the [OpenAI API](../../Skills/Artificial%20Intelligence%20(AI)/OpenAI%20API.md) enables you to do, and that's just what we'll learn in this course. We'll start by setting up an environment for development. Then we'll test the core functionality of this API. And finally, we'll build an application that leverages this revolutionary technology. I'm Ronnie Sheer. I'm a software engineer with over a decade of experience working for companies that lean heavily on [artificial intelligence](../../Topics/Artificial%20Intelligence%20(AI).md). If you want to leverage some of the most cutting-edge [Computer Vision](../../Skills/Artificial%20Intelligence%20(AI)/Computer%20Vision.md) out there in your software, this is the course for you, so let's get to it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [OpenAI API](../../Skills/Artificial%20Intelligence%20(AI)/OpenAI%20API.md) (1), [Artificial intelligence](../../Topics/Artificial%20Intelligence%20(AI).md) (1), [Computer Vision](../../Skills/Artificial%20Intelligence%20(AI)/Computer%20Vision.md) (1)
> **Env Vars:** api (2)
> **Speakers:** - use (1)

#### [Vision API limitations](https://www.linkedin.com/learning/openai-api-vision/vision-api-limitations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-vision/vision-api-limitations?u=76281980&t=0)** - [Presenter] OpenAI's API is extremely versatile, but it does have some limitations. We're going to look at some of these, but if you plan to use this API in a production environment or at scale, you should go to OpenAI's documentation and thoroughly review the API's guidelines and limitations. This API is not suitable for medical images and should not be used in medical devices or applications. Solving CAPTCHAs has also been disabled in this model, and it should not be used in order to solve CAPTCHAs. Now, this model may struggle with things like spatial reasoning, like understanding a chess board or trying to distinguish the distances in maps. There are also more accurate models out there. Counting elements precisely may also be difficult for this model. Once again, I strongly encourage you to head over to OpenAI's documentation to look thoroughly at these limitations and usage policy.

> [!info]- Semantic Content
>
> **Env Vars:** api (4)
> **UI Navigation:** go to (1)
> **Speakers:** - [presenter] (1)

#### [Using the exercise files](https://www.linkedin.com/learning/openai-api-vision/using-the-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-vision/using-the-exercise-files?u=76281980&t=0)** - [Narrator] This course's exercise files are available for download in this [GitHub](../../Skills/Software%20Development/GitHub.md) repository. Once downloaded, you'll work off of the main branch and you'll notice that we have folders for each chapter. Either a folder with a chapter's name, or one folder with the begin state and another with the end state of the chapter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GitHub](../../Skills/Software%20Development/GitHub.md) (1)
> **Tools:** github (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [narrator] (1)

#### [Responsible usage of AI](https://www.linkedin.com/learning/openai-api-vision/responsible-usage-of-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-vision/responsible-usage-of-ai?u=76281980&t=0)** - [Instructor] We're almost ready to start working, but we have to talk about responsible usage. OpenAI outlines very clearly its usage policies, and you should check them out. You should also use common sense. Never use this API to deceive people, or for illegal activities. As the saying goes, with great power comes great responsibility, and with that in mind, let's get to work.

> [!info]- Semantic Content
>
> **Env Vars:** api (1)
> **Speakers:** - [instructor] (1)


### 1. Vision API Essentials

[↑ Back to Table of Contents](#table-of-contents)

#### [Setting up the API](https://www.linkedin.com/learning/openai-api-vision/setting-up-the-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-vision/setting-up-the-api?u=76281980&t=0)** - [Instructor] In order to leverage OpenAI's API for vision tasks, we need to do some setting up. We'll have to install some libraries, create an API key and we don't want to include our API key in source code. It's important to leverage an environment variable or some sort of API key management system. So let's get started by installing these libraries. I'm going to head to my terminal, which is here at the bottom of my code editor. And I'll start by installing OpenAI. So I'll type in python3-m pip install openai.
>
> **[0:45](https://www.linkedin.com/learning/openai-api-vision/setting-up-the-api?u=76281980&t=45)** Now if you're using a virtual environment or your code is containerized, it's a similar installation of OpenAI and you'll see that it's already installed. I'll clear my terminal. Now I'll type in python3-m pip install flask.
>
> **[1:06](https://www.linkedin.com/learning/openai-api-vision/setting-up-the-api?u=76281980&t=66)** And this is going to help us in a project in a later chapter. Next thing I'll want to do is head over to OpenAI and you'll need an OpenAI account to use this API. And here in the menu there is API keys and you'll want to open it and you'll create a secret key, which you're going to use later on. Now I'll head to my terminal and I'll want to export this key. So I'll type in export OPENAI_API_KEY
>
> **[1:49](https://www.linkedin.com/learning/openai-api-vision/setting-up-the-api?u=76281980&t=109)** equals, and I'll call this secret_key. Of course, you'll want to use your actual key and export it. And this is valid for one session of a terminal. So if I close this terminal and open a new one, I'll want to export again. If for some reason the session ended, it's important to export this key one more time. And if you use this specific name for the secret key, the library knows to look for the secret key there. If you have different conventions for naming environment variables, that's fine. You'll just have to specify it in the code. So here I'll clear this and what I'll do now is in my exercise files, I'll navigate to 01_01. So cd 01_01, clear my terminal and type in python3 test_vision.py. I've included an image as well as a very minimal amount of code to make the API work. So let's go ahead and run this. And the image shown is of a black mug with a [Graphic Design](../../Skills/Data%20Science/Graphic%20Design.md) printed on its surface. And if you look at 01_01, you'll see that this is correct. This is description of this image. Great. So now that we've set up, we can start looking at how this API works.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Graphic Design](../../Skills/Data%20Science/Graphic%20Design.md) (1)
> **Env Vars:** api (8), openai_api_key (1)
> **CLI Commands:** python3 (3), pip (2), cd (1), make (1)
> **Tools:** terminal (6)
> **Prerequisites:** install (3), you'll need (1), set up (1)
> **Code Identifiers:** secret_key (1), test_vision (1)
> **Exercise Files:** source code (1), exercise files (1)
> **File Paths:** test_vision.py (1)

#### [Vision API basics](https://www.linkedin.com/learning/openai-api-vision/vision-api-basics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-vision/vision-api-basics?u=76281980&t=0)** - [Instructor] Before we start using the [OpenAI API](../../Skills/Artificial%20Intelligence%20(AI)/OpenAI%20API.md) for image related tasks, let's see how this part of this API works. So here in my exercise files, I'll navigate to 01_02_begin. And in this folder there is a image of a mug with a robot and some text printed on it, as well as this [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) file called test_vision.py. And if I open test_vision.py, you'll notice that at the top, after some imports, I instantiate an OpenAI Client. Next I define an image_URL, and I also open this adjacent file and base64 encode it. When it comes to using this API, it's going to be very similar to text-to-text tasks. But the difference is instead of giving it just text, we can give it either an image or an image as well as a text. So here I create this completion, and in the content I have a content of type image_URL where I can either pass in this string with the base64 encoded image interpolated into it. I can also pass in the image_URL. And since the image_URL leads to the same image, these are going to function the same way.
>
> **[1:34](https://www.linkedin.com/learning/openai-api-vision/vision-api-basics?u=76281980&t=94)** Now if I just pass in this image, I will usually get a sort of general verbal description of what's in this image. However, if we want something more specific, we can use an image accompanied by a prompt. And for that I'm going to add another dictionary to the content, and I'll add a comma after it. And in this dictionary, I'll say that the type is text. Now I'll say that the text, and this is where the prompt comes in, is what colors are used in this mug?
>
> **[2:19](https://www.linkedin.com/learning/openai-api-vision/vision-api-basics?u=76281980&t=139)** Now when I send this image with this prompt, I should get a response that answers my question. So let's test it out by navigating to 01_02_begin. I'll clear my terminal and I'll type in Python3 test_vision.py. And before you hit enter, just make sure that you've followed all the steps in the setup instructions. The mug is primarily black and features a [Graphic Design](../../Skills/Data%20Science/Graphic%20Design.md) with a variety of colors. So you see that it tells me that there is also blue, yellow, gray, and green. So let's check it out. Yep, I see that there's also red here. And you can be very specific about what it is you want to know, and what the output should be like as far as format goes and language style.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [OpenAI API](../../Skills/Artificial%20Intelligence%20(AI)/OpenAI%20API.md) (1), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1), [Graphic Design](../../Skills/Data%20Science/Graphic%20Design.md) (1)
> **File Paths:** test_vision.py (3)
> **CLI Commands:** python (1), python3 (1), make (1)
> **Code Identifiers:** test_vision (3)
> **Env Vars:** api (3)
> **Prerequisites:** before we start (1), setup (1)
> **Tools:** terminal (1)
> **UI Navigation:** navigate to (1)

#### [Vision API prompts](https://www.linkedin.com/learning/openai-api-vision/vision-api-prompts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-vision/vision-api-prompts?u=76281980&t=0)** - [Instructor] We've looked at how we can get more out of this API by sending our images along with a prompt. Now [Prompt Engineering](../../Skills/Artificial%20Intelligence%20(AI)/Prompt%20Engineering.md) is quite an elaborate craft, and I encourage you to check out other titles in the library that deal with prompt engineering, specifically, my course, "[Introduction To Prompt Engineering For Generative Ai](Introduction%20To%20Prompt%20Engineering%20For%20Generative%20Ai.md)." Now a few good best practices to keep in mind are to use specific instructions, to use concise language, and to specify output format if needed. Let's take a look at how that's done. So I'm going to head over to my exercise files, to 01_03_begin. And I have that prompt that I inserted earlier, but what I'm going to do is be a little bit more specific. I'll say I need to know if this matches my mug-set. I also want the output to be in a list that's compatible with [JSON](../../Skills/Web%20Development/JSON.md), so output should be JSON list. You can even give an example if necessary. So I can replace these right here so that I may create a JSON compatible list, and I can say color1, color2.
>
> **[1:39](https://www.linkedin.com/learning/openai-api-vision/vision-api-prompts?u=76281980&t=99)** Great, to run this, I'm going to navigate to 01_03_begin/. Clear my terminal and type in python3 test_vision.py. And, great, I have some JSON here that's Black and Lime Green. Now you'll notice that it gave me colors that are more specific in order to color match, and that's because my prompt was more specific. Now this is something that I can receive in an application and perhaps strip this part right here from the response so that I can use this as JSON.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JSON](../../Skills/Web%20Development/JSON.md) (5), [Prompt Engineering](../../Skills/Artificial%20Intelligence%20(AI)/Prompt%20Engineering.md) (3), [Generative AI](../../Skills/Artificial%20Intelligence%20(AI)/Generative%20AI.md) (1)
> **Env Vars:** json (5), api (1)
> **File Paths:** test_vision.py (1)
> **CLI Commands:** python3 (1)
> **Code Identifiers:** test_vision (1)
> **Tools:** terminal (1)
> **UI Navigation:** navigate to (1)
> **Exercise Files:** exercise files (1)

#### [Challenge: Ecommerce description](https://www.linkedin.com/learning/openai-api-vision/challenge-ecommerce-description?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-vision/challenge-ecommerce-description?u=76281980&t=0)** - [Instructor] Are you ready for a little challenge? In this one, we're going to create descriptions for an [E-Commerce](../../Skills/Web%20Development/E-Commerce.md) website, and we'll return them in a [JSON](../../Skills/Web%20Development/JSON.md) compatible list. Now, the image of a mug that we looked at before comes from this imaginary e-commerce website called Binaryville, and it has various aprons and baseball hats, as well as T-shirts and mugs. We're just going to create descriptions for all these mugs. So I've taken all four image URLs for these mugs, and if we navigate to our exercise files to 0104 eCommerce dot py, you'll see that I've added them to the content, and I've added all four here. So we're going to have four images accompanied by one prompt. The prompt is defined right here, and it's ready for you to create. Now what I want you to do is experiment a little bit to see how you can get very good marketing material out of this. So we want to think about the output format and describe it, but we can also use various [Prompt Engineering](../../Skills/Artificial%20Intelligence%20(AI)/Prompt%20Engineering.md) methods. For example, you can give this model a role to work with. You can tell it that it's some sort of expert and that you need something from it in order
>
> **[1:34](https://www.linkedin.com/learning/openai-api-vision/challenge-ecommerce-description?u=76281980&t=94)** to produce different results. So take anywhere from 15 to 25 minutes to complete this challenge, and I'll see you in the next one.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [E-Commerce](../../Skills/Web%20Development/E-Commerce.md) (2), [JSON](../../Skills/Web%20Development/JSON.md) (1), [Prompt Engineering](../../Skills/Artificial%20Intelligence%20(AI)/Prompt%20Engineering.md) (1)
> **Code Identifiers:** ecommerce (1)
> **Env Vars:** json (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** navigate to (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Ecommerce description](https://www.linkedin.com/learning/openai-api-vision/solution-ecommerce-description?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-vision/solution-ecommerce-description?u=76281980&t=0)** - [Instructor] So the goal of this challenge was to help our friends in Binaryville by creating good descriptions for these mugs. And there are various ways of doing this. I'll show you my approach. So let's head over to 01_05 in our exercise files and open up the file e_commerce.py. And here's my prompt. You are an [E-Commerce](../../Skills/Web%20Development/E-Commerce.md) marketing expert. Here are some mugs. Create short, appealing descriptions for them for our e-commerce website. Output should only contain a [JSON](../../Skills/Web%20Development/JSON.md) list of strings containing descriptions. So I'm going to navigate to 01_05, clear my terminal, and type in python3 e_commerce.py.
>
> **[1:00](https://www.linkedin.com/learning/openai-api-vision/solution-ecommerce-description?u=76281980&t=60)** So just like that, I have my descriptions, and they're all separated by commas in an organized list that is JSON compatible.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [E-Commerce](../../Skills/Web%20Development/E-Commerce.md) (2), [JSON](../../Skills/Web%20Development/JSON.md) (2)
> **File Paths:** e_commerce.py (2)
> **Code Identifiers:** e_commerce (2)
> **Env Vars:** json (2)
> **CLI Commands:** python3 (1)
> **Tools:** terminal (1)
> **UI Navigation:** navigate to (1)
> **Exercise Files:** exercise files (1)


### 2. App Developement with Vision API

[↑ Back to Table of Contents](#table-of-contents)

#### [What we'll build](https://www.linkedin.com/learning/openai-api-vision/what-we-ll-build?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-vision/what-we-ll-build?u=76281980&t=0)** - [Instructor] The app that we're going to build is Grocery Check and the way it works is it takes a photo. So I'll add this photo that I've included in the exercise files of a partially-filled refrigerator. You can add your own and it takes a list of what's supposed to be in this refrigerator. So let's go ahead and add soy milk, which is already there and I'll add it and also I'll add something that's not here, so chocolate pudding and I'll also add red bell peppers. Now out of these three, chocolate pudding is not visibly here, so I'll go ahead and hit upload and the app is going to make a shopping list for me with whatever is missing. Yep, chocolate pudding. This project will help us understand how to take this API and use it in a user-facing application.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Env Vars:** api (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### [Project structure](https://www.linkedin.com/learning/openai-api-vision/project-structure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-vision/project-structure?u=76281980&t=0)** - [Instructor] Let's take a look at the structure of the web application we'll be building. So I'm going to open my exercise files and navigate to 02_02_begin. And here, you'll see there's a templates directory with an [HTML](../../Skills/Web%20Development/HTML.md) template as well as an app.py file, there is a refrigerator.png, that's a photo we can work with while we develop, so that we don't have to upload one every time, and there is a vision.py file. So let's start with this app.py. And at the top here, you'll see some imports, and right after that, you'll see that I instantiate a Flask application as well as an OpenAI client. Now, this Flask application app allows me to define routes. So here, you'll see that I use @app.route, this is a decorator, and this turns this index function into a route in my web application. So all this route does is returns the template, index.html. After that, I have another route for vision. The first thing I do is verify that there is a file. Then if there is one, I have this placeholder for prompt, some logic, and for now, there's a placeholder that just returns a list that says item1, item2, and item3. This is a placeholder, it's only here for now until we actually implement the logic that checks what's missing from the image.
>
> **[1:36](https://www.linkedin.com/learning/openai-api-vision/project-structure?u=76281980&t=96)** Now, if you look at index.html, you'll see that I didn't use any frameworks. I wanted to keep it pure HTML, [JavaScript](../../Skills/Software%20Development/JavaScript.md), and CSS, just in order to keep things in scope for this course. And it's all in one file, it's the entire front end of the application, and you can check this code out, we're not going to play with it too much. And what it does is it sends over the image, and later on, will also send over some user input to be used in our prompt. Now, when we develop the AI logic, sometimes it's good to work outside of the application code and kind of work on this isolated part of the application. And for that, we have vision.py. vision.py is very similar to the test file that we worked with before, except it has this refrigerator image that's relevant to our use case. So now that we have a sense of how this application is structured, we are ready to start working on the core AI logic for it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (4), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1)
> **File Paths:** vision.py (3), app.py (2), index.html (2)
> **Definitions:** is a  (5)
> **Env Vars:** html (2), css (1)
> **Exercise Files:** template (2), exercise files (1)
> **UI Navigation:** navigate to (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [Vision code for our project](https://www.linkedin.com/learning/openai-api-vision/vision-code-for-our-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-vision/vision-code-for-our-project?u=76281980&t=0)** - [Instructor] Let's get to work on the core functionality of our application, specifically, the [Prompt Engineering](../../Skills/Artificial%20Intelligence%20(AI)/Prompt%20Engineering.md) part of it. Now I'm going to go ahead and navigate to our exercise files, to 02_03_begin, and here you'll see that I've created this vision.py file. It really pays off sometimes to isolate the core AI logic into a different file or a Jupyter Notebook. This allows you to work on things like prompt engineering iteratively and see what works. Now here you'll see, at the top, some imports. Then I open this image of a refrigerator and Base64 encode it. This is the image right here. So you'll see that specifically I have soy milk here, and I have apples, some red bell peppers. Not much, and I'm going to head back to vision.py, and you'll see here there's a placeholder for our prompt. And, after that, you'll see that I passed the prompt along with the image to the OpenAI client. Now I'm going to start by asking which of the following grocery items are missing? Now, later on, the user is going to give us our list, but for now we are just going to hard code it into the prompt. So I'll say soy milk, which I know is there, I'll say chocolate pudding,
>
> **[1:35](https://www.linkedin.com/learning/openai-api-vision/vision-code-for-our-project?u=76281980&t=95)** which I know is not there. And I'll say apples, which I know we have apples there, so it should tell me that chocolate pudding is missing. I'll save this. I'll navigate to 02_03_begin/. Clear my terminal, and I'll type in python3 vision.py. And you want to make sure that this terminal session has an API key and is all set up for work. Now this may take a moment. Yep, and it's telling me, "From the image you provided, it looks like there are both soy milk and apples in the refrigerator." The soy milk cartoon, it's telling me a lot about that. And then, it's giving me more information. And then, it's telling me, "There does not appear to be any chocolate pudding in view." Now this is great, but this is going to be hard to use in an application, and this is why it's great to work iteratively. So we're going to ask it for a specific response. And we'll say that the response should be a list of items that are missing. Now it's also a good idea to give examples. So I'm going to say missing item1,
>
> **[3:12](https://www.linkedin.com/learning/openai-api-vision/vision-code-for-our-project?u=76281980&t=192)** followed by missing item2, and then missing item3. And I'll go ahead and save this. I'll clear my terminal and type in python3 vision.py. And chocolate pudding, and this is much more useful for our application code to receive. And it gave me a list with chocolate pudding, which my application can actually use. Now always keep in mind validation of this output when you're incorporating this into an application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Prompt Engineering](../../Skills/Artificial%20Intelligence%20(AI)/Prompt%20Engineering.md) (2)
> **File Paths:** vision.py (4)
> **Tools:** terminal (3), jupyter (1)
> **CLI Commands:** python3 (2), make (1)
> **UI Navigation:** navigate to (2)
> **Env Vars:** api (1)
> **Exercise Files:** exercise files (1)
> **Warnings:** keep in mind (1)

#### [Embedding vision code in our web app](https://www.linkedin.com/learning/openai-api-vision/embedding-vision-code-in-our-web-app?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-vision/embedding-vision-code-in-our-web-app?u=76281980&t=0)** - [Instructor] We have our application set up, as well as its core logic, and now it's time to bring everything together. So let's navigate to 02_04_begin in our exercise files and open up app.py. And notice I've added some code to vision.py to handle a case where the user doesn't send a file with the request, as well as a case where the user doesn't send a list of items. I also grabbed this file from the requests files and I've left a placeholder for our prompt. This is where we start bringing logic from vision.py. So we'll head over to vision.py, we'll select our prompt, we'll copy it, and head back to app.py. Try to leave this F right here before the string, that's going to be helpful later on. And I've pasted my prompt. Next, we have our Base64 encoded image, which has the same name as it did vision.py, which means, once again, we can bring this logic over. So here I am in vision.py, and I'll go ahead and copy this section right here, starting with the response right down to before the try-except clause. So we don't want this try and except.
>
> **[1:37](https://www.linkedin.com/learning/openai-api-vision/embedding-vision-code-in-our-web-app?u=76281980&t=97)** And before I paste this, I'm going to delete the indentation. I'll paste, and then I'll bring the indentation back, so this is helpful when you're pasting [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) code. So I'll go ahead and select all of this, and we have to make sure that this is indented correctly in this code block with the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the function. And, finally, we need to return something. So we'll go back to vision.py one last time. And instead of printing this response.choices [0].message.content, we'll copy it, and our route will return it. Notice I have an error right here. This is because PROMPT was all cap, and now it's lowercase. The reason for this is all caps is a naming convention for a constant, and in vision.py it was a constant. And just like that, we have all our logic. Now, if this doesn't work, pay attention to your indentation, look over the logic, make sure that you've sent the prompt, as well as the Base64 encoded image, and that you're returning this response. I'll go ahead and save. I'll navigate to 02_04_begin/. Clear my terminal, run python3 app.py.
>
> **[3:12](https://www.linkedin.com/learning/openai-api-vision/embedding-vision-code-in-our-web-app?u=76281980&t=192)** In my browser, I'll visit localhost 5000. Here's our application. And it works, but it still uses the hard-coded prompt. So if I type in rice, and add it, and I upload my photo, I still get chocolate pudding in the response, which makes sense because that's in our prompt. And that's what we'll look at next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **File Paths:** vision.py (7), app.py (3)
> **CLI Commands:** make (2), python (1), python3 (1)
> **UI Navigation:** navigate to (2)
> **Env Vars:** prompt (1)
> **Cross-References:** go back to (1)
> **Tools:** terminal (1)
> **Exercise Files:** exercise files (1)

#### [Challenge: User input items](https://www.linkedin.com/learning/openai-api-vision/challenge-user-input-items?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-vision/challenge-user-input-items?u=76281980&t=0)** (bright upbeat music)
>
> **[0:05](https://www.linkedin.com/learning/openai-api-vision/challenge-user-input-items?u=76281980&t=5)** - [Instructor] Here is our challenge for this chapter. I want you to add the user's input into our prompt. If you look at our application right now, you'll notice it sort of ignores the user's input and instead it's using the list that's hard-coded into our prompt. So to fix that, let's navigate to 02_05>app.py, and you'll see our prompt right here and you'll see the list of items right here. It's a standard [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) list. Now remember that you can use this F string in order to interpret. So if I use curly brackets anywhere in the string, I can just add a variable as long as it's in this scope. So now we need to set up the items so that they can be inserted into this prompt and then replace this hard-coded list with the list that our user gives us. So for this challenge, I want you to take about 15 to 25 minutes and I'll see you in the next one.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **File Paths:** app.py (1)
> **CLI Commands:** python (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** navigate to (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright upbeat music) (1)

#### [Solution: User input items](https://www.linkedin.com/learning/openai-api-vision/solution-user-input-items?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-vision/solution-user-input-items?u=76281980&t=0)** - [Instructor] The goal of this challenge was to add user input to our prompt. Now for the scope of this course, we're looking at a basic implementation of this. However, if you plan to do this at a production environment or at scale, it's a good idea to both consider input validation and take a look at some of the API best practices. These can be found at the OpenAI documentation at platform.[openai.com/docs](https://openai.com/docs), and this is a good guideline for application safety, specifically for applications that use [large language models](../../Skills/Artificial%20Intelligence%20(AI)/Large%20Language%20Models%20(LLM).md). Now, with that said, let's check out our solution. So I'm going to navigate over to 02 06 to app.py, and I have my prompt here. And right above that I'm going to say that my item string, and I'll say that it's a string with a comma and a space .join, and I'll have the item list in there. So basically, I'll connect all these items with a comma and a space, and instead of having these hardcoded items right here, I'll delete them and I'll have open and closing curly brackets, and within that I'm going to say item string. If this doesn't work, make sure that you're using
>
> **[1:36](https://www.linkedin.com/learning/openai-api-vision/solution-user-input-items?u=76281980&t=96)** this F string for interpolation. And I think that should do the trick. So I'll navigate to 02 06, clear my terminal. So I'll say Python3 app.py. I'll head over to local host 5000 and refresh. I'll upload my photo and I'll just add a grocery item, so chocolate is not here. And I'll also say apples, because I know that's here and I'll go ahead and upload. And yep, it told me that chocolate is not here. So hopefully you had some fun completing this challenge, and now you have a sense of how to use this API in the context of an application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Large language models](../../Skills/Artificial%20Intelligence%20(AI)/Large%20Language%20Models%20(LLM).md) (1)
> **File Paths:** app.py (2)
> **CLI Commands:** make (1), python3 (1)
> **Env Vars:** api (2)
> **URLs:** [openai.com](https://openai.com) (1)
> **Tools:** terminal (1)
> **UI Navigation:** navigate to (1)
> **Definitions:** is a  (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/openai-api-vision/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-vision/next-steps?u=76281980&t=0)** - [Ronnie] This is Ronnie Sheer. I wanted to thank you for joining me for this course to learn how to use this API, which is powerful and offers so many possibilities. Now, to keep the learning going, there are a few courses in the library I can recommend you check out. If you want to learn more about this API, there is my course, [OpenAI API](../../Skills/Artificial%20Intelligence%20(AI)/OpenAI%20API.md): Speech, where we look at the text-to-speech and speech-to-text capabilities of the OpenAI API. Then there's my course, [Introduction To Prompt Engineering For Generative Ai](Introduction%20To%20Prompt%20Engineering%20For%20Generative%20Ai.md), where we look at different AI tools and [Prompt Engineering](../../Skills/Artificial%20Intelligence%20(AI)/Prompt%20Engineering.md) techniques. Finally, if you want to dive deeper into machine learning and AI with [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md), there is Fred Nwanganga's course, [Machine Learning with Python- Foundations](Machine%20Learning%20with%20Python-%20Foundations.md). Thank you again, and always be learning.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [OpenAI API](../../Skills/Artificial%20Intelligence%20(AI)/OpenAI%20API.md) (2), [Prompt Engineering](../../Skills/Artificial%20Intelligence%20(AI)/Prompt%20Engineering.md) (2), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2), [Generative AI](../../Skills/Artificial%20Intelligence%20(AI)/Generative%20AI.md) (1)
> **Env Vars:** api (4)
> **CLI Commands:** python (2)
> **Speakers:** - [ronnie] (1)


## Instructor

- [Ronnie Sheer](../../Instructors/Artificial%20Intelligence%20(AI)/Ronnie%20Sheer.md)

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/openai-api-vision-4562029)

## Skills Covered

- OpenAI API
- OpenAI Products
- Artificial Intelligence (AI)
- Computer Vision

## Path Context

### In [Develop Your Skills with the OpenAI API](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Develop%20Your%20Skills%20with%20the%20OpenAI%20API.md)
← [OpenAI API- Image Generation with DALL-E](OpenAI%20API-%20Image%20Generation%20with%20DALL-E.md) | **7 of 10** | [OpenAI API- Speech](OpenAI%20API-%20Speech.md) →

## Appears In

- [Develop Your Skills with the OpenAI API](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Develop%20Your%20Skills%20with%20the%20OpenAI%20API.md)

## Related Courses

_Courses sharing skills:_

- [OpenAI API- Code Interpreter and Advanced Data Analysis](OpenAI%20API-%20Code%20Interpreter%20and%20Advanced%20Data%20Analysis.md) — Artificial Intelligence (AI), OpenAI Products, OpenAI API
- [OpenAI API- Moderation](OpenAI%20API-%20Moderation.md) — Artificial Intelligence (AI), OpenAI Products, OpenAI API
- [OpenAI API- Speech](OpenAI%20API-%20Speech.md) — Artificial Intelligence (AI), OpenAI Products, OpenAI API
- [OpenAI API- Image Generation with DALL-E](OpenAI%20API-%20Image%20Generation%20with%20DALL-E.md) — Artificial Intelligence (AI), OpenAI Products, OpenAI API
- [OpenAI API- Fine-Tuning](OpenAI%20API-%20Fine-Tuning.md) — Artificial Intelligence (AI), OpenAI Products, OpenAI API

---

[↑ Back to top](#)