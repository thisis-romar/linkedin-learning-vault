---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: introduction-to-attention-based-neural-networks
url: "https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks"
duration_minutes: 131
duration: 2h 11m
level: Intermediate
updated: 10/17/2022
learners: 10057
skills:
  - Neural Networks
  - Artificial Intelligence (AI)
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQEO3pew_MlbVA/learning-public-crop_675_1200/B4EZjoiaKRHoAY-/0/1756247991159?e=2147483647&amp;v=beta&amp;t=AIiUEPc8EOC4sT4UnM38a1ccb8MFyTRBIl0P7wMot0I"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - Advance Your Skills in AI and Machine Learning
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - skill/neural-networks
  - skill/artificial-intelligence-ai
status: not-started
created: 2026-04-19
---

![Introduction to Attention-Based Neural Networks](https://media.licdn.com/dms/image/v2/D4E0DAQEO3pew_MlbVA/learning-public-crop_675_1200/B4EZjoiaKRHoAY-/0/1756247991159?e=2147483647&amp;v=beta&amp;t=AIiUEPc8EOC4sT4UnM38a1ccb8MFyTRBIl0P7wMot0I)

# Introduction to Attention-Based Neural Networks

> Attention-based models allow neural networks to focus on the most important features of the input, thus producing better results at the output. In this course, Janani Ravi 
explains how recurrent neural networks work and builds and trains two image captioning models one without attention and another using attention models and compares their results. If you have some experience and understanding of

> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks) | 2h 11m | Intermediate | 10K learners
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Janani Ravi]]

## Resources

- Exercise files available

## Skills Covered

- Neural Networks
- Artificial Intelligence (AI)

## Table of Contents

### Introduction

#### Prerequisites
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/prerequisites?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/prerequisites?u=76281980&t=1)** - [Instructor] Hi, and welcome to this course on Attention-based neural networks.
>
> **[0:05](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/prerequisites?u=76281980&t=5)** This is an introductory course on Attention-based models.
>
> **[0:08](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/prerequisites?u=76281980&t=8)** There are definitely some prereqs that you need to have to make the most of your learning.
>
> **[0:13](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/prerequisites?u=76281980&t=13)** This is definitely not a beginner deep learning course.
>
> **[0:17](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/prerequisites?u=76281980&t=17)** Now, here is what I expect that you already know.
>
> **[0:19](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/prerequisites?u=76281980&t=19)** I expect that you already have a basic understanding of how neural networks work.
>
> **[0:25](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/prerequisites?u=76281980&t=25)** You understand the training of a neural network, back propagation, gradient descent, the entire details.
>
> **[0:32](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/prerequisites?u=76281980&t=32)** It would also help for you to have some understanding of transfer learning using pre-trained models, specifically image classification models, because you'll be using those in our hands-on demos.
>
> **[0:44](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/prerequisites?u=76281980&t=44)** Now, as far as the demos are concerned, I hope you're comfortable programming in Python and you're comfortable building and training neural networks using the PyTorch framework.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1), python (1)
> **Definitions:** is an  (1)
> **Prerequisites:** you need to have (1)
> **Speakers:** - [instructor] (1)

#### What are attention-based models?
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/what-are-attention-based-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/what-are-attention-based-models?u=76281980&t=1)** - [Instructor] So what exactly are Attention-based Models, and how do they help?
>
> **[0:05](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/what-are-attention-based-models?u=76281980&t=5)** Well, let's understand this with a few examples.
>
> **[0:08](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/what-are-attention-based-models?u=76281980&t=8)** Starting off with a very simple text summarization example.
>
> **[0:12](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/what-are-attention-based-models?u=76281980&t=12)** Let's say I were to ask you to summarize this text and write two or three sentences of what this was about.
>
> **[0:18](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/what-are-attention-based-models?u=76281980&t=18)** One technique that you would follow could be to read the entire paragraph, parse it, really understand it.
>
> **[0:25](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/what-are-attention-based-models?u=76281980&t=25)** And then using the information that you've understood, create a two or three line summary.
>
> **[0:31](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/what-are-attention-based-models?u=76281980&t=31)** Well, that actually seems rather daunting.
>
> **[0:34](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/what-are-attention-based-models?u=76281980&t=34)** When I looked at this text, I couldn't understand anything that was going on.
>
> **[0:37](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/what-are-attention-based-models?u=76281980&t=37)** But let's say you were to break things up into more manageable chunks.
>
> **[0:41](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/what-are-attention-based-models?u=76281980&t=41)** What if you focused your attention on parts of the text at a time?
>
> **[0:46](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/what-are-attention-based-models?u=76281980&t=46)** So you created summaries looking at only one part at a time.
>
> **[0:49](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/what-are-attention-based-models?u=76281980&t=49)** Now you can see this first part here, you could summarize just this sentence.
>
> **[0:53](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/what-are-attention-based-models?u=76281980&t=53)** You could say "Grammar is complex and nuanced."
>
> **[0:57](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/what-are-attention-based-models?u=76281980&t=57)** That would be your summary for the first part.
>
> **[1:00](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/what-are-attention-based-models?u=76281980&t=60)** Then you would turn your attention to the second part.
>
> **[1:02](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/what-are-attention-based-models?u=76281980&t=62)** And then you would talk about the complexity of grammar that it exists across languages and it's not just in English.
>
> **[1:10](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/what-are-attention-based-models?u=76281980&t=70)** And finally, you'd turn your attention to the last part of this text.
>
> **[1:14](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/what-are-attention-based-models?u=76281980&t=74)** And you'd say "If grammar is universal, who created it?"
>
> **[1:17](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/what-are-attention-based-models?u=76281980&t=77)** That is a summary of these last few sentences.
>
> **[1:21](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/what-are-attention-based-models?u=76281980&t=81)** You'd put all of these sentences together to produce a three sentence summary of this paragraph.
>
> **[1:29](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/what-are-attention-based-models?u=76281980&t=89)** And this, of course, made your task a lot easier.
>
> **[1:32](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/what-are-attention-based-models?u=76281980&t=92)** It's pretty clear that by allowing you to zoom in and focus attention on parts of the text, helped us improve the result that you produced.
>
> **[1:43](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/what-are-attention-based-models?u=76281980&t=103)** Now, let's try this once again this time for an image.
>
> **[1:45](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/what-are-attention-based-models?u=76281980&t=105)** Your task is to generate a caption for this image.
>
> **[1:48](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/what-are-attention-based-models?u=76281980&t=108)** Now, if you look at the image as a whole, it's really hard to tell what exactly the image is about.
>
> **[1:54](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/what-are-attention-based-models?u=76281980&t=114)** What are the important parts of this image?
>
> **[1:56](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/what-are-attention-based-models?u=76281980&t=116)** What are the unimportant parts?
>
> **[1:58](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/what-are-attention-based-models?u=76281980&t=118)** In order to be able to generate captions, it's far better to focus attention on important bits.
>
> **[2:03](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/what-are-attention-based-models?u=76281980&t=123)** So you'd zoom in on the horse, the beach, maybe the waves, maybe the houses in the background.
>
> **[2:09](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/what-are-attention-based-models?u=76281980&t=129)** Human beings are trained to focus attention on the relevant bits of the image to generate captions or descriptions.
>
> **[2:17](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/what-are-attention-based-models?u=76281980&t=137)** A part of focusing attention on the right bits is to ignore the irrelevant or the less important portions of the image.
>
> **[2:24](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/what-are-attention-based-models?u=76281980&t=144)** They maybe irrelevant, so you don't actually look at them or pay attention to them.
>
> **[2:29](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/what-are-attention-based-models?u=76281980&t=149)** You then use the relevant portions that you've identified to generate your caption.
>
> **[2:34](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/what-are-attention-based-models?u=76281980&t=154)** So you might say, "Okay, there is a man on a horse here."
>
> **[2:38](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/what-are-attention-based-models?u=76281980&t=158)** Then you'd look at a different portion of the image, "The man on the horse is on a beach."
>
> **[2:43](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/what-are-attention-based-models?u=76281980&t=163)** And then you'd look at the background and say, "There are houses in the background."
>
> **[2:47](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/what-are-attention-based-models?u=76281980&t=167)** The use of attention allowed you to focus on the important bits of the input.
>
> **[2:52](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/what-are-attention-based-models?u=76281980&t=172)** And this is what attention does in your neural network models.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), finally, (1), this, (1)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)

#### Attention in language generation and translation models
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-in-language-generation-and-translation-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-in-language-generation-and-translation-models?u=76281980&t=1)** - [Instructor] You now have a big picture, into the understanding of how attention may help you produce better results in neural networks.
>
> **[0:09](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-in-language-generation-and-translation-models?u=76281980&t=9)** Now, let's get a little more detail and talk about attention in language generation and translation models because this is where they're most widely used.
>
> **[0:18](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-in-language-generation-and-translation-models?u=76281980&t=18)** Let's say you have a language translation model that translates the English language to the German language.
>
> **[0:25](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-in-language-generation-and-translation-models?u=76281980&t=25)** One way this model could work would be for the model to read the entire input sequence in English, understand its meaning, and then produce the equivalent sentence in German.
>
> **[0:38](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-in-language-generation-and-translation-models?u=76281980&t=38)** This is how a model that does not use attention would perform language translation.
>
> **[0:43](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-in-language-generation-and-translation-models?u=76281980&t=43)** Let's dig a little deeper and see how language translation models are set up.
>
> **[0:48](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-in-language-generation-and-translation-models?u=76281980&t=48)** Language translation models operate on words one word at a time.
>
> **[0:54](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-in-language-generation-and-translation-models?u=76281980&t=54)** These models are sequence to sequence models.
>
> **[0:57](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-in-language-generation-and-translation-models?u=76281980&t=57)** That's because we feed in the sequence of words at the input, and then you get a translated sequence of words at the output.
>
> **[1:06](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-in-language-generation-and-translation-models?u=76281980&t=66)** The way sequence to sequence models work is that one word is produced at the output at a single time instance.
>
> **[1:13](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-in-language-generation-and-translation-models?u=76281980&t=73)** After reading in the entire input sequence, the first word of the output is produced.
>
> **[1:18](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-in-language-generation-and-translation-models?u=76281980&t=78)** That word is then used to generate the second word at the output, which is then used to generate the third word of the output, and so on.
>
> **[1:25](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-in-language-generation-and-translation-models?u=76281980&t=85)** The entire sequence of the translated sentence is generated.
>
> **[1:31](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-in-language-generation-and-translation-models?u=76281980&t=91)** In order to generate a single word in the output translation sequence, the model looks at the entire input sentence.
>
> **[1:41](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-in-language-generation-and-translation-models?u=76281980&t=101)** It uses the information from the sentence as a whole and it also uses the previously generated word in the translated sequence.
>
> **[1:51](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-in-language-generation-and-translation-models?u=76281980&t=111)** The input sentence is considered in its entirety and an additional input is the previous word that was generated in the sequence.
>
> **[1:58](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-in-language-generation-and-translation-models?u=76281980&t=118)** Now, this could be improved upon.
>
> **[2:02](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-in-language-generation-and-translation-models?u=76281980&t=122)** Certain words can be better predicted if attention is focused on portions of the input rather than the entire input sentence.
>
> **[2:11](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-in-language-generation-and-translation-models?u=76281980&t=131)** For example, the word ich would be best predicted if attention was focused on the word I.
>
> **[2:17](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-in-language-generation-and-translation-models?u=76281980&t=137)** And you can see similar relationships with other words in this translation.
>
> **[2:22](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-in-language-generation-and-translation-models?u=76281980&t=142)** The prediction of words in the sequence would improve with attention.
>
> **[2:27](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-in-language-generation-and-translation-models?u=76281980&t=147)** The relationship could be more complex than one to one.
>
> **[2:30](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-in-language-generation-and-translation-models?u=76281980&t=150)** There might be a single word at the input that is related to multiple words at the output and the reverse may also be true.
>
> **[2:38](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-in-language-generation-and-translation-models?u=76281980&t=158)** Multiple words at the input may be related to one word at the output, so it's not just about focusing attention on a single word of the input.
>
> **[2:47](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-in-language-generation-and-translation-models?u=76281980&t=167)** Attention can help focus on the right bits of the input to generate a particular output.
>
> **[2:54](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-in-language-generation-and-translation-models?u=76281980&t=174)** And this is what attention based models do.
>
> **[2:57](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-in-language-generation-and-translation-models?u=76281980&t=177)** They allow neural networks to focus on the most important features of the input thus reducing better results at the output.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3)
> **Analogies:** picture (1), for example (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 1. Recurrent Neural Networks to Learn Sequential Data

#### Feed forward networks and their limitations
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/feed-forward-networks-and-their-limitations?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/feed-forward-networks-and-their-limitations?u=76281980&t=1)** - The use of attention is widely prevalent in language generation or language translation models and these tend to be recurrent neural networks.
>
> **[0:10](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/feed-forward-networks-and-their-limitations?u=76281980&t=10)** So, before you can understand attention based models, it's important that you understand how recurrent neural networks work.
>
> **[0:18](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/feed-forward-networks-and-their-limitations?u=76281980&t=18)** Recurrent neural networks allow you to work with sequential data and they're different from feed forward neural networks.
>
> **[0:25](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/feed-forward-networks-and-their-limitations?u=76281980&t=25)** Let's discuss feed forward neural networks and their limitations first.
>
> **[0:29](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/feed-forward-networks-and-their-limitations?u=76281980&t=29)** These are neural networks that you're likely familiar with.
>
> **[0:32](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/feed-forward-networks-and-their-limitations?u=76281980&t=32)** Dense neural networks or convolution neural networks tend to be feed forward networks.
>
> **[0:37](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/feed-forward-networks-and-their-limitations?u=76281980&t=37)** Here you have active learning units neurons arranged in layers.
>
> **[0:40](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/feed-forward-networks-and-their-limitations?u=76281980&t=40)** Input is fed into the first layer of the model and your output is available from the last layer of the model.
>
> **[0:48](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/feed-forward-networks-and-their-limitations?u=76281980&t=48)** The output of such a model is usually a prediction of some kind.
>
> **[0:52](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/feed-forward-networks-and-their-limitations?u=76281980&t=52)** What kind of prediction depends on what kind of model you are training.
>
> **[0:56](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/feed-forward-networks-and-their-limitations?u=76281980&t=56)** The prediction will be a class or a category if you're building a classification model.
>
> **[1:00](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/feed-forward-networks-and-their-limitations?u=76281980&t=60)** The prediction will be a continuous numeric value if you're building a regression model.
>
> **[1:05](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/feed-forward-networks-and-their-limitations?u=76281980&t=65)** This is referred to as a feed forward neural network because neurons in each layer pass their outputs forward towards the last layer.
>
> **[1:15](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/feed-forward-networks-and-their-limitations?u=76281980&t=75)** Feed forward neural networks can be arbitrarily complex.
>
> **[1:18](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/feed-forward-networks-and-their-limitations?u=76281980&t=78)** Every neuron in a layer may be connected to one or more neurons in the layer after it.
>
> **[1:23](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/feed-forward-networks-and-their-limitations?u=76281980&t=83)** That is a densely connected feed forward neural network.
>
> **[1:27](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/feed-forward-networks-and-their-limitations?u=76281980&t=87)** If a neuron is connected to just a few neurons in the next layer, that's an example of a sparsely connected network.
>
> **[1:33](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/feed-forward-networks-and-their-limitations?u=76281980&t=93)** Another feature of feed forward neural networks is that the entire input, that is the complete record that the neural network needs to make its prediction is available at a single time instance.
>
> **[1:47](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/feed-forward-networks-and-their-limitations?u=76281980&t=107)** Your data point is represented in some numeric form and the entire data point is fed in to get the prediction.
>
> **[1:55](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/feed-forward-networks-and-their-limitations?u=76281980&t=115)** Every input that you feed in is an independent record or data point from your training data; There are no inter relationships in your input data.
>
> **[2:06](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/feed-forward-networks-and-their-limitations?u=76281980&t=126)** Each input data point is independent of other inputs present in the trading data, and there is no inherent order or sequence to the inputs.
>
> **[2:15](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/feed-forward-networks-and-their-limitations?u=76281980&t=135)** In fact, it's often the case that you shuffle the inputs before feeding them into your feed forward network.
>
> **[2:21](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/feed-forward-networks-and-their-limitations?u=76281980&t=141)** Another characteristic of the feed forward network is that the output or the prediction is never fed back into the input.
>
> **[2:29](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/feed-forward-networks-and-their-limitations?u=76281980&t=149)** The output is just for a single data sample and it's just used as is.
>
> **[2:33](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/feed-forward-networks-and-their-limitations?u=76281980&t=153)** Feed forward networks are made up of feed forward neurons and here is how a neuron might be represented.
>
> **[2:40](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/feed-forward-networks-and-their-limitations?u=76281980&t=160)** Y, the output of the neuron is activation, applied to Wx+b.
>
> **[2:45](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/feed-forward-networks-and-their-limitations?u=76281980&t=165)** Here X is the vector of inputs that you feed into a neuron.
>
> **[2:49](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/feed-forward-networks-and-their-limitations?u=76281980&t=169)** The input X is weighed by a weights vector, W.
>
> **[2:54](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/feed-forward-networks-and-their-limitations?u=76281980&t=174)** The neuron has an activation function to learn non-linear relationships and then you get the output Y.
>
> **[3:00](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/feed-forward-networks-and-their-limitations?u=76281980&t=180)** A feed forward Neuron, however, does not have what it takes to deal with sequential input and output.
>
> **[3:07](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/feed-forward-networks-and-their-limitations?u=76281980&t=187)** Now, sequences are data points which have special time relationships.
>
> **[3:11](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/feed-forward-networks-and-their-limitations?u=76281980&t=191)** Certain data might be available earlier, certain data might be available later, so, different portions of the data may be available at different time instances.
>
> **[3:23](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/feed-forward-networks-and-their-limitations?u=76281980&t=203)** Another thing about sequences, the order of the data points in the sequence is important.
>
> **[3:28](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/feed-forward-networks-and-their-limitations?u=76281980&t=208)** If you change the order of data in a sequence, well, it's meaning might change completely; It might change the semantics of your data.
>
> **[3:36](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/feed-forward-networks-and-their-limitations?u=76281980&t=216)** Language is sequential data.
>
> **[3:39](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/feed-forward-networks-and-their-limitations?u=76281980&t=219)** For example, consider the sentence, this is not a good meal.
>
> **[3:42](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/feed-forward-networks-and-their-limitations?u=76281980&t=222)** I would say this is a negative sentence expressing negative sentiment, but what if I were to add a few more words to the sequence?
>
> **[3:50](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/feed-forward-networks-and-their-limitations?u=76281980&t=230)** This is not a good meal, it is a great meal.
>
> **[3:53](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/feed-forward-networks-and-their-limitations?u=76281980&t=233)** Now, this sentence now becomes positive; It has positive sentiment.
>
> **[3:58](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/feed-forward-networks-and-their-limitations?u=76281980&t=238)** Even this simple example makes it very clear that language is sequential because the order of the words matter.
>
> **[4:07](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/feed-forward-networks-and-their-limitations?u=76281980&t=247)** The order of the words change the meaning of the words.
>
> **[4:10](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/feed-forward-networks-and-their-limitations?u=76281980&t=250)** If you think of autocomplete models, autocomplete models use the order of words that have been seen so far to predict the next word in the sequence.
>
> **[4:19](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/feed-forward-networks-and-their-limitations?u=76281980&t=259)** Another example of sequential data is historical stock price data.
>
> **[4:24](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/feed-forward-networks-and-their-limitations?u=76281980&t=264)** Stock ticker data has implicit time relationships.
>
> **[4:28](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/feed-forward-networks-and-their-limitations?u=76281980&t=268)** So you have stock price at different instances of time.
>
> **[4:32](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/feed-forward-networks-and-their-limitations?u=76281980&t=272)** Trends over time is an important concept in stock price prediction.
>
> **[4:37](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/feed-forward-networks-and-their-limitations?u=76281980&t=277)** Trends might be rising trends, falling trends, anything.
>
> **[4:39](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/feed-forward-networks-and-their-limitations?u=76281980&t=279)** The order or sequence in which the stock prices are parsed is important.
>
> **[4:45](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/feed-forward-networks-and-their-limitations?u=76281980&t=285)** Another example of sequential data is video.
>
> **[4:49](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/feed-forward-networks-and-their-limitations?u=76281980&t=289)** Videos are just image frames viewed in a sequence.
>
> **[4:52](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/feed-forward-networks-and-their-limitations?u=76281980&t=292)** For example, if you have a car moving through a racetrack, you can use the position of the car at different time instances to predict the next position of that car.
>
> **[5:04](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/feed-forward-networks-and-their-limitations?u=76281980&t=304)** Now, feed forward networks cannot capture time relationships in data, which means feed forward networks are not good candidates for working with sequences.

> [!info]- Semantic Content
>
> **Definitions:** is a  (3), is an  (2)
> **Code Keywords:** let (1), pass (1), function (1)
> **Analogies:** for example (2)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Speakers:** - the (1)

