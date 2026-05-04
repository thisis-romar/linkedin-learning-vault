---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks
url: "https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks"
duration_minutes: 69
duration: 1h 9m
level: Intermediate
updated: 5/4/2023
learners: 59987
skills:
  - Supervised Learning
  - Artificial Intelligence (AI)
  - Artificial Neural Networks
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D4D0DAQEEPm6xE-zRRw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1683061136354?e=2147483647&amp;v=beta&amp;t=xQxRED_ORwnogHQ-dO9m_ZbLzskqBpkHt6Qe-1MD39g"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[LinkedIn''s AI Academy]]'
prev_courses:
  - '[Linkedin Ai Academy Ai 100 1 Demystifying Ai](Linkedin%20Ai%20Academy%20Ai%20100%201%20Demystifying%20Ai.md)'
next_courses:
  - '[LinkedIn AI Academy AI-100- 3 Scaling AI at LinkedIn](LinkedIn%20AI%20Academy%20AI-100-%203%20Scaling%20AI%20at%20LinkedIn.md)'
path_nav: '[{"path":"LinkedIn''s AI Academy","position":2,"total":3,"prev":"Linkedin Ai Academy Ai 100 1 Demystifying Ai","next":"LinkedIn AI Academy AI-100- 3 Scaling AI at LinkedIn"}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - skill/supervised-learning
  - skill/artificial-intelligence-ai
  - skill/artificial-neural-networks
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/LinkedIn%20AI%20Academy%20AI-100-%202%20Supervised%20Learning%20with%20Neural%20Networks.md)

