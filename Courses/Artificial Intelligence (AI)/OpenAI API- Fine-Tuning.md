---
type: course
cssclasses:
  - lle-course
slug: openai-api-fine-tuning-21058733
url: "https://www.linkedin.com/learning/openai-api-fine-tuning-21058733"
duration_minutes: 47
duration: 47m
updated: 4/23/2024
learners: 104232
skills:
  - OpenAI API
  - OpenAI Products
  - Artificial Intelligence (AI)
exercise_files: true
github: "https://github.com/LinkedInLearning/openai-api-fine-tuning-2719505/codespaces"
thumbnail: "https://media.licdn.com/dms/image/v2/D4D0DAQFE_LhqtfTWIw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1713563299935?e=2147483647&amp;v=beta&amp;t=o-NCkVi1PRVuCx-Fps7sZuldwCH0U4OmrYzPSu6iywk"
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
status: not-started
created: 2026-04-20
---

![OpenAI API: Fine-Tuning](https://media.licdn.com/dms/image/v2/D4D0DAQFE_LhqtfTWIw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1713563299935?e=2147483647&amp;v=beta&amp;t=o-NCkVi1PRVuCx-Fps7sZuldwCH0U4OmrYzPSu6iywk)

# OpenAI API: Fine-Tuning

> Fine-tuning GPT models allows you to submit examples of the types of responses the AI system should provide based on user input. This is a great way of ensuring the system speaks in a voice and tone of your choosing, and eliminates the need for providing a description of the agent before each prompt.

OpenAI’s API enables you to submit your own fine-tuning training data. In this course, Senior Sta

> [LinkedIn Learning](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733) | 47m | 104K learners
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Morten Rand-Hendriksen]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/openai-api-fine-tuning-2719505/codespaces)

## Skills Covered

- OpenAI API
- OpenAI Products
- Artificial Intelligence (AI)

## Table of Contents

### Introduction

#### Fine-tuning custom models with the OpenAI API
> [LinkedIn Learning](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/fine-tuning-custom-models-with-the-openai-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/fine-tuning-custom-models-with-the-openai-api?u=76281980&t=0)** - You can create custom versions of any of the major AI models from OpenAI using fine-tuning.
>
> **[0:05](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/fine-tuning-custom-models-with-the-openai-api?u=76281980&t=5)** And in this course, I'll walk you through the process step by step.
>
> **[0:10](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/fine-tuning-custom-models-with-the-openai-api?u=76281980&t=10)** We'll look at how to generate training and validation data and how to fine-tune custom models both through the user interface on the OpenAI website and through the API.
>
> **[0:20](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/fine-tuning-custom-models-with-the-openai-api?u=76281980&t=20)** Creating a fine-tuned version of an AI model gives you detailed control over how that model behaves without having to provide massive system messages or massive user messages with lots of examples.
>
> **[0:32](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/fine-tuning-custom-models-with-the-openai-api?u=76281980&t=32)** This makes fine-tuning enormously powerful, especially for the enterprise.
>
> **[0:37](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/fine-tuning-custom-models-with-the-openai-api?u=76281980&t=37)** And I'm here to show you how to get it right.
>
> **[0:39](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/fine-tuning-custom-models-with-the-openai-api?u=76281980&t=39)** Let's get cracking.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (1), let (1)
> **Env Vars:** api (1)
> **Speakers:** - you (1)