#### Recurrent neural networks for sequential data
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/recurrent-neural-networks-for-sequential-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/recurrent-neural-networks-for-sequential-data?u=76281980&t=1)** - [Instructor] If feedforward neural networks don't let you cope with sequential data, what do you do?
>
> **[0:06](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/recurrent-neural-networks-for-sequential-data?u=76281980&t=6)** Well, you use recurrent neural networks whose very structure is meant for working with sequences.
>
> **[0:14](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/recurrent-neural-networks-for-sequential-data?u=76281980&t=14)** We've seen earlier what a single feedforward neuron looks like.
>
> **[0:18](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/recurrent-neural-networks-for-sequential-data?u=76281980&t=18)** Y is equal to activation applied to Wx plus b.
>
> **[0:23](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/recurrent-neural-networks-for-sequential-data?u=76281980&t=23)** A recurrent neuron is a little different.
>
> **[0:25](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/recurrent-neural-networks-for-sequential-data?u=76281980&t=25)** A recurrent neuron has the output Y at some time instance t fed back to its input.
>
> **[0:33](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/recurrent-neural-networks-for-sequential-data?u=76281980&t=33)** A recurrent neuron not only accepts X values at a certain time instance t at its input, but it also accepts the previous output, the previous Y at t-1 at its input.
>
> **[0:47](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/recurrent-neural-networks-for-sequential-data?u=76281980&t=47)** Let's understand and break this down bit by bit.
>
> **[0:50](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/recurrent-neural-networks-for-sequential-data?u=76281980&t=50)** The input to a recurrent neuron is X at some time instance t.
>
> **[0:57](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/recurrent-neural-networks-for-sequential-data?u=76281980&t=57)** This X will be different at different time instances over the sequence.
>
> **[1:02](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/recurrent-neural-networks-for-sequential-data?u=76281980&t=62)** The input X is multiplied by its own set of weights.
>
> **[1:06](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/recurrent-neural-networks-for-sequential-data?u=76281980&t=66)** That's Wx.
>
> **[1:07](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/recurrent-neural-networks-for-sequential-data?u=76281980&t=67)** In addition, a second input to the recurrent neuron is the output from the previous time instance, the output Y of t-1.
>
> **[1:18](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/recurrent-neural-networks-for-sequential-data?u=76281980&t=78)** This output Y of t-1 has its own weight vector W of y.
>
> **[1:24](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/recurrent-neural-networks-for-sequential-data?u=76281980&t=84)** In essence, a recurrent neuron differs from a feedforward neuron.
>
> **[1:29](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/recurrent-neural-networks-for-sequential-data?u=76281980&t=89)** In that, the output Y is fed back to the input, and this feedback loop is used to generate the next output in the sequence.
>
> **[1:39](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/recurrent-neural-networks-for-sequential-data?u=76281980&t=99)** Practically in a recurrent neuron, it's not the previous output Y that's fed back to the input.
>
> **[1:45](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/recurrent-neural-networks-for-sequential-data?u=76281980&t=105)** Instead, every recurrent neuron has a hidden state usually represented by h of t.
>
> **[1:52](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/recurrent-neural-networks-for-sequential-data?u=76281980&t=112)** This hidden state of the recurrent neuron can be thought of as an intermediate representation of the input data that was last seen.
>
> **[2:00](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/recurrent-neural-networks-for-sequential-data?u=76281980&t=120)** And this hidden state gives the neuron the ability to remember what happened in the past.
>
> **[2:06](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/recurrent-neural-networks-for-sequential-data?u=76281980&t=126)** And it's for exactly this reason that the hidden state of a recurrent neuron is often referred to as the memory of a neuron.
>
> **[2:14](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/recurrent-neural-networks-for-sequential-data?u=76281980&t=134)** So here is how recurrent neurons are different from feedforward neurons.
>
> **[2:18](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/recurrent-neural-networks-for-sequential-data?u=76281980&t=138)** Recurrent neurons have a memory that allow them to remember the past and learn from the past.
>
> **[2:25](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/recurrent-neural-networks-for-sequential-data?u=76281980&t=145)** And it is this property of a recurrent neuron that allows it to exploit time relationships that exist in data, that allows it to work with sequences.
>
> **[2:36](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/recurrent-neural-networks-for-sequential-data?u=76281980&t=156)** A recurrent neuron has the hidden state from the previous time instance fed back in the next time instance.
>
> **[2:44](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/recurrent-neural-networks-for-sequential-data?u=76281980&t=164)** That is a hidden state from time instance t-1 is fed back to the neuron at time t.
>
> **[2:51](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/recurrent-neural-networks-for-sequential-data?u=76281980&t=171)** This hidden state that's fed back in the next time instance contains information of all of the previous inputs and outputs that this particular recurrent neuron has seen.
>
> **[3:03](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/recurrent-neural-networks-for-sequential-data?u=76281980&t=183)** This hidden state contains the memory of the recurrent neuron.
>
> **[3:08](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/recurrent-neural-networks-for-sequential-data?u=76281980&t=188)** Now the question arises: How does a recurrent neuron accept inputs at different time instances?
>
> **[3:13](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/recurrent-neural-networks-for-sequential-data?u=76281980&t=193)** So how do you feed in a sequence to a recurrent neuron?
>
> **[3:17](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/recurrent-neural-networks-for-sequential-data?u=76281980&t=197)** And this is done using a process that's called unrolling through time.
>
> **[3:22](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/recurrent-neural-networks-for-sequential-data?u=76281980&t=202)** A recurrent neuron is able to accept input at different time instances by unrolling through time.
>
> **[3:29](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/recurrent-neural-networks-for-sequential-data?u=76281980&t=209)** This is how recurrent neurons deal with sequential input.
>
> **[3:33](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/recurrent-neural-networks-for-sequential-data?u=76281980&t=213)** Imagine a single recurrent neuron that's able to accept the value of X at a certain time instance along with the previous hidden state, at the previous time instance and then unroll this through time.
>
> **[3:47](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/recurrent-neural-networks-for-sequential-data?u=76281980&t=227)** Let's see how that would work.
>
> **[3:48](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/recurrent-neural-networks-for-sequential-data?u=76281980&t=228)** At time t equal to 1, the first input in the sequence is fed to the first neuron.
>
> **[3:57](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/recurrent-neural-networks-for-sequential-data?u=76281980&t=237)** Now this will produce some output Y of 1 and some hidden state h of 1.
>
> **[4:02](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/recurrent-neural-networks-for-sequential-data?u=76281980&t=242)** In the next time instance at time t is equal to 2, the hidden state of the first neuron and the second input in the sequence is fed in to the second neuron to produce an output Y of 2 and produce a second hidden state h of 2.
>
> **[4:19](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/recurrent-neural-networks-for-sequential-data?u=76281980&t=259)** This process is then repeated.
>
> **[4:22](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/recurrent-neural-networks-for-sequential-data?u=76281980&t=262)** The hidden state of the second neuron and the third input in the sequence is fed in to the third neuron to get the third output Y of 3 and produce a third hidden state, which is then fed in to the fourth neuron, which then feeds in to the fifth neuron, and so on.
>
> **[4:38](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/recurrent-neural-networks-for-sequential-data?u=76281980&t=278)** So how far do you the input neuron?
>
> **[4:40](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/recurrent-neural-networks-for-sequential-data?u=76281980&t=280)** Well, you unroll the neuron for as many time instances as you have in your input.
>
> **[4:46](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/recurrent-neural-networks-for-sequential-data?u=76281980&t=286)** That is the length of your input sequence determines how far you unroll the recurrent neuron.
>
> **[4:53](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/recurrent-neural-networks-for-sequential-data?u=76281980&t=293)** When you're building neural networks, you arrange your neurons in layers.
>
> **[4:57](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/recurrent-neural-networks-for-sequential-data?u=76281980&t=297)** You don't work with single neurons.
>
> **[5:00](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/recurrent-neural-networks-for-sequential-data?u=76281980&t=300)** How are the layers of a recurrent neural network constructed?
>
> **[5:03](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/recurrent-neural-networks-for-sequential-data?u=76281980&t=303)** Well, you set up an RNN cell, which corresponds to a single layer in your recurrent neural network.
>
> **[5:11](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/recurrent-neural-networks-for-sequential-data?u=76281980&t=311)** And an RNN cell will be made up of multiple recurrent neurons.
>
> **[5:15](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/recurrent-neural-networks-for-sequential-data?u=76281980&t=315)** And you then unroll this RNN cell to make up the recurrent layers of your neural network.
>
> **[5:23](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/recurrent-neural-networks-for-sequential-data?u=76281980&t=323)** The number of layers in your recurrent neural network depends on the length of the sequence that you feed in, the number of time instances you have in your input data.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3)
> **Env Vars:** rnn (3)
> **Cross-References:** in the next (3)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Analogies:** imagine (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### The need for long memory cells
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-need-for-long-memory-cells?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-need-for-long-memory-cells?u=76281980&t=1)** - RNN memory cells have a hidden state that allow the cell to remember the past.
>
> **[0:06](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-need-for-long-memory-cells?u=76281980&t=6)** However, the memory capacity of such a cell is not very big which is why, in order to get the best results from our recurrent neural networks, we need to use long memory cells.
>
> **[0:18](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-need-for-long-memory-cells?u=76281980&t=18)** Now, the regular recurrent cell suffers from what we call short-term memory.
>
> **[0:24](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-need-for-long-memory-cells?u=76281980&t=24)** We've discussed in the earlier video that the memory of a recurrent neuron is because of the hidden state that it holds.
>
> **[0:31](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-need-for-long-memory-cells?u=76281980&t=31)** It is this memory that allows recurrent cells to remember what happened in the past, what went by in the sequence, and that's what allows recurrent neurons to predict the next bit of information in the sequence.
>
> **[0:47](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-need-for-long-memory-cells?u=76281980&t=47)** However, the memory capacity of a regular recurrent neurons is not very large.
>
> **[0:52](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-need-for-long-memory-cells?u=76281980&t=52)** The simple hidden state is not enough to store all of the information from the past.
>
> **[0:58](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-need-for-long-memory-cells?u=76281980&t=58)** Now, if you're working with very long input sequences your recurrent neurons may not process these well and you will not get good results at the output.
>
> **[1:07](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-need-for-long-memory-cells?u=76281980&t=67)** That's because these recurrent neurons will not have very much memory capacity and they'll not be able to remember information from time instances very far back in the past, the distant past.
>
> **[1:18](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-need-for-long-memory-cells?u=76281980&t=78)** We've discussed that the layers of your recurrent neural network are made up of unrolled RNN memory cells.
>
> **[1:27](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-need-for-long-memory-cells?u=76281980&t=87)** The number of layers in your neural network depends on the length of your input sequence, the number of time instances of your input.
>
> **[1:35](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-need-for-long-memory-cells?u=76281980&t=95)** Now, recurrent neural networks are trained like regular neural networks, once the RNN cell has been unrolled.
>
> **[1:40](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-need-for-long-memory-cells?u=76281980&t=100)** They're trained using gradient descent.
>
> **[1:43](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-need-for-long-memory-cells?u=76281980&t=103)** You get the output of the recurrent network, you compute a loss function, you compute gradients, and gradients are then propagated back through the recurrent layers.
>
> **[1:54](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-need-for-long-memory-cells?u=76281980&t=114)** The model weights are updated using these gradients.
>
> **[1:58](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-need-for-long-memory-cells?u=76281980&t=118)** Now, the number of layers in your recurrent neural network is equal to the number of time instances in the input data that is equal to the length of the input sequence.
>
> **[2:08](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-need-for-long-memory-cells?u=76281980&t=128)** Now, often input sequences are very, very long which means you need very deep RNNs in order to process such sequences.
>
> **[2:19](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-need-for-long-memory-cells?u=76281980&t=139)** Once you have a very deep neural network, all of the problems associated with training deep neural networks come into play.
>
> **[2:28](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-need-for-long-memory-cells?u=76281980&t=148)** Once you compute your gradients, if you try to propagate these gradients back through many layers of your deep neural network, that may cause the gradients to become very small for the earlier layers, or kind of explode in magnitude at different layers, leading to non-convergence during training.
>
> **[2:45](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-need-for-long-memory-cells?u=76281980&t=165)** If your gradients fall to a very small value, that's referred to as vanishing gradients.
>
> **[2:51](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-need-for-long-memory-cells?u=76281980&t=171)** if your gradients explode in magnitude and do not converge that's referred to as exploding gradients.
>
> **[2:57](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-need-for-long-memory-cells?u=76281980&t=177)** RNNs are extremely prone to the problem of vanishing and exploding gradients.
>
> **[3:02](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-need-for-long-memory-cells?u=76281980&t=182)** This leads to overall poor performance of your RNN model, long training times, and in general, the model that you get won't be a very good one.
>
> **[3:11](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-need-for-long-memory-cells?u=76281980&t=191)** If the memory capacity of your RNN cell isn't very high, well, you have other problems.
>
> **[3:16](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-need-for-long-memory-cells?u=76281980&t=196)** Very long sequences may result in your RNN forgetting earlier parts of the input.
>
> **[3:22](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-need-for-long-memory-cells?u=76281980&t=202)** Let's take a very simple example.
>
> **[3:24](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-need-for-long-memory-cells?u=76281980&t=204)** Let's consider this little bit of text.
>
> **[3:25](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-need-for-long-memory-cells?u=76281980&t=205)** "I just love sushi at this restaurant".
>
> **[3:28](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-need-for-long-memory-cells?u=76281980&t=208)** Now, if this is a review, is this a positive or negative review?
>
> **[3:31](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-need-for-long-memory-cells?u=76281980&t=211)** Well, for a short sentence, it's super easy.
>
> **[3:35](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-need-for-long-memory-cells?u=76281980&t=215)** Finding the important word is simple when the sequence is short.
>
> **[3:39](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-need-for-long-memory-cells?u=76281980&t=219)** Your RNN, while processing this text one word at a time, just needs to look back a little way into the text to find the right word to determine the sentiment of this text.
>
> **[3:51](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-need-for-long-memory-cells?u=76281980&t=231)** But consider a slightly different example.
>
> **[3:53](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-need-for-long-memory-cells?u=76281980&t=233)** You have a much longer piece of text that is a much longer sequence, and you are asked whether this is a positive or negative review.
>
> **[4:01](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-need-for-long-memory-cells?u=76281980&t=241)** Remember, you feed the input text into the RNN one word at a time.
>
> **[4:06](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-need-for-long-memory-cells?u=76281980&t=246)** Observe that the same information is available as in the previous short sequence, but at the very beginning of this long sequence.
>
> **[4:15](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-need-for-long-memory-cells?u=76281980&t=255)** Now, by the time the RNN processes every word in the sequence and gets to the very end it's likely to have forgotten what the review said at the very beginning, which means that it's quite possible that the RNN has forgotten that this is a positive review and this is why long memory cells are so important.
>
> **[4:35](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-need-for-long-memory-cells?u=76281980&t=275)** Long memory cells in recurrent neural networks allow RNNs to remember important details from the past and in general, improve the performance of your recurrent neural networks.
>
> **[4:48](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-need-for-long-memory-cells?u=76281980&t=288)** Now, there are several different kinds of strong memory cells.
>
> **[4:51](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-need-for-long-memory-cells?u=76281980&t=291)** The two most popular ones are LSTM, or long short-term memory, and the GRU, or the gated recurrent unit.

> [!info]- Semantic Content
>
> **Env Vars:** rnn (10), lstm (1), gru (1)
> **Definitions:** is a  (4), means that (1)
> **Code Keywords:** let (2), function (1), super (1)
> **CLI Commands:** find (1)
> **Speakers:** - rnn (1)

#### LSTM and GRU cells
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/lstm-and-gru-cells?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/lstm-and-gru-cells?u=76281980&t=1)** - [Instructor] In the previous video, we discussed that the performance of your recurrent neural network can be greatly improved by using long memory cells.
>
> **[0:08](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/lstm-and-gru-cells?u=76281980&t=8)** And we just quickly mentioned the LSTM or long short-term memory and the GRU or gated recurrent unit as popular long memory cells used in RNS.
>
> **[0:20](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/lstm-and-gru-cells?u=76281980&t=20)** Now, in this video, let's understand how these work, starting off with the LSTM.
>
> **[0:25](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/lstm-and-gru-cells?u=76281980&t=25)** The key thing about these long memory cells is that these cells hold additional state within them.
>
> **[0:33](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/lstm-and-gru-cells?u=76281980&t=33)** For example, LSTM cells hold additional memory that allows them to keep track of important information that went by in the past.
>
> **[0:43](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/lstm-and-gru-cells?u=76281980&t=43)** LSTM cells also have the capacity to forget unimportant information so that the cell state is not overloaded with irrelevant details.
>
> **[0:53](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/lstm-and-gru-cells?u=76281980&t=53)** Each time a new input from the input sequence is presented to the cell, this new input is considered in addition to all of the existing information that the cell already remembers and this new input and the existing information are weighed against one another, and the cell makes the decision as to what parts to remember and what parts to forget.
>
> **[1:19](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/lstm-and-gru-cells?u=76281980&t=79)** Let's see a quick overview of how the long short term memory or LSTM cell is set up.
>
> **[1:25](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/lstm-and-gru-cells?u=76281980&t=85)** The information available to the LSTM cell at any point in time is processed using a number of different gates.
>
> **[1:32](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/lstm-and-gru-cells?u=76281980&t=92)** Each of these gates can be thought of as neural networks of their own.
>
> **[1:36](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/lstm-and-gru-cells?u=76281980&t=96)** Each gate plays a different role in helping the cell figure out what information to remember and what to forget.
>
> **[1:44](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/lstm-and-gru-cells?u=76281980&t=104)** Let's consider them in turn.
>
> **[1:45](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/lstm-and-gru-cells?u=76281980&t=105)** We have the forget gate here.
>
> **[1:47](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/lstm-and-gru-cells?u=76281980&t=107)** The forget gate is responsible for deciding what information should be kept with the cell and what information should be forgotten or thrown away.
>
> **[1:57](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/lstm-and-gru-cells?u=76281980&t=117)** The forget gate looks at two bits of information to make its decision.
>
> **[2:00](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/lstm-and-gru-cells?u=76281980&t=120)** It uses the previous hidden state of the cell and the input at the current time instance to the cell.
>
> **[2:08](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/lstm-and-gru-cells?u=76281980&t=128)** The forget gate will output values to decide what to keep and what to throw away.
>
> **[2:13](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/lstm-and-gru-cells?u=76281980&t=133)** Values close to zero means information should be forgotten.
>
> **[2:16](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/lstm-and-gru-cells?u=76281980&t=136)** Values close to one indicate that information is important and should be preserved.
>
> **[2:22](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/lstm-and-gru-cells?u=76281980&t=142)** Next, we have the input gate.
>
> **[2:23](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/lstm-and-gru-cells?u=76281980&t=143)** The input gate is used to add new information to the cell at the current time instance.
>
> **[2:30](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/lstm-and-gru-cells?u=76281980&t=150)** At each time period, a new part of the input sequence will be available, and the input gate determines how important that is.
>
> **[2:38](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/lstm-and-gru-cells?u=76281980&t=158)** The new input is combined with the previous hidden state.
>
> **[2:43](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/lstm-and-gru-cells?u=76281980&t=163)** Once again, the input gate uses zero and one values to determine what to throw away and what to keep.
>
> **[2:49](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/lstm-and-gru-cells?u=76281980&t=169)** Values close to zero meaning irrelevant information.
>
> **[2:52](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/lstm-and-gru-cells?u=76281980&t=172)** Values close to one means important information that has to be remembered.
>
> **[2:57](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/lstm-and-gru-cells?u=76281980&t=177)** The forget gate and the input gate acting together produce the cell state of this long short term memory cell.
>
> **[3:05](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/lstm-and-gru-cells?u=76281980&t=185)** We also have this output gate.
>
> **[3:08](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/lstm-and-gru-cells?u=76281980&t=188)** The output gate is responsible for figuring out what the new hidden state of the cell should be and this new hidden state is then what is carried over to the next time instance.
>
> **[3:21](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/lstm-and-gru-cells?u=76281980&t=201)** And a combination of all of these gates and the additional cell state allows LSTM cells to remember important details from the past and forget irrelevant details from the past.
>
> **[3:34](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/lstm-and-gru-cells?u=76281980&t=214)** Having understood how the LSTM functions we can turn our attention to the GRU or the gated recurrent unit.
>
> **[3:41](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/lstm-and-gru-cells?u=76281980&t=221)** Now, the GRU cell is just a newer generation of the LSTM cell, and it has much of the same functionality.
>
> **[3:48](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/lstm-and-gru-cells?u=76281980&t=228)** It's built using the same underlying idea.
>
> **[3:51](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/lstm-and-gru-cells?u=76281980&t=231)** You use gates to remember important details and forget unimportant details.
>
> **[3:57](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/lstm-and-gru-cells?u=76281980&t=237)** A major advantage of the GRU cell tends to be that it uses fewer gates as compared to the basic LSTM cell.
>
> **[4:05](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/lstm-and-gru-cells?u=76281980&t=245)** Because there are fewer gates, there are fewer tensor operations to perform during the training of your neural network.
>
> **[4:10](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/lstm-and-gru-cells?u=76281980&t=250)** So GRU cells tend to be faster to train.
>
> **[4:14](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/lstm-and-gru-cells?u=76281980&t=254)** Now whether GRU cells are better than LSTM?
>
> **[4:17](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/lstm-and-gru-cells?u=76281980&t=257)** Well, that's hard to say.
>
> **[4:18](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/lstm-and-gru-cells?u=76281980&t=258)** That really depends on your specific use case.
>
> **[4:22](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/lstm-and-gru-cells?u=76281980&t=262)** Here is an overview of what a GRU cell looks like.
>
> **[4:26](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/lstm-and-gru-cells?u=76281980&t=266)** You can immediately see that it's far simpler than the corresponding LSTM cell.
>
> **[4:31](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/lstm-and-gru-cells?u=76281980&t=271)** We have an update gate here.
>
> **[4:32](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/lstm-and-gru-cells?u=76281980&t=272)** The update gate is similar to the forget gate and input gate for the LSTM.
>
> **[4:38](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/lstm-and-gru-cells?u=76281980&t=278)** This gate looks at the new input available at that time instance and then decides what information to keep and what information to throw away.
>
> **[4:47](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/lstm-and-gru-cells?u=76281980&t=287)** Another gate that's here is the reset gate and the reset gate is used to determine how much or what part of the past information should be forgotten.
>
> **[4:59](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/lstm-and-gru-cells?u=76281980&t=299)** This is the GRU cell, a simpler version of the LSTM.

> [!info]- Semantic Content
>
> **Env Vars:** lstm (14), gru (8), rns (1)
> **Code Keywords:** let (3), throw (3), case. (1)
> **Cross-References:** previous video (1), we discussed (1)
> **Analogies:** for example (1), similar to (1)
> **CLI Commands:** make (1)
> **Definitions:** is an  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Types of RRNNS
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/types-of-rrnns?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/types-of-rrnns?u=76281980&t=1)** - [Instructor] Now that we've understood recurrent neural networks, we are closer to discussing attention based models, but there are a few details to cover before that.
>
> **[0:08](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/types-of-rrnns?u=76281980&t=8)** The first of these are the different types of RNN's, now, RNN's can be categorized based on whether they accept vectors or sequences as input and whether they generate vectors or sequences as output.
>
> **[0:22](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/types-of-rrnns?u=76281980&t=22)** This results in four categories, we have Vector in, Vector out RNNs, we have RNNs that take in a Vector and produce a Sequence, we have RNNs which take in a Sequence and produce a Vector and finally we have RNNs that take in a Sequence and generate a Sequence at the output.
>
> **[0:40](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/types-of-rrnns?u=76281980&t=40)** Now, if your RNN is not really dealing with sequences it's just a simple feed forward neural network because it does not have input over time periods or time instances.
>
> **[0:53](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/types-of-rrnns?u=76281980&t=53)** Vector in Sequence out, these are RNNs, this is where you start with a single input and generate a sequence.
>
> **[1:01](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/types-of-rrnns?u=76281980&t=61)** An example of a Vector in Sequence out model is a text generation model, a text generation model, you might feed in the first word of a sentence and get the remaining words of the sequence.
>
> **[1:13](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/types-of-rrnns?u=76281980&t=73)** So this is the vector input, exactly one word that is the start of a sentence, the vector input is used to generate the next word in the sequence, the next word is then fed in as an input for the next layer, which generates the third word which is then fed into the next layer which generates the fourth word till we get a sequence at the output.
>
> **[1:35](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/types-of-rrnns?u=76281980&t=95)** A Vector in Sequence out RNN is also referred to as a One to Many RNN.
>
> **[1:42](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/types-of-rrnns?u=76281980&t=102)** The next type of RNN is a Sequence in Vector out RNN, you start with a sequence and generate a single output for that entire sequence and an example of such a model is something that we would use for sentiment analysis.
>
> **[1:57](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/types-of-rrnns?u=76281980&t=117)** Sentiment analysis models accept the entire sequence of X at their input, so you'll feed in one word at a time so that the ordering of the word is also considered and at the output, the final output will be a sentiment, positive or negative.
>
> **[2:14](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/types-of-rrnns?u=76281980&t=134)** Even though you might get an output at all of the intermediate steps or layers of the RNN, you only consider the output at the last time instance, that is the final prediction.
>
> **[2:26](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/types-of-rrnns?u=76281980&t=146)** Sequence in Vector Out models are also referred to as Many to One RNNs.
>
> **[2:32](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/types-of-rrnns?u=76281980&t=152)** And finally, we have the last type of RNN, this is the kind that we'll be working with, sequence to sequence models, you start with the sequence and use that to generate another sequence at the output.
>
> **[2:44](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/types-of-rrnns?u=76281980&t=164)** There are different kinds of sequence to sequence models depending on what you are trying to predict, for example, if you have a model that identifies Parts of Speech, such a model has an equal length output for a particular input.
>
> **[3:01](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/types-of-rrnns?u=76281980&t=181)** The length of the output is always equal to the length of the input in such a sequence to sequence model.
>
> **[3:06](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/types-of-rrnns?u=76281980&t=186)** However, Language Translation Models, which are also sequence to sequence models work a little differently, this is because the length of the input in a certain language may not match the length of the corresponding output.
>
> **[3:21](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/types-of-rrnns?u=76281980&t=201)** Language Translation models are also sequence to sequence models.
>
> **[3:25](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/types-of-rrnns?u=76281980&t=205)** Now, why was it important to know these different types of RNNs?
>
> **[3:29](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/types-of-rrnns?u=76281980&t=209)** When you work with attention based models, attention is generally used to improve the performance of sequence to sequence models.

> [!info]- Semantic Content
>
> **Env Vars:** rnn (9)
> **Definitions:** is a  (2)
> **Code Keywords:** finally, (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 2. Encoder-Decoder Networks for Language Models

#### Language generation models
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/language-generation-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/language-generation-models?u=76281980&t=1)** - [Instructor] In this video, we'll get a quick overview of how sequence to sequence models work for language generation.
>
> **[0:07](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/language-generation-models?u=76281980&t=7)** The principles and structure that we'll discuss for the recurrent neural network here are just general principles for language generation models.
>
> **[0:15](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/language-generation-models?u=76281980&t=15)** We'll specifically discuss language translation models in the next video.
>
> **[0:20](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/language-generation-models?u=76281980&t=20)** Now, language generation models.
>
> **[0:22](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/language-generation-models?u=76281980&t=22)** The input is a sequence of words.
>
> **[0:24](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/language-generation-models?u=76281980&t=24)** The output is a sequence of words.
>
> **[0:27](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/language-generation-models?u=76281980&t=27)** The word that is generated at some time instance t-1 is fed as an input to get the next word in the sequence at time t.
>
> **[0:36](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/language-generation-models?u=76281980&t=36)** You'll find that this is a pretty standard set up for any language generation model.
>
> **[0:41](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/language-generation-models?u=76281980&t=41)** Because sentences are sequences, you can use the word at the current time instance to predict the word at the next time instance.
>
> **[0:50](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/language-generation-models?u=76281980&t=50)** Here is an architectural overview of what a language generation model might look like.
>
> **[0:56](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/language-generation-models?u=76281980&t=56)** Now, this is an unrolled RNN where we are feeding in different words as input at different time instances.
>
> **[1:05](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/language-generation-models?u=76281980&t=65)** Neural networks only understand numeric input, which means your input words have to be converted to numeric form.
>
> **[1:12](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/language-generation-models?u=76281980&t=72)** And the most common representation for input words is one-hot encoding.
>
> **[1:17](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/language-generation-models?u=76281980&t=77)** So the words input to the RNN at different time instances are one-hot vectors.
>
> **[1:23](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/language-generation-models?u=76281980&t=83)** The dimensionality or the size of this one-hot vector depends of course on the size of your vocabulary.
>
> **[1:30](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/language-generation-models?u=76281980&t=90)** It's common practice in an RNN to have an additional embedding layer that accepts one-hot vector representations of words and converts each word to an embedding a lower dimensionality representation.
>
> **[1:44](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/language-generation-models?u=76281980&t=104)** The weights of the embedding layer is also trained during the training of the RNN.
>
> **[1:49](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/language-generation-models?u=76281980&t=109)** The individual words in the sequence are input to the RNN cell, which is then unrolled through time.
>
> **[1:55](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/language-generation-models?u=76281980&t=115)** The number of layers in the RNN is equal to the number of elements that we have in the input sequence.
>
> **[2:02](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/language-generation-models?u=76281980&t=122)** So if the input sequence has 20 words, that's the length of your sentence, your RNN will have 20 layers.
>
> **[2:09](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/language-generation-models?u=76281980&t=129)** Typically, the first word in the input sequence is used to get a prediction that is the second word of the sequence.
>
> **[2:16](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/language-generation-models?u=76281980&t=136)** Next, we have the second word in the sequence used to predict the third word of the sequence.
>
> **[2:22](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/language-generation-models?u=76281980&t=142)** Observe how the hidden state of the RNN is fed through to the next layer.
>
> **[2:28](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/language-generation-models?u=76281980&t=148)** Because of the sequential nature of sentences and the feeding of this hidden state from one layer to the other, the output at each time step depends on all of the words that have been seen so far in the input sequence.
>
> **[2:42](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/language-generation-models?u=76281980&t=162)** What the RNN outputs at every time step, that is any Y that you see here in this diagram, is actually a probability distribution over all of the words in the output vocabulary.
>
> **[2:55](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/language-generation-models?u=76281980&t=175)** And this probability distribution gives us the likelihood of what the next predicted word might be.
>
> **[3:02](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/language-generation-models?u=76281980&t=182)** Each input that you feed in at a time step produces an output probability distribution over all possible words from the vocabulary.
>
> **[3:12](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/language-generation-models?u=76281980&t=192)** Of all of the words in the vocabulary, what is the most likely word at this time step?
>
> **[3:19](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/language-generation-models?u=76281980&t=199)** This probability distribution depends on all of the words in the sequence seen so far.
>
> **[3:25](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/language-generation-models?u=76281980&t=205)** So the probability of a particular word at the output depends on all of the words seen so far in the sequence.
>
> **[3:33](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/language-generation-models?u=76281980&t=213)** Given all of the words seen so far, what is the most likely next word in the vocabulary?
>
> **[3:42](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/language-generation-models?u=76281980&t=222)** Here, V of i is the ith word in the vocabulary generated at time instance t.
>
> **[3:51](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/language-generation-models?u=76281980&t=231)** So how do you train a language generation model?
>
> **[3:53](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/language-generation-models?u=76281980&t=233)** At every step, the output is a probability distribution over the words in the vocabulary.
>
> **[3:59](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/language-generation-models?u=76281980&t=239)** You compare the word generated by the model with the actual next word in the sequence.
>
> **[4:06](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/language-generation-models?u=76281980&t=246)** That is part of your training data.
>
> **[4:08](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/language-generation-models?u=76281980&t=248)** You typically use a loss function, such as the cross-entropy loss function that allows us to compute the divergence between the word predicted by our model and the actual word from the training data.
>
> **[4:21](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/language-generation-models?u=76281980&t=261)** So at any point in time, we are trying to predict the next word in the sequence.
>
> **[4:26](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/language-generation-models?u=76281980&t=266)** In order to generate the sequence using the model, let's say we've seen three words so far, and then we have the output here at time instance four.
>
> **[4:34](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/language-generation-models?u=76281980&t=274)** We know that the output at every time step is a probability distribution over all possible words in the vocabulary.
>
> **[4:42](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/language-generation-models?u=76281980&t=282)** We look at the probability distribution and pick the word that is most likely at this particular time step t.
>
> **[4:50](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/language-generation-models?u=76281980&t=290)** Now that we have a word, let's say that's Y4, that is then fed back to the next layer of the RNN as an input and used to generate the next word in the sequence.
>
> **[5:01](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/language-generation-models?u=76281980&t=301)** And this continues till we generate all words in the sentence.

