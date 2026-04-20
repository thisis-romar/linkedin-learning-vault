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
  - Develop Your Skills with the OpenAI API
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
created: 2026-04-20
---

![OpenAI API: Vision](https://media.licdn.com/dms/image/v2/D560DAQG0Mu6DAHu0uw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1706311523814?e=2147483647&amp;v=beta&amp;t=RbGohYp2_VGkD8tBlx28uUOhPvnykmDj2ymyB1jTitw)

# OpenAI API: Vision

> OpenAI’s vision API opens the door to a new generation of Apps. These APIs are also accessible, reducing the barrier to entry for building such apps. This hands-on course with instructor Ronnie Sheer shows you how to use the vision API to build an application that sees. Ronnie covers setting up the API, the basic functionality, working with prompts, and building out a project. Join Ronnie in this 

> [LinkedIn Learning](https://www.linkedin.com/learning/openai-api-vision) | 30m | Intermediate | 5K learners
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Ronnie Sheer]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/openai-api-vision-4562029)

## Skills Covered

- OpenAI API
- OpenAI Products
- Artificial Intelligence (AI)
- Computer Vision

## Table of Contents

### Introduction

#### Computer vision with OpenAI's API
> [LinkedIn Learning](https://www.linkedin.com/learning/openai-api-vision/computer-vision-with-openai-s-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-vision/computer-vision-with-openai-s-api?u=76281980&t=0)** - Use some of the most cutting-edge AI to build applications that see, that's what the OpenAI API enables you to do, and that's just what we'll learn in this course.
>
> **[0:11](https://www.linkedin.com/learning/openai-api-vision/computer-vision-with-openai-s-api?u=76281980&t=11)** We'll start by setting up an environment for development.
>
> **[0:15](https://www.linkedin.com/learning/openai-api-vision/computer-vision-with-openai-s-api?u=76281980&t=15)** Then we'll test the core functionality of this API.
>
> **[0:19](https://www.linkedin.com/learning/openai-api-vision/computer-vision-with-openai-s-api?u=76281980&t=19)** And finally, we'll build an application that leverages this revolutionary technology.
>
> **[0:24](https://www.linkedin.com/learning/openai-api-vision/computer-vision-with-openai-s-api?u=76281980&t=24)** I'm Ronnie Sheer.
>
> **[0:25](https://www.linkedin.com/learning/openai-api-vision/computer-vision-with-openai-s-api?u=76281980&t=25)** I'm a software engineer with over a decade of experience working for companies that lean heavily on artificial intelligence.
>
> **[0:33](https://www.linkedin.com/learning/openai-api-vision/computer-vision-with-openai-s-api?u=76281980&t=33)** If you want to leverage some of the most cutting-edge computer vision out there in your software, this is the course for you, so let's get to it.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (1), let (1)
> **Env Vars:** api (2)
> **Speakers:** - use (1)

#### Vision API limitations
> [LinkedIn Learning](https://www.linkedin.com/learning/openai-api-vision/vision-api-limitations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-vision/vision-api-limitations?u=76281980&t=0)** - [Presenter] OpenAI's API is extremely versatile, but it does have some limitations.
>
> **[0:05](https://www.linkedin.com/learning/openai-api-vision/vision-api-limitations?u=76281980&t=5)** We're going to look at some of these, but if you plan to use this API in a production environment or at scale, you should go to OpenAI's documentation and thoroughly review the API's guidelines and limitations.
>
> **[0:20](https://www.linkedin.com/learning/openai-api-vision/vision-api-limitations?u=76281980&t=20)** This API is not suitable for medical images and should not be used in medical devices or applications.
>
> **[0:28](https://www.linkedin.com/learning/openai-api-vision/vision-api-limitations?u=76281980&t=28)** Solving CAPTCHAs has also been disabled in this model, and it should not be used in order to solve CAPTCHAs.
>
> **[0:36](https://www.linkedin.com/learning/openai-api-vision/vision-api-limitations?u=76281980&t=36)** Now, this model may struggle with things like spatial reasoning, like understanding a chess board or trying to distinguish the distances in maps.
>
> **[0:47](https://www.linkedin.com/learning/openai-api-vision/vision-api-limitations?u=76281980&t=47)** There are also more accurate models out there.
>
> **[0:50](https://www.linkedin.com/learning/openai-api-vision/vision-api-limitations?u=76281980&t=50)** Counting elements precisely may also be difficult for this model.
>
> **[0:55](https://www.linkedin.com/learning/openai-api-vision/vision-api-limitations?u=76281980&t=55)** Once again, I strongly encourage you to head over to OpenAI's documentation to look thoroughly at these limitations and usage policy.

> [!info]- Semantic Content
>
> **Env Vars:** api (4)
> **UI Navigation:** go to (1)
> **Speakers:** - [presenter] (1)

#### Using the exercise files
> [LinkedIn Learning](https://www.linkedin.com/learning/openai-api-vision/using-the-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-vision/using-the-exercise-files?u=76281980&t=0)** - [Narrator] This course's exercise files are available for download in this GitHub repository.
>
> **[0:06](https://www.linkedin.com/learning/openai-api-vision/using-the-exercise-files?u=76281980&t=6)** Once downloaded, you'll work off of the main branch and you'll notice that we have folders for each chapter.
>
> **[0:14](https://www.linkedin.com/learning/openai-api-vision/using-the-exercise-files?u=76281980&t=14)** Either a folder with a chapter's name, or one folder with the begin state and another with the end state of the chapter.

> [!info]- Semantic Content
>
> **Tools:** github (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [narrator] (1)

#### Responsible usage of AI
> [LinkedIn Learning](https://www.linkedin.com/learning/openai-api-vision/responsible-usage-of-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-vision/responsible-usage-of-ai?u=76281980&t=0)** - [Instructor] We're almost ready to start working, but we have to talk about responsible usage.
>
> **[0:05](https://www.linkedin.com/learning/openai-api-vision/responsible-usage-of-ai?u=76281980&t=5)** OpenAI outlines very clearly its usage policies, and you should check them out.
>
> **[0:10](https://www.linkedin.com/learning/openai-api-vision/responsible-usage-of-ai?u=76281980&t=10)** You should also use common sense.
>
> **[0:12](https://www.linkedin.com/learning/openai-api-vision/responsible-usage-of-ai?u=76281980&t=12)** Never use this API to deceive people, or for illegal activities.
>
> **[0:17](https://www.linkedin.com/learning/openai-api-vision/responsible-usage-of-ai?u=76281980&t=17)** As the saying goes, with great power comes great responsibility, and with that in mind, let's get to work.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1)
> **Env Vars:** api (1)
> **Speakers:** - [instructor] (1)


### 1. Vision API Essentials

#### Setting up the API
> [LinkedIn Learning](https://www.linkedin.com/learning/openai-api-vision/setting-up-the-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-vision/setting-up-the-api?u=76281980&t=0)** - [Instructor] In order to leverage OpenAI's API for vision tasks, we need to do some setting up.
>
> **[0:06](https://www.linkedin.com/learning/openai-api-vision/setting-up-the-api?u=76281980&t=6)** We'll have to install some libraries, create an API key and we don't want to include our API key in source code.
>
> **[0:16](https://www.linkedin.com/learning/openai-api-vision/setting-up-the-api?u=76281980&t=16)** It's important to leverage an environment variable or some sort of API key management system.
>
> **[0:24](https://www.linkedin.com/learning/openai-api-vision/setting-up-the-api?u=76281980&t=24)** So let's get started by installing these libraries.
>
> **[0:27](https://www.linkedin.com/learning/openai-api-vision/setting-up-the-api?u=76281980&t=27)** I'm going to head to my terminal, which is here at the bottom of my code editor.
>
> **[0:34](https://www.linkedin.com/learning/openai-api-vision/setting-up-the-api?u=76281980&t=34)** And I'll start by installing OpenAI.
>
> **[0:37](https://www.linkedin.com/learning/openai-api-vision/setting-up-the-api?u=76281980&t=37)** So I'll type in python3-m pip install openai.
>
> **[0:45](https://www.linkedin.com/learning/openai-api-vision/setting-up-the-api?u=76281980&t=45)** Now if you're using a virtual environment or your code is containerized, it's a similar installation of OpenAI and you'll see that it's already installed.
>
> **[0:56](https://www.linkedin.com/learning/openai-api-vision/setting-up-the-api?u=76281980&t=56)** I'll clear my terminal.
>
> **[0:58](https://www.linkedin.com/learning/openai-api-vision/setting-up-the-api?u=76281980&t=58)** Now I'll type in python3-m pip install flask.
>
> **[1:06](https://www.linkedin.com/learning/openai-api-vision/setting-up-the-api?u=76281980&t=66)** And this is going to help us in a project in a later chapter.
>
> **[1:13](https://www.linkedin.com/learning/openai-api-vision/setting-up-the-api?u=76281980&t=73)** Next thing I'll want to do is head over to OpenAI and you'll need an OpenAI account to use this API.
>
> **[1:22](https://www.linkedin.com/learning/openai-api-vision/setting-up-the-api?u=76281980&t=82)** And here in the menu there is API keys and you'll want to open it and you'll create a secret key, which you're going to use later on.
>
> **[1:33](https://www.linkedin.com/learning/openai-api-vision/setting-up-the-api?u=76281980&t=93)** Now I'll head to my terminal and I'll want to export this key.
>
> **[1:38](https://www.linkedin.com/learning/openai-api-vision/setting-up-the-api?u=76281980&t=98)** So I'll type in export OPENAI_API_KEY
>
> **[1:49](https://www.linkedin.com/learning/openai-api-vision/setting-up-the-api?u=76281980&t=109)** equals, and I'll call this secret_key.
>
> **[1:53](https://www.linkedin.com/learning/openai-api-vision/setting-up-the-api?u=76281980&t=113)** Of course, you'll want to use your actual key and export it.
>
> **[1:58](https://www.linkedin.com/learning/openai-api-vision/setting-up-the-api?u=76281980&t=118)** And this is valid for one session of a terminal.
>
> **[2:02](https://www.linkedin.com/learning/openai-api-vision/setting-up-the-api?u=76281980&t=122)** So if I close this terminal and open a new one, I'll want to export again.
>
> **[2:07](https://www.linkedin.com/learning/openai-api-vision/setting-up-the-api?u=76281980&t=127)** If for some reason the session ended, it's important to export this key one more time.
>
> **[2:13](https://www.linkedin.com/learning/openai-api-vision/setting-up-the-api?u=76281980&t=133)** And if you use this specific name for the secret key, the library knows to look for the secret key there.
>
> **[2:20](https://www.linkedin.com/learning/openai-api-vision/setting-up-the-api?u=76281980&t=140)** If you have different conventions for naming environment variables, that's fine.
>
> **[2:25](https://www.linkedin.com/learning/openai-api-vision/setting-up-the-api?u=76281980&t=145)** You'll just have to specify it in the code.
>
> **[2:28](https://www.linkedin.com/learning/openai-api-vision/setting-up-the-api?u=76281980&t=148)** So here I'll clear this and what I'll do now is in my exercise files, I'll navigate to 01_01.
>
> **[2:35](https://www.linkedin.com/learning/openai-api-vision/setting-up-the-api?u=76281980&t=155)** So cd 01_01, clear my terminal and type in python3 test_vision.py.
>
> **[2:46](https://www.linkedin.com/learning/openai-api-vision/setting-up-the-api?u=76281980&t=166)** I've included an image as well as a very minimal amount of code to make the API work.
>
> **[2:52](https://www.linkedin.com/learning/openai-api-vision/setting-up-the-api?u=76281980&t=172)** So let's go ahead and run this.
>
> **[2:55](https://www.linkedin.com/learning/openai-api-vision/setting-up-the-api?u=76281980&t=175)** And the image shown is of a black mug with a graphic design printed on its surface.
>
> **[3:02](https://www.linkedin.com/learning/openai-api-vision/setting-up-the-api?u=76281980&t=182)** And if you look at 01_01, you'll see that this is correct.
>
> **[3:08](https://www.linkedin.com/learning/openai-api-vision/setting-up-the-api?u=76281980&t=188)** This is description of this image. Great.
>
> **[3:11](https://www.linkedin.com/learning/openai-api-vision/setting-up-the-api?u=76281980&t=191)** So now that we've set up, we can start looking at how this API works.

> [!info]- Semantic Content
>
> **Env Vars:** api (8), openai_api_key (1)
> **CLI Commands:** python3 (3), pip (2), cd (1), make (1)
> **Tools:** terminal (6)
> **Prerequisites:** install (3), you'll need (1), set up (1)
> **Code Keywords:** let (2), this. (1)
> **Code Identifiers:** secret_key (1), test_vision (1)
> **Exercise Files:** source code (1), exercise files (1)
> **File Paths:** test_vision.py (1)

#### Vision API basics
> [LinkedIn Learning](https://www.linkedin.com/learning/openai-api-vision/vision-api-basics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-vision/vision-api-basics?u=76281980&t=0)** - [Instructor] Before we start using the OpenAI API for image related tasks, let's see how this part of this API works.
>
> **[0:09](https://www.linkedin.com/learning/openai-api-vision/vision-api-basics?u=76281980&t=9)** So here in my exercise files, I'll navigate to 01_02_begin.
>
> **[0:15](https://www.linkedin.com/learning/openai-api-vision/vision-api-basics?u=76281980&t=15)** And in this folder there is a image of a mug with a robot and some text printed on it, as well as this Python file called test_vision.py.
>
> **[0:28](https://www.linkedin.com/learning/openai-api-vision/vision-api-basics?u=76281980&t=28)** And if I open test_vision.py, you'll notice that at the top, after some imports, I instantiate an OpenAI Client.
>
> **[0:39](https://www.linkedin.com/learning/openai-api-vision/vision-api-basics?u=76281980&t=39)** Next I define an image_URL, and I also open this adjacent file and base64 encode it.
>
> **[0:49](https://www.linkedin.com/learning/openai-api-vision/vision-api-basics?u=76281980&t=49)** When it comes to using this API, it's going to be very similar to text-to-text tasks.
>
> **[0:56](https://www.linkedin.com/learning/openai-api-vision/vision-api-basics?u=76281980&t=56)** But the difference is instead of giving it just text, we can give it either an image or an image as well as a text.
>
> **[1:05](https://www.linkedin.com/learning/openai-api-vision/vision-api-basics?u=76281980&t=65)** So here I create this completion, and in the content I have a content of type image_URL where I can either pass in this string with the base64 encoded image interpolated into it.
>
> **[1:22](https://www.linkedin.com/learning/openai-api-vision/vision-api-basics?u=76281980&t=82)** I can also pass in the image_URL.
>
> **[1:27](https://www.linkedin.com/learning/openai-api-vision/vision-api-basics?u=76281980&t=87)** And since the image_URL leads to the same image, these are going to function the same way.
>
> **[1:34](https://www.linkedin.com/learning/openai-api-vision/vision-api-basics?u=76281980&t=94)** Now if I just pass in this image, I will usually get a sort of general verbal description of what's in this image.
>
> **[1:44](https://www.linkedin.com/learning/openai-api-vision/vision-api-basics?u=76281980&t=104)** However, if we want something more specific, we can use an image accompanied by a prompt.
>
> **[1:51](https://www.linkedin.com/learning/openai-api-vision/vision-api-basics?u=76281980&t=111)** And for that I'm going to add another dictionary to the content, and I'll add a comma after it.
>
> **[1:58](https://www.linkedin.com/learning/openai-api-vision/vision-api-basics?u=76281980&t=118)** And in this dictionary, I'll say that the type is text.
>
> **[2:04](https://www.linkedin.com/learning/openai-api-vision/vision-api-basics?u=76281980&t=124)** Now I'll say that the text, and this is where the prompt comes in, is what colors are used in this mug?
>
> **[2:19](https://www.linkedin.com/learning/openai-api-vision/vision-api-basics?u=76281980&t=139)** Now when I send this image with this prompt, I should get a response that answers my question.
>
> **[2:26](https://www.linkedin.com/learning/openai-api-vision/vision-api-basics?u=76281980&t=146)** So let's test it out by navigating to 01_02_begin.
>
> **[2:33](https://www.linkedin.com/learning/openai-api-vision/vision-api-basics?u=76281980&t=153)** I'll clear my terminal and I'll type in Python3 test_vision.py.
>
> **[2:41](https://www.linkedin.com/learning/openai-api-vision/vision-api-basics?u=76281980&t=161)** And before you hit enter, just make sure that you've followed all the steps in the setup instructions.
>
> **[2:50](https://www.linkedin.com/learning/openai-api-vision/vision-api-basics?u=76281980&t=170)** The mug is primarily black and features a graphic design with a variety of colors.
>
> **[2:57](https://www.linkedin.com/learning/openai-api-vision/vision-api-basics?u=76281980&t=177)** So you see that it tells me that there is also blue, yellow, gray, and green.
>
> **[3:04](https://www.linkedin.com/learning/openai-api-vision/vision-api-basics?u=76281980&t=184)** So let's check it out.
>
> **[3:06](https://www.linkedin.com/learning/openai-api-vision/vision-api-basics?u=76281980&t=186)** Yep, I see that there's also red here.
>
> **[3:10](https://www.linkedin.com/learning/openai-api-vision/vision-api-basics?u=76281980&t=190)** And you can be very specific about what it is you want to know, and what the output should be like as far as format goes and language style.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), pass (3), function (1)
> **File Paths:** test_vision.py (3)
> **CLI Commands:** python (1), python3 (1), make (1)
> **Code Identifiers:** test_vision (3)
> **Env Vars:** api (3)
> **Prerequisites:** before we start (1), setup (1)
> **Tools:** terminal (1)
> **UI Navigation:** navigate to (1)

#### Vision API prompts
> [LinkedIn Learning](https://www.linkedin.com/learning/openai-api-vision/vision-api-prompts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-vision/vision-api-prompts?u=76281980&t=0)** - [Instructor] We've looked at how we can get more out of this API by sending our images along with a prompt.
>
> **[0:07](https://www.linkedin.com/learning/openai-api-vision/vision-api-prompts?u=76281980&t=7)** Now prompt engineering is quite an elaborate craft, and I encourage you to check out other titles in the library that deal with prompt engineering, specifically, my course, "[[Introduction To Prompt Engineering For Generative Ai]]."
>
> **[0:22](https://www.linkedin.com/learning/openai-api-vision/vision-api-prompts?u=76281980&t=22)** Now a few good best practices to keep in mind are to use specific instructions, to use concise language, and to specify output format if needed.
>
> **[0:35](https://www.linkedin.com/learning/openai-api-vision/vision-api-prompts?u=76281980&t=35)** Let's take a look at how that's done.
>
> **[0:38](https://www.linkedin.com/learning/openai-api-vision/vision-api-prompts?u=76281980&t=38)** So I'm going to head over to my exercise files, to 01_03_begin.
>
> **[0:44](https://www.linkedin.com/learning/openai-api-vision/vision-api-prompts?u=76281980&t=44)** And I have that prompt that I inserted earlier, but what I'm going to do is be a little bit more specific.
>
> **[0:52](https://www.linkedin.com/learning/openai-api-vision/vision-api-prompts?u=76281980&t=52)** I'll say I need to know if this matches my mug-set.
>
> **[1:03](https://www.linkedin.com/learning/openai-api-vision/vision-api-prompts?u=76281980&t=63)** I also want the output to be in a list that's compatible with JSON, so output should be JSON list.
>
> **[1:18](https://www.linkedin.com/learning/openai-api-vision/vision-api-prompts?u=76281980&t=78)** You can even give an example if necessary.
>
> **[1:21](https://www.linkedin.com/learning/openai-api-vision/vision-api-prompts?u=76281980&t=81)** So I can replace these right here so that I may create a JSON compatible list, and I can say color1, color2.
>
> **[1:39](https://www.linkedin.com/learning/openai-api-vision/vision-api-prompts?u=76281980&t=99)** Great, to run this, I'm going to navigate to 01_03_begin/.
>
> **[1:48](https://www.linkedin.com/learning/openai-api-vision/vision-api-prompts?u=76281980&t=108)** Clear my terminal and type in python3 test_vision.py.
>
> **[1:56](https://www.linkedin.com/learning/openai-api-vision/vision-api-prompts?u=76281980&t=116)** And, great, I have some JSON here that's Black and Lime Green.
>
> **[2:03](https://www.linkedin.com/learning/openai-api-vision/vision-api-prompts?u=76281980&t=123)** Now you'll notice that it gave me colors that are more specific in order to color match, and that's because my prompt was more specific.
>
> **[2:12](https://www.linkedin.com/learning/openai-api-vision/vision-api-prompts?u=76281980&t=132)** Now this is something that I can receive in an application and perhaps strip this part right here from the response so that I can use this as JSON.

> [!info]- Semantic Content
>
> **Env Vars:** json (5), api (1)
> **Code Keywords:** let (1), this, (1), match, (1)
> **File Paths:** test_vision.py (1)
> **CLI Commands:** python3 (1)
> **Code Identifiers:** test_vision (1)
> **Tools:** terminal (1)
> **UI Navigation:** navigate to (1)
> **Exercise Files:** exercise files (1)

#### Challenge: Ecommerce description
> [LinkedIn Learning](https://www.linkedin.com/learning/openai-api-vision/challenge-ecommerce-description?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-vision/challenge-ecommerce-description?u=76281980&t=0)** - [Instructor] Are you ready for a little challenge?
>
> **[0:07](https://www.linkedin.com/learning/openai-api-vision/challenge-ecommerce-description?u=76281980&t=7)** In this one, we're going to create descriptions for an e-commerce website, and we'll return them in a JSON compatible list.
>
> **[0:17](https://www.linkedin.com/learning/openai-api-vision/challenge-ecommerce-description?u=76281980&t=17)** Now, the image of a mug that we looked at before comes from this imaginary e-commerce website called Binaryville, and it has various aprons and baseball hats, as well as T-shirts and mugs.
>
> **[0:32](https://www.linkedin.com/learning/openai-api-vision/challenge-ecommerce-description?u=76281980&t=32)** We're just going to create descriptions for all these mugs.
>
> **[0:36](https://www.linkedin.com/learning/openai-api-vision/challenge-ecommerce-description?u=76281980&t=36)** So I've taken all four image URLs for these mugs, and if we navigate to our exercise files to 0104 eCommerce dot py, you'll see that I've added them to the content, and I've added all four here.
>
> **[0:54](https://www.linkedin.com/learning/openai-api-vision/challenge-ecommerce-description?u=76281980&t=54)** So we're going to have four images accompanied by one prompt.
>
> **[0:59](https://www.linkedin.com/learning/openai-api-vision/challenge-ecommerce-description?u=76281980&t=59)** The prompt is defined right here, and it's ready for you to create.
>
> **[1:05](https://www.linkedin.com/learning/openai-api-vision/challenge-ecommerce-description?u=76281980&t=65)** Now what I want you to do is experiment a little bit to see how you can get very good marketing material out of this.
>
> **[1:13](https://www.linkedin.com/learning/openai-api-vision/challenge-ecommerce-description?u=76281980&t=73)** So we want to think about the output format and describe it, but we can also use various prompt engineering methods.
>
> **[1:22](https://www.linkedin.com/learning/openai-api-vision/challenge-ecommerce-description?u=76281980&t=82)** For example, you can give this model a role to work with.
>
> **[1:27](https://www.linkedin.com/learning/openai-api-vision/challenge-ecommerce-description?u=76281980&t=87)** You can tell it that it's some sort of expert and that you need something from it in order to produce different results.
>
> **[1:36](https://www.linkedin.com/learning/openai-api-vision/challenge-ecommerce-description?u=76281980&t=96)** So take anywhere from 15 to 25 minutes to complete this challenge, and I'll see you in the next one.

> [!info]- Semantic Content
>
> **Code Keywords:** this. (1)
> **Code Identifiers:** ecommerce (1)
> **Env Vars:** json (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** navigate to (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Solution: Ecommerce description
> [LinkedIn Learning](https://www.linkedin.com/learning/openai-api-vision/solution-ecommerce-description?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-vision/solution-ecommerce-description?u=76281980&t=0)** - [Instructor] So the goal of this challenge was to help our friends in Binaryville by creating good descriptions for these mugs.
>
> **[0:14](https://www.linkedin.com/learning/openai-api-vision/solution-ecommerce-description?u=76281980&t=14)** And there are various ways of doing this.
>
> **[0:17](https://www.linkedin.com/learning/openai-api-vision/solution-ecommerce-description?u=76281980&t=17)** I'll show you my approach.
>
> **[0:19](https://www.linkedin.com/learning/openai-api-vision/solution-ecommerce-description?u=76281980&t=19)** So let's head over to 01_05 in our exercise files and open up the file e_commerce.py.
>
> **[0:28](https://www.linkedin.com/learning/openai-api-vision/solution-ecommerce-description?u=76281980&t=28)** And here's my prompt.
>
> **[0:30](https://www.linkedin.com/learning/openai-api-vision/solution-ecommerce-description?u=76281980&t=30)** You are an e-commerce marketing expert.
>
> **[0:33](https://www.linkedin.com/learning/openai-api-vision/solution-ecommerce-description?u=76281980&t=33)** Here are some mugs.
>
> **[0:35](https://www.linkedin.com/learning/openai-api-vision/solution-ecommerce-description?u=76281980&t=35)** Create short, appealing descriptions for them for our e-commerce website.
>
> **[0:40](https://www.linkedin.com/learning/openai-api-vision/solution-ecommerce-description?u=76281980&t=40)** Output should only contain a JSON list of strings containing descriptions.
>
> **[0:47](https://www.linkedin.com/learning/openai-api-vision/solution-ecommerce-description?u=76281980&t=47)** So I'm going to navigate to 01_05, clear my terminal, and type in python3 e_commerce.py.
>
> **[1:00](https://www.linkedin.com/learning/openai-api-vision/solution-ecommerce-description?u=76281980&t=60)** So just like that, I have my descriptions, and they're all separated by commas in an organized list that is JSON compatible.

> [!info]- Semantic Content
>
> **File Paths:** e_commerce.py (2)
> **Code Keywords:** this. (1), let (1)
> **Code Identifiers:** e_commerce (2)
> **Env Vars:** json (2)
> **CLI Commands:** python3 (1)
> **Tools:** terminal (1)
> **UI Navigation:** navigate to (1)
> **Exercise Files:** exercise files (1)


### 2. App Developement with Vision API

#### What we'll build
> [LinkedIn Learning](https://www.linkedin.com/learning/openai-api-vision/what-we-ll-build?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-vision/what-we-ll-build?u=76281980&t=0)** - [Instructor] The app that we're going to build is Grocery Check and the way it works is it takes a photo.
>
> **[0:06](https://www.linkedin.com/learning/openai-api-vision/what-we-ll-build?u=76281980&t=6)** So I'll add this photo that I've included in the exercise files of a partially-filled refrigerator.
>
> **[0:13](https://www.linkedin.com/learning/openai-api-vision/what-we-ll-build?u=76281980&t=13)** You can add your own and it takes a list of what's supposed to be in this refrigerator.
>
> **[0:19](https://www.linkedin.com/learning/openai-api-vision/what-we-ll-build?u=76281980&t=19)** So let's go ahead and add soy milk, which is already there and I'll add it and also I'll add something that's not here, so chocolate pudding and I'll also add red bell peppers.
>
> **[0:45](https://www.linkedin.com/learning/openai-api-vision/what-we-ll-build?u=76281980&t=45)** Now out of these three, chocolate pudding is not visibly here, so I'll go ahead and hit upload and the app is going to make a shopping list for me with whatever is missing.
>
> **[0:58](https://www.linkedin.com/learning/openai-api-vision/what-we-ll-build?u=76281980&t=58)** Yep, chocolate pudding.
>
> **[1:00](https://www.linkedin.com/learning/openai-api-vision/what-we-ll-build?u=76281980&t=60)** This project will help us understand how to take this API and use it in a user-facing application.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Code Keywords:** let (1)
> **Env Vars:** api (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### Project structure
> [LinkedIn Learning](https://www.linkedin.com/learning/openai-api-vision/project-structure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-vision/project-structure?u=76281980&t=0)** - [Instructor] Let's take a look at the structure of the web application we'll be building.
>
> **[0:04](https://www.linkedin.com/learning/openai-api-vision/project-structure?u=76281980&t=4)** So I'm going to open my exercise files and navigate to 02_02_begin.
>
> **[0:11](https://www.linkedin.com/learning/openai-api-vision/project-structure?u=76281980&t=11)** And here, you'll see there's a templates directory with an HTML template as well as an app.py file, there is a refrigerator.png, that's a photo we can work with while we develop, so that we don't have to upload one every time, and there is a vision.py file.
>
> **[0:31](https://www.linkedin.com/learning/openai-api-vision/project-structure?u=76281980&t=31)** So let's start with this app.py.
>
> **[0:33](https://www.linkedin.com/learning/openai-api-vision/project-structure?u=76281980&t=33)** And at the top here, you'll see some imports, and right after that, you'll see that I instantiate a Flask application as well as an OpenAI client.
>
> **[0:44](https://www.linkedin.com/learning/openai-api-vision/project-structure?u=76281980&t=44)** Now, this Flask application app allows me to define routes.
>
> **[0:49](https://www.linkedin.com/learning/openai-api-vision/project-structure?u=76281980&t=49)** So here, you'll see that I use @app.route, this is a decorator, and this turns this index function into a route in my web application.
>
> **[1:00](https://www.linkedin.com/learning/openai-api-vision/project-structure?u=76281980&t=60)** So all this route does is returns the template, index.html.
>
> **[1:06](https://www.linkedin.com/learning/openai-api-vision/project-structure?u=76281980&t=66)** After that, I have another route for vision.
>
> **[1:10](https://www.linkedin.com/learning/openai-api-vision/project-structure?u=76281980&t=70)** The first thing I do is verify that there is a file.
>
> **[1:13](https://www.linkedin.com/learning/openai-api-vision/project-structure?u=76281980&t=73)** Then if there is one, I have this placeholder for prompt, some logic, and for now, there's a placeholder that just returns a list that says item1, item2, and item3.
>
> **[1:26](https://www.linkedin.com/learning/openai-api-vision/project-structure?u=76281980&t=86)** This is a placeholder, it's only here for now until we actually implement the logic that checks what's missing from the image.
>
> **[1:36](https://www.linkedin.com/learning/openai-api-vision/project-structure?u=76281980&t=96)** Now, if you look at index.html, you'll see that I didn't use any frameworks.
>
> **[1:41](https://www.linkedin.com/learning/openai-api-vision/project-structure?u=76281980&t=101)** I wanted to keep it pure HTML, JavaScript, and CSS, just in order to keep things in scope for this course.
>
> **[1:50](https://www.linkedin.com/learning/openai-api-vision/project-structure?u=76281980&t=110)** And it's all in one file, it's the entire front end of the application, and you can check this code out, we're not going to play with it too much.
>
> **[1:59](https://www.linkedin.com/learning/openai-api-vision/project-structure?u=76281980&t=119)** And what it does is it sends over the image, and later on, will also send over some user input to be used in our prompt.
>
> **[2:08](https://www.linkedin.com/learning/openai-api-vision/project-structure?u=76281980&t=128)** Now, when we develop the AI logic, sometimes it's good to work outside of the application code and kind of work on this isolated part of the application.
>
> **[2:21](https://www.linkedin.com/learning/openai-api-vision/project-structure?u=76281980&t=141)** And for that, we have vision.py.
>
> **[2:23](https://www.linkedin.com/learning/openai-api-vision/project-structure?u=76281980&t=143)** vision.py is very similar to the test file that we worked with before, except it has this refrigerator image that's relevant to our use case.
>
> **[2:33](https://www.linkedin.com/learning/openai-api-vision/project-structure?u=76281980&t=153)** So now that we have a sense of how this application is structured, we are ready to start working on the core AI logic for it.

> [!info]- Semantic Content
>
> **File Paths:** vision.py (3), app.py (2), index.html (2)
> **Definitions:** is a  (5)
> **Code Keywords:** let (2), function (1), case. (1)
> **Env Vars:** html (2), css (1)
> **Exercise Files:** template (2), exercise files (1)
> **UI Navigation:** navigate to (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### Vision code for our project
> [LinkedIn Learning](https://www.linkedin.com/learning/openai-api-vision/vision-code-for-our-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-vision/vision-code-for-our-project?u=76281980&t=0)** - [Instructor] Let's get to work on the core functionality of our application, specifically, the prompt engineering part of it.
>
> **[0:07](https://www.linkedin.com/learning/openai-api-vision/vision-code-for-our-project?u=76281980&t=7)** Now I'm going to go ahead and navigate to our exercise files, to 02_03_begin, and here you'll see that I've created this vision.py file.
>
> **[0:18](https://www.linkedin.com/learning/openai-api-vision/vision-code-for-our-project?u=76281980&t=18)** It really pays off sometimes to isolate the core AI logic into a different file or a Jupyter Notebook.
>
> **[0:26](https://www.linkedin.com/learning/openai-api-vision/vision-code-for-our-project?u=76281980&t=26)** This allows you to work on things like prompt engineering iteratively and see what works.
>
> **[0:33](https://www.linkedin.com/learning/openai-api-vision/vision-code-for-our-project?u=76281980&t=33)** Now here you'll see, at the top, some imports.
>
> **[0:37](https://www.linkedin.com/learning/openai-api-vision/vision-code-for-our-project?u=76281980&t=37)** Then I open this image of a refrigerator and Base64 encode it.
>
> **[0:43](https://www.linkedin.com/learning/openai-api-vision/vision-code-for-our-project?u=76281980&t=43)** This is the image right here.
>
> **[0:44](https://www.linkedin.com/learning/openai-api-vision/vision-code-for-our-project?u=76281980&t=44)** So you'll see that specifically I have soy milk here, and I have apples, some red bell peppers.
>
> **[0:51](https://www.linkedin.com/learning/openai-api-vision/vision-code-for-our-project?u=76281980&t=51)** Not much, and I'm going to head back to vision.py, and you'll see here there's a placeholder for our prompt.
>
> **[1:00](https://www.linkedin.com/learning/openai-api-vision/vision-code-for-our-project?u=76281980&t=60)** And, after that, you'll see that I passed the prompt along with the image to the OpenAI client.
>
> **[1:06](https://www.linkedin.com/learning/openai-api-vision/vision-code-for-our-project?u=76281980&t=66)** Now I'm going to start by asking which of the following grocery items are missing?
>
> **[1:20](https://www.linkedin.com/learning/openai-api-vision/vision-code-for-our-project?u=76281980&t=80)** Now, later on, the user is going to give us our list, but for now we are just going to hard code it into the prompt.
>
> **[1:27](https://www.linkedin.com/learning/openai-api-vision/vision-code-for-our-project?u=76281980&t=87)** So I'll say soy milk, which I know is there, I'll say chocolate pudding, which I know is not there.
>
> **[1:38](https://www.linkedin.com/learning/openai-api-vision/vision-code-for-our-project?u=76281980&t=98)** And I'll say apples, which I know we have apples there, so it should tell me that chocolate pudding is missing.
>
> **[1:47](https://www.linkedin.com/learning/openai-api-vision/vision-code-for-our-project?u=76281980&t=107)** I'll save this.
>
> **[1:48](https://www.linkedin.com/learning/openai-api-vision/vision-code-for-our-project?u=76281980&t=108)** I'll navigate to 02_03_begin/.
>
> **[1:56](https://www.linkedin.com/learning/openai-api-vision/vision-code-for-our-project?u=76281980&t=116)** Clear my terminal, and I'll type in python3 vision.py.
>
> **[2:03](https://www.linkedin.com/learning/openai-api-vision/vision-code-for-our-project?u=76281980&t=123)** And you want to make sure that this terminal session has an API key and is all set up for work.
>
> **[2:12](https://www.linkedin.com/learning/openai-api-vision/vision-code-for-our-project?u=76281980&t=132)** Now this may take a moment.
>
> **[2:14](https://www.linkedin.com/learning/openai-api-vision/vision-code-for-our-project?u=76281980&t=134)** Yep, and it's telling me, "From the image you provided, it looks like there are both soy milk and apples in the refrigerator."
>
> **[2:22](https://www.linkedin.com/learning/openai-api-vision/vision-code-for-our-project?u=76281980&t=142)** The soy milk cartoon, it's telling me a lot about that.
>
> **[2:25](https://www.linkedin.com/learning/openai-api-vision/vision-code-for-our-project?u=76281980&t=145)** And then, it's giving me more information.
>
> **[2:29](https://www.linkedin.com/learning/openai-api-vision/vision-code-for-our-project?u=76281980&t=149)** And then, it's telling me, "There does not appear to be any chocolate pudding in view."
>
> **[2:34](https://www.linkedin.com/learning/openai-api-vision/vision-code-for-our-project?u=76281980&t=154)** Now this is great, but this is going to be hard to use in an application, and this is why it's great to work iteratively.
>
> **[2:43](https://www.linkedin.com/learning/openai-api-vision/vision-code-for-our-project?u=76281980&t=163)** So we're going to ask it for a specific response.
>
> **[2:46](https://www.linkedin.com/learning/openai-api-vision/vision-code-for-our-project?u=76281980&t=166)** And we'll say that the response should be a list of items that are missing.
>
> **[2:59](https://www.linkedin.com/learning/openai-api-vision/vision-code-for-our-project?u=76281980&t=179)** Now it's also a good idea to give examples.
>
> **[3:03](https://www.linkedin.com/learning/openai-api-vision/vision-code-for-our-project?u=76281980&t=183)** So I'm going to say missing item1, followed by missing item2, and then missing item3.
>
> **[3:25](https://www.linkedin.com/learning/openai-api-vision/vision-code-for-our-project?u=76281980&t=205)** And I'll go ahead and save this.
>
> **[3:28](https://www.linkedin.com/learning/openai-api-vision/vision-code-for-our-project?u=76281980&t=208)** I'll clear my terminal and type in python3 vision.py.
>
> **[3:37](https://www.linkedin.com/learning/openai-api-vision/vision-code-for-our-project?u=76281980&t=217)** And chocolate pudding, and this is much more useful for our application code to receive.
>
> **[3:43](https://www.linkedin.com/learning/openai-api-vision/vision-code-for-our-project?u=76281980&t=223)** And it gave me a list with chocolate pudding, which my application can actually use.
>
> **[3:50](https://www.linkedin.com/learning/openai-api-vision/vision-code-for-our-project?u=76281980&t=230)** Now always keep in mind validation of this output when you're incorporating this into an application.

> [!info]- Semantic Content
>
> **File Paths:** vision.py (4)
> **Tools:** terminal (3), jupyter (1)
> **CLI Commands:** python3 (2), make (1)
> **Code Keywords:** this. (2), let (1)
> **UI Navigation:** navigate to (2)
> **Env Vars:** api (1)
> **Exercise Files:** exercise files (1)
> **Warnings:** keep in mind (1)

#### Embedding vision code in our web app
> [LinkedIn Learning](https://www.linkedin.com/learning/openai-api-vision/embedding-vision-code-in-our-web-app?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-vision/embedding-vision-code-in-our-web-app?u=76281980&t=0)** - [Instructor] We have our application set up, as well as its core logic, and now it's time to bring everything together.
>
> **[0:07](https://www.linkedin.com/learning/openai-api-vision/embedding-vision-code-in-our-web-app?u=76281980&t=7)** So let's navigate to 02_04_begin in our exercise files and open up app.py.
>
> **[0:15](https://www.linkedin.com/learning/openai-api-vision/embedding-vision-code-in-our-web-app?u=76281980&t=15)** And notice I've added some code to vision.py to handle a case where the user doesn't send a file with the request, as well as a case where the user doesn't send a list of items.
>
> **[0:29](https://www.linkedin.com/learning/openai-api-vision/embedding-vision-code-in-our-web-app?u=76281980&t=29)** I also grabbed this file from the requests files and I've left a placeholder for our prompt.
>
> **[0:37](https://www.linkedin.com/learning/openai-api-vision/embedding-vision-code-in-our-web-app?u=76281980&t=37)** This is where we start bringing logic from vision.py.
>
> **[0:41](https://www.linkedin.com/learning/openai-api-vision/embedding-vision-code-in-our-web-app?u=76281980&t=41)** So we'll head over to vision.py, we'll select our prompt, we'll copy it, and head back to app.py.
>
> **[0:58](https://www.linkedin.com/learning/openai-api-vision/embedding-vision-code-in-our-web-app?u=76281980&t=58)** Try to leave this F right here before the string, that's going to be helpful later on.
>
> **[1:06](https://www.linkedin.com/learning/openai-api-vision/embedding-vision-code-in-our-web-app?u=76281980&t=66)** And I've pasted my prompt.
>
> **[1:09](https://www.linkedin.com/learning/openai-api-vision/embedding-vision-code-in-our-web-app?u=76281980&t=69)** Next, we have our Base64 encoded image, which has the same name as it did vision.py, which means, once again, we can bring this logic over.
>
> **[1:21](https://www.linkedin.com/learning/openai-api-vision/embedding-vision-code-in-our-web-app?u=76281980&t=81)** So here I am in vision.py, and I'll go ahead and copy this section right here, starting with the response right down to before the try-except clause.
>
> **[1:33](https://www.linkedin.com/learning/openai-api-vision/embedding-vision-code-in-our-web-app?u=76281980&t=93)** So we don't want this try and except.
>
> **[1:37](https://www.linkedin.com/learning/openai-api-vision/embedding-vision-code-in-our-web-app?u=76281980&t=97)** And before I paste this, I'm going to delete the indentation.
>
> **[1:43](https://www.linkedin.com/learning/openai-api-vision/embedding-vision-code-in-our-web-app?u=76281980&t=103)** I'll paste, and then I'll bring the indentation back, so this is helpful when you're pasting Python code.
>
> **[1:49](https://www.linkedin.com/learning/openai-api-vision/embedding-vision-code-in-our-web-app?u=76281980&t=109)** So I'll go ahead and select all of this, and we have to make sure that this is indented correctly in this code block with the rest of the function.
>
> **[2:02](https://www.linkedin.com/learning/openai-api-vision/embedding-vision-code-in-our-web-app?u=76281980&t=122)** And, finally, we need to return something.
>
> **[2:04](https://www.linkedin.com/learning/openai-api-vision/embedding-vision-code-in-our-web-app?u=76281980&t=124)** So we'll go back to vision.py one last time.
>
> **[2:09](https://www.linkedin.com/learning/openai-api-vision/embedding-vision-code-in-our-web-app?u=76281980&t=129)** And instead of printing this response.choices [0].message.content, we'll copy it, and our route will return it.
>
> **[2:22](https://www.linkedin.com/learning/openai-api-vision/embedding-vision-code-in-our-web-app?u=76281980&t=142)** Notice I have an error right here.
>
> **[2:24](https://www.linkedin.com/learning/openai-api-vision/embedding-vision-code-in-our-web-app?u=76281980&t=144)** This is because PROMPT was all cap, and now it's lowercase.
>
> **[2:30](https://www.linkedin.com/learning/openai-api-vision/embedding-vision-code-in-our-web-app?u=76281980&t=150)** The reason for this is all caps is a naming convention for a constant, and in vision.py it was a constant.
>
> **[2:39](https://www.linkedin.com/learning/openai-api-vision/embedding-vision-code-in-our-web-app?u=76281980&t=159)** And just like that, we have all our logic.
>
> **[2:42](https://www.linkedin.com/learning/openai-api-vision/embedding-vision-code-in-our-web-app?u=76281980&t=162)** Now, if this doesn't work, pay attention to your indentation, look over the logic, make sure that you've sent the prompt, as well as the Base64 encoded image, and that you're returning this response.
>
> **[2:57](https://www.linkedin.com/learning/openai-api-vision/embedding-vision-code-in-our-web-app?u=76281980&t=177)** I'll go ahead and save.
>
> **[2:59](https://www.linkedin.com/learning/openai-api-vision/embedding-vision-code-in-our-web-app?u=76281980&t=179)** I'll navigate to 02_04_begin/.
>
> **[3:05](https://www.linkedin.com/learning/openai-api-vision/embedding-vision-code-in-our-web-app?u=76281980&t=185)** Clear my terminal, run python3 app.py.
>
> **[3:12](https://www.linkedin.com/learning/openai-api-vision/embedding-vision-code-in-our-web-app?u=76281980&t=192)** In my browser, I'll visit localhost 5000.
>
> **[3:17](https://www.linkedin.com/learning/openai-api-vision/embedding-vision-code-in-our-web-app?u=76281980&t=197)** Here's our application.
>
> **[3:19](https://www.linkedin.com/learning/openai-api-vision/embedding-vision-code-in-our-web-app?u=76281980&t=199)** And it works, but it still uses the hard-coded prompt.
>
> **[3:23](https://www.linkedin.com/learning/openai-api-vision/embedding-vision-code-in-our-web-app?u=76281980&t=203)** So if I type in rice, and add it, and I upload my photo, I still get chocolate pudding in the response, which makes sense because that's in our prompt.
>
> **[3:39](https://www.linkedin.com/learning/openai-api-vision/embedding-vision-code-in-our-web-app?u=76281980&t=219)** And that's what we'll look at next.

> [!info]- Semantic Content
>
> **File Paths:** vision.py (7), app.py (3)
> **Code Keywords:** this, (2), let (1), except. (1), delete (1), function (1)
> **CLI Commands:** make (2), python (1), python3 (1)
> **UI Navigation:** navigate to (2)
> **Env Vars:** prompt (1)
> **Cross-References:** go back to (1)
> **Tools:** terminal (1)
> **Exercise Files:** exercise files (1)

#### Challenge: User input items
> [LinkedIn Learning](https://www.linkedin.com/learning/openai-api-vision/challenge-user-input-items?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-vision/challenge-user-input-items?u=76281980&t=0)** (bright upbeat music)
>
> **[0:05](https://www.linkedin.com/learning/openai-api-vision/challenge-user-input-items?u=76281980&t=5)** - [Instructor] Here is our challenge for this chapter.
>
> **[0:08](https://www.linkedin.com/learning/openai-api-vision/challenge-user-input-items?u=76281980&t=8)** I want you to add the user's input into our prompt.
>
> **[0:12](https://www.linkedin.com/learning/openai-api-vision/challenge-user-input-items?u=76281980&t=12)** If you look at our application right now, you'll notice it sort of ignores the user's input and instead it's using the list that's hard-coded into our prompt.
>
> **[0:24](https://www.linkedin.com/learning/openai-api-vision/challenge-user-input-items?u=76281980&t=24)** So to fix that, let's navigate to 02_05>app.py, and you'll see our prompt right here and you'll see the list of items right here.
>
> **[0:35](https://www.linkedin.com/learning/openai-api-vision/challenge-user-input-items?u=76281980&t=35)** It's a standard Python list.
>
> **[0:38](https://www.linkedin.com/learning/openai-api-vision/challenge-user-input-items?u=76281980&t=38)** Now remember that you can use this F string in order to interpret.
>
> **[0:42](https://www.linkedin.com/learning/openai-api-vision/challenge-user-input-items?u=76281980&t=42)** So if I use curly brackets anywhere in the string, I can just add a variable as long as it's in this scope.
>
> **[0:52](https://www.linkedin.com/learning/openai-api-vision/challenge-user-input-items?u=76281980&t=52)** So now we need to set up the items so that they can be inserted into this prompt and then replace this hard-coded list with the list that our user gives us.
>
> **[1:03](https://www.linkedin.com/learning/openai-api-vision/challenge-user-input-items?u=76281980&t=63)** So for this challenge, I want you to take about 15 to 25 minutes and I'll see you in the next one.

> [!info]- Semantic Content
>
> **File Paths:** app.py (1)
> **CLI Commands:** python (1)
> **Code Keywords:** let (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** navigate to (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright upbeat music) (1)

#### Solution: User input items
> [LinkedIn Learning](https://www.linkedin.com/learning/openai-api-vision/solution-user-input-items?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-vision/solution-user-input-items?u=76281980&t=0)** - [Instructor] The goal of this challenge was to add user input to our prompt.
>
> **[0:10](https://www.linkedin.com/learning/openai-api-vision/solution-user-input-items?u=76281980&t=10)** Now for the scope of this course, we're looking at a basic implementation of this.
>
> **[0:16](https://www.linkedin.com/learning/openai-api-vision/solution-user-input-items?u=76281980&t=16)** However, if you plan to do this at a production environment or at scale, it's a good idea to both consider input validation and take a look at some of the API best practices.
>
> **[0:28](https://www.linkedin.com/learning/openai-api-vision/solution-user-input-items?u=76281980&t=28)** These can be found at the OpenAI documentation at platform.[openai.com/docs](https://openai.com/docs), and this is a good guideline for application safety, specifically for applications that use large language models.
>
> **[0:45](https://www.linkedin.com/learning/openai-api-vision/solution-user-input-items?u=76281980&t=45)** Now, with that said, let's check out our solution.
>
> **[0:48](https://www.linkedin.com/learning/openai-api-vision/solution-user-input-items?u=76281980&t=48)** So I'm going to navigate over to 02 06 to app.py, and I have my prompt here.
>
> **[0:56](https://www.linkedin.com/learning/openai-api-vision/solution-user-input-items?u=76281980&t=56)** And right above that I'm going to say that my item string, and I'll say that it's a string with a comma and a space .join, and I'll have the item list in there.
>
> **[1:12](https://www.linkedin.com/learning/openai-api-vision/solution-user-input-items?u=76281980&t=72)** So basically, I'll connect all these items with a comma and a space, and instead of having these hardcoded items right here, I'll delete them and I'll have open and closing curly brackets, and within that I'm going to say item string.
>
> **[1:33](https://www.linkedin.com/learning/openai-api-vision/solution-user-input-items?u=76281980&t=93)** If this doesn't work, make sure that you're using this F string for interpolation.
>
> **[1:39](https://www.linkedin.com/learning/openai-api-vision/solution-user-input-items?u=76281980&t=99)** And I think that should do the trick.
>
> **[1:41](https://www.linkedin.com/learning/openai-api-vision/solution-user-input-items?u=76281980&t=101)** So I'll navigate to 02 06, clear my terminal.
>
> **[1:48](https://www.linkedin.com/learning/openai-api-vision/solution-user-input-items?u=76281980&t=108)** So I'll say Python3 app.py.
>
> **[1:52](https://www.linkedin.com/learning/openai-api-vision/solution-user-input-items?u=76281980&t=112)** I'll head over to local host 5000 and refresh.
>
> **[1:57](https://www.linkedin.com/learning/openai-api-vision/solution-user-input-items?u=76281980&t=117)** I'll upload my photo and I'll just add a grocery item, so chocolate is not here.
>
> **[2:08](https://www.linkedin.com/learning/openai-api-vision/solution-user-input-items?u=76281980&t=128)** And I'll also say apples, because I know that's here and I'll go ahead and upload.
>
> **[2:17](https://www.linkedin.com/learning/openai-api-vision/solution-user-input-items?u=76281980&t=137)** And yep, it told me that chocolate is not here.
>
> **[2:21](https://www.linkedin.com/learning/openai-api-vision/solution-user-input-items?u=76281980&t=141)** So hopefully you had some fun completing this challenge, and now you have a sense of how to use this API in the context of an application.

> [!info]- Semantic Content
>
> **Code Keywords:** this. (1), let (1), delete (1)
> **File Paths:** app.py (2)
> **CLI Commands:** make (1), python3 (1)
> **Env Vars:** api (2)
> **URLs:** [openai.com](https://openai.com) (1)
> **Tools:** terminal (1)
> **UI Navigation:** navigate to (1)
> **Definitions:** is a  (1)


### Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/openai-api-vision/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-vision/next-steps?u=76281980&t=0)** - [Ronnie] This is Ronnie Sheer.
>
> **[0:02](https://www.linkedin.com/learning/openai-api-vision/next-steps?u=76281980&t=2)** I wanted to thank you for joining me for this course to learn how to use this API, which is powerful and offers so many possibilities.
>
> **[0:12](https://www.linkedin.com/learning/openai-api-vision/next-steps?u=76281980&t=12)** Now, to keep the learning going, there are a few courses in the library I can recommend you check out.
>
> **[0:18](https://www.linkedin.com/learning/openai-api-vision/next-steps?u=76281980&t=18)** If you want to learn more about this API, there is my course, OpenAI API: Speech, where we look at the text-to-speech and speech-to-text capabilities of the OpenAI API.
>
> **[0:31](https://www.linkedin.com/learning/openai-api-vision/next-steps?u=76281980&t=31)** Then there's my course, [[Introduction To Prompt Engineering For Generative Ai]], where we look at different AI tools and prompt engineering techniques.
>
> **[0:42](https://www.linkedin.com/learning/openai-api-vision/next-steps?u=76281980&t=42)** Finally, if you want to dive deeper into machine learning and AI with Python, there is Fred Nwanganga's course, [[Machine Learning with Python- Foundations]].
>
> **[0:53](https://www.linkedin.com/learning/openai-api-vision/next-steps?u=76281980&t=53)** Thank you again, and always be learning.

> [!info]- Semantic Content
>
> **Env Vars:** api (4)
> **CLI Commands:** python (2)
> **Code Keywords:** finally, (1)
> **Speakers:** - [ronnie] (1)


## Path Context

### In [[Develop Your Skills with the OpenAI API]]
← [[OpenAI API- Image Generation with DALL-E]] | **7 of 10** | [[OpenAI API- Speech]] →

## Appears In

- [[Develop Your Skills with the OpenAI API]]

## Related Courses

_Courses sharing skills:_

- [[OpenAI API- Code Interpreter and Advanced Data Analysis]] — Artificial Intelligence (AI), OpenAI Products, OpenAI API
- [[OpenAI API- Moderation]] — Artificial Intelligence (AI), OpenAI Products, OpenAI API
- [[OpenAI API- Speech]] — Artificial Intelligence (AI), OpenAI Products, OpenAI API
- [[OpenAI API- Image Generation with DALL-E]] — Artificial Intelligence (AI), OpenAI Products, OpenAI API
- [[OpenAI API- Fine-Tuning]] — Artificial Intelligence (AI), OpenAI Products, OpenAI API

---

[↑ Back to top](#)