#### Exercise files and where to find them
> [LinkedIn Learning](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/exercise-files-and-where-to-find-them?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/exercise-files-and-where-to-find-them?u=76281980&t=0)** - [Instructor] To make it easier for you to follow along, and to give you the tools you need to do your own fine-tuning jobs after you've finished watching this course, I've created exercise files for this course, and you can find them on GitHUb.
>
> **[0:11](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/exercise-files-and-where-to-find-them?u=76281980&t=11)** In the exercise files, I provide two Jupyter notebooks, one helping you to create training data and one helping you to interact directly with the open AI API.
>
> **[0:20](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/exercise-files-and-where-to-find-them?u=76281980&t=20)** And both of these Jupyter notebooks need to run in a Jupyter environment supported by Python.
>
> **[0:25](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/exercise-files-and-where-to-find-them?u=76281980&t=25)** So to make this easier, I've set everything up so you can run it all in GitHub Codespaces, including having a pre-configured Python environment.
>
> **[0:33](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/exercise-files-and-where-to-find-them?u=76281980&t=33)** To do so, go to the repository page, click on code, select the codespaces tab, and either create a new codespace by clicking create codespace on main, or if you already have one that's running, select the one that's running to start it up again.
>
> **[0:47](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/exercise-files-and-where-to-find-them?u=76281980&t=47)** Inside the codespace, you'll find a data folder that has the base data we're using for this example.
>
> **[0:52](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/exercise-files-and-where-to-find-them?u=76281980&t=52)** You'll find a folder called Create Training Data.
>
> **[0:55](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/exercise-files-and-where-to-find-them?u=76281980&t=55)** This is where the notebook for creating training data sits, with all its documentation.
>
> **[0:59](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/exercise-files-and-where-to-find-them?u=76281980&t=59)** And there's a notebook called Fine-tuning Flow, which breaks down the entire flow of interacting with the fine-tuning API.
>
> **[1:05](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/exercise-files-and-where-to-find-them?u=76281980&t=65)** I'll cover all of this in detail in the course, but there is one thing you need to do before we get started.
>
> **[1:10](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/exercise-files-and-where-to-find-them?u=76281980&t=70)** You'll notice here I have this file called .env.
>
> **[1:14](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/exercise-files-and-where-to-find-them?u=76281980&t=74)** And if you look at your own environment, you don't have that file.
>
> **[1:17](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/exercise-files-and-where-to-find-them?u=76281980&t=77)** Instead you have this file called env-template.
>
> **[1:21](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/exercise-files-and-where-to-find-them?u=76281980&t=81)** So as we start, copy this file, env-template, and create a new file called .env.
>
> **[1:28](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/exercise-files-and-where-to-find-them?u=76281980&t=88)** No prefix, just .env.
>
> **[1:30](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/exercise-files-and-where-to-find-them?u=76281980&t=90)** What you'll notice is this file name will be grayed out.
>
> **[1:33](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/exercise-files-and-where-to-find-them?u=76281980&t=93)** That's because Git is not monitoring this particular file, and it will not be committed back into your system because this is your API key.
>
> **[1:41](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/exercise-files-and-where-to-find-them?u=76281980&t=101)** What you want in this file is to set up your own API key to call open AI.
>
> **[1:46](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/exercise-files-and-where-to-find-them?u=76281980&t=106)** This is my API key, and it will not work by the time you watch this course.
>
> **[1:50](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/exercise-files-and-where-to-find-them?u=76281980&t=110)** To get an API key, go to platform.[openai.com](https://openai.com).
>
> **[1:54](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/exercise-files-and-where-to-find-them?u=76281980&t=114)** Go to API keys.
>
> **[1:56](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/exercise-files-and-where-to-find-them?u=76281980&t=116)** Here you get a list of all the available API keys you already have.
>
> **[2:00](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/exercise-files-and-where-to-find-them?u=76281980&t=120)** Scroll down and click create new secret key, then give the key a name.
>
> **[2:04](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/exercise-files-and-where-to-find-them?u=76281980&t=124)** Click create secret key.
>
> **[2:07](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/exercise-files-and-where-to-find-them?u=76281980&t=127)** And this is the only time you get to see that key.
>
> **[2:10](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/exercise-files-and-where-to-find-them?u=76281980&t=130)** So copy this key.
>
> **[2:12](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/exercise-files-and-where-to-find-them?u=76281980&t=132)** Don't close the modal window just yet.
>
> **[2:15](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/exercise-files-and-where-to-find-them?u=76281980&t=135)** Go over into your file and paste it in.
>
> **[2:18](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/exercise-files-and-where-to-find-them?u=76281980&t=138)** Save the .env file.
>
> **[2:22](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/exercise-files-and-where-to-find-them?u=76281980&t=142)** Then go back here to platform.[openai.com](https://openai.com) and click done.
>
> **[2:26](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/exercise-files-and-where-to-find-them?u=76281980&t=146)** Like I said, that's the only time you got to see that key.
>
> **[2:29](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/exercise-files-and-where-to-find-them?u=76281980&t=149)** So if something went wrong here, or the key is not working, you need to go generate a new key.
>
> **[2:35](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/exercise-files-and-where-to-find-them?u=76281980&t=155)** Also, if you've created a key and you're not going to use it anymore, go into here and remove the key.
>
> **[2:40](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/exercise-files-and-where-to-find-them?u=76281980&t=160)** That way there's no risk of the key being accidentally used or anyone else getting access to it.
>
> **[2:46](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/exercise-files-and-where-to-find-them?u=76281980&t=166)** So that's what I'm going to do to the key I have here once I'm done recording the course.
>
> **[2:50](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/exercise-files-and-where-to-find-them?u=76281980&t=170)** Once you've taken these steps, you're ready to get started.

> [!info]- Semantic Content
>
> **CLI Commands:** find (3), make (2), python (2), git (1)
> **Env Vars:** api (8)
> **UI Navigation:** go to (3), select the (2), click on (1), scroll down (1)
> **Tools:** jupyter (3), github (2)
> **Exercise Files:** exercise files (2), template (2)
> **URLs:** [openai.com](https://openai.com) (2)
> **Best Practices:** the key is (1)
> **Prerequisites:** set up (1)


### 1. Fine-Tuning Basics

#### When to create a fine-tuned model
> [LinkedIn Learning](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/when-to-create-a-fine-tuned-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/when-to-create-a-fine-tuned-model?u=76281980&t=0)** - Before we dive in, let's address two important questions.
>
> **[0:03](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/when-to-create-a-fine-tuned-model?u=76281980&t=3)** First, what exactly is fine-tuning?
>
> **[0:07](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/when-to-create-a-fine-tuned-model?u=76281980&t=7)** When you work with AI systems, you've noticed that if you provide a lot of examples before you ask your questions or provide a task, the system is better at reproducing those examples.
>
> **[0:18](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/when-to-create-a-fine-tuned-model?u=76281980&t=18)** This is called few-shot prompting.
>
> **[0:20](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/when-to-create-a-fine-tuned-model?u=76281980&t=20)** In fine-tuning, we can provide a long list of such examples into the model and have the model save those examples so that the next time you ask a question, it is already seen a bunch of examples of what types of answers you want, and it'll then reproduce the patterns and structures of those examples in your responses.
>
> **[0:38](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/when-to-create-a-fine-tuned-model?u=76281980&t=38)** And we do that by providing the model not only with some examples, but with actual exchanges back and forth.
>
> **[0:45](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/when-to-create-a-fine-tuned-model?u=76281980&t=45)** So, we say, "Here is your system message, here is the input user message, and here is the output message I want from you."
>
> **[0:52](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/when-to-create-a-fine-tuned-model?u=76281980&t=52)** And then, we repeat those examples over and over and over with slightly different variations, and the model then has a bunch of examples to draw from anytime you ask a new question.
>
> **[1:02](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/when-to-create-a-fine-tuned-model?u=76281980&t=62)** And this brings us to question number two, when do you create a fine-tuned model?
>
> **[1:06](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/when-to-create-a-fine-tuned-model?u=76281980&t=66)** The simple answer here is you create a fine-tuned model anytime you know you're going to be asking the same types of questions over and over or you know you want a very specific type of answer and you know that getting that answer requires a big system message or a big request every time.
>
> **[1:25](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/when-to-create-a-fine-tuned-model?u=76281980&t=85)** The key here is if you want consistent data and you don't want to provide a huge system message or a huge user message every time you make a request, fine-tuning is probably the way to go.
>
> **[1:37](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/when-to-create-a-fine-tuned-model?u=76281980&t=97)** That said, there's a bit more detail here and you can see it on the fine-tuning page from OpenAI.
>
> **[1:42](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/when-to-create-a-fine-tuned-model?u=76281980&t=102)** Navigating down to common use cases, you see typical examples of when you want to use fine-tuning is if you want to set a style or tone or format, or improve reliability, or correct failures in complex prompts, et cetera.
>
> **[1:54](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/when-to-create-a-fine-tuned-model?u=76281980&t=114)** There are also some cases where you don't want to use fine-tuning, for example, in simple tasks, were providing better prompts produces the output you want or if iterating over prompts through multiple different prompts helps.
>
> **[2:07](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/when-to-create-a-fine-tuned-model?u=76281980&t=127)** But this is all talk, let me give you a preview of the fine-tune model we'll be building and how it's different from the regular model.
>
> **[2:15](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/when-to-create-a-fine-tuned-model?u=76281980&t=135)** Here, on the OpenAI Playground, I've set up an exchange, I have a system message and a request.
>
> **[2:20](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/when-to-create-a-fine-tuned-model?u=76281980&t=140)** And the system message says, "You're a restaurant review analyzer.
>
> **[2:23](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/when-to-create-a-fine-tuned-model?u=76281980&t=143)** Analyze the sentiment of the review provided and give it a rating of 1-5, where 1 is very negative and 5 is very positive."
>
> **[2:31](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/when-to-create-a-fine-tuned-model?u=76281980&t=151)** And then, comes a special thing, "Rate the sentiment as follows: 1 is Culinary Catastrophe, 2 is Bitter Bites, 3 is Meh Meal, 4 is Delightful Dining, and 5 is Gastronomic Genius.
>
> **[2:44](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/when-to-create-a-fine-tuned-model?u=76281980&t=164)** And then, output the resulting value of the sentiment as JSON."
>
> **[2:48](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/when-to-create-a-fine-tuned-model?u=76281980&t=168)** Let's see what happens when I run this request against a standard GPT 3.5 Turbo model.
>
> **[2:53](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/when-to-create-a-fine-tuned-model?u=76281980&t=173)** Click Submit and outcomes rating 5 and sentiment Gastronomic Genius, which matches up with my request.
>
> **[3:02](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/when-to-create-a-fine-tuned-model?u=76281980&t=182)** Now, comes an important question.
>
> **[3:03](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/when-to-create-a-fine-tuned-model?u=76281980&t=183)** If I'm going to build a tool around this, I don't want to pass that giant system message every time because I'm spending a lot of tokens just passing in that system message.
>
> **[3:12](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/when-to-create-a-fine-tuned-model?u=76281980&t=192)** So, can I somehow reduce that system message and get the same kind of output?
>
> **[3:17](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/when-to-create-a-fine-tuned-model?u=76281980&t=197)** Let's try it.
>
> **[3:18](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/when-to-create-a-fine-tuned-model?u=76281980&t=198)** I'll go in and take out the long instruction here, so let's rate the sentiment as follows bit, and then just say, "Outputs the rating as JSON," and run the same request again, so click Submit.
>
> **[3:33](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/when-to-create-a-fine-tuned-model?u=76281980&t=213)** And now I just get rating 5 as sentiment positive.
>
> **[3:36](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/when-to-create-a-fine-tuned-model?u=76281980&t=216)** Now, let's see what happens if I use a fine-tuned model for this particular task.
>
> **[3:41](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/when-to-create-a-fine-tuned-model?u=76281980&t=221)** Over in the model dropdown, I can find a fine-tuned model I've already created.
>
> **[3:45](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/when-to-create-a-fine-tuned-model?u=76281980&t=225)** It's down here and it's called alt.
>
> **[3:49](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/when-to-create-a-fine-tuned-model?u=76281980&t=229)** So, I'll do this one, and then click Submit.
>
> **[3:55](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/when-to-create-a-fine-tuned-model?u=76281980&t=235)** And look at that, the output I get now has that special classification, Gastronomic Genius, even though there's no information about that in the system message.
>
> **[4:04](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/when-to-create-a-fine-tuned-model?u=76281980&t=244)** This is an example of what fine-tuning is for.
>
> **[4:06](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/when-to-create-a-fine-tuned-model?u=76281980&t=246)** And I have to admit it is a contrived example, but it's a good one because it shows you that once I've fine-tuned the model, I no longer have to provide this very detailed information in my system message.
>
> **[4:17](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/when-to-create-a-fine-tuned-model?u=76281980&t=257)** The model knows how to behave, and that's the whole point.
>
> **[4:21](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/when-to-create-a-fine-tuned-model?u=76281980&t=261)** Now that you know what we're building, let me show you how.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), this, (1), pass (1), for. (1)
> **Env Vars:** json (2), gpt (1)
> **Definitions:** is called (1), is an  (1), is a  (1)
> **CLI Commands:** make (1), find (1)
> **Versions:** 3.5 (1)
> **UI Navigation:** dropdown (1)
> **Analogies:** for example (1)
> **Prerequisites:** set up (1)

#### Creating and formatting training data
> [LinkedIn Learning](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-and-formatting-training-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-and-formatting-training-data?u=76281980&t=0)** - To fine-tune your own model, you first need training data, and that training data has to be formatted in a somewhat unusual way.
>
> **[0:07](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-and-formatting-training-data?u=76281980&t=7)** You have to provide it as a JSONL file.
>
> **[0:10](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-and-formatting-training-data?u=76281980&t=10)** A JSONL file is a file where you have lines of complete JSON objects that are not comma separated.
>
> **[0:17](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-and-formatting-training-data?u=76281980&t=17)** So it's literally like a list of full JSON objects, one after the other.
>
> **[0:23](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-and-formatting-training-data?u=76281980&t=23)** Each of these JSON objects is a full exchange with the OpenAI API.
>
> **[0:28](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-and-formatting-training-data?u=76281980&t=28)** So it has a system message, a user message, then an assistant response message, and we provide all the information to show the AI, here's what the system message is, here's what a user message is, and here's the type of output I want from you in this case.
>
> **[0:44](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-and-formatting-training-data?u=76281980&t=44)** In OpenAI's Fine-Tuning Guide, you'll find an example of what this looks like down here.
>
> **[0:48](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-and-formatting-training-data?u=76281980&t=48)** So you can see we have a series of messages.
>
> **[0:50](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-and-formatting-training-data?u=76281980&t=50)** We have role, system, content, and then Marv is a functional chatbot that is also sarcastic.
>
> **[0:55](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-and-formatting-training-data?u=76281980&t=55)** Then we have role, user, content.
>
> **[0:57](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-and-formatting-training-data?u=76281980&t=57)** So this would be the user request, what is the capital of France?
>
> **[1:00](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-and-formatting-training-data?u=76281980&t=60)** And then we have role, assistant.
>
> **[1:02](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-and-formatting-training-data?u=76281980&t=62)** This is the response and content, Paris.
>
> **[1:06](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-and-formatting-training-data?u=76281980&t=66)** As if everyone doesn't know that already.
>
> **[1:08](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-and-formatting-training-data?u=76281980&t=68)** That's the format.
>
> **[1:09](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-and-formatting-training-data?u=76281980&t=69)** But there's a challenge.
>
> **[1:10](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-and-formatting-training-data?u=76281980&t=70)** To create effective fine-tuning, you need a lot of these examples.
>
> **[1:14](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-and-formatting-training-data?u=76281980&t=74)** The recommendation is 100 examples or more, and building out these examples can be rather tedious unless you have a tool to help you.
>
> **[1:24](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-and-formatting-training-data?u=76281980&t=84)** In the exercise files for this course, I provide two Jupyter notebooks, one with a training data creation tool and another that demonstrates how to interact with the OpenAI API to perform fine-tuning.
>
> **[1:36](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-and-formatting-training-data?u=76281980&t=96)** Now, the examples in both of these notebooks are variants of code that's provided by OpenAI and you can go check out their notebooks as well.
>
> **[1:43](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-and-formatting-training-data?u=76281980&t=103)** I have provided links to them inside the notebooks we're going to be looking at.
>
> **[1:46](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-and-formatting-training-data?u=76281980&t=106)** My recommendation to you is to open these exercise files in GitHub Codespaces, because that way, you get a fully-configured environment that has Python pre-installed and has all the extensions and features you need to run the notebook, even if you've never used a Jupyter Notebook before.
>
> **[2:02](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-and-formatting-training-data?u=76281980&t=122)** Let me show you how all this works.
>
> **[2:04](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-and-formatting-training-data?u=76281980&t=124)** In the exercise files, you'll find a folder called data.
>
> **[2:07](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-and-formatting-training-data?u=76281980&t=127)** This folder currently contains a single CSV file called allreviews, and this is a list of different reviews that I've lifted off the internet.
>
> **[2:15](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-and-formatting-training-data?u=76281980&t=135)** So these are restaurant reviews.
>
> **[2:17](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-and-formatting-training-data?u=76281980&t=137)** The only information we have here is the review itself.
>
> **[2:20](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-and-formatting-training-data?u=76281980&t=140)** That's some text, then a rating, a number between one and five, and finally, a sentiment.
>
> **[2:25](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-and-formatting-training-data?u=76281980&t=145)** So that's one of those sentiments that I defined earlier, right?
>
> **[2:28](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-and-formatting-training-data?u=76281980&t=148)** So if we scroll over here, you'll see the sentiment for this one is Culinary Catastrophe, and this one is Gastronomic Genius and so on.
>
> **[2:36](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-and-formatting-training-data?u=76281980&t=156)** So this is all the information we need and I had to create this dataset and I did that using Python.
>
> **[2:42](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-and-formatting-training-data?u=76281980&t=162)** Next, look at the folder called create-training-data.
>
> **[2:45](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-and-formatting-training-data?u=76281980&t=165)** And this file, create-training-data.ipynb.
>
> **[2:49](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-and-formatting-training-data?u=76281980&t=169)** This is a Jupyter Notebook, and in this file, you have all the code you need to convert that CSV file into the necessary JSONL files.
>
> **[2:58](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-and-formatting-training-data?u=76281980&t=178)** I've documented this entire process in the notebook.
>
> **[3:00](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-and-formatting-training-data?u=76281980&t=180)** I won't read all of it here, just take you through the highlights.
>
> **[3:03](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-and-formatting-training-data?u=76281980&t=183)** At the top, we have an example of a full exchange.
>
> **[3:05](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-and-formatting-training-data?u=76281980&t=185)** Then there's a list of all the steps.
>
> **[3:07](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-and-formatting-training-data?u=76281980&t=187)** This is what we're going to do in the notebook.
>
> **[3:09](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-and-formatting-training-data?u=76281980&t=189)** And finally, we have the notebook itself.
>
> **[3:11](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-and-formatting-training-data?u=76281980&t=191)** To run this, what you do is go to the first code block and then hit Shift + Return.
>
> **[3:18](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-and-formatting-training-data?u=76281980&t=198)** What will happen now is because we haven't set up a Python environment yet, you get this warning at the top saying Select Kernel.
>
> **[3:24](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-and-formatting-training-data?u=76281980&t=204)** Click Python Environments and select the top Python environment.
>
> **[3:29](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-and-formatting-training-data?u=76281980&t=209)** Now you'll see some activity down here at the bottom because the environment has to be set up, and once that's completed, this first code block will run.
>
> **[3:37](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-and-formatting-training-data?u=76281980&t=217)** Now, this first code block here is importing all the dependencies that the Python scripts need.
>
> **[3:42](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-and-formatting-training-data?u=76281980&t=222)** So you won't get any alerts afterwards.
>
> **[3:45](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-and-formatting-training-data?u=76281980&t=225)** We also don't need them.
>
> **[3:46](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-and-formatting-training-data?u=76281980&t=226)** The next thing we need to do is load in the data.
>
> **[3:48](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-and-formatting-training-data?u=76281980&t=228)** So here, I've set up a data folder that is the one that's over here.
>
> **[3:51](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-and-formatting-training-data?u=76281980&t=231)** Then, source files.
>
> **[3:53](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-and-formatting-training-data?u=76281980&t=233)** We're pointing at allreviews.csv.
>
> **[3:55](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-and-formatting-training-data?u=76281980&t=235)** Then we've set up a training file name.
>
> **[3:58](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-and-formatting-training-data?u=76281980&t=238)** That will be review_finetune_training.jsonl, and also a validation file, which is review_finetune_validation.jsonl.
>
> **[4:06](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-and-formatting-training-data?u=76281980&t=246)** The validation file is used in the fine-tuning process to ensure that the fine-tuning is working as it should.
>
> **[4:12](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-and-formatting-training-data?u=76281980&t=252)** It's an optional feature, but since we have all the data and we can automate all of this, we might as well make a validation file as well.
>
> **[4:18](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-and-formatting-training-data?u=76281980&t=258)** When I run this code block by hitting, again, Shift + Return, you'll see at the bottom here you get an example of the data we've imported.
>
> **[4:25](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-and-formatting-training-data?u=76281980&t=265)** So here we have the first review, then the rating, then the sentiment, and these are just the first five items.
>
> **[4:31](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-and-formatting-training-data?u=76281980&t=271)** There's actually thousands of items in this data set, and we can pull whatever item we want, but this just tells us that things are working.
>
> **[4:38](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-and-formatting-training-data?u=76281980&t=278)** Next, I need to create the example exchanges, and this is the function that turns this data that we have up here into that JSON object.
>
> **[4:47](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-and-formatting-training-data?u=76281980&t=287)** So here we put in a system message and you'll see, You are a restaurant review analyzer.
>
> **[4:52](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-and-formatting-training-data?u=76281980&t=292)** Analyze the sentiment of the review provided, and then output the rating it as value of the sentiment in JSON.
>
> **[4:59](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-and-formatting-training-data?u=76281980&t=299)** You'll note here that I'm not putting in those custom sentiment names.
>
> **[5:02](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-and-formatting-training-data?u=76281980&t=302)** That's because our fine-tuning will handle that process, 'cause the sentiments will be in the responses.
>
> **[5:07](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-and-formatting-training-data?u=76281980&t=307)** Next, we grab the Review row from our data, then we grab the Ratings row and the Sentiment row, and this function below just sticks it all together and makes a JSON object out of it.
>
> **[5:19](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-and-formatting-training-data?u=76281980&t=319)** Again, I'll click inside, hit Shift + Return, and the process happens.
>
> **[5:24](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-and-formatting-training-data?u=76281980&t=324)** Now, I can go in and pull out any one of the items.
>
> **[5:27](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-and-formatting-training-data?u=76281980&t=327)** So I'll just say, give me item number five.
>
> **[5:29](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-and-formatting-training-data?u=76281980&t=329)** What we get in return is an example output of the first JSON object.
>
> **[5:33](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-and-formatting-training-data?u=76281980&t=333)** So here, I can quickly go in and check to make sure that the JSON object is formatted correctly and just a cursory overview tells me it is.
>
> **[5:41](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-and-formatting-training-data?u=76281980&t=341)** So we can move on to the next step.
>
> **[5:43](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-and-formatting-training-data?u=76281980&t=343)** Here, we're going to pull the first 100 rows from the training data and then run the above function on it, and then we'll do the same for the next 100 rows, and we'll create two new variables, one called training_data and one called validation_data.
>
> **[5:57](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-and-formatting-training-data?u=76281980&t=357)** Once I've run this function, I can now go in and pull out any line from our training data to make sure that the content is formatted the way I want it to.
>
> **[6:06](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-and-formatting-training-data?u=76281980&t=366)** So I'll do that here and here you see we get five lines, and they're all these individual JSON objects and have all the information we need.
>
> **[6:14](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-and-formatting-training-data?u=76281980&t=374)** And importantly, you'll notice that all of these objects have the exact same system message at the top.
>
> **[6:19](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-and-formatting-training-data?u=76281980&t=379)** This is what makes the fine-tuning possible.
>
> **[6:22](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-and-formatting-training-data?u=76281980&t=382)** We say, whenever you see this system message, output this type of response.
>
> **[6:27](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-and-formatting-training-data?u=76281980&t=387)** Okay, now we have all the JSON objects created, and the last step is to create the JSON files.
>
> **[6:32](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-and-formatting-training-data?u=76281980&t=392)** And I do that using this function down here.
>
> **[6:35](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-and-formatting-training-data?u=76281980&t=395)** So I'll first set up the function and then down here, I'll write to JSON files.
>
> **[6:40](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-and-formatting-training-data?u=76281980&t=400)** So look over here in the data folder as I do this.
>
> **[6:43](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-and-formatting-training-data?u=76281980&t=403)** I hit Shift + Return, a process happens, and now we have two files: review_finetune_training and review_finetune_validation.
>
> **[6:51](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-and-formatting-training-data?u=76281980&t=411)** And if I open this file, you'll see here we have 100 examples of training data, and the same thing happens in the validation file.
>
> **[6:59](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-and-formatting-training-data?u=76281980&t=419)** 100 examples of training data.
>
> **[7:02](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-and-formatting-training-data?u=76281980&t=422)** As you can tell from this example, using Python to create the training data, if you have it in a CSV file, is a lot simpler than anything else, and that's why I've provided you with this file, so you can use this notebook anytime you need to create your own training data.
>
> **[7:17](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-and-formatting-training-data?u=76281980&t=437)** All you have to do is provide your own file and then change the system message and configure whatever else you want to change and run these commands and you end up with the necessary files to do fine-tuning.

> [!info]- Semantic Content
>
> **Env Vars:** json (12), jsonl (3), csv (3), api (2)
> **Code Keywords:** function (6), return, (3), finally, (2), this, (2), case. (1)
> **CLI Commands:** python (7), make (3), find (2)
> **Definitions:** is a  (6), is an  (1)
> **Code Identifiers:** review_finetune_training (2), review_finetune_validation (2), training_data (1), validation_data (1)
> **Prerequisites:** set up (5), configure (1)
> **Tools:** jupyter (3), github (1)
> **Exercise Files:** exercise files (3)

#### Testing the training data
> [LinkedIn Learning](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/testing-the-training-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/testing-the-training-data?u=76281980&t=0)** - Now that you have the training data, it's a good idea to run some tests on it.
>
> **[0:04](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/testing-the-training-data?u=76281980&t=4)** We want to first make sure it's consistent and the training data is complete, because if there are any errors and we try to do fine-tuning on it, the fine-tuning will stall in the middle of the process and will waste time and money.
>
> **[0:17](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/testing-the-training-data?u=76281980&t=17)** We also want to test to make sure that each of our JSON objects sticks within the token limit so that they're not too long.
>
> **[0:24](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/testing-the-training-data?u=76281980&t=24)** Because in some cases when you do fine tuning, you may feed in very long system messages, very long user messages, or very long responses.
>
> **[0:32](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/testing-the-training-data?u=76281980&t=32)** And if they are too long, the fine-tuning will simply fail.
>
> **[0:35](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/testing-the-training-data?u=76281980&t=35)** And number three, we want to make sure we know how much time and money we're going to spend on this.
>
> **[0:40](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/testing-the-training-data?u=76281980&t=40)** And we do that by counting the tokens across all the epochs or cycles that the training will be done on.
>
> **[0:46](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/testing-the-training-data?u=76281980&t=46)** The good news is I've compiled all the code we need to do these tests in the same Jupyter Notebook we've worked with previously.
>
> **[0:52](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/testing-the-training-data?u=76281980&t=52)** In the Notebook, navigate down to four, validate the data.
>
> **[0:56](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/testing-the-training-data?u=76281980&t=56)** Here, we first load in the file we want to validate, because we now have two files I have to choose.
>
> **[1:01](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/testing-the-training-data?u=76281980&t=61)** Here I'm testing for the training_file_name.
>
> **[1:04](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/testing-the-training-data?u=76281980&t=64)** I could also test for the validation_file_name by simply un-commenting this line and commenting the line above.
>
> **[1:09](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/testing-the-training-data?u=76281980&t=69)** What happens here in the first step is we're just taking the file and then breaking it out into a format that can be used for testing.
>
> **[1:17](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/testing-the-training-data?u=76281980&t=77)** So I'll run this block, and directly below we test for the errors.
>
> **[1:21](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/testing-the-training-data?u=76281980&t=81)** I'll run this block here.
>
> **[1:23](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/testing-the-training-data?u=76281980&t=83)** And it says no errors found, which means my training data is consistent.
>
> **[1:27](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/testing-the-training-data?u=76281980&t=87)** Now, just for fun, let's see what happens if there's an error in the training data.
>
> **[1:31](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/testing-the-training-data?u=76281980&t=91)** So I'll go over here to one of these items.
>
> **[1:35](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/testing-the-training-data?u=76281980&t=95)** Let's see, this one perhaps.
>
> **[1:37](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/testing-the-training-data?u=76281980&t=97)** And then I'll grab this section here.
>
> **[1:40](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/testing-the-training-data?u=76281980&t=100)** So this is line four.
>
> **[1:42](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/testing-the-training-data?u=76281980&t=102)** And I'll just grab the last piece of this object and remove it and save the file.
>
> **[1:48](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/testing-the-training-data?u=76281980&t=108)** Then I'll go back to my notebook, and I'll go back to the first step here and reload the training data.
>
> **[1:53](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/testing-the-training-data?u=76281980&t=113)** And then go to the second step and run it again.
>
> **[1:56](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/testing-the-training-data?u=76281980&t=116)** So now, because there is an error, we find this message, example_missing_assistant_message one.
>
> **[2:04](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/testing-the-training-data?u=76281980&t=124)** So that's telling me there's something wrong on message one.
>
> **[2:08](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/testing-the-training-data?u=76281980&t=128)** and if I wanted to, I could advance this function so that it would tell me on which line the error is and so on.
>
> **[2:14](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/testing-the-training-data?u=76281980&t=134)** I haven't done that here, but it's technically possible.
>
> **[2:17](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/testing-the-training-data?u=76281980&t=137)** So just for consistency, I'll go and fix this error that I created, save the file again, go back up, reload the file, run the test, no errors found.
>
> **[2:28](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/testing-the-training-data?u=76281980&t=148)** All right, so that script tests to make sure the data is consistent.
>
> **[2:32](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/testing-the-training-data?u=76281980&t=152)** The next one makes sure our scripts stick within the token limits.
>
> **[2:36](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/testing-the-training-data?u=76281980&t=156)** Scroll down, you get get token counts.
>
> **[2:39](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/testing-the-training-data?u=76281980&t=159)** Again, I'll just run this.
>
> **[2:40](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/testing-the-training-data?u=76281980&t=160)** We're still running it on the validation file.
>
> **[2:42](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/testing-the-training-data?u=76281980&t=162)** And now we get a fairly detailed breakdown.
>
> **[2:45](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/testing-the-training-data?u=76281980&t=165)** Number of examples missing system message is zero, number of examples missing user message is zero.
>
> **[2:49](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/testing-the-training-data?u=76281980&t=169)** Then we get a distribution of the messages per example.
>
> **[2:54](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/testing-the-training-data?u=76281980&t=174)** We get distribution of tokens per example.
>
> **[2:56](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/testing-the-training-data?u=76281980&t=176)** You can see they're fairly low in this particular example.
>
> **[2:59](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/testing-the-training-data?u=76281980&t=179)** And then it says null examples may be over the 4,064 token limit.
>
> **[3:04](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/testing-the-training-data?u=76281980&t=184)** So that means everything is fine in my set, which means we can move on to the last test, which is to see how many tokens are we going to be spending when we run these tests.
>
> **[3:14](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/testing-the-training-data?u=76281980&t=194)** So I'll scroll down to the bottom here, cost estimation.
>
> **[3:18](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/testing-the-training-data?u=76281980&t=198)** I'll run this script.
>
> **[3:19](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/testing-the-training-data?u=76281980&t=199)** And at the bottom it'll say the dataset has 11,593 tokens that will be charged for during the training.
>
> **[3:26](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/testing-the-training-data?u=76281980&t=206)** By default, you'll train for three epochs, which means that the charge will be a total of 35,779 tokens.
>
> **[3:34](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/testing-the-training-data?u=76281980&t=214)** This is important, because when you do fine training, you are doing a lot of requests to the API.
>
> **[3:41](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/testing-the-training-data?u=76281980&t=221)** So fine-tuning will cost way more than regular interactions with the API.
>
> **[3:47](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/testing-the-training-data?u=76281980&t=227)** And the cost of each token for fine-tuning is higher than when you send a request to regular API, just like the cost of sending a request to a fine-tuned model is more expensive than to one of the regular models.
>
> **[3:59](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/testing-the-training-data?u=76281980&t=239)** Now, you'll notice that in this output, it doesn't tell you how much it'll cost.
>
> **[4:03](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/testing-the-training-data?u=76281980&t=243)** To figure out the actual charge, you need to take this number and then go to the pricing page for OpenAI and figure out how much each token or every thousand token costs, and then you can calculate the cost.
>
> **[4:14](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/testing-the-training-data?u=76281980&t=254)** Again, for my example, the cost will be minimal, because this is a very small example, but if you have a much larger example, the cost will be much higher.
>
> **[4:23](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/testing-the-training-data?u=76281980&t=263)** And if you're using validation data, you also have to calculate that into the process.
>
> **[4:28](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/testing-the-training-data?u=76281980&t=268)** All that said, this notebook lets you not only create your data, but also test your data, validate it, and make sure that you know how much it'll cost to do fine-tuning, which is why it's all packaged in one file.

> [!info]- Semantic Content
>
> **CLI Commands:** make (5), find (1)
> **Code Keywords:** this. (2), let (2), function (1), default, (1)
> **Env Vars:** api (3), json (1)
> **UI Navigation:** go to (2), scroll down (2)
> **Code Identifiers:** training_file_name (1), validation_file_name (1), example_missing_assistant_message (1)
> **Definitions:** is an  (1), means that (1), is a  (1)
> **Cross-References:** go back to (2)
> **Tools:** jupyter (1)

#### Creating a fine-tuning job in the playground
> [LinkedIn Learning](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-a-fine-tuning-job-in-the-playground?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-a-fine-tuning-job-in-the-playground?u=76281980&t=0)** - At this point I have my training data and my validation data, and that means it's finally time to fine tune a new model.
>
> **[0:07](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-a-fine-tuning-job-in-the-playground?u=76281980&t=7)** To do so, I first need to download these two files onto my computer.
>
> **[0:09](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-a-fine-tuning-job-in-the-playground?u=76281980&t=9)** So I'll highlight them and go to download here.
>
> **[0:13](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-a-fine-tuning-job-in-the-playground?u=76281980&t=13)** And once the files are on my computer, I'll go to platform.[openai.com](https://openai.com) and go to fine tuning.
>
> **[0:19](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-a-fine-tuning-job-in-the-playground?u=76281980&t=19)** Here you get a list of all your fine tuning models, including ones that didn't work.
>
> **[0:23](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-a-fine-tuning-job-in-the-playground?u=76281980&t=23)** So for example, at the top here you'll see here's one I canceled because I realized I uploaded the wrong file.
>
> **[0:28](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-a-fine-tuning-job-in-the-playground?u=76281980&t=28)** You can also filter by successful and failed if you want to.
>
> **[0:32](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-a-fine-tuning-job-in-the-playground?u=76281980&t=32)** And if you have any that are failed, you can find more information about why they failed here.
>
> **[0:36](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-a-fine-tuning-job-in-the-playground?u=76281980&t=36)** But I want to create a new fine tuned model, so I'll click on create.
>
> **[0:41](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-a-fine-tuning-job-in-the-playground?u=76281980&t=41)** From here, I first select a base model.
>
> **[0:44](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-a-fine-tuning-job-in-the-playground?u=76281980&t=44)** This is the model OpenAI will use as the baseline for fine tuning, and I can choose any of the existing models and any of my existing fine tuned models.
>
> **[0:55](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-a-fine-tuning-job-in-the-playground?u=76281980&t=55)** So you can see here we have babbage and davinci and gpt-3.5-turbo in different versions.
>
> **[1:00](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-a-fine-tuning-job-in-the-playground?u=76281980&t=60)** And there's also an option for gpt-4.
>
> **[1:03](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-a-fine-tuning-job-in-the-playground?u=76281980&t=63)** But as of this recording, if I click gpt-4 and scroll to the bottom, it says request access.
>
> **[1:09](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-a-fine-tuning-job-in-the-playground?u=76281980&t=69)** That's because this is an invite only feature and while OpenAI has said that they will open it to everyone, that hasn't happened so far.
>
> **[1:16](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-a-fine-tuning-job-in-the-playground?u=76281980&t=76)** That said, in testing a fine tuned model from gpt-3.5-turbo performs as well or better than gpt-4 and that's kind of the whole point of creating fine tuned models.
>
> **[1:28](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-a-fine-tuning-job-in-the-playground?u=76281980&t=88)** So you don't normally need the power of gpt-4 when you are doing fine tuning.
>
> **[1:34](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-a-fine-tuning-job-in-the-playground?u=76281980&t=94)** So I'm going to select gpt-3.5-turbo.
>
> **[1:36](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-a-fine-tuning-job-in-the-playground?u=76281980&t=96)** Now, just to reiterate, you can also choose one of your existing fine tuned models.
>
> **[1:41](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-a-fine-tuning-job-in-the-playground?u=76281980&t=101)** So that means if you have a fine tuned model that kind of works but isn't quite there, you can further fine tune it by creating a new model on top of it and you can also iterate through different versions to see which one works best.
>
> **[1:52](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-a-fine-tuning-job-in-the-playground?u=76281980&t=112)** It's actually kind of neat to build models on top of models on top of models and then play around with 'em and see how they behave.
>
> **[1:58](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-a-fine-tuning-job-in-the-playground?u=76281980&t=118)** But I digress.
>
> **[2:00](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-a-fine-tuning-job-in-the-playground?u=76281980&t=120)** The next step is to upload training data.
>
> **[2:01](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-a-fine-tuning-job-in-the-playground?u=76281980&t=121)** Here I can either upload a new piece of data or I can select from an existing one and then I have to go to the File ID or I can click browse files.
>
> **[2:10](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-a-fine-tuning-job-in-the-playground?u=76281980&t=130)** If I browse files, I go to the storage section of the platform and here I can see all the files I've uploaded.
>
> **[2:16](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-a-fine-tuning-job-in-the-playground?u=76281980&t=136)** I can then click on any one of these files and I get the File ID here.
>
> **[2:19](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-a-fine-tuning-job-in-the-playground?u=76281980&t=139)** So I can copy that name and paste it in here.
>
> **[2:23](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-a-fine-tuning-job-in-the-playground?u=76281980&t=143)** But I want to upload a new file.
>
> **[2:24](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-a-fine-tuning-job-in-the-playground?u=76281980&t=144)** So I'll say upload new, select and I want the training file.
>
> **[2:29](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-a-fine-tuning-job-in-the-playground?u=76281980&t=149)** Then I can optionally upload validation data.
>
> **[2:31](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-a-fine-tuning-job-in-the-playground?u=76281980&t=151)** Now you notice this is set to none by default, but I have the data so I might as well use it.
>
> **[2:36](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-a-fine-tuning-job-in-the-playground?u=76281980&t=156)** Here again, I can either upload new or select existing.
>
> **[2:39](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-a-fine-tuning-job-in-the-playground?u=76281980&t=159)** So I'll upload new, click to upload, and choose the validation data.
>
> **[2:44](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-a-fine-tuning-job-in-the-playground?u=76281980&t=164)** And here I want to point out an important thing.
>
> **[2:46](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-a-fine-tuning-job-in-the-playground?u=76281980&t=166)** When you are creating fine tuned models, there's a good chance that the first model you create isn't behaving the way you want it to, but you still have the validation data and it's valid.
>
> **[2:55](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-a-fine-tuning-job-in-the-playground?u=76281980&t=175)** That's one of the reasons why you have this option to use existing data because there's a good chance you'll try to fine tune a model and it doesn't do a good job.
>
> **[3:04](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-a-fine-tuning-job-in-the-playground?u=76281980&t=184)** And then you build a new training set, but you want to use the same validation data.
>
> **[3:08](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-a-fine-tuning-job-in-the-playground?u=76281980&t=188)** So if you've already uploaded it and you know that your validation data is good, you can just keep using the same validation data instead of uploading new files all the time.
>
> **[3:16](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-a-fine-tuning-job-in-the-playground?u=76281980&t=196)** In the next field, I can set a suffix and I recommend doing this because when you create a new fine tuned model, the name of that model is just the original base model plus a hashed number at the end, which makes sense to computers and doesn't make any sense to humans.
>
> **[3:31](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-a-fine-tuning-job-in-the-playground?u=76281980&t=211)** By adding a human language suffix, it's easier to identify the specific model you're building and that also means it's really important to set a suffix that you will understand and that does identify this particular model.
>
> **[3:42](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-a-fine-tuning-job-in-the-playground?u=76281980&t=222)** I'm going to call this one custreviews.
>
> **[3:46](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-a-fine-tuning-job-in-the-playground?u=76281980&t=226)** Finally, there are a couple of extra settings here.
>
> **[3:48](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-a-fine-tuning-job-in-the-playground?u=76281980&t=228)** Seed allows you to set a seed number for the generation of content.
>
> **[3:53](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-a-fine-tuning-job-in-the-playground?u=76281980&t=233)** This kicks in if you are doing multiple different versions of a fine tuned model and you want to make sure that everything is the same on OpenAI's end.
>
> **[4:01](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-a-fine-tuning-job-in-the-playground?u=76281980&t=241)** In that case you would set the same number for all the different models and the underlying platform should operate the same.
>
> **[4:08](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-a-fine-tuning-job-in-the-playground?u=76281980&t=248)** But if you're creating new models, there's no need to do this.
>
> **[4:11](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-a-fine-tuning-job-in-the-playground?u=76281980&t=251)** And finally, you have these hyper parameters where you can set the batch size, the learning rate multiplier, and the number of epochs.
>
> **[4:16](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-a-fine-tuning-job-in-the-playground?u=76281980&t=256)** The recommendation is to leave these on auto.
>
> **[4:19](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-a-fine-tuning-job-in-the-playground?u=76281980&t=259)** There are very few cases where you need to change them.
>
> **[4:21](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-a-fine-tuning-job-in-the-playground?u=76281980&t=261)** If you need more information, just hover over these i boxes and it'll explain what these are and you'll quickly realize this is mostly unnecessary unless you're doing something really advanced or the fine tuning model isn't working exactly as you like.
>
> **[4:36](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-a-fine-tuning-job-in-the-playground?u=76281980&t=276)** All right, all the settings are in place and I'll now click create.
>
> **[4:40](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-a-fine-tuning-job-in-the-playground?u=76281980&t=280)** This opens up a new panel where you can see the progress of your new fine tuned model.
>
> **[4:45](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-a-fine-tuning-job-in-the-playground?u=76281980&t=285)** And this is where I've warned you, fine tuning a model takes time.
>
> **[4:48](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-a-fine-tuning-job-in-the-playground?u=76281980&t=288)** For this dataset I'm using, it'll take at least 10 minutes and it can take a lot longer depending on how much traffic is happening on OpenAI servers.
>
> **[4:56](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-a-fine-tuning-job-in-the-playground?u=76281980&t=296)** So expect to wait a while before you can use this fine tuned model.
>
> **[5:01](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-a-fine-tuning-job-in-the-playground?u=76281980&t=301)** This interface gives you a lot of interesting information and you can see that progress is happening.
>
> **[5:05](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-a-fine-tuning-job-in-the-playground?u=76281980&t=305)** Because if you didn't have the interface, you wouldn't know if something got stalled.
>
> **[5:09](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-a-fine-tuning-job-in-the-playground?u=76281980&t=309)** And if you look at the interface, you can scroll down here and you'll see a running log of what's happening.
>
> **[5:15](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-a-fine-tuning-job-in-the-playground?u=76281980&t=315)** So it says the Java started and the files are validated and so on.
>
> **[5:19](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-a-fine-tuning-job-in-the-playground?u=76281980&t=319)** And as things progress, you'll get more and more information.
>
> **[5:22](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-a-fine-tuning-job-in-the-playground?u=76281980&t=322)** From this interface you can also cancel the job if you decided that you don't want to have this job after all.
>
> **[5:28](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-a-fine-tuning-job-in-the-playground?u=76281980&t=328)** If you do, it'll show up like this, canceled.
>
> **[5:31](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-a-fine-tuning-job-in-the-playground?u=76281980&t=331)** And finally, you can copy the job if you want to start over or you want to just change one factor, like for example, the training data.
>
> **[5:39](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-a-fine-tuning-job-in-the-playground?u=76281980&t=339)** I'm going to stop the video and leave this running.
>
> **[5:40](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-a-fine-tuning-job-in-the-playground?u=76281980&t=340)** And then once the process is complete, I'll start it again and pick up where we left off.
>
> **[5:45](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-a-fine-tuning-job-in-the-playground?u=76281980&t=345)** Some time has passed and my fine tuning job has succeeded as signified by the succeeded mark up here.
>
> **[5:52](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-a-fine-tuning-job-in-the-playground?u=76281980&t=352)** Now we get all the information we need about this fine tuning job, from the model name, you can see it up here.
>
> **[5:58](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-a-fine-tuning-job-in-the-playground?u=76281980&t=358)** And the custom suffix I put in is crammed here in between the other pieces that we have, the original model, the root model, then it's a personal account, this is the suffix and this is a hash number for the suffix.
>
> **[6:12](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-a-fine-tuning-job-in-the-playground?u=76281980&t=372)** So if I want to call this fine tune model, I call this entire name here.
>
> **[6:16](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-a-fine-tuning-job-in-the-playground?u=76281980&t=376)** We also get a breakdown below of the information.
>
> **[6:19](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-a-fine-tuning-job-in-the-playground?u=76281980&t=379)** So here we have the job id, we have the suffix, we have the base model, the output model, and when it was created.
>
> **[6:25](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-a-fine-tuning-job-in-the-playground?u=76281980&t=385)** Scrolling further down, it tells us how many tokens went into this training.
>
> **[6:29](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-a-fine-tuning-job-in-the-playground?u=76281980&t=389)** It's 34,000.
>
> **[6:30](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-a-fine-tuning-job-in-the-playground?u=76281980&t=390)** You'll remember back when we counted the tokens, this is very close to that count.
>
> **[6:35](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-a-fine-tuning-job-in-the-playground?u=76281980&t=395)** The training went over three epochs, meaning the system went through the same training data three times.
>
> **[6:42](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-a-fine-tuning-job-in-the-playground?u=76281980&t=402)** The batch size was one, meaning it only went through one batch.
>
> **[6:45](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-a-fine-tuning-job-in-the-playground?u=76281980&t=405)** And the seed number that was used is this large number here.
>
> **[6:48](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-a-fine-tuning-job-in-the-playground?u=76281980&t=408)** So if you ever wanted to repeat this training with the exact same settings, you would use this seed number here.
>
> **[6:55](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-a-fine-tuning-job-in-the-playground?u=76281980&t=415)** The system also created a set of checkpoints, and I'll talk about that in the next video.
>
> **[7:00](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-a-fine-tuning-job-in-the-playground?u=76281980&t=420)** So for now, we'll keep scrolling down.
>
> **[7:01](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-a-fine-tuning-job-in-the-playground?u=76281980&t=421)** Under file we see which training file and validation file was used, and then we have a stat of how the training went.
>
> **[7:09](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-a-fine-tuning-job-in-the-playground?u=76281980&t=429)** So this has to do with whether or not the training actually works and where it fails.
>
> **[7:14](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-a-fine-tuning-job-in-the-playground?u=76281980&t=434)** Overall, the stats here are very good.
>
> **[7:16](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-a-fine-tuning-job-in-the-playground?u=76281980&t=436)** And then at the bottom we get a full breakdown of every step of the process.
>
> **[7:21](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-a-fine-tuning-job-in-the-playground?u=76281980&t=441)** And this is where you see how long it takes.
>
> **[7:22](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-a-fine-tuning-job-in-the-playground?u=76281980&t=442)** So I started this training batch at 52 minutes past 4:00 and it finished at six minutes past 5:00.
>
> **[7:30](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-a-fine-tuning-job-in-the-playground?u=76281980&t=450)** So that is roughly like 13, 14 minutes.
>
> **[7:35](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-a-fine-tuning-job-in-the-playground?u=76281980&t=455)** Like I said, it depends on whatever's happening at OpenAI.
>
> **[7:38](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-a-fine-tuning-job-in-the-playground?u=76281980&t=458)** And sometimes it can take longer than other times, and it also depends greatly on how much data you're putting into the system.
>
> **[7:44](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-a-fine-tuning-job-in-the-playground?u=76281980&t=464)** But what matters is I now have a fully fine tuned model I can work with.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (4), finally, (3), new, (2), default, (1), this. (1)
> **UI Navigation:** go to (5), click on (2), scroll down (1)
> **CLI Commands:** make (2), find (1)
> **Versions:** 3.5 (3)
> **Ports:** :00 (2)
> **Cross-References:** in the next (2)
> **Definitions:** is an  (1), is a  (1)
> **Analogies:** for example (2)

#### Using a fine-tuned model in the playground
> [LinkedIn Learning](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/using-a-fine-tuned-model-in-the-playground?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/using-a-fine-tuned-model-in-the-playground?u=76281980&t=0)** - [Instructor] Now it's time for maybe the most crucial step in the fine-tuning process, testing because even though we've fine-tuned a model, there's no guarantee that fine-tuning is actually doing what we want.
>
> **[0:11](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/using-a-fine-tuned-model-in-the-playground?u=76281980&t=11)** In fact, we can't figure out whether or not the fine-tuning worked the way we need it to until we build the fine-tuned model and test it.
>
> **[0:18](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/using-a-fine-tuned-model-in-the-playground?u=76281980&t=18)** Here's the easiest way to do that.
>
> **[0:21](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/using-a-fine-tuned-model-in-the-playground?u=76281980&t=21)** First, go to the playground and open a new chat.
>
> **[0:24](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/using-a-fine-tuned-model-in-the-playground?u=76281980&t=24)** Then in the system message, put in the exact same system message you have in your fine-tuning data 'cause that's the system message you want to work.
>
> **[0:32](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/using-a-fine-tuned-model-in-the-playground?u=76281980&t=32)** In the user message, put in the type of message you would normally see in this request.
>
> **[0:37](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/using-a-fine-tuned-model-in-the-playground?u=76281980&t=37)** So I'll paste something in here and then let's run this against the standard models.
>
> **[0:42](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/using-a-fine-tuned-model-in-the-playground?u=76281980&t=42)** In my case, that's GPT-3.5-Turbo, submit.
>
> **[0:46](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/using-a-fine-tuned-model-in-the-playground?u=76281980&t=46)** And here I get an output, rating, five, sentiment, positive.
>
> **[0:50](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/using-a-fine-tuned-model-in-the-playground?u=76281980&t=50)** This is not what I want.
>
> **[0:52](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/using-a-fine-tuned-model-in-the-playground?u=76281980&t=52)** Remember, I want the sentiment to be a specific phrase.
>
> **[0:56](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/using-a-fine-tuned-model-in-the-playground?u=76281980&t=56)** Now let's see what happens when I switch the model over to my new fine-tuned model.
>
> **[1:00](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/using-a-fine-tuned-model-in-the-playground?u=76281980&t=60)** So I'll have to scroll down here a bit because I have quite a few fine-tuned models.
>
> **[1:05](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/using-a-fine-tuned-model-in-the-playground?u=76281980&t=65)** It should be down here, customer reviews.
>
> **[1:08](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/using-a-fine-tuned-model-in-the-playground?u=76281980&t=68)** So I'll pick this one, and run submit again.
>
> **[1:15](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/using-a-fine-tuned-model-in-the-playground?u=76281980&t=75)** You'll notice it takes a little more time than it did when I was using the regular model because this is a custom, fine-tuned model.
>
> **[1:22](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/using-a-fine-tuned-model-in-the-playground?u=76281980&t=82)** But what matters is the output, and this output is exactly what I want.
>
> **[1:26](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/using-a-fine-tuned-model-in-the-playground?u=76281980&t=86)** You can see that even though we're using this generic system message, I'm getting a very specialized output.
>
> **[1:32](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/using-a-fine-tuned-model-in-the-playground?u=76281980&t=92)** And you also see that even though the output is JSON, it's formatted differently from what the assistant output when we were using GPT-3.5-Turbo.
>
> **[1:42](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/using-a-fine-tuned-model-in-the-playground?u=76281980&t=102)** That's because in my training data, this layout here on a single line is the format I trained it on.
>
> **[1:50](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/using-a-fine-tuned-model-in-the-playground?u=76281980&t=110)** So therefore, the fine-tuning is forcing the system to follow my exact specifications.
>
> **[1:55](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/using-a-fine-tuned-model-in-the-playground?u=76281980&t=115)** And that's important to know because if you want a specific type of layout of your code, you need to inject that layout into your training model.
>
> **[2:04](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/using-a-fine-tuned-model-in-the-playground?u=76281980&t=124)** Otherwise you'll get some other layout like what I have here.
>
> **[2:07](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/using-a-fine-tuned-model-in-the-playground?u=76281980&t=127)** Now that I see everything is working on this example, I should do more testing to make sure it's consistent.
>
> **[2:13](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/using-a-fine-tuned-model-in-the-playground?u=76281980&t=133)** And that testing should include different types of user inputs, different types of settings in the model settings, and also whether or not changing the system message changes the output significantly.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), case, (1), switch (1)
> **Env Vars:** gpt (2), json (1)
> **Versions:** 3.5 (2)
> **UI Navigation:** go to (1), scroll down (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Testing epoch-based checkpoints
> [LinkedIn Learning](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/testing-epoch-based-checkpoints?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/testing-epoch-based-checkpoints?u=76281980&t=0)** - [Instructor] When I opened the model selector in the previous video, you may have noticed there are actually several different versions of this new fine-tuned model.
>
> **[0:08](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/testing-epoch-based-checkpoints?u=76281980&t=8)** We have the one I'm currently using, which is just the name of the model, and then we have these three.
>
> **[0:13](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/testing-epoch-based-checkpoints?u=76281980&t=13)** Step 100, step 200, and step 300.
>
> **[0:18](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/testing-epoch-based-checkpoints?u=76281980&t=18)** What are these?
>
> **[0:20](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/testing-epoch-based-checkpoints?u=76281980&t=20)** If we go back to the fine-tuning panel and open the fine-tuned model, you'll remember down here it said checkpoints.
>
> **[0:26](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/testing-epoch-based-checkpoints?u=76281980&t=26)** And if we look at the names here, you can see we have three different checkpoints.
>
> **[0:31](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/testing-epoch-based-checkpoints?u=76281980&t=31)** These checkpoints are automatically generated during the fine-tuning process, and they mark the end of each epoch.
>
> **[0:37](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/testing-epoch-based-checkpoints?u=76281980&t=37)** An epoch is one cycle of the entire material.
>
> **[0:41](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/testing-epoch-based-checkpoints?u=76281980&t=41)** So in this fine tuning process, we had three epochs, and there I have three checkpoints, one after 100, one after 200, and one after 300.
>
> **[0:51](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/testing-epoch-based-checkpoints?u=76281980&t=51)** We can use these checkpoints to see what happened during the fine-tuning process.
>
> **[0:56](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/testing-epoch-based-checkpoints?u=76281980&t=56)** So if I go back in the playground, I can go down and send the same request to the three different checkpoints.
>
> **[1:03](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/testing-epoch-based-checkpoints?u=76281980&t=63)** I'll scroll down and find them first.
>
> **[1:04](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/testing-epoch-based-checkpoints?u=76281980&t=64)** So here we have the regular one.
>
> **[1:06](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/testing-epoch-based-checkpoints?u=76281980&t=66)** This is the fully fine-tuned model. I'll click submit.
>
> **[1:10](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/testing-epoch-based-checkpoints?u=76281980&t=70)** Then I'll go in again and find the one that's marked 100.
>
> **[1:15](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/testing-epoch-based-checkpoints?u=76281980&t=75)** So this is after just one cycle through the training data.
>
> **[1:19](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/testing-epoch-based-checkpoints?u=76281980&t=79)** Click submit, let's see what happens.
>
> **[1:22](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/testing-epoch-based-checkpoints?u=76281980&t=82)** What you see here is because the training data is fairly basic, I don't need to go through all three epochs to be able to get the results I want.
>
> **[1:32](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/testing-epoch-based-checkpoints?u=76281980&t=92)** And that's important because if I'm testing this out to see if I can get the system to do something, and I now know I don't need to run through three epochs, the next time I do this type of training, I'll choose just one epoch and save a lot of time and a lot of tokens in the process.

> [!info]- Semantic Content
>
> **CLI Commands:** find (2)
> **Cross-References:** previous video (1), go back to (1)
> **UI Navigation:** open the (1), scroll down (1)
> **Code Keywords:** let (1)
> **Speakers:** - [instructor] (1)


### 2. Advanced Tools and Features

#### Fine-tuning through the API
> [LinkedIn Learning](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/fine-tuning-through-the-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/fine-tuning-through-the-api?u=76281980&t=0)** - [Instructor] The fine tuning page on platform.[openai.com](https://openai.com) is actually a user interface to the OpenAI API.
>
> **[0:06](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/fine-tuning-through-the-api?u=76281980&t=6)** And in this chapter, we'll perform the same operations using that API directly.
>
> **[0:11](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/fine-tuning-through-the-api?u=76281980&t=11)** Doing so, remember there are several discreet steps to fine tuning.
>
> **[0:15](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/fine-tuning-through-the-api?u=76281980&t=15)** First, you prepare your data.
>
> **[0:16](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/fine-tuning-through-the-api?u=76281980&t=16)** We've already done that, so we don't have to repeat that process.
>
> **[0:19](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/fine-tuning-through-the-api?u=76281980&t=19)** Second, you upload those training files into the OpenAI API, so it becomes available to the system.
>
> **[0:26](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/fine-tuning-through-the-api?u=76281980&t=26)** Third, you perform the actual fine tuning process, and fourth, you interact with the fine tune model to see if you need to make any changes.
>
> **[0:34](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/fine-tuning-through-the-api?u=76281980&t=34)** We'll walk through all of those steps in this chapter and just like before, I've created a Jupyter Notebook that breaks everything down.
>
> **[0:40](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/fine-tuning-through-the-api?u=76281980&t=40)** You'll find it in the exercise files.
>
> **[0:42](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/fine-tuning-through-the-api?u=76281980&t=42)** It's called fine Tune Flow, and it has a complete setup including documentation on what is happening and links to all the different API calls.
>
> **[0:50](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/fine-tuning-through-the-api?u=76281980&t=50)** For further information.
>
> **[0:51](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/fine-tuning-through-the-api?u=76281980&t=51)** OpenAI has a fine tuning guide and a full API reference breaking down everything we're going to do here and more.

> [!info]- Semantic Content
>
> **Env Vars:** api (5)
> **CLI Commands:** make (1), find (1)
> **Code Keywords:** interface (1)
> **URLs:** [openai.com](https://openai.com) (1)
> **Documentation:** api reference (1)
> **Tools:** jupyter (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** just like (1)

#### Uploading training data to the API
> [LinkedIn Learning](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/uploading-training-data-to-the-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/uploading-training-data-to-the-api?u=76281980&t=0)** - [Instructor] The first step in the fine-tuning process is to generate the training and validation files.
>
> **[0:04](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/uploading-training-data-to-the-api?u=76281980&t=4)** I already covered this in the previous chapter, and I have the files sitting here in Codespaces under the data folder.
>
> **[0:09](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/uploading-training-data-to-the-api?u=76281980&t=9)** If you don't have these files, or you started on this chapter, and didn't watch the previous one, go back to the previous chapter and watch video number two, where I break down how to create these training files.
>
> **[0:19](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/uploading-training-data-to-the-api?u=76281980&t=19)** Now we're going to upload these files using the OpenAI API, and to do that, you need the OpenAI API key.
>
> **[0:25](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/uploading-training-data-to-the-api?u=76281980&t=25)** In the exercise files video at the very top of the course, I explained how to set up this key.
>
> **[0:30](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/uploading-training-data-to-the-api?u=76281980&t=30)** You can see I've already set it up.
>
> **[0:32](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/uploading-training-data-to-the-api?u=76281980&t=32)** Again, if you haven't done this step, go back and watch the second video of this course, where I explain how to complete this step.
>
> **[0:39](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/uploading-training-data-to-the-api?u=76281980&t=39)** Once you have the.env file with the API key, you're ready to move to the second step.
>
> **[0:45](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/uploading-training-data-to-the-api?u=76281980&t=45)** Fine-tune-flow.ipynb is a Jupyter notebook, and to start the process, we need to import all the packages that the code depends on.
>
> **[0:54](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/uploading-training-data-to-the-api?u=76281980&t=54)** So I'll go down to this first code block, and I can either hit shift return, or I can click on this play button here to play out the code.
>
> **[1:02](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/uploading-training-data-to-the-api?u=76281980&t=62)** The first time you do this, you always have to select an environment for the code to run in, so I'm going to select Python.
>
> **[1:08](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/uploading-training-data-to-the-api?u=76281980&t=68)** Then the code runs, and it'll take a little bit of time on this first code block because the Python environment has to be configured and set up.
>
> **[1:15](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/uploading-training-data-to-the-api?u=76281980&t=75)** Once the timer down here in the corner is completed, you know that all the packages have been imported and everything is working properly.
>
> **[1:21](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/uploading-training-data-to-the-api?u=76281980&t=81)** Next, we set up the data.
>
> **[1:23](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/uploading-training-data-to-the-api?u=76281980&t=83)** Here we're creating variable names for the different data files.
>
> **[1:27](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/uploading-training-data-to-the-api?u=76281980&t=87)** So, I'll hit shift return to run that block.
>
> **[1:30](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/uploading-training-data-to-the-api?u=76281980&t=90)** Then we get to the first step of this process, which is to upload the files.
>
> **[1:33](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/uploading-training-data-to-the-api?u=76281980&t=93)** Here, I'm using the client files create method to upload the files into the API.
>
> **[1:38](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/uploading-training-data-to-the-api?u=76281980&t=98)** The same methods are also provided in the OpenAI node library if you prefer JavaScript.
>
> **[1:45](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/uploading-training-data-to-the-api?u=76281980&t=105)** In this code, I'm opening each of the files, so training and validation, and then using the client files create method to pass the files in.
>
> **[1:53](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/uploading-training-data-to-the-api?u=76281980&t=113)** And I append this attribute, purpose fine tune, to tell the system I'm going to use these for fine tuning.
>
> **[2:01](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/uploading-training-data-to-the-api?u=76281980&t=121)** I'll run this code block, scroll up so you can see the response.
>
> **[2:05](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/uploading-training-data-to-the-api?u=76281980&t=125)** And here I get the training file ID and validation file ID.
>
> **[2:10](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/uploading-training-data-to-the-api?u=76281980&t=130)** These are the IDs for the files that now exist inside the OpenAI storage system.
>
> **[2:16](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/uploading-training-data-to-the-api?u=76281980&t=136)** And I'm going to refer back to these IDs anytime I want to refer back to the files.
>
> **[2:20](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/uploading-training-data-to-the-api?u=76281980&t=140)** Now scrolling up into the code, you'll see I've saved these IDs as training file ID, and validation file ID, so we can use them later on in the code without having to copy and paste it in anywhere.

> [!info]- Semantic Content
>
> **Env Vars:** api (4)
> **CLI Commands:** python (2), node (1)
> **Code Keywords:** return, (1), this, (1), pass (1)
> **Cross-References:** previous chapter (2), go back to (1)
> **Prerequisites:** set up (3)
> **UI Navigation:** click on (1), scroll up (1)
> **File Paths:** the.env (1)
> **Tools:** jupyter (1)

#### Creating a fine-tuning job through the API
> [LinkedIn Learning](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-a-fine-tuning-job-through-the-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-a-fine-tuning-job-through-the-api?u=76281980&t=0)** - [Instructor] Now we can start the fine tuning job and that's done using the client.find_tuning.jobs.create () This method has two mandatory properties, model and training file and a set of optional properties, validation file, suffix, seed, batch size, learning rate, multiplier, and an epochs and you'll notice these are the same properties you saw in the UI interface that we used inside platform lot [openai.com](https://openai.com).
>
> **[0:28](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-a-fine-tuning-job-through-the-api?u=76281980&t=28)** Scrolling down, here's a code log with an example of how we can do this.
>
> **[0:32](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-a-fine-tuning-job-through-the-api?u=76281980&t=32)** I set up a response.
>
> **[0:33](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-a-fine-tuning-job-through-the-api?u=76281980&t=33)** This is a container for the entire process.
>
> **[0:36](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-a-fine-tuning-job-through-the-api?u=76281980&t=36)** Then I call client.fine_tuning jobs.create, I pass in the training file with the training file id, the validation file with the validation file id, then the model id, so this can be any model including previously fine tuned models.
>
> **[0:49](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-a-fine-tuning-job-through-the-api?u=76281980&t=49)** And then finally I set up a suffix so it's easier to find the build after it's complete.
>
> **[0:54](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-a-fine-tuning-job-through-the-api?u=76281980&t=54)** Then I go in and grab response and pull out the ID and set it as a job ID and I output the response ID and the response status.
>
> **[1:04](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-a-fine-tuning-job-through-the-api?u=76281980&t=64)** Let's run this and see what happens.
>
> **[1:08](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-a-fine-tuning-job-through-the-api?u=76281980&t=68)** When the request is accepted by the API, I get these two pieces of data in return, the job ID, which is what I'll use to refer back to the job anytime I want to query it and the current status, which right now is validating files.
>
> **[1:22](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-a-fine-tuning-job-through-the-api?u=76281980&t=82)** You'll remember back when we were doing this through the UI, there was this section down at the bottom with messages.
>
> **[1:27](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-a-fine-tuning-job-through-the-api?u=76281980&t=87)** Well, these are the same messages.
>
> **[1:29](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-a-fine-tuning-job-through-the-api?u=76281980&t=89)** So right now it says that is created the fine tuning job and then here we have validation file and validating training file.
>
> **[1:36](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-a-fine-tuning-job-through-the-api?u=76281980&t=96)** So validating files is the status we're currently at.
>
> **[1:40](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-a-fine-tuning-job-through-the-api?u=76281980&t=100)** You'll also notice when I go back into the fine tuning page on platform.[openai.com](https://openai.com), up here we now have that new fine tuning job that I just registered through the API because like I said, this is a user interface to the API.
>
> **[1:54](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-a-fine-tuning-job-through-the-api?u=76281980&t=114)** So I started the process over in code, and the process now appears inside the platform so I can see what's happening.
>
> **[2:01](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-a-fine-tuning-job-through-the-api?u=76281980&t=121)** That also means I can now open this job here and see what's happening from the platform.
>
> **[2:06](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/creating-a-fine-tuning-job-through-the-api?u=76281980&t=126)** So I don't have to use the API once I've started the process.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (2), this. (1), pass (1), let (1), return, (1)
> **Env Vars:** api (4)
> **Code Identifiers:** find_tuning (1), fine_tuning (1)
> **URLs:** [openai.com](https://openai.com) (2)
> **Definitions:** is a  (2)
> **Prerequisites:** set up (2)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### Retrieving a fine-tuning job and checking the status
> [LinkedIn Learning](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/retrieving-a-fine-tuning-job-and-checking-the-status?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/retrieving-a-fine-tuning-job-and-checking-the-status?u=76281980&t=0)** - Creating a new fine tuned model takes time because the OpenAI system has to go through all your training data and all your validation data and then usually run that through multiple epochs.
>
> **[0:11](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/retrieving-a-fine-tuning-job-and-checking-the-status?u=76281980&t=11)** So depending on how big your training data is and also how much traffic is happening on the OpenAI servers and other factors, it can take anywhere from 10 minutes to a lot longer.
>
> **[0:21](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/retrieving-a-fine-tuning-job-and-checking-the-status?u=76281980&t=21)** And crucially, you won't know how long it'll take until the process is done.
>
> **[0:27](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/retrieving-a-fine-tuning-job-and-checking-the-status?u=76281980&t=27)** So if you are building software over the API that runs a fine tune process and then immediately act on that fine tuned model, you need to go check on the status of your fine tuning job to make sure that the fine tuning job is actually done before you try to go to the next steps.
>
> **[0:44](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/retrieving-a-fine-tuning-job-and-checking-the-status?u=76281980&t=44)** And you can do that through the OpenAI API.
>
> **[0:47](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/retrieving-a-fine-tuning-job-and-checking-the-status?u=76281980&t=47)** Checking on the status is done using the client fine-tuning jobs retrieve method.
>
> **[0:52](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/retrieving-a-fine-tuning-job-and-checking-the-status?u=76281980&t=52)** If you pass this method as is without any parameters, you get a list of all the available fine tuned jobs.
>
> **[0:59](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/retrieving-a-fine-tuning-job-and-checking-the-status?u=76281980&t=59)** If you pass in the job ID, you get information about that particular job.
>
> **[1:03](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/retrieving-a-fine-tuning-job-and-checking-the-status?u=76281980&t=63)** So that's what I've done here in the code block.
>
> **[1:05](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/retrieving-a-fine-tuning-job-and-checking-the-status?u=76281980&t=65)** I'm calling in client, fine tuning jobs retrieve job id, and that job ID is what we got in return when we started the fine tuning process.
>
> **[1:16](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/retrieving-a-fine-tuning-job-and-checking-the-status?u=76281980&t=76)** Running this code block, I get a huge object in return with lots of information and I pulled out three crucial pieces here, the job id, the status, and the trained tokens.
>
> **[1:26](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/retrieving-a-fine-tuning-job-and-checking-the-status?u=76281980&t=86)** Now, because the job isn't done yet, all I'm getting now is the status is running and trained tokens none because we haven't finished the process.
>
> **[1:35](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/retrieving-a-fine-tuning-job-and-checking-the-status?u=76281980&t=95)** Once the process is done, you'll actually get a number here.
>
> **[1:38](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/retrieving-a-fine-tuning-job-and-checking-the-status?u=76281980&t=98)** Seeing this, you also notice we're not getting enough information here.
>
> **[1:41](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/retrieving-a-fine-tuning-job-and-checking-the-status?u=76281980&t=101)** We can see that the status is running, but we don't know what's happening.
>
> **[1:44](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/retrieving-a-fine-tuning-job-and-checking-the-status?u=76281980&t=104)** So it could be useful to know which events have taken place and we can find that out by calling client fine tuning jobs list events.
>
> **[1:53](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/retrieving-a-fine-tuning-job-and-checking-the-status?u=76281980&t=113)** This method has the following parameters, fine tuning job id, then limits, that's the maximum number of events to retrieve.
>
> **[2:01](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/retrieving-a-fine-tuning-job-and-checking-the-status?u=76281980&t=121)** And finally after, which works with limit so that you can paginate the responses.
>
> **[2:06](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/retrieving-a-fine-tuning-job-and-checking-the-status?u=76281980&t=126)** This is because in some cases when you're running a very large fine tuning job, there may be many, many, many, many, many, many, many, many, many stages of that job.
>
> **[2:15](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/retrieving-a-fine-tuning-job-and-checking-the-status?u=76281980&t=135)** And if you try to list them all out, it'll be impossible to parse.
>
> **[2:17](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/retrieving-a-fine-tuning-job-and-checking-the-status?u=76281980&t=137)** So this allows you to do things like build an interface on top of it where you have pagination My fine tuning job is pretty straightforward, so I'll just call list events and pass in the job id and see what I get in return.
>
> **[2:31](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/retrieving-a-fine-tuning-job-and-checking-the-status?u=76281980&t=151)** Here we get a breakdown of the current training steps.
>
> **[2:34](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/retrieving-a-fine-tuning-job-and-checking-the-status?u=76281980&t=154)** I passed in training data with 100 items and it's going to run for three epochs, meaning we have 300 total runs for the training and currently I am at number 105.
>
> **[2:45](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/retrieving-a-fine-tuning-job-and-checking-the-status?u=76281980&t=165)** You'll also see that in most of these, there is no training loss or other issues.
>
> **[2:50](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/retrieving-a-fine-tuning-job-and-checking-the-status?u=76281980&t=170)** And when there is, I get information about it here.
>
> **[2:52](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/retrieving-a-fine-tuning-job-and-checking-the-status?u=76281980&t=172)** So here it says full validation losses 0.21.
>
> **[2:57](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/retrieving-a-fine-tuning-job-and-checking-the-status?u=76281980&t=177)** Again, this is the information you'll get if you go over here in the platform.[openai.com](https://openai.com), and you can see a graph showing the same information.
>
> **[3:06](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/retrieving-a-fine-tuning-job-and-checking-the-status?u=76281980&t=186)** You can also click on metrics and then you get the exact same information that you saw in the API.
>
> **[3:11](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/retrieving-a-fine-tuning-job-and-checking-the-status?u=76281980&t=191)** So this is the UI version of this same data.
>
> **[3:15](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/retrieving-a-fine-tuning-job-and-checking-the-status?u=76281980&t=195)** What I get from this is the training process is still going and it'll still take a bit of time.
>
> **[3:20](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/retrieving-a-fine-tuning-job-and-checking-the-status?u=76281980&t=200)** So this is the moment where you step away from your computer and go do something else and come back in say 10 minutes to see if the process has been completed.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (3), this, (1), interface (1), return. (1)
> **Env Vars:** api (3)
> **CLI Commands:** make (1), find (1)
> **UI Navigation:** go to (1), click on (1)
> **URLs:** [openai.com](https://openai.com) (1)
> **Versions:** 0.21 (1)
> **Speakers:** - creating (1)

#### Getting the model name once the job is completed
> [LinkedIn Learning](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/getting-the-model-name-once-the-job-is-completed?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/getting-the-model-name-once-the-job-is-completed?u=76281980&t=0)** - [Instructor] Some time has passed and I want to check if my job is now completed.
>
> **[0:03](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/getting-the-model-name-once-the-job-is-completed?u=76281980&t=3)** So I'll rerun this request to retrieve job id.
>
> **[0:07](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/getting-the-model-name-once-the-job-is-completed?u=76281980&t=7)** Let's see what happens.
>
> **[0:08](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/getting-the-model-name-once-the-job-is-completed?u=76281980&t=8)** Now I get the same job ID and then status succeeded and train tokens 34,179.
>
> **[0:14](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/getting-the-model-name-once-the-job-is-completed?u=76281980&t=14)** So this tells me the job is now completed.
>
> **[0:17](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/getting-the-model-name-once-the-job-is-completed?u=76281980&t=17)** I can go and check further by running this line here, which gives me all the events, and then I get more information.
>
> **[0:24](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/getting-the-model-name-once-the-job-is-completed?u=76281980&t=24)** So here you can see I've created a new fine tuned model.
>
> **[0:27](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/getting-the-model-name-once-the-job-is-completed?u=76281980&t=27)** It has this long name here.
>
> **[0:29](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/getting-the-model-name-once-the-job-is-completed?u=76281980&t=29)** Then I also have checkpoints for step 100, 200, and 300, and I get the model name for each of those.
>
> **[0:36](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/getting-the-model-name-once-the-job-is-completed?u=76281980&t=36)** That means I can now start using this model.
>
> **[0:40](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/getting-the-model-name-once-the-job-is-completed?u=76281980&t=40)** And to do that, I'll use retrieve again and just get the fine tuned model name so that I can refer to it later in my code.
>
> **[0:47](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/getting-the-model-name-once-the-job-is-completed?u=76281980&t=47)** I'll do that down here.
>
> **[0:50](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/getting-the-model-name-once-the-job-is-completed?u=76281980&t=50)** This gives me just the name.
>
> **[0:52](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/getting-the-model-name-once-the-job-is-completed?u=76281980&t=52)** It's this long name here, and I can now use this name either to run requests against the model, to use it as a regular model, or to fine tune a new model on top of the existing new fine tuned model.
>
> **[1:05](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/getting-the-model-name-once-the-job-is-completed?u=76281980&t=65)** So I basically refine tune it or improve the fine tuning.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1)
> **Cross-References:** later in (1)
> **Speakers:** - [instructor] (1)

#### Using the fine-tuned model through the API
> [LinkedIn Learning](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/using-the-fine-tuned-model-through-the-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/using-the-fine-tuned-model-through-the-api?u=76281980&t=0)** - [Instructor] With the new model name in hand, it's time to test the model.
>
> **[0:04](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/using-the-fine-tuned-model-through-the-api?u=76281980&t=4)** And if you've ever used the OpenAI API before, we're now firmly back in familiar territory.
>
> **[0:09](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/using-the-fine-tuned-model-through-the-api?u=76281980&t=9)** Here we're going to use the client.chat.completions.create() method, which is the standard create method you use anytime you want to create a chat with OpenAI.
>
> **[0:18](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/using-the-fine-tuned-model-through-the-api?u=76281980&t=18)** And the only difference between this request and request you've done before is in place of putting in the regular model name, so ChatGPT-3.5 Turbo, you put in this giant new fine tuned model name.
>
> **[0:32](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/using-the-fine-tuned-model-through-the-api?u=76281980&t=32)** Everything else stays the same as evidenced down here.
>
> **[0:37](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/using-the-fine-tuned-model-through-the-api?u=76281980&t=37)** Test messages, we pass in a system message and a user message.
>
> **[0:41](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/using-the-fine-tuned-model-through-the-api?u=76281980&t=41)** And you'll notice here that the system message matches the system message we had in the training data.
>
> **[0:46](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/using-the-fine-tuned-model-through-the-api?u=76281980&t=46)** So if you've lost that system message, you can go back here and look at the training data.
>
> **[0:50](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/using-the-fine-tuned-model-through-the-api?u=76281980&t=50)** Here we have the system message.
>
> **[0:51](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/using-the-fine-tuned-model-through-the-api?u=76281980&t=51)** Just copy that system message out, and place it in as a system message.
>
> **[0:54](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/using-the-fine-tuned-model-through-the-api?u=76281980&t=54)** And then, we're passing in a restaurant review.
>
> **[0:58](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/using-the-fine-tuned-model-through-the-api?u=76281980&t=58)** I send all this information to client.chat.completions.create, passing in the model name for the fine tuned model, the messages, setting the temperature to zero, and setting the max tokens to 500.
>
> **[1:10](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/using-the-fine-tuned-model-through-the-api?u=76281980&t=70)** I specifically set the temperature to zero because I don't want a lot of variance here because I want consistent output.
>
> **[1:16](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/using-the-fine-tuned-model-through-the-api?u=76281980&t=76)** By the way, if you want to learn more about how to make nondeterministic APIs more deterministic, I have an entire course for you in the library.
>
> **[1:22](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/using-the-fine-tuned-model-through-the-api?u=76281980&t=82)** Just search for nondeterministic APIs.
>
> **[1:26](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/using-the-fine-tuned-model-through-the-api?u=76281980&t=86)** Anyway, let's pass this request onto the API and see what happens.
>
> **[1:32](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/using-the-fine-tuned-model-through-the-api?u=76281980&t=92)** The request completes and out I get the JSON object I train the data to return to me.
>
> **[1:37](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/using-the-fine-tuned-model-through-the-api?u=76281980&t=97)** Rating 3, Sentiment, Meh Meal.
>
> **[1:40](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/using-the-fine-tuned-model-through-the-api?u=76281980&t=100)** And that means my fine tuned model is now working as expected through the API and I can build software around it.

> [!info]- Semantic Content
>
> **Env Vars:** api (3), json (1)
> **Code Keywords:** pass (2), let (1)
> **CLI Commands:** make (1)
> **Versions:** 3.5 (1)
> **Speakers:** - [instructor] (1)

#### Cancelling a fine-tuning job
> [LinkedIn Learning](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/cancelling-a-fine-tuning-job?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/cancelling-a-fine-tuning-job?u=76281980&t=0)** - [Instructor] There is one more step on this journey and I've added in information about it without giving you the actual code, because I don't want you to accidentally run this code in the notebook.
>
> **[0:09](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/cancelling-a-fine-tuning-job?u=76281980&t=9)** That's also why this step has number X instead of a step number.
>
> **[0:13](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/cancelling-a-fine-tuning-job?u=76281980&t=13)** Sometimes when you start creating a fine-tuning job, you realize you've made a mistake, or you may have duplicated the job, or there is some other reason why you need to cancel that job before it's completed.
>
> **[0:24](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/cancelling-a-fine-tuning-job?u=76281980&t=24)** If you need to cancel such a job, you can use client.fine_tuning.jobs.cancel and pass in the job ID.
>
> **[0:31](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/cancelling-a-fine-tuning-job?u=76281980&t=31)** Of course, this can only be done for as long as the job is running, so once the job is complete, you can't cancel it because it's complete.
>
> **[0:39](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/cancelling-a-fine-tuning-job?u=76281980&t=39)** But in the off chance you need to cancel the job through the API, you can do it here.
>
> **[0:44](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/cancelling-a-fine-tuning-job?u=76281980&t=44)** And remember, if you need to cancel the job, you can also go to platform.[openai.com](https://openai.com), and then go to fine-tuning, select the current job that's running, and then just click the cancel button and it'll do the same thing.
>
> **[0:55](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/cancelling-a-fine-tuning-job?u=76281980&t=55)** But you have that feature through the API because that interface is just an interface to the API.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (2), pass (1)
> **Env Vars:** api (3)
> **UI Navigation:** go to (2), select the (1)
> **Code Identifiers:** fine_tuning (1)
> **URLs:** [openai.com](https://openai.com) (1)
> **Speakers:** - [instructor] (1)


### 3. Further Info

#### Additional notes on fine-tuning
> [LinkedIn Learning](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/additional-notes-on-fine-tuning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/additional-notes-on-fine-tuning?u=76281980&t=0)** - We've covered a lot of ground in a very short time here, so before we wrap up this course, let's do a quick review.
>
> **[0:06](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/additional-notes-on-fine-tuning?u=76281980&t=6)** Number one, you can do all your fine-tuning and access all your fine-tuned jobs directly from platform.[openai.com](https://openai.com) by going to the Fine-Tuning tab.
>
> **[0:16](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/additional-notes-on-fine-tuning?u=76281980&t=16)** Here, you get a list of all your fine-tuned models.
>
> **[0:18](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/additional-notes-on-fine-tuning?u=76281980&t=18)** You can open any of them and get more information about their fine-tuning jobs.
>
> **[0:23](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/additional-notes-on-fine-tuning?u=76281980&t=23)** You can also create new fine-tuning jobs, and if you have any fine-tuning jobs that are currently running, you can cancel them.
>
> **[0:29](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/additional-notes-on-fine-tuning?u=76281980&t=29)** Related to that, because you're uploading training data into the OpenAI API, you may need to access that data.
>
> **[0:35](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/additional-notes-on-fine-tuning?u=76281980&t=35)** For example, if you're going to use the same validation file for multiple different projects, then you can access that data by going to the Storage tab and selecting whatever file you're working on.
>
> **[0:44](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/additional-notes-on-fine-tuning?u=76281980&t=44)** From here, you get the file ID, and you can also download the file or delete the file if you don't need it anymore.
>
> **[0:51](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/additional-notes-on-fine-tuning?u=76281980&t=51)** Number two, while I've covered the basics to get you up and running with fine-tuning using the OpenAI API, there is more to this.
>
> **[0:58](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/additional-notes-on-fine-tuning?u=76281980&t=58)** You can do more advanced fine-tuning, and you can also do more advanced things, like hook up to third-party systems.
>
> **[1:04](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/additional-notes-on-fine-tuning?u=76281980&t=64)** All of that information is contained within the documentation, specifically the Fine-Tuning Guide on the OpenAI website.
>
> **[1:11](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/additional-notes-on-fine-tuning?u=76281980&t=71)** One of the things you'll find there is an example of how you can make more advanced training data, because in addition to passing in a single conversation, you can actually pass in a multi-step conversation, and then tell the model which part of the conversation or which step in the conversation you wanted to focus on.
>
> **[1:29](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/additional-notes-on-fine-tuning?u=76281980&t=89)** So you can do more advanced things than what I've shown you here, and all that information is available on this page.
>
> **[1:35](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/additional-notes-on-fine-tuning?u=76281980&t=95)** Also, the OpenAI API Reference gives you a more detailed breakdown of everything that's happening at every step, and also gives you additional features that I have not covered.
>
> **[1:45](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/additional-notes-on-fine-tuning?u=76281980&t=105)** And if you're working with JavaScript and Node, it also gives you code example for that, and you even get curl examples for most of the API calls.
>
> **[1:54](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/additional-notes-on-fine-tuning?u=76281980&t=114)** On that note, in the exercise files are provided two Jupyter Notebooks to give you not only the tools you need to create the fine-tuning training data, but also how to actually fine-tune a model.
>
> **[2:06](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/additional-notes-on-fine-tuning?u=76281980&t=126)** And both of these notebooks are set up in such a way that you can use them for your own projects later, that's the whole point of giving them to you.
>
> **[2:13](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/additional-notes-on-fine-tuning?u=76281980&t=133)** I've also provided extensive documentation for each of the fine-tuning steps.
>
> **[2:17](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/additional-notes-on-fine-tuning?u=76281980&t=137)** So if you go into the Fine-Tuned Notebook, you'll find links to the Main Documentation Guide and API Reference and for each of the steps.
>
> **[2:24](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/additional-notes-on-fine-tuning?u=76281980&t=144)** There's also a direct link to the API documentation for the specific endpoint we're working on at that point.
>
> **[2:30](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/additional-notes-on-fine-tuning?u=76281980&t=150)** Now you have all the information you need to fine-tune your own models.
>
> **[2:33](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/additional-notes-on-fine-tuning?u=76281980&t=153)** So all that's left for me to say is (indistinct).
>
> **[2:35](https://www.linkedin.com/learning/openai-api-fine-tuning-21058733/additional-notes-on-fine-tuning?u=76281980&t=155)** Go build some new interesting things with AI, and I'll see you in the next course.

> [!info]- Semantic Content
>
> **CLI Commands:** find (2), make (1), node (1), curl (1), go build (1)
> **Env Vars:** api (6)
> **Code Keywords:** let (1), delete (1), this. (1), pass (1)
> **Documentation:** api reference (2), the documentation (1)
> **Exercise Files:** download the (1), exercise files (1)
> **URLs:** [openai.com](https://openai.com) (1)
> **Cross-References:** in the next (1)
> **Tools:** jupyter (1)


## Path Context

### In [[Develop Your Skills with the OpenAI API]]
← [[OpenAI API- Embeddings]] | **5 of 10** | [[OpenAI API- Image Generation with DALL-E]] →

## Appears In

- [[Develop Your Skills with the OpenAI API]]

## Related Courses

_Courses sharing skills:_

- [[OpenAI API- Code Interpreter and Advanced Data Analysis]] — Artificial Intelligence (AI), OpenAI Products, OpenAI API
- [[OpenAI API- Moderation]] — Artificial Intelligence (AI), OpenAI Products, OpenAI API
- [[OpenAI API- Speech]] — Artificial Intelligence (AI), OpenAI Products, OpenAI API
- [[OpenAI API- Vision]] — Artificial Intelligence (AI), OpenAI Products, OpenAI API
- [[OpenAI API- Image Generation with DALL-E]] — Artificial Intelligence (AI), OpenAI Products, OpenAI API

---

[↑ Back to top](#)