> [!info]- Semantic Content
>
> **Env Vars:** rnn (10)
> **Definitions:** is a  (5), is an  (2)
> **Code Keywords:** function (2), let (2)
> **CLI Commands:** find (1)
> **Cross-References:** in the next (1)
> **Analogies:** such as (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Sequence to sequence models for language translation
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/sequence-to-sequence-models-for-language-translation?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/sequence-to-sequence-models-for-language-translation?u=76281980&t=1)** - Now that we have a big picture idea of how language generation models work, let's understand how language translation models work.
>
> **[0:08](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/sequence-to-sequence-models-for-language-translation?u=76281980&t=8)** These are sequence to sequence models.
>
> **[0:11](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/sequence-to-sequence-models-for-language-translation?u=76281980&t=11)** Let's assume we have a simple language translation model to translate from English to German.
>
> **[0:16](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/sequence-to-sequence-models-for-language-translation?u=76281980&t=16)** So if you feed an I ate an apple you'll get the equivalent sentence in German.
>
> **[0:21](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/sequence-to-sequence-models-for-language-translation?u=76281980&t=21)** Please forgive me if I don't try to pronounce the German sentence.
>
> **[0:25](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/sequence-to-sequence-models-for-language-translation?u=76281980&t=25)** I'll just fail miserably.
>
> **[0:26](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/sequence-to-sequence-models-for-language-translation?u=76281980&t=26)** Now, language translation models are sequence to sequence models, and the model structure uses two different networks.
>
> **[0:34](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/sequence-to-sequence-models-for-language-translation?u=76281980&t=34)** The first network is an encoder, and the second network is a decoder.
>
> **[0:39](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/sequence-to-sequence-models-for-language-translation?u=76281980&t=39)** Because the encoder takes in the sentence in the original language as an input, The encoder is an RNN.
>
> **[0:46](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/sequence-to-sequence-models-for-language-translation?u=76281980&t=46)** The decoder produces a sentence in the target language as an output.
>
> **[0:50](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/sequence-to-sequence-models-for-language-translation?u=76281980&t=50)** The decoder is also an RNN.
>
> **[0:53](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/sequence-to-sequence-models-for-language-translation?u=76281980&t=53)** The encoder works on the sequential input in the source language.
>
> **[0:57](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/sequence-to-sequence-models-for-language-translation?u=76281980&t=57)** Decoder produces sequential output in the target language.
>
> **[1:00](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/sequence-to-sequence-models-for-language-translation?u=76281980&t=60)** Now the job of the encoder is to read in the sentence in the source language and capture the entire sentence in the form of a representation, so the end coder learns a representation of the input.
>
> **[1:15](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/sequence-to-sequence-models-for-language-translation?u=76281980&t=75)** Let's zoom into the encoder RNN here.
>
> **[1:18](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/sequence-to-sequence-models-for-language-translation?u=76281980&t=78)** Because it's a recurrent neural network, and it's operating on the sequence, a single word from the source language is fed in at each time instance.
>
> **[1:27](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/sequence-to-sequence-models-for-language-translation?u=76281980&t=87)** This is the sequence of the input sentence fed into the encoder recurrent neural network.
>
> **[1:33](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/sequence-to-sequence-models-for-language-translation?u=76281980&t=93)** Usually you use a special token, such as, the end of sentence token to indicate that the sentence has ended or has been terminated.
>
> **[1:42](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/sequence-to-sequence-models-for-language-translation?u=76281980&t=102)** The last hidden state output of the encoder R.N.N.
>
> **[1:47](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/sequence-to-sequence-models-for-language-translation?u=76281980&t=107)** captures the entire information about the input sequence.
>
> **[1:51](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/sequence-to-sequence-models-for-language-translation?u=76281980&t=111)** so all of the details of the input sequence is embedded within this hidden state.
>
> **[1:57](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/sequence-to-sequence-models-for-language-translation?u=76281980&t=117)** This hidden state output of the encoder that captures the essence of the entire input sentence is what is fed into the second recurrent network that is the decoder, which is responsible for generating the translated sentence.
>
> **[2:14](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/sequence-to-sequence-models-for-language-translation?u=76281980&t=134)** So zooming out to our original diagram here the hidden state output of the encoder is fed into the decoder RNN.
>
> **[2:23](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/sequence-to-sequence-models-for-language-translation?u=76281980&t=143)** The decoder RNN then uses this hidden state to start generating the words in the translated language that is the target language.
>
> **[2:33](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/sequence-to-sequence-models-for-language-translation?u=76281980&t=153)** The decoder is also a recurrent neural network which means it produces or generates one word for each time instance.
>
> **[2:42](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/sequence-to-sequence-models-for-language-translation?u=76281980&t=162)** Now the output at single time instance is then an input to the next time instance during the generation of the translated sentence.
>
> **[2:53](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/sequence-to-sequence-models-for-language-translation?u=76281980&t=173)** So the output produced at time T minus one is the input at time P, along with the hidden state of the decoder at time T minus one.
>
> **[3:03](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/sequence-to-sequence-models-for-language-translation?u=76281980&t=183)** The translated sentence is generated till your decoder RNN producers and US token that indicates the end of sentence.
>
> **[3:13](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/sequence-to-sequence-models-for-language-translation?u=76281980&t=193)** So starting with the hidden state at the encoder output which captures the information of the entire input sentence the decoder generates the translator sentence one word at a time.
>
> **[3:25](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/sequence-to-sequence-models-for-language-translation?u=76281980&t=205)** As in the case of language models, the standard practice is to represent the input words using one hot vectors.
>
> **[3:33](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/sequence-to-sequence-models-for-language-translation?u=76281980&t=213)** These one hot vectors are then converted to embeddings, that is lower dimensionality representations.
>
> **[3:39](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/sequence-to-sequence-models-for-language-translation?u=76281980&t=219)** The embedding layer is a trainable layer and embeddings are learned as the neural network is trained.
>
> **[3:45](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/sequence-to-sequence-models-for-language-translation?u=76281980&t=225)** The output produced by the decoder is also in the form of embeddings, which are then converted to one hot vector representations of words.
>
> **[3:55](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/sequence-to-sequence-models-for-language-translation?u=76281980&t=235)** As we discussed in the previous video when we spoke of language generation models, the output at each time instance is not a word.
>
> **[4:03](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/sequence-to-sequence-models-for-language-translation?u=76281980&t=243)** It's actually a probability distribution over all the words in the target vocabulary.
>
> **[4:09](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/sequence-to-sequence-models-for-language-translation?u=76281980&t=249)** In order to train this encoder decoder network, we compute the loss using a loss function such as the cross entropy loss that we compute the divergence between the actual word in the training data and the word generated by our model.
>
> **[4:25](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/sequence-to-sequence-models-for-language-translation?u=76281980&t=265)** Once training is complete, during prediction, when we actually producing the translation, we'll always use the previous word in the generated sequence to produce the next word.

> [!info]- Semantic Content
>
> **Env Vars:** rnn (6)
> **Code Keywords:** let (3), function (1)
> **Definitions:** is an  (2), is a  (2)
> **Analogies:** such as (2), picture (1)
> **Cross-References:** we discussed (1), previous video (1)
> **Speakers:** - now (1)


### 3. Attention-Based Neural Networks

#### The role of attention in sequence to sequence models
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-role-of-attention-in-sequence-to-sequence-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-role-of-attention-in-sequence-to-sequence-models?u=76281980&t=1)** - Attention plays a very important role in sequence to sequence models and it can greatly improve their performance.
>
> **[0:08](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-role-of-attention-in-sequence-to-sequence-models?u=76281980&t=8)** Now why is that?
>
> **[0:09](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-role-of-attention-in-sequence-to-sequence-models?u=76281980&t=9)** Well, let's take a look at our language encoder, decoder model, our sequence to sequence model, and see if you can figure out what's wrong with this particular framework.
>
> **[0:19](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-role-of-attention-in-sequence-to-sequence-models?u=76281980&t=19)** Essentially, we have a single hidden state, the output at time step t, which is supposed to represent the entire input sentence.
>
> **[0:29](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-role-of-attention-in-sequence-to-sequence-models?u=76281980&t=29)** The hidden state is a single vector, the output of the last encoder RNN layer, and it's supposed to represent the entire sentence so it's a very compressed representation.
>
> **[0:40](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-role-of-attention-in-sequence-to-sequence-models?u=76281980&t=40)** So all of the complexities of the input sentence is embedded into this single hidden state.
>
> **[0:46](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-role-of-attention-in-sequence-to-sequence-models?u=76281980&t=46)** If you're only working with very short sentences, this may not be a problem, but as you work with longer sequences, more complex sentences, a single vector is unlikely to be able to hold all of the information in the input sentence.
>
> **[1:01](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-role-of-attention-in-sequence-to-sequence-models?u=76281980&t=61)** Especially in the input sequences very, very long.
>
> **[1:04](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-role-of-attention-in-sequence-to-sequence-models?u=76281980&t=64)** And this will result in information overload.
>
> **[1:07](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-role-of-attention-in-sequence-to-sequence-models?u=76281980&t=67)** This hidden state becomes some kind of bottleneck.
>
> **[1:10](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-role-of-attention-in-sequence-to-sequence-models?u=76281980&t=70)** Let's say you wanted to translate this really long sentence from Stuart Little.
>
> **[1:15](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-role-of-attention-in-sequence-to-sequence-models?u=76281980&t=75)** Well, that will cause an information overload in the hidden state.
>
> **[1:19](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-role-of-attention-in-sequence-to-sequence-models?u=76281980&t=79)** If you have very long sentences for translation, the word generated in the target language might reference something very far back in time in the source language.
>
> **[1:32](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-role-of-attention-in-sequence-to-sequence-models?u=76281980&t=92)** The question then is will the hidden state remember the beginning of the original sentence in order to provide the right translation at the end of the output sentence?
>
> **[1:40](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-role-of-attention-in-sequence-to-sequence-models?u=76281980&t=100)** Maybe unlikely.
>
> **[1:42](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-role-of-attention-in-sequence-to-sequence-models?u=76281980&t=102)** Now, language translation models are often evaluated using a metric called the Bleu Score, the bilingual evaluation understudy, it's a score for comparing a candidate translation of text to one or more reference translations.
>
> **[1:57](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-role-of-attention-in-sequence-to-sequence-models?u=76281980&t=117)** The expectation for a language translation model is that as the sentences get longer, the translations get better and they level off at some high level.
>
> **[2:08](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-role-of-attention-in-sequence-to-sequence-models?u=76281980&t=128)** But what researchers found was the score for sentences tends to fall drastically as sentences get longer, and that's because of our hidden state bottleneck.
>
> **[2:20](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-role-of-attention-in-sequence-to-sequence-models?u=76281980&t=140)** Now, let's think about the information that we have and the information that we actually use.
>
> **[2:25](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-role-of-attention-in-sequence-to-sequence-models?u=76281980&t=145)** In fact, all of the hidden values generated in the encoder network are meaningful and they contain information.
>
> **[2:34](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-role-of-attention-in-sequence-to-sequence-models?u=76281980&t=154)** All of these hidden values contain important information.
>
> **[2:37](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-role-of-attention-in-sequence-to-sequence-models?u=76281980&t=157)** We have them right there.
>
> **[2:38](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-role-of-attention-in-sequence-to-sequence-models?u=76281980&t=158)** Then why are we not using them?
>
> **[2:41](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-role-of-attention-in-sequence-to-sequence-models?u=76281980&t=161)** Another thing that we've seen in language translation is that different hidden values may have different relationships to different parts of the output.
>
> **[2:51](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-role-of-attention-in-sequence-to-sequence-models?u=76281980&t=171)** Let's say we are trying to produce a translation for the word apple.
>
> **[2:54](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-role-of-attention-in-sequence-to-sequence-models?u=76281980&t=174)** Then the word apple from the input sequence will have the most information for the corresponding translation.
>
> **[3:02](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-role-of-attention-in-sequence-to-sequence-models?u=76281980&t=182)** The hidden states for the other words, "I ate an", are less relevant.
>
> **[3:08](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-role-of-attention-in-sequence-to-sequence-models?u=76281980&t=188)** The same is true, for say, translating "ate".
>
> **[3:11](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-role-of-attention-in-sequence-to-sequence-models?u=76281980&t=191)** This roughly maps to two words in the German output which means while producing those two words at the output the decoder should pay special attention to the hidden state for the word "ate".
>
> **[3:22](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-role-of-attention-in-sequence-to-sequence-models?u=76281980&t=202)** And this is exactly why attention is needed.
>
> **[3:25](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-role-of-attention-in-sequence-to-sequence-models?u=76281980&t=205)** We know that all hidden values in the encoder contain information.
>
> **[3:30](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-role-of-attention-in-sequence-to-sequence-models?u=76281980&t=210)** Now, if you just have a single hidden state to represent the entire input, that dilutes the information that is passed on to the decoder and this results in a worse model than you could build if you use attention.
>
> **[3:45](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-role-of-attention-in-sequence-to-sequence-models?u=76281980&t=225)** Now, we know that different parts of the input affect different parts of the output but we may not know this upfront.
>
> **[3:52](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-role-of-attention-in-sequence-to-sequence-models?u=76281980&t=232)** We don't know which part of the input sequence affects which part of the output sequence.
>
> **[3:57](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-role-of-attention-in-sequence-to-sequence-models?u=76281980&t=237)** Especially in language translation, the sequence of the words that the input may not match the same sequence at the output because the structure of languages is often different.
>
> **[4:09](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-role-of-attention-in-sequence-to-sequence-models?u=76281980&t=249)** Now, a naive approach to improving the performance of this model might be to say connect all of the inputs to all outputs.
>
> **[4:16](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-role-of-attention-in-sequence-to-sequence-models?u=76281980&t=256)** But this does not work well in practice because your model then ends up being overparameterized and it's hard for the decoder to pay attention to everything.
>
> **[4:27](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-role-of-attention-in-sequence-to-sequence-models?u=76281980&t=267)** Connecting up everything essentially tells the decoder everything is important.
>
> **[4:31](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-role-of-attention-in-sequence-to-sequence-models?u=76281980&t=271)** It also ignores the synchronous dependence of the output on the input.
>
> **[4:36](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-role-of-attention-in-sequence-to-sequence-models?u=76281980&t=276)** The fact that the input is a sequence which affects the output sequence.
>
> **[4:41](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-role-of-attention-in-sequence-to-sequence-models?u=76281980&t=281)** And this is exactly why attention models are needed.
>
> **[4:45](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-role-of-attention-in-sequence-to-sequence-models?u=76281980&t=285)** They help pay attention to relevant portions of the input at every time stamp in the output.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4)
> **Definitions:** is a  (2)
> **Env Vars:** rnn (1)
> **Speakers:** - attention (1)

#### Attention mechanism in sequence to sequence models
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-mechanism-in-sequence-to-sequence-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-mechanism-in-sequence-to-sequence-models?u=76281980&t=1)** - [Instructor] Now that we've understood the importance of attention, let's see how we can include attention models in sequence to sequence networks.
>
> **[0:09](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-mechanism-in-sequence-to-sequence-models?u=76281980&t=9)** Now here is the encoder and decoder network for language translation.
>
> **[0:13](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-mechanism-in-sequence-to-sequence-models?u=76281980&t=13)** Now, I've set it up a little differently so that we can clearly see where attention fits in.
>
> **[0:18](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-mechanism-in-sequence-to-sequence-models?u=76281980&t=18)** At the bottom here I have the encoder network.
>
> **[0:21](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-mechanism-in-sequence-to-sequence-models?u=76281980&t=21)** X1 through XT are the input to the encoder RNN at different time instances.
>
> **[0:27](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-mechanism-in-sequence-to-sequence-models?u=76281980&t=27)** These are the input words in the sequence.
>
> **[0:30](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-mechanism-in-sequence-to-sequence-models?u=76281980&t=30)** h1 through hT represent the hidden state of the encoder RNN.
>
> **[0:36](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-mechanism-in-sequence-to-sequence-models?u=76281980&t=36)** Again, at different time instances.
>
> **[0:39](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-mechanism-in-sequence-to-sequence-models?u=76281980&t=39)** You can think of h1 through hT as the hidden state for the individual words in the input sequence.
>
> **[0:45](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-mechanism-in-sequence-to-sequence-models?u=76281980&t=45)** Up here on top I've represented the decoder recurrent neural network.
>
> **[0:50](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-mechanism-in-sequence-to-sequence-models?u=76281980&t=50)** The output of the decoder at any time instance is yt, and you can see that the output at time instance t-1 is connected back into the input at time instance t.
>
> **[1:03](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-mechanism-in-sequence-to-sequence-models?u=76281980&t=63)** So y1 is connected to the second neuron, y2 is connected to the third neuron and this goes all the way through.
>
> **[1:13](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-mechanism-in-sequence-to-sequence-models?u=76281980&t=73)** S1 through SK represent the hidden states of the decoder network, and observe that the hidden states of the decoder layers are connected to one another.
>
> **[1:22](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-mechanism-in-sequence-to-sequence-models?u=76281980&t=82)** That is the hidden state at time instance t is fed into the decoder layer at the next time instance.
>
> **[1:28](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-mechanism-in-sequence-to-sequence-models?u=76281980&t=88)** In the original encoder-decoder model, the final hidden state of the encoder is fed as an input to the decoder to start the language translation process.
>
> **[1:40](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-mechanism-in-sequence-to-sequence-models?u=76281980&t=100)** This is what we highlighted as a bottle neck in the previous video.
>
> **[1:45](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-mechanism-in-sequence-to-sequence-models?u=76281980&t=105)** Now, what do a attention models do?
>
> **[1:47](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-mechanism-in-sequence-to-sequence-models?u=76281980&t=107)** Attention models create a shortcut mechanism that connects the context vector, Ct and the entire source input X.
>
> **[1:58](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-mechanism-in-sequence-to-sequence-models?u=76281980&t=118)** So you can see there is a direct connection from the hidden state of the encoder RNN layers through the context vector and through the decoder.
>
> **[2:08](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-mechanism-in-sequence-to-sequence-models?u=76281980&t=128)** The context vector here encapsulates the attention mechanism that forces the decoder to pay attention to the relevant portions of the input.
>
> **[2:18](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-mechanism-in-sequence-to-sequence-models?u=76281980&t=138)** Now, how does attention mechanism help this shortcut from the input to the decoder that produces the output ensures that each output of the decoder has access to the entire input sequence, not just a hidden state representation.
>
> **[2:35](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-mechanism-in-sequence-to-sequence-models?u=76281980&t=155)** The context vector enables the decoder to selectively pick out specific elements from the sequence to produce the output.
>
> **[2:43](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-mechanism-in-sequence-to-sequence-models?u=76281980&t=163)** So the decoder can specifically look at those portions of the input that are the most relevant at the current time step.
>
> **[2:51](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-mechanism-in-sequence-to-sequence-models?u=76281980&t=171)** Going back to our visualization here, here is the attention mechanism that allows the decoder to selectively look at the relevant portions of the input.
>
> **[3:00](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-mechanism-in-sequence-to-sequence-models?u=76281980&t=180)** Let's see how this attention mechanism works.
>
> **[3:03](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-mechanism-in-sequence-to-sequence-models?u=76281980&t=183)** A context factor is generated at every time instance and fed as an input to the decoder at each time instance.
>
> **[3:11](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-mechanism-in-sequence-to-sequence-models?u=76281980&t=191)** The context vector uses weights to determine which portions of the input sequence are important to generate the output at any time instance t.
>
> **[3:21](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-mechanism-in-sequence-to-sequence-models?u=76281980&t=201)** So it's pretty obvious that the context vector will be different for different time steps.
>
> **[3:27](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-mechanism-in-sequence-to-sequence-models?u=76281980&t=207)** At every time step to the decoder, the context vector serves as an additional input into the decoder layer.
>
> **[3:35](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-mechanism-in-sequence-to-sequence-models?u=76281980&t=215)** So along with all of the other inputs, we also pass in the context vector.
>
> **[3:40](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-mechanism-in-sequence-to-sequence-models?u=76281980&t=220)** That is the attention mechanism.
>
> **[3:42](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-mechanism-in-sequence-to-sequence-models?u=76281980&t=222)** You can see that the output of the decoder at each time step depends on three separate components.
>
> **[3:48](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-mechanism-in-sequence-to-sequence-models?u=76281980&t=228)** There are three separate inputs going into a decoder layer.
>
> **[3:53](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-mechanism-in-sequence-to-sequence-models?u=76281980&t=233)** Now, what are these three instances?
>
> **[3:55](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-mechanism-in-sequence-to-sequence-models?u=76281980&t=235)** The hidden state of the previous decoder layer, that is St-1.
>
> **[4:00](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-mechanism-in-sequence-to-sequence-models?u=76281980&t=240)** The word that was generated in the previous time instance, that is yt-11.
>
> **[4:06](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-mechanism-in-sequence-to-sequence-models?u=76281980&t=246)** And then we have this additional context vector Ct, which tells that decoder layer what portions of the input to pay attention to at this time step.
>
> **[4:17](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-mechanism-in-sequence-to-sequence-models?u=76281980&t=257)** So how do you get this context vector?
>
> **[4:19](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-mechanism-in-sequence-to-sequence-models?u=76281980&t=259)** It's computed using a weighted combination of the encoder hidden states.
>
> **[4:25](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-mechanism-in-sequence-to-sequence-models?u=76281980&t=265)** And the weight assigned to a particular hidden state indicates how important that hidden state is.
>
> **[4:31](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-mechanism-in-sequence-to-sequence-models?u=76281980&t=271)** These weights are referred to as alignment weights.
>
> **[4:34](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-mechanism-in-sequence-to-sequence-models?u=76281980&t=274)** Now, these alignment weights change at every time step.
>
> **[4:40](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-mechanism-in-sequence-to-sequence-models?u=76281980&t=280)** That is the weights assigned to the hidden states of the input vary over time.
>
> **[4:44](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-mechanism-in-sequence-to-sequence-models?u=76281980&t=284)** There are different weights at different time instances.
>
> **[4:49](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-mechanism-in-sequence-to-sequence-models?u=76281980&t=289)** The alignment weights represented by alpha are different at different steps in the sequence.
>
> **[4:56](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-mechanism-in-sequence-to-sequence-models?u=76281980&t=296)** The weights depend on the word that is to be predicted by the decoder RNN.
>
> **[5:02](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-mechanism-in-sequence-to-sequence-models?u=76281980&t=302)** The weights are automatically set up in such a manner that they highlight the most important input components for any part of the output at any time step.
>
> **[5:12](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-mechanism-in-sequence-to-sequence-models?u=76281980&t=312)** Here is a mathematical formulation for computing the context vector that is an input to the decoder at each time step.
>
> **[5:20](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-mechanism-in-sequence-to-sequence-models?u=76281980&t=320)** hJ here is the hidden state of the encoder for different inputs in the sequence.
>
> **[5:27](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-mechanism-in-sequence-to-sequence-models?u=76281980&t=327)** The hidden state corresponding to the different words in the input sentence.
>
> **[5:31](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-mechanism-in-sequence-to-sequence-models?u=76281980&t=331)** The hidden state does not change over time, which is why you don't see ht here in the subscript.
>
> **[5:37](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-mechanism-in-sequence-to-sequence-models?u=76281980&t=337)** Alpha here refers to the alignment weight vector.
>
> **[5:41](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-mechanism-in-sequence-to-sequence-models?u=76281980&t=341)** Now, the weight vector has weights for different inputs in the sequence, and the weight vector changes over time.
>
> **[5:47](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-mechanism-in-sequence-to-sequence-models?u=76281980&t=347)** That's why you see the t subscript.
>
> **[5:50](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-mechanism-in-sequence-to-sequence-models?u=76281980&t=350)** And because the weight vector changes over time, the context vector also changes over time.
>
> **[5:57](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-mechanism-in-sequence-to-sequence-models?u=76281980&t=357)** So weights will vary at different time instances, and the context vector will change accordingly.
>
> **[6:04](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-mechanism-in-sequence-to-sequence-models?u=76281980&t=364)** And finally, one last thing to note is, the sum of all of the alignment weights at any time instance will be equal to one.
>
> **[6:13](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-mechanism-in-sequence-to-sequence-models?u=76281980&t=373)** Think of these alignment weights as probabilities assigned to each input in the sequence, the probabilities have to sum to one.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), pass (1), finally, (1)
> **Env Vars:** rnn (4)
> **Definitions:** is a  (2), is an  (1), refers to (1)
> **Code Identifiers:** ht (2), hj (1)
> **Cross-References:** previous video (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Alignment weights in attention models
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/alignment-weights-in-attention-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/alignment-weights-in-attention-models?u=76281980&t=1)** - [Narrator] In this video, we'll discuss how these alignment weights are computed, and that will lead us to understanding how different kinds of attention models can be used in our sequence-to-sequence models.
>
> **[0:12](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/alignment-weights-in-attention-models?u=76281980&t=12)** At this point, hopefully you've already understood the role of these alignment weights in our attention mechanism.
>
> **[0:19](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/alignment-weights-in-attention-models?u=76281980&t=19)** The weights capture the relative importance of each position in the input to the current output, that is the output at a certain time step.
>
> **[0:29](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/alignment-weights-in-attention-models?u=76281980&t=29)** So now the question is, how exactly are these alignment weights computed?
>
> **[0:33](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/alignment-weights-in-attention-models?u=76281980&t=33)** In order to compute alignment weights, you first compute raw weights. And raw weights are computed using a scoring function which operates on the hidden state of the decoder and the encoder. This raw scoring function is what determines the kind of attention mechanism that you're using in your model.
>
> **[0:54](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/alignment-weights-in-attention-models?u=76281980&t=54)** Change the scoring function; you change the attention mechanism.
>
> **[0:57](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/alignment-weights-in-attention-models?u=76281980&t=57)** We'll briefly discuss a few different kinds of attention models at the end of this video, but you should know it's the attention model that generates these raw scores.
>
> **[1:06](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/alignment-weights-in-attention-models?u=76281980&t=66)** In order to convert these raw alignment scores to weighted probabilities, we pass the raw score through a soft max layer.
>
> **[1:17](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/alignment-weights-in-attention-models?u=76281980&t=77)** The actual weights assigned to each input in the sequence are computed using the soft max function.
>
> **[1:26](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/alignment-weights-in-attention-models?u=76281980&t=86)** The output of the soft max layer is a probability distribution, which gives us the importance of each input state.
>
> **[1:34](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/alignment-weights-in-attention-models?u=76281980&t=94)** Inputs that have higher probabilities at a certain time instance are more relevant to the output that is to be produced at that time instance.
>
> **[1:44](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/alignment-weights-in-attention-models?u=76281980&t=104)** The soft max function is applied to the raw scores that were computed using some kind of attention mechanisms.
>
> **[1:51](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/alignment-weights-in-attention-models?u=76281980&t=111)** Now, there are a number of different attention mechanisms that you could use. There is content-based attention, dot-product attention, scaled dot-product attention, location-based attention, and so on.
>
> **[2:04](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/alignment-weights-in-attention-models?u=76281980&t=124)** Each have their own formula for computing the raw scores.
>
> **[2:08](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/alignment-weights-in-attention-models?u=76281980&t=128)** Now the kind of attention that we are going be using, later on when we build and train an image captioning model, is this additive attention, also called Bahdanau's attention, named after the person who originally researched and published this.

