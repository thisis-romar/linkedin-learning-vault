---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: wavelet-analysis-concepts-with-wolfram-language
url: "https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language"
duration_minutes: 49
duration: 49m
level: Intermediate
updated: 1/4/2024
learners: 1928
skills:
  - Wolfram Language
  - Data Analysis
  - Wavelets
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQFiaBB_pigY-w/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1703566623914?e=2147483647&amp;v=beta&amp;t=HRnpld-3VXy-rRNqi5rgAwlcIpy6qp_5cFSdUYV73Qk"
linkedin_topic: Data Science
learning_paths:
  - '[[Build Your Wolfram Language Skills]]'
prev_courses:
  - '[[Quantile and Box-Whisker Plots in the Wolfram Language]]'
next_courses:
  - '[[Wavelet Analysis- Applications with Wolfram Language]]'
path_nav: '[{"path":"Build Your Wolfram Language Skills","position":3,"total":8,"prev":"Quantile and Box-Whisker Plots in the Wolfram Language","next":"Wavelet Analysis- Applications with Wolfram Language"}]'
path_count: 1
tags:
  - course
  - topic/data-science
  - skill/wolfram-language
  - skill/data-analysis
  - skill/wavelets
status: not-started
created: 2026-04-28
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Wavelet%20Analysis-%20Concepts%20with%20Wolfram%20Language.md)

