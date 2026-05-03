---
type: course
cssclasses:
  - lle-course
slug: developing-chatbots-with-azure
url: "https://www.linkedin.com/learning/developing-chatbots-with-azure"
duration_minutes: 62
duration: 1h 2m
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQE1knp7LibUCQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1611696632946?e=2147483647&amp;v=beta&amp;t=0IWVucb1KvT1xojB_0-VjEc2Gx36l0kftKQE-b7otrs"
linkedin_topic: Cloud Computing
learning_paths:
  - '[[Advancing Your Azure Developer Skills- Exploring Complex Application Development]]'
prev_courses:
  - '[[Azure Developer Associate (AZ-204) Cert Prep- Implement Azure Security]]'
next_courses:
  - '[[Microsoft Azure Synapse for Developers]]'
path_nav: '[{"path":"Advancing Your Azure Developer Skills- Exploring Complex Application Development","position":5,"total":7,"prev":"Azure Developer Associate (AZ-204) Cert Prep- Implement Azure Security","next":"Microsoft Azure Synapse for Developers"}]'
path_count: 1
tags:
  - course
  - topic/cloud-computing
  - topic/network-and-system-administration
  - topic/software-development
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cloud%20Computing/Developing%20Chatbots%20with%20Azure.md)

![Developing Chatbots with Azure](https://media.licdn.com/dms/image/v2/C4E0DAQE1knp7LibUCQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1611696632946?e=2147483647&amp;v=beta&amp;t=0IWVucb1KvT1xojB_0-VjEc2Gx36l0kftKQE-b7otrs)

# Developing Chatbots with Azure

> What exactly is a chatbot? How does it differ from a bot, how can you develop one, and how can you use it, once it is developed? Instructor Bhavani Ravi walks you through learning about chatbots and developing your first one. Bhavani begins by describing what a chatbot is, what types of chatbots exist today, and how a chatbot differs from bots and applications. She goes over the components of a ch

> [LinkedIn Learning](https://www.linkedin.com/learning/developing-chatbots-with-azure) | 1h 2m
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Chatbots are revolutionizing the web](#chatbots-are-revolutionizing-the-web)
- [**1. Introduction to Chatbots**](#1-introduction-to-chatbots) (2 videos)
  - [What is a chatbot?](#what-is-a-chatbot)
  - [Bots vs. chatbots vs. applications](#bots-vs-chatbots-vs-applications)
- [**2. Chatbot Terminology and Architecture**](#2-chatbot-terminology-and-architecture) (5 videos)
  - [Components of a chatbot system](#components-of-a-chatbot-system)
  - [Chatbot engine, a deep dive](#chatbot-engine-a-deep-dive)
  - [Intent classifier](#intent-classifier)
  - [Entity extractor](#entity-extractor)
  - [Action server](#action-server)
- [**3. Design a Chatbot**](#3-design-a-chatbot) (4 videos)
  - [Designing conversation for chatbots](#designing-conversation-for-chatbots)
  - [Identifying intents and entities](#identifying-intents-and-entities)
  - [Challenge: Designing conversations](#challenge-designing-conversations)
  - [Solution: Designing conversations](#solution-designing-conversations)
- [**4. Enhancing Your Chatbot Actions**](#4-enhancing-your-chatbot-actions) (5 videos)
  - [Setting up the Azure account and building an echobot](#setting-up-the-azure-account-and-building-an-echobot)
  - [Training QnA Maker and static productbot](#training-qna-maker-and-static-productbot)
  - [Training LUIS and dynamic productbot](#training-luis-and-dynamic-productbot)
  - [Challenge: Write your own chatbot](#challenge-write-your-own-chatbot)
  - [Solution: Write your own chatbot](#solution-write-your-own-chatbot)
- [**Conclusion**](#conclusion) (1 videos)
  - [Advancing the chatbot ladder](#advancing-the-chatbot-ladder)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Chatbots are revolutionizing the web](https://www.linkedin.com/learning/developing-chatbots-with-azure/chatbots-are-revolutionizing-the-web?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/developing-chatbots-with-azure/chatbots-are-revolutionizing-the-web?u=76281980&t=0)** - [Bhavani] Chat bots, currently being the 9 billion dollar market, is revolutionizing the web by replacing applications. Developers who stay ahead of the curve will see themselves in high demand as the businesses start to implement chat bot solution across their [[Microsoft Products|products]] and services. In this course, we will go through five stages of building a chat bot, right from conversation design to consuming an external data using [[Microsoft Azure|Azure]] bot framework and [[Python (Programming Language)|Python]]. The course focuses on laying down a strong fundamental and hands-on experience so that you would be able to swap the bot framework for other frameworks, like Dialogflow or Rasa. I'm Bhavani Ravi. I love developing chat bots for businesses and have been doing this for the past four years. I'm here to teach you everything I've learned along the way. Apart from being a multi-billion dollar market, chat bots are fun to learn and build. So join me on this journey and build your first chat bot with Azure and Python.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (2), [[Python (Programming Language)|Python]] (2), [[Microsoft Products|Products]] (1)
> **CLI Commands:** python (2)
> **Speakers:** - [bhavani] (1)


### 1. Introduction to Chatbots

[↑ Back to Table of Contents](#table-of-contents)

#### [What is a chatbot?](https://www.linkedin.com/learning/developing-chatbots-with-azure/what-is-a-chatbot?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/developing-chatbots-with-azure/what-is-a-chatbot?u=76281980&t=0)** - [Instructor] What is a chatbot? Well, this is easy. There's a good chance that you're sitting next to [[Google]] Home or Alexa as you're taking this course. Who knows, there might be a Siri or a Google Assistant waiting to pop up any moment now, but that's not it. The chatbot is much more powerful than that. Do you know, 80% of customer service businesses are moving to a chatbots? Chatbots have a wide range of applications in medicine, education and finance. These types of chatbots are called domain-specific chatbots. A domain-specific chatbot understand and operate extremely well in business domains but it might not be able to crack a joke like our Google Assistant. Throughout this course we will be focusing on solving a single business problem using domain-specific chatbots. Let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (3)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Bots vs. chatbots vs. applications](https://www.linkedin.com/learning/developing-chatbots-with-azure/bots-vs-chatbots-vs-applications?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/developing-chatbots-with-azure/bots-vs-chatbots-vs-applications?u=76281980&t=0)** - [Instructor] We have talked about how domain-specific chatbots differ from generalized chatbots. Similarly, understanding the subtle differences between chatbots, bots, and applications will help you anchor the concepts later. Let's tackle the easy ones first, bots versus chatbots. A bot is an automated tool designed to complete a specific task. A chatbot is pretty much the same thing, just with a focus on conversation interfaces. Chatbot, a subset of the bot family, created just to interact conversationally with humans. Now, let's move on to web applications. Have you ever used a web app? What do you see? A bunch of [[Forms]], buttons, checkboxes, and UI elements. Basically, every user action has a different name and a spot using these HTLM elements. Thereby, any developer can hook an action to each of these buttons. We know exactly whether the user is trying to change the password or just signing up. Now, imagine using a chatbot. How do you interact with it? By texting, right? How will the bot differentiate between ordering a pizza and booking a flight? This is when the chatbot have to perform intelligently compared to applications. The intelligent agent that we need
>
> **[1:34](https://www.linkedin.com/learning/developing-chatbots-with-azure/bots-vs-chatbots-vs-applications?u=76281980&t=94)** can interpret the human messages in a format that can be used by the applications to perform respect to action. Bots are the superset, comprising of every piece of automation. Chatbots, on the other hand, are the human-friendly, text-driven automation agents.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forms]] (1)
> **Env Vars:** htlm (1)
> **Definitions:** is an  (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)


### 2. Chatbot Terminology and Architecture

[↑ Back to Table of Contents](#table-of-contents)

#### [Components of a chatbot system](https://www.linkedin.com/learning/developing-chatbots-with-azure/components-of-a-chatbot-system?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/developing-chatbots-with-azure/components-of-a-chatbot-system?u=76281980&t=0)** - [Instructor] Chatbots, like any other application, is a software system. Hence, it is important to understand what it is made of. Let us think this through. Remember that the differentiating factor between web app and chatbot is that we provide input in the form of a text. So it is obvious that we need a UI client to send and receive messages. It can be existing platforms, like [[Slack]], [[Facebook]] Messenger, Telegram, or you can build one on your own. Next, we need a component to understand what the user is saying, a natural language understanding component in machine learning terms. Now you don't have to master all the ML concepts behind NLU. There are chatbot platforms to help us with that. Some of the famous ones are Dialogflow by [[Google]], [Wit.ai](https://Wit.ai) by Facebook, Rasa and Chatterbot, famous open source chatbot libraries, and IBM Watson. For this course, we will be using [[Microsoft Azure|Azure]] bot framework by [[Microsoft]]. These frameworks abstract away the NLU functionalities and provide us an interface to be consumed by an API. Though bot frameworks are great at understanding human language, it does not have access to the data for your use case. For example, in case of a ticket booking, the airline companies have the data of flight availability. Hence, the task of performing the action
>
> **[1:35](https://www.linkedin.com/learning/developing-chatbots-with-azure/components-of-a-chatbot-system?u=76281980&t=95)** needs to be delegated to an external server. We call this a bot server or an action server in chatbot terms, but it's just a plain old back-end system. Now that we have gone through various components, let's see how these come together in building a chatbot. The input from the user enters the bot platform. The bot platform interprets the text, returns and API understandable format of what the user is saying. This format is sent to the action server and the action is performed. The result of the action is converted back into a text and sent to the user. A successful chatbot as possible only when all these pieces works in harmony. And as a chatbot developer, it's your job to ensure all these pieces fit and work together.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Facebook]] (2), [[Slack]] (1), [[Google]] (1), [[Microsoft Azure|Azure]] (1), [[Microsoft]] (1)
> **Env Vars:** nlu (2), api (2), ibm (1)
> **Definitions:** is a  (1), we call this (1)
> **URLs:** [wit.ai](https://wit.ai) (1)
> **Tools:** slack (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Chatbot engine, a deep dive](https://www.linkedin.com/learning/developing-chatbots-with-azure/chatbot-engine-a-deep-dive?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/developing-chatbots-with-azure/chatbot-engine-a-deep-dive?u=76281980&t=0)** - [Instructor] Chatbot engines are the intelligent officers of the chatbot world. There is a school of thought that AI is still a bunch of if-else statements. If that's true, why do we even need a chatbot engine? Human beings are the most unpredictable creatures, though we can't predict what the other person is going to say, we can understand what they are saying through our language skills. Similarly, you can teach a chatbot what each sentence means like you would teach a child. Imagine talking to a bot that is not trained and the user starts speaking to it. The user will get an experience of talking to a toddler, but as you train the chatbot engine with more and more examples, it can understand what the user is saying and extract necessary information to perform an action. Give it a bunch of sentences. The ability to separate text based on user's intent is called intent classification, which is a mere text classification in AI DOMs. For example, whether the user is trying to greet, or look for a restaurant, or book a table at a restaurant. The ability to extract necessary information from a sentence is called entity extraction. For example, cuisine, what time, what day, which flavor of topping, et cetera. With these two capabilities, a chatbot engine will now get the intelligence to clearly understand what the user is saying
>
> **[1:36](https://www.linkedin.com/learning/developing-chatbots-with-azure/chatbot-engine-a-deep-dive?u=76281980&t=96)** and what action they are trying to accomplish.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2), is called (2)
> **Analogies:** for example (2), imagine (1)
> **Speakers:** - [instructor] (1)

#### [Intent classifier](https://www.linkedin.com/learning/developing-chatbots-with-azure/intent-classifier?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/developing-chatbots-with-azure/intent-classifier?u=76281980&t=0)** - [Instructor] Let's think a little more about intent classification. The intent classifier is the bridge that connects what the user is saying to what the user is trying to accomplish. Though the chatbot engine encapsulates the NLP aspects of intent classification, it is important to understand them to define a successful chatbot. Let's look at the wordbot example. It has features like get meaning, get opposite, get root words, get example sentences. From the look of it, you might think there are four actions; hence, there should be four intents. Though the segregation is conceptually correct, the NLP text classification system works based on probabilities, that is, words that are closer to each other will have the same score. For the wordbot, the sentences, "What's the meaning of good?" and "What's the opposite of good?" differ only by one [[Microsoft Word|word]], making it difficult for the ML models to predict the intent. In this case, it's a good idea to merge these sentences and mark the differing word as an entity. Another important feature that the intent classifier offers is the ability to find sentences that the bot is not trained for. These are called fallback intents. This helps us to capture sentences so that we can train the bot later. For example, if I ask my bot about the origin
>
> **[1:34](https://www.linkedin.com/learning/developing-chatbots-with-azure/intent-classifier?u=76281980&t=94)** and the usage of the word which it's not trained for, it would classify them as other and as a chatbot developer, I can go back and look at all the other sentences and retrain my bot. Oftentimes as a chatbot developer, you won't be exposed to the internals of the chatbot engine. But understanding that intent classification is a mere text classification, text classification happens based on scores are saying the words and probabilities and sentences that they're not trained for is treated as a fallback intent helps us build a solid chatbot.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (3)
> **Env Vars:** nlp (2)
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Entity extractor](https://www.linkedin.com/learning/developing-chatbots-with-azure/entity-extractor?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/developing-chatbots-with-azure/entity-extractor?u=76281980&t=0)** - [Instructor] Just like intent classification, entity extraction is a key technique in NLP devised to extract useful information. This comes really handy in a chatbot setting because we often want this useful information to perform the right action. For example, in a flight booking chatbot beneath details like name, source, destination, date and time of travel, number of tickets, et cetera. Most chatbot engine come with a predefined set of entities that are common to the language. For example, name, date, location, et cetera.
>
> **[0:46](https://www.linkedin.com/learning/developing-chatbots-with-azure/entity-extractor?u=76281980&t=46)** A domain-specific chatbot should understand domain-specific language as well. These are the words that might not be a part of the universal language, say English, but would make total sense in a particular use case. For example, drug names in case of a medical chatbot, bank versus river bank or balance sheet in a financial chatbot, or [[Python (Programming Language)|Python]] as a programming language as opposed to Snake in a [[Software Development]] based chatbot. Along with that, the chatbot should also understand certain abbreviations used by the user. For example, NYC for New York City, USA for America. Another important use case is to have synonyms mapped for a particular [[Microsoft Word|word]]. It's very common that we use C followed by a hash for the word C#, and it's important to train all these entities in the entity extractor. When it comes to entity extraction, the order of entities also play a major role. For example, a sentence like, "I'm traveling from India to USA." Though both India and USA are predefined entities location, their order means that the source location is India and the destination location is the US. Swapping those two will end up in booking a wrong ticket. Entity extraction helps the bot understand
>
> **[2:21](https://www.linkedin.com/learning/developing-chatbots-with-azure/entity-extractor?u=76281980&t=141)** the business language of the users. They are the deciding authorities of the chatbot system. They have the capability to make or break the system. As a chat bot developer, we should ensure to use predefined entities wherever possible, train the domain-specific language, map all the abbreviations a user might use to create an engaging chatbot.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (2), [[Python (Programming Language)|Python]] (1), [[Software Development]] (1)
> **Analogies:** for example (5), just like (1)
> **Env Vars:** usa (3), nlp (1), nyc (1)
> **CLI Commands:** make (2), python (1)
> **Definitions:** is a  (1), means that (1)
> **Speakers:** - [instructor] (1)

#### [Action server](https://www.linkedin.com/learning/developing-chatbots-with-azure/action-server?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/developing-chatbots-with-azure/action-server?u=76281980&t=0)** - [Instructor] Sometimes, chat bot feels like dark magic, especially as a beginner. After all, how does a chat bot understand nooks and corner of your business data? This is one of the most commonly asked questions. In reality, chat bot does not understand your business data, at least not yet. Chat bots, like any other application, have no clue about your data at hand. Now you might ask what about the intelligence then? Well, as of now, the intelligent part of chat bot is employed only for understanding the natural language and not in fetching the right data, although this is a very active area of research. You can explore it. If chat bots are not intelligent enough to pick the right data, how do we do that? That's why we have intelligent chat bot developers, like you, in the picture. Once the chat bot engine understands the user language, converts them into intents and entities, the action server takes over and map the intent to [[Fetch]] the right data from the corresponding DB or API. An action server is an interface that converts the intent to action. It is responsible for picking up the right data from the DB or external APIs, and most importantly, it can be written in any language of your choice. In this course, we will be using [[Python (Programming Language)|Python]]. As a chat bot developer, it's your job to ensure that the right intents
>
> **[1:35](https://www.linkedin.com/learning/developing-chatbots-with-azure/action-server?u=76281980&t=95)** are mapped to right actions, all the necessary information, that is your entities, are available to perform the action. Most importantly, the ultimate goal is to ensure that the end user gets a seamless experience.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Fetch]] (1), [[Python (Programming Language)|Python]] (1)
> **Definitions:** is a  (1), is an  (1)
> **CLI Commands:** python (1)
> **Env Vars:** api (1)
> **Analogies:** picture (1)
> **Speakers:** - [instructor] (1)


### 3. Design a Chatbot

[↑ Back to Table of Contents](#table-of-contents)

#### [Designing conversation for chatbots](https://www.linkedin.com/learning/developing-chatbots-with-azure/designing-conversation-for-chatbots?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/developing-chatbots-with-azure/designing-conversation-for-chatbots?u=76281980&t=0)** - [Instructor] So far, you have learned everything that's there to learn about chatbots. Now let's put them into action let's start with the five steps that I personally use to build any Chatbot. It has language and platform agnostic you should start with designing a conversation that the user would likely to have the deal chatbot then identify the intents and entities. Once you have the intent and entities in the place train the bot engine of your choice in our case, it's [[Microsoft Azure]]. Once you have the bot engine trained write the action server to access the respect of data. Once the step is done you are pretty much done with building your chatbot. The last and final step would be to integrate it with the UI for the first step, designing the conversation we will emulate the user and the bot to come up with sample set of conversation. Designing the conversation is the web app equal and off designing the UI. Since the conversation is the one layer interface it should be engaging and usable for the end users you don't need any fancy setup for the step all you need is an empty document for the [[Representational State Transfer (REST)|rest]] of the course, we will be building a product bot which will answer questions about the product of our mock company Red30 Tech. Red30 Tech is a mock company that we are going to build the product portfolio.
>
> **[1:33](https://www.linkedin.com/learning/developing-chatbots-with-azure/designing-conversation-for-chatbots?u=76281980&t=93)** It has a series of lineup of [[Microsoft Products|products]] in AI and machine learning, [[Cloud Computing]], security and so on. The data for all these projects are provided to us in a CSV file, which we will consume when building our bot. You can feel free to replace the CSV file with a database as well. In order to design the conversation, the chatbot developer has to wear the hat of both the bot and the user. Imagine you are the user of the product bot, how would a conversation go? Let me type it out, you can start by saying a normal hi or most of the times the bot itself pops up whenever there is a user in the conversation. So the bot pops up and says, hi, I am product bot of Red30 Tech and I can answer questions about our product
>
> **[2:36](https://www.linkedin.com/learning/developing-chatbots-with-azure/designing-conversation-for-chatbots?u=76281980&t=156)** and at this point you are the user and there can be two scenarios here. One, you already know what Red30 Tech is or you're really not sure. So the user can go something like what is Red30 Tech in the first place? Next up the bot gives a company description so it says what the company is all about, where is it located, what services do they offer, something like that. This gives a very high level overview of what the company is all about. Now the user can dig deeper and ask specific questions about the product. For example, tell me more about your ML solutions
>
> **[3:22](https://www.linkedin.com/learning/developing-chatbots-with-azure/designing-conversation-for-chatbots?u=76281980&t=202)** and the bot will list down all the ML related products that the company has, list down all the ML products. Now that we have all that machine learning products the user can dig deeper and ask about specific measure learning product what features does ML learn product provide?
>
> **[3:51](https://www.linkedin.com/learning/developing-chatbots-with-azure/designing-conversation-for-chatbots?u=76281980&t=231)** And the bot goes ahead and lists down the features of the specific product. Now, at this point, the user might ask can I get a demo of the product? This is very usual sales question, right? And at this point the bot can't really give it a demo, right? The bot has to hand it over to a human operator. I can put you in touch with someone in my team
>
> **[4:23](https://www.linkedin.com/learning/developing-chatbots-with-azure/designing-conversation-for-chatbots?u=76281980&t=263)** would you like that? And the user might say something like, yeah, sure and the bot now has to get the user's information because it has to put them in touch. So user gives the information so that's one whole new conversation you will hear from us shortly with a scheduled demo, thank you. So that is one lineup of conversation in the middle we had another stream, which is like just for getting the user information so this is how you would design a conversation. Similarly, you can create multiple scenarios, as you like. Think of a personality you would want your bot to have it can have a personality of a well-trained professional or an intern finding the way around the product. The important thing to keep in mind is to have the conversation as engaging and as friendly as possible. Of course, there is no right or wrong way to do this.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (4), [[Microsoft Azure]] (1), [[Representational State Transfer (REST)|Rest]] (1), [[Cloud Computing]] (1)
> **Definitions:** is a  (2), is an  (1)
> **Env Vars:** csv (2)
> **Analogies:** imagine (1), for example (1)
> **Warnings:** keep in mind (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### [Identifying intents and entities](https://www.linkedin.com/learning/developing-chatbots-with-azure/identifying-intents-and-entities?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/developing-chatbots-with-azure/identifying-intents-and-entities?u=76281980&t=0)** - [Instructor] Now that we have designed the conversation, let's derive the intents and entities from them. To create the intents, take each user utterance from the conversation we designed. Think about all the statements that the user can utter to convey the same thing. Let's start with a simple example. Variation for hi, can be, hello, hey, are you there, or even fancier, yo. Similarly, a bye can be, goodbye, see you, later, and so on. Right? Let's try with some of the code intents. For example, take the sentence, "what is redtech30?" Other possible ways of asking the same thing can be, "tell me about redtech30". Or the user can be a little rule and say, "redtech30? What is that?" So these are all the possible ways of asking, "what is redtech30?". So now let's group them all together and give it a name. So this can be greeting, and this can be end conversation,
>
> **[1:26](https://www.linkedin.com/learning/developing-chatbots-with-azure/identifying-intents-and-entities?u=76281980&t=86)** And this can be company info. I'm giving it a random name and a random title. Similarly, you can go through each one in the list and give it a name. Now let's look at this. So, "I'm looking for ML solutions for my finance startup", this is one of the intents, and let's give it a name of get product list. And there are other ways to ask this. Like, "I'm looking for some ML [[Microsoft Products|products]]". Or, "do you have any ML solutions?" I'm looking for machine learning products.
>
> **[2:18](https://www.linkedin.com/learning/developing-chatbots-with-azure/identifying-intents-and-entities?u=76281980&t=138)** I have an ML problem to solve. So these are all the possible ways to ask for the same set of ML products. And this can also be, "I'm looking for solutions to secure my product". Right? So these are all the possible ways. And the next thing can be, "what are the features does it provide?" Right? You can either name the product, or you can just ask for features. So, get features. "What are the features does it provide?" Or also, "what are the features does redtech30 learn provide?" This is a product of redtech30, right? Or, "what features does it have?"
>
> **[3:16](https://www.linkedin.com/learning/developing-chatbots-with-azure/identifying-intents-and-entities?u=76281980&t=196)** Or, "what are the features does redtech30 secure provide?"
>
> **[3:27](https://www.linkedin.com/learning/developing-chatbots-with-azure/identifying-intents-and-entities?u=76281980&t=207)** Now that we have came up with all these intents, you can repeat it for the [[Representational State Transfer (REST)|rest]] of the conversation as well. And you will have the list of intents. Now for the entities, go through each intent, think about the data points. Think about the variables that you would want to define. In case of greet and end conversation, there is literally nothing. In case of company info, it depends on the type of bot that you build. For redtech30, we are building it specifically for our company, so we can drop it. But in case of get product list, the product list is usually got by specifying a category. Whether it's machine learning, or security, or [[Cloud Computing]]. So it depends on the category, right? So get product list, give it a category. That is our entity. Similarly for the feature, you have to have a specific product name, so that you can get the respective features or the cost. So this is how you would come up with the entities. For this, we have designed the conversation, and also derive our intents and entities. What are we waiting for? Let's jump ahead and build a bot.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (3), [[Representational State Transfer (REST)|Rest]] (1), [[Cloud Computing]] (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Designing conversations](https://www.linkedin.com/learning/developing-chatbots-with-azure/challenge-designing-conversations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/developing-chatbots-with-azure/challenge-designing-conversations?u=76281980&t=0)** (upbeat playful music)
>
> **[0:07](https://www.linkedin.com/learning/developing-chatbots-with-azure/challenge-designing-conversations?u=76281980&t=7)** - [Instructor] What you learn really sticks when you can apply all of it to a real-world problem. For the [[Representational State Transfer (REST)|rest]] of the course, while I build a product bot, you will follow along and build your own version of a bot for this challenge. The bot that you're going to build is called a job bot, a bot that can answer questions about job description of our Red Tech 30 company. For this exercise, think of a conversation that a person can have when applying to Red Tech 30. Identify the static questions, and intents and entities. There is no right or wrong answer to this exercise. So feel free to be as creative as possible. Good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat playful music) (1)

#### [Solution: Designing conversations](https://www.linkedin.com/learning/developing-chatbots-with-azure/solution-designing-conversations?u=76281980)

> [!transcript]- Transcript
>
> **[0:06](https://www.linkedin.com/learning/developing-chatbots-with-azure/solution-designing-conversations?u=76281980&t=6)** - [Instructor] Hello, there. That was and intense challenge, wasn't it? I hope you had fun working through it. Like I said, there is no right or wrong answers. So, here is my version of the solution. The challenge bot for you to boot is a Job Bot that answers questions about job descriptions of a company. The intent of the user is pretty obvious in this case. Even before they land on the bot. There are a couple of options here. I could avoid the usual pleasantries like, Hi and Hello. And jump right in to, "I'm a (inaudible) developer, I'm looking for a job with five years of experience. In which the bot will give an answer outright. Or just start with a normal Hi. And the bot takes me through the job duration journey by asking me questions like, what kind of job are you looking for. My Static Intents will look something like, Introductions, Get company info, and whether the job is remote or not. And Dynamic Intents include, Get job list, Get application list, and Get reviews. If you're here, give yourself a big pat on the back. Because you're halfway through the course. For the [[Representational State Transfer (REST)|rest]] of the course we'll use this design as a guiding light. And code a bot using [[Microsoft Azure|Azure]] QnA Maker, LUIS and bot frame work. Let's get going.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1), [[Microsoft Azure|Azure]] (1)
> **Env Vars:** luis (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 4. Enhancing Your Chatbot Actions

[↑ Back to Table of Contents](#table-of-contents)

#### [Setting up the Azure account and building an echobot](https://www.linkedin.com/learning/developing-chatbots-with-azure/setting-up-the-azure-account-and-building-an-echobot?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/developing-chatbots-with-azure/setting-up-the-azure-account-and-building-an-echobot?u=76281980&t=0)** - [Instructor] Laying a strong foundation is important when learning something new. That's what we have been doing so far in the course. Moving forward, we will convert all the learnings into code. Every chat bot project needs a good setup. For this we need an [[Microsoft Azure|Azure]] account. Pull off the project repository, [[Microsoft]] bot emulator and pipe the knowledge. Let's set this up one by one. For this bot, we are going to use two Azure resources. One is Azure QNA maker, another one is Microsoft Luis. Let's start by creating these resources in the Azure portal. Click on, create a resource search for QnA maker in the QnA maker service Click on create select the resource group if one already exists, if not create one for yourself and give your bot a name in our case product-bot-redtech30, click and select on a pricing dire. Use an Azure search pricing dire and you can leave the [[Representational State Transfer (REST)|rest]] of the things like that and click on review plus create. Once you're happy with all the information provided, click on create. Once you click on create, the resource will be created and you can look at it in the home directory. Now you can see, I have Azure chat bots created. Similarly, let's create one for Luis. Search for Luis and you will see language understanding in the dropdown click on that. similarly click on create.
>
> **[1:35](https://www.linkedin.com/learning/developing-chatbots-with-azure/setting-up-the-azure-account-and-building-an-echobot?u=76281980&t=95)** Select a resource group. I'm going to use the same resource group. Give the chat bot a name. Let's say redtech30-luis and select the location. I'm going to choose a random location. Let's say west US, and then a pricing dire and a prediction pricing dire. All of this is going to be free because we are just building a demo bot. click on review plus create. Once you're happy with all this information click on create, and this will again help you're in your home like this. So I have my two services and one resource group created. Now let's set up the QnA maker under QnA [maker.ai](https://maker.ai) website. Click on create a new knowledge base. Here you can see you have your [[Microsoft Azure]] ID select the subscription select the service that you have created previously and that will automatically select your language. Give your knowledge base a name something like a product bot. And here you can add your questions from a CSV or a document, but for now I'm going to to skip this because we are going to populate this later. Once you're happy with everything, click on create. Once you create your knowledge base you will see that appearing in my knowledge bases or tab. So I have my current two knowledge basis. One for job bot another one for tech bot created already. Similarly, we have to set up Luis service SL. Go to [luis.ai](https://luis.ai) and click on create a new app.
>
> **[3:11](https://www.linkedin.com/learning/developing-chatbots-with-azure/setting-up-the-azure-account-and-building-an-echobot?u=76281980&t=191)** This is a new app for your particular chat bot project. Give your app a name in my case it's redtech30_product bot. Give your bot a culture, which is a language. Give it a description and, you have to select a prediction resource that you created earlier. Once you're happy with everything, click on done. Once you create your app it will be listed in your homepage. I have two (indistinct) already created one for the job bot and another one for the product bot. Next we need to download Microsoft bot emulator, go to Microsoft bot emulator [[GitHub]] repository and click on download from one of these images that's available. If you're using Mac, you can download the Mac image. If you're using [[Linux]] or [[Windows]] you can choose the one appropriately. So once you have it downloaded you can open it by clicking on Microsoft bot emulator. And it'll appear something like this. The last and the final step for this section is to set up the code repository. Once you have the bot emulator downloaded go to [[LinkedIn]] learnings github repository and clone this repo into your visual studio code. You are free to use any other editors, just like this one. I'm currently on the 04_01 branch. This is the branch for this section. And in this repository, there is a step start MD file.
>
> **[4:47](https://www.linkedin.com/learning/developing-chatbots-with-azure/setting-up-the-azure-account-and-building-an-echobot?u=76281980&t=287)** This gives you the instructions to set up the echo bot. So let's follow the steps one by one. The first step is to install all the requirements before this I'm going to activate my (indistinct). This is very common practice for every bite and project. So let's install all the requirements since I have them already installed. It's not going to take a lot of time. Next using the cookie-cutter let's set up the echo bot. So echo bot is the starter template. From there you can pretty much download any other bot. So I have them already downloaded. Now you have to give your bot a name in our case, it's redtech30_product bot and you can give a bot description or you can just keep it once you have them created. You can see there is a folder that's created right here. This gives you the basic template for all your bot projects. So it has a bot.by file and an .app by file. Those are the main files that we will be working with. The next step is to install all the requirements that is very specific for the bot project that we just created. So let's do a PIP install redtech30 product bot/requirements.TXT. So that is also already installed. So we don't have to worry about that. If you're doing this for the first time it's going to take quite some time. That's all right. Now let's go to (indistinct) MD and see what the next step is. We have to CD into our redtech30_product bot
>
> **[6:21](https://www.linkedin.com/learning/developing-chatbots-with-azure/setting-up-the-azure-account-and-building-an-echobot?u=76281980&t=381)** and we have run the [[Python (Programming Language)|Python]] app.bike So this is our bot server. So let's run this. Now you can see the bot server is running at three nine, seven, eight. This is the servers local host address. It's replace this URL with this address. And the whole hand point has to go into Microsoft bot emulator for us to work with the echo bot. So now our echo bot template is up and running and we are going to see how it's working using Microsoft bot emulator. So let's go to Microsoft bot emulator and click on open a bot and paste this URL. And you don't have to fill any of these just click on connect. The bot will be connected right now. It starts with a hello and welcome message. Now for whatever you say the bot is going to just repeat what you're saying. So you can type even a very long sentence. It's going to be the same. So that's your echo bot. Coming back to the code. There are two files that you will be primarily working on. (indistinct) is the bot server that you will run you won't make changes here and let it absolutely required. Whereas the bot.by file is the file that you will be primarily working on here. Here you have a class called my bot which is extended from activity handler. This performs two tasks. Whenever there is a new message, it takes that message text and add you said which we saw in the bottom later, right?
>
> **[7:54](https://www.linkedin.com/learning/developing-chatbots-with-azure/setting-up-the-azure-account-and-building-an-echobot?u=76281980&t=474)** So it adds that and returns it as activity again. So this is your reply message. If the bot user is coming for the first time then it will say, hello and welcome. So those are the two messages that we saw in the bottom later. Hello and welcome vendor user pops in for the first time. And you said, plus whatever the user said whenever the user is interacting with the bot. So those two code goes in here. So for the rest of the course we will be editing bot.by file to fit the requirements of our product bot.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft]] (8), [[Microsoft Azure|Azure]] (6), [[Representational State Transfer (REST)|Rest]] (2), [[GitHub]] (2), [[Microsoft Azure]] (1)
> **UI Navigation:** click on (16), go to (5), select the (4), dropdown (1)
> **Prerequisites:** set up (5), install (4), setup (1)
> **Env Vars:** url (2), qna (1), csv (1), pip (1), txt (1)
> **Definitions:** is a  (5)
> **CLI Commands:** pip (1), cd (1), python (1), make (1)
> **Tools:** github (2), azure portal (1), visual studio (1)
> **Exercise Files:** template (3), download the (1)

#### [Training QnA Maker and static productbot](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=0)** - [Instructor] An echo bot can be fun for irritating your friends but to solve a real business world problem we need more. When we designed a product bot became across intents which are segregated into static and dynamic questions. For our chat bot to support tactic questions, we will use [[Microsoft]] QnA maker. Go to [QnAmaker.ai](https://QnAmaker.ai) website, click on the product bot that you have already created. In here you can see that I've already added a bunch of questions. What is redtake 30. Where are you located? And bunch of hi, hallo messages. But if you're just starting out this will be a blank slate and you can start by clicking on add QnA pair and add all the questions and it's associated alternate phrases like, hi, Hey, hello, what's up? Are you there? (keyboard clicking) Hello there. (keyboard clicking) So you can just go on and on and add all the questions under one particular intent and what would be the answer for the same? Hey, product [[Microsoft Word|word]] here. (keyboard clicking) How can I help you? (keyboard clicking) So once you're happy with this training this is like basically adding your training phrases. Once you're happy with this click on save and train. This will train the model in the background and it will usually take about a minute. And once you're done with the training, you can test it. So now that we have the model trained,
>
> **[1:38](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=98)** let's test this, right? So let's say hi and the product bot is going to load the model do some predictions in the background. Apparently you won't have any idea about it but this is all happening in the background. So it says, hello there, welcome redtech30's product bot. How cool is that? So that's pretty much working in here. And once you're happy with everything that's happening here. So let's ask where are you located? (keyboard clicking) Yeah, we are headquartered at US. So we have also offices in Canada and Australia. So that's good. So it's pretty much working fine. Once you're happy with this, you can click on publish. So publish will actually take your model and expose it to the outside world. So once you publish, you will get few details which you can use in your code. So the details that you would need are this post URL which will have an app ID. This is your application ID and then an authorization key which is going to be here and then the host of your [[Microsoft Azure|Azure]] account. So this is where your maker model is hosted. And this is your application ID. And this is your end point key. And API request will have question as a key and your question. So we can use this format to make calls from our code. Now let's switch to our code and see how to integrate this QnA maker app into our chat bot.
>
> **[3:12](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=192)** Now I'm on my code base. The first step will be to copy all these credentials that we just saw and based it under ENV file. So let me quickly do that. I'm going to copy the app ID. I'm going to copy the end point key and the host name. So that's going to be the end point. So that's all the credentials that you need right now. The next step would be to load this configuration into the code. So to do this, let's open config.py, the default template already comes with load.env module imported. And the function is being called. This will load the credentials in ENV file into the environment variable, which you can later access using OS.enveron. Like you can see, we have QnA maker knowledge base ID, the endpoint key and the endpoint host. So let's go to the bot file and actually integrate the QnA service. So the first thing that you would need here, is a QnA makers, API calling. So to make that, the first thing that you should understand is that your message is going to come in from the user. And it's going to hit this on message activity. This is going to call your QnA maker service with that message. And the QnA maker will give you a response. And this response, you will send it back to the user. So this is the flow that we are trying to achieve. So to achieve this, you need this QnA maker
>
> **[4:47](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=287)** services object. So let's start by creating that object. So I'm going to add an init method. This is an initializer in [[Python (Programming Language)|python]], and this initializer is going to get some config and using that config, it is going to create a QnA maker object. So this is going to be a self object, and it's going to use a QnA maker class to create this object. So this QnA maker class needs a QnA maker endpoint. We need to still import all this, but this is how it's going to be. This is the API specification for defining these objects. So these two we need right now. So this can be imported from the bot [builder.ai](https://builder.ai).QnA
>
> **[5:45](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=345)** and import QnA maker and QnA maker endpoint. So with this classes, we can create our QnA make object. For the QnA maker object, you need to send the knowledge base ID, the end point key (keyboard clicking) and the host. So this, you can get it from config.QnA. So this is your configurator. From here, what are the variables we are going to get, this word we're going to paste it. Config.endpoint_key and config.endpoint host.
>
> **[6:39](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=399)** So we have the QnA maker object created. Let's also check whether this config is being passed to my bot. So this my bot is initialized in app.py. So let's go to my bot. So there's no config. And the config is actually here. It is learning the default config. So we have to pass that config to the objects that config equal to config. Great. So now we have the QnA maker object or conflict is pass from app.py it to the bot.py. And it's reading all the credentials and creating the QnA maker object. We are done with the initialization part next we need to send a message to QnA maker and that happens on message activity. So here you have to send this context to the QnA maker service. So QnA maker service has something called as QnAmaker.getanswers function. And to this, you can pass your turn context and it will return you a response. And this method, this get answers method is an asynchronous method. So you have to wait for the response. So you use a bait and it's not mandatory that every time there's a question, there's going to be an answer. So if there is a response, if it's not a null object, and the length of the response is greater than zero,
>
> **[8:18](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=498)** which is to have at least one reply, then you can send a response, right? And to get this response, you need to get it from response of zero.answer. I can see this is a text response you have to enwrap it in message factory.text. So this is a function that signifies broad framework that it's a text message response. If this is not true, we have to return a valid message. So far we have been returning whatever the user is seeing, but in this case, we will return no valid response, for your question. So some valid message as the response. With this, we are pretty much done with all the coding for the bot. Now let's see if all this works together, let me open my terminal and run the python app.py, similar to the one, we did in echo bot. You can see it's running in 3978 bot, and we can connect to the bot via our bot emulator and let's connect. The same, Hello and welcome message pops up. Let's say, hi and when I say hi, it has to hit the QnA maker and get the response from there. So it's taking a moment there.
>
> **[9:52](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=592)** That's the response from our redtech30. Next, let's ask what is redtech30, which means our code has been clean and it's working completely fine. With that we have a bot that answers basic questions about our redtech30 company. QnA maker lets you build static bots without worrying a lot about machine learning. QnA maker though, looks simple, it actually gives your bot a personality. I hope I have kick started your creativity engine. Let's see how far it goes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (2), [[Python (Programming Language)|Python]] (2), [[Microsoft]] (1), [[Microsoft Azure|Azure]] (1)
> **UI Navigation:** go to (3), click on (3), switch to (1)
> **File Paths:** app.py (3), config.py (1), load.env (1), bot.py (1)
> **Env Vars:** api (3), env (2), url (1)
> **Definitions:** is a  (4), is an  (2)
> **Non-Speech:** (keyboard clicking) (6)
> **CLI Commands:** make (3), python (2)
> **URLs:** [qnamaker.ai](https://qnamaker.ai) (1), [builder.ai](https://builder.ai) (1)

#### [Training LUIS and dynamic productbot](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=0)** - [Instructor] We will start by copying all the app id, LUIS API key and the host name to the .env file, and similar to the Q&A maker, let's load this configuration into our default configuration. Once you're happy with these two, next thing as always we are going to work with is the bot.py file. I like Q&A maker example, the LUIS example has a lot more coordinate by default for you to work with. So the first shank I'm going to show you is this piece where we have already sent a message to Q&A maker and got the response. In case of there is no response, we will be using LUIS to see if there is any match. For this we have an intent handler here, which is returned by us to handle the product, both specific intents and this intent will take the response from the LUIS recognizer it, and handle the intent. So let's see what this recognizer is. If you scroll to the top, you will see that there are two other objects that's being created. One is the LUIS application using the LUIS application class. And other one is the recognize it, which is created using the LUIS recognizer class. These two objects are necessary to call the LUIS API. The two classes can be important from [botbuilder.ai](https://botbuilder.ai).LUIS module.
>
> **[1:35](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=95)** And the two classes can be imported from [botbuilder.ai](https://botbuilder.ai).LUIS module. Now you can also see there is a product intent handler here, it's just an edit function. This is going to handle all the data related stuff. So this is primarily to map your data and your intents and entities. So similar to Q&A maker, let's start by looking at the flow, user sends a message and this is being sent to Q&A maker. And in case of no response, the same message, like the user message is sent to LUIS, and later response from the LUIS, you're going to call the intent handler. This intent handler is going to bap the intent to the responding action. So that action is going to happen in the product intent handler. So this product intent handler, will [[Fetch]] the data from data handler, which is the product data Fetcher. And this product data Fetcher will get you the data and intent handler will return the response back to the user. So from here the response will go back the user. So that's the flow and we have already covered these spots in the template code. Now let's fill up product intent handler
>
> **[3:09](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=189)** so that it can fetch the data and provide the response. Let's start with the intents one by one, for example get product by category, get product info and get product price. So let's create functions for these two, get product price itself and get product info.
>
> **[3:39](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=219)** Similarly for get product by category.
>
> **[3:48](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=228)** So using this it's very easy to map the intent name directly to the function name. So each of this function will call the respect of product data Fetcher and get the data. So let's quickly see what's there in the product data fetcher. I have returned this module completely for you. It doesn't come with the [[Microsoft]] bot AI. I have given you the template. So the data is in the product.CSV file. In our case, it's in a CSV, but you are free to use a database or anything else that can store the data. So coming back to the data Fetcher here you can see I'll read the product data frame and whenever I call get product I'll get all the product information. When I call product info I'll get all the product description. And when I call get price, I'll get the price information. And when I called list [[Microsoft Products|products]], I list out all the products that matches this specific category. So these are basic filter functions that have returned. So whenever there is a change in the data all you have to do is you'd have to just change this file and recreate this product data Fetcher to fit your requirement. Now let's go back to the bot.py and finish the functions. The first thing I would need here is the product name. So the product name I can get from the base intent handler. So the base intent handler
>
> **[5:22](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=322)** has quite a number of things that you have to see. So let's go to the base intent handler that's in the Utils territory. And in here, the intent handler is again a template that I've given you so that you don't have to worry about all these things. This has two main functions. One is to get the entities, given the response from LUIS. It will get all the entities. And the next thing is get top intent. This will get you the maximum intent. The ones we saw in the test phase, right? So we will get that intent over here. And there's a default intent in this case it's just intent non-supporter. And finally, there is a handle method. This handle method we'll get the top intent called the respect to function which we are going to define in our product intent handler. If the intent is not available it will call the default intent. So let's start by getting the product name and the product name you will get it in self.get_entities.getoff the entity name,
>
> **[6:37](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=397)** the title is product name and I'm just going to do it for one product right now. And there might be a case where the product named key might not be available. And for that, I'm going to handle the exception because we don't want our bot to break at any point. So we will handle a key error and we'll return cannot recognize a product in your credit, right? Now to get the price we will use our data Fetcher and we will get the price. So since these functions are already written, we just have to pass the product name and get the price. Once we have the price let's construct a string for our response. So this string is going to be the price of product and your product name is price.
>
> **[7:42](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=462)** So that finishes up our one intent completely. Similarly, you can do the same for the [[Representational State Transfer (REST)|rest]] of the intent. It's pretty much the same. So you're going to use the same code to get the product name. And instead of the price you're going to get the info from self.data_Fetcher.get_product info, and you will pass the product name and can return the information. Since this is already the description of the product, I'm not going to format it into anything. So with that, we have done with a couple of intents. Let's test this out before moving on and creating more intents. Running the chat bot is the same thing. You have to run [[Python (Programming Language)|python]] app.py. And if everything is well and good, the bot will run seamlessly. Let's go to the Microsoft bot emulator and see if this thing works. Let me start with the high. It should go to the Q&A maker that has worked well. The next thing is, I'm going to ask for a particular product, what is red30 db-migrate? Okay, actually, this has run to the Q&A maker itself. Let's actually ask what is red30 learns price.
>
> **[9:13](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=553)** So there isn't bug, apparently product intent handler has no function called get entities which is very weird.
>
> **[9:53](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=593)** Let's start with a simple, hi this should go to a Q&A maker and get the response. And what is the price of red30 learn? So that's going to hit the LUIS and it's going to come back to our data fetcher. Looks like we still have a bug, product data Fetcher has no attribute get product price. So data Fetcher doesn't have get product, get price is the function, not get product price. So let's quickly fix that and restart the application. So it's normal to get these arrows when you're running the application as well because there is no way to test it without actually testing it. So let me copy this and paste it and hope this works.
>
> **[10:48](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=648)** Oh, there, the price of red30 learn is $0.35 per hour. So this is coming from our data or TSB file. Similarly, let's look at one other product. Let me see what this is giving for red30 cloud. Tell me about red30 cloud. So this is going again, hit the cloud hit the LUIS and get you the cloud description. So this description is coming from the description tag. So similarly, you can add more intense in your LUIS, map all of that to your data Fetcher and your intent handler. And there, it will pop up in your chat bot. Wila, now we have a fully functioning chat bot that can answer both static and dynamic questions. We have used a CSV file for the sake of simplicity and ease of understanding. On implementing a real time chat bot, you would replace this with the DB Grady or an API call. Can also deploy and consume this chat board via a chat interface like you would consume any other web application. That a combination of Q&A maker and Microsoft LUIS, you can tackle almost all the business use cases for building a chat bot. I hope you try all of that.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft]] (3), [[Fetch]] (2), [[Microsoft Products|Products]] (2), [[Representational State Transfer (REST)|Rest]] (1), [[Python (Programming Language)|Python]] (1)
> **Env Vars:** luis (17), api (3), csv (3), tsb (1)
> **File Paths:** bot.py (2), product.csv (1), app.py (1)
> **UI Navigation:** go to (3)
> **Exercise Files:** template (3)
> **Definitions:** is a  (3)
> **Analogies:** similar to (2), for example (1)
> **Code Identifiers:** get_entities (1), get_product (1)

#### [Challenge: Write your own chatbot](https://www.linkedin.com/learning/developing-chatbots-with-azure/challenge-write-your-own-chatbot?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/developing-chatbots-with-azure/challenge-write-your-own-chatbot?u=76281980&t=0)** (upbeat playful music)
>
> **[0:07](https://www.linkedin.com/learning/developing-chatbots-with-azure/challenge-write-your-own-chatbot?u=76281980&t=7)** - [Instructor] Ready to code a bot all by yourself? Great, remember the job bot you designed in the previous section? Time to get it up and running. For this challenge, we have a jobs page at Red Tech 30 website, and it's associated with the data, which is available in our repo. Go ahead and grab the starter code and train a few intents in Luis and QnA Maker, make changes in the bot.py file that fits the requirements of your chat bot. If you feel stuck at any point, feel free to refer to the previous videos and replicate the same. This challenge can take you a few hours to few days. Refer to the [[Microsoft Azure|Azure]] documentation for further readings and more details about the topics. I hope you have a lot of fun and good luck. I'll see you at the solution video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (1)
> **File Paths:** bot.py (1)
> **CLI Commands:** make (1)
> **Exercise Files:** starter code (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat playful music) (1)

#### [Solution: Write your own chatbot](https://www.linkedin.com/learning/developing-chatbots-with-azure/solution-write-your-own-chatbot?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/developing-chatbots-with-azure/solution-write-your-own-chatbot?u=76281980&t=0)** - [Instructor] Hello there. How was the chat board building experience? Hope it was not too hard, like I said in the previous challenge, there is no right or wrong answers. If you get the bot up and running, then we are good to go. Here is how I build the job bot. I created a new Q&A maker knowledge base, and this is pretty similar to what we have done for the product bot. We have nominal questions like where are you located? Where is the company, and some greetings. Next up, I have this job bot app in luis, where I have a single intern called get_job, which is trained with examples to get job based on technology and number of years of experience. To bring it all together I created a job in 10 handler, which has the single intent handler function which is get_job, which takes all our entities as filters for the get job function from data fetcher. The data fetcher goes through the CSV where we have all the jobs listed, and filters and gets the job that matches the query of the user. Now let's see this in action. Hi, what is Realtek30? And it's going to give me the introduction about Realtek30. And I'm going to ask my query saying,
>
> **[1:33](https://www.linkedin.com/learning/developing-chatbots-with-azure/solution-write-your-own-chatbot?u=76281980&t=93)** do you have any [[Python (Programming Language)|python]] jokes for five years experience? And it's going to give me a response, and wala, we have a fully functioning board ready to be deployed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (1)
> **Code Identifiers:** get_job (2)
> **CLI Commands:** python (1)
> **Env Vars:** csv (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Advancing the chatbot ladder](https://www.linkedin.com/learning/developing-chatbots-with-azure/advancing-the-chatbot-ladder?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/developing-chatbots-with-azure/advancing-the-chatbot-ladder?u=76281980&t=0)** - [Instructor] Give yourself a big pat on the back because we have come to the end of the course. I thoroughly enjoyed walking you through this chat bot journey. Remember the path that we have come along? We started with a little theory on whats and whys of a chat bot, to conversation design, to building one on our own. Where to go from here? That's the million dollar question. Chat bot deployment is no different than a web application deployment. So that's something you can try. Chat bot also needs a good user interface, and as a chat bot developer you expose the APIs that these message platforms can connect to. [[Microsoft Azure|Azure]] has clear documentation on how to connect to these messaging channels. Those are worth checking out. That might feel like a lot of things left untouched, but trust me, the aim of the course is to leave out the platform specific details and teach you the core foundations of chat bots. From here, you can do a deep dive and check out the rich set of features that the Azure bot framework provides, or you can try swapping out Azure altogether and try different bot platforms, like Dialogflow or Rasa. Finally, learning to build a chat bot is the same as [[Software Development]] journey. You never stop learning. So keep the learning vibe on and I'll see you in a different course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (3), [[Software Development]] (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Bhavani Ravi]]

## Path Context

### In [[Advancing Your Azure Developer Skills- Exploring Complex Application Development]]
← [[Azure Developer Associate (AZ-204) Cert Prep- Implement Azure Security]] | **5 of 7** | [[Microsoft Azure Synapse for Developers]] →

## Appears In

- [[Advancing Your Azure Developer Skills- Exploring Complex Application Development]]

---

[↑ Back to top](#)