> [!info]- Semantic Content
>
> **Code Keywords:** function (5), pass (1), this. (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)

#### Bahdanau attention
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/bahdanau-attention?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/bahdanau-attention?u=76281980&t=1)** - [Narrator] Since our image captioning model, we'll use Bahdanau's Attention.
>
> **[0:05](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/bahdanau-attention?u=76281980&t=5)** Let's understand the mathematical formulation of this attention.
>
> **[0:09](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/bahdanau-attention?u=76281980&t=9)** This is additive attention.
>
> **[0:11](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/bahdanau-attention?u=76281980&t=11)** The raw score in Bahdanau's attention mode is computed using this formula.
>
> **[0:16](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/bahdanau-attention?u=76281980&t=16)** Now there is a lot going on here, but let's break this down.
>
> **[0:20](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/bahdanau-attention?u=76281980&t=20)** It's very straightforward.
>
> **[0:21](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/bahdanau-attention?u=76281980&t=21)** S of T minus one here refers to the hidden state of the decoder at time instance E minus one.
>
> **[0:29](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/bahdanau-attention?u=76281980&t=29)** This is an input to the attention model.
>
> **[0:32](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/bahdanau-attention?u=76281980&t=32)** Now another input to the attention model is the hidden state of the encoder.
>
> **[0:38](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/bahdanau-attention?u=76281980&t=38)** H J here is the hidden state for each element of the input sequence.
>
> **[0:42](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/bahdanau-attention?u=76281980&t=42)** This is fixed.
>
> **[0:44](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/bahdanau-attention?u=76281980&t=44)** Once we know the input sequence it does not change over time.
>
> **[0:47](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/bahdanau-attention?u=76281980&t=47)** Bahdanau's attention is addictive attention because you apply a weight vector to each of the hidden states the encoders and decode hidden state and then you add these weighted hidden states together.
>
> **[1:01](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/bahdanau-attention?u=76281980&t=61)** Once you've added the weighted hidden states, you pass that through a tanh function and the output of the tanh is then multiplied by another trainable vector.
>
> **[1:13](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/bahdanau-attention?u=76281980&t=73)** Let's understand Bahdanau's attention mechanism visually.
>
> **[1:17](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/bahdanau-attention?u=76281980&t=77)** Now we have the hidden states of both the encoder and the decoder and we pass both of these through separate weights layers.
>
> **[1:27](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/bahdanau-attention?u=76281980&t=87)** So we have two different weights layers, W decoder, which acts on the decoder hidden state.
>
> **[1:34](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/bahdanau-attention?u=76281980&t=94)** W N coder that acts on the encoder hidden state.
>
> **[1:38](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/bahdanau-attention?u=76281980&t=98)** The result is the weighted output of the encoder and decodor hidden state.
>
> **[1:45](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/bahdanau-attention?u=76281980&t=105)** That's within the brackets of our formula.
>
> **[1:47](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/bahdanau-attention?u=76281980&t=107)** Now this weighted output is then added together and passed through a tanh function.
>
> **[1:53](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/bahdanau-attention?u=76281980&t=113)** The output of the tanh function is then multiplied by a trainable weight vector.
>
> **[1:58](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/bahdanau-attention?u=76281980&t=118)** A weight vector whose weights are found during the training process.
>
> **[2:03](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/bahdanau-attention?u=76281980&t=123)** And the result of this multiplication gives us the alignment scores.
>
> **[2:08](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/bahdanau-attention?u=76281980&t=128)** These are the raw alignment scores.
>
> **[2:10](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/bahdanau-attention?u=76281980&t=130)** Once we have the raw scores from our additive model, we can pass these raw scores through a soft max function to get alignment weights in terms of probabilities.
>
> **[2:21](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/bahdanau-attention?u=76281980&t=141)** These probability weights are the attention weights.
>
> **[2:25](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/bahdanau-attention?u=76281980&t=145)** Soft max generates the probabilities representing the weights associated with each input in the input sequence.
>
> **[2:32](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/bahdanau-attention?u=76281980&t=152)** We use these alignment weights and apply them to the output of the encoder and this will give us the context vector.
>
> **[2:43](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/bahdanau-attention?u=76281980&t=163)** The context vector will us magnify the important portions of the output at this particular time instance, and drown out irrelevant or unimportant portions.
>
> **[2:54](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/bahdanau-attention?u=76281980&t=174)** Now that we have the context vector that tells the decoder what portions of the input to pay attention to, that becomes an additional input to our decoder recurrent neural network.
>
> **[3:06](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/bahdanau-attention?u=76281980&t=186)** So, for every layer of the decoder RNN, we feed in the decoder hidden state from the previous layer, the context vector at this current time instance, and the decoder output of the previous layer.
>
> **[3:19](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/bahdanau-attention?u=76281980&t=199)** The decoder output of the previous layer is the last word generated in the sequence which is now used to generate the next word.

> [!info]- Semantic Content
>
> **Code Keywords:** function (4), let (3), pass (3)
> **Definitions:** is a  (1), refers to (1), is an  (1)
> **Env Vars:** rnn (1)
> **Speakers:** - [narrator] (1)

#### Attention models for image captioning
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-models-for-image-captioning?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-models-for-image-captioning?u=76281980&t=1)** - Now, so far we've discussed how attention models work with encoders and decoders for language translation.
>
> **[0:08](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-models-for-image-captioning?u=76281980&t=8)** But how will we use attention models in image captioning?
>
> **[0:11](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-models-for-image-captioning?u=76281980&t=11)** Well, the principle is the same as that of language translation models, but there are some interesting twists.
>
> **[0:18](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-models-for-image-captioning?u=76281980&t=18)** The main thing is if you're working on images, images are not really sequential input.
>
> **[0:23](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-models-for-image-captioning?u=76281980&t=23)** Which means when you focus attention on parts of an image, you're not actually focusing attention at different time instances in an input sequence.
>
> **[0:33](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-models-for-image-captioning?u=76281980&t=33)** You're actually focusing attention across a two dimensional representation, the image.
>
> **[0:38](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-models-for-image-captioning?u=76281980&t=38)** Also, we generate embeddings or representations of images using convolution neural networks.
>
> **[0:45](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-models-for-image-captioning?u=76281980&t=45)** So, we pass an image through a CNN, and we get a representation of the image at the output of the CNN.
>
> **[0:52](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-models-for-image-captioning?u=76281980&t=52)** This image representation, which is the output of the convolution neural network, can be thought of as the hidden state of our encoder.
>
> **[1:01](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-models-for-image-captioning?u=76281980&t=61)** So, our convolution neural network is actually the encoder for an image.
>
> **[1:06](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-models-for-image-captioning?u=76281980&t=66)** What we want to do in our image captioning model, is to take this hidden state, or the representation of the image that we have and then generate text using these image representations.
>
> **[1:20](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-models-for-image-captioning?u=76281980&t=80)** Now, let's get back to the original problem that I had outlined.
>
> **[1:23](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-models-for-image-captioning?u=76281980&t=83)** An image is not really a sequence, and the image representation that we get from a convolution neural network is a representation of the image in its entirety, of the whole image.
>
> **[1:35](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-models-for-image-captioning?u=76281980&t=95)** And it's very hard to generate image captions from the image as a whole.
>
> **[1:40](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-models-for-image-captioning?u=76281980&t=100)** What you really want is an attention model that is used to focus attention on relevant parts of the image that can be used to generate captions.
>
> **[1:50](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-models-for-image-captioning?u=76281980&t=110)** So you want to identify two-dimensional patches on the image that can be used to generate captions.
>
> **[1:56](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-models-for-image-captioning?u=76281980&t=116)** Let's visualize how an attention model works for image captioning.
>
> **[2:00](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-models-for-image-captioning?u=76281980&t=120)** The encoder is a convolutional neural network that generates a representation of an image.
>
> **[2:06](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-models-for-image-captioning?u=76281980&t=126)** Now, the problem here is, that the representation generated by a CNN offers no spatial information.
>
> **[2:13](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-models-for-image-captioning?u=76281980&t=133)** It does not focus on different subparts of the image, which means that our image captioning model that uses attention should not work with the final output of a CNN.
>
> **[2:24](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-models-for-image-captioning?u=76281980&t=144)** Instead, it should extract feature map representations of the input from the output of a convolutional block.
>
> **[2:32](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-models-for-image-captioning?u=76281980&t=152)** The output of some convolutional block may produce C feature maps where every feature map has a height and a width that is M by N.
>
> **[2:43](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-models-for-image-captioning?u=76281980&t=163)** So rather than use the final vector representation of an image, we'll extract these feature maps.
>
> **[2:50](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-models-for-image-captioning?u=76281980&t=170)** Each feature map is of size M by N, and we have a total of C feature maps.
>
> **[2:56](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-models-for-image-captioning?u=76281980&t=176)** Once we have these feature maps, we then extract a slice of the feature map representation.
>
> **[3:02](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-models-for-image-captioning?u=76281980&t=182)** The slice has a depth of C, and dimensions of one by one pixel.
>
> **[3:08](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-models-for-image-captioning?u=76281980&t=188)** We can think of this one by one by C slice of the feature map as representing a portion of the input image.
>
> **[3:17](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-models-for-image-captioning?u=76281980&t=197)** So, this can be projected back and you can think of this slice as containing information from a part of a input image.
>
> **[3:26](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-models-for-image-captioning?u=76281980&t=206)** Unrolling the feature map representations will give us slices of the input image to work with.
>
> **[3:33](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-models-for-image-captioning?u=76281980&t=213)** And we can then focus our attention mechanism on these slices.
>
> **[3:37](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-models-for-image-captioning?u=76281980&t=217)** Remember, these slices represent portions of the input image, and we want our attention model focused on the relevant portions of the input image while generating captions.

> [!info]- Semantic Content
>
> **Env Vars:** cnn (4)
> **Definitions:** is a  (2), is an  (1), means that (1)
> **Code Keywords:** let (2), pass (1)
> **Speakers:** - now (1)

#### Encoder decoder structure for image captioning
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/encoder-decoder-structure-for-image-captioning?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/encoder-decoder-structure-for-image-captioning?u=76281980&t=1)** - [Instructor] Now that we have a big picture understanding of how attention models can be used for image captioning let's look in some detail at the encoder decoder structure that we are going to be used in our image captioning model.
>
> **[0:14](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/encoder-decoder-structure-for-image-captioning?u=76281980&t=14)** Now, this is what the model looks like.
>
> **[0:16](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/encoder-decoder-structure-for-image-captioning?u=76281980&t=16)** I know there are lots of moving parts here, but we'll break things down and understand them bit by bit.
>
> **[0:22](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/encoder-decoder-structure-for-image-captioning?u=76281980&t=22)** The encoder of the image captioning model is essentially a convolutional neural network.
>
> **[0:28](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/encoder-decoder-structure-for-image-captioning?u=76281980&t=28)** Now, in order to set up our attention mechanism we'll use the feature map representations generated by a convolutional block as an input to our attention model.
>
> **[0:40](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/encoder-decoder-structure-for-image-captioning?u=76281980&t=40)** The decoder of our image captioning model is a recurrent neural network, which makes sense because we want to generate language.
>
> **[0:48](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/encoder-decoder-structure-for-image-captioning?u=76281980&t=48)** The caption for every image will be text that we generate in the English language.
>
> **[0:53](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/encoder-decoder-structure-for-image-captioning?u=76281980&t=53)** The center block that you see here is our attention block.
>
> **[0:56](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/encoder-decoder-structure-for-image-captioning?u=76281980&t=56)** We will be using Bahdanau's attention.
>
> **[0:58](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/encoder-decoder-structure-for-image-captioning?u=76281980&t=58)** The additive attention that we studied earlier.
>
> **[1:01](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/encoder-decoder-structure-for-image-captioning?u=76281980&t=61)** Observe that the attention block connects the encoder output directly to the decoder network.
>
> **[1:07](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/encoder-decoder-structure-for-image-captioning?u=76281980&t=67)** The convolution neural network that we'll use as our encoder is going to be a ResNet-50 pretrained model.
>
> **[1:14](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/encoder-decoder-structure-for-image-captioning?u=76281980&t=74)** ResNet, which stands for residual network is a widely used image classification model.
>
> **[1:21](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/encoder-decoder-structure-for-image-captioning?u=76281980&t=81)** This model has been pretrained on the ImageNet data set and can classify images into a thousand different categories.
>
> **[1:28](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/encoder-decoder-structure-for-image-captioning?u=76281980&t=88)** This is what we'll use to generate feature map representations of our input image.
>
> **[1:35](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/encoder-decoder-structure-for-image-captioning?u=76281980&t=95)** The output of the ResNet model will be taken from the last convolutional block.
>
> **[1:40](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/encoder-decoder-structure-for-image-captioning?u=76281980&t=100)** The last convolutional block produces 2048 feature maps.
>
> **[1:44](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/encoder-decoder-structure-for-image-captioning?u=76281980&t=104)** Then each feature map is seven by seven.
>
> **[1:48](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/encoder-decoder-structure-for-image-captioning?u=76281980&t=108)** This is, of course, considering that the input image is of size 224 by 224, and that's the size that we'll use.
>
> **[1:56](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/encoder-decoder-structure-for-image-captioning?u=76281980&t=116)** These feature maps will be passed through a linear layer to generate the hidden output of the encoder.
>
> **[2:03](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/encoder-decoder-structure-for-image-captioning?u=76281980&t=123)** This is the hidden state that represents the entire input image.
>
> **[2:08](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/encoder-decoder-structure-for-image-captioning?u=76281980&t=128)** The input to the Bahdanau's attention model will be the hidden state as well as the unrolled feature map.
>
> **[2:16](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/encoder-decoder-structure-for-image-captioning?u=76281980&t=136)** Remember, we have 2048 feature maps where each feature map is seven by seven.
>
> **[2:21](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/encoder-decoder-structure-for-image-captioning?u=76281980&t=141)** We unroll them to get 49 feature maps with a dimensionality of 2048.
>
> **[2:29](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/encoder-decoder-structure-for-image-captioning?u=76281980&t=149)** That's the input to our attention block.
>
> **[2:31](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/encoder-decoder-structure-for-image-captioning?u=76281980&t=151)** The attention mechanism that we'll use will be Bahdanau's attention, and this will generate to output.
>
> **[2:37](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/encoder-decoder-structure-for-image-captioning?u=76281980&t=157)** The context vector, that will be the input to the decoder and the attention weights that we use to visualize how our image captioning model generates captioning text.
>
> **[2:49](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/encoder-decoder-structure-for-image-captioning?u=76281980&t=169)** Now, the dimensionality of the attention rates will be 49.
>
> **[2:53](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/encoder-decoder-structure-for-image-captioning?u=76281980&t=173)** One corresponding to each unrolled feature map.
>
> **[2:56](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/encoder-decoder-structure-for-image-captioning?u=76281980&t=176)** The decoder recurrent neural network will be trained on captions in the training data.
>
> **[3:02](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/encoder-decoder-structure-for-image-captioning?u=76281980&t=182)** Captions will be represented using one hot encodings, which are then converted to embeddings.
>
> **[3:10](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/encoder-decoder-structure-for-image-captioning?u=76281980&t=190)** So the embedding at time instance T is the word from the caption fed into the decoder network at time instance T.
>
> **[3:19](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/encoder-decoder-structure-for-image-captioning?u=76281980&t=199)** The context vector from the attention model will be concatenated with the embedding at time instance T, and that will be the input to our decoder RNN.
>
> **[3:31](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/encoder-decoder-structure-for-image-captioning?u=76281980&t=211)** The decoder will have all of the inputs, its previous hidden state, the context vector, the embedding at time instance T to produce the output at time instance T plus one.
>
> **[3:42](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/encoder-decoder-structure-for-image-captioning?u=76281980&t=222)** That is the next predicted word.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2), stands for (1)
> **Code Keywords:** let (1)
> **Env Vars:** rnn (1)
> **Analogies:** picture (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 4. Image Captioning Model without Attention

#### Setting up Colab and Google Drive
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/setting-up-colab-and-google-drive?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/setting-up-colab-and-google-drive?u=76281980&t=1)** - We'll implement the code for all of the demos in this course using Colab notebooks.
>
> **[0:06](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/setting-up-colab-and-google-drive?u=76281980&t=6)** And we'll have our data set loaded onto Google Drive.
>
> **[0:09](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/setting-up-colab-and-google-drive?u=76281980&t=9)** So here I am, logged in with my user account on my Google Drive, And I've already uploaded the data set that we are going to be using.
>
> **[0:17](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/setting-up-colab-and-google-drive?u=76281980&t=17)** That is the flickr_dataset.
>
> **[0:19](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/setting-up-colab-and-google-drive?u=76281980&t=19)** You can see that it's in a sub folder within my My Drive folder.
>
> **[0:22](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/setting-up-colab-and-google-drive?u=76281980&t=22)** I'm going to click through, and show you how the data looks.
>
> **[0:26](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/setting-up-colab-and-google-drive?u=76281980&t=26)** Within the flickr_dataset folder there is a zip file called flickr8k.zip.
>
> **[0:31](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/setting-up-colab-and-google-drive?u=76281980&t=31)** This is the zip file that contains the images that will be are training data, as well as the captions corresponding to those images.
>
> **[0:39](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/setting-up-colab-and-google-drive?u=76281980&t=39)** Now what I've done is, I've unzipped those files, so you can see the structure of what the images look like, and how the captions are set up.
>
> **[0:47](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/setting-up-colab-and-google-drive?u=76281980&t=47)** The unzipped image files are in this images sub folder.
>
> **[0:51](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/setting-up-colab-and-google-drive?u=76281980&t=51)** And the captions file is this captions.txt file, that you see here on screen.
>
> **[0:56](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/setting-up-colab-and-google-drive?u=76281980&t=56)** So let's click through to images, and see what an image looks like.
>
> **[1:00](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/setting-up-colab-and-google-drive?u=76281980&t=60)** You can see that there are a number of JPG files in here.
>
> **[1:02](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/setting-up-colab-and-google-drive?u=76281980&t=62)** I'm going to click on one of these files, and you'll see a sample image that will be part of our training data.
>
> **[1:09](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/setting-up-colab-and-google-drive?u=76281980&t=69)** This particular image depicts some kind of scenery.
>
> **[1:11](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/setting-up-colab-and-google-drive?u=76281980&t=71)** There is water, there are trees, and so on.
>
> **[1:15](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/setting-up-colab-and-google-drive?u=76281980&t=75)** Now the remaining images are the same way.
>
> **[1:16](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/setting-up-colab-and-google-drive?u=76281980&t=76)** You can click on some other images, and see what the data looks like.
>
> **[1:21](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/setting-up-colab-and-google-drive?u=76281980&t=81)** Another sample image here is one of dogs playing.
>
> **[1:25](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/setting-up-colab-and-google-drive?u=76281980&t=85)** Now that you've understood, what the individual images look like.
>
> **[1:28](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/setting-up-colab-and-google-drive?u=76281980&t=88)** Let's head back to flickr_dataset.
>
> **[1:32](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/setting-up-colab-and-google-drive?u=76281980&t=92)** Let's quickly glance at the captions.txt file, and see how the captions for these images are set up.
>
> **[1:39](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/setting-up-colab-and-google-drive?u=76281980&t=99)** You can see that every row in this text file contains two bits of information.
>
> **[1:43](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/setting-up-colab-and-google-drive?u=76281980&t=103)** The first is the name of the image file, and the second is a text description of what's in that image file.
>
> **[1:51](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/setting-up-colab-and-google-drive?u=76281980&t=111)** As you can see from the highlighted portion in this dataset, every image contains five different text descriptions.
>
> **[1:59](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/setting-up-colab-and-google-drive?u=76281980&t=119)** So there are five captions for each image, and you'll see this pattern across this entire dataset.
>
> **[2:06](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/setting-up-colab-and-google-drive?u=76281980&t=126)** Now that we've seen what the dataset looks like, let's head over to Colab and log ourselves in.
>
> **[2:11](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/setting-up-colab-and-google-drive?u=76281980&t=131)** Colab is a project made freely available by Google for researchers and students to build and prototype their machine learning models or any kind of Python code, not just ml.
>
> **[2:23](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/setting-up-colab-and-google-drive?u=76281980&t=143)** Colab offers cloud hosted Jupyter Notebooks, which can be run on CPUs or GPUs for absolutely free.
>
> **[2:32](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/setting-up-colab-and-google-drive?u=76281980&t=152)** There is a limit to the GPU use, but you should be able to run all of the demos of this course, just fine.
>
> **[2:37](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/setting-up-colab-and-google-drive?u=76281980&t=157)** Go ahead and sign in.
>
> **[2:39](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/setting-up-colab-and-google-drive?u=76281980&t=159)** Colab requires a Google account for you to be able to use Colab.
>
> **[2:44](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/setting-up-colab-and-google-drive?u=76281980&t=164)** The Google account that I've used to log into Colab is the same Google account that I used to log into Google Drive.
>
> **[2:51](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/setting-up-colab-and-google-drive?u=76281980&t=171)** And where I've uploaded the dataset that I used to train my model.
>
> **[2:56](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/setting-up-colab-and-google-drive?u=76281980&t=176)** When you first log into Colab, you should see a dialogue pop up like this.
>
> **[2:59](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/setting-up-colab-and-google-drive?u=76281980&t=179)** Choose the Upload option and select Choose file and I'll upload the notebook that contains my code for image captioning without attention.
>
> **[3:09](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/setting-up-colab-and-google-drive?u=76281980&t=189)** Once the notebook has been uploaded and is available in Colab, I'm just going to set up a few configuration settings.
>
> **[3:15](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/setting-up-colab-and-google-drive?u=76281980&t=195)** First, I'll go to Tools and Settings, and enable line numbers on the individual code cells.
>
> **[3:22](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/setting-up-colab-and-google-drive?u=76281980&t=202)** Click on Editor.
>
> **[3:23](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/setting-up-colab-and-google-drive?u=76281980&t=203)** Within this, you'll find an option for Show line numbers.
>
> **[3:26](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/setting-up-colab-and-google-drive?u=76281980&t=206)** That's what I've enabled, and I'm going to save this setting.
>
> **[3:29](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/setting-up-colab-and-google-drive?u=76281980&t=209)** Now we have line numbers for each cell, that's easier for you to follow along.
>
> **[3:33](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/setting-up-colab-and-google-drive?u=76281980&t=213)** The next change I make is to change the runtime type under the Runtime menu.
>
> **[3:40](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/setting-up-colab-and-google-drive?u=76281980&t=220)** The image captioning code is fairly processing heavy, which is why I want to run this code using a GPU accelerator rather than on a CPU.
>
> **[3:49](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/setting-up-colab-and-google-drive?u=76281980&t=229)** So I'm going to select the GPU option here in Notebook settings, and hit Save.
>
> **[3:54](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/setting-up-colab-and-google-drive?u=76281980&t=234)** This means all of the code that I execute will run on the GPU.
>
> **[3:59](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/setting-up-colab-and-google-drive?u=76281980&t=239)** This will allow us to train fairly decent models by running the training process for about 30 to 60 minutes.
>
> **[4:05](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/setting-up-colab-and-google-drive?u=76281980&t=245)** Not longer.

