---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: azure-ai-studio-first-look
url: "https://www.linkedin.com/learning/azure-ai-studio-first-look"
duration_minutes: 17
duration: 17m
level: Beginner
updated: 9/15/2023
learners: 204042
skills:
  - Azure AI Studio
  - Microsoft Azure
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQGm1K4R1IJsxw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1694541586465?e=2147483647&amp;v=beta&amp;t=QPeebqW846-zd9AAGAEyCjja6ZGiv7xj-QW84VSBvBc"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Foundational AI Skills for Azure Administration]]'
prev_courses:
  - '[[Understanding Generative AI in Cloud Computing- Services and Use Cases]]'
next_courses:
  - '[[Azure AI- The Big Picture]]'
path_nav: '[{"path":"Foundational AI Skills for Azure Administration","position":3,"total":6,"prev":"Understanding Generative AI in Cloud Computing- Services and Use Cases","next":"Azure AI- The Big Picture"}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - topic/cloud-computing
  - skill/azure-ai-studio
  - skill/microsoft-azure
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Azure%20AI%20Studio%20First%20Look.md)

![Azure AI Studio First Look](https://media.licdn.com/dms/image/v2/D560DAQGm1K4R1IJsxw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1694541586465?e=2147483647&amp;v=beta&amp;t=QPeebqW846-zd9AAGAEyCjja6ZGiv7xj-QW84VSBvBc)

# Azure AI Studio First Look

> Are you an IT professional, IT leader, or business leader trying to evaluate if Azure AI studio is right for your organization? In this course, staff instructor Walt Ritscher gives you an informative first look. Find out how to navigate the Azure OpenAI Studio site, create an OpenAI service, and deploy the model. Go over key differences between Azure OpenAI and OpenAI playgrounds, with a focus on 

> [LinkedIn Learning](https://www.linkedin.com/learning/azure-ai-studio-first-look) | 17m | Beginner | 204K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Exploring Azure OpenAI Studio](#exploring-azure-openai-studio)
- [**1.  Work with Azure Open AI Studio**](#1-work-with-azure-open-ai-studio) (4 videos)
  - [Azure AI Studio and the Azure Portal](#azure-ai-studio-and-the-azure-portal)
  - [Key differences between Azure and OpenAI](#key-differences-between-azure-and-openai)
  - [Use OpenAI chat with Python](#use-openai-chat-with-python)
  - [Create Dall-E images with Python](#create-dall-e-images-with-python)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Exploring Azure OpenAI Studio](https://www.linkedin.com/learning/azure-ai-studio-first-look/exploring-azure-openai-studio?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-studio-first-look/exploring-azure-openai-studio?u=76281980&t=0)** - [[Microsoft]]'s recent $10 billion investment in OpenAI not only provides essential funding for groundbreaking research, but also means that all OpenAI services are exclusively hosted on the [[Microsoft Azure|Azure]] platform. For Azure developers, this partnership is exciting because Microsoft is integrating OpenAI services directly into Azure. The [[Azure AI Studio]] is the perfect place to explore this integration where you can test [[ChatGPT]] models, train additional models on your own data, deploy to Azure-hosted websites and integrate with Azure services like Azure with directory. Let's explore the Azure OpenAI studio and discover all the things that you can do with it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (7), [[Microsoft]] (2), [[Azure AI Studio]] (1), [[ChatGPT]] (1)
> **Speakers:** - microsoft (1)


### 1.  Work with Azure Open AI Studio

[↑ Back to Table of Contents](#table-of-contents)

#### [Azure AI Studio and the Azure Portal](https://www.linkedin.com/learning/azure-ai-studio-first-look/azure-ai-studio-and-the-azure-portal?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-studio-first-look/azure-ai-studio-and-the-azure-portal?u=76281980&t=0)** - [Instructor] Assuming your request for access to the service was granted by [[Microsoft]], you'll be able to log in with your organization account to this site, oai.[azure.com](https://azure.com). On the left rail is the playground and management links but before you explore the playground, you need to have a deployed OpenAI service. There are three criteria for getting this AI playground ready. First, have an [[Microsoft Azure|Azure]] Resource Group. Second in that group, create an OpenAI service. Third, deploy that OpenAI service so that it is an active API endpoint on the internet. And this is what you'll see if you have a successful deployment. You'll be able to go over to the playground and click on these links and you'll be able to see the actual playground where you can test out the different services. If this is your first time checking out the AI Studio site, you might not have a deployed service available yet. If so, then this is what your first time experience look like. In the center of the screen is a message, No deployment detected. Clicking on one of these links in the playground, you do not see the playground. You see the same message, No deployments found. One way to deploy is shown here. Click on the create new deployment button. But I think it's informative to see the actual service created in the Azure portal. The first step is to have a resource group. I already have that set up here. Then within your resource group, you need to have a OpenAI service. You can see I've already created one here. The steps to creating that is to click on the create button then search for OpenAI, then click here, click on create. Choose your resource group.
>
> **[1:36](https://www.linkedin.com/learning/azure-ai-studio-first-look/azure-ai-studio-and-the-azure-portal?u=76281980&t=96)** Choose your region. Now this, at the time I'm recording, is only available in the US region and you need to pick either East US or West US. So I've chosen the East US. You'll give your instance a name. I'm using the name of one of our sample companies, Red 30 Tech. So I'll type in redtech and then I'll choose a pricing tier. And you'll step through these steps. And when you click on this create button, it'll go ahead and create the service. I've already done that. So let's go back a couple of steps. So here's the service. This is where we can configure the service. By default, it just works. For example, the service authentication is already set up. You can see that here. Clicking on this link, you can see the keys at the top and at the bottom is the endpoint where we can make our API calls. Azure OpenAI provides two methods for authentication. You can use either API keys or the [[Microsoft Entra ID|Azure Active Directory]]. Microsoft generates two API keys for every AI deployment. This means you can skip the step of getting them from the OpenAI site. This is convenient. We'll see how they're used in the AI Studio soon. Or you can skip using keys entirely and authenticate all service calls via the Azure Active Directory. No keys means there's no key leakage, no potential service compromise, no need to rotate keys periodically. Simply use the same [[Active Directory]] that exists in your Azure account. Let's go back to the setup page or the service page
>
> **[3:11](https://www.linkedin.com/learning/azure-ai-studio-first-look/azure-ai-studio-and-the-azure-portal?u=76281980&t=191)** and I'll talk about two of these buttons on the bottom of the page. Clicking on the Explore button takes you over to the Azure OpenAI Studio. You can also get to that same site by clicking on the deploy button where we can deploy this service that we've created. So let's do that. Click here and click on Create New Deployment. First step is to choose a model. Here's where you provide a base model to try out or choose a custom model. At this time, there are three choices available. There is GTP-35-Turbo and GTP-35-Turbo-16K. These models are optimized for chat. The 16K version supports more [[Tokens]] which can lead to more accurate completions but is double the price per token. Choose text-embedding-ada-002 for support for [[Semantic Search]] and classification. Think of embedding as a special format of data representation that can be easily utilized by machine learning models and their [[Algorithms]]. That's interesting, but not what we're looking for today. We'll choose this top item, then give it a deployment name, and then click on Create. And as you can see, I got a success message, successfully created the deployment and here's my deployment name. That should mean that I'll be able to go over to chat. And over here where it says deployment, I can see my deployment. Now I can start working with the Chat Playground, the completions, or the [[DALL-E]] preview.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (6), [[Microsoft]] (2), [[Microsoft Entra ID|Azure active directory]] (2), [[Active Directory]] (1), [[Tokens]] (1)
> **Env Vars:** api (4), gtp (2), dall (1)
> **UI Navigation:** click on (7)
> **Prerequisites:** you need to have (2), set up (2), configure (1), setup (1)
> **Definitions:** is an  (1), is a  (1)
> **CLI Commands:** make (1)
> **URLs:** [azure.com](https://azure.com) (1)
> **Cross-References:** go back to (1)

#### [Key differences between Azure and OpenAI](https://www.linkedin.com/learning/azure-ai-studio-first-look/key-differences-between-azure-and-openai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-studio-first-look/key-differences-between-azure-and-openai?u=76281980&t=0)** - [Instructor] Let's clarify some concepts in this video. We'll talk about the difference between [[Microsoft Azure|Azure]] seen on the left and the official OpenAI site seen on the right. On the left, check out the Azure site name for a minute. This site is the Azure OpenAI Studio, yet the name shown on the site is [[Azure AI Studio]]. This confused me when I first started using the site. When you first see this page, the clue that you are in the correct spot is in the page header. There are two general areas available in the AI studio. There is the playground section and the management section. The playgrounds shown on the left are similar to the playgrounds available on the OpenAI official site scene on the right. They let you try out text prompts and scenarios without learning the APIs or writing code and yet they also provide the API code so it's easy to get started programming. Let's go over to the OpenAI site. I'll go down to, or should say go over to the section called view code and here I can see the code for calling the service and the languages available are [[Python (Programming Language)|Python]], [[Node.js]], Curl, and [[JSON]]. Over on the Azure site, let's go to chat.
>
> **[1:14](https://www.linkedin.com/learning/azure-ai-studio-first-look/key-differences-between-azure-and-openai?u=76281980&t=74)** To this section, view code and the languages available here are Python, JSON, curl, and of course, [[Microsoft]] has their C# language available here. A key difference in Azure is the management section. In the model section, we can see the base models. However, Azure OpenAI service lets you tailor these models to your own personal dataset using a process known as [[Fine Tuning]]. This customization step will let you get more out of the service by providing higher quality results than what you can just get from a prompt design. The ability to train more examples then can fit into a prompt. The customized model lets you achieve better results on a wider number of tasks without needing to provide examples in your prompt. The result is less text sent and fewer [[Tokens]] processed on every API call, saving cost and improving the request latency. Providing your own data here enables the chat engine to provide responses based on your data. You provide the data in a variety of formats, either via file uploads in Azure storage or via [[Representational State Transfer (REST)|REST]] API calls. Now that Azure knows where to find the data, it can determine what data to retrieve from the designated source based on the user's input and the conversation history. This retrieved data is then appended to the original prompt allowing the model to process it just like any other prompt. The quota feature enables assignment of rate limits to your deployments up to a global limit called the quota. Quota is assigned to your subscription
>
> **[2:50](https://www.linkedin.com/learning/azure-ai-studio-first-look/key-differences-between-azure-and-openai?u=76281980&t=170)** on a per region per model basis in units that are known as tokens per minute. Here you can see my quotas listed per model. To change these values, edit the deployment. So if I wanted to change the values in my GTP-35-Turbo and I wanted more for my redtech-deployment, I would have to go in and edit both of these deployments. The content filtering system integrated into Azure OpenAI service runs alongside the core models and uses classification models to detect four categories of harmful contents: violence, hate, sexual, and self-harm. The filters are on by default and allow generated content deemed safe or low risk and block generated content considered to be medium or high risk. If you would like to change the levels that are blocked, you can edit the configuration here in this section. Returning to the playground section, there are three choices. I'm looking at the middle one, the completions playground. It provides access to the legacy completions API. It is recommended by OpenAI to use the newest chat API instead, more on the reasons in a moment. Here I'm showing a quick example. If you go to the playground, you can choose some predefined examples. I picked this one called Explain a [[SQL]] Query. You can see there are many other choices. Then I click on the Generate button and what it's doing is explaining the SQL Query. Also answer why someone would be interested in this time period. And here you can see the results.
>
> **[4:22](https://www.linkedin.com/learning/azure-ai-studio-first-look/key-differences-between-azure-and-openai?u=76281980&t=262)** There's an explanation of what this SQL query does and then why it might be of interest to someone. So yes, it is a useful API mainly if your company uses the older OpenAI tech. Here is the explanation why we should not use the Completions API. There is a new chat completion API that is more powerful, faster and popular. It's used by nearly 100% of the API consumers. OpenAI Research has discovered that it's possible to do nearly all the tasks available in the old completion API in this new one and the new API is also better at chat. One last thought before we move on and look at how to program the chat completion API, Azure does support [[GPT-4]]. By default, we only get access to GPT-3.5, but we can request that GPT-4 be added to our subscription.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (10), [[SQL]] (3), [[Python (Programming Language)|Python]] (2), [[JSON]] (2), [[Tokens]] (2)
> **Env Vars:** api (12), sql (3), gpt (3), json (2), rest (1)
> **CLI Commands:** python (2), curl (2), node (1), find (1)
> **Definitions:** known as (2), is a  (2)
> **UI Navigation:** go to (2), click on (1)
> **Analogies:** similar to (1), just like (1)
> **File Paths:** node.js (1)
> **Versions:** 3.5 (1)

#### [Use OpenAI chat with Python](https://www.linkedin.com/learning/azure-ai-studio-first-look/use-openai-chat-with-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-studio-first-look/use-openai-chat-with-python?u=76281980&t=0)** - One advantage of using the playground is that it generates basic code for interacting with the [[Microsoft Azure|Azure]] OpenAI service. On the right is a [[Python (Programming Language)|Python]] example in the Visual Studio Code editor. The first 19 lines of code shown here, I copied from the playground. The only significant change I made is on line nine where I hard coded the API key value. I also added some code on lines 21 through 23 to output the AI response. To run the code, I'll go to the terminal and type in Python and then call my Python script.
>
> **[0:39](https://www.linkedin.com/learning/azure-ai-studio-first-look/use-openai-chat-with-python?u=76281980&t=39)** Here I see the prompt at the top suggests five alliterative short story titles about ironic space adventures and then I got five responses. I think my favorite here is Nebula Nonsense. I'll run this again to get another set of responses. Let's take a look at the code. On line four and five, I'm importing some items so that I can use them in my code. On line six, I'm specifying the API type as Azure. Line seven is where I indicate the endpoint for the service call. This is my red tech endpoint. Line eight specifies the API version. And line nine, as we've seen already, is where I've hard coded the API key. On line 11, I'm calling ChatCompletion.create. Chat completion is our way into calling the new chat API and then I get back a variable called response. Now let's skip down to line 22. There I am using the response and getting the choices that came back from the response, finding the message and the content. And then on line 23, I'm printing that out to the console. Now, back up to line 12, I'm passing additional information into the API. The first thing I'm passing in is called the engine. You might recall that when you create an API service in Azure, you have to create deployments. I created a deployment called red tech deploy that was using GPT-3.5 Turbo, so that's what I'm using here.
>
> **[2:14](https://www.linkedin.com/learning/azure-ai-studio-first-look/use-openai-chat-with-python?u=76281980&t=134)** That's the model that I'm using on this call. Then I have a number of messages, we'll talk more about those in a minute. And then on line 14, I'm specifying a temperature. I'm also specifying the number of max [[Tokens]] I want to use in this API call. This is a basic app. To make it better, I should get the prompt from the terminal instead of hard coding it like I'm doing here on line 13. Also, if I want to have chat history with the service, I need to capture all the conversation between the user and the service and send that with every request. To see what I mean, let's go to the Azure site. I am looking at the chat playground. It's here, I can experiment with prompts. When I find one I like, I can look at the example code. Also, let's understand how to preserve context in a chat conversation. For this demonstration, I'll start by telling the chat engine my favorite color. Then I'll ask it to suggest some interesting web colors.
>
> **[3:20](https://www.linkedin.com/learning/azure-ai-studio-first-look/use-openai-chat-with-python?u=76281980&t=200)** I get back some choices and then I'll ask it to suggest some colors that are similar to mine.
>
> **[3:33](https://www.linkedin.com/learning/azure-ai-studio-first-look/use-openai-chat-with-python?u=76281980&t=213)** What's interesting here is the first sentence. Sure, as you mentioned earlier, your favorite color is orange and here are some colors that are similar to orange that you might like. So let's remember the context. So how is that coded? Let's look at the code. Before I look at the information on line 11, let's talk about line seven. Remember that I told you I hard coded the API key here. This is the sample code that you get. It's calling oss.getenvironment, open AI key. If I was using this code I'd have to have an environmental variable set to my API key. That's why I hired coded the value. As I mentioned earlier, the API keys are created when you set up your open AI service. What's nice is that here in the AI studio, when we pick the deployment from the list, [[Microsoft]] automatically adds the keys to the playground and the sample code. There are three roles available when you're sending a message. Basically, you're sending an array of information to the API. The system message helps set the behavior of the assistant. If properly crafted, the system message can be used to set the tone and the kind of response by the model. It should be sent with every request. Otherwise it might get crowded out by a lengthy conversation. So you see in the array, that's the first bit of information I'm sending to the API. Then there is the user content, that's my content, and there's the assistant content, that's the response from the API. You notice that the entire conversation was sent as segments of the array.
>
> **[5:08](https://www.linkedin.com/learning/azure-ai-studio-first-look/use-openai-chat-with-python?u=76281980&t=308)** This is how the context of the conversation is preserved. If you want a similar workflow then you can write your own persistence code or another choice is to integrate open AI code with the Azure chatbot services. If you leverage the chatbot services, it handles the conversation context.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (5), [[Python (Programming Language)|Python]] (3), [[Tokens]] (1), [[Microsoft]] (1)
> **Env Vars:** api (14), gpt (1)
> **CLI Commands:** python (3), make (1), find (1)
> **Tools:** terminal (2), visual studio (1)
> **Definitions:** is a  (2), is called (1)
> **UI Navigation:** go to (2)
> **Exercise Files:** sample code (2)
> **Analogies:** similar to (2)

#### [Create Dall-E images with Python](https://www.linkedin.com/learning/azure-ai-studio-first-look/create-dall-e-images-with-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-studio-first-look/create-dall-e-images-with-python?u=76281980&t=0)** - Here's an example of working with the [[DALL-E]] playground preview. This takes a text prompt, in this case, it's a prompt about early morning photography. When I click on the generate button, it creates an image. I've copied the code from the playground into Visual Studio Code. It's very similar to the code we looked at in the last video. The main differences here is we're calling "Image.create" and passing in the prompt, passing in a size. You get back the image_url from the response. And then I've added one extra line of code here in line 17 where I'm printing out the image_url. I'll run the [[Python (Programming Language)|Python]] script in my terminal. This time I'm using "ImageGen.py". I get back an ImageURL. Now, one of the things I can do in the [[Windows]] terminal is I can click, control click on this URL and it'll open it in the browser. There's plenty more to explore. For example, we didn't look at adding custom data for the models or how to work with [[Active Directory]]. Nevertheless, I'm sure you see just how convenient it is to work in the [[Azure AI Studio]]. You get to experiment with the models, see the sample code, and even publish to an [[Microsoft Azure|Azure]] hosted website. Now go try it for yourself. I'll see you in the next course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DALL-E]] (1), [[Python (Programming Language)|Python]] (1), [[Windows]] (1), [[Active Directory]] (1), [[Azure AI Studio]] (1)
> **Tools:** visual studio (1), terminal (1), windows terminal (1)
> **Code Identifiers:** image_url (2)
> **Env Vars:** dall (1), url (1)
> **Cross-References:** in the last (1), in the next (1)
> **UI Navigation:** click on (2)
> **Analogies:** similar to (1), for example (1)
> **File Paths:** imagegen.py (1)


## Instructor

- [[Walt Ritscher]]

## Skills Covered

- Azure AI Studio
- Microsoft Azure

## Path Context

### In [[Foundational AI Skills for Azure Administration]]
← [[Understanding Generative AI in Cloud Computing- Services and Use Cases]] | **3 of 6** | [[Azure AI- The Big Picture]] →

## Appears In

- [[Foundational AI Skills for Azure Administration]]

## Related Courses

_Courses sharing skills:_

- [[Azure AI- The Big Picture]] — Azure AI Studio, Microsoft Azure
- [[Blockchain for Developers- Hyperledger Fabric on Azure]] — Microsoft Azure
- [[Choosing A Cloud Platform For Developers Aws Azure And Gcp]] — Microsoft Azure
- [[Building RAG Solutions with Azure AI Foundry (Formerly Azure AI Studio)]] — Azure AI Studio
- [[Azure DevOps for Beginners]] — Microsoft Azure

---

[↑ Back to top](#)