![LinkedIn AI Academy AI-100: 2 Supervised Learning with Neural Networks](https://media.licdn.com/dms/image/v2/D4D0DAQEEPm6xE-zRRw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1683061136354?e=2147483647&amp;v=beta&amp;t=xQxRED_ORwnogHQ-dO9m_ZbLzskqBpkHt6Qe-1MD39g)

# LinkedIn AI Academy AI-100: 2 Supervised Learning with Neural Networks

> AI is one of the most important but least understood fields in the world. It’s changing the way we think about business, but it’s changing so fast that it’s hard to keep track. This course, taught by LinkedIn engineers Ananth Sankar and Daniel Hewlett, shows how neural networks and deep learning have transformed AI in the last decade, enabling applications that were previously impossible. Ananth a

> [LinkedIn Learning](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks) | 1h 9m | Intermediate | 60K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [The LinkedIn AI Academy: Neural networks are the heart of AI](#the-linkedin-ai-academy-neural-networks-are-the-heart-of-ai)
- [**1. Deep Neural Networks**](#1-deep-neural-networks) (3 videos)
  - [Neuron: Basic element of neural net](#neuron-basic-element-of-neural-net)
  - [Neural nets and nonlinearly separable classification](#neural-nets-and-nonlinearly-separable-classification)
  - [Multiclass deep neural networks](#multiclass-deep-neural-networks)
- [**2. Convolutional Networks**](#2-convolutional-networks) (3 videos)
  - [What is a convolutional filter?](#what-is-a-convolutional-filter)
  - [Deep convolutional neural networks](#deep-convolutional-neural-networks)
  - [Transfer learning](#transfer-learning)
- [**3. Sequence Classifiers**](#3-sequence-classifiers) (6 videos)
  - [Modeling sequences with language models](#modeling-sequences-with-language-models)
  - [Recurrent neural network language models](#recurrent-neural-network-language-models)
  - [Machine translation and encoder-decoder networks](#machine-translation-and-encoder-decoder-networks)
  - [Attention-based neural networks](#attention-based-neural-networks)
  - [Transformer model](#transformer-model)
  - [Pretrained language models](#pretrained-language-models)
- [**4. Graph Neural Networks**](#4-graph-neural-networks) (3 videos)
  - [Motivation and introduction](#motivation-and-introduction)
  - [Node embeddings](#node-embeddings)
  - [Graph neural networks](#graph-neural-networks)
- [**Conclusion**](#conclusion) (1 videos)
  - [Continuing the AI-100 learning path](#continuing-the-ai-100-learning-path)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [The LinkedIn AI Academy: Neural networks are the heart of AI](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/the-linkedin-ai-academy-neural-networks-are-the-heart-of-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/the-linkedin-ai-academy-neural-networks-are-the-heart-of-ai?u=76281980&t=0)** - [Ananth] Deep [Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Neural%20Networks.md) have made strong inroads in many areas including [natural language processing](../../Skills/Artificial%20Intelligence%20(AI)/Natural%20Language%20Processing%20(NLP).md) [Image Processing](../../Skills/Artificial%20Intelligence%20(AI)/Image%20Processing.md), and healthcare. some of the most popular neural network architectures. We'll go through simple linear classification, neural networks, [convolutional neural networks](../../Skills/Artificial%20Intelligence%20(AI)/Convolutional%20Neural%20Networks%20(CNN).md),
>
> **[0:27](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/the-linkedin-ai-academy-neural-networks-are-the-heart-of-ai?u=76281980&t=27)** language processing today.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Neural%20Networks.md) (2), [Natural language processing](../../Skills/Artificial%20Intelligence%20(AI)/Natural%20Language%20Processing%20(NLP).md) (1), [Image Processing](../../Skills/Artificial%20Intelligence%20(AI)/Image%20Processing.md) (1), [Convolutional neural networks](../../Skills/Artificial%20Intelligence%20(AI)/Convolutional%20Neural%20Networks%20(CNN).md) (1)
> **Speakers:** - [ananth] (1)


### 1. Deep Neural Networks

[↑ Back to Table of Contents](#table-of-contents)

#### [Neuron: Basic element of neural net](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/neuron-basic-element-of-neural-net?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/neuron-basic-element-of-neural-net?u=76281980&t=0)** - [Instructor] Before we get started, if you haven't taken the previous AI Academy course with Souvik Ghosh, that's a great place to start. He covered topics like regression, supervised and unsupervised learning, and the bias variant straight off. These are all critical to training deep [Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Neural%20Networks.md), which are today's most popular machine learning models. In order to understand deep neural networks, we have to first understand the basic element of a neural network called a neuron. Let's consider the following very simple classification task. As you can see in this figure, we have a bunch of red dots and a bunch of blue dots, each of which belong to a separate class. Each dot represents a pair of features, X1 and X2. When two classes can be separated by a line like this, it is called a linearly separable classification problem and it is the simplest kind of classification problem to solve. As you probably remember from your secondary or high school mathematics classes, the line shown in this figure can be represented by the equation w1x1 plus w2x2 plus b equals zero. For all points on the line, this expression would be equal to zero. For points above the line, this expression will be greater than zero, and for points below this line, the expression would be less than zero. Therefore, to implement a solution
>
> **[1:33](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/neuron-basic-element-of-neural-net?u=76281980&t=93)** to the linearly separable classification problem, we can compute this expression for any point in this x1, x2 feature space. And if the expression is greater than zero, we would say the point is in the blue class. On the other hand, if the expression is less than zero, we would say the point is in the red class. With these basics, we are now ready to describe a neuron, the basic element of a neural network. A neuron is a block that implements a linearly separable classification task. It does this by taking as inputs, the features x1 and x2, and computing the expression w1x1 plus w2x2 plus b. So for this dataset, when this expression is greater than zero, the input point x1, x2 belongs to the blue class, and when the expression is less than zero, the input belongs to the red class. Let's look at this in a little more detail. As shown in this figure, the neuron is described by its parameters w1, w2, and b. B is called the bias term. The neuron multiplies its parameters w1 and w2 with its inputs x1 and x2, and then accumulates them with the bias to compute the expression w1x1 plus w2x2 plus b. But it's actually more simple and elegant to think of this in terms of vectors and matrices.
>
> **[3:06](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/neuron-basic-element-of-neural-net?u=76281980&t=186)** The input x1, x2 can be padded with the number one to form the three-dimensional vector denoted here by this x. Similarly, the parameters of the neuron are denoted by this term w. The neuron then computes the scaler quantity given by the dot product of w index. Again, if this dot product is greater than zero, we know that the input belongs to the blue class and if the dot product is less than zero, we know that the input belongs to the red class. While this is all that is necessary to implement a linearly separable classification task, a neuron has a very important addition called its activation function. The activation function is always non-linear. We'll see in the future why this non-linearity is critical to solving more complex classification tasks. In this figure, we show a non-linear activation function called the sigmoid activation function. The sigmoid activation function is a monotonically increasing function that takes as its input the dot product w.x, and squashes it between the values of zero and one. When the input to the sigmoid is zero, its output is 0.5. The output of the neuron is the output of the sigmoid activation function. Therefore, from the standpoint of our linearly separable classification task, if the output of the neuron is greater than 0.5,
>
> **[4:41](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/neuron-basic-element-of-neural-net?u=76281980&t=281)** then its input would be in the blue class. And if the output of the neuron is less than 0.5, then its input would be in the red class. So to recap, in this video, we cover the basic element of a neural network, the neuron. A neuron takes as its input the vector x, computes its dot product with the parameter vector W, and then passes the result through a non-linear activation function. For example, the sigmoid activation function. In future videos, we'll see how neurons are put together to form neural networks, which can solve more complicated problems, such as non-linearly separable classification tasks, image recognition tasks and natural language tasks such as machine translation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Neural%20Networks.md) (3)
> **Definitions:** is called (2), is a  (2)
> **Versions:** 0.5 (3)
> **Analogies:** such as (2), for example (1)
> **Speakers:** - [instructor] (1)

#### [Neural nets and nonlinearly separable classification](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/neural-nets-and-nonlinearly-separable-classification?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/neural-nets-and-nonlinearly-separable-classification?u=76281980&t=0)** - [Instructor] As we saw in the last video, a neuron implements a linearly separable classification problem. It takes as its input, a vector X, and computes the dot product of that vector with the weight vector W to give W.X. After this, the neuron passes the dot product W.X through a non-linear function, F to give F of W.X as the output. Finally, if the result is greater than 0.5, we classify the input as one class, and if the result is less than 0.5, we classify the input as the other class. But what happens when the classes aren't able to be split as cleanly? Here we have what's called a non-linearly separable problem. As before, we have two classes represented by the blue dots and the red dots. However, in this case, the blue dots and the red dots cannot be separated by a straight line. For example, we can try this line or this line. Neither of these lines can separate these two classes. A curved line is required to separate the blue dots and the red dots. Unfortunately, as we've seen before, a neuron only implements a straight line and therefore, can only solve a linearly separable classification problem. A single neuron is unable to solve this non-linearly separable classification task. To solve this problem, we need to put together multiple neurons
>
> **[1:33](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/neural-nets-and-nonlinearly-separable-classification?u=76281980&t=93)** in what is called a neural network. The first step is to transform our non-linearly separable problem into a linearly separable problem. This is done by using two separate neurons. The first neuron takes the input vector X and outputs the value Y1. The second neuron takes the same input vector X and outputs Y2. In combination, these two neurons have transformed the input vector X into the output vector Y. Now let's take a look at the two graphs shown here with the red dots and the blue dots. In the first graph, we see our original problem where the red dots and the blue dots require a curve to separate them. As we saw before, each red and blue dot corresponds to an input vector X. When we apply our two neurons on each of these X vectors, they are transformed to a corresponding vector Y. Different values of the weights W will result in different transform dots in the Y space. The interesting thing is that with an appropriate set of values W, we can transform the input dots X into output dots Y that are linearly separable as shown in the figure. In other words, we have transformed our non-linearly separable classification problem into a linearly separable classification problem.
>
> **[3:08](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/neural-nets-and-nonlinearly-separable-classification?u=76281980&t=188)** Interestingly, and most importantly, this transformation to a linearly separable problem is only possible because of the non-linear function F, which is a part of every neuron. This first layer is called a hidden layer and it transforms the original non-linearly separable classification problem into a linearly separable classification problem. So we already know that a single neuron can solve a linearly separable classification problem, so all we need to do is to add a third neuron on top of the previous two as shown in this figure. This third neuron draws a line in this Y space, nicely separating the red and the blue dots. This completes the solution to the non-linearly separable classification task. To recap, we use two neurons in the first layer of the neural network. This first layer is called a hidden layer and it transforms the original non-linearly separable classification problem into a linearly separable classification problem. Then we add a single neuron in the second layer of this neural network to solve the resulting linearly separable classification problem.

> [!info]- Semantic Content
>
> **Definitions:** is called (3), in other words (1), is a  (1)
> **Cross-References:** as we saw (2), in the last (1)
> **Versions:** 0.5 (2)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Multiclass deep neural networks](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/multiclass-deep-neural-networks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/multiclass-deep-neural-networks?u=76281980&t=0)** - [Instructor] A simple neural network with one hidden layer can implement nonlinear classification tasks. However, some nonlinear classification tasks are more complicated than others, and we may require more power in our neural network to handle more complex nonlinear tasks. For example, in this figure, we see a simple curve being implemented by a single hidden layer with two neurons. Here we see the separating line between the two classes is a more complicated looking curve than what we had before, so we use a greater number of neurons, in this case, four neurons in the single hidden layer to implement this curve. The classification problem could be even more complex. For example, in this figure, we have two islands of red dots surrounded by blue dots. In order to solve this classification problem, we may require more than one hidden layer. The figure shows a neural network with three hidden layers and four neurons per hidden layer. Finally, we notice that so far, we only had two output classes. A single output neuron was enough to handle two-class problems. However, many real life problems have more than two classes. For example, we may want to classify a novel into one of several different genres, such as crime, romance, mystery, or science fiction. In this figure, we show a three-class classification problem
>
> **[1:35](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/multiclass-deep-neural-networks?u=76281980&t=95)** and it is handled by using a separate output neuron for each of the classes. Each of these neurons outputs a number between zero and one, and this value is interpreted as the [Probability](../../Skills/Data%20Science/Probability.md) that the input belongs to the class corresponding to that output neuron. So as we've seen, a neural network can be as simple as a single neuron, which can solve a two-class linearly separable classification problem, or it can be as complicated as a multiple hidden layer deep neural network with multiple output neurons. Such a deep neural network would be used for multi-class nonlinearly separable classification problems. A simple example of a multi-class nonlinearly separable classification problem is that of image classification. This figure shows an image classification problem where the input image should be classified into one of three categories, horse, cat, or dog. Deep [Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Neural%20Networks.md) research has progressed in multiple directions. They are now used for many industrial applications, such as [Speech Recognition](../../Skills/Software%20Development/Speech%20Recognition.md), [Image Processing](../../Skills/Artificial%20Intelligence%20(AI)/Image%20Processing.md), [natural language processing](../../Skills/Artificial%20Intelligence%20(AI)/Natural%20Language%20Processing%20(NLP).md), recommendation systems, self-driving cars, robotics, and medicine. It is one of the most exciting technologies of today.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Probability](../../Skills/Data%20Science/Probability.md) (1), [Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Neural%20Networks.md) (1), [Speech Recognition](../../Skills/Software%20Development/Speech%20Recognition.md) (1), [Image Processing](../../Skills/Artificial%20Intelligence%20(AI)/Image%20Processing.md) (1), [Natural language processing](../../Skills/Artificial%20Intelligence%20(AI)/Natural%20Language%20Processing%20(NLP).md) (1)
> **Analogies:** for example (3), such as (2)
> **CLI Commands:** cat (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 2. Convolutional Networks

[↑ Back to Table of Contents](#table-of-contents)

#### [What is a convolutional filter?](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/what-is-a-convolutional-filter?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/what-is-a-convolutional-filter?u=76281980&t=0)** - [Instructor] Let's return to the image classification problem that we spoke about earlier. The neural network takes as input an image and predicts which of three categories this image belongs to. In this case, the three categories are horse, cat, and dog. In order to solve this problem, we need to impose some structure into our neural network. This structure is imposed in the form of convolutional filters. We show here the input image and the first hidden layer of our neural network. A digital image is represented as a grid of pixels. Here we have a 256 by 256 grid for a total of 65,536 pixels in our input image. Let's say our hidden layer is a grid with 128 by 128 neurons. In a standard fully connected neural network, each input pixel is connected to each of the neurons in the hidden layer. That results in 1 billion parameters for the weights between the input layer and the hidden layer. But this is for just one of the color channels of the input image. Color images have three color channels, red, green, and blue, and each channel is represented by a 256 by 256 grid of pixels. That means that now we have 3 billion parameters for the weights connecting the input image and the hidden layer.
>
> **[1:32](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/what-is-a-convolutional-filter?u=76281980&t=92)** This is far too many parameters to be able to train, with even a large size data set on a large compute grid. Clearly, we need to impose some constraints on our [Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Neural%20Networks.md) to address this problem. The solution to this problem is a convolutional filter. In this case, each neuron in the hidden layer gets its input from only a small portion of the input image as opposed to the entire image. For example, in this image, we show the hidden neuron getting its input from a three by three grid instead of the entire 256 by 256 grid. In other words, the weights connecting this particular hidden neuron to the input image consists of only nine weights as opposed to 65,536 weights. These nine weights comprise the convolutional filter, and the neuron in the hidden layer gets its output by multiplying these weights with the corresponding pixels in the input image. This three by three convolution filter is then moved around the input image to produce outputs for different neurons in the hidden layer for different regions of the input image. In other words, the same three by three convolutional filter is used across this entire image to produce the values of the neurons in the hidden layer. For three different color channels, that results in 27 weights in all. Compare this to the three billion weights we had for a fully-connected layer.
>
> **[3:07](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/what-is-a-convolutional-filter?u=76281980&t=187)** The term convolution comes from the subject area of signal processing, where a convolutional filter is moved across the input signal to produce the output signal. Convolutional filters can do very interesting things. For example, the filter shown in the matrix here is a horizontal edge detector. When it is applied to the image of this building, the hidden layer neurons essentially extract all horizontal edges. Edges are very useful features for [Image Processing](../../Skills/Artificial%20Intelligence%20(AI)/Image%20Processing.md). When a large number of different convolution filters are put together in a structured way, we get a convolutional neural network. [Convolutional neural networks](../../Skills/Artificial%20Intelligence%20(AI)/Convolutional%20Neural%20Networks%20(CNN).md) are the state of the art today for image processing and classification. And now that we know a bit about how they work, let's see how we can use them to solve image classification tasks.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Image Processing](../../Skills/Artificial%20Intelligence%20(AI)/Image%20Processing.md) (2), [Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Neural%20Networks.md) (1), [Convolutional neural networks](../../Skills/Artificial%20Intelligence%20(AI)/Convolutional%20Neural%20Networks%20(CNN).md) (1)
> **Definitions:** is a  (3), in other words (2), means that (1)
> **Analogies:** for example (2), compare this to (1)
> **CLI Commands:** cat (1)
> **Speakers:** - [instructor] (1)

#### [Deep convolutional neural networks](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/deep-convolutional-neural-networks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/deep-convolutional-neural-networks?u=76281980&t=0)** - [Instructor] Remember, a convolutional filter processes only a small region of the input image. We slide the filter of the entire image to compute the output values for every single region. Convolutional filters are capable of extracting features such as horizontal and vertical edges from the input image. So far, we have only considered monochrome images. However, there are typically three color channels, red, green, and blue. Therefore, we have to accumulate the product of the pixel values and the convolutional filter weights over all the pixels in the input grid for all three color channels of the input image. So, if the convolutional filter processes a four by four input grid, then we would have 16 weights for each color channel. For three color channels, this is a total of 48 weights for our convolutional filter. We slide this filter of 48 weights over the entire input image to produce the output channel. As we saw before, a particular convolutional filter can extract features such as horizontal edges. We would need a different convolutional filter to extract different features such as vertical edges or slanted edges. To enable the computation of different features, [convolutional neural networks](../../Skills/Artificial%20Intelligence%20(AI)/Convolutional%20Neural%20Networks%20(CNN).md) typically have multiple filters at each layer of the neural network. Each convolutional filter
>
> **[1:32](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/deep-convolutional-neural-networks?u=76281980&t=92)** produces a separate output channel. Another type of layer used in convolutional neural networks is called the pooling layer. Pooling layers are used to reduce the size of each input channel. For example, this picture shows an input channel of size eight by eight being reduced to an output channel of size four by four. In this example, each two by two grid in the input image is reduced to a single value in the output. Two of the most common pooling methods are max pooling and average pooling. In max pooling we take the maximum of the four pixel values in the two by two input grid. And in average pooling we compute the average of the four pixels in the two by two input grid. Pooling is applied separately to each input channel. Therefore, if you have four input channels, you would have four output channels. Furthermore, since pooling is typically an average or a max of the input pixels, there is no weight vector associated with the pooling layer. Convolutional neural networks are built by stacking sets of convolutional and pooling layers as shown in this figure. Following the last pooling layer, we typically have a fully connected layer to create a single vector representation. This fully connected layer is then connected to the final classification layer of the neural network. The layer closest to the image extracts simple features like edges.
>
> **[3:04](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/deep-convolutional-neural-networks?u=76281980&t=184)** As we go closer to the classification layer, more complicated features are discovered. For example, shapes like circles or squares, or even features like the ears or eyes of a dog. The last layer of this neural network is just a linear multi-class classification layer. The job of all previous layers is to compute features that can be input to this linear classifier.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Convolutional neural networks](../../Skills/Artificial%20Intelligence%20(AI)/Convolutional%20Neural%20Networks%20(CNN).md) (2), [Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Neural%20Networks.md) (1)
> **Analogies:** such as (3), for example (2), picture (1)
> **Definitions:** is a  (1), is called (1)
> **Cross-References:** as we saw (1)
> **Speakers:** - [instructor] (1)

#### [Transfer learning](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/transfer-learning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/transfer-learning?u=76281980&t=0)** - [Instructor] Let's learn how a neural network trained with a large amount of data from varied domains could be used to perform tasks in a new domain where we might have only a small amount of training data. We call this transfer learning. The basic idea is that a neural network gathers a lot of general knowledge by learning from a large multi-domain source corpus. The data in this corpus may or may not contain explicit human labels, meaning that the neural network would have to learn in either a supervised or unsupervised setting respectively. The neural network is then able to apply this general knowledge to a specific target domain using only a small amount of label data from that target domain. Let's look at a couple of examples. First, let's look at transfer learning for image classification. ImageNet is a well-known data set that contains 14 million images manually annotated for 2000 different categories. A neural network, such as [Google](../../Glossary/Service/Google.md)'s InceptionNet, trained on this task could gather general knowledge about different colors and shapes and objects, how they differ from each other and how they're used in the world. InceptionNet could then be applied to a target task such as detecting whether an image uploaded to [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) is personal or professional. InceptionNet has already learned about people, animals, [office](../../Skills/Web%20Development/Microsoft%20Office.md) buildings, and home settings. Therefore, with a small amount of data from the target task it can learn that a picture of multiple people
>
> **[1:35](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/transfer-learning?u=76281980&t=95)** sitting in an office meeting room is a professional picture, but a person playing with their dog in a garden is a personal picture. Another example comes from the world of text. Corpora such as Wikipedia and Books Corpus contain millions of sentences with billions of words. This data is not supervised in the sense that there are no human labels provided. From this dataset, a neural network such as the BERT model, which we'll talk about a bit later, could learn very powerful representations about words and the contexts in which they are used. BERT could then be applied to a specific task such as spam text classification for LinkedIn. Now, a neural network could be trained entirely with data from the target task, such as spam classification. However, with transfer learning, [Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Neural%20Networks.md) usually perform better. Transfer learning has two distinct advantages over learning entirely from the target training data. First, and most importantly, transfer learning results in much faster learning on the target task. This is because the neural network has already learned a lot of general knowledge from the original source data and therefore can learn a lot about the target domain with very little data. Second, even with a large amount of data from the target domain, it is still possible that transfer learning gives better accuracy. Again, this is because of the world knowledge the neural network has gained from the source data
>
> **[3:07](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/transfer-learning?u=76281980&t=187)** that it is able to bring to bear for the target task. Transfer learning is commonly used today in both image and text problems in machine learning. Some well-known image models are InceptionNet, EfficientNet, ResNet, and VGG. These models have been used for many different target applications in image classification. Well-known text models include BERT, RoBERTa, XLNet, and the GPT family of models. These models are today's state of the art for a multitude of text understanding, classification and text generation problems.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (2), [Office](../../Skills/Web%20Development/Microsoft%20Office.md) (2), [Google](../../Glossary/Service/Google.md) (1), [Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Neural%20Networks.md) (1)
> **Analogies:** such as (6), picture (3)
> **Env Vars:** bert (3), vgg (1), gpt (1)
> **Definitions:** is a  (3), we call this (1)
> **Speakers:** - [instructor] (1)


### 3. Sequence Classifiers

[↑ Back to Table of Contents](#table-of-contents)

#### [Modeling sequences with language models](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/modeling-sequences-with-language-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/modeling-sequences-with-language-models?u=76281980&t=0)** - [Instructor] Let's talk about sequence classification, and in particular, language models which are used to predict the next [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) in a sentence. To start, recall how feedforward [Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Neural%20Networks.md) work. In a feedforward neural network, the input vector X is passed to the first hidden layer which produces an output vector Y. The output goes to another hidden layer which produces the vector Z and so on until we reach the output layer of the neural network. The output layer has one output for each of many classes. So a feedforward neural network classifies the input vector X into one of many classes at the output layer. You can see here we are showing a neural network which has three output classes. Each layer of the neural network produces its output by multiplying its input with the weight metrics and then passing that result through a non-linear activation function. The activation functions are shown by the letters F and G. For a simplified view, we often depict each layer of the neural network by a rectangle. Using the simplified representation an image classification neural network that classifies pictures of animals can be represented like you can see over here. But image classification isn't the only thing that neural networks are good for. Let's switch to predicting sequences of text. For example, we want to predict the next word in a sentence. Let's consider the simple sentence, how old are you? We want to predict the next word in the sentence
>
> **[1:35](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/modeling-sequences-with-language-models?u=76281980&t=95)** given the previous words. Let's see how a feedforward neural network would accomplish this task. In the beginning, we have the word how, and we want to predict the next word, which is the word old. Of course, the network has many possible words it can output but let's pretend it outputs the correct word, old. Next, we give the network the word old as its input, and we want to predict the word are. Next, we give the network the word are, and we want it to predict the word you. Finally, we give the network the word you as its input, and we want it to predict the token end of sentence. However, at each point in time, the network sees just one word at its input. It's as if all previous words are blanked out. This lack of context makes the task very hard. For example, when the input word is are, the output can be any of many possible words, and the feedforward neural network can only take a random guess. On the other hand, if the network could see all the previous words, how old are, then it would easily predict the next word as you. Unfortunately, a feedforward neural network has no way to remember the previous words in the sentence, and therefore lacks this critical context. We need something more powerful than a feedforward neural network
>
> **[3:09](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/modeling-sequences-with-language-models?u=76281980&t=189)** to predict the next word of a sentence. The device that accomplishes this task is called a language model. Language models take the entire previous context of a sentence to predict the next word. In our next video, we will see how to modify feedforward neural networks to create a language model.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (17), [Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Neural%20Networks.md) (3)
> **Analogies:** for example (2)
> **Cross-References:** next video (1)
> **UI Navigation:** switch to (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### [Recurrent neural network language models](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/recurrent-neural-network-language-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/recurrent-neural-network-language-models?u=76281980&t=0)** - [Instructor] Let's talk about a new kind of neural network called the recurrent neural network which is used for doing language modeling and other sequence classification tasks. We build up the idea of recurrent [Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Neural%20Networks.md) using the same task we described in the last video that of predicting the next [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) in the sentence given all the previous words. As before let's consider the sentence, "How old are you?" Each word represents a different point in time. The word how occurs at time instant one. The word old occurs at time instant two, and so on. Given the first word of the sentence how, we want our network to predict the next word of the sentence, old. Since there's no previous context before the first word how, a feed forward neural network can accomplish this task. So we move on to the next word. Now the feed forward neural network has to predict the word are because the feed forward neural network can only consider one word at its input, it can only use the word old to predict the word are. What we really want is for the network to consider not just the word old, but the words how and old in order to predict the word are. At its input layer, the network can only look at one word. So how do we consider both the words how and old at the same time? This can be accomplished by a simple device.
>
> **[1:34](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/recurrent-neural-network-language-models?u=76281980&t=94)** At the second time instant when the neural network is processing the word old, we allow its hidden layer to also see its own output from the previous time instant. The output of the hidden layer at the first time instant is multiplied by the weight metrics Wh and passed as an additional input to the same layer of the neural network in the second time instant. So at the second time instant, the hidden layer sees not only the word old but also its own output from the first time instant multiplied by the weight metrics Wh. The output of the hidden layer at the second time instant is, therefore, dependent on both the words, how and old. The connection between the first and second time instance of the hidden layer is called a recurrent connection. We can think of this as a time shifted self loop from the output of the hidden layer back to its input. Continuing this idea when the recurrent neural network sees the word are, it processes the word are, but also the words how and old because of the recurrent connection in the hidden layer. Finally, when the neural network sees the words how, old, are, and you, it is able to easily predict the end of sentence marker because of the context it has built through its recurrent connections. What we have seen so far is called the unrolled
>
> **[3:08](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/recurrent-neural-network-language-models?u=76281980&t=188)** representation of the recurrent neural network. Sometimes recurrent neural networks are also shown with a loop as in the right of this figure. By unrolling this loop over time, we get the unrolled representation on the left of this figure. It is far more easy to think about recurrent neural networks using the unrolled representation because you can clearly see how each word is processed in time. This is particularly useful when we train models, but that's beyond the scope of this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (20), [Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Neural%20Networks.md) (3)
> **Definitions:** is called (2)
> **Cross-References:** in the last (1)
> **Speakers:** - [instructor] (1)

#### [Machine translation and encoder-decoder networks](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/machine-translation-and-encoder-decoder-networks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/machine-translation-and-encoder-decoder-networks?u=76281980&t=0)** - [Instructor] Let's consider an application of recurrent [Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Neural%20Networks.md) that we commonly use at [LinkedIn](../../Skills/Web%20Development/LinkedIn.md), machine translation. We'll use our previous sentence, "How old are you?" And try to translate it into Chinese. First, we will consider what happens if we do simple [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) for word translation of the words in the sentence. So first we translate the word how into its Chinese equivalent. Then we translate the word old. Next, we translate the word are. Finally, we translate the word you. If we look at the sequence of Chinese words we got from these word for word translations, it turns out that it means something quite different in Chinese than what we intended. The English sentence, "How old are you?" Has been translated into the Chinese sentence, "Why is it always you?" Clearly, this is a poor translation. The correct translation is shown in this figure. The Chinese sentence has only three words as opposed to the four words in the English sentence. And the sequence of three words correctly translates the English sentence into Chinese. Apart from the number of words in the Chinese sentence being less than that of the English sentence, the words in the Chinese sentence are also in a different order than in the English sentence. It is obvious that a word for word translation cannot possibly get us this correct translation.
>
> **[1:34](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/machine-translation-and-encoder-decoder-networks?u=76281980&t=94)** But unfortunately, it turns out that a recurrent neural network cannot really do this task. The reason for this is that a recurrent neural network outputs a word for every input word. If the English sentence had four words, the recurrent neural network will output four words. Additionally, the recurrent neural network cannot reorder its output words in a different order than the input words. This is because it only sees the previous words as its input context. Here is another translation pair from English to French. We are translating the sentence "The black cat drank milk." into French. In this case, it turns out that the English and the French words are in the same order. However, the number of French words is greater than the number of English words. As we've seen, a recurrent neural network by itself cannot handle this task. In order to do machine translation, we need a new kind of neural network called an encoder-decoder neural network. An encoder-decoder neural network is built out of two models. As one might imagine, the first model is the encoder model and the second model is the decoder model. Both of these models are built using recurrent neural networks. In the encoder model, all the outputs of the hidden layer of the neural network are processed together to get a single representation for the entire input sentence.
>
> **[3:08](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/machine-translation-and-encoder-decoder-networks?u=76281980&t=188)** For example, we have seven hidden representations for the seven different points in time of the English sentence, "The black cat drank milk." Each of these hidden representations is passed to an aggregating function, F, which creates a single representation. The aggregating function could be one of many things. For example, we might just average all of the hidden representations. Or we may just take the last hidden representation, h7, and consider that to be the representation of the entire sentence. The decoder model is just a recurrent neural network language model. This neural network takes the output representation of the encoder model and a start of sentence token as its first input. It then predicts the first word of the French sentence. After that, it operates just like a recurrent neural network language model to predict the following words in French. We can consider the decoder model to be a conditional language model. Because it is a recurrent neural network language model that is conditioned on the representation it gets from the encoder neural network. Derivatives of this type of encoder-decoder neural network translation model constitute the state of the art in today's machine translation technology. There are several other applications of encoder-decoder neural networks. For example, in text summarization
>
> **[4:40](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/machine-translation-and-encoder-decoder-networks?u=76281980&t=280)** we want to take a long piece of text and summarize it into a shorter piece, capturing the essence of the text. Another example is image captioning. In this case, the input is an image and the encoder network [Forms](../../Skills/Web%20Development/Forms.md) a representation of the input image. The decoder network then spits out a sentence which describes the input image. We use encoder-decoder neural networks at LinkedIn in many ways. One of our applications is that of related search. When a user types a query into LinkedIn, we want to suggest other related queries that might be interesting to the user. In this case, the encoder network takes the input query and forms a representation of it. This representation is then fed to the decoder network which spits out a bunch of possible queries related to the input query.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (13), [Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Neural%20Networks.md) (4), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (3), [Forms](../../Skills/Web%20Development/Forms.md) (2)
> **Analogies:** for example (3), imagine (1), just like (1)
> **Definitions:** is a  (2), is an  (1)
> **CLI Commands:** cat (2)
> **Speakers:** - [instructor] (1)

#### [Attention-based neural networks](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/attention-based-neural-networks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/attention-based-neural-networks?u=76281980&t=0)** - [Instructor] In this video, we'll introduce the topic of attention in deep [Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Neural%20Networks.md). Attention is a way for a neural network to focus on specific parts of its inputs to produce more accurate outputs. To explain attention, we'll use the machine translation and coder-decoder model that we described in the previous video. In the encoder-decoder model, the encoder takes an English sentence and produces a representation of it. The decoder language model takes this representation as input and produces a French sentence as output. As we saw in the previous video, this language model is called a conditional language model because it is conditioned on the English sentence representation, produced by the encoder. Let's look at our example English sentence. The black cat drank milk, and the corresponding French translation. It is obvious that certain words in the French output depend on only certain words in the English input. In particular, when producing the words that are colored in green, The French language model needs to consider only the corresponding green words in the English sentence and can safely ignore the words that are colored in yellow. However, the encoder in our encoder-decoder neural network produces a single representation for the entire English sentence. It does not produce a separate representation for the yellow words and for the green words. Therefore, the decode has no option
>
> **[1:36](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/attention-based-neural-networks?u=76281980&t=96)** but to consider the entire English sentence as a unit when producing its output. It is unable to separately consider the yellow words and the green words. We will now describe the attention mechanism which allows the decoder to consider only relevant parts of the English sentence when it is producing corresponding parts of the French sentence. Let us start with the first [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) produced by the decoder. This word is le and it is produced by using the hidden state representation of the first time unit of the decoder. This hidden state representation is shown in this figure as S one. In a normal encoder-decoder neural network, S one would be computed using the single representation of the entire English sentence. Now, we will explain how attention allows us to compute S one based on only relevant hidden representations of the English encoder. To figure out the relevant English encoder hidden states, we compute a similarity between S one and each of the hidden representations in the encoder, h1, h2, h3, et cetera. These similarities are shown in this figure as S(1,1), S(1,2), S(1,3), et cetera.
>
> **[3:01](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/attention-based-neural-networks?u=76281980&t=181)** We then normalize each of these similarities by dividing by the sum of all similarities. These normalized similarities are shown in this figure as alpha one one, alpha one two, alpha one three, et cetera. The encoder representation is then computed by weighing the hidden state representations with these normalized similarities. We would expect that when producing the first French word le, the English word the should have the most influence, because the translates to le in French. As we can see by the orange bars, the attention mechanism achieves this by computing a high value for alpha one two, corresponding to the word the. We now look at the second word produced by the French decoder. This is the word chat, which is the French translation for the English word cat. As we'd expect, the English word cat should have the most influence in producing this French word. As we can see, the orange bars show that the word cat has the highest alpha value. The word black is the next most important, because it characterizes the word cat, but the other words are of little importance. The third French word is noir,
>
> **[4:34](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/attention-based-neural-networks?u=76281980&t=274)** which is the translation for the English word black. Again, as we can see by the orange bars, the alpha weight for the word black turns out to be the largest. Going through the first three words produced by the French decoder, we have seen how the attention mechanism computes a different representation for the English sentence at each time, focusing the attention of the decoder on only the relevant English words. This is in sharp contrast to the simple encoder-decoder model where the same encoder representation is used to produce all French words. This figure shows how attention works during machine translation. In the figure, the English sentence is shown on the vertical axis and the corresponding French translation is shown on the horizontal axis. The amount of attention between each French and English word pair is shown in grayscale, with black meaning zero attention and white meaning the maximum attention value of one. As we can see in the figure, the French word noir has high attention with the English word black, but low attention with words like cat or milk. Because of this attention, when the neural network outputs the translated French word noir, it considers mostly the English word black, resulting in superior translation accuracy.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (21), [Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Neural%20Networks.md) (1)
> **CLI Commands:** cat (6)
> **Cross-References:** previous video (2), as we saw (1)
> **Definitions:** is a  (1), is called (1)
> **Speakers:** - [instructor] (1)

#### [Transformer model](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/transformer-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/transformer-model?u=76281980&t=0)** - [Instructor] In the previous video, we learned how encoder decoder [Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Neural%20Networks.md) can use attention to improve their accuracy for machine translation. When the decoder [Forms](../../Skills/Web%20Development/Forms.md) the representation of a translated [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) in the target language, it focuses its attention only on the relevant words in the source language. In this video, we will discuss how attention is used in one of the most important neural networks of today. The transformer model. The transformer model, is central to all state-of-the-art [natural language processing](../../Skills/Artificial%20Intelligence%20(AI)/Natural%20Language%20Processing%20(NLP).md) neural networks today. Transformer neural networks are used to model sequences. For example, a sentence is a sequence of words and a video is a sequence of image frames. The key aspect of the transformer model is a concept called self attention. Through this attention mechanism, when computing the representation of any word in a sentence the transformer model decides how much weight to give` to each of the other words in the sentence. It is called self attention because the model is attending to words in the same sentence as the word it is trying to represent. Remember, in an encode or decode or neural network when computing representations for words in an output sentence, the encoder computes attention waits for word representations formed by the encoder for an input sentence. In self attention the encoder does something similar. While computing the representation for an input sentence,
>
> **[1:35](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/transformer-model?u=76281980&t=95)** the encoder computes attention waits for words in the same input sentence. For example, in the sentence, 'Cats like cold milk", to compute the representation of the word cats, the encoder first computes attention waits for all the words in the sentence. Cats, like, cold, and milk. We expect the attention weight for the word cat to be the strongest when representing the word cat. However, milk may also have a strong attention weight because cats are often associated with milk. It then multiplies these weights with the input representations for the corresponding words to produce the output representation for the word cats. Similarly, when computing the representation for the next word, "like" the encoder computes a different set of attention weights for all the words in the input sentence, and multiplies those weights with the input representations of the words to give the output representation of the word, "like". The encoder then computes the output representation for the next word "cold", and then for the final word, "milk". In this manual, a transformer model uses self attention to compute output representations of the words in a sentence given their input representations. Next, the transformer model passes these representations
>
> **[3:09](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/transformer-model?u=76281980&t=189)** through a feed forward neural network to create the final output representation. This combination of a self attention layer and a feed forward neural network layer constitutes the basic layer of a transformer network. By stacking such transformer layers one after the other, we get a multilayer transformer neural network model. Just like in any deep neural network, as we increase the number of transformer layers the model is able to form more powerful representations of the input sentence. Today, transformer neural networks represent the state of the art for all natural language processing neural network models, including natural language understanding and natural language generation. Transformers have also given strong results for image and video processing applications.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (12), [Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Neural%20Networks.md) (5), [Natural language processing](../../Skills/Artificial%20Intelligence%20(AI)/Natural%20Language%20Processing%20(NLP).md) (2), [Forms](../../Skills/Web%20Development/Forms.md) (1)
> **Definitions:** is a  (3), is called (1)
> **Analogies:** for example (2), just like (1)
> **CLI Commands:** cat (2)
> **Cross-References:** previous video (1)
> **Speakers:** - [instructor] (1)

#### [Pretrained language models](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/pretrained-language-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/pretrained-language-models?u=76281980&t=0)** - [Instructor] Pretrained Language Models are large multilayered transformer based [Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Neural%20Networks.md) used to represent [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) sequences. They are trained on extremely large amounts of unsupervised text data from sources such as Wikipedia, books, and news. Popular pretrained language models have hundreds of millions of parameters and are trained on several billions of words. The idea is that by training on such a large corpora of text data representing various domains and topics, these [large language models](../../Skills/Artificial%20Intelligence%20(AI)/Large%20Language%20Models%20(LLM).md) will learn the nuances of words and the contexts in which they are used. However, because this training data doesn't contain any explicit human labels, we fashion special training tasks that provide us labels required for learning. Let's talk about the Mask Language Model and Next Sentence Prediction tasks which are used to pretrain BERT, one of the most popular pretrained language models. The BERT model architecture is exactly the multilayer transformer model we learned about in the last video. The special thing about BERT is how it is trained. At its input layer, BERT takes in a pair of sentences, separated by a separator, or a SEP token. BERT also has a beginning of sentence token represented by CLS BERT processes these input [Tokens](../../Skills/Web%20Development/Tokens.md) to produce representations of them at all layers of the model.
>
> **[1:35](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/pretrained-language-models?u=76281980&t=95)** At the output layer, the CLS representation represents the entire input word sequence. The output layer also has separate contextual representations for each word in the input sequence. Two specific tasks were fashioned to pretrain BERT. For the first task, some fraction of the input words are masked and BERT is required to predict those words at its output layer. This is called the Mask Language Model Task. To perform this task well, BERT needs to learn representations that capture the context in which different words appear in sentences. The second task is called the Next Sentence Prediction Task. In this task, BERT is required to predict whether the second sentence in the input naturally follows the first sentence. During training, BERT is represented with sentence pairs that follow each other from the original text, but also with random pairs of sentences which do not follow each other. The next sentence, they also like to groom themselves, naturally follows the first sentence, and so we would like BERT to predict yes for this sentence pair. In this example we have the same first sentence as the previous one. However, the second sentence, "The man wore a red shirt," clearly doesn't have anything to do with the first sentence and so we'd like BERT to predict no for this sentence pair.
>
> **[3:10](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/pretrained-language-models?u=76281980&t=190)** To perform the next sentence prediction task, BERT needs to understand sentence meaning and the context in which sentences occur in paragraphs. When BERT is trained on the Mask Language Model and Next Sentence Prediction Task, using hundreds of millions of sentences with billions of words, it [Forms](../../Skills/Web%20Development/Forms.md) an extremely powerful representation of language. This pretrained BERT model can then be further trained for different target tasks in a process called [Fine Tuning](../../Skills/Software%20Development/Fine%20Tuning.md). For example, the target task might be to determine if a movie review is positive or negative. We would have a small number of labeled examples of positive and negative movie reviews, and we'd used this data to fine tune the already pretrained BERT language model. The input to BERT would just be the text corresponding to the movie review, and the output would be either a positive or negative label, depending on whether the review was positive or negative. Another target task is that of textual entailment. In textual entailment, the model needs to predict whether the second sentence is true, false, or neutral, given the first sentence. In the example shown in this figure, the second sentence, "Pat is a dog," is true. Given that the first sentence says, "Pat is a small brown dog." In this example, we see a false entailment
>
> **[4:43](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/pretrained-language-models?u=76281980&t=283)** because the second sentence, "Pat is a dolphin," cannot be true given that the first sentence tells us, "Pat is a small brown dog." Pretrained language models based upon the transformer architecture have become the state of the art in today's [natural language processing](../../Skills/Artificial%20Intelligence%20(AI)/Natural%20Language%20Processing%20(NLP).md) tasks. By training on a large amount of unsupervised data, pretrained language models form an extremely powerful representation of language. They can then be fine tuned on several target tasks. We described two different fine tuning tasks, classification and entailment. However, there are several other target tasks such as name identity recognition, question answering, and part of speech tagging. At [LinkedIn](../../Skills/Web%20Development/LinkedIn.md), we make use of many of these tasks to process things like queries, posts, member profiles, and job descriptions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (3), [Fine Tuning](../../Skills/Software%20Development/Fine%20Tuning.md) (2), [Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Neural%20Networks.md) (1), [Large language models](../../Skills/Artificial%20Intelligence%20(AI)/Large%20Language%20Models%20(LLM).md) (1), [Tokens](../../Skills/Web%20Development/Tokens.md) (1)
> **Env Vars:** bert (18), cls (2), sep (1)
> **Definitions:** is a  (4), is called (2)
> **Analogies:** such as (2), for example (1)
> **Prerequisites:** required to (2)
> **CLI Commands:** make (1)
> **Cross-References:** in the last (1)
> **Speakers:** - [instructor] (1)


### 4. Graph Neural Networks

[↑ Back to Table of Contents](#table-of-contents)

#### [Motivation and introduction](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/motivation-and-introduction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/motivation-and-introduction?u=76281980&t=0)** - [Instructor] Let's introduce the field of Graph [Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Neural%20Networks.md), where we apply deep neural networks to graph structure data to solve a variety of prediction problems. Throughout this course, we've seen several methods for working with sequential data like recurrent neural networks and transformers for text, which is a sequence of words or characters. We've also seen methods for working with two-dimensional data like [convolutional neural networks](../../Skills/Artificial%20Intelligence%20(AI)/Convolutional%20Neural%20Networks%20(CNN).md) for images, which we can conceive of as a grid of pixels. However, many kinds of data are more naturally represented using a graph. Formally speaking, a graph or network graph is a data structure defined by a set of nodes or vertices, and set of links or edges connecting them. Graphs are the most expressive type of data we've looked at so far. Sequences and images can even be viewed as restricted kinds of graphs, where each position is represented as a node and connected only to the adjacent positions. Of course, graphs can also have connection between arbitrary pairs of nodes, making their structure much more variable. Taking advantage of this more complex structure is one of the reasons to use graph neural networks, which we also call GNNs. Let's consider a social graph, where the nodes are people, and edges indicate which people know each other. Imagine a single node that represents yourself. We could add a node for everyone you know, and connect those nodes to your node to represent that relationship. In graph terminology, the set of nodes directly connected to a given node is called a neighborhood,
>
> **[1:36](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/motivation-and-introduction?u=76281980&t=96)** which will be an important concept in graph neural networks as we'll see. Naturally, some of the folks you know probably also know each other, so we can add edges between their nodes. Now, we can expand the graph to include all the friends of your friends and all the ways in which they are connected to everyone already in the graph. If we kept going like this, we could expand the social graph to include millions or even billions of people from around the world as some modern social networks do. Building on this basic social graph, we can add other types of nodes, like interests and edges showing which people have which interests. We can now use the social graph to answer questions. For example, to answer the question of whether person A knows person B, we could query the graph to see if there is an edge between the nodes A and B. Similarly, we can find all the interests of person A by searching for all the interest nodes in the graph that are connected to person A's node. This works if the graph contains every person and all their interests. But in the real world, the information in graph data sets is often incomplete and noisy, so we need to go beyond simply inspecting the structure of the graph to making predictions about its contents. For instance, some nodes in an online social network graph might be bots, not actual humans. If we can label some of the nodes as humans, H, and others as bots, B, we can use these nodes as instances for a [Supervised Learning](../../Skills/Artificial%20Intelligence%20(AI)/Supervised%20Learning.md) problem.
>
> **[3:11](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/motivation-and-introduction?u=76281980&t=191)** This is an example of node classification. In general, with graph neural networks, we'll be able to learn embeddings for nodes in a graph that we can use for a variety of node level prediction problems. Even when the data in the graph is accurate, it's often incomplete. In real life, social network users connect with only some of the people they know, and indicate only some of the interests they have, but based on patterns observed for other users, we could make educated guesses about whether a person has a certain interest, or is connected to a certain other person. These are examples of link prediction. When using GNNs for link prediction, we can infer a [Probability](../../Skills/Data%20Science/Probability.md) that any two nodes in the graph are linked in a particular way. These predicted links could be used to fill in missing data in the graph or to make recommendations, such as interest a given person might want to explore. Next, we'll see how we can learn unsupervised embeddings for nodes in a graph, and then how GNNs can solve supervised prediction problems like these.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Neural%20Networks.md) (6), [Convolutional neural networks](../../Skills/Artificial%20Intelligence%20(AI)/Convolutional%20Neural%20Networks%20(CNN).md) (1), [Supervised Learning](../../Skills/Artificial%20Intelligence%20(AI)/Supervised%20Learning.md) (1), [Probability](../../Skills/Data%20Science/Probability.md) (1)
> **CLI Commands:** node (8), make (2), find (1)
> **Definitions:** is a  (2), is an  (2), is called (1)
> **Analogies:** imagine (1), for example (1), for instance (1), such as (1)
> **Speakers:** - [instructor] (1)

#### [Node embeddings](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/node-embeddings?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/node-embeddings?u=76281980&t=0)** - [Instructor] In this video we'll look at ways we can learn embeddings for nodes in a graph. These techniques produce generic embeddings that encode information about the graph structure. After training, these unsupervised embeddings can be used for a variety of prediction problems. While we often represent graphs visually it's important to remember that graphs are logical [Data Structures](../../Skills/Software%20Development/Data%20Structures.md) defined by the set of nodes and edges they contain. The two graphs shown here are actually the same graph. I've just moved the nodes around. In a sense this is what we're doing when we learn node embeddings. We're assigning each node to a point in an embedding space. Depending on the embedding approach, the same node might end up in very different places. In general, embedding techniques allow us to map our space of items into an embedding space in such a way that the distance between any two items in the embedding space represents their similarity. It's important to understand that there's no single correct way to create node embedding some graphs. A variety of techniques are used depending on which nodes we see as similar to each other. Let's look at a couple of examples of different but equally valid ways of thinking about similarity between nodes in a graph. Using a social graph for illustration in this social graph, nodes represent people and their interests, for people to be similar it might mean that they share similar interests and are connected to similar sets of people the way person A and person B are, in the example here. We might consider two interests to be similar if many of the same people are interested in them
>
> **[1:33](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/node-embeddings?u=76281980&t=93)** like interest one and interest two in this example. This version of similarity represents structural similarity where nodes are similar to each other 'cause they stand in the same relationship to other nodes in the graph. On the other hand, we might take a different view of similarity based on the idea that people tend to connect to others because they have things in common. In this scenario, also known as homophily, we would want to learn an embedding space where connected nodes are closer to each other than nodes that aren't connected. Applying this version of similarity to our social graph, we might end up with an embedding space like the one shown here. Let's compare these two ways of embedding the same graph. We can see that certain nodes, like one and two that were close together in the first embedding space are far apart in the second version, simply because they're not directly connected. As this example illustrates, the same graph can lead to a very different set of node embeddings, depending on how we define similarity between nodes. Taking the latter view of similarity where connected nodes are seen as similar to each other. Let's turn to how we might learn embeddings for the nodes in any given graph. We'll now describe an iterative procedure for learning node embeddings. We start by initializing the node of embeddings randomly as shown here, and then refine them with each iteration until convergence or the point when they stop changing very much. The key with any such iterative procedure is how to update the embedding values during each iteration.
>
> **[3:08](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/node-embeddings?u=76281980&t=188)** Since we're working with a definition of similarity in which connected nodes are seen as more similar and unconnected nodes as less similar we can take every pair of nodes in the graph as a training example. Pairs of nodes that are directly connected in the graph become positive training examples, and pairs of nodes that aren't directly connected are negative examples. Now, on each iteration, we can examine each pair of nodes in turn. If it's a positive example meaning the nodes were connected in the graph we move the embeddings of both nodes slightly closer together like this. If it's a negative example meaning the nodes were not connected in the graph we move the embeddings of both nodes slightly further apart like this. As an analogy, think of the positive pairs of nodes as attracting each other and the negative pairs of nodes as repelling each other. Early on the nodes might move around a lot as they're being pulled and pushed by many other nodes but over time they'll settle down. After we've processed all the positive and negative examples in this way, we complete the iteration. The embedding space might look something like this. We could either repeat this note embedding update procedure for a fixed number of iterations or we could compare the embeddings before and after each iteration and stop when they've changed less than a certain amount, meaning the training has converged. So we've learned a basic iterative approach for deriving node embeddings from the connections
>
> **[4:42](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/node-embeddings?u=76281980&t=282)** in a graph. Methods like this can be effective for fixed graphs, but consider what would happen if we were to add some new nodes to the graph like node four here. We wouldn't immediately know where to put the new nodes in the embedding space because what we have learned is simply a mapping from the existing nodes to their embeddings. We could, of course rerun the entire training process starting over with random embeddings for all the nodes but this could get very expensive, especially if we are repeatedly adding a small number of nodes to a very large graph, which often happens in real life social networks. In the next video, we'll look at graph neural network methods that are able to compute embeddings for new nodes in the graph by combining embeddings for existing nodes.

> [!info]- Semantic Content
>
> **CLI Commands:** node (9)
> **Analogies:** similar to (2)
> **Cross-References:** in the next (1)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)

#### [Graph neural networks](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/graph-neural-networks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/graph-neural-networks?u=76281980&t=0)** - [Narrator] Thinking back on the supervised neural network approaches we've seen, there is a basic pattern at work. The first stage is to convert a complex data structure, such as a document or an image, into a fixed-length vector, or embedding. The architecture of the deep neural network chosen here depends on the specific data structure we're working with. In the second stage, the embedding is then transformed into a prediction for a supervised prediction problem. This part of the network is defined by the prediction problem itself. So we might use a softmax classifier for a classification problem, for example. During training, the entire network can be optimized to best solve the supervised objective. Graph [Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Neural%20Networks.md), or GNNs, apply the same pattern to making predictions about nodes in a graph. GNNs can learn node embeddings as part of a single end-to-end supervised neural network that solves a specific prediction problem. In supervised settings, this ability to optimize all the parameters against the supervised objective can be an advantage over the unsupervised node embedding approaches we saw in the previous video, which can encode generic properties of the graph structure. Let's look at an example GNN for a node classification problem. We'll build up our GNN starting from a single node, like node A in this graph. In the GNN context, we consider each node to be associated with a feature vector X, as well as a set of edges connecting it to other nodes. Given that, the simplest way we could build a node classifier would be
>
> **[1:32](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/graph-neural-networks?u=76281980&t=92)** to use a basic feed-forward neural network, like a multi-layer perceptron, or MLP, to transform the feature vector X into an embedding for the node and then apply a standard classifier over this embedding. But this would not be a true GNN, as we can see that it does not consider the graph structure. The model would make the same prediction for any two nodes with the same feature vector, regardless of where they are in the graph. How can we incorporate the graph structure into the neural network architecture? We can extend the approach to involve the node's neighbors by applying the same kind of MLP transformation to each of their feature vectors and then aggregating those embeddings together into a neighborhood embedding via a pooling operation. The simplest pooling operation would be to average the embeddings of the neighbor nodes. Now, we can concatenate the embedding for the neighborhood with the feature vector for our current node and feed that into the MLP to create our embedding for node A, which is then fed to the classifier as before. Before going further, it's worth pausing to consider what we've done with this seemingly simple change. We have created a node embedding that incorporates both the features of the current node and those of the nodes it's connected to in the graph, its neighborhood. The structure of this neural network, its computation graph, is now dependent on the structure of the original graph. In social graph terms, that means that the embedding for a person would include information about which people and interests they're directly connected to. We can extend this pattern even further
>
> **[3:04](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/graph-neural-networks?u=76281980&t=184)** by including the neighbors' neighbors into the network's computation graph. In this version, I've hidden the neighborhood pooling layers for simplicity. Each time we add another layer like this, we're making the GNN more expressive in two ways. First, the network gets deeper, adding more nonlinear layers. Second, the sets of nodes and edges that influence the current node's embedding increases significantly. At this point, the embedding for node A is already influenced by all the other nodes in the example graph, sometimes via multiple paths. Unlike in the previous video, the GNN approach we've just described can be used to make predictions for any new nodes added to the network or, in general, reapplied after the graph structure changes. This is because it can translate the new graph structure into a new computation graph and then apply the learned network parameters in the new computation graph to generate a different prediction. Let's say we've trained the network parameters on the original graph, and then we add a node F to the graph, as shown here. We can generate an embedding for F using the graph structure and the MLP parameters we've already learned and make classification predictions for F right away. The embeddings of the existing nodes in the graph will also be changed, as their computation graphs will now include node F and be influenced by its features and connections. To recap, in this series of videos, we covered some graph fundamentals and introduced core graph prediction problems,
>
> **[4:37](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/graph-neural-networks?u=76281980&t=277)** like node classification. Then we looked at different ways of understanding similarity between nodes in a graph and how we might learn unsupervised embeddings that encode the graph structure. Finally, we introduced graph neural networks, or GNNs, a powerful family of techniques where the structure of computation in the neural network is dictated by the structure of the original graph. GNNs can then learn node embeddings as part of end-to-end training within a specific prediction problem.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Neural%20Networks.md) (2)
> **CLI Commands:** node (19), make (3)
> **Env Vars:** gnn (6), mlp (4)
> **Cross-References:** previous video (2), we covered (1)
> **Definitions:** is a  (1), means that (1)
> **Analogies:** such as (1), for example (1)
> **Speakers:** - [narrator] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Continuing the AI-100 learning path](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/continuing-the-ai-100-learning-path?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/continuing-the-ai-100-learning-path?u=76281980&t=0)** - [Ananth] You've reached the end of this course. Congratulations.
>
> **[0:03](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/continuing-the-ai-100-learning-path?u=76281980&t=3)** - [Daniel] Now that you understand the basics of some of the most popular neural network architectures, we hope you'll continue on your journey by delving deeply into specific models that may be of interest to you or the problems you are solving.
>
> **[0:15](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/continuing-the-ai-100-learning-path?u=76281980&t=15)** - [Ananth] If anything in this course was particularly interesting or relevant to you, check out the [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning Library to dive deeper into that topic.
>
> **[0:24](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/continuing-the-ai-100-learning-path?u=76281980&t=24)** - [Daniel] Also, check out the final course in the AI Academy 100 series where I and some of our other LinkedIn AI staff discuss how we apply these concepts to problems right here at LinkedIn. I'm Daniel Hewlett.
>
> **[0:37](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/continuing-the-ai-100-learning-path?u=76281980&t=37)** - I'm Ananth Sankar.
>
> **[0:38](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/continuing-the-ai-100-learning-path?u=76281980&t=38)** - [Daniel And we really enjoyed helping you along your AI journey. Thanks so much.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (3)
> **Speakers:** - [ananth] (2), - [daniel] (2), - i (1), - [daniel (1)


## Instructor

- [Daniel Hewlett](../../Instructors/Artificial%20Intelligence%20(AI)/Daniel%20Hewlett.md)
- [Ananth Sankar](../../Instructors/Artificial%20Intelligence%20(AI)/Ananth%20Sankar.md)

## Skills Covered

- Supervised Learning
- Artificial Intelligence (AI)
- Artificial Neural Networks

## Path Context

### In [LinkedIn's AI Academy](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/LinkedIn's%20AI%20Academy.md)
← [Linkedin Ai Academy Ai 100 1 Demystifying Ai](Linkedin%20Ai%20Academy%20Ai%20100%201%20Demystifying%20Ai.md) | **2 of 3** | [LinkedIn AI Academy AI-100- 3 Scaling AI at LinkedIn](LinkedIn%20AI%20Academy%20AI-100-%203%20Scaling%20AI%20at%20LinkedIn.md) →

## Appears In

- [LinkedIn's AI Academy](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/LinkedIn's%20AI%20Academy.md)

## Related Courses

_Courses sharing skills:_

- [AI Workshop- Build a Neural Network with PyTorch Lightning](AI%20Workshop-%20Build%20a%20Neural%20Network%20with%20PyTorch%20Lightning.md) — Artificial Intelligence (AI), Artificial Neural Networks
- [AI Workshop- Hands-on with GANs Using Dense Neural Networks (2023)](AI%20Workshop-%20Hands-on%20with%20GANs%20Using%20Dense%20Neural%20Networks%20(2023).md) — Artificial Intelligence (AI), Artificial Neural Networks
- [AI Workshop- Build a Neural Network with PyTorch Lightning (2023)](AI%20Workshop-%20Build%20a%20Neural%20Network%20with%20PyTorch%20Lightning%20(2023).md) — Artificial Intelligence (AI), Artificial Neural Networks
- [Creating a Book Search Engine from Scratch Using Java and GitHub Copilot](Creating%20a%20Book%20Search%20Engine%20from%20Scratch%20Using%20Java%20and%20GitHub%20Copilot.md) — Artificial Intelligence (AI)
- [Exploring the Future of Development with GitHub Copilot Workspace](Exploring%20the%20Future%20of%20Development%20with%20GitHub%20Copilot%20Workspace.md) — Artificial Intelligence (AI)

---

[↑ Back to top](#)