> [!info]- Semantic Content
>
> **Tools:** colab (9), jupyter (1)
> **Code Keywords:** let (4), this. (1), this, (1)
> **Env Vars:** gpu (4), jpg (1), cpu (1)
> **UI Navigation:** click on (3), go to (1), select the (1)
> **Definitions:** is a  (4)
> **CLI Commands:** python (1), find (1), make (1)
> **Code Identifiers:** flickr_dataset (3)
> **Prerequisites:** set up (3)

#### Loading in the Flickr8k dataset
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/loading-in-the-flickr8k-dataset?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/loading-in-the-flickr8k-dataset?u=76281980&t=1)** - We have CoLab set up.
>
> **[0:02](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/loading-in-the-flickr8k-dataset?u=76281980&t=2)** We have our dataset uploaded to Google Drive.
>
> **[0:04](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/loading-in-the-flickr8k-dataset?u=76281980&t=4)** We're ready to get started coding.
>
> **[0:06](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/loading-in-the-flickr8k-dataset?u=76281980&t=6)** Now, the name of this notebook is Image Captioning Without Attention because that's the model that we are going to build.
>
> **[0:12](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/loading-in-the-flickr8k-dataset?u=76281980&t=12)** We're going to look at images and try to generate captions for them using an RNN decoder but we will not use Attention.
>
> **[0:20](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/loading-in-the-flickr8k-dataset?u=76281980&t=20)** We'll look at the captions generated by this model and use that as a baseline for the next model where we will, indeed, use Attention to generate captions.
>
> **[0:29](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/loading-in-the-flickr8k-dataset?u=76281980&t=29)** The code that I've used here, in this demo is a modified version of the code available at this URL here on Kaggle and the data set for image captioning is also available on Kaggle at this link here.
>
> **[0:41](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/loading-in-the-flickr8k-dataset?u=76281980&t=41)** The Flickr 8k set.
>
> **[0:42](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/loading-in-the-flickr8k-dataset?u=76281980&t=42)** Now let's set up our import statements.
>
> **[0:45](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/loading-in-the-flickr8k-dataset?u=76281980&t=45)** You can see that I'm going to be building our neural network using PyTorch.
>
> **[0:50](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/loading-in-the-flickr8k-dataset?u=76281980&t=50)** You can see a number of imports for pandas and MAT plot lib.
>
> **[0:53](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/loading-in-the-flickr8k-dataset?u=76281980&t=53)** That is to load in, process and visualize our data and then we have all of the Torch related imports.
>
> **[1:01](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/loading-in-the-flickr8k-dataset?u=76281980&t=61)** Our data set is on Google Drive.
>
> **[1:02](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/loading-in-the-flickr8k-dataset?u=76281980&t=62)** In order to access that data from CoLab, I need to mount the contents of Google Drive to this notebook.
>
> **[1:10](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/loading-in-the-flickr8k-dataset?u=76281980&t=70)** Once you run this code you'll get a dialogue, connect to Google Drive and you'll need to set up the right permissions.
>
> **[1:16](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/loading-in-the-flickr8k-dataset?u=76281980&t=76)** Log in using your username and password.
>
> **[1:20](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/loading-in-the-flickr8k-dataset?u=76281980&t=80)** Click on allow here, so that you give CoLab the permissions to access the contents of your Google Drive folder.
>
> **[1:29](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/loading-in-the-flickr8k-dataset?u=76281980&t=89)** Now we can confirm that our Google Drive has been mounted to this CoLab notebook.
>
> **[1:34](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/loading-in-the-flickr8k-dataset?u=76281980&t=94)** Click on this folder icon off to the left and under that, you should find a sub folder called Drive and if you expand this, MyDrive is where your drive contents are located.
>
> **[1:45](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/loading-in-the-flickr8k-dataset?u=76281980&t=105)** Now within here, you should be able to find the flickr_dataset sub folder and under that we have the flickr8k.zip file.
>
> **[1:54](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/loading-in-the-flickr8k-dataset?u=76281980&t=114)** This is the zip file with our training data.
>
> **[1:57](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/loading-in-the-flickr8k-dataset?u=76281980&t=117)** It contains a subfolder with images and the captions.txt file that contains the captions.
>
> **[2:03](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/loading-in-the-flickr8k-dataset?u=76281980&t=123)** Now I'm going to get out of here and let's unzip this file into our local folder here on CoLab so that it's accessible to us for training.
>
> **[2:13](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/loading-in-the-flickr8k-dataset?u=76281980&t=133)** This code references the zip file on Google Drive and unzips it to the current working directory.
>
> **[2:19](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/loading-in-the-flickr8k-dataset?u=76281980&t=139)** Once the unzip process is complete, we'll run an LS command to see what our current working directory looks like.
>
> **[2:25](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/loading-in-the-flickr8k-dataset?u=76281980&t=145)** There you can see captions.txt, and the images sub folder with our data.
>
> **[2:31](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/loading-in-the-flickr8k-dataset?u=76281980&t=151)** Let's run a quick count of how many images are present in the forward slash content forward slash images sub folder.
>
> **[2:38](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/loading-in-the-flickr8k-dataset?u=76281980&t=158)** So how many images are present in our training data?
>
> **[2:41](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/loading-in-the-flickr8k-dataset?u=76281980&t=161)** And you can see that there are about 8K images 8 0 9 1 images to be precise.
>
> **[2:45](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/loading-in-the-flickr8k-dataset?u=76281980&t=165)** If you remember the contents of captions.txt that contain the image name and the corresponding caption.
>
> **[2:52](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/loading-in-the-flickr8k-dataset?u=76281980&t=172)** I'm going to read it in as a pandas data frame and let's take a look at a sample of the content in this image captions data frame.
>
> **[3:00](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/loading-in-the-flickr8k-dataset?u=76281980&t=180)** This data frame has two columns.
>
> **[3:02](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/loading-in-the-flickr8k-dataset?u=76281980&t=182)** The image column with the name of the image file, the caption column with the corresponding caption.
>
> **[3:09](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/loading-in-the-flickr8k-dataset?u=76281980&t=189)** If you remember, I had mentioned earlier that every image in our training data has five different captions, similar captions, but different and you can see from the shape of the captions data frame that there are 40,000 captions. roughly.
>
> **[3:24](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/loading-in-the-flickr8k-dataset?u=76281980&t=204)** Let's quickly take a look at the first 10 captions in our training data and you'll see that these captions correspond to two images.
>
> **[3:32](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/loading-in-the-flickr8k-dataset?u=76281980&t=212)** The first five captions here correspond to the first image and the second five captions correspond to the second image in our training data.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), this, (1)
> **CLI Commands:** find (2), unzip (2), ls (1)
> **Tools:** colab (5)
> **Prerequisites:** set up (3), you'll need (1)
> **File Paths:** captions.txt (3)
> **Env Vars:** rnn (1), url (1), mat (1)
> **Exercise Files:** zip file (3)
> **UI Navigation:** click on (2)

#### Constructing the vocabulary
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/constructing-the-vocabulary?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/constructing-the-vocabulary?u=76281980&t=1)** - Now that we have loaded in the training data, let's process this data so that it's in a form that can be fed into our machine learning model.
>
> **[0:08](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/constructing-the-vocabulary?u=76281980&t=8)** First, let's make sure that we are running all of our code using the GPU.
>
> **[0:13](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/constructing-the-vocabulary?u=76281980&t=13)** Torch.cuda.is_available(), checks for the gpu.
>
> **[0:16](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/constructing-the-vocabulary?u=76281980&t=16)** Yes, indeed, we do have it on this notebook, which means the device that we use to run our code is a coder device.
>
> **[0:24](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/constructing-the-vocabulary?u=76281980&t=24)** The image captions will be generated by an RNN decoder, and in order to feed in data to the RNN decoder during training and during prediction, we need to tokenize our English sentences.
>
> **[0:37](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/constructing-the-vocabulary?u=76281980&t=37)** And that's why we instantiate this tokenizer.
>
> **[0:40](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/constructing-the-vocabulary?u=76281980&t=40)** In order to run training a little bit faster, and to keep our vocabulary size manageable, we use a counter to track the frequency of the different words that occur in the captions.
>
> **[0:51](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/constructing-the-vocabulary?u=76281980&t=51)** This will allow us to limit our vocabulary to words that occur fairly frequently.
>
> **[0:57](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/constructing-the-vocabulary?u=76281980&t=57)** The counter object here will allow us to keep track of word frequencies in the training data.
>
> **[1:02](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/constructing-the-vocabulary?u=76281980&t=62)** Let's see how the tokenizer works.
>
> **[1:04](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/constructing-the-vocabulary?u=76281980&t=64)** I invoke the tokenizer on some text and you can see that word tokens are generated at the output, a list of word tokens that make up the original sentence.
>
> **[1:16](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/constructing-the-vocabulary?u=76281980&t=76)** Observe that some pre-processing has been applied to the word tokens before tokenization.
>
> **[1:22](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/constructing-the-vocabulary?u=76281980&t=82)** All of the words have been converted to lowercase.
>
> **[1:25](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/constructing-the-vocabulary?u=76281980&t=85)** And also, punctuations have been preserved.
>
> **[1:29](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/constructing-the-vocabulary?u=76281980&t=89)** We are now ready to build up our vocabulary.
>
> **[1:33](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/constructing-the-vocabulary?u=76281980&t=93)** Now, this requires us to tokenize every sentence in our training data, that is the image_captions.
>
> **[1:39](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/constructing-the-vocabulary?u=76281980&t=99)** We then use the tokens generated from these sentences, the individual words, to update the counter object.
>
> **[1:45](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/constructing-the-vocabulary?u=76281980&t=105)** The counter object will keep track of how often each word occurs in the training data.
>
> **[1:53](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/constructing-the-vocabulary?u=76281980&t=113)** Once we've done this for all of the words in the input training data, we'll use that to build up a vocabulary object.
>
> **[2:01](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/constructing-the-vocabulary?u=76281980&t=121)** This vocab object takes in a counter as an input argument and observed that I've specified min_freq = 5, meaning I only want to include those words in my vocabulary, which have occurred at least five times in the training data.
>
> **[2:16](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/constructing-the-vocabulary?u=76281980&t=136)** This min_freq is something that you can change, but now we have a vocabulary with the most frequently used words.
>
> **[2:24](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/constructing-the-vocabulary?u=76281980&t=144)** Next, I add some special tokens to my vocabulary.
>
> **[2:28](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/constructing-the-vocabulary?u=76281980&t=148)** The unk_token, or the unknown token, will be for words that are not recognized by the vocabulary words, which haven't occurred very frequently or haven't occurred at all.
>
> **[2:38](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/constructing-the-vocabulary?u=76281980&t=158)** The pad_token is another token, which allows us to add our caption sentences so they're all of the same length.
>
> **[2:46](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/constructing-the-vocabulary?u=76281980&t=166)** This is required in the training process because we want all of the sentences in one batch of training data to be of the same length, so that the recurrent neural network decoder, can be unruled to that length.
>
> **[3:00](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/constructing-the-vocabulary?u=76281980&t=180)** The sos_token signifies the start of a sentence.
>
> **[3:03](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/constructing-the-vocabulary?u=76281980&t=183)** The eos_token signifies the end of a sentence.
>
> **[3:07](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/constructing-the-vocabulary?u=76281980&t=187)** Our vocabulary needs to include these special tokens, so I'm going to go ahead and insert these tokens at the very beginning.
>
> **[3:14](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/constructing-the-vocabulary?u=76281980&t=194)** unk_token has an index of 0.
>
> **[3:16](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/constructing-the-vocabulary?u=76281980&t=196)** The eos_token has an index of 3.
>
> **[3:20](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/constructing-the-vocabulary?u=76281980&t=200)** And finally, we set the default index of our vocabulary to be the unk_token.
>
> **[3:25](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/constructing-the-vocabulary?u=76281980&t=205)** So if there is a word that is not part of our vocabulary, that will be replaced by unk.
>
> **[3:32](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/constructing-the-vocabulary?u=76281980&t=212)** Now let's take a look at the size of our vocabulary.
>
> **[3:35](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/constructing-the-vocabulary?u=76281980&t=215)** These are the words that will be used by our decoder model to caption images.
>
> **[3:40](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/constructing-the-vocabulary?u=76281980&t=220)** And you can see our vocabulary is roughly 3000 words in size. 3005.
>
> **[3:46](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/constructing-the-vocabulary?u=76281980&t=226)** The vocab object that I taught uses an index to represent every word in the vocabulary.
>
> **[3:53](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/constructing-the-vocabulary?u=76281980&t=233)** So each word will have a corresponding index, and that index is a one-hot representation of the input word.
>
> **[4:01](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/constructing-the-vocabulary?u=76281980&t=241)** For example, the index corresponding to the word dog, is 29.
>
> **[4:05](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/constructing-the-vocabulary?u=76281980&t=245)** This means that, in a one-hot vector that has 3005 elements equal to the number of words in our vocabulary, the index at 29 corresponds to the word dog.
>
> **[4:18](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/constructing-the-vocabulary?u=76281980&t=258)** Let's take another example here.
>
> **[4:20](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/constructing-the-vocabulary?u=76281980&t=260)** The index of the word boy in our one-hot encoded vector is 142.
>
> **[4:27](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/constructing-the-vocabulary?u=76281980&t=267)** And our special tokens also have corresponding index values.
>
> **[4:31](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/constructing-the-vocabulary?u=76281980&t=271)** For example, the eos_token corresponds to index of 3.

> [!info]- Semantic Content
>
> **Code Identifiers:** unk_token (3), eos_token (3), min_freq (2), is_available (1), image_captions (1)
> **Code Keywords:** let (5), finally, (1)
> **Definitions:** is a  (3), means that (1)
> **Env Vars:** rnn (2), gpu (1)
> **CLI Commands:** make (2)
> **Analogies:** for example (2)
> **Speakers:** - now (1)

#### Setting up the dataset class
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/setting-up-the-dataset-class?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/setting-up-the-dataset-class?u=76281980&t=1)** - Now that we've set up our vocabulary, the next step is to set up a dataset object that will allow our training data to access images and the corresponding captions in the right format, in batches.
>
> **[0:13](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/setting-up-the-dataset-class?u=76281980&t=13)** Our Flickr dataset class here inherits from the base dataset class in the PyTorch library.
>
> **[0:20](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/setting-up-the-dataset-class?u=76281980&t=20)** The init method, we pass in a bunch of information, the directory where our training images are located, the pointer to the captions file, the vocabulary to generate captions, and transformations that we want to apply to the input images.
>
> **[0:35](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/setting-up-the-dataset-class?u=76281980&t=35)** Now we assign these to variables of this object.
>
> **[0:40](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/setting-up-the-dataset-class?u=76281980&t=40)** We have a pointer to the captions text file, we'll need to extract the contents of the captions file, so, I'm going to read it in as a pandas data frame.
>
> **[0:50](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/setting-up-the-dataset-class?u=76281980&t=50)** The length of our training data is equal to the number of captions that we have in the file.
>
> **[0:55](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/setting-up-the-dataset-class?u=76281980&t=55)** That is the length of the data frame.
>
> **[0:57](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/setting-up-the-dataset-class?u=76281980&t=57)** We'll extract the captions and the image names in member variables for use down below.
>
> **[1:05](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/setting-up-the-dataset-class?u=76281980&t=65)** The length of this data set is equal to the number of captions in the training data, so, we return self.length.
>
> **[1:13](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/setting-up-the-dataset-class?u=76281980&t=73)** We want to be able to use square brackets to access the data at index positions, so, make sure you specify a definition for this magic method, get item.
>
> **[1:24](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/setting-up-the-dataset-class?u=76281980&t=84)** We access the caption X and the name of the image file at this particular index, and we now use this to load in and set up the data in a tenser format.
>
> **[1:36](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/setting-up-the-dataset-class?u=76281980&t=96)** We access the image file where it's located in our current working directory.
>
> **[1:41](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/setting-up-the-dataset-class?u=76281980&t=101)** That's where we extracted the image and we call Image.open to load the image into our program.
>
> **[1:48](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/setting-up-the-dataset-class?u=76281980&t=108)** Image is a class available in the PIL library, a free open source library for Python.
>
> **[1:55](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/setting-up-the-dataset-class?u=76281980&t=115)** If you've specified any image transforms, make sure you apply the transformations to the input image.
>
> **[2:01](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/setting-up-the-dataset-class?u=76281980&t=121)** The next step is to get our caption X in an tenser format.
>
> **[2:06](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/setting-up-the-dataset-class?u=76281980&t=126)** This tenser will be the captions represented in the form of one-hot encodings.
>
> **[2:13](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/setting-up-the-dataset-class?u=76281980&t=133)** In this one-hot encoding, each word will be represented by its corresponding index, and that index represents the position of the one corresponding to that word in a one-hot encoded vector.
>
> **[2:27](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/setting-up-the-dataset-class?u=76281980&t=147)** This lambda function converts an input text to a list of indices, where the indices correspond to the words in the caption.
>
> **[2:36](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/setting-up-the-dataset-class?u=76281980&t=156)** Next, let's set up our caption vector.
>
> **[2:38](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/setting-up-the-dataset-class?u=76281980&t=158)** Initialize an empty list.
>
> **[2:40](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/setting-up-the-dataset-class?u=76281980&t=160)** The first element in that list should be the index for the start of sentence token, and then we have the entire sentence which we construct by calling caption_text_to_index and then we end the caption vector with the EOS or end of sentence token.
>
> **[2:57](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/setting-up-the-dataset-class?u=76281980&t=177)** We then return the image object and our captions text in the tenser format.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (1), self (1), lambda (1), function (1), let (1)
> **Prerequisites:** set up (4)
> **CLI Commands:** make (2), python (1)
> **Env Vars:** pil (1), eos (1)
> **Code Identifiers:** caption_text_to_index (1)
> **Definitions:** is a  (1)
> **Speakers:** - now (1)

#### Implementing utility functions for training data
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/implementing-utility-functions-for-training-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/implementing-utility-functions-for-training-data?u=76281980&t=1)** - [Instructor] Next, I set up a callable class that will be used by the PyTorch data loader to load the image as well as the corresponding caption for that image in batches.
>
> **[0:12](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/implementing-utility-functions-for-training-data?u=76281980&t=12)** The data loader is what our training code is used to iterate over batches of training data.
>
> **[0:20](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/implementing-utility-functions-for-training-data?u=76281980&t=20)** The init method of this class accepts a pad index, that is the index of the pad token in our vocabulary, and whether this is the first batch to be generated or not.
>
> **[0:31](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/implementing-utility-functions-for-training-data?u=76281980&t=31)** This class is a callable, that is it can be invoked like a function, so define the call method, and pass in one batch of training data, we'll now get this batch in the right format.
>
> **[0:44](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/implementing-utility-functions-for-training-data?u=76281980&t=44)** The batch passed in is a couple of the image tensors and the caption tensors.
>
> **[0:50](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/implementing-utility-functions-for-training-data?u=76281980&t=50)** You'll see that across this code, I've added in a bunch of comments explaining the structure of data passed in the operations that we apply and the resulting changed shape or structure of the data.
>
> **[1:03](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/implementing-utility-functions-for-training-data?u=76281980&t=63)** The image tensor at the input has the following dimensions, pad size, num channels, height and width of an image.
>
> **[1:10](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/implementing-utility-functions-for-training-data?u=76281980&t=70)** The caption tensor as the first dimension that is the pad size, and the second dimension is the number of words in the caption.
>
> **[1:18](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/implementing-utility-functions-for-training-data?u=76281980&t=78)** Now captions can be of different lengths, so you'll find that in the same batch, we'll have sentences of different length, and then RNNs can't deal with those captions in a batch.
>
> **[1:30](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/implementing-utility-functions-for-training-data?u=76281980&t=90)** We need all of the captions to be of the same length, and we'll achieve this using padding.
>
> **[1:35](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/implementing-utility-functions-for-training-data?u=76281980&t=95)** We then iterate over each image in the batch and add an extra dimension to each image.
>
> **[1:40](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/implementing-utility-functions-for-training-data?u=76281980&t=100)** We'll need this for the conation operation that we perform next.
>
> **[1:44](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/implementing-utility-functions-for-training-data?u=76281980&t=104)** We get all of the images together in a single tensor using torch.cat.
>
> **[1:50](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/implementing-utility-functions-for-training-data?u=76281980&t=110)** We then process each caption in turn.
>
> **[1:52](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/implementing-utility-functions-for-training-data?u=76281980&t=112)** Now all of the captions in the batch are currently of different lengths, and in order to feed the captions together as a batch to the RNN, we need the caption lengths to be the same.
>
> **[2:04](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/implementing-utility-functions-for-training-data?u=76281980&t=124)** so that we achieved this by adding a padding token to all of the captions that are shorter than the longest caption in this batch.
>
> **[2:14](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/implementing-utility-functions-for-training-data?u=76281980&t=134)** The pad sequence function here will ensure that all captions in the batch will have the same length equal to the length of the longest sequence in the batch and our decoder RNN will be unrolled per batch to the length of the longer sequence.
>
> **[2:30](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/implementing-utility-functions-for-training-data?u=76281980&t=150)** The display image utility function displays an image and the caption corresponding to that image, encoded version of the caption.
>
> **[2:38](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/implementing-utility-functions-for-training-data?u=76281980&t=158)** Now, there are a bunch of operations that we need to do.
>
> **[2:41](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/implementing-utility-functions-for-training-data?u=76281980&t=161)** We multiply by the mean of the image net data set, and then add the standard deviation so that the pixel values are such that Matplotlib can plot this image.
>
> **[2:52](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/implementing-utility-functions-for-training-data?u=76281980&t=172)** You'll see that we use these numbers to pre-process the data, we're going to get rid of the pre-processing so that we can display an image from the dataset.
>
> **[3:00](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/implementing-utility-functions-for-training-data?u=76281980&t=180)** Observe that I perform a transpose.
>
> **[3:02](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/implementing-utility-functions-for-training-data?u=76281980&t=182)** Remember, PyTorch expresses every image with the dimensions, num channels, height and width.
>
> **[3:08](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/implementing-utility-functions-for-training-data?u=76281980&t=188)** I'm going flip the dimensions so that it's of the form height, width, num channels, so that Matplotlib can display this image.
>
> **[3:16](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/implementing-utility-functions-for-training-data?u=76281980&t=196)** We are now ready to instantiate our Flickr dataset.
>
> **[3:20](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/implementing-utility-functions-for-training-data?u=76281980&t=200)** Specify the transforms you want to apply to the input images.
>
> **[3:23](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/implementing-utility-functions-for-training-data?u=76281980&t=203)** I perform a resize to 226 by 226, then a random crop to 224.
>
> **[3:29](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/implementing-utility-functions-for-training-data?u=76281980&t=209)** These images are going to be fed into a ResNet-50 pretrained model to extract representations of each image.
>
> **[3:37](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/implementing-utility-functions-for-training-data?u=76281980&t=217)** Now, pretrained models in PyTorch require that the minimum image size be 224 by 224, and that's why I've picked that crop.
>
> **[3:47](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/implementing-utility-functions-for-training-data?u=76281980&t=227)** We convert the image to a tensor, and normalize it by subtracting the mean and dividing by the standard deviation of the ImageNet dataset.
>
> **[3:56](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/implementing-utility-functions-for-training-data?u=76281980&t=236)** This is pretty standard practice.
>
> **[3:57](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/implementing-utility-functions-for-training-data?u=76281980&t=237)** Next step is to instantiate the Flickr dataset, and take a look at the sample images.
>
> **[4:03](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/implementing-utility-functions-for-training-data?u=76281980&t=243)** We have the data set.
>
> **[4:04](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/implementing-utility-functions-for-training-data?u=76281980&t=244)** The length of the dataset will give us the number of training instances, and we know that's roughly 40,000.
>
> **[4:10](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/implementing-utility-functions-for-training-data?u=76281980&t=250)** Remember, each image has five different captions.
>
> **[4:14](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/implementing-utility-functions-for-training-data?u=76281980&t=254)** Let's pick an image at random.
>
> **[4:16](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/implementing-utility-functions-for-training-data?u=76281980&t=256)** I'm going to pick the 10th image in my dataset.
>
> **[4:19](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/implementing-utility-functions-for-training-data?u=76281980&t=259)** We'll display the caption, and also the caption as a token of IDs.
>
> **[4:23](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/implementing-utility-functions-for-training-data?u=76281980&t=263)** Here is the image.
>
> **[4:25](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/implementing-utility-functions-for-training-data?u=76281980&t=265)** You can see the token IDs that make up the caption, and you can also see the actual caption here at the bottom.
>
> **[4:32](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/implementing-utility-functions-for-training-data?u=76281980&t=272)** Note that the caption starts with a SOS or start off sentence token.
>
> **[4:37](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/implementing-utility-functions-for-training-data?u=76281980&t=277)** Let's look at another sample image here.
>
> **[4:40](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/implementing-utility-functions-for-training-data?u=76281980&t=280)** This is the image at index 1500, and this is an image of some kind of balcony.
>
> **[4:46](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/implementing-utility-functions-for-training-data?u=76281980&t=286)** You can see the caption here below.
>
> **[4:48](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/implementing-utility-functions-for-training-data?u=76281980&t=288)** You can see the token IDs.
>
> **[4:49](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/implementing-utility-functions-for-training-data?u=76281980&t=289)** You can see that there are a few unknown words here in the caption text as well, so instead of the actual word, you can see the unknown token, the UNK.
>
> **[4:59](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/implementing-utility-functions-for-training-data?u=76281980&t=299)** A word is likely to be unknown because it hasn't occurred more than five times in our vocabulary.
>
> **[5:05](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/implementing-utility-functions-for-training-data?u=76281980&t=305)** Remember, that was the minimum frequency that we chose for words to make up our vocabulary.

