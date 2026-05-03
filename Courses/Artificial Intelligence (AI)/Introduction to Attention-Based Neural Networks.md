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
  - '[[Advance Your Skills in AI and Machine Learning]]'
prev_courses:
  - '[[Reinforcement Learning Foundations]]'
next_courses:
  - '[[Training Neural Networks in Python]]'
path_nav: '[{"path":"Advance Your Skills in AI and Machine Learning","position":4,"total":16,"prev":"Reinforcement Learning Foundations","next":"Training Neural Networks in Python"}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - skill/neural-networks
  - skill/artificial-intelligence-ai
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Introduction%20to%20Attention-Based%20Neural%20Networks.md)

![Introduction to Attention-Based Neural Networks](https://media.licdn.com/dms/image/v2/D4E0DAQEO3pew_MlbVA/learning-public-crop_675_1200/B4EZjoiaKRHoAY-/0/1756247991159?e=2147483647&amp;v=beta&amp;t=AIiUEPc8EOC4sT4UnM38a1ccb8MFyTRBIl0P7wMot0I)

# Introduction to Attention-Based Neural Networks

> Attention-based models allow neural networks to focus on the most important features of the input, thus producing better results at the output. In this course, Janani Ravi explains how recurrent neural networks work and builds and trains two image captioning models one without attention and another using attention models and compares their results. If you have some experience and understanding of 

> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks) | 2h 11m | Intermediate | 10K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Prerequisites](#prerequisites)
  - [What are attention-based models?](#what-are-attention-based-models)
  - [Attention in language generation and translation models](#attention-in-language-generation-and-translation-models)
- [**1. Recurrent Neural Networks to Learn Sequential Data**](#1-recurrent-neural-networks-to-learn-sequential-data) (5 videos)
  - [Feed forward networks and their limitations](#feed-forward-networks-and-their-limitations)
  - [Recurrent neural networks for sequential data](#recurrent-neural-networks-for-sequential-data)
  - [The need for long memory cells](#the-need-for-long-memory-cells)
  - [LSTM and GRU cells](#lstm-and-gru-cells)
  - [Types of RRNNS](#types-of-rrnns)
- [**2. Encoder-Decoder Networks for Language Models**](#2-encoder-decoder-networks-for-language-models) (2 videos)
  - [Language generation models](#language-generation-models)
  - [Sequence to sequence models for language translation](#sequence-to-sequence-models-for-language-translation)
- [**3. Attention-Based Neural Networks**](#3-attention-based-neural-networks) (6 videos)
  - [The role of attention in sequence to sequence models](#the-role-of-attention-in-sequence-to-sequence-models)
  - [Attention mechanism in sequence to sequence models](#attention-mechanism-in-sequence-to-sequence-models)
  - [Alignment weights in attention models](#alignment-weights-in-attention-models)
  - [Bahdanau attention](#bahdanau-attention)
  - [Attention models for image captioning](#attention-models-for-image-captioning)
  - [Encoder decoder structure for image captioning](#encoder-decoder-structure-for-image-captioning)
- [**4. Image Captioning Model without Attention**](#4-image-captioning-model-without-attention) (9 videos)
  - [Setting up Colab and Google Drive](#setting-up-colab-and-google-drive)
  - [Loading in the Flickr8k dataset](#loading-in-the-flickr8k-dataset)
  - [Constructing the vocabulary](#constructing-the-vocabulary)
  - [Setting up the dataset class](#setting-up-the-dataset-class)
  - [Implementing utility functions for training data](#implementing-utility-functions-for-training-data)
  - [Building the encoder CNN](#building-the-encoder-cnn)
  - [Building the decoder RNN](#building-the-decoder-rnn)
  - [Setting up the sequence to sequence model](#setting-up-the-sequence-to-sequence-model)
  - [Training the image captioning model](#training-the-image-captioning-model)
- [**5. Image Captioning Model Using Attention**](#5-image-captioning-model-using-attention) (7 videos)
  - [Loading the dataset and setting up utility functions](#loading-the-dataset-and-setting-up-utility-functions)
  - [The encoder CNN generating unrolled feature maps](#the-encoder-cnn-generating-unrolled-feature-maps)
  - [Implementing Bahdanau attention](#implementing-bahdanau-attention)
  - [The decoder RNN using attention](#the-decoder-rnn-using-attention)
  - [Generating captions using attention](#generating-captions-using-attention)
  - [Training the attention-based image captioning model](#training-the-attention-based-image-captioning-model)
  - [Visualizing the model's attention](#visualizing-the-models-attention)
- [**Conclusion**](#conclusion) (1 videos)
  - [Summary and next steps](#summary-and-next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Prerequisites](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/prerequisites?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/prerequisites?u=76281980&t=1)** - [Instructor] Hi, and welcome to this course on Attention-based [[Neural Networks]]. This is an introductory course on Attention-based models. There are definitely some prereqs that you need to have to make the most of your learning. This is definitely not a beginner [[Deep Learning]] course. Now, here is what I expect that you already know. I expect that you already have a basic understanding of how neural networks work. You understand the training of a neural network, back propagation, gradient descent, the entire details. It would also help for you to have some understanding of transfer learning using pre-trained models, specifically image classification models, because you'll be using those in our hands-on demos. Now, as far as the demos are concerned, I hope you're comfortable programming in [[Python (Programming Language)|Python]] and you're comfortable building and training neural networks using the [[PyTorch]] framework.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Neural Networks]] (3), [[Deep Learning]] (1), [[Python (Programming Language)|Python]] (1), [[PyTorch]] (1)
> **CLI Commands:** make (1), python (1)
> **Definitions:** is an  (1)
> **Prerequisites:** you need to have (1)
> **Speakers:** - [instructor] (1)

#### [What are attention-based models?](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/what-are-attention-based-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/what-are-attention-based-models?u=76281980&t=1)** - [Instructor] So what exactly are Attention-based Models, and how do they help? Well, let's understand this with a few examples. Starting off with a very simple text summarization example. Let's say I were to ask you to summarize this text and write two or three sentences of what this was about. One technique that you would follow could be to read the entire paragraph, parse it, really understand it. And then using the information that you've understood, create a two or three line summary. Well, that actually seems rather daunting. When I looked at this text, I couldn't understand anything that was going on. But let's say you were to break things up into more manageable chunks. What if you focused your attention on parts of the text at a time? So you created summaries looking at only one part at a time. Now you can see this first part here, you could summarize just this sentence. You could say "Grammar is complex and nuanced." That would be your summary for the first part. Then you would turn your attention to the second part. And then you would talk about the complexity of grammar that it exists across languages and it's not just in English. And finally, you'd turn your attention to the last part of this text. And you'd say "If grammar is universal, who created it?" That is a summary of these last few sentences. You'd put all of these sentences together to produce a three sentence summary of this paragraph. And this, of course, made your task a lot easier. It's pretty clear that by allowing you to [[Zoom]] in
>
> **[1:36](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/what-are-attention-based-models?u=76281980&t=96)** and focus attention on parts of the text, helped us improve the result that you produced. Now, let's try this once again this time for an image. Your task is to generate a caption for this image. Now, if you look at the image as a whole, it's really hard to tell what exactly the image is about. What are the important parts of this image? What are the unimportant parts? In order to be able to generate captions, it's far better to focus attention on important bits. So you'd zoom in on the horse, the beach, maybe the waves, maybe the houses in the background. Human beings are trained to focus attention on the relevant bits of the image to generate captions or descriptions. A part of focusing attention on the right bits is to ignore the irrelevant or the less important portions of the image. They maybe irrelevant, so you don't actually look at them or pay attention to them. You then use the relevant portions that you've identified to generate your caption. So you might say, "Okay, there is a man on a horse here." Then you'd look at a different portion of the image, "The man on the horse is on a beach." And then you'd look at the background and say, "There are houses in the background." The use of attention allowed you to focus on the important bits of the input. And this is what attention does in your neural network models.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Zoom]] (2)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)

#### [Attention in language generation and translation models](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-in-language-generation-and-translation-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-in-language-generation-and-translation-models?u=76281980&t=1)** - [Instructor] You now have a big picture, into the understanding of how attention may help you produce better results in [[Neural Networks]]. Now, let's get a little more detail and talk about attention in language generation and translation models because this is where they're most widely used. Let's say you have a language translation model that translates the English language to the German language. One way this model could work would be for the model to read the entire input sequence in English, understand its meaning, and then produce the equivalent sentence in German. This is how a model that does not use attention would perform language translation. Let's dig a little deeper and see how language translation models are set up. Language translation models operate on words one [[Microsoft Word|word]] at a time. These models are sequence to sequence models. That's because we feed in the sequence of words at the input, and then you get a translated sequence of words at the output. The way sequence to sequence models work is that one word is produced at the output at a single time instance. After reading in the entire input sequence, the first word of the output is produced. That word is then used to generate the second word at the output, which is then used to generate the third word of the output, and so on. The entire sequence of the translated sentence is generated. In order to generate a single word
>
> **[1:34](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-in-language-generation-and-translation-models?u=76281980&t=94)** in the output translation sequence, the model looks at the entire input sentence. It uses the information from the sentence as a whole and it also uses the previously generated word in the translated sequence. The input sentence is considered in its entirety and an additional input is the previous word that was generated in the sequence. Now, this could be improved upon. Certain words can be better predicted if attention is focused on portions of the input rather than the entire input sentence. For example, the word ich would be best predicted if attention was focused on the word I. And you can see similar relationships with other words in this translation. The prediction of words in the sequence would improve with attention. The relationship could be more complex than one to one. There might be a single word at the input that is related to multiple words at the output and the reverse may also be true. Multiple words at the input may be related to one word at the output, so it's not just about focusing attention on a single word of the input. Attention can help focus on the right bits of the input to generate a particular output. And this is what attention based models do. They allow neural networks to focus on the most important features of the input thus reducing better results at the output.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (14), [[Neural Networks]] (2)
> **Analogies:** picture (1), for example (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 1. Recurrent Neural Networks to Learn Sequential Data

[↑ Back to Table of Contents](#table-of-contents)

#### [Feed forward networks and their limitations](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/feed-forward-networks-and-their-limitations?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/feed-forward-networks-and-their-limitations?u=76281980&t=1)** - The use of attention is widely prevalent in language generation or language translation models and these tend to be recurrent [[Neural Networks]]. So, before you can understand attention based models, it's important that you understand how recurrent neural networks work. Recurrent neural networks allow you to work with sequential data and they're different from feed forward neural networks. Let's discuss feed forward neural networks and their limitations first. These are neural networks that you're likely familiar with. Dense neural networks or convolution neural networks tend to be feed forward networks. Here you have active learning units neurons arranged in layers. Input is fed into the first layer of the model and your output is available from the last layer of the model. The output of such a model is usually a prediction of some kind. What kind of prediction depends on what kind of model you are training. The prediction will be a class or a category if you're building a classification model. The prediction will be a continuous numeric value if you're building a regression model. This is referred to as a feed forward neural network because neurons in each layer pass their outputs forward towards the last layer. Feed forward neural networks can be arbitrarily complex. Every neuron in a layer may be connected to one or more neurons in the layer after it. That is a densely connected feed forward neural network. If a neuron is connected to just a few neurons in the next layer, that's an example of a sparsely connected network. Another feature of feed forward neural networks
>
> **[1:36](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/feed-forward-networks-and-their-limitations?u=76281980&t=96)** is that the entire input, that is the complete record that the neural network needs to make its prediction is available at a single time instance. Your data point is represented in some numeric form and the entire data point is fed in to get the prediction. Every input that you feed in is an independent record or data point from your training data; There are no inter relationships in your input data. Each input data point is independent of other inputs present in the trading data, and there is no inherent order or sequence to the inputs. In fact, it's often the case that you shuffle the inputs before feeding them into your feed forward network. Another characteristic of the feed forward network is that the output or the prediction is never fed back into the input. The output is just for a single data sample and it's just used as is. Feed forward networks are made up of feed forward neurons and here is how a neuron might be represented. Y, the output of the neuron is activation, applied to Wx+b. Here X is the vector of inputs that you feed into a neuron. The input X is weighed by a weights vector, W. The neuron has an activation function to learn non-linear relationships and then you get the output Y. A feed forward Neuron, however, does not have what it takes to deal with sequential input and output. Now, sequences are data points
>
> **[3:09](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/feed-forward-networks-and-their-limitations?u=76281980&t=189)** which have special time relationships. Certain data might be available earlier, certain data might be available later, so, different portions of the data may be available at different time instances. Another thing about sequences, the order of the data points in the sequence is important. If you change the order of data in a sequence, well, it's meaning might change completely; It might change the semantics of your data. Language is sequential data. For example, consider the sentence, this is not a good meal. I would say this is a negative sentence expressing negative sentiment, but what if I were to add a few more words to the sequence? This is not a good meal, it is a great meal. Now, this sentence now becomes positive; It has positive sentiment. Even this simple example makes it very clear that language is sequential because the order of the words matter. The order of the words change the meaning of the words. If you think of autocomplete models, autocomplete models use the order of words that have been seen so far to predict the next [[Microsoft Word|word]] in the sequence. Another example of sequential data is historical stock price data. Stock ticker data has implicit time relationships. So you have stock price at different instances of time. Trends over time is an important concept in stock price prediction. Trends might be rising trends, falling trends, anything. The order or sequence in which the stock prices are parsed
>
> **[4:43](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/feed-forward-networks-and-their-limitations?u=76281980&t=283)** is important. Another example of sequential data is video. Videos are just image frames viewed in a sequence. For example, if you have a car moving through a racetrack, you can use the position of the car at different time instances to predict the next position of that car. Now, feed forward networks cannot capture time relationships in data, which means feed forward networks are not good candidates for working with sequences.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Neural Networks]] (10), [[Microsoft Word|Word]] (1)
> **Definitions:** is a  (3), is an  (2)
> **Analogies:** for example (2)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Speakers:** - the (1)

#### [Recurrent neural networks for sequential data](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/recurrent-neural-networks-for-sequential-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/recurrent-neural-networks-for-sequential-data?u=76281980&t=1)** - [Instructor] If feedforward [[Neural Networks]] don't let you cope with sequential data, what do you do? Well, you use recurrent neural networks whose very structure is meant for working with sequences. We've seen earlier what a single feedforward neuron looks like. Y is equal to activation applied to Wx plus b. A recurrent neuron is a little different. A recurrent neuron has the output Y at some time instance t fed back to its input. A recurrent neuron not only accepts X values at a certain time instance t at its input, but it also accepts the previous output, the previous Y at t-1 at its input. Let's understand and break this down bit by bit. The input to a recurrent neuron is X at some time instance t. This X will be different at different time instances over the sequence. The input X is multiplied by its own set of weights. That's Wx. In addition, a second input to the recurrent neuron is the output from the previous time instance, the output Y of t-1. This output Y of t-1 has its own weight vector W of y. In essence, a recurrent neuron differs from a feedforward neuron. In that, the output Y is fed back to the input, and this feedback loop
>
> **[1:36](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/recurrent-neural-networks-for-sequential-data?u=76281980&t=96)** is used to generate the next output in the sequence. Practically in a recurrent neuron, it's not the previous output Y that's fed back to the input. Instead, every recurrent neuron has a hidden state usually represented by h of t. This hidden state of the recurrent neuron can be thought of as an intermediate representation of the input data that was last seen. And this hidden state gives the neuron the ability to remember what happened in the past. And it's for exactly this reason that the hidden state of a recurrent neuron is often referred to as the memory of a neuron. So here is how recurrent neurons are different from feedforward neurons. Recurrent neurons have a memory that allow them to remember the past and learn from the past. And it is this property of a recurrent neuron that allows it to exploit time relationships that exist in data, that allows it to work with sequences. A recurrent neuron has the hidden state from the previous time instance fed back in the next time instance. That is a hidden state from time instance t-1 is fed back to the neuron at time t. This hidden state that's fed back in the next time instance contains information of all of the previous inputs and outputs that this particular recurrent neuron has seen. This hidden state contains the memory of the recurrent neuron. Now the question arises:
>
> **[3:09](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/recurrent-neural-networks-for-sequential-data?u=76281980&t=189)** How does a recurrent neuron accept inputs at different time instances? So how do you feed in a sequence to a recurrent neuron? And this is done using a process that's called unrolling through time. A recurrent neuron is able to accept input at different time instances by unrolling through time. This is how recurrent neurons deal with sequential input. Imagine a single recurrent neuron that's able to accept the value of X at a certain time instance along with the previous hidden state, at the previous time instance and then unroll this through time. Let's see how that would work. At time t equal to 1, the first input in the sequence is fed to the first neuron. Now this will produce some output Y of 1 and some hidden state h of 1. In the next time instance at time t is equal to 2, the hidden state of the first neuron and the second input in the sequence is fed in to the second neuron to produce an output Y of 2 and produce a second hidden state h of 2. This process is then repeated. The hidden state of the second neuron and the third input in the sequence is fed in to the third neuron to get the third output Y of 3 and produce a third hidden state, which is then fed in to the fourth neuron, which then feeds in to the fifth neuron, and so on. So how far do you the input neuron? Well, you unroll the neuron
>
> **[4:43](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/recurrent-neural-networks-for-sequential-data?u=76281980&t=283)** for as many time instances as you have in your input. That is the length of your input sequence determines how far you unroll the recurrent neuron. When you're building neural networks, you arrange your neurons in layers. You don't work with single neurons. How are the layers of a recurrent neural network constructed? Well, you set up an RNN cell, which corresponds to a single layer in your recurrent neural network. And an RNN cell will be made up of multiple recurrent neurons. And you then unroll this RNN cell to make up the recurrent layers of your neural network. The number of layers in your recurrent neural network depends on the length of the sequence that you feed in, the number of time instances you have in your input data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Neural Networks]] (3)
> **Env Vars:** rnn (3)
> **Cross-References:** in the next (3)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Analogies:** imagine (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [The need for long memory cells](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-need-for-long-memory-cells?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-need-for-long-memory-cells?u=76281980&t=1)** - RNN memory cells have a hidden state that allow the cell to remember the past. However, the memory capacity of such a cell is not very big which is why, in order to get the best results from our recurrent [[Neural Networks]], we need to use long memory cells. Now, the regular recurrent cell suffers from what we call short-term memory. We've discussed in the earlier video that the memory of a recurrent neuron is because of the hidden state that it holds. It is this memory that allows recurrent cells to remember what happened in the past, what went by in the sequence, and that's what allows recurrent neurons to predict the next bit of information in the sequence. However, the memory capacity of a regular recurrent neurons is not very large. The simple hidden state is not enough to store all of the information from the past. Now, if you're working with very long input sequences your recurrent neurons may not process these well and you will not get good results at the output. That's because these recurrent neurons will not have very much memory capacity and they'll not be able to remember information from time instances very far back in the past, the distant past. We've discussed that the layers of your recurrent neural network are made up of unrolled RNN memory cells. The number of layers in your neural network depends on the length of your input sequence, the number of time instances of your input.
>
> **[1:35](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-need-for-long-memory-cells?u=76281980&t=95)** Now, recurrent neural networks are trained like regular neural networks, once the RNN cell has been unrolled. They're trained using gradient descent. You get the output of the recurrent network, you compute a loss function, you compute gradients, and gradients are then propagated back through the recurrent layers. The model weights are updated using these gradients. Now, the number of layers in your recurrent neural network is equal to the number of time instances in the input data that is equal to the length of the input sequence. Now, often input sequences are very, very long which means you need very deep RNNs in order to process such sequences. Once you have a very deep neural network, all of the problems associated with training deep neural networks come into play. Once you compute your gradients, if you try to propagate these gradients back through many layers of your deep neural network, that may cause the gradients to become very small for the earlier layers, or kind of explode in magnitude at different layers, leading to non-convergence during training. If your gradients fall to a very small value, that's referred to as vanishing gradients. if your gradients explode in magnitude and do not converge that's referred to as exploding gradients. RNNs are extremely prone to the problem of vanishing and exploding gradients. This leads to overall poor performance of your RNN model, long training times, and in general,
>
> **[3:09](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-need-for-long-memory-cells?u=76281980&t=189)** the model that you get won't be a very good one. If the memory capacity of your RNN cell isn't very high, well, you have other problems. Very long sequences may result in your RNN forgetting earlier parts of the input. Let's take a very simple example. Let's consider this little bit of text. "I just love sushi at this restaurant". Now, if this is a review, is this a positive or negative review? Well, for a short sentence, it's super easy. Finding the important [[Microsoft Word|word]] is simple when the sequence is short. Your RNN, while processing this text one word at a time, just needs to look back a little way into the text to find the right word to determine the sentiment of this text. But consider a slightly different example. You have a much longer piece of text that is a much longer sequence, and you are asked whether this is a positive or negative review. Remember, you feed the input text into the RNN one word at a time. Observe that the same information is available as in the previous short sequence, but at the very beginning of this long sequence. Now, by the time the RNN processes every word in the sequence and gets to the very end it's likely to have forgotten what the review said at the very beginning, which means that it's quite possible that the RNN has forgotten that this is a positive review and this is why long memory cells are so important. Long memory cells in recurrent neural networks allow RNNs to remember important details from the past and in general,
>
> **[4:44](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-need-for-long-memory-cells?u=76281980&t=284)** improve the performance of your recurrent neural networks. Now, there are several different kinds of strong memory cells. The two most popular ones are LSTM, or long short-term memory, and the GRU, or the gated recurrent unit.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Neural Networks]] (5), [[Microsoft Word|Word]] (5)
> **Env Vars:** rnn (10), lstm (1), gru (1)
> **Definitions:** is a  (4), means that (1)
> **CLI Commands:** find (1)
> **Speakers:** - rnn (1)

#### [LSTM and GRU cells](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/lstm-and-gru-cells?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/lstm-and-gru-cells?u=76281980&t=1)** - [Instructor] In the previous video, we discussed that the performance of your recurrent neural network can be greatly improved by using long memory cells. And we just quickly mentioned the LSTM or long short-term memory and the GRU or gated recurrent unit as popular long memory cells used in RNS. Now, in this video, let's understand how these work, starting off with the LSTM. The key thing about these long memory cells is that these cells hold additional state within them. For example, LSTM cells hold additional memory that allows them to keep track of important information that went by in the past. LSTM cells also have the capacity to forget unimportant information so that the cell state is not overloaded with irrelevant details. Each time a new input from the input sequence is presented to the cell, this new input is considered in addition to all of the existing information that the cell already remembers and this new input and the existing information are weighed against one another, and the cell makes the decision as to what parts to remember and what parts to forget. Let's see a quick overview of how the long short term memory or LSTM cell is set up. The information available to the LSTM cell at any point in time is processed using a number of different gates. Each of these gates can be thought of as
>
> **[1:34](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/lstm-and-gru-cells?u=76281980&t=94)** [[Neural Networks]] of their own. Each gate plays a different role in helping the cell figure out what information to remember and what to forget. Let's consider them in turn. We have the forget gate here. The forget gate is responsible for deciding what information should be kept with the cell and what information should be forgotten or thrown away. The forget gate looks at two bits of information to make its decision. It uses the previous hidden state of the cell and the input at the current time instance to the cell. The forget gate will output values to decide what to keep and what to throw away. Values close to zero means information should be forgotten. Values close to one indicate that information is important and should be preserved. Next, we have the input gate. The input gate is used to add new information to the cell at the current time instance. At each time period, a new part of the input sequence will be available, and the input gate determines how important that is. The new input is combined with the previous hidden state. Once again, the input gate uses zero and one values to determine what to throw away and what to keep. Values close to zero meaning irrelevant information. Values close to one means important information that has to be remembered. The forget gate and the input gate acting together produce the cell state of this long short term memory cell. We also have this output gate.
>
> **[3:08](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/lstm-and-gru-cells?u=76281980&t=188)** The output gate is responsible for figuring out what the new hidden state of the cell should be and this new hidden state is then what is carried over to the next time instance. And a combination of all of these gates and the additional cell state allows LSTM cells to remember important details from the past and forget irrelevant details from the past. Having understood how the LSTM functions we can turn our attention to the GRU or the gated recurrent unit. Now, the GRU cell is just a newer generation of the LSTM cell, and it has much of the same functionality. It's built using the same underlying idea. You use gates to remember important details and forget unimportant details. A major advantage of the GRU cell tends to be that it uses fewer gates as compared to the basic LSTM cell. Because there are fewer gates, there are fewer tensor operations to perform during the training of your neural network. So GRU cells tend to be faster to train. Now whether GRU cells are better than LSTM? Well, that's hard to say. That really depends on your specific use case. Here is an overview of what a GRU cell looks like. You can immediately see that it's far simpler than the corresponding LSTM cell. We have an update gate here. The update gate is similar to the forget gate and input gate for the LSTM. This gate looks at the new input available at that time instance
>
> **[4:41](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/lstm-and-gru-cells?u=76281980&t=281)** and then decides what information to keep and what information to throw away. Another gate that's here is the reset gate and the reset gate is used to determine how much or what part of the past information should be forgotten. This is the GRU cell, a simpler version of the LSTM.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Neural Networks]] (1)
> **Env Vars:** lstm (14), gru (8), rns (1)
> **Cross-References:** previous video (1), we discussed (1)
> **Analogies:** for example (1), similar to (1)
> **CLI Commands:** make (1)
> **Definitions:** is an  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Types of RRNNS](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/types-of-rrnns?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/types-of-rrnns?u=76281980&t=1)** - [Instructor] Now that we've understood recurrent [[Neural Networks]], we are closer to discussing attention based models, but there are a few details to cover before that. The first of these are the different types of RNN's, now, RNN's can be categorized based on whether they accept vectors or sequences as input and whether they generate vectors or sequences as output. This results in four categories, we have Vector in, Vector out RNNs, we have RNNs that take in a Vector and produce a Sequence, we have RNNs which take in a Sequence and produce a Vector and finally we have RNNs that take in a Sequence and generate a Sequence at the output. Now, if your RNN is not really dealing with sequences it's just a simple feed forward neural network because it does not have input over time periods or time instances. Vector in Sequence out, these are RNNs, this is where you start with a single input and generate a sequence. An example of a Vector in Sequence out model is a text generation model, a text generation model, you might feed in the first [[Microsoft Word|word]] of a sentence and get the remaining words of the sequence. So this is the vector input, exactly one word that is the start of a sentence, the vector input is used to generate the next word in the sequence, the next word is then fed in as an input for the next layer, which generates the third word which is then fed into the next layer which generates the fourth word till we get a sequence
>
> **[1:34](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/types-of-rrnns?u=76281980&t=94)** at the output. A Vector in Sequence out RNN is also referred to as a One to Many RNN. The next type of RNN is a Sequence in Vector out RNN, you start with a sequence and generate a single output for that entire sequence and an example of such a model is something that we would use for sentiment analysis. Sentiment analysis models accept the entire sequence of X at their input, so you'll feed in one word at a time so that the ordering of the word is also considered and at the output, the final output will be a sentiment, positive or negative. Even though you might get an output at all of the intermediate steps or layers of the RNN, you only consider the output at the last time instance, that is the final prediction. Sequence in Vector Out models are also referred to as Many to One RNNs. And finally, we have the last type of RNN, this is the kind that we'll be working with, sequence to sequence models, you start with the sequence and use that to generate another sequence at the output. There are different kinds of sequence to sequence models depending on what you are trying to predict, for example, if you have a model that identifies Parts of Speech, such a model has an equal length output for a particular input. The length of the output is always equal to the length of the input in such a sequence to sequence model. However, Language Translation Models,
>
> **[3:09](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/types-of-rrnns?u=76281980&t=189)** which are also sequence to sequence models work a little differently, this is because the length of the input in a certain language may not match the length of the corresponding output. Language Translation models are also sequence to sequence models. Now, why was it important to know these different types of RNNs? When you work with attention based models, attention is generally used to improve the performance of sequence to sequence models.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (8), [[Neural Networks]] (1)
> **Env Vars:** rnn (9)
> **Definitions:** is a  (2)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 2. Encoder-Decoder Networks for Language Models

[↑ Back to Table of Contents](#table-of-contents)

#### [Language generation models](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/language-generation-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/language-generation-models?u=76281980&t=1)** - [Instructor] In this video, we'll get a quick overview of how sequence to sequence models work for language generation. The principles and structure that we'll discuss for the recurrent neural network here are just general principles for language generation models. We'll specifically discuss language translation models in the next video. Now, language generation models. The input is a sequence of words. The output is a sequence of words. The [[Microsoft Word|word]] that is generated at some time instance t-1 is fed as an input to get the next word in the sequence at time t. You'll find that this is a pretty standard set up for any language generation model. Because sentences are sequences, you can use the word at the current time instance to predict the word at the next time instance. Here is an architectural overview of what a language generation model might look like. Now, this is an unrolled RNN where we are feeding in different words as input at different time instances. [[Neural Networks]] only understand numeric input, which means your input words have to be converted to numeric form. And the most common representation for input words is one-hot encoding. So the words input to the RNN at different time instances are one-hot vectors. The dimensionality or the size of this one-hot vector depends of course on the size of your vocabulary. It's common practice in an RNN to have an additional embedding layer
>
> **[1:35](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/language-generation-models?u=76281980&t=95)** that accepts one-hot vector representations of words and converts each word to an embedding a lower dimensionality representation. The weights of the embedding layer is also trained during the training of the RNN. The individual words in the sequence are input to the RNN cell, which is then unrolled through time. The number of layers in the RNN is equal to the number of elements that we have in the input sequence. So if the input sequence has 20 words, that's the length of your sentence, your RNN will have 20 layers. Typically, the first word in the input sequence is used to get a prediction that is the second word of the sequence. Next, we have the second word in the sequence used to predict the third word of the sequence. Observe how the hidden state of the RNN is fed through to the next layer. Because of the sequential nature of sentences and the feeding of this hidden state from one layer to the other, the output at each time step depends on all of the words that have been seen so far in the input sequence. What the RNN outputs at every time step, that is any Y that you see here in this diagram, is actually a [[Probability]] distribution over all of the words in the output vocabulary. And this probability distribution gives us the likelihood of what the next predicted word might be. Each input that you feed in at a time step produces an output probability distribution
>
> **[3:09](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/language-generation-models?u=76281980&t=189)** over all possible words from the vocabulary. Of all of the words in the vocabulary, what is the most likely word at this time step? This probability distribution depends on all of the words in the sequence seen so far. So the probability of a particular word at the output depends on all of the words seen so far in the sequence. Given all of the words seen so far, what is the most likely next word in the vocabulary? Here, V of i is the ith word in the vocabulary generated at time instance t. So how do you train a language generation model? At every step, the output is a probability distribution over the words in the vocabulary. You compare the word generated by the model with the actual next word in the sequence. That is part of your training data. You typically use a loss function, such as the cross-entropy loss function that allows us to compute the divergence between the word predicted by our model and the actual word from the training data. So at any point in time, we are trying to predict the next word in the sequence. In order to generate the sequence using the model, let's say we've seen three words so far, and then we have the output here at time instance four. We know that the output at every time step is a probability distribution over all possible words in the vocabulary. We look at the probability distribution
>
> **[4:44](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/language-generation-models?u=76281980&t=284)** and pick the word that is most likely at this particular time step t. Now that we have a word, let's say that's Y4, that is then fed back to the next layer of the RNN as an input and used to generate the next word in the sequence. And this continues till we generate all words in the sentence.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (22), [[Probability]] (8), [[Neural Networks]] (1)
> **Env Vars:** rnn (10)
> **Definitions:** is a  (5), is an  (2)
> **CLI Commands:** find (1)
> **Cross-References:** in the next (1)
> **Analogies:** such as (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Sequence to sequence models for language translation](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/sequence-to-sequence-models-for-language-translation?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/sequence-to-sequence-models-for-language-translation?u=76281980&t=1)** - Now that we have a big picture idea of how language generation models work, let's understand how language translation models work. These are sequence to sequence models. Let's assume we have a simple language translation model to translate from English to German. So if you feed an I ate an apple you'll get the equivalent sentence in German. Please forgive me if I don't try to pronounce the German sentence. I'll just fail miserably. Now, language translation models are sequence to sequence models, and the model structure uses two different networks. The first network is an encoder, and the second network is a decoder. Because the encoder takes in the sentence in the original language as an input, The encoder is an RNN. The decoder produces a sentence in the target language as an output. The decoder is also an RNN. The encoder works on the sequential input in the source language. Decoder produces sequential output in the target language. Now the job of the encoder is to read in the sentence in the source language and capture the entire sentence in the form of a representation, so the end coder learns a representation of the input. Let's [[Zoom]] into the encoder RNN here. Because it's a recurrent neural network, and it's operating on the sequence, a single [[Microsoft Word|word]] from the source language is fed in at each time instance. This is the sequence of the input sentence fed into the encoder recurrent neural network. Usually you use a special token,
>
> **[1:35](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/sequence-to-sequence-models-for-language-translation?u=76281980&t=95)** such as, the end of sentence token to indicate that the sentence has ended or has been terminated. The last hidden state output of the encoder R.N.N. captures the entire information about the input sequence. so all of the details of the input sequence is embedded within this hidden state. This hidden state output of the encoder that captures the essence of the entire input sentence is what is fed into the second recurrent network that is the decoder, which is responsible for generating the translated sentence. So zooming out to our original diagram here the hidden state output of the encoder is fed into the decoder RNN. The decoder RNN then uses this hidden state to start generating the words in the translated language that is the target language. The decoder is also a recurrent neural network which means it produces or generates one word for each time instance. Now the output at single time instance is then an input to the next time instance during the generation of the translated sentence. So the output produced at time T minus one is the input at time P, along with the hidden state of the decoder at time T minus one. The translated sentence is generated till your decoder RNN producers and US token
>
> **[3:10](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/sequence-to-sequence-models-for-language-translation?u=76281980&t=190)** that indicates the end of sentence. So starting with the hidden state at the encoder output which captures the information of the entire input sentence the decoder generates the translator sentence one word at a time. As in the case of language models, the standard practice is to represent the input words using one hot vectors. These one hot vectors are then converted to embeddings, that is lower dimensionality representations. The embedding layer is a trainable layer and embeddings are learned as the neural network is trained. The output produced by the decoder is also in the form of embeddings, which are then converted to one hot vector representations of words. As we discussed in the previous video when we spoke of language generation models, the output at each time instance is not a word. It's actually a [[Probability]] distribution over all the words in the target vocabulary. In order to train this encoder decoder network, we compute the loss using a loss function such as the cross entropy loss that we compute the divergence between the actual word in the training data and the word generated by our model. Once training is complete, during prediction, when we actually producing the translation, we'll always use the previous word in the generated sequence to produce the next word.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (8), [[Zoom]] (1), [[Probability]] (1)
> **Env Vars:** rnn (6)
> **Definitions:** is an  (2), is a  (2)
> **Analogies:** such as (2), picture (1)
> **Cross-References:** we discussed (1), previous video (1)
> **Speakers:** - now (1)


### 3. Attention-Based Neural Networks

[↑ Back to Table of Contents](#table-of-contents)

#### [The role of attention in sequence to sequence models](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-role-of-attention-in-sequence-to-sequence-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-role-of-attention-in-sequence-to-sequence-models?u=76281980&t=1)** - Attention plays a very important role in sequence to sequence models and it can greatly improve their performance. Now why is that? Well, let's take a look at our language encoder, decoder model, our sequence to sequence model, and see if you can figure out what's wrong with this particular framework. Essentially, we have a single hidden state, the output at time step t, which is supposed to represent the entire input sentence. The hidden state is a single vector, the output of the last encoder RNN layer, and it's supposed to represent the entire sentence so it's a very compressed representation. So all of the complexities of the input sentence is embedded into this single hidden state. If you're only working with very short sentences, this may not be a problem, but as you work with longer sequences, more complex sentences, a single vector is unlikely to be able to hold all of the information in the input sentence. Especially in the input sequences very, very long. And this will result in information overload. This hidden state becomes some kind of bottleneck. Let's say you wanted to translate this really long sentence from Stuart Little. Well, that will cause an information overload in the hidden state. If you have very long sentences for translation, the [[Microsoft Word|word]] generated in the target language might reference something very far back in time in the source language. The question then is will the hidden state remember
>
> **[1:34](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-role-of-attention-in-sequence-to-sequence-models?u=76281980&t=94)** the beginning of the original sentence in order to provide the right translation at the end of the output sentence? Maybe unlikely. Now, language translation models are often evaluated using a metric called the Bleu Score, the bilingual evaluation understudy, it's a score for comparing a candidate translation of text to one or more reference translations. The expectation for a language translation model is that as the sentences get longer, the translations get better and they level off at some high level. But what researchers found was the score for sentences tends to fall drastically as sentences get longer, and that's because of our hidden state bottleneck. Now, let's think about the information that we have and the information that we actually use. In fact, all of the hidden values generated in the encoder network are meaningful and they contain information. All of these hidden values contain important information. We have them right there. Then why are we not using them? Another thing that we've seen in language translation is that different hidden values may have different relationships to different parts of the output. Let's say we are trying to produce a translation for the word apple. Then the word apple from the input sequence will have the most information for the corresponding translation. The hidden states for the other words, "I ate an", are less relevant.
>
> **[3:08](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-role-of-attention-in-sequence-to-sequence-models?u=76281980&t=188)** The same is true, for say, translating "ate". This roughly maps to two words in the German output which means while producing those two words at the output the decoder should pay special attention to the hidden state for the word "ate". And this is exactly why attention is needed. We know that all hidden values in the encoder contain information. Now, if you just have a single hidden state to represent the entire input, that dilutes the information that is passed on to the decoder and this results in a worse model than you could build if you use attention. Now, we know that different parts of the input affect different parts of the output but we may not know this upfront. We don't know which part of the input sequence affects which part of the output sequence. Especially in language translation, the sequence of the words that the input may not match the same sequence at the output because the structure of languages is often different. Now, a naive approach to improving the performance of this model might be to say connect all of the inputs to all outputs. But this does not work well in practice because your model then ends up being overparameterized and it's hard for the decoder to pay attention to everything. Connecting up everything essentially tells the decoder everything is important. It also ignores the synchronous dependence of the output on the input. The fact that the input is a sequence which affects the output sequence.
>
> **[4:41](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-role-of-attention-in-sequence-to-sequence-models?u=76281980&t=281)** And this is exactly why attention models are needed. They help pay attention to relevant portions of the input at every time stamp in the output.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (4)
> **Definitions:** is a  (2)
> **Env Vars:** rnn (1)
> **Speakers:** - attention (1)

#### [Attention mechanism in sequence to sequence models](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-mechanism-in-sequence-to-sequence-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-mechanism-in-sequence-to-sequence-models?u=76281980&t=1)** - [Instructor] Now that we've understood the importance of attention, let's see how we can include attention models in sequence to sequence networks. Now here is the encoder and decoder network for language translation. Now, I've set it up a little differently so that we can clearly see where attention fits in. At the bottom here I have the encoder network. X1 through XT are the input to the encoder RNN at different time instances. These are the input words in the sequence. h1 through hT represent the hidden state of the encoder RNN. Again, at different time instances. You can think of h1 through hT as the hidden state for the individual words in the input sequence. Up here on top I've represented the decoder recurrent neural network. The output of the decoder at any time instance is yt, and you can see that the output at time instance t-1 is connected back into the input at time instance t. So y1 is connected to the second neuron, y2 is connected to the third neuron and this goes all the way through. S1 through SK represent the hidden states of the decoder network, and observe that the hidden states of the decoder layers are connected to one another. That is the hidden state at time instance t is fed into the decoder layer at the next time instance. In the original encoder-decoder model, the final hidden state of the encoder is fed as an input to the decoder to start the language translation process.
>
> **[1:40](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-mechanism-in-sequence-to-sequence-models?u=76281980&t=100)** This is what we highlighted as a bottle neck in the previous video. Now, what do a attention models do? Attention models create a shortcut mechanism that connects the context vector, Ct and the entire source input X. So you can see there is a direct connection from the hidden state of the encoder RNN layers through the context vector and through the decoder. The context vector here encapsulates the attention mechanism that forces the decoder to pay attention to the relevant portions of the input. Now, how does attention mechanism help this shortcut from the input to the decoder that produces the output ensures that each output of the decoder has access to the entire input sequence, not just a hidden state representation. The context vector enables the decoder to selectively pick out specific elements from the sequence to produce the output. So the decoder can specifically look at those portions of the input that are the most relevant at the current time step. Going back to our visualization here, here is the attention mechanism that allows the decoder to selectively look at the relevant portions of the input. Let's see how this attention mechanism works. A context factor is generated at every time instance and fed as an input to the decoder at each time instance. The context vector uses weights to determine
>
> **[3:14](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-mechanism-in-sequence-to-sequence-models?u=76281980&t=194)** which portions of the input sequence are important to generate the output at any time instance t. So it's pretty obvious that the context vector will be different for different time steps. At every time step to the decoder, the context vector serves as an additional input into the decoder layer. So along with all of the other inputs, we also pass in the context vector. That is the attention mechanism. You can see that the output of the decoder at each time step depends on three separate components. There are three separate inputs going into a decoder layer. Now, what are these three instances? The hidden state of the previous decoder layer, that is St-1. The [[Microsoft Word|word]] that was generated in the previous time instance, that is yt-11. And then we have this additional context vector Ct, which tells that decoder layer what portions of the input to pay attention to at this time step. So how do you get this context vector? It's computed using a weighted combination of the encoder hidden states. And the weight assigned to a particular hidden state indicates how important that hidden state is. These weights are referred to as alignment weights. Now, these alignment weights change at every time step. That is the weights assigned to the hidden states of the input vary over time. There are different weights at different time instances. The alignment weights represented by alpha
>
> **[4:51](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-mechanism-in-sequence-to-sequence-models?u=76281980&t=291)** are different at different steps in the sequence. The weights depend on the word that is to be predicted by the decoder RNN. The weights are automatically set up in such a manner that they highlight the most important input components for any part of the output at any time step. Here is a mathematical formulation for computing the context vector that is an input to the decoder at each time step. hJ here is the hidden state of the encoder for different inputs in the sequence. The hidden state corresponding to the different words in the input sentence. The hidden state does not change over time, which is why you don't see ht here in the subscript. Alpha here refers to the alignment weight vector. Now, the weight vector has weights for different inputs in the sequence, and the weight vector changes over time. That's why you see the t subscript. And because the weight vector changes over time, the context vector also changes over time. So weights will vary at different time instances, and the context vector will change accordingly. And finally, one last thing to note is, the sum of all of the alignment weights at any time instance will be equal to one. Think of these alignment weights as probabilities assigned to each input in the sequence, the probabilities have to sum to one.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (2)
> **Env Vars:** rnn (4)
> **Definitions:** is a  (2), is an  (1), refers to (1)
> **Code Identifiers:** ht (2), hj (1)
> **Cross-References:** previous video (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Alignment weights in attention models](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/alignment-weights-in-attention-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/alignment-weights-in-attention-models?u=76281980&t=1)** - [Narrator] In this video, we'll discuss how these alignment weights are computed, and that will lead us to understanding how different kinds of attention models can be used in our sequence-to-sequence models. At this point, hopefully you've already understood the role of these alignment weights in our attention mechanism. The weights capture the relative importance of each position in the input to the current output, that is the output at a certain time step. So now the question is, how exactly are these alignment weights computed? In order to compute alignment weights, you first compute raw weights. And raw weights are computed using a scoring function which operates on the hidden state of the decoder and the encoder. This raw scoring function is what determines the kind of attention mechanism that you're using in your model. Change the scoring function; you change the attention mechanism. We'll briefly discuss a few different kinds of attention models at the end of this video, but you should know it's the attention model that generates these raw scores. In order to convert these raw alignment scores to weighted probabilities, we pass the raw score through a soft max layer. The actual weights assigned to each input in the sequence are computed using the soft max function. The output of the soft max layer is a [[Probability]] distribution, which gives us the importance of each input state. Inputs that have higher probabilities
>
> **[1:36](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/alignment-weights-in-attention-models?u=76281980&t=96)** at a certain time instance are more relevant to the output that is to be produced at that time instance. The soft max function is applied to the raw scores that were computed using some kind of attention mechanisms. Now, there are a number of different attention mechanisms that you could use. There is content-based attention, dot-product attention, scaled dot-product attention, location-based attention, and so on. Each have their own formula for computing the raw scores. Now the kind of attention that we are going be using, later on when we build and train an image captioning model, is this additive attention, also called Bahdanau's attention, named after the person who originally researched and published this.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Probability]] (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)

#### [Bahdanau attention](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/bahdanau-attention?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/bahdanau-attention?u=76281980&t=1)** - [Narrator] Since our image captioning model, we'll use Bahdanau's Attention. Let's understand the mathematical formulation of this attention. This is additive attention. The raw score in Bahdanau's attention mode is computed using this formula. Now there is a lot going on here, but let's break this down. It's very straightforward. S of T minus one here refers to the hidden state of the decoder at time instance E minus one. This is an input to the attention model. Now another input to the attention model is the hidden state of the encoder. H J here is the hidden state for each element of the input sequence. This is fixed. Once we know the input sequence it does not change over time. Bahdanau's attention is addictive attention because you apply a weight vector to each of the hidden states the encoders and decode hidden state and then you add these weighted hidden states together. Once you've added the weighted hidden states, you pass that through a tanh function and the output of the tanh is then multiplied by another trainable vector. Let's understand Bahdanau's attention mechanism visually. Now we have the hidden states of both the encoder and the decoder and we pass both of these through separate weights layers. So we have two different weights layers, W decoder, which acts on the decoder hidden state.
>
> **[1:34](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/bahdanau-attention?u=76281980&t=94)** W N coder that acts on the encoder hidden state. The result is the weighted output of the encoder and decodor hidden state. That's within the brackets of our formula. Now this weighted output is then added together and passed through a tanh function. The output of the tanh function is then multiplied by a trainable weight vector. A weight vector whose weights are found during the training process. And the result of this multiplication gives us the alignment scores. These are the raw alignment scores. Once we have the raw scores from our additive model, we can pass these raw scores through a soft max function to get alignment weights in terms of probabilities. These [[Probability]] weights are the attention weights. Soft max generates the probabilities representing the weights associated with each input in the input sequence. We use these alignment weights and apply them to the output of the encoder and this will give us the context vector. The context vector will us magnify the important portions of the output at this particular time instance, and drown out irrelevant or unimportant portions. Now that we have the context vector that tells the decoder what portions of the input to pay attention to, that becomes an additional input to our decoder recurrent neural network. So, for every layer of the decoder RNN,
>
> **[3:09](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/bahdanau-attention?u=76281980&t=189)** we feed in the decoder hidden state from the previous layer, the context vector at this current time instance, and the decoder output of the previous layer. The decoder output of the previous layer is the last [[Microsoft Word|word]] generated in the sequence which is now used to generate the next word.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (2), [[Probability]] (1)
> **Definitions:** is a  (1), refers to (1), is an  (1)
> **Env Vars:** rnn (1)
> **Speakers:** - [narrator] (1)

#### [Attention models for image captioning](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-models-for-image-captioning?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-models-for-image-captioning?u=76281980&t=1)** - Now, so far we've discussed how attention models work with encoders and decoders for language translation. But how will we use attention models in image captioning? Well, the principle is the same as that of language translation models, but there are some interesting twists. The main thing is if you're working on images, images are not really sequential input. Which means when you focus attention on parts of an image, you're not actually focusing attention at different time instances in an input sequence. You're actually focusing attention across a two dimensional representation, the image. Also, we generate embeddings or representations of images using convolution [[Neural Networks]]. So, we pass an image through a CNN, and we get a representation of the image at the output of the CNN. This image representation, which is the output of the convolution neural network, can be thought of as the hidden state of our encoder. So, our convolution neural network is actually the encoder for an image. What we want to do in our image captioning model, is to take this hidden state, or the representation of the image that we have and then generate text using these image representations. Now, let's get back to the original problem that I had outlined. An image is not really a sequence, and the image representation that we get from a convolution neural network is a representation of the image in its entirety,
>
> **[1:34](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-models-for-image-captioning?u=76281980&t=94)** of the whole image. And it's very hard to generate image captions from the image as a whole. What you really want is an attention model that is used to focus attention on relevant parts of the image that can be used to generate captions. So you want to identify two-dimensional patches on the image that can be used to generate captions. Let's visualize how an attention model works for image captioning. The encoder is a convolutional neural network that generates a representation of an image. Now, the problem here is, that the representation generated by a CNN offers no spatial information. It does not focus on different subparts of the image, which means that our image captioning model that uses attention should not work with the final output of a CNN. Instead, it should extract feature map representations of the input from the output of a convolutional block. The output of some convolutional block may produce C feature maps where every feature map has a height and a width that is M by N. So rather than use the final vector representation of an image, we'll extract these feature maps. Each feature map is of size M by N, and we have a total of C feature maps. Once we have these feature maps, we then extract a slice of the feature map representation. The slice has a depth of C, and dimensions of one by one pixel.
>
> **[3:08](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/attention-models-for-image-captioning?u=76281980&t=188)** We can think of this one by one by C slice of the feature map as representing a portion of the input image. So, this can be projected back and you can think of this slice as containing information from a part of a input image. Unrolling the feature map representations will give us slices of the input image to work with. And we can then focus our attention mechanism on these slices. Remember, these slices represent portions of the input image, and we want our attention model focused on the relevant portions of the input image while generating captions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Neural Networks]] (1)
> **Env Vars:** cnn (4)
> **Definitions:** is a  (2), is an  (1), means that (1)
> **Speakers:** - now (1)

#### [Encoder decoder structure for image captioning](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/encoder-decoder-structure-for-image-captioning?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/encoder-decoder-structure-for-image-captioning?u=76281980&t=1)** - [Instructor] Now that we have a big picture understanding of how attention models can be used for image captioning let's look in some detail at the encoder decoder structure that we are going to be used in our image captioning model. Now, this is what the model looks like. I know there are lots of moving parts here, but we'll break things down and understand them bit by bit. The encoder of the image captioning model is essentially a convolutional neural network. Now, in order to set up our attention mechanism we'll use the feature map representations generated by a convolutional block as an input to our attention model. The decoder of our image captioning model is a recurrent neural network, which makes sense because we want to generate language. The caption for every image will be text that we generate in the English language. The center block that you see here is our attention block. We will be using Bahdanau's attention. The additive attention that we studied earlier. Observe that the attention block connects the encoder output directly to the decoder network. The convolution neural network that we'll use as our encoder is going to be a ResNet-50 pretrained model. ResNet, which stands for residual network is a widely used image classification model. This model has been pretrained on the ImageNet data set and can classify images into a thousand different categories. This is what we'll use to generate feature map representations of our input image.
>
> **[1:35](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/encoder-decoder-structure-for-image-captioning?u=76281980&t=95)** The output of the ResNet model will be taken from the last convolutional block. The last convolutional block produces 2048 feature maps. Then each feature map is seven by seven. This is, of course, considering that the input image is of size 224 by 224, and that's the size that we'll use. These feature maps will be passed through a linear layer to generate the hidden output of the encoder. This is the hidden state that represents the entire input image. The input to the Bahdanau's attention model will be the hidden state as well as the unrolled feature map. Remember, we have 2048 feature maps where each feature map is seven by seven. We unroll them to get 49 feature maps with a dimensionality of 2048. That's the input to our attention block. The attention mechanism that we'll use will be Bahdanau's attention, and this will generate to output. The context vector, that will be the input to the decoder and the attention weights that we use to visualize how our image captioning model generates captioning text. Now, the dimensionality of the attention rates will be 49. One corresponding to each unrolled feature map. The decoder recurrent neural network will be trained on captions in the training data. Captions will be represented using one hot encodings, which are then converted to embeddings.
>
> **[3:10](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/encoder-decoder-structure-for-image-captioning?u=76281980&t=190)** So the embedding at time instance T is the [[Microsoft Word|word]] from the caption fed into the decoder network at time instance T. The context vector from the attention model will be concatenated with the embedding at time instance T, and that will be the input to our decoder RNN. The decoder will have all of the inputs, its previous hidden state, the context vector, the embedding at time instance T to produce the output at time instance T plus one. That is the next predicted word.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (2)
> **Definitions:** is a  (2), stands for (1)
> **Env Vars:** rnn (1)
> **Analogies:** picture (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 4. Image Captioning Model without Attention

[↑ Back to Table of Contents](#table-of-contents)

#### [Setting up Colab and Google Drive](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/setting-up-colab-and-google-drive?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/setting-up-colab-and-google-drive?u=76281980&t=1)** - We'll implement the code for all of the demos in this course using Colab notebooks. And we'll have our data set loaded onto [[Google Drive]]. So here I am, logged in with my user account on my Google Drive, And I've already uploaded the data set that we are going to be using. That is the flickr_dataset. You can see that it's in a sub folder within my My Drive folder. I'm going to click through, and show you how the data looks. Within the flickr_dataset folder there is a zip file called flickr8k.zip. This is the zip file that contains the images that will be are training data, as well as the captions corresponding to those images. Now what I've done is, I've unzipped those files, so you can see the structure of what the images look like, and how the captions are set up. The unzipped image files are in this images sub folder. And the captions file is this captions.txt file, that you see here on screen. So let's click through to images, and see what an image looks like. You can see that there are a number of JPG files in here. I'm going to click on one of these files, and you'll see a sample image that will be part of our training data. This particular image depicts some kind of scenery. There is water, there are trees, and so on. Now the remaining images are the same way. You can click on some other images, and see what the data looks like. Another sample image here is one of dogs playing. Now that you've understood, what the individual images look like. Let's head back to flickr_dataset. Let's quickly glance at the captions.txt file,
>
> **[1:35](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/setting-up-colab-and-google-drive?u=76281980&t=95)** and see how the captions for these images are set up. You can see that every row in this text file contains two bits of information. The first is the name of the image file, and the second is a text description of what's in that image file. As you can see from the highlighted portion in this dataset, every image contains five different text descriptions. So there are five captions for each image, and you'll see this pattern across this entire dataset. Now that we've seen what the dataset looks like, let's head over to Colab and log ourselves in. Colab is a project made freely available by [[Google]] for researchers and students to build and prototype their machine learning models or any kind of [[Python (Programming Language)|Python]] code, not just ml. Colab offers cloud hosted Jupyter Notebooks, which can be run on CPUs or GPUs for absolutely free. There is a limit to the GPU use, but you should be able to run all of the demos of this course, just fine. Go ahead and sign in. Colab requires a Google account for you to be able to use Colab. The Google account that I've used to log into Colab is the same Google account that I used to log into Google Drive. And where I've uploaded the dataset that I used to train my model. When you first log into Colab, you should see a dialogue pop up like this. Choose the Upload option and select Choose file and I'll upload the notebook that contains my code for image captioning without attention.
>
> **[3:09](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/setting-up-colab-and-google-drive?u=76281980&t=189)** Once the notebook has been uploaded and is available in Colab, I'm just going to set up a few configuration settings. First, I'll go to Tools and Settings, and enable line numbers on the individual code cells. Click on Editor. Within this, you'll find an option for Show line numbers. That's what I've enabled, and I'm going to save this setting. Now we have line numbers for each cell, that's easier for you to follow along. The next change I make is to change the runtime type under the Runtime menu. The image captioning code is fairly processing heavy, which is why I want to run this code using a GPU accelerator rather than on a CPU. So I'm going to select the GPU option here in Notebook settings, and hit Save. This means all of the code that I execute will run on the GPU. This will allow us to train fairly decent models by running the training process for about 30 to 60 minutes. Not longer.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (4), [[Google Drive]] (3), [[Python (Programming Language)|Python]] (1)
> **Tools:** colab (9), jupyter (1)
> **Env Vars:** gpu (4), jpg (1), cpu (1)
> **UI Navigation:** click on (3), go to (1), select the (1)
> **Definitions:** is a  (4)
> **CLI Commands:** python (1), find (1), make (1)
> **Code Identifiers:** flickr_dataset (3)
> **Prerequisites:** set up (3)

#### [Loading in the Flickr8k dataset](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/loading-in-the-flickr8k-dataset?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/loading-in-the-flickr8k-dataset?u=76281980&t=1)** - We have CoLab set up. We have our dataset uploaded to [[Google Drive]]. We're ready to get started coding. Now, the name of this notebook is Image Captioning Without Attention because that's the model that we are going to build. We're going to look at images and try to generate captions for them using an RNN decoder but we will not use Attention. We'll look at the captions generated by this model and use that as a baseline for the next model where we will, indeed, use Attention to generate captions. The code that I've used here, in this demo is a modified version of the code available at this URL here on Kaggle and the data set for image captioning is also available on Kaggle at this link here. The Flickr 8k set. Now let's set up our import statements. You can see that I'm going to be building our neural network using [[PyTorch]]. You can see a number of imports for [[Pandas (Software)|pandas]] and MAT plot lib. That is to load in, process and visualize our data and then we have all of the Torch related imports. Our data set is on Google Drive. In order to access that data from CoLab, I need to mount the contents of Google Drive to this notebook. Once you run this code you'll get a dialogue, connect to Google Drive and you'll need to set up the right permissions. Log in using your username and password. Click on allow here, so that you give CoLab the permissions to access the contents of your Google Drive folder. Now we can confirm that our Google Drive has been mounted to this CoLab notebook.
>
> **[1:34](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/loading-in-the-flickr8k-dataset?u=76281980&t=94)** Click on this folder icon off to the left and under that, you should find a sub folder called Drive and if you expand this, MyDrive is where your drive contents are located. Now within here, you should be able to find the flickr_dataset sub folder and under that we have the flickr8k.zip file. This is the zip file with our training data. It contains a subfolder with images and the captions.txt file that contains the captions. Now I'm going to get out of here and let's unzip this file into our local folder here on CoLab so that it's accessible to us for training. This code references the zip file on Google Drive and unzips it to the current working directory. Once the unzip process is complete, we'll run an LS command to see what our current working directory looks like. There you can see captions.txt, and the images sub folder with our data. Let's run a quick count of how many images are present in the forward slash content forward slash images sub folder. So how many images are present in our training data? And you can see that there are about 8K images 8 0 9 1 images to be precise. If you remember the contents of captions.txt that contain the image name and the corresponding caption. I'm going to read it in as a pandas data frame and let's take a look at a sample of the content in this image captions data frame. This data frame has two columns. The image column with the name of the image file, the caption column with the corresponding caption.
>
> **[3:09](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/loading-in-the-flickr8k-dataset?u=76281980&t=189)** If you remember, I had mentioned earlier that every image in our training data has five different captions, similar captions, but different and you can see from the shape of the captions data frame that there are 40,000 captions. roughly. Let's quickly take a look at the first 10 captions in our training data and you'll see that these captions correspond to two images. The first five captions here correspond to the first image and the second five captions correspond to the second image in our training data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google Drive]] (7), [[Pandas (Software)|Pandas]] (2), [[PyTorch]] (1)
> **CLI Commands:** find (2), unzip (2), ls (1)
> **Tools:** colab (5)
> **Prerequisites:** set up (3), you'll need (1)
> **File Paths:** captions.txt (3)
> **Env Vars:** rnn (1), url (1), mat (1)
> **Exercise Files:** zip file (3)
> **UI Navigation:** click on (2)

#### [Constructing the vocabulary](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/constructing-the-vocabulary?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/constructing-the-vocabulary?u=76281980&t=1)** - Now that we have loaded in the training data, let's process this data so that it's in a form that can be fed into our machine learning model. First, let's make sure that we are running all of our code using the GPU. Torch.cuda.is_available(), checks for the gpu. Yes, indeed, we do have it on this notebook, which means the device that we use to run our code is a coder device. The image captions will be generated by an RNN decoder, and in order to feed in data to the RNN decoder during training and during prediction, we need to tokenize our English sentences. And that's why we instantiate this tokenizer. In order to run training a little bit faster, and to keep our vocabulary size manageable, we use a counter to track the frequency of the different words that occur in the captions. This will allow us to limit our vocabulary to words that occur fairly frequently. The counter object here will allow us to keep track of [[Microsoft Word|word]] frequencies in the training data. Let's see how the tokenizer works. I invoke the tokenizer on some text and you can see that word [[Tokens]] are generated at the output, a list of word tokens that make up the original sentence. Observe that some pre-processing has been applied to the word tokens before tokenization. All of the words have been converted to lowercase. And also, punctuations have been preserved. We are now ready to build up our vocabulary. Now, this requires us to tokenize every sentence
>
> **[1:36](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/constructing-the-vocabulary?u=76281980&t=96)** in our training data, that is the image_captions. We then use the tokens generated from these sentences, the individual words, to update the counter object. The counter object will keep track of how often each word occurs in the training data. Once we've done this for all of the words in the input training data, we'll use that to build up a vocabulary object. This vocab object takes in a counter as an input argument and observed that I've specified min_freq = 5, meaning I only want to include those words in my vocabulary, which have occurred at least five times in the training data. This min_freq is something that you can change, but now we have a vocabulary with the most frequently used words. Next, I add some special tokens to my vocabulary. The unk_token, or the unknown token, will be for words that are not recognized by the vocabulary words, which haven't occurred very frequently or haven't occurred at all. The pad_token is another token, which allows us to add our caption sentences so they're all of the same length. This is required in the training process because we want all of the sentences in one batch of training data to be of the same length, so that the recurrent neural network decoder, can be unruled to that length. The sos_token signifies the start of a sentence. The eos_token signifies the end of a sentence. Our vocabulary needs to include these special tokens,
>
> **[3:10](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/constructing-the-vocabulary?u=76281980&t=190)** so I'm going to go ahead and insert these tokens at the very beginning. unk_token has an index of 0. The eos_token has an index of 3. And finally, we set the default index of our vocabulary to be the unk_token. So if there is a word that is not part of our vocabulary, that will be replaced by unk. Now let's take a look at the size of our vocabulary. These are the words that will be used by our decoder model to caption images. And you can see our vocabulary is roughly 3000 words in size. 3005. The vocab object that I taught uses an index to represent every word in the vocabulary. So each word will have a corresponding index, and that index is a one-hot representation of the input word. For example, the index corresponding to the word dog, is 29. This means that, in a one-hot vector that has 3005 elements equal to the number of words in our vocabulary, the index at 29 corresponds to the word dog. Let's take another example here. The index of the word boy in our one-hot encoded vector is 142. And our special tokens also have corresponding index values. For example, the eos_token corresponds to index of 3.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (12), [[Tokens]] (8)
> **Code Identifiers:** unk_token (3), eos_token (3), min_freq (2), is_available (1), image_captions (1)
> **Definitions:** is a  (3), means that (1)
> **Env Vars:** rnn (2), gpu (1)
> **CLI Commands:** make (2)
> **Analogies:** for example (2)
> **Speakers:** - now (1)

#### [Setting up the dataset class](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/setting-up-the-dataset-class?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/setting-up-the-dataset-class?u=76281980&t=1)** - Now that we've set up our vocabulary, the next step is to set up a dataset object that will allow our training data to access images and the corresponding captions in the right format, in batches. Our Flickr dataset class here inherits from the base dataset class in the [[PyTorch]] library. The init method, we pass in a bunch of information, the directory where our training images are located, the pointer to the captions file, the vocabulary to generate captions, and transformations that we want to apply to the input images. Now we assign these to variables of this object. We have a pointer to the captions text file, we'll need to extract the contents of the captions file, so, I'm going to read it in as a [[Pandas (Software)|pandas]] data frame. The length of our training data is equal to the number of captions that we have in the file. That is the length of the data frame. We'll extract the captions and the image names in member variables for use down below. The length of this data set is equal to the number of captions in the training data, so, we return self.length. We want to be able to use square brackets to access the data at index positions, so, make sure you specify a definition for this magic method, get item. We access the caption X and the name of the image file at this particular index, and we now use this to load in and set up the data in a tenser format.
>
> **[1:36](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/setting-up-the-dataset-class?u=76281980&t=96)** We access the image file where it's located in our current working directory. That's where we extracted the image and we call Image.open to load the image into our program. Image is a class available in the PIL library, a free open source library for [[Python (Programming Language)|Python]]. If you've specified any image transforms, make sure you apply the transformations to the input image. The next step is to get our caption X in an tenser format. This tenser will be the captions represented in the form of one-hot encodings. In this one-hot encoding, each [[Microsoft Word|word]] will be represented by its corresponding index, and that index represents the position of the one corresponding to that word in a one-hot encoded vector. This lambda function converts an input text to a list of indices, where the indices correspond to the words in the caption. Next, let's set up our caption vector. Initialize an empty list. The first element in that list should be the index for the start of sentence token, and then we have the entire sentence which we construct by calling caption_text_to_index and then we end the caption vector with the EOS or end of sentence token. We then return the image object and our captions text in the tenser format.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (2), [[PyTorch]] (1), [[Pandas (Software)|Pandas]] (1), [[Python (Programming Language)|Python]] (1)
> **Prerequisites:** set up (4)
> **CLI Commands:** make (2), python (1)
> **Env Vars:** pil (1), eos (1)
> **Code Identifiers:** caption_text_to_index (1)
> **Definitions:** is a  (1)
> **Speakers:** - now (1)

#### [Implementing utility functions for training data](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/implementing-utility-functions-for-training-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/implementing-utility-functions-for-training-data?u=76281980&t=1)** - [Instructor] Next, I set up a callable class that will be used by the [[PyTorch]] data loader to load the image as well as the corresponding caption for that image in batches. The data loader is what our training code is used to iterate over batches of training data. The init method of this class accepts a pad index, that is the index of the pad token in our vocabulary, and whether this is the first batch to be generated or not. This class is a callable, that is it can be invoked like a function, so define the call method, and pass in one batch of training data, we'll now get this batch in the right format. The batch passed in is a couple of the image tensors and the caption tensors. You'll see that across this code, I've added in a bunch of comments explaining the structure of data passed in the operations that we apply and the resulting changed shape or structure of the data. The image tensor at the input has the following dimensions, pad size, num channels, height and width of an image. The caption tensor as the first dimension that is the pad size, and the second dimension is the number of words in the caption. Now captions can be of different lengths, so you'll find that in the same batch, we'll have sentences of different length, and then RNNs can't deal with those captions in a batch. We need all of the captions to be of the same length, and we'll achieve this using padding.
>
> **[1:35](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/implementing-utility-functions-for-training-data?u=76281980&t=95)** We then iterate over each image in the batch and add an extra dimension to each image. We'll need this for the conation operation that we perform next. We get all of the images together in a single tensor using torch.cat. We then process each caption in turn. Now all of the captions in the batch are currently of different lengths, and in order to feed the captions together as a batch to the RNN, we need the caption lengths to be the same. so that we achieved this by adding a padding token to all of the captions that are shorter than the longest caption in this batch. The pad sequence function here will ensure that all captions in the batch will have the same length equal to the length of the longest sequence in the batch and our decoder RNN will be unrolled per batch to the length of the longer sequence. The display image utility function displays an image and the caption corresponding to that image, encoded version of the caption. Now, there are a bunch of operations that we need to do. We multiply by the mean of the image net data set, and then add the standard deviation so that the pixel values are such that Matplotlib can plot this image. You'll see that we use these numbers to pre-process the data, we're going to get rid of the pre-processing so that we can display an image from the dataset. Observe that I perform a transpose. Remember, PyTorch expresses every image with the dimensions, num channels, height and width.
>
> **[3:08](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/implementing-utility-functions-for-training-data?u=76281980&t=188)** I'm going flip the dimensions so that it's of the form height, width, num channels, so that Matplotlib can display this image. We are now ready to instantiate our Flickr dataset. Specify the transforms you want to apply to the input images. I perform a resize to 226 by 226, then a random crop to 224. These images are going to be fed into a ResNet-50 pretrained model to extract representations of each image. Now, pretrained models in PyTorch require that the minimum image size be 224 by 224, and that's why I've picked that crop. We convert the image to a tensor, and normalize it by subtracting the mean and dividing by the standard deviation of the ImageNet dataset. This is pretty standard practice. Next step is to instantiate the Flickr dataset, and take a look at the sample images. We have the data set. The length of the dataset will give us the number of training instances, and we know that's roughly 40,000. Remember, each image has five different captions. Let's pick an image at random. I'm going to pick the 10th image in my dataset. We'll display the caption, and also the caption as a token of IDs. Here is the image. You can see the token IDs that make up the caption, and you can also see the actual caption here at the bottom. Note that the caption starts with a SOS or start off sentence token. Let's look at another sample image here. This is the image at index 1500,
>
> **[4:43](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/implementing-utility-functions-for-training-data?u=76281980&t=283)** and this is an image of some kind of balcony. You can see the caption here below. You can see the token IDs. You can see that there are a few unknown words here in the caption text as well, so instead of the actual [[Microsoft Word|word]], you can see the unknown token, the UNK. A word is likely to be unknown because it hasn't occurred more than five times in our vocabulary. Remember, that was the minimum frequency that we chose for words to make up our vocabulary.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PyTorch]] (3), [[Microsoft Word|Word]] (2)
> **CLI Commands:** make (2), find (1), cat (1)
> **Env Vars:** rnn (2), sos (1), unk (1)
> **Definitions:** is a  (2), is an  (1)
> **Warnings:** note that (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Building the encoder CNN](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/building-the-encoder-cnn?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/building-the-encoder-cnn?u=76281980&t=1)** - [Instructor] We are now ready to construct the encoder for our image captioning model. Now, the batch size that you're going to be using for training is 128. So I set that up in a variable. The index of the padding in our vocabulary is the pad_idx, and I've constructed the data loader that we'll use to train our encoder decoder model. The data loader is the class that makes available the training data in batches, when we train our model. Observe how we use the generate batch captions callable object here. We specify the pad index and that this is the first batch. And the data loader will use this collate function, that we have specified, to generate batches of image data and the corresponding captions, such that all of the captions in a batch will be of the same length. The length of the longest sequence in that batch. The encoder model is a convolutional neural network which we'll use to generate image representations. These image representations will be fed into the decoder, and we'll use that to generate a caption for that image. Convolutional neural network that we use for our encoder is the ResNet-50 pre-train model. ResNet-50 is a very powerful image classification model. It was first released in 2015, when it won the ImageNet challenge. ResNet stands for residual network. Now, if you look at the structure of this model, you'll see a number of convolutional and pooling blocks.
>
> **[1:35](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/building-the-encoder-cnn?u=76281980&t=95)** At the very bottom, you'll see that the input to the final linear classifier for this convolution neural network, takes in input of dimensionality 2048. This means that every image is represented using an embedding 2048 in size. And we need to remember this dimensionality. We'll use it in our encoder. Now, let's set up our encoder, using this ResNet-50 pre-trained model. There is the class for the encoder, the encoder convolution neural network, which inherit from nn.Module. In the init function, we take in the size of the embedding that we want to generate. The embedding size will be the size of the initial hidden state that we feed into the DecoderRNN. We use a pre-trained ResNet-50 model to generate embeddings. We won't use the pre-trained weights of the model. We're not going to actually train this model. We are going to generate embeddings, using the trained model. Requires_grad is false, because you're not propagating gradients through this network. That's not part of the training. Now, in order to generate image representations, we'll use all of the layers in this model except the last layer. Remember the last layer is a simple linear classifier. We only want the image representation from the last, but one layer, of the ResNet model. So I set up a sequential model with all of the layers except the last linear classifier, and I add in my own linear layer to generate our encoder embeddings.
>
> **[3:09](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/building-the-encoder-cnn?u=76281980&t=189)** The dimensionality of the input to this linear layer will be 2048. That is the input dimensionality of the last linear layer in ResNet. The final hidden state output by the encoder will be of embed_size. That's what we specify. We then define the method that contains the code for the forward pass through this encoder. In passing the images, we generate the features corresponding to these images, by passing the images through the ResNet backbone. We then reshape the features so that it can be fed into the final linear classification layer. And we finally generate our own encoder embedding. This embedding is a vector representation of all of the input images in this batch. Observe that at every step I've specified, the shape of the data, as it's passed into that layer, and the output shape of the data as well. This is useful for you to track what exactly is going on in the neural network.

> [!info]- Semantic Content
>
> **Definitions:** is a  (4), stands for (1), means that (1)
> **Code Identifiers:** pad_idx (1), embed_size (1)
> **Prerequisites:** set up (2)
> **Speakers:** - [instructor] (1)

#### [Building the decoder RNN](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/building-the-decoder-rnn?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/building-the-decoder-rnn?u=76281980&t=1)** - [Instructor] Now that you've set up the encoder CNN, the next step is to set up the decoder RNN. And this decoder recurrent neural network is what we'll use to generate captions. The init method takes in a number of variables as input: The embed_size. That is the size of the embedding for each [[Microsoft Word|word]] in the vocabulary. Hidden_size, the size of the hidden state of the RNN. Vocab_size is the length of our vocabulary. Now, you can build RNNs with more than one layer. By default, I've set num_layers to 1. This is something that you can tweak. The first step is to set up the embedding layer. The embedding layer is used to generate embedding representations for the input words. Remember, we input the words as one-hot vectors. That is, every vector will have a size equal to the size of our vocabulary. The embedding layer will take the one-hot vector representation of a word and generate a lower dimensionality embedding. The embeddings will be found during the training process. Next, we specify the cell that makes up the layers of our recurrent neural network. Here, I've used an LSTM, or a long short-term memory cell. The first input, embed_size, is the number of expected features in the input x. That is the number of expected features to represent a word. The second input argument here, hidden_size, is the number of features in the hidden state edge of this LSTM.
>
> **[1:33](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/building-the-decoder-rnn?u=76281980&t=93)** Number of layers indicates how many recurrent layers a single cell will have. If you set this to 2, you'll have two LSTM cells stacked one on top of the other. Batch_first equal to True indicates that, in the input, the first dimension represents the batch dimension. This is the LSTM cell that will be unrolled to make up the layers of our neural network. Then finally, at the very end, we have a linear layer that produces the final output. It takes in an input of size_hidden and produces a one-hot vector representing a word from our vocabulary. The one-hot vector is a word from the generated caption. In the forward pass through this decoder RNN, we take in the features of the image itself. This is the output of our encoder. We also take in the tensor corresponding to the image captions for each of the images in the batch. The image captions are in one-hot form. We pass these through the embedding layer to generate embeddings for each word in each image caption. Every word in the caption text is now represented using embeddings. Now, if you remember our encoder-decoder model, the first input to the decoder is always the hidden state of the encoder. So concatenate the hidden state of the encoder with the embeddings representing the caption text. Now, we take this entire sequence, starting with the hidden state output of the encoder
>
> **[3:09](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/building-the-decoder-rnn?u=76281980&t=189)** and the caption text, and feed that through our LSTM layers in our recurrent neural network. We then fit the final linear layer to get the one-hot encoded representations of the generated captions. The caption x and the encoder output that is the representation of each image will be used to train our decoder. This is the forward path through the neural network. Next, let's see how this decoder RNN will generate captions given an image. When we invoke generate_captions, we'll pass in the encoder output that is in the inputs variable. Hidden will be set to 1. The max length of the caption that we want to generate, I've set to 20 by default. And we'll pass in the vocabulary that the generator should use for the caption. The vocab object contains a mapping of index to word. We may generate captions in batches. So extract the size of the batch that is the first dimension of the inputs answer. As we generate captions, we'll have the IDs corresponding to individual words. We'll store that in this captions list. The maximum length of the caption generated will be max_len. The caption can be shorter if we encounter an EOS token before we reach max length. Pass the initial input to the LSTM cell and get the output of the LSTM and the next hidden state. We then pass the output through the last linear layer
>
> **[4:43](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/building-the-decoder-rnn?u=76281980&t=283)** to get a one-hot representation of the predicted word. We then reshape the output so that we can get the index of the predicted word using argmax. We append the index of the predicted word from our decoder RNN to vocab. If we find that the word token is the EOS, or the end-of-sentence token, we simply break out of this for loop. We've got the entire caption text predicted by our decoder. If we haven't reached the end of the caption, then we use the current word to predict the next word in the sequence. So we get the embedding of the current predicted word, that is inputs, and that input is then fed back to the LSTM, along with the hidden state output of the previous layer in our network. Once the entire caption has been generated, we convert the index representations of the caption to actual words using the vocab object.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (15)
> **Env Vars:** lstm (8), rnn (5), eos (2), cnn (1)
> **Code Identifiers:** embed_size (2), num_layers (1), hidden_size (1), size_hidden (1), generate_captions (1)
> **Prerequisites:** set up (3)
> **CLI Commands:** make (1), find (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Setting up the sequence to sequence model](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/setting-up-the-sequence-to-sequence-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/setting-up-the-sequence-to-sequence-model?u=76281980&t=1)** - Having implemented the encoder and the decoder. we are now ready to build our sequence to sequence model and that's now very simple because of the encoder and decoder objects that we've set up. Let's set up the image to caption class. This class takes in a number of input parameters needed to initialize the encoder as well as the decoder embedding size, hidden size, vocab size. Num layers in the decoded set by default to one. The only other initialization needed is to set up the encoder convolution neural network and the decoder recurrent neural network by passing in the right input parameters. The forward pass through this model is straightforward. We accept the training data in the form of images and the corresponding captions. We pass in the images through the encoder and get representations for every image in the batch. These representations form the encoder output that are then into the decoder, along with the captions. Next, let's instantiate this image to caption model. We use an embedding size of 300. The hidden size of the RNN will be 512. The vocab size is the size of the words or the vocabulary in the flicker dataset. This includes all the additional [[Tokens]], to start of sentence, end of sentence, pad and unknown. We use two layer RNN, so num layers, I have set to 2. So we'll have two (indistinct) cells stacked one on top of the other. In every layer of the recurrent neural network I've specified the learning rate of 0.0001.
>
> **[1:36](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/setting-up-the-sequence-to-sequence-model?u=76281980&t=96)** This is something that you can tweak and see how things work. Next step is to instantiate our sequence-to-sequence model image to caption by passing in the right parameters. Remember, we want to train this model on the GPU so I call model to device, to place the model parameters on the GPU. We'll use the cross entropy loss to compare the [[Probability]] distribution of the output generated [[Microsoft Word|word]] with the probability distribution of the actual word in the vocabulary. Now, while computing the cross entropy loss we'll ignore all the extra padding that we've given the caption sentences. If you remember, we padded the caption sentences, so that all captions in the same batch have the same length. This allows our decoder RNN to be unrolled to the same number of layers. And finally, we'll use the 'Adam' optimizer for training. When you run this code and instantiate our sequence-to-sequence model, the pre-trained weights of the resnet 50 model, that we use In the encoder, will be downloaded and loaded to initialize our resnet 50 model within the end quarter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Probability]] (2), [[Microsoft Word|Word]] (2), [[Tokens]] (1)
> **Env Vars:** rnn (3), gpu (2)
> **Prerequisites:** set up (2), initialization (1)
> **Versions:** 0.0001 (1)
> **Speakers:** - having (1)

#### [Training the image captioning model](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-image-captioning-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-image-captioning-model?u=76281980&t=1)** - [Narrator] We are now finally ready to train, our sequence to sequence model, and see what kind of captions this model generates. Remember, we are not using attention. I'm going to train for 10 epochs. And I'm going print out a log to screen, every hundred iterations. That is every hundred batches. I run two for loops here, one for every epoch. And in each epoch, I iterate over the entire dataset. So I run an inner for loop, for my training data, accessed in patches. I have the images and captions entered for every batch. I'm now going to place these tensors, on the Kuda device on the GPU, so that the entire training runs on the GPU. I'll zero out the gradients of the optimizer. And I'll pass the image and captions. As a forward pass through the model, and get the outputs of our sequence to sequence model. I'll then reshape the data. So that we can compute the cross entropy loss, between the output generated by the model, and the actual captions in the real data. In the training data. We then make a backward pass to compute gradients, for the decoder. And then call optimizer.step, to update the model parameters. And we do this for every batch. Now for every hundred batches, I'm going to print out a bit of information to screen. I'll also take an image at random, and generate a caption for that image, based on our current model.
>
> **[1:32](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-image-captioning-model?u=76281980&t=92)** In order to evaluate an image, I call model.eval. So that our model is set to the evaluation phase. I make sure I don't compute gradients, and I access a single image from the next batch of data. I passed that image through the model end quarter, to get the feature representations of the image. And then I use these feature representation output, of the CNN, to generate a caption for that image. And I'll use the display image utility that we had set up earlier, to display the image and the caption, generated by our network. And I'll switch back to model.train, so we can continue training our model. This way we'll see how the captions improve, as the model proceeds through training. Let's start the training process. At about one epoch, you can see that, the sentence is just all As. Starting with an SOS token, ending with an EOS token. Let's see how things improve, after a few more batches of training. Still nothing really legit that has been generated. After Epoch 1, you can see a few words showing up. The caption talks about a man, and I guess there are indeed men in this image. Things seem to be getting a little better. Let's wait for some more epochs. After Epoch 3, you can see that the captions, start getting a little more meaningful. They're not right yet. It talks about a man in a red shirt. There's no red shirt here. A white dog. No real dog, here. But the captions are getting more complete. At about, Epoch 7, you'll find that things start making much more sense.
>
> **[3:07](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-image-captioning-model?u=76281980&t=187)** Here is a caption generated for this image. A dog is running through the grass. There is a dog, there is grass. The dog is not running, but the captions are getting better. And you'll kind of see this gradual improvement over time. At the end of training at about 10 Epochs, you can see the caption is about a group of people, standing somewhere. That's pretty good. There is another caption about a man in a red shirt, riding a bike on a dirt road. That's pretty good. And then there's something about a man in a blue shirt, where there are no blue shirts here. So the captions are getting better, but they're not perfect. And you'll find that when you train such a model, without attention. You may need to train for a very long time, to get really good captions. And even then, your model may never be very good.

> [!info]- Semantic Content
>
> **Env Vars:** gpu (2), cnn (1), sos (1), eos (1)
> **CLI Commands:** make (2), find (2)
> **Definitions:** is a  (2)
> **Prerequisites:** set up (1)
> **Speakers:** - [narrator] (1)


### 5. Image Captioning Model Using Attention

[↑ Back to Table of Contents](#table-of-contents)

#### [Loading the dataset and setting up utility functions](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/loading-the-dataset-and-setting-up-utility-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/loading-the-dataset-and-setting-up-utility-functions?u=76281980&t=0)** - In this demo, we'll see how we can improve our image captioning model using attention. We'll use Bahdanau additive attention. We'll get our decoded R & N to pay attention to important portions of the input image when it generates the captions for that image. Now, a lot of the code is exactly the same as before, you can see all of the import statements are the same. We need to mount our [[Google Drive]] folder so that our data set is accessible within this notebook. The code for that is exactly the same. Once we mounted Google Drive we'll extract the images and captions from the zip file and take a look at the captions' text. Since you've seen this code before I'm going to quickly run through all of this code. Just hit shift, enter on all of the cells. We'll use the G-Q for training so that training can run within 30 to 50 minutes. I've already enabled the G-Q run time for this notebook. As before, we have the tokenizer to tokenize the text in the captions and the counter to keep track of the frequency of the words in the training data. We'll see how the tokenizer works. You can see that it extracts the individual [[Microsoft Word|word]]. It also pre-process the words by converting all of the text to lowercase. We iterate through all of the captions in the training data to generate a vocabulary. We'll use only those words, which have occurred a minimum of five times in the training data frequency equal to five. As before, we'll add in the special [[Tokens]] to our vocabulary, the unknown,
>
> **[1:35](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/loading-the-dataset-and-setting-up-utility-functions?u=76281980&t=95)** add start of sentence and end of sentence token. We'll insert each of these and we set the default index to the unknown token exactly as we did before. Next we have the data set class. Now the core for this class is unchanged. I don't really need to go through this again. The data set class accesses the images and the corresponding captions and converts them to a denser format to be used by the data loader. It also converts the captions text to be represented in the one-hot and coded format. We have the same callable class generate batch captions that is used by the data loader so that the caption text in each batch of training data has the same length. This is done by padding the sentences in the caption text so that within a batch, the length of each caption is equal to the length of the longest caption text in that batch. We have the same utility function to display an image and the corresponding caption for that image. The transforms that will apply to the input images are the same as before. Remember, image sizes have to be at least 224 by 224, so that the pre-trained resonant model can use those images. We instantiate the flicker data set, and once we have that, let's quickly confirm that we can access the individual images and call display image on them. Here's an image at random. You can see the image and the corresponding caption. Every caption starts with an SOS or start of string token
>
> **[3:11](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/loading-the-dataset-and-setting-up-utility-functions?u=76281980&t=191)** and end with an or EOS of string token. Next, let's set up our bad sites. That is 128. Our bad index is the index of the pad token in our vocabulary, and let's instantiate the data loader. The data loader uses the generate batch captions callable in order to generate caption text all of the same size within a batch.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google Drive]] (2), [[Microsoft Word|Word]] (1), [[Tokens]] (1)
> **Env Vars:** sos (1), eos (1)
> **Exercise Files:** zip file (1)
> **Prerequisites:** set up (1)
> **Speakers:** - in (1)

#### [The encoder CNN generating unrolled feature maps](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-encoder-cnn-generating-unrolled-feature-maps?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-encoder-cnn-generating-unrolled-feature-maps?u=76281980&t=1)** - Once again, in the end coder network, we'll be using the Resnet-50 pretrained model, but we'll choose the output of a different layer. So here's the architecture of the Resnet-50 model. The last convolutional block, that is layer four, generates feature map representations of the input image. These feature map representations will be the input to our attention model, so that the attention model can direct the decoder to pay attention to the right portions of the input image. In the Resnet-50 model, these feature map representations are then fed in through an average pulling layer and then finally through the last linear classifier layer. But remember, in our attention model, we are interested in the feature map representations and that is the output that we'll use from Resnet. Here is our end coder of CNN within the init function. That's just a simple initialization. We also instantiate the Resnet-50 model, we use pretrained weight. The Resnet-50 model will not retrain. That is it's weights will not be updated during the training process of our image captioning model. This is why we iterate over the Resnet model and set requires grad to false. Now, remember that the output of the Resnet model that we are interested in is the output of the last convolutional block. There are two layers after that; the average pooling layer and the final linear classifier. We are not interested in those.
>
> **[1:31](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-encoder-cnn-generating-unrolled-feature-maps?u=76281980&t=91)** So we only select those modules of the Resnet-50 model that we are interested in. That is everything but the last two layers. We set up a new sequential module with all of the layers of Resnet, except the last two. Now let's define the forward pass through this encoder of CNN. The CNN operates on a batch of input images and reduces feature maps for each image. Now, the last convolutional block of the Resnet-50 model reduces 2,048 feature maps, where each feature map is seven by seven. So the dimensionality, when we pass in a batch of images through the Resnet, the dimensionality of the output will be batch size 2048. That's the number of feature maps. Seven by seven, that is the height and the width of this feature map. Now, how did we get the feature map size as seven by seven? Well, it turns out the Resnet-50 model takes the original image size and because of all of the transformation that it applies, the image size is shrunk by 32. So the final size of the feature map will be image size divided by 32, which gives us 7 2 24 by 32, gives us seven. Passing our input batch of images through the Resnet model will give us these feature map representations of the image that will later on feed into the attention model. Let's extract the individual dimensions from these feature maps. We have the batch size and the number of feature maps,
>
> **[3:06](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-encoder-cnn-generating-unrolled-feature-maps?u=76281980&t=186)** that's 2 0 4 8 and size one and size two give us the height and width of each feature map. I'll reorganize these features to switch the axes around so that we can use them in our decoder. So we'll end up with batch size as the first dimension, the height and width of the feature map as the second, and third dimensions and the number of feature maps as the last dimension. I'm now going to unroll these feature map representations, batch size, then the seven by seven feature maps get flattened to be a single 49 pixel vector. So we'll get 2 0 4 8 of these 49 pixel vectors for each image. This is the structure of the data that will return from the encoder.

> [!info]- Semantic Content
>
> **Env Vars:** cnn (3)
> **Prerequisites:** initialization (1), set up (1)
> **Speakers:** - once (1)

#### [Implementing Bahdanau attention](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/implementing-bahdanau-attention?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/implementing-bahdanau-attention?u=76281980&t=1)** - Next up, we define the attention module that allows our decoder RNN to pay attention to important parts of the input image. We are using Bahdanau's Attention, that is additive attention, and you'll see that the operations that we perform on the features are the operations that we discussed for Bahdanau's Attention. Initialize the attention module by specifying the size of the encoder hidden state, the size of the decoder hidden state, and the size of the attention. These are the parameters of your attention module, initialize the member variable attention size to the attention size. In Bahdanau's Attention, we pass the encoder and decoder hidden states through a weights layer, and this is where we initialize the weights layer. full_A here is the trainable weight vector that generates the alignment scores. Here is what a forward pass through the attention model looks like. As an input, we accept the feature map representations from the encoder output and the previous decoder hidden state. In order to perform our operations here in the attention model, we add an extra one dimension to the decoder hidden state using the unsqueeze method. We pass the encoder output through the encoder weight to get the encoder attention. In a similar way, we pass the decoder hidden state through the decoder weights to get the decoder attention. In Bahdanau's Attention, the encoder output
>
> **[1:35](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/implementing-bahdanau-attention?u=76281980&t=95)** and the decoder hidden state output are both combined. They're added together and passed through an added layer that gives us the combined state and then we pass the combined stage to our linear weights layer that's a trainable weights layer to get the attention scores. These attention scores are 49 element vectors corresponding to each image. The feature map representations, that's the output of our resident model, have seven by seven feature maps. Seven by seven gives us 49 elements of the input feature map and these attention scores tell us how much attention we should pay to each of those 49 elements. The attention scores need to be converted to probabilities, so we pass them through a softmax layer. This gives us the attention weights for each of the 49 features in the input image. And finally, we use these weights to generate a context vector. This context vector will be fed into our decoder. The attention model returns the attention weight, as well as the context vector.

> [!info]- Semantic Content
>
> **Env Vars:** rnn (1)
> **Cross-References:** we discussed (1)
> **Speakers:** - next (1)

#### [The decoder RNN using attention](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-decoder-rnn-using-attention?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-decoder-rnn-using-attention?u=76281980&t=1)** - [Instructor] After the encoder and the attention model it's now time to look at the decoder network. This is the network that uses the attention model to generate captions. While initializing the decoder, you need to specify a number of parameters, the size of the embeddings for the words, the size of the vocabulary, the size of the attention, the size of the hidden state of the encoder and the size of the hidden state of the decoder. These will all be inputs to the decoder R and N, and we also have the dropout [[Probability]] set to 0.3. We'll use dropout in the final linear layer. Initialize some of these parameters we'll need them later. We'll cap size, attention size, and decoded hidden size. The words of the caption input to the decoded will be represented in the form of one hot vector. We'll use the embedding layer to generate embeddings for these words. Next, we initialize the attention model. The attention model requires the size of the hidden state of the encode, size of the hidden state of the decoded and the attention size. Init_h and init_c are linear layers that take in the feature representations which are the output of the encoder, and convert them to a hidden state that can be fed into the decoded. The layers of our recurrent neural network will use the long short term memory cell. The LSTM cell defines a single layer in our recurrent neural network. When we use this particular construct
>
> **[1:34](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-decoder-rnn-using-attention?u=76281980&t=94)** we have to unroll the R and N ourselves over time. And you'll see that in the forward path through our model. The input to the R and N at each time instance is a concatenation of the embedding of the current [[Microsoft Word|word]] in the sequence and the context vector. So that's why the size of the input is embedding size plus encoding hidden size. The hidden state of the R and N has the size, decoder, hidden size. That's the second input argument, and bias is true. Bias true specifies that the layer should use bias weights. We then have a fully connected linear layer at the end. This is the linear layer that outputs a one hot vector for the predicted word. In addition to the linear layer, we'll also have a dropout layer during the training process with the dropout probability that we have specified. Let's take a look at a forward pass through this decoded R and N. The input here is a batch of feature representations of the input image along with the corresponding captions. The caption text is represented as one hot encoded vectors. Please convert these to embeddings using the embedding layer. Let's get the first hidden state of the decoder by passing the encoder features through the linear layer that we had set up for this hidden state. Init_h and init_c. Let's initialize the length of the sequence.
>
> **[3:08](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-decoder-rnn-using-attention?u=76281980&t=188)** Which is the entire text, other than the start of sentence, the SOS token. That's why length of captions are zero minus one, and the batch size. That is the number of captions that we're dealing with in one batch. If you remember the feature representations that are the output of the encoder have this particular structure. Batch size 49. That is for the seven by seven feature maps and there are 2048 feature maps. Let's extract the number of features that we have, which is essentially 49. We'll now use this information to initialize an array that will hold the predicted captions in the form of one hot encoded vectors for all of the images in this batch. We'll also initialize another array that will hold the attention weights. We have a different set of attention weights for each time instance in the sequence. That's why we have the sequence length here in this array structure, and we have the attention weights for all of the images in a single batch. We'll now define the loop that'll feed in the input at the different time instances, along with the context vector and other details to our decoded R and N. For each time instance, for the entire range of the sequence, we first pass in the features from the encoded convolution neural network and the decoded hidden state. Get the attention beat and the context vector. Remember that the attention weight will be different
>
> **[4:41](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/the-decoder-rnn-using-attention?u=76281980&t=281)** for each time instance. That's why this has to be computed for each iteration of the loop. The input to the lstm cell that is a single layer of our R and N, is a concatenation of the embeddings representing the word at this particular time instance, along with the context vector that determines the current attention. We pass this input along with the previous hidden state of our decoder R and N, and that'll give us the hidden state for the next time instance. Which we store in h and c once again. To get the final predicted word we pass the hidden state through the dropout layer and the fully connected layer, and we basically save the predictions of this model in the preds array and the attention weight in the attention weights array. In this after we iterated over the entire sequence length, the preds and the attention weights array are what we returned from this forward pass.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (4), [[Probability]] (2)
> **Definitions:** is a  (4)
> **Env Vars:** lstm (1), sos (1)
> **Versions:** 0.3 (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Generating captions using attention](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/generating-captions-using-attention?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/generating-captions-using-attention?u=76281980&t=1)** - Let's take a look at how our decoder generates captions. The input here includes the feature representations, the output of the encoder CNN, the max length of the caption is set to 20. We also pass in the vocabulary for the captions. We then initialize the hidden state and the batch size. The hidden state is initialized using the encoder output. We store attention rates in an array. To start the generation sequence, we set up a one-hot vector of the SOS token and convert that to an embedding. The words of the caption that we generate will be stored in this captions list. Set up a for loop going up to the max length of the sequence that we want to generate. For each time instance, the first step is to take the endcoder output and compute the current attention. We'll append this attention to the attention weights list so that we have all of the attentions for different time instances at the end of generating this caption. We'll use these attention weights to visualize how our model actually generated each [[Microsoft Word|word]] of X in the image caption. The LSTM input is a concatenation of the current word in the sequence and the current context vector. So, get the LSTM input, pass that through the LSTM cell and get the hidden state for the next time instance. In order to get the one-hot vector representation of the predicted word, we pass the hidden state through the fully connected layer through the dropout, we reshape it, and then we use argmax
>
> **[1:35](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/generating-captions-using-attention?u=76281980&t=95)** to get the idea of the predicted word, and then we append this ID to the captions list. Now, if the ID of the predicted word is basically equivalent to the eos token when we reach the end of the caption that was generated and we can break out of this loop, otherwise we simply get the current word predicted in its embedding form, and then we use it for generating the next word in the sequence. And once the entire sequence has been generated, we use the vocabulary to convert the IDs to actual words. And here is the code for initializing the hidden state of the decoder. We use the features output of the endcoder CNN, we compute the mean and pass that through the linear layers init_h and init_c to get the initial hidden state.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (7)
> **Env Vars:** lstm (3), cnn (2), sos (1)
> **Prerequisites:** set up (2)
> **Definitions:** is a  (1)
> **Speakers:** - let (1)

#### [Training the attention-based image captioning model](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-attention-based-image-captioning-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-attention-based-image-captioning-model?u=76281980&t=1)** - [Presenter] Now that we have implemented our encoder, the attention model, and the decoder, we are ready to set up our sequence to sequence model, in order to generate image captions. So, here is the model, it's called Image to Captions. Initialize the model with all of the input parameters that it needs. These are the input parameters that are needed to initialize the encoder and the decoder. The encoder is straightforward. It doesn't need any of the input config parameters. The decoder requires all of this information: embedding size, vocab size, attention size, and the size of the hidden states of the encoder, as well as the decoder. The forward path takes in a batch of images and the corresponding captions. We then pass the images through the encoder, in order to get the feature map representations. The features output of the encoder are then passed to the decoder, along with the captions. We can now initialize the parameters of our sequence to sequence model. Get the vocab size, that is simply equal to the length of the vocabulary of our training data. The embedding size is 300, attention size is 256. All of these are parameters you can tweak. The hidden size of the encoder is 2048. The decoder hidden size is 512. And, the learning rate that I've chosen here, is three multiplied by 10 to the power minus four. Using the parameters that we've initialized, I'm going to set up the image to captions sequence to sequence model. Now, I want this model to be trained on the GPU
>
> **[1:33](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-attention-based-image-captioning-model?u=76281980&t=93)** so I save the model weights to my coder device. Once again, we use the CrossEntropyLoss function and the Adam optimizer. This is exactly the same as in the previous demo. Initializing the image to captions model will download the weights of our resnet50 pre-trained model. So, our model is now set up. I have this additional utility function called save_model, that checkpoints the model's parameter, after a certain number of iterations of training. So, we just save out all of the model details. This serves as a checkpointing utility. Observe, I call torch.save to save out the model. The training process is the same as before, so we can go through this quickly. We'll train for 10 epochs, and we'll print out some details every hundred batches. We have our nested for loop here, iterating over the epochs and batches of our data set. For each epoch, transfer the training data, images, as well as captions, to the GPU, so that training occurs there. Zero out gradients of the optimizer. We'll do this for every batch. Pass the image, as well as the captions, through the model. That will give you the output, as well as the attention. Get the actual caption training data. We'll use this in computing the loss function. Reshape the output and the targets, so that they match, and compute the cross entropy loss. Loss.backward will compute gradients. Optimizer.step will update the model weights for this pass. Once again, after every hundred batches of training,
>
> **[3:09](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-attention-based-image-captioning-model?u=76281980&t=189)** I'll print out a few details of the model. I'll take a sample image from the next batch of data and I'll pass that to the encoder of the model. Get the features, pass the features through the decoder, and generate captions for this image. Once we have the generated caption and the image, let's display it, to see how the model performs after a little bit of training. Make sure you switch the model back to train mode after evaluating the model. Now, finally, I save the model for after every epoch of training. That's just a checkpointing feature. Go ahead, hit shift enter, and start the training process. You can see in our attention model, after just hundred batches of training in the first epoch, the model has already started generating coherent sentences. The image has a few boys. The model thinks they are men. Well, that's not too bad. Then, here is the next caption generated. A man in a red shirt. Well, there is a man, but no red shirt. Again, not too bad. And again, here is the next caption, from the very first epoch of training. A man in a red shirt is jumping on a rock. There is a rock, and there is a man, but no red shirt, and no jumping. The captions are already far better than the captions that we saw for our model without attention, even after 10 epochs of training. Here is one. There are two dogs playing with a ball in the grass. That's perfect. This is what we get after three epochs.
>
> **[4:43](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/training-the-attention-based-image-captioning-model?u=76281980&t=283)** Let's run training for a little longer, and then after 10 or so minutes of waiting, at epoch six, I get this amazing caption. A dog is running through the snow, which is perfect. And then, finally at epoch 10, you can see how the captions improve. In the meantime, I get this: A little girl in a pink shirt and a blue shirt is sitting on something. This is a fairly complex caption. It's not perfect, but it's pretty good. You can see that our model with attention performs far better than our model without attention.

> [!info]- Semantic Content
>
> **Definitions:** is a  (4)
> **Prerequisites:** set up (3)
> **Env Vars:** gpu (2)
> **CLI Commands:** make (1)
> **Code Identifiers:** save_model (1)
> **Exercise Files:** download the (1)
> **Speakers:** - [presenter] (1)

#### [Visualizing the model's attention](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/visualizing-the-model-s-attention?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/visualizing-the-model-s-attention?u=76281980&t=0)** - [Narrator] Now we'll see something really cool. In our image captioning model, you can actually see what part of the input image our model focuses on while generating a particular [[Microsoft Word|word]] in the caption. For that, let's set up some utility functions first. The generate caps function is just a helper function that takes in images at its input and then generates captions for those images. We place the model in eval mode, so dropout doesn't apply. We then turn off gradient computation, pass the images through the model encoder, get the features, and pass the features through the model decoder to generate captions. We then display the image and the caption that was generated. We have the caption and the attention weight from the model decoder, and we return that. We'll be using that next. Show attention takes in an image and the attention weights generated by our model and highlights on the image what part of the image was used to generate a particular word in the caption. Most of the code here is just map plot LIP code for displaying images. You can see the input attention plot which is reshaped to be 7 by 7 and then reshaped once again to display what portion of the input image the attention is focused on at any point. I'll now pick one image at random from our training data, access the image and pass that through the generate caps function, which basically generates the captions from our model.
>
> **[1:34](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/visualizing-the-model-s-attention?u=76281980&t=94)** Then call show attention along with the image, the captions and the attention weight, and let's take a look. So here is the original image. It seems like there is a dog and a cat in here. Let's scroll down and let's see what caption was generated and what portion of the image generated the caption. The caption says "a black and a brown dog is laying on a bed" and you can see what portion of the image the model focused on to generate each word of the caption text. Let's try this once again with another image. This image is of some people playing on a beach. Let's take a look, and you can see that the caption says "a group of people are playing in the sand at the beach" and you can see which portion of the image the decoder concentrated on, or focused attention on, to generate each word in the caption. It's pretty amazing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (4)
> **CLI Commands:** cat (1)
> **Env Vars:** lip (1)
> **UI Navigation:** scroll down (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [narrator] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Summary and next steps](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/summary-and-next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/summary-and-next-steps?u=76281980&t=1)** - [Female Speaker] And with this demo on image captioning using Attention Models, we come to the very end of this course. Now, let's take a look at some of the references that I used while building up the material for this course. These are references that you can use for further study. This video on Attention Models is by a professor from Carnegie Mellon. And I found it incredibly insightful. And it has a lot more detail than what I've covered in this course. This video from NPTEL IITM address is also a great resource. Among blog posts, I found this one by Lillian Weng, incredibly useful and another one was this [medium.com](https://medium.com) article. Here is a quick summary of what we covered in this course. We understood that we need recurrent [[Neural Networks]] to operate on sequences. Recurrent neurons suffer from short term memory which is why we need long memory cells such as the LSTM and GRU. We discussed different types of (indistinct) and focus our attention on sequence-to-sequence models for language generation and translation because these are the models in which attention is incredibly useful. We understood how attention allows the decoder network in a sequence-to-sequence model to pay attention to relevant portions in the input. We discussed different attention models, but we focused on Bahdanau's attention or addictive attention because this was the attention mechanism we used in our image captioning model. We implemented image captioning with attention and without attention and compared results.
>
> **[1:35](https://www.linkedin.com/learning/introduction-to-attention-based-neural-networks/summary-and-next-steps?u=76281980&t=95)** If you're interested in [[Deep Learning]] and you want to study further, here are some other resources on [[LinkedIn]] Learning that you might find interesting. Deep learning Image Recognition, Self-supervised Machine Learning, and GANS and Diffusion Models in Machine Learning. And it's time for me to say goodbye. I hope you enjoyed this course. Thank you for listening.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Deep Learning]] (2), [[Neural Networks]] (1), [[LinkedIn]] (1)
> **Env Vars:** nptel (1), iitm (1), lstm (1), gru (1), gans (1)
> **Cross-References:** we discussed (2), we covered (1)
> **CLI Commands:** find (1)
> **URLs:** [medium.com](https://medium.com) (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [female (1)


## Instructor

- [[Janani Ravi]]

## Resources

- Exercise files available

## Skills Covered

- Neural Networks
- Artificial Intelligence (AI)

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