![Wavelet Analysis: Concepts with Wolfram Language](https://media.licdn.com/dms/image/v2/D560DAQFiaBB_pigY-w/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1703566623914?e=2147483647&amp;v=beta&amp;t=HRnpld-3VXy-rRNqi5rgAwlcIpy6qp_5cFSdUYV73Qk)

# Wavelet Analysis: Concepts with Wolfram Language

> Wavelets decompose a signal into approximations and details at different scales, making them useful for applications such as data compression, detecting features and removing noise from signals. This course from Wolfram Research explains some of the theory behind continuous, discrete, and stationary wavelet transforms and demonstrates how the Wolfram Language and its built-in functions can be used

> [LinkedIn Learning](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language) | 49m | Intermediate | 2K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#1. Introduction]]** (1 videos)
- **[[#2. 1. Continuous Wavelet Transform]]** (1 videos)
- **[[#3. 2. Discrete Wavelets]]** (1 videos)
- **[[#4. 3. Wavelet Filter Bank]]** (1 videos)
- **[[#5. 4. Discrete Wavelet Data]]** (1 videos)
- **[[#6. 5. Wavelet Best Basis]]** (1 videos)
- **[[#7. 6. Wavelet Thresholding]]** (1 videos)
- **[[#8. References]]** (1 videos)

### 1. Introduction

#### Introduction
> [LinkedIn Learning](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/introduction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/introduction?u=76281980&t=0)** Hello, everyone.
>
> **[0:01](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/introduction?u=76281980&t=1)** Welcome to the seminar on Wavelet Analysis with a focus on the concepts associated with wavelets.
>
> **[0:06](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/introduction?u=76281980&t=6)** My name is Paritosh Mokhasi.
>
> **[0:08](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/introduction?u=76281980&t=8)** I'm part of the Wolfram Kernel Technology group.
>
> **[0:10](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/introduction?u=76281980&t=10)** And in today's seminar, we are going to look at various concepts associated with wavelets.
>
> **[0:16](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/introduction?u=76281980&t=16)** We're going to look at continuous wavelet transforms, look at discrete wavelets, do some analysis on discrete wavelet transforms, talk about standard and packet transforms associated with discrete wavelet transforms, talk about stationary wavelet transforms and the algorithms associated with them, and finally, we shall talk about certain visualizations associated with wavelet analysis.
>
> **[0:41](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/introduction?u=76281980&t=41)** The visualizations themselves will be incorporated during the duration of the seminar.
>
> **[0:48](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/introduction?u=76281980&t=48)** So you'll get a fairly good idea about what the visualization capabilities are.
>
> **[0:52](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/introduction?u=76281980&t=52)** So in order to introduce the idea of wavelet analysis, it would be prudent to first talk about free analysis.
>
> **[1:00](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/introduction?u=76281980&t=60)** A Fourier transform decomposes a signal into its principal sine and cosine components, and converts the time series from a time domain to a frequency domain, indicating which frequencies are present in the signal.
>
> **[1:13](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/introduction?u=76281980&t=73)** This is performed relatively using direct Fourier transform and an inverse Fourier transforms and shown here.
>
> **[1:20](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/introduction?u=76281980&t=80)** So as an example, let us consider a signal which consists of two frequencies at 40 and 80 hertz.
>
> **[1:27](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/introduction?u=76281980&t=87)** And we have what is called as a stationary data.
>
> **[1:30](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/introduction?u=76281980&t=90)** When you take a Fourier transform of this data on the Fourier domain, you see two peaks, one at 40 and one at 80 hertz.
>
> **[1:38](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/introduction?u=76281980&t=98)** So this kind of information tells us that at all instances in time, a signal at 40 and a signal at 80 hertz was present.
>
> **[1:46](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/introduction?u=76281980&t=106)** Now let us look at a second example.
>
> **[1:50](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/introduction?u=76281980&t=110)** In this example, we are going to consider what is called as a non-stationary data.
>
> **[1:54](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/introduction?u=76281980&t=114)** And in this non-stationary data, the frequency changes as a function of time, meaning that from the time t = 0 to time t = 2, we have a signal with a certain frequency. From 2 to 4, it's of certain frequency and 4 to 6, it's of a different frequency.
>
> **[2:09](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/introduction?u=76281980&t=129)** If you perform a Fourier transform on this signal, you end up getting three peaks, but this does not give you the complete information.
>
> **[2:16](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/introduction?u=76281980&t=136)** This tells you that there are three frequencies that are available that were present in the signal, but it does not tell you at what instances in time did this frequency occur.
>
> **[2:25](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/introduction?u=76281980&t=145)** So the information that is provided to you by Fourier transform is incomplete.
>
> **[2:30](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/introduction?u=76281980&t=150)** So in order to overcome these kind of problems, people started making use of windowed Fourier transform and short-time Fourier transforms to get some kind of temporal information.
>
> **[2:40](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/introduction?u=76281980&t=160)** So if you were to perform a short-time Fourier transform, the way you would do it is to take the signal and window it such that the window covers a certain part of the signal and take from that signal, windowed signal, take a Fourier transform that gives you a certain frequency.
>
> **[2:55](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/introduction?u=76281980&t=175)** Then you take this window, move it by time t, and perform the Fourier transform again and again.
>
> **[3:02](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/introduction?u=76281980&t=182)** And a repeated application of this will give you a short-time Fourier transform.
>
> **[3:07](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/introduction?u=76281980&t=187)** And that gives you some kind of information about at what instance in time, what frequency might have taken place.
>
> **[3:12](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/introduction?u=76281980&t=192)** The problem with such an approach is that you need to understand how to select the window size, how to translate the window, and so on.
>
> **[3:21](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/introduction?u=76281980&t=201)** This brings us to the concept of wavelet analysis.
>
> **[3:25](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/introduction?u=76281980&t=205)** In wavelet analysis, we decompose a signal into a set of different scales rather than frequencies, and this scales can provide a very good understanding of where a certain event took place in a given signal.
>
> **[3:39](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/introduction?u=76281980&t=219)** So in order to decompose the signal, we make use of a combination of scaling functions, which is denoted by the Greek letter phi, and a set of wavelet functions, which is denoted by the Greek letter psi.
>
> **[3:53](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/introduction?u=76281980&t=233)** When you perform a wavelet analysis, the main signal is decomposed into a set of coarse coefficients and detail coefficients.
>
> **[4:03](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/introduction?u=76281980&t=243)** The coarse coefficients in themselves are further decomposed into what are called as level 2 coarse and detail coefficients.
>
> **[4:11](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/introduction?u=76281980&t=251)** And when you repeat this process over and over again for the highest level coarse and detail coefficients, you end up with an analysis called as the multi-resolution analysis.
>
> **[4:22](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/introduction?u=76281980&t=262)** So as an example, let us consider a non-stationary signal which is given by this data.
>
> **[4:28](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/introduction?u=76281980&t=268)** And you can see from 0 to 2, there is a certain frequency at a certain amplitude, 2 to 4, certain frequency and certain amplitude.
>
> **[4:35](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/introduction?u=76281980&t=275)** When you perform a continuous wavelet transform on this signal, you end up getting a result that looks like this.
>
> **[4:41](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/introduction?u=76281980&t=281)** What you're looking at here is called as a Wavelet Scalogram.
>
> **[4:44](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/introduction?u=76281980&t=284)** And you can see here, that from 0 to 2, x being the time axis, you can see that there is a band that represents that a certain frequency occurred with a certain amplitude from 0 to 2.
>
> **[4:56](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/introduction?u=76281980&t=296)** From 2 to 4, you see a different band at a different scale, the y-axis being the scale, with a different amplitude saying that there was a different frequency existing from 2 to 4, similarly, from 4 to 6.
>
> **[5:09](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/introduction?u=76281980&t=309)** So, therefore, this information gives us information that frequencies happened at certain intervals in time, and also gives us information at what amplitude that they occurred.
>
> **[5:21](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/introduction?u=76281980&t=321)** If you do this same analysis, but using a discrete wavelet transform on the same data, the result is something as follows.
>
> **[5:29](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/introduction?u=76281980&t=329)** Wherein, instead of getting a continuous spectrum, as you saw in the earlier case, you get what are called as different scales and each one of these scales is able to decompose specific feature in the original signal.
>
> **[5:44](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/introduction?u=76281980&t=344)** So this brings us to the time and frequency resolution analysis.
>
> **[5:48](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/introduction?u=76281980&t=348)** Some of the fundamental questions that one should ask when performing any kind of time series analysis is what kind of features are you looking for in a signal, and what is the purpose of the analysis?
>
> **[5:59](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/introduction?u=76281980&t=359)** If you're interested only in the frequency component in a signal, then Fourier transform does the job most of the time.
>
> **[6:06](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/introduction?u=76281980&t=366)** If instead, you are interested in looking at specific features that existed in a signal and at what amplitude and for what duration, then something like a wavelet transformation would be the way to go.
>
> **[6:17](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/introduction?u=76281980&t=377)** So with that as a brief background on what to expect from wavelet analysis, let's actually look into some of the details associated with it.
>
> **[6:27](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/introduction?u=76281980&t=387)** So the first question we need to ask ourselves is, what are wavelets?
>
> **[6:30](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/introduction?u=76281980&t=390)** Wavelets are nothing but short-lived wavelike oscillations.
>
> **[6:33](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/introduction?u=76281980&t=393)** It starts from zero, oscillates or wiggles for a certain finite duration and then goes back to zero.
>
> **[6:40](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/introduction?u=76281980&t=400)** So as an example, in Mathematica, we represent all our wavelet functions as wavelet psi.
>
> **[6:47](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/introduction?u=76281980&t=407)** In this case, I'm going to plot a MexicanHatWavelet of order 1 from -5 to 5.
>
> **[6:53](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/introduction?u=76281980&t=413)** When I evaluate this, you can see that it starts from zero, wiggles, and goes down to zero.
>
> **[6:59](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/introduction?u=76281980&t=419)** Depending upon what kind of applications you're using, you could either make use of real valued wavelet functions or complex wavelet functions.
>
> **[7:07](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/introduction?u=76281980&t=427)** Here is an example of a complex wavelet function.
>
> **[7:10](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/introduction?u=76281980&t=430)** The red line being the real part, the dotted line being the imaginary part.
>
> **[7:15](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/introduction?u=76281980&t=435)** There are a number of properties that are associated with wavelets.
>
> **[7:20](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/introduction?u=76281980&t=440)** The first idea is that wavelets have compact support, which means that they're localized in space and frequency domain, making it extremely suitable for detecting features, performing image compression, et cetera.
>
> **[7:33](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/introduction?u=76281980&t=453)** They are also based on multi-resolution analysis, meaning that you perform different levels of decomposition.
>
> **[7:41](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/introduction?u=76281980&t=461)** And finally, the wavelets themselves are characterized by a family of functions.
>
> **[7:45](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/introduction?u=76281980&t=465)** And these are dependent upon the vanishing moment of the wavelets.
>
> **[7:49](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/introduction?u=76281980&t=469)** The higher the vanishing moment of a certain wavelet, the smoother a wavelet function is going to be.
>
> **[7:55](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/introduction?u=76281980&t=475)** In order to perform any kind of wavelet analysis, and more specifically multi-resolution analysis, the wavelets must be scaled and translated.
>
> **[8:04](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/introduction?u=76281980&t=484)** Here is a manipulate that demonstrates how these wavelets are scaled and manipulated.
>
> **[8:09](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/introduction?u=76281980&t=489)** In this case, we are going to make use of the DGaussianWavelet of order 10.
>
> **[8:14](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/introduction?u=76281980&t=494)** And the translation takes place through this parameter k, which basically is subtracted by the continuous variable x.
>
> **[8:23](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/introduction?u=76281980&t=503)** And you can see here that as I move k, it moves from left to right.
>
> **[8:29](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/introduction?u=76281980&t=509)** Scaling, on the other hand, makes the wavelet short or large.
>
> **[8:35](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/introduction?u=76281980&t=515)** And from this different combinations of scalings and translations, we end up with a series of basis functions which are further used for our wavelet analysis.
>
> **[8:46](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/introduction?u=76281980&t=526)** So this brings us to the idea of continuous wavelet transforms.
>
> **[8:51](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/introduction?u=76281980&t=531)** So let's look at continuous wavelet transforms and how they are performed in Mathematica.
>
> **[8:57](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/introduction?u=76281980&t=537)** In continuous wavelet transform, the signal is decomposed using translation and scaling of a single wavelet.
>
> **[9:04](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/introduction?u=76281980&t=544)** The single wavelet being psi here. And this single-wavelet function is sometimes referred to as the mother wavelet.
>
> **[9:11](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/introduction?u=76281980&t=551)** The resulting transformation that you see here is in the form of a convolution, and the result is in the form of different scales and translations.
>
> **[9:20](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/introduction?u=76281980&t=560)** Here are a list of some of the popular wavelets that are used in research work and in time series analysis.
>
> **[9:27](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/introduction?u=76281980&t=567)** You have already been introduced to the MexicanHatWavelet.
>
> **[9:30](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/introduction?u=76281980&t=570)** There's PaulWavelet, the derivative of a Gaussian wavelet, also called as a DGaussian, MorletWavelets, GaborWavelets, and so on.
>
> **[9:37](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/introduction?u=76281980&t=577)** So we're going to look at a few of these later.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), function (4), case, (3), finally, (2), this. (1)
> **Definitions:** is a  (3), is called (2), is an  (1), means that (1)
> **CLI Commands:** make (3)
> **Cross-References:** as you saw (1)
> **UI Navigation:** select the (1)


### 2. 1. Continuous Wavelet Transform

#### Continuous wavelet transform
> [LinkedIn Learning](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/continuous-wavelet-transform?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/continuous-wavelet-transform?u=76281980&t=1)** So now let us look at some of the basics of performing a continuous wavelet transform in Mathematica.
>
> **[0:06](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/continuous-wavelet-transform?u=76281980&t=6)** Let us consider a simple sine function which is discretized over a certain range, as shown by this plot.
>
> **[0:14](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/continuous-wavelet-transform?u=76281980&t=14)** When you take the data, which is given by the sine range of 40 divided by 5, and you perform a continuous wavelet transform on this, you get the result in the form of an object.
>
> **[0:26](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/continuous-wavelet-transform?u=76281980&t=26)** This is because it contains a lot more additional information that users can access.
>
> **[0:32](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/continuous-wavelet-transform?u=76281980&t=32)** The best way to represent and visualize the result that has been just done using the continuous wavelet transform is to make use of a wavelet scalogram.
>
> **[0:43](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/continuous-wavelet-transform?u=76281980&t=43)** The scalogram represents the data in terms of octaves and voices.
>
> **[0:48](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/continuous-wavelet-transform?u=76281980&t=48)** So when I evaluate this, you see that {1, 1}, {2, 1}, {3, 1}, {4, 1}.
>
> **[0:52](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/continuous-wavelet-transform?u=76281980&t=52)** The first index is associated with the octave, second index is associated with a voice.
>
> **[0:58](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/continuous-wavelet-transform?u=76281980&t=58)** Between two octaves, you'll see that there are four bands and that represents voices. So between each octave you have four voices.
>
> **[1:08](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/continuous-wavelet-transform?u=76281980&t=68)** You can extract certain properties associated with the wavelet analysis.
>
> **[1:13](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/continuous-wavelet-transform?u=76281980&t=73)** For example, each octave and voice pair is associated with a certain scale.
>
> **[1:20](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/continuous-wavelet-transform?u=76281980&t=80)** And you can extract that by asking for the property scales.
>
> **[1:24](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/continuous-wavelet-transform?u=76281980&t=84)** And the result is what you see here.
>
> **[1:28](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/continuous-wavelet-transform?u=76281980&t=88)** If you take the inverse continuous wavelet transform of our transform function and compare it with the original signal, you will notice that it comes down accurately down to zero, which means that it's able to perform a perfect reconstruction.
>
> **[1:43](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/continuous-wavelet-transform?u=76281980&t=103)** You can access many of the properties from the continuous wavelet transform.
>
> **[1:48](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/continuous-wavelet-transform?u=76281980&t=108)** The first of them being accessing what are called as the wavelet coefficients.
>
> **[1:53](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/continuous-wavelet-transform?u=76281980&t=113)** Recall that coefficients are the coarse and the detail coefficients that that come about from the wavelet transformation.
>
> **[2:01](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/continuous-wavelet-transform?u=76281980&t=121)** So in this case, we are going to perform a continuous wavelet transformation.
>
> **[2:05](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/continuous-wavelet-transform?u=76281980&t=125)** And by making use of normal, we can access the coefficients at different octaves and voices.
>
> **[2:14](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/continuous-wavelet-transform?u=76281980&t=134)** We can do the same thing by using the all argument and you get the similar result.
>
> **[2:21](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/continuous-wavelet-transform?u=76281980&t=141)** You can extract specific coefficients using the pattern.
>
> **[2:25](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/continuous-wavelet-transform?u=76281980&t=145)** In this case, I'm going to extract all the coefficients that end with 1.
>
> **[2:30](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/continuous-wavelet-transform?u=76281980&t=150)** And these are the results, {1, 1} and {2, 1}.
>
> **[2:32](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/continuous-wavelet-transform?u=76281980&t=152)** You can extract several different wavelet coefficients by explicitly specifying which one of the octave and voice pair you would like, which you can see here, or you can extract all the coefficients which match a certain pattern, which is seen here.
>
> **[2:50](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/continuous-wavelet-transform?u=76281980&t=170)** Certain properties associated with wavelet transforms.
>
> **[2:55](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/continuous-wavelet-transform?u=76281980&t=175)** Let us consider this, a continuous wavelet transform of the sine (t^2) function taken over an interval of -3π to 3π.
>
> **[3:04](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/continuous-wavelet-transform?u=76281980&t=184)** We are going to make use of a MexicanHatWavelet, eight octaves will be used, and one voice per octave.
>
> **[3:11](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/continuous-wavelet-transform?u=76281980&t=191)** We're going to perform the continuous wavelet transform, and we are going to make use of list plot in order to visualize all the coefficients that have been computed.
>
> **[3:21](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/continuous-wavelet-transform?u=76281980&t=201)** And here is the result.
>
> **[3:22](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/continuous-wavelet-transform?u=76281980&t=202)** So, previously, we were looking at these in the form of a number.
>
> **[3:25](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/continuous-wavelet-transform?u=76281980&t=205)** But given that the length of the list is 1024, it's not practical to print out all the numbers, so we visualize it using a list plot.
>
> **[3:34](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/continuous-wavelet-transform?u=76281980&t=214)** You can get the dimension of the input data that was fed into the continuous wavelet transform by using data dimension property, and that comes out being 1024.
>
> **[3:44](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/continuous-wavelet-transform?u=76281980&t=224)** Finally, I'd like to talk about WaveletMapIndexed.
>
> **[3:49](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/continuous-wavelet-transform?u=76281980&t=229)** This important function in Mathematica allows us to manipulate the wavelet coefficients that have been computed using continuous or discrete wavelet transforms.
>
> **[3:58](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/continuous-wavelet-transform?u=76281980&t=238)** The reason why we would like to manipulate the coefficients is so that, many at times we are interested in detecting certain features, doing some analysis on the coefficients and WaveletMapIndexed becomes extremely important.
>
> **[4:11](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/continuous-wavelet-transform?u=76281980&t=251)** So to demonstrate the use of WaveletMapIndexed, let us perform a continuous wavelet transform on a list of four elements, {1, 2, 3, 4}.
>
> **[4:21](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/continuous-wavelet-transform?u=76281980&t=261)** And when you... Now, we make use of WaveletMapIndexed to take all the coefficients that have been computed from the continuous wavelet transform, and multiply that by a result of 0.2.
>
> **[4:32](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/continuous-wavelet-transform?u=76281980&t=272)** This gives us a modified continuous wavelet transform, and when you take an inverse transform of this modified transform, you get a result that is different from the original data, which was {1, 2, 3, 4}, and now the result is {2.2, 2.4, 2.6, 2.8}.
>
> **[4:49](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/continuous-wavelet-transform?u=76281980&t=289)** So using just a single line, we are able to modify the coefficients.
>
> **[4:57](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/continuous-wavelet-transform?u=76281980&t=297)** So now that we have talked about the continuous wavelet transform, let us now look at the octave, voices, and scales that are associated with continuous wavelet transform.
>
> **[5:10](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/continuous-wavelet-transform?u=76281980&t=310)** By default, in the continuous wavelet transform, the number of octaves that are selected is based on the length of the list, and that is given by this formula of log2(n/2).
>
> **[5:21](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/continuous-wavelet-transform?u=76281980&t=321)** The number of voices by default is taken to be four.
>
> **[5:24](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/continuous-wavelet-transform?u=76281980&t=324)** So if I were to do a continuous wavelet transform and check how many octaves and voices I have, it turns out to be four octaves, four voices.
>
> **[5:33](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/continuous-wavelet-transform?u=76281980&t=333)** And if you were to compute it manually, you can see that the length of the list was 40, and a log2(20) gives you a result of four.
>
> **[5:43](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/continuous-wavelet-transform?u=76281980&t=343)** Each one of the octaves and voices are associated with a certain scale.
>
> **[5:48](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/continuous-wavelet-transform?u=76281980&t=348)** The general rule is that the higher the octave, the higher scale, and the scale itself is computed using the following formula: Alpha times two times octave minus one, times two times the voice divided by number of voices.
>
> **[6:03](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/continuous-wavelet-transform?u=76281980&t=363)** The term alpha here is called as the smallest wavelet scale.
>
> **[6:08](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/continuous-wavelet-transform?u=76281980&t=368)** So if you were to compute the scales associated with the octaves and voices pair using the above formula, you'll see that they are identical to the ones that are obtained using the property.
>
> **[6:22](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/continuous-wavelet-transform?u=76281980&t=382)** The term alpha, which was just mentioned, is associated with the smallest wavelet scale, and that in turn depends on the type of wavelet that is being used and the center frequency associated with that wavelet.
>
> **[6:35](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/continuous-wavelet-transform?u=76281980&t=395)** So you can extract out which wavelet was used using the property wavelet.
>
> **[6:40](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/continuous-wavelet-transform?u=76281980&t=400)** And for that wavelet, you can get a property called as a Fourier factor.
>
> **[6:44](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/continuous-wavelet-transform?u=76281980&t=404)** And an inverse of that gives you the wavelet scale, which you can see here.
>
> **[6:50](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/continuous-wavelet-transform?u=76281980&t=410)** So, in general, the way you remember what scales do is, the higher the scale it resolves lower frequencies, lower scales resolve higher frequencies.
>
> **[7:03](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/continuous-wavelet-transform?u=76281980&t=423)** So think about scale like being a microscope.
>
> **[7:06](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/continuous-wavelet-transform?u=76281980&t=426)** When you are dealing with different magnifications, a lower magnification will show you a complete picture, but it might not be able to give you as many details.
>
> **[7:16](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/continuous-wavelet-transform?u=76281980&t=436)** On the other hand, when you increase the magnification, you won't be able to see the entire signal, but you'll be able to focus on the details on that signal.
>
> **[7:25](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/continuous-wavelet-transform?u=76281980&t=445)** So as an example, let us consider a signal which is just a simple sine function.
>
> **[7:30](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/continuous-wavelet-transform?u=76281980&t=450)** And at some instance in time, you have this really sharp peak occurring in the signal. When you perform a wavelet transformation on this and visualize it using wavelet scalogram, you see a result that looks like this.
>
> **[7:44](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/continuous-wavelet-transform?u=76281980&t=464)** You'll notice a couple of things here.
>
> **[7:47](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/continuous-wavelet-transform?u=76281980&t=467)** Remember, higher scales are associated with higher octaves, and eight one would essentially capture the sine function which is associated with the yellow band.
>
> **[8:01](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/continuous-wavelet-transform?u=76281980&t=481)** As you increase or rather decrease the octaves, you can see that a peak starts to rise and the magnification is now increasing, and you are able to now get a localized description of when the sharp peak occurred in the signal.
>
> **[8:19](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/continuous-wavelet-transform?u=76281980&t=499)** And so based on this wavelet scalogram, you can get not only the information about the lower odd frequencies, but also when a sharp event occurred and at what instance in time that event occurred.
>
> **[8:35](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/continuous-wavelet-transform?u=76281980&t=515)** Let us now talk about relating the scales and frequencies that you get from the continuous wavelet transform.
>
> **[8:42](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/continuous-wavelet-transform?u=76281980&t=522)** In order to demonstrate the relationship, I'm going to make use of an example of a simple sinusoidal function which has a single frequency.
>
> **[8:50](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/continuous-wavelet-transform?u=76281980&t=530)** I'm going to call it generateData.
>
> **[8:52](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/continuous-wavelet-transform?u=76281980&t=532)** I'm going to further construct some more functions wherein I'm going to define a wavelet which is defined by a GaborWavelet, but I'm going to keep the order as a variable that I can input.
>
> **[9:03](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/continuous-wavelet-transform?u=76281980&t=543)** And I'm going to perform a certain continuous wavelet transform based on the order of the wavelet and the amount of, and the frequency of the data.
>
> **[9:12](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/continuous-wavelet-transform?u=76281980&t=552)** So in this case, cwt1 represents the continuous wavelet transform when the frequency is 10.
>
> **[9:22](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/continuous-wavelet-transform?u=76281980&t=562)** If you were to take the scales... There is an inverse relationship that exists between the scales and frequency.
>
> **[9:30](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/continuous-wavelet-transform?u=76281980&t=570)** So you can take the scales, multiply it by the Fourier factor, which is also associated with the center frequency of the GaborWavelet of order 6, which is what we are using here, and you can get the resulting frequency.
>
> **[9:45](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/continuous-wavelet-transform?u=76281980&t=585)** So when you put this all together such that now I have a manipulate, where in the manipulate, I can manipulate the order of the wavelet as well as the frequency of the signal, I get a scalogram that looks like this.
>
> **[9:59](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/continuous-wavelet-transform?u=76281980&t=599)** Remember that in this case we have only one frequency, so the scalogram will have only one band.
>
> **[10:05](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/continuous-wavelet-transform?u=76281980&t=605)** And the frequency is 10 hertz and the scalogram hovers around between 6 and 13, and with the mean being somewhere near 10.
>
> **[10:14](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/continuous-wavelet-transform?u=76281980&t=614)** If I increase the order of the wavelet, the band becomes sharper and sharper, and you can see that it converges to a result very close to 10.
>
> **[10:22](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/continuous-wavelet-transform?u=76281980&t=622)** Increasing the frequency of this signal, you can see that the wavelet scalogram moves the band upwards and is able to match up the frequency that is in the original signal.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), function (7), this, (3), case, (3), this. (2)
> **CLI Commands:** make (5)
> **Versions:** 0.2 (1), 2.2 (1), 2.4 (1), 2.6 (1), 2.8 (1)
> **Definitions:** means that (1), is called (1), is an  (1)
> **Analogies:** for example (1), picture (1)
> **Code Identifiers:** generatedata (1)
> **Best Practices:** general rule (1)


### 3. 2. Discrete Wavelets

#### Discrete wavelets
> [LinkedIn Learning](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/discrete-wavelets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/discrete-wavelets?u=76281980&t=0)** Now that we have talked about continuous wavelet transform, let's focus our attention on discrete wavelet and discrete wavelet packet transforms.
>
> **[0:09](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/discrete-wavelets?u=76281980&t=9)** In continuous wavelet transforms, we looked at wavelet functions, and scaling and translation of those wavelet functions allowed us to perform the continuous wavelet transforms. In discrete wavelet transforms, we introduced the concept of a scaling function.
>
> **[0:25](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/discrete-wavelets?u=76281980&t=25)** The scaling function is basically meant to act as a low-pass filter in order to fill the gaps in the spectrum.
>
> **[0:34](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/discrete-wavelets?u=76281980&t=34)** The scaling function follows a certain recursive relationship wherein a scaling function at any time, any instance x, is dependent on the scaling functions with certain translations.
>
> **[0:48](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/discrete-wavelets?u=76281980&t=48)** The coefficients a_n here are called as the low-pass filter coefficients.
>
> **[0:53](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/discrete-wavelets?u=76281980&t=53)** So in Mathematica, we denote the scaling functions as WaveletPhi.
>
> **[0:58](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/discrete-wavelets?u=76281980&t=58)** In this case, we are interested in looking at what the scaling function looks like for HaarWavelet.
>
> **[1:03](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/discrete-wavelets?u=76281980&t=63)** And we are interested in getting the exact answer, hence the working precision to infinity.
>
> **[1:08](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/discrete-wavelets?u=76281980&t=68)** And it comes out as just a step function.
>
> **[1:11](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/discrete-wavelets?u=76281980&t=71)** You can get the same information of perhaps a DaubechiesWavelet of order 4, and you get the result in the form of an interpolating function, because there is no closed-form expression for the DaubechiesWavelet, the scaling function for DaubechiesWavelet.
>
> **[1:26](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/discrete-wavelets?u=76281980&t=86)** But you'd still be interested in performing some analysis, and hence getting the answer in the form of an interpolating function is very useful.
>
> **[1:34](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/discrete-wavelets?u=76281980&t=94)** You can plot what the DaubechiesWavelet scaling function looks like, and here is the result for that.
>
> **[1:40](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/discrete-wavelets?u=76281980&t=100)** Remember that I mentioned that the scaling function is associated with low-pass filtering.
>
> **[1:46](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/discrete-wavelets?u=76281980&t=106)** You can get the low-pass filter coefficients using Mathematica's function, WaveletFilterCoefficients.
>
> **[1:52](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/discrete-wavelets?u=76281980&t=112)** And because we are dealing with low-pass filter coefficients, we can give the option of PrimalLowpass and get the result.
>
> **[1:59](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/discrete-wavelets?u=76281980&t=119)** The first coefficient in this list of lists indicates the translation and the second one indicates the amplitude.
>
> **[2:08](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/discrete-wavelets?u=76281980&t=128)** So if I were to scroll back up, the n is the first index, and the a_n is the second component of the list.
>
> **[2:15](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/discrete-wavelets?u=76281980&t=135)** You can actually use the information that you got from the WaveletFilterCoefficients in order to construct your scaling functions, which is done over here.
>
> **[2:26](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/discrete-wavelets?u=76281980&t=146)** Using the formula that was shown to you earlier, and you can, when you compare the result with what is obtained directly from Mathematica, you can see that they are identical.
>
> **[2:35](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/discrete-wavelets?u=76281980&t=155)** So it's a question of how much detail you want to go into when you're doing your analysis.
>
> **[2:41](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/discrete-wavelets?u=76281980&t=161)** Another property when dealing with scaling function is to remember that the low-pass filter coefficients always sum to unity, which is shown here.
>
> **[2:52](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/discrete-wavelets?u=76281980&t=172)** Wavelet functions, similar to scaling functions, also follow a certain recursion relationship, which is given here.
>
> **[3:00](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/discrete-wavelets?u=76281980&t=180)** But notice that the recursion relationship requires that you need the scaling functions and certain coefficients.
>
> **[3:08](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/discrete-wavelets?u=76281980&t=188)** These coefficients are called as the high pass filter coefficients.
>
> **[3:12](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/discrete-wavelets?u=76281980&t=192)** The wavelet functions are represented by the Mathematica built-in function called as WaveletPsi.
>
> **[3:18](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/discrete-wavelets?u=76281980&t=198)** In this case, we are interested in looking at the HaarWavelet, and you can see that it again represents a step function.
>
> **[3:26](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/discrete-wavelets?u=76281980&t=206)** For the DaubechiesWavelet, you don't have a closed-form expression and hence you end up getting an interpolating function.
>
> **[3:33](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/discrete-wavelets?u=76281980&t=213)** And if you were to plot it, it looks as follows.
>
> **[3:37](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/discrete-wavelets?u=76281980&t=217)** You can access the filter coefficients, which are denoted by the coefficients b_n as indicated here, using the WaveletFilterCoefficients with the option of PrimalHighpass.
>
> **[3:52](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/discrete-wavelets?u=76281980&t=232)** And you see the results as follows.
>
> **[3:55](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/discrete-wavelets?u=76281980&t=235)** You can construct your own wavelet functions along with the scaling functions and these wavelet filter coefficients in order to compare the results with what Mathematica gives you using its inbuilt functions.
>
> **[4:10](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/discrete-wavelets?u=76281980&t=250)** When you plot that... So just to keep in mind, you can see that the left one is what we have computed using the recursion relationship, the right one is what we got from Mathematica's built-in routines.
>
> **[4:29](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/discrete-wavelets?u=76281980&t=269)** Another important property that you must recall is that the high pass filter coefficients will always sum to zero, as seen here.
>
> **[4:38](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/discrete-wavelets?u=76281980&t=278)** Generally, when you're dealing with wavelets, you're not restricted to one dimension, but rather multi-dimensions.
>
> **[4:44](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/discrete-wavelets?u=76281980&t=284)** And the way you do multi-dimensional wavelet analysis is by taking dyadic products of the one-dimensional wavelet functions.
>
> **[4:52](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/discrete-wavelets?u=76281980&t=292)** So, for example, if you are interested in doing a two-dimensional wavelet, you have to take an outer product of the wavelet functions with the scaling functions.
>
> **[4:59](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/discrete-wavelets?u=76281980&t=299)** So you end up getting four basis functions, which is a combination of phi times phi, phi times psi, psi times phi, and psi times psi.

> [!info]- Semantic Content
>
> **Code Keywords:** function (16), pass (8), case, (2), let (1)
> **Analogies:** similar to (1), for example (1)
> **Definitions:** is a  (1)
> **Warnings:** keep in mind (1)


### 4. 3. Wavelet Filter Bank

#### Wavelet filter bank
> [LinkedIn Learning](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-filter-bank?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-filter-bank?u=76281980&t=0)** Let us now talk about the wavelet filter bank.
>
> **[0:02](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-filter-bank?u=76281980&t=2)** We earlier introduced the concept of low-pass and high-pass filter.
>
> **[0:06](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-filter-bank?u=76281980&t=6)** The low-pass filter is associated with the scaling function, the high-pass filter is associated with the wavelet function.
>
> **[0:13](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-filter-bank?u=76281980&t=13)** So, as an example, let us make use of the HaarWavelet and look at what the coefficients associated with the HaarWavelets are.
>
> **[0:20](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-filter-bank?u=76281980&t=20)** To get the low-pass filter coefficients, you simply make use of WaveletFilterCoefficients and access the low-pass coefficients, and you see that the result is {1/2, 1/2}.
>
> **[0:31](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-filter-bank?u=76281980&t=31)** When you apply this to the original time series, you end up getting a formula that looks like this.
>
> **[0:36](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-filter-bank?u=76281980&t=36)** And on further inspection, this turns out to be a moving average of a time series, which has the effect of dampening out higher order terms or higher frequency terms, hence the term of low-pass filter.
>
> **[0:49](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-filter-bank?u=76281980&t=49)** You can have a look at the frequency response of this function by applying this moving average to a pure sinusoidal function with a certain frequency, ω.
>
> **[1:01](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-filter-bank?u=76281980&t=61)** When you apply... So we are going to represent x(t) as exponential itω, apply the moving average to it, and after some algebraic manipulation, the low-pass frequency function response looks like this.
>
> **[1:14](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-filter-bank?u=76281980&t=74)** It's got a cos(ω/2)e^-iω/2 Plotting this, you'll see that at ω = 0, it's able to capture everything.
>
> **[1:24](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-filter-bank?u=76281980&t=84)** But as you move to the tail end of -π and π, it's unable to capture any information, hence the term of low-pass filter.
>
> **[1:31](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-filter-bank?u=76281980&t=91)** Similarly, for high-pass filter, in order to extract the coefficients, with an example for HaarWavelets, you need to access the high-pass coefficients.
>
> **[1:41](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-filter-bank?u=76281980&t=101)** When you look at the coefficients, you notice that the coefficients are 1/2 and -1/2.
>
> **[1:45](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-filter-bank?u=76281980&t=105)** Applying that formula to our time series, you get a formula that is associated with moving differences.
>
> **[1:53](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-filter-bank?u=76281980&t=113)** When you perform a frequency response of this moving difference on a pure frequency, ω, and do some algebra on that, you notice that the high-pass frequency response function looks as follows.
>
> **[2:06](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-filter-bank?u=76281980&t=126)** It's got a sin(ω/2)ie^-iω/2 Plotting this frequency response function gives us the following information.
>
> **[2:16](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-filter-bank?u=76281980&t=136)** At ω = 0, it's unable to capture any information, but as you move to omega -π or π, it's able to capture all the information, hence the idea of high-pass filter.
>
> **[2:30](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-filter-bank?u=76281980&t=150)** At this point, I'd like you to recall that when we were performing continuous wavelet transform, we had to make use of one wavelet function, and we translated and scaled that.
>
> **[2:39](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-filter-bank?u=76281980&t=159)** When you are performing discrete wavelet transformation, a similar kind of operation is performed.
>
> **[2:44](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-filter-bank?u=76281980&t=164)** But now that operation is performed both on the scaling function as well as on the wavelet functions.
>
> **[2:50](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-filter-bank?u=76281980&t=170)** The scaling is done by taking 2^j, where j takes on certain integer values and the translation k.
>
> **[3:00](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-filter-bank?u=76281980&t=180)** The scaling are also called as dilations, meaning that it tells us how narrow or how wide a certain scaling function or wavelet function ought to be.
>
> **[3:12](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-filter-bank?u=76281980&t=192)** The translation basically moves the wavelet function left or right.
>
> **[3:16](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-filter-bank?u=76281980&t=196)** A similar formula holds true for the wavelet functions as well, wherein a family of wavelet functions is represented through a series of dilations and translations.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (13), function (12), let (2), this. (2), this, (1)
> **CLI Commands:** make (3)


### 5. 4. Discrete Wavelet Data

#### Discrete wavelet data
> [LinkedIn Learning](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/discrete-wavelet-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/discrete-wavelet-data?u=76281980&t=0)** So now let us look at some of the theory that goes behind the discrete wavelet transform.
>
> **[0:07](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/discrete-wavelet-data?u=76281980&t=7)** Recall that, associated with the scaling function, we have the low-pass filter coefficients which are denoted by the term a, and the high-pass filter coefficients are associated with the term b.
>
> **[0:21](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/discrete-wavelet-data?u=76281980&t=21)** When this is used with the original time series signal and a convolution is performed, you end up performing the decomposition.
>
> **[0:30](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/discrete-wavelet-data?u=76281980&t=30)** So a discrete wavelet transform takes the original signal and breaks it down into a set of coarse coefficients and detail coefficients.
>
> **[0:37](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/discrete-wavelet-data?u=76281980&t=37)** The coarse coefficients are due to a convolution with the low-pass filter coefficients, and the detail coefficients are due to the high-pass filter coefficients.
>
> **[0:49](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/discrete-wavelet-data?u=76281980&t=49)** Furthermore, the coefficients taken at a certain level can be decomposed to a j + 1 and a d + 1, the coarse and detail coefficients at level j + 1, and this analysis eventually leads to what is called as the multi-resolution analysis.
>
> **[1:06](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/discrete-wavelet-data?u=76281980&t=66)** The difference between discrete wavelet transform and discrete wavelet packet transform is that in discrete wavelet transform, the detail coefficients are left untouched, whereas in the packet transform, the detail coefficients also undergo level decomposition.
>
> **[1:25](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/discrete-wavelet-data?u=76281980&t=85)** In order to do inverse transform, we make use of the following formula, which is just a combination of the coarse coefficients at certain level and the detail coefficients at certain level.
>
> **[1:36](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/discrete-wavelet-data?u=76281980&t=96)** So let us look at an example of a simple discrete wavelet transform and a discrete wavelet packet transform.
>
> **[1:43](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/discrete-wavelet-data?u=76281980&t=103)** We are going to make use of a very simple signal which consists of zeros and just one.
>
> **[1:49](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/discrete-wavelet-data?u=76281980&t=109)** And in this case, I'm going to perform an exact computation.
>
> **[1:53](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/discrete-wavelet-data?u=76281980&t=113)** And the way we do the computation in Mathematica is using the function, DiscreteWaveletTransform.
>
> **[1:59](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/discrete-wavelet-data?u=76281980&t=119)** When you look at the TreeView, which is one of the properties of the discrete wavelet transform, it gives you the information about how the decomposition has taken place and what coefficients are required in order to perform the reconstruction.
>
> **[2:12](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/discrete-wavelet-data?u=76281980&t=132)** So you can see that it performed two levels of decomposition.
>
> **[2:15](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/discrete-wavelet-data?u=76281980&t=135)** The detail coefficients at level 1 was left untouched, and the coarse coefficients, which is denoted by 0, is decomposed into {0, 0} and {0, 1}.
>
> **[2:24](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/discrete-wavelet-data?u=76281980&t=144)** In order to get information about which basis functions to use in order to perform the reconstruction, you can make use of the property basis index to get that information, which you can see here.
>
> **[2:35](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/discrete-wavelet-data?u=76281980&t=155)** So you require the detail coefficient 1 and the coarse coefficient {0, 0} and the detail coefficient {0, 1}.
>
> **[2:42](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/discrete-wavelet-data?u=76281980&t=162)** Similarly, for packet transform, using the exact same signal but now we'll, in order to perform the discrete wavelet packet transform, we make use of the following Mathematica's built-in function.
>
> **[2:56](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/discrete-wavelet-data?u=76281980&t=176)** Evaluating this gives us the result in the form of an object because it contains various properties, one of them being TreeView.
>
> **[3:04](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/discrete-wavelet-data?u=76281980&t=184)** And now you can see that the original signal was decomposed into coarse and detail coefficients and the detail coefficients are also further decomposed.
>
> **[3:16](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/discrete-wavelet-data?u=76281980&t=196)** The blue boxes represent the basis functions that are required to perform the reconstruction, and you can get that information using basis index.
>
> **[3:27](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/discrete-wavelet-data?u=76281980&t=207)** So now that we have gotten acquainted with the concept of coarse and detail coefficients, let's go into a little details associated with the coarse and detail coefficients in discrete wavelet transform.
>
> **[3:39](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/discrete-wavelet-data?u=76281980&t=219)** So let's start with an example.
>
> **[3:41](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/discrete-wavelet-data?u=76281980&t=221)** The following example of t * sin(t^2), discretized over a range of -3π to 3π.
>
> **[3:47](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/discrete-wavelet-data?u=76281980&t=227)** The data looks as such.
>
> **[3:51](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/discrete-wavelet-data?u=76281980&t=231)** The middle of the data has got lower frequency, and as you move towards the outer edge of the signal, you get higher and higher frequencies.
>
> **[3:58](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/discrete-wavelet-data?u=76281980&t=238)** So let's look at what kind of characteristics we will notice when you perform the wavelet decomposition.
>
> **[4:06](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/discrete-wavelet-data?u=76281980&t=246)** And what will the coarse and the detail coefficients look like.
>
> **[4:10](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/discrete-wavelet-data?u=76281980&t=250)** In order to visualize the coarse and detail coefficients, we make use of the function WaveletListPlot.
>
> **[4:15](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/discrete-wavelet-data?u=76281980&t=255)** Evaluating this, we get two plots, one on the left side being the plot of the wavelet coefficients at different levels, {0, 0, 0, 0} being the coarse coefficient at the highest level, {0, 0, 0, 1} being the detail coefficient at the highest level, and so on.
>
> **[4:35](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/discrete-wavelet-data?u=76281980&t=275)** And on the right-hand side, I have the inverse transform of each one of these individual coefficients.
>
> **[4:42](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/discrete-wavelet-data?u=76281980&t=282)** If you notice the individual transforms, you'll see that they have stepped edges.
>
> **[4:46](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/discrete-wavelet-data?u=76281980&t=286)** And that's because we are making use of HaarWavelets.
>
> **[4:50](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/discrete-wavelet-data?u=76281980&t=290)** Now, if you were to observe the coarse coefficients, it is basically able to resolve the lower order frequencies or the lower frequency really well, which corresponds to the center of the signal, whereas if you look at the detail coefficients, which are associated with all the 1s here, they are able to capture the edges of the signal rather well, which is associated with the higher frequency components.
>
> **[5:15](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/discrete-wavelet-data?u=76281980&t=315)** Certain properties associated with the wavelet coefficients.
>
> **[5:22](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/discrete-wavelet-data?u=76281980&t=322)** As the decomposition takes place, at each refinement level, the data length is halved.
>
> **[5:28](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/discrete-wavelet-data?u=76281980&t=328)** So if you start with the data n at level 1, you're dealing with data length of n/2.
>
> **[5:34](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/discrete-wavelet-data?u=76281980&t=334)** At level 2, it's n/4, and so on.
>
> **[5:37](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/discrete-wavelet-data?u=76281980&t=337)** To get a better idea, you can call on the property dimensions and get information about the length of the data.
>
> **[5:46](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/discrete-wavelet-data?u=76281980&t=346)** So the original data was 1885.
>
> **[5:48](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/discrete-wavelet-data?u=76281980&t=348)** At level 0, it was halved, level 1 it was further halved, level 2 it was further halved.
>
> **[5:56](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/discrete-wavelet-data?u=76281980&t=356)** You can get information about what basis functions to use by making use of the TreeView property.
>
> **[6:05](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/discrete-wavelet-data?u=76281980&t=365)** If you are interested in reconstructing the coefficient at, for example, {0, 0, 0}, you would require information of the coarse coefficients {0, 0, 0, 0} and {0, 0, 0, 1}.
>
> **[6:19](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/discrete-wavelet-data?u=76281980&t=379)** So, for example, I can take the inverse wavelet transform of the highest order coarse coefficient and the highest order detail coefficient, and add them up and they will be equal to identically the inverse wavelet transform of the coefficients {0, 0, 0}, as you can see here by the norm.
>
> **[6:41](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/discrete-wavelet-data?u=76281980&t=401)** If you were to take the inverse wavelet transform of all the basis functions that are represented in blue and add them up, you would be able to reconstruct the signal that you originally used, which is... And you can see that the norm in this case is close to machine precision.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), function (4), pass (4), require (2), case, (1)
> **CLI Commands:** make (5)
> **Analogies:** for example (2)
> **Definitions:** is called (1)
> **Prerequisites:** required to (1)


### 6. 5. Wavelet Best Basis

#### Wavelet best basis
> [LinkedIn Learning](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-best-basis?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-best-basis?u=76281980&t=1)** So now that we have talked about the wavelet basis, we have talked about the coarse and the detail coefficients, let us now delve into the idea of what are called as Wavelet Best Basis.
>
> **[0:12](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-best-basis?u=76281980&t=12)** Wavelet best basis is essentially an optimal representation of the data in the wavelet domain, such that it minimizes a certain cost function.
>
> **[0:22](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-best-basis?u=76281980&t=22)** The applications where wavelet best basis become very prominent is in the field of denoising or data compression, or a certain image analysis.
>
> **[0:32](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-best-basis?u=76281980&t=32)** So in order to better understand wavelet best basis, let's make use of a simple example.
>
> **[0:38](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-best-basis?u=76281980&t=38)** In this case, I'm going to make use of the following example.
>
> **[0:42](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-best-basis?u=76281980&t=42)** And the idea is to perform a wavelet decomposition on this and then figure out what the wavelet best bases are.
>
> **[0:52](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-best-basis?u=76281980&t=52)** If I were to perform just a discrete wavelet transform and also a discrete wavelet packet transform and plot the tree view of that, you will notice that for a wavelet packet transform, the coarse and the detail coefficients have to be decomposed.
>
> **[1:09](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-best-basis?u=76281980&t=69)** On the other hand, for discrete wavelet transform, the detail coefficients remain untouched, which means that for the discrete wavelet transform, the bases that are required for the deconstructions are fixed.
>
> **[1:23](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-best-basis?u=76281980&t=83)** And that information can be gotten using the basis index.
>
> **[1:27](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-best-basis?u=76281980&t=87)** This is not the case for the discrete wavelet packet transform.
>
> **[1:31](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-best-basis?u=76281980&t=91)** For the discrete wavelet packet transform, the bases are not fixed.
>
> **[1:35](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-best-basis?u=76281980&t=95)** You can actually mix and match them depending upon certain criteria.
>
> **[1:40](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-best-basis?u=76281980&t=100)** For example, you have the option of using the highest order detail and coarse coefficients in order to reconstruct the signal, or you can mix and match the basis function so that you can choose a subset from the highest order, a subset from the next highest order, and so on in order to reconstruct the signal.
>
> **[1:58](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-best-basis?u=76281980&t=118)** In order to determine which one of these subsets you should use, we have to rely on a concept called as wavelet thresholding.
>
> **[2:07](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-best-basis?u=76281980&t=127)** So in this case, I'm going to introduce a certain threshold, which is 10^-5, and say that if the wavelet coefficients fall below the certain threshold, then those coefficients should be ignored.
>
> **[2:21](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-best-basis?u=76281980&t=141)** And based on that piece of information, WaveletBestBasis, which is a built-in function in Mathematica, can give us information about which basis functions would optimally be used in order to perform the best reconstruction.
>
> **[2:35](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-best-basis?u=76281980&t=155)** And in this case, the BestBasisBlockView tells us that we can use the {0, 0, 0, 0, 1} from the highest level and then the following next highest level in order to reconstruct the signal.
>
> **[2:49](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-best-basis?u=76281980&t=169)** Well, the obvious question is, what kind of advantage are we gaining when we are using this wavelet best basis?
>
> **[2:56](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-best-basis?u=76281980&t=176)** This can be represented by simply counting the non-zero values that come out from this wavelet best basis analysis.
>
> **[3:05](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-best-basis?u=76281980&t=185)** And what you see here is, you have your original data, which has almost no non-zero elements.
>
> **[3:12](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-best-basis?u=76281980&t=192)** When you use just the basic packet, there is a certain amount of compression that takes place and you get 450 terms that are non-zero.
>
> **[3:20](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-best-basis?u=76281980&t=200)** But when you make use of the wavelet best basis, it's providing a huge level of compression.
>
> **[3:26](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-best-basis?u=76281980&t=206)** And so, as you can see, there is significant amount of advantage to be had using the wavelet best basis.
>
> **[3:33](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-best-basis?u=76281980&t=213)** I would also like to point out that wavelet best basis can only be used when you are performing discrete wavelet packet transforms, because that is the only one that allows you to mix and match the basis functions that you can use.
>
> **[3:49](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-best-basis?u=76281980&t=229)** So now that we have talked about wavelet thresholding, let us look into a little bit more detail on what constitutes wavelet thresholding.
>
> **[3:58](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-best-basis?u=76281980&t=238)** In Mathematica, there are several implementations of thresholding functions.
>
> **[4:03](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-best-basis?u=76281980&t=243)** Here's the list of few of them.
>
> **[4:04](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-best-basis?u=76281980&t=244)** There's the hard threshold, soft threshold, firm, hyperbola, piecewise, smooth garrote thresholds.
>
> **[4:10](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-best-basis?u=76281980&t=250)** And associated with each one of these thresholding functions, there are a number of methods that you can use in order to compute the cost function.
>
> **[4:18](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-best-basis?u=76281980&t=258)** So there is the unbiased methods, there's the generalized cross-validation, there is the universal thresholding, and so on.
>
> **[4:25](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-best-basis?u=76281980&t=265)** So let's look at a couple of these in detail.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), function (4), case, (3)
> **CLI Commands:** make (3)
> **Definitions:** is a  (2), means that (1)
> **Analogies:** for example (1)


### 7. 6. Wavelet Thresholding

#### Wavelet thresholding
> [LinkedIn Learning](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-thresholding?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-thresholding?u=76281980&t=1)** Let's start with the basic example, wherein we are going to generate a noisy data and do some analysis on that.
>
> **[0:09](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-thresholding?u=76281980&t=9)** So this is the noisy data that we are looking at.
>
> **[0:12](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-thresholding?u=76281980&t=12)** It's basically a sine function with certain amount of noise on it.
>
> **[0:15](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-thresholding?u=76281980&t=15)** We perform a stationary wavelet transform on this.
>
> **[0:18](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-thresholding?u=76281980&t=18)** Stationary wavelet transform is something we haven't covered right now, but we will be covering in the next few slides.
>
> **[0:26](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-thresholding?u=76281980&t=26)** And now we are going to apply a certain wavelet threshold.
>
> **[0:29](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-thresholding?u=76281980&t=29)** The wavelet threshold automatically computes a certain threshold for you using a certain method, and then based on that, figures out which coefficients to keep.
>
> **[0:42](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-thresholding?u=76281980&t=42)** You can also specify yourself which method and which option you should use in order to compute the wavelet threshold.
>
> **[0:51](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-thresholding?u=76281980&t=51)** So in this case we are using a soft thresholding using the SURE algorithm.
>
> **[0:56](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-thresholding?u=76281980&t=56)** And when you perform the inverse wavelet transform and compare the result of the noisy signal that you had with the thresholded transform, you can see that this is the following result.
>
> **[1:09](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-thresholding?u=76281980&t=69)** So this is your original.
>
> **[1:10](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-thresholding?u=76281980&t=70)** This was the one that we got by default using the hard thresholding with the universal method.
>
> **[1:17](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-thresholding?u=76281980&t=77)** And you can see it does a relatively decent job.
>
> **[1:20](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-thresholding?u=76281980&t=80)** So let's compare the performance of different thresholding methods.
>
> **[1:25](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-thresholding?u=76281980&t=85)** As you can see in this manipulate, we have a certain data which is subject to a bit of noise, and there are different methods that we are using in order to see the performance.
>
> **[1:35](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-thresholding?u=76281980&t=95)** So as I increase the noise, you can see that the original data is picking up a huge amount of noise and the wavelet analysis using LiftingWaveletTransforms in this case, or we could make use of StationaryWaveletTransform.
>
> **[1:49](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-thresholding?u=76281980&t=109)** And different thresholding gives you different results.
>
> **[1:51](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-thresholding?u=76281980&t=111)** You can see that the generalized cross-validation is not doing as well, but the VisualShrink, the FDR, the SUREShrink, they seem to be doing a very good job.
>
> **[2:01](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-thresholding?u=76281980&t=121)** So now let us look at the details associated with computing the wavelet thresholds.
>
> **[2:07](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-thresholding?u=76281980&t=127)** As an example, we are going to go through the details of how Mathematica internally computes the details of the universal type thresholding.
>
> **[2:16](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-thresholding?u=76281980&t=136)** There are other methods that are out there and they have been documented.
>
> **[2:21](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-thresholding?u=76281980&t=141)** So if you are interested in how the different thresholdings work, I would highly recommend you to go to the Documentation Center.
>
> **[2:27](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-thresholding?u=76281980&t=147)** So let's look at how the thresholding value associated with the universal method works.
>
> **[2:32](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-thresholding?u=76281980&t=152)** For that, we are going to make use of a data of the tan hyperbolic.
>
> **[2:37](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-thresholding?u=76281980&t=157)** And we're going to add an amount of noise to the original data, as you can see here. We'll perform a discrete wavelet packet transform on that using the similar wavelet of order 4, and we'll perform four levels of decomposition.
>
> **[2:51](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-thresholding?u=76281980&t=171)** Now here comes the internal workings.
>
> **[2:54](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-thresholding?u=76281980&t=174)** The first thing we do is, for each one of these details, for wavelet transform, we compute the mean absolute deviation for all the detail coefficients at the first refinement level, which you can see here.
>
> **[3:08](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-thresholding?u=76281980&t=188)** Once you have computed that, then you use the following formula in order to compute the threshold.
>
> **[3:17](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-thresholding?u=76281980&t=197)** And when you apply that threshold, you get a modified wavelet transform.
>
> **[3:24](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-thresholding?u=76281980&t=204)** Of course, you can compare that with what's automatically computed internally in Mathematica using just the universal method, which we'll call as wd2.
>
> **[3:34](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-thresholding?u=76281980&t=214)** And when you compare both of them, they are identical in nature.
>
> **[3:38](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-thresholding?u=76281980&t=218)** The threshold values you get from what we have computed with what has been computed automatically inside of Mathematica.
>
> **[3:46](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-thresholding?u=76281980&t=226)** I would again emphasize that going to the documentation and getting more information on this would be extremely beneficial.
>
> **[3:53](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-thresholding?u=76281980&t=233)** Please do look under the documentation on wavelet thresholds.
>
> **[4:00](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-thresholding?u=76281980&t=240)** So let us now switch gears and talk about stationary wavelet transform and stationary wavelet packet transform.
>
> **[4:07](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-thresholding?u=76281980&t=247)** There are certain features that are associated with stationary packet transform and stationary transforms that you will find quite similar with discrete wavelet transforms, which is that the way it performs the decomposition is virtually identical.
>
> **[4:21](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-thresholding?u=76281980&t=261)** It takes a certain signal and then decomposes it into coarse and detail, and the regular stationary transform takes the coefficients and further performs the decomposition at level j + 1.
>
> **[4:34](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-thresholding?u=76281980&t=274)** The packet transform, on the other hand, also does the same operations on the detail coefficients.
>
> **[4:40](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-thresholding?u=76281980&t=280)** The formulas, you will notice, are slightly different from what we had seen in the discrete wavelet transform and the discrete wavelet packet transform, in the sense that there is a certain mode dependence in the way the convolution is performed.
>
> **[4:55](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-thresholding?u=76281980&t=295)** There are a number of wavelet families associated with stationary wavelet transform.
>
> **[5:01](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-thresholding?u=76281980&t=301)** Here is a list of some of the popular ones.
>
> **[5:03](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-thresholding?u=76281980&t=303)** So you have the DaubechiesWavelet, you have the SymletWavelet, you have the SplineWavelets, and so on.
>
> **[5:10](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-thresholding?u=76281980&t=310)** One of the most important properties of the stationary wavelet transform is the fact that it is a translation-invariant wavelet transform.
>
> **[5:19](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-thresholding?u=76281980&t=319)** What I mean by that is, let us consider a signal, which you can see here, and its corresponding wavelet transform.
>
> **[5:27](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-thresholding?u=76281980&t=327)** So in this case, notice that as I move the signal and it travels from left to right or right to left, that information of the signal traveling is captured very well by the stationary wavelet transform.
>
> **[5:41](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-thresholding?u=76281980&t=341)** This is not so when you are dealing with any other wavelet transform.
>
> **[5:45](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-thresholding?u=76281980&t=345)** This information is not captured adequately, but is done so using the stationary wavelet transform.
>
> **[5:51](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-thresholding?u=76281980&t=351)** Besides this really important property, which renders itself very suitable for detecting changes in time series, denoising, pattern recognition, and so on, it's also an undecimated wavelet transform.
>
> **[6:06](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-thresholding?u=76281980&t=366)** What I mean by that is, let us perform a stationary wavelet transform of an image using an automatically generated wavelet for us, and we'll perform three levels of decomposition.
>
> **[6:18](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-thresholding?u=76281980&t=378)** We get a result in the form of an object.
>
> **[6:21](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-thresholding?u=76281980&t=381)** And when you look at the dimensions of these coarse and detail coefficients, you'll notice that no down-sampling has taken place.
>
> **[6:30](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-thresholding?u=76281980&t=390)** So you'll notice that the 0th, the first level is 256 by 256.
>
> **[6:35](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-thresholding?u=76281980&t=395)** And if you go down to all the highest level, it's still 256 by 256.
>
> **[6:40](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-thresholding?u=76281980&t=400)** If you compare the same thing with the discrete wavelet transform and look at the dimensions associated with it, you can see that a down-sampling is taking place.
>
> **[6:49](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-thresholding?u=76281980&t=409)** This feature is rather important when you are doing image detection and feature detection.
>
> **[6:56](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-thresholding?u=76281980&t=416)** You can do a comparison of the decomposition of this image for the discrete wavelet transform and the stationary wavelet transform using the function called WaveletImagePlot.
>
> **[7:08](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-thresholding?u=76281980&t=428)** And the first one that you see here is using the stationary wavelet transform.
>
> **[7:13](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-thresholding?u=76281980&t=433)** You can see that the size of the images remain the same.
>
> **[7:16](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-thresholding?u=76281980&t=436)** Whereas when you compare that with the transformation done by the discrete wavelet transform, you can see that the size of the image decreases as the coefficients go to the highest level.
>
> **[7:31](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/wavelet-thresholding?u=76281980&t=451)** So, basically, you should be reading this plot going from lower right to upper left.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), function (2), case, (2), this. (1), switch (1)
> **CLI Commands:** make (2), find (1)
> **Documentation:** the documentation (3)
> **Env Vars:** sure (1), fdr (1)
> **Definitions:** is a  (2)
> **Cross-References:** in the next (1)
> **UI Navigation:** go to (1)


### 8. References

#### References
> [LinkedIn Learning](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/references?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/references?u=76281980&t=1)** Finally, I would like to tell you about the references that are present in order to get started with wavelet analysis.
>
> **[0:08](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/references?u=76281980&t=8)** This is a fairly new topic which has been around for perhaps 40-45 years, but it's coming into its own just in the past 10-15 years.
>
> **[0:18](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/references?u=76281980&t=18)** And you can see the applications in various places.
>
> **[0:22](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/references?u=76281980&t=22)** Here are a list of references that are available, which can give you information about the different concepts associated with wavelets, how you can use that for whatever purposes.
>
> **[0:33](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/references?u=76281980&t=33)** Supposing you're interested in doing some analysis using signal processing, the book by Mallat is a really good one.
>
> **[0:41](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/references?u=76281980&t=41)** And there are also a number of application references that I have put over here for your benefit.
>
> **[0:49](https://www.linkedin.com/learning/wavelet-analysis-concepts-with-wolfram-language/references?u=76281980&t=49)** If you do have any questions, I would ask you to write it to us at training@[wolfram.com](https://wolfram.com), and we'd be more than happy to answer any questions that you might have with regards to wavelet analysis.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2)
> **Code Keywords:** finally, (1)
> **URLs:** [wolfram.com](https://wolfram.com) (1)


## Instructor

- [[Wolfram Research]]

## Skills Covered

- Wolfram Language
- Data Analysis
- Wavelets

## Path Context

### In [[Build Your Wolfram Language Skills]]
← [[Quantile and Box-Whisker Plots in the Wolfram Language]] | **3 of 8** | [[Wavelet Analysis- Applications with Wolfram Language]] →

## Appears In

- [[Build Your Wolfram Language Skills]]

## Related Courses

_Courses sharing skills:_

- [[Wavelet Analysis- Applications with Wolfram Language]] — Data Analysis, Wolfram Language, Wavelets
- [[Quantile and Box-Whisker Plots in the Wolfram Language]] — Data Analysis, Wolfram Language
- [[Intermediate SQL- Data Reporting and Analysis]] — Data Analysis
- [[Data Analysis- Investigate with SQL]] — Data Analysis
- [[Advanced SQL for Data Scientists]] — Data Analysis

---

[↑ Back to top](#)