> [!info]- Semantic Content
>
> **Code Keywords:** function (3), let (2), pass (1), require (1)
> **CLI Commands:** make (2), find (1), cat (1)
> **Env Vars:** rnn (2), sos (1), unk (1)
> **Definitions:** is a  (2), is an  (1)
> **Warnings:** note that (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Building the encoder CNN
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/building-the-encoder-cnn?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/building-the-encoder-cnn?u=76281980&t=1)** - [Instructor] We are now ready to construct the encoder for our image captioning model.
>
> **[0:05](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/building-the-encoder-cnn?u=76281980&t=5)** Now, the batch size that you're going to be using for training is 128.
>
> **[0:09](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/building-the-encoder-cnn?u=76281980&t=9)** So I set that up in a variable.
>
> **[0:11](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/building-the-encoder-cnn?u=76281980&t=11)** The index of the padding in our vocabulary is the pad_idx, and I've constructed the data loader that we'll use to train our encoder decoder model.
>
> **[0:22](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/building-the-encoder-cnn?u=76281980&t=22)** The data loader is the class that makes available the training data in batches, when we train our model.
>
> **[0:29](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/building-the-encoder-cnn?u=76281980&t=29)** Observe how we use the generate batch captions callable object here.
>
> **[0:35](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/building-the-encoder-cnn?u=76281980&t=35)** We specify the pad index and that this is the first batch.
>
> **[0:39](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/building-the-encoder-cnn?u=76281980&t=39)** And the data loader will use this collate function, that we have specified, to generate batches of image data and the corresponding captions, such that all of the captions in a batch will be of the same length.
>
> **[0:52](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/building-the-encoder-cnn?u=76281980&t=52)** The length of the longest sequence in that batch.
>
> **[0:56](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/building-the-encoder-cnn?u=76281980&t=56)** The encoder model is a convolutional neural network which we'll use to generate image representations.
>
> **[1:03](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/building-the-encoder-cnn?u=76281980&t=63)** These image representations will be fed into the decoder, and we'll use that to generate a caption for that image.
>
> **[1:11](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/building-the-encoder-cnn?u=76281980&t=71)** Convolutional neural network that we use for our encoder is the ResNet-50 pre-train model.
>
> **[1:16](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/building-the-encoder-cnn?u=76281980&t=76)** ResNet-50 is a very powerful image classification model.
>
> **[1:21](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/building-the-encoder-cnn?u=76281980&t=81)** It was first released in 2015, when it won the ImageNet challenge.
>
> **[1:25](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/building-the-encoder-cnn?u=76281980&t=85)** ResNet stands for residual network.
>
> **[1:29](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/building-the-encoder-cnn?u=76281980&t=89)** Now, if you look at the structure of this model, you'll see a number of convolutional and pooling blocks.
>
> **[1:35](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/building-the-encoder-cnn?u=76281980&t=95)** At the very bottom, you'll see that the input to the final linear classifier for this convolution neural network, takes in input of dimensionality 2048.
>
> **[1:46](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/building-the-encoder-cnn?u=76281980&t=106)** This means that every image is represented using an embedding 2048 in size.
>
> **[1:52](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/building-the-encoder-cnn?u=76281980&t=112)** And we need to remember this dimensionality.
>
> **[1:55](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/building-the-encoder-cnn?u=76281980&t=115)** We'll use it in our encoder.
>
> **[1:57](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/building-the-encoder-cnn?u=76281980&t=117)** Now, let's set up our encoder, using this ResNet-50 pre-trained model.
>
> **[2:01](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/building-the-encoder-cnn?u=76281980&t=121)** There is the class for the encoder, the encoder convolution neural network, which inherit from nn.Module.
>
> **[2:07](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/building-the-encoder-cnn?u=76281980&t=127)** In the init function, we take in the size of the embedding that we want to generate.
>
> **[2:13](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/building-the-encoder-cnn?u=76281980&t=133)** The embedding size will be the size of the initial hidden state that we feed into the DecoderRNN.
>
> **[2:19](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/building-the-encoder-cnn?u=76281980&t=139)** We use a pre-trained ResNet-50 model to generate embeddings.
>
> **[2:25](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/building-the-encoder-cnn?u=76281980&t=145)** We won't use the pre-trained weights of the model.
>
> **[2:28](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/building-the-encoder-cnn?u=76281980&t=148)** We're not going to actually train this model.
>
> **[2:30](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/building-the-encoder-cnn?u=76281980&t=150)** We are going to generate embeddings, using the trained model.
>
> **[2:33](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/building-the-encoder-cnn?u=76281980&t=153)** Requires_grad is false, because you're not propagating gradients through this network.
>
> **[2:38](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/building-the-encoder-cnn?u=76281980&t=158)** That's not part of the training.
>
> **[2:40](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/building-the-encoder-cnn?u=76281980&t=160)** Now, in order to generate image representations, we'll use all of the layers in this model except the last layer.
>
> **[2:47](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/building-the-encoder-cnn?u=76281980&t=167)** Remember the last layer is a simple linear classifier.
>
> **[2:51](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/building-the-encoder-cnn?u=76281980&t=171)** We only want the image representation from the last, but one layer, of the ResNet model.
>
> **[2:58](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/building-the-encoder-cnn?u=76281980&t=178)** So I set up a sequential model with all of the layers except the last linear classifier, and I add in my own linear layer to generate our encoder embeddings.
>
> **[3:09](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/building-the-encoder-cnn?u=76281980&t=189)** The dimensionality of the input to this linear layer will be 2048.
>
> **[3:14](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/building-the-encoder-cnn?u=76281980&t=194)** That is the input dimensionality of the last linear layer in ResNet.
>
> **[3:19](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/building-the-encoder-cnn?u=76281980&t=199)** The final hidden state output by the encoder will be of embed_size.
>
> **[3:24](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/building-the-encoder-cnn?u=76281980&t=204)** That's what we specify.
>
> **[3:26](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/building-the-encoder-cnn?u=76281980&t=206)** We then define the method that contains the code for the forward pass through this encoder.
>
> **[3:31](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/building-the-encoder-cnn?u=76281980&t=211)** In passing the images, we generate the features corresponding to these images, by passing the images through the ResNet backbone.
>
> **[3:40](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/building-the-encoder-cnn?u=76281980&t=220)** We then reshape the features so that it can be fed into the final linear classification layer.
>
> **[3:46](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/building-the-encoder-cnn?u=76281980&t=226)** And we finally generate our own encoder embedding.
>
> **[3:51](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/building-the-encoder-cnn?u=76281980&t=231)** This embedding is a vector representation of all of the input images in this batch.
>
> **[3:57](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/building-the-encoder-cnn?u=76281980&t=237)** Observe that at every step I've specified, the shape of the data, as it's passed into that layer, and the output shape of the data as well.
>
> **[4:06](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/building-the-encoder-cnn?u=76281980&t=246)** This is useful for you to track what exactly is going on in the neural network.

> [!info]- Semantic Content
>
> **Definitions:** is a  (4), stands for (1), means that (1)
> **Code Keywords:** function (2), let (1), module (1), pass (1)
> **Code Identifiers:** pad_idx (1), embed_size (1)
> **Prerequisites:** set up (2)
> **Speakers:** - [instructor] (1)

#### Building the decoder RNN
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/building-the-decoder-rnn?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/building-the-decoder-rnn?u=76281980&t=1)** - [Instructor] Now that you've set up the encoder CNN, the next step is to set up the decoder RNN.
>
> **[0:05](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/building-the-decoder-rnn?u=76281980&t=5)** And this decoder recurrent neural network is what we'll use to generate captions.
>
> **[0:11](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/building-the-decoder-rnn?u=76281980&t=11)** The init method takes in a number of variables as input: The embed_size.
>
> **[0:16](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/building-the-decoder-rnn?u=76281980&t=16)** That is the size of the embedding for each word in the vocabulary.
>
> **[0:20](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/building-the-decoder-rnn?u=76281980&t=20)** Hidden_size, the size of the hidden state of the RNN.
>
> **[0:23](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/building-the-decoder-rnn?u=76281980&t=23)** Vocab_size is the length of our vocabulary.
>
> **[0:28](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/building-the-decoder-rnn?u=76281980&t=28)** Now, you can build RNNs with more than one layer.
>
> **[0:32](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/building-the-decoder-rnn?u=76281980&t=32)** By default, I've set num_layers to 1.
>
> **[0:34](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/building-the-decoder-rnn?u=76281980&t=34)** This is something that you can tweak.
>
> **[0:36](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/building-the-decoder-rnn?u=76281980&t=36)** The first step is to set up the embedding layer.
>
> **[0:39](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/building-the-decoder-rnn?u=76281980&t=39)** The embedding layer is used to generate embedding representations for the input words.
>
> **[0:44](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/building-the-decoder-rnn?u=76281980&t=44)** Remember, we input the words as one-hot vectors.
>
> **[0:48](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/building-the-decoder-rnn?u=76281980&t=48)** That is, every vector will have a size equal to the size of our vocabulary.
>
> **[0:53](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/building-the-decoder-rnn?u=76281980&t=53)** The embedding layer will take the one-hot vector representation of a word and generate a lower dimensionality embedding.
>
> **[1:01](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/building-the-decoder-rnn?u=76281980&t=61)** The embeddings will be found during the training process.
>
> **[1:05](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/building-the-decoder-rnn?u=76281980&t=65)** Next, we specify the cell that makes up the layers of our recurrent neural network.
>
> **[1:10](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/building-the-decoder-rnn?u=76281980&t=70)** Here, I've used an LSTM, or a long short-term memory cell.
>
> **[1:15](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/building-the-decoder-rnn?u=76281980&t=75)** The first input, embed_size, is the number of expected features in the input x.
>
> **[1:22](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/building-the-decoder-rnn?u=76281980&t=82)** That is the number of expected features to represent a word.
>
> **[1:25](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/building-the-decoder-rnn?u=76281980&t=85)** The second input argument here, hidden_size, is the number of features in the hidden state edge of this LSTM.
>
> **[1:33](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/building-the-decoder-rnn?u=76281980&t=93)** Number of layers indicates how many recurrent layers a single cell will have.
>
> **[1:38](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/building-the-decoder-rnn?u=76281980&t=98)** If you set this to 2, you'll have two LSTM cells stacked one on top of the other.
>
> **[1:43](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/building-the-decoder-rnn?u=76281980&t=103)** Batch_first equal to True indicates that, in the input, the first dimension represents the batch dimension.
>
> **[1:52](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/building-the-decoder-rnn?u=76281980&t=112)** This is the LSTM cell that will be unrolled to make up the layers of our neural network.
>
> **[1:57](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/building-the-decoder-rnn?u=76281980&t=117)** Then finally, at the very end, we have a linear layer that produces the final output.
>
> **[2:04](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/building-the-decoder-rnn?u=76281980&t=124)** It takes in an input of size_hidden and produces a one-hot vector representing a word from our vocabulary.
>
> **[2:12](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/building-the-decoder-rnn?u=76281980&t=132)** The one-hot vector is a word from the generated caption.
>
> **[2:17](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/building-the-decoder-rnn?u=76281980&t=137)** In the forward pass through this decoder RNN, we take in the features of the image itself.
>
> **[2:24](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/building-the-decoder-rnn?u=76281980&t=144)** This is the output of our encoder.
>
> **[2:27](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/building-the-decoder-rnn?u=76281980&t=147)** We also take in the tensor corresponding to the image captions for each of the images in the batch.
>
> **[2:34](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/building-the-decoder-rnn?u=76281980&t=154)** The image captions are in one-hot form.
>
> **[2:37](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/building-the-decoder-rnn?u=76281980&t=157)** We pass these through the embedding layer to generate embeddings for each word in each image caption.
>
> **[2:44](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/building-the-decoder-rnn?u=76281980&t=164)** Every word in the caption text is now represented using embeddings.
>
> **[2:49](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/building-the-decoder-rnn?u=76281980&t=169)** Now, if you remember our encoder-decoder model, the first input to the decoder is always the hidden state of the encoder.
>
> **[2:56](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/building-the-decoder-rnn?u=76281980&t=176)** So concatenate the hidden state of the encoder with the embeddings representing the caption text.
>
> **[3:03](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/building-the-decoder-rnn?u=76281980&t=183)** Now, we take this entire sequence, starting with the hidden state output of the encoder and the caption text, and feed that through our LSTM layers in our recurrent neural network.
>
> **[3:17](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/building-the-decoder-rnn?u=76281980&t=197)** We then fit the final linear layer to get the one-hot encoded representations of the generated captions.
>
> **[3:26](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/building-the-decoder-rnn?u=76281980&t=206)** The caption x and the encoder output that is the representation of each image will be used to train our decoder.
>
> **[3:34](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/building-the-decoder-rnn?u=76281980&t=214)** This is the forward path through the neural network.
>
> **[3:36](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/building-the-decoder-rnn?u=76281980&t=216)** Next, let's see how this decoder RNN will generate captions given an image.
>
> **[3:42](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/building-the-decoder-rnn?u=76281980&t=222)** When we invoke generate_captions, we'll pass in the encoder output that is in the inputs variable.
>
> **[3:49](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/building-the-decoder-rnn?u=76281980&t=229)** Hidden will be set to 1.
>
> **[3:50](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/building-the-decoder-rnn?u=76281980&t=230)** The max length of the caption that we want to generate, I've set to 20 by default.
>
> **[3:55](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/building-the-decoder-rnn?u=76281980&t=235)** And we'll pass in the vocabulary that the generator should use for the caption.
>
> **[4:01](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/building-the-decoder-rnn?u=76281980&t=241)** The vocab object contains a mapping of index to word.
>
> **[4:05](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/building-the-decoder-rnn?u=76281980&t=245)** We may generate captions in batches.
>
> **[4:07](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/building-the-decoder-rnn?u=76281980&t=247)** So extract the size of the batch that is the first dimension of the inputs answer.
>
> **[4:13](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/building-the-decoder-rnn?u=76281980&t=253)** As we generate captions, we'll have the IDs corresponding to individual words.
>
> **[4:18](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/building-the-decoder-rnn?u=76281980&t=258)** We'll store that in this captions list.
>
> **[4:21](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/building-the-decoder-rnn?u=76281980&t=261)** The maximum length of the caption generated will be max_len.
>
> **[4:25](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/building-the-decoder-rnn?u=76281980&t=265)** The caption can be shorter if we encounter an EOS token before we reach max length.
>
> **[4:31](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/building-the-decoder-rnn?u=76281980&t=271)** Pass the initial input to the LSTM cell and get the output of the LSTM and the next hidden state.
>
> **[4:40](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/building-the-decoder-rnn?u=76281980&t=280)** We then pass the output through the last linear layer to get a one-hot representation of the predicted word.
>
> **[4:47](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/building-the-decoder-rnn?u=76281980&t=287)** We then reshape the output so that we can get the index of the predicted word using argmax.
>
> **[4:53](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/building-the-decoder-rnn?u=76281980&t=293)** We append the index of the predicted word from our decoder RNN to vocab.
>
> **[4:59](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/building-the-decoder-rnn?u=76281980&t=299)** If we find that the word token is the EOS, or the end-of-sentence token, we simply break out of this for loop.
>
> **[5:06](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/building-the-decoder-rnn?u=76281980&t=306)** We've got the entire caption text predicted by our decoder.
>
> **[5:10](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/building-the-decoder-rnn?u=76281980&t=310)** If we haven't reached the end of the caption, then we use the current word to predict the next word in the sequence.
>
> **[5:17](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/building-the-decoder-rnn?u=76281980&t=317)** So we get the embedding of the current predicted word, that is inputs, and that input is then fed back to the LSTM, along with the hidden state output of the previous layer in our network.
>
> **[5:32](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/building-the-decoder-rnn?u=76281980&t=332)** Once the entire caption has been generated, we convert the index representations of the caption to actual words using the vocab object.

> [!info]- Semantic Content
>
> **Env Vars:** lstm (8), rnn (5), eos (2), cnn (1)
> **Code Keywords:** pass (6), default, (1), finally, (1), let (1), default. (1)
> **Code Identifiers:** embed_size (2), num_layers (1), hidden_size (1), size_hidden (1), generate_captions (1)
> **Prerequisites:** set up (3)
> **CLI Commands:** make (1), find (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Setting up the sequence to sequence model
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/setting-up-the-sequence-to-sequence-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/setting-up-the-sequence-to-sequence-model?u=76281980&t=1)** - Having implemented the encoder and the decoder.
>
> **[0:03](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/setting-up-the-sequence-to-sequence-model?u=76281980&t=3)** we are now ready to build our sequence to sequence model and that's now very simple because of the encoder and decoder objects that we've set up.
>
> **[0:10](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/setting-up-the-sequence-to-sequence-model?u=76281980&t=10)** Let's set up the image to caption class.
>
> **[0:14](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/setting-up-the-sequence-to-sequence-model?u=76281980&t=14)** This class takes in a number of input parameters needed to initialize the encoder as well as the decoder embedding size, hidden size, vocab size.
>
> **[0:22](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/setting-up-the-sequence-to-sequence-model?u=76281980&t=22)** Num layers in the decoded set by default to one.
>
> **[0:25](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/setting-up-the-sequence-to-sequence-model?u=76281980&t=25)** The only other initialization needed is to set up the encoder convolution neural network and the decoder recurrent neural network by passing in the right input parameters.
>
> **[0:37](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/setting-up-the-sequence-to-sequence-model?u=76281980&t=37)** The forward pass through this model is straightforward.
>
> **[0:40](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/setting-up-the-sequence-to-sequence-model?u=76281980&t=40)** We accept the training data in the form of images and the corresponding captions.
>
> **[0:44](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/setting-up-the-sequence-to-sequence-model?u=76281980&t=44)** We pass in the images through the encoder and get representations for every image in the batch.
>
> **[0:52](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/setting-up-the-sequence-to-sequence-model?u=76281980&t=52)** These representations form the encoder output that are then into the decoder, along with the captions.
>
> **[0:59](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/setting-up-the-sequence-to-sequence-model?u=76281980&t=59)** Next, let's instantiate this image to caption model.
>
> **[1:03](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/setting-up-the-sequence-to-sequence-model?u=76281980&t=63)** We use an embedding size of 300.
>
> **[1:05](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/setting-up-the-sequence-to-sequence-model?u=76281980&t=65)** The hidden size of the RNN will be 512.
>
> **[1:09](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/setting-up-the-sequence-to-sequence-model?u=76281980&t=69)** The vocab size is the size of the words or the vocabulary in the flicker dataset.
>
> **[1:14](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/setting-up-the-sequence-to-sequence-model?u=76281980&t=74)** This includes all the additional tokens, to start of sentence, end of sentence, pad and unknown.
>
> **[1:19](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/setting-up-the-sequence-to-sequence-model?u=76281980&t=79)** We use two layer RNN, so num layers, I have set to 2.
>
> **[1:24](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/setting-up-the-sequence-to-sequence-model?u=76281980&t=84)** So we'll have two (indistinct) cells stacked one on top of the other.
>
> **[1:28](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/setting-up-the-sequence-to-sequence-model?u=76281980&t=88)** In every layer of the recurrent neural network I've specified the learning rate of 0.0001.
>
> **[1:36](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/setting-up-the-sequence-to-sequence-model?u=76281980&t=96)** This is something that you can tweak and see how things work.
>
> **[1:40](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/setting-up-the-sequence-to-sequence-model?u=76281980&t=100)** Next step is to instantiate our sequence-to-sequence model image to caption by passing in the right parameters.
>
> **[1:47](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/setting-up-the-sequence-to-sequence-model?u=76281980&t=107)** Remember, we want to train this model on the GPU so I call model to device, to place the model parameters on the GPU.
>
> **[1:57](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/setting-up-the-sequence-to-sequence-model?u=76281980&t=117)** We'll use the cross entropy loss to compare the probability distribution of the output generated word with the probability distribution of the actual word in the vocabulary.
>
> **[2:08](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/setting-up-the-sequence-to-sequence-model?u=76281980&t=128)** Now, while computing the cross entropy loss we'll ignore all the extra padding that we've given the caption sentences.
>
> **[2:15](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/setting-up-the-sequence-to-sequence-model?u=76281980&t=135)** If you remember, we padded the caption sentences, so that all captions in the same batch have the same length.
>
> **[2:22](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/setting-up-the-sequence-to-sequence-model?u=76281980&t=142)** This allows our decoder RNN to be unrolled to the same number of layers.
>
> **[2:28](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/setting-up-the-sequence-to-sequence-model?u=76281980&t=148)** And finally, we'll use the 'Adam' optimizer for training.
>
> **[2:32](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/setting-up-the-sequence-to-sequence-model?u=76281980&t=152)** When you run this code and instantiate our sequence-to-sequence model, the pre-trained weights of the resnet 50 model, that we use In the encoder, will be downloaded and loaded to initialize our resnet 50 model within the end quarter.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), pass (2), class. (1), finally, (1)
> **Env Vars:** rnn (3), gpu (2)
> **Prerequisites:** set up (2), initialization (1)
> **Versions:** 0.0001 (1)
> **Speakers:** - having (1)

