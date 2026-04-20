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
  - Advancing Your Azure Developer Skills- Exploring Complex Application Development
path_count: 1
tags:
  - course
  - topic/cloud-computing
  - topic/network-and-system-administration
  - topic/software-development
status: not-started
created: 2026-04-19
---

![Developing Chatbots with Azure](https://media.licdn.com/dms/image/v2/C4E0DAQE1knp7LibUCQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1611696632946?e=2147483647&amp;v=beta&amp;t=0IWVucb1KvT1xojB_0-VjEc2Gx36l0kftKQE-b7otrs)

# Developing Chatbots with Azure

> What exactly is a chatbot? How does it differ from a bot, how can you develop one, and how can you use it, once it is developed? Instructor Bhavani Ravi walks you through learning about chatbots and developing your first one. Bhavani begins by describing what a chatbot is, what types of chatbots exist today, and how a chatbot differs from bots and applications. She goes over the components of a ch

> [LinkedIn Learning](https://www.linkedin.com/learning/developing-chatbots-with-azure) | 1h 2m
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Bhavani Ravi]]

## Table of Contents

### Introduction

#### Chatbots are revolutionizing the web
> [LinkedIn Learning](https://www.linkedin.com/learning/developing-chatbots-with-azure/chatbots-are-revolutionizing-the-web?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/developing-chatbots-with-azure/chatbots-are-revolutionizing-the-web?u=76281980&t=0)** - [Bhavani] Chat bots, currently being the 9 billion dollar market, is revolutionizing the web by replacing applications.
>
> **[0:07](https://www.linkedin.com/learning/developing-chatbots-with-azure/chatbots-are-revolutionizing-the-web?u=76281980&t=7)** Developers who stay ahead of the curve will see themselves in high demand as the businesses start to implement chat bot solution across their products and services.
>
> **[0:17](https://www.linkedin.com/learning/developing-chatbots-with-azure/chatbots-are-revolutionizing-the-web?u=76281980&t=17)** In this course, we will go through five stages of building a chat bot, right from conversation design to consuming an external data using Azure bot framework and Python.
>
> **[0:29](https://www.linkedin.com/learning/developing-chatbots-with-azure/chatbots-are-revolutionizing-the-web?u=76281980&t=29)** The course focuses on laying down a strong fundamental and hands-on experience so that you would be able to swap the bot framework for other frameworks, like Dialogflow or Rasa.
>
> **[0:42](https://www.linkedin.com/learning/developing-chatbots-with-azure/chatbots-are-revolutionizing-the-web?u=76281980&t=42)** I'm Bhavani Ravi.
>
> **[0:43](https://www.linkedin.com/learning/developing-chatbots-with-azure/chatbots-are-revolutionizing-the-web?u=76281980&t=43)** I love developing chat bots for businesses and have been doing this for the past four years.
>
> **[0:48](https://www.linkedin.com/learning/developing-chatbots-with-azure/chatbots-are-revolutionizing-the-web?u=76281980&t=48)** I'm here to teach you everything I've learned along the way.
>
> **[0:52](https://www.linkedin.com/learning/developing-chatbots-with-azure/chatbots-are-revolutionizing-the-web?u=76281980&t=52)** Apart from being a multi-billion dollar market, chat bots are fun to learn and build.
>
> **[0:58](https://www.linkedin.com/learning/developing-chatbots-with-azure/chatbots-are-revolutionizing-the-web?u=76281980&t=58)** So join me on this journey and build your first chat bot with Azure and Python.

> [!info]- Semantic Content
>
> **CLI Commands:** python (2)
> **Speakers:** - [bhavani] (1)


### 1. Introduction to Chatbots

#### What is a chatbot?
> [LinkedIn Learning](https://www.linkedin.com/learning/developing-chatbots-with-azure/what-is-a-chatbot?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/developing-chatbots-with-azure/what-is-a-chatbot?u=76281980&t=0)** - [Instructor] What is a chatbot?
>
> **[0:02](https://www.linkedin.com/learning/developing-chatbots-with-azure/what-is-a-chatbot?u=76281980&t=2)** Well, this is easy.
>
> **[0:04](https://www.linkedin.com/learning/developing-chatbots-with-azure/what-is-a-chatbot?u=76281980&t=4)** There's a good chance that you're sitting next to Google Home or Alexa as you're taking this course.
>
> **[0:09](https://www.linkedin.com/learning/developing-chatbots-with-azure/what-is-a-chatbot?u=76281980&t=9)** Who knows, there might be a Siri or a Google Assistant waiting to pop up any moment now, but that's not it.
>
> **[0:18](https://www.linkedin.com/learning/developing-chatbots-with-azure/what-is-a-chatbot?u=76281980&t=18)** The chatbot is much more powerful than that.
>
> **[0:20](https://www.linkedin.com/learning/developing-chatbots-with-azure/what-is-a-chatbot?u=76281980&t=20)** Do you know, 80% of customer service businesses are moving to a chatbots?
>
> **[0:26](https://www.linkedin.com/learning/developing-chatbots-with-azure/what-is-a-chatbot?u=76281980&t=26)** Chatbots have a wide range of applications in medicine, education and finance.
>
> **[0:32](https://www.linkedin.com/learning/developing-chatbots-with-azure/what-is-a-chatbot?u=76281980&t=32)** These types of chatbots are called domain-specific chatbots.
>
> **[0:36](https://www.linkedin.com/learning/developing-chatbots-with-azure/what-is-a-chatbot?u=76281980&t=36)** A domain-specific chatbot understand and operate extremely well in business domains but it might not be able to crack a joke like our Google Assistant.
>
> **[0:48](https://www.linkedin.com/learning/developing-chatbots-with-azure/what-is-a-chatbot?u=76281980&t=48)** Throughout this course we will be focusing on solving a single business problem using domain-specific chatbots.
>
> **[0:55](https://www.linkedin.com/learning/developing-chatbots-with-azure/what-is-a-chatbot?u=76281980&t=55)** Let's get started.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Bots vs. chatbots vs. applications
> [LinkedIn Learning](https://www.linkedin.com/learning/developing-chatbots-with-azure/bots-vs-chatbots-vs-applications?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/developing-chatbots-with-azure/bots-vs-chatbots-vs-applications?u=76281980&t=0)** - [Instructor] We have talked about how domain-specific chatbots differ from generalized chatbots.
>
> **[0:06](https://www.linkedin.com/learning/developing-chatbots-with-azure/bots-vs-chatbots-vs-applications?u=76281980&t=6)** Similarly, understanding the subtle differences between chatbots, bots, and applications will help you anchor the concepts later.
>
> **[0:16](https://www.linkedin.com/learning/developing-chatbots-with-azure/bots-vs-chatbots-vs-applications?u=76281980&t=16)** Let's tackle the easy ones first, bots versus chatbots.
>
> **[0:20](https://www.linkedin.com/learning/developing-chatbots-with-azure/bots-vs-chatbots-vs-applications?u=76281980&t=20)** A bot is an automated tool designed to complete a specific task.
>
> **[0:25](https://www.linkedin.com/learning/developing-chatbots-with-azure/bots-vs-chatbots-vs-applications?u=76281980&t=25)** A chatbot is pretty much the same thing, just with a focus on conversation interfaces.
>
> **[0:31](https://www.linkedin.com/learning/developing-chatbots-with-azure/bots-vs-chatbots-vs-applications?u=76281980&t=31)** Chatbot, a subset of the bot family, created just to interact conversationally with humans.
>
> **[0:40](https://www.linkedin.com/learning/developing-chatbots-with-azure/bots-vs-chatbots-vs-applications?u=76281980&t=40)** Now, let's move on to web applications.
>
> **[0:44](https://www.linkedin.com/learning/developing-chatbots-with-azure/bots-vs-chatbots-vs-applications?u=76281980&t=44)** Have you ever used a web app?
>
> **[0:46](https://www.linkedin.com/learning/developing-chatbots-with-azure/bots-vs-chatbots-vs-applications?u=76281980&t=46)** What do you see?
>
> **[0:47](https://www.linkedin.com/learning/developing-chatbots-with-azure/bots-vs-chatbots-vs-applications?u=76281980&t=47)** A bunch of forms, buttons, checkboxes, and UI elements.
>
> **[0:52](https://www.linkedin.com/learning/developing-chatbots-with-azure/bots-vs-chatbots-vs-applications?u=76281980&t=52)** Basically, every user action has a different name and a spot using these HTLM elements.
>
> **[1:00](https://www.linkedin.com/learning/developing-chatbots-with-azure/bots-vs-chatbots-vs-applications?u=76281980&t=60)** Thereby, any developer can hook an action to each of these buttons.
>
> **[1:06](https://www.linkedin.com/learning/developing-chatbots-with-azure/bots-vs-chatbots-vs-applications?u=76281980&t=66)** We know exactly whether the user is trying to change the password or just signing up.
>
> **[1:13](https://www.linkedin.com/learning/developing-chatbots-with-azure/bots-vs-chatbots-vs-applications?u=76281980&t=73)** Now, imagine using a chatbot.
>
> **[1:16](https://www.linkedin.com/learning/developing-chatbots-with-azure/bots-vs-chatbots-vs-applications?u=76281980&t=76)** How do you interact with it?
>
> **[1:17](https://www.linkedin.com/learning/developing-chatbots-with-azure/bots-vs-chatbots-vs-applications?u=76281980&t=77)** By texting, right?
>
> **[1:19](https://www.linkedin.com/learning/developing-chatbots-with-azure/bots-vs-chatbots-vs-applications?u=76281980&t=79)** How will the bot differentiate between ordering a pizza and booking a flight?
>
> **[1:25](https://www.linkedin.com/learning/developing-chatbots-with-azure/bots-vs-chatbots-vs-applications?u=76281980&t=85)** This is when the chatbot have to perform intelligently compared to applications.
>
> **[1:32](https://www.linkedin.com/learning/developing-chatbots-with-azure/bots-vs-chatbots-vs-applications?u=76281980&t=92)** The intelligent agent that we need can interpret the human messages in a format that can be used by the applications to perform respect to action.
>
> **[1:45](https://www.linkedin.com/learning/developing-chatbots-with-azure/bots-vs-chatbots-vs-applications?u=76281980&t=105)** Bots are the superset, comprising of every piece of automation.
>
> **[1:50](https://www.linkedin.com/learning/developing-chatbots-with-azure/bots-vs-chatbots-vs-applications?u=76281980&t=110)** Chatbots, on the other hand, are the human-friendly, text-driven automation agents.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2)
> **Env Vars:** htlm (1)
> **Definitions:** is an  (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)


### 2. Chatbot Terminology and Architecture

#### Components of a chatbot system
> [LinkedIn Learning](https://www.linkedin.com/learning/developing-chatbots-with-azure/components-of-a-chatbot-system?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/developing-chatbots-with-azure/components-of-a-chatbot-system?u=76281980&t=0)** - [Instructor] Chatbots, like any other application, is a software system.
>
> **[0:04](https://www.linkedin.com/learning/developing-chatbots-with-azure/components-of-a-chatbot-system?u=76281980&t=4)** Hence, it is important to understand what it is made of.
>
> **[0:09](https://www.linkedin.com/learning/developing-chatbots-with-azure/components-of-a-chatbot-system?u=76281980&t=9)** Let us think this through.
>
> **[0:11](https://www.linkedin.com/learning/developing-chatbots-with-azure/components-of-a-chatbot-system?u=76281980&t=11)** Remember that the differentiating factor between web app and chatbot is that we provide input in the form of a text.
>
> **[0:20](https://www.linkedin.com/learning/developing-chatbots-with-azure/components-of-a-chatbot-system?u=76281980&t=20)** So it is obvious that we need a UI client to send and receive messages.
>
> **[0:25](https://www.linkedin.com/learning/developing-chatbots-with-azure/components-of-a-chatbot-system?u=76281980&t=25)** It can be existing platforms, like Slack, Facebook Messenger, Telegram, or you can build one on your own.
>
> **[0:33](https://www.linkedin.com/learning/developing-chatbots-with-azure/components-of-a-chatbot-system?u=76281980&t=33)** Next, we need a component to understand what the user is saying, a natural language understanding component in machine learning terms.
>
> **[0:42](https://www.linkedin.com/learning/developing-chatbots-with-azure/components-of-a-chatbot-system?u=76281980&t=42)** Now you don't have to master all the ML concepts behind NLU.
>
> **[0:47](https://www.linkedin.com/learning/developing-chatbots-with-azure/components-of-a-chatbot-system?u=76281980&t=47)** There are chatbot platforms to help us with that.
>
> **[0:50](https://www.linkedin.com/learning/developing-chatbots-with-azure/components-of-a-chatbot-system?u=76281980&t=50)** Some of the famous ones are Dialogflow by Google, [Wit.ai](https://Wit.ai) by Facebook, Rasa and Chatterbot, famous open source chatbot libraries, and IBM Watson.
>
> **[1:03](https://www.linkedin.com/learning/developing-chatbots-with-azure/components-of-a-chatbot-system?u=76281980&t=63)** For this course, we will be using Azure bot framework by Microsoft.
>
> **[1:08](https://www.linkedin.com/learning/developing-chatbots-with-azure/components-of-a-chatbot-system?u=76281980&t=68)** These frameworks abstract away the NLU functionalities and provide us an interface to be consumed by an API.
>
> **[1:17](https://www.linkedin.com/learning/developing-chatbots-with-azure/components-of-a-chatbot-system?u=76281980&t=77)** Though bot frameworks are great at understanding human language, it does not have access to the data for your use case.
>
> **[1:25](https://www.linkedin.com/learning/developing-chatbots-with-azure/components-of-a-chatbot-system?u=76281980&t=85)** For example, in case of a ticket booking, the airline companies have the data of flight availability.
>
> **[1:32](https://www.linkedin.com/learning/developing-chatbots-with-azure/components-of-a-chatbot-system?u=76281980&t=92)** Hence, the task of performing the action needs to be delegated to an external server.
>
> **[1:38](https://www.linkedin.com/learning/developing-chatbots-with-azure/components-of-a-chatbot-system?u=76281980&t=98)** We call this a bot server or an action server in chatbot terms, but it's just a plain old back-end system.
>
> **[1:48](https://www.linkedin.com/learning/developing-chatbots-with-azure/components-of-a-chatbot-system?u=76281980&t=108)** Now that we have gone through various components, let's see how these come together in building a chatbot.
>
> **[1:55](https://www.linkedin.com/learning/developing-chatbots-with-azure/components-of-a-chatbot-system?u=76281980&t=115)** The input from the user enters the bot platform.
>
> **[1:59](https://www.linkedin.com/learning/developing-chatbots-with-azure/components-of-a-chatbot-system?u=76281980&t=119)** The bot platform interprets the text, returns and API understandable format of what the user is saying.
>
> **[2:06](https://www.linkedin.com/learning/developing-chatbots-with-azure/components-of-a-chatbot-system?u=76281980&t=126)** This format is sent to the action server and the action is performed.
>
> **[2:11](https://www.linkedin.com/learning/developing-chatbots-with-azure/components-of-a-chatbot-system?u=76281980&t=131)** The result of the action is converted back into a text and sent to the user.
>
> **[2:17](https://www.linkedin.com/learning/developing-chatbots-with-azure/components-of-a-chatbot-system?u=76281980&t=137)** A successful chatbot as possible only when all these pieces works in harmony.
>
> **[2:24](https://www.linkedin.com/learning/developing-chatbots-with-azure/components-of-a-chatbot-system?u=76281980&t=144)** And as a chatbot developer, it's your job to ensure all these pieces fit and work together.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), abstract (1), interface (1), case. (1)
> **Env Vars:** nlu (2), api (2), ibm (1)
> **Definitions:** is a  (1), we call this (1)
> **URLs:** [wit.ai](https://wit.ai) (1)
> **Tools:** slack (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Chatbot engine, a deep dive
> [LinkedIn Learning](https://www.linkedin.com/learning/developing-chatbots-with-azure/chatbot-engine-a-deep-dive?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/developing-chatbots-with-azure/chatbot-engine-a-deep-dive?u=76281980&t=0)** - [Instructor] Chatbot engines are the intelligent officers of the chatbot world.
>
> **[0:04](https://www.linkedin.com/learning/developing-chatbots-with-azure/chatbot-engine-a-deep-dive?u=76281980&t=4)** There is a school of thought that AI is still a bunch of if-else statements.
>
> **[0:09](https://www.linkedin.com/learning/developing-chatbots-with-azure/chatbot-engine-a-deep-dive?u=76281980&t=9)** If that's true, why do we even need a chatbot engine?
>
> **[0:13](https://www.linkedin.com/learning/developing-chatbots-with-azure/chatbot-engine-a-deep-dive?u=76281980&t=13)** Human beings are the most unpredictable creatures, though we can't predict what the other person is going to say, we can understand what they are saying through our language skills.
>
> **[0:23](https://www.linkedin.com/learning/developing-chatbots-with-azure/chatbot-engine-a-deep-dive?u=76281980&t=23)** Similarly, you can teach a chatbot what each sentence means like you would teach a child.
>
> **[0:31](https://www.linkedin.com/learning/developing-chatbots-with-azure/chatbot-engine-a-deep-dive?u=76281980&t=31)** Imagine talking to a bot that is not trained and the user starts speaking to it.
>
> **[0:36](https://www.linkedin.com/learning/developing-chatbots-with-azure/chatbot-engine-a-deep-dive?u=76281980&t=36)** The user will get an experience of talking to a toddler, but as you train the chatbot engine with more and more examples, it can understand what the user is saying and extract necessary information to perform an action.
>
> **[0:52](https://www.linkedin.com/learning/developing-chatbots-with-azure/chatbot-engine-a-deep-dive?u=76281980&t=52)** Give it a bunch of sentences.
>
> **[0:54](https://www.linkedin.com/learning/developing-chatbots-with-azure/chatbot-engine-a-deep-dive?u=76281980&t=54)** The ability to separate text based on user's intent is called intent classification, which is a mere text classification in AI DOMs.
>
> **[1:05](https://www.linkedin.com/learning/developing-chatbots-with-azure/chatbot-engine-a-deep-dive?u=76281980&t=65)** For example, whether the user is trying to greet, or look for a restaurant, or book a table at a restaurant.
>
> **[1:14](https://www.linkedin.com/learning/developing-chatbots-with-azure/chatbot-engine-a-deep-dive?u=76281980&t=74)** The ability to extract necessary information from a sentence is called entity extraction.
>
> **[1:20](https://www.linkedin.com/learning/developing-chatbots-with-azure/chatbot-engine-a-deep-dive?u=76281980&t=80)** For example, cuisine, what time, what day, which flavor of topping, et cetera.
>
> **[1:29](https://www.linkedin.com/learning/developing-chatbots-with-azure/chatbot-engine-a-deep-dive?u=76281980&t=89)** With these two capabilities, a chatbot engine will now get the intelligence to clearly understand what the user is saying and what action they are trying to accomplish.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2), is called (2)
> **Analogies:** for example (2), imagine (1)
> **Speakers:** - [instructor] (1)

#### Intent classifier
> [LinkedIn Learning](https://www.linkedin.com/learning/developing-chatbots-with-azure/intent-classifier?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/developing-chatbots-with-azure/intent-classifier?u=76281980&t=0)** - [Instructor] Let's think a little more about intent classification.
>
> **[0:04](https://www.linkedin.com/learning/developing-chatbots-with-azure/intent-classifier?u=76281980&t=4)** The intent classifier is the bridge that connects what the user is saying to what the user is trying to accomplish.
>
> **[0:12](https://www.linkedin.com/learning/developing-chatbots-with-azure/intent-classifier?u=76281980&t=12)** Though the chatbot engine encapsulates the NLP aspects of intent classification, it is important to understand them to define a successful chatbot.
>
> **[0:23](https://www.linkedin.com/learning/developing-chatbots-with-azure/intent-classifier?u=76281980&t=23)** Let's look at the wordbot example.
>
> **[0:25](https://www.linkedin.com/learning/developing-chatbots-with-azure/intent-classifier?u=76281980&t=25)** It has features like get meaning, get opposite, get root words, get example sentences.
>
> **[0:32](https://www.linkedin.com/learning/developing-chatbots-with-azure/intent-classifier?u=76281980&t=32)** From the look of it, you might think there are four actions; hence, there should be four intents.
>
> **[0:39](https://www.linkedin.com/learning/developing-chatbots-with-azure/intent-classifier?u=76281980&t=39)** Though the segregation is conceptually correct, the NLP text classification system works based on probabilities, that is, words that are closer to each other will have the same score.
>
> **[0:51](https://www.linkedin.com/learning/developing-chatbots-with-azure/intent-classifier?u=76281980&t=51)** For the wordbot, the sentences, "What's the meaning of good?"
>
> **[0:55](https://www.linkedin.com/learning/developing-chatbots-with-azure/intent-classifier?u=76281980&t=55)** and "What's the opposite of good?" differ only by one word, making it difficult for the ML models to predict the intent.
>
> **[1:05](https://www.linkedin.com/learning/developing-chatbots-with-azure/intent-classifier?u=76281980&t=65)** In this case, it's a good idea to merge these sentences and mark the differing word as an entity.
>
> **[1:13](https://www.linkedin.com/learning/developing-chatbots-with-azure/intent-classifier?u=76281980&t=73)** Another important feature that the intent classifier offers is the ability to find sentences that the bot is not trained for.
>
> **[1:21](https://www.linkedin.com/learning/developing-chatbots-with-azure/intent-classifier?u=76281980&t=81)** These are called fallback intents.
>
> **[1:24](https://www.linkedin.com/learning/developing-chatbots-with-azure/intent-classifier?u=76281980&t=84)** This helps us to capture sentences so that we can train the bot later.
>
> **[1:30](https://www.linkedin.com/learning/developing-chatbots-with-azure/intent-classifier?u=76281980&t=90)** For example, if I ask my bot about the origin and the usage of the word which it's not trained for, it would classify them as other and as a chatbot developer, I can go back and look at all the other sentences and retrain my bot.
>
> **[1:49](https://www.linkedin.com/learning/developing-chatbots-with-azure/intent-classifier?u=76281980&t=109)** Oftentimes as a chatbot developer, you won't be exposed to the internals of the chatbot engine.
>
> **[1:55](https://www.linkedin.com/learning/developing-chatbots-with-azure/intent-classifier?u=76281980&t=115)** But understanding that intent classification is a mere text classification, text classification happens based on scores are saying the words and probabilities and sentences that they're not trained for is treated as a fallback intent helps us build a solid chatbot.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), case, (1), for. (1), for, (1)
> **Env Vars:** nlp (2)
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Entity extractor
> [LinkedIn Learning](https://www.linkedin.com/learning/developing-chatbots-with-azure/entity-extractor?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/developing-chatbots-with-azure/entity-extractor?u=76281980&t=0)** - [Instructor] Just like intent classification, entity extraction is a key technique in NLP devised to extract useful information.
>
> **[0:09](https://www.linkedin.com/learning/developing-chatbots-with-azure/entity-extractor?u=76281980&t=9)** This comes really handy in a chatbot setting because we often want this useful information to perform the right action.
>
> **[0:18](https://www.linkedin.com/learning/developing-chatbots-with-azure/entity-extractor?u=76281980&t=18)** For example, in a flight booking chatbot beneath details like name, source, destination, date and time of travel, number of tickets, et cetera.
>
> **[0:30](https://www.linkedin.com/learning/developing-chatbots-with-azure/entity-extractor?u=76281980&t=30)** Most chatbot engine come with a predefined set of entities that are common to the language.
>
> **[0:37](https://www.linkedin.com/learning/developing-chatbots-with-azure/entity-extractor?u=76281980&t=37)** For example, name, date, location, et cetera.
>
> **[0:46](https://www.linkedin.com/learning/developing-chatbots-with-azure/entity-extractor?u=76281980&t=46)** A domain-specific chatbot should understand domain-specific language as well.
>
> **[0:52](https://www.linkedin.com/learning/developing-chatbots-with-azure/entity-extractor?u=76281980&t=52)** These are the words that might not be a part of the universal language, say English, but would make total sense in a particular use case.
>
> **[1:02](https://www.linkedin.com/learning/developing-chatbots-with-azure/entity-extractor?u=76281980&t=62)** For example, drug names in case of a medical chatbot, bank versus river bank or balance sheet in a financial chatbot, or Python as a programming language as opposed to Snake in a software development based chatbot.
>
> **[1:20](https://www.linkedin.com/learning/developing-chatbots-with-azure/entity-extractor?u=76281980&t=80)** Along with that, the chatbot should also understand certain abbreviations used by the user.
>
> **[1:27](https://www.linkedin.com/learning/developing-chatbots-with-azure/entity-extractor?u=76281980&t=87)** For example, NYC for New York City, USA for America.
>
> **[1:33](https://www.linkedin.com/learning/developing-chatbots-with-azure/entity-extractor?u=76281980&t=93)** Another important use case is to have synonyms mapped for a particular word.
>
> **[1:39](https://www.linkedin.com/learning/developing-chatbots-with-azure/entity-extractor?u=76281980&t=99)** It's very common that we use C followed by a hash for the word C#, and it's important to train all these entities in the entity extractor.
>
> **[1:52](https://www.linkedin.com/learning/developing-chatbots-with-azure/entity-extractor?u=76281980&t=112)** When it comes to entity extraction, the order of entities also play a major role.
>
> **[1:59](https://www.linkedin.com/learning/developing-chatbots-with-azure/entity-extractor?u=76281980&t=119)** For example, a sentence like, "I'm traveling from India to USA."
>
> **[2:04](https://www.linkedin.com/learning/developing-chatbots-with-azure/entity-extractor?u=76281980&t=124)** Though both India and USA are predefined entities location, their order means that the source location is India and the destination location is the US.
>
> **[2:14](https://www.linkedin.com/learning/developing-chatbots-with-azure/entity-extractor?u=76281980&t=134)** Swapping those two will end up in booking a wrong ticket.
>
> **[2:18](https://www.linkedin.com/learning/developing-chatbots-with-azure/entity-extractor?u=76281980&t=138)** Entity extraction helps the bot understand the business language of the users.
>
> **[2:23](https://www.linkedin.com/learning/developing-chatbots-with-azure/entity-extractor?u=76281980&t=143)** They are the deciding authorities of the chatbot system.
>
> **[2:27](https://www.linkedin.com/learning/developing-chatbots-with-azure/entity-extractor?u=76281980&t=147)** They have the capability to make or break the system.
>
> **[2:31](https://www.linkedin.com/learning/developing-chatbots-with-azure/entity-extractor?u=76281980&t=151)** As a chat bot developer, we should ensure to use predefined entities wherever possible, train the domain-specific language, map all the abbreviations a user might use to create an engaging chatbot.

> [!info]- Semantic Content
>
> **Analogies:** for example (5), just like (1)
> **Env Vars:** usa (3), nlp (1), nyc (1)
> **CLI Commands:** make (2), python (1)
> **Definitions:** is a  (1), means that (1)
> **Code Keywords:** case. (1)
> **Speakers:** - [instructor] (1)

#### Action server
> [LinkedIn Learning](https://www.linkedin.com/learning/developing-chatbots-with-azure/action-server?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/developing-chatbots-with-azure/action-server?u=76281980&t=0)** - [Instructor] Sometimes, chat bot feels like dark magic, especially as a beginner.
>
> **[0:05](https://www.linkedin.com/learning/developing-chatbots-with-azure/action-server?u=76281980&t=5)** After all, how does a chat bot understand nooks and corner of your business data?
>
> **[0:09](https://www.linkedin.com/learning/developing-chatbots-with-azure/action-server?u=76281980&t=9)** This is one of the most commonly asked questions.
>
> **[0:13](https://www.linkedin.com/learning/developing-chatbots-with-azure/action-server?u=76281980&t=13)** In reality, chat bot does not understand your business data, at least not yet.
>
> **[0:19](https://www.linkedin.com/learning/developing-chatbots-with-azure/action-server?u=76281980&t=19)** Chat bots, like any other application, have no clue about your data at hand.
>
> **[0:25](https://www.linkedin.com/learning/developing-chatbots-with-azure/action-server?u=76281980&t=25)** Now you might ask what about the intelligence then?
>
> **[0:28](https://www.linkedin.com/learning/developing-chatbots-with-azure/action-server?u=76281980&t=28)** Well, as of now, the intelligent part of chat bot is employed only for understanding the natural language and not in fetching the right data, although this is a very active area of research.
>
> **[0:41](https://www.linkedin.com/learning/developing-chatbots-with-azure/action-server?u=76281980&t=41)** You can explore it.
>
> **[0:44](https://www.linkedin.com/learning/developing-chatbots-with-azure/action-server?u=76281980&t=44)** If chat bots are not intelligent enough to pick the right data, how do we do that?
>
> **[0:50](https://www.linkedin.com/learning/developing-chatbots-with-azure/action-server?u=76281980&t=50)** That's why we have intelligent chat bot developers, like you, in the picture.
>
> **[0:54](https://www.linkedin.com/learning/developing-chatbots-with-azure/action-server?u=76281980&t=54)** Once the chat bot engine understands the user language, converts them into intents and entities, the action server takes over and map the intent to fetch the right data from the corresponding DB or API.
>
> **[1:09](https://www.linkedin.com/learning/developing-chatbots-with-azure/action-server?u=76281980&t=69)** An action server is an interface that converts the intent to action.
>
> **[1:14](https://www.linkedin.com/learning/developing-chatbots-with-azure/action-server?u=76281980&t=74)** It is responsible for picking up the right data from the DB or external APIs, and most importantly, it can be written in any language of your choice.
>
> **[1:25](https://www.linkedin.com/learning/developing-chatbots-with-azure/action-server?u=76281980&t=85)** In this course, we will be using Python.
>
> **[1:30](https://www.linkedin.com/learning/developing-chatbots-with-azure/action-server?u=76281980&t=90)** As a chat bot developer, it's your job to ensure that the right intents are mapped to right actions, all the necessary information, that is your entities, are available to perform the action.
>
> **[1:43](https://www.linkedin.com/learning/developing-chatbots-with-azure/action-server?u=76281980&t=103)** Most importantly, the ultimate goal is to ensure that the end user gets a seamless experience.

> [!info]- Semantic Content
>
> **Definitions:** is a  (1), is an  (1)
> **CLI Commands:** python (1)
> **Code Keywords:** interface (1)
> **Env Vars:** api (1)
> **Analogies:** picture (1)
> **Speakers:** - [instructor] (1)


### 3. Design a Chatbot

#### Designing conversation for chatbots
> [LinkedIn Learning](https://www.linkedin.com/learning/developing-chatbots-with-azure/designing-conversation-for-chatbots?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/developing-chatbots-with-azure/designing-conversation-for-chatbots?u=76281980&t=0)** - [Instructor] So far, you have learned everything that's there to learn about chatbots.
>
> **[0:04](https://www.linkedin.com/learning/developing-chatbots-with-azure/designing-conversation-for-chatbots?u=76281980&t=4)** Now let's put them into action let's start with the five steps that I personally use to build any Chatbot.
>
> **[0:13](https://www.linkedin.com/learning/developing-chatbots-with-azure/designing-conversation-for-chatbots?u=76281980&t=13)** It has language and platform agnostic you should start with designing a conversation that the user would likely to have the deal chatbot then identify the intents and entities.
>
> **[0:27](https://www.linkedin.com/learning/developing-chatbots-with-azure/designing-conversation-for-chatbots?u=76281980&t=27)** Once you have the intent and entities in the place train the bot engine of your choice in our case, it's Microsoft Azure.
>
> **[0:36](https://www.linkedin.com/learning/developing-chatbots-with-azure/designing-conversation-for-chatbots?u=76281980&t=36)** Once you have the bot engine trained write the action server to access the respect of data.
>
> **[0:43](https://www.linkedin.com/learning/developing-chatbots-with-azure/designing-conversation-for-chatbots?u=76281980&t=43)** Once the step is done you are pretty much done with building your chatbot.
>
> **[0:47](https://www.linkedin.com/learning/developing-chatbots-with-azure/designing-conversation-for-chatbots?u=76281980&t=47)** The last and final step would be to integrate it with the UI for the first step, designing the conversation we will emulate the user and the bot to come up with sample set of conversation.
>
> **[1:01](https://www.linkedin.com/learning/developing-chatbots-with-azure/designing-conversation-for-chatbots?u=76281980&t=61)** Designing the conversation is the web app equal and off designing the UI.
>
> **[1:05](https://www.linkedin.com/learning/developing-chatbots-with-azure/designing-conversation-for-chatbots?u=76281980&t=65)** Since the conversation is the one layer interface it should be engaging and usable for the end users you don't need any fancy setup for the step all you need is an empty document for the rest of the course, we will be building a product bot which will answer questions about the product of our mock company Red30 Tech.
>
> **[1:28](https://www.linkedin.com/learning/developing-chatbots-with-azure/designing-conversation-for-chatbots?u=76281980&t=88)** Red30 Tech is a mock company that we are going to build the product portfolio.
>
> **[1:33](https://www.linkedin.com/learning/developing-chatbots-with-azure/designing-conversation-for-chatbots?u=76281980&t=93)** It has a series of lineup of products in AI and machine learning, cloud computing, security and so on.
>
> **[1:41](https://www.linkedin.com/learning/developing-chatbots-with-azure/designing-conversation-for-chatbots?u=76281980&t=101)** The data for all these projects are provided to us in a CSV file, which we will consume when building our bot.
>
> **[1:49](https://www.linkedin.com/learning/developing-chatbots-with-azure/designing-conversation-for-chatbots?u=76281980&t=109)** You can feel free to replace the CSV file with a database as well.
>
> **[1:55](https://www.linkedin.com/learning/developing-chatbots-with-azure/designing-conversation-for-chatbots?u=76281980&t=115)** In order to design the conversation, the chatbot developer has to wear the hat of both the bot and the user.
>
> **[2:02](https://www.linkedin.com/learning/developing-chatbots-with-azure/designing-conversation-for-chatbots?u=76281980&t=122)** Imagine you are the user of the product bot, how would a conversation go?
>
> **[2:06](https://www.linkedin.com/learning/developing-chatbots-with-azure/designing-conversation-for-chatbots?u=76281980&t=126)** Let me type it out, you can start by saying a normal hi or most of the times the bot itself pops up whenever there is a user in the conversation.
>
> **[2:18](https://www.linkedin.com/learning/developing-chatbots-with-azure/designing-conversation-for-chatbots?u=76281980&t=138)** So the bot pops up and says, hi, I am product bot of Red30 Tech and I can answer questions about our product
>
> **[2:36](https://www.linkedin.com/learning/developing-chatbots-with-azure/designing-conversation-for-chatbots?u=76281980&t=156)** and at this point you are the user and there can be two scenarios here.
>
> **[2:41](https://www.linkedin.com/learning/developing-chatbots-with-azure/designing-conversation-for-chatbots?u=76281980&t=161)** One, you already know what Red30 Tech is or you're really not sure.
>
> **[2:46](https://www.linkedin.com/learning/developing-chatbots-with-azure/designing-conversation-for-chatbots?u=76281980&t=166)** So the user can go something like what is Red30 Tech in the first place?
>
> **[2:54](https://www.linkedin.com/learning/developing-chatbots-with-azure/designing-conversation-for-chatbots?u=76281980&t=174)** Next up the bot gives a company description so it says what the company is all about, where is it located, what services do they offer, something like that.
>
> **[3:05](https://www.linkedin.com/learning/developing-chatbots-with-azure/designing-conversation-for-chatbots?u=76281980&t=185)** This gives a very high level overview of what the company is all about.
>
> **[3:09](https://www.linkedin.com/learning/developing-chatbots-with-azure/designing-conversation-for-chatbots?u=76281980&t=189)** Now the user can dig deeper and ask specific questions about the product.
>
> **[3:13](https://www.linkedin.com/learning/developing-chatbots-with-azure/designing-conversation-for-chatbots?u=76281980&t=193)** For example, tell me more about your ML solutions
>
> **[3:22](https://www.linkedin.com/learning/developing-chatbots-with-azure/designing-conversation-for-chatbots?u=76281980&t=202)** and the bot will list down all the ML related products that the company has, list down all the ML products.
>
> **[3:34](https://www.linkedin.com/learning/developing-chatbots-with-azure/designing-conversation-for-chatbots?u=76281980&t=214)** Now that we have all that machine learning products the user can dig deeper and ask about specific measure learning product what features does ML learn product provide?
>
> **[3:51](https://www.linkedin.com/learning/developing-chatbots-with-azure/designing-conversation-for-chatbots?u=76281980&t=231)** And the bot goes ahead and lists down the features of the specific product.
>
> **[3:58](https://www.linkedin.com/learning/developing-chatbots-with-azure/designing-conversation-for-chatbots?u=76281980&t=238)** Now, at this point, the user might ask can I get a demo of the product?
>
> **[4:03](https://www.linkedin.com/learning/developing-chatbots-with-azure/designing-conversation-for-chatbots?u=76281980&t=243)** This is very usual sales question, right?
>
> **[4:06](https://www.linkedin.com/learning/developing-chatbots-with-azure/designing-conversation-for-chatbots?u=76281980&t=246)** And at this point the bot can't really give it a demo, right?
>
> **[4:10](https://www.linkedin.com/learning/developing-chatbots-with-azure/designing-conversation-for-chatbots?u=76281980&t=250)** The bot has to hand it over to a human operator.
>
> **[4:14](https://www.linkedin.com/learning/developing-chatbots-with-azure/designing-conversation-for-chatbots?u=76281980&t=254)** I can put you in touch with someone in my team
>
> **[4:23](https://www.linkedin.com/learning/developing-chatbots-with-azure/designing-conversation-for-chatbots?u=76281980&t=263)** would you like that?
>
> **[4:27](https://www.linkedin.com/learning/developing-chatbots-with-azure/designing-conversation-for-chatbots?u=76281980&t=267)** And the user might say something like, yeah, sure and the bot now has to get the user's information because it has to put them in touch.
>
> **[4:41](https://www.linkedin.com/learning/developing-chatbots-with-azure/designing-conversation-for-chatbots?u=76281980&t=281)** So user gives the information so that's one whole new conversation you will hear from us shortly with a scheduled demo, thank you.
>
> **[5:03](https://www.linkedin.com/learning/developing-chatbots-with-azure/designing-conversation-for-chatbots?u=76281980&t=303)** So that is one lineup of conversation in the middle we had another stream, which is like just for getting the user information so this is how you would design a conversation.
>
> **[5:16](https://www.linkedin.com/learning/developing-chatbots-with-azure/designing-conversation-for-chatbots?u=76281980&t=316)** Similarly, you can create multiple scenarios, as you like.
>
> **[5:19](https://www.linkedin.com/learning/developing-chatbots-with-azure/designing-conversation-for-chatbots?u=76281980&t=319)** Think of a personality you would want your bot to have it can have a personality of a well-trained professional or an intern finding the way around the product.
>
> **[5:29](https://www.linkedin.com/learning/developing-chatbots-with-azure/designing-conversation-for-chatbots?u=76281980&t=329)** The important thing to keep in mind is to have the conversation as engaging and as friendly as possible.
>
> **[5:37](https://www.linkedin.com/learning/developing-chatbots-with-azure/designing-conversation-for-chatbots?u=76281980&t=337)** Of course, there is no right or wrong way to do this.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), case, (1), interface (1), this. (1)
> **Definitions:** is a  (2), is an  (1)
> **Env Vars:** csv (2)
> **Analogies:** imagine (1), for example (1)
> **Warnings:** keep in mind (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### Identifying intents and entities
> [LinkedIn Learning](https://www.linkedin.com/learning/developing-chatbots-with-azure/identifying-intents-and-entities?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/developing-chatbots-with-azure/identifying-intents-and-entities?u=76281980&t=0)** - [Instructor] Now that we have designed the conversation, let's derive the intents and entities from them.
>
> **[0:05](https://www.linkedin.com/learning/developing-chatbots-with-azure/identifying-intents-and-entities?u=76281980&t=5)** To create the intents, take each user utterance from the conversation we designed.
>
> **[0:11](https://www.linkedin.com/learning/developing-chatbots-with-azure/identifying-intents-and-entities?u=76281980&t=11)** Think about all the statements that the user can utter to convey the same thing.
>
> **[0:17](https://www.linkedin.com/learning/developing-chatbots-with-azure/identifying-intents-and-entities?u=76281980&t=17)** Let's start with a simple example.
>
> **[0:20](https://www.linkedin.com/learning/developing-chatbots-with-azure/identifying-intents-and-entities?u=76281980&t=20)** Variation for hi, can be, hello, hey, are you there, or even fancier, yo.
>
> **[0:30](https://www.linkedin.com/learning/developing-chatbots-with-azure/identifying-intents-and-entities?u=76281980&t=30)** Similarly, a bye can be, goodbye, see you, later, and so on.
>
> **[0:39](https://www.linkedin.com/learning/developing-chatbots-with-azure/identifying-intents-and-entities?u=76281980&t=39)** Right?
>
> **[0:41](https://www.linkedin.com/learning/developing-chatbots-with-azure/identifying-intents-and-entities?u=76281980&t=41)** Let's try with some of the code intents.
>
> **[0:45](https://www.linkedin.com/learning/developing-chatbots-with-azure/identifying-intents-and-entities?u=76281980&t=45)** For example, take the sentence, "what is redtech30?"
>
> **[0:49](https://www.linkedin.com/learning/developing-chatbots-with-azure/identifying-intents-and-entities?u=76281980&t=49)** Other possible ways of asking the same thing can be, "tell me about redtech30".
>
> **[0:57](https://www.linkedin.com/learning/developing-chatbots-with-azure/identifying-intents-and-entities?u=76281980&t=57)** Or the user can be a little rule and say, "redtech30? What is that?"
>
> **[1:05](https://www.linkedin.com/learning/developing-chatbots-with-azure/identifying-intents-and-entities?u=76281980&t=65)** So these are all the possible ways of asking, "what is redtech30?".
>
> **[1:10](https://www.linkedin.com/learning/developing-chatbots-with-azure/identifying-intents-and-entities?u=76281980&t=70)** So now let's group them all together and give it a name.
>
> **[1:14](https://www.linkedin.com/learning/developing-chatbots-with-azure/identifying-intents-and-entities?u=76281980&t=74)** So this can be greeting, and this can be end conversation,
>
> **[1:26](https://www.linkedin.com/learning/developing-chatbots-with-azure/identifying-intents-and-entities?u=76281980&t=86)** And this can be company info.
>
> **[1:29](https://www.linkedin.com/learning/developing-chatbots-with-azure/identifying-intents-and-entities?u=76281980&t=89)** I'm giving it a random name and a random title.
>
> **[1:32](https://www.linkedin.com/learning/developing-chatbots-with-azure/identifying-intents-and-entities?u=76281980&t=92)** Similarly, you can go through each one in the list and give it a name.
>
> **[1:38](https://www.linkedin.com/learning/developing-chatbots-with-azure/identifying-intents-and-entities?u=76281980&t=98)** Now let's look at this.
>
> **[1:41](https://www.linkedin.com/learning/developing-chatbots-with-azure/identifying-intents-and-entities?u=76281980&t=101)** So, "I'm looking for ML solutions for my finance startup", this is one of the intents, and let's give it a name of get product list.
>
> **[1:52](https://www.linkedin.com/learning/developing-chatbots-with-azure/identifying-intents-and-entities?u=76281980&t=112)** And there are other ways to ask this.
>
> **[1:56](https://www.linkedin.com/learning/developing-chatbots-with-azure/identifying-intents-and-entities?u=76281980&t=116)** Like, "I'm looking for some ML products".
>
> **[2:02](https://www.linkedin.com/learning/developing-chatbots-with-azure/identifying-intents-and-entities?u=76281980&t=122)** Or, "do you have any ML solutions?"
>
> **[2:08](https://www.linkedin.com/learning/developing-chatbots-with-azure/identifying-intents-and-entities?u=76281980&t=128)** I'm looking for machine learning products.
>
> **[2:18](https://www.linkedin.com/learning/developing-chatbots-with-azure/identifying-intents-and-entities?u=76281980&t=138)** I have an ML problem to solve.
>
> **[2:23](https://www.linkedin.com/learning/developing-chatbots-with-azure/identifying-intents-and-entities?u=76281980&t=143)** So these are all the possible ways to ask for the same set of ML products.
>
> **[2:29](https://www.linkedin.com/learning/developing-chatbots-with-azure/identifying-intents-and-entities?u=76281980&t=149)** And this can also be, "I'm looking for solutions to secure my product".
>
> **[2:39](https://www.linkedin.com/learning/developing-chatbots-with-azure/identifying-intents-and-entities?u=76281980&t=159)** Right?
>
> **[2:40](https://www.linkedin.com/learning/developing-chatbots-with-azure/identifying-intents-and-entities?u=76281980&t=160)** So these are all the possible ways.
>
> **[2:42](https://www.linkedin.com/learning/developing-chatbots-with-azure/identifying-intents-and-entities?u=76281980&t=162)** And the next thing can be, "what are the features does it provide?" Right?
>
> **[2:47](https://www.linkedin.com/learning/developing-chatbots-with-azure/identifying-intents-and-entities?u=76281980&t=167)** You can either name the product, or you can just ask for features.
>
> **[2:54](https://www.linkedin.com/learning/developing-chatbots-with-azure/identifying-intents-and-entities?u=76281980&t=174)** So, get features.
>
> **[2:56](https://www.linkedin.com/learning/developing-chatbots-with-azure/identifying-intents-and-entities?u=76281980&t=176)** "What are the features does it provide?"
>
> **[2:59](https://www.linkedin.com/learning/developing-chatbots-with-azure/identifying-intents-and-entities?u=76281980&t=179)** Or also, "what are the features does redtech30 learn provide?"
>
> **[3:05](https://www.linkedin.com/learning/developing-chatbots-with-azure/identifying-intents-and-entities?u=76281980&t=185)** This is a product of redtech30, right?
>
> **[3:08](https://www.linkedin.com/learning/developing-chatbots-with-azure/identifying-intents-and-entities?u=76281980&t=188)** Or, "what features does it have?"
>
> **[3:16](https://www.linkedin.com/learning/developing-chatbots-with-azure/identifying-intents-and-entities?u=76281980&t=196)** Or, "what are the features does redtech30 secure provide?"
>
> **[3:27](https://www.linkedin.com/learning/developing-chatbots-with-azure/identifying-intents-and-entities?u=76281980&t=207)** Now that we have came up with all these intents, you can repeat it for the rest of the conversation as well.
>
> **[3:34](https://www.linkedin.com/learning/developing-chatbots-with-azure/identifying-intents-and-entities?u=76281980&t=214)** And you will have the list of intents.
>
> **[3:37](https://www.linkedin.com/learning/developing-chatbots-with-azure/identifying-intents-and-entities?u=76281980&t=217)** Now for the entities, go through each intent, think about the data points.
>
> **[3:42](https://www.linkedin.com/learning/developing-chatbots-with-azure/identifying-intents-and-entities?u=76281980&t=222)** Think about the variables that you would want to define.
>
> **[3:45](https://www.linkedin.com/learning/developing-chatbots-with-azure/identifying-intents-and-entities?u=76281980&t=225)** In case of greet and end conversation, there is literally nothing.
>
> **[3:48](https://www.linkedin.com/learning/developing-chatbots-with-azure/identifying-intents-and-entities?u=76281980&t=228)** In case of company info, it depends on the type of bot that you build.
>
> **[3:53](https://www.linkedin.com/learning/developing-chatbots-with-azure/identifying-intents-and-entities?u=76281980&t=233)** For redtech30, we are building it specifically for our company, so we can drop it.
>
> **[3:59](https://www.linkedin.com/learning/developing-chatbots-with-azure/identifying-intents-and-entities?u=76281980&t=239)** But in case of get product list, the product list is usually got by specifying a category.
>
> **[4:06](https://www.linkedin.com/learning/developing-chatbots-with-azure/identifying-intents-and-entities?u=76281980&t=246)** Whether it's machine learning, or security, or cloud computing.
>
> **[4:11](https://www.linkedin.com/learning/developing-chatbots-with-azure/identifying-intents-and-entities?u=76281980&t=251)** So it depends on the category, right?
>
> **[4:14](https://www.linkedin.com/learning/developing-chatbots-with-azure/identifying-intents-and-entities?u=76281980&t=254)** So get product list, give it a category.
>
> **[4:16](https://www.linkedin.com/learning/developing-chatbots-with-azure/identifying-intents-and-entities?u=76281980&t=256)** That is our entity.
>
> **[4:20](https://www.linkedin.com/learning/developing-chatbots-with-azure/identifying-intents-and-entities?u=76281980&t=260)** Similarly for the feature, you have to have a specific product name, so that you can get the respective features or the cost.
>
> **[4:30](https://www.linkedin.com/learning/developing-chatbots-with-azure/identifying-intents-and-entities?u=76281980&t=270)** So this is how you would come up with the entities.
>
> **[4:34](https://www.linkedin.com/learning/developing-chatbots-with-azure/identifying-intents-and-entities?u=76281980&t=274)** For this, we have designed the conversation, and also derive our intents and entities.
>
> **[4:40](https://www.linkedin.com/learning/developing-chatbots-with-azure/identifying-intents-and-entities?u=76281980&t=280)** What are we waiting for?
>
> **[4:42](https://www.linkedin.com/learning/developing-chatbots-with-azure/identifying-intents-and-entities?u=76281980&t=282)** Let's jump ahead and build a bot.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), this. (2), this, (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Designing conversations
> [LinkedIn Learning](https://www.linkedin.com/learning/developing-chatbots-with-azure/challenge-designing-conversations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/developing-chatbots-with-azure/challenge-designing-conversations?u=76281980&t=0)** (upbeat playful music)
>
> **[0:07](https://www.linkedin.com/learning/developing-chatbots-with-azure/challenge-designing-conversations?u=76281980&t=7)** - [Instructor] What you learn really sticks when you can apply all of it to a real-world problem.
>
> **[0:11](https://www.linkedin.com/learning/developing-chatbots-with-azure/challenge-designing-conversations?u=76281980&t=11)** For the rest of the course, while I build a product bot, you will follow along and build your own version of a bot for this challenge.
>
> **[0:19](https://www.linkedin.com/learning/developing-chatbots-with-azure/challenge-designing-conversations?u=76281980&t=19)** The bot that you're going to build is called a job bot, a bot that can answer questions about job description of our Red Tech 30 company.
>
> **[0:30](https://www.linkedin.com/learning/developing-chatbots-with-azure/challenge-designing-conversations?u=76281980&t=30)** For this exercise, think of a conversation that a person can have when applying to Red Tech 30.
>
> **[0:37](https://www.linkedin.com/learning/developing-chatbots-with-azure/challenge-designing-conversations?u=76281980&t=37)** Identify the static questions, and intents and entities.
>
> **[0:43](https://www.linkedin.com/learning/developing-chatbots-with-azure/challenge-designing-conversations?u=76281980&t=43)** There is no right or wrong answer to this exercise.
>
> **[0:46](https://www.linkedin.com/learning/developing-chatbots-with-azure/challenge-designing-conversations?u=76281980&t=46)** So feel free to be as creative as possible.
>
> **[0:49](https://www.linkedin.com/learning/developing-chatbots-with-azure/challenge-designing-conversations?u=76281980&t=49)** Good luck.

> [!info]- Semantic Content
>
> **Code Keywords:** static (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat playful music) (1)

#### Solution: Designing conversations
> [LinkedIn Learning](https://www.linkedin.com/learning/developing-chatbots-with-azure/solution-designing-conversations?u=76281980)

> [!transcript]- Transcript
>
> **[0:06](https://www.linkedin.com/learning/developing-chatbots-with-azure/solution-designing-conversations?u=76281980&t=6)** - [Instructor] Hello, there.
>
> **[0:07](https://www.linkedin.com/learning/developing-chatbots-with-azure/solution-designing-conversations?u=76281980&t=7)** That was and intense challenge, wasn't it?
>
> **[0:10](https://www.linkedin.com/learning/developing-chatbots-with-azure/solution-designing-conversations?u=76281980&t=10)** I hope you had fun working through it.
>
> **[0:12](https://www.linkedin.com/learning/developing-chatbots-with-azure/solution-designing-conversations?u=76281980&t=12)** Like I said, there is no right or wrong answers.
>
> **[0:15](https://www.linkedin.com/learning/developing-chatbots-with-azure/solution-designing-conversations?u=76281980&t=15)** So, here is my version of the solution.
>
> **[0:18](https://www.linkedin.com/learning/developing-chatbots-with-azure/solution-designing-conversations?u=76281980&t=18)** The challenge bot for you to boot is a Job Bot that answers questions about job descriptions of a company.
>
> **[0:27](https://www.linkedin.com/learning/developing-chatbots-with-azure/solution-designing-conversations?u=76281980&t=27)** The intent of the user is pretty obvious in this case.
>
> **[0:30](https://www.linkedin.com/learning/developing-chatbots-with-azure/solution-designing-conversations?u=76281980&t=30)** Even before they land on the bot.
>
> **[0:32](https://www.linkedin.com/learning/developing-chatbots-with-azure/solution-designing-conversations?u=76281980&t=32)** There are a couple of options here.
>
> **[0:33](https://www.linkedin.com/learning/developing-chatbots-with-azure/solution-designing-conversations?u=76281980&t=33)** I could avoid the usual pleasantries like, Hi and Hello.
>
> **[0:38](https://www.linkedin.com/learning/developing-chatbots-with-azure/solution-designing-conversations?u=76281980&t=38)** And jump right in to, "I'm a (inaudible) developer, I'm looking for a job with five years of experience.
>
> **[0:45](https://www.linkedin.com/learning/developing-chatbots-with-azure/solution-designing-conversations?u=76281980&t=45)** In which the bot will give an answer outright.
>
> **[0:48](https://www.linkedin.com/learning/developing-chatbots-with-azure/solution-designing-conversations?u=76281980&t=48)** Or just start with a normal Hi.
>
> **[0:50](https://www.linkedin.com/learning/developing-chatbots-with-azure/solution-designing-conversations?u=76281980&t=50)** And the bot takes me through the job duration journey by asking me questions like, what kind of job are you looking for.
>
> **[0:59](https://www.linkedin.com/learning/developing-chatbots-with-azure/solution-designing-conversations?u=76281980&t=59)** My Static Intents will look something like, Introductions, Get company info, and whether the job is remote or not.
>
> **[1:06](https://www.linkedin.com/learning/developing-chatbots-with-azure/solution-designing-conversations?u=76281980&t=66)** And Dynamic Intents include, Get job list, Get application list, and Get reviews.
>
> **[1:13](https://www.linkedin.com/learning/developing-chatbots-with-azure/solution-designing-conversations?u=76281980&t=73)** If you're here, give yourself a big pat on the back.
>
> **[1:16](https://www.linkedin.com/learning/developing-chatbots-with-azure/solution-designing-conversations?u=76281980&t=76)** Because you're halfway through the course.
>
> **[1:18](https://www.linkedin.com/learning/developing-chatbots-with-azure/solution-designing-conversations?u=76281980&t=78)** For the rest of the course we'll use this design as a guiding light.
>
> **[1:22](https://www.linkedin.com/learning/developing-chatbots-with-azure/solution-designing-conversations?u=76281980&t=82)** And code a bot using Azure QnA Maker, LUIS and bot frame work.
>
> **[1:27](https://www.linkedin.com/learning/developing-chatbots-with-azure/solution-designing-conversations?u=76281980&t=87)** Let's get going.

> [!info]- Semantic Content
>
> **Code Keywords:** case. (1), for. (1), static (1), include, (1), let (1)
> **Env Vars:** luis (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 4. Enhancing Your Chatbot Actions

#### Setting up the Azure account and building an echobot
> [LinkedIn Learning](https://www.linkedin.com/learning/developing-chatbots-with-azure/setting-up-the-azure-account-and-building-an-echobot?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/developing-chatbots-with-azure/setting-up-the-azure-account-and-building-an-echobot?u=76281980&t=0)** - [Instructor] Laying a strong foundation is important when learning something new.
>
> **[0:04](https://www.linkedin.com/learning/developing-chatbots-with-azure/setting-up-the-azure-account-and-building-an-echobot?u=76281980&t=4)** That's what we have been doing so far in the course.
>
> **[0:07](https://www.linkedin.com/learning/developing-chatbots-with-azure/setting-up-the-azure-account-and-building-an-echobot?u=76281980&t=7)** Moving forward, we will convert all the learnings into code.
>
> **[0:10](https://www.linkedin.com/learning/developing-chatbots-with-azure/setting-up-the-azure-account-and-building-an-echobot?u=76281980&t=10)** Every chat bot project needs a good setup.
>
> **[0:13](https://www.linkedin.com/learning/developing-chatbots-with-azure/setting-up-the-azure-account-and-building-an-echobot?u=76281980&t=13)** For this we need an Azure account.
>
> **[0:15](https://www.linkedin.com/learning/developing-chatbots-with-azure/setting-up-the-azure-account-and-building-an-echobot?u=76281980&t=15)** Pull off the project repository, Microsoft bot emulator and pipe the knowledge.
>
> **[0:20](https://www.linkedin.com/learning/developing-chatbots-with-azure/setting-up-the-azure-account-and-building-an-echobot?u=76281980&t=20)** Let's set this up one by one.
>
> **[0:24](https://www.linkedin.com/learning/developing-chatbots-with-azure/setting-up-the-azure-account-and-building-an-echobot?u=76281980&t=24)** For this bot, we are going to use two Azure resources.
>
> **[0:27](https://www.linkedin.com/learning/developing-chatbots-with-azure/setting-up-the-azure-account-and-building-an-echobot?u=76281980&t=27)** One is Azure QNA maker, another one is Microsoft Luis.
>
> **[0:32](https://www.linkedin.com/learning/developing-chatbots-with-azure/setting-up-the-azure-account-and-building-an-echobot?u=76281980&t=32)** Let's start by creating these resources in the Azure portal.
>
> **[0:35](https://www.linkedin.com/learning/developing-chatbots-with-azure/setting-up-the-azure-account-and-building-an-echobot?u=76281980&t=35)** Click on, create a resource search for QnA maker in the QnA maker service Click on create select the resource group if one already exists, if not create one for yourself and give your bot a name in our case product-bot-redtech30, click and select on a pricing dire.
>
> **[0:59](https://www.linkedin.com/learning/developing-chatbots-with-azure/setting-up-the-azure-account-and-building-an-echobot?u=76281980&t=59)** Use an Azure search pricing dire and you can leave the rest of the things like that and click on review plus create.
>
> **[1:07](https://www.linkedin.com/learning/developing-chatbots-with-azure/setting-up-the-azure-account-and-building-an-echobot?u=76281980&t=67)** Once you're happy with all the information provided, click on create.
>
> **[1:10](https://www.linkedin.com/learning/developing-chatbots-with-azure/setting-up-the-azure-account-and-building-an-echobot?u=76281980&t=70)** Once you click on create, the resource will be created and you can look at it in the home directory.
>
> **[1:18](https://www.linkedin.com/learning/developing-chatbots-with-azure/setting-up-the-azure-account-and-building-an-echobot?u=76281980&t=78)** Now you can see, I have Azure chat bots created.
>
> **[1:21](https://www.linkedin.com/learning/developing-chatbots-with-azure/setting-up-the-azure-account-and-building-an-echobot?u=76281980&t=81)** Similarly, let's create one for Luis.
>
> **[1:26](https://www.linkedin.com/learning/developing-chatbots-with-azure/setting-up-the-azure-account-and-building-an-echobot?u=76281980&t=86)** Search for Luis and you will see language understanding in the dropdown click on that.
>
> **[1:31](https://www.linkedin.com/learning/developing-chatbots-with-azure/setting-up-the-azure-account-and-building-an-echobot?u=76281980&t=91)** similarly click on create.
>
> **[1:35](https://www.linkedin.com/learning/developing-chatbots-with-azure/setting-up-the-azure-account-and-building-an-echobot?u=76281980&t=95)** Select a resource group.
>
> **[1:36](https://www.linkedin.com/learning/developing-chatbots-with-azure/setting-up-the-azure-account-and-building-an-echobot?u=76281980&t=96)** I'm going to use the same resource group.
>
> **[1:38](https://www.linkedin.com/learning/developing-chatbots-with-azure/setting-up-the-azure-account-and-building-an-echobot?u=76281980&t=98)** Give the chat bot a name.
>
> **[1:40](https://www.linkedin.com/learning/developing-chatbots-with-azure/setting-up-the-azure-account-and-building-an-echobot?u=76281980&t=100)** Let's say redtech30-luis and select the location.
>
> **[1:49](https://www.linkedin.com/learning/developing-chatbots-with-azure/setting-up-the-azure-account-and-building-an-echobot?u=76281980&t=109)** I'm going to choose a random location.
>
> **[1:50](https://www.linkedin.com/learning/developing-chatbots-with-azure/setting-up-the-azure-account-and-building-an-echobot?u=76281980&t=110)** Let's say west US, and then a pricing dire and a prediction pricing dire.
>
> **[1:56](https://www.linkedin.com/learning/developing-chatbots-with-azure/setting-up-the-azure-account-and-building-an-echobot?u=76281980&t=116)** All of this is going to be free because we are just building a demo bot.
>
> **[2:00](https://www.linkedin.com/learning/developing-chatbots-with-azure/setting-up-the-azure-account-and-building-an-echobot?u=76281980&t=120)** click on review plus create.
>
> **[2:02](https://www.linkedin.com/learning/developing-chatbots-with-azure/setting-up-the-azure-account-and-building-an-echobot?u=76281980&t=122)** Once you're happy with all this information click on create, and this will again help you're in your home like this.
>
> **[2:09](https://www.linkedin.com/learning/developing-chatbots-with-azure/setting-up-the-azure-account-and-building-an-echobot?u=76281980&t=129)** So I have my two services and one resource group created.
>
> **[2:13](https://www.linkedin.com/learning/developing-chatbots-with-azure/setting-up-the-azure-account-and-building-an-echobot?u=76281980&t=133)** Now let's set up the QnA maker under QnA [maker.ai](https://maker.ai) website.
>
> **[2:18](https://www.linkedin.com/learning/developing-chatbots-with-azure/setting-up-the-azure-account-and-building-an-echobot?u=76281980&t=138)** Click on create a new knowledge base.
>
> **[2:21](https://www.linkedin.com/learning/developing-chatbots-with-azure/setting-up-the-azure-account-and-building-an-echobot?u=76281980&t=141)** Here you can see you have your Microsoft Azure ID select the subscription select the service that you have created previously and that will automatically select your language.
>
> **[2:33](https://www.linkedin.com/learning/developing-chatbots-with-azure/setting-up-the-azure-account-and-building-an-echobot?u=76281980&t=153)** Give your knowledge base a name something like a product bot.
>
> **[2:37](https://www.linkedin.com/learning/developing-chatbots-with-azure/setting-up-the-azure-account-and-building-an-echobot?u=76281980&t=157)** And here you can add your questions from a CSV or a document, but for now I'm going to to skip this because we are going to populate this later.
>
> **[2:45](https://www.linkedin.com/learning/developing-chatbots-with-azure/setting-up-the-azure-account-and-building-an-echobot?u=76281980&t=165)** Once you're happy with everything, click on create.
>
> **[2:48](https://www.linkedin.com/learning/developing-chatbots-with-azure/setting-up-the-azure-account-and-building-an-echobot?u=76281980&t=168)** Once you create your knowledge base you will see that appearing in my knowledge bases or tab.
>
> **[2:54](https://www.linkedin.com/learning/developing-chatbots-with-azure/setting-up-the-azure-account-and-building-an-echobot?u=76281980&t=174)** So I have my current two knowledge basis.
>
> **[2:57](https://www.linkedin.com/learning/developing-chatbots-with-azure/setting-up-the-azure-account-and-building-an-echobot?u=76281980&t=177)** One for job bot another one for tech bot created already.
>
> **[3:03](https://www.linkedin.com/learning/developing-chatbots-with-azure/setting-up-the-azure-account-and-building-an-echobot?u=76281980&t=183)** Similarly, we have to set up Luis service SL.
>
> **[3:06](https://www.linkedin.com/learning/developing-chatbots-with-azure/setting-up-the-azure-account-and-building-an-echobot?u=76281980&t=186)** Go to [luis.ai](https://luis.ai) and click on create a new app.
>
> **[3:11](https://www.linkedin.com/learning/developing-chatbots-with-azure/setting-up-the-azure-account-and-building-an-echobot?u=76281980&t=191)** This is a new app for your particular chat bot project.
>
> **[3:14](https://www.linkedin.com/learning/developing-chatbots-with-azure/setting-up-the-azure-account-and-building-an-echobot?u=76281980&t=194)** Give your app a name in my case it's redtech30_product bot.
>
> **[3:22](https://www.linkedin.com/learning/developing-chatbots-with-azure/setting-up-the-azure-account-and-building-an-echobot?u=76281980&t=202)** Give your bot a culture, which is a language.
>
> **[3:26](https://www.linkedin.com/learning/developing-chatbots-with-azure/setting-up-the-azure-account-and-building-an-echobot?u=76281980&t=206)** Give it a description and, you have to select a prediction resource that you created earlier.
>
> **[3:32](https://www.linkedin.com/learning/developing-chatbots-with-azure/setting-up-the-azure-account-and-building-an-echobot?u=76281980&t=212)** Once you're happy with everything, click on done.
>
> **[3:35](https://www.linkedin.com/learning/developing-chatbots-with-azure/setting-up-the-azure-account-and-building-an-echobot?u=76281980&t=215)** Once you create your app it will be listed in your homepage.
>
> **[3:40](https://www.linkedin.com/learning/developing-chatbots-with-azure/setting-up-the-azure-account-and-building-an-echobot?u=76281980&t=220)** I have two (indistinct) already created one for the job bot and another one for the product bot.
>
> **[3:47](https://www.linkedin.com/learning/developing-chatbots-with-azure/setting-up-the-azure-account-and-building-an-echobot?u=76281980&t=227)** Next we need to download Microsoft bot emulator, go to Microsoft bot emulator github repository and click on download from one of these images that's available.
>
> **[4:01](https://www.linkedin.com/learning/developing-chatbots-with-azure/setting-up-the-azure-account-and-building-an-echobot?u=76281980&t=241)** If you're using Mac, you can download the Mac image.
>
> **[4:03](https://www.linkedin.com/learning/developing-chatbots-with-azure/setting-up-the-azure-account-and-building-an-echobot?u=76281980&t=243)** If you're using Linux or windows you can choose the one appropriately.
>
> **[4:08](https://www.linkedin.com/learning/developing-chatbots-with-azure/setting-up-the-azure-account-and-building-an-echobot?u=76281980&t=248)** So once you have it downloaded you can open it by clicking on Microsoft bot emulator.
>
> **[4:14](https://www.linkedin.com/learning/developing-chatbots-with-azure/setting-up-the-azure-account-and-building-an-echobot?u=76281980&t=254)** And it'll appear something like this.
>
> **[4:18](https://www.linkedin.com/learning/developing-chatbots-with-azure/setting-up-the-azure-account-and-building-an-echobot?u=76281980&t=258)** The last and the final step for this section is to set up the code repository.
>
> **[4:23](https://www.linkedin.com/learning/developing-chatbots-with-azure/setting-up-the-azure-account-and-building-an-echobot?u=76281980&t=263)** Once you have the bot emulator downloaded go to LinkedIn learnings github repository and clone this repo into your visual studio code.
>
> **[4:32](https://www.linkedin.com/learning/developing-chatbots-with-azure/setting-up-the-azure-account-and-building-an-echobot?u=76281980&t=272)** You are free to use any other editors, just like this one.
>
> **[4:37](https://www.linkedin.com/learning/developing-chatbots-with-azure/setting-up-the-azure-account-and-building-an-echobot?u=76281980&t=277)** I'm currently on the 04_01 branch.
>
> **[4:40](https://www.linkedin.com/learning/developing-chatbots-with-azure/setting-up-the-azure-account-and-building-an-echobot?u=76281980&t=280)** This is the branch for this section.
>
> **[4:43](https://www.linkedin.com/learning/developing-chatbots-with-azure/setting-up-the-azure-account-and-building-an-echobot?u=76281980&t=283)** And in this repository, there is a step start MD file.
>
> **[4:47](https://www.linkedin.com/learning/developing-chatbots-with-azure/setting-up-the-azure-account-and-building-an-echobot?u=76281980&t=287)** This gives you the instructions to set up the echo bot.
>
> **[4:51](https://www.linkedin.com/learning/developing-chatbots-with-azure/setting-up-the-azure-account-and-building-an-echobot?u=76281980&t=291)** So let's follow the steps one by one.
>
> **[4:52](https://www.linkedin.com/learning/developing-chatbots-with-azure/setting-up-the-azure-account-and-building-an-echobot?u=76281980&t=292)** The first step is to install all the requirements before this I'm going to activate my (indistinct).
>
> **[5:00](https://www.linkedin.com/learning/developing-chatbots-with-azure/setting-up-the-azure-account-and-building-an-echobot?u=76281980&t=300)** This is very common practice for every bite and project.
>
> **[5:03](https://www.linkedin.com/learning/developing-chatbots-with-azure/setting-up-the-azure-account-and-building-an-echobot?u=76281980&t=303)** So let's install all the requirements since I have them already installed.
>
> **[5:07](https://www.linkedin.com/learning/developing-chatbots-with-azure/setting-up-the-azure-account-and-building-an-echobot?u=76281980&t=307)** It's not going to take a lot of time.
>
> **[5:10](https://www.linkedin.com/learning/developing-chatbots-with-azure/setting-up-the-azure-account-and-building-an-echobot?u=76281980&t=310)** Next using the cookie-cutter let's set up the echo bot.
>
> **[5:15](https://www.linkedin.com/learning/developing-chatbots-with-azure/setting-up-the-azure-account-and-building-an-echobot?u=76281980&t=315)** So echo bot is the starter template.
>
> **[5:17](https://www.linkedin.com/learning/developing-chatbots-with-azure/setting-up-the-azure-account-and-building-an-echobot?u=76281980&t=317)** From there you can pretty much download any other bot.
>
> **[5:21](https://www.linkedin.com/learning/developing-chatbots-with-azure/setting-up-the-azure-account-and-building-an-echobot?u=76281980&t=321)** So I have them already downloaded.
>
> **[5:24](https://www.linkedin.com/learning/developing-chatbots-with-azure/setting-up-the-azure-account-and-building-an-echobot?u=76281980&t=324)** Now you have to give your bot a name in our case, it's redtech30_product bot and you can give a bot description or you can just keep it once you have them created.
>
> **[5:35](https://www.linkedin.com/learning/developing-chatbots-with-azure/setting-up-the-azure-account-and-building-an-echobot?u=76281980&t=335)** You can see there is a folder that's created right here.
>
> **[5:38](https://www.linkedin.com/learning/developing-chatbots-with-azure/setting-up-the-azure-account-and-building-an-echobot?u=76281980&t=338)** This gives you the basic template for all your bot projects.
>
> **[5:42](https://www.linkedin.com/learning/developing-chatbots-with-azure/setting-up-the-azure-account-and-building-an-echobot?u=76281980&t=342)** So it has a bot.by file and an .app by file.
>
> **[5:45](https://www.linkedin.com/learning/developing-chatbots-with-azure/setting-up-the-azure-account-and-building-an-echobot?u=76281980&t=345)** Those are the main files that we will be working with.
>
> **[5:48](https://www.linkedin.com/learning/developing-chatbots-with-azure/setting-up-the-azure-account-and-building-an-echobot?u=76281980&t=348)** The next step is to install all the requirements that is very specific for the bot project that we just created.
>
> **[5:56](https://www.linkedin.com/learning/developing-chatbots-with-azure/setting-up-the-azure-account-and-building-an-echobot?u=76281980&t=356)** So let's do a PIP install redtech30 product bot/requirements.TXT.
>
> **[6:05](https://www.linkedin.com/learning/developing-chatbots-with-azure/setting-up-the-azure-account-and-building-an-echobot?u=76281980&t=365)** So that is also already installed.
>
> **[6:08](https://www.linkedin.com/learning/developing-chatbots-with-azure/setting-up-the-azure-account-and-building-an-echobot?u=76281980&t=368)** So we don't have to worry about that.
>
> **[6:10](https://www.linkedin.com/learning/developing-chatbots-with-azure/setting-up-the-azure-account-and-building-an-echobot?u=76281980&t=370)** If you're doing this for the first time it's going to take quite some time.
>
> **[6:13](https://www.linkedin.com/learning/developing-chatbots-with-azure/setting-up-the-azure-account-and-building-an-echobot?u=76281980&t=373)** That's all right.
>
> **[6:14](https://www.linkedin.com/learning/developing-chatbots-with-azure/setting-up-the-azure-account-and-building-an-echobot?u=76281980&t=374)** Now let's go to (indistinct) MD and see what the next step is.
>
> **[6:17](https://www.linkedin.com/learning/developing-chatbots-with-azure/setting-up-the-azure-account-and-building-an-echobot?u=76281980&t=377)** We have to CD into our redtech30_product bot and we have run the Python app.bike So this is our bot server.
>
> **[6:27](https://www.linkedin.com/learning/developing-chatbots-with-azure/setting-up-the-azure-account-and-building-an-echobot?u=76281980&t=387)** So let's run this.
>
> **[6:29](https://www.linkedin.com/learning/developing-chatbots-with-azure/setting-up-the-azure-account-and-building-an-echobot?u=76281980&t=389)** Now you can see the bot server is running at three nine, seven, eight.
>
> **[6:34](https://www.linkedin.com/learning/developing-chatbots-with-azure/setting-up-the-azure-account-and-building-an-echobot?u=76281980&t=394)** This is the servers local host address.
>
> **[6:37](https://www.linkedin.com/learning/developing-chatbots-with-azure/setting-up-the-azure-account-and-building-an-echobot?u=76281980&t=397)** It's replace this URL with this address.
>
> **[6:41](https://www.linkedin.com/learning/developing-chatbots-with-azure/setting-up-the-azure-account-and-building-an-echobot?u=76281980&t=401)** And the whole hand point has to go into Microsoft bot emulator for us to work with the echo bot.
>
> **[6:47](https://www.linkedin.com/learning/developing-chatbots-with-azure/setting-up-the-azure-account-and-building-an-echobot?u=76281980&t=407)** So now our echo bot template is up and running and we are going to see how it's working using Microsoft bot emulator.
>
> **[6:54](https://www.linkedin.com/learning/developing-chatbots-with-azure/setting-up-the-azure-account-and-building-an-echobot?u=76281980&t=414)** So let's go to Microsoft bot emulator and click on open a bot and paste this URL.
>
> **[7:02](https://www.linkedin.com/learning/developing-chatbots-with-azure/setting-up-the-azure-account-and-building-an-echobot?u=76281980&t=422)** And you don't have to fill any of these just click on connect.
>
> **[7:06](https://www.linkedin.com/learning/developing-chatbots-with-azure/setting-up-the-azure-account-and-building-an-echobot?u=76281980&t=426)** The bot will be connected right now.
>
> **[7:08](https://www.linkedin.com/learning/developing-chatbots-with-azure/setting-up-the-azure-account-and-building-an-echobot?u=76281980&t=428)** It starts with a hello and welcome message.
>
> **[7:11](https://www.linkedin.com/learning/developing-chatbots-with-azure/setting-up-the-azure-account-and-building-an-echobot?u=76281980&t=431)** Now for whatever you say the bot is going to just repeat what you're saying.
>
> **[7:15](https://www.linkedin.com/learning/developing-chatbots-with-azure/setting-up-the-azure-account-and-building-an-echobot?u=76281980&t=435)** So you can type even a very long sentence.
>
> **[7:19](https://www.linkedin.com/learning/developing-chatbots-with-azure/setting-up-the-azure-account-and-building-an-echobot?u=76281980&t=439)** It's going to be the same.
>
> **[7:22](https://www.linkedin.com/learning/developing-chatbots-with-azure/setting-up-the-azure-account-and-building-an-echobot?u=76281980&t=442)** So that's your echo bot.
>
> **[7:24](https://www.linkedin.com/learning/developing-chatbots-with-azure/setting-up-the-azure-account-and-building-an-echobot?u=76281980&t=444)** Coming back to the code.
>
> **[7:25](https://www.linkedin.com/learning/developing-chatbots-with-azure/setting-up-the-azure-account-and-building-an-echobot?u=76281980&t=445)** There are two files that you will be primarily working on.
>
> **[7:29](https://www.linkedin.com/learning/developing-chatbots-with-azure/setting-up-the-azure-account-and-building-an-echobot?u=76281980&t=449)** (indistinct) is the bot server that you will run you won't make changes here and let it absolutely required.
>
> **[7:36](https://www.linkedin.com/learning/developing-chatbots-with-azure/setting-up-the-azure-account-and-building-an-echobot?u=76281980&t=456)** Whereas the bot.by file is the file that you will be primarily working on here.
>
> **[7:40](https://www.linkedin.com/learning/developing-chatbots-with-azure/setting-up-the-azure-account-and-building-an-echobot?u=76281980&t=460)** Here you have a class called my bot which is extended from activity handler.
>
> **[7:45](https://www.linkedin.com/learning/developing-chatbots-with-azure/setting-up-the-azure-account-and-building-an-echobot?u=76281980&t=465)** This performs two tasks.
>
> **[7:46](https://www.linkedin.com/learning/developing-chatbots-with-azure/setting-up-the-azure-account-and-building-an-echobot?u=76281980&t=466)** Whenever there is a new message, it takes that message text and add you said which we saw in the bottom later, right?
>
> **[7:54](https://www.linkedin.com/learning/developing-chatbots-with-azure/setting-up-the-azure-account-and-building-an-echobot?u=76281980&t=474)** So it adds that and returns it as activity again.
>
> **[7:58](https://www.linkedin.com/learning/developing-chatbots-with-azure/setting-up-the-azure-account-and-building-an-echobot?u=76281980&t=478)** So this is your reply message.
>
> **[8:00](https://www.linkedin.com/learning/developing-chatbots-with-azure/setting-up-the-azure-account-and-building-an-echobot?u=76281980&t=480)** If the bot user is coming for the first time then it will say, hello and welcome.
>
> **[8:05](https://www.linkedin.com/learning/developing-chatbots-with-azure/setting-up-the-azure-account-and-building-an-echobot?u=76281980&t=485)** So those are the two messages that we saw in the bottom later.
>
> **[8:08](https://www.linkedin.com/learning/developing-chatbots-with-azure/setting-up-the-azure-account-and-building-an-echobot?u=76281980&t=488)** Hello and welcome vendor user pops in for the first time.
>
> **[8:12](https://www.linkedin.com/learning/developing-chatbots-with-azure/setting-up-the-azure-account-and-building-an-echobot?u=76281980&t=492)** And you said, plus whatever the user said whenever the user is interacting with the bot.
>
> **[8:17](https://www.linkedin.com/learning/developing-chatbots-with-azure/setting-up-the-azure-account-and-building-an-echobot?u=76281980&t=497)** So those two code goes in here.
>
> **[8:20](https://www.linkedin.com/learning/developing-chatbots-with-azure/setting-up-the-azure-account-and-building-an-echobot?u=76281980&t=500)** So for the rest of the course we will be editing bot.by file to fit the requirements of our product bot.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (16), go to (5), select the (4), dropdown (1)
> **Code Keywords:** let (14), this. (3), new. (1), case, (1)
> **Prerequisites:** set up (5), install (4), setup (1)
> **Env Vars:** url (2), qna (1), csv (1), pip (1), txt (1)
> **Definitions:** is a  (5)
> **CLI Commands:** pip (1), cd (1), python (1), make (1)
> **Tools:** github (2), azure portal (1), visual studio (1)
> **Exercise Files:** template (3), download the (1)

#### Training QnA Maker and static productbot
> [LinkedIn Learning](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=0)** - [Instructor] An echo bot can be fun for irritating your friends but to solve a real business world problem we need more.
>
> **[0:06](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=6)** When we designed a product bot became across intents which are segregated into static and dynamic questions.
>
> **[0:16](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=16)** For our chat bot to support tactic questions, we will use Microsoft QnA maker.
>
> **[0:23](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=23)** Go to [QnAmaker.ai](https://QnAmaker.ai) website, click on the product bot that you have already created.
>
> **[0:30](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=30)** In here you can see that I've already added a bunch of questions.
>
> **[0:34](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=34)** What is redtake 30.
>
> **[0:36](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=36)** Where are you located?
>
> **[0:37](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=37)** And bunch of hi, hallo messages.
>
> **[0:38](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=38)** But if you're just starting out this will be a blank slate and you can start by clicking on add QnA pair and add all the questions and it's associated alternate phrases like, hi, Hey, hello, what's up?
>
> **[0:54](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=54)** Are you there?
>
> **[0:57](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=57)** (keyboard clicking) Hello there.
>
> **[1:00](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=60)** (keyboard clicking) So you can just go on and on and add all the questions under one particular intent and what would be the answer for the same?
>
> **[1:07](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=67)** Hey, product word here.
>
> **[1:09](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=69)** (keyboard clicking) How can I help you?
>
> **[1:13](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=73)** (keyboard clicking) So once you're happy with this training this is like basically adding your training phrases.
>
> **[1:20](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=80)** Once you're happy with this click on save and train.
>
> **[1:23](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=83)** This will train the model in the background and it will usually take about a minute.
>
> **[1:29](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=89)** And once you're done with the training, you can test it.
>
> **[1:34](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=94)** So now that we have the model trained, let's test this, right?
>
> **[1:40](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=100)** So let's say hi and the product bot is going to load the model do some predictions in the background.
>
> **[1:46](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=106)** Apparently you won't have any idea about it but this is all happening in the background.
>
> **[1:52](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=112)** So it says, hello there, welcome redtech30's product bot.
>
> **[1:56](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=116)** How cool is that?
>
> **[1:57](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=117)** So that's pretty much working in here.
>
> **[1:59](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=119)** And once you're happy with everything that's happening here.
>
> **[2:02](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=122)** So let's ask where are you located?
>
> **[2:04](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=124)** (keyboard clicking) Yeah, we are headquartered at US.
>
> **[2:10](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=130)** So we have also offices in Canada and Australia.
>
> **[2:13](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=133)** So that's good.
>
> **[2:14](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=134)** So it's pretty much working fine.
>
> **[2:16](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=136)** Once you're happy with this, you can click on publish.
>
> **[2:19](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=139)** So publish will actually take your model and expose it to the outside world.
>
> **[2:24](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=144)** So once you publish, you will get few details which you can use in your code.
>
> **[2:30](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=150)** So the details that you would need are this post URL which will have an app ID.
>
> **[2:36](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=156)** This is your application ID and then an authorization key which is going to be here and then the host of your Azure account.
>
> **[2:46](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=166)** So this is where your maker model is hosted.
>
> **[2:49](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=169)** And this is your application ID.
>
> **[2:52](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=172)** And this is your end point key.
>
> **[2:55](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=175)** And API request will have question as a key and your question.
>
> **[3:00](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=180)** So we can use this format to make calls from our code.
>
> **[3:04](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=184)** Now let's switch to our code and see how to integrate this QnA maker app into our chat bot.
>
> **[3:12](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=192)** Now I'm on my code base.
>
> **[3:13](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=193)** The first step will be to copy all these credentials that we just saw and based it under ENV file.
>
> **[3:21](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=201)** So let me quickly do that.
>
> **[3:23](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=203)** I'm going to copy the app ID.
>
> **[3:25](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=205)** I'm going to copy the end point key and the host name.
>
> **[3:30](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=210)** So that's going to be the end point.
>
> **[3:34](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=214)** So that's all the credentials that you need right now.
>
> **[3:36](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=216)** The next step would be to load this configuration into the code.
>
> **[3:41](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=221)** So to do this, let's open config.py, the default template already comes with load.env module imported.
>
> **[3:50](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=230)** And the function is being called.
>
> **[3:53](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=233)** This will load the credentials in ENV file into the environment variable, which you can later access using OS.enveron.
>
> **[4:00](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=240)** Like you can see, we have QnA maker knowledge base ID, the endpoint key and the endpoint host.
>
> **[4:06](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=246)** So let's go to the bot file and actually integrate the QnA service.
>
> **[4:11](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=251)** So the first thing that you would need here, is a QnA makers, API calling.
>
> **[4:16](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=256)** So to make that, the first thing that you should understand is that your message is going to come in from the user.
>
> **[4:25](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=265)** And it's going to hit this on message activity.
>
> **[4:28](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=268)** This is going to call your QnA maker service with that message.
>
> **[4:33](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=273)** And the QnA maker will give you a response.
>
> **[4:37](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=277)** And this response, you will send it back to the user.
>
> **[4:40](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=280)** So this is the flow that we are trying to achieve.
>
> **[4:43](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=283)** So to achieve this, you need this QnA maker services object.
>
> **[4:48](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=288)** So let's start by creating that object.
>
> **[4:52](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=292)** So I'm going to add an init method.
>
> **[4:54](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=294)** This is an initializer in python, and this initializer is going to get some config and using that config, it is going to create a QnA maker object.
>
> **[5:11](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=311)** So this is going to be a self object, and it's going to use a QnA maker class to create this object.
>
> **[5:21](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=321)** So this QnA maker class needs a QnA maker endpoint.
>
> **[5:26](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=326)** We need to still import all this, but this is how it's going to be.
>
> **[5:30](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=330)** This is the API specification for defining these objects.
>
> **[5:34](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=334)** So these two we need right now.
>
> **[5:36](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=336)** So this can be imported from the bot [builder.ai](https://builder.ai).QnA
>
> **[5:45](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=345)** and import QnA maker and QnA maker endpoint.
>
> **[5:51](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=351)** So with this classes, we can create our QnA make object.
>
> **[5:55](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=355)** For the QnA maker object, you need to send the knowledge base ID, the end point key (keyboard clicking) and the host.
>
> **[6:12](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=372)** So this, you can get it from config.QnA.
>
> **[6:17](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=377)** So this is your configurator.
>
> **[6:19](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=379)** From here, what are the variables we are going to get, this word we're going to paste it.
>
> **[6:29](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=389)** Config.endpoint_key and config.endpoint host.
>
> **[6:39](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=399)** So we have the QnA maker object created.
>
> **[6:44](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=404)** Let's also check whether this config is being passed to my bot.
>
> **[6:48](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=408)** So this my bot is initialized in app.py.
>
> **[6:53](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=413)** So let's go to my bot.
>
> **[6:54](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=414)** So there's no config.
>
> **[6:55](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=415)** And the config is actually here.
>
> **[6:58](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=418)** It is learning the default config.
>
> **[7:00](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=420)** So we have to pass that config to the objects that config equal to config.
>
> **[7:09](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=429)** Great.
>
> **[7:10](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=430)** So now we have the QnA maker object or conflict is pass from app.py it to the bot.py.
>
> **[7:15](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=435)** And it's reading all the credentials and creating the QnA maker object.
>
> **[7:22](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=442)** We are done with the initialization part next we need to send a message to QnA maker and that happens on message activity.
>
> **[7:31](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=451)** So here you have to send this context to the QnA maker service.
>
> **[7:38](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=458)** So QnA maker service has something called as QnAmaker.getanswers function.
>
> **[7:48](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=468)** And to this, you can pass your turn context and it will return you a response.
>
> **[7:53](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=473)** And this method, this get answers method is an asynchronous method.
>
> **[7:57](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=477)** So you have to wait for the response.
>
> **[7:59](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=479)** So you use a bait and it's not mandatory that every time there's a question, there's going to be an answer.
>
> **[8:08](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=488)** So if there is a response, if it's not a null object, and the length of the response is greater than zero, which is to have at least one reply, then you can send a response, right?
>
> **[8:25](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=505)** And to get this response, you need to get it from response of zero.answer.
>
> **[8:35](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=515)** I can see this is a text response you have to enwrap it in message factory.text.
>
> **[8:44](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=524)** So this is a function that signifies broad framework that it's a text message response.
>
> **[8:51](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=531)** If this is not true, we have to return a valid message.
>
> **[8:54](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=534)** So far we have been returning whatever the user is seeing, but in this case, we will return no valid response, for your question.
>
> **[9:08](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=548)** So some valid message as the response.
>
> **[9:14](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=554)** With this, we are pretty much done with all the coding for the bot.
>
> **[9:18](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=558)** Now let's see if all this works together, let me open my terminal and run the python app.py, similar to the one, we did in echo bot.
>
> **[9:27](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=567)** You can see it's running in 3978 bot, and we can connect to the bot via our bot emulator and let's connect.
>
> **[9:38](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=578)** The same, Hello and welcome message pops up.
>
> **[9:40](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=580)** Let's say, hi and when I say hi, it has to hit the QnA maker and get the response from there.
>
> **[9:49](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=589)** So it's taking a moment there.
>
> **[9:52](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=592)** That's the response from our redtech30.
>
> **[9:55](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=595)** Next, let's ask what is redtech30, which means our code has been clean and it's working completely fine.
>
> **[10:05](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=605)** With that we have a bot that answers basic questions about our redtech30 company.
>
> **[10:10](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=610)** QnA maker lets you build static bots without worrying a lot about machine learning.
>
> **[10:15](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=615)** QnA maker though, looks simple, it actually gives your bot a personality.
>
> **[10:21](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=621)** I hope I have kick started your creativity engine.
>
> **[10:24](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-qna-maker-and-static-productbot?u=76281980&t=624)** Let's see how far it goes.

> [!info]- Semantic Content
>
> **Code Keywords:** let (16), this, (8), function (3), pass (3), static (2)
> **UI Navigation:** go to (3), click on (3), switch to (1)
> **File Paths:** app.py (3), config.py (1), load.env (1), bot.py (1)
> **Env Vars:** api (3), env (2), url (1)
> **Definitions:** is a  (4), is an  (2)
> **Non-Speech:** (keyboard clicking) (6)
> **CLI Commands:** make (3), python (2)
> **URLs:** [qnamaker.ai](https://qnamaker.ai) (1), [builder.ai](https://builder.ai) (1)

#### Training LUIS and dynamic productbot
> [LinkedIn Learning](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=0)** - [Instructor] We will start by copying all the app id, LUIS API key and the host name to the .env file, and similar to the Q&A maker, let's load this configuration into our default configuration.
>
> **[0:16](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=16)** Once you're happy with these two, next thing as always we are going to work with is the bot.py file.
>
> **[0:23](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=23)** I like Q&A maker example, the LUIS example has a lot more coordinate by default for you to work with.
>
> **[0:32](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=32)** So the first shank I'm going to show you is this piece where we have already sent a message to Q&A maker and got the response.
>
> **[0:41](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=41)** In case of there is no response, we will be using LUIS to see if there is any match.
>
> **[0:48](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=48)** For this we have an intent handler here, which is returned by us to handle the product, both specific intents and this intent will take the response from the LUIS recognizer it, and handle the intent.
>
> **[1:04](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=64)** So let's see what this recognizer is.
>
> **[1:06](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=66)** If you scroll to the top, you will see that there are two other objects that's being created.
>
> **[1:12](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=72)** One is the LUIS application using the LUIS application class.
>
> **[1:17](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=77)** And other one is the recognize it, which is created using the LUIS recognizer class.
>
> **[1:22](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=82)** These two objects are necessary to call the LUIS API.
>
> **[1:30](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=90)** The two classes can be important from [botbuilder.ai](https://botbuilder.ai).LUIS module.
>
> **[1:35](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=95)** And the two classes can be imported from [botbuilder.ai](https://botbuilder.ai).LUIS module.
>
> **[1:43](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=103)** Now you can also see there is a product intent handler here, it's just an edit function.
>
> **[1:47](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=107)** This is going to handle all the data related stuff.
>
> **[1:52](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=112)** So this is primarily to map your data and your intents and entities.
>
> **[1:58](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=118)** So similar to Q&A maker, let's start by looking at the flow, user sends a message and this is being sent to Q&A maker.
>
> **[2:08](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=128)** And in case of no response, the same message, like the user message is sent to LUIS, and later response from the LUIS, you're going to call the intent handler.
>
> **[2:25](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=145)** This intent handler is going to bap the intent to the responding action.
>
> **[2:31](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=151)** So that action is going to happen in the product intent handler.
>
> **[2:35](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=155)** So this product intent handler, will fetch the data from data handler, which is the product data Fetcher.
>
> **[2:46](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=166)** And this product data Fetcher will get you the data and intent handler will return the response back to the user.
>
> **[2:55](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=175)** So from here the response will go back the user.
>
> **[3:01](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=181)** So that's the flow and we have already covered these spots in the template code.
>
> **[3:06](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=186)** Now let's fill up product intent handler so that it can fetch the data and provide the response.
>
> **[3:14](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=194)** Let's start with the intents one by one, for example get product by category, get product info and get product price.
>
> **[3:22](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=202)** So let's create functions for these two, get product price itself and get product info.
>
> **[3:39](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=219)** Similarly for get product by category.
>
> **[3:48](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=228)** So using this it's very easy to map the intent name directly to the function name.
>
> **[3:55](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=235)** So each of this function will call the respect of product data Fetcher and get the data.
>
> **[4:01](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=241)** So let's quickly see what's there in the product data fetcher.
>
> **[4:04](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=244)** I have returned this module completely for you.
>
> **[4:07](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=247)** It doesn't come with the Microsoft bot AI.
>
> **[4:10](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=250)** I have given you the template.
>
> **[4:11](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=251)** So the data is in the product.CSV file.
>
> **[4:14](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=254)** In our case, it's in a CSV, but you are free to use a database or anything else that can store the data.
>
> **[4:23](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=263)** So coming back to the data Fetcher here you can see I'll read the product data frame and whenever I call get product I'll get all the product information.
>
> **[4:35](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=275)** When I call product info I'll get all the product description.
>
> **[4:41](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=281)** And when I call get price, I'll get the price information.
>
> **[4:45](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=285)** And when I called list products, I list out all the products that matches this specific category.
>
> **[4:51](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=291)** So these are basic filter functions that have returned.
>
> **[4:56](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=296)** So whenever there is a change in the data all you have to do is you'd have to just change this file and recreate this product data Fetcher to fit your requirement.
>
> **[5:07](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=307)** Now let's go back to the bot.py and finish the functions.
>
> **[5:12](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=312)** The first thing I would need here is the product name.
>
> **[5:16](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=316)** So the product name I can get from the base intent handler.
>
> **[5:19](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=319)** So the base intent handler has quite a number of things that you have to see.
>
> **[5:25](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=325)** So let's go to the base intent handler that's in the Utils territory.
>
> **[5:30](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=330)** And in here, the intent handler is again a template that I've given you so that you don't have to worry about all these things.
>
> **[5:38](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=338)** This has two main functions.
>
> **[5:40](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=340)** One is to get the entities, given the response from LUIS.
>
> **[5:45](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=345)** It will get all the entities.
>
> **[5:48](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=348)** And the next thing is get top intent.
>
> **[5:49](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=349)** This will get you the maximum intent.
>
> **[5:52](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=352)** The ones we saw in the test phase, right?
>
> **[5:54](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=354)** So we will get that intent over here.
>
> **[5:58](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=358)** And there's a default intent in this case it's just intent non-supporter.
>
> **[6:03](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=363)** And finally, there is a handle method.
>
> **[6:06](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=366)** This handle method we'll get the top intent called the respect to function which we are going to define in our product intent handler.
>
> **[6:15](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=375)** If the intent is not available it will call the default intent.
>
> **[6:23](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=383)** So let's start by getting the product name and the product name you will get it in self.get_entities.getoff the entity name,
>
> **[6:37](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=397)** the title is product name and I'm just going to do it for one product right now.
>
> **[6:42](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=402)** And there might be a case where the product named key might not be available.
>
> **[6:48](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=408)** And for that, I'm going to handle the exception because we don't want our bot to break at any point.
>
> **[6:55](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=415)** So we will handle a key error and we'll return cannot recognize a product in your credit, right?
>
> **[7:11](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=431)** Now to get the price we will use our data Fetcher and we will get the price.
>
> **[7:19](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=439)** So since these functions are already written, we just have to pass the product name and get the price.
>
> **[7:26](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=446)** Once we have the price let's construct a string for our response.
>
> **[7:30](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=450)** So this string is going to be the price of product and your product name is price.
>
> **[7:42](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=462)** So that finishes up our one intent completely.
>
> **[7:47](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=467)** Similarly, you can do the same for the rest of the intent.
>
> **[7:50](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=470)** It's pretty much the same.
>
> **[7:52](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=472)** So you're going to use the same code to get the product name.
>
> **[7:56](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=476)** And instead of the price you're going to get the info from self.data_Fetcher.get_product info, and you will pass the product name and can return the information.
>
> **[8:13](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=493)** Since this is already the description of the product, I'm not going to format it into anything.
>
> **[8:19](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=499)** So with that, we have done with a couple of intents.
>
> **[8:21](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=501)** Let's test this out before moving on and creating more intents.
>
> **[8:26](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=506)** Running the chat bot is the same thing.
>
> **[8:28](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=508)** You have to run python app.py.
>
> **[8:31](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=511)** And if everything is well and good, the bot will run seamlessly.
>
> **[8:36](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=516)** Let's go to the Microsoft bot emulator and see if this thing works.
>
> **[8:41](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=521)** Let me start with the high.
>
> **[8:42](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=522)** It should go to the Q&A maker that has worked well.
>
> **[8:48](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=528)** The next thing is, I'm going to ask for a particular product, what is red30 db-migrate?
>
> **[9:01](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=541)** Okay, actually, this has run to the Q&A maker itself.
>
> **[9:04](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=544)** Let's actually ask what is red30 learns price.
>
> **[9:13](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=553)** So there isn't bug, apparently product intent handler has no function called get entities which is very weird.
>
> **[9:53](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=593)** Let's start with a simple, hi this should go to a Q&A maker and get the response.
>
> **[9:59](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=599)** And what is the price of red30 learn?
>
> **[10:07](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=607)** So that's going to hit the LUIS and it's going to come back to our data fetcher.
>
> **[10:12](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=612)** Looks like we still have a bug, product data Fetcher has no attribute get product price.
>
> **[10:19](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=619)** So data Fetcher doesn't have get product, get price is the function, not get product price.
>
> **[10:27](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=627)** So let's quickly fix that and restart the application.
>
> **[10:32](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=632)** So it's normal to get these arrows when you're running the application as well because there is no way to test it without actually testing it.
>
> **[10:39](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=639)** So let me copy this and paste it and hope this works.
>
> **[10:48](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=648)** Oh, there, the price of red30 learn is $0.35 per hour.
>
> **[10:53](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=653)** So this is coming from our data or TSB file.
>
> **[10:58](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=658)** Similarly, let's look at one other product.
>
> **[11:01](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=661)** Let me see what this is giving for red30 cloud.
>
> **[11:05](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=665)** Tell me about red30 cloud.
>
> **[11:11](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=671)** So this is going again, hit the cloud hit the LUIS and get you the cloud description.
>
> **[11:18](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=678)** So this description is coming from the description tag.
>
> **[11:23](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=683)** So similarly, you can add more intense in your LUIS, map all of that to your data Fetcher and your intent handler.
>
> **[11:33](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=693)** And there, it will pop up in your chat bot.
>
> **[11:39](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=699)** Wila, now we have a fully functioning chat bot that can answer both static and dynamic questions.
>
> **[11:45](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=705)** We have used a CSV file for the sake of simplicity and ease of understanding.
>
> **[11:50](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=710)** On implementing a real time chat bot, you would replace this with the DB Grady or an API call.
>
> **[11:56](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=716)** Can also deploy and consume this chat board via a chat interface like you would consume any other web application.
>
> **[12:04](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=724)** That a combination of Q&A maker and Microsoft LUIS, you can tackle almost all the business use cases for building a chat bot.
>
> **[12:12](https://www.linkedin.com/learning/developing-chatbots-with-azure/training-luis-and-dynamic-productbot?u=76281980&t=732)** I hope you try all of that.

> [!info]- Semantic Content
>
> **Code Keywords:** let (20), function (6), module (3), class. (2), self (2)
> **Env Vars:** luis (17), api (3), csv (3), tsb (1)
> **File Paths:** bot.py (2), product.csv (1), app.py (1)
> **UI Navigation:** go to (3)
> **Exercise Files:** template (3)
> **Definitions:** is a  (3)
> **Analogies:** similar to (2), for example (1)
> **Code Identifiers:** get_entities (1), get_product (1)

#### Challenge: Write your own chatbot
> [LinkedIn Learning](https://www.linkedin.com/learning/developing-chatbots-with-azure/challenge-write-your-own-chatbot?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/developing-chatbots-with-azure/challenge-write-your-own-chatbot?u=76281980&t=0)** (upbeat playful music)
>
> **[0:07](https://www.linkedin.com/learning/developing-chatbots-with-azure/challenge-write-your-own-chatbot?u=76281980&t=7)** - [Instructor] Ready to code a bot all by yourself?
>
> **[0:09](https://www.linkedin.com/learning/developing-chatbots-with-azure/challenge-write-your-own-chatbot?u=76281980&t=9)** Great, remember the job bot you designed in the previous section?
>
> **[0:13](https://www.linkedin.com/learning/developing-chatbots-with-azure/challenge-write-your-own-chatbot?u=76281980&t=13)** Time to get it up and running.
>
> **[0:15](https://www.linkedin.com/learning/developing-chatbots-with-azure/challenge-write-your-own-chatbot?u=76281980&t=15)** For this challenge, we have a jobs page at Red Tech 30 website, and it's associated with the data, which is available in our repo.
>
> **[0:24](https://www.linkedin.com/learning/developing-chatbots-with-azure/challenge-write-your-own-chatbot?u=76281980&t=24)** Go ahead and grab the starter code and train a few intents in Luis and QnA Maker, make changes in the bot.py file that fits the requirements of your chat bot.
>
> **[0:36](https://www.linkedin.com/learning/developing-chatbots-with-azure/challenge-write-your-own-chatbot?u=76281980&t=36)** If you feel stuck at any point, feel free to refer to the previous videos and replicate the same.
>
> **[0:43](https://www.linkedin.com/learning/developing-chatbots-with-azure/challenge-write-your-own-chatbot?u=76281980&t=43)** This challenge can take you a few hours to few days.
>
> **[0:47](https://www.linkedin.com/learning/developing-chatbots-with-azure/challenge-write-your-own-chatbot?u=76281980&t=47)** Refer to the Azure documentation for further readings and more details about the topics.
>
> **[0:53](https://www.linkedin.com/learning/developing-chatbots-with-azure/challenge-write-your-own-chatbot?u=76281980&t=53)** I hope you have a lot of fun and good luck.
>
> **[0:56](https://www.linkedin.com/learning/developing-chatbots-with-azure/challenge-write-your-own-chatbot?u=76281980&t=56)** I'll see you at the solution video.

> [!info]- Semantic Content
>
> **File Paths:** bot.py (1)
> **CLI Commands:** make (1)
> **Exercise Files:** starter code (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat playful music) (1)

#### Solution: Write your own chatbot
> [LinkedIn Learning](https://www.linkedin.com/learning/developing-chatbots-with-azure/solution-write-your-own-chatbot?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/developing-chatbots-with-azure/solution-write-your-own-chatbot?u=76281980&t=0)** - [Instructor] Hello there.
>
> **[0:07](https://www.linkedin.com/learning/developing-chatbots-with-azure/solution-write-your-own-chatbot?u=76281980&t=7)** How was the chat board building experience?
>
> **[0:10](https://www.linkedin.com/learning/developing-chatbots-with-azure/solution-write-your-own-chatbot?u=76281980&t=10)** Hope it was not too hard, like I said in the previous challenge, there is no right or wrong answers.
>
> **[0:15](https://www.linkedin.com/learning/developing-chatbots-with-azure/solution-write-your-own-chatbot?u=76281980&t=15)** If you get the bot up and running, then we are good to go.
>
> **[0:21](https://www.linkedin.com/learning/developing-chatbots-with-azure/solution-write-your-own-chatbot?u=76281980&t=21)** Here is how I build the job bot.
>
> **[0:23](https://www.linkedin.com/learning/developing-chatbots-with-azure/solution-write-your-own-chatbot?u=76281980&t=23)** I created a new Q&A maker knowledge base, and this is pretty similar to what we have done for the product bot.
>
> **[0:31](https://www.linkedin.com/learning/developing-chatbots-with-azure/solution-write-your-own-chatbot?u=76281980&t=31)** We have nominal questions like where are you located?
>
> **[0:34](https://www.linkedin.com/learning/developing-chatbots-with-azure/solution-write-your-own-chatbot?u=76281980&t=34)** Where is the company, and some greetings.
>
> **[0:40](https://www.linkedin.com/learning/developing-chatbots-with-azure/solution-write-your-own-chatbot?u=76281980&t=40)** Next up, I have this job bot app in luis, where I have a single intern called get_job, which is trained with examples to get job based on technology and number of years of experience.
>
> **[0:57](https://www.linkedin.com/learning/developing-chatbots-with-azure/solution-write-your-own-chatbot?u=76281980&t=57)** To bring it all together I created a job in 10 handler, which has the single intent handler function which is get_job, which takes all our entities as filters for the get job function from data fetcher.
>
> **[1:11](https://www.linkedin.com/learning/developing-chatbots-with-azure/solution-write-your-own-chatbot?u=76281980&t=71)** The data fetcher goes through the CSV where we have all the jobs listed, and filters and gets the job that matches the query of the user.
>
> **[1:21](https://www.linkedin.com/learning/developing-chatbots-with-azure/solution-write-your-own-chatbot?u=76281980&t=81)** Now let's see this in action.
>
> **[1:24](https://www.linkedin.com/learning/developing-chatbots-with-azure/solution-write-your-own-chatbot?u=76281980&t=84)** Hi, what is Realtek30?
>
> **[1:27](https://www.linkedin.com/learning/developing-chatbots-with-azure/solution-write-your-own-chatbot?u=76281980&t=87)** And it's going to give me the introduction about Realtek30.
>
> **[1:31](https://www.linkedin.com/learning/developing-chatbots-with-azure/solution-write-your-own-chatbot?u=76281980&t=91)** And I'm going to ask my query saying, do you have any python jokes for five years experience?
>
> **[1:37](https://www.linkedin.com/learning/developing-chatbots-with-azure/solution-write-your-own-chatbot?u=76281980&t=97)** And it's going to give me a response, and wala, we have a fully functioning board ready to be deployed.

> [!info]- Semantic Content
>
> **Code Keywords:** function (2), let (1)
> **Code Identifiers:** get_job (2)
> **CLI Commands:** python (1)
> **Env Vars:** csv (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

#### Advancing the chatbot ladder
> [LinkedIn Learning](https://www.linkedin.com/learning/developing-chatbots-with-azure/advancing-the-chatbot-ladder?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/developing-chatbots-with-azure/advancing-the-chatbot-ladder?u=76281980&t=0)** - [Instructor] Give yourself a big pat on the back because we have come to the end of the course.
>
> **[0:04](https://www.linkedin.com/learning/developing-chatbots-with-azure/advancing-the-chatbot-ladder?u=76281980&t=4)** I thoroughly enjoyed walking you through this chat bot journey.
>
> **[0:09](https://www.linkedin.com/learning/developing-chatbots-with-azure/advancing-the-chatbot-ladder?u=76281980&t=9)** Remember the path that we have come along?
>
> **[0:11](https://www.linkedin.com/learning/developing-chatbots-with-azure/advancing-the-chatbot-ladder?u=76281980&t=11)** We started with a little theory on whats and whys of a chat bot, to conversation design, to building one on our own.
>
> **[0:20](https://www.linkedin.com/learning/developing-chatbots-with-azure/advancing-the-chatbot-ladder?u=76281980&t=20)** Where to go from here?
>
> **[0:21](https://www.linkedin.com/learning/developing-chatbots-with-azure/advancing-the-chatbot-ladder?u=76281980&t=21)** That's the million dollar question.
>
> **[0:24](https://www.linkedin.com/learning/developing-chatbots-with-azure/advancing-the-chatbot-ladder?u=76281980&t=24)** Chat bot deployment is no different than a web application deployment.
>
> **[0:29](https://www.linkedin.com/learning/developing-chatbots-with-azure/advancing-the-chatbot-ladder?u=76281980&t=29)** So that's something you can try.
>
> **[0:33](https://www.linkedin.com/learning/developing-chatbots-with-azure/advancing-the-chatbot-ladder?u=76281980&t=33)** Chat bot also needs a good user interface, and as a chat bot developer you expose the APIs that these message platforms can connect to.
>
> **[0:43](https://www.linkedin.com/learning/developing-chatbots-with-azure/advancing-the-chatbot-ladder?u=76281980&t=43)** Azure has clear documentation on how to connect to these messaging channels.
>
> **[0:48](https://www.linkedin.com/learning/developing-chatbots-with-azure/advancing-the-chatbot-ladder?u=76281980&t=48)** Those are worth checking out.
>
> **[0:50](https://www.linkedin.com/learning/developing-chatbots-with-azure/advancing-the-chatbot-ladder?u=76281980&t=50)** That might feel like a lot of things left untouched, but trust me, the aim of the course is to leave out the platform specific details and teach you the core foundations of chat bots.
>
> **[1:02](https://www.linkedin.com/learning/developing-chatbots-with-azure/advancing-the-chatbot-ladder?u=76281980&t=62)** From here, you can do a deep dive and check out the rich set of features that the Azure bot framework provides, or you can try swapping out Azure altogether and try different bot platforms, like Dialogflow or Rasa.
>
> **[1:20](https://www.linkedin.com/learning/developing-chatbots-with-azure/advancing-the-chatbot-ladder?u=76281980&t=80)** Finally, learning to build a chat bot is the same as software development journey.
>
> **[1:24](https://www.linkedin.com/learning/developing-chatbots-with-azure/advancing-the-chatbot-ladder?u=76281980&t=84)** You never stop learning.
>
> **[1:25](https://www.linkedin.com/learning/developing-chatbots-with-azure/advancing-the-chatbot-ladder?u=76281980&t=85)** So keep the learning vibe on and I'll see you in a different course.

> [!info]- Semantic Content
>
> **Code Keywords:** try. (1), interface (1), finally, (1)
> **Speakers:** - [instructor] (1)


## Path Context

### In [[Advancing Your Azure Developer Skills- Exploring Complex Application Development]]
← [[Azure Developer Associate (AZ-204) Cert Prep- Implement Azure Security]] | **5 of 7** | [[Microsoft Azure Synapse for Developers]] →

## Appears In

- [[Advancing Your Azure Developer Skills- Exploring Complex Application Development]]

---

[↑ Back to top](#)