#### Training the image captioning model
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-image-captioning-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-image-captioning-model?u=76281980&t=1)** - [Narrator] We are now finally ready to train, our sequence to sequence model, and see what kind of captions this model generates.
>
> **[0:09](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-image-captioning-model?u=76281980&t=9)** Remember, we are not using attention.
>
> **[0:11](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-image-captioning-model?u=76281980&t=11)** I'm going to train for 10 epochs.
>
> **[0:13](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-image-captioning-model?u=76281980&t=13)** And I'm going print out a log to screen, every hundred iterations.
>
> **[0:18](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-image-captioning-model?u=76281980&t=18)** That is every hundred batches.
>
> **[0:20](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-image-captioning-model?u=76281980&t=20)** I run two for loops here, one for every epoch.
>
> **[0:23](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-image-captioning-model?u=76281980&t=23)** And in each epoch, I iterate over the entire dataset.
>
> **[0:26](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-image-captioning-model?u=76281980&t=26)** So I run an inner for loop, for my training data, accessed in patches.
>
> **[0:33](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-image-captioning-model?u=76281980&t=33)** I have the images and captions entered for every batch.
>
> **[0:38](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-image-captioning-model?u=76281980&t=38)** I'm now going to place these tensors, on the Kuda device on the GPU, so that the entire training runs on the GPU.
>
> **[0:45](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-image-captioning-model?u=76281980&t=45)** I'll zero out the gradients of the optimizer.
>
> **[0:48](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-image-captioning-model?u=76281980&t=48)** And I'll pass the image and captions.
>
> **[0:50](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-image-captioning-model?u=76281980&t=50)** As a forward pass through the model, and get the outputs of our sequence to sequence model.
>
> **[0:56](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-image-captioning-model?u=76281980&t=56)** I'll then reshape the data.
>
> **[0:58](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-image-captioning-model?u=76281980&t=58)** So that we can compute the cross entropy loss, between the output generated by the model, and the actual captions in the real data.
>
> **[1:07](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-image-captioning-model?u=76281980&t=67)** In the training data.
>
> **[1:09](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-image-captioning-model?u=76281980&t=69)** We then make a backward pass to compute gradients, for the decoder.
>
> **[1:14](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-image-captioning-model?u=76281980&t=74)** And then call optimizer.step, to update the model parameters.
>
> **[1:18](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-image-captioning-model?u=76281980&t=78)** And we do this for every batch.
>
> **[1:20](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-image-captioning-model?u=76281980&t=80)** Now for every hundred batches, I'm going to print out a bit of information to screen.
>
> **[1:25](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-image-captioning-model?u=76281980&t=85)** I'll also take an image at random, and generate a caption for that image, based on our current model.
>
> **[1:32](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-image-captioning-model?u=76281980&t=92)** In order to evaluate an image, I call model.eval.
>
> **[1:36](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-image-captioning-model?u=76281980&t=96)** So that our model is set to the evaluation phase.
>
> **[1:39](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-image-captioning-model?u=76281980&t=99)** I make sure I don't compute gradients, and I access a single image from the next batch of data.
>
> **[1:45](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-image-captioning-model?u=76281980&t=105)** I passed that image through the model end quarter, to get the feature representations of the image.
>
> **[1:51](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-image-captioning-model?u=76281980&t=111)** And then I use these feature representation output, of the CNN, to generate a caption for that image.
>
> **[1:57](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-image-captioning-model?u=76281980&t=117)** And I'll use the display image utility that we had set up earlier, to display the image and the caption, generated by our network.
>
> **[2:05](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-image-captioning-model?u=76281980&t=125)** And I'll switch back to model.train, so we can continue training our model.
>
> **[2:09](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-image-captioning-model?u=76281980&t=129)** This way we'll see how the captions improve, as the model proceeds through training.
>
> **[2:15](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-image-captioning-model?u=76281980&t=135)** Let's start the training process.
>
> **[2:17](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-image-captioning-model?u=76281980&t=137)** At about one epoch, you can see that, the sentence is just all As.
>
> **[2:22](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-image-captioning-model?u=76281980&t=142)** Starting with an SOS token, ending with an EOS token.
>
> **[2:26](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-image-captioning-model?u=76281980&t=146)** Let's see how things improve, after a few more batches of training.
>
> **[2:29](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-image-captioning-model?u=76281980&t=149)** Still nothing really legit that has been generated.
>
> **[2:33](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-image-captioning-model?u=76281980&t=153)** After Epoch 1, you can see a few words showing up.
>
> **[2:37](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-image-captioning-model?u=76281980&t=157)** The caption talks about a man, and I guess there are indeed men in this image.
>
> **[2:41](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-image-captioning-model?u=76281980&t=161)** Things seem to be getting a little better.
>
> **[2:44](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-image-captioning-model?u=76281980&t=164)** Let's wait for some more epochs.
>
> **[2:45](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-image-captioning-model?u=76281980&t=165)** After Epoch 3, you can see that the captions, start getting a little more meaningful.
>
> **[2:50](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-image-captioning-model?u=76281980&t=170)** They're not right yet.
>
> **[2:52](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-image-captioning-model?u=76281980&t=172)** It talks about a man in a red shirt.
>
> **[2:53](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-image-captioning-model?u=76281980&t=173)** There's no red shirt here.
>
> **[2:55](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-image-captioning-model?u=76281980&t=175)** A white dog.
>
> **[2:56](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-image-captioning-model?u=76281980&t=176)** No real dog, here.
>
> **[2:57](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-image-captioning-model?u=76281980&t=177)** But the captions are getting more complete.
>
> **[3:01](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-image-captioning-model?u=76281980&t=181)** At about, Epoch 7, you'll find that things start making much more sense.
>
> **[3:07](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-image-captioning-model?u=76281980&t=187)** Here is a caption generated for this image.
>
> **[3:08](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-image-captioning-model?u=76281980&t=188)** A dog is running through the grass.
>
> **[3:10](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-image-captioning-model?u=76281980&t=190)** There is a dog, there is grass.
>
> **[3:12](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-image-captioning-model?u=76281980&t=192)** The dog is not running, but the captions are getting better.
>
> **[3:15](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-image-captioning-model?u=76281980&t=195)** And you'll kind of see this gradual improvement over time.
>
> **[3:20](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-image-captioning-model?u=76281980&t=200)** At the end of training at about 10 Epochs, you can see the caption is about a group of people, standing somewhere.
>
> **[3:26](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-image-captioning-model?u=76281980&t=206)** That's pretty good.
>
> **[3:28](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-image-captioning-model?u=76281980&t=208)** There is another caption about a man in a red shirt, riding a bike on a dirt road.
>
> **[3:32](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-image-captioning-model?u=76281980&t=212)** That's pretty good.
>
> **[3:34](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-image-captioning-model?u=76281980&t=214)** And then there's something about a man in a blue shirt, where there are no blue shirts here.
>
> **[3:39](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-image-captioning-model?u=76281980&t=219)** So the captions are getting better, but they're not perfect.
>
> **[3:41](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-image-captioning-model?u=76281980&t=221)** And you'll find that when you train such a model, without attention.
>
> **[3:46](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-image-captioning-model?u=76281980&t=226)** You may need to train for a very long time, to get really good captions.
>
> **[3:49](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-image-captioning-model?u=76281980&t=229)** And even then, your model may never be very good.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (3), let (3), switch (1), continue (1)
> **Env Vars:** gpu (2), cnn (1), sos (1), eos (1)
> **CLI Commands:** make (2), find (2)
> **Definitions:** is a  (2)
> **Prerequisites:** set up (1)
> **Speakers:** - [narrator] (1)


### 5. Image Captioning Model Using Attention

#### Loading the dataset and setting up utility functions
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/loading-the-dataset-and-setting-up-utility-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/loading-the-dataset-and-setting-up-utility-functions?u=76281980&t=0)** - In this demo, we'll see how we can improve our image captioning model using attention.
>
> **[0:06](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/loading-the-dataset-and-setting-up-utility-functions?u=76281980&t=6)** We'll use Bahdanau additive attention.
>
> **[0:08](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/loading-the-dataset-and-setting-up-utility-functions?u=76281980&t=8)** We'll get our decoded R & N to pay attention to important portions of the input image when it generates the captions for that image.
>
> **[0:19](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/loading-the-dataset-and-setting-up-utility-functions?u=76281980&t=19)** Now, a lot of the code is exactly the same as before, you can see all of the import statements are the same.
>
> **[0:25](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/loading-the-dataset-and-setting-up-utility-functions?u=76281980&t=25)** We need to mount our Google Drive folder so that our data set is accessible within this notebook.
>
> **[0:31](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/loading-the-dataset-and-setting-up-utility-functions?u=76281980&t=31)** The code for that is exactly the same.
>
> **[0:34](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/loading-the-dataset-and-setting-up-utility-functions?u=76281980&t=34)** Once we mounted Google Drive we'll extract the images and captions from the zip file and take a look at the captions' text.
>
> **[0:42](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/loading-the-dataset-and-setting-up-utility-functions?u=76281980&t=42)** Since you've seen this code before I'm going to quickly run through all of this code.
>
> **[0:47](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/loading-the-dataset-and-setting-up-utility-functions?u=76281980&t=47)** Just hit shift, enter on all of the cells.
>
> **[0:50](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/loading-the-dataset-and-setting-up-utility-functions?u=76281980&t=50)** We'll use the G-Q for training so that training can run within 30 to 50 minutes.
>
> **[0:54](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/loading-the-dataset-and-setting-up-utility-functions?u=76281980&t=54)** I've already enabled the G-Q run time for this notebook.
>
> **[0:59](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/loading-the-dataset-and-setting-up-utility-functions?u=76281980&t=59)** As before, we have the tokenizer to tokenize the text in the captions and the counter to keep track of the frequency of the words in the training data.
>
> **[1:08](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/loading-the-dataset-and-setting-up-utility-functions?u=76281980&t=68)** We'll see how the tokenizer works.
>
> **[1:10](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/loading-the-dataset-and-setting-up-utility-functions?u=76281980&t=70)** You can see that it extracts the individual word.
>
> **[1:13](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/loading-the-dataset-and-setting-up-utility-functions?u=76281980&t=73)** It also pre-process the words by converting all of the text to lowercase.
>
> **[1:17](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/loading-the-dataset-and-setting-up-utility-functions?u=76281980&t=77)** We iterate through all of the captions in the training data to generate a vocabulary.
>
> **[1:22](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/loading-the-dataset-and-setting-up-utility-functions?u=76281980&t=82)** We'll use only those words, which have occurred a minimum of five times in the training data frequency equal to five.
>
> **[1:30](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/loading-the-dataset-and-setting-up-utility-functions?u=76281980&t=90)** As before, we'll add in the special tokens to our vocabulary, the unknown, add start of sentence and end of sentence token.
>
> **[1:38](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/loading-the-dataset-and-setting-up-utility-functions?u=76281980&t=98)** We'll insert each of these and we set the default index to the unknown token exactly as we did before.
>
> **[1:45](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/loading-the-dataset-and-setting-up-utility-functions?u=76281980&t=105)** Next we have the data set class.
>
> **[1:48](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/loading-the-dataset-and-setting-up-utility-functions?u=76281980&t=108)** Now the core for this class is unchanged.
>
> **[1:50](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/loading-the-dataset-and-setting-up-utility-functions?u=76281980&t=110)** I don't really need to go through this again.
>
> **[1:53](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/loading-the-dataset-and-setting-up-utility-functions?u=76281980&t=113)** The data set class accesses the images and the corresponding captions and converts them to a denser format to be used by the data loader.
>
> **[2:01](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/loading-the-dataset-and-setting-up-utility-functions?u=76281980&t=121)** It also converts the captions text to be represented in the one-hot and coded format.
>
> **[2:07](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/loading-the-dataset-and-setting-up-utility-functions?u=76281980&t=127)** We have the same callable class generate batch captions that is used by the data loader so that the caption text in each batch of training data has the same length.
>
> **[2:20](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/loading-the-dataset-and-setting-up-utility-functions?u=76281980&t=140)** This is done by padding the sentences in the caption text so that within a batch, the length of each caption is equal to the length of the longest caption text in that batch.
>
> **[2:33](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/loading-the-dataset-and-setting-up-utility-functions?u=76281980&t=153)** We have the same utility function to display an image and the corresponding caption for that image.
>
> **[2:39](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/loading-the-dataset-and-setting-up-utility-functions?u=76281980&t=159)** The transforms that will apply to the input images are the same as before.
>
> **[2:43](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/loading-the-dataset-and-setting-up-utility-functions?u=76281980&t=163)** Remember, image sizes have to be at least 224 by 224, so that the pre-trained resonant model can use those images.
>
> **[2:53](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/loading-the-dataset-and-setting-up-utility-functions?u=76281980&t=173)** We instantiate the flicker data set, and once we have that, let's quickly confirm that we can access the individual images and call display image on them.
>
> **[3:02](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/loading-the-dataset-and-setting-up-utility-functions?u=76281980&t=182)** Here's an image at random.
>
> **[3:04](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/loading-the-dataset-and-setting-up-utility-functions?u=76281980&t=184)** You can see the image and the corresponding caption.
>
> **[3:08](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/loading-the-dataset-and-setting-up-utility-functions?u=76281980&t=188)** Every caption starts with an SOS or start of string token and end with an or EOS of string token.
>
> **[3:15](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/loading-the-dataset-and-setting-up-utility-functions?u=76281980&t=195)** Next, let's set up our bad sites.
>
> **[3:18](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/loading-the-dataset-and-setting-up-utility-functions?u=76281980&t=198)** That is 128.
>
> **[3:19](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/loading-the-dataset-and-setting-up-utility-functions?u=76281980&t=199)** Our bad index is the index of the pad token in our vocabulary, and let's instantiate the data loader.
>
> **[3:27](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/loading-the-dataset-and-setting-up-utility-functions?u=76281980&t=207)** The data loader uses the generate batch captions callable in order to generate caption text all of the same size within a batch.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), class. (1), function (1)
> **Env Vars:** sos (1), eos (1)
> **Exercise Files:** zip file (1)
> **Prerequisites:** set up (1)
> **Speakers:** - in (1)

#### The encoder CNN generating unrolled feature maps
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-encoder-cnn-generating-unrolled-feature-maps?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-encoder-cnn-generating-unrolled-feature-maps?u=76281980&t=1)** - Once again, in the end coder network, we'll be using the Resnet-50 pretrained model, but we'll choose the output of a different layer.
>
> **[0:09](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-encoder-cnn-generating-unrolled-feature-maps?u=76281980&t=9)** So here's the architecture of the Resnet-50 model.
>
> **[0:12](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-encoder-cnn-generating-unrolled-feature-maps?u=76281980&t=12)** The last convolutional block, that is layer four, generates feature map representations of the input image.
>
> **[0:21](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-encoder-cnn-generating-unrolled-feature-maps?u=76281980&t=21)** These feature map representations will be the input to our attention model, so that the attention model can direct the decoder to pay attention to the right portions of the input image.
>
> **[0:34](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-encoder-cnn-generating-unrolled-feature-maps?u=76281980&t=34)** In the Resnet-50 model, these feature map representations are then fed in through an average pulling layer and then finally through the last linear classifier layer.
>
> **[0:44](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-encoder-cnn-generating-unrolled-feature-maps?u=76281980&t=44)** But remember, in our attention model, we are interested in the feature map representations and that is the output that we'll use from Resnet.
>
> **[0:51](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-encoder-cnn-generating-unrolled-feature-maps?u=76281980&t=51)** Here is our end coder of CNN within the init function.
>
> **[0:55](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-encoder-cnn-generating-unrolled-feature-maps?u=76281980&t=55)** That's just a simple initialization.
>
> **[0:58](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-encoder-cnn-generating-unrolled-feature-maps?u=76281980&t=58)** We also instantiate the Resnet-50 model, we use pretrained weight.
>
> **[1:03](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-encoder-cnn-generating-unrolled-feature-maps?u=76281980&t=63)** The Resnet-50 model will not retrain.
>
> **[1:06](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-encoder-cnn-generating-unrolled-feature-maps?u=76281980&t=66)** That is it's weights will not be updated during the training process of our image captioning model.
>
> **[1:12](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-encoder-cnn-generating-unrolled-feature-maps?u=76281980&t=72)** This is why we iterate over the Resnet model and set requires grad to false.
>
> **[1:17](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-encoder-cnn-generating-unrolled-feature-maps?u=76281980&t=77)** Now, remember that the output of the Resnet model that we are interested in is the output of the last convolutional block.
>
> **[1:26](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-encoder-cnn-generating-unrolled-feature-maps?u=76281980&t=86)** There are two layers after that; the average pooling layer and the final linear classifier.
>
> **[1:31](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-encoder-cnn-generating-unrolled-feature-maps?u=76281980&t=91)** We are not interested in those.
>
> **[1:31](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-encoder-cnn-generating-unrolled-feature-maps?u=76281980&t=91)** So we only select those modules of the Resnet-50 model that we are interested in.
>
> **[1:37](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-encoder-cnn-generating-unrolled-feature-maps?u=76281980&t=97)** That is everything but the last two layers.
>
> **[1:39](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-encoder-cnn-generating-unrolled-feature-maps?u=76281980&t=99)** We set up a new sequential module with all of the layers of Resnet, except the last two.
>
> **[1:46](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-encoder-cnn-generating-unrolled-feature-maps?u=76281980&t=106)** Now let's define the forward pass through this encoder of CNN.
>
> **[1:50](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-encoder-cnn-generating-unrolled-feature-maps?u=76281980&t=110)** The CNN operates on a batch of input images and reduces feature maps for each image.
>
> **[1:58](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-encoder-cnn-generating-unrolled-feature-maps?u=76281980&t=118)** Now, the last convolutional block of the Resnet-50 model reduces 2,048 feature maps, where each feature map is seven by seven.
>
> **[2:10](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-encoder-cnn-generating-unrolled-feature-maps?u=76281980&t=130)** So the dimensionality, when we pass in a batch of images through the Resnet, the dimensionality of the output will be batch size 2048. That's the number of feature maps.
>
> **[2:21](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-encoder-cnn-generating-unrolled-feature-maps?u=76281980&t=141)** Seven by seven, that is the height and the width of this feature map.
>
> **[2:25](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-encoder-cnn-generating-unrolled-feature-maps?u=76281980&t=145)** Now, how did we get the feature map size as seven by seven?
>
> **[2:28](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-encoder-cnn-generating-unrolled-feature-maps?u=76281980&t=148)** Well, it turns out the Resnet-50 model takes the original image size and because of all of the transformation that it applies, the image size is shrunk by 32.
>
> **[2:39](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-encoder-cnn-generating-unrolled-feature-maps?u=76281980&t=159)** So the final size of the feature map will be image size divided by 32, which gives us 7 2 24 by 32, gives us seven.
>
> **[2:48](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-encoder-cnn-generating-unrolled-feature-maps?u=76281980&t=168)** Passing our input batch of images through the Resnet model will give us these feature map representations of the image that will later on feed into the attention model.
>
> **[2:59](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-encoder-cnn-generating-unrolled-feature-maps?u=76281980&t=179)** Let's extract the individual dimensions from these feature maps.
>
> **[3:02](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-encoder-cnn-generating-unrolled-feature-maps?u=76281980&t=182)** We have the batch size and the number of feature maps, that's 2 0 4 8 and size one and size two give us the height and width of each feature map.
>
> **[3:12](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-encoder-cnn-generating-unrolled-feature-maps?u=76281980&t=192)** I'll reorganize these features to switch the axes around so that we can use them in our decoder.
>
> **[3:19](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-encoder-cnn-generating-unrolled-feature-maps?u=76281980&t=199)** So we'll end up with batch size as the first dimension, the height and width of the feature map as the second, and third dimensions and the number of feature maps as the last dimension.
>
> **[3:30](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-encoder-cnn-generating-unrolled-feature-maps?u=76281980&t=210)** I'm now going to unroll these feature map representations, batch size, then the seven by seven feature maps get flattened to be a single 49 pixel vector.
>
> **[3:44](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-encoder-cnn-generating-unrolled-feature-maps?u=76281980&t=224)** So we'll get 2 0 4 8 of these 49 pixel vectors for each image.
>
> **[3:50](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-encoder-cnn-generating-unrolled-feature-maps?u=76281980&t=230)** This is the structure of the data that will return from the encoder.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), pass (2), function (1), module (1), switch (1)
> **Env Vars:** cnn (3)
> **Prerequisites:** initialization (1), set up (1)
> **Speakers:** - once (1)

#### Implementing Bahdanau attention
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/implementing-bahdanau-attention?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/implementing-bahdanau-attention?u=76281980&t=1)** - Next up, we define the attention module that allows our decoder RNN to pay attention to important parts of the input image.
>
> **[0:10](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/implementing-bahdanau-attention?u=76281980&t=10)** We are using Bahdanau's Attention, that is additive attention, and you'll see that the operations that we perform on the features are the operations that we discussed for Bahdanau's Attention.
>
> **[0:21](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/implementing-bahdanau-attention?u=76281980&t=21)** Initialize the attention module by specifying the size of the encoder hidden state, the size of the decoder hidden state, and the size of the attention.
>
> **[0:32](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/implementing-bahdanau-attention?u=76281980&t=32)** These are the parameters of your attention module, initialize the member variable attention size to the attention size.
>
> **[0:39](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/implementing-bahdanau-attention?u=76281980&t=39)** In Bahdanau's Attention, we pass the encoder and decoder hidden states through a weights layer, and this is where we initialize the weights layer.
>
> **[0:49](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/implementing-bahdanau-attention?u=76281980&t=49)** full_A here is the trainable weight vector that generates the alignment scores.
>
> **[0:56](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/implementing-bahdanau-attention?u=76281980&t=56)** Here is what a forward pass through the attention model looks like.
>
> **[0:59](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/implementing-bahdanau-attention?u=76281980&t=59)** As an input, we accept the feature map representations from the encoder output and the previous decoder hidden state.
>
> **[1:08](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/implementing-bahdanau-attention?u=76281980&t=68)** In order to perform our operations here in the attention model, we add an extra one dimension to the decoder hidden state using the unsqueeze method.
>
> **[1:18](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/implementing-bahdanau-attention?u=76281980&t=78)** We pass the encoder output through the encoder weight to get the encoder attention.
>
> **[1:24](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/implementing-bahdanau-attention?u=76281980&t=84)** In a similar way, we pass the decoder hidden state through the decoder weights to get the decoder attention.
>
> **[1:31](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/implementing-bahdanau-attention?u=76281980&t=91)** In Bahdanau's Attention, the encoder output and the decoder hidden state output are both combined.
>
> **[1:39](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/implementing-bahdanau-attention?u=76281980&t=99)** They're added together and passed through an added layer that gives us the combined state and then we pass the combined stage to our linear weights layer that's a trainable weights layer to get the attention scores.
>
> **[1:51](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/implementing-bahdanau-attention?u=76281980&t=111)** These attention scores are 49 element vectors corresponding to each image.
>
> **[1:58](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/implementing-bahdanau-attention?u=76281980&t=118)** The feature map representations, that's the output of our resident model, have seven by seven feature maps.
>
> **[2:05](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/implementing-bahdanau-attention?u=76281980&t=125)** Seven by seven gives us 49 elements of the input feature map and these attention scores tell us how much attention we should pay to each of those 49 elements.
>
> **[2:16](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/implementing-bahdanau-attention?u=76281980&t=136)** The attention scores need to be converted to probabilities, so we pass them through a softmax layer.
>
> **[2:23](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/implementing-bahdanau-attention?u=76281980&t=143)** This gives us the attention weights for each of the 49 features in the input image.
>
> **[2:29](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/implementing-bahdanau-attention?u=76281980&t=149)** And finally, we use these weights to generate a context vector.
>
> **[2:33](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/implementing-bahdanau-attention?u=76281980&t=153)** This context vector will be fed into our decoder.
>
> **[2:38](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/implementing-bahdanau-attention?u=76281980&t=158)** The attention model returns the attention weight, as well as the context vector.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (6), module (3), finally, (1)
> **Env Vars:** rnn (1)
> **Cross-References:** we discussed (1)
> **Speakers:** - next (1)

#### The decoder RNN using attention
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-decoder-rnn-using-attention?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-decoder-rnn-using-attention?u=76281980&t=1)** - [Instructor] After the encoder and the attention model it's now time to look at the decoder network.
>
> **[0:05](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-decoder-rnn-using-attention?u=76281980&t=5)** This is the network that uses the attention model to generate captions.
>
> **[0:11](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-decoder-rnn-using-attention?u=76281980&t=11)** While initializing the decoder, you need to specify a number of parameters, the size of the embeddings for the words, the size of the vocabulary, the size of the attention, the size of the hidden state of the encoder and the size of the hidden state of the decoder.
>
> **[0:28](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-decoder-rnn-using-attention?u=76281980&t=28)** These will all be inputs to the decoder R and N, and we also have the dropout probability set to 0.3.
>
> **[0:36](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-decoder-rnn-using-attention?u=76281980&t=36)** We'll use dropout in the final linear layer.
>
> **[0:39](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-decoder-rnn-using-attention?u=76281980&t=39)** Initialize some of these parameters we'll need them later.
>
> **[0:42](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-decoder-rnn-using-attention?u=76281980&t=42)** We'll cap size, attention size, and decoded hidden size.
>
> **[0:46](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-decoder-rnn-using-attention?u=76281980&t=46)** The words of the caption input to the decoded will be represented in the form of one hot vector.
>
> **[0:52](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-decoder-rnn-using-attention?u=76281980&t=52)** We'll use the embedding layer to generate embeddings for these words.
>
> **[0:57](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-decoder-rnn-using-attention?u=76281980&t=57)** Next, we initialize the attention model.
>
> **[0:59](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-decoder-rnn-using-attention?u=76281980&t=59)** The attention model requires the size of the hidden state of the encode, size of the hidden state of the decoded and the attention size.
>
> **[1:09](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-decoder-rnn-using-attention?u=76281980&t=69)** Init_h and init_c are linear layers that take in the feature representations which are the output of the encoder, and convert them to a hidden state that can be fed into the decoded.
>
> **[1:22](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-decoder-rnn-using-attention?u=76281980&t=82)** The layers of our recurrent neural network will use the long short term memory cell.
>
> **[1:28](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-decoder-rnn-using-attention?u=76281980&t=88)** The LSTM cell defines a single layer in our recurrent neural network.
>
> **[1:32](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-decoder-rnn-using-attention?u=76281980&t=92)** When we use this particular construct we have to unroll the R and N ourselves over time.
>
> **[1:38](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-decoder-rnn-using-attention?u=76281980&t=98)** And you'll see that in the forward path through our model.
>
> **[1:42](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-decoder-rnn-using-attention?u=76281980&t=102)** The input to the R and N at each time instance is a concatenation of the embedding of the current word in the sequence and the context vector.
>
> **[1:53](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-decoder-rnn-using-attention?u=76281980&t=113)** So that's why the size of the input is embedding size plus encoding hidden size.
>
> **[1:59](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-decoder-rnn-using-attention?u=76281980&t=119)** The hidden state of the R and N has the size, decoder, hidden size.
>
> **[2:04](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-decoder-rnn-using-attention?u=76281980&t=124)** That's the second input argument, and bias is true.
>
> **[2:08](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-decoder-rnn-using-attention?u=76281980&t=128)** Bias true specifies that the layer should use bias weights.
>
> **[2:12](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-decoder-rnn-using-attention?u=76281980&t=132)** We then have a fully connected linear layer at the end.
>
> **[2:17](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-decoder-rnn-using-attention?u=76281980&t=137)** This is the linear layer that outputs a one hot vector for the predicted word.
>
> **[2:24](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-decoder-rnn-using-attention?u=76281980&t=144)** In addition to the linear layer, we'll also have a dropout layer during the training process with the dropout probability that we have specified.
>
> **[2:32](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-decoder-rnn-using-attention?u=76281980&t=152)** Let's take a look at a forward pass through this decoded R and N.
>
> **[2:36](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-decoder-rnn-using-attention?u=76281980&t=156)** The input here is a batch of feature representations of the input image along with the corresponding captions.
>
> **[2:44](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-decoder-rnn-using-attention?u=76281980&t=164)** The caption text is represented as one hot encoded vectors.
>
> **[2:47](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-decoder-rnn-using-attention?u=76281980&t=167)** Please convert these to embeddings using the embedding layer.
>
> **[2:52](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-decoder-rnn-using-attention?u=76281980&t=172)** Let's get the first hidden state of the decoder by passing the encoder features through the linear layer that we had set up for this hidden state.
>
> **[3:02](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-decoder-rnn-using-attention?u=76281980&t=182)** Init_h and init_c.
>
> **[3:05](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-decoder-rnn-using-attention?u=76281980&t=185)** Let's initialize the length of the sequence.
>
> **[3:08](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-decoder-rnn-using-attention?u=76281980&t=188)** Which is the entire text, other than the start of sentence, the SOS token.
>
> **[3:14](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-decoder-rnn-using-attention?u=76281980&t=194)** That's why length of captions are zero minus one, and the batch size.
>
> **[3:19](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-decoder-rnn-using-attention?u=76281980&t=199)** That is the number of captions that we're dealing with in one batch.
>
> **[3:22](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-decoder-rnn-using-attention?u=76281980&t=202)** If you remember the feature representations that are the output of the encoder have this particular structure.
>
> **[3:28](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-decoder-rnn-using-attention?u=76281980&t=208)** Batch size 49.
>
> **[3:30](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-decoder-rnn-using-attention?u=76281980&t=210)** That is for the seven by seven feature maps and there are 2048 feature maps.
>
> **[3:34](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-decoder-rnn-using-attention?u=76281980&t=214)** Let's extract the number of features that we have, which is essentially 49.
>
> **[3:41](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-decoder-rnn-using-attention?u=76281980&t=221)** We'll now use this information to initialize an array that will hold the predicted captions in the form of one hot encoded vectors for all of the images in this batch.
>
> **[3:52](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-decoder-rnn-using-attention?u=76281980&t=232)** We'll also initialize another array that will hold the attention weights.
>
> **[3:58](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-decoder-rnn-using-attention?u=76281980&t=238)** We have a different set of attention weights for each time instance in the sequence.
>
> **[4:03](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-decoder-rnn-using-attention?u=76281980&t=243)** That's why we have the sequence length here in this array structure, and we have the attention weights for all of the images in a single batch.
>
> **[4:12](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-decoder-rnn-using-attention?u=76281980&t=252)** We'll now define the loop that'll feed in the input at the different time instances, along with the context vector and other details to our decoded R and N.
>
> **[4:24](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-decoder-rnn-using-attention?u=76281980&t=264)** For each time instance, for the entire range of the sequence, we first pass in the features from the encoded convolution neural network and the decoded hidden state.
>
> **[4:35](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-decoder-rnn-using-attention?u=76281980&t=275)** Get the attention beat and the context vector.
>
> **[4:38](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-decoder-rnn-using-attention?u=76281980&t=278)** Remember that the attention weight will be different for each time instance.
>
> **[4:43](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-decoder-rnn-using-attention?u=76281980&t=283)** That's why this has to be computed for each iteration of the loop.
>
> **[4:47](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-decoder-rnn-using-attention?u=76281980&t=287)** The input to the lstm cell that is a single layer of our R and N, is a concatenation of the embeddings representing the word at this particular time instance, along with the context vector that determines the current attention.
>
> **[5:05](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-decoder-rnn-using-attention?u=76281980&t=305)** We pass this input along with the previous hidden state of our decoder R and N, and that'll give us the hidden state for the next time instance.
>
> **[5:16](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-decoder-rnn-using-attention?u=76281980&t=316)** Which we store in h and c once again.
>
> **[5:18](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-decoder-rnn-using-attention?u=76281980&t=318)** To get the final predicted word we pass the hidden state through the dropout layer and the fully connected layer, and we basically save the predictions of this model in the preds array and the attention weight in the attention weights array.
>
> **[5:33](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-decoder-rnn-using-attention?u=76281980&t=333)** In this after we iterated over the entire sequence length, the preds and the attention weights array are what we returned from this forward pass.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (5), let (4)
> **Definitions:** is a  (4)
> **Env Vars:** lstm (1), sos (1)
> **Versions:** 0.3 (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Generating captions using attention
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/generating-captions-using-attention?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/generating-captions-using-attention?u=76281980&t=1)** - Let's take a look at how our decoder generates captions.
>
> **[0:04](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/generating-captions-using-attention?u=76281980&t=4)** The input here includes the feature representations, the output of the encoder CNN, the max length of the caption is set to 20.
>
> **[0:12](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/generating-captions-using-attention?u=76281980&t=12)** We also pass in the vocabulary for the captions.
>
> **[0:15](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/generating-captions-using-attention?u=76281980&t=15)** We then initialize the hidden state and the batch size.
>
> **[0:19](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/generating-captions-using-attention?u=76281980&t=19)** The hidden state is initialized using the encoder output.
>
> **[0:23](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/generating-captions-using-attention?u=76281980&t=23)** We store attention rates in an array.
>
> **[0:26](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/generating-captions-using-attention?u=76281980&t=26)** To start the generation sequence, we set up a one-hot vector of the SOS token and convert that to an embedding.
>
> **[0:34](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/generating-captions-using-attention?u=76281980&t=34)** The words of the caption that we generate will be stored in this captions list.
>
> **[0:39](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/generating-captions-using-attention?u=76281980&t=39)** Set up a for loop going up to the max length of the sequence that we want to generate.
>
> **[0:44](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/generating-captions-using-attention?u=76281980&t=44)** For each time instance, the first step is to take the endcoder output and compute the current attention.
>
> **[0:51](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/generating-captions-using-attention?u=76281980&t=51)** We'll append this attention to the attention weights list so that we have all of the attentions for different time instances at the end of generating this caption.
>
> **[1:00](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/generating-captions-using-attention?u=76281980&t=60)** We'll use these attention weights to visualize how our model actually generated each word of X in the image caption.
>
> **[1:08](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/generating-captions-using-attention?u=76281980&t=68)** The LSTM input is a concatenation of the current word in the sequence and the current context vector.
>
> **[1:15](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/generating-captions-using-attention?u=76281980&t=75)** So, get the LSTM input, pass that through the LSTM cell and get the hidden state for the next time instance.
>
> **[1:23](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/generating-captions-using-attention?u=76281980&t=83)** In order to get the one-hot vector representation of the predicted word, we pass the hidden state through the fully connected layer through the dropout, we reshape it, and then we use argmax to get the idea of the predicted word, and then we append this ID to the captions list.
>
> **[1:41](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/generating-captions-using-attention?u=76281980&t=101)** Now, if the ID of the predicted word is basically equivalent to the eos token when we reach the end of the caption that was generated and we can break out of this loop, otherwise we simply get the current word predicted in its embedding form, and then we use it for generating the next word in the sequence.
>
> **[2:03](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/generating-captions-using-attention?u=76281980&t=123)** And once the entire sequence has been generated, we use the vocabulary to convert the IDs to actual words.
>
> **[2:10](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/generating-captions-using-attention?u=76281980&t=130)** And here is the code for initializing the hidden state of the decoder.
>
> **[2:15](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/generating-captions-using-attention?u=76281980&t=135)** We use the features output of the endcoder CNN, we compute the mean and pass that through the linear layers init_h and init_c to get the initial hidden state.

> [!info]- Semantic Content
>
> **Env Vars:** lstm (3), cnn (2), sos (1)
> **Code Keywords:** pass (4), let (1)
> **Prerequisites:** set up (2)
> **Definitions:** is a  (1)
> **Speakers:** - let (1)

#### Training the attention-based image captioning model
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-attention-based-image-captioning-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-attention-based-image-captioning-model?u=76281980&t=1)** - [Presenter] Now that we have implemented our encoder, the attention model, and the decoder, we are ready to set up our sequence to sequence model, in order to generate image captions.
>
> **[0:12](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-attention-based-image-captioning-model?u=76281980&t=12)** So, here is the model, it's called Image to Captions.
>
> **[0:15](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-attention-based-image-captioning-model?u=76281980&t=15)** Initialize the model with all of the input parameters that it needs.
>
> **[0:19](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-attention-based-image-captioning-model?u=76281980&t=19)** These are the input parameters that are needed to initialize the encoder and the decoder.
>
> **[0:24](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-attention-based-image-captioning-model?u=76281980&t=24)** The encoder is straightforward.
>
> **[0:26](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-attention-based-image-captioning-model?u=76281980&t=26)** It doesn't need any of the input config parameters.
>
> **[0:29](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-attention-based-image-captioning-model?u=76281980&t=29)** The decoder requires all of this information: embedding size, vocab size, attention size, and the size of the hidden states of the encoder, as well as the decoder.
>
> **[0:38](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-attention-based-image-captioning-model?u=76281980&t=38)** The forward path takes in a batch of images and the corresponding captions.
>
> **[0:43](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-attention-based-image-captioning-model?u=76281980&t=43)** We then pass the images through the encoder, in order to get the feature map representations.
>
> **[0:49](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-attention-based-image-captioning-model?u=76281980&t=49)** The features output of the encoder are then passed to the decoder, along with the captions.
>
> **[0:56](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-attention-based-image-captioning-model?u=76281980&t=56)** We can now initialize the parameters of our sequence to sequence model.
>
> **[0:59](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-attention-based-image-captioning-model?u=76281980&t=59)** Get the vocab size, that is simply equal to the length of the vocabulary of our training data.
>
> **[1:05](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-attention-based-image-captioning-model?u=76281980&t=65)** The embedding size is 300, attention size is 256.
>
> **[1:08](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-attention-based-image-captioning-model?u=76281980&t=68)** All of these are parameters you can tweak.
>
> **[1:11](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-attention-based-image-captioning-model?u=76281980&t=71)** The hidden size of the encoder is 2048.
>
> **[1:13](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-attention-based-image-captioning-model?u=76281980&t=73)** The decoder hidden size is 512.
>
> **[1:16](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-attention-based-image-captioning-model?u=76281980&t=76)** And, the learning rate that I've chosen here, is three multiplied by 10 to the power minus four.
>
> **[1:23](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-attention-based-image-captioning-model?u=76281980&t=83)** Using the parameters that we've initialized, I'm going to set up the image to captions sequence to sequence model.
>
> **[1:31](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-attention-based-image-captioning-model?u=76281980&t=91)** Now, I want this model to be trained on the GPU so I save the model weights to my coder device.
>
> **[1:38](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-attention-based-image-captioning-model?u=76281980&t=98)** Once again, we use the CrossEntropyLoss function and the Adam optimizer.
>
> **[1:42](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-attention-based-image-captioning-model?u=76281980&t=102)** This is exactly the same as in the previous demo.
>
> **[1:46](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-attention-based-image-captioning-model?u=76281980&t=106)** Initializing the image to captions model will download the weights of our resnet50 pre-trained model.
>
> **[1:53](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-attention-based-image-captioning-model?u=76281980&t=113)** So, our model is now set up.
>
> **[1:55](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-attention-based-image-captioning-model?u=76281980&t=115)** I have this additional utility function called save_model, that checkpoints the model's parameter, after a certain number of iterations of training.
>
> **[2:04](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-attention-based-image-captioning-model?u=76281980&t=124)** So, we just save out all of the model details.
>
> **[2:06](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-attention-based-image-captioning-model?u=76281980&t=126)** This serves as a checkpointing utility.
>
> **[2:09](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-attention-based-image-captioning-model?u=76281980&t=129)** Observe, I call torch.save to save out the model.
>
> **[2:13](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-attention-based-image-captioning-model?u=76281980&t=133)** The training process is the same as before, so we can go through this quickly.
>
> **[2:16](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-attention-based-image-captioning-model?u=76281980&t=136)** We'll train for 10 epochs, and we'll print out some details every hundred batches.
>
> **[2:22](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-attention-based-image-captioning-model?u=76281980&t=142)** We have our nested for loop here, iterating over the epochs and batches of our data set.
>
> **[2:28](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-attention-based-image-captioning-model?u=76281980&t=148)** For each epoch, transfer the training data, images, as well as captions, to the GPU, so that training occurs there.
>
> **[2:36](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-attention-based-image-captioning-model?u=76281980&t=156)** Zero out gradients of the optimizer.
>
> **[2:38](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-attention-based-image-captioning-model?u=76281980&t=158)** We'll do this for every batch.
>
> **[2:40](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-attention-based-image-captioning-model?u=76281980&t=160)** Pass the image, as well as the captions, through the model.
>
> **[2:43](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-attention-based-image-captioning-model?u=76281980&t=163)** That will give you the output, as well as the attention.
>
> **[2:47](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-attention-based-image-captioning-model?u=76281980&t=167)** Get the actual caption training data.
>
> **[2:50](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-attention-based-image-captioning-model?u=76281980&t=170)** We'll use this in computing the loss function.
>
> **[2:53](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-attention-based-image-captioning-model?u=76281980&t=173)** Reshape the output and the targets, so that they match, and compute the cross entropy loss.
>
> **[2:59](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-attention-based-image-captioning-model?u=76281980&t=179)** Loss.backward will compute gradients.
>
> **[3:02](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-attention-based-image-captioning-model?u=76281980&t=182)** Optimizer.step will update the model weights for this pass.
>
> **[3:06](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-attention-based-image-captioning-model?u=76281980&t=186)** Once again, after every hundred batches of training, I'll print out a few details of the model.
>
> **[3:12](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-attention-based-image-captioning-model?u=76281980&t=192)** I'll take a sample image from the next batch of data and I'll pass that to the encoder of the model.
>
> **[3:19](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-attention-based-image-captioning-model?u=76281980&t=199)** Get the features, pass the features through the decoder, and generate captions for this image.
>
> **[3:25](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-attention-based-image-captioning-model?u=76281980&t=205)** Once we have the generated caption and the image, let's display it, to see how the model performs after a little bit of training.
>
> **[3:33](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-attention-based-image-captioning-model?u=76281980&t=213)** Make sure you switch the model back to train mode after evaluating the model.
>
> **[3:40](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-attention-based-image-captioning-model?u=76281980&t=220)** Now, finally, I save the model for after every epoch of training.
>
> **[3:45](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-attention-based-image-captioning-model?u=76281980&t=225)** That's just a checkpointing feature.
>
> **[3:46](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-attention-based-image-captioning-model?u=76281980&t=226)** Go ahead, hit shift enter, and start the training process.
>
> **[3:51](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-attention-based-image-captioning-model?u=76281980&t=231)** You can see in our attention model, after just hundred batches of training in the first epoch, the model has already started generating coherent sentences.
>
> **[4:01](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-attention-based-image-captioning-model?u=76281980&t=241)** The image has a few boys.
>
> **[4:03](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-attention-based-image-captioning-model?u=76281980&t=243)** The model thinks they are men.
>
> **[4:05](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-attention-based-image-captioning-model?u=76281980&t=245)** Well, that's not too bad.
>
> **[4:07](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-attention-based-image-captioning-model?u=76281980&t=247)** Then, here is the next caption generated.
>
> **[4:09](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-attention-based-image-captioning-model?u=76281980&t=249)** A man in a red shirt.
>
> **[4:10](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-attention-based-image-captioning-model?u=76281980&t=250)** Well, there is a man, but no red shirt.
>
> **[4:12](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-attention-based-image-captioning-model?u=76281980&t=252)** Again, not too bad.
>
> **[4:14](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-attention-based-image-captioning-model?u=76281980&t=254)** And again, here is the next caption, from the very first epoch of training.
>
> **[4:18](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-attention-based-image-captioning-model?u=76281980&t=258)** A man in a red shirt is jumping on a rock.
>
> **[4:20](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-attention-based-image-captioning-model?u=76281980&t=260)** There is a rock, and there is a man, but no red shirt, and no jumping.
>
> **[4:25](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-attention-based-image-captioning-model?u=76281980&t=265)** The captions are already far better than the captions that we saw for our model without attention, even after 10 epochs of training.
>
> **[4:34](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-attention-based-image-captioning-model?u=76281980&t=274)** Here is one.
>
> **[4:36](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-attention-based-image-captioning-model?u=76281980&t=276)** There are two dogs playing with a ball in the grass.
>
> **[4:39](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-attention-based-image-captioning-model?u=76281980&t=279)** That's perfect.
>
> **[4:40](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-attention-based-image-captioning-model?u=76281980&t=280)** This is what we get after three epochs.
>
> **[4:43](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-attention-based-image-captioning-model?u=76281980&t=283)** Let's run training for a little longer, and then after 10 or so minutes of waiting, at epoch six, I get this amazing caption.
>
> **[4:50](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-attention-based-image-captioning-model?u=76281980&t=290)** A dog is running through the snow, which is perfect.
>
> **[4:53](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-attention-based-image-captioning-model?u=76281980&t=293)** And then, finally at epoch 10, you can see how the captions improve.
>
> **[4:58](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-attention-based-image-captioning-model?u=76281980&t=298)** In the meantime, I get this: A little girl in a pink shirt and a blue shirt is sitting on something.
>
> **[5:04](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-attention-based-image-captioning-model?u=76281980&t=304)** This is a fairly complex caption.
>
> **[5:07](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-attention-based-image-captioning-model?u=76281980&t=307)** It's not perfect, but it's pretty good.
>
> **[5:09](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-attention-based-image-captioning-model?u=76281980&t=309)** You can see that our model with attention performs far better than our model without attention.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (5), function (3), let (2), match, (1), switch (1)
> **Definitions:** is a  (4)
> **Prerequisites:** set up (3)
> **Env Vars:** gpu (2)
> **CLI Commands:** make (1)
> **Code Identifiers:** save_model (1)
> **Exercise Files:** download the (1)
> **Speakers:** - [presenter] (1)

#### Visualizing the model's attention
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/visualizing-the-model-s-attention?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/visualizing-the-model-s-attention?u=76281980&t=0)** - [Narrator] Now we'll see something really cool.
>
> **[0:02](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/visualizing-the-model-s-attention?u=76281980&t=2)** In our image captioning model, you can actually see what part of the input image our model focuses on while generating a particular word in the caption.
>
> **[0:12](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/visualizing-the-model-s-attention?u=76281980&t=12)** For that, let's set up some utility functions first.
>
> **[0:15](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/visualizing-the-model-s-attention?u=76281980&t=15)** The generate caps function is just a helper function that takes in images at its input and then generates captions for those images.
>
> **[0:23](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/visualizing-the-model-s-attention?u=76281980&t=23)** We place the model in eval mode, so dropout doesn't apply.
>
> **[0:27](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/visualizing-the-model-s-attention?u=76281980&t=27)** We then turn off gradient computation, pass the images through the model encoder, get the features, and pass the features through the model decoder to generate captions.
>
> **[0:39](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/visualizing-the-model-s-attention?u=76281980&t=39)** We then display the image and the caption that was generated.
>
> **[0:43](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/visualizing-the-model-s-attention?u=76281980&t=43)** We have the caption and the attention weight from the model decoder, and we return that.
>
> **[0:49](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/visualizing-the-model-s-attention?u=76281980&t=49)** We'll be using that next.
>
> **[0:51](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/visualizing-the-model-s-attention?u=76281980&t=51)** Show attention takes in an image and the attention weights generated by our model and highlights on the image what part of the image was used to generate a particular word in the caption.
>
> **[1:04](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/visualizing-the-model-s-attention?u=76281980&t=64)** Most of the code here is just map plot LIP code for displaying images.
>
> **[1:08](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/visualizing-the-model-s-attention?u=76281980&t=68)** You can see the input attention plot which is reshaped to be 7 by 7 and then reshaped once again to display what portion of the input image the attention is focused on at any point.
>
> **[1:22](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/visualizing-the-model-s-attention?u=76281980&t=82)** I'll now pick one image at random from our training data, access the image and pass that through the generate caps function, which basically generates the captions from our model.
>
> **[1:34](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/visualizing-the-model-s-attention?u=76281980&t=94)** Then call show attention along with the image, the captions and the attention weight, and let's take a look. So here is the original image.
>
> **[1:42](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/visualizing-the-model-s-attention?u=76281980&t=102)** It seems like there is a dog and a cat in here.
>
> **[1:45](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/visualizing-the-model-s-attention?u=76281980&t=105)** Let's scroll down and let's see what caption was generated and what portion of the image generated the caption.
>
> **[1:53](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/visualizing-the-model-s-attention?u=76281980&t=113)** The caption says "a black and a brown dog is laying on a bed" and you can see what portion of the image the model focused on to generate each word of the caption text.
>
> **[2:04](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/visualizing-the-model-s-attention?u=76281980&t=124)** Let's try this once again with another image.
>
> **[2:07](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/visualizing-the-model-s-attention?u=76281980&t=127)** This image is of some people playing on a beach.
>
> **[2:10](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/visualizing-the-model-s-attention?u=76281980&t=130)** Let's take a look, and you can see that the caption says "a group of people are playing in the sand at the beach" and you can see which portion of the image the decoder concentrated on, or focused attention on, to generate each word in the caption.
>
> **[2:28](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/visualizing-the-model-s-attention?u=76281980&t=148)** It's pretty amazing.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), function (3), pass (3)
> **CLI Commands:** cat (1)
> **Env Vars:** lip (1)
> **UI Navigation:** scroll down (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [narrator] (1)


### Conclusion

#### Summary and next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/summary-and-next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/summary-and-next-steps?u=76281980&t=1)** - [Female Speaker] And with this demo on image captioning using Attention Models, we come to the very end of this course.
>
> **[0:05](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/summary-and-next-steps?u=76281980&t=5)** Now, let's take a look at some of the references that I used while building up the material for this course.
>
> **[0:11](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/summary-and-next-steps?u=76281980&t=11)** These are references that you can use for further study.
>
> **[0:15](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/summary-and-next-steps?u=76281980&t=15)** This video on Attention Models is by a professor from Carnegie Mellon.
>
> **[0:19](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/summary-and-next-steps?u=76281980&t=19)** And I found it incredibly insightful.
>
> **[0:22](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/summary-and-next-steps?u=76281980&t=22)** And it has a lot more detail than what I've covered in this course.
>
> **[0:26](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/summary-and-next-steps?u=76281980&t=26)** This video from NPTEL IITM address is also a great resource.
>
> **[0:31](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/summary-and-next-steps?u=76281980&t=31)** Among blog posts, I found this one by Lillian Weng, incredibly useful and another one was this [medium.com](https://medium.com) article.
>
> **[0:40](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/summary-and-next-steps?u=76281980&t=40)** Here is a quick summary of what we covered in this course.
>
> **[0:44](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/summary-and-next-steps?u=76281980&t=44)** We understood that we need recurrent neural networks to operate on sequences.
>
> **[0:49](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/summary-and-next-steps?u=76281980&t=49)** Recurrent neurons suffer from short term memory which is why we need long memory cells such as the LSTM and GRU.
>
> **[0:56](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/summary-and-next-steps?u=76281980&t=56)** We discussed different types of (indistinct) and focus our attention on sequence-to-sequence models for language generation and translation because these are the models in which attention is incredibly useful.
>
> **[1:08](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/summary-and-next-steps?u=76281980&t=68)** We understood how attention allows the decoder network in a sequence-to-sequence model to pay attention to relevant portions in the input.
>
> **[1:17](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/summary-and-next-steps?u=76281980&t=77)** We discussed different attention models, but we focused on Bahdanau's attention or addictive attention because this was the attention mechanism we used in our image captioning model.
>
> **[1:29](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/summary-and-next-steps?u=76281980&t=89)** We implemented image captioning with attention and without attention and compared results.
>
> **[1:35](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/summary-and-next-steps?u=76281980&t=95)** If you're interested in deep learning and you want to study further, here are some other resources on LinkedIn Learning that you might find interesting.
>
> **[1:42](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/summary-and-next-steps?u=76281980&t=102)** Deep learning Image Recognition, Self-supervised Machine Learning, and GANS and Diffusion Models in Machine Learning.
>
> **[1:50](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/summary-and-next-steps?u=76281980&t=110)** And it's time for me to say goodbye.
>
> **[1:52](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/summary-and-next-steps?u=76281980&t=112)** I hope you enjoyed this course.
>
> **[1:54](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/summary-and-next-steps?u=76281980&t=114)** Thank you for listening.

> [!info]- Semantic Content
>
> **Env Vars:** nptel (1), iitm (1), lstm (1), gru (1), gans (1)
> **Cross-References:** we discussed (2), we covered (1)
> **Code Keywords:** let (1), self (1)
> **CLI Commands:** find (1)
> **URLs:** [medium.com](https://medium.com) (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [female (1)


## Path Context

### In [[Advance Your Skills in AI and Machine Learning]]
← [[Reinforcement Learning Foundations]] | **4 of 16** | [[Training Neural Networks in Python]] →

## Appears In

- [[Advance Your Skills in AI and Machine Learning]]

## Related Courses

_Courses sharing skills:_

- [[Training Neural Networks in Python]] — Artificial Intelligence (AI), Neural Networks
- [[Artificial Intelligence Foundations- Neural Networks]] — Artificial Intelligence (AI), Neural Networks
- [[Creating a Book Search Engine from Scratch Using Java and GitHub Copilot]] — Artificial Intelligence (AI)
- [[Exploring the Future of Development with GitHub Copilot Workspace]] — Artificial Intelligence (AI)
- [[Big Data in the Age of AI]] — Artificial Intelligence (AI)

---

[↑ Back to top](#)